"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DirectMessages-bfd49e49"],
    {
        507990: (e, t, s) => {
            s.d(t, { Y: () => r });
            const r = { newUntrustedWithSocialProof: 0, newUntrustedWithoutSocialProof: 0, oldUntrustedWithSocialProof: 0, oldUntrustedWithoutSocialProof: 0 };
        },
        958602: (e, t, s) => {
            s.d(t, { I: () => n });
            var r = s(323265),
                o = s(389071),
                a = s(189953);
            const n =
                ({ analytics: e, conversationKey: t }) =>
                async (e, s, { api: n, featureSwitches: i }) => {
                    const c = (0, o.bD)(t),
                        u = c.selectStatus(s());
                    if (!(u === a.Q_.TYPING || u === a.Q_.WAITING)) return Promise.resolve();
                    const d = c.selectConversationId(s()) || void 0,
                        l = c.selectMetadataForMessageId(s(), "currentResponse"),
                        g = l?.agentChatItemId || void 0;
                    await e(c.abortMessage());
                    const E = { responses: [], systemPromptName: "", grokModelOptionId: "", conversationId: d, responseToChatItemId: g, isCancel: !0 },
                        _ = !r.ZP.isTwitterApp() && i.isTrue("responsive_web_grok_api_enable_grok_host");
                    return n.fetchClient.dispatch("/2/grok/add_response.json", { method: "POST", credentials: "include", body: JSON.stringify(E) }, _ ? "https://grok.x.com" : void 0).then(async (e) => {});
                };
        },
        250781: (e, t, s) => {
            s.d(t, { D: () => g });
            s(890103), s(136728), s(875640), s(543673), s(240753), s(128399);
            var r = s(323265),
                o = s(397159),
                a = s(774717),
                n = s(623494),
                i = s(836255),
                c = s(919022),
                u = s(52570),
                d = s(155918);
            s(571372);
            const l = (e) => {
                    const t = [];
                    let s = !1,
                        r = Date.now();
                    const o = [];
                    let a = 20;
                    const n = () => {
                            const e = (() => {
                                    const e = Date.now();
                                    for (; o.length > 0 && o[0] < e - 50; ) o.shift();
                                    return o.length / 0.05;
                                })(),
                                s = Math.max(e, t.length);
                            (a = s > 0 ? Math.max(0, 1e3 / s) : 0), (r = Date.now());
                        },
                        i = async () => {
                            for (s = !0; t.length > 0; ) {
                                const e = t.shift();
                                e && e();
                                const s = a;
                                await new Promise((e) => setTimeout(e, s));
                            }
                            s = !1;
                        };
                    return {
                        resumingDispatch: (e) => {
                            const a = Date.now();
                            o.push(a), t.push(e), a - r >= 50 && n(), s || i();
                        },
                        abortQueue: () => {
                            (t.length = 0), (s = !1), (o.length = 0);
                        },
                    };
                },
                g = async ({ analytics: e, api: t, dispatch: s, eventTag: g, featureSwitches: S, flags: p, grokModule: m, method: R = "POST", requestBody: h, requestParams: T }) => {
                    const I = S.isTrue("responsive_web_grok_download_favicons"),
                        f = g ? ` (${g})` : "",
                        w = (function () {
                            const e = `grok-${r.ZP.isTwitterApp() ? (r.ZP.isAndroid() ? "android" : "ios") : "web"}:api-handler`,
                                t = a.P_();
                            function s(s) {
                                a.IM(`${e}:${s}`, t.end());
                            }
                            const o = new Set();
                            function n(e) {
                                o.has(e) || (o.add(e), s(e));
                            }
                            return { record: s, recordOnce: n };
                        })(),
                        A = Date.now();
                    let b = !1,
                        C = new AbortController();
                    s(m.setAbortController(C));
                    let O = !1;
                    const k = l(s),
                        U = [""],
                        N = [""];
                    let y = !0,
                        M = !1;
                    const P = new d.EG();
                    P.setRequestedCount(h.imageGenerationCount || 0),
                        (function ({ dispatch: e, grokModule: t, responses: s }) {
                            const r = s[s.length - 1];
                            if (r && r.fileAttachments && r.fileAttachments.length) {
                                const s = r.fileAttachments.find((e) => e.url && e.mimeType.startsWith("image"));
                                s &&
                                    (s.dimensions
                                        ? e(t.setExpectedImageAspectRatio(s.dimensions.width / s.dimensions.height))
                                        : s.url &&
                                          ((o = s.url),
                                          new Promise((e, t) => {
                                              const s = new Image();
                                              (s.src = o),
                                                  (s.onload = () => {
                                                      const t = { width: s.width, height: s.height };
                                                      e(t);
                                                  }),
                                                  (s.onerror = () => {
                                                      t(new Error("Failed to load the image"));
                                                  });
                                          })).then((s) => {
                                              e(t.setExpectedImageAspectRatio(s.width / s.height));
                                          }));
                            }
                            var o;
                        })({ responses: h.responses, grokModule: m, dispatch: s });
                    const v = new o.fQ({ deepsearchArgs: h.deepsearchArgs, isDeepsearch: h.isDeepsearch });
                    let G = [],
                        F = [],
                        L = "",
                        D = !1,
                        K = 0,
                        H = !1,
                        x = !1;
                    const Q = async ({ method: r, requestParams: a }) => {
                            const l = (function ({ method: e, requestParams: t }) {
                                const s = (e) => {
                                    const t = new URLSearchParams();
                                    for (const [s, r] of Object.entries(e)) t.append(s, String(r));
                                    return t.toString();
                                };
                                let r = "/2/grok/add_response.json";
                                if ("GET" === e && t) {
                                    const e = s(t);
                                    e && (r += `?${e}`);
                                }
                                return r;
                            })({ method: r, requestParams: a });
                            t.fetchClient
                                .dispatch(l, { method: r, credentials: "include", params: "GET" === r ? a : null, body: "POST" === r ? JSON.stringify(h) : null, signal: C?.signal, keepalive: p?.enableKeepalive }, p?.enableGrokApiHost ? "https://grok.x.com" : void 0)
                                .then(async (t) => {
                                    const a = t.headers.get("x-transaction-id");
                                    if ((a && s(m.updatePerformanceMetrics({ traceId: a })), !t.ok)) {
                                        w.record(`http-${t.status}`);
                                        const r = (0, u.bY)(t.status);
                                        return s(m.grokResponseError(r)), void (0, n.Uk)(e, `add-response failed with status ${t.status}${f}`);
                                    }
                                    const l = t.body?.getReader();
                                    if (!l) return s(m.grokResponseError(u.NE)), void (0, n.Uk)(e, `reader was not found${f}`);
                                    const g = new TextDecoder();
                                    let E = "";
                                    const S = setTimeout(() => {
                                            (0, n.eS)(e, !0);
                                        }, 5e3),
                                        R = await l.read();
                                    return (
                                        clearTimeout(S),
                                        (async function t({ done: a, value: S }) {
                                            if (a) {
                                                H = !1;
                                                if ((!U.length || U.every((e) => "" === e)) && !D) {
                                                    const t = `add-response failed to reach the network${f}`;
                                                    return v.isDeepsearch && _({ messageStepAccumulator: v, analytics: e, dispatch: s, errorMessage: t, grokModule: m, resumabilityQueue: k, method: r }), s(m.grokResponseError(u.NE)), (0, n.Uk)(e, t), void w.record("network-error");
                                                }
                                                w.record("time-to-last-chunk"),
                                                    (function ({ analytics: e, dispatch: t, grokModule: s, isUnifiedReasoningLayout: r, messageStepAccumulator: o, method: a, resumabilityQueue: i }) {
                                                        o.isDeepsearch &&
                                                            (function ({ analytics: e, dispatch: t, grokModule: s, isUnifiedReasoningLayout: r, messageStepAccumulator: o }) {
                                                                if ("PENDING" === o.state) return;
                                                                o.complete(!r), t(s.grokResponseMessageStepAccumulatorUpdate(o)), (0, n.y6)(e, o.getStreamDuration());
                                                            })({ messageStepAccumulator: o, analytics: e, dispatch: t, grokModule: s, isUnifiedReasoningLayout: r });
                                                        "GET" === a ? (i.resumingDispatch(() => t(s.updatePerformanceMetrics({ endStreamTime: Date.now() }))), i.resumingDispatch(() => t(s.grokResponseComplete()))) : "POST" === a && (t(s.updatePerformanceMetrics({ endStreamTime: Date.now() })), t(s.grokResponseComplete()));
                                                    })({ messageStepAccumulator: v, analytics: e, dispatch: s, grokModule: m, method: r, resumabilityQueue: k, isUnifiedReasoningLayout: x });
                                            }
                                            if (S) {
                                                w.recordOnce("time-to-first-chunk"), b || ((b = !0), s(m.updatePerformanceMetrics({ timeToFirstChunkMs: Date.now() - A })));
                                                const a = g.decode(S);
                                                if (((E += a), E.includes("\n"))) {
                                                    const t = E.split("\n");
                                                    E = t.pop();
                                                    for (const a of t)
                                                        if (O || "GET" !== r) {
                                                            const t = JSON.parse(a);
                                                            if ((t.result?.messageTag && (t.result.messageTag = t.result.messageTag.toLowerCase()), t.result?.uiLayout?.reasoningUILayout)) {
                                                                const e = t.result.uiLayout.reasoningUILayout;
                                                                s(m.setReasoningLayout(e)), (x = "UNIFIED" === e);
                                                            }
                                                            const n = t.result?.sideBySideIndex ?? 0;
                                                            if ((null == t.result?.sideBySideIndex || M || (U.push(""), N.push(""), s(m.setUsingExperiment(!0)), (M = !0)), t.result?.query && s(m.queryTyping(t.result.query)), t.result?.bannerMessage && s(m.addBannerMessage(t.result.bannerMessage)), t.result?.xPostIds && (F.push(...(t.result.xPostIds || [])), (F = F.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(i.Z.fetchMultiple(F)), s(m.grokResponsePosts(F, n))), t.result?.xMediaPostIds)) {
                                                                const e = t.result.xMediaPostIds;
                                                                s(i.Z.fetchMultiple(e)), s(m.grokResponseMediaPosts(e));
                                                            }
                                                            if (t.result?.postIds) s(m.grokResponsePosts(t.result.postIds, n));
                                                            else if (t.result?.message && (!t.result?.messageTag || t.result?.messageTag === o.iS.FINAL)) {
                                                                const e = !U[n];
                                                                t.result?.isThinking ? (N[n] += t.result.message) : (U[n] += t.result.message), e && s(m.updatePerformanceMetrics({ timeToFirstTextMs: Date.now() - A }));
                                                                const a = t.result?.isThinking ? N[n] : U[n],
                                                                    i = t.result?.isThinking ? "thinkingTrace" : "message";
                                                                "thinkingTrace" === i && y && (y = !1), "message" === i && N[0].length > 0 && !y && ((y = !0), "GET" === r ? k.resumingDispatch(() => s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))) : s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))), "GET" === r ? k.resumingDispatch(() => s(m.grokResponseTyping(a, i, n))) : s(m.grokResponseTyping(a, i, n)), (t.result?.messageTag === o.iS.FINAL || (t.result?.message && "STARTED" === v.state)) && (v.updateFinalAnswer({ messageTag: o.iS.FINAL, message: t.result?.message || "" }), v.complete(!x), "GET" === r ? (k.resumingDispatch(() => s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))), k.resumingDispatch(() => s(m.grokResponseMessageStepAccumulatorUpdate(v)))) : (s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() })), s(m.grokResponseMessageStepAccumulatorUpdate(v))));
                                                            }
                                                            if (("error" === t.result?.responseType && s(m.grokResponseFileAttachments([])), t.result?.imageAttachmentCount)) {
                                                                let e = t.result.imageAttachmentCount;
                                                                h.imageGenerationCount && (e = Math.min(e, h.imageGenerationCount)), P.setCount(e);
                                                            }
                                                            if ((t.result?.imageWidth && t.result?.imageHeight && s(m.setExpectedImageAspectRatio(t.result?.imageWidth / t.result?.imageHeight)), "image" === t.result?.responseType || t.result?.imageAttachment?.imageUrl)) {
                                                                D = !0;
                                                                const e = t.result.imageAttachment;
                                                                P.addAttachment({ fileName: e?.fileName ?? "image", mimeType: e?.mimeType ?? "image/jpeg", mediaId: e?.mediaIdStr, url: e?.imageUrl }), s(m.grokResponseFileAttachments(P.generateAttachmentList()));
                                                            }
                                                            t.result?.feedbackLabels && s(m.grokResponseFeedbackLabels(t.result.feedbackLabels)),
                                                                t.result?.disclaimer && s(m.grokResponseDisclaimer(t.result.disclaimer)),
                                                                t.result?.followUpSuggestions && s(m.grokResponseFollowUpSuggestions(t.result.followUpSuggestions)),
                                                                t.result?.followUpSuggestedMode && s(m.grokResponseFollowUpSuggestedMode(t.result?.followUpSuggestedMode)),
                                                                t.result?.chatResponseAnnotations && s(m.grokResponseChatResponseAnnotations(t.result.chatResponseAnnotations)),
                                                                t.result?.upsell && s(m.grokResponseUpsell(t.result.upsell)),
                                                                (t.agentChatItemId || t.userChatItemId) && (t.agentChatItemId && (L = t.agentChatItemId), s(m.updatePerformanceMetrics({ startStreamTime: Date.now() })), s(m.grokResponseMetadata({ agentChatItemId: t.agentChatItemId, userChatItemId: t.userChatItemId }))),
                                                                t.result?.webResults &&
                                                                    (G.push(...(t.result?.webResults || [])),
                                                                    (G = G.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url))),
                                                                    I &&
                                                                        G.forEach((e) => {
                                                                            e.favicon || e.favicon_base64 || (e.favicon = (0, d.TK)(e.url));
                                                                        }),
                                                                    s(m.grokWebResults(G, n))),
                                                                t.result?.citedWebResults && s(m.grokCitedWebResults(t.result.citedWebResults, n));
                                                            const u = t.result?.event;
                                                            if ((u && (u.imageAttachmentUpdate && s(m.imageIntermediateResult({ ...u.imageAttachmentUpdate, progress: u.imageAttachmentUpdate.progress / 100, imageUrl: u.imageAttachmentUpdate.imageUrl })), u.imageAttachmentRemoval && (P.setAttachmentAsModerated(u.imageAttachmentRemoval.imageIdStr), s(m.grokResponseFileAttachments(P.generateAttachmentList())))), p?.enableLocation && t.result?.doLocationRequest && !h.geoLocation && s(m.grokResponseCardAttachment({ cardType: "geo_location_request" })), t.result?.cardAttachment)) {
                                                                const r = (0, d.dj)(t.result.cardAttachment, e);
                                                                if (r) {
                                                                    if ("x_posts_card" === r.cardType) {
                                                                        const e = r.post_ids,
                                                                            t = [...new Set(e)];
                                                                        (r.post_ids = t), s(i.Z.fetchMultiple(t));
                                                                    }
                                                                    if ("x_users_card" === r.cardType) {
                                                                        const e = r.user_handles,
                                                                            t = [...new Set(e)];
                                                                        (r.user_handles = t), s(c.ZP.fetchManyByScreenNames(t));
                                                                    }
                                                                    s(m.grokResponseCardAttachment(r));
                                                                }
                                                            }
                                                            if ((t.result?.memoryReferences && s(m.grokResponseMemoryReferences(t.result.memoryReferences)), t.result?.messageTag && (t.result?.message || void 0 !== t.result?.messageStepId))) {
                                                                const e = t.result?.messageTag;
                                                                e !== o.iS.FINAL && e !== o.iS.FINAL_LONG && (v.updateStepsFromRawMessage({ message: t.result?.message || "", messageTag: e, messageStepId: t.result?.messageStepId || -1, toolUsageCardId: t.result?.toolUsageCardId || "", webResults: (t.result?.webResults || []).map((e) => (I && (e.favicon || e.favicon_base64 || (e.favicon = (0, d.TK)(e.url))), e)), xPostIds: t.result?.xPostIds || [] }), "GET" === r ? k.resumingDispatch(() => s(m.grokResponseMessageStepAccumulatorUpdate(v))) : s(m.grokResponseMessageStepAccumulatorUpdate(v)));
                                                            }
                                                        } else {
                                                            const e = JSON.parse(a);
                                                            (O = !0), e.message && ((U[0] += e.message), s(m.grokResponseTyping(e.message ?? "", "message"))), e.result?.uiLayout && e.result?.uiLayout.reasoningUILayout && ((x = "UNIFIED" === e.result.uiLayout.reasoningUILayout), s(m.setReasoningLayout(e.result.uiLayout.reasoningUILayout)));
                                                            const t = new o.fQ();
                                                            if (e.messageStepsHeaders && e?.messageStepsHeaders.length > 0) {
                                                                t.defaultFinalAnswer = e.message || "";
                                                                const r = [];
                                                                for (const t of e.messageStepsHeaders) {
                                                                    const e = [];
                                                                    for (const r of t.steps) {
                                                                        const t = (r.xPostIds || []).map((e) => e),
                                                                            o = (r.webResults || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title }));
                                                                        t.length && (F.push(...t), (F = F.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(i.Z.fetchMultiple(t))), o.length && (G.push(...o), (G = G.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url)))), e.push({ header: r.header || "", assistant: r.assistant || "", decision: r.decision || "", finalMessage: r.finalMessage || "", functionCall: r.functionCall || "", rawFunctionResult: r.rawFunctionResult || "", summary: r.summary || "", webResults: o, xPostIds: t });
                                                                    }
                                                                    r.push({ header: t.header || "", steps: e });
                                                                }
                                                                t.initiateFromHistoryResponses(r, !0), s(m.grokResponseMessageStepAccumulatorUpdate(t));
                                                            }
                                                            e.thinkingTrace && ((N[0] += e.thinkingTrace), s(m.grokResponseTyping(e.thinkingTrace ?? "", "thinkingTrace")));
                                                        }
                                                }
                                                if (l) {
                                                    const s = setTimeout(() => {
                                                            (0, n.eS)(e, !1);
                                                        }, 5e3),
                                                        r = await l.read();
                                                    return clearTimeout(s), t(r);
                                                }
                                            }
                                        })(R)
                                    );
                                })
                                .catch(async (t) => {
                                    H = !1;
                                    if (t instanceof window.DOMException && "AbortError" === t.name) "STARTED" === v.state && v.isDeepsearch && (0, n.YI)(e, { durationMs: v.getStreamDuration(), messageTagCounts: v.debugMessageTagCount }), k.abortQueue(), w.record("abort");
                                    else {
                                        if (Y()) return void (await V(t.message));
                                        v.isDeepsearch && _({ messageStepAccumulator: v, analytics: e, dispatch: s, grokModule: m, resumabilityQueue: k, method: r, errorMessage: t ? t.message : void 0 }), s(m.grokResponseError(u.NE)), (0, n.kl)(e, t), w.record("error");
                                    }
                                    s(m.updatePerformanceMetrics({ endStreamTime: Date.now() })), N[0].length > 0 && s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }));
                                });
                        },
                        Y = () => {
                            const e = E(),
                                t = Boolean(h.isDeepsearch) || Boolean(h.isReasoning);
                            return !H && K < (p?.numRetries || 0) && !!L && !!e && t && "POST" === R;
                        },
                        V = async (t) => {
                            C.abort(), K++, (H = !0), (0, n.mm)(e, K, t), (C = new AbortController()), await s(m.setAbortController(C)), Q({ method: "GET", requestParams: { ...T, conversationId: E(), responseToChatItemId: L, streamInitialChunkWhole: !1 } });
                        };
                    return Q({ method: R, requestParams: T });
                };
            function E() {
                return new URLSearchParams(window.location.search).get("conversation") || "";
            }
            function _({ analytics: e, dispatch: t, errorMessage: s, grokModule: r, messageStepAccumulator: o, method: a, resumabilityQueue: i }) {
                "STARTED" === o.state && (o.onAbort(), "GET" === a ? (i.resumingDispatch(() => t(r.grokResponseMessageStepAccumulatorUpdate(o))), i.resumingDispatch(() => t(r.updatePerformanceMetrics({ deepsearchEnd: Date.now() })))) : t(r.grokResponseMessageStepAccumulatorUpdate(o)), (0, n.hq)(e, { durationMs: o.getStreamDuration(), errorMessage: s }));
            }
        },
        100326: (e, t, s) => {
            s.d(t, { X: () => i });
            s(571372);
            var r = s(834949),
                o = s.n(r),
                a = s(623494),
                n = s(52570);
            const i = ({ analysisEntityId: e, analytics: t, api: s, dispatch: r, fromShareId: i, fromUniversalSearch: c, grokModule: u }) => (
                r(u.fetchConversationIdStart()),
                s.apiClient
                    .graphQL(o(), { fromShare: i, fromUniversalSearch: c })
                    .then((s) => {
                        const o = s.create_grok_conversation?.conversation_id,
                            i = s.create_grok_conversation?.error_code;
                        if (o) return r(u.fetchConversationIdSuccess(o, e)), o;
                        if (i) throw (r(u.fetchConversationIdFailed(n.NE)), (0, a.Uk)(t, "conversation_id failed"), new Error(i));
                    })
                    .catch((e) => {
                        const t = e.errors?.[0]?.code,
                            s = (0, n.bY)(t);
                        r(u.fetchConversationIdFailed(s));
                    })
            );
        },
        96275: (e, t, s) => {
            s.d(t, { d: () => S });
            s(136728);
            var r = s(506899),
                o = s(389071),
                a = s(6157),
                n = s(171697),
                i = s(397159),
                c = s(917799),
                u = s(56519),
                d = s(836255),
                l = s(919022),
                g = s(189953),
                E = s(155918),
                _ = s(250781);
            const S =
                (e, t) =>
                (s, S, { api: p, featureSwitches: m }) => {
                    const R = m.isTrue("responsive_web_grok_download_favicons");
                    return c._O(s, { params: { restId: e }, request: p.withEndpoint(a.Z).fetchConversation })({ actionTypes: g.Lc, context: "FETCH_GROK_CONVERSATION", meta: { conversationId: e } }, (a) => {
                        if (!a?.grok_conversation_items_by_rest_id?.items) return;
                        const c = e;
                        s((0, o.Ki)(c));
                        const p = (0, o.YJ)(S(), c);
                        s(p.clearConversation()), s(p.fetchConversationIdSuccess(e));
                        const m = a?.grok_conversation_items_by_rest_id?.items ? [...a.grok_conversation_items_by_rest_id.items].reverse() : [];
                        m.forEach((a, c) => {
                            if (a.is_partial && c === m.length - 1)
                                return (
                                    s(
                                        (
                                            ({ agentChatItemId: e, analytics: t, conversationKey: s }) =>
                                            async (r, a, { api: n, featureSwitches: i }) => {
                                                const c = (0, o.bD)(s),
                                                    u = { responses: [], systemPromptName: "", grokModelOptionId: "", conversationId: s },
                                                    d = i.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                                                return (0, _.D)({ grokModule: c, requestParams: { conversationId: s, responseToChatItemId: e, streamInitialChunkWhole: !1 }, requestBody: u, dispatch: r, method: "GET", analytics: t, api: n, flags: { numRetries: d }, featureSwitches: i });
                                            }
                                        )({ conversationKey: e, agentChatItemId: a.chat_item_id ?? "", analytics: t }),
                                    ),
                                    void s(p.grokResponseMetadata({ agentChatItemId: a.chat_item_id }))
                                );
                            a.post_ids_results?.forEach((e) => {
                                if ("Tweet" === e.result?.__typename) {
                                    const { entities: t } = (0, r.Fv)(e.result, n.Z);
                                    s((0, u.dP)(t));
                                }
                            }),
                                a.media_post_ids_results?.forEach((e) => {
                                    if ("Tweet" === e.result?.__typename) {
                                        const { entities: t } = (0, r.Fv)(e.result, n.Z);
                                        s((0, u.dP)(t));
                                    }
                                });
                            const S = (a.post_ids_results ?? []).map((e) => e.result?.rest_id).filter(Boolean),
                                h = (a.media_post_ids_results ?? []).map((e) => e.result?.rest_id).filter(Boolean);
                            let T = a.file_attachments?.map((e) => ({ fileName: e.file_name ?? "image.jpeg", mediaId: e.media_id, isPublic: !1, mimeType: e.mime_type ?? "image/jpeg", url: e.url ?? (e.media_id ? `https://api.x.com/2/grok/attachment.json?mediaId=${e.media_id}` : void 0) })) ?? [];
                            if ((0 === T.length && (T = a.media_urls?.map((e) => ({ fileName: "image.jpeg", isPublic: !1, mimeType: "image/jpeg", url: e })) ?? []), "User" === a.sender_type && s(p.userSendMessage({ message: a.message ?? "", fileAttachments: T, bannerMessages: a.banner_message ? [a.banner_message] : void 0, postIds: S, sender: 1 })), "Agent" === a.sender_type)) {
                                if ((s(p.grokResponseTyping(a.message ?? "", "message")), a.thinking_trace)) {
                                    const e = a.thinking_trace;
                                    s(p.grokResponseTyping(e, "thinkingTrace")), (a.is_partial && c === m.length - 1) || s(p.setIsPastThinkingTrace(!0));
                                }
                                let e;
                                a.ui_layout?.reasoning_ui_layout && ("Split" === a.ui_layout.reasoning_ui_layout ? (e = "SPLIT") : "Unified" === a.ui_layout.reasoning_ui_layout && (e = "UNIFIED"), e && s(p.setReasoningLayout(e))), a.banner_message && s(p.addBannerMessage(a.banner_message)), T.length && s(p.grokResponseFileAttachments(T)), a.memory_references && s(p.grokResponseMemoryReferences(a.memory_references.map((e) => ({ conversation_id: e.conversation_id, summary: e.conversation_summary }))));
                                const t = [];
                                if (a.card_attachments)
                                    for (const e of a.card_attachments) {
                                        const r = (0, E.dj)(e);
                                        if (r) {
                                            if ("x_posts_card" === r.cardType) {
                                                const e = r.post_ids,
                                                    t = [...new Set(e)];
                                                (r.post_ids = t), s(d.Z.fetchMultiple(t));
                                            } else if ("x_users_card" === r.cardType) {
                                                const e = r.user_handles,
                                                    t = [...new Set(e)];
                                                (r.user_handles = t), s(l.ZP.fetchManyByScreenNames(t));
                                            }
                                            t.push(r);
                                        }
                                    }
                                t.length && s(p.grokResponseCardAttachments(t));
                                let r = [],
                                    o = [];
                                if (a.deepsearch_headers && a.deepsearch_headers.length > 0) {
                                    const e = a.deepsearch_headers;
                                    let t = {};
                                    a.deepsearch_args && (t = a.deepsearch_args);
                                    const n = new i.fQ({ deepsearchArgs: t });
                                    n.defaultFinalAnswer = a.message || "";
                                    const c = [];
                                    for (const t of e) {
                                        const e = [];
                                        for (const a of t.steps) {
                                            const t = (a.x_post_ids || []).map((e) => e),
                                                n = (a.web_results || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title })),
                                                i = [];
                                            if (a.tool_usage_card_results)
                                                for (const e of a.tool_usage_card_results) {
                                                    const s = { toolUsageCardId: e.tool_usage_card_id, webResults: (e.web_results || []).map((e) => (R && (e.favicon || e.favicon_base64 || (e.favicon = (0, E.TK)(e.url))), e)), xPostIds: (e.x_post_ids || []).map((e) => e) };
                                                    i.push(s), n.push(...(e.web_results || [])), t.push(...(e.x_post_ids || []));
                                                }
                                            t.length && (r.push(...t), (r = r.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(d.Z.fetchMultiple(t))), n.length && (o.push(...n), (o = o.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url)))), e.push({ header: a.header || "", assistant: a.assistant || "", decision: a.decision || "", finalMessage: a.final_message || "", functionCall: a.function_call || "", rawFunctionResult: a.raw_function_result || "", summary: a.summary || "", webResults: n, xPostIds: t, toolUsageCardResults: i });
                                        }
                                        c.push({ header: t.header || "", steps: e });
                                    }
                                    n.initiateFromHistoryResponses(c), s(p.grokResponseMessageStepAccumulatorUpdate(n)), r.length && s(p.grokResponsePosts(r)), o.length && s(p.grokWebResults(o));
                                } else h.length && s(p.grokResponseMediaPosts(h)), S.length && s(p.grokResponsePosts(S)), a.web_results && s(p.grokWebResults([...a.web_results])), a.cited_web_results && s(p.grokCitedWebResults([...a.cited_web_results]));
                                s(p.grokResponseMetadata({ agentChatItemId: a.chat_item_id, userChatItemId: m[c - 1].chat_item_id, isDeleted: a.is_deleted })), s(p.grokResponseComplete());
                            }
                            s(p.setMode("Fun" === a.grok_mode ? g.IK.FUN : g.IK.REGULAR));
                        });
                    });
                };
        },
        327597: (e, t, s) => {
            s.d(t, { u: () => l });
            var r = s(323265),
                o = s(389071),
                a = s(623494),
                n = s(806528),
                i = s(155918),
                c = s(958602),
                u = s(250781),
                d = s(100326);
            const l =
                ({ analytics: e, conversationKey: t }) =>
                ({ analysisEntityId: s, attachments: l, mode: g, onStart: E, returnCitations: _, promptMetadata: S = { promptSource: "NATURAL", action: "INPUT" }, returnSearchResults: p = !0, features: m = { eagerTweets: !0, serverHistory: !0 }, text: R, isGrokDrawer: h = !1, trendPromptIdStr: T, imageGenerationCount: I, source: f, toolOverrides: w, isReasoning: A, isDeepsearch: b, isImageGen: C, deepsearchArgsOverride: O, personalityId: k }) =>
                async (T, U, { api: N, featureSwitches: y }) => {
                    const M = !r.ZP.isTwitterApp() && y.isTrue("responsive_web_grok_api_enable_grok_host"),
                        P = (0, o.bD)(t);
                    let v = P.selectConversationId(U());
                    const G = r.ZP.isAndroid(),
                        F = r.ZP.isIOS();
                    if ((null != P.selectCurrentResponseMessage(U()) && (await T((0, c.I)({ analytics: e, conversationKey: t }))), (v ??= await (0, d.X)({ analytics: e, api: N, dispatch: T, grokModule: P, analysisEntityId: s })), !v)) return void (0, a.Uk)(e, "conversation couln't be found or created");
                    let L;
                    const D = y.isTrue("responsive_web_grok_location_enabled");
                    if (D) {
                        const e = (0, n.fw)(U())?.position;
                        e && (L = { latitude: e.coords.latitude, longitude: e.coords.longitude, accuracy: e.coords.accuracy });
                    }
                    const K = g ?? P.selectMode(U()),
                        H = (0, o.F9)(U()),
                        x = (0, o.vf)(U()),
                        Q = x.find((e) => e.isAnalyzeEnabled)?.id,
                        Y = "GROK_ANALYZE" === S.promptSource ? Q : null,
                        V = P.selectConversationForAPI(U()),
                        j = (0, o.en)(U()),
                        W = { ...w };
                    if ((C && (W.imageGen = !0), j && j.toolOverrides)) {
                        const e = j.toolOverrides;
                        Object.keys(e).forEach((t) => {
                            W[t] = e[t];
                        });
                    }
                    if (!(R || (l && 0 !== l.length))) return Promise.resolve();
                    const B = { message: R ?? "", sender: i.CI.HUMAN, promptSource: f ?? "", ...(s ? { postIds: [s] } : void 0) };
                    l && (B.fileAttachments = l), b && (B.isDeepsearch = b), A && (B.isReasoning = A);
                    const Z = { responses: V.concat(B), systemPromptName: K, grokModelOptionId: Y ?? H, conversationId: v, returnSearchResults: p, returnCitations: _, promptMetadata: S, imageGenerationCount: I, requestFeatures: m, ...(s ? { analysisEntityId: s } : void 0), geoLocation: L, enableSideBySide: !("GROK_ANALYZE" === S.promptSource || h || F || G || b || A), toolOverrides: W, isDeepsearch: b, isReasoning: A, personalityId: k, deepsearchArgs: O ?? (b ? j?.deepsearchArgs : void 0) };
                    T(P.setPromptSource(f || "")), T(P.setUsingExperiment(!1)), T(P.userSendMessage(B, S)), (0, a.pv)(e, { conversationLength: V.length, isFileAttached: Boolean(B.fileAttachments?.length), isDeepsearch: Z.isDeepsearch || void 0, isReasoning: Z.isReasoning || void 0 }), E?.();
                    const q = y.isTrue("responsive_web_grok_enable_add_response_keepalive") && (b || A),
                        z = y.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                    return (0, u.D)({ grokModule: P, requestBody: Z, dispatch: T, analytics: e, api: N, flags: { enableLocation: D, enableGrokApiHost: M, numRetries: z, enableKeepalive: q }, featureSwitches: y });
                };
        },
        63538: (e, t, s) => {
            s.d(t, { O: () => n });
            var r = s(6157),
                o = s(917799),
                a = s(189953);
            const n = (e, t) => {
                const s = e === a.IK.FUN ? "Fun" : "Normal";
                return (e, n, { api: i }) => o._O(e, { params: { grokMode: s, grokModelOptionId: t }, request: i.withEndpoint(r.Z).setPreferences })({ actionTypes: a.HF, context: "SET_PREFERENCES", meta: {} });
            };
        },
        458810: (e, t, s) => {
            s.d(t, { t: () => o });
            s(571372);
            var r = s(6157);
            const o =
                (e, t) =>
                (s, o, { api: a }) =>
                    a
                        .withEndpoint(r.Z)
                        .uploadFile({ file: e, abortController: t })
                        .then((e) => {
                            const t = e[0];
                            if (!t) throw new Error("Missing file in the response");
                            return t;
                        });
        },
        189953: (e, t, s) => {
            s.d(t, { $t: () => ne, A0: () => Se, BA: () => se, BS: () => y, CH: () => P, CR: () => q, Cr: () => f, DX: () => B, Dh: () => m, Dn: () => M, En: () => u, FF: () => x, FV: () => U, Gy: () => k, HF: () => _, IK: () => o, JO: () => j, Jt: () => re, KH: () => I, L0: () => $, Lc: () => n, OW: () => N, Oj: () => C, P9: () => V, Q_: () => a, Qg: () => L, Qh: () => X, Sv: () => i, TY: () => F, Tv: () => Z, UN: () => b, VK: () => c, WK: () => te, Ws: () => d, Xg: () => z, Xi: () => D, Y8: () => l, Yb: () => h, Yf: () => r, Yx: () => g, ZN: () => W, _i: () => ce, ar: () => Q, cA: () => _e, cw: () => ae, dK: () => E, dO: () => R, dZ: () => G, dw: () => ge, f1: () => le, fH: () => Re, ip: () => H, j$: () => pe, lQ: () => ee, lh: () => S, lm: () => p, mq: () => me, my: () => A, nK: () => O, o$: () => v, px: () => ie, qd: () => Y, ru: () => Ee, ub: () => w, vc: () => K, vi: () => T, wG: () => oe, x5: () => J, yB: () => de, z2: () => ue });
            const r = "grok",
                o = Object.freeze({ FUN: "fun", REGULAR: "" }),
                a = Object.freeze({ IDLE: "idle", TYPING: "typing", WAITING: "waiting", FAILED: "failed" }),
                n = Object.freeze({ REQUEST: "rweb/FETCH_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/FETCH_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/FETCH_GROK_CONVERSATION/FAILURE" }),
                i = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_HISTORY/FAILURE" }),
                c = Object.freeze({ REQUEST: "rweb/DELETE_GROK_MESSAGE/REQUEST", SUCCESS: "rweb/DELETE_GROK_MESSAGE/SUCCESS", FAILURE: "rweb/DELETE_GROK_MESSAGE/FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/REQUEST", SUCCESS: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/SUCCESS", FAILURE: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/FETCH_GROK_MEDIA_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_MEDIA_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_MEDIA_HISTORY/FAILURE" }),
                l = Object.freeze({ REQUEST: "rweb/SEARCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/SEARCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/SEARCH_GROK_HISTORY/FAILURE" }),
                g = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HOME/REQUEST", SUCCESS: "rweb/FETCH_GROK_HOME/SUCCESS", FAILURE: "rweb/FETCH_GROK_HOME/FAILURE" }),
                E = Object.freeze({ REQUEST: "rweb/FETCH_GROK_SHARE/REQUEST", SUCCESS: "rweb/FETCH_GROK_SHARE/SUCCESS", FAILURE: "rweb/FETCH_GROK_SHARE/FAILURE" }),
                _ = Object.freeze({ REQUEST: "rweb/SET_PREFERENCES/REQUEST", SUCCESS: "rweb/SET_PREFERENCES/SUCCESS", FAILURE: "rweb/SET_PREFERENCES/FAILURE" }),
                S = Object.freeze({ REQUEST: "rweb/PIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/PIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/PIN_GROK_CONVERSATION/FAILURE" }),
                p = Object.freeze({ REQUEST: "rweb/UNPIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/UNPIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/UNPIN_GROK_CONVERSATION/FAILURE" }),
                m = Object.freeze({ REQUEST: "rweb/CLEAR_CONVERSATIONS/REQUEST", SUCCESS: "rweb/CLEAR_CONVERSATIONS/SUCCESS", FAILURE: "rweb/CLEAR_CONVERSATIONS/FAILURE" }),
                R = Object.freeze({ REQUEST: "rweb/GROK_USER_EVENTS_LOG/REQUEST", SUCCESS: "rweb/GROK_USER_EVENTS_LOG/SUCCESS", FAILURE: "rweb/GROK_USER_EVENTS_LOG/FAILURE" }),
                h = "rweb/grok/DELETE_CONVERSATION",
                T = "rweb/grok/RENAME_CONVERSATION",
                I = "rweb/grok/SET_ABORT_CONTROLLER",
                f = "rweb/grok/CLEAR_CONVERSATION",
                w = "rweb/grok/USER_SEND_MESSAGE",
                A = "rweb/grok/REGENERATE_RESPONSE",
                b = "rweb/grok/GROK_RESPONSE_TYPING",
                C = "rweb/grok/GROK_RESPONSE_POSTS",
                O = "rweb/grok/GROK_RESPONSE_MEDIA_POSTS",
                k = "rweb/grok/GROK_RESPONSE_COMPLETE",
                U = "rweb/grok/GROK_RESPONSE_ERROR",
                N = "rweb/grok/GROK_RESPONSE_METADATA",
                y = "rweb/grok/GROK_RESPONSE_DISCLAIMER",
                M = "rweb/grok/GROK_RESPONSE_FILE_ATTACHMENTS",
                P = "rweb/grok/GROK_RESPONSE_FEEDBACK_LABELS",
                v = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTIONS",
                G = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTED_MODE",
                F = "rweb/grok/GROK_RESPONSE_CHAT_RESPONSE_ANNOTATIONS",
                L = "rweb/grok/GROK_RESPONSE_UPSELL",
                D = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENT",
                K = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENTS",
                H = "rweb/grok/GROK_RESPONSE_MESSAGE_STEP_ACCUMULATOR_UPDATE",
                x = "rweb/grok/GROK_RESPONSE_MEMORY_REFERENCES",
                Q = "rweb/grok/GROK_WEB_RESULTS",
                Y = "rweb/grok/GROK_CITED_WEB_RESULTS",
                V = "rweb/grok/ABORT_MESSAGE",
                j = "rweb/grok/SET_EXPECTED_IMAGE_ASPECT_RATIO",
                W = "rweb/grok/FETCH_CONVERSATION_ID_START",
                B = "rweb/grok/FETCH_CONVERSATION_ID_SUCCESS",
                Z = "rweb/grok/FETCH_CONVERSATION_ID_FAILED",
                q = "rweb/grok/EDITING_SET_ID",
                z = "rweb/grok/EDITING_CLEAR",
                $ = "rweb/grok/EDITING_COMMIT",
                J = "rweb/grok/RETRY_MESSAGE",
                X = "rweb/grok/SET_INPUT_PREFILL",
                ee = "rweb/grok/MODE_CHANGE",
                te = "rweb/grok/MODEL_CHANGE",
                se = "rweb/grok/SET_ACCESS_RESTRICTED_REASONS",
                re = "rweb/grok/SET_FREE_ACCESS",
                oe = "rweb/grok/SET_PREFERRED_PROMPTS",
                ae = "rweb/grok/SET_PROMPT_SOURCE",
                ne = "rweb/grok/NEW_CONVERSATION",
                ie = "rweb/grok/IMAGE_INTERMEDIATE_RESULT",
                ce = "rweb/grok/SET_GROK_INPUT_FILTER_KEY",
                ue = "rweb/grok/SET_GROK_INPUT_FOCUSED",
                de = "rweb/grok/QUERY_TYPING",
                le = "rweb/grok/ADD_BANNER_MESSAGE",
                ge = "rweb/grok/DELETE_MEDIA_HISTORY_ITEM",
                Ee = "rweb/grok/UPDATE_PERFORMANCE_METRICS",
                _e = "r/web/grok/SET_USING_EXPERIMENT",
                Se = "r/web/grok/SET_PREFERRED_RESPONSE",
                pe = "rweb/grok/SET_GROK_INPUT_ADVANCED_SETTINGS",
                me = "rweb/grok/SET_IS_PAST_THINKING_TRACE",
                Re = "rweb/grok/SET_REASONING_LAYOUT";
        },
        52570: (e, t, s) => {
            s.d(t, { NE: () => a, bY: () => d });
            var r = s(111677),
                o = s.n(r);
            const a = o().ead81122,
                n = o().f808a13a,
                i = o().e0481e5a,
                c = o().bc0a5b5a,
                u = o().ef674976,
                d = (e) => {
                    switch (e) {
                        case 429:
                            return n;
                        case 451:
                            return i;
                        case 401:
                        case 403:
                            return u;
                        case 503:
                            return c;
                        default:
                            return a;
                    }
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DirectMessages-bfd49e49.69f54bba.js.map

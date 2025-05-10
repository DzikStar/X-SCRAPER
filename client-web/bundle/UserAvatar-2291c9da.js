"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserAvatar-2291c9da"],
    {
        958602: (e, t, s) => {
            s.d(t, { I: () => n });
            var r = s(323265),
                a = s(389071),
                o = s(189953);
            const n =
                ({ analytics: e, conversationKey: t }) =>
                async (e, s, { api: n, featureSwitches: i }) => {
                    const c = (0, a.bD)(t),
                        l = c.selectStatus(s());
                    if (!(l === o.Q_.TYPING || l === o.Q_.WAITING)) return Promise.resolve();
                    const d = c.selectConversationId(s()) || void 0,
                        g = c.selectMetadataForMessageId(s(), "currentResponse"),
                        u = g?.agentChatItemId || void 0;
                    await e(c.abortMessage());
                    const E = { responses: [], systemPromptName: "", grokModelOptionId: "", conversationId: d, responseToChatItemId: u, isCancel: !0 },
                        S = !r.ZP.isTwitterApp() && i.isTrue("responsive_web_grok_api_enable_grok_host");
                    return n.fetchClient.dispatch("/2/grok/add_response.json", { method: "POST", credentials: "include", body: JSON.stringify(E) }, S ? "https://grok.x.com" : void 0).then(async (e) => {});
                };
        },
        250781: (e, t, s) => {
            s.d(t, { D: () => g });
            s(890103), s(136728), s(875640), s(543673), s(240753), s(128399);
            var r = s(323265),
                a = s(397159),
                o = s(774717),
                n = s(623494),
                i = s(836255),
                c = s(52570),
                l = s(155918);
            s(571372);
            const d = (e) => {
                    const t = [];
                    let s = !1,
                        r = Date.now();
                    const a = [];
                    let o = 20;
                    const n = () => {
                            const e = (() => {
                                    const e = Date.now();
                                    for (; a.length > 0 && a[0] < e - 50; ) a.shift();
                                    return a.length / 0.05;
                                })(),
                                s = Math.max(e, t.length);
                            (o = s > 0 ? Math.max(0, 1e3 / s) : 0), (r = Date.now());
                        },
                        i = async () => {
                            for (s = !0; t.length > 0; ) {
                                const e = t.shift();
                                e && e();
                                const s = o;
                                await new Promise((e) => setTimeout(e, s));
                            }
                            s = !1;
                        };
                    return {
                        resumingDispatch: (e) => {
                            const o = Date.now();
                            a.push(o), t.push(e), o - r >= 50 && n(), s || i();
                        },
                        abortQueue: () => {
                            (t.length = 0), (s = !1), (a.length = 0);
                        },
                    };
                },
                g = async ({ analytics: e, api: t, dispatch: s, eventTag: g, flags: S, grokModule: m, method: _ = "POST", requestBody: p, requestParams: R }) => {
                    const h = g ? ` (${g})` : "",
                        T = (function () {
                            const e = `grok-${r.ZP.isTwitterApp() ? (r.ZP.isAndroid() ? "android" : "ios") : "web"}:api-handler`,
                                t = o.P_();
                            function s(s) {
                                o.IM(`${e}:${s}`, t.end());
                            }
                            const a = new Set();
                            function n(e) {
                                a.has(e) || (a.add(e), s(e));
                            }
                            return { record: s, recordOnce: n };
                        })(),
                        I = Date.now();
                    let A = !1,
                        O = new AbortController();
                    s(m.setAbortController(O));
                    let C = !1;
                    const b = d(s),
                        w = [""],
                        f = [""];
                    let k = !0,
                        N = !1;
                    const U = new l.EG();
                    U.setRequestedCount(p.imageGenerationCount || 0),
                        (function ({ dispatch: e, grokModule: t, responses: s }) {
                            const r = s[s.length - 1];
                            if (r && r.fileAttachments && r.fileAttachments.length) {
                                const s = r.fileAttachments.find((e) => e.url && e.mimeType.startsWith("image"));
                                s &&
                                    (s.dimensions
                                        ? e(t.setExpectedImageAspectRatio(s.dimensions.width / s.dimensions.height))
                                        : s.url &&
                                          ((a = s.url),
                                          new Promise((e, t) => {
                                              const s = new Image();
                                              (s.src = a),
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
                            var a;
                        })({ responses: p.responses, grokModule: m, dispatch: s });
                    const M = new a.fQ({ deepsearchArgs: p.deepsearchArgs, isDeepsearch: p.isDeepsearch });
                    let P = [],
                        y = [],
                        G = "",
                        F = !1,
                        D = 0,
                        v = !1;
                    const L = async ({ method: r, requestParams: o }) => {
                            const d = (function ({ method: e, requestParams: t }) {
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
                            })({ method: r, requestParams: o });
                            t.fetchClient
                                .dispatch(d, { method: r, credentials: "include", params: "GET" === r ? o : null, body: "POST" === r ? JSON.stringify(p) : null, signal: O?.signal, keepalive: S?.enableKeepalive }, S?.enableGrokApiHost ? "https://grok.x.com" : void 0)
                                .then(async (t) => {
                                    const o = t.headers.get("x-transaction-id");
                                    if ((o && s(m.updatePerformanceMetrics({ traceId: o })), !t.ok)) {
                                        T.record(`http-${t.status}`);
                                        const r = (0, c.bY)(t.status);
                                        return s(m.grokResponseError(r)), void (0, n.Uk)(e, `add-response failed with status ${t.status}${h}`);
                                    }
                                    const d = t.body?.getReader();
                                    if (!d) return s(m.grokResponseError(c.NE)), void (0, n.Uk)(e, `reader was not found${h}`);
                                    const g = new TextDecoder();
                                    let u = "";
                                    const _ = setTimeout(() => {
                                            (0, n.eS)(e, !0);
                                        }, 5e3),
                                        R = await d.read();
                                    return (
                                        clearTimeout(_),
                                        (async function t({ done: o, value: _ }) {
                                            if (o) {
                                                v = !1;
                                                if ((!w.length || w.every((e) => "" === e)) && !F) {
                                                    const t = `add-response failed to reach the network${h}`;
                                                    return M.isDeepsearch && E({ messageStepAccumulator: M, analytics: e, dispatch: s, errorMessage: t, grokModule: m, resumabilityQueue: b, method: r }), s(m.grokResponseError(c.NE)), (0, n.Uk)(e, t), void T.record("network-error");
                                                }
                                                T.record("time-to-last-chunk"),
                                                    (function ({ analytics: e, dispatch: t, grokModule: s, messageStepAccumulator: r, method: a, resumabilityQueue: o }) {
                                                        r.isDeepsearch &&
                                                            (function ({ analytics: e, dispatch: t, grokModule: s, messageStepAccumulator: r }) {
                                                                if ("PENDING" === r.state) return;
                                                                r.complete(), t(s.grokResponseMessageStepAccumulatorUpdate(r)), (0, n.y6)(e, r.getStreamDuration());
                                                            })({ messageStepAccumulator: r, analytics: e, dispatch: t, grokModule: s });
                                                        "GET" === a ? (o.resumingDispatch(() => t(s.updatePerformanceMetrics({ endStreamTime: Date.now() }))), o.resumingDispatch(() => t(s.grokResponseComplete()))) : "POST" === a && (t(s.updatePerformanceMetrics({ endStreamTime: Date.now() })), t(s.grokResponseComplete()));
                                                    })({ messageStepAccumulator: M, analytics: e, dispatch: s, grokModule: m, method: r, resumabilityQueue: b });
                                            }
                                            if (_) {
                                                T.recordOnce("time-to-first-chunk"), A || ((A = !0), s(m.updatePerformanceMetrics({ timeToFirstChunkMs: Date.now() - I })));
                                                const o = g.decode(_);
                                                if (((u += o), u.includes("\n"))) {
                                                    const t = u.split("\n");
                                                    u = t.pop();
                                                    for (const o of t)
                                                        if (C || "GET" !== r) {
                                                            const t = JSON.parse(o);
                                                            t.result?.uiLayout?.reasoningUILayout && s(m.setReasoningLayout(t.result.uiLayout.reasoningUILayout));
                                                            const n = t.result?.sideBySideIndex ?? 0;
                                                            if ((null == t.result?.sideBySideIndex || N || (w.push(""), f.push(""), s(m.setUsingExperiment(!0)), (N = !0)), t.result?.query && s(m.queryTyping(t.result.query)), t.result?.bannerMessage && s(m.addBannerMessage(t.result.bannerMessage)), t.result?.xPostIds && (y.push(...(t.result.xPostIds || [])), (y = y.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(i.Z.fetchMultiple(y)), s(m.grokResponsePosts(y, n))), t.result?.xMediaPostIds)) {
                                                                const e = t.result.xMediaPostIds;
                                                                s(i.Z.fetchMultiple(e)), s(m.grokResponseMediaPosts(e));
                                                            }
                                                            if (t.result?.postIds) s(m.grokResponsePosts(t.result.postIds, n));
                                                            else if (t.result?.message && (!t.result?.messageTag || t.result?.messageTag === a.iS.FINAL)) {
                                                                const e = !w[n];
                                                                t.result?.isThinking ? (f[n] += t.result.message) : (w[n] += t.result.message), e && s(m.updatePerformanceMetrics({ timeToFirstTextMs: Date.now() - I }));
                                                                const o = t.result?.isThinking ? f[n] : w[n],
                                                                    i = t.result?.isThinking ? "thinkingTrace" : "message";
                                                                "thinkingTrace" === i && k && (k = !1), "message" === i && f[0].length > 0 && !k && ((k = !0), "GET" === r ? b.resumingDispatch(() => s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))) : s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))), "GET" === r ? b.resumingDispatch(() => s(m.grokResponseTyping(o, i, n))) : s(m.grokResponseTyping(o, i, n)), (t.result?.messageTag === a.iS.FINAL || (t.result?.message && "STARTED" === M.state)) && (M.updateFinalAnswer({ messageTag: a.iS.FINAL, message: t.result?.message || "" }), M.complete(), "GET" === r ? (b.resumingDispatch(() => s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))), b.resumingDispatch(() => s(m.grokResponseMessageStepAccumulatorUpdate(M)))) : (s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() })), s(m.grokResponseMessageStepAccumulatorUpdate(M))));
                                                            }
                                                            if (("error" === t.result?.responseType && s(m.grokResponseFileAttachments([])), t.result?.imageAttachmentCount)) {
                                                                let e = t.result.imageAttachmentCount;
                                                                p.imageGenerationCount && (e = Math.min(e, p.imageGenerationCount)), U.setCount(e);
                                                            }
                                                            if ((t.result?.imageWidth && t.result?.imageHeight && s(m.setExpectedImageAspectRatio(t.result?.imageWidth / t.result?.imageHeight)), "image" === t.result?.responseType || t.result?.imageAttachment?.imageUrl)) {
                                                                F = !0;
                                                                const e = t.result.imageAttachment;
                                                                U.addAttachment({ fileName: e?.fileName ?? "image", mimeType: e?.mimeType ?? "image/jpeg", mediaId: e?.mediaIdStr, url: e?.imageUrl }), s(m.grokResponseFileAttachments(U.generateAttachmentList()));
                                                            }
                                                            t.result?.feedbackLabels && s(m.grokResponseFeedbackLabels(t.result.feedbackLabels)), t.result?.disclaimer && s(m.grokResponseDisclaimer(t.result.disclaimer)), t.result?.followUpSuggestions && s(m.grokResponseFollowUpSuggestions(t.result.followUpSuggestions)), t.result?.followUpSuggestedMode && s(m.grokResponseFollowUpSuggestedMode(t.result?.followUpSuggestedMode)), t.result?.chatResponseAnnotations && s(m.grokResponseChatResponseAnnotations(t.result.chatResponseAnnotations)), t.result?.upsell && s(m.grokResponseUpsell(t.result.upsell)), (t.agentChatItemId || t.userChatItemId) && (t.agentChatItemId && (G = t.agentChatItemId), s(m.updatePerformanceMetrics({ startStreamTime: Date.now() })), s(m.grokResponseMetadata({ agentChatItemId: t.agentChatItemId, userChatItemId: t.userChatItemId }))), t.result?.webResults && (P.push(...(t.result?.webResults || [])), (P = P.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url))), s(m.grokWebResults(P, n))), t.result?.citedWebResults && s(m.grokCitedWebResults(t.result.citedWebResults, n));
                                                            const c = t.result?.event;
                                                            if ((c && (c.imageAttachmentUpdate && s(m.imageIntermediateResult({ ...c.imageAttachmentUpdate, progress: c.imageAttachmentUpdate.progress / 100, imageUrl: c.imageAttachmentUpdate.imageUrl })), c.imageAttachmentRemoval && (U.setAttachmentAsModerated(c.imageAttachmentRemoval.imageIdStr), s(m.grokResponseFileAttachments(U.generateAttachmentList())))), S?.enableLocation && t.result?.doLocationRequest && !p.geoLocation && s(m.grokResponseCardAttachment({ cardType: "geo_location_request" })), t.result?.cardAttachment)) {
                                                                const r = (0, l.dj)(t.result.cardAttachment, e);
                                                                r && s(m.grokResponseCardAttachment(r));
                                                            }
                                                            if ((t.result?.memoryReferences && s(m.grokResponseMemoryReferences(t.result.memoryReferences)), t.result?.messageTag && (t.result?.message || t.result?.messageStepId))) {
                                                                const e = t.result?.messageTag;
                                                                e !== a.iS.FINAL && e !== a.iS.FINAL_LONG && (M.updateStepsFromRawMessage({ message: t.result?.message || "", messageTag: e, messageStepId: t.result?.messageStepId || -1, webResults: t.result?.webResults || [], xPostIds: t.result?.xPostIds || [] }), "GET" === r ? b.resumingDispatch(() => s(m.grokResponseMessageStepAccumulatorUpdate(M))) : s(m.grokResponseMessageStepAccumulatorUpdate(M)));
                                                            }
                                                        } else {
                                                            const e = JSON.parse(o);
                                                            (C = !0), e.message && ((w[0] += e.message), s(m.grokResponseTyping(e.message ?? "", "message")));
                                                            const t = new a.fQ();
                                                            if (e.messageStepsHeaders && e?.messageStepsHeaders.length > 0) {
                                                                t.defaultFinalAnswer = e.message || "";
                                                                const r = [];
                                                                for (const t of e.messageStepsHeaders) {
                                                                    const e = [];
                                                                    for (const r of t.steps) {
                                                                        const t = (r.xPostIds || []).map((e) => e),
                                                                            a = (r.webResults || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title }));
                                                                        t.length && (y.push(...t), (y = y.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(i.Z.fetchMultiple(t))), a.length && (P.push(...a), (P = P.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url)))), e.push({ header: r.header || "", assistant: r.assistant || "", decision: r.decision || "", finalMessage: r.finalMessage || "", functionCall: r.functionCall || "", rawFunctionResult: r.rawFunctionResult || "", summary: r.summary || "", webResults: a, xPostIds: t });
                                                                    }
                                                                    r.push({ header: t.header || "", steps: e });
                                                                }
                                                                t.initiateFromHistoryResponses(r, !0), s(m.grokResponseMessageStepAccumulatorUpdate(t));
                                                            }
                                                            e.thinkingTrace && ((f[0] += e.thinkingTrace), s(m.grokResponseTyping(e.thinkingTrace ?? "", "thinkingTrace")));
                                                        }
                                                }
                                                if (d) {
                                                    const s = setTimeout(() => {
                                                            (0, n.eS)(e, !1);
                                                        }, 5e3),
                                                        r = await d.read();
                                                    return clearTimeout(s), t(r);
                                                }
                                            }
                                        })(R)
                                    );
                                })
                                .catch(async (t) => {
                                    v = !1;
                                    if (t instanceof window.DOMException && "AbortError" === t.name) "STARTED" === M.state && M.isDeepsearch && (0, n.YI)(e, { durationMs: M.getStreamDuration(), messageTagCounts: M.debugMessageTagCount }), b.abortQueue(), T.record("abort");
                                    else {
                                        if (K()) return void (await H(t.message));
                                        M.isDeepsearch && E({ messageStepAccumulator: M, analytics: e, dispatch: s, grokModule: m, resumabilityQueue: b, method: r, errorMessage: t ? t.message : void 0 }), s(m.grokResponseError(c.NE)), (0, n.kl)(e, t), T.record("error");
                                    }
                                    s(m.updatePerformanceMetrics({ endStreamTime: Date.now() })), f[0].length > 0 && s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }));
                                });
                        },
                        K = () => {
                            const e = u(),
                                t = Boolean(p.isDeepsearch) || Boolean(p.isReasoning);
                            return !v && D < (S?.numRetries || 0) && !!G && !!e && t && "POST" === _;
                        },
                        H = async (t) => {
                            O.abort(), D++, (v = !0), (0, n.mm)(e, D, t), (O = new AbortController()), await s(m.setAbortController(O)), L({ method: "GET", requestParams: { ...R, conversationId: u(), responseToChatItemId: G, streamInitialChunkWhole: !1 } });
                        };
                    return L({ method: _, requestParams: R });
                };
            function u() {
                return new URLSearchParams(window.location.search).get("conversation") || "";
            }
            function E({ analytics: e, dispatch: t, errorMessage: s, grokModule: r, messageStepAccumulator: a, method: o, resumabilityQueue: i }) {
                "STARTED" === a.state && (a.onAbort(), "GET" === o ? (i.resumingDispatch(() => t(r.grokResponseMessageStepAccumulatorUpdate(a))), i.resumingDispatch(() => t(r.updatePerformanceMetrics({ deepsearchEnd: Date.now() })))) : t(r.grokResponseMessageStepAccumulatorUpdate(a)), (0, n.hq)(e, { durationMs: a.getStreamDuration(), errorMessage: s }));
            }
        },
        100326: (e, t, s) => {
            s.d(t, { X: () => i });
            s(571372);
            var r = s(791005),
                a = s.n(r),
                o = s(623494),
                n = s(52570);
            const i = ({ analysisEntityId: e, analytics: t, api: s, dispatch: r, fromShareId: i, fromUniversalSearch: c, grokModule: l }) => (
                r(l.fetchConversationIdStart()),
                s.apiClient
                    .graphQL(a(), { fromShare: i, fromUniversalSearch: c })
                    .then((s) => {
                        const a = s.create_grok_conversation?.conversation_id,
                            i = s.create_grok_conversation?.error_code;
                        if (a) return r(l.fetchConversationIdSuccess(a, e)), a;
                        if (i) throw (r(l.fetchConversationIdFailed(n.NE)), (0, o.Uk)(t, "conversation_id failed"), new Error(i));
                    })
                    .catch((e) => {
                        const t = e.errors?.[0]?.code,
                            s = (0, n.bY)(t);
                        r(l.fetchConversationIdFailed(s));
                    })
            );
        },
        96275: (e, t, s) => {
            s.d(t, { d: () => S });
            s(136728);
            var r = s(506899),
                a = s(389071),
                o = s(6157),
                n = s(171697),
                i = s(397159),
                c = s(917799),
                l = s(56519),
                d = s(836255),
                g = s(189953),
                u = s(155918),
                E = s(250781);
            const S =
                (e, t) =>
                (s, S, { api: m }) =>
                    c._O(s, { params: { restId: e }, request: m.withEndpoint(o.Z).fetchConversation })({ actionTypes: g.Lc, context: "FETCH_GROK_CONVERSATION", meta: { conversationId: e } }, (o) => {
                        if (!o?.grok_conversation_items_by_rest_id?.items) return;
                        const c = e;
                        s((0, a.Ki)(c));
                        const m = (0, a.YJ)(S(), c);
                        s(m.clearConversation()), s(m.fetchConversationIdSuccess(e));
                        const _ = o?.grok_conversation_items_by_rest_id?.items ? [...o.grok_conversation_items_by_rest_id.items].reverse() : [];
                        _.forEach((o, c) => {
                            if (o.is_partial && c === _.length - 1)
                                return (
                                    s(
                                        (
                                            ({ agentChatItemId: e, analytics: t, conversationKey: s }) =>
                                            async (r, o, { api: n, featureSwitches: i }) => {
                                                const c = (0, a.bD)(s),
                                                    l = { responses: [], systemPromptName: "", grokModelOptionId: "", conversationId: s },
                                                    d = i.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                                                return (0, E.D)({ grokModule: c, requestParams: { conversationId: s, responseToChatItemId: e, streamInitialChunkWhole: !1 }, requestBody: l, dispatch: r, method: "GET", analytics: t, api: n, flags: { numRetries: d } });
                                            }
                                        )({ conversationKey: e, agentChatItemId: o.chat_item_id ?? "", analytics: t }),
                                    ),
                                    void s(m.grokResponseMetadata({ agentChatItemId: o.chat_item_id }))
                                );
                            o.post_ids_results?.forEach((e) => {
                                if ("Tweet" === e.result?.__typename) {
                                    const { entities: t } = (0, r.Fv)(e.result, n.Z);
                                    s((0, l.dP)(t));
                                }
                            }),
                                o.media_post_ids_results?.forEach((e) => {
                                    if ("Tweet" === e.result?.__typename) {
                                        const { entities: t } = (0, r.Fv)(e.result, n.Z);
                                        s((0, l.dP)(t));
                                    }
                                });
                            const S = (o.post_ids_results ?? []).map((e) => e.result?.rest_id).filter(Boolean),
                                p = (o.media_post_ids_results ?? []).map((e) => e.result?.rest_id).filter(Boolean);
                            let R = o.file_attachments?.map((e) => ({ fileName: e.file_name ?? "image.jpeg", mediaId: e.media_id, isPublic: !1, mimeType: e.mime_type ?? "image/jpeg", url: e.url ?? (e.media_id ? `https://api.x.com/2/grok/attachment.json?mediaId=${e.media_id}` : void 0) })) ?? [];
                            if ((0 === R.length && (R = o.media_urls?.map((e) => ({ fileName: "image.jpeg", isPublic: !1, mimeType: "image/jpeg", url: e })) ?? []), "User" === o.sender_type && s(m.userSendMessage({ message: o.message ?? "", fileAttachments: R, bannerMessages: o.banner_message ? [o.banner_message] : void 0, postIds: S, sender: 1 })), "Agent" === o.sender_type)) {
                                if ((s(m.grokResponseTyping(o.message ?? "", "message")), o.thinking_trace)) {
                                    const e = o.thinking_trace;
                                    s(m.grokResponseTyping(e, "thinkingTrace")), (o.is_partial && c === _.length - 1) || s(m.setIsPastThinkingTrace(!0));
                                }
                                let e;
                                o.ui_layout?.reasoning_ui_layout && ("Split" === o.ui_layout.reasoning_ui_layout ? (e = "SPLIT") : "Unified" === o.ui_layout.reasoning_ui_layout && (e = "UNIFIED"), e && s(m.setReasoningLayout(e))), o.banner_message && s(m.addBannerMessage(o.banner_message)), R.length && s(m.grokResponseFileAttachments(R)), o.memory_references && s(m.grokResponseMemoryReferences(o.memory_references.map((e) => ({ conversation_id: e.conversation_id, summary: e.conversation_summary }))));
                                const t = [];
                                if (o.card_attachments)
                                    for (const e of o.card_attachments) {
                                        const s = (0, u.dj)(e);
                                        s && t.push(s);
                                    }
                                t.length && s(m.grokResponseCardAttachments(t));
                                let r = [],
                                    a = [];
                                if (o.deepsearch_headers && o.deepsearch_headers.length > 0) {
                                    const e = o.deepsearch_headers;
                                    let t = {};
                                    o.deepsearch_args && (t = o.deepsearch_args);
                                    const n = new i.fQ({ deepsearchArgs: t });
                                    n.defaultFinalAnswer = o.message || "";
                                    const c = [];
                                    for (const t of e) {
                                        const e = [];
                                        for (const o of t.steps) {
                                            const t = (o.x_post_ids || []).map((e) => e),
                                                n = (o.web_results || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title }));
                                            t.length && (r.push(...t), (r = r.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(d.Z.fetchMultiple(t))), n.length && (a.push(...n), (a = a.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url)))), e.push({ header: o.header || "", assistant: o.assistant || "", decision: o.decision || "", finalMessage: o.final_message || "", functionCall: o.function_call || "", rawFunctionResult: o.raw_function_result || "", summary: o.summary || "", webResults: n, xPostIds: t });
                                        }
                                        c.push({ header: t.header || "", steps: e });
                                    }
                                    n.initiateFromHistoryResponses(c), s(m.grokResponseMessageStepAccumulatorUpdate(n)), r.length && s(m.grokResponsePosts(r)), a.length && s(m.grokWebResults(a));
                                } else p.length && s(m.grokResponseMediaPosts(p)), S.length && s(m.grokResponsePosts(S)), o.web_results && s(m.grokWebResults([...o.web_results])), o.cited_web_results && s(m.grokCitedWebResults([...o.cited_web_results]));
                                s(m.grokResponseMetadata({ agentChatItemId: o.chat_item_id, userChatItemId: _[c - 1].chat_item_id, isDeleted: o.is_deleted })), s(m.grokResponseComplete());
                            }
                            s(m.setMode("Fun" === o.grok_mode ? g.IK.FUN : g.IK.REGULAR));
                        });
                    });
        },
        327597: (e, t, s) => {
            s.d(t, { u: () => g });
            var r = s(323265),
                a = s(389071),
                o = s(623494),
                n = s(806528),
                i = s(155918),
                c = s(958602),
                l = s(250781),
                d = s(100326);
            const g =
                ({ analytics: e, conversationKey: t }) =>
                ({ analysisEntityId: s, attachments: g, mode: u, onStart: E, returnCitations: S, promptMetadata: m = { promptSource: "NATURAL", action: "INPUT" }, returnSearchResults: _ = !0, features: p = { eagerTweets: !0, serverHistory: !0 }, text: R, isGrokDrawer: h = !1, trendPromptIdStr: T, imageGenerationCount: I, source: A, toolOverrides: O, isReasoning: C, isDeepsearch: b, isImageGen: w, deepsearchArgsOverride: f, personalityId: k }) =>
                async (T, N, { api: U, featureSwitches: M }) => {
                    const P = !r.ZP.isTwitterApp() && M.isTrue("responsive_web_grok_api_enable_grok_host"),
                        y = (0, a.bD)(t);
                    let G = y.selectConversationId(N());
                    const F = r.ZP.isAndroid(),
                        D = r.ZP.isIOS();
                    if ((null != y.selectCurrentResponseMessage(N()) && (await T((0, c.I)({ analytics: e, conversationKey: t }))), (G ??= await (0, d.X)({ analytics: e, api: U, dispatch: T, grokModule: y, analysisEntityId: s })), !G)) return void (0, o.Uk)(e, "conversation couln't be found or created");
                    let v;
                    const L = M.isTrue("responsive_web_grok_location_enabled");
                    if (L) {
                        const e = (0, n.fw)(N())?.position;
                        e && (v = { latitude: e.coords.latitude, longitude: e.coords.longitude, accuracy: e.coords.accuracy });
                    }
                    const K = u ?? y.selectMode(N()),
                        H = (0, a.F9)(N()),
                        Q = y.selectConversationForAPI(N()),
                        x = (0, a.en)(N()),
                        V = { ...O };
                    if ((w && (V.imageGen = !0), x && x.toolOverrides)) {
                        const e = x.toolOverrides;
                        Object.keys(e).forEach((t) => {
                            V[t] = e[t];
                        });
                    }
                    if (!(R || (g && 0 !== g.length))) return Promise.resolve();
                    const Y = { message: R ?? "", sender: i.CI.HUMAN, promptSource: A ?? "", ...(s ? { postIds: [s] } : void 0) };
                    g && (Y.fileAttachments = g), b && (Y.isDeepsearch = b), C && (Y.isReasoning = C);
                    const j = { responses: Q.concat(Y), systemPromptName: K, grokModelOptionId: H, conversationId: G, returnSearchResults: _, returnCitations: S, promptMetadata: m, imageGenerationCount: I, requestFeatures: p, ...(s ? { analysisEntityId: s } : void 0), geoLocation: v, enableSideBySide: !("GROK_ANALYZE" === m.promptSource || h || D || F || b || C), toolOverrides: V, isDeepsearch: b, isReasoning: C, personalityId: k, deepsearchArgs: f ?? (b ? x?.deepsearchArgs : void 0) };
                    T(y.setPromptSource(A || "")), T(y.setUsingExperiment(!1)), T(y.userSendMessage(Y, m)), (0, o.pv)(e, { conversationLength: Q.length, isFileAttached: Boolean(Y.fileAttachments?.length), isDeepsearch: j.isDeepsearch || void 0, isReasoning: j.isReasoning || void 0 }), E?.();
                    const B = M.isTrue("responsive_web_grok_enable_add_response_keepalive") && (b || C),
                        q = M.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                    return (0, l.D)({ grokModule: y, requestBody: j, dispatch: T, analytics: e, api: U, flags: { enableLocation: L, enableGrokApiHost: P, numRetries: q, enableKeepalive: B } });
                };
        },
        63538: (e, t, s) => {
            s.d(t, { O: () => n });
            var r = s(6157),
                a = s(917799),
                o = s(189953);
            const n = (e, t) => {
                const s = e === o.IK.FUN ? "Fun" : "Normal";
                return (e, n, { api: i }) => a._O(e, { params: { grokMode: s, grokModelOptionId: t }, request: i.withEndpoint(r.Z).setPreferences })({ actionTypes: o.HF, context: "SET_PREFERENCES", meta: {} });
            };
        },
        458810: (e, t, s) => {
            s.d(t, { t: () => a });
            s(571372);
            var r = s(6157);
            const a =
                (e, t) =>
                (s, a, { api: o }) =>
                    o
                        .withEndpoint(r.Z)
                        .uploadFile({ file: e, abortController: t })
                        .then((e) => {
                            const t = e[0];
                            if (!t) throw new Error("Missing file in the response");
                            return t;
                        });
        },
        189953: (e, t, s) => {
            s.d(t, { $t: () => ne, A0: () => me, BA: () => se, BS: () => M, CH: () => y, CR: () => Z, Cr: () => A, DX: () => q, Dh: () => p, Dn: () => P, En: () => l, FF: () => Q, FV: () => N, Gy: () => k, HF: () => S, IK: () => a, JO: () => j, Jt: () => re, KH: () => I, L0: () => $, Lc: () => n, OW: () => U, Oj: () => w, P9: () => Y, Q_: () => o, Qg: () => v, Qh: () => X, Sv: () => i, TY: () => D, Tv: () => W, UN: () => b, VK: () => c, WK: () => te, Ws: () => d, Xg: () => z, Xi: () => L, Y8: () => g, Yb: () => h, Yf: () => r, Yx: () => u, ZN: () => B, _i: () => ce, ar: () => x, cA: () => Se, cw: () => oe, dK: () => E, dO: () => R, dZ: () => F, dw: () => ue, f1: () => ge, fH: () => Re, ip: () => H, j$: () => _e, lQ: () => ee, lh: () => m, lm: () => _, mq: () => pe, my: () => C, nK: () => f, o$: () => G, px: () => ie, qd: () => V, ru: () => Ee, ub: () => O, vc: () => K, vi: () => T, wG: () => ae, x5: () => J, yB: () => de, z2: () => le });
            const r = "grok",
                a = Object.freeze({ FUN: "fun", REGULAR: "" }),
                o = Object.freeze({ IDLE: "idle", TYPING: "typing", WAITING: "waiting", FAILED: "failed" }),
                n = Object.freeze({ REQUEST: "rweb/FETCH_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/FETCH_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/FETCH_GROK_CONVERSATION/FAILURE" }),
                i = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_HISTORY/FAILURE" }),
                c = Object.freeze({ REQUEST: "rweb/DELETE_GROK_MESSAGE/REQUEST", SUCCESS: "rweb/DELETE_GROK_MESSAGE/SUCCESS", FAILURE: "rweb/DELETE_GROK_MESSAGE/FAILURE" }),
                l = Object.freeze({ REQUEST: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/REQUEST", SUCCESS: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/SUCCESS", FAILURE: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/FETCH_GROK_MEDIA_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_MEDIA_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_MEDIA_HISTORY/FAILURE" }),
                g = Object.freeze({ REQUEST: "rweb/SEARCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/SEARCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/SEARCH_GROK_HISTORY/FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HOME/REQUEST", SUCCESS: "rweb/FETCH_GROK_HOME/SUCCESS", FAILURE: "rweb/FETCH_GROK_HOME/FAILURE" }),
                E = Object.freeze({ REQUEST: "rweb/FETCH_GROK_SHARE/REQUEST", SUCCESS: "rweb/FETCH_GROK_SHARE/SUCCESS", FAILURE: "rweb/FETCH_GROK_SHARE/FAILURE" }),
                S = Object.freeze({ REQUEST: "rweb/SET_PREFERENCES/REQUEST", SUCCESS: "rweb/SET_PREFERENCES/SUCCESS", FAILURE: "rweb/SET_PREFERENCES/FAILURE" }),
                m = Object.freeze({ REQUEST: "rweb/PIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/PIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/PIN_GROK_CONVERSATION/FAILURE" }),
                _ = Object.freeze({ REQUEST: "rweb/UNPIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/UNPIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/UNPIN_GROK_CONVERSATION/FAILURE" }),
                p = Object.freeze({ REQUEST: "rweb/CLEAR_CONVERSATIONS/REQUEST", SUCCESS: "rweb/CLEAR_CONVERSATIONS/SUCCESS", FAILURE: "rweb/CLEAR_CONVERSATIONS/FAILURE" }),
                R = Object.freeze({ REQUEST: "rweb/GROK_USER_EVENTS_LOG/REQUEST", SUCCESS: "rweb/GROK_USER_EVENTS_LOG/SUCCESS", FAILURE: "rweb/GROK_USER_EVENTS_LOG/FAILURE" }),
                h = "rweb/grok/DELETE_CONVERSATION",
                T = "rweb/grok/RENAME_CONVERSATION",
                I = "rweb/grok/SET_ABORT_CONTROLLER",
                A = "rweb/grok/CLEAR_CONVERSATION",
                O = "rweb/grok/USER_SEND_MESSAGE",
                C = "rweb/grok/REGENERATE_RESPONSE",
                b = "rweb/grok/GROK_RESPONSE_TYPING",
                w = "rweb/grok/GROK_RESPONSE_POSTS",
                f = "rweb/grok/GROK_RESPONSE_MEDIA_POSTS",
                k = "rweb/grok/GROK_RESPONSE_COMPLETE",
                N = "rweb/grok/GROK_RESPONSE_ERROR",
                U = "rweb/grok/GROK_RESPONSE_METADATA",
                M = "rweb/grok/GROK_RESPONSE_DISCLAIMER",
                P = "rweb/grok/GROK_RESPONSE_FILE_ATTACHMENTS",
                y = "rweb/grok/GROK_RESPONSE_FEEDBACK_LABELS",
                G = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTIONS",
                F = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTED_MODE",
                D = "rweb/grok/GROK_RESPONSE_CHAT_RESPONSE_ANNOTATIONS",
                v = "rweb/grok/GROK_RESPONSE_UPSELL",
                L = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENT",
                K = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENTS",
                H = "rweb/grok/GROK_RESPONSE_MESSAGE_STEP_ACCUMULATOR_UPDATE",
                Q = "rweb/grok/GROK_RESPONSE_MEMORY_REFERENCES",
                x = "rweb/grok/GROK_WEB_RESULTS",
                V = "rweb/grok/GROK_CITED_WEB_RESULTS",
                Y = "rweb/grok/ABORT_MESSAGE",
                j = "rweb/grok/SET_EXPECTED_IMAGE_ASPECT_RATIO",
                B = "rweb/grok/FETCH_CONVERSATION_ID_START",
                q = "rweb/grok/FETCH_CONVERSATION_ID_SUCCESS",
                W = "rweb/grok/FETCH_CONVERSATION_ID_FAILED",
                Z = "rweb/grok/EDITING_SET_ID",
                z = "rweb/grok/EDITING_CLEAR",
                $ = "rweb/grok/EDITING_COMMIT",
                J = "rweb/grok/RETRY_MESSAGE",
                X = "rweb/grok/SET_INPUT_PREFILL",
                ee = "rweb/grok/MODE_CHANGE",
                te = "rweb/grok/MODEL_CHANGE",
                se = "rweb/grok/SET_ACCESS_RESTRICTED_REASONS",
                re = "rweb/grok/SET_FREE_ACCESS",
                ae = "rweb/grok/SET_PREFERRED_PROMPTS",
                oe = "rweb/grok/SET_PROMPT_SOURCE",
                ne = "rweb/grok/NEW_CONVERSATION",
                ie = "rweb/grok/IMAGE_INTERMEDIATE_RESULT",
                ce = "rweb/grok/SET_GROK_INPUT_FILTER_KEY",
                le = "rweb/grok/SET_GROK_INPUT_FOCUSED",
                de = "rweb/grok/QUERY_TYPING",
                ge = "rweb/grok/ADD_BANNER_MESSAGE",
                ue = "rweb/grok/DELETE_MEDIA_HISTORY_ITEM",
                Ee = "rweb/grok/UPDATE_PERFORMANCE_METRICS",
                Se = "r/web/grok/SET_USING_EXPERIMENT",
                me = "r/web/grok/SET_PREFERRED_RESPONSE",
                _e = "rweb/grok/SET_GROK_INPUT_ADVANCED_SETTINGS",
                pe = "rweb/grok/SET_IS_PAST_THINKING_TRACE",
                Re = "rweb/grok/SET_REASONING_LAYOUT";
        },
        52570: (e, t, s) => {
            s.d(t, { NE: () => o, bY: () => d });
            var r = s(674132),
                a = s.n(r);
            const o = a().ead81122,
                n = a().f808a13a,
                i = a().e0481e5a,
                c = a().bc0a5b5a,
                l = a().ef674976,
                d = (e) => {
                    switch (e) {
                        case 429:
                            return n;
                        case 451:
                            return i;
                        case 401:
                        case 403:
                            return l;
                        case 503:
                            return c;
                        default:
                            return o;
                    }
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserAvatar-2291c9da.9de5b2aa.js.map

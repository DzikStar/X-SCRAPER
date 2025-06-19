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
                a = s(389071),
                o = s(189953);
            const n =
                ({ analytics: e, conversationKey: t }) =>
                async (e, s, { api: n, featureSwitches: i }) => {
                    const c = (0, a.bD)(t),
                        u = c.selectStatus(s());
                    if (!(u === o.Q_.TYPING || u === o.Q_.WAITING)) return Promise.resolve();
                    const d = c.selectConversationId(s()) || void 0,
                        l = c.selectMetadataForMessageId(s(), "currentResponse"),
                        g = l?.agentChatItemId || void 0;
                    await e(c.abortMessage());
                    const E = { responses: [], systemPromptName: "", grokModelOptionId: "", conversationId: d, responseToChatItemId: g, isCancel: !0 },
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
                c = s(919022),
                u = s(52570),
                d = s(155918);
            s(571372);
            const l = (e) => {
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
                g = async ({ analytics: e, api: t, dispatch: s, eventTag: g, flags: _, grokModule: m, method: p = "POST", requestBody: R, requestParams: h }) => {
                    const T = g ? ` (${g})` : "",
                        I = (function () {
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
                        f = Date.now();
                    let A = !1,
                        O = new AbortController();
                    s(m.setAbortController(O));
                    let C = !1;
                    const b = l(s),
                        w = [""],
                        k = [""];
                    let N = !0,
                        U = !1;
                    const y = new d.EG();
                    y.setRequestedCount(R.imageGenerationCount || 0),
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
                        })({ responses: R.responses, grokModule: m, dispatch: s });
                    const M = new a.fQ({ deepsearchArgs: R.deepsearchArgs, isDeepsearch: R.isDeepsearch });
                    let P = [],
                        G = [],
                        F = "",
                        D = !1,
                        L = 0,
                        v = !1,
                        K = !1;
                    const H = async ({ method: r, requestParams: o }) => {
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
                            })({ method: r, requestParams: o });
                            t.fetchClient
                                .dispatch(l, { method: r, credentials: "include", params: "GET" === r ? o : null, body: "POST" === r ? JSON.stringify(R) : null, signal: O?.signal, keepalive: _?.enableKeepalive }, _?.enableGrokApiHost ? "https://grok.x.com" : void 0)
                                .then(async (t) => {
                                    const o = t.headers.get("x-transaction-id");
                                    if ((o && s(m.updatePerformanceMetrics({ traceId: o })), !t.ok)) {
                                        I.record(`http-${t.status}`);
                                        const r = (0, u.bY)(t.status);
                                        return s(m.grokResponseError(r)), void (0, n.Uk)(e, `add-response failed with status ${t.status}${T}`);
                                    }
                                    const l = t.body?.getReader();
                                    if (!l) return s(m.grokResponseError(u.NE)), void (0, n.Uk)(e, `reader was not found${T}`);
                                    const g = new TextDecoder();
                                    let E = "";
                                    const p = setTimeout(() => {
                                            (0, n.eS)(e, !0);
                                        }, 5e3),
                                        h = await l.read();
                                    return (
                                        clearTimeout(p),
                                        (async function t({ done: o, value: p }) {
                                            if (o) {
                                                v = !1;
                                                if ((!w.length || w.every((e) => "" === e)) && !D) {
                                                    const t = `add-response failed to reach the network${T}`;
                                                    return M.isDeepsearch && S({ messageStepAccumulator: M, analytics: e, dispatch: s, errorMessage: t, grokModule: m, resumabilityQueue: b, method: r }), s(m.grokResponseError(u.NE)), (0, n.Uk)(e, t), void I.record("network-error");
                                                }
                                                I.record("time-to-last-chunk"),
                                                    (function ({ analytics: e, dispatch: t, grokModule: s, isUnifiedReasoningLayout: r, messageStepAccumulator: a, method: o, resumabilityQueue: i }) {
                                                        a.isDeepsearch &&
                                                            (function ({ analytics: e, dispatch: t, grokModule: s, isUnifiedReasoningLayout: r, messageStepAccumulator: a }) {
                                                                if ("PENDING" === a.state) return;
                                                                a.complete(!r), t(s.grokResponseMessageStepAccumulatorUpdate(a)), (0, n.y6)(e, a.getStreamDuration());
                                                            })({ messageStepAccumulator: a, analytics: e, dispatch: t, grokModule: s, isUnifiedReasoningLayout: r });
                                                        "GET" === o ? (i.resumingDispatch(() => t(s.updatePerformanceMetrics({ endStreamTime: Date.now() }))), i.resumingDispatch(() => t(s.grokResponseComplete()))) : "POST" === o && (t(s.updatePerformanceMetrics({ endStreamTime: Date.now() })), t(s.grokResponseComplete()));
                                                    })({ messageStepAccumulator: M, analytics: e, dispatch: s, grokModule: m, method: r, resumabilityQueue: b, isUnifiedReasoningLayout: K });
                                            }
                                            if (p) {
                                                I.recordOnce("time-to-first-chunk"), A || ((A = !0), s(m.updatePerformanceMetrics({ timeToFirstChunkMs: Date.now() - f })));
                                                const o = g.decode(p);
                                                if (((E += o), E.includes("\n"))) {
                                                    const t = E.split("\n");
                                                    E = t.pop();
                                                    for (const o of t)
                                                        if (C || "GET" !== r) {
                                                            const t = JSON.parse(o);
                                                            if (t.result?.uiLayout?.reasoningUILayout) {
                                                                const e = t.result.uiLayout.reasoningUILayout;
                                                                s(m.setReasoningLayout(e)), (K = "UNIFIED" === e);
                                                            }
                                                            const n = t.result?.sideBySideIndex ?? 0;
                                                            if ((null == t.result?.sideBySideIndex || U || (w.push(""), k.push(""), s(m.setUsingExperiment(!0)), (U = !0)), t.result?.query && s(m.queryTyping(t.result.query)), t.result?.bannerMessage && s(m.addBannerMessage(t.result.bannerMessage)), t.result?.xPostIds && (G.push(...(t.result.xPostIds || [])), (G = G.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(i.Z.fetchMultiple(G)), s(m.grokResponsePosts(G, n))), t.result?.xMediaPostIds)) {
                                                                const e = t.result.xMediaPostIds;
                                                                s(i.Z.fetchMultiple(e)), s(m.grokResponseMediaPosts(e));
                                                            }
                                                            if (t.result?.postIds) s(m.grokResponsePosts(t.result.postIds, n));
                                                            else if (t.result?.message && (!t.result?.messageTag || t.result?.messageTag === a.iS.FINAL)) {
                                                                const e = !w[n];
                                                                t.result?.isThinking ? (k[n] += t.result.message) : (w[n] += t.result.message), e && s(m.updatePerformanceMetrics({ timeToFirstTextMs: Date.now() - f }));
                                                                const o = t.result?.isThinking ? k[n] : w[n],
                                                                    i = t.result?.isThinking ? "thinkingTrace" : "message";
                                                                "thinkingTrace" === i && N && (N = !1), "message" === i && k[0].length > 0 && !N && ((N = !0), "GET" === r ? b.resumingDispatch(() => s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))) : s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))), "GET" === r ? b.resumingDispatch(() => s(m.grokResponseTyping(o, i, n))) : s(m.grokResponseTyping(o, i, n)), (t.result?.messageTag === a.iS.FINAL || (t.result?.message && "STARTED" === M.state)) && (M.updateFinalAnswer({ messageTag: a.iS.FINAL, message: t.result?.message || "" }), M.complete(!K), "GET" === r ? (b.resumingDispatch(() => s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))), b.resumingDispatch(() => s(m.grokResponseMessageStepAccumulatorUpdate(M)))) : (s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() })), s(m.grokResponseMessageStepAccumulatorUpdate(M))));
                                                            }
                                                            if (("error" === t.result?.responseType && s(m.grokResponseFileAttachments([])), t.result?.imageAttachmentCount)) {
                                                                let e = t.result.imageAttachmentCount;
                                                                R.imageGenerationCount && (e = Math.min(e, R.imageGenerationCount)), y.setCount(e);
                                                            }
                                                            if ((t.result?.imageWidth && t.result?.imageHeight && s(m.setExpectedImageAspectRatio(t.result?.imageWidth / t.result?.imageHeight)), "image" === t.result?.responseType || t.result?.imageAttachment?.imageUrl)) {
                                                                D = !0;
                                                                const e = t.result.imageAttachment;
                                                                y.addAttachment({ fileName: e?.fileName ?? "image", mimeType: e?.mimeType ?? "image/jpeg", mediaId: e?.mediaIdStr, url: e?.imageUrl }), s(m.grokResponseFileAttachments(y.generateAttachmentList()));
                                                            }
                                                            t.result?.feedbackLabels && s(m.grokResponseFeedbackLabels(t.result.feedbackLabels)), t.result?.disclaimer && s(m.grokResponseDisclaimer(t.result.disclaimer)), t.result?.followUpSuggestions && s(m.grokResponseFollowUpSuggestions(t.result.followUpSuggestions)), t.result?.followUpSuggestedMode && s(m.grokResponseFollowUpSuggestedMode(t.result?.followUpSuggestedMode)), t.result?.chatResponseAnnotations && s(m.grokResponseChatResponseAnnotations(t.result.chatResponseAnnotations)), t.result?.upsell && s(m.grokResponseUpsell(t.result.upsell)), (t.agentChatItemId || t.userChatItemId) && (t.agentChatItemId && (F = t.agentChatItemId), s(m.updatePerformanceMetrics({ startStreamTime: Date.now() })), s(m.grokResponseMetadata({ agentChatItemId: t.agentChatItemId, userChatItemId: t.userChatItemId }))), t.result?.webResults && (P.push(...(t.result?.webResults || [])), (P = P.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url))), s(m.grokWebResults(P, n))), t.result?.citedWebResults && s(m.grokCitedWebResults(t.result.citedWebResults, n));
                                                            const u = t.result?.event;
                                                            if ((u && (u.imageAttachmentUpdate && s(m.imageIntermediateResult({ ...u.imageAttachmentUpdate, progress: u.imageAttachmentUpdate.progress / 100, imageUrl: u.imageAttachmentUpdate.imageUrl })), u.imageAttachmentRemoval && (y.setAttachmentAsModerated(u.imageAttachmentRemoval.imageIdStr), s(m.grokResponseFileAttachments(y.generateAttachmentList())))), _?.enableLocation && t.result?.doLocationRequest && !R.geoLocation && s(m.grokResponseCardAttachment({ cardType: "geo_location_request" })), t.result?.cardAttachment)) {
                                                                const r = (0, d.dj)(t.result.cardAttachment, e);
                                                                if (r) {
                                                                    if ((s(m.grokResponseCardAttachment(r)), "x_posts_card" === r.cardType)) {
                                                                        const e = r.post_ids;
                                                                        s(i.Z.fetchMultiple(e));
                                                                    }
                                                                    "x_users_card" === r.cardType && s(c.ZP.fetchManyByScreenNames(r.user_handles));
                                                                }
                                                            }
                                                            if ((t.result?.memoryReferences && s(m.grokResponseMemoryReferences(t.result.memoryReferences)), t.result?.messageTag && (t.result?.message || t.result?.messageStepId))) {
                                                                const e = t.result?.messageTag;
                                                                e !== a.iS.FINAL && e !== a.iS.FINAL_LONG && (M.updateStepsFromRawMessage({ message: t.result?.message || "", messageTag: e, messageStepId: t.result?.messageStepId || -1, webResults: t.result?.webResults || [], xPostIds: t.result?.xPostIds || [] }), "GET" === r ? b.resumingDispatch(() => s(m.grokResponseMessageStepAccumulatorUpdate(M))) : s(m.grokResponseMessageStepAccumulatorUpdate(M)));
                                                            }
                                                        } else {
                                                            const e = JSON.parse(o);
                                                            (C = !0), e.message && ((w[0] += e.message), s(m.grokResponseTyping(e.message ?? "", "message"))), e.result?.uiLayout && e.result?.uiLayout.reasoningUILayout && ((K = "UNIFIED" === e.result.uiLayout.reasoningUILayout), s(m.setReasoningLayout(e.result.uiLayout.reasoningUILayout)));
                                                            const t = new a.fQ();
                                                            if (e.messageStepsHeaders && e?.messageStepsHeaders.length > 0) {
                                                                t.defaultFinalAnswer = e.message || "";
                                                                const r = [];
                                                                for (const t of e.messageStepsHeaders) {
                                                                    const e = [];
                                                                    for (const r of t.steps) {
                                                                        const t = (r.xPostIds || []).map((e) => e),
                                                                            a = (r.webResults || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title }));
                                                                        t.length && (G.push(...t), (G = G.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(i.Z.fetchMultiple(t))), a.length && (P.push(...a), (P = P.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url)))), e.push({ header: r.header || "", assistant: r.assistant || "", decision: r.decision || "", finalMessage: r.finalMessage || "", functionCall: r.functionCall || "", rawFunctionResult: r.rawFunctionResult || "", summary: r.summary || "", webResults: a, xPostIds: t });
                                                                    }
                                                                    r.push({ header: t.header || "", steps: e });
                                                                }
                                                                t.initiateFromHistoryResponses(r, !0), s(m.grokResponseMessageStepAccumulatorUpdate(t));
                                                            }
                                                            e.thinkingTrace && ((k[0] += e.thinkingTrace), s(m.grokResponseTyping(e.thinkingTrace ?? "", "thinkingTrace")));
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
                                        })(h)
                                    );
                                })
                                .catch(async (t) => {
                                    v = !1;
                                    if (t instanceof window.DOMException && "AbortError" === t.name) "STARTED" === M.state && M.isDeepsearch && (0, n.YI)(e, { durationMs: M.getStreamDuration(), messageTagCounts: M.debugMessageTagCount }), b.abortQueue(), I.record("abort");
                                    else {
                                        if (Q()) return void (await x(t.message));
                                        M.isDeepsearch && S({ messageStepAccumulator: M, analytics: e, dispatch: s, grokModule: m, resumabilityQueue: b, method: r, errorMessage: t ? t.message : void 0 }), s(m.grokResponseError(u.NE)), (0, n.kl)(e, t), I.record("error");
                                    }
                                    s(m.updatePerformanceMetrics({ endStreamTime: Date.now() })), k[0].length > 0 && s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }));
                                });
                        },
                        Q = () => {
                            const e = E(),
                                t = Boolean(R.isDeepsearch) || Boolean(R.isReasoning);
                            return !v && L < (_?.numRetries || 0) && !!F && !!e && t && "POST" === p;
                        },
                        x = async (t) => {
                            O.abort(), L++, (v = !0), (0, n.mm)(e, L, t), (O = new AbortController()), await s(m.setAbortController(O)), H({ method: "GET", requestParams: { ...h, conversationId: E(), responseToChatItemId: F, streamInitialChunkWhole: !1 } });
                        };
                    return H({ method: p, requestParams: h });
                };
            function E() {
                return new URLSearchParams(window.location.search).get("conversation") || "";
            }
            function S({ analytics: e, dispatch: t, errorMessage: s, grokModule: r, messageStepAccumulator: a, method: o, resumabilityQueue: i }) {
                "STARTED" === a.state && (a.onAbort(), "GET" === o ? (i.resumingDispatch(() => t(r.grokResponseMessageStepAccumulatorUpdate(a))), i.resumingDispatch(() => t(r.updatePerformanceMetrics({ deepsearchEnd: Date.now() })))) : t(r.grokResponseMessageStepAccumulatorUpdate(a)), (0, n.hq)(e, { durationMs: a.getStreamDuration(), errorMessage: s }));
            }
        },
        100326: (e, t, s) => {
            s.d(t, { X: () => i });
            s(571372);
            var r = s(834949),
                a = s.n(r),
                o = s(623494),
                n = s(52570);
            const i = ({ analysisEntityId: e, analytics: t, api: s, dispatch: r, fromShareId: i, fromUniversalSearch: c, grokModule: u }) => (
                r(u.fetchConversationIdStart()),
                s.apiClient
                    .graphQL(a(), { fromShare: i, fromUniversalSearch: c })
                    .then((s) => {
                        const a = s.create_grok_conversation?.conversation_id,
                            i = s.create_grok_conversation?.error_code;
                        if (a) return r(u.fetchConversationIdSuccess(a, e)), a;
                        if (i) throw (r(u.fetchConversationIdFailed(n.NE)), (0, o.Uk)(t, "conversation_id failed"), new Error(i));
                    })
                    .catch((e) => {
                        const t = e.errors?.[0]?.code,
                            s = (0, n.bY)(t);
                        r(u.fetchConversationIdFailed(s));
                    })
            );
        },
        96275: (e, t, s) => {
            s.d(t, { d: () => _ });
            s(136728);
            var r = s(506899),
                a = s(389071),
                o = s(6157),
                n = s(171697),
                i = s(397159),
                c = s(917799),
                u = s(56519),
                d = s(836255),
                l = s(919022),
                g = s(189953),
                E = s(155918),
                S = s(250781);
            const _ =
                (e, t) =>
                (s, _, { api: m }) =>
                    c._O(s, { params: { restId: e }, request: m.withEndpoint(o.Z).fetchConversation })({ actionTypes: g.Lc, context: "FETCH_GROK_CONVERSATION", meta: { conversationId: e } }, (o) => {
                        if (!o?.grok_conversation_items_by_rest_id?.items) return;
                        const c = e;
                        s((0, a.Ki)(c));
                        const m = (0, a.YJ)(_(), c);
                        s(m.clearConversation()), s(m.fetchConversationIdSuccess(e));
                        const p = o?.grok_conversation_items_by_rest_id?.items ? [...o.grok_conversation_items_by_rest_id.items].reverse() : [];
                        p.forEach((o, c) => {
                            if (o.is_partial && c === p.length - 1)
                                return (
                                    s(
                                        (
                                            ({ agentChatItemId: e, analytics: t, conversationKey: s }) =>
                                            async (r, o, { api: n, featureSwitches: i }) => {
                                                const c = (0, a.bD)(s),
                                                    u = { responses: [], systemPromptName: "", grokModelOptionId: "", conversationId: s },
                                                    d = i.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                                                return (0, S.D)({ grokModule: c, requestParams: { conversationId: s, responseToChatItemId: e, streamInitialChunkWhole: !1 }, requestBody: u, dispatch: r, method: "GET", analytics: t, api: n, flags: { numRetries: d } });
                                            }
                                        )({ conversationKey: e, agentChatItemId: o.chat_item_id ?? "", analytics: t }),
                                    ),
                                    void s(m.grokResponseMetadata({ agentChatItemId: o.chat_item_id }))
                                );
                            o.post_ids_results?.forEach((e) => {
                                if ("Tweet" === e.result?.__typename) {
                                    const { entities: t } = (0, r.Fv)(e.result, n.Z);
                                    s((0, u.dP)(t));
                                }
                            }),
                                o.media_post_ids_results?.forEach((e) => {
                                    if ("Tweet" === e.result?.__typename) {
                                        const { entities: t } = (0, r.Fv)(e.result, n.Z);
                                        s((0, u.dP)(t));
                                    }
                                });
                            const _ = (o.post_ids_results ?? []).map((e) => e.result?.rest_id).filter(Boolean),
                                R = (o.media_post_ids_results ?? []).map((e) => e.result?.rest_id).filter(Boolean);
                            let h = o.file_attachments?.map((e) => ({ fileName: e.file_name ?? "image.jpeg", mediaId: e.media_id, isPublic: !1, mimeType: e.mime_type ?? "image/jpeg", url: e.url ?? (e.media_id ? `https://api.x.com/2/grok/attachment.json?mediaId=${e.media_id}` : void 0) })) ?? [];
                            if ((0 === h.length && (h = o.media_urls?.map((e) => ({ fileName: "image.jpeg", isPublic: !1, mimeType: "image/jpeg", url: e })) ?? []), "User" === o.sender_type && s(m.userSendMessage({ message: o.message ?? "", fileAttachments: h, bannerMessages: o.banner_message ? [o.banner_message] : void 0, postIds: _, sender: 1 })), "Agent" === o.sender_type)) {
                                if ((s(m.grokResponseTyping(o.message ?? "", "message")), o.thinking_trace)) {
                                    const e = o.thinking_trace;
                                    s(m.grokResponseTyping(e, "thinkingTrace")), (o.is_partial && c === p.length - 1) || s(m.setIsPastThinkingTrace(!0));
                                }
                                let e;
                                o.ui_layout?.reasoning_ui_layout && ("Split" === o.ui_layout.reasoning_ui_layout ? (e = "SPLIT") : "Unified" === o.ui_layout.reasoning_ui_layout && (e = "UNIFIED"), e && s(m.setReasoningLayout(e))), o.banner_message && s(m.addBannerMessage(o.banner_message)), h.length && s(m.grokResponseFileAttachments(h)), o.memory_references && s(m.grokResponseMemoryReferences(o.memory_references.map((e) => ({ conversation_id: e.conversation_id, summary: e.conversation_summary }))));
                                const t = [];
                                if (o.card_attachments)
                                    for (const e of o.card_attachments) {
                                        const r = (0, E.dj)(e);
                                        r && (t.push(r), "x_posts_card" === r.cardType ? s(d.Z.fetchMultipleIfNeeded(r.post_ids)) : "x_users_card" === r.cardType && s(l.ZP.fetchManyByScreenNames(r.user_handles)));
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
                                } else R.length && s(m.grokResponseMediaPosts(R)), _.length && s(m.grokResponsePosts(_)), o.web_results && s(m.grokWebResults([...o.web_results])), o.cited_web_results && s(m.grokCitedWebResults([...o.cited_web_results]));
                                s(m.grokResponseMetadata({ agentChatItemId: o.chat_item_id, userChatItemId: p[c - 1].chat_item_id, isDeleted: o.is_deleted })), s(m.grokResponseComplete());
                            }
                            s(m.setMode("Fun" === o.grok_mode ? g.IK.FUN : g.IK.REGULAR));
                        });
                    });
        },
        327597: (e, t, s) => {
            s.d(t, { u: () => l });
            var r = s(323265),
                a = s(389071),
                o = s(623494),
                n = s(806528),
                i = s(155918),
                c = s(958602),
                u = s(250781),
                d = s(100326);
            const l =
                ({ analytics: e, conversationKey: t }) =>
                ({ analysisEntityId: s, attachments: l, mode: g, onStart: E, returnCitations: S, promptMetadata: _ = { promptSource: "NATURAL", action: "INPUT" }, returnSearchResults: m = !0, features: p = { eagerTweets: !0, serverHistory: !0 }, text: R, isGrokDrawer: h = !1, trendPromptIdStr: T, imageGenerationCount: I, source: f, toolOverrides: A, isReasoning: O, isDeepsearch: C, isImageGen: b, deepsearchArgsOverride: w, personalityId: k }) =>
                async (T, N, { api: U, featureSwitches: y }) => {
                    const M = !r.ZP.isTwitterApp() && y.isTrue("responsive_web_grok_api_enable_grok_host"),
                        P = (0, a.bD)(t);
                    let G = P.selectConversationId(N());
                    const F = r.ZP.isAndroid(),
                        D = r.ZP.isIOS();
                    if ((null != P.selectCurrentResponseMessage(N()) && (await T((0, c.I)({ analytics: e, conversationKey: t }))), (G ??= await (0, d.X)({ analytics: e, api: U, dispatch: T, grokModule: P, analysisEntityId: s })), !G)) return void (0, o.Uk)(e, "conversation couln't be found or created");
                    let L;
                    const v = y.isTrue("responsive_web_grok_location_enabled");
                    if (v) {
                        const e = (0, n.fw)(N())?.position;
                        e && (L = { latitude: e.coords.latitude, longitude: e.coords.longitude, accuracy: e.coords.accuracy });
                    }
                    const K = g ?? P.selectMode(N()),
                        H = (0, a.F9)(N()),
                        Q = P.selectConversationForAPI(N()),
                        x = (0, a.en)(N()),
                        V = { ...A };
                    if ((b && (V.imageGen = !0), x && x.toolOverrides)) {
                        const e = x.toolOverrides;
                        Object.keys(e).forEach((t) => {
                            V[t] = e[t];
                        });
                    }
                    if (!(R || (l && 0 !== l.length))) return Promise.resolve();
                    const Y = { message: R ?? "", sender: i.CI.HUMAN, promptSource: f ?? "", ...(s ? { postIds: [s] } : void 0) };
                    l && (Y.fileAttachments = l), C && (Y.isDeepsearch = C), O && (Y.isReasoning = O);
                    const j = { responses: Q.concat(Y), systemPromptName: K, grokModelOptionId: H, conversationId: G, returnSearchResults: m, returnCitations: S, promptMetadata: _, imageGenerationCount: I, requestFeatures: p, ...(s ? { analysisEntityId: s } : void 0), geoLocation: L, enableSideBySide: !("GROK_ANALYZE" === _.promptSource || h || D || F || C || O), toolOverrides: V, isDeepsearch: C, isReasoning: O, personalityId: k, deepsearchArgs: w ?? (C ? x?.deepsearchArgs : void 0) };
                    T(P.setPromptSource(f || "")), T(P.setUsingExperiment(!1)), T(P.userSendMessage(Y, _)), (0, o.pv)(e, { conversationLength: Q.length, isFileAttached: Boolean(Y.fileAttachments?.length), isDeepsearch: j.isDeepsearch || void 0, isReasoning: j.isReasoning || void 0 }), E?.();
                    const W = y.isTrue("responsive_web_grok_enable_add_response_keepalive") && (C || O),
                        B = y.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                    return (0, u.D)({ grokModule: P, requestBody: j, dispatch: T, analytics: e, api: U, flags: { enableLocation: v, enableGrokApiHost: M, numRetries: B, enableKeepalive: W } });
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
            s.d(t, { $t: () => ne, A0: () => _e, BA: () => se, BS: () => y, CH: () => P, CR: () => Z, Cr: () => f, DX: () => B, Dh: () => p, Dn: () => M, En: () => u, FF: () => Q, FV: () => N, Gy: () => k, HF: () => S, IK: () => a, JO: () => j, Jt: () => re, KH: () => I, L0: () => $, Lc: () => n, OW: () => U, Oj: () => b, P9: () => Y, Q_: () => o, Qg: () => L, Qh: () => X, Sv: () => i, TY: () => D, Tv: () => q, UN: () => C, VK: () => c, WK: () => te, Ws: () => d, Xg: () => z, Xi: () => v, Y8: () => l, Yb: () => h, Yf: () => r, Yx: () => g, ZN: () => W, _i: () => ce, ar: () => x, cA: () => Se, cw: () => oe, dK: () => E, dO: () => R, dZ: () => F, dw: () => ge, f1: () => le, fH: () => Re, ip: () => H, j$: () => me, lQ: () => ee, lh: () => _, lm: () => m, mq: () => pe, my: () => O, nK: () => w, o$: () => G, px: () => ie, qd: () => V, ru: () => Ee, ub: () => A, vc: () => K, vi: () => T, wG: () => ae, x5: () => J, yB: () => de, z2: () => ue });
            const r = "grok",
                a = Object.freeze({ FUN: "fun", REGULAR: "" }),
                o = Object.freeze({ IDLE: "idle", TYPING: "typing", WAITING: "waiting", FAILED: "failed" }),
                n = Object.freeze({ REQUEST: "rweb/FETCH_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/FETCH_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/FETCH_GROK_CONVERSATION/FAILURE" }),
                i = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_HISTORY/FAILURE" }),
                c = Object.freeze({ REQUEST: "rweb/DELETE_GROK_MESSAGE/REQUEST", SUCCESS: "rweb/DELETE_GROK_MESSAGE/SUCCESS", FAILURE: "rweb/DELETE_GROK_MESSAGE/FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/REQUEST", SUCCESS: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/SUCCESS", FAILURE: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/FETCH_GROK_MEDIA_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_MEDIA_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_MEDIA_HISTORY/FAILURE" }),
                l = Object.freeze({ REQUEST: "rweb/SEARCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/SEARCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/SEARCH_GROK_HISTORY/FAILURE" }),
                g = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HOME/REQUEST", SUCCESS: "rweb/FETCH_GROK_HOME/SUCCESS", FAILURE: "rweb/FETCH_GROK_HOME/FAILURE" }),
                E = Object.freeze({ REQUEST: "rweb/FETCH_GROK_SHARE/REQUEST", SUCCESS: "rweb/FETCH_GROK_SHARE/SUCCESS", FAILURE: "rweb/FETCH_GROK_SHARE/FAILURE" }),
                S = Object.freeze({ REQUEST: "rweb/SET_PREFERENCES/REQUEST", SUCCESS: "rweb/SET_PREFERENCES/SUCCESS", FAILURE: "rweb/SET_PREFERENCES/FAILURE" }),
                _ = Object.freeze({ REQUEST: "rweb/PIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/PIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/PIN_GROK_CONVERSATION/FAILURE" }),
                m = Object.freeze({ REQUEST: "rweb/UNPIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/UNPIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/UNPIN_GROK_CONVERSATION/FAILURE" }),
                p = Object.freeze({ REQUEST: "rweb/CLEAR_CONVERSATIONS/REQUEST", SUCCESS: "rweb/CLEAR_CONVERSATIONS/SUCCESS", FAILURE: "rweb/CLEAR_CONVERSATIONS/FAILURE" }),
                R = Object.freeze({ REQUEST: "rweb/GROK_USER_EVENTS_LOG/REQUEST", SUCCESS: "rweb/GROK_USER_EVENTS_LOG/SUCCESS", FAILURE: "rweb/GROK_USER_EVENTS_LOG/FAILURE" }),
                h = "rweb/grok/DELETE_CONVERSATION",
                T = "rweb/grok/RENAME_CONVERSATION",
                I = "rweb/grok/SET_ABORT_CONTROLLER",
                f = "rweb/grok/CLEAR_CONVERSATION",
                A = "rweb/grok/USER_SEND_MESSAGE",
                O = "rweb/grok/REGENERATE_RESPONSE",
                C = "rweb/grok/GROK_RESPONSE_TYPING",
                b = "rweb/grok/GROK_RESPONSE_POSTS",
                w = "rweb/grok/GROK_RESPONSE_MEDIA_POSTS",
                k = "rweb/grok/GROK_RESPONSE_COMPLETE",
                N = "rweb/grok/GROK_RESPONSE_ERROR",
                U = "rweb/grok/GROK_RESPONSE_METADATA",
                y = "rweb/grok/GROK_RESPONSE_DISCLAIMER",
                M = "rweb/grok/GROK_RESPONSE_FILE_ATTACHMENTS",
                P = "rweb/grok/GROK_RESPONSE_FEEDBACK_LABELS",
                G = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTIONS",
                F = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTED_MODE",
                D = "rweb/grok/GROK_RESPONSE_CHAT_RESPONSE_ANNOTATIONS",
                L = "rweb/grok/GROK_RESPONSE_UPSELL",
                v = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENT",
                K = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENTS",
                H = "rweb/grok/GROK_RESPONSE_MESSAGE_STEP_ACCUMULATOR_UPDATE",
                Q = "rweb/grok/GROK_RESPONSE_MEMORY_REFERENCES",
                x = "rweb/grok/GROK_WEB_RESULTS",
                V = "rweb/grok/GROK_CITED_WEB_RESULTS",
                Y = "rweb/grok/ABORT_MESSAGE",
                j = "rweb/grok/SET_EXPECTED_IMAGE_ASPECT_RATIO",
                W = "rweb/grok/FETCH_CONVERSATION_ID_START",
                B = "rweb/grok/FETCH_CONVERSATION_ID_SUCCESS",
                q = "rweb/grok/FETCH_CONVERSATION_ID_FAILED",
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
                ue = "rweb/grok/SET_GROK_INPUT_FOCUSED",
                de = "rweb/grok/QUERY_TYPING",
                le = "rweb/grok/ADD_BANNER_MESSAGE",
                ge = "rweb/grok/DELETE_MEDIA_HISTORY_ITEM",
                Ee = "rweb/grok/UPDATE_PERFORMANCE_METRICS",
                Se = "r/web/grok/SET_USING_EXPERIMENT",
                _e = "r/web/grok/SET_PREFERRED_RESPONSE",
                me = "rweb/grok/SET_GROK_INPUT_ADVANCED_SETTINGS",
                pe = "rweb/grok/SET_IS_PAST_THINKING_TRACE",
                Re = "rweb/grok/SET_REASONING_LAYOUT";
        },
        52570: (e, t, s) => {
            s.d(t, { NE: () => o, bY: () => d });
            var r = s(111677),
                a = s.n(r);
            const o = a().ead81122,
                n = a().f808a13a,
                i = a().e0481e5a,
                c = a().bc0a5b5a,
                u = a().ef674976,
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
                            return o;
                    }
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DirectMessages-bfd49e49.94323fba.js.map

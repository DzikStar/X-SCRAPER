"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DirectMessages-bfd49e49", "bundle.UserAvatar-2291c9da"],
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
                        d = c.selectStatus(s());
                    if (!(d === o.Q_.TYPING || d === o.Q_.WAITING)) return Promise.resolve();
                    const l = c.selectConversationId(s()) || void 0,
                        E = c.selectMetadataForMessageId(s(), "currentResponse"),
                        u = E?.agentChatItemId || void 0;
                    await e(c.abortMessage());
                    const g = { responses: [], systemPromptName: "", grokModelOptionId: "", conversationId: l, responseToChatItemId: u, isCancel: !0 },
                        S = !r.ZP.isTwitterApp() && i.isTrue("responsive_web_grok_api_enable_grok_host");
                    return n.fetchClient.dispatch("/2/grok/add_response.json", { method: "POST", credentials: "include", body: JSON.stringify(g) }, S ? "https://grok.x.com" : void 0).then(async (e) => {});
                };
        },
        250781: (e, t, s) => {
            s.d(t, { D: () => E });
            s(890103), s(136728), s(875640), s(543673), s(240753), s(128399);
            var r = s(323265),
                a = s(303157),
                o = s(774717),
                n = s(623494),
                i = s(836255),
                c = s(52570),
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
                E = async ({ analytics: e, api: t, dispatch: s, eventTag: E, flags: S, grokModule: m, method: p = "POST", requestBody: _, requestParams: R }) => {
                    const h = E ? ` (${E})` : "",
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
                    let O = !1,
                        C = new AbortController();
                    s(m.setAbortController(C));
                    let b = !1;
                    const w = l(s),
                        f = [""],
                        A = [""];
                    let k = !0,
                        N = !1;
                    const U = new d.EG();
                    U.setRequestedCount(_.imageGenerationCount || 0),
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
                        })({ responses: _.responses, grokModule: m, dispatch: s });
                    const P = new a.Fk(_.deepsearchArgs);
                    let M = [],
                        y = [],
                        G = "",
                        D = !1,
                        F = 0,
                        v = !1;
                    const L = async ({ method: r, requestParams: o }) => {
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
                                .dispatch(l, { method: r, credentials: "include", params: "GET" === r ? o : null, body: "POST" === r ? JSON.stringify(_) : null, signal: C?.signal, keepalive: S?.enableKeepalive }, S?.enableGrokApiHost ? "https://grok.x.com" : void 0)
                                .then(async (t) => {
                                    const o = t.headers.get("x-transaction-id");
                                    if ((o && s(m.updatePerformanceMetrics({ traceId: o })), !t.ok)) {
                                        T.record(`http-${t.status}`);
                                        const r = (0, c.bY)(t.status);
                                        return s(m.grokResponseError(r)), void (0, n.Uk)(e, `add-response failed with status ${t.status}${h}`);
                                    }
                                    const l = t.body?.getReader();
                                    if (!l) return s(m.grokResponseError(c.NE)), void (0, n.Uk)(e, `reader was not found${h}`);
                                    const E = new TextDecoder();
                                    let u = "";
                                    const p = setTimeout(() => {
                                            (0, n.eS)(e, !0);
                                        }, 5e3),
                                        R = await l.read();
                                    return (
                                        clearTimeout(p),
                                        (async function t({ done: o, value: p }) {
                                            if (o) {
                                                v = !1;
                                                if ((!f.length || f.every((e) => "" === e)) && !D) {
                                                    const t = `add-response failed to reach the network${h}`;
                                                    return g({ deepSearchSummaryAccumulator: P, analytics: e, dispatch: s, errorMessage: t, grokModule: m, resumabilityQueue: w, method: r }), s(m.grokResponseError(c.NE)), (0, n.Uk)(e, t), void T.record("network-error");
                                                }
                                                T.record("time-to-last-chunk"),
                                                    (function ({ analytics: e, deepSearchSummaryAccumulator: t, dispatch: s, grokModule: r, method: a, resumabilityQueue: o }) {
                                                        (function ({ analytics: e, deepSearchSummaryAccumulator: t, dispatch: s, grokModule: r }) {
                                                            if ("PENDING" === t.state) return;
                                                            t.complete(), s(r.grokResponseDeepSearchUpdate(t)), (0, n.y6)(e, t.getStreamDuration());
                                                        })({ deepSearchSummaryAccumulator: t, analytics: e, dispatch: s, grokModule: r }),
                                                            "GET" === a ? (o.resumingDispatch(() => s(r.updatePerformanceMetrics({ endStreamTime: Date.now() }))), o.resumingDispatch(() => s(r.grokResponseComplete()))) : "POST" === a && (s(r.updatePerformanceMetrics({ endStreamTime: Date.now() })), s(r.grokResponseComplete()));
                                                    })({ deepSearchSummaryAccumulator: P, analytics: e, dispatch: s, grokModule: m, method: r, resumabilityQueue: w });
                                            }
                                            if (p) {
                                                T.recordOnce("time-to-first-chunk"), O || ((O = !0), s(m.updatePerformanceMetrics({ timeToFirstChunkMs: Date.now() - I })));
                                                const o = E.decode(p);
                                                if (((u += o), u.includes("\n"))) {
                                                    const t = u.split("\n");
                                                    u = t.pop();
                                                    for (const o of t)
                                                        if (b || "GET" !== r) {
                                                            const t = JSON.parse(o),
                                                                n = t.result?.sideBySideIndex ?? 0;
                                                            if ((t.result?.isThinking && (t.result = { ...t.result, messageTag: void 0 }), null == t.result?.sideBySideIndex || N || (f.push(""), A.push(""), s(m.setUsingExperiment(!0)), (N = !0)), t.result?.query && s(m.queryTyping(t.result.query)), t.result?.bannerMessage && s(m.addBannerMessage(t.result.bannerMessage)), t.result?.xPostIds && (y.push(...(t.result.xPostIds || [])), (y = y.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(i.Z.fetchMultiple(y)), s(m.grokResponsePosts(y, n))), t.result?.xMediaPostIds)) {
                                                                const e = t.result.xMediaPostIds;
                                                                s(i.Z.fetchMultiple(e)), s(m.grokResponseMediaPosts(e));
                                                            }
                                                            if (t.result?.postIds) s(m.grokResponsePosts(t.result.postIds, n));
                                                            else if (t.result?.message && (!t.result?.messageTag || t.result?.messageTag === a.iS.FINAL)) {
                                                                const e = !f[n];
                                                                t.result?.isThinking ? (A[n] += t.result.message) : (f[n] += t.result.message), e && s(m.updatePerformanceMetrics({ timeToFirstTextMs: Date.now() - I }));
                                                                const o = t.result?.isThinking ? A[n] : f[n],
                                                                    i = t.result?.isThinking ? "thinkingTrace" : "message";
                                                                "thinkingTrace" === i && k && (k = !1), "message" === i && A[0].length > 0 && !k && ((k = !0), "GET" === r ? w.resumingDispatch(() => s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))) : s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))), "GET" === r ? w.resumingDispatch(() => s(m.grokResponseTyping(o, i, n))) : s(m.grokResponseTyping(o, i, n)), (t.result?.messageTag === a.iS.FINAL || (t.result?.message && "STARTED" === P.state)) && (P.updateFinalAnswer({ messageTag: a.iS.FINAL, message: t.result?.message || "" }), P.complete(), "GET" === r ? (w.resumingDispatch(() => s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))), w.resumingDispatch(() => s(m.grokResponseDeepSearchUpdate(P)))) : (s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() })), s(m.grokResponseDeepSearchUpdate(P))));
                                                            }
                                                            if (("error" === t.result?.responseType && s(m.grokResponseFileAttachments([])), t.result?.imageAttachmentCount)) {
                                                                let e = t.result.imageAttachmentCount;
                                                                _.imageGenerationCount && (e = Math.min(e, _.imageGenerationCount)), U.setCount(e);
                                                            }
                                                            if ((t.result?.imageWidth && t.result?.imageHeight && s(m.setExpectedImageAspectRatio(t.result?.imageWidth / t.result?.imageHeight)), "image" === t.result?.responseType || t.result?.imageAttachment?.imageUrl)) {
                                                                D = !0;
                                                                const e = t.result.imageAttachment;
                                                                U.addAttachment({ fileName: e?.fileName ?? "image", mimeType: e?.mimeType ?? "image/jpeg", mediaId: e?.mediaIdStr, url: e?.imageUrl }), s(m.grokResponseFileAttachments(U.generateAttachmentList()));
                                                            }
                                                            t.result?.feedbackLabels && s(m.grokResponseFeedbackLabels(t.result.feedbackLabels)), t.result?.disclaimer && s(m.grokResponseDisclaimer(t.result.disclaimer)), t.result?.followUpSuggestions && s(m.grokResponseFollowUpSuggestions(t.result.followUpSuggestions)), t.result?.followUpSuggestedMode && s(m.grokResponseFollowUpSuggestedMode(t.result?.followUpSuggestedMode)), t.result?.chatResponseAnnotations && s(m.grokResponseChatResponseAnnotations(t.result.chatResponseAnnotations)), t.result?.upsell && s(m.grokResponseUpsell(t.result.upsell)), (t.agentChatItemId || t.userChatItemId) && (t.agentChatItemId && (G = t.agentChatItemId), s(m.updatePerformanceMetrics({ startStreamTime: Date.now() })), s(m.grokResponseMetadata({ agentChatItemId: t.agentChatItemId, userChatItemId: t.userChatItemId }))), t.result?.webResults && (M.push(...(t.result?.webResults || [])), (M = M.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url))), s(m.grokWebResults(M, n))), t.result?.citedWebResults && s(m.grokCitedWebResults(t.result.citedWebResults, n));
                                                            const c = t.result?.event;
                                                            if ((c && (c.imageAttachmentUpdate && s(m.imageIntermediateResult({ ...c.imageAttachmentUpdate, progress: c.imageAttachmentUpdate.progress / 100, imageUrl: c.imageAttachmentUpdate.imageUrl })), c.imageAttachmentRemoval && (U.setAttachmentAsModerated(c.imageAttachmentRemoval.imageIdStr), s(m.grokResponseFileAttachments(U.generateAttachmentList())))), S?.enableLocation && t.result?.doLocationRequest && !_.geoLocation && s(m.grokResponseCardAttachment({ cardType: "geo_location_request" })), t.result?.cardAttachment)) {
                                                                const r = (0, d.dj)(t.result.cardAttachment, e);
                                                                r && s(m.grokResponseCardAttachment(r));
                                                            }
                                                            if ((t.result?.memoryReferences && s(m.grokResponseMemoryReferences(t.result.memoryReferences)), t.result?.messageTag && (t.result?.message || t.result?.messageStepId))) {
                                                                const e = t.result?.messageTag;
                                                                e !== a.iS.FINAL && e !== a.iS.FINAL_LONG && (P.updateStepsFromRawMessage({ message: t.result?.message || "", messageTag: e, messageStepId: t.result?.messageStepId || -1, webResults: t.result?.webResults || [], xPostIds: t.result?.xPostIds || [] }), "GET" === r ? w.resumingDispatch(() => s(m.grokResponseDeepSearchUpdate(P))) : s(m.grokResponseDeepSearchUpdate(P)));
                                                            }
                                                        } else {
                                                            const e = JSON.parse(o);
                                                            (b = !0), e.message && ((f[0] += e.message), s(m.grokResponseTyping(e.message ?? "", "message"))), e.thinkingTrace && ((A[0] += e.thinkingTrace), s(m.grokResponseTyping(e.thinkingTrace ?? "", "thinkingTrace")));
                                                            const t = new a.Fk();
                                                            if (e.deepsearchHeaders && e?.deepsearchHeaders.length > 0) {
                                                                t.defaultFinalAnswer = e.message || "";
                                                                const r = [];
                                                                for (const t of e.deepsearchHeaders) {
                                                                    const e = [];
                                                                    for (const r of t.steps) {
                                                                        const t = (r.xPostIds || []).map((e) => e),
                                                                            a = (r.webResults || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title }));
                                                                        t.length && (y.push(...t), (y = y.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(i.Z.fetchMultiple(t))), a.length && (M.push(...a), (M = M.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url)))), e.push({ header: r.header || "", assistant: r.assistant || "", decision: r.decision || "", finalMessage: r.finalMessage || "", functionCall: r.functionCall || "", rawFunctionResult: r.rawFunctionResult || "", summary: r.summary || "", webResults: a, xPostIds: t });
                                                                    }
                                                                    r.push({ header: t.header || "", steps: e });
                                                                }
                                                                t.initiateFromHistoryResponses(r, !0), s(m.grokResponseDeepSearchUpdate(t));
                                                            }
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
                                    v = !1;
                                    if (t instanceof window.DOMException && "AbortError" === t.name) "STARTED" === P.state && (0, n.YI)(e, { durationMs: P.getStreamDuration(), messageTagCounts: P.debugMessageTagCount }), w.abortQueue(), T.record("abort");
                                    else {
                                        if (K()) return void (await H(t.message));
                                        g({ deepSearchSummaryAccumulator: P, analytics: e, dispatch: s, grokModule: m, resumabilityQueue: w, method: r, errorMessage: t ? t.message : void 0 }), s(m.grokResponseError(c.NE)), (0, n.kl)(e, t), T.record("error");
                                    }
                                    s(m.updatePerformanceMetrics({ endStreamTime: Date.now() })), A[0].length > 0 && s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }));
                                });
                        },
                        K = () => {
                            const e = u(),
                                t = Boolean(_.isDeepsearch) || Boolean(_.isReasoning);
                            return !v && F < (S?.numRetries || 0) && !!G && !!e && t && "POST" === p;
                        },
                        H = async (t) => {
                            C.abort(), F++, (v = !0), (0, n.mm)(e, F, t), (C = new AbortController()), await s(m.setAbortController(C)), L({ method: "GET", requestParams: { ...R, conversationId: u(), responseToChatItemId: G, streamInitialChunkWhole: !1 } });
                        };
                    return L({ method: p, requestParams: R });
                };
            function u() {
                return new URLSearchParams(window.location.search).get("conversation") || "";
            }
            function g({ analytics: e, deepSearchSummaryAccumulator: t, dispatch: s, errorMessage: r, grokModule: a, method: o, resumabilityQueue: i }) {
                "STARTED" === t.state && (t.onAbort(), "GET" === o ? (i.resumingDispatch(() => s(a.grokResponseDeepSearchUpdate(t))), i.resumingDispatch(() => s(a.updatePerformanceMetrics({ deepsearchEnd: Date.now() })))) : s(a.grokResponseDeepSearchUpdate(t)), (0, n.hq)(e, { durationMs: t.getStreamDuration(), errorMessage: r }));
            }
        },
        100326: (e, t, s) => {
            s.d(t, { X: () => i });
            s(571372);
            var r = s(791005),
                a = s.n(r),
                o = s(623494),
                n = s(52570);
            const i = ({ analysisEntityId: e, analytics: t, api: s, dispatch: r, fromShareId: i, fromUniversalSearch: c, grokModule: d }) => (
                r(d.fetchConversationIdStart()),
                s.apiClient
                    .graphQL(a(), { fromShare: i, fromUniversalSearch: c })
                    .then((s) => {
                        const a = s.create_grok_conversation?.conversation_id,
                            i = s.create_grok_conversation?.error_code;
                        if (a) return r(d.fetchConversationIdSuccess(a, e)), a;
                        if (i) throw (r(d.fetchConversationIdFailed(n.NE)), (0, o.Uk)(t, "conversation_id failed"), new Error(i));
                    })
                    .catch((e) => {
                        const t = e.errors?.[0]?.code,
                            s = (0, n.bY)(t);
                        r(d.fetchConversationIdFailed(s));
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
                i = s(303157),
                c = s(917799),
                d = s(56519),
                l = s(836255),
                E = s(189953),
                u = s(155918),
                g = s(250781);
            const S =
                (e, t) =>
                (s, S, { api: m }) =>
                    c._O(s, { params: { restId: e }, request: m.withEndpoint(o.Z).fetchConversation })({ actionTypes: E.Lc, context: "FETCH_GROK_CONVERSATION", meta: { conversationId: e } }, (o) => {
                        if (!o?.grok_conversation_items_by_rest_id?.items) return;
                        const c = e;
                        s((0, a.Ki)(c));
                        const m = (0, a.YJ)(S(), c);
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
                                                    d = { responses: [], systemPromptName: "", grokModelOptionId: "", conversationId: s },
                                                    l = i.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                                                return (0, g.D)({ grokModule: c, requestParams: { conversationId: s, responseToChatItemId: e, streamInitialChunkWhole: !1 }, requestBody: d, dispatch: r, method: "GET", analytics: t, api: n, flags: { numRetries: l } });
                                            }
                                        )({ conversationKey: e, agentChatItemId: o.chat_item_id ?? "", analytics: t }),
                                    ),
                                    void s(m.grokResponseMetadata({ agentChatItemId: o.chat_item_id }))
                                );
                            o.post_ids_results?.forEach((e) => {
                                if ("Tweet" === e.result?.__typename) {
                                    const { entities: t } = (0, r.Fv)(e.result, n.Z);
                                    s((0, d.dP)(t));
                                }
                            }),
                                o.media_post_ids_results?.forEach((e) => {
                                    if ("Tweet" === e.result?.__typename) {
                                        const { entities: t } = (0, r.Fv)(e.result, n.Z);
                                        s((0, d.dP)(t));
                                    }
                                });
                            const S = (o.post_ids_results ?? []).map((e) => e.result?.rest_id).filter(Boolean),
                                _ = (o.media_post_ids_results ?? []).map((e) => e.result?.rest_id).filter(Boolean);
                            let R = o.file_attachments?.map((e) => ({ fileName: e.file_name ?? "image.jpeg", mediaId: e.media_id, isPublic: !1, mimeType: e.mime_type ?? "image/jpeg", url: e.url ?? (e.media_id ? `https://api.x.com/2/grok/attachment.json?mediaId=${e.media_id}` : void 0) })) ?? [];
                            if ((0 === R.length && (R = o.media_urls?.map((e) => ({ fileName: "image.jpeg", isPublic: !1, mimeType: "image/jpeg", url: e })) ?? []), "User" === o.sender_type && s(m.userSendMessage({ message: o.message ?? "", fileAttachments: R, bannerMessages: o.banner_message ? [o.banner_message] : void 0, postIds: S, sender: 1 })), "Agent" === o.sender_type)) {
                                if ((s(m.grokResponseTyping(o.message ?? "", "message")), o.thinking_trace)) {
                                    const e = o.thinking_trace;
                                    s(m.grokResponseTyping(e, "thinkingTrace")), (o.is_partial && c === p.length - 1) || s(m.setIsPastThinkingTrace(!0));
                                }
                                o.banner_message && s(m.addBannerMessage(o.banner_message)), R.length && s(m.grokResponseFileAttachments(R)), o.memory_references && s(m.grokResponseMemoryReferences(o.memory_references.map((e) => ({ conversation_id: e.conversation_id, summary: e.conversation_summary }))));
                                const e = [];
                                if (o.card_attachments)
                                    for (const t of o.card_attachments) {
                                        const s = (0, u.dj)(t);
                                        s && e.push(s);
                                    }
                                else if (o.card_attachment) {
                                    const t = (0, u.dj)(o.card_attachment);
                                    t && e.push(t);
                                }
                                e.length && s(m.grokResponseCardAttachments(e));
                                let t = [],
                                    r = [],
                                    a = {};
                                o.deepsearch_args && (a = o.deepsearch_args);
                                const n = new i.Fk(a);
                                if (o.deepsearch_headers && o.deepsearch_headers.length > 0) {
                                    n.defaultFinalAnswer = o.message || "";
                                    const e = [];
                                    for (const a of o.deepsearch_headers) {
                                        const o = [];
                                        for (const e of a.steps) {
                                            const a = (e.x_post_ids || []).map((e) => e),
                                                n = (e.web_results || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title }));
                                            a.length && (t.push(...a), (t = t.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(l.Z.fetchMultiple(a))), n.length && (r.push(...n), (r = r.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url)))), o.push({ header: e.header || "", assistant: e.assistant || "", decision: e.decision || "", finalMessage: e.final_message || "", functionCall: e.function_call || "", rawFunctionResult: e.raw_function_result || "", summary: e.summary || "", webResults: n, xPostIds: a });
                                        }
                                        e.push({ header: a.header || "", steps: o });
                                    }
                                    n.initiateFromHistoryResponses(e), s(m.grokResponseDeepSearchUpdate(n)), t.length && s(m.grokResponsePosts(t)), r.length && s(m.grokWebResults(r));
                                } else _.length && s(m.grokResponseMediaPosts(_)), S.length && s(m.grokResponsePosts(S)), o.web_results && s(m.grokWebResults([...o.web_results])), o.cited_web_results && s(m.grokCitedWebResults([...o.cited_web_results]));
                                s(m.grokResponseMetadata({ agentChatItemId: o.chat_item_id, userChatItemId: p[c - 1].chat_item_id, isDeleted: o.is_deleted })), s(m.grokResponseComplete());
                            }
                            s(m.setMode("Fun" === o.grok_mode ? E.IK.FUN : E.IK.REGULAR));
                        });
                    });
        },
        327597: (e, t, s) => {
            s.d(t, { u: () => E });
            var r = s(323265),
                a = s(389071),
                o = s(623494),
                n = s(806528),
                i = s(155918),
                c = s(958602),
                d = s(250781),
                l = s(100326);
            const E =
                ({ analytics: e, conversationKey: t }) =>
                ({ analysisEntityId: s, attachments: E, mode: u, onStart: g, returnCitations: S, promptMetadata: m = { promptSource: "NATURAL", action: "INPUT" }, returnSearchResults: p = !0, features: _ = { eagerTweets: !0, serverHistory: !0 }, text: R, isGrokDrawer: h = !1, trendPromptIdStr: T, imageGenerationCount: I, source: O, toolOverrides: C, isReasoning: b, isDeepsearch: w, deepsearchArgsOverride: f, personalityId: A }) =>
                async (T, k, { api: N, featureSwitches: U }) => {
                    const P = !r.ZP.isTwitterApp() && U.isTrue("responsive_web_grok_api_enable_grok_host"),
                        M = (0, a.bD)(t);
                    let y = M.selectConversationId(k());
                    const G = r.ZP.isAndroid(),
                        D = r.ZP.isIOS();
                    if ((null != M.selectCurrentResponseMessage(k()) && (await T((0, c.I)({ analytics: e, conversationKey: t }))), (y ??= await (0, l.X)({ analytics: e, api: N, dispatch: T, grokModule: M, analysisEntityId: s })), !y)) return void (0, o.Uk)(e, "conversation couln't be found or created");
                    let F;
                    const v = U.isTrue("responsive_web_grok_location_enabled");
                    if (v) {
                        const e = (0, n.fw)(k())?.position;
                        e && (F = { latitude: e.coords.latitude, longitude: e.coords.longitude, accuracy: e.coords.accuracy });
                    }
                    const L = u ?? M.selectMode(k()),
                        K = (0, a.F9)(k()),
                        H = M.selectConversationForAPI(k()),
                        Q = (0, a.en)(k()),
                        x = { ...C };
                    if (Q && Q.toolOverrides) {
                        const e = Q.toolOverrides;
                        Object.keys(e).forEach((t) => {
                            x[t] = e[t];
                        });
                    }
                    if (!(R || (E && 0 !== E.length))) return Promise.resolve();
                    const V = { message: R ?? "", sender: i.CI.HUMAN, promptSource: O ?? "", ...(s ? { postIds: [s] } : void 0) };
                    E && (V.fileAttachments = E), w && (V.isDeepsearch = w), b && (V.isReasoning = b);
                    const j = { responses: H.concat(V), systemPromptName: L, grokModelOptionId: K, conversationId: y, returnSearchResults: p, returnCitations: S, promptMetadata: m, imageGenerationCount: I, requestFeatures: _, ...(s ? { analysisEntityId: s } : void 0), geoLocation: F, enableSideBySide: !("GROK_ANALYZE" === m.promptSource || h || D || G || w || b), toolOverrides: x, isDeepsearch: w, isReasoning: b, personalityId: A, deepsearchArgs: f ?? (w ? Q?.deepsearchArgs : void 0) };
                    T(M.setPromptSource(O || "")), T(M.setUsingExperiment(!1)), T(M.userSendMessage(V, m)), (0, o.pv)(e, { conversationLength: H.length, isFileAttached: Boolean(V.fileAttachments?.length), isDeepsearch: j.isDeepsearch || void 0, isReasoning: j.isReasoning || void 0 }), g?.();
                    const Y = U.isTrue("responsive_web_grok_enable_add_response_keepalive") && (w || b),
                        W = U.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                    return (0, d.D)({ grokModule: M, requestBody: j, dispatch: T, analytics: e, api: N, flags: { enableLocation: v, enableGrokApiHost: P, numRetries: W, enableKeepalive: Y } });
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
            s.d(t, { $t: () => ne, A0: () => me, BA: () => se, BS: () => P, CH: () => y, CR: () => Z, Cr: () => O, DX: () => B, Dh: () => _, Dn: () => M, En: () => d, FF: () => Q, FV: () => N, Gy: () => k, HF: () => S, IK: () => a, JO: () => Y, Jt: () => re, KH: () => I, L0: () => $, Lc: () => n, OW: () => U, Oj: () => f, P9: () => j, Q_: () => o, Qg: () => v, Qh: () => X, Sv: () => i, TY: () => F, Tv: () => q, UN: () => w, VK: () => c, WK: () => te, Ws: () => l, Xg: () => z, Xi: () => L, Y8: () => E, Yb: () => h, Yf: () => r, Yx: () => u, ZN: () => W, ar: () => x, cA: () => Se, cw: () => oe, dK: () => g, dO: () => R, dZ: () => D, dw: () => ue, f1: () => Ee, j$: () => pe, k$: () => H, lQ: () => ee, lh: () => m, li: () => ce, lm: () => p, mq: () => _e, my: () => b, nK: () => A, o$: () => G, px: () => ie, qd: () => V, ru: () => ge, ub: () => C, vc: () => K, vi: () => T, wG: () => ae, x5: () => J, yB: () => le, z2: () => de });
            const r = "grok",
                a = Object.freeze({ FUN: "fun", REGULAR: "" }),
                o = Object.freeze({ IDLE: "idle", TYPING: "typing", WAITING: "waiting", FAILED: "failed" }),
                n = Object.freeze({ REQUEST: "rweb/FETCH_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/FETCH_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/FETCH_GROK_CONVERSATION/FAILURE" }),
                i = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_HISTORY/FAILURE" }),
                c = Object.freeze({ REQUEST: "rweb/DELETE_GROK_MESSAGE/REQUEST", SUCCESS: "rweb/DELETE_GROK_MESSAGE/SUCCESS", FAILURE: "rweb/DELETE_GROK_MESSAGE/FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/REQUEST", SUCCESS: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/SUCCESS", FAILURE: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/FAILURE" }),
                l = Object.freeze({ REQUEST: "rweb/FETCH_GROK_MEDIA_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_MEDIA_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_MEDIA_HISTORY/FAILURE" }),
                E = Object.freeze({ REQUEST: "rweb/SEARCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/SEARCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/SEARCH_GROK_HISTORY/FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HOME/REQUEST", SUCCESS: "rweb/FETCH_GROK_HOME/SUCCESS", FAILURE: "rweb/FETCH_GROK_HOME/FAILURE" }),
                g = Object.freeze({ REQUEST: "rweb/FETCH_GROK_SHARE/REQUEST", SUCCESS: "rweb/FETCH_GROK_SHARE/SUCCESS", FAILURE: "rweb/FETCH_GROK_SHARE/FAILURE" }),
                S = Object.freeze({ REQUEST: "rweb/SET_PREFERENCES/REQUEST", SUCCESS: "rweb/SET_PREFERENCES/SUCCESS", FAILURE: "rweb/SET_PREFERENCES/FAILURE" }),
                m = Object.freeze({ REQUEST: "rweb/PIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/PIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/PIN_GROK_CONVERSATION/FAILURE" }),
                p = Object.freeze({ REQUEST: "rweb/UNPIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/UNPIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/UNPIN_GROK_CONVERSATION/FAILURE" }),
                _ = Object.freeze({ REQUEST: "rweb/CLEAR_CONVERSATIONS/REQUEST", SUCCESS: "rweb/CLEAR_CONVERSATIONS/SUCCESS", FAILURE: "rweb/CLEAR_CONVERSATIONS/FAILURE" }),
                R = Object.freeze({ REQUEST: "rweb/GROK_USER_EVENTS_LOG/REQUEST", SUCCESS: "rweb/GROK_USER_EVENTS_LOG/SUCCESS", FAILURE: "rweb/GROK_USER_EVENTS_LOG/FAILURE" }),
                h = "rweb/grok/DELETE_CONVERSATION",
                T = "rweb/grok/RENAME_CONVERSATION",
                I = "rweb/grok/SET_ABORT_CONTROLLER",
                O = "rweb/grok/CLEAR_CONVERSATION",
                C = "rweb/grok/USER_SEND_MESSAGE",
                b = "rweb/grok/REGENERATE_RESPONSE",
                w = "rweb/grok/GROK_RESPONSE_TYPING",
                f = "rweb/grok/GROK_RESPONSE_POSTS",
                A = "rweb/grok/GROK_RESPONSE_MEDIA_POSTS",
                k = "rweb/grok/GROK_RESPONSE_COMPLETE",
                N = "rweb/grok/GROK_RESPONSE_ERROR",
                U = "rweb/grok/GROK_RESPONSE_METADATA",
                P = "rweb/grok/GROK_RESPONSE_DISCLAIMER",
                M = "rweb/grok/GROK_RESPONSE_FILE_ATTACHMENTS",
                y = "rweb/grok/GROK_RESPONSE_FEEDBACK_LABELS",
                G = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTIONS",
                D = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTED_MODE",
                F = "rweb/grok/GROK_RESPONSE_CHAT_RESPONSE_ANNOTATIONS",
                v = "rweb/grok/GROK_RESPONSE_UPSELL",
                L = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENT",
                K = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENTS",
                H = "rweb/grok/GROK_RESPONSE_DEEPSEARCH_UPDATE",
                Q = "rweb/grok/GROK_RESPONSE_MEMORY_REFERENCES",
                x = "rweb/grok/GROK_WEB_RESULTS",
                V = "rweb/grok/GROK_CITED_WEB_RESULTS",
                j = "rweb/grok/ABORT_MESSAGE",
                Y = "rweb/grok/SET_EXPECTED_IMAGE_ASPECT_RATIO",
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
                ce = "rweb/grok/SELECT_COMPOSER_MODE",
                de = "rweb/grok/SET_GROK_INPUT_FOCUSED",
                le = "rweb/grok/QUERY_TYPING",
                Ee = "rweb/grok/ADD_BANNER_MESSAGE",
                ue = "rweb/grok/DELETE_MEDIA_HISTORY_ITEM",
                ge = "rweb/grok/UPDATE_PERFORMANCE_METRICS",
                Se = "r/web/grok/SET_USING_EXPERIMENT",
                me = "r/web/grok/SET_PREFERRED_RESPONSE",
                pe = "rweb/grok/SET_GROK_INPUT_ADVANCED_SETTINGS",
                _e = "rweb/grok/SET_IS_PAST_THINKING_TRACE";
        },
        52570: (e, t, s) => {
            s.d(t, { NE: () => o, bY: () => l });
            var r = s(674132),
                a = s.n(r);
            const o = a().ead81122,
                n = a().f808a13a,
                i = a().e0481e5a,
                c = a().bc0a5b5a,
                d = a().ef674976,
                l = (e) => {
                    switch (e) {
                        case 429:
                            return n;
                        case 451:
                            return i;
                        case 401:
                        case 403:
                            return d;
                        case 503:
                            return c;
                        default:
                            return o;
                    }
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DirectMessages-bfd49e49.f179013a.js.map

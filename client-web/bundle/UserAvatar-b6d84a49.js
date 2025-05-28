"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserAvatar-b6d84a49"],
    {
        806528: (e, t, s) => {
            s.d(t, { Bz: () => d, ZW: () => S, ey: () => l, fw: () => i, iG: () => E, wM: () => c });
            var r = s(499627),
                o = s(341276);
            const a = "geoLocation",
                n = Object.freeze({ permissionStatus: void 0, position: void 0 });
            const i = (e) => e[a],
                c = (e) => e[a].permissionStatus,
                d = (e) => e[a].position,
                u = "rweb/geoLocation/SET_PERMISSION_STATUS",
                l = (e) => ({ payload: e, type: u }),
                g = "rweb/geoLocation/SET_POSITION",
                E = () => (e, t) =>
                    m()
                        .then((t) => e({ payload: t, type: g }))
                        .catch((t) => (e(l(o.S.denied)), Promise.reject(t))),
                S = () => (e, t) => (d(t()) ? Promise.resolve() : e(E())),
                m = () =>
                    new Promise((e, t) =>
                        navigator.geolocation.getCurrentPosition((t) => {
                            const s = { timestamp: t.timestamp, coords: { latitude: t.coords.latitude, longitude: t.coords.longitude, altitude: t.coords.altitude, accuracy: t.coords.accuracy, altitudeAccuracy: t.coords.altitudeAccuracy, heading: t.coords.heading, speed: t.coords.speed } };
                            return e(s);
                        }, t),
                    );
            r.Z.register({
                [a]: function (e = n, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case u:
                            return { ...e, permissionStatus: t.payload };
                        case g:
                            return { ...e, position: t.payload };
                        default:
                            return e;
                    }
                },
            });
        },
        341276: (e, t, s) => {
            s.d(t, { M: () => o, S: () => r });
            const r = Object.freeze({ granted: "granted", denied: "denied", prompt: "prompt" }),
                o = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 });
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
                        d = c.selectStatus(s());
                    if (!(d === a.Q_.TYPING || d === a.Q_.WAITING)) return Promise.resolve();
                    const u = c.selectConversationId(s()) || void 0,
                        l = c.selectMetadataForMessageId(s(), "currentResponse"),
                        g = l?.agentChatItemId || void 0;
                    await e(c.abortMessage());
                    const E = { responses: [], systemPromptName: "", grokModelOptionId: "", conversationId: u, responseToChatItemId: g, isCancel: !0 },
                        S = !r.ZP.isTwitterApp() && i.isTrue("responsive_web_grok_api_enable_grok_host");
                    return n.fetchClient.dispatch("/2/grok/add_response.json", { method: "POST", credentials: "include", body: JSON.stringify(E) }, S ? "https://grok.x.com" : void 0).then(async (e) => {});
                };
        },
        250781: (e, t, s) => {
            s.d(t, { D: () => l });
            s(890103), s(136728), s(875640), s(543673), s(240753), s(128399);
            var r = s(323265),
                o = s(397159),
                a = s(774717),
                n = s(623494),
                i = s(836255),
                c = s(52570),
                d = s(155918);
            s(571372);
            const u = (e) => {
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
                l = async ({ analytics: e, api: t, dispatch: s, eventTag: l, flags: S, grokModule: m, method: p = "POST", requestBody: _, requestParams: R }) => {
                    const h = l ? ` (${l})` : "",
                        T = (function () {
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
                        I = Date.now();
                    let O = !1,
                        A = new AbortController();
                    s(m.setAbortController(A));
                    let f = !1;
                    const b = u(s),
                        C = [""],
                        w = [""];
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
                        })({ responses: _.responses, grokModule: m, dispatch: s });
                    const y = new o.fQ({ deepsearchArgs: _.deepsearchArgs, isDeepsearch: _.isDeepsearch });
                    let P = [],
                        M = [],
                        G = "",
                        L = !1,
                        F = 0,
                        v = !1,
                        D = !1;
                    const K = async ({ method: r, requestParams: a }) => {
                            const u = (function ({ method: e, requestParams: t }) {
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
                                .dispatch(u, { method: r, credentials: "include", params: "GET" === r ? a : null, body: "POST" === r ? JSON.stringify(_) : null, signal: A?.signal, keepalive: S?.enableKeepalive }, S?.enableGrokApiHost ? "https://grok.x.com" : void 0)
                                .then(async (t) => {
                                    const a = t.headers.get("x-transaction-id");
                                    if ((a && s(m.updatePerformanceMetrics({ traceId: a })), !t.ok)) {
                                        T.record(`http-${t.status}`);
                                        const r = (0, c.bY)(t.status);
                                        return s(m.grokResponseError(r)), void (0, n.Uk)(e, `add-response failed with status ${t.status}${h}`);
                                    }
                                    const u = t.body?.getReader();
                                    if (!u) return s(m.grokResponseError(c.NE)), void (0, n.Uk)(e, `reader was not found${h}`);
                                    const l = new TextDecoder();
                                    let g = "";
                                    const p = setTimeout(() => {
                                            (0, n.eS)(e, !0);
                                        }, 5e3),
                                        R = await u.read();
                                    return (
                                        clearTimeout(p),
                                        (async function t({ done: a, value: p }) {
                                            if (a) {
                                                v = !1;
                                                if ((!C.length || C.every((e) => "" === e)) && !L) {
                                                    const t = `add-response failed to reach the network${h}`;
                                                    return y.isDeepsearch && E({ messageStepAccumulator: y, analytics: e, dispatch: s, errorMessage: t, grokModule: m, resumabilityQueue: b, method: r }), s(m.grokResponseError(c.NE)), (0, n.Uk)(e, t), void T.record("network-error");
                                                }
                                                T.record("time-to-last-chunk"),
                                                    (function ({ analytics: e, dispatch: t, grokModule: s, isUnifiedReasoningLayout: r, messageStepAccumulator: o, method: a, resumabilityQueue: i }) {
                                                        o.isDeepsearch &&
                                                            (function ({ analytics: e, dispatch: t, grokModule: s, isUnifiedReasoningLayout: r, messageStepAccumulator: o }) {
                                                                if ("PENDING" === o.state) return;
                                                                o.complete(!r), t(s.grokResponseMessageStepAccumulatorUpdate(o)), (0, n.y6)(e, o.getStreamDuration());
                                                            })({ messageStepAccumulator: o, analytics: e, dispatch: t, grokModule: s, isUnifiedReasoningLayout: r });
                                                        "GET" === a ? (i.resumingDispatch(() => t(s.updatePerformanceMetrics({ endStreamTime: Date.now() }))), i.resumingDispatch(() => t(s.grokResponseComplete()))) : "POST" === a && (t(s.updatePerformanceMetrics({ endStreamTime: Date.now() })), t(s.grokResponseComplete()));
                                                    })({ messageStepAccumulator: y, analytics: e, dispatch: s, grokModule: m, method: r, resumabilityQueue: b, isUnifiedReasoningLayout: D });
                                            }
                                            if (p) {
                                                T.recordOnce("time-to-first-chunk"), O || ((O = !0), s(m.updatePerformanceMetrics({ timeToFirstChunkMs: Date.now() - I })));
                                                const a = l.decode(p);
                                                if (((g += a), g.includes("\n"))) {
                                                    const t = g.split("\n");
                                                    g = t.pop();
                                                    for (const a of t)
                                                        if (f || "GET" !== r) {
                                                            const t = JSON.parse(a);
                                                            if (t.result?.uiLayout?.reasoningUILayout) {
                                                                const e = t.result.uiLayout.reasoningUILayout;
                                                                s(m.setReasoningLayout(e)), (D = "UNIFIED" === e);
                                                            }
                                                            const n = t.result?.sideBySideIndex ?? 0;
                                                            if ((null == t.result?.sideBySideIndex || N || (C.push(""), w.push(""), s(m.setUsingExperiment(!0)), (N = !0)), t.result?.query && s(m.queryTyping(t.result.query)), t.result?.bannerMessage && s(m.addBannerMessage(t.result.bannerMessage)), t.result?.xPostIds && (M.push(...(t.result.xPostIds || [])), (M = M.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(i.Z.fetchMultiple(M)), s(m.grokResponsePosts(M, n))), t.result?.xMediaPostIds)) {
                                                                const e = t.result.xMediaPostIds;
                                                                s(i.Z.fetchMultiple(e)), s(m.grokResponseMediaPosts(e));
                                                            }
                                                            if (t.result?.postIds) s(m.grokResponsePosts(t.result.postIds, n));
                                                            else if (t.result?.message && (!t.result?.messageTag || t.result?.messageTag === o.iS.FINAL)) {
                                                                const e = !C[n];
                                                                t.result?.isThinking ? (w[n] += t.result.message) : (C[n] += t.result.message), e && s(m.updatePerformanceMetrics({ timeToFirstTextMs: Date.now() - I }));
                                                                const a = t.result?.isThinking ? w[n] : C[n],
                                                                    i = t.result?.isThinking ? "thinkingTrace" : "message";
                                                                "thinkingTrace" === i && k && (k = !1), "message" === i && w[0].length > 0 && !k && ((k = !0), "GET" === r ? b.resumingDispatch(() => s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))) : s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))), "GET" === r ? b.resumingDispatch(() => s(m.grokResponseTyping(a, i, n))) : s(m.grokResponseTyping(a, i, n)), (t.result?.messageTag === o.iS.FINAL || (t.result?.message && "STARTED" === y.state)) && (y.updateFinalAnswer({ messageTag: o.iS.FINAL, message: t.result?.message || "" }), y.complete(!D), "GET" === r ? (b.resumingDispatch(() => s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))), b.resumingDispatch(() => s(m.grokResponseMessageStepAccumulatorUpdate(y)))) : (s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() })), s(m.grokResponseMessageStepAccumulatorUpdate(y))));
                                                            }
                                                            if (("error" === t.result?.responseType && s(m.grokResponseFileAttachments([])), t.result?.imageAttachmentCount)) {
                                                                let e = t.result.imageAttachmentCount;
                                                                _.imageGenerationCount && (e = Math.min(e, _.imageGenerationCount)), U.setCount(e);
                                                            }
                                                            if ((t.result?.imageWidth && t.result?.imageHeight && s(m.setExpectedImageAspectRatio(t.result?.imageWidth / t.result?.imageHeight)), "image" === t.result?.responseType || t.result?.imageAttachment?.imageUrl)) {
                                                                L = !0;
                                                                const e = t.result.imageAttachment;
                                                                U.addAttachment({ fileName: e?.fileName ?? "image", mimeType: e?.mimeType ?? "image/jpeg", mediaId: e?.mediaIdStr, url: e?.imageUrl }), s(m.grokResponseFileAttachments(U.generateAttachmentList()));
                                                            }
                                                            t.result?.feedbackLabels && s(m.grokResponseFeedbackLabels(t.result.feedbackLabels)), t.result?.disclaimer && s(m.grokResponseDisclaimer(t.result.disclaimer)), t.result?.followUpSuggestions && s(m.grokResponseFollowUpSuggestions(t.result.followUpSuggestions)), t.result?.followUpSuggestedMode && s(m.grokResponseFollowUpSuggestedMode(t.result?.followUpSuggestedMode)), t.result?.chatResponseAnnotations && s(m.grokResponseChatResponseAnnotations(t.result.chatResponseAnnotations)), t.result?.upsell && s(m.grokResponseUpsell(t.result.upsell)), (t.agentChatItemId || t.userChatItemId) && (t.agentChatItemId && (G = t.agentChatItemId), s(m.updatePerformanceMetrics({ startStreamTime: Date.now() })), s(m.grokResponseMetadata({ agentChatItemId: t.agentChatItemId, userChatItemId: t.userChatItemId }))), t.result?.webResults && (P.push(...(t.result?.webResults || [])), (P = P.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url))), s(m.grokWebResults(P, n))), t.result?.citedWebResults && s(m.grokCitedWebResults(t.result.citedWebResults, n));
                                                            const c = t.result?.event;
                                                            if ((c && (c.imageAttachmentUpdate && s(m.imageIntermediateResult({ ...c.imageAttachmentUpdate, progress: c.imageAttachmentUpdate.progress / 100, imageUrl: c.imageAttachmentUpdate.imageUrl })), c.imageAttachmentRemoval && (U.setAttachmentAsModerated(c.imageAttachmentRemoval.imageIdStr), s(m.grokResponseFileAttachments(U.generateAttachmentList())))), S?.enableLocation && t.result?.doLocationRequest && !_.geoLocation && s(m.grokResponseCardAttachment({ cardType: "geo_location_request" })), t.result?.cardAttachment)) {
                                                                const r = (0, d.dj)(t.result.cardAttachment, e);
                                                                r && s(m.grokResponseCardAttachment(r));
                                                            }
                                                            if ((t.result?.memoryReferences && s(m.grokResponseMemoryReferences(t.result.memoryReferences)), t.result?.messageTag && (t.result?.message || t.result?.messageStepId))) {
                                                                const e = t.result?.messageTag;
                                                                e !== o.iS.FINAL && e !== o.iS.FINAL_LONG && (y.updateStepsFromRawMessage({ message: t.result?.message || "", messageTag: e, messageStepId: t.result?.messageStepId || -1, webResults: t.result?.webResults || [], xPostIds: t.result?.xPostIds || [] }), "GET" === r ? b.resumingDispatch(() => s(m.grokResponseMessageStepAccumulatorUpdate(y))) : s(m.grokResponseMessageStepAccumulatorUpdate(y)));
                                                            }
                                                        } else {
                                                            const e = JSON.parse(a);
                                                            (f = !0), e.message && ((C[0] += e.message), s(m.grokResponseTyping(e.message ?? "", "message"))), e.result?.uiLayout && e.result?.uiLayout.reasoningUILayout && ((D = "UNIFIED" === e.result.uiLayout.reasoningUILayout), s(m.setReasoningLayout(e.result.uiLayout.reasoningUILayout)));
                                                            const t = new o.fQ();
                                                            if (e.messageStepsHeaders && e?.messageStepsHeaders.length > 0) {
                                                                t.defaultFinalAnswer = e.message || "";
                                                                const r = [];
                                                                for (const t of e.messageStepsHeaders) {
                                                                    const e = [];
                                                                    for (const r of t.steps) {
                                                                        const t = (r.xPostIds || []).map((e) => e),
                                                                            o = (r.webResults || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title }));
                                                                        t.length && (M.push(...t), (M = M.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(i.Z.fetchMultiple(t))), o.length && (P.push(...o), (P = P.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url)))), e.push({ header: r.header || "", assistant: r.assistant || "", decision: r.decision || "", finalMessage: r.finalMessage || "", functionCall: r.functionCall || "", rawFunctionResult: r.rawFunctionResult || "", summary: r.summary || "", webResults: o, xPostIds: t });
                                                                    }
                                                                    r.push({ header: t.header || "", steps: e });
                                                                }
                                                                t.initiateFromHistoryResponses(r, !0), s(m.grokResponseMessageStepAccumulatorUpdate(t));
                                                            }
                                                            e.thinkingTrace && ((w[0] += e.thinkingTrace), s(m.grokResponseTyping(e.thinkingTrace ?? "", "thinkingTrace")));
                                                        }
                                                }
                                                if (u) {
                                                    const s = setTimeout(() => {
                                                            (0, n.eS)(e, !1);
                                                        }, 5e3),
                                                        r = await u.read();
                                                    return clearTimeout(s), t(r);
                                                }
                                            }
                                        })(R)
                                    );
                                })
                                .catch(async (t) => {
                                    v = !1;
                                    if (t instanceof window.DOMException && "AbortError" === t.name) "STARTED" === y.state && y.isDeepsearch && (0, n.YI)(e, { durationMs: y.getStreamDuration(), messageTagCounts: y.debugMessageTagCount }), b.abortQueue(), T.record("abort");
                                    else {
                                        if (H()) return void (await Q(t.message));
                                        y.isDeepsearch && E({ messageStepAccumulator: y, analytics: e, dispatch: s, grokModule: m, resumabilityQueue: b, method: r, errorMessage: t ? t.message : void 0 }), s(m.grokResponseError(c.NE)), (0, n.kl)(e, t), T.record("error");
                                    }
                                    s(m.updatePerformanceMetrics({ endStreamTime: Date.now() })), w[0].length > 0 && s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }));
                                });
                        },
                        H = () => {
                            const e = g(),
                                t = Boolean(_.isDeepsearch) || Boolean(_.isReasoning);
                            return !v && F < (S?.numRetries || 0) && !!G && !!e && t && "POST" === p;
                        },
                        Q = async (t) => {
                            A.abort(), F++, (v = !0), (0, n.mm)(e, F, t), (A = new AbortController()), await s(m.setAbortController(A)), K({ method: "GET", requestParams: { ...R, conversationId: g(), responseToChatItemId: G, streamInitialChunkWhole: !1 } });
                        };
                    return K({ method: p, requestParams: R });
                };
            function g() {
                return new URLSearchParams(window.location.search).get("conversation") || "";
            }
            function E({ analytics: e, dispatch: t, errorMessage: s, grokModule: r, messageStepAccumulator: o, method: a, resumabilityQueue: i }) {
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
            const i = ({ analysisEntityId: e, analytics: t, api: s, dispatch: r, fromShareId: i, fromUniversalSearch: c, grokModule: d }) => (
                r(d.fetchConversationIdStart()),
                s.apiClient
                    .graphQL(o(), { fromShare: i, fromUniversalSearch: c })
                    .then((s) => {
                        const o = s.create_grok_conversation?.conversation_id,
                            i = s.create_grok_conversation?.error_code;
                        if (o) return r(d.fetchConversationIdSuccess(o, e)), o;
                        if (i) throw (r(d.fetchConversationIdFailed(n.NE)), (0, a.Uk)(t, "conversation_id failed"), new Error(i));
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
                o = s(389071),
                a = s(6157),
                n = s(171697),
                i = s(397159),
                c = s(917799),
                d = s(56519),
                u = s(836255),
                l = s(189953),
                g = s(155918),
                E = s(250781);
            const S =
                (e, t) =>
                (s, S, { api: m }) =>
                    c._O(s, { params: { restId: e }, request: m.withEndpoint(a.Z).fetchConversation })({ actionTypes: l.Lc, context: "FETCH_GROK_CONVERSATION", meta: { conversationId: e } }, (a) => {
                        if (!a?.grok_conversation_items_by_rest_id?.items) return;
                        const c = e;
                        s((0, o.Ki)(c));
                        const m = (0, o.YJ)(S(), c);
                        s(m.clearConversation()), s(m.fetchConversationIdSuccess(e));
                        const p = a?.grok_conversation_items_by_rest_id?.items ? [...a.grok_conversation_items_by_rest_id.items].reverse() : [];
                        p.forEach((a, c) => {
                            if (a.is_partial && c === p.length - 1)
                                return (
                                    s(
                                        (
                                            ({ agentChatItemId: e, analytics: t, conversationKey: s }) =>
                                            async (r, a, { api: n, featureSwitches: i }) => {
                                                const c = (0, o.bD)(s),
                                                    d = { responses: [], systemPromptName: "", grokModelOptionId: "", conversationId: s },
                                                    u = i.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                                                return (0, E.D)({ grokModule: c, requestParams: { conversationId: s, responseToChatItemId: e, streamInitialChunkWhole: !1 }, requestBody: d, dispatch: r, method: "GET", analytics: t, api: n, flags: { numRetries: u } });
                                            }
                                        )({ conversationKey: e, agentChatItemId: a.chat_item_id ?? "", analytics: t }),
                                    ),
                                    void s(m.grokResponseMetadata({ agentChatItemId: a.chat_item_id }))
                                );
                            a.post_ids_results?.forEach((e) => {
                                if ("Tweet" === e.result?.__typename) {
                                    const { entities: t } = (0, r.Fv)(e.result, n.Z);
                                    s((0, d.dP)(t));
                                }
                            }),
                                a.media_post_ids_results?.forEach((e) => {
                                    if ("Tweet" === e.result?.__typename) {
                                        const { entities: t } = (0, r.Fv)(e.result, n.Z);
                                        s((0, d.dP)(t));
                                    }
                                });
                            const S = (a.post_ids_results ?? []).map((e) => e.result?.rest_id).filter(Boolean),
                                _ = (a.media_post_ids_results ?? []).map((e) => e.result?.rest_id).filter(Boolean);
                            let R = a.file_attachments?.map((e) => ({ fileName: e.file_name ?? "image.jpeg", mediaId: e.media_id, isPublic: !1, mimeType: e.mime_type ?? "image/jpeg", url: e.url ?? (e.media_id ? `https://api.x.com/2/grok/attachment.json?mediaId=${e.media_id}` : void 0) })) ?? [];
                            if ((0 === R.length && (R = a.media_urls?.map((e) => ({ fileName: "image.jpeg", isPublic: !1, mimeType: "image/jpeg", url: e })) ?? []), "User" === a.sender_type && s(m.userSendMessage({ message: a.message ?? "", fileAttachments: R, bannerMessages: a.banner_message ? [a.banner_message] : void 0, postIds: S, sender: 1 })), "Agent" === a.sender_type)) {
                                if ((s(m.grokResponseTyping(a.message ?? "", "message")), a.thinking_trace)) {
                                    const e = a.thinking_trace;
                                    s(m.grokResponseTyping(e, "thinkingTrace")), (a.is_partial && c === p.length - 1) || s(m.setIsPastThinkingTrace(!0));
                                }
                                let e;
                                a.ui_layout?.reasoning_ui_layout && ("Split" === a.ui_layout.reasoning_ui_layout ? (e = "SPLIT") : "Unified" === a.ui_layout.reasoning_ui_layout && (e = "UNIFIED"), e && s(m.setReasoningLayout(e))), a.banner_message && s(m.addBannerMessage(a.banner_message)), R.length && s(m.grokResponseFileAttachments(R)), a.memory_references && s(m.grokResponseMemoryReferences(a.memory_references.map((e) => ({ conversation_id: e.conversation_id, summary: e.conversation_summary }))));
                                const t = [];
                                if (a.card_attachments)
                                    for (const e of a.card_attachments) {
                                        const s = (0, g.dj)(e);
                                        s && t.push(s);
                                    }
                                t.length && s(m.grokResponseCardAttachments(t));
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
                                                n = (a.web_results || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title }));
                                            t.length && (r.push(...t), (r = r.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(u.Z.fetchMultiple(t))), n.length && (o.push(...n), (o = o.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url)))), e.push({ header: a.header || "", assistant: a.assistant || "", decision: a.decision || "", finalMessage: a.final_message || "", functionCall: a.function_call || "", rawFunctionResult: a.raw_function_result || "", summary: a.summary || "", webResults: n, xPostIds: t });
                                        }
                                        c.push({ header: t.header || "", steps: e });
                                    }
                                    n.initiateFromHistoryResponses(c), s(m.grokResponseMessageStepAccumulatorUpdate(n)), r.length && s(m.grokResponsePosts(r)), o.length && s(m.grokWebResults(o));
                                } else _.length && s(m.grokResponseMediaPosts(_)), S.length && s(m.grokResponsePosts(S)), a.web_results && s(m.grokWebResults([...a.web_results])), a.cited_web_results && s(m.grokCitedWebResults([...a.cited_web_results]));
                                s(m.grokResponseMetadata({ agentChatItemId: a.chat_item_id, userChatItemId: p[c - 1].chat_item_id, isDeleted: a.is_deleted })), s(m.grokResponseComplete());
                            }
                            s(m.setMode("Fun" === a.grok_mode ? l.IK.FUN : l.IK.REGULAR));
                        });
                    });
        },
        327597: (e, t, s) => {
            s.d(t, { u: () => l });
            var r = s(323265),
                o = s(389071),
                a = s(623494),
                n = s(806528),
                i = s(155918),
                c = s(958602),
                d = s(250781),
                u = s(100326);
            const l =
                ({ analytics: e, conversationKey: t }) =>
                ({ analysisEntityId: s, attachments: l, mode: g, onStart: E, returnCitations: S, promptMetadata: m = { promptSource: "NATURAL", action: "INPUT" }, returnSearchResults: p = !0, features: _ = { eagerTweets: !0, serverHistory: !0 }, text: R, isGrokDrawer: h = !1, trendPromptIdStr: T, imageGenerationCount: I, source: O, toolOverrides: A, isReasoning: f, isDeepsearch: b, isImageGen: C, deepsearchArgsOverride: w, personalityId: k }) =>
                async (T, N, { api: U, featureSwitches: y }) => {
                    const P = !r.ZP.isTwitterApp() && y.isTrue("responsive_web_grok_api_enable_grok_host"),
                        M = (0, o.bD)(t);
                    let G = M.selectConversationId(N());
                    const L = r.ZP.isAndroid(),
                        F = r.ZP.isIOS();
                    if ((null != M.selectCurrentResponseMessage(N()) && (await T((0, c.I)({ analytics: e, conversationKey: t }))), (G ??= await (0, u.X)({ analytics: e, api: U, dispatch: T, grokModule: M, analysisEntityId: s })), !G)) return void (0, a.Uk)(e, "conversation couln't be found or created");
                    let v;
                    const D = y.isTrue("responsive_web_grok_location_enabled");
                    if (D) {
                        const e = (0, n.fw)(N())?.position;
                        e && (v = { latitude: e.coords.latitude, longitude: e.coords.longitude, accuracy: e.coords.accuracy });
                    }
                    const K = g ?? M.selectMode(N()),
                        H = (0, o.F9)(N()),
                        Q = M.selectConversationForAPI(N()),
                        x = (0, o.en)(N()),
                        j = { ...A };
                    if ((C && (j.imageGen = !0), x && x.toolOverrides)) {
                        const e = x.toolOverrides;
                        Object.keys(e).forEach((t) => {
                            j[t] = e[t];
                        });
                    }
                    if (!(R || (l && 0 !== l.length))) return Promise.resolve();
                    const V = { message: R ?? "", sender: i.CI.HUMAN, promptSource: O ?? "", ...(s ? { postIds: [s] } : void 0) };
                    l && (V.fileAttachments = l), b && (V.isDeepsearch = b), f && (V.isReasoning = f);
                    const Y = { responses: Q.concat(V), systemPromptName: K, grokModelOptionId: H, conversationId: G, returnSearchResults: p, returnCitations: S, promptMetadata: m, imageGenerationCount: I, requestFeatures: _, ...(s ? { analysisEntityId: s } : void 0), geoLocation: v, enableSideBySide: !("GROK_ANALYZE" === m.promptSource || h || F || L || b || f), toolOverrides: j, isDeepsearch: b, isReasoning: f, personalityId: k, deepsearchArgs: w ?? (b ? x?.deepsearchArgs : void 0) };
                    T(M.setPromptSource(O || "")), T(M.setUsingExperiment(!1)), T(M.userSendMessage(V, m)), (0, a.pv)(e, { conversationLength: Q.length, isFileAttached: Boolean(V.fileAttachments?.length), isDeepsearch: Y.isDeepsearch || void 0, isReasoning: Y.isReasoning || void 0 }), E?.();
                    const B = y.isTrue("responsive_web_grok_enable_add_response_keepalive") && (b || f),
                        W = y.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                    return (0, d.D)({ grokModule: M, requestBody: Y, dispatch: T, analytics: e, api: U, flags: { enableLocation: D, enableGrokApiHost: P, numRetries: W, enableKeepalive: B } });
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
            s.d(t, { $t: () => ne, A0: () => me, BA: () => se, BS: () => y, CH: () => M, CR: () => z, Cr: () => O, DX: () => W, Dh: () => _, Dn: () => P, En: () => d, FF: () => Q, FV: () => N, Gy: () => k, HF: () => S, IK: () => o, JO: () => Y, Jt: () => re, KH: () => I, L0: () => $, Lc: () => n, OW: () => U, Oj: () => C, P9: () => V, Q_: () => a, Qg: () => v, Qh: () => X, Sv: () => i, TY: () => F, Tv: () => q, UN: () => b, VK: () => c, WK: () => te, Ws: () => u, Xg: () => Z, Xi: () => D, Y8: () => l, Yb: () => h, Yf: () => r, Yx: () => g, ZN: () => B, _i: () => ce, ar: () => x, cA: () => Se, cw: () => ae, dK: () => E, dO: () => R, dZ: () => L, dw: () => ge, f1: () => le, fH: () => Re, ip: () => H, j$: () => pe, lQ: () => ee, lh: () => m, lm: () => p, mq: () => _e, my: () => f, nK: () => w, o$: () => G, px: () => ie, qd: () => j, ru: () => Ee, ub: () => A, vc: () => K, vi: () => T, wG: () => oe, x5: () => J, yB: () => ue, z2: () => de });
            const r = "grok",
                o = Object.freeze({ FUN: "fun", REGULAR: "" }),
                a = Object.freeze({ IDLE: "idle", TYPING: "typing", WAITING: "waiting", FAILED: "failed" }),
                n = Object.freeze({ REQUEST: "rweb/FETCH_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/FETCH_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/FETCH_GROK_CONVERSATION/FAILURE" }),
                i = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_HISTORY/FAILURE" }),
                c = Object.freeze({ REQUEST: "rweb/DELETE_GROK_MESSAGE/REQUEST", SUCCESS: "rweb/DELETE_GROK_MESSAGE/SUCCESS", FAILURE: "rweb/DELETE_GROK_MESSAGE/FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/REQUEST", SUCCESS: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/SUCCESS", FAILURE: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/FETCH_GROK_MEDIA_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_MEDIA_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_MEDIA_HISTORY/FAILURE" }),
                l = Object.freeze({ REQUEST: "rweb/SEARCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/SEARCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/SEARCH_GROK_HISTORY/FAILURE" }),
                g = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HOME/REQUEST", SUCCESS: "rweb/FETCH_GROK_HOME/SUCCESS", FAILURE: "rweb/FETCH_GROK_HOME/FAILURE" }),
                E = Object.freeze({ REQUEST: "rweb/FETCH_GROK_SHARE/REQUEST", SUCCESS: "rweb/FETCH_GROK_SHARE/SUCCESS", FAILURE: "rweb/FETCH_GROK_SHARE/FAILURE" }),
                S = Object.freeze({ REQUEST: "rweb/SET_PREFERENCES/REQUEST", SUCCESS: "rweb/SET_PREFERENCES/SUCCESS", FAILURE: "rweb/SET_PREFERENCES/FAILURE" }),
                m = Object.freeze({ REQUEST: "rweb/PIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/PIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/PIN_GROK_CONVERSATION/FAILURE" }),
                p = Object.freeze({ REQUEST: "rweb/UNPIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/UNPIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/UNPIN_GROK_CONVERSATION/FAILURE" }),
                _ = Object.freeze({ REQUEST: "rweb/CLEAR_CONVERSATIONS/REQUEST", SUCCESS: "rweb/CLEAR_CONVERSATIONS/SUCCESS", FAILURE: "rweb/CLEAR_CONVERSATIONS/FAILURE" }),
                R = Object.freeze({ REQUEST: "rweb/GROK_USER_EVENTS_LOG/REQUEST", SUCCESS: "rweb/GROK_USER_EVENTS_LOG/SUCCESS", FAILURE: "rweb/GROK_USER_EVENTS_LOG/FAILURE" }),
                h = "rweb/grok/DELETE_CONVERSATION",
                T = "rweb/grok/RENAME_CONVERSATION",
                I = "rweb/grok/SET_ABORT_CONTROLLER",
                O = "rweb/grok/CLEAR_CONVERSATION",
                A = "rweb/grok/USER_SEND_MESSAGE",
                f = "rweb/grok/REGENERATE_RESPONSE",
                b = "rweb/grok/GROK_RESPONSE_TYPING",
                C = "rweb/grok/GROK_RESPONSE_POSTS",
                w = "rweb/grok/GROK_RESPONSE_MEDIA_POSTS",
                k = "rweb/grok/GROK_RESPONSE_COMPLETE",
                N = "rweb/grok/GROK_RESPONSE_ERROR",
                U = "rweb/grok/GROK_RESPONSE_METADATA",
                y = "rweb/grok/GROK_RESPONSE_DISCLAIMER",
                P = "rweb/grok/GROK_RESPONSE_FILE_ATTACHMENTS",
                M = "rweb/grok/GROK_RESPONSE_FEEDBACK_LABELS",
                G = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTIONS",
                L = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTED_MODE",
                F = "rweb/grok/GROK_RESPONSE_CHAT_RESPONSE_ANNOTATIONS",
                v = "rweb/grok/GROK_RESPONSE_UPSELL",
                D = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENT",
                K = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENTS",
                H = "rweb/grok/GROK_RESPONSE_MESSAGE_STEP_ACCUMULATOR_UPDATE",
                Q = "rweb/grok/GROK_RESPONSE_MEMORY_REFERENCES",
                x = "rweb/grok/GROK_WEB_RESULTS",
                j = "rweb/grok/GROK_CITED_WEB_RESULTS",
                V = "rweb/grok/ABORT_MESSAGE",
                Y = "rweb/grok/SET_EXPECTED_IMAGE_ASPECT_RATIO",
                B = "rweb/grok/FETCH_CONVERSATION_ID_START",
                W = "rweb/grok/FETCH_CONVERSATION_ID_SUCCESS",
                q = "rweb/grok/FETCH_CONVERSATION_ID_FAILED",
                z = "rweb/grok/EDITING_SET_ID",
                Z = "rweb/grok/EDITING_CLEAR",
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
                de = "rweb/grok/SET_GROK_INPUT_FOCUSED",
                ue = "rweb/grok/QUERY_TYPING",
                le = "rweb/grok/ADD_BANNER_MESSAGE",
                ge = "rweb/grok/DELETE_MEDIA_HISTORY_ITEM",
                Ee = "rweb/grok/UPDATE_PERFORMANCE_METRICS",
                Se = "r/web/grok/SET_USING_EXPERIMENT",
                me = "r/web/grok/SET_PREFERRED_RESPONSE",
                pe = "rweb/grok/SET_GROK_INPUT_ADVANCED_SETTINGS",
                _e = "rweb/grok/SET_IS_PAST_THINKING_TRACE",
                Re = "rweb/grok/SET_REASONING_LAYOUT";
        },
        52570: (e, t, s) => {
            s.d(t, { NE: () => a, bY: () => u });
            var r = s(111677),
                o = s.n(r);
            const a = o().ead81122,
                n = o().f808a13a,
                i = o().e0481e5a,
                c = o().bc0a5b5a,
                d = o().ef674976,
                u = (e) => {
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
                            return a;
                    }
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserAvatar-b6d84a49.9efb062a.js.map

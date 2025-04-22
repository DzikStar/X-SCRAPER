"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserAvatar-2291c9da", "shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2b309ab6"],
    {
        958602: (e, t, s) => {
            s.d(t, { I: () => o });
            var r = s(323265),
                a = s(389071),
                n = s(189953);
            const o =
                ({ analytics: e, conversationKey: t }) =>
                async (e, s, { api: o, featureSwitches: i }) => {
                    const c = (0, a.bD)(t),
                        d = c.selectStatus(s());
                    if (!(d === n.Q_.TYPING || d === n.Q_.WAITING)) return Promise.resolve();
                    const l = c.selectConversationId(s()) || void 0,
                        u = c.selectMetadataForMessageId(s(), "currentResponse"),
                        g = u?.agentChatItemId || void 0;
                    await e(c.abortMessage());
                    const m = { responses: [], systemPromptName: "", grokModelOptionId: "", conversationId: l, responseToChatItemId: g, isCancel: !0 },
                        p = !r.ZP.isTwitterApp() && i.isTrue("responsive_web_grok_api_enable_grok_host");
                    return o.fetchClient.dispatch("/2/grok/add_response.json", { method: "POST", credentials: "include", body: JSON.stringify(m) }, p ? "https://grok.x.com" : void 0).then(async (e) => {});
                };
        },
        691018: (e, t, s) => {
            s.d(t, { D: () => p });
            s(890103), s(543673), s(240753), s(128399), s(136728), s(875640);
            var r = s(323265),
                a = s(303157),
                n = s(774717),
                o = s(623494),
                i = s(836255),
                c = s(52570),
                d = s(155918),
                l = s(190529),
                u = s(940520);
            const g = [],
                m = [],
                p = ({ analytics: e, api: t, dispatch: s, eventTag: p, flags: E, grokModule: h, method: S = "POST", requestBody: R, requestParams: _ }) => {
                    const T = Date.now();
                    let f = !1;
                    const I = (function () {
                            const e = `grok-${r.ZP.isTwitterApp() ? (r.ZP.isAndroid() ? "android" : "ios") : "web"}:api-handler`,
                                t = n.P_();
                            function s(s) {
                                n.IM(`${e}:${s}`, t.end());
                            }
                            const a = new Set();
                            function o(e) {
                                a.has(e) || (a.add(e), s(e));
                            }
                            return { record: s, recordOnce: o };
                        })(),
                        k = new AbortController(),
                        A = p ? ` (${p})` : "",
                        w = [""],
                        b = [""];
                    let C = !0,
                        O = !1;
                    const U = (0, u.Z)(s);
                    let M = !1,
                        N = !1;
                    const D = new d.EG();
                    D.setRequestedCount(R.imageGenerationCount || 0);
                    const P = R.responses[R.responses.length - 1];
                    if (P && P.fileAttachments && P.fileAttachments.length) {
                        const e = P.fileAttachments.find((e) => e.url && e.mimeType.startsWith("image"));
                        e &&
                            (e.dimensions
                                ? s(h.setExpectedImageAspectRatio(e.dimensions.width / e.dimensions.height))
                                : e.url &&
                                  (0, l.p)(e.url).then((e) => {
                                      s(h.setExpectedImageAspectRatio(e.width / e.height));
                                  }));
                    }
                    const y = new a.Fk(R.deepsearchArgs);
                    let F = [],
                        G = [];
                    let v = "/2/grok/add_response.json";
                    if ("GET" === S && _) {
                        const e = (function (e) {
                            const t = new URLSearchParams();
                            for (const [s, r] of Object.entries(e)) t.append(s, String(r));
                            return t.toString();
                        })(_);
                        e && (v += `?${e}`);
                    }
                    return (
                        s(h.setAbortController(k)),
                        t.fetchClient
                            .dispatch(v, { method: S, credentials: "include", params: "GET" === S ? _ : null, body: "POST" === S ? JSON.stringify(R) : null, signal: k?.signal, keepalive: E?.enableKeepalive }, E?.enableGrokApiHost ? "https://grok.x.com" : void 0)
                            .then(async (t) => {
                                const r = t.headers.get("x-transaction-id");
                                if ((r && s(h.updatePerformanceMetrics({ traceId: r })), !t.ok)) {
                                    I.record(`http-${t.status}`);
                                    const r = (0, c.bY)(t.status);
                                    return s(h.grokResponseError(r)), "STARTED" === y.state && (y.onAbort(), s(h.grokResponseDeepSearchUpdate(y)), (0, o.hq)(e, { durationMs: y.getStreamDuration(), errorMessage: r })), void (0, o.Uk)(e, `add-response failed with status ${t.status}${A}`);
                                }
                                const n = t.body?.getReader();
                                if (!n) return "STARTED" === y.state && (y.onAbort(), s(h.grokResponseDeepSearchUpdate(y))), s(h.grokResponseError(c.NE)), void (0, o.Uk)(e, `reader was not found${A}`);
                                const l = new TextDecoder();
                                let u = "";
                                const p = setTimeout(() => {
                                        (0, o.eS)(e, !0);
                                    }, 5e3),
                                    _ = await n.read();
                                return (
                                    clearTimeout(p),
                                    (async function t({ done: r, value: p }) {
                                        if (r) {
                                            if ((!w.length || w.every((e) => "" === e)) && !M) {
                                                const t = `add-response failed to reach the network${A}`;
                                                "STARTED" === y.state && (y.onAbort(), s(h.grokResponseDeepSearchUpdate(y)), (0, o.hq)(e, { durationMs: y.getStreamDuration(), errorMessage: t })), s(h.grokResponseError(c.NE)), (0, o.Uk)(e, t), I.record("network-error");
                                            } else "GET" === S ? (U.resumingDispatch(() => s(h.updatePerformanceMetrics({ endStreamTime: Date.now() }))), U.resumingDispatch(() => s(h.grokResponseComplete()))) : (s(h.updatePerformanceMetrics({ endStreamTime: Date.now() })), s(h.grokResponseComplete())), I.record("time-to-last-chunk"), "STARTED" === y.state ? (y.onAbort(), "GET" === S ? U.resumingDispatch(() => s(h.grokResponseDeepSearchUpdate(y))) : s(h.grokResponseDeepSearchUpdate(y))) : "COMPLETED" === y.state && (0, o.y6)(e, y.getStreamDuration());
                                        } else if (p) {
                                            I.recordOnce("time-to-first-chunk"), f || ((f = !0), s(h.updatePerformanceMetrics({ timeToFirstChunkMs: Date.now() - T })));
                                            const r = l.decode(p);
                                            if (((u += r), u.includes("\n"))) {
                                                const t = u.split("\n");
                                                u = t.pop();
                                                for (const r of t)
                                                    try {
                                                        if (O || "GET" !== S) {
                                                            const t = JSON.parse(r),
                                                                n = t.result?.sideBySideIndex ?? 0;
                                                            if ((!0 === t.result?.isThinking && (t.result = { ...t.result, messageTag: void 0 }), null == t.result?.sideBySideIndex || N || (w.push(""), b.push(""), s(h.setUsingExperiment(!0)), (N = !0)), t.result?.query && s(h.queryTyping(t.result.query)), t.result?.bannerMessage && s(h.addBannerMessage(t.result.bannerMessage)), t.result?.xPostIds && (G.push(...(t.result.xPostIds || m)), (G = G.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(i.Z.fetchMultiple(G)), s(h.grokResponsePosts(G, n))), t.result?.xMediaPostIds)) {
                                                                const e = t.result.xMediaPostIds;
                                                                s(i.Z.fetchMultiple(e)), s(h.grokResponseMediaPosts(e));
                                                            }
                                                            if (t.result?.postIds) s(h.grokResponsePosts(t.result.postIds, n));
                                                            else if (t.result?.message && (!t.result?.messageTag || t.result?.messageTag === a.iS.FINAL)) {
                                                                const e = !w[n];
                                                                t.result?.isThinking ? (b[n] += t.result.message) : (w[n] += t.result.message), e && s(h.updatePerformanceMetrics({ timeToFirstTextMs: Date.now() - T }));
                                                                const r = t.result?.isThinking ? b[n] : w[n],
                                                                    o = t.result?.isThinking ? "thinkingTrace" : "message";
                                                                "thinkingTrace" === o && C && (C = !1), "message" === o && b[0].length > 0 && !C && ((C = !0), "GET" === S ? U.resumingDispatch(() => s(h.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))) : s(h.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))), "GET" === S ? U.resumingDispatch(() => s(h.grokResponseTyping(r, o, n))) : s(h.grokResponseTyping(r, o, n)), (t.result?.messageTag === a.iS.FINAL || (t.result?.message && "STARTED" === y.state)) && (y.updateFinalAnswer({ messageTag: a.iS.FINAL, message: t.result?.message || "" }), y.complete(), "GET" === S ? (U.resumingDispatch(() => s(h.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))), U.resumingDispatch(() => s(h.grokResponseDeepSearchUpdate(y)))) : (s(h.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() })), s(h.grokResponseDeepSearchUpdate(y))));
                                                            }
                                                            if (("error" === t.result?.responseType && s(h.grokResponseFileAttachments([])), t.result?.imageAttachmentCount)) {
                                                                let e = t.result.imageAttachmentCount;
                                                                R.imageGenerationCount && (e = Math.min(e, R.imageGenerationCount)), D.setCount(e);
                                                            }
                                                            if ((t.result?.imageWidth && t.result?.imageHeight && s(h.setExpectedImageAspectRatio(t.result?.imageWidth / t.result?.imageHeight)), "image" === t.result?.responseType || t.result?.imageAttachment?.imageUrl)) {
                                                                M = !0;
                                                                const e = t.result.imageAttachment;
                                                                D.addAttachment({ fileName: e?.fileName ?? "image", mimeType: e?.mimeType ?? "image/jpeg", mediaId: e?.mediaIdStr, url: e?.imageUrl }), s(h.grokResponseFileAttachments(D.generateAttachmentList()));
                                                            }
                                                            t.result?.feedbackLabels && s(h.grokResponseFeedbackLabels(t.result.feedbackLabels)), t.result?.disclaimer && s(h.grokResponseDisclaimer(t.result.disclaimer)), t.result?.followUpSuggestions && s(h.grokResponseFollowUpSuggestions(t.result.followUpSuggestions)), t.result?.followUpSuggestedMode && s(h.grokResponseFollowUpSuggestedMode(t.result?.followUpSuggestedMode)), t.result?.chatResponseAnnotations && s(h.grokResponseChatResponseAnnotations(t.result.chatResponseAnnotations)), t.result?.upsell && s(h.grokResponseUpsell(t.result.upsell)), (t.agentChatItemId || t.userChatItemId) && (s(h.updatePerformanceMetrics({ startStreamTime: Date.now() })), s(h.grokResponseMetadata({ agentChatItemId: t.agentChatItemId, userChatItemId: t.userChatItemId }))), t.result?.webResults && (F.push(...(t.result?.webResults || g)), (F = F.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url))), s(h.grokWebResults(F, n))), t.result?.citedWebResults && s(h.grokCitedWebResults(t.result.citedWebResults, n));
                                                            const o = t.result?.event;
                                                            if ((o && (o.imageAttachmentUpdate && s(h.imageIntermediateResult({ ...o.imageAttachmentUpdate, progress: o.imageAttachmentUpdate.progress / 100, imageUrl: o.imageAttachmentUpdate.imageUrl })), o.imageAttachmentRemoval && (D.setAttachmentAsModerated(o.imageAttachmentRemoval.imageIdStr), s(h.grokResponseFileAttachments(D.generateAttachmentList())))), E?.enableLocation && t.result?.doLocationRequest && !R.geoLocation && s(h.grokResponseCardAttachment({ cardType: "geo_location_request" })), t.result?.cardAttachment)) {
                                                                const r = (0, d.dj)(t.result.cardAttachment, e);
                                                                r && s(h.grokResponseCardAttachment(r));
                                                            }
                                                            if ((t.result?.memoryReferences && s(h.grokResponseMemoryReferences(t.result.memoryReferences)), t.result?.messageTag && (t.result?.message || t.result?.messageStepId))) {
                                                                const e = t.result?.messageTag;
                                                                e !== a.iS.FINAL && e !== a.iS.FINAL_LONG && (y.updateStepsFromRawMessage({ message: t.result?.message || "", messageTag: e, messageStepId: t.result?.messageStepId || -1, webResults: t.result?.webResults || g, xPostIds: t.result?.xPostIds || m }), "GET" === S ? U.resumingDispatch(() => s(h.grokResponseDeepSearchUpdate(y))) : s(h.grokResponseDeepSearchUpdate(y)));
                                                            }
                                                        } else {
                                                            const e = JSON.parse(r);
                                                            (O = !0), e.message && ((w[0] += e.message), s(h.grokResponseTyping(e.message ?? "", "message"))), e.thinkingTrace && ((b[0] += e.thinkingTrace), s(h.grokResponseTyping(e.thinkingTrace ?? "", "thinkingTrace")));
                                                            const t = new a.Fk();
                                                            if (e.deepsearchHeaders && e?.deepsearchHeaders.length > 0) {
                                                                t.defaultFinalAnswer = e.message || "";
                                                                const r = [];
                                                                for (const t of e.deepsearchHeaders) {
                                                                    const e = [];
                                                                    for (const r of t.steps) {
                                                                        const t = (r.xPostIds || []).map((e) => e),
                                                                            a = (r.webResults || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title }));
                                                                        t.length && (G.push(...t), (G = G.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(i.Z.fetchMultiple(t))), a.length && (F.push(...a), (F = F.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url)))), e.push({ header: r.header || "", assistant: r.assistant || "", decision: r.decision || "", finalMessage: r.finalMessage || "", functionCall: r.functionCall || "", rawFunctionResult: r.rawFunctionResult || "", summary: r.summary || "", webResults: a, xPostIds: t });
                                                                    }
                                                                    r.push({ header: t.header || "", steps: e });
                                                                }
                                                                t.initiateFromHistoryResponses(r, !0), s(h.grokResponseDeepSearchUpdate(t));
                                                            }
                                                        }
                                                    } catch (t) {
                                                        (0, o.kl)(e, t, { json: r });
                                                    }
                                            }
                                            if (n) {
                                                const s = setTimeout(() => {
                                                        (0, o.eS)(e, !1);
                                                    }, 5e3),
                                                    r = await n.read();
                                                return clearTimeout(s), t(r);
                                            }
                                        }
                                    })(_)
                                );
                            })
                            .catch((t) => {
                                const r = t instanceof window.DOMException && "AbortError" === t.name;
                                s(h.updatePerformanceMetrics({ endStreamTime: Date.now() })), b[0].length > 0 && s(h.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() })), r ? ("PENDING" !== y.state && "COMPLETED" !== y.state && (0, o.YI)(e, { durationMs: y.getStreamDuration(), messageTagCounts: y.debugMessageTagCount }), U.abortQueue(), I.record("abort")) : ("STARTED" === y.state && (y.onAbort(), "GET" === S ? (U.resumingDispatch(() => s(h.grokResponseDeepSearchUpdate(y))), U.resumingDispatch(() => s(h.updatePerformanceMetrics({ deepsearchEnd: Date.now() })))) : s(h.grokResponseDeepSearchUpdate(y)), (0, o.hq)(e, { durationMs: y.getStreamDuration(), errorMessage: t ? t.message : void 0 })), s(h.grokResponseError(c.NE)), (0, o.kl)(e, t), I.record("error"));
                            })
                    );
                };
        },
        155281: (e, t, s) => {
            s.d(t, { u: () => g });
            s(890103), s(136728), s(875640), s(543673), s(240753), s(128399);
            var r = s(323265),
                a = s(303157),
                n = s(774717),
                o = s(623494),
                i = s(836255),
                c = s(52570),
                d = s(155918),
                l = s(190529),
                u = s(940520);
            const g = async ({ analytics: e, api: t, dispatch: s, eventTag: g, flags: E, grokModule: h, method: S = "POST", requestBody: R, requestParams: _ }) => {
                const T = g ? ` (${g})` : "",
                    f = (function () {
                        const e = `grok-${r.ZP.isTwitterApp() ? (r.ZP.isAndroid() ? "android" : "ios") : "web"}:api-handler`,
                            t = n.P_();
                        function s(s) {
                            n.IM(`${e}:${s}`, t.end());
                        }
                        const a = new Set();
                        function o(e) {
                            a.has(e) || (a.add(e), s(e));
                        }
                        return { record: s, recordOnce: o };
                    })(),
                    I = Date.now();
                let k = !1,
                    A = new AbortController();
                s(h.setAbortController(A));
                let w = !1;
                const b = (0, u.Z)(s),
                    C = [""],
                    O = [""];
                let U = !0,
                    M = !1;
                const N = new d.EG();
                N.setRequestedCount(R.imageGenerationCount || 0),
                    (function ({ dispatch: e, grokModule: t, responses: s }) {
                        const r = s[s.length - 1];
                        if (r && r.fileAttachments && r.fileAttachments.length) {
                            const s = r.fileAttachments.find((e) => e.url && e.mimeType.startsWith("image"));
                            s &&
                                (s.dimensions
                                    ? e(t.setExpectedImageAspectRatio(s.dimensions.width / s.dimensions.height))
                                    : s.url &&
                                      (0, l.p)(s.url).then((s) => {
                                          e(t.setExpectedImageAspectRatio(s.width / s.height));
                                      }));
                        }
                    })({ responses: R.responses, grokModule: h, dispatch: s });
                const D = new a.Fk(R.deepsearchArgs);
                let P = [],
                    y = [],
                    F = "",
                    G = !1,
                    v = 0,
                    L = !1;
                const K = async ({ method: r, requestParams: n }) => {
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
                        })({ method: r, requestParams: n });
                        t.fetchClient
                            .dispatch(l, { method: r, credentials: "include", params: "GET" === r ? n : null, body: "POST" === r ? JSON.stringify(R) : null, signal: A?.signal, keepalive: E?.enableKeepalive }, E?.enableGrokApiHost ? "https://grok.x.com" : void 0)
                            .then(async (t) => {
                                const n = t.headers.get("x-transaction-id");
                                if ((n && s(h.updatePerformanceMetrics({ traceId: n })), !t.ok)) {
                                    f.record(`http-${t.status}`);
                                    const a = (0, c.bY)(t.status);
                                    return s(h.grokResponseError(a)), p({ deepSearchSummaryAccumulator: D, analytics: e, dispatch: s, errorMessage: a, grokModule: h, resumabilityQueue: b, method: r }), void (0, o.Uk)(e, `add-response failed with status ${t.status}${T}`);
                                }
                                const l = t.body?.getReader();
                                if (!l) return p({ deepSearchSummaryAccumulator: D, analytics: e, dispatch: s, grokModule: h, resumabilityQueue: b, method: r, errorMessage: `reader was not found${T}` }), s(h.grokResponseError(c.NE)), void (0, o.Uk)(e, `reader was not found${T}`);
                                const u = new TextDecoder();
                                let g = "";
                                const m = setTimeout(() => {
                                        (0, o.eS)(e, !0);
                                    }, 5e3),
                                    S = await l.read();
                                return (
                                    clearTimeout(m),
                                    (async function t({ done: n, value: m }) {
                                        if (n) {
                                            L = !1;
                                            if ((!C.length || C.every((e) => "" === e)) && !G) {
                                                const t = `add-response failed to reach the network${T}`;
                                                return p({ deepSearchSummaryAccumulator: D, analytics: e, dispatch: s, errorMessage: t, grokModule: h, resumabilityQueue: b, method: r }), s(h.grokResponseError(c.NE)), (0, o.Uk)(e, t), void f.record("network-error");
                                            }
                                            f.record("time-to-last-chunk"),
                                                (function ({ analytics: e, deepSearchSummaryAccumulator: t, dispatch: s, grokModule: r, method: a, resumabilityQueue: n }) {
                                                    (function ({ analytics: e, deepSearchSummaryAccumulator: t, dispatch: s, grokModule: r }) {
                                                        if ("STARTED" !== t.state) return;
                                                        t.complete(), s(r.grokResponseDeepSearchUpdate(t)), (0, o.y6)(e, t.getStreamDuration());
                                                    })({ deepSearchSummaryAccumulator: t, analytics: e, dispatch: s, grokModule: r }),
                                                        "GET" === a ? (n.resumingDispatch(() => s(r.updatePerformanceMetrics({ endStreamTime: Date.now() }))), n.resumingDispatch(() => s(r.grokResponseComplete()))) : "POST" === a && (s(r.updatePerformanceMetrics({ endStreamTime: Date.now() })), s(r.grokResponseComplete()));
                                                })({ deepSearchSummaryAccumulator: D, analytics: e, dispatch: s, grokModule: h, method: r, resumabilityQueue: b });
                                        }
                                        if (m) {
                                            f.recordOnce("time-to-first-chunk"), k || ((k = !0), s(h.updatePerformanceMetrics({ timeToFirstChunkMs: Date.now() - I })));
                                            const n = u.decode(m);
                                            if (((g += n), g.includes("\n"))) {
                                                const t = g.split("\n");
                                                g = t.pop();
                                                for (const n of t)
                                                    if (w || "GET" !== r) {
                                                        const t = JSON.parse(n),
                                                            o = t.result?.sideBySideIndex ?? 0;
                                                        if ((t.result?.isThinking && (t.result = { ...t.result, messageTag: void 0 }), null == t.result?.sideBySideIndex || M || (C.push(""), O.push(""), s(h.setUsingExperiment(!0)), (M = !0)), t.result?.query && s(h.queryTyping(t.result.query)), t.result?.bannerMessage && s(h.addBannerMessage(t.result.bannerMessage)), t.result?.xPostIds && (y.push(...(t.result.xPostIds || [])), (y = y.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(i.Z.fetchMultiple(y)), s(h.grokResponsePosts(y, o))), t.result?.xMediaPostIds)) {
                                                            const e = t.result.xMediaPostIds;
                                                            s(i.Z.fetchMultiple(e)), s(h.grokResponseMediaPosts(e));
                                                        }
                                                        if (t.result?.postIds) s(h.grokResponsePosts(t.result.postIds, o));
                                                        else if (t.result?.message && (!t.result?.messageTag || t.result?.messageTag === a.iS.FINAL)) {
                                                            const e = !C[o];
                                                            t.result?.isThinking ? (O[o] += t.result.message) : (C[o] += t.result.message), e && s(h.updatePerformanceMetrics({ timeToFirstTextMs: Date.now() - I }));
                                                            const n = t.result?.isThinking ? O[o] : C[o],
                                                                i = t.result?.isThinking ? "thinkingTrace" : "message";
                                                            "thinkingTrace" === i && U && (U = !1), "message" === i && O[0].length > 0 && !U && ((U = !0), "GET" === r ? b.resumingDispatch(() => s(h.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))) : s(h.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))), "GET" === r ? b.resumingDispatch(() => s(h.grokResponseTyping(n, i, o))) : s(h.grokResponseTyping(n, i, o)), (t.result?.messageTag === a.iS.FINAL || (t.result?.message && "STARTED" === D.state)) && (D.updateFinalAnswer({ messageTag: a.iS.FINAL, message: t.result?.message || "" }), D.complete(), "GET" === r ? (b.resumingDispatch(() => s(h.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))), b.resumingDispatch(() => s(h.grokResponseDeepSearchUpdate(D)))) : (s(h.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() })), s(h.grokResponseDeepSearchUpdate(D))));
                                                        }
                                                        if (("error" === t.result?.responseType && s(h.grokResponseFileAttachments([])), t.result?.imageAttachmentCount)) {
                                                            let e = t.result.imageAttachmentCount;
                                                            R.imageGenerationCount && (e = Math.min(e, R.imageGenerationCount)), N.setCount(e);
                                                        }
                                                        if ((t.result?.imageWidth && t.result?.imageHeight && s(h.setExpectedImageAspectRatio(t.result?.imageWidth / t.result?.imageHeight)), "image" === t.result?.responseType || t.result?.imageAttachment?.imageUrl)) {
                                                            G = !0;
                                                            const e = t.result.imageAttachment;
                                                            N.addAttachment({ fileName: e?.fileName ?? "image", mimeType: e?.mimeType ?? "image/jpeg", mediaId: e?.mediaIdStr, url: e?.imageUrl }), s(h.grokResponseFileAttachments(N.generateAttachmentList()));
                                                        }
                                                        t.result?.feedbackLabels && s(h.grokResponseFeedbackLabels(t.result.feedbackLabels)), t.result?.disclaimer && s(h.grokResponseDisclaimer(t.result.disclaimer)), t.result?.followUpSuggestions && s(h.grokResponseFollowUpSuggestions(t.result.followUpSuggestions)), t.result?.followUpSuggestedMode && s(h.grokResponseFollowUpSuggestedMode(t.result?.followUpSuggestedMode)), t.result?.chatResponseAnnotations && s(h.grokResponseChatResponseAnnotations(t.result.chatResponseAnnotations)), t.result?.upsell && s(h.grokResponseUpsell(t.result.upsell)), (t.agentChatItemId || t.userChatItemId) && (t.agentChatItemId && (F = t.agentChatItemId), s(h.updatePerformanceMetrics({ startStreamTime: Date.now() })), s(h.grokResponseMetadata({ agentChatItemId: t.agentChatItemId, userChatItemId: t.userChatItemId }))), t.result?.webResults && (P.push(...(t.result?.webResults || [])), (P = P.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url))), s(h.grokWebResults(P, o))), t.result?.citedWebResults && s(h.grokCitedWebResults(t.result.citedWebResults, o));
                                                        const c = t.result?.event;
                                                        if ((c && (c.imageAttachmentUpdate && s(h.imageIntermediateResult({ ...c.imageAttachmentUpdate, progress: c.imageAttachmentUpdate.progress / 100, imageUrl: c.imageAttachmentUpdate.imageUrl })), c.imageAttachmentRemoval && (N.setAttachmentAsModerated(c.imageAttachmentRemoval.imageIdStr), s(h.grokResponseFileAttachments(N.generateAttachmentList())))), E?.enableLocation && t.result?.doLocationRequest && !R.geoLocation && s(h.grokResponseCardAttachment({ cardType: "geo_location_request" })), t.result?.cardAttachment)) {
                                                            const r = (0, d.dj)(t.result.cardAttachment, e);
                                                            r && s(h.grokResponseCardAttachment(r));
                                                        }
                                                        if ((t.result?.memoryReferences && s(h.grokResponseMemoryReferences(t.result.memoryReferences)), t.result?.messageTag && (t.result?.message || t.result?.messageStepId))) {
                                                            const e = t.result?.messageTag;
                                                            e !== a.iS.FINAL && e !== a.iS.FINAL_LONG && (D.updateStepsFromRawMessage({ message: t.result?.message || "", messageTag: e, messageStepId: t.result?.messageStepId || -1, webResults: t.result?.webResults || [], xPostIds: t.result?.xPostIds || [] }), "GET" === r ? b.resumingDispatch(() => s(h.grokResponseDeepSearchUpdate(D))) : s(h.grokResponseDeepSearchUpdate(D)));
                                                        }
                                                    } else {
                                                        const e = JSON.parse(n);
                                                        (w = !0), e.message && ((C[0] += e.message), s(h.grokResponseTyping(e.message ?? "", "message"))), e.thinkingTrace && ((O[0] += e.thinkingTrace), s(h.grokResponseTyping(e.thinkingTrace ?? "", "thinkingTrace")));
                                                        const t = new a.Fk();
                                                        if (e.deepsearchHeaders && e?.deepsearchHeaders.length > 0) {
                                                            t.defaultFinalAnswer = e.message || "";
                                                            const r = [];
                                                            for (const t of e.deepsearchHeaders) {
                                                                const e = [];
                                                                for (const r of t.steps) {
                                                                    const t = (r.xPostIds || []).map((e) => e),
                                                                        a = (r.webResults || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title }));
                                                                    t.length && (y.push(...t), (y = y.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(i.Z.fetchMultiple(t))), a.length && (P.push(...a), (P = P.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url)))), e.push({ header: r.header || "", assistant: r.assistant || "", decision: r.decision || "", finalMessage: r.finalMessage || "", functionCall: r.functionCall || "", rawFunctionResult: r.rawFunctionResult || "", summary: r.summary || "", webResults: a, xPostIds: t });
                                                                }
                                                                r.push({ header: t.header || "", steps: e });
                                                            }
                                                            t.initiateFromHistoryResponses(r, !0), s(h.grokResponseDeepSearchUpdate(t));
                                                        }
                                                    }
                                            }
                                            if (l) {
                                                const s = setTimeout(() => {
                                                        (0, o.eS)(e, !1);
                                                    }, 5e3),
                                                    r = await l.read();
                                                return clearTimeout(s), t(r);
                                            }
                                        }
                                    })(S)
                                );
                            })
                            .catch(async (t) => {
                                L = !1;
                                if (t instanceof window.DOMException && "AbortError" === t.name) "STARTED" === D.state && (0, o.YI)(e, { durationMs: D.getStreamDuration(), messageTagCounts: D.debugMessageTagCount }), b.abortQueue(), f.record("abort");
                                else {
                                    if (H()) return void (await x(t.message));
                                    p({ deepSearchSummaryAccumulator: D, analytics: e, dispatch: s, grokModule: h, resumabilityQueue: b, method: r, errorMessage: t ? t.message : void 0 }), s(h.grokResponseError(c.NE)), (0, o.kl)(e, t), f.record("error");
                                }
                                s(h.updatePerformanceMetrics({ endStreamTime: Date.now() })), O[0].length > 0 && s(h.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }));
                            });
                    },
                    H = () => {
                        const e = m(),
                            t = Boolean(R.isDeepsearch) || Boolean(R.isReasoning);
                        return !L && v < (E?.numRetries || 0) && !!F && !!e && t && "POST" === S;
                    },
                    x = async (t) => {
                        A.abort(), v++, (L = !0), (0, o.mm)(e, v, t), (A = new AbortController()), await s(h.setAbortController(A)), K({ method: "GET", requestParams: { ..._, conversationId: m(), responseToChatItemId: F, streamInitialChunkWhole: !1 } });
                    };
                return K({ method: S, requestParams: _ });
            };
            function m() {
                return new URLSearchParams(window.location.search).get("conversation") || "";
            }
            function p({ analytics: e, deepSearchSummaryAccumulator: t, dispatch: s, errorMessage: r, grokModule: a, method: n, resumabilityQueue: i }) {
                "STARTED" === t.state && (t.onAbort(), "GET" === n ? (i.resumingDispatch(() => s(a.grokResponseDeepSearchUpdate(t))), i.resumingDispatch(() => s(a.updatePerformanceMetrics({ deepsearchEnd: Date.now() })))) : s(a.grokResponseDeepSearchUpdate(t)), (0, o.hq)(e, { durationMs: t.getStreamDuration(), errorMessage: r }));
            }
        },
        100326: (e, t, s) => {
            s.d(t, { X: () => i });
            s(571372);
            var r = s(791005),
                a = s.n(r),
                n = s(623494),
                o = s(52570);
            const i = ({ analysisEntityId: e, analytics: t, api: s, dispatch: r, fromShareId: i, fromUniversalSearch: c, grokModule: d }) => (
                r(d.fetchConversationIdStart()),
                s.apiClient
                    .graphQL(a(), { fromShare: i, fromUniversalSearch: c })
                    .then((s) => {
                        const a = s.create_grok_conversation?.conversation_id,
                            i = s.create_grok_conversation?.error_code;
                        if (a) return r(d.fetchConversationIdSuccess(a, e)), a;
                        if (i) throw (r(d.fetchConversationIdFailed(o.NE)), (0, n.Uk)(t, "conversation_id failed"), new Error(i));
                    })
                    .catch((e) => {
                        const t = e.errors?.[0]?.code,
                            s = (0, o.bY)(t);
                        r(d.fetchConversationIdFailed(s));
                    })
            );
        },
        96275: (e, t, s) => {
            s.d(t, { d: () => E });
            s(136728);
            var r = s(506899),
                a = s(389071),
                n = s(6157),
                o = s(171697),
                i = s(303157),
                c = s(917799),
                d = s(56519),
                l = s(836255),
                u = s(189953),
                g = s(155918),
                m = s(691018),
                p = s(155281);
            const E =
                (e, t) =>
                (s, E, { api: h }) =>
                    c._O(s, { params: { restId: e }, request: h.withEndpoint(n.Z).fetchConversation })({ actionTypes: u.Lc, context: "FETCH_GROK_CONVERSATION", meta: { conversationId: e } }, (n) => {
                        if (!n?.grok_conversation_items_by_rest_id?.items) return;
                        const c = e;
                        s((0, a.Ki)(c));
                        const h = (0, a.YJ)(E(), c);
                        s(h.clearConversation()), s(h.fetchConversationIdSuccess(e));
                        const S = n?.grok_conversation_items_by_rest_id?.items ? [...n.grok_conversation_items_by_rest_id.items].reverse() : [];
                        S.forEach((n, c) => {
                            if (n.is_partial && c === S.length - 1)
                                return (
                                    s(
                                        (
                                            ({ agentChatItemId: e, analytics: t, conversationKey: s }) =>
                                            async (r, n, { api: o, featureSwitches: i }) => {
                                                const c = (0, a.bD)(s),
                                                    d = { responses: [], systemPromptName: "", grokModelOptionId: "", conversationId: s },
                                                    l = i.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                                                return (l > 0 ? p.u : m.D)({ grokModule: c, requestParams: { conversationId: s, responseToChatItemId: e, streamInitialChunkWhole: !1 }, requestBody: d, dispatch: r, method: "GET", analytics: t, api: o, flags: { numRetries: l } });
                                            }
                                        )({ conversationKey: e, agentChatItemId: n.chat_item_id ?? "", analytics: t }),
                                    ),
                                    void s(h.grokResponseMetadata({ agentChatItemId: n.chat_item_id }))
                                );
                            n.post_ids_results?.forEach((e) => {
                                if ("Tweet" === e.result?.__typename) {
                                    const { entities: t } = (0, r.Fv)(e.result, o.Z);
                                    s((0, d.dP)(t));
                                }
                            }),
                                n.media_post_ids_results?.forEach((e) => {
                                    if ("Tweet" === e.result?.__typename) {
                                        const { entities: t } = (0, r.Fv)(e.result, o.Z);
                                        s((0, d.dP)(t));
                                    }
                                });
                            const E = (n.post_ids_results ?? []).map((e) => e.result?.rest_id).filter(Boolean),
                                R = (n.media_post_ids_results ?? []).map((e) => e.result?.rest_id).filter(Boolean);
                            let _ = n.file_attachments?.map((e) => ({ fileName: e.file_name ?? "image.jpeg", mediaId: e.media_id, isPublic: !1, mimeType: e.mime_type ?? "image/jpeg", url: e.url ?? (e.media_id ? `https://api.x.com/2/grok/attachment.json?mediaId=${e.media_id}` : void 0) })) ?? [];
                            if ((0 === _.length && (_ = n.media_urls?.map((e) => ({ fileName: "image.jpeg", isPublic: !1, mimeType: "image/jpeg", url: e })) ?? []), "User" === n.sender_type && s(h.userSendMessage({ message: n.message ?? "", fileAttachments: _, bannerMessages: n.banner_message ? [n.banner_message] : void 0, postIds: E, sender: 1 })), "Agent" === n.sender_type)) {
                                if ((s(h.grokResponseTyping(n.message ?? "", "message")), n.thinking_trace)) {
                                    const e = n.thinking_trace;
                                    s(h.grokResponseTyping(e, "thinkingTrace")), (n.is_partial && c === S.length - 1) || s(h.setIsPastThinkingTrace(!0));
                                }
                                n.banner_message && s(h.addBannerMessage(n.banner_message)), _.length && s(h.grokResponseFileAttachments(_)), n.memory_references && s(h.grokResponseMemoryReferences(n.memory_references.map((e) => ({ conversation_id: e.conversation_id, summary: e.conversation_summary }))));
                                const e = [];
                                if (n.card_attachments)
                                    for (const t of n.card_attachments) {
                                        const s = (0, g.dj)(t);
                                        s && e.push(s);
                                    }
                                else if (n.card_attachment) {
                                    const t = (0, g.dj)(n.card_attachment);
                                    t && e.push(t);
                                }
                                e.length && s(h.grokResponseCardAttachments(e));
                                let t = [],
                                    r = [],
                                    a = {};
                                n.deepsearch_args && (a = n.deepsearch_args);
                                const o = new i.Fk(a);
                                if (n.deepsearch_headers && n.deepsearch_headers.length > 0) {
                                    o.defaultFinalAnswer = n.message || "";
                                    const e = [];
                                    for (const a of n.deepsearch_headers) {
                                        const n = [];
                                        for (const e of a.steps) {
                                            const a = (e.x_post_ids || []).map((e) => e),
                                                o = (e.web_results || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title }));
                                            a.length && (t.push(...a), (t = t.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(l.Z.fetchMultiple(a))), o.length && (r.push(...o), (r = r.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url)))), n.push({ header: e.header || "", assistant: e.assistant || "", decision: e.decision || "", finalMessage: e.final_message || "", functionCall: e.function_call || "", rawFunctionResult: e.raw_function_result || "", summary: e.summary || "", webResults: o, xPostIds: a });
                                        }
                                        e.push({ header: a.header || "", steps: n });
                                    }
                                    o.initiateFromHistoryResponses(e), s(h.grokResponseDeepSearchUpdate(o)), t.length && s(h.grokResponsePosts(t)), r.length && s(h.grokWebResults(r));
                                } else R.length && s(h.grokResponseMediaPosts(R)), E.length && s(h.grokResponsePosts(E)), n.web_results && s(h.grokWebResults([...n.web_results])), n.cited_web_results && s(h.grokCitedWebResults([...n.cited_web_results]));
                                s(h.grokResponseMetadata({ agentChatItemId: n.chat_item_id, userChatItemId: S[c - 1].chat_item_id, isDeleted: n.is_deleted })), s(h.grokResponseComplete());
                            }
                            s(h.setMode("Fun" === n.grok_mode ? u.IK.FUN : u.IK.REGULAR));
                        });
                    });
        },
        190529: (e, t, s) => {
            s.d(t, { p: () => r });
            s(571372);
            function r(e) {
                return new Promise((t, s) => {
                    const r = new Image();
                    (r.src = e),
                        (r.onload = () => {
                            const e = { width: r.width, height: r.height };
                            t(e);
                        }),
                        (r.onerror = () => {
                            s(new Error("Failed to load the image"));
                        });
                });
            }
        },
        940520: (e, t, s) => {
            s.d(t, { Z: () => r });
            s(136728);
            const r = (e) => {
                const t = [];
                let s = !1,
                    r = Date.now();
                const a = [];
                let n = 20;
                const o = () => {
                        const e = (() => {
                                const e = Date.now();
                                for (; a.length > 0 && a[0] < e - 50; ) a.shift();
                                return a.length / 0.05;
                            })(),
                            s = Math.max(e, t.length);
                        (n = s > 0 ? Math.max(0, 1e3 / s) : 0), (r = Date.now());
                    },
                    i = async () => {
                        for (s = !0; t.length > 0; ) {
                            const e = t.shift();
                            e && e();
                            const s = n;
                            await new Promise((e) => setTimeout(e, s));
                        }
                        s = !1;
                    };
                return {
                    resumingDispatch: (e) => {
                        const n = Date.now();
                        a.push(n), t.push(e), n - r >= 50 && o(), s || i();
                    },
                    abortQueue: () => {
                        (t.length = 0), (s = !1), (a.length = 0);
                    },
                };
            };
        },
        327597: (e, t, s) => {
            s.d(t, { u: () => g });
            var r = s(323265),
                a = s(389071),
                n = s(623494),
                o = s(806528),
                i = s(155918),
                c = s(958602),
                d = s(691018),
                l = s(155281),
                u = s(100326);
            const g =
                ({ analytics: e, conversationKey: t }) =>
                ({ analysisEntityId: s, attachments: g, mode: m, onStart: p, returnCitations: E, promptMetadata: h = { promptSource: "NATURAL", action: "INPUT" }, returnSearchResults: S = !0, features: R = { eagerTweets: !0, serverHistory: !0 }, text: _, isGrokDrawer: T = !1, trendPromptIdStr: f, imageGenerationCount: I, source: k, toolOverrides: A, isReasoning: w, isDeepsearch: b, personalityId: C }) =>
                async (f, O, { api: U, featureSwitches: M }) => {
                    const N = !r.ZP.isTwitterApp() && M.isTrue("responsive_web_grok_api_enable_grok_host"),
                        D = (0, a.bD)(t);
                    let P = D.selectConversationId(O());
                    const y = r.ZP.isAndroid(),
                        F = r.ZP.isIOS();
                    if ((null != D.selectCurrentResponseMessage(O()) && (await f((0, c.I)({ analytics: e, conversationKey: t }))), (P ??= await (0, u.X)({ analytics: e, api: U, dispatch: f, grokModule: D, analysisEntityId: s })), !P)) return void (0, n.Uk)(e, "conversation couln't be found or created");
                    let G;
                    const v = M.isTrue("responsive_web_grok_location_enabled");
                    if (v) {
                        const e = (0, o.fw)(O())?.position;
                        e && (G = { latitude: e.coords.latitude, longitude: e.coords.longitude, accuracy: e.coords.accuracy });
                    }
                    const L = m ?? D.selectMode(O()),
                        K = (0, a.F9)(O()),
                        H = D.selectConversationForAPI(O()),
                        x = (0, a.en)(O()),
                        Q = { ...A };
                    if (x && x.toolOverrides) {
                        const e = x.toolOverrides;
                        Object.keys(e).forEach((t) => {
                            Q[t] = e[t];
                        });
                    }
                    if (!(_ || (g && 0 !== g.length))) return Promise.resolve();
                    const j = { message: _ ?? "", sender: i.CI.HUMAN, promptSource: k ?? "", ...(s ? { postIds: [s] } : void 0) };
                    g && (j.fileAttachments = g), b && (j.isDeepsearch = b), w && (j.isReasoning = w);
                    const q = { responses: H.concat(j), systemPromptName: L, grokModelOptionId: K, conversationId: P, returnSearchResults: S, returnCitations: E, promptMetadata: h, imageGenerationCount: I, requestFeatures: R, ...(s ? { analysisEntityId: s } : void 0), geoLocation: G, enableSideBySide: !("GROK_ANALYZE" === h.promptSource || T || F || y || b || w), toolOverrides: Q, isDeepsearch: b, isReasoning: w, personalityId: C, deepsearchArgs: b ? x?.deepsearchArgs : void 0 };
                    f(D.setPromptSource(k || "")), f(D.setUsingExperiment(!1)), f(D.userSendMessage(j, h)), (0, n.pv)(e, { conversationLength: H.length, isFileAttached: Boolean(j.fileAttachments?.length), isDeepsearch: q.isDeepsearch || void 0, isReasoning: q.isReasoning || void 0 }), p?.();
                    const V = M.isTrue("responsive_web_grok_enable_add_response_keepalive") && (b || w),
                        Y = M.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                    return (Y > 0 ? l.u : d.D)({ grokModule: D, requestBody: q, dispatch: f, analytics: e, api: U, flags: { enableLocation: v, enableGrokApiHost: N, numRetries: Y, enableKeepalive: V } });
                };
        },
        63538: (e, t, s) => {
            s.d(t, { O: () => o });
            var r = s(6157),
                a = s(917799),
                n = s(189953);
            const o = (e, t) => {
                const s = e === n.IK.FUN ? "Fun" : "Normal";
                return (e, o, { api: i }) => a._O(e, { params: { grokMode: s, grokModelOptionId: t }, request: i.withEndpoint(r.Z).setPreferences })({ actionTypes: n.HF, context: "SET_PREFERENCES", meta: {} });
            };
        },
        458810: (e, t, s) => {
            s.d(t, { t: () => a });
            s(571372);
            var r = s(6157);
            const a =
                (e, t) =>
                (s, a, { api: n }) =>
                    n
                        .withEndpoint(r.Z)
                        .uploadFile({ file: e, abortController: t })
                        .then((e) => {
                            const t = e[0];
                            if (!t) throw new Error("Missing file in the response");
                            return t;
                        });
        },
        189953: (e, t, s) => {
            s.d(t, { $t: () => oe, A0: () => Ee, BA: () => se, BS: () => N, CH: () => P, CR: () => Z, Cr: () => I, DX: () => W, Dh: () => S, Dn: () => D, En: () => d, FF: () => x, FV: () => U, Gy: () => O, HF: () => p, IK: () => a, JO: () => V, Jt: () => re, KH: () => f, L0: () => z, Lc: () => o, OW: () => M, Oj: () => b, P9: () => q, Q_: () => n, Qg: () => v, Qh: () => X, Sv: () => i, TY: () => G, Tv: () => B, UN: () => w, VK: () => c, WK: () => te, Ws: () => l, Xg: () => $, Xi: () => L, Y8: () => u, Yb: () => _, Yf: () => r, Yx: () => g, ZN: () => Y, ar: () => Q, cA: () => pe, cw: () => ne, dK: () => m, dO: () => R, dZ: () => F, dw: () => ge, f1: () => ue, j$: () => he, k$: () => H, lQ: () => ee, lh: () => E, li: () => ce, lm: () => h, mq: () => Se, my: () => A, nK: () => C, o$: () => y, px: () => ie, qd: () => j, ru: () => me, ub: () => k, vc: () => K, vi: () => T, wG: () => ae, x5: () => J, yB: () => le, z2: () => de });
            const r = "grok",
                a = Object.freeze({ FUN: "fun", REGULAR: "" }),
                n = Object.freeze({ IDLE: "idle", TYPING: "typing", WAITING: "waiting", FAILED: "failed" }),
                o = Object.freeze({ REQUEST: "rweb/FETCH_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/FETCH_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/FETCH_GROK_CONVERSATION/FAILURE" }),
                i = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_HISTORY/FAILURE" }),
                c = Object.freeze({ REQUEST: "rweb/DELETE_GROK_MESSAGE/REQUEST", SUCCESS: "rweb/DELETE_GROK_MESSAGE/SUCCESS", FAILURE: "rweb/DELETE_GROK_MESSAGE/FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/REQUEST", SUCCESS: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/SUCCESS", FAILURE: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/FAILURE" }),
                l = Object.freeze({ REQUEST: "rweb/FETCH_GROK_MEDIA_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_MEDIA_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_MEDIA_HISTORY/FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/SEARCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/SEARCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/SEARCH_GROK_HISTORY/FAILURE" }),
                g = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HOME/REQUEST", SUCCESS: "rweb/FETCH_GROK_HOME/SUCCESS", FAILURE: "rweb/FETCH_GROK_HOME/FAILURE" }),
                m = Object.freeze({ REQUEST: "rweb/FETCH_GROK_SHARE/REQUEST", SUCCESS: "rweb/FETCH_GROK_SHARE/SUCCESS", FAILURE: "rweb/FETCH_GROK_SHARE/FAILURE" }),
                p = Object.freeze({ REQUEST: "rweb/SET_PREFERENCES/REQUEST", SUCCESS: "rweb/SET_PREFERENCES/SUCCESS", FAILURE: "rweb/SET_PREFERENCES/FAILURE" }),
                E = Object.freeze({ REQUEST: "rweb/PIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/PIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/PIN_GROK_CONVERSATION/FAILURE" }),
                h = Object.freeze({ REQUEST: "rweb/UNPIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/UNPIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/UNPIN_GROK_CONVERSATION/FAILURE" }),
                S = Object.freeze({ REQUEST: "rweb/CLEAR_CONVERSATIONS/REQUEST", SUCCESS: "rweb/CLEAR_CONVERSATIONS/SUCCESS", FAILURE: "rweb/CLEAR_CONVERSATIONS/FAILURE" }),
                R = Object.freeze({ REQUEST: "rweb/GROK_USER_EVENTS_LOG/REQUEST", SUCCESS: "rweb/GROK_USER_EVENTS_LOG/SUCCESS", FAILURE: "rweb/GROK_USER_EVENTS_LOG/FAILURE" }),
                _ = "rweb/grok/DELETE_CONVERSATION",
                T = "rweb/grok/RENAME_CONVERSATION",
                f = "rweb/grok/SET_ABORT_CONTROLLER",
                I = "rweb/grok/CLEAR_CONVERSATION",
                k = "rweb/grok/USER_SEND_MESSAGE",
                A = "rweb/grok/REGENERATE_RESPONSE",
                w = "rweb/grok/GROK_RESPONSE_TYPING",
                b = "rweb/grok/GROK_RESPONSE_POSTS",
                C = "rweb/grok/GROK_RESPONSE_MEDIA_POSTS",
                O = "rweb/grok/GROK_RESPONSE_COMPLETE",
                U = "rweb/grok/GROK_RESPONSE_ERROR",
                M = "rweb/grok/GROK_RESPONSE_METADATA",
                N = "rweb/grok/GROK_RESPONSE_DISCLAIMER",
                D = "rweb/grok/GROK_RESPONSE_FILE_ATTACHMENTS",
                P = "rweb/grok/GROK_RESPONSE_FEEDBACK_LABELS",
                y = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTIONS",
                F = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTED_MODE",
                G = "rweb/grok/GROK_RESPONSE_CHAT_RESPONSE_ANNOTATIONS",
                v = "rweb/grok/GROK_RESPONSE_UPSELL",
                L = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENT",
                K = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENTS",
                H = "rweb/grok/GROK_RESPONSE_DEEPSEARCH_UPDATE",
                x = "rweb/grok/GROK_RESPONSE_MEMORY_REFERENCES",
                Q = "rweb/grok/GROK_WEB_RESULTS",
                j = "rweb/grok/GROK_CITED_WEB_RESULTS",
                q = "rweb/grok/ABORT_MESSAGE",
                V = "rweb/grok/SET_EXPECTED_IMAGE_ASPECT_RATIO",
                Y = "rweb/grok/FETCH_CONVERSATION_ID_START",
                W = "rweb/grok/FETCH_CONVERSATION_ID_SUCCESS",
                B = "rweb/grok/FETCH_CONVERSATION_ID_FAILED",
                Z = "rweb/grok/EDITING_SET_ID",
                $ = "rweb/grok/EDITING_CLEAR",
                z = "rweb/grok/EDITING_COMMIT",
                J = "rweb/grok/RETRY_MESSAGE",
                X = "rweb/grok/SET_INPUT_PREFILL",
                ee = "rweb/grok/MODE_CHANGE",
                te = "rweb/grok/MODEL_CHANGE",
                se = "rweb/grok/SET_ACCESS_RESTRICTED_REASONS",
                re = "rweb/grok/SET_FREE_ACCESS",
                ae = "rweb/grok/SET_PREFERRED_PROMPTS",
                ne = "rweb/grok/SET_PROMPT_SOURCE",
                oe = "rweb/grok/NEW_CONVERSATION",
                ie = "rweb/grok/IMAGE_INTERMEDIATE_RESULT",
                ce = "rweb/grok/SELECT_COMPOSER_MODE",
                de = "rweb/grok/SET_GROK_INPUT_FOCUSED",
                le = "rweb/grok/QUERY_TYPING",
                ue = "rweb/grok/ADD_BANNER_MESSAGE",
                ge = "rweb/grok/DELETE_MEDIA_HISTORY_ITEM",
                me = "rweb/grok/UPDATE_PERFORMANCE_METRICS",
                pe = "r/web/grok/SET_USING_EXPERIMENT",
                Ee = "r/web/grok/SET_PREFERRED_RESPONSE",
                he = "rweb/grok/SET_GROK_INPUT_ADVANCED_SETTINGS",
                Se = "rweb/grok/SET_IS_PAST_THINKING_TRACE";
        },
        52570: (e, t, s) => {
            s.d(t, { NE: () => n, bY: () => l });
            var r = s(674132),
                a = s.n(r);
            const n = a().ead81122,
                o = a().f808a13a,
                i = a().e0481e5a,
                c = a().bc0a5b5a,
                d = a().ef674976,
                l = (e) => {
                    switch (e) {
                        case 429:
                            return o;
                        case 451:
                            return i;
                        case 401:
                        case 403:
                            return d;
                        case 503:
                            return c;
                        default:
                            return n;
                    }
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserAvatar-2291c9da.6d20918a.js.map

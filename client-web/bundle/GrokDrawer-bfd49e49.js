"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GrokDrawer-bfd49e49"],
    {
        550293: (e, t, s) => {
            s.d(t, { DO: () => l, VP: () => R, bi: () => p, gw: () => E, kX: () => d });
            var r = s(499627),
                o = s(511582);
            const a = "rweb.dmDrawerVisibility",
                n = { poppedOutConversationId: null, drawerVisibility: o.S.COLLAPSED },
                i = "dmDrawer";
            const c = (e) => e[i],
                E = (e) => c(e).poppedOutConversationId,
                d = (e) => c(e).drawerVisibility,
                u = "rweb/dmDrawer/POP_OUT_CONVERSATION",
                l =
                    (e) =>
                    (t, s, { userPersistence: r }) => (r.set(a, { visibility: o.S.EXPANDED }), t({ payload: { conversationId: e }, type: u })),
                S = "rweb/dmDrawer/SET_DRAWER_VISIBILITY",
                g = (e) => ({ payload: { visibility: e }, type: S }),
                p =
                    (e) =>
                    (t, s, { userPersistence: r }) => (r.set(a, { visibility: e }), e === o.S.CLOSED && t({ type: u }), t(g(e))),
                R =
                    () =>
                    (e, t, { userPersistence: s }) =>
                        s.get(a).then((t) => {
                            t && e(g(t.visibility));
                        });
            r.Z.register({
                [i]: function (e = n, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case u:
                            return t.payload ? { ...e, poppedOutConversationId: t.payload.conversationId, drawerVisibility: o.S.EXPANDED } : e;
                        case S:
                            return t.payload ? { ...e, drawerVisibility: t.payload.visibility } : e;
                        default:
                            return e;
                    }
                },
            });
        },
        511582: (e, t, s) => {
            s.d(t, { S: () => r });
            const r = Object.freeze({ CLOSED: "closed", COLLAPSED: "collapsed", EXPANDED: "expanded" });
        },
        806528: (e, t, s) => {
            s.d(t, { Bz: () => E, ZW: () => g, ey: () => u, fw: () => i, iG: () => S, wM: () => c });
            var r = s(499627),
                o = s(341276);
            const a = "geoLocation",
                n = Object.freeze({ permissionStatus: void 0, position: void 0 });
            const i = (e) => e[a],
                c = (e) => e[a].permissionStatus,
                E = (e) => e[a].position,
                d = "rweb/geoLocation/SET_PERMISSION_STATUS",
                u = (e) => ({ payload: e, type: d }),
                l = "rweb/geoLocation/SET_POSITION",
                S = () => (e, t) =>
                    p()
                        .then((t) => e({ payload: t, type: l }))
                        .catch((t) => (e(u(o.S.denied)), Promise.reject(t))),
                g = () => (e, t) => (E(t()) ? Promise.resolve() : e(S())),
                p = () =>
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
                        case d:
                            return { ...e, permissionStatus: t.payload };
                        case l:
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
                        E = c.selectStatus(s());
                    if (!(E === a.Q_.TYPING || E === a.Q_.WAITING)) return Promise.resolve();
                    const d = c.selectConversationId(s()) || void 0,
                        u = c.selectMetadataForMessageId(s(), "currentResponse"),
                        l = u?.agentChatItemId || void 0;
                    await e(c.abortMessage());
                    const S = { responses: [], systemPromptName: "", grokModelOptionId: "", conversationId: d, responseToChatItemId: l, isCancel: !0 },
                        g = !r.ZP.isTwitterApp() && i.isTrue("responsive_web_grok_api_enable_grok_host");
                    return n.fetchClient.dispatch("/2/grok/add_response.json", { method: "POST", credentials: "include", body: JSON.stringify(S) }, g ? "https://grok.x.com" : void 0).then(async (e) => {});
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
                c = s(919022),
                E = s(52570),
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
                l = async ({ analytics: e, api: t, dispatch: s, eventTag: l, featureSwitches: p, flags: R, grokModule: m, method: _ = "POST", requestBody: T, requestParams: I }) => {
                    const h = p.isTrue("responsive_web_grok_download_favicons"),
                        O = l ? ` (${l})` : "",
                        A = (function () {
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
                        w = Date.now();
                    let b = !1,
                        C = new AbortController();
                    s(m.setAbortController(C));
                    let f = !1;
                    const N = u(s),
                        k = [""],
                        U = [""];
                    let y = !0,
                        P = !1;
                    const M = new d.EG();
                    M.setRequestedCount(T.imageGenerationCount || 0),
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
                        })({ responses: T.responses, grokModule: m, dispatch: s });
                    const D = new o.fQ({ deepsearchArgs: T.deepsearchArgs, isDeepsearch: T.isDeepsearch });
                    let L = [],
                        G = [],
                        v = "",
                        F = !1,
                        K = 0,
                        H = !1,
                        Q = !1;
                    const V = async ({ method: r, requestParams: a }) => {
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
                                .dispatch(u, { method: r, credentials: "include", params: "GET" === r ? a : null, body: "POST" === r ? JSON.stringify(T) : null, signal: C?.signal, keepalive: R?.enableKeepalive }, R?.enableGrokApiHost ? "https://grok.x.com" : void 0)
                                .then(async (t) => {
                                    const a = t.headers.get("x-transaction-id");
                                    if ((a && s(m.updatePerformanceMetrics({ traceId: a })), !t.ok)) {
                                        A.record(`http-${t.status}`);
                                        const r = (0, E.bY)(t.status);
                                        return s(m.grokResponseError(r)), void (0, n.Uk)(e, `add-response failed with status ${t.status}${O}`);
                                    }
                                    const u = t.body?.getReader();
                                    if (!u) return s(m.grokResponseError(E.NE)), void (0, n.Uk)(e, `reader was not found${O}`);
                                    const l = new TextDecoder();
                                    let S = "";
                                    const p = setTimeout(() => {
                                            (0, n.eS)(e, !0);
                                        }, 5e3),
                                        _ = await u.read();
                                    return (
                                        clearTimeout(p),
                                        (async function t({ done: a, value: p }) {
                                            if (a) {
                                                H = !1;
                                                if ((!k.length || k.every((e) => "" === e)) && !F) {
                                                    const t = `add-response failed to reach the network${O}`;
                                                    return D.isDeepsearch && g({ messageStepAccumulator: D, analytics: e, dispatch: s, errorMessage: t, grokModule: m, resumabilityQueue: N, method: r }), s(m.grokResponseError(E.NE)), (0, n.Uk)(e, t), void A.record("network-error");
                                                }
                                                A.record("time-to-last-chunk"),
                                                    (function ({ analytics: e, dispatch: t, grokModule: s, isUnifiedReasoningLayout: r, messageStepAccumulator: o, method: a, resumabilityQueue: i }) {
                                                        o.isDeepsearch &&
                                                            (function ({ analytics: e, dispatch: t, grokModule: s, isUnifiedReasoningLayout: r, messageStepAccumulator: o }) {
                                                                if ("PENDING" === o.state) return;
                                                                o.complete(!r), t(s.grokResponseMessageStepAccumulatorUpdate(o)), (0, n.y6)(e, o.getStreamDuration());
                                                            })({ messageStepAccumulator: o, analytics: e, dispatch: t, grokModule: s, isUnifiedReasoningLayout: r });
                                                        "GET" === a ? (i.resumingDispatch(() => t(s.updatePerformanceMetrics({ endStreamTime: Date.now() }))), i.resumingDispatch(() => t(s.grokResponseComplete()))) : "POST" === a && (t(s.updatePerformanceMetrics({ endStreamTime: Date.now() })), t(s.grokResponseComplete()));
                                                    })({ messageStepAccumulator: D, analytics: e, dispatch: s, grokModule: m, method: r, resumabilityQueue: N, isUnifiedReasoningLayout: Q });
                                            }
                                            if (p) {
                                                A.recordOnce("time-to-first-chunk"), b || ((b = !0), s(m.updatePerformanceMetrics({ timeToFirstChunkMs: Date.now() - w })));
                                                const a = l.decode(p);
                                                if (((S += a), S.includes("\n"))) {
                                                    const t = S.split("\n");
                                                    S = t.pop();
                                                    for (const a of t)
                                                        if (f || "GET" !== r) {
                                                            const t = JSON.parse(a);
                                                            if ((t.result?.messageTag && (t.result.messageTag = t.result.messageTag.toLowerCase()), t.result?.uiLayout?.reasoningUILayout)) {
                                                                const e = t.result.uiLayout.reasoningUILayout;
                                                                s(m.setReasoningLayout(e)), (Q = "UNIFIED" === e);
                                                            }
                                                            const n = t.result?.sideBySideIndex ?? 0;
                                                            if ((null == t.result?.sideBySideIndex || P || (k.push(""), U.push(""), s(m.setUsingExperiment(!0)), (P = !0)), t.result?.query && s(m.queryTyping(t.result.query)), t.result?.bannerMessage && s(m.addBannerMessage(t.result.bannerMessage)), t.result?.xPostIds && (G.push(...(t.result.xPostIds || [])), (G = G.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(i.Z.fetchMultiple(G)), s(m.grokResponsePosts(G, n))), t.result?.xMediaPostIds)) {
                                                                const e = t.result.xMediaPostIds;
                                                                s(i.Z.fetchMultiple(e)), s(m.grokResponseMediaPosts(e));
                                                            }
                                                            if (t.result?.postIds) s(m.grokResponsePosts(t.result.postIds, n));
                                                            else if (t.result?.message && (!t.result?.messageTag || t.result?.messageTag === o.iS.FINAL)) {
                                                                const e = !k[n];
                                                                t.result?.isThinking ? (U[n] += t.result.message) : (k[n] += t.result.message), e && s(m.updatePerformanceMetrics({ timeToFirstTextMs: Date.now() - w }));
                                                                const a = t.result?.isThinking ? U[n] : k[n],
                                                                    i = t.result?.isThinking ? "thinkingTrace" : "message";
                                                                "thinkingTrace" === i && y && (y = !1), "message" === i && U[0].length > 0 && !y && ((y = !0), "GET" === r ? N.resumingDispatch(() => s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))) : s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))), "GET" === r ? N.resumingDispatch(() => s(m.grokResponseTyping(a, i, n))) : s(m.grokResponseTyping(a, i, n)), (t.result?.messageTag === o.iS.FINAL || (t.result?.message && "STARTED" === D.state)) && (D.updateFinalAnswer({ messageTag: o.iS.FINAL, message: t.result?.message || "" }), D.complete(!Q), "GET" === r ? (N.resumingDispatch(() => s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }))), N.resumingDispatch(() => s(m.grokResponseMessageStepAccumulatorUpdate(D)))) : (s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() })), s(m.grokResponseMessageStepAccumulatorUpdate(D))));
                                                            }
                                                            if (("error" === t.result?.responseType && s(m.grokResponseFileAttachments([])), t.result?.imageAttachmentCount)) {
                                                                let e = t.result.imageAttachmentCount;
                                                                T.imageGenerationCount && (e = Math.min(e, T.imageGenerationCount)), M.setCount(e);
                                                            }
                                                            if ((t.result?.imageWidth && t.result?.imageHeight && s(m.setExpectedImageAspectRatio(t.result?.imageWidth / t.result?.imageHeight)), "image" === t.result?.responseType || t.result?.imageAttachment?.imageUrl)) {
                                                                F = !0;
                                                                const e = t.result.imageAttachment;
                                                                M.addAttachment({ fileName: e?.fileName ?? "image", mimeType: e?.mimeType ?? "image/jpeg", mediaId: e?.mediaIdStr, url: e?.imageUrl }), s(m.grokResponseFileAttachments(M.generateAttachmentList()));
                                                            }
                                                            t.result?.feedbackLabels && s(m.grokResponseFeedbackLabels(t.result.feedbackLabels)),
                                                                t.result?.disclaimer && s(m.grokResponseDisclaimer(t.result.disclaimer)),
                                                                t.result?.followUpSuggestions && s(m.grokResponseFollowUpSuggestions(t.result.followUpSuggestions)),
                                                                t.result?.followUpSuggestedMode && s(m.grokResponseFollowUpSuggestedMode(t.result?.followUpSuggestedMode)),
                                                                t.result?.chatResponseAnnotations && s(m.grokResponseChatResponseAnnotations(t.result.chatResponseAnnotations)),
                                                                t.result?.upsell && s(m.grokResponseUpsell(t.result.upsell)),
                                                                (t.agentChatItemId || t.userChatItemId) && (t.agentChatItemId && (v = t.agentChatItemId), s(m.updatePerformanceMetrics({ startStreamTime: Date.now() })), s(m.grokResponseMetadata({ agentChatItemId: t.agentChatItemId, userChatItemId: t.userChatItemId }))),
                                                                t.result?.webResults &&
                                                                    (L.push(...(t.result?.webResults || [])),
                                                                    (L = L.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url))),
                                                                    h &&
                                                                        L.forEach((e) => {
                                                                            e.favicon || e.favicon_base64 || (e.favicon = (0, d.TK)(e.url));
                                                                        }),
                                                                    s(m.grokWebResults(L, n))),
                                                                t.result?.citedWebResults && s(m.grokCitedWebResults(t.result.citedWebResults, n));
                                                            const E = t.result?.event;
                                                            if ((E && (E.imageAttachmentUpdate && s(m.imageIntermediateResult({ ...E.imageAttachmentUpdate, progress: E.imageAttachmentUpdate.progress / 100, imageUrl: E.imageAttachmentUpdate.imageUrl })), E.imageAttachmentRemoval && (M.setAttachmentAsModerated(E.imageAttachmentRemoval.imageIdStr), s(m.grokResponseFileAttachments(M.generateAttachmentList())))), R?.enableLocation && t.result?.doLocationRequest && !T.geoLocation && s(m.grokResponseCardAttachment({ cardType: "geo_location_request" })), t.result?.cardAttachment)) {
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
                                                                e !== o.iS.FINAL && e !== o.iS.FINAL_LONG && (D.updateStepsFromRawMessage({ message: t.result?.message || "", messageTag: e, messageStepId: t.result?.messageStepId || -1, toolUsageCardId: t.result?.toolUsageCardId || "", webResults: (t.result?.webResults || []).map((e) => (h && (e.favicon || e.favicon_base64 || (e.favicon = (0, d.TK)(e.url))), e)), xPostIds: t.result?.xPostIds || [] }), "GET" === r ? N.resumingDispatch(() => s(m.grokResponseMessageStepAccumulatorUpdate(D))) : s(m.grokResponseMessageStepAccumulatorUpdate(D)));
                                                            }
                                                        } else {
                                                            const e = JSON.parse(a);
                                                            (f = !0), e.message && ((k[0] += e.message), s(m.grokResponseTyping(e.message ?? "", "message"))), e.result?.uiLayout && e.result?.uiLayout.reasoningUILayout && ((Q = "UNIFIED" === e.result.uiLayout.reasoningUILayout), s(m.setReasoningLayout(e.result.uiLayout.reasoningUILayout)));
                                                            const t = new o.fQ();
                                                            if (e.messageStepsHeaders && e?.messageStepsHeaders.length > 0) {
                                                                t.defaultFinalAnswer = e.message || "";
                                                                const r = [];
                                                                for (const t of e.messageStepsHeaders) {
                                                                    const e = [];
                                                                    for (const r of t.steps) {
                                                                        const t = (r.xPostIds || []).map((e) => e),
                                                                            o = (r.webResults || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title }));
                                                                        t.length && (G.push(...t), (G = G.filter((e, t, s) => t === s.findIndex((t) => t === e))), s(i.Z.fetchMultiple(t))), o.length && (L.push(...o), (L = L.filter((e, t, s) => t === s.findIndex((t) => t.url === e.url)))), e.push({ header: r.header || "", assistant: r.assistant || "", decision: r.decision || "", finalMessage: r.finalMessage || "", functionCall: r.functionCall || "", rawFunctionResult: r.rawFunctionResult || "", summary: r.summary || "", webResults: o, xPostIds: t });
                                                                    }
                                                                    r.push({ header: t.header || "", steps: e });
                                                                }
                                                                t.initiateFromHistoryResponses(r, !0), s(m.grokResponseMessageStepAccumulatorUpdate(t));
                                                            }
                                                            e.thinkingTrace && ((U[0] += e.thinkingTrace), s(m.grokResponseTyping(e.thinkingTrace ?? "", "thinkingTrace")));
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
                                        })(_)
                                    );
                                })
                                .catch(async (t) => {
                                    H = !1;
                                    if (t instanceof window.DOMException && "AbortError" === t.name) "STARTED" === D.state && D.isDeepsearch && (0, n.YI)(e, { durationMs: D.getStreamDuration(), messageTagCounts: D.debugMessageTagCount }), N.abortQueue(), A.record("abort");
                                    else {
                                        if (x()) return void (await Y(t.message));
                                        D.isDeepsearch && g({ messageStepAccumulator: D, analytics: e, dispatch: s, grokModule: m, resumabilityQueue: N, method: r, errorMessage: t ? t.message : void 0 }), s(m.grokResponseError(E.NE)), (0, n.kl)(e, t), A.record("error");
                                    }
                                    s(m.updatePerformanceMetrics({ endStreamTime: Date.now() })), U[0].length > 0 && s(m.updatePerformanceMetrics({ thinkingTraceEnd: Date.now() }));
                                });
                        },
                        x = () => {
                            const e = S(),
                                t = Boolean(T.isDeepsearch) || Boolean(T.isReasoning);
                            return !H && K < (R?.numRetries || 0) && !!v && !!e && t && "POST" === _;
                        },
                        Y = async (t) => {
                            C.abort(), K++, (H = !0), (0, n.mm)(e, K, t), (C = new AbortController()), await s(m.setAbortController(C)), V({ method: "GET", requestParams: { ...I, conversationId: S(), responseToChatItemId: v, streamInitialChunkWhole: !1 } });
                        };
                    return V({ method: _, requestParams: I });
                };
            function S() {
                return new URLSearchParams(window.location.search).get("conversation") || "";
            }
            function g({ analytics: e, dispatch: t, errorMessage: s, grokModule: r, messageStepAccumulator: o, method: a, resumabilityQueue: i }) {
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
            const i = ({ analysisEntityId: e, analytics: t, api: s, dispatch: r, fromShareId: i, fromUniversalSearch: c, grokModule: E }) => (
                r(E.fetchConversationIdStart()),
                s.apiClient
                    .graphQL(o(), { fromShare: i, fromUniversalSearch: c })
                    .then((s) => {
                        const o = s.create_grok_conversation?.conversation_id,
                            i = s.create_grok_conversation?.error_code;
                        if (o) return r(E.fetchConversationIdSuccess(o, e)), o;
                        if (i) throw (r(E.fetchConversationIdFailed(n.NE)), (0, a.Uk)(t, "conversation_id failed"), new Error(i));
                    })
                    .catch((e) => {
                        const t = e.errors?.[0]?.code,
                            s = (0, n.bY)(t);
                        r(E.fetchConversationIdFailed(s));
                    })
            );
        },
        327597: (e, t, s) => {
            s.d(t, { u: () => u });
            var r = s(323265),
                o = s(389071),
                a = s(623494),
                n = s(806528),
                i = s(155918),
                c = s(958602),
                E = s(250781),
                d = s(100326);
            const u =
                ({ analytics: e, conversationKey: t }) =>
                ({ analysisEntityId: s, attachments: u, mode: l, onStart: S, returnCitations: g, promptMetadata: p = { promptSource: "NATURAL", action: "INPUT" }, returnSearchResults: R = !0, features: m = { eagerTweets: !0, serverHistory: !0 }, text: _, isGrokDrawer: T = !1, trendPromptIdStr: I, imageGenerationCount: h, source: O, toolOverrides: A, isReasoning: w, isDeepsearch: b, isImageGen: C, deepsearchArgsOverride: f, personalityId: N }) =>
                async (I, k, { api: U, featureSwitches: y }) => {
                    const P = !r.ZP.isTwitterApp() && y.isTrue("responsive_web_grok_api_enable_grok_host"),
                        M = (0, o.bD)(t);
                    let D = M.selectConversationId(k());
                    const L = r.ZP.isAndroid(),
                        G = r.ZP.isIOS();
                    if ((null != M.selectCurrentResponseMessage(k()) && (await I((0, c.I)({ analytics: e, conversationKey: t }))), (D ??= await (0, d.X)({ analytics: e, api: U, dispatch: I, grokModule: M, analysisEntityId: s })), !D)) return void (0, a.Uk)(e, "conversation couln't be found or created");
                    let v;
                    const F = y.isTrue("responsive_web_grok_location_enabled");
                    if (F) {
                        const e = (0, n.fw)(k())?.position;
                        e && (v = { latitude: e.coords.latitude, longitude: e.coords.longitude, accuracy: e.coords.accuracy });
                    }
                    const K = l ?? M.selectMode(k()),
                        H = (0, o.F9)(k()),
                        Q = (0, o.vf)(k()),
                        V = Q.find((e) => e.isAnalyzeEnabled)?.id,
                        x = "GROK_ANALYZE" === p.promptSource ? V : null,
                        Y = M.selectConversationForAPI(k()),
                        j = (0, o.en)(k()),
                        B = { ...A };
                    if ((C && (B.imageGen = !0), j && j.toolOverrides)) {
                        const e = j.toolOverrides;
                        Object.keys(e).forEach((t) => {
                            B[t] = e[t];
                        });
                    }
                    if (!(_ || (u && 0 !== u.length))) return Promise.resolve();
                    const z = { message: _ ?? "", sender: i.CI.HUMAN, promptSource: O ?? "", ...(s ? { postIds: [s] } : void 0) };
                    u && (z.fileAttachments = u), b && (z.isDeepsearch = b), w && (z.isReasoning = w);
                    const W = { responses: Y.concat(z), systemPromptName: K, grokModelOptionId: x ?? H, conversationId: D, returnSearchResults: R, returnCitations: g, promptMetadata: p, imageGenerationCount: h, requestFeatures: m, ...(s ? { analysisEntityId: s } : void 0), geoLocation: v, enableSideBySide: !("GROK_ANALYZE" === p.promptSource || T || G || L || b || w), toolOverrides: B, isDeepsearch: b, isReasoning: w, personalityId: N, deepsearchArgs: f ?? (b ? j?.deepsearchArgs : void 0) };
                    I(M.setPromptSource(O || "")), I(M.setUsingExperiment(!1)), I(M.userSendMessage(z, p)), (0, a.pv)(e, { conversationLength: Y.length, isFileAttached: Boolean(z.fileAttachments?.length), isDeepsearch: W.isDeepsearch || void 0, isReasoning: W.isReasoning || void 0 }), S?.();
                    const Z = y.isTrue("responsive_web_grok_enable_add_response_keepalive") && (b || w),
                        q = y.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                    return (0, E.D)({ grokModule: M, requestBody: W, dispatch: I, analytics: e, api: U, flags: { enableLocation: F, enableGrokApiHost: P, numRetries: q, enableKeepalive: Z }, featureSwitches: y });
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
            s.d(t, { $t: () => ne, A0: () => pe, BA: () => se, BS: () => y, CH: () => M, CR: () => Z, Cr: () => O, DX: () => z, Dh: () => m, Dn: () => P, En: () => E, FF: () => Q, FV: () => k, Gy: () => N, HF: () => g, IK: () => o, JO: () => j, Jt: () => re, KH: () => h, L0: () => $, Lc: () => n, OW: () => U, Oj: () => C, P9: () => Y, Q_: () => a, Qg: () => v, Qh: () => J, Sv: () => i, TY: () => G, Tv: () => W, UN: () => b, VK: () => c, WK: () => te, Ws: () => d, Xg: () => q, Xi: () => F, Y8: () => u, Yb: () => T, Yf: () => r, Yx: () => l, ZN: () => B, _i: () => ce, ar: () => V, cA: () => ge, cw: () => ae, dK: () => S, dO: () => _, dZ: () => L, dw: () => le, f1: () => ue, fH: () => _e, ip: () => H, j$: () => Re, lQ: () => ee, lh: () => p, lm: () => R, mq: () => me, my: () => w, nK: () => f, o$: () => D, px: () => ie, qd: () => x, ru: () => Se, ub: () => A, vc: () => K, vi: () => I, wG: () => oe, x5: () => X, yB: () => de, z2: () => Ee });
            const r = "grok",
                o = Object.freeze({ FUN: "fun", REGULAR: "" }),
                a = Object.freeze({ IDLE: "idle", TYPING: "typing", WAITING: "waiting", FAILED: "failed" }),
                n = Object.freeze({ REQUEST: "rweb/FETCH_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/FETCH_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/FETCH_GROK_CONVERSATION/FAILURE" }),
                i = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_HISTORY/FAILURE" }),
                c = Object.freeze({ REQUEST: "rweb/DELETE_GROK_MESSAGE/REQUEST", SUCCESS: "rweb/DELETE_GROK_MESSAGE/SUCCESS", FAILURE: "rweb/DELETE_GROK_MESSAGE/FAILURE" }),
                E = Object.freeze({ REQUEST: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/REQUEST", SUCCESS: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/SUCCESS", FAILURE: "rweb/FETCH_GROK_PINNED_CONVERSATIONS/FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/FETCH_GROK_MEDIA_HISTORY/REQUEST", SUCCESS: "rweb/FETCH_GROK_MEDIA_HISTORY/SUCCESS", FAILURE: "rweb/FETCH_GROK_MEDIA_HISTORY/FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/SEARCH_GROK_HISTORY/REQUEST", SUCCESS: "rweb/SEARCH_GROK_HISTORY/SUCCESS", FAILURE: "rweb/SEARCH_GROK_HISTORY/FAILURE" }),
                l = Object.freeze({ REQUEST: "rweb/FETCH_GROK_HOME/REQUEST", SUCCESS: "rweb/FETCH_GROK_HOME/SUCCESS", FAILURE: "rweb/FETCH_GROK_HOME/FAILURE" }),
                S = Object.freeze({ REQUEST: "rweb/FETCH_GROK_SHARE/REQUEST", SUCCESS: "rweb/FETCH_GROK_SHARE/SUCCESS", FAILURE: "rweb/FETCH_GROK_SHARE/FAILURE" }),
                g = Object.freeze({ REQUEST: "rweb/SET_PREFERENCES/REQUEST", SUCCESS: "rweb/SET_PREFERENCES/SUCCESS", FAILURE: "rweb/SET_PREFERENCES/FAILURE" }),
                p = Object.freeze({ REQUEST: "rweb/PIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/PIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/PIN_GROK_CONVERSATION/FAILURE" }),
                R = Object.freeze({ REQUEST: "rweb/UNPIN_GROK_CONVERSATION/REQUEST", SUCCESS: "rweb/UNPIN_GROK_CONVERSATION/SUCCESS", FAILURE: "rweb/UNPIN_GROK_CONVERSATION/FAILURE" }),
                m = Object.freeze({ REQUEST: "rweb/CLEAR_CONVERSATIONS/REQUEST", SUCCESS: "rweb/CLEAR_CONVERSATIONS/SUCCESS", FAILURE: "rweb/CLEAR_CONVERSATIONS/FAILURE" }),
                _ = Object.freeze({ REQUEST: "rweb/GROK_USER_EVENTS_LOG/REQUEST", SUCCESS: "rweb/GROK_USER_EVENTS_LOG/SUCCESS", FAILURE: "rweb/GROK_USER_EVENTS_LOG/FAILURE" }),
                T = "rweb/grok/DELETE_CONVERSATION",
                I = "rweb/grok/RENAME_CONVERSATION",
                h = "rweb/grok/SET_ABORT_CONTROLLER",
                O = "rweb/grok/CLEAR_CONVERSATION",
                A = "rweb/grok/USER_SEND_MESSAGE",
                w = "rweb/grok/REGENERATE_RESPONSE",
                b = "rweb/grok/GROK_RESPONSE_TYPING",
                C = "rweb/grok/GROK_RESPONSE_POSTS",
                f = "rweb/grok/GROK_RESPONSE_MEDIA_POSTS",
                N = "rweb/grok/GROK_RESPONSE_COMPLETE",
                k = "rweb/grok/GROK_RESPONSE_ERROR",
                U = "rweb/grok/GROK_RESPONSE_METADATA",
                y = "rweb/grok/GROK_RESPONSE_DISCLAIMER",
                P = "rweb/grok/GROK_RESPONSE_FILE_ATTACHMENTS",
                M = "rweb/grok/GROK_RESPONSE_FEEDBACK_LABELS",
                D = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTIONS",
                L = "rweb/grok/GROK_RESPONSE_FOLLOWUP_SUGGESTED_MODE",
                G = "rweb/grok/GROK_RESPONSE_CHAT_RESPONSE_ANNOTATIONS",
                v = "rweb/grok/GROK_RESPONSE_UPSELL",
                F = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENT",
                K = "rweb/grok/GROK_RESPONSE_CARD_ATTACHMENTS",
                H = "rweb/grok/GROK_RESPONSE_MESSAGE_STEP_ACCUMULATOR_UPDATE",
                Q = "rweb/grok/GROK_RESPONSE_MEMORY_REFERENCES",
                V = "rweb/grok/GROK_WEB_RESULTS",
                x = "rweb/grok/GROK_CITED_WEB_RESULTS",
                Y = "rweb/grok/ABORT_MESSAGE",
                j = "rweb/grok/SET_EXPECTED_IMAGE_ASPECT_RATIO",
                B = "rweb/grok/FETCH_CONVERSATION_ID_START",
                z = "rweb/grok/FETCH_CONVERSATION_ID_SUCCESS",
                W = "rweb/grok/FETCH_CONVERSATION_ID_FAILED",
                Z = "rweb/grok/EDITING_SET_ID",
                q = "rweb/grok/EDITING_CLEAR",
                $ = "rweb/grok/EDITING_COMMIT",
                X = "rweb/grok/RETRY_MESSAGE",
                J = "rweb/grok/SET_INPUT_PREFILL",
                ee = "rweb/grok/MODE_CHANGE",
                te = "rweb/grok/MODEL_CHANGE",
                se = "rweb/grok/SET_ACCESS_RESTRICTED_REASONS",
                re = "rweb/grok/SET_FREE_ACCESS",
                oe = "rweb/grok/SET_PREFERRED_PROMPTS",
                ae = "rweb/grok/SET_PROMPT_SOURCE",
                ne = "rweb/grok/NEW_CONVERSATION",
                ie = "rweb/grok/IMAGE_INTERMEDIATE_RESULT",
                ce = "rweb/grok/SET_GROK_INPUT_FILTER_KEY",
                Ee = "rweb/grok/SET_GROK_INPUT_FOCUSED",
                de = "rweb/grok/QUERY_TYPING",
                ue = "rweb/grok/ADD_BANNER_MESSAGE",
                le = "rweb/grok/DELETE_MEDIA_HISTORY_ITEM",
                Se = "rweb/grok/UPDATE_PERFORMANCE_METRICS",
                ge = "r/web/grok/SET_USING_EXPERIMENT",
                pe = "r/web/grok/SET_PREFERRED_RESPONSE",
                Re = "rweb/grok/SET_GROK_INPUT_ADVANCED_SETTINGS",
                me = "rweb/grok/SET_IS_PAST_THINKING_TRACE",
                _e = "rweb/grok/SET_REASONING_LAYOUT";
        },
        52570: (e, t, s) => {
            s.d(t, { NE: () => a, bY: () => d });
            var r = s(111677),
                o = s.n(r);
            const a = o().ead81122,
                n = o().f808a13a,
                i = o().e0481e5a,
                c = o().bc0a5b5a,
                E = o().ef674976,
                d = (e) => {
                    switch (e) {
                        case 429:
                            return n;
                        case 451:
                            return i;
                        case 401:
                        case 403:
                            return E;
                        case 503:
                            return c;
                        default:
                            return a;
                    }
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GrokDrawer-bfd49e49.35c29c5a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserAvatar-85c3578f"],
    {
        965728: (e, t, s) => {
            s.d(t, { C_: () => b, I5: () => g, K2: () => S, L$: () => u, Rb: () => p, nk: () => l, sI: () => w, xr: () => T });
            var a = s(202784),
                r = s(483677),
                o = s(782578),
                i = s(401339),
                n = s(521514);
            const d = (e, t) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${t})`,
                u = (e) => {
                    const t = e && r.Z.getForGallery(e);
                    return t ? { rgb: T(t), rgba: d(t, 0.9) } : h;
                },
                m = n.Z.columnWidths.primary,
                c = (e, t) => Math.min(t, e),
                h = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                l = { transitionProperty: "background-color", transitionDuration: ".5s" },
                g = (e, t) => {
                    const { containerHeight: s, containerWidth: a, mediaHeight: r, mediaWidth: i } = e,
                        n = i && r ? i / r : 1,
                        d = n > 1,
                        u = t ? 400 : m,
                        h = d && (!i || i <= u) ? c(a, u) : a,
                        l = d || (r && !(r <= u)) ? s : c(s, u);
                    return o.Z.getContainDimensions({ width: h, height: l }, n);
                },
                p = (e) => {
                    const t = e && e.ext_media_color && e.ext_media_color.palette;
                    return u(t);
                },
                S = (e) => {
                    const t = e && e.profile_image_extensions_media_color && e.profile_image_extensions_media_color.palette;
                    return u(t);
                },
                b = (e) => {
                    const t = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
                    return u(t);
                },
                T = (e) => `rgb(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue})`,
                I = (e, t) => {
                    switch (t.type) {
                        case "zoom":
                            return { ...e, isZoomed: t.payload.isZoomed, showControls: !t.payload.isZoomed };
                        case "tap":
                            return { ...e, showControls: !e.showControls };
                        default:
                            return e;
                    }
                },
                w = () => {
                    const [e, t] = a.useReducer(I, { isZoomed: !1, showControls: !0 });
                    return {
                        hideButtons: e.isZoomed || !e.showControls,
                        handleMediaDetailZoomed: function (e) {
                            t({ type: "zoom", payload: { isZoomed: e } });
                        },
                        handleMediaItemTapped: function () {
                            i.Z.isTouchSupported() && t({ type: "tap" });
                        },
                    };
                };
        },
        397159: (e, t, s) => {
            s.d(t, { B2: () => g, Fi: () => h, fQ: () => p, iS: () => c, uk: () => l });
            s(136728), s(574858), s(543673), s(240753), s(128399);
            var a = s(468811),
                r = s.n(a),
                o = s(111677),
                i = s.n(o),
                n = s(123702),
                d = s(187268);
            const u = i().c3f04d9c,
                m = i().cbdddb0a,
                c = { HEADER: "header", ASSISTANT: "assistant", DECISION: "decision", RAW_FUNCTION_RESULT: "raw_function_result", FUNCTION: "function", SUMMARY: "summary", FINAL: "final", SOFT_STOP: "softstop", FINAL_LONG: "final_long" },
                h = { IN_PROGRESS: "IN_PROGRESS", COMPLETED: "COMPLETED", FAILED: "FAILED" },
                l = { GenericSearchQueryFormatter: i().ie2bbeed, GenericSearchQueryMarkdownFormatter: i().b0d1e205, WebSearchQueryFormatter: i().ie2bbeed, XSearchQueryFormatter: i().bf970edd, XUserSearchFormatter: i().ad342369, BrowsePageFormatter: i().g008d475, GenericURLQueryFormatter: i().c91e3971, GenericURLQueryMarkdownFormatter: i().acb9b845, XUsernameSearchFormatter: i().j9006405, XUsernameQuerySearchFormatter: i().a2dd07e5, XUsernameQuerySearchMarkdownFormatter: i().e99fb7a3, CodeExecutionFormatter: i().a02d1657 },
                g = { WebSearchQueryFormatter: i().aa9d42c0, XSearchQueryFormatter: i().dce1817a, XUserSearchFormatter: i().f7151564, BrowsePageFormatter: i().c43ef93e, XUsernameSearchFormatter: i().dce1817a, XUsernameQuerySearchFormatter: i().dce1817a, XUsernameQuerySearchMarkdownFormatter: i().dce1817a, CodeExecutionFormatter: i().jb097f6e };
            class p {
                constructor(e) {
                    (this.initiateFromHistoryResponses = (e, t = !1) => {
                        this.lastStreamedDataTimestamp = Date.now();
                        for (const t of e) {
                            const e = { id: r().v4(), state: h.COMPLETED, header: t.header || u, subSteps: [] };
                            for (let s = 0; s < t.steps.length; s++) {
                                const a = t.steps[s];
                                this.addWebResults(a.webResults || []), this.addXPostIds(a.xPostIds || []);
                                let r = 0;
                                if ((a.assistant && ((this.accumulatedTrace += a.assistant), (this.traceEnabled = !0)), a.summary)) {
                                    const t = (0, d.Ez)(a.summary);
                                    (this.accumulatedSummary += t), e.subSteps.push({ messageStepId: s + r, messageTag: c.SUMMARY, summary: t, webResults: a.webResults, xPostIds: a.xPostIds, toolUsageCardResults: a.toolUsageCardResults }), r++;
                                }
                                if (a.decision) {
                                    const t = this.parseMessageJSON(a.decision),
                                        { markdown: o, text: i } = this.getContentForDecisionAction(t);
                                    e.subSteps.push({ messageStepId: s + r, messageTag: c.DECISION, actionIcon: this.getIconForDecisionAction(t), actionType: t?.action, actionMarkdownSummary: o, actionSummary: i, actionWebResult: this.webResults.find((e) => e.url === t?.action_input?.url), actionState: "COMPLETED", webResults: a.webResults, xPostIds: a.xPostIds }), r++;
                                }
                            }
                            this.steps.push(e);
                        }
                        t || ((this.isPastSummary = !0), (this.state = "COMPLETED"));
                    }),
                        (this.addDebugMessageTagCount = (e) => {
                            e && (this.debugMessageTagCount[e] || (this.debugMessageTagCount[e] = 0), this.debugMessageTagCount[e]++, (this.debugMessageTagCount = { ...this.debugMessageTagCount }));
                        }),
                        (this.updateStepsFromRawMessage = (e) => {
                            e.messageTag && (e.messageTag = e.messageTag.toLowerCase());
                            const t = this.steps.length - 1,
                                s = e.messageTag === c.HEADER,
                                a = s || this.steps.length <= 0;
                            if ((this.addDebugMessageTagCount(e.messageTag), (this.lastStreamedDataTimestamp = Date.now()), "PENDING" === this.state && ((this.streamStartTimestamp = Date.now()), (this.state = "STARTED")), a)) {
                                const a = { id: r().v4(), state: "COMPLETED" === this.state ? h.COMPLETED : h.IN_PROGRESS, header: s ? e.message : u, subSteps: [] };
                                if (s) {
                                    if (1 === this.steps.length && this.steps[0].header === u) return void (this.steps = [{ ...this.steps[0], header: a.header }]);
                                    this.steps = [...this.steps, a];
                                } else e.messageTag === c.ASSISTANT && ((this.accumulatedTrace += e.message), (this.traceEnabled = !0), (this.steps = [...this.steps, a]));
                                return void (t >= 0 && this.completeStep(t));
                            }
                            const o = this.steps[t],
                                i = o.subSteps.findLastIndex((t) => {
                                    if (e.messageTag === c.RAW_FUNCTION_RESULT) {
                                        const s = t.messageStepId === e.messageStepId,
                                            a = t.messageTag === e.messageTag,
                                            r = t.messageTag === c.DECISION;
                                        return s && (a || r);
                                    }
                                    return t.messageStepId === e.messageStepId && t.messageTag === e.messageTag;
                                }),
                                m = i > -1 ? o.subSteps[i] : void 0;
                            let l = !1;
                            if (m) {
                                switch (e.messageTag) {
                                    case c.ASSISTANT:
                                        (this.accumulatedTrace += e.message), (this.traceEnabled = !0);
                                        break;
                                    case c.SUMMARY: {
                                        const t = (0, d.Ez)(e.message);
                                        (this.accumulatedSummary += t), (m.summary = (m.summary || "") + t);
                                        const s = (0, d.QK)(e.message);
                                        if (s) {
                                            const t = (0, d.j)(s);
                                            if (t) {
                                                m.statusHeaders = [...(m.statusHeaders || []), t];
                                                const e = (0, d.jU)(s);
                                                m.orderedContentToPreview = [...(m.orderedContentToPreview || []), { header: e, type: "TOOL_USAGE", toolUsageCard: s }];
                                            }
                                            m.toolUsageCardResults = [...(m.toolUsageCardResults || []), { toolUsageCardId: s.id, webResults: e.webResults, xPostIds: e.xPostIds }];
                                        } else {
                                            const t = (0, n.K)(e.message);
                                            if ((t.trim() && ((m.statusHeaders = [...(m.statusHeaders || []), t]), (m.summaryBulletPoints = [...(m.summaryBulletPoints || []), t]), (m.orderedContentToPreview = [...(m.orderedContentToPreview || []), { header: o.header, summary: t, type: "SUMMARY" }])), (e.webResults && e.webResults.length) || (e.xPostIds && e.xPostIds.length))) {
                                                if ((this.addWebResults(e.webResults || []), this.addXPostIds(e.xPostIds || []), e.toolUsageCardId)) {
                                                    const t = m.toolUsageCardResults?.map((t) => (t.toolUsageCardId === e.toolUsageCardId ? { ...t, webResults: e.webResults, xPostIds: e.xPostIds } : t));
                                                    m.toolUsageCardResults = t;
                                                }
                                                const t = m.orderedContentToPreview?.find((t) => t.toolUsageCard?.id === e.toolUsageCardId);
                                                t && (m.orderedContentToPreview = [...(m.orderedContentToPreview || []), { header: t.header, type: "TOOL_USAGE_RESULT", toolUsageCard: t.toolUsageCard, toolUsageCardResult: { toolUsageCardId: t.toolUsageCard?.id || "", webResults: e.webResults, xPostIds: e.xPostIds } }]);
                                            }
                                        }
                                        l = !0;
                                        break;
                                    }
                                    case c.DECISION: {
                                        const t = this.parseMessageJSON(e.message),
                                            { markdown: s, text: a } = this.getContentForDecisionAction(t);
                                        (m.actionIcon = this.getIconForDecisionAction(t)), (m.actionType = t?.action), (m.actionSummary = a), (m.actionMarkdownSummary = s), (l = !0);
                                        break;
                                    }
                                    case c.RAW_FUNCTION_RESULT:
                                        if (!((e.webResults && e.webResults.length) || (e.xPostIds && e.xPostIds.length))) break;
                                        e.webResults && ((m.webResults = e.webResults), this.addWebResults(e.webResults || [])), e.xPostIds && ((m.xPostIds = e.xPostIds), this.addXPostIds(e.xPostIds || [])), m.actionState, (l = !0);
                                }
                                l && ((o.subSteps[i] = { ...m }), (o.subSteps = [...o.subSteps]));
                            } else {
                                let t = null;
                                switch (e.messageTag) {
                                    case c.ASSISTANT:
                                        (this.accumulatedTrace += e.message), (this.traceEnabled = !0);
                                        break;
                                    case c.SUMMARY: {
                                        const s = (0, d.QK)(e.message) ?? void 0,
                                            a = (0, d.Ez)(e.message);
                                        this.accumulatedSummary += a;
                                        let r = [],
                                            i = [],
                                            u = [];
                                        if (s) {
                                            const e = (0, d.j)(s);
                                            e && ((r = [e]), (u = [{ header: e, toolUsageCard: s, type: "TOOL_USAGE" }]));
                                        } else {
                                            const t = (0, n.K)(e.message);
                                            t.trim() && ((r = [(0, n.K)(e.message)]), (i = [...(i || []), t]), (u = [{ header: o.header, summary: t, type: "SUMMARY" }]));
                                        }
                                        t = { messageStepId: e.messageStepId, messageTag: e.messageTag, summary: a, toolUsageCardResults: s ? [{ toolUsageCardId: s.id, webResults: e.webResults, xPostIds: e.xPostIds }] : [], statusHeaders: r, summaryBulletPoints: i, orderedContentToPreview: u };
                                        break;
                                    }
                                    case c.DECISION: {
                                        const s = this.parseMessageJSON(e.message),
                                            { markdown: a, text: r } = this.getContentForDecisionAction(s);
                                        t = { messageStepId: e.messageStepId, messageTag: e.messageTag, actionIcon: this.getIconForDecisionAction(s), actionType: s?.action, actionSummary: r, actionMarkdownSummary: a, actionWebResult: this.webResults.find((e) => e.url === s?.action_input?.url), actionState: "STARTED" };
                                        break;
                                    }
                                    case c.RAW_FUNCTION_RESULT: {
                                        const s = e.webResults || [];
                                        this.addWebResults(s);
                                        const a = e.xPostIds || [];
                                        this.addXPostIds(a), (s.length > 0 || a.length > 0) && (t = { messageStepId: e.messageStepId, messageTag: e.messageTag, webResults: e.webResults, xPostIds: e.xPostIds });
                                        break;
                                    }
                                }
                                if (t) {
                                    const e = [...o.subSteps];
                                    for (const t of e) t.actionState = "COMPLETED";
                                    (o.subSteps = [...e, t]), (o.subSteps = this.sortSubstepsByStepIdMessageTag(o.subSteps)), (this.steps = [...this.steps]);
                                }
                            }
                            this.steps[t] = { ...this.steps[t] };
                        }),
                        (this.sortSubstepsByStepIdMessageTag = (e) => {
                            const t = [c.SUMMARY, c.DECISION, c.RAW_FUNCTION_RESULT];
                            return e.sort((e, s) => (e.messageStepId !== s.messageStepId ? e.messageStepId - s.messageStepId : t.indexOf(e.messageTag) - t.indexOf(s.messageTag)));
                        }),
                        (this.completeStep = (e) => {
                            this.steps[e].state = h.COMPLETED;
                        }),
                        (this.parseMessageJSON = (e) => {
                            try {
                                return JSON.parse(e);
                            } catch (e) {
                                return null;
                            }
                        }),
                        (this.getContentForDecisionAction = (e) => {
                            if (!e) return { text: "", markdown: "" };
                            if (e.action_input?.username) {
                                if (e.action_input?.query) return { text: l.XUsernameQuerySearchFormatter({ username: e.action_input?.username, query: e.action_input?.query }), markdown: l.XUsernameQuerySearchMarkdownFormatter({ username: e.action_input?.username, query: e.action_input?.query }) };
                                const t = l.XUsernameSearchFormatter({ username: e.action_input?.username });
                                return { text: t, markdown: t };
                            }
                            if (e.action_input?.query) {
                                if (e.action_input?.url) {
                                    let t = e.action_input?.url;
                                    "x.com" === t && (t = "https://x.com");
                                    let s = "",
                                        a = "";
                                    try {
                                        (s = new URL(t).hostname), s.startsWith("www.") && (s = s.replace("www.", "")), (a = `[${s}](${t})`);
                                    } catch (e) {
                                        a = t;
                                    }
                                    return { text: l.GenericURLQueryFormatter({ url: s, query: e.action_input?.query }), markdown: l.GenericURLQueryMarkdownFormatter({ url: a, query: e.action_input?.query }) };
                                }
                                return { text: l.GenericSearchQueryFormatter({ query: e.action_input?.query }), markdown: l.GenericSearchQueryMarkdownFormatter({ query: e.action_input?.query }) };
                            }
                            return { text: "", markdown: "" };
                        }),
                        (this.getIconForDecisionAction = (e) => {
                            if (!e) return "IconSearchStroke";
                            switch (e.action) {
                                case "web_search":
                                default:
                                    return "IconSearchStroke";
                                case "x_search":
                                case "x_user_timeline":
                                case "fetch_x_post_context":
                                    return "IconTwitter";
                                case "browse_page":
                                    return "IconGlobeStroke";
                            }
                        }),
                        (this.complete = (e = !0) => {
                            "COMPLETED" !== this.state &&
                                ((this.streamCompletedTimestamp = Date.now()),
                                (this.state = "COMPLETED"),
                                this.steps.forEach((e) => {
                                    (e.state = h.COMPLETED),
                                        e.subSteps.forEach((e) => {
                                            e.actionState = "COMPLETED";
                                        });
                                }),
                                e && this.steps.push({ id: r().v4(), state: h.COMPLETED, header: m, subSteps: [], isCompleteHeader: !0 }),
                                (this.steps = [...this.steps]));
                        }),
                        (this.onAbort = () => {
                            for (let e = 0; e < this.steps.length; e++)
                                this.steps[e].state === h.IN_PROGRESS && (this.steps[e].state = h.FAILED),
                                    this.steps[e].subSteps.forEach((e) => {
                                        e.actionState = "COMPLETED";
                                    });
                            (this.steps = [...this.steps]), (this.state = "ABORTED");
                        }),
                        (this.getNumSources = () => this.webResults.length + this.xPostIds.length),
                        (this.addWebResults = (e) => {
                            this.webResults = [...this.webResults, ...e].filter((e, t, s) => t === s.findIndex((t) => t.url === e.url));
                        }),
                        (this.addXPostIds = (e) => {
                            this.xPostIds = [...this.xPostIds, ...e].filter((e, t, s) => t === s.findIndex((t) => t === e));
                        }),
                        (this.getStreamDuration = () => (this.streamStartTimestamp ? (this.streamCompletedTimestamp ? this.streamCompletedTimestamp - this.streamStartTimestamp : Date.now() - Number(this.streamStartTimestamp)) : -1)),
                        (this.updateFinalAnswer = ({ message: e, messageTag: t }) => {
                            (this.defaultFinalAnswer += e), this.addDebugMessageTagCount(t);
                        }),
                        (this.steps = []),
                        (this.state = "PENDING"),
                        (this.streamStartTimestamp = null),
                        (this.streamCompletedTimestamp = null),
                        (this.accumulatedTrace = ""),
                        (this.accumulatedSummary = ""),
                        (this.traceEnabled = !1),
                        (this.webResults = []),
                        (this.xPostIds = []),
                        (this.showLongFinalAnswer = !1),
                        (this.defaultFinalAnswer = ""),
                        (this.debugMessageTagCount = {}),
                        (this.lastStreamedDataTimestamp = null),
                        (this.deepsearchArgs = e?.deepsearchArgs || null),
                        (this.isDeepsearch = e?.isDeepsearch ?? !1);
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserAvatar-85c3578f.cc82d40a.js.map

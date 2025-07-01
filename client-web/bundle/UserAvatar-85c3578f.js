"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserAvatar-85c3578f"],
    {
        965728: (e, s, t) => {
            t.d(s, { C_: () => b, I5: () => g, K2: () => S, L$: () => u, Rb: () => p, nk: () => l, sI: () => w, xr: () => T });
            var a = t(202784),
                r = t(483677),
                o = t(782578),
                i = t(401339),
                n = t(521514);
            const d = (e, s) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${s})`,
                u = (e) => {
                    const s = e && r.Z.getForGallery(e);
                    return s ? { rgb: T(s), rgba: d(s, 0.9) } : h;
                },
                m = n.Z.columnWidths.primary,
                c = (e, s) => Math.min(s, e),
                h = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                l = { transitionProperty: "background-color", transitionDuration: ".5s" },
                g = (e, s) => {
                    const { containerHeight: t, containerWidth: a, mediaHeight: r, mediaWidth: i } = e,
                        n = i && r ? i / r : 1,
                        d = n > 1,
                        u = s ? 400 : m,
                        h = d && (!i || i <= u) ? c(a, u) : a,
                        l = d || (r && !(r <= u)) ? t : c(t, u);
                    return o.Z.getContainDimensions({ width: h, height: l }, n);
                },
                p = (e) => {
                    const s = e && e.ext_media_color && e.ext_media_color.palette;
                    return u(s);
                },
                S = (e) => {
                    const s = e && e.profile_image_extensions_media_color && e.profile_image_extensions_media_color.palette;
                    return u(s);
                },
                b = (e) => {
                    const s = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
                    return u(s);
                },
                T = (e) => `rgb(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue})`,
                I = (e, s) => {
                    switch (s.type) {
                        case "zoom":
                            return { ...e, isZoomed: s.payload.isZoomed, showControls: !s.payload.isZoomed };
                        case "tap":
                            return { ...e, showControls: !e.showControls };
                        default:
                            return e;
                    }
                },
                w = () => {
                    const [e, s] = a.useReducer(I, { isZoomed: !1, showControls: !0 });
                    return {
                        hideButtons: e.isZoomed || !e.showControls,
                        handleMediaDetailZoomed: function (e) {
                            s({ type: "zoom", payload: { isZoomed: e } });
                        },
                        handleMediaItemTapped: function () {
                            i.Z.isTouchSupported() && s({ type: "tap" });
                        },
                    };
                };
        },
        397159: (e, s, t) => {
            t.d(s, { B2: () => g, Fi: () => h, fQ: () => p, iS: () => c, uk: () => l });
            t(136728), t(574858), t(543673), t(240753), t(128399);
            var a = t(468811),
                r = t.n(a),
                o = t(111677),
                i = t.n(o),
                n = t(123702),
                d = t(187268);
            const u = i().c3f04d9c,
                m = i().cbdddb0a,
                c = { HEADER: "header", ASSISTANT: "assistant", DECISION: "decision", RAW_FUNCTION_RESULT: "raw_function_result", FUNCTION: "function", SUMMARY: "summary", FINAL: "final", SOFT_STOP: "softstop", FINAL_LONG: "final_long" },
                h = { IN_PROGRESS: "IN_PROGRESS", COMPLETED: "COMPLETED", FAILED: "FAILED" },
                l = { GenericSearchQueryFormatter: i().ie2bbeed, GenericSearchQueryMarkdownFormatter: i().b0d1e205, WebSearchQueryFormatter: i().ie2bbeed, XSearchQueryFormatter: i().bf970edd, XUserSearchFormatter: i().ad342369, BrowsePageFormatter: i().g008d475, GenericURLQueryFormatter: i().c91e3971, GenericURLQueryMarkdownFormatter: i().acb9b845, XUsernameSearchFormatter: i().j9006405, XUsernameQuerySearchFormatter: i().a2dd07e5, XUsernameQuerySearchMarkdownFormatter: i().e99fb7a3, CodeExecutionFormatter: i().a02d1657 },
                g = { WebSearchQueryFormatter: i().aa9d42c0, XSearchQueryFormatter: i().c731d702, XUserSearchFormatter: i().d0e02476, BrowsePageFormatter: i().c43ef93e, XUsernameSearchFormatter: i().dab166ec, XUsernameQuerySearchFormatter: i().dab166ec, CodeExecutionFormatter: i().jb097f6e };
            class p {
                constructor(e) {
                    (this.initiateFromHistoryResponses = (e, s = !1) => {
                        this.lastStreamedDataTimestamp = Date.now();
                        for (const s of e) {
                            const e = { id: r().v4(), state: h.COMPLETED, header: s.header || u, subSteps: [] };
                            for (let t = 0; t < s.steps.length; t++) {
                                const a = s.steps[t];
                                this.addWebResults(a.webResults || []), this.addXPostIds(a.xPostIds || []);
                                let r = 0;
                                if ((a.assistant && ((this.accumulatedTrace += a.assistant), (this.traceEnabled = !0)), a.summary)) {
                                    const s = (0, d.Ez)(a.summary);
                                    (this.accumulatedSummary += s), e.subSteps.push({ messageStepId: t + r, messageTag: c.SUMMARY, summary: s, webResults: a.webResults, xPostIds: a.xPostIds, toolUsageCardResults: a.toolUsageCardResults }), r++;
                                }
                                if (a.decision) {
                                    const s = this.parseMessageJSON(a.decision),
                                        { markdown: o, text: i } = this.getContentForDecisionAction(s);
                                    e.subSteps.push({ messageStepId: t + r, messageTag: c.DECISION, actionIcon: this.getIconForDecisionAction(s), actionType: s?.action, actionMarkdownSummary: o, actionSummary: i, actionWebResult: this.webResults.find((e) => e.url === s?.action_input?.url), actionState: "COMPLETED", webResults: a.webResults, xPostIds: a.xPostIds }), r++;
                                }
                            }
                            this.steps.push(e);
                        }
                        s || ((this.isPastSummary = !0), (this.state = "COMPLETED"));
                    }),
                        (this.addDebugMessageTagCount = (e) => {
                            e && (this.debugMessageTagCount[e] || (this.debugMessageTagCount[e] = 0), this.debugMessageTagCount[e]++, (this.debugMessageTagCount = { ...this.debugMessageTagCount }));
                        }),
                        (this.updateStepsFromRawMessage = (e) => {
                            e.messageTag && (e.messageTag = e.messageTag.toLowerCase());
                            const s = this.steps.length - 1,
                                t = e.messageTag === c.HEADER,
                                a = t || this.steps.length <= 0;
                            if ((this.addDebugMessageTagCount(e.messageTag), (this.lastStreamedDataTimestamp = Date.now()), "PENDING" === this.state && ((this.streamStartTimestamp = Date.now()), (this.state = "STARTED")), a)) {
                                const a = { id: r().v4(), state: "COMPLETED" === this.state ? h.COMPLETED : h.IN_PROGRESS, header: t ? e.message : u, subSteps: [] };
                                if (t) {
                                    if (1 === this.steps.length && this.steps[0].header === u) return void (this.steps = [{ ...this.steps[0], header: a.header }]);
                                    this.steps = [...this.steps, a];
                                } else e.messageTag === c.ASSISTANT && ((this.accumulatedTrace += e.message), (this.traceEnabled = !0), (this.steps = [...this.steps, a]));
                                return void (s >= 0 && this.completeStep(s));
                            }
                            const o = this.steps[s],
                                i = o.subSteps.findLastIndex((s) => {
                                    if (e.messageTag === c.RAW_FUNCTION_RESULT) {
                                        const t = s.messageStepId === e.messageStepId,
                                            a = s.messageTag === e.messageTag,
                                            r = s.messageTag === c.DECISION;
                                        return t && (a || r);
                                    }
                                    return s.messageStepId === e.messageStepId && s.messageTag === e.messageTag;
                                }),
                                m = i > -1 ? o.subSteps[i] : void 0;
                            let l = !1;
                            if (m) {
                                switch (e.messageTag) {
                                    case c.ASSISTANT:
                                        (this.accumulatedTrace += e.message), (this.traceEnabled = !0);
                                        break;
                                    case c.SUMMARY: {
                                        const s = (0, d.Ez)(e.message);
                                        (this.accumulatedSummary += s), (m.summary = (m.summary || "") + s);
                                        const t = (0, d.QK)(e.message);
                                        if (t) {
                                            const s = (0, d.j)(t);
                                            if (s) {
                                                m.statusHeaders = [...(m.statusHeaders || []), s];
                                                const e = (0, d.jU)(t);
                                                m.orderedContentToPreview = [...(m.orderedContentToPreview || []), { header: e, type: "TOOL_USAGE", toolUsageCard: t }];
                                            }
                                            m.toolUsageCardResults = [...(m.toolUsageCardResults || []), { toolUsageCardId: t.id, webResults: e.webResults, xPostIds: e.xPostIds }];
                                        } else {
                                            const s = (0, n.K)(e.message);
                                            if ((s.trim() && ((m.statusHeaders = [...(m.statusHeaders || []), s]), (m.summaryBulletPoints = [...(m.summaryBulletPoints || []), s]), (m.orderedContentToPreview = [...(m.orderedContentToPreview || []), { header: o.header, summary: s, type: "SUMMARY" }])), (e.webResults && e.webResults.length) || (e.xPostIds && e.xPostIds.length))) {
                                                if ((this.addWebResults(e.webResults || []), this.addXPostIds(e.xPostIds || []), e.toolUsageCardId)) {
                                                    const s = m.toolUsageCardResults?.map((s) => (s.toolUsageCardId === e.toolUsageCardId ? { ...s, webResults: e.webResults, xPostIds: e.xPostIds } : s));
                                                    m.toolUsageCardResults = s;
                                                }
                                                const s = m.orderedContentToPreview?.find((s) => s.toolUsageCard?.id === e.toolUsageCardId);
                                                s && (m.orderedContentToPreview = [...(m.orderedContentToPreview || []), { header: s.header, type: "TOOL_USAGE_RESULT", toolUsageCard: s.toolUsageCard, toolUsageCardResult: { toolUsageCardId: s.toolUsageCard?.id || "", webResults: e.webResults, xPostIds: e.xPostIds } }]);
                                            }
                                        }
                                        l = !0;
                                        break;
                                    }
                                    case c.DECISION: {
                                        const s = this.parseMessageJSON(e.message),
                                            { markdown: t, text: a } = this.getContentForDecisionAction(s);
                                        (m.actionIcon = this.getIconForDecisionAction(s)), (m.actionType = s?.action), (m.actionSummary = a), (m.actionMarkdownSummary = t), (l = !0);
                                        break;
                                    }
                                    case c.RAW_FUNCTION_RESULT:
                                        if (!((e.webResults && e.webResults.length) || (e.xPostIds && e.xPostIds.length))) break;
                                        e.webResults && ((m.webResults = e.webResults), this.addWebResults(e.webResults || [])), e.xPostIds && ((m.xPostIds = e.xPostIds), this.addXPostIds(e.xPostIds || [])), m.actionState, (l = !0);
                                }
                                l && ((o.subSteps[i] = { ...m }), (o.subSteps = [...o.subSteps]));
                            } else {
                                let s = null;
                                switch (e.messageTag) {
                                    case c.ASSISTANT:
                                        (this.accumulatedTrace += e.message), (this.traceEnabled = !0);
                                        break;
                                    case c.SUMMARY: {
                                        const t = (0, d.QK)(e.message) ?? void 0,
                                            a = (0, d.Ez)(e.message);
                                        this.accumulatedSummary += a;
                                        let r = [],
                                            i = [],
                                            u = [];
                                        if (t) {
                                            const e = (0, d.j)(t);
                                            e && (r = [e]);
                                            (0, d.jU)(t) && (u = [{ header: e, toolUsageCard: t, type: "TOOL_USAGE" }]);
                                        } else {
                                            const s = (0, n.K)(e.message);
                                            s.trim() && ((r = [(0, n.K)(e.message)]), (i = [...(i || []), s]), (u = [{ header: o.header, summary: s, type: "SUMMARY" }]));
                                        }
                                        s = { messageStepId: e.messageStepId, messageTag: e.messageTag, summary: a, toolUsageCardResults: t ? [{ toolUsageCardId: t.id, webResults: e.webResults, xPostIds: e.xPostIds }] : [], statusHeaders: r, summaryBulletPoints: i, orderedContentToPreview: u };
                                        break;
                                    }
                                    case c.DECISION: {
                                        const t = this.parseMessageJSON(e.message),
                                            { markdown: a, text: r } = this.getContentForDecisionAction(t);
                                        s = { messageStepId: e.messageStepId, messageTag: e.messageTag, actionIcon: this.getIconForDecisionAction(t), actionType: t?.action, actionSummary: r, actionMarkdownSummary: a, actionWebResult: this.webResults.find((e) => e.url === t?.action_input?.url), actionState: "STARTED" };
                                        break;
                                    }
                                    case c.RAW_FUNCTION_RESULT: {
                                        const t = e.webResults || [];
                                        this.addWebResults(t);
                                        const a = e.xPostIds || [];
                                        this.addXPostIds(a), (t.length > 0 || a.length > 0) && (s = { messageStepId: e.messageStepId, messageTag: e.messageTag, webResults: e.webResults, xPostIds: e.xPostIds });
                                        break;
                                    }
                                }
                                if (s) {
                                    const e = [...o.subSteps];
                                    for (const s of e) s.actionState = "COMPLETED";
                                    (o.subSteps = [...e, s]), (o.subSteps = this.sortSubstepsByStepIdMessageTag(o.subSteps)), (this.steps = [...this.steps]);
                                }
                            }
                            this.steps[s] = { ...this.steps[s] };
                        }),
                        (this.sortSubstepsByStepIdMessageTag = (e) => {
                            const s = [c.SUMMARY, c.DECISION, c.RAW_FUNCTION_RESULT];
                            return e.sort((e, t) => (e.messageStepId !== t.messageStepId ? e.messageStepId - t.messageStepId : s.indexOf(e.messageTag) - s.indexOf(t.messageTag)));
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
                                const s = l.XUsernameSearchFormatter({ username: e.action_input?.username });
                                return { text: s, markdown: s };
                            }
                            if (e.action_input?.query) {
                                if (e.action_input?.url) {
                                    let s = e.action_input?.url;
                                    "x.com" === s && (s = "https://x.com");
                                    let t = "",
                                        a = "";
                                    try {
                                        (t = new URL(s).hostname), t.startsWith("www.") && (t = t.replace("www.", "")), (a = `[${t}](${s})`);
                                    } catch (e) {
                                        a = s;
                                    }
                                    return { text: l.GenericURLQueryFormatter({ url: t, query: e.action_input?.query }), markdown: l.GenericURLQueryMarkdownFormatter({ url: a, query: e.action_input?.query }) };
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
                            this.webResults = [...this.webResults, ...e].filter((e, s, t) => s === t.findIndex((s) => s.url === e.url));
                        }),
                        (this.addXPostIds = (e) => {
                            this.xPostIds = [...this.xPostIds, ...e].filter((e, s, t) => s === t.findIndex((s) => s === e));
                        }),
                        (this.getStreamDuration = () => (this.streamStartTimestamp ? (this.streamCompletedTimestamp ? this.streamCompletedTimestamp - this.streamStartTimestamp : Date.now() - Number(this.streamStartTimestamp)) : -1)),
                        (this.updateFinalAnswer = ({ message: e, messageTag: s }) => {
                            (this.defaultFinalAnswer += e), this.addDebugMessageTagCount(s);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserAvatar-85c3578f.359f477a.js.map

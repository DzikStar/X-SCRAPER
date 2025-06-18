"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserAvatar-85c3578f"],
    {
        965728: (e, s, t) => {
            t.d(s, { C_: () => b, I5: () => l, K2: () => S, L$: () => c, Rb: () => p, nk: () => g, sI: () => w, xr: () => T });
            var a = t(202784),
                r = t(483677),
                i = t(782578),
                o = t(401339),
                n = t(521514);
            const u = (e, s) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${s})`,
                c = (e) => {
                    const s = e && r.Z.getForGallery(e);
                    return s ? { rgb: T(s), rgba: u(s, 0.9) } : d;
                },
                m = n.Z.columnWidths.primary,
                h = (e, s) => Math.min(s, e),
                d = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                g = { transitionProperty: "background-color", transitionDuration: ".5s" },
                l = (e, s) => {
                    const { containerHeight: t, containerWidth: a, mediaHeight: r, mediaWidth: o } = e,
                        n = o && r ? o / r : 1,
                        u = n > 1,
                        c = s ? 400 : m,
                        d = u && (!o || o <= c) ? h(a, c) : a,
                        g = u || (r && !(r <= c)) ? t : h(t, c);
                    return i.Z.getContainDimensions({ width: d, height: g }, n);
                },
                p = (e) => {
                    const s = e && e.ext_media_color && e.ext_media_color.palette;
                    return c(s);
                },
                S = (e) => {
                    const s = e && e.profile_image_extensions_media_color && e.profile_image_extensions_media_color.palette;
                    return c(s);
                },
                b = (e) => {
                    const s = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
                    return c(s);
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
                            o.Z.isTouchSupported() && s({ type: "tap" });
                        },
                    };
                };
        },
        397159: (e, s, t) => {
            t.d(s, { Fi: () => d, XR: () => g, fQ: () => l, iS: () => h });
            t(136728), t(574858), t(543673), t(240753), t(128399);
            var a = t(468811),
                r = t.n(a),
                i = t(111677),
                o = t.n(i),
                n = t(123702),
                u = t(187268);
            const c = o().c3f04d9c,
                m = o().cbdddb0a,
                h = { HEADER: "header", ASSISTANT: "assistant", DECISION: "decision", RAW_FUNCTION_RESULT: "raw_function_result", FUNCTION: "function", SUMMARY: "summary", FINAL: "final", SOFT_STOP: "softstop", FINAL_LONG: "final_long" },
                d = { IN_PROGRESS: "IN_PROGRESS", COMPLETED: "COMPLETED", FAILED: "FAILED" },
                g = { GenericSearchQueryFormatter: o().ie2bbeed, GenericSearchQueryMarkdownFormatter: o().b0d1e205, WebSearchQueryFormatter: o().ie2bbeed, XSearchQueryFormatter: o().bf970edd, BrowsePageFormatter: o().g008d475, GenericURLQueryFormatter: o().c91e3971, GenericURLQueryMarkdownFormatter: o().acb9b845, XUsernameSearchFormatter: o().j9006405, XUsernameQuerySearchFormatter: o().a2dd07e5, XUsernameQuerySearchMarkdownFormatter: o().e99fb7a3 };
            class l {
                constructor(e) {
                    (this.initiateFromHistoryResponses = (e, s = !1) => {
                        this.lastStreamedDataTimestamp = Date.now();
                        for (const s of e) {
                            const e = { id: r().v4(), state: d.COMPLETED, header: s.header || c, subSteps: [] };
                            for (let t = 0; t < s.steps.length; t++) {
                                const a = s.steps[t];
                                this.addWebResults(a.webResults || []), this.addXPostIds(a.xPostIds || []);
                                let r = 0;
                                if ((a.assistant && ((this.accumulatedTrace += a.assistant), (this.traceEnabled = !0)), a.summary)) {
                                    const s = (0, u.rs)(a.summary);
                                    (this.accumulatedSummary += s), e.subSteps.push({ messageStepId: t + r, messageTag: h.SUMMARY, summary: s, webResults: a.webResults, xPostIds: a.xPostIds }), r++;
                                }
                                if (a.decision) {
                                    const s = this.parseMessageJSON(a.decision),
                                        { markdown: i, text: o } = this.getContentForDecisionAction(s);
                                    e.subSteps.push({ messageStepId: t + r, messageTag: h.DECISION, actionIcon: this.getIconForDecisionAction(s), actionType: s?.action, actionMarkdownSummary: i, actionSummary: o, actionWebResult: this.webResults.find((e) => e.url === s?.action_input?.url), actionState: "COMPLETED", webResults: a.webResults, xPostIds: a.xPostIds }), r++;
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
                            const s = this.steps.length - 1,
                                t = e.messageTag === h.HEADER,
                                a = t || this.steps.length <= 0;
                            if ((this.addDebugMessageTagCount(e.messageTag), (this.lastStreamedDataTimestamp = Date.now()), "PENDING" === this.state && ((this.streamStartTimestamp = Date.now()), (this.state = "STARTED")), a)) {
                                const a = { id: r().v4(), state: "COMPLETED" === this.state ? d.COMPLETED : d.IN_PROGRESS, header: t ? e.message : c, subSteps: [] };
                                if (t) {
                                    if (1 === this.steps.length && this.steps[0].header === c) return void (this.steps = [{ ...this.steps[0], header: a.header }]);
                                    this.steps = [...this.steps, a];
                                } else e.messageTag === h.ASSISTANT && ((this.accumulatedTrace += e.message), (this.traceEnabled = !0), (this.steps = [...this.steps, a]));
                                return void (s >= 0 && this.completeStep(s));
                            }
                            const i = this.steps[s],
                                o = i.subSteps.findLastIndex((s) => {
                                    if (e.messageTag === h.RAW_FUNCTION_RESULT) {
                                        const t = s.messageStepId === e.messageStepId,
                                            a = s.messageTag === e.messageTag,
                                            r = s.messageTag === h.DECISION,
                                            i = s.messageTag === h.SUMMARY && void 0 !== s.toolUsage;
                                        return t && (a || r || i);
                                    }
                                    return s.messageStepId === e.messageStepId && s.messageTag === e.messageTag;
                                }),
                                m = o > -1 ? i.subSteps[o] : void 0;
                            let g = !1;
                            if (m) {
                                switch (e.messageTag) {
                                    case h.ASSISTANT:
                                        (this.accumulatedTrace += e.message), (this.traceEnabled = !0);
                                        break;
                                    case h.SUMMARY: {
                                        const s = (0, u.rs)(e.message);
                                        m.summary = (m.summary || "") + s;
                                        const t = (0, u.Bv)(e.message);
                                        t ? (m.toolUsage = t) : ((m.bulletPoints = [...(m.bulletPoints || []), (0, n.K)(e.message)]), e.webResults && e.webResults.length && ((m.webResults = e.webResults), this.addWebResults(e.webResults || []))), (g = !0), (this.accumulatedSummary += s);
                                        break;
                                    }
                                    case h.DECISION: {
                                        const s = this.parseMessageJSON(e.message),
                                            { markdown: t, text: a } = this.getContentForDecisionAction(s);
                                        (m.actionIcon = this.getIconForDecisionAction(s)), (m.actionType = s?.action), (m.actionSummary = a), (m.actionMarkdownSummary = t), (g = !0);
                                        break;
                                    }
                                    case h.RAW_FUNCTION_RESULT:
                                        if (!((e.webResults && e.webResults.length) || (e.xPostIds && e.xPostIds.length))) break;
                                        e.webResults && ((m.webResults = e.webResults), this.addWebResults(e.webResults || [])), e.xPostIds && ((m.xPostIds = e.xPostIds), this.addXPostIds(e.xPostIds || [])), m.actionState, (g = !0);
                                }
                                g && ((i.subSteps[o] = { ...m }), (i.subSteps = [...i.subSteps]));
                            } else {
                                let s = null;
                                switch (e.messageTag) {
                                    case h.ASSISTANT:
                                        (this.accumulatedTrace += e.message), (this.traceEnabled = !0);
                                        break;
                                    case h.SUMMARY: {
                                        const t = (0, u.Bv)(e.message) ?? void 0,
                                            a = (0, u.rs)(e.message);
                                        s = { messageStepId: e.messageStepId, messageTag: e.messageTag, summary: a, toolUsage: t };
                                        break;
                                    }
                                    case h.DECISION: {
                                        const t = this.parseMessageJSON(e.message),
                                            { markdown: a, text: r } = this.getContentForDecisionAction(t);
                                        s = { messageStepId: e.messageStepId, messageTag: e.messageTag, actionIcon: this.getIconForDecisionAction(t), actionType: t?.action, actionSummary: r, actionMarkdownSummary: a, actionWebResult: this.webResults.find((e) => e.url === t?.action_input?.url), actionState: "STARTED" };
                                        break;
                                    }
                                    case h.RAW_FUNCTION_RESULT: {
                                        const t = e.webResults || [];
                                        this.addWebResults(t);
                                        const a = e.xPostIds || [];
                                        this.addXPostIds(a), (t.length > 0 || a.length > 0) && (s = { messageStepId: e.messageStepId, messageTag: e.messageTag, webResults: e.webResults, xPostIds: e.xPostIds });
                                        break;
                                    }
                                }
                                if (s) {
                                    const e = [...i.subSteps];
                                    for (const s of e) s.actionState = "COMPLETED";
                                    (i.subSteps = [...e, s]), (i.subSteps = this.sortSubstepsByStepIdMessageTag(i.subSteps)), (this.steps = [...this.steps]);
                                }
                            }
                            this.steps[s] = { ...this.steps[s] };
                        }),
                        (this.sortSubstepsByStepIdMessageTag = (e) => {
                            const s = [h.SUMMARY, h.DECISION, h.RAW_FUNCTION_RESULT];
                            return e.sort((e, t) => (e.messageStepId !== t.messageStepId ? e.messageStepId - t.messageStepId : s.indexOf(e.messageTag) - s.indexOf(t.messageTag)));
                        }),
                        (this.completeStep = (e) => {
                            this.steps[e].state = d.COMPLETED;
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
                                if (e.action_input?.query) return { text: g.XUsernameQuerySearchFormatter({ username: e.action_input?.username, query: e.action_input?.query }), markdown: g.XUsernameQuerySearchMarkdownFormatter({ username: e.action_input?.username, query: e.action_input?.query }) };
                                const s = g.XUsernameSearchFormatter({ username: e.action_input?.username });
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
                                    return { text: g.GenericURLQueryFormatter({ url: t, query: e.action_input?.query }), markdown: g.GenericURLQueryMarkdownFormatter({ url: a, query: e.action_input?.query }) };
                                }
                                return { text: g.GenericSearchQueryFormatter({ query: e.action_input?.query }), markdown: g.GenericSearchQueryMarkdownFormatter({ query: e.action_input?.query }) };
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
                                    (e.state = d.COMPLETED),
                                        e.subSteps.forEach((e) => {
                                            e.actionState = "COMPLETED";
                                        });
                                }),
                                e && this.steps.push({ id: r().v4(), state: d.COMPLETED, header: m, subSteps: [], isCompleteHeader: !0 }),
                                (this.steps = [...this.steps]));
                        }),
                        (this.onAbort = () => {
                            for (let e = 0; e < this.steps.length; e++)
                                this.steps[e].state === d.IN_PROGRESS && (this.steps[e].state = d.FAILED),
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserAvatar-85c3578f.e0b7faba.js.map

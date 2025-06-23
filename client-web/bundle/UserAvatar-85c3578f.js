"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserAvatar-85c3578f"],
    {
        965728: (e, s, t) => {
            t.d(s, { C_: () => b, I5: () => g, K2: () => S, L$: () => d, Rb: () => p, nk: () => l, sI: () => w, xr: () => I });
            var a = t(202784),
                r = t(483677),
                o = t(782578),
                i = t(401339),
                n = t(521514);
            const u = (e, s) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${s})`,
                d = (e) => {
                    const s = e && r.Z.getForGallery(e);
                    return s ? { rgb: I(s), rgba: u(s, 0.9) } : h;
                },
                c = n.Z.columnWidths.primary,
                m = (e, s) => Math.min(s, e),
                h = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                l = { transitionProperty: "background-color", transitionDuration: ".5s" },
                g = (e, s) => {
                    const { containerHeight: t, containerWidth: a, mediaHeight: r, mediaWidth: i } = e,
                        n = i && r ? i / r : 1,
                        u = n > 1,
                        d = s ? 400 : c,
                        h = u && (!i || i <= d) ? m(a, d) : a,
                        l = u || (r && !(r <= d)) ? t : m(t, d);
                    return o.Z.getContainDimensions({ width: h, height: l }, n);
                },
                p = (e) => {
                    const s = e && e.ext_media_color && e.ext_media_color.palette;
                    return d(s);
                },
                S = (e) => {
                    const s = e && e.profile_image_extensions_media_color && e.profile_image_extensions_media_color.palette;
                    return d(s);
                },
                b = (e) => {
                    const s = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
                    return d(s);
                },
                I = (e) => `rgb(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue})`,
                T = (e, s) => {
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
                    const [e, s] = a.useReducer(T, { isZoomed: !1, showControls: !0 });
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
            t.d(s, { Fi: () => h, XR: () => l, fQ: () => g, iS: () => m });
            t(136728), t(574858), t(543673), t(240753), t(128399);
            var a = t(468811),
                r = t.n(a),
                o = t(111677),
                i = t.n(o),
                n = t(123702),
                u = t(187268);
            const d = i().c3f04d9c,
                c = i().cbdddb0a,
                m = { HEADER: "header", ASSISTANT: "assistant", DECISION: "decision", RAW_FUNCTION_RESULT: "raw_function_result", FUNCTION: "function", SUMMARY: "summary", FINAL: "final", SOFT_STOP: "softstop", FINAL_LONG: "final_long" },
                h = { IN_PROGRESS: "IN_PROGRESS", COMPLETED: "COMPLETED", FAILED: "FAILED" },
                l = { GenericSearchQueryFormatter: i().ie2bbeed, GenericSearchQueryMarkdownFormatter: i().b0d1e205, WebSearchQueryFormatter: i().f259119d, XSearchQueryFormatter: i().bf970edd, BrowsePageFormatter: i().g008d475, GenericURLQueryFormatter: i().c91e3971, GenericURLQueryMarkdownFormatter: i().acb9b845, XUsernameSearchFormatter: i().j9006405, XUsernameQuerySearchFormatter: i().a2dd07e5, XUsernameQuerySearchMarkdownFormatter: i().e99fb7a3 };
            class g {
                constructor(e) {
                    (this.initiateFromHistoryResponses = (e, s = !1) => {
                        this.lastStreamedDataTimestamp = Date.now();
                        for (const s of e) {
                            const e = { id: r().v4(), state: h.COMPLETED, header: s.header || d, subSteps: [] };
                            for (let t = 0; t < s.steps.length; t++) {
                                const a = s.steps[t];
                                this.addWebResults(a.webResults || []), this.addXPostIds(a.xPostIds || []);
                                let r = 0;
                                if ((a.assistant && ((this.accumulatedTrace += a.assistant), (this.traceEnabled = !0)), a.summary)) {
                                    const s = (0, u.Ez)(a.summary);
                                    (this.accumulatedSummary += s), e.subSteps.push({ messageStepId: t + r, messageTag: m.SUMMARY, summary: s, webResults: a.webResults, xPostIds: a.xPostIds, toolUsageCardResults: a.toolUsageCardResults }), r++;
                                }
                                if (a.decision) {
                                    const s = this.parseMessageJSON(a.decision),
                                        { markdown: o, text: i } = this.getContentForDecisionAction(s);
                                    e.subSteps.push({ messageStepId: t + r, messageTag: m.DECISION, actionIcon: this.getIconForDecisionAction(s), actionType: s?.action, actionMarkdownSummary: o, actionSummary: i, actionWebResult: this.webResults.find((e) => e.url === s?.action_input?.url), actionState: "COMPLETED", webResults: a.webResults, xPostIds: a.xPostIds }), r++;
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
                                t = e.messageTag === m.HEADER,
                                a = t || this.steps.length <= 0;
                            if ((this.addDebugMessageTagCount(e.messageTag), (this.lastStreamedDataTimestamp = Date.now()), "PENDING" === this.state && ((this.streamStartTimestamp = Date.now()), (this.state = "STARTED")), a)) {
                                const a = { id: r().v4(), state: "COMPLETED" === this.state ? h.COMPLETED : h.IN_PROGRESS, header: t ? e.message : d, subSteps: [] };
                                if (t) {
                                    if (1 === this.steps.length && this.steps[0].header === d) return void (this.steps = [{ ...this.steps[0], header: a.header }]);
                                    this.steps = [...this.steps, a];
                                } else e.messageTag === m.ASSISTANT && ((this.accumulatedTrace += e.message), (this.traceEnabled = !0), (this.steps = [...this.steps, a]));
                                return void (s >= 0 && this.completeStep(s));
                            }
                            const o = this.steps[s],
                                i = o.subSteps.findLastIndex((s) => {
                                    if (e.messageTag === m.RAW_FUNCTION_RESULT) {
                                        const t = s.messageStepId === e.messageStepId,
                                            a = s.messageTag === e.messageTag,
                                            r = s.messageTag === m.DECISION;
                                        return t && (a || r);
                                    }
                                    return s.messageStepId === e.messageStepId && s.messageTag === e.messageTag;
                                }),
                                c = i > -1 ? o.subSteps[i] : void 0;
                            let l = !1;
                            if (c) {
                                switch (e.messageTag) {
                                    case m.ASSISTANT:
                                        (this.accumulatedTrace += e.message), (this.traceEnabled = !0);
                                        break;
                                    case m.SUMMARY: {
                                        const s = (0, u.Ez)(e.message);
                                        c.summary = (c.summary || "") + s;
                                        const t = (0, u.QK)(e.message);
                                        if (t) {
                                            const s = (0, u.CK)(t);
                                            s && (c.bulletPoints = [...(c.bulletPoints || []), s]), (c.toolUsageCardResults = [...(c.toolUsageCardResults || []), { toolUsageCardId: t.id, webResults: e.webResults, xPostIds: e.xPostIds }]);
                                        } else {
                                            const s = (0, n.K)(e.message);
                                            if ((s.trim() && (c.bulletPoints = [...(c.bulletPoints || []), s]), e.webResults && e.webResults.length && (this.addWebResults(e.webResults || []), e.toolUsageCardId))) {
                                                const s = c.toolUsageCardResults?.map((s) => (s.toolUsageCardId === e.toolUsageCardId ? { ...s, webResults: e.webResults } : s));
                                                c.toolUsageCardResults = s;
                                            }
                                            if (e.xPostIds && e.xPostIds.length && (this.addXPostIds(e.xPostIds || []), e.toolUsageCardId)) {
                                                const s = c.toolUsageCardResults?.map((s) => (s.toolUsageCardId === e.toolUsageCardId ? { ...s, xPostIds: e.xPostIds } : s));
                                                c.toolUsageCardResults = s;
                                            }
                                        }
                                        (l = !0), (this.accumulatedSummary += s);
                                        break;
                                    }
                                    case m.DECISION: {
                                        const s = this.parseMessageJSON(e.message),
                                            { markdown: t, text: a } = this.getContentForDecisionAction(s);
                                        (c.actionIcon = this.getIconForDecisionAction(s)), (c.actionType = s?.action), (c.actionSummary = a), (c.actionMarkdownSummary = t), (l = !0);
                                        break;
                                    }
                                    case m.RAW_FUNCTION_RESULT:
                                        if (!((e.webResults && e.webResults.length) || (e.xPostIds && e.xPostIds.length))) break;
                                        e.webResults && ((c.webResults = e.webResults), this.addWebResults(e.webResults || [])), e.xPostIds && ((c.xPostIds = e.xPostIds), this.addXPostIds(e.xPostIds || [])), c.actionState, (l = !0);
                                }
                                l && ((o.subSteps[i] = { ...c }), (o.subSteps = [...o.subSteps]));
                            } else {
                                let s = null;
                                switch (e.messageTag) {
                                    case m.ASSISTANT:
                                        (this.accumulatedTrace += e.message), (this.traceEnabled = !0);
                                        break;
                                    case m.SUMMARY: {
                                        const t = (0, u.QK)(e.message) ?? void 0,
                                            a = (0, u.Ez)(e.message);
                                        let r = [];
                                        if (t) {
                                            const e = (0, u.CK)(t);
                                            e && (r = [e]);
                                        } else {
                                            (0, n.K)(e.message).trim() && (r = [(0, n.K)(e.message)]);
                                        }
                                        s = { messageStepId: e.messageStepId, messageTag: e.messageTag, summary: a, toolUsageCardResults: t ? [{ toolUsageCardId: t.id, webResults: e.webResults, xPostIds: e.xPostIds }] : [], bulletPoints: r };
                                        break;
                                    }
                                    case m.DECISION: {
                                        const t = this.parseMessageJSON(e.message),
                                            { markdown: a, text: r } = this.getContentForDecisionAction(t);
                                        s = { messageStepId: e.messageStepId, messageTag: e.messageTag, actionIcon: this.getIconForDecisionAction(t), actionType: t?.action, actionSummary: r, actionMarkdownSummary: a, actionWebResult: this.webResults.find((e) => e.url === t?.action_input?.url), actionState: "STARTED" };
                                        break;
                                    }
                                    case m.RAW_FUNCTION_RESULT: {
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
                            const s = [m.SUMMARY, m.DECISION, m.RAW_FUNCTION_RESULT];
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
                                e && this.steps.push({ id: r().v4(), state: h.COMPLETED, header: c, subSteps: [], isCompleteHeader: !0 }),
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserAvatar-85c3578f.6cfce5fa.js.map

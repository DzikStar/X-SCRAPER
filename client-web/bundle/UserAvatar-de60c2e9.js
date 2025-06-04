"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserAvatar-de60c2e9"],
    {
        666670: (e, s, t) => {
            t.d(s, { F: () => n });
            var a = t(516951),
                i = t(615656),
                o = t(51525);
            const n = { [i.ZP.AddressBookLookupNotFound]: { customAction: o.vv }, [i.ZP.GenericUserNotFound]: { customAction: a.Z }, [i.ZP.OtherUserSuspended]: { customAction: a.Z }, showToast: !0 };
        },
        965728: (e, s, t) => {
            t.d(s, { C_: () => b, I5: () => p, K2: () => S, L$: () => c, Rb: () => l, nk: () => g, sI: () => _, xr: () => T });
            var a = t(202784),
                i = t(483677),
                o = t(782578),
                n = t(393058),
                r = t(521514);
            const u = (e, s) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${s})`,
                c = (e) => {
                    const s = e && i.Z.getForGallery(e);
                    return s ? { rgb: T(s), rgba: u(s, 0.9) } : m;
                },
                d = r.Z.columnWidths.primary,
                h = (e, s) => Math.min(s, e),
                m = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                g = { transitionProperty: "background-color", transitionDuration: ".5s" },
                p = (e, s) => {
                    const { containerHeight: t, containerWidth: a, mediaHeight: i, mediaWidth: n } = e,
                        r = n && i ? n / i : 1,
                        u = r > 1,
                        c = s ? 400 : d,
                        m = u && (!n || n <= c) ? h(a, c) : a,
                        g = u || (i && !(i <= c)) ? t : h(t, c);
                    return o.Z.getContainDimensions({ width: m, height: g }, r);
                },
                l = (e) => {
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
                _ = () => {
                    const [e, s] = a.useReducer(I, { isZoomed: !1, showControls: !0 });
                    return {
                        hideButtons: e.isZoomed || !e.showControls,
                        handleMediaDetailZoomed: function (e) {
                            s({ type: "zoom", payload: { isZoomed: e } });
                        },
                        handleMediaItemTapped: function () {
                            n.Z.isTouchSupported() && s({ type: "tap" });
                        },
                    };
                };
        },
        397159: (e, s, t) => {
            t.d(s, { Fi: () => h, fQ: () => I, iS: () => d });
            t(136728), t(574858), t(543673), t(240753), t(128399);
            var a = t(468811),
                i = t.n(a),
                o = t(111677),
                n = t.n(o),
                r = t(123702);
            const u = n().c3f04d9c,
                c = n().cbdddb0a,
                d = { HEADER: "header", ASSISTANT: "assistant", DECISION: "decision", RAW_FUNCTION_RESULT: "raw_function_result", FUNCTION: "function", SUMMARY: "summary", FINAL: "final", SOFT_STOP: "softstop", FINAL_LONG: "final_long" },
                h = { IN_PROGRESS: "IN_PROGRESS", COMPLETED: "COMPLETED", FAILED: "FAILED" },
                m = n().e98cc293,
                g = n().b0d1e205,
                p = n().i2e0f4d7,
                l = n().acb9b845,
                S = n().ef261d8d,
                b = n().f7d9cfb9,
                T = n().bec7eb11;
            class I {
                constructor(e) {
                    (this.initiateFromHistoryResponses = (e, s = !1) => {
                        this.lastStreamedDataTimestamp = Date.now();
                        for (const s of e) {
                            const e = { id: i().v4(), state: h.COMPLETED, header: s.header || u, subSteps: [] };
                            for (let t = 0; t < s.steps.length; t++) {
                                const a = s.steps[t];
                                this.addWebResults(a.webResults || []), this.addXPostIds(a.xPostIds || []);
                                let i = 0;
                                if ((a.assistant && ((this.accumulatedTrace += a.assistant), (this.traceEnabled = !0)), a.summary && (e.subSteps.push({ messageStepId: t + i, messageTag: d.SUMMARY, summary: a.summary }), i++), a.decision)) {
                                    const s = this.parseMessageJSON(a.decision),
                                        { markdown: o, text: n } = this.getContentForDecisionAction(s);
                                    e.subSteps.push({ messageStepId: t + i, messageTag: d.DECISION, actionIcon: this.getIconForDecisionAction(s), actionType: s?.action, actionMarkdownSummary: o, actionSummary: n, actionWebResult: this.webResults.find((e) => e.url === s?.action_input?.url), actionState: "COMPLETED", webResults: a.webResults, xPostIds: a.xPostIds }), i++;
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
                                t = e.messageTag === d.HEADER,
                                a = t || this.steps.length <= 0;
                            if ((this.addDebugMessageTagCount(e.messageTag), (this.lastStreamedDataTimestamp = Date.now()), "PENDING" === this.state && ((this.streamStartTimestamp = Date.now()), (this.state = "STARTED")), a)) {
                                const a = { id: i().v4(), state: "COMPLETED" === this.state ? h.COMPLETED : h.IN_PROGRESS, header: t ? e.message : u, subSteps: [] };
                                if (t) {
                                    if (1 === this.steps.length && this.steps[0].header === u) return void (this.steps = [{ ...this.steps[0], header: a.header }]);
                                    this.steps = [...this.steps, a];
                                } else e.messageTag === d.ASSISTANT && ((this.accumulatedTrace += e.message), (this.traceEnabled = !0), (this.steps = [...this.steps, a]));
                                return void (s >= 0 && this.completeStep(s));
                            }
                            const o = this.steps[s],
                                n = o.subSteps.findLastIndex((s) => (e.messageTag === d.RAW_FUNCTION_RESULT ? s.messageStepId === e.messageStepId && (s.messageTag === e.messageTag || s.messageTag === d.DECISION) : s.messageStepId === e.messageStepId && s.messageTag === e.messageTag)),
                                c = n > -1 ? o.subSteps[n] : void 0;
                            let m = !1;
                            if (c) {
                                switch (e.messageTag) {
                                    case d.ASSISTANT:
                                        (this.accumulatedTrace += e.message), (this.traceEnabled = !0);
                                        break;
                                    case d.SUMMARY:
                                        (c.summary = (c.summary || "") + e.message), (c.bulletPoints = [...(c.bulletPoints || []), (0, r.K)(e.message)]), (m = !0), (this.accumulatedSummary += e.message);
                                        break;
                                    case d.DECISION: {
                                        const s = this.parseMessageJSON(e.message),
                                            { markdown: t, text: a } = this.getContentForDecisionAction(s);
                                        (c.actionIcon = this.getIconForDecisionAction(s)), (c.actionType = s?.action), (c.actionSummary = a), (c.actionMarkdownSummary = t), (m = !0);
                                        break;
                                    }
                                    case d.RAW_FUNCTION_RESULT:
                                        if (!((e.webResults && e.webResults.length) || (e.xPostIds && e.xPostIds.length))) break;
                                        e.webResults && ((c.webResults = e.webResults), this.addWebResults(e.webResults || [])), e.xPostIds && ((c.xPostIds = e.xPostIds), this.addXPostIds(e.xPostIds || [])), c.actionState, (m = !0);
                                }
                                m && ((o.subSteps[n] = { ...c }), (o.subSteps = [...o.subSteps]));
                            } else {
                                let s = null;
                                switch (e.messageTag) {
                                    case d.ASSISTANT:
                                        (this.accumulatedTrace += e.message), (this.traceEnabled = !0);
                                        break;
                                    case d.SUMMARY:
                                        s = { messageStepId: e.messageStepId, messageTag: e.messageTag, summary: e.message };
                                        break;
                                    case d.DECISION: {
                                        const t = this.parseMessageJSON(e.message),
                                            { markdown: a, text: i } = this.getContentForDecisionAction(t);
                                        s = { messageStepId: e.messageStepId, messageTag: e.messageTag, actionIcon: this.getIconForDecisionAction(t), actionType: t?.action, actionSummary: i, actionMarkdownSummary: a, actionWebResult: this.webResults.find((e) => e.url === t?.action_input?.url), actionState: "STARTED" };
                                        break;
                                    }
                                    case d.RAW_FUNCTION_RESULT: {
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
                            const s = [d.SUMMARY, d.DECISION, d.RAW_FUNCTION_RESULT];
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
                                if (e.action_input?.query) return { text: b({ username: e.action_input?.username, query: e.action_input?.query }), markdown: T({ username: e.action_input?.username, query: e.action_input?.query }) };
                                const s = S({ username: e.action_input?.username });
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
                                    return { text: p({ url: t, query: e.action_input?.query }), markdown: l({ url: a, query: e.action_input?.query }) };
                                }
                                return { text: m({ query: e.action_input?.query }), markdown: g({ query: e.action_input?.query }) };
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
                                e && this.steps.push({ id: i().v4(), state: h.COMPLETED, header: c, subSteps: [], isCompleteHeader: !0 }),
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserAvatar-de60c2e9.592ce56a.js.map

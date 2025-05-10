"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserAvatar-8ed0fac5"],
    {
        965728: (e, t, s) => {
            s.d(t, { C_: () => b, I5: () => g, K2: () => S, L$: () => u, Rb: () => l, nk: () => p, sI: () => _, xr: () => T });
            var a = s(202784),
                i = s(483677),
                o = s(782578),
                n = s(393058),
                r = s(521514);
            const c = (e, t) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${t})`,
                u = (e) => {
                    const t = e && i.Z.getForGallery(e);
                    return t ? { rgb: T(t), rgba: c(t, 0.9) } : h;
                },
                d = r.Z.columnWidths.primary,
                m = (e, t) => Math.min(t, e),
                h = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                p = { transitionProperty: "background-color", transitionDuration: ".5s" },
                g = (e, t) => {
                    const { containerHeight: s, containerWidth: a, mediaHeight: i, mediaWidth: n } = e,
                        r = n && i ? n / i : 1,
                        c = r > 1,
                        u = t ? 400 : d,
                        h = c && n <= u ? m(a, u) : a,
                        p = !c && i <= u ? m(s, u) : s;
                    return o.Z.getContainDimensions({ width: h, height: p }, r);
                },
                l = (e) => {
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
                            return { ...e, isZoomed: t.payload?.isZoomed, showControls: !t.payload?.isZoomed };
                        case "tap":
                            return { ...e, showControls: !e.showControls };
                        default:
                            return e;
                    }
                },
                _ = () => {
                    const [e, t] = a.useReducer(I, { isZoomed: !1, showControls: !0 });
                    return {
                        hideButtons: e.isZoomed || !e.showControls,
                        handleMediaDetailZoomed: function (e) {
                            t({ type: "zoom", payload: { isZoomed: e } });
                        },
                        handleMediaItemTapped: function () {
                            n.Z.isTouchSupported() && t({ type: "tap" });
                        },
                    };
                };
        },
        397159: (e, t, s) => {
            s.d(t, { Fi: () => m, fQ: () => I, iS: () => d });
            s(136728), s(574858), s(543673), s(240753), s(128399);
            var a = s(468811),
                i = s.n(a),
                o = s(674132),
                n = s.n(o),
                r = s(123702);
            const c = n().c3f04d9c,
                u = n().cbdddb0a,
                d = { HEADER: "header", ASSISTANT: "assistant", DECISION: "decision", RAW_FUNCTION_RESULT: "raw_function_result", FUNCTION: "function", SUMMARY: "summary", FINAL: "final", SOFT_STOP: "softstop", FINAL_LONG: "final_long" },
                m = { IN_PROGRESS: "IN_PROGRESS", COMPLETED: "COMPLETED", FAILED: "FAILED" },
                h = n().e98cc293,
                p = n().b0d1e205,
                g = n().i2e0f4d7,
                l = n().acb9b845,
                S = n().ef261d8d,
                b = n().f7d9cfb9,
                T = n().bec7eb11;
            class I {
                constructor(e) {
                    (this.initiateFromHistoryResponses = (e, t = !1) => {
                        this.lastStreamedDataTimestamp = Date.now();
                        for (const t of e) {
                            const e = { id: i().v4(), state: m.COMPLETED, header: t.header || c, subSteps: [] };
                            for (let s = 0; s < t.steps.length; s++) {
                                const a = t.steps[s];
                                this.addWebResults(a.webResults || []), this.addXPostIds(a.xPostIds || []);
                                let i = 0;
                                if ((a.assistant && ((this.accumulatedTrace += a.assistant), (this.traceEnabled = !0)), a.summary && (e.subSteps.push({ messageStepId: s + i, messageTag: d.SUMMARY, summary: a.summary }), i++), a.decision)) {
                                    const t = this.parseMessageJSON(a.decision),
                                        { markdown: o, text: n } = this.getContentForDecisionAction(t);
                                    e.subSteps.push({ messageStepId: s + i, messageTag: d.DECISION, actionIcon: this.getIconForDecisionAction(t), actionType: t?.action, actionMarkdownSummary: o, actionSummary: n, actionWebResult: this.webResults.find((e) => e.url === t?.action_input?.url), actionState: "COMPLETED", webResults: a.webResults, xPostIds: a.xPostIds }), i++;
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
                            const t = this.steps.length - 1,
                                s = e.messageTag === d.HEADER,
                                a = s || this.steps.length <= 0;
                            if ((this.addDebugMessageTagCount(e.messageTag), (this.lastStreamedDataTimestamp = Date.now()), "PENDING" === this.state && ((this.streamStartTimestamp = Date.now()), (this.state = "STARTED")), a)) {
                                const a = { id: i().v4(), state: "COMPLETED" === this.state ? m.COMPLETED : m.IN_PROGRESS, header: s ? e.message : c, subSteps: [] };
                                if (s) {
                                    if (1 === this.steps.length && this.steps[0].header === c) return void (this.steps = [{ ...this.steps[0], header: a.header }]);
                                    this.steps = [...this.steps, a];
                                } else e.messageTag === d.ASSISTANT && ((this.accumulatedTrace += e.message), (this.traceEnabled = !0), (this.steps = [...this.steps, a]));
                                return void (t >= 0 && this.completeStep(t));
                            }
                            const o = this.steps[t],
                                n = o.subSteps.findLastIndex((t) => (e.messageTag === d.RAW_FUNCTION_RESULT ? t.messageStepId === e.messageStepId && (t.messageTag === e.messageTag || t.messageTag === d.DECISION) : t.messageStepId === e.messageStepId && t.messageTag === e.messageTag)),
                                u = n > -1 ? o.subSteps[n] : void 0;
                            let h = !1;
                            if (u) {
                                switch (e.messageTag) {
                                    case d.ASSISTANT:
                                        (this.accumulatedTrace += e.message), (this.traceEnabled = !0);
                                        break;
                                    case d.SUMMARY:
                                        (u.summary = (u.summary || "") + e.message), (u.bulletPoints = [...(u.bulletPoints || []), (0, r.K)(e.message)]), (h = !0), (this.accumulatedSummary += e.message);
                                        break;
                                    case d.DECISION: {
                                        const t = this.parseMessageJSON(e.message),
                                            { markdown: s, text: a } = this.getContentForDecisionAction(t);
                                        (u.actionIcon = this.getIconForDecisionAction(t)), (u.actionType = t?.action), (u.actionSummary = a), (u.actionMarkdownSummary = s), (h = !0);
                                        break;
                                    }
                                    case d.RAW_FUNCTION_RESULT:
                                        if (!((e.webResults && e.webResults.length) || (e.xPostIds && e.xPostIds.length))) break;
                                        e.webResults && ((u.webResults = e.webResults), this.addWebResults(e.webResults || [])), e.xPostIds && ((u.xPostIds = e.xPostIds), this.addXPostIds(e.xPostIds || [])), u.actionState, (h = !0);
                                }
                                h && ((o.subSteps[n] = { ...u }), (o.subSteps = [...o.subSteps]));
                            } else {
                                let t = null;
                                switch (e.messageTag) {
                                    case d.ASSISTANT:
                                        (this.accumulatedTrace += e.message), (this.traceEnabled = !0);
                                        break;
                                    case d.SUMMARY:
                                        t = { messageStepId: e.messageStepId, messageTag: e.messageTag, summary: e.message };
                                        break;
                                    case d.DECISION: {
                                        const s = this.parseMessageJSON(e.message),
                                            { markdown: a, text: i } = this.getContentForDecisionAction(s);
                                        t = { messageStepId: e.messageStepId, messageTag: e.messageTag, actionIcon: this.getIconForDecisionAction(s), actionType: s?.action, actionSummary: i, actionMarkdownSummary: a, actionWebResult: this.webResults.find((e) => e.url === s?.action_input?.url), actionState: "STARTED" };
                                        break;
                                    }
                                    case d.RAW_FUNCTION_RESULT: {
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
                            const t = [d.SUMMARY, d.DECISION, d.RAW_FUNCTION_RESULT];
                            return e.sort((e, s) => (e.messageStepId !== s.messageStepId ? e.messageStepId - s.messageStepId : t.indexOf(e.messageTag) - t.indexOf(s.messageTag)));
                        }),
                        (this.completeStep = (e) => {
                            this.steps[e].state = m.COMPLETED;
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
                                const t = S({ username: e.action_input?.username });
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
                                    return { text: g({ url: s, query: e.action_input?.query }), markdown: l({ url: a, query: e.action_input?.query }) };
                                }
                                return { text: h({ query: e.action_input?.query }), markdown: p({ query: e.action_input?.query }) };
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
                                    (e.state = m.COMPLETED),
                                        e.subSteps.forEach((e) => {
                                            e.actionState = "COMPLETED";
                                        });
                                }),
                                e && this.steps.push({ id: i().v4(), state: m.COMPLETED, header: u, subSteps: [], isCompleteHeader: !0 }),
                                (this.steps = [...this.steps]));
                        }),
                        (this.onAbort = () => {
                            for (let e = 0; e < this.steps.length; e++)
                                this.steps[e].state === m.IN_PROGRESS && (this.steps[e].state = m.FAILED),
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
        806528: (e, t, s) => {
            s.d(t, { Bz: () => u, ZW: () => g, ey: () => m, fw: () => r, iG: () => p, wM: () => c });
            var a = s(499627),
                i = s(341276);
            const o = "geoLocation",
                n = Object.freeze({ permissionStatus: void 0, position: void 0 });
            const r = (e) => e[o],
                c = (e) => e[o].permissionStatus,
                u = (e) => e[o].position,
                d = "rweb/geoLocation/SET_PERMISSION_STATUS",
                m = (e) => ({ payload: e, type: d }),
                h = "rweb/geoLocation/SET_POSITION",
                p = () => (e, t) =>
                    l()
                        .then((t) => e({ payload: t, type: h }))
                        .catch((t) => (e(m(i.S.denied)), Promise.reject(t))),
                g = () => (e, t) => (u(t()) ? Promise.resolve() : e(p())),
                l = () =>
                    new Promise((e, t) =>
                        navigator.geolocation.getCurrentPosition((t) => {
                            const s = { timestamp: t.timestamp, coords: { latitude: t.coords.latitude, longitude: t.coords.longitude, altitude: t.coords.altitude, accuracy: t.coords.accuracy, altitudeAccuracy: t.coords.altitudeAccuracy, heading: t.coords.heading, speed: t.coords.speed } };
                            return e(s);
                        }, t),
                    );
            a.Z.register({
                [o]: function (e = n, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case d:
                            return { ...e, permissionStatus: t.payload };
                        case h:
                            return { ...e, position: t.payload };
                        default:
                            return e;
                    }
                },
            });
        },
        341276: (e, t, s) => {
            s.d(t, { M: () => i, S: () => a });
            const a = Object.freeze({ granted: "granted", denied: "denied", prompt: "prompt" }),
                i = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserAvatar-8ed0fac5.632ae80a.js.map

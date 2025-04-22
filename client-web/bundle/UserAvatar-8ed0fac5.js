"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserAvatar-8ed0fac5"],
    {
        303157: (e, s, t) => {
            t.d(s, { Fi: () => d, Fk: () => l, iS: () => u });
            t(136728), t(574858), t(543673), t(240753), t(128399);
            var a = t(468811),
                i = t.n(a),
                o = t(674132),
                n = t.n(o);
            const r = n().c3f04d9c,
                c = n().cbdddb0a,
                u = { HEADER: "header", ASSISTANT: "assistant", DECISION: "decision", RAW_FUNCTION_RESULT: "raw_function_result", FUNCTION: "function", SUMMARY: "summary", FINAL: "final", SOFT_STOP: "softstop", FINAL_LONG: "final_long" },
                d = { IN_PROGRESS: "IN_PROGRESS", COMPLETED: "COMPLETED", FAILED: "FAILED" },
                h = n().b0d1e205,
                m = n().acb9b845,
                p = n().ef261d8d,
                g = n().bec7eb11;
            class l {
                constructor(e) {
                    (this.initiateFromHistoryResponses = (e, s = !1) => {
                        this.lastStreamedDataTimestamp = Date.now();
                        for (const s of e) {
                            const e = { id: i().v4(), state: d.COMPLETED, header: s.header || r, subSteps: [] };
                            for (let t = 0; t < s.steps.length; t++) {
                                const a = s.steps[t];
                                this.addWebResults(a.webResults || []), this.addXPostIds(a.xPostIds || []);
                                let i = 0;
                                if ((a.assistant && ((this.accumulatedTrace += a.assistant), (this.traceEnabled = !0)), a.summary && (e.subSteps.push({ messageStepId: t + i, messageTag: u.SUMMARY, summary: a.summary }), i++), a.decision)) {
                                    const s = this.parseMessageJSON(a.decision);
                                    e.subSteps.push({ messageStepId: t + i, messageTag: u.DECISION, actionIcon: this.getIconForDecisionAction(s), actionType: s?.action, actionSummary: this.getContentForDecisionAction(s), actionWebResult: this.webResults.find((e) => e.url === s?.action_input?.url), actionState: "COMPLETED", webResults: a.webResults, xPostIds: a.xPostIds }), i++;
                                }
                            }
                            this.steps.push(e);
                        }
                        s || ((this.isPastSummary = !0), (this.state = "COMPLETED"));
                    }),
                        (this.addDebugMessageTagCount = (e) => {
                            e && (this.debugMessageTagCount[e] || (this.debugMessageTagCount[e] = 0), this.debugMessageTagCount[e]++);
                        }),
                        (this.updateStepsFromRawMessage = (e) => {
                            const s = this.steps.length - 1,
                                t = e.messageTag === u.HEADER,
                                a = t || this.steps.length <= 0;
                            if ((this.addDebugMessageTagCount(e.messageTag), (this.lastStreamedDataTimestamp = Date.now()), "PENDING" === this.state && ((this.streamStartTimestamp = Date.now()), (this.state = "STARTED")), a)) {
                                const a = { id: i().v4(), state: d.IN_PROGRESS, header: t ? e.message : r, subSteps: [] };
                                if (t) {
                                    if (1 === this.steps.length && this.steps[0].header === r) return void (this.steps = [{ ...this.steps[0], header: a.header }]);
                                    this.steps = [...this.steps, a];
                                } else e.messageTag === u.ASSISTANT && ((this.accumulatedTrace += e.message), (this.traceEnabled = !0), (this.steps = [...this.steps, a]));
                                return void (s >= 0 && this.completeStep(s));
                            }
                            const o = this.steps[s],
                                n = o.subSteps.findLastIndex((s) => (e.messageTag === u.RAW_FUNCTION_RESULT ? s.messageStepId === e.messageStepId && (s.messageTag === e.messageTag || s.messageTag === u.DECISION) : s.messageStepId === e.messageStepId && s.messageTag === e.messageTag)),
                                c = n > -1 ? o.subSteps[n] : void 0;
                            let h = !1;
                            if (c) {
                                switch (e.messageTag) {
                                    case u.ASSISTANT:
                                        (this.accumulatedTrace += e.message), (this.traceEnabled = !0);
                                        break;
                                    case u.SUMMARY:
                                        (c.summary = (c.summary || "") + e.message), (h = !0), (this.accumulatedSummary += e.message);
                                        break;
                                    case u.DECISION: {
                                        const s = this.parseMessageJSON(e.message);
                                        (c.actionIcon = this.getIconForDecisionAction(s)), (c.actionType = s?.action), (c.actionSummary = this.getContentForDecisionAction(s)), (h = !0);
                                        break;
                                    }
                                    case u.RAW_FUNCTION_RESULT:
                                        if (!((e.webResults && e.webResults.length) || (e.xPostIds && e.xPostIds.length))) break;
                                        e.webResults && ((c.webResults = e.webResults), this.addWebResults(e.webResults || [])), e.xPostIds && ((c.xPostIds = e.xPostIds), this.addXPostIds(e.xPostIds || [])), c.actionState, (h = !0);
                                }
                                h && ((o.subSteps[n] = { ...c }), (o.subSteps = [...o.subSteps]));
                            } else {
                                let s = null;
                                switch (e.messageTag) {
                                    case u.ASSISTANT:
                                        (this.accumulatedTrace += e.message), (this.traceEnabled = !0);
                                        break;
                                    case u.SUMMARY:
                                        s = { messageStepId: e.messageStepId, messageTag: e.messageTag, summary: e.message };
                                        break;
                                    case u.DECISION: {
                                        const t = this.parseMessageJSON(e.message);
                                        s = { messageStepId: e.messageStepId, messageTag: e.messageTag, actionIcon: this.getIconForDecisionAction(t), actionType: t?.action, actionSummary: this.getContentForDecisionAction(t), actionWebResult: this.webResults.find((e) => e.url === t?.action_input?.url), actionState: "STARTED" };
                                        break;
                                    }
                                    case u.RAW_FUNCTION_RESULT: {
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
                            const s = [u.SUMMARY, u.DECISION, u.RAW_FUNCTION_RESULT];
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
                            if (!e) return "";
                            if (e.action_input?.username) return e.action_input?.query ? g({ username: e.action_input?.username, query: e.action_input?.query }) : p({ username: e.action_input?.username });
                            if (e.action_input?.query) {
                                if (e.action_input?.url) {
                                    let s = e.action_input?.url;
                                    "x.com" === s && (s = "https://x.com");
                                    let t = "";
                                    try {
                                        let e = new URL(s).hostname;
                                        e.startsWith("www.") && (e = e.replace("www.", "")), (t = `[${e}](${s})`);
                                    } catch (e) {
                                        t = s;
                                    }
                                    return m({ url: t, query: e.action_input?.query });
                                }
                                return h({ query: e.action_input.query });
                            }
                            return "";
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
                        (this.complete = () => {
                            "COMPLETED" !== this.state &&
                                ((this.streamCompletedTimestamp = Date.now()),
                                (this.state = "COMPLETED"),
                                this.steps.forEach((e) => {
                                    (e.state = d.COMPLETED),
                                        e.subSteps.forEach((e) => {
                                            e.actionState = "COMPLETED";
                                        });
                                }),
                                this.steps.push({ id: i().v4(), state: d.COMPLETED, header: c, subSteps: [], isCompleteHeader: !0 }),
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
                        (this.deepsearchArgs = e || null);
                }
            }
        },
        965728: (e, s, t) => {
            t.d(s, { C_: () => b, I5: () => g, K2: () => S, L$: () => u, Rb: () => l, nk: () => p, sI: () => _, xr: () => T });
            var a = t(202784),
                i = t(483677),
                o = t(782578),
                n = t(393058),
                r = t(521514);
            const c = (e, s) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${s})`,
                u = (e) => {
                    const s = e && i.Z.getForGallery(e);
                    return s ? { rgb: T(s), rgba: c(s, 0.9) } : m;
                },
                d = r.Z.columnWidths.primary,
                h = (e, s) => Math.min(s, e),
                m = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                p = { transitionProperty: "background-color", transitionDuration: ".5s" },
                g = (e, s) => {
                    const { containerHeight: t, containerWidth: a, mediaHeight: i, mediaWidth: n } = e,
                        r = n && i ? n / i : 1,
                        c = r > 1,
                        u = s ? 400 : d,
                        m = c && n <= u ? h(a, u) : a,
                        p = !c && i <= u ? h(t, u) : t;
                    return o.Z.getContainDimensions({ width: m, height: p }, r);
                },
                l = (e) => {
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
                            return { ...e, isZoomed: s.payload?.isZoomed, showControls: !s.payload?.isZoomed };
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
        806528: (e, s, t) => {
            t.d(s, { Bz: () => u, ZW: () => g, ey: () => h, fw: () => r, iG: () => p, wM: () => c });
            var a = t(499627),
                i = t(341276);
            const o = "geoLocation",
                n = Object.freeze({ permissionStatus: void 0, position: void 0 });
            const r = (e) => e[o],
                c = (e) => e[o].permissionStatus,
                u = (e) => e[o].position,
                d = "rweb/geoLocation/SET_PERMISSION_STATUS",
                h = (e) => ({ payload: e, type: d }),
                m = "rweb/geoLocation/SET_POSITION",
                p = () => (e, s) =>
                    l()
                        .then((s) => e({ payload: s, type: m }))
                        .catch((s) => (e(h(i.S.denied)), Promise.reject(s))),
                g = () => (e, s) => (u(s()) ? Promise.resolve() : e(p())),
                l = () =>
                    new Promise((e, s) =>
                        navigator.geolocation.getCurrentPosition((s) => {
                            const t = { timestamp: s.timestamp, coords: { latitude: s.coords.latitude, longitude: s.coords.longitude, altitude: s.coords.altitude, accuracy: s.coords.accuracy, altitudeAccuracy: s.coords.altitudeAccuracy, heading: s.coords.heading, speed: s.coords.speed } };
                            return e(t);
                        }, s),
                    );
            a.Z.register({
                [o]: function (e = n, s) {
                    if (!s) return e;
                    switch (s.type) {
                        case d:
                            return { ...e, permissionStatus: s.payload };
                        case m:
                            return { ...e, position: s.payload };
                        default:
                            return e;
                    }
                },
            });
        },
        341276: (e, s, t) => {
            t.d(s, { M: () => i, S: () => a });
            const a = Object.freeze({ granted: "granted", denied: "denied", prompt: "prompt" }),
                i = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserAvatar-8ed0fac5.91daac1a.js.map

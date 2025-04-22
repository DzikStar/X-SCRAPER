"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DirectMessages-fb4ffec0"],
    {
        303157: (e, s, t) => {
            t.d(s, { Fi: () => d, Fk: () => g, iS: () => u });
            t(136728), t(574858), t(543673), t(240753), t(128399);
            var a = t(468811),
                i = t.n(a),
                n = t(674132),
                o = t.n(n);
            const r = o().c3f04d9c,
                c = o().cbdddb0a,
                u = { HEADER: "header", ASSISTANT: "assistant", DECISION: "decision", RAW_FUNCTION_RESULT: "raw_function_result", FUNCTION: "function", SUMMARY: "summary", FINAL: "final", SOFT_STOP: "softstop", FINAL_LONG: "final_long" },
                d = { IN_PROGRESS: "IN_PROGRESS", COMPLETED: "COMPLETED", FAILED: "FAILED" },
                h = o().b0d1e205,
                m = o().acb9b845,
                l = o().ef261d8d,
                p = o().bec7eb11;
            class g {
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
                            const n = this.steps[s],
                                o = n.subSteps.findLastIndex((s) => (e.messageTag === u.RAW_FUNCTION_RESULT ? s.messageStepId === e.messageStepId && (s.messageTag === e.messageTag || s.messageTag === u.DECISION) : s.messageStepId === e.messageStepId && s.messageTag === e.messageTag)),
                                c = o > -1 ? n.subSteps[o] : void 0;
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
                                h && ((n.subSteps[o] = { ...c }), (n.subSteps = [...n.subSteps]));
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
                                    const e = [...n.subSteps];
                                    for (const s of e) s.actionState = "COMPLETED";
                                    (n.subSteps = [...e, s]), (n.subSteps = this.sortSubstepsByStepIdMessageTag(n.subSteps)), (this.steps = [...this.steps]);
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
                            if (e.action_input?.username) return e.action_input?.query ? p({ username: e.action_input?.username, query: e.action_input?.query }) : l({ username: e.action_input?.username });
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
        778729: (e, s, t) => {
            t.d(s, { Z: () => i });
            var a = t(103335);
            const i = (e, s) => `e${(0, a.Z)(e, s)}`;
        },
        943245: (e, s, t) => {
            t.d(s, { It: () => d, mD: () => u, sE: () => r });
            var a = t(899492),
                i = t(733357);
            const n = ["da", "de", "en", "en-gb", "es", "et", "eu", "fi", "fil", "fr", "ga", "gl", "ht", "hu", "id", "it", "lt", "lv", "nl", "no", "ms", "pl", "pt", "sk", "sl", "sv", "tr", "vi"],
                o = { "en-gb": "en", "en-ss": "en", fil: "tl", he: "iw", id: "in", msa: "ms", "xx-lc": "en" },
                r = (e) => {
                    const s = e.toLowerCase();
                    return o[s] || s;
                },
                c = (e, s) => {
                    const t = r(e);
                    return !(n.indexOf(t) > -1 && s < 20) && !("und" === e);
                },
                u = ({ displayTextRange: e, entities: s, language: t, text: n }) => {
                    if (!e || !c(t, e[1] - e[0])) return !1;
                    const o = ((e, s) => {
                            let t = a.Z.getTwemojiEntities(e).map((e) => e.indices);
                            for (const e in s) t = t.concat(s[e].map((e) => e.indices));
                            return t.sort((e, s) => e[0] - s[0]), t;
                        })(n, s),
                        r = ((e, s, t) => {
                            const { accText: a, lastIndex: i } = t.reduce(({ accText: t, lastIndex: a }, i) => (i[1] <= a || s[1] <= i[0] ? { lastIndex: a, accText: t } : { accText: t + e.slice(a, i[0]), lastIndex: i[1] }), { accText: "", lastIndex: s[0] });
                            return a + e.slice(i, s[1]);
                        })(n, e, o);
                    return !(0, i.Z)(r) && c(t, r.length);
                },
                d = (e) => {
                    if (e.includes("-")) return e;
                    if (navigator.language && navigator.language.startsWith(e)) return navigator.language;
                    if (window.Intl && window.Intl.Locale) {
                        const { region: s } = new window.Intl.Locale(e).maximize();
                        return `${e}-${s}`;
                    }
                    return "ar" === e ? "ar-EG" : e;
                };
        },
        552378: (e, s, t) => {
            t.d(s, { C: () => o });
            var a = t(807896),
                i = t(202784);
            class n extends i.Component {
                constructor(...e) {
                    super(...e), (this.state = { isLoaded: !1 });
                }
                componentDidMount() {
                    return (this._isMounted = !0), this.load();
                }
                componentDidUpdate(e) {
                    return this.props.modules === e.modules ? null : this.load();
                }
                componentWillUnmount() {
                    this._isMounted = !1;
                }
                load() {
                    this.setState({ isLoaded: !1 });
                    const { modules: e } = this.props,
                        s = Object.keys(e);
                    return Promise.all(s.map((s) => e[s]()))
                        .then((e) => s.reduce((s, t, a) => ((s[t] = e[a]), s), {}))
                        .then((e) => {
                            if (!this._isMounted) return null;
                            this.setState({ modules: e, isLoaded: !0 });
                        });
                }
                render() {
                    const { isLoaded: e } = this.state,
                        s = e ? this.state.modules : {};
                    return i.Children.only(this.props.children(s || {}));
                }
            }
            const o = (e, s) => (t) => i.createElement(n, { modules: s }, (s) => i.createElement(e, (0, a.Z)({}, s, t)));
        },
        880655: (e, s, t) => {
            t.d(s, { i: () => p, w: () => g });
            t(136728);
            var a = t(548102),
                i = t.n(a),
                n = t(817480),
                o = t(166852),
                r = t(662678),
                c = t(339110),
                u = t(275365),
                d = t(17243),
                h = t(234296),
                m = t(198506);
            const l = (e) => ({ data: { name: e.name || "", conversationId: e.conversation_id }, id: e.conversation_id, type: c.El.DMConversation }),
                p = (e, s, t, a = !1) => {
                    const r = e && new RegExp(`(^|.*\\s)${i()(e)}.*`, "i"),
                        u = ((e, s) => (0, n.Z)(e.map((e) => (0, m.Z)(e, s).map((e) => e.user))))(s.sort(h.Z), t)
                            .filter((e) => (!r || r.test(e.screen_name) || r.test(e.name)) && (e.followed_by || a))
                            .map((e) => (0, d.z4)(e, c.vA.DMInjected));
                    return (0, o.Z)(u, (e) => e.id);
                };
            function g(e, s, t, a) {
                const d = e && new RegExp(`(^|.*\\s)${i()(e)}.*`, "i"),
                    g = s
                        .filter((e) => e.trusted)
                        .filter((s) => {
                            if (!e) return !0;
                            const a = d && s.name && d.test(s.name),
                                i = (0, m.Z)(s, t).map((e) => e.user),
                                n = d && i.some((e) => d.test(e.screen_name) || d.test(e.name));
                            return a || n;
                        })
                        .sort(h.Z);
                let S = g;
                if (e) {
                    const [e, s] = (0, r.Z)(g, (e) => e.type === u.eD.ONE_TO_ONE);
                    S = e.concat(s);
                }
                return (
                    (T = (0, n.Z)(
                        S.map((s) => {
                            const i = s.type === u.eD.GROUP;
                            let n = [];
                            return (i && a) || (i && n.push(l(s)), (!e && i) || (n = n.concat(p(i ? e : null, [s], t, !i)))), n;
                        }),
                    )),
                    (0, o.Z)(T, ({ id: e, type: s }) => (s === c.El.DMConversation ? `c_${e}` : `u_${e}`))
                );
                var T;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DirectMessages-fb4ffec0.50943ffa.js.map

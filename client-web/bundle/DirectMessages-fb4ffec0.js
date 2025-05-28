"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DirectMessages-fb4ffec0"],
    {
        778729: (e, t, s) => {
            s.d(t, { Z: () => i });
            var a = s(103335);
            const i = (e, t) => `e${(0, a.Z)(e, t)}`;
        },
        943245: (e, t, s) => {
            s.d(t, { It: () => d, mD: () => c, sE: () => o });
            var a = s(899492),
                i = s(733357);
            const n = ["da", "de", "en", "en-gb", "es", "et", "eu", "fi", "fil", "fr", "ga", "gl", "ht", "hu", "id", "it", "lt", "lv", "nl", "no", "ms", "pl", "pt", "sk", "sl", "sv", "tr", "vi"],
                r = { "en-gb": "en", "en-ss": "en", fil: "tl", he: "iw", id: "in", msa: "ms", "xx-lc": "en" },
                o = (e) => {
                    const t = e.toLowerCase();
                    return r[t] || t;
                },
                u = (e, t) => {
                    const s = o(e);
                    return !(n.indexOf(s) > -1 && t < 20) && !("und" === e);
                },
                c = ({ displayTextRange: e, entities: t, language: s, text: n }) => {
                    if (!e || !u(s, e[1] - e[0])) return !1;
                    const r = ((e, t) => {
                            let s = a.Z.getTwemojiEntities(e).map((e) => e.indices);
                            for (const e in t) s = s.concat(t[e].map((e) => e.indices));
                            return s.sort((e, t) => e[0] - t[0]), s;
                        })(n, t),
                        o = ((e, t, s) => {
                            const { accText: a, lastIndex: i } = s.reduce(({ accText: s, lastIndex: a }, i) => (i[1] <= a || t[1] <= i[0] ? { lastIndex: a, accText: s } : { accText: s + e.slice(a, i[0]), lastIndex: i[1] }), { accText: "", lastIndex: t[0] });
                            return a + e.slice(i, t[1]);
                        })(n, e, r);
                    return !(0, i.Z)(o) && u(s, o.length);
                },
                d = (e) => {
                    if (e.includes("-")) return e;
                    if (navigator.language && navigator.language.startsWith(e)) return navigator.language;
                    if (window.Intl && window.Intl.Locale) {
                        const { region: t } = new window.Intl.Locale(e).maximize();
                        return `${e}-${t}`;
                    }
                    return "ar" === e ? "ar-EG" : e;
                };
        },
        552378: (e, t, s) => {
            s.d(t, { C: () => r });
            var a = s(807896),
                i = s(202784);
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
                        t = Object.keys(e);
                    return Promise.all(t.map((t) => e[t]()))
                        .then((e) => t.reduce((t, s, a) => ((t[s] = e[a]), t), {}))
                        .then((e) => {
                            if (!this._isMounted) return null;
                            this.setState({ modules: e, isLoaded: !0 });
                        });
                }
                render() {
                    const { isLoaded: e } = this.state,
                        t = e ? this.state.modules : {};
                    return i.Children.only(this.props.children(t || {}));
                }
            }
            const r = (e, t) => (s) => i.createElement(n, { modules: t }, (t) => i.createElement(e, (0, a.Z)({}, t, s)));
        },
        397159: (e, t, s) => {
            s.d(t, { Fi: () => m, fQ: () => b, iS: () => d });
            s(136728), s(574858), s(543673), s(240753), s(128399);
            var a = s(468811),
                i = s.n(a),
                n = s(111677),
                r = s.n(n),
                o = s(123702);
            const u = r().c3f04d9c,
                c = r().cbdddb0a,
                d = { HEADER: "header", ASSISTANT: "assistant", DECISION: "decision", RAW_FUNCTION_RESULT: "raw_function_result", FUNCTION: "function", SUMMARY: "summary", FINAL: "final", SOFT_STOP: "softstop", FINAL_LONG: "final_long" },
                m = { IN_PROGRESS: "IN_PROGRESS", COMPLETED: "COMPLETED", FAILED: "FAILED" },
                h = r().e98cc293,
                l = r().b0d1e205,
                p = r().i2e0f4d7,
                g = r().acb9b845,
                S = r().ef261d8d,
                T = r().f7d9cfb9,
                I = r().bec7eb11;
            class b {
                constructor(e) {
                    (this.initiateFromHistoryResponses = (e, t = !1) => {
                        this.lastStreamedDataTimestamp = Date.now();
                        for (const t of e) {
                            const e = { id: i().v4(), state: m.COMPLETED, header: t.header || u, subSteps: [] };
                            for (let s = 0; s < t.steps.length; s++) {
                                const a = t.steps[s];
                                this.addWebResults(a.webResults || []), this.addXPostIds(a.xPostIds || []);
                                let i = 0;
                                if ((a.assistant && ((this.accumulatedTrace += a.assistant), (this.traceEnabled = !0)), a.summary && (e.subSteps.push({ messageStepId: s + i, messageTag: d.SUMMARY, summary: a.summary }), i++), a.decision)) {
                                    const t = this.parseMessageJSON(a.decision),
                                        { markdown: n, text: r } = this.getContentForDecisionAction(t);
                                    e.subSteps.push({ messageStepId: s + i, messageTag: d.DECISION, actionIcon: this.getIconForDecisionAction(t), actionType: t?.action, actionMarkdownSummary: n, actionSummary: r, actionWebResult: this.webResults.find((e) => e.url === t?.action_input?.url), actionState: "COMPLETED", webResults: a.webResults, xPostIds: a.xPostIds }), i++;
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
                                const a = { id: i().v4(), state: "COMPLETED" === this.state ? m.COMPLETED : m.IN_PROGRESS, header: s ? e.message : u, subSteps: [] };
                                if (s) {
                                    if (1 === this.steps.length && this.steps[0].header === u) return void (this.steps = [{ ...this.steps[0], header: a.header }]);
                                    this.steps = [...this.steps, a];
                                } else e.messageTag === d.ASSISTANT && ((this.accumulatedTrace += e.message), (this.traceEnabled = !0), (this.steps = [...this.steps, a]));
                                return void (t >= 0 && this.completeStep(t));
                            }
                            const n = this.steps[t],
                                r = n.subSteps.findLastIndex((t) => (e.messageTag === d.RAW_FUNCTION_RESULT ? t.messageStepId === e.messageStepId && (t.messageTag === e.messageTag || t.messageTag === d.DECISION) : t.messageStepId === e.messageStepId && t.messageTag === e.messageTag)),
                                c = r > -1 ? n.subSteps[r] : void 0;
                            let h = !1;
                            if (c) {
                                switch (e.messageTag) {
                                    case d.ASSISTANT:
                                        (this.accumulatedTrace += e.message), (this.traceEnabled = !0);
                                        break;
                                    case d.SUMMARY:
                                        (c.summary = (c.summary || "") + e.message), (c.bulletPoints = [...(c.bulletPoints || []), (0, o.K)(e.message)]), (h = !0), (this.accumulatedSummary += e.message);
                                        break;
                                    case d.DECISION: {
                                        const t = this.parseMessageJSON(e.message),
                                            { markdown: s, text: a } = this.getContentForDecisionAction(t);
                                        (c.actionIcon = this.getIconForDecisionAction(t)), (c.actionType = t?.action), (c.actionSummary = a), (c.actionMarkdownSummary = s), (h = !0);
                                        break;
                                    }
                                    case d.RAW_FUNCTION_RESULT:
                                        if (!((e.webResults && e.webResults.length) || (e.xPostIds && e.xPostIds.length))) break;
                                        e.webResults && ((c.webResults = e.webResults), this.addWebResults(e.webResults || [])), e.xPostIds && ((c.xPostIds = e.xPostIds), this.addXPostIds(e.xPostIds || [])), c.actionState, (h = !0);
                                }
                                h && ((n.subSteps[r] = { ...c }), (n.subSteps = [...n.subSteps]));
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
                                    const e = [...n.subSteps];
                                    for (const t of e) t.actionState = "COMPLETED";
                                    (n.subSteps = [...e, t]), (n.subSteps = this.sortSubstepsByStepIdMessageTag(n.subSteps)), (this.steps = [...this.steps]);
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
                                if (e.action_input?.query) return { text: T({ username: e.action_input?.username, query: e.action_input?.query }), markdown: I({ username: e.action_input?.username, query: e.action_input?.query }) };
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
                                    return { text: p({ url: s, query: e.action_input?.query }), markdown: g({ url: a, query: e.action_input?.query }) };
                                }
                                return { text: h({ query: e.action_input?.query }), markdown: l({ query: e.action_input?.query }) };
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
                                e && this.steps.push({ id: i().v4(), state: m.COMPLETED, header: c, subSteps: [], isCompleteHeader: !0 }),
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
        880655: (e, t, s) => {
            s.d(t, { i: () => p, w: () => g });
            s(136728);
            var a = s(548102),
                i = s.n(a),
                n = s(817480),
                r = s(166852),
                o = s(662678),
                u = s(339110),
                c = s(275365),
                d = s(17243),
                m = s(234296),
                h = s(198506);
            const l = (e) => ({ data: { name: e.name || "", conversationId: e.conversation_id }, id: e.conversation_id, type: u.El.DMConversation }),
                p = (e, t, s, a = !1) => {
                    const o = e && new RegExp(`(^|.*\\s)${i()(e)}.*`, "i"),
                        c = ((e, t) => (0, n.Z)(e.map((e) => (0, h.Z)(e, t).map((e) => e.user))))(t.sort(m.Z), s)
                            .filter((e) => (!o || o.test(e.screen_name) || o.test(e.name)) && (e.followed_by || a))
                            .map((e) => (0, d.z4)(e, u.vA.DMInjected));
                    return (0, r.Z)(c, (e) => e.id);
                };
            function g(e, t, s, a) {
                const d = e && new RegExp(`(^|.*\\s)${i()(e)}.*`, "i"),
                    g = t
                        .filter((e) => e.trusted)
                        .filter((t) => {
                            if (!e) return !0;
                            const a = d && t.name && d.test(t.name),
                                i = (0, h.Z)(t, s).map((e) => e.user),
                                n = d && i.some((e) => d.test(e.screen_name) || d.test(e.name));
                            return a || n;
                        })
                        .sort(m.Z);
                let S = g;
                if (e) {
                    const [e, t] = (0, o.Z)(g, (e) => e.type === c.eD.ONE_TO_ONE);
                    S = e.concat(t);
                }
                return (
                    (T = (0, n.Z)(
                        S.map((t) => {
                            const i = t.type === c.eD.GROUP;
                            let n = [];
                            return (i && a) || (i && n.push(l(t)), (!e && i) || (n = n.concat(p(i ? e : null, [t], s, !i)))), n;
                        }),
                    )),
                    (0, r.Z)(T, ({ id: e, type: t }) => (t === u.El.DMConversation ? `c_${e}` : `u_${e}`))
                );
                var T;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DirectMessages-fb4ffec0.2f3e155a.js.map

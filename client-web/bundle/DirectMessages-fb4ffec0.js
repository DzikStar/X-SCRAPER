"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DirectMessages-fb4ffec0"],
    {
        778729: (e, t, s) => {
            s.d(t, { Z: () => n });
            var a = s(103335);
            const n = (e, t) => `e${(0, a.Z)(e, t)}`;
        },
        943245: (e, t, s) => {
            s.d(t, { It: () => m, mD: () => d, sE: () => o, t: () => u });
            var a = s(899492),
                n = s(733357);
            const r = ["da", "de", "en", "en-gb", "es", "et", "eu", "fi", "fil", "fr", "ga", "gl", "ht", "hu", "id", "it", "lt", "lv", "nl", "no", "ms", "pl", "pt", "sk", "sl", "sv", "tr", "vi"],
                i = { "en-gb": "en", "en-ss": "en", fil: "tl", he: "iw", id: "in", msa: "ms", "xx-lc": "en" },
                o = (e) => {
                    const t = e.toLowerCase();
                    return i[t] || t;
                },
                u = (e, t) => {
                    if (t) return new Intl.DisplayNames([e], { type: "language" }).of(t);
                },
                c = (e, t) => {
                    const s = o(e);
                    return !(r.indexOf(s) > -1 && t < 20) && !("und" === e);
                },
                d = ({ displayTextRange: e, entities: t, language: s, text: r }) => {
                    if (!e || !c(s, e[1] - e[0])) return !1;
                    const i = ((e, t) => {
                            let s = a.Z.getTwemojiEntities(e).map((e) => e.indices);
                            for (const e in t) s = s.concat(t[e].map((e) => e.indices));
                            return s.sort((e, t) => e[0] - t[0]), s;
                        })(r, t),
                        o = ((e, t, s) => {
                            const { accText: a, lastIndex: n } = s.reduce(({ accText: s, lastIndex: a }, n) => (n[1] <= a || t[1] <= n[0] ? { lastIndex: a, accText: s } : { accText: s + e.slice(a, n[0]), lastIndex: n[1] }), { accText: "", lastIndex: t[0] });
                            return a + e.slice(n, t[1]);
                        })(r, e, i);
                    return !(0, n.Z)(o) && c(s, o.length);
                },
                m = (e) => {
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
            s.d(t, { C: () => i });
            var a = s(807896),
                n = s(202784);
            class r extends n.Component {
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
                    return n.Children.only(this.props.children(t || {}));
                }
            }
            const i = (e, t) => (s) => n.createElement(r, { modules: t }, (t) => n.createElement(e, (0, a.Z)({}, t, s)));
        },
        397159: (e, t, s) => {
            s.d(t, { Fi: () => l, XR: () => h, fQ: () => g, iS: () => m });
            s(136728), s(574858), s(543673), s(240753), s(128399);
            var a = s(468811),
                n = s.n(a),
                r = s(111677),
                i = s.n(r),
                o = s(123702),
                u = s(187268);
            const c = i().c3f04d9c,
                d = i().cbdddb0a,
                m = { HEADER: "header", ASSISTANT: "assistant", DECISION: "decision", RAW_FUNCTION_RESULT: "raw_function_result", FUNCTION: "function", SUMMARY: "summary", FINAL: "final", SOFT_STOP: "softstop", FINAL_LONG: "final_long" },
                l = { IN_PROGRESS: "IN_PROGRESS", COMPLETED: "COMPLETED", FAILED: "FAILED" },
                h = { GenericSearchQueryFormatter: i().ie2bbeed, GenericSearchQueryMarkdownFormatter: i().b0d1e205, WebSearchQueryFormatter: i().f259119d, XSearchQueryFormatter: i().bf970edd, BrowsePageFormatter: i().g008d475, GenericURLQueryFormatter: i().c91e3971, GenericURLQueryMarkdownFormatter: i().acb9b845, XUsernameSearchFormatter: i().j9006405, XUsernameQuerySearchFormatter: i().a2dd07e5, XUsernameQuerySearchMarkdownFormatter: i().e99fb7a3 };
            class g {
                constructor(e) {
                    (this.initiateFromHistoryResponses = (e, t = !1) => {
                        this.lastStreamedDataTimestamp = Date.now();
                        for (const t of e) {
                            const e = { id: n().v4(), state: l.COMPLETED, header: t.header || c, subSteps: [] };
                            for (let s = 0; s < t.steps.length; s++) {
                                const a = t.steps[s];
                                this.addWebResults(a.webResults || []), this.addXPostIds(a.xPostIds || []);
                                let n = 0;
                                if ((a.assistant && ((this.accumulatedTrace += a.assistant), (this.traceEnabled = !0)), a.summary)) {
                                    const t = (0, u.Ez)(a.summary);
                                    (this.accumulatedSummary += t), e.subSteps.push({ messageStepId: s + n, messageTag: m.SUMMARY, summary: t, webResults: a.webResults, xPostIds: a.xPostIds }), n++;
                                }
                                if (a.decision) {
                                    const t = this.parseMessageJSON(a.decision),
                                        { markdown: r, text: i } = this.getContentForDecisionAction(t);
                                    e.subSteps.push({ messageStepId: s + n, messageTag: m.DECISION, actionIcon: this.getIconForDecisionAction(t), actionType: t?.action, actionMarkdownSummary: r, actionSummary: i, actionWebResult: this.webResults.find((e) => e.url === t?.action_input?.url), actionState: "COMPLETED", webResults: a.webResults, xPostIds: a.xPostIds }), n++;
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
                                s = e.messageTag === m.HEADER,
                                a = s || this.steps.length <= 0;
                            if ((this.addDebugMessageTagCount(e.messageTag), (this.lastStreamedDataTimestamp = Date.now()), "PENDING" === this.state && ((this.streamStartTimestamp = Date.now()), (this.state = "STARTED")), a)) {
                                const a = { id: n().v4(), state: "COMPLETED" === this.state ? l.COMPLETED : l.IN_PROGRESS, header: s ? e.message : c, subSteps: [] };
                                if (s) {
                                    if (1 === this.steps.length && this.steps[0].header === c) return void (this.steps = [{ ...this.steps[0], header: a.header }]);
                                    this.steps = [...this.steps, a];
                                } else e.messageTag === m.ASSISTANT && ((this.accumulatedTrace += e.message), (this.traceEnabled = !0), (this.steps = [...this.steps, a]));
                                return void (t >= 0 && this.completeStep(t));
                            }
                            const r = this.steps[t],
                                i = r.subSteps.findLastIndex((t) => {
                                    if (e.messageTag === m.RAW_FUNCTION_RESULT) {
                                        const s = t.messageStepId === e.messageStepId,
                                            a = t.messageTag === e.messageTag,
                                            n = t.messageTag === m.DECISION;
                                        return s && (a || n);
                                    }
                                    return t.messageStepId === e.messageStepId && t.messageTag === e.messageTag;
                                }),
                                d = i > -1 ? r.subSteps[i] : void 0;
                            let h = !1;
                            if (d) {
                                switch (e.messageTag) {
                                    case m.ASSISTANT:
                                        (this.accumulatedTrace += e.message), (this.traceEnabled = !0);
                                        break;
                                    case m.SUMMARY: {
                                        const t = (0, u.Ez)(e.message);
                                        d.summary = (d.summary || "") + t;
                                        const s = (0, u.QK)(e.message);
                                        if (s) {
                                            const t = (0, u.CK)(s);
                                            t && (d.bulletPoints = [...(d.bulletPoints || []), t]), (d.toolUsageCardResults = [...(d.toolUsageCardResults || []), { toolUsageCardId: s.id, webResults: e.webResults, xPostIds: e.xPostIds }]);
                                        } else {
                                            const t = (0, o.K)(e.message);
                                            if ((t.trim() && (d.bulletPoints = [...(d.bulletPoints || []), t]), e.webResults && e.webResults.length && (this.addWebResults(e.webResults || []), e.toolUsageCardId))) {
                                                const t = d.toolUsageCardResults?.map((t) => (t.toolUsageCardId === e.toolUsageCardId ? { ...t, webResults: e.webResults } : t));
                                                d.toolUsageCardResults = t;
                                            }
                                            if (e.xPostIds && e.xPostIds.length && (this.addXPostIds(e.xPostIds || []), e.toolUsageCardId)) {
                                                const t = d.toolUsageCardResults?.map((t) => (t.toolUsageCardId === e.toolUsageCardId ? { ...t, xPostIds: e.xPostIds } : t));
                                                d.toolUsageCardResults = t;
                                            }
                                        }
                                        (h = !0), (this.accumulatedSummary += t);
                                        break;
                                    }
                                    case m.DECISION: {
                                        const t = this.parseMessageJSON(e.message),
                                            { markdown: s, text: a } = this.getContentForDecisionAction(t);
                                        (d.actionIcon = this.getIconForDecisionAction(t)), (d.actionType = t?.action), (d.actionSummary = a), (d.actionMarkdownSummary = s), (h = !0);
                                        break;
                                    }
                                    case m.RAW_FUNCTION_RESULT:
                                        if (!((e.webResults && e.webResults.length) || (e.xPostIds && e.xPostIds.length))) break;
                                        e.webResults && ((d.webResults = e.webResults), this.addWebResults(e.webResults || [])), e.xPostIds && ((d.xPostIds = e.xPostIds), this.addXPostIds(e.xPostIds || [])), d.actionState, (h = !0);
                                }
                                h && ((r.subSteps[i] = { ...d }), (r.subSteps = [...r.subSteps]));
                            } else {
                                let t = null;
                                switch (e.messageTag) {
                                    case m.ASSISTANT:
                                        (this.accumulatedTrace += e.message), (this.traceEnabled = !0);
                                        break;
                                    case m.SUMMARY: {
                                        const s = (0, u.QK)(e.message) ?? void 0,
                                            a = (0, u.Ez)(e.message);
                                        let n = [];
                                        if (s) {
                                            const e = (0, u.CK)(s);
                                            e && (n = [e]);
                                        } else {
                                            (0, o.K)(e.message).trim() && (n = [(0, o.K)(e.message)]);
                                        }
                                        t = { messageStepId: e.messageStepId, messageTag: e.messageTag, summary: a, toolUsageCardResults: s ? [{ toolUsageCardId: s.id, webResults: e.webResults, xPostIds: e.xPostIds }] : [], bulletPoints: n };
                                        break;
                                    }
                                    case m.DECISION: {
                                        const s = this.parseMessageJSON(e.message),
                                            { markdown: a, text: n } = this.getContentForDecisionAction(s);
                                        t = { messageStepId: e.messageStepId, messageTag: e.messageTag, actionIcon: this.getIconForDecisionAction(s), actionType: s?.action, actionSummary: n, actionMarkdownSummary: a, actionWebResult: this.webResults.find((e) => e.url === s?.action_input?.url), actionState: "STARTED" };
                                        break;
                                    }
                                    case m.RAW_FUNCTION_RESULT: {
                                        const s = e.webResults || [];
                                        this.addWebResults(s);
                                        const a = e.xPostIds || [];
                                        this.addXPostIds(a), (s.length > 0 || a.length > 0) && (t = { messageStepId: e.messageStepId, messageTag: e.messageTag, webResults: e.webResults, xPostIds: e.xPostIds });
                                        break;
                                    }
                                }
                                if (t) {
                                    const e = [...r.subSteps];
                                    for (const t of e) t.actionState = "COMPLETED";
                                    (r.subSteps = [...e, t]), (r.subSteps = this.sortSubstepsByStepIdMessageTag(r.subSteps)), (this.steps = [...this.steps]);
                                }
                            }
                            this.steps[t] = { ...this.steps[t] };
                        }),
                        (this.sortSubstepsByStepIdMessageTag = (e) => {
                            const t = [m.SUMMARY, m.DECISION, m.RAW_FUNCTION_RESULT];
                            return e.sort((e, s) => (e.messageStepId !== s.messageStepId ? e.messageStepId - s.messageStepId : t.indexOf(e.messageTag) - t.indexOf(s.messageTag)));
                        }),
                        (this.completeStep = (e) => {
                            this.steps[e].state = l.COMPLETED;
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
                                if (e.action_input?.query) return { text: h.XUsernameQuerySearchFormatter({ username: e.action_input?.username, query: e.action_input?.query }), markdown: h.XUsernameQuerySearchMarkdownFormatter({ username: e.action_input?.username, query: e.action_input?.query }) };
                                const t = h.XUsernameSearchFormatter({ username: e.action_input?.username });
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
                                    return { text: h.GenericURLQueryFormatter({ url: s, query: e.action_input?.query }), markdown: h.GenericURLQueryMarkdownFormatter({ url: a, query: e.action_input?.query }) };
                                }
                                return { text: h.GenericSearchQueryFormatter({ query: e.action_input?.query }), markdown: h.GenericSearchQueryMarkdownFormatter({ query: e.action_input?.query }) };
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
                                    (e.state = l.COMPLETED),
                                        e.subSteps.forEach((e) => {
                                            e.actionState = "COMPLETED";
                                        });
                                }),
                                e && this.steps.push({ id: n().v4(), state: l.COMPLETED, header: d, subSteps: [], isCompleteHeader: !0 }),
                                (this.steps = [...this.steps]));
                        }),
                        (this.onAbort = () => {
                            for (let e = 0; e < this.steps.length; e++)
                                this.steps[e].state === l.IN_PROGRESS && (this.steps[e].state = l.FAILED),
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
            s.d(t, { i: () => g, w: () => p });
            s(136728);
            var a = s(548102),
                n = s.n(a),
                r = s(817480),
                i = s(166852),
                o = s(662678),
                u = s(339110),
                c = s(275365),
                d = s(17243),
                m = s(234296),
                l = s(198506);
            const h = (e) => ({ data: { name: e.name || "", conversationId: e.conversation_id }, id: e.conversation_id, type: u.El.DMConversation }),
                g = (e, t, s, a = !1) => {
                    const o = e && new RegExp(`(^|.*\\s)${n()(e)}.*`, "i"),
                        c = ((e, t) => (0, r.Z)(e.map((e) => (0, l.Z)(e, t).map((e) => e.user))))(t.sort(m.Z), s)
                            .filter((e) => (!o || o.test(e.screen_name) || o.test(e.name)) && (e.followed_by || a))
                            .map((e) => (0, d.z4)(e, u.vA.DMInjected));
                    return (0, i.Z)(c, (e) => e.id);
                };
            function p(e, t, s, a) {
                const d = e && new RegExp(`(^|.*\\s)${n()(e)}.*`, "i"),
                    p = t
                        .filter((e) => e.trusted)
                        .filter((t) => {
                            if (!e) return !0;
                            const a = d && t.name && d.test(t.name),
                                n = (0, l.Z)(t, s).map((e) => e.user),
                                r = d && n.some((e) => d.test(e.screen_name) || d.test(e.name));
                            return a || r;
                        })
                        .sort(m.Z);
                let S = p;
                if (e) {
                    const [e, t] = (0, o.Z)(p, (e) => e.type === c.eD.ONE_TO_ONE);
                    S = e.concat(t);
                }
                return (
                    (I = (0, r.Z)(
                        S.map((t) => {
                            const n = t.type === c.eD.GROUP;
                            let r = [];
                            return (n && a) || (n && r.push(h(t)), (!e && n) || (r = r.concat(g(n ? e : null, [t], s, !n)))), r;
                        }),
                    )),
                    (0, i.Z)(I, ({ id: e, type: t }) => (t === u.El.DMConversation ? `c_${e}` : `u_${e}`))
                );
                var I;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DirectMessages-fb4ffec0.30b7cf8a.js.map

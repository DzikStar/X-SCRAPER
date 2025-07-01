"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DirectMessages-fb4ffec0"],
    {
        778729: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(103335);
            const r = (e, t) => `e${(0, a.Z)(e, t)}`;
        },
        943245: (e, t, s) => {
            s.d(t, { It: () => m, mD: () => c, sE: () => i, t: () => d });
            var a = s(899492),
                r = s(733357);
            const n = ["da", "de", "en", "en-gb", "es", "et", "eu", "fi", "fil", "fr", "ga", "gl", "ht", "hu", "id", "it", "lt", "lv", "nl", "no", "ms", "pl", "pt", "sk", "sl", "sv", "tr", "vi"],
                o = { "en-gb": "en", "en-ss": "en", fil: "tl", he: "iw", id: "in", msa: "ms", "xx-lc": "en" },
                i = (e) => {
                    const t = e.toLowerCase();
                    return o[t] || t;
                },
                d = (e, t) => {
                    if (t) return new Intl.DisplayNames([e], { type: "language" }).of(t);
                },
                u = (e, t) => {
                    const s = i(e);
                    return !(n.indexOf(s) > -1 && t < 20) && !("und" === e);
                },
                c = ({ displayTextRange: e, entities: t, language: s, text: n }) => {
                    if (!e || !u(s, e[1] - e[0])) return !1;
                    const o = ((e, t) => {
                            let s = a.Z.getTwemojiEntities(e).map((e) => e.indices);
                            for (const e in t) s = s.concat(t[e].map((e) => e.indices));
                            return s.sort((e, t) => e[0] - t[0]), s;
                        })(n, t),
                        i = ((e, t, s) => {
                            const { accText: a, lastIndex: r } = s.reduce(({ accText: s, lastIndex: a }, r) => (r[1] <= a || t[1] <= r[0] ? { lastIndex: a, accText: s } : { accText: s + e.slice(a, r[0]), lastIndex: r[1] }), { accText: "", lastIndex: t[0] });
                            return a + e.slice(r, t[1]);
                        })(n, e, o);
                    return !(0, r.Z)(i) && u(s, i.length);
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
            s.d(t, { C: () => o });
            var a = s(807896),
                r = s(202784);
            class n extends r.Component {
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
                    return r.Children.only(this.props.children(t || {}));
                }
            }
            const o = (e, t) => (s) => r.createElement(n, { modules: t }, (t) => r.createElement(e, (0, a.Z)({}, t, s)));
        },
        397159: (e, t, s) => {
            s.d(t, { B2: () => g, Fi: () => l, fQ: () => p, iS: () => m, uk: () => h });
            s(136728), s(574858), s(543673), s(240753), s(128399);
            var a = s(468811),
                r = s.n(a),
                n = s(111677),
                o = s.n(n),
                i = s(123702),
                d = s(187268);
            const u = o().c3f04d9c,
                c = o().cbdddb0a,
                m = { HEADER: "header", ASSISTANT: "assistant", DECISION: "decision", RAW_FUNCTION_RESULT: "raw_function_result", FUNCTION: "function", SUMMARY: "summary", FINAL: "final", SOFT_STOP: "softstop", FINAL_LONG: "final_long" },
                l = { IN_PROGRESS: "IN_PROGRESS", COMPLETED: "COMPLETED", FAILED: "FAILED" },
                h = { GenericSearchQueryFormatter: o().ie2bbeed, GenericSearchQueryMarkdownFormatter: o().b0d1e205, WebSearchQueryFormatter: o().ie2bbeed, XSearchQueryFormatter: o().bf970edd, XUserSearchFormatter: o().ad342369, BrowsePageFormatter: o().g008d475, GenericURLQueryFormatter: o().c91e3971, GenericURLQueryMarkdownFormatter: o().acb9b845, XUsernameSearchFormatter: o().j9006405, XUsernameQuerySearchFormatter: o().a2dd07e5, XUsernameQuerySearchMarkdownFormatter: o().e99fb7a3, CodeExecutionFormatter: o().a02d1657 },
                g = { WebSearchQueryFormatter: o().aa9d42c0, XSearchQueryFormatter: o().c731d702, XUserSearchFormatter: o().d0e02476, BrowsePageFormatter: o().c43ef93e, XUsernameSearchFormatter: o().dab166ec, XUsernameQuerySearchFormatter: o().dab166ec, CodeExecutionFormatter: o().jb097f6e };
            class p {
                constructor(e) {
                    (this.initiateFromHistoryResponses = (e, t = !1) => {
                        this.lastStreamedDataTimestamp = Date.now();
                        for (const t of e) {
                            const e = { id: r().v4(), state: l.COMPLETED, header: t.header || u, subSteps: [] };
                            for (let s = 0; s < t.steps.length; s++) {
                                const a = t.steps[s];
                                this.addWebResults(a.webResults || []), this.addXPostIds(a.xPostIds || []);
                                let r = 0;
                                if ((a.assistant && ((this.accumulatedTrace += a.assistant), (this.traceEnabled = !0)), a.summary)) {
                                    const t = (0, d.Ez)(a.summary);
                                    (this.accumulatedSummary += t), e.subSteps.push({ messageStepId: s + r, messageTag: m.SUMMARY, summary: t, webResults: a.webResults, xPostIds: a.xPostIds, toolUsageCardResults: a.toolUsageCardResults }), r++;
                                }
                                if (a.decision) {
                                    const t = this.parseMessageJSON(a.decision),
                                        { markdown: n, text: o } = this.getContentForDecisionAction(t);
                                    e.subSteps.push({ messageStepId: s + r, messageTag: m.DECISION, actionIcon: this.getIconForDecisionAction(t), actionType: t?.action, actionMarkdownSummary: n, actionSummary: o, actionWebResult: this.webResults.find((e) => e.url === t?.action_input?.url), actionState: "COMPLETED", webResults: a.webResults, xPostIds: a.xPostIds }), r++;
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
                                s = e.messageTag === m.HEADER,
                                a = s || this.steps.length <= 0;
                            if ((this.addDebugMessageTagCount(e.messageTag), (this.lastStreamedDataTimestamp = Date.now()), "PENDING" === this.state && ((this.streamStartTimestamp = Date.now()), (this.state = "STARTED")), a)) {
                                const a = { id: r().v4(), state: "COMPLETED" === this.state ? l.COMPLETED : l.IN_PROGRESS, header: s ? e.message : u, subSteps: [] };
                                if (s) {
                                    if (1 === this.steps.length && this.steps[0].header === u) return void (this.steps = [{ ...this.steps[0], header: a.header }]);
                                    this.steps = [...this.steps, a];
                                } else e.messageTag === m.ASSISTANT && ((this.accumulatedTrace += e.message), (this.traceEnabled = !0), (this.steps = [...this.steps, a]));
                                return void (t >= 0 && this.completeStep(t));
                            }
                            const n = this.steps[t],
                                o = n.subSteps.findLastIndex((t) => {
                                    if (e.messageTag === m.RAW_FUNCTION_RESULT) {
                                        const s = t.messageStepId === e.messageStepId,
                                            a = t.messageTag === e.messageTag,
                                            r = t.messageTag === m.DECISION;
                                        return s && (a || r);
                                    }
                                    return t.messageStepId === e.messageStepId && t.messageTag === e.messageTag;
                                }),
                                c = o > -1 ? n.subSteps[o] : void 0;
                            let h = !1;
                            if (c) {
                                switch (e.messageTag) {
                                    case m.ASSISTANT:
                                        (this.accumulatedTrace += e.message), (this.traceEnabled = !0);
                                        break;
                                    case m.SUMMARY: {
                                        const t = (0, d.Ez)(e.message);
                                        (this.accumulatedSummary += t), (c.summary = (c.summary || "") + t);
                                        const s = (0, d.QK)(e.message);
                                        if (s) {
                                            const t = (0, d.j)(s);
                                            if (t) {
                                                c.statusHeaders = [...(c.statusHeaders || []), t];
                                                const e = (0, d.jU)(s);
                                                c.orderedContentToPreview = [...(c.orderedContentToPreview || []), { header: e, type: "TOOL_USAGE", toolUsageCard: s }];
                                            }
                                            c.toolUsageCardResults = [...(c.toolUsageCardResults || []), { toolUsageCardId: s.id, webResults: e.webResults, xPostIds: e.xPostIds }];
                                        } else {
                                            const t = (0, i.K)(e.message);
                                            if ((t.trim() && ((c.statusHeaders = [...(c.statusHeaders || []), t]), (c.summaryBulletPoints = [...(c.summaryBulletPoints || []), t]), (c.orderedContentToPreview = [...(c.orderedContentToPreview || []), { header: n.header, summary: t, type: "SUMMARY" }])), (e.webResults && e.webResults.length) || (e.xPostIds && e.xPostIds.length))) {
                                                if ((this.addWebResults(e.webResults || []), this.addXPostIds(e.xPostIds || []), e.toolUsageCardId)) {
                                                    const t = c.toolUsageCardResults?.map((t) => (t.toolUsageCardId === e.toolUsageCardId ? { ...t, webResults: e.webResults, xPostIds: e.xPostIds } : t));
                                                    c.toolUsageCardResults = t;
                                                }
                                                const t = c.orderedContentToPreview?.find((t) => t.toolUsageCard?.id === e.toolUsageCardId);
                                                t && (c.orderedContentToPreview = [...(c.orderedContentToPreview || []), { header: t.header, type: "TOOL_USAGE_RESULT", toolUsageCard: t.toolUsageCard, toolUsageCardResult: { toolUsageCardId: t.toolUsageCard?.id || "", webResults: e.webResults, xPostIds: e.xPostIds } }]);
                                            }
                                        }
                                        h = !0;
                                        break;
                                    }
                                    case m.DECISION: {
                                        const t = this.parseMessageJSON(e.message),
                                            { markdown: s, text: a } = this.getContentForDecisionAction(t);
                                        (c.actionIcon = this.getIconForDecisionAction(t)), (c.actionType = t?.action), (c.actionSummary = a), (c.actionMarkdownSummary = s), (h = !0);
                                        break;
                                    }
                                    case m.RAW_FUNCTION_RESULT:
                                        if (!((e.webResults && e.webResults.length) || (e.xPostIds && e.xPostIds.length))) break;
                                        e.webResults && ((c.webResults = e.webResults), this.addWebResults(e.webResults || [])), e.xPostIds && ((c.xPostIds = e.xPostIds), this.addXPostIds(e.xPostIds || [])), c.actionState, (h = !0);
                                }
                                h && ((n.subSteps[o] = { ...c }), (n.subSteps = [...n.subSteps]));
                            } else {
                                let t = null;
                                switch (e.messageTag) {
                                    case m.ASSISTANT:
                                        (this.accumulatedTrace += e.message), (this.traceEnabled = !0);
                                        break;
                                    case m.SUMMARY: {
                                        const s = (0, d.QK)(e.message) ?? void 0,
                                            a = (0, d.Ez)(e.message);
                                        this.accumulatedSummary += a;
                                        let r = [],
                                            o = [],
                                            u = [];
                                        if (s) {
                                            const e = (0, d.j)(s);
                                            e && (r = [e]);
                                            (0, d.jU)(s) && (u = [{ header: e, toolUsageCard: s, type: "TOOL_USAGE" }]);
                                        } else {
                                            const t = (0, i.K)(e.message);
                                            t.trim() && ((r = [(0, i.K)(e.message)]), (o = [...(o || []), t]), (u = [{ header: n.header, summary: t, type: "SUMMARY" }]));
                                        }
                                        t = { messageStepId: e.messageStepId, messageTag: e.messageTag, summary: a, toolUsageCardResults: s ? [{ toolUsageCardId: s.id, webResults: e.webResults, xPostIds: e.xPostIds }] : [], statusHeaders: r, summaryBulletPoints: o, orderedContentToPreview: u };
                                        break;
                                    }
                                    case m.DECISION: {
                                        const s = this.parseMessageJSON(e.message),
                                            { markdown: a, text: r } = this.getContentForDecisionAction(s);
                                        t = { messageStepId: e.messageStepId, messageTag: e.messageTag, actionIcon: this.getIconForDecisionAction(s), actionType: s?.action, actionSummary: r, actionMarkdownSummary: a, actionWebResult: this.webResults.find((e) => e.url === s?.action_input?.url), actionState: "STARTED" };
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
                                    const e = [...n.subSteps];
                                    for (const t of e) t.actionState = "COMPLETED";
                                    (n.subSteps = [...e, t]), (n.subSteps = this.sortSubstepsByStepIdMessageTag(n.subSteps)), (this.steps = [...this.steps]);
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
                                e && this.steps.push({ id: r().v4(), state: l.COMPLETED, header: c, subSteps: [], isCompleteHeader: !0 }),
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
                r = s.n(a),
                n = s(817480),
                o = s(166852),
                i = s(662678),
                d = s(339110),
                u = s(275365),
                c = s(17243),
                m = s(234296),
                l = s(198506);
            const h = (e) => ({ data: { name: e.name || "", conversationId: e.conversation_id }, id: e.conversation_id, type: d.El.DMConversation }),
                g = (e, t, s, a = !1) => {
                    const i = e && new RegExp(`(^|.*\\s)${r()(e)}.*`, "i"),
                        u = ((e, t) => (0, n.Z)(e.map((e) => (0, l.Z)(e, t).map((e) => e.user))))(t.sort(m.Z), s)
                            .filter((e) => (!i || i.test(e.screen_name) || i.test(e.name)) && (e.followed_by || a))
                            .map((e) => (0, c.z4)(e, d.vA.DMInjected));
                    return (0, o.Z)(u, (e) => e.id);
                };
            function p(e, t, s, a) {
                const c = e && new RegExp(`(^|.*\\s)${r()(e)}.*`, "i"),
                    p = t
                        .filter((e) => e.trusted)
                        .filter((t) => {
                            if (!e) return !0;
                            const a = c && t.name && c.test(t.name),
                                r = (0, l.Z)(t, s).map((e) => e.user),
                                n = c && r.some((e) => c.test(e.screen_name) || c.test(e.name));
                            return a || n;
                        })
                        .sort(m.Z);
                let S = p;
                if (e) {
                    const [e, t] = (0, i.Z)(p, (e) => e.type === u.eD.ONE_TO_ONE);
                    S = e.concat(t);
                }
                return (
                    (I = (0, n.Z)(
                        S.map((t) => {
                            const r = t.type === u.eD.GROUP;
                            let n = [];
                            return (r && a) || (r && n.push(h(t)), (!e && r) || (n = n.concat(g(r ? e : null, [t], s, !r)))), n;
                        }),
                    )),
                    (0, o.Z)(I, ({ id: e, type: t }) => (t === d.El.DMConversation ? `c_${e}` : `u_${e}`))
                );
                var I;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DirectMessages-fb4ffec0.f8b7b75a.js.map

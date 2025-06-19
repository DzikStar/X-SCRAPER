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
            s.d(t, { It: () => d, mD: () => m, sE: () => o, t: () => u });
            var a = s(899492),
                n = s(733357);
            const i = ["da", "de", "en", "en-gb", "es", "et", "eu", "fi", "fil", "fr", "ga", "gl", "ht", "hu", "id", "it", "lt", "lv", "nl", "no", "ms", "pl", "pt", "sk", "sl", "sv", "tr", "vi"],
                r = { "en-gb": "en", "en-ss": "en", fil: "tl", he: "iw", id: "in", msa: "ms", "xx-lc": "en" },
                o = (e) => {
                    const t = e.toLowerCase();
                    return r[t] || t;
                },
                u = (e, t) => {
                    if (t) return new Intl.DisplayNames([e], { type: "language" }).of(t);
                },
                c = (e, t) => {
                    const s = o(e);
                    return !(i.indexOf(s) > -1 && t < 20) && !("und" === e);
                },
                m = ({ displayTextRange: e, entities: t, language: s, text: i }) => {
                    if (!e || !c(s, e[1] - e[0])) return !1;
                    const r = ((e, t) => {
                            let s = a.Z.getTwemojiEntities(e).map((e) => e.indices);
                            for (const e in t) s = s.concat(t[e].map((e) => e.indices));
                            return s.sort((e, t) => e[0] - t[0]), s;
                        })(i, t),
                        o = ((e, t, s) => {
                            const { accText: a, lastIndex: n } = s.reduce(({ accText: s, lastIndex: a }, n) => (n[1] <= a || t[1] <= n[0] ? { lastIndex: a, accText: s } : { accText: s + e.slice(a, n[0]), lastIndex: n[1] }), { accText: "", lastIndex: t[0] });
                            return a + e.slice(n, t[1]);
                        })(i, e, r);
                    return !(0, n.Z)(o) && c(s, o.length);
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
                n = s(202784);
            class i extends n.Component {
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
            const r = (e, t) => (s) => n.createElement(i, { modules: t }, (t) => n.createElement(e, (0, a.Z)({}, t, s)));
        },
        397159: (e, t, s) => {
            s.d(t, { Fi: () => h, XR: () => l, fQ: () => g, iS: () => d });
            s(136728), s(574858), s(543673), s(240753), s(128399);
            var a = s(468811),
                n = s.n(a),
                i = s(111677),
                r = s.n(i),
                o = s(123702),
                u = s(187268);
            const c = r().c3f04d9c,
                m = r().cbdddb0a,
                d = { HEADER: "header", ASSISTANT: "assistant", DECISION: "decision", RAW_FUNCTION_RESULT: "raw_function_result", FUNCTION: "function", SUMMARY: "summary", FINAL: "final", SOFT_STOP: "softstop", FINAL_LONG: "final_long" },
                h = { IN_PROGRESS: "IN_PROGRESS", COMPLETED: "COMPLETED", FAILED: "FAILED" },
                l = { GenericSearchQueryFormatter: r().ie2bbeed, GenericSearchQueryMarkdownFormatter: r().b0d1e205, WebSearchQueryFormatter: r().ie2bbeed, XSearchQueryFormatter: r().bf970edd, BrowsePageFormatter: r().g008d475, GenericURLQueryFormatter: r().c91e3971, GenericURLQueryMarkdownFormatter: r().acb9b845, XUsernameSearchFormatter: r().j9006405, XUsernameQuerySearchFormatter: r().a2dd07e5, XUsernameQuerySearchMarkdownFormatter: r().e99fb7a3 };
            class g {
                constructor(e) {
                    (this.initiateFromHistoryResponses = (e, t = !1) => {
                        this.lastStreamedDataTimestamp = Date.now();
                        for (const t of e) {
                            const e = { id: n().v4(), state: h.COMPLETED, header: t.header || c, subSteps: [] };
                            for (let s = 0; s < t.steps.length; s++) {
                                const a = t.steps[s];
                                this.addWebResults(a.webResults || []), this.addXPostIds(a.xPostIds || []);
                                let n = 0;
                                if ((a.assistant && ((this.accumulatedTrace += a.assistant), (this.traceEnabled = !0)), a.summary)) {
                                    const t = (0, u.rs)(a.summary);
                                    (this.accumulatedSummary += t), e.subSteps.push({ messageStepId: s + n, messageTag: d.SUMMARY, summary: t, webResults: a.webResults, xPostIds: a.xPostIds }), n++;
                                }
                                if (a.decision) {
                                    const t = this.parseMessageJSON(a.decision),
                                        { markdown: i, text: r } = this.getContentForDecisionAction(t);
                                    e.subSteps.push({ messageStepId: s + n, messageTag: d.DECISION, actionIcon: this.getIconForDecisionAction(t), actionType: t?.action, actionMarkdownSummary: i, actionSummary: r, actionWebResult: this.webResults.find((e) => e.url === t?.action_input?.url), actionState: "COMPLETED", webResults: a.webResults, xPostIds: a.xPostIds }), n++;
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
                                const a = { id: n().v4(), state: "COMPLETED" === this.state ? h.COMPLETED : h.IN_PROGRESS, header: s ? e.message : c, subSteps: [] };
                                if (s) {
                                    if (1 === this.steps.length && this.steps[0].header === c) return void (this.steps = [{ ...this.steps[0], header: a.header }]);
                                    this.steps = [...this.steps, a];
                                } else e.messageTag === d.ASSISTANT && ((this.accumulatedTrace += e.message), (this.traceEnabled = !0), (this.steps = [...this.steps, a]));
                                return void (t >= 0 && this.completeStep(t));
                            }
                            const i = this.steps[t],
                                r = i.subSteps.findLastIndex((t) => {
                                    if (e.messageTag === d.RAW_FUNCTION_RESULT) {
                                        const s = t.messageStepId === e.messageStepId,
                                            a = t.messageTag === e.messageTag,
                                            n = t.messageTag === d.DECISION,
                                            i = t.messageTag === d.SUMMARY && void 0 !== t.toolUsage;
                                        return s && (a || n || i);
                                    }
                                    return t.messageStepId === e.messageStepId && t.messageTag === e.messageTag;
                                }),
                                m = r > -1 ? i.subSteps[r] : void 0;
                            let l = !1;
                            if (m) {
                                switch (e.messageTag) {
                                    case d.ASSISTANT:
                                        (this.accumulatedTrace += e.message), (this.traceEnabled = !0);
                                        break;
                                    case d.SUMMARY: {
                                        const t = (0, u.rs)(e.message);
                                        m.summary = (m.summary || "") + t;
                                        const s = (0, u.Bv)(e.message);
                                        if (s) {
                                            const e = (0, u.cU)(s);
                                            e && (m.bulletPoints = [...(m.bulletPoints || []), e]);
                                        } else {
                                            const t = (0, o.K)(e.message);
                                            t.trim() && (m.bulletPoints = [...(m.bulletPoints || []), t]), e.webResults && e.webResults.length && ((m.webResults = e.webResults), this.addWebResults(e.webResults || []));
                                        }
                                        (l = !0), (this.accumulatedSummary += t);
                                        break;
                                    }
                                    case d.DECISION: {
                                        const t = this.parseMessageJSON(e.message),
                                            { markdown: s, text: a } = this.getContentForDecisionAction(t);
                                        (m.actionIcon = this.getIconForDecisionAction(t)), (m.actionType = t?.action), (m.actionSummary = a), (m.actionMarkdownSummary = s), (l = !0);
                                        break;
                                    }
                                    case d.RAW_FUNCTION_RESULT:
                                        if (!((e.webResults && e.webResults.length) || (e.xPostIds && e.xPostIds.length))) break;
                                        e.webResults && ((m.webResults = e.webResults), this.addWebResults(e.webResults || [])), e.xPostIds && ((m.xPostIds = e.xPostIds), this.addXPostIds(e.xPostIds || [])), m.actionState, (l = !0);
                                }
                                l && ((i.subSteps[r] = { ...m }), (i.subSteps = [...i.subSteps]));
                            } else {
                                let t = null;
                                switch (e.messageTag) {
                                    case d.ASSISTANT:
                                        (this.accumulatedTrace += e.message), (this.traceEnabled = !0);
                                        break;
                                    case d.SUMMARY: {
                                        const s = (0, u.Bv)(e.message) ?? void 0,
                                            a = (0, u.rs)(e.message);
                                        let n = [];
                                        if (s) {
                                            const e = (0, u.cU)(s);
                                            e && (n = [e]);
                                        } else {
                                            (0, o.K)(e.message).trim() && (n = [(0, o.K)(e.message)]);
                                        }
                                        t = { messageStepId: e.messageStepId, messageTag: e.messageTag, summary: a, toolUsage: s, bulletPoints: n };
                                        break;
                                    }
                                    case d.DECISION: {
                                        const s = this.parseMessageJSON(e.message),
                                            { markdown: a, text: n } = this.getContentForDecisionAction(s);
                                        t = { messageStepId: e.messageStepId, messageTag: e.messageTag, actionIcon: this.getIconForDecisionAction(s), actionType: s?.action, actionSummary: n, actionMarkdownSummary: a, actionWebResult: this.webResults.find((e) => e.url === s?.action_input?.url), actionState: "STARTED" };
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
                                    const e = [...i.subSteps];
                                    for (const t of e) t.actionState = "COMPLETED";
                                    (i.subSteps = [...e, t]), (i.subSteps = this.sortSubstepsByStepIdMessageTag(i.subSteps)), (this.steps = [...this.steps]);
                                }
                            }
                            this.steps[t] = { ...this.steps[t] };
                        }),
                        (this.sortSubstepsByStepIdMessageTag = (e) => {
                            const t = [d.SUMMARY, d.DECISION, d.RAW_FUNCTION_RESULT];
                            return e.sort((e, s) => (e.messageStepId !== s.messageStepId ? e.messageStepId - s.messageStepId : t.indexOf(e.messageTag) - t.indexOf(s.messageTag)));
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
                                const t = l.XUsernameSearchFormatter({ username: e.action_input?.username });
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
                                    return { text: l.GenericURLQueryFormatter({ url: s, query: e.action_input?.query }), markdown: l.GenericURLQueryMarkdownFormatter({ url: a, query: e.action_input?.query }) };
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
                                e && this.steps.push({ id: n().v4(), state: h.COMPLETED, header: m, subSteps: [], isCompleteHeader: !0 }),
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
                i = s(817480),
                r = s(166852),
                o = s(662678),
                u = s(339110),
                c = s(275365),
                m = s(17243),
                d = s(234296),
                h = s(198506);
            const l = (e) => ({ data: { name: e.name || "", conversationId: e.conversation_id }, id: e.conversation_id, type: u.El.DMConversation }),
                g = (e, t, s, a = !1) => {
                    const o = e && new RegExp(`(^|.*\\s)${n()(e)}.*`, "i"),
                        c = ((e, t) => (0, i.Z)(e.map((e) => (0, h.Z)(e, t).map((e) => e.user))))(t.sort(d.Z), s)
                            .filter((e) => (!o || o.test(e.screen_name) || o.test(e.name)) && (e.followed_by || a))
                            .map((e) => (0, m.z4)(e, u.vA.DMInjected));
                    return (0, r.Z)(c, (e) => e.id);
                };
            function p(e, t, s, a) {
                const m = e && new RegExp(`(^|.*\\s)${n()(e)}.*`, "i"),
                    p = t
                        .filter((e) => e.trusted)
                        .filter((t) => {
                            if (!e) return !0;
                            const a = m && t.name && m.test(t.name),
                                n = (0, h.Z)(t, s).map((e) => e.user),
                                i = m && n.some((e) => m.test(e.screen_name) || m.test(e.name));
                            return a || i;
                        })
                        .sort(d.Z);
                let S = p;
                if (e) {
                    const [e, t] = (0, o.Z)(p, (e) => e.type === c.eD.ONE_TO_ONE);
                    S = e.concat(t);
                }
                return (
                    (b = (0, i.Z)(
                        S.map((t) => {
                            const n = t.type === c.eD.GROUP;
                            let i = [];
                            return (n && a) || (n && i.push(l(t)), (!e && n) || (i = i.concat(g(n ? e : null, [t], s, !n)))), i;
                        }),
                    )),
                    (0, r.Z)(b, ({ id: e, type: t }) => (t === u.El.DMConversation ? `c_${e}` : `u_${e}`))
                );
                var b;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DirectMessages-fb4ffec0.a9120a5a.js.map

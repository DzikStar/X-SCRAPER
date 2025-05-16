"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TombstonedEntryHandler"],
    {
        460370: (e, t, n) => {
            n.r(t), n.d(t, { default: () => E });
            var o = n(962741),
                c = n(351322),
                s = n(438965),
                i = n(202784),
                a = n(332920),
                r = n.n(a),
                d = n(912021),
                l = n(177371),
                p = n(372703);
            const m = (0, n(668214).Z)()
                    .propsFromState(() => ({ feedbackActions: (e, t) => t.module.selectFeedbackActions(e), feedbackKey: (e, t) => t.feedbackKeys.length && t.feedbackKeys[0] }))
                    .adjustStateProps((e) => {
                        const t = e.feedbackKey ? e.feedbackActions[e.feedbackKey] : void 0,
                            n = t && t.childKeys ? t.childKeys.map((t) => ({ key: t, action: e.feedbackActions[t] })) : [];
                        return { feedbackAction: t, childFeedbackActions: n };
                    })
                    .propsFromActions(({ module: e }) => ({ applyFeedbackAction: e.applyFeedbackAction, undoFeedbackAction: e.undoFeedbackAction }))
                    .withAnalytics({ element: "feedback_dontlike" }),
                b = r().d058316c,
                k = r().e2f2b658,
                f = r().gf5e9ea6,
                u = (e, t) => e && p.S4(e, t),
                y = (e) => {
                    const { itemMetadata: t } = e;
                    return t && t.clientEventInfo && t.clientEventInfo.component;
                };
            class h extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedFollowUpOptions = (0, d.Z)((e, t, n, o, c) =>
                            (n || []).map(({ action: n, key: s }) => ({
                                label: n.prompt ?? "",
                                onClick: () => {
                                    const i = u(n, o),
                                        a = y(o),
                                        r = ((e) => {
                                            const { clientEventInfo: t } = e;
                                            return t && t.action;
                                        })(n);
                                    c.scribe({ component: a, element: i, action: r || "click" }), t({ entry: o, feedbackKeys: [s, ...e] });
                                },
                            })),
                        )),
                        (this._getFollowUpOptions = () => {
                            const { analytics: e, applyFeedbackAction: t, childFeedbackActions: n, entry: o, feedbackKeys: c } = this.props;
                            return this._getMemoizedFollowUpOptions(c, t, n, o, e);
                        }),
                        (this._handleUndo = () => {
                            const { analytics: e, entry: t, feedbackAction: n, feedbackKeys: o, onUndoRichAction: c, undoFeedbackAction: s } = this.props;
                            if (!n) return;
                            s({ entry: t, feedbackKeys: o }), c && c();
                            const i = u(n, t) || "feedback_unknown",
                                a = y(t),
                                r = p.C_(n, t);
                            e.scribe({ component: a, element: i, action: r });
                        }),
                        (this._getTombstoneMessage = () => {
                            const { feedbackAction: e } = this.props;
                            return e?.confirmation ? e.confirmation : e?.richBehavior?.markNotInterestedTopic ? k : b;
                        });
                }
                render() {
                    const { carousel: e, conversationPosition: t, conversationTreeMetadata: n, feedbackAction: o } = this.props,
                        c = this._getTombstoneMessage(),
                        s = o?.hasUndoAction;
                    return i.createElement(l.Z, { actionText: s ? f : void 0, additionalActions: this._getFollowUpOptions(), carousel: e, conversationPosition: t, conversationTreeMetadata: n, onClick: s ? this._handleUndo : void 0 }, c);
                }
            }
            h.defaultProps = { carousel: !1 };
            const v = m(h),
                A = (e) => {
                    const {
                            entry: {
                                content: { dismissedEntry: t, feedbackKeys: n },
                                conversationPosition: o,
                                conversationTreeMetadata: c,
                            },
                            feedbackItems: s,
                            module: a,
                        } = e,
                        r = i.useMemo(() => {
                            if (!s || 0 === n.length) return;
                            const e = s.find((e) => e.feedbackKey === n[0]);
                            return e?.onUndo;
                        }, [n, s]);
                    return i.createElement(v, { conversationPosition: o, conversationTreeMetadata: c, entry: t, feedbackKeys: n, module: a, onUndoRichAction: r });
                },
                _ = i.memo(A),
                E = c
                    .iH({
                        component: _,
                        feedbackEntrySelector: (e) => e.content.dismissedEntry,
                        shouldDisplayBorder: (e) => {
                            const { conversationPosition: t } = e;
                            return !t || !!t.isEnd;
                        },
                        getScribeDataItem: ({ content: e }) => {
                            const { dismissedEntry: t } = e;
                            return t.type === o.ZP.Tweet ? (0, s.Hx)(t) : void 0;
                        },
                    })
                    .getHandler();
        },
        438965: (e, t, n) => {
            n.d(t, { FE: () => s, Hx: () => r, Oj: () => c, P3: () => d, QO: () => a, j: () => i });
            var o = n(942893);
            const c = { component: "tweet" },
                s = { component: "thread" },
                i = Object.freeze({ CONVERSATION: "conversation", TIMELINE: "timeline" }),
                a =
                    (e = !1) =>
                    (t) => {
                        const { conversationPosition: n, conversationTreeMetadata: o } = t;
                        return !(e || (n && !n.isEnd && (!o || !1 !== o.descendantConnector || 0 !== o.indents.filter((e) => "line" === e.displayType).length)));
                    },
                r = (e) => o.Z.getTweetURTEntryItem(e),
                d = (e, t, n) => {
                    const o = ["descendant", "ancestor"].includes(n?.position) && !["profile", "me"].includes(e.page) ? ("descendant" === n?.position ? "conversation_descendants" : "conversation_ancestors") : e.section;
                    return { ...e, section: o, component: t?.component || e.component, action: t?.action || e.action, element: t?.element || e.element };
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TombstonedEntryHandler.09a788da.js.map

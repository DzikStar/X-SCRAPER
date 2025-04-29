"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-1d830d6b"],
    {
        204162: (e, t, a) => {
            a.d(t, { Z: () => f });
            var n = a(202784),
                o = a(154003),
                s = a(721266),
                c = a(731708),
                r = a(392237),
                l = a(664345),
                i = a(408814),
                d = a(306677),
                m = a(725516),
                u = a(125363),
                p = a(389071),
                b = a(327597),
                g = a(448781),
                C = a(928831);
            function f({ conversationKey: e, isCompactLayout: t, onClick: a, suggestion: r }) {
                const f = (0, m.z)(),
                    k = (0, u.I0)(),
                    [I, y] = n.useState(!1),
                    _ = "SEARCH" === r?.mode || "DEEPER_SEARCH" === r?.mode ? l.default : i.default,
                    w = (0, p.bD)(e),
                    E = n.useMemo(() => (t ? r.mobile : r.web), [t, r]),
                    { isReasoningEnabled: v, isResearchEnabled: x, selectDeepsearchMode: Z, selectReasoningMode: D, setDeepersearchAdvancedSettings: S, setDeepsearchAdvancedSettings: P } = (0, C.w)(),
                    M = (0, u.v9)(w.selectLastHumanMessage);
                n.useEffect(() => {
                    y(!0);
                }, []);
                const R = n.useCallback(() => {
                        f.scribe({ component: `follow_up_suggested_mode_${r.mode}`, action: "impression" });
                    }, [f, r.mode]),
                    T = n.useCallback(
                        (t) => {
                            f.scribe({ component: `follow_up_suggested_mode_${t.mode}`, action: "click" });
                            const n = "SEARCH" === t.mode,
                                o = "DEEPER_SEARCH" === t.mode,
                                s = "THINK" === t.mode;
                            (!n && !o) || x ? s && !v && D() : (o ? S() : P(), Z()), k((0, b.u)({ analytics: f, conversationKey: e })({ text: M?.message?.message, returnCitations: !0, isDeepsearch: n || o, isReasoning: s, deepsearchArgsOverride: o ? { mode: g.z_ } : void 0 })), a && a();
                        },
                        [M, f, e, k, a, v, x, Z, D, S, P],
                    );
                return n.createElement(o.ZP, { onClick: () => T(r), style: [h.buttonContainer, t && h.buttonContainerCompact, { opacity: I ? 1 : 0, transition: "opacity 0.3s ease-in" }] }, n.createElement(d.D, { id: `follow_up_mode_button_${r.mode}`, onFullyVisible: R, position: "bottom", testID: `follow_up_mode_button_${r.mode}` }), n.createElement(_, { style: h.icon }), n.createElement(s.Z, { size: "space8" }), n.createElement(c.ZP, { size: "subtext2", style: [h.suggestedModeText, t && h.suggestedModeTextCompact], weight: "medium" }, E));
            }
            const h = r.default.create((e) => ({ buttonContainer: { alignItems: "center", padding: e.spaces.space2, borderRadius: e.spaces.space20, backgroundColor: e.colors.gray50, marginTop: e.spaces.space1, flexDirection: "row", border: "none" }, buttonContainerCompact: { border: "none", backgroundColor: e.colors.gray50, marginTop: e.spaces.space1, padding: e.spaces.space1 }, iconContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, icon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray900 }, suggestedModeText: { color: e.colors.gray900 }, suggestedModeTextCompact: { color: e.colors.gray900 } }));
        },
        811085: (e, t, a) => {
            a.d(t, { W: () => h });
            var n = a(202784),
                o = a(325686),
                s = a(351743),
                c = a.n(s),
                r = a(154003),
                l = a(392237),
                i = a(674132),
                d = a.n(i),
                m = a(725516),
                u = a(125363),
                p = a(389071),
                b = a(393261),
                g = a(975617);
            const C = d().a0428662,
                f = d().fe4fd310;
            function h({ conversationKey: e, messageId: t }) {
                const a = (0, m.z)(),
                    s = (0, u.I0)(),
                    l = (0, p.bD)(e),
                    i = (0, u.v9)(p.t5),
                    [d, h] = n.useState(),
                    [I] = c()(b.Z),
                    y = (0, u.v9)(l.selectConversationId),
                    _ = (0, u.v9)((e) => l.selectMetadataForMessageId(e, t)),
                    w = n.useCallback(
                        (e) => {
                            y &&
                                _?.agentChatItemId &&
                                I({
                                    variables: { basicFeedback: { feedback_button: e }, conversationId: y, conversationItemId: _.agentChatItemId, modelVersion: i },
                                    onCompleted: (t) => {
                                        t.create_grok_conversation_feedback?.grok_feedback_error ? (0, g.J)(s) : h(e);
                                    },
                                });
                        },
                        [y, _?.agentChatItemId, i, s, I],
                    ),
                    E = n.useCallback(() => {
                        a.scribe({ action: "click", component: "thumbs_up" }), w("Like");
                    }, [a, w]),
                    v = n.useCallback(() => {
                        a.scribe({ action: "click", component: "thumbs_down" }), w("Dislike");
                    }, [a, w]);
                return n.createElement(o.Z, { style: k.root }, n.createElement(o.Z, { style: k.buttonsContainer }, n.createElement(r.ZP, { disabled: !!d, onPress: E, size: "medium", style: [k.button, k.leftControl], type: "Like" === d ? "primaryFilled" : "primaryOutlined" }, f), n.createElement(r.ZP, { disabled: !!d, onPress: v, size: "medium", style: [k.button, k.rightControl], type: "Dislike" === d ? "primaryFilled" : "primaryOutlined" }, C)));
            }
            const k = l.default.create((e) => ({ root: { backgroundColor: e.colors.navigationBackground, borderRadius: e.borderRadii.small, overflow: "hidden" }, buttonsContainer: { flexDirection: "row", justifyContent: "space-between" }, button: { flexGrow: 1, marginTop: e.spaces.space12, marginBottom: e.spaces.space12 }, leftControl: { marginStart: e.spaces.space12, marginEnd: e.spaces.space4 }, rightControl: { marginEnd: e.spaces.space12, marginStart: e.spaces.space4 } }));
        },
        276522: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(202784),
                o = a(67369),
                s = a(154003);
            function c({ color: e, disabled: t, icon: a, label: c, onPress: r, renderMenu: l }) {
                const [i, d] = n.useState(!1),
                    m = n.useMemo(() => ({ label: c }), [c]),
                    u = n.useCallback(() => d(!0), [d]),
                    p = n.useCallback(() => d(!1), [d]),
                    b = e ?? "gray700",
                    g = (0, o.Zz)() ? "medium" : "small";
                return n.createElement(s.ZP, { "aria-label": c, backgroundColor: "transparent", borderColor: "transparent", color: i ? "primary" : b, disabled: t, hoverLabel: m, icon: a, onMouseEnter: u, onMouseLeave: p, onPress: r, onPressIn: u, onPressOut: p, onTouchEnd: p, onTouchStart: u, renderMenu: l, size: g, style: { justifyContent: "flex-start" } });
            }
        },
        603416: (e, t, a) => {
            a.d(t, { Z: () => we });
            var n = a(202784),
                o = a(325686),
                s = a(392237),
                c = a(323265),
                r = a(734907),
                l = a(952793),
                i = a(125363),
                d = a(389071),
                m = a(305442),
                u = a(988290),
                p = a(674132),
                b = a.n(p),
                g = a(720526),
                C = a(601576),
                f = a(730372),
                h = a(276522);
            const k = b().b8c06820,
                I = b().f88553c8;
            function y({ text: e, textContainer: t }) {
                const a = (0, i.I0)(),
                    o = n.useCallback(() => {
                        (0, f.OR)(t.current, e), a((0, C.fz)({ text: I, withAutoDismiss: !0 }));
                    }, [t, e, a]);
                return n.createElement(h.Z, { icon: n.createElement(g.default, null), label: k, onPress: o });
            }
            var _ = a(351743),
                w = a.n(_),
                E = a(922449),
                v = a(671212),
                x = a(946474),
                Z = a(517330),
                D = a(725516),
                S = a(908118),
                P = a(393261),
                M = a(430506),
                R = a(975617);
            const T = b().ca0f5894,
                z = b().fe731016;
            function A({ conversationKey: e, messageId: t }) {
                const a = (0, D.z)(),
                    s = (0, i.I0)(),
                    c = (0, d.bD)(e),
                    r = (0, i.v9)(d.t5),
                    [m, p] = n.useState(),
                    [b] = w()(P.Z),
                    { isCompactLayout: g } = (0, u.ZP)();
                n.useEffect(() => {
                    t || p(void 0);
                }, [t]);
                const C = (0, i.v9)(c.selectConversationId),
                    f = (0, i.v9)((e) => c.selectMetadataForMessageId(e, t)),
                    k = (0, l.hC)("responsive_web_grok_feedback_label_dropdown"),
                    I = n.useCallback(
                        (e) => {
                            C &&
                                f?.agentChatItemId &&
                                b({
                                    variables: { basicFeedback: { feedback_button: e }, conversationId: C, conversationItemId: f.agentChatItemId, modelVersion: r },
                                    onCompleted: (t) => {
                                        t.create_grok_conversation_feedback?.grok_feedback_error ? (0, R.J)(s) : p(e);
                                    },
                                });
                        },
                        [C, f?.agentChatItemId, r, s, b],
                    ),
                    [y, _] = n.useState(!1),
                    [A, F] = n.useState(!1),
                    O = n.useCallback(() => {
                        a.scribe({ action: "click", component: "thumbs_up" }), I("Like");
                    }, [a, I]),
                    G = n.useCallback(() => {
                        a.scribe({ action: "click", component: "thumbs_down" }), I("Dislike"), _(!0);
                    }, [a, I]),
                    K = n.useCallback(() => {
                        C && f?.agentChatItemId && (a.scribe({ action: "click", component: "feedback_comment" }), F(!0), _(!1));
                    }, [a, C, f]),
                    H = n.useCallback(
                        (e) => {
                            C &&
                                f?.agentChatItemId &&
                                (a.scribe({ action: "click", component: "feedback_label" }),
                                _(!1),
                                b({
                                    variables: { contextualFeedback: { label_id: e }, conversationId: C, conversationItemId: f.agentChatItemId ?? "", modelVersion: r },
                                    onCompleted: (e) => {
                                        e.create_grok_conversation_feedback?.grok_feedback_error ? (0, R.J)(s) : (0, R.P)(s);
                                    },
                                }));
                        },
                        [C, f?.agentChatItemId, r, s, b, a],
                    );
                return C && f?.agentChatItemId
                    ? n.createElement(
                          o.Z,
                          { style: [L.container, g ? void 0 : L.noGap] },
                          m ? n.createElement(h.Z, { color: "primary", disabled: !0, icon: "Like" === m ? n.createElement(E.default, null) : n.createElement(v.default, null), label: "Like" === m ? z : T }) : n.createElement(n.Fragment, null, n.createElement(h.Z, { icon: n.createElement(x.default, null), label: z, onPress: O }), n.createElement(h.Z, { icon: n.createElement(Z.default, null), label: T, onPress: G })),
                          k &&
                              y &&
                              n.createElement(S.Z, {
                                  feedbackLabels: f.feedbackLabels,
                                  onClose: () => {
                                      _(!1);
                                  },
                                  onSelect: H,
                                  onSelectOtherOption: K,
                              }),
                          k &&
                              A &&
                              n.createElement(M.Z, {
                                  conversationId: C,
                                  conversationItemId: f.agentChatItemId,
                                  modelVersion: r,
                                  onClose: () => {
                                      F(!1);
                                  },
                              }),
                      )
                    : null;
            }
            const L = s.default.create((e) => ({ container: { flexDirection: "row", gap: e.spaces.space8 }, noGap: { gap: 0 } }));
            var F = a(615455),
                O = a(799027);
            function G({ memoryReferences: e }) {
                const [t, a] = n.useState(!1),
                    o = n.useCallback(() => {
                        a(!0);
                    }, []),
                    s = n.useCallback(() => {
                        a(!1);
                    }, []);
                return n.createElement(n.Fragment, null, n.createElement(h.Z, { icon: n.createElement(F.default, null), label: O.i, onPress: o }), t && n.createElement(O.Z, { memoryReferences: e, onDrawerDismiss: s }));
            }
            var K = a(807896),
                H = (a(136728), a(797553)),
                B = a(143670),
                $ = a(837020),
                V = a(737691),
                j = a(14284),
                W = a(97369),
                q = a(725405),
                J = a(530326);
            const N = b().idf94bac,
                Q = { withoutSearch: b().f7614f92, withSearch: b().c5ade3ba, withoutImage: b().c16e5b1a, withImage: b().i2ca65fa },
                U = { imageGen: !1 },
                X = { imageGen: !0 },
                Y = { webSearch: !1, xSearch: !1 },
                ee = { webSearch: !0, xSearch: !0, imageGen: !1 },
                te = (e) => () => n.createElement(o.Z, { style: ae.container }, n.createElement(e, null), n.createElement($.default, { style: ae.strike })),
                ae = s.default.create((e) => ({ container: { flex: 1, position: "relative" }, strike: { position: "absolute", bottom: 0, right: -2, width: e.spaces.space12, height: e.spaces.space12, backgroundColor: e.colors.navigationBackground } }));
            function ne({ analysisEntityId: e, conversationKey: t, hasImages: a, hasSearch: s, imageGenerationCount: c, promptSource: r, userChatItemId: d }) {
                const m = (0, i.I0)(),
                    u = (0, q.Z)(),
                    p = (0, l.hC)("responsive_web_grok_show_citations"),
                    b = (0, l.hC)("responsive_web_grok_regen_configs") && -1 === r?.indexOf("post_analysis"),
                    g = n.useCallback(
                        (a) => {
                            m((0, J.f)({ analytics: u, userChatItemId: d, conversationKey: t })({ analysisEntityId: e, returnCitations: p, imageGenerationCount: c, toolOverrides: a }));
                        },
                        [m, u, d, t, e, p, c],
                    ),
                    C = n.useCallback(() => {
                        g(U);
                    }, [g]),
                    f = n.useCallback(() => {
                        g(Y);
                    }, [g]),
                    k = n.useCallback(() => {
                        g(X);
                    }, [g]),
                    I = n.useCallback(() => {
                        g(ee);
                    }, [g]),
                    y = n.useCallback(() => {
                        g({});
                    }, [g]),
                    [_, w] = n.useState(!1),
                    E = n.useCallback(() => {
                        w(!_);
                    }, [_]),
                    v = n.useMemo(() => {
                        const e = [];
                        return b ? (e.push({ Icon: V.default, actionText: N, onClick: g }), s ? e.push({ Icon: te(j.default), actionText: Q.withoutSearch, onClick: f }) : e.push({ Icon: j.default, actionText: Q.withSearch, onClick: I }), a ? e.push({ Icon: te(W.default), actionText: Q.withoutImage, onClick: C }) : e.push({ Icon: W.default, actionText: Q.withImage, onClick: k }), e) : e;
                    }, [s, a, b, g, k, C, I, f]);
                return n.createElement(
                    o.Z,
                    null,
                    n.createElement(h.Z, { icon: n.createElement(V.default, null), label: N, onPress: v.length ? E : y }),
                    _ &&
                        n.createElement(
                            H.default,
                            { isFixed: !0, onDismiss: E, preferredHorizontalOrientation: "right" },
                            v.map((e) =>
                                n.createElement(
                                    B.Z,
                                    (0, K.Z)({}, e, {
                                        onClick: () => {
                                            e.onClick();
                                        },
                                        key: e.actionText,
                                    }),
                                ),
                            ),
                        ),
                );
            }
            var oe = a(107267),
                se = a(811176),
                ce = a(731708),
                re = a(630715),
                le = a(186444),
                ie = a(324922),
                de = a(786272),
                me = a(752435);
            const ue = b().e05c00b4,
                pe = b().d3927f88,
                be = b().f61c4bb0,
                ge = b().ifea3114,
                Ce = b().f88553c8,
                fe = b().be37ecd4,
                he = b().h708a4c0,
                ke = b().g06a67e2;
            function Ie({ conversationKey: e, messageId: t }) {
                const a = (0, i.I0)(),
                    s = (0, oe.useHistory)(),
                    r = (0, D.z)(),
                    l = (0, d.bD)(e),
                    m = (0, i.v9)((e) => l.selectMetadataForMessageId(e, t)),
                    u = (0, i.v9)(l.selectConversationId),
                    p = (0, me.Z)({ conversationId: u, metadata: m }),
                    b = n.useCallback(async () => {
                        try {
                            const e = new Promise((e, t) => {
                                p((t) => e(t), t);
                            });
                            await navigator.clipboard.write([new ClipboardItem({ "text/plain": e.then((e) => new Blob([e], { type: "text/plain" })) })]), r.scribe({ element: "grok_response_copy_button", action: "click" }), a((0, C.fz)({ text: Ce, withAutoDismiss: !0 }));
                        } catch (e) {
                            r.scribe({ element: "grok_response_copy", action: "fail" }), a((0, C.fz)({ text: fe, withAutoDismiss: !0 }));
                        }
                    }, [p, a, r]),
                    g = n.useCallback(() => {
                        p(
                            (e) => {
                                c.ZP.isTwitterApp() ? (window.location.href = `https://x.com/compose/tweet?text=${e}`) : (s.push({ pathname: "/compose/post", query: { text: e } }), r.scribe({ element: "grok_response_post_button", action: "click" }));
                            },
                            () => {},
                        );
                    }, [p, s, r]),
                    f = n.useCallback(() => {
                        p(
                            (e) => {
                                c.ZP.isTwitterApp() ? (window.location.href = `https://x.com/messages/compose?text=${e}`) : s.push({ pathname: "/messages/compose", query: { text: e } });
                            },
                            () => {},
                        );
                    }, [p, s]),
                    k = n.useMemo(
                        () => [
                            {
                                Icon: re.default,
                                text: ue,
                                onClick: () => {
                                    b();
                                },
                            },
                            { Icon: le.default, text: pe, onClick: g },
                            { Icon: ie.default, text: be, onClick: f },
                        ],
                        [b, g, f],
                    );
                return u && m ? n.createElement(h.Z, { icon: n.createElement(de.default, null), label: ge, renderMenu: (e) => n.createElement(se.Z, { description: n.createElement(o.Z, { style: ye.container }, n.createElement(ce.ZP, { weight: "bold" }, he), n.createElement(ce.ZP, { color: "gray700", size: "subtext1", style: ye.description }, ke)), items: k, onCloseRequested: e, preferredHorizontalOrientation: "right", shouldCloseOnClick: !0 }) }) : null;
            }
            const ye = s.default.create((e) => ({ container: { gap: e.spaces.space8, padding: e.spaces.space16, paddingBottom: e.spaces.space12, borderBottomWidth: e.spaces.space1, borderBottomColor: e.colors.borderColor, maxWidth: 300 }, description: { lineHeight: "140%" } })),
                _e = c.ZP.isTwitterApp();
            function we({ analysisEntityId: e, conversationKey: t, customLeftContent: a, customRightContent: s, messageId: c, promptSource: p, showPostButton: b, textContainer: g }) {
                const C = (0, d.bD)(t),
                    f = (0, i.v9)(C.selectFirstMessage),
                    h = (0, i.v9)((e) => C.selectMessageById(e, c)),
                    k = (0, m.Z)("regenerate"),
                    I = p && -1 !== p.indexOf("post_analysis") && (0, r.I)((f && f.message) || ""),
                    _ = (0, l.hC)("responsive_web_grok_show_message_reply_button"),
                    w = !_e && _ && I,
                    { isCompactLayout: E } = (0, u.ZP)(),
                    v = h.fileAttachments && h.fileAttachments.length > 0 && h.fileAttachments.every((e) => e.mimeType.startsWith("image")),
                    x = h.memoryReferences && h.memoryReferences.length;
                return n.createElement(o.Z, { style: Ee.expandedDrawer }, n.createElement(o.Z, { style: [Ee.expandedDrawerLeft, E ? Ee.smallerGap : null] }, c ? n.createElement(ne, { analysisEntityId: e, conversationKey: t, hasImages: !!h.fileAttachments?.length, hasSearch: !!h.webResults?.length, imageGenerationCount: k, promptSource: p, userChatItemId: h.userChatItemId }) : null, !c || !h.message || h.isDeleted || w || v ? null : n.createElement(y, { text: h.message, textContainer: g }), h.isDeleted ? null : n.createElement(Ie, { conversationKey: t, messageId: c }), x && n.createElement(G, { memoryReferences: h.memoryReferences || [] }), h.isDeleted ? null : n.createElement(A, { conversationKey: t, messageId: c }), !!a && a));
            }
            const Ee = s.default.create((e) => ({ expandedDrawer: { flexDirection: "row", justifyContent: "space-between", width: "100%", alignItems: "center" }, expandedDrawerLeft: { flexDirection: "row", alignItems: "center" }, expandedDrawerRight: { flexDirection: "row", gap: e.spaces.space16, alignItems: "center" }, smallerGap: { gap: e.spaces.space8 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-1d830d6b.5d317eca.js.map

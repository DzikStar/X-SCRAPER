"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-1d830d6b"],
    {
        204162: (e, t, a) => {
            a.d(t, { Z: () => h });
            var n = a(202784),
                o = a(154003),
                s = a(721266),
                r = a(731708),
                c = a(392237),
                l = a(664345),
                i = a(408814),
                d = a(306677),
                m = a(725516),
                u = a(125363),
                p = a(389071),
                b = a(327597),
                g = a(448781),
                f = a(928831);
            function h({ conversationKey: e, isCompactLayout: t, onClick: a, suggestion: c }) {
                const h = (0, m.z)(),
                    k = (0, u.I0)(),
                    [I, _] = n.useState(!1),
                    y = "SEARCH" === c?.mode || "DEEPERSEARCH" === c?.mode ? l.default : i.default,
                    v = (0, p.bD)(e),
                    w = n.useMemo(() => (t ? c.mobile : c.web), [t, c]),
                    { isReasoningEnabled: E, isResearchEnabled: x, selectDeepsearchMode: Z, selectReasoningMode: D, setDeepersearchAdvancedSettings: M, setDeepsearchAdvancedSettings: S } = (0, f.w)(),
                    P = (0, u.v9)(v.selectLastHumanMessage);
                n.useEffect(() => {
                    _(!0);
                }, []);
                const R = n.useCallback(() => {
                        h.scribe({ component: `follow_up_suggested_mode_${c.mode}`, action: "impression" });
                    }, [h, c.mode]),
                    T = n.useCallback(
                        (t) => {
                            h.scribe({ component: `follow_up_suggested_mode_${t.mode}`, action: "click" });
                            const n = "SEARCH" === t.mode,
                                o = "DEEPERSEARCH" === t.mode,
                                s = "THINK" === t.mode;
                            n || o ? (o ? M() : S(), x || Z()) : s && !E && D(), k((0, b.u)({ analytics: h, conversationKey: e })({ text: P?.message?.message, returnCitations: !0, isDeepsearch: n || o, isReasoning: s, deepsearchArgsOverride: o ? { mode: g.z_ } : void 0 })), a && a();
                        },
                        [P, h, e, k, a, E, x, Z, D, M, S],
                    );
                return n.createElement(o.ZP, { onClick: () => T(c), style: [C.buttonContainer, t && C.buttonContainerCompact, { opacity: I ? 1 : 0, transition: "opacity 0.3s ease-in" }] }, n.createElement(d.D, { id: `follow_up_mode_button_${c.mode}`, onFullyVisible: R, position: "bottom", testID: `follow_up_mode_button_${c.mode}` }), n.createElement(y, { style: C.icon }), n.createElement(s.Z, { size: "space8" }), n.createElement(r.ZP, { size: "subtext2", style: [C.suggestedModeText, t && C.suggestedModeTextCompact], weight: "medium" }, w));
            }
            const C = c.default.create((e) => ({ buttonContainer: { alignItems: "center", padding: e.spaces.space2, borderRadius: e.spaces.space20, backgroundColor: e.colors.gray50, marginTop: e.spaces.space1, flexDirection: "row", border: "none" }, buttonContainerCompact: { border: "none", backgroundColor: e.colors.gray50, marginTop: e.spaces.space1, padding: e.spaces.space1 }, iconContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, icon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray900 }, suggestedModeText: { color: e.colors.gray900 }, suggestedModeTextCompact: { color: e.colors.gray900 } }));
        },
        811085: (e, t, a) => {
            a.d(t, { W: () => C });
            var n = a(202784),
                o = a(325686),
                s = a(351743),
                r = a.n(s),
                c = a(154003),
                l = a(392237),
                i = a(674132),
                d = a.n(i),
                m = a(725516),
                u = a(125363),
                p = a(389071),
                b = a(393261),
                g = a(975617);
            const f = d().a0428662,
                h = d().fe4fd310;
            function C({ conversationKey: e, messageId: t }) {
                const a = (0, m.z)(),
                    s = (0, u.I0)(),
                    l = (0, p.bD)(e),
                    i = (0, u.v9)(p.t5),
                    [d, C] = n.useState(),
                    [I] = r()(b.Z),
                    _ = (0, u.v9)(l.selectConversationId),
                    y = (0, u.v9)((e) => l.selectMetadataForMessageId(e, t)),
                    v = n.useCallback(
                        (e) => {
                            _ &&
                                y?.agentChatItemId &&
                                I({
                                    variables: { basicFeedback: { feedback_button: e }, conversationId: _, conversationItemId: y.agentChatItemId, modelVersion: i },
                                    onCompleted: (t) => {
                                        t.create_grok_conversation_feedback?.grok_feedback_error ? (0, g.J)(s) : C(e);
                                    },
                                });
                        },
                        [_, y?.agentChatItemId, i, s, I],
                    ),
                    w = n.useCallback(() => {
                        a.scribe({ action: "click", component: "thumbs_up" }), v("Like");
                    }, [a, v]),
                    E = n.useCallback(() => {
                        a.scribe({ action: "click", component: "thumbs_down" }), v("Dislike");
                    }, [a, v]);
                return n.createElement(o.Z, { style: k.root }, n.createElement(o.Z, { style: k.buttonsContainer }, n.createElement(c.ZP, { disabled: !!d, onPress: w, size: "medium", style: [k.button, k.leftControl], type: "Like" === d ? "primaryFilled" : "primaryOutlined" }, h), n.createElement(c.ZP, { disabled: !!d, onPress: E, size: "medium", style: [k.button, k.rightControl], type: "Dislike" === d ? "primaryFilled" : "primaryOutlined" }, f)));
            }
            const k = l.default.create((e) => ({ root: { backgroundColor: e.colors.navigationBackground, borderRadius: e.borderRadii.small, overflow: "hidden" }, buttonsContainer: { flexDirection: "row", justifyContent: "space-between" }, button: { flexGrow: 1, marginTop: e.spaces.space12, marginBottom: e.spaces.space12 }, leftControl: { marginStart: e.spaces.space12, marginEnd: e.spaces.space4 }, rightControl: { marginEnd: e.spaces.space12, marginStart: e.spaces.space4 } }));
        },
        276522: (e, t, a) => {
            a.d(t, { Z: () => r });
            var n = a(202784),
                o = a(67369),
                s = a(154003);
            function r({ color: e, disabled: t, icon: a, label: r, onPress: c, renderMenu: l }) {
                const [i, d] = n.useState(!1),
                    m = n.useMemo(() => ({ label: r }), [r]),
                    u = n.useCallback(() => d(!0), [d]),
                    p = n.useCallback(() => d(!1), [d]),
                    b = e ?? "gray700",
                    g = (0, o.Zz)() ? "medium" : "small";
                return n.createElement(s.ZP, { "aria-label": r, backgroundColor: "transparent", borderColor: "transparent", color: i ? "primary" : b, disabled: t, hoverLabel: m, icon: a, onMouseEnter: u, onMouseLeave: p, onPress: c, onPressIn: u, onPressOut: p, onTouchEnd: p, onTouchStart: u, renderMenu: l, size: g, style: { justifyContent: "flex-start" } });
            }
        },
        603416: (e, t, a) => {
            a.d(t, { Z: () => we });
            var n = a(202784),
                o = a(325686),
                s = a(392237),
                r = a(323265),
                c = a(734907),
                l = a(952793),
                i = a(125363),
                d = a(389071),
                m = a(155918),
                u = a(305442),
                p = a(988290),
                b = a(674132),
                g = a.n(b),
                f = a(720526),
                h = a(725516),
                C = a(601576),
                k = a(730372),
                I = a(276522);
            const _ = g().b8c06820,
                y = g().f88553c8;
            function v({ text: e, textContainer: t }) {
                const a = (0, i.I0)(),
                    o = (0, h.z)(),
                    s = n.useCallback(() => {
                        (0, k.OR)(t.current, e), o.scribe({ element: "grok_response_copy_button", action: "click" }), a((0, C.fz)({ text: y, withAutoDismiss: !0 }));
                    }, [t, e, a, o]);
                return n.createElement(I.Z, { icon: n.createElement(f.default, null), label: _, onPress: s });
            }
            var w = a(351743),
                E = a.n(w),
                x = a(922449),
                Z = a(671212),
                D = a(946474),
                M = a(517330),
                S = a(908118),
                P = a(393261),
                R = a(430506),
                T = a(975617);
            const z = g().ca0f5894,
                A = g().fe731016;
            function O({ allMediaIds: e, allMediaUrls: t, conversationKey: a, messageId: s }) {
                const r = (0, h.z)(),
                    c = (0, i.I0)(),
                    m = (0, d.bD)(a),
                    u = (0, i.v9)(d.t5),
                    [b, g] = n.useState(),
                    [f] = E()(P.Z),
                    { isCompactLayout: C } = (0, p.ZP)();
                n.useEffect(() => {
                    s || g(void 0);
                }, [s]);
                const k = (0, i.v9)(m.selectConversationId),
                    _ = (0, i.v9)((e) => m.selectMetadataForMessageId(e, s)),
                    y = (0, l.hC)("responsive_web_grok_feedback_label_dropdown"),
                    v = {};
                e && (v.allMediaIds = e), t && (v.allMediaUrls = t);
                const w = Object.keys(v).length > 0 ? JSON.stringify(v) : void 0,
                    O = n.useCallback(
                        (e) => {
                            k &&
                                _?.agentChatItemId &&
                                f({
                                    variables: { basicFeedback: { feedback_button: e }, conversationId: k, conversationItemId: _.agentChatItemId, modelVersion: u },
                                    onCompleted: (t) => {
                                        t.create_grok_conversation_feedback?.grok_feedback_error ? (0, T.J)(c) : g(e);
                                    },
                                });
                        },
                        [k, _?.agentChatItemId, u, c, f],
                    ),
                    [F, G] = n.useState(!1),
                    [K, H] = n.useState(!1),
                    B = n.useCallback(() => {
                        r.scribe({ action: "click", component: "thumbs_up", data: { event_info: w } }), O("Like");
                    }, [r, O, w]),
                    U = n.useCallback(() => {
                        r.scribe({ action: "click", component: "thumbs_down", data: { event_info: w } }), O("Dislike"), G(!0);
                    }, [r, O, w]),
                    j = n.useCallback(() => {
                        k && _?.agentChatItemId && (r.scribe({ action: "click", component: "feedback_comment", data: { event_info: w } }), H(!0), G(!1));
                    }, [r, k, _, w]),
                    V = n.useCallback(
                        (e) => {
                            k &&
                                _?.agentChatItemId &&
                                (r.scribe({ action: "click", component: "feedback_label", data: { event_info: w } }),
                                G(!1),
                                f({
                                    variables: { contextualFeedback: { label_id: e }, conversationId: k, conversationItemId: _.agentChatItemId ?? "", modelVersion: u },
                                    onCompleted: (e) => {
                                        e.create_grok_conversation_feedback?.grok_feedback_error ? (0, T.J)(c) : (0, T.P)(c);
                                    },
                                }));
                        },
                        [k, _?.agentChatItemId, u, c, f, r, w],
                    );
                return k && _?.agentChatItemId
                    ? n.createElement(
                          o.Z,
                          { style: [L.container, C ? void 0 : L.noGap] },
                          b ? n.createElement(I.Z, { color: "primary", disabled: !0, icon: "Like" === b ? n.createElement(x.default, null) : n.createElement(Z.default, null), label: "Like" === b ? A : z }) : n.createElement(n.Fragment, null, n.createElement(I.Z, { icon: n.createElement(D.default, null), label: A, onPress: B }), n.createElement(I.Z, { icon: n.createElement(M.default, null), label: z, onPress: U })),
                          y &&
                              F &&
                              n.createElement(S.Z, {
                                  feedbackLabels: _.feedbackLabels,
                                  onClose: () => {
                                      G(!1);
                                  },
                                  onSelect: V,
                                  onSelectOtherOption: j,
                              }),
                          y &&
                              K &&
                              n.createElement(R.Z, {
                                  conversationId: k,
                                  conversationItemId: _.agentChatItemId,
                                  modelVersion: u,
                                  onClose: () => {
                                      H(!1);
                                  },
                              }),
                      )
                    : null;
            }
            const L = s.default.create((e) => ({ container: { flexDirection: "row", gap: e.spaces.space8 }, noGap: { gap: 0 } }));
            var F = a(615455),
                G = a(799027);
            function K({ memoryReferences: e }) {
                const [t, a] = n.useState(!1),
                    o = n.useCallback(() => {
                        a(!0);
                    }, []),
                    s = n.useCallback(() => {
                        a(!1);
                    }, []);
                return n.createElement(n.Fragment, null, n.createElement(I.Z, { icon: n.createElement(F.default, null), label: G.i, onPress: o }), t && n.createElement(G.Z, { memoryReferences: e, onDrawerDismiss: s }));
            }
            var H = a(807896),
                B = (a(136728), a(797553)),
                U = a(143670),
                j = a(837020),
                V = a(737691),
                $ = a(14284),
                J = a(97369),
                W = a(725405),
                q = a(530326);
            const N = g().idf94bac,
                Q = { withoutSearch: g().f7614f92, withSearch: g().c5ade3ba, withoutImage: g().c16e5b1a, withImage: g().i2ca65fa },
                X = { imageGen: !1 },
                Y = { imageGen: !0 },
                ee = { webSearch: !1, xSearch: !1 },
                te = { webSearch: !0, xSearch: !0, imageGen: !1 },
                ae = (e) => () => n.createElement(o.Z, { style: ne.container }, n.createElement(e, null), n.createElement(j.default, { style: ne.strike })),
                ne = s.default.create((e) => ({ container: { flex: 1, position: "relative" }, strike: { position: "absolute", bottom: 0, right: -2, width: e.spaces.space12, height: e.spaces.space12, backgroundColor: e.colors.navigationBackground } }));
            function oe({ analysisEntityId: e, conversationKey: t, hasImages: a, hasSearch: s, imageGenerationCount: r, promptSource: c, userChatItemId: d }) {
                const m = (0, i.I0)(),
                    u = (0, W.Z)(),
                    p = (0, l.hC)("responsive_web_grok_show_citations"),
                    b = (0, l.hC)("responsive_web_grok_regen_configs") && -1 === c?.indexOf("post_analysis"),
                    g = n.useCallback(
                        (a) => {
                            m((0, q.f)({ analytics: u, userChatItemId: d, conversationKey: t })({ analysisEntityId: e, returnCitations: p, imageGenerationCount: r, toolOverrides: a }));
                        },
                        [m, u, d, t, e, p, r],
                    ),
                    f = n.useCallback(() => {
                        g(X);
                    }, [g]),
                    h = n.useCallback(() => {
                        g(ee);
                    }, [g]),
                    C = n.useCallback(() => {
                        g(Y);
                    }, [g]),
                    k = n.useCallback(() => {
                        g(te);
                    }, [g]),
                    _ = n.useCallback(() => {
                        g({});
                    }, [g]),
                    [y, v] = n.useState(!1),
                    w = n.useCallback(() => {
                        v(!y);
                    }, [y]),
                    E = n.useMemo(() => {
                        const e = [];
                        return b ? (e.push({ Icon: V.default, actionText: N, onClick: g }), s ? e.push({ Icon: ae($.default), actionText: Q.withoutSearch, onClick: h }) : e.push({ Icon: $.default, actionText: Q.withSearch, onClick: k }), a ? e.push({ Icon: ae(J.default), actionText: Q.withoutImage, onClick: f }) : e.push({ Icon: J.default, actionText: Q.withImage, onClick: C }), e) : e;
                    }, [s, a, b, g, C, f, k, h]);
                return n.createElement(
                    o.Z,
                    null,
                    n.createElement(I.Z, { icon: n.createElement(V.default, null), label: N, onPress: E.length ? w : _ }),
                    y &&
                        n.createElement(
                            B.default,
                            { isFixed: !0, onDismiss: w, preferredHorizontalOrientation: "right" },
                            E.map((e) =>
                                n.createElement(
                                    U.Z,
                                    (0, H.Z)({}, e, {
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
            var se = a(107267),
                re = a(811176),
                ce = a(731708),
                le = a(630715),
                ie = a(186444),
                de = a(324922),
                me = a(786272),
                ue = a(752435);
            const pe = g().e05c00b4,
                be = g().d3927f88,
                ge = g().f61c4bb0,
                fe = g().ifea3114,
                he = g().f88553c8,
                Ce = g().be37ecd4,
                ke = g().h708a4c0,
                Ie = g().g06a67e2;
            function _e({ allMediaIds: e, allMediaUrls: t, conversationKey: a, messageId: s }) {
                const c = (0, i.I0)(),
                    l = (0, se.useHistory)(),
                    m = (0, h.z)(),
                    u = (0, d.bD)(a),
                    p = (0, i.v9)((e) => u.selectMetadataForMessageId(e, s)),
                    b = (0, i.v9)(u.selectConversationId),
                    g = {};
                e && (g.allMediaIds = e), t && (g.allMediaUrls = t);
                const f = Object.keys(g).length > 0 ? JSON.stringify(g) : void 0,
                    k = (0, ue.Z)({ conversationId: b, metadata: p }),
                    _ = n.useCallback(async () => {
                        try {
                            const e = new Promise((e, t) => {
                                k((t) => e(t), t);
                            });
                            await navigator.clipboard.write([new ClipboardItem({ "text/plain": e.then((e) => new Blob([e], { type: "text/plain" })) })]), m.scribe({ element: "grok_response_copy_share_link_button", action: "click", data: { event_info: f } }), c((0, C.fz)({ text: he, withAutoDismiss: !0 }));
                        } catch (e) {
                            m.scribe({ element: "grok_response_copy_share_link", action: "fail", data: { event_info: f } }), c((0, C.fz)({ text: Ce, withAutoDismiss: !0 }));
                        }
                    }, [k, c, m, f]),
                    y = n.useCallback(() => {
                        k(
                            (e) => {
                                m.scribe({ element: "grok_response_post_button", action: "click", data: { event_info: f } }), r.ZP.isTwitterApp() ? (window.location.href = `https://x.com/compose/tweet?text=${e}`) : l.push({ pathname: "/compose/post", query: { text: e } });
                            },
                            () => {},
                        );
                    }, [k, l, m, f]),
                    v = n.useCallback(() => {
                        k(
                            (e) => {
                                m.scribe({ element: "grok_response_share_dm_button", action: "click", data: { event_info: f } }), r.ZP.isTwitterApp() ? (window.location.href = `https://x.com/messages/compose?text=${e}`) : l.push({ pathname: "/messages/compose", query: { text: e } });
                            },
                            () => {},
                        );
                    }, [k, l, m, f]),
                    w = n.useMemo(
                        () => [
                            {
                                Icon: le.default,
                                text: pe,
                                onClick: () => {
                                    _();
                                },
                            },
                            { Icon: ie.default, text: be, onClick: y },
                            { Icon: de.default, text: ge, onClick: v },
                        ],
                        [_, y, v],
                    );
                return b && p ? n.createElement(I.Z, { icon: n.createElement(me.default, null), label: fe, renderMenu: (e) => n.createElement(re.Z, { description: n.createElement(o.Z, { style: ye.container }, n.createElement(ce.ZP, { weight: "bold" }, ke), n.createElement(ce.ZP, { color: "gray700", size: "subtext1", style: ye.description }, Ie)), items: w, onCloseRequested: e, preferredHorizontalOrientation: "right", shouldCloseOnClick: !0 }) }) : null;
            }
            const ye = s.default.create((e) => ({ container: { gap: e.spaces.space8, padding: e.spaces.space16, paddingBottom: e.spaces.space12, borderBottomWidth: e.spaces.space1, borderBottomColor: e.colors.borderColor, maxWidth: 300 }, description: { lineHeight: "140%" } })),
                ve = r.ZP.isTwitterApp();
            function we({ analysisEntityId: e, conversationKey: t, customLeftContent: a, customRightContent: s, messageId: r, promptSource: b, showPostButton: g, textContainer: f }) {
                const h = (0, d.bD)(t),
                    C = (0, i.v9)(h.selectFirstMessage),
                    k = (0, i.v9)((e) => h.selectMessageById(e, r)),
                    I = (0, u.Z)("regenerate"),
                    _ = b && -1 !== b.indexOf("post_analysis") && (0, c.I)((C && C.message) || ""),
                    y = (0, l.hC)("responsive_web_grok_show_message_reply_button"),
                    w = !ve && y && _,
                    { isCompactLayout: E } = (0, p.ZP)(),
                    x = k.fileAttachments && k.fileAttachments.length > 0 && k.fileAttachments.every((e) => e.mimeType.startsWith("image")),
                    { mediaIds: Z, mediaUrls: D } = (0, m.VU)(k),
                    M = k.memoryReferences && k.memoryReferences.length;
                return n.createElement(o.Z, { style: Ee.expandedDrawer }, n.createElement(o.Z, { style: [Ee.expandedDrawerLeft, E ? Ee.smallerGap : null] }, r ? n.createElement(oe, { analysisEntityId: e, conversationKey: t, hasImages: !!k.fileAttachments?.length, hasSearch: !!k.webResults?.length, imageGenerationCount: I, promptSource: b, userChatItemId: k.userChatItemId }) : null, !r || !k.message || k.isDeleted || w || x ? null : n.createElement(v, { text: k.message, textContainer: f }), k.isDeleted ? null : n.createElement(_e, { allMediaIds: Z, allMediaUrls: D, conversationKey: t, messageId: r }), M && n.createElement(K, { memoryReferences: k.memoryReferences || [] }), k.isDeleted ? null : n.createElement(O, { allMediaIds: Z, allMediaUrls: D, conversationKey: t, messageId: r }), !!a && a));
            }
            const Ee = s.default.create((e) => ({ expandedDrawer: { flexDirection: "row", justifyContent: "space-between", width: "100%", alignItems: "center" }, expandedDrawerLeft: { flexDirection: "row", alignItems: "center" }, expandedDrawerRight: { flexDirection: "row", gap: e.spaces.space16, alignItems: "center" }, smallerGap: { gap: e.spaces.space8 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-1d830d6b.3ce3e05a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-1d830d6b"],
    {
        204162: (e, t, a) => {
            a.d(t, { Z: () => k });
            var n = a(202784),
                o = a(325686),
                s = a(466792),
                r = a(731708),
                l = a(392237),
                i = a(664345),
                c = a(408814),
                d = a(837020),
                m = a(306677),
                u = a(725516),
                p = a(125363),
                b = a(389071),
                g = a(327597),
                f = a(448781),
                h = a(928831);
            function k({ conversationKey: e, isAnimated: t, isCompactLayout: a, suggestion: l }) {
                const k = (0, u.z)(),
                    I = (0, p.I0)(),
                    [_, y] = n.useState(!0),
                    v = "SEARCH" === l?.mode || "DEEPERSEARCH" === l?.mode ? i.default : c.default,
                    E = (0, b.bD)(e),
                    w = n.useMemo(() => (a ? l.mobile : l.web), [a, l]),
                    { isReasoningEnabled: x, isResearchEnabled: Z, selectDeepsearchFilterKey: D, selectReasoningFilterKey: S } = (0, h.w)(),
                    M = (0, p.v9)(E.selectLastHumanMessage),
                    R = n.useCallback(() => {
                        k.scribe({ component: `follow_up_suggested_mode_${l.mode}`, action: "impression" });
                    }, [k, l.mode]),
                    P = n.useCallback(
                        (t) => {
                            k.scribe({ component: `follow_up_suggested_mode_${t.mode}`, action: "click" });
                            const a = "SEARCH" === t.mode,
                                n = "DEEPERSEARCH" === t.mode,
                                o = "THINK" === t.mode,
                                s = "THINK_HARDER" === t.mode;
                            let r;
                            switch (t.mode) {
                                case "SEARCH":
                                case "DEEPERSEARCH":
                                    Z || D();
                                    break;
                                case "THINK":
                                    x || S();
                                    break;
                                case "THINK_HARDER":
                                    x || S(), (r = "THINK_HARDER");
                            }
                            I((0, g.u)({ analytics: k, conversationKey: e })({ text: M?.message?.message, returnCitations: !0, isDeepsearch: a || n, isReasoning: o || s, deepsearchArgsOverride: n ? { mode: f.z_ } : void 0, promptMetadata: r ? { promptSource: "FOLLOW_UP", action: "INPUT", properties: { followUpType: r, messageType: "TEXT" } } : void 0 }));
                        },
                        [M, k, e, I, x, Z, D, S],
                    );
                return _
                    ? n.createElement(
                          o.Z,
                          { style: [C.container, t ? C.animation : void 0] },
                          n.createElement(s.Z, null, ({ isHovered: e }) => n.createElement(o.Z, { onClick: () => P(l), style: [C.button, e ? C.hovered : void 0] }, n.createElement(m.D, { id: `follow_up_mode_button_${l.mode}`, onFullyVisible: R, position: "bottom", testID: `follow_up_mode_button_${l.mode}` }), n.createElement(v, { style: C.icon }), n.createElement(r.ZP, { size: "subtext2", style: C.suggestedModeText, weight: "medium" }, w))),
                          n.createElement(s.Z, null, ({ isHovered: e }) => n.createElement(o.Z, { onClick: () => y(!1), style: [C.button, e ? C.hovered : void 0] }, n.createElement(d.default, { style: C.icon }))),
                      )
                    : null;
            }
            const C = l.default.create((e) => ({ container: { maxWidth: "100%", marginStart: "auto", marginEnd: "auto", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: e.spaces.space8, position: "absolute", top: -44, start: 0, end: 0, bottom: 0, height: "max-content" }, button: { flexDirection: "row", padding: e.spaces.space12, alignItems: "center", borderRadius: e.borderRadii.infinite, overflow: "hidden", cursor: "pointer", gap: e.spaces.space4, backgroundColor: e.colors.gray50, borderColor: e.colors.gray200, borderWidth: 1, transition: "background-color 0.2s" }, animation: { animationDelay: "0.2s", animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(20px)" }, "100%": { opacity: 1, transform: "translateY(0px)" } }], animationTimingFunction: "ease", animationFillMode: "both" }, hovered: { backgroundColor: e.colors.gray100 }, icon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray900 }, suggestedModeText: { color: e.colors.gray900 } }));
        },
        583429: (e, t, a) => {
            a.d(t, { W: () => k });
            var n = a(202784),
                o = a(325686),
                s = a(351743),
                r = a.n(s),
                l = a(154003),
                i = a(392237),
                c = a(111677),
                d = a.n(c),
                m = a(725516),
                u = a(125363),
                p = a(389071),
                b = a(393261),
                g = a(975617);
            const f = d().a0428662,
                h = d().fe4fd310;
            function k({ conversationKey: e, messageId: t }) {
                const a = (0, m.z)(),
                    s = (0, u.I0)(),
                    i = (0, p.bD)(e),
                    c = (0, u.v9)(p.t5),
                    [d, k] = n.useState(),
                    [I] = r()(b.Z),
                    _ = (0, u.v9)(i.selectConversationId),
                    y = (0, u.v9)((e) => i.selectMetadataForMessageId(e, t)),
                    v = n.useCallback(
                        (e) => {
                            _ &&
                                y?.agentChatItemId &&
                                I({
                                    variables: { basicFeedback: { feedback_button: e }, conversationId: _, conversationItemId: y.agentChatItemId, modelVersion: c },
                                    onCompleted: (t) => {
                                        t.create_grok_conversation_feedback?.grok_feedback_error ? (0, g.J)(s) : k(e);
                                    },
                                });
                        },
                        [_, y?.agentChatItemId, c, s, I],
                    ),
                    E = n.useCallback(() => {
                        a.scribe({ action: "click", component: "thumbs_up" }), v("Like");
                    }, [a, v]),
                    w = n.useCallback(() => {
                        a.scribe({ action: "click", component: "thumbs_down" }), v("Dislike");
                    }, [a, v]);
                return n.createElement(o.Z, { style: C.root }, n.createElement(o.Z, { style: C.buttonsContainer }, n.createElement(l.ZP, { disabled: !!d, onPress: E, size: "medium", style: [C.button, C.leftControl], type: "Like" === d ? "primaryFilled" : "primaryOutlined" }, h), n.createElement(l.ZP, { disabled: !!d, onPress: w, size: "medium", style: [C.button, C.rightControl], type: "Dislike" === d ? "primaryFilled" : "primaryOutlined" }, f)));
            }
            const C = i.default.create((e) => ({ root: { backgroundColor: e.colors.navigationBackground, borderRadius: e.borderRadii.small, overflow: "hidden" }, buttonsContainer: { flexDirection: "row", justifyContent: "space-between" }, button: { flexGrow: 1, marginTop: e.spaces.space12, marginBottom: e.spaces.space12 }, leftControl: { marginStart: e.spaces.space12, marginEnd: e.spaces.space4 }, rightControl: { marginEnd: e.spaces.space12, marginStart: e.spaces.space4 } }));
        },
        276522: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(202784),
                o = a(392237),
                s = a(67369),
                r = a(154003);
            function l({ color: e, disabled: t, icon: a, label: l, onPress: i, renderMenu: c }) {
                const [d, m] = n.useState(!1),
                    u = n.useMemo(() => ({ label: l }), [l]),
                    p = n.useCallback(() => m(!0), [m]),
                    b = n.useCallback(() => m(!1), [m]),
                    g = e ?? ("light" === o.default.theme.paletteName ? "gray700" : "gray900"),
                    f = (0, s.Zz)() ? "medium" : "small";
                return n.createElement(r.ZP, { "aria-label": l, backgroundColor: "transparent", borderColor: "transparent", color: d ? "primary" : g, disabled: t, hoverLabel: u, icon: a, onMouseEnter: p, onMouseLeave: b, onPress: i, onPressIn: p, onPressOut: b, onTouchEnd: b, onTouchStart: p, renderMenu: c, size: f, style: { justifyContent: "flex-start" } });
            }
        },
        603416: (e, t, a) => {
            a.d(t, { Z: () => Ee });
            var n = a(202784),
                o = a(325686),
                s = a(392237),
                r = a(323265),
                l = a(734907),
                i = a(952793),
                c = a(125363),
                d = a(389071),
                m = a(155918),
                u = a(305442),
                p = a(988290),
                b = a(111677),
                g = a.n(b),
                f = a(720526),
                h = a(725516),
                k = a(601576),
                C = a(730372),
                I = a(276522);
            const _ = g().b8c06820,
                y = g().f88553c8;
            function v({ text: e, textContainer: t }) {
                const a = (0, c.I0)(),
                    o = (0, h.z)(),
                    s = n.useCallback(() => {
                        (0, C.OR)(t.current, e), o.scribe({ element: "grok_response_copy_button", action: "click" }), a((0, k.fz)({ text: y, withAutoDismiss: !0 }));
                    }, [t, e, a, o]);
                return n.createElement(I.Z, { icon: n.createElement(f.default, null), label: _, onPress: s });
            }
            var E = a(351743),
                w = a.n(E),
                x = a(922449),
                Z = a(671212),
                D = a(946474),
                S = a(517330),
                M = a(908118),
                R = a(393261),
                P = a(430506),
                T = a(975617);
            const A = g().ca0f5894,
                H = g().fe731016;
            function K({ allMediaIds: e, allMediaUrls: t, conversationKey: a, messageId: s }) {
                const r = (0, h.z)(),
                    l = (0, c.I0)(),
                    m = (0, d.bD)(a),
                    u = (0, c.v9)(d.t5),
                    [b, g] = n.useState(),
                    [f] = w()(R.Z),
                    { isCompactLayout: k } = (0, p.ZP)();
                n.useEffect(() => {
                    s || g(void 0);
                }, [s]);
                const C = (0, c.v9)(m.selectConversationId),
                    _ = (0, c.v9)((e) => m.selectMetadataForMessageId(e, s)),
                    y = (0, i.hC)("responsive_web_grok_feedback_label_dropdown"),
                    v = {};
                e && (v.allMediaIds = e), t && (v.allMediaUrls = t);
                const E = Object.keys(v).length > 0 ? JSON.stringify(v) : void 0,
                    K = n.useCallback(
                        (e) => {
                            C &&
                                _?.agentChatItemId &&
                                f({
                                    variables: { basicFeedback: { feedback_button: e }, conversationId: C, conversationItemId: _.agentChatItemId, modelVersion: u },
                                    onCompleted: (t) => {
                                        t.create_grok_conversation_feedback?.grok_feedback_error ? (0, T.J)(l) : g(e);
                                    },
                                });
                        },
                        [C, _?.agentChatItemId, u, l, f],
                    ),
                    [F, L] = n.useState(!1),
                    [z, G] = n.useState(!1),
                    U = n.useCallback(() => {
                        r.scribe({ action: "click", component: "thumbs_up", data: { event_info: E } }), K("Like");
                    }, [r, K, E]),
                    B = n.useCallback(() => {
                        r.scribe({ action: "click", component: "thumbs_down", data: { event_info: E } }), K("Dislike"), L(!0);
                    }, [r, K, E]),
                    N = n.useCallback(() => {
                        C && _?.agentChatItemId && (r.scribe({ action: "click", component: "feedback_comment", data: { event_info: E } }), G(!0), L(!1));
                    }, [r, C, _, E]),
                    W = n.useCallback(
                        (e) => {
                            C &&
                                _?.agentChatItemId &&
                                (r.scribe({ action: "click", component: "feedback_label", data: { event_info: E } }),
                                L(!1),
                                f({
                                    variables: { contextualFeedback: { label_id: e }, conversationId: C, conversationItemId: _.agentChatItemId ?? "", modelVersion: u },
                                    onCompleted: (e) => {
                                        e.create_grok_conversation_feedback?.grok_feedback_error ? (0, T.J)(l) : (0, T.P)(l);
                                    },
                                }));
                        },
                        [C, _?.agentChatItemId, u, l, f, r, E],
                    );
                return C && _?.agentChatItemId
                    ? n.createElement(
                          o.Z,
                          { style: [O.container, k ? void 0 : O.noGap] },
                          b ? n.createElement(I.Z, { color: "primary", disabled: !0, icon: "Like" === b ? n.createElement(x.default, null) : n.createElement(Z.default, null), label: "Like" === b ? H : A }) : n.createElement(n.Fragment, null, n.createElement(I.Z, { icon: n.createElement(D.default, null), label: H, onPress: U }), n.createElement(I.Z, { icon: n.createElement(S.default, null), label: A, onPress: B })),
                          y &&
                              F &&
                              n.createElement(M.Z, {
                                  feedbackLabels: _.feedbackLabels,
                                  onClose: () => {
                                      L(!1);
                                  },
                                  onSelect: W,
                                  onSelectOtherOption: N,
                              }),
                          y &&
                              z &&
                              n.createElement(P.Z, {
                                  conversationId: C,
                                  conversationItemId: _.agentChatItemId,
                                  modelVersion: u,
                                  onClose: () => {
                                      G(!1);
                                  },
                              }),
                      )
                    : null;
            }
            const O = s.default.create((e) => ({ container: { flexDirection: "row", gap: e.spaces.space8 }, noGap: { gap: 0 } }));
            var F = a(615455),
                L = a(799027);
            function z({ memoryReferences: e }) {
                const [t, a] = n.useState(!1),
                    o = n.useCallback(() => {
                        a(!0);
                    }, []),
                    s = n.useCallback(() => {
                        a(!1);
                    }, []);
                return n.createElement(n.Fragment, null, n.createElement(I.Z, { icon: n.createElement(F.default, null), label: L.i, onPress: o }), t && n.createElement(L.Z, { memoryReferences: e, onDrawerDismiss: s }));
            }
            var G = a(807896),
                U = (a(136728), a(797553)),
                B = a(143670),
                N = a(837020),
                W = a(737691),
                j = a(14284),
                V = a(97369),
                $ = a(725405),
                J = a(530326);
            const q = g().idf94bac,
                Y = { withoutSearch: g().f7614f92, withSearch: g().c5ade3ba, withoutImage: g().c16e5b1a, withImage: g().i2ca65fa },
                X = { imageGen: !1 },
                Q = { imageGen: !0 },
                ee = { webSearch: !1, xSearch: !1 },
                te = { webSearch: !0, xSearch: !0, imageGen: !1 },
                ae = (e) => () => n.createElement(o.Z, { style: ne.container }, n.createElement(e, null), n.createElement(N.default, { style: ne.strike })),
                ne = s.default.create((e) => ({ container: { flex: 1, position: "relative" }, strike: { position: "absolute", bottom: 0, right: -2, width: e.spaces.space12, height: e.spaces.space12, backgroundColor: e.colors.navigationBackground } }));
            function oe({ analysisEntityId: e, conversationKey: t, hasImages: a, hasSearch: s, imageGenerationCount: r, promptSource: l, userChatItemId: d }) {
                const m = (0, c.I0)(),
                    u = (0, $.Z)(),
                    p = (0, i.hC)("responsive_web_grok_show_citations"),
                    b = (0, i.hC)("responsive_web_grok_regen_configs") && -1 === l?.indexOf("post_analysis"),
                    g = n.useCallback(
                        (a) => {
                            m((0, J.f)({ analytics: u, userChatItemId: d, conversationKey: t })({ analysisEntityId: e, returnCitations: p, imageGenerationCount: r, toolOverrides: a }));
                        },
                        [m, u, d, t, e, p, r],
                    ),
                    f = n.useCallback(() => {
                        g(X);
                    }, [g]),
                    h = n.useCallback(() => {
                        g(ee);
                    }, [g]),
                    k = n.useCallback(() => {
                        g(Q);
                    }, [g]),
                    C = n.useCallback(() => {
                        g(te);
                    }, [g]),
                    _ = n.useCallback(() => {
                        g({});
                    }, [g]),
                    [y, v] = n.useState(!1),
                    E = n.useCallback(() => {
                        v(!y);
                    }, [y]),
                    w = n.useMemo(() => {
                        const e = [];
                        return b ? (e.push({ Icon: W.default, actionText: q, onClick: g }), s ? e.push({ Icon: ae(j.default), actionText: Y.withoutSearch, onClick: h }) : e.push({ Icon: j.default, actionText: Y.withSearch, onClick: C }), a ? e.push({ Icon: ae(V.default), actionText: Y.withoutImage, onClick: f }) : e.push({ Icon: V.default, actionText: Y.withImage, onClick: k }), e) : e;
                    }, [s, a, b, g, k, f, C, h]);
                return n.createElement(
                    o.Z,
                    null,
                    n.createElement(I.Z, { icon: n.createElement(W.default, null), label: q, onPress: w.length ? E : _ }),
                    y &&
                        n.createElement(
                            U.default,
                            { isFixed: !0, onDismiss: E, preferredHorizontalOrientation: "right" },
                            w.map((e) =>
                                n.createElement(
                                    B.Z,
                                    (0, G.Z)({}, e, {
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
                le = a(731708),
                ie = a(630715),
                ce = a(186444),
                de = a(324922),
                me = a(786272),
                ue = a(752435);
            const pe = g().e05c00b4,
                be = g().d3927f88,
                ge = g().f61c4bb0,
                fe = g().ifea3114,
                he = g().f88553c8,
                ke = g().be37ecd4,
                Ce = g().h708a4c0,
                Ie = g().g06a67e2;
            function _e({ allMediaIds: e, allMediaUrls: t, conversationKey: a, messageId: s }) {
                const l = (0, c.I0)(),
                    i = (0, se.useHistory)(),
                    m = (0, h.z)(),
                    u = (0, d.bD)(a),
                    p = (0, c.v9)((e) => u.selectMetadataForMessageId(e, s)),
                    b = (0, c.v9)(u.selectConversationId),
                    g = {};
                e && (g.allMediaIds = e), t && (g.allMediaUrls = t);
                const f = Object.keys(g).length > 0 ? JSON.stringify(g) : void 0,
                    C = (0, ue.Z)({ conversationId: b, metadata: p }),
                    _ = n.useCallback(async () => {
                        try {
                            const e = new Promise((e, t) => {
                                C((t) => e(t), t);
                            });
                            await navigator.clipboard.write([new ClipboardItem({ "text/plain": e.then((e) => new Blob([e], { type: "text/plain" })) })]), m.scribe({ element: "grok_response_copy_share_link_button", action: "click", data: { event_info: f } }), l((0, k.fz)({ text: he, withAutoDismiss: !0 }));
                        } catch (e) {
                            m.scribe({ element: "grok_response_copy_share_link", action: "fail", data: { event_info: f } }), l((0, k.fz)({ text: ke, withAutoDismiss: !0 }));
                        }
                    }, [C, l, m, f]),
                    y = n.useCallback(() => {
                        C(
                            (e) => {
                                m.scribe({ element: "grok_response_post_button", action: "click", data: { event_info: f } }), r.ZP.isTwitterApp() ? (window.location.href = `https://x.com/compose/tweet?text=${e}`) : i.push({ pathname: "/compose/post", query: { text: e } });
                            },
                            () => {},
                        );
                    }, [C, i, m, f]),
                    v = n.useCallback(() => {
                        C(
                            (e) => {
                                m.scribe({ element: "grok_response_share_dm_button", action: "click", data: { event_info: f } }), r.ZP.isTwitterApp() ? (window.location.href = `https://x.com/messages/compose?text=${e}`) : i.push({ pathname: "/messages/compose", query: { text: e } });
                            },
                            () => {},
                        );
                    }, [C, i, m, f]),
                    E = n.useMemo(
                        () => [
                            {
                                Icon: ie.default,
                                text: pe,
                                onClick: () => {
                                    _();
                                },
                            },
                            { Icon: ce.default, text: be, onClick: y },
                            { Icon: de.default, text: ge, onClick: v },
                        ],
                        [_, y, v],
                    );
                return b && p ? n.createElement(I.Z, { icon: n.createElement(me.default, null), label: fe, renderMenu: (e) => n.createElement(re.Z, { description: n.createElement(o.Z, { style: ye.container }, n.createElement(le.ZP, { weight: "bold" }, Ce), n.createElement(le.ZP, { color: "gray700", size: "subtext1", style: ye.description }, Ie)), items: E, onCloseRequested: e, preferredHorizontalOrientation: "right", shouldCloseOnClick: !0 }) }) : null;
            }
            const ye = s.default.create((e) => ({ container: { gap: e.spaces.space8, padding: e.spaces.space16, paddingBottom: e.spaces.space12, borderBottomWidth: e.spaces.space1, borderBottomColor: e.colors.borderColor, maxWidth: 300 }, description: { lineHeight: "140%" } })),
                ve = r.ZP.isTwitterApp();
            function Ee({ analysisEntityId: e, conversationKey: t, customLeftContent: a, customRightContent: s, messageId: r, promptSource: b, showPostButton: g, textContainer: f }) {
                const h = (0, d.bD)(t),
                    k = (0, c.v9)(h.selectFirstMessage),
                    C = (0, c.v9)((e) => h.selectMessageById(e, r)),
                    I = (0, u.Z)("regenerate"),
                    _ = b && -1 !== b.indexOf("post_analysis") && (0, l.I)((k && k.message) || ""),
                    y = (0, i.hC)("responsive_web_grok_show_message_reply_button"),
                    E = !ve && y && _,
                    { isCompactLayout: w } = (0, p.ZP)(),
                    x = C.fileAttachments && C.fileAttachments.length > 0 && C.fileAttachments.every((e) => e.mimeType.startsWith("image")),
                    { mediaIds: Z, mediaUrls: D } = (0, m.VU)(C),
                    S = C.memoryReferences && C.memoryReferences.length;
                return n.createElement(o.Z, { style: we.expandedDrawer }, n.createElement(o.Z, { style: [we.expandedDrawerLeft, w ? we.smallerGap : null] }, r ? n.createElement(oe, { analysisEntityId: e, conversationKey: t, hasImages: !!C.fileAttachments?.length, hasSearch: !!C.webResults?.length, imageGenerationCount: I, promptSource: b, userChatItemId: C.userChatItemId }) : null, !r || !C.message || C.isDeleted || E || x ? null : n.createElement(v, { text: C.message, textContainer: f }), C.isDeleted ? null : n.createElement(_e, { allMediaIds: Z, allMediaUrls: D, conversationKey: t, messageId: r }), S && n.createElement(z, { memoryReferences: C.memoryReferences || [] }), C.isDeleted ? null : n.createElement(K, { allMediaIds: Z, allMediaUrls: D, conversationKey: t, messageId: r }), !!a && a));
            }
            const we = s.default.create((e) => ({ expandedDrawer: { flexDirection: "row", justifyContent: "space-between", width: "100%", alignItems: "center" }, expandedDrawerLeft: { flexDirection: "row", alignItems: "center" }, expandedDrawerRight: { flexDirection: "row", gap: e.spaces.space16, alignItems: "center" }, smallerGap: { gap: e.spaces.space8 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-1d830d6b.d22512ea.js.map

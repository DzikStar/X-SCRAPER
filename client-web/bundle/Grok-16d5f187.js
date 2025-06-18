"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-16d5f187"],
    {
        226247: (e, a, n) => {
            n.d(a, { e: () => w });
            var o = n(202784),
                t = n(325686),
                d = n(67369),
                r = n(731708),
                l = n(721266),
                s = n(992942),
                i = n(154003),
                c = n(392237),
                u = n(111677),
                b = n.n(u),
                p = n(837020),
                m = n(480241);
            const h = b().e68b09b4,
                g = { label: h },
                w = ({ button: e, image: a, onRemove: n, text: c, title: u }) => {
                    const b = (0, d.yu)();
                    return o.createElement(t.Z, { style: [D.container, b ? { zoom: 0.8 } : void 0] }, o.createElement(t.Z, { style: D.content }, o.createElement(t.Z, { style: D.textContainer }, o.createElement(r.ZP, { size: "title4", weight: "medium" }, u), o.createElement(l.Z, { size: "space4" }), o.createElement(r.ZP, { color: "gray700" }, c)), e ? o.createElement(t.Z, { style: D.buttonContainer }, e) : null), a ? o.createElement(t.Z, { style: D.imageWrapper }, a) : null, o.createElement(s.Z, { resizeMode: "cover", source: { uri: m }, style: D.bottomGrid }), n ? o.createElement(i.ZP, { "aria-label": h, hoverLabel: g, icon: o.createElement(p.default, null), onClick: n, size: "xSmall", style: D.closeButton, type: "onMediaDominantColorFilled" }) : null);
                },
                D = c.default.create((e) => ({ container: { overflow: "hidden", borderRadius: e.borderRadii.large, borderWidth: e.spaces.space1, borderColor: e.colors.borderColor, paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space20, gap: e.spaces.space20, position: "relative", flexDirection: "row", alignItems: "center" }, content: { position: "relative", gap: e.spaces.space12, boxSizing: "border-box", flex: 1, zIndex: 100 }, textContainer: { flex: 1, gap: e.spaces.space4 }, imageWrapper: { position: "relative", paddingVertical: e.spaces.space4, zIndex: 100 }, closeButton: { position: "absolute", top: e.spaces.space8, end: e.spaces.space8, zIndex: 200 }, bottomGrid: { width: "100%", opacity: "light" === e.paletteName ? 0.4 : "dark" === e.paletteName ? 0.5 : 1, height: 50, position: "absolute", start: 0, bottom: 0, zIndex: 1 }, buttonContainer: { marginTop: e.spaces.space12, position: "relative", zIndex: 100, alignItems: "flex-start" } }));
        },
        246020: (e, a, n) => {
            n.d(a, { Z: () => Ce });
            n(543673), n(240753), n(128399);
            var o = n(202784),
                t = n(565058),
                d = n(400752),
                r = n(325686),
                l = n(726426),
                s = n.n(l),
                i = n(167630),
                c = n(392237),
                u = n(111677),
                b = n.n(u),
                p = n(187669),
                m = n(323265),
                h = n(290402),
                g = n(358493),
                w = n(952793),
                D = n(655352),
                f = n(725516),
                y = n(125363),
                k = n(175856),
                M = n(389071),
                E = n(69966),
                C = n(327597),
                A = n(189953),
                Z = n(601576),
                v = n(919022),
                x = n(312771),
                I = n(464023),
                P = n(574305),
                S = n(654917),
                N = n(354851),
                R = n(222656),
                G = n(305442),
                B = n(107267),
                _ = n(154003),
                T = n(731708),
                z = n(837020),
                H = n(757700),
                L = n(67369),
                W = n(721266),
                O = n(415506),
                K = n(315951),
                j = n(786272);
            const F = b().d0205a24,
                V = b().ed4177c4,
                U = b().c0ff98f8,
                Q = b().f1a8218a,
                q = b().bcbf5b6e,
                J = b().j7b5c844,
                $ = b().c3d89aca,
                X = b().c9f7c196,
                Y = ({ onContinue: e }) => {
                    const a = (0, L.LX)();
                    return o.createElement(r.Z, { style: ee.legalText }, o.createElement(r.Z, { style: ee.content }, o.createElement(r.Z, { style: ee.section }, o.createElement(O.default, { style: ee.titleIcon }), o.createElement(r.Z, { style: ee.sectionContent }, o.createElement(T.ZP, { style: ee.title }, F), o.createElement(T.ZP, { style: ee.description }, V))), o.createElement(r.Z, { style: ee.section }, o.createElement(K.default, { style: ee.titleIcon }), o.createElement(r.Z, { style: ee.sectionContent }, o.createElement(T.ZP, { style: ee.title }, U), o.createElement(T.ZP, { style: ee.description }, Q, " ", o.createElement(T.ZP, { link: "https://help.x.com/using-x/about-grok" }, X)))), o.createElement(r.Z, { style: ee.section }, o.createElement(j.default, { style: ee.titleIcon }), o.createElement(r.Z, { style: ee.sectionContent }, o.createElement(T.ZP, { style: ee.title }, q), o.createElement(T.ZP, { style: ee.description }, J, " ", o.createElement(T.ZP, { link: "https://help.x.com/using-x/about-grok" }, X))))), a ? o.createElement(W.Z, { size: "space48" }) : null, o.createElement(r.Z, { style: [ee.continueButtonContainer, a ? ee.sticky : void 0] }, o.createElement(_.ZP, { onPress: e, size: "large", style: ee.continueButton, type: "primaryFilled" }, $)));
                },
                ee = c.default.create((e) => ({ legalText: { width: "100%", maxWidth: I.vf, flexDirection: "column", alignItems: "center", justifyContent: "center" }, titleIcon: { width: e.spaces.space20, minWidth: e.spaces.space20, height: e.spaces.space20, minHeight: e.spaces.space20, marginEnd: e.spaces.space8 }, sectionContent: { flexDirection: "column", gap: e.spaces.space4, flex: 1 }, sticky: { position: "sticky", bottom: 0 }, content: { borderRadius: e.borderRadii.large, backgroundColor: e.colors.gray0, marginHorizontal: e.spaces.space24, gap: e.spaces.space16, padding: e.spaces.space24 }, continueButtonContainer: { width: "100%", paddingVertical: e.spaces.space24, alignItems: "center", justifyContent: "center", backgroundColor: e.colors.cellBackground }, continueButton: { width: "100%", maxWidth: e.breakpoints.xSmall, justifyContent: "center", alignItems: "center" }, section: { width: "100%", gap: e.spaces.space4, flexDirection: "row" }, title: { fontWeight: "bold" }, description: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 } })),
                ae = b().h0681e3e,
                ne = b().d593fd78,
                oe = c.default.create((e) => ({ container: { overflowY: "auto", maxHeight: "100vh", position: "relative" }, prompts: { flexDirection: "row", flexWrap: "wrap" }, header: { flexDirection: "column", justifyContent: "center", alignItems: "center", paddingHorizontal: e.spaces.space36, marginBottom: e.spaces.space24 }, closeButton: { start: e.spaces.space16, top: e.spaces.space16, width: "fit-content", zIndex: 100, backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.infinite, position: "sticky" } })),
                te = () => {
                    const e = (0, y.I0)(),
                        a = (0, B.useHistory)(),
                        n = () => {
                            e((0, k.pj)(k.Qn));
                        };
                    return o.createElement(H.ZP, { clickMaskToClose: !0, history: a, modalSize: "fitChildren", onMaskClick: n, withBackground: !0 }, o.createElement(r.Z, { style: oe.container }, o.createElement(r.Z, { style: oe.closeButton }, o.createElement(_.ZP, { icon: o.createElement(z.default, null), onPress: n, type: "primaryText" })), o.createElement(r.Z, { style: oe.header }, o.createElement(T.ZP, { size: "title4", weight: "medium" }, ae), o.createElement(T.ZP, { color: "gray700", size: "body" }, ne)), o.createElement(r.Z, { style: oe.prompts }, o.createElement(Y, { onContinue: n }))));
                };
            var de = n(928831),
                re = n(204162),
                le = n(988290),
                se = n(214997),
                ie = n(976021);
            function ce({ followup: e, onClick: a }) {
                return o.createElement(r.Z, { style: be.animation }, o.createElement(_.ZP, { backgroundColor: "gray0", borderColor: "gray100", onClick: a, size: "xSmall", style: be.followUpBotton }, o.createElement(ie.B, { text: e.label }, o.createElement(T.ZP, { color: "gray900", selectable: !1, weight: "normal" }, e.label))));
            }
            function ue({ followups: e, onSelectFollowup: a }) {
                return 0 === e.length
                    ? null
                    : o.createElement(
                          se.Z,
                          { horizontal: !0, showsHorizontalScrollIndicator: !1, style: be.container },
                          o.createElement(
                              r.Z,
                              { style: be.row },
                              e.map((e, n) => o.createElement(ce, { followup: e, key: n, onClick: () => a(e) })),
                          ),
                      );
            }
            const be = c.default.create((e) => ({ container: { maxWidth: "100%", marginStart: "auto", marginEnd: "auto", paddingVertical: e.spaces.space4 }, row: { display: "flex", width: "fit-content", flexDirection: "row", justifyContent: "flex-start", gap: e.spaces.space12, paddingHorizontal: e.spaces.space12 }, animation: { opacity: 1, animationDuration: "2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, followUpBotton: { padding: e.spaces.space8, borderRadius: e.spaces.space24 } })),
                pe = ({ conversationKey: e }) => {
                    const a = (0, f.z)(),
                        n = (0, S.uf)(),
                        t = (0, y.v9)(n.selectCurrentResponseFollowUps),
                        d = (0, y.v9)(n.selectCurrentResponseFollowUpSuggestedMode),
                        { isCompactLayout: r } = (0, le.ZP)(),
                        l = (0, y.I0)(),
                        s = (0, w.hC)("responsive_web_grok_show_citations"),
                        i = (0, G.Z)("followup"),
                        { isReasoningEnabled: c, isResearchEnabled: u } = (0, de.w)(),
                        b = (0, y.v9)(n.selectLastHumanMessage),
                        p = o.useCallback(
                            (n) => {
                                let o;
                                a.scribe({ component: "follow_up_button", action: "click", data: { event_info: JSON.stringify({ properties: n.properties }) } });
                                const t = "DEEPSEARCH" === n.properties?.followUpType,
                                    d = "THINK_HARDER" === n.properties?.followUpType;
                                (t || d) && (o = b?.message?.message), l((0, C.u)({ analytics: a, conversationKey: e })({ text: o ?? n.label, promptMetadata: { promptSource: "FOLLOW_UP", action: "INPUT", properties: n.properties }, returnCitations: s, imageGenerationCount: i, isDeepsearch: u, isReasoning: c }));
                            },
                            [b, a, l, e, s, i, c, u],
                        );
                    return d ? o.createElement(re.Z, { conversationKey: e, isAnimated: !0, isCompactLayout: r, suggestion: d }) : o.createElement(ue, { followups: t, onSelectFollowup: p });
                };
            var me = n(791786),
                he = n(413145),
                ge = n(54496),
                we = n(618132),
                De = n(6337);
            const fe = 53,
                ye = b().j22655f2,
                ke = b().c02e7e3c,
                Me = 9e5,
                Ee = (0, t.cn)(0);
            function Ce({ containerStyle: e = {}, containerRef: a, conversationId: n, initialPrompt: t, mode: l, disableStartScreen: c = !1, disableEducation: u = !1, contentPadding: b }) {
                const B = (0, f.z)(),
                    _ = (0, y.I0)();
                (0, R.Z)();
                const { access: T, conversationKey: z, fetchConversationIdError: H, fetchConversationIdStatus: L, messageIds: W, status: O, ...K } = (0, S.ZP)(),
                    j = (0, D.ZP)(),
                    { keyboardVisible: F } = o.useContext(g.hr),
                    { isGrokDrawer: V } = (0, le.ZP)(),
                    U = (0, y.v9)((e) => (0, M.Pt)(e)),
                    [Q, q] = (0, d.KO)(Ee),
                    J = U === x.ZP.LOADED;
                (0, p.q)(() => {
                    const e = new Date().getTime();
                    (!J || Q + Me < e) && (q(e), _((0, E.C)({ analytics: B })()));
                });
                const $ = (0, y.v9)((e) => (0, k.t5)(e, k.Qn)),
                    X = (0, w.hC)("subscriptions_inapp_grok_nux_enabled"),
                    { isConversationLoading: Y } = (0, N.Z)({ conversationId: n }),
                    ee = (0, w.hC)("responsive_web_grok_show_citations"),
                    ae = (0, w.hC)("responsive_web_grok_new_home_layout"),
                    ne = O === A.Q_.IDLE;
                o.useEffect(() => {
                    !1 !== T && _(v.ZP.fetchOneIfNeeded(I.c0));
                }, [_, T]),
                    o.useEffect(() => {
                        H && _((0, Z.fz)({ text: H }));
                    }, [_, H]);
                const oe = (0, G.Z)("content");
                o.useEffect(() => {
                    if (!Y && t?.text) {
                        _((0, C.u)({ analytics: B, conversationKey: z })({ text: t.text, returnCitations: ee, analysisEntityId: t.analysisEntityId, mode: l, imageGenerationCount: oe, isReasoning: t?.isReasoning, isDeepsearch: t?.isDeepsearch }));
                        const e = new URL(window.location);
                        e.searchParams.delete("text"), e.searchParams.delete("deepsearch"), e.searchParams.delete("think"), history.replaceState(null, "", e.toString());
                    }
                }, [Y, t]),
                    o.useEffect(() => {
                        if (m.ZP.isTwitterApp() && U === x.ZP.LOADED) {
                            const e = window.webkit?.messageHandlers?.grokWebviewEventMessageHandler;
                            if (e) {
                                const a = { message: "initialModeSet" };
                                e.postMessage(a);
                            }
                        }
                    }, [U]);
                const de = o.useMemo(() => (O !== A.Q_.IDLE ? [...W, null] : W), [O, W]),
                    re = o.useCallback(() => {
                        _((0, M.Ki)(s()()));
                    }, [_]),
                    se = de.length > 0,
                    ie = o.useMemo(() => {
                        const e = m.ZP.isTwitterApp() || j || F ? 0 : fe;
                        return [Ze.inputWrapper, { paddingBottom: e }];
                    }, [j, F]),
                    ce = t?.text || se || Y,
                    ue = o.useMemo(() => () => (Y ? o.createElement(i.Z, null) : o.createElement(o.Fragment, null, o.createElement(he.y, { contentPadding: b, conversationKey: z }), o.createElement(r.Z, { style: Ze.bottomContainer }, o.createElement(r.Z, { style: Ze.inputOuterContainer }, o.createElement(pe, { conversationKey: z }), o.createElement(r.Z, { style: Ze.inputContainer }, o.createElement(r.Z, { style: ie }, o.createElement(me.Z, { conversationKey: z, hasAccess: !1 !== T, inputAtBottom: !0, insideConversation: !0, isIdle: ne, mode: l, placeholder: ye, useDraftPersistence: !0 }))))))), [ne, l, T, z, b, ie, Y]);
                return (0, P.Z)(!c && !V, K.conversationId, se), !1 === T && U !== x.ZP.LOADING ? (V ? o.createElement(r.Z, { style: Ze.activityIndicatorContainer }, o.createElement(i.Z, null)) : o.createElement(De.Z, null)) : o.createElement(r.Z, { ref: a, style: [Ze.container, e] }, o.createElement(o.Fragment, null, $ && X && !u ? o.createElement(te, null) : null, ce || c ? o.createElement(h.Z, { "aria-label": ke, fetchStatus: L === x.ZP.NONE ? x.ZP.LOADED : L, onRequestRetry: re, render: ue, retryMessage: H }) : ae ? o.createElement(ge.k, { access: T, conversationKey: z }) : o.createElement(we.k, { access: T, conversationKey: z })));
            }
            const Ae = !!m.ZP.isWebView(),
                Ze = c.default.create((e) => ({ container: { display: "grid", gridTemplateRows: "1fr auto", maxWidth: "100%", width: "100%", minHeight: `calc(100vh - ${Ae ? "0" : e.componentDimensions.appBarHeightPx}px)`, paddingBottom: c.default.iPhoneOffsetBottom }, disclaimer: { marginVertical: e.spaces.space12, marginHorizontal: e.spaces.space4 }, disclaimerNarrow: { marginVertical: e.spaces.space8, marginHorizontal: e.spaces.space4 }, bottomContainer: { position: "sticky", bottom: 0, width: "100%" }, inputOuterContainer: { position: "relative" }, inputContainer: { backgroundColor: e.colors.appBarBackground, backdropFilter: "blur(12px)", justifyContent: "center", alignItems: "center", paddingTop: e.spaces.space4, paddingBottom: e.spaces.space12, paddingHorizontal: e.spaces.space12 }, inputWrapper: { width: "100%", maxWidth: `calc(${I.vf}px + ${e.spaces.space32})` }, somethingWentWrongContainer: { alignItems: "center", justifyContent: "center", padding: e.spaces.space32 }, activityIndicatorContainer: { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" } }));
        },
        462441: (e, a, n) => {
            n.r(a), n.d(a, { default: () => W });
            var o = n(202784),
                t = n(325686),
                d = n(107267),
                r = n(731708),
                l = n(371344),
                s = n(661810),
                i = n(451566),
                c = n(167630),
                u = n(154003),
                b = n(392237),
                p = n(111677),
                m = n.n(p),
                h = n(323265),
                g = n(980407),
                w = n(15334),
                D = n(293115),
                f = n(125363),
                y = n(389071),
                k = n(184711),
                M = n(358687),
                E = n(565058),
                C = n(400752),
                A = (n(585488), n(712696)),
                Z = n.n(A),
                v = n(351743),
                x = n.n(v);
            const I = M.Z,
                P = k.Z,
                S = {},
                N = (0, E.cn)(!1);
            const R = m().j95bac7a,
                G = m().c5665922,
                B = m().ff625c40,
                _ = m().e5c7d602,
                T = m().dbd5d400,
                z = m().i2209530,
                H = { page: h.ZP.isTwitterApp() ? (h.ZP.isAndroid() ? "grok_custom_android" : "grok_custom_ios") : "grok_custom" },
                L = 1500;
            function W() {
                const e = (0, d.useHistory)(),
                    a = (0, w.u)(),
                    n = (0, f.v9)(y.F9),
                    b = o.useMemo(() => ({ subscription_level: a, grok_details: { grok_mode: "regular", grok_model: n } }), [a, n]),
                    [p, m] = o.useState(!0),
                    [h, k, M, E] = (function ({ fetchKey: e }) {
                        const { get_grok_customization_setting: a } = Z()(I, S, { fetchPolicy: "network-only", fetchKey: e }),
                            [n, t] = (0, C.KO)(N);
                        o.useEffect(() => {
                            t(a?.enabled ?? !1);
                        }, [a?.enabled, t]);
                        const [d, r] = x()(P),
                            l = o.useCallback(
                                (e) => {
                                    d({
                                        variables: { ...e },
                                        onCompleted: (a) => {
                                            t(e.enabled);
                                        },
                                    });
                                },
                                [d, t],
                            );
                        return [a, l, r, n];
                    })({ fetchKey: "customPrompt" }),
                    [A, v] = o.useState(""),
                    [W, K] = o.useState(""),
                    [j, F] = o.useState(E),
                    [V, U] = o.useState(!1),
                    [Q, q] = o.useState(!1);
                o.useEffect(() => {
                    let e;
                    return (
                        M ||
                            p ||
                            (e = setTimeout(() => {
                                m(!0);
                            }, 400)),
                        () => clearTimeout(e)
                    );
                }, [M, p, m]);
                const J = o.useCallback(() => {
                        if (!V) return;
                        m(!1), U(!1);
                        k({ enabled: j, custom_instruction: { instruction: A }, personality: { personality: W } });
                    }, [k, V, j, W, A]),
                    $ = o.useCallback(() => {
                        v(""), K(""), U(!0), F(!1);
                    }, []),
                    X = o.useCallback(() => {
                        e.goBack(), J();
                    }, [e, J]);
                return (
                    o.useEffect(() => {
                        h && (F(h.enabled || !1), K(h.personality?.personality || ""), v(h.custom_instruction?.instruction || ""));
                    }, [h]),
                    o.useEffect(() => {
                        !Q && V && J();
                    }, [J, V, Q]),
                    o.createElement(
                        D.nO,
                        { data: b, namespace: H },
                        o.createElement(
                            g.Z,
                            { documentTitle: R, history: e, onBackClick: X, title: R },
                            o.createElement(
                                t.Z,
                                { style: O.section },
                                o.createElement(r.ZP, null, G),
                                o.createElement(
                                    t.Z,
                                    { style: O.textInputBox },
                                    o.createElement(l.Z, {
                                        maxLength: L,
                                        multiline: !0,
                                        numberOfLines: 5,
                                        onBlur: () => q(!1),
                                        onChange: (e) => {
                                            A.length < e.target.value.length && (F(!0), U(!0)), v(e.target.value), U(!0);
                                        },
                                        onFocus: () => q(!0),
                                        value: A,
                                    }),
                                ),
                            ),
                            o.createElement(s.Z, null),
                            o.createElement(
                                t.Z,
                                { style: O.section },
                                o.createElement(r.ZP, null, B),
                                o.createElement(
                                    t.Z,
                                    { style: O.textInputBox },
                                    o.createElement(l.Z, {
                                        maxLength: L,
                                        multiline: !0,
                                        numberOfLines: 5,
                                        onBlur: () => q(!1),
                                        onChange: (e) => {
                                            W.length < e.target.value.length && F(!0), K(e.target.value), U(!0);
                                        },
                                        onFocus: () => q(!0),
                                        value: W,
                                    }),
                                ),
                            ),
                            o.createElement(
                                t.Z,
                                { style: [O.row, O.enableRow] },
                                o.createElement(r.ZP, { weight: "medium" }, _),
                                o.createElement(i.Z, {
                                    onValueChange: (e) => {
                                        F(e), U(!0);
                                    },
                                    value: j,
                                }),
                            ),
                            o.createElement(t.Z, { style: [O.row, O.buttonRow], type: "" }, o.createElement(c.Z, { animating: !p, hidesWhenStopped: !0, style: O.indicator }), o.createElement(u.ZP, { backgroundColor: "transparent", borderColor: "transparent", onClick: $, style: O.button, textSizeOverride: "subtext2" }, T), o.createElement(u.ZP, { backgroundColor: "gray100", onClick: X, style: O.button }, o.createElement(r.ZP, { size: "subtext2", weight: "medium" }, z))),
                        ),
                    )
                );
            }
            const O = b.default.create((e) => ({ right: { alignItems: "end" }, row: { flexDirection: "row", width: "100%", alignItems: "center", paddingHorizontal: e.spaces.space20, paddingBottom: e.spaces.space20 }, enableRow: { justifyContent: "space-between" }, buttonRow: { width: "100%", alignItems: "center", justifyContent: "end", paddingHorizontal: e.spaces.space20, paddingBottom: e.spaces.space20 }, section: { padding: e.spaces.space20 }, textInputBox: { paddingTop: 10 }, button: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16, borderRadius: e.spaces.space8 }, indicator: { marginEnd: e.spaces.space16 } }));
        },
        410490: (e, a, n) => {
            n.d(a, { b: () => b });
            var o = n(202784),
                t = n(325686),
                d = n(67369),
                r = n(530732),
                l = n(992942),
                s = n(731708),
                i = n(392237),
                c = n(725405),
                u = n(979512);
            const b = ({ coverUrl: e, label: a, onClose: n, onSendPrompt: i, prompt: b }) => {
                    const { openGrok: m } = (0, u.Z)(),
                        h = (0, c.Z)(),
                        g = (0, d.LX)(),
                        w = o.useCallback(() => {
                            n(), i ? i(b, b) : m({ text: b, autoSubmit: !0 }), h.scribe({ element: "grok_onboarding_prompt", action: "click" });
                        }, [h, n, b, m, i]);
                    return o.createElement(r.Z, { onPress: w, style: [p.container, g ? p.fullWidth : void 0] }, ({ isHovered: n }) => o.createElement(t.Z, { style: [p.content, n ? p.hovered : void 0] }, o.createElement(l.Z, { resizeMode: "cover", source: e, style: [p.image, g ? p.fullWidth : void 0] }), o.createElement(t.Z, { style: p.text }, o.createElement(s.ZP, { color: "text", size: "body" }, a))));
                },
                p = i.default.create((e) => ({ container: {}, content: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large, paddingTop: e.spaces.space8, paddingHorizontal: e.spaces.space8, overflow: "hidden" }, image: { width: 235, height: 175, borderRadius: e.borderRadii.large }, fullWidth: { width: "100%" }, hovered: { backgroundColor: e.colors.gray100 }, text: { height: e.spaces.space36, justifyContent: "center", alignItems: "center" } }));
        },
        609013: (e, a, n) => {
            n.d(a, { T: () => c });
            var o = n(202784),
                t = n(111677),
                d = n.n(t),
                r = n(640872),
                l = n(449067),
                s = n(38293);
            const i = d().h5860a68,
                c = ({ documentTitle: e }) => {
                    const { setSideNavSupport: a } = o.useContext(r.Z);
                    return o.useEffect(() => (a(!1), () => a(!0)), [a]), o.createElement(o.Fragment, null, o.createElement(l.Z.Configure, { headerless: !0 }), o.createElement(s.Z.Configure, { displayTitleOnly: !0, title: e || i }));
                };
        },
        398083: (e, a, n) => {
            n.d(a, { Z: () => o });
            n(202784);
            const o = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("icons.8"),
                        n.e("icons.15"),
                        n.e("icons.7"),
                        n.e("icons.3"),
                        n.e("icons.24"),
                        n.e("icons.12"),
                        n.e("icons.22"),
                        n.e("icons.2"),
                        n.e("icons.18"),
                        n.e("icons.9"),
                        n.e("icons.6"),
                        n.e("icons.1"),
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("icons.14"),
                        n.e("icons.5"),
                        n.e("modules.audio-6107ac1a"),
                        n.e("modules.audio-b953418a"),
                        n.e("modules.audio-7c51e6a7"),
                        n.e("modules.audio-04db59e9"),
                        n.e("modules.audio-76583d6c"),
                        n.e("modules.audio-b7a8a5fb"),
                        n.e("modules.audio-51f6e793"),
                        n.e("modules.audio-e019dbda"),
                        n.e("modules.audio-262c94d4"),
                        n.e("modules.audio-c6fe4ea4"),
                        n.e("icons.21"),
                        n.e("icons.16"),
                        n.e("icons.28"),
                        n.e("icons.17"),
                        n.e("icons.27"),
                        n.e("icons.19"),
                        n.e("icons.0"),
                        n.e("icons.4"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                        n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                        n.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        n.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        n.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                        n.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3ec0edf6"),
                        n.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                        n.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                        n.e("shared~loader.Dock~bundle.GrokDrawer~bundle.DockPeek~bundle.Grok~bundle.LiveEvent~loader.JetfuelFram-88dc685d"),
                        n.e("shared~loader.Dock~bundle.GrokDrawer~bundle.DockPeek~bundle.Grok~bundle.LiveEvent~loader.JetfuelFram-271d17b1"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        n.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-8d7085c2"),
                        n.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-53f39e22"),
                        n.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5"),
                        n.e("shared~bundle.Birdwatch~bundle.News~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandl"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights~loader"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b75711ed"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-eadf0bc8"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b6859af7"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-856c9f2b"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-30607449"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-ff768435"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b8a8a774"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4e7553e3"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-68027d49"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b20998b4"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-703d6ce2"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-5f0ed14e"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-bd66f825"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-92ee7280"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4cd14b6e"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-380ace89"),
                        n.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown~loader.TexBlock"),
                        n.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown"),
                        n.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-6107ac1a"),
                        n.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-63cb1cc4"),
                        n.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-bf286bb5"),
                        n.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-6ac0f1a5"),
                        n.e("shared~bundle.Grok~loader.Markdown-6107ac1a"),
                        n.e("shared~bundle.Grok~loader.Markdown-0ae4e026"),
                        n.e("shared~bundle.Grok~loader.Markdown-b16f5c14"),
                        n.e("shared~bundle.Grok~loader.Markdown-63cb1cc4"),
                        n.e("shared~bundle.Grok~loader.Markdown-d49ace54"),
                        n.e("shared~bundle.Grok~loader.Markdown-3277c3ad"),
                        n.e("shared~bundle.Grok~loader.Markdown-57c2c4a2"),
                        n.e("shared~bundle.Grok~loader.Markdown-6bf2d53b"),
                        n.e("shared~bundle.Grok~loader.Markdown-78667c23"),
                        n.e("shared~bundle.Grok~loader.Markdown-a244d277"),
                        n.e("shared~bundle.Grok~loader.Markdown-0d8ef87b"),
                        n.e("shared~bundle.Grok~loader.Markdown-26844252"),
                        n.e("shared~bundle.Grok~loader.Markdown-f29574de"),
                        n.e("shared~bundle.Grok~loader.Markdown-4ff64aa1"),
                        n.e("loader.Markdown"),
                    ]).then(n.bind(n, 207683)),
            });
        },
        661808: (e, a, n) => {
            e.exports = n.p + "dimPlaceholder.a01ac5aa.png";
        },
        433521: (e, a, n) => {
            e.exports = n.p + "drawMe.943c428a.jpg";
        },
        783444: (e, a, n) => {
            e.exports = n.p + "question.49241bca.jpg";
        },
        464279: (e, a, n) => {
            e.exports = n.p + "image_gen_2.f78db95a.png";
        },
        560619: (e, a, n) => {
            e.exports = n.p + "image_understanding.e6b9fb8a.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-16d5f187.3181d43a.js.map

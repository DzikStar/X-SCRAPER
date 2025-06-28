"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-16d5f187"],
    {
        226247: (e, t, n) => {
            n.d(t, { e: () => w });
            var a = n(202784),
                o = n(325686),
                r = n(67369),
                d = n(731708),
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
                w = ({ button: e, image: t, onRemove: n, text: c, title: u }) => {
                    const b = (0, r.yu)();
                    return a.createElement(o.Z, { style: [f.container, b ? { zoom: 0.8 } : void 0] }, a.createElement(o.Z, { style: f.content }, a.createElement(o.Z, { style: f.textContainer }, a.createElement(d.ZP, { size: "title4", weight: "medium" }, u), a.createElement(l.Z, { size: "space4" }), a.createElement(d.ZP, { color: "gray700" }, c)), e ? a.createElement(o.Z, { style: f.buttonContainer }, e) : null), t ? a.createElement(o.Z, { style: f.imageWrapper }, t) : null, a.createElement(s.Z, { resizeMode: "cover", source: { uri: m }, style: f.bottomGrid }), n ? a.createElement(i.ZP, { "aria-label": h, hoverLabel: g, icon: a.createElement(p.default, null), onClick: n, size: "xSmall", style: f.closeButton, type: "onMediaDominantColorFilled" }) : null);
                },
                f = c.default.create((e) => ({ container: { overflow: "hidden", borderRadius: e.borderRadii.large, borderWidth: e.spaces.space1, borderColor: e.colors.borderColor, paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space20, gap: e.spaces.space20, position: "relative", flexDirection: "row", alignItems: "center" }, content: { position: "relative", gap: e.spaces.space12, boxSizing: "border-box", flex: 1, zIndex: 100 }, textContainer: { flex: 1, gap: e.spaces.space4 }, imageWrapper: { position: "relative", paddingVertical: e.spaces.space4, zIndex: 100 }, closeButton: { position: "absolute", top: e.spaces.space8, end: e.spaces.space8, zIndex: 200 }, bottomGrid: { width: "100%", opacity: "light" === e.paletteName ? 0.4 : "dark" === e.paletteName ? 0.5 : 1, height: 50, position: "absolute", start: 0, bottom: 0, zIndex: 1 }, buttonContainer: { marginTop: e.spaces.space12, position: "relative", zIndex: 100, alignItems: "flex-start" } }));
        },
        246020: (e, t, n) => {
            n.d(t, { Z: () => xe });
            n(543673), n(240753), n(128399);
            var a = n(202784),
                o = n(565058),
                r = n(400752),
                d = n(325686),
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
                f = n(655352),
                y = n(725516),
                k = n(125363),
                E = n(175856),
                C = n(389071),
                Z = n(69966),
                x = n(327597),
                v = n(189953),
                A = n(601576),
                M = n(919022),
                D = n(312771),
                S = n(464023),
                I = n(574305),
                N = n(654917),
                P = n(354851),
                R = n(222656),
                B = n(305442),
                G = n(107267),
                T = n(154003),
                _ = n(731708),
                z = n(837020),
                H = n(757700),
                W = n(67369),
                L = n(721266),
                O = n(415506),
                K = n(315951),
                j = n(786272);
            const F = b().d0205a24,
                V = b().ed4177c4,
                U = b().c0ff98f8,
                Q = b().f1a8218a,
                q = b().bcbf5b6e,
                $ = b().j7b5c844,
                X = b().c3d89aca,
                J = b().c9f7c196,
                Y = ({ onContinue: e }) => {
                    const t = (0, W.LX)();
                    return a.createElement(d.Z, { style: ee.legalText }, a.createElement(d.Z, { style: ee.content }, a.createElement(d.Z, { style: ee.section }, a.createElement(O.default, { style: ee.titleIcon }), a.createElement(d.Z, { style: ee.sectionContent }, a.createElement(_.ZP, { style: ee.title }, F), a.createElement(_.ZP, { style: ee.description }, V))), a.createElement(d.Z, { style: ee.section }, a.createElement(K.default, { style: ee.titleIcon }), a.createElement(d.Z, { style: ee.sectionContent }, a.createElement(_.ZP, { style: ee.title }, U), a.createElement(_.ZP, { style: ee.description }, Q, " ", a.createElement(_.ZP, { link: "https://help.x.com/using-x/about-grok" }, J)))), a.createElement(d.Z, { style: ee.section }, a.createElement(j.default, { style: ee.titleIcon }), a.createElement(d.Z, { style: ee.sectionContent }, a.createElement(_.ZP, { style: ee.title }, q), a.createElement(_.ZP, { style: ee.description }, $, " ", a.createElement(_.ZP, { link: "https://help.x.com/using-x/about-grok" }, J))))), t ? a.createElement(L.Z, { size: "space48" }) : null, a.createElement(d.Z, { style: [ee.continueButtonContainer, t ? ee.sticky : void 0] }, a.createElement(T.ZP, { onPress: e, size: "large", style: ee.continueButton, type: "primaryFilled" }, X)));
                },
                ee = c.default.create((e) => ({ legalText: { width: "100%", maxWidth: S.vf, flexDirection: "column", alignItems: "center", justifyContent: "center" }, titleIcon: { width: e.spaces.space20, minWidth: e.spaces.space20, height: e.spaces.space20, minHeight: e.spaces.space20, marginEnd: e.spaces.space8 }, sectionContent: { flexDirection: "column", gap: e.spaces.space4, flex: 1 }, sticky: { position: "sticky", bottom: 0 }, content: { borderRadius: e.borderRadii.large, backgroundColor: e.colors.gray0, marginHorizontal: e.spaces.space24, gap: e.spaces.space16, padding: e.spaces.space24 }, continueButtonContainer: { width: "100%", paddingVertical: e.spaces.space24, alignItems: "center", justifyContent: "center", backgroundColor: e.colors.cellBackground }, continueButton: { width: "100%", maxWidth: e.breakpoints.xSmall, justifyContent: "center", alignItems: "center" }, section: { width: "100%", gap: e.spaces.space4, flexDirection: "row" }, title: { fontWeight: "bold" }, description: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 } })),
                te = b().h0681e3e,
                ne = b().d593fd78,
                ae = c.default.create((e) => ({ container: { overflowY: "auto", maxHeight: "100vh", position: "relative" }, prompts: { flexDirection: "row", flexWrap: "wrap" }, header: { flexDirection: "column", justifyContent: "center", alignItems: "center", paddingHorizontal: e.spaces.space36, marginBottom: e.spaces.space24 }, closeButton: { start: e.spaces.space16, top: e.spaces.space16, width: "fit-content", zIndex: 100, backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.infinite, position: "sticky" } })),
                oe = () => {
                    const e = (0, k.I0)(),
                        t = (0, G.useHistory)(),
                        n = () => {
                            e((0, E.pj)(E.Qn));
                        };
                    return a.createElement(H.ZP, { clickMaskToClose: !0, history: t, modalSize: "fitChildren", onMaskClick: n, withBackground: !0 }, a.createElement(d.Z, { style: ae.container }, a.createElement(d.Z, { style: ae.closeButton }, a.createElement(T.ZP, { icon: a.createElement(z.default, null), onPress: n, type: "primaryText" })), a.createElement(d.Z, { style: ae.header }, a.createElement(_.ZP, { size: "title4", weight: "medium" }, te), a.createElement(_.ZP, { color: "gray700", size: "body" }, ne)), a.createElement(d.Z, { style: ae.prompts }, a.createElement(Y, { onContinue: n }))));
                };
            var re = n(928831),
                de = n(204162),
                le = n(988290),
                se = n(214997),
                ie = n(976021);
            function ce({ followup: e, onClick: t }) {
                return a.createElement(d.Z, { style: be.animation }, a.createElement(T.ZP, { backgroundColor: "gray0", borderColor: "gray100", onClick: t, size: "xSmall", style: be.followUpBotton }, a.createElement(ie.B, { text: e.label }, a.createElement(_.ZP, { color: "gray900", selectable: !1, weight: "normal" }, e.label))));
            }
            function ue({ followups: e, onSelectFollowup: t }) {
                return 0 === e.length
                    ? null
                    : a.createElement(
                          se.Z,
                          { horizontal: !0, showsHorizontalScrollIndicator: !1, style: be.container },
                          a.createElement(
                              d.Z,
                              { style: be.row },
                              e.map((e, n) => a.createElement(ce, { followup: e, key: n, onClick: () => t(e) })),
                          ),
                      );
            }
            const be = c.default.create((e) => ({ container: { maxWidth: "100%", marginStart: "auto", marginEnd: "auto", paddingVertical: e.spaces.space4 }, row: { display: "flex", width: "fit-content", flexDirection: "row", justifyContent: "flex-start", gap: e.spaces.space12, paddingHorizontal: e.spaces.space12 }, animation: { opacity: 1, animationDuration: "2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, followUpBotton: { padding: e.spaces.space8, borderRadius: e.spaces.space24 } })),
                pe = ({ conversationKey: e }) => {
                    const t = (0, y.z)(),
                        n = (0, N.uf)(),
                        o = (0, k.v9)(n.selectCurrentResponseFollowUps),
                        r = (0, k.v9)(n.selectCurrentResponseFollowUpSuggestedMode),
                        { isCompactLayout: d } = (0, le.ZP)(),
                        l = (0, k.I0)(),
                        s = (0, w.hC)("responsive_web_grok_show_citations"),
                        i = (0, B.Z)("followup"),
                        { isReasoningEnabled: c, isResearchEnabled: u } = (0, re.w)(),
                        b = (0, k.v9)(n.selectLastHumanMessage),
                        p = a.useCallback(
                            (n) => {
                                let a;
                                t.scribe({ component: "follow_up_button", action: "click", data: { event_info: JSON.stringify({ properties: n.properties }) } });
                                const o = "DEEPSEARCH" === n.properties?.followUpType,
                                    r = "THINK_HARDER" === n.properties?.followUpType;
                                (o || r) && (a = b?.message?.message), l((0, x.u)({ analytics: t, conversationKey: e })({ text: a ?? n.label, promptMetadata: { promptSource: "FOLLOW_UP", action: "INPUT", properties: n.properties }, returnCitations: s, imageGenerationCount: i, isDeepsearch: u, isReasoning: c }));
                            },
                            [b, t, l, e, s, i, c, u],
                        );
                    return r ? a.createElement(de.Z, { conversationKey: e, isAnimated: !0, isCompactLayout: d, suggestion: r }) : a.createElement(ue, { followups: o, onSelectFollowup: p });
                };
            var me = n(791786),
                he = n(413145),
                ge = n(54496),
                we = n(618132),
                fe = n(6337);
            const ye = 53,
                ke = b().j22655f2,
                Ee = b().c02e7e3c,
                Ce = 9e5,
                Ze = (0, o.cn)(0);
            function xe({ containerStyle: e = {}, containerRef: t, conversationId: n, initialPrompt: o, mode: l, disableStartScreen: c = !1, disableEducation: u = !1, contentPadding: b }) {
                const G = (0, y.z)(),
                    T = (0, k.I0)();
                (0, R.Z)();
                const { access: _, conversationKey: z, fetchConversationIdError: H, fetchConversationIdStatus: W, messageIds: L, status: O, ...K } = (0, N.ZP)(),
                    j = (0, f.ZP)(),
                    { keyboardVisible: F } = a.useContext(g.hr),
                    { isGrokDrawer: V } = (0, le.ZP)(),
                    U = (0, k.v9)((e) => (0, C.Pt)(e)),
                    [Q, q] = (0, r.KO)(Ze),
                    $ = U === D.ZP.LOADED;
                (0, p.q)(() => {
                    const e = new Date().getTime();
                    (!$ || Q + Ce < e) && (q(e), T((0, Z.C)({ analytics: G })()));
                });
                const X = (0, k.v9)((e) => (0, E.t5)(e, E.Qn)),
                    J = (0, w.hC)("subscriptions_inapp_grok_nux_enabled"),
                    { isConversationLoading: Y } = (0, P.Z)({ conversationId: n }),
                    ee = (0, w.hC)("responsive_web_grok_show_citations"),
                    te = (0, w.hC)("responsive_web_grok_new_home_layout"),
                    ne = O === v.Q_.IDLE;
                a.useEffect(() => {
                    !1 !== _ && T(M.ZP.fetchOneIfNeeded(S.c0));
                }, [T, _]),
                    a.useEffect(() => {
                        H && T((0, A.fz)({ text: H }));
                    }, [T, H]);
                const ae = (0, B.Z)("content");
                a.useEffect(() => {
                    if (!Y && o?.text) {
                        T((0, x.u)({ analytics: G, conversationKey: z })({ text: o.text, returnCitations: ee, analysisEntityId: o.analysisEntityId, mode: l, imageGenerationCount: ae, isReasoning: o?.isReasoning, isDeepsearch: o?.isDeepsearch }));
                        const e = new URL(window.location);
                        e.searchParams.delete("text"), e.searchParams.delete("deepsearch"), e.searchParams.delete("think"), history.replaceState(null, "", e.toString());
                    }
                }, [Y, o]),
                    a.useEffect(() => {
                        if (m.ZP.isTwitterApp() && U === D.ZP.LOADED) {
                            const e = window.webkit?.messageHandlers?.grokWebviewEventMessageHandler;
                            if (e) {
                                const t = { message: "initialModeSet" };
                                e.postMessage(t);
                            }
                        }
                    }, [U]);
                const re = a.useMemo(() => (O !== v.Q_.IDLE ? [...L, null] : L), [O, L]),
                    de = a.useCallback(() => {
                        T((0, C.Ki)(s()()));
                    }, [T]),
                    se = re.length > 0,
                    ie = a.useMemo(() => {
                        const e = m.ZP.isTwitterApp() || j || F ? 0 : ye;
                        return [Ae.inputWrapper, { paddingBottom: e }];
                    }, [j, F]),
                    ce = o?.text || se || Y,
                    ue = a.useMemo(() => () => (Y ? a.createElement(i.Z, null) : a.createElement(a.Fragment, null, a.createElement(he.y, { contentPadding: b, conversationKey: z }), a.createElement(d.Z, { style: Ae.bottomContainer }, a.createElement(d.Z, { style: Ae.inputOuterContainer }, a.createElement(pe, { conversationKey: z }), a.createElement(d.Z, { style: Ae.inputContainer }, a.createElement(d.Z, { style: ie }, a.createElement(me.Z, { conversationKey: z, hasAccess: !1 !== _, inputAtBottom: !0, insideConversation: !0, isIdle: ne, mode: l, placeholder: ke, useDraftPersistence: !0 }))))))), [ne, l, _, z, b, ie, Y]);
                return (0, I.Z)(!c && !V, K.conversationId, se), !1 === _ && U !== D.ZP.LOADING ? (V ? a.createElement(d.Z, { style: Ae.activityIndicatorContainer }, a.createElement(i.Z, null)) : a.createElement(fe.Z, null)) : a.createElement(d.Z, { ref: t, style: [Ae.container, e] }, a.createElement(a.Fragment, null, X && J && !u ? a.createElement(oe, null) : null, ce || c ? a.createElement(h.Z, { "aria-label": Ee, fetchStatus: W === D.ZP.NONE ? D.ZP.LOADED : W, onRequestRetry: de, render: ue, retryMessage: H }) : te ? a.createElement(ge.k, { access: _, conversationKey: z }) : a.createElement(we.k, { access: _, conversationKey: z })));
            }
            const ve = !!m.ZP.isWebView(),
                Ae = c.default.create((e) => ({ container: { display: "grid", gridTemplateRows: "1fr auto", maxWidth: "100%", width: "100%", minHeight: `calc(100vh - ${ve ? "0" : e.componentDimensions.appBarHeightPx}px)`, paddingBottom: c.default.iPhoneOffsetBottom }, disclaimer: { marginVertical: e.spaces.space12, marginHorizontal: e.spaces.space4 }, disclaimerNarrow: { marginVertical: e.spaces.space8, marginHorizontal: e.spaces.space4 }, bottomContainer: { position: "sticky", bottom: 0, width: "100%" }, inputOuterContainer: { position: "relative" }, inputContainer: { backgroundColor: e.colors.appBarBackground, backdropFilter: "blur(12px)", justifyContent: "center", alignItems: "center", paddingTop: e.spaces.space4, paddingBottom: e.spaces.space12, paddingHorizontal: e.spaces.space12 }, inputWrapper: { width: "100%", maxWidth: `calc(${S.vf}px + ${e.spaces.space32})` }, somethingWentWrongContainer: { alignItems: "center", justifyContent: "center", padding: e.spaces.space32 }, activityIndicatorContainer: { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" } }));
        },
        462441: (e, t, n) => {
            n.r(t), n.d(t, { default: () => L });
            var a = n(202784),
                o = n(325686),
                r = n(107267),
                d = n(731708),
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
                f = n(293115),
                y = n(125363),
                k = n(389071),
                E = n(184711),
                C = n(358687),
                Z = n(565058),
                x = n(400752),
                v = (n(585488), n(712696)),
                A = n.n(v),
                M = n(351743),
                D = n.n(M);
            const S = C.Z,
                I = E.Z,
                N = {},
                P = (0, Z.cn)(!1);
            const R = m().j95bac7a,
                B = m().c5665922,
                G = m().ff625c40,
                T = m().e5c7d602,
                _ = m().dbd5d400,
                z = m().i2209530,
                H = { page: h.ZP.isTwitterApp() ? (h.ZP.isAndroid() ? "grok_custom_android" : "grok_custom_ios") : "grok_custom" },
                W = 1500;
            function L() {
                const e = (0, r.useHistory)(),
                    t = (0, w.u)(),
                    n = (0, y.v9)(k.F9),
                    b = a.useMemo(() => ({ subscription_level: t, grok_details: { grok_mode: "regular", grok_model: n } }), [t, n]),
                    [p, m] = a.useState(!0),
                    [h, E, C, Z] = (function ({ fetchKey: e }) {
                        const { get_grok_customization_setting: t } = A()(S, N, { fetchPolicy: "network-only", fetchKey: e }),
                            [n, o] = (0, x.KO)(P);
                        a.useEffect(() => {
                            o(t?.enabled ?? !1);
                        }, [t?.enabled, o]);
                        const [r, d] = D()(I),
                            l = a.useCallback(
                                (e) => {
                                    r({
                                        variables: { ...e },
                                        onCompleted: (t) => {
                                            o(e.enabled);
                                        },
                                    });
                                },
                                [r, o],
                            );
                        return [t, l, d, n];
                    })({ fetchKey: "customPrompt" }),
                    [v, M] = a.useState(""),
                    [L, K] = a.useState(""),
                    [j, F] = a.useState(Z),
                    [V, U] = a.useState(!1),
                    [Q, q] = a.useState(!1);
                a.useEffect(() => {
                    let e;
                    return (
                        C ||
                            p ||
                            (e = setTimeout(() => {
                                m(!0);
                            }, 400)),
                        () => clearTimeout(e)
                    );
                }, [C, p, m]);
                const $ = a.useCallback(() => {
                        if (!V) return;
                        m(!1), U(!1);
                        E({ enabled: j, custom_instruction: { instruction: v }, personality: { personality: L } });
                    }, [E, V, j, L, v]),
                    X = a.useCallback(() => {
                        M(""), K(""), U(!0), F(!1);
                    }, []),
                    J = a.useCallback(() => {
                        e.goBack(), $();
                    }, [e, $]);
                return (
                    a.useEffect(() => {
                        h && (F(h.enabled || !1), K(h.personality?.personality || ""), M(h.custom_instruction?.instruction || ""));
                    }, [h]),
                    a.useEffect(() => {
                        !Q && V && $();
                    }, [$, V, Q]),
                    a.createElement(
                        f.nO,
                        { data: b, namespace: H },
                        a.createElement(
                            g.Z,
                            { documentTitle: R, history: e, onBackClick: J, title: R },
                            a.createElement(
                                o.Z,
                                { style: O.section },
                                a.createElement(d.ZP, null, B),
                                a.createElement(
                                    o.Z,
                                    { style: O.textInputBox },
                                    a.createElement(l.Z, {
                                        maxLength: W,
                                        multiline: !0,
                                        numberOfLines: 5,
                                        onBlur: () => q(!1),
                                        onChange: (e) => {
                                            v.length < e.target.value.length && (F(!0), U(!0)), M(e.target.value), U(!0);
                                        },
                                        onFocus: () => q(!0),
                                        value: v,
                                    }),
                                ),
                            ),
                            a.createElement(s.Z, null),
                            a.createElement(
                                o.Z,
                                { style: O.section },
                                a.createElement(d.ZP, null, G),
                                a.createElement(
                                    o.Z,
                                    { style: O.textInputBox },
                                    a.createElement(l.Z, {
                                        maxLength: W,
                                        multiline: !0,
                                        numberOfLines: 5,
                                        onBlur: () => q(!1),
                                        onChange: (e) => {
                                            L.length < e.target.value.length && F(!0), K(e.target.value), U(!0);
                                        },
                                        onFocus: () => q(!0),
                                        value: L,
                                    }),
                                ),
                            ),
                            a.createElement(
                                o.Z,
                                { style: [O.row, O.enableRow] },
                                a.createElement(d.ZP, { weight: "medium" }, T),
                                a.createElement(i.Z, {
                                    onValueChange: (e) => {
                                        F(e), U(!0);
                                    },
                                    value: j,
                                }),
                            ),
                            a.createElement(o.Z, { style: [O.row, O.buttonRow], type: "" }, a.createElement(c.Z, { animating: !p, hidesWhenStopped: !0, style: O.indicator }), a.createElement(u.ZP, { backgroundColor: "transparent", borderColor: "transparent", onClick: X, style: O.button, textSizeOverride: "subtext2" }, _), a.createElement(u.ZP, { backgroundColor: "gray100", onClick: J, style: O.button }, a.createElement(d.ZP, { size: "subtext2", weight: "medium" }, z))),
                        ),
                    )
                );
            }
            const O = b.default.create((e) => ({ right: { alignItems: "end" }, row: { flexDirection: "row", width: "100%", alignItems: "center", paddingHorizontal: e.spaces.space20, paddingBottom: e.spaces.space20 }, enableRow: { justifyContent: "space-between" }, buttonRow: { width: "100%", alignItems: "center", justifyContent: "end", paddingHorizontal: e.spaces.space20, paddingBottom: e.spaces.space20 }, section: { padding: e.spaces.space20 }, textInputBox: { paddingTop: 10 }, button: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16, borderRadius: e.spaces.space8 }, indicator: { marginEnd: e.spaces.space16 } }));
        },
        410490: (e, t, n) => {
            n.d(t, { b: () => b });
            var a = n(202784),
                o = n(325686),
                r = n(67369),
                d = n(530732),
                l = n(992942),
                s = n(731708),
                i = n(392237),
                c = n(725405),
                u = n(979512);
            const b = ({ coverUrl: e, label: t, onClose: n, onSendPrompt: i, prompt: b }) => {
                    const { openGrok: m } = (0, u.Z)(),
                        h = (0, c.Z)(),
                        g = (0, r.LX)(),
                        w = a.useCallback(() => {
                            n(), i ? i(b, b) : m({ text: b, autoSubmit: !0 }), h.scribe({ element: "grok_onboarding_prompt", action: "click" });
                        }, [h, n, b, m, i]);
                    return a.createElement(d.Z, { onPress: w, style: [p.container, g ? p.fullWidth : void 0] }, ({ isHovered: n }) => a.createElement(o.Z, { style: [p.content, n ? p.hovered : void 0] }, a.createElement(l.Z, { resizeMode: "cover", source: e, style: [p.image, g ? p.fullWidth : void 0] }), a.createElement(o.Z, { style: p.text }, a.createElement(s.ZP, { color: "text", size: "body" }, t))));
                },
                p = i.default.create((e) => ({ container: {}, content: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large, paddingTop: e.spaces.space8, paddingHorizontal: e.spaces.space8, overflow: "hidden" }, image: { width: 235, height: 175, borderRadius: e.borderRadii.large }, fullWidth: { width: "100%" }, hovered: { backgroundColor: e.colors.gray100 }, text: { height: e.spaces.space36, justifyContent: "center", alignItems: "center" } }));
        },
        609013: (e, t, n) => {
            n.d(t, { T: () => c });
            var a = n(202784),
                o = n(111677),
                r = n.n(o),
                d = n(640872),
                l = n(449067),
                s = n(38293);
            const i = r().h5860a68,
                c = ({ documentTitle: e }) => {
                    const { setSideNavSupport: t } = a.useContext(d.Z);
                    return a.useEffect(() => (t(!1), () => t(!0)), [t]), a.createElement(a.Fragment, null, a.createElement(l.Z.Configure, { headerless: !0 }), a.createElement(s.Z.Configure, { displayTitleOnly: !0, title: e || i }));
                };
        },
        398083: (e, t, n) => {
            n.d(t, { Z: () => a });
            n(202784);
            const a = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("icons.23"),
                        n.e("icons.0"),
                        n.e("icons.2"),
                        n.e("icons.16"),
                        n.e("icons.19"),
                        n.e("icons.10"),
                        n.e("icons.13"),
                        n.e("icons.24"),
                        n.e("icons.7"),
                        n.e("icons.22"),
                        n.e("icons.27"),
                        n.e("icons.17"),
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("icons.11"),
                        n.e("icons.26"),
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
                        n.e("icons.8"),
                        n.e("icons.4"),
                        n.e("icons.14"),
                        n.e("icons.28"),
                        n.e("icons.21"),
                        n.e("icons.3"),
                        n.e("icons.1"),
                        n.e("icons.18"),
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
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
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
                        n.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-bc6ccf4c"),
                        n.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-6107ac1a"),
                        n.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-e4e3d8bb"),
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
        661808: (e, t, n) => {
            e.exports = n.p + "dimPlaceholder.a01ac5aa.png";
        },
        433521: (e, t, n) => {
            e.exports = n.p + "drawMe.943c428a.jpg";
        },
        783444: (e, t, n) => {
            e.exports = n.p + "question.49241bca.jpg";
        },
        464279: (e, t, n) => {
            e.exports = n.p + "image_gen_2.f78db95a.png";
        },
        560619: (e, t, n) => {
            e.exports = n.p + "image_understanding.e6b9fb8a.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-16d5f187.5f5adfca.js.map

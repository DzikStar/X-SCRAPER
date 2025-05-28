"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-16d5f187"],
    {
        226247: (e, t, n) => {
            n.d(t, { e: () => f });
            var a = n(202784),
                o = n(325686),
                i = n(67369),
                r = n(731708),
                s = n(721266),
                l = n(992942),
                c = n(154003),
                d = n(392237),
                m = n(111677),
                p = n.n(m),
                u = n(837020),
                g = n(480241);
            const h = p().e68b09b4,
                y = { label: h },
                f = ({ button: e, image: t, onRemove: n, text: d, title: m }) => {
                    const p = (0, i.yu)();
                    return a.createElement(o.Z, { style: [b.container, p ? { zoom: 0.8 } : void 0] }, a.createElement(o.Z, { style: b.content }, a.createElement(o.Z, { style: b.textContainer }, a.createElement(r.ZP, { size: "title4", weight: "medium" }, m), a.createElement(s.Z, { size: "space4" }), a.createElement(r.ZP, { color: "gray700" }, d)), e ? a.createElement(o.Z, { style: b.buttonContainer }, e) : null), t ? a.createElement(o.Z, { style: b.imageWrapper }, t) : null, a.createElement(l.Z, { resizeMode: "cover", source: { uri: g }, style: b.bottomGrid }), n ? a.createElement(c.ZP, { "aria-label": h, hoverLabel: y, icon: a.createElement(u.default, null), onClick: n, size: "xSmall", style: b.closeButton, type: "onMediaDominantColorFilled" }) : null);
                },
                b = d.default.create((e) => ({ container: { overflow: "hidden", borderRadius: e.borderRadii.large, borderWidth: e.spaces.space1, borderColor: e.colors.borderColor, paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space20, gap: e.spaces.space20, position: "relative", flexDirection: "row", alignItems: "center" }, content: { position: "relative", gap: e.spaces.space12, boxSizing: "border-box", flex: 1, zIndex: 100 }, textContainer: { flex: 1, gap: e.spaces.space4 }, imageWrapper: { position: "relative", paddingVertical: e.spaces.space4, zIndex: 100 }, closeButton: { position: "absolute", top: e.spaces.space8, end: e.spaces.space8, zIndex: 200 }, bottomGrid: { width: "100%", opacity: "light" === e.paletteName ? 0.4 : "dark" === e.paletteName ? 0.5 : 1, height: 50, position: "absolute", start: 0, bottom: 0, zIndex: 1 }, buttonContainer: { marginTop: e.spaces.space12, position: "relative", zIndex: 100, alignItems: "flex-start" } }));
        },
        246020: (e, t, n) => {
            n.d(t, { Z: () => Ie });
            n(543673), n(240753), n(128399);
            var a = n(202784),
                o = n(565058),
                i = n(400752),
                r = n(325686),
                s = n(726426),
                l = n.n(s),
                c = n(167630),
                d = n(392237),
                m = n(111677),
                p = n.n(m),
                u = n(187669),
                g = n(323265),
                h = n(290402),
                y = n(358493),
                f = n(952793),
                b = n(655352),
                E = n(725516),
                w = n(125363),
                v = n(175856),
                C = n(389071),
                Z = n(69966),
                I = n(327597),
                x = n(189953),
                k = n(601576),
                P = n(919022),
                R = n(312771),
                z = n(464023),
                M = n(574305),
                _ = n(654917),
                S = n(354851),
                L = n(222656),
                A = n(305442),
                B = n(107267),
                D = n(154003),
                T = n(731708),
                U = n(837020),
                F = n(757700),
                j = n(67369),
                O = n(721266),
                W = n(415506),
                H = n(315951),
                K = n(786272);
            const N = p().d0205a24,
                V = p().ed4177c4,
                G = p().c0ff98f8,
                $ = p().f1a8218a,
                J = p().bcbf5b6e,
                Q = p().j7b5c844,
                q = p().c3d89aca,
                X = p().c9f7c196,
                Y = ({ onContinue: e }) => {
                    const t = (0, j.LX)();
                    return a.createElement(r.Z, { style: ee.legalText }, a.createElement(r.Z, { style: ee.content }, a.createElement(r.Z, { style: ee.section }, a.createElement(W.default, { style: ee.titleIcon }), a.createElement(r.Z, { style: ee.sectionContent }, a.createElement(T.ZP, { style: ee.title }, N), a.createElement(T.ZP, { style: ee.description }, V))), a.createElement(r.Z, { style: ee.section }, a.createElement(H.default, { style: ee.titleIcon }), a.createElement(r.Z, { style: ee.sectionContent }, a.createElement(T.ZP, { style: ee.title }, G), a.createElement(T.ZP, { style: ee.description }, $, " ", a.createElement(T.ZP, { link: "https://help.x.com/using-x/about-grok" }, X)))), a.createElement(r.Z, { style: ee.section }, a.createElement(K.default, { style: ee.titleIcon }), a.createElement(r.Z, { style: ee.sectionContent }, a.createElement(T.ZP, { style: ee.title }, J), a.createElement(T.ZP, { style: ee.description }, Q, " ", a.createElement(T.ZP, { link: "https://help.x.com/using-x/about-grok" }, X))))), t ? a.createElement(O.Z, { size: "space48" }) : null, a.createElement(r.Z, { style: [ee.continueButtonContainer, t ? ee.sticky : void 0] }, a.createElement(D.ZP, { onPress: e, size: "large", style: ee.continueButton, type: "primaryFilled" }, q)));
                },
                ee = d.default.create((e) => ({ legalText: { width: "100%", maxWidth: z.vf, flexDirection: "column", alignItems: "center", justifyContent: "center" }, titleIcon: { width: e.spaces.space20, minWidth: e.spaces.space20, height: e.spaces.space20, minHeight: e.spaces.space20, marginEnd: e.spaces.space8 }, sectionContent: { flexDirection: "column", gap: e.spaces.space4, flex: 1 }, sticky: { position: "sticky", bottom: 0 }, content: { borderRadius: e.borderRadii.large, backgroundColor: e.colors.gray0, marginHorizontal: e.spaces.space24, gap: e.spaces.space16, padding: e.spaces.space24 }, continueButtonContainer: { width: "100%", paddingVertical: e.spaces.space24, alignItems: "center", justifyContent: "center", backgroundColor: e.colors.cellBackground }, continueButton: { width: "100%", maxWidth: e.breakpoints.xSmall, justifyContent: "center", alignItems: "center" }, section: { width: "100%", gap: e.spaces.space4, flexDirection: "row" }, title: { fontWeight: "bold" }, description: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 } })),
                te = p().h0681e3e,
                ne = p().d593fd78,
                ae = d.default.create((e) => ({ container: { overflowY: "auto", maxHeight: "100vh", position: "relative" }, prompts: { flexDirection: "row", flexWrap: "wrap" }, header: { flexDirection: "column", justifyContent: "center", alignItems: "center", paddingHorizontal: e.spaces.space36, marginBottom: e.spaces.space24 }, closeButton: { start: e.spaces.space16, top: e.spaces.space16, width: "fit-content", zIndex: 100, backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.infinite, position: "sticky" } })),
                oe = () => {
                    const e = (0, w.I0)(),
                        t = (0, B.useHistory)(),
                        n = () => {
                            e((0, v.pj)(v.Qn));
                        };
                    return a.createElement(F.ZP, { clickMaskToClose: !0, history: t, modalSize: "fitChildren", onMaskClick: n, withBackground: !0 }, a.createElement(r.Z, { style: ae.container }, a.createElement(r.Z, { style: ae.closeButton }, a.createElement(D.ZP, { icon: a.createElement(U.default, null), onPress: n, type: "primaryText" })), a.createElement(r.Z, { style: ae.header }, a.createElement(T.ZP, { size: "title4", weight: "medium" }, te), a.createElement(T.ZP, { color: "gray700", size: "body" }, ne)), a.createElement(r.Z, { style: ae.prompts }, a.createElement(Y, { onContinue: n }))));
                };
            var ie = n(928831),
                re = n(204162),
                se = n(988290),
                le = n(214997),
                ce = n(976021);
            function de({ followup: e, onClick: t }) {
                return a.createElement(r.Z, { style: pe.animation }, a.createElement(D.ZP, { backgroundColor: "gray50", borderColor: "transparent", onClick: t, size: "xSmall", style: pe.followUpBotton }, a.createElement(ce.B, { text: e.label }, a.createElement(T.ZP, { color: "gray900", selectable: !1, weight: "normal" }, e.label))));
            }
            function me({ followups: e, onSelectFollowup: t }) {
                return 0 === e.length
                    ? null
                    : a.createElement(
                          le.Z,
                          { horizontal: !0, showsHorizontalScrollIndicator: !1, style: pe.container },
                          a.createElement(
                              r.Z,
                              { style: pe.row },
                              e.map((e, n) => a.createElement(de, { followup: e, key: n, onClick: () => t(e) })),
                          ),
                      );
            }
            const pe = d.default.create((e) => ({ container: { maxWidth: "100%", marginStart: "auto", marginEnd: "auto", paddingVertical: e.spaces.space4 }, row: { display: "flex", width: "fit-content", flexDirection: "row", justifyContent: "flex-start", gap: e.spaces.space12, paddingHorizontal: e.spaces.space12 }, animation: { opacity: 1, animationDuration: "2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, followUpBotton: { borderRadius: e.borderRadii.large, padding: e.spaces.space8 } })),
                ue = ({ conversationKey: e }) => {
                    const t = (0, E.z)(),
                        n = (0, _.uf)(),
                        o = (0, w.v9)(n.selectCurrentResponseFollowUps),
                        i = (0, w.v9)(n.selectCurrentResponseFollowUpSuggestedMode),
                        { isCompactLayout: r } = (0, se.ZP)(),
                        s = (0, w.I0)(),
                        l = (0, f.hC)("responsive_web_grok_show_citations"),
                        c = (0, A.Z)("followup"),
                        { isReasoningEnabled: d, isResearchEnabled: m } = (0, ie.w)(),
                        p = (0, w.v9)(n.selectLastHumanMessage),
                        u = a.useCallback(
                            (n) => {
                                let a;
                                t.scribe({ component: "follow_up_button", action: "click", data: { event_info: JSON.stringify({ properties: n.properties }) } });
                                const o = "DEEPSEARCH" === n.properties?.followUpType,
                                    i = "THINK_HARDER" === n.properties?.followUpType;
                                (o || i) && (a = p?.message?.message), s((0, I.u)({ analytics: t, conversationKey: e })({ text: a ?? n.label, promptMetadata: { promptSource: "FOLLOW_UP", action: "INPUT", properties: n.properties }, returnCitations: l, imageGenerationCount: c, isDeepsearch: m, isReasoning: d }));
                            },
                            [p, t, s, e, l, c, d, m],
                        );
                    return i ? a.createElement(re.Z, { conversationKey: e, isAnimated: !0, isCompactLayout: r, suggestion: i }) : a.createElement(me, { followups: o, onSelectFollowup: u });
                };
            var ge = n(791786),
                he = n(413145),
                ye = n(54496),
                fe = n(618132),
                be = n(6337);
            const Ee = 53,
                we = p().j22655f2,
                ve = p().c02e7e3c,
                Ce = 9e5,
                Ze = (0, o.cn)(0);
            function Ie({ containerStyle: e = {}, containerRef: t, conversationId: n, initialPrompt: o, mode: s, disableStartScreen: d = !1, disableEducation: m = !1, contentPadding: p }) {
                const B = (0, E.z)(),
                    D = (0, w.I0)();
                (0, L.Z)();
                const { access: T, conversationKey: U, fetchConversationIdError: F, fetchConversationIdStatus: j, messageIds: O, status: W, ...H } = (0, _.ZP)(),
                    K = (0, b.ZP)(),
                    { keyboardVisible: N } = a.useContext(y.hr),
                    { isGrokDrawer: V } = (0, se.ZP)(),
                    G = (0, w.v9)((e) => (0, C.Pt)(e)),
                    [$, J] = (0, i.KO)(Ze),
                    Q = G === R.ZP.LOADED;
                (0, u.q)(() => {
                    const e = new Date().getTime();
                    (!Q || $ + Ce < e) && (J(e), D((0, Z.C)({ analytics: B })()));
                });
                const q = (0, w.v9)((e) => (0, v.t5)(e, v.Qn)),
                    X = (0, f.hC)("subscriptions_inapp_grok_nux_enabled"),
                    { isConversationLoading: Y } = (0, S.Z)({ conversationId: n }),
                    ee = (0, f.hC)("responsive_web_grok_show_citations"),
                    te = (0, f.hC)("responsive_web_grok_new_home_layout"),
                    ne = W === x.Q_.IDLE;
                a.useEffect(() => {
                    !1 !== T && D(P.ZP.fetchOneIfNeeded(z.c0));
                }, [D, T]),
                    a.useEffect(() => {
                        F && D((0, k.fz)({ text: F }));
                    }, [D, F]);
                const ae = (0, A.Z)("content");
                a.useEffect(() => {
                    if (!Y && o?.text) {
                        D((0, I.u)({ analytics: B, conversationKey: U })({ text: o.text, returnCitations: ee, analysisEntityId: o.analysisEntityId, mode: s, imageGenerationCount: ae, isReasoning: o?.isReasoning, isDeepsearch: o?.isDeepsearch }));
                        const e = new URL(window.location);
                        e.searchParams.delete("text"), e.searchParams.delete("deepsearch"), e.searchParams.delete("think"), history.replaceState(null, "", e.toString());
                    }
                }, [Y, o]),
                    a.useEffect(() => {
                        if (g.ZP.isTwitterApp() && G === R.ZP.LOADED) {
                            const e = window.webkit?.messageHandlers?.grokWebviewEventMessageHandler;
                            if (e) {
                                const t = { message: "initialModeSet" };
                                e.postMessage(t);
                            }
                        }
                    }, [G]);
                const ie = a.useMemo(() => (W !== x.Q_.IDLE ? [...O, null] : O), [W, O]),
                    re = a.useCallback(() => {
                        D((0, C.Ki)(l()()));
                    }, [D]),
                    le = ie.length > 0,
                    ce = a.useMemo(() => {
                        const e = g.ZP.isTwitterApp() || K || N ? 0 : Ee;
                        return [ke.inputWrapper, { paddingBottom: e }];
                    }, [K, N]),
                    de = o?.text || le || Y,
                    me = a.useMemo(() => () => (Y ? a.createElement(c.Z, null) : a.createElement(a.Fragment, null, a.createElement(he.y, { contentPadding: p, conversationKey: U }), a.createElement(r.Z, { style: ke.bottomContainer }, a.createElement(r.Z, { style: ke.inputOuterContainer }, a.createElement(ue, { conversationKey: U }), a.createElement(r.Z, { style: ke.inputContainer }, a.createElement(r.Z, { style: ce }, a.createElement(ge.Z, { conversationKey: U, hasAccess: !1 !== T, inputAtBottom: !0, insideConversation: !0, isIdle: ne, mode: s, placeholder: we, useDraftPersistence: !0 }))))))), [ne, s, T, U, p, ce, Y]);
                return (0, M.Z)(!d && !V, H.conversationId, le), !1 === T && G !== R.ZP.LOADING ? (V ? a.createElement(r.Z, { style: ke.activityIndicatorContainer }, a.createElement(c.Z, null)) : a.createElement(be.Z, null)) : a.createElement(r.Z, { ref: t, style: [ke.container, e] }, a.createElement(a.Fragment, null, q && X && !m ? a.createElement(oe, null) : null, de || d ? a.createElement(h.Z, { "aria-label": ve, fetchStatus: j === R.ZP.NONE ? R.ZP.LOADED : j, onRequestRetry: re, render: me, retryMessage: F }) : te ? a.createElement(ye.k, { access: T, conversationKey: U }) : a.createElement(fe.k, { access: T, conversationKey: U })));
            }
            const xe = !!g.ZP.isWebView(),
                ke = d.default.create((e) => ({ container: { display: "grid", gridTemplateRows: "1fr auto", maxWidth: "100%", width: "100%", minHeight: `calc(100vh - ${xe ? "0" : e.componentDimensions.appBarHeightPx}px)`, paddingBottom: d.default.iPhoneOffsetBottom }, disclaimer: { marginVertical: e.spaces.space12, marginHorizontal: e.spaces.space4 }, disclaimerNarrow: { marginVertical: e.spaces.space8, marginHorizontal: e.spaces.space4 }, bottomContainer: { position: "sticky", bottom: 0, width: "100%" }, inputOuterContainer: { position: "relative" }, inputContainer: { backgroundColor: e.colors.appBarBackground, backdropFilter: "blur(12px)", justifyContent: "center", alignItems: "center", paddingTop: e.spaces.space4, paddingBottom: e.spaces.space12, paddingHorizontal: e.spaces.space12 }, inputWrapper: { width: "100%", maxWidth: `calc(${z.vf}px + ${e.spaces.space32})` }, somethingWentWrongContainer: { alignItems: "center", justifyContent: "center", padding: e.spaces.space32 }, activityIndicatorContainer: { width: "100%", height: "100%", justifyContent: "center", alignItems: "center" } }));
        },
        462441: (e, t, n) => {
            n.r(t), n.d(t, { default: () => O });
            var a = n(202784),
                o = n(325686),
                i = n(107267),
                r = n(731708),
                s = n(371344),
                l = n(661810),
                c = n(451566),
                d = n(167630),
                m = n(154003),
                p = n(392237),
                u = n(111677),
                g = n.n(u),
                h = n(323265),
                y = n(980407),
                f = n(15334),
                b = n(293115),
                E = n(125363),
                w = n(389071),
                v = n(184711),
                C = n(358687),
                Z = n(565058),
                I = n(400752),
                x = (n(585488), n(712696)),
                k = n.n(x),
                P = n(351743),
                R = n.n(P);
            const z = C.Z,
                M = v.Z,
                _ = {},
                S = (0, Z.cn)(!1);
            const L = g().j95bac7a,
                A = g().c5665922,
                B = g().ff625c40,
                D = g().e5c7d602,
                T = g().dbd5d400,
                U = g().i2209530,
                F = { page: h.ZP.isTwitterApp() ? (h.ZP.isAndroid() ? "grok_custom_android" : "grok_custom_ios") : "grok_custom" },
                j = 1500;
            function O() {
                const e = (0, i.useHistory)(),
                    t = (0, f.u)(),
                    n = (0, E.v9)(w.F9),
                    p = a.useMemo(() => ({ subscription_level: t, grok_details: { grok_mode: "regular", grok_model: n } }), [t, n]),
                    [u, g] = a.useState(!0),
                    [h, v, C, Z] = (function ({ fetchKey: e }) {
                        const { get_grok_customization_setting: t } = k()(z, _, { fetchPolicy: "network-only", fetchKey: e }),
                            [n, o] = (0, I.KO)(S);
                        a.useEffect(() => {
                            o(t?.enabled ?? !1);
                        }, [t?.enabled, o]);
                        const [i, r] = R()(M),
                            s = a.useCallback(
                                (e) => {
                                    i({
                                        variables: { ...e },
                                        onCompleted: (t) => {
                                            o(e.enabled);
                                        },
                                    });
                                },
                                [i, o],
                            );
                        return [t, s, r, n];
                    })({ fetchKey: "customPrompt" }),
                    [x, P] = a.useState(""),
                    [O, H] = a.useState(""),
                    [K, N] = a.useState(Z),
                    [V, G] = a.useState(!1),
                    [$, J] = a.useState(!1);
                a.useEffect(() => {
                    let e;
                    return (
                        C ||
                            u ||
                            (e = setTimeout(() => {
                                g(!0);
                            }, 400)),
                        () => clearTimeout(e)
                    );
                }, [C, u, g]);
                const Q = a.useCallback(() => {
                        if (!V) return;
                        g(!1), G(!1);
                        v({ enabled: K, custom_instruction: { instruction: x }, personality: { personality: O } });
                    }, [v, V, K, O, x]),
                    q = a.useCallback(() => {
                        P(""), H(""), G(!0), N(!1);
                    }, []),
                    X = a.useCallback(() => {
                        e.goBack(), Q();
                    }, [e, Q]);
                return (
                    a.useEffect(() => {
                        h && (N(h.enabled || !1), H(h.personality?.personality || ""), P(h.custom_instruction?.instruction || ""));
                    }, [h]),
                    a.useEffect(() => {
                        !$ && V && Q();
                    }, [Q, V, $]),
                    a.createElement(
                        b.nO,
                        { data: p, namespace: F },
                        a.createElement(
                            y.Z,
                            { documentTitle: L, history: e, onBackClick: X, title: L },
                            a.createElement(
                                o.Z,
                                { style: W.section },
                                a.createElement(r.ZP, null, A),
                                a.createElement(
                                    o.Z,
                                    { style: W.textInputBox },
                                    a.createElement(s.Z, {
                                        maxLength: j,
                                        multiline: !0,
                                        numberOfLines: 5,
                                        onBlur: () => J(!1),
                                        onChange: (e) => {
                                            x.length < e.target.value.length && (N(!0), G(!0)), P(e.target.value), G(!0);
                                        },
                                        onFocus: () => J(!0),
                                        value: x,
                                    }),
                                ),
                            ),
                            a.createElement(l.Z, null),
                            a.createElement(
                                o.Z,
                                { style: W.section },
                                a.createElement(r.ZP, null, B),
                                a.createElement(
                                    o.Z,
                                    { style: W.textInputBox },
                                    a.createElement(s.Z, {
                                        maxLength: j,
                                        multiline: !0,
                                        numberOfLines: 5,
                                        onBlur: () => J(!1),
                                        onChange: (e) => {
                                            O.length < e.target.value.length && N(!0), H(e.target.value), G(!0);
                                        },
                                        onFocus: () => J(!0),
                                        value: O,
                                    }),
                                ),
                            ),
                            a.createElement(
                                o.Z,
                                { style: [W.row, W.enableRow] },
                                a.createElement(r.ZP, { weight: "medium" }, D),
                                a.createElement(c.Z, {
                                    onValueChange: (e) => {
                                        N(e), G(!0);
                                    },
                                    value: K,
                                }),
                            ),
                            a.createElement(o.Z, { style: [W.row, W.buttonRow], type: "" }, a.createElement(d.Z, { animating: !u, hidesWhenStopped: !0, style: W.indicator }), a.createElement(m.ZP, { backgroundColor: "transparent", borderColor: "transparent", onClick: q, style: W.button, textSizeOverride: "subtext2" }, T), a.createElement(m.ZP, { backgroundColor: "gray100", onClick: X, style: W.button }, a.createElement(r.ZP, { size: "subtext2", weight: "medium" }, U))),
                        ),
                    )
                );
            }
            const W = p.default.create((e) => ({ right: { alignItems: "end" }, row: { flexDirection: "row", width: "100%", alignItems: "center", paddingHorizontal: e.spaces.space20, paddingBottom: e.spaces.space20 }, enableRow: { justifyContent: "space-between" }, buttonRow: { width: "100%", alignItems: "center", justifyContent: "end", paddingHorizontal: e.spaces.space20, paddingBottom: e.spaces.space20 }, section: { padding: e.spaces.space20 }, textInputBox: { paddingTop: 10 }, button: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16, borderRadius: e.spaces.space8 }, indicator: { marginEnd: e.spaces.space16 } }));
        },
        480243: (e, t, n) => {
            n.d(t, { W: () => g });
            var a = n(927974),
                o = n(202784),
                i = n(565058),
                r = n(400752),
                s = n(10622),
                l = n.n(s),
                c = (n(585488), n(437429)),
                d = n.n(c);
            const m = a.Z,
                p = (0, i.cn)(void 0),
                u = (0, i.cn)([]);
            function g() {
                const e = d()(),
                    [t, n] = (0, r.KO)(u),
                    [a, i] = (0, r.KO)(p);
                o.useEffect(() => {
                    l()(e, m, {}, { networkCacheConfig: { force: !1 } })
                        .toPromise()
                        .then((e) => {
                            e?.grok_user_personalities?.personalities && n([...e.grok_user_personalities.personalities]);
                        })
                        .catch((e) => {});
                }, [e, i, n]);
                const s = o.useCallback(
                    (e) => {
                        i(e);
                    },
                    [i],
                );
                return { userPersonalities: t, setGrokPersonality: s, getPersonality: (e) => t.find((t) => t.personality_id === e), currentPersonalityId: a };
            }
        },
        410490: (e, t, n) => {
            n.d(t, { b: () => p });
            var a = n(202784),
                o = n(325686),
                i = n(67369),
                r = n(530732),
                s = n(992942),
                l = n(731708),
                c = n(392237),
                d = n(725405),
                m = n(979512);
            const p = ({ coverUrl: e, label: t, onClose: n, onSendPrompt: c, prompt: p }) => {
                    const { openGrok: g } = (0, m.Z)(),
                        h = (0, d.Z)(),
                        y = (0, i.LX)(),
                        f = a.useCallback(() => {
                            n(), c ? c(p, p) : g({ text: p, autoSubmit: !0 }), h.scribe({ element: "grok_onboarding_prompt", action: "click" });
                        }, [h, n, p, g, c]);
                    return a.createElement(r.Z, { onPress: f, style: [u.container, y ? u.fullWidth : void 0] }, ({ isHovered: n }) => a.createElement(o.Z, { style: [u.content, n ? u.hovered : void 0] }, a.createElement(s.Z, { resizeMode: "cover", source: e, style: [u.image, y ? u.fullWidth : void 0] }), a.createElement(o.Z, { style: u.text }, a.createElement(l.ZP, { color: "text", size: "body" }, t))));
                },
                u = c.default.create((e) => ({ container: {}, content: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large, paddingTop: e.spaces.space8, paddingHorizontal: e.spaces.space8, overflow: "hidden" }, image: { width: 235, height: 175, borderRadius: e.borderRadii.large }, fullWidth: { width: "100%" }, hovered: { backgroundColor: e.colors.gray100 }, text: { height: e.spaces.space36, justifyContent: "center", alignItems: "center" } }));
        },
        246277: (e, t, n) => {
            n.d(t, { $: () => B, Z: () => D });
            var a = n(807896),
                o = n(202784),
                i = n(215045),
                r = n(325686),
                s = n(466792),
                l = n(67369),
                c = n(992942),
                d = n(392237),
                m = n(731708),
                p = n(154003),
                u = n(721266),
                g = n(111677),
                h = n.n(g),
                y = n(47086),
                f = n(161335),
                b = n(149170),
                E = n(837020),
                w = n(189700),
                v = n(839090),
                C = n(928831),
                Z = n(45843),
                I = n(457566),
                x = n(774038);
            const k = ({ status: e, expectedChunks: t = [0.25, 0.5, 0.75, 1], intermediateResults: n = [], url: a, aspectRatio: i, isModerated: s, withActionRow: l, openMediaToEdit: d, onImageSize: m, mediaId: p, mediaUrl: u, allMediaIds: g, allMediaUrls: h }) => {
                    const [y, f] = o.useState(0),
                        b = R({ expectedChunks: t, progress: y }),
                        E = o.useMemo(
                            () =>
                                [...n]
                                    .sort((e, t) => e.progress - t.progress)
                                    .map((e, t) => {
                                        const n = i ?? 4 / 3,
                                            a = Math.round((n / e.progress) * 100) / 100;
                                        return y > e.progress
                                            ? null
                                            : o.createElement(c.Z, {
                                                  key: `progress_${e.progress}`,
                                                  onLoad: () => {
                                                      f((t) => Math.max(t, e.progress));
                                                  },
                                                  resizeMode: "cover",
                                                  source: e.imageUrl,
                                                  style: [P.image, { aspectRatio: a }],
                                              });
                                    }),
                            [n, y, i],
                        ),
                        w = n.length > 0 && y > 0,
                        v = o.useMemo(() => ({ top: 0, height: 100 * y + "%", overflow: "hidden", transitionProperty: "height, mask", transitionDuration: `${b}ms`, transitionTimingFunction: 1 === y ? "ease-in" : "linear", zIndex: 50, mask: y < 1 ? "linear-gradient(\n        to bottom,\n        rgba(0, 0, 0, 1) 0%,\n        rgba(0, 0, 0, 1) calc(100% - 5px),\n        rgba(0, 0, 0, 0) 100%\n      )" : void 0 }), [y, b]),
                        C = o.useMemo(() => ({ top: 0, height: 100 * y + "%", overflow: "hidden", transform: "translate3d(0,0,0)", transitionProperty: "height", transitionDuration: b / 1.5 + "ms", transitionTimingFunction: "linear", filter: "blur(70px) contrast(2)", zIndex: 10 }), [y, b]),
                        [k, z] = o.useState(0);
                    return (
                        o.useEffect(() => {
                            a &&
                                Z.Z.getSize(
                                    a,
                                    (e, t) => {
                                        e && t && (z(e / t), m?.(e, t));
                                    },
                                    (e) => {},
                                );
                        }, [a, z]),
                        o.createElement(r.Z, { style: P.container }, "loading" === e ? o.createElement(r.Z, { style: P.logoContainer }, o.createElement(I.x1, { style: P.grokIcon })) : null, "loading" === e || "aborted" === e || w ? o.createElement(o.Fragment, null, o.createElement(r.Z, { style: [P.content, v] }, o.createElement(r.Z, { style: s || "aborted" === e ? P.contentModerated : void 0 }, E)), o.createElement(r.Z, { style: [P.content, C] }, E)) : null, o.createElement(c.Z, { resizeMode: "cover", source: w || s ? void 0 : a, style: [P.finalImage, { aspectRatio: i ?? (k || 4 / 3) }] }), l && "aborted" !== e ? o.createElement(r.Z, { style: [P.actionRow, P.animation] }, o.createElement(x.rO, { allMediaIds: g, allMediaUrls: h, buttonSize: "medium", buttonType: "onMediaText", contentUrl: a, isLoading: "ready" !== e, mediaId: p, mediaUrl: u, setEditMode: d || (() => {}), withStartAlignment: !0 })) : null)
                    );
                },
                P = d.default.create((e) => ({ animation: { opacity: 1, animationDuration: ".3s", animationTimingFunction: "ease-out", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, actionRow: { position: "absolute", bottom: 0, width: "100%", backdropFilter: "blur(4px) brightness(70%)", zIndex: 300 }, content: { position: "absolute", height: "100%", width: "100%", start: 0, opacity: 1 }, contentModerated: { transitionProperty: "opacity", transitionDuration: "500ms", transitionTimingFunction: "linear", opacity: 0 }, image: { position: "absolute", start: 0, top: 0, width: "100%", zIndex: 100 }, transparent: { opacity: 0 }, finalImage: { position: "relative", zIndex: 200, width: "100%" }, container: { borderRadius: e.borderRadii.large, backgroundColor: e.colors.gray50, transform: "translate3d(0,0,0)", width: "100%", overflow: "hidden", position: "relative" }, logoContainer: { position: "absolute", start: 0, top: 0, width: "100%", height: "100%", justifyContent: "center", alignItems: "center", opacity: 0, animationIterationCount: "infinite", animationDuration: "1.5s", animationKeyframes: [{ "0%": { opacity: "0" }, "50%": { opacity: "1" }, "100%": { opacity: "0" } }] }, grokIcon: { color: e.colors.gray200, width: "20%", maxWidth: e.spaces.space64, height: "20%", maxHeight: e.spaces.space64 } })),
                R = ({ expectedChunks: e, progress: t }) => {
                    const n = o.useRef(Date.now());
                    return o.useMemo(() => {
                        const a = Date.now() - n.current,
                            o = 0 === t ? 1e4 : a / t,
                            i = e.findIndex((e) => e >= t),
                            r = e[i + 1];
                        if (-1 === i) return 0;
                        if (!r) return 200;
                        return o * (r - t) * 1.2;
                    }, [t, e]);
                },
                z = h().e68b09b4,
                M = h().c26b9b9c,
                _ = { label: z },
                S = h().ac85c6b2,
                L = h().g10600b0,
                A = { label: L },
                B = ["image/jpeg", "image/webp", "image/png"];
            function D({ allMediaIds: e, allMediaUrls: t, aspectRatio: n, centerJustify: g, disableClickWhileLoading: h = !0, filename: Z, height: I, intermediateResults: x, isInputAttachmentPreview: P, isModerated: R, mediaId: D, mediaUrl: U, menuItems: F, mimetype: j, onClick: O, onImageSize: W, onRemove: H, openMediaToEdit: K, preloadedImageUrl: N, status: V, style: G, url: $, useActionRowButtons: J, width: Q }) {
                const { handlers: q, interactivityState: X } = (0, s.x)({}),
                    Y = (0, l.yu)(),
                    [ee, te] = o.useState(!1),
                    ne = F && F.length > 0,
                    [ae, oe] = o.useState(!1),
                    ie = Y ? 60 : 80,
                    re = { width: 1.5 * ie, height: ie },
                    se = o.useCallback((e) => {
                        e.stopPropagation(), te(!0);
                    }, []),
                    le = o.useCallback(() => te(!1), []),
                    ce = !Q || !I || (Q > 200 && I > 150),
                    de = o.useMemo(() => ({ width: Q ?? "auto", height: I ?? "auto", outline: "none" }), [Q, I]),
                    me = o.useCallback(
                        (e) => {
                            e.stopPropagation(), e.preventDefault(), H?.();
                        },
                        [H],
                    ),
                    { isInputFocused: pe } = (0, C.w)();
                if (B.includes(j)) {
                    const s = "ready" === V && ne && X.isHovered && !J;
                    return o.createElement(
                        i.Z,
                        (0, a.Z)({ disabled: (h && !$) || "aborted" === V }, q, {
                            onLongPress: Y ? se : void 0,
                            onMouseEnter: () => {
                                oe(!0);
                            },
                            onMouseLeave: () => {
                                oe(!1);
                            },
                            onPress: O,
                            style: [g && { justifyContent: "center" }, de, R ? T.noClick : void 0, G],
                        }),
                        P ? (!$ || $.startsWith("blob:") ? o.createElement(r.Z, { style: [T.inputAttachmentPreview, T.inputAttachmentPreviewPlaceholder, { width: Q ?? ie, height: I ?? ie }] }) : o.createElement(c.Z, { resizeMode: "cover", source: N || $, style: [T.inputAttachmentPreview, { width: Q ?? ie, height: I ?? ie }] })) : o.createElement(k, { allMediaIds: e, allMediaUrls: t, aspectRatio: n, intermediateResults: x, isModerated: R, mediaId: D, mediaUrl: U, onImageSize: W, openMediaToEdit: K, resizeMode: "cover", status: V, url: N || $, withActionRow: J && X.isHovered }),
                        "error" === V ? o.createElement(r.Z, { style: T.errorContainer }, o.createElement(y.default, { color: d.default.theme.colors.gray600, style: T.errorIcon }), ce ? o.createElement(m.ZP, { size: "body", style: T.errorMessage }, S) : null) : R || "aborted" === V ? o.createElement(r.Z, { style: T.errorContainer }, o.createElement(f.default, { color: d.default.theme.colors.text, style: T.errorIconLarge })) : null,
                        o.createElement(r.Z, { style: T.imageButtonContainer }, s ? o.createElement(p.ZP, { "aria-label": L, hoverLabel: A, icon: o.createElement(b.default, null), onClick: se, size: "xSmall", type: "onMediaDominantColorFilled" }) : null, ne && ee ? o.createElement(v.Z, { onDismiss: le }, o.createElement(i.Z, { onPress: le }, F)) : null, H && (Y || (!Y && ae)) ? o.createElement(p.ZP, { "aria-label": z, hoverLabel: _, icon: o.createElement(E.default, null), onClick: me, size: "xSmall", style: T.removeBtn, type: "onMediaDominantColorFilled" }) : null),
                    );
                }
                if (P) {
                    const e = (function (e) {
                        if (!e || "string" != typeof e) return "";
                        const t = e.lastIndexOf(".");
                        if (-1 === t || 0 === t) return "";
                        return e.slice(t + 1).toLowerCase();
                    })(Z);
                    return o.createElement(
                        r.Z,
                        {
                            onMouseEnter: () => {
                                oe(!0);
                            },
                            onMouseLeave: () => {
                                oe(!1);
                            },
                            style: [T.inputAttachmentPreviewFileContainer, { width: Q ?? re.width, height: I ?? re.height }, G],
                        },
                        o.createElement(r.Z, { style: T.inputAttachmentPreviewFileContainerContent }, o.createElement(m.ZP, { hoverLabel: { label: Z }, numberOfLines: 2, selectable: !1, size: "subtext2" }, Z), o.createElement(r.Z, { style: T.inputAttachmentPreviewBottomContainer }, o.createElement(r.Z, { style: T.inputAttachmentPreviewFileIconContainer }, o.createElement(w.default, { style: T.inputAttachmentPreviewFileIcon })), o.createElement(m.ZP, { numberOfLines: 1, size: "subtext3" }, e.toUpperCase()))),
                        H && (Y || (!Y && ae)) ? o.createElement(o.Fragment, null, o.createElement(p.ZP, { "aria-label": z, hoverLabel: _, icon: o.createElement(E.default, null), onClick: me, size: "xSmall", style: [T.removeBtn, T.inputAttachmentPreviewRemoveBtn], type: "onMediaDominantColorFilled" })) : null,
                    );
                }
                return o.createElement(r.Z, { style: [T.documentContainer, pe ? T.documentContainerActive : null, G] }, o.createElement(r.Z, { style: T.iconContainer }, o.createElement(w.default, { style: T.documentIcon })), o.createElement(r.Z, { style: T.documentNameContainer }, o.createElement(m.ZP, { hoverLabel: { label: Z }, numberOfLines: 1, selectable: !1, size: "subtext2", weight: "medium" }, Z), o.createElement(u.Z, { size: "space4" }), o.createElement(m.ZP, { color: "gray700", selectable: !1, size: "subtext3", weight: "normal" }, M)), H && (Y || (!Y && ae)) ? o.createElement(o.Fragment, null, o.createElement(u.Z, { size: "space4" }), o.createElement(p.ZP, { "aria-label": z, hoverLabel: _, icon: o.createElement(E.default, null), onClick: me, size: "xSmall", style: T.removeBtn, type: "primaryText" })) : null);
            }
            const T = d.default.create((e) => ({
                documentContainer: { flexDirection: "row", alignItems: "center", width: "100%", maxWidth: "100%", paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space12, gap: e.spaces.space8, backgroundColor: "light" === e.paletteName ? e.colors.gray50 : e.colors.gray100, borderRadius: e.spaces.space12, flexGrow: 1, flexShrink: 0 },
                documentContainerActive: { backgroundColor: "light" === e.paletteName ? e.colors.gray100 : e.colors.gray200 },
                noClick: { pointerEvents: "none" },
                iconContainer: { padding: 6, justifyContent: "center", alignItems: "center", backgroundColor: "light" === e.paletteName ? e.colors.gray100 : e.colors.gray700, borderRadius: e.spaces.space8 },
                documentIcon: { width: 16, height: 16 },
                imageActivityIndicator: { position: "absolute", start: 0, top: 0, width: "100%", height: "100%", alignItems: "center", justifyContent: "center" },
                imageButtonContainer: { position: "absolute", top: e.spaces.space2, gap: e.spaces.space4, end: e.spaces.space2, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start" },
                documentNameContainer: { minWidth: 0, flex: 1 },
                errorContainer: { position: "absolute", start: 0, top: 0, width: "100%", height: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: e.spaces.space8, padding: e.spaces.space8 },
                errorIcon: { width: 24, height: 24 },
                errorIconLarge: { width: "15%", height: "15%", minHeight: 24, minWidth: 24 },
                errorMessage: { color: e.colors.gray600 },
                removeBtn: { animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both", position: "absolute", top: 0, end: 0 },
                inputAttachmentPreviewRemoveBtn: { top: e.spaces.space4, end: e.spaces.space4 },
                inputAttachmentPreviewPlaceholder: { backgroundColor: "light" === e.paletteName ? e.colors.gray100 : e.colors.gray200 },
                inputAttachmentPreview: { borderRadius: e.spaces.space8 },
                inputAttachmentPreviewFileContainer: { position: "relative", borderRadius: e.spaces.space8, padding: e.spaces.space8, backgroundColor: "light" === e.paletteName ? e.colors.gray100 : e.colors.gray300 },
                inputAttachmentPreviewFileContainerContent: { display: "flex", flexDirection: "column", justifyContent: "space-between", gap: e.spaces.space4, height: "100%" },
                inputAttachmentPreviewBottomContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, padding: e.spaces.space4, borderRadius: e.spaces.space8, borderWidth: 1, borderStyle: "solid", borderColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray400, width: "max-content", overflow: "hidden" },
                inputAttachmentPreviewFileIconContainer: { width: e.spaces.space12, height: e.spaces.space12 },
                inputAttachmentPreviewFileIcon: { width: "100%", height: "100%" },
            }));
        },
        335785: (e, t, n) => {
            n.d(t, { L: () => d });
            n(543673), n(240753), n(128399);
            var a = n(202784),
                o = n(325686),
                i = n(167630),
                r = n(392237),
                s = n(246277),
                l = n(523253),
                c = n(86657);
            function d({ height: e, isInputAttachmentPreview: t, onRemove: n, selectedFile: r, width: d }) {
                const p = a.useRef(void 0);
                if (
                    (a.useEffect(() => {
                        if (r?.local) {
                            const e = r.local,
                                t = URL.createObjectURL(e);
                            p.current !== t && (p.current = t);
                        }
                    }, [r]),
                    !r)
                )
                    return;
                return s.$.includes(r?.local?.type) || s.$.includes(r?.remote?.mimeType) ? a.createElement(o.Z, null, r.remote && a.createElement(o.Z, { style: m.default }, a.createElement(c.Z, { file: r.remote, height: e, isImageActionsEnabled: !1, isInputAttachmentPreview: !0, isLoading: !1, onRemove: n, preloadedImageUrl: p.current, width: d })), r.local && a.createElement(o.Z, { style: [m.default, r.remote ? m.hidden : void 0] }, a.createElement(l.Z, { file: r.local, height: e, isInputAttachmentPreview: !0, onRemove: n, width: d }), a.createElement(i.Z, { style: { top: "50%", start: "50%", position: "absolute", transform: "translate(-50%, -50%)" } }))) : a.createElement(o.Z, null, r.remote ? a.createElement(c.Z, { file: r.remote, height: e, isImageActionsEnabled: !1, isInputAttachmentPreview: !0, isLoading: !1, onRemove: n, preloadedImageUrl: p.current, width: d }) : r.local ? a.createElement(a.Fragment, null, a.createElement(l.Z, { file: r.local, height: e, isInputAttachmentPreview: !0, onRemove: n, width: d }), a.createElement(i.Z, { style: [{ top: "50%", start: "50%", position: "absolute", transform: "translate(-50%, -50%)" }, r.remote ? m.hidden : void 0] })) : null);
            }
            const m = r.default.create((e) => ({ default: { opacity: 1, zIndex: 1 }, hidden: { position: "absolute", zIndex: -1 } }));
        },
        523253: (e, t, n) => {
            n.d(t, { Z: () => i });
            n(543673), n(240753), n(128399);
            var a = n(202784),
                o = n(246277);
            function i({ file: e, height: t, isInputAttachmentPreview: n, onImageSize: i, onRemove: r, style: s, width: l }) {
                const c = a.useMemo(() => URL.createObjectURL(e), [e]);
                return a.createElement(o.Z, { filename: e.name, height: t, isInputAttachmentPreview: n, mimetype: e.type, onImageSize: i, onRemove: r, status: "ready", style: s, url: c, width: l });
            }
        },
        86657: (e, t, n) => {
            n.d(t, { Z: () => z });
            n(543673), n(240753), n(128399), n(136728);
            var a = n(202784),
                o = n(107267),
                i = n(143670),
                r = n(111677),
                s = n.n(r),
                l = n(254944),
                c = n(72591),
                d = n(427783),
                m = n(186444),
                p = n(276259),
                u = n(323265),
                g = n(952793),
                h = n(128225),
                y = n(725516),
                f = n(125363),
                b = n(270172),
                E = n(601576),
                w = n(654917),
                v = n(246277);
            const C = s().j826e722,
                Z = s().a9325f10,
                I = s().f88553c8,
                x = s().g0b12442,
                k = s().edd0c172,
                P = s().d1d3a41a,
                R = ["ton.x.com", "ton.twitter.com", "pbs.twimg.com"];
            function z({ allFiles: e, aspectRatio: t, centerJustify: n, extraMenuItems: r, file: s, height: z, index: M, intermediateResults: _, isAborted: S, isImageActionsEnabled: L = !0, isInputAttachmentPreview: A, isLoading: B, messageId: D, onClick: T, onImageSize: U, onRemove: F, onViewed: j, preloadedImageUrl: O, style: W, useActionRowButtons: H, width: K, withMediaCarousel: N }) {
                const V = (0, f.I0)(),
                    G = (0, o.useHistory)(),
                    $ = (0, y.z)(),
                    [J, Q] = a.useState(!1),
                    [q, X] = a.useState(),
                    Y = !!u.ZP.isWebView(),
                    ee = (0, g.hC)("responsive_web_grok_webview_file_actions_enabled"),
                    te = (0, g.hC)("responsive_web_grok_image_edit"),
                    ne = L && (!Y || ee),
                    ae = !!s?.url && R.includes(new URL(s.url).hostname),
                    oe = a.useMemo(() => ((s.url && ae) || s.isPublic ? s.url : q ? URL.createObjectURL(q) : void 0), [q, ae, s.isPublic, s.url]);
                a.useEffect(() => {
                    if (!s.url || s.isPublic || !p.v5.includes(s.mimeType) || ae) return;
                    const e = s.url;
                    Q(!0),
                        V((0, b.X)(e))
                            .then((e) => {
                                X(e ?? void 0);
                            })
                            .catch()
                            .finally(() => {
                                Q(!1);
                            });
                }, [s.url, s.isPublic, Q, ae, s.mimeType, V]);
                const { conversationKey: ie } = (0, w.ZP)(),
                    re = a.useCallback(
                        ({ editMode: t } = {}) => {
                            let n = s.mediaId;
                            const a = s.url;
                            if (!n && a) {
                                n = new URL(a).searchParams.get("mediaId") ?? void 0;
                            }
                            if (($.scribe({ element: "expand_image", action: "click", data: { event_info: JSON.stringify({ mediaId: n, mediaUrl: a, allMediaIds: e ? e.map((e) => e.mediaId) : void 0, allMediaUrls: e ? e.map((e) => e.url) : void 0 }) } }), N)) {
                                const e = "/i/grok/media-carousel";
                                G.push({ pathname: e, state: { file: s, messageId: D, conversationKey: ie, index: M, editMode: t } });
                            } else {
                                const e = !n || ae ? "/i/grok/media" : `/i/grok/media/${n}`;
                                G.push({ pathname: e, state: { file: s } });
                            }
                            j && j({ ...s, mediaId: n });
                        },
                        [s, G, ae, j, ie, M, D, N, e, $],
                    ),
                    se = a.useCallback(() => {
                        re({ editMode: !0 });
                    }, [re]),
                    le = a.useMemo(() => (oe ? "ready" : S ? "aborted" : B || J ? "loading" : "error"), [oe, B, S, J]),
                    ce = a.useMemo(() => (N && te ? [a.createElement(i.Z, { Icon: l.default, actionText: P, key: "editImage", onClick: (e) => re({ editMode: !0 }) })] : []), [te, N, re]),
                    de = a.useMemo(
                        () =>
                            ne
                                ? [
                                      a.createElement(i.Z, {
                                          Icon: c.default,
                                          actionText: C,
                                          key: "saveImage",
                                          onClick: (e) => {
                                              (async () => {
                                                  if (($.scribe({ element: "save_image_button", action: "click" }), oe)) {
                                                      const e = await (0, h.f)(oe, !0, !0),
                                                          t = URL.createObjectURL(e);
                                                      (0, p.uv)(t, "image.jpg");
                                                  }
                                              })();
                                          },
                                      }),
                                      a.createElement(i.Z, {
                                          Icon: d.default,
                                          actionText: Z,
                                          key: "copyImage",
                                          onClick: (e) => {
                                              (async () => {
                                                  if (($.scribe({ element: "copy_image_button", action: "click" }), oe)) {
                                                      const e = await (0, h.f)(oe, !0, !0),
                                                          t = URL.createObjectURL(e);
                                                      (0, p.VJ)(t)
                                                          .then(() => {
                                                              V((0, E.fz)({ text: I }));
                                                          })
                                                          .catch((e) => {
                                                              V((0, E.fz)({ text: x }));
                                                          });
                                                  }
                                              })();
                                          },
                                      }),
                                      a.createElement(i.Z, {
                                          Icon: m.default,
                                          actionText: k,
                                          key: "postImage",
                                          onClick: (e) => {
                                              (async () => {
                                                  if (($.scribe({ element: "post_image_button", action: "click" }), !oe)) return;
                                                  const e = await (0, h.f)(oe, !0, !0),
                                                      t = URL.createObjectURL(e);
                                                  G.push({ pathname: "/compose/post", state: { externalMedia: [t], positionCursorAtBeginning: !0 } });
                                              })();
                                          },
                                      }),
                                      ...ce,
                                      ...(r ?? []),
                                  ]
                                : [],
                        [oe, $, V, G, ne, r, ce],
                    ),
                    me = a.useCallback(() => (T ? T(re) : re()), [T, re]);
                return a.createElement(v.Z, { allMediaIds: e ? e.map((e) => e.mediaId || "") : void 0, aspectRatio: t, centerJustify: n, disableClickWhileLoading: !N, filename: s.fileName, height: z, intermediateResults: _, isInputAttachmentPreview: A, isModerated: !!s.moderated, mediaId: s.mediaId, menuItems: de, mimetype: s.mimeType, onClick: me, onImageSize: U, onRemove: F, openMediaToEdit: se, preloadedImageUrl: O, status: le, style: W, url: oe, useActionRowButtons: H, width: K });
            }
        },
        609013: (e, t, n) => {
            n.d(t, { T: () => d });
            var a = n(202784),
                o = n(111677),
                i = n.n(o),
                r = n(640872),
                s = n(449067),
                l = n(38293);
            const c = i().h5860a68,
                d = ({ documentTitle: e }) => {
                    const { setSideNavSupport: t } = a.useContext(r.Z);
                    return a.useEffect(() => (t(!1), () => t(!0)), [t]), a.createElement(a.Fragment, null, a.createElement(s.Z.Configure, { headerless: !0 }), a.createElement(l.Z.Configure, { displayTitleOnly: !0, title: e || c }));
                };
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-16d5f187.06b6ea5a.js.map

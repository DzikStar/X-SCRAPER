"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-0f78f5a6"],
    {
        299399: (e, t, a) => {
            a.d(t, { Z: () => A });
            var n = a(202784),
                o = a(214997),
                r = a(325686),
                s = a(392237),
                i = a(757483),
                l = a(530732),
                c = a(215337),
                m = a(721266),
                d = a(323265),
                p = a(725405),
                u = a(465086),
                y = a(721270),
                f = a(988290),
                g = a(617568),
                h = a(731708),
                b = a(674132),
                C = a.n(b),
                w = a(408814),
                S = a(58399),
                E = a(378471),
                x = a(961609);
            const k = C().f5a2377e,
                v = C().g3ce0132,
                T = C().a4d9dbfa,
                Z = C().f8007364,
                I = C().ca53f780;
            function D({ completed: e, completedTimestamp: t, expanded: a, fromTimestamp: o, id: s, isPastSummary: i = !1 }) {
                const l = n.useCallback(() => n.createElement(r.Z, { style: P.thinkingLabel, weight: "bold" }, n.createElement(r.Z, { style: P.iconContainer }, n.createElement(w.default, { style: [P.lightBulbIcon, e || i ? P.iconVisible : void 0] }), n.createElement(E.Z, { style: { ...P.spinner, ...(e ? {} : P.iconVisible), ...(e ? P.iconHide : {}) } })), n.createElement(r.Z, null), (0 !== t && i) || (0 !== o && !i) ? n.createElement(h.ZP, { weight: "medium" }, e ? v : k) : n.createElement(h.ZP, { weight: "medium" }, T), (0 !== t && i) || (0 !== o && !i) ? n.createElement(x.Z, { completed: e, completedTimestamp: t, fromTimestamp: o, style: P.elapsedTime, weight: "medium" }) : null), [e, i, t, o]);
                return n.createElement(r.Z, { style: P.headerContainer }, n.createElement(r.Z, { style: P.cardHeader }, n.createElement(r.Z, { style: P.infoContainer }, l()), n.createElement(S.default, { style: [P.icon, a ? P.expandedIcon : null] })), n.createElement(h.ZP, { color: "gray700", size: "subtext1" }, a ? I : Z));
            }
            const P = s.default.create((e) => ({ headerContainer: { width: "100%", gap: 6, transition: "background-color 0.2s ease" }, cardHeader: { display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between" }, infoContainer: { color: e.colors.gray700, display: "flex", flexDirection: "column" }, icon: { color: e.colors.gray700, transition: "transform 0.2s ease", height: e.spaces.space16, width: e.spaces.space16 }, expandedIcon: { transform: "rotate(90deg)" }, thinkingLabel: { flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, elapsedTime: { color: e.colors.text, fontSize: e.fontSizes.body }, iconContainer: { position: "relative", width: e.spaces.space16, height: e.spaces.space16 }, lightBulbIcon: { fill: "none", color: e.colors.text, position: "absolute", top: "50%", start: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%", opacity: 0 }, spinner: { position: "absolute", top: "50%", start: "50%", transform: "translate(-25%, -76%)", width: "100%", height: "100%", opacity: 0 }, iconVisible: { opacity: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, iconHide: { opacity: 0, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 1 }, "100%": { opacity: 0 } }] } }));
            function R({ completed: e, endStreamTimestamp: t, fromTimestamp: a, hasResponseText: h, id: b, isPastThinkingTrace: C, shownTrace: w }) {
                const S = (0, p.Z)(),
                    [E, x] = n.useState(!1),
                    [k, v] = n.useState(null),
                    [T] = (0, u.h)({ scrollingFrame: k?.getScrollableNode(), enabled: !C && !e, autoStart: !C && !e }),
                    { isCompactLayout: Z } = (0, f.ZP)(),
                    I = s.default.theme.colors.gray0,
                    P = n.useCallback(() => [i.Z.hexToCss(I || s.default.theme.colors.gray0, 0), i.Z.hexToCss(I || s.default.theme.colors.gray0, 0.8), i.Z.hexToCss(I || s.default.theme.colors.gray0, 1)], [I]);
                return (
                    n.useEffect(() => {
                        e && x(!1);
                    }, [e]),
                    n.createElement(
                        r.Z,
                        { style: [z.container, Z ? z.compactContainer : void 0, E ? null : z.lockedMaxHeight] },
                        n.createElement(
                            l.Z,
                            {
                                interactiveStyles: z.interactiveHeaderContainer,
                                onClick: () => {
                                    S.scribe({ element: "grok-reasoning-card-" + (E ? "collapse" : "expand"), action: "click" }), x(!E);
                                },
                                style: z.headerContainer,
                            },
                            ({ isHovered: o }) => n.createElement(r.Z, { style: z.headerContainer }, n.createElement(D, { completed: e, completedTimestamp: t, expanded: E, fromTimestamp: a, id: b, isPastSummary: C }), C ? null : n.createElement(r.Z, { style: [{ width: "100%", height: 150, position: "relative" }, { display: h || E ? "none" : "flex" }] }, n.createElement(g.w, { charLimit: 2e3, text: w }), n.createElement(c.Z, { angle: 0, colors: P(), style: z.traceGradientTop }), n.createElement(c.Z, { colors: P(), style: z.traceGradientBottom }))),
                        ),
                        n.createElement(r.Z, { style: [z.collapsedOuterThinkingContainer, E ? z.expandedOuterThinkingContainer : void 0] }, n.createElement(r.Z, { style: { position: "relative" } }, n.createElement(m.Z, { size: "space8" }), n.createElement(o.Z, { contentContainerStyle: z.thinkingContentContainer, ref: v, showsVerticalScrollIndicator: !1, style: z.thinkingContainer }, n.createElement(y.default, { disableCodeBlockStickyHeader: !0, disableLinks: d.ZP.isWebView(), isAnimated: !1, markdownText: w, style: z.markdownStyle }), n.createElement(r.Z, { ref: T, style: { position: "relative", top: -250, width: 100, height: 1 } })), n.createElement(m.Z, { size: "space8" }), n.createElement(c.Z, { angle: 0, colors: P(), style: z.thinkingGradientTop }), n.createElement(c.Z, { colors: P(), style: z.thinkingGradientBottom }))),
                    )
                );
            }
            const z = s.default.create((e) => ({ container: { marginHorizontal: e.spaces.space12, marginBottom: e.spaces.space16, opacity: 1, animationDuration: "0.5s", borderStyle: "solid", borderColor: e.colors.gray50, borderWidth: 1, animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], overflow: "hidden", borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray0, padding: e.spaces.space20 }, lockedMaxHeight: { maxHeight: 180 }, compactContainer: { marginBottom: e.spaces.space12, marginHorizontal: e.spaces.space16, padding: e.spaces.space16 }, interactiveHeaderContainer: { backgroundColor: "transparent", cursor: "pointer" }, collapsedOuterThinkingContainer: { display: "grid", gridTemplateRows: "0fr", transition: "250ms grid-template-rows ease", position: "relative" }, expandedOuterThinkingContainer: { gridTemplateRows: "1fr" }, thinkingContainer: { maxHeight: "50vh" }, thinkingContentContainer: { paddingVertical: e.spaces.space32 }, thinkingGradientTop: { position: "absolute", width: "100%", height: "5%", top: 0 }, thinkingGradientBottom: { position: "absolute", width: "100%", height: "5%", bottom: 0 }, headerContainer: { position: "flex", flexDirection: "column" }, markdownStyle: { width: "100%" }, thinkingLabelContainer: { position: "relative" }, thinkingLabel: { opacity: 1 }, traceContainer: { marginTop: 5, display: "flex", color: e.colors.gray1000, flexDirection: "column", flex: 1, overflow: "hidden" }, traceGradientTop: { position: "absolute", width: "100%", height: "20%", top: 0 }, traceGradientBottom: { position: "absolute", width: "100%", height: "15%", bottom: 0 } })),
                A = n.memo(R);
        },
        545519: (e, t, a) => {
            a.d(t, { V: () => i });
            var n = a(202784),
                o = a(400752),
                r = a(420182);
            const s = "rweb.grok.resumability";
            function i(e, t, a) {
                const i = (0, o.Dv)(r.lZ),
                    [l, c] = n.useState(0),
                    [m, d] = n.useState(0),
                    [p, u] = n.useState("");
                n.useEffect(() => {
                    t && u(t);
                }, [t]);
                const y = async (e) => {
                        try {
                            const t = await i.get(s),
                                a = t?.timers || new Map(),
                                n = a.get(p) || { startStreamTime: 0, endStreamTime: 0 };
                            (n.startStreamTime = e), a.set(p, n), await i.set(s, { timers: a }), c(e);
                        } catch (e) {}
                    },
                    f = async (e) => {
                        try {
                            const t = await i.get(s),
                                a = t?.timers || new Map(),
                                n = a.get(p) || { startStreamTime: 0, endStreamTime: 0 };
                            (n.endStreamTime = e), a.set(p, n), await i.set(s, { timers: a }), d(e);
                        } catch (e) {}
                    },
                    g = async () => {
                        try {
                            const e = await i.get(s);
                            return (e?.timers instanceof Map ? e.timers.get(p) : null) || null;
                        } catch (e) {
                            return null;
                        }
                    };
                return (
                    n.useEffect(() => {
                        let e = !0;
                        return (
                            (async () => {
                                try {
                                    const t = await g();
                                    if (!e) return;
                                    t && (c(t.startStreamTime || 0), d(t.endStreamTime || 0)), !a?.startStreamTime || (t && t.startStreamTime) || (await y(a.startStreamTime));
                                    const n = a?.thinkingTraceEnd || a?.deepsearchEnd || a?.endStreamTime;
                                    !n || (t && t.endStreamTime) || (await f(n));
                                } catch (e) {}
                            })(),
                            () => {
                                e = !1;
                            }
                        );
                    }, [p, a]),
                    {
                        setStartTime: y,
                        setEndTime: f,
                        getStreamTimes: g,
                        deleteStreamTimes: async () => {
                            try {
                                const e = await i.get(s);
                                if (e?.timers instanceof Map) {
                                    const t = e.timers;
                                    t.has(p) && (t.delete(p), await i.set(s, { timers: t }));
                                }
                            } catch (e) {}
                        },
                        persistenceKey: p,
                        fromTimestamp: l,
                        completedTimestamp: m,
                    }
                );
            }
        },
        161648: (e, t, a) => {
            a.d(t, { Z: () => _e, Y: () => Ae });
            var n = a(202784),
                o = a(325686),
                r = a(392237),
                s = a(674132),
                i = a.n(s),
                l = a(187669),
                c = a(725516),
                m = a(744610),
                d = a(721266),
                p = a(154003),
                u = a(647174),
                y = a(841972),
                f = a(19197),
                g = a(952793),
                h = a(557707),
                b = a(165243),
                C = a(74514),
                w = a(405303),
                S = a(125363),
                E = a(654917);
            const x = i().e258000e,
                k = i().d591a772,
                v = i().bc49b728,
                T = i().d8aadeba,
                Z = i().db832e38,
                I = i().a910cac6,
                D = i().g4b3a3e6;
            function P({ completed: e }) {
                const t = (0, c.z)(),
                    a = (0, E.uf)(),
                    r = (0, S.v9)(a.selectLastHumanMessage),
                    [s, i] = n.useState(!1),
                    [l, m] = n.useState(!1),
                    [d, u] = n.useState(!1),
                    [y, f] = n.useState(!1),
                    [g, P] = n.useState(!1);
                n.useEffect(() => {
                    e && g && "granted" === Notification.permission && (P(!1), new Notification(D, { body: r?.message.message || "" }));
                }, [e, g, r]);
                return n.createElement(
                    o.Z,
                    null,
                    !e &&
                        ("denied" === Notification.permission
                            ? n.createElement(p.ZP, {
                                  borderColor: "transparent",
                                  color: "gray700",
                                  hoverLabel: { label: k },
                                  icon: n.createElement(b.default, { style: R.icon }),
                                  onClick: () => {
                                      u(!0), t.scribe({ element: "grok-deepsearch-notification-denied", action: "click" });
                                  },
                                  size: "small",
                                  style: R.button,
                              })
                            : g
                              ? n.createElement(p.ZP, {
                                    borderColor: "transparent",
                                    color: "gray700",
                                    hoverLabel: { label: x },
                                    icon: n.createElement(C.default, { style: R.icon }),
                                    onClick: () => {
                                        P(!1), m(!0), t.scribe({ element: "grok-deepsearch-notification-off", action: "click" });
                                    },
                                    size: "small",
                                    style: R.button,
                                })
                              : n.createElement(p.ZP, {
                                    borderColor: "transparent",
                                    color: "gray700",
                                    hoverLabel: { label: x },
                                    icon: n.createElement(w.default, { style: R.icon }),
                                    onClick: () => {
                                        (async () => {
                                            "granted" === Notification.permission ? (P(!0), i(!0)) : "default" === Notification.permission && ("granted" === (await Notification.requestPermission()) ? (P(!0), i(!0)) : (P(!1), f(!0)));
                                        })(),
                                            t.scribe({ element: "grok-deepsearch-notification-on", action: "click" });
                                    },
                                    size: "small",
                                    style: R.button,
                                })),
                    s && n.createElement(h.ZP, { autoDismissDelay: 2e3, onClose: () => i(!1), style: R.toast, text: v, withAutoDismiss: !0, withClearButton: !0 }),
                    l && n.createElement(h.ZP, { autoDismissDelay: 2e3, onClose: () => m(!1), style: R.toast, text: T, withAutoDismiss: !0, withClearButton: !0 }),
                    d && n.createElement(h.ZP, { autoDismissDelay: 2e3, onClose: () => u(!1), style: R.toast, text: Z, withAutoDismiss: !0, withClearButton: !0 }),
                    y && n.createElement(h.ZP, { autoDismissDelay: 2e3, onClose: () => f(!1), style: R.toast, text: I, withAutoDismiss: !0, withClearButton: !0 }),
                );
            }
            const R = r.default.create((e) => ({ button: { borderRadius: e.borderRadii.xLarge }, icon: {}, toast: { opacity: 1, transform: [{ translateY: 0 }], animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0, transform: [{ translateY: 5 }] }, "100%": { opacity: 1, transform: [{ translateY: 0 }] } }] } }));
            var z = a(731708),
                A = a(664345),
                _ = a(378471),
                B = a(961609);
            const V = i().ee000b0d;
            function L({ aborted: e, completed: t, completedTimestamp: a, fromTimestamp: r, isPast: s, numSources: i, title: l }) {
                const c = 0 !== r;
                return n.createElement(o.Z, { style: M.container }, n.createElement(o.Z, { style: M.iconContainer }, t || e ? n.createElement(A.default, { style: M.searchIcon }) : n.createElement(_.Z, { style: M.loadingIcon })), n.createElement(o.Z, { style: M.headerContainer }, n.createElement(z.ZP, { style: M.header, weight: "medium" }, l), n.createElement(o.Z, { style: M.subHeaderContainer }, s || !c ? n.createElement(n.Fragment, null, n.createElement(z.ZP, { style: M.sources }, V({ numSources: i }))) : n.createElement(n.Fragment, null, n.createElement(B.Z, { aborted: e, completed: t, completedTimestamp: a, fromTimestamp: r }), void 0 !== i && i > 0 && n.createElement(n.Fragment, null, n.createElement(o.Z, { style: M.dot }), n.createElement(z.ZP, { style: M.sources }, V({ numSources: i })))))));
            }
            const M = r.default.create((e) => ({ container: { display: "flex", flexDirection: "row", gap: e.spaces.space8 }, iconContainer: { width: e.spaces.space20, display: "flex", flexDirection: "column", alignItems: "center" }, searchIcon: { position: "relative", width: e.spaces.space16, height: e.spaces.space16, top: 2 }, loadingIcon: { position: "relative", top: -3 }, headerContainer: { display: "flex", flexDirection: "column" }, header: {}, subHeaderContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, dot: { width: e.spaces.space4, height: e.spaces.space4, borderRadius: e.spaces.space4, backgroundColor: e.colors.gray700 }, sources: { color: e.colors.gray700, fontSize: e.fontSizes.subtext2 } })),
                H = (e, t) => e.completed === t.completed && e.aborted === t.aborted && e.numSources === t.numSources && e.title === t.title && e.fromTimestamp === t.fromTimestamp && e.completedTimestamp === t.completedTimestamp,
                O = n.memo(L, H);
            var N = a(214997),
                $ = a(757483),
                F = a(215337);
            function K({ children: e, gradientColor: t, onCancelAutoScroll: a, onRestartAutoScroll: s, scrollViewContentContainerStyle: i, scrollViewRef: l, scrollViewStyle: c, stickyHeaderIndices: m, style: d }) {
                const p = n.useCallback(() => [$.Z.hexToCss(t || r.default.theme.colors.gray50, 0), $.Z.hexToCss(t || r.default.theme.colors.gray50, 0.8), $.Z.hexToCss(t || r.default.theme.colors.gray50, 1)], [t]),
                    u = n.useRef(0);
                return n.createElement(
                    o.Z,
                    { style: [W.container, d] },
                    n.createElement(F.Z, { angle: 0, colors: p(), style: W.traceGradientTop }),
                    n.createElement(F.Z, { colors: p(), style: W.traceGradientBottom }),
                    n.createElement(
                        N.Z,
                        {
                            contentContainerStyle: [W.scrollViewContentContainer, i],
                            onScroll: (e) => {
                                const { contentOffset: t, contentSize: n, layoutMeasurement: o } = e.nativeEvent,
                                    r = t.y;
                                t.y + o.height >= n.height - 50 ? s() : r < u.current && r - u.current < -5 && a(), (u.current = r);
                            },
                            ref: l,
                            scrollEventThrottle: 16,
                            showsVerticalScrollIndicator: !1,
                            stickyHeaderIndices: m,
                            style: [W.scrollView, c],
                        },
                        e,
                    ),
                );
            }
            const W = r.default.create((e) => ({ container: { flex: 1, position: "relative" }, scrollView: {}, scrollViewContentContainer: { position: "relative" }, traceGradientTop: { position: "absolute", width: "100%", height: "5%", top: 0, zIndex: 1 }, traceGradientBottom: { position: "absolute", width: "100%", height: "5%", bottom: 0, zIndex: 1 } }));
            var G = a(25825),
                j = a(530732),
                Y = a(293723),
                q = a(227674),
                J = a(303157);
            const U = i().c2745fa4;
            function X({ active: e, header: t, onStepClick: a, style: s }) {
                const i = t.state === J.Fi.IN_PROGRESS,
                    l = t.state === J.Fi.COMPLETED,
                    c = t.state === J.Fi.FAILED;
                return n.createElement(
                    j.Z,
                    {
                        interactiveStyles: Q.stepInteractiveStyle,
                        onClick: () => {
                            c || a(t.id);
                        },
                        style: [Q.step, s],
                    },
                    ({ isHovered: a }) => n.createElement(n.Fragment, null, n.createElement(o.Z, { style: Q.statusIconContainer }, n.createElement(G.Z, { color: r.default.theme.colors.gray900, size: "small", style: [Q.statusIcon, i ? Q.statusIconVisible : void 0, i ? void 0 : Q.statusIconHide] }), n.createElement(Y.default, { style: [Q.statusIcon, Q.completeFailedIcon, l ? Q.completeFailedIconVisible : void 0, t.isCompleteHeader ? Q.isSpecialCompleteIcon : void 0] }), n.createElement(q.default, { style: [Q.statusIcon, Q.completeFailedIcon, c ? Q.completeFailedIconVisible : void 0] })), c ? n.createElement(z.ZP, { style: Q.title }, U) : n.createElement(z.ZP, { style: [Q.title, l ? Q.completedTitle : void 0, a ? Q.hoveredTitle : void 0, e ? Q.hoveredTitle : void 0] }, t.label)),
                );
            }
            const Q = r.default.create((e) => ({ stepInteractiveStyle: { backgroundColor: "transparent" }, step: { display: "flex", flexDirection: "row", gap: e.spaces.space8 }, statusIconContainer: { position: "relative", width: e.spaces.space20, height: e.spaces.space20, backgroundColor: e.colors.gray50 }, statusIcon: { position: "absolute", top: "50%", start: "50%", transform: "translate(-50%, -50%)", opacity: 0, width: "100%", height: "100%" }, statusIconVisible: { opacity: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, statusIconHide: { opacity: 0, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 1 }, "100%": { opacity: 0 } }] }, completeFailedIcon: { color: e.colors.gray900, width: e.spaces.space16, height: e.spaces.space16 }, completeFailedIconVisible: { opacity: 1, transform: "translate(-50%, -50%) scale(1)", animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translate(-50%, -50%) scale(0.8)" }, "50%": { opacity: 0.8, transform: "translate(-50%, -50%) scale(1.2)" }, "75%": { opacity: 0.9, transform: "translate(-50%, -50%) scale(0.95)" }, "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" } }] }, isSpecialCompleteIcon: { color: e.colors.green500 }, title: { fontSize: e.fontSizes.subtext1, color: e.colors.gray700, transition: "color 0.2s ease" }, completedTitle: {}, hoveredTitle: { color: e.colors.brandColor } })),
                ee = i().j7d0e836,
                te = i().eaf55eb4;
            function ae({ aborted: e, activeStepId: t, completed: a, completedTimestamp: s, expanded: i, finalAnswerStreamCompleted: l, fromTimestamp: h, headers: b, isPast: C, numSources: w, onCancelAutoScroll: S, onOpenTrace: E, onRestartAutoScroll: x, onStepClick: k, rawTraceEnabled: v, scrollViewRef: T, setExpanded: Z, style: I, title: D }) {
                const R = (0, c.z)(),
                    z = n.useRef(new m.Z.Value(0)).current,
                    A = n.useMemo(() => b.slice(void 0, -1), [b]),
                    _ = n.useMemo(() => b[b.length - 1], [b]),
                    B = (0, g.hC)("responsive_web_grok_enable_deepsearch_notifications"),
                    V = n.useCallback(
                        (e) => {
                            m.Z.spring(z, { toValue: e.nativeEvent.layout.height, useNativeDriver: !1, speed: 5 }).start();
                        },
                        [z],
                    );
                return n.createElement(
                    o.Z,
                    { style: [ne.container, I] },
                    n.createElement(O, { aborted: e, completed: a, completedTimestamp: s, fromTimestamp: h, isPast: C, numSources: w, title: D }),
                    n.createElement(
                        K,
                        { gradientColor: r.default.theme.colors.gray50, onCancelAutoScroll: S, onRestartAutoScroll: x, scrollViewContentContainerStyle: ne.scrollViewContentContainerStyle, scrollViewRef: T },
                        n.createElement(d.Z, { size: "space8" }),
                        n.createElement(
                            o.Z,
                            { onLayout: V, style: ne.headerSteps },
                            n.createElement(m.Z.View, { style: [ne.lineContainer, { height: z }] }, n.createElement(o.Z, { style: ne.line })),
                            A.map((e, a) => n.createElement(X, { active: t === e.id, header: e, key: e.id, onStepClick: k, style: ne.stepHeaderStatusContainer })),
                        ),
                        _ && n.createElement(X, { header: _, key: _.id, onStepClick: k, style: ne.stepHeaderStatusContainer }),
                        n.createElement(d.Z, { size: "space8" }),
                    ),
                    n.createElement(
                        o.Z,
                        { style: ne.buttonsContainer },
                        n.createElement(p.ZP, {
                            borderColor: "transparent",
                            color: "gray700",
                            hoverLabel: { label: ee },
                            icon: i ? n.createElement(u.default, { style: ne.icon }) : n.createElement(y.default, { style: ne.icon }),
                            onClick: () => {
                                Z(!i), R.scribe({ element: "grok-deepsearch-expand", action: "click", data: { event_info: (!i).toString() } });
                            },
                            size: "small",
                            style: ne.button,
                        }),
                        v &&
                            n.createElement(p.ZP, {
                                borderColor: "transparent",
                                color: "gray700",
                                hoverLabel: { label: te },
                                icon: n.createElement(f.default, { style: ne.icon }),
                                onClick: () => {
                                    E(), R.scribe({ element: "grok-deepsearch-open-trace", action: "click" });
                                },
                                size: "small",
                                style: ne.button,
                            }),
                        !C && B && n.createElement(P, { completed: a && l, completedBody: "" }),
                    ),
                );
            }
            const ne = r.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space4, backgroundColor: e.colors.gray50, padding: e.spaces.space20, paddingBottom: e.spaces.space8 }, scrollViewContentContainerStyle: { paddingEnd: e.spaces.space12 }, headerSteps: { position: "relative" }, lineContainer: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: e.spaces.space20, position: "absolute", start: 0, top: 0, height: "100%", paddingTop: e.spaces.space8 }, line: { width: 1, height: "100%", backgroundColor: e.colors.gray900 }, step: { marginBottom: e.spaces.space16 }, buttonsContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, button: { borderRadius: e.borderRadii.xLarge }, icon: {}, stepHeaderStatusContainer: { paddingBottom: e.spaces.space16 } })),
                oe = n.memo(ae),
                re = i().be30b6ee,
                se = i().a5077d3e;
            function ie({ deepSearchSummaryAccumulator: e }) {
                const t = (0, c.z)(),
                    a = n.useRef(null),
                    [o, r] = n.useState(!1),
                    { isPastSummary: s, lastStreamedDataTimestamp: i, state: l } = e,
                    m = "STARTED" === l,
                    d = "COMPLETED" === l,
                    p = "ABORTED" === l,
                    u = () => {
                        r(!1), clearTimeout(a.current);
                    },
                    y = n.useCallback(() => {
                        u(),
                            (a.current = setTimeout(() => {
                                d || (r(!0), t.scribe({ component: "grok-deepsearch-refresh-toast", action: "show" }));
                            }, 3e4));
                    }, [t, d]);
                return (
                    n.useEffect(() => {
                        m && !a.current ? y() : (d || p) && u();
                    }, [m, d, p, y]),
                    n.useEffect(() => {
                        !i || d || s || y();
                    }, [i, y, d, s]),
                    o &&
                        n.createElement(h.ZP, {
                            action: {
                                label: se,
                                onAction: () => {
                                    window.location.reload();
                                },
                            },
                            onClose: () => {
                                r(!1), t.scribe({ component: "grok-deepsearch-refresh-toast", action: "click" });
                            },
                            style: le.toast,
                            text: re,
                            withClearButton: !0,
                        })
                );
            }
            const le = r.default.create((e) => ({ toast: { opacity: 1, transform: [{ translateY: 0 }], animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0, transform: [{ translateY: 5 }] }, "100%": { opacity: 1, transform: [{ translateY: 0 }] } }] } }));
            var ce = a(311826),
                me = a(525271),
                de = a(323265),
                pe = a(465086),
                ue = a(721270);
            const ye = i().a4d9dbfa;
            function fe({ completed: e, gradientColor: t, isPastSummary: a, onDismissed: s, style: i, trace: c }) {
                const [m, d] = n.useState(null),
                    [p] = (0, pe.h)({ scrollingFrame: m?.getScrollableNode(), enabled: !a && !e, autoStart: !a && !e });
                return (
                    (0, l.q)(() => {
                        const e = "deep-search-summary-card-sub-step";
                        if (document.getElementById(e)) return;
                        const t = document.createElement("style");
                        t.setAttribute("id", e), (t.textContent = `\n    .deep-search-summary-card-sub-step-markdown-text li {\n      margin-top: 0px !important;\n    }\n\n    .deep-search-summary-card-sub-step-markdown-text ul {\n      margin-bottom: 0px !important;\n    }\n\n    .deep-search-summary-card-sub-step-markdown-text span {\n      font-size: ${r.default.theme.fontSizes.subtext2} !important;\n      color: ${r.default.theme.colors.gray900} !important;\n      line-height: 24px;\n    }\n\n    .deep-search-summary-card-trace-preview-markdown-text span {\n      font-size: ${r.default.theme.fontSizes.subtext2} !important;\n      color: ${r.default.theme.colors.gray900} !important;\n      line-height: 24px;\n    }\n  `);
                        const a = document.head;
                        return (
                            a && a.appendChild(t),
                            () => {
                                const t = document.getElementById(e);
                                t && t.remove();
                            }
                        );
                    }),
                    n.createElement(me.Z, { align: "right", buttonType: "primaryText", onDismissed: s, title: ye }, n.createElement(o.Z, { style: ge.traceScrollViewContainer }, n.createElement(N.Z, { automaticallyAdjustKeyboardInsets: !0, contentContainerStyle: ge.traceScrollViewContentContainer, ref: d, style: ge.traceScrollView }, n.createElement("div", { className: "deep-search-summary-card-sub-step-markdown-text" }, n.createElement(ue.default, { disableLinks: de.ZP.isWebView(), isAnimated: !1, markdownText: c })), n.createElement(o.Z, { ref: p, style: { position: "relative", top: -250, width: 100, height: 1 } }), n.createElement(o.Z, { style: { position: "relative", width: 100, height: 300 } }))))
                );
            }
            const ge = r.default.create((e) => ({ thinkingTraceLabel: { color: e.colors.gray800, fontSize: e.fontSizes.subtext3 }, markdownText: { position: "relative", fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 }, traceScrollViewContainer: { flex: 1, width: "100%", maxWidth: 500, position: "relative" }, traceScrollView: { flex: 1, width: "100%" }, traceScrollViewContentContainer: { flexGrow: 1, padding: e.spaces.space16 }, traceGradientBottom: { position: "absolute", width: "100%", height: "20%", bottom: 0 }, interactivePinButton: { backgroundColor: "transparent" }, pinButtonContainer: { position: "absolute", bottom: e.spaces.space16, start: "50%", transform: "translateX(-50%)" }, pinButton: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, borderRadius: e.borderRadii.xLarge, backgroundColor: "transparent", transition: "background-color 0.2s ease", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12 }, hoveredPinButton: { backgroundColor: e.colors.gray0 }, pinIcon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray900 }, pinText: { fontSize: e.fontSizes.subtext1, color: e.colors.gray900 } })),
                he = n.memo(fe);
            a(136728);
            var be = a(956272),
                Ce = a(20716),
                we = a(868489),
                Se = a(5323);
            function Ee({ handleStepLayout: e, isAnimated: t, step: a, style: s }) {
                const i = n.useCallback(
                        (e) => {
                            if (e.summary) {
                                const a = e.summary;
                                return n.createElement(o.Z, { style: ve.subStepContainer }, n.createElement(o.Z, { style: ve.subStepIconContainer }), n.createElement(o.Z, { style: ve.summaryOffset }, n.createElement("div", { className: "search-card-sub-step-markdown-text" }, n.createElement(ue.default, { disableLinks: de.ZP.isWebView(), isAnimated: t, markdownText: a }))));
                            }
                        },
                        [t],
                    ),
                    l = n.useCallback((e) => {
                        if (e.actionSummary) {
                            const t = e.actionIcon,
                                a = e.actionSummary,
                                s = e.actionState,
                                i = (t && (0, Ce.wG)(t)) || be.default;
                            return n.createElement(o.Z, { style: ve.subStepContainer }, n.createElement(o.Z, { style: ve.subStepIconContainer }, n.createElement(G.Z, { color: r.default.theme.colors.gray900, size: "small", style: [ve.decisionIcon, "STARTED" === s ? ve.showActivityDecisionIcon : void 0, "STARTED" !== s ? ve.hideActivityDecisionIcon : void 0] }), n.createElement(i, { style: [ve.subStepIcon, ve.decisionIcon, "COMPLETED" === s ? ve.showDecisionIcon : void 0] })), n.createElement("div", { className: "search-card-sub-step-markdown-text" }, n.createElement(ue.default, { disableLinks: de.ZP.isWebView(), isAnimated: !1, markdownText: a })));
                        }
                    }, []),
                    c = n.useCallback((e) => (e.webResults && e.webResults.length > 0 ? n.createElement(o.Z, { style: ve.subStepContainer }, n.createElement(o.Z, { style: ve.subStepIconContainer }), n.createElement(we.Z, { isAnimated: t, style: ve.resultsContainer, webResults: e.webResults })) : e.xPostIds && e.xPostIds.length > 0 ? n.createElement(Se.Z, { isAnimated: t, scrollViewContentContainerStyle: ve.xPostsScrollViewContentContainer, seeMoreButtonStyle: ve.xPostsSeeMoreButton, style: ve.resultsContainer, xPostIds: e.xPostIds }) : void 0), [t]);
                return n.createElement(
                    o.Z,
                    { onLayout: e && e(a.id), style: [ve.step, s] },
                    a.subSteps.map((e, t) => n.createElement(o.Z, { key: `${a.id}-${e.messageTag}-${e.messageStepId}-${t}` }, e.messageTag === J.iS.SUMMARY && i(e), e.messageTag === J.iS.DECISION && n.createElement(n.Fragment, null, l(e), c(e)))),
                );
            }
            const xe = r.default.theme.spacesPx.space20,
                ke = r.default.theme.spacesPx.space16,
                ve = r.default.create((e) => ({ step: { display: "flex", flexDirection: "column", gap: e.spaces.space12 }, subStepContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, paddingHorizontal: xe }, subStepIconContainer: { width: ke, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }, subStepIcon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray900 }, decisionIcon: { position: "absolute", top: "50%", start: "50%", transform: "translate(-50%, -50%) scale(0)", opacity: 0 }, showDecisionIcon: { opacity: 1, transform: "translate(-50%, -50%) scale(1)", animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translate(-50%, -50%) scale(0)" }, "50%": { opacity: 0.5, transform: "translate(-50%, -50%) scale(1.1)" }, "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" } }] }, showActivityDecisionIcon: { opacity: 1, transform: "translate(-50%, -50%) scale(0.7)", animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translate(-50%, -50%) scale(0)" }, "50%": { opacity: 0.5, transform: "translate(-50%, -50%) scale(0.8)" }, "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(0.7)" } }] }, hideActivityDecisionIcon: { opacity: 0, transform: "translate(-50%, -50%) scale(0)", animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 1, transform: "translate(-50%, -50%) scale(0.7)" }, "100%": { opacity: 0, transform: "translate(-50%, -50%) scale(0)" } }] }, summaryOffset: { flex: 1, position: "relative", start: -35 }, resultsContainer: { marginTop: e.spaces.space12 }, xPostsScrollViewContentContainer: { paddingHorizontal: xe + ke + e.spacesPx.space8 }, xPostsSeeMoreButton: { marginStart: xe + ke + e.spacesPx.space8 } })),
                Te = n.memo(Ee);
            function Ze({ deepsearchSummaryAccumulator: e, handleStepLayout: t, onCancelAutoScroll: a, onRestartAutoScroll: s, scrollViewRef: i, style: l }) {
                const { isPastSummary: c, steps: m } = e,
                    p = (0, g.hC)("responsive_web_grok_animated_text_enabled") && !c,
                    u = n.useMemo(() => {
                        const e = [];
                        for (let t = 0; t < 3 * m.length; t += 3) e.push(t);
                        return e;
                    }, [m]);
                return n.createElement(
                    o.Z,
                    { style: [Ie.container, l] },
                    n.createElement(d.Z, { size: "space8" }),
                    n.createElement(
                        K,
                        { gradientColor: r.default.theme.colors.gray0, onCancelAutoScroll: a, onRestartAutoScroll: s, scrollViewContentContainerStyle: Ie.scrollViewContentContainerStyle, scrollViewRef: i, stickyHeaderIndices: u },
                        m.flatMap((e, a) => [n.createElement(o.Z, { key: `${e.id}-header`, style: [Ie.headerContainer, { zIndex: a + 1 }] }, n.createElement(z.ZP, { style: Ie.header, weight: "bold" }, e.header)), n.createElement(Te, { handleStepLayout: t, isAnimated: p, key: `${e.id}-step`, step: e }), n.createElement(d.Z, { key: `${e.id}-spacer`, size: "space20" })]),
                        n.createElement(d.Z, { size: "space48" }),
                    ),
                );
            }
            const Ie = r.default.create((e) => ({ container: { flex: 1 }, scrollViewContentContainerStyle: { display: "flex", flexDirection: "column" }, headerContainer: { paddingHorizontal: e.spacesPx.space20, backgroundColor: e.colors.gray0, paddingVertical: e.spaces.space12, opacity: 1, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, header: {} })),
                De = "DeepSearch",
                Pe = "DeeperSearch",
                Re = i().b1ac6016,
                ze = i().f766feca;
            function Ae(e, t, a) {
                return t && e ? (a ? ze : Re) : a ? Pe : De;
            }
            function _e({ completedTimestamp: e, deepSearchSummaryAccumulator: t, fromTimestamp: a, isLoading: s }) {
                const i = (0, c.z)(),
                    m = n.useRef(null),
                    d = n.useRef(null),
                    p = n.useRef({}),
                    [u, y] = n.useState(!1),
                    [f, g] = n.useState(!1),
                    [h, b] = n.useState(null),
                    [C, w] = n.useState(!1),
                    [S, E] = n.useState(!1),
                    { accumulatedTrace: x, deepsearchArgs: k, isPastSummary: v, state: T, steps: Z, traceEnabled: I } = t,
                    D = "COMPLETED" === T,
                    P = "ABORTED" === T,
                    R = !!k && "deeper" === k.mode;
                (0, l.q)(() => {
                    const e = "search-card-sub-step";
                    if (document.getElementById(e)) return;
                    const t = document.createElement("style");
                    t.setAttribute("id", e), (t.textContent = `\n      .search-card-sub-step-markdown-text {\n        flex: 1;\n      }\n\n      .search-card-sub-step-markdown-text li {\n        margin-top: 0px !important;\n        padding-left: 5px !important;\n      }\n\n      .search-card-sub-step-markdown-text ul {\n        margin-bottom: 0px !important;\n      }\n\n      .search-card-sub-step-markdown-text span {\n        font-size: ${r.default.theme.fontSizes.subtext2} !important;\n        color: ${r.default.theme.colors.gray900} !important;\n        line-height: 24px;\n      }\n\n      .search-card-trace-preview-markdown-text span {\n        font-size: ${r.default.theme.fontSizes.subtext2} !important;\n        line-height: 24px;\n      }\n\n      .search-card-sub-step-markdown-text a {\n        text-decoration: underline;\n        color: ${r.default.theme.colors.gray900} !important;\n      }\n    `);
                    const a = document.head;
                    return (
                        a && a.appendChild(t),
                        () => {
                            const t = document.getElementById(e);
                            t && t.remove();
                        }
                    );
                });
                const z = n.useRef(null);
                n.useEffect(() => {
                    const e = () => {
                        d.current && !f && d.current.scrollToEnd({ animated: !0 }), m.current && !u && m.current.scrollToEnd({ animated: !0 });
                    };
                    return v || (z.current = window.setInterval(e, 1e3)), () => window.clearInterval(z.current);
                }, [u, f, v]),
                    n.useEffect(() => {
                        D && !v && (d.current && !f && d.current.scrollToEnd({ animated: !0 }), m.current && !u && m.current.scrollToEnd({ animated: !0 }), window.clearInterval(z.current));
                    }, [D, f, u, v]);
                const A = n.useCallback((e) => {
                        d.current && d.current.scrollTo({ y: e, animated: !0 });
                    }, []),
                    _ = n.useCallback(
                        (e) => {
                            if ((b(e), void 0 !== p.current[e])) {
                                const t = 40;
                                A(Math.max(p.current[e] - t, 0));
                            }
                            i.scribe({ component: "grok-deepsearch-header-click", action: "click", element: Z.find((t) => t.id === e)?.header || "" });
                        },
                        [A, i, Z],
                    ),
                    B = n.useMemo(() => Z.map((e) => ({ id: e.id, label: e.header, state: e.state, isCompleteHeader: e.isCompleteHeader })), [Z]);
                return n.createElement(
                    o.Z,
                    { style: [Be.container, S ? Be.expandedContainer : void 0] },
                    n.createElement(oe, {
                        aborted: P,
                        activeStepId: h,
                        completed: D,
                        completedTimestamp: e,
                        expanded: S,
                        finalAnswerStreamCompleted: !1 === s,
                        fromTimestamp: a,
                        headers: B,
                        isPast: v,
                        numSources: t.getNumSources(),
                        onCancelAutoScroll: () => {
                            y(!0);
                        },
                        onOpenTrace: () => w(!0),
                        onRestartAutoScroll: () => {
                            y(!1);
                        },
                        onStepClick: _,
                        rawTraceEnabled: I,
                        scrollViewRef: m,
                        setExpanded: E,
                        style: Be.leftPanel,
                        title: Ae(D, !1, R),
                    }),
                    n.createElement(Ze, {
                        deepsearchSummaryAccumulator: t,
                        handleStepLayout: (e) => (t) => {
                            if (e) {
                                const a = t.nativeEvent.layout;
                                p.current[e] = a.y;
                            }
                        },
                        onCancelAutoScroll: () => {
                            g(!0);
                        },
                        onRestartAutoScroll: () => {
                            g(!1);
                        },
                        scrollViewRef: d,
                        style: Be.rightPanel,
                    }),
                    C &&
                        n.createElement(he, {
                            completed: D,
                            isPastSummary: v,
                            onDismissed: () => {
                                w(!1), i.scribe({ element: "grok-deepsearch-close-trace", action: "click" });
                            },
                            trace: x,
                        }),
                    n.createElement(ce.Z, { completedTimestamp: e, deepSearchSummaryAccumulator: t, fromTimestamp: a }),
                    n.createElement(ie, { deepSearchSummaryAccumulator: t }),
                );
            }
            const Be = r.default.create((e) => ({ container: { marginBottom: e.spaces.space16, opacity: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], overflow: "hidden", borderWidth: 1, borderStyle: "solid", borderColor: e.colors.gray300, borderRadius: e.spaces.space24, marginHorizontal: e.spaces.space16, display: "flex", flexDirection: "row", height: 400, backgroundColor: e.colors.gray0, transition: "all 0.2s ease", start: 0 }, expandedContainer: { height: 500, width: "110%", start: -40 }, leftPanel: { width: 200 }, rightPanel: { flex: 1 } }));
        },
        311826: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(202784),
                o = a(107267),
                r = a(725516);
            function s({ completedTimestamp: e, deepSearchSummaryAccumulator: t, fromTimestamp: a }) {
                const s = (0, r.z)(),
                    i = (0, o.useLocation)(),
                    { state: l } = t,
                    c = "STARTED" === l,
                    m = "COMPLETED" === l;
                return (
                    n.useEffect(() => {
                        const e = () => {
                            "hidden" === document.visibilityState ? c && a && s.scribe({ component: "grok-deepsearch-in-progress-visibility", action: "hide", data: { event_info: JSON.stringify({ to: "off-app" }), duration_ms: Date.now() - a } }) : "visible" === document.visibilityState && c && s.scribe({ component: "grok-deepsearch-in-progress-visibility", action: "show", data: { event_info: JSON.stringify({ from: "off-app" }) } });
                        };
                        return (
                            document.addEventListener("visibilitychange", e),
                            () => {
                                document.removeEventListener("visibilitychange", e);
                            }
                        );
                    }, [c, s, a, e]),
                    n.useEffect(
                        () => (
                            c ? s.scribe({ component: "grok-deepsearch-in-progress-visibility", action: "show", data: { event_info: JSON.stringify({ from: "in-app" }) } }) : m && s.scribe({ component: "grok-deepsearch-completed", action: "view" }),
                            () => {
                                c && a && s.scribe({ component: "grok-deepsearch-in-progress-visibility", action: "hide", data: { event_info: JSON.stringify({ to: "in-app" }), duration_ms: Date.now() - a } });
                            }
                        ),
                        [i],
                    ),
                    null
                );
            }
        },
        868489: (e, t, a) => {
            a.d(t, { Z: () => f });
            a(543673), a(240753), a(128399);
            var n = a(202784),
                o = a(325686),
                r = a(992942),
                s = a(530732),
                i = a(731708),
                l = a(392237),
                c = a(725516),
                m = a(916559),
                d = a(879221);
            function p({ isAnimated: e, style: t, webResults: a }) {
                const l = (0, c.z)(),
                    [p, y] = n.useState(null),
                    [f, g] = n.useState(!1),
                    h = n.useCallback((e) => {
                        y(e);
                    }, []);
                return n.createElement(
                    o.Z,
                    { style: [u.container, t] },
                    n.createElement(
                        o.Z,
                        { style: u.results },
                        a.slice(0, 5).map((t, a) =>
                            n.createElement(
                                o.Z,
                                { key: t.url, style: [u.webResultContainer, e ? [u.animatedWebResultContainer, { animationDelay: 0.1 * a + 0.5 + "s" }] : void 0] },
                                t.favicon_base64 ? n.createElement(r.Z, { source: { uri: t.favicon_base64 }, style: u.favicon }) : null,
                                t.title &&
                                    n.createElement(
                                        s.Z,
                                        {
                                            interactiveStyles: u.interactiveWebResultContainer,
                                            onClick: () => {
                                                h(t), l.scribe({ element: "grok-deepsearch-web-results", action: "click", data: { event_info: t.url } });
                                            },
                                            style: u.titleContainer,
                                        },
                                        ({ isHovered: e }) => n.createElement(i.ZP, { numberOfLines: 1, style: [u.title, e ? u.hoveredTitle : void 0] }, t.title),
                                    ),
                                n.createElement(o.Z, { style: u.urlContainer }, n.createElement(i.ZP, { numberOfLines: 1, style: u.url }, new URL(t.url).hostname)),
                            ),
                        ),
                        a.length > 5 &&
                            n.createElement(d.Z, {
                                count: a.length - 5,
                                onClick: () => {
                                    g(!0), l.scribe({ element: "grok-deepsearch-web-results", action: "click", data: { event_info: "see-all" } });
                                },
                            }),
                    ),
                    p ? n.createElement(m.E, { onDrawerDismiss: () => y(null), webResults: [p] }) : null,
                    f ? n.createElement(m.E, { onDrawerDismiss: () => g(!1), paginationOptions: { numResultsPerPage: 25 }, webResults: a }) : null,
                );
            }
            const u = l.default.create((e) => ({ container: { display: "flex", flex: 1, opacity: 1, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, results: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, interactiveWebResultContainer: { backgroundColor: "transparent" }, webResultContainer: { display: "flex", flexDirection: "row", alignItems: "center", maxWidth: "100%", gap: e.spaces.space8, borderBottomWidth: 1, borderBottomColor: "transparent", borderBottomStyle: "solid", transition: "border-bottom-color 0.1s ease" }, animatedWebResultContainer: { animationDuration: "0.2s", animationKeyframes: [{ "0%": { backgroundColor: e.colors.gray50 }, "50%": { backgroundColor: e.colors.gray100 }, "100%": { backgroundColor: e.colors.gray50 } }] }, favicon: { width: e.spaces.space12, height: e.spaces.space12, borderRadii: e.borderRadii.medium }, titleContainer: { maxWidth: "100%", textOverflow: "ellipsis", overflow: "hidden", flexGrow: 0, flexShrink: 1 }, title: { fontSize: e.fontSizes.subtext2, color: e.colors.gray900, cursor: "pointer" }, hoveredTitle: { textDecorationLine: "underline" }, urlContainer: {}, url: { fontSize: e.fontSizes.subtext2, color: e.colors.gray700 } })),
                y = (e, t) => e.webResults.length === t.webResults.length && e.style === t.style && e.isAnimated === t.isAnimated,
                f = n.memo(p, y);
        },
        5323: (e, t, a) => {
            a.d(t, { Z: () => v });
            var n = a(202784),
                o = a(214997),
                r = a(325686),
                s = a(721266),
                i = a(392237),
                l = a(725516),
                c = a(520595),
                m = a(530732),
                d = a(823161),
                p = a(366635),
                u = a(966886),
                y = a(650028),
                f = a(451051),
                g = a(103737),
                h = a(125363),
                b = a(836255);
            function C({ onClick: e, style: t, xPostId: a }) {
                const o = n.useMemo(() => b.Z.createHydratorForTweet(a || ""), [a]),
                    s = (0, h.v9)(o);
                if (!s) return null;
                const { created_at: i, text: l, user: c } = s;
                return n.createElement(m.Z, { interactiveStyles: w.interactiveContainer, onClick: e }, ({ isHovered: a }) =>
                    n.createElement(
                        r.Z,
                        { style: [w.container, a ? w.hoveredContainer : void 0, t] },
                        n.createElement(r.Z, { style: w.headerContainer }, n.createElement(r.Z, { style: w.nameContainer }, n.createElement(d.default, { "aria-label": c.name, borderColor: "gray700", borderWidth: "small", screenName: c.screen_name, size: "medium", uri: c.profile_image_url_https }), n.createElement(p.Z, { affiliateBadgeInfo: c.highlightedLabel, isBlueVerified: c.is_blue_verified, isVerified: c.verified, name: c.name, nameSize: "subtext2", screenName: c.screen_name, screenNameSize: "subtext3", screenNameStyle: w.screenName, screenNameSuffixContainerStyle: { marginStart: 0 }, style: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, verifiedType: c.verified_type, withHoverCard: !0, withStackedLayout: !0 })), n.createElement(u.Z, { humanReadable: !1, onPress: e, style: w.timestamp, timestamp: i })),
                        s.in_reply_to_screen_name && n.createElement(y.ZP, { displayTextRange: s.display_text_range, inReplyToName: s.in_reply_to_name, inReplyToScreenName: s.in_reply_to_screen_name, inReplyToUserIdStr: s.in_reply_to_user_id_str, linkType: y.ZP.ReplyContextLinkTypes.none, size: "subtext2", tweetPermalink: s.permalink }),
                        n.createElement(f.Z, { displayTextRange: s.display_text_range, entities: s.entities, isCondensed: !0, numberOfLines: 3, style: w.tweetText, text: l }),
                        !l &&
                            (s.extended_entities?.media ?? []).map((e) => {
                                const t = { ...e, ext_alt_text: void 0 };
                                return n.createElement(g.Z, { displayMediaTags: !1, hasSensitiveMedia: s.possibly_sensitive, isCondensed: !0, key: `media_${s.id_str}_${e.id_str}`, mediaContentStyles: w.media, mediaDetails: [t], mediaVisibilityResults: s.mediaVisibilityResults, preventPlayback: !0, shouldShowAltLabelAlways: !1, showAltTranslation: !1, showBorder: !1, singleImageMaxAspectRatio: 2, singleImageMinAspectRatio: 2, tweetId: s.id_str, videoAspectRatio: 2, videoOptions: { displayOptions: { badgeConfiguration: { hideDataSize: !0, hideViewCount: !0, hideDuration: !0 } }, hidePreviewPlayButton: !0 }, withCenterCrop: !0, withMediaTagsIcon: !1 });
                            }),
                    ),
                );
            }
            const w = i.default.create((e) => ({ interactiveContainer: { backgroundColor: "transparent", height: "100%", overflow: "hidden" }, container: { borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray50, padding: e.spaces.space12, textOverflow: "ellipsis", cursor: "pointer", transition: "background-color 0.2s ease", display: "flex", flexDirection: "column", gap: e.spaces.space8, width: 250, height: "100%" }, hoveredContainer: { backgroundColor: e.colors.gray100 }, headerContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space8, textOverflow: "ellipsis", overflow: "hidden" }, nameContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, textOverflow: "ellipsis" }, screenName: { color: e.colors.gray700 }, timestamp: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, textOverflow: "ellipsis", position: "relative", top: 3 }, tweetText: { fontSize: e.fontSizes.subtext2, color: e.colors.gray900 }, media: {} }));
            var S = a(879221);
            function E({ isAnimated: e, scrollViewContentContainerStyle: t, seeMoreButtonStyle: a, style: i, xPostIds: m }) {
                const d = (0, l.z)(),
                    [p, u] = n.useState(null),
                    [y, f] = n.useState(!1),
                    g = n.useCallback((e) => {
                        u(e);
                    }, []),
                    h = n.useCallback(() => {
                        f(!0);
                    }, []),
                    b = n.useCallback(() => {
                        f(!1);
                    }, []);
                return n.createElement(
                    r.Z,
                    { style: [x.container, i] },
                    n.createElement(
                        o.Z,
                        { contentContainerStyle: [x.scrollViewContentContainer, t], horizontal: !0, showsHorizontalScrollIndicator: !1, style: x.scrollView },
                        m.slice(0, 5).map((e, t) =>
                            n.createElement(C, {
                                key: e,
                                onClick: () => {
                                    g(e), d.scribe({ element: "grok-deepsearch-x-post", action: "click", data: { event_info: e } });
                                },
                                xPostId: e,
                            }),
                        ),
                        n.createElement(s.Z, { size: "space12" }),
                    ),
                    p ? n.createElement(c.a, { onDrawerDismiss: () => u(null), postIds: [p] }) : null,
                    y ? n.createElement(c.a, { onDrawerDismiss: b, paginationOptions: { numResultsPerPage: 15 }, postIds: m }) : null,
                    m.length > 5 &&
                        n.createElement(S.Z, {
                            count: m.length - 5,
                            onClick: () => {
                                h(), d.scribe({ element: "grok-deepsearch-x-post", action: "click", data: { event_info: "see-all" } });
                            },
                            style: a,
                        }),
                );
            }
            const x = i.default.create((e) => ({ container: { flex: 1, opacity: 1, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, scrollView: { width: "100%", flex: 1 }, scrollViewContentContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12, paddingBottom: e.spaces.space8, flex: 1 } })),
                k = (e, t) => e.xPostIds.length === t.xPostIds.length && e.style === t.style && e.isAnimated === t.isAnimated,
                v = n.memo(E, k);
        },
        879221: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(202784),
                o = a(154003),
                r = a(731708),
                s = a(392237),
                i = a(674132);
            const l = a.n(i)().aa7c96bb;
            function c({ count: e, onClick: t, style: a }) {
                return n.createElement(o.ZP, { backgroundColor: "transparent", borderColor: "transparent", onPress: t, size: "smallCompact", style: [m.seeAllButton, a] }, n.createElement(r.ZP, { style: m.seeAllText, weight: "normal" }, l({ numResults: e })));
            }
            const m = s.default.create((e) => ({ seeAllButton: { width: "max-content" }, seeAllText: { fontSize: e.fontSizes.subtext2, color: e.colors.gray700 } }));
        },
        961609: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(202784),
                o = a(731708),
                r = a(392237),
                s = a(674132),
                i = a.n(s);
            const l = i().bf780b13,
                c = i().bb7e2143;
            function m({ aborted: e, completed: t, completedTimestamp: a, fromTimestamp: r, style: s, weight: i }) {
                const [m, p] = n.useState(() => (r && a && 0 !== a ? Math.max(0, Math.floor((a - r) / 1e3)) : r ? Math.max(0, Math.floor((Date.now() - r) / 1e3)) : 0)),
                    u = n.useMemo(() => (null === r ? Date.now() : r), [r]),
                    y = n.useRef(null);
                return (
                    n.useEffect(() => {
                        if (!t && !e) {
                            if (u) {
                                const e = () => {
                                    const e = Math.max(0, Math.floor((Date.now() - u) / 1e3));
                                    p(e);
                                };
                                y.current = window.setInterval(e, 1e3);
                            }
                            return () => window.clearInterval(y.current);
                        }
                        window.clearInterval(y.current);
                    }, [u, t, e]),
                    n.createElement(o.ZP, { style: [d.elapsedSeconds, s], weight: i }, m < 60 ? c({ seconds: m }) : l({ minutes: Math.floor(m / 60), seconds: m % 60 }))
                );
            }
            const d = r.default.create((e) => ({ elapsedSeconds: { color: e.colors.gray700, fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 } })),
                p = (e, t) => e.completed === t.completed && e.aborted === t.aborted && e.completedTimestamp === t.completedTimestamp && e.fromTimestamp === t.fromTimestamp,
                u = n.memo(m, p);
        },
        848957: (e, t, a) => {
            a.d(t, { Z: () => E });
            var n = a(202784),
                o = a(706307),
                r = a(325686),
                s = a(731708),
                i = a(392237),
                l = a(674132),
                c = a.n(l),
                m = a(725405),
                d = a(125363),
                p = a(623494),
                u = a(721270),
                y = a(819102),
                f = a(228283);
            const g = c().b52484b6,
                h = c().f4146dda,
                b = c().a2c2be32,
                C = c().g01599b6,
                w = c().e02694e0,
                S = c().h6867fcc;
            function E({ conversationId: e, grokModule: t, isLoading: a, message1: i, message2: l }) {
                const c = (0, y.u)(i?.message ?? "", !1),
                    E = (0, y.u)(l?.message ?? "", !1),
                    k = (0, d.I0)(),
                    v = (0, m.Z)(),
                    T = (m, d) =>
                        n.createElement(
                            r.Z,
                            { style: x.messageContainer },
                            n.createElement(r.Z, { style: x.contentContainer }, n.createElement(s.ZP, { style: x.responseLabel }, 0 === d ? C : w), ((e) => n.createElement(n.Fragment, null, n.createElement(r.Z, { style: x.searchButtonsContainer }, n.createElement(f.R, { isAnimated: !0, postIds: e?.postIds ?? [], webResults: e?.webResults ?? [] })), a && "" === e?.message && ((null != e?.webResults && e?.webResults.length > 0) || (null != e?.postIds && e?.postIds.length > 0)) && n.createElement(r.Z, { style: x.searchingLabelContainer }, n.createElement(s.ZP, { style: x.searchingLabel }, n.createElement("span", null, g)))))(m), n.createElement(r.Z, { style: x.labelSpacer }), n.createElement(u.default, { citations: [...(m.webResults ?? []), ...(m.citedWebResults ?? [])], disableLinks: !1, isAnimated: !1, markdownText: 0 === d ? c : E, style: x.markdownText })),
                            !a &&
                                n.createElement(
                                    o.Z,
                                    {
                                        onPress: () => {
                                            (0, p.G$)(v, { conversationId: e, preferredMessage: m, nonPreferredMessage: 0 === d ? l : i, preferredMessageIndex: d, nonPreferredMessageIndex: 0 === d ? 1 : 0 }), k(t.setPreferredResponse(d)), k(t.setUsingExperiment(!1));
                                        },
                                        style: x.preferButton,
                                    },
                                    n.createElement(s.ZP, { style: x.preferButtonText }, S),
                                ),
                        );
                return n.createElement(r.Z, { style: x.container }, n.createElement(s.ZP, { style: x.questionBold }, h), n.createElement(s.ZP, { style: x.questionRegular }, b), n.createElement(r.Z, { style: x.sideBySideContainer }, T(i, 0), n.createElement(r.Z, { style: x.gap }), T(l, 1)));
            }
            const x = i.default.create((e) => ({
                container: { width: "80%", alignItems: "center", marginBottom: e.spaces.space48 },
                sideBySideContainer: { flexDirection: "row", justifyContent: "space-between", width: "100%", padding: e.spaces.space16 },
                messageContainer: { flex: 1, backgroundColor: e.colors.gray0, padding: e.spaces.space16, borderRadius: e.borderRadii.medium, flexDirection: "column", justifyContent: "space-between" },
                questionBold: { fontWeight: "bold", marginBottom: e.spaces.space4 },
                questionRegular: { marginBottom: e.spaces.space8 },
                searchButtonsContainer: { paddingHorizontal: e.spaces.space4, marginBottom: e.spaces.space4 },
                buttonContainer: { alignItems: "center", justifyContent: "center" },
                searchingLabelContainer: { position: "relative", width: "fit-content", animationDuration: "0.3s", opacity: 1, animationTimingFunction: "linear", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] },
                searchingLabel: { color: e.colors.transparent, backgroundImage: `linear-gradient(to right, ${e.colors.gray600} 0%, ${e.colors.gray900} 20%, ${e.colors.gray500} 40%, ${e.colors.gray600} 100%)`, opacity: 1, display: "inline-block", backgroundClip: "text", animationDuration: "0.7s", backgroundRepeat: "no-repeat", animationIterationCount: "infinite", animationTimingFunction: "linear", animationKeyframes: [{ "0%": { backgroundPositionX: "-2em" }, "100%": { backgroundPositionX: "7em" } }] },
                preferButton: { marginTop: e.spaces.space24, padding: e.spaces.space8, backgroundColor: e.colors.gray100, borderRadius: 20, alignItems: "center", borderColor: e.colors.gray600, borderWidth: 1 },
                contentContainer: { flex: 1 },
                hoverButton: { backgroundColor: e.colors.gray50 },
                preferButtonText: { color: e.colors.brandColor, fontWeight: "semi-bold" },
                gap: { width: 20 },
                responseLabel: { fontWeight: "bold", marginBottom: e.spaces.space4, textAlign: "start", color: e.colors.gray600 },
                labelSpacer: { height: e.spaces.space8 },
                markdownText: { textAlign: "start" },
            }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-0f78f5a6.a7d45f7a.js.map

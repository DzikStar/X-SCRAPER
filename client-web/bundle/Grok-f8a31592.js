"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-f8a31592"],
    {
        94693: (e, t, a) => {
            a.d(t, { Z: () => U });
            var n = a(202784),
                o = a(744610),
                s = a(325686),
                r = a(721266),
                i = a(154003),
                l = a(392237),
                c = a(111677),
                m = a.n(c),
                d = a(647174),
                p = a(841972),
                u = a(19197),
                y = a(725516),
                f = a(731708),
                g = a(664345),
                h = a(970205),
                b = a(235493);
            const C = m().ee000b0d;
            function w({ aborted: e, completed: t, completedTimestamp: a, fromTimestamp: o, isPast: r, numSources: i, title: l }) {
                const c = 0 !== o;
                return n.createElement(s.Z, { style: S.container }, n.createElement(s.Z, { style: S.iconContainer }, t || e ? n.createElement(g.default, { style: S.searchIcon }) : n.createElement(h.Z, { style: S.loadingIcon })), n.createElement(s.Z, { style: S.headerContainer }, n.createElement(f.ZP, { style: S.header, weight: "medium" }, l), n.createElement(s.Z, { style: S.subHeaderContainer }, r || !c ? n.createElement(n.Fragment, null, n.createElement(f.ZP, { style: S.sources }, C({ numSources: i }))) : n.createElement(n.Fragment, null, n.createElement(b.Z, { aborted: e, completed: t, completedTimestamp: a, fromTimestamp: o }), void 0 !== i && i > 0 && n.createElement(n.Fragment, null, n.createElement(s.Z, { style: S.dot }), n.createElement(f.ZP, { style: S.sources }, C({ numSources: i })))))));
            }
            const S = l.default.create((e) => ({ container: { display: "flex", flexDirection: "row", gap: e.spaces.space8 }, iconContainer: { width: e.spaces.space20, display: "flex", flexDirection: "column", alignItems: "center" }, searchIcon: { position: "relative", width: e.spaces.space16, height: e.spaces.space16, top: 2 }, loadingIcon: { position: "relative", top: -1 }, headerContainer: { display: "flex", flexDirection: "column" }, header: {}, subHeaderContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, dot: { width: e.spaces.space4, height: e.spaces.space4, borderRadius: e.spaces.space4, backgroundColor: e.colors.gray700 }, sources: { color: e.colors.gray700, fontSize: e.fontSizes.subtext2 } })),
                x = (e, t) => e.completed === t.completed && e.aborted === t.aborted && e.numSources === t.numSources && e.title === t.title && e.fromTimestamp === t.fromTimestamp && e.completedTimestamp === t.completedTimestamp,
                E = n.memo(w, x);
            var v = a(630961),
                T = a(25825),
                k = a(530732),
                Z = a(293723),
                P = a(227674),
                I = a(397159);
            const D = m().c2745fa4;
            function R({ active: e, header: t, onStepClick: a, style: o }) {
                const r = t.state === I.Fi.IN_PROGRESS,
                    i = t.state === I.Fi.COMPLETED,
                    c = t.state === I.Fi.FAILED;
                return n.createElement(
                    k.Z,
                    {
                        interactiveStyles: z.stepInteractiveStyle,
                        onClick: () => {
                            c || a(t.id);
                        },
                        style: [z.step, o],
                    },
                    ({ isHovered: a }) => n.createElement(n.Fragment, null, n.createElement(s.Z, { style: z.statusIconContainer }, n.createElement(T.Z, { color: l.default.theme.colors.gray900, size: "small", style: [z.statusIcon, r ? z.statusIconVisible : void 0, r ? void 0 : z.statusIconHide] }), n.createElement(Z.default, { style: [z.statusIcon, z.completeFailedIcon, i ? z.completeFailedIconVisible : void 0, t.isCompleteHeader ? z.isSpecialCompleteIcon : void 0] }), n.createElement(P.default, { style: [z.statusIcon, z.completeFailedIcon, c ? z.completeFailedIconVisible : void 0] })), c ? n.createElement(f.ZP, { style: z.title }, D) : n.createElement(f.ZP, { style: [z.title, i ? z.completedTitle : void 0, a ? z.hoveredTitle : void 0, e ? z.hoveredTitle : void 0] }, t.label)),
                );
            }
            const z = l.default.create((e) => ({ stepInteractiveStyle: { backgroundColor: "transparent" }, step: { display: "flex", flexDirection: "row", gap: e.spaces.space8 }, statusIconContainer: { position: "relative", width: e.spaces.space20, height: e.spaces.space20, backgroundColor: e.colors.gray50 }, statusIcon: { position: "absolute", top: "50%", start: "50%", transform: "translate(-50%, -50%)", opacity: 0, width: "100%", height: "100%" }, statusIconVisible: { opacity: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, statusIconHide: { opacity: 0, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 1 }, "100%": { opacity: 0 } }] }, completeFailedIcon: { color: e.colors.gray900, width: e.spaces.space20, height: e.spaces.space20 }, completeFailedIconVisible: { opacity: 1, transform: "translate(-50%, -50%) scale(1)", animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translate(-50%, -50%) scale(0.8)" }, "50%": { opacity: 0.8, transform: "translate(-50%, -50%) scale(1.2)" }, "75%": { opacity: 0.9, transform: "translate(-50%, -50%) scale(0.95)" }, "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" } }] }, isSpecialCompleteIcon: { color: e.colors.green500 }, title: { fontSize: e.fontSizes.subtext1, color: e.colors.gray700, transition: "color 0.2s ease" }, completedTitle: {}, hoveredTitle: { color: e.colors.brandColor } }));
            var A = a(557707),
                B = a(165243),
                M = a(74514),
                V = a(405303),
                _ = a(125363),
                L = a(654917);
            const H = m().e258000e,
                $ = m().d591a772,
                O = m().bc49b728,
                N = m().d8aadeba,
                W = m().db832e38,
                F = m().a910cac6,
                G = m().cbdddb0a;
            function K({ analyticsMetricPrefix: e = "message-steps", completed: t }) {
                const a = (0, y.z)(),
                    o = (0, L.uf)(),
                    r = (0, _.v9)(o.selectLastHumanMessage),
                    [l, c] = n.useState(!1),
                    [m, d] = n.useState(!1),
                    [p, u] = n.useState(!1),
                    [f, g] = n.useState(!1),
                    [h, b] = n.useState(!1);
                n.useEffect(() => {
                    t && h && "granted" === Notification.permission && (b(!1), new Notification(G, { body: r?.message.message || "" }));
                }, [t, h, r]);
                return n.createElement(
                    s.Z,
                    null,
                    !t &&
                        ("denied" === Notification.permission
                            ? n.createElement(i.ZP, {
                                  borderColor: "transparent",
                                  color: "gray700",
                                  hoverLabel: { label: $ },
                                  icon: n.createElement(B.default, { style: j.icon }),
                                  onClick: () => {
                                      u(!0), a.scribe({ element: `${e}-notification-denied`, action: "click" });
                                  },
                                  size: "small",
                                  style: j.button,
                              })
                            : h
                              ? n.createElement(i.ZP, {
                                    borderColor: "transparent",
                                    color: "gray700",
                                    hoverLabel: { label: H },
                                    icon: n.createElement(M.default, { style: j.icon }),
                                    onClick: () => {
                                        b(!1), d(!0), a.scribe({ element: `${e}-notification-off`, action: "click" });
                                    },
                                    size: "small",
                                    style: j.button,
                                })
                              : n.createElement(i.ZP, {
                                    borderColor: "transparent",
                                    color: "gray700",
                                    hoverLabel: { label: H },
                                    icon: n.createElement(V.default, { style: j.icon }),
                                    onClick: () => {
                                        (async () => {
                                            "granted" === Notification.permission ? (b(!0), c(!0)) : "default" === Notification.permission && ("granted" === (await Notification.requestPermission()) ? (b(!0), c(!0)) : (b(!1), g(!0)));
                                        })(),
                                            a.scribe({ element: `${e}-notification-on`, action: "click" });
                                    },
                                    size: "small",
                                    style: j.button,
                                })),
                    l && n.createElement(A.ZP, { autoDismissDelay: 2e3, onClose: () => c(!1), style: j.toast, text: O, withAutoDismiss: !0, withClearButton: !0 }),
                    m && n.createElement(A.ZP, { autoDismissDelay: 2e3, onClose: () => d(!1), style: j.toast, text: N, withAutoDismiss: !0, withClearButton: !0 }),
                    p && n.createElement(A.ZP, { autoDismissDelay: 2e3, onClose: () => u(!1), style: j.toast, text: W, withAutoDismiss: !0, withClearButton: !0 }),
                    f && n.createElement(A.ZP, { autoDismissDelay: 2e3, onClose: () => g(!1), style: j.toast, text: F, withAutoDismiss: !0, withClearButton: !0 }),
                );
            }
            const j = l.default.create((e) => ({ button: { borderRadius: e.borderRadii.xLarge }, icon: {}, toast: { opacity: 1, transform: [{ translateY: 0 }], animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0, transform: [{ translateY: 5 }] }, "100%": { opacity: 1, transform: [{ translateY: 0 }] } }] } })),
                X = m().j7d0e836,
                Y = m().eaf55eb4;
            function q({ aborted: e, activeStepId: t, analyticsMetricPrefix: a = "message-steps", completed: l, completedTimestamp: c, expanded: m, finalAnswerStreamCompleted: f, fromTimestamp: g, headers: h, hideHeader: b, isPast: C, numSources: w, onCancelAutoScroll: S, onOpenTrace: x, onRestartAutoScroll: T, onStepClick: k, rawTraceEnabled: Z, scrollViewRef: P, setExpanded: I, style: D, title: z }) {
                const A = (0, y.z)(),
                    B = n.useRef(new o.Z.Value(0)).current,
                    M = n.useMemo(() => h.slice(void 0, -1), [h]),
                    V = n.useMemo(() => h[h.length - 1], [h]),
                    _ = n.useCallback(
                        (e) => {
                            o.Z.spring(B, { toValue: e.nativeEvent.layout.height, useNativeDriver: !1, speed: 5 }).start();
                        },
                        [B],
                    );
                return n.createElement(
                    s.Z,
                    { style: [J.container, D] },
                    !b && n.createElement(E, { aborted: e, completed: l, completedTimestamp: c, fromTimestamp: g, isPast: C, numSources: w, title: z || "" }),
                    n.createElement(
                        v.Z,
                        { gradientColor: "transparent", onCancelAutoScroll: S, onRestartAutoScroll: T, scrollViewContentContainerStyle: J.scrollViewContentContainerStyle, scrollViewRef: P },
                        n.createElement(
                            s.Z,
                            { onLayout: _, style: J.headerSteps },
                            n.createElement(o.Z.View, { style: [J.lineContainer, { height: B }] }, n.createElement(s.Z, { style: J.line })),
                            M.map((e, a) => n.createElement(R, { active: t === e.id, header: e, key: e.id, onStepClick: k, style: J.stepHeaderStatusContainer })),
                        ),
                        V && n.createElement(R, { header: V, key: V.id, onStepClick: k, style: J.stepHeaderStatusContainer }),
                        n.createElement(r.Z, { size: "space8" }),
                    ),
                    n.createElement(
                        s.Z,
                        { style: J.buttonsContainer },
                        n.createElement(i.ZP, {
                            borderColor: "transparent",
                            color: "gray700",
                            hoverLabel: { label: X },
                            icon: m ? n.createElement(d.default, { style: J.icon }) : n.createElement(p.default, { style: J.icon }),
                            onClick: () => {
                                I(!m), A.scribe({ element: `${a}-expand`, action: "click", data: { event_info: (!m).toString() } });
                            },
                            size: "small",
                            style: J.button,
                        }),
                        Z &&
                            n.createElement(i.ZP, {
                                borderColor: "transparent",
                                color: "gray700",
                                hoverLabel: { label: Y },
                                icon: n.createElement(u.default, { style: J.icon }),
                                onClick: () => {
                                    x(), A.scribe({ element: `${a}-open-trace`, action: "click" });
                                },
                                size: "small",
                                style: J.button,
                            }),
                        !C && n.createElement(K, { analyticsMetricPrefix: a, completed: l && f }),
                    ),
                );
            }
            const J = l.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space4, backgroundColor: e.colors.gray50, padding: e.spaces.space20, paddingBottom: e.spaces.space8 }, scrollViewContentContainerStyle: { paddingEnd: e.spaces.space12 }, headerSteps: { position: "relative" }, lineContainer: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: e.spaces.space20, position: "absolute", start: 0, top: 0, height: "100%", paddingTop: e.spaces.space8 }, line: { width: 2, height: "100%", backgroundColor: e.colors.gray300 }, step: { marginBottom: e.spaces.space16 }, buttonsContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, button: { borderRadius: e.borderRadii.xLarge }, icon: {}, stepHeaderStatusContainer: { paddingBottom: e.spaces.space16 } })),
                U = n.memo(q);
        },
        791278: (e, t, a) => {
            a.d(t, { Z: () => f });
            a(543673), a(240753), a(128399);
            var n = a(202784),
                o = a(325686),
                s = a(992942),
                r = a(530732),
                i = a(731708),
                l = a(392237),
                c = a(725516),
                m = a(916559),
                d = a(966488);
            function p({ analyticsMetricPrefix: e = "message-steps", isAnimated: t, style: a, webResults: l }) {
                const p = (0, c.z)(),
                    [y, f] = n.useState(null),
                    [g, h] = n.useState(!1),
                    b = n.useCallback((e) => {
                        f(e);
                    }, []);
                return n.createElement(
                    o.Z,
                    { style: [u.container, a] },
                    n.createElement(
                        o.Z,
                        { style: u.results },
                        l.slice(0, 5).map((a, l) =>
                            n.createElement(
                                o.Z,
                                { key: a.url, style: [u.webResultContainer, t ? [u.animatedWebResultContainer, { animationDelay: 0.1 * l + 0.5 + "s" }] : void 0] },
                                a.favicon_base64 ? n.createElement(s.Z, { source: { uri: a.favicon_base64 }, style: u.favicon }) : null,
                                a.title &&
                                    n.createElement(
                                        r.Z,
                                        {
                                            interactiveStyles: u.interactiveWebResultContainer,
                                            onClick: () => {
                                                b(a), p.scribe({ element: `${e}-web-results`, action: "click", data: { event_info: a.url } });
                                            },
                                            style: u.titleContainer,
                                        },
                                        ({ isHovered: e }) => n.createElement(i.ZP, { numberOfLines: 1, style: [u.title, e ? u.hoveredTitle : void 0] }, a.title),
                                    ),
                                n.createElement(o.Z, { style: u.urlContainer }, n.createElement(i.ZP, { numberOfLines: 1, style: u.url }, new URL(a.url).hostname)),
                            ),
                        ),
                        l.length > 5 &&
                            n.createElement(d.Z, {
                                count: l.length - 5,
                                onClick: () => {
                                    h(!0), p.scribe({ element: `${e}-web-results`, action: "click", data: { event_info: "see-all" } });
                                },
                            }),
                    ),
                    y ? n.createElement(m.E, { onDrawerDismiss: () => f(null), webResults: [y] }) : null,
                    g ? n.createElement(m.E, { onDrawerDismiss: () => h(!1), paginationOptions: { numResultsPerPage: 25 }, webResults: l }) : null,
                );
            }
            const u = l.default.create((e) => ({ container: { display: "flex", flex: 1, opacity: 1, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, results: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, interactiveWebResultContainer: { backgroundColor: "transparent" }, webResultContainer: { display: "flex", flexDirection: "row", alignItems: "center", maxWidth: "100%", gap: e.spaces.space8, borderBottomWidth: 1, borderBottomColor: "transparent", borderBottomStyle: "solid", transition: "border-bottom-color 0.1s ease" }, animatedWebResultContainer: { animationDuration: "0.2s", animationKeyframes: [{ "0%": { backgroundColor: e.colors.gray50 }, "50%": { backgroundColor: e.colors.gray100 }, "100%": { backgroundColor: e.colors.gray50 } }] }, favicon: { width: e.spaces.space12, height: e.spaces.space12, borderRadii: e.borderRadii.medium }, titleContainer: { maxWidth: "100%", textOverflow: "ellipsis", overflow: "hidden", flexGrow: 0, flexShrink: 1 }, title: { fontSize: e.fontSizes.subtext2, color: e.colors.gray900, cursor: "pointer" }, hoveredTitle: { textDecorationLine: "underline" }, urlContainer: {}, url: { fontSize: e.fontSizes.subtext2, color: e.colors.gray700 } })),
                y = (e, t) => e.webResults.length === t.webResults.length && e.style === t.style && e.isAnimated === t.isAnimated,
                f = n.memo(p, y);
        },
        229177: (e, t, a) => {
            a.d(t, { Z: () => T });
            var n = a(202784),
                o = a(214997),
                s = a(325686),
                r = a(721266),
                i = a(392237),
                l = a(725516),
                c = a(520595),
                m = a(966488),
                d = a(530732),
                p = a(823161),
                u = a(366635),
                y = a(966886),
                f = a(650028),
                g = a(451051),
                h = a(103737),
                b = a(125363),
                C = a(836255);
            function w({ onClick: e, style: t, xPostId: a }) {
                const o = n.useMemo(() => C.Z.createHydratorForTweet(a || ""), [a]),
                    r = (0, b.v9)(o);
                if (!r) return null;
                const { created_at: i, text: l, user: c } = r;
                return n.createElement(d.Z, { interactiveStyles: S.interactiveContainer, onClick: e }, ({ isHovered: a }) =>
                    n.createElement(
                        s.Z,
                        { style: [S.container, a ? S.hoveredContainer : void 0, t] },
                        n.createElement(s.Z, { style: S.headerContainer }, n.createElement(s.Z, { style: S.nameContainer }, n.createElement(p.default, { "aria-label": c.name, borderColor: "gray700", borderWidth: "small", screenName: c.screen_name, size: "medium", uri: c.profile_image_url_https }), n.createElement(u.Z, { affiliateBadgeInfo: c.highlightedLabel, isBlueVerified: c.is_blue_verified, isVerified: c.verified, name: c.name, nameSize: "subtext2", screenName: c.screen_name, screenNameSize: "subtext3", screenNameStyle: S.screenName, screenNameSuffixContainerStyle: { marginStart: 0 }, style: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, verifiedType: c.verified_type, withHoverCard: !0, withStackedLayout: !0 })), n.createElement(y.Z, { humanReadable: !1, onPress: e, style: S.timestamp, timestamp: i })),
                        r.in_reply_to_screen_name && n.createElement(f.ZP, { displayTextRange: r.display_text_range, inReplyToName: r.in_reply_to_name, inReplyToScreenName: r.in_reply_to_screen_name, inReplyToUserIdStr: r.in_reply_to_user_id_str, linkType: f.ZP.ReplyContextLinkTypes.none, size: "subtext2", tweetPermalink: r.permalink }),
                        n.createElement(g.Z, { displayTextRange: r.display_text_range, entities: r.entities, isCondensed: !0, numberOfLines: 3, style: S.tweetText, text: l }),
                        !l &&
                            (r.extended_entities?.media ?? []).map((e) => {
                                const t = { ...e, ext_alt_text: void 0 };
                                return n.createElement(h.Z, { displayMediaTags: !1, hasSensitiveMedia: r.possibly_sensitive, isCondensed: !0, key: `media_${r.id_str}_${e.id_str}`, mediaContentStyles: S.media, mediaDetails: [t], mediaVisibilityResults: r.mediaVisibilityResults, preventPlayback: !0, shouldShowAltLabelAlways: !1, showAltTranslation: !1, showBorder: !1, singleImageMaxAspectRatio: 2, singleImageMinAspectRatio: 2, tweetId: r.id_str, videoAspectRatio: 2, videoOptions: { displayOptions: { badgeConfiguration: { hideDataSize: !0, hideViewCount: !0, hideDuration: !0 } }, hidePreviewPlayButton: !0 }, withCenterCrop: !0, withMediaTagsIcon: !1 });
                            }),
                    ),
                );
            }
            const S = i.default.create((e) => ({ interactiveContainer: { backgroundColor: "transparent", height: "100%", overflow: "hidden" }, container: { borderRadius: e.borderRadii.medium, backgroundColor: e.colors.gray50, padding: e.spaces.space12, textOverflow: "ellipsis", cursor: "pointer", transition: "background-color 0.2s ease", display: "flex", flexDirection: "column", gap: e.spaces.space8, width: 250, height: "100%" }, hoveredContainer: { backgroundColor: e.colors.gray100 }, headerContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space8, textOverflow: "ellipsis", overflow: "hidden" }, nameContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, textOverflow: "ellipsis" }, screenName: { color: e.colors.gray700 }, timestamp: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, lineHeight: e.fontSizes.subtext3, textOverflow: "ellipsis", position: "relative", top: 3 }, tweetText: { fontSize: e.fontSizes.subtext2, color: e.colors.gray900 }, media: {} }));
            function x({ analyticsMetricPrefix: e = "message-steps", isAnimated: t, scrollViewContentContainerStyle: a, seeMoreButtonStyle: i, style: d, xPostIds: p }) {
                const u = (0, l.z)(),
                    [y, f] = n.useState(null),
                    [g, h] = n.useState(!1),
                    b = n.useCallback((e) => {
                        f(e);
                    }, []),
                    C = n.useCallback(() => {
                        h(!0);
                    }, []),
                    S = n.useCallback(() => {
                        h(!1);
                    }, []);
                return n.createElement(
                    s.Z,
                    { style: [E.container, d] },
                    n.createElement(
                        o.Z,
                        { contentContainerStyle: [E.scrollViewContentContainer, a], horizontal: !0, showsHorizontalScrollIndicator: !1, style: E.scrollView },
                        p.slice(0, 5).map((t, a) =>
                            n.createElement(w, {
                                key: t,
                                onClick: () => {
                                    b(t), u.scribe({ element: `${e}-x-post`, action: "click", data: { event_info: t } });
                                },
                                xPostId: t,
                            }),
                        ),
                        n.createElement(r.Z, { size: "space12" }),
                    ),
                    y ? n.createElement(c.a, { onDrawerDismiss: () => f(null), postIds: [y] }) : null,
                    g ? n.createElement(c.a, { onDrawerDismiss: S, paginationOptions: { numResultsPerPage: 15 }, postIds: p }) : null,
                    p.length > 5 &&
                        n.createElement(m.Z, {
                            count: p.length - 5,
                            onClick: () => {
                                C(), u.scribe({ element: `${e}-x-post`, action: "click", data: { event_info: "see-all" } });
                            },
                            style: i,
                        }),
                );
            }
            const E = i.default.create((e) => ({ container: { flex: 1, opacity: 1, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, scrollView: { width: "100%", flex: 1 }, scrollViewContentContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12, paddingBottom: e.spaces.space8, flex: 1 } })),
                v = (e, t) => e.xPostIds.length === t.xPostIds.length && e.style === t.style && e.isAnimated === t.isAnimated,
                T = n.memo(x, v);
        },
        694456: (e, t, a) => {
            a.d(t, { Z: () => p });
            var n = a(202784),
                o = a(325686),
                s = a(392237),
                r = a(725516),
                i = a(988290),
                l = a(94693),
                c = a(673787),
                m = a(767075),
                d = a(39831);
            function p({ completedTimestamp: e, fromTimestamp: t, hideSidePanel: a, isLoading: s, messageStepAccumulator: p }) {
                const { isCompactLayout: y, isGrokDrawer: f } = (0, i.ZP)(),
                    g = (0, r.z)(),
                    h = n.useRef(null),
                    b = n.useRef(null),
                    C = n.useRef({}),
                    [w, S] = n.useState(!1),
                    [x, E] = n.useState(!1),
                    [v, T] = n.useState(null),
                    [k, Z] = n.useState(!1),
                    [P, I] = n.useState(!1),
                    { accumulatedTrace: D, isPastSummary: R, state: z, steps: A, traceEnabled: B } = p,
                    M = "COMPLETED" === z,
                    V = "ABORTED" === z,
                    _ = n.useRef(null);
                n.useEffect(() => {
                    const e = () => {
                        b.current && !x && b.current.scrollToEnd({ animated: !0 }), h.current && !w && h.current.scrollToEnd({ animated: !0 });
                    };
                    return R || (_.current = window.setInterval(e, 1e3)), () => window.clearInterval(_.current);
                }, [w, x, R]),
                    n.useEffect(() => {
                        M && !R && window.clearInterval(_.current);
                    }, [M, x, w, R]);
                const L = n.useCallback((e) => {
                        b.current && b.current.scrollTo({ y: e, animated: !0 });
                    }, []),
                    H = n.useCallback(
                        (e) => {
                            if ((T(e), void 0 !== C.current[e])) {
                                const t = 40;
                                L(Math.max(C.current[e] - t, 0));
                            }
                            g.scribe({ component: "message-steps-header-click", action: "click", element: A.find((t) => t.id === e)?.header || "" });
                        },
                        [L, g, A],
                    ),
                    $ = n.useMemo(() => A.map((e) => ({ id: e.id, label: e.header, state: e.state, isCompleteHeader: e.isCompleteHeader })), [A]);
                return n.createElement(
                    o.Z,
                    { style: [u.container, P ? u.expandedContainer : void 0, f ? u.drawerContainer : y ? u.mobileContainer : void 0] },
                    !a &&
                        n.createElement(l.Z, {
                            aborted: V,
                            activeStepId: v,
                            completed: M,
                            completedTimestamp: e,
                            expanded: P,
                            finalAnswerStreamCompleted: !1 === s,
                            fromTimestamp: t,
                            headers: $,
                            hideHeader: !0,
                            isPast: R,
                            numSources: p.getNumSources(),
                            onCancelAutoScroll: () => {
                                S(!0);
                            },
                            onOpenTrace: () => Z(!0),
                            onRestartAutoScroll: () => {
                                S(!1);
                            },
                            onStepClick: H,
                            rawTraceEnabled: B,
                            scrollViewRef: h,
                            setExpanded: I,
                            style: u.leftPanel,
                        }),
                    n.createElement(c.Z, {
                        handleStepLayout: (e) => (t) => {
                            if (e) {
                                const a = t.nativeEvent.layout;
                                C.current[e] = a.y;
                            }
                        },
                        messageStepAccumulator: p,
                        onCancelAutoScroll: () => {
                            E(!0);
                        },
                        onRestartAutoScroll: () => {
                            E(!1);
                        },
                        onShowTrace: () => Z(!0),
                        scrollViewRef: b,
                        style: u.rightPanel,
                    }),
                    k &&
                        n.createElement(d.Z, {
                            completed: M,
                            isPastSummary: R,
                            onDismissed: () => {
                                Z(!1), g.scribe({ element: "message-steps-close-trace", action: "click" });
                            },
                            trace: D,
                        }),
                    n.createElement(m.Z, { completedTimestamp: e, fromTimestamp: t, messageStepAccumulator: p }),
                );
            }
            const u = s.default.create((e) => ({ container: { marginBottom: e.spaces.space16, opacity: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], overflow: "hidden", borderWidth: 1, borderStyle: "solid", borderColor: e.colors.gray300, borderRadius: e.spaces.space24, marginHorizontal: e.spaces.space16, display: "flex", flexDirection: "row", height: 400, backgroundColor: e.colors.gray0, transition: "all 0.2s ease", start: 0 }, expandedContainer: { height: 500, width: "110%", start: -40 }, drawerContainer: { height: 230 }, mobileContainer: { height: 350 }, leftPanel: { width: 200 }, rightPanel: { flex: 1 } }));
        },
        673787: (e, t, a) => {
            a.d(t, { Z: () => R });
            a(136728);
            var n = a(202784),
                o = a(325686),
                s = a(392237),
                r = a(721266),
                i = a(731708),
                l = a(154003),
                c = a(111677),
                m = a.n(c),
                d = a(19197),
                p = a(187669),
                u = a(952793),
                y = a(988290),
                f = a(630961),
                g = a(25825),
                h = a(956272),
                b = a(323265),
                C = a(397159),
                w = a(20716),
                S = a(207683),
                x = a(791278),
                E = a(229177);
            function v({ analyticsMetricPrefix: e, handleStepLayout: t, isAnimated: a, isCompactLayout: r, step: i, style: l }) {
                const c = n.useCallback(
                        (e) => {
                            if (e.summary) return n.createElement(o.Z, { style: [P.subStepContainer, r && P.compactSubStepContainer] }, n.createElement("div", { className: "message-steps-card-sub-step-markdown-text" }, n.createElement(S.default, { citations: e.webResults, disableLinks: b.ZP.isWebView(), isAnimated: a, markdownText: e.summary || "" })));
                        },
                        [a, r],
                    ),
                    m = n.useCallback(
                        (e) => {
                            if (e.actionMarkdownSummary) {
                                const t = e.actionIcon,
                                    a = e.actionMarkdownSummary,
                                    i = e.actionState,
                                    l = (t && (0, w.wG)(t)) || h.default;
                                return n.createElement(o.Z, { style: [P.subStepContainer, P.decisionSubStepContainer, r && P.compactSubStepContainer] }, n.createElement(o.Z, { style: P.subStepIconContainer }, n.createElement(g.Z, { color: s.default.theme.colors.gray900, size: "small", style: [P.decisionIcon, "STARTED" === i ? P.showActivityDecisionIcon : void 0, "STARTED" !== i ? P.hideActivityDecisionIcon : void 0] }), n.createElement(l, { style: [P.subStepIcon, P.decisionIcon, "COMPLETED" === i ? P.showDecisionIcon : void 0] })), n.createElement("div", { className: "message-steps-card-sub-step-markdown-text" }, n.createElement(S.default, { disableLinks: b.ZP.isWebView(), isAnimated: !1, markdownText: a })));
                            }
                        },
                        [r],
                    ),
                    d = n.useCallback((t) => (t.webResults && t.webResults.length > 0 ? n.createElement(o.Z, { style: [P.subStepContainer, P.resultsSubStepContainer, r && P.compactSubStepContainer] }, n.createElement(o.Z, { style: P.subStepIconContainer }), n.createElement(x.Z, { analyticsMetricPrefix: e, isAnimated: a, style: P.resultsContainer, webResults: t.webResults })) : t.xPostIds && t.xPostIds.length > 0 ? n.createElement(E.Z, { analyticsMetricPrefix: e, isAnimated: a, scrollViewContentContainerStyle: [P.xPostsScrollViewContentContainer, r && P.compactXPostsScrollViewContentContainer], seeMoreButtonStyle: [P.xPostsSeeMoreButton, r && P.compactXPostsSeeMoreButton], style: P.resultsContainer, xPostIds: t.xPostIds }) : void 0), [a, e, r]);
                return n.createElement(
                    o.Z,
                    { onLayout: t && t(i.id), style: [P.step, l] },
                    i.subSteps.map((e, t) => n.createElement(o.Z, { key: `${i.id}-${e.messageTag}-${e.messageStepId}-${t}` }, e.messageTag === C.iS.SUMMARY && c(e), e.messageTag === C.iS.DECISION && n.createElement(n.Fragment, null, m(e), d(e)))),
                );
            }
            const T = s.default.theme.spacesPx.space20,
                k = s.default.theme.spacesPx.space12,
                Z = s.default.theme.spacesPx.space16,
                P = s.default.create((e) => ({
                    step: { display: "flex", flexDirection: "column", gap: e.spaces.space12 },
                    subStepContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, paddingHorizontal: T },
                    decisionSubStepContainer: { paddingHorizontal: e.spaces.space28 },
                    resultsSubStepContainer: { paddingHorizontal: e.spaces.space28 },
                    compactSubStepContainer: { paddingHorizontal: k },
                    subStepIconContainer: { width: Z, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" },
                    subStepIcon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray900 },
                    decisionIcon: { position: "absolute", top: "50%", start: "50%", transform: "translate(-50%, -50%) scale(0)", opacity: 0 },
                    showDecisionIcon: { opacity: 1, transform: "translate(-50%, -50%) scale(1)", animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translate(-50%, -50%) scale(0)" }, "50%": { opacity: 0.5, transform: "translate(-50%, -50%) scale(1.1)" }, "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" } }] },
                    showActivityDecisionIcon: { opacity: 1, transform: "translate(-50%, -50%) scale(0.7)", animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translate(-50%, -50%) scale(0)" }, "50%": { opacity: 0.5, transform: "translate(-50%, -50%) scale(0.8)" }, "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(0.7)" } }] },
                    hideActivityDecisionIcon: { opacity: 0, transform: "translate(-50%, -50%) scale(0)", animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 1, transform: "translate(-50%, -50%) scale(0.7)" }, "100%": { opacity: 0, transform: "translate(-50%, -50%) scale(0)" } }] },
                    resultsContainer: { marginTop: e.spaces.space12 },
                    xPostsScrollViewContentContainer: { paddingHorizontal: T + Z + e.spacesPx.space8 },
                    compactXPostsScrollViewContentContainer: { paddingHorizontal: k + Z + e.spacesPx.space8 },
                    xPostsSeeMoreButton: { marginStart: T + Z + e.spacesPx.space8 },
                    compactXPostsSeeMoreButton: { marginStart: k + Z + e.spacesPx.space8 },
                })),
                I = n.memo(v),
                D = m().ge15b488;
            function R({ analyticsMetricPrefix: e = "message-steps", handleStepLayout: t, messageStepAccumulator: a, onCancelAutoScroll: c, onRestartAutoScroll: m, onShowTrace: g, scrollViewRef: h, style: b }) {
                const { isPastSummary: C, steps: w, traceEnabled: S } = a,
                    { isCompactLayout: x, isGrokDrawer: E } = (0, y.ZP)(),
                    v = (0, u.hC)("responsive_web_grok_animated_text_enabled");
                (0, p.q)(() => {
                    const e = "message-steps-card-sub-step";
                    if (document.getElementById(e)) return;
                    const t = document.createElement("style");
                    t.setAttribute("id", e), (t.textContent = `\n        .message-steps-card-sub-step-markdown-text {\n          flex: 1;\n          max-width: 100%;\n        }\n  \n        .message-steps-card-sub-step-markdown-text li {\n          margin-top: 4px !important;\n          padding-left: 5px !important;\n        }\n  \n        .message-steps-card-sub-step-markdown-text ul {\n          margin-bottom: 0px !important;\n          position: relative !important;\n          left: -4px !important;\n        }\n  \n        .message-steps-card-sub-step-markdown-text span {\n          ${E || x ? `font-size: ${s.default.theme.fontSizes.subtext1} !important;` : ""}\n          line-height: 24px;\n        }\n  \n        .message-steps-card-sub-step-markdown-text a {\n          text-decoration: underline;\n        }\n      `);
                    const a = document.head;
                    return (
                        a && a.appendChild(t),
                        () => {
                            const t = document.getElementById(e);
                            t && t.remove();
                        }
                    );
                });
                const T = v && !C,
                    k = n.useMemo(() => {
                        const e = [];
                        for (let t = 0; t < 3 * w.length; t += 3) e.push(t);
                        return e;
                    }, [w]);
                return n.createElement(
                    o.Z,
                    { style: [z.container, b] },
                    n.createElement(r.Z, { size: "space8" }),
                    n.createElement(
                        f.Z,
                        { gradientColor: "transparent", onCancelAutoScroll: c, onRestartAutoScroll: m, scrollViewContentContainerStyle: z.scrollViewContentContainerStyle, scrollViewRef: h, stickyHeaderIndices: k },
                        n.createElement(
                            n.Fragment,
                            null,
                            w.flatMap((a, s) => [n.createElement(o.Z, { key: `${a.id}-header`, style: [z.headerContainer, { zIndex: s + 1 }] }, n.createElement(i.ZP, { style: z.header, weight: "bold" }, a.header)), n.createElement(I, { analyticsMetricPrefix: e, handleStepLayout: t, isAnimated: T, isCompactLayout: x, key: `${a.id}-step`, step: a }), n.createElement(r.Z, { key: `${a.id}-spacer`, size: "space20" })]),
                            n.createElement(r.Z, { size: "space48" }),
                        ),
                    ),
                    S && g && n.createElement(l.ZP, { backgroundColor: "gray0", borderColor: "gray200", icon: n.createElement(d.default, { style: z.traceIcon }), onClick: g, size: "small", style: z.traceButton }, n.createElement(i.ZP, { style: z.traceText }, D)),
                );
            }
            const z = s.default.create((e) => ({ container: { flex: 1, position: "relative" }, scrollViewContentContainerStyle: { display: "flex", flexDirection: "column" }, headerContainer: { paddingHorizontal: e.spacesPx.space20, backgroundColor: e.colors.gray0, paddingVertical: e.spaces.space12, opacity: 1, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, compactHeaderContainer: { paddingHorizontal: e.spacesPx.space12 }, header: {}, traceButton: { width: "max-content", position: "absolute", bottom: e.spaces.space16, end: e.spaces.space16 }, traceIcon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray900 }, traceText: { fontWeight: e.fontWeights.regular, color: e.colors.gray900, fontSize: e.fontSizes.subtext2 } }));
        },
        767075: (e, t, a) => {
            a.d(t, { Z: () => r });
            var n = a(202784),
                o = a(107267),
                s = a(725516);
            function r({ analyticsMetricPrefix: e = "message-steps", completedTimestamp: t, fromTimestamp: a, messageStepAccumulator: r }) {
                const i = (0, s.z)(),
                    l = (0, o.useLocation)(),
                    { state: c } = r,
                    m = "STARTED" === c,
                    d = "COMPLETED" === c;
                return (
                    n.useEffect(() => {
                        const t = () => {
                            "hidden" === document.visibilityState ? m && a && i.scribe({ component: `${e}-in-progress-visibility`, action: "hide", data: { event_info: JSON.stringify({ to: "off-app" }), duration_ms: Date.now() - a } }) : "visible" === document.visibilityState && m && i.scribe({ component: `${e}-in-progress-visibility`, action: "show", data: { event_info: JSON.stringify({ from: "off-app" }) } });
                        };
                        return (
                            document.addEventListener("visibilitychange", t),
                            () => {
                                document.removeEventListener("visibilitychange", t);
                            }
                        );
                    }, [m, i, a, t, e]),
                    n.useEffect(
                        () => (
                            m ? i.scribe({ component: `${e}-in-progress-visibility`, action: "show", data: { event_info: JSON.stringify({ from: "in-app" }) } }) : d && i.scribe({ component: `${e}-completed`, action: "view" }),
                            () => {
                                m && a && i.scribe({ component: `${e}-in-progress-visibility`, action: "hide", data: { event_info: JSON.stringify({ to: "in-app" }), duration_ms: Date.now() - a } });
                            }
                        ),
                        [l],
                    ),
                    null
                );
            }
        },
        39831: (e, t, a) => {
            a.d(t, { Z: () => h });
            var n = a(202784),
                o = a(214997),
                s = a(325686),
                r = a(392237),
                i = a(525271),
                l = a(111677),
                c = a.n(l),
                m = a(187669),
                d = a(323265),
                p = a(465086),
                u = a(207683);
            const y = c().a4d9dbfa;
            function f({ completed: e, gradientColor: t, isPastSummary: a, onDismissed: l, style: c, trace: f }) {
                const [h, b] = n.useState(null),
                    [C] = (0, p.h)({ scrollingFrame: h?.getScrollableNode(), enabled: !a && !e, autoStart: !a && !e });
                return (
                    (0, m.q)(() => {
                        const e = "message-steps-drawer-sub-step";
                        if (document.getElementById(e)) return;
                        const t = document.createElement("style");
                        t.setAttribute("id", e), (t.textContent = `\n    .message-steps-drawer-sub-step-markdown-text li {\n      margin-top: 0px !important;\n    }\n\n    .message-steps-drawer-sub-step-markdown-text ul {\n      margin-bottom: 0px !important;\n    }\n\n    .message-steps-drawer-sub-step-markdown-text span {\n      font-size: ${r.default.theme.fontSizes.subtext1} !important;\n      color: ${r.default.theme.colors.gray900} !important;\n      line-height: 24px;\n    }\n  `);
                        const a = document.head;
                        return (
                            a && a.appendChild(t),
                            () => {
                                const t = document.getElementById(e);
                                t && t.remove();
                            }
                        );
                    }),
                    n.createElement(i.Z, { align: "right", buttonType: "primaryText", onDismissed: l, title: y }, n.createElement(s.Z, { style: g.traceScrollViewContainer }, n.createElement(o.Z, { automaticallyAdjustKeyboardInsets: !0, contentContainerStyle: g.traceScrollViewContentContainer, ref: b, style: g.traceScrollView }, n.createElement("div", { className: "message-steps-drawer-sub-step-markdown-text" }, n.createElement(u.default, { disableLinks: d.ZP.isWebView(), isAnimated: !1, markdownText: f })), n.createElement(s.Z, { ref: C, style: { position: "relative", top: -250, width: 100, height: 1 } }), n.createElement(s.Z, { style: { position: "relative", width: 100, height: 300 } }))))
                );
            }
            const g = r.default.create((e) => ({ thinkingTraceLabel: { color: e.colors.gray800, fontSize: e.fontSizes.subtext3 }, markdownText: { position: "relative", fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 }, traceScrollViewContainer: { flex: 1, width: "100%", maxWidth: 500, position: "relative" }, traceScrollView: { flex: 1, width: "100%" }, traceScrollViewContentContainer: { flexGrow: 1, padding: e.spaces.space16 }, traceGradientBottom: { position: "absolute", width: "100%", height: "20%", bottom: 0 }, interactivePinButton: { backgroundColor: "transparent" }, pinButtonContainer: { position: "absolute", bottom: e.spaces.space16, start: "50%", transform: "translateX(-50%)" }, pinButton: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, borderRadius: e.borderRadii.xLarge, backgroundColor: "transparent", transition: "background-color 0.2s ease", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12 }, hoveredPinButton: { backgroundColor: e.colors.gray0 }, pinIcon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray900 }, pinText: { fontSize: e.fontSizes.subtext1, color: e.colors.gray900 } })),
                h = n.memo(f);
        },
        235493: (e, t, a) => {
            a.d(t, { Z: () => u });
            var n = a(202784),
                o = a(731708),
                s = a(392237),
                r = a(111677),
                i = a.n(r);
            const l = i().bf780b13,
                c = i().bb7e2143;
            function m({ aborted: e, completed: t, completedTimestamp: a, fromTimestamp: s, style: r, weight: i }) {
                const [m, p] = n.useState(() => (s && a && 0 !== a ? Math.max(0, Math.floor((a - s) / 1e3)) : s ? Math.max(0, Math.floor((Date.now() - s) / 1e3)) : 0)),
                    u = n.useMemo(() => (null === s ? Date.now() : s), [s]),
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
                    n.createElement(o.ZP, { style: [d.elapsedSeconds, r], weight: i }, m < 60 ? c({ seconds: m }) : l({ minutes: Math.floor(m / 60), seconds: m % 60 }))
                );
            }
            const d = s.default.create((e) => ({ elapsedSeconds: { color: e.colors.gray700, fontSize: e.fontSizes.subtext2, lineHeight: e.fontSizes.subtext2 } })),
                p = (e, t) => e.completed === t.completed && e.aborted === t.aborted && e.completedTimestamp === t.completedTimestamp && e.fromTimestamp === t.fromTimestamp,
                u = n.memo(m, p);
        },
        630961: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(202784),
                o = a(214997),
                s = a(325686),
                r = a(757483),
                i = a(392237),
                l = a(215337);
            function c({ children: e, gradientColor: t, onCancelAutoScroll: a, onRestartAutoScroll: c, scrollViewContentContainerStyle: d, scrollViewRef: p, scrollViewStyle: u, stickyHeaderIndices: y, style: f }) {
                const g = n.useCallback(() => [r.Z.hexToCss(t || i.default.theme.colors.gray50, 0), r.Z.hexToCss(t || i.default.theme.colors.gray50, 0.8), r.Z.hexToCss(t || i.default.theme.colors.gray50, 1)], [t]),
                    h = n.useRef(0);
                return n.createElement(
                    s.Z,
                    { style: [m.container, f] },
                    n.createElement(l.Z, { angle: 0, colors: g(), style: m.traceGradientTop }),
                    n.createElement(l.Z, { colors: g(), style: m.traceGradientBottom }),
                    n.createElement(
                        o.Z,
                        {
                            contentContainerStyle: [m.scrollViewContentContainer, d],
                            onScroll: (e) => {
                                const { contentOffset: t, contentSize: n, layoutMeasurement: o } = e.nativeEvent,
                                    s = t.y;
                                t.y + o.height >= n.height - 50 ? c() : s < h.current && s - h.current < -5 && a(), (h.current = s);
                            },
                            ref: p,
                            scrollEventThrottle: 16,
                            showsVerticalScrollIndicator: !1,
                            stickyHeaderIndices: y,
                            style: [m.scrollView, u],
                        },
                        e,
                    ),
                );
            }
            const m = i.default.create((e) => ({ container: { flex: 1, position: "relative" }, scrollView: {}, scrollViewContentContainer: { position: "relative" }, traceGradientTop: { position: "absolute", width: "100%", height: "5%", top: 0, zIndex: 1 }, traceGradientBottom: { position: "absolute", width: "100%", height: "5%", bottom: 0, zIndex: 1 } }));
        },
        966488: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(202784),
                o = a(154003),
                s = a(731708),
                r = a(392237),
                i = a(111677);
            const l = a.n(i)().aa7c96bb;
            function c({ count: e, onClick: t, style: a }) {
                return n.createElement(o.ZP, { backgroundColor: "transparent", borderColor: "transparent", onPress: t, size: "smallCompact", style: [m.seeAllButton, a] }, n.createElement(s.ZP, { style: m.seeAllText, weight: "normal" }, l({ numResults: e })));
            }
            const m = r.default.create((e) => ({ seeAllButton: { width: "max-content" }, seeAllText: { fontSize: e.fontSizes.subtext2, color: e.colors.gray700 } }));
        },
        299399: (e, t, a) => {
            a.d(t, { Z: () => A });
            var n = a(202784),
                o = a(214997),
                s = a(325686),
                r = a(392237),
                i = a(757483),
                l = a(530732),
                c = a(215337),
                m = a(721266),
                d = a(323265),
                p = a(725405),
                u = a(465086),
                y = a(207683),
                f = a(988290),
                g = a(617568),
                h = a(731708),
                b = a(111677),
                C = a.n(b),
                w = a(408814),
                S = a(58399),
                x = a(970205),
                E = a(235493);
            const v = C().f5a2377e,
                T = C().g3ce0132,
                k = C().a4d9dbfa,
                Z = C().f8007364,
                P = C().ca53f780;
            function I({ completed: e, completedTimestamp: t, expanded: a, fromTimestamp: o, id: r, isPastSummary: i = !1 }) {
                const l = n.useCallback(() => n.createElement(s.Z, { style: D.thinkingLabel, weight: "bold" }, n.createElement(s.Z, { style: D.iconContainer }, n.createElement(w.default, { style: [D.lightBulbIcon, e || i ? D.iconVisible : void 0] }), n.createElement(x.Z, { style: { ...D.loadingIcon, ...(e ? {} : D.iconVisible), ...(e ? D.iconHide : {}) } })), (0 !== t && i) || (0 !== o && !i) ? n.createElement(h.ZP, { weight: "medium" }, e ? T : v) : n.createElement(h.ZP, { weight: "medium" }, k), (0 !== t && i) || (0 !== o && !i) ? n.createElement(E.Z, { completed: e, completedTimestamp: t, fromTimestamp: o, style: D.elapsedTime, weight: "medium" }) : null), [e, i, t, o]);
                return n.createElement(s.Z, { style: D.headerContainer }, n.createElement(s.Z, { style: D.cardHeader }, n.createElement(s.Z, { style: D.infoContainer }, l(), n.createElement(h.ZP, { color: "gray700", size: "subtext1" }, a ? P : Z)), n.createElement(S.default, { style: [D.icon, a ? D.expandedIcon : null] })));
            }
            const D = r.default.create((e) => ({ headerContainer: { width: "100%", transition: "background-color 0.2s ease" }, cardHeader: { display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center" }, infoContainer: { color: e.colors.gray700, display: "flex", flexDirection: "column", gap: 6 }, icon: { color: e.colors.gray700, transition: "transform 0.2s ease", height: e.spaces.space24, width: e.spaces.space16 }, expandedIcon: { transform: "rotate(90deg)" }, thinkingLabel: { flexDirection: "row", gap: e.spaces.space4, alignItems: "center" }, elapsedTime: { color: e.colors.text, fontSize: e.fontSizes.body }, iconContainer: { position: "relative", width: e.spaces.space24, height: e.spaces.space24 }, lightBulbIcon: { fill: "none", color: e.colors.text, position: "absolute", top: "50%", start: "50%", transform: "translate(-50%, -50%) scale(0.8)", width: "100%", height: "100%", opacity: 0 }, loadingIcon: { width: "100%", height: "100%", opacity: 0 }, iconVisible: { opacity: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, iconHide: { opacity: 0, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 1 }, "100%": { opacity: 0 } }] } }));
            function R({ completed: e, endStreamTimestamp: t, fromTimestamp: a, hasResponseText: h, id: b, isPastThinkingTrace: C, shownTrace: w }) {
                const S = (0, p.Z)(),
                    [x, E] = n.useState(!1),
                    [v, T] = n.useState(null),
                    [k] = (0, u.h)({ scrollingFrame: v?.getScrollableNode(), enabled: !C && !e, autoStart: !C && !e }),
                    { isCompactLayout: Z, isGrokDrawer: P } = (0, f.ZP)(),
                    D = r.default.theme.colors.gray0,
                    R = n.useCallback(() => [i.Z.hexToCss(D || r.default.theme.colors.gray0, 0), i.Z.hexToCss(D || r.default.theme.colors.gray0, 0.8), i.Z.hexToCss(D || r.default.theme.colors.gray0, 1)], [D]);
                return (
                    n.useEffect(() => {
                        e && E(!1);
                    }, [e]),
                    n.createElement(
                        s.Z,
                        { style: [z.container, Z ? z.compactContainer : void 0] },
                        n.createElement(
                            l.Z,
                            {
                                interactiveStyles: z.interactiveHeaderContainer,
                                onClick: () => {
                                    S.scribe({ element: "grok-reasoning-card-" + (x ? "collapse" : "expand"), action: "click" }), E(!x);
                                },
                                style: z.headerContainer,
                            },
                            ({ isHovered: o }) => n.createElement(s.Z, { style: z.headerContainer }, n.createElement(I, { completed: e, completedTimestamp: t, expanded: x, fromTimestamp: a, id: b, isPastSummary: C }), C ? null : n.createElement(s.Z, { style: [{ width: "100%", height: 150, position: "relative" }, { display: h || x ? "none" : "flex" }] }, n.createElement(g.w, { charLimit: 2e3, text: w }), n.createElement(c.Z, { angle: 0, colors: R(), style: z.traceGradientTop }), n.createElement(c.Z, { angle: 180, colors: R(), style: z.traceGradientBottom }))),
                        ),
                        n.createElement(s.Z, { style: [z.collapsedOuterThinkingContainer, x ? z.expandedOuterThinkingContainer : void 0] }, n.createElement(s.Z, { style: { position: "relative" } }, n.createElement(m.Z, { size: "space8" }), n.createElement(o.Z, { contentContainerStyle: z.thinkingContentContainer, ref: T, showsVerticalScrollIndicator: !1, style: [z.thinkingContainer, Z ? z.compactThinkingContainer : void 0, P ? z.drawerThinkingContainer : void 0] }, n.createElement(y.default, { disableCodeBlockStickyHeader: !0, disableLinks: d.ZP.isWebView(), isAnimated: !1, markdownText: w, style: z.markdownStyle }), n.createElement(s.Z, { ref: k, style: { position: "relative", top: -250, width: 100, height: 1 } })), n.createElement(m.Z, { size: "space8" }), n.createElement(c.Z, { angle: 0, colors: R(), style: z.thinkingGradientTop }), n.createElement(c.Z, { angle: 180, colors: R(), style: z.thinkingGradientBottom }))),
                    )
                );
            }
            const z = r.default.create((e) => ({ container: { marginHorizontal: e.spaces.space12, marginBottom: e.spaces.space16, opacity: 1, animationDuration: "0.5s", borderStyle: "solid", borderColor: e.colors.gray200, borderWidth: 1, animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], overflow: "hidden", borderRadius: e.spaces.space24, backgroundColor: e.colors.gray0, padding: e.spaces.space20 }, compactContainer: { marginBottom: e.spaces.space12, marginHorizontal: e.spaces.space16, padding: e.spaces.space16 }, interactiveHeaderContainer: { backgroundColor: "transparent", cursor: "pointer" }, collapsedOuterThinkingContainer: { display: "grid", gridTemplateRows: "0fr", transition: "250ms grid-template-rows ease", position: "relative" }, expandedOuterThinkingContainer: { gridTemplateRows: "1fr" }, thinkingContainer: { maxHeight: "35vh" }, drawerThinkingContainer: { maxHeight: "45vh" }, compactThinkingContainer: { maxHeight: "30vh" }, thinkingContentContainer: { paddingVertical: e.spaces.space32 }, thinkingGradientTop: { position: "absolute", width: "100%", height: "5%", top: 0 }, thinkingGradientBottom: { position: "absolute", width: "100%", height: "5%", bottom: 0 }, headerContainer: { position: "flex", flexDirection: "column" }, markdownStyle: { width: "100%" }, thinkingLabelContainer: { position: "relative" }, thinkingLabel: { opacity: 1 }, traceContainer: { marginTop: 5, display: "flex", color: e.colors.gray1000, flexDirection: "column", flex: 1, overflow: "hidden" }, traceGradientTop: { position: "absolute", width: "100%", height: "40%", top: 0 }, traceGradientBottom: { position: "absolute", width: "100%", height: "20%", bottom: 0 } })),
                A = n.memo(R);
        },
        545519: (e, t, a) => {
            a.d(t, { V: () => i });
            var n = a(202784),
                o = a(400752),
                s = a(420182);
            const r = "rweb.grok.resumability";
            function i(e, t, a) {
                const i = (0, o.Dv)(s.lZ),
                    [l, c] = n.useState(0),
                    [m, d] = n.useState(0),
                    [p, u] = n.useState("");
                n.useEffect(() => {
                    t && u(t);
                }, [t]);
                const y = async (e) => {
                        try {
                            const t = await i.get(r),
                                a = t?.timers || new Map(),
                                n = a.get(p) || { startStreamTime: 0, endStreamTime: 0 };
                            (n.startStreamTime = e), a.set(p, n), await i.set(r, { timers: a }), c(e);
                        } catch (e) {}
                    },
                    f = async (e) => {
                        try {
                            const t = await i.get(r),
                                a = t?.timers || new Map(),
                                n = a.get(p) || { startStreamTime: 0, endStreamTime: 0 };
                            (n.endStreamTime = e), a.set(p, n), await i.set(r, { timers: a }), d(e);
                        } catch (e) {}
                    },
                    g = async () => {
                        try {
                            const e = await i.get(r);
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
                                const e = await i.get(r);
                                if (e?.timers instanceof Map) {
                                    const t = e.timers;
                                    t.has(p) && (t.delete(p), await i.set(r, { timers: t }));
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
        194167: (e, t, a) => {
            a.d(t, { nJ: () => S, ZP: () => E, YM: () => x });
            var n = a(202784),
                o = a(325686),
                s = a(392237),
                r = a(111677),
                i = a.n(r),
                l = a(725516),
                c = a(448781),
                m = a(94693),
                d = a(557707);
            const p = i().be30b6ee,
                u = i().a5077d3e;
            function y({ analyticsMetricPrefix: e = "message-steps", messageStepAccumulator: t }) {
                const a = (0, l.z)(),
                    o = n.useRef(null),
                    [s, r] = n.useState(!1),
                    { isPastSummary: i, lastStreamedDataTimestamp: c, state: m } = t,
                    y = "STARTED" === m,
                    g = "COMPLETED" === m,
                    h = "ABORTED" === m,
                    b = () => {
                        r(!1), clearTimeout(o.current);
                    },
                    C = n.useCallback(() => {
                        b(),
                            (o.current = setTimeout(() => {
                                g || (r(!0), a.scribe({ component: `${e}-refresh-toast`, action: "show" }));
                            }, 3e4));
                    }, [a, g, e]);
                return (
                    n.useEffect(() => {
                        y && !o.current ? C() : (g || h) && b();
                    }, [y, g, h, C]),
                    n.useEffect(() => {
                        !c || g || i || C();
                    }, [c, C, g, i]),
                    s &&
                        n.createElement(d.ZP, {
                            action: {
                                label: u,
                                onAction: () => {
                                    window.location.reload();
                                },
                            },
                            onClose: () => {
                                r(!1), a.scribe({ component: `${e}-refresh-toast`, action: "click" });
                            },
                            style: f.toast,
                            text: p,
                            withClearButton: !0,
                        })
                );
            }
            const f = s.default.create((e) => ({ toast: { opacity: 1, transform: [{ translateY: 0 }], animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0, transform: [{ translateY: 5 }] }, "100%": { opacity: 1, transform: [{ translateY: 0 }] } }] } }));
            var g = a(673787),
                h = a(767075),
                b = a(39831);
            const C = i().b1ac6016,
                w = i().f766feca,
                S = "grok-deepsearch";
            function x(e, t, a) {
                return t && e ? (a ? w : C) : a ? c.p9 : c.XD;
            }
            function E({ completedTimestamp: e, fromTimestamp: t, isLoading: a, messageStepAccumulator: s }) {
                const r = (0, l.z)(),
                    i = n.useRef(null),
                    c = n.useRef(null),
                    d = n.useRef({}),
                    [p, u] = n.useState(!1),
                    [f, C] = n.useState(!1),
                    [w, E] = n.useState(null),
                    [T, k] = n.useState(!1),
                    [Z, P] = n.useState(!1),
                    { accumulatedTrace: I, deepsearchArgs: D, isPastSummary: R, state: z, steps: A, traceEnabled: B } = s,
                    M = "COMPLETED" === z,
                    V = "ABORTED" === z,
                    _ = !!D && "deeper" === D.mode,
                    L = n.useRef(null);
                n.useEffect(() => {
                    const e = () => {
                        c.current && !f && c.current.scrollToEnd({ animated: !0 }), i.current && !p && i.current.scrollToEnd({ animated: !0 });
                    };
                    return R || (L.current = window.setInterval(e, 1e3)), () => window.clearInterval(L.current);
                }, [p, f, R]),
                    n.useEffect(() => {
                        M && !R && (c.current && !f && c.current.scrollToEnd({ animated: !0 }), i.current && !p && i.current.scrollToEnd({ animated: !0 }), window.clearInterval(L.current));
                    }, [M, f, p, R]);
                const H = n.useCallback((e) => {
                        c.current && c.current.scrollTo({ y: e, animated: !0 });
                    }, []),
                    $ = n.useCallback(
                        (e) => {
                            if ((E(e), void 0 !== d.current[e])) {
                                const t = 40;
                                H(Math.max(d.current[e] - t, 0));
                            }
                            r.scribe({ component: `${S}-header-click`, action: "click", element: A.find((t) => t.id === e)?.header || "" });
                        },
                        [H, r, A],
                    ),
                    O = n.useMemo(() => A.map((e) => ({ id: e.id, label: e.header, state: e.state, isCompleteHeader: e.isCompleteHeader })), [A]);
                return n.createElement(
                    o.Z,
                    { style: [v.container, Z ? v.expandedContainer : void 0] },
                    n.createElement(m.Z, {
                        aborted: V,
                        activeStepId: w,
                        analyticsMetricPrefix: S,
                        completed: M,
                        completedTimestamp: e,
                        expanded: Z,
                        finalAnswerStreamCompleted: !1 === a,
                        fromTimestamp: t,
                        headers: O,
                        isPast: R,
                        numSources: s.getNumSources(),
                        onCancelAutoScroll: () => {
                            u(!0);
                        },
                        onOpenTrace: () => k(!0),
                        onRestartAutoScroll: () => {
                            u(!1);
                        },
                        onStepClick: $,
                        rawTraceEnabled: B,
                        scrollViewRef: i,
                        setExpanded: P,
                        style: v.leftPanel,
                        title: x(M, !1, _),
                    }),
                    n.createElement(g.Z, {
                        analyticsMetricPrefix: S,
                        handleStepLayout: (e) => (t) => {
                            if (e) {
                                const a = t.nativeEvent.layout;
                                d.current[e] = a.y;
                            }
                        },
                        messageStepAccumulator: s,
                        onCancelAutoScroll: () => {
                            C(!0);
                        },
                        onRestartAutoScroll: () => {
                            C(!1);
                        },
                        scrollViewRef: c,
                        style: v.rightPanel,
                    }),
                    T &&
                        n.createElement(b.Z, {
                            completed: M,
                            isPastSummary: R,
                            onDismissed: () => {
                                k(!1), r.scribe({ element: `${S}-close-trace`, action: "click" });
                            },
                            trace: I,
                        }),
                    n.createElement(h.Z, { analyticsMetricPrefix: S, completedTimestamp: e, fromTimestamp: t, messageStepAccumulator: s }),
                    n.createElement(y, { analyticsMetricPrefix: S, messageStepAccumulator: s }),
                );
            }
            const v = s.default.create((e) => ({ container: { marginBottom: e.spaces.space16, opacity: 1, animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], overflow: "hidden", borderWidth: 1, borderStyle: "solid", borderColor: e.colors.gray300, borderRadius: e.spaces.space24, marginHorizontal: e.spaces.space16, display: "flex", flexDirection: "row", height: 400, backgroundColor: e.colors.gray0, transition: "all 0.2s ease", start: 0 }, expandedContainer: { height: 500, width: "110%", start: -40 }, leftPanel: { width: 200 }, rightPanel: { flex: 1 } }));
        },
        848957: (e, t, a) => {
            a.d(t, { Z: () => x });
            var n = a(202784),
                o = a(706307),
                s = a(325686),
                r = a(731708),
                i = a(392237),
                l = a(111677),
                c = a.n(l),
                m = a(725405),
                d = a(125363),
                p = a(623494),
                u = a(207683),
                y = a(819102),
                f = a(674756);
            const g = c().b52484b6,
                h = c().f4146dda,
                b = c().a2c2be32,
                C = c().g01599b6,
                w = c().e02694e0,
                S = c().h6867fcc;
            function x({ conversationId: e, grokModule: t, isLoading: a, message1: i, message2: l }) {
                const c = (0, y.u)(i?.message ?? "", !1),
                    x = (0, y.u)(l?.message ?? "", !1),
                    v = (0, d.I0)(),
                    T = (0, m.Z)(),
                    k = (m, d) =>
                        n.createElement(
                            s.Z,
                            { style: E.messageContainer },
                            n.createElement(s.Z, { style: E.contentContainer }, n.createElement(r.ZP, { style: E.responseLabel }, 0 === d ? C : w), ((e) => n.createElement(n.Fragment, null, n.createElement(s.Z, { style: E.searchButtonsContainer }, n.createElement(f.R, { isAnimated: !0, postIds: e?.postIds ?? [], webResults: e?.webResults ?? [] })), a && "" === e?.message && ((null != e?.webResults && e?.webResults.length > 0) || (null != e?.postIds && e?.postIds.length > 0)) && n.createElement(s.Z, { style: E.searchingLabelContainer }, n.createElement(r.ZP, { style: E.searchingLabel }, n.createElement("span", null, g)))))(m), n.createElement(s.Z, { style: E.labelSpacer }), n.createElement(u.default, { citations: [...(m.webResults ?? []), ...(m.citedWebResults ?? [])], disableLinks: !1, isAnimated: !1, markdownText: 0 === d ? c : x, style: E.markdownText })),
                            !a &&
                                n.createElement(
                                    o.Z,
                                    {
                                        onPress: () => {
                                            (0, p.G$)(T, { conversationId: e, preferredMessage: m, nonPreferredMessage: 0 === d ? l : i, preferredMessageIndex: d, nonPreferredMessageIndex: 0 === d ? 1 : 0 }), v(t.setPreferredResponse(d)), v(t.setUsingExperiment(!1));
                                        },
                                        style: E.preferButton,
                                    },
                                    n.createElement(r.ZP, { style: E.preferButtonText }, S),
                                ),
                        );
                return n.createElement(s.Z, { style: E.container }, n.createElement(r.ZP, { style: E.questionBold }, h), n.createElement(r.ZP, { style: E.questionRegular }, b), n.createElement(s.Z, { style: E.sideBySideContainer }, k(i, 0), n.createElement(s.Z, { style: E.gap }), k(l, 1)));
            }
            const E = i.default.create((e) => ({
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-f8a31592.c7b1230a.js.map

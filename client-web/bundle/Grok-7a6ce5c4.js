"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-7a6ce5c4"],
    {
        468603: (e, t, n) => {
            n.d(t, { ZP: () => x });
            n(136728);
            var a = n(202784),
                r = n(325686),
                o = n(731708),
                s = n(530732),
                i = n(392237),
                l = n(111677),
                c = n.n(l),
                u = n(408814),
                m = n(487552),
                d = n(246851),
                p = n(397159),
                g = n(970205);
            function h({ delay: e = 500, duration: t = 30, endElement: n, holdout: r = 0, style: s, text: i }) {
                const [l, c] = a.useState(""),
                    [u, m] = a.useState(""),
                    d = a.useRef(0);
                a.useEffect(() => {
                    let n,
                        a = u;
                    const r = (e) => {
                        l !== a && (l.startsWith(a) ? ((a = l.substring(0, e)), (n = setTimeout(() => r(e + 1), t))) : ((a = a.substring(0, Math.max(0, a.length - 2))), (n = setTimeout(() => r(e), t))), m(a));
                    };
                    return (n = setTimeout(() => r(1), e)), () => clearTimeout(n);
                }, [l, t, e]),
                    a.useEffect(() => {
                        const e = Math.max(0, d.current + r - Date.now()),
                            t = setTimeout(() => {
                                (d.current = Date.now()), c(i);
                            }, e);
                        return () => clearTimeout(t);
                    }, [i]);
                let p = u,
                    g = "";
                if (l === u) {
                    const e = u.split(" ");
                    e.length > 0 && ((g = e[e.length - 1]), (p = e.slice(void 0, -1).join(" ")));
                }
                return a.createElement(o.ZP, { style: s }, a.createElement("span", null, a.createElement("span", null, p), g ? a.createElement("span", { style: { whiteSpace: "nowrap" } }, `${p ? " " : ""}${g}`, " ", n) : void 0));
            }
            const f = c().ib1c5475,
                y = c().a15d62db,
                b = (e, t) =>
                    a.useMemo(() => {
                        if (!e || !t) return "";
                        const n = Math.floor((t - e) / 1e3);
                        return n < 60 ? y({ seconds: n }) : f({ minutes: Math.floor(n / 60), seconds: n % 60 });
                    }, [e, t]),
                E = c().e6d51c62,
                _ = c().c3f04d9c,
                w = c().a4d9dbfa;
            function x({ completedTimestamp: e, expanded: t, fromTimestamp: n, hasCardAttachments: s, isCompactLayout: i, isImageResponse: l, isLoading: c, messageStepAccumulator: f, onClick: y, onComplete: x, reasoningLayout: k, searchQuery: Z, shownText: I, shownTrace: T, style: S }) {
                const R = "UNIFIED" === k,
                    P = (0, d.Z)(f?.state),
                    M = "COMPLETED" === f?.state,
                    D = "ABORTED" === f?.state,
                    L = f?.isPastSummary,
                    A = b(n ?? 0, e ?? 0),
                    z = "" !== I && void 0 !== I,
                    B = a.useMemo(() => (R ? !((!f && !c) || l) : c && !l && !z && !f && !T && !s), [R, c, l, z, f, T, s]);
                a.useEffect(() => {
                    "COMPLETED" !== P && M && x?.();
                }, [P, M, x]);
                const H = a.useMemo(() => {
                        const e = [],
                            t = f?.steps || [];
                        for (const n of t) {
                            n.header && e.push(n.header);
                            const t = n.subSteps || [];
                            for (const n of t) n.messageTag === p.iS.SUMMARY ? e.push(...(n.bulletPoints || [])) : n.messageTag === p.iS.DECISION && e.push(n.actionSummary || "");
                        }
                        return e;
                    }, [f?.debugMessageTagCount]),
                    F = H[H.length - 1],
                    W = a.useMemo(() => (R ? (t ? _ : F || _) : Z ? E : ""), [R, t, Z, F]);
                return a.createElement(
                    r.Z,
                    { style: [C.statusContainer, R && C.unifiedLayoutStatusContainer, B && { opacity: 1, pointerEvents: "auto" }] },
                    R && (M || D) ? a.createElement(u.default, { style: C.thinkIcon }) : a.createElement(g.Z, { loop: B, style: C.loadingIcon }),
                    (() => {
                        if (R) {
                            const e = f && f.steps.length > 0;
                            return M || D ? a.createElement(v, { completed: !0, expanded: t, onClick: y, showExpand: e }, a.createElement(r.Z, { style: C.statusLabelContainer }, a.createElement(o.ZP, { style: C.statusLabel }, L || D ? w : A)), e && a.createElement(m.default, { style: [C.chevron, M || D ? C.completedChevron : void 0, t ? C.expandedChevron : void 0] })) : a.createElement(v, { completed: !1, expanded: t, onClick: y, showExpand: e }, a.createElement(h, { duration: 5, endElement: e ? a.createElement(m.default, { style: [C.chevron, C.typingAnimationChevron, t ? C.expandedChevron : void 0] }) : null, holdout: 45 * W.length, style: C.typingAnimation, text: W }));
                        }
                        return a.createElement(r.Z, { style: C.statusLabelContainer }, a.createElement(h, { duration: 15, holdout: 0, style: C.typingAnimation, text: W }));
                    })(),
                );
            }
            function v({ children: e, completed: t, expanded: n, onClick: r, showExpand: o }) {
                return a.createElement(
                    s.Z,
                    {
                        onClick: () => {
                            o && r();
                        },
                        style: C.expandableStatusContainer,
                        withoutInteractiveStyles: !0,
                    },
                    e,
                );
            }
            const C = i.default.create((e) => ({ statusContainer: { display: "flex", flexDirection: "row", color: "light" === e.paletteName ? e.colors.gray700 : e.colors.gray900, opacity: 0, pointerEvents: "none", transition: "opacity 0.2s ease", marginHorizontal: e.spaces.space12, gap: e.spaces.space4, position: "absolute", top: 0, start: 0 }, unifiedLayoutStatusContainer: { position: "unset", top: "unset", start: "unset", marginBottom: e.spaces.space12 }, loadingIcon: { position: "relative", top: 1 }, thinkIcon: { color: "inherit" }, statusLabelContainer: { position: "relative", width: "fit-content", animationDuration: "0.2s", opacity: 1, animationTimingFunction: "linear", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, statusLabel: { color: "inherit" }, expandableStatusContainer: { display: "flex", flexDirection: "row", marginStart: e.spaces.space4, flex: 1 }, chevron: { transition: "all 0.2s ease", transform: "rotate(0deg)", color: "inherit", width: e.spaces.space16, height: e.spaces.space16, animationDuration: "0.2s", animationTimingFunction: "linear", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" }, completedChevron: { color: "inherit", top: e.spaces.space2, marginStart: e.spaces.space4 }, expandedChevron: { transform: "rotate(-180deg)" }, typingAnimation: { color: "inherit", flex: 1, display: "flex", paddingTop: 3 }, typingAnimationChevron: { top: -1 } }));
        },
        567778: (e, t, n) => {
            n.d(t, { w: () => k });
            var a = n(202784),
                r = n(992942),
                o = n(154003),
                s = n(111677),
                i = n.n(s),
                l = n(323265),
                c = n(952793),
                u = n(725516),
                m = n(226247),
                d = n(464279),
                p = n(560619);
            const g = "grok",
                h = "grok_3",
                f = i().ha8fbe22,
                y = i().d95c232a,
                b = i().h2671312,
                E = i().a1bb9c8a,
                _ = i().b08ef3ae,
                w = i().jf9363b8,
                x = i().ef018bf6,
                v = i().d95c232a,
                C = i().cdace6d2,
                k = ({ upsell: e }) => {
                    (0, u.z)().scribe({ action: "impression", component: "upsell_banner", element: e.upsellType });
                    const t = (0, c.hC)("responsive_web_grok_upsell_free_to_premium");
                    return "free_grok_2_mini_feature" === e.upsellType || "free_grok_2_feature" === e.upsellType || "free_grok_3_feature" === e.upsellType || "free_grok_3_mini_feature" === e.upsellType || "free_grok_3_reasoning_feature" === e.upsellType || "free_grok_3_deepsearch_feature" === e.upsellType || "free_grok_3_mini_reasoning_feature" === e.upsellType || "free_grok_3_mini_deepsearch_feature" === e.upsellType ? (t ? a.createElement(m.e, { button: a.createElement(Z, null), text: _, title: b }) : a.createElement(m.e, { button: a.createElement(Z, { referringPage: h }), text: w, title: E })) : "premium_grok_2_feature" === e.upsellType || "premium_grok_3_feature" === e.upsellType || "premium_grok_3_mini_feature" === e.upsellType || "premium_grok_3_reasoning_feature" === e.upsellType || "premium_grok_3_deepsearch_feature" === e.upsellType || "premium_grok_3_mini_reasoning_feature" === e.upsellType || "premium_grok_3_mini_deepsearch_feature" === e.upsellType ? a.createElement(m.e, { button: a.createElement(Z, { referringPage: h }), text: w, title: E }) : "free_image_understanding_feature" === e.upsellType ? a.createElement(m.e, { button: a.createElement(Z, null), image: a.createElement(r.Z, { source: { uri: p }, style: { width: 102, height: 85 } }), text: v, title: x }) : "free_image_generation_feature" === e.upsellType ? a.createElement(m.e, { button: a.createElement(Z, null), image: a.createElement(r.Z, { source: { uri: d }, style: { width: 132, height: 115 } }), text: y, title: f }) : null;
                },
                Z = ({ referringPage: e }) => {
                    const t = !!l.ZP.isWebView(),
                        n = (0, u.z)(),
                        r = a.useCallback(() => n.scribe({ action: "click", component: "upsell_banner", element: "upgrade-button" }), [n]);
                    return a.createElement(o.ZP, { link: { pathname: "/i/premium_sign_up", state: { referring_page: e || g }, external: t, query: { referring_page: e || g } }, onPress: r, size: "small", type: "primaryFilled" }, C);
                };
        },
        986274: (e, t, n) => {
            n.d(t, { E: () => i });
            var a = n(202784),
                r = n(325686),
                o = n(731708),
                s = n(392237);
            const i = ({ performanceMetrics: e, userChatItemId: t }) => {
                    const [n, s] = a.useState(void 0),
                        { timeToCompletion: i, timeToFirstChunkMs: c, timeToFirstTextMs: u, traceId: m } = e;
                    return void 0 === n ? a.createElement(r.Z, { style: l.container }, u ? a.createElement(o.ZP, { onClick: () => s(!0), style: l.showDebugLink }, (u / 1e3).toString(), "s") : a.createElement(o.ZP, { onClick: () => s(!1), style: l.showDebugLink }, "Debug")) : !1 === n ? null : a.createElement(r.Z, { style: l.container }, a.createElement(o.ZP, { style: l.text }, "Debug / Performance"), m ? a.createElement(o.ZP, { style: l.text }, "Trace ID: ", m) : null, t ? a.createElement(o.ZP, { style: l.text }, "Item ID: ", t) : null, c ? a.createElement(o.ZP, { style: l.text }, "Time to first chunk: ", (c / 1e3).toString(), "s") : null, u ? a.createElement(o.ZP, { style: l.text }, "Time to first text: ", (u / 1e3).toString(), "s") : null, i ? a.createElement(o.ZP, { style: l.text }, "Time to completion: ", (i / 1e3).toString(), "s") : null, a.createElement(o.ZP, { onClick: () => s(!1), style: l.showDebugLink }, "hide this"));
                },
                l = s.default.create((e) => ({ container: { marginStart: e.spaces.space8, alignItems: "flex-start", justifyContent: "flex-start" }, text: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 }, showDebugLink: { cursor: "pointer", width: "fit-content", color: e.colors.gray700, fontSize: e.fontSizes.subtext1, borderBottomColor: e.colors.gray100, borderBottomStyle: "dotted", borderBottomWidth: e.spaces.space1 } }));
        },
        917118: (e, t, n) => {
            n.d(t, { e: () => T });
            var a = n(202784),
                r = n(744610),
                o = n(555874),
                s = n(67369),
                i = n(666305),
                l = n(392237),
                c = n(2138),
                u = n(666536),
                m = n(306677),
                d = n(725405),
                p = n(464023),
                g = n(984636),
                h = n.n(g),
                f = n(166852),
                y = n(125363),
                b = n(836255);
            n(136728);
            var E = n(325686),
                _ = n(107267),
                w = n(530732),
                x = n(992942);
            function v({ image: e, images: t, index: n, isMobileView: r, layout: o }) {
                const s = (0, _.useHistory)(),
                    i = (0, d.Z)(),
                    l = o.normalWidth,
                    c = (3 * l) / 4,
                    u = a.useCallback(() => ({ width: l, height: c, zIndex: 20, marginRight: r && n !== t.length - 1 ? 8 : 0 }), [c, l, t.length, n, r]),
                    m =
                        e &&
                        (function (e) {
                            return e && e.original_info ? { url: e.media_url_https, width: e.original_info.width, height: e.original_info.height } : void 0;
                        })(e),
                    p = a.useCallback(() => {
                        i.scribe({ element: "grok_search_summary_view_image_modal", action: "click" }), s.push({ pathname: "/i/grok/media", state: { file: m } });
                    }, [i, s, m]);
                return a.createElement(E.Z, { style: u() }, e.media_url_https ? a.createElement(w.Z, { onClick: p, style: [C.imageContainer, { width: l, height: c }] }, a.createElement(x.Z, { source: { uri: e.media_url_https }, style: C.image })) : null);
            }
            const C = l.default.create((e) => ({ imageContainer: { borderRadius: e.borderRadii.large, marginStart: 0, marginBottom: e.spaces.space4, overflow: "hidden", zIndex: 100 }, image: { width: "100%", height: "100%" } })),
                k = 150,
                Z = 6,
                I = 5;
            function T({ isAnimated: e, mediaIds: t }) {
                const n = (p.vf - (I + 1) * Z) / I,
                    l = (function ({ mediaIds: e }) {
                        const t = (0, y.oR)(),
                            n = e.map((e) => b.Z.selectHydrated(t.getState(), e)).filter(Boolean);
                        function r(e) {
                            return e?.entities?.media ? e.entities.media.filter((e) => "photo" === e.type) : [];
                        }
                        const o = (0, f.Z)(n)
                                .map((e) => ({ tweet: e, photos: r(e) }))
                                .filter((e) => e.photos.length > 0)
                                .sort((e, t) => t.tweet.favorite_count - e.tweet.favorite_count)
                                .slice(0, 5)
                                .flatMap((e) => e.photos)
                                .filter(Boolean),
                            s = h()(o, "media_url_https").slice(0, 5),
                            i = s.map((e) => e.media_key).filter(Boolean);
                        return a.useMemo(() => s, [i.join(",")]);
                    })({ mediaIds: t }),
                    g = a.useRef(new r.Z.Value(e ? 0 : 1)).current,
                    [E, _] = a.useState([]),
                    [w, x] = a.useState(n),
                    [C, T] = a.useState((3 * n) / 4 + 16),
                    R = (0, s.LX)(),
                    P = (0, d.Z)(),
                    M = a.useRef(
                        (0, c.Z)((e) => {
                            ((e) => {
                                const t = (Math.min(e, p.vf) - (I + 1) * Z) / I;
                                x(t), T((3 * t) / 4 + 16);
                            })(e);
                        }, 300),
                    ).current,
                    D = a.useCallback(
                        (e) => {
                            if (!e) return M.cancel(), void i.Z.unobserveAll(e);
                            i.Z.observe(e, (e) => {
                                const t = e.contentRect.width;
                                M(t);
                            });
                        },
                        [M],
                    ),
                    L = a.useMemo(
                        () =>
                            (0, u.Z)((e) => {
                                _(e);
                            }, 1e3),
                        [_],
                    );
                a.useEffect(() => {
                    const e = l.map((e) => e.media_key);
                    return (
                        (e.length !== E.length || e.some((e, t) => e !== E[t])) && L(l),
                        () => {
                            L.clear();
                        }
                    );
                }, [l, E, L]);
                const A = (e) => (!Number.isFinite(e) || e < 16 ? 16 : e),
                    z = a.useRef(new r.Z.Value(A(C))).current;
                a.useEffect(() => {
                    const e = A(C);
                    e !== z._value && r.Z.spring(z, { toValue: e, friction: 30, tension: 300, duration: 150, useNativeDriver: !1 }).start();
                }, [C, z]),
                    a.useEffect(() => {
                        e && r.Z.timing(g, { toValue: 1, duration: 2e3, useNativeDriver: !1 }).start();
                    }, [g, e]);
                const B = a.useCallback(() => {
                    P.scribe({ element: "grok_search_tweet_media", action: "impression" });
                }, [P]);
                return a.createElement(r.Z.View, { ref: D, style: [S.container, { opacity: g, height: z, maxWidth: p.vf, width: "100%" }, R ? S.scrollContainer : null] }, a.createElement(m.D, { id: "grok_tweets_media_gallery", onFullyVisible: B, position: "bottom", testID: "grok_tweets_media_gallery" }), a.createElement(o.Z, { columnWrapperStyle: R ? void 0 : S.row, data: l, horizontal: R, key: `${l.length}-${R ? "1" : I}`, keyExtractor: (e) => e.media_key, numColumns: R ? 1 : I, renderItem: ({ index: e, item: t }) => a.createElement(v, { image: t, images: l, index: e, isMobileView: R, layout: { normalWidth: R ? k : w, containerHeight: C } }), scrollEnabled: R, scrollEventThrottle: 16, showsHorizontalScrollIndicator: !1 }));
            }
            const S = l.default.create((e) => ({ container: { flex: 1, justifyContent: "flex-start", paddingEnd: e.spaces.space16, paddingStart: e.spaces.space16, paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 }, row: { justifyContent: "flex-start", gap: e.spaces.space8, alignItems: "flex-start", marginBottom: e.spaces.space8 }, scrollContainer: { WebkitOverflowScrolling: "touch", scrollSnapType: "x mandatory" } }));
        },
        799027: (e, t, n) => {
            n.d(t, { i: () => F, Z: () => j });
            var a = n(207274),
                r = n(822343),
                o = n(202784),
                s = n(325686),
                i = n(10622),
                l = n.n(i),
                c = (n(585488), n(437429)),
                u = n.n(c),
                m = n(525271),
                d = n(731708),
                p = n(154003),
                g = n(392237),
                h = n(111677),
                f = n.n(h),
                y = n(306677),
                b = n(725516),
                E = n(623494),
                _ = n(970205),
                w = n(988290),
                x = (n(136728), n(107267)),
                v = n(370006),
                C = n(530732),
                k = n(530243),
                Z = n(207683);
            const I = f().d9d36880,
                T = f().g9677c6e;
            function S({ analytics: e, memoryConversation: t, onBack: n, onForget: a }) {
                const r = (0, x.useHistory)(),
                    [i, l] = o.useState(!1),
                    c = o.useCallback(() => {
                        l(!0);
                    }, []);
                return o.createElement(
                    s.Z,
                    { style: R.container },
                    o.createElement(
                        s.Z,
                        { style: R.headerContainer },
                        o.createElement(
                            s.Z,
                            { style: R.leftHeaderContainer },
                            o.createElement(v.Z, { onClick: n }),
                            o.createElement(
                                C.Z,
                                {
                                    onClick: () => {
                                        (0, E.qQ)(e, t.conversation_id), r.push(`/i/grok?conversation=${t.conversation_id}`);
                                    },
                                    style: R.conversationTitleContainer,
                                    withoutInteractiveStyles: !0,
                                },
                                ({ isHovered: e }) => o.createElement(s.Z, { style: [R.conversationTitleContainer, e ? R.hoveredConversationTitleContainer : void 0] }, o.createElement(s.Z, { style: R.conversationTitle }, o.createElement(d.ZP, { numberOfLines: 1, size: "headline2" }, t.conversation_title)), o.createElement(s.Z, { style: R.goToIconContainer }, o.createElement(k.default, { style: R.goToIcon }))),
                            ),
                        ),
                        o.createElement(p.ZP, { backgroundColor: "gray50", borderColor: "transparent", fontWeight: "normal", hoverLabel: { label: i ? T : I }, onClick: i ? a : c, type: i ? "destructiveFilled" : void 0 }, i ? T : I),
                    ),
                    !!t.conversation_summary && o.createElement(d.ZP, { size: "body", style: R.summary, weight: "normal" }, o.createElement(Z.GrokMarkdown, { isAnimated: !1, markdownText: t.conversation_summary })),
                );
            }
            const R = g.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space12, animationDuration: "0.3s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateX(30px)" }, "100%": { opacity: 1, transform: "translateX(0px)" } }], animationFillMode: "both" }, headerContainer: { width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space20 }, leftHeaderContainer: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, conversationTitleContainer: { maxWidth: "100%", flexGrow: 0, flexShrink: 1, display: "flex", flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderColor: "transparent", borderStyle: "solid", transition: "border-color 0.2s ease", cursor: "pointer", gap: e.spaces.space4 }, conversationTitle: { maxWidth: "100%", textOverflow: "ellipsis", overflow: "hidden", flexGrow: 0, flexShrink: 1 }, hoveredConversationTitleContainer: { borderColor: e.colors.brandColor }, goToIconContainer: { width: e.spaces.space16, height: e.spaces.space16 }, goToIcon: { width: "100%", height: "100%", transform: [{ scaleX: -1 }] }, summary: { marginTop: e.spaces.space16, width: "100%" } }));
            var P = n(757483),
                M = n(215337),
                D = n(207137);
            const L = f().g02dacc0,
                A = f().c6e845c0,
                z = [f().a5fa4a86, f().c51724a4, f().j244ceb2, f().b22b12e0, f().h3023cac, f().b10dbffa, f().c81da1b6, f().d4e4d3ce, f().c3418f9a, f().b64dada6, f().ad24ec20, f().c7902252];
            function B({ memoryConversation: e, onClick: t, style: n }) {
                const a = g.default.theme.colors.navigationBackground,
                    r = o.useCallback(() => [P.Z.hexToCss(a, 0), P.Z.hexToCss(a, 0.8), P.Z.hexToCss(a, 1)], [a]),
                    i = o.useMemo(() => {
                        if (!e.updated_at_sec) return "";
                        const t = new Date(1e3 * e.updated_at_sec);
                        if ((0, D.zk)(t)) return L;
                        if ((0, D.gO)(t)) return A;
                        return `${z[t.getMonth()]} ${t.getDate()}`;
                    }, [e.updated_at_sec]);
                return o.createElement(C.Z, { onClick: t, withoutInteractiveStyles: !0 }, ({ isHovered: t }) => o.createElement(s.Z, { style: [H.outerContainer, t ? H.outerHoveredContainer : void 0, n] }, o.createElement(s.Z, { style: H.container }, o.createElement(s.Z, { style: H.contentContainer }, o.createElement(s.Z, { style: H.headerContainer }, !!e.conversation_title && o.createElement(s.Z, { style: H.conversationTitleContainer }, o.createElement(d.ZP, { numberOfLines: 1, style: H.conversationTitle }, e.conversation_title)), !!i && o.createElement(s.Z, null, o.createElement(d.ZP, { numberOfLines: 1, style: H.date }, i))), !!e.conversation_summary && o.createElement(s.Z, { style: H.summaryContainer }, o.createElement(d.ZP, { size: "subtext2", weight: "normal" }, o.createElement(Z.GrokMarkdown, { isAnimated: !1, markdownText: e.conversation_summary }))))), o.createElement(M.Z, { colors: r(), style: [H.traceGradientBottom, t ? { height: "40%" } : void 0] })));
            }
            const H = g.default.create((e) => ({ outerContainer: { backgroundColor: "transparent", transition: "background-color 0.2s ease", width: "100%", cursor: "pointer", borderRadius: e.borderRadii.medium, position: "relative" }, outerHoveredContainer: { backgroundColor: e.colors.gray0 }, container: { padding: e.spaces.space12 }, contentContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8, flexShrink: 1 }, headerContainer: { width: "100%", maxWidth: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space8 }, conversationTitleContainer: { maxWidth: "100%", textOverflow: "ellipsis", overflow: "hidden", flexGrow: 0, flexShrink: 1 }, conversationTitle: {}, date: { fontSize: e.fontSizes.subtext1, color: e.colors.gray800 }, summaryContainer: { maxHeight: 80, overflow: "hidden" }, traceGradientBottom: { position: "absolute", width: "100%", height: "30%", transition: "height 0.2s ease", start: 0, bottom: 0, borderBottomStartRadius: e.borderRadii.medium, borderBottomEndRadius: e.borderRadii.medium } })),
                F = f().d700b268,
                W = f().cd7bdab2,
                V = f().f21b84de,
                O = f().gf5e9ea6,
                $ = 3e3,
                U = f().i52a9cb8,
                N = r.Z,
                Y = a.Z;
            function j({ memoryReferences: e, onDrawerDismiss: t }) {
                const { isCompactLayout: n, isGrokDrawer: a } = (0, w.ZP)(),
                    r = n && !a,
                    i = (0, b.z)(),
                    c = u()(),
                    g = o.useRef(null),
                    [h, f] = o.useState(!0),
                    [x, v] = o.useState([]),
                    [C, k] = o.useState(!1),
                    [Z, I] = o.useState(null),
                    [T, R] = o.useState(null);
                o.useEffect(() => {
                    l()(c, N, { conversation_ids: e.map((e) => e.conversation_id) })
                        .toPromise()
                        .then((e) => {
                            v(e?.get_grok_memory_related_conversations?.related_conversations || []), f(!1);
                        })
                        .catch(() => {
                            v([]), f(!1);
                        });
                }, [c, e]);
                const P = o.useCallback(() => {
                        (0, E.NH)(i);
                    }, [i]),
                    M = o.useCallback(
                        (e) => {
                            const t = { idx: e, memory: x[e] },
                                n = t.memory.conversation_id;
                            R(t),
                                v([...x.slice(0, e), ...x.slice(e + 1)]),
                                I(null),
                                k(!0),
                                (g.current = setTimeout(() => {
                                    k(!1),
                                        l()(c, Y, { conversation_ids: [n] })
                                            .toPromise()
                                            .then(() => {
                                                R(null);
                                            })
                                            .catch((e) => {
                                                (0, E.zX)(i, n, e.message);
                                            });
                                }, $)),
                                (0, E.UV)(i, n);
                        },
                        [x, c, i],
                    ),
                    D = o.useCallback(() => {
                        T && (k(!1), clearTimeout(g.current), v([...x.slice(0, T.idx), T.memory, ...x.slice(T.idx)]));
                    }, [T, x]);
                return o.createElement(
                    m.Z,
                    { align: "right", buttonType: "primaryText", onDismissed: t, style: G.drawer, subtitle: W, title: F },
                    o.createElement(
                        s.Z,
                        { style: [G.container, r ? G.compactContainer : void 0] },
                        o.createElement(y.D, { id: "grok_memory_drawer", onFullyVisible: P, position: "top", testID: "grok_memory_drawer" }),
                        null !== Z
                            ? o.createElement(S, { analytics: i, memoryConversation: x[Z], onBack: () => I(null), onForget: () => M(Z) })
                            : o.createElement(
                                  s.Z,
                                  { style: G.memoriesPreviewContainer },
                                  h
                                      ? o.createElement(s.Z, { style: G.spinnerContainer }, o.createElement(_.Z, null))
                                      : x.length > 0
                                        ? x.map((e, t) =>
                                              o.createElement(B, {
                                                  key: `${e.conversation_id}-${e.conversation_title?.length || ""}-${e.conversation_summary?.length || ""}`,
                                                  memoryConversation: e,
                                                  onClick: () => {
                                                      I(t), (0, E.zC)(i, x[t].conversation_id);
                                                  },
                                                  style: [G.memoryCard, { animationDelay: 0.02 * t + "s" }],
                                              }),
                                          )
                                        : o.createElement(d.ZP, { style: G.noMemoriesLabel }, U),
                              ),
                    ),
                    C && o.createElement(s.Z, { style: G.undoToastContainer }, o.createElement(s.Z, { style: [G.undoToast, { animationDuration: ($ - 500) / 1e3 + "s" }] }, o.createElement(d.ZP, null, V), o.createElement(p.ZP, { backgroundColor: "transparent", borderColor: "gray200", onClick: D, size: "small" }, O))),
                );
            }
            const G = g.default.create((e) => ({ drawer: { paddingTop: e.spaces.space16, position: "relative" }, container: { height: "100%", padding: e.spaces.space16, width: 500 }, compactContainer: { width: "100%" }, memoriesPreviewContainer: { width: "100%", display: "flex", flexDirection: "column", gap: e.spaces.space16 }, spinnerContainer: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }, pageSelector: { marginVertical: e.spaces.space12 }, memoryCard: { flex: 1, animationDuration: "0.3s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateX(-30px)" }, "100%": { opacity: 1, transform: "translateX(0px)" } }], animationFillMode: "both" }, undoToastContainer: { position: "fixed", bottom: e.spaces.space16, width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }, undoToast: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space16, padding: e.spaces.space16, backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.medium, animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(10px)" }, "10%": { opacity: 1, transform: "translateY(0px)" }, "90%": { opacity: 1, transform: "translateY(0px)" }, "100%": { opacity: 0, transform: "translateY(10px)" } }], animationFillMode: "both" }, noMemoriesLabel: { marginHorizontal: e.spaces.space4 } }));
        },
        674756: (e, t, n) => {
            n.d(t, { R: () => x });
            n(136728);
            var a = n(202784),
                r = n(325686),
                o = n(392237),
                s = n(111677),
                i = n.n(s),
                l = n(166852),
                c = n(916559),
                u = n(520595),
                m = n(154003),
                d = n(642153),
                p = n(731708);
            const g = ({ images: e, label: t, onClick: n, withAnimation: o }) => a.createElement(m.ZP, { backgroundColor: "transparent", borderColor: "gray200", hoverLabel: { label: t }, onClick: n, style: [h.button, o ? h.animation : void 0] }, a.createElement(r.Z, { style: h.container }, e.length > 0 ? a.createElement(d.Z, { userAvatarSize: "medium", userAvatarUrls: e.slice(0, 3), withIncreasedSpacing: e.length < 2 }) : null, a.createElement(p.ZP, { color: "gray900", size: "subtext1", weight: "normal" }, t))),
                h = o.default.create((e) => ({ button: { display: "flex", paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12 }, container: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, animation: { opacity: 1, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
            n(353644);
            var f = n(125363),
                y = n(836255),
                b = n(464023);
            n(263160);
            o.default.create((e) => ({ container: { width: "100%", flex: 1, maxHeight: "50%", padding: e.spaces.space16, justifyContent: "center", alignItems: "flex-start", borderRadius: e.borderRadii.large, overflow: "hidden", cursor: "pointer", gap: e.spaces.space8, backgroundColor: e.colors.gray50, transition: "background-color 0.5s" }, hovered: { backgroundColor: "light" === e.paletteName ? e.colors.gray300 : e.colors.gray200 } })), i().a3186bff, i().f9b2d343, o.default.create((e) => ({ container: { width: "100%", flexDirection: "row", maxWidth: b.vf, paddingHorizontal: e.spaces.space8, marginTop: e.spaces.space16, position: "relative", gap: e.spaces.space8 }, containerMobile: { zoom: 0.85, paddingHorizontal: e.spaces.space16 }, carouselWrapper: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large, overflow: "hidden", position: "relative", flex: 3 }, tweets: { width: "100%", position: "relative" }, tweet: { marginEnd: 0, width: "100%" }, seeAllButton: { flex: 1, width: 120, minWidth: 120, gap: e.spaces.space8, height: "100%" } }));
            function E({ postIds: e }) {
                const t = (0, f.oR)(),
                    n = e
                        .map((e) => y.Z.selectHydrated(t.getState(), e))
                        .filter(Boolean)
                        .map((e) => e.user.profile_image_url_https)
                        .filter(Boolean),
                    r = (0, l.Z)(n),
                    o = r.join("");
                return a.useMemo(() => r, [o]);
            }
            const _ = i().a3186bff,
                w = i().f9b2d343,
                x = a.memo(({ isAnimated: e, postIds: t, webResults: n }) => {
                    const [o, s] = a.useState(!1),
                        [i, m] = a.useState(!1),
                        d = a.useCallback(() => {
                            s(!0);
                        }, []),
                        p = a.useCallback(() => {
                            s(!1);
                        }, []),
                        h = a.useCallback(() => {
                            m(!0);
                        }, []),
                        f = a.useCallback(() => {
                            m(!1);
                        }, []),
                        y = E({ postIds: t }),
                        b = a.useMemo(() => (0, l.Z)(n.map((e) => e.favicon_base64 || e.favicon).filter(Boolean)), [n]),
                        x = a.useRef([]),
                        C = "postIds",
                        k = "webResults";
                    return (
                        t.length > 0 && !x.current.includes(C) && x.current.push(C),
                        n.length > 0 && !x.current.includes(k) && x.current.push(k),
                        a.createElement(
                            a.Fragment,
                            null,
                            a.createElement(
                                r.Z,
                                { style: v.container },
                                x.current.map((r) => (r === C ? a.createElement(g, { images: y, key: "post_ids_button", label: w({ count: t.length }), onClick: d, withAnimation: e }) : r === k ? a.createElement(g, { images: b, key: "web_results_button", label: _({ count: n.length }), onClick: h, withAnimation: e }) : void 0)),
                            ),
                            o ? a.createElement(u.a, { onDrawerDismiss: p, paginationOptions: { numResultsPerPage: 15 }, postIds: t }) : null,
                            i ? a.createElement(c.E, { onDrawerDismiss: f, paginationOptions: { numResultsPerPage: 25 }, webResults: n }) : null,
                        )
                    );
                }),
                v = o.default.create((e) => ({ container: { flexDirection: "row", gap: e.spaces.space8, justifyContent: "flex-start", alignItems: "stretch", flexWrap: "wrap" } }));
        },
        617568: (e, t, n) => {
            n.d(t, { w: () => y });
            n(136728), n(901951);
            var a = n(202784),
                r = n(719870),
                o = n(325686),
                s = n(731708),
                i = n(392237),
                l = n(187669),
                c = n(33474),
                u = n(342430),
                m = n(910594),
                d = n(978921),
                p = n(122670);
            function g({ children: e, token: t }) {
                if (e && e.length) return a.createElement(s.ZP, { color: "gray900", size: "subtext2", style: b.text }, e);
                const n = t.text?.replace(new RegExp("<br>", "g"), "\n") ?? "";
                return a.createElement(s.ZP, { color: "gray900", size: "subtext2", style: b.text }, n);
            }
            function h({ token: e }) {
                const t = a.useMemo(() => {
                    const t = [];
                    return (
                        e.tokens?.length &&
                            e.tokens.forEach((e, n) => {
                                const r = `${n}`;
                                t.push(a.createElement(h, { key: r, token: e }));
                            }),
                        t
                    );
                }, [e.tokens]);
                switch (e.type) {
                    case "link":
                        return a.createElement(m.Z, { token: e });
                    case "heading":
                        return a.createElement(c.X, { token: e }, t);
                    case "strong":
                        return a.createElement(s.ZP, { color: "gray900", size: "subtext2", weight: "bold" }, a.createElement(g, { token: e }, t));
                    case "blockLatex":
                        return a.createElement(u.Z, { content: e.text, isBlock: !0 });
                    case "inlineLatex":
                        return a.createElement(u.Z, { content: e.text });
                    default:
                        return a.createElement(g, { token: e }, t);
                }
            }
            function f({ blockSizes: e, index: t, last: n, setBlockHeight: s, text: i }) {
                const [l, c] = a.useState(-1),
                    u = a.useCallback(
                        ({ nativeEvent: e }) => {
                            const n = e.layout.height;
                            n !== l && (c(n), s(t, n));
                        },
                        [t, c, s, l],
                    ),
                    m = a.useMemo(() => {
                        let n = 0;
                        for (let a = 0; a < t; a++) (n += e[a] || 0), (n += 10);
                        return n;
                    }, [t, e]),
                    d = a.useMemo(() => {
                        return r.TU.lexer(((e = i), /^\s*[-*+]\s+/.test(e) ? e.replace(/^(\s*)[-*+]\s+/, "$1• ") : /^\s*\d+.\s+/.test(e) ? e.replace(/^(\s*)(\d+).\s+/, "$1$2 ") : e)).map((e, t) => a.createElement(h, { key: `parsedToken-${t}`, token: e }));
                        var e;
                    }, [i]);
                return a.createElement(o.Z, { onLayout: u, style: { width: "100%", top: m, position: "absolute", opacity: l >= 0 ? 1 : 0.1 } }, d);
            }
            function y({ charLimit: e, height: t, text: n }) {
                const r = a.useRef(0);
                (0, l.q)(() => {
                    r.current = Math.max(0, n.split("\n\n").length - 4);
                });
                const s = a.createRef(),
                    [i, c] = a.useState([]),
                    u = a.useRef({ curr: 0, currSmoothed: 0, target: 0, alpha: 0.01, beta: 0, velocity: 0, lastTimestamp: 0 }),
                    [m, d] = a.useState(t || 0),
                    p = a.useCallback(
                        ({ nativeEvent: e }) => {
                            const n = t || e.layout.height;
                            d(n), u.current.currSmoothed || (u.current.currSmoothed = 0.5 * n);
                        },
                        [d, t],
                    ),
                    g = a.useCallback(
                        (e, t) => {
                            c((n) => {
                                const a = [...n];
                                return (a[e] = t), a;
                            });
                        },
                        [c],
                    ),
                    h = a.useMemo(
                        () =>
                            n
                                .split("\n\n")
                                .slice(r.current)
                                .map((e, t) => ({ idx: t, blockText: e })),
                        [n],
                    ),
                    y = a.useMemo(() => {
                        const t = [];
                        let n = e || 1200,
                            a = h.length - 1;
                        const r = (function (e) {
                            const t = e.findIndex((e) => void 0 === e);
                            return -1 === t ? e.length : t;
                        })(i);
                        for (; a >= 0 && (n >= 0 || a >= r); ) t.unshift(h[a]), (n -= h[a].blockText.length), a--;
                        return t;
                    }, [h, i, e]),
                    b = n.length > 0;
                return (
                    a.useEffect(() => {
                        b && i.length && h.length && (u.current.target = i.reduce((e, t) => (e || 0) + (t || 0), 0) + 10 * h.length);
                    }, [h, b, i]),
                    a.useEffect(
                        (e) => {
                            let t,
                                n = !0;
                            return (
                                (t = requestAnimationFrame(function e(a) {
                                    const r = u.current;
                                    0 === r.lastTimestamp && (r.lastTimestamp = a);
                                    let o = Math.min(a - r.lastTimestamp, 100);
                                    o < 0.001 && (o = 0.001), (r.lastTimestamp = a);
                                    const i = r.curr + r.velocity * o,
                                        l = r.target - i;
                                    (r.curr = i + r.alpha * l), (r.velocity = r.velocity + (r.beta * l) / o);
                                    let c = Math.floor(-r.curr + 0.95 * m);
                                    const d = m ? Math.max(0, c / m) : 1;
                                    (c -= d * m * 0.7),
                                        (r.currSmoothed += (c - r.currSmoothed) / 30),
                                        s.current &&
                                            ((s.current.style.top = `${r.currSmoothed}px`),
                                            (s.current.style.filter = `blur(${2 * d}px)`),
                                            (s.current.style.opacity =
                                                "" +
                                                (1 -
                                                    (function (e, t, n) {
                                                        let a = Math.max(e, Math.min(t, n));
                                                        return (a = (a - e) / (t - e)), a * a * (3 - 2 * a);
                                                    })(0.5, 1, d)))),
                                        n && (t = requestAnimationFrame(e));
                                })),
                                () => {
                                    cancelAnimationFrame(t), (n = !1);
                                }
                            );
                        },
                        [s, m],
                    ),
                    a.createElement(o.Z, { onLayout: p, style: { flex: 1, overflow: "hidden" } }, a.createElement(o.Z, { ref: s, style: { paddingEnd: 12, position: "absolute", width: "95%" } }, y && y.map((e, t) => a.createElement(f, { blockSizes: i, index: e.idx, key: `block${e.idx}`, last: !1, setBlockHeight: g, text: e.blockText }))))
                );
            }
            r.TU.use({ extensions: [p._, ...d.Z] });
            const b = i.default.create((e) => ({ text: { lineHeight: e.lineHeights.subtext2 } }));
        },
        813107: (e, t, n) => {
            n.d(t, { I: () => c });
            var a = n(202784),
                r = n(325686),
                o = n(366635),
                s = n(392237),
                i = n(125363),
                l = n(919022);
            const c = ({ screenName: e }) => {
                    const t = (0, i.I0)(),
                        n = (0, i.v9)((t) => l.ZP.selectByScreenName(t, e));
                    return (
                        a.useEffect(() => {
                            t(l.ZP.fetchOneByScreenNameIfNeeded(e));
                        }, [t, e]),
                        n ? a.createElement(a.Fragment, null, a.createElement(r.Z, { style: u.container }, a.createElement(o.Z, { isVerified: n.is_blue_verified, name: n.name, profileImageUrl: n.profile_image_url_https, screenName: n.screen_name, withStackedLayout: !0 }))) : null
                    );
                },
                u = s.default.create((e) => ({ container: { flexDirection: "row", gap: e.spaces.space8, justifyContent: "flex-start", alignItems: "stretch", flexWrap: "wrap", paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space8, borderRadius: e.borderRadii.large, borderWidth: e.spaces.space1, borderColor: e.colors.gray200 }, header: { fontSize: e.fontSizes.body } }));
        },
        915066: (e, t, n) => {
            n.d(t, { U: () => p });
            var a = n(202784),
                r = n(325686),
                o = n(392237),
                s = n(952793),
                i = n(988290);
            n(543673), n(240753), n(128399), n(136728);
            const l = /^(https?:\/\/)(?:www\.)?(x|twitter)\.com\/([A-Za-z0-9_]+)\/status\/([0-9]+)/;
            function c(e, t, n, a, r, o) {
                const s = o || r ? 1 : 2,
                    { allowXPostEmbeds: i, allowYoutubeEmbeds: c } = a,
                    u = (function (e) {
                        const t = /\[.*?\]\((.*?)\)/g,
                            n = e.matchAll(t);
                        return Array.from(n, (e) => e[1]).filter((e) => {
                            try {
                                return new URL(e), !0;
                            } catch (e) {
                                return !1;
                            }
                        });
                    })(e),
                    m = [];
                if (c) {
                    u.filter((e) => {
                        const t = new URL(e);
                        return "www.youtube.com" === t.hostname && t.searchParams.get("v");
                    }).forEach((e) => {
                        const n = new URL(e),
                            a = n.searchParams.get("v"),
                            r = t.find((t) => t.url === e);
                        "www.youtube.com" === n.hostname && a && r && m.push(`https://www.youtube.com/embed/${a}`);
                    });
                }
                const d = [];
                if (i) {
                    u.filter((e) => l.test(e)).forEach((e) => {
                        const t = (function (e) {
                            try {
                                const t = e.match(l);
                                return t ? t[4] : null;
                            } catch (e) {
                                return null;
                            }
                        })(e);
                        t && n.includes(t) && !d.includes(t) && d.push(t);
                    });
                }
                return { embeddedYoutubeVideoURLs: m.slice(0, 1), embeddedPostIds: d.slice(0, s) };
            }
            var u = n(299631);
            const m = ({ style: e, url: t }) => a.createElement(r.Z, { style: d.embeddedYoutubeVideoContainer }, a.createElement("iframe", { allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: !0, height: "100%", referrerPolicy: "strict-origin-when-cross-origin", src: t, style: d.embeddedYoutubeVideo, title: "YouTube video player", width: "100%" })),
                d = o.default.create((e) => ({ embeddedYoutubeVideoContainer: { width: "100%", aspectRatio: 16 / 9, borderRadius: e.borderRadii.medium, overflow: "hidden" }, embeddedYoutubeVideo: { border: "none" } })),
                p = ({ postIds: e, response: t, style: n, webResults: o }) => {
                    const { isCompactLayout: l, isGrokDrawer: d } = (0, i.ZP)(),
                        p = (0, s.hC)("responsive_web_grok_allow_youtube_embeds"),
                        h = (0, s.hC)("responsive_web_grok_allow_x_post_embeds"),
                        f = a.useMemo(() => c(t, o, e, { allowXPostEmbeds: h, allowYoutubeEmbeds: p }, l, d), [t, o, e, h, p, l, d]);
                    return 0 === f.embeddedPostIds.length && 0 === f.embeddedYoutubeVideoURLs.length ? null : a.createElement(r.Z, { style: [g.container, n] }, h && f.embeddedPostIds.length > 0 && a.createElement(u.V, { postIds: f.embeddedPostIds, style: g.embeddedXPosts }), p && f.embeddedYoutubeVideoURLs.map((e) => a.createElement(m, { key: e, url: e })));
                },
                g = o.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space12 }, embeddedXPosts: { width: "100%" } }));
        },
        263160: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                r = n(392237),
                o = n(370751),
                s = n(725516),
                i = n(623494);
            function l() {
                const e = a.useRef((0, o.Z)([])),
                    t = (0, s.z)();
                return a.useMemo(
                    () => ({
                        buttonsContainerStyle: c.buttonsContainer,
                        navButtonStyle: c.navButtons,
                        onVisibleRangeChange: ({ index: n, intersectionRatio: a }) => {
                            if (1 !== a) return;
                            if (0 === n) return;
                            const r = e.current;
                            r.has(n) || ((0, i.hf)(t, n), r.add(n));
                        },
                    }),
                    [t],
                );
            }
            const c = r.default.create((e) => ({ buttonsContainer: {}, navButtons: {} }));
        },
        819102: (e, t, n) => {
            n.d(t, { u: () => o });
            var a = n(202784);
            const r = 2;
            function o(e, t) {
                const n = a.useRef(),
                    [o, i] = a.useState(!1);
                let l = e;
                if (t && o) {
                    const t = s(e);
                    t > -1 && (l = e.substring(0, t));
                }
                return (
                    a.useEffect(() => {
                        t &&
                            (i(!0),
                            n.current && clearTimeout(n.current),
                            (n.current = window.setTimeout(() => {
                                i(!1);
                            }, 1e3 * r)));
                    }, [t, l]),
                    l
                );
            }
            const s = (e) => {
                let t = -1;
                (e.match(/\*\*/g) ?? []).length % 2 == 1 && (t = e.lastIndexOf("**"));
                let n = -1;
                const a = e.lastIndexOf("[](");
                a > e.lastIndexOf(")") && (n = a);
                let r = -1;
                const o = e.lastIndexOf("\\[");
                o > e.lastIndexOf("]") && (r = o);
                let s = -1;
                const i = e.lastIndexOf("\\(");
                i > e.lastIndexOf("\\)") && (s = i);
                let l = -1;
                const c = e.lastIndexOf("\n"),
                    u = e.substring(c).trim();
                (u.startsWith("-") || 0 === u.length) && (l = c);
                let m = -1;
                /^\d+\.?/.test(u) && (m = c);
                const d = [t, r, s, l, m, n].filter((t) => -1 !== t && t > e.length - 100);
                return 0 === d.length ? e.length : Math.min(...d);
            };
        },
        413145: (e, t, n) => {
            n.d(t, { y: () => C });
            var a = n(202784),
                r = n(325686),
                o = n(721266),
                s = n(392237),
                i = n(323265),
                l = n(125363),
                c = n(389071),
                u = n(189953),
                m = n(654917),
                d = n(730372),
                p = n(293115),
                g = n(725405),
                h = n(155918),
                f = n(919022),
                y = n(464023),
                b = n(22463),
                E = n(667945),
                _ = n(848957);
            const w = s.default.create((e) => ({ container: { width: "100%", alignItems: "center" } })),
                x = function ({ analysisEntityId: e, containerRef: t, conversationKey: n, id: o, isLastResponse: s, isLoading: i, onLayout: u }) {
                    const m = (0, c.bD)(n),
                        d = (0, g.Z)(),
                        x = (0, l.v9)((e) => m?.selectUsingExperiment(e)),
                        v = (0, l.v9)((e) => m?.selectExperiments(e)),
                        C = (0, l.v9)((e) => m.selectMessageById(e, o, !1)),
                        k = (0, l.v9)((e) => m?.selectConversationId(e)) ?? "",
                        Z = (0, l.v9)((e) => m.selectMessageById(e, o, !0)),
                        I = (0, l.v9)((e) => m.selectPromptSourceForMessageId(e, o)),
                        T = (0, l.v9)(f.ZP.selectViewerUser),
                        S = (0, l.v9)((e) => f.ZP.select(e, y.c0)),
                        R = C?.sender === h.CI.ASSISTANT,
                        P = R ? S : T,
                        M = a.useMemo(() => C?.bannerMessages ?? [], [C?.bannerMessages]),
                        D = a.useMemo(() => ({ grok_details: { ...(d.contextualScribeData.grok_details ?? {}), chat_item_id: C?.agentChatItemId } }), [d, C?.agentChatItemId]);
                    return T && C && P ? (x && R && (C?.message === (v[0]?.message ?? null) || null == o) ? a.createElement(r.Z, { onLayout: u, ref: t, style: w.container }, a.createElement(p.nO, { data: D }, a.createElement(_.Z, { conversationId: k, grokModule: m, isLoading: i, message1: v[0] ?? C, message2: v[1] ?? Z }))) : a.createElement(r.Z, { onLayout: u, ref: t, style: w.container }, R ? a.createElement(p.nO, { data: D }, a.createElement(E.Z, { analysisEntityId: e, bannerMessages: M, cardAttachments: C.cardAttachments, chatItemId: C.agentChatItemId, chatResponseAnnotations: C.chatResponseAnnotations, citedWebResults: C.citedWebResults, conversationKey: n, disclaimer: C.disclaimer, expectedImageAspectRatio: C.expectedImageAspectRatio, fileAttachments: C.fileAttachments, followUpSuggestedMode: C.followUpSuggestedMode, id: o, intermediateImageResults: C.intermediateImageResults, isAborted: C.isAborted, isDeleted: C.isDeleted, isLastResponse: s, isLoading: i, isPastThinkingTrace: C.isPastThinkingTrace, mediaTweetIds: C.xMediaPostIds, memoryReferences: C.memoryReferences, messageStepAccumulator: C.messageStepAccumulator, performanceMetrics: C.performanceMetrics, promptSource: I, query: C.query, reasoningLayout: C.uiLayout?.reasoningUILayout, sender: C.sender, text: C.message, trace: C.thinkingTrace, tweetIds: C.postIds, upsell: C.upsell, userChatItemId: C.userChatItemId || "", webResults: C.webResults })) : a.createElement(b.Z, { bannerMessages: M, conversationKey: n, fileAttachments: C.fileAttachments, hideAttachments: C.hideAttachments, id: o, isDeepsearch: C.isDeepsearch, isReasoning: C.isReasoning, text: C.message, user: { profile_image_shape: P.profile_image_shape, profile_image_url_https: P.profile_image_url_https } }))) : null;
                };
            var v = n(988290);
            const C = ({ contentPadding: e }) => {
                    const { analysisEntityId: t, conversationKey: n, messageIds: s, status: p } = (0, m.ZP)(),
                        { isPagedScroll: g, scrollable: h } = (0, v.ZP)(),
                        f = (0, c.bD)(n),
                        y = (0, l.v9)(f.selectEditingMessage);
                    (0, d.$E)();
                    const b = a.useMemo(() => (p !== u.Q_.IDLE ? [...s, null] : s), [p, s]),
                        E = i.ZP.isWebView(),
                        _ = a.useRef(0);
                    a.useEffect(() => {
                        const e = () => {
                            const e = h ? (h === window ? window.innerHeight : h.scrollHeight) : 0;
                            _.current = Math.max(e, _.current);
                        };
                        return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e);
                    }, [h]);
                    const w = p === u.Q_.IDLE ? void 0 : b[b.length - 2],
                        C = a.useRef(),
                        [Z, I] = a.useState(!1),
                        [T, S] = a.useState(0);
                    a.useLayoutEffect(() => {
                        if (!Z || (!y && w && g && T > 0)) {
                            I(!0);
                            const e = h === window ? document.body.scrollHeight : h?.scrollHeight;
                            h?.scroll({ top: e, behavior: "smooth" });
                        }
                    }, [w, y, Z, g, T, h]);
                    const R = a.useCallback(
                            (t) => {
                                const n = t.nativeEvent.layout.height;
                                let a = h === window ? h.innerHeight : (h?.clientHeight ?? 0);
                                E && (a = Math.max(_.current, a));
                                const r = n > 0.6 * a ? Math.max(0, a - e - 50) : Math.max(0, a - n - e);
                                S(r);
                            },
                            [h, E, e],
                        ),
                        P = a.useMemo(() => ({ minHeight: g ? T : 0 }), [T, g]),
                        M = a.useCallback(
                            ({ index: e, item: o }) => {
                                const s = b.length,
                                    i = o === w;
                                return i || e < s - 1 ? a.createElement(r.Z, { key: `message_${e}` }, a.createElement(x, { analysisEntityId: t, conversationKey: n, id: o, onLayout: i ? R : void 0 })) : a.createElement(r.Z, { key: `message_${e}`, style: [k.lastResponse, P] }, a.createElement(x, { analysisEntityId: t, conversationKey: n, id: o, isLastResponse: !0, isLoading: p === u.Q_.TYPING || p === u.Q_.WAITING }));
                            },
                            [w, n, P, t, R, p, b],
                        );
                    return a.createElement(
                        r.Z,
                        { ref: C, style: [k.content, g ? void 0 : k.bottomScroll] },
                        a.createElement(o.Z, { size: "space8" }),
                        a.createElement(
                            r.Z,
                            { style: { flexDirection: "column" } },
                            a.createElement(o.Z, { size: "space12" }),
                            b.map((e, t) => M({ item: e, index: t })),
                        ),
                    );
                },
                k = s.default.create((e) => ({ lastResponse: { width: "100%" }, content: { flexGrow: "1" }, bottomScroll: { overflow: "auto", flexDirection: "column-reverse", height: "fit-content", maxHeight: "100%", borderWidth: 15, borderColor: "green" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-7a6ce5c4.3caa0c5a.js.map

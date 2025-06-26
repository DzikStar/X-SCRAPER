"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-7a6ce5c4"],
    {
        986274: (e, t, n) => {
            n.d(t, { E: () => i });
            var a = n(202784),
                r = n(325686),
                o = n(731708),
                s = n(392237);
            const i = ({ performanceMetrics: e, userChatItemId: t }) => {
                    const [n, s] = a.useState(void 0),
                        { timeToCompletion: i, timeToFirstChunkMs: c, timeToFirstTextMs: d, traceId: m } = e;
                    return void 0 === n ? a.createElement(r.Z, { style: l.container }, d ? a.createElement(o.ZP, { onClick: () => s(!0), style: l.showDebugLink }, (d / 1e3).toString(), "s") : a.createElement(o.ZP, { onClick: () => s(!1), style: l.showDebugLink }, "Debug")) : !1 === n ? null : a.createElement(r.Z, { style: l.container }, a.createElement(o.ZP, { style: l.text }, "Debug / Performance"), m ? a.createElement(o.ZP, { style: l.text }, "Trace ID: ", m) : null, t ? a.createElement(o.ZP, { style: l.text }, "Item ID: ", t) : null, c ? a.createElement(o.ZP, { style: l.text }, "Time to first chunk: ", (c / 1e3).toString(), "s") : null, d ? a.createElement(o.ZP, { style: l.text }, "Time to first text: ", (d / 1e3).toString(), "s") : null, i ? a.createElement(o.ZP, { style: l.text }, "Time to completion: ", (i / 1e3).toString(), "s") : null, a.createElement(o.ZP, { onClick: () => s(!1), style: l.showDebugLink }, "hide this"));
                },
                l = s.default.create((e) => ({ container: { marginStart: e.spaces.space8, alignItems: "flex-start", justifyContent: "flex-start" }, text: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 }, showDebugLink: { cursor: "pointer", width: "fit-content", color: e.colors.gray700, fontSize: e.fontSizes.subtext1, borderBottomColor: e.colors.gray100, borderBottomStyle: "dotted", borderBottomWidth: e.spaces.space1 } }));
        },
        917118: (e, t, n) => {
            n.d(t, { e: () => S });
            var a = n(202784),
                r = n(744610),
                o = n(555874),
                s = n(67369),
                i = n(666305),
                l = n(392237),
                c = n(2138),
                d = n(666536),
                m = n(306677),
                u = n(725405),
                p = n(464023),
                g = n(984636),
                h = n.n(g),
                f = n(166852),
                y = n(125363),
                b = n(836255);
            n(136728);
            var w = n(325686),
                v = n(107267),
                x = n(530732),
                E = n(992942);
            function k({ image: e, images: t, index: n, isMobileView: r, layout: o }) {
                const s = (0, v.useHistory)(),
                    i = (0, u.Z)(),
                    l = o.normalWidth,
                    c = (3 * l) / 4,
                    d = a.useCallback(() => ({ width: l, height: c, zIndex: 20, marginRight: r && n !== t.length - 1 ? 8 : 0 }), [c, l, t.length, n, r]),
                    m =
                        e &&
                        (function (e) {
                            return e && e.original_info ? { url: e.media_url_https, width: e.original_info.width, height: e.original_info.height } : void 0;
                        })(e),
                    p = a.useCallback(() => {
                        i.scribe({ element: "grok_search_summary_view_image_modal", action: "click" }), s.push({ pathname: "/i/grok/media", state: { file: m } });
                    }, [i, s, m]);
                return a.createElement(w.Z, { style: d() }, e.media_url_https ? a.createElement(x.Z, { onClick: p, style: [C.imageContainer, { width: l, height: c }] }, a.createElement(E.Z, { source: { uri: e.media_url_https }, style: C.image })) : null);
            }
            const C = l.default.create((e) => ({ imageContainer: { borderRadius: e.borderRadii.large, marginStart: 0, marginBottom: e.spaces.space4, overflow: "hidden", zIndex: 100 }, image: { width: "100%", height: "100%" } })),
                _ = 150,
                Z = 6,
                I = 5;
            function S({ isAnimated: e, mediaIds: t }) {
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
                    [w, v] = a.useState([]),
                    [x, E] = a.useState(n),
                    [C, S] = a.useState((3 * n) / 4 + 16),
                    T = (0, s.LX)(),
                    M = (0, u.Z)(),
                    P = a.useRef(
                        (0, c.Z)((e) => {
                            ((e) => {
                                const t = (Math.min(e, p.vf) - (I + 1) * Z) / I;
                                E(t), S((3 * t) / 4 + 16);
                            })(e);
                        }, 300),
                    ).current,
                    D = a.useCallback(
                        (e) => {
                            if (!e) return P.cancel(), void i.Z.unobserveAll(e);
                            i.Z.observe(e, (e) => {
                                const t = e.contentRect.width;
                                P(t);
                            });
                        },
                        [P],
                    ),
                    L = a.useMemo(
                        () =>
                            (0, d.Z)((e) => {
                                v(e);
                            }, 1e3),
                        [v],
                    );
                a.useEffect(() => {
                    const e = l.map((e) => e.media_key);
                    return (
                        (e.length !== w.length || e.some((e, t) => e !== w[t])) && L(l),
                        () => {
                            L.clear();
                        }
                    );
                }, [l, w, L]);
                const z = (e) => (!Number.isFinite(e) || e < 16 ? 16 : e),
                    A = a.useRef(new r.Z.Value(z(C))).current;
                a.useEffect(() => {
                    const e = z(C);
                    e !== A._value && r.Z.spring(A, { toValue: e, friction: 30, tension: 300, duration: 150, useNativeDriver: !1 }).start();
                }, [C, A]),
                    a.useEffect(() => {
                        e && r.Z.timing(g, { toValue: 1, duration: 2e3, useNativeDriver: !1 }).start();
                    }, [g, e]);
                const H = a.useCallback(() => {
                    M.scribe({ element: "grok_search_tweet_media", action: "impression" });
                }, [M]);
                return a.createElement(r.Z.View, { ref: D, style: [R.container, { opacity: g, height: A, maxWidth: p.vf, width: "100%" }, T ? R.scrollContainer : null] }, a.createElement(m.D, { id: "grok_tweets_media_gallery", onFullyVisible: H, position: "bottom", testID: "grok_tweets_media_gallery" }), a.createElement(o.Z, { columnWrapperStyle: T ? void 0 : R.row, data: l, horizontal: T, key: `${l.length}-${T ? "1" : I}`, keyExtractor: (e) => e.media_key, numColumns: T ? 1 : I, renderItem: ({ index: e, item: t }) => a.createElement(k, { image: t, images: l, index: e, isMobileView: T, layout: { normalWidth: T ? _ : x, containerHeight: C } }), scrollEnabled: T, scrollEventThrottle: 16, showsHorizontalScrollIndicator: !1 }));
            }
            const R = l.default.create((e) => ({ container: { flex: 1, justifyContent: "flex-start", paddingEnd: e.spaces.space16, paddingStart: e.spaces.space16, paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 }, row: { justifyContent: "flex-start", gap: e.spaces.space8, alignItems: "flex-start", marginBottom: e.spaces.space8 }, scrollContainer: { WebkitOverflowScrolling: "touch", scrollSnapType: "x mandatory" } }));
        },
        799027: (e, t, n) => {
            n.d(t, { i: () => W, Z: () => G });
            var a = n(207274),
                r = n(822343),
                o = n(202784),
                s = n(325686),
                i = n(10622),
                l = n.n(i),
                c = (n(585488), n(437429)),
                d = n.n(c),
                m = n(525271),
                u = n(731708),
                p = n(154003),
                g = n(392237),
                h = n(111677),
                f = n.n(h),
                y = n(306677),
                b = n(725516),
                w = n(623494),
                v = n(970205),
                x = n(988290),
                E = (n(136728), n(107267)),
                k = n(370006),
                C = n(530732),
                _ = n(530243),
                Z = n(207683);
            const I = f().d9d36880,
                S = f().g9677c6e;
            function R({ analytics: e, memoryConversation: t, onBack: n, onForget: a }) {
                const r = (0, E.useHistory)(),
                    [i, l] = o.useState(!1),
                    c = o.useCallback(() => {
                        l(!0);
                    }, []);
                return o.createElement(
                    s.Z,
                    { style: T.container },
                    o.createElement(
                        s.Z,
                        { style: T.headerContainer },
                        o.createElement(
                            s.Z,
                            { style: T.leftHeaderContainer },
                            o.createElement(k.Z, { onClick: n }),
                            o.createElement(
                                C.Z,
                                {
                                    onClick: () => {
                                        (0, w.qQ)(e, t.conversation_id), r.push(`/i/grok?conversation=${t.conversation_id}`);
                                    },
                                    style: T.conversationTitleContainer,
                                    withoutInteractiveStyles: !0,
                                },
                                ({ isHovered: e }) => o.createElement(s.Z, { style: [T.conversationTitleContainer, e ? T.hoveredConversationTitleContainer : void 0] }, o.createElement(s.Z, { style: T.conversationTitle }, o.createElement(u.ZP, { numberOfLines: 1, size: "headline2" }, t.conversation_title)), o.createElement(s.Z, { style: T.goToIconContainer }, o.createElement(_.default, { style: T.goToIcon }))),
                            ),
                        ),
                        o.createElement(p.ZP, { backgroundColor: "gray50", borderColor: "transparent", fontWeight: "normal", hoverLabel: { label: i ? S : I }, onClick: i ? a : c, type: i ? "destructiveFilled" : void 0 }, i ? S : I),
                    ),
                    !!t.conversation_summary && o.createElement(u.ZP, { size: "body", style: T.summary, weight: "normal" }, o.createElement(Z.GrokMarkdown, { isAnimated: !1, markdownText: t.conversation_summary })),
                );
            }
            const T = g.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space12, animationDuration: "0.3s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateX(30px)" }, "100%": { opacity: 1, transform: "translateX(0px)" } }], animationFillMode: "both" }, headerContainer: { width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space20 }, leftHeaderContainer: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, conversationTitleContainer: { maxWidth: "100%", flexGrow: 0, flexShrink: 1, display: "flex", flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderColor: "transparent", borderStyle: "solid", transition: "border-color 0.2s ease", cursor: "pointer", gap: e.spaces.space4 }, conversationTitle: { maxWidth: "100%", textOverflow: "ellipsis", overflow: "hidden", flexGrow: 0, flexShrink: 1 }, hoveredConversationTitleContainer: { borderColor: e.colors.brandColor }, goToIconContainer: { width: e.spaces.space16, height: e.spaces.space16 }, goToIcon: { width: "100%", height: "100%", transform: [{ scaleX: -1 }] }, summary: { marginTop: e.spaces.space16, width: "100%" } }));
            var M = n(757483),
                P = n(215337),
                D = n(207137);
            const L = f().g02dacc0,
                z = f().c6e845c0,
                A = [f().a5fa4a86, f().c51724a4, f().j244ceb2, f().b22b12e0, f().h3023cac, f().b10dbffa, f().c81da1b6, f().d4e4d3ce, f().c3418f9a, f().b64dada6, f().ad24ec20, f().c7902252];
            function H({ memoryConversation: e, onClick: t, style: n }) {
                const a = g.default.theme.colors.navigationBackground,
                    r = o.useCallback(() => [M.Z.hexToCss(a, 0), M.Z.hexToCss(a, 0.8), M.Z.hexToCss(a, 1)], [a]),
                    i = o.useMemo(() => {
                        if (!e.updated_at_sec) return "";
                        const t = new Date(1e3 * e.updated_at_sec);
                        if ((0, D.zk)(t)) return L;
                        if ((0, D.gO)(t)) return z;
                        return `${A[t.getMonth()]} ${t.getDate()}`;
                    }, [e.updated_at_sec]);
                return o.createElement(C.Z, { onClick: t, withoutInteractiveStyles: !0 }, ({ isHovered: t }) => o.createElement(s.Z, { style: [B.outerContainer, t ? B.outerHoveredContainer : void 0, n] }, o.createElement(s.Z, { style: B.container }, o.createElement(s.Z, { style: B.contentContainer }, o.createElement(s.Z, { style: B.headerContainer }, !!e.conversation_title && o.createElement(s.Z, { style: B.conversationTitleContainer }, o.createElement(u.ZP, { numberOfLines: 1, style: B.conversationTitle }, e.conversation_title)), !!i && o.createElement(s.Z, null, o.createElement(u.ZP, { numberOfLines: 1, style: B.date }, i))), !!e.conversation_summary && o.createElement(s.Z, { style: B.summaryContainer }, o.createElement(u.ZP, { size: "subtext2", weight: "normal" }, o.createElement(Z.GrokMarkdown, { isAnimated: !1, markdownText: e.conversation_summary }))))), o.createElement(P.Z, { colors: r(), style: [B.traceGradientBottom, t ? { height: "40%" } : void 0] })));
            }
            const B = g.default.create((e) => ({ outerContainer: { backgroundColor: "transparent", transition: "background-color 0.2s ease", width: "100%", cursor: "pointer", borderRadius: e.borderRadii.medium, position: "relative" }, outerHoveredContainer: { backgroundColor: e.colors.gray0 }, container: { padding: e.spaces.space12 }, contentContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8, flexShrink: 1 }, headerContainer: { width: "100%", maxWidth: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space8 }, conversationTitleContainer: { maxWidth: "100%", textOverflow: "ellipsis", overflow: "hidden", flexGrow: 0, flexShrink: 1 }, conversationTitle: {}, date: { fontSize: e.fontSizes.subtext1, color: e.colors.gray800 }, summaryContainer: { maxHeight: 80, overflow: "hidden" }, traceGradientBottom: { position: "absolute", width: "100%", height: "30%", transition: "height 0.2s ease", start: 0, bottom: 0, borderBottomStartRadius: e.borderRadii.medium, borderBottomEndRadius: e.borderRadii.medium } })),
                W = f().d700b268,
                V = f().cd7bdab2,
                F = f().f21b84de,
                $ = f().gf5e9ea6,
                O = 3e3,
                U = f().i52a9cb8,
                Y = r.Z,
                j = a.Z;
            function G({ memoryReferences: e, onDrawerDismiss: t }) {
                const { isCompactLayout: n, isGrokDrawer: a } = (0, x.ZP)(),
                    r = n && !a,
                    i = (0, b.z)(),
                    c = d()(),
                    g = o.useRef(null),
                    [h, f] = o.useState(!0),
                    [E, k] = o.useState([]),
                    [C, _] = o.useState(!1),
                    [Z, I] = o.useState(null),
                    [S, T] = o.useState(null);
                o.useEffect(() => {
                    l()(c, Y, { conversation_ids: e.map((e) => e.conversation_id) })
                        .toPromise()
                        .then((e) => {
                            k(e?.get_grok_memory_related_conversations?.related_conversations || []), f(!1);
                        })
                        .catch(() => {
                            k([]), f(!1);
                        });
                }, [c, e]);
                const M = o.useCallback(() => {
                        (0, w.NH)(i);
                    }, [i]),
                    P = o.useCallback(
                        (e) => {
                            const t = { idx: e, memory: E[e] },
                                n = t.memory.conversation_id;
                            T(t),
                                k([...E.slice(0, e), ...E.slice(e + 1)]),
                                I(null),
                                _(!0),
                                (g.current = setTimeout(() => {
                                    _(!1),
                                        l()(c, j, { conversation_ids: [n] })
                                            .toPromise()
                                            .then(() => {
                                                T(null);
                                            })
                                            .catch((e) => {
                                                (0, w.zX)(i, n, e.message);
                                            });
                                }, O)),
                                (0, w.UV)(i, n);
                        },
                        [E, c, i],
                    ),
                    D = o.useCallback(() => {
                        S && (_(!1), clearTimeout(g.current), k([...E.slice(0, S.idx), S.memory, ...E.slice(S.idx)]));
                    }, [S, E]);
                return o.createElement(
                    m.Z,
                    { align: "right", buttonType: "primaryText", onDismissed: t, style: N.drawer, subtitle: V, title: W },
                    o.createElement(
                        s.Z,
                        { style: [N.container, r ? N.compactContainer : void 0] },
                        o.createElement(y.D, { id: "grok_memory_drawer", onFullyVisible: M, position: "top", testID: "grok_memory_drawer" }),
                        null !== Z
                            ? o.createElement(R, { analytics: i, memoryConversation: E[Z], onBack: () => I(null), onForget: () => P(Z) })
                            : o.createElement(
                                  s.Z,
                                  { style: N.memoriesPreviewContainer },
                                  h
                                      ? o.createElement(s.Z, { style: N.spinnerContainer }, o.createElement(v.Z, null))
                                      : E.length > 0
                                        ? E.map((e, t) =>
                                              o.createElement(H, {
                                                  key: `${e.conversation_id}-${e.conversation_title?.length || ""}-${e.conversation_summary?.length || ""}`,
                                                  memoryConversation: e,
                                                  onClick: () => {
                                                      I(t), (0, w.zC)(i, E[t].conversation_id);
                                                  },
                                                  style: [N.memoryCard, { animationDelay: 0.02 * t + "s" }],
                                              }),
                                          )
                                        : o.createElement(u.ZP, { style: N.noMemoriesLabel }, U),
                              ),
                    ),
                    C && o.createElement(s.Z, { style: N.undoToastContainer }, o.createElement(s.Z, { style: [N.undoToast, { animationDuration: (O - 500) / 1e3 + "s" }] }, o.createElement(u.ZP, null, F), o.createElement(p.ZP, { backgroundColor: "transparent", borderColor: "gray200", onClick: D, size: "small" }, $))),
                );
            }
            const N = g.default.create((e) => ({ drawer: { paddingTop: e.spaces.space16, position: "relative" }, container: { height: "100%", padding: e.spaces.space16, width: 500 }, compactContainer: { width: "100%" }, memoriesPreviewContainer: { width: "100%", display: "flex", flexDirection: "column", gap: e.spaces.space16 }, spinnerContainer: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }, pageSelector: { marginVertical: e.spaces.space12 }, memoryCard: { flex: 1, animationDuration: "0.3s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateX(-30px)" }, "100%": { opacity: 1, transform: "translateX(0px)" } }], animationFillMode: "both" }, undoToastContainer: { position: "fixed", bottom: e.spaces.space16, width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }, undoToast: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space16, padding: e.spaces.space16, backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.medium, animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(10px)" }, "10%": { opacity: 1, transform: "translateY(0px)" }, "90%": { opacity: 1, transform: "translateY(0px)" }, "100%": { opacity: 0, transform: "translateY(10px)" } }], animationFillMode: "both" }, noMemoriesLabel: { marginHorizontal: e.spaces.space4 } }));
        },
        674756: (e, t, n) => {
            n.d(t, { R: () => E });
            n(136728);
            var a = n(202784),
                r = n(325686),
                o = n(392237),
                s = n(111677),
                i = n.n(s),
                l = n(166852),
                c = n(916559),
                d = n(520595),
                m = n(154003),
                u = n(642153),
                p = n(731708);
            const g = ({ images: e, label: t, onClick: n, withAnimation: o }) => a.createElement(m.ZP, { backgroundColor: "transparent", borderColor: "gray200", hoverLabel: { label: t }, onClick: n, style: [h.button, o ? h.animation : void 0] }, a.createElement(r.Z, { style: h.container }, e.length > 0 ? a.createElement(u.Z, { userAvatarSize: "medium", userAvatarUrls: e.slice(0, 3), withIncreasedSpacing: e.length < 2 }) : null, a.createElement(p.ZP, { color: "gray900", size: "subtext1", weight: "normal" }, t))),
                h = o.default.create((e) => ({ button: { display: "flex", paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12 }, container: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, animation: { opacity: 1, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
            n(353644);
            var f = n(125363),
                y = n(836255),
                b = n(464023);
            n(263160);
            o.default.create((e) => ({ container: { width: "100%", flex: 1, maxHeight: "50%", padding: e.spaces.space16, justifyContent: "center", alignItems: "flex-start", borderRadius: e.borderRadii.large, overflow: "hidden", cursor: "pointer", gap: e.spaces.space8, backgroundColor: e.colors.gray50, transition: "background-color 0.5s" }, hovered: { backgroundColor: "light" === e.paletteName ? e.colors.gray300 : e.colors.gray200 } })), i().a3186bff, i().f9b2d343, o.default.create((e) => ({ container: { width: "100%", flexDirection: "row", maxWidth: b.vf, paddingHorizontal: e.spaces.space8, marginTop: e.spaces.space16, position: "relative", gap: e.spaces.space8 }, containerMobile: { zoom: 0.85, paddingHorizontal: e.spaces.space16 }, carouselWrapper: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large, overflow: "hidden", position: "relative", flex: 3 }, tweets: { width: "100%", position: "relative" }, tweet: { marginEnd: 0, width: "100%" }, seeAllButton: { flex: 1, width: 120, minWidth: 120, gap: e.spaces.space8, height: "100%" } }));
            function w({ postIds: e }) {
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
            const v = i().a3186bff,
                x = i().f9b2d343,
                E = a.memo(({ isAnimated: e, postIds: t, webResults: n }) => {
                    const [o, s] = a.useState(!1),
                        [i, m] = a.useState(!1),
                        u = a.useCallback(() => {
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
                        y = w({ postIds: t }),
                        b = a.useMemo(() => (0, l.Z)(n.map((e) => e.favicon_base64 || e.favicon).filter(Boolean)), [n]),
                        E = a.useRef([]),
                        C = "postIds",
                        _ = "webResults";
                    return (
                        t.length > 0 && !E.current.includes(C) && E.current.push(C),
                        n.length > 0 && !E.current.includes(_) && E.current.push(_),
                        a.createElement(
                            a.Fragment,
                            null,
                            a.createElement(
                                r.Z,
                                { style: k.container },
                                E.current.map((r) => (r === C ? a.createElement(g, { images: y, key: "post_ids_button", label: x({ count: t.length }), onClick: u, withAnimation: e }) : r === _ ? a.createElement(g, { images: b, key: "web_results_button", label: v({ count: n.length }), onClick: h, withAnimation: e }) : void 0)),
                            ),
                            o ? a.createElement(d.a, { onDrawerDismiss: p, paginationOptions: { numResultsPerPage: 15 }, postIds: t }) : null,
                            i ? a.createElement(c.E, { onDrawerDismiss: f, paginationOptions: { numResultsPerPage: 25 }, webResults: n }) : null,
                        )
                    );
                }),
                k = o.default.create((e) => ({ container: { flexDirection: "row", gap: e.spaces.space8, justifyContent: "flex-start", alignItems: "stretch", flexWrap: "wrap" } }));
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
                d = n(342430),
                m = n(910594),
                u = n(978921),
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
                        return a.createElement(d.Z, { content: e.text, isBlock: !0 });
                    case "inlineLatex":
                        return a.createElement(d.Z, { content: e.text });
                    default:
                        return a.createElement(g, { token: e }, t);
                }
            }
            function f({ blockSizes: e, index: t, last: n, setBlockHeight: s, text: i }) {
                const [l, c] = a.useState(-1),
                    d = a.useCallback(
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
                    u = a.useMemo(() => {
                        return r.TU.lexer(((e = i), /^\s*[-*+]\s+/.test(e) ? e.replace(/^(\s*)[-*+]\s+/, "$1• ") : /^\s*\d+.\s+/.test(e) ? e.replace(/^(\s*)(\d+).\s+/, "$1$2 ") : e)).map((e, t) => a.createElement(h, { key: `parsedToken-${t}`, token: e }));
                        var e;
                    }, [i]);
                return a.createElement(o.Z, { onLayout: d, style: { width: "100%", top: m, position: "absolute", opacity: l >= 0 ? 1 : 0.1 } }, u);
            }
            function y({ charLimit: e, height: t, text: n }) {
                const r = a.useRef(0);
                (0, l.q)(() => {
                    r.current = Math.max(0, n.split("\n\n").length - 4);
                });
                const s = a.createRef(),
                    [i, c] = a.useState([]),
                    d = a.useRef({ curr: 0, currSmoothed: 0, target: 0, alpha: 0.01, beta: 0, velocity: 0, lastTimestamp: 0 }),
                    [m, u] = a.useState(t || 0),
                    p = a.useCallback(
                        ({ nativeEvent: e }) => {
                            const n = t || e.layout.height;
                            u(n), d.current.currSmoothed || (d.current.currSmoothed = 0.5 * n);
                        },
                        [u, t],
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
                        b && i.length && h.length && (d.current.target = i.reduce((e, t) => (e || 0) + (t || 0), 0) + 10 * h.length);
                    }, [h, b, i]),
                    a.useEffect(
                        (e) => {
                            let t,
                                n = !0;
                            return (
                                (t = requestAnimationFrame(function e(a) {
                                    const r = d.current;
                                    0 === r.lastTimestamp && (r.lastTimestamp = a);
                                    let o = Math.min(a - r.lastTimestamp, 100);
                                    o < 0.001 && (o = 0.001), (r.lastTimestamp = a);
                                    const i = r.curr + r.velocity * o,
                                        l = r.target - i;
                                    (r.curr = i + r.alpha * l), (r.velocity = r.velocity + (r.beta * l) / o);
                                    let c = Math.floor(-r.curr + 0.95 * m);
                                    const u = m ? Math.max(0, c / m) : 1;
                                    (c -= u * m * 0.7),
                                        (r.currSmoothed += (c - r.currSmoothed) / 30),
                                        s.current &&
                                            ((s.current.style.top = `${r.currSmoothed}px`),
                                            (s.current.style.filter = `blur(${2 * u}px)`),
                                            (s.current.style.opacity =
                                                "" +
                                                (1 -
                                                    (function (e, t, n) {
                                                        let a = Math.max(e, Math.min(t, n));
                                                        return (a = (a - e) / (t - e)), a * a * (3 - 2 * a);
                                                    })(0.5, 1, u)))),
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
            r.TU.use({ extensions: [p._, ...u.Z] });
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
                        n ? a.createElement(a.Fragment, null, a.createElement(r.Z, { style: d.container }, a.createElement(o.Z, { isVerified: n.is_blue_verified, name: n.name, profileImageUrl: n.profile_image_url_https, screenName: n.screen_name, withStackedLayout: !0 }))) : null
                    );
                },
                d = s.default.create((e) => ({ container: { flexDirection: "row", gap: e.spaces.space8, justifyContent: "flex-start", alignItems: "stretch", flexWrap: "wrap", paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space8, borderRadius: e.borderRadii.large, borderWidth: e.spaces.space1, borderColor: e.colors.gray200 }, header: { fontSize: e.fontSizes.body } }));
        },
        915066: (e, t, n) => {
            n.d(t, { U: () => u });
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
                    d = (function (e) {
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
                    d.filter((e) => {
                        const t = new URL(e);
                        return "www.youtube.com" === t.hostname && t.searchParams.get("v");
                    }).forEach((e) => {
                        const n = new URL(e),
                            a = n.searchParams.get("v"),
                            r = t.find((t) => t.url === e);
                        "www.youtube.com" === n.hostname && a && r && m.push(`https://www.youtube.com/embed/${a}`);
                    });
                }
                const u = [];
                if (i) {
                    d.filter((e) => l.test(e)).forEach((e) => {
                        const t = (function (e) {
                            try {
                                const t = e.match(l);
                                return t ? t[4] : null;
                            } catch (e) {
                                return null;
                            }
                        })(e);
                        t && n.includes(t) && !u.includes(t) && u.push(t);
                    });
                }
                return { embeddedYoutubeVideoURLs: m.slice(0, 1), embeddedPostIds: u.slice(0, s) };
            }
            n(299631);
            const d = ({ style: e, url: t }) => a.createElement(r.Z, { style: m.embeddedYoutubeVideoContainer }, a.createElement("iframe", { allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: !0, height: "100%", referrerPolicy: "strict-origin-when-cross-origin", src: t, style: m.embeddedYoutubeVideo, title: "YouTube video player", width: "100%" })),
                m = o.default.create((e) => ({ embeddedYoutubeVideoContainer: { width: "100%", aspectRatio: 16 / 9, borderRadius: e.borderRadii.medium, overflow: "hidden" }, embeddedYoutubeVideo: { border: "none" } })),
                u = ({ postIds: e, response: t, style: n, webResults: o }) => {
                    const { isCompactLayout: l, isGrokDrawer: m } = (0, i.ZP)(),
                        u = (0, s.hC)("responsive_web_grok_allow_youtube_embeds"),
                        g = !1,
                        h = a.useMemo(() => c(t, o, e, { allowXPostEmbeds: g, allowYoutubeEmbeds: u }, l, m), [t, o, e, g, u, l, m]);
                    return 0 === h.embeddedPostIds.length && 0 === h.embeddedYoutubeVideoURLs.length ? null : a.createElement(r.Z, { style: [p.container, n] }, !1, u && h.embeddedYoutubeVideoURLs.map((e) => a.createElement(d, { key: e, url: e })));
                },
                p = o.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space12 }, embeddedXPosts: { width: "100%" } }));
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
                    d = e.substring(c).trim();
                (d.startsWith("-") || 0 === d.length) && (l = c);
                let m = -1;
                /^\d+\.?/.test(d) && (m = c);
                const u = [t, r, s, l, m, n].filter((t) => -1 !== t && t > e.length - 100);
                return 0 === u.length ? e.length : Math.min(...u);
            };
        },
        997041: (e, t, n) => {
            function a(e) {
                return e.replace(/<grok:render\s+card_id="([^"]*)"\s+card_type="citation_card"\s+type="render_inline_citation">[\s\S]*?<\/grok:render>/g, (e, t) => `[](grok:render:card_id=${t})`);
            }
            n.d(t, { M: () => a });
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
                d = n(189953),
                m = n(654917),
                u = n(730372),
                p = n(293115),
                g = n(725405),
                h = n(155918),
                f = n(919022),
                y = n(464023),
                b = n(22463),
                w = n(667945),
                v = n(848957);
            const x = s.default.create((e) => ({ container: { width: "100%", alignItems: "center" } })),
                E = function ({ analysisEntityId: e, containerRef: t, conversationKey: n, id: o, isLastResponse: s, isLoading: i, onLayout: d }) {
                    const m = (0, c.bD)(n),
                        u = (0, g.Z)(),
                        E = (0, l.v9)((e) => m?.selectUsingExperiment(e)),
                        k = (0, l.v9)((e) => m?.selectExperiments(e)),
                        C = (0, l.v9)((e) => m.selectMessageById(e, o, !1)),
                        _ = (0, l.v9)((e) => m?.selectConversationId(e)) ?? "",
                        Z = (0, l.v9)((e) => m.selectMessageById(e, o, !0)),
                        I = (0, l.v9)((e) => m.selectPromptSourceForMessageId(e, o)),
                        S = (0, l.v9)(f.ZP.selectViewerUser),
                        R = (0, l.v9)((e) => f.ZP.select(e, y.c0)),
                        T = C?.sender === h.CI.ASSISTANT,
                        M = T ? R : S,
                        P = a.useMemo(() => C?.bannerMessages ?? [], [C?.bannerMessages]),
                        D = a.useMemo(() => ({ grok_details: { ...(u.contextualScribeData.grok_details ?? {}), chat_item_id: C?.agentChatItemId } }), [u, C?.agentChatItemId]);
                    return S && C && M ? (E && T && (C?.message === (k[0]?.message ?? null) || null == o) ? a.createElement(r.Z, { onLayout: d, ref: t, style: x.container }, a.createElement(p.nO, { data: D }, a.createElement(v.Z, { conversationId: _, grokModule: m, isLoading: i, message1: k[0] ?? C, message2: k[1] ?? Z }))) : a.createElement(r.Z, { onLayout: d, ref: t, style: x.container }, T ? a.createElement(p.nO, { data: D }, a.createElement(w.Z, { analysisEntityId: e, bannerMessages: P, cardAttachments: C.cardAttachments, chatItemId: C.agentChatItemId, chatResponseAnnotations: C.chatResponseAnnotations, citedWebResults: C.citedWebResults, conversationKey: n, disclaimer: C.disclaimer, expectedImageAspectRatio: C.expectedImageAspectRatio, fileAttachments: C.fileAttachments, followUpSuggestedMode: C.followUpSuggestedMode, id: o, intermediateImageResults: C.intermediateImageResults, isAborted: C.isAborted, isDeleted: C.isDeleted, isLastResponse: s, isLoading: i, isPastThinkingTrace: C.isPastThinkingTrace, mediaTweetIds: C.xMediaPostIds, memoryReferences: C.memoryReferences, messageStepAccumulator: C.messageStepAccumulator, performanceMetrics: C.performanceMetrics, promptSource: I, query: C.query, reasoningLayout: C.uiLayout?.reasoningUILayout, sender: C.sender, text: C.message, trace: C.thinkingTrace, tweetIds: C.postIds, upsell: C.upsell, userChatItemId: C.userChatItemId || "", webResults: C.webResults })) : a.createElement(b.Z, { bannerMessages: P, conversationKey: n, fileAttachments: C.fileAttachments, hideAttachments: C.hideAttachments, id: o, isDeepsearch: C.isDeepsearch, isReasoning: C.isReasoning, text: C.message, user: { profile_image_shape: M.profile_image_shape, profile_image_url_https: M.profile_image_url_https } }))) : null;
                };
            var k = n(988290);
            const C = ({ contentPadding: e }) => {
                    const { analysisEntityId: t, conversationKey: n, messageIds: s, status: p } = (0, m.ZP)(),
                        { isPagedScroll: g, scrollable: h } = (0, k.ZP)(),
                        f = (0, c.bD)(n),
                        y = (0, l.v9)(f.selectEditingMessage);
                    (0, u.$E)();
                    const b = a.useMemo(() => (p !== d.Q_.IDLE ? [...s, null] : s), [p, s]),
                        w = i.ZP.isWebView(),
                        v = a.useRef(0);
                    a.useEffect(() => {
                        const e = () => {
                            const e = h ? (h === window ? window.innerHeight : h.scrollHeight) : 0;
                            v.current = Math.max(e, v.current);
                        };
                        return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e);
                    }, [h]);
                    const x = p === d.Q_.IDLE ? void 0 : b[b.length - 2],
                        C = a.useRef(),
                        [Z, I] = a.useState(!1),
                        [S, R] = a.useState(0);
                    a.useLayoutEffect(() => {
                        if (!Z || (!y && x && g && S > 0)) {
                            I(!0);
                            const e = h === window ? document.body.scrollHeight : h?.scrollHeight;
                            h?.scroll({ top: e, behavior: "smooth" });
                        }
                    }, [x, y, Z, g, S, h]);
                    const T = a.useCallback(
                            (t) => {
                                const n = t.nativeEvent.layout.height;
                                let a = h === window ? h.innerHeight : (h?.clientHeight ?? 0);
                                w && (a = Math.max(v.current, a));
                                const r = n > 0.6 * a ? Math.max(0, a - e - 50) : Math.max(0, a - n - e);
                                R(r);
                            },
                            [h, w, e],
                        ),
                        M = a.useMemo(() => ({ minHeight: g ? S : 0 }), [S, g]),
                        P = a.useCallback(
                            ({ index: e, item: o }) => {
                                const s = b.length,
                                    i = o === x;
                                return i || e < s - 1 ? a.createElement(r.Z, { key: `message_${e}` }, a.createElement(E, { analysisEntityId: t, conversationKey: n, id: o, onLayout: i ? T : void 0 })) : a.createElement(r.Z, { key: `message_${e}`, style: [_.lastResponse, M] }, a.createElement(E, { analysisEntityId: t, conversationKey: n, id: o, isLastResponse: !0, isLoading: p === d.Q_.TYPING || p === d.Q_.WAITING }));
                            },
                            [x, n, M, t, T, p, b],
                        );
                    return a.createElement(
                        r.Z,
                        { ref: C, style: [_.content, g ? void 0 : _.bottomScroll] },
                        a.createElement(o.Z, { size: "space8" }),
                        a.createElement(
                            r.Z,
                            { style: { flexDirection: "column" } },
                            a.createElement(o.Z, { size: "space12" }),
                            b.map((e, t) => P({ item: e, index: t })),
                        ),
                    );
                },
                _ = s.default.create((e) => ({ lastResponse: { width: "100%" }, content: { flexGrow: "1" }, bottomScroll: { overflow: "auto", flexDirection: "column-reverse", height: "fit-content", maxHeight: "100%", borderWidth: 15, borderColor: "green" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-7a6ce5c4.16db1aaa.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-bd027025"],
    {
        468603: (e, t, a) => {
            a.d(t, { ZP: () => E, I9: () => v });
            a(136728);
            var n = a(202784),
                r = a(325686),
                o = a(731708),
                i = a(815858),
                s = a(530732),
                l = a(392237),
                c = a(111677),
                m = a.n(c),
                d = a(487552),
                u = a(408814),
                p = a(397159),
                g = a(378471);
            function f({ delay: e = 500, duration: t = 30, endElement: a, holdout: r = 0, style: i, text: s }) {
                const [l, c] = n.useState(""),
                    [m, d] = n.useState(""),
                    u = n.useRef(0);
                n.useEffect(() => {
                    let a,
                        n = m;
                    const r = (e) => {
                        l !== n && (l.startsWith(n) ? ((n = l.substring(0, e)), (a = setTimeout(() => r(e + 1), t))) : ((n = n.substring(0, Math.max(0, n.length - 2))), (a = setTimeout(() => r(e), t))), d(n));
                    };
                    return (a = setTimeout(() => r(1), e)), () => clearTimeout(a);
                }, [l, t, e]),
                    n.useEffect(() => {
                        const e = Math.max(0, u.current + r - Date.now()),
                            t = setTimeout(() => {
                                (u.current = Date.now()), c(s);
                            }, e);
                        return () => clearTimeout(t);
                    }, [s]);
                let p = m,
                    g = "";
                if (l === m) {
                    const e = m.split(" ");
                    e.length > 0 && ((g = e[e.length - 1]), (p = e.slice(void 0, -1).join(" ")));
                }
                return n.createElement(o.ZP, { style: i }, n.createElement("span", null, n.createElement("span", null, p), g ? n.createElement("span", { style: { whiteSpace: "nowrap" } }, `${p ? " " : ""}${g}`, " ", a) : void 0));
            }
            const h = m().ib1c5475,
                y = m().a15d62db,
                b = (e, t) =>
                    n.useMemo(() => {
                        if (!e || !t) return "";
                        const a = Math.floor((t - e) / 1e3);
                        return a < 60 ? y({ seconds: a }) : h({ minutes: Math.floor(a / 60), seconds: a % 60 });
                    }, [e, t]),
                _ = m().b52484b6,
                C = m().c3f04d9c,
                v = m().a4d9dbfa;
            function E({ completedTimestamp: e, expanded: t, fromTimestamp: a, hasCardAttachments: s, isCompactLayout: l, isImageResponse: c, isLoading: m, messageStepAccumulator: h, onClick: y, reasoningLayout: E, searchQuery: k, showExpand: Z, shownText: T, shownTrace: S, style: I }) {
                const D = "UNIFIED" === E,
                    P = "COMPLETED" === h?.state,
                    R = "ABORTED" === h?.state,
                    M = h?.isPastSummary,
                    z = b(a ?? 0, e ?? 0),
                    A = n.useMemo(() => {
                        const e = [],
                            t = h?.steps || [];
                        for (const a of t) {
                            const t = a.subSteps || [];
                            for (const a of t) a.messageTag === p.iS.SUMMARY ? e.push(...(a.bulletPoints || [])) : a.messageTag === p.iS.DECISION && e.push(a.actionSummary || "");
                        }
                        return e;
                    }, [h?.debugMessageTagCount]);
                if (D && !l) {
                    if ((!h && !m) || c) return null;
                    const e = A[A.length - 1];
                    let a = e ?? C;
                    t && (a = C);
                    const i = Z ? n.createElement(d.default, { style: [w.chevron, P || R ? w.completedChevron : void 0, t ? w.expandedChevron : void 0] }) : null;
                    return n.createElement(r.Z, { style: [w.statusContainer, I] }, P || R ? n.createElement(n.Fragment, null, n.createElement(u.default, { style: w.icon }), n.createElement(x, { completed: !0, expanded: t, onClick: y, showExpand: Z }, n.createElement(r.Z, { style: w.statusLabelContainer }, n.createElement(o.ZP, { style: w.statusLabel }, M || R ? v : z)), i)) : n.createElement(n.Fragment, null, n.createElement(g.Z, null), n.createElement(x, { completed: !1, expanded: t, onClick: y, showExpand: Z }, n.createElement(f, { duration: e ? 1 : 15, endElement: Z ? n.createElement(d.default, { style: [w.chevron, w.typingAnimationChevron, t ? w.expandedChevron : void 0] }) : null, holdout: 70 * a.length, style: w.typingAnimation, text: a }))));
                }
                const L = !(!m || c || ("" !== T && void 0 !== T) || h || S || s);
                return n.createElement(i.Z, { show: L, type: "fade" }, n.createElement(r.Z, { style: [w.statusContainer, w.genericStatusContainer, I] }, n.createElement(g.Z, null), !!k && n.createElement(r.Z, { style: w.statusLabelContainer }, n.createElement(o.ZP, { style: w.animatedStatusLabel }, n.createElement("span", null, _)))));
            }
            function x({ children: e, completed: t, expanded: a, onClick: r, showExpand: o }) {
                return n.createElement(
                    s.Z,
                    {
                        onClick: () => {
                            o && r();
                        },
                        style: [w.expandableStatusContainer, o ? w.interactiveExpandableStatusContainer : null],
                        withoutInteractiveStyles: !0,
                    },
                    e,
                );
            }
            const w = l.default.create((e) => ({ statusContainer: { display: "flex", flexDirection: "row", color: "light" === e.paletteName ? e.colors.gray700 : e.colors.gray900 }, genericStatusContainer: { alignItems: "center", gap: e.spaces.space4 }, statusLabelContainer: { position: "relative", width: "fit-content", animationDuration: "0.2s", opacity: 1, animationTimingFunction: "linear", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, statusLabel: { color: "inherit" }, animatedStatusLabel: { color: e.colors.transparent, backgroundColor: e.colors.gray600, backgroundImage: `linear-gradient(to right, ${e.colors.gray600} 0%, ${e.colors.gray900} 20%, ${e.colors.gray500} 40%, ${e.colors.gray600} 100%)`, opacity: 1, display: "inline-block", backgroundClip: "text", animationDuration: "2s", backgroundRepeat: "no-repeat", animationIterationCount: "infinite", animationTimingFunction: "linear", animationKeyframes: [{ "0%": { backgroundPositionX: "-2em" }, "100%": { backgroundPositionX: "7em" } }] }, icon: { color: "inherit" }, expandableStatusContainer: { display: "flex", flexDirection: "row", marginStart: e.spaces.space4, flex: 1 }, interactiveExpandableStatusContainer: { cursor: "pointer" }, chevron: { transition: "all 0.2s ease", transform: "rotate(0deg)", color: "inherit", width: e.spaces.space16, height: e.spaces.space16, animationDuration: "0.2s", animationTimingFunction: "linear", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationFillMode: "both" }, completedChevron: { color: "inherit", top: e.spaces.space2, marginStart: e.spaces.space4 }, expandedChevron: { transform: "rotate(-180deg)" }, typingAnimation: { color: "inherit", flex: 1, display: "flex", paddingTop: 3 }, typingAnimationChevron: { top: -1 } }));
        },
        567778: (e, t, a) => {
            a.d(t, { w: () => k });
            var n = a(202784),
                r = a(992942),
                o = a(154003),
                i = a(111677),
                s = a.n(i),
                l = a(323265),
                c = a(952793),
                m = a(725516),
                d = a(226247),
                u = a(464279),
                p = a(560619);
            const g = "grok",
                f = "grok_3",
                h = s().ha8fbe22,
                y = s().d95c232a,
                b = s().h2671312,
                _ = s().a1bb9c8a,
                C = s().b08ef3ae,
                v = s().jf9363b8,
                E = s().ef018bf6,
                x = s().d95c232a,
                w = s().cdace6d2,
                k = ({ upsell: e }) => {
                    (0, m.z)().scribe({ action: "impression", component: "upsell_banner", element: e.upsellType });
                    const t = (0, c.hC)("responsive_web_grok_upsell_free_to_premium");
                    return "free_grok_2_mini_feature" === e.upsellType || "free_grok_2_feature" === e.upsellType || "free_grok_3_feature" === e.upsellType || "free_grok_3_mini_feature" === e.upsellType || "free_grok_3_reasoning_feature" === e.upsellType || "free_grok_3_deepsearch_feature" === e.upsellType || "free_grok_3_mini_reasoning_feature" === e.upsellType || "free_grok_3_mini_deepsearch_feature" === e.upsellType ? (t ? n.createElement(d.e, { button: n.createElement(Z, null), text: C, title: b }) : n.createElement(d.e, { button: n.createElement(Z, { referringPage: f }), text: v, title: _ })) : "premium_grok_2_feature" === e.upsellType || "premium_grok_3_feature" === e.upsellType || "premium_grok_3_mini_feature" === e.upsellType || "premium_grok_3_reasoning_feature" === e.upsellType || "premium_grok_3_deepsearch_feature" === e.upsellType || "premium_grok_3_mini_reasoning_feature" === e.upsellType || "premium_grok_3_mini_deepsearch_feature" === e.upsellType ? n.createElement(d.e, { button: n.createElement(Z, { referringPage: f }), text: v, title: _ }) : "free_image_understanding_feature" === e.upsellType ? n.createElement(d.e, { button: n.createElement(Z, null), image: n.createElement(r.Z, { source: { uri: p }, style: { width: 102, height: 85 } }), text: x, title: E }) : "free_image_generation_feature" === e.upsellType ? n.createElement(d.e, { button: n.createElement(Z, null), image: n.createElement(r.Z, { source: { uri: u }, style: { width: 132, height: 115 } }), text: y, title: h }) : null;
                },
                Z = ({ referringPage: e }) => {
                    const t = !!l.ZP.isWebView(),
                        a = (0, m.z)(),
                        r = n.useCallback(() => a.scribe({ action: "click", component: "upsell_banner", element: "upgrade-button" }), [a]);
                    return n.createElement(o.ZP, { link: { pathname: "/i/premium_sign_up", state: { referring_page: e || g }, external: t, query: { referring_page: e || g } }, onPress: r, size: "small", type: "primaryFilled" }, w);
                };
        },
        986274: (e, t, a) => {
            a.d(t, { E: () => s });
            var n = a(202784),
                r = a(325686),
                o = a(731708),
                i = a(392237);
            const s = ({ performanceMetrics: e, userChatItemId: t }) => {
                    const [a, i] = n.useState(void 0),
                        { timeToCompletion: s, timeToFirstChunkMs: c, timeToFirstTextMs: m, traceId: d } = e;
                    return void 0 === a ? n.createElement(r.Z, { style: l.container }, m ? n.createElement(o.ZP, { onClick: () => i(!0), style: l.showDebugLink }, (m / 1e3).toString(), "s") : n.createElement(o.ZP, { onClick: () => i(!1), style: l.showDebugLink }, "Debug")) : !1 === a ? null : n.createElement(r.Z, { style: l.container }, n.createElement(o.ZP, { style: l.text }, "Debug / Performance"), d ? n.createElement(o.ZP, { style: l.text }, "Trace ID: ", d) : null, t ? n.createElement(o.ZP, { style: l.text }, "Item ID: ", t) : null, c ? n.createElement(o.ZP, { style: l.text }, "Time to first chunk: ", (c / 1e3).toString(), "s") : null, m ? n.createElement(o.ZP, { style: l.text }, "Time to first text: ", (m / 1e3).toString(), "s") : null, s ? n.createElement(o.ZP, { style: l.text }, "Time to completion: ", (s / 1e3).toString(), "s") : null, n.createElement(o.ZP, { onClick: () => i(!1), style: l.showDebugLink }, "hide this"));
                },
                l = i.default.create((e) => ({ container: { marginStart: e.spaces.space8, alignItems: "flex-start", justifyContent: "flex-start" }, text: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 }, showDebugLink: { cursor: "pointer", width: "fit-content", color: e.colors.gray700, fontSize: e.fontSizes.subtext1, borderBottomColor: e.colors.gray100, borderBottomStyle: "dotted", borderBottomWidth: e.spaces.space1 } }));
        },
        618770: (e, t, a) => {
            a.d(t, { K: () => m });
            var n = a(202784),
                r = a(325686),
                o = a(392237),
                i = a(166852),
                s = a(725516),
                l = a(86657),
                c = a(988290);
            function m({ fileAttachments: e = [], intermediateImageResults: t = [], isLoading: a, isAborted: o, messageId: m, expectedImageAspectRatio: d }) {
                const g = (0, c.ZP)().isGrokShare,
                    f = (0, s.z)(),
                    h = n.useRef(new Set()),
                    y = n.useCallback(
                        (t) => {
                            if (a) return;
                            const n = t.url || "";
                            let r;
                            h.current.has(n) || (h.current.add(n), (r = h.current.size));
                            const o = e ? e.findIndex((e) => e.url === n) : 0;
                            f.scribe({ action: "click", component: "grok_inline_gallery", element: `slot${o}`, data: { position: r, url: n } });
                        },
                        [f, e, a],
                    ),
                    b = n.useMemo(
                        () =>
                            (0, i.Z)([...t.map((e) => e.imageIdStr), ...e.map((e) => e.mediaId)])
                                .filter(Boolean)
                                .sort(),
                        [e, t],
                    );
                if (0 === e.length) return null;
                const _ = e.length > 1 ? p : u;
                return n.createElement(
                    r.Z,
                    { style: _.containerStyle },
                    e.map((i, s) => {
                        const c = b[s],
                            u = e.find((e) => e.mediaId === c) ?? { fileName: "image", mimeType: "image/jpeg" },
                            p = t.filter((e) => e.imageIdStr === c);
                        return n.createElement(r.Z, { key: `slot_${s}`, style: _.itemStyle }, n.createElement(l.Z, { allFiles: e, aspectRatio: _.aspectRatio || d, file: u, index: s, intermediateResults: p, isAborted: o, isImageActionsEnabled: !g, isLoading: !!a, key: `image_${s}`, messageId: m, onViewed: y, useActionRowButtons: !g, withMediaCarousel: !g }));
                    }),
                );
            }
            const d = o.default.create((e) => ({ fileAttachmentContainer: { paddingHorizontal: e.spaces.space8, width: "100%", marginVertical: e.spaces.space12, flexDirection: "row", gap: e.spaces.space4 }, fileAttachmentContainerMulti: { flexWrap: "wrap", gap: e.spaces.space12 }, fileAttachmentMultiItem: { width: "48%" }, fileAttachmentSingleItem: { width: "70%" } })),
                u = { aspectRatio: void 0, itemStyle: d.fileAttachmentSingleItem, containerStyle: d.fileAttachmentContainer },
                p = { aspectRatio: void 0, itemStyle: d.fileAttachmentMultiItem, containerStyle: [d.fileAttachmentContainer, d.fileAttachmentContainerMulti] };
        },
        649328: (e, t, a) => {
            a.d(t, { x: () => d });
            var n = a(202784),
                r = a(392237),
                o = a(111677),
                i = a.n(o),
                s = a(166852),
                l = (a(353644), a(125363)),
                c = a(836255),
                m = a(464023);
            a(263160), a(916559), a(520595), a(94135);
            r.default.create((e) => ({ container: { width: "100%", flex: 1, maxHeight: "50%", padding: e.spaces.space16, justifyContent: "center", alignItems: "flex-start", borderRadius: e.borderRadii.large, overflow: "hidden", cursor: "pointer", gap: e.spaces.space8, backgroundColor: e.colors.gray50, transition: "background-color 0.5s" }, hovered: { backgroundColor: "light" === e.paletteName ? e.colors.gray300 : e.colors.gray200 } })), i().a3186bff, i().f9b2d343, r.default.create((e) => ({ container: { width: "100%", flexDirection: "row", maxWidth: m.vf, paddingHorizontal: e.spaces.space8, marginTop: e.spaces.space16, position: "relative", gap: e.spaces.space8 }, containerMobile: { zoom: 0.85, paddingHorizontal: e.spaces.space16 }, carouselWrapper: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large, overflow: "hidden", position: "relative", flex: 3 }, tweets: { width: "100%", position: "relative" }, tweet: { marginEnd: 0, width: "100%" }, seeAllButton: { flex: 1, width: 120, minWidth: 120, gap: e.spaces.space8, height: "100%" } }));
            function d({ postIds: e }) {
                const t = (0, l.oR)(),
                    a = e
                        .map((e) => c.Z.selectHydrated(t.getState(), e))
                        .filter(Boolean)
                        .map((e) => e.user.profile_image_url_https)
                        .filter(Boolean),
                    r = (0, s.Z)(a),
                    o = r.join("");
                return n.useMemo(() => r, [o]);
            }
        },
        94135: (e, t, a) => {
            a.d(t, { a: () => c });
            var n = a(202784),
                r = a(325686),
                o = a(466792),
                i = a(642153),
                s = a(731708),
                l = a(392237);
            const c = ({ images: e, label: t, onClick: a, withAnimation: l }) => n.createElement(o.Z, null, ({ isHovered: o }) => n.createElement(r.Z, { onClick: a, style: [m.container, o ? m.hovered : void 0, l ? m.animation : void 0] }, e.length > 0 ? n.createElement(i.Z, { userAvatarSize: "medium", userAvatarUrls: e.slice(0, 3), withIncreasedSpacing: e.length < 2 }) : null, n.createElement(s.ZP, { color: "gray900", size: "subtext1" }, t))),
                m = l.default.create((e) => ({ container: { flexDirection: "row", paddingVertical: e.spaces.space8, paddingEnd: e.spaces.space12, paddingStart: e.spaces.space8, alignItems: "center", borderRadius: e.borderRadii.infinite, overflow: "hidden", cursor: "pointer", gap: e.spaces.space8, backgroundColor: e.colors.gray0, transition: "background-color 0.2s" }, animation: { opacity: 1, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, hovered: { backgroundColor: e.colors.gray100 } }));
        },
        993441: (e, t, a) => {
            a.d(t, { e: () => w });
            var n = a(202784),
                r = a(744610),
                o = a(555874),
                i = a(67369),
                s = a(666305),
                l = a(392237),
                c = a(2138),
                m = a(666536),
                d = a(306677),
                u = a(725405),
                p = a(464023),
                g = a(466385),
                f = (a(136728), a(325686)),
                h = a(107267),
                y = a(530732),
                b = a(992942);
            function _({ image: e, images: t, index: a, isMobileView: r, layout: o }) {
                const i = (0, h.useHistory)(),
                    s = (0, u.Z)(),
                    l = o.normalWidth,
                    c = (3 * l) / 4,
                    m = n.useCallback(() => ({ width: l, height: c, zIndex: 20, marginRight: r && a !== t.length - 1 ? 8 : 0 }), [c, l, t.length, a, r]),
                    d =
                        e &&
                        (function (e) {
                            return e && e.original_info ? { url: e.media_url_https, width: e.original_info.width, height: e.original_info.height } : void 0;
                        })(e),
                    p = n.useCallback(() => {
                        s.scribe({ element: "grok_search_summary_view_image_modal", action: "click" }), i.push({ pathname: "/i/grok/media", state: { file: d } });
                    }, [s, i, d]);
                return n.createElement(f.Z, { style: m() }, e.media_url_https ? n.createElement(y.Z, { onClick: p, style: [C.imageContainer, { width: l, height: c }] }, n.createElement(b.Z, { source: { uri: e.media_url_https }, style: C.image })) : null);
            }
            const C = l.default.create((e) => ({ imageContainer: { borderRadius: e.borderRadii.large, marginStart: 0, marginBottom: e.spaces.space4, overflow: "hidden", zIndex: 100 }, image: { width: "100%", height: "100%" } })),
                v = 150,
                E = 6,
                x = 5;
            function w({ isAnimated: e, mediaIds: t }) {
                const a = (p.vf - (x + 1) * E) / x,
                    l = (0, g.X)({ mediaIds: t }),
                    f = n.useRef(new r.Z.Value(e ? 0 : 1)).current,
                    [h, y] = n.useState([]),
                    [b, C] = n.useState(a),
                    [w, Z] = n.useState((3 * a) / 4 + 16),
                    T = (0, i.LX)(),
                    S = (0, u.Z)(),
                    I = n.useRef(
                        (0, c.Z)((e) => {
                            ((e) => {
                                const t = (Math.min(e, p.vf) - (x + 1) * E) / x;
                                C(t), Z((3 * t) / 4 + 16);
                            })(e);
                        }, 300),
                    ).current,
                    D = n.useCallback(
                        (e) => {
                            if (!e) return I.cancel(), void s.Z.unobserveAll(e);
                            s.Z.observe(e, (e) => {
                                const t = e.contentRect.width;
                                I(t);
                            });
                        },
                        [I],
                    ),
                    P = n.useMemo(
                        () =>
                            (0, m.Z)((e) => {
                                y(e);
                            }, 1e3),
                        [y],
                    );
                n.useEffect(() => {
                    const e = l.map((e) => e.media_key);
                    return (
                        (e.length !== h.length || e.some((e, t) => e !== h[t])) && P(l),
                        () => {
                            P.clear();
                        }
                    );
                }, [l, h, P]);
                const R = (e) => (!Number.isFinite(e) || e < 16 ? 16 : e),
                    M = n.useRef(new r.Z.Value(R(w))).current;
                n.useEffect(() => {
                    const e = R(w);
                    e !== M._value && r.Z.spring(M, { toValue: e, friction: 30, tension: 300, duration: 150, useNativeDriver: !1 }).start();
                }, [w, M]),
                    n.useEffect(() => {
                        e && r.Z.timing(f, { toValue: 1, duration: 2e3, useNativeDriver: !1 }).start();
                    }, [f, e]);
                const z = n.useCallback(() => {
                    S.scribe({ element: "grok_search_tweet_media", action: "impression" });
                }, [S]);
                return n.createElement(r.Z.View, { ref: D, style: [k.container, { opacity: f, height: M, maxWidth: p.vf, width: "100%" }, T ? k.scrollContainer : null] }, n.createElement(d.D, { id: "grok_tweets_media_gallery", onFullyVisible: z, position: "bottom", testID: "grok_tweets_media_gallery" }), n.createElement(o.Z, { columnWrapperStyle: T ? void 0 : k.row, data: l, horizontal: T, key: `${l.length}-${T ? "1" : x}`, keyExtractor: (e) => e.media_key, numColumns: T ? 1 : x, renderItem: ({ index: e, item: t }) => n.createElement(_, { image: t, images: l, index: e, isMobileView: T, layout: { normalWidth: T ? v : b, containerHeight: w } }), scrollEnabled: T, scrollEventThrottle: 16, showsHorizontalScrollIndicator: !1 }));
            }
            const k = l.default.create((e) => ({ container: { flex: 1, justifyContent: "flex-start", paddingEnd: e.spaces.space16, paddingStart: e.spaces.space16, paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 }, row: { justifyContent: "flex-start", gap: e.spaces.space8, alignItems: "flex-start", marginBottom: e.spaces.space8 }, scrollContainer: { WebkitOverflowScrolling: "touch", scrollSnapType: "x mandatory" } }));
        },
        799027: (e, t, a) => {
            a.d(t, { i: () => H, Z: () => N });
            var n = a(207274),
                r = a(822343),
                o = a(202784),
                i = a(325686),
                s = a(10622),
                l = a.n(s),
                c = (a(585488), a(437429)),
                m = a.n(c),
                d = a(525271),
                u = a(731708),
                p = a(154003),
                g = a(392237),
                f = a(111677),
                h = a.n(f),
                y = a(306677),
                b = a(725516),
                _ = a(623494),
                C = a(378471),
                v = a(988290),
                E = (a(136728), a(107267)),
                x = a(370006),
                w = a(530732),
                k = a(530243),
                Z = a(721270);
            const T = h().d9d36880,
                S = h().g9677c6e;
            function I({ analytics: e, memoryConversation: t, onBack: a, onForget: n }) {
                const r = (0, E.useHistory)(),
                    [s, l] = o.useState(!1),
                    c = o.useCallback(() => {
                        l(!0);
                    }, []);
                return o.createElement(
                    i.Z,
                    { style: D.container },
                    o.createElement(
                        i.Z,
                        { style: D.headerContainer },
                        o.createElement(
                            i.Z,
                            { style: D.leftHeaderContainer },
                            o.createElement(x.Z, { onClick: a }),
                            o.createElement(
                                w.Z,
                                {
                                    onClick: () => {
                                        (0, _.qQ)(e, t.conversation_id), r.push(`/i/grok?conversation=${t.conversation_id}`);
                                    },
                                    style: D.conversationTitleContainer,
                                    withoutInteractiveStyles: !0,
                                },
                                ({ isHovered: e }) => o.createElement(i.Z, { style: [D.conversationTitleContainer, e ? D.hoveredConversationTitleContainer : void 0] }, o.createElement(i.Z, { style: D.conversationTitle }, o.createElement(u.ZP, { numberOfLines: 1, size: "headline2" }, t.conversation_title)), o.createElement(i.Z, { style: D.goToIconContainer }, o.createElement(k.default, { style: D.goToIcon }))),
                            ),
                        ),
                        o.createElement(p.ZP, { backgroundColor: "gray50", borderColor: "transparent", fontWeight: "normal", hoverLabel: { label: s ? S : T }, onClick: s ? n : c, type: s ? "destructiveFilled" : void 0 }, s ? S : T),
                    ),
                    !!t.conversation_summary && o.createElement(u.ZP, { size: "body", style: D.summary, weight: "normal" }, o.createElement(Z.GrokMarkdown, { isAnimated: !1, markdownText: t.conversation_summary })),
                );
            }
            const D = g.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space12, animationDuration: "0.3s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateX(30px)" }, "100%": { opacity: 1, transform: "translateX(0px)" } }], animationFillMode: "both" }, headerContainer: { width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space20 }, leftHeaderContainer: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, conversationTitleContainer: { maxWidth: "100%", flexGrow: 0, flexShrink: 1, display: "flex", flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderColor: "transparent", borderStyle: "solid", transition: "border-color 0.2s ease", cursor: "pointer", gap: e.spaces.space4 }, conversationTitle: { maxWidth: "100%", textOverflow: "ellipsis", overflow: "hidden", flexGrow: 0, flexShrink: 1 }, hoveredConversationTitleContainer: { borderColor: e.colors.brandColor }, goToIconContainer: { width: e.spaces.space16, height: e.spaces.space16 }, goToIcon: { width: "100%", height: "100%", transform: [{ scaleX: -1 }] }, summary: { marginTop: e.spaces.space16, width: "100%" } }));
            var P = a(757483),
                R = a(215337),
                M = a(207137);
            const z = h().g02dacc0,
                A = h().c6e845c0,
                L = [h().a5fa4a86, h().c51724a4, h().j244ceb2, h().b22b12e0, h().h3023cac, h().b10dbffa, h().c81da1b6, h().d4e4d3ce, h().c3418f9a, h().b64dada6, h().ad24ec20, h().c7902252];
            function F({ memoryConversation: e, onClick: t, style: a }) {
                const n = g.default.theme.colors.navigationBackground,
                    r = o.useCallback(() => [P.Z.hexToCss(n, 0), P.Z.hexToCss(n, 0.8), P.Z.hexToCss(n, 1)], [n]),
                    s = o.useMemo(() => {
                        if (!e.updated_at_sec) return "";
                        const t = new Date(1e3 * e.updated_at_sec);
                        if ((0, M.zk)(t)) return z;
                        if ((0, M.gO)(t)) return A;
                        return `${L[t.getMonth()]} ${t.getDate()}`;
                    }, [e.updated_at_sec]);
                return o.createElement(w.Z, { onClick: t, withoutInteractiveStyles: !0 }, ({ isHovered: t }) => o.createElement(i.Z, { style: [B.outerContainer, t ? B.outerHoveredContainer : void 0, a] }, o.createElement(i.Z, { style: B.container }, o.createElement(i.Z, { style: B.contentContainer }, o.createElement(i.Z, { style: B.headerContainer }, !!e.conversation_title && o.createElement(i.Z, { style: B.conversationTitleContainer }, o.createElement(u.ZP, { numberOfLines: 1, style: B.conversationTitle }, e.conversation_title)), !!s && o.createElement(i.Z, null, o.createElement(u.ZP, { numberOfLines: 1, style: B.date }, s))), !!e.conversation_summary && o.createElement(i.Z, { style: B.summaryContainer }, o.createElement(u.ZP, { size: "subtext2", weight: "normal" }, o.createElement(Z.GrokMarkdown, { isAnimated: !1, markdownText: e.conversation_summary }))))), o.createElement(R.Z, { colors: r(), style: [B.traceGradientBottom, t ? { height: "40%" } : void 0] })));
            }
            const B = g.default.create((e) => ({ outerContainer: { backgroundColor: "transparent", transition: "background-color 0.2s ease", width: "100%", cursor: "pointer", borderRadius: e.borderRadii.medium, position: "relative" }, outerHoveredContainer: { backgroundColor: e.colors.gray0 }, container: { padding: e.spaces.space12 }, contentContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8, flexShrink: 1 }, headerContainer: { width: "100%", maxWidth: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space8 }, conversationTitleContainer: { maxWidth: "100%", textOverflow: "ellipsis", overflow: "hidden", flexGrow: 0, flexShrink: 1 }, conversationTitle: {}, date: { fontSize: e.fontSizes.subtext1, color: e.colors.gray800 }, summaryContainer: { maxHeight: 80, overflow: "hidden" }, traceGradientBottom: { position: "absolute", width: "100%", height: "30%", transition: "height 0.2s ease", start: 0, bottom: 0, borderBottomStartRadius: e.borderRadii.medium, borderBottomEndRadius: e.borderRadii.medium } })),
                H = h().d700b268,
                W = h().cd7bdab2,
                $ = h().f21b84de,
                V = h().gf5e9ea6,
                j = 3e3,
                G = h().i52a9cb8,
                O = r.Z,
                X = n.Z;
            function N({ memoryReferences: e, onDrawerDismiss: t }) {
                const { isCompactLayout: a, isGrokDrawer: n } = (0, v.ZP)(),
                    r = a && !n,
                    s = (0, b.z)(),
                    c = m()(),
                    g = o.useRef(null),
                    [f, h] = o.useState(!0),
                    [E, x] = o.useState([]),
                    [w, k] = o.useState(!1),
                    [Z, T] = o.useState(null),
                    [S, D] = o.useState(null);
                o.useEffect(() => {
                    l()(c, O, { conversation_ids: e.map((e) => e.conversation_id) })
                        .toPromise()
                        .then((e) => {
                            x(e?.get_grok_memory_related_conversations?.related_conversations || []), h(!1);
                        })
                        .catch(() => {
                            x([]), h(!1);
                        });
                }, [c, e]);
                const P = o.useCallback(() => {
                        (0, _.NH)(s);
                    }, [s]),
                    R = o.useCallback(
                        (e) => {
                            const t = { idx: e, memory: E[e] },
                                a = t.memory.conversation_id;
                            D(t),
                                x([...E.slice(0, e), ...E.slice(e + 1)]),
                                T(null),
                                k(!0),
                                (g.current = setTimeout(() => {
                                    k(!1),
                                        l()(c, X, { conversation_ids: [a] })
                                            .toPromise()
                                            .then(() => {
                                                D(null);
                                            })
                                            .catch((e) => {
                                                (0, _.zX)(s, a, e.message);
                                            });
                                }, j)),
                                (0, _.UV)(s, a);
                        },
                        [E, c, s],
                    ),
                    M = o.useCallback(() => {
                        S && (k(!1), clearTimeout(g.current), x([...E.slice(0, S.idx), S.memory, ...E.slice(S.idx)]));
                    }, [S, E]);
                return o.createElement(
                    d.Z,
                    { align: "right", buttonType: "primaryText", onDismissed: t, style: K.drawer, subtitle: W, title: H },
                    o.createElement(
                        i.Z,
                        { style: [K.container, r ? K.compactContainer : void 0] },
                        o.createElement(y.D, { id: "grok_memory_drawer", onFullyVisible: P, position: "top", testID: "grok_memory_drawer" }),
                        null !== Z
                            ? o.createElement(I, { analytics: s, memoryConversation: E[Z], onBack: () => T(null), onForget: () => R(Z) })
                            : o.createElement(
                                  i.Z,
                                  { style: K.memoriesPreviewContainer },
                                  f
                                      ? o.createElement(i.Z, { style: K.spinnerContainer }, o.createElement(C.Z, null))
                                      : E.length > 0
                                        ? E.map((e, t) =>
                                              o.createElement(F, {
                                                  key: `${e.conversation_id}-${e.conversation_title?.length || ""}-${e.conversation_summary?.length || ""}`,
                                                  memoryConversation: e,
                                                  onClick: () => {
                                                      T(t), (0, _.zC)(s, E[t].conversation_id);
                                                  },
                                                  style: [K.memoryCard, { animationDelay: 0.02 * t + "s" }],
                                              }),
                                          )
                                        : o.createElement(u.ZP, { style: K.noMemoriesLabel }, G),
                              ),
                    ),
                    w && o.createElement(i.Z, { style: K.undoToastContainer }, o.createElement(i.Z, { style: [K.undoToast, { animationDuration: (j - 500) / 1e3 + "s" }] }, o.createElement(u.ZP, null, $), o.createElement(p.ZP, { backgroundColor: "transparent", borderColor: "gray200", onClick: M, size: "small" }, V))),
                );
            }
            const K = g.default.create((e) => ({ drawer: { paddingTop: e.spaces.space16, position: "relative" }, container: { height: "100%", padding: e.spaces.space16, width: 500 }, compactContainer: { width: "100%" }, memoriesPreviewContainer: { width: "100%", display: "flex", flexDirection: "column", gap: e.spaces.space16 }, spinnerContainer: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }, pageSelector: { marginVertical: e.spaces.space12 }, memoryCard: { flex: 1, animationDuration: "0.3s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateX(-30px)" }, "100%": { opacity: 1, transform: "translateX(0px)" } }], animationFillMode: "both" }, undoToastContainer: { position: "fixed", bottom: e.spaces.space16, width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }, undoToast: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space16, padding: e.spaces.space16, backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.medium, animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(10px)" }, "10%": { opacity: 1, transform: "translateY(0px)" }, "90%": { opacity: 1, transform: "translateY(0px)" }, "100%": { opacity: 0, transform: "translateY(10px)" } }], animationFillMode: "both" }, noMemoriesLabel: { marginHorizontal: e.spaces.space4 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-bd027025.a8ea69fa.js.map

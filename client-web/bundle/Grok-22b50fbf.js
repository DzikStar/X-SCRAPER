"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-22b50fbf"],
    {
        567778: (e, t, a) => {
            a.d(t, { w: () => E });
            var n = a(202784),
                r = a(992942),
                i = a(154003),
                o = a(674132),
                s = a.n(o),
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
                _ = s().h2671312,
                b = s().a1bb9c8a,
                w = s().b08ef3ae,
                v = s().jf9363b8,
                C = s().ef018bf6,
                k = s().d95c232a,
                x = s().cdace6d2,
                E = ({ upsell: e }) => {
                    (0, m.z)().scribe({ action: "impression", component: "upsell_banner", element: e.upsellType });
                    const t = (0, c.hC)("responsive_web_grok_upsell_free_to_premium");
                    return "free_grok_2_mini_feature" === e.upsellType || "free_grok_2_feature" === e.upsellType || "free_grok_3_feature" === e.upsellType || "free_grok_3_mini_feature" === e.upsellType || "free_grok_3_reasoning_feature" === e.upsellType || "free_grok_3_deepsearch_feature" === e.upsellType || "free_grok_3_mini_reasoning_feature" === e.upsellType || "free_grok_3_mini_deepsearch_feature" === e.upsellType ? (t ? n.createElement(d.e, { button: n.createElement(Z, null), text: w, title: _ }) : n.createElement(d.e, { button: n.createElement(Z, { referringPage: f }), text: v, title: b })) : "premium_grok_2_feature" === e.upsellType || "premium_grok_3_feature" === e.upsellType || "premium_grok_3_mini_feature" === e.upsellType || "premium_grok_3_reasoning_feature" === e.upsellType || "premium_grok_3_deepsearch_feature" === e.upsellType || "premium_grok_3_mini_reasoning_feature" === e.upsellType || "premium_grok_3_mini_deepsearch_feature" === e.upsellType ? n.createElement(d.e, { button: n.createElement(Z, { referringPage: f }), text: v, title: b }) : "free_image_understanding_feature" === e.upsellType ? n.createElement(d.e, { button: n.createElement(Z, null), image: n.createElement(r.Z, { source: { uri: p }, style: { width: 102, height: 85 } }), text: k, title: C }) : "free_image_generation_feature" === e.upsellType ? n.createElement(d.e, { button: n.createElement(Z, null), image: n.createElement(r.Z, { source: { uri: u }, style: { width: 132, height: 115 } }), text: y, title: h }) : null;
                },
                Z = ({ referringPage: e }) => {
                    const t = !!l.ZP.isWebView(),
                        a = (0, m.z)(),
                        r = n.useCallback(() => a.scribe({ action: "click", component: "upsell_banner", element: "upgrade-button" }), [a]);
                    return n.createElement(i.ZP, { link: { pathname: "/i/premium_sign_up", state: { referring_page: e || g }, external: t, query: { referring_page: e || g } }, onPress: r, size: "small", type: "primaryFilled" }, x);
                };
        },
        986274: (e, t, a) => {
            a.d(t, { E: () => s });
            var n = a(202784),
                r = a(325686),
                i = a(731708),
                o = a(392237);
            const s = ({ performanceMetrics: e, userChatItemId: t }) => {
                    const [a, o] = n.useState(void 0),
                        { timeToCompletion: s, timeToFirstChunkMs: c, timeToFirstTextMs: m, traceId: d } = e;
                    return void 0 === a ? n.createElement(r.Z, { style: l.container }, m ? n.createElement(i.ZP, { onClick: () => o(!0), style: l.showDebugLink }, (m / 1e3).toString(), "s") : n.createElement(i.ZP, { onClick: () => o(!1), style: l.showDebugLink }, "Debug")) : !1 === a ? null : n.createElement(r.Z, { style: l.container }, n.createElement(i.ZP, { style: l.text }, "Debug / Performance"), d ? n.createElement(i.ZP, { style: l.text }, "Trace ID: ", d) : null, t ? n.createElement(i.ZP, { style: l.text }, "Item ID: ", t) : null, c ? n.createElement(i.ZP, { style: l.text }, "Time to first chunk: ", (c / 1e3).toString(), "s") : null, m ? n.createElement(i.ZP, { style: l.text }, "Time to first text: ", (m / 1e3).toString(), "s") : null, s ? n.createElement(i.ZP, { style: l.text }, "Time to completion: ", (s / 1e3).toString(), "s") : null, n.createElement(i.ZP, { onClick: () => o(!1), style: l.showDebugLink }, "hide this"));
                },
                l = o.default.create((e) => ({ container: { marginStart: e.spaces.space8, alignItems: "flex-start", justifyContent: "flex-start" }, text: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 }, showDebugLink: { cursor: "pointer", width: "fit-content", color: e.colors.gray700, fontSize: e.fontSizes.subtext1, borderBottomColor: e.colors.gray100, borderBottomStyle: "dotted", borderBottomWidth: e.spaces.space1 } }));
        },
        618770: (e, t, a) => {
            a.d(t, { K: () => m });
            var n = a(202784),
                r = a(325686),
                i = a(392237),
                o = a(166852),
                s = a(725516),
                l = a(86657),
                c = a(988290);
            function m({ fileAttachments: e = [], intermediateImageResults: t = [], isLoading: a, isAborted: i, messageId: m, expectedImageAspectRatio: d }) {
                const g = (0, c.ZP)().isGrokShare,
                    f = (0, s.z)(),
                    h = n.useRef(new Set()),
                    y = n.useCallback(
                        (t) => {
                            if (a) return;
                            const n = t.url || "";
                            let r;
                            h.current.has(n) || (h.current.add(n), (r = h.current.size));
                            const i = e ? e.findIndex((e) => e.url === n) : 0;
                            f.scribe({ action: "click", component: "grok_inline_gallery", element: `slot${i}`, data: { position: r, url: n } });
                        },
                        [f, e, a],
                    ),
                    _ = n.useMemo(
                        () =>
                            (0, o.Z)([...t.map((e) => e.imageIdStr), ...e.map((e) => e.mediaId)])
                                .filter(Boolean)
                                .sort(),
                        [e, t],
                    );
                if (0 === e.length) return null;
                const b = e.length > 1 ? p : u;
                return n.createElement(
                    r.Z,
                    { style: b.containerStyle },
                    e.map((o, s) => {
                        const c = _[s],
                            u = e.find((e) => e.mediaId === c) ?? { fileName: "image", mimeType: "image/jpeg" },
                            p = t.filter((e) => e.imageIdStr === c);
                        return n.createElement(r.Z, { key: `slot_${s}`, style: b.itemStyle }, n.createElement(l.Z, { allFiles: e, aspectRatio: b.aspectRatio || d, file: u, index: s, intermediateResults: p, isAborted: i, isImageActionsEnabled: !g, isLoading: !!a, key: `image_${s}`, messageId: m, onViewed: y, useActionRowButtons: !g, withMediaCarousel: !g }));
                    }),
                );
            }
            const d = i.default.create((e) => ({ fileAttachmentContainer: { paddingHorizontal: e.spaces.space8, width: "100%", marginVertical: e.spaces.space12, flexDirection: "row", gap: e.spaces.space4 }, fileAttachmentContainerMulti: { flexWrap: "wrap", gap: e.spaces.space12 }, fileAttachmentMultiItem: { width: "48%" }, fileAttachmentSingleItem: { width: "70%" } })),
                u = { aspectRatio: void 0, itemStyle: d.fileAttachmentSingleItem, containerStyle: d.fileAttachmentContainer },
                p = { aspectRatio: void 0, itemStyle: d.fileAttachmentMultiItem, containerStyle: [d.fileAttachmentContainer, d.fileAttachmentContainerMulti] };
        },
        649328: (e, t, a) => {
            a.d(t, { x: () => d });
            var n = a(202784),
                r = a(392237),
                i = a(674132),
                o = a.n(i),
                s = a(166852),
                l = (a(353644), a(125363)),
                c = a(836255),
                m = a(464023);
            a(263160), a(916559), a(520595), a(94135);
            r.default.create((e) => ({ container: { width: "100%", flex: 1, maxHeight: "50%", padding: e.spaces.space16, justifyContent: "center", alignItems: "flex-start", borderRadius: e.borderRadii.large, overflow: "hidden", cursor: "pointer", gap: e.spaces.space8, backgroundColor: e.colors.gray50, transition: "background-color 0.5s" }, hovered: { backgroundColor: "light" === e.paletteName ? e.colors.gray300 : e.colors.gray200 } })), o().a3186bff, o().f9b2d343, r.default.create((e) => ({ container: { width: "100%", flexDirection: "row", maxWidth: m.vf, paddingHorizontal: e.spaces.space8, marginTop: e.spaces.space16, position: "relative", gap: e.spaces.space8 }, containerMobile: { zoom: 0.85, paddingHorizontal: e.spaces.space16 }, carouselWrapper: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large, overflow: "hidden", position: "relative", flex: 3 }, tweets: { width: "100%", position: "relative" }, tweet: { marginEnd: 0, width: "100%" }, seeAllButton: { flex: 1, width: 120, minWidth: 120, gap: e.spaces.space8, height: "100%" } }));
            function d({ postIds: e }) {
                const t = (0, l.oR)(),
                    a = e
                        .map((e) => c.Z.selectHydrated(t.getState(), e))
                        .filter(Boolean)
                        .map((e) => e.user.profile_image_url_https)
                        .filter(Boolean),
                    r = (0, s.Z)(a),
                    i = r.join("");
                return n.useMemo(() => r, [i]);
            }
        },
        94135: (e, t, a) => {
            a.d(t, { a: () => c });
            var n = a(202784),
                r = a(325686),
                i = a(466792),
                o = a(642153),
                s = a(731708),
                l = a(392237);
            const c = ({ images: e, label: t, onClick: a, withAnimation: l }) => n.createElement(i.Z, null, ({ isHovered: i }) => n.createElement(r.Z, { onClick: a, style: [m.container, i ? m.hovered : void 0, l ? m.animation : void 0] }, e.length > 0 ? n.createElement(o.Z, { userAvatarSize: "medium", userAvatarUrls: e.slice(0, 3), withIncreasedSpacing: e.length < 2 }) : null, n.createElement(s.ZP, { color: "gray900", size: "subtext1" }, t))),
                m = l.default.create((e) => ({ container: { flexDirection: "row", paddingVertical: e.spaces.space8, paddingEnd: e.spaces.space12, paddingStart: e.spaces.space8, alignItems: "center", borderRadius: e.borderRadii.infinite, overflow: "hidden", cursor: "pointer", gap: e.spaces.space8, backgroundColor: e.colors.gray0, transition: "background-color 0.2s" }, animation: { opacity: 1, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, hovered: { backgroundColor: e.colors.gray100 } }));
        },
        809311: (e, t, a) => {
            a.d(t, { p: () => u });
            a(543673), a(240753), a(128399);
            var n = a(202784),
                r = a(325686),
                i = a(466792),
                o = a(530732),
                s = a(731708),
                l = a(992942),
                c = a(392237),
                m = a(306677),
                d = a(725516);
            const u = ({ item: e, number: t }) => {
                    const a = (0, d.z)(),
                        c = n.useRef(!1),
                        u = n.useCallback(() => {
                            a.scribe({ action: "click", component: "web_result_item", data: { url: e.url } });
                        }, [e, a]),
                        g = n.useCallback(() => {
                            c.current || ((c.current = !0), a.scribe({ action: "impression", component: "web_result_item", data: { url: e.url } }));
                        }, [a, e.url]);
                    let f = new URL(e.url).hostname;
                    f.startsWith("www.") && (f = f.slice(4));
                    const h = e.title?.trim() || f;
                    return n.createElement(i.Z, null, ({ isHovered: a }) => n.createElement(o.Z, { link: e.url, onPress: u }, n.createElement(r.Z, { style: [p.container, a ? p.hovered : null] }, n.createElement(r.Z, { style: p.content }, n.createElement(s.ZP, { size: "body", style: p.title, weight: "medium" }, "number" == typeof t ? `${t}. ` : void 0, h), e.snippet ? n.createElement(s.ZP, { color: "gray900", numberOfLines: 5, size: "subtext1", style: p.snippet }, e.snippet) : null), n.createElement(r.Z, { style: p.hostnameContainer }, e.favicon_base64 ? n.createElement(l.Z, { source: { uri: e.favicon_base64 }, style: p.favicon }) : null, n.createElement(s.ZP, { color: "gray700", size: "subtext1" }, f)), n.createElement(m.D, { id: `web_result_item_${e.url}`, onFullyVisible: g, position: "bottom", testID: `web_result_item_${e.url}` }))));
                },
                p = c.default.create((e) => ({ container: { width: "100%", padding: e.spaces.space16, backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, cursor: "pointer" }, hovered: { backgroundColor: e.colors.gray100 }, content: { gap: e.spaces.space8 }, title: { lineHeight: "150%" }, snippet: { lineHeight: "150%" }, hostnameContainer: { marginTop: e.spaces.space16, flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, favicon: { width: 16, height: 16, backgroundColor: e.colors.white } }));
        },
        993441: (e, t, a) => {
            a.d(t, { e: () => x });
            var n = a(202784),
                r = a(744610),
                i = a(555874),
                o = a(67369),
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
                _ = a(992942);
            function b({ image: e, images: t, index: a, isMobileView: r, layout: i }) {
                const o = (0, h.useHistory)(),
                    s = (0, u.Z)(),
                    l = i.normalWidth,
                    c = (3 * l) / 4,
                    m = n.useCallback(() => ({ width: l, height: c, zIndex: 20, marginRight: r && a !== t.length - 1 ? 8 : 0 }), [c, l, t.length, a, r]),
                    d =
                        e &&
                        (function (e) {
                            return e && e.original_info ? { url: e.media_url_https, width: e.original_info.width, height: e.original_info.height } : void 0;
                        })(e),
                    p = n.useCallback(() => {
                        s.scribe({ element: "grok_search_summary_view_image_modal", action: "click" }), o.push({ pathname: "/i/grok/media", state: { file: d } });
                    }, [s, o, d]);
                return n.createElement(f.Z, { style: m() }, e.media_url_https ? n.createElement(y.Z, { onClick: p, style: [w.imageContainer, { width: l, height: c }] }, n.createElement(_.Z, { source: { uri: e.media_url_https }, style: w.image })) : null);
            }
            const w = l.default.create((e) => ({ imageContainer: { borderRadius: e.borderRadii.large, marginStart: 0, marginBottom: e.spaces.space4, overflow: "hidden", zIndex: 100 }, image: { width: "100%", height: "100%" } })),
                v = 150,
                C = 6,
                k = 5;
            function x({ isAnimated: e, mediaIds: t }) {
                const a = (p.vf - (k + 1) * C) / k,
                    l = (0, g.X)({ mediaIds: t }),
                    f = n.useRef(new r.Z.Value(e ? 0 : 1)).current,
                    [h, y] = n.useState([]),
                    [_, w] = n.useState(a),
                    [x, Z] = n.useState((3 * a) / 4 + 16),
                    T = (0, o.LX)(),
                    S = (0, u.Z)(),
                    I = n.useRef(
                        (0, c.Z)((e) => {
                            ((e) => {
                                const t = (Math.min(e, p.vf) - (k + 1) * C) / k;
                                w(t), Z((3 * t) / 4 + 16);
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
                    R = n.useMemo(
                        () =>
                            (0, m.Z)((e) => {
                                y(e);
                            }, 1e3),
                        [y],
                    );
                n.useEffect(() => {
                    const e = l.map((e) => e.media_key);
                    return (
                        (e.length !== h.length || e.some((e, t) => e !== h[t])) && R(l),
                        () => {
                            R.clear();
                        }
                    );
                }, [l, h, R]);
                const P = (e) => (!Number.isFinite(e) || e < 16 ? 16 : e),
                    z = n.useRef(new r.Z.Value(P(x))).current;
                n.useEffect(() => {
                    const e = P(x);
                    e !== z._value && r.Z.spring(z, { toValue: e, friction: 30, tension: 300, duration: 150, useNativeDriver: !1 }).start();
                }, [x, z]),
                    n.useEffect(() => {
                        e && r.Z.timing(f, { toValue: 1, duration: 2e3, useNativeDriver: !1 }).start();
                    }, [f, e]);
                const M = n.useCallback(() => {
                    S.scribe({ element: "grok_search_tweet_media", action: "impression" });
                }, [S]);
                return n.createElement(r.Z.View, { ref: D, style: [E.container, { opacity: f, height: z, maxWidth: p.vf, width: "100%" }, T ? E.scrollContainer : null] }, n.createElement(d.D, { id: "grok_tweets_media_gallery", onFullyVisible: M, position: "bottom", testID: "grok_tweets_media_gallery" }), n.createElement(i.Z, { columnWrapperStyle: T ? void 0 : E.row, data: l, horizontal: T, key: `${l.length}-${T ? "1" : k}`, keyExtractor: (e) => e.media_key, numColumns: T ? 1 : k, renderItem: ({ index: e, item: t }) => n.createElement(b, { image: t, images: l, index: e, isMobileView: T, layout: { normalWidth: T ? v : _, containerHeight: x } }), scrollEnabled: T, scrollEventThrottle: 16, showsHorizontalScrollIndicator: !1 }));
            }
            const E = l.default.create((e) => ({ container: { flex: 1, justifyContent: "flex-start", paddingEnd: e.spaces.space16, paddingStart: e.spaces.space16, paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 }, row: { justifyContent: "flex-start", gap: e.spaces.space8, alignItems: "flex-start", marginBottom: e.spaces.space8 }, scrollContainer: { WebkitOverflowScrolling: "touch", scrollSnapType: "x mandatory" } }));
        },
        799027: (e, t, a) => {
            a.d(t, { i: () => F, Z: () => N });
            var n = a(207274),
                r = a(822343),
                i = a(202784),
                o = a(325686),
                s = a(10622),
                l = a.n(s),
                c = (a(585488), a(437429)),
                m = a.n(c),
                d = a(525271),
                u = a(731708),
                p = a(154003),
                g = a(392237),
                f = a(674132),
                h = a.n(f),
                y = a(306677),
                _ = a(725516),
                b = a(623494),
                w = a(378471),
                v = a(988290),
                C = (a(136728), a(107267)),
                k = a(370006),
                x = a(530732),
                E = a(530243),
                Z = a(721270);
            const T = h().d9d36880,
                S = h().g9677c6e;
            function I({ analytics: e, memoryConversation: t, onBack: a, onForget: n }) {
                const r = (0, C.useHistory)(),
                    [s, l] = i.useState(!1),
                    c = i.useCallback(() => {
                        l(!0);
                    }, []);
                return i.createElement(
                    o.Z,
                    { style: D.container },
                    i.createElement(
                        o.Z,
                        { style: D.headerContainer },
                        i.createElement(
                            o.Z,
                            { style: D.leftHeaderContainer },
                            i.createElement(k.Z, { onClick: a }),
                            i.createElement(
                                x.Z,
                                {
                                    onClick: () => {
                                        (0, b.qQ)(e, t.conversation_id), r.push(`/i/grok?conversation=${t.conversation_id}`);
                                    },
                                    style: D.conversationTitleContainer,
                                    withoutInteractiveStyles: !0,
                                },
                                ({ isHovered: e }) => i.createElement(o.Z, { style: [D.conversationTitleContainer, e ? D.hoveredConversationTitleContainer : void 0] }, i.createElement(o.Z, { style: D.conversationTitle }, i.createElement(u.ZP, { numberOfLines: 1, size: "headline2" }, t.conversation_title)), i.createElement(o.Z, { style: D.goToIconContainer }, i.createElement(E.default, { style: D.goToIcon }))),
                            ),
                        ),
                        i.createElement(p.ZP, { backgroundColor: "gray50", borderColor: "transparent", fontWeight: "normal", hoverLabel: { label: s ? S : T }, onClick: s ? n : c, type: s ? "destructiveFilled" : void 0 }, s ? S : T),
                    ),
                    !!t.conversation_summary && i.createElement(u.ZP, { size: "body", style: D.summary, weight: "normal" }, i.createElement(Z.GrokMarkdown, { isAnimated: !1, markdownText: t.conversation_summary })),
                );
            }
            const D = g.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space12, animationDuration: "0.3s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateX(30px)" }, "100%": { opacity: 1, transform: "translateX(0px)" } }], animationFillMode: "both" }, headerContainer: { width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space20 }, leftHeaderContainer: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, conversationTitleContainer: { maxWidth: "100%", flexGrow: 0, flexShrink: 1, display: "flex", flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderColor: "transparent", borderStyle: "solid", transition: "border-color 0.2s ease", cursor: "pointer", gap: e.spaces.space4 }, conversationTitle: { maxWidth: "100%", textOverflow: "ellipsis", overflow: "hidden", flexGrow: 0, flexShrink: 1 }, hoveredConversationTitleContainer: { borderColor: e.colors.brandColor }, goToIconContainer: { width: e.spaces.space16, height: e.spaces.space16 }, goToIcon: { width: "100%", height: "100%", transform: [{ scaleX: -1 }] }, summary: { marginTop: e.spaces.space16, width: "100%" } }));
            var R = a(757483),
                P = a(215337),
                z = a(207137);
            const M = h().g02dacc0,
                A = h().c6e845c0,
                H = [h().a5fa4a86, h().c51724a4, h().j244ceb2, h().b22b12e0, h().h3023cac, h().b10dbffa, h().c81da1b6, h().d4e4d3ce, h().c3418f9a, h().b64dada6, h().ad24ec20, h().c7902252];
            function B({ memoryConversation: e, onClick: t, style: a }) {
                const n = g.default.theme.colors.navigationBackground,
                    r = i.useCallback(() => [R.Z.hexToCss(n, 0), R.Z.hexToCss(n, 0.8), R.Z.hexToCss(n, 1)], [n]),
                    s = i.useMemo(() => {
                        if (!e.updated_at_sec) return "";
                        const t = new Date(1e3 * e.updated_at_sec);
                        if ((0, z.zk)(t)) return M;
                        if ((0, z.gO)(t)) return A;
                        return `${H[t.getMonth()]} ${t.getDate()}`;
                    }, [e.updated_at_sec]);
                return i.createElement(x.Z, { onClick: t, withoutInteractiveStyles: !0 }, ({ isHovered: t }) => i.createElement(o.Z, { style: [W.outerContainer, t ? W.outerHoveredContainer : void 0, a] }, i.createElement(o.Z, { style: W.container }, i.createElement(o.Z, { style: W.contentContainer }, i.createElement(o.Z, { style: W.headerContainer }, !!e.conversation_title && i.createElement(o.Z, { style: W.conversationTitleContainer }, i.createElement(u.ZP, { numberOfLines: 1, style: W.conversationTitle }, e.conversation_title)), !!s && i.createElement(o.Z, null, i.createElement(u.ZP, { numberOfLines: 1, style: W.date }, s))), !!e.conversation_summary && i.createElement(o.Z, { style: W.summaryContainer }, i.createElement(u.ZP, { size: "subtext2", weight: "normal" }, i.createElement(Z.GrokMarkdown, { isAnimated: !1, markdownText: e.conversation_summary }))))), i.createElement(P.Z, { colors: r(), style: [W.traceGradientBottom, t ? { height: "40%" } : void 0] })));
            }
            const W = g.default.create((e) => ({ outerContainer: { backgroundColor: "transparent", transition: "background-color 0.2s ease", width: "100%", cursor: "pointer", borderRadius: e.borderRadii.medium, position: "relative" }, outerHoveredContainer: { backgroundColor: e.colors.gray0 }, container: { padding: e.spaces.space12 }, contentContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8, flexShrink: 1 }, headerContainer: { width: "100%", maxWidth: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space8 }, conversationTitleContainer: { maxWidth: "100%", textOverflow: "ellipsis", overflow: "hidden", flexGrow: 0, flexShrink: 1 }, conversationTitle: {}, date: { fontSize: e.fontSizes.subtext1, color: e.colors.gray800 }, summaryContainer: { maxHeight: 80, overflow: "hidden" }, traceGradientBottom: { position: "absolute", width: "100%", height: "30%", transition: "height 0.2s ease", start: 0, bottom: 0, borderBottomStartRadius: e.borderRadii.medium, borderBottomEndRadius: e.borderRadii.medium } })),
                F = h().d700b268,
                L = h().cd7bdab2,
                V = h().f21b84de,
                $ = h().gf5e9ea6,
                j = 3e3,
                G = h().i52a9cb8,
                O = r.Z,
                X = n.Z;
            function N({ memoryReferences: e, onDrawerDismiss: t }) {
                const { isCompactLayout: a, isGrokDrawer: n } = (0, v.ZP)(),
                    r = a && !n,
                    s = (0, _.z)(),
                    c = m()(),
                    g = i.useRef(null),
                    [f, h] = i.useState(!0),
                    [C, k] = i.useState([]),
                    [x, E] = i.useState(!1),
                    [Z, T] = i.useState(null),
                    [S, D] = i.useState(null);
                i.useEffect(() => {
                    l()(c, O, { conversation_ids: e.map((e) => e.conversation_id) })
                        .toPromise()
                        .then((e) => {
                            k(e?.get_grok_memory_related_conversations?.related_conversations || []), h(!1);
                        })
                        .catch(() => {
                            k([]), h(!1);
                        });
                }, [c, e]);
                const R = i.useCallback(() => {
                        (0, b.NH)(s);
                    }, [s]),
                    P = i.useCallback(
                        (e) => {
                            const t = { idx: e, memory: C[e] },
                                a = t.memory.conversation_id;
                            D(t),
                                k([...C.slice(0, e), ...C.slice(e + 1)]),
                                T(null),
                                E(!0),
                                (g.current = setTimeout(() => {
                                    E(!1),
                                        l()(c, X, { conversation_ids: [a] })
                                            .toPromise()
                                            .then(() => {
                                                D(null);
                                            })
                                            .catch((e) => {
                                                (0, b.zX)(s, a, e.message);
                                            });
                                }, j)),
                                (0, b.UV)(s, a);
                        },
                        [C, c, s],
                    ),
                    z = i.useCallback(() => {
                        S && (E(!1), clearTimeout(g.current), k([...C.slice(0, S.idx), S.memory, ...C.slice(S.idx)]));
                    }, [S, C]);
                return i.createElement(
                    d.Z,
                    { align: "right", buttonType: "primaryText", onDismissed: t, style: K.drawer, subtitle: L, title: F },
                    i.createElement(
                        o.Z,
                        { style: [K.container, r ? K.compactContainer : void 0] },
                        i.createElement(y.D, { id: "grok_memory_drawer", onFullyVisible: R, position: "top", testID: "grok_memory_drawer" }),
                        null !== Z
                            ? i.createElement(I, { analytics: s, memoryConversation: C[Z], onBack: () => T(null), onForget: () => P(Z) })
                            : i.createElement(
                                  o.Z,
                                  { style: K.memoriesPreviewContainer },
                                  f
                                      ? i.createElement(o.Z, { style: K.spinnerContainer }, i.createElement(w.Z, null))
                                      : C.length > 0
                                        ? C.map((e, t) =>
                                              i.createElement(B, {
                                                  key: `${e.conversation_id}-${e.conversation_title?.length || ""}-${e.conversation_summary?.length || ""}`,
                                                  memoryConversation: e,
                                                  onClick: () => {
                                                      T(t), (0, b.zC)(s, C[t].conversation_id);
                                                  },
                                                  style: [K.memoryCard, { animationDelay: 0.02 * t + "s" }],
                                              }),
                                          )
                                        : i.createElement(u.ZP, { style: K.noMemoriesLabel }, G),
                              ),
                    ),
                    x && i.createElement(o.Z, { style: K.undoToastContainer }, i.createElement(o.Z, { style: [K.undoToast, { animationDuration: (j - 500) / 1e3 + "s" }] }, i.createElement(u.ZP, null, V), i.createElement(p.ZP, { backgroundColor: "transparent", borderColor: "gray200", onClick: z, size: "small" }, $))),
                );
            }
            const K = g.default.create((e) => ({ drawer: { paddingTop: e.spaces.space16, position: "relative" }, container: { height: "100%", padding: e.spaces.space16, width: 500 }, compactContainer: { width: "100%" }, memoriesPreviewContainer: { width: "100%", display: "flex", flexDirection: "column", gap: e.spaces.space16 }, spinnerContainer: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }, pageSelector: { marginVertical: e.spaces.space12 }, memoryCard: { flex: 1, animationDuration: "0.3s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateX(-30px)" }, "100%": { opacity: 1, transform: "translateX(0px)" } }], animationFillMode: "both" }, undoToastContainer: { position: "fixed", bottom: e.spaces.space16, width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }, undoToast: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space16, padding: e.spaces.space16, backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.medium, animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(10px)" }, "10%": { opacity: 1, transform: "translateY(0px)" }, "90%": { opacity: 1, transform: "translateY(0px)" }, "100%": { opacity: 0, transform: "translateY(10px)" } }], animationFillMode: "both" }, noMemoriesLabel: { marginHorizontal: e.spaces.space4 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-22b50fbf.5292c2ba.js.map

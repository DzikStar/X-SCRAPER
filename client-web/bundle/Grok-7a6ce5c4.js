"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-7a6ce5c4"],
    {
        567778: (e, t, n) => {
            n.d(t, { w: () => _ });
            var a = n(202784),
                r = n(992942),
                s = n(154003),
                i = n(674132),
                o = n.n(i),
                l = n(323265),
                c = n(952793),
                m = n(725516),
                u = n(226247),
                d = n(464279),
                p = n(560619);
            const g = "grok",
                h = "grok_3",
                f = o().ha8fbe22,
                y = o().d95c232a,
                b = o().h2671312,
                w = o().a1bb9c8a,
                E = o().b08ef3ae,
                x = o().jf9363b8,
                k = o().ef018bf6,
                v = o().d95c232a,
                C = o().cdace6d2,
                _ = ({ upsell: e }) => {
                    (0, m.z)().scribe({ action: "impression", component: "upsell_banner", element: e.upsellType });
                    const t = (0, c.hC)("responsive_web_grok_upsell_free_to_premium");
                    return "free_grok_2_mini_feature" === e.upsellType || "free_grok_2_feature" === e.upsellType || "free_grok_3_feature" === e.upsellType || "free_grok_3_mini_feature" === e.upsellType || "free_grok_3_reasoning_feature" === e.upsellType || "free_grok_3_deepsearch_feature" === e.upsellType || "free_grok_3_mini_reasoning_feature" === e.upsellType || "free_grok_3_mini_deepsearch_feature" === e.upsellType ? (t ? a.createElement(u.e, { button: a.createElement(Z, null), text: E, title: b }) : a.createElement(u.e, { button: a.createElement(Z, { referringPage: h }), text: x, title: w })) : "premium_grok_2_feature" === e.upsellType || "premium_grok_3_feature" === e.upsellType || "premium_grok_3_mini_feature" === e.upsellType || "premium_grok_3_reasoning_feature" === e.upsellType || "premium_grok_3_deepsearch_feature" === e.upsellType || "premium_grok_3_mini_reasoning_feature" === e.upsellType || "premium_grok_3_mini_deepsearch_feature" === e.upsellType ? a.createElement(u.e, { button: a.createElement(Z, { referringPage: h }), text: x, title: w }) : "free_image_understanding_feature" === e.upsellType ? a.createElement(u.e, { button: a.createElement(Z, null), image: a.createElement(r.Z, { source: { uri: p }, style: { width: 102, height: 85 } }), text: v, title: k }) : "free_image_generation_feature" === e.upsellType ? a.createElement(u.e, { button: a.createElement(Z, null), image: a.createElement(r.Z, { source: { uri: d }, style: { width: 132, height: 115 } }), text: y, title: f }) : null;
                },
                Z = ({ referringPage: e }) => {
                    const t = !!l.ZP.isWebView(),
                        n = (0, m.z)(),
                        r = a.useCallback(() => n.scribe({ action: "click", component: "upsell_banner", element: "upgrade-button" }), [n]);
                    return a.createElement(s.ZP, { link: { pathname: "/i/premium_sign_up", state: { referring_page: e || g }, external: t, query: { referring_page: e || g } }, onPress: r, size: "small", type: "primaryFilled" }, C);
                };
        },
        986274: (e, t, n) => {
            n.d(t, { E: () => o });
            var a = n(202784),
                r = n(325686),
                s = n(731708),
                i = n(392237);
            const o = ({ performanceMetrics: e, userChatItemId: t }) => {
                    const [n, i] = a.useState(void 0),
                        { timeToCompletion: o, timeToFirstChunkMs: c, timeToFirstTextMs: m, traceId: u } = e;
                    return void 0 === n ? a.createElement(r.Z, { style: l.container }, m ? a.createElement(s.ZP, { onClick: () => i(!0), style: l.showDebugLink }, (m / 1e3).toString(), "s") : a.createElement(s.ZP, { onClick: () => i(!1), style: l.showDebugLink }, "Debug")) : !1 === n ? null : a.createElement(r.Z, { style: l.container }, a.createElement(s.ZP, { style: l.text }, "Debug / Performance"), u ? a.createElement(s.ZP, { style: l.text }, "Trace ID: ", u) : null, t ? a.createElement(s.ZP, { style: l.text }, "Item ID: ", t) : null, c ? a.createElement(s.ZP, { style: l.text }, "Time to first chunk: ", (c / 1e3).toString(), "s") : null, m ? a.createElement(s.ZP, { style: l.text }, "Time to first text: ", (m / 1e3).toString(), "s") : null, o ? a.createElement(s.ZP, { style: l.text }, "Time to completion: ", (o / 1e3).toString(), "s") : null, a.createElement(s.ZP, { onClick: () => i(!1), style: l.showDebugLink }, "hide this"));
                },
                l = i.default.create((e) => ({ container: { marginStart: e.spaces.space8, alignItems: "flex-start", justifyContent: "flex-start" }, text: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 }, showDebugLink: { cursor: "pointer", width: "fit-content", color: e.colors.gray700, fontSize: e.fontSizes.subtext1, borderBottomColor: e.colors.gray100, borderBottomStyle: "dotted", borderBottomWidth: e.spaces.space1 } }));
        },
        618770: (e, t, n) => {
            n.d(t, { K: () => m });
            var a = n(202784),
                r = n(325686),
                s = n(392237),
                i = n(166852),
                o = n(725516),
                l = n(86657),
                c = n(988290);
            function m({ fileAttachments: e = [], intermediateImageResults: t = [], isLoading: n, isAborted: s, messageId: m, expectedImageAspectRatio: u }) {
                const g = (0, c.ZP)().isGrokShare,
                    h = (0, o.z)(),
                    f = a.useRef(new Set()),
                    y = a.useCallback(
                        (t) => {
                            if (n) return;
                            const a = t.url || "";
                            let r;
                            f.current.has(a) || (f.current.add(a), (r = f.current.size));
                            const s = e ? e.findIndex((e) => e.url === a) : 0;
                            h.scribe({ action: "click", component: "grok_inline_gallery", element: `slot${s}`, data: { position: r, url: a } });
                        },
                        [h, e, n],
                    ),
                    b = a.useMemo(
                        () =>
                            (0, i.Z)([...t.map((e) => e.imageIdStr), ...e.map((e) => e.mediaId)])
                                .filter(Boolean)
                                .sort(),
                        [e, t],
                    );
                if (0 === e.length) return null;
                const w = e.length > 1 ? p : d;
                return a.createElement(
                    r.Z,
                    { style: w.containerStyle },
                    e.map((i, o) => {
                        const c = b[o],
                            d = e.find((e) => e.mediaId === c) ?? { fileName: "image", mimeType: "image/jpeg" },
                            p = t.filter((e) => e.imageIdStr === c);
                        return a.createElement(r.Z, { key: `slot_${o}`, style: w.itemStyle }, a.createElement(l.Z, { allFiles: e, aspectRatio: w.aspectRatio || u, file: d, index: o, intermediateResults: p, isAborted: s, isImageActionsEnabled: !g, isLoading: !!n, key: `image_${o}`, messageId: m, onViewed: y, useActionRowButtons: !g, withMediaCarousel: !g }));
                    }),
                );
            }
            const u = s.default.create((e) => ({ fileAttachmentContainer: { paddingHorizontal: e.spaces.space8, width: "100%", marginVertical: e.spaces.space12, flexDirection: "row", gap: e.spaces.space4 }, fileAttachmentContainerMulti: { flexWrap: "wrap", gap: e.spaces.space12 }, fileAttachmentMultiItem: { width: "48%" }, fileAttachmentSingleItem: { width: "70%" } })),
                d = { aspectRatio: void 0, itemStyle: u.fileAttachmentSingleItem, containerStyle: u.fileAttachmentContainer },
                p = { aspectRatio: void 0, itemStyle: u.fileAttachmentMultiItem, containerStyle: [u.fileAttachmentContainer, u.fileAttachmentContainerMulti] };
        },
        649328: (e, t, n) => {
            n.d(t, { B: () => _, x: () => S });
            var a = n(202784),
                r = n(325686),
                s = n(67369),
                i = n(392237),
                o = n(674132),
                l = n.n(o),
                c = n(166852),
                m = n(353644),
                u = n(125363),
                d = n(836255),
                p = n(464023),
                g = n(263160),
                h = n(916559),
                f = n(520595),
                y = n(94135),
                b = n(466792),
                w = n(642153),
                E = n(731708);
            const x = ({ images: e, label: t, onClick: n }) => a.createElement(b.Z, null, ({ isHovered: s }) => a.createElement(r.Z, { onClick: n, style: [k.container, s ? k.hovered : void 0] }, e.length > 0 ? a.createElement(w.Z, { style: { borderRadii: 0 }, userAvatarSize: "medium", userAvatarUrls: e.slice(0, 6), withIncreasedSpacing: e.length < 5 }) : null, a.createElement(E.ZP, { color: "gray900", size: "subtext1" }, t))),
                k = i.default.create((e) => ({ container: { width: "100%", flex: 1, maxHeight: "50%", padding: e.spaces.space16, justifyContent: "center", alignItems: "flex-start", borderRadius: e.borderRadii.large, overflow: "hidden", cursor: "pointer", gap: e.spaces.space8, backgroundColor: e.colors.gray50, transition: "background-color 0.5s" }, hovered: { backgroundColor: "light" === e.paletteName ? e.colors.gray300 : e.colors.gray200 } })),
                v = l().a3186bff,
                C = l().f9b2d343,
                _ = ({ postIds: e, webResults: t }) => {
                    const n = (0, s.JS)(),
                        i = (0, g.Z)(),
                        [o, l] = a.useState(!1),
                        [u, d] = a.useState(!1),
                        p = a.useCallback(() => {
                            l(!0);
                        }, []),
                        b = a.useCallback(() => {
                            l(!1);
                        }, []),
                        w = a.useCallback(() => {
                            d(!0);
                        }, []),
                        E = a.useCallback(() => {
                            d(!1);
                        }, []),
                        k = S({ postIds: e }),
                        _ = a.useMemo(() => (0, c.Z)(t.map((e) => e.favicon_base64).filter(Boolean)), [t]);
                    if (0 === e.length && 0 === t.length) return null;
                    const I = t.length > 0,
                        T = e.length > 0;
                    return a.createElement(r.Z, { style: [Z.container, n ? Z.containerMobile : void 0] }, e.length > 0 ? a.createElement(r.Z, { style: Z.carouselWrapper }, a.createElement(m.Z, { carouselProps: i, childrenStyle: Z.tweet, shouldShowBorder: !1, style: Z.tweets, tweetIds: e })) : null, a.createElement(r.Z, { style: Z.seeAllButton }, I ? (T ? a.createElement(x, { images: _, label: v({ count: t.length }), onClick: w }) : a.createElement(y.a, { images: _, label: v({ count: t.length }), onClick: w })) : null, e.length > 0 ? a.createElement(x, { images: k, label: C({ count: e.length }), onClick: p }) : null), o ? a.createElement(f.a, { onDrawerDismiss: b, postIds: e }) : null, u ? a.createElement(h.E, { onDrawerDismiss: E, webResults: t }) : null);
                },
                Z = i.default.create((e) => ({ container: { width: "100%", flexDirection: "row", maxWidth: p.vf, paddingHorizontal: e.spaces.space8, marginTop: e.spaces.space16, position: "relative", gap: e.spaces.space8 }, containerMobile: { zoom: 0.85, paddingHorizontal: e.spaces.space16 }, carouselWrapper: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large, overflow: "hidden", position: "relative", flex: 3 }, tweets: { width: "100%", position: "relative" }, tweet: { marginEnd: 0, width: "100%" }, seeAllButton: { flex: 1, width: 120, minWidth: 120, gap: e.spaces.space8, height: "100%" } }));
            function S({ postIds: e }) {
                const t = (0, u.oR)(),
                    n = e
                        .map((e) => d.Z.selectHydrated(t.getState(), e))
                        .filter(Boolean)
                        .map((e) => e.user.profile_image_url_https)
                        .filter(Boolean),
                    r = (0, c.Z)(n),
                    s = r.join("");
                return a.useMemo(() => r, [s]);
            }
        },
        94135: (e, t, n) => {
            n.d(t, { a: () => c });
            var a = n(202784),
                r = n(325686),
                s = n(466792),
                i = n(642153),
                o = n(731708),
                l = n(392237);
            const c = ({ images: e, label: t, onClick: n, withAnimation: l }) => a.createElement(s.Z, null, ({ isHovered: s }) => a.createElement(r.Z, { onClick: n, style: [m.container, s ? m.hovered : void 0, l ? m.animation : void 0] }, e.length > 0 ? a.createElement(i.Z, { userAvatarSize: "medium", userAvatarUrls: e.slice(0, 6), withIncreasedSpacing: e.length < 5 }) : null, a.createElement(o.ZP, { color: "gray900", size: "subtext1" }, t))),
                m = l.default.create((e) => ({ container: { flexDirection: "row", paddingVertical: e.spaces.space8, paddingEnd: e.spaces.space12, paddingStart: e.spaces.space8, alignItems: "center", borderRadius: e.borderRadii.infinite, overflow: "hidden", cursor: "pointer", gap: e.spaces.space8, backgroundColor: e.colors.gray0, transition: "background-color 0.5s" }, animation: { opacity: 1, animationDuration: "2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, hovered: { backgroundColor: e.colors.gray100 } }));
        },
        809311: (e, t, n) => {
            n.d(t, { p: () => d });
            n(543673), n(240753), n(128399);
            var a = n(202784),
                r = n(325686),
                s = n(466792),
                i = n(530732),
                o = n(731708),
                l = n(992942),
                c = n(392237),
                m = n(306677),
                u = n(725516);
            const d = ({ item: e, number: t }) => {
                    const n = (0, u.z)(),
                        c = a.useRef(!1),
                        d = a.useCallback(() => {
                            n.scribe({ action: "click", component: "web_result_item", data: { url: e.url } });
                        }, [e, n]),
                        g = a.useCallback(() => {
                            c.current || ((c.current = !0), n.scribe({ action: "impression", component: "web_result_item", data: { url: e.url } }));
                        }, [n, e.url]);
                    let h = new URL(e.url).hostname;
                    h.startsWith("www.") && (h = h.slice(4));
                    const f = e.title?.trim() || h;
                    return a.createElement(s.Z, null, ({ isHovered: n }) => a.createElement(i.Z, { link: e.url, onPress: d }, a.createElement(r.Z, { style: [p.container, n ? p.hovered : null] }, a.createElement(r.Z, { style: p.content }, a.createElement(o.ZP, { size: "body", style: p.title, weight: "medium" }, "number" == typeof t ? `${t}. ` : void 0, f), e.snippet ? a.createElement(o.ZP, { color: "gray900", numberOfLines: 5, size: "subtext1", style: p.snippet }, e.snippet) : null), a.createElement(r.Z, { style: p.hostnameContainer }, e.favicon_base64 ? a.createElement(l.Z, { source: { uri: e.favicon_base64 }, style: p.favicon }) : null, a.createElement(o.ZP, { color: "gray700", size: "subtext1" }, h)), a.createElement(m.D, { id: `web_result_item_${e.url}`, onFullyVisible: g, position: "bottom", testID: `web_result_item_${e.url}` }))));
                },
                p = c.default.create((e) => ({ container: { width: "100%", padding: e.spaces.space16, backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, cursor: "pointer" }, hovered: { backgroundColor: e.colors.gray100 }, content: { gap: e.spaces.space8 }, title: { lineHeight: "150%" }, snippet: { lineHeight: "150%" }, hostnameContainer: { marginTop: e.spaces.space16, flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, favicon: { width: 16, height: 16, backgroundColor: e.colors.white } }));
        },
        917118: (e, t, n) => {
            n.d(t, { e: () => I });
            var a = n(202784),
                r = n(744610),
                s = n(555874),
                i = n(67369),
                o = n(666305),
                l = n(392237),
                c = n(2138),
                m = n(666536),
                u = n(306677),
                d = n(725405),
                p = n(464023),
                g = n(984636),
                h = n.n(g),
                f = n(166852),
                y = n(125363),
                b = n(836255);
            n(136728);
            var w = n(325686),
                E = n(107267),
                x = n(530732),
                k = n(992942);
            function v({ image: e, images: t, index: n, isMobileView: r, layout: s }) {
                const i = (0, E.useHistory)(),
                    o = (0, d.Z)(),
                    l = s.normalWidth,
                    c = (3 * l) / 4,
                    m = a.useCallback(() => ({ width: l, height: c, zIndex: 20, marginRight: r && n !== t.length - 1 ? 8 : 0 }), [c, l, t.length, n, r]),
                    u =
                        e &&
                        (function (e) {
                            return e && e.original_info ? { url: e.media_url_https, width: e.original_info.width, height: e.original_info.height } : void 0;
                        })(e),
                    p = a.useCallback(() => {
                        o.scribe({ element: "grok_search_summary_view_image_modal", action: "click" }), i.push({ pathname: "/i/grok/media", state: { file: u } });
                    }, [o, i, u]);
                return a.createElement(w.Z, { style: m() }, e.media_url_https ? a.createElement(x.Z, { onClick: p, style: [C.imageContainer, { width: l, height: c }] }, a.createElement(k.Z, { source: { uri: e.media_url_https }, style: C.image })) : null);
            }
            const C = l.default.create((e) => ({ imageContainer: { borderRadius: e.borderRadii.large, marginStart: 0, marginBottom: e.spaces.space4, overflow: "hidden", zIndex: 100 }, image: { width: "100%", height: "100%" } })),
                _ = 150,
                Z = 6,
                S = 5;
            function I({ isAnimated: e, mediaIds: t }) {
                const n = (p.vf - (S + 1) * Z) / S,
                    l = (function ({ mediaIds: e }) {
                        const t = (0, y.oR)(),
                            n = e.map((e) => b.Z.selectHydrated(t.getState(), e)).filter(Boolean);
                        function r(e) {
                            return e?.entities?.media ? e.entities.media.filter((e) => "photo" === e.type) : [];
                        }
                        const s = (0, f.Z)(n)
                                .map((e) => ({ tweet: e, photos: r(e) }))
                                .filter((e) => e.photos.length > 0)
                                .sort((e, t) => t.tweet.favorite_count - e.tweet.favorite_count)
                                .slice(0, 5)
                                .flatMap((e) => e.photos)
                                .filter(Boolean),
                            i = h()(s, "media_url_https").slice(0, 5),
                            o = i.map((e) => e.media_key).filter(Boolean);
                        return a.useMemo(() => i, [o.join(",")]);
                    })({ mediaIds: t }),
                    g = a.useRef(new r.Z.Value(e ? 0 : 1)).current,
                    [w, E] = a.useState([]),
                    [x, k] = a.useState(n),
                    [C, I] = a.useState((3 * n) / 4 + 16),
                    R = (0, i.LX)(),
                    P = (0, d.Z)(),
                    D = a.useRef(
                        (0, c.Z)((e) => {
                            ((e) => {
                                const t = (Math.min(e, p.vf) - (S + 1) * Z) / S;
                                k(t), I((3 * t) / 4 + 16);
                            })(e);
                        }, 300),
                    ).current,
                    M = a.useCallback(
                        (e) => {
                            if (!e) return D.cancel(), void o.Z.unobserveAll(e);
                            o.Z.observe(e, (e) => {
                                const t = e.contentRect.width;
                                D(t);
                            });
                        },
                        [D],
                    ),
                    B = a.useMemo(
                        () =>
                            (0, m.Z)((e) => {
                                E(e);
                            }, 1e3),
                        [E],
                    );
                a.useEffect(() => {
                    const e = l.map((e) => e.media_key);
                    return (
                        (e.length !== w.length || e.some((e, t) => e !== w[t])) && B(l),
                        () => {
                            B.clear();
                        }
                    );
                }, [l, w, B]);
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
                    P.scribe({ element: "grok_search_tweet_media", action: "impression" });
                }, [P]);
                return a.createElement(r.Z.View, { ref: M, style: [T.container, { opacity: g, height: A, maxWidth: p.vf, width: "100%" }, R ? T.scrollContainer : null] }, a.createElement(u.D, { id: "grok_tweets_media_gallery", onFullyVisible: H, position: "bottom", testID: "grok_tweets_media_gallery" }), a.createElement(s.Z, { columnWrapperStyle: R ? void 0 : T.row, data: l, horizontal: R, key: `${l.length}-${R ? "1" : S}`, keyExtractor: (e) => e.media_key, numColumns: R ? 1 : S, renderItem: ({ index: e, item: t }) => a.createElement(v, { image: t, images: l, index: e, isMobileView: R, layout: { normalWidth: R ? _ : x, containerHeight: C } }), scrollEnabled: R, scrollEventThrottle: 16, showsHorizontalScrollIndicator: !1 }));
            }
            const T = l.default.create((e) => ({ container: { flex: 1, justifyContent: "flex-start", paddingEnd: e.spaces.space16, paddingStart: e.spaces.space16, paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 }, row: { justifyContent: "flex-start", gap: e.spaces.space8, alignItems: "flex-start", marginBottom: e.spaces.space8 }, scrollContainer: { WebkitOverflowScrolling: "touch", scrollSnapType: "x mandatory" } }));
        },
        799027: (e, t, n) => {
            n.d(t, { i: () => W, Z: () => K });
            var a = n(207274),
                r = n(822343),
                s = n(202784),
                i = n(325686),
                o = n(10622),
                l = n.n(o),
                c = (n(585488), n(437429)),
                m = n.n(c),
                u = n(525271),
                d = n(731708),
                p = n(154003),
                g = n(392237),
                h = n(674132),
                f = n.n(h),
                y = n(306677),
                b = n(725516),
                w = n(623494),
                E = n(378471),
                x = n(988290),
                k = (n(136728), n(107267)),
                v = n(370006),
                C = n(530732),
                _ = n(530243),
                Z = n(721270);
            const S = f().d9d36880,
                I = f().g9677c6e;
            function T({ analytics: e, memoryConversation: t, onBack: n, onForget: a }) {
                const r = (0, k.useHistory)(),
                    [o, l] = s.useState(!1),
                    c = s.useCallback(() => {
                        l(!0);
                    }, []);
                return s.createElement(
                    i.Z,
                    { style: R.container },
                    s.createElement(
                        i.Z,
                        { style: R.headerContainer },
                        s.createElement(
                            i.Z,
                            { style: R.leftHeaderContainer },
                            s.createElement(v.Z, { onClick: n }),
                            s.createElement(
                                C.Z,
                                {
                                    onClick: () => {
                                        (0, w.qQ)(e, t.conversation_id), r.push(`/i/grok?conversation=${t.conversation_id}`);
                                    },
                                    style: R.conversationTitleContainer,
                                    withoutInteractiveStyles: !0,
                                },
                                ({ isHovered: e }) => s.createElement(i.Z, { style: [R.conversationTitleContainer, e ? R.hoveredConversationTitleContainer : void 0] }, s.createElement(i.Z, { style: R.conversationTitle }, s.createElement(d.ZP, { numberOfLines: 1, size: "headline2" }, t.conversation_title)), s.createElement(i.Z, { style: R.goToIconContainer }, s.createElement(_.default, { style: R.goToIcon }))),
                            ),
                        ),
                        s.createElement(p.ZP, { backgroundColor: "gray50", borderColor: "transparent", fontWeight: "normal", hoverLabel: { label: o ? I : S }, onClick: o ? a : c, type: o ? "destructiveFilled" : void 0 }, o ? I : S),
                    ),
                    !!t.conversation_summary && s.createElement(d.ZP, { size: "body", style: R.summary, weight: "normal" }, s.createElement(Z.GrokMarkdown, { isAnimated: !1, markdownText: t.conversation_summary })),
                );
            }
            const R = g.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space12, animationDuration: "0.3s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateX(30px)" }, "100%": { opacity: 1, transform: "translateX(0px)" } }], animationFillMode: "both" }, headerContainer: { width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space20 }, leftHeaderContainer: { flex: 1, display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, conversationTitleContainer: { maxWidth: "100%", flexGrow: 0, flexShrink: 1, display: "flex", flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderColor: "transparent", borderStyle: "solid", transition: "border-color 0.2s ease", cursor: "pointer", gap: e.spaces.space4 }, conversationTitle: { maxWidth: "100%", textOverflow: "ellipsis", overflow: "hidden", flexGrow: 0, flexShrink: 1 }, hoveredConversationTitleContainer: { borderColor: e.colors.brandColor }, goToIconContainer: { width: e.spaces.space16, height: e.spaces.space16 }, goToIcon: { width: "100%", height: "100%", transform: [{ scaleX: -1 }] }, summary: { marginTop: e.spaces.space16, width: "100%" } }));
            var P = n(757483),
                D = n(215337),
                M = n(207137);
            const B = f().g02dacc0,
                z = f().c6e845c0,
                A = [f().a5fa4a86, f().c51724a4, f().j244ceb2, f().b22b12e0, f().h3023cac, f().b10dbffa, f().c81da1b6, f().d4e4d3ce, f().c3418f9a, f().b64dada6, f().ad24ec20, f().c7902252];
            function H({ memoryConversation: e, onClick: t, style: n }) {
                const a = g.default.theme.colors.navigationBackground,
                    r = s.useCallback(() => [P.Z.hexToCss(a, 0), P.Z.hexToCss(a, 0.8), P.Z.hexToCss(a, 1)], [a]),
                    o = s.useMemo(() => {
                        if (!e.updated_at_sec) return "";
                        const t = new Date(1e3 * e.updated_at_sec);
                        if ((0, M.zk)(t)) return B;
                        if ((0, M.gO)(t)) return z;
                        return `${A[t.getMonth()]} ${t.getDate()}`;
                    }, [e.updated_at_sec]);
                return s.createElement(C.Z, { onClick: t, withoutInteractiveStyles: !0 }, ({ isHovered: t }) => s.createElement(i.Z, { style: [L.outerContainer, t ? L.outerHoveredContainer : void 0, n] }, s.createElement(i.Z, { style: L.container }, s.createElement(i.Z, { style: L.contentContainer }, s.createElement(i.Z, { style: L.headerContainer }, !!e.conversation_title && s.createElement(i.Z, { style: L.conversationTitleContainer }, s.createElement(d.ZP, { numberOfLines: 1, style: L.conversationTitle }, e.conversation_title)), !!o && s.createElement(i.Z, null, s.createElement(d.ZP, { numberOfLines: 1, style: L.date }, o))), !!e.conversation_summary && s.createElement(i.Z, { style: L.summaryContainer }, s.createElement(d.ZP, { size: "subtext2", weight: "normal" }, s.createElement(Z.GrokMarkdown, { isAnimated: !1, markdownText: e.conversation_summary }))))), s.createElement(D.Z, { colors: r(), style: [L.traceGradientBottom, t ? { height: "40%" } : void 0] })));
            }
            const L = g.default.create((e) => ({ outerContainer: { backgroundColor: "transparent", transition: "background-color 0.2s ease", width: "100%", cursor: "pointer", borderRadius: e.borderRadii.medium, position: "relative" }, outerHoveredContainer: { backgroundColor: e.colors.gray0 }, container: { padding: e.spaces.space12 }, contentContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8, flexShrink: 1 }, headerContainer: { width: "100%", maxWidth: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space8 }, conversationTitleContainer: { maxWidth: "100%", textOverflow: "ellipsis", overflow: "hidden", flexGrow: 0, flexShrink: 1 }, conversationTitle: {}, date: { fontSize: e.fontSizes.subtext1, color: e.colors.gray800 }, summaryContainer: { maxHeight: 80, overflow: "hidden" }, traceGradientBottom: { position: "absolute", width: "100%", height: "30%", transition: "height 0.2s ease", start: 0, bottom: 0, borderBottomStartRadius: e.borderRadii.medium, borderBottomEndRadius: e.borderRadii.medium } })),
                W = f().d700b268,
                $ = f().cd7bdab2,
                N = f().f21b84de,
                V = f().gf5e9ea6,
                O = 3e3,
                F = f().i52a9cb8,
                G = r.Z,
                j = a.Z;
            function K({ memoryReferences: e, onDrawerDismiss: t }) {
                const { isCompactLayout: n, isGrokDrawer: a } = (0, x.ZP)(),
                    r = n && !a,
                    o = (0, b.z)(),
                    c = m()(),
                    g = s.useRef(null),
                    [h, f] = s.useState(!0),
                    [k, v] = s.useState([]),
                    [C, _] = s.useState(!1),
                    [Z, S] = s.useState(null),
                    [I, R] = s.useState(null);
                s.useEffect(() => {
                    l()(c, G, { conversation_ids: e.map((e) => e.conversation_id) })
                        .toPromise()
                        .then((e) => {
                            v(e?.get_grok_memory_related_conversations?.related_conversations || []), f(!1);
                        })
                        .catch(() => {
                            v([]), f(!1);
                        });
                }, [c, e]);
                const P = s.useCallback(() => {
                        (0, w.NH)(o);
                    }, [o]),
                    D = s.useCallback(
                        (e) => {
                            const t = { idx: e, memory: k[e] },
                                n = t.memory.conversation_id;
                            R(t),
                                v([...k.slice(0, e), ...k.slice(e + 1)]),
                                S(null),
                                _(!0),
                                (g.current = setTimeout(() => {
                                    _(!1),
                                        l()(c, j, { conversation_ids: [n] })
                                            .toPromise()
                                            .then(() => {
                                                R(null);
                                            })
                                            .catch((e) => {
                                                (0, w.zX)(o, n, e.message);
                                            });
                                }, O)),
                                (0, w.UV)(o, n);
                        },
                        [k, c, o],
                    ),
                    M = s.useCallback(() => {
                        I && (_(!1), clearTimeout(g.current), v([...k.slice(0, I.idx), I.memory, ...k.slice(I.idx)]));
                    }, [I, k]);
                return s.createElement(
                    u.Z,
                    { align: "right", buttonType: "primaryText", onDismissed: t, style: U.drawer, subtitle: $, title: W },
                    s.createElement(
                        i.Z,
                        { style: [U.container, r ? U.compactContainer : void 0] },
                        s.createElement(y.D, { id: "grok_memory_drawer", onFullyVisible: P, position: "top", testID: "grok_memory_drawer" }),
                        null !== Z
                            ? s.createElement(T, { analytics: o, memoryConversation: k[Z], onBack: () => S(null), onForget: () => D(Z) })
                            : s.createElement(
                                  i.Z,
                                  { style: U.memoriesPreviewContainer },
                                  h
                                      ? s.createElement(i.Z, { style: U.spinnerContainer }, s.createElement(E.Z, null))
                                      : k.length > 0
                                        ? k.map((e, t) =>
                                              s.createElement(H, {
                                                  key: `${e.conversation_id}-${e.conversation_title?.length || ""}-${e.conversation_summary?.length || ""}`,
                                                  memoryConversation: e,
                                                  onClick: () => {
                                                      S(t), (0, w.zC)(o, k[t].conversation_id);
                                                  },
                                                  style: [U.memoryCard, { animationDelay: 0.02 * t + "s" }],
                                              }),
                                          )
                                        : s.createElement(d.ZP, { style: U.noMemoriesLabel }, F),
                              ),
                    ),
                    C && s.createElement(i.Z, { style: U.undoToastContainer }, s.createElement(i.Z, { style: [U.undoToast, { animationDuration: (O - 500) / 1e3 + "s" }] }, s.createElement(d.ZP, null, N), s.createElement(p.ZP, { backgroundColor: "transparent", borderColor: "gray200", onClick: M, size: "small" }, V))),
                );
            }
            const U = g.default.create((e) => ({ drawer: { paddingTop: e.spaces.space16, position: "relative" }, container: { height: "100%", padding: e.spaces.space16, width: 500 }, compactContainer: { width: "100%" }, memoriesPreviewContainer: { width: "100%", display: "flex", flexDirection: "column", gap: e.spaces.space16 }, spinnerContainer: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }, pageSelector: { marginVertical: e.spaces.space12 }, memoryCard: { flex: 1, animationDuration: "0.3s", animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateX(-30px)" }, "100%": { opacity: 1, transform: "translateX(0px)" } }], animationFillMode: "both" }, undoToastContainer: { position: "fixed", bottom: e.spaces.space16, width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }, undoToast: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space16, padding: e.spaces.space16, backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.medium, animationTimingFunction: "ease", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(10px)" }, "10%": { opacity: 1, transform: "translateY(0px)" }, "90%": { opacity: 1, transform: "translateY(0px)" }, "100%": { opacity: 0, transform: "translateY(10px)" } }], animationFillMode: "both" }, noMemoriesLabel: { marginHorizontal: e.spaces.space4 } }));
        },
        228283: (e, t, n) => {
            n.d(t, { R: () => h });
            n(136728);
            var a = n(202784),
                r = n(325686),
                s = n(392237),
                i = n(674132),
                o = n.n(i),
                l = n(166852),
                c = n(916559),
                m = n(520595),
                u = n(94135),
                d = n(649328);
            const p = o().a3186bff,
                g = o().f9b2d343,
                h = a.memo(({ isAnimated: e, postIds: t, webResults: n }) => {
                    const [s, i] = a.useState(!1),
                        [o, h] = a.useState(!1),
                        y = a.useCallback(() => {
                            i(!0);
                        }, []),
                        b = a.useCallback(() => {
                            i(!1);
                        }, []),
                        w = a.useCallback(() => {
                            h(!0);
                        }, []),
                        E = a.useCallback(() => {
                            h(!1);
                        }, []),
                        x = (0, d.x)({ postIds: t }),
                        k = a.useMemo(() => (0, l.Z)(n.map((e) => e.favicon_base64).filter(Boolean)), [n]),
                        v = a.useRef([]),
                        C = "postIds",
                        _ = "webResults";
                    return (
                        t.length > 0 && !v.current.includes(C) && v.current.push(C),
                        n.length > 0 && !v.current.includes(_) && v.current.push(_),
                        a.createElement(
                            a.Fragment,
                            null,
                            a.createElement(
                                r.Z,
                                { style: f.container },
                                v.current.map((r) => (r === C ? a.createElement(u.a, { images: x, key: "post_ids_button", label: g({ count: t.length }), onClick: y, withAnimation: e }) : r === _ ? a.createElement(u.a, { images: k, key: "web_results_button", label: p({ count: n.length }), onClick: w, withAnimation: e }) : void 0)),
                            ),
                            s ? a.createElement(m.a, { onDrawerDismiss: b, paginationOptions: { numResultsPerPage: 15 }, postIds: t }) : null,
                            o ? a.createElement(c.E, { onDrawerDismiss: E, paginationOptions: { numResultsPerPage: 25 }, webResults: n }) : null,
                        )
                    );
                }),
                f = s.default.create((e) => ({ container: { flexDirection: "row", gap: e.spaces.space8, justifyContent: "flex-start", alignItems: "stretch", flexWrap: "wrap" } }));
        },
        246322: (e, t, n) => {
            n.d(t, { s: () => y });
            var a = n(202784),
                r = n(952793),
                s = n(649328),
                i = n(325686),
                o = n(215337),
                l = n(392237),
                c = n(353644),
                m = n(464023),
                u = n(370751),
                d = n(725516),
                p = n(623494);
            const g = l.default.create((e) => ({ buttonsContainer: { paddingHorizontal: e.spaces.space16 }, navButtons: { paddingHorizontal: e.spaces.space8 } })),
                h = ({ tweetIds: e }) => {
                    const t = (function () {
                        const e = a.useRef((0, u.Z)([])),
                            t = (0, d.z)();
                        return a.useMemo(
                            () => ({
                                buttonsContainerStyle: g.buttonsContainer,
                                navButtonStyle: g.navButtons,
                                onVisibleRangeChange: ({ index: n, intersectionRatio: a }) => {
                                    if (1 !== a) return;
                                    if (0 === n) return;
                                    const r = e.current;
                                    r.has(n) || ((0, p.hf)(t, n), r.add(n));
                                },
                            }),
                            [t],
                        );
                    })();
                    return a.createElement(i.Z, { style: f.carouselWrapper }, a.createElement(c.Z, { carouselProps: t, childrenStyle: f.tweet, style: f.tweets, tweetIds: e }), a.createElement(o.Z, { angle: 90, colors: [l.default.theme.colors.cellBackground, l.default.theme.colors.transparent], style: [f.carouselShadow, f.carouselStartShadow] }), a.createElement(o.Z, { angle: 90, colors: [l.default.theme.colors.transparent, l.default.theme.colors.cellBackground], style: [f.carouselShadow, f.carouselEndShadow] }));
                },
                f = l.default.create((e) => ({ carouselWrapper: { width: "100%", maxWidth: `calc(${m.vf}px + ${e.spaces.space8})`, position: "relative" }, tweets: { marginTop: e.spaces.space12 }, tweet: { width: `calc(100% - ${e.spaces.space72} - ${e.spaces.space32})` }, carouselShadow: { height: "100%", position: "absolute", top: 0, width: 12, zIndex: 10, pointerEvents: "none" }, carouselStartShadow: { start: 0 }, carouselEndShadow: { end: 0 } })),
                y = ({ postIds: e, webResults: t }) => ((0, r.hC)("responsive_web_grok_web_results") ? a.createElement(s.B, { postIds: e, webResults: t }) : a.createElement(h, { tweetIds: e }));
        },
        617568: (e, t, n) => {
            n.d(t, { w: () => y });
            n(136728), n(901951);
            var a = n(202784),
                r = n(719870),
                s = n(325686),
                i = n(731708),
                o = n(392237),
                l = n(187669),
                c = n(33474),
                m = n(342430),
                u = n(910594),
                d = n(978921),
                p = n(122670);
            function g({ children: e, token: t }) {
                if (e && e.length) return a.createElement(i.ZP, { color: "gray900", size: "subtext2", style: b.text }, e);
                const n = t.text?.replace(new RegExp("<br>", "g"), "\n") ?? "";
                return a.createElement(i.ZP, { color: "gray900", size: "subtext2", style: b.text }, n);
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
                        return a.createElement(u.Z, { token: e });
                    case "heading":
                        return a.createElement(c.X, { token: e }, t);
                    case "strong":
                        return a.createElement(i.ZP, { color: "gray900", size: "subtext2", weight: "bold" }, a.createElement(g, { token: e }, t));
                    case "blockLatex":
                        return a.createElement(m.Z, { content: e.text, isBlock: !0 });
                    case "inlineLatex":
                        return a.createElement(m.Z, { content: e.text });
                    default:
                        return a.createElement(g, { token: e }, t);
                }
            }
            function f({ blockSizes: e, index: t, last: n, setBlockHeight: i, text: o }) {
                const [l, c] = a.useState(-1),
                    m = a.useCallback(
                        ({ nativeEvent: e }) => {
                            const n = e.layout.height;
                            n !== l && (c(n), i(t, n));
                        },
                        [t, c, i, l],
                    ),
                    u = a.useMemo(() => {
                        let n = 0;
                        for (let a = 0; a < t; a++) (n += e[a] || 0), (n += 10);
                        return n;
                    }, [t, e]),
                    d = a.useMemo(() => {
                        return r.TU.lexer(((e = o), /^\s*[-*+]\s+/.test(e) ? e.replace(/^(\s*)[-*+]\s+/, "$1• ") : /^\s*\d+.\s+/.test(e) ? e.replace(/^(\s*)(\d+).\s+/, "$1$2 ") : e)).map((e, t) => a.createElement(h, { key: `parsedToken-${t}`, token: e }));
                        var e;
                    }, [o]);
                return a.createElement(s.Z, { onLayout: m, style: { width: "100%", top: u, position: "absolute", opacity: l >= 0 ? 1 : 0.1 } }, d);
            }
            function y({ charLimit: e, text: t }) {
                const n = a.useRef(0);
                (0, l.q)(() => {
                    n.current = Math.max(0, t.split("\n\n").length - 4);
                });
                const r = a.createRef(),
                    [i, o] = a.useState([]),
                    c = a.useRef({ curr: 0, currSmoothed: 0, target: 0, alpha: 0.01, beta: 0, velocity: 0, lastTimestamp: 0 }),
                    [m, u] = a.useState(0),
                    d = a.useCallback(
                        ({ nativeEvent: e }) => {
                            const t = e.layout.height;
                            u(t), c.current.currSmoothed || (c.current.currSmoothed = 0.5 * t);
                        },
                        [u],
                    ),
                    p = a.useCallback(
                        (e, t) => {
                            o((n) => {
                                const a = [...n];
                                return (a[e] = t), a;
                            });
                        },
                        [o],
                    ),
                    g = a.useMemo(
                        () =>
                            t
                                .split("\n\n")
                                .slice(n.current)
                                .map((e, t) => ({ idx: t, blockText: e })),
                        [t],
                    ),
                    h = a.useMemo(() => {
                        const t = [];
                        let n = e || 1200,
                            a = g.length - 1;
                        const r = (function (e) {
                            const t = e.findIndex((e) => void 0 === e);
                            return -1 === t ? e.length : t;
                        })(i);
                        for (; a >= 0 && (n >= 0 || a >= r); ) t.unshift(g[a]), (n -= g[a].blockText.length), a--;
                        return t;
                    }, [g, i, e]),
                    y = t.length > 0;
                return (
                    a.useEffect(() => {
                        y && i.length && g.length && (c.current.target = i.reduce((e, t) => (e || 0) + (t || 0), 0) + 10 * g.length);
                    }, [g, y, i]),
                    a.useEffect(
                        (e) => {
                            let t,
                                n = !0;
                            return (
                                (t = requestAnimationFrame(function e(a) {
                                    const s = c.current;
                                    0 === s.lastTimestamp && (s.lastTimestamp = a);
                                    let i = Math.min(a - s.lastTimestamp, 100);
                                    i < 0.001 && (i = 0.001), (s.lastTimestamp = a);
                                    const o = s.curr + s.velocity * i,
                                        l = s.target - o;
                                    (s.curr = o + s.alpha * l), (s.velocity = s.velocity + (s.beta * l) / i);
                                    let u = Math.floor(-s.curr + 0.95 * m);
                                    const d = m ? Math.max(0, u / m) : 1;
                                    (u -= d * m * 0.7),
                                        (s.currSmoothed += (u - s.currSmoothed) / 30),
                                        r.current &&
                                            ((r.current.style.top = `${s.currSmoothed}px`),
                                            (r.current.style.filter = `blur(${2 * d}px)`),
                                            (r.current.style.opacity =
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
                        [r, m],
                    ),
                    a.createElement(s.Z, { onLayout: d, style: { flex: 1, overflow: "hidden" } }, a.createElement(s.Z, { ref: r, style: { paddingEnd: 12, position: "absolute", width: "95%" } }, h && h.map((e, t) => a.createElement(f, { blockSizes: i, index: e.idx, key: `block${e.idx}`, last: !1, setBlockHeight: p, text: e.blockText }))))
                );
            }
            r.TU.use({ extensions: [p._, ...d.Z] });
            const b = o.default.create((e) => ({ text: { lineHeight: e.lineHeights.subtext2 } }));
        },
        813107: (e, t, n) => {
            n.d(t, { I: () => c });
            var a = n(202784),
                r = n(325686),
                s = n(366635),
                i = n(392237),
                o = n(125363),
                l = n(919022);
            const c = ({ screenName: e }) => {
                    const t = (0, o.I0)(),
                        n = (0, o.v9)((t) => l.ZP.selectByScreenName(t, e));
                    return (
                        a.useEffect(() => {
                            t(l.ZP.fetchOneByScreenNameIfNeeded(e));
                        }, [t, e]),
                        n ? a.createElement(a.Fragment, null, a.createElement(r.Z, { style: m.container }, a.createElement(s.Z, { isVerified: n.is_blue_verified, name: n.name, profileImageUrl: n.profile_image_url_https, screenName: n.screen_name, withStackedLayout: !0 }))) : null
                    );
                },
                m = i.default.create((e) => ({ container: { flexDirection: "row", gap: e.spaces.space8, justifyContent: "flex-start", alignItems: "stretch", flexWrap: "wrap", paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space8, borderRadius: e.borderRadii.large, borderWidth: e.spaces.space1, borderColor: e.colors.borderColor }, header: { fontSize: e.fontSizes.body } }));
        },
        917270: (e, t, n) => {
            n.d(t, { O: () => y });
            var a = n(202784),
                r = n(325686),
                s = n(525271),
                i = n(721266),
                o = n(392237),
                l = n(674132),
                c = n.n(l),
                m = n(323265),
                u = n(725516),
                d = n(54957),
                p = n(739070),
                g = n(884058),
                h = n(302176);
            const f = c().b61ad410,
                y = ({ onDrawerDismiss: e }) => a.createElement(s.Z, { align: "right", buttonType: "primaryText", onDismissed: e, style: w.drawer, title: f, withBackgroundBlur: !0 }, a.createElement(b, { onDrawerDismiss: e })),
                b = ({ onDrawerDismiss: e }) => {
                    const t = (0, u.z)(),
                        [n, s] = a.useState(h.G.all),
                        [o, l] = a.useState(Math.random()),
                        [c, f] = a.useState(void 0),
                        y = a.useCallback(
                            (e) => {
                                t.scribe({ element: "grok_search", action: "submit" }), f(encodeURIComponent(e)), l(Math.random());
                            },
                            [t],
                        ),
                        b = a.useMemo(() => (n === h.G.images ? a.createElement(g.v, null) : n === h.G.pins ? a.createElement(p.s, null) : a.createElement(d.c, { onHistoryLinkClicked: e, onSearchSubmit: y, searchKey: o, searchValue: c ?? "" })), [c, o, n, e, y]);
                    return a.createElement(r.Z, { style: w.container }, m.ZP.isWebView() ? a.createElement(i.Z, { size: "space56" }) : null, a.createElement(r.Z, { style: w.headerContainer }, a.createElement(r.Z, { style: w.contentContainer }, a.createElement(r.Z, { style: w.staticContentContainer }, a.createElement(h.k, { onTabChange: s, selectedTab: n })))), a.createElement(r.Z, { style: w.scrollSection }, a.createElement(r.Z, { style: w.innerContentContainer }, b)));
                },
                w = o.default.create((e) => ({ container: { width: "100%", height: "100%", flexDirection: "column", position: "relative" }, headerContainer: { width: "100%" }, mainContainer: { flex: 1, display: "flex", flexDirection: "column", height: "100%" }, contentContainer: { flex: 1 }, staticContentContainer: { width: "100%", maxWidth: 500, flexShrink: 0 }, drawer: { width: 440 }, searchContainer: { flexDirection: "row", flexGrow: 1, flexShrink: 1, marginHorizontal: e.spaces.space4, alignItems: "center", marginVertical: "unset" }, post: { borderBottomWidth: 1, borderBottomColor: e.colors.borderColor }, scrollView: { flex: 1, width: "100%", marginTop: 0 }, innerContentContainer: { paddingTop: 0, height: "100%" }, scrollSection: { flex: 1, position: "relative" }, searchSection: { flexShrink: 0, width: "100%" } }));
        },
        916559: (e, t, n) => {
            n.d(t, { E: () => d });
            var a = n(202784),
                r = n(325686),
                s = n(525271),
                i = n(392237),
                o = n(674132),
                l = n.n(o),
                c = n(809311),
                m = n(193285);
            const u = l().d7cb5408,
                d = ({ onDrawerDismiss: e, paginationOptions: t, webResults: n }) => {
                    const [i, o] = a.useState(0),
                        [l, d] = a.useState(() => (t ? n.slice(0, t.numResultsPerPage) : n)),
                        g = t && n.length > t.numResultsPerPage,
                        h = a.useCallback(
                            (e) => {
                                if ((o(e), t)) {
                                    const a = e * t.numResultsPerPage,
                                        r = a + t.numResultsPerPage;
                                    d(n.slice(a, r));
                                }
                            },
                            [n, t],
                        );
                    return a.createElement(
                        s.Z,
                        { align: "right", buttonType: "primaryText", onDismissed: e, title: u },
                        a.createElement(
                            r.Z,
                            { style: p.container },
                            g && a.createElement(m.Z, { currentPageIdx: i, numPerPage: t?.numResultsPerPage || 0, onPageIdxChange: h, total: n.length }),
                            l.map((e, t) => a.createElement(c.p, { item: e, key: `web_result_${t}`, number: g ? void 0 : t + 1 })),
                        ),
                    );
                },
                p = i.default.create((e) => ({ container: { width: "100%", maxWidth: 500, gap: e.spaces.space12, marginBottom: e.spaces.space32, paddingHorizontal: e.spaces.space16 } }));
        },
        193285: (e, t, n) => {
            n.d(t, { Z: () => m });
            n(136728);
            var a = n(202784),
                r = n(325686),
                s = n(154003),
                i = n(392237),
                o = n(97301),
                l = n(58399);
            const c = 5;
            function m({ currentPageIdx: e, numPerPage: t, onPageIdxChange: n, style: i, total: m }) {
                const d = t > 0 ? Math.ceil(m / t) : 1,
                    p = a.useMemo(() => {
                        const t = [];
                        for (let n = 0; n < d; n++) t.push({ idx: n, text: n + 1, isSelected: e === n });
                        return t;
                    }, [d, e]),
                    g = a.useCallback(() => {
                        e < d - 1 && n(e + 1);
                    }, [e, n, d]),
                    h = a.useCallback(() => {
                        e > 0 && n(e - 1);
                    }, [e, n]),
                    f = a.useMemo(() => {
                        const t = [];
                        let n = Math.max(0, e - Math.floor(c / 2));
                        const a = Math.min(d - 1, n + c - 1);
                        a === d - 1 && (n = Math.max(0, a - c + 1));
                        for (let e = n; e <= a; e++) t.push(p[e]);
                        return t;
                    }, [p, e, d]);
                return a.createElement(
                    r.Z,
                    { style: [u.container, i] },
                    a.createElement(s.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "text", disabled: e <= 0, icon: a.createElement(o.default, { style: u.chevron }), onClick: h, size: "small", style: u.button }),
                    a.createElement(
                        r.Z,
                        { style: u.pageNumContainer },
                        f.map((e) => a.createElement(s.ZP, { borderColor: "transparent", color: e.isSelected ? "text" : "gray700", key: `page_${e.text}`, onClick: () => n(e.idx), size: "small", style: u.button }, e.text)),
                    ),
                    a.createElement(s.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "text", disabled: e >= d - 1, icon: a.createElement(l.default, { style: u.chevron }), onClick: g, size: "small", style: u.button }),
                );
            }
            const u = i.default.create((e) => ({ container: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flex: 1, gap: e.spaces.space8, width: "100%" }, chevron: { width: e.spaces.space20, height: e.spaces.space20 }, pageNumContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, flexGrow: 0, flexShrink: 1 }, button: {} }));
        },
        520595: (e, t, n) => {
            n.d(t, { a: () => g });
            var a = n(202784),
                r = n(325686),
                s = n(525271),
                i = n(392237),
                o = n(674132),
                l = n.n(o),
                c = n(400196),
                m = n(306677),
                u = n(725405),
                d = n(193285);
            const p = l().b58d2bd2,
                g = ({ onDrawerDismiss: e, paginationOptions: t, postIds: n, style: i, topBarStyle: o, withTransparentMask: l }) => {
                    const [c, m] = a.useState(0),
                        [u, g] = a.useState(() => (t ? n.slice(0, t.numResultsPerPage) : n)),
                        y = t && n.length > t.numResultsPerPage,
                        b = a.useCallback(
                            (e) => {
                                if ((m(e), t)) {
                                    const a = e * t.numResultsPerPage,
                                        r = a + t.numResultsPerPage;
                                    g(n.slice(a, r));
                                }
                            },
                            [n, t],
                        );
                    return a.createElement(
                        s.Z,
                        { align: "right", buttonType: "primaryText", onDismissed: e, style: i, title: p, topBarStyle: o, withTransparentMask: l },
                        a.createElement(
                            r.Z,
                            { style: f.container },
                            y && a.createElement(d.Z, { currentPageIdx: c, numPerPage: t?.numResultsPerPage || 0, onPageIdxChange: b, total: n.length }),
                            u.map((e) => a.createElement(h, { key: `post_${e}`, postId: e })),
                        ),
                    );
                },
                h = ({ postId: e }) => {
                    const t = a.useRef(!1),
                        n = (0, u.Z)(),
                        s = a.useCallback(() => {
                            t.current || ((t.current = !0), n.scribe({ action: "impression", component: "post", data: { tweet_id: e } }));
                        }, [n, e]);
                    return a.createElement(r.Z, { key: `post_${e}`, style: f.post }, a.createElement(c.ZP, { displayPromotedContent: !0, tweetId: e, withActions: !0 }), a.createElement(m.D, { id: `post_${e}`, onFullyVisible: s, position: "bottom", testID: `post_${e}` }));
                },
                f = i.default.create((e) => ({ container: { width: "100%", maxWidth: 500, marginBottom: e.spaces.space12 }, post: { borderBottomWidth: 1, borderBottomColor: e.colors.borderColor }, mediaContent: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space8, borderRadius: e.borderRadii.large, overflow: "hidden" } }));
        },
        423914: (e, t, n) => {
            n.d(t, { y: () => c });
            var a = n(202784),
                r = n(325686),
                s = n(103737),
                i = n(392237),
                o = n(125363),
                l = n(836255);
            const c = ({ isAnimated: e, postIds: t }) => {
                    const n = (0, o.oR)(),
                        i = t.map((e) => l.Z.selectHydrated(n.getState(), e)).filter(Boolean),
                        c = i.map((e) => e.id_str).join(""),
                        u = a.useMemo(
                            () =>
                                i
                                    .map((t) =>
                                        (t.extended_entities?.media ?? [])
                                            .filter((e) => "photo" === e.type)
                                            .map((n) => {
                                                const i = { ...n, ext_alt_text: void 0 };
                                                return a.createElement(r.Z, { style: [m.media, e ? m.animation : []] }, a.createElement(s.Z, { displayMediaTags: !1, hasSensitiveMedia: t.possibly_sensitive, isCondensed: !0, key: `media_${t.id_str}_${n.id_str}`, mediaContentStyles: m.media, mediaDetails: [i], mediaVisibilityResults: t.mediaVisibilityResults, preventPlayback: !0, shouldShowAltLabelAlways: !1, showAltTranslation: !1, showBorder: !1, singleImageMaxAspectRatio: 4 / 3, singleImageMinAspectRatio: 4 / 3, tweetId: t.id_str, videoAspectRatio: 4 / 3, videoOptions: { displayOptions: { badgeConfiguration: { hideDataSize: !0, hideViewCount: !0, hideDuration: !0 } }, hidePreviewPlayButton: !0 }, withCenterCrop: !0, withMediaTagsIcon: !1 }));
                                            }),
                                    )
                                    .flat()
                                    .slice(0, 7),
                            [c],
                        );
                    return u.length < 2 ? null : a.createElement(r.Z, { style: m.container }, u);
                },
                m = i.default.create((e) => ({ container: { flexDirection: "row", gap: e.spaces.space8, justifyContent: "flex-start", alignItems: "center", flexWrap: "wrap", paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 }, media: { width: 70, borderRadius: e.borderRadii.small }, videoButtonContainer: { width: "100%", height: "100%", position: "relative", backgroundColor: e.colors.alwaysBlack, borderRadius: e.borderRadii.small }, videoButton: { width: "100%", height: "100%" }, animation: { opacity: 1, animationDuration: "2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
        },
        263160: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                r = n(392237),
                s = n(370751),
                i = n(725516),
                o = n(623494);
            function l() {
                const e = a.useRef((0, s.Z)([])),
                    t = (0, i.z)();
                return a.useMemo(
                    () => ({
                        buttonsContainerStyle: c.buttonsContainer,
                        navButtonStyle: c.navButtons,
                        onVisibleRangeChange: ({ index: n, intersectionRatio: a }) => {
                            if (1 !== a) return;
                            if (0 === n) return;
                            const r = e.current;
                            r.has(n) || ((0, o.hf)(t, n), r.add(n));
                        },
                    }),
                    [t],
                );
            }
            const c = r.default.create((e) => ({ buttonsContainer: {}, navButtons: {} }));
        },
        988290: (e, t, n) => {
            n.d(t, { BQ: () => i, ZP: () => o });
            var a = n(202784);
            const r = { scrollable: void 0, isCompactLayout: !1, isEditingEnabled: !0, isShowButtons: !0, isShowCarousel: !0, isPagedScroll: !0, isGrokShare: !1, isGrokDrawer: !1 },
                s = a.createContext(r);
            function i({ children: e, isCompactLayout: t, isEditingEnabled: n, isGrokDrawer: r, isGrokShare: i, isPagedScroll: o, isShowButtons: l, isShowCarousel: c, scrollable: m }) {
                return a.createElement(s.Provider, { value: { scrollable: m, isCompactLayout: t, isShowButtons: l, isEditingEnabled: n, isShowCarousel: c, isPagedScroll: o, isGrokShare: i, isGrokDrawer: r } }, e);
            }
            function o() {
                return a.useContext(s);
            }
        },
        819102: (e, t, n) => {
            n.d(t, { u: () => s });
            var a = n(202784);
            const r = 2;
            function s(e, t) {
                const n = a.useRef(),
                    [s, o] = a.useState(!1);
                let l = e;
                if (t && s) {
                    const t = i(e);
                    t > -1 && (l = e.substring(0, t));
                }
                return (
                    a.useEffect(() => {
                        t &&
                            (o(!0),
                            n.current && clearTimeout(n.current),
                            (n.current = window.setTimeout(() => {
                                o(!1);
                            }, 1e3 * r)));
                    }, [t, l]),
                    l
                );
            }
            const i = (e) => {
                let t = -1;
                (e.match(/\*\*/g) ?? []).length % 2 == 1 && (t = e.lastIndexOf("**"));
                let n = -1;
                const a = e.lastIndexOf("[](");
                a > e.lastIndexOf(")") && (n = a);
                let r = -1;
                const s = e.lastIndexOf("\\[");
                s > e.lastIndexOf("]") && (r = s);
                let i = -1;
                const o = e.lastIndexOf("\\(");
                o > e.lastIndexOf("\\)") && (i = o);
                let l = -1;
                const c = e.lastIndexOf("\n"),
                    m = e.substring(c).trim();
                (m.startsWith("-") || 0 === m.length) && (l = c);
                let u = -1;
                /^\d+\.?/.test(m) && (u = c);
                const d = [t, r, i, l, u, n].filter((t) => -1 !== t && t > e.length - 100);
                return 0 === d.length ? e.length : Math.min(...d);
            };
        },
        413145: (e, t, n) => {
            n.d(t, { y: () => C });
            var a = n(202784),
                r = n(325686),
                s = n(721266),
                i = n(392237),
                o = n(323265),
                l = n(125363),
                c = n(389071),
                m = n(189953),
                u = n(654917),
                d = n(730372),
                p = n(293115),
                g = n(725405),
                h = n(155918),
                f = n(919022),
                y = n(464023),
                b = n(22463),
                w = n(667945),
                E = n(848957);
            const x = i.default.create((e) => ({ container: { width: "100%", alignItems: "center" } })),
                k = function ({ analysisEntityId: e, containerRef: t, conversationKey: n, id: s, isLastResponse: i, isLoading: o, onLayout: m }) {
                    const u = (0, c.bD)(n),
                        d = (0, g.Z)(),
                        k = (0, l.v9)((e) => u?.selectUsingExperiment(e)),
                        v = (0, l.v9)((e) => u?.selectExperiments(e)),
                        C = (0, l.v9)((e) => u.selectMessageById(e, s, !1)),
                        _ = (0, l.v9)((e) => u?.selectConversationId(e)) ?? "",
                        Z = (0, l.v9)((e) => u.selectMessageById(e, s, !0)),
                        S = (0, l.v9)((e) => u.selectPromptSourceForMessageId(e, s)),
                        I = (0, l.v9)(f.ZP.selectViewerUser),
                        T = (0, l.v9)((e) => f.ZP.select(e, y.c0)),
                        R = C?.sender === h.CI.ASSISTANT,
                        P = R ? T : I,
                        D = a.useMemo(() => C?.bannerMessages ?? [], [C?.bannerMessages]),
                        M = a.useMemo(() => ({ grok_details: { ...(d.contextualScribeData.grok_details ?? {}), chat_item_id: C?.agentChatItemId } }), [d, C?.agentChatItemId]);
                    return I && C && P ? (k && R && (C?.message === (v[0]?.message ?? null) || null == s) ? a.createElement(r.Z, { onLayout: m, ref: t, style: x.container }, a.createElement(p.nO, { data: M }, a.createElement(E.Z, { conversationId: _, grokModule: u, isLoading: o, message1: v[0] ?? C, message2: v[1] ?? Z }))) : a.createElement(r.Z, { onLayout: m, ref: t, style: x.container }, R ? a.createElement(p.nO, { data: M }, a.createElement(w.Z, { analysisEntityId: e, bannerMessages: D, cardAttachments: C.cardAttachments, chatItemId: C.agentChatItemId, chatResponseAnnotations: C.chatResponseAnnotations, citedWebResults: C.citedWebResults, conversationKey: n, deepSearchSummaryAccumulator: C.deepSearchSummaryAccumulator, disclaimer: C.disclaimer, expectedImageAspectRatio: C.expectedImageAspectRatio, fileAttachments: C.fileAttachments, followUpSuggestedMode: C.followUpSuggestedMode, id: s, intermediateImageResults: C.intermediateImageResults, isAborted: C.isAborted, isDeleted: C.isDeleted, isLastResponse: i, isLoading: o, isPastThinkingTrace: C.isPastThinkingTrace, mediaTweetIds: C.xMediaPostIds, memoryReferences: C.memoryReferences, performanceMetrics: C.performanceMetrics, promptSource: S, query: C.query, sender: C.sender, text: C.message, trace: C.thinkingTrace, tweetIds: C.postIds, upsell: C.upsell, userChatItemId: C.userChatItemId || "", webResults: C.webResults })) : a.createElement(b.Z, { bannerMessages: D, conversationKey: n, fileAttachments: C.fileAttachments, hideAttachments: C.hideAttachments, id: s, isDeepsearch: C.isDeepsearch, isReasoning: C.isReasoning, text: C.message, user: { profile_image_shape: P.profile_image_shape, profile_image_url_https: P.profile_image_url_https } }))) : null;
                };
            var v = n(988290);
            const C = ({ contentPadding: e }) => {
                    const { analysisEntityId: t, conversationKey: n, messageIds: i, status: p } = (0, u.ZP)(),
                        { isPagedScroll: g, scrollable: h } = (0, v.ZP)(),
                        f = (0, c.bD)(n),
                        y = (0, l.v9)(f.selectEditingMessage);
                    (0, d.$E)();
                    const b = a.useMemo(() => (p !== m.Q_.IDLE ? [...i, null] : i), [p, i]),
                        w = o.ZP.isWebView(),
                        E = a.useRef(0);
                    a.useEffect(() => {
                        const e = () => {
                            const e = h ? (h === window ? window.innerHeight : h.scrollHeight) : 0;
                            E.current = Math.max(e, E.current);
                        };
                        return window.addEventListener("resize", e), e(), () => window.removeEventListener("resize", e);
                    }, [h]);
                    const x = p === m.Q_.IDLE ? void 0 : b[b.length - 2],
                        C = a.useRef(),
                        [Z, S] = a.useState(!1),
                        [I, T] = a.useState(0);
                    a.useLayoutEffect(() => {
                        if (!Z || (!y && x && g && I > 0)) {
                            S(!0);
                            const e = h === window ? document.body.scrollHeight : h?.scrollHeight;
                            h?.scroll({ top: e, behavior: "smooth" });
                        }
                    }, [x, y, Z, g, I, h]);
                    const R = a.useCallback(
                            (t) => {
                                const n = t.nativeEvent.layout.height;
                                let a = h === window ? h.innerHeight : (h?.clientHeight ?? 0);
                                w && (a = Math.max(E.current, a));
                                const r = n > 0.6 * a ? Math.max(0, a - e - 50) : Math.max(0, a - n - e);
                                T(r);
                            },
                            [h, w, e],
                        ),
                        P = a.useMemo(() => ({ minHeight: g ? I : 0 }), [I, g]),
                        D = a.useCallback(
                            ({ index: e, item: s }) => {
                                const i = b.length,
                                    o = s === x;
                                return o || e < i - 1 ? a.createElement(r.Z, { key: `message_${e}` }, a.createElement(k, { analysisEntityId: t, conversationKey: n, id: s, onLayout: o ? R : void 0 })) : a.createElement(r.Z, { key: `message_${e}`, style: [_.lastResponse, P] }, a.createElement(k, { analysisEntityId: t, conversationKey: n, id: s, isLastResponse: !0, isLoading: p === m.Q_.TYPING || p === m.Q_.WAITING }));
                            },
                            [x, n, P, t, R, p, b],
                        );
                    return a.createElement(
                        r.Z,
                        { ref: C, style: [_.content, g ? void 0 : _.bottomScroll] },
                        a.createElement(s.Z, { size: "space8" }),
                        a.createElement(
                            r.Z,
                            { style: { flexDirection: "column" } },
                            a.createElement(s.Z, { size: "space12" }),
                            b.map((e, t) => D({ item: e, index: t })),
                        ),
                    );
                },
                _ = i.default.create((e) => ({ lastResponse: { width: "100%" }, content: { flexGrow: "1" }, bottomScroll: { overflow: "auto", flexDirection: "column-reverse", height: "fit-content", maxHeight: "100%", borderWidth: 15, borderColor: "green" } }));
        },
        378471: (e, t, n) => {
            n.d(t, { Z: () => r });
            var a = n(202784);
            function r({ style: e }) {
                return a.createElement(
                    "div",
                    { className: "flex gap-1 items-center", style: e },
                    a.createElement(
                        "svg",
                        { className: "text-secondary", height: "24", shapeRendering: "crispEdges", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
                        a.createElement("rect", { fill: "currentColor", height: "2", rx: "2", width: "2", x: "5", y: "16" }, a.createElement("animate", { attributeName: "x", dur: "1360ms", keySplines: "0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "6;10;10;16;16" }), a.createElement("animate", { attributeName: "y", dur: "1360ms", keySplines: "0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "16;5;5;16;16" }), a.createElement("animate", { attributeName: "height", dur: "680ms", keySplines: "0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "2;4;4;2;2" }), a.createElement("animate", { attributeName: "width", dur: "680ms", keySplines: "0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "2;4;4;2;2" })),
                        a.createElement("rect", { fill: "currentColor", height: "2", rx: "2", width: "2", x: "11", y: "6" }, a.createElement("animate", { attributeName: "x", dur: "1360ms", keySplines: "0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "11;16;16;6;6" }), a.createElement("animate", { attributeName: "y", dur: "1360ms", keySplines: "0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "7;15;15;16;16" }), a.createElement("animate", { attributeName: "height", dur: "680ms", keySplines: "0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "2;4;4;2;2" }), a.createElement("animate", { attributeName: "width", dur: "680ms", keySplines: "0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "2;4;4;2;2" })),
                        a.createElement("rect", { fill: "currentColor", height: "2", rx: "2", width: "2", x: "17", y: "16" }, a.createElement("animate", { attributeName: "x", dur: "1360ms", keySplines: "0 0.8 0.8 1; 0 0.8 0.8 1; 0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "16;4;4;11;11" }), a.createElement("animate", { attributeName: "y", dur: "1360ms", keySplines: "0 0.8 0.8 1; 0 0.8 0.8 1; 0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "16;15;15;7;7" }), a.createElement("animate", { attributeName: "height", dur: "680ms", keySplines: "0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "2;4;4;2;2" }), a.createElement("animate", { attributeName: "width", dur: "680ms", keySplines: "0 0.8 0.8 1", keyTimes: "0;0.25;0.5;0.75;1", repeatCount: "indefinite", values: "2;4;4;2;2" })),
                    ),
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-7a6ce5c4.4dbfdf7a.js.map

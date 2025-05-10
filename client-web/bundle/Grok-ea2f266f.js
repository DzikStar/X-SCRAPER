"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-ea2f266f"],
    {
        365803: (e, t, a) => {
            a.r(t), a.d(t, { default: () => ue });
            a(136728), a(571372);
            var n = a(202784),
                s = a(400752),
                r = a(325686),
                i = a(107267),
                o = a(67369),
                l = a(154003),
                c = a(392237),
                d = a(674132),
                u = a.n(d),
                m = a(427783),
                p = a(323265),
                g = a(420182),
                h = a(252021),
                f = a(652904),
                _ = a(952793),
                y = a(293115),
                w = a(725405),
                b = a(125363),
                E = a(100326),
                k = a(390387),
                S = a(601576),
                Z = a(654917),
                C = a(991985),
                v = a(794197),
                x = a(576648),
                I = (a(585488), a(712696)),
                T = a.n(I),
                P = a(525271),
                A = a(731708),
                L = a(492244);
            const M = v.Z,
                R = ({ grokShareId: e }) => {
                    const [t, a] = n.useState(!1),
                        [s, i] = n.useState(!1),
                        { result: o } = T()(M, { view: e });
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(l.ZP, { backgroundColor: "transparent", icon: n.createElement(L.default, null), onClick: () => a(!0), size: "small", type: "primaryOutlined" }),
                        t &&
                            n.createElement(
                                P.Z,
                                { align: "right", buttonType: "primaryText", onDismissed: () => a(!1), title: "Debug (Internal)" },
                                n.createElement(
                                    r.Z,
                                    { style: z.container },
                                    n.createElement(
                                        r.Z,
                                        { style: z.section },
                                        n.createElement(A.ZP, { weight: "bold" }, "Conversation ID"),
                                        n.createElement(A.ZP, null, o),
                                        n.createElement(
                                            l.ZP,
                                            {
                                                onClick: () => {
                                                    x.Z.setString(o), i(!0);
                                                },
                                            },
                                            s ? "Copied" : "Copy",
                                        ),
                                    ),
                                ),
                            ),
                    );
                },
                z = c.default.create((e) => ({ container: { width: "100%", maxWidth: 500, paddingHorizontal: e.spaces.space20, display: "flex", flexDirection: "column", gap: e.spaces.space16, paddingTop: e.spaces.space8 }, section: { display: "flex", flexDirection: "column", gap: e.spaces.space8 } }));
            var D = a(272175),
                O = a(721266),
                F = a(276259),
                B = a(397159),
                N = a(11579),
                H = a(155918),
                K = a(836255),
                W = a(919022),
                U = a(791786),
                $ = a(22463),
                j = a(667945),
                V = a(988290),
                Q = a(464023),
                X = a(222656),
                G = a(668214),
                q = a(389071);
            const J = (e, t) => (0, q.UM)(e, t.grokShareId),
                Y = (0, G.Z)().propsFromState(() => ({ grokShare: J })),
                ee = u().gf43d270,
                te = u().f4b5fae2,
                ae = "image.jpg",
                ne = "image/jpeg",
                se = c.default.create((e) => ({ container: { display: "flex", alignItems: "center", width: "100%", height: "calc(100vh - 53px)", maxHeight: "calc(100vh - 53px)", justifyContent: "space-between", position: "relative" }, content: { flex: 1, width: "100%", alignItems: "center", overflowY: "auto" }, upsellCallout: { marginTop: e.spaces.space24, marginHorizontal: e.spaces.space16 }, buttonContainer: { marginBottom: e.spaces.space32, marginHorizontal: e.spaces.space16 }, narrowContainer: { paddingTop: e.spaces.space24 }, bottomSpacer: { height: e.spaces.space48 }, buttonStyle: { alignSelf: "center" }, inputContainer: { width: "100%", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, alignItems: "center", justifyContent: "center" }, inputWrap: { width: "100%", maxWidth: Q.vf }, inputWrapDisclamer: { width: "100%", alignItems: "center", paddingVertical: e.spaces.space8 } })),
                re = Y(({ grokShare: e, grokShareId: t }) => {
                    (0, X.Z)();
                    const a = (0, b.I0)(),
                        s = (0, b.v9)(k.Qb),
                        i = (0, Z.eX)();
                    n.useEffect(() => {
                        a(W.ZP.fetchOneIfNeeded(Q.c0));
                    }, [a]),
                        n.useEffect(() => {
                            a((0, N.V)(t));
                        }, [a, t]);
                    const l = (0, o.LX)(),
                        c =
                            e?.items
                                .map((e) => e.file_attachments?.filter((e) => F.v5.includes(e.mime_type)).map((e) => e.url) ?? [])
                                .flat()
                                .filter(Boolean) ?? [],
                        d = c.length > 0 ? c[c.length - 1] : void 0,
                        u = e?.items[e.items.length - 1].message;
                    return n.createElement(
                        V.BQ,
                        { isCompactLayout: l, isEditingEnabled: !1, isGrokShare: !0, isPagedScroll: !1, isShowButtons: !1, isShowCarousel: !0, scrollable: window },
                        n.createElement(
                            r.Z,
                            { style: [se.container, l ? se.narrowContainer : void 0] },
                            n.createElement(
                                r.Z,
                                { style: se.content },
                                2 === e?.items.length && n.createElement(D.ql, null, n.createElement("meta", { content: e.items[0].message, property: "og:title" }), n.createElement("meta", { content: u, property: "og:description" }), d ? n.createElement("meta", { content: d, property: "og:image" }) : null),
                                l ? null : n.createElement(O.Z, { size: "space32" }),
                                e?.items
                                    .map((e, t) => {
                                        if ((e.message || e.thinking_trace || (e.deepsearch_headers && e.deepsearch_headers.length > 0)) && e.sender) {
                                            const s = e.message,
                                                r = "User" === e.sender ? H.CI.HUMAN : H.CI.ASSISTANT,
                                                i = r === H.CI.ASSISTANT && !s;
                                            let o,
                                                l = "";
                                            e.thinking_trace && (l = e.thinking_trace), e.ui_layout?.reasoning_ui_layout && ("Split" === e.ui_layout.reasoning_ui_layout ? (o = "SPLIT") : "Unified" === e.ui_layout.reasoning_ui_layout && (o = "UNIFIED"));
                                            const c = (e.file_attachments ?? []).map((e) => ({ mediaId: e.media_id, fileName: e.file_name ?? ae, mimeType: e.mime_type ?? ne, url: e.url, isPublic: !0 })),
                                                d = [];
                                            if (e.card_attachments)
                                                for (const t of e.card_attachments) {
                                                    (0, H.dj)(t) && d.push(JSON.parse(t));
                                                }
                                            else if (e.card_attachment) {
                                                const t = (0, H.dj)(e.card_attachment);
                                                t && d.push(t);
                                            }
                                            let u = [],
                                                m = [],
                                                p = [],
                                                g = [],
                                                h = {};
                                            e.deepsearch_args && (h = e.deepsearch_args);
                                            const f = new B.fQ({ deepsearchArgs: h });
                                            if (e.deepsearch_headers && e.deepsearch_headers.length > 0) {
                                                const t = [];
                                                for (const n of e.deepsearch_headers) {
                                                    const e = [];
                                                    for (const t of n.steps) {
                                                        const a = (t.x_post_ids || []).map((e) => e),
                                                            n = (t.web_results || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title }));
                                                        u.push(...a), (u = u.filter((e, t, a) => t === a.findIndex((t) => t === e))), p.push(...n), (p = p.filter((e, t, a) => t === a.findIndex((t) => t.url === e.url))), e.push({ header: t.header || "", assistant: t.assistant || "", decision: t.decision || "", finalMessage: t.final_message || "", functionCall: t.function_call || "", rawFunctionResult: t.raw_function_result || "", summary: t.summary || "", webResults: n, xPostIds: a });
                                                    }
                                                    t.push({ header: n.header || "", steps: e }), a(K.Z.fetchMultiple(u));
                                                }
                                                f.initiateFromHistoryResponses(t);
                                            } else e.post_ids_results && (u = e.post_ids_results?.map((e) => e.result?.rest_id).filter(Boolean)), e.media_post_ids_results && (m = e.media_post_ids_results?.map((e) => e.result?.rest_id).filter(Boolean)), e.web_results && (p = [...e.web_results]), e.cited_web_results && (g = [...e.cited_web_results]);
                                            return r === H.CI.ASSISTANT ? n.createElement(j.Z, { bannerMessages: [], cardAttachments: d, citedWebResults: g, conversationKey: "", fileAttachments: c, id: t.toString(), isLoading: i, isPastThinkingTrace: "" !== l, key: t.toString(), mediaTweetIds: m, messageStepAccumulator: f, reasoningLayout: o, sender: r, text: s, trace: l, tweetIds: u, webResults: p }) : n.createElement($.Z, { conversationKey: "", fileAttachments: c, hasCustomization: e.has_customization, id: t.toString(), key: t.toString(), text: s });
                                        }
                                        return null;
                                    })
                                    .filter((e) => !!e),
                                n.createElement(O.Z, { size: "space48" }),
                            ),
                            s && n.createElement(r.Z, { style: se.inputContainer }, n.createElement(r.Z, { style: se.inputWrap }, n.createElement(U.Z, { conversationKey: i, disableFileUploads: !0, grokShare: t, hasAccess: !0, isIdle: !0, placeholder: ee, useNonExpanded: !0 }), n.createElement(r.Z, { style: se.inputWrapDisclamer }, n.createElement(A.ZP, { color: "gray500", size: "subtext1" }, te)))),
                        ),
                    );
                }),
                ie = { page: `grok-${p.ZP.isTwitterApp() ? (p.ZP.isAndroid() ? "android" : "ios") : "web"}` };
            function oe() {
                const { grokShareId: e } = (0, i.useParams)();
                return e ? n.createElement(re, { grokShareId: e }) : null;
            }
            const le = u().b198a392,
                ce = u().d16329b4,
                de = u().af6c4470;
            function ue() {
                (0, C.n)(!0);
                const e = (0, i.useHistory)(),
                    { grokShareId: t } = (0, i.useParams)(),
                    a = (0, w.Z)(),
                    c = (0, b.I0)(),
                    d = (0, Z.uf)(),
                    u = (0, s.Dv)(g.dd),
                    v = (0, o.LX)(),
                    x = (0, b.v9)(k.Qb),
                    I = (0, _.hC)("responsive_web_grok_debug_enabled"),
                    T = n.useCallback(() => {
                        t &&
                            (0, E.X)({ analytics: a, api: u, dispatch: c, grokModule: d, fromShareId: t })
                                .then((t) => {
                                    if (!t) throw new Error("Couldn't create a conversation");
                                    e.push(`/i/grok?conversation=${t}`);
                                })
                                .catch(() => {
                                    c((0, S.fz)({ text: de }));
                                });
                    }, [t, a, u, c, d, e]);
                return n.createElement(y.nO, { namespace: ie }, n.createElement(f.Z, null, p.ZP.isTwitterApp() ? n.createElement(oe, null) : n.createElement(h.Z, { backLocation: "/home", documentTitle: le, history: e, isFullWidth: !0, primaryContent: n.createElement(oe, null), primaryContentLabel: le, rightControl: x ? n.createElement(r.Z, { style: me.buttons }, I && t && n.createElement(R, { grokShareId: t }), n.createElement(l.ZP, { backgroundColor: "transparent", icon: v ? n.createElement(m.default, null) : void 0, onPress: T, size: "small", type: "primaryOutlined" }, v ? "" : ce)) : null, sidebarContent: null, title: le })));
            }
            const me = c.default.create((e) => ({ buttons: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 } }));
        },
        206089: (e, t, a) => {
            a.r(t), a.d(t, { default: () => ee, titleLabel: () => Y });
            var n = a(202784),
                s = a(325686),
                r = a(107267),
                i = a(674132),
                o = a.n(i),
                l = a(323265),
                c = a(252021),
                d = a(652904),
                u = a(293115),
                m = a(609013),
                p = a(428880),
                g = a(222656),
                h = a(991985),
                f = a(400752),
                _ = a(555874),
                y = a(858440),
                w = a(691533),
                b = a(392237),
                E = a(738310),
                k = a(565058),
                S = (a(585488), a(712696)),
                Z = a.n(S);
            const C = E.Z;
            var v = a(265617);
            const x = 60;
            var I = a(807896),
                T = (a(136728), a(45843)),
                P = a(673510),
                A = a(15342),
                L = a(721083),
                M = a(154003),
                R = a(731708),
                z = a(530732),
                D = a(451051),
                O = a(254944),
                F = a(306677),
                B = a(725516),
                N = a(125363),
                H = a(836255),
                K = a(979512);
            const W = o().a294d0c6;
            function U({ item: e }) {
                const { height: t } = (0, y.Z)(),
                    a = (0, B.z)(),
                    i = (0, r.useHistory)(),
                    o = e?.item.user_id_results?.result?.legacy,
                    l = e?.item.original_post_id_results,
                    c = l.result?.legacy,
                    d = e?.prompt?.prompt,
                    u = l.rest_id,
                    [m, p] = n.useState(e?.stats.likes),
                    [g, h] = n.useState(c?.favorited || !1),
                    f = (c?.full_text || "").replace(/(?:https?:\/\/|www\.)[^\s]+$/i, "").trim();
                const _ = (0, N.I0)(),
                    w = n.useCallback(() => {
                        const e = l.rest_id;
                        a.scribe({ section: "grok-feed-item", component: "like", action: "click", data: { tweet_id: e } }),
                            h(!g),
                            p((e) => e + (g ? -1 : 1)),
                            _(
                                g
                                    ? (function (e) {
                                          return async (t, a, { api: n }) => {
                                              n.withEndpoint(v.ZP).unlike({ id: e }, {});
                                          };
                                      })(e)
                                    : (function (e) {
                                          return async (t, a, { api: n }) => {
                                              n.withEndpoint(v.ZP).like({ id: e }, {});
                                          };
                                      })(e),
                            );
                    }, [l, g, h, _, a]),
                    b = n.useCallback(() => {
                        const e = l.rest_id;
                        a.scribe({ section: "grok-feed-item", component: "retweet", action: "click", data: { tweet_id: e } }),
                            _(H.Z.fetchOne(e)).then((t) => {
                                t?.entities?.tweets[e] && i.push({ state: { quotedStatus: t.entities.tweets[e], hasArticleNudge: !1 }, pathname: "/compose/post" });
                            });
                    }, [l, _, i, a]),
                    E = n.useCallback(() => {
                        const e = l.rest_id;
                        a.scribe({ section: "grok-feed-item", component: "grok-feed-item", action: "impression", data: { tweet_id: e } });
                    }, [a, l]),
                    k = { avatarUri: o?.profile_image_url_https, entities: {}, name: o?.name, screenName: o?.screen_name, userId: "userId" },
                    S = n.useMemo(() => ({ height: t - x }), [t]),
                    { openGrok: Z } = (0, K.Z)(),
                    [C, U] = n.useState(!1),
                    $ = n.useCallback(() => {
                        U(!0);
                    }, [U]);
                return n.createElement(
                    s.Z,
                    { style: [S, j.imageContainer] },
                    n.createElement(T.Z, { "aria-label": d, onLoad: $, resizeMode: "cover", source: { uri: e.item.image_url }, style: [j.image, C ? j.imageLoaded : j.imageLoading, { height: t - x - 140 }] }),
                    n.createElement(
                        s.Z,
                        { style: j.footer },
                        n.createElement(
                            s.Z,
                            { style: j.imageFooterRow },
                            n.createElement(P.ZP, (0, I.Z)({ displayMode: "SubscribableUser", style: j.flex, withLink: !0 }, k)),
                            n.createElement(
                                s.Z,
                                { style: [{ gap: 20 }, j.imageFooterRow] },
                                n.createElement(F.D, { id: `post_${u}`, onFullyVisible: E, position: "bottom", testID: `post_${u}` }),
                                n.createElement(A.Z, { count: 0, enableKeyboardShortcuts: !1, excludeRetweetAction: !1, excludeRetweetWithCommentAction: !1, iconSize: "large", isRetweeted: !1, onPress: b }),
                                n.createElement(L.Z, { count: m, iconSize: "large", isLiked: g, onPress: w, withCount: !0 }),
                                n.createElement(
                                    M.ZP,
                                    {
                                        icon: n.createElement(O.default, null),
                                        onClick: () => {
                                            a.scribe({ section: "grok-feed-item", component: "make-your-version", action: "click", data: { tweet_id: u } }), Z({ text: d, autoSubmit: !0, source: "grok_image_feed" });
                                        },
                                        size: "small",
                                        type: "primaryFilled",
                                    },
                                    n.createElement(R.ZP, null, W),
                                ),
                            ),
                        ),
                        f ? n.createElement(z.Z, { link: `/${o?.screen_name}/status/${l.rest_id}`, style: j.tweetTextContainer, withoutInteractiveStyles: !0 }, n.createElement(D.Z, { color: "gray700", displayTextRange: [0, 124], lang: "en", numberOfLines: 1, text: f })) : null,
                    ),
                );
            }
            const $ = n.memo(U),
                j = b.default.create((e) => ({ imageContainer: { paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20, scrollSnapAlign: "start", scrollSnapStop: "always", marginBottom: e.spaces.space8 }, image: { borderRadius: e.borderRadii.medium, width: "100%", height: 700, maxHeight: 900 }, imageFooterRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, imageLoading: { opacity: 0 }, imageLoaded: { opacity: 1, animationDuration: "500ms", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, footer: { height: 100, overflow: "hidden" }, flex: { flex: 1 }, tweetTextContainer: { paddingStart: 64 } })),
                V = new (class {
                    constructor() {
                        (this.idx = (0, k.cn)(0)), (this.items = (0, k.cn)([])), (this.currentCursor = (0, k.cn)("")), (this.nextCursor = (0, k.cn)("")), (this.variables = (0, k.cn)({ cursor: void 0 })), (this.loadMore = (0, k.cn)(!0));
                    }
                })(),
                Q = (e, t) => `${e.item.image_id}`;
            function X({ onDataUpdate: e }) {
                const { items: t, loadMore: a } = (function (e) {
                    const [t, a] = (0, f.KO)(e.items),
                        [, s] = (0, f.KO)(e.currentCursor),
                        [r, i] = (0, f.KO)(e.nextCursor),
                        [o, l] = (0, f.KO)(e.variables),
                        [c, d] = (0, f.KO)(e.loadMore),
                        { grok_feed: u } = Z()(C, o);
                    return (
                        n.useEffect(() => {
                            c && (a((e) => [...e, ...u.items]), i(u.next_cursor), d(!1));
                        }, [u, a, c, d, i]),
                        {
                            items: t,
                            hasNextPage: !0,
                            loadMore: n.useCallback(() => {
                                s(r), l({ cursor: r }), d(!0);
                            }, [l, s, r, d]),
                        }
                    );
                })(V);
                return (
                    n.useEffect(() => {
                        e({ items: t, loadMore: a });
                    }, [e, t, a]),
                    null
                );
            }
            function G() {
                const [{ items: e, loadMore: t }, a] = n.useState({ items: [], loadMore: () => {} }),
                    [r, i] = (0, f.KO)(V.idx),
                    o = n.useRef(0),
                    { height: l } = (0, y.Z)(),
                    c = n.useCallback(({ item: e }) => n.createElement($, { item: e }), []),
                    d = n.useRef(null);
                n.useEffect(() => {
                    const e = (e) => {
                        d.current;
                    };
                    return (
                        window.addEventListener("keydown", e),
                        () => {
                            window.removeEventListener("keydown", e);
                        }
                    );
                }, []);
                const u = n.useMemo(() => [q.scroller, { height: l }], [l]),
                    m = n.useCallback((e, t) => ({ length: l - x, offset: (l - x) * t, index: t }), [l]),
                    p = n.useCallback(
                        (e) => {
                            const t = l - x;
                            t && ((o.current = Math.floor(e.nativeEvent.contentOffset.y / t)), i(o.current));
                        },
                        [l, i],
                    );
                return n.createElement(s.Z, { style: u }, n.createElement(w.Z, null, n.createElement(n.Suspense, { fallback: null }, n.createElement(X, { onDataUpdate: a }))), n.createElement(_.Z, { data: e, getItemLayout: m, initialScrollIndex: r, keyExtractor: Q, onEndReached: t, onEndReachedThreshold: 5, onScroll: p, ref: d, removeClippedSubviews: !0, renderItem: c, showsVerticalScrollIndicator: !1, style: u }));
            }
            const q = b.default.create((e) => ({ scroller: { scrollSnapType: "y mandatory", WebkitScrollSnapType: "y mandatory" } })),
                J = { page: l.ZP.isTwitterApp() ? (l.ZP.isAndroid() ? "grok_groktok_android" : "grok_groktok_ios") : "grok_groktok" },
                Y = o().d5e03fbc;
            function ee({ onDismiss: e }) {
                (0, h.n)(!0);
                const t = (0, r.useHistory)();
                (0, g.Z)();
                const a = n.useCallback(() => {
                        t.replace("/i/grok");
                    }, [t]),
                    [i] = (0, p.ZP)();
                return n.createElement(u.nO, { namespace: J }, n.createElement(d.Z, null, i ? n.createElement(m.T, { documentTitle: Y }) : null, n.createElement(c.Z, { documentTitle: Y, history: t, isFullWidth: !0, onBackClick: a, primaryContent: n.createElement(s.Z, null, n.createElement(G, null)), primaryContentLabel: Y, rightControl: n.createElement(n.Fragment, null), sidebarContent: null, title: Y, withAppBar: !1, withBorderLessLayout: !0, withSearchBox: !1 })));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-ea2f266f.8015893a.js.map

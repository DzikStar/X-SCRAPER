"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-ea2f266f"],
    {
        365803: (e, t, a) => {
            a.r(t), a.d(t, { default: () => me });
            a(136728), a(571372);
            var n = a(202784),
                r = a(400752),
                s = a(325686),
                i = a(107267),
                o = a(67369),
                l = a(154003),
                c = a(392237),
                d = a(674132),
                m = a.n(d),
                u = a(427783),
                p = a(323265),
                g = a(420182),
                h = a(252021),
                f = a(652904),
                _ = a(952793),
                y = a(293115),
                w = a(725405),
                b = a(125363),
                k = a(100326),
                E = a(390387),
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
                        [r, i] = n.useState(!1),
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
                                    s.Z,
                                    { style: z.container },
                                    n.createElement(
                                        s.Z,
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
                                            r ? "Copied" : "Copy",
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
                B = a(303157),
                H = a(11579),
                K = a(155918),
                N = a(836255),
                W = a(919022),
                U = a(791786),
                $ = a(22463),
                j = a(667945),
                V = a(988290),
                X = a(464023),
                G = a(222656),
                Q = a(668214),
                q = a(389071);
            const J = (e, t) => (0, q.UM)(e, t.grokShareId),
                Y = (0, Q.Z)().propsFromState(() => ({ grokShare: J })),
                ee = m().gf43d270,
                te = m().f4b5fae2,
                ae = "image.jpg",
                ne = "image/jpeg",
                re = c.default.create((e) => ({ container: { display: "flex", alignItems: "center", width: "100%", height: "calc(100vh - 53px)", maxHeight: "calc(100vh - 53px)", justifyContent: "space-between", position: "relative" }, content: { flex: 1, width: "100%", alignItems: "center", overflowY: "auto" }, upsellCallout: { marginTop: e.spaces.space24, marginHorizontal: e.spaces.space16 }, buttonContainer: { marginBottom: e.spaces.space32, marginHorizontal: e.spaces.space16 }, narrowContainer: { paddingTop: e.spaces.space24 }, bottomSpacer: { height: e.spaces.space48 }, buttonStyle: { alignSelf: "center" }, inputContainer: { width: "100%", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, alignItems: "center", justifyContent: "center" }, inputWrap: { width: "100%", maxWidth: X.vf }, inputWrapDisclamer: { width: "100%", alignItems: "center", paddingVertical: e.spaces.space8 } })),
                se = Y(({ grokShare: e, grokShareId: t }) => {
                    (0, G.Z)();
                    const a = (0, b.I0)(),
                        r = (0, b.v9)(E.Qb),
                        i = (0, Z.eX)();
                    n.useEffect(() => {
                        a(W.ZP.fetchOneIfNeeded(X.c0));
                    }, [a]),
                        n.useEffect(() => {
                            a((0, H.V)(t));
                        }, [a, t]);
                    const l = (0, o.LX)(),
                        c =
                            e?.items
                                .map((e) => e.file_attachments?.filter((e) => F.v5.includes(e.mime_type)).map((e) => e.url) ?? [])
                                .flat()
                                .filter(Boolean) ?? [],
                        d = c.length > 0 ? c[c.length - 1] : void 0,
                        m = e?.items[e.items.length - 1].message;
                    return n.createElement(
                        V.BQ,
                        { isCompactLayout: l, isEditingEnabled: !1, isGrokShare: !0, isPagedScroll: !1, isShowButtons: !1, isShowCarousel: !0, scrollable: window },
                        n.createElement(
                            s.Z,
                            { style: [re.container, l ? re.narrowContainer : void 0] },
                            n.createElement(
                                s.Z,
                                { style: re.content },
                                2 === e?.items.length && n.createElement(D.ql, null, n.createElement("meta", { content: e.items[0].message, property: "og:title" }), n.createElement("meta", { content: m, property: "og:description" }), d ? n.createElement("meta", { content: d, property: "og:image" }) : null),
                                l ? null : n.createElement(O.Z, { size: "space32" }),
                                e?.items
                                    .map((e, t) => {
                                        if ((e.message || e.thinking_trace || (e.deepsearch_headers && e.deepsearch_headers.length > 0)) && e.sender) {
                                            const r = e.message,
                                                s = "User" === e.sender ? K.CI.HUMAN : K.CI.ASSISTANT,
                                                i = s === K.CI.ASSISTANT && !r;
                                            let o = "";
                                            e.thinking_trace && (o = e.thinking_trace);
                                            const l = (e.file_attachments ?? []).map((e) => ({ mediaId: e.media_id, fileName: e.file_name ?? ae, mimeType: e.mime_type ?? ne, url: e.url, isPublic: !0 })),
                                                c = [];
                                            if (e.card_attachments)
                                                for (const t of e.card_attachments) {
                                                    (0, K.dj)(t) && c.push(JSON.parse(t));
                                                }
                                            else if (e.card_attachment) {
                                                const t = (0, K.dj)(e.card_attachment);
                                                t && c.push(t);
                                            }
                                            let d = [],
                                                m = [],
                                                u = [],
                                                p = [],
                                                g = {};
                                            e.deepsearch_args && (g = e.deepsearch_args);
                                            const h = new B.Fk(g);
                                            if (e.deepsearch_headers && e.deepsearch_headers.length > 0) {
                                                const t = [];
                                                for (const n of e.deepsearch_headers) {
                                                    const e = [];
                                                    for (const t of n.steps) {
                                                        const a = (t.x_post_ids || []).map((e) => e),
                                                            n = (t.web_results || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title }));
                                                        d.push(...a), (d = d.filter((e, t, a) => t === a.findIndex((t) => t === e))), u.push(...n), (u = u.filter((e, t, a) => t === a.findIndex((t) => t.url === e.url))), e.push({ header: t.header || "", assistant: t.assistant || "", decision: t.decision || "", finalMessage: t.final_message || "", functionCall: t.function_call || "", rawFunctionResult: t.raw_function_result || "", summary: t.summary || "", webResults: n, xPostIds: a });
                                                    }
                                                    t.push({ header: n.header || "", steps: e }), a(N.Z.fetchMultiple(d));
                                                }
                                                h.initiateFromHistoryResponses(t);
                                            } else e.post_ids_results && (d = e.post_ids_results?.map((e) => e.result?.rest_id).filter(Boolean)), e.media_post_ids_results && (m = e.media_post_ids_results?.map((e) => e.result?.rest_id).filter(Boolean)), e.web_results && (u = [...e.web_results]), e.cited_web_results && (p = [...e.cited_web_results]);
                                            return s === K.CI.ASSISTANT ? n.createElement(j.Z, { bannerMessages: [], cardAttachments: c, citedWebResults: p, conversationKey: "", deepSearchSummaryAccumulator: h, fileAttachments: l, id: t.toString(), isLoading: i, isPastThinkingTrace: "" !== o, key: t.toString(), mediaTweetIds: m, sender: s, text: r, trace: o, tweetIds: d, webResults: u }) : n.createElement($.Z, { conversationKey: "", fileAttachments: l, hasCustomization: e.has_customization, id: t.toString(), key: t.toString(), text: r });
                                        }
                                        return null;
                                    })
                                    .filter((e) => !!e),
                                n.createElement(O.Z, { size: "space48" }),
                            ),
                            r && n.createElement(s.Z, { style: re.inputContainer }, n.createElement(s.Z, { style: re.inputWrap }, n.createElement(U.Z, { conversationKey: i, disableFileUploads: !0, grokShare: t, hasAccess: !0, isIdle: !0, placeholder: ee, useNonExpanded: !0 }), n.createElement(s.Z, { style: re.inputWrapDisclamer }, n.createElement(A.ZP, { color: "gray500", size: "subtext1" }, te)))),
                        ),
                    );
                }),
                ie = { page: `grok-${p.ZP.isTwitterApp() ? (p.ZP.isAndroid() ? "android" : "ios") : "web"}` };
            function oe() {
                const { grokShareId: e } = (0, i.useParams)();
                return e ? n.createElement(se, { grokShareId: e }) : null;
            }
            const le = m().b198a392,
                ce = m().d16329b4,
                de = m().af6c4470;
            function me() {
                (0, C.n)(!0);
                const e = (0, i.useHistory)(),
                    { grokShareId: t } = (0, i.useParams)(),
                    a = (0, w.Z)(),
                    c = (0, b.I0)(),
                    d = (0, Z.uf)(),
                    m = (0, r.Dv)(g.dd),
                    v = (0, o.LX)(),
                    x = (0, b.v9)(E.Qb),
                    I = (0, _.hC)("responsive_web_grok_debug_enabled"),
                    T = n.useCallback(() => {
                        t &&
                            (0, k.X)({ analytics: a, api: m, dispatch: c, grokModule: d, fromShareId: t })
                                .then((t) => {
                                    if (!t) throw new Error("Couldn't create a conversation");
                                    e.push(`/i/grok?conversation=${t}`);
                                })
                                .catch(() => {
                                    c((0, S.fz)({ text: de }));
                                });
                    }, [t, a, m, c, d, e]);
                return n.createElement(y.nO, { namespace: ie }, n.createElement(f.Z, null, p.ZP.isTwitterApp() ? n.createElement(oe, null) : n.createElement(h.Z, { backLocation: "/home", documentTitle: le, history: e, isFullWidth: !0, primaryContent: n.createElement(oe, null), primaryContentLabel: le, rightControl: x ? n.createElement(s.Z, { style: ue.buttons }, I && t && n.createElement(R, { grokShareId: t }), n.createElement(l.ZP, { backgroundColor: "transparent", icon: v ? n.createElement(u.default, null) : void 0, onPress: T, size: "small", type: "primaryOutlined" }, v ? "" : ce)) : null, sidebarContent: null, title: le })));
            }
            const ue = c.default.create((e) => ({ buttons: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 } }));
        },
        206089: (e, t, a) => {
            a.r(t), a.d(t, { default: () => ee, titleLabel: () => Y });
            var n = a(202784),
                r = a(325686),
                s = a(107267),
                i = a(674132),
                o = a.n(i),
                l = a(323265),
                c = a(252021),
                d = a(652904),
                m = a(293115),
                u = a(609013),
                p = a(428880),
                g = a(222656),
                h = a(991985),
                f = a(400752),
                _ = a(555874),
                y = a(858440),
                w = a(691533),
                b = a(392237),
                k = a(738310),
                E = a(565058),
                S = (a(585488), a(712696)),
                Z = a.n(S);
            const C = k.Z;
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
                H = a(125363),
                K = a(836255),
                N = a(979512);
            const W = o().a294d0c6;
            function U({ item: e }) {
                const { height: t } = (0, y.Z)(),
                    a = (0, B.z)(),
                    i = (0, s.useHistory)(),
                    o = e?.item.user_id_results?.result?.legacy,
                    l = e?.item.original_post_id_results,
                    c = l.result?.legacy,
                    d = e?.prompt?.prompt,
                    m = l.rest_id,
                    [u, p] = n.useState(e?.stats.likes),
                    [g, h] = n.useState(c?.favorited || !1),
                    f = (c?.full_text || "").replace(/(?:https?:\/\/|www\.)[^\s]+$/i, "").trim();
                const _ = (0, H.I0)(),
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
                            _(K.Z.fetchOne(e)).then((t) => {
                                t?.entities?.tweets[e] && i.push({ state: { quotedStatus: t.entities.tweets[e], hasArticleNudge: !1 }, pathname: "/compose/post" });
                            });
                    }, [l, _, i, a]),
                    k = n.useCallback(() => {
                        const e = l.rest_id;
                        a.scribe({ section: "grok-feed-item", component: "grok-feed-item", action: "impression", data: { tweet_id: e } });
                    }, [a, l]),
                    E = { avatarUri: o?.profile_image_url_https, entities: {}, name: o?.name, screenName: o?.screen_name, userId: "userId" },
                    S = n.useMemo(() => ({ height: t - x }), [t]),
                    { openGrok: Z } = (0, N.Z)(),
                    [C, U] = n.useState(!1),
                    $ = n.useCallback(() => {
                        U(!0);
                    }, [U]);
                return n.createElement(
                    r.Z,
                    { style: [S, j.imageContainer] },
                    n.createElement(T.Z, { "aria-label": d, onLoad: $, resizeMode: "cover", source: { uri: e.item.image_url }, style: [j.image, C ? j.imageLoaded : j.imageLoading, { height: t - x - 140 }] }),
                    n.createElement(
                        r.Z,
                        { style: j.footer },
                        n.createElement(
                            r.Z,
                            { style: j.imageFooterRow },
                            n.createElement(P.ZP, (0, I.Z)({ displayMode: "SubscribableUser", style: j.flex, withLink: !0 }, E)),
                            n.createElement(
                                r.Z,
                                { style: [{ gap: 20 }, j.imageFooterRow] },
                                n.createElement(F.D, { id: `post_${m}`, onFullyVisible: k, position: "bottom", testID: `post_${m}` }),
                                n.createElement(A.Z, { count: 0, enableKeyboardShortcuts: !1, excludeRetweetAction: !1, excludeRetweetWithCommentAction: !1, iconSize: "large", isRetweeted: !1, onPress: b }),
                                n.createElement(L.Z, { count: u, iconSize: "large", isLiked: g, onPress: w, withCount: !0 }),
                                n.createElement(
                                    M.ZP,
                                    {
                                        icon: n.createElement(O.default, null),
                                        onClick: () => {
                                            a.scribe({ section: "grok-feed-item", component: "make-your-version", action: "click", data: { tweet_id: m } }), Z({ text: d, autoSubmit: !0, source: "grok_image_feed" });
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
                        (this.idx = (0, E.cn)(0)), (this.items = (0, E.cn)([])), (this.currentCursor = (0, E.cn)("")), (this.nextCursor = (0, E.cn)("")), (this.variables = (0, E.cn)({ cursor: void 0 })), (this.loadMore = (0, E.cn)(!0));
                    }
                })(),
                X = (e, t) => `${e.item.image_id}`;
            function G({ onDataUpdate: e }) {
                const { items: t, loadMore: a } = (function (e) {
                    const [t, a] = (0, f.KO)(e.items),
                        [, r] = (0, f.KO)(e.currentCursor),
                        [s, i] = (0, f.KO)(e.nextCursor),
                        [o, l] = (0, f.KO)(e.variables),
                        [c, d] = (0, f.KO)(e.loadMore),
                        { grok_feed: m } = Z()(C, o);
                    return (
                        n.useEffect(() => {
                            c && (a((e) => [...e, ...m.items]), i(m.next_cursor), d(!1));
                        }, [m, a, c, d, i]),
                        {
                            items: t,
                            hasNextPage: !0,
                            loadMore: n.useCallback(() => {
                                r(s), l({ cursor: s }), d(!0);
                            }, [l, r, s, d]),
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
            function Q() {
                const [{ items: e, loadMore: t }, a] = n.useState({ items: [], loadMore: () => {} }),
                    [s, i] = (0, f.KO)(V.idx),
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
                const m = n.useMemo(() => [q.scroller, { height: l }], [l]),
                    u = n.useCallback((e, t) => ({ length: l - x, offset: (l - x) * t, index: t }), [l]),
                    p = n.useCallback(
                        (e) => {
                            const t = l - x;
                            t && ((o.current = Math.floor(e.nativeEvent.contentOffset.y / t)), i(o.current));
                        },
                        [l, i],
                    );
                return n.createElement(r.Z, { style: m }, n.createElement(w.Z, null, n.createElement(n.Suspense, { fallback: null }, n.createElement(G, { onDataUpdate: a }))), n.createElement(_.Z, { data: e, getItemLayout: u, initialScrollIndex: s, keyExtractor: X, onEndReached: t, onEndReachedThreshold: 5, onScroll: p, ref: d, removeClippedSubviews: !0, renderItem: c, showsVerticalScrollIndicator: !1, style: m }));
            }
            const q = b.default.create((e) => ({ scroller: { scrollSnapType: "y mandatory", WebkitScrollSnapType: "y mandatory" } })),
                J = { page: l.ZP.isTwitterApp() ? (l.ZP.isAndroid() ? "grok_groktok_android" : "grok_groktok_ios") : "grok_groktok" },
                Y = o().d5e03fbc;
            function ee({ onDismiss: e }) {
                (0, h.n)(!0);
                const t = (0, s.useHistory)();
                (0, g.Z)();
                const a = n.useCallback(() => {
                        t.replace("/i/grok");
                    }, [t]),
                    [i] = (0, p.ZP)();
                return n.createElement(m.nO, { namespace: J }, n.createElement(d.Z, null, i ? n.createElement(u.T, { documentTitle: Y }) : null, n.createElement(c.Z, { documentTitle: Y, history: t, isFullWidth: !0, onBackClick: a, primaryContent: n.createElement(r.Z, null, n.createElement(Q, null)), primaryContentLabel: Y, rightControl: n.createElement(n.Fragment, null), sidebarContent: null, title: Y, withAppBar: !1, withBorderLessLayout: !0, withSearchBox: !1 })));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-ea2f266f.7ec3baca.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-c69e90f3"],
    {
        663587: (e, t, a) => {
            a.r(t), a.d(t, { default: () => x, titleLabel: () => v });
            a(543673), a(240753), a(128399), a(136728);
            var n = a(202784),
                i = a(325686),
                s = a(107267),
                r = a(721266),
                o = a(392237),
                l = a(111677),
                c = a.n(l),
                d = a(323265),
                m = a(252021),
                u = a(652904),
                p = a(952793),
                h = a(293115),
                g = a(725516),
                f = a(609013),
                y = a(428880),
                _ = a(222656),
                E = a(991985),
                w = a(54957),
                b = a(888004),
                k = a(871362),
                Z = a(751621),
                C = a(556756),
                S = a(302176);
            const I = { page: d.ZP.isTwitterApp() ? (d.ZP.isAndroid() ? "grok_history_android" : "grok_history_ios") : "grok_history" },
                v = c().ae9cdac6;
            function x({ onDismiss: e }) {
                (0, E.n)(!0);
                const t = (0, s.useHistory)(),
                    a = (0, s.useLocation)(),
                    o = (0, g.z)(),
                    l = (0, p.hC)("responsive_web_grok_history_search_enabled"),
                    c = "string" == typeof a.query.q ? a.query.q : void 0,
                    [x, M] = n.useState(Math.random());
                (0, _.Z)();
                const [P, L] = n.useState(S.G.all),
                    A = n.useCallback(() => {
                        c ? t.replace("/i/grok/history") : t.replace("/i/grok");
                    }, [t, c]),
                    R = n.useCallback(
                        (e) => {
                            const a = new URLSearchParams(window.location.search).get("q");
                            o.scribe({ element: "grok_search", action: "submit" }), e !== a ? t.push(`/i/grok/history?q=${encodeURIComponent(e)}`) : M(Math.random());
                        },
                        [t, o],
                    ),
                    B = n.useMemo(() => (c ? n.createElement(C.D, { query: c, queryKey: x }) : P === S.G.images ? n.createElement(k.v, null) : P === S.G.pins ? n.createElement(b.s, null) : n.createElement(w.c, { onSearchSubmit: R, searchKey: x, searchValue: c ?? "" })), [c, x, P, R]),
                    [D] = (0, y.ZP)();
                return n.createElement(h.nO, { namespace: I }, n.createElement(u.Z, null, D ? n.createElement(f.T, { documentTitle: v }) : null, n.createElement(m.Z, { customSearchBox: l ? n.createElement(Z.v, { initialValue: c ?? "", onSubmit: R }) : void 0, documentTitle: v, history: t, isFullWidth: !0, onBackClick: A, primaryContent: n.createElement(i.Z, { style: T.container }, d.ZP.isWebView() ? n.createElement(r.Z, { size: "space56" }) : null, B), primaryContentLabel: v, rightControl: n.createElement(n.Fragment, null), secondaryBar: c ? null : n.createElement(S.k, { onTabChange: L, selectedTab: P }), sidebarContent: null, title: l ? void 0 : v, withBorderLessLayout: D, withSearchBox: l })));
            }
            const T = o.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space24 } }));
        },
        86629: (e, t, a) => {
            a.r(t), a.d(t, { default: () => Z });
            var n = a(202784),
                i = a(325686),
                s = a(107267),
                r = a(174326),
                o = a(392237),
                l = a(166852),
                c = a(827094),
                d = a(449067),
                m = a(965728),
                u = a(125363),
                p = a(389071),
                h = a(189953),
                g = a(615027),
                f = a(86657),
                y = a(654917),
                _ = a(991985),
                E = a(774038);
            const w = 1024,
                b = 768,
                k = b / w;
            function Z() {
                const e = (0, s.useLocation)(),
                    t = e.state?.conversationKey || "",
                    a = e.state?.messageId || null,
                    i = e.state?.index || 0,
                    r = e.state?.editMode || !1,
                    o = e.state?.fileAttachments || [],
                    l = e.state?.intermediateImageResults || [];
                return t ? n.createElement(v, { conversationKey: t, defaultEditMode: r, fileAttachments: o, indexArg: i, intermediateImageResults: l, messageId: a }) : n.createElement(g.Z, { to: "/home" });
            }
            const C = [],
                S = [],
                I = [];
            function v({ conversationKey: e, defaultEditMode: t, fileAttachments: a, indexArg: o, intermediateImageResults: Z, messageId: v }) {
                (0, _.n)(!0);
                const [T, M] = n.useState(t),
                    P = (0, s.useHistory)(),
                    L = (0, y.ZP)(),
                    A = n.useCallback(() => {
                        P.goBack();
                    }, [P]),
                    R = e === L.conversationKey,
                    B = R ? L.messageIds : C,
                    D = R && (L.status === h.Q_.TYPING || L.status === h.Q_.WAITING),
                    z = n.useMemo(() => (D ? [...B, null] : B), [D, B]),
                    K = z.length,
                    N = v || z[z.length - 1],
                    F = (0, p.bD)(e),
                    U = (0, u.v9)((e) => F.selectMessageById(e, K ? N : null)),
                    O = a || U.fileAttachments || S,
                    H = Z || U.intermediateImageResults || I,
                    W = n.useMemo(() => (0, l.Z)([...H.map((e) => e.imageIdStr), ...O.map((e) => e.mediaId)]).filter(Boolean), [O, H]),
                    $ = n.useMemo(() => O.map((e) => e.url).filter(Boolean), [O]),
                    [j, q] = n.useState({ width: 0, height: 0 }),
                    G = Math.min(1, Math.max(w / j.width || 0, b / j.height || 0)),
                    [V, Q] = n.useState(O.map(() => null)),
                    X = n.useCallback(
                        ({ nativeEvent: { layout: e } }) => {
                            (e.width === j.width && e.height === j.height) || q({ width: e.width, height: e.height });
                        },
                        [q, j],
                    ),
                    [Y, J] = n.useState(0),
                    ee = W[Y],
                    te = $[Y],
                    ae = O.find((e) => e.mediaId === ee) ?? { fileName: "image", mimeType: "image/jpeg" },
                    ne = (0, E.N6)(ae);
                if (!K) return n.createElement(g.Z, { to: "/home" });
                const ie = T ? n.createElement(E.eQ, { contentUrl: ne || "", conversationKey: e, grokFile: ae, onSend: A, setEditMode: M }) : n.createElement(E.rO, { allMediaIds: W, allMediaUrls: $, contentUrl: ne, isLoading: !ne, mediaId: ee, mediaUrl: te, setEditMode: M });
                return n.createElement(
                    d.Z.Configure,
                    { headerless: !0 },
                    n.createElement(
                        c.Z,
                        { backgroundColor: (0, m.L$)(), footerButtons: ie, forceDominantButtonColor: !0, onCloseButtonPress: A },
                        n.createElement(
                            i.Z,
                            { onLayout: X, style: x.flex },
                            j.width &&
                                j.height &&
                                n.createElement(
                                    r.Z,
                                    { contentPadding: 1, onScroll: (e) => J(Math.round(e.next / j.width)), scrollToCenter: !0, style: [j, x.center], visibleItemIndex: o, withAddedNavButtonClickArea: !0, withGlobalKeyboardNavigation: !0, withScrollIntoView: !1 },
                                    O.map((e, t) => {
                                        const a = W[t],
                                            s = O.find((e) => e.mediaId === a) ?? { fileName: "image", mimeType: "image/jpeg" },
                                            r = H.filter((e) => e.imageIdStr === a),
                                            o = D ? U.expectedImageAspectRatio || k : V[t] || k,
                                            l = V[t] || D ? Math.min(j.width, j.height * o) * G : void 0;
                                        return n.createElement(
                                            i.Z,
                                            { key: `slot_${t}`, style: [j, x.center] },
                                            n.createElement(f.Z, {
                                                aspectRatio: U.expectedImageAspectRatio,
                                                centerJustify: !0,
                                                file: s,
                                                height: j.height * G,
                                                intermediateResults: r,
                                                isImageActionsEnabled: !1,
                                                isLoading: D,
                                                key: `image_${t}`,
                                                onClick: () => {},
                                                onImageSize: (e, a) => {
                                                    if (e && a) {
                                                        const n = e / a;
                                                        Q((e) => {
                                                            const a = [...e];
                                                            return (a[t] = n), a;
                                                        });
                                                    }
                                                },
                                                style: x.img,
                                                width: l,
                                            }),
                                        );
                                    }),
                                ),
                        ),
                    ),
                );
            }
            const x = o.default.create((e) => ({ center: { justifyContent: "center", alignItems: "center" }, flex: { flex: 1 }, white: { color: "white" }, img: { animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" } }));
        },
        177695: (e, t, a) => {
            a.r(t), a.d(t, { default: () => g });
            a(543673), a(240753), a(128399);
            var n = a(202784),
                i = a(325686),
                s = a(107267),
                r = a(167630),
                o = a(992942),
                l = a(392237),
                c = a(827094),
                d = a(449067),
                m = a(965728),
                u = a(125363),
                p = a(270172),
                h = a(991985);
            const g = (e) => {
                    (0, h.n)(!0);
                    const [t, a] = n.useState(0),
                        l = e.match.params?.grokMediaId,
                        g = (0, s.useLocation)(),
                        y = g.state?.file ?? void 0,
                        _ = (0, u.I0)(),
                        [E, w] = n.useState(!1),
                        [b, k] = n.useState(l ? void 0 : (y?.url ?? void 0)),
                        Z = (0, s.useHistory)();
                    n.useEffect(() => {
                        if (!l) return;
                        const e = `https://api.x.com/2/grok/attachment.json?mediaId=${l}`;
                        w(!0),
                            _((0, p.X)(e))
                                .then((e) => {
                                    if (e) {
                                        const t = URL.createObjectURL(e);
                                        k(t);
                                    }
                                })
                                .catch()
                                .finally(() => {
                                    w(!1);
                                });
                    }, [l, w, _]);
                    const C = n.useCallback(() => {
                            Z.goBack();
                        }, [Z]),
                        S = n.useMemo(() => (b ? { uri: b } : void 0), [b]);
                    return n.createElement(d.Z.Configure, { headerless: !0 }, n.createElement(c.Z, { backgroundColor: (0, m.L$)(), forceDominantButtonColor: !0, onCloseButtonPress: C }, n.createElement(i.Z, { style: f.container }, E ? n.createElement(r.Z, null) : n.createElement(o.Z, { onLoad: () => a(1), resizeMode: "center", source: S, style: [f.image, f.imageTransition, { opacity: t }] }))));
                },
                f = l.default.create((e) => ({ container: { padding: e.spaces.space16, width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }, image: { width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%" }, imageTransition: { transition: "opacity 100ms ease-in-out" } }));
        },
        365803: (e, t, a) => {
            a.r(t), a.d(t, { default: () => ue });
            a(136728), a(571372);
            var n = a(202784),
                i = a(400752),
                s = a(325686),
                r = a(107267),
                o = a(67369),
                l = a(154003),
                c = a(392237),
                d = a(111677),
                m = a.n(d),
                u = a(427783),
                p = a(323265),
                h = a(420182),
                g = a(252021),
                f = a(652904),
                y = a(952793),
                _ = a(293115),
                E = a(725405),
                w = a(125363),
                b = a(100326),
                k = a(390387),
                Z = a(601576),
                C = a(654917),
                S = a(991985),
                I = a(794197),
                v = a(576648),
                x = (a(585488), a(712696)),
                T = a.n(x),
                M = a(525271),
                P = a(731708),
                L = a(492244);
            const A = I.Z,
                R = ({ grokShareId: e }) => {
                    const [t, a] = n.useState(!1),
                        [i, r] = n.useState(!1),
                        { result: o } = T()(A, { view: e });
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(l.ZP, { backgroundColor: "transparent", icon: n.createElement(L.default, null), onClick: () => a(!0), size: "small", type: "primaryOutlined" }),
                        t &&
                            n.createElement(
                                M.Z,
                                { align: "right", buttonType: "primaryText", onDismissed: () => a(!1), title: "Debug (Internal)" },
                                n.createElement(
                                    s.Z,
                                    { style: B.container },
                                    n.createElement(
                                        s.Z,
                                        { style: B.section },
                                        n.createElement(P.ZP, { weight: "bold" }, "Conversation ID"),
                                        n.createElement(P.ZP, null, o),
                                        n.createElement(
                                            l.ZP,
                                            {
                                                onClick: () => {
                                                    v.Z.setString(o), r(!0);
                                                },
                                            },
                                            i ? "Copied" : "Copy",
                                        ),
                                    ),
                                ),
                            ),
                    );
                },
                B = c.default.create((e) => ({ container: { width: "100%", maxWidth: 500, paddingHorizontal: e.spaces.space20, display: "flex", flexDirection: "column", gap: e.spaces.space16, paddingTop: e.spaces.space8 }, section: { display: "flex", flexDirection: "column", gap: e.spaces.space8 } }));
            var D = a(272175),
                z = a(721266),
                K = a(276259),
                N = a(123702),
                F = a(397159),
                U = a(11579),
                O = a(155918),
                H = a(836255),
                W = a(919022),
                $ = a(791786),
                j = a(22463),
                q = a(667945),
                G = a(988290),
                V = a(464023),
                Q = a(222656),
                X = a(668214),
                Y = a(389071);
            const J = (e, t) => (0, Y.UM)(e, t.grokShareId),
                ee = (0, X.Z)().propsFromState(() => ({ grokShare: J })),
                te = m().gf43d270,
                ae = m().f4b5fae2,
                ne = "image.jpg",
                ie = "image/jpeg",
                se = c.default.create((e) => ({ container: { display: "flex", alignItems: "center", width: "100%", height: "calc(100vh - 53px)", maxHeight: "calc(100vh - 53px)", justifyContent: "space-between", position: "relative" }, content: { flex: 1, width: "100%", alignItems: "center", overflowY: "auto" }, upsellCallout: { marginTop: e.spaces.space24, marginHorizontal: e.spaces.space16 }, buttonContainer: { marginBottom: e.spaces.space32, marginHorizontal: e.spaces.space16 }, narrowContainer: { paddingTop: e.spaces.space24 }, bottomSpacer: { height: e.spaces.space48 }, buttonStyle: { alignSelf: "center" }, inputContainer: { width: "100%", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, alignItems: "center", justifyContent: "center" }, inputWrap: { width: "100%", maxWidth: V.vf }, inputWrapDisclamer: { width: "100%", alignItems: "center", paddingVertical: e.spaces.space8 } })),
                re = ee(({ grokShare: e, grokShareId: t }) => {
                    (0, Q.Z)();
                    const a = (0, w.I0)(),
                        i = (0, w.v9)(k.Qb),
                        r = (0, C.eX)();
                    n.useEffect(() => {
                        a(W.ZP.fetchOneIfNeeded(V.c0));
                    }, [a]),
                        n.useEffect(() => {
                            a((0, U.V)(t));
                        }, [a, t]);
                    const l = (0, o.LX)(),
                        c =
                            e?.items
                                .map((e) => e.file_attachments?.filter((e) => K.v5.includes(e.mime_type)).map((e) => e.url) ?? [])
                                .flat()
                                .filter(Boolean) ?? [],
                        d = c.length > 0 ? c[c.length - 1] : void 0,
                        m = (0, N.K)(e?.items[e.items.length - 1].message || "");
                    return n.createElement(
                        G.BQ,
                        { isCompactLayout: l, isEditingEnabled: !1, isGrokShare: !0, isPagedScroll: !1, isShowButtons: !1, isShowCarousel: !0, scrollable: window },
                        n.createElement(
                            s.Z,
                            { style: [se.container, l ? se.narrowContainer : void 0] },
                            n.createElement(
                                s.Z,
                                { style: se.content },
                                2 === e?.items.length && n.createElement(D.ql, null, n.createElement("meta", { content: e.items[0].message, property: "og:title" }), n.createElement("meta", { content: m, property: "og:description" }), d ? n.createElement("meta", { content: d, property: "og:image" }) : null),
                                l ? null : n.createElement(z.Z, { size: "space32" }),
                                e?.items
                                    .map((e, t) => {
                                        if ((e.message || e.thinking_trace || (e.deepsearch_headers && e.deepsearch_headers.length > 0)) && e.sender) {
                                            const i = e.message,
                                                s = "User" === e.sender ? O.CI.HUMAN : O.CI.ASSISTANT,
                                                r = s === O.CI.ASSISTANT && !i;
                                            let o,
                                                l = "";
                                            e.thinking_trace && (l = e.thinking_trace), e.ui_layout?.reasoning_ui_layout && ("Split" === e.ui_layout.reasoning_ui_layout ? (o = "SPLIT") : "Unified" === e.ui_layout.reasoning_ui_layout && (o = "UNIFIED"));
                                            const c = (e.file_attachments ?? []).map((e) => ({ mediaId: e.media_id, fileName: e.file_name ?? ne, mimeType: e.mime_type ?? ie, url: e.url, isPublic: !0 })),
                                                d = [];
                                            if (e.card_attachments)
                                                for (const t of e.card_attachments) {
                                                    const e = (0, O.dj)(t);
                                                    e && (d.push(e), "x_posts_card" === e.cardType ? a(H.Z.fetchMultipleIfNeeded(e.post_ids)) : "x_users_card" === e.cardType && a(W.ZP.fetchManyByScreenNames(e.user_handles)));
                                                }
                                            else if (e.card_attachment) {
                                                const t = (0, O.dj)(e.card_attachment);
                                                t && d.push(t);
                                            }
                                            let m = [],
                                                u = [],
                                                p = [],
                                                h = [],
                                                g = {};
                                            e.deepsearch_args && (g = e.deepsearch_args);
                                            const f = new F.fQ({ deepsearchArgs: g });
                                            if (e.deepsearch_headers && e.deepsearch_headers.length > 0) {
                                                const t = [];
                                                for (const n of e.deepsearch_headers) {
                                                    const e = [];
                                                    for (const t of n.steps) {
                                                        const a = (t.x_post_ids || []).map((e) => e),
                                                            n = (t.web_results || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title }));
                                                        m.push(...a), (m = m.filter((e, t, a) => t === a.findIndex((t) => t === e))), p.push(...n), (p = p.filter((e, t, a) => t === a.findIndex((t) => t.url === e.url))), e.push({ header: t.header || "", assistant: t.assistant || "", decision: t.decision || "", finalMessage: t.final_message || "", functionCall: t.function_call || "", rawFunctionResult: t.raw_function_result || "", summary: t.summary || "", webResults: n, xPostIds: a });
                                                    }
                                                    t.push({ header: n.header || "", steps: e }), a(H.Z.fetchMultiple(m));
                                                }
                                                f.initiateFromHistoryResponses(t);
                                            } else e.post_ids_results && (m = e.post_ids_results?.map((e) => e.result?.rest_id).filter(Boolean)), e.media_post_ids_results && (u = e.media_post_ids_results?.map((e) => e.result?.rest_id).filter(Boolean)), e.web_results && (p = [...e.web_results]), e.cited_web_results && (h = [...e.cited_web_results]);
                                            return s === O.CI.ASSISTANT ? n.createElement(q.Z, { bannerMessages: [], cardAttachments: d, citedWebResults: h, conversationKey: "", fileAttachments: c, id: t.toString(), isLoading: r, isPastThinkingTrace: "" !== l, key: t.toString(), mediaTweetIds: u, messageStepAccumulator: f, reasoningLayout: o, sender: s, text: i, trace: l, tweetIds: m, webResults: p }) : n.createElement(j.Z, { conversationKey: "", fileAttachments: c, hasCustomization: e.has_customization, id: t.toString(), key: t.toString(), text: i });
                                        }
                                        return null;
                                    })
                                    .filter((e) => !!e),
                                n.createElement(z.Z, { size: "space48" }),
                            ),
                            i && n.createElement(s.Z, { style: se.inputContainer }, n.createElement(s.Z, { style: se.inputWrap }, n.createElement($.Z, { conversationKey: r, disableFileUploads: !0, grokShare: t, hasAccess: !0, isIdle: !0, placeholder: te, useNonExpanded: !0 }), n.createElement(s.Z, { style: se.inputWrapDisclamer }, n.createElement(P.ZP, { color: "gray500", size: "subtext1" }, ae)))),
                        ),
                    );
                }),
                oe = { page: `grok-${p.ZP.isTwitterApp() ? (p.ZP.isAndroid() ? "android" : "ios") : "web"}` };
            function le() {
                const { grokShareId: e } = (0, r.useParams)();
                return e ? n.createElement(re, { grokShareId: e }) : null;
            }
            const ce = m().b198a392,
                de = m().d16329b4,
                me = m().af6c4470;
            function ue() {
                (0, S.n)(!0);
                const e = (0, r.useHistory)(),
                    { grokShareId: t } = (0, r.useParams)(),
                    a = (0, E.Z)(),
                    c = (0, w.I0)(),
                    d = (0, C.uf)(),
                    m = (0, i.Dv)(h.dd),
                    I = (0, o.LX)(),
                    v = (0, w.v9)(k.Qb),
                    x = (0, y.hC)("responsive_web_grok_debug_enabled"),
                    T = n.useCallback(() => {
                        t &&
                            (0, b.X)({ analytics: a, api: m, dispatch: c, grokModule: d, fromShareId: t })
                                .then((t) => {
                                    if (!t) throw new Error("Couldn't create a conversation");
                                    e.push(`/i/grok?conversation=${t}`);
                                })
                                .catch(() => {
                                    c((0, Z.fz)({ text: me }));
                                });
                    }, [t, a, m, c, d, e]);
                return n.createElement(_.nO, { namespace: oe }, n.createElement(f.Z, null, p.ZP.isTwitterApp() ? n.createElement(le, null) : n.createElement(g.Z, { backLocation: "/home", documentTitle: ce, history: e, isFullWidth: !0, primaryContent: n.createElement(le, null), primaryContentLabel: ce, rightControl: v ? n.createElement(s.Z, { style: pe.buttons }, x && t && n.createElement(R, { grokShareId: t }), n.createElement(l.ZP, { backgroundColor: "transparent", icon: I ? n.createElement(u.default, null) : void 0, onPress: T, size: "small", type: "primaryOutlined" }, I ? "" : de)) : null, sidebarContent: null, title: ce })));
            }
            const pe = c.default.create((e) => ({ buttons: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 } }));
        },
        206089: (e, t, a) => {
            a.r(t), a.d(t, { default: () => ee, titleLabel: () => J });
            var n = a(202784),
                i = a(325686),
                s = a(107267),
                r = a(111677),
                o = a.n(r),
                l = a(323265),
                c = a(252021),
                d = a(652904),
                m = a(293115),
                u = a(609013),
                p = a(428880),
                h = a(222656),
                g = a(991985),
                f = a(400752),
                y = a(555874),
                _ = a(858440),
                E = a(691533),
                w = a(392237),
                b = a(738310),
                k = a(565058),
                Z = (a(585488), a(712696)),
                C = a.n(Z);
            const S = b.Z;
            var I = a(265617);
            const v = 60;
            var x = a(807896),
                T = (a(136728), a(45843)),
                M = a(673510),
                P = a(15342),
                L = a(721083),
                A = a(154003),
                R = a(731708),
                B = a(530732),
                D = a(451051),
                z = a(254944),
                K = a(306677),
                N = a(725516),
                F = a(125363),
                U = a(836255),
                O = a(979512);
            const H = o().a294d0c6;
            function W({ item: e }) {
                const { height: t } = (0, _.Z)(),
                    a = (0, N.z)(),
                    r = (0, s.useHistory)(),
                    o = e?.item.user_id_results?.result?.core,
                    l = e?.item.user_id_results?.result?.avatar?.image_url,
                    c = e?.item.original_post_id_results,
                    d = c.result?.legacy,
                    m = e?.prompt?.prompt,
                    u = c.rest_id,
                    [p, h] = n.useState(e?.stats.likes),
                    [g, f] = n.useState(d?.favorited || !1),
                    y = (d?.full_text || "").replace(/(?:https?:\/\/|www\.)[^\s]+$/i, "").trim();
                const E = (0, F.I0)(),
                    w = n.useCallback(() => {
                        const e = c.rest_id;
                        a.scribe({ section: "grok-feed-item", component: "like", action: "click", data: { tweet_id: e } }),
                            f(!g),
                            h((e) => e + (g ? -1 : 1)),
                            E(
                                g
                                    ? (function (e) {
                                          return async (t, a, { api: n }) => {
                                              n.withEndpoint(I.ZP).unlike({ id: e }, {});
                                          };
                                      })(e)
                                    : (function (e) {
                                          return async (t, a, { api: n }) => {
                                              n.withEndpoint(I.ZP).like({ id: e }, {});
                                          };
                                      })(e),
                            );
                    }, [c, g, f, E, a]),
                    b = n.useCallback(() => {
                        const e = c.rest_id;
                        a.scribe({ section: "grok-feed-item", component: "retweet", action: "click", data: { tweet_id: e } }),
                            E(U.Z.fetchOne(e)).then((t) => {
                                t?.entities?.tweets[e] && r.push({ state: { quotedStatus: t.entities.tweets[e], hasArticleNudge: !1 }, pathname: "/compose/post" });
                            });
                    }, [c, E, r, a]),
                    k = n.useCallback(() => {
                        const e = c.rest_id;
                        a.scribe({ section: "grok-feed-item", component: "grok-feed-item", action: "impression", data: { tweet_id: e } });
                    }, [a, c]),
                    Z = { avatarUri: l, entities: {}, name: o?.name, screenName: o?.screen_name, userId: "userId" },
                    C = n.useMemo(() => ({ height: t - v }), [t]),
                    { openGrok: S } = (0, O.Z)(),
                    [W, $] = n.useState(!1),
                    q = n.useCallback(() => {
                        $(!0);
                    }, [$]);
                return n.createElement(
                    i.Z,
                    { style: [C, j.imageContainer] },
                    n.createElement(T.Z, { "aria-label": m, onLoad: q, resizeMode: "cover", source: { uri: e.item.image_url }, style: [j.image, W ? j.imageLoaded : j.imageLoading, { height: t - v - 140 }] }),
                    n.createElement(
                        i.Z,
                        { style: j.footer },
                        n.createElement(
                            i.Z,
                            { style: j.imageFooterRow },
                            n.createElement(M.ZP, (0, x.Z)({ displayMode: "SubscribableUser", style: j.flex, withLink: !0 }, Z)),
                            n.createElement(
                                i.Z,
                                { style: [{ gap: 20 }, j.imageFooterRow] },
                                n.createElement(K.D, { id: `post_${u}`, onFullyVisible: k, position: "bottom", testID: `post_${u}` }),
                                n.createElement(P.Z, { count: 0, enableKeyboardShortcuts: !1, excludeRetweetAction: !1, excludeRetweetWithCommentAction: !1, iconSize: "large", isRetweeted: !1, onPress: b }),
                                n.createElement(L.Z, { count: p, iconSize: "large", isLiked: g, onPress: w, withCount: !0 }),
                                n.createElement(
                                    A.ZP,
                                    {
                                        icon: n.createElement(z.default, null),
                                        onClick: () => {
                                            a.scribe({ section: "grok-feed-item", component: "make-your-version", action: "click", data: { tweet_id: u } }), S({ text: m, autoSubmit: !0, source: "grok_image_feed" });
                                        },
                                        size: "small",
                                        type: "primaryFilled",
                                    },
                                    n.createElement(R.ZP, null, H),
                                ),
                            ),
                        ),
                        y ? n.createElement(B.Z, { link: `/${o?.screen_name}/status/${c.rest_id}`, style: j.tweetTextContainer, withoutInteractiveStyles: !0 }, n.createElement(D.Z, { color: "gray700", displayTextRange: [0, 124], lang: "en", numberOfLines: 1, text: y })) : null,
                    ),
                );
            }
            const $ = n.memo(W),
                j = w.default.create((e) => ({ imageContainer: { paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20, scrollSnapAlign: "start", scrollSnapStop: "always", marginBottom: e.spaces.space8 }, image: { borderRadius: e.borderRadii.medium, width: "100%", height: 700, maxHeight: 900 }, imageFooterRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, imageLoading: { opacity: 0 }, imageLoaded: { opacity: 1, animationDuration: "500ms", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, footer: { height: 100, overflow: "hidden" }, flex: { flex: 1 }, tweetTextContainer: { paddingStart: 64 } })),
                q = new (class {
                    constructor() {
                        (this.idx = (0, k.cn)(0)), (this.items = (0, k.cn)([])), (this.currentCursor = (0, k.cn)("")), (this.nextCursor = (0, k.cn)("")), (this.variables = (0, k.cn)({ cursor: void 0 })), (this.loadMore = (0, k.cn)(!0));
                    }
                })(),
                G = (e, t) => `${e.item.image_id}`;
            function V({ onDataUpdate: e }) {
                const { items: t, loadMore: a } = (function (e) {
                    const [t, a] = (0, f.KO)(e.items),
                        [, i] = (0, f.KO)(e.currentCursor),
                        [s, r] = (0, f.KO)(e.nextCursor),
                        [o, l] = (0, f.KO)(e.variables),
                        [c, d] = (0, f.KO)(e.loadMore),
                        { grok_feed: m } = C()(S, o);
                    return (
                        n.useEffect(() => {
                            c && (a((e) => [...e, ...m.items]), r(m.next_cursor), d(!1));
                        }, [m, a, c, d, r]),
                        {
                            items: t,
                            hasNextPage: !0,
                            loadMore: n.useCallback(() => {
                                i(s), l({ cursor: s }), d(!0);
                            }, [l, i, s, d]),
                        }
                    );
                })(q);
                return (
                    n.useEffect(() => {
                        e({ items: t, loadMore: a });
                    }, [e, t, a]),
                    null
                );
            }
            function Q() {
                const [{ items: e, loadMore: t }, a] = n.useState({ items: [], loadMore: () => {} }),
                    [s, r] = (0, f.KO)(q.idx),
                    o = n.useRef(0),
                    { height: l } = (0, _.Z)(),
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
                const m = n.useMemo(() => [X.scroller, { height: l }], [l]),
                    u = n.useCallback((e, t) => ({ length: l - v, offset: (l - v) * t, index: t }), [l]),
                    p = n.useCallback(
                        (e) => {
                            const t = l - v;
                            t && ((o.current = Math.floor(e.nativeEvent.contentOffset.y / t)), r(o.current));
                        },
                        [l, r],
                    );
                return n.createElement(i.Z, { style: m }, n.createElement(E.Z, null, n.createElement(n.Suspense, { fallback: null }, n.createElement(V, { onDataUpdate: a }))), n.createElement(y.Z, { data: e, getItemLayout: u, initialScrollIndex: s, keyExtractor: G, onEndReached: t, onEndReachedThreshold: 5, onScroll: p, ref: d, removeClippedSubviews: !0, renderItem: c, showsVerticalScrollIndicator: !1, style: m }));
            }
            const X = w.default.create((e) => ({ scroller: { scrollSnapType: "y mandatory", WebkitScrollSnapType: "y mandatory" } })),
                Y = { page: l.ZP.isTwitterApp() ? (l.ZP.isAndroid() ? "grok_groktok_android" : "grok_groktok_ios") : "grok_groktok" },
                J = o().d5e03fbc;
            function ee({ onDismiss: e }) {
                (0, g.n)(!0);
                const t = (0, s.useHistory)();
                (0, h.Z)();
                const a = n.useCallback(() => {
                        t.replace("/i/grok");
                    }, [t]),
                    [r] = (0, p.ZP)();
                return n.createElement(m.nO, { namespace: Y }, n.createElement(d.Z, null, r ? n.createElement(u.T, { documentTitle: J }) : null, n.createElement(c.Z, { documentTitle: J, history: t, isFullWidth: !0, onBackClick: a, primaryContent: n.createElement(i.Z, null, n.createElement(Q, null)), primaryContentLabel: J, rightControl: n.createElement(n.Fragment, null), sidebarContent: null, title: J, withAppBar: !1, withBorderLessLayout: !0, withSearchBox: !1 })));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-c69e90f3.bcde270a.js.map

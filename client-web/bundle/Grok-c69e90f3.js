"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-c69e90f3"],
    {
        663587: (e, t, a) => {
            a.r(t), a.d(t, { default: () => x, titleLabel: () => v });
            a(543673), a(240753), a(128399), a(136728);
            var n = a(202784),
                s = a(325686),
                i = a(107267),
                r = a(721266),
                o = a(392237),
                l = a(111677),
                c = a.n(l),
                d = a(323265),
                u = a(252021),
                m = a(652904),
                p = a(952793),
                g = a(293115),
                h = a(725516),
                f = a(609013),
                y = a(428880),
                _ = a(222656),
                E = a(991985),
                b = a(54957),
                w = a(888004),
                k = a(871362),
                Z = a(751621),
                C = a(556756),
                S = a(302176);
            const I = { page: d.ZP.isTwitterApp() ? (d.ZP.isAndroid() ? "grok_history_android" : "grok_history_ios") : "grok_history" },
                v = c().ae9cdac6;
            function x({ onDismiss: e }) {
                (0, E.n)(!0);
                const t = (0, i.useHistory)(),
                    a = (0, i.useLocation)(),
                    o = (0, h.z)(),
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
                    B = n.useMemo(() => (c ? n.createElement(C.D, { query: c, queryKey: x }) : P === S.G.images ? n.createElement(k.v, null) : P === S.G.pins ? n.createElement(w.s, null) : n.createElement(b.c, { onSearchSubmit: R, searchKey: x, searchValue: c ?? "" })), [c, x, P, R]),
                    [D] = (0, y.ZP)();
                return n.createElement(g.nO, { namespace: I }, n.createElement(m.Z, null, D ? n.createElement(f.T, { documentTitle: v }) : null, n.createElement(u.Z, { customSearchBox: l ? n.createElement(Z.v, { initialValue: c ?? "", onSubmit: R }) : void 0, documentTitle: v, history: t, isFullWidth: !0, onBackClick: A, primaryContent: n.createElement(s.Z, { style: T.container }, d.ZP.isWebView() ? n.createElement(r.Z, { size: "space56" }) : null, B), primaryContentLabel: v, rightControl: n.createElement(n.Fragment, null), secondaryBar: c ? null : n.createElement(S.k, { onTabChange: L, selectedTab: P }), sidebarContent: null, title: l ? void 0 : v, withBorderLessLayout: D, withSearchBox: l })));
            }
            const T = o.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space24 } }));
        },
        86629: (e, t, a) => {
            a.r(t), a.d(t, { default: () => Z });
            var n = a(202784),
                s = a(325686),
                i = a(107267),
                r = a(174326),
                o = a(392237),
                l = a(166852),
                c = a(827094),
                d = a(449067),
                u = a(965728),
                m = a(125363),
                p = a(389071),
                g = a(189953),
                h = a(615027),
                f = a(86657),
                y = a(654917),
                _ = a(991985),
                E = a(774038);
            const b = 1024,
                w = 768,
                k = w / b;
            function Z() {
                const e = (0, i.useLocation)(),
                    t = e.state?.conversationKey || "",
                    a = e.state?.messageId || null,
                    s = e.state?.index || 0,
                    r = e.state?.editMode || !1,
                    o = e.state?.fileAttachments || [],
                    l = e.state?.intermediateImageResults || [];
                return t ? n.createElement(v, { conversationKey: t, defaultEditMode: r, fileAttachments: o, indexArg: s, intermediateImageResults: l, messageId: a }) : n.createElement(h.Z, { to: "/home" });
            }
            const C = [],
                S = [],
                I = [];
            function v({ conversationKey: e, defaultEditMode: t, fileAttachments: a, indexArg: o, intermediateImageResults: Z, messageId: v }) {
                (0, _.n)(!0);
                const [T, M] = n.useState(t),
                    P = (0, i.useHistory)(),
                    L = (0, y.ZP)(),
                    A = n.useCallback(() => {
                        P.goBack();
                    }, [P]),
                    R = e === L.conversationKey,
                    B = R ? L.messageIds : C,
                    D = R && (L.status === g.Q_.TYPING || L.status === g.Q_.WAITING),
                    z = n.useMemo(() => (D ? [...B, null] : B), [D, B]),
                    K = z.length,
                    N = v || z[z.length - 1],
                    U = (0, p.bD)(e),
                    F = (0, m.v9)((e) => U.selectMessageById(e, K ? N : null)),
                    O = a || F.fileAttachments || S,
                    H = Z || F.intermediateImageResults || I,
                    W = n.useMemo(() => (0, l.Z)([...H.map((e) => e.imageIdStr), ...O.map((e) => e.mediaId)]).filter(Boolean), [O, H]),
                    $ = n.useMemo(() => O.map((e) => e.url).filter(Boolean), [O]),
                    [j, q] = n.useState({ width: 0, height: 0 }),
                    G = Math.min(1, Math.max(b / j.width || 0, w / j.height || 0)),
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
                if (!K) return n.createElement(h.Z, { to: "/home" });
                const se = T ? n.createElement(E.eQ, { contentUrl: ne || "", conversationKey: e, grokFile: ae, onSend: A, setEditMode: M }) : n.createElement(E.rO, { allMediaIds: W, allMediaUrls: $, contentUrl: ne, isLoading: !ne, mediaId: ee, mediaUrl: te, setEditMode: M });
                return n.createElement(
                    d.Z.Configure,
                    { headerless: !0 },
                    n.createElement(
                        c.Z,
                        { backgroundColor: (0, u.L$)(), footerButtons: se, forceDominantButtonColor: !0, onCloseButtonPress: A },
                        n.createElement(
                            s.Z,
                            { onLayout: X, style: x.flex },
                            j.width &&
                                j.height &&
                                n.createElement(
                                    r.Z,
                                    { contentPadding: 1, onScroll: (e) => J(Math.round(e.next / j.width)), scrollToCenter: !0, style: [j, x.center], visibleItemIndex: o, withAddedNavButtonClickArea: !0, withGlobalKeyboardNavigation: !0, withScrollIntoView: !1 },
                                    O.map((e, t) => {
                                        const a = W[t],
                                            i = O.find((e) => e.mediaId === a) ?? { fileName: "image", mimeType: "image/jpeg" },
                                            r = H.filter((e) => e.imageIdStr === a),
                                            o = D ? F.expectedImageAspectRatio || k : V[t] || k,
                                            l = V[t] || D ? Math.min(j.width, j.height * o) * G : void 0;
                                        return n.createElement(
                                            s.Z,
                                            { key: `slot_${t}`, style: [j, x.center] },
                                            n.createElement(f.Z, {
                                                aspectRatio: F.expectedImageAspectRatio,
                                                centerJustify: !0,
                                                file: i,
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
            a.r(t), a.d(t, { default: () => h });
            a(543673), a(240753), a(128399);
            var n = a(202784),
                s = a(325686),
                i = a(107267),
                r = a(167630),
                o = a(992942),
                l = a(392237),
                c = a(827094),
                d = a(449067),
                u = a(965728),
                m = a(125363),
                p = a(270172),
                g = a(991985);
            const h = (e) => {
                    (0, g.n)(!0);
                    const [t, a] = n.useState(0),
                        l = e.match.params?.grokMediaId,
                        h = (0, i.useLocation)(),
                        y = h.state?.file ?? void 0,
                        _ = (0, m.I0)(),
                        [E, b] = n.useState(!1),
                        [w, k] = n.useState(l ? void 0 : (y?.url ?? void 0)),
                        Z = (0, i.useHistory)();
                    n.useEffect(() => {
                        if (!l) return;
                        const e = `https://api.x.com/2/grok/attachment.json?mediaId=${l}`;
                        b(!0),
                            _((0, p.X)(e))
                                .then((e) => {
                                    if (e) {
                                        const t = URL.createObjectURL(e);
                                        k(t);
                                    }
                                })
                                .catch()
                                .finally(() => {
                                    b(!1);
                                });
                    }, [l, b, _]);
                    const C = n.useCallback(() => {
                            Z.goBack();
                        }, [Z]),
                        S = n.useMemo(() => (w ? { uri: w } : void 0), [w]);
                    return n.createElement(d.Z.Configure, { headerless: !0 }, n.createElement(c.Z, { backgroundColor: (0, u.L$)(), forceDominantButtonColor: !0, onCloseButtonPress: C }, n.createElement(s.Z, { style: f.container }, E ? n.createElement(r.Z, null) : n.createElement(o.Z, { onLoad: () => a(1), resizeMode: "center", source: S, style: [f.image, f.imageTransition, { opacity: t }] }))));
                },
                f = l.default.create((e) => ({ container: { padding: e.spaces.space16, width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }, image: { width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%" }, imageTransition: { transition: "opacity 100ms ease-in-out" } }));
        },
        365803: (e, t, a) => {
            a.r(t), a.d(t, { default: () => me });
            a(136728), a(571372);
            var n = a(202784),
                s = a(400752),
                i = a(325686),
                r = a(107267),
                o = a(67369),
                l = a(154003),
                c = a(392237),
                d = a(111677),
                u = a.n(d),
                m = a(427783),
                p = a(323265),
                g = a(420182),
                h = a(252021),
                f = a(652904),
                y = a(952793),
                _ = a(293115),
                E = a(725405),
                b = a(125363),
                w = a(100326),
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
                        [s, r] = n.useState(!1),
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
                                    i.Z,
                                    { style: B.container },
                                    n.createElement(
                                        i.Z,
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
                                            s ? "Copied" : "Copy",
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
                U = a(397159),
                F = a(11579),
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
                te = u().gf43d270,
                ae = u().f4b5fae2,
                ne = "image.jpg",
                se = "image/jpeg",
                ie = c.default.create((e) => ({ container: { display: "flex", alignItems: "center", width: "100%", height: "calc(100vh - 53px)", maxHeight: "calc(100vh - 53px)", justifyContent: "space-between", position: "relative" }, content: { flex: 1, width: "100%", alignItems: "center", overflowY: "auto" }, upsellCallout: { marginTop: e.spaces.space24, marginHorizontal: e.spaces.space16 }, buttonContainer: { marginBottom: e.spaces.space32, marginHorizontal: e.spaces.space16 }, narrowContainer: { paddingTop: e.spaces.space24 }, bottomSpacer: { height: e.spaces.space48 }, buttonStyle: { alignSelf: "center" }, inputContainer: { width: "100%", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, alignItems: "center", justifyContent: "center" }, inputWrap: { width: "100%", maxWidth: V.vf }, inputWrapDisclamer: { width: "100%", alignItems: "center", paddingVertical: e.spaces.space8 } })),
                re = ee(({ grokShare: e, grokShareId: t }) => {
                    (0, Q.Z)();
                    const a = (0, b.I0)(),
                        s = (0, b.v9)(k.Qb),
                        r = (0, C.eX)();
                    n.useEffect(() => {
                        a(W.ZP.fetchOneIfNeeded(V.c0));
                    }, [a]),
                        n.useEffect(() => {
                            a((0, F.V)(t));
                        }, [a, t]);
                    const l = (0, o.LX)(),
                        c =
                            e?.items
                                .map((e) => e.file_attachments?.filter((e) => K.v5.includes(e.mime_type)).map((e) => e.url) ?? [])
                                .flat()
                                .filter(Boolean) ?? [],
                        d = c.length > 0 ? c[c.length - 1] : void 0,
                        u = (0, N.K)(e?.items[e.items.length - 1].message || "");
                    return n.createElement(
                        G.BQ,
                        { isCompactLayout: l, isEditingEnabled: !1, isGrokShare: !0, isPagedScroll: !1, isShowButtons: !1, isShowCarousel: !0, scrollable: window },
                        n.createElement(
                            i.Z,
                            { style: [ie.container, l ? ie.narrowContainer : void 0] },
                            n.createElement(
                                i.Z,
                                { style: ie.content },
                                2 === e?.items.length && n.createElement(D.ql, null, n.createElement("meta", { content: e.items[0].message, property: "og:title" }), n.createElement("meta", { content: u, property: "og:description" }), d ? n.createElement("meta", { content: d, property: "og:image" }) : null),
                                l ? null : n.createElement(z.Z, { size: "space32" }),
                                e?.items
                                    .map((e, t) => {
                                        if ((e.message || e.thinking_trace || (e.deepsearch_headers && e.deepsearch_headers.length > 0)) && e.sender) {
                                            const s = e.message,
                                                i = "User" === e.sender ? O.CI.HUMAN : O.CI.ASSISTANT,
                                                r = i === O.CI.ASSISTANT && !s;
                                            let o,
                                                l = "";
                                            e.thinking_trace && (l = e.thinking_trace), e.ui_layout?.reasoning_ui_layout && ("Split" === e.ui_layout.reasoning_ui_layout ? (o = "SPLIT") : "Unified" === e.ui_layout.reasoning_ui_layout && (o = "UNIFIED"));
                                            const c = (e.file_attachments ?? []).map((e) => ({ mediaId: e.media_id, fileName: e.file_name ?? ne, mimeType: e.mime_type ?? se, url: e.url, isPublic: !0 })),
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
                                            let u = [],
                                                m = [],
                                                p = [],
                                                g = [],
                                                h = {};
                                            e.deepsearch_args && (h = e.deepsearch_args);
                                            const f = new U.fQ({ deepsearchArgs: h });
                                            if (e.deepsearch_headers && e.deepsearch_headers.length > 0) {
                                                const t = [];
                                                for (const n of e.deepsearch_headers) {
                                                    const e = [];
                                                    for (const t of n.steps) {
                                                        const a = (t.x_post_ids || []).map((e) => e),
                                                            n = (t.web_results || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title })),
                                                            s = [];
                                                        if (t.tool_usage_card_results)
                                                            for (const e of t.tool_usage_card_results) {
                                                                const t = { toolUsageCardId: e.tool_usage_card_id, webResults: (e.web_results || []).map((e) => ({ url: e.url, favicon: e.favicon, favicon_base64: e.favicon_base64, language: e.language, snippet: e.snippet, title: e.title })), xPostIds: (e.x_post_ids || []).map((e) => e) };
                                                                s.push(t), n.push(...(e.web_results || [])), a.push(...(e.x_post_ids || []));
                                                            }
                                                        u.push(...a), (u = u.filter((e, t, a) => t === a.findIndex((t) => t === e))), p.push(...n), (p = p.filter((e, t, a) => t === a.findIndex((t) => t.url === e.url))), e.push({ header: t.header || "", assistant: t.assistant || "", decision: t.decision || "", finalMessage: t.final_message || "", functionCall: t.function_call || "", rawFunctionResult: t.raw_function_result || "", summary: t.summary || "", webResults: n, xPostIds: a, toolUsageCardResults: s });
                                                    }
                                                    t.push({ header: n.header || "", steps: e }), a(H.Z.fetchMultiple(u));
                                                }
                                                f.initiateFromHistoryResponses(t);
                                            } else e.post_ids_results && (u = e.post_ids_results?.map((e) => e.result?.rest_id).filter(Boolean)), e.media_post_ids_results && (m = e.media_post_ids_results?.map((e) => e.result?.rest_id).filter(Boolean)), e.web_results && (p = [...e.web_results]), e.cited_web_results && (g = [...e.cited_web_results]);
                                            return i === O.CI.ASSISTANT ? n.createElement(q.Z, { bannerMessages: [], cardAttachments: d, citedWebResults: g, conversationKey: "", fileAttachments: c, id: t.toString(), isLoading: r, isPastThinkingTrace: "" !== l, key: t.toString(), mediaTweetIds: m, messageStepAccumulator: f, reasoningLayout: o, sender: i, text: s, trace: l, tweetIds: u, webResults: p }) : n.createElement(j.Z, { conversationKey: "", fileAttachments: c, hasCustomization: e.has_customization, id: t.toString(), key: t.toString(), text: s });
                                        }
                                        return null;
                                    })
                                    .filter((e) => !!e),
                                n.createElement(z.Z, { size: "space48" }),
                            ),
                            s && n.createElement(i.Z, { style: ie.inputContainer }, n.createElement(i.Z, { style: ie.inputWrap }, n.createElement($.Z, { conversationKey: r, disableFileUploads: !0, grokShare: t, hasAccess: !0, isIdle: !0, placeholder: te, useNonExpanded: !0 }), n.createElement(i.Z, { style: ie.inputWrapDisclamer }, n.createElement(P.ZP, { color: "gray500", size: "subtext1" }, ae)))),
                        ),
                    );
                }),
                oe = { page: `grok-${p.ZP.isTwitterApp() ? (p.ZP.isAndroid() ? "android" : "ios") : "web"}` };
            function le() {
                const { grokShareId: e } = (0, r.useParams)();
                return e ? n.createElement(re, { grokShareId: e }) : null;
            }
            const ce = u().b198a392,
                de = u().d16329b4,
                ue = u().af6c4470;
            function me() {
                (0, S.n)(!0);
                const e = (0, r.useHistory)(),
                    { grokShareId: t } = (0, r.useParams)(),
                    a = (0, E.Z)(),
                    c = (0, b.I0)(),
                    d = (0, C.uf)(),
                    u = (0, s.Dv)(g.dd),
                    I = (0, o.LX)(),
                    v = (0, b.v9)(k.Qb),
                    x = (0, y.hC)("responsive_web_grok_debug_enabled"),
                    T = n.useCallback(() => {
                        t &&
                            (0, w.X)({ analytics: a, api: u, dispatch: c, grokModule: d, fromShareId: t })
                                .then((t) => {
                                    if (!t) throw new Error("Couldn't create a conversation");
                                    e.push(`/i/grok?conversation=${t}`);
                                })
                                .catch(() => {
                                    c((0, Z.fz)({ text: ue }));
                                });
                    }, [t, a, u, c, d, e]);
                return n.createElement(_.nO, { namespace: oe }, n.createElement(f.Z, null, p.ZP.isTwitterApp() ? n.createElement(le, null) : n.createElement(h.Z, { backLocation: "/home", documentTitle: ce, history: e, isFullWidth: !0, primaryContent: n.createElement(le, null), primaryContentLabel: ce, rightControl: v ? n.createElement(i.Z, { style: pe.buttons }, x && t && n.createElement(R, { grokShareId: t }), n.createElement(l.ZP, { backgroundColor: "transparent", icon: I ? n.createElement(m.default, null) : void 0, onPress: T, size: "small", type: "primaryOutlined" }, I ? "" : de)) : null, sidebarContent: null, title: ce })));
            }
            const pe = c.default.create((e) => ({ buttons: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 } }));
        },
        206089: (e, t, a) => {
            a.r(t), a.d(t, { default: () => ee, titleLabel: () => J });
            var n = a(202784),
                s = a(325686),
                i = a(107267),
                r = a(111677),
                o = a.n(r),
                l = a(323265),
                c = a(252021),
                d = a(652904),
                u = a(293115),
                m = a(609013),
                p = a(428880),
                g = a(222656),
                h = a(991985),
                f = a(400752),
                y = a(555874),
                _ = a(858440),
                E = a(691533),
                b = a(392237),
                w = a(738310),
                k = a(565058),
                Z = (a(585488), a(712696)),
                C = a.n(Z);
            const S = w.Z;
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
                U = a(125363),
                F = a(836255),
                O = a(979512);
            const H = o().a294d0c6;
            function W({ item: e }) {
                const { height: t } = (0, _.Z)(),
                    a = (0, N.z)(),
                    r = (0, i.useHistory)(),
                    o = e?.item.user_id_results?.result?.core,
                    l = e?.item.user_id_results?.result?.avatar?.image_url,
                    c = e?.item.original_post_id_results,
                    d = c.result?.legacy,
                    u = e?.prompt?.prompt,
                    m = c.rest_id,
                    [p, g] = n.useState(e?.stats.likes),
                    [h, f] = n.useState(d?.favorited || !1),
                    y = (d?.full_text || "").replace(/(?:https?:\/\/|www\.)[^\s]+$/i, "").trim();
                const E = (0, U.I0)(),
                    b = n.useCallback(() => {
                        const e = c.rest_id;
                        a.scribe({ section: "grok-feed-item", component: "like", action: "click", data: { tweet_id: e } }),
                            f(!h),
                            g((e) => e + (h ? -1 : 1)),
                            E(
                                h
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
                    }, [c, h, f, E, a]),
                    w = n.useCallback(() => {
                        const e = c.rest_id;
                        a.scribe({ section: "grok-feed-item", component: "retweet", action: "click", data: { tweet_id: e } }),
                            E(F.Z.fetchOne(e)).then((t) => {
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
                    s.Z,
                    { style: [C, j.imageContainer] },
                    n.createElement(T.Z, { "aria-label": u, onLoad: q, resizeMode: "cover", source: { uri: e.item.image_url }, style: [j.image, W ? j.imageLoaded : j.imageLoading, { height: t - v - 140 }] }),
                    n.createElement(
                        s.Z,
                        { style: j.footer },
                        n.createElement(
                            s.Z,
                            { style: j.imageFooterRow },
                            n.createElement(M.ZP, (0, x.Z)({ displayMode: "SubscribableUser", style: j.flex, withLink: !0 }, Z)),
                            n.createElement(
                                s.Z,
                                { style: [{ gap: 20 }, j.imageFooterRow] },
                                n.createElement(K.D, { id: `post_${m}`, onFullyVisible: k, position: "bottom", testID: `post_${m}` }),
                                n.createElement(P.Z, { count: 0, enableKeyboardShortcuts: !1, excludeRetweetAction: !1, excludeRetweetWithCommentAction: !1, iconSize: "large", isRetweeted: !1, onPress: w }),
                                n.createElement(L.Z, { count: p, iconSize: "large", isLiked: h, onPress: b, withCount: !0 }),
                                n.createElement(
                                    A.ZP,
                                    {
                                        icon: n.createElement(z.default, null),
                                        onClick: () => {
                                            a.scribe({ section: "grok-feed-item", component: "make-your-version", action: "click", data: { tweet_id: m } }), S({ text: u, autoSubmit: !0, source: "grok_image_feed" });
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
                j = b.default.create((e) => ({ imageContainer: { paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20, scrollSnapAlign: "start", scrollSnapStop: "always", marginBottom: e.spaces.space8 }, image: { borderRadius: e.borderRadii.medium, width: "100%", height: 700, maxHeight: 900 }, imageFooterRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, imageLoading: { opacity: 0 }, imageLoaded: { opacity: 1, animationDuration: "500ms", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, footer: { height: 100, overflow: "hidden" }, flex: { flex: 1 }, tweetTextContainer: { paddingStart: 64 } })),
                q = new (class {
                    constructor() {
                        (this.idx = (0, k.cn)(0)), (this.items = (0, k.cn)([])), (this.currentCursor = (0, k.cn)("")), (this.nextCursor = (0, k.cn)("")), (this.variables = (0, k.cn)({ cursor: void 0 })), (this.loadMore = (0, k.cn)(!0));
                    }
                })(),
                G = (e, t) => `${e.item.image_id}`;
            function V({ onDataUpdate: e }) {
                const { items: t, loadMore: a } = (function (e) {
                    const [t, a] = (0, f.KO)(e.items),
                        [, s] = (0, f.KO)(e.currentCursor),
                        [i, r] = (0, f.KO)(e.nextCursor),
                        [o, l] = (0, f.KO)(e.variables),
                        [c, d] = (0, f.KO)(e.loadMore),
                        { grok_feed: u } = C()(S, o);
                    return (
                        n.useEffect(() => {
                            c && (a((e) => [...e, ...u.items]), r(u.next_cursor), d(!1));
                        }, [u, a, c, d, r]),
                        {
                            items: t,
                            hasNextPage: !0,
                            loadMore: n.useCallback(() => {
                                s(i), l({ cursor: i }), d(!0);
                            }, [l, s, i, d]),
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
                    [i, r] = (0, f.KO)(q.idx),
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
                const u = n.useMemo(() => [X.scroller, { height: l }], [l]),
                    m = n.useCallback((e, t) => ({ length: l - v, offset: (l - v) * t, index: t }), [l]),
                    p = n.useCallback(
                        (e) => {
                            const t = l - v;
                            t && ((o.current = Math.floor(e.nativeEvent.contentOffset.y / t)), r(o.current));
                        },
                        [l, r],
                    );
                return n.createElement(s.Z, { style: u }, n.createElement(E.Z, null, n.createElement(n.Suspense, { fallback: null }, n.createElement(V, { onDataUpdate: a }))), n.createElement(y.Z, { data: e, getItemLayout: m, initialScrollIndex: i, keyExtractor: G, onEndReached: t, onEndReachedThreshold: 5, onScroll: p, ref: d, removeClippedSubviews: !0, renderItem: c, showsVerticalScrollIndicator: !1, style: u }));
            }
            const X = b.default.create((e) => ({ scroller: { scrollSnapType: "y mandatory", WebkitScrollSnapType: "y mandatory" } })),
                Y = { page: l.ZP.isTwitterApp() ? (l.ZP.isAndroid() ? "grok_groktok_android" : "grok_groktok_ios") : "grok_groktok" },
                J = o().d5e03fbc;
            function ee({ onDismiss: e }) {
                (0, h.n)(!0);
                const t = (0, i.useHistory)();
                (0, g.Z)();
                const a = n.useCallback(() => {
                        t.replace("/i/grok");
                    }, [t]),
                    [r] = (0, p.ZP)();
                return n.createElement(u.nO, { namespace: Y }, n.createElement(d.Z, null, r ? n.createElement(m.T, { documentTitle: J }) : null, n.createElement(c.Z, { documentTitle: J, history: t, isFullWidth: !0, onBackClick: a, primaryContent: n.createElement(s.Z, null, n.createElement(Q, null)), primaryContentLabel: J, rightControl: n.createElement(n.Fragment, null), sidebarContent: null, title: J, withAppBar: !1, withBorderLessLayout: !0, withSearchBox: !1 })));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-c69e90f3.69725a0a.js.map

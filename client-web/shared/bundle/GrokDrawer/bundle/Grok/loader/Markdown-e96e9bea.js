"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-e96e9bea"],
    {
        927974: (e, a, n) => {
            n.d(a, { Z: () => l });
            var o,
                r,
                d = {
                    fragment: {
                        argumentDefinitions: (o = [{ defaultValue: null, kind: "LocalArgument", name: "cursor" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "personalityHooksAllPersonalitiesQuery",
                        selections: (r = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "cursor", variableName: "cursor" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ],
                                concreteType: "GrokUserPersonalitiesResponse",
                                kind: "LinkedField",
                                name: "grok_user_personalities",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "GrokPersonalityWithId",
                                        kind: "LinkedField",
                                        name: "personalities",
                                        plural: !0,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "GrokPersonality",
                                                kind: "LinkedField",
                                                name: "personality",
                                                plural: !1,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "personality", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "initial_user_prompt", storageKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, kind: "ScalarField", name: "personality_id", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: o, kind: "Operation", name: "personalityHooksAllPersonalitiesQuery", selections: r },
                    params: { id: "a5moJWybwfm8-u5Tx05vIw", metadata: {}, name: "personalityHooksAllPersonalitiesQuery", operationKind: "query", text: null },
                };
            d.hash = "e71ee736ad72fd1f1dcd522244f21f22";
            const l = d;
        },
        246851: (e, a, n) => {
            n.d(a, { Z: () => r });
            var o = n(202784);
            function r(e) {
                const a = o.useRef();
                return (
                    o.useEffect(() => {
                        a.current = e;
                    }),
                    a.current
                );
            }
        },
        839090: (e, a, n) => {
            n.d(a, { Z: () => o });
            n(202784);
            const o = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("icons.0"),
                        n.e("icons.5"),
                        n.e("icons.12"),
                        n.e("icons.20"),
                        n.e("icons.2"),
                        n.e("icons.21"),
                        n.e("icons.28"),
                        n.e("icons.10"),
                        n.e("icons.17"),
                        n.e("icons.9"),
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("icons.22"),
                        n.e("icons.14"),
                        n.e("icons.25"),
                        n.e("icons.6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-5f6a80e1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-e64ba3d4"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        n.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        n.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        n.e("shared~bundle.JobSearch~bundle.UserJobs~loader.WideLayout"),
                        n.e("loader.WideLayout-6107ac1a"),
                        n.e("loader.WideLayout-9f4db315"),
                    ]).then(n.bind(n, 616753)),
            });
        },
        207137: (e, a, n) => {
            n.d(a, { BC: () => i, FI: () => s, Pm: () => l, gO: () => d, zk: () => r });
            const o = () => new Date(Date.now());
            function r(e, a = o()) {
                return a.getFullYear() === e.getFullYear() && a.getMonth() === e.getMonth() && a.getDate() === e.getDate();
            }
            function d(e, a = o()) {
                const n = new Date(a);
                return n.setHours(n.getHours() - 24), r(e, n);
            }
            function l(e, a = o()) {
                const n = new Date(a);
                return n.setHours(n.getHours() + 24), r(e, n);
            }
            const t = 6048e5;
            function s(e, a = o()) {
                const n = a - e;
                return n >= 0 && n <= t;
            }
            function i(e, a) {
                const n = new Date();
                return a < n || a < e ? 0 : Math.min(1, (n - e) / (a - e));
            }
        },
        270172: (e, a, n) => {
            n.d(a, { X: () => r });
            var o = n(692518);
            const r =
                (e) =>
                (a, n, { api: r }) => {
                    const d = (0, o.j)(e);
                    return r.fetchClient.dispatch(d, { method: "GET", credentials: "include" }).then((e) => e.blob());
                };
        },
        309373: (e, a, n) => {
            n.d(a, { X: () => s });
            var o = n(323265),
                r = n(389071),
                d = n(623494),
                l = n(958602),
                t = n(250781);
            const s =
                ({ analytics: e, conversationKey: a }) =>
                ({ analysisEntityId: n, editingMessageId: s, fileAttachments: i, mode: c, onStart: u, returnCitations: m, returnSearchResults: D = !0, features: p = { eagerTweets: !0, serverHistory: !0 }, text: h, trendPromptIdStr: y, imageGenerationCount: M, isReasoning: g, isDeepsearch: f, personalityId: k }) =>
                async (c, y, { api: b, featureSwitches: w }) => {
                    const I = !o.ZP.isTwitterApp() && w.isTrue("responsive_web_grok_api_enable_grok_host"),
                        v = (0, r.bD)(a),
                        P = v.selectConversationId(y()),
                        A = o.ZP.isAndroid(),
                        _ = o.ZP.isIOS();
                    if (!P) return void (0, d.Uk)(e, "edit function failed to find a conversationId");
                    const E = v.selectMode(y()),
                        U = v.selectMessageIds(y()),
                        C = v.selectConversationWithLocalMessages(y()),
                        L = (0, r.F9)(y()),
                        S = U.indexOf(s);
                    if (-1 === S) return void (0, d.Uk)(e, "edit function couldn't find an actionable response");
                    const T = C[S];
                    let Z = { promptSource: "NATURAL", action: "EDIT" };
                    "IMAGE_EDIT" === T?.promptMetadata?.promptSource ? (Z = { ...T.promptMetadata, action: "EDIT" }) : "FOLLOW_UP" === T?.promptMetadata?.promptSource && "IMAGE_GEN" === T?.promptMetadata?.properties?.messageType && (Z = { promptSource: "FOLLOW_UP", action: "INPUT", properties: { followUpType: "MODIFY", messageType: "IMAGE_GEN" } });
                    const R = [...C.slice(0, S).map((e) => ({ message: e.message, fileAttachments: e.fileAttachments, sender: e.sender, isDeepsearch: e.isDeepsearch, isReasoning: e.isReasoning })), { sender: T.sender, fileAttachments: i, message: h, isDeepsearch: f, isReasoning: g }],
                        F = (0, r.en)(y());
                    let O = {};
                    F && F.toolOverrides && (O = F.toolOverrides);
                    const G = { responses: R, systemPromptName: E, conversationId: P, grokModelOptionId: L, resampleResponseId: T.userChatItemId, returnSearchResults: D, returnCitations: m, requestFeatures: p, ...(n && 1 === R.length ? { analysisEntityId: n } : void 0), promptMetadata: Z, imageGenerationCount: M, enableSideBySide: !A && !_, isDeepsearch: f, isReasoning: g, personalityId: k, toolOverrides: O, deepsearchArgs: f ? F?.deepsearchArgs : void 0 };
                    null != v.selectCurrentResponseMessage(y()) && (await c((0, l.I)({ analytics: e, conversationKey: a }))), h && c(v.commitEditChanges(s, h, i)), (0, d.dd)(e, { conversationLength: R.length, isDeepsearch: G.isDeepsearch || void 0, isReasoning: G.isReasoning || void 0 }), u?.();
                    const K = w.isTrue("responsive_web_grok_enable_add_response_keepalive") && (f || g),
                        N = w.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                    (0, t.D)({ grokModule: v, requestBody: G, analytics: e, dispatch: c, api: b, eventTag: "rewrite", flags: { enableGrokApiHost: I, enableKeepalive: K, numRetries: N } });
                };
        },
        774038: (e, a, n) => {
            n.d(a, { N6: () => x, eQ: () => j, rO: () => H });
            n(543673), n(240753), n(128399), n(136728);
            var o = n(202784),
                r = n(107267),
                d = n(108362),
                l = n(154003),
                t = n(731708),
                s = n(370006),
                i = n(392237),
                c = n(111677),
                u = n.n(c),
                m = n(72591),
                D = n(427783),
                p = n(186444),
                h = n(254944),
                y = n(276259),
                M = n(323265),
                g = n(952793),
                f = n(128225),
                k = n(725405),
                b = n(125363),
                w = n(270172),
                I = n(327597),
                v = n(601576),
                P = n(791786),
                A = n(928831),
                _ = n(988290),
                E = n(737368),
                U = n(305442);
            const C = M.ZP.isTwitterApp(),
                L = M.ZP.isTwitterApp() ? (M.ZP.isAndroid() ? "grok_android" : "grok_ios") : "grok",
                S = u().j826e722,
                T = u().a9325f10,
                Z = u().f88553c8,
                R = u().g0b12442,
                F = u().edd0c172,
                O = u().abd845fe,
                G = u().d1d3a41a,
                K = u().a2697040,
                N = ["ton.x.com", "ton.twitter.com", "pbs.twimg.com"];
            function x(e) {
                const a = o.useMemo(() => e || { fileName: "", mimeType: "" }, [e]),
                    n = (0, b.I0)(),
                    [r, d] = o.useState(),
                    l = o.useMemo(() => !!a?.url && N.includes(new URL(a.url).hostname), [a]),
                    t = o.useMemo(() => ((a.url && l) || a.isPublic ? a.url : r ? URL.createObjectURL(r) : void 0), [r, l, a.isPublic, a.url]);
                return (
                    o.useEffect(() => {
                        if (!a.url || a.isPublic || !y.v5.includes(a.mimeType) || l) return;
                        const e = a.url;
                        n((0, w.X)(e))
                            .then((e) => {
                                d(e ?? void 0);
                            })
                            .catch();
                    }, [a.url, a.isPublic, l, a.mimeType, n]),
                    t
                );
            }
            function H({ allMediaIds: e, allMediaUrls: a, buttonSize: n = "xLarge", buttonType: s = "alwaysBlack", contentUrl: i, isLoading: c, mediaId: u, mediaUrl: M, setEditMode: w, withStartAlignment: I }) {
                const P = (0, b.I0)(),
                    A = (0, k.Z)(),
                    E = (0, r.useHistory)(),
                    { isGrokDrawer: U } = (0, _.ZP)(),
                    K = (0, g.hC)("responsive_web_grok_image_edit");
                return o.createElement(
                    d.Z,
                    { onClick: (e) => e.stopPropagation(), style: I ? W.containerCorner : W.container, withGutter: !0 },
                    !C &&
                        o.createElement(
                            o.Fragment,
                            null,
                            o.createElement(l.ZP, {
                                disabled: c,
                                hoverLabel: { label: S },
                                icon: o.createElement(m.default, { style: W.white }),
                                key: "saveImage",
                                onClick: (n) => {
                                    (async () => {
                                        if ((A.scribe({ page: L, element: "save_image_button", action: "click", data: { event_info: JSON.stringify({ mediaId: u, mediaUrl: M, allMediaIds: e, allMediaUrls: a }) } }), i)) {
                                            const e = await (0, f.f)(i, !0, !0),
                                                a = URL.createObjectURL(e);
                                            (0, y.uv)(a, "image.jpg");
                                        }
                                    })();
                                },
                                size: n,
                                style: W.button,
                                type: s,
                            }),
                            o.createElement(l.ZP, {
                                disabled: c,
                                hoverLabel: { label: T },
                                icon: o.createElement(D.default, { style: W.white }),
                                key: "copyImage",
                                onClick: (n) => {
                                    (async () => {
                                        if ((A.scribe({ page: L, element: "copy_image_button", action: "click", data: { event_info: JSON.stringify({ mediaId: u, mediaUrl: M, allMediaIds: e, allMediaUrls: a }) } }), i)) {
                                            const e = await (0, f.f)(i, !0, !0),
                                                a = URL.createObjectURL(e);
                                            (0, y.VJ)(a)
                                                .then(() => {
                                                    P((0, v.fz)({ text: Z }));
                                                })
                                                .catch((e) => {
                                                    P((0, v.fz)({ text: R }));
                                                });
                                        }
                                    })();
                                },
                                size: n,
                                style: W.button,
                                type: s,
                            }),
                            o.createElement(l.ZP, {
                                disabled: c,
                                hoverLabel: { label: F },
                                icon: o.createElement(p.default, { style: W.white }),
                                key: "postImage",
                                onClick: (n) => {
                                    (async () => {
                                        if ((A.scribe({ page: L, element: "post_image_button", action: "click", data: { event_info: JSON.stringify({ mediaId: u, mediaUrl: M, allMediaIds: e, allMediaUrls: a }) } }), !i)) return;
                                        const n = await (0, f.f)(i, !0, !0),
                                            o = URL.createObjectURL(n);
                                        E.push({ pathname: "/compose/post", state: { externalMedia: [o], positionCursorAtBeginning: !0 } });
                                    })();
                                },
                                size: n,
                                style: W.button,
                                type: s,
                            }),
                        ),
                    K
                        ? o.createElement(
                              l.ZP,
                              {
                                  disabled: c,
                                  hoverLabel: { label: G },
                                  icon: o.createElement(h.default, { style: W.white }),
                                  key: "editImage",
                                  onClick: (n) => {
                                      (async () => {
                                          A.scribe({ page: L, element: "edit_image_button", action: "click", data: { event_info: JSON.stringify({ mediaId: u, mediaUrl: M, allMediaIds: e, allMediaUrls: a }) } }), w && w(!0);
                                      })();
                                  },
                                  size: n,
                                  style: W.button,
                                  type: s,
                              },
                              !U && o.createElement(t.ZP, { style: W.white }, O),
                          )
                        : null,
                );
            }
            function j({ contentUrl: e, conversationKey: a, grokFile: n, onSend: r, setEditMode: l }) {
                const t = (0, E.k)(),
                    i = (0, b.I0)(),
                    c = (0, k.Z)(),
                    { isImageEditEnabled: u, selectImageEditFilterKey: m } = (0, A.w)(),
                    D = (0, U.Z)("image_edit"),
                    p = o.useRef(!1),
                    h = o.useCallback(
                        (o) => {
                            p.current ||
                                ((p.current = !0),
                                (async () => {
                                    const d = [];
                                    if (n && n.mediaId) d.push(n);
                                    else {
                                        const a = await (0, f.f)(e, !0, !0),
                                            n = new AbortController(),
                                            o = await t(((l = a), (s = "edit_grok.jpeg"), new File([l], s, { type: l.type })), n);
                                        d.push(o);
                                    }
                                    var l, s;
                                    const p = { ...o, attachments: d, imageGenerationCount: D, promptMetadata: { promptSource: "IMAGE_EDIT", action: "INPUT", properties: { imageUrl: n?.url || e } } };
                                    u || m(), i((0, I.u)({ analytics: c, conversationKey: a })(p)), r();
                                })());
                        },
                        [D, i, c, t, e, a, r, n, u, m],
                    );
                return o.createElement(d.Z, { onClick: (e) => e.stopPropagation(), style: W.container, withGutter: !0 }, !C && o.createElement(s.Z, { backButtonType: "close", onClick: () => l(!1) }), o.createElement(P.Z, { conversationKey: a, disableFileUploads: !0, hasAccess: !0, isIdle: !0, mode: "", placeholder: K, promptSender: h, useMagicWandIcon: !0, useNonExpanded: !0 }));
            }
            const W = i.default.create((e) => ({ button: { backdropFilter: "blur(8px)" }, container: { padding: e.spaces.space12, flexDirection: "row", gap: e.spaces.space20, justifyContent: "center" }, containerCorner: { padding: e.spaces.space4, flexDirection: "row", gap: e.spaces.space8, justifyContent: "center" }, center: { justifyContent: "center", alignItems: "center" }, flex: { flex: 1 }, white: { color: "white" } }));
        },
        858440: (e, a, n) => {
            n.d(a, { Z: () => d });
            var o = n(878052),
                r = n(202784);
            function d() {
                var e = (0, r.useState)(() => o.Z.get("window")),
                    a = e[0],
                    n = e[1];
                return (
                    (0, r.useEffect)(() => {
                        function e(e) {
                            var a = e.window;
                            null != a && n(a);
                        }
                        return (
                            o.Z.addEventListener("change", e),
                            n(o.Z.get("window")),
                            () => {
                                o.Z.removeEventListener("change", e);
                            }
                        );
                    }, []),
                    a
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-e96e9bea.8c3898fa.js.map

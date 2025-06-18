"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-63cb1cc4"],
    {
        270172: (e, t, a) => {
            a.d(t, { X: () => i });
            var n = a(692518);
            const i =
                (e) =>
                (t, a, { api: i }) => {
                    const o = (0, n.j)(e);
                    return i.fetchClient.dispatch(o, { method: "GET", credentials: "include" }).then((e) => e.blob());
                };
        },
        309373: (e, t, a) => {
            a.d(t, { X: () => l });
            var n = a(323265),
                i = a(389071),
                o = a(623494),
                r = a(958602),
                s = a(250781);
            const l =
                ({ analytics: e, conversationKey: t }) =>
                ({ analysisEntityId: a, editingMessageId: l, fileAttachments: c, mode: d, onStart: m, returnCitations: u, returnSearchResults: p = !0, features: g = { eagerTweets: !0, serverHistory: !0 }, text: h, trendPromptIdStr: y, imageGenerationCount: b, isReasoning: f, isDeepsearch: v, personalityId: w }) =>
                async (d, y, { api: I, featureSwitches: E }) => {
                    const C = !n.ZP.isTwitterApp() && E.isTrue("responsive_web_grok_api_enable_grok_host"),
                        k = (0, i.bD)(t),
                        M = k.selectConversationId(y()),
                        P = n.ZP.isAndroid(),
                        R = n.ZP.isIOS();
                    if (!M) return void (0, o.Uk)(e, "edit function failed to find a conversationId");
                    const Z = k.selectMode(y()),
                        _ = k.selectMessageIds(y()),
                        x = k.selectConversationWithLocalMessages(y()),
                        A = (0, i.F9)(y()),
                        U = _.indexOf(l);
                    if (-1 === U) return void (0, o.Uk)(e, "edit function couldn't find an actionable response");
                    const L = x[U];
                    let S = { promptSource: "NATURAL", action: "EDIT" };
                    "IMAGE_EDIT" === L?.promptMetadata?.promptSource ? (S = { ...L.promptMetadata, action: "EDIT" }) : "FOLLOW_UP" === L?.promptMetadata?.promptSource && "IMAGE_GEN" === L?.promptMetadata?.properties?.messageType && (S = { promptSource: "FOLLOW_UP", action: "INPUT", properties: { followUpType: "MODIFY", messageType: "IMAGE_GEN" } });
                    const T = [...x.slice(0, U).map((e) => ({ message: e.message, fileAttachments: e.fileAttachments, sender: e.sender, isDeepsearch: e.isDeepsearch, isReasoning: e.isReasoning })), { sender: L.sender, fileAttachments: c, message: h, isDeepsearch: v, isReasoning: f }],
                        z = (0, i.en)(y());
                    let D = {};
                    z && z.toolOverrides && (D = z.toolOverrides);
                    const F = { responses: T, systemPromptName: Z, conversationId: M, grokModelOptionId: A, resampleResponseId: L.userChatItemId, returnSearchResults: p, returnCitations: u, requestFeatures: g, ...(a && 1 === T.length ? { analysisEntityId: a } : void 0), promptMetadata: S, imageGenerationCount: b, enableSideBySide: !P && !R, isDeepsearch: v, isReasoning: f, personalityId: w, toolOverrides: D, deepsearchArgs: v ? z?.deepsearchArgs : void 0 };
                    null != k.selectCurrentResponseMessage(y()) && (await d((0, r.I)({ analytics: e, conversationKey: t }))), h && d(k.commitEditChanges(l, h, c)), (0, o.dd)(e, { conversationLength: T.length, isDeepsearch: F.isDeepsearch || void 0, isReasoning: F.isReasoning || void 0 }), m?.();
                    const O = E.isTrue("responsive_web_grok_enable_add_response_keepalive") && (v || f),
                        j = E.getNumberValue("responsive_web_grok_add_response_num_retries", 0);
                    (0, s.D)({ grokModule: k, requestBody: F, analytics: e, dispatch: d, api: I, eventTag: "rewrite", flags: { enableGrokApiHost: C, enableKeepalive: O, numRetries: j } });
                };
        },
        480243: (e, t, a) => {
            a.d(t, { W: () => g });
            var n = a(927974),
                i = a(202784),
                o = a(565058),
                r = a(400752),
                s = a(10622),
                l = a.n(s),
                c = (a(585488), a(437429)),
                d = a.n(c);
            const m = n.Z,
                u = (0, o.cn)(void 0),
                p = (0, o.cn)([]);
            function g() {
                const e = d()(),
                    [t, a] = (0, r.KO)(p),
                    [n, o] = (0, r.KO)(u);
                i.useEffect(() => {
                    l()(e, m, {}, { networkCacheConfig: { force: !1 } })
                        .toPromise()
                        .then((e) => {
                            e?.grok_user_personalities?.personalities && a([...e.grok_user_personalities.personalities]);
                        })
                        .catch((e) => {});
                }, [e, o, a]);
                const s = i.useCallback(
                    (e) => {
                        o(e);
                    },
                    [o],
                );
                return { userPersonalities: t, setGrokPersonality: s, getPersonality: (e) => t.find((t) => t.personality_id === e), currentPersonalityId: n };
            }
        },
        246277: (e, t, a) => {
            a.d(t, { $: () => T, Z: () => z });
            var n = a(807896),
                i = a(202784),
                o = a(215045),
                r = a(325686),
                s = a(466792),
                l = a(67369),
                c = a(992942),
                d = a(392237),
                m = a(731708),
                u = a(154003),
                p = a(721266),
                g = a(111677),
                h = a.n(g),
                y = a(47086),
                b = a(161335),
                f = a(149170),
                v = a(837020),
                w = a(189700),
                I = a(839090),
                E = a(928831),
                C = a(45843),
                k = a(457566),
                M = a(774038);
            const P = ({ status: e, expectedChunks: t = [0.25, 0.5, 0.75, 1], intermediateResults: a = [], url: n, aspectRatio: o, isModerated: s, withActionRow: l, openMediaToEdit: d, onImageSize: m, mediaId: u, mediaUrl: p, allMediaIds: g, allMediaUrls: h }) => {
                    const [y, b] = i.useState(0),
                        f = Z({ expectedChunks: t, progress: y }),
                        v = i.useMemo(
                            () =>
                                [...a]
                                    .sort((e, t) => e.progress - t.progress)
                                    .map((e, t) => {
                                        const a = o ?? 4 / 3,
                                            n = Math.round((a / e.progress) * 100) / 100;
                                        return y > e.progress
                                            ? null
                                            : i.createElement(c.Z, {
                                                  key: `progress_${e.progress}`,
                                                  onLoad: () => {
                                                      b((t) => Math.max(t, e.progress));
                                                  },
                                                  resizeMode: "cover",
                                                  source: e.imageUrl,
                                                  style: [R.image, { aspectRatio: n }],
                                              });
                                    }),
                            [a, y, o],
                        ),
                        w = a.length > 0 && y > 0,
                        I = i.useMemo(() => ({ top: 0, height: 100 * y + "%", overflow: "hidden", transitionProperty: "height, mask", transitionDuration: `${f}ms`, transitionTimingFunction: 1 === y ? "ease-in" : "linear", zIndex: 50, mask: y < 1 ? "linear-gradient(\n        to bottom,\n        rgba(0, 0, 0, 1) 0%,\n        rgba(0, 0, 0, 1) calc(100% - 5px),\n        rgba(0, 0, 0, 0) 100%\n      )" : void 0 }), [y, f]),
                        E = i.useMemo(() => ({ top: 0, height: 100 * y + "%", overflow: "hidden", transform: "translate3d(0,0,0)", transitionProperty: "height", transitionDuration: f / 1.5 + "ms", transitionTimingFunction: "linear", filter: "blur(70px) contrast(2)", zIndex: 10 }), [y, f]),
                        [P, _] = i.useState(0);
                    return (
                        i.useEffect(() => {
                            n &&
                                C.Z.getSize(
                                    n,
                                    (e, t) => {
                                        e && t && (_(e / t), m?.(e, t));
                                    },
                                    (e) => {},
                                );
                        }, [n, _]),
                        i.createElement(r.Z, { style: R.container }, "loading" === e ? i.createElement(r.Z, { style: R.logoContainer }, i.createElement(k.x1, { style: R.grokIcon })) : null, "loading" === e || "aborted" === e || w ? i.createElement(i.Fragment, null, i.createElement(r.Z, { style: [R.content, I] }, i.createElement(r.Z, { style: s || "aborted" === e ? R.contentModerated : void 0 }, v)), i.createElement(r.Z, { style: [R.content, E] }, v)) : null, i.createElement(c.Z, { resizeMode: "cover", source: w || s ? void 0 : n, style: [R.finalImage, { aspectRatio: o ?? (P || 4 / 3) }] }), l && "aborted" !== e ? i.createElement(r.Z, { style: [R.actionRow, R.animation] }, i.createElement(M.rO, { allMediaIds: g, allMediaUrls: h, buttonSize: "medium", buttonType: "onMediaText", contentUrl: n, isLoading: "ready" !== e, mediaId: u, mediaUrl: p, setEditMode: d || (() => {}), withStartAlignment: !0 })) : null)
                    );
                },
                R = d.default.create((e) => ({ animation: { opacity: 1, animationDuration: ".3s", animationTimingFunction: "ease-out", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, actionRow: { position: "absolute", bottom: 0, width: "100%", backdropFilter: "blur(4px) brightness(70%)", zIndex: 300 }, content: { position: "absolute", height: "100%", width: "100%", start: 0, opacity: 1 }, contentModerated: { transitionProperty: "opacity", transitionDuration: "500ms", transitionTimingFunction: "linear", opacity: 0 }, image: { position: "absolute", start: 0, top: 0, width: "100%", zIndex: 100 }, transparent: { opacity: 0 }, finalImage: { position: "relative", zIndex: 200, width: "100%" }, container: { borderRadius: e.borderRadii.large, backgroundColor: e.colors.gray50, transform: "translate3d(0,0,0)", width: "100%", overflow: "hidden", position: "relative" }, logoContainer: { position: "absolute", start: 0, top: 0, width: "100%", height: "100%", justifyContent: "center", alignItems: "center", opacity: 0, animationIterationCount: "infinite", animationDuration: "1.5s", animationKeyframes: [{ "0%": { opacity: "0" }, "50%": { opacity: "1" }, "100%": { opacity: "0" } }] }, grokIcon: { color: e.colors.gray200, width: "20%", maxWidth: e.spaces.space64, height: "20%", maxHeight: e.spaces.space64 } })),
                Z = ({ expectedChunks: e, progress: t }) => {
                    const a = i.useRef(Date.now());
                    return i.useMemo(() => {
                        const n = Date.now() - a.current,
                            i = 0 === t ? 1e4 : n / t,
                            o = e.findIndex((e) => e >= t),
                            r = e[o + 1];
                        if (-1 === o) return 0;
                        if (!r) return 200;
                        return i * (r - t) * 1.2;
                    }, [t, e]);
                },
                _ = h().e68b09b4,
                x = h().c26b9b9c,
                A = { label: _ },
                U = h().ac85c6b2,
                L = h().g10600b0,
                S = { label: L },
                T = ["image/jpeg", "image/webp", "image/png"];
            function z({ allMediaIds: e, allMediaUrls: t, aspectRatio: a, centerJustify: g, disableClickWhileLoading: h = !0, filename: C, height: k, intermediateResults: M, isInputAttachmentPreview: R, isModerated: Z, mediaId: z, mediaUrl: F, menuItems: O, mimetype: j, onClick: N, onImageSize: B, onRemove: G, openMediaToEdit: K, preloadedImageUrl: W, status: J, style: H, url: V, useActionRowButtons: $, width: X }) {
                const { handlers: q, interactivityState: Q } = (0, s.x)({}),
                    Y = (0, l.yu)(),
                    [ee, te] = i.useState(!1),
                    ae = O && O.length > 0,
                    [ne, ie] = i.useState(!1),
                    oe = Y ? 60 : 80,
                    re = { width: 1.5 * oe, height: oe },
                    se = i.useCallback((e) => {
                        e.stopPropagation(), te(!0);
                    }, []),
                    le = i.useCallback(() => te(!1), []),
                    ce = !X || !k || (X > 200 && k > 150),
                    de = i.useMemo(() => ({ width: X ?? "auto", height: k ?? "auto", outline: "none" }), [X, k]),
                    me = i.useCallback(
                        (e) => {
                            e.stopPropagation(), e.preventDefault(), G?.();
                        },
                        [G],
                    ),
                    { isInputFocused: ue } = (0, E.w)();
                if (T.includes(j)) {
                    const s = "ready" === J && ae && Q.isHovered && !$;
                    return i.createElement(
                        o.Z,
                        (0, n.Z)({ disabled: (h && !V) || "aborted" === J }, q, {
                            onLongPress: Y ? se : void 0,
                            onMouseEnter: () => {
                                ie(!0);
                            },
                            onMouseLeave: () => {
                                ie(!1);
                            },
                            onPress: N,
                            style: [g && { justifyContent: "center" }, de, Z ? D.noClick : void 0, H],
                        }),
                        R ? (!V || V.startsWith("blob:") ? i.createElement(r.Z, { style: [D.inputAttachmentPreview, D.inputAttachmentPreviewPlaceholder, { width: X ?? oe, height: k ?? oe }] }) : i.createElement(c.Z, { resizeMode: "cover", source: W || V, style: [D.inputAttachmentPreview, { width: X ?? oe, height: k ?? oe }] })) : i.createElement(P, { allMediaIds: e, allMediaUrls: t, aspectRatio: a, intermediateResults: M, isModerated: Z, mediaId: z, mediaUrl: F, onImageSize: B, openMediaToEdit: K, resizeMode: "cover", status: J, url: W || V, withActionRow: $ && Q.isHovered }),
                        "error" === J ? i.createElement(r.Z, { style: D.errorContainer }, i.createElement(y.default, { color: d.default.theme.colors.gray600, style: D.errorIcon }), ce ? i.createElement(m.ZP, { size: "body", style: D.errorMessage }, U) : null) : Z || "aborted" === J ? i.createElement(r.Z, { style: D.errorContainer }, i.createElement(b.default, { color: d.default.theme.colors.text, style: D.errorIconLarge })) : null,
                        i.createElement(r.Z, { style: D.imageButtonContainer }, s ? i.createElement(u.ZP, { "aria-label": L, hoverLabel: S, icon: i.createElement(f.default, null), onClick: se, size: "xSmall", type: "onMediaDominantColorFilled" }) : null, ae && ee ? i.createElement(I.Z, { onDismiss: le }, i.createElement(o.Z, { onPress: le }, O)) : null, G && (Y || (!Y && ne)) ? i.createElement(u.ZP, { "aria-label": _, hoverLabel: A, icon: i.createElement(v.default, null), onClick: me, size: "xSmall", style: D.removeBtn, type: "onMediaDominantColorFilled" }) : null),
                    );
                }
                if (R) {
                    const e = (function (e) {
                        if (!e || "string" != typeof e) return "";
                        const t = e.lastIndexOf(".");
                        if (-1 === t || 0 === t) return "";
                        return e.slice(t + 1).toLowerCase();
                    })(C);
                    return i.createElement(
                        r.Z,
                        {
                            onMouseEnter: () => {
                                ie(!0);
                            },
                            onMouseLeave: () => {
                                ie(!1);
                            },
                            style: [D.inputAttachmentPreviewFileContainer, { width: X ?? re.width, height: k ?? re.height }, H],
                        },
                        i.createElement(r.Z, { style: D.inputAttachmentPreviewFileContainerContent }, i.createElement(m.ZP, { hoverLabel: { label: C }, numberOfLines: 2, selectable: !1, size: "subtext2" }, C), i.createElement(r.Z, { style: D.inputAttachmentPreviewBottomContainer }, i.createElement(r.Z, { style: D.inputAttachmentPreviewFileIconContainer }, i.createElement(w.default, { style: D.inputAttachmentPreviewFileIcon })), i.createElement(m.ZP, { numberOfLines: 1, size: "subtext3" }, e.toUpperCase()))),
                        G && (Y || (!Y && ne)) ? i.createElement(i.Fragment, null, i.createElement(u.ZP, { "aria-label": _, hoverLabel: A, icon: i.createElement(v.default, null), onClick: me, size: "xSmall", style: [D.removeBtn, D.inputAttachmentPreviewRemoveBtn], type: "onMediaDominantColorFilled" })) : null,
                    );
                }
                return i.createElement(r.Z, { style: [D.documentContainer, ue ? D.documentContainerActive : null, H] }, i.createElement(r.Z, { style: D.iconContainer }, i.createElement(w.default, { style: D.documentIcon })), i.createElement(r.Z, { style: D.documentNameContainer }, i.createElement(m.ZP, { hoverLabel: { label: C }, numberOfLines: 1, selectable: !1, size: "subtext2", weight: "medium" }, C), i.createElement(p.Z, { size: "space4" }), i.createElement(m.ZP, { color: "gray700", selectable: !1, size: "subtext3", weight: "normal" }, x)), G && (Y || (!Y && ne)) ? i.createElement(i.Fragment, null, i.createElement(p.Z, { size: "space4" }), i.createElement(u.ZP, { "aria-label": _, hoverLabel: A, icon: i.createElement(v.default, null), onClick: me, size: "xSmall", style: D.removeBtn, type: "primaryText" })) : null);
            }
            const D = d.default.create((e) => ({
                documentContainer: { flexDirection: "row", alignItems: "center", width: "100%", maxWidth: "100%", paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space12, gap: e.spaces.space8, backgroundColor: "light" === e.paletteName ? e.colors.gray50 : e.colors.gray100, borderRadius: e.spaces.space12, flexGrow: 1, flexShrink: 0 },
                documentContainerActive: { backgroundColor: "light" === e.paletteName ? e.colors.gray100 : e.colors.gray200 },
                noClick: { pointerEvents: "none" },
                iconContainer: { padding: 6, justifyContent: "center", alignItems: "center", backgroundColor: "light" === e.paletteName ? e.colors.gray100 : e.colors.gray700, borderRadius: e.spaces.space8 },
                documentIcon: { width: 16, height: 16 },
                imageActivityIndicator: { position: "absolute", start: 0, top: 0, width: "100%", height: "100%", alignItems: "center", justifyContent: "center" },
                imageButtonContainer: { position: "absolute", top: e.spaces.space2, gap: e.spaces.space4, end: e.spaces.space2, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start" },
                documentNameContainer: { minWidth: 0, flex: 1 },
                errorContainer: { position: "absolute", start: 0, top: 0, width: "100%", height: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: e.spaces.space8, padding: e.spaces.space8 },
                errorIcon: { width: 24, height: 24 },
                errorIconLarge: { width: "15%", height: "15%", minHeight: 24, minWidth: 24 },
                errorMessage: { color: e.colors.gray600 },
                removeBtn: { animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both", position: "absolute", top: 0, end: 0 },
                inputAttachmentPreviewRemoveBtn: { top: e.spaces.space4, end: e.spaces.space4 },
                inputAttachmentPreviewPlaceholder: { backgroundColor: "light" === e.paletteName ? e.colors.gray100 : e.colors.gray200 },
                inputAttachmentPreview: { borderRadius: e.spaces.space8 },
                inputAttachmentPreviewFileContainer: { position: "relative", borderRadius: e.spaces.space8, padding: e.spaces.space8, backgroundColor: "light" === e.paletteName ? e.colors.gray100 : e.colors.gray300 },
                inputAttachmentPreviewFileContainerContent: { display: "flex", flexDirection: "column", justifyContent: "space-between", gap: e.spaces.space4, height: "100%" },
                inputAttachmentPreviewBottomContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, padding: e.spaces.space4, borderRadius: e.spaces.space8, borderWidth: 1, borderStyle: "solid", borderColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray400, width: "max-content", overflow: "hidden" },
                inputAttachmentPreviewFileIconContainer: { width: e.spaces.space12, height: e.spaces.space12 },
                inputAttachmentPreviewFileIcon: { width: "100%", height: "100%" },
            }));
        },
        335785: (e, t, a) => {
            a.d(t, { L: () => d });
            a(543673), a(240753), a(128399);
            var n = a(202784),
                i = a(325686),
                o = a(167630),
                r = a(392237),
                s = a(246277),
                l = a(523253),
                c = a(86657);
            function d({ height: e, isInputAttachmentPreview: t, onRemove: a, selectedFile: r, width: d }) {
                const u = n.useRef(void 0);
                if (
                    (n.useEffect(() => {
                        if (r?.local) {
                            const e = r.local,
                                t = URL.createObjectURL(e);
                            u.current !== t && (u.current = t);
                        }
                    }, [r]),
                    !r)
                )
                    return;
                return s.$.includes(r?.local?.type) || s.$.includes(r?.remote?.mimeType) ? n.createElement(i.Z, null, r.remote && n.createElement(i.Z, { style: m.default }, n.createElement(c.Z, { file: r.remote, height: e, isImageActionsEnabled: !1, isInputAttachmentPreview: !0, isLoading: !1, onRemove: a, preloadedImageUrl: u.current, width: d })), r.local && n.createElement(i.Z, { style: [m.default, r.remote ? m.hidden : void 0] }, n.createElement(l.Z, { file: r.local, height: e, isInputAttachmentPreview: !0, onRemove: a, width: d }), n.createElement(o.Z, { style: { top: "50%", start: "50%", position: "absolute", transform: "translate(-50%, -50%)" } }))) : n.createElement(i.Z, null, r.remote ? n.createElement(c.Z, { file: r.remote, height: e, isImageActionsEnabled: !1, isInputAttachmentPreview: !0, isLoading: !1, onRemove: a, preloadedImageUrl: u.current, width: d }) : r.local ? n.createElement(n.Fragment, null, n.createElement(l.Z, { file: r.local, height: e, isInputAttachmentPreview: !0, onRemove: a, width: d }), n.createElement(o.Z, { style: [{ top: "50%", start: "50%", position: "absolute", transform: "translate(-50%, -50%)" }, r.remote ? m.hidden : void 0] })) : null);
            }
            const m = r.default.create((e) => ({ default: { opacity: 1, zIndex: 1 }, hidden: { position: "absolute", zIndex: -1 } }));
        },
        523253: (e, t, a) => {
            a.d(t, { Z: () => o });
            a(543673), a(240753), a(128399);
            var n = a(202784),
                i = a(246277);
            function o({ file: e, height: t, isInputAttachmentPreview: a, onImageSize: o, onRemove: r, style: s, width: l }) {
                const c = n.useMemo(() => URL.createObjectURL(e), [e]);
                return n.createElement(i.Z, { filename: e.name, height: t, isInputAttachmentPreview: a, mimetype: e.type, onImageSize: o, onRemove: r, status: "ready", style: s, url: c, width: l });
            }
        },
        86657: (e, t, a) => {
            a.d(t, { Z: () => _ });
            a(543673), a(240753), a(128399), a(136728);
            var n = a(202784),
                i = a(107267),
                o = a(143670),
                r = a(111677),
                s = a.n(r),
                l = a(254944),
                c = a(72591),
                d = a(427783),
                m = a(186444),
                u = a(276259),
                p = a(323265),
                g = a(952793),
                h = a(128225),
                y = a(725516),
                b = a(125363),
                f = a(270172),
                v = a(601576),
                w = a(654917),
                I = a(246277);
            const E = s().j826e722,
                C = s().a9325f10,
                k = s().f88553c8,
                M = s().g0b12442,
                P = s().edd0c172,
                R = s().d1d3a41a,
                Z = ["ton.x.com", "ton.twitter.com", "pbs.twimg.com"];
            function _({ allFileAttachments: e, allIntermediateImageResults: t, aspectRatio: a, centerJustify: r, extraMenuItems: s, file: _, height: x, index: A, intermediateResults: U, isAborted: L, isImageActionsEnabled: S = !0, isInputAttachmentPreview: T, isLoading: z, messageId: D, onClick: F, onImageSize: O, onRemove: j, onViewed: N, preloadedImageUrl: B, style: G, useActionRowButtons: K, width: W, withMediaCarousel: J }) {
                const H = (0, b.I0)(),
                    V = (0, i.useHistory)(),
                    $ = (0, y.z)(),
                    [X, q] = n.useState(!1),
                    [Q, Y] = n.useState(),
                    ee = !!p.ZP.isWebView(),
                    te = (0, g.hC)("responsive_web_grok_webview_file_actions_enabled"),
                    ae = (0, g.hC)("responsive_web_grok_image_edit"),
                    ne = S && (!ee || te),
                    ie = !!_?.url && Z.includes(new URL(_.url).hostname),
                    oe = n.useMemo(() => ((_.url && ie) || _.isPublic ? _.url : Q ? URL.createObjectURL(Q) : void 0), [Q, ie, _.isPublic, _.url]);
                n.useEffect(() => {
                    if (!_.url || _.isPublic || !u.v5.includes(_.mimeType) || ie) return;
                    const e = _.url;
                    q(!0),
                        H((0, f.X)(e))
                            .then((e) => {
                                Y(e ?? void 0);
                            })
                            .catch()
                            .finally(() => {
                                q(!1);
                            });
                }, [_.url, _.isPublic, q, ie, _.mimeType, H]);
                const { conversationKey: re } = (0, w.ZP)(),
                    se = n.useCallback(
                        ({ editMode: a } = {}) => {
                            let n = _.mediaId;
                            const i = _.url;
                            if (!n && i) {
                                n = new URL(i).searchParams.get("mediaId") ?? void 0;
                            }
                            if (($.scribe({ element: "expand_image", action: "click", data: { event_info: JSON.stringify({ mediaId: n, mediaUrl: i, allMediaIds: e ? e.map((e) => e.mediaId) : void 0, allMediaUrls: e ? e.map((e) => e.url) : void 0 }) } }), J)) {
                                const n = "/i/grok/media-carousel";
                                V.push({ pathname: n, state: { file: _, messageId: D, conversationKey: re, index: A, editMode: a, fileAttachments: e, intermediateImageResults: t } });
                            } else {
                                const e = !n || ie ? "/i/grok/media" : `/i/grok/media/${n}`;
                                V.push({ pathname: e, state: { file: _ } });
                            }
                            N && N({ ..._, mediaId: n });
                        },
                        [_, V, ie, N, re, A, D, J, e, $, t],
                    ),
                    le = n.useCallback(() => {
                        se({ editMode: !0 });
                    }, [se]),
                    ce = n.useMemo(() => (oe ? "ready" : L ? "aborted" : z || X ? "loading" : "error"), [oe, z, L, X]),
                    de = n.useMemo(() => (J && ae ? [n.createElement(o.Z, { Icon: l.default, actionText: R, key: "editImage", onClick: (e) => se({ editMode: !0 }) })] : []), [ae, J, se]),
                    me = n.useMemo(
                        () =>
                            ne
                                ? [
                                      n.createElement(o.Z, {
                                          Icon: c.default,
                                          actionText: E,
                                          key: "saveImage",
                                          onClick: (e) => {
                                              (async () => {
                                                  if (($.scribe({ element: "save_image_button", action: "click" }), oe)) {
                                                      const e = await (0, h.f)(oe, !0, !0),
                                                          t = URL.createObjectURL(e);
                                                      (0, u.uv)(t, "image.jpg");
                                                  }
                                              })();
                                          },
                                      }),
                                      n.createElement(o.Z, {
                                          Icon: d.default,
                                          actionText: C,
                                          key: "copyImage",
                                          onClick: (e) => {
                                              (async () => {
                                                  if (($.scribe({ element: "copy_image_button", action: "click" }), oe)) {
                                                      const e = await (0, h.f)(oe, !0, !0),
                                                          t = URL.createObjectURL(e);
                                                      (0, u.VJ)(t)
                                                          .then(() => {
                                                              H((0, v.fz)({ text: k }));
                                                          })
                                                          .catch((e) => {
                                                              H((0, v.fz)({ text: M }));
                                                          });
                                                  }
                                              })();
                                          },
                                      }),
                                      n.createElement(o.Z, {
                                          Icon: m.default,
                                          actionText: P,
                                          key: "postImage",
                                          onClick: (e) => {
                                              (async () => {
                                                  if (($.scribe({ element: "post_image_button", action: "click" }), !oe)) return;
                                                  const e = await (0, h.f)(oe, !0, !0),
                                                      t = URL.createObjectURL(e);
                                                  V.push({ pathname: "/compose/post", state: { externalMedia: [t], positionCursorAtBeginning: !0 } });
                                              })();
                                          },
                                      }),
                                      ...de,
                                      ...(s ?? []),
                                  ]
                                : [],
                        [oe, $, H, V, ne, s, de],
                    ),
                    ue = n.useCallback(() => (F ? F(se) : se()), [F, se]);
                return n.createElement(I.Z, { allMediaIds: e ? e.map((e) => e.mediaId || "") : void 0, aspectRatio: a, centerJustify: r, disableClickWhileLoading: !J, filename: _.fileName, height: x, intermediateResults: U, isInputAttachmentPreview: T, isModerated: !!_.moderated, mediaId: _.mediaId, menuItems: me, mimetype: _.mimeType, onClick: ue, onImageSize: O, onRemove: j, openMediaToEdit: le, preloadedImageUrl: B, status: ce, style: G, url: oe, useActionRowButtons: K, width: W });
            }
        },
        774038: (e, t, a) => {
            a.d(t, { N6: () => N, eQ: () => G, rO: () => B });
            a(543673), a(240753), a(128399), a(136728);
            var n = a(202784),
                i = a(107267),
                o = a(108362),
                r = a(154003),
                s = a(731708),
                l = a(370006),
                c = a(392237),
                d = a(111677),
                m = a.n(d),
                u = a(72591),
                p = a(427783),
                g = a(186444),
                h = a(254944),
                y = a(276259),
                b = a(323265),
                f = a(952793),
                v = a(128225),
                w = a(725405),
                I = a(125363),
                E = a(270172),
                C = a(327597),
                k = a(601576),
                M = a(791786),
                P = a(928831),
                R = a(988290),
                Z = a(737368),
                _ = a(305442);
            const x = b.ZP.isTwitterApp(),
                A = b.ZP.isTwitterApp() ? (b.ZP.isAndroid() ? "grok_android" : "grok_ios") : "grok",
                U = m().j826e722,
                L = m().a9325f10,
                S = m().f88553c8,
                T = m().g0b12442,
                z = m().edd0c172,
                D = m().abd845fe,
                F = m().d1d3a41a,
                O = m().a2697040,
                j = ["ton.x.com", "ton.twitter.com", "pbs.twimg.com"];
            function N(e) {
                const t = n.useMemo(() => e || { fileName: "", mimeType: "" }, [e]),
                    a = (0, I.I0)(),
                    [i, o] = n.useState(),
                    r = n.useMemo(() => !!t?.url && j.includes(new URL(t.url).hostname), [t]),
                    s = n.useMemo(() => ((t.url && r) || t.isPublic ? t.url : i ? URL.createObjectURL(i) : void 0), [i, r, t.isPublic, t.url]);
                return (
                    n.useEffect(() => {
                        if (!t.url || t.isPublic || !y.v5.includes(t.mimeType) || r) return;
                        const e = t.url;
                        a((0, E.X)(e))
                            .then((e) => {
                                o(e ?? void 0);
                            })
                            .catch();
                    }, [t.url, t.isPublic, r, t.mimeType, a]),
                    s
                );
            }
            function B({ allMediaIds: e, allMediaUrls: t, buttonSize: a = "xLarge", buttonType: l = "alwaysBlack", contentUrl: c, isLoading: d, mediaId: m, mediaUrl: b, setEditMode: E, withStartAlignment: C }) {
                const M = (0, I.I0)(),
                    P = (0, w.Z)(),
                    Z = (0, i.useHistory)(),
                    { isGrokDrawer: _ } = (0, R.ZP)(),
                    O = (0, f.hC)("responsive_web_grok_image_edit");
                return n.createElement(
                    o.Z,
                    { onClick: (e) => e.stopPropagation(), style: C ? K.containerCorner : K.container, withGutter: !0 },
                    !x &&
                        n.createElement(
                            n.Fragment,
                            null,
                            n.createElement(r.ZP, {
                                disabled: d,
                                hoverLabel: { label: U },
                                icon: n.createElement(u.default, { style: K.white }),
                                key: "saveImage",
                                onClick: (a) => {
                                    (async () => {
                                        if ((P.scribe({ page: A, element: "save_image_button", action: "click", data: { event_info: JSON.stringify({ mediaId: m, mediaUrl: b, allMediaIds: e, allMediaUrls: t }) } }), c)) {
                                            const e = await (0, v.f)(c, !0, !0),
                                                t = URL.createObjectURL(e);
                                            (0, y.uv)(t, "image.jpg");
                                        }
                                    })();
                                },
                                size: a,
                                style: K.button,
                                type: l,
                            }),
                            n.createElement(r.ZP, {
                                disabled: d,
                                hoverLabel: { label: L },
                                icon: n.createElement(p.default, { style: K.white }),
                                key: "copyImage",
                                onClick: (a) => {
                                    (async () => {
                                        if ((P.scribe({ page: A, element: "copy_image_button", action: "click", data: { event_info: JSON.stringify({ mediaId: m, mediaUrl: b, allMediaIds: e, allMediaUrls: t }) } }), c)) {
                                            const e = await (0, v.f)(c, !0, !0),
                                                t = URL.createObjectURL(e);
                                            (0, y.VJ)(t)
                                                .then(() => {
                                                    M((0, k.fz)({ text: S }));
                                                })
                                                .catch((e) => {
                                                    M((0, k.fz)({ text: T }));
                                                });
                                        }
                                    })();
                                },
                                size: a,
                                style: K.button,
                                type: l,
                            }),
                            n.createElement(r.ZP, {
                                disabled: d,
                                hoverLabel: { label: z },
                                icon: n.createElement(g.default, { style: K.white }),
                                key: "postImage",
                                onClick: (a) => {
                                    (async () => {
                                        if ((P.scribe({ page: A, element: "post_image_button", action: "click", data: { event_info: JSON.stringify({ mediaId: m, mediaUrl: b, allMediaIds: e, allMediaUrls: t }) } }), !c)) return;
                                        const a = await (0, v.f)(c, !0, !0),
                                            n = URL.createObjectURL(a);
                                        Z.push({ pathname: "/compose/post", state: { externalMedia: [n], positionCursorAtBeginning: !0 } });
                                    })();
                                },
                                size: a,
                                style: K.button,
                                type: l,
                            }),
                        ),
                    O
                        ? n.createElement(
                              r.ZP,
                              {
                                  disabled: d,
                                  hoverLabel: { label: F },
                                  icon: n.createElement(h.default, { style: K.white }),
                                  key: "editImage",
                                  onClick: (a) => {
                                      (async () => {
                                          P.scribe({ page: A, element: "edit_image_button", action: "click", data: { event_info: JSON.stringify({ mediaId: m, mediaUrl: b, allMediaIds: e, allMediaUrls: t }) } }), E && E(!0);
                                      })();
                                  },
                                  size: a,
                                  style: K.button,
                                  type: l,
                              },
                              !_ && n.createElement(s.ZP, { style: K.white }, D),
                          )
                        : null,
                );
            }
            function G({ contentUrl: e, conversationKey: t, grokFile: a, onSend: i, setEditMode: r }) {
                const s = (0, Z.k)(),
                    c = (0, I.I0)(),
                    d = (0, w.Z)(),
                    { isImageEditEnabled: m, selectImageEditFilterKey: u } = (0, P.w)(),
                    p = (0, _.Z)("image_edit"),
                    g = n.useRef(!1),
                    h = n.useCallback(
                        (n) => {
                            g.current ||
                                ((g.current = !0),
                                (async () => {
                                    const o = [];
                                    if (a && a.mediaId) o.push(a);
                                    else {
                                        const t = await (0, v.f)(e, !0, !0),
                                            a = new AbortController(),
                                            n = await s(((r = t), (l = "edit_grok.jpeg"), new File([r], l, { type: r.type })), a);
                                        o.push(n);
                                    }
                                    var r, l;
                                    const g = { ...n, attachments: o, imageGenerationCount: p, promptMetadata: { promptSource: "IMAGE_EDIT", action: "INPUT", properties: { imageUrl: a?.url || e } } };
                                    m || u(), c((0, C.u)({ analytics: d, conversationKey: t })(g)), i();
                                })());
                        },
                        [p, c, d, s, e, t, i, a, m, u],
                    );
                return n.createElement(o.Z, { onClick: (e) => e.stopPropagation(), style: K.container, withGutter: !0 }, !x && n.createElement(l.Z, { backButtonType: "close", onClick: () => r(!1) }), n.createElement(M.Z, { conversationKey: t, disableFileUploads: !0, hasAccess: !0, isIdle: !0, mode: "", placeholder: O, promptSender: h, useMagicWandIcon: !0, useNonExpanded: !0 }));
            }
            const K = c.default.create((e) => ({ button: { backdropFilter: "blur(8px)" }, container: { padding: e.spaces.space12, flexDirection: "row", gap: e.spaces.space20, justifyContent: "center" }, containerCorner: { padding: e.spaces.space4, flexDirection: "row", gap: e.spaces.space8, justifyContent: "center" }, center: { justifyContent: "center", alignItems: "center" }, flex: { flex: 1 }, white: { color: "white" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-63cb1cc4.a4de1f8a.js.map

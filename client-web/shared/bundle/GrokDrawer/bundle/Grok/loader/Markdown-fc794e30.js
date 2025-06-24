"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-fc794e30"],
    {
        480243: (e, t, n) => {
            n.d(t, { W: () => h });
            var a = n(927974),
                i = n(202784),
                o = n(565058),
                r = n(400752),
                s = n(10622),
                l = n.n(s),
                c = (n(585488), n(437429)),
                d = n.n(c);
            const m = a.Z,
                u = (0, o.cn)(void 0),
                p = (0, o.cn)([]);
            function h() {
                const e = d()(),
                    [t, n] = (0, r.KO)(p),
                    [a, o] = (0, r.KO)(u);
                i.useEffect(() => {
                    l()(e, m, {}, { networkCacheConfig: { force: !1 } })
                        .toPromise()
                        .then((e) => {
                            e?.grok_user_personalities?.personalities && n([...e.grok_user_personalities.personalities]);
                        })
                        .catch((e) => {});
                }, [e, o, n]);
                const s = i.useCallback(
                    (e) => {
                        o(e);
                    },
                    [o],
                );
                return { userPersonalities: t, setGrokPersonality: s, getPersonality: (e) => t.find((t) => t.personality_id === e), currentPersonalityId: a };
            }
        },
        246277: (e, t, n) => {
            n.d(t, { $: () => F, Z: () => S });
            var a = n(807896),
                i = n(202784),
                o = n(215045),
                r = n(325686),
                s = n(466792),
                l = n(67369),
                c = n(992942),
                d = n(392237),
                m = n(731708),
                u = n(154003),
                p = n(721266),
                h = n(111677),
                g = n.n(h),
                y = n(47086),
                f = n(161335),
                b = n(149170),
                w = n(837020),
                v = n(189700),
                I = n(839090),
                E = n(928831),
                C = n(45843),
                k = n(457566),
                x = n(774038);
            const P = ({ status: e, expectedChunks: t = [0.25, 0.5, 0.75, 1], intermediateResults: n = [], url: a, aspectRatio: o, isModerated: s, withActionRow: l, openMediaToEdit: d, onImageSize: m, mediaId: u, mediaUrl: p, allMediaIds: h, allMediaUrls: g }) => {
                    const [y, f] = i.useState(0),
                        b = M({ expectedChunks: t, progress: y }),
                        w = i.useMemo(
                            () =>
                                [...n]
                                    .sort((e, t) => e.progress - t.progress)
                                    .map((e, t) => {
                                        const n = o ?? 4 / 3,
                                            a = Math.round((n / e.progress) * 100) / 100;
                                        return y > e.progress
                                            ? null
                                            : i.createElement(c.Z, {
                                                  key: `progress_${e.progress}`,
                                                  onLoad: () => {
                                                      f((t) => Math.max(t, e.progress));
                                                  },
                                                  resizeMode: "cover",
                                                  source: e.imageUrl,
                                                  style: [Z.image, { aspectRatio: a }],
                                              });
                                    }),
                            [n, y, o],
                        ),
                        v = n.length > 0 && y > 0,
                        I = i.useMemo(() => ({ top: 0, height: 100 * y + "%", overflow: "hidden", transitionProperty: "height, mask", transitionDuration: `${b}ms`, transitionTimingFunction: 1 === y ? "ease-in" : "linear", zIndex: 50, mask: y < 1 ? "linear-gradient(\n        to bottom,\n        rgba(0, 0, 0, 1) 0%,\n        rgba(0, 0, 0, 1) calc(100% - 5px),\n        rgba(0, 0, 0, 0) 100%\n      )" : void 0 }), [y, b]),
                        E = i.useMemo(() => ({ top: 0, height: 100 * y + "%", overflow: "hidden", transform: "translate3d(0,0,0)", transitionProperty: "height", transitionDuration: b / 1.5 + "ms", transitionTimingFunction: "linear", filter: "blur(70px) contrast(2)", zIndex: 10 }), [y, b]),
                        [P, R] = i.useState(0);
                    return (
                        i.useEffect(() => {
                            a &&
                                C.Z.getSize(
                                    a,
                                    (e, t) => {
                                        e && t && (R(e / t), m?.(e, t));
                                    },
                                    (e) => {},
                                );
                        }, [a, R]),
                        i.createElement(r.Z, { style: Z.container }, "loading" === e ? i.createElement(r.Z, { style: Z.logoContainer }, i.createElement(k.x1, { style: Z.grokIcon })) : null, "loading" === e || "aborted" === e || v ? i.createElement(i.Fragment, null, i.createElement(r.Z, { style: [Z.content, I] }, i.createElement(r.Z, { style: s || "aborted" === e ? Z.contentModerated : void 0 }, w)), i.createElement(r.Z, { style: [Z.content, E] }, w)) : null, i.createElement(c.Z, { resizeMode: "cover", source: v || s ? void 0 : a, style: [Z.finalImage, { aspectRatio: o ?? (P || 4 / 3) }] }), l && "aborted" !== e ? i.createElement(r.Z, { style: [Z.actionRow, Z.animation] }, i.createElement(x.rO, { allMediaIds: h, allMediaUrls: g, buttonSize: "medium", buttonType: "onMediaText", contentUrl: a, isLoading: "ready" !== e, mediaId: u, mediaUrl: p, setEditMode: d || (() => {}), withStartAlignment: !0 })) : null)
                    );
                },
                Z = d.default.create((e) => ({ animation: { opacity: 1, animationDuration: ".3s", animationTimingFunction: "ease-out", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, actionRow: { position: "absolute", bottom: 0, width: "100%", backdropFilter: "blur(4px) brightness(70%)", zIndex: 300 }, content: { position: "absolute", height: "100%", width: "100%", start: 0, opacity: 1 }, contentModerated: { transitionProperty: "opacity", transitionDuration: "500ms", transitionTimingFunction: "linear", opacity: 0 }, image: { position: "absolute", start: 0, top: 0, width: "100%", zIndex: 100 }, transparent: { opacity: 0 }, finalImage: { position: "relative", zIndex: 200, width: "100%" }, container: { borderRadius: e.borderRadii.large, backgroundColor: e.colors.gray50, transform: "translate3d(0,0,0)", width: "100%", overflow: "hidden", position: "relative" }, logoContainer: { position: "absolute", start: 0, top: 0, width: "100%", height: "100%", justifyContent: "center", alignItems: "center", opacity: 0, animationIterationCount: "infinite", animationDuration: "1.5s", animationKeyframes: [{ "0%": { opacity: "0" }, "50%": { opacity: "1" }, "100%": { opacity: "0" } }] }, grokIcon: { color: e.colors.gray200, width: "20%", maxWidth: e.spaces.space64, height: "20%", maxHeight: e.spaces.space64 } })),
                M = ({ expectedChunks: e, progress: t }) => {
                    const n = i.useRef(Date.now());
                    return i.useMemo(() => {
                        const a = Date.now() - n.current,
                            i = 0 === t ? 1e4 : a / t,
                            o = e.findIndex((e) => e >= t),
                            r = e[o + 1];
                        if (-1 === o) return 0;
                        if (!r) return 200;
                        return i * (r - t) * 1.2;
                    }, [t, e]);
                },
                R = g().e68b09b4,
                A = g().c26b9b9c,
                L = { label: R },
                z = g().ac85c6b2,
                U = g().g10600b0,
                _ = { label: U },
                F = ["image/jpeg", "image/webp", "image/png"];
            function S({ allMediaIds: e, allMediaUrls: t, aspectRatio: n, centerJustify: h, disableClickWhileLoading: g = !0, filename: C, height: k, intermediateResults: x, isInputAttachmentPreview: Z, isModerated: M, mediaId: S, mediaUrl: D, menuItems: j, mimetype: B, onClick: O, onImageSize: N, onRemove: W, openMediaToEdit: K, preloadedImageUrl: H, status: $, style: J, url: G, useActionRowButtons: V, width: X }) {
                const { handlers: q, interactivityState: Q } = (0, s.x)({}),
                    Y = (0, l.yu)(),
                    [ee, te] = i.useState(!1),
                    ne = j && j.length > 0,
                    [ae, ie] = i.useState(!1),
                    oe = "error" === $,
                    re = "aborted" === $,
                    se = Y ? 60 : 80,
                    le = { width: 1.5 * se, height: se },
                    ce = i.useCallback((e) => {
                        e.stopPropagation(), te(!0);
                    }, []),
                    de = i.useCallback(() => te(!1), []),
                    me = !X || !k || (X > 200 && k > 150),
                    ue = i.useMemo(() => ({ width: X ?? "100%", height: k ?? "auto", outline: "none" }), [X, k]),
                    pe = i.useCallback(
                        (e) => {
                            e.stopPropagation(), e.preventDefault(), W?.();
                        },
                        [W],
                    ),
                    { isInputFocused: he } = (0, E.w)();
                if (F.includes(B)) {
                    const s = "ready" === $ && ne && Q.isHovered && !V;
                    return i.createElement(
                        o.Z,
                        (0, a.Z)({ disabled: (g && !G) || re }, q, {
                            onLongPress: Y ? ce : void 0,
                            onMouseEnter: () => {
                                ie(!0);
                            },
                            onMouseLeave: () => {
                                ie(!1);
                            },
                            onPress: O,
                            style: [h && { justifyContent: "center" }, ue, M || oe || re ? T.noClick : void 0, J],
                        }),
                        Z ? (!G || G.startsWith("blob:") ? i.createElement(r.Z, { style: [T.inputAttachmentPreview, T.inputAttachmentPreviewPlaceholder, { width: X ?? se, height: k ?? se }] }) : i.createElement(c.Z, { resizeMode: "cover", source: H || G, style: [T.inputAttachmentPreview, { width: X ?? se, height: k ?? se }] })) : i.createElement(P, { allMediaIds: e, allMediaUrls: t, aspectRatio: n, intermediateResults: x, isModerated: M, mediaId: S, mediaUrl: D, onImageSize: N, openMediaToEdit: K, resizeMode: "cover", status: $, url: H || G, withActionRow: V && Q.isHovered }),
                        oe ? i.createElement(r.Z, { style: T.errorContainer }, i.createElement(y.default, { color: d.default.theme.colors.gray600, style: T.errorIcon }), me ? i.createElement(m.ZP, { size: "body", style: T.errorMessage }, z) : null) : M || re ? i.createElement(r.Z, { style: T.errorContainer }, i.createElement(f.default, { color: d.default.theme.colors.text, style: T.errorIconLarge })) : null,
                        i.createElement(r.Z, { style: T.imageButtonContainer }, s ? i.createElement(u.ZP, { "aria-label": U, hoverLabel: _, icon: i.createElement(b.default, null), onClick: ce, size: "xSmall", type: "onMediaDominantColorFilled" }) : null, ne && ee ? i.createElement(I.Z, { onDismiss: de }, i.createElement(o.Z, { onPress: de }, j)) : null, W && (Y || (!Y && ae)) ? i.createElement(u.ZP, { "aria-label": R, hoverLabel: L, icon: i.createElement(w.default, null), onClick: pe, size: "xSmall", style: T.removeBtn, type: "onMediaDominantColorFilled" }) : null),
                    );
                }
                if (Z) {
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
                            style: [T.inputAttachmentPreviewFileContainer, { width: X ?? le.width, height: k ?? le.height }, J],
                        },
                        i.createElement(r.Z, { style: T.inputAttachmentPreviewFileContainerContent }, i.createElement(m.ZP, { hoverLabel: { label: C }, numberOfLines: 2, selectable: !1, size: "subtext2" }, C), i.createElement(r.Z, { style: T.inputAttachmentPreviewBottomContainer }, i.createElement(r.Z, { style: T.inputAttachmentPreviewFileIconContainer }, i.createElement(v.default, { style: T.inputAttachmentPreviewFileIcon })), i.createElement(m.ZP, { numberOfLines: 1, size: "subtext3" }, e.toUpperCase()))),
                        W && (Y || (!Y && ae)) ? i.createElement(i.Fragment, null, i.createElement(u.ZP, { "aria-label": R, hoverLabel: L, icon: i.createElement(w.default, null), onClick: pe, size: "xSmall", style: [T.removeBtn, T.inputAttachmentPreviewRemoveBtn], type: "onMediaDominantColorFilled" })) : null,
                    );
                }
                return i.createElement(r.Z, { style: [T.documentContainer, he ? T.documentContainerActive : null, J] }, i.createElement(r.Z, { style: T.iconContainer }, i.createElement(v.default, { style: T.documentIcon })), i.createElement(r.Z, { style: T.documentNameContainer }, i.createElement(m.ZP, { hoverLabel: { label: C }, numberOfLines: 1, selectable: !1, size: "subtext2", weight: "medium" }, C), i.createElement(p.Z, { size: "space4" }), i.createElement(m.ZP, { color: "gray700", selectable: !1, size: "subtext3", weight: "normal" }, A)), W && (Y || (!Y && ae)) ? i.createElement(i.Fragment, null, i.createElement(p.Z, { size: "space4" }), i.createElement(u.ZP, { "aria-label": R, hoverLabel: L, icon: i.createElement(w.default, null), onClick: pe, size: "xSmall", style: T.removeBtn, type: "primaryText" })) : null);
            }
            const T = d.default.create((e) => ({
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
        335785: (e, t, n) => {
            n.d(t, { L: () => d });
            n(543673), n(240753), n(128399);
            var a = n(202784),
                i = n(325686),
                o = n(167630),
                r = n(392237),
                s = n(246277),
                l = n(523253),
                c = n(86657);
            function d({ height: e, isInputAttachmentPreview: t, onRemove: n, selectedFile: r, width: d }) {
                const u = a.useRef(void 0);
                if (
                    (a.useEffect(() => {
                        if (r?.local) {
                            const e = r.local,
                                t = URL.createObjectURL(e);
                            u.current !== t && (u.current = t);
                        }
                    }, [r]),
                    !r)
                )
                    return;
                return s.$.includes(r?.local?.type) || s.$.includes(r?.remote?.mimeType) ? a.createElement(i.Z, null, r.remote && a.createElement(i.Z, { style: m.default }, a.createElement(c.Z, { file: r.remote, height: e, isImageActionsEnabled: !1, isInputAttachmentPreview: !0, isLoading: !1, onRemove: n, preloadedImageUrl: u.current, width: d })), r.local && a.createElement(i.Z, { style: [m.default, r.remote ? m.hidden : void 0] }, a.createElement(l.Z, { file: r.local, height: e, isInputAttachmentPreview: !0, onRemove: n, width: d }), a.createElement(o.Z, { style: { top: "50%", start: "50%", position: "absolute", transform: "translate(-50%, -50%)" } }))) : a.createElement(i.Z, null, r.remote ? a.createElement(c.Z, { file: r.remote, height: e, isImageActionsEnabled: !1, isInputAttachmentPreview: !0, isLoading: !1, onRemove: n, preloadedImageUrl: u.current, width: d }) : r.local ? a.createElement(a.Fragment, null, a.createElement(l.Z, { file: r.local, height: e, isInputAttachmentPreview: !0, onRemove: n, width: d }), a.createElement(o.Z, { style: [{ top: "50%", start: "50%", position: "absolute", transform: "translate(-50%, -50%)" }, r.remote ? m.hidden : void 0] })) : null);
            }
            const m = r.default.create((e) => ({ default: { opacity: 1, zIndex: 1 }, hidden: { position: "absolute", zIndex: -1 } }));
        },
        523253: (e, t, n) => {
            n.d(t, { Z: () => o });
            n(543673), n(240753), n(128399);
            var a = n(202784),
                i = n(246277);
            function o({ file: e, height: t, isInputAttachmentPreview: n, onImageSize: o, onRemove: r, style: s, width: l }) {
                const c = a.useMemo(() => URL.createObjectURL(e), [e]);
                return a.createElement(i.Z, { filename: e.name, height: t, isInputAttachmentPreview: n, mimetype: e.type, onImageSize: o, onRemove: r, status: "ready", style: s, url: c, width: l });
            }
        },
        86657: (e, t, n) => {
            n.d(t, { Z: () => R });
            n(543673), n(240753), n(128399), n(136728);
            var a = n(202784),
                i = n(107267),
                o = n(143670),
                r = n(111677),
                s = n.n(r),
                l = n(254944),
                c = n(72591),
                d = n(427783),
                m = n(186444),
                u = n(276259),
                p = n(323265),
                h = n(952793),
                g = n(128225),
                y = n(725516),
                f = n(125363),
                b = n(270172),
                w = n(601576),
                v = n(654917),
                I = n(246277);
            const E = s().j826e722,
                C = s().a9325f10,
                k = s().f88553c8,
                x = s().g0b12442,
                P = s().edd0c172,
                Z = s().d1d3a41a,
                M = ["ton.x.com", "ton.twitter.com", "pbs.twimg.com"];
            function R({ allFileAttachments: e, allIntermediateImageResults: t, aspectRatio: n, centerJustify: r, extraMenuItems: s, file: R, height: A, index: L, intermediateResults: z, isAborted: U, isImageActionsEnabled: _ = !0, isInputAttachmentPreview: F, isLoading: S, messageId: T, onClick: D, onImageSize: j, onRemove: B, onViewed: O, preloadedImageUrl: N, style: W, useActionRowButtons: K, width: H, withMediaCarousel: $ }) {
                const J = (0, f.I0)(),
                    G = (0, i.useHistory)(),
                    V = (0, y.z)(),
                    [X, q] = a.useState(!1),
                    [Q, Y] = a.useState(),
                    ee = !!p.ZP.isWebView(),
                    te = (0, h.hC)("responsive_web_grok_webview_file_actions_enabled"),
                    ne = (0, h.hC)("responsive_web_grok_image_edit"),
                    ae = _ && (!ee || te),
                    ie = !!R?.url && M.includes(new URL(R.url).hostname),
                    oe = a.useMemo(() => ((R.url && ie) || R.isPublic ? R.url : Q ? URL.createObjectURL(Q) : void 0), [Q, ie, R.isPublic, R.url]);
                a.useEffect(() => {
                    if (!R.url || R.isPublic || !u.v5.includes(R.mimeType) || ie) return;
                    const e = R.url;
                    q(!0),
                        J((0, b.X)(e))
                            .then((e) => {
                                Y(e ?? void 0);
                            })
                            .catch()
                            .finally(() => {
                                q(!1);
                            });
                }, [R.url, R.isPublic, q, ie, R.mimeType, J]);
                const { conversationKey: re } = (0, v.ZP)(),
                    se = a.useCallback(
                        ({ editMode: n } = {}) => {
                            let a = R.mediaId;
                            const i = R.url;
                            if (!a && i) {
                                a = new URL(i).searchParams.get("mediaId") ?? void 0;
                            }
                            if ((V.scribe({ element: "expand_image", action: "click", data: { event_info: JSON.stringify({ mediaId: a, mediaUrl: i, allMediaIds: e ? e.map((e) => e.mediaId) : void 0, allMediaUrls: e ? e.map((e) => e.url) : void 0 }) } }), $)) {
                                const a = "/i/grok/media-carousel";
                                G.push({ pathname: a, state: { file: R, messageId: T, conversationKey: re, index: L, editMode: n, fileAttachments: e, intermediateImageResults: t } });
                            } else {
                                const e = !a || ie ? "/i/grok/media" : `/i/grok/media/${a}`;
                                G.push({ pathname: e, state: { file: R } });
                            }
                            O && O({ ...R, mediaId: a });
                        },
                        [R, G, ie, O, re, L, T, $, e, V, t],
                    ),
                    le = a.useCallback(() => {
                        se({ editMode: !0 });
                    }, [se]),
                    ce = a.useMemo(() => (oe ? "ready" : U ? "aborted" : S || X ? "loading" : "error"), [oe, S, U, X]),
                    de = a.useMemo(() => ($ && ne ? [a.createElement(o.Z, { Icon: l.default, actionText: Z, key: "editImage", onClick: (e) => se({ editMode: !0 }) })] : []), [ne, $, se]),
                    me = a.useMemo(
                        () =>
                            ae
                                ? [
                                      a.createElement(o.Z, {
                                          Icon: c.default,
                                          actionText: E,
                                          key: "saveImage",
                                          onClick: (e) => {
                                              (async () => {
                                                  if ((V.scribe({ element: "save_image_button", action: "click" }), oe)) {
                                                      const e = await (0, g.f)(oe, !0, !0),
                                                          t = URL.createObjectURL(e);
                                                      (0, u.uv)(t, "image.jpg");
                                                  }
                                              })();
                                          },
                                      }),
                                      a.createElement(o.Z, {
                                          Icon: d.default,
                                          actionText: C,
                                          key: "copyImage",
                                          onClick: (e) => {
                                              (async () => {
                                                  if ((V.scribe({ element: "copy_image_button", action: "click" }), oe)) {
                                                      const e = await (0, g.f)(oe, !0, !0),
                                                          t = URL.createObjectURL(e);
                                                      (0, u.VJ)(t)
                                                          .then(() => {
                                                              J((0, w.fz)({ text: k }));
                                                          })
                                                          .catch((e) => {
                                                              J((0, w.fz)({ text: x }));
                                                          });
                                                  }
                                              })();
                                          },
                                      }),
                                      a.createElement(o.Z, {
                                          Icon: m.default,
                                          actionText: P,
                                          key: "postImage",
                                          onClick: (e) => {
                                              (async () => {
                                                  if ((V.scribe({ element: "post_image_button", action: "click" }), !oe)) return;
                                                  const e = await (0, g.f)(oe, !0, !0),
                                                      t = URL.createObjectURL(e);
                                                  G.push({ pathname: "/compose/post", state: { externalMedia: [t], positionCursorAtBeginning: !0 } });
                                              })();
                                          },
                                      }),
                                      ...de,
                                      ...(s ?? []),
                                  ]
                                : [],
                        [oe, V, J, G, ae, s, de],
                    ),
                    ue = a.useCallback(() => (D ? D(se) : se()), [D, se]);
                return a.createElement(I.Z, { allMediaIds: e ? e.map((e) => e.mediaId || "") : void 0, aspectRatio: n, centerJustify: r, disableClickWhileLoading: !$, filename: R.fileName, height: A, intermediateResults: z, isInputAttachmentPreview: F, isModerated: !!R.moderated, mediaId: R.mediaId, menuItems: me, mimetype: R.mimeType, onClick: ue, onImageSize: j, onRemove: B, openMediaToEdit: le, preloadedImageUrl: N, status: ce, style: W, url: oe, useActionRowButtons: K, width: H });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-fc794e30.a44fec1a.js.map

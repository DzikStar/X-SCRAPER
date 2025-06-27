"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-cebf58fc"],
    {
        640350: (e, t, a) => {
            a.d(t, { V: () => E });
            var o = a(202784),
                r = a(325686),
                n = a(392237),
                i = a(20716),
                s = a(988290),
                l = a(731708),
                c = a(992942),
                p = a(306677),
                d = a(952793),
                m = a(725405),
                u = a(125363),
                g = a(53939),
                y = a(327597),
                h = a(654917),
                b = a(623494),
                f = a(928831);
            const C = ({ allPrompts: e, data: t, sectionType: a }) => {
                    const [n, i] = o.useState(!1),
                        C = (0, m.Z)(),
                        w = (0, u.I0)(),
                        E = (0, h.eX)(),
                        { isCompactLayout: v } = (0, s.ZP)(),
                        { isReasoningEnabled: _, isResearchEnabled: x } = (0, f.w)(),
                        Z = (0, d.hC)("responsive_web_grok_show_citations"),
                        I = o.useRef(!1),
                        P = o.useCallback(() => {
                            I.current || (0, b.az)(C, "impression", { promptId: t.prompt_id ?? "", prompt: t.prompt, sectionType: a, allPrompts: e });
                        }, [C, t.prompt_id, t.prompt, a, e]),
                        R = o.useCallback(() => i(!0), []),
                        S = o.useCallback(() => i(!1), []),
                        z = o.useCallback(() => {
                            if (((0, b.az)(C, "click", { promptId: t.prompt_id ?? "", prompt: t.prompt, sectionType: a, allPrompts: e }), "" !== t.prompt_id)) {
                                const e = "PRESET";
                                w((0, g.U)({ group_id: e, object_id: t.prompt_id, action_type: "CLICK" }));
                            }
                            w((0, y.u)({ analytics: C, conversationKey: E })({ text: t.prompt, returnCitations: Z, toolOverrides: t.tool_overrides, isDeepsearch: x, isReasoning: _ }));
                        }, [C, w, E, e, a, t.prompt, t.prompt_id, Z, t.tool_overrides, x, _]);
                    return o.createElement(r.Z, { onClick: z, onMouseEnter: R, onMouseLeave: S, style: [k.container, n ? k.hovered : void 0, v ? k.full : k.compact] }, o.createElement(r.Z, { style: t.image_url ? k.textContentWithImage : k.textContentWithoutImage }, o.createElement(p.D, { id: `prompt_${t.prompt_id}`, onFullyVisible: P, position: "bottom", testID: `prompt_${t.prompt_id}` }), !!t.display_label && o.createElement(l.ZP, { numberOfLines: 3, size: "body", weight: "bold" }, t.display_label), !!t.display_body && o.createElement(l.ZP, { color: "gray700", numberOfLines: 1, size: "subtext1", weight: "normal" }, t.display_body)), !!t.image_url && o.createElement(c.Z, { source: t.image_url, style: k.image }));
                },
                k = n.default.create((e) => ({ container: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large, cursor: "pointer", transition: "background-color 0.5s", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, textContentWithImage: { minHeight: 84, maxWidth: "70%", gap: e.spaces.space8, grow: 1, wrap: "wrap", justifyContent: "center", paddingEnd: e.spaces.space16 }, textContentWithoutImage: { minHeight: 84, width: "100%", gap: e.spaces.space8, justifyContent: "center" }, image: { grow: 0, objectFit: "cover", height: 84, width: 84, borderRadius: e.borderRadii.medium }, hovered: { backgroundColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray50 }, full: { width: "100%" }, compact: { width: "calc(50% - 8px)" } }));
            var w = a(619697);
            const E = ({ data: e }) => {
                    const { isCompactLayout: t } = (0, s.ZP)(),
                        a = (0, i.vN)(e.prompts, 4);
                    return o.createElement(
                        w.$,
                        { data: e },
                        o.createElement(
                            r.Z,
                            { style: t ? v.mobileRow : v.row },
                            a.map((t, r) => o.createElement(C, { allPrompts: a, data: t, key: r, sectionType: e.section_type ?? "NO_SECTION" })),
                        ),
                    );
                },
                v = n.default.create((e) => ({ row: { flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", gap: e.spaces.space16, width: "100%" }, mobileRow: { flexDirection: "column", alignItems: "stretch", gap: e.spaces.space16, width: "100%" } }));
        },
        892451: (e, t, a) => {
            a.d(t, { u: () => Z });
            a(136728);
            var o = a(202784),
                r = a(744610),
                n = a(325686),
                i = a(392237),
                s = a(379848),
                l = a(928831),
                c = a(731708),
                p = a(306677),
                d = a(952793),
                m = a(725405),
                u = a(125363),
                g = a(53939),
                y = a(327597),
                h = a(620988),
                b = a(764226),
                f = a(654917),
                C = a(962379),
                k = a(623494),
                w = a(988290);
            const E = ({ Icon: e, allPrompts: t, body: a, isDeepsearch: r, isImageEdit: i, isImageGen: s, isReasoning: E, label: _, prompt: x, promptAction: Z, promptId: I, sectionType: P, toolOverrides: R }) => {
                    const [S, z] = o.useState(!1),
                        T = (0, m.Z)(),
                        D = (0, u.I0)(),
                        M = (0, f.eX)(),
                        { isCompactLayout: F } = (0, w.ZP)(),
                        { clearSelectedFile: O, selectedFiles: B } = (0, h.ZP)(),
                        { clearFilterKey: L, isCreateImageEnabled: H, isImageEditEnabled: K } = (0, l.w)(),
                        G = (0, d.hC)("responsive_web_grok_show_citations"),
                        N = (0, d.hC)("responsive_web_grok_new_home_layout"),
                        j = o.useMemo(() => Object.keys(B), [B]),
                        W = o.useMemo(() => j.map((e) => B[e]?.remote).filter(Boolean), [j, B]),
                        A = o.useRef(null),
                        { handleFileChange: V } = (0, b.J)({ analytics: T, isReturnCitations: G, prompt: x, promptId: I }),
                        { enabled: $ } = (0, C.Z)(),
                        U = o.useRef(!1),
                        X = o.useCallback(() => {
                            U.current || (0, k.az)(T, "impression", { promptId: I ?? "", prompt: x, sectionType: P, allPrompts: t ?? [] });
                        }, [T, I, x, P, t]),
                        Y = o.useCallback(() => z(!0), []),
                        J = o.useCallback(() => z(!1), []),
                        Q = o.useCallback(() => {
                            if (((0, k.az)(T, "click", { promptId: I ?? "", prompt: x, sectionType: P, allPrompts: t ?? [] }), "UPLOAD" === Z && A.current)) return void A.current.click();
                            let e = {};
                            i && (e = { attachments: W, imageGenerationCount: 4, promptMetadata: { promptSource: "IMAGE_EDIT", action: "INPUT", properties: { imageUrl: W[0].url } } });
                            let a = {};
                            if (
                                (s && (a = { imageGenerationCount: 4 }),
                                D(
                                    (0, y.u)({ analytics: T, conversationKey: M })({
                                        text: x,
                                        returnCitations: G,
                                        toolOverrides: R,
                                        isDeepsearch: r,
                                        isReasoning: E,
                                        isImageGen: s,
                                        ...e,
                                        ...a,
                                        onStart: () => {
                                            j.forEach((e) => {
                                                O(e);
                                            }),
                                                N && (H || K) && L();
                                        },
                                    }),
                                ),
                                "" !== I)
                            ) {
                                const e = "PRESET";
                                D((0, g.U)({ group_id: e, object_id: I, action_type: "CLICK" }));
                            }
                        }, [x, I, D, P, t, T, G, M, Z, R, r, E, i, W, O, j, H, K, L, N, s]);
                    return $ ? o.createElement(n.Z, { style: [v.outerContainer, S ? v.hovered : void 0] }, o.createElement(n.Z, { onClick: Q, onMouseEnter: Y, onMouseLeave: J, style: v.contentContainer }, o.createElement(p.D, { id: `prompt_${I}`, onFullyVisible: X, position: "bottom", testID: `prompt_${I}` }), o.createElement(n.Z, { style: v.promptContainer }, e ? o.createElement(e, { style: v.icon }) : void 0, o.createElement(n.Z, { style: v.prompt }, o.createElement(c.ZP, { size: "body", weight: "normal" }, _), !!a && o.createElement(c.ZP, { style: v.promptTextStyle }, a))), o.createElement("input", { onChange: V, ref: A, style: { display: "none" }, type: "file" }))) : o.createElement(n.Z, { onClick: Q, onMouseEnter: Y, onMouseLeave: J, style: [v.deprecatedContainer, S ? v.hovered : void 0, F ? v.compact : void 0] }, o.createElement(p.D, { id: `prompt_${I}`, onFullyVisible: X, position: "bottom", testID: `prompt_${I}` }), o.createElement(n.Z, { style: v.deprecatedPrompt }, o.createElement(c.ZP, null, _)), e ? o.createElement(e, { style: v.deprecatedIcon }) : void 0);
                },
                v = i.default.create((e) => ({ outerContainer: { width: "100%" }, contentContainer: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, justifyContent: "center", alignItems: "flex-start", borderRadius: e.spaces.space16, cursor: "pointer", transition: "background-color 0.5s", overflow: "hidden" }, loadingBlock: { backgroundColor: "transparent" }, compact: { width: "45%" }, hovered: { backgroundColor: e.colors.gray50, borderRadius: e.spaces.space8 }, promptContainer: { flexDirection: "row", alignItems: "center" }, prompt: { marginStart: e.spaces.space8, flex: 1 }, promptTextStyle: { fontSize: e.fontSizes.headline2, color: e.colors.gray600 }, icon: { width: e.spaces.space24, height: e.spaces.space24, color: e.colors.gray800 }, deprecatedContainer: { width: 170, height: 130, padding: e.spaces.space16, justifyContent: "space-between", alignItems: "flex-start", backgroundColor: e.colors.activeFaintGray, borderRadius: e.borderRadii.large, cursor: "pointer", transition: "background-color 0.5s" }, deprecatedPrompt: { flexGrow: 1, textOverflow: "ellipsis" }, deprecatedIcon: { width: e.spaces.space20, height: e.spaces.space20, color: e.colors.link } }));
            var _ = a(619697);
            const x = (e) => {
                    const [t, a] = o.useState(e.children),
                        n = o.useRef(e.animationKey),
                        i = o.useRef(new r.Z.Value(0)).current;
                    return (
                        o.useEffect(() => {
                            r.Z.timing(i, { toValue: 1, duration: 300, useNativeDriver: !1 }).start();
                        }, [i]),
                        o.useEffect(() => {
                            n.current !== e.animationKey &&
                                ((n.current = e.animationKey),
                                r.Z.timing(i, { toValue: 0, duration: 150, useNativeDriver: !1 }).start(() => {
                                    a(e.children), r.Z.timing(i, { toValue: 1, duration: 150, useNativeDriver: !1 }).start();
                                }));
                        }, [e.children, e.animationKey, i]),
                        o.createElement(r.Z.View, { style: [{ opacity: i }, e.style] }, t)
                    );
                },
                Z = (e) => {
                    const { grokInput: t, isDefault: a } = (0, l.w)(),
                        i = o.useMemo(() => e.data.prompts.filter((e) => e.filter_key === t.filterKey), [t.filterKey, e.data.prompts]),
                        { promptElements: c } = o.useMemo(() => {
                            const t = P(i, e.numPromptsToShow ?? 4),
                                a = t.map(() => new r.Z.Value(0)),
                                n = a.map((e, t) => r.Z.timing(e, { toValue: 1, duration: 300, delay: 30 * t, useNativeDriver: !1 }));
                            r.Z.parallel(n).start();
                            const l = t.map((e, t) => {
                                const n = { opacity: a[t], transform: [{ translateY: a[t].interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) }] };
                                return o.createElement(r.Z.View, { key: e.prompt_id, style: [R.gridItem, n] }, o.createElement(E, { Icon: e.icon_name ? s[e.icon_name] : void 0, isDeepsearch: "Research" === e.filter_key, isImageEdit: "ImageEdit" === e.filter_key, isImageGen: "CreateImage" === e.filter_key, isReasoning: "Reasoning" === e.filter_key, label: e.display_body ?? "", prompt: e.prompt, promptId: e.prompt_id, sectionType: "FLOATING_CARD", toolOverrides: e.tool_overrides }));
                            });
                            return { animatedValues: a, promptElements: l };
                        }, [i, e.numPromptsToShow]);
                    return (a && !e.hasSelectedFilterKey) || 0 === c.length ? null : o.createElement(x, { animationKey: t.filterKey || "default", style: R.fadeContainer }, o.createElement(_.$, { data: e.data }, o.createElement(n.Z, { style: R.container }, c)));
                },
                I = (e) => {
                    const t = [...e];
                    for (let e = t.length - 1; e > 0; e--) {
                        const a = Math.floor(Math.random() * (e + 1)),
                            o = t[e];
                        (t[e] = t[a]), (t[a] = o);
                    }
                    return t;
                },
                P = (e, t) => {
                    const a = ["g3_image_edit_2"],
                        o = e.filter((e) => e.prompt_id && a.includes(e.prompt_id));
                    if (o.length >= t) return I(o).slice(0, t);
                    const r = t - o.length,
                        n = e.filter((e) => !(o.includes(e) || (e.prompt_id && a.includes(e.prompt_id))));
                    for (let e = 0; e < r && e < n.length; e++) o.push(n[e]);
                    return I(o);
                },
                R = i.default.create((e) => ({ container: { width: "100%", flexDirection: "column", alignItems: "stretch" }, gridItem: { alignItems: "flex-start", width: "100%" }, fadeContainer: { width: "100%" } }));
        },
        648536: (e, t, a) => {
            a.d(t, { L: () => v });
            var o = a(202784),
                r = a(400752),
                n = a(325686),
                i = a(731708),
                s = a(194504),
                l = a(530732),
                c = a(823161),
                p = a(992942),
                d = a(392237),
                m = a(420182),
                u = a(306677),
                g = a(952793),
                y = a(725405),
                h = a(125363),
                b = a(327597),
                f = a(919022),
                C = a(654917),
                k = a(623494),
                w = a(207683);
            const E = "rweb.highlightedPromptClicks",
                v = ({ data: e }) => {
                    const t = (0, h.v9)(f.ZP.selectLoggedInUser),
                        a = (0, r.Dv)(m.lZ),
                        d = (0, y.Z)(),
                        v = (0, h.I0)(),
                        x = (0, C.eX)(),
                        Z = (0, g.hC)("responsive_web_grok_show_citations"),
                        I = (0, g.JY)("responsive_web_grok_highlighted_prompt_clicks_until_fatigue", -1),
                        [P, R] = o.useState(I < 0),
                        [S, z] = o.useState(null),
                        T = o.useRef(!1);
                    o.useEffect(() => {
                        0 !== I &&
                            (I < 0 ||
                                a.get(E).then((t) => {
                                    const a = { ...(t || {}) };
                                    z(a);
                                    const o = e.prompts.some((e) => a[e.prompt_id] <= I);
                                    (t && !o) || R(!0);
                                }));
                    }, [I, R, a, e.prompts]);
                    const D = o.useCallback(
                        (t) => {
                            T.current || (0, k.az)(d, "impression", { promptId: t.prompt_id, prompt: t.prompt, sectionType: "HIGHLIGHTED_PROMPTS", allPrompts: e.prompts });
                        },
                        [d, e.prompts],
                    );
                    if (!P) return null;
                    const M = e.prompts.length;
                    return o.createElement(
                        n.Z,
                        { style: _.container },
                        (!!e.title || !!e.subtitle) && o.createElement(n.Z, { style: _.titleContainer }, !!e.title && o.createElement(i.ZP, { size: "headline2", weight: "bold" }, e.title), !!e.subtitle && o.createElement(i.ZP, { color: "gray600" }, e.subtitle)),
                        o.createElement(
                            s.Z,
                            { buttonsContainerStyle: _.promptsInnerContainer, childrenStyle: [M <= 1 ? _.singlePromptOuterContainer : _.multiplePromptOuterContainer], style: _.promptsContainer },
                            e.prompts.map((e) => {
                                const r = "DRAW_ME" === e.action && t && t.profile_image_url_https;
                                return o.createElement(
                                    l.Z,
                                    {
                                        key: e.prompt_id,
                                        onClick: () =>
                                            ((e) => {
                                                (0, k.az)(d, "click", { promptId: e.prompt_id ?? "", prompt: e.prompt, sectionType: "HIGHLIGHTED_PROMPTS", allPrompts: [e] }), v((0, b.u)({ analytics: d, conversationKey: x })({ text: e.prompt, returnCitations: Z, isDeepsearch: "Research" === e.filter_key, isReasoning: "Reasoning" === e.filter_key, imageGenerationCount: 4 }));
                                                const t = { ...(S || {}) };
                                                t[e.prompt_id] || (t[e.prompt_id] = 0), t[e.prompt_id]++, a.set(E, t);
                                            })(e),
                                        withoutInteractiveStyles: !0,
                                    },
                                    ({ isHovered: a }) => o.createElement(n.Z, { style: [_.promptContainer, a ? _.hoveredPromptContainer : void 0] }, o.createElement(u.D, { id: `prompt_${e.prompt_id}`, onFullyVisible: () => D(e), position: "bottom", testID: `prompt_${e.prompt_id}` }), r ? o.createElement(c.default, { shape: "circle", size: "xLarge", uri: t?.profile_image_url_https }) : e.image_url ? o.createElement(n.Z, { style: _.imgContainer }, o.createElement(p.Z, { resizeMode: "cover", source: e.image_url, style: _.img })) : void 0, o.createElement(n.Z, { style: _.infoContainer }, e.display_label && o.createElement(i.ZP, { size: "headline2", weight: "medium" }, e.display_label), e.display_body && o.createElement(i.ZP, { color: "gray700", size: "body", weight: "normal" }, o.createElement(w.GrokMarkdown, { isAnimated: !1, markdownText: e.display_body })))),
                                );
                            }),
                        ),
                    );
                },
                _ = d.default.create((e) => ({ container: { display: "flex", flexDirection: "column" }, titleContainer: { marginTop: e.spaces.space12, marginBottom: e.spaces.space16, display: "flex", flexDirection: "column", gap: e.spaces.space8 }, promptsContainer: { width: "100%" }, promptsInnerContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space16 }, promptContainer: { padding: e.spaces.space16, borderRadius: e.spaces.space16, display: "flex", flexDirection: "row", gap: e.spaces.space16, backgroundColor: e.colors.gray0, transition: "background-color 0.3s ease", alignItems: "center" }, singlePromptOuterContainer: { flex: 1 }, multiplePromptOuterContainer: { width: "max-content", minWidth: 150, maxWidth: 400 }, hoveredPromptContainer: { backgroundColor: e.colors.gray50 }, imgContainer: { alignSelf: "stretch", minHeight: 40, animationDuration: "0.5s", animationKeyframes: [{ "0%": { transform: "scale(0.9)", opacity: 0 }, "100%": { transform: "scale(1)", opacity: 1 } }], animationTimingFunction: "ease", animationIterationCount: 1, opacity: 1, aspectRatio: 1 }, img: { height: "100%", minWidth: 50, aspectRatio: 1, borderRadius: e.spaces.space8 }, infoContainer: { display: "flex", flex: 1, flexDirection: "column", gap: e.spaces.space4 }, iconContainer: { width: 14, height: 14 }, icon: { top: 3, width: 14, height: 14 } }));
        },
        781939: (e, t, a) => {
            a.d(t, { $: () => v });
            var o = a(202784),
                r = a(325686),
                n = a(392237),
                i = a(20716),
                s = a(988290),
                l = a(172016),
                c = a(731708),
                p = a(992942),
                d = a(306677),
                m = a(725405),
                u = a(125363),
                g = a(53939),
                y = a(327597),
                h = a(654917),
                b = a(305442),
                f = a(962379),
                C = a(623494);
            const k = ({ allPrompts: e, disableClick: t, imageUrl: a, imageUrl2x: i, label: k, prompt: E, promptId: v, sectionType: _, toolOverrides: x }) => {
                    const [Z, I] = o.useState(!1),
                        P = (0, m.Z)(),
                        R = (0, u.I0)(),
                        S = (0, h.eX)(),
                        { isCompactLayout: z } = (0, s.ZP)(),
                        { enabled: T } = (0, f.Z)(),
                        D = (0, b.Z)("image_block"),
                        M = o.useRef(!1),
                        F = o.useCallback(() => {
                            M.current || (0, C.az)(P, "impression", { promptId: v ?? "", prompt: E, sectionType: _, allPrompts: e ?? [] });
                        }, [P, v, E, _, e]),
                        O = o.useCallback(() => I(!0), []),
                        B = o.useCallback(() => I(!1), []),
                        L = o.useCallback(() => {
                            if (!t && ((0, C.az)(P, "click", { promptId: v ?? "", prompt: E, sectionType: _, allPrompts: e ?? [] }), R((0, y.u)({ analytics: P, conversationKey: S })({ text: E, returnCitations: !1, imageGenerationCount: D, toolOverrides: x })), "" !== v)) {
                                const e = "PRESET";
                                R((0, g.U)({ group_id: e, object_id: v ?? "", action_type: "CLICK" }));
                            }
                        }, [t, E, v, _, e, R, P, S, D, x]),
                        H = o.useMemo(() => ("light" === n.default.theme.paletteName ? [w.shadow, Z ? { opacity: 0.25 } : { opacity: 0 }] : [w.shadow, Z ? { opacity: 0 } : { opacity: 0.7 }]), [Z]),
                        K = o.useMemo(() => ("light" === n.default.theme.paletteName ? [w.shadow, Z ? { opacity: 0.25 } : { opacity: 0 }] : [w.shadow, Z ? { opacity: 0 } : { opacity: 0.5 }]), [Z]),
                        G = l.Z.get() > 1 ? i : a;
                    return T ? o.createElement(r.Z, { onClick: L, onMouseEnter: O, onMouseLeave: B, style: w.container }, o.createElement(d.D, { id: `prompt_${v ?? a}`, onFullyVisible: F, position: "bottom", testID: `prompt_${v ?? a}` }), o.createElement(r.Z, { style: w.prompt }, o.createElement(c.ZP, { numberOfLines: 2, size: "subtext2", style: w.promptText, weight: "medium" }, k)), o.createElement(r.Z, { style: K }), o.createElement(p.Z, { resizeMode: "cover", source: { uri: G }, style: w.image })) : o.createElement(r.Z, { onClick: L, onMouseEnter: O, onMouseLeave: B, style: [w.deprecatedContainer, z ? w.deprecatedCompact : void 0] }, o.createElement(r.Z, { style: w.deprecatedPrompt }, o.createElement(c.ZP, { size: "subtext1" }, k)), o.createElement(r.Z, { style: H }), o.createElement(p.Z, { resizeMode: "cover", source: { uri: G }, style: w.image }));
                },
                w = n.default.create((e) => ({ container: { height: 150, justifyContent: "space-between", alignItems: "flex-start", backgroundColor: e.colors.activeFaintGray, borderRadius: e.borderRadii.xLarge, borderColor: e.colors.gray50, borderWidth: "1px", borderStyle: "solid", overflow: "hidden", cursor: "pointer", flex: 1, grow: 1 }, prompt: { flexGrow: 1, textOverflow: "ellipsis", position: "absolute", bottom: e.spaces.space8, start: e.spaces.space8, maxWidth: "calc(100% - 20px)", zIndex: 10, transition: "opacity 0.3s", paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8, backgroundColor: "rgba(102, 102, 102, 0.3)", borderRadius: e.borderRadii.medium, borderWidth: e.spaces.space1, borderStyle: "solid", borderColor: "rgba(255,255, 255, 0.15)", backdropFilter: "blur(1px)" }, promptText: { color: "white" }, icon: { width: e.spaces.space20, height: e.spaces.space20, color: e.colors.link }, shadow: { position: "absolute", width: "100%", height: "100%", zIndex: 5, backgroundColor: e.colors.cellBackground, transition: "opacity 0.3s" }, image: { position: "absolute", width: "100%", height: "100%", zIndex: 1 }, deprecatedContainer: { width: 352, height: 220, justifyContent: "space-between", alignItems: "flex-start", backgroundColor: e.colors.activeFaintGray, borderRadius: e.borderRadii.large, overflow: "hidden", cursor: "pointer" }, deprecatedCompact: { width: `calc(90% + ${e.spaces.space12})` }, deprecatedPrompt: { flexGrow: 1, textOverflow: "ellipsis", position: "absolute", bottom: e.spaces.space12, start: e.spaces.space12, zIndex: 10, transition: "opacity 0.3s", paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space12, borderRadius: e.borderRadii.medium, backgroundColor: e.colors.cellBackground } }));
            var E = a(619697);
            const v = ({ data: e }) => {
                    const { isCompactLayout: t } = (0, s.ZP)(),
                        a = t ? 2 : 3,
                        n = o.useMemo(() => e.prompts.filter((e) => !!e.image_url), [e]),
                        l = (0, i.vN)(n, a);
                    return o.createElement(
                        E.$,
                        { data: e },
                        o.createElement(
                            r.Z,
                            { style: _.row },
                            l.map((t, a) => o.createElement(k, { allPrompts: l, imageUrl: t.image_url, imageUrl2x: t.image_url, key: t.prompt, label: t.display_label, prompt: t.prompt, promptId: t.prompt_id, sectionType: e.section_type ?? "NO_SECTION", toolOverrides: t.tool_overrides })),
                        ),
                    );
                },
                _ = n.default.create((e) => ({ row: { flexDirection: "row", justifyContent: "space-between", overflowX: "auto", flexWrap: "nowrap", gap: e.spaces.space16, width: "100%" } }));
        },
        619697: (e, t, a) => {
            a.d(t, { $: () => l });
            var o = a(202784),
                r = a(325686),
                n = a(731708),
                i = a(721266),
                s = a(392237);
            const l = ({ children: e, data: t }) => o.createElement(r.Z, { style: c.container }, !!t.title && o.createElement(o.Fragment, null, o.createElement(n.ZP, { size: "body", weight: "bold" }, t.title)), !!t.title && !!t.subtitle && o.createElement(i.Z, { size: "space8" }), !!t.subtitle && o.createElement(o.Fragment, null, o.createElement(n.ZP, { color: "gray500", size: "subtext1" }, t.subtitle)), t.title || t.subtitle ? o.createElement(i.Z, { size: "space16" }) : void 0, e),
                c = s.default.create((e) => ({ container: { width: "100%" } }));
        },
        158042: (e, t, a) => {
            a.d(t, { F: () => I });
            var o = a(202784),
                r = a(325686),
                n = a(194504),
                i = a(392237),
                s = a(20716),
                l = a(731708),
                c = a(721266),
                p = a(306677),
                d = a(952793),
                m = a(725405),
                u = a(125363),
                g = a(53939),
                y = a(327597),
                h = a(620988),
                b = a(764226),
                f = a(654917),
                C = a(962379),
                k = a(623494),
                w = a(988290);
            const E = ({ Icon: e, allPrompts: t, body: a, isDeepsearch: n, isImageEdit: i, isReasoning: s, label: E, prompt: _, promptAction: x, promptId: Z, sectionType: I, toolOverrides: P }) => {
                    const [R, S] = o.useState(!1),
                        z = (0, m.Z)(),
                        T = (0, u.I0)(),
                        D = (0, f.eX)(),
                        { isCompactLayout: M } = (0, w.ZP)(),
                        { selectedFiles: F } = (0, h.ZP)(),
                        O = (0, d.hC)("responsive_web_grok_show_citations"),
                        B = o.useMemo(() => Object.keys(F), [F]),
                        L = o.useMemo(() => B.map((e) => F[e]?.remote).filter(Boolean), [B, F]),
                        H = o.useRef(null),
                        { handleFileChange: K } = (0, b.J)({ analytics: z, isReturnCitations: O, prompt: _, promptId: Z }),
                        { enabled: G } = (0, C.Z)(),
                        N = o.useRef(!1),
                        j = o.useCallback(() => {
                            N.current || (0, k.az)(z, "impression", { promptId: Z ?? "", prompt: _, sectionType: I, allPrompts: t ?? [] });
                        }, [z, Z, _, I, t]),
                        W = o.useCallback(() => S(!0), []),
                        A = o.useCallback(() => S(!1), []),
                        V = o.useCallback(() => {
                            if (((0, k.az)(z, "click", { promptId: Z ?? "", prompt: _, sectionType: I, allPrompts: t ?? [] }), "UPLOAD" === x && H.current)) return void H.current.click();
                            let e = {};
                            if ((i && (e = { attachments: L, imageGenerationCount: 4, promptMetadata: { promptSource: "IMAGE_EDIT", action: "INPUT", properties: { imageUrl: L[0].url } } }), T((0, y.u)({ analytics: z, conversationKey: D })({ text: _, returnCitations: O, toolOverrides: P, isDeepsearch: n, isReasoning: s, ...e })), "" !== Z)) {
                                const e = "PRESET";
                                T((0, g.U)({ group_id: e, object_id: Z, action_type: "CLICK" }));
                            }
                        }, [_, Z, T, I, t, z, O, D, x, P, n, s, i, L]);
                    return G ? o.createElement(r.Z, { onClick: V, onMouseEnter: W, onMouseLeave: A, style: [v.container, R ? v.hovered : void 0] }, e ? o.createElement(o.Fragment, null, o.createElement(e, { style: v.icon }), o.createElement(c.Z, { size: "space8" })) : void 0, o.createElement(r.Z, { style: v.prompt }, o.createElement(l.ZP, { size: "body", weight: "medium" }, E), !!a && o.createElement(l.ZP, { color: "gray600", size: "body", weight: "normal" }, a)), o.createElement("input", { onChange: K, ref: H, style: { display: "none" }, type: "file" })) : o.createElement(r.Z, { onClick: V, onMouseEnter: W, onMouseLeave: A, style: [v.deprecatedContainer, R ? v.hovered : void 0, M ? v.compact : void 0] }, o.createElement(p.D, { id: `prompt_${Z}`, onFullyVisible: j, position: "bottom", testID: `prompt_${Z}` }), o.createElement(r.Z, { style: v.deprecatedPrompt }, o.createElement(l.ZP, null, E)), e ? o.createElement(e, { style: v.deprecatedIcon }) : void 0);
                },
                v = i.default.create((e) => ({ container: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, justifyContent: "center", alignItems: "flex-start", backgroundColor: e.colors.gray0, borderRadius: e.spaces.space12, cursor: "pointer", transition: "background-color 0.5s", overflow: "hidden", flex: 1, flexGrow: 1, shrink: 1, minWidth: 150, maxHeight: 68, minHeight: 68 }, loadingBlock: { backgroundColor: "transparent" }, compact: { width: "45%" }, hovered: { backgroundColor: e.colors.gray50 }, prompt: { textOverflow: "ellipsis", wrap: "wrap" }, icon: { width: e.spaces.space20, height: e.spaces.space20, shrink: 0, color: e.colors.gray900 }, deprecatedContainer: { width: 170, height: 130, padding: e.spaces.space16, justifyContent: "space-between", alignItems: "flex-start", backgroundColor: e.colors.activeFaintGray, borderRadius: e.borderRadii.large, cursor: "pointer", transition: "background-color 0.5s" }, deprecatedPrompt: { flexGrow: 1, textOverflow: "ellipsis" }, deprecatedIcon: { width: e.spaces.space20, height: e.spaces.space20, color: e.colors.link } }));
            var _ = a(619697);
            const x = ({ Icon: e, allPrompts: t, label: a, prompt: n, promptAction: i, promptId: s, sectionType: h, toolOverrides: C }) => {
                    const [w, E] = o.useState(!1),
                        v = (0, m.Z)(),
                        _ = (0, u.I0)(),
                        x = (0, f.eX)(),
                        I = (0, d.hC)("responsive_web_grok_show_citations"),
                        P = o.useRef(!1),
                        R = o.useRef(null),
                        { handleFileChange: S } = (0, b.J)({ analytics: v, isReturnCitations: I, prompt: n, promptId: s }),
                        z = o.useCallback(() => {
                            P.current || (0, k.az)(v, "impression", { promptId: s ?? "", prompt: n, sectionType: h, allPrompts: t });
                        }, [v, s, n, h, t]),
                        T = o.useCallback(() => E(!0), []),
                        D = o.useCallback(() => E(!1), []),
                        M = o.useCallback(() => {
                            if (((0, k.az)(v, "click", { promptId: s ?? "", prompt: n, sectionType: h, allPrompts: t }), "UPLOAD" === i && R.current)) R.current.click();
                            else if ((_((0, y.u)({ analytics: v, conversationKey: x })({ text: n, returnCitations: I, toolOverrides: C })), "" !== s)) {
                                const e = "PRESET";
                                _((0, g.U)({ group_id: e, object_id: s, action_type: "CLICK" }));
                            }
                        }, [n, s, h, t, i, _, v, I, x, C]);
                    return o.createElement(r.Z, { onClick: M, onMouseEnter: T, onMouseLeave: D, style: [Z.pill, w ? Z.hovered : void 0] }, !!e && o.createElement(o.Fragment, null, o.createElement(e, { style: Z.icon }), o.createElement(c.Z, { size: "space8" })), o.createElement(p.D, { id: `prompt_${s}`, onFullyVisible: z, position: "bottom", testID: `prompt_${s}` }), o.createElement(r.Z, { style: Z.prompt }, o.createElement(l.ZP, { size: "body", weight: "bold" }, a)), o.createElement("input", { onChange: S, ref: R, style: { display: "none" }, type: "file" }));
                },
                Z = i.default.create((e) => ({ pill: { backgroundColor: e.colors.gray0, paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, transition: "background-color 0.5s", borderRadius: e.spaces.space12, flexGrow: 1, shrink: 0, flexDirection: "row", justifyContent: "center", alignItems: "center" }, prompt: { textOverflow: "ellipsis" }, hovered: { backgroundColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray50, cursor: "pointer" }, icon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray800 } })),
                I = ({ data: e, style: t }) => {
                    const a = (0, s.vN)(e.prompts, 10);
                    return o.createElement(
                        _.$,
                        { data: e },
                        o.createElement(
                            n.Z,
                            { showNavButtonsOnHover: !1, style: P.carousel, withWraparound: !0 },
                            a.map((n, i) => o.createElement(r.Z, { key: n.prompt }, "pill" === t ? o.createElement(x, { Icon: (0, s.wG)(n.icon_name || "") || void 0, allPrompts: a, isDeepsearch: "research" === n.filter_key?.toLowerCase(), isReasoning: "reasoning" === n.filter_key?.toLowerCase(), label: n.display_label, prompt: n.prompt, promptAction: n.action, promptId: n.prompt_id, sectionType: e.section_type ?? "NO_SECTION", toolOverrides: n.tool_overrides }) : o.createElement(E, { Icon: (0, s.wG)(n.icon_name || "") || void 0, allPrompts: a, isDeepsearch: "research" === n.filter_key?.toLowerCase(), isImageEdit: "imageedit" === n.filter_key?.toLowerCase(), isReasoning: "reasoning" === n.filter_key?.toLowerCase(), label: n.display_label, prompt: n.prompt, promptAction: n.action, promptId: n.prompt_id, sectionType: e.section_type ?? "NO_SECTION", toolOverrides: n.tool_overrides }))),
                        ),
                    );
                },
                P = i.default.create((e) => ({ carousel: { width: "100%" } }));
        },
        49445: (e, t, a) => {
            a.d(t, { E: () => C });
            var o = a(202784),
                r = a(325686),
                n = a(392237),
                i = a(20716),
                s = a(988290),
                l = a(731708),
                c = a(992942),
                p = a(952793),
                d = a(725516),
                m = a(125363),
                u = a(327597),
                g = a(654917),
                y = a(962379);
            const h = ({ prompt: e, sectionType: t }) => {
                    const [a, n] = o.useState(!1),
                        i = (0, d.z)(),
                        h = (0, m.I0)(),
                        f = (0, g.eX)(),
                        { isCompactLayout: C, isGrokDrawer: k } = (0, s.ZP)(),
                        w = o.useCallback(() => n(!0), []),
                        E = o.useCallback(() => n(!1), []),
                        { enabled: v } = (0, y.Z)(),
                        _ = (0, p.hC)("responsive_web_grok_show_citations"),
                        x = o.useCallback(() => {
                            h((0, u.u)({ analytics: i, conversationKey: f })({ text: e.value, trendPromptIdStr: e.trendPromptIdStr, returnCitations: _ }));
                        }, [i, h, e, _, f]);
                    return v ? o.createElement(r.Z, { onClick: x, onMouseEnter: w, onMouseLeave: E, style: [b.container, a ? b.hovered : void 0, C ? b.full : b.compact] }, o.createElement(r.Z, { style: e.imageUrl ? b.textContentWithImage : b.textContentWithoutImage }, o.createElement(l.ZP, { numberOfLines: 2, size: "headline2", weight: "bold" }, e.header), o.createElement(l.ZP, { color: "gray700", numberOfLines: 1, size: "subtext1", weight: "normal" }, e.text)), !!e.imageUrl && o.createElement(c.Z, { source: e.imageUrl, style: b.image })) : o.createElement(r.Z, { onClick: x, onMouseEnter: w, onMouseLeave: E, style: [b.deprecatedContainer, a ? b.hovered : void 0, C && !k ? b.deprecatedCompact : void 0] }, o.createElement(r.Z, { style: b.deprecatedPrompt }, o.createElement(l.ZP, null, e.header)), o.createElement(l.ZP, { color: "gray500" }, e.text));
                },
                b = n.default.create((e) => ({ container: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space16, backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large, cursor: "pointer", transition: "background-color 0.5s", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, textContentWithImage: { maxWidth: "70%", gap: e.spaces.space8, grow: 1, wrap: "wrap", justifyContent: "center", paddingEnd: e.spaces.space16 }, textContentWithoutImage: { width: "100%", gap: e.spaces.space8 }, image: { grow: 0, objectFit: "cover", height: 84, width: 84, borderRadius: e.borderRadii.medium }, hovered: { backgroundColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray50 }, full: { width: "100%" }, compact: { width: "calc(50% - 8px)" }, deprecatedContainer: { width: 355, height: 130, padding: e.spaces.space16, justifyContent: "space-between", alignItems: "flex-start", backgroundColor: e.colors.activeFaintGray, borderRadius: e.borderRadii.large, cursor: "pointer", transition: "background-color 0.5s" }, deprecatedPrompt: { flexGrow: 1, textOverflow: "ellipsis" }, deprecatedCompact: { width: "45%" }, deprecatedIcon: { width: e.spaces.space20, height: e.spaces.space20, color: e.colors.link } }));
            var f = a(619697);
            const C = ({ data: e, prompts: t }) => {
                    const { isCompactLayout: a } = (0, s.ZP)(),
                        n = (0, i.vN)(t);
                    return o.createElement(
                        f.$,
                        { data: e },
                        o.createElement(
                            r.Z,
                            { style: a ? k.mobileRow : k.row },
                            n.map((e) => o.createElement(h, { key: e.value, prompt: e })),
                        ),
                    );
                },
                k = n.default.create((e) => ({ row: { flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap", gap: e.spaces.space16, width: "calc(100% + 16px)", marginStart: "-8px" }, mobileRow: { flexDirection: "column", alignItems: "stretch", gap: e.spaces.space16, width: "100%" } }));
        },
        300458: (e, t, a) => {
            a.d(t, { U: () => z });
            var o = a(202784),
                r = a(400752),
                n = a(987809),
                i = a(325686),
                s = a(67369),
                l = a(138099),
                c = a(154003),
                p = a(731708),
                d = a(466792),
                m = a(721266),
                u = a(392237),
                g = a(483054),
                y = a(295559),
                h = a(111677),
                b = a.n(h),
                f = a(837020),
                C = a(956272),
                k = a(408814),
                w = a(928831),
                E = a(764326),
                v = a(701311);
            const _ = b().hf9afab0,
                x = b().ef3b3f04,
                Z = b().b43636b8,
                I = b().j376298c,
                P = b().e3584f8e,
                R = b().d91b7b8a,
                S = (0, n.O4)("hideGrokPromoBanner_17", !1, void 0, { getOnInit: !0 }),
                z = ({ onClose: e }) => {
                    const { grokModeButtonStatusKey: t, grokModeButtons: a } = (0, w.w)(),
                        [n, g] = o.useState("search"),
                        [y, h] = (0, r.KO)(S),
                        b = o.useRef(null),
                        E = (0, s.yu)(),
                        z = () => {
                            h(!0), e();
                        };
                    o.useEffect(() => ((b.current = setTimeout(() => g("think"), 4e3)), () => clearTimeout(b.current)), [g]);
                    const D = o.useCallback(() => {
                            b.current && clearTimeout(b.current);
                        }, []),
                        M = a.find((e) => ("Research" === e.filter_key && "Enabled" === e[t]) || ("Research" === e.filter_key && "Disabled" === e[t])),
                        F = a.find((e) => ("Reasoning" === e.filter_key && "Enabled" === e[t]) || ("Research" === e.filter_key && "Disabled" === e[t]));
                    return !y && M && F
                        ? o.createElement(
                              l.Z,
                              { maskStyle: T.sheetMask, onMaskClick: z, type: "full", withMask: !0 },
                              o.createElement(
                                  i.Z,
                                  { style: [T.modalContainer, E ? T.mobileSpacing : null] },
                                  o.createElement(i.Z, { style: T.topBar }, o.createElement(c.ZP, { backgroundColor: "transparent", borderColor: "transparent", icon: o.createElement(f.default, null), onClick: z, size: "small" }), o.createElement(i.Z, { style: [T.titleSection, E ? T.titleSectionMobile : void 0] }, o.createElement(p.ZP, { size: "title2", weight: "bold" }, Z), o.createElement(p.ZP, { size: "body", weight: "medium" }, I))),
                                  o.createElement(
                                      i.Z,
                                      { style: [T.wrapperBox, E ? T.wrapperBoxMobile : void 0] },
                                      o.createElement(
                                          i.Z,
                                          { style: T.wrapperInnerBox },
                                          o.createElement(d.Z, null, ({ isHovered: e }) =>
                                              o.createElement(
                                                  i.Z,
                                                  { style: T.mockInput },
                                                  o.createElement(i.Z, { style: { minHeight: 40 } }, o.createElement(p.ZP, { size: "body", weight: "medium" }, "search" === n && o.createElement(v.Z, { text: P }), "think" === n && o.createElement(v.Z, { text: R }))),
                                                  o.createElement(
                                                      i.Z,
                                                      { style: T.buttonRow },
                                                      o.createElement(
                                                          c.ZP,
                                                          {
                                                              backgroundColor: "gray100",
                                                              borderColor: "transparent",
                                                              color: "search" === n ? "blue500" : "gray900",
                                                              onClick: () => {
                                                                  D(), g("search");
                                                              },
                                                              size: "smallCompact",
                                                              style: [T.button, "search" === n ? T.highlightedButton : null],
                                                          },
                                                          o.createElement(C.default, { style: T.icon }),
                                                          o.createElement(m.Z, { size: "space4" }),
                                                          o.createElement(p.ZP, { size: "subtext2", style: T.appText, weight: "medium" }, M?.label || ""),
                                                      ),
                                                      o.createElement(
                                                          c.ZP,
                                                          {
                                                              backgroundColor: "gray100",
                                                              borderColor: "transparent",
                                                              color: "think" === n ? "blue500" : "gray900",
                                                              onClick: () => {
                                                                  D(), g("think");
                                                              },
                                                              size: "smallCompact",
                                                              style: [T.button, "think" === n ? T.highlightedButton : null],
                                                          },
                                                          o.createElement(k.default, { style: T.reasoningIcon }),
                                                          o.createElement(m.Z, { size: "space4" }),
                                                          o.createElement(p.ZP, { size: "subtext2", style: T.appText, weight: "medium" }, F?.label || ""),
                                                      ),
                                                  ),
                                              ),
                                          ),
                                          o.createElement(i.Z, { style: T.descriptionContainer }, o.createElement(p.ZP, { size: "body", weight: "medium" }, "think" === n ? x : _)),
                                      ),
                                  ),
                                  o.createElement(
                                      i.Z,
                                      { style: [T.navRow, E ? T.pushToEnd : void 0] },
                                      o.createElement(d.Z, null, ({ isHovered: e }) => o.createElement(i.Z, { onClick: z, style: [T.ctaButton, e ? T.ctaButtonHovered : void 0] }, o.createElement(p.ZP, { color: "light" === u.default.theme.paletteName ? "white" : "alwaysBlack", size: "body", weight: "bold" }, "Try it"))),
                                  ),
                              ),
                          )
                        : null;
                },
                T = u.default.create((e) => {
                    return {
                        modalContainer: { border: `solid 1px ${e.colors.gray100}`, backgroundColor: e.colors.navigationBackground, paddingVertical: e.spaces.space24, gap: e.spaces.space32, overflow: "hidden", borderRadius: e.spaces.space24 },
                        mobileSpacing: { border: "none", borderWidth: 0, gap: e.spaces.space24, flex: 1 },
                        topBar: { width: "100%", alignItems: "flex-end", paddingHorizontal: e.spaces.space24 },
                        titleSection: { gap: e.spaces.space16, paddingHorizontal: e.spaces.space32, alignSelf: "stretch" },
                        titleSectionMobile: { paddingHorizontal: 0 },
                        mockInput: { padding: e.spaces.space24, backgroundColor: "light" === e.paletteName ? e.colors.gray0 : e.colors.gray50, borderTopStartRadius: e.spaces.space24, borderBottomStartRadius: e.spaces.space24, gap: e.spaces.space20, marginStart: e.spaces.space32, marginBottom: e.spaces.space48, minWidth: `calc(100% - ${e.spaces.space32})`, position: "relative", borderWidth: 1, borderStyle: "solid", borderColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray300, borderEnd: "none", borderEndWidth: 0 },
                        button: { ...E.il },
                        buttonRow: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" },
                        highlightedButton: { backgroundColor: "rgba(29, 155, 240, 0.2)" },
                        icon: { ...E.Qs },
                        appText: { color: "inherit" },
                        reasoningIcon: { ...E.Qs, fill: "none" },
                        descriptionContainer: { paddingHorizontal: e.spaces.space32 },
                        navRow: { flexDirection: "row", gap: e.spaces.space4, justifyContent: "center", alignItems: "center" },
                        pushToEnd: { flex: 1, alignItems: "stretch", flexDirection: "column", justifyContent: "flex-end", paddingHorizontal: e.spaces.space24, paddingBottom: e.spaces.space16 },
                        circleIcon: { height: e.spaces.space12, width: e.spaces.space12 },
                        floatingIcon: { position: "absolute", end: 8, top: "50%", transform: "translateY(-50%)", zIndex: 5 },
                        sheetMask: { backgroundColor: D("#111111", 0.5), backdropFilter: "blur(4px)" },
                        wrapperBox: { backgroundColor: "light" === e.paletteName ? e.colors.gray50 : e.colors.gray0, borderRadius: e.spaces.space32, justifyContent: "center", marginHorizontal: e.spaces.space56, paddingTop: e.spaces.space64, paddingBottom: e.spaces.space48 },
                        wrapperBoxMobile: { marginHorizontal: e.spaces.space24 },
                        wrapperInnerBox: {},
                        ctaButton: { height: u.default.theme.spaces.space48, paddingHorizontal: u.default.theme.spaces.space64, flexDirection: "row", transitionDuration: "200ms", alignItems: "center", justifyContent: "center", backgroundColor: "light" === e.paletteName ? e.colors.alwaysBlack : e.colors.white, borderRadius: e.spaces.space8, cursor: "pointer" },
                        ctaButtonHovered: { backgroundColor: "light" === e.paletteName ? ((t = e.colors.alwaysBlack), (a = 0.1), (0, y.rb)((0, g.$n)({ color: (0, y.xO)(t), coefficient: a }))) : M(e.colors.white, 0.1) },
                    };
                    var t, a;
                });
            function D(e, t) {
                const a = (0, y.xO)(e),
                    o = (0, g.oL)({ color: a, percent: t, replace: !0 });
                return (0, y.rb)(o);
            }
            function M(e, t) {
                return (0, y.rb)((0, g._j)({ color: (0, y.xO)(e), coefficient: t }));
            }
        },
        376856: (e, t, a) => {
            a.d(t, { Z: () => w });
            var o = a(202784),
                r = a(325686),
                n = a(815858),
                i = a(721266),
                s = a(392237),
                l = a(111677),
                c = a.n(l),
                p = a(542832),
                d = a(323265),
                m = a(952793),
                u = a(464023),
                g = a(962379),
                y = a(791786),
                h = a(928831),
                b = a(442955),
                f = a(300458),
                C = a(796064);
            const k = c().j22655f2;
            function w({ access: e, conversationKey: t }) {
                const a = (0, m.hC)("responsive_web_grok_promo_banner"),
                    { layout: s } = (0, g.Z)(),
                    l = s?.sections || [],
                    { filterKey: c, hasSelectedFilterKey: d, isInputFocused: u } = (0, h.w)(),
                    [w, E] = o.useState(!0),
                    _ = d && l.some((e) => "FLOATING_CARD" === e.section_type && e.prompts?.some((e) => e.filter_key === c)),
                    x = o.useRef(null);
                return o.createElement(
                    n.Z,
                    { show: !!s, type: "fade" },
                    w &&
                        a &&
                        o.createElement(f.U, {
                            onClose: () => {
                                E(!1);
                            },
                        }),
                    o.createElement(
                        r.Z,
                        { style: v.container },
                        o.createElement(
                            r.Z,
                            { style: v.grokContainer },
                            o.createElement(
                                r.Z,
                                { style: v.searchContainer },
                                o.createElement(p.default, { style: v.logo }),
                                o.createElement(i.Z, { size: "space56" }),
                                o.createElement(y.Z, {
                                    conversationKey: t,
                                    hasAccess: !1 !== e && "restricted" !== e,
                                    inputAtHome: !0,
                                    isIdle: !0,
                                    onFieldTextInputRef: (e) => {
                                        x.current = e;
                                    },
                                    placeholder: k,
                                    useDraftPersistence: !0,
                                }),
                            ),
                            _
                                ? o.createElement(b.V, { hasSelectedFilterKey: d, isFocusingInput: u })
                                : o.createElement(C.ZP, {
                                      focusInput: () => {
                                          x.current && x.current.focus();
                                      },
                                      isMobile: !1,
                                      style: v.presets,
                                  }),
                        ),
                    ),
                );
            }
            const E = !!d.ZP.isWebView(),
                v = s.default.create((e) => ({ container: { width: "100%", overflowX: "hidden", overflowY: "auto", alignItems: "center", paddingBottom: 64, gap: e.spaces.space24, paddingTop: "22vh" }, grokContainer: { maxWidth: u.vf, width: "100%", padding: e.spaces.space16 }, bottomContainer: { position: "sticky", backgroundColor: e.colors.appBarBackground, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, paddingBottom: 14, bottom: E ? 0 : e.componentDimensions.appBarHeightPx, width: "100%", borderTopStartRadius: e.spaces.space24, borderTopEndRadius: e.spaces.space24 }, searchContainer: { alignItems: "center", width: "100%", zIndex: 1e3 }, logo: { height: 70, width: 194 }, presets: { marginTop: e.spaces.space16, width: "100%" } }));
        },
        961614: (e, t, a) => {
            a.d(t, { Z: () => k });
            var o = a(202784),
                r = a(325686),
                n = a(721266),
                i = a(731708),
                s = a(392237),
                l = a(111677),
                c = a.n(l),
                p = a(464023),
                d = a(654917),
                m = a(962379),
                u = a(791786),
                g = a(928831),
                y = a(892451),
                h = a(158042),
                b = a(796064),
                f = a(701311);
            const C = c().ia5bef3e;
            function k() {
                const { access: e, conversationKey: t } = (0, d.ZP)(),
                    { filterKey: a, hasSelectedFilterKey: s } = (0, g.w)(),
                    { layout: l } = (0, m.Z)(),
                    p = o.useRef(null),
                    k = s && l?.sections.some((e) => "FLOATING_CARD" === e.section_type && e.prompts?.some((e) => e.filter_key === a));
                return o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(
                        r.Z,
                        { style: w.container },
                        o.createElement(
                            r.Z,
                            { style: w.grokContainer },
                            o.createElement(
                                r.Z,
                                { style: w.searchContainer },
                                o.createElement(n.Z, { size: "space24" }),
                                o.createElement(i.ZP, { align: "center", size: "title3", weight: "medium" }, o.createElement(f.Z, { text: C })),
                                o.createElement(n.Z, { size: "space48" }),
                                o.createElement(u.Z, {
                                    conversationKey: t,
                                    hasAccess: !1 !== e && "restricted" !== e,
                                    inputAtHome: !0,
                                    isIdle: !0,
                                    onFieldTextInputRef: (e) => {
                                        p.current = e;
                                    },
                                    placeholder: c().j22655f2,
                                    useDraftPersistence: !0,
                                }),
                            ),
                            o.createElement(n.Z, { size: "space16" }),
                            k && l
                                ? o.createElement(
                                      r.Z,
                                      { style: w.moduleContainer },
                                      l.sections.map((e, t) => ("TEXT_CARD" === e.section_type ? o.createElement(h.F, { data: e, key: t, style: "block" }) : "FLOATING_CARD" === e.section_type ? o.createElement(y.u, { data: e, hasSelectedFilterKey: s, key: t }) : void 0)),
                                  )
                                : o.createElement(b.ZP, {
                                      focusInput: () => {
                                          p.current && p.current.focus();
                                      },
                                      isMobile: !1,
                                      style: w.presets,
                                  }),
                        ),
                    ),
                );
            }
            const w = s.default.create((e) => ({ grokContainer: { maxWidth: p.vf, width: "100%", padding: e.spaces.space8 }, container: { width: "100%", height: "100%", alignItems: "center", overflow: "auto", gap: e.spaces.space24 }, searchContainer: { alignItems: "center", width: "100%" }, moduleContainer: { gap: e.spaces.space24 }, presets: { width: "100%" } }));
        },
        970205: (e, t, a) => {
            a.d(t, { Z: () => s });
            var o = a(202784),
                r = a(491915),
                n = a(392237);
            const i = JSON.parse(
                '{"v":"5.5.2","nm":"grok-thinking","ddd":0,"assets":[],"w":1024,"h":988,"ip":0,"op":78,"fr":30,"fonts":{"list":[]},"layers":[{"ty":4,"st":0,"ip":0,"op":123,"ks":{},"shapes":[{"ty":"gr","it":[{"ty":"rc","p":{"a":0,"k":[569.810595,241.714867]},"s":{"a":0,"k":[1139.62119,483.429734]},"r":{"a":0,"k":0},"d":1},{"ty":"fl","o":{"a":0,"k":100},"c":{"a":0,"k":[0,0,0]}},{"ty":"tr","o":{"a":0,"k":100},"a":{"a":0,"k":[569.810595,241.714867]},"p":{"a":1,"k":[{"t":0,"s":[113.733773,564.995966],"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"t":15,"s":[113.733773,564.995966],"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"t":36,"s":[-676.07,1442.39],"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"t":57,"s":[113.733773,564.995966],"i":{"x":1,"y":1},"o":{"x":0,"y":0}}]},"s":{"a":0,"k":[137.4256,99.6022]},"r":{"a":0,"k":-45.378203}}]}],"ind":4,"parent":3,"td":1},{"ty":4,"st":0,"ip":0,"op":123,"ks":{"a":{"a":0,"k":[512,551.470657]},"p":{"a":0,"k":[512,551.470657]},"s":{"a":0,"k":[85.8824,85.8824]}},"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"sh","ks":{"a":0,"k":{"v":[[325.226,695.251],[328.285,301.668],[634.026,240.596],[749.454,186.994],[671.424,144.2],[255.323,228.382],[171.613,646.833],[71.7385,904.916],[0,987.429],[325.139,695.339]],"i":[[0,0],[-101.623,102.108],[-107.477,-45.342],[0,0],[30.583,11.423],[112.37,-112.917],[-58.369,-142.618],[72.0005,-76.098],[20.6216,-28.559],[0,0]],"o":[[-119.098,-114.411],[75.146,-75.571],[0,0],[-20.797,-15.114],[-138.234,-57.2058],[-108.089,108.699],[43.603,106.59],[-25.5148,26.977],[0,0],[0,0]],"c":false}}},{"ty":"fl","o":{"a":0,"k":100},"c":{"a":0,"k":[0.392157,0.392157,0.388235]}},{"ty":"tr","o":{"a":0,"k":100},"a":{"a":0,"k":[374.72699,551.468048]},"p":{"a":0,"k":[374.72699,551.468048]}}]},{"ty":"tr","o":{"a":0,"k":100}}]}],"ind":3,"tt":1,"tp":4},{"ty":4,"st":0,"ip":0,"op":123,"ks":{},"shapes":[{"ty":"gr","it":[{"ty":"rc","p":{"a":0,"k":[582.994165,168.286976]},"s":{"a":0,"k":[1165.988329,336.573951]},"r":{"a":0,"k":0},"d":1},{"ty":"fl","o":{"a":0,"k":100},"c":{"a":0,"k":[0,0,0]}},{"ty":"tr","o":{"a":0,"k":100},"a":{"a":0,"k":[582.994164,168.286975]},"p":{"a":1,"k":[{"t":0,"s":[805.657936,505.258749],"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"t":15,"s":[805.657936,505.258749],"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"t":36,"s":[1622.776687,-337.800281],"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"t":57,"s":[805.657936,505.258749],"i":{"x":1,"y":1},"o":{"x":0,"y":0}}]},"s":{"a":0,"k":[110.4386,134.7241]},"r":{"a":0,"k":-48.435236}}]}],"ind":2,"parent":1,"td":1},{"ty":4,"st":0,"ip":0,"op":123,"ks":{"a":{"a":0,"k":[512,494]},"p":{"a":0,"k":[512,494]},"s":{"a":0,"k":[85.8824,85.8824]}},"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"sh","ks":{"a":0,"k":{"v":[[395.479,633.828],[735.91,381.105],[784.406,392.792],[724.288,699.996],[419.247,760.277],[303.556,814.143],[796.901,773.282],[898.785,412.476],[899.047,412.739],[1016.4,10.6326],[1024,0],[883.144,141.651],[883.144,141.212],[395.392,633.916]],"i":[[0,0],[0,0],[-7.952,-19.244],[83.273,-83.743],[105.904,41.827],[0,0],[-125.914,126.713],[28.923,123.461],[0,0],[-107.042,148.2414],[-2.53,3.60279],[0,0],[0,0],[0,0]],"o":[[0,0],[16.689,-12.39],[41.854,101.493],[-83.272,83.743],[0,0],[165.934,114.059],[99.875,-100.439],[0,0],[-41.942,-181.369],[2.53,-3.51489],[0,0],[0,0],[0,0],[0,0]],"c":false}}},{"ty":"fl","o":{"a":0,"k":100},"c":{"a":0,"k":[0.392157,0.392157,0.388235]}},{"ty":"tr","o":{"a":0,"k":100},"a":{"a":0,"k":[663.777985,442.921814]},"p":{"a":0,"k":[663.777985,442.921814]}}]},{"ty":"tr","o":{"a":0,"k":100}}]}],"ind":1,"tt":1,"tp":2},{"ty":4,"st":0,"ip":0,"op":123,"ks":{"a":{"a":0,"k":[562.691091,556.173434]},"p":{"a":0,"k":[541.363613,533.491393]}},"shapes":[{"ty":"rc","p":{"a":0,"k":[562.691092,556.173434]},"s":{"a":0,"k":[1125.382183,1112.346868]},"r":{"a":0,"k":0},"d":1}]}]}',
            );
            function s({ loop: e = !0, style: t }) {
                return o.createElement(r.ZP, { animation: i, animationContainerStyle: [l.animationContainer, t], autoplay: !0, loop: e, withControls: !1 });
            }
            const l = n.default.create((e) => ({ animationContainer: { width: e.spaces.space24, height: e.spaces.space24 } }));
        },
        200179: (e, t, a) => {
            a.d(t, { Z: () => R });
            var o = a(202784),
                r = a(325686),
                n = a(721266),
                i = a(392237),
                s = a(111677),
                l = a.n(s),
                c = a(99223),
                p = a(323265),
                d = a(952793),
                m = a(125363),
                u = a(389071),
                g = a(931292),
                y = a(962379),
                h = a(791786),
                b = a(928831),
                f = a(892451),
                C = a(300458),
                k = a(796064),
                w = a(731708),
                E = a(530732),
                v = a(715614);
            const _ = l().ebea5880;
            function x({ conversationHistory: e, style: t }) {
                const a = o.useMemo(() => e.slice(0, 3), [e]);
                return a.length
                    ? o.createElement(
                          r.Z,
                          { style: [Z.container, t] },
                          o.createElement(r.Z, { style: Z.headerContainer }, o.createElement(v.default, { style: Z.headerIcon }), o.createElement(w.ZP, { style: Z.headerText }, _)),
                          o.createElement(
                              r.Z,
                              { style: Z.conversationListContainer },
                              a.map((e) => o.createElement(E.Z, { key: `recent-conversation-${e.grokConversation.rest_id}`, link: `/i/grok?conversation=${e.grokConversation.rest_id}`, onClick: () => {}, style: Z.conversationItemContainer, withoutInteractiveStyles: !0 }, o.createElement(w.ZP, { numberOfLines: 1, style: Z.conversationItemText, weight: "medium" }, e.title))),
                          ),
                      )
                    : null;
            }
            const Z = i.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space12, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(10px)" }, "100%": { opacity: 1, transform: "translateY(0)" } }], animationTimingFunction: "ease", animationFillMode: "both" }, headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, color: e.colors.gray800 }, headerIcon: { width: e.spaces.space16, height: e.spaces.space16, color: "inherit" }, headerText: { fontSize: e.fontSizes.subtext2, color: "inherit" }, conversationListContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, conversationItemContainer: { display: "flex", maxWidth: "100%", width: "max-content", backgroundColor: e.colors.gray0, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12, borderRadius: e.spaces.space12, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray100 }, conversationItemText: { color: e.colors.gray900, fontSize: e.fontSizes.subtext1 } }));
            var I = a(213103);
            const P = l().j22655f2;
            function R({ access: e, conversationKey: t }) {
                const a = (0, m.I0)(),
                    i = (0, d.hC)("responsive_web_grok_promo_banner"),
                    s = (0, d.hC)("responsive_web_grok_show_android_promo_banner"),
                    { layout: l } = (0, y.Z)(),
                    { filterKey: p, hasSelectedFilterKey: w, hasValue: E, isInputFocused: v } = (0, b.w)(),
                    [_, Z] = o.useState(!0),
                    R = (0, m.v9)(u.bv),
                    S = (0, m.v9)(u.JE),
                    T = o.useRef(null);
                o.useEffect(() => {
                    a((0, g.A)());
                }, [a]);
                const D = "ImageEdit" === p || "CreateImage" === p,
                    M = l?.sections.find((e) => "FLOATING_CARD" === e.section_type),
                    F = M?.prompts?.some((e) => e.filter_key === p),
                    O = () => {
                        T.current && T.current.focus();
                    };
                return o.createElement(
                    o.Fragment,
                    null,
                    w && !F
                        ? o.createElement(r.Z, { style: z.logoContainer }, o.createElement(c.default, { style: z.logo }))
                        : v
                          ? o.createElement(r.Z, { style: z.container })
                          : o.createElement(
                                r.Z,
                                { style: z.container },
                                _ &&
                                    i &&
                                    o.createElement(C.U, {
                                        onClose: () => {
                                            Z(!1);
                                        },
                                    }),
                                s && o.createElement(I.t, null),
                            ),
                    o.createElement(
                        r.Z,
                        { style: z.bottomContainer },
                        E ? null : w ? (M && F ? o.createElement(o.Fragment, null, o.createElement(f.u, { data: M, hasSelectedFilterKey: w, numPromptsToShow: 2 }), o.createElement(n.Z, { axis: "y", size: D ? "space40" : "space12" })) : null) : o.createElement(r.Z, { style: z.idleContent }, "loaded" === S && !v && o.createElement(x, { conversationHistory: R, style: z.recentConversations }), o.createElement(k.ZP, { focusInput: O, isMobile: !0, style: z.presets })),
                        o.createElement(h.Z, {
                            conversationKey: t,
                            hasAccess: !1 !== e && "restricted" !== e,
                            inputAtBottom: !0,
                            inputAtHome: !0,
                            isIdle: !0,
                            onFieldTextInputRef: (e) => {
                                T.current = e;
                            },
                            placeholder: P,
                            useDraftPersistence: !0,
                        }),
                    ),
                );
            }
            const S = !!p.ZP.isWebView(),
                z = i.default.create((e) => ({ container: { width: "100%", overflowX: "hidden", overflowY: "auto", alignItems: "center", paddingBottom: e.spaces.space64, gap: e.spaces.space24, paddingHorizontal: e.spaces.space12 }, logoContainer: { display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: "5vh", width: "100%", animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(-20px)" }, "100%": { opacity: 1, transform: "translateY(0)" } }], animationTimingFunction: "ease", animationFillMode: "both" }, logo: { height: 100, width: 100, color: e.colors.gray50 }, bottomContainer: { position: "sticky", backgroundColor: e.colors.appBarBackground, paddingVertical: e.spaces.space8, paddingBottom: 14, bottom: S ? 0 : e.componentDimensions.appBarHeightPx, width: "100%", borderTopStartRadius: e.spaces.space24, borderTopEndRadius: e.spaces.space24, paddingHorizontal: e.spaces.space12 }, idleContent: { width: "100%" }, recentConversations: { width: "100%", marginBottom: e.spaces.space12 }, presets: { width: "100%", marginBottom: e.spaces.space12 } }));
        },
        213103: (e, t, a) => {
            a.d(t, { t: () => y });
            var o = a(202784),
                r = a(325686),
                n = a(731708),
                i = a(154003),
                s = a(392237),
                l = a(111677),
                c = a.n(l),
                p = a(99223),
                d = a(952793);
            const m = c().acc4496c,
                u = c().jd36d190,
                g = c().e0aa5848;
            function y() {
                const [e, t] = o.useState(!1),
                    a = o.useCallback(() => t(!0), []),
                    s = o.useCallback(() => t(!1), []),
                    l = (0, d.hC)("responsive_web_grok_new_home_layout");
                return o.createElement(
                    r.Z,
                    {
                        onClick: () => {
                            window.location.href = "https://play.google.com/store/apps/details?id=ai.x.grok&utm_source=x&utm_campaign=grok_android_banner_voice_mode";
                        },
                        onMouseEnter: a,
                        onMouseLeave: s,
                        style: [h.notificationBanner, l ? void 0 : h.oldNotificationBanner, e ? h.hovered : void 0],
                    },
                    o.createElement(p.default, { style: h.icon }),
                    o.createElement(r.Z, { style: h.body }, o.createElement(r.Z, null, o.createElement(n.ZP, { weight: "bold" }, m)), o.createElement(n.ZP, { color: "gray800", size: "subtext2", weight: "normal" }, u)),
                    o.createElement(i.ZP, { style: h.rightButton, type: "primaryFilled" }, g),
                );
            }
            const h = s.default.create((e) => ({ notificationBanner: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space16, borderRadius: e.spaces.space16, backgroundColor: e.colors.gray50, cursor: "pointer", transition: "background-color 0.5s", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space12, width: "100%", animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(-20px)" }, "100%": { opacity: 1, transform: "translateY(0)" } }], animationTimingFunction: "ease", animationFillMode: "both" }, oldNotificationBanner: { backgroundColor: e.colors.gray0 }, hovered: { backgroundColor: e.colors.gray100 }, body: { flexGrow: 1, flexShrink: 1, gap: 4 }, icon: { minHeight: 36, minWidth: 36, flexShrink: 0 }, rightButton: { flexShrink: 0 } }));
        },
        83524: (e, t, a) => {
            a.d(t, { I: () => s });
            a(136728);
            var o = a(202784),
                r = a(325686),
                n = a(666305),
                i = a(392237);
            const s = () => {
                    const e = o.useRef(null),
                        t = o.useRef(null),
                        a = o.useRef(null);
                    return (
                        o.useEffect(() => {
                            const o = e.current,
                                r = t.current;
                            if (!o || !r) return;
                            const i = o.getContext("2d");
                            if (!i) return;
                            const s = [];
                            let l = [];
                            let c = 0;
                            const p = () => {
                                    const e = r.getBoundingClientRect();
                                    (o.width = e.width), (o.height = e.height), d(800, !0);
                                },
                                d = (e, t) => {
                                    for (let a = 0; a < e; a++) {
                                        const e = Math.random() * Math.PI * 2,
                                            a = Math.random() * Math.max(o.width, o.height) * 2 + 500;
                                        s.push({ x: 0, y: 0, radius: Math.random() + 0.5, opacity: t ? 0.5 * Math.random() + 0.5 : 0, twinkleSpeed: 1e-4 + 0.01 * Math.random(), angle: e, distance: a });
                                    }
                                };
                            p(), n.Z.observe(r, p);
                            const m = () => {
                                i.clearRect(0, 0, o.width, o.height), s.length < 3e3 && d(1, !1), (c += 1e-4);
                                const e = o.width + 0.1 * o.height,
                                    t = o.height + 0.5 * o.height;
                                s.forEach((a) => {
                                    const o = a.angle + c;
                                    (a.x = e + Math.cos(o) * a.distance), (a.y = t + Math.sin(o) * a.distance), (a.opacity += a.twinkleSpeed), (a.opacity > 1 || a.opacity < 0.6) && (a.twinkleSpeed = -a.twinkleSpeed);
                                    const r = i.createRadialGradient(a.x, a.y, 0, a.x, a.y, 2 * a.radius);
                                    r.addColorStop(0, `rgba(255, 255, 255, ${a.opacity})`), r.addColorStop(0.5, `rgba(255, 255, 255, ${0.5 * a.opacity})`), r.addColorStop(1, "rgba(255, 255, 255, 0)"), i.beginPath(), i.arc(a.x, a.y, 2 * a.radius, 0, 2 * Math.PI), (i.fillStyle = r), i.fill();
                                }),
                                    Math.random() < 0.001 && l.length < 3 && l.push({ x: Math.random() * o.width, y: -50, length: 120 + 120 * Math.random(), speed: 3 + 1 * Math.random(), opacity: 0.9 }),
                                    (l = l.filter((e) => {
                                        (e.x -= e.speed), (e.y += e.speed), (e.opacity -= 0.01);
                                        const t = i.createLinearGradient(e.x, e.y, e.x + 0.707 * e.length, e.y - 0.707 * e.length);
                                        t.addColorStop(0, `rgba(255, 255, 255, ${e.opacity})`), t.addColorStop(0.5, `rgba(255, 255, 255, ${0.5 * e.opacity})`), t.addColorStop(1, "rgba(255, 255, 255, 0)"), i.beginPath(), i.moveTo(e.x, e.y), i.lineTo(e.x + 0.707 * e.length, e.y - 0.707 * e.length), (i.strokeStyle = t), (i.lineWidth = 2), i.stroke();
                                        const a = i.createRadialGradient(e.x, e.y, 0, e.x, e.y, 4);
                                        return a.addColorStop(0, `rgba(255, 255, 255, ${e.opacity})`), a.addColorStop(1, "rgba(255, 255, 255, 0)"), i.beginPath(), i.arc(e.x, e.y, 4, 0, 2 * Math.PI), (i.fillStyle = a), i.fill(), e.y < o.height + 50 && e.opacity > 0;
                                    })),
                                    (a.current = window.requestAnimationFrame(m));
                            };
                            return (
                                m(),
                                () => {
                                    n.Z.unobserve(r, p), a.current && window.cancelAnimationFrame(a.current);
                                }
                            );
                        }, []),
                        o.createElement(r.Z, { style: l.container }, o.createElement("div", { ref: t, style: l.outerCanvasContainer }, o.createElement("canvas", { ref: e, style: l.canvas })))
                    );
                },
                l = i.default.create((e) => ({ container: { position: "fixed", top: 0, start: 0, width: "100%", height: "100%", zIndex: -1, animationDuration: "5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 0.5 } }], animationTimingFunction: "ease", animationFillMode: "both", pointerEvents: "none", userSelect: "none", maxHeight: "100vh" }, outerCanvasContainer: { width: "100%", height: "100%" }, canvas: { width: "100%", height: "100%" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-cebf58fc.3830dbea.js.map

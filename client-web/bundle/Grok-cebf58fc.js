"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-cebf58fc"],
    {
        640350: (e, t, o) => {
            o.d(t, { V: () => w });
            var a = o(202784),
                r = o(325686),
                n = o(392237),
                i = o(20716),
                s = o(988290),
                l = o(731708),
                c = o(992942),
                p = o(306677),
                d = o(952793),
                m = o(725405),
                u = o(125363),
                g = o(53939),
                y = o(327597),
                h = o(654917),
                b = o(623494),
                f = o(928831);
            const C = ({ allPrompts: e, data: t, sectionType: o }) => {
                    const [n, i] = a.useState(!1),
                        C = (0, m.Z)(),
                        E = (0, u.I0)(),
                        w = (0, h.eX)(),
                        { isCompactLayout: _ } = (0, s.ZP)(),
                        { isReasoningEnabled: v, isResearchEnabled: x } = (0, f.w)(),
                        Z = (0, d.hC)("responsive_web_grok_show_citations"),
                        I = a.useRef(!1),
                        P = a.useCallback(() => {
                            I.current || (0, b.az)(C, "impression", { promptId: t.prompt_id ?? "", prompt: t.prompt, sectionType: o, allPrompts: e });
                        }, [C, t.prompt_id, t.prompt, o, e]),
                        R = a.useCallback(() => i(!0), []),
                        z = a.useCallback(() => i(!1), []),
                        T = a.useCallback(() => {
                            if (((0, b.az)(C, "click", { promptId: t.prompt_id ?? "", prompt: t.prompt, sectionType: o, allPrompts: e }), "" !== t.prompt_id)) {
                                const e = "PRESET";
                                E((0, g.U)({ group_id: e, object_id: t.prompt_id, action_type: "CLICK" }));
                            }
                            E((0, y.u)({ analytics: C, conversationKey: w })({ text: t.prompt, returnCitations: Z, toolOverrides: t.tool_overrides, isDeepsearch: x, isReasoning: v }));
                        }, [C, E, w, e, o, t.prompt, t.prompt_id, Z, t.tool_overrides, x, v]);
                    return a.createElement(r.Z, { onClick: T, onMouseEnter: R, onMouseLeave: z, style: [k.container, n ? k.hovered : void 0, _ ? k.full : k.compact] }, a.createElement(r.Z, { style: t.image_url ? k.textContentWithImage : k.textContentWithoutImage }, a.createElement(p.D, { id: `prompt_${t.prompt_id}`, onFullyVisible: P, position: "bottom", testID: `prompt_${t.prompt_id}` }), !!t.display_label && a.createElement(l.ZP, { numberOfLines: 3, size: "body", weight: "bold" }, t.display_label), !!t.display_body && a.createElement(l.ZP, { color: "gray700", numberOfLines: 1, size: "subtext1", weight: "normal" }, t.display_body)), !!t.image_url && a.createElement(c.Z, { source: t.image_url, style: k.image }));
                },
                k = n.default.create((e) => ({ container: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large, cursor: "pointer", transition: "background-color 0.5s", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, textContentWithImage: { minHeight: 84, maxWidth: "70%", gap: e.spaces.space8, grow: 1, wrap: "wrap", justifyContent: "center", paddingEnd: e.spaces.space16 }, textContentWithoutImage: { minHeight: 84, width: "100%", gap: e.spaces.space8, justifyContent: "center" }, image: { grow: 0, objectFit: "cover", height: 84, width: 84, borderRadius: e.borderRadii.medium }, hovered: { backgroundColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray50 }, full: { width: "100%" }, compact: { width: "calc(50% - 8px)" } }));
            var E = o(619697);
            const w = ({ data: e }) => {
                    const { isCompactLayout: t } = (0, s.ZP)(),
                        o = (0, i.vN)(e.prompts, 4);
                    return a.createElement(
                        E.$,
                        { data: e },
                        a.createElement(
                            r.Z,
                            { style: t ? _.mobileRow : _.row },
                            o.map((t, r) => a.createElement(C, { allPrompts: o, data: t, key: r, sectionType: e.section_type ?? "NO_SECTION" })),
                        ),
                    );
                },
                _ = n.default.create((e) => ({ row: { flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", gap: e.spaces.space16, width: "100%" }, mobileRow: { flexDirection: "column", alignItems: "stretch", gap: e.spaces.space16, width: "100%" } }));
        },
        892451: (e, t, o) => {
            o.d(t, { u: () => Z });
            o(136728);
            var a = o(202784),
                r = o(744610),
                n = o(325686),
                i = o(392237),
                s = o(379848),
                l = o(928831),
                c = o(731708),
                p = o(306677),
                d = o(952793),
                m = o(725405),
                u = o(125363),
                g = o(53939),
                y = o(327597),
                h = o(620988),
                b = o(764226),
                f = o(654917),
                C = o(962379),
                k = o(623494),
                E = o(988290);
            const w = ({ Icon: e, allPrompts: t, body: o, isDeepsearch: r, isImageEdit: i, isImageGen: s, isReasoning: w, label: v, prompt: x, promptAction: Z, promptId: I, sectionType: P, toolOverrides: R }) => {
                    const [z, T] = a.useState(!1),
                        D = (0, m.Z)(),
                        S = (0, u.I0)(),
                        M = (0, f.eX)(),
                        { isCompactLayout: F } = (0, E.ZP)(),
                        { clearSelectedFile: O, selectedFiles: B } = (0, h.ZP)(),
                        { clearFilterKey: L, isCreateImageEnabled: H, isImageEditEnabled: K } = (0, l.w)(),
                        G = (0, d.hC)("responsive_web_grok_show_citations"),
                        N = (0, d.hC)("responsive_web_grok_new_home_layout"),
                        j = a.useMemo(() => Object.keys(B), [B]),
                        V = a.useMemo(() => j.map((e) => B[e]?.remote).filter(Boolean), [j, B]),
                        W = a.useRef(null),
                        { handleFileChange: A } = (0, b.J)({ analytics: D, isReturnCitations: G, prompt: x, promptId: I }),
                        { enabled: $ } = (0, C.Z)(),
                        U = a.useRef(!1),
                        X = a.useCallback(() => {
                            U.current || (0, k.az)(D, "impression", { promptId: I ?? "", prompt: x, sectionType: P, allPrompts: t ?? [] });
                        }, [D, I, x, P, t]),
                        Y = a.useCallback(() => T(!0), []),
                        J = a.useCallback(() => T(!1), []),
                        Q = a.useCallback(() => {
                            if (((0, k.az)(D, "click", { promptId: I ?? "", prompt: x, sectionType: P, allPrompts: t ?? [] }), "UPLOAD" === Z && W.current)) return void W.current.click();
                            let e = {};
                            i && (e = { attachments: V, imageGenerationCount: 4, promptMetadata: { promptSource: "IMAGE_EDIT", action: "INPUT", properties: { imageUrl: V[0].url } } });
                            let o = {};
                            if (
                                (s && (o = { imageGenerationCount: 4 }),
                                S(
                                    (0, y.u)({ analytics: D, conversationKey: M })({
                                        text: x,
                                        returnCitations: G,
                                        toolOverrides: R,
                                        isDeepsearch: r,
                                        isReasoning: w,
                                        isImageGen: s,
                                        ...e,
                                        ...o,
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
                                S((0, g.U)({ group_id: e, object_id: I, action_type: "CLICK" }));
                            }
                        }, [x, I, S, P, t, D, G, M, Z, R, r, w, i, V, O, j, H, K, L, N, s]);
                    return $ ? a.createElement(n.Z, { style: [_.outerContainer, z ? _.hovered : void 0] }, a.createElement(n.Z, { onClick: Q, onMouseEnter: Y, onMouseLeave: J, style: _.contentContainer }, a.createElement(p.D, { id: `prompt_${I}`, onFullyVisible: X, position: "bottom", testID: `prompt_${I}` }), a.createElement(n.Z, { style: _.promptContainer }, e ? a.createElement(e, { style: _.icon }) : void 0, a.createElement(n.Z, { style: _.prompt }, a.createElement(c.ZP, { size: "body", weight: "normal" }, v), !!o && a.createElement(c.ZP, { style: _.promptTextStyle }, o))), a.createElement("input", { onChange: A, ref: W, style: { display: "none" }, type: "file" }))) : a.createElement(n.Z, { onClick: Q, onMouseEnter: Y, onMouseLeave: J, style: [_.deprecatedContainer, z ? _.hovered : void 0, F ? _.compact : void 0] }, a.createElement(p.D, { id: `prompt_${I}`, onFullyVisible: X, position: "bottom", testID: `prompt_${I}` }), a.createElement(n.Z, { style: _.deprecatedPrompt }, a.createElement(c.ZP, null, v)), e ? a.createElement(e, { style: _.deprecatedIcon }) : void 0);
                },
                _ = i.default.create((e) => ({ outerContainer: { width: "100%" }, contentContainer: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, justifyContent: "center", alignItems: "flex-start", borderRadius: e.spaces.space16, cursor: "pointer", transition: "background-color 0.5s", overflow: "hidden" }, loadingBlock: { backgroundColor: "transparent" }, compact: { width: "45%" }, hovered: { backgroundColor: e.colors.gray50, borderRadius: e.spaces.space8 }, promptContainer: { flexDirection: "row", alignItems: "center" }, prompt: { marginStart: e.spaces.space8, flex: 1 }, promptTextStyle: { fontSize: e.fontSizes.headline2, color: e.colors.gray600 }, icon: { width: e.spaces.space24, height: e.spaces.space24, color: e.colors.gray800 }, deprecatedContainer: { width: 170, height: 130, padding: e.spaces.space16, justifyContent: "space-between", alignItems: "flex-start", backgroundColor: e.colors.activeFaintGray, borderRadius: e.borderRadii.large, cursor: "pointer", transition: "background-color 0.5s" }, deprecatedPrompt: { flexGrow: 1, textOverflow: "ellipsis" }, deprecatedIcon: { width: e.spaces.space20, height: e.spaces.space20, color: e.colors.link } }));
            var v = o(619697);
            const x = (e) => {
                    const [t, o] = a.useState(e.children),
                        n = a.useRef(e.animationKey),
                        i = a.useRef(new r.Z.Value(0)).current;
                    return (
                        a.useEffect(() => {
                            r.Z.timing(i, { toValue: 1, duration: 300, useNativeDriver: !1 }).start();
                        }, [i]),
                        a.useEffect(() => {
                            n.current !== e.animationKey &&
                                ((n.current = e.animationKey),
                                r.Z.timing(i, { toValue: 0, duration: 150, useNativeDriver: !1 }).start(() => {
                                    o(e.children), r.Z.timing(i, { toValue: 1, duration: 150, useNativeDriver: !1 }).start();
                                }));
                        }, [e.children, e.animationKey, i]),
                        a.createElement(r.Z.View, { style: [{ opacity: i }, e.style] }, t)
                    );
                },
                Z = (e) => {
                    const { grokInput: t, isDefault: o } = (0, l.w)(),
                        i = a.useMemo(() => e.data.prompts.filter((e) => e.filter_key === t.filterKey), [t.filterKey, e.data.prompts]),
                        { promptElements: c } = a.useMemo(() => {
                            const t = P(i, e.numPromptsToShow ?? 4),
                                o = t.map(() => new r.Z.Value(0)),
                                n = o.map((e, t) => r.Z.timing(e, { toValue: 1, duration: 300, delay: 30 * t, useNativeDriver: !1 }));
                            r.Z.parallel(n).start();
                            const l = t.map((e, t) => {
                                const n = { opacity: o[t], transform: [{ translateY: o[t].interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) }] };
                                return a.createElement(r.Z.View, { key: e.prompt_id, style: [R.gridItem, n] }, a.createElement(w, { Icon: e.icon_name ? s[e.icon_name] : void 0, isDeepsearch: "Research" === e.filter_key, isImageEdit: "ImageEdit" === e.filter_key, isImageGen: "CreateImage" === e.filter_key, isReasoning: "Reasoning" === e.filter_key, label: e.display_body ?? "", prompt: e.prompt, promptId: e.prompt_id, sectionType: "FLOATING_CARD", toolOverrides: e.tool_overrides }));
                            });
                            return { animatedValues: o, promptElements: l };
                        }, [i, e.numPromptsToShow]);
                    return (o && !e.hasSelectedFilterKey) || 0 === c.length ? null : a.createElement(x, { animationKey: t.filterKey || "default", style: R.fadeContainer }, a.createElement(v.$, { data: e.data }, a.createElement(n.Z, { style: R.container }, c)));
                },
                I = (e) => {
                    const t = [...e];
                    for (let e = t.length - 1; e > 0; e--) {
                        const o = Math.floor(Math.random() * (e + 1)),
                            a = t[e];
                        (t[e] = t[o]), (t[o] = a);
                    }
                    return t;
                },
                P = (e, t) => {
                    const o = ["g3_image_edit_2"],
                        a = e.filter((e) => e.prompt_id && o.includes(e.prompt_id));
                    if (a.length >= t) return I(a).slice(0, t);
                    const r = t - a.length,
                        n = e.filter((e) => !(a.includes(e) || (e.prompt_id && o.includes(e.prompt_id))));
                    for (let e = 0; e < r && e < n.length; e++) a.push(n[e]);
                    return I(a);
                },
                R = i.default.create((e) => ({ container: { width: "100%", flexDirection: "column", alignItems: "stretch" }, gridItem: { alignItems: "flex-start", width: "100%" }, fadeContainer: { width: "100%" } }));
        },
        648536: (e, t, o) => {
            o.d(t, { L: () => _ });
            var a = o(202784),
                r = o(400752),
                n = o(325686),
                i = o(731708),
                s = o(194504),
                l = o(530732),
                c = o(823161),
                p = o(992942),
                d = o(392237),
                m = o(420182),
                u = o(306677),
                g = o(952793),
                y = o(725405),
                h = o(125363),
                b = o(327597),
                f = o(919022),
                C = o(654917),
                k = o(623494),
                E = o(207683);
            const w = "rweb.highlightedPromptClicks",
                _ = ({ data: e }) => {
                    const t = (0, h.v9)(f.ZP.selectLoggedInUser),
                        o = (0, r.Dv)(m.lZ),
                        d = (0, y.Z)(),
                        _ = (0, h.I0)(),
                        x = (0, C.eX)(),
                        Z = (0, g.hC)("responsive_web_grok_show_citations"),
                        I = (0, g.JY)("responsive_web_grok_highlighted_prompt_clicks_until_fatigue", -1),
                        [P, R] = a.useState(I < 0),
                        [z, T] = a.useState(null),
                        D = a.useRef(!1);
                    a.useEffect(() => {
                        0 !== I &&
                            (I < 0 ||
                                o.get(w).then((t) => {
                                    const o = { ...(t || {}) };
                                    T(o);
                                    const a = e.prompts.some((e) => o[e.prompt_id] <= I);
                                    (t && !a) || R(!0);
                                }));
                    }, [I, R, o, e.prompts]);
                    const S = a.useCallback(
                        (t) => {
                            D.current || (0, k.az)(d, "impression", { promptId: t.prompt_id, prompt: t.prompt, sectionType: "HIGHLIGHTED_PROMPTS", allPrompts: e.prompts });
                        },
                        [d, e.prompts],
                    );
                    if (!P) return null;
                    const M = e.prompts.length;
                    return a.createElement(
                        n.Z,
                        { style: v.container },
                        (!!e.title || !!e.subtitle) && a.createElement(n.Z, { style: v.titleContainer }, !!e.title && a.createElement(i.ZP, { size: "headline2", weight: "bold" }, e.title), !!e.subtitle && a.createElement(i.ZP, { color: "gray600" }, e.subtitle)),
                        a.createElement(
                            s.Z,
                            { buttonsContainerStyle: v.promptsInnerContainer, childrenStyle: [M <= 1 ? v.singlePromptOuterContainer : v.multiplePromptOuterContainer], style: v.promptsContainer },
                            e.prompts.map((e) => {
                                const r = "DRAW_ME" === e.action && t && t.profile_image_url_https;
                                return a.createElement(
                                    l.Z,
                                    {
                                        key: e.prompt_id,
                                        onClick: () =>
                                            ((e) => {
                                                (0, k.az)(d, "click", { promptId: e.prompt_id ?? "", prompt: e.prompt, sectionType: "HIGHLIGHTED_PROMPTS", allPrompts: [e] }), _((0, b.u)({ analytics: d, conversationKey: x })({ text: e.prompt, returnCitations: Z, isDeepsearch: "Research" === e.filter_key, isReasoning: "Reasoning" === e.filter_key, imageGenerationCount: 4 }));
                                                const t = { ...(z || {}) };
                                                t[e.prompt_id] || (t[e.prompt_id] = 0), t[e.prompt_id]++, o.set(w, t);
                                            })(e),
                                        withoutInteractiveStyles: !0,
                                    },
                                    ({ isHovered: o }) => a.createElement(n.Z, { style: [v.promptContainer, o ? v.hoveredPromptContainer : void 0] }, a.createElement(u.D, { id: `prompt_${e.prompt_id}`, onFullyVisible: () => S(e), position: "bottom", testID: `prompt_${e.prompt_id}` }), r ? a.createElement(c.default, { shape: "circle", size: "xLarge", uri: t?.profile_image_url_https }) : e.image_url ? a.createElement(n.Z, { style: v.imgContainer }, a.createElement(p.Z, { resizeMode: "cover", source: e.image_url, style: v.img })) : void 0, a.createElement(n.Z, { style: v.infoContainer }, e.display_label && a.createElement(i.ZP, { size: "headline2", weight: "medium" }, e.display_label), e.display_body && a.createElement(i.ZP, { color: "gray700", size: "body", weight: "normal" }, a.createElement(E.GrokMarkdown, { isAnimated: !1, markdownText: e.display_body })))),
                                );
                            }),
                        ),
                    );
                },
                v = d.default.create((e) => ({ container: { display: "flex", flexDirection: "column" }, titleContainer: { marginTop: e.spaces.space12, marginBottom: e.spaces.space16, display: "flex", flexDirection: "column", gap: e.spaces.space8 }, promptsContainer: { width: "100%" }, promptsInnerContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space16 }, promptContainer: { padding: e.spaces.space16, borderRadius: e.spaces.space16, display: "flex", flexDirection: "row", gap: e.spaces.space16, backgroundColor: e.colors.gray0, transition: "background-color 0.3s ease", alignItems: "center" }, singlePromptOuterContainer: { flex: 1 }, multiplePromptOuterContainer: { width: "max-content", minWidth: 150, maxWidth: 400 }, hoveredPromptContainer: { backgroundColor: e.colors.gray50 }, imgContainer: { alignSelf: "stretch", minHeight: 40, animationDuration: "0.5s", animationKeyframes: [{ "0%": { transform: "scale(0.9)", opacity: 0 }, "100%": { transform: "scale(1)", opacity: 1 } }], animationTimingFunction: "ease", animationIterationCount: 1, opacity: 1, aspectRatio: 1 }, img: { height: "100%", minWidth: 50, aspectRatio: 1, borderRadius: e.spaces.space8 }, infoContainer: { display: "flex", flex: 1, flexDirection: "column", gap: e.spaces.space4 }, iconContainer: { width: 14, height: 14 }, icon: { top: 3, width: 14, height: 14 } }));
        },
        781939: (e, t, o) => {
            o.d(t, { $: () => _ });
            var a = o(202784),
                r = o(325686),
                n = o(392237),
                i = o(20716),
                s = o(988290),
                l = o(172016),
                c = o(731708),
                p = o(992942),
                d = o(306677),
                m = o(725405),
                u = o(125363),
                g = o(53939),
                y = o(327597),
                h = o(654917),
                b = o(305442),
                f = o(962379),
                C = o(623494);
            const k = ({ allPrompts: e, disableClick: t, imageUrl: o, imageUrl2x: i, label: k, prompt: w, promptId: _, sectionType: v, toolOverrides: x }) => {
                    const [Z, I] = a.useState(!1),
                        P = (0, m.Z)(),
                        R = (0, u.I0)(),
                        z = (0, h.eX)(),
                        { isCompactLayout: T } = (0, s.ZP)(),
                        { enabled: D } = (0, f.Z)(),
                        S = (0, b.Z)("image_block"),
                        M = a.useRef(!1),
                        F = a.useCallback(() => {
                            M.current || (0, C.az)(P, "impression", { promptId: _ ?? "", prompt: w, sectionType: v, allPrompts: e ?? [] });
                        }, [P, _, w, v, e]),
                        O = a.useCallback(() => I(!0), []),
                        B = a.useCallback(() => I(!1), []),
                        L = a.useCallback(() => {
                            if (!t && ((0, C.az)(P, "click", { promptId: _ ?? "", prompt: w, sectionType: v, allPrompts: e ?? [] }), R((0, y.u)({ analytics: P, conversationKey: z })({ text: w, returnCitations: !1, imageGenerationCount: S, toolOverrides: x })), "" !== _)) {
                                const e = "PRESET";
                                R((0, g.U)({ group_id: e, object_id: _ ?? "", action_type: "CLICK" }));
                            }
                        }, [t, w, _, v, e, R, P, z, S, x]),
                        H = a.useMemo(() => ("light" === n.default.theme.paletteName ? [E.shadow, Z ? { opacity: 0.25 } : { opacity: 0 }] : [E.shadow, Z ? { opacity: 0 } : { opacity: 0.7 }]), [Z]),
                        K = a.useMemo(() => ("light" === n.default.theme.paletteName ? [E.shadow, Z ? { opacity: 0.25 } : { opacity: 0 }] : [E.shadow, Z ? { opacity: 0 } : { opacity: 0.5 }]), [Z]),
                        G = l.Z.get() > 1 ? i : o;
                    return D ? a.createElement(r.Z, { onClick: L, onMouseEnter: O, onMouseLeave: B, style: E.container }, a.createElement(d.D, { id: `prompt_${_ ?? o}`, onFullyVisible: F, position: "bottom", testID: `prompt_${_ ?? o}` }), a.createElement(r.Z, { style: E.prompt }, a.createElement(c.ZP, { numberOfLines: 2, size: "subtext2", style: E.promptText, weight: "medium" }, k)), a.createElement(r.Z, { style: K }), a.createElement(p.Z, { resizeMode: "cover", source: { uri: G }, style: E.image })) : a.createElement(r.Z, { onClick: L, onMouseEnter: O, onMouseLeave: B, style: [E.deprecatedContainer, T ? E.deprecatedCompact : void 0] }, a.createElement(r.Z, { style: E.deprecatedPrompt }, a.createElement(c.ZP, { size: "subtext1" }, k)), a.createElement(r.Z, { style: H }), a.createElement(p.Z, { resizeMode: "cover", source: { uri: G }, style: E.image }));
                },
                E = n.default.create((e) => ({ container: { height: 150, justifyContent: "space-between", alignItems: "flex-start", backgroundColor: e.colors.activeFaintGray, borderRadius: e.borderRadii.xLarge, borderColor: e.colors.gray50, borderWidth: "1px", borderStyle: "solid", overflow: "hidden", cursor: "pointer", flex: 1, grow: 1 }, prompt: { flexGrow: 1, textOverflow: "ellipsis", position: "absolute", bottom: e.spaces.space8, start: e.spaces.space8, maxWidth: "calc(100% - 20px)", zIndex: 10, transition: "opacity 0.3s", paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8, backgroundColor: "rgba(102, 102, 102, 0.3)", borderRadius: e.borderRadii.medium, borderWidth: e.spaces.space1, borderStyle: "solid", borderColor: "rgba(255,255, 255, 0.15)", backdropFilter: "blur(1px)" }, promptText: { color: "white" }, icon: { width: e.spaces.space20, height: e.spaces.space20, color: e.colors.link }, shadow: { position: "absolute", width: "100%", height: "100%", zIndex: 5, backgroundColor: e.colors.cellBackground, transition: "opacity 0.3s" }, image: { position: "absolute", width: "100%", height: "100%", zIndex: 1 }, deprecatedContainer: { width: 352, height: 220, justifyContent: "space-between", alignItems: "flex-start", backgroundColor: e.colors.activeFaintGray, borderRadius: e.borderRadii.large, overflow: "hidden", cursor: "pointer" }, deprecatedCompact: { width: `calc(90% + ${e.spaces.space12})` }, deprecatedPrompt: { flexGrow: 1, textOverflow: "ellipsis", position: "absolute", bottom: e.spaces.space12, start: e.spaces.space12, zIndex: 10, transition: "opacity 0.3s", paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space12, borderRadius: e.borderRadii.medium, backgroundColor: e.colors.cellBackground } }));
            var w = o(619697);
            const _ = ({ data: e }) => {
                    const { isCompactLayout: t } = (0, s.ZP)(),
                        o = t ? 2 : 3,
                        n = a.useMemo(() => e.prompts.filter((e) => !!e.image_url), [e]),
                        l = (0, i.vN)(n, o);
                    return a.createElement(
                        w.$,
                        { data: e },
                        a.createElement(
                            r.Z,
                            { style: v.row },
                            l.map((t, o) => a.createElement(k, { allPrompts: l, imageUrl: t.image_url, imageUrl2x: t.image_url, key: t.prompt, label: t.display_label, prompt: t.prompt, promptId: t.prompt_id, sectionType: e.section_type ?? "NO_SECTION", toolOverrides: t.tool_overrides })),
                        ),
                    );
                },
                v = n.default.create((e) => ({ row: { flexDirection: "row", justifyContent: "space-between", overflowX: "auto", flexWrap: "nowrap", gap: e.spaces.space16, width: "100%" } }));
        },
        619697: (e, t, o) => {
            o.d(t, { $: () => l });
            var a = o(202784),
                r = o(325686),
                n = o(731708),
                i = o(721266),
                s = o(392237);
            const l = ({ children: e, data: t }) => a.createElement(r.Z, { style: c.container }, !!t.title && a.createElement(a.Fragment, null, a.createElement(n.ZP, { size: "body", weight: "bold" }, t.title)), !!t.title && !!t.subtitle && a.createElement(i.Z, { size: "space8" }), !!t.subtitle && a.createElement(a.Fragment, null, a.createElement(n.ZP, { color: "gray500", size: "subtext1" }, t.subtitle)), t.title || t.subtitle ? a.createElement(i.Z, { size: "space16" }) : void 0, e),
                c = s.default.create((e) => ({ container: { width: "100%" } }));
        },
        158042: (e, t, o) => {
            o.d(t, { F: () => I });
            var a = o(202784),
                r = o(325686),
                n = o(194504),
                i = o(392237),
                s = o(20716),
                l = o(731708),
                c = o(721266),
                p = o(306677),
                d = o(952793),
                m = o(725405),
                u = o(125363),
                g = o(53939),
                y = o(327597),
                h = o(620988),
                b = o(764226),
                f = o(654917),
                C = o(962379),
                k = o(623494),
                E = o(988290);
            const w = ({ Icon: e, allPrompts: t, body: o, isDeepsearch: n, isImageEdit: i, isReasoning: s, label: w, prompt: v, promptAction: x, promptId: Z, sectionType: I, toolOverrides: P }) => {
                    const [R, z] = a.useState(!1),
                        T = (0, m.Z)(),
                        D = (0, u.I0)(),
                        S = (0, f.eX)(),
                        { isCompactLayout: M } = (0, E.ZP)(),
                        { selectedFiles: F } = (0, h.ZP)(),
                        O = (0, d.hC)("responsive_web_grok_show_citations"),
                        B = a.useMemo(() => Object.keys(F), [F]),
                        L = a.useMemo(() => B.map((e) => F[e]?.remote).filter(Boolean), [B, F]),
                        H = a.useRef(null),
                        { handleFileChange: K } = (0, b.J)({ analytics: T, isReturnCitations: O, prompt: v, promptId: Z }),
                        { enabled: G } = (0, C.Z)(),
                        N = a.useRef(!1),
                        j = a.useCallback(() => {
                            N.current || (0, k.az)(T, "impression", { promptId: Z ?? "", prompt: v, sectionType: I, allPrompts: t ?? [] });
                        }, [T, Z, v, I, t]),
                        V = a.useCallback(() => z(!0), []),
                        W = a.useCallback(() => z(!1), []),
                        A = a.useCallback(() => {
                            if (((0, k.az)(T, "click", { promptId: Z ?? "", prompt: v, sectionType: I, allPrompts: t ?? [] }), "UPLOAD" === x && H.current)) return void H.current.click();
                            let e = {};
                            if ((i && (e = { attachments: L, imageGenerationCount: 4, promptMetadata: { promptSource: "IMAGE_EDIT", action: "INPUT", properties: { imageUrl: L[0].url } } }), D((0, y.u)({ analytics: T, conversationKey: S })({ text: v, returnCitations: O, toolOverrides: P, isDeepsearch: n, isReasoning: s, ...e })), "" !== Z)) {
                                const e = "PRESET";
                                D((0, g.U)({ group_id: e, object_id: Z, action_type: "CLICK" }));
                            }
                        }, [v, Z, D, I, t, T, O, S, x, P, n, s, i, L]);
                    return G ? a.createElement(r.Z, { onClick: A, onMouseEnter: V, onMouseLeave: W, style: [_.container, R ? _.hovered : void 0] }, e ? a.createElement(a.Fragment, null, a.createElement(e, { style: _.icon }), a.createElement(c.Z, { size: "space8" })) : void 0, a.createElement(r.Z, { style: _.prompt }, a.createElement(l.ZP, { size: "body", weight: "medium" }, w), !!o && a.createElement(l.ZP, { color: "gray600", size: "body", weight: "normal" }, o)), a.createElement("input", { onChange: K, ref: H, style: { display: "none" }, type: "file" })) : a.createElement(r.Z, { onClick: A, onMouseEnter: V, onMouseLeave: W, style: [_.deprecatedContainer, R ? _.hovered : void 0, M ? _.compact : void 0] }, a.createElement(p.D, { id: `prompt_${Z}`, onFullyVisible: j, position: "bottom", testID: `prompt_${Z}` }), a.createElement(r.Z, { style: _.deprecatedPrompt }, a.createElement(l.ZP, null, w)), e ? a.createElement(e, { style: _.deprecatedIcon }) : void 0);
                },
                _ = i.default.create((e) => ({ container: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, justifyContent: "center", alignItems: "flex-start", backgroundColor: e.colors.gray0, borderRadius: e.spaces.space12, cursor: "pointer", transition: "background-color 0.5s", overflow: "hidden", flex: 1, flexGrow: 1, shrink: 1, minWidth: 150, maxHeight: 68, minHeight: 68 }, loadingBlock: { backgroundColor: "transparent" }, compact: { width: "45%" }, hovered: { backgroundColor: e.colors.gray50 }, prompt: { textOverflow: "ellipsis", wrap: "wrap" }, icon: { width: e.spaces.space20, height: e.spaces.space20, shrink: 0, color: e.colors.gray900 }, deprecatedContainer: { width: 170, height: 130, padding: e.spaces.space16, justifyContent: "space-between", alignItems: "flex-start", backgroundColor: e.colors.activeFaintGray, borderRadius: e.borderRadii.large, cursor: "pointer", transition: "background-color 0.5s" }, deprecatedPrompt: { flexGrow: 1, textOverflow: "ellipsis" }, deprecatedIcon: { width: e.spaces.space20, height: e.spaces.space20, color: e.colors.link } }));
            var v = o(619697);
            const x = ({ Icon: e, allPrompts: t, label: o, prompt: n, promptAction: i, promptId: s, sectionType: h, toolOverrides: C }) => {
                    const [E, w] = a.useState(!1),
                        _ = (0, m.Z)(),
                        v = (0, u.I0)(),
                        x = (0, f.eX)(),
                        I = (0, d.hC)("responsive_web_grok_show_citations"),
                        P = a.useRef(!1),
                        R = a.useRef(null),
                        { handleFileChange: z } = (0, b.J)({ analytics: _, isReturnCitations: I, prompt: n, promptId: s }),
                        T = a.useCallback(() => {
                            P.current || (0, k.az)(_, "impression", { promptId: s ?? "", prompt: n, sectionType: h, allPrompts: t });
                        }, [_, s, n, h, t]),
                        D = a.useCallback(() => w(!0), []),
                        S = a.useCallback(() => w(!1), []),
                        M = a.useCallback(() => {
                            if (((0, k.az)(_, "click", { promptId: s ?? "", prompt: n, sectionType: h, allPrompts: t }), "UPLOAD" === i && R.current)) R.current.click();
                            else if ((v((0, y.u)({ analytics: _, conversationKey: x })({ text: n, returnCitations: I, toolOverrides: C })), "" !== s)) {
                                const e = "PRESET";
                                v((0, g.U)({ group_id: e, object_id: s, action_type: "CLICK" }));
                            }
                        }, [n, s, h, t, i, v, _, I, x, C]);
                    return a.createElement(r.Z, { onClick: M, onMouseEnter: D, onMouseLeave: S, style: [Z.pill, E ? Z.hovered : void 0] }, !!e && a.createElement(a.Fragment, null, a.createElement(e, { style: Z.icon }), a.createElement(c.Z, { size: "space8" })), a.createElement(p.D, { id: `prompt_${s}`, onFullyVisible: T, position: "bottom", testID: `prompt_${s}` }), a.createElement(r.Z, { style: Z.prompt }, a.createElement(l.ZP, { size: "body", weight: "bold" }, o)), a.createElement("input", { onChange: z, ref: R, style: { display: "none" }, type: "file" }));
                },
                Z = i.default.create((e) => ({ pill: { backgroundColor: e.colors.gray0, paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, transition: "background-color 0.5s", borderRadius: e.spaces.space12, flexGrow: 1, shrink: 0, flexDirection: "row", justifyContent: "center", alignItems: "center" }, prompt: { textOverflow: "ellipsis" }, hovered: { backgroundColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray50, cursor: "pointer" }, icon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray800 } })),
                I = ({ data: e, style: t }) => {
                    const o = (0, s.vN)(e.prompts, 10);
                    return a.createElement(
                        v.$,
                        { data: e },
                        a.createElement(
                            n.Z,
                            { showNavButtonsOnHover: !1, style: P.carousel, withWraparound: !0 },
                            o.map((n, i) => a.createElement(r.Z, { key: n.prompt }, "pill" === t ? a.createElement(x, { Icon: (0, s.wG)(n.icon_name || "") || void 0, allPrompts: o, isDeepsearch: "research" === n.filter_key?.toLowerCase(), isReasoning: "reasoning" === n.filter_key?.toLowerCase(), label: n.display_label, prompt: n.prompt, promptAction: n.action, promptId: n.prompt_id, sectionType: e.section_type ?? "NO_SECTION", toolOverrides: n.tool_overrides }) : a.createElement(w, { Icon: (0, s.wG)(n.icon_name || "") || void 0, allPrompts: o, isDeepsearch: "research" === n.filter_key?.toLowerCase(), isImageEdit: "imageedit" === n.filter_key?.toLowerCase(), isReasoning: "reasoning" === n.filter_key?.toLowerCase(), label: n.display_label, prompt: n.prompt, promptAction: n.action, promptId: n.prompt_id, sectionType: e.section_type ?? "NO_SECTION", toolOverrides: n.tool_overrides }))),
                        ),
                    );
                },
                P = i.default.create((e) => ({ carousel: { width: "100%" } }));
        },
        49445: (e, t, o) => {
            o.d(t, { E: () => C });
            var a = o(202784),
                r = o(325686),
                n = o(392237),
                i = o(20716),
                s = o(988290),
                l = o(731708),
                c = o(992942),
                p = o(952793),
                d = o(725516),
                m = o(125363),
                u = o(327597),
                g = o(654917),
                y = o(962379);
            const h = ({ prompt: e, sectionType: t }) => {
                    const [o, n] = a.useState(!1),
                        i = (0, d.z)(),
                        h = (0, m.I0)(),
                        f = (0, g.eX)(),
                        { isCompactLayout: C, isGrokDrawer: k } = (0, s.ZP)(),
                        E = a.useCallback(() => n(!0), []),
                        w = a.useCallback(() => n(!1), []),
                        { enabled: _ } = (0, y.Z)(),
                        v = (0, p.hC)("responsive_web_grok_show_citations"),
                        x = a.useCallback(() => {
                            h((0, u.u)({ analytics: i, conversationKey: f })({ text: e.value, trendPromptIdStr: e.trendPromptIdStr, returnCitations: v }));
                        }, [i, h, e, v, f]);
                    return _ ? a.createElement(r.Z, { onClick: x, onMouseEnter: E, onMouseLeave: w, style: [b.container, o ? b.hovered : void 0, C ? b.full : b.compact] }, a.createElement(r.Z, { style: e.imageUrl ? b.textContentWithImage : b.textContentWithoutImage }, a.createElement(l.ZP, { numberOfLines: 2, size: "headline2", weight: "bold" }, e.header), a.createElement(l.ZP, { color: "gray700", numberOfLines: 1, size: "subtext1", weight: "normal" }, e.text)), !!e.imageUrl && a.createElement(c.Z, { source: e.imageUrl, style: b.image })) : a.createElement(r.Z, { onClick: x, onMouseEnter: E, onMouseLeave: w, style: [b.deprecatedContainer, o ? b.hovered : void 0, C && !k ? b.deprecatedCompact : void 0] }, a.createElement(r.Z, { style: b.deprecatedPrompt }, a.createElement(l.ZP, null, e.header)), a.createElement(l.ZP, { color: "gray500" }, e.text));
                },
                b = n.default.create((e) => ({ container: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space16, backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large, cursor: "pointer", transition: "background-color 0.5s", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, textContentWithImage: { maxWidth: "70%", gap: e.spaces.space8, grow: 1, wrap: "wrap", justifyContent: "center", paddingEnd: e.spaces.space16 }, textContentWithoutImage: { width: "100%", gap: e.spaces.space8 }, image: { grow: 0, objectFit: "cover", height: 84, width: 84, borderRadius: e.borderRadii.medium }, hovered: { backgroundColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray50 }, full: { width: "100%" }, compact: { width: "calc(50% - 8px)" }, deprecatedContainer: { width: 355, height: 130, padding: e.spaces.space16, justifyContent: "space-between", alignItems: "flex-start", backgroundColor: e.colors.activeFaintGray, borderRadius: e.borderRadii.large, cursor: "pointer", transition: "background-color 0.5s" }, deprecatedPrompt: { flexGrow: 1, textOverflow: "ellipsis" }, deprecatedCompact: { width: "45%" }, deprecatedIcon: { width: e.spaces.space20, height: e.spaces.space20, color: e.colors.link } }));
            var f = o(619697);
            const C = ({ data: e, prompts: t }) => {
                    const { isCompactLayout: o } = (0, s.ZP)(),
                        n = (0, i.vN)(t);
                    return a.createElement(
                        f.$,
                        { data: e },
                        a.createElement(
                            r.Z,
                            { style: o ? k.mobileRow : k.row },
                            n.map((e) => a.createElement(h, { key: e.value, prompt: e })),
                        ),
                    );
                },
                k = n.default.create((e) => ({ row: { flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap", gap: e.spaces.space16, width: "calc(100% + 16px)", marginStart: "-8px" }, mobileRow: { flexDirection: "column", alignItems: "stretch", gap: e.spaces.space16, width: "100%" } }));
        },
        300458: (e, t, o) => {
            o.d(t, { U: () => T });
            var a = o(202784),
                r = o(400752),
                n = o(987809),
                i = o(325686),
                s = o(67369),
                l = o(138099),
                c = o(154003),
                p = o(731708),
                d = o(466792),
                m = o(721266),
                u = o(392237),
                g = o(483054),
                y = o(295559),
                h = o(111677),
                b = o.n(h),
                f = o(837020),
                C = o(956272),
                k = o(408814),
                E = o(928831),
                w = o(764326),
                _ = o(701311);
            const v = b().hf9afab0,
                x = b().ef3b3f04,
                Z = b().b43636b8,
                I = b().j376298c,
                P = b().e3584f8e,
                R = b().d91b7b8a,
                z = (0, n.O4)("hideGrokPromoBanner_17", !1, void 0, { getOnInit: !0 }),
                T = ({ onClose: e }) => {
                    const { grokModeButtonStatusKey: t, grokModeButtons: o } = (0, E.w)(),
                        [n, g] = a.useState("search"),
                        [y, h] = (0, r.KO)(z),
                        b = a.useRef(null),
                        w = (0, s.yu)(),
                        T = () => {
                            h(!0), e();
                        };
                    a.useEffect(() => ((b.current = setTimeout(() => g("think"), 4e3)), () => clearTimeout(b.current)), [g]);
                    const S = a.useCallback(() => {
                            b.current && clearTimeout(b.current);
                        }, []),
                        M = o.find((e) => ("Research" === e.filter_key && "Enabled" === e[t]) || ("Research" === e.filter_key && "Disabled" === e[t])),
                        F = o.find((e) => ("Reasoning" === e.filter_key && "Enabled" === e[t]) || ("Research" === e.filter_key && "Disabled" === e[t]));
                    return !y && M && F
                        ? a.createElement(
                              l.Z,
                              { maskStyle: D.sheetMask, onMaskClick: T, type: "full", withMask: !0 },
                              a.createElement(
                                  i.Z,
                                  { style: [D.modalContainer, w ? D.mobileSpacing : null] },
                                  a.createElement(i.Z, { style: D.topBar }, a.createElement(c.ZP, { backgroundColor: "transparent", borderColor: "transparent", icon: a.createElement(f.default, null), onClick: T, size: "small" }), a.createElement(i.Z, { style: [D.titleSection, w ? D.titleSectionMobile : void 0] }, a.createElement(p.ZP, { size: "title2", weight: "bold" }, Z), a.createElement(p.ZP, { size: "body", weight: "medium" }, I))),
                                  a.createElement(
                                      i.Z,
                                      { style: [D.wrapperBox, w ? D.wrapperBoxMobile : void 0] },
                                      a.createElement(
                                          i.Z,
                                          { style: D.wrapperInnerBox },
                                          a.createElement(d.Z, null, ({ isHovered: e }) =>
                                              a.createElement(
                                                  i.Z,
                                                  { style: D.mockInput },
                                                  a.createElement(i.Z, { style: { minHeight: 40 } }, a.createElement(p.ZP, { size: "body", weight: "medium" }, "search" === n && a.createElement(_.Z, { text: P }), "think" === n && a.createElement(_.Z, { text: R }))),
                                                  a.createElement(
                                                      i.Z,
                                                      { style: D.buttonRow },
                                                      a.createElement(
                                                          c.ZP,
                                                          {
                                                              backgroundColor: "gray100",
                                                              borderColor: "transparent",
                                                              color: "search" === n ? "blue500" : "gray900",
                                                              onClick: () => {
                                                                  S(), g("search");
                                                              },
                                                              size: "smallCompact",
                                                              style: [D.button, "search" === n ? D.highlightedButton : null],
                                                          },
                                                          a.createElement(C.default, { style: D.icon }),
                                                          a.createElement(m.Z, { size: "space4" }),
                                                          a.createElement(p.ZP, { size: "subtext2", style: D.appText, weight: "medium" }, M?.label || ""),
                                                      ),
                                                      a.createElement(
                                                          c.ZP,
                                                          {
                                                              backgroundColor: "gray100",
                                                              borderColor: "transparent",
                                                              color: "think" === n ? "blue500" : "gray900",
                                                              onClick: () => {
                                                                  S(), g("think");
                                                              },
                                                              size: "smallCompact",
                                                              style: [D.button, "think" === n ? D.highlightedButton : null],
                                                          },
                                                          a.createElement(k.default, { style: D.reasoningIcon }),
                                                          a.createElement(m.Z, { size: "space4" }),
                                                          a.createElement(p.ZP, { size: "subtext2", style: D.appText, weight: "medium" }, F?.label || ""),
                                                      ),
                                                  ),
                                              ),
                                          ),
                                          a.createElement(i.Z, { style: D.descriptionContainer }, a.createElement(p.ZP, { size: "body", weight: "medium" }, "think" === n ? x : v)),
                                      ),
                                  ),
                                  a.createElement(
                                      i.Z,
                                      { style: [D.navRow, w ? D.pushToEnd : void 0] },
                                      a.createElement(d.Z, null, ({ isHovered: e }) => a.createElement(i.Z, { onClick: T, style: [D.ctaButton, e ? D.ctaButtonHovered : void 0] }, a.createElement(p.ZP, { color: "light" === u.default.theme.paletteName ? "white" : "alwaysBlack", size: "body", weight: "bold" }, "Try it"))),
                                  ),
                              ),
                          )
                        : null;
                },
                D = u.default.create((e) => {
                    return {
                        modalContainer: { border: `solid 1px ${e.colors.gray100}`, backgroundColor: e.colors.navigationBackground, paddingVertical: e.spaces.space24, gap: e.spaces.space32, overflow: "hidden", borderRadius: e.spaces.space24 },
                        mobileSpacing: { border: "none", borderWidth: 0, gap: e.spaces.space24, flex: 1 },
                        topBar: { width: "100%", alignItems: "flex-end", paddingHorizontal: e.spaces.space24 },
                        titleSection: { gap: e.spaces.space16, paddingHorizontal: e.spaces.space32, alignSelf: "stretch" },
                        titleSectionMobile: { paddingHorizontal: 0 },
                        mockInput: { padding: e.spaces.space24, backgroundColor: "light" === e.paletteName ? e.colors.gray0 : e.colors.gray50, borderTopStartRadius: e.spaces.space24, borderBottomStartRadius: e.spaces.space24, gap: e.spaces.space20, marginStart: e.spaces.space32, marginBottom: e.spaces.space48, minWidth: `calc(100% - ${e.spaces.space32})`, position: "relative", borderWidth: 1, borderStyle: "solid", borderColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray300, borderEnd: "none", borderEndWidth: 0 },
                        button: { ...w.il },
                        buttonRow: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" },
                        highlightedButton: { backgroundColor: "rgba(29, 155, 240, 0.2)" },
                        icon: { ...w.Qs },
                        appText: { color: "inherit" },
                        reasoningIcon: { ...w.Qs, fill: "none" },
                        descriptionContainer: { paddingHorizontal: e.spaces.space32 },
                        navRow: { flexDirection: "row", gap: e.spaces.space4, justifyContent: "center", alignItems: "center" },
                        pushToEnd: { flex: 1, alignItems: "stretch", flexDirection: "column", justifyContent: "flex-end", paddingHorizontal: e.spaces.space24, paddingBottom: e.spaces.space16 },
                        circleIcon: { height: e.spaces.space12, width: e.spaces.space12 },
                        floatingIcon: { position: "absolute", end: 8, top: "50%", transform: "translateY(-50%)", zIndex: 5 },
                        sheetMask: { backgroundColor: S("#111111", 0.5), backdropFilter: "blur(4px)" },
                        wrapperBox: { backgroundColor: "light" === e.paletteName ? e.colors.gray50 : e.colors.gray0, borderRadius: e.spaces.space32, justifyContent: "center", marginHorizontal: e.spaces.space56, paddingTop: e.spaces.space64, paddingBottom: e.spaces.space48 },
                        wrapperBoxMobile: { marginHorizontal: e.spaces.space24 },
                        wrapperInnerBox: {},
                        ctaButton: { height: u.default.theme.spaces.space48, paddingHorizontal: u.default.theme.spaces.space64, flexDirection: "row", transitionDuration: "200ms", alignItems: "center", justifyContent: "center", backgroundColor: "light" === e.paletteName ? e.colors.alwaysBlack : e.colors.white, borderRadius: e.spaces.space8, cursor: "pointer" },
                        ctaButtonHovered: { backgroundColor: "light" === e.paletteName ? ((t = e.colors.alwaysBlack), (o = 0.1), (0, y.rb)((0, g.$n)({ color: (0, y.xO)(t), coefficient: o }))) : M(e.colors.white, 0.1) },
                    };
                    var t, o;
                });
            function S(e, t) {
                const o = (0, y.xO)(e),
                    a = (0, g.oL)({ color: o, percent: t, replace: !0 });
                return (0, y.rb)(a);
            }
            function M(e, t) {
                return (0, y.rb)((0, g._j)({ color: (0, y.xO)(e), coefficient: t }));
            }
        },
        376856: (e, t, o) => {
            o.d(t, { Z: () => E });
            var a = o(202784),
                r = o(325686),
                n = o(815858),
                i = o(721266),
                s = o(392237),
                l = o(111677),
                c = o.n(l),
                p = o(542832),
                d = o(323265),
                m = o(952793),
                u = o(464023),
                g = o(962379),
                y = o(791786),
                h = o(928831),
                b = o(442955),
                f = o(300458),
                C = o(796064);
            const k = c().j22655f2;
            function E({ access: e, conversationKey: t }) {
                const o = (0, m.hC)("responsive_web_grok_promo_banner"),
                    { layout: s } = (0, g.Z)(),
                    l = s?.sections || [],
                    { filterKey: c, hasSelectedFilterKey: d, isInputFocused: u } = (0, h.w)(),
                    [E, w] = a.useState(!0),
                    v = d && l.some((e) => "FLOATING_CARD" === e.section_type && e.prompts?.some((e) => e.filter_key === c)),
                    x = a.useRef(null);
                return a.createElement(
                    n.Z,
                    { duration: "long", show: !!s, type: "fade" },
                    E &&
                        o &&
                        a.createElement(f.U, {
                            onClose: () => {
                                w(!1);
                            },
                        }),
                    a.createElement(
                        r.Z,
                        { style: _.container },
                        a.createElement(
                            r.Z,
                            { style: _.grokContainer },
                            a.createElement(
                                r.Z,
                                { style: _.searchContainer },
                                a.createElement(p.default, { style: _.logo }),
                                a.createElement(i.Z, { size: "space56" }),
                                a.createElement(y.Z, {
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
                            v
                                ? a.createElement(b.V, { hasSelectedFilterKey: d, isFocusingInput: u })
                                : a.createElement(C.ZP, {
                                      focusInput: () => {
                                          x.current && x.current.focus();
                                      },
                                      isMobile: !1,
                                      style: _.presets,
                                  }),
                        ),
                    ),
                );
            }
            const w = !!d.ZP.isWebView(),
                _ = s.default.create((e) => ({ container: { width: "100%", overflowX: "hidden", overflowY: "auto", alignItems: "center", paddingBottom: 64, gap: e.spaces.space24, paddingTop: "22vh" }, grokContainer: { maxWidth: u.vf, width: "100%", padding: e.spaces.space16 }, bottomContainer: { position: "sticky", backgroundColor: e.colors.appBarBackground, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, paddingBottom: 14, bottom: w ? 0 : e.componentDimensions.appBarHeightPx, width: "100%", borderTopStartRadius: e.spaces.space24, borderTopEndRadius: e.spaces.space24 }, searchContainer: { alignItems: "center", width: "100%", zIndex: 1e3 }, logo: { height: 70, width: 194 }, presets: { marginTop: e.spaces.space16, width: "100%" } }));
        },
        961614: (e, t, o) => {
            o.d(t, { Z: () => k });
            var a = o(202784),
                r = o(325686),
                n = o(721266),
                i = o(731708),
                s = o(392237),
                l = o(111677),
                c = o.n(l),
                p = o(464023),
                d = o(654917),
                m = o(962379),
                u = o(791786),
                g = o(928831),
                y = o(892451),
                h = o(158042),
                b = o(796064),
                f = o(701311);
            const C = c().ia5bef3e;
            function k() {
                const { access: e, conversationKey: t } = (0, d.ZP)(),
                    { filterKey: o, hasSelectedFilterKey: s } = (0, g.w)(),
                    { layout: l } = (0, m.Z)(),
                    p = a.useRef(null),
                    k = s && l?.sections.some((e) => "FLOATING_CARD" === e.section_type && e.prompts?.some((e) => e.filter_key === o));
                return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(
                        r.Z,
                        { style: E.container },
                        a.createElement(
                            r.Z,
                            { style: E.grokContainer },
                            a.createElement(
                                r.Z,
                                { style: E.searchContainer },
                                a.createElement(n.Z, { size: "space24" }),
                                a.createElement(i.ZP, { align: "center", size: "title3", weight: "medium" }, a.createElement(f.Z, { text: C })),
                                a.createElement(n.Z, { size: "space48" }),
                                a.createElement(u.Z, {
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
                            a.createElement(n.Z, { size: "space16" }),
                            k && l
                                ? a.createElement(
                                      r.Z,
                                      { style: E.moduleContainer },
                                      l.sections.map((e, t) => ("TEXT_CARD" === e.section_type ? a.createElement(h.F, { data: e, key: t, style: "block" }) : "FLOATING_CARD" === e.section_type ? a.createElement(y.u, { data: e, hasSelectedFilterKey: s, key: t }) : void 0)),
                                  )
                                : a.createElement(b.ZP, {
                                      focusInput: () => {
                                          p.current && p.current.focus();
                                      },
                                      isMobile: !1,
                                      style: E.presets,
                                  }),
                        ),
                    ),
                );
            }
            const E = s.default.create((e) => ({ grokContainer: { maxWidth: p.vf, width: "100%", padding: e.spaces.space8 }, container: { width: "100%", height: "100%", alignItems: "center", overflow: "auto", gap: e.spaces.space24 }, searchContainer: { alignItems: "center", width: "100%" }, moduleContainer: { gap: e.spaces.space24 }, presets: { width: "100%" } }));
        },
        970205: (e, t, o) => {
            o.d(t, { Z: () => s });
            var a = o(202784),
                r = o(491915),
                n = o(392237);
            const i = JSON.parse(
                '{"v":"5.5.2","nm":"grok-thinking","ddd":0,"assets":[],"w":1024,"h":988,"ip":0,"op":78,"fr":30,"fonts":{"list":[]},"layers":[{"ty":4,"st":0,"ip":0,"op":123,"ks":{},"shapes":[{"ty":"gr","it":[{"ty":"rc","p":{"a":0,"k":[569.810595,241.714867]},"s":{"a":0,"k":[1139.62119,483.429734]},"r":{"a":0,"k":0},"d":1},{"ty":"fl","o":{"a":0,"k":100},"c":{"a":0,"k":[0,0,0]}},{"ty":"tr","o":{"a":0,"k":100},"a":{"a":0,"k":[569.810595,241.714867]},"p":{"a":1,"k":[{"t":0,"s":[113.733773,564.995966],"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"t":15,"s":[113.733773,564.995966],"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"t":36,"s":[-676.07,1442.39],"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"t":57,"s":[113.733773,564.995966],"i":{"x":1,"y":1},"o":{"x":0,"y":0}}]},"s":{"a":0,"k":[137.4256,99.6022]},"r":{"a":0,"k":-45.378203}}]}],"ind":4,"parent":3,"td":1},{"ty":4,"st":0,"ip":0,"op":123,"ks":{"a":{"a":0,"k":[512,551.470657]},"p":{"a":0,"k":[512,551.470657]},"s":{"a":0,"k":[85.8824,85.8824]}},"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"sh","ks":{"a":0,"k":{"v":[[325.226,695.251],[328.285,301.668],[634.026,240.596],[749.454,186.994],[671.424,144.2],[255.323,228.382],[171.613,646.833],[71.7385,904.916],[0,987.429],[325.139,695.339]],"i":[[0,0],[-101.623,102.108],[-107.477,-45.342],[0,0],[30.583,11.423],[112.37,-112.917],[-58.369,-142.618],[72.0005,-76.098],[20.6216,-28.559],[0,0]],"o":[[-119.098,-114.411],[75.146,-75.571],[0,0],[-20.797,-15.114],[-138.234,-57.2058],[-108.089,108.699],[43.603,106.59],[-25.5148,26.977],[0,0],[0,0]],"c":false}}},{"ty":"fl","o":{"a":0,"k":100},"c":{"a":0,"k":[0.392157,0.392157,0.388235]}},{"ty":"tr","o":{"a":0,"k":100},"a":{"a":0,"k":[374.72699,551.468048]},"p":{"a":0,"k":[374.72699,551.468048]}}]},{"ty":"tr","o":{"a":0,"k":100}}]}],"ind":3,"tt":1,"tp":4},{"ty":4,"st":0,"ip":0,"op":123,"ks":{},"shapes":[{"ty":"gr","it":[{"ty":"rc","p":{"a":0,"k":[582.994165,168.286976]},"s":{"a":0,"k":[1165.988329,336.573951]},"r":{"a":0,"k":0},"d":1},{"ty":"fl","o":{"a":0,"k":100},"c":{"a":0,"k":[0,0,0]}},{"ty":"tr","o":{"a":0,"k":100},"a":{"a":0,"k":[582.994164,168.286975]},"p":{"a":1,"k":[{"t":0,"s":[805.657936,505.258749],"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"t":15,"s":[805.657936,505.258749],"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"t":36,"s":[1622.776687,-337.800281],"i":{"x":1,"y":1},"o":{"x":0,"y":0}},{"t":57,"s":[805.657936,505.258749],"i":{"x":1,"y":1},"o":{"x":0,"y":0}}]},"s":{"a":0,"k":[110.4386,134.7241]},"r":{"a":0,"k":-48.435236}}]}],"ind":2,"parent":1,"td":1},{"ty":4,"st":0,"ip":0,"op":123,"ks":{"a":{"a":0,"k":[512,494]},"p":{"a":0,"k":[512,494]},"s":{"a":0,"k":[85.8824,85.8824]}},"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"sh","ks":{"a":0,"k":{"v":[[395.479,633.828],[735.91,381.105],[784.406,392.792],[724.288,699.996],[419.247,760.277],[303.556,814.143],[796.901,773.282],[898.785,412.476],[899.047,412.739],[1016.4,10.6326],[1024,0],[883.144,141.651],[883.144,141.212],[395.392,633.916]],"i":[[0,0],[0,0],[-7.952,-19.244],[83.273,-83.743],[105.904,41.827],[0,0],[-125.914,126.713],[28.923,123.461],[0,0],[-107.042,148.2414],[-2.53,3.60279],[0,0],[0,0],[0,0]],"o":[[0,0],[16.689,-12.39],[41.854,101.493],[-83.272,83.743],[0,0],[165.934,114.059],[99.875,-100.439],[0,0],[-41.942,-181.369],[2.53,-3.51489],[0,0],[0,0],[0,0],[0,0]],"c":false}}},{"ty":"fl","o":{"a":0,"k":100},"c":{"a":0,"k":[0.392157,0.392157,0.388235]}},{"ty":"tr","o":{"a":0,"k":100},"a":{"a":0,"k":[663.777985,442.921814]},"p":{"a":0,"k":[663.777985,442.921814]}}]},{"ty":"tr","o":{"a":0,"k":100}}]}],"ind":1,"tt":1,"tp":2},{"ty":4,"st":0,"ip":0,"op":123,"ks":{"a":{"a":0,"k":[562.691091,556.173434]},"p":{"a":0,"k":[541.363613,533.491393]}},"shapes":[{"ty":"rc","p":{"a":0,"k":[562.691092,556.173434]},"s":{"a":0,"k":[1125.382183,1112.346868]},"r":{"a":0,"k":0},"d":1}]}]}',
            );
            function s({ loop: e = !0, style: t }) {
                return a.createElement(r.ZP, { animation: i, animationContainerStyle: [l.animationContainer, t], autoplay: !0, loop: e, withControls: !1 });
            }
            const l = n.default.create((e) => ({ animationContainer: { width: e.spaces.space24, height: e.spaces.space24 } }));
        },
        200179: (e, t, o) => {
            o.d(t, { Z: () => R });
            var a = o(202784),
                r = o(325686),
                n = o(721266),
                i = o(392237),
                s = o(111677),
                l = o.n(s),
                c = o(99223),
                p = o(323265),
                d = o(952793),
                m = o(125363),
                u = o(389071),
                g = o(931292),
                y = o(962379),
                h = o(791786),
                b = o(928831),
                f = o(892451),
                C = o(300458),
                k = o(796064),
                E = o(731708),
                w = o(530732),
                _ = o(715614);
            const v = l().ebea5880;
            function x({ conversationHistory: e, style: t }) {
                const o = a.useMemo(() => e.slice(0, 3), [e]);
                return o.length
                    ? a.createElement(
                          r.Z,
                          { style: [Z.container, t] },
                          a.createElement(r.Z, { style: Z.headerContainer }, a.createElement(_.default, { style: Z.headerIcon }), a.createElement(E.ZP, { style: Z.headerText }, v)),
                          a.createElement(
                              r.Z,
                              { style: Z.conversationListContainer },
                              o.map((e) => a.createElement(w.Z, { key: `recent-conversation-${e.grokConversation.rest_id}`, link: `/i/grok?conversation=${e.grokConversation.rest_id}`, onClick: () => {}, style: Z.conversationItemContainer, withoutInteractiveStyles: !0 }, a.createElement(E.ZP, { numberOfLines: 1, style: Z.conversationItemText, weight: "medium" }, e.title))),
                          ),
                      )
                    : null;
            }
            const Z = i.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space12, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(10px)" }, "100%": { opacity: 1, transform: "translateY(0)" } }], animationTimingFunction: "ease", animationFillMode: "both" }, headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, color: e.colors.gray800 }, headerIcon: { width: e.spaces.space16, height: e.spaces.space16, color: "inherit" }, headerText: { fontSize: e.fontSizes.subtext2, color: "inherit" }, conversationListContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, conversationItemContainer: { display: "flex", maxWidth: "100%", width: "max-content", backgroundColor: e.colors.gray0, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12, borderRadius: e.spaces.space12, borderStyle: "solid", borderWidth: 1, borderColor: e.colors.gray100 }, conversationItemText: { color: e.colors.gray900, fontSize: e.fontSizes.subtext1 } }));
            var I = o(213103);
            const P = l().j22655f2;
            function R({ access: e, conversationKey: t }) {
                const o = (0, m.I0)(),
                    i = (0, d.hC)("responsive_web_grok_promo_banner"),
                    s = (0, d.hC)("responsive_web_grok_show_android_promo_banner"),
                    { layout: l } = (0, y.Z)(),
                    { filterKey: p, hasSelectedFilterKey: E, hasValue: w, isInputFocused: _ } = (0, b.w)(),
                    [v, Z] = a.useState(!0),
                    R = (0, m.v9)(u.bv),
                    z = (0, m.v9)(u.JE),
                    D = a.useRef(null);
                a.useEffect(() => {
                    o((0, g.A)());
                }, [o]);
                const S = "ImageEdit" === p || "CreateImage" === p,
                    M = l?.sections.find((e) => "FLOATING_CARD" === e.section_type),
                    F = M?.prompts?.some((e) => e.filter_key === p),
                    O = () => {
                        D.current && D.current.focus();
                    };
                return a.createElement(
                    a.Fragment,
                    null,
                    E && !F
                        ? a.createElement(r.Z, { style: T.logoContainer }, a.createElement(c.default, { style: T.logo }))
                        : _
                          ? a.createElement(r.Z, { style: T.container })
                          : a.createElement(
                                r.Z,
                                { style: T.container },
                                v &&
                                    i &&
                                    a.createElement(C.U, {
                                        onClose: () => {
                                            Z(!1);
                                        },
                                    }),
                                s && a.createElement(I.t, null),
                            ),
                    a.createElement(
                        r.Z,
                        { style: T.bottomContainer },
                        w ? null : E ? (M && F ? a.createElement(a.Fragment, null, a.createElement(f.u, { data: M, hasSelectedFilterKey: E, numPromptsToShow: 2 }), a.createElement(n.Z, { axis: "y", size: S ? "space40" : "space12" })) : null) : a.createElement(r.Z, { style: T.idleContent }, "loaded" === z && !_ && a.createElement(x, { conversationHistory: R, style: T.recentConversations }), a.createElement(k.ZP, { focusInput: O, isMobile: !0, style: T.presets })),
                        a.createElement(h.Z, {
                            conversationKey: t,
                            hasAccess: !1 !== e && "restricted" !== e,
                            inputAtBottom: !0,
                            inputAtHome: !0,
                            isIdle: !0,
                            onFieldTextInputRef: (e) => {
                                D.current = e;
                            },
                            placeholder: P,
                            useDraftPersistence: !0,
                        }),
                    ),
                );
            }
            const z = !!p.ZP.isWebView(),
                T = i.default.create((e) => ({ container: { width: "100%", overflowX: "hidden", overflowY: "auto", alignItems: "center", paddingBottom: e.spaces.space64, gap: e.spaces.space24, paddingHorizontal: e.spaces.space12 }, logoContainer: { display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: "5vh", width: "100%", animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(-20px)" }, "100%": { opacity: 1, transform: "translateY(0)" } }], animationTimingFunction: "ease", animationFillMode: "both" }, logo: { height: 100, width: 100, color: e.colors.gray50 }, bottomContainer: { position: "sticky", backgroundColor: e.colors.appBarBackground, paddingVertical: e.spaces.space8, paddingBottom: 14, bottom: z ? 0 : e.componentDimensions.appBarHeightPx, width: "100%", borderTopStartRadius: e.spaces.space24, borderTopEndRadius: e.spaces.space24, paddingHorizontal: e.spaces.space12 }, idleContent: { width: "100%" }, recentConversations: { width: "100%", marginBottom: e.spaces.space12 }, presets: { width: "100%", marginBottom: e.spaces.space12 } }));
        },
        213103: (e, t, o) => {
            o.d(t, { t: () => y });
            var a = o(202784),
                r = o(325686),
                n = o(731708),
                i = o(154003),
                s = o(392237),
                l = o(111677),
                c = o.n(l),
                p = o(99223),
                d = o(952793);
            const m = c().acc4496c,
                u = c().jd36d190,
                g = c().e0aa5848;
            function y() {
                const [e, t] = a.useState(!1),
                    o = a.useCallback(() => t(!0), []),
                    s = a.useCallback(() => t(!1), []),
                    l = (0, d.hC)("responsive_web_grok_new_home_layout");
                return a.createElement(
                    r.Z,
                    {
                        onClick: () => {
                            window.location.href = "https://play.google.com/store/apps/details?id=ai.x.grok&utm_source=x&utm_campaign=grok_android_banner_voice_mode";
                        },
                        onMouseEnter: o,
                        onMouseLeave: s,
                        style: [h.notificationBanner, l ? void 0 : h.oldNotificationBanner, e ? h.hovered : void 0],
                    },
                    a.createElement(p.default, { style: h.icon }),
                    a.createElement(r.Z, { style: h.body }, a.createElement(r.Z, null, a.createElement(n.ZP, { weight: "bold" }, m)), a.createElement(n.ZP, { color: "gray800", size: "subtext2", weight: "normal" }, u)),
                    a.createElement(i.ZP, { style: h.rightButton, type: "primaryFilled" }, g),
                );
            }
            const h = s.default.create((e) => ({ notificationBanner: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space16, borderRadius: e.spaces.space16, backgroundColor: e.colors.gray50, cursor: "pointer", transition: "background-color 0.5s", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space12, width: "100%", animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(-20px)" }, "100%": { opacity: 1, transform: "translateY(0)" } }], animationTimingFunction: "ease", animationFillMode: "both" }, oldNotificationBanner: { backgroundColor: e.colors.gray0 }, hovered: { backgroundColor: e.colors.gray100 }, body: { flexGrow: 1, flexShrink: 1, gap: 4 }, icon: { minHeight: 36, minWidth: 36, flexShrink: 0 }, rightButton: { flexShrink: 0 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-cebf58fc.b9b3333a.js.map

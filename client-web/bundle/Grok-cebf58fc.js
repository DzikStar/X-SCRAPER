"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-cebf58fc"],
    {
        640350: (e, t, o) => {
            o.d(t, { V: () => k });
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
                        w = (0, u.I0)(),
                        k = (0, h.eX)(),
                        { isCompactLayout: v } = (0, s.ZP)(),
                        { isReasoningEnabled: _, isResearchEnabled: Z } = (0, f.w)(),
                        x = (0, d.hC)("responsive_web_grok_show_citations"),
                        I = a.useRef(!1),
                        P = a.useCallback(() => {
                            I.current || (0, b.az)(C, "impression", { promptId: t.prompt_id ?? "", prompt: t.prompt, sectionType: o, allPrompts: e });
                        }, [C, t.prompt_id, t.prompt, o, e]),
                        R = a.useCallback(() => i(!0), []),
                        z = a.useCallback(() => i(!1), []),
                        D = a.useCallback(() => {
                            if (((0, b.az)(C, "click", { promptId: t.prompt_id ?? "", prompt: t.prompt, sectionType: o, allPrompts: e }), "" !== t.prompt_id)) {
                                const e = "PRESET";
                                w((0, g.U)({ group_id: e, object_id: t.prompt_id, action_type: "CLICK" }));
                            }
                            w((0, y.u)({ analytics: C, conversationKey: k })({ text: t.prompt, returnCitations: x, toolOverrides: t.tool_overrides, isDeepsearch: Z, isReasoning: _ }));
                        }, [C, w, k, e, o, t.prompt, t.prompt_id, x, t.tool_overrides, Z, _]);
                    return a.createElement(r.Z, { onClick: D, onMouseEnter: R, onMouseLeave: z, style: [E.container, n ? E.hovered : void 0, v ? E.full : E.compact] }, a.createElement(r.Z, { style: t.image_url ? E.textContentWithImage : E.textContentWithoutImage }, a.createElement(p.D, { id: `prompt_${t.prompt_id}`, onFullyVisible: P, position: "bottom", testID: `prompt_${t.prompt_id}` }), !!t.display_label && a.createElement(l.ZP, { numberOfLines: 3, size: "body", weight: "bold" }, t.display_label), !!t.display_body && a.createElement(l.ZP, { color: "gray700", numberOfLines: 1, size: "subtext1", weight: "normal" }, t.display_body)), !!t.image_url && a.createElement(c.Z, { source: t.image_url, style: E.image }));
                },
                E = n.default.create((e) => ({ container: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large, cursor: "pointer", transition: "background-color 0.5s", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, textContentWithImage: { minHeight: 84, maxWidth: "70%", gap: e.spaces.space8, grow: 1, wrap: "wrap", justifyContent: "center", paddingEnd: e.spaces.space16 }, textContentWithoutImage: { minHeight: 84, width: "100%", gap: e.spaces.space8, justifyContent: "center" }, image: { grow: 0, objectFit: "cover", height: 84, width: 84, borderRadius: e.borderRadii.medium }, hovered: { backgroundColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray50 }, full: { width: "100%" }, compact: { width: "calc(50% - 8px)" } }));
            var w = o(619697);
            const k = ({ data: e }) => {
                    const { isCompactLayout: t } = (0, s.ZP)(),
                        o = (0, i.vN)(e.prompts, 4);
                    return a.createElement(
                        w.$,
                        { data: e },
                        a.createElement(
                            r.Z,
                            { style: t ? v.mobileRow : v.row },
                            o.map((t, r) => a.createElement(C, { allPrompts: o, data: t, key: r, sectionType: e.section_type ?? "NO_SECTION" })),
                        ),
                    );
                },
                v = n.default.create((e) => ({ row: { flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", gap: e.spaces.space16, width: "100%" }, mobileRow: { flexDirection: "column", alignItems: "stretch", gap: e.spaces.space16, width: "100%" } }));
        },
        892451: (e, t, o) => {
            o.d(t, { u: () => x });
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
                E = o(623494),
                w = o(988290);
            const k = ({ Icon: e, allPrompts: t, body: o, isDeepsearch: r, isImageEdit: i, isReasoning: s, label: k, prompt: _, promptAction: Z, promptId: x, sectionType: I, toolOverrides: P }) => {
                    const [R, z] = a.useState(!1),
                        D = (0, m.Z)(),
                        T = (0, u.I0)(),
                        S = (0, f.eX)(),
                        { isCompactLayout: F } = (0, w.ZP)(),
                        { clearSelectedFile: M, selectedFiles: B } = (0, h.ZP)(),
                        { clearFilterKey: O, isCreateImageEnabled: L, isImageEditEnabled: H } = (0, l.w)(),
                        K = (0, d.hC)("responsive_web_grok_show_citations"),
                        j = (0, d.hC)("responsive_web_grok_new_home_layout"),
                        N = a.useMemo(() => Object.keys(B), [B]),
                        G = a.useMemo(() => N.map((e) => B[e]?.remote).filter(Boolean), [N, B]),
                        W = a.useRef(null),
                        { handleFileChange: V } = (0, b.J)({ analytics: D, isReturnCitations: K, prompt: _, promptId: x }),
                        { enabled: A } = (0, C.Z)(),
                        $ = a.useRef(!1),
                        U = a.useCallback(() => {
                            $.current || (0, E.az)(D, "impression", { promptId: x ?? "", prompt: _, sectionType: I, allPrompts: t ?? [] });
                        }, [D, x, _, I, t]),
                        X = a.useCallback(() => z(!0), []),
                        Y = a.useCallback(() => z(!1), []),
                        J = a.useCallback(() => {
                            if (((0, E.az)(D, "click", { promptId: x ?? "", prompt: _, sectionType: I, allPrompts: t ?? [] }), "UPLOAD" === Z && W.current)) return void W.current.click();
                            let e = {};
                            if (
                                (i && (e = { attachments: G, imageGenerationCount: 4, promptMetadata: { promptSource: "IMAGE_EDIT", action: "INPUT", properties: { imageUrl: G[0].url } } }),
                                T(
                                    (0, y.u)({ analytics: D, conversationKey: S })({
                                        text: _,
                                        returnCitations: K,
                                        toolOverrides: P,
                                        isDeepsearch: r,
                                        isReasoning: s,
                                        ...e,
                                        onStart: () => {
                                            N.forEach((e) => {
                                                M(e);
                                            }),
                                                j && (L || H) && O();
                                        },
                                    }),
                                ),
                                "" !== x)
                            ) {
                                const e = "PRESET";
                                T((0, g.U)({ group_id: e, object_id: x, action_type: "CLICK" }));
                            }
                        }, [_, x, T, I, t, D, K, S, Z, P, r, s, i, G, M, N, L, H, O, j]);
                    return A ? a.createElement(n.Z, { style: [v.outerContainer, R ? v.hovered : void 0] }, a.createElement(n.Z, { onClick: J, onMouseEnter: X, onMouseLeave: Y, style: v.contentContainer }, a.createElement(p.D, { id: `prompt_${x}`, onFullyVisible: U, position: "bottom", testID: `prompt_${x}` }), a.createElement(n.Z, { style: v.promptContainer }, e ? a.createElement(e, { style: v.icon }) : void 0, a.createElement(n.Z, { style: v.prompt }, a.createElement(c.ZP, { size: "body", weight: "normal" }, k), !!o && a.createElement(c.ZP, { style: v.promptTextStyle }, o))), a.createElement("input", { onChange: V, ref: W, style: { display: "none" }, type: "file" }))) : a.createElement(n.Z, { onClick: J, onMouseEnter: X, onMouseLeave: Y, style: [v.deprecatedContainer, R ? v.hovered : void 0, F ? v.compact : void 0] }, a.createElement(p.D, { id: `prompt_${x}`, onFullyVisible: U, position: "bottom", testID: `prompt_${x}` }), a.createElement(n.Z, { style: v.deprecatedPrompt }, a.createElement(c.ZP, null, k)), e ? a.createElement(e, { style: v.deprecatedIcon }) : void 0);
                },
                v = i.default.create((e) => ({ outerContainer: { width: "100%" }, contentContainer: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, justifyContent: "center", alignItems: "flex-start", borderRadius: e.spaces.space16, cursor: "pointer", transition: "background-color 0.5s", overflow: "hidden" }, loadingBlock: { backgroundColor: "transparent" }, compact: { width: "45%" }, hovered: { backgroundColor: e.colors.gray50, borderRadius: e.spaces.space8 }, promptContainer: { flexDirection: "row", alignItems: "center" }, prompt: { marginStart: e.spaces.space8, flex: 1 }, promptTextStyle: { fontSize: e.fontSizes.headline2, color: e.colors.gray600 }, icon: { width: e.spaces.space24, height: e.spaces.space24, color: e.colors.gray800 }, deprecatedContainer: { width: 170, height: 130, padding: e.spaces.space16, justifyContent: "space-between", alignItems: "flex-start", backgroundColor: e.colors.activeFaintGray, borderRadius: e.borderRadii.large, cursor: "pointer", transition: "background-color 0.5s" }, deprecatedPrompt: { flexGrow: 1, textOverflow: "ellipsis" }, deprecatedIcon: { width: e.spaces.space20, height: e.spaces.space20, color: e.colors.link } }));
            var _ = o(619697);
            const Z = (e) => {
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
                x = (e) => {
                    const { grokInput: t, isDefault: o } = (0, l.w)(),
                        i = a.useMemo(() => e.data.prompts.filter((e) => e.filter_key === t.filterKey), [t.filterKey, e.data.prompts]),
                        { promptElements: c } = a.useMemo(() => {
                            const e = P(i),
                                t = e.map(() => new r.Z.Value(0)),
                                o = t.map((e, t) => r.Z.timing(e, { toValue: 1, duration: 300, delay: 30 * t, useNativeDriver: !1 }));
                            r.Z.parallel(o).start();
                            const n = e.map((e, o) => {
                                const n = { opacity: t[o], transform: [{ translateY: t[o].interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) }] };
                                return a.createElement(r.Z.View, { key: e.prompt_id, style: [R.gridItem, n] }, a.createElement(k, { Icon: e.icon_name ? s[e.icon_name] : void 0, isDeepsearch: "Research" === e.filter_key, isImageEdit: "ImageEdit" === e.filter_key, isReasoning: "Reasoning" === e.filter_key, label: e.display_body ?? "", prompt: e.prompt, promptId: e.prompt_id, sectionType: "FLOATING_CARD", toolOverrides: e.tool_overrides }));
                            });
                            return { animatedValues: t, promptElements: n };
                        }, [i]);
                    return (o && !e.hasSelectedFilterKey) || 0 === c.length ? null : a.createElement(Z, { animationKey: t.filterKey || "default", style: R.fadeContainer }, a.createElement(_.$, { data: e.data }, a.createElement(n.Z, { style: R.container }, c)));
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
                P = (e) => {
                    const t = ["g3_image_edit_2"],
                        o = e.filter((e) => e.prompt_id && t.includes(e.prompt_id));
                    if (o.length >= 4) return I(o).slice(0, 4);
                    const a = 4 - o.length,
                        r = e.filter((e) => !(o.includes(e) || (e.prompt_id && t.includes(e.prompt_id))));
                    for (let e = 0; e < a && e < r.length; e++) o.push(r[e]);
                    return I(o);
                },
                R = i.default.create((e) => ({ container: { width: "100%", flexDirection: "column", alignItems: "stretch" }, gridItem: { alignItems: "flex-start", width: "100%" }, fadeContainer: { width: "100%" } }));
        },
        648536: (e, t, o) => {
            o.d(t, { L: () => v });
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
                E = o(623494),
                w = o(721270);
            const k = "rweb.highlightedPromptClicks",
                v = ({ data: e }) => {
                    const t = (0, h.v9)(f.ZP.selectLoggedInUser),
                        o = (0, r.Dv)(m.lZ),
                        d = (0, y.Z)(),
                        v = (0, h.I0)(),
                        Z = (0, C.eX)(),
                        x = (0, g.hC)("responsive_web_grok_show_citations"),
                        I = (0, g.JY)("responsive_web_grok_highlighted_prompt_clicks_until_fatigue", -1),
                        [P, R] = a.useState(I < 0),
                        [z, D] = a.useState(null),
                        T = a.useRef(!1);
                    a.useEffect(() => {
                        0 !== I &&
                            (I < 0 ||
                                o.get(k).then((t) => {
                                    const o = { ...(t || {}) };
                                    D(o);
                                    const a = e.prompts.some((e) => o[e.prompt_id] <= I);
                                    (t && !a) || R(!0);
                                }));
                    }, [I, R, o, e.prompts]);
                    const S = a.useCallback(
                        (t) => {
                            T.current || (0, E.az)(d, "impression", { promptId: t.prompt_id, prompt: t.prompt, sectionType: "HIGHLIGHTED_PROMPTS", allPrompts: e.prompts });
                        },
                        [d, e.prompts],
                    );
                    if (!P) return null;
                    const F = e.prompts.length;
                    return a.createElement(
                        n.Z,
                        { style: _.container },
                        (!!e.title || !!e.subtitle) && a.createElement(n.Z, { style: _.titleContainer }, !!e.title && a.createElement(i.ZP, { size: "headline2", weight: "bold" }, e.title), !!e.subtitle && a.createElement(i.ZP, { color: "gray600" }, e.subtitle)),
                        a.createElement(
                            s.Z,
                            { buttonsContainerStyle: _.promptsInnerContainer, childrenStyle: [F <= 1 ? _.singlePromptOuterContainer : _.multiplePromptOuterContainer], style: _.promptsContainer },
                            e.prompts.map((e) => {
                                const r = "DRAW_ME" === e.action && t && t.profile_image_url_https;
                                return a.createElement(
                                    l.Z,
                                    {
                                        key: e.prompt_id,
                                        onClick: () =>
                                            ((e) => {
                                                (0, E.az)(d, "click", { promptId: e.prompt_id ?? "", prompt: e.prompt, sectionType: "HIGHLIGHTED_PROMPTS", allPrompts: [e] }), v((0, b.u)({ analytics: d, conversationKey: Z })({ text: e.prompt, returnCitations: x, isDeepsearch: "Research" === e.filter_key, isReasoning: "Reasoning" === e.filter_key, imageGenerationCount: 4 }));
                                                const t = { ...(z || {}) };
                                                t[e.prompt_id] || (t[e.prompt_id] = 0), t[e.prompt_id]++, o.set(k, t);
                                            })(e),
                                        withoutInteractiveStyles: !0,
                                    },
                                    ({ isHovered: o }) => a.createElement(n.Z, { style: [_.promptContainer, o ? _.hoveredPromptContainer : void 0] }, a.createElement(u.D, { id: `prompt_${e.prompt_id}`, onFullyVisible: () => S(e), position: "bottom", testID: `prompt_${e.prompt_id}` }), r ? a.createElement(c.default, { shape: "circle", size: "xLarge", uri: t?.profile_image_url_https }) : e.image_url ? a.createElement(n.Z, { style: _.imgContainer }, a.createElement(p.Z, { resizeMode: "cover", source: e.image_url, style: _.img })) : void 0, a.createElement(n.Z, { style: _.infoContainer }, e.display_label && a.createElement(i.ZP, { size: "headline2", weight: "medium" }, e.display_label), e.display_body && a.createElement(i.ZP, { color: "gray700", size: "body", weight: "normal" }, a.createElement(w.GrokMarkdown, { isAnimated: !1, markdownText: e.display_body })))),
                                );
                            }),
                        ),
                    );
                },
                _ = d.default.create((e) => ({ container: { display: "flex", flexDirection: "column" }, titleContainer: { marginTop: e.spaces.space12, marginBottom: e.spaces.space16, display: "flex", flexDirection: "column", gap: e.spaces.space8 }, promptsContainer: { width: "100%" }, promptsInnerContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space16 }, promptContainer: { padding: e.spaces.space16, borderRadius: e.spaces.space16, display: "flex", flexDirection: "row", gap: e.spaces.space16, backgroundColor: e.colors.gray0, transition: "background-color 0.3s ease", alignItems: "center" }, singlePromptOuterContainer: { flex: 1 }, multiplePromptOuterContainer: { width: "max-content", minWidth: 150, maxWidth: 400 }, hoveredPromptContainer: { backgroundColor: e.colors.gray50 }, imgContainer: { alignSelf: "stretch", minHeight: 40, animationDuration: "0.5s", animationKeyframes: [{ "0%": { transform: "scale(0.9)", opacity: 0 }, "100%": { transform: "scale(1)", opacity: 1 } }], animationTimingFunction: "ease", animationIterationCount: 1, opacity: 1, aspectRatio: 1 }, img: { height: "100%", minWidth: 50, aspectRatio: 1, borderRadius: e.spaces.space8 }, infoContainer: { display: "flex", flex: 1, flexDirection: "column", gap: e.spaces.space4 }, iconContainer: { width: 14, height: 14 }, icon: { top: 3, width: 14, height: 14 } }));
        },
        781939: (e, t, o) => {
            o.d(t, { $: () => v });
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
            const E = ({ allPrompts: e, disableClick: t, imageUrl: o, imageUrl2x: i, label: E, prompt: k, promptId: v, sectionType: _, toolOverrides: Z }) => {
                    const [x, I] = a.useState(!1),
                        P = (0, m.Z)(),
                        R = (0, u.I0)(),
                        z = (0, h.eX)(),
                        { isCompactLayout: D } = (0, s.ZP)(),
                        { enabled: T } = (0, f.Z)(),
                        S = (0, b.Z)("image_block"),
                        F = a.useRef(!1),
                        M = a.useCallback(() => {
                            F.current || (0, C.az)(P, "impression", { promptId: v ?? "", prompt: k, sectionType: _, allPrompts: e ?? [] });
                        }, [P, v, k, _, e]),
                        B = a.useCallback(() => I(!0), []),
                        O = a.useCallback(() => I(!1), []),
                        L = a.useCallback(() => {
                            if (!t && ((0, C.az)(P, "click", { promptId: v ?? "", prompt: k, sectionType: _, allPrompts: e ?? [] }), R((0, y.u)({ analytics: P, conversationKey: z })({ text: k, returnCitations: !1, imageGenerationCount: S, toolOverrides: Z })), "" !== v)) {
                                const e = "PRESET";
                                R((0, g.U)({ group_id: e, object_id: v ?? "", action_type: "CLICK" }));
                            }
                        }, [t, k, v, _, e, R, P, z, S, Z]),
                        H = a.useMemo(() => ("light" === n.default.theme.paletteName ? [w.shadow, x ? { opacity: 0.25 } : { opacity: 0 }] : [w.shadow, x ? { opacity: 0 } : { opacity: 0.7 }]), [x]),
                        K = a.useMemo(() => ("light" === n.default.theme.paletteName ? [w.shadow, x ? { opacity: 0.25 } : { opacity: 0 }] : [w.shadow, x ? { opacity: 0 } : { opacity: 0.5 }]), [x]),
                        j = l.Z.get() > 1 ? i : o;
                    return T ? a.createElement(r.Z, { onClick: L, onMouseEnter: B, onMouseLeave: O, style: w.container }, a.createElement(d.D, { id: `prompt_${v ?? o}`, onFullyVisible: M, position: "bottom", testID: `prompt_${v ?? o}` }), a.createElement(r.Z, { style: w.prompt }, a.createElement(c.ZP, { numberOfLines: 2, size: "subtext2", style: w.promptText, weight: "medium" }, E)), a.createElement(r.Z, { style: K }), a.createElement(p.Z, { resizeMode: "cover", source: { uri: j }, style: w.image })) : a.createElement(r.Z, { onClick: L, onMouseEnter: B, onMouseLeave: O, style: [w.deprecatedContainer, D ? w.deprecatedCompact : void 0] }, a.createElement(r.Z, { style: w.deprecatedPrompt }, a.createElement(c.ZP, { size: "subtext1" }, E)), a.createElement(r.Z, { style: H }), a.createElement(p.Z, { resizeMode: "cover", source: { uri: j }, style: w.image }));
                },
                w = n.default.create((e) => ({ container: { height: 150, justifyContent: "space-between", alignItems: "flex-start", backgroundColor: e.colors.activeFaintGray, borderRadius: e.borderRadii.xLarge, borderColor: e.colors.gray50, borderWidth: "1px", borderStyle: "solid", overflow: "hidden", cursor: "pointer", flex: 1, grow: 1 }, prompt: { flexGrow: 1, textOverflow: "ellipsis", position: "absolute", bottom: e.spaces.space8, start: e.spaces.space8, maxWidth: "calc(100% - 20px)", zIndex: 10, transition: "opacity 0.3s", paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8, backgroundColor: "rgba(102, 102, 102, 0.3)", borderRadius: e.borderRadii.medium, borderWidth: e.spaces.space1, borderStyle: "solid", borderColor: "rgba(255,255, 255, 0.15)", backdropFilter: "blur(1px)" }, promptText: { color: "white" }, icon: { width: e.spaces.space20, height: e.spaces.space20, color: e.colors.link }, shadow: { position: "absolute", width: "100%", height: "100%", zIndex: 5, backgroundColor: e.colors.cellBackground, transition: "opacity 0.3s" }, image: { position: "absolute", width: "100%", height: "100%", zIndex: 1 }, deprecatedContainer: { width: 352, height: 220, justifyContent: "space-between", alignItems: "flex-start", backgroundColor: e.colors.activeFaintGray, borderRadius: e.borderRadii.large, overflow: "hidden", cursor: "pointer" }, deprecatedCompact: { width: `calc(90% + ${e.spaces.space12})` }, deprecatedPrompt: { flexGrow: 1, textOverflow: "ellipsis", position: "absolute", bottom: e.spaces.space12, start: e.spaces.space12, zIndex: 10, transition: "opacity 0.3s", paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space12, borderRadius: e.borderRadii.medium, backgroundColor: e.colors.cellBackground } }));
            var k = o(619697);
            const v = ({ data: e }) => {
                    const { isCompactLayout: t } = (0, s.ZP)(),
                        o = t ? 2 : 3,
                        n = a.useMemo(() => e.prompts.filter((e) => !!e.image_url), [e]),
                        l = (0, i.vN)(n, o);
                    return a.createElement(
                        k.$,
                        { data: e },
                        a.createElement(
                            r.Z,
                            { style: _.row },
                            l.map((t, o) => a.createElement(E, { allPrompts: l, imageUrl: t.image_url, imageUrl2x: t.image_url, key: t.prompt, label: t.display_label, prompt: t.prompt, promptId: t.prompt_id, sectionType: e.section_type ?? "NO_SECTION", toolOverrides: t.tool_overrides })),
                        ),
                    );
                },
                _ = n.default.create((e) => ({ row: { flexDirection: "row", justifyContent: "space-between", overflowX: "auto", flexWrap: "nowrap", gap: e.spaces.space16, width: "100%" } }));
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
                E = o(623494),
                w = o(988290);
            const k = ({ Icon: e, allPrompts: t, body: o, isDeepsearch: n, isImageEdit: i, isReasoning: s, label: k, prompt: _, promptAction: Z, promptId: x, sectionType: I, toolOverrides: P }) => {
                    const [R, z] = a.useState(!1),
                        D = (0, m.Z)(),
                        T = (0, u.I0)(),
                        S = (0, f.eX)(),
                        { isCompactLayout: F } = (0, w.ZP)(),
                        { selectedFiles: M } = (0, h.ZP)(),
                        B = (0, d.hC)("responsive_web_grok_show_citations"),
                        O = a.useMemo(() => Object.keys(M), [M]),
                        L = a.useMemo(() => O.map((e) => M[e]?.remote).filter(Boolean), [O, M]),
                        H = a.useRef(null),
                        { handleFileChange: K } = (0, b.J)({ analytics: D, isReturnCitations: B, prompt: _, promptId: x }),
                        { enabled: j } = (0, C.Z)(),
                        N = a.useRef(!1),
                        G = a.useCallback(() => {
                            N.current || (0, E.az)(D, "impression", { promptId: x ?? "", prompt: _, sectionType: I, allPrompts: t ?? [] });
                        }, [D, x, _, I, t]),
                        W = a.useCallback(() => z(!0), []),
                        V = a.useCallback(() => z(!1), []),
                        A = a.useCallback(() => {
                            if (((0, E.az)(D, "click", { promptId: x ?? "", prompt: _, sectionType: I, allPrompts: t ?? [] }), "UPLOAD" === Z && H.current)) return void H.current.click();
                            let e = {};
                            if ((i && (e = { attachments: L, imageGenerationCount: 4, promptMetadata: { promptSource: "IMAGE_EDIT", action: "INPUT", properties: { imageUrl: L[0].url } } }), T((0, y.u)({ analytics: D, conversationKey: S })({ text: _, returnCitations: B, toolOverrides: P, isDeepsearch: n, isReasoning: s, ...e })), "" !== x)) {
                                const e = "PRESET";
                                T((0, g.U)({ group_id: e, object_id: x, action_type: "CLICK" }));
                            }
                        }, [_, x, T, I, t, D, B, S, Z, P, n, s, i, L]);
                    return j ? a.createElement(r.Z, { onClick: A, onMouseEnter: W, onMouseLeave: V, style: [v.container, R ? v.hovered : void 0] }, e ? a.createElement(a.Fragment, null, a.createElement(e, { style: v.icon }), a.createElement(c.Z, { size: "space8" })) : void 0, a.createElement(r.Z, { style: v.prompt }, a.createElement(l.ZP, { size: "body", weight: "medium" }, k), !!o && a.createElement(l.ZP, { color: "gray600", size: "body", weight: "normal" }, o)), a.createElement("input", { onChange: K, ref: H, style: { display: "none" }, type: "file" })) : a.createElement(r.Z, { onClick: A, onMouseEnter: W, onMouseLeave: V, style: [v.deprecatedContainer, R ? v.hovered : void 0, F ? v.compact : void 0] }, a.createElement(p.D, { id: `prompt_${x}`, onFullyVisible: G, position: "bottom", testID: `prompt_${x}` }), a.createElement(r.Z, { style: v.deprecatedPrompt }, a.createElement(l.ZP, null, k)), e ? a.createElement(e, { style: v.deprecatedIcon }) : void 0);
                },
                v = i.default.create((e) => ({ container: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, justifyContent: "center", alignItems: "flex-start", backgroundColor: e.colors.gray0, borderRadius: e.spaces.space12, cursor: "pointer", transition: "background-color 0.5s", overflow: "hidden", flex: 1, flexGrow: 1, shrink: 1, minWidth: 150, maxHeight: 68, minHeight: 68 }, loadingBlock: { backgroundColor: "transparent" }, compact: { width: "45%" }, hovered: { backgroundColor: e.colors.gray50 }, prompt: { textOverflow: "ellipsis", wrap: "wrap" }, icon: { width: e.spaces.space20, height: e.spaces.space20, shrink: 0, color: e.colors.gray900 }, deprecatedContainer: { width: 170, height: 130, padding: e.spaces.space16, justifyContent: "space-between", alignItems: "flex-start", backgroundColor: e.colors.activeFaintGray, borderRadius: e.borderRadii.large, cursor: "pointer", transition: "background-color 0.5s" }, deprecatedPrompt: { flexGrow: 1, textOverflow: "ellipsis" }, deprecatedIcon: { width: e.spaces.space20, height: e.spaces.space20, color: e.colors.link } }));
            var _ = o(619697);
            const Z = ({ Icon: e, allPrompts: t, label: o, prompt: n, promptAction: i, promptId: s, sectionType: h, toolOverrides: C }) => {
                    const [w, k] = a.useState(!1),
                        v = (0, m.Z)(),
                        _ = (0, u.I0)(),
                        Z = (0, f.eX)(),
                        I = (0, d.hC)("responsive_web_grok_show_citations"),
                        P = a.useRef(!1),
                        R = a.useRef(null),
                        { handleFileChange: z } = (0, b.J)({ analytics: v, isReturnCitations: I, prompt: n, promptId: s }),
                        D = a.useCallback(() => {
                            P.current || (0, E.az)(v, "impression", { promptId: s ?? "", prompt: n, sectionType: h, allPrompts: t });
                        }, [v, s, n, h, t]),
                        T = a.useCallback(() => k(!0), []),
                        S = a.useCallback(() => k(!1), []),
                        F = a.useCallback(() => {
                            if (((0, E.az)(v, "click", { promptId: s ?? "", prompt: n, sectionType: h, allPrompts: t }), "UPLOAD" === i && R.current)) R.current.click();
                            else if ((_((0, y.u)({ analytics: v, conversationKey: Z })({ text: n, returnCitations: I, toolOverrides: C })), "" !== s)) {
                                const e = "PRESET";
                                _((0, g.U)({ group_id: e, object_id: s, action_type: "CLICK" }));
                            }
                        }, [n, s, h, t, i, _, v, I, Z, C]);
                    return a.createElement(r.Z, { onClick: F, onMouseEnter: T, onMouseLeave: S, style: [x.pill, w ? x.hovered : void 0] }, !!e && a.createElement(a.Fragment, null, a.createElement(e, { style: x.icon }), a.createElement(c.Z, { size: "space8" })), a.createElement(p.D, { id: `prompt_${s}`, onFullyVisible: D, position: "bottom", testID: `prompt_${s}` }), a.createElement(r.Z, { style: x.prompt }, a.createElement(l.ZP, { size: "body", weight: "bold" }, o)), a.createElement("input", { onChange: z, ref: R, style: { display: "none" }, type: "file" }));
                },
                x = i.default.create((e) => ({ pill: { backgroundColor: e.colors.gray0, paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, transition: "background-color 0.5s", borderRadius: e.spaces.space12, flexGrow: 1, shrink: 0, flexDirection: "row", justifyContent: "center", alignItems: "center" }, prompt: { textOverflow: "ellipsis" }, hovered: { backgroundColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray50, cursor: "pointer" }, icon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray800 } })),
                I = ({ data: e, style: t }) => {
                    const o = (0, s.vN)(e.prompts, 10);
                    return a.createElement(
                        _.$,
                        { data: e },
                        a.createElement(
                            n.Z,
                            { showNavButtonsOnHover: !1, style: P.carousel, withWraparound: !0 },
                            o.map((n, i) => a.createElement(r.Z, { key: n.prompt }, "pill" === t ? a.createElement(Z, { Icon: (0, s.wG)(n.icon_name || "") || void 0, allPrompts: o, isDeepsearch: "research" === n.filter_key?.toLowerCase(), isReasoning: "reasoning" === n.filter_key?.toLowerCase(), label: n.display_label, prompt: n.prompt, promptAction: n.action, promptId: n.prompt_id, sectionType: e.section_type ?? "NO_SECTION", toolOverrides: n.tool_overrides }) : a.createElement(k, { Icon: (0, s.wG)(n.icon_name || "") || void 0, allPrompts: o, isDeepsearch: "research" === n.filter_key?.toLowerCase(), isImageEdit: "imageedit" === n.filter_key?.toLowerCase(), isReasoning: "reasoning" === n.filter_key?.toLowerCase(), label: n.display_label, prompt: n.prompt, promptAction: n.action, promptId: n.prompt_id, sectionType: e.section_type ?? "NO_SECTION", toolOverrides: n.tool_overrides }))),
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
                        { isCompactLayout: C, isGrokDrawer: E } = (0, s.ZP)(),
                        w = a.useCallback(() => n(!0), []),
                        k = a.useCallback(() => n(!1), []),
                        { enabled: v } = (0, y.Z)(),
                        _ = (0, p.hC)("responsive_web_grok_show_citations"),
                        Z = a.useCallback(() => {
                            h((0, u.u)({ analytics: i, conversationKey: f })({ text: e.value, trendPromptIdStr: e.trendPromptIdStr, returnCitations: _ }));
                        }, [i, h, e, _, f]);
                    return v ? a.createElement(r.Z, { onClick: Z, onMouseEnter: w, onMouseLeave: k, style: [b.container, o ? b.hovered : void 0, C ? b.full : b.compact] }, a.createElement(r.Z, { style: e.imageUrl ? b.textContentWithImage : b.textContentWithoutImage }, a.createElement(l.ZP, { numberOfLines: 2, size: "headline2", weight: "bold" }, e.header), a.createElement(l.ZP, { color: "gray700", numberOfLines: 1, size: "subtext1", weight: "normal" }, e.text)), !!e.imageUrl && a.createElement(c.Z, { source: e.imageUrl, style: b.image })) : a.createElement(r.Z, { onClick: Z, onMouseEnter: w, onMouseLeave: k, style: [b.deprecatedContainer, o ? b.hovered : void 0, C && !E ? b.deprecatedCompact : void 0] }, a.createElement(r.Z, { style: b.deprecatedPrompt }, a.createElement(l.ZP, null, e.header)), a.createElement(l.ZP, { color: "gray500" }, e.text));
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
                            { style: o ? E.mobileRow : E.row },
                            n.map((e) => a.createElement(h, { key: e.value, prompt: e })),
                        ),
                    );
                },
                E = n.default.create((e) => ({ row: { flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap", gap: e.spaces.space16, width: "calc(100% + 16px)", marginStart: "-8px" }, mobileRow: { flexDirection: "column", alignItems: "stretch", gap: e.spaces.space16, width: "100%" } }));
        },
        300458: (e, t, o) => {
            o.d(t, { U: () => D });
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
                h = o(674132),
                b = o.n(h),
                f = o(837020),
                C = o(956272),
                E = o(408814),
                w = o(928831),
                k = o(764326),
                v = o(701311);
            const _ = b().hf9afab0,
                Z = b().ef3b3f04,
                x = b().b43636b8,
                I = b().j376298c,
                P = b().e3584f8e,
                R = b().d91b7b8a,
                z = (0, n.O4)("hideGrokPromoBanner_17", !1, void 0, { getOnInit: !0 }),
                D = ({ onClose: e }) => {
                    const { grokModeButtonStatusKey: t, grokModeButtons: o } = (0, w.w)(),
                        [n, g] = a.useState("search"),
                        [y, h] = (0, r.KO)(z),
                        b = a.useRef(null),
                        k = (0, s.yu)(),
                        D = () => {
                            h(!0), e();
                        };
                    a.useEffect(() => ((b.current = setTimeout(() => g("think"), 4e3)), () => clearTimeout(b.current)), [g]);
                    const S = a.useCallback(() => {
                            b.current && clearTimeout(b.current);
                        }, []),
                        F = o.find((e) => ("Research" === e.filter_key && "Enabled" === e[t]) || ("Research" === e.filter_key && "Disabled" === e[t])),
                        M = o.find((e) => ("Reasoning" === e.filter_key && "Enabled" === e[t]) || ("Research" === e.filter_key && "Disabled" === e[t]));
                    return !y && F && M
                        ? a.createElement(
                              l.Z,
                              { maskStyle: T.sheetMask, onMaskClick: D, type: "full", withMask: !0 },
                              a.createElement(
                                  i.Z,
                                  { style: [T.modalContainer, k ? T.mobileSpacing : null] },
                                  a.createElement(i.Z, { style: T.topBar }, a.createElement(c.ZP, { backgroundColor: "transparent", borderColor: "transparent", icon: a.createElement(f.default, null), onClick: D, size: "small" }), a.createElement(i.Z, { style: [T.titleSection, k ? T.titleSectionMobile : void 0] }, a.createElement(p.ZP, { size: "title2", weight: "bold" }, x), a.createElement(p.ZP, { size: "body", weight: "medium" }, I))),
                                  a.createElement(
                                      i.Z,
                                      { style: [T.wrapperBox, k ? T.wrapperBoxMobile : void 0] },
                                      a.createElement(
                                          i.Z,
                                          { style: T.wrapperInnerBox },
                                          a.createElement(d.Z, null, ({ isHovered: e }) =>
                                              a.createElement(
                                                  i.Z,
                                                  { style: T.mockInput },
                                                  a.createElement(i.Z, { style: { minHeight: 40 } }, a.createElement(p.ZP, { size: "body", weight: "medium" }, "search" === n && a.createElement(v.Z, { text: P }), "think" === n && a.createElement(v.Z, { text: R }))),
                                                  a.createElement(
                                                      i.Z,
                                                      { style: T.buttonRow },
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
                                                              style: [T.button, "search" === n ? T.highlightedButton : null],
                                                          },
                                                          a.createElement(C.default, { style: T.icon }),
                                                          a.createElement(m.Z, { size: "space4" }),
                                                          a.createElement(p.ZP, { size: "subtext2", style: T.appText, weight: "medium" }, F?.label || ""),
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
                                                              style: [T.button, "think" === n ? T.highlightedButton : null],
                                                          },
                                                          a.createElement(E.default, { style: T.reasoningIcon }),
                                                          a.createElement(m.Z, { size: "space4" }),
                                                          a.createElement(p.ZP, { size: "subtext2", style: T.appText, weight: "medium" }, M?.label || ""),
                                                      ),
                                                  ),
                                              ),
                                          ),
                                          a.createElement(i.Z, { style: T.descriptionContainer }, a.createElement(p.ZP, { size: "body", weight: "medium" }, "think" === n ? Z : _)),
                                      ),
                                  ),
                                  a.createElement(
                                      i.Z,
                                      { style: [T.navRow, k ? T.pushToEnd : void 0] },
                                      a.createElement(d.Z, null, ({ isHovered: e }) => a.createElement(i.Z, { onClick: D, style: [T.ctaButton, e ? T.ctaButtonHovered : void 0] }, a.createElement(p.ZP, { color: "light" === u.default.theme.paletteName ? "white" : "alwaysBlack", size: "body", weight: "bold" }, "Try it"))),
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
                        button: { ...k.il },
                        buttonRow: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center" },
                        highlightedButton: { backgroundColor: "rgba(29, 155, 240, 0.2)" },
                        icon: { ...k.Qs },
                        appText: { color: "inherit" },
                        reasoningIcon: { ...k.Qs, fill: "none" },
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
                        ctaButtonHovered: { backgroundColor: "light" === e.paletteName ? ((t = e.colors.alwaysBlack), (o = 0.1), (0, y.rb)((0, g.$n)({ color: (0, y.xO)(t), coefficient: o }))) : F(e.colors.white, 0.1) },
                    };
                    var t, o;
                });
            function S(e, t) {
                const o = (0, y.xO)(e),
                    a = (0, g.oL)({ color: o, percent: t, replace: !0 });
                return (0, y.rb)(a);
            }
            function F(e, t) {
                return (0, y.rb)((0, g._j)({ color: (0, y.xO)(e), coefficient: t }));
            }
        },
        376856: (e, t, o) => {
            o.d(t, { Z: () => w });
            var a = o(202784),
                r = o(325686),
                n = o(815858),
                i = o(721266),
                s = o(392237),
                l = o(674132),
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
            const E = c().j22655f2;
            function w({ access: e, conversationKey: t }) {
                const o = (0, m.hC)("responsive_web_grok_promo_banner"),
                    { layout: s } = (0, g.Z)(),
                    l = s?.sections || [],
                    { filterKey: c, hasSelectedFilterKey: d, isInputFocused: u } = (0, h.w)(),
                    [w, k] = a.useState(!0),
                    _ = d && l.some((e) => "FLOATING_CARD" === e.section_type && e.prompts?.some((e) => e.filter_key === c)),
                    Z = a.useRef(null);
                return a.createElement(
                    n.Z,
                    { duration: "long", show: !!s, type: "fade" },
                    w &&
                        o &&
                        a.createElement(f.U, {
                            onClose: () => {
                                k(!1);
                            },
                        }),
                    a.createElement(
                        r.Z,
                        { style: v.container },
                        a.createElement(
                            r.Z,
                            { style: v.grokContainer },
                            a.createElement(
                                r.Z,
                                { style: v.searchContainer },
                                a.createElement(p.default, { style: v.logo }),
                                a.createElement(i.Z, { size: "space56" }),
                                a.createElement(y.Z, {
                                    conversationKey: t,
                                    hasAccess: !1 !== e && "restricted" !== e,
                                    inputAtHome: !0,
                                    isIdle: !0,
                                    onFieldTextInputRef: (e) => {
                                        Z.current = e;
                                    },
                                    placeholder: E,
                                    useDraftPersistence: !0,
                                }),
                            ),
                            _
                                ? a.createElement(b.V, { hasSelectedFilterKey: d, isFocusingInput: u })
                                : a.createElement(C.ZP, {
                                      focusInput: () => {
                                          Z.current && Z.current.focus();
                                      },
                                      isMobile: !1,
                                      style: v.presets,
                                  }),
                        ),
                    ),
                );
            }
            const k = !!d.ZP.isWebView(),
                v = s.default.create((e) => ({ container: { width: "100%", overflowX: "hidden", overflowY: "auto", alignItems: "center", paddingBottom: 64, gap: e.spaces.space24, paddingTop: "22vh" }, grokContainer: { maxWidth: u.vf, width: "100%", padding: e.spaces.space16 }, bottomContainer: { position: "sticky", backgroundColor: e.colors.appBarBackground, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, paddingBottom: 14, bottom: k ? 0 : e.componentDimensions.appBarHeightPx, width: "100%", borderTopStartRadius: e.spaces.space24, borderTopEndRadius: e.spaces.space24 }, searchContainer: { alignItems: "center", width: "100%", zIndex: 1e3 }, logo: { height: 70, width: 194 }, presets: { marginTop: e.spaces.space16, width: "100%" } }));
        },
        961614: (e, t, o) => {
            o.d(t, { Z: () => E });
            var a = o(202784),
                r = o(325686),
                n = o(721266),
                i = o(731708),
                s = o(392237),
                l = o(674132),
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
            function E() {
                const { access: e, conversationKey: t } = (0, d.ZP)(),
                    { filterKey: o, hasSelectedFilterKey: s } = (0, g.w)(),
                    { layout: l } = (0, m.Z)(),
                    p = a.useRef(null),
                    E = s && l?.sections.some((e) => "FLOATING_CARD" === e.section_type && e.prompts?.some((e) => e.filter_key === o));
                return a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(
                        r.Z,
                        { style: w.container },
                        a.createElement(
                            r.Z,
                            { style: w.grokContainer },
                            a.createElement(
                                r.Z,
                                { style: w.searchContainer },
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
                            E && l
                                ? a.createElement(
                                      r.Z,
                                      { style: w.moduleContainer },
                                      l.sections.map((e, t) => ("TEXT_CARD" === e.section_type ? a.createElement(h.F, { data: e, key: t, style: "block" }) : "FLOATING_CARD" === e.section_type ? a.createElement(y.u, { data: e, hasSelectedFilterKey: s, key: t }) : void 0)),
                                  )
                                : a.createElement(b.ZP, {
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
        200179: (e, t, o) => {
            o.d(t, { Z: () => R });
            var a = o(202784),
                r = o(325686),
                n = o(721266),
                i = o(392237),
                s = o(674132),
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
                E = o(796064),
                w = o(731708),
                k = o(530732),
                v = o(715614);
            const _ = l().ebea5880;
            function Z({ conversationHistory: e, style: t }) {
                const o = a.useMemo(() => e.slice(0, 3), [e]);
                return o.length
                    ? a.createElement(
                          r.Z,
                          { style: [x.container, t] },
                          a.createElement(r.Z, { style: x.headerContainer }, a.createElement(v.default, { style: x.headerIcon }), a.createElement(w.ZP, { style: x.headerText }, _)),
                          a.createElement(
                              r.Z,
                              { style: x.conversationListContainer },
                              o.map((e) => a.createElement(k.Z, { key: `recent-conversation-${e.grokConversation.rest_id}`, link: `/i/grok?conversation=${e.grokConversation.rest_id}`, onClick: () => {}, style: x.conversationItemContainer, withoutInteractiveStyles: !0 }, a.createElement(w.ZP, { numberOfLines: 1, style: x.conversationItemText, weight: "medium" }, e.title))),
                          ),
                      )
                    : null;
            }
            const x = i.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space12, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(10px)" }, "100%": { opacity: 1, transform: "translateY(0)" } }], animationTimingFunction: "ease", animationFillMode: "both" }, headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, color: e.colors.gray800 }, headerIcon: { width: e.spaces.space16, height: e.spaces.space16, color: "inherit" }, headerText: { fontSize: e.fontSizes.subtext2, color: "inherit" }, conversationListContainer: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, conversationItemContainer: { display: "flex", maxWidth: "100%", width: "max-content", backgroundColor: e.colors.gray50, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12, borderRadius: e.spaces.space12 }, conversationItemText: { color: e.colors.gray900, fontSize: e.fontSizes.subtext1 } }));
            var I = o(213103);
            const P = l().j22655f2;
            function R({ access: e, conversationKey: t }) {
                const o = (0, m.I0)(),
                    i = (0, d.hC)("responsive_web_grok_promo_banner"),
                    s = (0, d.hC)("responsive_web_grok_show_android_promo_banner"),
                    { layout: l } = (0, y.Z)(),
                    { filterKey: p, hasSelectedFilterKey: w, hasValue: k, isInputFocused: v } = (0, b.w)(),
                    [_, x] = a.useState(!0),
                    R = (0, m.v9)(u.bv),
                    z = (0, m.v9)(u.JE);
                a.useEffect(() => {
                    o((0, g.A)());
                }, [o]);
                const T = "ImageEdit" === p || "CreateImage" === p,
                    S = l?.sections.find((e) => "FLOATING_CARD" === e.section_type),
                    F = S?.prompts?.some((e) => e.filter_key === p);
                return a.createElement(
                    a.Fragment,
                    null,
                    w && !F
                        ? a.createElement(r.Z, { style: D.logoContainer }, a.createElement(c.default, { style: D.logo }))
                        : v
                          ? a.createElement(r.Z, { style: D.container })
                          : a.createElement(
                                r.Z,
                                { style: D.container },
                                _ &&
                                    i &&
                                    a.createElement(C.U, {
                                        onClose: () => {
                                            x(!1);
                                        },
                                    }),
                                s && a.createElement(I.t, null),
                            ),
                    a.createElement(r.Z, { style: D.bottomContainer }, k ? null : w ? (S && F ? a.createElement(a.Fragment, null, a.createElement(f.u, { data: S, hasSelectedFilterKey: w }), a.createElement(n.Z, { axis: "y", size: T ? "space40" : "space12" })) : null) : a.createElement(r.Z, { style: D.idleContent }, "loaded" === z && !v && a.createElement(Z, { conversationHistory: R, style: D.recentConversations }), a.createElement(E.ZP, { isMobile: !0, style: D.presets })), a.createElement(h.Z, { conversationKey: t, hasAccess: !1 !== e && "restricted" !== e, inputAtBottom: !0, inputAtHome: !0, isIdle: !0, placeholder: P, useDraftPersistence: !0 })),
                );
            }
            const z = !!p.ZP.isWebView(),
                D = i.default.create((e) => ({ container: { width: "100%", overflowX: "hidden", overflowY: "auto", alignItems: "center", paddingBottom: e.spaces.space64, gap: e.spaces.space24, paddingHorizontal: e.spaces.space12 }, logoContainer: { display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: "5vh", width: "100%", animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0, transform: "translateY(-20px)" }, "100%": { opacity: 1, transform: "translateY(0)" } }], animationTimingFunction: "ease", animationFillMode: "both" }, logo: { height: 100, width: 100, color: e.colors.gray50 }, bottomContainer: { position: "sticky", backgroundColor: e.colors.appBarBackground, paddingVertical: e.spaces.space8, paddingBottom: 14, bottom: z ? 0 : e.componentDimensions.appBarHeightPx, width: "100%", borderTopStartRadius: e.spaces.space24, borderTopEndRadius: e.spaces.space24, paddingHorizontal: e.spaces.space12 }, idleContent: { width: "100%" }, recentConversations: { width: "100%", marginBottom: e.spaces.space12 }, presets: { width: "100%", marginBottom: e.spaces.space12 } }));
        },
        796064: (e, t, o) => {
            o.d(t, { ZP: () => I, mC: () => Z, y3: () => _ });
            var a = o(807896),
                r = (o(136728), o(202784)),
                n = o(214997),
                i = o(325686),
                s = o(449161),
                l = o(731708),
                c = o(154003),
                p = o(721266),
                d = o(392237),
                m = o(674132),
                u = o.n(m),
                g = o(707187),
                y = o(254944),
                h = o(409600),
                b = o(191796),
                f = o(323265),
                C = o(725405),
                E = o(620988),
                w = o(623494),
                k = o(246277),
                v = o(928831);
            const _ = u().acb2baa0,
                Z = u().d1d3a41a,
                x = u().h30fd372;
            function I({ focusInput: e, isMobile: t, style: o }) {
                const d = (0, C.Z)(),
                    { setFilterKey: m } = (0, v.w)(),
                    { clearSelectedFile: u, onFileSelected: I, selectedFiles: R } = (0, E.ZP)(),
                    z = [
                        {
                            id: "create-images",
                            text: _,
                            icon: r.createElement(g.default, { style: [P.icon, t ? P.mobileIcon : null] }),
                            onClick: () => {
                                m("CreateImage");
                            },
                            type: "prefill",
                        },
                        { id: "edit-image", text: Z, icon: r.createElement(y.default, { style: [P.icon, t ? P.mobileIcon : null] }), onClick: () => {}, type: "file-input" },
                    ];
                f.ZP.isAndroid() && z.push({ id: "try-voice-mode", text: x, icon: r.createElement(h.default, { style: [P.icon, t ? P.mobileIcon : null] }), onClick: () => {}, type: "external-link", url: "https://play.google.com/store/apps/details?id=ai.x.grok" });
                const D = r.useCallback(
                        (e) => {
                            if (e.length <= 0) return;
                            const t = Object.keys(R);
                            t.length > 0 &&
                                t.forEach((e) => {
                                    u(e);
                                });
                            const o = e[0];
                            I(o).then(() => {
                                m("ImageEdit");
                            }),
                                (0, w.dP)(d, "button");
                        },
                        [I, d, m, R, u],
                    ),
                    T = r.useCallback(
                        (t, o) => {
                            d.scribe({ element: "grok-home-preset", action: "click", data: { event_info: o.id } }), "external-link" === o.type && o.url ? window.open(o.url, "_blank") : o.onClick && (o.onClick?.(), t.preventDefault(), e?.());
                        },
                        [e, d],
                    ),
                    S = (e) => ({
                        backgroundColor: "gray50",
                        borderColor: "transparent",
                        key: e.id,
                        onClick: (t) => {
                            T(t, e);
                        },
                        style: t ? P.mobilePreset : P.preset,
                    });
                return t
                    ? r.createElement(
                          n.Z,
                          { contentContainerStyle: P.mobilePresetContainer, horizontal: !0, showsHorizontalScrollIndicator: !1, style: [P.mobilePresets, o] },
                          z.map((e) => {
                              const t = S(e);
                              return "file-input" === e.type && "edit-image" === e.id
                                  ? r.createElement(
                                        s.Z,
                                        (0, a.Z)({}, t, {
                                            accept: k.$.join(","),
                                            multiple: !1,
                                            onChange: (e) => {
                                                D(e);
                                            },
                                            onClick: void 0,
                                        }),
                                        r.createElement(i.Z, { style: P.mobileButtonContent }, e.icon, r.createElement(l.ZP, { style: P.text }, e.text)),
                                    )
                                  : r.createElement(c.ZP, t, r.createElement(i.Z, { style: P.mobileButtonContent }, r.createElement(i.Z, { style: P.mobilePresetHeader }, e.icon, "external-link" === e.type && r.createElement(b.default, { style: P.externalLinkIcon })), r.createElement(l.ZP, { style: P.text }, e.text)));
                          }),
                      )
                    : r.createElement(
                          i.Z,
                          { style: [P.presets, o] },
                          z.map((e) => {
                              const t = S(e);
                              return "file-input" === e.type && "edit-image" === e.id
                                  ? r.createElement(
                                        s.Z,
                                        (0, a.Z)({}, t, {
                                            accept: k.$.join(","),
                                            multiple: !1,
                                            onChange: (e) => {
                                                D(e);
                                            },
                                            onClick: void 0,
                                        }),
                                        e.icon,
                                        r.createElement(p.Z, { size: "space4" }),
                                        r.createElement(l.ZP, { style: P.text }, e.text),
                                    )
                                  : r.createElement(c.ZP, t, e.icon, r.createElement(p.Z, { size: "space4" }), r.createElement(l.ZP, { style: P.text }, e.text));
                          }),
                      );
            }
            const P = d.default.create((e) => ({ mobilePresets: { animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" }, mobilePresetContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space12 }, mobilePreset: { borderRadius: e.spaces.space16, overflow: "hidden", padding: e.spaces.space12, paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12 }, mobileButtonContent: { display: "flex", gap: e.spaces.space8, flexDirection: "column" }, mobilePresetHeader: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }, presets: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: e.spaces.space12, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease", animationFillMode: "both" }, preset: { display: "flex", flexDirection: "row", alignItems: "center", transition: "background-color 0.2s ease", paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12, paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8, borderRadius: e.spaces.space16 }, icon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray900 }, mobileIcon: { width: e.spaces.space20, height: e.spaces.space20 }, text: { fontSize: e.fontSizes.subtext1, fontWeight: e.fontWeights.medium, marginStart: e.spaces.space4, color: e.colors.gray900 }, externalLinkIcon: { width: e.spaces.space20, height: e.spaces.space20, color: e.colors.gray400 } }));
        },
        213103: (e, t, o) => {
            o.d(t, { t: () => y });
            var a = o(202784),
                r = o(325686),
                n = o(731708),
                i = o(154003),
                s = o(392237),
                l = o(674132),
                c = o.n(l),
                p = o(99223),
                d = o(952793);
            const m = c().d07488a6,
                u = c().d9cfe70c,
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
                            window.location.href = "https://play.google.com/store/apps/details?id=ai.x.grok";
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-cebf58fc.1078186a.js.map

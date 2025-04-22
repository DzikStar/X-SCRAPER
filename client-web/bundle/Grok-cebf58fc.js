"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-cebf58fc"],
    {
        640350: (e, t, o) => {
            o.d(t, { V: () => w });
            var r = o(202784),
                a = o(325686),
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
                    const [n, i] = r.useState(!1),
                        C = (0, m.Z)(),
                        _ = (0, u.I0)(),
                        w = (0, h.eX)(),
                        { isCompactLayout: k } = (0, s.ZP)(),
                        { isReasoningEnabled: v, isResearchEnabled: Z } = (0, f.w)(),
                        x = (0, d.hC)("responsive_web_grok_show_citations"),
                        I = r.useRef(!1),
                        P = r.useCallback(() => {
                            I.current || (0, b.az)(C, "impression", { promptId: t.prompt_id ?? "", prompt: t.prompt, sectionType: o, allPrompts: e });
                        }, [C, t.prompt_id, t.prompt, o, e]),
                        R = r.useCallback(() => i(!0), []),
                        z = r.useCallback(() => i(!1), []),
                        M = r.useCallback(() => {
                            if (((0, b.az)(C, "click", { promptId: t.prompt_id ?? "", prompt: t.prompt, sectionType: o, allPrompts: e }), "" !== t.prompt_id)) {
                                const e = "PRESET";
                                _((0, g.U)({ group_id: e, object_id: t.prompt_id, action_type: "CLICK" }));
                            }
                            _((0, y.u)({ analytics: C, conversationKey: w })({ text: t.prompt, returnCitations: x, toolOverrides: t.tool_overrides, isDeepsearch: Z, isReasoning: v }));
                        }, [C, _, w, e, o, t.prompt, t.prompt_id, x, t.tool_overrides, Z, v]);
                    return r.createElement(a.Z, { onClick: M, onMouseEnter: R, onMouseLeave: z, style: [E.container, n ? E.hovered : void 0, k ? E.full : E.compact] }, r.createElement(a.Z, { style: t.image_url ? E.textContentWithImage : E.textContentWithoutImage }, r.createElement(p.D, { id: `prompt_${t.prompt_id}`, onFullyVisible: P, position: "bottom", testID: `prompt_${t.prompt_id}` }), !!t.display_label && r.createElement(l.ZP, { numberOfLines: 3, size: "body", weight: "bold" }, t.display_label), !!t.display_body && r.createElement(l.ZP, { color: "gray700", numberOfLines: 1, size: "subtext1", weight: "normal" }, t.display_body)), !!t.image_url && r.createElement(c.Z, { source: t.image_url, style: E.image }));
                },
                E = n.default.create((e) => ({ container: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large, cursor: "pointer", transition: "background-color 0.5s", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, textContentWithImage: { minHeight: 84, maxWidth: "70%", gap: e.spaces.space8, grow: 1, wrap: "wrap", justifyContent: "center", paddingEnd: e.spaces.space16 }, textContentWithoutImage: { minHeight: 84, width: "100%", gap: e.spaces.space8, justifyContent: "center" }, image: { grow: 0, objectFit: "cover", height: 84, width: 84, borderRadius: e.borderRadii.medium }, hovered: { backgroundColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray50 }, full: { width: "100%" }, compact: { width: "calc(50% - 8px)" } }));
            var _ = o(619697);
            const w = ({ data: e }) => {
                    const { isCompactLayout: t } = (0, s.ZP)(),
                        o = (0, i.vN)(e.prompts, 4);
                    return r.createElement(
                        _.$,
                        { data: e },
                        r.createElement(
                            a.Z,
                            { style: t ? k.mobileRow : k.row },
                            o.map((t, a) => r.createElement(C, { allPrompts: o, data: t, key: a, sectionType: e.section_type ?? "NO_SECTION" })),
                        ),
                    );
                },
                k = n.default.create((e) => ({ row: { flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", gap: e.spaces.space16, width: "100%" }, mobileRow: { flexDirection: "column", alignItems: "stretch", gap: e.spaces.space16, width: "100%" } }));
        },
        892451: (e, t, o) => {
            o.d(t, { u: () => x });
            o(136728);
            var r = o(202784),
                a = o(744610),
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
                _ = o(988290);
            const w = ({ Icon: e, allPrompts: t, body: o, isDeepsearch: a, isImageEdit: i, isReasoning: s, label: l, prompt: w, promptAction: v, promptId: Z, sectionType: x, toolOverrides: I }) => {
                    const [P, R] = r.useState(!1),
                        z = (0, m.Z)(),
                        M = (0, u.I0)(),
                        S = (0, f.eX)(),
                        { isCompactLayout: D } = (0, _.ZP)(),
                        { clearSelectedFile: T, selectedFiles: O } = (0, h.ZP)(),
                        B = (0, d.hC)("responsive_web_grok_show_citations"),
                        L = r.useMemo(() => Object.keys(O), [O]),
                        N = r.useMemo(() => L.map((e) => O[e]?.remote).filter(Boolean), [L, O]),
                        F = r.useRef(null),
                        { handleFileChange: H } = (0, b.J)({ analytics: z, isReturnCitations: B, prompt: w, promptId: Z }),
                        { enabled: G } = (0, C.Z)(),
                        j = r.useRef(!1),
                        W = r.useCallback(() => {
                            j.current || (0, E.az)(z, "impression", { promptId: Z ?? "", prompt: w, sectionType: x, allPrompts: t ?? [] });
                        }, [z, Z, w, x, t]),
                        V = r.useCallback(() => R(!0), []),
                        $ = r.useCallback(() => R(!1), []),
                        K = r.useCallback(() => {
                            if (((0, E.az)(z, "click", { promptId: Z ?? "", prompt: w, sectionType: x, allPrompts: t ?? [] }), "UPLOAD" === v && F.current)) return void F.current.click();
                            let e = {};
                            if (
                                (i && (e = { attachments: N, imageGenerationCount: 4, promptMetadata: { promptSource: "IMAGE_EDIT", action: "INPUT", properties: { imageUrl: N[0].url } } }),
                                M(
                                    (0, y.u)({ analytics: z, conversationKey: S })({
                                        text: w,
                                        returnCitations: B,
                                        toolOverrides: I,
                                        isDeepsearch: a,
                                        isReasoning: s,
                                        ...e,
                                        onStart: () => {
                                            L.forEach((e) => {
                                                T(e);
                                            });
                                        },
                                    }),
                                ),
                                "" !== Z)
                            ) {
                                const e = "PRESET";
                                M((0, g.U)({ group_id: e, object_id: Z, action_type: "CLICK" }));
                            }
                        }, [w, Z, M, x, t, z, B, S, v, I, a, s, i, N, T, L]);
                    return G ? r.createElement(n.Z, { style: [k.outerContainer, P ? k.hovered : void 0] }, r.createElement(n.Z, { onClick: K, onMouseEnter: V, onMouseLeave: $, style: k.contentContainer }, r.createElement(p.D, { id: `prompt_${Z}`, onFullyVisible: W, position: "bottom", testID: `prompt_${Z}` }), r.createElement(n.Z, { style: k.promptContainer }, e ? r.createElement(e, { style: k.icon }) : void 0, r.createElement(n.Z, { style: k.prompt }, r.createElement(c.ZP, { size: "body", weight: "normal" }, l), !!o && r.createElement(c.ZP, { style: k.promptTextStyle }, o))), r.createElement("input", { onChange: H, ref: F, style: { display: "none" }, type: "file" }))) : r.createElement(n.Z, { onClick: K, onMouseEnter: V, onMouseLeave: $, style: [k.deprecatedContainer, P ? k.hovered : void 0, D ? k.compact : void 0] }, r.createElement(p.D, { id: `prompt_${Z}`, onFullyVisible: W, position: "bottom", testID: `prompt_${Z}` }), r.createElement(n.Z, { style: k.deprecatedPrompt }, r.createElement(c.ZP, null, l)), e ? r.createElement(e, { style: k.deprecatedIcon }) : void 0);
                },
                k = i.default.create((e) => ({ outerContainer: { width: "100%" }, contentContainer: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, justifyContent: "center", alignItems: "flex-start", borderRadius: e.spaces.space16, cursor: "pointer", transition: "background-color 0.5s", overflow: "hidden" }, loadingBlock: { backgroundColor: "transparent" }, compact: { width: "45%" }, hovered: { backgroundColor: e.colors.gray50, borderRadius: e.spaces.space8 }, promptContainer: { flexDirection: "row", alignItems: "center" }, prompt: { marginStart: e.spaces.space8, flex: 1 }, promptTextStyle: { fontSize: e.fontSizes.headline2, color: e.colors.gray600 }, icon: { width: e.spaces.space24, height: e.spaces.space24, color: e.colors.gray800 }, deprecatedContainer: { width: 170, height: 130, padding: e.spaces.space16, justifyContent: "space-between", alignItems: "flex-start", backgroundColor: e.colors.activeFaintGray, borderRadius: e.borderRadii.large, cursor: "pointer", transition: "background-color 0.5s" }, deprecatedPrompt: { flexGrow: 1, textOverflow: "ellipsis" }, deprecatedIcon: { width: e.spaces.space20, height: e.spaces.space20, color: e.colors.link } }));
            var v = o(619697);
            const Z = (e) => {
                    const [t, o] = r.useState(e.children),
                        n = r.useRef(e.animationKey),
                        i = r.useRef(new a.Z.Value(0)).current;
                    return (
                        r.useEffect(() => {
                            a.Z.timing(i, { toValue: 1, duration: 300, useNativeDriver: !1 }).start();
                        }, [i]),
                        r.useEffect(() => {
                            n.current !== e.animationKey &&
                                ((n.current = e.animationKey),
                                a.Z.timing(i, { toValue: 0, duration: 150, useNativeDriver: !1 }).start(() => {
                                    o(e.children), a.Z.timing(i, { toValue: 1, duration: 150, useNativeDriver: !1 }).start();
                                }));
                        }, [e.children, e.animationKey, i]),
                        r.createElement(a.Z.View, { style: [{ opacity: i }, e.style] }, t)
                    );
                },
                x = (e) => {
                    const { grokInput: t, isDefault: o } = (0, l.w)(),
                        i = r.useMemo(() => e.data.prompts.filter((e) => e.filter_key === t.selectedGrokModeButton?.filter_key), [t.selectedGrokModeButton, e.data.prompts]),
                        { promptElements: c } = r.useMemo(() => {
                            const e = P(i),
                                t = e.map(() => new a.Z.Value(0)),
                                o = t.map((e, t) => a.Z.timing(e, { toValue: 1, duration: 300, delay: 30 * t, useNativeDriver: !1 }));
                            a.Z.parallel(o).start();
                            const n = e.map((e, o) => {
                                const n = { opacity: t[o], transform: [{ translateY: t[o].interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) }] };
                                return r.createElement(a.Z.View, { key: e.prompt_id, style: [R.gridItem, n] }, r.createElement(w, { Icon: e.icon_name ? s[e.icon_name] : void 0, isDeepsearch: "Research" === e.filter_key, isImageEdit: "ImageEdit" === e.filter_key, isReasoning: "Reasoning" === e.filter_key, label: e.display_body ?? "", prompt: e.prompt, promptId: e.prompt_id, sectionType: "FLOATING_CARD", toolOverrides: e.tool_overrides }));
                            });
                            return { animatedValues: t, promptElements: n };
                        }, [i]);
                    return (o && !e.hasSelectedMode) || 0 === c.length ? null : r.createElement(Z, { animationKey: t.selectedGrokModeButton?.filter_key || "default", style: R.fadeContainer }, r.createElement(v.$, { data: e.data }, r.createElement(n.Z, { style: R.container }, c)));
                },
                I = (e) => {
                    const t = [...e];
                    for (let e = t.length - 1; e > 0; e--) {
                        const o = Math.floor(Math.random() * (e + 1)),
                            r = t[e];
                        (t[e] = t[o]), (t[o] = r);
                    }
                    return t;
                },
                P = (e) => {
                    const t = ["g3_image_edit_2"],
                        o = e.filter((e) => e.prompt_id && t.includes(e.prompt_id));
                    if (o.length >= 4) return I(o).slice(0, 4);
                    const r = 4 - o.length,
                        a = e.filter((e) => !(o.includes(e) || (e.prompt_id && t.includes(e.prompt_id))));
                    for (let e = 0; e < r && e < a.length; e++) o.push(a[e]);
                    return I(o);
                },
                R = i.default.create((e) => ({ container: { width: "100%", flexDirection: "column", alignItems: "stretch" }, gridItem: { alignItems: "flex-start", width: "100%" }, fadeContainer: { width: "100%" } }));
        },
        648536: (e, t, o) => {
            o.d(t, { L: () => k });
            var r = o(202784),
                a = o(400752),
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
                _ = o(721270);
            const w = "rweb.highlightedPromptClicks",
                k = ({ data: e }) => {
                    const t = (0, h.v9)(f.ZP.selectLoggedInUser),
                        o = (0, a.Dv)(m.lZ),
                        d = (0, y.Z)(),
                        k = (0, h.I0)(),
                        Z = (0, C.eX)(),
                        x = (0, g.hC)("responsive_web_grok_show_citations"),
                        I = (0, g.JY)("responsive_web_grok_highlighted_prompt_clicks_until_fatigue", -1),
                        [P, R] = r.useState(I < 0),
                        [z, M] = r.useState(null),
                        S = r.useRef(!1);
                    r.useEffect(() => {
                        0 !== I &&
                            (I < 0 ||
                                o.get(w).then((t) => {
                                    const o = { ...(t || {}) };
                                    M(o);
                                    const r = e.prompts.some((e) => o[e.prompt_id] <= I);
                                    (t && !r) || R(!0);
                                }));
                    }, [I, R, o, e.prompts]);
                    const D = r.useCallback(
                        (t) => {
                            S.current || (0, E.az)(d, "impression", { promptId: t.prompt_id, prompt: t.prompt, sectionType: "HIGHLIGHTED_PROMPTS", allPrompts: e.prompts });
                        },
                        [d, e.prompts],
                    );
                    if (!P) return null;
                    const T = e.prompts.length;
                    return r.createElement(
                        n.Z,
                        { style: v.container },
                        (!!e.title || !!e.subtitle) && r.createElement(n.Z, { style: v.titleContainer }, !!e.title && r.createElement(i.ZP, { size: "headline2", weight: "bold" }, e.title), !!e.subtitle && r.createElement(i.ZP, { color: "gray600" }, e.subtitle)),
                        r.createElement(
                            s.Z,
                            { buttonsContainerStyle: v.promptsInnerContainer, childrenStyle: [T <= 1 ? v.singlePromptOuterContainer : v.multiplePromptOuterContainer], style: v.promptsContainer },
                            e.prompts.map((e) => {
                                const a = "DRAW_ME" === e.action && t && t.profile_image_url_https;
                                return r.createElement(
                                    l.Z,
                                    {
                                        key: e.prompt_id,
                                        onClick: () =>
                                            ((e) => {
                                                (0, E.az)(d, "click", { promptId: e.prompt_id ?? "", prompt: e.prompt, sectionType: "HIGHLIGHTED_PROMPTS", allPrompts: [e] }), k((0, b.u)({ analytics: d, conversationKey: Z })({ text: e.prompt, returnCitations: x, isDeepsearch: "Research" === e.filter_key, isReasoning: "Reasoning" === e.filter_key, imageGenerationCount: 4 }));
                                                const t = { ...(z || {}) };
                                                t[e.prompt_id] || (t[e.prompt_id] = 0), t[e.prompt_id]++, o.set(w, t);
                                            })(e),
                                        withoutInteractiveStyles: !0,
                                    },
                                    ({ isHovered: o }) => r.createElement(n.Z, { style: [v.promptContainer, o ? v.hoveredPromptContainer : void 0] }, r.createElement(u.D, { id: `prompt_${e.prompt_id}`, onFullyVisible: () => D(e), position: "bottom", testID: `prompt_${e.prompt_id}` }), a ? r.createElement(c.default, { shape: "circle", size: "xLarge", uri: t?.profile_image_url_https }) : e.image_url ? r.createElement(n.Z, { style: v.imgContainer }, r.createElement(p.Z, { resizeMode: "cover", source: e.image_url, style: v.img })) : void 0, r.createElement(n.Z, { style: v.infoContainer }, e.display_label && r.createElement(i.ZP, { size: "headline2", weight: "medium" }, e.display_label), e.display_body && r.createElement(i.ZP, { color: "gray700", size: "body", weight: "normal" }, r.createElement(_.GrokMarkdown, { isAnimated: !1, markdownText: e.display_body })))),
                                );
                            }),
                        ),
                    );
                },
                v = d.default.create((e) => ({ container: { display: "flex", flexDirection: "column" }, titleContainer: { marginTop: e.spaces.space12, marginBottom: e.spaces.space16, display: "flex", flexDirection: "column", gap: e.spaces.space8 }, promptsContainer: { width: "100%" }, promptsInnerContainer: { display: "flex", flexDirection: "row", gap: e.spaces.space16 }, promptContainer: { padding: e.spaces.space16, borderRadius: e.spaces.space16, display: "flex", flexDirection: "row", gap: e.spaces.space16, backgroundColor: e.colors.gray0, transition: "background-color 0.3s ease", alignItems: "center" }, singlePromptOuterContainer: { flex: 1 }, multiplePromptOuterContainer: { width: "max-content", minWidth: 150, maxWidth: 400 }, hoveredPromptContainer: { backgroundColor: e.colors.gray50 }, imgContainer: { alignSelf: "stretch", minHeight: 40, animationDuration: "0.5s", animationKeyframes: [{ "0%": { transform: "scale(0.9)", opacity: 0 }, "100%": { transform: "scale(1)", opacity: 1 } }], animationTimingFunction: "ease", animationIterationCount: 1, opacity: 1, aspectRatio: 1 }, img: { height: "100%", minWidth: 50, aspectRatio: 1, borderRadius: e.spaces.space8 }, infoContainer: { display: "flex", flex: 1, flexDirection: "column", gap: e.spaces.space4 }, iconContainer: { width: 14, height: 14 }, icon: { top: 3, width: 14, height: 14 } }));
        },
        97696: (e, t, o) => {
            o.d(t, { $: () => p });
            var r = o(202784),
                a = o(325686),
                n = o(392237),
                i = o(20716),
                s = o(988290),
                l = o(832393),
                c = o(619697);
            const p = ({ data: e }) => {
                    const { isCompactLayout: t } = (0, s.ZP)(),
                        o = t ? 2 : 3,
                        n = r.useMemo(() => e.prompts.filter((e) => !!e.image_url), [e]),
                        p = (0, i.vN)(n, o);
                    return r.createElement(
                        c.$,
                        { data: e },
                        r.createElement(
                            a.Z,
                            { style: d.row },
                            p.map((t, o) => r.createElement(l.I, { allPrompts: p, imageUrl: t.image_url, imageUrl2x: t.image_url, key: t.prompt, label: t.display_label, prompt: t.prompt, promptId: t.prompt_id, sectionType: e.section_type ?? "NO_SECTION", toolOverrides: t.tool_overrides })),
                        ),
                    );
                },
                d = n.default.create((e) => ({ row: { flexDirection: "row", justifyContent: "space-between", overflowX: "auto", flexWrap: "nowrap", gap: e.spaces.space16, width: "100%" } }));
        },
        619697: (e, t, o) => {
            o.d(t, { $: () => l });
            var r = o(202784),
                a = o(325686),
                n = o(731708),
                i = o(721266),
                s = o(392237);
            const l = ({ children: e, data: t }) => r.createElement(a.Z, { style: c.container }, !!t.title && r.createElement(r.Fragment, null, r.createElement(n.ZP, { size: "body", weight: "bold" }, t.title)), !!t.title && !!t.subtitle && r.createElement(i.Z, { size: "space8" }), !!t.subtitle && r.createElement(r.Fragment, null, r.createElement(n.ZP, { color: "gray500", size: "subtext1" }, t.subtitle)), t.title || t.subtitle ? r.createElement(i.Z, { size: "space16" }) : void 0, e),
                c = s.default.create((e) => ({ container: { width: "100%" } }));
        },
        521927: (e, t, o) => {
            o.d(t, { F: () => k });
            var r = o(202784),
                a = o(325686),
                n = o(194504),
                i = o(392237),
                s = o(20716),
                l = o(959147),
                c = o(619697),
                p = o(721266),
                d = o(731708),
                m = o(306677),
                u = o(952793),
                g = o(725405),
                y = o(125363),
                h = o(53939),
                b = o(327597),
                f = o(764226),
                C = o(654917),
                E = o(623494);
            const _ = ({ Icon: e, allPrompts: t, label: o, prompt: n, promptAction: i, promptId: s, sectionType: l, toolOverrides: c }) => {
                    const [_, k] = r.useState(!1),
                        v = (0, g.Z)(),
                        Z = (0, y.I0)(),
                        x = (0, C.eX)(),
                        I = (0, u.hC)("responsive_web_grok_show_citations"),
                        P = r.useRef(!1),
                        R = r.useRef(null),
                        { handleFileChange: z } = (0, f.J)({ analytics: v, isReturnCitations: I, prompt: n, promptId: s }),
                        M = r.useCallback(() => {
                            P.current || (0, E.az)(v, "impression", { promptId: s ?? "", prompt: n, sectionType: l, allPrompts: t });
                        }, [v, s, n, l, t]),
                        S = r.useCallback(() => k(!0), []),
                        D = r.useCallback(() => k(!1), []),
                        T = r.useCallback(() => {
                            if (((0, E.az)(v, "click", { promptId: s ?? "", prompt: n, sectionType: l, allPrompts: t }), "UPLOAD" === i && R.current)) R.current.click();
                            else if ((Z((0, b.u)({ analytics: v, conversationKey: x })({ text: n, returnCitations: I, toolOverrides: c })), "" !== s)) {
                                const e = "PRESET";
                                Z((0, h.U)({ group_id: e, object_id: s, action_type: "CLICK" }));
                            }
                        }, [n, s, l, t, i, Z, v, I, x, c]);
                    return r.createElement(a.Z, { onClick: T, onMouseEnter: S, onMouseLeave: D, style: [w.pill, _ ? w.hovered : void 0] }, !!e && r.createElement(r.Fragment, null, r.createElement(e, { style: w.icon }), r.createElement(p.Z, { size: "space8" })), r.createElement(m.D, { id: `prompt_${s}`, onFullyVisible: M, position: "bottom", testID: `prompt_${s}` }), r.createElement(a.Z, { style: w.prompt }, r.createElement(d.ZP, { size: "body", weight: "bold" }, o)), r.createElement("input", { onChange: z, ref: R, style: { display: "none" }, type: "file" }));
                },
                w = i.default.create((e) => ({ pill: { backgroundColor: e.colors.gray0, paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, transition: "background-color 0.5s", borderRadius: e.spaces.space12, flexGrow: 1, shrink: 0, flexDirection: "row", justifyContent: "center", alignItems: "center" }, prompt: { textOverflow: "ellipsis" }, hovered: { backgroundColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray50, cursor: "pointer" }, icon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray800 } })),
                k = ({ data: e, style: t }) => {
                    const o = (0, s.vN)(e.prompts, 10);
                    return r.createElement(
                        c.$,
                        { data: e },
                        r.createElement(
                            n.Z,
                            { showNavButtonsOnHover: !1, style: v.carousel, withWraparound: !0 },
                            o.map((n, i) => r.createElement(a.Z, { key: n.prompt }, "pill" === t ? r.createElement(_, { Icon: (0, s.wG)(n.icon_name || "") || void 0, allPrompts: o, isDeepsearch: "research" === n.filter_key?.toLowerCase(), isReasoning: "reasoning" === n.filter_key?.toLowerCase(), label: n.display_label, prompt: n.prompt, promptAction: n.action, promptId: n.prompt_id, sectionType: e.section_type ?? "NO_SECTION", toolOverrides: n.tool_overrides }) : r.createElement(l.p, { Icon: (0, s.wG)(n.icon_name || "") || void 0, allPrompts: o, isDeepsearch: "research" === n.filter_key?.toLowerCase(), isImageEdit: "imageedit" === n.filter_key?.toLowerCase(), isReasoning: "reasoning" === n.filter_key?.toLowerCase(), label: n.display_label, prompt: n.prompt, promptAction: n.action, promptId: n.prompt_id, sectionType: e.section_type ?? "NO_SECTION", toolOverrides: n.tool_overrides }))),
                        ),
                    );
                },
                v = i.default.create((e) => ({ carousel: { width: "100%" } }));
        },
        740705: (e, t, o) => {
            o.d(t, { E: () => p });
            var r = o(202784),
                a = o(325686),
                n = o(392237),
                i = o(20716),
                s = o(988290),
                l = o(176310),
                c = o(619697);
            const p = ({ data: e, prompts: t }) => {
                    const { isCompactLayout: o } = (0, s.ZP)(),
                        n = (0, i.vN)(t);
                    return r.createElement(
                        c.$,
                        { data: e },
                        r.createElement(
                            a.Z,
                            { style: o ? d.mobileRow : d.row },
                            n.map((e) => r.createElement(l.Y, { key: e.value, prompt: e })),
                        ),
                    );
                },
                d = n.default.create((e) => ({ row: { flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap", gap: e.spaces.space16, width: "calc(100% + 16px)", marginStart: "-8px" }, mobileRow: { flexDirection: "column", alignItems: "stretch", gap: e.spaces.space16, width: "100%" } }));
        },
        300458: (e, t, o) => {
            o.d(t, { U: () => M });
            var r = o(202784),
                a = o(400752),
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
                _ = o(928831),
                w = o(764326),
                k = o(701311);
            const v = b().hf9afab0,
                Z = b().ef3b3f04,
                x = b().b43636b8,
                I = b().j376298c,
                P = b().e3584f8e,
                R = b().d91b7b8a,
                z = (0, n.O4)("hideGrokPromoBanner_17", !1, void 0, { getOnInit: !0 }),
                M = ({ onClose: e }) => {
                    const { grokModeButtonStatusKey: t, grokModeButtons: o } = (0, _.w)(),
                        [n, g] = r.useState("search"),
                        [y, h] = (0, a.KO)(z),
                        b = r.useRef(null),
                        w = (0, s.yu)(),
                        M = () => {
                            h(!0), e();
                        };
                    r.useEffect(() => ((b.current = setTimeout(() => g("think"), 4e3)), () => clearTimeout(b.current)), [g]);
                    const D = r.useCallback(() => {
                            b.current && clearTimeout(b.current);
                        }, []),
                        T = o.find((e) => ("Research" === e.filter_key && "Enabled" === e[t]) || ("Research" === e.filter_key && "Disabled" === e[t])),
                        O = o.find((e) => ("Reasoning" === e.filter_key && "Enabled" === e[t]) || ("Research" === e.filter_key && "Disabled" === e[t]));
                    return !y && T && O
                        ? r.createElement(
                              l.Z,
                              { maskStyle: S.sheetMask, onMaskClick: M, type: "full", withMask: !0 },
                              r.createElement(
                                  i.Z,
                                  { style: [S.modalContainer, w ? S.mobileSpacing : null] },
                                  r.createElement(i.Z, { style: S.topBar }, r.createElement(c.ZP, { backgroundColor: "transparent", borderColor: "transparent", icon: r.createElement(f.default, null), onClick: M, size: "small" }), r.createElement(i.Z, { style: [S.titleSection, w ? S.titleSectionMobile : void 0] }, r.createElement(p.ZP, { size: "title2", weight: "bold" }, x), r.createElement(p.ZP, { size: "body", weight: "medium" }, I))),
                                  r.createElement(
                                      i.Z,
                                      { style: [S.wrapperBox, w ? S.wrapperBoxMobile : void 0] },
                                      r.createElement(
                                          i.Z,
                                          { style: S.wrapperInnerBox },
                                          r.createElement(d.Z, null, ({ isHovered: e }) =>
                                              r.createElement(
                                                  i.Z,
                                                  { style: S.mockInput },
                                                  r.createElement(i.Z, { style: { minHeight: 40 } }, r.createElement(p.ZP, { size: "body", weight: "medium" }, "search" === n && r.createElement(k.Z, { text: P }), "think" === n && r.createElement(k.Z, { text: R }))),
                                                  r.createElement(
                                                      i.Z,
                                                      { style: S.buttonRow },
                                                      r.createElement(
                                                          c.ZP,
                                                          {
                                                              backgroundColor: "gray100",
                                                              borderColor: "transparent",
                                                              color: "search" === n ? "blue500" : "gray900",
                                                              onClick: () => {
                                                                  D(), g("search");
                                                              },
                                                              size: "smallCompact",
                                                              style: [S.button, "search" === n ? S.highlightedButton : null],
                                                          },
                                                          r.createElement(C.default, { style: S.icon }),
                                                          r.createElement(m.Z, { size: "space4" }),
                                                          r.createElement(p.ZP, { size: "subtext2", style: S.appText, weight: "medium" }, T?.label || ""),
                                                      ),
                                                      r.createElement(
                                                          c.ZP,
                                                          {
                                                              backgroundColor: "gray100",
                                                              borderColor: "transparent",
                                                              color: "think" === n ? "blue500" : "gray900",
                                                              onClick: () => {
                                                                  D(), g("think");
                                                              },
                                                              size: "smallCompact",
                                                              style: [S.button, "think" === n ? S.highlightedButton : null],
                                                          },
                                                          r.createElement(E.default, { style: S.reasoningIcon }),
                                                          r.createElement(m.Z, { size: "space4" }),
                                                          r.createElement(p.ZP, { size: "subtext2", style: S.appText, weight: "medium" }, O?.label || ""),
                                                      ),
                                                  ),
                                              ),
                                          ),
                                          r.createElement(i.Z, { style: S.descriptionContainer }, r.createElement(p.ZP, { size: "body", weight: "medium" }, "think" === n ? Z : v)),
                                      ),
                                  ),
                                  r.createElement(
                                      i.Z,
                                      { style: [S.navRow, w ? S.pushToEnd : void 0] },
                                      r.createElement(d.Z, null, ({ isHovered: e }) => r.createElement(i.Z, { onClick: M, style: [S.ctaButton, e ? S.ctaButtonHovered : void 0] }, r.createElement(p.ZP, { color: "light" === u.default.theme.paletteName ? "white" : "alwaysBlack", size: "body", weight: "bold" }, "Try it"))),
                                  ),
                              ),
                          )
                        : null;
                },
                S = u.default.create((e) => {
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
                        sheetMask: { backgroundColor: D("#111111", 0.5), backdropFilter: "blur(4px)" },
                        wrapperBox: { backgroundColor: "light" === e.paletteName ? e.colors.gray50 : e.colors.gray0, borderRadius: e.spaces.space32, justifyContent: "center", marginHorizontal: e.spaces.space56, paddingTop: e.spaces.space64, paddingBottom: e.spaces.space48 },
                        wrapperBoxMobile: { marginHorizontal: e.spaces.space24 },
                        wrapperInnerBox: {},
                        ctaButton: { height: u.default.theme.spaces.space48, paddingHorizontal: u.default.theme.spaces.space64, flexDirection: "row", transitionDuration: "200ms", alignItems: "center", justifyContent: "center", backgroundColor: "light" === e.paletteName ? e.colors.alwaysBlack : e.colors.white, borderRadius: e.spaces.space8, cursor: "pointer" },
                        ctaButtonHovered: { backgroundColor: "light" === e.paletteName ? ((t = e.colors.alwaysBlack), (o = 0.1), (0, y.rb)((0, g.$n)({ color: (0, y.xO)(t), coefficient: o }))) : T(e.colors.white, 0.1) },
                    };
                    var t, o;
                });
            function D(e, t) {
                const o = (0, y.xO)(e),
                    r = (0, g.oL)({ color: o, percent: t, replace: !0 });
                return (0, y.rb)(r);
            }
            function T(e, t) {
                return (0, y.rb)((0, g._j)({ color: (0, y.xO)(e), coefficient: t }));
            }
        },
        832393: (e, t, o) => {
            o.d(t, { I: () => C });
            var r = o(202784),
                a = o(172016),
                n = o(325686),
                i = o(392237),
                s = o(731708),
                l = o(992942),
                c = o(306677),
                p = o(725405),
                d = o(125363),
                m = o(53939),
                u = o(327597),
                g = o(654917),
                y = o(305442),
                h = o(962379),
                b = o(623494),
                f = o(988290);
            const C = ({ allPrompts: e, disableClick: t, imageUrl: o, imageUrl2x: C, label: _, prompt: w, promptId: k, sectionType: v, toolOverrides: Z }) => {
                    const [x, I] = r.useState(!1),
                        P = (0, p.Z)(),
                        R = (0, d.I0)(),
                        z = (0, g.eX)(),
                        { isCompactLayout: M } = (0, f.ZP)(),
                        { enabled: S } = (0, h.Z)(),
                        D = (0, y.Z)("image_block"),
                        T = r.useRef(!1),
                        O = r.useCallback(() => {
                            T.current || (0, b.az)(P, "impression", { promptId: k ?? "", prompt: w, sectionType: v, allPrompts: e ?? [] });
                        }, [P, k, w, v, e]),
                        B = r.useCallback(() => I(!0), []),
                        L = r.useCallback(() => I(!1), []),
                        N = r.useCallback(() => {
                            if (!t && ((0, b.az)(P, "click", { promptId: k ?? "", prompt: w, sectionType: v, allPrompts: e ?? [] }), R((0, u.u)({ analytics: P, conversationKey: z })({ text: w, returnCitations: !1, imageGenerationCount: D, toolOverrides: Z })), "" !== k)) {
                                const e = "PRESET";
                                R((0, m.U)({ group_id: e, object_id: k ?? "", action_type: "CLICK" }));
                            }
                        }, [t, w, k, v, e, R, P, z, D, Z]),
                        F = r.useMemo(() => ("light" === i.default.theme.paletteName ? [E.shadow, x ? { opacity: 0.25 } : { opacity: 0 }] : [E.shadow, x ? { opacity: 0 } : { opacity: 0.7 }]), [x]),
                        H = r.useMemo(() => ("light" === i.default.theme.paletteName ? [E.shadow, x ? { opacity: 0.25 } : { opacity: 0 }] : [E.shadow, x ? { opacity: 0 } : { opacity: 0.5 }]), [x]),
                        G = a.Z.get() > 1 ? C : o;
                    return S ? r.createElement(n.Z, { onClick: N, onMouseEnter: B, onMouseLeave: L, style: E.container }, r.createElement(c.D, { id: `prompt_${k ?? o}`, onFullyVisible: O, position: "bottom", testID: `prompt_${k ?? o}` }), r.createElement(n.Z, { style: E.prompt }, r.createElement(s.ZP, { numberOfLines: 2, size: "subtext2", style: E.promptText, weight: "medium" }, _)), r.createElement(n.Z, { style: H }), r.createElement(l.Z, { resizeMode: "cover", source: { uri: G }, style: E.image })) : r.createElement(n.Z, { onClick: N, onMouseEnter: B, onMouseLeave: L, style: [E.deprecatedContainer, M ? E.deprecatedCompact : void 0] }, r.createElement(n.Z, { style: E.deprecatedPrompt }, r.createElement(s.ZP, { size: "subtext1" }, _)), r.createElement(n.Z, { style: F }), r.createElement(l.Z, { resizeMode: "cover", source: { uri: G }, style: E.image }));
                },
                E = i.default.create((e) => ({ container: { height: 150, justifyContent: "space-between", alignItems: "flex-start", backgroundColor: e.colors.activeFaintGray, borderRadius: e.borderRadii.xLarge, borderColor: e.colors.gray50, borderWidth: "1px", borderStyle: "solid", overflow: "hidden", cursor: "pointer", flex: 1, grow: 1 }, prompt: { flexGrow: 1, textOverflow: "ellipsis", position: "absolute", bottom: e.spaces.space8, start: e.spaces.space8, maxWidth: "calc(100% - 20px)", zIndex: 10, transition: "opacity 0.3s", paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8, backgroundColor: "rgba(102, 102, 102, 0.3)", borderRadius: e.borderRadii.medium, borderWidth: e.spaces.space1, borderStyle: "solid", borderColor: "rgba(255,255, 255, 0.15)", backdropFilter: "blur(1px)" }, promptText: { color: "white" }, icon: { width: e.spaces.space20, height: e.spaces.space20, color: e.colors.link }, shadow: { position: "absolute", width: "100%", height: "100%", zIndex: 5, backgroundColor: e.colors.cellBackground, transition: "opacity 0.3s" }, image: { position: "absolute", width: "100%", height: "100%", zIndex: 1 }, deprecatedContainer: { width: 352, height: 220, justifyContent: "space-between", alignItems: "flex-start", backgroundColor: e.colors.activeFaintGray, borderRadius: e.borderRadii.large, overflow: "hidden", cursor: "pointer" }, deprecatedCompact: { width: `calc(90% + ${e.spaces.space12})` }, deprecatedPrompt: { flexGrow: 1, textOverflow: "ellipsis", position: "absolute", bottom: e.spaces.space12, start: e.spaces.space12, zIndex: 10, transition: "opacity 0.3s", paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space12, borderRadius: e.borderRadii.medium, backgroundColor: e.colors.cellBackground } }));
        },
        297195: (e, t, o) => {
            o.d(t, { F: () => b });
            var r = o(202784),
                a = o(731708),
                n = o(392237),
                i = o(674132),
                s = o.n(i),
                l = o(323265),
                c = o(952793),
                p = o(654917);
            const d = s().gcb6c0be,
                m = s().cb88fd82,
                u = s().g27a5314,
                g = s().bdd84568,
                y = s().c9772e6e,
                h = "grok",
                b = () => {
                    const { access: e, accessRestrictedReasons: t } = (0, p.ZP)(),
                        o = !!l.ZP.isWebView(),
                        n = (0, c.hC)("responsive_web_grok_general_availability"),
                        i = (0, c.hC)("responsive_web_grok_start_title_experiment_enabled");
                    if (!n && !i) return r.createElement(a.ZP, { style: f.warning }, d);
                    if ("restricted" === e) {
                        if (t.includes("SmsNotVerified")) return r.createElement(a.ZP, { link: "/settings/phone" }, u);
                        if (t.includes("AccountTooNew")) return r.createElement(a.ZP, { style: f.restriction }, g);
                    }
                    return "free" === e ? r.createElement(a.ZP, { style: f.warning }, m, " ", r.createElement(a.ZP, { color: "gray500", link: { pathname: "/i/premium_sign_up", state: { referring_page: h }, external: o, query: { referring_page: h } }, size: "body", weight: "normal" }, y)) : null;
                },
                f = n.default.create((e) => ({ warning: { color: e.colors.gray300 }, restriction: { color: e.colors.gray700 } }));
        },
        213103: (e, t, o) => {
            o.d(t, { t: () => g });
            var r = o(202784),
                a = o(325686),
                n = o(731708),
                i = o(154003),
                s = o(392237),
                l = o(674132),
                c = o.n(l),
                p = o(326719),
                d = o(58399);
            const m = c().b2175228,
                u = c().d2d8650c;
            function g() {
                const [e, t] = r.useState(!1),
                    o = r.useCallback(() => t(!0), []),
                    s = r.useCallback(() => t(!1), []);
                return r.createElement(
                    a.Z,
                    {
                        onClick: () => {
                            window.location.href = "https://play.google.com/store/apps/details?id=ai.x.grok";
                        },
                        onMouseEnter: o,
                        onMouseLeave: s,
                        style: [y.NotificationBanner, e ? y.hovered : void 0],
                    },
                    r.createElement(p.default, { style: y.icon }),
                    r.createElement(a.Z, { style: y.body }, r.createElement(a.Z, null, r.createElement(n.ZP, { size: "subtext1", weight: "bold" }, m)), r.createElement(n.ZP, { color: "gray800", size: "subtext1", weight: "normal" }, u)),
                    r.createElement(i.ZP, { icon: r.createElement(d.default, null), size: "smallCompact", style: y.rightButton, type: "primaryText" }),
                );
            }
            const y = s.default.create((e) => ({ NotificationBanner: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space16, borderRadius: e.spaces.space16, backgroundColor: e.colors.gray0, cursor: "pointer", transition: "background-color 0.5s", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space12, width: "100%" }, hovered: { backgroundColor: e.colors.gray50 }, body: { flexGrow: 1, flexShrink: 1, gap: 4 }, icon: { minHeight: 36, minWidth: 36, flexShrink: 0 }, rightButton: { height: 20, width: 20, flexShrink: 0 } }));
        },
        959147: (e, t, o) => {
            o.d(t, { p: () => E, x: () => _ });
            var r = o(202784),
                a = o(325686),
                n = o(731708),
                i = o(721266),
                s = o(392237),
                l = o(306677),
                c = o(952793),
                p = o(725405),
                d = o(125363),
                m = o(53939),
                u = o(327597),
                g = o(620988),
                y = o(764226),
                h = o(654917),
                b = o(962379),
                f = o(623494),
                C = o(988290);
            const E = ({ Icon: e, allPrompts: t, body: o, isDeepsearch: s, isImageEdit: E, isReasoning: _, label: k, prompt: v, promptAction: Z, promptId: x, sectionType: I, toolOverrides: P }) => {
                    const [R, z] = r.useState(!1),
                        M = (0, p.Z)(),
                        S = (0, d.I0)(),
                        D = (0, h.eX)(),
                        { isCompactLayout: T } = (0, C.ZP)(),
                        { selectedFiles: O } = (0, g.ZP)(),
                        B = (0, c.hC)("responsive_web_grok_show_citations"),
                        L = r.useMemo(() => Object.keys(O), [O]),
                        N = r.useMemo(() => L.map((e) => O[e]?.remote).filter(Boolean), [L, O]),
                        F = r.useRef(null),
                        { handleFileChange: H } = (0, y.J)({ analytics: M, isReturnCitations: B, prompt: v, promptId: x }),
                        { enabled: G } = (0, b.Z)(),
                        j = r.useRef(!1),
                        W = r.useCallback(() => {
                            j.current || (0, f.az)(M, "impression", { promptId: x ?? "", prompt: v, sectionType: I, allPrompts: t ?? [] });
                        }, [M, x, v, I, t]),
                        V = r.useCallback(() => z(!0), []),
                        $ = r.useCallback(() => z(!1), []),
                        K = r.useCallback(() => {
                            if (((0, f.az)(M, "click", { promptId: x ?? "", prompt: v, sectionType: I, allPrompts: t ?? [] }), "UPLOAD" === Z && F.current)) return void F.current.click();
                            let e = {};
                            if ((E && (e = { attachments: N, imageGenerationCount: 4, promptMetadata: { promptSource: "IMAGE_EDIT", action: "INPUT", properties: { imageUrl: N[0].url } } }), S((0, u.u)({ analytics: M, conversationKey: D })({ text: v, returnCitations: B, toolOverrides: P, isDeepsearch: s, isReasoning: _, ...e })), "" !== x)) {
                                const e = "PRESET";
                                S((0, m.U)({ group_id: e, object_id: x, action_type: "CLICK" }));
                            }
                        }, [v, x, S, I, t, M, B, D, Z, P, s, _, E, N]);
                    return G ? r.createElement(a.Z, { onClick: K, onMouseEnter: V, onMouseLeave: $, style: [w.container, R ? w.hovered : void 0] }, e ? r.createElement(r.Fragment, null, r.createElement(e, { style: w.icon }), r.createElement(i.Z, { size: "space8" })) : void 0, r.createElement(a.Z, { style: w.prompt }, r.createElement(n.ZP, { size: "body", weight: "medium" }, k), !!o && r.createElement(n.ZP, { color: "gray600", size: "body", weight: "normal" }, o)), r.createElement("input", { onChange: H, ref: F, style: { display: "none" }, type: "file" })) : r.createElement(a.Z, { onClick: K, onMouseEnter: V, onMouseLeave: $, style: [w.deprecatedContainer, R ? w.hovered : void 0, T ? w.compact : void 0] }, r.createElement(l.D, { id: `prompt_${x}`, onFullyVisible: W, position: "bottom", testID: `prompt_${x}` }), r.createElement(a.Z, { style: w.deprecatedPrompt }, r.createElement(n.ZP, null, k)), e ? r.createElement(e, { style: w.deprecatedIcon }) : void 0);
                },
                _ = () => r.createElement(a.Z, { style: [w.container, w.loadingBlock] }),
                w = s.default.create((e) => ({ container: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, justifyContent: "center", alignItems: "flex-start", backgroundColor: e.colors.gray0, borderRadius: e.spaces.space12, cursor: "pointer", transition: "background-color 0.5s", overflow: "hidden", flex: 1, flexGrow: 1, shrink: 1, minWidth: 150, maxHeight: 68, minHeight: 68 }, loadingBlock: { backgroundColor: "transparent" }, compact: { width: "45%" }, hovered: { backgroundColor: e.colors.gray50 }, prompt: { textOverflow: "ellipsis", wrap: "wrap" }, icon: { width: e.spaces.space20, height: e.spaces.space20, shrink: 0, color: e.colors.gray900 }, deprecatedContainer: { width: 170, height: 130, padding: e.spaces.space16, justifyContent: "space-between", alignItems: "flex-start", backgroundColor: e.colors.activeFaintGray, borderRadius: e.borderRadii.large, cursor: "pointer", transition: "background-color 0.5s" }, deprecatedPrompt: { flexGrow: 1, textOverflow: "ellipsis" }, deprecatedIcon: { width: e.spaces.space20, height: e.spaces.space20, color: e.colors.link } }));
        },
        843382: (e, t, o) => {
            o.d(t, { $: () => y });
            var r = o(202784),
                a = o(325686),
                n = o(392237),
                i = o(674132),
                s = o.n(i),
                l = o(379848),
                c = o(952793),
                p = o(125363),
                d = o(389071),
                m = o(654917),
                u = o(988290),
                g = o(959147);
            const y = () => {
                    const e = (0, c.hC)("responsive_web_grok_backend_prompts_enabled"),
                        t = (0, p.v9)((e) => (0, d.Io)(e)),
                        o = e ? t : b,
                        { isCompactLayout: n } = (0, u.ZP)(),
                        { grokSettingsStatus: i } = (0, m.ZP)(),
                        s = r.useMemo(
                            () =>
                                o
                                    .slice()
                                    .sort(() => Math.random() - 0.5)
                                    .slice(0, 4)
                                    .map((e) => {
                                        let t;
                                        try {
                                            if (e.icon_name && l[e.icon_name]) {
                                                const o = l[e.icon_name];
                                                r.isValidElement(r.createElement(o, null)) && (t = o);
                                            }
                                        } catch (e) {}
                                        return r.createElement(g.p, { Icon: t, isDeepsearch: "research" === e.filter_key?.toLowerCase(), isImageEdit: "imageedit" === e.filter_key?.toLowerCase(), isReasoning: "reasoning" === e.filter_key?.toLowerCase(), key: e.prompt, label: e.display_label, prompt: e.prompt, promptId: e.prompt_id, sectionType: "NO_SECTION" });
                                    }),
                            [o],
                        ),
                        y = e && 0 === s.length && "loading" === i;
                    return r.createElement(r.Fragment, null, r.createElement(a.Z, { style: [h.textPromptsBreak, n ? h.textPromptsBreakCompact : void 0] }, y ? r.createElement(r.Fragment, null, r.createElement(g.x, null), r.createElement(g.x, null)) : r.createElement(r.Fragment, null, s[0], s[1])), r.createElement(a.Z, { style: [h.textPromptsBreak, n ? h.textPromptsBreakCompact : void 0] }, y ? r.createElement(r.Fragment, null, r.createElement(g.x, null), r.createElement(g.x, null)) : r.createElement(r.Fragment, null, s[2], s[3])));
                },
                h = n.default.create((e) => ({ textPromptsBreak: { flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: e.spaces.space12 }, textPromptsBreakCompact: { width: "100%" } })),
                b = [
                    { prompt_id: "hardcoded_help_me_write_conver_letter", display_label: s().cf59f9f6, prompt: s().cf59f9f6, icon_name: "IconCompose" },
                    { prompt_id: "hardcoded_tell_me_todays_headlines", display_label: s().cd9aeac8, prompt: s().cd9aeac8, icon_name: "IconMediumNewsStroke" },
                    { prompt_id: "hardcoded_recommend_a_fantasy_rpg_game", display_label: s().acf2f0be, prompt: s().acf2f0be, icon_name: "IconGamingStroke" },
                    { prompt_id: "hardcoded_solve_the_two_sum_problem_in_python", display_label: s().b9bd12e2, prompt: s().b9bd12e2, icon_name: "IconCode" },
                ];
        },
        176310: (e, t, o) => {
            o.d(t, { Y: () => y });
            var r = o(202784),
                a = o(325686),
                n = o(731708),
                i = o(992942),
                s = o(392237),
                l = o(952793),
                c = o(725516),
                p = o(125363),
                d = o(327597),
                m = o(654917),
                u = o(962379),
                g = o(988290);
            const y = ({ prompt: e, sectionType: t }) => {
                    const [o, s] = r.useState(!1),
                        y = (0, c.z)(),
                        b = (0, p.I0)(),
                        f = (0, m.eX)(),
                        { isCompactLayout: C, isGrokDrawer: E } = (0, g.ZP)(),
                        _ = r.useCallback(() => s(!0), []),
                        w = r.useCallback(() => s(!1), []),
                        { enabled: k } = (0, u.Z)(),
                        v = (0, l.hC)("responsive_web_grok_show_citations"),
                        Z = r.useCallback(() => {
                            b((0, d.u)({ analytics: y, conversationKey: f })({ text: e.value, trendPromptIdStr: e.trendPromptIdStr, returnCitations: v }));
                        }, [y, b, e, v, f]);
                    return k ? r.createElement(a.Z, { onClick: Z, onMouseEnter: _, onMouseLeave: w, style: [h.container, o ? h.hovered : void 0, C ? h.full : h.compact] }, r.createElement(a.Z, { style: e.imageUrl ? h.textContentWithImage : h.textContentWithoutImage }, r.createElement(n.ZP, { numberOfLines: 2, size: "headline2", weight: "bold" }, e.header), r.createElement(n.ZP, { color: "gray700", numberOfLines: 1, size: "subtext1", weight: "normal" }, e.text)), !!e.imageUrl && r.createElement(i.Z, { source: e.imageUrl, style: h.image })) : r.createElement(a.Z, { onClick: Z, onMouseEnter: _, onMouseLeave: w, style: [h.deprecatedContainer, o ? h.hovered : void 0, C && !E ? h.deprecatedCompact : void 0] }, r.createElement(a.Z, { style: h.deprecatedPrompt }, r.createElement(n.ZP, null, e.header)), r.createElement(n.ZP, { color: "gray500" }, e.text));
                },
                h = s.default.create((e) => ({ container: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space16, backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large, cursor: "pointer", transition: "background-color 0.5s", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, textContentWithImage: { maxWidth: "70%", gap: e.spaces.space8, grow: 1, wrap: "wrap", justifyContent: "center", paddingEnd: e.spaces.space16 }, textContentWithoutImage: { width: "100%", gap: e.spaces.space8 }, image: { grow: 0, objectFit: "cover", height: 84, width: 84, borderRadius: e.borderRadii.medium }, hovered: { backgroundColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray50 }, full: { width: "100%" }, compact: { width: "calc(50% - 8px)" }, deprecatedContainer: { width: 355, height: 130, padding: e.spaces.space16, justifyContent: "space-between", alignItems: "flex-start", backgroundColor: e.colors.activeFaintGray, borderRadius: e.borderRadii.large, cursor: "pointer", transition: "background-color 0.5s" }, deprecatedPrompt: { flexGrow: 1, textOverflow: "ellipsis" }, deprecatedCompact: { width: "45%" }, deprecatedIcon: { width: e.spaces.space20, height: e.spaces.space20, color: e.colors.link } }));
        },
        701311: (e, t, o) => {
            o.d(t, { Z: () => n });
            var r = o(202784),
                a = o(731708);
            const n = ({ text: e }) => {
                const [t, o] = r.useState(e[0] ?? " ");
                return (
                    r.useEffect(() => {
                        let r;
                        return (
                            t.length < e.length &&
                                (r = setTimeout(() => {
                                    o((t) => t + e[t.length]);
                                }, 20)),
                            () => clearTimeout(r)
                        );
                    }, [e, t]),
                    r.createElement(a.ZP, null, t)
                );
            };
        },
        101039: (e, t, o) => {
            o.d(t, { t: () => h });
            var r = o(202784),
                a = o(325686),
                n = o(731708),
                i = o(950822),
                s = o(67369),
                l = o(721266),
                c = o(392237),
                p = o(379848),
                d = o(725405),
                m = o(620988),
                u = o(246277),
                g = o(928831);
            const y = ({ isMobile: e, prompt: t }) => {
                    const [o, s] = r.useState(!1),
                        { grokModeButtonOverrides: l, grokModeButtonStatusKey: c, grokModeButtons: y, selectImageEditMode: h, selectMode: f, setFocused: C } = (0, g.w)(),
                        { onFileSelected: E } = (0, m.ZP)(),
                        _ = r.useRef();
                    let w = null;
                    t.icon_name && p[t.icon_name] && (w = p[t.icon_name]);
                    const k = (0, d.Z)(),
                        v = r.useCallback(
                            (e) => {
                                if (e.length <= 0) return;
                                const t = e[0];
                                E(t).then(() => {
                                    h();
                                });
                            },
                            [E, h],
                        );
                    return r.createElement(
                        a.Z,
                        {
                            key: t.prompt_id,
                            onClick: () => {
                                const e = y.find((e) => e.filter_key === t.filter_key);
                                if (!e) return;
                                if ("FileInput" !== l[e.filter_key || ""].enabledOnClickBehavior) return "Enabled" === e[c] ? (k.scribe({ action: "click", component: "wide-text-card", element: t.prompt_id }), f(e), void C(!0)) : void 0;
                                _.current && _.current.click();
                            },
                            onMouseEnter: () => s(!0),
                            onMouseLeave: () => s(!1),
                            style: [b.card, o ? b.hovered : void 0, e ? b.fullWidth : null],
                        },
                        r.createElement(a.Z, { style: b.label }, w && r.createElement(w, { style: [b.labelIcon, "IconLightbulbGrokStrokeOff" === t.icon_name ? b.fillNoneIcon : void 0] }), r.createElement(n.ZP, { size: "body", weight: "medium" }, t.display_label)),
                        r.createElement(n.ZP, { style: { position: "relative", top: -2 } }, t.display_body),
                        (0, i.Z)("input", {
                            accept: u.$.join(","),
                            multiple: !1,
                            onChange: (e) => {
                                const t = e.target.files;
                                t.length && v(t);
                            },
                            ref: _,
                            style: b.hidden,
                            type: "file",
                        }),
                    );
                },
                h = (e) => {
                    const t = (0, s.LX)();
                    return r.createElement(
                        a.Z,
                        null,
                        r.createElement(l.Z, { size: "space12" }),
                        r.createElement(n.ZP, { size: "headline2", weight: "bold" }, e.section.title),
                        r.createElement(l.Z, { axis: "y", size: "space8" }),
                        r.createElement(n.ZP, { color: "gray600" }, e.section.subtitle),
                        r.createElement(l.Z, { axis: "y", size: "space16" }),
                        r.createElement(
                            a.Z,
                            { style: t ? b.containerMobile : b.container },
                            e.section.prompts.map((e, o) => r.createElement(y, { isMobile: t, key: o, prompt: e })),
                        ),
                    );
                },
                b = c.default.create((e) => ({ card: { flex: 1, backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, cursor: "pointer", transition: "background-color 0.3s", lineHeight: e.spaces.space24, gap: e.spaces.space12 }, fullWidth: { width: "100%" }, hovered: { backgroundColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray50 }, container: { flexDirection: "row", gap: 24 }, containerMobile: { flexDirection: "column", gap: e.spaces.space8 }, label: { display: "flex", width: "max-content", alignItems: "center", flexDirection: "row", gap: e.spaces.space4, paddingVertical: e.spaces.space2, paddingHorizontal: e.spaces.space4, borderRadius: 6, borderWidth: 1, borderStyle: "solid", borderColor: e.colors.gray300, backgroundColor: e.colors.gray50 }, labelIcon: { width: 14, height: 14 }, fillNoneIcon: { fill: "none" }, hidden: { display: "none" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-cebf58fc.583ff51a.js.map

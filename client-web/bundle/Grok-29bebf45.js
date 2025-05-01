"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-29bebf45"],
    {
        701311: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(202784),
                r = n(731708);
            const s = ({ text: e }) => {
                const [t, n] = a.useState(e[0] ?? " ");
                return (
                    a.useEffect(() => {
                        let a;
                        return (
                            t.length < e.length &&
                                (a = setTimeout(() => {
                                    n((t) => t + e[t.length]);
                                }, 20)),
                            () => clearTimeout(a)
                        );
                    }, [e, t]),
                    a.createElement(r.ZP, null, t)
                );
            };
        },
        442955: (e, t, n) => {
            n.d(t, { V: () => T });
            var a = n(202784),
                r = n(25825),
                s = n(744610),
                o = n(325686),
                i = n(392237),
                l = n(815858),
                c = n(721266),
                p = n(952793),
                d = n(125363),
                u = n(389071),
                m = n(962379),
                g = n(928831),
                y = n(640350),
                E = n(892451),
                h = n(648536),
                f = n(781939),
                b = n(158042),
                k = n(49445),
                Z = n(213103),
                w = n(731708),
                C = n(950822),
                _ = n(67369),
                v = n(379848),
                I = n(725405),
                x = n(620988),
                F = n(246277);
            const D = ({ isMobile: e, prompt: t }) => {
                    const [n, r] = a.useState(!1),
                        { grokModeButtonOverrides: s, grokModeButtonStatusKey: i, grokModeButtons: l, selectImageEditFilterKey: c, setFilterKey: p, setFocused: d } = (0, g.w)(),
                        { onFileSelected: u } = (0, x.ZP)(),
                        m = a.useRef();
                    let y = null;
                    t.icon_name && v[t.icon_name] && (y = v[t.icon_name]);
                    const E = (0, I.Z)(),
                        h = a.useCallback(
                            (e) => {
                                if (e.length <= 0) return;
                                const t = e[0];
                                u(t).then(() => {
                                    c();
                                });
                            },
                            [u, c],
                        );
                    return a.createElement(
                        o.Z,
                        {
                            key: t.prompt_id,
                            onClick: () => {
                                const e = l.find((e) => e.filter_key === t.filter_key);
                                if (!e) return;
                                if ("FileInput" !== s[e.filter_key || ""].enabledOnClickBehavior) return "Enabled" === e[i] ? (E.scribe({ action: "click", component: "wide-text-card", element: t.prompt_id }), p(e.filter_key || ""), void d(!0)) : void 0;
                                m.current && m.current.click();
                            },
                            onMouseEnter: () => r(!0),
                            onMouseLeave: () => r(!1),
                            style: [S.card, n ? S.hovered : void 0, e ? S.fullWidth : null],
                        },
                        a.createElement(o.Z, { style: S.label }, y && a.createElement(y, { style: [S.labelIcon, "IconLightbulbGrokStrokeOff" === t.icon_name ? S.fillNoneIcon : void 0] }), a.createElement(w.ZP, { size: "body", weight: "medium" }, t.display_label)),
                        a.createElement(w.ZP, { style: { position: "relative", top: -2 } }, t.display_body),
                        (0, C.Z)("input", {
                            accept: F.$.join(","),
                            multiple: !1,
                            onChange: (e) => {
                                const t = e.target.files;
                                t.length && h(t);
                            },
                            ref: m,
                            style: S.hidden,
                            type: "file",
                        }),
                    );
                },
                P = (e) => {
                    const t = (0, _.LX)();
                    return a.createElement(
                        o.Z,
                        null,
                        a.createElement(c.Z, { size: "space12" }),
                        a.createElement(w.ZP, { size: "headline2", weight: "bold" }, e.section.title),
                        a.createElement(c.Z, { axis: "y", size: "space8" }),
                        a.createElement(w.ZP, { color: "gray600" }, e.section.subtitle),
                        a.createElement(c.Z, { axis: "y", size: "space16" }),
                        a.createElement(
                            o.Z,
                            { style: t ? S.containerMobile : S.container },
                            e.section.prompts.map((e, n) => a.createElement(D, { isMobile: t, key: n, prompt: e })),
                        ),
                    );
                },
                S = i.default.create((e) => ({ card: { flex: 1, backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, cursor: "pointer", transition: "background-color 0.3s", lineHeight: e.spaces.space24, gap: e.spaces.space12 }, fullWidth: { width: "100%" }, hovered: { backgroundColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray50 }, container: { flexDirection: "row", gap: 24 }, containerMobile: { flexDirection: "column", gap: e.spaces.space8 }, label: { display: "flex", width: "max-content", alignItems: "center", flexDirection: "row", gap: e.spaces.space4, paddingVertical: e.spaces.space2, paddingHorizontal: e.spaces.space4, borderRadius: 6, borderWidth: 1, borderStyle: "solid", borderColor: e.colors.gray300, backgroundColor: e.colors.gray50 }, labelIcon: { width: 14, height: 14 }, fillNoneIcon: { fill: "none" }, hidden: { display: "none" } })),
                T = (e) => {
                    const t = a.useRef(new s.Z.Value(0)).current,
                        n = (0, p.hC)("subscriptions_grok_disable_preferred_prompts"),
                        w = (0, p.hC)("responsive_web_grok_show_android_promo_banner"),
                        C = (0, d.v9)((e) => (0, u.zO)(e)),
                        { isGrok3LayoutEnabled: _, layout: v } = (0, m.Z)(),
                        { grokInput: I, isDefault: x, isInputMobileSize: F } = (0, g.w)(),
                        D = v?.sections || [],
                        S = e.hiddenSections ?? [],
                        T = D.filter((e) => !S.includes(e.section_type)),
                        M = Boolean(e.hasSelectedFilterKey),
                        z = !e.isMobile && (!x || M) && T.some((e) => "FLOATING_CARD" === e.section_type && e.prompts?.some((e) => e.filter_key === I.filterKey));
                    return (
                        a.useEffect(() => {
                            v && s.Z.timing(t, { toValue: 1, duration: 600, useNativeDriver: !1 }).start();
                        }, [v, t]),
                        a.createElement(
                            a.Fragment,
                            null,
                            !v && a.createElement(o.Z, { style: A.loadingContainer }, a.createElement(r.Z, { color: i.default.isDarkMode() ? "white" : "black" })),
                            a.createElement(
                                l.Z,
                                { duration: "long", show: !!v, type: "fade" },
                                a.createElement(c.Z, { size: "space16" }),
                                !!v &&
                                    a.createElement(
                                        o.Z,
                                        { style: [A.moduleContainer, e.isMobile && e.isFocusingInput && _ ? A.blurred : null] },
                                        w && F && a.createElement(Z.t, null),
                                        T.map((t, r) => {
                                            switch (t.section_type) {
                                                case "HIGHLIGHTED_PROMPTS":
                                                    return M ? null : a.createElement(h.L, { data: t, key: r });
                                                case "PILLS":
                                                    return a.createElement(b.F, { data: t, isMobile: e.isMobile, key: r, style: "pill" });
                                                case "TEXT_CARD":
                                                    return a.createElement(b.F, { data: t, key: r, style: "block" });
                                                case "IMG_CARD":
                                                case "IMG_CARD_FULL":
                                                    return a.createElement(f.$, { data: t, key: r });
                                                case "COMPLEX_CARD":
                                                    return a.createElement(y.V, { data: t, key: r });
                                                case "TRENDS":
                                                    return n ? null : a.createElement(k.E, { data: t, key: r, prompts: C });
                                                case "FLOATING_CARD":
                                                    return e.isMobile ? null : a.createElement(E.u, { data: t, hasSelectedFilterKey: M, key: r });
                                                case "WIDE_TEXT_CARD":
                                                    return z ? null : a.createElement(P, { key: r, section: t });
                                                default:
                                                    return null;
                                            }
                                        }),
                                    ),
                            ),
                        )
                    );
                },
                A = i.default.create((e) => ({ loadingContainer: { width: "10%%", alignItems: "center", marginTop: e.spaces.space48 }, moduleContainer: { gap: e.spaces.space32, transition: "filter 0.3s ease" }, blurred: { filter: `blur(${e.spaces.space4})`, pointerEvents: "none" }, container: { width: "100%" }, bottomPadding: { height: "10vh", maxHeight: 125 }, textPromptSuggestions: { flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: e.spaces.space12 }, textPromptsBreak: { flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: e.spaces.space12 }, textPromptsBreakCompact: { width: "100%" }, imagePromptSuggestions: { width: "100%", flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: e.spaces.space12 }, bannerContainer: { width: "100%", paddingHorizontal: e.spaces.space16, maxWidth: 662, marginTop: e.spaces.space80, marginBottom: e.spaces.space36 }, trends: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", maxWidth: 800, gap: e.spaces.space12, marginBottom: e.spaces.space36 }, promptSuggestions: { alignItems: "center" }, restrictedContainer: { opacity: 0.5, pointerEvents: "none" } }));
        },
        618132: (e, t, n) => {
            n.d(t, { k: () => P });
            var a = n(202784),
                r = n(325686),
                s = n(67369),
                o = n(721266),
                i = n(392237),
                l = n(674132),
                c = n.n(l),
                p = n(542832),
                d = n(323265),
                u = n(952793),
                m = n(655352),
                g = n(464023),
                y = n(962379),
                E = n(791786),
                h = n(928831),
                f = n(988290),
                b = n(892451),
                k = n(442955),
                Z = n(300458),
                w = n(731708),
                C = n(654917),
                _ = n(158042),
                v = n(701311);
            const I = c().ia5bef3e,
                x = () => {
                    const { access: e, conversationKey: t } = (0, C.ZP)(),
                        { hasSelectedFilterKey: n } = (0, h.w)(),
                        { layout: s } = (0, y.Z)();
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(
                            r.Z,
                            { style: F.container },
                            a.createElement(
                                r.Z,
                                { style: F.grokContainer },
                                a.createElement(r.Z, { style: F.searchContainer }, a.createElement(o.Z, { size: "space24" }), a.createElement(w.ZP, { align: "center", size: "title3", weight: "medium" }, a.createElement(v.Z, { text: I })), a.createElement(o.Z, { size: "space24" }), a.createElement(E.Z, { conversationKey: t, hasAccess: !1 !== e && "restricted" !== e, inputAtHome: !0, isIdle: !0, placeholder: c().j22655f2, useDraftPersistence: !0 })),
                                a.createElement(o.Z, { size: "space24" }),
                                !!s &&
                                    a.createElement(
                                        r.Z,
                                        { style: F.moduleContainer },
                                        s.sections.map((e, t) => ("TEXT_CARD" === e.section_type ? a.createElement(_.F, { data: e, key: t, style: "block" }) : "FLOATING_CARD" === e.section_type ? a.createElement(b.u, { data: e, hasSelectedFilterKey: n, key: t }) : void 0)),
                                    ),
                            ),
                        ),
                    );
                },
                F = i.default.create((e) => ({ grokContainer: { maxWidth: g.vf, width: "100%", padding: e.spaces.space8 }, container: { width: "100%", height: "100%", alignItems: "center", overflow: "auto", gap: e.spaces.space24 }, searchContainer: { alignItems: "center", width: "100%" }, moduleContainer: { gap: e.spaces.space24 } })),
                D = c().j22655f2,
                P = ({ access: e, conversationKey: t }) => {
                    const n = (0, u.hC)("responsive_web_grok_promo_banner"),
                        i = (0, s.yu)(),
                        l = !(0, m.ZP)() || i,
                        { isGrokDrawer: d } = (0, f.ZP)(),
                        { isGrok3LayoutEnabled: g, layout: w } = (0, y.Z)(),
                        { hasSelectedFilterKey: C, isInputFocused: _ } = (0, h.w)(),
                        [v, I] = a.useState(!1),
                        F = a.useRef(null),
                        [P, S] = a.useState(!0);
                    if ((a.useEffect(() => (g && (clearTimeout(F.current), _ ? I(!0) : (F.current = setTimeout(() => I(!1), 50))), () => clearTimeout(F.current)), [g, _]), d)) return a.createElement(x, null);
                    const A = w?.sections.find((e) => "FLOATING_CARD" === e.section_type);
                    return a.createElement(
                        a.Fragment,
                        null,
                        P &&
                            n &&
                            a.createElement(Z.U, {
                                onClose: () => {
                                    S(!1);
                                },
                            }),
                        a.createElement(r.Z, { style: [T.container, l ? (g ? void 0 : T.mobileContainer) : T.desktopContainer] }, a.createElement(r.Z, { style: T.grokContainer }, a.createElement(r.Z, { style: T.searchContainer }, l ? a.createElement(a.Fragment, null, !g && a.createElement(a.Fragment, null, a.createElement(p.default, { style: T.logo }), a.createElement(o.Z, { size: "space36" }))) : a.createElement(a.Fragment, null, a.createElement(p.default, { style: T.logo }), a.createElement(o.Z, { size: "space36" }), a.createElement(E.Z, { conversationKey: t, hasAccess: !1 !== e && "restricted" !== e, inputAtHome: !0, isIdle: !0, placeholder: c().j22655f2, useDraftPersistence: !0 }))), a.createElement(k.V, { hasSelectedFilterKey: C, isFocusingInput: _, isMobile: l }))),
                        l ? a.createElement(r.Z, { style: T.bottomContainer }, A && v && a.createElement(a.Fragment, null, a.createElement(b.u, { data: A, hasSelectedFilterKey: C }), a.createElement(o.Z, { axis: "y", size: "space12" })), a.createElement(E.Z, { conversationKey: t, hasAccess: !1 !== e && "restricted" !== e, inputAtBottom: !0, inputAtHome: !0, isIdle: !0, placeholder: D, useDraftPersistence: !0 })) : null,
                    );
                },
                S = !!d.ZP.isWebView(),
                T = i.default.create((e) => ({ grokContainer: { maxWidth: g.vf, width: "100%", padding: e.spaces.space16 }, desktopContainer: { paddingTop: "22vh" }, mobileContainer: { paddingTop: e.spaces.space64 }, container: { width: "100%", overflowX: "hidden", overflowY: "auto", alignItems: "center", paddingBottom: 64, gap: e.spaces.space24 }, bottomContainer: { position: "sticky", backgroundColor: e.colors.appBarBackground, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, paddingBottom: 14, bottom: S ? 0 : e.componentDimensions.appBarHeightPx, width: "100%", borderTopStartRadius: e.spaces.space24, borderTopEndRadius: e.spaces.space24 }, searchContainer: { alignItems: "center", width: "100%", zIndex: 1e3 }, logo: { height: 70, width: 194 } }));
        },
        54496: (e, t, n) => {
            n.d(t, { k: () => p });
            var a = n(202784),
                r = n(67369),
                s = n(655352),
                o = n(988290),
                i = n(376856),
                l = n(961614),
                c = n(200179);
            const p = ({ access: e, conversationKey: t }) => {
                const { isGrokDrawer: n } = (0, o.ZP)(),
                    p = (0, r.yu)(),
                    d = !(0, s.ZP)() || p;
                return n ? a.createElement(l.Z, null) : d ? a.createElement(c.Z, { access: e, conversationKey: t }) : a.createElement(i.Z, { access: e, conversationKey: t });
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-29bebf45.68bfca3a.js.map

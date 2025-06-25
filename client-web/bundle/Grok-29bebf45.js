"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-29bebf45"],
    {
        701311: (e, t, a) => {
            a.d(t, { Z: () => s });
            var n = a(202784),
                r = a(731708);
            const s = ({ text: e }) => {
                const [t, a] = n.useState(e[0] ?? " ");
                return (
                    n.useEffect(() => {
                        let n;
                        return (
                            t.length < e.length &&
                                (n = setTimeout(() => {
                                    a((t) => t + e[t.length]);
                                }, 20)),
                            () => clearTimeout(n)
                        );
                    }, [e, t]),
                    n.createElement(r.ZP, null, t)
                );
            };
        },
        442955: (e, t, a) => {
            a.d(t, { V: () => S });
            var n = a(202784),
                r = a(25825),
                s = a(744610),
                o = a(325686),
                i = a(392237),
                l = a(815858),
                c = a(721266),
                p = a(952793),
                d = a(125363),
                u = a(389071),
                m = a(962379),
                g = a(928831),
                y = a(640350),
                h = a(892451),
                E = a(648536),
                f = a(781939),
                b = a(158042),
                k = a(49445),
                w = a(213103),
                _ = a(731708),
                Z = a(950822),
                C = a(67369),
                v = a(379848),
                D = a(725405),
                F = a(620988),
                I = a(246277);
            const x = ({ isMobile: e, prompt: t }) => {
                    const [a, r] = n.useState(!1),
                        { grokModeButtonOverrides: s, grokModeButtonStatusKey: i, grokModeButtons: l, selectImageEditFilterKey: c, setFilterKey: p, setFocused: d } = (0, g.w)(),
                        { onFileSelected: u } = (0, F.ZP)(),
                        m = n.useRef();
                    let y = null;
                    t.icon_name && v[t.icon_name] && (y = v[t.icon_name]);
                    const h = (0, D.Z)(),
                        E = n.useCallback(
                            (e) => {
                                if (e.length <= 0) return;
                                const t = e[0];
                                u(t).then(() => {
                                    c();
                                });
                            },
                            [u, c],
                        );
                    return n.createElement(
                        o.Z,
                        {
                            key: t.prompt_id,
                            onClick: () => {
                                const e = l.find((e) => e.filter_key === t.filter_key);
                                if (!e) return;
                                if ("FileInput" !== s[e.filter_key || ""].enabledOnClickBehavior) return "Enabled" === e[i] ? (h.scribe({ action: "click", component: "wide-text-card", element: t.prompt_id }), p(e.filter_key || ""), void d(!0)) : void 0;
                                m.current && m.current.click();
                            },
                            onMouseEnter: () => r(!0),
                            onMouseLeave: () => r(!1),
                            style: [M.card, a ? M.hovered : void 0, e ? M.fullWidth : null],
                        },
                        n.createElement(o.Z, { style: M.label }, y && n.createElement(y, { style: [M.labelIcon, "IconLightbulbGrokStrokeOff" === t.icon_name ? M.fillNoneIcon : void 0] }), n.createElement(_.ZP, { size: "body", weight: "medium" }, t.display_label)),
                        n.createElement(_.ZP, { style: { position: "relative", top: -2 } }, t.display_body),
                        (0, Z.Z)("input", {
                            accept: I.$.join(","),
                            multiple: !1,
                            onChange: (e) => {
                                const t = e.target.files;
                                t.length && E(t);
                            },
                            ref: m,
                            style: M.hidden,
                            type: "file",
                        }),
                    );
                },
                P = (e) => {
                    const t = (0, C.LX)();
                    return n.createElement(
                        o.Z,
                        null,
                        n.createElement(c.Z, { size: "space12" }),
                        n.createElement(_.ZP, { size: "headline2", weight: "bold" }, e.section.title),
                        n.createElement(c.Z, { axis: "y", size: "space8" }),
                        n.createElement(_.ZP, { color: "gray600" }, e.section.subtitle),
                        n.createElement(c.Z, { axis: "y", size: "space16" }),
                        n.createElement(
                            o.Z,
                            { style: t ? M.containerMobile : M.container },
                            e.section.prompts.map((e, a) => n.createElement(x, { isMobile: t, key: a, prompt: e })),
                        ),
                    );
                },
                M = i.default.create((e) => ({ card: { flex: 1, backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, cursor: "pointer", transition: "background-color 0.3s", lineHeight: e.spaces.space24, gap: e.spaces.space12 }, fullWidth: { width: "100%" }, hovered: { backgroundColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray50 }, container: { flexDirection: "row", gap: 24 }, containerMobile: { flexDirection: "column", gap: e.spaces.space8 }, label: { display: "flex", width: "max-content", alignItems: "center", flexDirection: "row", gap: e.spaces.space4, paddingVertical: e.spaces.space2, paddingHorizontal: e.spaces.space4, borderRadius: 6, borderWidth: 1, borderStyle: "solid", borderColor: e.colors.gray300, backgroundColor: e.colors.gray50 }, labelIcon: { width: 14, height: 14 }, fillNoneIcon: { fill: "none" }, hidden: { display: "none" } })),
                S = (e) => {
                    const t = n.useRef(new s.Z.Value(0)).current,
                        a = (0, p.hC)("subscriptions_grok_disable_preferred_prompts"),
                        _ = (0, p.hC)("responsive_web_grok_show_android_promo_banner"),
                        Z = (0, d.v9)((e) => (0, u.zO)(e)),
                        { isGrok3LayoutEnabled: C, layout: v } = (0, m.Z)(),
                        { grokInput: D, isDefault: F, isInputMobileSize: I } = (0, g.w)(),
                        x = v?.sections || [],
                        M = e.hiddenSections ?? [],
                        S = x.filter((e) => !M.includes(e.section_type)),
                        A = Boolean(e.hasSelectedFilterKey),
                        K = !e.isMobile && (!F || A) && S.some((e) => "FLOATING_CARD" === e.section_type && e.prompts?.some((e) => e.filter_key === D.filterKey));
                    return (
                        n.useEffect(() => {
                            v && s.Z.timing(t, { toValue: 1, duration: 600, useNativeDriver: !1 }).start();
                        }, [v, t]),
                        n.createElement(
                            n.Fragment,
                            null,
                            !v && n.createElement(o.Z, { style: T.loadingContainer }, n.createElement(r.Z, { color: i.default.isDarkMode() ? "white" : "black" })),
                            n.createElement(
                                l.Z,
                                { duration: "long", show: !!v, type: "fade" },
                                n.createElement(c.Z, { size: "space16" }),
                                !!v &&
                                    n.createElement(
                                        o.Z,
                                        { style: [T.moduleContainer, e.isMobile && e.isFocusingInput && C ? T.blurred : null] },
                                        _ && I && n.createElement(w.t, null),
                                        S.map((t, r) => {
                                            switch (t.section_type) {
                                                case "HIGHLIGHTED_PROMPTS":
                                                    return A ? null : n.createElement(E.L, { data: t, key: r });
                                                case "PILLS":
                                                    return n.createElement(b.F, { data: t, isMobile: e.isMobile, key: r, style: "pill" });
                                                case "TEXT_CARD":
                                                    return n.createElement(b.F, { data: t, key: r, style: "block" });
                                                case "IMG_CARD":
                                                case "IMG_CARD_FULL":
                                                    return n.createElement(f.$, { data: t, key: r });
                                                case "COMPLEX_CARD":
                                                    return n.createElement(y.V, { data: t, key: r });
                                                case "TRENDS":
                                                    return a ? null : n.createElement(k.E, { data: t, key: r, prompts: Z });
                                                case "FLOATING_CARD":
                                                    return e.isMobile ? null : n.createElement(h.u, { data: t, hasSelectedFilterKey: A, key: r });
                                                case "WIDE_TEXT_CARD":
                                                    return K ? null : n.createElement(P, { key: r, section: t });
                                                default:
                                                    return null;
                                            }
                                        }),
                                    ),
                            ),
                        )
                    );
                },
                T = i.default.create((e) => ({ loadingContainer: { width: "10%%", alignItems: "center", marginTop: e.spaces.space48 }, moduleContainer: { gap: e.spaces.space32, transition: "filter 0.3s ease" }, blurred: { filter: `blur(${e.spaces.space4})`, pointerEvents: "none" }, container: { width: "100%" }, bottomPadding: { height: "10vh", maxHeight: 125 }, textPromptSuggestions: { flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: e.spaces.space12 }, textPromptsBreak: { flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: e.spaces.space12 }, textPromptsBreakCompact: { width: "100%" }, imagePromptSuggestions: { width: "100%", flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: e.spaces.space12 }, bannerContainer: { width: "100%", paddingHorizontal: e.spaces.space16, maxWidth: 662, marginTop: e.spaces.space80, marginBottom: e.spaces.space36 }, trends: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", maxWidth: 800, gap: e.spaces.space12, marginBottom: e.spaces.space36 }, promptSuggestions: { alignItems: "center" }, restrictedContainer: { opacity: 0.5, pointerEvents: "none" } }));
        },
        618132: (e, t, a) => {
            a.d(t, { k: () => P });
            var n = a(202784),
                r = a(325686),
                s = a(67369),
                o = a(721266),
                i = a(392237),
                l = a(111677),
                c = a.n(l),
                p = a(542832),
                d = a(323265),
                u = a(952793),
                m = a(655352),
                g = a(464023),
                y = a(962379),
                h = a(791786),
                E = a(928831),
                f = a(988290),
                b = a(892451),
                k = a(442955),
                w = a(300458),
                _ = a(731708),
                Z = a(654917),
                C = a(158042),
                v = a(701311);
            const D = c().ia5bef3e,
                F = () => {
                    const { access: e, conversationKey: t } = (0, Z.ZP)(),
                        { hasSelectedFilterKey: a } = (0, E.w)(),
                        { layout: s } = (0, y.Z)();
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(
                            r.Z,
                            { style: I.container },
                            n.createElement(
                                r.Z,
                                { style: I.grokContainer },
                                n.createElement(r.Z, { style: I.searchContainer }, n.createElement(o.Z, { size: "space24" }), n.createElement(_.ZP, { align: "center", size: "title3", weight: "medium" }, n.createElement(v.Z, { text: D })), n.createElement(o.Z, { size: "space24" }), n.createElement(h.Z, { conversationKey: t, hasAccess: !1 !== e && "restricted" !== e, inputAtHome: !0, isIdle: !0, placeholder: c().j22655f2, useDraftPersistence: !0 })),
                                n.createElement(o.Z, { size: "space24" }),
                                !!s &&
                                    n.createElement(
                                        r.Z,
                                        { style: I.moduleContainer },
                                        s.sections.map((e, t) => ("TEXT_CARD" === e.section_type ? n.createElement(C.F, { data: e, key: t, style: "block" }) : "FLOATING_CARD" === e.section_type ? n.createElement(b.u, { data: e, hasSelectedFilterKey: a, key: t }) : void 0)),
                                    ),
                            ),
                        ),
                    );
                },
                I = i.default.create((e) => ({ grokContainer: { maxWidth: g.vf, width: "100%", padding: e.spaces.space8 }, container: { width: "100%", height: "100%", alignItems: "center", overflow: "auto", gap: e.spaces.space24 }, searchContainer: { alignItems: "center", width: "100%" }, moduleContainer: { gap: e.spaces.space24 } })),
                x = c().j22655f2,
                P = ({ access: e, conversationKey: t }) => {
                    const a = (0, u.hC)("responsive_web_grok_promo_banner"),
                        i = (0, s.yu)(),
                        l = !(0, m.ZP)() || i,
                        { isGrokDrawer: d } = (0, f.ZP)(),
                        { isGrok3LayoutEnabled: g, layout: _ } = (0, y.Z)(),
                        { hasSelectedFilterKey: Z, isInputFocused: C } = (0, E.w)(),
                        [v, D] = n.useState(!1),
                        I = n.useRef(null),
                        [P, M] = n.useState(!0);
                    if ((n.useEffect(() => (g && (clearTimeout(I.current), C ? D(!0) : (I.current = setTimeout(() => D(!1), 50))), () => clearTimeout(I.current)), [g, C]), d)) return n.createElement(F, null);
                    const T = _?.sections.find((e) => "FLOATING_CARD" === e.section_type);
                    return n.createElement(
                        n.Fragment,
                        null,
                        P &&
                            a &&
                            n.createElement(w.U, {
                                onClose: () => {
                                    M(!1);
                                },
                            }),
                        n.createElement(r.Z, { style: [S.container, l ? (g ? void 0 : S.mobileContainer) : S.desktopContainer] }, n.createElement(r.Z, { style: S.grokContainer }, n.createElement(r.Z, { style: S.searchContainer }, l ? n.createElement(n.Fragment, null, !g && n.createElement(n.Fragment, null, n.createElement(p.default, { style: S.logo }), n.createElement(o.Z, { size: "space36" }))) : n.createElement(n.Fragment, null, n.createElement(p.default, { style: S.logo }), n.createElement(o.Z, { size: "space36" }), n.createElement(h.Z, { conversationKey: t, hasAccess: !1 !== e && "restricted" !== e, inputAtHome: !0, isIdle: !0, placeholder: c().j22655f2, useDraftPersistence: !0 }))), n.createElement(k.V, { hasSelectedFilterKey: Z, isFocusingInput: C, isMobile: l }))),
                        l ? n.createElement(r.Z, { style: S.bottomContainer }, T && v && n.createElement(n.Fragment, null, n.createElement(b.u, { data: T, hasSelectedFilterKey: Z }), n.createElement(o.Z, { axis: "y", size: "space12" })), n.createElement(h.Z, { conversationKey: t, hasAccess: !1 !== e && "restricted" !== e, inputAtBottom: !0, inputAtHome: !0, isIdle: !0, placeholder: x, useDraftPersistence: !0 })) : null,
                    );
                },
                M = !!d.ZP.isWebView(),
                S = i.default.create((e) => ({ grokContainer: { maxWidth: g.vf, width: "100%", padding: e.spaces.space16 }, desktopContainer: { paddingTop: "22vh" }, mobileContainer: { paddingTop: e.spaces.space64 }, container: { width: "100%", overflowX: "hidden", overflowY: "auto", alignItems: "center", paddingBottom: 64, gap: e.spaces.space24 }, bottomContainer: { position: "sticky", backgroundColor: e.colors.appBarBackground, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, paddingBottom: 14, bottom: M ? 0 : e.componentDimensions.appBarHeightPx, width: "100%", borderTopStartRadius: e.spaces.space24, borderTopEndRadius: e.spaces.space24 }, searchContainer: { alignItems: "center", width: "100%", zIndex: 1e3 }, logo: { height: 70, width: 194 } }));
        },
        54496: (e, t, a) => {
            a.d(t, { k: () => h });
            var n = a(202784),
                r = a(400752),
                s = a(67369),
                o = a(557707),
                i = a(392237),
                l = a(420182),
                c = a(952793),
                p = a(655352),
                d = a(988290),
                u = a(376856),
                m = a(961614),
                g = a(200179);
            const y = "rweb.grok.outageBanner",
                h = ({ access: e, conversationKey: t }) => {
                    const { isGrokDrawer: a } = (0, d.ZP)(),
                        i = (0, r.Dv)(l.lZ),
                        h = (0, s.yu)(),
                        f = !(0, p.ZP)() || h,
                        b = (0, c.wW)("responsive_web_grok_outage_banner_message") || "",
                        k = "" !== b,
                        [w, _] = n.useState(!1),
                        Z = n.useMemo(() => (a ? n.createElement(m.Z, null) : f ? n.createElement(g.Z, { access: e, conversationKey: t }) : n.createElement(u.Z, { access: e, conversationKey: t })), [a, f, e, t]);
                    return (
                        n.useEffect(() => {
                            k &&
                                i.get(y).then((e) => {
                                    e?.shownMessage !== b && (_(!0), i.set(y, { shownMessage: b }));
                                });
                        }, [k, b, i]),
                        n.createElement(n.Fragment, null, w && n.createElement(o.ZP, { autoDismissDelay: 5e3, onClose: () => _(!1), style: E.toast, text: b, withAutoDismiss: !0, withClearButton: !0 }), Z)
                    );
                },
                E = i.default.create((e) => ({ toast: { animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease-out", animationFillMode: "both" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-29bebf45.7d112b5a.js.map

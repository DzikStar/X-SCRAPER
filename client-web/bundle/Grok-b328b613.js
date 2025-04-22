"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-b328b613"],
    {
        435296: (e, t, a) => {
            a.d(t, { k: () => ye });
            var n = a(202784),
                r = a(325686),
                s = a(67369),
                i = a(721266),
                o = a(392237),
                l = a(674132),
                c = a.n(l),
                p = a(542832),
                m = a(323265),
                d = a(952793),
                g = a(655352),
                u = a(464023),
                h = a(962379),
                E = a(791786),
                y = a(928831),
                f = a(988290),
                b = a(892451),
                w = a(25825),
                _ = a(744610),
                C = a(815858),
                Z = a(125363),
                k = a(389071),
                x = a(640350),
                v = a(648536),
                P = a(97696),
                D = a(521927),
                I = a(740705),
                z = a(213103),
                S = a(101039);
            const T = (e) => {
                    const t = n.useRef(new _.Z.Value(0)).current,
                        a = (0, d.hC)("subscriptions_grok_disable_preferred_prompts"),
                        s = (0, d.hC)("responsive_web_grok_show_android_promo_banner"),
                        l = (0, Z.v9)((e) => (0, k.zO)(e)),
                        { isGrok3LayoutEnabled: c, layout: p } = (0, h.Z)(),
                        { grokInput: m, isDefault: g, isInputMobileSize: u } = (0, y.w)(),
                        E = p?.sections || [],
                        f = e.hiddenSections ?? [],
                        T = E.filter((e) => !f.includes(e.section_type)),
                        M = Boolean(e.hasSelectedMode),
                        F = !e.isMobile && (!g || M) && T.some((e) => "FLOATING_CARD" === e.section_type && e.prompts?.some((e) => e.filter_key === m.selectedGrokModeButton?.filter_key));
                    return (
                        n.useEffect(() => {
                            p && _.Z.timing(t, { toValue: 1, duration: 600, useNativeDriver: !1 }).start();
                        }, [p, t]),
                        n.createElement(
                            n.Fragment,
                            null,
                            !p && n.createElement(r.Z, { style: A.loadingContainer }, n.createElement(w.Z, { color: o.default.isDarkMode() ? "white" : "black" })),
                            n.createElement(
                                C.Z,
                                { duration: "long", show: !!p, type: "fade" },
                                n.createElement(i.Z, { size: "space16" }),
                                !!p &&
                                    n.createElement(
                                        r.Z,
                                        { style: [A.moduleContainer, e.isMobile && e.isFocusingInput && c ? A.blurred : null] },
                                        s && u && n.createElement(z.t, null),
                                        T.map((t, r) => {
                                            switch (t.section_type) {
                                                case "HIGHLIGHTED_PROMPTS":
                                                    return M ? null : n.createElement(v.L, { data: t, key: r });
                                                case "PILLS":
                                                    return n.createElement(D.F, { data: t, isMobile: e.isMobile, key: r, style: "pill" });
                                                case "TEXT_CARD":
                                                    return n.createElement(D.F, { data: t, key: r, style: "block" });
                                                case "IMG_CARD":
                                                case "IMG_CARD_FULL":
                                                    return n.createElement(P.$, { data: t, key: r });
                                                case "COMPLEX_CARD":
                                                    return n.createElement(x.V, { data: t, key: r });
                                                case "TRENDS":
                                                    return a ? null : n.createElement(I.E, { data: t, key: r, prompts: l });
                                                case "FLOATING_CARD":
                                                    return e.isMobile ? null : n.createElement(b.u, { data: t, hasSelectedMode: M, key: r });
                                                case "WIDE_TEXT_CARD":
                                                    return F ? null : n.createElement(S.t, { key: r, section: t });
                                                default:
                                                    return null;
                                            }
                                        }),
                                    ),
                            ),
                        )
                    );
                },
                A = o.default.create((e) => ({ loadingContainer: { width: "10%%", alignItems: "center", marginTop: e.spaces.space48 }, moduleContainer: { gap: e.spaces.space32, transition: "filter 0.3s ease" }, blurred: { filter: `blur(${e.spaces.space4})`, pointerEvents: "none" }, container: { width: "100%" }, bottomPadding: { height: "10vh", maxHeight: 125 }, textPromptSuggestions: { flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: e.spaces.space12 }, textPromptsBreak: { flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: e.spaces.space12 }, textPromptsBreakCompact: { width: "100%" }, imagePromptSuggestions: { width: "100%", flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: e.spaces.space12 }, bannerContainer: { width: "100%", paddingHorizontal: e.spaces.space16, maxWidth: 662, marginTop: e.spaces.space80, marginBottom: e.spaces.space36 }, trends: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", maxWidth: 800, gap: e.spaces.space12, marginBottom: e.spaces.space36 }, promptSuggestions: { alignItems: "center" }, restrictedContainer: { opacity: 0.5, pointerEvents: "none" } }));
            var M = a(107267),
                F = a(731708),
                W = a(791632),
                B = a(654917),
                H = a(396510),
                U = a(297195),
                R = a(886728),
                G = a(922411),
                L = a(537938),
                j = a(880469),
                O = a(371625),
                V = a(35752),
                K = a(227249),
                N = a(795644),
                X = a(5605),
                $ = a(934271),
                Y = a(416700),
                q = a(333164),
                J = a(552803),
                Q = a(409433),
                ee = a(832393);
            const te = [
                { label: c().a9109a94, prompt: c().g986f7a4, imageUrl: J, imageUrl2x: Q },
                { label: c().ad685264, prompt: c().hdb08284, imageUrl: O, imageUrl2x: V },
                { label: c().a986ae84, prompt: c().a14b556a, imageUrl: L, imageUrl2x: j },
                { label: c().gc16b670, prompt: c().d5b8fa44, imageUrl: Y, imageUrl2x: q },
                { label: c().da196ff6, prompt: c().ae3979cc, imageUrl: R, imageUrl2x: G },
                { label: c().a682460e, prompt: c().e03e5514, imageUrl: X, imageUrl2x: $ },
                { label: c().e68eac68, prompt: c().hc6e6754, imageUrl: K, imageUrl2x: N },
            ];
            var ae = a(843382),
                ne = a(176310),
                re = a(701311);
            const se = c().h5860a68,
                ie = c().ia5bef3e,
                oe = c().j22655f2,
                le = c().ge683598,
                ce = () => {
                    const e = (0, d.hC)("responsive_web_grok_start_mobile_layout_enabled"),
                        t = (0, d.hC)("responsive_web_grok_start_title_experiment_enabled"),
                        a = (0, d.hC)("responsive_web_grok_image_prompts_enabled"),
                        o = (0, d.hC)("responsive_web_grok_general_availability"),
                        l = (0, d.hC)("subscriptions_grok_disable_preferred_prompts"),
                        c = m.ZP.isWebView(),
                        p = (0, s.LX)(),
                        g = e && c && p,
                        { access: u, conversationKey: h } = (0, B.ZP)(),
                        y = (0, Z.v9)((e) => (0, k.zO)(e)),
                        b =
                            ((w = 2),
                            n.useMemo(
                                () =>
                                    te
                                        .slice()
                                        .sort(() => Math.random() - 0.5)
                                        .slice(0, w)
                                        .map((e) => n.createElement(ee.I, { imageUrl: e.imageUrl, imageUrl2x: e.imageUrl2x, key: e.prompt, label: e.label, prompt: e.prompt, sectionType: "NO_SECTION" })),
                                [w],
                            ));
                    var w;
                    const _ = n.useMemo(() => n.createElement(U.F, null), []),
                        C = (0, M.useHistory)(),
                        x = (0, W.HD)(C),
                        { isGrokDrawer: v } = (0, f.ZP)();
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(
                            r.Z,
                            { style: x ? me.columnContainer : me.container },
                            g ? n.createElement(i.Z, { size: "space16" }) : n.createElement(r.Z, { style: v ? me.topDrawerPadding : me.topPadding }),
                            n.createElement(r.Z, { style: me.searchContainer }, g || v ? null : t ? n.createElement(F.ZP, { align: "center", size: "title3", weight: "medium" }, n.createElement(re.Z, { text: ie })) : n.createElement(F.ZP, { align: "center", size: "title1", weight: "medium" }, se), g ? null : t ? n.createElement(i.Z, { size: "space20" }) : n.createElement(i.Z, { size: "space12" }), g ? null : n.createElement(n.Fragment, null, n.createElement(E.Z, { conversationKey: h, hasAccess: !1 !== u && "restricted" !== u, isIdle: !0, placeholder: t ? le : oe, useDraftPersistence: !0 }), _ ? n.createElement(r.Z, { style: me.inputWarning }, _) : null)),
                            !o || ("free" !== u && "restricted" !== u) ? (g ? null : n.createElement(r.Z, { style: me.bottomPadding })) : n.createElement(r.Z, { style: me.bannerContainer }, n.createElement(H.k, null)),
                            n.createElement(
                                r.Z,
                                { style: [me.promptSuggestions, "restricted" === u ? me.restrictedContainer : void 0] },
                                l ? null : n.createElement(r.Z, { style: me.textPromptSuggestions }, n.createElement(ae.$, { count: 4 })),
                                a ? n.createElement(n.Fragment, null, n.createElement(i.Z, { size: "space12" }), n.createElement(r.Z, { style: me.imagePromptSuggestions }, b)) : null,
                                a ? n.createElement(i.Z, { size: "space24" }) : null,
                                n.createElement(i.Z, { size: "space12" }),
                                n.createElement(
                                    r.Z,
                                    { style: me.trends },
                                    y.map((e) => n.createElement(ne.Y, { key: e.value, prompt: e })),
                                ),
                            ),
                        ),
                        g ? n.createElement(r.Z, { style: me.bottomContainer }, n.createElement(E.Z, { conversationKey: h, hasAccess: !1 !== u && "restricted" !== u, isIdle: !0, placeholder: t ? le : oe, useDraftPersistence: !0 })) : null,
                    );
                },
                pe = !!m.ZP.isWebView(),
                me = o.default.create((e) => ({ container: { width: "100%", height: "100%", alignItems: "center", overflow: "auto" }, columnContainer: { width: "100%", height: "100%", alignItems: "center" }, topPadding: { height: "20vh", maxHeight: 250 }, topDrawerPadding: { height: "10vh", maxHeight: 170 }, bottomPadding: { height: "10vh", maxHeight: 125 }, bottomContainer: { position: "sticky", backgroundColor: pe ? e.colors.cellBackground : e.colors.appBarBackground, paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space12, bottom: pe ? 0 : e.componentDimensions.appBarHeightPx, width: "100%" }, searchContainer: { alignItems: "stretch", paddingHorizontal: e.spaces.space16, width: "100%", maxWidth: u.vf }, inputWarning: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: e.spaces.space4, paddingStart: e.spaces.space16, paddingVertical: e.spaces.space8 }, warning: { color: e.colors.gray300 }, warningWrapper: { paddingHorizontal: e.spaces.space16 }, textPromptSuggestions: { flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: e.spaces.space12 }, textPromptsBreak: { flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: e.spaces.space12 }, textPromptsBreakCompact: { width: "100%" }, imagePromptSuggestions: { width: "100%", flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: e.spaces.space12 }, bannerContainer: { width: "100%", paddingHorizontal: e.spaces.space16, maxWidth: 662, marginTop: e.spaces.space80, marginBottom: e.spaces.space36 }, trends: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", maxWidth: 800, gap: e.spaces.space12, marginBottom: e.spaces.space36 }, promptSuggestions: { alignItems: "center" }, restrictedContainer: { opacity: 0.5, pointerEvents: "none" } }));
            var de = a(300458);
            const ge = c().ia5bef3e,
                ue = () => {
                    const { access: e, conversationKey: t } = (0, B.ZP)(),
                        { hasSelectedInputMode: a } = (0, y.w)(),
                        { layout: s } = (0, h.Z)();
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(
                            r.Z,
                            { style: he.container },
                            n.createElement(
                                r.Z,
                                { style: he.grokContainer },
                                n.createElement(r.Z, { style: he.searchContainer }, n.createElement(i.Z, { size: "space24" }), n.createElement(F.ZP, { align: "center", size: "title3", weight: "medium" }, n.createElement(re.Z, { text: ge })), n.createElement(i.Z, { size: "space24" }), n.createElement(E.Z, { conversationKey: t, hasAccess: !1 !== e && "restricted" !== e, inputAtHome: !0, isIdle: !0, placeholder: c().j22655f2, useDraftPersistence: !0 })),
                                n.createElement(i.Z, { size: "space24" }),
                                !!s &&
                                    n.createElement(
                                        r.Z,
                                        { style: he.moduleContainer },
                                        s.sections.map((e, t) => ("TEXT_CARD" === e.section_type ? n.createElement(D.F, { data: e, key: t, style: "block" }) : "FLOATING_CARD" === e.section_type ? n.createElement(b.u, { data: e, hasSelectedMode: a, key: t }) : void 0)),
                                    ),
                            ),
                        ),
                    );
                },
                he = o.default.create((e) => ({ grokContainer: { maxWidth: u.vf, width: "100%", padding: e.spaces.space8 }, container: { width: "100%", height: "100%", alignItems: "center", overflow: "auto", gap: e.spaces.space24 }, searchContainer: { alignItems: "center", width: "100%" }, moduleContainer: { gap: e.spaces.space24 } })),
                Ee = c().j22655f2,
                ye = ({ access: e, conversationKey: t }) => {
                    const a = (0, d.hC)("responsive_web_grok_use_new_layout"),
                        o = (0, d.hC)("responsive_web_grok_promo_banner"),
                        l = (0, s.yu)(),
                        m = !(0, g.ZP)() || l,
                        { isGrokDrawer: u } = (0, f.ZP)(),
                        { isGrok3LayoutEnabled: w, layout: _ } = (0, h.Z)(),
                        { hasSelectedInputMode: C, isInputFocused: Z } = (0, y.w)(),
                        [k, x] = n.useState(!1),
                        v = n.useRef(null),
                        [P, D] = n.useState(!0);
                    if ((n.useEffect(() => (w && (clearTimeout(v.current), Z ? x(!0) : (v.current = setTimeout(() => x(!1), 50))), () => clearTimeout(v.current)), [w, Z]), !a)) return n.createElement(ce, null);
                    if (u) return n.createElement(ue, null);
                    const I = _?.sections.find((e) => "FLOATING_CARD" === e.section_type);
                    return n.createElement(
                        n.Fragment,
                        null,
                        P &&
                            o &&
                            n.createElement(de.U, {
                                onClose: () => {
                                    D(!1);
                                },
                            }),
                        n.createElement(r.Z, { style: [be.container, m ? (w ? void 0 : be.mobileContainer) : be.desktopContainer] }, n.createElement(r.Z, { style: be.grokContainer }, n.createElement(r.Z, { style: be.searchContainer }, m ? n.createElement(n.Fragment, null, !w && n.createElement(n.Fragment, null, n.createElement(p.default, { style: be.logo }), n.createElement(i.Z, { size: "space36" }))) : n.createElement(n.Fragment, null, n.createElement(p.default, { style: be.logo }), n.createElement(i.Z, { size: "space36" }), n.createElement(E.Z, { conversationKey: t, hasAccess: !1 !== e && "restricted" !== e, inputAtHome: !0, isIdle: !0, placeholder: c().j22655f2, useDraftPersistence: !0 }))), n.createElement(T, { hasSelectedMode: C, isFocusingInput: Z, isMobile: m }))),
                        m ? n.createElement(r.Z, { style: be.bottomContainer }, I && k && n.createElement(n.Fragment, null, n.createElement(b.u, { data: I, hasSelectedMode: C }), n.createElement(i.Z, { axis: "y", size: "space12" })), n.createElement(E.Z, { conversationKey: t, hasAccess: !1 !== e && "restricted" !== e, inputAtBottom: !0, inputAtHome: !0, isIdle: !0, placeholder: Ee, useDraftPersistence: !0 })) : null,
                    );
                },
                fe = !!m.ZP.isWebView(),
                be = o.default.create((e) => ({ grokContainer: { maxWidth: u.vf, width: "100%", padding: e.spaces.space16 }, desktopContainer: { paddingTop: "22vh" }, mobileContainer: { paddingTop: e.spaces.space64 }, container: { width: "100%", overflowX: "hidden", overflowY: "auto", alignItems: "center", paddingBottom: 64, gap: e.spaces.space24 }, bottomContainer: { position: "sticky", backgroundColor: e.colors.appBarBackground, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, paddingBottom: 14, bottom: fe ? 0 : e.componentDimensions.appBarHeightPx, width: "100%", borderTopStartRadius: e.spaces.space24, borderTopEndRadius: e.spaces.space24 }, searchContainer: { alignItems: "center", width: "100%", zIndex: 1e3 }, logo: { height: 70, width: 194 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-b328b613.eed355fa.js.map

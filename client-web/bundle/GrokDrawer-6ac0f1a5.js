"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GrokDrawer-6ac0f1a5"],
    {
        448781: (e, a, n) => {
            n.d(a, { XD: () => S, ZP: () => C, eK: () => y, p9: () => A, pB: () => w, yF: () => g, z_: () => v });
            var d = n(202784),
                o = n(214997),
                r = n(325686),
                l = n(731708),
                t = n(782947),
                i = n(154003),
                s = n(392237),
                c = n(332920),
                u = n.n(c),
                b = n(725516),
                h = n(988290),
                m = n(928831);
            const p = u().g7b1c574,
                D = u().f388a7ec,
                f = u().ab1eb384,
                S = u().f388a7ec,
                g = u().i330e54c,
                w = "default",
                A = u().fdcce108,
                y = u().ac64b674,
                v = "deeper",
                k = [
                    { label: S, description: g, value: w },
                    { label: A, description: y, value: v },
                ],
                M = s.default.create((e) => ({ container: { flex: 1 }, scrollView: { flex: 1 }, contentContainerScrollView: { display: "flex", flexDirection: "column", gap: e.spaces.space12, paddingHorizontal: e.spaces.space24 }, compactContentContainerScrollView: { gap: e.spaces.space8, paddingVertical: e.spaces.space16 }, title: { fontSize: e.fontSizes.headline2 }, subtitle: { color: e.colors.gray700 }, section: { marginTop: e.spaces.space8, gap: e.spaces.space12 }, buttonContainer: { display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-end", padding: e.spaces.space24 }, compactButtonContainer: { justifyContent: "center" }, resetToDefaultButton: {} })),
                C = () => {
                    const { isCompactLayout: e, isGrokDrawer: a } = (0, h.ZP)(),
                        { advancedSettings: n, setDeepersearchAdvancedSettings: s, setDeepsearchAdvancedSettings: c } = (0, m.w)(),
                        u = (0, b.z)(),
                        S = e && !a,
                        g = d.useCallback(
                            (e, a) => {
                                u.scribe({ action: "change", component: "grok-deepsearch-mode", element: a }), a === w ? c() : s();
                            },
                            [u, c, s],
                        );
                    return d.createElement(
                        r.Z,
                        { style: M.container },
                        d.createElement(o.Z, { contentContainerStyle: [M.contentContainerScrollView, S ? M.compactContentContainerScrollView : void 0], style: M.scrollView }, d.createElement(l.ZP, { style: M.title, weight: "bold" }, D), d.createElement(l.ZP, { style: M.subtitle }, f), d.createElement(r.Z, { style: M.section }, d.createElement(t.Z, { horizontal: !S, name: "", onChange: g, options: k, value: n?.deepsearchArgs?.mode || k[0].value }))),
                        d.createElement(
                            r.Z,
                            { style: [M.buttonContainer, S ? M.compactButtonContainer : void 0] },
                            d.createElement(
                                i.ZP,
                                {
                                    borderColor: "transparent",
                                    color: "gray900",
                                    disabled: !n?.deepsearchArgs?.mode || n?.deepsearchArgs?.mode === w,
                                    onClick: () => {
                                        g("", k[0].value);
                                    },
                                    size: "small",
                                    style: M.resetToDefaultButton,
                                },
                                d.createElement(l.ZP, null, p),
                            ),
                        ),
                    );
                };
        },
        928831: (e, a, n) => {
            n.d(a, { w: () => D });
            var d = n(202784),
                o = n(400752),
                r = n(67369),
                l = n(323265),
                t = n(420182),
                i = n(443781),
                s = n(952793),
                c = n(125363),
                u = n(389071),
                b = n(962379),
                h = n(988290),
                m = n(448781);
            const p = "rweb.grokInputAdvancedSettings",
                D = () => {
                    const [e, a] = d.useState(!1),
                        n = (0, o.Dv)(t.lZ),
                        D = (0, c.v9)((e) => (0, u.JU)(e)),
                        { advancedSettings: f, filterKey: S } = D,
                        { isGrokDrawer: g } = (0, h.ZP)(),
                        w = (0, c.I0)(),
                        A = (() => {
                            const e = (0, c.oR)(),
                                a = (0, u.F9)(e.getState()),
                                { layout: n } = (0, b.Z)();
                            return d.useMemo(() => (n && n?.mode_buttons.filter((e) => (e.supported_models || []).includes(a))) || [], [n, a]);
                        })(),
                        y = (() => {
                            const { userClaims: e } = (0, i.QZ)(),
                                a = e.isAnyPremiumSubscriber();
                            let n = "free_status";
                            return e.hasSubscription("premium_plus") ? (n = "premium_plus_status") : a && (n = "premium_status"), n;
                        })(),
                        v = (() => {
                            const e = (0, c.v9)((e) => (0, u.JU)(e)),
                                { advancedSettings: a } = e;
                            return d.useMemo(() => {
                                const e = { Research: {}, Reasoning: {}, ImageEdit: { enabledOnClickBehavior: "FileInput" } };
                                return a?.deepsearchArgs?.mode === m.z_ && (e.Research.label = m.p9), e;
                            }, [a]);
                        })(),
                        [k, M] = d.useState(""),
                        C = (0, s.hC)("responsive_web_grok_enable_file_attachment_with_deepsearch"),
                        E = (0, s.hC)("responsive_web_grok_enable_file_attachment_with_think"),
                        I = (0, s.hC)("responsive_web_grok_enable_deepersearch"),
                        _ = d.useCallback(
                            (e) => {
                                w((0, u.X4)(e));
                            },
                            [w],
                        ),
                        P = d.useCallback(
                            (e) => {
                                w((0, u.F0)(e));
                            },
                            [w],
                        ),
                        B = d.useCallback(() => {
                            if (f) {
                                const e = { ...f };
                                delete e.deepsearchArgs, P(e);
                            } else P(null);
                        }, [f, P]),
                        x = d.useCallback(() => {
                            P({ ...f, deepsearchArgs: { mode: m.z_ } });
                        }, [f, P]);
                    d.useEffect(() => {
                        n.get(p).then((e) => {
                            e && n.set(p, null);
                        });
                    }, [n, P, I]);
                    const N = d.useCallback(
                            (e) => {
                                w((0, u.ni)(null === e ? null : e));
                            },
                            [w],
                        ),
                        G = d.useCallback(() => {
                            N(null);
                        }, [N]),
                        R = d.useCallback(() => {
                            N("Research");
                        }, [N]),
                        T = d.useCallback(() => {
                            N("Reasoning");
                        }, [N]),
                        Z = d.useCallback(() => {
                            N("ImageEdit");
                        }, [N]),
                        L = d.useCallback(
                            (e) => {
                                N(e);
                            },
                            [N],
                        ),
                        O = (0, r.Mv)(),
                        W = !S,
                        F = !!S,
                        H = "Research" === S,
                        z = "Reasoning" === S,
                        K = "ImageEdit" === S,
                        J = "CreateImage" === S,
                        X = (0, r.yu)(),
                        U = X && l.ZP.isWebView(),
                        V = O || !!g,
                        $ = D.focused,
                        j = (H && !C) || (z && !E);
                    return (
                        d.useEffect(() => {
                            k && ("Research" !== k || H ? ("Reasoning" !== k || z ? "ImageEdit" !== k || K || Z() : T()) : R(), M(""));
                        }, [A, y, G, K, z, H, k, R, Z, T]),
                        { grokInput: D, setFocused: _, isResearchEnabled: H, isReasoningEnabled: z, isImageEditEnabled: K, isCreateImageEnabled: J, isDefault: W, isInputFocused: $, hasSelectedFilterKey: F, isInputMobileSize: X, isInputMobile: U, isInputCompact: V, grokModeButtons: A, grokModeButtonStatusKey: y, filterKey: S, isFileInputDisabled: j, setAdvancedSettings: P, setDeepsearchAdvancedSettings: B, setDeepersearchAdvancedSettings: x, advancedSettings: f, grokModeButtonOverrides: v, selectDeepsearchFilterKey: R, selectReasoningFilterKey: T, selectImageEditFilterKey: Z, clearFilterKey: G, setPendingModeButtonFilterKey: M, setFilterKey: L, hasValue: e, setHasValue: a }
                    );
                };
        },
        988290: (e, a, n) => {
            n.d(a, { BQ: () => l, ZP: () => t });
            var d = n(202784);
            const o = { scrollable: void 0, isCompactLayout: !1, isEditingEnabled: !0, isShowButtons: !0, isShowCarousel: !0, isPagedScroll: !0, isGrokShare: !1, isGrokDrawer: !1 },
                r = d.createContext(o);
            function l({ children: e, isCompactLayout: a, isEditingEnabled: n, isGrokDrawer: o, isGrokShare: l, isPagedScroll: t, isShowButtons: i, isShowCarousel: s, scrollable: c }) {
                return d.createElement(r.Provider, { value: { scrollable: c, isCompactLayout: a, isShowButtons: i, isEditingEnabled: n, isShowCarousel: s, isPagedScroll: t, isGrokShare: l, isGrokDrawer: o } }, e);
            }
            function t() {
                return d.useContext(r);
            }
        },
        357606: (e, a, n) => {
            n.r(a), n.d(a, { default: () => de });
            var d = n(807896),
                o = n(202784),
                r = n(325686),
                l = n(107267),
                t = n(523561),
                i = n(292627),
                s = n(365023),
                c = n(461756),
                u = n(292484),
                b = n(528840),
                h = n(293115),
                m = n(125363),
                p = n(456228),
                D = n(551864),
                f = n(537392),
                S = n(78882);
            var g = n(530732),
                w = n(786998),
                A = n(392237),
                y = n(457566),
                v = n(725405),
                k = n(550293),
                M = n(511582);
            const C = { header: "GrokDrawerHeader", headerHighlighted: "GrokDrawerHeaderHighlighted", root: "GrokDrawer" };
            var E = n(731708),
                I = n(332920),
                _ = n.n(I),
                P = n(952793),
                B = n(389071),
                x = n(189953);
            function N({ children: e, size: a, weight: n }) {
                return o.createElement(r.Z, { style: G.container }, o.createElement(E.ZP, { size: a, style: G.label, weight: n || "normal" }, o.createElement("span", null, e)));
            }
            const G = A.default.create((e) => ({ container: { position: "relative", width: "fit-content", animationDuration: "0.3s", opacity: 1, animationTimingFunction: "linear", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, label: { color: e.colors.transparent, backgroundColor: e.colors.gray600, backgroundImage: `linear-gradient(to right, ${e.colors.gray600} 0%, ${e.colors.gray900} 20%, ${e.colors.gray500} 40%, ${e.colors.gray600} 100%)`, opacity: 1, display: "inline-block", backgroundClip: "text", animationDuration: "0.7s", backgroundRepeat: "no-repeat", animationIterationCount: "infinite", animationTimingFunction: "linear", animationKeyframes: [{ "0%": { backgroundPositionX: "-2em" }, "100%": { backgroundPositionX: "7em" } }] } })),
                R = _().h5860a68,
                T = _().ed93de0c,
                Z = _().d1d92e40;
            function L() {
                const e = (0, P.hC)("responsive_web_grok_analyze_animation"),
                    a = (0, m.v9)(B.Es),
                    n = (0, B.f)({ conversationKey: a }),
                    d = -1 !== (0, m.v9)(n.selectPromptSource)?.indexOf("post_analysis"),
                    l = (0, m.v9)(n.selectStatus),
                    t = l === x.Q_.TYPING || l === x.Q_.WAITING;
                return o.createElement(r.Z, { style: O.titleTextRoot }, d && e ? (t ? o.createElement(N, { size: "headline2", weight: "bold" }, `${T}...`) : o.createElement(E.ZP, { size: "headline2", style: O.animation }, Z)) : o.createElement(E.ZP, null, R));
            }
            const O = A.default.create((e) => ({ titleTextRoot: { paddingStart: e.spaces.space2, flexGrow: 1, flexShrink: 1 }, animation: { opacity: 1, animationDuration: "2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
            n(136728);
            var W = n(154003),
                F = n(530243),
                H = n(52735),
                z = n(487552),
                K = n(899667),
                J = n(807901);
            const X = _().a6e89af8,
                U = _().d227d19e,
                V = _().j7d0e836,
                $ = _().ica55d24,
                j = { label: $ };
            function Y({ conversationUrl: e, handleToggleVisibility: a, isExpanded: n, onClose: d }) {
                const t = (0, l.useHistory)(),
                    i = o.useCallback(() => {
                        e && (t.push(e), a());
                    }, [a, e, t]),
                    { canClearConversation: s, handleClearConversationClickWithoutNav: c } = (0, J.Z)();
                return o.createElement(r.Z, { style: Q.rightControls }, n && e && o.createElement(W.ZP, { "aria-label": X, hoverLabel: { label: X }, icon: o.createElement(F.default, { style: { height: 19, width: 19, marginBottom: 2 } }), onPress: i, type: "primaryText" }), n && s && o.createElement(W.ZP, { "aria-label": $, disabled: !s, hoverLabel: j, icon: o.createElement(H.default, { style: Q.composeIcon }), onPress: c, type: "primaryText" }), n && o.createElement(W.ZP, { "aria-label": U, hoverLabel: { label: U }, icon: o.createElement(z.default, null), onPress: a, type: "primaryText" }), !n && o.createElement(W.ZP, { "aria-label": V, hoverLabel: { label: V }, icon: o.createElement(K.default, null), onPress: a, type: "primaryText" }));
            }
            const Q = A.default.create((e) => ({ rightControls: { flexDirection: "row", alignItems: "center" }, composeIcon: { fill: "none" } }));
            function q({ conversationUrl: e }) {
                const a = o.createRef(),
                    n = (0, m.I0)(),
                    d = (0, m.v9)(p.kX) === D.j.EXPANDED,
                    l = (0, m.v9)(k.kX) === M.S.EXPANDED,
                    t = o.useCallback(() => {
                        const e = d ? D.j.COLLAPSED : D.j.EXPANDED;
                        e === D.j.EXPANDED && l && n(k.bi(M.S.COLLAPSED)), n(p.bi(e));
                    }, [d, n, l]),
                    i = o.useCallback(() => {
                        n(p.bi(D.j.CLOSED));
                    }, [n]),
                    s = (0, v.Z)();
                return o.createElement(
                    r.Z,
                    { ref: a, style: [ee.headerRoot, !d && ee.headerBorderClosed, ee.cursor], testID: C.header },
                    d
                        ? o.createElement(w.Z, { onMiddleControlClick: t, rightControl: o.createElement(Y, { conversationUrl: e, handleToggleVisibility: t, isExpanded: d, onClose: i }), style: ee.roundedAppBarCorners, title: o.createElement(r.Z, { style: ee.titleContainer }, o.createElement(y.x1, null), o.createElement(L, null)) })
                        : o.createElement(
                              g.Z,
                              {
                                  onPress: () => {
                                      s.scribe({ element: "grok-bubble", action: "click" }), t();
                                  },
                                  style: [ee.collapsedContainer, { alignItems: "center", justifyContent: "center" }],
                              },
                              o.createElement(y.x1, { style: ee.icon }),
                          ),
                );
            }
            const ee = A.default.create((e) => ({ cursor: { cursor: "pointer" }, headerRoot: { height: 55, borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge, transition: "all 0.3s ease" }, headerBorderClosed: { borderColor: e.colors.navigationBackground }, titleContainer: { height: "100%", alignItems: "center", gap: e.spaces.space4, display: "flex", flexDirection: "row", flexGrow: 1 }, collapsedContainer: { height: "100%", alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1 }, grokText: { fontSize: 8, marginTop: -4 }, icon: { width: 32, height: 32 }, roundedAppBarCorners: { borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge } })),
                ae = { page: "grok-drawer" };
            const ne = (0, t.Z)({
                loader: () =>
                    Promise.all([
                        n.e("icons.5"),
                        n.e("icons.6"),
                        n.e("icons.25"),
                        n.e("icons.22"),
                        n.e("icons.9"),
                        n.e("icons.4"),
                        n.e("icons.15"),
                        n.e("icons.2"),
                        n.e("icons.20"),
                        n.e("icons.7"),
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("icons.0"),
                        n.e("icons.11"),
                        n.e("icons.27"),
                        n.e("icons.17"),
                        n.e("icons.12"),
                        n.e("icons.3"),
                        n.e("icons.13"),
                        n.e("icons.18"),
                        n.e("modules.audio-6107ac1a"),
                        n.e("modules.audio-b953418a"),
                        n.e("modules.audio-7c51e6a7"),
                        n.e("modules.audio-04db59e9"),
                        n.e("modules.audio-76583d6c"),
                        n.e("modules.audio-b7a8a5fb"),
                        n.e("modules.audio-51f6e793"),
                        n.e("modules.audio-e019dbda"),
                        n.e("modules.audio-262c94d4"),
                        n.e("modules.audio-c6fe4ea4"),
                        n.e("icons.24"),
                        n.e("icons.10"),
                        n.e("icons.8"),
                        n.e("icons.26"),
                        n.e("icons.19"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        n.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2f4a3d25"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1bce2d5d"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9e2532"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b73bd0e3"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e0a7c12b"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-627162af"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-286dfed9"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-162a9ab0"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-cbd8f64c"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f943ab46"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-91216611"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-10bcc2eb"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        n.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        n.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-8d7085c2"),
                        n.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-53f39e22"),
                        n.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5"),
                        n.e("shared~bundle.Birdwatch~bundle.News~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandl"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights~loader"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-3ba4c741"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-eadf0bc8"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b6859af7"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-856c9f2b"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-30607449"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-ff768435"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b8a8a774"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4e7553e3"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-68027d49"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b20998b4"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-703d6ce2"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-5f0ed14e"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-bd66f825"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-92ee7280"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4cd14b6e"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-380ace89"),
                        n.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown~loader.TexBlock"),
                        n.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown"),
                        n.e("shared~bundle.Grok~loader.Markdown"),
                        n.e("bundle.Grok-e907d115"),
                        n.e("bundle.Grok-e96e9bea"),
                        n.e("bundle.Grok-0ae4e026"),
                        n.e("bundle.Grok-b16f5c14"),
                        n.e("bundle.Grok-9f4db315"),
                        n.e("bundle.Grok-e4e3d8bb"),
                        n.e("bundle.Grok-63cb1cc4"),
                        n.e("bundle.Grok-c69e90f3"),
                        n.e("bundle.Grok-ea2f266f"),
                        n.e("bundle.Grok-16d5f187"),
                        n.e("bundle.Grok-bf286bb5"),
                        n.e("bundle.Grok-78699f4a"),
                        n.e("bundle.Grok-38dc3b4a"),
                        n.e("bundle.Grok-1d830d6b"),
                        n.e("bundle.Grok-d49ace54"),
                        n.e("bundle.Grok-3277c3ad"),
                        n.e("bundle.Grok-57c2c4a2"),
                        n.e("bundle.Grok-f1a12957"),
                        n.e("bundle.Grok-78667c23"),
                        n.e("bundle.Grok-a244d277"),
                        n.e("bundle.Grok-0d8ef87b"),
                        n.e("bundle.Grok-1d41f45b"),
                        n.e("bundle.Grok-b8348d5d"),
                        n.e("bundle.Grok-7bc92c09"),
                        n.e("bundle.Grok-f8a31592"),
                        n.e("bundle.Grok-bd027025"),
                        n.e("bundle.Grok-7a6ce5c4"),
                        n.e("bundle.Grok-cebf58fc"),
                        n.e("bundle.Grok-29bebf45"),
                        n.e("bundle.Grok-9e9ee61b"),
                        n.e("bundle.Grok-6ac0f1a5"),
                        n.e("bundle.Grok-3c20ad5c"),
                    ]).then(n.bind(n, 29734)),
            });
            function de({ width: e }) {
                const a = (0, u.cm)(),
                    [n, t] = o.useState(0),
                    g =
                        ((w = n),
                        (0, f.Zx)(({ windowHeight: e }) => {
                            const a = S.I2.find((a) => w <= Math.ceil(e * a));
                            return a ? e * Math.max(a, 0.5) : Math.min(w, Math.ceil(S.T6 * e));
                        }));
                var w;
                const A = (0, m.v9)((e) => p.kX(e)),
                    y = A === D.j.EXPANDED,
                    v = A === D.j.CLOSED;
                o.useEffect(() => {
                    v && t(0);
                }, [v]);
                const k = o.useCallback(
                        (e) => {
                            const {
                                nativeEvent: {
                                    layout: { height: a },
                                },
                            } = e;
                            t(a);
                        },
                        [t],
                    ),
                    M = o.useMemo(() => [S.ZP.allowPointer, S.ZP.main, y ? { minHeight: g, maxWidth: null } : S.ZP.collapsedSmall], [y, g]);
                return (function () {
                    const e = (0, l.useHistory)(),
                        a = e.getLastNonModalLocationPathname() ?? e.location.pathname;
                    return o.useMemo(() => (0, b.z)(a) || a.startsWith("/i/chat") || a.startsWith("/i/communitynotes") || a.startsWith("/messages") || a.startsWith("/i/radar") || a.startsWith("/i/money") || a.startsWith("/i/verified") || a.startsWith("/i/broadcasts/") || a.startsWith("/compose/articles") || a.startsWith("/i/account_analytics") || a.startsWith("/i/conferences-room") || a.startsWith("/i/premium/hiring") || a.startsWith("/i/grok") || a.endsWith("/live"), [a]);
                })() ||
                    v ||
                    !a
                    ? null
                    : o.createElement(
                          i.Z.GrokDrawer,
                          null,
                          o.createElement(s.Z, { id: "GrokDrawer" }, (a, l) => o.createElement(h.nO, { namespace: ae }, o.createElement(r.Z, (0, d.Z)({ ref: a() }, l({ style: [S.ZP.denyPointer, S.ZP.root, { width: e, height: n }, c.Z.reducedMotionEnabled && S.ZP.reducedMotion], testID: C.root })), o.createElement(r.Z, { onLayout: k, style: M }, o.createElement(q, { conversationUrl: "/i/grok" }), y && o.createElement(ne, null))))),
                      );
            }
        },
        78882: (e, a, n) => {
            n.d(a, { I2: () => l, T6: () => t, ZP: () => i });
            var d = n(392237),
                o = n(198438),
                r = n(521514);
            const l = [0.4, 0.53, 0.66, 0.8],
                t = 0.8,
                i = d.default.create((e) => ({ root: { position: "relative", alignSelf: "flex-end", marginEnd: e.spaces.space20, marginBottom: e.spaces.space12, minWidth: r.Z.dmDrawerWidth.min, maxWidth: r.Z.dmDrawerWidth.max, transition: `all ${o.s}ms ease` }, main: { position: "absolute", backgroundColor: e.colors.navigationBackground, borderRadius: e.borderRadii.xLarge, overflow: "hidden", boxShadow: e.boxShadows.medium, flex: 1, width: "100%", maxHeight: 100 * t + "vh" }, hidden: { display: "none" }, contentContainer: { flex: 1, height: "unset", overflow: "auto", minHeight: "unset", maxHeight: "unset" }, drawerHeaderRadius: { borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge }, reducedMotion: { transition: "none" }, collapsedSmall: { maxWidth: 55, alignSelf: "flex-end", borderColor: e.colors.gray400, borderWidth: e.spaces.space1, backgroundColor: e.colors.appBarBackground, backdropFilter: "blur(12px)" }, denyPointer: { pointerEvents: "none" }, allowPointer: { pointerEvents: "auto" } }));
        },
        807901: (e, a, n) => {
            n.d(a, { Z: () => D });
            n(543673), n(240753), n(128399), n(136728);
            var d = n(202784),
                o = n(107267),
                r = n(332920),
                l = n.n(r),
                t = n(774426),
                i = n(725516),
                s = n(125363),
                c = n(189953),
                u = n(928831),
                b = n(623494),
                h = n(654917);
            const m = l().f794af9a,
                p = l().eccf9fea;
            function D() {
                const e = (0, s.I0)(),
                    a = (0, h.uf)(),
                    n = (0, o.useHistory)(),
                    r = (0, s.v9)(a.selectCanClearConversation),
                    { access: l, changeMode: D, mode: f } = (0, h.ZP)(),
                    { clearFilterKey: S } = (0, u.w)(),
                    g = !1 !== l,
                    w = (0, i.z)(),
                    A = (0, o.useLocation)(),
                    y = d.useCallback(() => {
                        const d = new URLSearchParams(A.search),
                            o = d.get("analysisEntityId"),
                            l = d.get("conversation");
                        (o || l) && r
                            ? (n.goBack(),
                              setTimeout(() => {
                                  e(a.clearConversation());
                              }, 500))
                            : r
                              ? e(a.clearConversation())
                              : n.goBack();
                    }, [r, e, a, n, A.search]),
                    v = d.useCallback(() => {
                        r && (e(a.clearConversation()), n.push("/i/grok"), (0, b.ZY)(w), S());
                    }, [w, r, e, a, n, S]),
                    k = d.useCallback(() => {
                        r && (e(a.clearConversation()), (0, b.ZY)(w), S());
                    }, [w, r, e, a, S]),
                    M = d.useCallback(
                        (e) => {
                            const a = [
                                {
                                    disabled: f === c.IK.REGULAR,
                                    onClick: function () {
                                        D(c.IK.REGULAR, w);
                                    },
                                    text: p,
                                },
                                {
                                    disabled: f === c.IK.FUN,
                                    onClick: function () {
                                        D(c.IK.FUN, w);
                                    },
                                    text: m,
                                },
                            ];
                            return d.createElement(t.default, { actionItems: a, onClose: e });
                        },
                        [w, f, D],
                    );
                return { canClearConversation: r, handleBackClick: y, handleClearConversationClick: v, handleClearConversationClickWithoutNav: k, isEligible: g, renderActionsMenu: M };
            }
        },
        654917: (e, a, n) => {
            n.d(a, { ZP: () => p, eX: () => h, uf: () => m });
            var d = n(202784),
                o = n(107267),
                r = n(323265),
                l = n(791632),
                t = n(443781),
                i = n(952793),
                s = n(125363),
                c = n(389071),
                u = n(63538),
                b = n(623494);
            function h() {
                const e = (0, o.useHistory)(),
                    a = (0, s.v9)(c.Es);
                return (0, l.HD)(e) ? (0, l.tT)(e) : a;
            }
            function m() {
                const e = h(),
                    a = (0, s.I0)(),
                    n = (0, s.v9)((a) => (0, c.YJ)(a, e));
                return (0, s.v9)(n.selectIsInitialized) || a((0, c.Ki)(e)), n;
            }
            function p() {
                const { userClaims: e } = (0, t.QZ)(),
                    a = h(),
                    n = m(),
                    o = (0, s.v9)(n.selectMessageIds),
                    l = (0, s.I0)(),
                    p = (0, s.v9)(n.selectFetchConversationIdStatus),
                    D = (0, s.v9)(n.selectFetchConversationIdError),
                    f = (0, s.v9)(n.selectMode),
                    S = (0, s.v9)(n.selectStatus),
                    g = (0, s.v9)(c.Pt),
                    w = (0, s.v9)(n.selectConversationId),
                    A = (0, s.v9)(c.pZ),
                    y = (0, s.v9)(c.uF),
                    v = (0, s.v9)(c.F9),
                    k = (0, s.v9)(n.selectAnalysisEntityId),
                    M = (0, s.v9)(n.selectUsingExperiment);
                let C = !1;
                const E = (0, i.hC)("responsive_web_grok_general_availability");
                e.isTrueAndEnabled("subscriptions_inapp_grok") ? (C = "premium") : (E || y) && (C = A.length > 0 ? "restricted" : "free");
                const I = d.useCallback(
                        async (e, a) => {
                            f !== e && (l(n.setMode(e)), r.ZP.isTwitterApp() || (await l((0, u.O)(e, v))), (0, b.RC)(a, e));
                        },
                        [l, n, f, v],
                    ),
                    _ = d.useCallback(
                        async (e, a, n) => {
                            e !== v && (l((0, c.j1)(e, a)), r.ZP.isTwitterApp() || (await l((0, u.O)(f, e))), (0, b.JO)(n, e));
                        },
                        [l, f, v],
                    );
                return { messageIds: o, access: C, status: S, grokSettingsStatus: g, conversationKey: a, conversationId: w, analysisEntityId: k, accessRestrictedReasons: A, fetchConversationIdStatus: p, fetchConversationIdError: D, mode: f, model: v, changeMode: I, changeModel: _, usingExperiment: M };
            }
        },
        962379: (e, a, n) => {
            n.d(a, { Z: () => t });
            var d = n(952793),
                o = n(87063),
                r = n(125363),
                l = n(389071);
            function t() {
                const e = (0, r.v9)((e) => (0, l.uX)(e)),
                    a = (0, d.hC)("responsive_web_grok_use_new_layout"),
                    n = (0, r.v9)((e) => (0, l.Pt)(e)),
                    t = Boolean(e?.sections.find((e) => "WIDE_TEXT_CARD" === e.section_type));
                return { enabled: a, layout: e, loading: !n || "none" === n || n === o.Z.LOADING, isGrok3LayoutEnabled: t };
            }
        },
        623494: (e, a, n) => {
            n.d(a, { DE: () => m, G$: () => t, HO: () => C, HR: () => P, JO: () => f, Jm: () => k, NH: () => B, RC: () => D, S7: () => _, UV: () => N, Uk: () => y, YI: () => c, YW: () => I, ZY: () => p, az: () => i, c3: () => l, dP: () => g, dd: () => h, eS: () => v, eV: () => M, hf: () => S, hq: () => s, kl: () => A, mm: () => b, op: () => w, pv: () => r, qQ: () => R, u1: () => E, y6: () => u, zC: () => x, zX: () => G });
            var d = n(163889);
            function o() {
                return `online:${window.navigator.onLine}|effectiveType:${window.navigator.connection?.effectiveType ?? "unknown"}`;
            }
            function r(e, a) {
                T(e)({ element: "api-add-response", action: "start", data: { event_info: JSON.stringify(a) } });
            }
            function l(e, a) {
                T(e)({ element: "api-add-response-regenerate", action: "start", data: { event_info: JSON.stringify(a) } });
            }
            function t(e, a) {
                T(e)({ element: "selected-side-by-side", action: "click", data: { event_info: JSON.stringify(a) } });
            }
            function i(e, a, n) {
                T(e)({ element: "client-home-log", action: a, data: { event_info: JSON.stringify(n) } });
            }
            function s(e, a) {
                T(e)({ element: "deepsearch-premature-stream-close-log", action: "error", data: { event_info: JSON.stringify({ errorMessage: a.errorMessage }), duration_ms: a.durationMs } });
            }
            function c(e, a) {
                T(e)({ element: "deepsearch-premature-manual-stream-stop", action: "click", data: { event_info: JSON.stringify(a.messageTagCounts), duration_ms: a.durationMs } });
            }
            function u(e, a) {
                T(e)({ element: "deepsearch-duration", action: "complete", data: { duration_ms: a } });
            }
            function b(e, a, n) {
                T(e)({ element: "api-add-response-retry", action: "start", data: { event_info: JSON.stringify({ numRetriesExecuted: a, error: n }) } });
            }
            function h(e, a) {
                T(e)({ element: "api-add-response-edit", action: "start", data: { event_info: JSON.stringify(a) } });
            }
            function m(e) {
                T(e)({ element: "abort", action: "click" });
            }
            function p(e) {
                T(e)({ element: "clear-conversation", action: "click" });
            }
            function D(e, a) {
                T(e)({ element: "grok_mode", action: "change", data: { event_info: a } });
            }
            function f(e, a) {
                T(e)({ element: "grok_model", action: "change", data: { event_info: a } });
            }
            function S(e, a) {
                T(e)({ element: "tweet-carousel", action: "change", data: { event_info: a.toString() } });
            }
            function g(e, a) {
                T(e)({ element: "file-attachment", action: "add", data: { event_info: a } });
            }
            function w(e, a) {
                T(e)({ element: "file-attachment", action: "fail", data: { event_info: a } });
            }
            function A(e, a, n) {
                T(e)({ element: "api-add-response", action: "error", data: { event_info: `${a.message}\n${a.stack}\n${o()}` } }), (0, d.Hj)(a, { level: "warning", extra: n });
            }
            function y(e, a) {
                T(e)({ element: "api-add-response", action: "fail", data: { event_info: `${a}\n${o()}` } });
            }
            function v(e, a) {
                T(e)({ element: "response-chunk-read", action: "timer_elapsed", data: { event_info: a ? "first_chunk" : void 0 } });
            }
            function k(e) {
                T(e)({ element: "file-upload", action: "success" });
            }
            function M(e, a) {
                T(e)({ element: "file-upload", action: "fail", data: { event_info: a } });
            }
            function C(e, a) {
                T(e)({ element: "grok_post_analysis_button", action: "click", data: { event_source: a ? "post_details" : "timeline" } });
            }
            function E(e, a, n) {
                T(e)({ element: "grok-post-image-annotation", action: "start", data: { event_source: a ? "post_details" : "timeline", event_info: n ? JSON.stringify({ mediaId: n }) : void 0 } });
            }
            function I(e, a) {
                T(e)({ element: "grok-drawer-open", action: "success", data: { event_source: a } });
            }
            function _(e, a) {
                T(e)({ element: "grok-card-attachment", action: "show", data: { event_info: JSON.stringify({ cardType: a.cardType, variant: a.variant }) } });
            }
            function P(e, a, n) {
                T(e)({ element: "grok-card-attachment-follow-up", action: "send", data: { event_info: JSON.stringify({ cardType: a.cardType, variant: a.variant, followUpText: n }) } });
            }
            function B(e) {
                T(e)({ element: "open-grok-memory-drawer", action: "start", data: {} });
            }
            function x(e, a) {
                T(e)({ element: "grok-memory-detail", action: "click", data: { event_info: a } });
            }
            function N(e, a) {
                T(e)({ element: "grok-memory-forget", action: "click", data: { event_info: a } });
            }
            function G(e, a, n) {
                T(e)({ element: "grok-memory-forget", action: "error", data: { event_info: JSON.stringify({ conversationId: a, error: n }) } });
            }
            function R(e, a) {
                T(e)({ element: "grok-memory-detail", action: "click", data: { event_info: a } });
            }
            const T = (e) => (a) => {
                e.scribe({ ...a, data: { url: window.location.href, ...a.data } });
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GrokDrawer-6ac0f1a5.442697ca.js.map

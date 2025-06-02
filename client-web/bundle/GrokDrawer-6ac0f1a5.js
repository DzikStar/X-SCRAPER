"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GrokDrawer-6ac0f1a5"],
    {
        448781: (e, a, n) => {
            n.d(a, { XD: () => D, ZP: () => S, eK: () => v, p9: () => y, pB: () => k, yF: () => w, z_: () => M });
            var o = n(202784),
                d = n(214997),
                r = n(325686),
                t = n(731708),
                l = n(782947),
                i = n(154003),
                s = n(392237),
                c = n(111677),
                u = n.n(c),
                b = n(725516),
                m = n(988290),
                h = n(928831);
            const p = u().g7b1c574,
                f = u().f388a7ec,
                g = u().ab1eb384,
                D = u().f388a7ec,
                w = u().i330e54c,
                k = "default",
                y = u().fdcce108,
                v = u().ac64b674,
                M = "deeper",
                A = [
                    { label: D, description: w, value: k },
                    { label: y, description: v, value: M },
                ],
                C = s.default.create((e) => ({ container: { flex: 1 }, scrollView: { flex: 1 }, contentContainerScrollView: { display: "flex", flexDirection: "column", gap: e.spaces.space12, paddingHorizontal: e.spaces.space24 }, compactContentContainerScrollView: { gap: e.spaces.space8, paddingVertical: e.spaces.space16 }, title: { fontSize: e.fontSizes.headline2 }, subtitle: { color: e.colors.gray700 }, section: { marginTop: e.spaces.space8, gap: e.spaces.space12 }, buttonContainer: { display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-end", padding: e.spaces.space24 }, compactButtonContainer: { justifyContent: "center" }, resetToDefaultButton: {} })),
                S = () => {
                    const { isCompactLayout: e, isGrokDrawer: a } = (0, m.ZP)(),
                        { advancedSettings: n, setDeepersearchAdvancedSettings: s, setDeepsearchAdvancedSettings: c } = (0, h.w)(),
                        u = (0, b.z)(),
                        D = e && !a,
                        w = o.useCallback(
                            (e, a) => {
                                u.scribe({ action: "change", component: "grok-deepsearch-mode", element: a }), a === k ? c() : s();
                            },
                            [u, c, s],
                        );
                    return o.createElement(
                        r.Z,
                        { style: C.container },
                        o.createElement(d.Z, { contentContainerStyle: [C.contentContainerScrollView, D ? C.compactContentContainerScrollView : void 0], style: C.scrollView }, o.createElement(t.ZP, { style: C.title, weight: "bold" }, f), o.createElement(t.ZP, { style: C.subtitle }, g), o.createElement(r.Z, { style: C.section }, o.createElement(l.Z, { horizontal: !D, name: "", onChange: w, options: A, value: n?.deepsearchArgs?.mode || A[0].value }))),
                        o.createElement(
                            r.Z,
                            { style: [C.buttonContainer, D ? C.compactButtonContainer : void 0] },
                            o.createElement(
                                i.ZP,
                                {
                                    borderColor: "transparent",
                                    color: "gray900",
                                    disabled: !n?.deepsearchArgs?.mode || n?.deepsearchArgs?.mode === k,
                                    onClick: () => {
                                        w("", A[0].value);
                                    },
                                    size: "small",
                                    style: C.resetToDefaultButton,
                                },
                                o.createElement(t.ZP, null, p),
                            ),
                        ),
                    );
                };
        },
        928831: (e, a, n) => {
            n.d(a, { w: () => f });
            var o = n(202784),
                d = n(400752),
                r = n(67369),
                t = n(323265),
                l = n(420182),
                i = n(443781),
                s = n(952793),
                c = n(125363),
                u = n(389071),
                b = n(962379),
                m = n(988290),
                h = n(448781);
            const p = "rweb.grokInputAdvancedSettings",
                f = () => {
                    const [e, a] = o.useState(!1),
                        n = (0, d.Dv)(l.lZ),
                        f = (0, c.v9)((e) => (0, u.JU)(e)),
                        { advancedSettings: g, filterKey: D } = f,
                        { isGrokDrawer: w } = (0, m.ZP)(),
                        k = (0, c.I0)(),
                        y = (() => {
                            const e = (0, c.oR)(),
                                a = (0, u.F9)(e.getState()),
                                { layout: n } = (0, b.Z)();
                            return o.useMemo(() => (n && n?.mode_buttons.filter((e) => (e.supported_models || []).includes(a))) || [], [n, a]);
                        })(),
                        v = (() => {
                            const { userClaims: e } = (0, i.QZ)(),
                                a = e.isAnyPremiumSubscriber();
                            let n = "free_status";
                            return e.hasSubscription("premium_plus") ? (n = "premium_plus_status") : a && (n = "premium_status"), n;
                        })(),
                        M = (() => {
                            const e = (0, c.v9)((e) => (0, u.JU)(e)),
                                { advancedSettings: a } = e;
                            return o.useMemo(() => {
                                const e = { Research: {}, Reasoning: {}, ImageEdit: { enabledOnClickBehavior: "FileInput" } };
                                return a?.deepsearchArgs?.mode === h.z_ && (e.Research.label = h.p9), e;
                            }, [a]);
                        })(),
                        [A, C] = o.useState(""),
                        S = (0, s.hC)("responsive_web_grok_enable_file_attachment_with_deepsearch"),
                        E = (0, s.hC)("responsive_web_grok_enable_file_attachment_with_think"),
                        I = (0, s.hC)("responsive_web_grok_enable_deepersearch"),
                        _ = o.useCallback(
                            (e) => {
                                k((0, u.X4)(e));
                            },
                            [k],
                        ),
                        P = o.useCallback(
                            (e) => {
                                k((0, u.F0)(e));
                            },
                            [k],
                        ),
                        x = o.useCallback(() => {
                            if (g) {
                                const e = { ...g };
                                delete e.deepsearchArgs, P(e);
                            } else P(null);
                        }, [g, P]),
                        G = o.useCallback(() => {
                            P({ ...g, deepsearchArgs: { mode: h.z_ } });
                        }, [g, P]);
                    o.useEffect(() => {
                        n.get(p).then((e) => {
                            e && n.set(p, null);
                        });
                    }, [n, P, I]);
                    const N = o.useCallback(
                            (e) => {
                                k((0, u.ni)(null === e ? null : e));
                            },
                            [k],
                        ),
                        R = o.useCallback(() => {
                            N(null);
                        }, [N]),
                        T = o.useCallback(() => {
                            N("Research");
                        }, [N]),
                        Z = o.useCallback(() => {
                            N("Reasoning");
                        }, [N]),
                        B = o.useCallback(() => {
                            N("ImageEdit");
                        }, [N]),
                        L = o.useCallback(
                            (e) => {
                                N(e);
                            },
                            [N],
                        ),
                        F = (0, r.Mv)(),
                        O = !D,
                        H = !!D,
                        W = "Research" === D,
                        z = "Reasoning" === D,
                        K = "ImageEdit" === D,
                        J = "CreateImage" === D,
                        X = (0, r.yu)(),
                        U = X && t.ZP.isWebView(),
                        V = F || !!w,
                        $ = f.focused,
                        j = (W && !S) || (z && !E);
                    return (
                        o.useEffect(() => {
                            A && ("Research" !== A || W ? ("Reasoning" !== A || z ? "ImageEdit" !== A || K || B() : Z()) : T(), C(""));
                        }, [y, v, R, K, z, W, A, T, B, Z]),
                        { grokInput: f, setFocused: _, isResearchEnabled: W, isReasoningEnabled: z, isImageEditEnabled: K, isCreateImageEnabled: J, isDefault: O, isInputFocused: $, hasSelectedFilterKey: H, isInputMobileSize: X, isInputMobile: U, isInputCompact: V, grokModeButtons: y, grokModeButtonStatusKey: v, filterKey: D, isFileInputDisabled: j, setAdvancedSettings: P, setDeepsearchAdvancedSettings: x, setDeepersearchAdvancedSettings: G, advancedSettings: g, grokModeButtonOverrides: M, selectDeepsearchFilterKey: T, selectReasoningFilterKey: Z, selectImageEditFilterKey: B, clearFilterKey: R, setPendingModeButtonFilterKey: C, setFilterKey: L, hasValue: e, setHasValue: a }
                    );
                };
        },
        988290: (e, a, n) => {
            n.d(a, { BQ: () => t, ZP: () => l });
            var o = n(202784);
            const d = { scrollable: void 0, isCompactLayout: !1, isEditingEnabled: !0, isShowButtons: !0, isShowCarousel: !0, isPagedScroll: !0, isGrokShare: !1, isGrokDrawer: !1 },
                r = o.createContext(d);
            function t({ children: e, isCompactLayout: a, isEditingEnabled: n, isGrokDrawer: d, isGrokShare: t, isPagedScroll: l, isShowButtons: i, isShowCarousel: s, scrollable: c }) {
                return o.createElement(r.Provider, { value: { scrollable: c, isCompactLayout: a, isShowButtons: i, isEditingEnabled: n, isShowCarousel: s, isPagedScroll: l, isGrokShare: t, isGrokDrawer: d } }, e);
            }
            function l() {
                return o.useContext(r);
            }
        },
        357606: (e, a, n) => {
            n.r(a), n.d(a, { default: () => oe });
            var o = n(807896),
                d = n(202784),
                r = n(325686),
                t = n(107267),
                l = n(523561),
                i = n(292627),
                s = n(365023),
                c = n(461756),
                u = n(292484),
                b = n(528840),
                m = n(293115),
                h = n(125363),
                p = n(456228),
                f = n(551864),
                g = n(537392),
                D = n(78882);
            var w = n(530732),
                k = n(786998),
                y = n(392237),
                v = n(457566),
                M = n(725405),
                A = n(550293),
                C = n(511582);
            const S = { header: "GrokDrawerHeader", headerHighlighted: "GrokDrawerHeaderHighlighted", root: "GrokDrawer" };
            var E = n(731708),
                I = n(111677),
                _ = n.n(I),
                P = n(952793),
                x = n(389071),
                G = n(189953);
            function N({ children: e, size: a, weight: n }) {
                return d.createElement(r.Z, { style: R.container }, d.createElement(E.ZP, { size: a, style: R.label, weight: n || "normal" }, d.createElement("span", null, e)));
            }
            const R = y.default.create((e) => ({ container: { position: "relative", width: "fit-content", animationDuration: "0.3s", opacity: 1, animationTimingFunction: "linear", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, label: { color: e.colors.transparent, backgroundColor: e.colors.gray600, backgroundImage: `linear-gradient(to right, ${e.colors.gray600} 0%, ${e.colors.gray900} 20%, ${e.colors.gray500} 40%, ${e.colors.gray600} 100%)`, opacity: 1, display: "inline-block", backgroundClip: "text", animationDuration: "0.7s", backgroundRepeat: "no-repeat", animationIterationCount: "infinite", animationTimingFunction: "linear", animationKeyframes: [{ "0%": { backgroundPositionX: "-2em" }, "100%": { backgroundPositionX: "7em" } }] } })),
                T = _().h5860a68,
                Z = _().ed93de0c,
                B = _().d1d92e40;
            function L() {
                const e = (0, P.hC)("responsive_web_grok_analyze_animation"),
                    a = (0, h.v9)(x.Es),
                    n = (0, x.f)({ conversationKey: a }),
                    o = -1 !== (0, h.v9)(n.selectPromptSource)?.indexOf("post_analysis"),
                    t = (0, h.v9)(n.selectStatus),
                    l = t === G.Q_.TYPING || t === G.Q_.WAITING;
                return d.createElement(r.Z, { style: F.titleTextRoot }, o && e ? (l ? d.createElement(N, { size: "headline2", weight: "bold" }, `${Z}...`) : d.createElement(E.ZP, { size: "headline2", style: F.animation }, B)) : d.createElement(E.ZP, null, T));
            }
            const F = y.default.create((e) => ({ titleTextRoot: { paddingStart: e.spaces.space2, flexGrow: 1, flexShrink: 1 }, animation: { opacity: 1, animationDuration: "2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] } }));
            n(136728);
            var O = n(154003),
                H = n(530243),
                W = n(52735),
                z = n(487552),
                K = n(899667),
                J = n(807901);
            const X = _().a6e89af8,
                U = _().d227d19e,
                V = _().j7d0e836,
                $ = _().ica55d24,
                j = { label: $ };
            function Y({ conversationUrl: e, handleToggleVisibility: a, isExpanded: n, onClose: o }) {
                const l = (0, t.useHistory)(),
                    i = d.useCallback(() => {
                        e && (l.push(e), a());
                    }, [a, e, l]),
                    { canClearConversation: s, handleClearConversationClickWithoutNav: c } = (0, J.Z)();
                return d.createElement(r.Z, { style: Q.rightControls }, n && e && d.createElement(O.ZP, { "aria-label": X, hoverLabel: { label: X }, icon: d.createElement(H.default, { style: { height: 19, width: 19, marginBottom: 2 } }), onPress: i, type: "primaryText" }), n && s && d.createElement(O.ZP, { "aria-label": $, disabled: !s, hoverLabel: j, icon: d.createElement(W.default, { style: Q.composeIcon }), onPress: c, type: "primaryText" }), n && d.createElement(O.ZP, { "aria-label": U, hoverLabel: { label: U }, icon: d.createElement(z.default, null), onPress: a, type: "primaryText" }), !n && d.createElement(O.ZP, { "aria-label": V, hoverLabel: { label: V }, icon: d.createElement(K.default, null), onPress: a, type: "primaryText" }));
            }
            const Q = y.default.create((e) => ({ rightControls: { flexDirection: "row", alignItems: "center" }, composeIcon: { fill: "none" } }));
            function q({ conversationUrl: e }) {
                const a = d.createRef(),
                    n = (0, h.I0)(),
                    o = (0, h.v9)(p.kX) === f.j.EXPANDED,
                    t = (0, h.v9)(A.kX) === C.S.EXPANDED,
                    l = d.useCallback(() => {
                        const e = o ? f.j.COLLAPSED : f.j.EXPANDED;
                        e === f.j.EXPANDED && t && n(A.bi(C.S.COLLAPSED)), n(p.bi(e));
                    }, [o, n, t]),
                    i = d.useCallback(() => {
                        n(p.bi(f.j.CLOSED));
                    }, [n]),
                    s = (0, M.Z)();
                return d.createElement(
                    r.Z,
                    { ref: a, style: [ee.headerRoot, !o && ee.headerBorderClosed, ee.cursor], testID: S.header },
                    o
                        ? d.createElement(k.Z, { onMiddleControlClick: l, rightControl: d.createElement(Y, { conversationUrl: e, handleToggleVisibility: l, isExpanded: o, onClose: i }), style: ee.roundedAppBarCorners, title: d.createElement(r.Z, { style: ee.titleContainer }, d.createElement(v.x1, null), d.createElement(L, null)) })
                        : d.createElement(
                              w.Z,
                              {
                                  onPress: () => {
                                      s.scribe({ element: "grok-bubble", action: "click" }), l();
                                  },
                                  style: [ee.collapsedContainer, { alignItems: "center", justifyContent: "center" }],
                              },
                              d.createElement(v.x1, { style: ee.icon }),
                          ),
                );
            }
            const ee = y.default.create((e) => ({ cursor: { cursor: "pointer" }, headerRoot: { height: 55, borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge, transition: "all 0.3s ease" }, headerBorderClosed: { borderColor: e.colors.navigationBackground }, titleContainer: { height: "100%", alignItems: "center", gap: e.spaces.space4, display: "flex", flexDirection: "row", flexGrow: 1 }, collapsedContainer: { height: "100%", alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1 }, grokText: { fontSize: 8, marginTop: -4 }, icon: { width: 32, height: 32 }, roundedAppBarCorners: { borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge } })),
                ae = { page: "grok-drawer" };
            const ne = (0, l.Z)({
                loader: () =>
                    Promise.all([
                        n.e("icons.0"),
                        n.e("icons.5"),
                        n.e("icons.12"),
                        n.e("icons.20"),
                        n.e("icons.2"),
                        n.e("icons.21"),
                        n.e("icons.28"),
                        n.e("icons.10"),
                        n.e("icons.17"),
                        n.e("icons.9"),
                        n.e("icons.23"),
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("icons.22"),
                        n.e("icons.24"),
                        n.e("icons.25"),
                        n.e("icons.14"),
                        n.e("icons.13"),
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
                        n.e("icons.6"),
                        n.e("icons.3"),
                        n.e("icons.4"),
                        n.e("icons.1"),
                        n.e("icons.18"),
                        n.e("icons.8"),
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
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        n.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        n.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        n.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                        n.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
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
                        n.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-c6537f3f"),
                        n.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-1fa591c2"),
                        n.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-7290f522"),
                        n.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-bfc056f9"),
                        n.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-ed448320"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                        n.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                        n.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-8d7085c2"),
                        n.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-53f39e22"),
                        n.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5"),
                        n.e("shared~bundle.Birdwatch~bundle.News~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandl"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights~loader"),
                        n.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b75711ed"),
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
                        n.e("shared~bundle.Grok~bundle.LiveEvent~loader.JetfuelFrame~loader.TimelineFrameHandler~loader.PremiumLoaders"),
                        n.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown~loader.TexBlock"),
                        n.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown"),
                        n.e("shared~bundle.Grok~loader.Markdown"),
                        n.e("bundle.Grok-bc6ccf4c"),
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
            function oe({ width: e }) {
                const a = (0, u.cm)(),
                    [n, l] = d.useState(0),
                    w =
                        ((k = n),
                        (0, g.Zx)(({ windowHeight: e }) => {
                            const a = D.I2.find((a) => k <= Math.ceil(e * a));
                            return a ? e * Math.max(a, 0.5) : Math.min(k, Math.ceil(D.T6 * e));
                        }));
                var k;
                const y = (0, h.v9)((e) => p.kX(e)),
                    v = y === f.j.EXPANDED,
                    M = y === f.j.CLOSED;
                d.useEffect(() => {
                    M && l(0);
                }, [M]);
                const A = d.useCallback(
                        (e) => {
                            const {
                                nativeEvent: {
                                    layout: { height: a },
                                },
                            } = e;
                            l(a);
                        },
                        [l],
                    ),
                    C = d.useMemo(() => [D.ZP.allowPointer, D.ZP.main, v ? { minHeight: w, maxWidth: null } : D.ZP.collapsedSmall], [v, w]);
                return (function () {
                    const e = (0, t.useHistory)(),
                        a = e.getLastNonModalLocationPathname() ?? e.location.pathname;
                    return d.useMemo(() => (0, b.z)(a) || a.startsWith("/i/chat") || a.startsWith("/i/communitynotes") || a.startsWith("/messages") || a.startsWith("/i/radar") || a.startsWith("/i/money") || a.startsWith("/i/verified") || a.startsWith("/i/broadcasts/") || a.startsWith("/compose/articles") || a.startsWith("/i/account_analytics") || a.startsWith("/i/conferences-room") || a.startsWith("/i/premium/hiring") || a.startsWith("/i/grok") || a.endsWith("/live"), [a]);
                })() ||
                    M ||
                    !a
                    ? null
                    : d.createElement(
                          i.Z.GrokDrawer,
                          null,
                          d.createElement(s.Z, { id: "GrokDrawer" }, (a, t) => d.createElement(m.nO, { namespace: ae }, d.createElement(r.Z, (0, o.Z)({ ref: a() }, t({ style: [D.ZP.denyPointer, D.ZP.root, { width: e, height: n }, c.Z.reducedMotionEnabled && D.ZP.reducedMotion], testID: S.root })), d.createElement(r.Z, { onLayout: A, style: C }, d.createElement(q, { conversationUrl: "/i/grok" }), v && d.createElement(ne, null))))),
                      );
            }
        },
        78882: (e, a, n) => {
            n.d(a, { I2: () => t, T6: () => l, ZP: () => i });
            var o = n(392237),
                d = n(198438),
                r = n(521514);
            const t = [0.4, 0.53, 0.66, 0.8],
                l = 0.8,
                i = o.default.create((e) => ({ root: { position: "relative", alignSelf: "flex-end", marginEnd: e.spaces.space20, marginBottom: e.spaces.space12, minWidth: r.Z.dmDrawerWidth.min, maxWidth: r.Z.dmDrawerWidth.max, transition: `all ${d.s}ms ease` }, main: { position: "absolute", backgroundColor: e.colors.navigationBackground, borderRadius: e.borderRadii.xLarge, overflow: "hidden", boxShadow: e.boxShadows.medium, flex: 1, width: "100%", maxHeight: 100 * l + "vh" }, hidden: { display: "none" }, contentContainer: { flex: 1, height: "unset", overflow: "auto", minHeight: "unset", maxHeight: "unset" }, drawerHeaderRadius: { borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge }, reducedMotion: { transition: "none" }, collapsedSmall: { maxWidth: 55, alignSelf: "flex-end", borderColor: e.colors.gray400, borderWidth: e.spaces.space1, backgroundColor: e.colors.appBarBackground, backdropFilter: "blur(12px)" }, denyPointer: { pointerEvents: "none" }, allowPointer: { pointerEvents: "auto" } }));
        },
        807901: (e, a, n) => {
            n.d(a, { Z: () => f });
            n(543673), n(240753), n(128399), n(136728);
            var o = n(202784),
                d = n(107267),
                r = n(111677),
                t = n.n(r),
                l = n(774426),
                i = n(725516),
                s = n(125363),
                c = n(189953),
                u = n(928831),
                b = n(623494),
                m = n(654917);
            const h = t().f794af9a,
                p = t().eccf9fea;
            function f() {
                const e = (0, s.I0)(),
                    a = (0, m.uf)(),
                    n = (0, d.useHistory)(),
                    r = (0, s.v9)(a.selectCanClearConversation),
                    { access: t, changeMode: f, mode: g } = (0, m.ZP)(),
                    { clearFilterKey: D } = (0, u.w)(),
                    w = !1 !== t,
                    k = (0, i.z)(),
                    y = (0, d.useLocation)(),
                    v = o.useCallback(() => {
                        const o = new URLSearchParams(y.search),
                            d = o.get("analysisEntityId"),
                            t = o.get("conversation");
                        (d || t) && r
                            ? (n.goBack(),
                              setTimeout(() => {
                                  e(a.clearConversation());
                              }, 500))
                            : r
                              ? e(a.clearConversation())
                              : n.goBack();
                    }, [r, e, a, n, y.search]),
                    M = o.useCallback(() => {
                        r && (e(a.clearConversation()), n.push("/i/grok"), (0, b.ZY)(k), D());
                    }, [k, r, e, a, n, D]),
                    A = o.useCallback(() => {
                        r && (e(a.clearConversation()), (0, b.ZY)(k), D());
                    }, [k, r, e, a, D]),
                    C = o.useCallback(
                        (e) => {
                            const a = [
                                {
                                    disabled: g === c.IK.REGULAR,
                                    onClick: function () {
                                        f(c.IK.REGULAR, k);
                                    },
                                    text: p,
                                },
                                {
                                    disabled: g === c.IK.FUN,
                                    onClick: function () {
                                        f(c.IK.FUN, k);
                                    },
                                    text: h,
                                },
                            ];
                            return o.createElement(l.default, { actionItems: a, onClose: e });
                        },
                        [k, g, f],
                    );
                return { canClearConversation: r, handleBackClick: v, handleClearConversationClick: M, handleClearConversationClickWithoutNav: A, isEligible: w, renderActionsMenu: C };
            }
        },
        654917: (e, a, n) => {
            n.d(a, { ZP: () => p, eX: () => m, uf: () => h });
            var o = n(202784),
                d = n(107267),
                r = n(323265),
                t = n(791632),
                l = n(443781),
                i = n(952793),
                s = n(125363),
                c = n(389071),
                u = n(63538),
                b = n(623494);
            function m() {
                const e = (0, d.useHistory)(),
                    a = (0, s.v9)(c.Es);
                return (0, t.HD)(e) ? (0, t.tT)(e) : a;
            }
            function h() {
                const e = m(),
                    a = (0, s.I0)(),
                    n = (0, s.v9)((a) => (0, c.YJ)(a, e));
                return (0, s.v9)(n.selectIsInitialized) || a((0, c.Ki)(e)), n;
            }
            function p() {
                const { userClaims: e } = (0, l.QZ)(),
                    a = m(),
                    n = h(),
                    d = (0, s.v9)(n.selectMessageIds),
                    t = (0, s.I0)(),
                    p = (0, s.v9)(n.selectFetchConversationIdStatus),
                    f = (0, s.v9)(n.selectFetchConversationIdError),
                    g = (0, s.v9)(n.selectMode),
                    D = (0, s.v9)(n.selectStatus),
                    w = (0, s.v9)(c.Pt),
                    k = (0, s.v9)(n.selectConversationId),
                    y = (0, s.v9)(c.pZ),
                    v = (0, s.v9)(c.uF),
                    M = (0, s.v9)(c.F9),
                    A = (0, s.v9)(n.selectAnalysisEntityId),
                    C = (0, s.v9)(n.selectUsingExperiment);
                let S = !1;
                const E = (0, i.hC)("responsive_web_grok_general_availability");
                e.isTrueAndEnabled("subscriptions_inapp_grok") ? (S = "premium") : (E || v) && (S = y.length > 0 ? "restricted" : "free");
                const I = o.useCallback(
                        async (e, a) => {
                            g !== e && (t(n.setMode(e)), r.ZP.isTwitterApp() || (await t((0, u.O)(e, M))), (0, b.RC)(a, e));
                        },
                        [t, n, g, M],
                    ),
                    _ = o.useCallback(
                        async (e, a, n) => {
                            e !== M && (t((0, c.j1)(e, a)), r.ZP.isTwitterApp() || (await t((0, u.O)(g, e))), (0, b.JO)(n, e));
                        },
                        [t, g, M],
                    );
                return { messageIds: d, access: S, status: D, grokSettingsStatus: w, conversationKey: a, conversationId: k, analysisEntityId: A, accessRestrictedReasons: y, fetchConversationIdStatus: p, fetchConversationIdError: f, mode: g, model: M, changeMode: I, changeModel: _, usingExperiment: C };
            }
        },
        962379: (e, a, n) => {
            n.d(a, { Z: () => l });
            var o = n(952793),
                d = n(87063),
                r = n(125363),
                t = n(389071);
            function l() {
                const e = (0, r.v9)((e) => (0, t.uX)(e)),
                    a = (0, o.hC)("responsive_web_grok_use_new_layout"),
                    n = (0, r.v9)((e) => (0, t.Pt)(e)),
                    l = Boolean(e?.sections.find((e) => "WIDE_TEXT_CARD" === e.section_type));
                return { enabled: a, layout: e, loading: !n || "none" === n || n === d.Z.LOADING, isGrok3LayoutEnabled: l };
            }
        },
        623494: (e, a, n) => {
            n.d(a, { DE: () => h, G$: () => l, HO: () => S, HR: () => P, JO: () => g, Jm: () => A, NH: () => x, RC: () => f, S7: () => _, UV: () => N, Uk: () => v, YI: () => c, YW: () => I, ZY: () => p, az: () => i, c3: () => t, dP: () => w, dd: () => m, eS: () => M, eV: () => C, hf: () => D, hq: () => s, kl: () => y, mm: () => b, op: () => k, pv: () => r, qQ: () => T, u1: () => E, y6: () => u, zC: () => G, zX: () => R });
            var o = n(163889);
            function d() {
                return `online:${window.navigator.onLine}|effectiveType:${window.navigator.connection?.effectiveType ?? "unknown"}`;
            }
            function r(e, a) {
                Z(e)({ element: "api-add-response", action: "start", data: { event_info: JSON.stringify(a) } });
            }
            function t(e, a) {
                Z(e)({ element: "api-add-response-regenerate", action: "start", data: { event_info: JSON.stringify(a) } });
            }
            function l(e, a) {
                Z(e)({ element: "selected-side-by-side", action: "click", data: { event_info: JSON.stringify(a) } });
            }
            function i(e, a, n) {
                Z(e)({ element: "client-home-log", action: a, data: { event_info: JSON.stringify(n) } });
            }
            function s(e, a) {
                Z(e)({ element: "deepsearch-premature-stream-close-log", action: "error", data: { event_info: JSON.stringify({ errorMessage: a.errorMessage }), duration_ms: a.durationMs } });
            }
            function c(e, a) {
                Z(e)({ element: "deepsearch-premature-manual-stream-stop", action: "click", data: { event_info: JSON.stringify(a.messageTagCounts), duration_ms: a.durationMs } });
            }
            function u(e, a) {
                Z(e)({ element: "deepsearch-duration", action: "complete", data: { duration_ms: a } });
            }
            function b(e, a, n) {
                Z(e)({ element: "api-add-response-retry", action: "start", data: { event_info: JSON.stringify({ numRetriesExecuted: a, error: n }) } });
            }
            function m(e, a) {
                Z(e)({ element: "api-add-response-edit", action: "start", data: { event_info: JSON.stringify(a) } });
            }
            function h(e) {
                Z(e)({ element: "abort", action: "click" });
            }
            function p(e) {
                Z(e)({ element: "clear-conversation", action: "click" });
            }
            function f(e, a) {
                Z(e)({ element: "grok_mode", action: "change", data: { event_info: a } });
            }
            function g(e, a) {
                Z(e)({ element: "grok_model", action: "change", data: { event_info: a } });
            }
            function D(e, a) {
                Z(e)({ element: "tweet-carousel", action: "change", data: { event_info: a.toString() } });
            }
            function w(e, a) {
                Z(e)({ element: "file-attachment", action: "add", data: { event_info: a } });
            }
            function k(e, a) {
                Z(e)({ element: "file-attachment", action: "fail", data: { event_info: a } });
            }
            function y(e, a, n) {
                Z(e)({ element: "api-add-response", action: "error", data: { event_info: `${a.message}\n${a.stack}\n${d()}` } }), (0, o.Hj)(a, { level: "warning", extra: n });
            }
            function v(e, a) {
                Z(e)({ element: "api-add-response", action: "fail", data: { event_info: `${a}\n${d()}` } });
            }
            function M(e, a) {
                Z(e)({ element: "response-chunk-read", action: "timer_elapsed", data: { event_info: a ? "first_chunk" : void 0 } });
            }
            function A(e) {
                Z(e)({ element: "file-upload", action: "success" });
            }
            function C(e, a) {
                Z(e)({ element: "file-upload", action: "fail", data: { event_info: a } });
            }
            function S(e, a) {
                Z(e)({ element: "grok_post_analysis_button", action: "click", data: { event_source: a ? "post_details" : "timeline" } });
            }
            function E(e, a, n) {
                Z(e)({ element: "grok-post-image-annotation", action: "start", data: { event_source: a ? "post_details" : "timeline", event_info: n ? JSON.stringify({ mediaId: n }) : void 0 } });
            }
            function I(e, a) {
                Z(e)({ element: "grok-drawer-open", action: "success", data: { event_source: a } });
            }
            function _(e, a) {
                Z(e)({ element: "grok-card-attachment", action: "show", data: { event_info: JSON.stringify({ cardType: a.cardType, variant: a.variant }) } });
            }
            function P(e, a, n) {
                Z(e)({ element: "grok-card-attachment-follow-up", action: "send", data: { event_info: JSON.stringify({ cardType: a.cardType, variant: a.variant, followUpText: n }) } });
            }
            function x(e) {
                Z(e)({ element: "open-grok-memory-drawer", action: "start", data: {} });
            }
            function G(e, a) {
                Z(e)({ element: "grok-memory-detail", action: "click", data: { event_info: a } });
            }
            function N(e, a) {
                Z(e)({ element: "grok-memory-forget", action: "click", data: { event_info: a } });
            }
            function R(e, a, n) {
                Z(e)({ element: "grok-memory-forget", action: "error", data: { event_info: JSON.stringify({ conversationId: a, error: n }) } });
            }
            function T(e, a) {
                Z(e)({ element: "grok-memory-detail", action: "click", data: { event_info: a } });
            }
            const Z = (e) => (a) => {
                e.scribe({ ...a, data: { url: window.location.href, ...a.data } });
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GrokDrawer-6ac0f1a5.46de79da.js.map

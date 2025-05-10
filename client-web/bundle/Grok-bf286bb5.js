"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-bf286bb5"],
    {
        186794: (e, t, n) => {
            n.d(t, { Z: () => A });
            n(136728);
            var a = n(202784),
                o = n(325686),
                r = n(154003),
                l = n(392237),
                s = n(492244),
                i = n(664345),
                c = n(517747),
                d = n(952793),
                u = n(725516),
                p = n(928831),
                m = n(764326),
                b = n(448781),
                g = n(214997),
                h = n(731708),
                y = n(451566),
                f = n(674132),
                C = n.n(f),
                E = n(988290);
            const k = C().ge1cefc4,
                w = C().e9b6d404,
                I = C().g7b1c574,
                v = [
                    { label: "Web Search", helpText: "Enable web search", field: "webSearch" },
                    { label: "X Search", helpText: "Enable X search", field: "xSearch" },
                    { label: "X Media Search", helpText: "Enable X media search", field: "xMediaSearch" },
                    { label: "Trends Search", helpText: "Enable trends search", field: "trendsSearch" },
                ],
                Z = l.default.create((e) => ({ container: { flex: 1 }, scrollView: { flex: 1 }, contentContainerScrollView: { display: "flex", flexDirection: "column", gap: e.spaces.space12, paddingHorizontal: e.spaces.space24 }, compactContentContainerScrollView: { gap: e.spaces.space8, paddingVertical: e.spaces.space16 }, title: { fontSize: e.fontSizes.headline2 }, subtitle: { color: e.colors.gray700 }, section: { marginTop: e.spaces.space8, gap: e.spaces.space12 }, toolToggleContainer: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }, toolToggleTextContainer: { display: "flex", flexDirection: "column" }, toolToggleHeader: { fontSize: e.fontSizes.subtext1 }, toolToggleSubheader: { fontSize: e.fontSizes.subtext1, color: e.colors.gray700 }, buttonContainer: { display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-end", padding: e.spaces.space24 }, compactButtonContainer: { justifyContent: "center" }, resetToDefaultButton: {} })),
                S = () => {
                    const { isCompactLayout: e, isGrokDrawer: t } = (0, E.ZP)(),
                        { advancedSettings: n, setAdvancedSettings: l } = (0, p.w)(),
                        s = (0, u.z)(),
                        i = e && !t,
                        c = a.useCallback(
                            (e) => {
                                if (null === e || Object.keys(e).length <= 0)
                                    if (n) {
                                        const e = { ...n };
                                        delete e.toolOverrides, l(e);
                                    } else l(null);
                                else {
                                    const t = { ...(n || {}), toolOverrides: e };
                                    l(t);
                                }
                            },
                            [l, n],
                        ),
                        d = a.useCallback(
                            (e, t) => {
                                const a = n?.toolOverrides ? { ...n?.toolOverrides } : {};
                                s.scribe({ action: "toggle", component: `grok-advanced-settings-tool-toggle-${e.field}`, element: t.toString() }), t ? delete a[e.field] : (a[e.field] = !1), c(a);
                            },
                            [n, s, c],
                        );
                    return a.createElement(
                        o.Z,
                        { style: Z.container },
                        a.createElement(
                            g.Z,
                            { contentContainerStyle: [Z.contentContainerScrollView, i ? Z.compactContentContainerScrollView : void 0], style: Z.scrollView },
                            a.createElement(h.ZP, { style: Z.title, weight: "bold" }, k),
                            a.createElement(h.ZP, { style: Z.subtitle }, w),
                            a.createElement(
                                o.Z,
                                { style: Z.section },
                                v.map((e) =>
                                    a.createElement(
                                        o.Z,
                                        { key: e.label, style: Z.toolToggleContainer },
                                        a.createElement(o.Z, { style: Z.toolToggleTextContainer }, a.createElement(h.ZP, { style: Z.toolToggleHeader }, e.label), a.createElement(h.ZP, { style: Z.toolToggleSubheader }, e.helpText)),
                                        a.createElement(y.Z, {
                                            onValueChange: (t) => {
                                                d(e, t);
                                            },
                                            value: !n?.toolOverrides || void 0 === n.toolOverrides[e.field] || n.toolOverrides[e.field],
                                        }),
                                    ),
                                ),
                            ),
                        ),
                        a.createElement(
                            o.Z,
                            { style: [Z.buttonContainer, i ? Z.compactButtonContainer : void 0] },
                            a.createElement(
                                r.ZP,
                                {
                                    borderColor: "transparent",
                                    color: "gray900",
                                    disabled: !n?.toolOverrides,
                                    onClick: () => {
                                        c(null);
                                    },
                                    size: "small",
                                    style: Z.resetToDefaultButton,
                                },
                                a.createElement(h.ZP, null, I),
                            ),
                        ),
                    );
                };
            var x = n(461756),
                _ = n(292627),
                B = n(745153),
                D = n(743618),
                P = n(950822),
                T = n(530732),
                z = n(894966),
                M = n(837020),
                R = n(58399);
            const F = C().h15dce2e,
                L = ({ analytics: e, isCompact: t, menuItems: n, onClose: l, selectedMenuItem: s, setSelectedMenuItem: i }) =>
                    t
                        ? a.createElement(
                              o.Z,
                              { style: O.compactContentLayout },
                              s
                                  ? a.createElement(
                                        a.Fragment,
                                        null,
                                        a.createElement(
                                            o.Z,
                                            { style: O.compactHeaderContainer },
                                            a.createElement(r.ZP, {
                                                borderColor: "transparent",
                                                icon: a.createElement(z.default, { style: O.backButtonIcon }),
                                                onClick: () => {
                                                    i(null);
                                                },
                                                size: "small",
                                                style: O.backButton,
                                            }),
                                            a.createElement(r.ZP, { borderColor: "transparent", icon: a.createElement(M.default, { style: O.closeButtonIcon }), onClick: l, size: "small", style: O.closeButton }),
                                        ),
                                        s.content,
                                    )
                                  : a.createElement(a.Fragment, null, a.createElement(o.Z, { style: O.compactHeaderContainer }, a.createElement(h.ZP, { style: O.title, weight: "bold" }, F), a.createElement(r.ZP, { borderColor: "transparent", icon: a.createElement(M.default, { style: O.closeButtonIcon }), onClick: l, size: "small", style: O.closeButton })), a.createElement(W, { analytics: e, isCompact: t, menuItems: n, selectedMenuItem: s, setSelectedMenuItem: i })),
                          )
                        : a.createElement(o.Z, { style: O.contentLayout }, a.createElement(o.Z, { style: O.menuWrapper }, a.createElement(o.Z, { style: O.headerContainer }, a.createElement(h.ZP, { style: O.title, weight: "bold" }, F)), a.createElement(W, { analytics: e, isCompact: t, menuItems: n, selectedMenuItem: s, setSelectedMenuItem: i })), a.createElement(o.Z, { style: O.contentWrapper }, a.createElement(o.Z, { style: O.closeButtonContainer }, a.createElement(r.ZP, { borderColor: "transparent", icon: a.createElement(M.default, { style: O.closeButtonIcon }), onClick: l, size: "small", style: O.closeButton })), s?.content)),
                W = ({ analytics: e, isCompact: t, menuItems: n, selectedMenuItem: r, setSelectedMenuItem: l }) =>
                    a.createElement(
                        o.Z,
                        { style: O.menu },
                        n.map((n) => {
                            const s = n.menuLabel === r?.menuLabel;
                            return a.createElement(
                                T.Z,
                                {
                                    interactiveStyles: O.interactiveMenuItem,
                                    key: n.menuLabel,
                                    onClick: () => {
                                        e.scribe({ action: "click", component: "grok-input-advanced-setting-menu", element: n.menuLabel }), l(n);
                                    },
                                },
                                ({ isHovered: e }) => a.createElement(o.Z, { style: [O.menuItem, e ? O.hoveredMenuItem : void 0] }, a.createElement(o.Z, { style: O.menuItemContent }, n.menuIcon, a.createElement(o.Z, { style: O.menuItemLabel }, a.createElement(h.ZP, null, n.menuLabel), n.hasCustomSettings && a.createElement(o.Z, { style: O.menuIndicator })), a.createElement(R.default, { style: O.menuItemChevron })), s && !t && a.createElement(o.Z, { style: O.menuItemSelectedBar })),
                            );
                        }),
                    ),
                O = l.default.create((e) => ({
                    backgroundRootBlur: { boxShadow: "light" === e.paletteName ? e.boxShadows.small : "0 0 5px rgba(80,80,80,0.2), 0 1px 4px 1px rgba(80,80,80,0.25)" },
                    backgroundBlur: { backdropFilter: "blur(2px)" },
                    wrapper: { display: "flex", justifyContent: "center", alignItems: "center" },
                    mask: { ...l.default.absoluteFillObject, position: "fixed", transitionProperty: "background-color", transitionTimingFunction: "ease" },
                    maskWithBg: { backgroundColor: e.colors.maskColor },
                    maskTransparent: { backgroundColor: e.colors.transparent },
                    animateOpen: { transitionDuration: "250ms" },
                    animateClose: { transitionDuration: "200ms" },
                    visible: { transform: [{ translateY: "0%" }], opacity: 1 },
                    hidden: { transform: [{ translateY: "5%" }], opacity: 0 },
                    root: { backgroundColor: e.colors.gray0, width: "90vw", minWidth: 750, maxWidth: 1e3, height: "60vh", maxHeight: 600, minHeight: 400, transitionProperty: "transform, opacity", transitionTimingFunction: "ease", borderWidth: 1, borderStyle: "solid", borderColor: e.colors.gray300, borderRadius: e.spaces.space24 },
                    compactRoot: { width: "100vw", minWidth: "unset", maxWidth: "unset", height: "100vh", minHeight: "unset", maxHeight: "unset", borderWidth: 0, borderRadius: 0 },
                    headerContainer: { padding: e.spaces.space20, paddingTop: e.spaces.space24 },
                    compactHeaderContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: e.spaces.space20, marginBottom: e.spaces.space16, marginVertical: e.spaces.space24 },
                    title: { fontSize: e.fontSizes.headline1 },
                    closeButtonContainer: { padding: e.spaces.space24, paddingBottom: e.spaces.space8, display: "flex", alignItems: "flex-end", width: "100%" },
                    closeButton: { borderRadius: e.borderRadii.xLarge, width: "max-content" },
                    closeButtonIcon: { width: e.spaces.space24, height: e.spaces.space24 },
                    menu: { display: "flex", flexDirection: "column", height: "100%", width: "100%" },
                    menuItem: { paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space16, position: "relative", cursor: "pointer", transition: "background-color 0.2s ease", backgroundColor: e.colors.gray0 },
                    hoveredMenuItem: { backgroundColor: e.colors.gray50 },
                    interactiveMenuItem: { backgroundColor: "transparent" },
                    menuItemContent: { display: "flex", flexDirection: "row", flex: 1, alignItems: "center", gap: e.spaces.space8 },
                    menuItemLabel: { flexShrink: 1, flexGrow: 1, display: "flex", flexDirection: "row", gap: e.spaces.space8, alignItems: "center", overflow: "ellipsis" },
                    menuIndicator: { width: e.spaces.space8, height: e.spaces.space8, borderRadius: e.spaces.space8, backgroundColor: e.colors.primary },
                    menuItemChevron: { width: e.spaces.space16, height: e.spaces.space16 },
                    menuItemSelectedBar: { position: "absolute", width: 2, right: 0, top: 0, bottom: 0, height: "100%", backgroundColor: e.colors.primary, opacity: 1, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] },
                    contentLayout: { height: "100%", width: "100%", display: "flex", flexDirection: "row" },
                    menuWrapper: { height: "100%", width: "30%", borderStyle: "solid", borderEndWidth: 1, borderColor: e.colors.gray200 },
                    contentWrapper: { display: "flex", flex: 1, height: "100%" },
                    compactContentLayout: { marginTop: e.spaces.space8 },
                    backButton: { borderRadius: e.borderRadii.xLarge, width: "max-content" },
                    backButtonIcon: { width: e.spaces.space24, height: e.spaces.space24 },
                })),
                H = ({ menuItems: e, onClose: t }) => {
                    const { isCompactLayout: n, isGrokDrawer: r } = (0, E.ZP)(),
                        l = n && !r,
                        s = (0, u.z)(),
                        [i, c] = a.useState(!1),
                        [d, p] = a.useState(l ? null : e[0]),
                        m = a.useRef(!0),
                        b = a.useRef(null),
                        g = a.useCallback(
                            (e) => {
                                !1 === i && e.target instanceof window.HTMLElement && e.target === b.current && t();
                            },
                            [i, t],
                        ),
                        h = a.useCallback((e) => {
                            e.stopPropagation();
                        }, []),
                        y = a.useCallback(() => {
                            c(!1), x.Z.reducedMotionEnabled && t();
                        }, [c, t]),
                        f = a.useCallback(() => {
                            y();
                        }, [y]);
                    a.useEffect(() => {
                        window.requestAnimationFrame(() => {
                            m.current && c(!0);
                        });
                        const e = (e) => {
                            const { altKey: t, ctrlKey: n, key: a, metaKey: o } = e;
                            !(t || n || o) && "Escape" === a && y();
                        };
                        return (
                            document.addEventListener("keydown", e),
                            () => {
                                (m.current = !1), document.removeEventListener("keydown", e);
                            }
                        );
                    }, []);
                    const C = i ? O.visible : O.hidden,
                        k = i ? O.maskWithBg : O.maskTransparent,
                        w = i ? O.animateOpen : O.animateClose,
                        I = x.Z.reducedMotionEnabled ? null : w;
                    return a.createElement(_.Z.Modal, null, a.createElement(B.Z, null, a.createElement(D.Z, null, a.createElement(o.Z, { onClick: f, style: [O.wrapper, O.mask, k, I, O.backgroundBlur] }, (0, P.Z)("div", { role: "dialog", onTransitionEnd: g, ref: b, onClick: h, style: [O.root, l ? O.compactRoot : void 0, O.backgroundRootBlur, C, I], children: a.createElement(L, { analytics: s, isCompact: l, menuItems: e, onClose: y, selectedMenuItem: d, setSelectedMenuItem: p }) })))));
                },
                K = l.default.create((e) => ({ buttonContainer: { position: "relative", borderColor: e.colors.gray300, borderWidth: 1, borderRadius: e.borderRadii.infinite }, fadeIn: { ...m.DP }, disabledButtonInteractiveStyle: { backgroundColor: "transparent" }, button: { ...m.il }, compactButton: { ...m.u$ }, disabledButton: { borderColor: "light" === e.paletteName ? e.colors.gray100 : e.colors.gray200, color: e.colors.gray600, backgroundColor: "transparent" }, icon: { ...m.Qs }, indicator: { position: "absolute", top: 0, end: 0, width: e.spaces.space8, height: e.spaces.space8, borderRadius: e.spaces.space8, backgroundColor: e.colors.primary } })),
                A = ({ disabled: e, fadeIn: t, isGrokDrawer: n, isInputCompact: l }) => {
                    const m = (0, u.z)(),
                        { advancedSettings: g } = (0, p.w)(),
                        [h, y] = a.useState(!1),
                        f = (0, d.hC)("responsive_web_grok_enable_input_advanced_settings"),
                        C = (0, d.hC)("responsive_web_grok_enable_deepersearch"),
                        E = (0, d.hC)("responsive_web_grok_enable_model_tool_toggle"),
                        k = a.useMemo(() => {
                            const e = [];
                            if ((E && e.push({ menuLabel: "Tools", menuIcon: a.createElement(s.default, null), content: a.createElement(S, null), hasCustomSettings: !!g && !!g.toolOverrides }), C)) {
                                let t = !1;
                                g && g.deepsearchArgs && g.deepsearchArgs.mode === b.z_ && (t = !0), e.push({ menuLabel: "DeepSearch", menuIcon: a.createElement(i.default, null), content: a.createElement(b.ZP, null), hasCustomSettings: t });
                            }
                            return e;
                        }, [C, E, g]);
                    if (!f || k.length <= 0) return null;
                    const w = k.some((e) => e.hasCustomSettings);
                    return a.createElement(
                        o.Z,
                        null,
                        a.createElement(
                            o.Z,
                            { style: [K.buttonContainer, t ? K.fadeIn : null] },
                            a.createElement(r.ZP, {
                                backgroundColor: "transparent",
                                borderColor: "transparent",
                                color: "gray900",
                                disabled: e,
                                icon: a.createElement(c.default, { style: K.icon }),
                                onClick: (e) => {
                                    m.scribe({ action: "click", component: "grok-input", element: "AdvancedSettings" }), y(!h);
                                },
                                size: "smallCompact",
                                style: [K.button, l ? K.compactButton : null],
                            }),
                            w && a.createElement(o.Z, { style: K.indicator }),
                        ),
                        k.length > 0 && h && a.createElement(H, { isGrokDrawer: n, menuItems: k, onClose: () => y(!1) }),
                    );
                };
        },
        448781: (e, t, n) => {
            n.d(t, { XD: () => f, ZP: () => S, eK: () => w, p9: () => k, pB: () => E, yF: () => C, z_: () => I });
            var a = n(202784),
                o = n(214997),
                r = n(325686),
                l = n(731708),
                s = n(782947),
                i = n(154003),
                c = n(392237),
                d = n(674132),
                u = n.n(d),
                p = n(725516),
                m = n(988290),
                b = n(928831);
            const g = u().g7b1c574,
                h = u().f388a7ec,
                y = u().ab1eb384,
                f = u().f388a7ec,
                C = u().i330e54c,
                E = "default",
                k = u().fdcce108,
                w = u().ac64b674,
                I = "deeper",
                v = [
                    { label: f, description: C, value: E },
                    { label: k, description: w, value: I },
                ],
                Z = c.default.create((e) => ({ container: { flex: 1 }, scrollView: { flex: 1 }, contentContainerScrollView: { display: "flex", flexDirection: "column", gap: e.spaces.space12, paddingHorizontal: e.spaces.space24 }, compactContentContainerScrollView: { gap: e.spaces.space8, paddingVertical: e.spaces.space16 }, title: { fontSize: e.fontSizes.headline2 }, subtitle: { color: e.colors.gray700 }, section: { marginTop: e.spaces.space8, gap: e.spaces.space12 }, buttonContainer: { display: "flex", width: "100%", flexDirection: "row", justifyContent: "flex-end", padding: e.spaces.space24 }, compactButtonContainer: { justifyContent: "center" }, resetToDefaultButton: {} })),
                S = () => {
                    const { isCompactLayout: e, isGrokDrawer: t } = (0, m.ZP)(),
                        { advancedSettings: n, setDeepersearchAdvancedSettings: c, setDeepsearchAdvancedSettings: d } = (0, b.w)(),
                        u = (0, p.z)(),
                        f = e && !t,
                        C = a.useCallback(
                            (e, t) => {
                                u.scribe({ action: "change", component: "grok-deepsearch-mode", element: t }), t === E ? d() : c();
                            },
                            [u, d, c],
                        );
                    return a.createElement(
                        r.Z,
                        { style: Z.container },
                        a.createElement(o.Z, { contentContainerStyle: [Z.contentContainerScrollView, f ? Z.compactContentContainerScrollView : void 0], style: Z.scrollView }, a.createElement(l.ZP, { style: Z.title, weight: "bold" }, h), a.createElement(l.ZP, { style: Z.subtitle }, y), a.createElement(r.Z, { style: Z.section }, a.createElement(s.Z, { horizontal: !f, name: "", onChange: C, options: v, value: n?.deepsearchArgs?.mode || v[0].value }))),
                        a.createElement(
                            r.Z,
                            { style: [Z.buttonContainer, f ? Z.compactButtonContainer : void 0] },
                            a.createElement(
                                i.ZP,
                                {
                                    borderColor: "transparent",
                                    color: "gray900",
                                    disabled: !n?.deepsearchArgs?.mode || n?.deepsearchArgs?.mode === E,
                                    onClick: () => {
                                        C("", v[0].value);
                                    },
                                    size: "small",
                                    style: Z.resetToDefaultButton,
                                },
                                a.createElement(l.ZP, null, g),
                            ),
                        ),
                    );
                };
        },
        3144: (e, t, n) => {
            n.d(t, { z: () => h });
            var a = n(202784),
                o = n(325686),
                r = n(731708),
                l = n(154003),
                s = n(392237),
                i = n(674132),
                c = n.n(i),
                d = n(386594),
                u = n(837020),
                p = n(125363),
                m = n(654917),
                b = n(492010);
            const g = c().ff9dc268,
                h = () => {
                    const e = (0, m.uf)(),
                        t = (0, p.I0)(),
                        n = (0, p.v9)(e.selectEditingMessage),
                        s = a.useCallback(() => {
                            t(e.clearEditing());
                        }, [t, e]),
                        { showInputEdit: i } = (0, b.u)();
                    return i && n ? a.createElement(o.Z, { style: y.container }, a.createElement(o.Z, { style: y.leftSide }, a.createElement(d.default, { style: y.pencilIcon }), a.createElement(r.ZP, { numberOfLines: 1, size: "subtext2", weight: "normal" }, g)), a.createElement(l.ZP, { backgroundColor: "transparent", borderColor: "transparent", color: "gray700", icon: a.createElement(u.default, { style: y.closeIcon }), onPress: s, size: "small", style: y.closeButton })) : null;
                },
                y = s.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space20, paddingTop: e.spaces.space8, flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", marginBottom: `calc(-1 * ${e.spaces.space4})` }, leftSide: { flexDirection: "row", gap: e.spaces.space8 }, pencilIcon: { fill: "none", width: e.spaces.space16, height: e.spaces.space16 }, closeIcon: { height: e.spaces.space16, width: e.spaces.space16 }, closeButton: { display: "flex", alignItems: "center", justifyItems: "center" } }));
        },
        276411: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                o = n(325686),
                r = n(815858),
                l = n(731708),
                s = n(530732),
                i = n(392237),
                c = n(837020),
                d = n(796064),
                u = n(928831);
            function p() {
                const { clearFilterKey: e, isCreateImageEnabled: t, isImageEditEnabled: n } = (0, u.w)(),
                    i = t || n,
                    p = a.useCallback(() => (t ? d.y3 : n ? (0, d.zF)({ ttc_grok_preset: "" }) : ""), [t, n]),
                    m = a.useCallback(
                        (t) => {
                            t.preventDefault(), e();
                        },
                        [e],
                    );
                return a.createElement(o.Z, { style: [b.container, i && b.showContainer] }, a.createElement(r.Z, { show: i }, a.createElement(o.Z, { style: b.content }, a.createElement(l.ZP, { style: b.label }, p()), a.createElement(s.Z, { onClick: m, withoutInteractiveStyles: !0 }, a.createElement(c.default, { style: b.closeIcon })))));
            }
            const m = i.default.theme.spacesPx.space64,
                b = i.default.create((e) => ({ container: { position: "absolute", top: 0, start: 0, width: "100%" }, showContainer: { animationDuration: "0.2s", animationKeyframes: [{ "0%": { top: 0 }, "100%": { top: -m / 2 - e.spacesPx.space2 } }], animationTimingFunction: "ease", animationFillMode: "both" }, content: { width: "100%", height: m, backgroundColor: e.colors.gray0, borderTopStartRadius: e.spaces.space24, borderTopEndRadius: e.spaces.space24, display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space8 }, label: { fontSize: e.fontSizes.subtext1, color: e.colors.gray700 }, closeIcon: { color: e.colors.gray700 } }));
        },
        454875: (e, t, n) => {
            n.d(t, { Z: () => w });
            var a = n(202784),
                o = n(325686),
                r = n(449161),
                l = n(721266),
                s = n(731708),
                i = n(392237),
                c = n(674132),
                d = n.n(c),
                u = n(449404),
                p = n(473026),
                m = n(323265),
                b = n(952793),
                g = n(725405),
                h = n(620988),
                y = n(623494),
                f = n(928831),
                C = n(764326);
            const E = d().add55c98,
                k = { label: E };
            function w({ disabled: e, fadeIn: t, focused: n, isInputCompact: i, label: c, useButtonsForExpandedInput: d }) {
                const { onFileSelected: C } = (0, h.ZP)(),
                    w = (0, g.Z)(),
                    v = (0, b.hC)("responsive_web_grok_pdf_upload_enabled"),
                    S = (0, b.hC)("responsive_web_grok_text_upload_enabled"),
                    x = (0, h.x9)(),
                    { clearFilterKey: _, isImageEditEnabled: B } = (0, f.w)(),
                    D = a.useCallback(
                        (e) => {
                            [...e].forEach((e) => C(e)), (0, y.dP)(w, "button"), B && _();
                        },
                        [C, w, _, B],
                    ),
                    P = (0, b.hC)("responsive_web_grok_file_upload_enabled"),
                    T = (0, b.hC)("responsive_web_grok_webview_file_upload_enabled");
                return !P || (m.ZP.isWebView() && !T) ? null : d ? a.createElement(o.Z, { style: Z.buttonContainer }, a.createElement(r.Z, { accept: x.join(","), "aria-label": E, backgroundColor: "transparent", borderColor: "transparent", color: "gray900", disabled: e, hoverLabel: k, multiple: !0, onChange: D, onPressIn: I, size: "smallCompact", style: [Z.button, i ? Z.compactButton : null, t ? Z.fadeIn : null] }, a.createElement(u.default, { style: Z.icon }), c && a.createElement(a.Fragment, null, a.createElement(l.Z, { size: "space4" }), a.createElement(s.ZP, { color: "gray900", size: "subtext2", weight: "medium" }, c)))) : a.createElement(o.Z, { style: Z.buttonContainer }, a.createElement(r.Z, { accept: x.join(","), "aria-label": E, color: "gray900", hoverLabel: k, icon: v || S ? a.createElement(u.default, { style: Z.icon }) : a.createElement(p.default, { style: Z.icon }), multiple: !0, onChange: D, onPressIn: I, size: "smallCompact", style: Z.deprecatedButton }));
            }
            const I = (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                v = 0.5,
                Z = i.default.create((e) => ({ buttonContainer: { borderColor: e.colors.gray300, borderWidth: 1, borderRadius: e.borderRadii.infinite }, button: { ...C.il, padding: C.il.padding - v, paddingStart: C.il.paddingStart - v, paddingEnd: C.il.paddingEnd - v }, compactButton: { ...C.u$, padding: C.u$.padding - v, paddingStart: C.u$.paddingStart - v, paddingEnd: C.u$.paddingEnd - v }, fadeIn: { ...C.DP }, deprecatedButton: { marginStart: e.spaces.space4 }, icon: { ...C.Qs } }));
        },
        928831: (e, t, n) => {
            n.d(t, { w: () => h });
            var a = n(202784),
                o = n(400752),
                r = n(67369),
                l = n(323265),
                s = n(420182),
                i = n(443781),
                c = n(952793),
                d = n(125363),
                u = n(389071),
                p = n(962379),
                m = n(988290),
                b = n(448781);
            const g = "rweb.grokInputAdvancedSettings",
                h = () => {
                    const [e, t] = a.useState(!1),
                        n = (0, o.Dv)(s.lZ),
                        h = (0, d.v9)((e) => (0, u.JU)(e)),
                        { advancedSettings: y, filterKey: f } = h,
                        { isGrokDrawer: C } = (0, m.ZP)(),
                        E = (0, d.I0)(),
                        k = (() => {
                            const e = (0, d.oR)(),
                                t = (0, u.F9)(e.getState()),
                                { layout: n } = (0, p.Z)();
                            return a.useMemo(() => (n && n?.mode_buttons.filter((e) => (e.supported_models || []).includes(t))) || [], [n, t]);
                        })(),
                        w = (() => {
                            const { userClaims: e } = (0, i.QZ)(),
                                t = e.isAnyPremiumSubscriber();
                            let n = "free_status";
                            return e.hasSubscription("premium_plus") ? (n = "premium_plus_status") : t && (n = "premium_status"), n;
                        })(),
                        I = (() => {
                            const e = (0, d.v9)((e) => (0, u.JU)(e)),
                                { advancedSettings: t } = e;
                            return a.useMemo(() => {
                                const e = { Research: {}, Reasoning: {}, ImageEdit: { enabledOnClickBehavior: "FileInput" } };
                                return t?.deepsearchArgs?.mode === b.z_ && (e.Research.label = b.p9), e;
                            }, [t]);
                        })(),
                        [v, Z] = a.useState(""),
                        S = (0, c.hC)("responsive_web_grok_enable_file_attachment_with_deepsearch"),
                        x = (0, c.hC)("responsive_web_grok_enable_file_attachment_with_think"),
                        _ = (0, c.hC)("responsive_web_grok_enable_deepersearch"),
                        B = a.useCallback(
                            (e) => {
                                E((0, u.X4)(e));
                            },
                            [E],
                        ),
                        D = a.useCallback(
                            (e) => {
                                E((0, u.F0)(e));
                            },
                            [E],
                        ),
                        P = a.useCallback(() => {
                            if (y) {
                                const e = { ...y };
                                delete e.deepsearchArgs, D(e);
                            } else D(null);
                        }, [y, D]),
                        T = a.useCallback(() => {
                            D({ ...y, deepsearchArgs: { mode: b.z_ } });
                        }, [y, D]);
                    a.useEffect(() => {
                        n.get(g).then((e) => {
                            e && n.set(g, null);
                        });
                    }, [n, D, _]);
                    const z = a.useCallback(
                            (e) => {
                                E((0, u.ni)(null === e ? null : e));
                            },
                            [E],
                        ),
                        M = a.useCallback(() => {
                            z(null);
                        }, [z]),
                        R = a.useCallback(() => {
                            z("Research");
                        }, [z]),
                        F = a.useCallback(() => {
                            z("Reasoning");
                        }, [z]),
                        L = a.useCallback(() => {
                            z("ImageEdit");
                        }, [z]),
                        W = a.useCallback(
                            (e) => {
                                z(e);
                            },
                            [z],
                        ),
                        O = (0, r.Mv)(),
                        H = !f,
                        K = !!f,
                        A = "Research" === f,
                        V = "Reasoning" === f,
                        j = "ImageEdit" === f,
                        G = "CreateImage" === f,
                        N = (0, r.yu)(),
                        $ = N && l.ZP.isWebView(),
                        X = O || !!C,
                        Q = h.focused,
                        Y = (A && !S) || (V && !x);
                    return (
                        a.useEffect(() => {
                            v && ("Research" !== v || A ? ("Reasoning" !== v || V ? "ImageEdit" !== v || j || L() : F()) : R(), Z(""));
                        }, [k, w, M, j, V, A, v, R, L, F]),
                        { grokInput: h, setFocused: B, isResearchEnabled: A, isReasoningEnabled: V, isImageEditEnabled: j, isCreateImageEnabled: G, isDefault: H, isInputFocused: Q, hasSelectedFilterKey: K, isInputMobileSize: N, isInputMobile: $, isInputCompact: X, grokModeButtons: k, grokModeButtonStatusKey: w, filterKey: f, isFileInputDisabled: Y, setAdvancedSettings: D, setDeepsearchAdvancedSettings: P, setDeepersearchAdvancedSettings: T, advancedSettings: y, grokModeButtonOverrides: I, selectDeepsearchFilterKey: R, selectReasoningFilterKey: F, selectImageEditFilterKey: L, clearFilterKey: M, setPendingModeButtonFilterKey: Z, setFilterKey: W, hasValue: e, setHasValue: t }
                    );
                };
        },
        795388: (e, t, n) => {
            n.d(t, { Z: () => O });
            n(136728);
            var a = n(202784),
                o = n(858440),
                r = n(325686),
                l = n(107267),
                s = n(392237),
                i = n(443781),
                c = n(952793),
                d = n(725516),
                u = n(620988),
                p = n(928831),
                m = n(764326),
                b = n(807896),
                g = n(721266),
                h = n(731708),
                y = n(530732),
                f = n(449161),
                C = n(154003),
                E = n(674132),
                k = n.n(E),
                w = n(623494),
                I = n(20716),
                v = n(246277),
                Z = n(448781),
                S = n(878264),
                x = n(797553),
                _ = n(143670),
                B = n(487552);
            function D({ menuItems: e, onDismiss: t }) {
                const [n, o] = a.useState(!1);
                return a.createElement(
                    r.Z,
                    { style: P.buttonDropdownContainer },
                    a.createElement(C.ZP, { backgroundColor: "transparent", borderColor: "transparent", icon: a.createElement(B.default, { style: P.buttonDropdownIcon }), onClick: () => o(!0), size: "smallCompact", style: P.buttonDropdownIconContainer }),
                    n &&
                        a.createElement(
                            x.default,
                            {
                                isFixed: !0,
                                onDismiss: () => {
                                    o(!1), t && t();
                                },
                                preferredHorizontalOrientation: "right",
                                preferredVerticalOrientation: "up",
                            },
                            e.map((e, t) => a.createElement(_.Z, { actionSubText: e.subText, actionText: e.text, isSelected: e.isSelected, key: `menuItem-${t}`, onClick: e.onClick, selectable: !0 })),
                        ),
                );
            }
            const P = s.default.create((e) => ({ buttonDropdownContainer: { position: "relative" }, buttonDropdownIconContainer: { display: "flex", borderRadius: e.borderRadii.xLarge, transition: "background-color 0.2s ease", opacity: 1, animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], padding: m.il.padding, paddingStart: m.il.paddingStart, paddingEnd: m.il.paddingEnd }, buttonDropdownIcon: { ...m.Qs, color: e.colors.gray900 } }));
            var T = n(744610);
            function z({ text: e }) {
                return e ? a.createElement(T.Z.View, { style: M.tooltipContainer }, a.createElement(r.Z, { style: M.tooltipWrapper }, a.createElement(r.Z, { style: M.triangle }), a.createElement(r.Z, { style: M.tooltip }, a.createElement(h.ZP, { numberOfLines: 1, style: M.tooltipText }, e)))) : null;
            }
            const M = s.default.create((e) => ({ tooltipContainer: { position: "absolute", top: "110%", start: "50%", transform: "translateX(-50%)", alignItems: "center", zIndex: 10, opacity: 1, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, tooltipWrapper: { flexDirection: "column", alignItems: "center" }, triangle: { width: 0, height: 0, borderStartWidth: 5, borderStartColor: "transparent", borderEndWidth: 5, borderEndColor: "transparent", borderBottomWidth: 5, borderBottomColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray400 }, tooltip: { backgroundColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray400, padding: e.spaces.space8, borderRadius: 4, maxWidth: 900 }, tooltipText: { fontSize: e.fontSizes.subtext2 } })),
                R = { Research: k().e9fcdd0c, Reasoning: k().fc4e8aba, ImageEdit: k().e4ae6abe };
            function F({ analytics: e, button: t, buttonOverrides: n, disabled: l, isInputCompact: s, isToggled: i, onButtonEnter: d, onButtonLeave: m, onDisabledClick: E, onEnabledClick: k, onHomeScreen: x, statusKey: _ }) {
                const { advancedSettings: B, grokModeButtons: D, selectImageEditFilterKey: P, setAdvancedSettings: T, setFilterKey: z } = (0, p.w)(),
                    M = (0, o.Z)(),
                    { clearSelectedFile: F, onFileSelected: O, selectedFiles: H } = (0, u.ZP)(),
                    { markAsClicked: K } = (0, S.M)(t.filter_key ?? ""),
                    [A, V] = a.useState(!1),
                    [j, G] = a.useState(!1),
                    N = n[t.filter_key || ""],
                    $ = N?.status || t[_],
                    X = R[t.filter_key || ""],
                    Q = M.width < 350 || (s && D && D.length >= 3),
                    Y = "Disabled" === $,
                    J = "Hidden" === $;
                let U = t.icon_name ? (0, I.wG)(t.icon_name) : null;
                "IconLightbulbGrokStrokeOff" === t.icon_name && i && (U = (0, I.wG)("IconLightbulbGrokStrokeOn") || null);
                const q = a.useCallback(
                        (t) => {
                            if (t.length <= 0) return;
                            const n = Object.keys(H);
                            n.length > 0 &&
                                n.forEach((e) => {
                                    F(e);
                                });
                            const a = t[0];
                            O(a).then(() => {
                                P();
                            }),
                                (0, w.dP)(e, "button");
                        },
                        [O, e, P, H, F],
                    ),
                    ee = () => {
                        d(), G(!0), s || i || !x || V(!0);
                    },
                    te = () => {
                        m(), G(!1), V(!1);
                    },
                    ne = (0, c.hC)("responsive_web_grok_enable_deepersearch"),
                    ae = a.useMemo(
                        () =>
                            "Research" === t.filter_key && !i && ne
                                ? [
                                      {
                                          text: Z.XD,
                                          subText: Z.yF,
                                          onClick: () => {
                                              T({ ...B, deepsearchArgs: void 0 }), z(t.filter_key || null), V(!1), e.scribe({ action: "change", component: "grok-deepsearch-mode", element: Z.pB });
                                          },
                                          isSelected: !B || !B.deepsearchArgs || B.deepsearchArgs.mode === Z.pB,
                                      },
                                      {
                                          text: Z.p9,
                                          subText: Z.eK,
                                          onClick: () => {
                                              T({ ...B, deepsearchArgs: { mode: Z.z_ } }), z(t.filter_key || null), V(!1), e.scribe({ action: "change", component: "grok-deepsearch-mode", element: Z.z_ });
                                          },
                                          isSelected: !!B && B.deepsearchArgs && B.deepsearchArgs.mode === Z.z_,
                                      },
                                  ]
                                : [],
                        [B, T, t, i, z, ne, e],
                    );
                if (J) return null;
                const oe = {
                        borderColor: "transparent",
                        backgroundColor: "transparent",
                        color: i ? "blue600" : "gray900",
                        disabled: l,
                        onClick: (e) => {
                            V(!1), k(), K(), e.preventDefault();
                        },
                        size: "smallCompact",
                        style: [W.button, s ? W.compactButton : null, i ? W.buttonSelected : null],
                    },
                    re = a.createElement(r.Z, { style: W.buttonContent }, U && a.createElement(U, { style: W.icon }), (!Q || i) && t.label && a.createElement(a.Fragment, null, a.createElement(g.Z, { size: "space8" }), a.createElement(h.ZP, { size: "subtext2", style: W.appText, weight: "medium" }, N.label || t.label)));
                return Y
                    ? a.createElement(L, { handleMouseEnter: void 0, handleMouseLeave: void 0, isHoveringButton: !1, isToggled: !1, showTooltip: !1, style: W.disabledButtonContainer }, a.createElement(y.Z, { disabled: l, key: t.label, onClick: E, style: [W.button, s ? W.compactButton : null, W.disabledButton], withoutInteractiveStyles: !0 }, re))
                    : i || "FileInput" !== N.enabledOnClickBehavior
                      ? a.createElement(L, { dropdownMenuItems: ae, handleMouseEnter: ee, handleMouseLeave: te, hideTooltip: () => V(!1), isHoveringButton: j, isInputCompact: s, isToggled: i, showTooltip: A, tooltipText: X }, a.createElement(C.ZP, oe, re))
                      : a.createElement(
                            L,
                            { handleMouseEnter: ee, handleMouseLeave: te, isHoveringButton: j, isToggled: i, showTooltip: A, tooltipText: X },
                            a.createElement(
                                f.Z,
                                (0, b.Z)({}, oe, {
                                    accept: v.$.join(","),
                                    multiple: !1,
                                    onChange: (e) => {
                                        q(e);
                                    },
                                    onClick: () => {
                                        e.scribe({ action: "click", component: "grok-input", element: t.filter_key });
                                    },
                                }),
                                re,
                            ),
                        );
            }
            const L = ({ children: e, dropdownMenuItems: t, handleMouseEnter: n, handleMouseLeave: o, hideTooltip: l, isHoveringButton: s, isInputCompact: i, isToggled: c, showTooltip: d, style: u, tooltipText: p }) => a.createElement(r.Z, { onMouseEnter: n, onMouseLeave: o, style: [W.buttonContainer, c ? W.buttonContainerSelected : null, s ? W.hoveredButtonContainer : null, u] }, e, !i && t && t.length > 0 && a.createElement(D, { menuItems: t, onDismiss: l }), d && a.createElement(z, { text: p })),
                W = s.default.create((e) => ({ buttonContainer: { position: "relative", borderColor: e.colors.gray300, borderWidth: 1, borderRadius: 25, flexDirection: "row", alignItems: "center", transition: "background-color 0.2s ease, width 0.2s ease", backgroundColor: "transparent" }, hoveredButtonContainer: { backgroundColor: "light" === s.default.theme.paletteName ? s.default.theme.colors.gray50 : s.default.theme.colors.gray100 }, buttonContainerSelected: { borderColor: "rgba(29, 155, 240, 0.2)" }, disabledButtonContainer: { borderColor: e.colors.gray300 }, button: { ...m.il, position: "relative", height: "100%" }, compactButton: { ...m.u$ }, buttonContent: { display: "flex", flex: 1, flexDirection: "row", alignItems: "center" }, disabledButton: { color: e.colors.gray400, borderColor: "transparent", backgroundColor: "transparent" }, buttonSelected: { backgroundColor: "rgba(29, 155, 240, 0.2)" }, icon: { ...m.Qs }, appText: { color: "inherit", lineHeight: e.fontSizes.subtext2 } }));
            function O({ disabled: e, fadeIn: t, onClick: n, onHomeScreen: s = !1, onShowDegradedModal: m }) {
                const { filterKey: b, grokModeButtonOverrides: g, grokModeButtonStatusKey: h, grokModeButtons: y, isInputCompact: f, isInputFocused: C, setFilterKey: E } = (0, p.w)(),
                    { userClaims: k } = (0, i.QZ)(),
                    w = (0, l.useHistory)(),
                    I = k.hasSubscription("premium_plus"),
                    { clearSelectedFile: v, selectedFiles: Z } = (0, u.ZP)(),
                    S = (0, c.hC)("responsive_web_grok_route_disabled_search_think_to_paywall"),
                    x = (0, c.hC)("responsive_web_grok_enable_file_attachment_with_deepsearch"),
                    _ = (0, c.hC)("responsive_web_grok_enable_file_attachment_with_think"),
                    B = (0, o.Z)(),
                    D = f || B.width < 650,
                    P = (0, d.z)(),
                    [, T] = a.useState(0),
                    [z, M] = a.useState(!0),
                    R = a.useRef(null),
                    L = () => {
                        T((e) => {
                            const t = e + 1;
                            return 1 === t && (M(!1), R.current && (clearTimeout(R.current), (R.current = null))), t;
                        });
                    },
                    W = () => {
                        T((e) => {
                            const t = Math.max(e - 1, 0);
                            return (
                                0 === t &&
                                    (R.current = setTimeout(() => {
                                        M(!0);
                                    }, 800)),
                                t
                            );
                        });
                    },
                    O = a.useCallback(() => {
                        Object.keys(Z).forEach((e) => {
                            v(e);
                        });
                    }, [Z, v]),
                    K = a.useCallback(
                        (e) => {
                            const t = g[e.filter_key || ""];
                            t && t.disabledReasonMessage ? m(t.disabledReasonMessage) : I || !S ? m() : w.push("/i/premium_sign_up?referring_page=grok_3");
                        },
                        [I, S, w, m, g],
                    ),
                    A = a.useCallback(
                        (e) => {
                            P.scribe({ action: "click", component: "grok-input", element: e.filter_key }), (("Research" === e.filter_key && !x) || ("Reasoning" === e.filter_key && !_)) && O(), n && n(), E(b === e.filter_key ? null : e.filter_key || null);
                        },
                        [P, x, _, O, n, E, b],
                    );
                return a.createElement(
                    r.Z,
                    { style: [H.container, f ? H.compactContainer : null, t ? H.fadeIn : null] },
                    y.map((t) => {
                        const n = b === t.filter_key;
                        return a.createElement(F, { analytics: P, button: t, buttonOverrides: g, disabled: e, enableDelay: z, isInputCompact: D, isInputFocused: C, isToggled: n, key: t.label, onButtonEnter: L, onButtonLeave: W, onDisabledClick: () => K(t), onEnabledClick: () => A(t), onHomeScreen: s, statusKey: h });
                    }),
                );
            }
            const H = s.default.create((e) => ({ fadeIn: { ...m.DP }, container: { flexDirection: "row", gap: e.spaces.space8, flex: 1, overflowX: "auto", scrollbarWidth: "none", "::-webkit-scrollbar": { display: "none" } }, compactContainer: { gap: e.spaces.space4 } }));
        },
        40247: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(202784),
                o = n(744610),
                r = n(325686),
                l = n(67369),
                s = n(731708);
            function i({ arrowXStart: e, onAnimationEnd: t, subtitle: n, title: i }) {
                const d = a.useRef(new o.Z.Value(0)).current,
                    u = a.useRef(new o.Z.Value(10)).current,
                    p = (0, l.yu)();
                return (
                    a.useEffect(() => {
                        o.Z.timing(d, { toValue: 1, duration: 500, useNativeDriver: !1 }).start(),
                            o.Z.timing(u, { toValue: 0, duration: 500, useNativeDriver: !1 }).start(() => {
                                setTimeout(() => {
                                    o.Z.timing(d, { toValue: 0, duration: 500, useNativeDriver: !1 }).start(() => {
                                        t && t();
                                    });
                                }, 1e3);
                            });
                    }, [d, u, t]),
                    a.createElement(o.Z.View, { style: [c.banner, { opacity: d, transform: [{ translateY: u }] }, p ? c.bannerNarrow : null] }, a.createElement(r.Z, { style: c.bannerContent }, !!i && a.createElement(s.ZP, { color: "gray0", size: "body", weight: "medium" }, i), !!n && a.createElement(s.ZP, { color: "gray700", size: "body", weight: "normal" }, n)), e && a.createElement(r.Z, { style: [c.triangle, { start: e }] }))
                );
            }
            const c = n(392237).default.create((e) => ({ banner: { position: "absolute", display: "flex", flexDirection: "column", width: "max-content", maxWidth: "100%", bottom: "100%", start: 0 }, bannerNarrow: { width: "100%" }, triangle: { width: 0, height: 0, top: -1, backgroundColor: "transparent", borderStyle: "solid", borderStartWidth: e.spaces.space8, borderEndWidth: e.spaces.space8, borderBottomWidth: e.spaces.space8, borderStartColor: "transparent", borderEndColor: "transparent", borderBottomColor: e.colors.brandColor, transform: "rotate(180deg)" }, bannerContent: { padding: e.spaces.space16, backgroundColor: e.colors.brandColor, fontSize: e.fontSizes.subtext2, borderRadius: e.spaces.space16 } }));
        },
        454595: (e, t, n) => {
            n.d(t, { t: () => v });
            var a = n(202784),
                o = n(325686),
                r = n(143670),
                l = n(731708),
                s = n(154003),
                i = n(797553),
                c = n(525271),
                d = n(392237),
                u = n(674132),
                p = n.n(u),
                m = n(293723),
                b = n(41065),
                g = n(487552),
                h = n(725405),
                y = n(125363),
                f = n(327597),
                C = n(480243),
                E = n(988290),
                k = n(928831),
                w = n(764326);
            const I = p().e8ade5e2,
                v = ({ conversationKey: e, disabled: t, fadeIn: n, focused: d, inputAtBottom: u, inputAtHome: p }) => {
                    const w = (0, y.I0)(),
                        v = (0, h.Z)(),
                        { clearFilterKey: S, isInputCompact: x } = (0, k.w)(),
                        { isGrokDrawer: _ } = (0, E.ZP)(),
                        [B, D] = a.useState(!1),
                        [P, T] = a.useState(!1),
                        { currentPersonalityId: z, getPersonality: M, setGrokPersonality: R, userPersonalities: F } = (0, C.W)(),
                        L = () => {
                            T(!1), D((e) => !e);
                        },
                        W = () => {
                            D(!1), T((e) => !e);
                        },
                        O = a.useCallback(() => {
                            u || (x && !_) ? W() : L();
                        }, [u, _, x]),
                        H = a.useMemo(
                            () => (t) => {
                                if (t) {
                                    S();
                                    const n = M(t),
                                        a = n?.personality.initial_user_prompt;
                                    n && a && p && w((0, f.u)({ analytics: v, conversationKey: e })({ text: a, attachments: [], returnCitations: !1, isGrokDrawer: !1, onStart: () => {}, personalityId: t }));
                                }
                                R(t), O();
                            },
                            [v, e, w, M, O, p, S, R],
                        ),
                        K = a.useMemo(() => M(z), [z, M]),
                        A = a.useMemo(() => {
                            const e = F.map((e, t) => {
                                const { personality: n, personality_id: s } = e;
                                return a.createElement(r.Z, { actionText: a.createElement(o.Z, { style: Z.menuItem }, a.createElement(o.Z, { style: Z.nameContainer }, a.createElement(l.ZP, null, n.name)), a.createElement(m.default, { style: K?.personality_id === s ? Z.checkIcon : Z.invisible })), key: s, onClick: () => H(s) });
                            });
                            return [a.createElement(r.Z, { actionText: a.createElement(o.Z, { style: Z.menuItem }, a.createElement(l.ZP, null, "Default Grok"), a.createElement(m.default, { style: void 0 === K ? Z.checkIcon : Z.invisible })), key: "0", onClick: () => H() }), ...e];
                        }, [K, H, F]),
                        V = K?.personality;
                    return a.createElement(o.Z, { style: [Z.container, x ? { alignItems: "flex-end" } : { alignItems: "flex-start" }] }, a.createElement(s.ZP, { borderColor: V ? "blue600" : "transparent", color: V ? "blue600" : "gray900", disabled: t, onClick: O, size: "smallCompact", style: [Z.button, d ? Z.buttonOverFocusedInput : null, n ? Z.fadeIn : null] }, a.createElement(o.Z, { style: Z.buttonContent }, a.createElement(b.default, { style: Z.icon }), a.createElement(l.ZP, { numberOfLines: 1, size: "subtext2", weight: "medium" }, K?.personality?.name ?? "Personalities"), a.createElement(g.default, { style: Z.icon }))), a.createElement(o.Z, { style: [Z.dropdownContainer, u ? { top: -8 } : { top: 36 }] }, B && a.createElement(i.default, { onDismiss: L, preferredHorizontalOrientation: "right" }, a.createElement(o.Z, { style: Z.menuItemContainer }, A))), P && a.createElement(c.Z, { align: "right", buttonType: "primaryText", onDismissed: W, title: I }, A));
                },
                Z = d.default.create((e) => ({ container: { position: "relative", flex: 1 }, button: { ...w.il, borderWidth: e.spaces.space2, backgroundColor: "light" === e.paletteName ? e.colors.gray50 : e.colors.gray100, maxWidth: "100%" }, fadeIn: { ...w.DP }, buttonOverFocusedInput: { backgroundColor: "light" === e.paletteName ? e.colors.gray100 : e.colors.gray200 }, dropdownContainer: { position: "absolute" }, menuItemContainer: { maxHeight: "35vh", overflowY: "auto", alignItems: "stretch" }, icon: { height: 14, width: 14, flexShrink: 0 }, menuItem: { flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space12 }, nameContainer: { flexGrow: 1, flexShrink: 1, whiteSpace: "normal", wordWrap: "break-word" }, checkIcon: { opacity: 0.8, flexShrink: 0 }, invisible: { opacity: 0 }, buttonContent: { flexGrow: 1, maxWidth: "100%", display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 } }));
        },
        690672: (e, t, n) => {
            n.d(t, { Z: () => f });
            var a = n(202784),
                o = n(325686),
                r = n(154003),
                l = n(392237),
                s = n(674132),
                i = n.n(s),
                c = n(776933),
                d = n(730616),
                u = n(123588),
                p = n(764326);
            const m = i().b5df32b0,
                b = { label: m },
                g = i().cfd2f35e,
                h = { label: g },
                y = { label: i().fad48eea };
            function f({ fadeIn: e, isInProgress: t, isInputCompact: n, isLoading: l, isSendEnabled: s, onSend: i, onStop: p, useMagicWandIcon: f }) {
                return t ? a.createElement(o.Z, { style: [E.buttonContainer, e ? E.fadeIn : null] }, a.createElement(r.ZP, { "aria-label": g, backgroundColor: "brandColor", borderColor: "transparent", color: "gray50", hoverLabel: h, icon: a.createElement(c.default, { style: E.icon }), onPress: p, onPressIn: C, onPressOut: p, size: "smallCompact", style: [E.button, n ? E.compactButton : null] })) : a.createElement(o.Z, { style: [E.buttonContainer, e ? E.fadeIn : null] }, a.createElement(r.ZP, { "aria-label": m, backgroundColor: "brandColor", borderColor: "transparent", color: "gray50", disabled: !s || l, hoverLabel: l ? y : b, icon: f ? a.createElement(d.default, { style: [E.icon, E.sendIcon] }) : a.createElement(u.default, { style: [E.icon, E.sendIcon] }), onPress: i, onPressIn: C, onPressOut: i, size: "smallCompact", style: [E.button, n ? E.compactButton : null] }));
            }
            const C = (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                E = l.default.create((e) => ({ buttonContainer: { position: "relative", borderRadius: 25 }, fadeIn: { ...p.DP }, button: { ...p.il }, compactButton: { ...p.u$ }, icon: { ...p.Qs }, sendIcon: { transform: "scale(1.3)" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-bf286bb5.5ac8250a.js.map

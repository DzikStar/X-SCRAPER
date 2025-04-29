"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-bf286bb5"],
    {
        186794: (e, t, n) => {
            n.d(t, { Z: () => V });
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
                v = C().g7b1c574,
                I = [
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
                                I.map((e) =>
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
                                a.createElement(h.ZP, null, v),
                            ),
                        ),
                    );
                };
            var x = n(461756),
                _ = n(292627),
                D = n(745153),
                B = n(743618),
                P = n(950822),
                M = n(530732),
                T = n(894966),
                z = n(837020),
                R = n(58399);
            const L = C().h15dce2e,
                W = ({ analytics: e, isCompact: t, menuItems: n, onClose: l, selectedMenuItem: s, setSelectedMenuItem: i }) =>
                    t
                        ? a.createElement(
                              o.Z,
                              { style: F.compactContentLayout },
                              s
                                  ? a.createElement(
                                        a.Fragment,
                                        null,
                                        a.createElement(
                                            o.Z,
                                            { style: F.compactHeaderContainer },
                                            a.createElement(r.ZP, {
                                                borderColor: "transparent",
                                                icon: a.createElement(T.default, { style: F.backButtonIcon }),
                                                onClick: () => {
                                                    i(null);
                                                },
                                                size: "small",
                                                style: F.backButton,
                                            }),
                                            a.createElement(r.ZP, { borderColor: "transparent", icon: a.createElement(z.default, { style: F.closeButtonIcon }), onClick: l, size: "small", style: F.closeButton }),
                                        ),
                                        s.content,
                                    )
                                  : a.createElement(a.Fragment, null, a.createElement(o.Z, { style: F.compactHeaderContainer }, a.createElement(h.ZP, { style: F.title, weight: "bold" }, L), a.createElement(r.ZP, { borderColor: "transparent", icon: a.createElement(z.default, { style: F.closeButtonIcon }), onClick: l, size: "small", style: F.closeButton })), a.createElement(O, { analytics: e, isCompact: t, menuItems: n, selectedMenuItem: s, setSelectedMenuItem: i })),
                          )
                        : a.createElement(o.Z, { style: F.contentLayout }, a.createElement(o.Z, { style: F.menuWrapper }, a.createElement(o.Z, { style: F.headerContainer }, a.createElement(h.ZP, { style: F.title, weight: "bold" }, L)), a.createElement(O, { analytics: e, isCompact: t, menuItems: n, selectedMenuItem: s, setSelectedMenuItem: i })), a.createElement(o.Z, { style: F.contentWrapper }, a.createElement(o.Z, { style: F.closeButtonContainer }, a.createElement(r.ZP, { borderColor: "transparent", icon: a.createElement(z.default, { style: F.closeButtonIcon }), onClick: l, size: "small", style: F.closeButton })), s?.content)),
                O = ({ analytics: e, isCompact: t, menuItems: n, selectedMenuItem: r, setSelectedMenuItem: l }) =>
                    a.createElement(
                        o.Z,
                        { style: F.menu },
                        n.map((n) => {
                            const s = n.menuLabel === r?.menuLabel;
                            return a.createElement(
                                M.Z,
                                {
                                    interactiveStyles: F.interactiveMenuItem,
                                    key: n.menuLabel,
                                    onClick: () => {
                                        e.scribe({ action: "click", component: "grok-input-advanced-setting-menu", element: n.menuLabel }), l(n);
                                    },
                                },
                                ({ isHovered: e }) => a.createElement(o.Z, { style: [F.menuItem, e ? F.hoveredMenuItem : void 0] }, a.createElement(o.Z, { style: F.menuItemContent }, n.menuIcon, a.createElement(o.Z, { style: F.menuItemLabel }, a.createElement(h.ZP, null, n.menuLabel), n.hasCustomSettings && a.createElement(o.Z, { style: F.menuIndicator })), a.createElement(R.default, { style: F.menuItemChevron })), s && !t && a.createElement(o.Z, { style: F.menuItemSelectedBar })),
                            );
                        }),
                    ),
                F = l.default.create((e) => ({
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
                    const C = i ? F.visible : F.hidden,
                        k = i ? F.maskWithBg : F.maskTransparent,
                        w = i ? F.animateOpen : F.animateClose,
                        v = x.Z.reducedMotionEnabled ? null : w;
                    return a.createElement(_.Z.Modal, null, a.createElement(D.Z, null, a.createElement(B.Z, null, a.createElement(o.Z, { onClick: f, style: [F.wrapper, F.mask, k, v, F.backgroundBlur] }, (0, P.Z)("div", { role: "dialog", onTransitionEnd: g, ref: b, onClick: h, style: [F.root, l ? F.compactRoot : void 0, F.backgroundRootBlur, C, v], children: a.createElement(W, { analytics: s, isCompact: l, menuItems: e, onClose: y, selectedMenuItem: d, setSelectedMenuItem: p }) })))));
                },
                A = l.default.create((e) => ({ buttonContainer: { position: "relative", borderColor: e.colors.gray300, borderWidth: 1, borderRadius: 25 }, fadeIn: { ...m.DP }, disabledButtonInteractiveStyle: { backgroundColor: "transparent" }, button: { ...m.il, borderStyle: "dashed", borderColor: "transparent", borderWidth: e.spaces.space2 }, disabledButton: { borderColor: "light" === e.paletteName ? e.colors.gray100 : e.colors.gray200, color: e.colors.gray600, backgroundColor: "transparent" }, icon: { ...m.Qs }, indicator: { position: "absolute", top: 0, end: 0, width: e.spaces.space8, height: e.spaces.space8, borderRadius: e.spaces.space8, backgroundColor: e.colors.primary } })),
                V = ({ disabled: e, fadeIn: t, isGrokDrawer: n }) => {
                    const l = (0, u.z)(),
                        { advancedSettings: m } = (0, p.w)(),
                        [g, h] = a.useState(!1),
                        y = (0, d.hC)("responsive_web_grok_enable_input_advanced_settings"),
                        f = (0, d.hC)("responsive_web_grok_enable_deepersearch"),
                        C = (0, d.hC)("responsive_web_grok_enable_model_tool_toggle"),
                        E = a.useMemo(() => {
                            const e = [];
                            if ((C && e.push({ menuLabel: "Tools", menuIcon: a.createElement(s.default, null), content: a.createElement(S, null), hasCustomSettings: !!m && !!m.toolOverrides }), f)) {
                                let t = !1;
                                m && m.deepsearchArgs && m.deepsearchArgs.mode === b.z_ && (t = !0), e.push({ menuLabel: "DeepSearch", menuIcon: a.createElement(i.default, null), content: a.createElement(b.ZP, null), hasCustomSettings: t });
                            }
                            return e;
                        }, [f, C, m]);
                    if (!y || E.length <= 0) return null;
                    const k = E.some((e) => e.hasCustomSettings);
                    return a.createElement(
                        o.Z,
                        null,
                        a.createElement(
                            o.Z,
                            { style: [A.buttonContainer, t ? A.fadeIn : null] },
                            a.createElement(r.ZP, {
                                backgroundColor: "transparent",
                                borderColor: "transparent",
                                color: "gray900",
                                disabled: e,
                                icon: a.createElement(c.default, { style: A.icon }),
                                onClick: () => {
                                    l.scribe({ action: "click", component: "grok-input", element: "AdvancedSettings" }), h(!g);
                                },
                                size: "smallCompact",
                                style: A.button,
                            }),
                            k && a.createElement(o.Z, { style: A.indicator }),
                        ),
                        E.length > 0 && g && a.createElement(H, { isGrokDrawer: n, menuItems: E, onClose: () => h(!1) }),
                    );
                };
        },
        448781: (e, t, n) => {
            n.d(t, { XD: () => f, ZP: () => S, eK: () => w, p9: () => k, pB: () => E, yF: () => C, z_: () => v });
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
                f = "DeepSearch",
                C = u().i330e54c,
                E = "default",
                k = "DeeperSearch",
                w = u().ac64b674,
                v = "deeper",
                I = [
                    { label: f, description: C, value: E },
                    { label: k, description: w, value: v },
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
                        a.createElement(o.Z, { contentContainerStyle: [Z.contentContainerScrollView, f ? Z.compactContentContainerScrollView : void 0], style: Z.scrollView }, a.createElement(l.ZP, { style: Z.title, weight: "bold" }, h), a.createElement(l.ZP, { style: Z.subtitle }, y), a.createElement(r.Z, { style: Z.section }, a.createElement(s.Z, { horizontal: !f, name: "", onChange: C, options: I, value: n?.deepsearchArgs?.mode || I[0].value }))),
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
                                        C("", I[0].value);
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
            function w({ disabled: e, fadeIn: t, focused: n, label: i, useButtonsForExpandedInput: c }) {
                const { onFileSelected: d } = (0, h.ZP)(),
                    C = (0, g.Z)(),
                    w = (0, b.hC)("responsive_web_grok_pdf_upload_enabled"),
                    Z = (0, b.hC)("responsive_web_grok_text_upload_enabled"),
                    S = (0, h.x9)(),
                    { clearMode: x, isImageEditEnabled: _ } = (0, f.w)(),
                    D = a.useCallback(
                        (e) => {
                            [...e].forEach((e) => d(e)), (0, y.dP)(C, "button"), _ && x();
                        },
                        [d, C, x, _],
                    ),
                    B = (0, b.hC)("responsive_web_grok_file_upload_enabled"),
                    P = (0, b.hC)("responsive_web_grok_webview_file_upload_enabled");
                return !B || (m.ZP.isWebView() && !P) ? null : c ? a.createElement(o.Z, { style: I.buttonContainer }, a.createElement(r.Z, { accept: S.join(","), "aria-label": E, backgroundColor: "transparent", borderColor: "transparent", color: "gray900", disabled: e, hoverLabel: k, multiple: !0, onChange: D, onPressIn: v, size: "smallCompact", style: [I.button, t ? I.fadeIn : null] }, a.createElement(u.default, { style: I.icon }), i && a.createElement(a.Fragment, null, a.createElement(l.Z, { size: "space4" }), a.createElement(s.ZP, { color: "gray900", size: "subtext2", weight: "medium" }, i)))) : a.createElement(o.Z, { style: I.buttonContainer }, a.createElement(r.Z, { accept: S.join(","), "aria-label": E, hoverLabel: k, icon: w || Z ? a.createElement(u.default, null) : a.createElement(p.default, null), multiple: !0, onChange: D, onPressIn: v, size: "medium", style: I.deprecatedButton, type: "primaryText" }));
            }
            const v = (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                I = i.default.create((e) => ({ buttonContainer: { borderColor: e.colors.gray300, borderWidth: 1, borderRadius: 25 }, button: { ...C.il }, fadeIn: { ...C.DP }, deprecatedButton: { marginStart: e.spaces.space4 }, icon: { ...C.Qs } }));
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
                    const e = (0, o.Dv)(s.lZ),
                        t = (0, d.v9)((e) => (0, u.JU)(e)),
                        { advancedSettings: n, selectedGrokModeButton: h } = t,
                        { isGrokDrawer: y } = (0, m.ZP)(),
                        f = (0, d.I0)(),
                        C = (() => {
                            const e = (0, d.oR)(),
                                t = (0, u.F9)(e.getState()),
                                { layout: n } = (0, p.Z)();
                            return a.useMemo(() => (n && n?.mode_buttons.filter((e) => (e.supported_models || []).includes(t))) || [], [n, t]);
                        })(),
                        E = (() => {
                            const { userClaims: e } = (0, i.QZ)(),
                                t = e.isAnyPremiumSubscriber();
                            let n = "free_status";
                            return e.hasSubscription("premium_plus") ? (n = "premium_plus_status") : t && (n = "premium_status"), n;
                        })(),
                        k = (() => {
                            const e = (0, d.v9)((e) => (0, u.JU)(e)),
                                { advancedSettings: t } = e;
                            return a.useMemo(() => {
                                const e = { Research: {}, Reasoning: {}, ImageEdit: { enabledOnClickBehavior: "FileInput" } };
                                return t?.deepsearchArgs?.mode === b.z_ && (e.Research.label = "DeeperSearch"), e;
                            }, [t]);
                        })(),
                        [w, v] = a.useState(""),
                        I = (0, c.hC)("responsive_web_grok_enable_file_attachment_with_deepsearch"),
                        Z = (0, c.hC)("responsive_web_grok_enable_file_attachment_with_think"),
                        S = (0, c.hC)("responsive_web_grok_enable_deepersearch"),
                        x = a.useCallback(
                            (e) => {
                                f((0, u.X4)(e));
                            },
                            [f],
                        ),
                        _ = a.useCallback(
                            (e) => {
                                f((0, u.F0)(e));
                            },
                            [f],
                        ),
                        D = a.useCallback(() => {
                            if (n) {
                                const e = { ...n };
                                delete e.deepsearchArgs, _(e);
                            } else _(null);
                        }, [n, _]),
                        B = a.useCallback(() => {
                            _({ ...n, deepsearchArgs: { mode: b.z_ } });
                        }, [n, _]);
                    a.useEffect(() => {
                        e.get(g).then((t) => {
                            t && e.set(g, null);
                        });
                    }, [e, _, S]);
                    const P = a.useCallback(
                            (e) => {
                                f((0, u.x1)(h?.filter_key === e?.filter_key && h?.label === e?.label ? null : e));
                            },
                            [f, h],
                        ),
                        M = a.useCallback(() => {
                            P(null);
                        }, [P]),
                        T = a.useCallback(() => {
                            const e = C.find((e) => "Research" === e.filter_key);
                            e && P(e);
                        }, [C, P]),
                        z = a.useCallback(() => {
                            const e = C.find((e) => "Reasoning" === e.filter_key);
                            e && P(e);
                        }, [C, P]),
                        R = a.useCallback(() => {
                            const e = C.find((e) => "ImageEdit" === e.filter_key);
                            e && P(e);
                        }, [C, P]),
                        L = (0, r.Mv)(),
                        W = null === h,
                        O = null !== h,
                        F = "Research" === h?.filter_key,
                        H = "Reasoning" === h?.filter_key,
                        A = "ImageEdit" === h?.filter_key,
                        V = (0, r.yu)(),
                        G = V && l.ZP.isWebView(),
                        j = L || !!y,
                        K = t.focused,
                        N = (F && !I) || (H && !Z);
                    return (
                        a.useEffect(() => {
                            C.every((e) => "Hidden" === e[E]) || C.length <= 0 ? M() : w && ("Research" !== w || F ? ("Reasoning" !== w || H ? "ImageEdit" !== w || A || R() : z()) : T(), v(""));
                        }, [C, E, M, A, H, F, w, T, R, z]),
                        { grokInput: t, selectMode: P, setFocused: x, isResearchEnabled: F, isReasoningEnabled: H, isImageEditEnabled: A, isDefault: W, isInputFocused: K, hasSelectedInputMode: O, isInputMobileSize: V, isInputMobile: G, isInputCompact: j, grokModeButtons: C, grokModeButtonStatusKey: E, selectedGrokModeButton: h, isFileInputDisabled: N, setAdvancedSettings: _, setDeepsearchAdvancedSettings: D, setDeepersearchAdvancedSettings: B, advancedSettings: n, grokModeButtonOverrides: k, selectDeepsearchMode: T, selectReasoningMode: z, selectImageEditMode: R, clearMode: M, setPendingModeButtonFilterKey: v }
                    );
                };
        },
        795388: (e, t, n) => {
            n.d(t, { Z: () => F });
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
                v = n(20716),
                I = n(246277),
                Z = n(448781),
                S = n(878264),
                x = n(797553),
                _ = n(143670),
                D = n(487552);
            function B({ menuItems: e, onDismiss: t }) {
                const [n, o] = a.useState(!1);
                return a.createElement(
                    r.Z,
                    { style: P.buttonDropdownContainer },
                    a.createElement(C.ZP, { backgroundColor: "transparent", borderColor: "transparent", icon: a.createElement(D.default, { style: P.buttonDropdownIcon }), onClick: () => o(!0), style: P.buttonDropdownIconContainer }),
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
            const P = s.default.create((e) => ({ buttonDropdownContainer: { position: "relative" }, buttonDropdownIconContainer: { display: "flex", justifyContent: "center", alignItems: "center", borderRadius: e.borderRadii.xLarge, transition: "background-color 0.2s ease", opacity: 1, animationDuration: "0.3s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, buttonDropdownIcon: { width: e.spaces.space16, height: e.spaces.space16, color: e.colors.gray900 }, compactButtonDropdownIcon: { width: e.spaces.space16, height: e.spaces.space16 } }));
            var M = n(744610);
            function T({ text: e }) {
                return e ? a.createElement(M.Z.View, { style: z.tooltipContainer }, a.createElement(r.Z, { style: z.tooltipWrapper }, a.createElement(r.Z, { style: z.triangle }), a.createElement(r.Z, { style: z.tooltip }, a.createElement(h.ZP, { numberOfLines: 1, style: z.tooltipText }, e)))) : null;
            }
            const z = s.default.create((e) => ({ tooltipContainer: { position: "absolute", top: "110%", start: "50%", transform: "translateX(-50%)", alignItems: "center", zIndex: 10, opacity: 1, animationDuration: "0.2s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }] }, tooltipWrapper: { flexDirection: "column", alignItems: "center" }, triangle: { width: 0, height: 0, borderStartWidth: 5, borderStartColor: "transparent", borderEndWidth: 5, borderEndColor: "transparent", borderBottomWidth: 5, borderBottomColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray400 }, tooltip: { backgroundColor: "light" === e.paletteName ? e.colors.gray200 : e.colors.gray400, padding: e.spaces.space8, borderRadius: 4, maxWidth: 900 }, tooltipText: { fontSize: e.fontSizes.subtext2 } })),
                R = { Research: k().e9fcdd0c, Reasoning: k().fc4e8aba, ImageEdit: k().e4ae6abe };
            function L({ analytics: e, button: t, buttonOverrides: n, disabled: o, isInputCompact: l, isInputFocused: s, isToggled: i, onButtonEnter: d, onButtonLeave: m, onDisabledClick: E, onEnabledClick: k, onHomeScreen: x, statusKey: _ }) {
                const { advancedSettings: D, selectImageEditMode: B, selectMode: P, setAdvancedSettings: M } = (0, p.w)(),
                    { clearSelectedFile: T, onFileSelected: z, selectedFiles: L } = (0, u.ZP)(),
                    { markAsClicked: F } = (0, S.M)(t.filter_key ?? ""),
                    [H, A] = a.useState(!1),
                    [V, G] = a.useState(!1),
                    j = n[t.filter_key || ""],
                    K = j?.status || t[_],
                    N = R[t.filter_key || ""],
                    X = "Disabled" === K,
                    Q = "Hidden" === K;
                let Y = t.icon_name ? (0, v.wG)(t.icon_name) : null;
                "IconLightbulbGrokStrokeOff" === t.icon_name && i && (Y = (0, v.wG)("IconLightbulbGrokStrokeOn") || null);
                const $ = a.useCallback(
                        (t) => {
                            if (t.length <= 0) return;
                            const n = Object.keys(L);
                            n.length > 0 &&
                                n.forEach((e) => {
                                    T(e);
                                });
                            const a = t[0];
                            z(a).then(() => {
                                B();
                            }),
                                (0, w.dP)(e, "button");
                        },
                        [z, e, B, L, T],
                    ),
                    J = () => {
                        d(), G(!0), l || i || !x || A(!0);
                    },
                    U = () => {
                        m(), G(!1), A(!1);
                    },
                    q = (0, c.hC)("responsive_web_grok_enable_deepersearch"),
                    ee = a.useMemo(
                        () =>
                            "Research" === t.filter_key && !i && q
                                ? [
                                      {
                                          text: Z.XD,
                                          subText: Z.yF,
                                          onClick: () => {
                                              M({ ...D, deepsearchArgs: void 0 }), P(t), A(!1), e.scribe({ action: "change", component: "grok-deepsearch-mode", element: Z.pB });
                                          },
                                          isSelected: !D || !D.deepsearchArgs || D.deepsearchArgs.mode === Z.pB,
                                      },
                                      {
                                          text: Z.p9,
                                          subText: Z.eK,
                                          onClick: () => {
                                              M({ ...D, deepsearchArgs: { mode: Z.z_ } }), P(t), A(!1), e.scribe({ action: "change", component: "grok-deepsearch-mode", element: Z.z_ });
                                          },
                                          isSelected: !!D && D.deepsearchArgs && D.deepsearchArgs.mode === Z.z_,
                                      },
                                  ]
                                : [],
                        [D, M, t, i, P, q, e],
                    );
                if (Q) return null;
                const te = {
                        borderColor: "transparent",
                        backgroundColor: "transparent",
                        color: i ? "blue600" : "gray900",
                        disabled: o,
                        onClick: () => {
                            A(!1), k(), F();
                        },
                        size: "smallCompact",
                        style: [O.button, i ? O.buttonSelected : null],
                    },
                    ne = a.createElement(r.Z, { style: O.buttonContent }, Y && a.createElement(Y, { style: O.icon }), (!l || i) && t.label && a.createElement(a.Fragment, null, a.createElement(g.Z, { size: "space8" }), a.createElement(h.ZP, { size: "subtext2", style: O.appText, weight: "medium" }, j.label || t.label)));
                return X
                    ? a.createElement(W, { handleMouseEnter: void 0, handleMouseLeave: void 0, isHoveringButton: !1, isToggled: !1, showTooltip: !1, style: O.disabledButtonContainer }, a.createElement(y.Z, { disabled: o, interactiveStyles: O.disabledButtonInteractiveStyle, key: t.label, onClick: E, style: [O.button, O.disabledButton] }, ne))
                    : i || "FileInput" !== j.enabledOnClickBehavior
                      ? a.createElement(W, { dropdownMenuItems: ee, handleMouseEnter: J, handleMouseLeave: U, hideTooltip: () => A(!1), isHoveringButton: V, isInputCompact: l, isToggled: i, showTooltip: H, tooltipText: N }, a.createElement(C.ZP, te, ne))
                      : a.createElement(
                            W,
                            { handleMouseEnter: J, handleMouseLeave: U, isHoveringButton: V, isToggled: i, showTooltip: H, tooltipText: N },
                            a.createElement(
                                f.Z,
                                (0, b.Z)({}, te, {
                                    accept: I.$.join(","),
                                    multiple: !1,
                                    onChange: (e) => {
                                        $(e);
                                    },
                                    onClick: void 0,
                                }),
                                ne,
                            ),
                        );
            }
            const W = ({ children: e, dropdownMenuItems: t, handleMouseEnter: n, handleMouseLeave: o, hideTooltip: l, isHoveringButton: s, isInputCompact: i, isToggled: c, showTooltip: d, style: u, tooltipText: p }) => a.createElement(r.Z, { onMouseEnter: n, onMouseLeave: o, style: [O.buttonContainer, c ? O.buttonContainerSelected : null, s ? O.hoveredButtonContainer : null, u] }, e, !i && t && t.length > 0 && a.createElement(B, { menuItems: t, onDismiss: l }), d && a.createElement(T, { text: p })),
                O = s.default.create((e) => ({ buttonContainer: { position: "relative", borderColor: e.colors.gray300, borderWidth: 1, borderRadius: 25, flexDirection: "row", alignItems: "center", transition: "background-color 0.2s ease, width 0.2s ease", backgroundColor: "transparent" }, hoveredButtonContainer: { backgroundColor: "light" === s.default.theme.paletteName ? s.default.theme.colors.gray50 : s.default.theme.colors.gray100 }, buttonContainerSelected: { borderColor: "rgba(29, 155, 240, 0.2)" }, disabledButtonContainer: { borderColor: e.colors.gray300 }, disabledButtonInteractiveStyle: { backgroundColor: "transparent" }, button: { ...m.il, position: "relative", height: "100%" }, buttonContent: { display: "flex", flex: 1, flexDirection: "row", alignItems: "center" }, disabledButton: { color: e.colors.gray400, borderColor: "transparent", backgroundColor: "transparent" }, buttonSelected: { backgroundColor: "rgba(29, 155, 240, 0.2)" }, icon: { ...m.Qs }, appText: { color: "inherit" } }));
            function F({ disabled: e, fadeIn: t, onClick: n, onHomeScreen: s = !1, onShowDegradedModal: m }) {
                const { grokModeButtonOverrides: b, grokModeButtonStatusKey: g, grokModeButtons: h, isInputCompact: y, isInputFocused: f, selectMode: C, selectedGrokModeButton: E } = (0, p.w)(),
                    { userClaims: k } = (0, i.QZ)(),
                    w = (0, l.useHistory)(),
                    v = k.hasSubscription("premium_plus"),
                    { clearSelectedFile: I, selectedFiles: Z } = (0, u.ZP)(),
                    S = (0, c.hC)("responsive_web_grok_route_disabled_search_think_to_paywall"),
                    x = (0, c.hC)("responsive_web_grok_enable_file_attachment_with_deepsearch"),
                    _ = (0, c.hC)("responsive_web_grok_enable_file_attachment_with_think"),
                    D = (0, o.Z)(),
                    B = y || D.width < 650,
                    P = (0, d.z)(),
                    [, M] = a.useState(0),
                    [T, z] = a.useState(!0),
                    R = a.useRef(null),
                    W = () => {
                        M((e) => {
                            const t = e + 1;
                            return 1 === t && (z(!1), R.current && (clearTimeout(R.current), (R.current = null))), t;
                        });
                    },
                    O = () => {
                        M((e) => {
                            const t = Math.max(e - 1, 0);
                            return (
                                0 === t &&
                                    (R.current = setTimeout(() => {
                                        z(!0);
                                    }, 800)),
                                t
                            );
                        });
                    },
                    F = a.useCallback(() => {
                        Object.keys(Z).forEach((e) => {
                            I(e);
                        });
                    }, [Z, I]),
                    A = a.useCallback(
                        (e) => {
                            const t = b[e.filter_key || ""];
                            t && t.disabledReasonMessage ? m(t.disabledReasonMessage) : v || !S ? m() : w.push("/i/premium_sign_up?referring_page=grok_3");
                        },
                        [v, S, w, m, b],
                    ),
                    V = a.useCallback(
                        (e) => {
                            const t = b[e.filter_key || ""];
                            P.scribe({ action: "click", component: "grok-input", element: t?.label || e.label }), (("Research" === e.filter_key && !x) || ("Reasoning" === e.filter_key && !_)) && F(), n && n(), C(e);
                        },
                        [P, x, _, F, n, C, b],
                    );
                return a.createElement(
                    r.Z,
                    { style: [H.container, t ? H.fadeIn : null, B ? H.smallerGap : null] },
                    h.map((t) => {
                        const n = E?.filter_key === t.filter_key && E?.label === t.label;
                        return a.createElement(L, { analytics: P, button: t, buttonOverrides: b, disabled: e, enableDelay: T, isInputCompact: B, isInputFocused: f, isToggled: n, key: t.label, onButtonEnter: W, onButtonLeave: O, onDisabledClick: () => A(t), onEnabledClick: () => V(t), onHomeScreen: s, statusKey: g });
                    }),
                );
            }
            const H = s.default.create((e) => ({ fadeIn: { ...m.DP }, container: { flexDirection: "row", gap: e.spaces.space12 }, smallerGap: { gap: e.spaces.space8 } }));
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
            n.d(t, { t: () => I });
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
            const v = p().e8ade5e2,
                I = ({ conversationKey: e, disabled: t, fadeIn: n, focused: d, inputAtBottom: u, inputAtHome: p }) => {
                    const w = (0, y.I0)(),
                        I = (0, h.Z)(),
                        { clearMode: S, isInputCompact: x } = (0, k.w)(),
                        { isGrokDrawer: _ } = (0, E.ZP)(),
                        [D, B] = a.useState(!1),
                        [P, M] = a.useState(!1),
                        { currentPersonalityId: T, getPersonality: z, setGrokPersonality: R, userPersonalities: L } = (0, C.W)(),
                        W = () => {
                            M(!1), B((e) => !e);
                        },
                        O = () => {
                            B(!1), M((e) => !e);
                        },
                        F = a.useCallback(() => {
                            u || (x && !_) ? O() : W();
                        }, [u, _, x]),
                        H = a.useMemo(
                            () => (t) => {
                                if (t) {
                                    S();
                                    const n = z(t),
                                        a = n?.personality.initial_user_prompt;
                                    n && a && p && w((0, f.u)({ analytics: I, conversationKey: e })({ text: a, attachments: [], returnCitations: !1, isGrokDrawer: !1, onStart: () => {}, personalityId: t }));
                                }
                                R(t), F();
                            },
                            [I, e, w, z, F, p, S, R],
                        ),
                        A = a.useMemo(() => z(T), [T, z]),
                        V = a.useMemo(() => {
                            const e = L.map((e, t) => {
                                const { personality: n, personality_id: s } = e;
                                return a.createElement(r.Z, { actionText: a.createElement(o.Z, { style: Z.menuItem }, a.createElement(o.Z, { style: Z.nameContainer }, a.createElement(l.ZP, null, n.name)), a.createElement(m.default, { style: A?.personality_id === s ? Z.checkIcon : Z.invisible })), key: s, onClick: () => H(s) });
                            });
                            return [a.createElement(r.Z, { actionText: a.createElement(o.Z, { style: Z.menuItem }, a.createElement(l.ZP, null, "Default Grok"), a.createElement(m.default, { style: void 0 === A ? Z.checkIcon : Z.invisible })), key: "0", onClick: () => H() }), ...e];
                        }, [A, H, L]),
                        G = A?.personality;
                    return a.createElement(o.Z, { style: [Z.container, x ? { alignItems: "flex-end" } : { alignItems: "flex-start" }] }, a.createElement(s.ZP, { borderColor: G ? "blue600" : "transparent", color: G ? "blue600" : "gray900", disabled: t, onClick: F, size: "smallCompact", style: [Z.button, d ? Z.buttonOverFocusedInput : null, n ? Z.fadeIn : null] }, a.createElement(o.Z, { style: Z.buttonContent }, a.createElement(b.default, { style: Z.icon }), a.createElement(l.ZP, { numberOfLines: 1, size: "subtext2", weight: "medium" }, A?.personality?.name ?? "Personalities"), a.createElement(g.default, { style: Z.icon }))), a.createElement(o.Z, { style: [Z.dropdownContainer, u ? { top: -8 } : { top: 36 }] }, D && a.createElement(i.default, { onDismiss: W, preferredHorizontalOrientation: "right" }, a.createElement(o.Z, { style: Z.menuItemContainer }, V))), P && a.createElement(c.Z, { align: "right", buttonType: "primaryText", onDismissed: O, title: v }, V));
                },
                Z = d.default.create((e) => ({ container: { position: "relative", flex: 1 }, button: { ...w.il, borderWidth: e.spaces.space2, backgroundColor: "light" === e.paletteName ? e.colors.gray50 : e.colors.gray100, maxWidth: "100%" }, fadeIn: { ...w.DP }, buttonOverFocusedInput: { backgroundColor: "light" === e.paletteName ? e.colors.gray100 : e.colors.gray200 }, dropdownContainer: { position: "absolute" }, menuItemContainer: { maxHeight: "35vh", overflowY: "auto", alignItems: "stretch" }, icon: { height: 14, width: 14, flexShrink: 0 }, menuItem: { flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "space-between", gap: e.spaces.space12 }, nameContainer: { flexGrow: 1, flexShrink: 1, whiteSpace: "normal", wordWrap: "break-word" }, checkIcon: { opacity: 0.8, flexShrink: 0 }, invisible: { opacity: 0 }, buttonContent: { flexGrow: 1, maxWidth: "100%", display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 } }));
        },
        690672: (e, t, n) => {
            n.d(t, { Z: () => f });
            var a = n(202784),
                o = n(325686),
                r = n(154003),
                l = n(167630),
                s = n(392237),
                i = n(674132),
                c = n.n(i),
                d = n(528188),
                u = n(730616),
                p = n(317976);
            const m = c().b5df32b0,
                b = { label: m },
                g = c().cfd2f35e,
                h = { label: g },
                y = c().fad48eea;
            function f({ isInProgress: e, isLoading: t, isSendEnabled: n, onSend: s, onStop: i, useMagicWandIcon: c }) {
                return t ? a.createElement(r.ZP, { "aria-label": g, disabled: !0, hoverLabel: h, icon: a.createElement(o.Z, { style: E.indicatorContainer }, a.createElement(l.Z, { "aria-label": y, size: 24, style: E.activityIndicator })), size: "medium", style: E.button, type: "primaryText" }) : e ? a.createElement(r.ZP, { "aria-label": g, hoverLabel: h, icon: a.createElement(o.Z, { style: E.indicatorContainer }, a.createElement(d.default, { style: E.stopIcon })), onPress: i, onPressIn: C, onPressOut: i, size: "medium", style: E.button, type: "primaryText" }) : a.createElement(r.ZP, { "aria-label": m, disabled: !n, hoverLabel: b, icon: c ? a.createElement(o.Z, { style: E.indicatorContainer }, a.createElement(u.default, null)) : a.createElement(o.Z, { style: E.indicatorContainer }, a.createElement(p.default, { style: E.sendIcon })), onPress: s, onPressIn: C, onPressOut: s, size: "medium", style: E.button, type: "primaryText" });
            }
            const C = (e) => {
                    e.preventDefault(), e.stopPropagation();
                },
                E = s.default.create((e) => ({ button: {}, indicatorContainer: { height: e.spaces.space48, width: e.spaces.space48, justifyContent: "center", alignItems: "center" }, activityIndicator: { marginEnd: e.spaces.space8 }, sendIcon: { height: e.spaces.space40, width: e.spaces.space40 }, stopIcon: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-bf286bb5.2352c10a.js.map

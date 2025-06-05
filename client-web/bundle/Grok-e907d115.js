"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-e907d115"],
    {
        15038: (e, t, o) => {
            o.d(t, { ZP: () => d });
            var n = o(202784),
                r = o(325686),
                i = o(950822),
                a = o(392237);
            const s = (e) => (0, i.Z)("div", e);
            class l extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._dragEnterCount = 0),
                        (this.state = { active: !1 }),
                        (this._handleDragDrop = (e) => {
                            const { onFilesAdded: t } = this.props;
                            e.preventDefault();
                            t(Array.from(e && e.dataTransfer.files)), this._updateDragCount(0);
                        }),
                        (this._handleDragEnter = (e) => {
                            const { onDragEnter: t } = this.props;
                            e.preventDefault(), t && t(), this._updateDragCount(this._dragEnterCount + 1);
                        }),
                        (this._handleDragLeave = (e) => {
                            e.preventDefault(), this._updateDragCount(this._dragEnterCount - 1);
                        }),
                        (this._handleDragOver = (e) => {
                            e.preventDefault();
                        });
                }
                render() {
                    const { activeStyle: e, allowDragDrop: t, children: o, style: i } = this.props,
                        { active: a } = this.state,
                        l = t ? c.dragBorderValid : c.dragBorderInvalid;
                    return n.createElement(s, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [c.root, i, a && l, a && e] }, n.createElement(r.Z, { style: c.inner }, "function" == typeof o ? o(a) : o));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            l.defaultProps = { allowDragDrop: !0 };
            const c = a.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                d = l;
        },
        525271: (e, t, o) => {
            o.d(t, { Z: () => k });
            var n = o(202784),
                r = o(325686),
                i = o(111677),
                a = o.n(i),
                s = o(837020),
                l = o(461756),
                c = o(786998),
                d = o(154003),
                p = o(950822),
                h = o(743618),
                u = o(745153),
                m = o(292627),
                g = o(224162),
                b = o(392237);
            const f = a().af8fa2ae,
                y = n.createElement(s.default, null);
            class C extends n.Component {
                constructor(e) {
                    super(),
                        (this._isMounted = !0),
                        (this._setAnimationNode = (e) => {
                            this._animationNode = e;
                        }),
                        (this._handleTransitionEnd = (e) => {
                            !1 === this.state.isVisible && e.target instanceof window.HTMLElement && e.target === this._animationNode && this.props.onDismissed();
                        }),
                        (this._handleMaskClick = () => {
                            this._handleDismiss();
                        }),
                        (this._handleEsc = (e) => {
                            const { altKey: t, ctrlKey: o, key: n, metaKey: r } = e;
                            !(t || o || r) && "Escape" === n && this._handleDismiss();
                        }),
                        (this._handleDismiss = () => {
                            this.setState({ isVisible: !1 }), l.Z.reducedMotionEnabled && this.props.onDismissed();
                        }),
                        (this.state = { isVisible: !1 });
                }
                componentDidMount() {
                    window.requestAnimationFrame(() => {
                        this._isMounted && this.setState({ isVisible: !0 });
                    });
                }
                componentWillUnmount() {
                    this._isMounted = !1;
                }
                render() {
                    const { additionalControl: e, align: t, buttonType: o, children: i, style: a, subtitle: s, title: d, topBarStyle: b, withBackgroundBlur: f, withTopBar: y, withTransparentMask: C } = this.props,
                        { isVisible: k } = this.state;
                    return n.createElement(g.ZP.Consumer, null, ({ direction: g }) => {
                        const _ = "rtl" === g,
                            E = k ? w.visibleDrawer : ("left" === t) === _ ? w.offscreenRightDrawer : w.offscreenLeftDrawer,
                            D = k && !C ? w.maskWithBg : w.maskTransparent,
                            v = k ? w.animateOpen : w.animateClose,
                            S = l.Z.reducedMotionEnabled ? null : v;
                        return n.createElement(m.Z.Modal, null, n.createElement(u.Z, null, n.createElement(h.Z, null, n.createElement(r.Z, { onClick: this._handleMaskClick, onKeyUp: this._handleEsc, style: [w.mask, D, S, f ? w.backgroundBlur : null, "left" === t ? w.alignLeft : w.alignRight] }, (0, p.Z)("div", { role: "dialog", onTransitionEnd: this._handleTransitionEnd, ref: this._setAnimationNode, onClick: x, style: [w.root, f ? w.backgroundRootBlur : null, E, S, a], children: n.createElement(n.Fragment, null, y ? n.createElement(c.Z, { leftControl: "left" === t ? e : "right" === t ? this._renderCloseButton(o) : null, rightControl: "left" === t ? this._renderCloseButton(o) : "right" === t ? e : null, style: b, subtitle: s, title: d }) : null, n.createElement(r.Z, { style: w.contentContainer }, i)) })))));
                    });
                }
                _renderCloseButton(e) {
                    return n.createElement(d.ZP, { "aria-label": f, icon: y, onPress: this._handleMaskClick, type: e });
                }
            }
            C.defaultProps = { align: "left", onDismissed: () => {}, withTopBar: !0 };
            const x = (e) => {
                    e.stopPropagation();
                },
                w = b.default.create((e) => ({ backgroundBlur: { backdropFilter: "blur(2px)" }, backgroundRootBlur: { boxShadow: "light" === e.paletteName ? e.boxShadows.small : "0 0 5px rgba(80,80,80,0.2), 0 1px 4px 1px rgba(80,80,80,0.25)" }, mask: { ...b.default.absoluteFillObject, position: "fixed", transitionProperty: "background-color", transitionTimingFunction: "ease" }, maskWithBg: { backgroundColor: e.colors.maskColor }, maskTransparent: { backgroundColor: e.colors.transparent }, root: { display: "flex", flexDirection: "column", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.small, minWidth: 280, maxWidth: "100%", flexGrow: 1, flexShrink: 1, minHeight: 0, height: "100vh", transitionProperty: "transform", transitionTimingFunction: "ease" }, visibleDrawer: { transform: [{ translateX: "0%" }] }, offscreenLeftDrawer: { transform: [{ translateX: "-100%" }] }, offscreenRightDrawer: { transform: [{ translateX: "100%" }] }, alignLeft: { alignItems: "flex-start" }, alignRight: { alignItems: "flex-end" }, animateOpen: { transitionDuration: "250ms" }, animateClose: { transitionDuration: "200ms" }, contentContainer: { flexGrow: 1, flexShrink: 1, minHeight: 0, overflowY: "auto", overscrollBehavior: "contain" } })),
                k = C;
        },
        449161: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(807896),
                r = o(202784),
                i = o(111677),
                a = o.n(i),
                s = o(154003),
                l = o(950822),
                c = o(392237);
            const d = a().i5450bec,
                p = a().f7432494;
            class h extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            const { onPress: t } = this.props;
                            t && t(e), this._fileInput && this._fileInput.click();
                        }),
                        (this._handleChange = (e) => {
                            const { onChange: t } = this.props,
                                o = e.target,
                                n = o.files;
                            n.length && t && t(n), (o.value = "");
                        }),
                        (this._handleFileInputButtonRef = (e) => {
                            this._fileInput = e;
                        });
                }
                render() {
                    const { accept: e, disabled: t, multiple: o, onChange: i, testID: a, ...c } = this.props,
                        h = !(e?.includes("video") || e?.includes("gif"));
                    return r.createElement(r.Fragment, null, r.createElement(s.ZP, (0, n.Z)({ hoverLabel: e ? { label: h ? p : d } : void 0 }, c, { disabled: t, onPress: this._handlePress })), (0, l.Z)("input", { accept: e, disabled: t, multiple: o, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: u.input, tabIndex: -1, testID: a, type: "file" }));
                }
            }
            h.defaultProps = { disabled: !1, multiple: !1 };
            const u = c.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                m = h;
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => D });
            var n = o(807896),
                r = o(202784),
                i = o(194504),
                a = o(235902),
                s = o(392237),
                l = o(325686),
                c = o(111677),
                d = o.n(c),
                p = o(912021),
                h = o(516951),
                u = o(731708),
                m = o(310088),
                g = o(175993),
                b = o(58881),
                f = o(530732);
            const y = d().d2414d31,
                C = () => d().ce4e85ae,
                x = d().fb9f6f39;
            class w extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: n, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: n, method: "push", state: { ...r, lockScroll: t } };
                        })),
                        (this._unlisten = h.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, n) => {
                            const r = s.default.theme.colors.text,
                                i = s.default.theme.colors.gray700;
                            return o || n ? (e || t ? r : i) : e ? r : i;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: t } = this.props;
                            t && t(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: n, children: i, color: a, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: h, isWebRedesign: g, retainScrollPosition: w, style: _, to: E } = this.props,
                        { location: D } = this.state,
                        v = E ? this._getMemoizedLink(E, w) : void 0,
                        S = c ? c(E) : D?.pathname === v?.pathname,
                        Z = b.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? k.pillHoverStyle.backgroundColor : void 0 }),
                        T = g ? "medium" : S ? "bold" : "medium";
                    return r.createElement(f.Z, { "aria-label": t, "aria-selected": S, focusable: !!S, interactiveStyles: Z, link: v, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [k.pillStyle] : [k.link]), ...(p && S ? [k.pillActiveStyle] : []), d ? (p ? k.compactPill : k.compactLink) : null, h ? k.roundedRect : null, _], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => r.createElement(l.Z, { style: p && k.flexGrow }, r.createElement(u.ZP, { size: g ? "headline2" : void 0, style: [k.text, { color: this._getTextColor(S, c, g, p) }, d && k.compactText, g && t && k.focusedText, p && k.pillTextStyle, p && S && k.pillActiveTextStyle, p && c && k.pillHoverTextStyle], weight: T }, e && r.createElement(e, { style: k.icon }), i, g || p ? null : r.createElement(l.Z, { style: S && [k.border, { backgroundColor: s.default.theme.colors[a] }] })), o ? r.createElement(m.Z, { count: o, standalone: !0, style: [k.badge, o >= 10 && k.multiDigitBadge, o >= 20 && k.truncatedCountBadge], truncatedCountFormatter: x, unreadCountLabel: y, withBorder: !1 }) : n ? r.createElement(m.Z, { pip: !0, standalone: !0, style: k.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (w.contextType = g.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const k = s.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    pillStyle: { backgroundColor: e.colors.transparent, borderColor: e.colors.gray50, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    pillTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillHoverStyle: { backgroundColor: e.colors.gray100, borderColor: e.colors.gray50 },
                    pillHoverTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillActiveStyle: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50 },
                    pillActiveTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                _ = w,
                E = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                D = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: s, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const h = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = a.ZP.useProps(),
                        m = u() && !s,
                        g = r.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: i, ...a }, c) => {
                                    const d = m ? [E.linkRedesign, 0 === c && E.firstLinkRedesign, e && 0 === c && E.withNoPaddingStart] : void 0;
                                    return r.createElement(_, (0, n.Z)({ viewType: i }, a, { isCompact: o, isPillLink: s, isRoundedRect: l, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, s, l, m, c],
                        );
                    return r.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: s && E.gap, childrenStyle: !m && E.flexGrow, key: h, style: [s ? null : E.segmentedControl, m && E.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        782947: (e, t, o) => {
            o.d(t, { Z: () => f });
            var n = o(807896),
                r = o(202784),
                i = o(896632),
                a = o(325686),
                s = o(711223),
                l = o(516951),
                c = o(731708),
                d = o(868634),
                p = o(952428),
                h = o(352924),
                u = o(392237);
            const m = u.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.cellBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding8: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, boxShadow: { boxShadow: e.boxShadows.medium }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 1 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column" }, row: { flexDirection: "row", alignItems: "center" }, marginTop4: { marginTop: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, info: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space8 }, infoIcon: { fontSize: ".74em", color: e.colors.gray700 }, backgroundTransparent: { backgroundColor: e.colors.transparent }, pill: { marginBottom: e.spaces.space4 }, inlinePill: { marginStart: e.spaces.space4 } })),
                g = { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                b = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": o, checked: n, dedicatedPillRow: i, description: u, disabled: b, disabledInlineCallout: f, endContent: y, horizontal: C, illustration: x, infoLabel: w, infoLabelType: k, inlineCallout: _, label: E, name: D, onChange: v, pillText: S, pillType: Z, reverseLabels: T, secondaryContent: I, secondaryDescription: P, switchStyle: B, testID: W }) => {
                    const R = (0, h.b)(),
                        L = (0, h.b)(),
                        z = (0, h.b)(),
                        M = r.createElement(c.ZP, { color: B ? (n ? "text" : "gray800") : "text", id: R, role: "label", size: B ? "body" : "headline2", testID: "headline-label", weight: B ? "normal" : "bold" }, E),
                        A = !!u && r.createElement(c.ZP, { color: "gray700", id: L, size: "subtext1", style: S ? m.descriptionWithPill : m.description, testID: "description-label" }, u),
                        H = r.createElement(c.ZP, { color: "gray700", role: "label", size: "subtext2", style: m.description }, P),
                        j = S ? r.createElement(d.ZP, { style: i ? m.pill : m.inlinePill, type: Z }, S) : null,
                        F = r.createElement(r.Fragment, null, i ? j : null, r.createElement(a.Z, { style: [m.row, w && m.marginBottom8] }, T ? A : M, i ? null : j), r.createElement(a.Z, { style: [m.row, T && m.marginTop4] }, T ? M : A), I || (P ? H : void 0)),
                        V = B ? "unset" : (o ? 100 / o : 100) + "%",
                        $ = B ? [m.padding8, m.borderRadiusLarge, n ? m.backgroundDefault : m.backgroundTransparent] : [m.padding16, m.boxShadow, m.borderRadiusLarge, n ? m.checked : null, m.backgroundDefault];
                    return r.createElement(r.Fragment, null, r.createElement(p.Z, { disabled: b, style: [m.root, ...$, C ? { maxWidth: V, ...m.grow } : null, 1 === t || C ? null : m.withMarginTop, t !== o && C && !B && m.withMarginEnd, !b && m.interactive], testID: W, withInteractiveStyling: !B }, !!x && r.createElement(a.Z, { style: m.iconContainer, testID: "illustration" }, x), r.createElement(a.Z, { style: [m.labelContainer, B && m.alignCenter] }, !!w && r.createElement(a.Z, { style: m.info }, r.createElement(d.ZP, { background: "green" === k ? "green500" : "red" === k ? "magenta500" : "yellow" === k ? "orange50" : "gray500" }, r.createElement(c.ZP, { color: "yellow" === k ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, w)), "red" !== k && "yellow" !== k && r.createElement(s.default, { style: m.infoIcon, testID: "infoIcon" })), F, n && !!_ && r.createElement(a.Z, { style: m.inlineCalloutContainer, testID: "inlineCallout" }, _)), !!y && r.createElement(a.Z, { style: m.endContentContainer, testID: "endContent" }, r.createElement(c.ZP, { id: z, size: "subtext1", weight: "bold" }, y)), r.createElement("input", { "aria-describedby": `${L} ${z}`, "aria-label": e, "aria-labelledby": R, "aria-posinset": t, "aria-setsize": o, checked: n, disabled: b, name: D, onChange: n ? l.Z : v, style: g, type: "radio" })), b && f ? f : null);
                },
                f = (e) => {
                    const t = r.useCallback(({ value: e, ...t }) => r.createElement(b, (0, n.Z)({}, t, { key: e })), []);
                    return r.createElement(i.Z, (0, n.Z)({}, e, { renderSelector: t }));
                };
        },
        557707: (e, t, o) => {
            o.d(t, { ZP: () => _ });
            var n = o(807896),
                r = o(202784),
                i = o(466999),
                a = o(325686),
                s = o(111677),
                l = o.n(s),
                c = o(837020),
                d = o(540820),
                p = o(731708),
                h = o(154003),
                u = o(108362),
                m = o(661810),
                g = o(365023),
                b = o(292627),
                f = o(537392),
                y = o(392237);
            const C = l().af8fa2ae,
                x = r.createElement(c.default, null);
            class w extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAriaOnly = () => {
                            const { testID: e, text: t } = this.props;
                            return r.createElement(a.Z, { role: "alert", style: y.default.visuallyHidden, testID: e }, r.createElement(i.Z, null, t));
                        }),
                        (this._renderIcon = () => {
                            const { variant: e } = this.props;
                            return "jp-holiday-labor-thanksgiving" === e?.type && r.createElement(d.default, { style: k.icon });
                        }),
                        (this._renderDecoration = () => {
                            const { variant: e } = this.props;
                            return "jp-holiday-labor-thanksgiving" === e?.type && r.createElement(a.Z, null, r.createElement(p.ZP, { color: "whiteOnColor", style: k.titleText }, e.payload.message), r.createElement(m.Z, { spacing: "space12", style: k.divider }));
                        }),
                        (this._renderContent = () => {
                            const { action: e, text: t, withAutoDismiss: o, withClearButton: n } = this.props;
                            return r.createElement(r.Fragment, null, r.createElement(p.ZP, { color: "whiteOnColor", style: k.titleText }, t), r.createElement(a.Z, { "aria-hidden": o, style: k.actionButtons }, e && this._renderActionLabel(e), n && r.createElement(h.ZP, { "aria-label": C, borderColor: "transparent", color: "white", icon: x, onPress: this._handleClose, style: k.closeButton })));
                        }),
                        (this._renderVariantContent = () => {
                            const { variant: e } = this.props;
                            if (e)
                                switch (e.type) {
                                    case "jp-holiday-labor-thanksgiving": {
                                        const e = this._renderContent();
                                        return r.createElement(r.Fragment, null, this._renderIcon(), r.createElement(a.Z, { style: k.body }, this._renderDecoration(), r.createElement(a.Z, { style: k.content }, e)));
                                    }
                                    case "jetfuel":
                                        return r.createElement(r.Fragment, null, e.payload.body);
                                }
                            return null;
                        }),
                        (this._getRootVariantStyle = () => {
                            const { variant: e } = this.props;
                            if (e)
                                switch (e.type) {
                                    case "jp-holiday-labor-thanksgiving":
                                        return k.rootVariantJp;
                                    case "jetfuel":
                                        return k.rootVariantJetfuel;
                                }
                            return null;
                        }),
                        (this._renderContentWithLayer = ({ windowWidth: e }) => {
                            const { LayerComponent: t, style: o, testID: i, variant: s } = this.props,
                                l = o?.length ? [...o] : [o],
                                c = s ? this._renderVariantContent() : this._renderContent();
                            return r.createElement(
                                t,
                                null,
                                r.createElement(
                                    u.Z,
                                    { style: k.noPointerEvents },
                                    r.createElement(g.Z, { id: "Toast" }, (t, o) => r.createElement(a.Z, (0, n.Z)({ ref: t() }, o({ role: "alert", style: [k.root, s && this._getRootVariantStyle(), ...l, e > y.default.theme.breakpoints.medium && k.rootWide], testID: i })), c)),
                                ),
                            );
                        }),
                        (this._renderContentWithoutLayer = ({ windowWidth: e }) => {
                            const { testID: t } = this.props;
                            return r.createElement(u.Z, null, r.createElement(a.Z, { role: "alert", style: [k.root, e > y.default.theme.breakpoints.medium && k.rootWide], testID: t }, this._renderContent()));
                        }),
                        (this._createTimer = () => {
                            const { action: e, autoDismissDelay: t, onClose: o, text: n, withAutoDismiss: r } = this.props;
                            if (r) {
                                const r = t || w.calculateDismissDelay(n, !!e);
                                this._timerId = setTimeout(o, r);
                            }
                        }),
                        (this._handleActionPress = (e) => {
                            this._stopTimer();
                            const { action: t, onClose: o } = this.props;
                            t?.onAction && t.onAction(e), o(e);
                        }),
                        (this._handleClose = (e) => {
                            this._stopTimer(), this.props.onClose(e);
                        });
                }
                componentDidMount() {
                    this._createTimer();
                }
                componentWillUnmount() {
                    this._stopTimer();
                }
                render() {
                    const { ariaOnly: e, withoutLayer: t } = this.props;
                    return e ? this._renderAriaOnly() : r.createElement(f.ZP, null, t ? this._renderContentWithoutLayer : this._renderContentWithLayer);
                }
                _renderActionLabel(e) {
                    const { label: t, link: o } = e;
                    return r.createElement(p.ZP, { children: t, color: "whiteOnColor", link: o, onClick: this._handleActionPress, style: [k.actionText, !o && k.actionMargin], weight: "bold", withInteractiveStyling: !0 });
                }
                static calculateDismissDelay(e, t) {
                    const o = (1e3 * ("string" == typeof e ? e.split(" ").length : 0)) / 5 + 225;
                    return (o < 4e3 ? 4e3 : o) + (t ? 2e3 : 0);
                }
                _stopTimer() {
                    clearTimeout(this._timerId);
                }
            }
            w.defaultProps = { withAutoDismiss: !0, withClearButton: !1, LayerComponent: b.Z.ModalToasts };
            const k = y.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.primary, flexDirection: "row", justifyContent: "space-between", padding: e.spaces.space12, pointerEvents: "auto" }, rootVariantJp: { alignItems: "flex-start", backgroundColor: e.colors.green500, pointerEvents: "auto", flexDirection: "row", padding: e.spaces.space12 }, rootVariantJetfuel: { flexDirection: "column", alignItems: "center", backgroundColor: "transparent" }, icon: { flexShrink: 0, width: 50, height: 50 }, noPointerEvents: { pointerEvents: "none" }, body: { flexShrink: 1 }, divider: { marginHorizontal: e.spaces.space12, backgroundColor: e.colors.white }, content: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, rootWide: { alignSelf: "center", borderRadius: e.borderRadii.small, marginBottom: e.spaces.space32 }, titleText: { flexShrink: 1, paddingHorizontal: e.spaces.space12 }, actionText: { alignSelf: "center", whiteSpace: "nowrap", marginEnd: e.spaces.space12 }, actionButtons: { flexDirection: "row" }, actionMargin: { marginHorizontal: e.spaces.space12 }, closeButton: { marginStart: e.spaces.space12, paddingHorizontal: e.spaces.space4 } })),
                _ = w;
        },
        183806: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = o(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-e907d115.38a8f4aa.js.map

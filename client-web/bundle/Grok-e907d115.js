"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-e907d115"],
    {
        15038: (e, t, n) => {
            n.d(t, { ZP: () => d });
            var r = n(202784),
                o = n(325686),
                a = n(950822),
                i = n(392237);
            const s = (e) => (0, a.Z)("div", e);
            class l extends r.Component {
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
                    const { activeStyle: e, allowDragDrop: t, children: n, style: a } = this.props,
                        { active: i } = this.state,
                        l = t ? c.dragBorderValid : c.dragBorderInvalid;
                    return r.createElement(s, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [c.root, a, i && l, i && e] }, r.createElement(o.Z, { style: c.inner }, "function" == typeof n ? n(i) : n));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            l.defaultProps = { allowDragDrop: !0 };
            const c = i.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                d = l;
        },
        525271: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var r = n(202784),
                o = n(325686),
                a = n(674132),
                i = n.n(a),
                s = n(837020),
                l = n(461756),
                c = n(786998),
                d = n(154003),
                p = n(950822),
                h = n(743618),
                u = n(745153),
                m = n(292627),
                g = n(224162),
                b = n(392237);
            const f = i().af8fa2ae,
                y = r.createElement(s.default, null);
            class C extends r.Component {
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
                            const { altKey: t, ctrlKey: n, key: r, metaKey: o } = e;
                            !(t || n || o) && "Escape" === r && this._handleDismiss();
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
                    const { additionalControl: e, align: t, buttonType: n, children: a, style: i, subtitle: s, title: d, topBarStyle: b, withBackgroundBlur: f, withTopBar: y, withTransparentMask: C } = this.props,
                        { isVisible: _ } = this.state;
                    return r.createElement(g.ZP.Consumer, null, ({ direction: g }) => {
                        const k = "rtl" === g,
                            E = _ ? x.visibleDrawer : ("left" === t) === k ? x.offscreenRightDrawer : x.offscreenLeftDrawer,
                            D = _ && !C ? x.maskWithBg : x.maskTransparent,
                            v = _ ? x.animateOpen : x.animateClose,
                            Z = l.Z.reducedMotionEnabled ? null : v;
                        return r.createElement(m.Z.Modal, null, r.createElement(u.Z, null, r.createElement(h.Z, null, r.createElement(o.Z, { onClick: this._handleMaskClick, onKeyUp: this._handleEsc, style: [x.mask, D, Z, f ? x.backgroundBlur : null, "left" === t ? x.alignLeft : x.alignRight] }, (0, p.Z)("div", { role: "dialog", onTransitionEnd: this._handleTransitionEnd, ref: this._setAnimationNode, onClick: w, style: [x.root, f ? x.backgroundRootBlur : null, E, Z, i], children: r.createElement(r.Fragment, null, y ? r.createElement(c.Z, { leftControl: "left" === t ? e : "right" === t ? this._renderCloseButton(n) : null, rightControl: "left" === t ? this._renderCloseButton(n) : "right" === t ? e : null, style: b, subtitle: s, title: d }) : null, r.createElement(o.Z, { style: x.contentContainer }, a)) })))));
                    });
                }
                _renderCloseButton(e) {
                    return r.createElement(d.ZP, { "aria-label": f, icon: y, onPress: this._handleMaskClick, type: e });
                }
            }
            C.defaultProps = { align: "left", onDismissed: () => {}, withTopBar: !0 };
            const w = (e) => {
                    e.stopPropagation();
                },
                x = b.default.create((e) => ({ backgroundBlur: { backdropFilter: "blur(2px)" }, backgroundRootBlur: { boxShadow: "light" === e.paletteName ? e.boxShadows.small : "0 0 5px rgba(80,80,80,0.2), 0 1px 4px 1px rgba(80,80,80,0.25)" }, mask: { ...b.default.absoluteFillObject, position: "fixed", transitionProperty: "background-color", transitionTimingFunction: "ease" }, maskWithBg: { backgroundColor: e.colors.maskColor }, maskTransparent: { backgroundColor: e.colors.transparent }, root: { display: "flex", flexDirection: "column", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.small, minWidth: 280, maxWidth: "100%", flexGrow: 1, flexShrink: 1, minHeight: 0, height: "100vh", transitionProperty: "transform", transitionTimingFunction: "ease" }, visibleDrawer: { transform: [{ translateX: "0%" }] }, offscreenLeftDrawer: { transform: [{ translateX: "-100%" }] }, offscreenRightDrawer: { transform: [{ translateX: "100%" }] }, alignLeft: { alignItems: "flex-start" }, alignRight: { alignItems: "flex-end" }, animateOpen: { transitionDuration: "250ms" }, animateClose: { transitionDuration: "200ms" }, contentContainer: { flexGrow: 1, flexShrink: 1, minHeight: 0, overflowY: "auto", overscrollBehavior: "contain" } })),
                _ = C;
        },
        449161: (e, t, n) => {
            n.d(t, { Z: () => m });
            var r = n(807896),
                o = n(202784),
                a = n(674132),
                i = n.n(a),
                s = n(154003),
                l = n(950822),
                c = n(392237);
            const d = i().i5450bec,
                p = i().f7432494;
            class h extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            const { onPress: t } = this.props;
                            t && t(e), this._fileInput && this._fileInput.click();
                        }),
                        (this._handleChange = (e) => {
                            const { onChange: t } = this.props,
                                n = e.target,
                                r = n.files;
                            r.length && t && t(r), (n.value = "");
                        }),
                        (this._handleFileInputButtonRef = (e) => {
                            this._fileInput = e;
                        });
                }
                render() {
                    const { accept: e, disabled: t, multiple: n, onChange: a, testID: i, ...c } = this.props,
                        h = !(e?.includes("video") || e?.includes("gif"));
                    return o.createElement(o.Fragment, null, o.createElement(s.ZP, (0, r.Z)({ hoverLabel: e ? { label: h ? p : d } : void 0 }, c, { disabled: t, onPress: this._handlePress })), (0, l.Z)("input", { accept: e, disabled: t, multiple: n, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: u.input, tabIndex: -1, testID: i, type: "file" }));
                }
            }
            h.defaultProps = { disabled: !1, multiple: !1 };
            const u = c.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                m = h;
        },
        403556: (e, t, n) => {
            n.d(t, { Z: () => D });
            var r = n(807896),
                o = n(202784),
                a = n(194504),
                i = n(235902),
                s = n(392237),
                l = n(325686),
                c = n(674132),
                d = n.n(c),
                p = n(912021),
                h = n(516951),
                u = n(731708),
                m = n(310088),
                g = n(175993),
                b = n(58881),
                f = n(530732);
            const y = d().d2414d31,
                C = () => d().ce4e85ae,
                w = d().fb9f6f39;
            class x extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: n, query: r, state: o } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: r, method: "push", state: { ...o, lockScroll: t } };
                        })),
                        (this._unlisten = h.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, r) => {
                            const o = s.default.theme.colors.text,
                                a = s.default.theme.colors.gray700;
                            return n || r ? (e || t ? o : a) : e ? o : a;
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: r, children: a, color: i, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: h, isWebRedesign: g, retainScrollPosition: x, style: k, to: E } = this.props,
                        { location: D } = this.state,
                        v = E ? this._getMemoizedLink(E, x) : void 0,
                        Z = c ? c(E) : D?.pathname === v?.pathname,
                        I = b.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0 }),
                        P = g ? "medium" : Z ? "bold" : "medium";
                    return o.createElement(f.Z, { "aria-label": t, "aria-selected": Z, focusable: !!Z, interactiveStyles: I, link: v, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? _.pill : _.link, p && Z ? _.active : null, d ? (p ? _.compactPill : _.compactLink) : null, h ? _.roundedRect : null, k], withoutInteractiveStyles: g || p }, ({ isFocused: t, isHovered: c }) => o.createElement(l.Z, { style: p && _.flexGrow }, o.createElement(u.ZP, { size: g ? "headline2" : void 0, style: [_.text, { color: this._getTextColor(Z, c, g, p) }, d && _.compactText, g && t && _.focusedText], weight: P }, e && o.createElement(e, { style: _.icon }), a, g || p ? null : o.createElement(l.Z, { style: Z && [_.border, { backgroundColor: s.default.theme.colors[i] }] })), n ? o.createElement(m.Z, { count: n, standalone: !0, style: [_.badge, n >= 10 && _.multiDigitBadge, n >= 20 && _.truncatedCountBadge], truncatedCountFormatter: w, unreadCountLabel: y, withBorder: !1 }) : r ? o.createElement(m.Z, { pip: !0, standalone: !0, style: _.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (x.contextType = g.Z), (x.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const _ = s.default.create((e) => ({
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
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                k = x,
                E = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                D = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: s, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const h = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = i.ZP.useProps(),
                        m = u() && !s,
                        g = o.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...i }, c) => {
                                    const d = m ? [E.linkRedesign, 0 === c && E.firstLinkRedesign, e && 0 === c && E.withNoPaddingStart] : void 0;
                                    return o.createElement(k, (0, r.Z)({ viewType: a }, i, { isCompact: n, isPillLink: s, isRoundedRect: l, isWebRedesign: m, style: d }), t);
                                }),
                            [e, n, s, l, m, c],
                        );
                    return o.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: s && E.gap, childrenStyle: !m && E.flexGrow, key: h, style: [s ? null : E.segmentedControl, m && E.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        782947: (e, t, n) => {
            n.d(t, { Z: () => f });
            var r = n(807896),
                o = n(202784),
                a = n(896632),
                i = n(325686),
                s = n(711223),
                l = n(516951),
                c = n(731708),
                d = n(868634),
                p = n(952428),
                h = n(352924),
                u = n(392237);
            const m = u.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.cellBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding8: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, boxShadow: { boxShadow: e.boxShadows.medium }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 1 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column" }, row: { flexDirection: "row", alignItems: "center" }, marginTop4: { marginTop: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, info: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space8 }, infoIcon: { fontSize: ".74em", color: e.colors.gray700 }, backgroundTransparent: { backgroundColor: e.colors.transparent }, pill: { marginBottom: e.spaces.space4 }, inlinePill: { marginStart: e.spaces.space4 } })),
                g = { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                b = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": n, checked: r, dedicatedPillRow: a, description: u, disabled: b, disabledInlineCallout: f, endContent: y, horizontal: C, illustration: w, infoLabel: x, infoLabelType: _, inlineCallout: k, label: E, name: D, onChange: v, pillText: Z, pillType: I, reverseLabels: P, secondaryContent: B, secondaryDescription: S, switchStyle: T, testID: R }) => {
                    const W = (0, h.b)(),
                        L = (0, h.b)(),
                        z = (0, h.b)(),
                        M = o.createElement(c.ZP, { color: "text", id: W, role: "label", size: T ? "body" : "headline2", testID: "headline-label", weight: T ? "normal" : "bold" }, E),
                        j = !!u && o.createElement(c.ZP, { color: "gray700", id: L, size: "subtext1", style: Z ? m.descriptionWithPill : m.description, testID: "description-label" }, u),
                        F = o.createElement(c.ZP, { color: "gray700", role: "label", size: "subtext2", style: m.description }, S),
                        A = Z ? o.createElement(d.ZP, { style: a ? m.pill : m.inlinePill, type: I }, Z) : null,
                        V = o.createElement(o.Fragment, null, a ? A : null, o.createElement(i.Z, { style: [m.row, x && m.marginBottom8] }, P ? j : M, a ? null : A), o.createElement(i.Z, { style: [m.row, P && m.marginTop4] }, P ? M : j), B || (S ? F : void 0)),
                        $ = T ? "unset" : (n ? 100 / n : 100) + "%",
                        H = T ? [m.padding8, m.borderRadiusInfinite, r ? m.backgroundDefault : m.backgroundTransparent] : [m.padding16, m.boxShadow, m.borderRadiusLarge, r ? m.checked : null, m.backgroundDefault];
                    return o.createElement(o.Fragment, null, o.createElement(p.Z, { disabled: b, style: [m.root, ...H, C ? { maxWidth: $, ...m.grow } : null, 1 === t || C ? null : m.withMarginTop, t !== n && C && !T && m.withMarginEnd, !b && m.interactive], testID: R, withInteractiveStyling: !T }, !!w && o.createElement(i.Z, { style: m.iconContainer, testID: "illustration" }, w), o.createElement(i.Z, { style: [m.labelContainer, T && m.alignCenter] }, !!x && o.createElement(i.Z, { style: m.info }, o.createElement(d.ZP, { background: "green" === _ ? "green500" : "red" === _ ? "magenta500" : "yellow" === _ ? "orange50" : "gray500" }, o.createElement(c.ZP, { color: "yellow" === _ ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, x)), "red" !== _ && "yellow" !== _ && o.createElement(s.default, { style: m.infoIcon, testID: "infoIcon" })), V, r && !!k && o.createElement(i.Z, { style: m.inlineCalloutContainer, testID: "inlineCallout" }, k)), !!y && o.createElement(i.Z, { style: m.endContentContainer, testID: "endContent" }, o.createElement(c.ZP, { id: z, size: "subtext1", weight: "bold" }, y)), o.createElement("input", { "aria-describedby": `${L} ${z}`, "aria-label": e, "aria-labelledby": W, "aria-posinset": t, "aria-setsize": n, checked: r, disabled: b, name: D, onChange: r ? l.Z : v, style: g, type: "radio" })), b && f ? f : null);
                },
                f = (e) => {
                    const t = o.useCallback(({ value: e, ...t }) => o.createElement(b, (0, r.Z)({}, t, { key: e })), []);
                    return o.createElement(a.Z, (0, r.Z)({}, e, { renderSelector: t }));
                };
        },
        557707: (e, t, n) => {
            n.d(t, { ZP: () => k });
            var r = n(807896),
                o = n(202784),
                a = n(466999),
                i = n(325686),
                s = n(674132),
                l = n.n(s),
                c = n(837020),
                d = n(540820),
                p = n(731708),
                h = n(154003),
                u = n(108362),
                m = n(661810),
                g = n(365023),
                b = n(292627),
                f = n(537392),
                y = n(392237);
            const C = l().af8fa2ae,
                w = o.createElement(c.default, null);
            class x extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAriaOnly = () => {
                            const { testID: e, text: t } = this.props;
                            return o.createElement(i.Z, { role: "alert", style: y.default.visuallyHidden, testID: e }, o.createElement(a.Z, null, t));
                        }),
                        (this._renderIcon = () => {
                            const { variant: e } = this.props;
                            return "jp-holiday-labor-thanksgiving" === e?.type && o.createElement(d.default, { style: _.icon });
                        }),
                        (this._renderDecoration = () => {
                            const { variant: e } = this.props;
                            return "jp-holiday-labor-thanksgiving" === e?.type && o.createElement(i.Z, null, o.createElement(p.ZP, { color: "whiteOnColor", style: _.titleText }, e.payload.message), o.createElement(m.Z, { spacing: "space12", style: _.divider }));
                        }),
                        (this._renderContent = () => {
                            const { action: e, text: t, withAutoDismiss: n, withClearButton: r } = this.props;
                            return o.createElement(o.Fragment, null, o.createElement(p.ZP, { color: "whiteOnColor", style: _.titleText }, t), o.createElement(i.Z, { "aria-hidden": n, style: _.actionButtons }, e && this._renderActionLabel(e), r && o.createElement(h.ZP, { "aria-label": C, borderColor: "transparent", color: "white", icon: w, onPress: this._handleClose, style: _.closeButton })));
                        }),
                        (this._renderVariantContent = () => {
                            const { variant: e } = this.props;
                            if (e)
                                switch (e.type) {
                                    case "jp-holiday-labor-thanksgiving": {
                                        const e = this._renderContent();
                                        return o.createElement(o.Fragment, null, this._renderIcon(), o.createElement(i.Z, { style: _.body }, this._renderDecoration(), o.createElement(i.Z, { style: _.content }, e)));
                                    }
                                    case "jetfuel":
                                        return o.createElement(o.Fragment, null, e.payload.body);
                                }
                            return null;
                        }),
                        (this._getRootVariantStyle = () => {
                            const { variant: e } = this.props;
                            if (e)
                                switch (e.type) {
                                    case "jp-holiday-labor-thanksgiving":
                                        return _.rootVariantJp;
                                    case "jetfuel":
                                        return _.rootVariantJetfuel;
                                }
                            return null;
                        }),
                        (this._renderContentWithLayer = ({ windowWidth: e }) => {
                            const { LayerComponent: t, style: n, testID: a, variant: s } = this.props,
                                l = n?.length ? [...n] : [n],
                                c = s ? this._renderVariantContent() : this._renderContent();
                            return o.createElement(
                                t,
                                null,
                                o.createElement(
                                    u.Z,
                                    { style: _.noPointerEvents },
                                    o.createElement(g.Z, { id: "Toast" }, (t, n) => o.createElement(i.Z, (0, r.Z)({ ref: t() }, n({ role: "alert", style: [_.root, s && this._getRootVariantStyle(), ...l, e > y.default.theme.breakpoints.medium && _.rootWide], testID: a })), c)),
                                ),
                            );
                        }),
                        (this._renderContentWithoutLayer = ({ windowWidth: e }) => {
                            const { testID: t } = this.props;
                            return o.createElement(u.Z, null, o.createElement(i.Z, { role: "alert", style: [_.root, e > y.default.theme.breakpoints.medium && _.rootWide], testID: t }, this._renderContent()));
                        }),
                        (this._createTimer = () => {
                            const { action: e, autoDismissDelay: t, onClose: n, text: r, withAutoDismiss: o } = this.props;
                            if (o) {
                                const o = t || x.calculateDismissDelay(r, !!e);
                                this._timerId = setTimeout(n, o);
                            }
                        }),
                        (this._handleActionPress = (e) => {
                            this._stopTimer();
                            const { action: t, onClose: n } = this.props;
                            t?.onAction && t.onAction(e), n(e);
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
                    return e ? this._renderAriaOnly() : o.createElement(f.ZP, null, t ? this._renderContentWithoutLayer : this._renderContentWithLayer);
                }
                _renderActionLabel(e) {
                    const { label: t, link: n } = e;
                    return o.createElement(p.ZP, { children: t, color: "whiteOnColor", link: n, onClick: this._handleActionPress, style: [_.actionText, !n && _.actionMargin], weight: "bold", withInteractiveStyling: !0 });
                }
                static calculateDismissDelay(e, t) {
                    const n = (1e3 * ("string" == typeof e ? e.split(" ").length : 0)) / 5 + 225;
                    return (n < 4e3 ? 4e3 : n) + (t ? 2e3 : 0);
                }
                _stopTimer() {
                    clearTimeout(this._timerId);
                }
            }
            x.defaultProps = { withAutoDismiss: !0, withClearButton: !1, LayerComponent: b.Z.ModalToasts };
            const _ = y.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.primary, flexDirection: "row", justifyContent: "space-between", padding: e.spaces.space12, pointerEvents: "auto" }, rootVariantJp: { alignItems: "flex-start", backgroundColor: e.colors.green500, pointerEvents: "auto", flexDirection: "row", padding: e.spaces.space12 }, rootVariantJetfuel: { flexDirection: "column", alignItems: "center", backgroundColor: "transparent" }, icon: { flexShrink: 0, width: 50, height: 50 }, noPointerEvents: { pointerEvents: "none" }, body: { flexShrink: 1 }, divider: { marginHorizontal: e.spaces.space12, backgroundColor: e.colors.white }, content: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, rootWide: { alignSelf: "center", borderRadius: e.borderRadii.small, marginBottom: e.spaces.space32 }, titleText: { flexShrink: 1, paddingHorizontal: e.spaces.space12 }, actionText: { alignSelf: "center", whiteSpace: "nowrap", marginEnd: e.spaces.space12 }, actionButtons: { flexDirection: "row" }, actionMargin: { marginHorizontal: e.spaces.space12 }, closeButton: { marginStart: e.spaces.space12, paddingHorizontal: e.spaces.space4 } })),
                k = x;
        },
        183806: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-e907d115.67912fda.js.map

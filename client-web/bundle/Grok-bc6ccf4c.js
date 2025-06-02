"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-bc6ccf4c", "shared~loader.JetfuelFrame~loader.TimelineFrameHandler~loader.PremiumLoaders~icons/IconAccountsStroke-js~icon"],
    {
        15038: (e, t, r) => {
            r.d(t, { ZP: () => d });
            var i = r(202784),
                l = r(325686),
                a = r(950822),
                n = r(392237);
            const o = (e) => (0, a.Z)("div", e);
            class s extends i.Component {
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
                    const { activeStyle: e, allowDragDrop: t, children: r, style: a } = this.props,
                        { active: n } = this.state,
                        s = t ? c.dragBorderValid : c.dragBorderInvalid;
                    return i.createElement(o, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [c.root, a, n && s, n && e] }, i.createElement(l.Z, { style: c.inner }, "function" == typeof r ? r(n) : r));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            s.defaultProps = { allowDragDrop: !0 };
            const c = n.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                d = s;
        },
        525271: (e, t, r) => {
            r.d(t, { Z: () => E });
            var i = r(202784),
                l = r(325686),
                a = r(111677),
                n = r.n(a),
                o = r(837020),
                s = r(461756),
                c = r(786998),
                d = r(154003),
                h = r(950822),
                m = r(743618),
                p = r(745153),
                u = r(292627),
                g = r(224162),
                v = r(392237);
            const b = n().af8fa2ae,
                f = i.createElement(o.default, null);
            class y extends i.Component {
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
                            const { altKey: t, ctrlKey: r, key: i, metaKey: l } = e;
                            !(t || r || l) && "Escape" === i && this._handleDismiss();
                        }),
                        (this._handleDismiss = () => {
                            this.setState({ isVisible: !1 }), s.Z.reducedMotionEnabled && this.props.onDismissed();
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
                    const { additionalControl: e, align: t, buttonType: r, children: a, style: n, subtitle: o, title: d, topBarStyle: v, withBackgroundBlur: b, withTopBar: f, withTransparentMask: y } = this.props,
                        { isVisible: E } = this.state;
                    return i.createElement(g.ZP.Consumer, null, ({ direction: g }) => {
                        const Z = "rtl" === g,
                            x = E ? w.visibleDrawer : ("left" === t) === Z ? w.offscreenRightDrawer : w.offscreenLeftDrawer,
                            z = E && !y ? w.maskWithBg : w.maskTransparent,
                            D = E ? w.animateOpen : w.animateClose,
                            k = s.Z.reducedMotionEnabled ? null : D;
                        return i.createElement(u.Z.Modal, null, i.createElement(p.Z, null, i.createElement(m.Z, null, i.createElement(l.Z, { onClick: this._handleMaskClick, onKeyUp: this._handleEsc, style: [w.mask, z, k, b ? w.backgroundBlur : null, "left" === t ? w.alignLeft : w.alignRight] }, (0, h.Z)("div", { role: "dialog", onTransitionEnd: this._handleTransitionEnd, ref: this._setAnimationNode, onClick: C, style: [w.root, b ? w.backgroundRootBlur : null, x, k, n], children: i.createElement(i.Fragment, null, f ? i.createElement(c.Z, { leftControl: "left" === t ? e : "right" === t ? this._renderCloseButton(r) : null, rightControl: "left" === t ? this._renderCloseButton(r) : "right" === t ? e : null, style: v, subtitle: o, title: d }) : null, i.createElement(l.Z, { style: w.contentContainer }, a)) })))));
                    });
                }
                _renderCloseButton(e) {
                    return i.createElement(d.ZP, { "aria-label": b, icon: f, onPress: this._handleMaskClick, type: e });
                }
            }
            y.defaultProps = { align: "left", onDismissed: () => {}, withTopBar: !0 };
            const C = (e) => {
                    e.stopPropagation();
                },
                w = v.default.create((e) => ({ backgroundBlur: { backdropFilter: "blur(2px)" }, backgroundRootBlur: { boxShadow: "light" === e.paletteName ? e.boxShadows.small : "0 0 5px rgba(80,80,80,0.2), 0 1px 4px 1px rgba(80,80,80,0.25)" }, mask: { ...v.default.absoluteFillObject, position: "fixed", transitionProperty: "background-color", transitionTimingFunction: "ease" }, maskWithBg: { backgroundColor: e.colors.maskColor }, maskTransparent: { backgroundColor: e.colors.transparent }, root: { display: "flex", flexDirection: "column", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.small, minWidth: 280, maxWidth: "100%", flexGrow: 1, flexShrink: 1, minHeight: 0, height: "100vh", transitionProperty: "transform", transitionTimingFunction: "ease" }, visibleDrawer: { transform: [{ translateX: "0%" }] }, offscreenLeftDrawer: { transform: [{ translateX: "-100%" }] }, offscreenRightDrawer: { transform: [{ translateX: "100%" }] }, alignLeft: { alignItems: "flex-start" }, alignRight: { alignItems: "flex-end" }, animateOpen: { transitionDuration: "250ms" }, animateClose: { transitionDuration: "200ms" }, contentContainer: { flexGrow: 1, flexShrink: 1, minHeight: 0, overflowY: "auto", overscrollBehavior: "contain" } })),
                E = y;
        },
        449161: (e, t, r) => {
            r.d(t, { Z: () => u });
            var i = r(807896),
                l = r(202784),
                a = r(111677),
                n = r.n(a),
                o = r(154003),
                s = r(950822),
                c = r(392237);
            const d = n().i5450bec,
                h = n().f7432494;
            class m extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            const { onPress: t } = this.props;
                            t && t(e), this._fileInput && this._fileInput.click();
                        }),
                        (this._handleChange = (e) => {
                            const { onChange: t } = this.props,
                                r = e.target,
                                i = r.files;
                            i.length && t && t(i), (r.value = "");
                        }),
                        (this._handleFileInputButtonRef = (e) => {
                            this._fileInput = e;
                        });
                }
                render() {
                    const { accept: e, disabled: t, multiple: r, onChange: a, testID: n, ...c } = this.props,
                        m = !(e?.includes("video") || e?.includes("gif"));
                    return l.createElement(l.Fragment, null, l.createElement(o.ZP, (0, i.Z)({ hoverLabel: e ? { label: m ? h : d } : void 0 }, c, { disabled: t, onPress: this._handlePress })), (0, s.Z)("input", { accept: e, disabled: t, multiple: r, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: p.input, tabIndex: -1, testID: n, type: "file" }));
                }
            }
            m.defaultProps = { disabled: !1, multiple: !1 };
            const p = c.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                u = m;
        },
        403556: (e, t, r) => {
            r.d(t, { Z: () => z });
            var i = r(807896),
                l = r(202784),
                a = r(194504),
                n = r(235902),
                o = r(392237),
                s = r(325686),
                c = r(111677),
                d = r.n(c),
                h = r(912021),
                m = r(516951),
                p = r(731708),
                u = r(310088),
                g = r(175993),
                v = r(58881),
                b = r(530732);
            const f = d().d2414d31,
                y = () => d().ce4e85ae,
                C = d().fb9f6f39;
            class w extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, h.Z)((e, t) => {
                            const { pathname: r, query: i, state: l } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: r, query: i, method: "push", state: { ...l, lockScroll: t } };
                        })),
                        (this._unlisten = m.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, r, i) => {
                            const l = o.default.theme.colors.text,
                                a = o.default.theme.colors.gray700;
                            return r || i ? (e || t ? l : a) : e ? l : a;
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
                    const { Icon: e, "aria-label": t, badgeCount: r, badgePip: i, children: a, color: n, isActive: c, isCompact: d, isPillLink: h, isRoundedRect: m, isWebRedesign: g, retainScrollPosition: w, style: Z, to: x } = this.props,
                        { location: z } = this.state,
                        D = x ? this._getMemoizedLink(x, w) : void 0,
                        k = c ? c(x) : z?.pathname === D?.pathname,
                        B = v.Z.generate({ backgroundColor: "transparent", color: o.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: h ? E.pillHoverStyle.backgroundColor : void 0 }),
                        M = g ? "medium" : k ? "bold" : "medium";
                    return l.createElement(b.Z, { "aria-label": t, "aria-selected": k, focusable: !!k, interactiveStyles: B, link: D, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(h ? [E.pillStyle] : [E.link]), ...(h && k ? [E.pillActiveStyle] : []), d ? (h ? E.compactPill : E.compactLink) : null, m ? E.roundedRect : null, Z], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => l.createElement(s.Z, { style: h && E.flexGrow }, l.createElement(p.ZP, { size: g ? "headline2" : void 0, style: [E.text, { color: this._getTextColor(k, c, g, h) }, d && E.compactText, g && t && E.focusedText, h && E.pillTextStyle, h && k && E.pillActiveTextStyle, h && c && E.pillHoverTextStyle], weight: M }, e && l.createElement(e, { style: E.icon }), a, g || h ? null : l.createElement(s.Z, { style: k && [E.border, { backgroundColor: o.default.theme.colors[n] }] })), r ? l.createElement(u.Z, { count: r, standalone: !0, style: [E.badge, r >= 10 && E.multiDigitBadge, r >= 20 && E.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: f, withBorder: !1 }) : i ? l.createElement(u.Z, { pip: !0, standalone: !0, style: E.badgePip, textColor: "red500", unreadCountLabel: y, withBorder: !1 }) : null));
                }
            }
            (w.contextType = g.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const E = o.default.create((e) => ({
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
                Z = w,
                x = o.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                z = ({ alignFirstItem: e, "aria-label": t, isCompact: r, isPillLink: o, isRoundedRect: s, links: c, style: d, visibleItemIndex: h }) => {
                    const m = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: p } = n.ZP.useProps(),
                        u = p() && !o,
                        g = l.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...n }, c) => {
                                    const d = u ? [x.linkRedesign, 0 === c && x.firstLinkRedesign, e && 0 === c && x.withNoPaddingStart] : void 0;
                                    return l.createElement(Z, (0, i.Z)({ viewType: a }, n, { isCompact: r, isPillLink: o, isRoundedRect: s, isWebRedesign: u, style: d }), t);
                                }),
                            [e, r, o, s, u, c],
                        );
                    return l.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: o && x.gap, childrenStyle: !u && x.flexGrow, key: m, style: [o ? null : x.segmentedControl, u && x.leftAligned, d], visibleItemIndex: h }, g);
                };
        },
        782947: (e, t, r) => {
            r.d(t, { Z: () => b });
            var i = r(807896),
                l = r(202784),
                a = r(896632),
                n = r(325686),
                o = r(711223),
                s = r(516951),
                c = r(731708),
                d = r(868634),
                h = r(952428),
                m = r(352924),
                p = r(392237);
            const u = p.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.cellBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding8: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, boxShadow: { boxShadow: e.boxShadows.medium }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 1 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column" }, row: { flexDirection: "row", alignItems: "center" }, marginTop4: { marginTop: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, info: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space8 }, infoIcon: { fontSize: ".74em", color: e.colors.gray700 }, backgroundTransparent: { backgroundColor: e.colors.transparent }, pill: { marginBottom: e.spaces.space4 }, inlinePill: { marginStart: e.spaces.space4 } })),
                g = { ...p.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                v = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": r, checked: i, dedicatedPillRow: a, description: p, disabled: v, disabledInlineCallout: b, endContent: f, horizontal: y, illustration: C, infoLabel: w, infoLabelType: E, inlineCallout: Z, label: x, name: z, onChange: D, pillText: k, pillType: B, reverseLabels: M, secondaryContent: _, secondaryDescription: S, switchStyle: L, testID: V }) => {
                    const H = (0, m.b)(),
                        T = (0, m.b)(),
                        I = (0, m.b)(),
                        P = l.createElement(c.ZP, { color: L ? (i ? "text" : "gray800") : "text", id: H, role: "label", size: L ? "body" : "headline2", testID: "headline-label", weight: L ? "normal" : "bold" }, x),
                        W = !!p && l.createElement(c.ZP, { color: "gray700", id: T, size: "subtext1", style: k ? u.descriptionWithPill : u.description, testID: "description-label" }, p),
                        R = l.createElement(c.ZP, { color: "gray700", role: "label", size: "subtext2", style: u.description }, S),
                        F = k ? l.createElement(d.ZP, { style: a ? u.pill : u.inlinePill, type: B }, k) : null,
                        A = l.createElement(l.Fragment, null, a ? F : null, l.createElement(n.Z, { style: [u.row, w && u.marginBottom8] }, M ? W : P, a ? null : F), l.createElement(n.Z, { style: [u.row, M && u.marginTop4] }, M ? P : W), _ || (S ? R : void 0)),
                        j = L ? "unset" : (r ? 100 / r : 100) + "%",
                        $ = L ? [u.padding8, u.borderRadiusLarge, i ? u.backgroundDefault : u.backgroundTransparent] : [u.padding16, u.boxShadow, u.borderRadiusLarge, i ? u.checked : null, u.backgroundDefault];
                    return l.createElement(l.Fragment, null, l.createElement(h.Z, { disabled: v, style: [u.root, ...$, y ? { maxWidth: j, ...u.grow } : null, 1 === t || y ? null : u.withMarginTop, t !== r && y && !L && u.withMarginEnd, !v && u.interactive], testID: V, withInteractiveStyling: !L }, !!C && l.createElement(n.Z, { style: u.iconContainer, testID: "illustration" }, C), l.createElement(n.Z, { style: [u.labelContainer, L && u.alignCenter] }, !!w && l.createElement(n.Z, { style: u.info }, l.createElement(d.ZP, { background: "green" === E ? "green500" : "red" === E ? "magenta500" : "yellow" === E ? "orange50" : "gray500" }, l.createElement(c.ZP, { color: "yellow" === E ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, w)), "red" !== E && "yellow" !== E && l.createElement(o.default, { style: u.infoIcon, testID: "infoIcon" })), A, i && !!Z && l.createElement(n.Z, { style: u.inlineCalloutContainer, testID: "inlineCallout" }, Z)), !!f && l.createElement(n.Z, { style: u.endContentContainer, testID: "endContent" }, l.createElement(c.ZP, { id: I, size: "subtext1", weight: "bold" }, f)), l.createElement("input", { "aria-describedby": `${T} ${I}`, "aria-label": e, "aria-labelledby": H, "aria-posinset": t, "aria-setsize": r, checked: i, disabled: v, name: z, onChange: i ? s.Z : D, style: g, type: "radio" })), v && b ? b : null);
                },
                b = (e) => {
                    const t = l.useCallback(({ value: e, ...t }) => l.createElement(v, (0, i.Z)({}, t, { key: e })), []);
                    return l.createElement(a.Z, (0, i.Z)({}, e, { renderSelector: t }));
                };
        },
        557707: (e, t, r) => {
            r.d(t, { ZP: () => Z });
            var i = r(807896),
                l = r(202784),
                a = r(466999),
                n = r(325686),
                o = r(111677),
                s = r.n(o),
                c = r(837020),
                d = r(540820),
                h = r(731708),
                m = r(154003),
                p = r(108362),
                u = r(661810),
                g = r(365023),
                v = r(292627),
                b = r(537392),
                f = r(392237);
            const y = s().af8fa2ae,
                C = l.createElement(c.default, null);
            class w extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderAriaOnly = () => {
                            const { testID: e, text: t } = this.props;
                            return l.createElement(n.Z, { role: "alert", style: f.default.visuallyHidden, testID: e }, l.createElement(a.Z, null, t));
                        }),
                        (this._renderIcon = () => {
                            const { variant: e } = this.props;
                            return "jp-holiday-labor-thanksgiving" === e?.type && l.createElement(d.default, { style: E.icon });
                        }),
                        (this._renderDecoration = () => {
                            const { variant: e } = this.props;
                            return "jp-holiday-labor-thanksgiving" === e?.type && l.createElement(n.Z, null, l.createElement(h.ZP, { color: "whiteOnColor", style: E.titleText }, e.payload.message), l.createElement(u.Z, { spacing: "space12", style: E.divider }));
                        }),
                        (this._renderContent = () => {
                            const { action: e, text: t, withAutoDismiss: r, withClearButton: i } = this.props;
                            return l.createElement(l.Fragment, null, l.createElement(h.ZP, { color: "whiteOnColor", style: E.titleText }, t), l.createElement(n.Z, { "aria-hidden": r, style: E.actionButtons }, e && this._renderActionLabel(e), i && l.createElement(m.ZP, { "aria-label": y, borderColor: "transparent", color: "white", icon: C, onPress: this._handleClose, style: E.closeButton })));
                        }),
                        (this._renderVariantContent = () => {
                            const { variant: e } = this.props;
                            if (e)
                                switch (e.type) {
                                    case "jp-holiday-labor-thanksgiving": {
                                        const e = this._renderContent();
                                        return l.createElement(l.Fragment, null, this._renderIcon(), l.createElement(n.Z, { style: E.body }, this._renderDecoration(), l.createElement(n.Z, { style: E.content }, e)));
                                    }
                                    case "jetfuel":
                                        return l.createElement(l.Fragment, null, e.payload.body);
                                }
                            return null;
                        }),
                        (this._getRootVariantStyle = () => {
                            const { variant: e } = this.props;
                            if (e)
                                switch (e.type) {
                                    case "jp-holiday-labor-thanksgiving":
                                        return E.rootVariantJp;
                                    case "jetfuel":
                                        return E.rootVariantJetfuel;
                                }
                            return null;
                        }),
                        (this._renderContentWithLayer = ({ windowWidth: e }) => {
                            const { LayerComponent: t, style: r, testID: a, variant: o } = this.props,
                                s = r?.length ? [...r] : [r],
                                c = o ? this._renderVariantContent() : this._renderContent();
                            return l.createElement(
                                t,
                                null,
                                l.createElement(
                                    p.Z,
                                    { style: E.noPointerEvents },
                                    l.createElement(g.Z, { id: "Toast" }, (t, r) => l.createElement(n.Z, (0, i.Z)({ ref: t() }, r({ role: "alert", style: [E.root, o && this._getRootVariantStyle(), ...s, e > f.default.theme.breakpoints.medium && E.rootWide], testID: a })), c)),
                                ),
                            );
                        }),
                        (this._renderContentWithoutLayer = ({ windowWidth: e }) => {
                            const { testID: t } = this.props;
                            return l.createElement(p.Z, null, l.createElement(n.Z, { role: "alert", style: [E.root, e > f.default.theme.breakpoints.medium && E.rootWide], testID: t }, this._renderContent()));
                        }),
                        (this._createTimer = () => {
                            const { action: e, autoDismissDelay: t, onClose: r, text: i, withAutoDismiss: l } = this.props;
                            if (l) {
                                const l = t || w.calculateDismissDelay(i, !!e);
                                this._timerId = setTimeout(r, l);
                            }
                        }),
                        (this._handleActionPress = (e) => {
                            this._stopTimer();
                            const { action: t, onClose: r } = this.props;
                            t?.onAction && t.onAction(e), r(e);
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
                    return e ? this._renderAriaOnly() : l.createElement(b.ZP, null, t ? this._renderContentWithoutLayer : this._renderContentWithLayer);
                }
                _renderActionLabel(e) {
                    const { label: t, link: r } = e;
                    return l.createElement(h.ZP, { children: t, color: "whiteOnColor", link: r, onClick: this._handleActionPress, style: [E.actionText, !r && E.actionMargin], weight: "bold", withInteractiveStyling: !0 });
                }
                static calculateDismissDelay(e, t) {
                    const r = (1e3 * ("string" == typeof e ? e.split(" ").length : 0)) / 5 + 225;
                    return (r < 4e3 ? 4e3 : r) + (t ? 2e3 : 0);
                }
                _stopTimer() {
                    clearTimeout(this._timerId);
                }
            }
            w.defaultProps = { withAutoDismiss: !0, withClearButton: !1, LayerComponent: v.Z.ModalToasts };
            const E = f.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.primary, flexDirection: "row", justifyContent: "space-between", padding: e.spaces.space12, pointerEvents: "auto" }, rootVariantJp: { alignItems: "flex-start", backgroundColor: e.colors.green500, pointerEvents: "auto", flexDirection: "row", padding: e.spaces.space12 }, rootVariantJetfuel: { flexDirection: "column", alignItems: "center", backgroundColor: "transparent" }, icon: { flexShrink: 0, width: 50, height: 50 }, noPointerEvents: { pointerEvents: "none" }, body: { flexShrink: 1 }, divider: { marginHorizontal: e.spaces.space12, backgroundColor: e.colors.white }, content: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, rootWide: { alignSelf: "center", borderRadius: e.borderRadii.small, marginBottom: e.spaces.space32 }, titleText: { flexShrink: 1, paddingHorizontal: e.spaces.space12 }, actionText: { alignSelf: "center", whiteSpace: "nowrap", marginEnd: e.spaces.space12 }, actionButtons: { flexDirection: "row" }, actionMargin: { marginHorizontal: e.spaces.space12 }, closeButton: { marginStart: e.spaces.space12, paddingHorizontal: e.spaces.space4 } })),
                Z = w;
        },
        183806: (e, t, r) => {
            r.d(t, { Z: () => i });
            const i = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        68657: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M15 5V3h3V0h2v3h3v2h-3v3h-2V5h-3zm-3-1.19c-.33-.04-.66-.06-1-.06-4.56 0-8.25 3.69-8.25 8.25 0 2.25.9 4.28 2.35 5.77C6.51 16.08 8.63 15 11 15s4.49 1.08 5.9 2.77c1.45-1.49 2.35-3.52 2.35-5.77 0-.34-.02-.67-.06-1h2.01c.03.33.05.66.05 1 0 5.66-4.59 10.25-10.25 10.25S.75 17.66.75 12 5.34 1.75 11 1.75c.34 0 .67.02 1 .05v2.01zM6.66 19.02c1.26.78 2.75 1.23 4.34 1.23s3.08-.45 4.34-1.23C14.3 17.78 12.74 17 11 17s-3.3.78-4.34 2.02zm6.09-8.77c0 .97-.78 1.75-1.75 1.75s-1.75-.78-1.75-1.75S10.03 8.5 11 8.5s1.75.78 1.75 1.75zM11 14c2.07 0 3.75-1.68 3.75-3.75S13.07 6.5 11 6.5s-3.75 1.68-3.75 3.75S8.93 14 11 14z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        264655: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M4.159 6.393l-2.409.89 2.366 3.56L3.5 12l.272.68c.404 1.01 1.544 1.512 2.563 1.128L10 12.426l.401 3.344 2.89-1.07 2.209-4.349 4.982-1.995c.615-.246 1.018-.842 1.018-1.505 0-.782-.56-1.453-1.33-1.594l-2.225-.407c-.36-.065-.727-.033-1.069.098-1.578.6-6.335 2.41-8.354 3.157-.572.212-1.207.154-1.733-.157L4.16 6.393zM2.5 19.5h19", fill: "none", stroke: "currentColor", strokeLinecap: "square", strokeWidth: "1.5" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        880616: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M8.598 12.516h-.926l.465-1.343.461 1.343zM18.5 3C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13C3 4.119 4.119 3 5.5 3h13zm-3.286 11.378h1.337v-3.457H18V9.654h-4.233v1.267h1.447v3.457zm-4.068 0h3.121v-1.349h-1.785V9.655h-1.336v4.723zm-4.107 0l.295-.843H8.93l.301.843h1.405l-1.76-4.757H7.51l-1.76 4.757h1.289z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        439421: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 1.75C6.339 1.75 1.75 6.34 1.75 12S6.339 22.25 12 22.25 22.25 17.66 22.25 12 17.661 1.75 12 1.75zm0 15.66l-4.457-4.45 1.414-1.42L11 13.59V7h2v6.59l2.043-2.05 1.414 1.42L12 17.41z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        732918: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M13 17h-2v-6.59l-2.043 2.05-1.414-1.42L12 6.59l4.457 4.45-1.414 1.42L13 10.41V17zm-1 5.25c5.661 0 10.25-4.59 10.25-10.25S17.661 1.75 12 1.75 1.75 6.34 1.75 12 6.339 22.25 12 22.25zM20.25 12c0 4.56-3.694 8.25-8.25 8.25S3.75 16.56 3.75 12 7.444 3.75 12 3.75s8.25 3.69 8.25 8.25z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        979826: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M14 .699V8.5h8.11L10 23.301V15.5H1.89L14 .699zM6.11 13.5H12v4.199l5.89-7.199H12V6.301L6.11 13.5z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        218568: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M14 .699V8.5h8.11L10 23.301V15.5H1.89L14 .699zM6.11 13.5H12v4.199l5.89-7.199H12V6.301L6.11 13.5zm12.47 6.499l-2.04-2.043 1.42-1.414L20 18.585l2.04-2.042 1.42 1.415-2.05 2.041 2.05 2.044-1.42 1.415L20 21.413l-2.04 2.04-1.42-1.415 2.04-2.039z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        954802: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M10.5 17c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm1.5-3c.5 0 1 .2 1 .2l.25-5.7h-2.5l.25 5.7s.5-.2 1-.2zm10.568 6.745c.451-.783.45-1.717-.002-2.496l-8.4-14.511C13.712 2.957 12.903 2.49 12 2.49s-1.711.467-2.165 1.249l-8.4 14.509c-.453.78-.454 1.714-.002 2.497C1.886 21.531 2.696 22 3.6 22h16.8c.905 0 1.715-.469 2.168-1.255zM12.435 4.741l8.4 14.511c.125.214.053.402 0 .495-.044.076-.174.253-.435.253H3.6c-.261 0-.391-.177-.435-.253-.053-.093-.125-.281 0-.495l8.4-14.51c.131-.228.348-.252.435-.252s.304.024.435.251z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        509848: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("rect", { height: "18", rx: "2", ry: "2", width: "20", x: "2", y: "3" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        467339: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M14.922 16.865v1c.378 0 .725-.214.894-.553l-.894-.447zm.973-1.946l.894.447c.225-.45.08-.997-.337-1.277l-.557.83zm-2.869-1.928l.558-.83c-.147-.098-.317-.156-.494-.168l-.064.998zm-1.89-.12l.064-.998c-.286-.018-.567.087-.77.29l.706.708zm-1.08 1.075l-.705-.708c-.338.337-.39.866-.126 1.263l.832-.555zm1.947 2.919l-.832.555c.185.278.498.445.832.445v-1zM4.772 7.27c-.442-.331-1.069-.242-1.4.2-.332.442-.242 1.068.2 1.4l1.2-1.6zm3.34 3.757l-.601.8c.237.178.54.241.828.174.288-.068.532-.26.665-.524l-.893-.45zm.977-1.941l-.244-.97c-.282.07-.518.26-.65.52l.894.45zm3.887-.978l.244.97c.358-.09.637-.37.726-.727l-.97-.243zm2.12-4.357c.134-.535-.192-1.078-.727-1.212-.536-.134-1.08.191-1.213.727l1.94.485zM20 12c0 4.418-3.582 8-8 8v2c5.523 0 10-4.477 10-10h-2zm-8 8c-4.418 0-8-3.582-8-8H2c0 5.523 4.477 10 10 10v-2zm-8-8c0-4.418 3.582-8 8-8V2C6.477 2 2 6.477 2 12h2zm8-8c4.418 0 8 3.582 8 8h2c0-5.523-4.477-10-10-10v2zm3.816 13.312l.973-1.946L15 14.472l-.973 1.946 1.79.894zm.636-3.223l-2.868-1.928-1.115 1.66 2.868 1.928 1.116-1.66zm-3.362-2.096l-1.89-.12-.128 1.996 1.89.12.128-1.996zm-2.66.17l-1.079 1.075 1.412 1.416 1.079-1.075-1.412-1.417zM9.225 14.5l1.946 2.919 1.664-1.11-1.946-2.919-1.664 1.11zm2.778 3.364h2.919v-2h-2.92v2zM3.57 8.87l3.94 2.957 1.2-1.6L4.77 7.27l-1.2 1.6zm5.433 2.607l.978-1.941-1.786-.9-.978 1.941 1.786.9zm.329-1.421l3.887-.978-.488-1.94-3.887.978.488 1.94zm4.613-1.705l1.15-4.6-1.94-.485-1.15 4.6 1.94.485z", fill: "currentColor" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        464653: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M8.5 3C9.881 3 11 4.12 11 5.5v3C11 9.88 9.881 11 8.5 11h-3C4.119 11 3 9.88 3 8.5v-3C3 4.12 4.119 3 5.5 3h3zm7 0C14.119 3 13 4.12 13 5.5v3c0 1.38 1.119 2.5 2.5 2.5h3c1.381 0 2.5-1.12 2.5-2.5v-3C21 4.12 19.881 3 18.5 3h-3zM13 18.5c0 1.38 1.119 2.5 2.5 2.5h3c1.381 0 2.5-1.12 2.5-2.5v-3c0-1.38-1.119-2.5-2.5-2.5h-3c-1.381 0-2.5 1.12-2.5 2.5v3zM5.5 13C4.119 13 3 14.12 3 15.5v3C3 19.88 4.119 21 5.5 21h3c1.381 0 2.5-1.12 2.5-2.5v-3c0-1.38-1.119-2.5-2.5-2.5h-3z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        964719: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 22 22", children: i.createElement("g", null, i.createElement("path", { d: "M1.833 5.905c0-1.265 1.027-2.292 2.292-2.292h5.958v1.834H4.125c-.257 0-.459.201-.459.458v11.917c0 .256.202.458.459.458h13.75c.247 0 .458-.202.458-.458v-5.959h1.833v5.959c0 1.265-1.026 2.291-2.291 2.291H4.125c-1.265 0-2.292-1.026-2.292-2.291V5.905z" }), i.createElement("path", { d: "M16.139 2.467c.147-.148.323-.266.516-.346.193-.08.4-.121.609-.121.209 0 .416.041.609.121.193.08.368.198.516.346l2.149 2.147c.296.299.462.703.462 1.123 0 .421-.166.825-.462 1.124L13.392 14H9V9.606l7.139-7.14zm1.347.899c-.029-.03-.064-.053-.102-.07-.038-.015-.079-.023-.12-.023-.042 0-.083.008-.12.024-.039.016-.074.04-.103.069l-6.77 6.766v2.597h2.6l6.764-6.767c.03-.029.054-.064.07-.102.017-.039.025-.08.025-.123 0-.041-.008-.083-.025-.122-.016-.038-.04-.073-.07-.103l-2.149-2.146z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 22, height: 22 };
            const s = o;
        },
        61020: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { clipRule: "evenodd", d: "M18 2H6C3.79 2 2 3.79 2 6v12c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm-6.07 8.25L6.644 17.8h2.515l4.566-6.52v.532h.611v.782h.612v.781h3.671v-.781h.612v-.782h.612v-.781h.612v-.782h.612v-.781h-6.073l2.274-3.248h-2.515l-2.274 3.248H2.934v.781h.612v.782h.612v.781h.612v.782h.612v.781h3.67v-.781h.613v-.782h.611v-.781h.612v-.782h1.043z", fillRule: "evenodd", xmlns: "http://www.w3.org/2000/svg" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        208097: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 200 200", children: i.createElement("g", null, i.createElement("circle", { cx: "100", cy: "100", fill: "#97E3FF", r: "100" }), i.createElement("path", { d: "M68.6 108.4V90.542H100v-48.41c-31.958 0-57.867 25.91-57.867 57.868s25.91 57.867 57.867 57.867V108.41H68.6v-.01z", fill: "#005FD1" }), i.createElement("path", { d: "M100 42.133V90.54h31.4v17.86H100v49.458c31.958 0 57.867-25.908 57.867-57.867S131.957 42.134 100 42.134z", fill: "#1DA1F2" }), i.createElement("path", { d: "M100 90.542h31.4V108.4H100z", fill: "#97E3FF" }), i.createElement("path", { d: "M68.6 90.542H100V108.4H68.6z", fill: "#71C9F8" })) }, { writingDirection: t });
            };
            o.metadata = { width: 200, height: 200 };
            const s = o;
        },
        173304: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M18.5 3h-13C4.119 3 3 4.119 3 5.5v13C3 19.881 4.119 21 5.5 21h13c1.381 0 2.5-1.119 2.5-2.5v-13C21 4.119 19.881 3 18.5 3zM8.505 14.397H6.001V9.601H7.3l.002 3.534h1.203v1.262zm2.024 0H9.23V9.601h1.299v4.796zm3.092.003h-1.473l-1.011-4.799h1.3l.447 2.86.449-2.86h1.297L13.621 14.4zM18 10.862l-1.452.002v.569h1.091v1.178h-1.09v.524H18v1.262h-2.75V9.602H18v1.26z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        74605: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 16 16", children: i.createElement("g", null, i.createElement("path", { d: "M8.667 1.334v2.667H7.333V1.334h1.334zM7.333 12.001v2.666h1.334v-2.666H7.333zm4.196-9.694L9.906 4.421l1.058.813 1.623-2.113-1.058-.814zm-6.493 8.46l-1.623 2.114 1.058.813 1.623-2.113-1.058-.814zm-.667-4.573l-2.55-.78-.39 1.273 2.55.78.39-1.273zm10.2 3.12l-2.55-.78-.39 1.273 2.552.78.388-1.273zm-.39-3.9l-2.55.78.39 1.273 2.55-.78-.39-1.273zm-10.2 3.12l-2.55.78.39 1.273 2.55-.78-.39-1.273zm2.115-4.113L4.47 2.307l-1.058.807 1.623 2.12 1.058-.813zm6.493 8.46l-1.623-2.114-1.058.814 1.623 2.113 1.058-.813z", fill: "#91969A" })) }, { writingDirection: t });
            };
            o.metadata = { width: 16, height: 16 };
            const s = o;
        },
        804796: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("ellipse", { cx: "11.5", cy: "9", fill: "none", rx: "9.75", ry: "4.25", stroke: "currentColor", strokeWidth: "1.5" }), i.createElement("path", { d: "M1.75 9v6c0 2.347 4.365 4.25 9.75 4.25s9.75-1.903 9.75-4.25V9M5.5 5.5l13 6.5", fill: "none", stroke: "currentColor", strokeWidth: "1.5" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        732146: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 3.75c-4.56 0-8.25 3.69-8.25 8.25s3.69 8.25 8.25 8.25 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM16 13H8v-2h8v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        101359: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M20 4.5c-1.378 0-2.5 1.121-2.5 2.5 0 .08.016.155.024.233l-2.392 1.548c-.811-.79-1.915-1.281-3.134-1.281-.635 0-1.238.135-1.786.374L8.21 5.144c.179-.344.29-.729.29-1.143 0-1.379-1.122-2.5-2.5-2.5s-2.5 1.121-2.5 2.5 1.122 2.5 2.5 2.5c.227 0 .443-.04.653-.097L8.61 9.073c-.683.789-1.112 1.805-1.112 2.929 0 .635.135 1.238.374 1.786l-1.686 1.236c-.481-.329-1.062-.522-1.688-.522-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3c0-.3-.058-.584-.14-.857L9.07 15.39c.789.683 1.805 1.112 2.929 1.112.615 0 1.201-.125 1.736-.35l1.125 1.575c-.224.374-.361.807-.361 1.274 0 1.379 1.122 2.5 2.5 2.5s2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5c-.177 0-.35.02-.517.055l-1.13-1.583c.706-.795 1.148-1.829 1.148-2.972 0-.541-.111-1.054-.287-1.535l2.287-1.48c.419.318.936.514 1.502.514 1.378 0 2.5-1.121 2.5-2.5s-1.122-2.5-2.5-2.5H20z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        119507: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M4 5.5C4 4.12 5.12 3 6.5 3h11C18.88 3 20 4.12 20 5.5v13c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 21 4 19.88 4 18.5v-13zM6.5 5c-.28 0-.5.22-.5.5v13c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-13c0-.28-.22-.5-.5-.5h-11zM0 18V6h2v12H0zm22 0V6h2v12h-2zm-11-7V8h2v3h3v2h-3v3h-2v-3H8v-2h3z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        825103: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M18 5V2h2v3h3v2h-3v3h-2V7h-3V5h3zM1 6.5C1 5.12 2.12 4 3.5 4H12v2H9v12h4v-8h2v8h3.5c.28 0 .5-.22.5-.5V13h2v4.5c0 1.38-1.12 2.5-2.5 2.5h-15C2.12 20 1 18.88 1 17.5v-11zM7 18V6H3.5c-.28 0-.5.22-.5.5v11c0 .28.22.5.5.5H7z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        107821: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M10 9V7h4v5l-2 1.5 2 1.5v2h-4v-5l2-1.5L10 9zm12.25 3c0 5.66-4.59 10.25-10.25 10.25S1.75 17.66 1.75 12 6.34 1.75 12 1.75 22.25 6.34 22.25 12zM12 20.25c4.56 0 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75 3.75 7.44 3.75 12s3.69 8.25 8.25 8.25z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        14420: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 3.75c-2.192 0-4.184.854-5.663 2.25H8v2H3V3h2v1.513C6.831 2.8 9.293 1.75 12 1.75c4.075 0 7.592 2.378 9.244 5.817l-1.803.866C18.11 5.661 15.277 3.75 12 3.75zm-1.768 4.604c.977-.977 2.559-.977 3.536 0l4.878 4.878c.977.977.977 2.559 0 3.536l-4.878 4.878c-.977.977-2.559.977-3.536 0l-4.878-4.878c-.977-.977-.977-2.559 0-3.536l4.878-4.878zm2.122 1.414c-.196-.195-.512-.195-.708 0l-4.878 4.878c-.195.196-.195.512 0 .708l4.878 4.878c.196.195.512.195.708 0l4.878-4.878c.195-.196.195-.512 0-.708l-4.878-4.878z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        630374: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M17.928 9.026l.095 3.545H19l.1-3.544h-1.172zm.586 5.394c.414 0 .667-.238.667-.623 0-.388-.252-.626-.666-.626-.41 0-.667.24-.667.627 0 .385.257.623.667.623zm-4.57-.11h.813l.278-1.384h.89l.15-.813h-.883l.198-.96h.875l.15-.805h-.864l.268-1.326h-.813l-.27 1.326h-.946l.263-1.326h-.81l-.27 1.326h-.846l-.154.806h.846l-.2.96h-.83l-.15.812h.824l-.278 1.384h.81l.277-1.384h.952l-.28 1.384zm-.578-2.124l.227-1.102h1.055l-.23 1.102h-1.052zm-5.889-.941c.388 0 .634.32.634.835s-.244.835-.636.835c-.385 0-.615-.315-.615-.835-.002-.524.23-.835.617-.835zM7.595 9C5.763 9 4.5 10.245 4.5 12.054c0 1.838 1.25 3.05 3.157 3.05.388 0 .765-.047 1.05-.13v-.598c-.204.073-.603.12-.995.12-1.556 0-2.542-.937-2.542-2.423 0-1.46.985-2.48 2.402-2.48 1.392 0 2.307.865 2.307 2.19 0 .744-.24 1.213-.61 1.213-.222 0-.35-.15-.35-.41v-1.94h-.74v.435h-.065c-.147-.325-.465-.515-.857-.515-.732 0-1.23.604-1.23 1.494 0 .93.505 1.544 1.267 1.544.425 0 .725-.19.88-.56h.065c.08.352.414.57.872.57.886 0 1.44-.728 1.44-1.892C10.55 10.106 9.348 9 7.594 9z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        668324: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 2c-2.15 0-4.27.53-5.82 1.05-1.09.37-2.15.82-3.18 1.33v7.64c0 2.8 1.16 5.57 3.49 7.3.86.64 1.82 1.29 2.74 1.78.88.48 1.88.9 2.77.9s1.89-.42 2.77-.9c.92-.49 1.88-1.14 2.74-1.78 2.33-1.73 3.49-4.5 3.49-7.3V4.38c-1.03-.51-2.09-.96-3.18-1.33C16.27 2.53 14.15 2 12 2zm-1 12.91l-3.21-3.2 1.42-1.42 1.79 1.8 3.79-3.8 1.42 1.42z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        277595: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M16 7V6c0-2.21-1.79-4-4-4S8 3.79 8 6v1H3v11.5C3 19.88 4.12 21 5.5 21h13c1.38 0 2.5-1.12 2.5-2.5V7h-5zm-6-1c0-1.1.9-2 2-2s2 .9 2 2v1h-4V6zm9 12.5c0 .28-.22.5-.5.5h-13c-.28 0-.5-.22-.5-.5V9h3v3h2V9h4v3h2V9h3v9.5z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        76745: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M14.25 12.25c1.243 0 2.25-1.007 2.25-2.25s-1.007-2.25-2.25-2.25m0 4.5c-.685 0-1.298-.306-1.711-.789m1.711.789v8m0-12.5C13.007 7.75 12 8.757 12 10c0 .558.203 1.068.539 1.461M14.25 7.75v-4m-1.711 7.711L9 15l-2-2-3 3M14.25 3.75h-9.5c-.552 0-1 .448-1 1v14.5c0 .552.448 1 1 1h9.5m0-16.5h5c.552 0 1 .448 1 1v14.5c0 .552-.448 1-1 1h-5", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        776933: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M3 5.5C3 4.12 4.12 3 5.5 3h13C19.88 3 21 4.12 21 5.5v13c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-13z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        109449: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M18.037 13.084c-.918 1.685-2.719 3.479-5.694 5.212l-.342.204-.343-.204c-2.976-1.733-4.777-3.527-5.696-5.212-.924-1.699-.958-3.303-.349-4.533.603-1.216 1.799-1.978 3.127-2.046 1.122-.061 2.289.381 3.261 1.366.971-.985 2.138-1.427 3.259-1.366 1.328.068 2.524.829 3.127 2.046.609 1.23.575 2.834-.349 4.533zM19.42 3.16l1.42 1.42-1.77 1.76-1.41-1.41 1.76-1.77zM13 .5h-2V3h2V.5zM.5 13H3v-2H.5v2zm2.66 6.42l1.42 1.42 1.76-1.77-1.41-1.41-1.77 1.76zM21 11v2h2.5v-2H21zM11 23.5h2V21h-2v2.5zm6.66-4.43l1.76 1.77 1.42-1.42-1.77-1.76-1.41 1.41zM6.34 4.93L4.58 3.16 3.16 4.58l1.77 1.76 1.41-1.41z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        729488: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 16 16", children: i.createElement("g", null, i.createElement("g", { fill: "#536471" }, i.createElement("path", { clipRule: "evenodd", d: "M8.003 14.102c3.368 0 6.099-2.73 6.099-6.099 0-3.367-2.73-6.098-6.099-6.098-3.367 0-6.098 2.73-6.098 6.098s2.73 6.099 6.098 6.099zm0 1.236c4.051 0 7.335-3.284 7.335-7.335 0-4.05-3.284-7.334-7.335-7.334C3.953.669.67 3.953.67 8.003c0 4.051 3.284 7.335 7.334 7.335z", fillRule: "evenodd" }), i.createElement("path", { d: "M12.204 5.58c-.302.127-.626.213-.967.251.348-.197.614-.511.74-.885-.325.183-.685.317-1.069.388-.307-.31-.744-.505-1.228-.505-.93 0-1.683.717-1.683 1.6 0 .126.015.248.043.365-1.399-.067-2.639-.704-3.469-1.672-.144.237-.227.512-.227.804 0 .555.297 1.046.748 1.332-.276-.008-.535-.08-.762-.2v.02c0 .776.58 1.423 1.35 1.57-.142.036-.29.056-.443.056-.109 0-.215-.01-.317-.029.214.636.836 1.099 1.572 1.111-.576.43-1.302.686-2.09.686-.136 0-.27-.008-.402-.023.745.455 1.63.72 2.58.72 3.096 0 4.789-2.439 4.789-4.554 0-.068-.002-.138-.005-.206.328-.226.614-.508.839-.828z" }))) }, { writingDirection: t });
            };
            o.metadata = { width: 16, height: 16 };
            const s = o;
        },
        2691: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                l = r(890601),
                a = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 55 9", children: i.createElement("g", null, i.createElement("path", { d: "M53 7.393C53 8.28 52.28 9 51.393 9h-5.786C44.72 9 44 8.28 44 7.393V1.607C44 .72 44.72 0 45.607 0h5.786C52.28 0 53 .72 53 1.607v5.786z", fill: "#BCBDBB" }), i.createElement("path", { d: "M51.556 3.792l-2.112-.31-.967-2.192v-.003L47.56 3.48l-2.11.307 1.525 1.494-.36 2.116 1.863-1.227 1.93 1.183-.38-2.067", fill: "#F0F0EF" }), i.createElement("path", { d: "M42 7.393C42 8.28 41.28 9 40.393 9h-5.786C33.72 9 33 8.28 33 7.393V1.607C33 .72 33.72 0 34.607 0h5.786C41.28 0 42 .72 42 1.607v5.786z", fill: "#BCBDBB" }), i.createElement("path", { d: "M40.556 3.792l-2.112-.31-.967-2.192v-.003L36.56 3.48l-2.11.307 1.525 1.494-.36 2.116 1.863-1.227 1.93 1.183-.38-2.067", fill: "#F0F0EF" }), i.createElement("path", { d: "M31 7.393C31 8.28 30.28 9 29.393 9h-5.786C22.72 9 22 8.28 22 7.393V1.607C22 .72 22.72 0 23.607 0h5.786C30.28 0 31 .72 31 1.607v5.786z", fill: "#BCBDBB" }), i.createElement("path", { d: "M29.557 3.792l-2.112-.31-.967-2.19-.917 2.188-2.11.307 1.526 1.494-.36 2.116L26.48 6.17l1.93 1.183-.38-2.067", fill: "#F0F0EF" }), i.createElement("path", { d: "M20 7.393C20 8.28 19.28 9 18.393 9h-5.786C11.72 9 11 8.28 11 7.393V1.607C11 .72 11.72 0 12.607 0h5.786C19.28 0 20 .72 20 1.607v5.786z", fill: "#BCBDBB" }), i.createElement("path", { d: "M18.556 3.792l-2.112-.31-.965-2.19-.92 2.188-2.11.307 1.526 1.494-.36 2.116L15.48 6.17l1.927 1.183-.378-2.067", fill: "#F0F0EF" }), i.createElement("path", { d: "M9 7.393C9 8.28 8.28 9 7.393 9H1.607C.72 9 0 8.28 0 7.393V1.607C0 .72.72 0 1.607 0h5.786C8.28 0 9 .72 9 1.607v5.786z", fill: "#C8881F" }), i.createElement("path", { d: "M7.556 3.792l-2.112-.31-.965-2.19-.92 2.188-2.11.307L2.977 5.28l-.36 2.116L4.48 6.17l1.927 1.183-.378-2.067", fill: "#FFF" })) }, { writingDirection: t });
            };
            o.metadata = { width: 55, height: 9 };
            const s = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-bc6ccf4c.7801ad2a.js.map

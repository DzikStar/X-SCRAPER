"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-bc6ccf4c", "icons/IconChevronRight-js", "icons/IconDeviceTablet-js", "icons/IconDeviceTv-js", "icons/IconFollowArrowLeft-js", "icons/IconIllustrationSafetyMute-js", "icons/IconSparkle-js"],
    {
        362075: (e, t, o) => {
            o.d(t, { Z: () => h });
            var r = o(807896),
                a = o(202784),
                i = o(325686),
                l = o(688715),
                n = o(950822),
                s = o(386802),
                c = o(392237);
            class d extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = a.createRef()),
                        (this._handleRef = (e) => {
                            (this._ref.current = e), this.props.forwardedRef && ("function" == typeof this.props.forwardedRef ? this.props.forwardedRef(e) : (this.props.forwardedRef.current = e));
                        }),
                        (this._handleMessage = (e) => {
                            const { onMessage: t, reportError: o } = this.props;
                            if (!t || ("string" == typeof e.data && 0 === e.data.indexOf("setImmediate$"))) return;
                            if (e.origin !== `${window.location.protocol}//${window.location.host}`) return o ? o(`Invalid cross-origin postMessage from ${e.origin}`) : null;
                            if (this._ref?.current?.contentWindow !== e.source) return;
                            let r;
                            if ((e.stopImmediatePropagation(), "string" == typeof e.data && "undefined" !== e.data)) {
                                try {
                                    r = JSON.parse(e.data);
                                } catch (t) {
                                    return void (o && o(`Invalid postMessage data from ${e.origin}: ${e.data}`));
                                }
                                t(r);
                            }
                        });
                }
                componentDidMount() {
                    var e;
                    this.props.onMessage && ((e = this._handleMessage), window.addEventListener("message", e, !1));
                }
                componentWillUnmount() {
                    var e;
                    this.props.onMessage && ((e = this._handleMessage), window.removeEventListener("message", e, !1));
                }
                render() {
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: o, dangerouslyDisableSandbox: r, src: s, style: c, title: d } = this.props,
                        { isModal: h } = this.context,
                        u = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        m = (0, n.Z)("iframe", { allow: `${u.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, l.ju)(s), style: p.iframe, title: d, ...(r ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${o ? " allow-top-navigation" : ""}` }) });
                    return a.createElement(i.Z, { style: h ? [p.root, p.modalPadding, c] : [p.root, c] }, m);
                }
            }
            d.contextType = s.t;
            const p = c.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                h = a.forwardRef((e, t) => a.createElement(d, (0, r.Z)({ forwardedRef: t }, e)));
        },
        449479: (e, t, o) => {
            o.d(t, { Z: () => v });
            var r = o(202784),
                a = o(325686),
                i = o(913973),
                l = o(731708),
                n = o(950822),
                s = o(466792),
                c = o(58881),
                d = o(530732),
                p = o(352924),
                h = o(392237);
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, p.F)()),
                        (this.descriptionId = (0, p.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: o } = this.props;
                            o && !t && o(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: o, disabled: p, helpText: u, label: g, name: b, testID: f } = this.props,
                        v = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        y = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        x = o ? v : y;
                    return r.createElement(s.Z, { disabled: p }, (s) => r.createElement(a.Z, { role: "label", style: [m.root, !p && m.interactive], testID: f }, r.createElement(a.Z, { style: m.topContainer }, r.createElement(l.ZP, { id: this.labelId }, g), r.createElement(a.Z, { style: m.radioContainer }, r.createElement(d.Z, { interactiveStyles: x, interactivityState: s, style: m.radioBackground }, r.createElement(a.Z, { style: [m.circle, o && m.circleActive, p && m.circleDisabled, o && p && m.circleCheckedAndDisabled] }, o ? r.createElement(i.default, { style: m.checkMark }) : null)), (0, n.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: o, disabled: p, name: b, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), u ? r.createElement(l.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, u) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            u.defaultProps = { disabled: !1, checked: !1 };
            const m = h.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...h.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                g = u,
                b = "radioGroup";
            let f = 1;
            class v extends r.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: o } = this.props;
                            o(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (o) => {
                            (this._radioRefs[e] = o), t && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                t = e ? this._radioRefs[e] : this._radioRefs[0];
                            t && t.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${f}_LABEL`),
                        (f += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: o, label: i, name: n, options: s, value: c } = this.props;
                    return r.createElement(
                        a.Z,
                        { "aria-label": e, "aria-labelledby": i && !e ? this._labelId : void 0, role: "radiogroup", style: o && y.disabled, testID: `${b}${n}` },
                        i ? r.createElement(a.Z, { id: this._labelId, role: "label", style: y.header }, r.createElement(l.ZP, { style: y.label, weight: "bold" }, i), t ? r.createElement(l.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        s.map((e, t) => r.createElement(g, { "aria-posinset": t + 1, "aria-setsize": s.length, checked: e.value === c, disabled: o, helpText: e.helpText, key: e.value, label: e.label, name: n, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            v.defaultProps = { disabled: !1 };
            const y = h.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        943401: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(202784),
                a = o(731708),
                i = o(392237);
            class l extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return r.createElement(a.ZP, { link: t, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: t, learnMoreLink: o } = this.props,
                        i = n.root;
                    return t && o ? r.createElement(a.ZP, { color: "gray700", size: "subtext2", style: i }, e, " ", this._renderLearnMore()) : r.createElement(a.ZP, { color: "gray700", size: "subtext2", style: i }, e);
                }
            }
            const n = i.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                s = l;
        },
        928088: (e, t, o) => {
            o.d(t, { Z: () => l });
            var r = o(202784),
                a = o(325686);
            const i = o(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                l = function ({ children: e }) {
                    return r.createElement(a.Z, { style: i.root }, e);
                };
        },
        101890: (e, t, o) => {
            o.d(t, { Z: () => n });
            var r = o(202784),
                a = o(325686),
                i = o(449479),
                l = o(392237);
            const n = (e) => r.createElement(a.Z, { style: s.root }, r.createElement(i.Z, e)),
                s = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        88307: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(202784),
                a = o(325686),
                i = o(731708),
                l = o(392237);
            class n extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSubtextAndLink = () => {
                            const { subtext: e } = this.props;
                            return r.createElement(i.ZP, { color: "gray700", size: "subtext2" }, e, " ", this._renderLearnMore());
                        }),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return t && e ? r.createElement(i.ZP, { link: t, size: "subtext2" }, e) : null;
                        });
                }
                render() {
                    const { label: e, learnMoreLabel: t, learnMoreLink: o, subtext: l, withBottomBorder: n } = this.props;
                    return r.createElement(a.Z, { style: [s.root, n && s.bottomBorder] }, r.createElement(i.ZP, null, e), l ? (t && o ? this._renderSubtextAndLink() : r.createElement(i.ZP, { color: "gray700", size: "subtext2" }, l)) : null);
                }
            }
            n.defaultProps = { withBottomBorder: !0 };
            const s = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                c = n;
        },
        80512: (e, t, o) => {
            o.d(t, { Z: () => p });
            var r = o(202784),
                a = o(325686),
                i = o(815858),
                l = o(731708),
                n = o(449479),
                s = o(392237),
                c = o(451566);
            let d = 1;
            class p extends r.Component {
                constructor() {
                    super(),
                        (this._handleGateToggle = () => {
                            const { defaultOption: e, name: t, offValue: o, onChange: r, options: a, value: i } = this.props;
                            r(t, i === o ? e?.value || a[0].value : o);
                        }),
                        (this._handleAnimationComplete = () => {
                            this._radioGroupRef && this._radioGroupRef.focus();
                        }),
                        (this._setRadioGroupRef = (e) => {
                            this._radioGroupRef = e;
                        }),
                        (this._labelId = `RADIO_GROUP_${d}_LABEL`),
                        (d += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: o, label: s, name: d, offValue: p, onChange: u, options: m, value: g } = this.props;
                    return r.createElement(a.Z, { "aria-label": e, "aria-labelledby": s && !e ? this._labelId : void 0, role: "group", style: [h.root, o && h.disabled] }, r.createElement(r.Fragment, null, s ? r.createElement(a.Z, { id: this._labelId, role: "label", style: h.header }, r.createElement(a.Z, { style: h.label }, r.createElement(l.ZP, { weight: "bold" }, s), r.createElement(c.Z, { disabled: o, onValueChange: this._handleGateToggle, value: g !== p })), t ? r.createElement(l.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null, m && r.createElement(i.Z, { onAnimateComplete: this._handleAnimationComplete, show: g !== p }, r.createElement(a.Z, null, r.createElement(a.Z, { style: h.radioGroup, tabIndex: 0 }, r.createElement(n.Z, { "aria-label": e || s, disabled: o, name: d, onChange: u, options: m, ref: this._setRadioGroupRef, value: g }))))));
                }
            }
            p.defaultProps = { disabled: !1 };
            const h = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, header: { alignItems: "flex-start", marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, label: { paddingBottom: e.spaces.space4, flexDirection: "row", justifyContent: "space-between", width: "100%" }, radioGroup: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 } }));
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => k });
            var r = o(807896),
                a = o(202784),
                i = o(194504),
                l = o(235902),
                n = o(392237),
                s = o(325686),
                c = o(111677),
                d = o.n(c),
                p = o(912021),
                h = o(516951),
                u = o(731708),
                m = o(310088),
                g = o(175993),
                b = o(58881),
                f = o(530732);
            const v = d().d2414d31,
                y = () => d().ce4e85ae,
                x = d().fb9f6f39;
            class C extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: r, state: a } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: r, method: "push", state: { ...a, lockScroll: t } };
                        })),
                        (this._unlisten = h.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, r) => {
                            const a = n.default.theme.colors.text,
                                i = n.default.theme.colors.gray700;
                            return o || r ? (e || t ? a : i) : e ? a : i;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: r, children: i, color: l, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: h, isWebRedesign: g, retainScrollPosition: C, style: Z, to: E } = this.props,
                        { location: k } = this.state,
                        _ = E ? this._getMemoizedLink(E, C) : void 0,
                        R = c ? c(E) : k?.pathname === _?.pathname,
                        z = b.Z.generate({ backgroundColor: "transparent", color: n.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? w.pillHoverStyle.backgroundColor : void 0 }),
                        S = g ? "medium" : R ? "bold" : "medium";
                    return a.createElement(f.Z, { "aria-label": t, "aria-selected": R, focusable: !!R, interactiveStyles: z, link: _, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [w.pillStyle] : [w.link]), ...(p && R ? [w.pillActiveStyle] : []), d ? (p ? w.compactPill : w.compactLink) : null, h ? w.roundedRect : null, Z], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => a.createElement(s.Z, { style: p && w.flexGrow }, a.createElement(u.ZP, { size: g ? "headline2" : void 0, style: [w.text, { color: this._getTextColor(R, c, g, p) }, d && w.compactText, g && t && w.focusedText, p && w.pillTextStyle, p && R && w.pillActiveTextStyle, p && c && w.pillHoverTextStyle], weight: S }, e && a.createElement(e, { style: w.icon }), i, g || p ? null : a.createElement(s.Z, { style: R && [w.border, { backgroundColor: n.default.theme.colors[l] }] })), o ? a.createElement(m.Z, { count: o, standalone: !0, style: [w.badge, o >= 10 && w.multiDigitBadge, o >= 20 && w.truncatedCountBadge], truncatedCountFormatter: x, unreadCountLabel: v, withBorder: !1 }) : r ? a.createElement(m.Z, { pip: !0, standalone: !0, style: w.badgePip, textColor: "red500", unreadCountLabel: y, withBorder: !1 }) : null));
                }
            }
            (C.contextType = g.Z), (C.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const w = n.default.create((e) => ({
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
                Z = C,
                E = n.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                k = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: n, isRoundedRect: s, links: c, style: d, visibleItemIndex: p }) => {
                    const h = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = l.ZP.useProps(),
                        m = u() && !n,
                        g = a.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: i, ...l }, c) => {
                                    const d = m ? [E.linkRedesign, 0 === c && E.firstLinkRedesign, e && 0 === c && E.withNoPaddingStart] : void 0;
                                    return a.createElement(Z, (0, r.Z)({ viewType: i }, l, { isCompact: o, isPillLink: n, isRoundedRect: s, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, n, s, m, c],
                        );
                    return a.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: n && E.gap, childrenStyle: !m && E.flexGrow, key: h, style: [n ? null : E.segmentedControl, m && E.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        58399: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var r = o(202784),
                a = o(890601),
                i = o(783427),
                l = o(717683),
                n = o(347101);
            const s = (e = {}) => {
                const t = r.useContext(l.Z),
                    { direction: o } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style, t && n.Z.iconRTL], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: o });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
        875516: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                i = o(783427),
                l = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM15 19H9v-2h6v2z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        875782: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                i = o(783427),
                l = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1 4.5c0-1.105.895-2 2-2h18c1.105 0 2 .895 2 2v11c0 1.105-.895 2-2 2h-6v2h2c.552 0 1 .448 1 1s-.448 1-1 1H7c-.552 0-1-.448-1-1s.448-1 1-1h2v-2H3c-1.105 0-2-.895-2-2v-11zm10 15h2v-2h-2v2zm-8-14c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v9c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-9z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        246492: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                i = o(783427),
                l = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        232130: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                i = o(783427),
                l = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 200 200", children: r.createElement("g", null, r.createElement("circle", { cx: "100", cy: "100", fill: "#97E3FF", r: "100" }), r.createElement("path", { d: "M57.575 121.5h29.408l25.142 28.858h16.367s6.425-12.867 6.425-50.133H52.042c0 15.817 5.533 21.275 5.533 21.275z", fill: "#005FD1" }), r.createElement("path", { d: "M112.125 50.092L86.983 78.95H57.575s-5.533 5.458-5.533 21.275h82.875c0-37.267-6.425-50.133-6.425-50.133h-16.367z", fill: "#1DA1F2" }), r.createElement("ellipse", { cx: "123.283", cy: "100.225", fill: "#97E3FF", rx: "6.567", ry: "45.075" }), r.createElement("path", { d: "M147.408 146.8L48.225 59.867c-2.425-2.125-2.667-5.817-.542-8.242 2.125-2.425 5.817-2.667 8.242-.542l99.183 86.925c2.425 2.125 2.667 5.817.542 8.242-2.125 2.425-5.817 2.675-8.242.55z", fill: "#71C9F8" }), r.createElement("path", { d: "M94.275 100.225h-7.058l30.808 27c-.233-2.108-.433-4.35-.608-6.717l-23.142-20.283zm33.942 29.75c-.25 1.983-.533 3.808-.833 5.458l4.325 3.792c.324-1.592.65-3.375.957-5.35l-4.45-3.9zm-33.942-29.75L70 78.958h-7.058l24.275 21.267", fill: "#005FD1" }), r.createElement("path", { d: "M118.025 127.225l9.358 8.208c.3-1.65.575-3.475.833-5.458l-10.8-9.467c.176 2.367.376 4.617.61 6.717z", fill: "#1DA1F2" })) }, { writingDirection: t });
            };
            n.metadata = { width: 200, height: 200 };
            const s = n;
        },
        264171: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                i = o(783427),
                l = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                i = o(783427),
                l = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        226597: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                i = o(783427),
                l = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        262009: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                a = o(890601),
                i = o(783427),
                l = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-bc6ccf4c.ce8f27ca.js.map

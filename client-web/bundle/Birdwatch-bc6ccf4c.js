"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Birdwatch-bc6ccf4c", "icons/IconFastforward-js", "icons/IconSuperlikesStroke-js"],
    {
        30183: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(202784),
                i = o(731708),
                a = o(952428);
            const l = o(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                s = function ({ align: e, link: t, onPress: o, text: s, weight: n, withBottomRadius: c, withDarkerInteractiveBackground: d }) {
                    return r.createElement(a.Z, { link: t, onPress: o, style: [l.root, c && l.withBottomRadius], withDarkerInteractiveBackground: d }, r.createElement(i.ZP, { align: e, color: "primary", weight: n }, s));
                };
        },
        779610: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(202784),
                i = o(325686),
                a = o(191796),
                l = o(58399),
                s = o(731708),
                n = o(952428),
                c = o(392237);
            const d = (e) => {
                    const { decoration: t, description: o, disabled: d = !1, isActive: h = !1, label: u, link: m, onPress: g, paddingHorizontal: b, renderRightContent: f, role: y = "tab", styleOverride: C, testID: x = "pivot", thumbnail: v, thumbnailSize: k, withoutArrow: w = !1 } = e,
                        S = [p.thumbnailContainer, "medium" === k && p.thumbnailContainerMedium],
                        R = "string" == typeof u ? r.createElement(s.ZP, null, u) : u,
                        Z = "object" == typeof m && m.external && !m.openInSameFrame,
                        E = o ? ("string" == typeof o ? r.createElement(s.ZP, { color: "gray700", size: "subtext2", testID: `${x}-description` }, o) : o) : null,
                        I = r.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return r.createElement(n.Z, { "aria-selected": "tab" === y ? h : null, disabled: d, link: d ? void 0 : m, onPress: g, role: y, style: [p.root, I, d && p.disabled, C], testID: x, withInteractiveStyling: !!m || !!g }, r.createElement(i.Z, { style: p.contentContainer }, v ? r.createElement(i.Z, { style: S }, v) : null, r.createElement(i.Z, { style: p.content }, R, E), f ? f() : null, (!m && !g) || d || w ? null : Z ? r.createElement(a.default, { style: p.icon }) : r.createElement(l.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        449479: (e, t, o) => {
            o.d(t, { Z: () => y });
            var r = o(202784),
                i = o(325686),
                a = o(913973),
                l = o(731708),
                s = o(950822),
                n = o(466792),
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
                        y = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        C = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        x = o ? y : C;
                    return r.createElement(n.Z, { disabled: p }, (n) => r.createElement(i.Z, { role: "label", style: [m.root, !p && m.interactive], testID: f }, r.createElement(i.Z, { style: m.topContainer }, r.createElement(l.ZP, { id: this.labelId }, g), r.createElement(i.Z, { style: m.radioContainer }, r.createElement(d.Z, { interactiveStyles: x, interactivityState: n, style: m.radioBackground }, r.createElement(i.Z, { style: [m.circle, o && m.circleActive, p && m.circleDisabled, o && p && m.circleCheckedAndDisabled] }, o ? r.createElement(a.default, { style: m.checkMark }) : null)), (0, s.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: o, disabled: p, name: b, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), u ? r.createElement(l.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, u) : null));
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
            class y extends r.Component {
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
                    const { "aria-label": e, description: t, disabled: o, label: a, name: s, options: n, value: c } = this.props;
                    return r.createElement(
                        i.Z,
                        { "aria-label": e, "aria-labelledby": a && !e ? this._labelId : void 0, role: "radiogroup", style: o && C.disabled, testID: `${b}${s}` },
                        a ? r.createElement(i.Z, { id: this._labelId, role: "label", style: C.header }, r.createElement(l.ZP, { style: C.label, weight: "bold" }, a), t ? r.createElement(l.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        n.map((e, t) => r.createElement(g, { "aria-posinset": t + 1, "aria-setsize": n.length, checked: e.value === c, disabled: o, helpText: e.helpText, key: e.value, label: e.label, name: s, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const C = h.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        101890: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(202784),
                i = o(325686),
                a = o(449479),
                l = o(392237);
            const s = (e) => r.createElement(i.Z, { style: n.root }, r.createElement(a.Z, e)),
                n = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => R });
            var r = o(807896),
                i = o(202784),
                a = o(194504),
                l = o(235902),
                s = o(392237),
                n = o(325686),
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
            class v extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: r, state: i } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: r, method: "push", state: { ...i, lockScroll: t } };
                        })),
                        (this._unlisten = h.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, r) => {
                            const i = s.default.theme.colors.text,
                                a = s.default.theme.colors.gray700;
                            return o || r ? (e || t ? i : a) : e ? i : a;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: r, children: a, color: l, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: h, isWebRedesign: g, retainScrollPosition: v, style: w, to: S } = this.props,
                        { location: R } = this.state,
                        Z = S ? this._getMemoizedLink(S, v) : void 0,
                        E = c ? c(S) : R?.pathname === Z?.pathname,
                        I = b.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? k.pillHoverStyle.backgroundColor : void 0 }),
                        _ = g ? "medium" : E ? "bold" : "medium";
                    return i.createElement(f.Z, { "aria-label": t, "aria-selected": E, focusable: !!E, interactiveStyles: I, link: Z, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [k.pillStyle] : [k.link]), ...(p && E ? [k.pillActiveStyle] : []), d ? (p ? k.compactPill : k.compactLink) : null, h ? k.roundedRect : null, w], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => i.createElement(n.Z, { style: p && k.flexGrow }, i.createElement(u.ZP, { size: g ? "headline2" : void 0, style: [k.text, { color: this._getTextColor(E, c, g, p) }, d && k.compactText, g && t && k.focusedText, p && k.pillTextStyle, p && E && k.pillActiveTextStyle, p && c && k.pillHoverTextStyle], weight: _ }, e && i.createElement(e, { style: k.icon }), a, g || p ? null : i.createElement(n.Z, { style: E && [k.border, { backgroundColor: s.default.theme.colors[l] }] })), o ? i.createElement(m.Z, { count: o, standalone: !0, style: [k.badge, o >= 10 && k.multiDigitBadge, o >= 20 && k.truncatedCountBadge], truncatedCountFormatter: x, unreadCountLabel: y, withBorder: !1 }) : r ? i.createElement(m.Z, { pip: !0, standalone: !0, style: k.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (v.contextType = g.Z), (v.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
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
                w = v,
                S = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                R = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: s, isRoundedRect: n, links: c, style: d, visibleItemIndex: p }) => {
                    const h = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = l.ZP.useProps(),
                        m = u() && !s,
                        g = i.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...l }, c) => {
                                    const d = m ? [S.linkRedesign, 0 === c && S.firstLinkRedesign, e && 0 === c && S.withNoPaddingStart] : void 0;
                                    return i.createElement(w, (0, r.Z)({ viewType: a }, l, { isCompact: o, isPillLink: s, isRoundedRect: n, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, s, n, m, c],
                        );
                    return i.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: s && S.gap, childrenStyle: !m && S.flexGrow, key: h, style: [s ? null : S.segmentedControl, m && S.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        183806: (e, t, o) => {
            o.d(t, { Z: () => r });
            const r = o(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        831489: (e, t, o) => {
            o.r(t), o.d(t, { default: () => n });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                l = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M11 13.67V22l12-10L11 2v8.33L1 2v20l10-8.33z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const n = s;
        },
        201889: (e, t, o) => {
            o.r(t), o.d(t, { default: () => n });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                l = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M18.387 8.551c-.603-1.216-1.799-1.978-3.127-2.046-1.121-.061-2.288.381-3.259 1.366-.972-.985-2.139-1.427-3.261-1.366-1.328.068-2.524.829-3.127 2.046-.609 1.23-.575 2.834.349 4.533.919 1.685 2.72 3.479 5.696 5.212L12 18.5l.342-.204c2.975-1.733 4.776-3.527 5.694-5.212.924-1.699.958-3.303.349-4.533zm-2.113 3.875c-.644 1.181-1.952 2.56-4.272 3.963-2.321-1.403-3.63-2.782-4.274-3.963-.667-1.223-.618-2.218-.287-2.89.336-.677.999-1.103 1.745-1.145.733-.036 1.607.306 2.333 1.295l.483.653.483-.653c.726-.989 1.599-1.331 2.332-1.295.745.042 1.407.468 1.743 1.145.332.671.38 1.667-.286 2.89zm3.147-9.266l1.42 1.42-1.77 1.76-1.41-1.41 1.76-1.77zM13 .5h-2V3h2V.5zM.5 13H3v-2H.5v2zm2.66 6.42l1.42 1.42 1.76-1.77-1.41-1.41-1.77 1.76zM21 11v2h2.5v-2H21zM11 23.5h2V21h-2v2.5zm6.66-4.43l1.76 1.77 1.42-1.42-1.77-1.76-1.41 1.41zM6.34 4.93L4.58 3.16 3.16 4.58l1.77 1.76 1.41-1.41z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const n = s;
        },
        241980: (e, t, o) => {
            o.d(t, { Z: () => r });
            const r = (e) =>
                new Promise((t) => {
                    setTimeout(t, e);
                });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Birdwatch-bc6ccf4c.4a65294a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Birdwatch-bc6ccf4c", "icons/IconFastforward-js", "icons/IconSuperlikesStroke-js"],
    {
        30183: (e, t, o) => {
            o.d(t, { Z: () => l });
            var a = o(202784),
                r = o(731708),
                i = o(952428);
            const s = o(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                l = function ({ align: e, link: t, onPress: o, text: l, weight: n, withBottomRadius: c, withDarkerInteractiveBackground: d }) {
                    return a.createElement(i.Z, { link: t, onPress: o, style: [s.root, c && s.withBottomRadius], withDarkerInteractiveBackground: d }, a.createElement(r.ZP, { align: e, color: "primary", weight: n }, l));
                };
        },
        779610: (e, t, o) => {
            o.d(t, { Z: () => d });
            var a = o(202784),
                r = o(325686),
                i = o(191796),
                s = o(58399),
                l = o(731708),
                n = o(952428),
                c = o(392237);
            const d = (e) => {
                    const { decoration: t, description: o, disabled: d = !1, isActive: h = !1, label: u, link: m, onPress: g, paddingHorizontal: b, renderRightContent: f, role: y = "tab", styleOverride: C, testID: k = "pivot", thumbnail: x, thumbnailSize: v, withoutArrow: w = !1 } = e,
                        R = [p.thumbnailContainer, "medium" === v && p.thumbnailContainerMedium],
                        Z = "string" == typeof u ? a.createElement(l.ZP, null, u) : u,
                        E = "object" == typeof m && m.external && !m.openInSameFrame,
                        I = o ? ("string" == typeof o ? a.createElement(l.ZP, { color: "gray700", size: "subtext2", testID: `${k}-description` }, o) : o) : null,
                        _ = a.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return a.createElement(n.Z, { "aria-selected": "tab" === y ? h : null, disabled: d, link: d ? void 0 : m, onPress: g, role: y, style: [p.root, _, d && p.disabled, C], testID: k, withInteractiveStyling: !!m || !!g }, a.createElement(r.Z, { style: p.contentContainer }, x ? a.createElement(r.Z, { style: R }, x) : null, a.createElement(r.Z, { style: p.content }, Z, I), f ? f() : null, (!m && !g) || d || w ? null : E ? a.createElement(i.default, { style: p.icon }) : a.createElement(s.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        449479: (e, t, o) => {
            o.d(t, { Z: () => y });
            var a = o(202784),
                r = o(325686),
                i = o(913973),
                s = o(731708),
                l = o(950822),
                n = o(466792),
                c = o(58881),
                d = o(530732),
                p = o(352924),
                h = o(392237);
            class u extends a.Component {
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
                        k = o ? y : C;
                    return a.createElement(n.Z, { disabled: p }, (n) => a.createElement(r.Z, { role: "label", style: [m.root, !p && m.interactive], testID: f }, a.createElement(r.Z, { style: m.topContainer }, a.createElement(s.ZP, { id: this.labelId }, g), a.createElement(r.Z, { style: m.radioContainer }, a.createElement(d.Z, { interactiveStyles: k, interactivityState: n, style: m.radioBackground }, a.createElement(r.Z, { style: [m.circle, o && m.circleActive, p && m.circleDisabled, o && p && m.circleCheckedAndDisabled] }, o ? a.createElement(i.default, { style: m.checkMark }) : null)), (0, l.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: o, disabled: p, name: b, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), u ? a.createElement(s.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, u) : null));
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
            class y extends a.Component {
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
                    const { "aria-label": e, description: t, disabled: o, label: i, name: l, options: n, value: c } = this.props;
                    return a.createElement(
                        r.Z,
                        { "aria-label": e, "aria-labelledby": i && !e ? this._labelId : void 0, role: "radiogroup", style: o && C.disabled, testID: `${b}${l}` },
                        i ? a.createElement(r.Z, { id: this._labelId, role: "label", style: C.header }, a.createElement(s.ZP, { style: C.label, weight: "bold" }, i), t ? a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        n.map((e, t) => a.createElement(g, { "aria-posinset": t + 1, "aria-setsize": n.length, checked: e.value === c, disabled: o, helpText: e.helpText, key: e.value, label: e.label, name: l, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const C = h.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        101890: (e, t, o) => {
            o.d(t, { Z: () => l });
            var a = o(202784),
                r = o(325686),
                i = o(449479),
                s = o(392237);
            const l = (e) => a.createElement(r.Z, { style: n.root }, a.createElement(i.Z, e)),
                n = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => Z });
            var a = o(807896),
                r = o(202784),
                i = o(194504),
                s = o(235902),
                l = o(392237),
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
                k = d().fb9f6f39;
            class x extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: a, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: a, method: "push", state: { ...r, lockScroll: t } };
                        })),
                        (this._unlisten = h.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, a) => {
                            const r = l.default.theme.colors.text,
                                i = l.default.theme.colors.gray700;
                            return o || a ? (e || t ? r : i) : e ? r : i;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: a, children: i, color: s, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: h, isWebRedesign: g, retainScrollPosition: x, style: w, to: R } = this.props,
                        { location: Z } = this.state,
                        E = R ? this._getMemoizedLink(R, x) : void 0,
                        I = c ? c(R) : Z?.pathname === E?.pathname,
                        _ = b.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0 }),
                        B = g ? "medium" : I ? "bold" : "medium";
                    return r.createElement(f.Z, { "aria-label": t, "aria-selected": I, focusable: !!I, interactiveStyles: _, link: E, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? v.pill : v.link, p && I ? v.active : null, d ? (p ? v.compactPill : v.compactLink) : null, h ? v.roundedRect : null, w], withoutInteractiveStyles: g || p }, ({ isFocused: t, isHovered: c }) => r.createElement(n.Z, { style: p && v.flexGrow }, r.createElement(u.ZP, { size: g ? "headline2" : void 0, style: [v.text, { color: this._getTextColor(I, c, g, p) }, d && v.compactText, g && t && v.focusedText], weight: B }, e && r.createElement(e, { style: v.icon }), i, g || p ? null : r.createElement(n.Z, { style: I && [v.border, { backgroundColor: l.default.theme.colors[s] }] })), o ? r.createElement(m.Z, { count: o, standalone: !0, style: [v.badge, o >= 10 && v.multiDigitBadge, o >= 20 && v.truncatedCountBadge], truncatedCountFormatter: k, unreadCountLabel: y, withBorder: !1 }) : a ? r.createElement(m.Z, { pip: !0, standalone: !0, style: v.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (x.contextType = g.Z), (x.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const v = l.default.create((e) => ({
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
                w = x,
                R = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                Z = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: l, isRoundedRect: n, links: c, style: d, visibleItemIndex: p }) => {
                    const h = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = s.ZP.useProps(),
                        m = u() && !l,
                        g = r.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: i, ...s }, c) => {
                                    const d = m ? [R.linkRedesign, 0 === c && R.firstLinkRedesign, e && 0 === c && R.withNoPaddingStart] : void 0;
                                    return r.createElement(w, (0, a.Z)({ viewType: i }, s, { isCompact: o, isPillLink: l, isRoundedRect: n, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, l, n, m, c],
                        );
                    return r.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: l && R.gap, childrenStyle: !m && R.flexGrow, key: h, style: [l ? null : R.segmentedControl, m && R.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        183806: (e, t, o) => {
            o.d(t, { Z: () => a });
            const a = o(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        831489: (e, t, o) => {
            o.r(t), o.d(t, { default: () => n });
            var a = o(202784),
                r = o(890601),
                i = o(783427),
                s = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M11 13.67V22l12-10L11 2v8.33L1 2v20l10-8.33z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const n = l;
        },
        201889: (e, t, o) => {
            o.r(t), o.d(t, { default: () => n });
            var a = o(202784),
                r = o(890601),
                i = o(783427),
                s = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M18.387 8.551c-.603-1.216-1.799-1.978-3.127-2.046-1.121-.061-2.288.381-3.259 1.366-.972-.985-2.139-1.427-3.261-1.366-1.328.068-2.524.829-3.127 2.046-.609 1.23-.575 2.834.349 4.533.919 1.685 2.72 3.479 5.696 5.212L12 18.5l.342-.204c2.975-1.733 4.776-3.527 5.694-5.212.924-1.699.958-3.303.349-4.533zm-2.113 3.875c-.644 1.181-1.952 2.56-4.272 3.963-2.321-1.403-3.63-2.782-4.274-3.963-.667-1.223-.618-2.218-.287-2.89.336-.677.999-1.103 1.745-1.145.733-.036 1.607.306 2.333 1.295l.483.653.483-.653c.726-.989 1.599-1.331 2.332-1.295.745.042 1.407.468 1.743 1.145.332.671.38 1.667-.286 2.89zm3.147-9.266l1.42 1.42-1.77 1.76-1.41-1.41 1.76-1.77zM13 .5h-2V3h2V.5zM.5 13H3v-2H.5v2zm2.66 6.42l1.42 1.42 1.76-1.77-1.41-1.41-1.77 1.76zM21 11v2h2.5v-2H21zM11 23.5h2V21h-2v2.5zm6.66-4.43l1.76 1.77 1.42-1.42-1.77-1.76-1.41 1.41zM6.34 4.93L4.58 3.16 3.16 4.58l1.77 1.76 1.41-1.41z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const n = l;
        },
        241980: (e, t, o) => {
            o.d(t, { Z: () => a });
            const a = (e) =>
                new Promise((t) => {
                    setTimeout(t, e);
                });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Birdwatch-bc6ccf4c.d725fd9a.js.map

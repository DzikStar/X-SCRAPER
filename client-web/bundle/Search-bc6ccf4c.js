"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Search-bc6ccf4c"],
    {
        392027: (e, t, a) => {
            a.d(t, { Z: () => l });
            var o = a(202784),
                i = a(154003),
                r = a(392237);
            class s extends o.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: a, disabled: r, href: s, icon: l, label: c, onPress: d, renderMenu: p, style: h, testID: u } = this.props,
                        g = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, a);
                    return o.createElement(i.ZP, { "aria-label": e, backgroundColor: t, color: g, disabled: r, icon: l, link: s, onPress: d, renderMenu: p, size: "xLarge", style: [n.root, !c && n.iconOnly, h], testID: u }, c);
                }
            }
            s.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const n = r.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                l = s;
        },
        30183: (e, t, a) => {
            a.d(t, { Z: () => n });
            var o = a(202784),
                i = a(731708),
                r = a(952428);
            const s = a(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                n = function ({ align: e, link: t, onPress: a, text: n, weight: l, withBottomRadius: c, withDarkerInteractiveBackground: d }) {
                    return o.createElement(r.Z, { link: t, onPress: a, style: [s.root, c && s.withBottomRadius], withDarkerInteractiveBackground: d }, o.createElement(i.ZP, { align: e, color: "primary", weight: l }, n));
                };
        },
        449479: (e, t, a) => {
            a.d(t, { Z: () => y });
            var o = a(202784),
                i = a(325686),
                r = a(913973),
                s = a(731708),
                n = a(950822),
                l = a(466792),
                c = a(58881),
                d = a(530732),
                p = a(352924),
                h = a(392237);
            class u extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, p.F)()),
                        (this.descriptionId = (0, p.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: a } = this.props;
                            a && !t && a(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: a, disabled: p, helpText: u, label: m, name: b, testID: f } = this.props,
                        y = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        C = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        k = a ? y : C;
                    return o.createElement(l.Z, { disabled: p }, (l) => o.createElement(i.Z, { role: "label", style: [g.root, !p && g.interactive], testID: f }, o.createElement(i.Z, { style: g.topContainer }, o.createElement(s.ZP, { id: this.labelId }, m), o.createElement(i.Z, { style: g.radioContainer }, o.createElement(d.Z, { interactiveStyles: k, interactivityState: l, style: g.radioBackground }, o.createElement(i.Z, { style: [g.circle, a && g.circleActive, p && g.circleDisabled, a && p && g.circleCheckedAndDisabled] }, a ? o.createElement(r.default, { style: g.checkMark }) : null)), (0, n.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: a, disabled: p, name: b, onChange: this._handleChange, ref: this._setRef, style: [g.nativeControl], type: "radio" }))), u ? o.createElement(s.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: g.helpText }, u) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            u.defaultProps = { disabled: !1, checked: !1 };
            const g = h.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...h.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                m = u,
                b = "radioGroup";
            let f = 1;
            class y extends o.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: a } = this.props;
                            a(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (a) => {
                            (this._radioRefs[e] = a), t && (this._radioRefs.checked = e);
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
                    const { "aria-label": e, description: t, disabled: a, label: r, name: n, options: l, value: c } = this.props;
                    return o.createElement(
                        i.Z,
                        { "aria-label": e, "aria-labelledby": r && !e ? this._labelId : void 0, role: "radiogroup", style: a && C.disabled, testID: `${b}${n}` },
                        r ? o.createElement(i.Z, { id: this._labelId, role: "label", style: C.header }, o.createElement(s.ZP, { style: C.label, weight: "bold" }, r), t ? o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        l.map((e, t) => o.createElement(m, { "aria-posinset": t + 1, "aria-setsize": l.length, checked: e.value === c, disabled: a, helpText: e.helpText, key: e.value, label: e.label, name: n, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const C = h.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        403556: (e, t, a) => {
            a.d(t, { Z: () => _ });
            var o = a(807896),
                i = a(202784),
                r = a(194504),
                s = a(235902),
                n = a(392237),
                l = a(325686),
                c = a(111677),
                d = a.n(c),
                p = a(912021),
                h = a(516951),
                u = a(731708),
                g = a(310088),
                m = a(175993),
                b = a(58881),
                f = a(530732);
            const y = d().d2414d31,
                C = () => d().ce4e85ae,
                k = d().fb9f6f39;
            class x extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: a, query: o, state: i } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: a, query: o, method: "push", state: { ...i, lockScroll: t } };
                        })),
                        (this._unlisten = h.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, a, o) => {
                            const i = n.default.theme.colors.text,
                                r = n.default.theme.colors.gray700;
                            return a || o ? (e || t ? i : r) : e ? i : r;
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
                    const { Icon: e, "aria-label": t, badgeCount: a, badgePip: o, children: r, color: s, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: h, isWebRedesign: m, retainScrollPosition: x, style: R, to: v } = this.props,
                        { location: _ } = this.state,
                        Z = v ? this._getMemoizedLink(v, x) : void 0,
                        I = c ? c(v) : _?.pathname === Z?.pathname,
                        P = b.Z.generate({ backgroundColor: "transparent", color: n.default.theme.colors.text, insetFocusRing: !0 }),
                        E = m ? "medium" : I ? "bold" : "medium";
                    return i.createElement(f.Z, { "aria-label": t, "aria-selected": I, focusable: !!I, interactiveStyles: P, link: Z, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? w.pill : w.link, p && I ? w.active : null, d ? (p ? w.compactPill : w.compactLink) : null, h ? w.roundedRect : null, R], withoutInteractiveStyles: m || p }, ({ isFocused: t, isHovered: c }) => i.createElement(l.Z, { style: p && w.flexGrow }, i.createElement(u.ZP, { size: m ? "headline2" : void 0, style: [w.text, { color: this._getTextColor(I, c, m, p) }, d && w.compactText, m && t && w.focusedText], weight: E }, e && i.createElement(e, { style: w.icon }), r, m || p ? null : i.createElement(l.Z, { style: I && [w.border, { backgroundColor: n.default.theme.colors[s] }] })), a ? i.createElement(g.Z, { count: a, standalone: !0, style: [w.badge, a >= 10 && w.multiDigitBadge, a >= 20 && w.truncatedCountBadge], truncatedCountFormatter: k, unreadCountLabel: y, withBorder: !1 }) : o ? i.createElement(g.Z, { pip: !0, standalone: !0, style: w.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (x.contextType = m.Z), (x.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
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
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                R = x,
                v = n.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                _ = ({ alignFirstItem: e, "aria-label": t, isCompact: a, isPillLink: n, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const h = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = s.ZP.useProps(),
                        g = u() && !n,
                        m = i.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: r, ...s }, c) => {
                                    const d = g ? [v.linkRedesign, 0 === c && v.firstLinkRedesign, e && 0 === c && v.withNoPaddingStart] : void 0;
                                    return i.createElement(R, (0, o.Z)({ viewType: r }, s, { isCompact: a, isPillLink: n, isRoundedRect: l, isWebRedesign: g, style: d }), t);
                                }),
                            [e, a, n, l, g, c],
                        );
                    return i.createElement(r.Z, { "aria-label": t, buttonsContainerStyle: n && v.gap, childrenStyle: !g && v.flexGrow, key: h, style: [n ? null : v.segmentedControl, g && v.leftAligned, d], visibleItemIndex: p }, m);
                };
        },
        98440: (e, t, a) => {
            a.r(t), a.d(t, { default: () => l });
            var o = a(202784),
                i = a(890601),
                r = a(783427),
                s = a(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const l = n;
        },
        842623: (e, t, a) => {
            a.d(t, { Z: () => i });
            var o = a(316118);
            function i(e) {
                if (!e) return !1;
                const t = (0, o.Z)(e);
                return 1 === t.length && t[0] === e.slice(1);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Search-bc6ccf4c.5b50d3fa.js.map

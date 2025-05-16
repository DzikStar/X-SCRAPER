"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Search-bc6ccf4c"],
    {
        392027: (e, t, a) => {
            a.d(t, { Z: () => l });
            var o = a(202784),
                s = a(154003),
                i = a(392237);
            class r extends o.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: a, disabled: i, href: r, icon: l, label: c, onPress: d, renderMenu: p, style: h, testID: u } = this.props,
                        g = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, a);
                    return o.createElement(s.ZP, { "aria-label": e, backgroundColor: t, color: g, disabled: i, icon: l, link: r, onPress: d, renderMenu: p, size: "xLarge", style: [n.root, !c && n.iconOnly, h], testID: u }, c);
                }
            }
            r.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const n = i.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                l = r;
        },
        30183: (e, t, a) => {
            a.d(t, { Z: () => n });
            var o = a(202784),
                s = a(731708),
                i = a(952428);
            const r = a(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                n = function ({ align: e, link: t, onPress: a, text: n, weight: l, withBottomRadius: c, withDarkerInteractiveBackground: d }) {
                    return o.createElement(i.Z, { link: t, onPress: a, style: [r.root, c && r.withBottomRadius], withDarkerInteractiveBackground: d }, o.createElement(s.ZP, { align: e, color: "primary", weight: l }, n));
                };
        },
        449479: (e, t, a) => {
            a.d(t, { Z: () => y });
            var o = a(202784),
                s = a(325686),
                i = a(913973),
                r = a(731708),
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
                    return o.createElement(l.Z, { disabled: p }, (l) => o.createElement(s.Z, { role: "label", style: [g.root, !p && g.interactive], testID: f }, o.createElement(s.Z, { style: g.topContainer }, o.createElement(r.ZP, { id: this.labelId }, m), o.createElement(s.Z, { style: g.radioContainer }, o.createElement(d.Z, { interactiveStyles: k, interactivityState: l, style: g.radioBackground }, o.createElement(s.Z, { style: [g.circle, a && g.circleActive, p && g.circleDisabled, a && p && g.circleCheckedAndDisabled] }, a ? o.createElement(i.default, { style: g.checkMark }) : null)), (0, n.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: a, disabled: p, name: b, onChange: this._handleChange, ref: this._setRef, style: [g.nativeControl], type: "radio" }))), u ? o.createElement(r.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: g.helpText }, u) : null));
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
                    const { "aria-label": e, description: t, disabled: a, label: i, name: n, options: l, value: c } = this.props;
                    return o.createElement(
                        s.Z,
                        { "aria-label": e, "aria-labelledby": i && !e ? this._labelId : void 0, role: "radiogroup", style: a && C.disabled, testID: `${b}${n}` },
                        i ? o.createElement(s.Z, { id: this._labelId, role: "label", style: C.header }, o.createElement(r.ZP, { style: C.label, weight: "bold" }, i), t ? o.createElement(r.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        l.map((e, t) => o.createElement(m, { "aria-posinset": t + 1, "aria-setsize": l.length, checked: e.value === c, disabled: a, helpText: e.helpText, key: e.value, label: e.label, name: n, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const C = h.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        403556: (e, t, a) => {
            a.d(t, { Z: () => v });
            var o = a(807896),
                s = a(202784),
                i = a(194504),
                r = a(235902),
                n = a(392237),
                l = a(325686),
                c = a(332920),
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
            class x extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: a, query: o, state: s } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: a, query: o, method: "push", state: { ...s, lockScroll: t } };
                        })),
                        (this._unlisten = h.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, a, o) => {
                            const s = n.default.theme.colors.text,
                                i = n.default.theme.colors.gray700;
                            return a || o ? (e || t ? s : i) : e ? s : i;
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
                    const { Icon: e, "aria-label": t, badgeCount: a, badgePip: o, children: i, color: r, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: h, isWebRedesign: m, retainScrollPosition: x, style: w, to: _ } = this.props,
                        { location: v } = this.state,
                        Z = _ ? this._getMemoizedLink(_, x) : void 0,
                        I = c ? c(_) : v?.pathname === Z?.pathname,
                        P = b.Z.generate({ backgroundColor: "transparent", color: n.default.theme.colors.text, insetFocusRing: !0 }),
                        B = m ? "medium" : I ? "bold" : "medium";
                    return s.createElement(f.Z, { "aria-label": t, "aria-selected": I, focusable: !!I, interactiveStyles: P, link: Z, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? R.pill : R.link, p && I ? R.active : null, d ? (p ? R.compactPill : R.compactLink) : null, h ? R.roundedRect : null, w], withoutInteractiveStyles: m || p }, ({ isFocused: t, isHovered: c }) => s.createElement(l.Z, { style: p && R.flexGrow }, s.createElement(u.ZP, { size: m ? "headline2" : void 0, style: [R.text, { color: this._getTextColor(I, c, m, p) }, d && R.compactText, m && t && R.focusedText], weight: B }, e && s.createElement(e, { style: R.icon }), i, m || p ? null : s.createElement(l.Z, { style: I && [R.border, { backgroundColor: n.default.theme.colors[r] }] })), a ? s.createElement(g.Z, { count: a, standalone: !0, style: [R.badge, a >= 10 && R.multiDigitBadge, a >= 20 && R.truncatedCountBadge], truncatedCountFormatter: k, unreadCountLabel: y, withBorder: !1 }) : o ? s.createElement(g.Z, { pip: !0, standalone: !0, style: R.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (x.contextType = m.Z), (x.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const R = n.default.create((e) => ({
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
                _ = n.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                v = ({ alignFirstItem: e, "aria-label": t, isCompact: a, isPillLink: n, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const h = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = r.ZP.useProps(),
                        g = u() && !n,
                        m = s.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: i, ...r }, c) => {
                                    const d = g ? [_.linkRedesign, 0 === c && _.firstLinkRedesign, e && 0 === c && _.withNoPaddingStart] : void 0;
                                    return s.createElement(w, (0, o.Z)({ viewType: i }, r, { isCompact: a, isPillLink: n, isRoundedRect: l, isWebRedesign: g, style: d }), t);
                                }),
                            [e, a, n, l, g, c],
                        );
                    return s.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: n && _.gap, childrenStyle: !g && _.flexGrow, key: h, style: [n ? null : _.segmentedControl, g && _.leftAligned, d], visibleItemIndex: p }, m);
                };
        },
        842623: (e, t, a) => {
            a.d(t, { Z: () => s });
            var o = a(316118);
            function s(e) {
                if (!e) return !1;
                const t = (0, o.Z)(e);
                return 1 === t.length && t[0] === e.slice(1);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Search-bc6ccf4c.f13ba17a.js.map

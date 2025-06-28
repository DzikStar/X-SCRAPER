"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Search-bc6ccf4c"],
    {
        392027: (e, t, o) => {
            o.d(t, { Z: () => n });
            var i = o(202784),
                r = o(154003),
                a = o(392237);
            class s extends i.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: o, disabled: a, href: s, icon: n, label: c, onPress: d, renderMenu: p, style: h, testID: u } = this.props,
                        g = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, o);
                    return i.createElement(r.ZP, { "aria-label": e, backgroundColor: t, color: g, disabled: a, icon: n, link: s, onPress: d, renderMenu: p, size: "xLarge", style: [l.root, !c && l.iconOnly, h], testID: u }, c);
                }
            }
            s.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const l = a.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                n = s;
        },
        30183: (e, t, o) => {
            o.d(t, { Z: () => l });
            var i = o(202784),
                r = o(731708),
                a = o(952428);
            const s = o(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                l = function ({ align: e, link: t, onPress: o, text: l, weight: n, withBottomRadius: c, withDarkerInteractiveBackground: d }) {
                    return i.createElement(a.Z, { link: t, onPress: o, style: [s.root, c && s.withBottomRadius], withDarkerInteractiveBackground: d }, i.createElement(r.ZP, { align: e, color: "primary", weight: n }, l));
                };
        },
        449479: (e, t, o) => {
            o.d(t, { Z: () => y });
            var i = o(202784),
                r = o(325686),
                a = o(913973),
                s = o(731708),
                l = o(950822),
                n = o(466792),
                c = o(58881),
                d = o(530732),
                p = o(352924),
                h = o(392237);
            class u extends i.Component {
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
                    const { "aria-posinset": e, "aria-setsize": t, checked: o, disabled: p, helpText: u, label: m, name: b, testID: f } = this.props,
                        y = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        C = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        x = o ? y : C;
                    return i.createElement(n.Z, { disabled: p }, (n) => i.createElement(r.Z, { role: "label", style: [g.root, !p && g.interactive], testID: f }, i.createElement(r.Z, { style: g.topContainer }, i.createElement(s.ZP, { id: this.labelId }, m), i.createElement(r.Z, { style: g.radioContainer }, i.createElement(d.Z, { interactiveStyles: x, interactivityState: n, style: g.radioBackground }, i.createElement(r.Z, { style: [g.circle, o && g.circleActive, p && g.circleDisabled, o && p && g.circleCheckedAndDisabled] }, o ? i.createElement(a.default, { style: g.checkMark }) : null)), (0, l.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: o, disabled: p, name: b, onChange: this._handleChange, ref: this._setRef, style: [g.nativeControl], type: "radio" }))), u ? i.createElement(s.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: g.helpText }, u) : null));
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
            class y extends i.Component {
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
                    const { "aria-label": e, description: t, disabled: o, label: a, name: l, options: n, value: c } = this.props;
                    return i.createElement(
                        r.Z,
                        { "aria-label": e, "aria-labelledby": a && !e ? this._labelId : void 0, role: "radiogroup", style: o && C.disabled, testID: `${b}${l}` },
                        a ? i.createElement(r.Z, { id: this._labelId, role: "label", style: C.header }, i.createElement(s.ZP, { style: C.label, weight: "bold" }, a), t ? i.createElement(s.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        n.map((e, t) => i.createElement(m, { "aria-posinset": t + 1, "aria-setsize": n.length, checked: e.value === c, disabled: o, helpText: e.helpText, key: e.value, label: e.label, name: l, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const C = h.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => R });
            var i = o(807896),
                r = o(202784),
                a = o(194504),
                s = o(235902),
                l = o(392237),
                n = o(325686),
                c = o(111677),
                d = o.n(c),
                p = o(912021),
                h = o(516951),
                u = o(731708),
                g = o(310088),
                m = o(175993),
                b = o(58881),
                f = o(530732);
            const y = d().d2414d31,
                C = () => d().ce4e85ae,
                x = d().fb9f6f39;
            class k extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: i, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: i, method: "push", state: { ...r, lockScroll: t } };
                        })),
                        (this._unlisten = h.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, i) => {
                            const r = l.default.theme.colors.text,
                                a = l.default.theme.colors.gray700;
                            return o || i ? (e || t ? r : a) : e ? r : a;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: i, children: a, color: s, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: h, isWebRedesign: m, retainScrollPosition: k, style: w, to: S } = this.props,
                        { location: R } = this.state,
                        _ = S ? this._getMemoizedLink(S, k) : void 0,
                        Z = c ? c(S) : R?.pathname === _?.pathname,
                        I = b.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? v.pillHoverStyle.backgroundColor : void 0 }),
                        E = m ? "medium" : Z ? "bold" : "medium";
                    return r.createElement(f.Z, { "aria-label": t, "aria-selected": Z, focusable: !!Z, interactiveStyles: I, link: _, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [v.pillStyle] : [v.link]), ...(p && Z ? [v.pillActiveStyle] : []), d ? (p ? v.compactPill : v.compactLink) : null, h ? v.roundedRect : null, w], withoutInteractiveStyles: m }, ({ isFocused: t, isHovered: c }) => r.createElement(n.Z, { style: p && v.flexGrow }, r.createElement(u.ZP, { size: m ? "headline2" : void 0, style: [v.text, { color: this._getTextColor(Z, c, m, p) }, d && v.compactText, m && t && v.focusedText, p && v.pillTextStyle, p && Z && v.pillActiveTextStyle, p && c && v.pillHoverTextStyle], weight: E }, e && r.createElement(e, { style: v.icon }), a, m || p ? null : r.createElement(n.Z, { style: Z && [v.border, { backgroundColor: l.default.theme.colors[s] }] })), o ? r.createElement(g.Z, { count: o, standalone: !0, style: [v.badge, o >= 10 && v.multiDigitBadge, o >= 20 && v.truncatedCountBadge], truncatedCountFormatter: x, unreadCountLabel: y, withBorder: !1 }) : i ? r.createElement(g.Z, { pip: !0, standalone: !0, style: v.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (k.contextType = m.Z), (k.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
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
                w = k,
                S = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                R = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: l, isRoundedRect: n, links: c, style: d, visibleItemIndex: p }) => {
                    const h = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = s.ZP.useProps(),
                        g = u() && !l,
                        m = r.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...s }, c) => {
                                    const d = g ? [S.linkRedesign, 0 === c && S.firstLinkRedesign, e && 0 === c && S.withNoPaddingStart] : void 0;
                                    return r.createElement(w, (0, i.Z)({ viewType: a }, s, { isCompact: o, isPillLink: l, isRoundedRect: n, isWebRedesign: g, style: d }), t);
                                }),
                            [e, o, l, n, g, c],
                        );
                    return r.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: l && S.gap, childrenStyle: !g && S.flexGrow, key: h, style: [l ? null : S.segmentedControl, g && S.leftAligned, d], visibleItemIndex: p }, m);
                };
        },
        971657: (e, t, o) => {
            o.r(t), o.d(t, { default: () => n });
            var i = o(202784),
                r = o(890601),
                a = o(783427),
                s = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const n = l;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => n });
            var i = o(202784),
                r = o(890601),
                a = o(783427),
                s = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const n = l;
        },
        842623: (e, t, o) => {
            o.d(t, { Z: () => r });
            var i = o(316118);
            function r(e) {
                if (!e) return !1;
                const t = (0, i.Z)(e);
                return 1 === t.length && t[0] === e.slice(1);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Search-bc6ccf4c.19d397aa.js.map

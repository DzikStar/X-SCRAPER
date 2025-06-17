"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-bc6ccf4c", "icons/IconConnectArrows-js"],
    {
        242454: (e, t, o) => {
            o.d(t, { Z: () => p });
            var r = o(807896),
                n = o(202784),
                l = o(325686),
                i = o(731708),
                a = o(58881),
                s = o(530732),
                c = o(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                p = ({ align: e = "center", color: t, label: o, ...p }) => {
                    const u = a.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return n.createElement(l.Z, { style: d.container }, n.createElement(s.Z, (0, r.Z)({}, p, { interactiveStyles: u, style: d.root }), n.createElement(i.ZP, { align: e, color: t }, o)));
                };
        },
        392027: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(202784),
                n = o(154003),
                l = o(392237);
            class i extends r.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: o, disabled: l, href: i, icon: s, label: c, onPress: d, renderMenu: p, style: u, testID: m } = this.props,
                        h = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, o);
                    return r.createElement(n.ZP, { "aria-label": e, backgroundColor: t, color: h, disabled: l, icon: s, link: i, onPress: d, renderMenu: p, size: "xLarge", style: [a.root, !c && a.iconOnly, u], testID: m }, c);
                }
            }
            i.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const a = l.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                s = i;
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(202784),
                n = o(325686),
                l = o(235902),
                i = o(885015),
                a = o(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: s } = l.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: a.default.theme.colors[e] ?? a.default.theme.colors.borderColor };
                return o ? r.createElement(i.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(n.Z, { style: c.gapColumn }, r.createElement(n.Z, { style: [c.gap, d] })), r.createElement(n.Z, { style: c.gapText }, o), r.createElement(n.Z, { style: c.gapColumn }, r.createElement(n.Z, { style: [c.gap, d] }))) : r.createElement(n.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = a.default.create((e) => ({ borderColor: { backgroundColor: a.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: a.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(807896),
                n = o(202784),
                l = o(325686),
                i = o(392237);
            class a extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...i } = this.props,
                        a = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, s.column, o && s.withGutterColumn] }));
                    return n.createElement(l.Z, (0, r.Z)({ style: [t, s.root, o && s.withGutter] }, i), a);
                }
            }
            a.defaultProps = { withGutter: !1 };
            const s = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = a;
        },
        779610: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(202784),
                n = o(325686),
                l = o(191796),
                i = o(58399),
                a = o(731708),
                s = o(952428),
                c = o(392237);
            const d = (e) => {
                    const { decoration: t, description: o, disabled: d = !1, isActive: u = !1, label: m, link: h, onPress: g, paddingHorizontal: b, renderRightContent: f, role: y = "tab", styleOverride: C, testID: x = "pivot", thumbnail: w, thumbnailSize: v, withoutArrow: Z = !1 } = e,
                        k = [p.thumbnailContainer, "medium" === v && p.thumbnailContainerMedium],
                        S = "string" == typeof m ? r.createElement(a.ZP, null, m) : m,
                        E = "object" == typeof h && h.external && !h.openInSameFrame,
                        P = o ? ("string" == typeof o ? r.createElement(a.ZP, { color: "gray700", size: "subtext2", testID: `${x}-description` }, o) : o) : null,
                        z = r.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return r.createElement(s.Z, { "aria-selected": "tab" === y ? u : null, disabled: d, link: d ? void 0 : h, onPress: g, role: y, style: [p.root, z, d && p.disabled, C], testID: x, withInteractiveStyling: !!h || !!g }, r.createElement(n.Z, { style: p.contentContainer }, w ? r.createElement(n.Z, { style: k }, w) : null, r.createElement(n.Z, { style: p.content }, S, P), f ? f() : null, (!h && !g) || d || Z ? null : E ? r.createElement(l.default, { style: p.icon }) : r.createElement(i.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        98538: (e, t, o) => {
            o.d(t, { Z: () => m });
            var r = o(202784),
                n = o(325686),
                l = o(731708),
                i = o(891198),
                a = o(280278),
                s = o(392237);
            const c = "subtext1",
                d = r.createContext({ onMedia: !1 });
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, i.Gb)(e) !== (0, i.wl)(e) ? { label: (0, i.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: o, onPress: n } = this.props;
                    return r.createElement(l.ZP, { color: o ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: n }, r.createElement(d.Provider, { value: { onMedia: o } }, e));
                }
            }
            (p.Group = (e) =>
                r.createElement(
                    n.Z,
                    { style: [u.row, e.style] },
                    r.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, o) => r.createElement(n.Z, { key: t, style: t < o.length - 1 && u.groupItemNonLast }, e)),
                )),
                (p.Label = ({ children: e, style: t }) => r.createElement(d.Consumer, null, ({ onMedia: o }) => r.createElement(l.ZP, { children: e, color: o ? "white" : "gray700", size: c, style: t }))),
                (p.Value = ({ animated: e, children: t, count: o, style: n, weight: i = "bold" }) => r.createElement(d.Consumer, null, ({ onMedia: s }) => (e ? r.createElement(a.ZP, { children: t, count: o, size: c, style: n, weight: i }) : r.createElement(l.ZP, { children: t, color: s ? "white" : "text", size: c, style: n, weight: i }))));
            const u = s.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                m = p;
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => S });
            var r = o(807896),
                n = o(202784),
                l = o(194504),
                i = o(235902),
                a = o(392237),
                s = o(325686),
                c = o(111677),
                d = o.n(c),
                p = o(912021),
                u = o(516951),
                m = o(731708),
                h = o(310088),
                g = o(175993),
                b = o(58881),
                f = o(530732);
            const y = d().d2414d31,
                C = () => d().ce4e85ae,
                x = d().fb9f6f39;
            class w extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: r, state: n } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: r, method: "push", state: { ...n, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, r) => {
                            const n = a.default.theme.colors.text,
                                l = a.default.theme.colors.gray700;
                            return o || r ? (e || t ? n : l) : e ? n : l;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: r, children: l, color: i, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: g, retainScrollPosition: w, style: Z, to: k } = this.props,
                        { location: S } = this.state,
                        E = k ? this._getMemoizedLink(k, w) : void 0,
                        P = c ? c(k) : S?.pathname === E?.pathname,
                        z = b.Z.generate({ backgroundColor: "transparent", color: a.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? v.pillHoverStyle.backgroundColor : void 0 }),
                        H = g ? "medium" : P ? "bold" : "medium";
                    return n.createElement(f.Z, { "aria-label": t, "aria-selected": P, focusable: !!P, interactiveStyles: z, link: E, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [v.pillStyle] : [v.link]), ...(p && P ? [v.pillActiveStyle] : []), d ? (p ? v.compactPill : v.compactLink) : null, u ? v.roundedRect : null, Z], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => n.createElement(s.Z, { style: p && v.flexGrow }, n.createElement(m.ZP, { size: g ? "headline2" : void 0, style: [v.text, { color: this._getTextColor(P, c, g, p) }, d && v.compactText, g && t && v.focusedText, p && v.pillTextStyle, p && P && v.pillActiveTextStyle, p && c && v.pillHoverTextStyle], weight: H }, e && n.createElement(e, { style: v.icon }), l, g || p ? null : n.createElement(s.Z, { style: P && [v.border, { backgroundColor: a.default.theme.colors[i] }] })), o ? n.createElement(h.Z, { count: o, standalone: !0, style: [v.badge, o >= 10 && v.multiDigitBadge, o >= 20 && v.truncatedCountBadge], truncatedCountFormatter: x, unreadCountLabel: y, withBorder: !1 }) : r ? n.createElement(h.Z, { pip: !0, standalone: !0, style: v.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (w.contextType = g.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const v = a.default.create((e) => ({
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
                k = a.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                S = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: a, isRoundedRect: s, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = i.ZP.useProps(),
                        h = m() && !a,
                        g = n.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: l, ...i }, c) => {
                                    const d = h ? [k.linkRedesign, 0 === c && k.firstLinkRedesign, e && 0 === c && k.withNoPaddingStart] : void 0;
                                    return n.createElement(Z, (0, r.Z)({ viewType: l }, i, { isCompact: o, isPillLink: a, isRoundedRect: s, isWebRedesign: h, style: d }), t);
                                }),
                            [e, o, a, s, h, c],
                        );
                    return n.createElement(l.Z, { "aria-label": t, buttonsContainerStyle: a && k.gap, childrenStyle: !h && k.flexGrow, key: u, style: [a ? null : k.segmentedControl, h && k.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        170397: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                n = o(890601),
                l = o(783427),
                i = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M15.96 1.54L21.41 7l-5.45 5.46-1.42-1.42L17.59 8H3V6h14.59l-3.05-3.04 1.42-1.42zM6.41 18l3.05 3.04-1.42 1.42L2.59 17l5.45-5.46 1.42 1.42L6.41 16H21v2H6.41z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                n = o(890601),
                l = o(783427),
                i = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-bc6ccf4c.5b8ec43a.js.map

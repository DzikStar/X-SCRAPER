"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsMonetization-bc6ccf4c"],
    {
        779610: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                a = n(325686),
                i = n(191796),
                r = n(58399),
                s = n(731708),
                l = n(952428),
                c = n(392237);
            const d = (e) => {
                    const { decoration: t, description: n, disabled: d = !1, isActive: u = !1, label: m, link: h, onPress: g, paddingHorizontal: b, renderRightContent: f, role: y = "tab", styleOverride: C, testID: x = "pivot", thumbnail: w, thumbnailSize: v, withoutArrow: Z = !1 } = e,
                        E = [p.thumbnailContainer, "medium" === v && p.thumbnailContainerMedium],
                        k = "string" == typeof m ? o.createElement(s.ZP, null, m) : m,
                        R = "object" == typeof h && h.external && !h.openInSameFrame,
                        P = n ? ("string" == typeof n ? o.createElement(s.ZP, { color: "gray700", size: "subtext2", testID: `${x}-description` }, n) : n) : null,
                        S = o.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return o.createElement(l.Z, { "aria-selected": "tab" === y ? u : null, disabled: d, link: d ? void 0 : h, onPress: g, role: y, style: [p.root, S, d && p.disabled, C], testID: x, withInteractiveStyling: !!h || !!g }, o.createElement(a.Z, { style: p.contentContainer }, w ? o.createElement(a.Z, { style: E }, w) : null, o.createElement(a.Z, { style: p.content }, k, P), f ? f() : null, (!h && !g) || d || Z ? null : R ? o.createElement(i.default, { style: p.icon }) : o.createElement(r.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        536606: (e, t, n) => {
            n.d(t, { Z: () => u });
            var o = n(202784),
                a = n(325686),
                i = n(731708),
                r = n(352924),
                s = n(822399),
                l = n(98538),
                c = n(392237);
            const d = (e) => {
                const { decoration: t, isCompact: n, progressBarConfig: d, statConfig: u, title: m, valueCurrent: h, valueMax: g } = e,
                    b = (0, r.F)(),
                    f = ((y = d), c.default.theme.colors[y?.color || "blue900"]);
                var y;
                const C = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"] };
                    })(d),
                    x = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"], height: c.default.theme.spaces[e?.height || "space8"], backgroundColor: c.default.theme.colors.gray50 };
                    })(d);
                return o.createElement(a.Z, { style: p.root }, o.createElement(a.Z, { style: p.decoration }, t), o.createElement(a.Z, { style: p.title }, o.createElement(i.ZP, { size: "subtext2", weight: "medium" }, m)), o.createElement(a.Z, { id: b, style: p.valueLabel }, u.value ? o.createElement(l.Z, null, o.createElement(l.Z.Value, null, u.value), o.createElement(l.Z.Label, null, u.label)) : o.createElement(i.ZP, { weight: "bold" }, u.label)), o.createElement(a.Z, { style: n ? p.progressBarContainerCompact : p.progressBarContainer, testID: "progressBarStats-progressBarContainer" }, o.createElement(s.Z, { "aria-describedby": b, "aria-valuemax": g, colorValue: f, progress: h / g, progressStyle: C, style: x })));
            };
            const p = c.default.create((e) => ({ root: { display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "min-content auto auto", marginBottom: e.spaces.space16 }, decoration: { gridRow: "1/3", gridColumn: "1/2", fontSize: "30px" }, title: { display: "flex", alignItems: "flex-start" }, valueLabel: { display: "flex", alignItems: "flex-end" }, progressBarContainer: { gridRow: "2/3", gridColumn: "2/4", marginTop: e.spaces.space8 }, progressBarContainerCompact: { gridRow: "2/3", gridColumn: "2/4" } })),
                u = o.memo(d);
        },
        98538: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(202784),
                a = n(325686),
                i = n(731708),
                r = n(891198),
                s = n(280278),
                l = n(392237);
            const c = "subtext1",
                d = o.createContext({ onMedia: !1 });
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, r.Gb)(e) !== (0, r.wl)(e) ? { label: (0, r.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: a } = this.props;
                    return o.createElement(i.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: a }, o.createElement(d.Provider, { value: { onMedia: n } }, e));
                }
            }
            (p.Group = (e) =>
                o.createElement(
                    a.Z,
                    { style: [u.row, e.style] },
                    o.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, n) => o.createElement(a.Z, { key: t, style: t < n.length - 1 && u.groupItemNonLast }, e)),
                )),
                (p.Label = ({ children: e, style: t }) => o.createElement(d.Consumer, null, ({ onMedia: n }) => o.createElement(i.ZP, { children: e, color: n ? "white" : "gray700", size: c, style: t }))),
                (p.Value = ({ animated: e, children: t, count: n, style: a, weight: r = "bold" }) => o.createElement(d.Consumer, null, ({ onMedia: l }) => (e ? o.createElement(s.ZP, { children: t, count: n, size: c, style: a, weight: r }) : o.createElement(i.ZP, { children: t, color: l ? "white" : "text", size: c, style: a, weight: r }))));
            const u = l.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                m = p;
        },
        403556: (e, t, n) => {
            n.d(t, { Z: () => k });
            var o = n(807896),
                a = n(202784),
                i = n(194504),
                r = n(235902),
                s = n(392237),
                l = n(325686),
                c = n(111677),
                d = n.n(c),
                p = n(912021),
                u = n(516951),
                m = n(731708),
                h = n(310088),
                g = n(175993),
                b = n(58881),
                f = n(530732);
            const y = d().d2414d31,
                C = () => d().ce4e85ae,
                x = d().fb9f6f39;
            class w extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: n, query: o, state: a } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: o, method: "push", state: { ...a, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, o) => {
                            const a = s.default.theme.colors.text,
                                i = s.default.theme.colors.gray700;
                            return n || o ? (e || t ? a : i) : e ? a : i;
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: o, children: i, color: r, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: g, retainScrollPosition: w, style: Z, to: E } = this.props,
                        { location: k } = this.state,
                        R = E ? this._getMemoizedLink(E, w) : void 0,
                        P = c ? c(E) : k?.pathname === R?.pathname,
                        S = b.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0 }),
                        B = g ? "medium" : P ? "bold" : "medium";
                    return a.createElement(f.Z, { "aria-label": t, "aria-selected": P, focusable: !!P, interactiveStyles: S, link: R, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? v.pill : v.link, p && P ? v.active : null, d ? (p ? v.compactPill : v.compactLink) : null, u ? v.roundedRect : null, Z], withoutInteractiveStyles: g || p }, ({ isFocused: t, isHovered: c }) => a.createElement(l.Z, { style: p && v.flexGrow }, a.createElement(m.ZP, { size: g ? "headline2" : void 0, style: [v.text, { color: this._getTextColor(P, c, g, p) }, d && v.compactText, g && t && v.focusedText], weight: B }, e && a.createElement(e, { style: v.icon }), i, g || p ? null : a.createElement(l.Z, { style: P && [v.border, { backgroundColor: s.default.theme.colors[r] }] })), n ? a.createElement(h.Z, { count: n, standalone: !0, style: [v.badge, n >= 10 && v.multiDigitBadge, n >= 20 && v.truncatedCountBadge], truncatedCountFormatter: x, unreadCountLabel: y, withBorder: !1 }) : o ? a.createElement(h.Z, { pip: !0, standalone: !0, style: v.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (w.contextType = g.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const v = s.default.create((e) => ({
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
                Z = w,
                E = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                k = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: s, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = r.ZP.useProps(),
                        h = m() && !s,
                        g = a.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: i, ...r }, c) => {
                                    const d = h ? [E.linkRedesign, 0 === c && E.firstLinkRedesign, e && 0 === c && E.withNoPaddingStart] : void 0;
                                    return a.createElement(Z, (0, o.Z)({ viewType: i }, r, { isCompact: n, isPillLink: s, isRoundedRect: l, isWebRedesign: h, style: d }), t);
                                }),
                            [e, n, s, l, h, c],
                        );
                    return a.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: s && E.gap, childrenStyle: !h && E.flexGrow, key: u, style: [s ? null : E.segmentedControl, h && E.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                a = n(890601),
                i = n(783427),
                r = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        662678: (e, t, n) => {
            n.d(t, { G: () => a, Z: () => o });
            n(136728);
            const o = function (e, t) {
                return a(e, t);
            };
            function a(e, t) {
                return e.reduce(
                    (n, o, a) => {
                        const i = t ? t(o, a, e) : !!o;
                        return i && n[0].push(o), !i && n[1].push(o), n;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsMonetization-bc6ccf4c.83defc6a.js.map

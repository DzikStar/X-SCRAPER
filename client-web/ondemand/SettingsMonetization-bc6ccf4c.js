"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsMonetization-bc6ccf4c", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        779610: (e, t, o) => {
            o.d(t, { Z: () => d });
            var i = o(202784),
                r = o(325686),
                n = o(191796),
                a = o(58399),
                l = o(731708),
                s = o(952428),
                c = o(392237);
            const d = (e) => {
                    const { decoration: t, description: o, disabled: d = !1, isActive: u = !1, label: m, link: h, onPress: g, paddingHorizontal: b, renderRightContent: f, role: y = "tab", styleOverride: v, testID: x = "pivot", thumbnail: C, thumbnailSize: w, withoutArrow: Z = !1 } = e,
                        E = [p.thumbnailContainer, "medium" === w && p.thumbnailContainerMedium],
                        S = "string" == typeof m ? i.createElement(l.ZP, null, m) : m,
                        k = "object" == typeof h && h.external && !h.openInSameFrame,
                        z = o ? ("string" == typeof o ? i.createElement(l.ZP, { color: "gray700", size: "subtext2", testID: `${x}-description` }, o) : o) : null,
                        R = i.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return i.createElement(s.Z, { "aria-selected": "tab" === y ? u : null, disabled: d, link: d ? void 0 : h, onPress: g, role: y, style: [p.root, R, d && p.disabled, v], testID: x, withInteractiveStyling: !!h || !!g }, i.createElement(r.Z, { style: p.contentContainer }, C ? i.createElement(r.Z, { style: E }, C) : null, i.createElement(r.Z, { style: p.content }, S, z), f ? f() : null, (!h && !g) || d || Z ? null : k ? i.createElement(n.default, { style: p.icon }) : i.createElement(a.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        536606: (e, t, o) => {
            o.d(t, { Z: () => u });
            var i = o(202784),
                r = o(325686),
                n = o(731708),
                a = o(352924),
                l = o(822399),
                s = o(98538),
                c = o(392237);
            const d = (e) => {
                const { decoration: t, isCompact: o, progressBarConfig: d, statConfig: u, title: m, valueCurrent: h, valueMax: g } = e,
                    b = (0, a.F)(),
                    f = ((y = d), c.default.theme.colors[y?.color || "blue900"]);
                var y;
                const v = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"] };
                    })(d),
                    x = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"], height: c.default.theme.spaces[e?.height || "space8"], backgroundColor: c.default.theme.colors.gray50 };
                    })(d);
                return i.createElement(r.Z, { style: p.root }, i.createElement(r.Z, { style: p.decoration }, t), i.createElement(r.Z, { style: p.title }, i.createElement(n.ZP, { size: "subtext2", weight: "medium" }, m)), i.createElement(r.Z, { id: b, style: p.valueLabel }, u.value ? i.createElement(s.Z, null, i.createElement(s.Z.Value, null, u.value), i.createElement(s.Z.Label, null, u.label)) : i.createElement(n.ZP, { weight: "bold" }, u.label)), i.createElement(r.Z, { style: o ? p.progressBarContainerCompact : p.progressBarContainer, testID: "progressBarStats-progressBarContainer" }, i.createElement(l.Z, { "aria-describedby": b, "aria-valuemax": g, colorValue: f, progress: h / g, progressStyle: v, style: x })));
            };
            const p = c.default.create((e) => ({ root: { display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "min-content auto auto", marginBottom: e.spaces.space16 }, decoration: { gridRow: "1/3", gridColumn: "1/2", fontSize: "30px" }, title: { display: "flex", alignItems: "flex-start" }, valueLabel: { display: "flex", alignItems: "flex-end" }, progressBarContainer: { gridRow: "2/3", gridColumn: "2/4", marginTop: e.spaces.space8 }, progressBarContainerCompact: { gridRow: "2/3", gridColumn: "2/4" } })),
                u = i.memo(d);
        },
        98538: (e, t, o) => {
            o.d(t, { Z: () => m });
            var i = o(202784),
                r = o(325686),
                n = o(731708),
                a = o(891198),
                l = o(280278),
                s = o(392237);
            const c = "subtext1",
                d = i.createContext({ onMedia: !1 });
            class p extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, a.Gb)(e) !== (0, a.wl)(e) ? { label: (0, a.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: o, onPress: r } = this.props;
                    return i.createElement(n.ZP, { color: o ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: r }, i.createElement(d.Provider, { value: { onMedia: o } }, e));
                }
            }
            (p.Group = (e) =>
                i.createElement(
                    r.Z,
                    { style: [u.row, e.style] },
                    i.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, o) => i.createElement(r.Z, { key: t, style: t < o.length - 1 && u.groupItemNonLast }, e)),
                )),
                (p.Label = ({ children: e, style: t }) => i.createElement(d.Consumer, null, ({ onMedia: o }) => i.createElement(n.ZP, { children: e, color: o ? "white" : "gray700", size: c, style: t }))),
                (p.Value = ({ animated: e, children: t, count: o, style: r, weight: a = "bold" }) => i.createElement(d.Consumer, null, ({ onMedia: s }) => (e ? i.createElement(l.ZP, { children: t, count: o, size: c, style: r, weight: a }) : i.createElement(n.ZP, { children: t, color: s ? "white" : "text", size: c, style: r, weight: a }))));
            const u = s.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                m = p;
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => S });
            var i = o(807896),
                r = o(202784),
                n = o(194504),
                a = o(235902),
                l = o(392237),
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
                v = () => d().ce4e85ae,
                x = d().fb9f6f39;
            class C extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: i, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: i, method: "push", state: { ...r, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, i) => {
                            const r = l.default.theme.colors.text,
                                n = l.default.theme.colors.gray700;
                            return o || i ? (e || t ? r : n) : e ? r : n;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: i, children: n, color: a, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: g, retainScrollPosition: C, style: Z, to: E } = this.props,
                        { location: S } = this.state,
                        k = E ? this._getMemoizedLink(E, C) : void 0,
                        z = c ? c(E) : S?.pathname === k?.pathname,
                        R = b.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? w.pillHoverStyle.backgroundColor : void 0 }),
                        B = g ? "medium" : z ? "bold" : "medium";
                    return r.createElement(f.Z, { "aria-label": t, "aria-selected": z, focusable: !!z, interactiveStyles: R, link: k, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [w.pillStyle] : [w.link]), ...(p && z ? [w.pillActiveStyle] : []), d ? (p ? w.compactPill : w.compactLink) : null, u ? w.roundedRect : null, Z], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => r.createElement(s.Z, { style: p && w.flexGrow }, r.createElement(m.ZP, { size: g ? "headline2" : void 0, style: [w.text, { color: this._getTextColor(z, c, g, p) }, d && w.compactText, g && t && w.focusedText, p && w.pillTextStyle, p && z && w.pillActiveTextStyle, p && c && w.pillHoverTextStyle], weight: B }, e && r.createElement(e, { style: w.icon }), n, g || p ? null : r.createElement(s.Z, { style: z && [w.border, { backgroundColor: l.default.theme.colors[a] }] })), o ? r.createElement(h.Z, { count: o, standalone: !0, style: [w.badge, o >= 10 && w.multiDigitBadge, o >= 20 && w.truncatedCountBadge], truncatedCountFormatter: x, unreadCountLabel: y, withBorder: !1 }) : i ? r.createElement(h.Z, { pip: !0, standalone: !0, style: w.badgePip, textColor: "red500", unreadCountLabel: v, withBorder: !1 }) : null));
                }
            }
            (C.contextType = g.Z), (C.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const w = l.default.create((e) => ({
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
                E = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                S = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: l, isRoundedRect: s, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = a.ZP.useProps(),
                        h = m() && !l,
                        g = r.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: n, ...a }, c) => {
                                    const d = h ? [E.linkRedesign, 0 === c && E.firstLinkRedesign, e && 0 === c && E.withNoPaddingStart] : void 0;
                                    return r.createElement(Z, (0, i.Z)({ viewType: n }, a, { isCompact: o, isPillLink: l, isRoundedRect: s, isWebRedesign: h, style: d }), t);
                                }),
                            [e, o, l, s, h, c],
                        );
                    return r.createElement(n.Z, { "aria-label": t, buttonsContainerStyle: l && E.gap, childrenStyle: !h && E.flexGrow, key: u, style: [l ? null : E.segmentedControl, h && E.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        58399: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                a = o(717683),
                l = o(347101);
            const s = (e = {}) => {
                const t = i.useContext(a.Z),
                    { direction: o } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style, t && l.Z.iconRTL], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: o });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
        246492: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                a = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        264171: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                a = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                a = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        262009: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                a = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        452693: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var i = o(202784),
                r = o(890601),
                n = o(783427),
                a = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        662678: (e, t, o) => {
            o.d(t, { G: () => r, Z: () => i });
            o(136728);
            const i = function (e, t) {
                return r(e, t);
            };
            function r(e, t) {
                return e.reduce(
                    (o, i, r) => {
                        const n = t ? t(i, r, e) : !!i;
                        return n && o[0].push(i), !n && o[1].push(i), o;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsMonetization-bc6ccf4c.9a1e6dba.js.map

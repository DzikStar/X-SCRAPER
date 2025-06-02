"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsMonetization-bc6ccf4c"],
    {
        779610: (e, t, o) => {
            o.d(t, { Z: () => d });
            var i = o(202784),
                n = o(325686),
                r = o(191796),
                a = o(58399),
                l = o(731708),
                s = o(952428),
                c = o(392237);
            const d = (e) => {
                    const { decoration: t, description: o, disabled: d = !1, isActive: u = !1, label: m, link: g, onPress: h, paddingHorizontal: b, renderRightContent: f, role: y = "tab", styleOverride: x, testID: C = "pivot", thumbnail: v, thumbnailSize: w, withoutArrow: S = !1 } = e,
                        k = [p.thumbnailContainer, "medium" === w && p.thumbnailContainerMedium],
                        Z = "string" == typeof m ? i.createElement(l.ZP, null, m) : m,
                        E = "object" == typeof g && g.external && !g.openInSameFrame,
                        R = o ? ("string" == typeof o ? i.createElement(l.ZP, { color: "gray700", size: "subtext2", testID: `${C}-description` }, o) : o) : null,
                        z = i.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return i.createElement(s.Z, { "aria-selected": "tab" === y ? u : null, disabled: d, link: d ? void 0 : g, onPress: h, role: y, style: [p.root, z, d && p.disabled, x], testID: C, withInteractiveStyling: !!g || !!h }, i.createElement(n.Z, { style: p.contentContainer }, v ? i.createElement(n.Z, { style: k }, v) : null, i.createElement(n.Z, { style: p.content }, Z, R), f ? f() : null, (!g && !h) || d || S ? null : E ? i.createElement(r.default, { style: p.icon }) : i.createElement(a.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        536606: (e, t, o) => {
            o.d(t, { Z: () => u });
            var i = o(202784),
                n = o(325686),
                r = o(731708),
                a = o(352924),
                l = o(822399),
                s = o(98538),
                c = o(392237);
            const d = (e) => {
                const { decoration: t, isCompact: o, progressBarConfig: d, statConfig: u, title: m, valueCurrent: g, valueMax: h } = e,
                    b = (0, a.F)(),
                    f = ((y = d), c.default.theme.colors[y?.color || "blue900"]);
                var y;
                const x = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"] };
                    })(d),
                    C = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"], height: c.default.theme.spaces[e?.height || "space8"], backgroundColor: c.default.theme.colors.gray50 };
                    })(d);
                return i.createElement(n.Z, { style: p.root }, i.createElement(n.Z, { style: p.decoration }, t), i.createElement(n.Z, { style: p.title }, i.createElement(r.ZP, { size: "subtext2", weight: "medium" }, m)), i.createElement(n.Z, { id: b, style: p.valueLabel }, u.value ? i.createElement(s.Z, null, i.createElement(s.Z.Value, null, u.value), i.createElement(s.Z.Label, null, u.label)) : i.createElement(r.ZP, { weight: "bold" }, u.label)), i.createElement(n.Z, { style: o ? p.progressBarContainerCompact : p.progressBarContainer, testID: "progressBarStats-progressBarContainer" }, i.createElement(l.Z, { "aria-describedby": b, "aria-valuemax": h, colorValue: f, progress: g / h, progressStyle: x, style: C })));
            };
            const p = c.default.create((e) => ({ root: { display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "min-content auto auto", marginBottom: e.spaces.space16 }, decoration: { gridRow: "1/3", gridColumn: "1/2", fontSize: "30px" }, title: { display: "flex", alignItems: "flex-start" }, valueLabel: { display: "flex", alignItems: "flex-end" }, progressBarContainer: { gridRow: "2/3", gridColumn: "2/4", marginTop: e.spaces.space8 }, progressBarContainerCompact: { gridRow: "2/3", gridColumn: "2/4" } })),
                u = i.memo(d);
        },
        98538: (e, t, o) => {
            o.d(t, { Z: () => m });
            var i = o(202784),
                n = o(325686),
                r = o(731708),
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
                    const { children: e, link: t, onMedia: o, onPress: n } = this.props;
                    return i.createElement(r.ZP, { color: o ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: n }, i.createElement(d.Provider, { value: { onMedia: o } }, e));
                }
            }
            (p.Group = (e) =>
                i.createElement(
                    n.Z,
                    { style: [u.row, e.style] },
                    i.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, o) => i.createElement(n.Z, { key: t, style: t < o.length - 1 && u.groupItemNonLast }, e)),
                )),
                (p.Label = ({ children: e, style: t }) => i.createElement(d.Consumer, null, ({ onMedia: o }) => i.createElement(r.ZP, { children: e, color: o ? "white" : "gray700", size: c, style: t }))),
                (p.Value = ({ animated: e, children: t, count: o, style: n, weight: a = "bold" }) => i.createElement(d.Consumer, null, ({ onMedia: s }) => (e ? i.createElement(l.ZP, { children: t, count: o, size: c, style: n, weight: a }) : i.createElement(r.ZP, { children: t, color: s ? "white" : "text", size: c, style: n, weight: a }))));
            const u = s.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                m = p;
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => Z });
            var i = o(807896),
                n = o(202784),
                r = o(194504),
                a = o(235902),
                l = o(392237),
                s = o(325686),
                c = o(111677),
                d = o.n(c),
                p = o(912021),
                u = o(516951),
                m = o(731708),
                g = o(310088),
                h = o(175993),
                b = o(58881),
                f = o(530732);
            const y = d().d2414d31,
                x = () => d().ce4e85ae,
                C = d().fb9f6f39;
            class v extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: i, state: n } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: i, method: "push", state: { ...n, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, i) => {
                            const n = l.default.theme.colors.text,
                                r = l.default.theme.colors.gray700;
                            return o || i ? (e || t ? n : r) : e ? n : r;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: i, children: r, color: a, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: h, retainScrollPosition: v, style: S, to: k } = this.props,
                        { location: Z } = this.state,
                        E = k ? this._getMemoizedLink(k, v) : void 0,
                        R = c ? c(k) : Z?.pathname === E?.pathname,
                        z = b.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? w.pillHoverStyle.backgroundColor : void 0 }),
                        P = h ? "medium" : R ? "bold" : "medium";
                    return n.createElement(f.Z, { "aria-label": t, "aria-selected": R, focusable: !!R, interactiveStyles: z, link: E, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [w.pillStyle] : [w.link]), ...(p && R ? [w.pillActiveStyle] : []), d ? (p ? w.compactPill : w.compactLink) : null, u ? w.roundedRect : null, S], withoutInteractiveStyles: h }, ({ isFocused: t, isHovered: c }) => n.createElement(s.Z, { style: p && w.flexGrow }, n.createElement(m.ZP, { size: h ? "headline2" : void 0, style: [w.text, { color: this._getTextColor(R, c, h, p) }, d && w.compactText, h && t && w.focusedText, p && w.pillTextStyle, p && R && w.pillActiveTextStyle, p && c && w.pillHoverTextStyle], weight: P }, e && n.createElement(e, { style: w.icon }), r, h || p ? null : n.createElement(s.Z, { style: R && [w.border, { backgroundColor: l.default.theme.colors[a] }] })), o ? n.createElement(g.Z, { count: o, standalone: !0, style: [w.badge, o >= 10 && w.multiDigitBadge, o >= 20 && w.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: y, withBorder: !1 }) : i ? n.createElement(g.Z, { pip: !0, standalone: !0, style: w.badgePip, textColor: "red500", unreadCountLabel: x, withBorder: !1 }) : null));
                }
            }
            (v.contextType = h.Z), (v.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
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
                S = v,
                k = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                Z = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: l, isRoundedRect: s, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = a.ZP.useProps(),
                        g = m() && !l,
                        h = n.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: r, ...a }, c) => {
                                    const d = g ? [k.linkRedesign, 0 === c && k.firstLinkRedesign, e && 0 === c && k.withNoPaddingStart] : void 0;
                                    return n.createElement(S, (0, i.Z)({ viewType: r }, a, { isCompact: o, isPillLink: l, isRoundedRect: s, isWebRedesign: g, style: d }), t);
                                }),
                            [e, o, l, s, g, c],
                        );
                    return n.createElement(r.Z, { "aria-label": t, buttonsContainerStyle: l && k.gap, childrenStyle: !g && k.flexGrow, key: u, style: [l ? null : k.segmentedControl, g && k.leftAligned, d], visibleItemIndex: p }, h);
                };
        },
        452693: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var i = o(202784),
                n = o(890601),
                r = o(783427),
                a = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        662678: (e, t, o) => {
            o.d(t, { G: () => n, Z: () => i });
            o(136728);
            const i = function (e, t) {
                return n(e, t);
            };
            function n(e, t) {
                return e.reduce(
                    (o, i, n) => {
                        const r = t ? t(i, n, e) : !!i;
                        return r && o[0].push(i), !r && o[1].push(i), o;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsMonetization-bc6ccf4c.e10162da.js.map

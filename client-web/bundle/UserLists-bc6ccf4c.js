"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-bc6ccf4c", "icons/IconConnectArrows-js"],
    {
        242454: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(807896),
                r = o(202784),
                i = o(325686),
                l = o(731708),
                a = o(58881),
                s = o(530732),
                c = o(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                p = ({ align: e = "center", color: t, label: o, ...p }) => {
                    const u = a.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return r.createElement(i.Z, { style: d.container }, r.createElement(s.Z, (0, n.Z)({}, p, { interactiveStyles: u, style: d.root }), r.createElement(l.ZP, { align: e, color: t }, o)));
                };
        },
        392027: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                r = o(154003),
                i = o(392237);
            class l extends n.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: o, disabled: i, href: l, icon: s, label: c, onPress: d, renderMenu: p, style: u, testID: m } = this.props,
                        g = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, o);
                    return n.createElement(r.ZP, { "aria-label": e, backgroundColor: t, color: g, disabled: i, icon: s, link: l, onPress: d, renderMenu: p, size: "xLarge", style: [a.root, !c && a.iconOnly, u], testID: m }, c);
                }
            }
            l.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const a = i.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                s = l;
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                r = o(325686),
                i = o(235902),
                l = o(885015),
                a = o(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: s } = i.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: a.default.theme.colors[e] ?? a.default.theme.colors.borderColor };
                return o ? n.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, n.createElement(r.Z, { style: c.gapColumn }, n.createElement(r.Z, { style: [c.gap, d] })), n.createElement(r.Z, { style: c.gapText }, o), n.createElement(r.Z, { style: c.gapColumn }, n.createElement(r.Z, { style: [c.gap, d] }))) : n.createElement(r.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = a.default.create((e) => ({ borderColor: { backgroundColor: a.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: a.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                r = o(202784),
                i = o(325686),
                l = o(392237);
            class a extends r.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...l } = this.props,
                        a = r.Children.map(e, (e) => e && r.cloneElement(e, { style: [e.props.style, s.column, o && s.withGutterColumn] }));
                    return r.createElement(i.Z, (0, n.Z)({ style: [t, s.root, o && s.withGutter] }, l), a);
                }
            }
            a.defaultProps = { withGutter: !1 };
            const s = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = a;
        },
        779610: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                r = o(325686),
                i = o(191796),
                l = o(58399),
                a = o(731708),
                s = o(952428),
                c = o(392237);
            const d = (e) => {
                    const { decoration: t, description: o, disabled: d = !1, isActive: u = !1, label: m, link: g, onPress: h, paddingHorizontal: b, renderRightContent: f, role: y = "tab", styleOverride: x, testID: C = "pivot", thumbnail: w, thumbnailSize: Z, withoutArrow: v = !1 } = e,
                        E = [p.thumbnailContainer, "medium" === Z && p.thumbnailContainerMedium],
                        k = "string" == typeof m ? n.createElement(a.ZP, null, m) : m,
                        S = "object" == typeof g && g.external && !g.openInSameFrame,
                        P = o ? ("string" == typeof o ? n.createElement(a.ZP, { color: "gray700", size: "subtext2", testID: `${C}-description` }, o) : o) : null,
                        T = n.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return n.createElement(s.Z, { "aria-selected": "tab" === y ? u : null, disabled: d, link: d ? void 0 : g, onPress: h, role: y, style: [p.root, T, d && p.disabled, x], testID: C, withInteractiveStyling: !!g || !!h }, n.createElement(r.Z, { style: p.contentContainer }, w ? n.createElement(r.Z, { style: E }, w) : null, n.createElement(r.Z, { style: p.content }, k, P), f ? f() : null, (!g && !h) || d || v ? null : S ? n.createElement(i.default, { style: p.icon }) : n.createElement(l.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        280278: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var n = o(202784),
                r = o(325686),
                i = o(827515),
                l = o(461756),
                a = o(731708),
                s = o(392237);
            const c = "up",
                d = "down",
                p = (e, t, o) => {
                    o((o) => {
                        const n = (0, i.Z)(e) ? (e > (o.count || 0) ? c : d) : c;
                        return { ...o, count: e, oldText: o.text, pendingCount: null, pendingText: null, text: t, transitionDirection: n };
                    });
                },
                u = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                u[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const m = { position: "absolute" },
                g = s.default.create({ root: { overflow: "hidden" } }),
                h = (e) => {
                    const { children: t, containerStyle: o, count: s, ...d } = e,
                        [h, b] = n.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        f = n.useRef(!1);
                    return (
                        n.useEffect(
                            () => (
                                (f.current = !0),
                                function () {
                                    f.current = !1;
                                }
                            ),
                            [],
                        ),
                        n.useEffect(() => {
                            if (f.current)
                                if (l.Z.reducedMotionEnabled) b((o) => ({ ...o, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== h.pendingText) {
                                    t === h.text || ((0, i.Z)(e.count) && h.count === e.count) ? b((e) => ({ ...e, pendingCount: null, pendingText: null })) : (b((o) => ({ ...o, pendingCount: e.count, pendingText: t })), h.animating || p(e.count, t, b));
                                }
                        }, [t]),
                        n.useEffect(() => {
                            f.current &&
                                !1 === h.animating &&
                                (h.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              f.current && b((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : h.pendingText && p(h.pendingCount, h.pendingText, b));
                        }, [h.animating, h.oldText]),
                        n.useMemo(() => {
                            const e = u[h.transitionDirection],
                                t = h.oldText && !l.Z.reducedMotionEnabled,
                                i = !h.animating && h.oldText && !l.Z.reducedMotionEnabled,
                                s = { ...m, ...(h.animating ? e.post : e.active) },
                                c = { ...(i ? e.pre : e.active) };
                            return n.createElement(
                                r.Z,
                                { style: [g.root, o] },
                                t ? n.createElement("span", { style: s }, n.createElement(a.ZP, d, h.oldText)) : null,
                                n.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(f.current, b),
                                        style: c,
                                    },
                                    n.createElement(a.ZP, d, h.text),
                                ),
                            );
                        }, [o, d, h, f, b])
                    );
                };
        },
        98538: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(202784),
                r = o(325686),
                i = o(731708),
                l = o(891198),
                a = o(280278),
                s = o(392237);
            const c = "subtext1",
                d = n.createContext({ onMedia: !1 });
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, l.Gb)(e) !== (0, l.wl)(e) ? { label: (0, l.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: o, onPress: r } = this.props;
                    return n.createElement(i.ZP, { color: o ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: r }, n.createElement(d.Provider, { value: { onMedia: o } }, e));
                }
            }
            (p.Group = (e) =>
                n.createElement(
                    r.Z,
                    { style: [u.row, e.style] },
                    n.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, o) => n.createElement(r.Z, { key: t, style: t < o.length - 1 && u.groupItemNonLast }, e)),
                )),
                (p.Label = ({ children: e, style: t }) => n.createElement(d.Consumer, null, ({ onMedia: o }) => n.createElement(i.ZP, { children: e, color: o ? "white" : "gray700", size: c, style: t }))),
                (p.Value = ({ animated: e, children: t, count: o, style: r, weight: l = "bold" }) => n.createElement(d.Consumer, null, ({ onMedia: s }) => (e ? n.createElement(a.ZP, { children: t, count: o, size: c, style: r, weight: l }) : n.createElement(i.ZP, { children: t, color: s ? "white" : "text", size: c, style: r, weight: l }))));
            const u = s.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                m = p;
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => k });
            var n = o(807896),
                r = o(202784),
                i = o(194504),
                l = o(235902),
                a = o(392237),
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
            class w extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: n, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: n, method: "push", state: { ...r, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, n) => {
                            const r = a.default.theme.colors.text,
                                i = a.default.theme.colors.gray700;
                            return o || n ? (e || t ? r : i) : e ? r : i;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: n, children: i, color: l, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: h, retainScrollPosition: w, style: v, to: E } = this.props,
                        { location: k } = this.state,
                        S = E ? this._getMemoizedLink(E, w) : void 0,
                        P = c ? c(E) : k?.pathname === S?.pathname,
                        T = b.Z.generate({ backgroundColor: "transparent", color: a.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? Z.pillHoverStyle.backgroundColor : void 0 }),
                        z = h ? "medium" : P ? "bold" : "medium";
                    return r.createElement(f.Z, { "aria-label": t, "aria-selected": P, focusable: !!P, interactiveStyles: T, link: S, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [Z.pillStyle] : [Z.link]), ...(p && P ? [Z.pillActiveStyle] : []), d ? (p ? Z.compactPill : Z.compactLink) : null, u ? Z.roundedRect : null, v], withoutInteractiveStyles: h }, ({ isFocused: t, isHovered: c }) => r.createElement(s.Z, { style: p && Z.flexGrow }, r.createElement(m.ZP, { size: h ? "headline2" : void 0, style: [Z.text, { color: this._getTextColor(P, c, h, p) }, d && Z.compactText, h && t && Z.focusedText, p && Z.pillTextStyle, p && P && Z.pillActiveTextStyle, p && c && Z.pillHoverTextStyle], weight: z }, e && r.createElement(e, { style: Z.icon }), i, h || p ? null : r.createElement(s.Z, { style: P && [Z.border, { backgroundColor: a.default.theme.colors[l] }] })), o ? r.createElement(g.Z, { count: o, standalone: !0, style: [Z.badge, o >= 10 && Z.multiDigitBadge, o >= 20 && Z.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: y, withBorder: !1 }) : n ? r.createElement(g.Z, { pip: !0, standalone: !0, style: Z.badgePip, textColor: "red500", unreadCountLabel: x, withBorder: !1 }) : null));
                }
            }
            (w.contextType = h.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const Z = a.default.create((e) => ({
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
                v = w,
                E = a.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                k = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: a, isRoundedRect: s, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = l.ZP.useProps(),
                        g = m() && !a,
                        h = r.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: i, ...l }, c) => {
                                    const d = g ? [E.linkRedesign, 0 === c && E.firstLinkRedesign, e && 0 === c && E.withNoPaddingStart] : void 0;
                                    return r.createElement(v, (0, n.Z)({ viewType: i }, l, { isCompact: o, isPillLink: a, isRoundedRect: s, isWebRedesign: g, style: d }), t);
                                }),
                            [e, o, a, s, g, c],
                        );
                    return r.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: a && E.gap, childrenStyle: !g && E.flexGrow, key: u, style: [a ? null : E.segmentedControl, g && E.leftAligned, d], visibleItemIndex: p }, h);
                };
        },
        170397: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var n = o(202784),
                r = o(890601),
                i = o(783427),
                l = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M15.96 1.54L21.41 7l-5.45 5.46-1.42-1.42L17.59 8H3V6h14.59l-3.05-3.04 1.42-1.42zM6.41 18l3.05 3.04-1.42 1.42L2.59 17l5.45-5.46 1.42 1.42L6.41 16H21v2H6.41z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var n = o(202784),
                r = o(890601),
                i = o(783427),
                l = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
        465233: (e, t, o) => {
            o.d(t, { Z: () => r });
            var n = o(716406);
            function r(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(r) : (0, n.Z)(e, (e) => r(e));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-bc6ccf4c.7c8c912a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-1f1c1973"],
    {
        242454: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(807896),
                r = n(202784),
                a = n(325686),
                i = n(731708),
                s = n(58881),
                l = n(530732),
                c = n(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                p = ({ align: e = "center", color: t, label: n, ...p }) => {
                    const u = s.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return r.createElement(a.Z, { style: d.container }, r.createElement(l.Z, (0, o.Z)({}, p, { interactiveStyles: u, style: d.root }), r.createElement(i.ZP, { align: e, color: t }, n)));
                };
        },
        392027: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                r = n(154003),
                a = n(392237);
            class i extends o.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: n, disabled: a, href: i, icon: l, label: c, onPress: d, renderMenu: p, style: u, testID: m } = this.props,
                        g = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, n);
                    return o.createElement(r.ZP, { "aria-label": e, backgroundColor: t, color: g, disabled: a, icon: l, link: i, onPress: d, renderMenu: p, size: "xLarge", style: [s.root, !c && s.iconOnly, u], testID: m }, c);
                }
            }
            i.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const s = a.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                l = i;
        },
        420412: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                r = n(325686),
                a = n(235902),
                i = n(885015),
                s = n(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: n }) {
                const { isWebRedesign: l } = a.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return n ? o.createElement(i.Z, { style: !t && c.root, withGutter: !0 }, o.createElement(r.Z, { style: c.gapColumn }, o.createElement(r.Z, { style: [c.gap, d] })), o.createElement(r.Z, { style: c.gapText }, n), o.createElement(r.Z, { style: c.gapColumn }, o.createElement(r.Z, { style: [c.gap, d] }))) : o.createElement(r.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(807896),
                r = n(202784),
                a = n(325686),
                i = n(392237);
            class s extends r.Component {
                render() {
                    const { children: e, style: t, withGutter: n, ...i } = this.props,
                        s = r.Children.map(e, (e) => e && r.cloneElement(e, { style: [e.props.style, l.column, n && l.withGutterColumn] }));
                    return r.createElement(a.Z, (0, o.Z)({ style: [t, l.root, n && l.withGutter] }, i), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const l = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
        },
        779610: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                r = n(325686),
                a = n(191796),
                i = n(58399),
                s = n(731708),
                l = n(952428),
                c = n(392237);
            const d = (e) => {
                    const { decoration: t, description: n, disabled: d = !1, isActive: u = !1, label: m, link: g, onPress: h, paddingHorizontal: b, renderRightContent: f, role: y = "tab", styleOverride: x, testID: C = "pivot", thumbnail: w, thumbnailSize: Z, withoutArrow: E = !1 } = e,
                        k = [p.thumbnailContainer, "medium" === Z && p.thumbnailContainerMedium],
                        P = "string" == typeof m ? o.createElement(s.ZP, null, m) : m,
                        v = "object" == typeof g && g.external && !g.openInSameFrame,
                        S = n ? ("string" == typeof n ? o.createElement(s.ZP, { color: "gray700", size: "subtext2", testID: `${C}-description` }, n) : n) : null,
                        T = o.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return o.createElement(l.Z, { "aria-selected": "tab" === y ? u : null, disabled: d, link: d ? void 0 : g, onPress: h, role: y, style: [p.root, T, d && p.disabled, x], testID: C, withInteractiveStyling: !!g || !!h }, o.createElement(r.Z, { style: p.contentContainer }, w ? o.createElement(r.Z, { style: k }, w) : null, o.createElement(r.Z, { style: p.content }, P, S), f ? f() : null, (!g && !h) || d || E ? null : v ? o.createElement(a.default, { style: p.icon }) : o.createElement(i.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => h });
            var o = n(202784),
                r = n(325686),
                a = n(827515),
                i = n(461756),
                s = n(731708),
                l = n(392237);
            const c = "up",
                d = "down",
                p = (e, t, n) => {
                    n((n) => {
                        const o = (0, a.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: o };
                    });
                },
                u = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                u[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const m = { position: "absolute" },
                g = l.default.create({ root: { overflow: "hidden" } }),
                h = (e) => {
                    const { children: t, containerStyle: n, count: l, ...d } = e,
                        [h, b] = o.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        f = o.useRef(!1);
                    return (
                        o.useEffect(
                            () => (
                                (f.current = !0),
                                function () {
                                    f.current = !1;
                                }
                            ),
                            [],
                        ),
                        o.useEffect(() => {
                            if (f.current)
                                if (i.Z.reducedMotionEnabled) b((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== h.pendingText) {
                                    t === h.text || ((0, a.Z)(e.count) && h.count === e.count) ? b((e) => ({ ...e, pendingCount: null, pendingText: null })) : (b((n) => ({ ...n, pendingCount: e.count, pendingText: t })), h.animating || p(e.count, t, b));
                                }
                        }, [t]),
                        o.useEffect(() => {
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
                        o.useMemo(() => {
                            const e = u[h.transitionDirection],
                                t = h.oldText && !i.Z.reducedMotionEnabled,
                                a = !h.animating && h.oldText && !i.Z.reducedMotionEnabled,
                                l = { ...m, ...(h.animating ? e.post : e.active) },
                                c = { ...(a ? e.pre : e.active) };
                            return o.createElement(
                                r.Z,
                                { style: [g.root, n] },
                                t ? o.createElement("span", { style: l }, o.createElement(s.ZP, d, h.oldText)) : null,
                                o.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(f.current, b),
                                        style: c,
                                    },
                                    o.createElement(s.ZP, d, h.text),
                                ),
                            );
                        }, [n, d, h, f, b])
                    );
                };
        },
        98538: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(202784),
                r = n(325686),
                a = n(731708),
                i = n(891198),
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
                            return (0, i.Gb)(e) !== (0, i.wl)(e) ? { label: (0, i.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: r } = this.props;
                    return o.createElement(a.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: r }, o.createElement(d.Provider, { value: { onMedia: n } }, e));
                }
            }
            (p.Group = (e) =>
                o.createElement(
                    r.Z,
                    { style: [u.row, e.style] },
                    o.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, n) => o.createElement(r.Z, { key: t, style: t < n.length - 1 && u.groupItemNonLast }, e)),
                )),
                (p.Label = ({ children: e, style: t }) => o.createElement(d.Consumer, null, ({ onMedia: n }) => o.createElement(a.ZP, { children: e, color: n ? "white" : "gray700", size: c, style: t }))),
                (p.Value = ({ animated: e, children: t, count: n, style: r, weight: i = "bold" }) => o.createElement(d.Consumer, null, ({ onMedia: l }) => (e ? o.createElement(s.ZP, { children: t, count: n, size: c, style: r, weight: i }) : o.createElement(a.ZP, { children: t, color: l ? "white" : "text", size: c, style: r, weight: i }))));
            const u = l.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                m = p;
        },
        403556: (e, t, n) => {
            n.d(t, { Z: () => P });
            var o = n(807896),
                r = n(202784),
                a = n(194504),
                i = n(235902),
                s = n(392237),
                l = n(325686),
                c = n(674132),
                d = n.n(c),
                p = n(912021),
                u = n(516951),
                m = n(731708),
                g = n(310088),
                h = n(175993),
                b = n(58881),
                f = n(530732);
            const y = d().d2414d31,
                x = () => d().ce4e85ae,
                C = d().fb9f6f39;
            class w extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: n, query: o, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: o, method: "push", state: { ...r, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, o) => {
                            const r = s.default.theme.colors.text,
                                a = s.default.theme.colors.gray700;
                            return n || o ? (e || t ? r : a) : e ? r : a;
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: o, children: a, color: i, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: h, retainScrollPosition: w, style: E, to: k } = this.props,
                        { location: P } = this.state,
                        v = k ? this._getMemoizedLink(k, w) : void 0,
                        S = c ? c(k) : P?.pathname === v?.pathname,
                        T = b.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0 }),
                        R = h ? "medium" : S ? "bold" : "medium";
                    return r.createElement(f.Z, { "aria-label": t, "aria-selected": S, focusable: !!S, interactiveStyles: T, link: v, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? Z.pill : Z.link, p && S ? Z.active : null, d ? (p ? Z.compactPill : Z.compactLink) : null, u ? Z.roundedRect : null, E], withoutInteractiveStyles: h || p }, ({ isFocused: t, isHovered: c }) => r.createElement(l.Z, { style: p && Z.flexGrow }, r.createElement(m.ZP, { size: h ? "headline2" : void 0, style: [Z.text, { color: this._getTextColor(S, c, h, p) }, d && Z.compactText, h && t && Z.focusedText], weight: R }, e && r.createElement(e, { style: Z.icon }), a, h || p ? null : r.createElement(l.Z, { style: S && [Z.border, { backgroundColor: s.default.theme.colors[i] }] })), n ? r.createElement(g.Z, { count: n, standalone: !0, style: [Z.badge, n >= 10 && Z.multiDigitBadge, n >= 20 && Z.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: y, withBorder: !1 }) : o ? r.createElement(g.Z, { pip: !0, standalone: !0, style: Z.badgePip, textColor: "red500", unreadCountLabel: x, withBorder: !1 }) : null));
                }
            }
            (w.contextType = h.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const Z = s.default.create((e) => ({
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
                E = w,
                k = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                P = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: s, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = i.ZP.useProps(),
                        g = m() && !s,
                        h = r.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...i }, c) => {
                                    const d = g ? [k.linkRedesign, 0 === c && k.firstLinkRedesign, e && 0 === c && k.withNoPaddingStart] : void 0;
                                    return r.createElement(E, (0, o.Z)({ viewType: a }, i, { isCompact: n, isPillLink: s, isRoundedRect: l, isWebRedesign: g, style: d }), t);
                                }),
                            [e, n, s, l, g, c],
                        );
                    return r.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: s && k.gap, childrenStyle: !g && k.flexGrow, key: u, style: [s ? null : k.segmentedControl, g && k.leftAligned, d], visibleItemIndex: p }, h);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-1f1c1973.2a35e6fa.js.map

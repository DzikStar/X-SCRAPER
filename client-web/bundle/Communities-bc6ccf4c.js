"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-bc6ccf4c"],
    {
        738545: (e, t, o) => {
            o.d(t, { ZP: () => E });
            var r = o(202784),
                a = o(325686),
                n = o(674132),
                s = o.n(n),
                i = o(212145),
                l = o(568320),
                c = o(123588),
                d = o(731708),
                p = o(280278),
                m = o(392237),
                u = o(635998);
            const g = s().i2785009,
                h = s().c778d80b,
                b = s().d9687d23,
                f = s().ac73eb5a,
                y = s().c5a9f921,
                x = (e) => {
                    const { label: t, popover: o } = e;
                    return t ? r.createElement(a.Z, { style: Z.labelBar }, r.createElement(d.ZP, { color: "gray700", size: "subtext2", weight: "medium" }, t), o ? r.createElement(u.Z, { label: t, popover: o }) : null) : null;
                },
                C = (e) => {
                    const { style: t, unit: o } = e;
                    return o ? r.createElement(d.ZP, { color: "gray700", style: [Z.unitText, t], weight: "medium" }, o) : null;
                },
                w = (e) => {
                    let t,
                        o,
                        { trendValue: n } = e;
                    return void 0 === n ? null : (Math.abs(n) < 0.1 ? ((n = Math.round(1e3 * n) / 1e3), (t = h(n))) : ((n = Math.round(100 * n) / 100), (t = g(n))), (o = ((e, t) => (e < 0 ? b({ trendValueNegativePercent: t }) : 0 === e ? f : y({ trendValuePositivePercent: t })))(n, t)), n < 0 ? r.createElement(a.Z, { style: Z.trendBar, testID: "trendLabel" }, r.createElement(i.default, { "aria-label": o, style: Z.trendIconNeg }), r.createElement(d.ZP, { "aria-hidden": !0, color: "red500", size: "body", weight: "medium" }, t)) : 0 === n ? r.createElement(a.Z, { style: Z.trendBar, testID: "trendLabel" }, r.createElement(l.default, { "aria-label": o, style: Z.trendIconZero }), r.createElement(d.ZP, { "aria-hidden": !0, color: "gray700", size: "body", weight: "medium" }, t)) : r.createElement(a.Z, { style: Z.trendBar, testID: "trendLabel" }, r.createElement(c.default, { "aria-label": o, style: Z.trendIconPos }), r.createElement(d.ZP, { "aria-hidden": !0, color: "green500", size: "body", weight: "medium" }, t)));
                },
                Z = m.default.create((e) => ({ dataPoint: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, labelBar: { display: "flex", flexDirection: "row", alignItems: "center", marginBottom: e.spaces.space2 }, valueBar: { display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: e.spaces.space4 }, unitText: { flexDirection: "column" }, trendBar: { flexDirection: "row" }, textWithMargin: { marginEnd: e.spaces.space4 }, trendIconPos: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.green500 }, trendIconZero: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.gray700 }, trendIconNeg: { marginTop: e.spaces.space1, marginBottom: e.spaces.space1, marginEnd: e.spaces.space2, height: e.spaces.space16, color: e.colors.red500 } })),
                E = (e) => {
                    const { animated: t, count: o, label: n, popover: s, size: i, subTextList: l, trendValue: c, unit: m, value: u } = e,
                        g = m || void 0 !== c ? Z.textWithMargin : void 0,
                        h = void 0 !== c ? Z.textWithMargin : void 0;
                    return r.createElement(a.Z, { style: Z.dataPoint }, r.createElement(x, { label: n, popover: s }), r.createElement(a.Z, { style: Z.valueBar }, t ? r.createElement(p.ZP, { count: o, size: i, style: g, weight: "bold" }, u) : r.createElement(d.ZP, { size: i, style: g, weight: "bold" }, u), r.createElement(C, { style: h, unit: m }), r.createElement(w, { trendValue: c })), l);
                };
        },
        635998: (e, t, o) => {
            o.d(t, { Z: () => h });
            var r = o(202784),
                a = o(325686),
                n = o(674132),
                s = o.n(n),
                i = o(711223),
                l = o(731708),
                c = o(154003),
                d = o(157130),
                p = o(392237);
            const m = s().affbaf62,
                u = s().c388d026,
                g = p.default.create((e) => ({ popover: { padding: e.spaces.space32 }, popoverTitle: { marginBottom: e.spaces.space8 }, popoverText: { marginBottom: e.spaces.space24 }, iconInformation: { color: e.colors.gray700, fontSize: e.fontSizes.subtext3, cursor: "pointer", marginStart: e.spaces.space4 } })),
                h = (e) => {
                    const { label: t, popover: o } = e;
                    return r.createElement(a.Z, null, r.createElement(d.Z, { enableEnterKeyToggle: !0, preferredVerticalOrientation: "up", renderContent: (e) => r.createElement(a.Z, { role: "dialog", style: g.popover }, r.createElement(a.Z, { style: g.popoverTitle }, r.createElement(l.ZP, { size: "title3", weight: "heavy" }, t)), r.createElement(a.Z, { style: g.popoverText }, o), r.createElement(c.ZP, { onPress: e, type: "primaryOutlined" }, u)), withArrow: !0 }, r.createElement(a.Z, { role: "button" }, r.createElement(i.default, { "aria-label": m, style: g.iconInformation }))));
                };
        },
        392027: (e, t, o) => {
            o.d(t, { Z: () => l });
            var r = o(202784),
                a = o(154003),
                n = o(392237);
            class s extends r.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: o, disabled: n, href: s, icon: l, label: c, onPress: d, renderMenu: p, style: m, testID: u } = this.props,
                        g = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, o);
                    return r.createElement(a.ZP, { "aria-label": e, backgroundColor: t, color: g, disabled: n, icon: l, link: s, onPress: d, renderMenu: p, size: "xLarge", style: [i.root, !c && i.iconOnly, m], testID: u }, c);
                }
            }
            s.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const i = n.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                l = s;
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => l });
            var r = o(202784),
                a = o(325686),
                n = o(235902),
                s = o(885015),
                i = o(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: l } = n.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return o ? r.createElement(s.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(a.Z, { style: c.gapColumn }, r.createElement(a.Z, { style: [c.gap, d] })), r.createElement(a.Z, { style: c.gapText }, o), r.createElement(a.Z, { style: c.gapColumn }, r.createElement(a.Z, { style: [c.gap, d] }))) : r.createElement(a.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(807896),
                a = o(202784),
                n = o(325686),
                s = o(392237);
            class i extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...s } = this.props,
                        i = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, l.column, o && l.withGutterColumn] }));
                    return a.createElement(n.Z, (0, r.Z)({ style: [t, l.root, o && l.withGutter] }, s), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const l = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        30183: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(202784),
                a = o(731708),
                n = o(952428);
            const s = o(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                i = function ({ align: e, link: t, onPress: o, text: i, weight: l, withBottomRadius: c, withDarkerInteractiveBackground: d }) {
                    return r.createElement(n.Z, { link: t, onPress: o, style: [s.root, c && s.withBottomRadius], withDarkerInteractiveBackground: d }, r.createElement(a.ZP, { align: e, color: "primary", weight: l }, i));
                };
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => P });
            var r = o(807896),
                a = o(202784),
                n = o(194504),
                s = o(235902),
                i = o(392237),
                l = o(325686),
                c = o(674132),
                d = o.n(c),
                p = o(912021),
                m = o(516951),
                u = o(731708),
                g = o(310088),
                h = o(175993),
                b = o(58881),
                f = o(530732);
            const y = d().d2414d31,
                x = () => d().ce4e85ae,
                C = d().fb9f6f39;
            class w extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: r, state: a } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: r, method: "push", state: { ...a, lockScroll: t } };
                        })),
                        (this._unlisten = m.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, r) => {
                            const a = i.default.theme.colors.text,
                                n = i.default.theme.colors.gray700;
                            return o || r ? (e || t ? a : n) : e ? a : n;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: r, children: n, color: s, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: m, isWebRedesign: h, retainScrollPosition: w, style: E, to: v } = this.props,
                        { location: P } = this.state,
                        k = v ? this._getMemoizedLink(v, w) : void 0,
                        B = c ? c(v) : P?.pathname === k?.pathname,
                        R = b.Z.generate({ backgroundColor: "transparent", color: i.default.theme.colors.text, insetFocusRing: !0 }),
                        I = h ? "medium" : B ? "bold" : "medium";
                    return a.createElement(f.Z, { "aria-label": t, "aria-selected": B, focusable: !!B, interactiveStyles: R, link: k, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? Z.pill : Z.link, p && B ? Z.active : null, d ? (p ? Z.compactPill : Z.compactLink) : null, m ? Z.roundedRect : null, E], withoutInteractiveStyles: h || p }, ({ isFocused: t, isHovered: c }) => a.createElement(l.Z, { style: p && Z.flexGrow }, a.createElement(u.ZP, { size: h ? "headline2" : void 0, style: [Z.text, { color: this._getTextColor(B, c, h, p) }, d && Z.compactText, h && t && Z.focusedText], weight: I }, e && a.createElement(e, { style: Z.icon }), n, h || p ? null : a.createElement(l.Z, { style: B && [Z.border, { backgroundColor: i.default.theme.colors[s] }] })), o ? a.createElement(g.Z, { count: o, standalone: !0, style: [Z.badge, o >= 10 && Z.multiDigitBadge, o >= 20 && Z.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: y, withBorder: !1 }) : r ? a.createElement(g.Z, { pip: !0, standalone: !0, style: Z.badgePip, textColor: "red500", unreadCountLabel: x, withBorder: !1 }) : null));
                }
            }
            (w.contextType = h.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const Z = i.default.create((e) => ({
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
                v = i.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                P = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: i, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const m = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = s.ZP.useProps(),
                        g = u() && !i,
                        h = a.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: n, ...s }, c) => {
                                    const d = g ? [v.linkRedesign, 0 === c && v.firstLinkRedesign, e && 0 === c && v.withNoPaddingStart] : void 0;
                                    return a.createElement(E, (0, r.Z)({ viewType: n }, s, { isCompact: o, isPillLink: i, isRoundedRect: l, isWebRedesign: g, style: d }), t);
                                }),
                            [e, o, i, l, g, c],
                        );
                    return a.createElement(n.Z, { "aria-label": t, buttonsContainerStyle: i && v.gap, childrenStyle: !g && v.flexGrow, key: m, style: [i ? null : v.segmentedControl, g && v.leftAligned, d], visibleItemIndex: p }, h);
                };
        },
        143095: (e, t, o) => {
            o.d(t, { O: () => a });
            var r = o(202784);
            function a(e) {
                const [t, o] = r.useState(e);
                return [
                    t,
                    r.useMemo(() => {
                        const e = (e) => {
                            if ("boolean" == typeof e) return o(e);
                            o((e) => !e);
                        };
                        return (e.toTrue = o.bind(null, !0)), (e.toFalse = o.bind(null, !1)), (e.toggle = e), e;
                    }, []),
                ];
            }
        },
        338940: (e, t, o) => {
            o.d(t, { Z: () => a });
            o(136728);
            var r = o(688356);
            function a(e) {
                const t = [],
                    o = (0, r.Z)(e);
                for (let e = 0; e < o.length; e++) {
                    const r = o[e].screenName;
                    t.push(r);
                }
                return t;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-bc6ccf4c.59640a6a.js.map

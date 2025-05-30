"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.PremiumJobs"],
    {
        252021: (e, t, o) => {
            o.d(t, { Z: () => a });
            var s = o(202784),
                i = o(107267),
                r = o(115553);
            const a = (e) => {
                (0, i.useHistory)();
                return s.createElement(r.A, e);
            };
        },
        507651: (e, t, o) => {
            o.d(t, { Z: () => c });
            var s = o(807896),
                i = o(202784),
                r = o(107267),
                a = o(403556),
                n = o(791632);
            const l = (e) => {
                    const t = (0, r.useHistory)(),
                        { isCompact: o, ...l } = e;
                    return i.createElement(a.Z, (0, s.Z)({}, l, { isCompact: o || (0, n.HD)(t) }));
                },
                c = i.memo(l);
        },
        292546: (e, t, o) => {
            o.d(t, { Z: () => r });
            o(543673), o(240753), o(128399), o(136728);
            var s = o(202784),
                i = o(107267);
            const r = () => {
                const e = (0, i.useLocation)(),
                    t = (0, i.useHistory)(),
                    [o, r] = s.useState(new URLSearchParams(e.search));
                s.useEffect(() => {
                    r(new URLSearchParams(e.search));
                }, [e.search]);
                const a = s.useCallback(
                    (s, i) => {
                        const r = new URLSearchParams(o);
                        r.set(s, i), t.push(`${e.pathname}?${r.toString()}`);
                    },
                    [t, e.pathname, o],
                );
                return [s.useMemo(() => new URLSearchParams(e.search), [e.search]), a];
            };
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => w });
            var s = o(807896),
                i = o(202784),
                r = o(194504),
                a = o(235902),
                n = o(392237),
                l = o(325686),
                c = o(111677),
                d = o.n(c),
                p = o(912021),
                u = o(516951),
                m = o(731708),
                h = o(310088),
                g = o(175993),
                f = o(58881),
                b = o(530732);
            const y = d().d2414d31,
                x = () => d().ce4e85ae,
                S = d().fb9f6f39;
            class C extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: s, state: i } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: s, method: "push", state: { ...i, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, s) => {
                            const i = n.default.theme.colors.text,
                                r = n.default.theme.colors.gray700;
                            return o || s ? (e || t ? i : r) : e ? i : r;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: s, children: r, color: a, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: g, retainScrollPosition: C, style: v, to: R } = this.props,
                        { location: w } = this.state,
                        P = R ? this._getMemoizedLink(R, C) : void 0,
                        W = c ? c(R) : w?.pathname === P?.pathname,
                        _ = f.Z.generate({ backgroundColor: "transparent", color: n.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? k.pillHoverStyle.backgroundColor : void 0 }),
                        Z = g ? "medium" : W ? "bold" : "medium";
                    return i.createElement(b.Z, { "aria-label": t, "aria-selected": W, focusable: !!W, interactiveStyles: _, link: P, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [k.pillStyle] : [k.link]), ...(p && W ? [k.pillActiveStyle] : []), d ? (p ? k.compactPill : k.compactLink) : null, u ? k.roundedRect : null, v], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => i.createElement(l.Z, { style: p && k.flexGrow }, i.createElement(m.ZP, { size: g ? "headline2" : void 0, style: [k.text, { color: this._getTextColor(W, c, g, p) }, d && k.compactText, g && t && k.focusedText, p && k.pillTextStyle, p && W && k.pillActiveTextStyle, p && c && k.pillHoverTextStyle], weight: Z }, e && i.createElement(e, { style: k.icon }), r, g || p ? null : i.createElement(l.Z, { style: W && [k.border, { backgroundColor: n.default.theme.colors[a] }] })), o ? i.createElement(h.Z, { count: o, standalone: !0, style: [k.badge, o >= 10 && k.multiDigitBadge, o >= 20 && k.truncatedCountBadge], truncatedCountFormatter: S, unreadCountLabel: y, withBorder: !1 }) : s ? i.createElement(h.Z, { pip: !0, standalone: !0, style: k.badgePip, textColor: "red500", unreadCountLabel: x, withBorder: !1 }) : null));
                }
            }
            (C.contextType = g.Z), (C.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const k = n.default.create((e) => ({
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
                v = C,
                R = n.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                w = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: n, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = a.ZP.useProps(),
                        h = m() && !n,
                        g = i.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: r, ...a }, c) => {
                                    const d = h ? [R.linkRedesign, 0 === c && R.firstLinkRedesign, e && 0 === c && R.withNoPaddingStart] : void 0;
                                    return i.createElement(v, (0, s.Z)({ viewType: r }, a, { isCompact: o, isPillLink: n, isRoundedRect: l, isWebRedesign: h, style: d }), t);
                                }),
                            [e, o, n, l, h, c],
                        );
                    return i.createElement(r.Z, { "aria-label": t, buttonsContainerStyle: n && R.gap, childrenStyle: !h && R.flexGrow, key: u, style: [n ? null : R.segmentedControl, h && R.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        353391: (e, t, o) => {
            var s = o(437429),
                i = o(202784),
                r = i.useEffect,
                a = i.useRef;
            e.exports = function (e, t) {
                var o = s(),
                    i = a(null),
                    n = Array.from(e).sort().join("");
                return (
                    r(
                        function () {
                            var s = o.getStore(),
                                r = s.lookupInvalidationState(e),
                                a = s.subscribeToInvalidationState(r, t);
                            return (
                                (i.current = a),
                                function () {
                                    return a.dispose();
                                }
                            );
                        },
                        [n, t, o],
                    ),
                    {
                        dispose: function () {
                            null != i.current && i.current.dispose();
                        },
                    }
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.PremiumJobs.1c79de7a.js.map

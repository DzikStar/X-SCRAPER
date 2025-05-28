"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.PremiumJobs"],
    {
        252021: (e, t, s) => {
            s.d(t, { Z: () => n });
            var o = s(202784),
                a = s(107267),
                i = s(115553);
            const n = (e) => {
                (0, a.useHistory)();
                return o.createElement(i.A, e);
            };
        },
        507651: (e, t, s) => {
            s.d(t, { Z: () => l });
            var o = s(807896),
                a = s(202784),
                i = s(107267),
                n = s(403556),
                r = s(791632);
            const c = (e) => {
                    const t = (0, i.useHistory)();
                    return a.createElement(n.Z, (0, o.Z)({}, e, { isCompact: (0, r.HD)(t) }));
                },
                l = a.memo(c);
        },
        292546: (e, t, s) => {
            s.d(t, { Z: () => i });
            s(543673), s(240753), s(128399), s(136728);
            var o = s(202784),
                a = s(107267);
            const i = () => {
                const e = (0, a.useLocation)(),
                    t = (0, a.useHistory)(),
                    [s, i] = o.useState(new URLSearchParams(e.search));
                o.useEffect(() => {
                    i(new URLSearchParams(e.search));
                }, [e.search]);
                const n = o.useCallback(
                    (o, a) => {
                        const i = new URLSearchParams(s);
                        i.set(o, a), t.push(`${e.pathname}?${i.toString()}`);
                    },
                    [t, e.pathname, s],
                );
                return [o.useMemo(() => new URLSearchParams(e.search), [e.search]), n];
            };
        },
        403556: (e, t, s) => {
            s.d(t, { Z: () => v });
            var o = s(807896),
                a = s(202784),
                i = s(194504),
                n = s(235902),
                r = s(392237),
                c = s(325686),
                l = s(111677),
                d = s.n(l),
                p = s(912021),
                u = s(516951),
                m = s(731708),
                h = s(310088),
                g = s(175993),
                b = s(58881),
                f = s(530732);
            const y = d().d2414d31,
                x = () => d().ce4e85ae,
                C = d().fb9f6f39;
            class k extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: s, query: o, state: a } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: s, query: o, method: "push", state: { ...a, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, s, o) => {
                            const a = r.default.theme.colors.text,
                                i = r.default.theme.colors.gray700;
                            return s || o ? (e || t ? a : i) : e ? a : i;
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
                    const { Icon: e, "aria-label": t, badgeCount: s, badgePip: o, children: i, color: n, isActive: l, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: g, retainScrollPosition: k, style: S, to: w } = this.props,
                        { location: v } = this.state,
                        P = w ? this._getMemoizedLink(w, k) : void 0,
                        _ = l ? l(w) : v?.pathname === P?.pathname,
                        Z = b.Z.generate({ backgroundColor: "transparent", color: r.default.theme.colors.text, insetFocusRing: !0 }),
                        B = g ? "medium" : _ ? "bold" : "medium";
                    return a.createElement(f.Z, { "aria-label": t, "aria-selected": _, focusable: !!_, interactiveStyles: Z, link: P, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? R.pill : R.link, p && _ ? R.active : null, d ? (p ? R.compactPill : R.compactLink) : null, u ? R.roundedRect : null, S], withoutInteractiveStyles: g || p }, ({ isFocused: t, isHovered: l }) => a.createElement(c.Z, { style: p && R.flexGrow }, a.createElement(m.ZP, { size: g ? "headline2" : void 0, style: [R.text, { color: this._getTextColor(_, l, g, p) }, d && R.compactText, g && t && R.focusedText], weight: B }, e && a.createElement(e, { style: R.icon }), i, g || p ? null : a.createElement(c.Z, { style: _ && [R.border, { backgroundColor: r.default.theme.colors[n] }] })), s ? a.createElement(h.Z, { count: s, standalone: !0, style: [R.badge, s >= 10 && R.multiDigitBadge, s >= 20 && R.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: y, withBorder: !1 }) : o ? a.createElement(h.Z, { pip: !0, standalone: !0, style: R.badgePip, textColor: "red500", unreadCountLabel: x, withBorder: !1 }) : null));
                }
            }
            (k.contextType = g.Z), (k.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const R = r.default.create((e) => ({
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
                S = k,
                w = r.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                v = ({ alignFirstItem: e, "aria-label": t, isCompact: s, isPillLink: r, isRoundedRect: c, links: l, style: d, visibleItemIndex: p }) => {
                    const u = l
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = n.ZP.useProps(),
                        h = m() && !r,
                        g = a.useMemo(
                            () =>
                                l.filter(Boolean).map(({ label: t, viewType: i, ...n }, l) => {
                                    const d = h ? [w.linkRedesign, 0 === l && w.firstLinkRedesign, e && 0 === l && w.withNoPaddingStart] : void 0;
                                    return a.createElement(S, (0, o.Z)({ viewType: i }, n, { isCompact: s, isPillLink: r, isRoundedRect: c, isWebRedesign: h, style: d }), t);
                                }),
                            [e, s, r, c, h, l],
                        );
                    return a.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: r && w.gap, childrenStyle: !h && w.flexGrow, key: u, style: [r ? null : w.segmentedControl, h && w.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        353391: (e, t, s) => {
            var o = s(437429),
                a = s(202784),
                i = a.useEffect,
                n = a.useRef;
            e.exports = function (e, t) {
                var s = o(),
                    a = n(null),
                    r = Array.from(e).sort().join("");
                return (
                    i(
                        function () {
                            var o = s.getStore(),
                                i = o.lookupInvalidationState(e),
                                n = o.subscribeToInvalidationState(i, t);
                            return (
                                (a.current = n),
                                function () {
                                    return n.dispose();
                                }
                            );
                        },
                        [r, t, s],
                    ),
                    {
                        dispose: function () {
                            null != a.current && a.current.dispose();
                        },
                    }
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.PremiumJobs.8d1e407a.js.map

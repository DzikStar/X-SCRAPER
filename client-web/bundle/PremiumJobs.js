(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.PremiumJobs"],
    {
        252021: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => r });
            var s = o(202784),
                i = o(107267),
                n = o(115553);
            const r = (e) => {
                (0, i.useHistory)();
                return s.createElement(n.A, e);
            };
        },
        507651: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => c });
            var s = o(807896),
                i = o(202784),
                n = o(107267),
                r = o(403556),
                a = o(791632);
            const l = (e) => {
                    const t = (0, n.useHistory)(),
                        { isCompact: o, ...l } = e;
                    return i.createElement(r.Z, (0, s.Z)({}, l, { isCompact: o || (0, a.HD)(t) }));
                },
                c = i.memo(l);
        },
        292546: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => n });
            o(543673), o(240753), o(128399), o(136728);
            var s = o(202784),
                i = o(107267);
            const n = () => {
                const e = (0, i.useLocation)(),
                    t = (0, i.useHistory)(),
                    [o, n] = s.useState(new URLSearchParams(e.search));
                s.useEffect(() => {
                    n(new URLSearchParams(e.search));
                }, [e.search]);
                const r = s.useCallback(
                    (s, i) => {
                        const n = new URLSearchParams(o);
                        n.set(s, i), t.push(`${e.pathname}?${n.toString()}`);
                    },
                    [t, e.pathname, o],
                );
                return [s.useMemo(() => new URLSearchParams(e.search), [e.search]), r];
            };
        },
        403556: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => R });
            var s = o(807896),
                i = o(202784),
                n = o(194504),
                r = o(235902),
                a = o(392237),
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
                            const i = a.default.theme.colors.text,
                                n = a.default.theme.colors.gray700;
                            return o || s ? (e || t ? i : n) : e ? i : n;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: s, children: n, color: r, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: g, retainScrollPosition: C, style: k, to: w } = this.props,
                        { location: R } = this.state,
                        P = w ? this._getMemoizedLink(w, C) : void 0,
                        W = c ? c(w) : R?.pathname === P?.pathname,
                        T = f.Z.generate({ backgroundColor: "transparent", color: a.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? v.pillHoverStyle.backgroundColor : void 0 }),
                        _ = g ? "medium" : W ? "bold" : "medium";
                    return i.createElement(b.Z, { "aria-label": t, "aria-selected": W, focusable: !!W, interactiveStyles: T, link: P, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [v.pillStyle] : [v.link]), ...(p && W ? [v.pillActiveStyle] : []), d ? (p ? v.compactPill : v.compactLink) : null, u ? v.roundedRect : null, k], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => i.createElement(l.Z, { style: p && v.flexGrow }, i.createElement(m.ZP, { size: g ? "headline2" : void 0, style: [v.text, { color: this._getTextColor(W, c, g, p) }, d && v.compactText, g && t && v.focusedText, p && v.pillTextStyle, p && W && v.pillActiveTextStyle, p && c && v.pillHoverTextStyle], weight: _ }, e && i.createElement(e, { style: v.icon }), n, g || p ? null : i.createElement(l.Z, { style: W && [v.border, { backgroundColor: a.default.theme.colors[r] }] })), o ? i.createElement(h.Z, { count: o, standalone: !0, style: [v.badge, o >= 10 && v.multiDigitBadge, o >= 20 && v.truncatedCountBadge], truncatedCountFormatter: S, unreadCountLabel: y, withBorder: !1 }) : s ? i.createElement(h.Z, { pip: !0, standalone: !0, style: v.badgePip, textColor: "red500", unreadCountLabel: x, withBorder: !1 }) : null));
                }
            }
            (C.contextType = g.Z), (C.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
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
                k = C,
                w = a.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                R = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: a, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = r.ZP.useProps(),
                        h = m() && !a,
                        g = i.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: n, ...r }, c) => {
                                    const d = h ? [w.linkRedesign, 0 === c && w.firstLinkRedesign, e && 0 === c && w.withNoPaddingStart] : void 0;
                                    return i.createElement(k, (0, s.Z)({ viewType: n }, r, { isCompact: o, isPillLink: a, isRoundedRect: l, isWebRedesign: h, style: d }), t);
                                }),
                            [e, o, a, l, h, c],
                        );
                    return i.createElement(n.Z, { "aria-label": t, buttonsContainerStyle: a && w.gap, childrenStyle: !h && w.flexGrow, key: u, style: [a ? null : w.segmentedControl, h && w.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        666536: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => n });
            var s = o(936386),
                i = o.n(s);
            const n = (e, t, o) => i()(e, t, o);
        },
        936386: (e) => {
            function t(e, t, o) {
                var s, i, n, r, a;
                function l() {
                    var c = Date.now() - r;
                    c < t && c >= 0 ? (s = setTimeout(l, t - c)) : ((s = null), o || ((a = e.apply(n, i)), (n = i = null)));
                }
                null == t && (t = 100);
                var c = function () {
                    (n = this), (i = arguments), (r = Date.now());
                    var c = o && !s;
                    return s || (s = setTimeout(l, t)), c && ((a = e.apply(n, i)), (n = i = null)), a;
                };
                return (
                    (c.clear = function () {
                        s && (clearTimeout(s), (s = null));
                    }),
                    (c.flush = function () {
                        s && ((a = e.apply(n, i)), (n = i = null), clearTimeout(s), (s = null));
                    }),
                    c
                );
            }
            (t.debounce = t), (e.exports = t);
        },
        353391: (e, t, o) => {
            "use strict";
            var s = o(437429),
                i = o(202784),
                n = i.useEffect,
                r = i.useRef;
            e.exports = function (e, t) {
                var o = s(),
                    i = r(null),
                    a = Array.from(e).sort().join("");
                return (
                    n(
                        function () {
                            var s = o.getStore(),
                                n = s.lookupInvalidationState(e),
                                r = s.subscribeToInvalidationState(n, t);
                            return (
                                (i.current = r),
                                function () {
                                    return r.dispose();
                                }
                            );
                        },
                        [a, t, o],
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.PremiumJobs.af50e7da.js.map

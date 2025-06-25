(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.PremiumJobs"],
    {
        252021: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => r });
            var i = o(202784),
                s = o(107267),
                n = o(115553);
            const r = (e) => {
                (0, s.useHistory)();
                return i.createElement(n.A, e);
            };
        },
        507651: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => c });
            var i = o(807896),
                s = o(202784),
                n = o(107267),
                r = o(403556),
                l = o(791632);
            const a = (e) => {
                    const t = (0, n.useHistory)(),
                        { isCompact: o, ...a } = e;
                    return s.createElement(r.Z, (0, i.Z)({}, a, { isCompact: o || (0, l.HD)(t) }));
                },
                c = s.memo(a);
        },
        403556: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => R });
            var i = o(807896),
                s = o(202784),
                n = o(194504),
                r = o(235902),
                l = o(392237),
                a = o(325686),
                c = o(111677),
                d = o.n(c),
                p = o(912021),
                u = o(516951),
                m = o(731708),
                g = o(310088),
                h = o(175993),
                f = o(58881),
                b = o(530732);
            const y = d().d2414d31,
                x = () => d().ce4e85ae,
                C = d().fb9f6f39;
            class S extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: i, state: s } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: i, method: "push", state: { ...s, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, i) => {
                            const s = l.default.theme.colors.text,
                                n = l.default.theme.colors.gray700;
                            return o || i ? (e || t ? s : n) : e ? s : n;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: i, children: n, color: r, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: h, retainScrollPosition: S, style: k, to: w } = this.props,
                        { location: R } = this.state,
                        W = w ? this._getMemoizedLink(w, S) : void 0,
                        T = c ? c(w) : R?.pathname === W?.pathname,
                        _ = f.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? v.pillHoverStyle.backgroundColor : void 0 }),
                        P = h ? "medium" : T ? "bold" : "medium";
                    return s.createElement(b.Z, { "aria-label": t, "aria-selected": T, focusable: !!T, interactiveStyles: _, link: W, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [v.pillStyle] : [v.link]), ...(p && T ? [v.pillActiveStyle] : []), d ? (p ? v.compactPill : v.compactLink) : null, u ? v.roundedRect : null, k], withoutInteractiveStyles: h }, ({ isFocused: t, isHovered: c }) => s.createElement(a.Z, { style: p && v.flexGrow }, s.createElement(m.ZP, { size: h ? "headline2" : void 0, style: [v.text, { color: this._getTextColor(T, c, h, p) }, d && v.compactText, h && t && v.focusedText, p && v.pillTextStyle, p && T && v.pillActiveTextStyle, p && c && v.pillHoverTextStyle], weight: P }, e && s.createElement(e, { style: v.icon }), n, h || p ? null : s.createElement(a.Z, { style: T && [v.border, { backgroundColor: l.default.theme.colors[r] }] })), o ? s.createElement(g.Z, { count: o, standalone: !0, style: [v.badge, o >= 10 && v.multiDigitBadge, o >= 20 && v.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: y, withBorder: !1 }) : i ? s.createElement(g.Z, { pip: !0, standalone: !0, style: v.badgePip, textColor: "red500", unreadCountLabel: x, withBorder: !1 }) : null));
                }
            }
            (S.contextType = h.Z), (S.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const v = l.default.create((e) => ({
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
                k = S,
                w = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                R = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: l, isRoundedRect: a, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = r.ZP.useProps(),
                        g = m() && !l,
                        h = s.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: n, ...r }, c) => {
                                    const d = g ? [w.linkRedesign, 0 === c && w.firstLinkRedesign, e && 0 === c && w.withNoPaddingStart] : void 0;
                                    return s.createElement(k, (0, i.Z)({ viewType: n }, r, { isCompact: o, isPillLink: l, isRoundedRect: a, isWebRedesign: g, style: d }), t);
                                }),
                            [e, o, l, a, g, c],
                        );
                    return s.createElement(n.Z, { "aria-label": t, buttonsContainerStyle: l && w.gap, childrenStyle: !g && w.flexGrow, key: u, style: [l ? null : w.segmentedControl, g && w.leftAligned, d], visibleItemIndex: p }, h);
                };
        },
        666536: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => n });
            var i = o(936386),
                s = o.n(i);
            const n = (e, t, o) => s()(e, t, o);
        },
        936386: (e) => {
            function t(e, t, o) {
                var i, s, n, r, l;
                function a() {
                    var c = Date.now() - r;
                    c < t && c >= 0 ? (i = setTimeout(a, t - c)) : ((i = null), o || ((l = e.apply(n, s)), (n = s = null)));
                }
                null == t && (t = 100);
                var c = function () {
                    (n = this), (s = arguments), (r = Date.now());
                    var c = o && !i;
                    return i || (i = setTimeout(a, t)), c && ((l = e.apply(n, s)), (n = s = null)), l;
                };
                return (
                    (c.clear = function () {
                        i && (clearTimeout(i), (i = null));
                    }),
                    (c.flush = function () {
                        i && ((l = e.apply(n, s)), (n = s = null), clearTimeout(i), (i = null));
                    }),
                    c
                );
            }
            (t.debounce = t), (e.exports = t);
        },
        353391: (e, t, o) => {
            "use strict";
            var i = o(437429),
                s = o(202784),
                n = s.useEffect,
                r = s.useRef;
            e.exports = function (e, t) {
                var o = i(),
                    s = r(null),
                    l = Array.from(e).sort().join("");
                return (
                    n(
                        function () {
                            var i = o.getStore(),
                                n = i.lookupInvalidationState(e),
                                r = i.subscribeToInvalidationState(n, t);
                            return (
                                (s.current = r),
                                function () {
                                    return r.dispose();
                                }
                            );
                        },
                        [l, t, o],
                    ),
                    {
                        dispose: function () {
                            null != s.current && s.current.dispose();
                        },
                    }
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.PremiumJobs.00238c6a.js.map

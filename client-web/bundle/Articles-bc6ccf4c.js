"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Articles-bc6ccf4c"],
    {
        425376: (e, t, a) => {
            a.d(t, { Z: () => g });
            var i = a(202784),
                o = a(325686),
                s = a(494394),
                r = a(530525),
                n = a(731708),
                l = a(439592),
                c = a(154003),
                d = a(769281),
                p = a(30899),
                h = a(138099),
                m = a(392237);
            const u = m.default.create((e) => ({ root: { paddingVertical: e.spacesPx.space32 }, rootWithImage: { paddingTop: 0 }, graphic: { marginBottom: e.spacesPx.space20 }, icon: { alignSelf: "center", height: e.spacesPx.space64, width: e.spacesPx.space64 }, container: { paddingHorizontal: e.spacesPx.space32 }, description: { marginTop: e.spacesPx.space8, marginBottom: e.spacesPx.space4 }, actionButton: { marginTop: e.spacesPx.space16 } })),
                g = ({ actionPrimary: e, actionSecondary: t, children: a, headline: g, icon: f, iconColor: b, image: y, onDismiss: x, shouldDisplay: C, text: Z, withMask: k = !0 }) => {
                    const [v, w] = i.useState(!1),
                        S = (e) => i.createElement(p.Z, { onDismiss: _, renderContent: () => E(_), switchOnlyOnXSmallBreakpoint: !0, visibilityBehavior: s.J.forceVisible, withArrow: !0, withFixedPosition: !0, withMask: k }, e),
                        P = () => i.createElement(h.Z, { onMaskClick: () => _(), type: "center", withMask: !0 }, E(_)),
                        E = (a) => i.createElement(o.Z, { style: [u.root, y && u.rootWithImage] }, R(), i.createElement(o.Z, { style: u.container }, B(), z(), M({ action: e, dismiss: a, type: t && "primaryFilled" }), M({ action: t, dismiss: a }))),
                        R = () => {
                            let e = f && i.createElement(f, { style: b ? [u.icon, { color: m.default.theme.colors[b] }] : u.icon });
                            return y && !d.Z.isEnabled && (e = i.createElement(r.Z, { "aria-label": "", aspectMode: l.Z.exact(2), image: y })), e && i.createElement(o.Z, { style: u.graphic }, e);
                        },
                        B = () => i.createElement(n.ZP, { size: "title3", weight: "heavy" }, g),
                        z = () => i.createElement(n.ZP, { color: "gray700", style: u.description }, Z),
                        M = ({ action: e, dismiss: t, type: a }) => e && i.createElement(c.ZP, { link: e.link && e.link, onPress: e.onClick ? e.onClick : t, size: "large", style: u.actionButton, type: a }, e.text),
                        _ = () => {
                            x && x(), w(!0);
                        };
                    return C && !v ? (a ? S(a) : P()) : a || null;
                };
        },
        664064: (e, t, a) => {
            a.d(t, { Z: () => c });
            var i = a(807896),
                o = a(202784),
                s = a(523561);
            const r = o.forwardRef(n);
            function n(e, t) {
                return o.createElement(l, (0, i.Z)({}, e, { ref: t }));
            }
            const l = (0, s.Z)({
                    loader: () =>
                        Promise.all([a.e("loader.Confetti-6107ac1a"), a.e("loader.Confetti-d728816b"), a.e("loader.Confetti-229eafb5"), a.e("loader.Confetti-5ccade72")])
                            .then(a.bind(a, 620151))
                            .then((e) => ({ default: e.Confetti })),
                }),
                c = r;
        },
        661810: (e, t, a) => {
            a.d(t, { Z: () => r });
            var i = a(202784),
                o = a(325686),
                s = a(392237);
            function r({ spacing: e, style: t }) {
                return i.createElement(o.Z, { role: "separator", style: [n.divider, { marginVertical: null != e ? s.default.theme.spaces[e] : void 0 }, t] });
            }
            const n = s.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, a) => {
            a.d(t, { Z: () => m });
            var i = a(202784),
                o = a(476984),
                s = a.n(o),
                r = a(143778),
                n = a(750410),
                l = a(682830);
            const c = "failed",
                d = "loaded",
                p = "loading",
                h = "none";
            class m extends i.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        a = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !a) || !s()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: a, fetchStatus: o, icon: s, loadingMessage: r, onRequestRetry: d, render: m, renderFailure: u, retryMessage: g, retryable: f } = this.props;
                    switch (o) {
                        case c:
                            return f ? i.createElement(n.Z, { icon: s, onRequestRetry: d, retryMessage: g }) : a ? i.createElement(l.m, { failureMessage: a }) : u();
                        case p:
                            return i.createElement(l.J, { "aria-label": e, color: t, loadingMessage: r });
                        case h:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: r.Z, retryable: !0 };
        },
        403556: (e, t, a) => {
            a.d(t, { Z: () => S });
            var i = a(807896),
                o = a(202784),
                s = a(194504),
                r = a(235902),
                n = a(392237),
                l = a(325686),
                c = a(674132),
                d = a.n(c),
                p = a(912021),
                h = a(516951),
                m = a(731708),
                u = a(310088),
                g = a(175993),
                f = a(58881),
                b = a(530732);
            const y = d().d2414d31,
                x = () => d().ce4e85ae,
                C = d().fb9f6f39;
            class Z extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: a, query: i, state: o } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: a, query: i, method: "push", state: { ...o, lockScroll: t } };
                        })),
                        (this._unlisten = h.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, a, i) => {
                            const o = n.default.theme.colors.text,
                                s = n.default.theme.colors.gray700;
                            return a || i ? (e || t ? o : s) : e ? o : s;
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
                    const { Icon: e, "aria-label": t, badgeCount: a, badgePip: i, children: s, color: r, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: h, isWebRedesign: g, retainScrollPosition: Z, style: v, to: w } = this.props,
                        { location: S } = this.state,
                        P = w ? this._getMemoizedLink(w, Z) : void 0,
                        E = c ? c(w) : S?.pathname === P?.pathname,
                        R = f.Z.generate({ backgroundColor: "transparent", color: n.default.theme.colors.text, insetFocusRing: !0 }),
                        B = g ? "medium" : E ? "bold" : "medium";
                    return o.createElement(b.Z, { "aria-label": t, "aria-selected": E, focusable: !!E, interactiveStyles: R, link: P, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? k.pill : k.link, p && E ? k.active : null, d ? (p ? k.compactPill : k.compactLink) : null, h ? k.roundedRect : null, v], withoutInteractiveStyles: g || p }, ({ isFocused: t, isHovered: c }) => o.createElement(l.Z, { style: p && k.flexGrow }, o.createElement(m.ZP, { size: g ? "headline2" : void 0, style: [k.text, { color: this._getTextColor(E, c, g, p) }, d && k.compactText, g && t && k.focusedText], weight: B }, e && o.createElement(e, { style: k.icon }), s, g || p ? null : o.createElement(l.Z, { style: E && [k.border, { backgroundColor: n.default.theme.colors[r] }] })), a ? o.createElement(u.Z, { count: a, standalone: !0, style: [k.badge, a >= 10 && k.multiDigitBadge, a >= 20 && k.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: y, withBorder: !1 }) : i ? o.createElement(u.Z, { pip: !0, standalone: !0, style: k.badgePip, textColor: "red500", unreadCountLabel: x, withBorder: !1 }) : null));
                }
            }
            (Z.contextType = g.Z), (Z.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
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
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                v = Z,
                w = n.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                S = ({ alignFirstItem: e, "aria-label": t, isCompact: a, isPillLink: n, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const h = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = r.ZP.useProps(),
                        u = m() && !n,
                        g = o.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: s, ...r }, c) => {
                                    const d = u ? [w.linkRedesign, 0 === c && w.firstLinkRedesign, e && 0 === c && w.withNoPaddingStart] : void 0;
                                    return o.createElement(v, (0, i.Z)({ viewType: s }, r, { isCompact: a, isPillLink: n, isRoundedRect: l, isWebRedesign: u, style: d }), t);
                                }),
                            [e, a, n, l, u, c],
                        );
                    return o.createElement(s.Z, { "aria-label": t, buttonsContainerStyle: n && w.gap, childrenStyle: !u && w.flexGrow, key: h, style: [n ? null : w.segmentedControl, u && w.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        620522: (e, t, a) => {
            a.d(t, { Z: () => i });
            const i = a(202784).createContext({ refsMap: {} });
        },
        833458: (e, t, a) => {
            a.r(t), a.d(t, { default: () => l });
            var i = a(202784),
                o = a(890601),
                s = a(783427),
                r = a(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 3.75c-4.56 0-8.25 3.69-8.25 8.25s3.69 8.25 8.25 8.25 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM16.4 9.28l-5.21 7.15-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const l = n;
        },
        609980: (e, t, a) => {
            a.r(t), a.d(t, { default: () => l });
            var i = a(202784),
                o = a(890601),
                s = a(783427),
                r = a(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const l = n;
        },
        813681: (e, t, a) => {
            a.r(t), a.d(t, { default: () => l });
            var i = a(202784),
                o = a(890601),
                s = a(783427),
                r = a(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M5.73 12.02c-.03.04-.05.07-.08.1-1.26 1.6-2.04 3.63-2.42 5.88H.65l.1-1.09c.13-1.4.57-2.62 1.35-3.51.8-.91 1.89-1.4 3.15-1.4.16 0 .32.01.48.02zM23.35 18l-.1-1.09c-.13-1.4-.57-2.62-1.35-3.51-.8-.91-1.89-1.4-3.15-1.4-.16 0-.32.01-.48.02.08.1.16.2.24.31 1.17 1.56 1.9 3.51 2.26 5.67h2.58zM12 11c-1.94 0-3.59.86-4.78 2.36-1.26 1.59-2 3.86-2.22 6.56L4.92 21h14.16L19 19.92c-.21-2.62-.91-4.82-2.09-6.39C15.7 11.92 14.02 11 12 11zm0-8c-1.93 0-3.5 1.57-3.5 3.5S10.07 10 12 10s3.5-1.57 3.5-3.5S13.93 3 12 3zM5.25 5.5C3.73 5.5 2.5 6.73 2.5 8.25S3.73 11 5.25 11 8 9.77 8 8.25 6.77 5.5 5.25 5.5zm13.5 0C17.23 5.5 16 6.73 16 8.25S17.23 11 18.75 11s2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const l = n;
        },
        490359: (e, t, a) => {
            a.d(t, { Z: () => i });
            const i = (e) => (Array.isArray(e) ? e[0] : void 0);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Articles-bc6ccf4c.a8cbaeda.js.map

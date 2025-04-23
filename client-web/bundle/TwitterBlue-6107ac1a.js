"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-6107ac1a"],
    {
        403556: (e, t, a) => {
            a.d(t, { Z: () => E });
            var i = a(807896),
                n = a(202784),
                o = a(194504),
                r = a(235902),
                s = a(392237),
                l = a(325686),
                c = a(674132),
                d = a.n(c),
                p = a(912021),
                g = a(516951),
                u = a(731708),
                m = a(310088),
                b = a(175993),
                h = a(58881),
                f = a(530732);
            const y = d().d2414d31,
                C = () => d().ce4e85ae,
                x = d().fb9f6f39;
            class w extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: a, query: i, state: n } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: a, query: i, method: "push", state: { ...n, lockScroll: t } };
                        })),
                        (this._unlisten = g.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, a, i) => {
                            const n = s.default.theme.colors.text,
                                o = s.default.theme.colors.gray700;
                            return a || i ? (e || t ? n : o) : e ? n : o;
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
                    const { Icon: e, "aria-label": t, badgeCount: a, badgePip: i, children: o, color: r, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: g, isWebRedesign: b, retainScrollPosition: w, style: Z, to: v } = this.props,
                        { location: E } = this.state,
                        R = v ? this._getMemoizedLink(v, w) : void 0,
                        S = c ? c(v) : E?.pathname === R?.pathname,
                        P = h.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0 }),
                        I = b ? "medium" : S ? "bold" : "medium";
                    return n.createElement(f.Z, { "aria-label": t, "aria-selected": S, focusable: !!S, interactiveStyles: P, link: R, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? k.pill : k.link, p && S ? k.active : null, d ? (p ? k.compactPill : k.compactLink) : null, g ? k.roundedRect : null, Z], withoutInteractiveStyles: b || p }, ({ isFocused: t, isHovered: c }) => n.createElement(l.Z, { style: p && k.flexGrow }, n.createElement(u.ZP, { size: b ? "headline2" : void 0, style: [k.text, { color: this._getTextColor(S, c, b, p) }, d && k.compactText, b && t && k.focusedText], weight: I }, e && n.createElement(e, { style: k.icon }), o, b || p ? null : n.createElement(l.Z, { style: S && [k.border, { backgroundColor: s.default.theme.colors[r] }] })), a ? n.createElement(m.Z, { count: a, standalone: !0, style: [k.badge, a >= 10 && k.multiDigitBadge, a >= 20 && k.truncatedCountBadge], truncatedCountFormatter: x, unreadCountLabel: y, withBorder: !1 }) : i ? n.createElement(m.Z, { pip: !0, standalone: !0, style: k.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (w.contextType = b.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const k = s.default.create((e) => ({
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
                Z = w,
                v = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                E = ({ alignFirstItem: e, "aria-label": t, isCompact: a, isPillLink: s, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const g = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = r.ZP.useProps(),
                        m = u() && !s,
                        b = n.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: o, ...r }, c) => {
                                    const d = m ? [v.linkRedesign, 0 === c && v.firstLinkRedesign, e && 0 === c && v.withNoPaddingStart] : void 0;
                                    return n.createElement(Z, (0, i.Z)({ viewType: o }, r, { isCompact: a, isPillLink: s, isRoundedRect: l, isWebRedesign: m, style: d }), t);
                                }),
                            [e, a, s, l, m, c],
                        );
                    return n.createElement(o.Z, { "aria-label": t, buttonsContainerStyle: s && v.gap, childrenStyle: !m && v.flexGrow, key: g, style: [s ? null : v.segmentedControl, m && v.leftAligned, d], visibleItemIndex: p }, b);
                };
        },
        782947: (e, t, a) => {
            a.d(t, { Z: () => f });
            var i = a(807896),
                n = a(202784),
                o = a(896632),
                r = a(325686),
                s = a(711223),
                l = a(516951),
                c = a(731708),
                d = a(868634),
                p = a(952428),
                g = a(352924),
                u = a(392237);
            const m = u.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.cellBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding8: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, boxShadow: { boxShadow: e.boxShadows.medium }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 1 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column" }, row: { flexDirection: "row", alignItems: "center" }, marginTop4: { marginTop: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, info: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space8 }, infoIcon: { fontSize: ".74em", color: e.colors.gray700 }, backgroundTransparent: { backgroundColor: e.colors.transparent }, pill: { marginBottom: e.spaces.space4 }, inlinePill: { marginStart: e.spaces.space4 } })),
                b = { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                h = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": a, checked: i, dedicatedPillRow: o, description: u, disabled: h, disabledInlineCallout: f, endContent: y, horizontal: C, illustration: x, infoLabel: w, infoLabelType: k, inlineCallout: Z, label: v, name: E, onChange: R, pillText: S, pillType: P, reverseLabels: I, secondaryContent: D, secondaryDescription: B, switchStyle: T, testID: _ }) => {
                    const z = (0, g.b)(),
                        W = (0, g.b)(),
                        L = (0, g.b)(),
                        $ = n.createElement(c.ZP, { color: "text", id: z, role: "label", size: T ? "body" : "headline2", testID: "headline-label", weight: T ? "medium" : "bold" }, v),
                        j = !!u && n.createElement(c.ZP, { color: "gray700", id: W, size: "subtext1", style: S ? m.descriptionWithPill : m.description, testID: "description-label" }, u),
                        G = n.createElement(c.ZP, { color: "gray700", role: "label", size: "subtext2", style: m.description }, B),
                        M = S ? n.createElement(d.ZP, { style: o ? m.pill : m.inlinePill, type: P }, S) : null,
                        H = n.createElement(n.Fragment, null, o ? M : null, n.createElement(r.Z, { style: [m.row, w && m.marginBottom8] }, I ? j : $, o ? null : M), n.createElement(r.Z, { style: [m.row, I && m.marginTop4] }, I ? $ : j), D || (B ? G : void 0)),
                        F = T ? "unset" : (a ? 100 / a : 100) + "%",
                        A = T ? [m.padding8, m.borderRadiusInfinite, i ? m.backgroundDefault : m.backgroundTransparent] : [m.padding16, m.boxShadow, m.borderRadiusLarge, i ? m.checked : null, m.backgroundDefault];
                    return n.createElement(n.Fragment, null, n.createElement(p.Z, { disabled: h, style: [m.root, ...A, C ? { maxWidth: F, ...m.grow } : null, 1 === t || C ? null : m.withMarginTop, t !== a && C && !T && m.withMarginEnd, !h && m.interactive], testID: _, withInteractiveStyling: !T }, !!x && n.createElement(r.Z, { style: m.iconContainer, testID: "illustration" }, x), n.createElement(r.Z, { style: [m.labelContainer, T && m.alignCenter] }, !!w && n.createElement(r.Z, { style: m.info }, n.createElement(d.ZP, { background: "green" === k ? "green500" : "red" === k ? "magenta500" : "yellow" === k ? "orange50" : "gray500" }, n.createElement(c.ZP, { color: "yellow" === k ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, w)), "red" !== k && "yellow" !== k && n.createElement(s.default, { style: m.infoIcon, testID: "infoIcon" })), H, i && !!Z && n.createElement(r.Z, { style: m.inlineCalloutContainer, testID: "inlineCallout" }, Z)), !!y && n.createElement(r.Z, { style: m.endContentContainer, testID: "endContent" }, n.createElement(c.ZP, { id: L, size: "subtext1", weight: "bold" }, y)), n.createElement("input", { "aria-describedby": `${W} ${L}`, "aria-label": e, "aria-labelledby": z, "aria-posinset": t, "aria-setsize": a, checked: i, disabled: h, name: E, onChange: i ? l.Z : R, style: b, type: "radio" })), h && f ? f : null);
                },
                f = (e) => {
                    const t = n.useCallback(({ value: e, ...t }) => n.createElement(h, (0, i.Z)({}, t, { key: e })), []);
                    return n.createElement(o.Z, (0, i.Z)({}, e, { renderSelector: t }));
                };
        },
        711223: (e, t, a) => {
            a.r(t), a.d(t, { default: () => l });
            var i = a(202784),
                n = a(890601),
                o = a(783427),
                r = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        74882: (e, t, a) => {
            var i = a(23103),
                n = a(21178),
                o = a(910905),
                r = a(609736),
                s = Array;
            i(
                { target: "Array", proto: !0 },
                {
                    toReversed: function () {
                        return n(o(this), s);
                    },
                },
            ),
                r("toReversed");
        },
        196670: (e, t, a) => {
            e.exports = a.p + "X_logo_black.00ba8bfa.png";
        },
        885216: (e, t, a) => {
            e.exports = a.p + "X_logo_white.22c1baea.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-6107ac1a.d4869a3a.js.map

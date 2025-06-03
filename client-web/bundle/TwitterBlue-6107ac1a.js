"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-6107ac1a", "icons/IconEraserStroke-js", "icons/IconInterest-js"],
    {
        879113: (e, t, o) => {
            o.d(t, { Z: () => g });
            var a = o(202784),
                r = o(476984),
                i = o.n(r),
                n = o(143778),
                l = o(750410),
                s = o(682830);
            const c = "failed",
                d = "loaded",
                p = "loading",
                u = "none";
            class g extends a.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !i()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: r, icon: i, loadingMessage: n, onRequestRetry: d, render: g, renderFailure: m, retryMessage: h, retryable: b } = this.props;
                    switch (r) {
                        case c:
                            return b ? a.createElement(l.Z, { icon: i, onRequestRetry: d, retryMessage: h }) : o ? a.createElement(s.m, { failureMessage: o }) : m();
                        case p:
                            return a.createElement(s.J, { "aria-label": e, color: t, loadingMessage: n });
                        case u:
                            return null;
                        default:
                            return g();
                    }
                }
            }
            g.defaultProps = { renderFailure: n.Z, retryable: !0 };
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => Z });
            var a = o(807896),
                r = o(202784),
                i = o(194504),
                n = o(235902),
                l = o(392237),
                s = o(325686),
                c = o(111677),
                d = o.n(c),
                p = o(912021),
                u = o(516951),
                g = o(731708),
                m = o(310088),
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
                            const { pathname: o, query: a, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: a, method: "push", state: { ...r, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, a) => {
                            const r = l.default.theme.colors.text,
                                i = l.default.theme.colors.gray700;
                            return o || a ? (e || t ? r : i) : e ? r : i;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: a, children: i, color: n, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: h, retainScrollPosition: w, style: v, to: S } = this.props,
                        { location: Z } = this.state,
                        E = S ? this._getMemoizedLink(S, w) : void 0,
                        R = c ? c(S) : Z?.pathname === E?.pathname,
                        z = b.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? k.pillHoverStyle.backgroundColor : void 0 }),
                        T = h ? "medium" : R ? "bold" : "medium";
                    return r.createElement(f.Z, { "aria-label": t, "aria-selected": R, focusable: !!R, interactiveStyles: z, link: E, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [k.pillStyle] : [k.link]), ...(p && R ? [k.pillActiveStyle] : []), d ? (p ? k.compactPill : k.compactLink) : null, u ? k.roundedRect : null, v], withoutInteractiveStyles: h }, ({ isFocused: t, isHovered: c }) => r.createElement(s.Z, { style: p && k.flexGrow }, r.createElement(g.ZP, { size: h ? "headline2" : void 0, style: [k.text, { color: this._getTextColor(R, c, h, p) }, d && k.compactText, h && t && k.focusedText, p && k.pillTextStyle, p && R && k.pillActiveTextStyle, p && c && k.pillHoverTextStyle], weight: T }, e && r.createElement(e, { style: k.icon }), i, h || p ? null : r.createElement(s.Z, { style: R && [k.border, { backgroundColor: l.default.theme.colors[n] }] })), o ? r.createElement(m.Z, { count: o, standalone: !0, style: [k.badge, o >= 10 && k.multiDigitBadge, o >= 20 && k.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: y, withBorder: !1 }) : a ? r.createElement(m.Z, { pip: !0, standalone: !0, style: k.badgePip, textColor: "red500", unreadCountLabel: x, withBorder: !1 }) : null));
                }
            }
            (w.contextType = h.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const k = l.default.create((e) => ({
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
                S = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                Z = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: l, isRoundedRect: s, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: g } = n.ZP.useProps(),
                        m = g() && !l,
                        h = r.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: i, ...n }, c) => {
                                    const d = m ? [S.linkRedesign, 0 === c && S.firstLinkRedesign, e && 0 === c && S.withNoPaddingStart] : void 0;
                                    return r.createElement(v, (0, a.Z)({ viewType: i }, n, { isCompact: o, isPillLink: l, isRoundedRect: s, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, l, s, m, c],
                        );
                    return r.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: l && S.gap, childrenStyle: !m && S.flexGrow, key: u, style: [l ? null : S.segmentedControl, m && S.leftAligned, d], visibleItemIndex: p }, h);
                };
        },
        782947: (e, t, o) => {
            o.d(t, { Z: () => f });
            var a = o(807896),
                r = o(202784),
                i = o(896632),
                n = o(325686),
                l = o(711223),
                s = o(516951),
                c = o(731708),
                d = o(868634),
                p = o(952428),
                u = o(352924),
                g = o(392237);
            const m = g.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.cellBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding8: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, boxShadow: { boxShadow: e.boxShadows.medium }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 1 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column" }, row: { flexDirection: "row", alignItems: "center" }, marginTop4: { marginTop: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, info: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space8 }, infoIcon: { fontSize: ".74em", color: e.colors.gray700 }, backgroundTransparent: { backgroundColor: e.colors.transparent }, pill: { marginBottom: e.spaces.space4 }, inlinePill: { marginStart: e.spaces.space4 } })),
                h = { ...g.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                b = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": o, checked: a, dedicatedPillRow: i, description: g, disabled: b, disabledInlineCallout: f, endContent: y, horizontal: x, illustration: C, infoLabel: w, infoLabelType: k, inlineCallout: v, label: S, name: Z, onChange: E, pillText: R, pillType: z, reverseLabels: T, secondaryContent: P, secondaryDescription: I, switchStyle: D, testID: W }) => {
                    const B = (0, u.b)(),
                        _ = (0, u.b)(),
                        L = (0, u.b)(),
                        M = r.createElement(c.ZP, { color: D ? (a ? "text" : "gray800") : "text", id: B, role: "label", size: D ? "body" : "headline2", testID: "headline-label", weight: D ? "normal" : "bold" }, S),
                        H = !!g && r.createElement(c.ZP, { color: "gray700", id: _, size: "subtext1", style: R ? m.descriptionWithPill : m.description, testID: "description-label" }, g),
                        j = r.createElement(c.ZP, { color: "gray700", role: "label", size: "subtext2", style: m.description }, I),
                        $ = R ? r.createElement(d.ZP, { style: i ? m.pill : m.inlinePill, type: z }, R) : null,
                        G = r.createElement(r.Fragment, null, i ? $ : null, r.createElement(n.Z, { style: [m.row, w && m.marginBottom8] }, T ? H : M, i ? null : $), r.createElement(n.Z, { style: [m.row, T && m.marginTop4] }, T ? M : H), P || (I ? j : void 0)),
                        A = D ? "unset" : (o ? 100 / o : 100) + "%",
                        F = D ? [m.padding8, m.borderRadiusLarge, a ? m.backgroundDefault : m.backgroundTransparent] : [m.padding16, m.boxShadow, m.borderRadiusLarge, a ? m.checked : null, m.backgroundDefault];
                    return r.createElement(r.Fragment, null, r.createElement(p.Z, { disabled: b, style: [m.root, ...F, x ? { maxWidth: A, ...m.grow } : null, 1 === t || x ? null : m.withMarginTop, t !== o && x && !D && m.withMarginEnd, !b && m.interactive], testID: W, withInteractiveStyling: !D }, !!C && r.createElement(n.Z, { style: m.iconContainer, testID: "illustration" }, C), r.createElement(n.Z, { style: [m.labelContainer, D && m.alignCenter] }, !!w && r.createElement(n.Z, { style: m.info }, r.createElement(d.ZP, { background: "green" === k ? "green500" : "red" === k ? "magenta500" : "yellow" === k ? "orange50" : "gray500" }, r.createElement(c.ZP, { color: "yellow" === k ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, w)), "red" !== k && "yellow" !== k && r.createElement(l.default, { style: m.infoIcon, testID: "infoIcon" })), G, a && !!v && r.createElement(n.Z, { style: m.inlineCalloutContainer, testID: "inlineCallout" }, v)), !!y && r.createElement(n.Z, { style: m.endContentContainer, testID: "endContent" }, r.createElement(c.ZP, { id: L, size: "subtext1", weight: "bold" }, y)), r.createElement("input", { "aria-describedby": `${_} ${L}`, "aria-label": e, "aria-labelledby": B, "aria-posinset": t, "aria-setsize": o, checked: a, disabled: b, name: Z, onChange: a ? s.Z : E, style: h, type: "radio" })), b && f ? f : null);
                },
                f = (e) => {
                    const t = r.useCallback(({ value: e, ...t }) => r.createElement(b, (0, a.Z)({}, t, { key: e })), []);
                    return r.createElement(i.Z, (0, a.Z)({}, e, { renderSelector: t }));
                };
        },
        168661: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var a = o(202784),
                r = o(890601),
                i = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M22 19v2h-7.5l2-2H22zM3.35 14.232c-.97.977-.97 2.559 0 3.536L6.59 21h5.32l9.78-9.774c.95-.949.98-2.477.07-3.463l-3.97-4.294c-.96-1.043-2.6-1.076-3.6-.072L3.35 14.232zm16.94-5.113c.18.197.17.503-.02.693l-5.52 5.524L9.91 10.5l5.69-5.689c.2-.201.53-.194.72.014l3.97 4.294zM11.09 19H7.41l-2.64-2.646c-.2-.196-.2-.512 0-.708l3.73-3.732 4.84 4.836L11.09 19zM1.29 7.707l2 2 1.42-1.414-2-2-1.42 1.414zM3 11H0v2h3v-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        916092: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var a = o(202784),
                r = o(890601),
                i = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M5 13h3.414l3.783-3.783 4.079 2.039 4.505-5.631-1.562-1.25-3.495 4.369-3.921-1.961L7.586 11H5V3H3v18h18v-2H5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        74882: (e, t, o) => {
            var a = o(23103),
                r = o(21178),
                i = o(910905),
                n = o(609736),
                l = Array;
            a(
                { target: "Array", proto: !0 },
                {
                    toReversed: function () {
                        return r(i(this), l);
                    },
                },
            ),
                n("toReversed");
        },
        196670: (e, t, o) => {
            e.exports = o.p + "X_logo_black.00ba8bfa.png";
        },
        885216: (e, t, o) => {
            e.exports = o.p + "X_logo_white.22c1baea.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-6107ac1a.07fe0b2a.js.map

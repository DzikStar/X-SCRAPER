"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-6107ac1a", "icons/IconCameraVideoStroke-js", "icons/IconDrafts-js", "icons/IconInterest-js"],
    {
        879113: (e, t, o) => {
            o.d(t, { Z: () => u });
            var a = o(202784),
                i = o(476984),
                r = o.n(i),
                n = o(143778),
                l = o(750410),
                s = o(682830);
            const c = "failed",
                d = "loaded",
                p = "loading",
                g = "none";
            class u extends a.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !r()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: i, icon: r, loadingMessage: n, onRequestRetry: d, render: u, renderFailure: m, retryMessage: h, retryable: b } = this.props;
                    switch (i) {
                        case c:
                            return b ? a.createElement(l.Z, { icon: r, onRequestRetry: d, retryMessage: h }) : o ? a.createElement(s.m, { failureMessage: o }) : m();
                        case p:
                            return a.createElement(s.J, { "aria-label": e, color: t, loadingMessage: n });
                        case g:
                            return null;
                        default:
                            return u();
                    }
                }
            }
            u.defaultProps = { renderFailure: n.Z, retryable: !0 };
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => Z });
            var a = o(807896),
                i = o(202784),
                r = o(194504),
                n = o(235902),
                l = o(392237),
                s = o(325686),
                c = o(111677),
                d = o.n(c),
                p = o(912021),
                g = o(516951),
                u = o(731708),
                m = o(310088),
                h = o(175993),
                b = o(58881),
                f = o(530732);
            const y = d().d2414d31,
                x = () => d().ce4e85ae,
                C = d().fb9f6f39;
            class v extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: a, state: i } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: a, method: "push", state: { ...i, lockScroll: t } };
                        })),
                        (this._unlisten = g.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, a) => {
                            const i = l.default.theme.colors.text,
                                r = l.default.theme.colors.gray700;
                            return o || a ? (e || t ? i : r) : e ? i : r;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: a, children: r, color: n, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: g, isWebRedesign: h, retainScrollPosition: v, style: k, to: S } = this.props,
                        { location: Z } = this.state,
                        E = S ? this._getMemoizedLink(S, v) : void 0,
                        z = c ? c(S) : Z?.pathname === E?.pathname,
                        R = b.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? w.pillHoverStyle.backgroundColor : void 0 }),
                        T = h ? "medium" : z ? "bold" : "medium";
                    return i.createElement(f.Z, { "aria-label": t, "aria-selected": z, focusable: !!z, interactiveStyles: R, link: E, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [w.pillStyle] : [w.link]), ...(p && z ? [w.pillActiveStyle] : []), d ? (p ? w.compactPill : w.compactLink) : null, g ? w.roundedRect : null, k], withoutInteractiveStyles: h }, ({ isFocused: t, isHovered: c }) => i.createElement(s.Z, { style: p && w.flexGrow }, i.createElement(u.ZP, { size: h ? "headline2" : void 0, style: [w.text, { color: this._getTextColor(z, c, h, p) }, d && w.compactText, h && t && w.focusedText, p && w.pillTextStyle, p && z && w.pillActiveTextStyle, p && c && w.pillHoverTextStyle], weight: T }, e && i.createElement(e, { style: w.icon }), r, h || p ? null : i.createElement(s.Z, { style: z && [w.border, { backgroundColor: l.default.theme.colors[n] }] })), o ? i.createElement(m.Z, { count: o, standalone: !0, style: [w.badge, o >= 10 && w.multiDigitBadge, o >= 20 && w.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: y, withBorder: !1 }) : a ? i.createElement(m.Z, { pip: !0, standalone: !0, style: w.badgePip, textColor: "red500", unreadCountLabel: x, withBorder: !1 }) : null));
                }
            }
            (v.contextType = h.Z), (v.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const w = l.default.create((e) => ({
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
                k = v,
                S = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                Z = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: l, isRoundedRect: s, links: c, style: d, visibleItemIndex: p }) => {
                    const g = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = n.ZP.useProps(),
                        m = u() && !l,
                        h = i.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: r, ...n }, c) => {
                                    const d = m ? [S.linkRedesign, 0 === c && S.firstLinkRedesign, e && 0 === c && S.withNoPaddingStart] : void 0;
                                    return i.createElement(k, (0, a.Z)({ viewType: r }, n, { isCompact: o, isPillLink: l, isRoundedRect: s, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, l, s, m, c],
                        );
                    return i.createElement(r.Z, { "aria-label": t, buttonsContainerStyle: l && S.gap, childrenStyle: !m && S.flexGrow, key: g, style: [l ? null : S.segmentedControl, m && S.leftAligned, d], visibleItemIndex: p }, h);
                };
        },
        782947: (e, t, o) => {
            o.d(t, { Z: () => f });
            var a = o(807896),
                i = o(202784),
                r = o(896632),
                n = o(325686),
                l = o(711223),
                s = o(516951),
                c = o(731708),
                d = o(868634),
                p = o(952428),
                g = o(352924),
                u = o(392237);
            const m = u.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.cellBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding8: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, boxShadow: { boxShadow: e.boxShadows.medium }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 1 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column" }, row: { flexDirection: "row", alignItems: "center" }, marginTop4: { marginTop: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, info: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space8 }, infoIcon: { fontSize: ".74em", color: e.colors.gray700 }, backgroundTransparent: { backgroundColor: e.colors.transparent }, pill: { marginBottom: e.spaces.space4 }, inlinePill: { marginStart: e.spaces.space4 } })),
                h = { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                b = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": o, checked: a, dedicatedPillRow: r, description: u, disabled: b, disabledInlineCallout: f, endContent: y, horizontal: x, illustration: C, infoLabel: v, infoLabelType: w, inlineCallout: k, label: S, name: Z, onChange: E, pillText: z, pillType: R, reverseLabels: T, secondaryContent: D, secondaryDescription: I, switchStyle: P, testID: B }) => {
                    const W = (0, g.b)(),
                        H = (0, g.b)(),
                        _ = (0, g.b)(),
                        M = i.createElement(c.ZP, { color: P ? (a ? "text" : "gray800") : "text", id: W, role: "label", size: P ? "body" : "headline2", testID: "headline-label", weight: P ? "normal" : "bold" }, S),
                        L = !!u && i.createElement(c.ZP, { color: "gray700", id: H, size: "subtext1", style: z ? m.descriptionWithPill : m.description, testID: "description-label" }, u),
                        j = i.createElement(c.ZP, { color: "gray700", role: "label", size: "subtext2", style: m.description }, I),
                        $ = z ? i.createElement(d.ZP, { style: r ? m.pill : m.inlinePill, type: R }, z) : null,
                        V = i.createElement(i.Fragment, null, r ? $ : null, i.createElement(n.Z, { style: [m.row, v && m.marginBottom8] }, T ? L : M, r ? null : $), i.createElement(n.Z, { style: [m.row, T && m.marginTop4] }, T ? M : L), D || (I ? j : void 0)),
                        G = P ? "unset" : (o ? 100 / o : 100) + "%",
                        A = P ? [m.padding8, m.borderRadiusLarge, a ? m.backgroundDefault : m.backgroundTransparent] : [m.padding16, m.boxShadow, m.borderRadiusLarge, a ? m.checked : null, m.backgroundDefault];
                    return i.createElement(i.Fragment, null, i.createElement(p.Z, { disabled: b, style: [m.root, ...A, x ? { maxWidth: G, ...m.grow } : null, 1 === t || x ? null : m.withMarginTop, t !== o && x && !P && m.withMarginEnd, !b && m.interactive], testID: B, withInteractiveStyling: !P }, !!C && i.createElement(n.Z, { style: m.iconContainer, testID: "illustration" }, C), i.createElement(n.Z, { style: [m.labelContainer, P && m.alignCenter] }, !!v && i.createElement(n.Z, { style: m.info }, i.createElement(d.ZP, { background: "green" === w ? "green500" : "red" === w ? "magenta500" : "yellow" === w ? "orange50" : "gray500" }, i.createElement(c.ZP, { color: "yellow" === w ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, v)), "red" !== w && "yellow" !== w && i.createElement(l.default, { style: m.infoIcon, testID: "infoIcon" })), V, a && !!k && i.createElement(n.Z, { style: m.inlineCalloutContainer, testID: "inlineCallout" }, k)), !!y && i.createElement(n.Z, { style: m.endContentContainer, testID: "endContent" }, i.createElement(c.ZP, { id: _, size: "subtext1", weight: "bold" }, y)), i.createElement("input", { "aria-describedby": `${H} ${_}`, "aria-label": e, "aria-labelledby": W, "aria-posinset": t, "aria-setsize": o, checked: a, disabled: b, name: Z, onChange: a ? s.Z : E, style: h, type: "radio" })), b && f ? f : null);
                },
                f = (e) => {
                    const t = i.useCallback(({ value: e, ...t }) => i.createElement(b, (0, a.Z)({}, t, { key: e })), []);
                    return i.createElement(r.Z, (0, a.Z)({}, e, { renderSelector: t }));
                };
        },
        839: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var a = o(202784),
                i = o(890601),
                r = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm16 6.882l2 1V9.618l-2 1v2.764zM4.508 6c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h11c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5h-11zm5.5 4c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.896-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        266151: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var a = o(202784),
                i = o(890601),
                r = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M10 5H2V3h8v2zM7 7H2v2h5V7zm12.94 4.946C19.48 15.918 16.1 19 12 19H8.19c-.12.988-.19 1.993-.19 3H6c0-4.669 1.29-9.39 3.95-12.97C12.62 5.421 16.38 2.9 23 3c.17 3.359-.21 7.147-3.06 8.946zM21 5.033c-4.16.276-7.29 2.275-9.45 5.187-1.43 1.929-2.43 4.268-3 6.78H12c2.68 0 4.95-1.76 5.72-4.188-.52.108-1.09.172-1.72.188h-1.5v-2H16c3.9 0 4.95-2.921 5-5.967z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        916092: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var a = o(202784),
                i = o(890601),
                r = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M5 13h3.414l3.783-3.783 4.079 2.039 4.505-5.631-1.562-1.25-3.495 4.369-3.921-1.961L7.586 11H5V3H3v18h18v-2H5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        748138: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var a = o(202784),
                i = o(890601),
                r = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        74882: (e, t, o) => {
            var a = o(23103),
                i = o(21178),
                r = o(910905),
                n = o(609736),
                l = Array;
            a(
                { target: "Array", proto: !0 },
                {
                    toReversed: function () {
                        return i(r(this), l);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-6107ac1a.9d381cea.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-6107ac1a", "icons/IconBookmarkCollectionsStroke-js", "icons/IconFilm-js", "icons/IconFilter-js", "icons/IconPromotedCircle-js"],
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
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: i, icon: r, loadingMessage: n, onRequestRetry: d, render: u, renderFailure: h, retryMessage: m, retryable: b } = this.props;
                    switch (i) {
                        case c:
                            return b ? a.createElement(l.Z, { icon: r, onRequestRetry: d, retryMessage: m }) : o ? a.createElement(s.m, { failureMessage: o }) : h();
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
                h = o(310088),
                m = o(175993),
                b = o(58881),
                f = o(530732);
            const y = d().d2414d31,
                v = () => d().ce4e85ae,
                C = d().fb9f6f39;
            class x extends i.Component {
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: a, children: r, color: n, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: g, isWebRedesign: m, retainScrollPosition: x, style: k, to: S } = this.props,
                        { location: Z } = this.state,
                        z = S ? this._getMemoizedLink(S, x) : void 0,
                        E = c ? c(S) : Z?.pathname === z?.pathname,
                        R = b.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? w.pillHoverStyle.backgroundColor : void 0 }),
                        P = m ? "medium" : E ? "bold" : "medium";
                    return i.createElement(f.Z, { "aria-label": t, "aria-selected": E, focusable: !!E, interactiveStyles: R, link: z, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [w.pillStyle] : [w.link]), ...(p && E ? [w.pillActiveStyle] : []), d ? (p ? w.compactPill : w.compactLink) : null, g ? w.roundedRect : null, k], withoutInteractiveStyles: m }, ({ isFocused: t, isHovered: c }) => i.createElement(s.Z, { style: p && w.flexGrow }, i.createElement(u.ZP, { size: m ? "headline2" : void 0, style: [w.text, { color: this._getTextColor(E, c, m, p) }, d && w.compactText, m && t && w.focusedText, p && w.pillTextStyle, p && E && w.pillActiveTextStyle, p && c && w.pillHoverTextStyle], weight: P }, e && i.createElement(e, { style: w.icon }), r, m || p ? null : i.createElement(s.Z, { style: E && [w.border, { backgroundColor: l.default.theme.colors[n] }] })), o ? i.createElement(h.Z, { count: o, standalone: !0, style: [w.badge, o >= 10 && w.multiDigitBadge, o >= 20 && w.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: y, withBorder: !1 }) : a ? i.createElement(h.Z, { pip: !0, standalone: !0, style: w.badgePip, textColor: "red500", unreadCountLabel: v, withBorder: !1 }) : null));
                }
            }
            (x.contextType = m.Z), (x.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
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
                k = x,
                S = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                Z = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: l, isRoundedRect: s, links: c, style: d, visibleItemIndex: p }) => {
                    const g = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = n.ZP.useProps(),
                        h = u() && !l,
                        m = i.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: r, ...n }, c) => {
                                    const d = h ? [S.linkRedesign, 0 === c && S.firstLinkRedesign, e && 0 === c && S.withNoPaddingStart] : void 0;
                                    return i.createElement(k, (0, a.Z)({ viewType: r }, n, { isCompact: o, isPillLink: l, isRoundedRect: s, isWebRedesign: h, style: d }), t);
                                }),
                            [e, o, l, s, h, c],
                        );
                    return i.createElement(r.Z, { "aria-label": t, buttonsContainerStyle: l && S.gap, childrenStyle: !h && S.flexGrow, key: g, style: [l ? null : S.segmentedControl, h && S.leftAligned, d], visibleItemIndex: p }, m);
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
            const h = u.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.cellBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding8: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, boxShadow: { boxShadow: e.boxShadows.medium }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 1 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column" }, row: { flexDirection: "row", alignItems: "center" }, marginTop4: { marginTop: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, info: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space8 }, infoIcon: { fontSize: ".74em", color: e.colors.gray700 }, backgroundTransparent: { backgroundColor: e.colors.transparent }, pill: { marginBottom: e.spaces.space4 }, inlinePill: { marginStart: e.spaces.space4 } })),
                m = { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                b = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": o, checked: a, dedicatedPillRow: r, description: u, disabled: b, disabledInlineCallout: f, endContent: y, horizontal: v, illustration: C, infoLabel: x, infoLabelType: w, inlineCallout: k, label: S, name: Z, onChange: z, pillText: E, pillType: R, reverseLabels: P, secondaryContent: T, secondaryDescription: I, switchStyle: B, testID: D }) => {
                    const H = (0, g.b)(),
                        W = (0, g.b)(),
                        _ = (0, g.b)(),
                        M = i.createElement(c.ZP, { color: B ? (a ? "text" : "gray800") : "text", id: H, role: "label", size: B ? "body" : "headline2", testID: "headline-label", weight: B ? "normal" : "bold" }, S),
                        L = !!u && i.createElement(c.ZP, { color: "gray700", id: W, size: "subtext1", style: E ? h.descriptionWithPill : h.description, testID: "description-label" }, u),
                        V = i.createElement(c.ZP, { color: "gray700", role: "label", size: "subtext2", style: h.description }, I),
                        j = E ? i.createElement(d.ZP, { style: r ? h.pill : h.inlinePill, type: R }, E) : null,
                        $ = i.createElement(i.Fragment, null, r ? j : null, i.createElement(n.Z, { style: [h.row, x && h.marginBottom8] }, P ? L : M, r ? null : j), i.createElement(n.Z, { style: [h.row, P && h.marginTop4] }, P ? M : L), T || (I ? V : void 0)),
                        F = B ? "unset" : (o ? 100 / o : 100) + "%",
                        G = B ? [h.padding8, h.borderRadiusLarge, a ? h.backgroundDefault : h.backgroundTransparent] : [h.padding16, h.boxShadow, h.borderRadiusLarge, a ? h.checked : null, h.backgroundDefault];
                    return i.createElement(i.Fragment, null, i.createElement(p.Z, { disabled: b, style: [h.root, ...G, v ? { maxWidth: F, ...h.grow } : null, 1 === t || v ? null : h.withMarginTop, t !== o && v && !B && h.withMarginEnd, !b && h.interactive], testID: D, withInteractiveStyling: !B }, !!C && i.createElement(n.Z, { style: h.iconContainer, testID: "illustration" }, C), i.createElement(n.Z, { style: [h.labelContainer, B && h.alignCenter] }, !!x && i.createElement(n.Z, { style: h.info }, i.createElement(d.ZP, { background: "green" === w ? "green500" : "red" === w ? "magenta500" : "yellow" === w ? "orange50" : "gray500" }, i.createElement(c.ZP, { color: "yellow" === w ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, x)), "red" !== w && "yellow" !== w && i.createElement(l.default, { style: h.infoIcon, testID: "infoIcon" })), $, a && !!k && i.createElement(n.Z, { style: h.inlineCalloutContainer, testID: "inlineCallout" }, k)), !!y && i.createElement(n.Z, { style: h.endContentContainer, testID: "endContent" }, i.createElement(c.ZP, { id: _, size: "subtext1", weight: "bold" }, y)), i.createElement("input", { "aria-describedby": `${W} ${_}`, "aria-label": e, "aria-labelledby": H, "aria-posinset": t, "aria-setsize": o, checked: a, disabled: b, name: Z, onChange: a ? s.Z : z, style: m, type: "radio" })), b && f ? f : null);
                },
                f = (e) => {
                    const t = i.useCallback(({ value: e, ...t }) => i.createElement(b, (0, a.Z)({}, t, { key: e })), []);
                    return i.createElement(r.Z, (0, a.Z)({}, e, { renderSelector: t }));
                };
        },
        28862: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var a = o(202784),
                i = o(890601),
                r = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M2.998 8.5c0-1.38 1.119-2.5 2.5-2.5h9c1.381 0 2.5 1.12 2.5 2.5v14.12l-7-3.5-7 3.5V8.5zm2.5-.5c-.276 0-.5.22-.5.5v10.88l5-2.5 5 2.5V8.5c0-.28-.224-.5-.5-.5h-9zM18.5 2H8.998c-1.105 0-2 .9-2 2H18.5c.276 0 .5.22.5.5v9.82l-.002-.01v2.28L21 17.68V4.5C21 3.12 19.881 2 18.5 2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        926981: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var a = o(202784),
                i = o(890601),
                r = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M18.5 2h-13C4.12 2 3 3.12 3 4.5v15C3 20.88 4.12 22 5.5 22h13c1.38 0 2.5-1.12 2.5-2.5v-15C21 3.12 19.88 2 18.5 2zM7 20H5.5c-.28 0-.5-.22-.5-.5v-2h2V20zm0-4.5H5V13h2v2.5zM7 11H5V8.5h2V11zm0-4.5H5v-2c0-.28.22-.5.5-.5H7v2.5zM15 20H9v-7h6v7zm0-9H9V4h6v7zm4 8.5c0 .28-.22.5-.5.5H17v-2.5h2v2zm0-4h-2V13h2v2.5zm0-4.5h-2V8.5h2V11zm0-4.5h-2V4h1.5c.28 0 .5.22.5.5v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        517747: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var a = o(202784),
                i = o(890601),
                r = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14 6V3h2v8h-2V8H3V6h11zm7 2h-3.5V6H21v2zM8 16v-3h2v8H8v-3H3v-2h5zm13 2h-9.5v-2H21v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        266550: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var a = o(202784),
                i = o(890601),
                r = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M11.998 1.75C6.337 1.75 1.748 6.34 1.748 12s4.589 10.25 10.25 10.25 10.25-4.59 10.25-10.25-4.589-10.25-10.25-10.25zM15.996 15h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-6107ac1a.22c93c4a.js.map

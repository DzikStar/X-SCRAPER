"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-6107ac1a"],
    {
        280278: (e, t, n) => {
            n.d(t, { ZP: () => b });
            var i = n(202784),
                o = n(325686),
                a = n(827515),
                r = n(461756),
                l = n(731708),
                s = n(392237);
            const c = "up",
                d = "down",
                p = (e, t, n) => {
                    n((n) => {
                        const i = (0, a.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: i };
                    });
                },
                u = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                u[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const g = { position: "absolute" },
                m = s.default.create({ root: { overflow: "hidden" } }),
                b = (e) => {
                    const { children: t, containerStyle: n, count: s, ...d } = e,
                        [b, h] = i.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        f = i.useRef(!1);
                    return (
                        i.useEffect(
                            () => (
                                (f.current = !0),
                                function () {
                                    f.current = !1;
                                }
                            ),
                            [],
                        ),
                        i.useEffect(() => {
                            if (f.current)
                                if (r.Z.reducedMotionEnabled) h((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== b.pendingText) {
                                    t === b.text || ((0, a.Z)(e.count) && b.count === e.count) ? h((e) => ({ ...e, pendingCount: null, pendingText: null })) : (h((n) => ({ ...n, pendingCount: e.count, pendingText: t })), b.animating || p(e.count, t, h));
                                }
                        }, [t]),
                        i.useEffect(() => {
                            f.current &&
                                !1 === b.animating &&
                                (b.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              f.current && h((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : b.pendingText && p(b.pendingCount, b.pendingText, h));
                        }, [b.animating, b.oldText]),
                        i.useMemo(() => {
                            const e = u[b.transitionDirection],
                                t = b.oldText && !r.Z.reducedMotionEnabled,
                                a = !b.animating && b.oldText && !r.Z.reducedMotionEnabled,
                                s = { ...g, ...(b.animating ? e.post : e.active) },
                                c = { ...(a ? e.pre : e.active) };
                            return i.createElement(
                                o.Z,
                                { style: [m.root, n] },
                                t ? i.createElement("span", { style: s }, i.createElement(l.ZP, d, b.oldText)) : null,
                                i.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(f.current, h),
                                        style: c,
                                    },
                                    i.createElement(l.ZP, d, b.text),
                                ),
                            );
                        }, [n, d, b, f, h])
                    );
                };
        },
        403556: (e, t, n) => {
            n.d(t, { Z: () => T });
            var i = n(807896),
                o = n(202784),
                a = n(194504),
                r = n(235902),
                l = n(392237),
                s = n(325686),
                c = n(674132),
                d = n.n(c),
                p = n(912021),
                u = n(516951),
                g = n(731708),
                m = n(310088),
                b = n(175993),
                h = n(58881),
                f = n(530732);
            const y = d().d2414d31,
                x = () => d().ce4e85ae,
                C = d().fb9f6f39;
            class w extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: n, query: i, state: o } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: i, method: "push", state: { ...o, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, i) => {
                            const o = l.default.theme.colors.text,
                                a = l.default.theme.colors.gray700;
                            return n || i ? (e || t ? o : a) : e ? o : a;
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: i, children: a, color: r, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: b, retainScrollPosition: w, style: E, to: Z } = this.props,
                        { location: T } = this.state,
                        v = Z ? this._getMemoizedLink(Z, w) : void 0,
                        R = c ? c(Z) : T?.pathname === v?.pathname,
                        P = h.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0 }),
                        S = b ? "medium" : R ? "bold" : "medium";
                    return o.createElement(f.Z, { "aria-label": t, "aria-selected": R, focusable: !!R, interactiveStyles: P, link: v, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? k.pill : k.link, p && R ? k.active : null, d ? (p ? k.compactPill : k.compactLink) : null, u ? k.roundedRect : null, E], withoutInteractiveStyles: b || p }, ({ isFocused: t, isHovered: c }) => o.createElement(s.Z, { style: p && k.flexGrow }, o.createElement(g.ZP, { size: b ? "headline2" : void 0, style: [k.text, { color: this._getTextColor(R, c, b, p) }, d && k.compactText, b && t && k.focusedText], weight: S }, e && o.createElement(e, { style: k.icon }), a, b || p ? null : o.createElement(s.Z, { style: R && [k.border, { backgroundColor: l.default.theme.colors[r] }] })), n ? o.createElement(m.Z, { count: n, standalone: !0, style: [k.badge, n >= 10 && k.multiDigitBadge, n >= 20 && k.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: y, withBorder: !1 }) : i ? o.createElement(m.Z, { pip: !0, standalone: !0, style: k.badgePip, textColor: "red500", unreadCountLabel: x, withBorder: !1 }) : null));
                }
            }
            (w.contextType = b.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
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
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                E = w,
                Z = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                T = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: l, isRoundedRect: s, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: g } = r.ZP.useProps(),
                        m = g() && !l,
                        b = o.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...r }, c) => {
                                    const d = m ? [Z.linkRedesign, 0 === c && Z.firstLinkRedesign, e && 0 === c && Z.withNoPaddingStart] : void 0;
                                    return o.createElement(E, (0, i.Z)({ viewType: a }, r, { isCompact: n, isPillLink: l, isRoundedRect: s, isWebRedesign: m, style: d }), t);
                                }),
                            [e, n, l, s, m, c],
                        );
                    return o.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: l && Z.gap, childrenStyle: !m && Z.flexGrow, key: u, style: [l ? null : Z.segmentedControl, m && Z.leftAligned, d], visibleItemIndex: p }, b);
                };
        },
        782947: (e, t, n) => {
            n.d(t, { Z: () => f });
            var i = n(807896),
                o = n(202784),
                a = n(896632),
                r = n(325686),
                l = n(711223),
                s = n(516951),
                c = n(731708),
                d = n(868634),
                p = n(952428),
                u = n(352924),
                g = n(392237);
            const m = g.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.cellBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding8: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, boxShadow: { boxShadow: e.boxShadows.medium }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 1 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column" }, row: { flexDirection: "row", alignItems: "center" }, marginTop4: { marginTop: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, info: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space8 }, infoIcon: { fontSize: ".74em", color: e.colors.gray700 }, backgroundTransparent: { backgroundColor: e.colors.transparent }, pill: { marginBottom: e.spaces.space4 }, inlinePill: { marginStart: e.spaces.space4 } })),
                b = { ...g.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                h = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": n, checked: i, dedicatedPillRow: a, description: g, disabled: h, disabledInlineCallout: f, endContent: y, horizontal: x, illustration: C, infoLabel: w, infoLabelType: k, inlineCallout: E, label: Z, name: T, onChange: v, pillText: R, pillType: P, reverseLabels: S, secondaryContent: D, secondaryDescription: I, switchStyle: B, testID: _ }) => {
                    const z = (0, u.b)(),
                        W = (0, u.b)(),
                        L = (0, u.b)(),
                        M = o.createElement(c.ZP, { color: "text", id: z, role: "label", size: B ? "body" : "headline2", testID: "headline-label", weight: B ? "medium" : "bold" }, Z),
                        $ = !!g && o.createElement(c.ZP, { color: "gray700", id: W, size: "subtext1", style: R ? m.descriptionWithPill : m.description, testID: "description-label" }, g),
                        j = o.createElement(c.ZP, { color: "gray700", role: "label", size: "subtext2", style: m.description }, I),
                        G = R ? o.createElement(d.ZP, { style: a ? m.pill : m.inlinePill, type: P }, R) : null,
                        F = o.createElement(o.Fragment, null, a ? G : null, o.createElement(r.Z, { style: [m.row, w && m.marginBottom8] }, S ? $ : M, a ? null : G), o.createElement(r.Z, { style: [m.row, S && m.marginTop4] }, S ? M : $), D || (I ? j : void 0)),
                        H = B ? "unset" : (n ? 100 / n : 100) + "%",
                        A = B ? [m.padding8, m.borderRadiusInfinite, i ? m.backgroundDefault : m.backgroundTransparent] : [m.padding16, m.boxShadow, m.borderRadiusLarge, i ? m.checked : null, m.backgroundDefault];
                    return o.createElement(o.Fragment, null, o.createElement(p.Z, { disabled: h, style: [m.root, ...A, x ? { maxWidth: H, ...m.grow } : null, 1 === t || x ? null : m.withMarginTop, t !== n && x && !B && m.withMarginEnd, !h && m.interactive], testID: _, withInteractiveStyling: !B }, !!C && o.createElement(r.Z, { style: m.iconContainer, testID: "illustration" }, C), o.createElement(r.Z, { style: [m.labelContainer, B && m.alignCenter] }, !!w && o.createElement(r.Z, { style: m.info }, o.createElement(d.ZP, { background: "green" === k ? "green500" : "red" === k ? "magenta500" : "yellow" === k ? "orange50" : "gray500" }, o.createElement(c.ZP, { color: "yellow" === k ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, w)), "red" !== k && "yellow" !== k && o.createElement(l.default, { style: m.infoIcon, testID: "infoIcon" })), F, i && !!E && o.createElement(r.Z, { style: m.inlineCalloutContainer, testID: "inlineCallout" }, E)), !!y && o.createElement(r.Z, { style: m.endContentContainer, testID: "endContent" }, o.createElement(c.ZP, { id: L, size: "subtext1", weight: "bold" }, y)), o.createElement("input", { "aria-describedby": `${W} ${L}`, "aria-label": e, "aria-labelledby": z, "aria-posinset": t, "aria-setsize": n, checked: i, disabled: h, name: T, onChange: i ? s.Z : v, style: b, type: "radio" })), h && f ? f : null);
                },
                f = (e) => {
                    const t = o.useCallback(({ value: e, ...t }) => o.createElement(h, (0, i.Z)({}, t, { key: e })), []);
                    return o.createElement(a.Z, (0, i.Z)({}, e, { renderSelector: t }));
                };
        },
        711223: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var i = n(202784),
                o = n(890601),
                a = n(783427),
                r = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        74882: (e, t, n) => {
            var i = n(23103),
                o = n(21178),
                a = n(910905),
                r = n(609736),
                l = Array;
            i(
                { target: "Array", proto: !0 },
                {
                    toReversed: function () {
                        return o(a(this), l);
                    },
                },
            ),
                r("toReversed");
        },
        196670: (e, t, n) => {
            e.exports = n.p + "X_logo_black.00ba8bfa.png";
        },
        885216: (e, t, n) => {
            e.exports = n.p + "X_logo_white.22c1baea.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-6107ac1a.0a54960a.js.map

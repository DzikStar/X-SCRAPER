"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-6107ac1a", "icons/IconFireStroke-js", "icons/IconLocationRatingStar-js", "icons/IconQuoteBlock-js"],
    {
        879113: (e, t, n) => {
            n.d(t, { Z: () => g });
            var a = n(202784),
                o = n(476984),
                i = n.n(o),
                r = n(143778),
                l = n(750410),
                s = n(682830);
            const c = "failed",
                d = "loaded",
                p = "loading",
                u = "none";
            class g extends a.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !i()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: o, icon: i, loadingMessage: r, onRequestRetry: d, render: g, renderFailure: m, retryMessage: h, retryable: b } = this.props;
                    switch (o) {
                        case c:
                            return b ? a.createElement(l.Z, { icon: i, onRequestRetry: d, retryMessage: h }) : n ? a.createElement(s.m, { failureMessage: n }) : m();
                        case p:
                            return a.createElement(s.J, { "aria-label": e, color: t, loadingMessage: r });
                        case u:
                            return null;
                        default:
                            return g();
                    }
                }
            }
            g.defaultProps = { renderFailure: r.Z, retryable: !0 };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => h });
            var a = n(202784),
                o = n(325686),
                i = n(827515),
                r = n(461756),
                l = n(731708),
                s = n(392237);
            const c = "up",
                d = "down",
                p = (e, t, n) => {
                    n((n) => {
                        const a = (0, i.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: a };
                    });
                },
                u = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                u[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const g = { position: "absolute" },
                m = s.default.create({ root: { overflow: "hidden" } }),
                h = (e) => {
                    const { children: t, containerStyle: n, count: s, ...d } = e,
                        [h, b] = a.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        f = a.useRef(!1);
                    return (
                        a.useEffect(
                            () => (
                                (f.current = !0),
                                function () {
                                    f.current = !1;
                                }
                            ),
                            [],
                        ),
                        a.useEffect(() => {
                            if (f.current)
                                if (r.Z.reducedMotionEnabled) b((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== h.pendingText) {
                                    t === h.text || ((0, i.Z)(e.count) && h.count === e.count) ? b((e) => ({ ...e, pendingCount: null, pendingText: null })) : (b((n) => ({ ...n, pendingCount: e.count, pendingText: t })), h.animating || p(e.count, t, b));
                                }
                        }, [t]),
                        a.useEffect(() => {
                            f.current &&
                                !1 === h.animating &&
                                (h.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              f.current && b((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : h.pendingText && p(h.pendingCount, h.pendingText, b));
                        }, [h.animating, h.oldText]),
                        a.useMemo(() => {
                            const e = u[h.transitionDirection],
                                t = h.oldText && !r.Z.reducedMotionEnabled,
                                i = !h.animating && h.oldText && !r.Z.reducedMotionEnabled,
                                s = { ...g, ...(h.animating ? e.post : e.active) },
                                c = { ...(i ? e.pre : e.active) };
                            return a.createElement(
                                o.Z,
                                { style: [m.root, n] },
                                t ? a.createElement("span", { style: s }, a.createElement(l.ZP, d, h.oldText)) : null,
                                a.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(f.current, b),
                                        style: c,
                                    },
                                    a.createElement(l.ZP, d, h.text),
                                ),
                            );
                        }, [n, d, h, f, b])
                    );
                };
        },
        403556: (e, t, n) => {
            n.d(t, { Z: () => k });
            var a = n(807896),
                o = n(202784),
                i = n(194504),
                r = n(235902),
                l = n(392237),
                s = n(325686),
                c = n(111677),
                d = n.n(c),
                p = n(912021),
                u = n(516951),
                g = n(731708),
                m = n(310088),
                h = n(175993),
                b = n(58881),
                f = n(530732);
            const y = d().d2414d31,
                x = () => d().ce4e85ae,
                C = d().fb9f6f39;
            class w extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: n, query: a, state: o } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: a, method: "push", state: { ...o, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, a) => {
                            const o = l.default.theme.colors.text,
                                i = l.default.theme.colors.gray700;
                            return n || a ? (e || t ? o : i) : e ? o : i;
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: a, children: i, color: r, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: h, retainScrollPosition: w, style: E, to: Z } = this.props,
                        { location: k } = this.state,
                        T = Z ? this._getMemoizedLink(Z, w) : void 0,
                        R = c ? c(Z) : k?.pathname === T?.pathname,
                        S = b.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0 }),
                        P = h ? "medium" : R ? "bold" : "medium";
                    return o.createElement(f.Z, { "aria-label": t, "aria-selected": R, focusable: !!R, interactiveStyles: S, link: T, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? v.pill : v.link, p && R ? v.active : null, d ? (p ? v.compactPill : v.compactLink) : null, u ? v.roundedRect : null, E], withoutInteractiveStyles: h || p }, ({ isFocused: t, isHovered: c }) => o.createElement(s.Z, { style: p && v.flexGrow }, o.createElement(g.ZP, { size: h ? "headline2" : void 0, style: [v.text, { color: this._getTextColor(R, c, h, p) }, d && v.compactText, h && t && v.focusedText], weight: P }, e && o.createElement(e, { style: v.icon }), i, h || p ? null : o.createElement(s.Z, { style: R && [v.border, { backgroundColor: l.default.theme.colors[r] }] })), n ? o.createElement(m.Z, { count: n, standalone: !0, style: [v.badge, n >= 10 && v.multiDigitBadge, n >= 20 && v.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: y, withBorder: !1 }) : a ? o.createElement(m.Z, { pip: !0, standalone: !0, style: v.badgePip, textColor: "red500", unreadCountLabel: x, withBorder: !1 }) : null));
                }
            }
            (w.contextType = h.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
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
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                E = w,
                Z = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                k = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: l, isRoundedRect: s, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: g } = r.ZP.useProps(),
                        m = g() && !l,
                        h = o.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: i, ...r }, c) => {
                                    const d = m ? [Z.linkRedesign, 0 === c && Z.firstLinkRedesign, e && 0 === c && Z.withNoPaddingStart] : void 0;
                                    return o.createElement(E, (0, a.Z)({ viewType: i }, r, { isCompact: n, isPillLink: l, isRoundedRect: s, isWebRedesign: m, style: d }), t);
                                }),
                            [e, n, l, s, m, c],
                        );
                    return o.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: l && Z.gap, childrenStyle: !m && Z.flexGrow, key: u, style: [l ? null : Z.segmentedControl, m && Z.leftAligned, d], visibleItemIndex: p }, h);
                };
        },
        782947: (e, t, n) => {
            n.d(t, { Z: () => f });
            var a = n(807896),
                o = n(202784),
                i = n(896632),
                r = n(325686),
                l = n(711223),
                s = n(516951),
                c = n(731708),
                d = n(868634),
                p = n(952428),
                u = n(352924),
                g = n(392237);
            const m = g.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.cellBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding8: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, boxShadow: { boxShadow: e.boxShadows.medium }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 1 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column" }, row: { flexDirection: "row", alignItems: "center" }, marginTop4: { marginTop: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, info: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space8 }, infoIcon: { fontSize: ".74em", color: e.colors.gray700 }, backgroundTransparent: { backgroundColor: e.colors.transparent }, pill: { marginBottom: e.spaces.space4 }, inlinePill: { marginStart: e.spaces.space4 } })),
                h = { ...g.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                b = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": n, checked: a, dedicatedPillRow: i, description: g, disabled: b, disabledInlineCallout: f, endContent: y, horizontal: x, illustration: C, infoLabel: w, infoLabelType: v, inlineCallout: E, label: Z, name: k, onChange: T, pillText: R, pillType: S, reverseLabels: P, secondaryContent: D, secondaryDescription: I, switchStyle: B, testID: z }) => {
                    const _ = (0, u.b)(),
                        M = (0, u.b)(),
                        W = (0, u.b)(),
                        L = o.createElement(c.ZP, { color: B ? (a ? "text" : "gray800") : "text", id: _, role: "label", size: B ? "body" : "headline2", testID: "headline-label", weight: B ? "normal" : "bold" }, Z),
                        $ = !!g && o.createElement(c.ZP, { color: "gray700", id: M, size: "subtext1", style: R ? m.descriptionWithPill : m.description, testID: "description-label" }, g),
                        j = o.createElement(c.ZP, { color: "gray700", role: "label", size: "subtext2", style: m.description }, I),
                        H = R ? o.createElement(d.ZP, { style: i ? m.pill : m.inlinePill, type: S }, R) : null,
                        F = o.createElement(o.Fragment, null, i ? H : null, o.createElement(r.Z, { style: [m.row, w && m.marginBottom8] }, P ? $ : L, i ? null : H), o.createElement(r.Z, { style: [m.row, P && m.marginTop4] }, P ? L : $), D || (I ? j : void 0)),
                        G = B ? "unset" : (n ? 100 / n : 100) + "%",
                        q = B ? [m.padding8, m.borderRadiusLarge, a ? m.backgroundDefault : m.backgroundTransparent] : [m.padding16, m.boxShadow, m.borderRadiusLarge, a ? m.checked : null, m.backgroundDefault];
                    return o.createElement(o.Fragment, null, o.createElement(p.Z, { disabled: b, style: [m.root, ...q, x ? { maxWidth: G, ...m.grow } : null, 1 === t || x ? null : m.withMarginTop, t !== n && x && !B && m.withMarginEnd, !b && m.interactive], testID: z, withInteractiveStyling: !B }, !!C && o.createElement(r.Z, { style: m.iconContainer, testID: "illustration" }, C), o.createElement(r.Z, { style: [m.labelContainer, B && m.alignCenter] }, !!w && o.createElement(r.Z, { style: m.info }, o.createElement(d.ZP, { background: "green" === v ? "green500" : "red" === v ? "magenta500" : "yellow" === v ? "orange50" : "gray500" }, o.createElement(c.ZP, { color: "yellow" === v ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, w)), "red" !== v && "yellow" !== v && o.createElement(l.default, { style: m.infoIcon, testID: "infoIcon" })), F, a && !!E && o.createElement(r.Z, { style: m.inlineCalloutContainer, testID: "inlineCallout" }, E)), !!y && o.createElement(r.Z, { style: m.endContentContainer, testID: "endContent" }, o.createElement(c.ZP, { id: W, size: "subtext1", weight: "bold" }, y)), o.createElement("input", { "aria-describedby": `${M} ${W}`, "aria-label": e, "aria-labelledby": _, "aria-posinset": t, "aria-setsize": n, checked: a, disabled: b, name: k, onChange: a ? s.Z : T, style: h, type: "radio" })), b && f ? f : null);
                },
                f = (e) => {
                    const t = o.useCallback(({ value: e, ...t }) => o.createElement(b, (0, a.Z)({}, t, { key: e })), []);
                    return o.createElement(i.Z, (0, a.Z)({}, e, { renderSelector: t }));
                };
        },
        376278: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                o = n(890601),
                i = n(783427),
                r = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M11 1.28v.09c0 1.79 0 3.53-.829 5.18-.42-.78-1.061-1.36-1.707-1.94l-.268-.24c-.501 1-1.151 1.98-1.807 2.97C4.959 9.5 3.5 11.7 3.5 14.25c0 2.52.949 4.55 2.538 5.94 1.437 1.26 3.334 1.94 5.378 2.04.122.01.539.02.584.02 4.615 0 8.5-3.37 8.5-8C20.5 8.29 15.797 4 11 1.28zm2.534 18.08c-.521.56-1.144.87-1.681.89-.111 0-.221-.01-.331-.01-.454-.05-.684-.23-.82-.41-.192-.24-.313-.64-.313-1.14 0-.75.362-1.26 1.214-2.02.166-.14.35-.3.548-.46.47-.4 1.017-.86 1.56-1.41l.031.07c.35.83.647 1.78.647 2.54 0 .65-.317 1.38-.855 1.95zm2.572-.42c.18-.48.283-1 .283-1.53 0-1.17-.429-2.43-.804-3.32-.194-.46-.388-.85-.533-1.13-.073-.14-1.02-1.78-1.02-1.78l-.901 1.23c-.678.92-1.425 1.55-2.18 2.19-.224.19-.449.38-.673.58-.94.83-1.889 1.85-1.889 3.51 0 .22.014.44.047.67C6.673 18.38 5.5 16.6 5.5 14.25c0-2.01 1.133-3.61 2.246-5.18.284-.4.568-.8.831-1.21.419.89.419 2.18.173 3.08l.117-.11c1.971-1.7 3.514-3.03 3.969-6.06.632.47 1.415 1.12 2.195 1.93 1.79 1.84 3.469 4.42 3.469 7.55 0 1.92-.921 3.61-2.394 4.69z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        846191: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                o = n(890601),
                i = n(783427),
                r = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 10 10", children: a.createElement("g", null, a.createElement("path", { d: "M4.43 1.256c.179-.553.961-.553 1.14 0l.642 1.975c.08.248.311.415.571.415H8.86c.581 0 .823.744.352 1.085l-1.68 1.221c-.21.153-.298.424-.218.67l.642 1.976c.18.553-.453 1.012-.923.67l-1.68-1.22c-.21-.153-.495-.153-.706 0l-1.68 1.22c-.47.342-1.103-.117-.923-.67l.642-1.975c.08-.247-.008-.518-.218-.671l-1.68-1.22c-.47-.342-.229-1.086.352-1.086h2.077c.26 0 .49-.167.57-.415l.642-1.975z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 10, height: 10 };
            const s = l;
        },
        763569: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(202784),
                o = n(890601),
                i = n(783427),
                r = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M22 13H7v-2h15v2zm0-9H7v2h15V4zm-7 14H7v2h8v-2zM5 2H2v20h3V2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        74882: (e, t, n) => {
            var a = n(23103),
                o = n(21178),
                i = n(910905),
                r = n(609736),
                l = Array;
            a(
                { target: "Array", proto: !0 },
                {
                    toReversed: function () {
                        return o(i(this), l);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-6107ac1a.6f468dea.js.map

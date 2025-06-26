(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-6107ac1a", "icons/IconBookmarkCollections-js", "icons/IconCameraVideoStroke-js", "icons/IconDeckStroke-js", "icons/IconFilter-js", "icons/IconFireStroke-js", "icons/IconPlayCircle-js"],
    {
        879113: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => g });
            var o = n(202784),
                i = n(476984),
                r = n.n(i),
                a = n(143778),
                l = n(750410),
                s = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                p = "none";
            class g extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !r()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: i, icon: r, loadingMessage: a, onRequestRetry: d, render: g, renderFailure: m, retryMessage: h, retryable: b } = this.props;
                    switch (i) {
                        case c:
                            return b ? o.createElement(l.Z, { icon: r, onRequestRetry: d, retryMessage: h }) : n ? o.createElement(s.m, { failureMessage: n }) : m();
                        case u:
                            return o.createElement(s.J, { "aria-label": e, color: t, loadingMessage: a });
                        case p:
                            return null;
                        default:
                            return g();
                    }
                }
            }
            g.defaultProps = { renderFailure: a.Z, retryable: !0 };
        },
        280278: (e, t, n) => {
            "use strict";
            n.d(t, { ZP: () => h });
            var o = n(202784),
                i = n(325686),
                r = n(827515),
                a = n(461756),
                l = n(731708),
                s = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const o = (0, r.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: o };
                    });
                },
                p = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                p[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const g = { position: "absolute" },
                m = s.default.create({ root: { overflow: "hidden" } }),
                h = (e) => {
                    const { children: t, containerStyle: n, count: s, ...d } = e,
                        [h, b] = o.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        f = o.useRef(!1);
                    return (
                        o.useEffect(
                            () => (
                                (f.current = !0),
                                function () {
                                    f.current = !1;
                                }
                            ),
                            [],
                        ),
                        o.useEffect(() => {
                            if (f.current)
                                if (a.Z.reducedMotionEnabled) b((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== h.pendingText) {
                                    t === h.text || ((0, r.Z)(e.count) && h.count === e.count) ? b((e) => ({ ...e, pendingCount: null, pendingText: null })) : (b((n) => ({ ...n, pendingCount: e.count, pendingText: t })), h.animating || u(e.count, t, b));
                                }
                        }, [t]),
                        o.useEffect(() => {
                            f.current &&
                                !1 === h.animating &&
                                (h.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              f.current && b((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : h.pendingText && u(h.pendingCount, h.pendingText, b));
                        }, [h.animating, h.oldText]),
                        o.useMemo(() => {
                            const e = p[h.transitionDirection],
                                t = h.oldText && !a.Z.reducedMotionEnabled,
                                r = !h.animating && h.oldText && !a.Z.reducedMotionEnabled,
                                s = { ...g, ...(h.animating ? e.post : e.active) },
                                c = { ...(r ? e.pre : e.active) };
                            return o.createElement(
                                i.Z,
                                { style: [m.root, n] },
                                t ? o.createElement("span", { style: s }, o.createElement(l.ZP, d, h.oldText)) : null,
                                o.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(f.current, b),
                                        style: c,
                                    },
                                    o.createElement(l.ZP, d, h.text),
                                ),
                            );
                        }, [n, d, h, f, b])
                    );
                };
        },
        403556: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => S });
            var o = n(807896),
                i = n(202784),
                r = n(194504),
                a = n(235902),
                l = n(392237),
                s = n(325686),
                c = n(111677),
                d = n.n(c),
                u = n(912021),
                p = n(516951),
                g = n(731708),
                m = n(310088),
                h = n(175993),
                b = n(58881),
                f = n(530732);
            const y = d().d2414d31,
                v = () => d().ce4e85ae,
                x = d().fb9f6f39;
            class C extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: n, query: o, state: i } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: o, method: "push", state: { ...i, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, o) => {
                            const i = l.default.theme.colors.text,
                                r = l.default.theme.colors.gray700;
                            return n || o ? (e || t ? i : r) : e ? i : r;
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: o, children: r, color: a, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: h, retainScrollPosition: C, style: Z, to: E } = this.props,
                        { location: S } = this.state,
                        k = E ? this._getMemoizedLink(E, C) : void 0,
                        T = c ? c(E) : S?.pathname === k?.pathname,
                        z = b.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? w.pillHoverStyle.backgroundColor : void 0 }),
                        D = h ? "medium" : T ? "bold" : "medium";
                    return i.createElement(f.Z, { "aria-label": t, "aria-selected": T, focusable: !!T, interactiveStyles: z, link: k, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [w.pillStyle] : [w.link]), ...(u && T ? [w.pillActiveStyle] : []), d ? (u ? w.compactPill : w.compactLink) : null, p ? w.roundedRect : null, Z], withoutInteractiveStyles: h }, ({ isFocused: t, isHovered: c }) => i.createElement(s.Z, { style: u && w.flexGrow }, i.createElement(g.ZP, { size: h ? "headline2" : void 0, style: [w.text, { color: this._getTextColor(T, c, h, u) }, d && w.compactText, h && t && w.focusedText, u && w.pillTextStyle, u && T && w.pillActiveTextStyle, u && c && w.pillHoverTextStyle], weight: D }, e && i.createElement(e, { style: w.icon }), r, h || u ? null : i.createElement(s.Z, { style: T && [w.border, { backgroundColor: l.default.theme.colors[a] }] })), n ? i.createElement(m.Z, { count: n, standalone: !0, style: [w.badge, n >= 10 && w.multiDigitBadge, n >= 20 && w.truncatedCountBadge], truncatedCountFormatter: x, unreadCountLabel: y, withBorder: !1 }) : o ? i.createElement(m.Z, { pip: !0, standalone: !0, style: w.badgePip, textColor: "red500", unreadCountLabel: v, withBorder: !1 }) : null));
                }
            }
            (C.contextType = h.Z), (C.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
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
                Z = C,
                E = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                S = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: l, isRoundedRect: s, links: c, style: d, visibleItemIndex: u }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: g } = a.ZP.useProps(),
                        m = g() && !l,
                        h = i.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: r, ...a }, c) => {
                                    const d = m ? [E.linkRedesign, 0 === c && E.firstLinkRedesign, e && 0 === c && E.withNoPaddingStart] : void 0;
                                    return i.createElement(Z, (0, o.Z)({ viewType: r }, a, { isCompact: n, isPillLink: l, isRoundedRect: s, isWebRedesign: m, style: d }), t);
                                }),
                            [e, n, l, s, m, c],
                        );
                    return i.createElement(r.Z, { "aria-label": t, buttonsContainerStyle: l && E.gap, childrenStyle: !m && E.flexGrow, key: p, style: [l ? null : E.segmentedControl, m && E.leftAligned, d], visibleItemIndex: u }, h);
                };
        },
        782947: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => f });
            var o = n(807896),
                i = n(202784),
                r = n(896632),
                a = n(325686),
                l = n(711223),
                s = n(516951),
                c = n(731708),
                d = n(868634),
                u = n(952428),
                p = n(352924),
                g = n(392237);
            const m = g.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.cellBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding8: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, boxShadow: { boxShadow: e.boxShadows.medium }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 1 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column" }, row: { flexDirection: "row", alignItems: "center" }, marginTop4: { marginTop: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, info: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space8 }, infoIcon: { fontSize: ".74em", color: e.colors.gray700 }, backgroundTransparent: { backgroundColor: e.colors.transparent }, pill: { marginBottom: e.spaces.space4 }, inlinePill: { marginStart: e.spaces.space4 } })),
                h = { ...g.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                b = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": n, checked: o, dedicatedPillRow: r, description: g, disabled: b, disabledInlineCallout: f, endContent: y, horizontal: v, illustration: x, infoLabel: C, infoLabelType: w, inlineCallout: Z, label: E, name: S, onChange: k, pillText: T, pillType: z, reverseLabels: D, secondaryContent: R, secondaryDescription: P, switchStyle: M, testID: B }) => {
                    const I = (0, p.b)(),
                        W = (0, p.b)(),
                        H = (0, p.b)(),
                        _ = i.createElement(c.ZP, { color: M ? (o ? "text" : "gray800") : "text", id: I, role: "label", size: M ? "body" : "headline2", testID: "headline-label", weight: M ? "normal" : "bold" }, E),
                        L = !!g && i.createElement(c.ZP, { color: "gray700", id: W, size: "subtext1", style: T ? m.descriptionWithPill : m.description, testID: "description-label" }, g),
                        j = i.createElement(c.ZP, { color: "gray700", role: "label", size: "subtext2", style: m.description }, P),
                        $ = T ? i.createElement(d.ZP, { style: r ? m.pill : m.inlinePill, type: z }, T) : null,
                        F = i.createElement(i.Fragment, null, r ? $ : null, i.createElement(a.Z, { style: [m.row, C && m.marginBottom8] }, D ? L : _, r ? null : $), i.createElement(a.Z, { style: [m.row, D && m.marginTop4] }, D ? _ : L), R || (P ? j : void 0)),
                        V = M ? "unset" : (n ? 100 / n : 100) + "%",
                        A = M ? [m.padding8, m.borderRadiusLarge, o ? m.backgroundDefault : m.backgroundTransparent] : [m.padding16, m.boxShadow, m.borderRadiusLarge, o ? m.checked : null, m.backgroundDefault];
                    return i.createElement(i.Fragment, null, i.createElement(u.Z, { disabled: b, style: [m.root, ...A, v ? { maxWidth: V, ...m.grow } : null, 1 === t || v ? null : m.withMarginTop, t !== n && v && !M && m.withMarginEnd, !b && m.interactive], testID: B, withInteractiveStyling: !M }, !!x && i.createElement(a.Z, { style: m.iconContainer, testID: "illustration" }, x), i.createElement(a.Z, { style: [m.labelContainer, M && m.alignCenter] }, !!C && i.createElement(a.Z, { style: m.info }, i.createElement(d.ZP, { background: "green" === w ? "green500" : "red" === w ? "magenta500" : "yellow" === w ? "orange50" : "gray500" }, i.createElement(c.ZP, { color: "yellow" === w ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, C)), "red" !== w && "yellow" !== w && i.createElement(l.default, { style: m.infoIcon, testID: "infoIcon" })), F, o && !!Z && i.createElement(a.Z, { style: m.inlineCalloutContainer, testID: "inlineCallout" }, Z)), !!y && i.createElement(a.Z, { style: m.endContentContainer, testID: "endContent" }, i.createElement(c.ZP, { id: H, size: "subtext1", weight: "bold" }, y)), i.createElement("input", { "aria-describedby": `${W} ${H}`, "aria-label": e, "aria-labelledby": I, "aria-posinset": t, "aria-setsize": n, checked: o, disabled: b, name: S, onChange: o ? s.Z : k, style: h, type: "radio" })), b && f ? f : null);
                },
                f = (e) => {
                    const t = i.useCallback(({ value: e, ...t }) => i.createElement(b, (0, o.Z)({}, t, { key: e })), []);
                    return i.createElement(r.Z, (0, o.Z)({}, e, { renderSelector: t }));
                };
        },
        322771: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M2.998 8.5c0-1.38 1.119-2.5 2.5-2.5h9c1.381 0 2.5 1.12 2.5 2.5v14.12l-7-3.5-7 3.5V8.5zM18.5 2H8.998c-1.105 0-2 .9-2 2H18.5c.276 0 .5.22.5.5v9.82l-.002-.01v2.28L21 17.68V4.5C21 3.12 19.881 2 18.5 2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        839: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm16 6.882l2 1V9.618l-2 1v2.764zM4.508 6c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h11c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5h-11zm5.5 4c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.896-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        164174: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M8 18V6H4.5c-.28 0-.5.22-.5.5v11c0 .28.22.5.5.5H8zm11.5 0c.28 0 .5-.22.5-.5v-11c0-.28-.22-.5-.5-.5H16v12h3.5zM10 6v12h4V6h-4zM4.5 20C3.12 20 2 18.88 2 17.5v-11C2 5.12 3.12 4 4.5 4h15C20.88 4 22 5.12 22 6.5v11c0 1.38-1.12 2.5-2.5 2.5h-15z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        517747: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14 6V3h2v8h-2V8H3V6h11zm7 2h-3.5V6H21v2zM8 16v-3h2v8H8v-3H3v-2h5zm13 2h-9.5v-2H21v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        376278: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M11 1.28v.09c0 1.79 0 3.53-.829 5.18-.42-.78-1.061-1.36-1.707-1.94l-.268-.24c-.501 1-1.151 1.98-1.807 2.97C4.959 9.5 3.5 11.7 3.5 14.25c0 2.52.949 4.55 2.538 5.94 1.437 1.26 3.334 1.94 5.378 2.04.122.01.539.02.584.02 4.615 0 8.5-3.37 8.5-8C20.5 8.29 15.797 4 11 1.28zm2.534 18.08c-.521.56-1.144.87-1.681.89-.111 0-.221-.01-.331-.01-.454-.05-.684-.23-.82-.41-.192-.24-.313-.64-.313-1.14 0-.75.362-1.26 1.214-2.02.166-.14.35-.3.548-.46.47-.4 1.017-.86 1.56-1.41l.031.07c.35.83.647 1.78.647 2.54 0 .65-.317 1.38-.855 1.95zm2.572-.42c.18-.48.283-1 .283-1.53 0-1.17-.429-2.43-.804-3.32-.194-.46-.388-.85-.533-1.13-.073-.14-1.02-1.78-1.02-1.78l-.901 1.23c-.678.92-1.425 1.55-2.18 2.19-.224.19-.449.38-.673.58-.94.83-1.889 1.85-1.889 3.51 0 .22.014.44.047.67C6.673 18.38 5.5 16.6 5.5 14.25c0-2.01 1.133-3.61 2.246-5.18.284-.4.568-.8.831-1.21.419.89.419 2.18.173 3.08l.117-.11c1.971-1.7 3.514-3.03 3.969-6.06.632.47 1.415 1.12 2.195 1.93 1.79 1.84 3.469 4.42 3.469 7.55 0 1.92-.921 3.61-2.394 4.69z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        711223: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        234558: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M9.5 16.45v-8.9l7 4.45-7 4.45zM22.25 12c0 5.66-4.589 10.25-10.25 10.25S1.75 17.66 1.75 12 6.339 1.75 12 1.75 22.25 6.34 22.25 12zM12 20.25c4.556 0 8.25-3.69 8.25-8.25S16.556 3.75 12 3.75 3.75 7.44 3.75 12s3.694 8.25 8.25 8.25z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        666536: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => r });
            var o = n(936386),
                i = n.n(o);
            const r = (e, t, n) => i()(e, t, n);
        },
        74882: (e, t, n) => {
            "use strict";
            var o = n(23103),
                i = n(21178),
                r = n(910905),
                a = n(609736),
                l = Array;
            o(
                { target: "Array", proto: !0 },
                {
                    toReversed: function () {
                        return i(r(this), l);
                    },
                },
            ),
                a("toReversed");
        },
        936386: (e) => {
            function t(e, t, n) {
                var o, i, r, a, l;
                function s() {
                    var c = Date.now() - a;
                    c < t && c >= 0 ? (o = setTimeout(s, t - c)) : ((o = null), n || ((l = e.apply(r, i)), (r = i = null)));
                }
                null == t && (t = 100);
                var c = function () {
                    (r = this), (i = arguments), (a = Date.now());
                    var c = n && !o;
                    return o || (o = setTimeout(s, t)), c && ((l = e.apply(r, i)), (r = i = null)), l;
                };
                return (
                    (c.clear = function () {
                        o && (clearTimeout(o), (o = null));
                    }),
                    (c.flush = function () {
                        o && ((l = e.apply(r, i)), (r = i = null), clearTimeout(o), (o = null));
                    }),
                    c
                );
            }
            (t.debounce = t), (e.exports = t);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-6107ac1a.e9b01d6a.js.map

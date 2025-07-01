(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-6107ac1a", "icons/IconBookmarkCollectionsStroke-js", "icons/IconFilm-js", "icons/IconFilter-js", "icons/IconPromotedCircle-js"],
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
                p = "loading",
                u = "none";
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
                        case p:
                            return o.createElement(s.J, { "aria-label": e, color: t, loadingMessage: a });
                        case u:
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
                p = (e, t, n) => {
                    n((n) => {
                        const o = (0, r.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: o };
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
                                    t === h.text || ((0, r.Z)(e.count) && h.count === e.count) ? b((e) => ({ ...e, pendingCount: null, pendingText: null })) : (b((n) => ({ ...n, pendingCount: e.count, pendingText: t })), h.animating || p(e.count, t, b));
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
                                    : h.pendingText && p(h.pendingCount, h.pendingText, b));
                        }, [h.animating, h.oldText]),
                        o.useMemo(() => {
                            const e = u[h.transitionDirection],
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
            n.d(t, { Z: () => k });
            var o = n(807896),
                i = n(202784),
                r = n(194504),
                a = n(235902),
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
                v = d().fb9f6f39;
            class C extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: n, query: o, state: i } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: o, method: "push", state: { ...i, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: o, children: r, color: a, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: h, retainScrollPosition: C, style: Z, to: E } = this.props,
                        { location: k } = this.state,
                        S = E ? this._getMemoizedLink(E, C) : void 0,
                        T = c ? c(E) : k?.pathname === S?.pathname,
                        z = b.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? w.pillHoverStyle.backgroundColor : void 0 }),
                        R = h ? "medium" : T ? "bold" : "medium";
                    return i.createElement(f.Z, { "aria-label": t, "aria-selected": T, focusable: !!T, interactiveStyles: z, link: S, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [w.pillStyle] : [w.link]), ...(p && T ? [w.pillActiveStyle] : []), d ? (p ? w.compactPill : w.compactLink) : null, u ? w.roundedRect : null, Z], withoutInteractiveStyles: h }, ({ isFocused: t, isHovered: c }) => i.createElement(s.Z, { style: p && w.flexGrow }, i.createElement(g.ZP, { size: h ? "headline2" : void 0, style: [w.text, { color: this._getTextColor(T, c, h, p) }, d && w.compactText, h && t && w.focusedText, p && w.pillTextStyle, p && T && w.pillActiveTextStyle, p && c && w.pillHoverTextStyle], weight: R }, e && i.createElement(e, { style: w.icon }), r, h || p ? null : i.createElement(s.Z, { style: T && [w.border, { backgroundColor: l.default.theme.colors[a] }] })), n ? i.createElement(m.Z, { count: n, standalone: !0, style: [w.badge, n >= 10 && w.multiDigitBadge, n >= 20 && w.truncatedCountBadge], truncatedCountFormatter: v, unreadCountLabel: y, withBorder: !1 }) : o ? i.createElement(m.Z, { pip: !0, standalone: !0, style: w.badgePip, textColor: "red500", unreadCountLabel: x, withBorder: !1 }) : null));
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
                k = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: l, isRoundedRect: s, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
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
                    return i.createElement(r.Z, { "aria-label": t, buttonsContainerStyle: l && E.gap, childrenStyle: !m && E.flexGrow, key: u, style: [l ? null : E.segmentedControl, m && E.leftAligned, d], visibleItemIndex: p }, h);
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
                p = n(952428),
                u = n(352924),
                g = n(392237);
            const m = g.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.cellBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding8: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, boxShadow: { boxShadow: e.boxShadows.medium }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 1 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column" }, row: { flexDirection: "row", alignItems: "center" }, marginTop4: { marginTop: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, info: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space8 }, infoIcon: { fontSize: ".74em", color: e.colors.gray700 }, backgroundTransparent: { backgroundColor: e.colors.transparent }, pill: { marginBottom: e.spaces.space4 }, inlinePill: { marginStart: e.spaces.space4 } })),
                h = { ...g.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                b = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": n, checked: o, dedicatedPillRow: r, description: g, disabled: b, disabledInlineCallout: f, endContent: y, horizontal: x, illustration: v, infoLabel: C, infoLabelType: w, inlineCallout: Z, label: E, name: k, onChange: S, pillText: T, pillType: z, reverseLabels: R, secondaryContent: D, secondaryDescription: P, switchStyle: I, testID: B }) => {
                    const H = (0, u.b)(),
                        M = (0, u.b)(),
                        W = (0, u.b)(),
                        _ = i.createElement(c.ZP, { color: I ? (o ? "text" : "gray800") : "text", id: H, role: "label", size: I ? "body" : "headline2", testID: "headline-label", weight: I ? "normal" : "bold" }, E),
                        L = !!g && i.createElement(c.ZP, { color: "gray700", id: M, size: "subtext1", style: T ? m.descriptionWithPill : m.description, testID: "description-label" }, g),
                        V = i.createElement(c.ZP, { color: "gray700", role: "label", size: "subtext2", style: m.description }, P),
                        j = T ? i.createElement(d.ZP, { style: r ? m.pill : m.inlinePill, type: z }, T) : null,
                        $ = i.createElement(i.Fragment, null, r ? j : null, i.createElement(a.Z, { style: [m.row, C && m.marginBottom8] }, R ? L : _, r ? null : j), i.createElement(a.Z, { style: [m.row, R && m.marginTop4] }, R ? _ : L), D || (P ? V : void 0)),
                        F = I ? "unset" : (n ? 100 / n : 100) + "%",
                        A = I ? [m.padding8, m.borderRadiusLarge, o ? m.backgroundDefault : m.backgroundTransparent] : [m.padding16, m.boxShadow, m.borderRadiusLarge, o ? m.checked : null, m.backgroundDefault];
                    return i.createElement(i.Fragment, null, i.createElement(p.Z, { disabled: b, style: [m.root, ...A, x ? { maxWidth: F, ...m.grow } : null, 1 === t || x ? null : m.withMarginTop, t !== n && x && !I && m.withMarginEnd, !b && m.interactive], testID: B, withInteractiveStyling: !I }, !!v && i.createElement(a.Z, { style: m.iconContainer, testID: "illustration" }, v), i.createElement(a.Z, { style: [m.labelContainer, I && m.alignCenter] }, !!C && i.createElement(a.Z, { style: m.info }, i.createElement(d.ZP, { background: "green" === w ? "green500" : "red" === w ? "magenta500" : "yellow" === w ? "orange50" : "gray500" }, i.createElement(c.ZP, { color: "yellow" === w ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, C)), "red" !== w && "yellow" !== w && i.createElement(l.default, { style: m.infoIcon, testID: "infoIcon" })), $, o && !!Z && i.createElement(a.Z, { style: m.inlineCalloutContainer, testID: "inlineCallout" }, Z)), !!y && i.createElement(a.Z, { style: m.endContentContainer, testID: "endContent" }, i.createElement(c.ZP, { id: W, size: "subtext1", weight: "bold" }, y)), i.createElement("input", { "aria-describedby": `${M} ${W}`, "aria-label": e, "aria-labelledby": H, "aria-posinset": t, "aria-setsize": n, checked: o, disabled: b, name: k, onChange: o ? s.Z : S, style: h, type: "radio" })), b && f ? f : null);
                },
                f = (e) => {
                    const t = i.useCallback(({ value: e, ...t }) => i.createElement(b, (0, o.Z)({}, t, { key: e })), []);
                    return i.createElement(r.Z, (0, o.Z)({}, e, { renderSelector: t }));
                };
        },
        28862: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M2.998 8.5c0-1.38 1.119-2.5 2.5-2.5h9c1.381 0 2.5 1.12 2.5 2.5v14.12l-7-3.5-7 3.5V8.5zm2.5-.5c-.276 0-.5.22-.5.5v10.88l5-2.5 5 2.5V8.5c0-.28-.224-.5-.5-.5h-9zM18.5 2H8.998c-1.105 0-2 .9-2 2H18.5c.276 0 .5.22.5.5v9.82l-.002-.01v2.28L21 17.68V4.5C21 3.12 19.881 2 18.5 2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        926981: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M18.5 2h-13C4.12 2 3 3.12 3 4.5v15C3 20.88 4.12 22 5.5 22h13c1.38 0 2.5-1.12 2.5-2.5v-15C21 3.12 19.88 2 18.5 2zM7 20H5.5c-.28 0-.5-.22-.5-.5v-2h2V20zm0-4.5H5V13h2v2.5zM7 11H5V8.5h2V11zm0-4.5H5v-2c0-.28.22-.5.5-.5H7v2.5zM15 20H9v-7h6v7zm0-9H9V4h6v7zm4 8.5c0 .28-.22.5-.5.5H17v-2.5h2v2zm0-4h-2V13h2v2.5zm0-4.5h-2V8.5h2V11zm0-4.5h-2V4h1.5c.28 0 .5.22.5.5v2z" })) }, { writingDirection: t });
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
        266550: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M11.998 1.75C6.337 1.75 1.748 6.34 1.748 12s4.589 10.25 10.25 10.25 10.25-4.59 10.25-10.25-4.589-10.25-10.25-10.25zM15.996 15h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-6107ac1a.8756c84a.js.map

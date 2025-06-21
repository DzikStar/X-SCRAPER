(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-6107ac1a", "icons/IconBookmarkCollectionsStroke-js", "icons/IconDocument-js", "icons/IconQuoteBlock-js", "icons/IconWriteStroke-js"],
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
            n.d(t, { Z: () => k });
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
                x = () => d().ce4e85ae,
                C = d().fb9f6f39;
            class v extends i.Component {
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: o, children: r, color: a, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: h, retainScrollPosition: v, style: Z, to: E } = this.props,
                        { location: k } = this.state,
                        S = E ? this._getMemoizedLink(E, v) : void 0,
                        T = c ? c(E) : k?.pathname === S?.pathname,
                        R = b.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? w.pillHoverStyle.backgroundColor : void 0 }),
                        z = h ? "medium" : T ? "bold" : "medium";
                    return i.createElement(f.Z, { "aria-label": t, "aria-selected": T, focusable: !!T, interactiveStyles: R, link: S, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [w.pillStyle] : [w.link]), ...(u && T ? [w.pillActiveStyle] : []), d ? (u ? w.compactPill : w.compactLink) : null, p ? w.roundedRect : null, Z], withoutInteractiveStyles: h }, ({ isFocused: t, isHovered: c }) => i.createElement(s.Z, { style: u && w.flexGrow }, i.createElement(g.ZP, { size: h ? "headline2" : void 0, style: [w.text, { color: this._getTextColor(T, c, h, u) }, d && w.compactText, h && t && w.focusedText, u && w.pillTextStyle, u && T && w.pillActiveTextStyle, u && c && w.pillHoverTextStyle], weight: z }, e && i.createElement(e, { style: w.icon }), r, h || u ? null : i.createElement(s.Z, { style: T && [w.border, { backgroundColor: l.default.theme.colors[a] }] })), n ? i.createElement(m.Z, { count: n, standalone: !0, style: [w.badge, n >= 10 && w.multiDigitBadge, n >= 20 && w.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: y, withBorder: !1 }) : o ? i.createElement(m.Z, { pip: !0, standalone: !0, style: w.badgePip, textColor: "red500", unreadCountLabel: x, withBorder: !1 }) : null));
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
                Z = v,
                E = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                k = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: l, isRoundedRect: s, links: c, style: d, visibleItemIndex: u }) => {
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
                b = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": n, checked: o, dedicatedPillRow: r, description: g, disabled: b, disabledInlineCallout: f, endContent: y, horizontal: x, illustration: C, infoLabel: v, infoLabelType: w, inlineCallout: Z, label: E, name: k, onChange: S, pillText: T, pillType: R, reverseLabels: z, secondaryContent: D, secondaryDescription: P, switchStyle: B, testID: I }) => {
                    const W = (0, p.b)(),
                        M = (0, p.b)(),
                        H = (0, p.b)(),
                        L = i.createElement(c.ZP, { color: B ? (o ? "text" : "gray800") : "text", id: W, role: "label", size: B ? "body" : "headline2", testID: "headline-label", weight: B ? "normal" : "bold" }, E),
                        _ = !!g && i.createElement(c.ZP, { color: "gray700", id: M, size: "subtext1", style: T ? m.descriptionWithPill : m.description, testID: "description-label" }, g),
                        j = i.createElement(c.ZP, { color: "gray700", role: "label", size: "subtext2", style: m.description }, P),
                        $ = T ? i.createElement(d.ZP, { style: r ? m.pill : m.inlinePill, type: R }, T) : null,
                        A = i.createElement(i.Fragment, null, r ? $ : null, i.createElement(a.Z, { style: [m.row, v && m.marginBottom8] }, z ? _ : L, r ? null : $), i.createElement(a.Z, { style: [m.row, z && m.marginTop4] }, z ? L : _), D || (P ? j : void 0)),
                        F = B ? "unset" : (n ? 100 / n : 100) + "%",
                        G = B ? [m.padding8, m.borderRadiusLarge, o ? m.backgroundDefault : m.backgroundTransparent] : [m.padding16, m.boxShadow, m.borderRadiusLarge, o ? m.checked : null, m.backgroundDefault];
                    return i.createElement(i.Fragment, null, i.createElement(u.Z, { disabled: b, style: [m.root, ...G, x ? { maxWidth: F, ...m.grow } : null, 1 === t || x ? null : m.withMarginTop, t !== n && x && !B && m.withMarginEnd, !b && m.interactive], testID: I, withInteractiveStyling: !B }, !!C && i.createElement(a.Z, { style: m.iconContainer, testID: "illustration" }, C), i.createElement(a.Z, { style: [m.labelContainer, B && m.alignCenter] }, !!v && i.createElement(a.Z, { style: m.info }, i.createElement(d.ZP, { background: "green" === w ? "green500" : "red" === w ? "magenta500" : "yellow" === w ? "orange50" : "gray500" }, i.createElement(c.ZP, { color: "yellow" === w ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, v)), "red" !== w && "yellow" !== w && i.createElement(l.default, { style: m.infoIcon, testID: "infoIcon" })), A, o && !!Z && i.createElement(a.Z, { style: m.inlineCalloutContainer, testID: "inlineCallout" }, Z)), !!y && i.createElement(a.Z, { style: m.endContentContainer, testID: "endContent" }, i.createElement(c.ZP, { id: H, size: "subtext1", weight: "bold" }, y)), i.createElement("input", { "aria-describedby": `${M} ${H}`, "aria-label": e, "aria-labelledby": W, "aria-posinset": t, "aria-setsize": n, checked: o, disabled: b, name: k, onChange: o ? s.Z : S, style: h, type: "radio" })), b && f ? f : null);
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
        189700: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M8 11h8v2H8zm0-4h5v2H8z" }), o.createElement("path", { d: "M17.5 2h-11C5.12 2 4 3.12 4 4.5v15C4 20.88 5.12 22 6.5 22h6c4.14 0 7.5-3.36 7.5-7.5v-10C20 3.12 18.88 2 17.5 2zm-2.52 17.41c.01-.1.02-.21.02-.32v-1.27c0-.48.32-.82.84-.82h1.28c.09 0 .19 0 .29-.01-.53 1.04-1.39 1.89-2.43 2.42zM18 14c0 .58-.46 1-.88 1h-1.28C14.26 15 13 16.19 13 17.82v1.27c0 .46-.43.91-.97.91H6.5c-.28 0-.5-.22-.5-.5v-15c0-.28.22-.5.5-.5h11c.27 0 .5.22.5.5V14z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        763569: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M22 13H7v-2h15v2zm0-9H7v2h15V4zm-7 14H7v2h8v-2zM5 2H2v20h3V2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        376021: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => c });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(717683),
                l = n(347101);
            const s = (e = {}) => {
                const t = o.useContext(a.Z),
                    { direction: n } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style, t && l.Z.iconRTL], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14.23 2.854c.98-.977 2.56-.977 3.54 0l3.38 3.378c.97.977.97 2.559 0 3.536L9.91 21H3v-6.914L14.23 2.854zm2.12 1.414c-.19-.195-.51-.195-.7 0L5 14.914V19h4.09L19.73 8.354c.2-.196.2-.512 0-.708l-3.38-3.378zM14.75 19l-2 2H21v-2h-6.25z" })) }, { writingDirection: n });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-6107ac1a.eeaf090a.js.map

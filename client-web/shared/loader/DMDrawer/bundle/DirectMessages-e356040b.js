"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.DirectMessages-e356040b"],
    {
        392027: (e, t, s) => {
            s.d(t, { Z: () => a });
            var i = s(202784),
                n = s(154003),
                l = s(392237);
            class o extends i.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: s, disabled: l, href: o, icon: a, label: c, onPress: d, renderMenu: h, style: p, testID: u } = this.props,
                        m = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, s);
                    return i.createElement(n.ZP, { "aria-label": e, backgroundColor: t, color: m, disabled: l, icon: a, link: o, onPress: d, renderMenu: h, size: "xLarge", style: [r.root, !c && r.iconOnly, p], testID: u }, c);
                }
            }
            o.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const r = l.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                a = o;
        },
        779610: (e, t, s) => {
            s.d(t, { Z: () => d });
            var i = s(202784),
                n = s(325686),
                l = s(191796),
                o = s(58399),
                r = s(731708),
                a = s(952428),
                c = s(392237);
            const d = (e) => {
                    const { decoration: t, description: s, disabled: d = !1, isActive: p = !1, label: u, link: m, onPress: g, paddingHorizontal: f, renderRightContent: b, role: _ = "tab", styleOverride: y, testID: P = "pivot", thumbnail: w, thumbnailSize: R, withoutArrow: v = !1 } = e,
                        S = [h.thumbnailContainer, "medium" === R && h.thumbnailContainerMedium],
                        C = "string" == typeof u ? i.createElement(r.ZP, null, u) : u,
                        x = "object" == typeof m && m.external && !m.openInSameFrame,
                        E = s ? ("string" == typeof s ? i.createElement(r.ZP, { color: "gray700", size: "subtext2", testID: `${P}-description` }, s) : s) : null,
                        k = i.useMemo(() => ("space0" === f ? { paddingHorizontal: 0 } : { paddingHorizontal: f ? c.default.theme.spaces[f] : c.default.theme.componentDimensions.gutterHorizontal }), [f]);
                    return i.createElement(a.Z, { "aria-selected": "tab" === _ ? p : null, disabled: d, link: d ? void 0 : m, onPress: g, role: _, style: [h.root, k, d && h.disabled, y], testID: P, withInteractiveStyling: !!m || !!g }, i.createElement(n.Z, { style: h.contentContainer }, w ? i.createElement(n.Z, { style: S }, w) : null, i.createElement(n.Z, { style: h.content }, C, E), b ? b() : null, (!m && !g) || d || v ? null : x ? i.createElement(l.default, { style: h.icon }) : i.createElement(o.default, { style: h.icon })), t);
                },
                h = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        149202: (e, t, s) => {
            s.d(t, { Z: () => y });
            var i = s(202784),
                n = s(928316),
                l = s(196001),
                o = s(900664),
                r = s(325686),
                a = s(332920),
                c = s.n(a),
                d = s(668430),
                h = s(323265),
                p = s(908579),
                u = s(167630),
                m = s(392237),
                g = s(393058);
            const f = c().gdd51574;
            class b extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._unmounted = !1),
                        (this._inPTR = !1),
                        (this._pullHeight = 0),
                        (this.state = { pull: 0, pullDistance: 0 }),
                        (this._onScroll = () => window.requestAnimationFrame(() => this._handleScroll())),
                        (this._getListViewRef = (e) => {
                            this._listView = e;
                        }),
                        (this._getPullViewRef = (e) => {
                            this._pullView = e;
                        }),
                        (this._enablePTRIfNeeded = () => {
                            if (!this._unmounted) {
                                this._getScrollTop() <= 0 && this._enablePTR();
                            }
                        }),
                        (this._handleTouchStart = (e) => {
                            this._pullInfo.startY = e.touches[0].clientY;
                        }),
                        (this._handleTouchMove = (e) => {
                            if ("number" != typeof this._pullInfo.startY || e.defaultPrevented) return;
                            const t = e.touches[0].clientY,
                                s = Math.round(0.4 * (t - this._pullInfo.startY));
                            (s <= 0 && 0 === this.state.pullDistance) || (s > 0 && e.cancelable && e.preventDefault(), this._updatePullPosition(s), this._updatePullState(this.state.pullDistance, s), this.setState({ pullDistance: s }));
                        }),
                        (this._handleTouchEnd = (e) => {
                            const { moved: t } = this._pullInfo;
                            t && this.state.pullDistance > this._pullHeight ? (e.cancelable && e.preventDefault(), this._release()) : this._resetPullInfo();
                        });
                }
                render() {
                    const { children: e, isRefreshing: t } = this.props,
                        { pullDistance: s } = this.state,
                        n = t && s ? i.createElement(u.Z, null) : i.createElement(d.default, { "aria-label": f, style: [_.refreshArrow, 1 === this.state.pull ? _.refreshArrowReady : null] }),
                        o = { pullDistance: (0, l.ST)(s, l.um.stiff) };
                    return i.createElement(
                        r.Z,
                        { style: _.root },
                        i.createElement(l.y_, { style: o }, ({ pullDistance: t }) => i.createElement(r.Z, { ref: this._getListViewRef, style: !!t && { transform: [{ translate3d: `0,${t}px,0` }] } }, i.createElement(r.Z, { ref: this._getPullViewRef, style: _.ptrCell }, n), i.createElement(r.Z, { style: t ? _.children : void 0 }, e))),
                    );
                }
                componentDidMount() {
                    (this._unmounted = !1), this._pullView && (this._pullHeight = this._pullView.getBoundingClientRect().height), this._listView instanceof HTMLElement && (this._listParent = this._listView);
                    const e = this._getScrollParent();
                    e && e.addEventListener("scroll", this._onScroll), this._resetPullInfo(), window.requestAnimationFrame(this._enablePTRIfNeeded);
                }
                componentWillUnmount() {
                    this._unmounted = !0;
                    const e = this._getScrollParent();
                    e && e.removeEventListener("scroll", this._onScroll);
                }
                UNSAFE_componentWillReceiveProps(e) {
                    this.props.isRefreshing && !e.isRefreshing && (this._disablePTR(), this._resetPullInfo(), window.requestAnimationFrame(this._enablePTRIfNeeded));
                }
                _getScrollParent() {
                    return (this._scrollParent = this._scrollParent || (0, p.r)(n.findDOMNode(this))), this._scrollParent;
                }
                _getScrollTop() {
                    const e = this._getScrollParent();
                    return e ? (0, p.c)(e) : 0;
                }
                _enablePTR() {
                    if (!this._inPTR) {
                        this._inPTR = !0;
                        const e = this._listParent;
                        e && (e.addEventListener("touchend", this._handleTouchEnd), e.addEventListener("touchmove", this._handleTouchMove), e.addEventListener("touchstart", this._handleTouchStart, { passive: !0 }), (e.style.overflow = "visible"));
                    }
                }
                _disablePTR() {
                    if (((this._pullInfo.moved = !1), this._inPTR)) {
                        (this._inPTR = !1), this.setState({ pull: 0, pullDistance: 0 });
                        const e = this._listParent;
                        e && (e.removeEventListener("touchend", this._handleTouchEnd), e.removeEventListener("touchmove", this._handleTouchMove), e.removeEventListener("touchstart", this._handleTouchStart));
                    }
                }
                _updatePullState(e, t) {
                    const { lastPull: s } = this._pullInfo;
                    if (t > this._pullHeight) return 0 === this.state.pull && (h.ZP.isFirefox() || o.Z.vibrate(5), this.setState({ pull: 1 })), void (this._pullInfo.lastPull = t);
                    e > 0 && e < s && 1 === this.state.pull && this.setState({ pull: 0 });
                }
                _updatePullPosition(e) {
                    (this._pullInfo.moved = !0), this.setState({ pullDistance: e });
                }
                _release() {
                    this.state.pullDistance > this._pullHeight && (this._disablePTR(), this.props.isRefreshing || this.props.onRefresh(), this.setState({ pullDistance: this._pullHeight })), this.setState({ pull: 0 });
                }
                _handleScroll() {
                    this._getScrollTop() <= 0 ? this._enablePTR() : this._disablePTR();
                }
                _resetPullInfo() {
                    (this._pullInfo = { lastPull: 0, moved: !1, startY: null }), this.setState({ pullDistance: 0 });
                }
            }
            const _ = m.default.create((e) => ({ root: { display: "block", position: "relative" }, ptrCell: { alignItems: "center", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, height: "4rem", justifyContent: "center", start: "0", position: "absolute", end: "0", top: "-4rem" }, children: { transform: [{ translate3d: "0, 0, 0" }] }, refreshArrow: { height: "2rem", color: e.colors.gray300, transitionProperty: "transform", transitionDuration: "250ms" }, refreshArrowReady: { transform: [{ rotate: "180deg" }] } })),
                y = function ({ canRefresh: e = !0, children: t, isRefreshing: s = !1, onRefresh: n }) {
                    return g.Z.isTouchSupported() && e
                        ? i.createElement(b, {
                              canRefresh: e,
                              children: t,
                              isRefreshing: s,
                              onRefresh: () => {
                                  n();
                              },
                          })
                        : Array.isArray(t)
                          ? i.createElement(i.Fragment, null, t)
                          : t;
                };
        },
        403556: (e, t, s) => {
            s.d(t, { Z: () => C });
            var i = s(807896),
                n = s(202784),
                l = s(194504),
                o = s(235902),
                r = s(392237),
                a = s(325686),
                c = s(332920),
                d = s.n(c),
                h = s(912021),
                p = s(516951),
                u = s(731708),
                m = s(310088),
                g = s(175993),
                f = s(58881),
                b = s(530732);
            const _ = d().d2414d31,
                y = () => d().ce4e85ae,
                P = d().fb9f6f39;
            class w extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, h.Z)((e, t) => {
                            const { pathname: s, query: i, state: n } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: s, query: i, method: "push", state: { ...n, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, s, i) => {
                            const n = r.default.theme.colors.text,
                                l = r.default.theme.colors.gray700;
                            return s || i ? (e || t ? n : l) : e ? n : l;
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
                    const { Icon: e, "aria-label": t, badgeCount: s, badgePip: i, children: l, color: o, isActive: c, isCompact: d, isPillLink: h, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: w, style: v, to: S } = this.props,
                        { location: C } = this.state,
                        x = S ? this._getMemoizedLink(S, w) : void 0,
                        E = c ? c(S) : C?.pathname === x?.pathname,
                        k = f.Z.generate({ backgroundColor: "transparent", color: r.default.theme.colors.text, insetFocusRing: !0 }),
                        T = g ? "medium" : E ? "bold" : "medium";
                    return n.createElement(b.Z, { "aria-label": t, "aria-selected": E, focusable: !!E, interactiveStyles: k, link: x, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [h ? R.pill : R.link, h && E ? R.active : null, d ? (h ? R.compactPill : R.compactLink) : null, p ? R.roundedRect : null, v], withoutInteractiveStyles: g || h }, ({ isFocused: t, isHovered: c }) => n.createElement(a.Z, { style: h && R.flexGrow }, n.createElement(u.ZP, { size: g ? "headline2" : void 0, style: [R.text, { color: this._getTextColor(E, c, g, h) }, d && R.compactText, g && t && R.focusedText], weight: T }, e && n.createElement(e, { style: R.icon }), l, g || h ? null : n.createElement(a.Z, { style: E && [R.border, { backgroundColor: r.default.theme.colors[o] }] })), s ? n.createElement(m.Z, { count: s, standalone: !0, style: [R.badge, s >= 10 && R.multiDigitBadge, s >= 20 && R.truncatedCountBadge], truncatedCountFormatter: P, unreadCountLabel: _, withBorder: !1 }) : i ? n.createElement(m.Z, { pip: !0, standalone: !0, style: R.badgePip, textColor: "red500", unreadCountLabel: y, withBorder: !1 }) : null));
                }
            }
            (w.contextType = g.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const R = r.default.create((e) => ({
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
                v = w,
                S = r.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                C = ({ alignFirstItem: e, "aria-label": t, isCompact: s, isPillLink: r, isRoundedRect: a, links: c, style: d, visibleItemIndex: h }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = o.ZP.useProps(),
                        m = u() && !r,
                        g = n.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: l, ...o }, c) => {
                                    const d = m ? [S.linkRedesign, 0 === c && S.firstLinkRedesign, e && 0 === c && S.withNoPaddingStart] : void 0;
                                    return n.createElement(v, (0, i.Z)({ viewType: l }, o, { isCompact: s, isPillLink: r, isRoundedRect: a, isWebRedesign: m, style: d }), t);
                                }),
                            [e, s, r, a, m, c],
                        );
                    return n.createElement(l.Z, { "aria-label": t, buttonsContainerStyle: r && S.gap, childrenStyle: !m && S.flexGrow, key: p, style: [r ? null : S.segmentedControl, m && S.leftAligned, d], visibleItemIndex: h }, g);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DirectMessages-e356040b.5c2c84ea.js.map

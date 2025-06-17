"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-b9f9e4b4"],
    {
        978053: (e, t, o) => {
            o.d(t, { default: () => g });
            var r = o(111677),
                s = o.n(r);
            const l = s().e3098e07,
                i = s().fea16a51,
                a = s().a4f2d94d,
                n = s().hf9bc787,
                c = s().efcd5885,
                d = s().c37228b5,
                u = 2592e3,
                p = 604800,
                h = 86400,
                m = 3600,
                g = {
                    formatTimeSinceDate: (e, t) => {
                        const o = ((t || new Date()).getTime() - e.getTime()) / 1e3;
                        if (o >= 31104e3) {
                            const e = Math.max(1, Math.round(o / 31536e3));
                            return d({ years: e });
                        }
                        if (o >= u) {
                            const e = Math.max(1, Math.floor(o / u));
                            return c({ months: e });
                        }
                        if (o >= 561600) {
                            const e = Math.max(1, Math.round(o / p));
                            return n({ weeks: e });
                        }
                        if (o >= 84600) {
                            const e = Math.max(1, Math.round(o / h));
                            return a({ days: e });
                        }
                        if (o >= 3570) {
                            const e = Math.max(1, Math.round(o / m));
                            return i({ hours: e });
                        }
                        {
                            const e = Math.max(1, Math.round(o / 60));
                            return l({ minutes: e });
                        }
                    },
                    formatWeekRange: (e) => {
                        const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())),
                            o = t.getUTCDay(),
                            r = new Date(t);
                        r.setUTCDate(r.getUTCDate() - o);
                        const s = new Date(r);
                        s.setUTCDate(s.getUTCDate() + 6);
                        const l = new Date(Date.UTC(r.getUTCFullYear(), 0, 4)),
                            i = Math.floor((r.getTime() - l.getTime()) / 6048e5 + 1),
                            a = new Date(),
                            n = s > a ? a : s,
                            c = `${r.toLocaleString("en-US", { month: "short", day: "numeric" })} - ${n.toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
                        return [r.getUTCFullYear(), i, c];
                    },
                };
        },
        661810: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(202784),
                s = o(325686),
                l = o(392237);
            function i({ spacing: e, style: t }) {
                return r.createElement(s.Z, { role: "separator", style: [a.divider, { marginVertical: null != e ? l.default.theme.spaces[e] : void 0 }, t] });
            }
            const a = l.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        392027: (e, t, o) => {
            o.d(t, { Z: () => n });
            var r = o(202784),
                s = o(154003),
                l = o(392237);
            class i extends r.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: o, disabled: l, href: i, icon: n, label: c, onPress: d, renderMenu: u, style: p, testID: h } = this.props,
                        m = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, o);
                    return r.createElement(s.ZP, { "aria-label": e, backgroundColor: t, color: m, disabled: l, icon: n, link: i, onPress: d, renderMenu: u, size: "xLarge", style: [a.root, !c && a.iconOnly, p], testID: h }, c);
                }
            }
            i.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const a = l.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                n = i;
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => n });
            var r = o(202784),
                s = o(325686),
                l = o(235902),
                i = o(885015),
                a = o(392237);
            function n({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: n } = l.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: a.default.theme.colors[e] ?? a.default.theme.colors.borderColor };
                return o ? r.createElement(i.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(s.Z, { style: c.gapColumn }, r.createElement(s.Z, { style: [c.gap, d] })), r.createElement(s.Z, { style: c.gapText }, o), r.createElement(s.Z, { style: c.gapColumn }, r.createElement(s.Z, { style: [c.gap, d] }))) : r.createElement(s.Z, { style: [!t && c.root, n() && c.rootRedesign, c.gap, d] });
            }
            const c = a.default.create((e) => ({ borderColor: { backgroundColor: a.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: a.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(807896),
                s = o(202784),
                l = o(325686),
                i = o(392237);
            class a extends s.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...i } = this.props,
                        a = s.Children.map(e, (e) => e && s.cloneElement(e, { style: [e.props.style, n.column, o && n.withGutterColumn] }));
                    return s.createElement(l.Z, (0, r.Z)({ style: [t, n.root, o && n.withGutter] }, i), a);
                }
            }
            a.defaultProps = { withGutter: !1 };
            const n = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = a;
        },
        149202: (e, t, o) => {
            o.d(t, { Z: () => _ });
            var r = o(202784),
                s = o(928316),
                l = o(196001),
                i = o(900664),
                a = o(325686),
                n = o(111677),
                c = o.n(n),
                d = o(668430),
                u = o(323265),
                p = o(908579),
                h = o(167630),
                m = o(392237),
                g = o(393058);
            const f = c().gdd51574;
            class b extends r.Component {
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
                                o = Math.round(0.4 * (t - this._pullInfo.startY));
                            (o <= 0 && 0 === this.state.pullDistance) || (o > 0 && e.cancelable && e.preventDefault(), this._updatePullPosition(o), this._updatePullState(this.state.pullDistance, o), this.setState({ pullDistance: o }));
                        }),
                        (this._handleTouchEnd = (e) => {
                            const { moved: t } = this._pullInfo;
                            t && this.state.pullDistance > this._pullHeight ? (e.cancelable && e.preventDefault(), this._release()) : this._resetPullInfo();
                        });
                }
                render() {
                    const { children: e, isRefreshing: t } = this.props,
                        { pullDistance: o } = this.state,
                        s = t && o ? r.createElement(h.Z, null) : r.createElement(d.default, { "aria-label": f, style: [y.refreshArrow, 1 === this.state.pull ? y.refreshArrowReady : null] }),
                        i = { pullDistance: (0, l.ST)(o, l.um.stiff) };
                    return r.createElement(
                        a.Z,
                        { style: y.root },
                        r.createElement(l.y_, { style: i }, ({ pullDistance: t }) => r.createElement(a.Z, { ref: this._getListViewRef, style: !!t && { transform: [{ translate3d: `0,${t}px,0` }] } }, r.createElement(a.Z, { ref: this._getPullViewRef, style: y.ptrCell }, s), r.createElement(a.Z, { style: t ? y.children : void 0 }, e))),
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
                    return (this._scrollParent = this._scrollParent || (0, p.r)(s.findDOMNode(this))), this._scrollParent;
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
                    const { lastPull: o } = this._pullInfo;
                    if (t > this._pullHeight) return 0 === this.state.pull && (u.ZP.isFirefox() || i.Z.vibrate(5), this.setState({ pull: 1 })), void (this._pullInfo.lastPull = t);
                    e > 0 && e < o && 1 === this.state.pull && this.setState({ pull: 0 });
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
            const y = m.default.create((e) => ({ root: { display: "block", position: "relative" }, ptrCell: { alignItems: "center", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, height: "4rem", justifyContent: "center", start: "0", position: "absolute", end: "0", top: "-4rem" }, children: { transform: [{ translate3d: "0, 0, 0" }] }, refreshArrow: { height: "2rem", color: e.colors.gray300, transitionProperty: "transform", transitionDuration: "250ms" }, refreshArrowReady: { transform: [{ rotate: "180deg" }] } })),
                _ = function ({ canRefresh: e = !0, children: t, isRefreshing: o = !1, onRefresh: s }) {
                    return g.Z.isTouchSupported() && e
                        ? r.createElement(b, {
                              canRefresh: e,
                              children: t,
                              isRefreshing: o,
                              onRefresh: () => {
                                  s();
                              },
                          })
                        : Array.isArray(t)
                          ? r.createElement(r.Fragment, null, t)
                          : t;
                };
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => x });
            var r = o(807896),
                s = o(202784),
                l = o(194504),
                i = o(235902),
                a = o(392237),
                n = o(325686),
                c = o(111677),
                d = o.n(c),
                u = o(912021),
                p = o(516951),
                h = o(731708),
                m = o(310088),
                g = o(175993),
                f = o(58881),
                b = o(530732);
            const y = d().d2414d31,
                _ = () => d().ce4e85ae,
                v = d().fb9f6f39;
            class C extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: o, query: r, state: s } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: r, method: "push", state: { ...s, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, r) => {
                            const s = a.default.theme.colors.text,
                                l = a.default.theme.colors.gray700;
                            return o || r ? (e || t ? s : l) : e ? s : l;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: r, children: l, color: i, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: C, style: P, to: w } = this.props,
                        { location: x } = this.state,
                        R = w ? this._getMemoizedLink(w, C) : void 0,
                        T = c ? c(w) : x?.pathname === R?.pathname,
                        E = f.Z.generate({ backgroundColor: "transparent", color: a.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? S.pillHoverStyle.backgroundColor : void 0 }),
                        k = g ? "medium" : T ? "bold" : "medium";
                    return s.createElement(b.Z, { "aria-label": t, "aria-selected": T, focusable: !!T, interactiveStyles: E, link: R, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [S.pillStyle] : [S.link]), ...(u && T ? [S.pillActiveStyle] : []), d ? (u ? S.compactPill : S.compactLink) : null, p ? S.roundedRect : null, P], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => s.createElement(n.Z, { style: u && S.flexGrow }, s.createElement(h.ZP, { size: g ? "headline2" : void 0, style: [S.text, { color: this._getTextColor(T, c, g, u) }, d && S.compactText, g && t && S.focusedText, u && S.pillTextStyle, u && T && S.pillActiveTextStyle, u && c && S.pillHoverTextStyle], weight: k }, e && s.createElement(e, { style: S.icon }), l, g || u ? null : s.createElement(n.Z, { style: T && [S.border, { backgroundColor: a.default.theme.colors[i] }] })), o ? s.createElement(m.Z, { count: o, standalone: !0, style: [S.badge, o >= 10 && S.multiDigitBadge, o >= 20 && S.truncatedCountBadge], truncatedCountFormatter: v, unreadCountLabel: y, withBorder: !1 }) : r ? s.createElement(m.Z, { pip: !0, standalone: !0, style: S.badgePip, textColor: "red500", unreadCountLabel: _, withBorder: !1 }) : null));
                }
            }
            (C.contextType = g.Z), (C.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const S = a.default.create((e) => ({
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
                P = C,
                w = a.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                x = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: a, isRoundedRect: n, links: c, style: d, visibleItemIndex: u }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = i.ZP.useProps(),
                        m = h() && !a,
                        g = s.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: l, ...i }, c) => {
                                    const d = m ? [w.linkRedesign, 0 === c && w.firstLinkRedesign, e && 0 === c && w.withNoPaddingStart] : void 0;
                                    return s.createElement(P, (0, r.Z)({ viewType: l }, i, { isCompact: o, isPillLink: a, isRoundedRect: n, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, a, n, m, c],
                        );
                    return s.createElement(l.Z, { "aria-label": t, buttonsContainerStyle: a && w.gap, childrenStyle: !m && w.flexGrow, key: p, style: [a ? null : w.segmentedControl, m && w.leftAligned, d], visibleItemIndex: u }, g);
                };
        },
        165822: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(202784),
                s = o(325686),
                l = o(58881),
                i = o(530732),
                a = o(392237);
            const n = a.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                c = ({ "aria-label": e, containerStyle: t, disabled: o, interactiveStyles: c, isCompact: d, link: u, lower: p, onClick: h, stackLayoutLowerStyle: m, stackLayoutUpperStyle: g, upper: f, withInsetFocusRing: b = !0, withInteractiveStyling: y = !1 }) => {
                    const _ = c ?? l.Z.generate({ backgroundColor: a.default.theme.colors.transparent, color: a.default.theme.colors.primary, insetFocusRing: b }),
                        v = r.createElement(r.Fragment, null, r.createElement(s.Z, { style: [n.defaultUpperContainerStyle, g, d && { height: "auto" }] }, f), p ? r.createElement(s.Z, { style: [n.defaultLowerContainerStyle, m] }, p) : null);
                    return r.createElement(i.Z, { "aria-label": e, disabled: o, interactive: y, interactiveStyles: y ? _ : void 0, link: u, onClick: h, style: [n.root, t] }, v);
                };
        },
        470014: (e, t, o) => {
            o.d(t, { Z: () => u });
            var r = o(202784),
                s = o(325686),
                l = o(530525),
                i = o(731708),
                a = o(439592),
                n = o(392237),
                c = o(165822);
            const d = n.default.create((e) => ({ root: { padding: e.spaces.space4 }, upper: { height: "auto" }, title: { paddingBottom: e.spaces.space4 }, description: { paddingBottom: e.spaces.space8 }, previousPrice: { textDecorationLine: "line-through", marginStart: e.spaces.space4 }, price: { paddingBottom: e.spaces.space8 }, imageColorOverlay: { position: "absolute", backgroundColor: e.colors.gray700, opacity: 0.05, width: "100%", height: "100%" }, imageOverlay: { position: "absolute", bottom: e.spaces.space12, start: e.spaces.space12, marginEnd: e.spaces.space12, paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8, backgroundColor: e.colors.white, borderRadius: e.borderRadii.xLarge } })),
                u = (e) => {
                    const { "aria-label": t, containerStyle: o, description: n, image: u, imageOverlayText: p, link: h, onClick: m, previousPrice: g, price: f, title: b } = e,
                        y = p ? r.createElement(i.ZP, { color: "alwaysBaseGray1100", size: "subtext3", style: d.imageOverlay, weight: "bold" }, p) : null,
                        _ = r.createElement(r.Fragment, null, r.createElement(l.Z, { "aria-label": t, aspectMode: a.Z.SQUARE, image: u }), r.createElement(s.Z, { style: d.imageColorOverlay }), y),
                        v = g ? r.createElement(i.ZP, { color: "gray700", numberOfLines: 1, style: d.previousPrice, weight: "normal" }, g) : null,
                        C = f ? r.createElement(i.ZP, { numberOfLines: 1, size: "subtext2", style: d.price }, f, v) : null,
                        S = r.createElement(r.Fragment, null, r.createElement(i.ZP, { numberOfLines: 1, style: d.title, weight: "bold" }, b), r.createElement(i.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2", style: d.description }, n), C);
                    return r.createElement(c.Z, { "aria-label": t, containerStyle: [d.root, o], link: h, lower: S, onClick: m, stackLayoutUpperStyle: d.upper, upper: _, withInteractiveStyling: !0 });
                };
        },
        874090: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(202784);
            const s = (0, o(523561).Z)({ loader: () => Promise.all([o.e("modules.audio-6107ac1a"), o.e("modules.audio-b953418a"), o.e("modules.audio-7c51e6a7"), o.e("modules.audio-04db59e9"), o.e("modules.audio-76583d6c"), o.e("modules.audio-b7a8a5fb"), o.e("modules.audio-51f6e793"), o.e("modules.audio-e019dbda"), o.e("modules.audio-262c94d4"), o.e("modules.audio-c6fe4ea4"), o.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"), o.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerPrerollUI~loaders.video.VideoPlayerEventsU"), o.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerEventsUI"), o.e("loaders.video.VideoPlayerEventsUI")]).then(o.bind(o, 374749)), renderPlaceholder: () => r.createElement("div", null) });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-b9f9e4b4.86fc761a.js.map

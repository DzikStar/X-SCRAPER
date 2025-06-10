"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-6107ac1a", "icons/IconBulletedList-js", "icons/IconReplyOff-js", "icons/IconStar-js"],
    {
        782274: (e, t, l) => {
            l.d(t, { Z: () => p });
            var a,
                n,
                i,
                s,
                r,
                o,
                c,
                d,
                u = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useNhlLiveEventDataQuery",
                        selections: [
                            {
                                alias: null,
                                args: (n = [
                                    { kind: "Variable", name: "rest_id", variableName: "id" },
                                    { kind: "Literal", name: "s", value: "84ee" },
                                ]),
                                concreteType: "LiveEvent",
                                kind: "LinkedField",
                                name: "live_event_by_rest_id",
                                plural: !1,
                                selections: [
                                    (i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "NHLEventPage",
                                        kind: "LinkedField",
                                        name: "nhl_event_page",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "NHLGame",
                                                kind: "LinkedField",
                                                name: "event_info",
                                                plural: !1,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "SportsGameBasicData",
                                                        kind: "LinkedField",
                                                        name: "basic_data",
                                                        plural: !1,
                                                        selections: [
                                                            (s = { alias: null, args: null, kind: "ScalarField", name: "images", storageKey: null }),
                                                            (r = { alias: null, args: null, kind: "ScalarField", name: "hashtag", storageKey: null }),
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "SportsTeam",
                                                                kind: "LinkedField",
                                                                name: "teams",
                                                                plural: !0,
                                                                selections: [
                                                                    (o = {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "SportsTeamInfo",
                                                                        kind: "LinkedField",
                                                                        name: "team_information",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "team_name", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "short_name", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    }),
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            (c = { alias: null, args: null, kind: "ScalarField", name: "start_time_ms", storageKey: null }),
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useNhlLiveEventDataQuery", selections: [{ alias: null, args: n, concreteType: "LiveEvent", kind: "LinkedField", name: "live_event_by_rest_id", plural: !1, selections: [i, { alias: null, args: null, concreteType: "NHLEventPage", kind: "LinkedField", name: "nhl_event_page", plural: !1, selections: [{ alias: null, args: null, concreteType: "NHLGame", kind: "LinkedField", name: "event_info", plural: !1, selections: [{ alias: null, args: null, concreteType: "SportsGameBasicData", kind: "LinkedField", name: "basic_data", plural: !1, selections: [s, r, { alias: null, args: null, concreteType: "SportsTeam", kind: "LinkedField", name: "teams", plural: !0, selections: [o, (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, c], storageKey: null }, d], storageKey: null }], storageKey: null }, d], storageKey: null }] },
                    params: { id: "1R0Ko9P9ykA88kBcrqjBoA", metadata: {}, name: "useNhlLiveEventDataQuery", operationKind: "query", text: null },
                };
            u.hash = "3eaf004e77a89c6ca832134fb2fd8d00";
            const p = u;
        },
        791181: (e, t, l) => {
            l.d(t, { Z: () => p });
            var a,
                n,
                i,
                s,
                r,
                o,
                c,
                d,
                u = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "id" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useSoccerLiveEventDataQuery",
                        selections: [
                            {
                                alias: null,
                                args: (n = [
                                    { kind: "Variable", name: "rest_id", variableName: "id" },
                                    { kind: "Literal", name: "s", value: "84ee" },
                                ]),
                                concreteType: "LiveEvent",
                                kind: "LinkedField",
                                name: "live_event_by_rest_id",
                                plural: !1,
                                selections: [
                                    (i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "SoccerEventPage",
                                        kind: "LinkedField",
                                        name: "soccer_event_page",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "SoccerMatch",
                                                kind: "LinkedField",
                                                name: "event_info",
                                                plural: !1,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "SportsGameBasicData",
                                                        kind: "LinkedField",
                                                        name: "basic_data",
                                                        plural: !1,
                                                        selections: [
                                                            (s = { alias: null, args: null, kind: "ScalarField", name: "images", storageKey: null }),
                                                            (r = { alias: null, args: null, kind: "ScalarField", name: "hashtag", storageKey: null }),
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "SportsTeam",
                                                                kind: "LinkedField",
                                                                name: "teams",
                                                                plural: !0,
                                                                selections: [
                                                                    (o = {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "SportsTeamInfo",
                                                                        kind: "LinkedField",
                                                                        name: "team_information",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "team_name", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "short_name", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    }),
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            (c = { alias: null, args: null, kind: "ScalarField", name: "start_time_ms", storageKey: null }),
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useSoccerLiveEventDataQuery", selections: [{ alias: null, args: n, concreteType: "LiveEvent", kind: "LinkedField", name: "live_event_by_rest_id", plural: !1, selections: [i, { alias: null, args: null, concreteType: "SoccerEventPage", kind: "LinkedField", name: "soccer_event_page", plural: !1, selections: [{ alias: null, args: null, concreteType: "SoccerMatch", kind: "LinkedField", name: "event_info", plural: !1, selections: [{ alias: null, args: null, concreteType: "SportsGameBasicData", kind: "LinkedField", name: "basic_data", plural: !1, selections: [s, r, { alias: null, args: null, concreteType: "SportsTeam", kind: "LinkedField", name: "teams", plural: !0, selections: [o, (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, c], storageKey: null }, d], storageKey: null }], storageKey: null }, d], storageKey: null }] },
                    params: { id: "isTNFS4SKo99co-H0xTKyA", metadata: {}, name: "useSoccerLiveEventDataQuery", operationKind: "query", text: null },
                };
            u.hash = "2b67291281a91999442af9f50b54540d";
            const p = u;
        },
        661810: (e, t, l) => {
            l.d(t, { Z: () => s });
            var a = l(202784),
                n = l(325686),
                i = l(392237);
            function s({ spacing: e, style: t }) {
                return a.createElement(n.Z, { role: "separator", style: [r.divider, { marginVertical: null != e ? i.default.theme.spaces[e] : void 0 }, t] });
            }
            const r = i.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        392027: (e, t, l) => {
            l.d(t, { Z: () => o });
            var a = l(202784),
                n = l(154003),
                i = l(392237);
            class s extends a.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: l, disabled: i, href: s, icon: o, label: c, onPress: d, renderMenu: u, style: p, testID: h } = this.props,
                        m = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, l);
                    return a.createElement(n.ZP, { "aria-label": e, backgroundColor: t, color: m, disabled: i, icon: o, link: s, onPress: d, renderMenu: u, size: "xLarge", style: [r.root, !c && r.iconOnly, p], testID: h }, c);
                }
            }
            s.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const r = i.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                o = s;
        },
        420412: (e, t, l) => {
            l.d(t, { Z: () => o });
            var a = l(202784),
                n = l(325686),
                i = l(235902),
                s = l(885015),
                r = l(392237);
            function o({ borderColor: e = "borderColor", isSlim: t = !1, label: l }) {
                const { isWebRedesign: o } = i.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: r.default.theme.colors[e] ?? r.default.theme.colors.borderColor };
                return l ? a.createElement(s.Z, { style: !t && c.root, withGutter: !0 }, a.createElement(n.Z, { style: c.gapColumn }, a.createElement(n.Z, { style: [c.gap, d] })), a.createElement(n.Z, { style: c.gapText }, l), a.createElement(n.Z, { style: c.gapColumn }, a.createElement(n.Z, { style: [c.gap, d] }))) : a.createElement(n.Z, { style: [!t && c.root, o() && c.rootRedesign, c.gap, d] });
            }
            const c = r.default.create((e) => ({ borderColor: { backgroundColor: r.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: r.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, l) => {
            l.d(t, { Z: () => c });
            var a = l(807896),
                n = l(202784),
                i = l(325686),
                s = l(392237);
            class r extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: l, ...s } = this.props,
                        r = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, o.column, l && o.withGutterColumn] }));
                    return n.createElement(i.Z, (0, a.Z)({ style: [t, o.root, l && o.withGutter] }, s), r);
                }
            }
            r.defaultProps = { withGutter: !1 };
            const o = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = r;
        },
        149202: (e, t, l) => {
            l.d(t, { Z: () => v });
            var a = l(202784),
                n = l(928316),
                i = l(196001),
                s = l(900664),
                r = l(325686),
                o = l(111677),
                c = l.n(o),
                d = l(668430),
                u = l(323265),
                p = l(908579),
                h = l(167630),
                m = l(392237),
                g = l(393058);
            const y = c().gdd51574;
            class f extends a.Component {
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
                                l = Math.round(0.4 * (t - this._pullInfo.startY));
                            (l <= 0 && 0 === this.state.pullDistance) || (l > 0 && e.cancelable && e.preventDefault(), this._updatePullPosition(l), this._updatePullState(this.state.pullDistance, l), this.setState({ pullDistance: l }));
                        }),
                        (this._handleTouchEnd = (e) => {
                            const { moved: t } = this._pullInfo;
                            t && this.state.pullDistance > this._pullHeight ? (e.cancelable && e.preventDefault(), this._release()) : this._resetPullInfo();
                        });
                }
                render() {
                    const { children: e, isRefreshing: t } = this.props,
                        { pullDistance: l } = this.state,
                        n = t && l ? a.createElement(h.Z, null) : a.createElement(d.default, { "aria-label": y, style: [b.refreshArrow, 1 === this.state.pull ? b.refreshArrowReady : null] }),
                        s = { pullDistance: (0, i.ST)(l, i.um.stiff) };
                    return a.createElement(
                        r.Z,
                        { style: b.root },
                        a.createElement(i.y_, { style: s }, ({ pullDistance: t }) => a.createElement(r.Z, { ref: this._getListViewRef, style: !!t && { transform: [{ translate3d: `0,${t}px,0` }] } }, a.createElement(r.Z, { ref: this._getPullViewRef, style: b.ptrCell }, n), a.createElement(r.Z, { style: t ? b.children : void 0 }, e))),
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
                    const { lastPull: l } = this._pullInfo;
                    if (t > this._pullHeight) return 0 === this.state.pull && (u.ZP.isFirefox() || s.Z.vibrate(5), this.setState({ pull: 1 })), void (this._pullInfo.lastPull = t);
                    e > 0 && e < l && 1 === this.state.pull && this.setState({ pull: 0 });
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
            const b = m.default.create((e) => ({ root: { display: "block", position: "relative" }, ptrCell: { alignItems: "center", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, height: "4rem", justifyContent: "center", start: "0", position: "absolute", end: "0", top: "-4rem" }, children: { transform: [{ translate3d: "0, 0, 0" }] }, refreshArrow: { height: "2rem", color: e.colors.gray300, transitionProperty: "transform", transitionDuration: "250ms" }, refreshArrowReady: { transform: [{ rotate: "180deg" }] } })),
                v = function ({ canRefresh: e = !0, children: t, isRefreshing: l = !1, onRefresh: n }) {
                    return g.Z.isTouchSupported() && e
                        ? a.createElement(f, {
                              canRefresh: e,
                              children: t,
                              isRefreshing: l,
                              onRefresh: () => {
                                  n();
                              },
                          })
                        : Array.isArray(t)
                          ? a.createElement(a.Fragment, null, t)
                          : t;
                };
        },
        403556: (e, t, l) => {
            l.d(t, { Z: () => w });
            var a = l(807896),
                n = l(202784),
                i = l(194504),
                s = l(235902),
                r = l(392237),
                o = l(325686),
                c = l(111677),
                d = l.n(c),
                u = l(912021),
                p = l(516951),
                h = l(731708),
                m = l(310088),
                g = l(175993),
                y = l(58881),
                f = l(530732);
            const b = d().d2414d31,
                v = () => d().ce4e85ae,
                _ = d().fb9f6f39;
            class k extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: l, query: a, state: n } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: l, query: a, method: "push", state: { ...n, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, l, a) => {
                            const n = r.default.theme.colors.text,
                                i = r.default.theme.colors.gray700;
                            return l || a ? (e || t ? n : i) : e ? n : i;
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
                    const { Icon: e, "aria-label": t, badgeCount: l, badgePip: a, children: i, color: s, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: k, style: P, to: C } = this.props,
                        { location: w } = this.state,
                        E = C ? this._getMemoizedLink(C, k) : void 0,
                        x = c ? c(C) : w?.pathname === E?.pathname,
                        L = y.Z.generate({ backgroundColor: "transparent", color: r.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? S.pillHoverStyle.backgroundColor : void 0 }),
                        T = g ? "medium" : x ? "bold" : "medium";
                    return n.createElement(f.Z, { "aria-label": t, "aria-selected": x, focusable: !!x, interactiveStyles: L, link: E, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [S.pillStyle] : [S.link]), ...(u && x ? [S.pillActiveStyle] : []), d ? (u ? S.compactPill : S.compactLink) : null, p ? S.roundedRect : null, P], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => n.createElement(o.Z, { style: u && S.flexGrow }, n.createElement(h.ZP, { size: g ? "headline2" : void 0, style: [S.text, { color: this._getTextColor(x, c, g, u) }, d && S.compactText, g && t && S.focusedText, u && S.pillTextStyle, u && x && S.pillActiveTextStyle, u && c && S.pillHoverTextStyle], weight: T }, e && n.createElement(e, { style: S.icon }), i, g || u ? null : n.createElement(o.Z, { style: x && [S.border, { backgroundColor: r.default.theme.colors[s] }] })), l ? n.createElement(m.Z, { count: l, standalone: !0, style: [S.badge, l >= 10 && S.multiDigitBadge, l >= 20 && S.truncatedCountBadge], truncatedCountFormatter: _, unreadCountLabel: b, withBorder: !1 }) : a ? n.createElement(m.Z, { pip: !0, standalone: !0, style: S.badgePip, textColor: "red500", unreadCountLabel: v, withBorder: !1 }) : null));
                }
            }
            (k.contextType = g.Z), (k.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const S = r.default.create((e) => ({
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
                P = k,
                C = r.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                w = ({ alignFirstItem: e, "aria-label": t, isCompact: l, isPillLink: r, isRoundedRect: o, links: c, style: d, visibleItemIndex: u }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = s.ZP.useProps(),
                        m = h() && !r,
                        g = n.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: i, ...s }, c) => {
                                    const d = m ? [C.linkRedesign, 0 === c && C.firstLinkRedesign, e && 0 === c && C.withNoPaddingStart] : void 0;
                                    return n.createElement(P, (0, a.Z)({ viewType: i }, s, { isCompact: l, isPillLink: r, isRoundedRect: o, isWebRedesign: m, style: d }), t);
                                }),
                            [e, l, r, o, m, c],
                        );
                    return n.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: r && C.gap, childrenStyle: !m && C.flexGrow, key: p, style: [r ? null : C.segmentedControl, m && C.leftAligned, d], visibleItemIndex: u }, g);
                };
        },
        165822: (e, t, l) => {
            l.d(t, { Z: () => c });
            var a = l(202784),
                n = l(325686),
                i = l(58881),
                s = l(530732),
                r = l(392237);
            const o = r.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                c = ({ "aria-label": e, containerStyle: t, disabled: l, interactiveStyles: c, isCompact: d, link: u, lower: p, onClick: h, stackLayoutLowerStyle: m, stackLayoutUpperStyle: g, upper: y, withInsetFocusRing: f = !0, withInteractiveStyling: b = !1 }) => {
                    const v = c ?? i.Z.generate({ backgroundColor: r.default.theme.colors.transparent, color: r.default.theme.colors.primary, insetFocusRing: f }),
                        _ = a.createElement(a.Fragment, null, a.createElement(n.Z, { style: [o.defaultUpperContainerStyle, g, d && { height: "auto" }] }, y), p ? a.createElement(n.Z, { style: [o.defaultLowerContainerStyle, m] }, p) : null);
                    return a.createElement(s.Z, { "aria-label": e, disabled: l, interactive: b, interactiveStyles: b ? v : void 0, link: u, onClick: h, style: [o.root, t] }, _);
                };
        },
        470014: (e, t, l) => {
            l.d(t, { Z: () => u });
            var a = l(202784),
                n = l(325686),
                i = l(530525),
                s = l(731708),
                r = l(439592),
                o = l(392237),
                c = l(165822);
            const d = o.default.create((e) => ({ root: { padding: e.spaces.space4 }, upper: { height: "auto" }, title: { paddingBottom: e.spaces.space4 }, description: { paddingBottom: e.spaces.space8 }, previousPrice: { textDecorationLine: "line-through", marginStart: e.spaces.space4 }, price: { paddingBottom: e.spaces.space8 }, imageColorOverlay: { position: "absolute", backgroundColor: e.colors.gray700, opacity: 0.05, width: "100%", height: "100%" }, imageOverlay: { position: "absolute", bottom: e.spaces.space12, start: e.spaces.space12, marginEnd: e.spaces.space12, paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8, backgroundColor: e.colors.white, borderRadius: e.borderRadii.xLarge } })),
                u = (e) => {
                    const { "aria-label": t, containerStyle: l, description: o, image: u, imageOverlayText: p, link: h, onClick: m, previousPrice: g, price: y, title: f } = e,
                        b = p ? a.createElement(s.ZP, { color: "alwaysBaseGray1100", size: "subtext3", style: d.imageOverlay, weight: "bold" }, p) : null,
                        v = a.createElement(a.Fragment, null, a.createElement(i.Z, { "aria-label": t, aspectMode: r.Z.SQUARE, image: u }), a.createElement(n.Z, { style: d.imageColorOverlay }), b),
                        _ = g ? a.createElement(s.ZP, { color: "gray700", numberOfLines: 1, style: d.previousPrice, weight: "normal" }, g) : null,
                        k = y ? a.createElement(s.ZP, { numberOfLines: 1, size: "subtext2", style: d.price }, y, _) : null,
                        S = a.createElement(a.Fragment, null, a.createElement(s.ZP, { numberOfLines: 1, style: d.title, weight: "bold" }, f), a.createElement(s.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2", style: d.description }, o), k);
                    return a.createElement(c.Z, { "aria-label": t, containerStyle: [d.root, l], link: h, lower: S, onClick: m, stackLayoutUpperStyle: d.upper, upper: v, withInteractiveStyling: !0 });
                };
        },
        874090: (e, t, l) => {
            l.d(t, { Z: () => n });
            var a = l(202784);
            const n = (0, l(523561).Z)({ loader: () => Promise.all([l.e("modules.audio-6107ac1a"), l.e("modules.audio-b953418a"), l.e("modules.audio-7c51e6a7"), l.e("modules.audio-04db59e9"), l.e("modules.audio-76583d6c"), l.e("modules.audio-b7a8a5fb"), l.e("modules.audio-51f6e793"), l.e("modules.audio-e019dbda"), l.e("modules.audio-262c94d4"), l.e("modules.audio-c6fe4ea4"), l.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"), l.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerPrerollUI~loaders.video.VideoPlayerEventsU"), l.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerEventsUI"), l.e("loaders.video.VideoPlayerEventsUI")]).then(l.bind(l, 374749)), renderPlaceholder: () => a.createElement("div", null) });
        },
        428259: (e, t, l) => {
            l.r(t), l.d(t, { default: () => o });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                s = l(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M6 13.5c-1.934 0-3.5 1.567-3.5 3.5s1.566 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.566-3.5-3.5-3.5zm0 5.25c-.962 0-1.75-.783-1.75-1.75s.788-1.75 1.75-1.75 1.75.783 1.75 1.75-.788 1.75-1.75 1.75zM22 8H12V6h10v2zM6 3.5C4.066 3.5 2.5 5.067 2.5 7s1.566 3.5 3.5 3.5S9.5 8.933 9.5 7 7.934 3.5 6 3.5zm0 5.25c-.962 0-1.75-.783-1.75-1.75S5.038 5.25 6 5.25 7.75 6.033 7.75 7 6.962 8.75 6 8.75zM22 18H12v-2h10v2z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const o = r;
        },
        883437: (e, t, l) => {
            l.r(t), l.d(t, { default: () => o });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                s = l(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M21.503 6.745c.475 1.032.748 2.176.748 3.385 0 2.955-1.608 5.68-4.196 7.11l-8.054 4.459v-3.452l2-2v2.06l5.086-2.816c1.952-1.079 3.164-3.133 3.164-5.36 0-.644-.101-1.264-.286-1.847l1.538-1.538zM3.71 21.71l-1.414-1.414 3.401-3.401C3.34 15.5 1.751 12.935 1.751 10c0-4.411 3.591-8 8.005-8h4.366c1.818 0 3.494.608 4.849 1.62l1.325-1.325 1.414 1.414-18 18.001zm3.462-6.29L17.545 5.047C16.567 4.386 15.389 4 14.123 4H9.757c-3.311 0-6.005 2.691-6.005 6 0 2.389 1.401 4.451 3.421 5.42z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const o = r;
        },
        258292: (e, t, l) => {
            l.r(t), l.d(t, { default: () => o });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                s = l(347101);
            const r = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: t });
            };
            r.metadata = { width: 24, height: 24 };
            const o = r;
        },
        411240: (e, t, l) => {
            l.d(t, { Z: () => a });
            const a = (e, t) => {
                if (0 === e.length) return;
                let l = e[0],
                    a = t(l);
                for (let n = 1; n < e.length; n++) {
                    const i = e[n],
                        s = t(i);
                    s < a && ((l = i), (a = s));
                }
                return l;
            };
        },
        730895: (e, t, l) => {
            var a = l(821176);
            e.exports = function () {
                var e = a(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
        900664: (e, t, l) => {
            l.d(t, { Z: () => n });
            var a = (e) => {
                "vibrate" in window.navigator && window.navigator.vibrate(e);
            };
            const n = {
                cancel() {
                    a(0);
                },
                vibrate(e) {
                    void 0 === e && (e = 400), a(e);
                },
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-6107ac1a.20c5053a.js.map

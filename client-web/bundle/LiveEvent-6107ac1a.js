"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-6107ac1a"],
    {
        782274: (e, t, a) => {
            a.d(t, { Z: () => p });
            var l,
                n,
                s,
                i,
                r,
                o,
                c,
                d,
                u = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "id" }]),
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
                                    (s = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
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
                                                            (i = { alias: null, args: null, kind: "ScalarField", name: "images", storageKey: null }),
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
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useNhlLiveEventDataQuery", selections: [{ alias: null, args: n, concreteType: "LiveEvent", kind: "LinkedField", name: "live_event_by_rest_id", plural: !1, selections: [s, { alias: null, args: null, concreteType: "NHLEventPage", kind: "LinkedField", name: "nhl_event_page", plural: !1, selections: [{ alias: null, args: null, concreteType: "NHLGame", kind: "LinkedField", name: "event_info", plural: !1, selections: [{ alias: null, args: null, concreteType: "SportsGameBasicData", kind: "LinkedField", name: "basic_data", plural: !1, selections: [i, r, { alias: null, args: null, concreteType: "SportsTeam", kind: "LinkedField", name: "teams", plural: !0, selections: [o, (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, c], storageKey: null }, d], storageKey: null }], storageKey: null }, d], storageKey: null }] },
                    params: { id: "1R0Ko9P9ykA88kBcrqjBoA", metadata: {}, name: "useNhlLiveEventDataQuery", operationKind: "query", text: null },
                };
            u.hash = "3eaf004e77a89c6ca832134fb2fd8d00";
            const p = u;
        },
        791181: (e, t, a) => {
            a.d(t, { Z: () => p });
            var l,
                n,
                s,
                i,
                r,
                o,
                c,
                d,
                u = {
                    fragment: {
                        argumentDefinitions: (l = [{ defaultValue: null, kind: "LocalArgument", name: "id" }]),
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
                                    (s = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }),
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
                                                            (i = { alias: null, args: null, kind: "ScalarField", name: "images", storageKey: null }),
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
                    operation: { argumentDefinitions: l, kind: "Operation", name: "useSoccerLiveEventDataQuery", selections: [{ alias: null, args: n, concreteType: "LiveEvent", kind: "LinkedField", name: "live_event_by_rest_id", plural: !1, selections: [s, { alias: null, args: null, concreteType: "SoccerEventPage", kind: "LinkedField", name: "soccer_event_page", plural: !1, selections: [{ alias: null, args: null, concreteType: "SoccerMatch", kind: "LinkedField", name: "event_info", plural: !1, selections: [{ alias: null, args: null, concreteType: "SportsGameBasicData", kind: "LinkedField", name: "basic_data", plural: !1, selections: [i, r, { alias: null, args: null, concreteType: "SportsTeam", kind: "LinkedField", name: "teams", plural: !0, selections: [o, (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, c], storageKey: null }, d], storageKey: null }], storageKey: null }, d], storageKey: null }] },
                    params: { id: "isTNFS4SKo99co-H0xTKyA", metadata: {}, name: "useSoccerLiveEventDataQuery", operationKind: "query", text: null },
                };
            u.hash = "2b67291281a91999442af9f50b54540d";
            const p = u;
        },
        978053: (e, t, a) => {
            a.d(t, { default: () => g });
            var l = a(332920),
                n = a.n(l);
            const s = n().e3098e07,
                i = n().fea16a51,
                r = n().a4f2d94d,
                o = n().hf9bc787,
                c = n().efcd5885,
                d = n().c37228b5,
                u = 2592e3,
                p = 604800,
                h = 86400,
                m = 3600,
                g = {
                    formatTimeSinceDate: (e, t) => {
                        const a = ((t || new Date()).getTime() - e.getTime()) / 1e3;
                        if (a >= 31104e3) {
                            const e = Math.max(1, Math.round(a / 31536e3));
                            return d({ years: e });
                        }
                        if (a >= u) {
                            const e = Math.max(1, Math.floor(a / u));
                            return c({ months: e });
                        }
                        if (a >= 561600) {
                            const e = Math.max(1, Math.round(a / p));
                            return o({ weeks: e });
                        }
                        if (a >= 84600) {
                            const e = Math.max(1, Math.round(a / h));
                            return r({ days: e });
                        }
                        if (a >= 3570) {
                            const e = Math.max(1, Math.round(a / m));
                            return i({ hours: e });
                        }
                        {
                            const e = Math.max(1, Math.round(a / 60));
                            return s({ minutes: e });
                        }
                    },
                    formatWeekRange: (e) => {
                        const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())),
                            a = t.getUTCDay(),
                            l = new Date(t);
                        l.setUTCDate(l.getUTCDate() - a);
                        const n = new Date(l);
                        n.setUTCDate(n.getUTCDate() + 6);
                        const s = new Date(Date.UTC(l.getUTCFullYear(), 0, 4)),
                            i = Math.floor((l.getTime() - s.getTime()) / 6048e5 + 1),
                            r = new Date(),
                            o = n > r ? r : n,
                            c = `${l.toLocaleString("en-US", { month: "short", day: "numeric" })} - ${o.toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
                        return [l.getUTCFullYear(), i, c];
                    },
                };
        },
        392027: (e, t, a) => {
            a.d(t, { Z: () => o });
            var l = a(202784),
                n = a(154003),
                s = a(392237);
            class i extends l.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: a, disabled: s, href: i, icon: o, label: c, onPress: d, renderMenu: u, style: p, testID: h } = this.props,
                        m = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, a);
                    return l.createElement(n.ZP, { "aria-label": e, backgroundColor: t, color: m, disabled: s, icon: o, link: i, onPress: d, renderMenu: u, size: "xLarge", style: [r.root, !c && r.iconOnly, p], testID: h }, c);
                }
            }
            i.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const r = s.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                o = i;
        },
        420412: (e, t, a) => {
            a.d(t, { Z: () => o });
            var l = a(202784),
                n = a(325686),
                s = a(235902),
                i = a(885015),
                r = a(392237);
            function o({ borderColor: e = "borderColor", isSlim: t = !1, label: a }) {
                const { isWebRedesign: o } = s.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: r.default.theme.colors[e] ?? r.default.theme.colors.borderColor };
                return a ? l.createElement(i.Z, { style: !t && c.root, withGutter: !0 }, l.createElement(n.Z, { style: c.gapColumn }, l.createElement(n.Z, { style: [c.gap, d] })), l.createElement(n.Z, { style: c.gapText }, a), l.createElement(n.Z, { style: c.gapColumn }, l.createElement(n.Z, { style: [c.gap, d] }))) : l.createElement(n.Z, { style: [!t && c.root, o() && c.rootRedesign, c.gap, d] });
            }
            const c = r.default.create((e) => ({ borderColor: { backgroundColor: r.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: r.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, a) => {
            a.d(t, { Z: () => c });
            var l = a(807896),
                n = a(202784),
                s = a(325686),
                i = a(392237);
            class r extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: a, ...i } = this.props,
                        r = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, o.column, a && o.withGutterColumn] }));
                    return n.createElement(s.Z, (0, l.Z)({ style: [t, o.root, a && o.withGutter] }, i), r);
                }
            }
            r.defaultProps = { withGutter: !1 };
            const o = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = r;
        },
        149202: (e, t, a) => {
            a.d(t, { Z: () => _ });
            var l = a(202784),
                n = a(928316),
                s = a(196001),
                i = a(900664),
                r = a(325686),
                o = a(332920),
                c = a.n(o),
                d = a(668430),
                u = a(323265),
                p = a(908579),
                h = a(167630),
                m = a(392237),
                g = a(393058);
            const y = c().gdd51574;
            class f extends l.Component {
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
                                a = Math.round(0.4 * (t - this._pullInfo.startY));
                            (a <= 0 && 0 === this.state.pullDistance) || (a > 0 && e.cancelable && e.preventDefault(), this._updatePullPosition(a), this._updatePullState(this.state.pullDistance, a), this.setState({ pullDistance: a }));
                        }),
                        (this._handleTouchEnd = (e) => {
                            const { moved: t } = this._pullInfo;
                            t && this.state.pullDistance > this._pullHeight ? (e.cancelable && e.preventDefault(), this._release()) : this._resetPullInfo();
                        });
                }
                render() {
                    const { children: e, isRefreshing: t } = this.props,
                        { pullDistance: a } = this.state,
                        n = t && a ? l.createElement(h.Z, null) : l.createElement(d.default, { "aria-label": y, style: [b.refreshArrow, 1 === this.state.pull ? b.refreshArrowReady : null] }),
                        i = { pullDistance: (0, s.ST)(a, s.um.stiff) };
                    return l.createElement(
                        r.Z,
                        { style: b.root },
                        l.createElement(s.y_, { style: i }, ({ pullDistance: t }) => l.createElement(r.Z, { ref: this._getListViewRef, style: !!t && { transform: [{ translate3d: `0,${t}px,0` }] } }, l.createElement(r.Z, { ref: this._getPullViewRef, style: b.ptrCell }, n), l.createElement(r.Z, { style: t ? b.children : void 0 }, e))),
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
                    const { lastPull: a } = this._pullInfo;
                    if (t > this._pullHeight) return 0 === this.state.pull && (u.ZP.isFirefox() || i.Z.vibrate(5), this.setState({ pull: 1 })), void (this._pullInfo.lastPull = t);
                    e > 0 && e < a && 1 === this.state.pull && this.setState({ pull: 0 });
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
                _ = function ({ canRefresh: e = !0, children: t, isRefreshing: a = !1, onRefresh: n }) {
                    return g.Z.isTouchSupported() && e
                        ? l.createElement(f, {
                              canRefresh: e,
                              children: t,
                              isRefreshing: a,
                              onRefresh: () => {
                                  n();
                              },
                          })
                        : Array.isArray(t)
                          ? l.createElement(l.Fragment, null, t)
                          : t;
                };
        },
        403556: (e, t, a) => {
            a.d(t, { Z: () => T });
            var l = a(807896),
                n = a(202784),
                s = a(194504),
                i = a(235902),
                r = a(392237),
                o = a(325686),
                c = a(332920),
                d = a.n(c),
                u = a(912021),
                p = a(516951),
                h = a(731708),
                m = a(310088),
                g = a(175993),
                y = a(58881),
                f = a(530732);
            const b = d().d2414d31,
                _ = () => d().ce4e85ae,
                v = d().fb9f6f39;
            class k extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: a, query: l, state: n } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: a, query: l, method: "push", state: { ...n, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, a, l) => {
                            const n = r.default.theme.colors.text,
                                s = r.default.theme.colors.gray700;
                            return a || l ? (e || t ? n : s) : e ? n : s;
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
                    const { Icon: e, "aria-label": t, badgeCount: a, badgePip: l, children: s, color: i, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: k, style: P, to: C } = this.props,
                        { location: T } = this.state,
                        w = C ? this._getMemoizedLink(C, k) : void 0,
                        L = c ? c(C) : T?.pathname === w?.pathname,
                        E = y.Z.generate({ backgroundColor: "transparent", color: r.default.theme.colors.text, insetFocusRing: !0 }),
                        R = g ? "medium" : L ? "bold" : "medium";
                    return n.createElement(f.Z, { "aria-label": t, "aria-selected": L, focusable: !!L, interactiveStyles: E, link: w, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? S.pill : S.link, u && L ? S.active : null, d ? (u ? S.compactPill : S.compactLink) : null, p ? S.roundedRect : null, P], withoutInteractiveStyles: g || u }, ({ isFocused: t, isHovered: c }) => n.createElement(o.Z, { style: u && S.flexGrow }, n.createElement(h.ZP, { size: g ? "headline2" : void 0, style: [S.text, { color: this._getTextColor(L, c, g, u) }, d && S.compactText, g && t && S.focusedText], weight: R }, e && n.createElement(e, { style: S.icon }), s, g || u ? null : n.createElement(o.Z, { style: L && [S.border, { backgroundColor: r.default.theme.colors[i] }] })), a ? n.createElement(m.Z, { count: a, standalone: !0, style: [S.badge, a >= 10 && S.multiDigitBadge, a >= 20 && S.truncatedCountBadge], truncatedCountFormatter: v, unreadCountLabel: b, withBorder: !1 }) : l ? n.createElement(m.Z, { pip: !0, standalone: !0, style: S.badgePip, textColor: "red500", unreadCountLabel: _, withBorder: !1 }) : null));
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
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                P = k,
                C = r.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                T = ({ alignFirstItem: e, "aria-label": t, isCompact: a, isPillLink: r, isRoundedRect: o, links: c, style: d, visibleItemIndex: u }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = i.ZP.useProps(),
                        m = h() && !r,
                        g = n.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: s, ...i }, c) => {
                                    const d = m ? [C.linkRedesign, 0 === c && C.firstLinkRedesign, e && 0 === c && C.withNoPaddingStart] : void 0;
                                    return n.createElement(P, (0, l.Z)({ viewType: s }, i, { isCompact: a, isPillLink: r, isRoundedRect: o, isWebRedesign: m, style: d }), t);
                                }),
                            [e, a, r, o, m, c],
                        );
                    return n.createElement(s.Z, { "aria-label": t, buttonsContainerStyle: r && C.gap, childrenStyle: !m && C.flexGrow, key: p, style: [r ? null : C.segmentedControl, m && C.leftAligned, d], visibleItemIndex: u }, g);
                };
        },
        165822: (e, t, a) => {
            a.d(t, { Z: () => c });
            var l = a(202784),
                n = a(325686),
                s = a(58881),
                i = a(530732),
                r = a(392237);
            const o = r.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                c = ({ "aria-label": e, containerStyle: t, disabled: a, isCompact: c, link: d, lower: u, onClick: p, stackLayoutLowerStyle: h, stackLayoutUpperStyle: m, upper: g, withInsetFocusRing: y = !0, withInteractiveStyling: f = !1 }) => {
                    const b = s.Z.generate({ backgroundColor: r.default.theme.colors.transparent, color: r.default.theme.colors.primary, insetFocusRing: y }),
                        _ = l.createElement(l.Fragment, null, l.createElement(n.Z, { style: [o.defaultUpperContainerStyle, m, c && { height: "auto" }] }, g), u ? l.createElement(n.Z, { style: [o.defaultLowerContainerStyle, h] }, u) : null);
                    return l.createElement(i.Z, { "aria-label": e, disabled: a, interactive: f, interactiveStyles: f ? b : void 0, link: d, onClick: p, style: [o.root, t] }, _);
                };
        },
        470014: (e, t, a) => {
            a.d(t, { Z: () => u });
            var l = a(202784),
                n = a(325686),
                s = a(530525),
                i = a(731708),
                r = a(439592),
                o = a(392237),
                c = a(165822);
            const d = o.default.create((e) => ({ root: { padding: e.spaces.space4 }, upper: { height: "auto" }, title: { paddingBottom: e.spaces.space4 }, description: { paddingBottom: e.spaces.space8 }, previousPrice: { textDecorationLine: "line-through", marginStart: e.spaces.space4 }, price: { paddingBottom: e.spaces.space8 }, imageColorOverlay: { position: "absolute", backgroundColor: e.colors.gray700, opacity: 0.05, width: "100%", height: "100%" }, imageOverlay: { position: "absolute", bottom: e.spaces.space12, start: e.spaces.space12, marginEnd: e.spaces.space12, paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8, backgroundColor: e.colors.white, borderRadius: e.borderRadii.xLarge } })),
                u = (e) => {
                    const { "aria-label": t, containerStyle: a, description: o, image: u, imageOverlayText: p, link: h, onClick: m, previousPrice: g, price: y, title: f } = e,
                        b = p ? l.createElement(i.ZP, { color: "alwaysBaseGray1100", size: "subtext3", style: d.imageOverlay, weight: "bold" }, p) : null,
                        _ = l.createElement(l.Fragment, null, l.createElement(s.Z, { "aria-label": t, aspectMode: r.Z.SQUARE, image: u }), l.createElement(n.Z, { style: d.imageColorOverlay }), b),
                        v = g ? l.createElement(i.ZP, { color: "gray700", numberOfLines: 1, style: d.previousPrice, weight: "normal" }, g) : null,
                        k = y ? l.createElement(i.ZP, { numberOfLines: 1, size: "subtext2", style: d.price }, y, v) : null,
                        S = l.createElement(l.Fragment, null, l.createElement(i.ZP, { numberOfLines: 1, style: d.title, weight: "bold" }, f), l.createElement(i.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2", style: d.description }, o), k);
                    return l.createElement(c.Z, { "aria-label": t, containerStyle: [d.root, a], link: h, lower: S, onClick: m, stackLayoutUpperStyle: d.upper, upper: _, withInteractiveStyling: !0 });
                };
        },
        874090: (e, t, a) => {
            a.d(t, { Z: () => n });
            var l = a(202784);
            const n = (0, a(523561).Z)({ loader: () => Promise.all([a.e("modules.audio-6107ac1a"), a.e("modules.audio-b953418a"), a.e("modules.audio-7c51e6a7"), a.e("modules.audio-04db59e9"), a.e("modules.audio-76583d6c"), a.e("modules.audio-b7a8a5fb"), a.e("modules.audio-51f6e793"), a.e("modules.audio-e019dbda"), a.e("modules.audio-262c94d4"), a.e("modules.audio-c6fe4ea4"), a.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"), a.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerPrerollUI~loaders.video.VideoPlayerEventsU"), a.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerEventsUI"), a.e("loaders.video.VideoPlayerEventsUI")]).then(a.bind(a, 374749)), renderPlaceholder: () => l.createElement("div", null) });
        },
        411240: (e, t, a) => {
            a.d(t, { Z: () => l });
            const l = (e, t) => {
                if (0 === e.length) return;
                let a = e[0],
                    l = t(a);
                for (let n = 1; n < e.length; n++) {
                    const s = e[n],
                        i = t(s);
                    i < l && ((a = s), (l = i));
                }
                return a;
            };
        },
        900664: (e, t, a) => {
            a.d(t, { Z: () => n });
            var l = (e) => {
                "vibrate" in window.navigator && window.navigator.vibrate(e);
            };
            const n = {
                cancel() {
                    l(0);
                },
                vibrate(e) {
                    void 0 === e && (e = 400), l(e);
                },
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-6107ac1a.ca516f4a.js.map

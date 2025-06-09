"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-6107ac1a", "icons/IconBookmarkPlusStroke-js", "icons/IconChevronRight-js", "icons/IconHeartStroke-js", "icons/IconStar-js"],
    {
        782274: (e, t, l) => {
            l.d(t, { Z: () => p });
            var a,
                n,
                i,
                r,
                o,
                s,
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
                                                            (r = { alias: null, args: null, kind: "ScalarField", name: "images", storageKey: null }),
                                                            (o = { alias: null, args: null, kind: "ScalarField", name: "hashtag", storageKey: null }),
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "SportsTeam",
                                                                kind: "LinkedField",
                                                                name: "teams",
                                                                plural: !0,
                                                                selections: [
                                                                    (s = {
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useNhlLiveEventDataQuery", selections: [{ alias: null, args: n, concreteType: "LiveEvent", kind: "LinkedField", name: "live_event_by_rest_id", plural: !1, selections: [i, { alias: null, args: null, concreteType: "NHLEventPage", kind: "LinkedField", name: "nhl_event_page", plural: !1, selections: [{ alias: null, args: null, concreteType: "NHLGame", kind: "LinkedField", name: "event_info", plural: !1, selections: [{ alias: null, args: null, concreteType: "SportsGameBasicData", kind: "LinkedField", name: "basic_data", plural: !1, selections: [r, o, { alias: null, args: null, concreteType: "SportsTeam", kind: "LinkedField", name: "teams", plural: !0, selections: [s, (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, c], storageKey: null }, d], storageKey: null }], storageKey: null }, d], storageKey: null }] },
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
                r,
                o,
                s,
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
                                                            (r = { alias: null, args: null, kind: "ScalarField", name: "images", storageKey: null }),
                                                            (o = { alias: null, args: null, kind: "ScalarField", name: "hashtag", storageKey: null }),
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "SportsTeam",
                                                                kind: "LinkedField",
                                                                name: "teams",
                                                                plural: !0,
                                                                selections: [
                                                                    (s = {
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
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useSoccerLiveEventDataQuery", selections: [{ alias: null, args: n, concreteType: "LiveEvent", kind: "LinkedField", name: "live_event_by_rest_id", plural: !1, selections: [i, { alias: null, args: null, concreteType: "SoccerEventPage", kind: "LinkedField", name: "soccer_event_page", plural: !1, selections: [{ alias: null, args: null, concreteType: "SoccerMatch", kind: "LinkedField", name: "event_info", plural: !1, selections: [{ alias: null, args: null, concreteType: "SportsGameBasicData", kind: "LinkedField", name: "basic_data", plural: !1, selections: [r, o, { alias: null, args: null, concreteType: "SportsTeam", kind: "LinkedField", name: "teams", plural: !0, selections: [s, (d = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, c], storageKey: null }, d], storageKey: null }], storageKey: null }, d], storageKey: null }] },
                    params: { id: "isTNFS4SKo99co-H0xTKyA", metadata: {}, name: "useSoccerLiveEventDataQuery", operationKind: "query", text: null },
                };
            u.hash = "2b67291281a91999442af9f50b54540d";
            const p = u;
        },
        978053: (e, t, l) => {
            l.d(t, { default: () => g });
            var a = l(111677),
                n = l.n(a);
            const i = n().e3098e07,
                r = n().fea16a51,
                o = n().a4f2d94d,
                s = n().hf9bc787,
                c = n().efcd5885,
                d = n().c37228b5,
                u = 2592e3,
                p = 604800,
                h = 86400,
                m = 3600,
                g = {
                    formatTimeSinceDate: (e, t) => {
                        const l = ((t || new Date()).getTime() - e.getTime()) / 1e3;
                        if (l >= 31104e3) {
                            const e = Math.max(1, Math.round(l / 31536e3));
                            return d({ years: e });
                        }
                        if (l >= u) {
                            const e = Math.max(1, Math.floor(l / u));
                            return c({ months: e });
                        }
                        if (l >= 561600) {
                            const e = Math.max(1, Math.round(l / p));
                            return s({ weeks: e });
                        }
                        if (l >= 84600) {
                            const e = Math.max(1, Math.round(l / h));
                            return o({ days: e });
                        }
                        if (l >= 3570) {
                            const e = Math.max(1, Math.round(l / m));
                            return r({ hours: e });
                        }
                        {
                            const e = Math.max(1, Math.round(l / 60));
                            return i({ minutes: e });
                        }
                    },
                    formatWeekRange: (e) => {
                        const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())),
                            l = t.getUTCDay(),
                            a = new Date(t);
                        a.setUTCDate(a.getUTCDate() - l);
                        const n = new Date(a);
                        n.setUTCDate(n.getUTCDate() + 6);
                        const i = new Date(Date.UTC(a.getUTCFullYear(), 0, 4)),
                            r = Math.floor((a.getTime() - i.getTime()) / 6048e5 + 1),
                            o = new Date(),
                            s = n > o ? o : n,
                            c = `${a.toLocaleString("en-US", { month: "short", day: "numeric" })} - ${s.toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
                        return [a.getUTCFullYear(), r, c];
                    },
                };
        },
        661810: (e, t, l) => {
            l.d(t, { Z: () => r });
            var a = l(202784),
                n = l(325686),
                i = l(392237);
            function r({ spacing: e, style: t }) {
                return a.createElement(n.Z, { role: "separator", style: [o.divider, { marginVertical: null != e ? i.default.theme.spaces[e] : void 0 }, t] });
            }
            const o = i.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        392027: (e, t, l) => {
            l.d(t, { Z: () => s });
            var a = l(202784),
                n = l(154003),
                i = l(392237);
            class r extends a.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: l, disabled: i, href: r, icon: s, label: c, onPress: d, renderMenu: u, style: p, testID: h } = this.props,
                        m = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, l);
                    return a.createElement(n.ZP, { "aria-label": e, backgroundColor: t, color: m, disabled: i, icon: s, link: r, onPress: d, renderMenu: u, size: "xLarge", style: [o.root, !c && o.iconOnly, p], testID: h }, c);
                }
            }
            r.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const o = i.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                s = r;
        },
        420412: (e, t, l) => {
            l.d(t, { Z: () => s });
            var a = l(202784),
                n = l(325686),
                i = l(235902),
                r = l(885015),
                o = l(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: l }) {
                const { isWebRedesign: s } = i.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: o.default.theme.colors[e] ?? o.default.theme.colors.borderColor };
                return l ? a.createElement(r.Z, { style: !t && c.root, withGutter: !0 }, a.createElement(n.Z, { style: c.gapColumn }, a.createElement(n.Z, { style: [c.gap, d] })), a.createElement(n.Z, { style: c.gapText }, l), a.createElement(n.Z, { style: c.gapColumn }, a.createElement(n.Z, { style: [c.gap, d] }))) : a.createElement(n.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = o.default.create((e) => ({ borderColor: { backgroundColor: o.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: o.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, l) => {
            l.d(t, { Z: () => c });
            var a = l(807896),
                n = l(202784),
                i = l(325686),
                r = l(392237);
            class o extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: l, ...r } = this.props,
                        o = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, s.column, l && s.withGutterColumn] }));
                    return n.createElement(i.Z, (0, a.Z)({ style: [t, s.root, l && s.withGutter] }, r), o);
                }
            }
            o.defaultProps = { withGutter: !1 };
            const s = r.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = o;
        },
        149202: (e, t, l) => {
            l.d(t, { Z: () => b });
            var a = l(202784),
                n = l(928316),
                i = l(196001),
                r = l(900664),
                o = l(325686),
                s = l(111677),
                c = l.n(s),
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
                        n = t && l ? a.createElement(h.Z, null) : a.createElement(d.default, { "aria-label": y, style: [v.refreshArrow, 1 === this.state.pull ? v.refreshArrowReady : null] }),
                        r = { pullDistance: (0, i.ST)(l, i.um.stiff) };
                    return a.createElement(
                        o.Z,
                        { style: v.root },
                        a.createElement(i.y_, { style: r }, ({ pullDistance: t }) => a.createElement(o.Z, { ref: this._getListViewRef, style: !!t && { transform: [{ translate3d: `0,${t}px,0` }] } }, a.createElement(o.Z, { ref: this._getPullViewRef, style: v.ptrCell }, n), a.createElement(o.Z, { style: t ? v.children : void 0 }, e))),
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
                    if (t > this._pullHeight) return 0 === this.state.pull && (u.ZP.isFirefox() || r.Z.vibrate(5), this.setState({ pull: 1 })), void (this._pullInfo.lastPull = t);
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
            const v = m.default.create((e) => ({ root: { display: "block", position: "relative" }, ptrCell: { alignItems: "center", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, height: "4rem", justifyContent: "center", start: "0", position: "absolute", end: "0", top: "-4rem" }, children: { transform: [{ translate3d: "0, 0, 0" }] }, refreshArrow: { height: "2rem", color: e.colors.gray300, transitionProperty: "transform", transitionDuration: "250ms" }, refreshArrowReady: { transform: [{ rotate: "180deg" }] } })),
                b = function ({ canRefresh: e = !0, children: t, isRefreshing: l = !1, onRefresh: n }) {
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
            l.d(t, { Z: () => P });
            var a = l(807896),
                n = l(202784),
                i = l(194504),
                r = l(235902),
                o = l(392237),
                s = l(325686),
                c = l(111677),
                d = l.n(c),
                u = l(912021),
                p = l(516951),
                h = l(731708),
                m = l(310088),
                g = l(175993),
                y = l(58881),
                f = l(530732);
            const v = d().d2414d31,
                b = () => d().ce4e85ae,
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
                            const n = o.default.theme.colors.text,
                                i = o.default.theme.colors.gray700;
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
                    const { Icon: e, "aria-label": t, badgeCount: l, badgePip: a, children: i, color: r, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: k, style: w, to: C } = this.props,
                        { location: P } = this.state,
                        T = C ? this._getMemoizedLink(C, k) : void 0,
                        x = c ? c(C) : P?.pathname === T?.pathname,
                        E = y.Z.generate({ backgroundColor: "transparent", color: o.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? S.pillHoverStyle.backgroundColor : void 0 }),
                        L = g ? "medium" : x ? "bold" : "medium";
                    return n.createElement(f.Z, { "aria-label": t, "aria-selected": x, focusable: !!x, interactiveStyles: E, link: T, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [S.pillStyle] : [S.link]), ...(u && x ? [S.pillActiveStyle] : []), d ? (u ? S.compactPill : S.compactLink) : null, p ? S.roundedRect : null, w], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => n.createElement(s.Z, { style: u && S.flexGrow }, n.createElement(h.ZP, { size: g ? "headline2" : void 0, style: [S.text, { color: this._getTextColor(x, c, g, u) }, d && S.compactText, g && t && S.focusedText, u && S.pillTextStyle, u && x && S.pillActiveTextStyle, u && c && S.pillHoverTextStyle], weight: L }, e && n.createElement(e, { style: S.icon }), i, g || u ? null : n.createElement(s.Z, { style: x && [S.border, { backgroundColor: o.default.theme.colors[r] }] })), l ? n.createElement(m.Z, { count: l, standalone: !0, style: [S.badge, l >= 10 && S.multiDigitBadge, l >= 20 && S.truncatedCountBadge], truncatedCountFormatter: _, unreadCountLabel: v, withBorder: !1 }) : a ? n.createElement(m.Z, { pip: !0, standalone: !0, style: S.badgePip, textColor: "red500", unreadCountLabel: b, withBorder: !1 }) : null));
                }
            }
            (k.contextType = g.Z), (k.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const S = o.default.create((e) => ({
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
                w = k,
                C = o.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                P = ({ alignFirstItem: e, "aria-label": t, isCompact: l, isPillLink: o, isRoundedRect: s, links: c, style: d, visibleItemIndex: u }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = r.ZP.useProps(),
                        m = h() && !o,
                        g = n.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: i, ...r }, c) => {
                                    const d = m ? [C.linkRedesign, 0 === c && C.firstLinkRedesign, e && 0 === c && C.withNoPaddingStart] : void 0;
                                    return n.createElement(w, (0, a.Z)({ viewType: i }, r, { isCompact: l, isPillLink: o, isRoundedRect: s, isWebRedesign: m, style: d }), t);
                                }),
                            [e, l, o, s, m, c],
                        );
                    return n.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: o && C.gap, childrenStyle: !m && C.flexGrow, key: p, style: [o ? null : C.segmentedControl, m && C.leftAligned, d], visibleItemIndex: u }, g);
                };
        },
        165822: (e, t, l) => {
            l.d(t, { Z: () => c });
            var a = l(202784),
                n = l(325686),
                i = l(58881),
                r = l(530732),
                o = l(392237);
            const s = o.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                c = ({ "aria-label": e, containerStyle: t, disabled: l, interactiveStyles: c, isCompact: d, link: u, lower: p, onClick: h, stackLayoutLowerStyle: m, stackLayoutUpperStyle: g, upper: y, withInsetFocusRing: f = !0, withInteractiveStyling: v = !1 }) => {
                    const b = c ?? i.Z.generate({ backgroundColor: o.default.theme.colors.transparent, color: o.default.theme.colors.primary, insetFocusRing: f }),
                        _ = a.createElement(a.Fragment, null, a.createElement(n.Z, { style: [s.defaultUpperContainerStyle, g, d && { height: "auto" }] }, y), p ? a.createElement(n.Z, { style: [s.defaultLowerContainerStyle, m] }, p) : null);
                    return a.createElement(r.Z, { "aria-label": e, disabled: l, interactive: v, interactiveStyles: v ? b : void 0, link: u, onClick: h, style: [s.root, t] }, _);
                };
        },
        470014: (e, t, l) => {
            l.d(t, { Z: () => u });
            var a = l(202784),
                n = l(325686),
                i = l(530525),
                r = l(731708),
                o = l(439592),
                s = l(392237),
                c = l(165822);
            const d = s.default.create((e) => ({ root: { padding: e.spaces.space4 }, upper: { height: "auto" }, title: { paddingBottom: e.spaces.space4 }, description: { paddingBottom: e.spaces.space8 }, previousPrice: { textDecorationLine: "line-through", marginStart: e.spaces.space4 }, price: { paddingBottom: e.spaces.space8 }, imageColorOverlay: { position: "absolute", backgroundColor: e.colors.gray700, opacity: 0.05, width: "100%", height: "100%" }, imageOverlay: { position: "absolute", bottom: e.spaces.space12, start: e.spaces.space12, marginEnd: e.spaces.space12, paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space8, backgroundColor: e.colors.white, borderRadius: e.borderRadii.xLarge } })),
                u = (e) => {
                    const { "aria-label": t, containerStyle: l, description: s, image: u, imageOverlayText: p, link: h, onClick: m, previousPrice: g, price: y, title: f } = e,
                        v = p ? a.createElement(r.ZP, { color: "alwaysBaseGray1100", size: "subtext3", style: d.imageOverlay, weight: "bold" }, p) : null,
                        b = a.createElement(a.Fragment, null, a.createElement(i.Z, { "aria-label": t, aspectMode: o.Z.SQUARE, image: u }), a.createElement(n.Z, { style: d.imageColorOverlay }), v),
                        _ = g ? a.createElement(r.ZP, { color: "gray700", numberOfLines: 1, style: d.previousPrice, weight: "normal" }, g) : null,
                        k = y ? a.createElement(r.ZP, { numberOfLines: 1, size: "subtext2", style: d.price }, y, _) : null,
                        S = a.createElement(a.Fragment, null, a.createElement(r.ZP, { numberOfLines: 1, style: d.title, weight: "bold" }, f), a.createElement(r.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2", style: d.description }, s), k);
                    return a.createElement(c.Z, { "aria-label": t, containerStyle: [d.root, l], link: h, lower: S, onClick: m, stackLayoutUpperStyle: d.upper, upper: b, withInteractiveStyling: !0 });
                };
        },
        874090: (e, t, l) => {
            l.d(t, { Z: () => n });
            var a = l(202784);
            const n = (0, l(523561).Z)({ loader: () => Promise.all([l.e("modules.audio-6107ac1a"), l.e("modules.audio-b953418a"), l.e("modules.audio-7c51e6a7"), l.e("modules.audio-04db59e9"), l.e("modules.audio-76583d6c"), l.e("modules.audio-b7a8a5fb"), l.e("modules.audio-51f6e793"), l.e("modules.audio-e019dbda"), l.e("modules.audio-262c94d4"), l.e("modules.audio-c6fe4ea4"), l.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"), l.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerPrerollUI~loaders.video.VideoPlayerEventsU"), l.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerEventsUI"), l.e("loaders.video.VideoPlayerEventsUI")]).then(l.bind(l, 374749)), renderPlaceholder: () => a.createElement("div", null) });
        },
        818088: (e, t, l) => {
            l.r(t), l.d(t, { default: () => s });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                r = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        58399: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                r = l(717683),
                o = l(347101);
            const s = (e = {}) => {
                const t = a.useContext(r.Z),
                    { direction: l } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style, t && o.Z.iconRTL], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
        432181: (e, t, l) => {
            l.r(t), l.d(t, { default: () => s });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                r = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        748138: (e, t, l) => {
            l.r(t), l.d(t, { default: () => s });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                r = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        98440: (e, t, l) => {
            l.r(t), l.d(t, { default: () => s });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                r = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        258292: (e, t, l) => {
            l.r(t), l.d(t, { default: () => s });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                r = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        411240: (e, t, l) => {
            l.d(t, { Z: () => a });
            const a = (e, t) => {
                if (0 === e.length) return;
                let l = e[0],
                    a = t(l);
                for (let n = 1; n < e.length; n++) {
                    const i = e[n],
                        r = t(i);
                    r < a && ((l = i), (a = r));
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-6107ac1a.ec9d241a.js.map

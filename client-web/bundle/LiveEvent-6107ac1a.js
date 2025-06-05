"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-6107ac1a", "icons/IconAtBold-js", "icons/IconBookStrokeOff-js", "icons/IconBookmarkCloseStroke-js", "icons/IconFilterFill-js", "icons/IconItalic-js", "icons/IconNumberedList-js", "icons/IconThumbsUp-js"],
    {
        782274: (e, t, l) => {
            l.d(t, { Z: () => h });
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
            const h = u;
        },
        791181: (e, t, l) => {
            l.d(t, { Z: () => h });
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
            const h = u;
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
                h = 604800,
                p = 86400,
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
                            const e = Math.max(1, Math.round(l / h));
                            return s({ weeks: e });
                        }
                        if (l >= 84600) {
                            const e = Math.max(1, Math.round(l / p));
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
                    const { "aria-label": e, backgroundColor: t, color: l, disabled: i, href: r, icon: s, label: c, onPress: d, renderMenu: u, style: h, testID: p } = this.props,
                        m = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, l);
                    return a.createElement(n.ZP, { "aria-label": e, backgroundColor: t, color: m, disabled: i, icon: s, link: r, onPress: d, renderMenu: u, size: "xLarge", style: [o.root, !c && o.iconOnly, h], testID: p }, c);
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
                h = l(908579),
                p = l(167630),
                m = l(392237),
                g = l(393058);
            const y = c().gdd51574;
            class v extends a.Component {
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
                        n = t && l ? a.createElement(p.Z, null) : a.createElement(d.default, { "aria-label": y, style: [f.refreshArrow, 1 === this.state.pull ? f.refreshArrowReady : null] }),
                        r = { pullDistance: (0, i.ST)(l, i.um.stiff) };
                    return a.createElement(
                        o.Z,
                        { style: f.root },
                        a.createElement(i.y_, { style: r }, ({ pullDistance: t }) => a.createElement(o.Z, { ref: this._getListViewRef, style: !!t && { transform: [{ translate3d: `0,${t}px,0` }] } }, a.createElement(o.Z, { ref: this._getPullViewRef, style: f.ptrCell }, n), a.createElement(o.Z, { style: t ? f.children : void 0 }, e))),
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
                    return (this._scrollParent = this._scrollParent || (0, h.r)(n.findDOMNode(this))), this._scrollParent;
                }
                _getScrollTop() {
                    const e = this._getScrollParent();
                    return e ? (0, h.c)(e) : 0;
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
            const f = m.default.create((e) => ({ root: { display: "block", position: "relative" }, ptrCell: { alignItems: "center", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, height: "4rem", justifyContent: "center", start: "0", position: "absolute", end: "0", top: "-4rem" }, children: { transform: [{ translate3d: "0, 0, 0" }] }, refreshArrow: { height: "2rem", color: e.colors.gray300, transitionProperty: "transform", transitionDuration: "250ms" }, refreshArrowReady: { transform: [{ rotate: "180deg" }] } })),
                b = function ({ canRefresh: e = !0, children: t, isRefreshing: l = !1, onRefresh: n }) {
                    return g.Z.isTouchSupported() && e
                        ? a.createElement(v, {
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
            l.d(t, { Z: () => E });
            var a = l(807896),
                n = l(202784),
                i = l(194504),
                r = l(235902),
                o = l(392237),
                s = l(325686),
                c = l(111677),
                d = l.n(c),
                u = l(912021),
                h = l(516951),
                p = l(731708),
                m = l(310088),
                g = l(175993),
                y = l(58881),
                v = l(530732);
            const f = d().d2414d31,
                b = () => d().ce4e85ae,
                _ = d().fb9f6f39;
            class k extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: l, query: a, state: n } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: l, query: a, method: "push", state: { ...n, lockScroll: t } };
                        })),
                        (this._unlisten = h.Z),
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
                    const { Icon: e, "aria-label": t, badgeCount: l, badgePip: a, children: i, color: r, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: h, isWebRedesign: g, retainScrollPosition: k, style: w, to: C } = this.props,
                        { location: E } = this.state,
                        T = C ? this._getMemoizedLink(C, k) : void 0,
                        P = c ? c(C) : E?.pathname === T?.pathname,
                        x = y.Z.generate({ backgroundColor: "transparent", color: o.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? S.pillHoverStyle.backgroundColor : void 0 }),
                        Z = g ? "medium" : P ? "bold" : "medium";
                    return n.createElement(v.Z, { "aria-label": t, "aria-selected": P, focusable: !!P, interactiveStyles: x, link: T, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [S.pillStyle] : [S.link]), ...(u && P ? [S.pillActiveStyle] : []), d ? (u ? S.compactPill : S.compactLink) : null, h ? S.roundedRect : null, w], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => n.createElement(s.Z, { style: u && S.flexGrow }, n.createElement(p.ZP, { size: g ? "headline2" : void 0, style: [S.text, { color: this._getTextColor(P, c, g, u) }, d && S.compactText, g && t && S.focusedText, u && S.pillTextStyle, u && P && S.pillActiveTextStyle, u && c && S.pillHoverTextStyle], weight: Z }, e && n.createElement(e, { style: S.icon }), i, g || u ? null : n.createElement(s.Z, { style: P && [S.border, { backgroundColor: o.default.theme.colors[r] }] })), l ? n.createElement(m.Z, { count: l, standalone: !0, style: [S.badge, l >= 10 && S.multiDigitBadge, l >= 20 && S.truncatedCountBadge], truncatedCountFormatter: _, unreadCountLabel: f, withBorder: !1 }) : a ? n.createElement(m.Z, { pip: !0, standalone: !0, style: S.badgePip, textColor: "red500", unreadCountLabel: b, withBorder: !1 }) : null));
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
                E = ({ alignFirstItem: e, "aria-label": t, isCompact: l, isPillLink: o, isRoundedRect: s, links: c, style: d, visibleItemIndex: u }) => {
                    const h = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: p } = r.ZP.useProps(),
                        m = p() && !o,
                        g = n.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: i, ...r }, c) => {
                                    const d = m ? [C.linkRedesign, 0 === c && C.firstLinkRedesign, e && 0 === c && C.withNoPaddingStart] : void 0;
                                    return n.createElement(w, (0, a.Z)({ viewType: i }, r, { isCompact: l, isPillLink: o, isRoundedRect: s, isWebRedesign: m, style: d }), t);
                                }),
                            [e, l, o, s, m, c],
                        );
                    return n.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: o && C.gap, childrenStyle: !m && C.flexGrow, key: h, style: [o ? null : C.segmentedControl, m && C.leftAligned, d], visibleItemIndex: u }, g);
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
                c = ({ "aria-label": e, containerStyle: t, disabled: l, interactiveStyles: c, isCompact: d, link: u, lower: h, onClick: p, stackLayoutLowerStyle: m, stackLayoutUpperStyle: g, upper: y, withInsetFocusRing: v = !0, withInteractiveStyling: f = !1 }) => {
                    const b = c ?? i.Z.generate({ backgroundColor: o.default.theme.colors.transparent, color: o.default.theme.colors.primary, insetFocusRing: v }),
                        _ = a.createElement(a.Fragment, null, a.createElement(n.Z, { style: [s.defaultUpperContainerStyle, g, d && { height: "auto" }] }, y), h ? a.createElement(n.Z, { style: [s.defaultLowerContainerStyle, m] }, h) : null);
                    return a.createElement(r.Z, { "aria-label": e, disabled: l, interactive: f, interactiveStyles: f ? b : void 0, link: u, onClick: p, style: [s.root, t] }, _);
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
                    const { "aria-label": t, containerStyle: l, description: s, image: u, imageOverlayText: h, link: p, onClick: m, previousPrice: g, price: y, title: v } = e,
                        f = h ? a.createElement(r.ZP, { color: "alwaysBaseGray1100", size: "subtext3", style: d.imageOverlay, weight: "bold" }, h) : null,
                        b = a.createElement(a.Fragment, null, a.createElement(i.Z, { "aria-label": t, aspectMode: o.Z.SQUARE, image: u }), a.createElement(n.Z, { style: d.imageColorOverlay }), f),
                        _ = g ? a.createElement(r.ZP, { color: "gray700", numberOfLines: 1, style: d.previousPrice, weight: "normal" }, g) : null,
                        k = y ? a.createElement(r.ZP, { numberOfLines: 1, size: "subtext2", style: d.price }, y, _) : null,
                        S = a.createElement(a.Fragment, null, a.createElement(r.ZP, { numberOfLines: 1, style: d.title, weight: "bold" }, v), a.createElement(r.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2", style: d.description }, s), k);
                    return a.createElement(c.Z, { "aria-label": t, containerStyle: [d.root, l], link: p, lower: S, onClick: m, stackLayoutUpperStyle: d.upper, upper: b, withInteractiveStyling: !0 });
                };
        },
        874090: (e, t, l) => {
            l.d(t, { Z: () => n });
            var a = l(202784);
            const n = (0, l(523561).Z)({ loader: () => Promise.all([l.e("modules.audio-6107ac1a"), l.e("modules.audio-b953418a"), l.e("modules.audio-7c51e6a7"), l.e("modules.audio-04db59e9"), l.e("modules.audio-76583d6c"), l.e("modules.audio-b7a8a5fb"), l.e("modules.audio-51f6e793"), l.e("modules.audio-e019dbda"), l.e("modules.audio-262c94d4"), l.e("modules.audio-c6fe4ea4"), l.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"), l.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerPrerollUI~loaders.video.VideoPlayerEventsU"), l.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerEventsUI"), l.e("loaders.video.VideoPlayerEventsUI")]).then(l.bind(l, 374749)), renderPlaceholder: () => a.createElement("div", null) });
        },
        388941: (e, t, l) => {
            l.r(t), l.d(t, { default: () => s });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                r = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 4.25c-4.28 0-7.75 3.47-7.75 7.75s3.47 7.75 7.75 7.75c1.499 0 2.894-.424 4.078-1.158l1.318 2.125c-1.568.972-3.418 1.534-5.396 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.75 12 1.75 22.25 6.339 22.25 12c0 .534-.032 1.061-.08 1.549-.223 2.285-2.31 3.65-4.378 3.471-1.128-.098-2.114-.621-2.817-1.396-1.008 1.136-2.467 1.802-4.077 1.576-2.748-.386-4.354-3.149-3.973-5.86s2.686-4.924 5.434-4.538c.793.111 1.491.421 2.074.87l.038-.32 2.482.298-.584 4.861c-.122 1.015.621 1.93 1.64 2.019.927.081 1.605-.515 1.674-1.223.042-.426.068-.869.068-1.306 0-4.28-3.47-7.75-7.75-7.75H12zm.01 5.026c-1.08-.152-2.377.746-2.611 2.41s.765 2.885 1.845 3.036c1.08.152 2.377-.746 2.611-2.41.234-1.664-.765-2.884-1.845-3.036z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        416276: (e, t, l) => {
            l.r(t), l.d(t, { default: () => s });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                r = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.002 4h7.764c1.23 0 2.386.49 3.236 1.32.85-.83 2.006-1.32 3.236-1.32h7.764v16h-8.146c-.839 0-1.488.51-1.959 1.45h-1.789l-.171-.34C10.598 20.43 9.906 20 9.148 20H1.002V4zm10 3.26C10.53 6.48 9.685 6 8.766 6H3.002v12h6.146c.658 0 1.292.16 1.854.46V7.26zm2 11.21c.527-.29 1.143-.47 1.854-.47h6.146V6h-5.764c-.918 0-1.764.48-2.236 1.26v11.21zM19 11h-4V9h4v2zm0 4h-4v-2h4v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        738398: (e, t, l) => {
            l.r(t), l.d(t, { default: () => s });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                r = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M16.586 4l-2.043-2.04L15.957.54 18 2.59 20.043.54l1.414 1.42L19.414 4l2.043 2.04-1.414 1.42L18 5.41l-2.043 2.05-1.414-1.42L16.586 4zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        194417: (e, t, l) => {
            l.r(t), l.d(t, { default: () => s });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                r = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M16 3v8h-3V8.5H3v-3h10V3h3zm5 12.5h-9v3h9v-3zM10 21v-8H7v2.5H3v3h4V21h3zm8-12.5h3v-3h-3v3z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        856661: (e, t, l) => {
            l.r(t), l.d(t, { default: () => s });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                r = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M9 6h3.731L9.184 18H5v2h10v-2h-3.731l3.547-12H19V4H9v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        89085: (e, t, l) => {
            l.r(t), l.d(t, { default: () => s });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                r = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
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
        226597: (e, t, l) => {
            l.r(t), l.d(t, { default: () => s });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                r = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        155353: (e, t, l) => {
            l.r(t), l.d(t, { default: () => s });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                r = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        946474: (e, t, l) => {
            l.r(t), l.d(t, { default: () => s });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                r = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M18.36 8h-2.68l.42-2.52C16.4 3.66 15 2 13.15 2c-1.07 0-2.06.57-2.59 1.51l-3 5.24c-.04.06-.08.11-.14.15C6.96 8.35 6.27 8 5.5 8H2v13h14.2c2.1 0 3.92-1.45 4.39-3.5l1.19-5.22C22.27 10.09 20.61 8 18.36 8zM6 19H4v-9h1.5c.27 0 .5.22.5.5V19zm13.83-7.17l-1.19 5.22C18.38 18.19 17.37 19 16.2 19H8v-8.16c.54-.2 1-.58 1.3-1.1l2.99-5.24c.18-.31.5-.5.86-.5.61 0 1.07.55.97 1.15l-.8 4.85h5.04c.97 0 1.68.89 1.47 1.83z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-6107ac1a.e397718a.js.map

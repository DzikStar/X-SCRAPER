"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-6107ac1a", "icons/IconBookmarkPlusStroke-js", "icons/IconFeedback-js", "icons/IconFilterFill-js", "icons/IconRepliesStroke-js", "icons/IconStrikethrough-js", "icons/IconThumbsUpFill-js"],
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
                        P = C ? this._getMemoizedLink(C, k) : void 0,
                        T = c ? c(C) : E?.pathname === P?.pathname,
                        x = y.Z.generate({ backgroundColor: "transparent", color: o.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: u ? S.pillHoverStyle.backgroundColor : void 0 }),
                        Z = g ? "medium" : T ? "bold" : "medium";
                    return n.createElement(v.Z, { "aria-label": t, "aria-selected": T, focusable: !!T, interactiveStyles: x, link: P, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(u ? [S.pillStyle] : [S.link]), ...(u && T ? [S.pillActiveStyle] : []), d ? (u ? S.compactPill : S.compactLink) : null, h ? S.roundedRect : null, w], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => n.createElement(s.Z, { style: u && S.flexGrow }, n.createElement(p.ZP, { size: g ? "headline2" : void 0, style: [S.text, { color: this._getTextColor(T, c, g, u) }, d && S.compactText, g && t && S.focusedText, u && S.pillTextStyle, u && T && S.pillActiveTextStyle, u && c && S.pillHoverTextStyle], weight: Z }, e && n.createElement(e, { style: S.icon }), i, g || u ? null : n.createElement(s.Z, { style: T && [S.border, { backgroundColor: o.default.theme.colors[r] }] })), l ? n.createElement(m.Z, { count: l, standalone: !0, style: [S.badge, l >= 10 && S.multiDigitBadge, l >= 20 && S.truncatedCountBadge], truncatedCountFormatter: _, unreadCountLabel: f, withBorder: !1 }) : a ? n.createElement(m.Z, { pip: !0, standalone: !0, style: S.badgePip, textColor: "red500", unreadCountLabel: b, withBorder: !1 }) : null));
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
        790093: (e, t, l) => {
            l.r(t), l.d(t, { default: () => s });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                r = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
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
        368761: (e, t, l) => {
            l.r(t), l.d(t, { default: () => s });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                r = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12.312 23.736c-.123 0-.246-.03-.358-.091-.241-.132-.392-.385-.392-.659v-.871c0-.414.336-.75.75-.75.256 0 .482.128.617.324 1.905-1.247 4.823-3.192 5.908-4.11 2.256-1.908 3.604-4.732 3.608-7.554 0-.414.336-.749.75-.749s.75.337.749.751c-.004 3.256-1.552 6.507-4.14 8.697-1.326 1.121-5.009 3.546-7.086 4.892-.124.08-.266.12-.408.12zm-2.557-1.897c1.697-1.082 6.672-4.317 8.048-5.48 1.902-1.609 3.04-3.976 3.043-6.329-.006-4.366-3.433-7.787-7.8-7.787l-4.149-.01c-4.375-.001-7.801 3.426-7.801 7.801 0 4.104 3.14 7.204 7.465 7.37.002 1.79.008 2.88.058 3.544-.041.101-.061.21-.055.322.009.178.081.344.198.471.111.241.283.241.552.241.163 0 .316-.053.441-.144zm3.289-18.097c3.529 0 6.298 2.763 6.302 6.287-.003 1.917-.941 3.855-2.512 5.184-1.03.871-4.478 3.16-6.771 4.645l-.002-3.175c0-.403-.319-.734-.722-.749l-.721-.027c-3.49-.135-6.022-2.604-6.022-5.872 0-3.534 2.768-6.302 6.299-6.302l4.149.01z" })) }, { writingDirection: t });
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
        69893: (e, t, l) => {
            l.r(t), l.d(t, { default: () => s });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                r = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M17.879 15c.079.323.121.658.121 1 0 2.757-2.691 5-6 5s-6-2.243-6-5h2c0 1.654 1.794 3 4 3s4-1.346 4-3c0-.352-.096-.686-.246-1h2.125zM12 11c-2.206 0-4-1.346-4-3s1.794-3 4-3 4 1.346 4 3h2c0-2.757-2.691-5-6-5S6 5.243 6 8c0 1.126.455 2.163 1.211 3H3v2h18v-2h-9z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        922449: (e, t, l) => {
            l.r(t), l.d(t, { default: () => s });
            var a = l(202784),
                n = l(890601),
                i = l(783427),
                r = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M5.996 10.06L6 19.907v-9.851zM6 20.332V21H2V8h1.5c.742 0 1.442.328 1.92.9.334.398.532.886.573 1.407L6 20.331zm15.78-8.051c.238-1.043-.009-2.121-.677-2.958-.67-.841-1.67-1.322-2.743-1.322H14.5l.614-3.684c.095-.578-.068-1.168-.448-1.615-.378-.445-.931-.701-1.516-.701-1.297 0-1.429.537-4.63 5.239C8.182 7.737 8 8.325 8 8.926v12.076h8.2c2.088 0 3.935-1.472 4.389-3.496l1.19-5.224z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-6107ac1a.403d112a.js.map

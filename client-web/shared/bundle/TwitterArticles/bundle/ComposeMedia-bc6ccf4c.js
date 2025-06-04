"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.TwitterArticles~bundle.ComposeMedia-bc6ccf4c"],
    {
        403556: (e, t, r) => {
            r.d(t, { Z: () => T });
            var s = r(807896),
                a = r(202784),
                i = r(194504),
                n = r(235902),
                o = r(392237),
                l = r(325686),
                c = r(111677),
                d = r.n(c),
                p = r(912021),
                h = r(516951),
                u = r(731708),
                m = r(310088),
                g = r(175993),
                y = r(58881),
                b = r(530732);
            const f = d().d2414d31,
                S = () => d().ce4e85ae,
                v = d().fb9f6f39;
            class C extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: r, query: s, state: a } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: r, query: s, method: "push", state: { ...a, lockScroll: t } };
                        })),
                        (this._unlisten = h.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, r, s) => {
                            const a = o.default.theme.colors.text,
                                i = o.default.theme.colors.gray700;
                            return r || s ? (e || t ? a : i) : e ? a : i;
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
                    const { Icon: e, "aria-label": t, badgeCount: r, badgePip: s, children: i, color: n, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: h, isWebRedesign: g, retainScrollPosition: C, style: R, to: x } = this.props,
                        { location: T } = this.state,
                        P = x ? this._getMemoizedLink(x, C) : void 0,
                        w = c ? c(x) : T?.pathname === P?.pathname,
                        k = y.Z.generate({ backgroundColor: "transparent", color: o.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? _.pillHoverStyle.backgroundColor : void 0 }),
                        E = g ? "medium" : w ? "bold" : "medium";
                    return a.createElement(b.Z, { "aria-label": t, "aria-selected": w, focusable: !!w, interactiveStyles: k, link: P, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [_.pillStyle] : [_.link]), ...(p && w ? [_.pillActiveStyle] : []), d ? (p ? _.compactPill : _.compactLink) : null, h ? _.roundedRect : null, R], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => a.createElement(l.Z, { style: p && _.flexGrow }, a.createElement(u.ZP, { size: g ? "headline2" : void 0, style: [_.text, { color: this._getTextColor(w, c, g, p) }, d && _.compactText, g && t && _.focusedText, p && _.pillTextStyle, p && w && _.pillActiveTextStyle, p && c && _.pillHoverTextStyle], weight: E }, e && a.createElement(e, { style: _.icon }), i, g || p ? null : a.createElement(l.Z, { style: w && [_.border, { backgroundColor: o.default.theme.colors[n] }] })), r ? a.createElement(m.Z, { count: r, standalone: !0, style: [_.badge, r >= 10 && _.multiDigitBadge, r >= 20 && _.truncatedCountBadge], truncatedCountFormatter: v, unreadCountLabel: f, withBorder: !1 }) : s ? a.createElement(m.Z, { pip: !0, standalone: !0, style: _.badgePip, textColor: "red500", unreadCountLabel: S, withBorder: !1 }) : null));
                }
            }
            (C.contextType = g.Z), (C.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const _ = o.default.create((e) => ({
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
                R = C,
                x = o.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                T = ({ alignFirstItem: e, "aria-label": t, isCompact: r, isPillLink: o, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const h = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = n.ZP.useProps(),
                        m = u() && !o,
                        g = a.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: i, ...n }, c) => {
                                    const d = m ? [x.linkRedesign, 0 === c && x.firstLinkRedesign, e && 0 === c && x.withNoPaddingStart] : void 0;
                                    return a.createElement(R, (0, s.Z)({ viewType: i }, n, { isCompact: r, isPillLink: o, isRoundedRect: l, isWebRedesign: m, style: d }), t);
                                }),
                            [e, r, o, l, m, c],
                        );
                    return a.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: o && x.gap, childrenStyle: !m && x.flexGrow, key: h, style: [o ? null : x.segmentedControl, m && x.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        738584: (e, t, r) => {
            r.d(t, { o: () => u, Z: () => y });
            var s = r(807896),
                a = r(202784),
                i = r(928316),
                n = r(682474),
                o = r(392237),
                l = r(893164),
                c = r(395367),
                d = r(908478);
            function p(e) {
                let t = h(e);
                return (e) => {
                    const r = h(e);
                    return (0, d.Z)(t, r) || (t = r), t;
                };
            }
            function h(e) {
                if (!e || "object" != typeof e) return e;
                const t = JSON.parse(JSON.stringify(e));
                return delete t.dataUsageBytes, (t.tracks = t.tracks.map((e) => ("number" == typeof e.currentTimeMs && delete e.currentTimeMs, e))), t;
            }
            function u({ children: e, periodic: t }) {
                const r = t ? m.PeriodicContext.Consumer : m.Context.Consumer;
                return a.createElement(r, null, (t) => {
                    const { aspectRatio: r, containerRef: s, guestsState: a, playerApi: i, playerState: n } = t;
                    return i && s && n ? e({ aspectRatio: r, guestsState: a, playerApi: i, playerState: n, containerRef: s }) : null;
                });
            }
            class m extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._cache = { stablePlayerState: p(null) }),
                        (this.state = { hasError: null, guestsState: null, playerApi: null, playerState: null, stablePlayerState: null }),
                        (this._renderCustomOverlay = () => {
                            const { children: e, enablePiP: t } = this.props,
                                { guestsState: r, playerApi: s, stablePlayerState: a } = this.state;
                            return s && e ? ("function" == typeof e ? e({ enablePiP: t, guestsState: r, playerApi: s, playerState: a, containerRef: this._containerRef }) : e) : null;
                        }),
                        (this._handleReload = () => this.setState(() => ({ hasError: null }))),
                        (this._handlePlayerApi = (e) => (t) => {
                            const { playerId: r } = this.props;
                            this.setState({ playerApi: t }),
                                this.props.onApiReady && this.props.onApiReady(t),
                                r && e && (this._unregister = e(r, t)),
                                (this._unsubscribe = t.subscribe((e, t) => {
                                    const r = this._cache.stablePlayerState(e);
                                    this.setState({ stablePlayerState: r, playerState: e, guestsState: t }), this.props.onStateUpdate && this.props.onStateUpdate(e, t);
                                }));
                        });
                }
                componentWillUnmount() {
                    this._unregister && this._unregister(), this._unsubscribe && this._unsubscribe();
                }
                componentDidUpdate() {
                    if (!this._containerRef) {
                        const e = i.findDOMNode(this);
                        e && e instanceof HTMLElement && (this._containerRef = e);
                    }
                }
                componentDidCatch(e, t) {
                    const r = { error: e, info: t };
                    this.setState(() => ({ hasError: r }));
                }
                render() {
                    const { guestsState: e, playerApi: t, playerState: r, stablePlayerState: i } = this.state,
                        { additionalBadges: o, aspectRatio: d, basePlayerClass: p, children: h, includeDisputeLinkInCopyrightErrorMessage: u, isFullScreen: y, objectFitVideo: b, onApiReady: f, onScroll: S, onStateUpdate: v, playerId: C, size: _, ...R } = this.props,
                        x = { aspectRatio: this.props.aspectRatio, guestsState: e, playerApi: t, playerState: r, containerRef: this._containerRef },
                        T = { ...x, playerState: i };
                    return a.createElement(
                        n.Z,
                        { isFullScreen: y, onScroll: S, ratio: d, style: [g.root, g[_]] },
                        this.state.hasError
                            ? a.createElement(l.Z, { onReloadPress: this._handleReload })
                            : a.createElement(
                                  m.Context.Provider,
                                  { value: T },
                                  a.createElement(
                                      m.PeriodicContext.Provider,
                                      { value: x },
                                      a.createElement(c.Z.RegistrationContext.Consumer, null, ({ registerPlayer: e }) => a.createElement(p, (0, s.Z)({}, R, { customOverlay: this._renderCustomOverlay(), displayOptions: { objectFitVideo: b }, setPlayerApi: this._handlePlayerApi(e) }))),
                                  ),
                              ),
                    );
                }
            }
            (m.Consumer = u), (m.defaultProps = { aspectRatio: o.default.theme.aspectRatios.landscape, size: "fill" }), (m.Context = a.createContext({ aspectRatio: o.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null })), (m.PeriodicContext = a.createContext({ aspectRatio: o.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null }));
            const g = o.default.create({ root: { position: "relative" }, fill: { width: "100%", height: "100%" }, small: { width: 480, height: 270 }, medium: { width: 640, height: 360 }, large: { width: 800, height: 450 } }),
                y = m;
        },
        395367: (e, t, r) => {
            r.d(t, { Z: () => n });
            var s,
                a = r(202784);
            class i extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { playerApi: void 0, playerState: void 0, guestsState: void 0 }),
                        (this._initializeState = (e) => {
                            e && (this._unsubscribe && this._unsubscribe(), this.setState({ playerApi: e }), (this._unsubscribe = e.subscribe((e, t) => this.setState({ playerState: e, guestsState: t }))));
                        });
                }
                componentDidMount() {
                    this._initializeState(this.props.playerApi);
                }
                componentDidUpdate(e) {
                    const { playerApi: t } = this.props;
                    t !== e.playerApi && this._initializeState(t);
                }
                render() {
                    return this.props.children(this.state);
                }
            }
            class n extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { players: {} }),
                        (this._mounted = !1),
                        (this._registerPlayer = (e, t) => {
                            const r = new Promise((r) => {
                                setTimeout(() => {
                                    this._mounted ? this.setState((r) => ({ players: { ...r.players, [e]: t } }), r) : r();
                                });
                            });
                            return () => {
                                r.then(() => this._unregisterPlayer(e));
                            };
                        }),
                        (this._unregisterPlayer = (e) => {
                            this._mounted &&
                                this.setState((t) => {
                                    const { [e]: r, ...s } = this.state.players;
                                    return { players: s };
                                });
                        }),
                        (this._registrationContext = { registerPlayer: this._registerPlayer });
                }
                componentDidMount() {
                    this._mounted = !0;
                }
                componentWillUnmount() {
                    this._mounted = !1;
                }
                render() {
                    return a.createElement(n.RegistrationContext.Provider, { value: this._registrationContext }, a.createElement(n.ProviderContext.Provider, { value: this.state }, this.props.children));
                }
            }
            (s = n), (n.MetadataSubscriber = ({ children: e, playerId: t }) => a.createElement(s.ProviderContext.Consumer, null, ({ players: r }) => a.createElement(i, { playerApi: r && r[t] }, e))), (n.RegistrationContext = a.createContext({ registerPlayer: void 0 })), (n.ProviderContext = a.createContext({ players: {} }));
        },
        893164: (e, t, r) => {
            r.d(t, { Z: () => u });
            var s = r(202784),
                a = r(325686),
                i = r(111677),
                n = r.n(i),
                o = r(355830),
                l = r(731708),
                c = r(154003),
                d = r(992942),
                p = r(392237);
            const h = n().a9edea48;
            function u(e) {
                const { displayBackgroundImage: t = !1, errorMessage: r, iconPlayError: i, imageSrc: n, onReloadPress: u } = e;
                return s.createElement(a.Z, { style: [p.default.absoluteFill, t ? null : m.blankOverlay] }, t ? s.createElement(s.Fragment, null, s.createElement(a.Z, { style: m.backgroundImage }, n && s.createElement(d.Z, { resizeMode: "cover", source: n, style: p.default.absoluteFill })), s.createElement(a.Z, { style: m.overlay })) : null, s.createElement(a.Z, { style: m.errorContainer }, s.createElement(a.Z, null, i ? s.createElement(o.default, { style: m.playErrorIcon }) : null), s.createElement(a.Z, { focusable: !0 }, s.createElement(l.ZP, { style: t ? m.errorMsgTextWhite : m.errorMsgTextGray }, r)), u ? s.createElement(c.ZP, { onPress: u, style: m.buttonContainer, type: "brandFilled" }, h) : null));
            }
            const m = p.default.create((e) => ({ backgroundImage: { ...p.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...p.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack77 }, blankOverlay: { backgroundColor: e.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: e.spaces.space32 }, errorMsgTextWhite: { color: e.colors.white, textAlign: "center", marginBottom: e.spaces.space20 }, errorMsgTextGray: { color: e.colors.gray700, textAlign: "center", marginBottom: e.spaces.space20 }, playErrorIcon: { fill: e.colors.gray700, height: e.spaces.space48, width: e.spaces.space48, marginHorizontal: "auto", paddingBottom: e.spaces.space20, verticalAlign: "middle" } }));
        },
        815479: (e, t, r) => {
            r.d(t, { Z: () => X });
            var s = r(202784),
                a = r(325686),
                i = r(640290),
                n = r(614425),
                o = r(682474),
                l = r(58881),
                c = r(530732),
                d = r(782578),
                p = r(392237),
                h = r(738584),
                u = r(395367),
                m = r(336961),
                g = r(807896),
                y = r(151624),
                b = r(111677),
                f = r.n(b),
                S = r(933895),
                v = r(868634),
                C = r(224162);
            const _ = "decrease",
                R = "increase",
                x = "left",
                T = "right";
            var P = r(731708),
                w = r(879891);
            r(136728);
            function k(e) {
                const t = Math.round(e / 1e3);
                if (t < 10) return `0:0${t}`;
                if (t < 60) return `0:${t}`;
                const r = Math.floor(t / 60);
                return `${r}:${("" + (t - 60 * r)).padStart(2, "0")}`;
            }
            const E = (e, t) =>
                    e.map((e) =>
                        ((e, t) => {
                            if ("tenths" === t) {
                                const t = Math.round(e / 100),
                                    r = t % 10;
                                return `0:${("" + (t - r) / 10).padStart(2, "0")}.${r}`;
                            }
                            return k(e);
                        })(e, t),
                    ),
                Z = (e, t) => {
                    const {
                        intervalsMs: r,
                        numIntervals: s,
                        numSubintervals: a,
                        precision: i,
                    } = ((e, t) => {
                        let r, s, a;
                        const i = t / e;
                        i >= 0.25 ? ((r = 200), (s = "tenths"), (a = 4)) : i >= 0.1 ? ((r = 500), (s = "tenths"), (a = 5)) : i >= 0.05 ? ((r = 1e3), (s = "seconds"), (a = 5)) : i >= 0.025 ? ((r = 2e3), (s = "seconds"), (a = 4)) : i >= 0.01 ? ((r = 5e3), (s = "seconds"), (a = 5)) : i >= 0.005 ? ((r = 1e4), (s = "seconds"), (a = 5)) : i >= 0.0025 ? ((r = 2e4), (s = "seconds"), (a = 4)) : i >= 0.001 ? ((r = 5e4), (s = "seconds"), (a = 4)) : ((r = 1e5), (s = "seconds"), (a = 4));
                        const n = [];
                        let o = 0;
                        for (; o < e; ) n.push(o), (o += r);
                        return { intervalsMs: n, precision: s, numSubintervals: a, numIntervals: Number((e / r).toFixed(1)) };
                    })(e, t);
                    return { intervalStrings: E(r, i), numSubintervals: a, numIntervals: s };
                };
            const A = p.default.create((e) => ({ root: { flexDirection: "column", width: "100%", position: "absolute", height: "65%", bottom: 0, overflow: "hidden" }, intervalRow: { flexDirection: "row" }, intervalRowStrings: { paddingBottom: e.spaces.space2, userSelect: "none" }, intervalRowTicks: { flexGrow: 1, overflow: "hidden" }, borderLeft: { borderStartColor: e.colors.gray700, borderStartWidth: 1 }, borderRight: { borderEndColor: e.colors.gray700, borderEndWidth: 1 }, bigTicks: { flexDirection: "row", alignItems: "flex-end" }, smallTicks: { flexGrow: 1, height: "50%" }, intervalStrings: { display: "flex", justifyContent: "center" } })),
                D = function ({ duration: e, trimmerWidth: t }) {
                    const { intervalStrings: r, numIntervals: i, numSubintervals: n } = Z(e, t),
                        { direction: o } = (0, w.Z)(),
                        l = "rtl" === o ? A.borderRight : A.borderLeft,
                        c = (100 * Math.ceil(i)) / i;
                    return s.createElement(
                        a.Z,
                        { style: A.root },
                        s.createElement(
                            a.Z,
                            { style: [A.intervalRow, A.intervalRowStrings, { width: `${c}%` }] },
                            r.map((e, r) => s.createElement(P.ZP, { color: "gray700", key: r, size: "subtext3", style: [{ width: 0 === r ? t / i / 2 + "px" : t / i + "px" }, A.intervalStrings] }, 0 !== r ? e : null)),
                        ),
                        s.createElement(
                            a.Z,
                            { style: [A.intervalRow, A.intervalRowTicks] },
                            r.map((e, t) =>
                                s.createElement(
                                    a.Z,
                                    { key: t, style: [{ width: 100 / i + "%" }, A.bigTicks, 0 !== t && l] },
                                    Array.from({ length: n }, (e, t) => s.createElement(a.Z, { key: t, style: [A.smallTicks, 0 !== t && l] })),
                                ),
                            ),
                        ),
                    );
                };
            var W = r(165010),
                M = r(301049);
            const B = f().a394f905,
                I = f().f42c0c80,
                z = f().i667afe8,
                F = f().c0bdd345;
            class L extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._panResponders = y.Z.create({ onStartShouldSetPanResponder: () => !0, onMoveShouldSetPanResponder: () => !0, onPanResponderGrant: () => this.props.onMoveStart(this.props.side), onPanResponderMove: (e, { dx: t }) => this.props.onMoveChange(t, this.props.side), onPanResponderRelease: (e, { dx: t }) => this.props.onMoveEnd(t, this.props.side), onPanResponderTerminate: (e, { dx: t }) => this.props.onMoveEnd(t, this.props.side), onPanResponderTerminationRequest: () => !0 })),
                        (this._handleOnKeyDown = (e, t) => {
                            const { onKeyDown: r } = this.props,
                                { key: s } = e,
                                a = s === M.Z.ArrowUp || s === M.Z.ArrowRight,
                                i = s === M.Z.ArrowDown || s === M.Z.ArrowLeft;
                            if (a || i) {
                                e.preventDefault();
                                r(a ? R : _, t);
                            }
                        }),
                        (this._handleOnKeyUp = (e) => {
                            const { onKeyUp: t } = this.props,
                                { key: r } = e;
                            [M.Z.ArrowDown, M.Z.ArrowLeft, M.Z.ArrowRight, M.Z.ArrowUp].includes(r) && t();
                        }),
                        (this._generateBorderStyles = (e) => {
                            const { side: t } = this.props,
                                r = "rtl" === e;
                            return t === x ? (r ? V.rightScrubberRadius : V.leftScrubberRadius) : t === T ? (r ? V.leftScrubberRadius : V.rightScrubberRadius) : void 0;
                        });
                }
                render() {
                    const { currentValue: e, maxValue: t, minValue: r, side: i, style: n } = this.props;
                    return s.createElement(C.ZP.Consumer, null, ({ direction: o }) => s.createElement(c.Z, (0, g.Z)({ "aria-label": i === x ? z : I, "aria-valuemax": parseFloat(F(t / 1e3)), "aria-valuemin": parseFloat(F(r / 1e3)), "aria-valuenow": parseFloat(F(e / 1e3)), "aria-valuetext": B({ seconds: F(e / 1e3) }), focusable: !0, interactiveStyles: l.Z.generate({ backgroundColor: p.default.theme.colors.primary, color: p.default.theme.colors.primary, customFocusBackgroundColor: p.default.theme.colors.primary, customHoverBackgroundColor: p.default.theme.colors.primary, customPressedBackgroundColor: p.default.theme.colors.primary, insetFocusRing: !0 }), onKeyDown: (e) => this._handleOnKeyDown(e, i), onKeyUp: (e) => this._handleOnKeyUp(e), role: "adjustable", style: [V.root, this._generateBorderStyles(o), n] }, (0, W.dW)(this._panResponders.panHandlers)), ({ isFocused: e, isHovered: t, isPressed: r }) => s.createElement(s.Fragment, null, s.createElement(a.Z, { style: [V.trimmerScrubberGrips, (e || t || r) && V.trimmerScrubberGripsOpacity] }), s.createElement(a.Z, { style: [V.trimmerScrubberGrips, (e || t || r) && V.trimmerScrubberGripsOpacity] }))));
                }
            }
            const V = p.default.create((e) => ({ root: { backgroundColor: e.colors.primary, cursor: "grab", flexDirection: "row", height: e.spaces.space48, justifyContent: "space-between", paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space12, width: `calc(${e.spaces.space4} * 2 + ${e.spaces.space2} * 3)` }, leftScrubberRadius: { borderBottomStartRadius: e.borderRadii.small, borderTopStartRadius: e.borderRadii.small }, rightScrubberRadius: { borderBottomEndRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, trimmerScrubberGrips: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.infinite, height: "100%", width: e.spaces.space2 }, trimmerScrubberGripsOpacity: { opacity: 0.8 } })),
                G = L,
                H = f().af2a65d9,
                j = f().d46781af,
                $ = f().e8733ed9,
                U = f().j3d49e93,
                O = (e, t) => (e / t) * 100 + "%";
            class K extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._keyPressAccumulatedDistance = 0),
                        (this._keyPressValueDelta = 1),
                        (this._panResponderTermination = y.Z.create({ onMoveShouldSetPanResponderCapture: (e, { dx: t }) => this._shouldTerminateChildrenPanResponders(t) })),
                        (this.state = { isActive: !1, trimmerWidth: 0 }),
                        (this._generateTimestampLabelString = () => {
                            const { endTime: e, startTime: t } = this.props,
                                r = e - t;
                            if (r >= 6e4) {
                                const e = k(r);
                                return U({ timestamp: e });
                            }
                            return r < 4e3 ? j(Math.floor((10 * r) / 1e3) / 10) : $(Math.floor(r / 1e3));
                        }),
                        (this._getTrimmerScrubberWidth = () => 2 * p.default.theme.spacesPx.space4 + 3 * p.default.theme.spacesPx.space2),
                        (this._handleKeyDown = (e, t) => {
                            const { trimmerWidth: r } = this.state;
                            1 === this._keyPressValueDelta && this._handlePanResponderGrant(t), (this._keyPressAccumulatedDistance += this._keyPressValueDelta * (e === R ? 1 : -1)), this._handlePanResponderChange(this._keyPressAccumulatedDistance, t);
                            const s = 0.05 * r;
                            this._keyPressValueDelta = Math.min(1.4 * this._keyPressValueDelta, s);
                        }),
                        (this._handleKeyUp = () => {
                            (this._keyPressValueDelta = 1), (this._keyPressAccumulatedDistance = 0), this.setState({ isActive: !1 });
                        }),
                        (this._handleLayout = (e) => {
                            this.setState({ trimmerWidth: e.nativeEvent.layout.width });
                        }),
                        (this._handlePanResponderChange = (e, t) => {
                            this._triggerChange(e, t);
                        }),
                        (this._handlePanResponderEnd = (e, t) => {
                            this._handlePanResponderChange(e, t), this.setState({ isActive: !1 });
                        }),
                        (this._handlePanResponderGrant = (e) => {
                            const { endTime: t, startTime: r } = this.props;
                            (this._baseTime = e === x ? r : t), this.setState({ isActive: !0 });
                        }),
                        (this._renderTimestampLabel = () => {
                            const { isActive: e } = this.state,
                                { duration: t, endTime: r, startTime: i } = this.props,
                                n = "rtl" === this._languageDirection,
                                o = n ? "marginEnd" : "marginStart",
                                l = n ? "marginStart" : "marginEnd";
                            return s.createElement(a.Z, { style: [N.labelWrapper, { [o]: O(i, t), [l]: O(t - r, t), width: O(r - i, t) }] }, s.createElement(v.ZP, { background: "maskColor", style: [N.label, !e && N.visibilityHidden] }, H({ timestamp: this._generateTimestampLabelString() })));
                        }),
                        (this._setRootRef = (e) => {
                            e && (this._removeTouchMoveToScrollListener = (0, S.O)(e, this._handleTouchMoveToScroll, !1));
                        }),
                        (this._handleTouchMoveToScroll = (e) => e.preventDefault()),
                        (this._scaleDistanceByTrimmerWidth = (e) => {
                            const { duration: t } = this.props,
                                { trimmerWidth: r } = this.state;
                            return (e / r) * t;
                        }),
                        (this._shouldTerminateChildrenPanResponders = (e) => {
                            const { duration: t } = this.props,
                                r = this._baseTime + this._scaleDistanceByTrimmerWidth(e);
                            return r < 0 || r > t;
                        }),
                        (this._triggerChange = (e, t) => {
                            const { duration: r, endTime: s, onScrub: a, startTime: i } = this.props,
                                n = this._baseTime + this._scaleDistanceByTrimmerWidth(e),
                                o = 1e3;
                            if (t === x) {
                                let e = n;
                                n <= 0 ? (e = 0) : s - o <= n && (e = s - o), a(x, e);
                            }
                            if (t === T) {
                                let e = n;
                                n >= r ? (e = r) : n - i <= o && (e = i + o), a(T, e);
                            }
                        });
                }
                componentWillUnmount() {
                    this._removeTouchMoveToScrollListener();
                }
                render() {
                    const { duration: e, endTime: t, playTime: r, startTime: i } = this.props,
                        { isActive: n, trimmerWidth: o } = this.state,
                        l = this._getTrimmerScrubberWidth();
                    return s.createElement(C.ZP.Consumer, null, ({ direction: c }) => {
                        this._languageDirection = c;
                        const d = "rtl" === this._languageDirection,
                            p = d ? "marginEnd" : "marginStart",
                            h = d ? "marginStart" : "marginEnd";
                        return s.createElement(a.Z, (0, g.Z)({ ref: this._setRootRef, style: [N.root, n && N.cursorGrab] }, this._panResponderTermination.panHandlers), this._renderTimestampLabel(), s.createElement(a.Z, { onLayout: this._handleLayout, style: N.trimmerWrapper }, s.createElement(a.Z, { style: N.intervalsContainer }, s.createElement(D, { duration: e, trimmerWidth: o })), s.createElement(s.Fragment, null, s.createElement(a.Z, { style: [N.discardArea, N.transition, { width: O(i, e) }] }), s.createElement(a.Z, { style: N.keepArea }, s.createElement(G, { currentValue: i, maxValue: t, minValue: 0, onKeyDown: this._handleKeyDown, onKeyUp: this._handleKeyUp, onMoveChange: this._handlePanResponderChange, onMoveEnd: this._handlePanResponderEnd, onMoveStart: this._handlePanResponderGrant, side: x, style: [N.trimmerScrubber, { [p]: `-${l}px` }] }), s.createElement(a.Z, { style: N.keepAreaCenter }, n ? null : s.createElement(a.Z, { style: [N.playBarArea, N.transition, { width: O(r, t - i) }] })), s.createElement(G, { currentValue: t, maxValue: e, minValue: i, onKeyDown: this._handleKeyDown, onKeyUp: this._handleKeyUp, onMoveChange: this._handlePanResponderChange, onMoveEnd: this._handlePanResponderEnd, onMoveStart: this._handlePanResponderGrant, side: T, style: [N.trimmerScrubber, { [h]: `-${l}px` }] })), s.createElement(a.Z, { style: [N.discardArea, N.transition, { width: `calc(100% - ${O(t, e)})` }] }))));
                    });
                }
            }
            const N = p.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space40, width: "100%" }, cursorGrab: { cursor: "grab" }, trimmerWrapper: { alignItems: "center", writingDirection: "ltr", flexGrow: 1, flexDirection: "row", height: e.spaces.space48, position: "relative" }, discardArea: { backgroundColor: e.colors.maskColor, height: `calc(100% - (${e.spaces.space4} * 2))` }, keepArea: { flexDirection: "row", flexGrow: 1, height: "100%", zIndex: 1 }, keepAreaCenter: { borderColor: e.colors.primary, borderStyle: "solid", borderBottomWidth: e.spaces.space4, borderTopWidth: e.spaces.space4, height: "100%", position: "relative", width: "100%" }, intervalsContainer: { backgroundColor: e.colors.gray50, height: `calc(${e.spaces.space48} - ${e.spaces.space4} * 2)`, position: "absolute", start: 0, end: 0 }, label: { userSelect: "none" }, labelWrapper: { flexDirection: "row", justifyContent: "center", paddingBottom: e.spaces.space8, paddingTop: e.spaces.space8 }, playBarArea: { backgroundColor: e.colors.primary, height: "100%", opacity: 0.5 }, trimmerScrubber: { zIndex: 1 }, transition: { transitionDuration: "0.01s", transitionProperty: "width" }, visibilityHidden: { visibility: "hidden" } })),
                q = K,
                J = new i.ZP({});
            class Y extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._isScrubbed = !1),
                        (this.state = { endTime: this.props.defaultTrimData?.endTime || this.props.video.duration, isPlaying: !1, startTime: this.props.defaultTrimData?.startTime || 0, playTime: 0 }),
                        (this._handleScrub = (e) => (t, r) => {
                            const { endTime: s, startTime: a } = this.state,
                                {
                                    video: { duration: i },
                                } = this.props,
                                n = t === x;
                            if (e) {
                                const t = n ? r : a,
                                    o = n ? s : r;
                                e.pause(), e.scrubToFraction(r / i), e.setPlaybackTimeRange({ startTimeS: t / 1e3, endTimeS: o / 1e3 });
                            }
                            this._isScrubbed = !0;
                            const o = n ? { startTime: r } : { endTime: r };
                            this.setState({ playTime: 0, ...o });
                        }),
                        (this._handleOnVideoContainerLayout = (e) => {
                            const { height: t, width: r } = e.nativeEvent.layout,
                                { height: s, width: a } = this.props.video,
                                i = a / s,
                                { height: n, width: o } = d.Z.getContainDimensions({ height: t, width: r }, i);
                            (n === this.state.adjustedVideoHeight && o === this.state.adjustedVideoWidth) || this.setState({ adjustedVideoHeight: n, adjustedVideoWidth: o });
                        }),
                        (this._handleVideoClick = (e) => () => {
                            const { endTime: t, isPlaying: r, startTime: s } = this.state,
                                {
                                    video: { duration: a },
                                } = this.props;
                            e && (this._isScrubbed ? (e.scrubToFraction(s / a), (this._isScrubbed = !1)) : this._isScrubbed || (!s && t === a) || (e.scrubToFraction(s / a), e.setPlaybackTimeRange({ startTimeS: s / 1e3, endTimeS: t / 1e3 })), r ? e.pause() : e.play());
                        }),
                        (this._handlePlayerStateUpdate = (e) => {
                            const { startTime: t } = this.state,
                                r = e.tracks[e.currentTrackId];
                            if (r) {
                                const s = r.currentTimeMs - t;
                                this.setState({ isPlaying: e.isPlaying, ...(e.isPlaying ? { playTime: s } : {}) });
                            }
                        });
                }
                render() {
                    const { video: e } = this.props,
                        { adjustedVideoHeight: t, adjustedVideoWidth: r, endTime: i, isPlaying: d, playTime: g, startTime: y } = this.state;
                    return s.createElement(
                        a.Z,
                        { style: Q.root },
                        s.createElement(
                            u.Z,
                            null,
                            s.createElement(
                                a.Z,
                                { style: Q.videoContainer },
                                s.createElement(
                                    a.Z,
                                    { onLayout: this._handleOnVideoContainerLayout, style: Q.video },
                                    s.createElement(
                                        o.Z,
                                        { ratio: e.width / e.height, style: !!t && !!r && { height: t, width: r } },
                                        s.createElement(h.Z, { aspectRatio: e.width / e.height, basePlayerClass: n.Y7, configType: "static", contentId: "", contentType: "media_entity", httpClient: J, onStateUpdate: this._handlePlayerStateUpdate, playerId: "trimmer", size: "fill", variants: e.variants }, ({ playerApi: e }) => s.createElement(c.Z, { focusable: !0, interactiveStyles: l.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, customFocusBackgroundColor: p.default.theme.colors.transparent, customHoverBackgroundColor: p.default.theme.colors.transparent, customPressedBackgroundColor: p.default.theme.colors.transparent, insetFocusRing: !0 }), onClick: this._handleVideoClick(e), style: Q.overlay }, d ? null : s.createElement(m.Z, null))),
                                    ),
                                ),
                            ),
                            s.createElement(u.Z.MetadataSubscriber, { playerId: "trimmer" }, ({ playerApi: t }) => s.createElement(q, { duration: e.duration, endTime: i, onScrub: this._handleScrub(t), playTime: g, startTime: y })),
                        ),
                    );
                }
                getTrimData() {
                    const { endTime: e, startTime: t } = this.state;
                    return { startTime: t, endTime: e };
                }
            }
            const Q = p.default.create((e) => ({ root: { flex: 1 }, overlay: { ...p.default.absoluteFillObject, alignItems: "center", justifyContent: "center" }, video: { alignItems: "center", flex: 1, justifyContent: "center", width: "100%" }, videoContainer: { alignItems: "center", backgroundColor: e.colors.gray0, flex: 1, padding: e.spaces.space20, width: "100%" } })),
                X = Y;
        },
        614425: (e, t, r) => {
            r.d(t, { Y7: () => s });
            const s = r(795897).default;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.TwitterArticles~bundle.ComposeMedia-bc6ccf4c.3edfbe7a.js.map

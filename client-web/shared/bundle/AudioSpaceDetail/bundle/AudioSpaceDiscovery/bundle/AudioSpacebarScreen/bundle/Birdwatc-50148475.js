"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"],
    {
        664064: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a = r(807896),
                i = r(202784),
                l = r(523561);
            const n = i.forwardRef(o);
            function o(e, t) {
                return i.createElement(c, (0, a.Z)({}, e, { ref: t }));
            }
            const c = (0, l.Z)({
                    loader: () =>
                        Promise.all([r.e("loader.Confetti-6107ac1a"), r.e("loader.Confetti-d728816b"), r.e("loader.Confetti-229eafb5"), r.e("loader.Confetti-5ccade72")])
                            .then(r.bind(r, 620151))
                            .then((e) => ({ default: e.Confetti })),
                }),
                s = n;
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => n });
            var a = r(202784),
                i = r(325686),
                l = r(392237);
            function n({ spacing: e, style: t }) {
                return a.createElement(i.Z, { role: "separator", style: [o.divider, { marginVertical: null != e ? l.default.theme.spaces[e] : void 0 }, t] });
            }
            const o = l.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => u });
            var a = r(202784),
                i = r(476984),
                l = r.n(i),
                n = r(143778),
                o = r(750410),
                c = r(682830);
            const s = "failed",
                d = "loaded",
                h = "loading",
                v = "none";
            class u extends a.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !l()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: i, icon: l, loadingMessage: n, onRequestRetry: d, render: u, renderFailure: m, retryMessage: g, retryable: p } = this.props;
                    switch (i) {
                        case s:
                            return p ? a.createElement(o.Z, { icon: l, onRequestRetry: d, retryMessage: g }) : r ? a.createElement(c.m, { failureMessage: r }) : m();
                        case h:
                            return a.createElement(c.J, { "aria-label": e, color: t, loadingMessage: n });
                        case v:
                            return null;
                        default:
                            return u();
                    }
                }
            }
            u.defaultProps = { renderFailure: n.Z, retryable: !0 };
        },
        620522: (e, t, r) => {
            r.d(t, { Z: () => a });
            const a = r(202784).createContext({ refsMap: {} });
        },
        738584: (e, t, r) => {
            r.d(t, { o: () => u, Z: () => p });
            var a = r(807896),
                i = r(202784),
                l = r(928316),
                n = r(682474),
                o = r(392237),
                c = r(893164),
                s = r(395367),
                d = r(908478);
            function h(e) {
                let t = v(e);
                return (e) => {
                    const r = v(e);
                    return (0, d.Z)(t, r) || (t = r), t;
                };
            }
            function v(e) {
                if (!e || "object" != typeof e) return e;
                const t = JSON.parse(JSON.stringify(e));
                return delete t.dataUsageBytes, (t.tracks = t.tracks.map((e) => ("number" == typeof e.currentTimeMs && delete e.currentTimeMs, e))), t;
            }
            function u({ children: e, periodic: t }) {
                const r = t ? m.PeriodicContext.Consumer : m.Context.Consumer;
                return i.createElement(r, null, (t) => {
                    const { aspectRatio: r, containerRef: a, guestsState: i, playerApi: l, playerState: n } = t;
                    return l && a && n ? e({ aspectRatio: r, guestsState: i, playerApi: l, playerState: n, containerRef: a }) : null;
                });
            }
            class m extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._cache = { stablePlayerState: h(null) }),
                        (this.state = { hasError: null, guestsState: null, playerApi: null, playerState: null, stablePlayerState: null }),
                        (this._renderCustomOverlay = () => {
                            const { children: e, enablePiP: t } = this.props,
                                { guestsState: r, playerApi: a, stablePlayerState: i } = this.state;
                            return a && e ? ("function" == typeof e ? e({ enablePiP: t, guestsState: r, playerApi: a, playerState: i, containerRef: this._containerRef }) : e) : null;
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
                        const e = l.findDOMNode(this);
                        e && e instanceof HTMLElement && (this._containerRef = e);
                    }
                }
                componentDidCatch(e, t) {
                    const r = { error: e, info: t };
                    this.setState(() => ({ hasError: r }));
                }
                render() {
                    const { guestsState: e, playerApi: t, playerState: r, stablePlayerState: l } = this.state,
                        { additionalBadges: o, aspectRatio: d, basePlayerClass: h, children: v, includeDisputeLinkInCopyrightErrorMessage: u, isFullScreen: p, objectFitVideo: y, onApiReady: b, onScroll: Z, onStateUpdate: w, playerId: z, size: E, ...f } = this.props,
                        C = { aspectRatio: this.props.aspectRatio, guestsState: e, playerApi: t, playerState: r, containerRef: this._containerRef },
                        M = { ...C, playerState: l };
                    return i.createElement(
                        n.Z,
                        { isFullScreen: p, onScroll: Z, ratio: d, style: [g.root, g[E]] },
                        this.state.hasError
                            ? i.createElement(c.Z, { onReloadPress: this._handleReload })
                            : i.createElement(
                                  m.Context.Provider,
                                  { value: M },
                                  i.createElement(
                                      m.PeriodicContext.Provider,
                                      { value: C },
                                      i.createElement(s.Z.RegistrationContext.Consumer, null, ({ registerPlayer: e }) => i.createElement(h, (0, a.Z)({}, f, { customOverlay: this._renderCustomOverlay(), displayOptions: { objectFitVideo: y }, setPlayerApi: this._handlePlayerApi(e) }))),
                                  ),
                              ),
                    );
                }
            }
            (m.Consumer = u), (m.defaultProps = { aspectRatio: o.default.theme.aspectRatios.landscape, size: "fill" }), (m.Context = i.createContext({ aspectRatio: o.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null })), (m.PeriodicContext = i.createContext({ aspectRatio: o.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null }));
            const g = o.default.create({ root: { position: "relative" }, fill: { width: "100%", height: "100%" }, small: { width: 480, height: 270 }, medium: { width: 640, height: 360 }, large: { width: 800, height: 450 } }),
                p = m;
        },
        395367: (e, t, r) => {
            r.d(t, { Z: () => n });
            var a,
                i = r(202784);
            class l extends i.Component {
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
            class n extends i.Component {
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
                                    const { [e]: r, ...a } = this.state.players;
                                    return { players: a };
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
                    return i.createElement(n.RegistrationContext.Provider, { value: this._registrationContext }, i.createElement(n.ProviderContext.Provider, { value: this.state }, this.props.children));
                }
            }
            (a = n), (n.MetadataSubscriber = ({ children: e, playerId: t }) => i.createElement(a.ProviderContext.Consumer, null, ({ players: r }) => i.createElement(l, { playerApi: r && r[t] }, e))), (n.RegistrationContext = i.createContext({ registerPlayer: void 0 })), (n.ProviderContext = i.createContext({ players: {} }));
        },
        893164: (e, t, r) => {
            r.d(t, { Z: () => u });
            var a = r(202784),
                i = r(325686),
                l = r(674132),
                n = r.n(l),
                o = r(355830),
                c = r(731708),
                s = r(154003),
                d = r(992942),
                h = r(392237);
            const v = n().a9edea48;
            function u(e) {
                const { displayBackgroundImage: t = !1, errorMessage: r, iconPlayError: l, imageSrc: n, onReloadPress: u } = e;
                return a.createElement(i.Z, { style: [h.default.absoluteFill, t ? null : m.blankOverlay] }, t ? a.createElement(a.Fragment, null, a.createElement(i.Z, { style: m.backgroundImage }, n && a.createElement(d.Z, { resizeMode: "cover", source: n, style: h.default.absoluteFill })), a.createElement(i.Z, { style: m.overlay })) : null, a.createElement(i.Z, { style: m.errorContainer }, a.createElement(i.Z, null, l ? a.createElement(o.default, { style: m.playErrorIcon }) : null), a.createElement(i.Z, { focusable: !0 }, a.createElement(c.ZP, { style: t ? m.errorMsgTextWhite : m.errorMsgTextGray }, r)), u ? a.createElement(s.ZP, { onPress: u, style: m.buttonContainer, type: "brandFilled" }, v) : null));
            }
            const m = h.default.create((e) => ({ backgroundImage: { ...h.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...h.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack77 }, blankOverlay: { backgroundColor: e.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: e.spaces.space32 }, errorMsgTextWhite: { color: e.colors.white, textAlign: "center", marginBottom: e.spaces.space20 }, errorMsgTextGray: { color: e.colors.gray700, textAlign: "center", marginBottom: e.spaces.space20 }, playErrorIcon: { fill: e.colors.gray700, height: e.spaces.space48, width: e.spaces.space48, marginHorizontal: "auto", paddingBottom: e.spaces.space20, verticalAlign: "middle" } }));
        },
        127957: (e, t, r) => {
            r.d(t, { Z: () => i });
            var a = r(202784);
            const i = (0, r(523561).Z)({ loader: () => r.e("loaders.video.VideoPlayer").then(r.bind(r, 962159)), renderPlaceholder: () => a.createElement("div", { "data-testid": "videoPlayer" }) });
        },
        546351: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M9.53 4c.41.01.77.28.91.66l4.14 11.6L16.84 11H22v2h-3.84l-2.74 6.39c-.16.38-.54.62-.95.61s-.77-.28-.91-.66L9.42 7.74 7.16 13H2v-2h3.84l2.74-6.39c.16-.38.54-.62.95-.61z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        880616: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M8.598 12.516h-.926l.465-1.343.461 1.343zM18.5 3C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13C3 4.119 4.119 3 5.5 3h13zm-3.286 11.378h1.337v-3.457H18V9.654h-4.233v1.267h1.447v3.457zm-4.068 0h3.121v-1.349h-1.785V9.655h-1.336v4.723zm-4.107 0l.295-.843H8.93l.301.843h1.405l-1.76-4.757H7.51l-1.76 4.757h1.289z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        449404: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14 4c-1.66 0-3 1.34-3 3v8c0 .55.45 1 1 1s1-.45 1-1V8h2v7c0 1.66-1.34 3-3 3s-3-1.34-3-3V7c0-2.76 2.24-5 5-5s5 2.24 5 5v8c0 3.87-3.13 7-7 7s-7-3.13-7-7V8h2v7c0 2.76 2.24 5 5 5s5-2.24 5-5V7c0-1.66-1.34-3-3-3z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        836842: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M20 11c0-4.84-3.46-9-8-9s-8 4.16-8 9c0 4.27 2.7 8.01 6.45 8.83L9 22h6l-1.44-2.17C17.31 19.01 20 15.27 20 11zm-8-3c-1.1 0-2 .9-2 2H8c0-2.21 1.79-4 4-4v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        70882: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M8 10c0-2.21 1.79-4 4-4v2c-1.1 0-2 .9-2 2H8zm12 1c0 4.27-2.69 8.01-6.44 8.83L15 22H9l1.45-2.17C6.7 19.01 4 15.27 4 11c0-4.84 3.46-9 8-9s8 4.16 8 9zm-8 7c3.19 0 6-3 6-7s-2.81-7-6-7-6 3-6 7 2.81 7 6 7z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        915796: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 40 40", children: a.createElement("g", null, a.createElement("path", { clipRule: "evenodd", d: "M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20zm-9.41-25.128l9.23-4.103 9.231 4.103v3.077H10.59zm4.102 4.102h-2.051v7.18h2.051zM10.59 29.231V27.18h18.46v2.05zm14.359-10.257h2.05v7.18h-2.05zm-8.206 0h2.052v7.18h-2.052zm4.103 0h2.051v7.18h-2.05z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            o.metadata = { width: 40, height: 40 };
            const c = o;
        },
        442787: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zM9.145 16.033c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-5.046c0-.414.336-.75.75-.75s.75.336.75.75v5.046zm3.605 0c0 .414-.336.75-.75.75s-.75-.336-.75-.75V6.95c0-.415.336-.75.75-.75s.75.335.75.75v9.083zm3.605 0c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-6.56c0-.414.336-.75.75-.75s.75.336.75.75v6.56z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        355586: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { clipRule: "evenodd", d: "M2.062 9h2.876C4.77 7.643 4.261 6.393 3.5 5.335 2.74 6.393 2.231 7.644 2.062 9zm2.823-5.151C6.017 5.298 6.759 7.069 6.95 9H9V2.062c-1.554.194-2.97.833-4.115 1.787zM11 2.062V9h2.05c.191-1.931.933-3.702 2.065-5.151-1.145-.954-2.56-1.593-4.115-1.787zm5.5 3.273C15.74 6.393 15.23 7.643 15.062 9h2.876c-.169-1.356-.678-2.607-1.438-3.665zM17.938 11h-2.876c.169 1.357.677 2.607 1.438 3.665.76-1.058 1.269-2.309 1.438-3.665zm-2.823 5.151c-1.132-1.449-1.874-3.22-2.066-5.151H11v6.938c1.554-.194 2.97-.833 4.115-1.787zM9 17.938V11H6.95c-.191 1.931-.933 3.702-2.065 5.151 1.145.954 2.56 1.593 4.115 1.787zm-5.5-3.273c.76-1.058 1.27-2.308 1.438-3.665H2.062c.169 1.356.678 2.607 1.438 3.665zM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        394123: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M15.636 11.671c2.079-.583 3.093-2.18 3.093-3.929 0-2.307-1.471-4.741-5.983-4.741H5.623V21h7.579c4.411 0 6.008-2.484 6.008-4.994 0-2.383-1.343-3.955-3.574-4.335zm-3.295-6.287c2.535 0 3.27 1.319 3.27 2.662 0 1.242-.583 2.611-3.27 2.611H8.69V5.384h3.651zM8.69 18.617v-5.628h4.208c2.231 0 3.194 1.166 3.194 2.738 0 1.547-.887 2.89-3.397 2.89H8.69z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        322771: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M2.998 8.5c0-1.38 1.119-2.5 2.5-2.5h9c1.381 0 2.5 1.12 2.5 2.5v14.12l-7-3.5-7 3.5V8.5zM18.5 2H8.998c-1.105 0-2 .9-2 2H18.5c.276 0 .5.22.5.5v9.82l-.002-.01v2.28L21 17.68V4.5C21 3.12 19.881 2 18.5 2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        758052: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M22 15v-2h-3v-1.63l2.86-1.48-.92-1.78-1.97 1.02c-.15-1.04-.95-1.87-1.97-2.08V7c0-2.76-2.24-5-5-5S7 4.24 7 7v.05c-1.02.21-1.81 1.04-1.97 2.07L3.05 8.11l-.91 1.78L5 11.36V13H2v2h3c0 .53.06 1.05.17 1.56l-3.03 1.55.91 1.78 2.85-1.46C7.1 20.56 9.38 22 12 22s4.9-1.44 6.1-3.57l2.84 1.46.91-1.78-3.02-1.55c.11-.5.17-1.03.17-1.56h3zM12 4c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm5 11c0 .61-.11 1.19-.3 1.72C15.99 18.64 14.15 20 12 20s-3.99-1.36-4.7-3.28C7.11 16.19 7 15.61 7 15V9.5c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5V15z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        928965: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M9.697 3h4.606l3 2H19c1.381 0 2.5 1.119 2.5 2.5v11c0 1.381-1.119 2.5-2.5 2.5H5c-1.381 0-2.5-1.119-2.5-2.5v-11C2.5 6.119 3.619 5 5 5h1.697l3-2zm.606 2l-3 2H5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5h-2.303l-3-2h-3.394zM12 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        839: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm16 6.882l2 1V9.618l-2 1v2.764zM4.508 6c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h11c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5h-11zm5.5 4c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.896-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        502940: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M15.985 8.264c.215.227.573.227.775 0l1.077-1.181c.228-.227.215-.636-.026-.881-.846-.778-1.83-1.37-2.894-1.745l.34-1.726c.073-.377-.194-.731-.551-.731H12.62c-.13.001-.256.05-.356.138-.1.087-.17.209-.195.343l-.301 1.536c-2.774.15-5.125 1.635-5.125 4.678 0 2.635 1.942 3.766 3.996 4.543 1.942.781 2.972 1.072 2.972 2.171 0 1.131-1.025 1.794-2.541 1.794-1.378 0-2.825-.486-3.945-1.671-.052-.055-.114-.099-.182-.129-.068-.03-.14-.045-.214-.045-.074 0-.147.016-.215.045-.068.03-.13.074-.181.129L5.17 16.758c-.11.116-.171.273-.171.436 0 .164.061.32.17.436.905.94 2.05 1.622 3.357 1.999l-.32 1.621c-.072.378.19.727.548.732l2.088.018c.132 0 .26-.047.362-.135.102-.088.172-.21.198-.346l.302-1.54c3.337-.237 5.37-2.176 5.37-5.006 0-2.607-2.025-3.707-4.48-4.601-1.404-.55-2.618-.927-2.618-2.058 0-1.1 1.133-1.535 2.27-1.535 1.447 0 2.838.631 3.746 1.494l-.008-.01z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        487552: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        97301: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(717683),
                o = r(347101);
            const c = (e = {}) => {
                const t = a.useContext(n.Z),
                    { direction: r } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style, t && o.Z.iconRTL], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M15.043 3.54l1.414 1.42L9.414 12l7.043 7.04-1.414 1.42L6.586 12l8.457-8.46z" })) }, { writingDirection: r });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
        480684: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M8.5 3h-4C3.122 3 2 4.121 2 5.5v13C2 19.879 3.122 21 4.5 21h4c1.378 0 2.5-1.121 2.5-2.5v-13C11 4.121 9.878 3 8.5 3zM9 18.5c0 .275-.224.5-.5.5h-4c-.276 0-.5-.225-.5-.5v-13c0-.275.224-.5.5-.5h4c.276 0 .5.225.5.5v13zM19.5 3h-4C14.122 3 13 4.121 13 5.5v13c0 1.379 1.122 2.5 2.5 2.5h4c1.378 0 2.5-1.121 2.5-2.5v-13C22 4.121 20.878 3 19.5 3zm.5 15.5c0 .275-.224.5-.5.5h-4c-.276 0-.5-.225-.5-.5v-13c0-.275.224-.5.5-.5h4c.276 0 .5.225.5.5v13z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        793202: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M4.5 3h-1C2.122 3 1 4.121 1 5.5v13C1 19.879 2.122 21 3.5 21h1C5.878 21 7 19.879 7 18.5v-13C7 4.121 5.878 3 4.5 3zM5 18.5c0 .275-.224.5-.5.5h-1c-.276 0-.5-.225-.5-.5v-13c0-.275.224-.5.5-.5h1c.276 0 .5.225.5.5v13zM12.5 3h-1C10.122 3 9 4.121 9 5.5v13c0 1.379 1.122 2.5 2.5 2.5h1c1.378 0 2.5-1.121 2.5-2.5v-13C15 4.121 13.878 3 12.5 3zm.5 15.5c0 .275-.224.5-.5.5h-1c-.276 0-.5-.225-.5-.5v-13c0-.275.224-.5.5-.5h1c.276 0 .5.225.5.5v13zM20.5 3h-1C18.122 3 17 4.121 17 5.5v13c0 1.379 1.122 2.5 2.5 2.5h1c1.378 0 2.5-1.121 2.5-2.5v-13C23 4.121 21.878 3 20.5 3zm.5 15.5c0 .275-.224.5-.5.5h-1c-.276 0-.5-.225-.5-.5v-13c0-.275.224-.5.5-.5h1c.276 0 .5.225.5.5v13z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        438696: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M7.323 2h11.443l-3 5h6.648L6.586 22.83 7.847 14H2.523l4.8-12zm1.354 2l-3.2 8h4.676l-.739 5.17L17.586 9h-5.352l3-5H8.677zM18 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        404408: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M10.93 9.352v2.443h2.48v-.78l-1.66-1.663" }), a.createElement("path", { d: "M11.37 7.158c-.33 0-.6.27-.6.6v.554h1.16c.006 0 .01.003.017.003.14-.005.28.043.385.15L14.3 10.43c.047.05.085.107.112.17.026.064.04.132.04.2v3.162h.56c.33 0 .6-.27.6-.6V8.81l-1.655-1.655H11.37z" }), a.createElement("path", { d: "M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm4.652 12.11c0 .907-.734 1.64-1.64 1.64h-.56v1.276c0 .552-.448 1-1 1H8.448c-.552 0-1-.448-1-1V9.312c0-.552.448-1 1-1H9.73v-.554c0-.906.734-1.64 1.64-1.64h2.802c.068 0 .135.014.2.04.063.027.12.065.17.113l1.957 1.96c.047.048.086.106.112.17.026.063.04.13.04.2v4.76z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        390587: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        164174: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M8 18V6H4.5c-.28 0-.5.22-.5.5v11c0 .28.22.5.5.5H8zm11.5 0c.28 0 .5-.22.5-.5v-11c0-.28-.22-.5-.5-.5H16v12h3.5zM10 6v12h4V6h-4zM4.5 20C3.12 20 2 18.88 2 17.5v-11C2 5.12 3.12 4 4.5 4h15C20.88 4 22 5.12 22 6.5v11c0 1.38-1.12 2.5-2.5 2.5h-15z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        960419: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M9 3h6v2h-2v1.05c4.4.44 8 3.73 8 7.95v3h-8v2h8v2H3v-2h8v-2H3v-3c0-4.22 3.6-7.51 8-7.95V5H9V3z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        875516: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM15 19H9v-2h6v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        932466: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13zm6.07 6.96l.99-.79c.33-.26.56-.53.7-.8.15-.27.22-.57.22-.91 0-.41-.12-.74-.38-.97s-.62-.35-1.09-.35-.85.12-1.13.37c-.26.25-.4.59-.4 1.03 0 .2.03.42.08.65l-2.07-.15c-.06-.29-.09-.55-.09-.79 0-.84.33-1.51.98-2.01.67-.49 1.55-.74 2.66-.74 1.17 0 2.07.24 2.71.73.63.48.95 1.16.95 2.04 0 .98-.47 1.86-1.4 2.65l-.87.73c-.17.15-.29.28-.36.4-.06.11-.09.26-.09.45v.46h-2.1v-.67c0-.3.06-.55.17-.75.12-.2.29-.39.52-.58zm-.52 5.17c.24.25.56.37.93.37.39 0 .7-.12.94-.37.25-.25.37-.56.37-.94 0-.39-.12-.7-.37-.95-.24-.25-.55-.37-.94-.37-.37 0-.69.12-.93.37s-.36.56-.36.95c0 .38.12.69.36.94z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        836397: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(717683),
                o = r(347101);
            const c = (e = {}) => {
                const t = a.useContext(n.Z),
                    { direction: r } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style, t && o.Z.iconRTL], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12.04 2.54l1.42 1.42L5.41 12l8.05 8.04-1.42 1.42L2.59 12l9.45-9.46zm7 0l1.42 1.42L12.41 12l8.05 8.04-1.42 1.42L9.59 12l9.45-9.46z" })) }, { writingDirection: r });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
        828314: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 1.59l4.21 4.2-1.42 1.42L13 5.41V11h5.59l-1.8-1.79 1.42-1.42 4.2 4.21-4.2 4.21-1.42-1.42 1.8-1.79H13v5.59l1.79-1.8 1.42 1.42-4.21 4.2-4.21-4.2 1.42-1.42 1.79 1.8V13H5.41l1.8 1.79-1.42 1.42L1.59 12l4.2-4.21 1.42 1.42L5.41 11H11V5.41l-1.79 1.8-1.42-1.42L12 1.59z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        678773: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M19.996 10h-16V8h16v2zm0 6h-16v-2h16v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        168661: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M22 19v2h-7.5l2-2H22zM3.35 14.232c-.97.977-.97 2.559 0 3.536L6.59 21h5.32l9.78-9.774c.95-.949.98-2.477.07-3.463l-3.97-4.294c-.96-1.043-2.6-1.076-3.6-.072L3.35 14.232zm16.94-5.113c.18.197.17.503-.02.693l-5.52 5.524L9.91 10.5l5.69-5.689c.2-.201.53-.194.72.014l3.97 4.294zM11.09 19H7.41l-2.64-2.646c-.2-.196-.2-.512 0-.708l3.73-3.732 4.84 4.836L11.09 19zM1.29 7.707l2 2 1.42-1.414-2-2-1.42 1.414zM3 11H0v2h3v-2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        945318: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M15.793 2.793c1.495-1.495 3.919-1.495 5.414 0 1.495 1.495 1.495 3.919 0 5.414L18.414 11l2 2L19 14.414l-2-2-7.115 7.116c-.908.907-2.063 1.526-3.322 1.777l-3.367.674-1.177-1.177.674-3.367c.251-1.258.87-2.414 1.777-3.322L11.586 7l-2-2L11 3.586l2 2 2.793-2.793zM13 8.414L5.885 15.53c-.629.628-1.057 1.428-1.231 2.299l-.379 1.896 1.896-.379c.871-.174 1.671-.602 2.299-1.231L15.586 11 13 8.414z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        517747: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14 6V3h2v8h-2V8H3V6h11zm7 2h-3.5V6H21v2zM8 16v-3h2v8H8v-3H3v-2h5zm13 2h-9.5v-2H21v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        194417: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M16 3v8h-3V8.5H3v-3h10V3h3zm5 12.5h-9v3h9v-3zM10 21v-8H7v2.5H3v3h4V21h3zm8-12.5h3v-3h-3v3z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        521058: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14.83 13.82c.14.28.33.67.52 1.12.468 1.013.736 2.106.79 3.22-.073 1.544-.865 2.965-2.14 3.84 3.767-.694 6.513-3.96 6.55-7.79 0-6-4.7-10.25-9.5-13v.09c.143 1.768-.142 3.545-.83 5.18-.473-.722-1.068-1.354-1.76-1.87l-.26-.24c-.541 1.036-1.146 2.038-1.81 3C5 9.5 3.5 11.7 3.5 14.25c-.083 2.252.831 4.426 2.5 5.94 1.038.895 2.282 1.517 3.62 1.81-.11-.097-.211-.204-.3-.32-.465-.645-.704-1.425-.68-2.22.062-1.326.724-2.552 1.8-3.33l.66-.56c.836-.649 1.585-1.402 2.23-2.24l.68-.92.58 1 .24.41z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        376278: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M11 1.28v.09c0 1.79 0 3.53-.829 5.18-.42-.78-1.061-1.36-1.707-1.94l-.268-.24c-.501 1-1.151 1.98-1.807 2.97C4.959 9.5 3.5 11.7 3.5 14.25c0 2.52.949 4.55 2.538 5.94 1.437 1.26 3.334 1.94 5.378 2.04.122.01.539.02.584.02 4.615 0 8.5-3.37 8.5-8C20.5 8.29 15.797 4 11 1.28zm2.534 18.08c-.521.56-1.144.87-1.681.89-.111 0-.221-.01-.331-.01-.454-.05-.684-.23-.82-.41-.192-.24-.313-.64-.313-1.14 0-.75.362-1.26 1.214-2.02.166-.14.35-.3.548-.46.47-.4 1.017-.86 1.56-1.41l.031.07c.35.83.647 1.78.647 2.54 0 .65-.317 1.38-.855 1.95zm2.572-.42c.18-.48.283-1 .283-1.53 0-1.17-.429-2.43-.804-3.32-.194-.46-.388-.85-.533-1.13-.073-.14-1.02-1.78-1.02-1.78l-.901 1.23c-.678.92-1.425 1.55-2.18 2.19-.224.19-.449.38-.673.58-.94.83-1.889 1.85-1.889 3.51 0 .22.014.44.047.67C6.673 18.38 5.5 16.6 5.5 14.25c0-2.01 1.133-3.61 2.246-5.18.284-.4.568-.8.831-1.21.419.89.419 2.18.173 3.08l.117-.11c1.971-1.7 3.514-3.03 3.969-6.06.632.47 1.415 1.12 2.195 1.93 1.79 1.84 3.469 4.42 3.469 7.55 0 1.92-.921 3.61-2.394 4.69z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        745088: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M11 18v2H4.502c-1.378 0-2.5-1.121-2.5-2.5V3h8.535l2 3h9.465v7h-2V8h-8.535l-2-3H4.002v12.5c0 .275.224.5.5.5H11zm8.502 0h-2.073l2-2-1.414-1.414L13.601 19l4.414 4.414L19.429 22l-2-2H23v-2h-3.498z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        124692: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M22.96 15.56l-1.59-6.91C20.74 5.93 18.32 4 15.52 4H8.48c-2.8 0-5.22 1.93-5.85 4.65l-1.59 6.91c-.41 1.76.54 3.54 2.22 4.2 1.83.71 3.89-.17 4.65-1.98L8.66 16h6.68l.75 1.78c.76 1.81 2.82 2.69 4.65 1.98 1.68-.66 2.63-2.44 2.22-4.2zM8.5 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6.5-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475.0d16f25a.js.map

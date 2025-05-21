"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"],
    {
        664064: (e, t, r) => {
            r.d(t, { Z: () => c });
            var a = r(807896),
                n = r(202784),
                l = r(523561);
            const s = n.forwardRef(i);
            function i(e, t) {
                return n.createElement(o, (0, a.Z)({}, e, { ref: t }));
            }
            const o = (0, l.Z)({
                    loader: () =>
                        Promise.all([r.e("loader.Confetti-6107ac1a"), r.e("loader.Confetti-d728816b"), r.e("loader.Confetti-229eafb5"), r.e("loader.Confetti-5ccade72")])
                            .then(r.bind(r, 620151))
                            .then((e) => ({ default: e.Confetti })),
                }),
                c = s;
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a = r(202784),
                n = r(325686),
                l = r(392237);
            function s({ spacing: e, style: t }) {
                return a.createElement(n.Z, { role: "separator", style: [i.divider, { marginVertical: null != e ? l.default.theme.spaces[e] : void 0 }, t] });
            }
            const i = l.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => p });
            var a = r(202784),
                n = r(476984),
                l = r.n(n),
                s = r(143778),
                i = r(750410),
                o = r(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class p extends a.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !l()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: n, icon: l, loadingMessage: s, onRequestRetry: d, render: p, renderFailure: m, retryMessage: y, retryable: g } = this.props;
                    switch (n) {
                        case c:
                            return g ? a.createElement(i.Z, { icon: l, onRequestRetry: d, retryMessage: y }) : r ? a.createElement(o.m, { failureMessage: r }) : m();
                        case u:
                            return a.createElement(o.J, { "aria-label": e, color: t, loadingMessage: s });
                        case h:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
        620522: (e, t, r) => {
            r.d(t, { Z: () => a });
            const a = r(202784).createContext({ refsMap: {} });
        },
        738584: (e, t, r) => {
            r.d(t, { o: () => p, Z: () => g });
            var a = r(807896),
                n = r(202784),
                l = r(928316),
                s = r(682474),
                i = r(392237),
                o = r(893164),
                c = r(395367),
                d = r(908478);
            function u(e) {
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
            function p({ children: e, periodic: t }) {
                const r = t ? m.PeriodicContext.Consumer : m.Context.Consumer;
                return n.createElement(r, null, (t) => {
                    const { aspectRatio: r, containerRef: a, guestsState: n, playerApi: l, playerState: s } = t;
                    return l && a && s ? e({ aspectRatio: r, guestsState: n, playerApi: l, playerState: s, containerRef: a }) : null;
                });
            }
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._cache = { stablePlayerState: u(null) }),
                        (this.state = { hasError: null, guestsState: null, playerApi: null, playerState: null, stablePlayerState: null }),
                        (this._renderCustomOverlay = () => {
                            const { children: e, enablePiP: t } = this.props,
                                { guestsState: r, playerApi: a, stablePlayerState: n } = this.state;
                            return a && e ? ("function" == typeof e ? e({ enablePiP: t, guestsState: r, playerApi: a, playerState: n, containerRef: this._containerRef }) : e) : null;
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
                        { additionalBadges: i, aspectRatio: d, basePlayerClass: u, children: h, includeDisputeLinkInCopyrightErrorMessage: p, isFullScreen: g, objectFitVideo: v, onApiReady: b, onScroll: f, onStateUpdate: S, playerId: C, size: E, ...P } = this.props,
                        Z = { aspectRatio: this.props.aspectRatio, guestsState: e, playerApi: t, playerState: r, containerRef: this._containerRef },
                        _ = { ...Z, playerState: l };
                    return n.createElement(
                        s.Z,
                        { isFullScreen: g, onScroll: f, ratio: d, style: [y.root, y[E]] },
                        this.state.hasError
                            ? n.createElement(o.Z, { onReloadPress: this._handleReload })
                            : n.createElement(
                                  m.Context.Provider,
                                  { value: _ },
                                  n.createElement(
                                      m.PeriodicContext.Provider,
                                      { value: Z },
                                      n.createElement(c.Z.RegistrationContext.Consumer, null, ({ registerPlayer: e }) => n.createElement(u, (0, a.Z)({}, P, { customOverlay: this._renderCustomOverlay(), displayOptions: { objectFitVideo: v }, setPlayerApi: this._handlePlayerApi(e) }))),
                                  ),
                              ),
                    );
                }
            }
            (m.Consumer = p), (m.defaultProps = { aspectRatio: i.default.theme.aspectRatios.landscape, size: "fill" }), (m.Context = n.createContext({ aspectRatio: i.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null })), (m.PeriodicContext = n.createContext({ aspectRatio: i.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null }));
            const y = i.default.create({ root: { position: "relative" }, fill: { width: "100%", height: "100%" }, small: { width: 480, height: 270 }, medium: { width: 640, height: 360 }, large: { width: 800, height: 450 } }),
                g = m;
        },
        395367: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a,
                n = r(202784);
            class l extends n.Component {
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
            class s extends n.Component {
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
                    return n.createElement(s.RegistrationContext.Provider, { value: this._registrationContext }, n.createElement(s.ProviderContext.Provider, { value: this.state }, this.props.children));
                }
            }
            (a = s), (s.MetadataSubscriber = ({ children: e, playerId: t }) => n.createElement(a.ProviderContext.Consumer, null, ({ players: r }) => n.createElement(l, { playerApi: r && r[t] }, e))), (s.RegistrationContext = n.createContext({ registerPlayer: void 0 })), (s.ProviderContext = n.createContext({ players: {} }));
        },
        893164: (e, t, r) => {
            r.d(t, { Z: () => p });
            var a = r(202784),
                n = r(325686),
                l = r(332920),
                s = r.n(l),
                i = r(355830),
                o = r(731708),
                c = r(154003),
                d = r(992942),
                u = r(392237);
            const h = s().a9edea48;
            function p(e) {
                const { displayBackgroundImage: t = !1, errorMessage: r, iconPlayError: l, imageSrc: s, onReloadPress: p } = e;
                return a.createElement(n.Z, { style: [u.default.absoluteFill, t ? null : m.blankOverlay] }, t ? a.createElement(a.Fragment, null, a.createElement(n.Z, { style: m.backgroundImage }, s && a.createElement(d.Z, { resizeMode: "cover", source: s, style: u.default.absoluteFill })), a.createElement(n.Z, { style: m.overlay })) : null, a.createElement(n.Z, { style: m.errorContainer }, a.createElement(n.Z, null, l ? a.createElement(i.default, { style: m.playErrorIcon }) : null), a.createElement(n.Z, { focusable: !0 }, a.createElement(o.ZP, { style: t ? m.errorMsgTextWhite : m.errorMsgTextGray }, r)), p ? a.createElement(c.ZP, { onPress: p, style: m.buttonContainer, type: "brandFilled" }, h) : null));
            }
            const m = u.default.create((e) => ({ backgroundImage: { ...u.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...u.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack77 }, blankOverlay: { backgroundColor: e.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: e.spaces.space32 }, errorMsgTextWhite: { color: e.colors.white, textAlign: "center", marginBottom: e.spaces.space20 }, errorMsgTextGray: { color: e.colors.gray700, textAlign: "center", marginBottom: e.spaces.space20 }, playErrorIcon: { fill: e.colors.gray700, height: e.spaces.space48, width: e.spaces.space48, marginHorizontal: "auto", paddingBottom: e.spaces.space20, verticalAlign: "middle" } }));
        },
        127957: (e, t, r) => {
            r.d(t, { Z: () => n });
            var a = r(202784);
            const n = (0, r(523561).Z)({ loader: () => r.e("loaders.video.VideoPlayer").then(r.bind(r, 962159)), renderPlaceholder: () => a.createElement("div", { "data-testid": "videoPlayer" }) });
        },
        546351: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                n = r(890601),
                l = r(783427),
                s = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M9.53 4c.41.01.77.28.91.66l4.14 11.6L16.84 11H22v2h-3.84l-2.74 6.39c-.16.38-.54.62-.95.61s-.77-.28-.91-.66L9.42 7.74 7.16 13H2v-2h3.84l2.74-6.39c.16-.38.54-.62.95-.61z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const o = i;
        },
        447406: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                n = r(890601),
                l = r(783427),
                s = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M8 11.498l1.5.997m6.5-.997l-1.5.997m5.75-1.534c0 6.157-6.188 11.289-8.25 11.289-2.063 0-8.25-5.132-8.25-11.29 0-4.534 3.694-8.21 8.25-8.21s8.25 3.676 8.25 8.21zm-13-.165c2.824 0 3 .907 3 2.4-2.578 0-3-.9-3-2.4zm9.5 0c-2.824 0-3 .907-3 2.4 2.578 0 3-.9 3-2.4z", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const o = i;
        },
        375808: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                n = r(890601),
                l = r(783427),
                s = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M21 6H3V4h18v2zm-8 7H3v-2h10v2zm8 7H3v-2h18v2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const o = i;
        },
        703082: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                n = r(890601),
                l = r(783427),
                s = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13zm8.267 5.921h1.447v3.457h1.337v-3.457H18V9.654h-4.233v1.267zm-1.285-1.266h-1.336v4.723h3.121v-1.349h-1.785V9.655zM7.51 9.621l-1.76 4.757h1.289l.295-.843H8.93l.301.843h1.405l-1.76-4.757H7.51zm.162 2.895l.465-1.343.461 1.343h-.926z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const o = i;
        },
        893931: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                n = r(890601),
                l = r(783427),
                s = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M21 13.5v6c0 .663-.263 1.299-.732 1.768-.47.469-1.105.732-1.768.732h-13c-.663 0-1.299-.263-1.768-.732S3 20.163 3 19.5v-6zm0-1.5H3c-.265 0-.52-.105-.707-.293C2.105 11.52 2 11.265 2 11V9c0-.265.105-.52.293-.707C2.48 8.105 2.735 8 3 8h.652c-.26-.503-.397-1.06-.4-1.625 0-.75.234-1.483.669-2.095.434-.613 1.048-1.075 1.757-1.323.708-.249 1.477-.271 2.198-.064.722.207 1.362.633 1.831 1.22l2.366 2.956L14.224 4.2c.538-.735 1.333-1.24 2.228-1.415.894-.173 1.82-.003 2.595.477.774.48 1.338 1.235 1.58 2.114.24.879.141 1.816-.279 2.624H21c.265 0 .52.105.707.293.188.188.293.442.293.707v2c0 .265-.105.52-.293.707-.187.188-.442.293-.707.293zm-7.125-4h3.25c.277 0 .55-.07.791-.206.242-.135.446-.329.591-.565.146-.235.229-.504.241-.78.013-.278-.046-.553-.17-.8-.123-.248-.309-.46-.537-.616-.23-.157-.494-.251-.77-.276s-.554.02-.807.133-.473.288-.639.51zM5.25 6.375c0 .43.172.844.477 1.149.304.304.717.476 1.148.476h3.381L8.145 5.361c-.21-.263-.497-.455-.82-.548-.325-.093-.67-.083-.987.028-.318.112-.594.319-.788.594-.195.275-.3.603-.3.94z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const o = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475.400ce67a.js.map

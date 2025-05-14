"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"],
    {
        664064: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a = r(807896),
                l = r(202784),
                i = r(523561);
            const n = l.forwardRef(o);
            function o(e, t) {
                return l.createElement(c, (0, a.Z)({}, e, { ref: t }));
            }
            const c = (0, i.Z)({
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
                l = r(325686),
                i = r(392237);
            function n({ spacing: e, style: t }) {
                return a.createElement(l.Z, { role: "separator", style: [o.divider, { marginVertical: null != e ? i.default.theme.spaces[e] : void 0 }, t] });
            }
            const o = i.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => m });
            var a = r(202784),
                l = r(476984),
                i = r.n(l),
                n = r(143778),
                o = r(750410),
                c = r(682830);
            const s = "failed",
                d = "loaded",
                h = "loading",
                u = "none";
            class m extends a.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !i()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: l, icon: i, loadingMessage: n, onRequestRetry: d, render: m, renderFailure: v, retryMessage: g, retryable: p } = this.props;
                    switch (l) {
                        case s:
                            return p ? a.createElement(o.Z, { icon: i, onRequestRetry: d, retryMessage: g }) : r ? a.createElement(c.m, { failureMessage: r }) : v();
                        case h:
                            return a.createElement(c.J, { "aria-label": e, color: t, loadingMessage: n });
                        case u:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: n.Z, retryable: !0 };
        },
        620522: (e, t, r) => {
            r.d(t, { Z: () => a });
            const a = r(202784).createContext({ refsMap: {} });
        },
        738584: (e, t, r) => {
            r.d(t, { o: () => m, Z: () => p });
            var a = r(807896),
                l = r(202784),
                i = r(928316),
                n = r(682474),
                o = r(392237),
                c = r(893164),
                s = r(395367),
                d = r(908478);
            function h(e) {
                let t = u(e);
                return (e) => {
                    const r = u(e);
                    return (0, d.Z)(t, r) || (t = r), t;
                };
            }
            function u(e) {
                if (!e || "object" != typeof e) return e;
                const t = JSON.parse(JSON.stringify(e));
                return delete t.dataUsageBytes, (t.tracks = t.tracks.map((e) => ("number" == typeof e.currentTimeMs && delete e.currentTimeMs, e))), t;
            }
            function m({ children: e, periodic: t }) {
                const r = t ? v.PeriodicContext.Consumer : v.Context.Consumer;
                return l.createElement(r, null, (t) => {
                    const { aspectRatio: r, containerRef: a, guestsState: l, playerApi: i, playerState: n } = t;
                    return i && a && n ? e({ aspectRatio: r, guestsState: l, playerApi: i, playerState: n, containerRef: a }) : null;
                });
            }
            class v extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this._cache = { stablePlayerState: h(null) }),
                        (this.state = { hasError: null, guestsState: null, playerApi: null, playerState: null, stablePlayerState: null }),
                        (this._renderCustomOverlay = () => {
                            const { children: e, enablePiP: t } = this.props,
                                { guestsState: r, playerApi: a, stablePlayerState: l } = this.state;
                            return a && e ? ("function" == typeof e ? e({ enablePiP: t, guestsState: r, playerApi: a, playerState: l, containerRef: this._containerRef }) : e) : null;
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
                        { additionalBadges: o, aspectRatio: d, basePlayerClass: h, children: u, includeDisputeLinkInCopyrightErrorMessage: m, isFullScreen: p, objectFitVideo: y, onApiReady: b, onScroll: z, onStateUpdate: Z, playerId: f, size: w, ...E } = this.props,
                        C = { aspectRatio: this.props.aspectRatio, guestsState: e, playerApi: t, playerState: r, containerRef: this._containerRef },
                        M = { ...C, playerState: i };
                    return l.createElement(
                        n.Z,
                        { isFullScreen: p, onScroll: z, ratio: d, style: [g.root, g[w]] },
                        this.state.hasError
                            ? l.createElement(c.Z, { onReloadPress: this._handleReload })
                            : l.createElement(
                                  v.Context.Provider,
                                  { value: M },
                                  l.createElement(
                                      v.PeriodicContext.Provider,
                                      { value: C },
                                      l.createElement(s.Z.RegistrationContext.Consumer, null, ({ registerPlayer: e }) => l.createElement(h, (0, a.Z)({}, E, { customOverlay: this._renderCustomOverlay(), displayOptions: { objectFitVideo: y }, setPlayerApi: this._handlePlayerApi(e) }))),
                                  ),
                              ),
                    );
                }
            }
            (v.Consumer = m), (v.defaultProps = { aspectRatio: o.default.theme.aspectRatios.landscape, size: "fill" }), (v.Context = l.createContext({ aspectRatio: o.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null })), (v.PeriodicContext = l.createContext({ aspectRatio: o.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null }));
            const g = o.default.create({ root: { position: "relative" }, fill: { width: "100%", height: "100%" }, small: { width: 480, height: 270 }, medium: { width: 640, height: 360 }, large: { width: 800, height: 450 } }),
                p = v;
        },
        395367: (e, t, r) => {
            r.d(t, { Z: () => n });
            var a,
                l = r(202784);
            class i extends l.Component {
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
            class n extends l.Component {
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
                    return l.createElement(n.RegistrationContext.Provider, { value: this._registrationContext }, l.createElement(n.ProviderContext.Provider, { value: this.state }, this.props.children));
                }
            }
            (a = n), (n.MetadataSubscriber = ({ children: e, playerId: t }) => l.createElement(a.ProviderContext.Consumer, null, ({ players: r }) => l.createElement(i, { playerApi: r && r[t] }, e))), (n.RegistrationContext = l.createContext({ registerPlayer: void 0 })), (n.ProviderContext = l.createContext({ players: {} }));
        },
        893164: (e, t, r) => {
            r.d(t, { Z: () => m });
            var a = r(202784),
                l = r(325686),
                i = r(674132),
                n = r.n(i),
                o = r(355830),
                c = r(731708),
                s = r(154003),
                d = r(992942),
                h = r(392237);
            const u = n().a9edea48;
            function m(e) {
                const { displayBackgroundImage: t = !1, errorMessage: r, iconPlayError: i, imageSrc: n, onReloadPress: m } = e;
                return a.createElement(l.Z, { style: [h.default.absoluteFill, t ? null : v.blankOverlay] }, t ? a.createElement(a.Fragment, null, a.createElement(l.Z, { style: v.backgroundImage }, n && a.createElement(d.Z, { resizeMode: "cover", source: n, style: h.default.absoluteFill })), a.createElement(l.Z, { style: v.overlay })) : null, a.createElement(l.Z, { style: v.errorContainer }, a.createElement(l.Z, null, i ? a.createElement(o.default, { style: v.playErrorIcon }) : null), a.createElement(l.Z, { focusable: !0 }, a.createElement(c.ZP, { style: t ? v.errorMsgTextWhite : v.errorMsgTextGray }, r)), m ? a.createElement(s.ZP, { onPress: m, style: v.buttonContainer, type: "brandFilled" }, u) : null));
            }
            const v = h.default.create((e) => ({ backgroundImage: { ...h.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...h.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack77 }, blankOverlay: { backgroundColor: e.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: e.spaces.space32 }, errorMsgTextWhite: { color: e.colors.white, textAlign: "center", marginBottom: e.spaces.space20 }, errorMsgTextGray: { color: e.colors.gray700, textAlign: "center", marginBottom: e.spaces.space20 }, playErrorIcon: { fill: e.colors.gray700, height: e.spaces.space48, width: e.spaces.space48, marginHorizontal: "auto", paddingBottom: e.spaces.space20, verticalAlign: "middle" } }));
        },
        127957: (e, t, r) => {
            r.d(t, { Z: () => l });
            var a = r(202784);
            const l = (0, r(523561).Z)({ loader: () => r.e("loaders.video.VideoPlayer").then(r.bind(r, 962159)), renderPlaceholder: () => a.createElement("div", { "data-testid": "videoPlayer" }) });
        },
        68657: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M15 5V3h3V0h2v3h3v2h-3v3h-2V5h-3zm-3-1.19c-.33-.04-.66-.06-1-.06-4.56 0-8.25 3.69-8.25 8.25 0 2.25.9 4.28 2.35 5.77C6.51 16.08 8.63 15 11 15s4.49 1.08 5.9 2.77c1.45-1.49 2.35-3.52 2.35-5.77 0-.34-.02-.67-.06-1h2.01c.03.33.05.66.05 1 0 5.66-4.59 10.25-10.25 10.25S.75 17.66.75 12 5.34 1.75 11 1.75c.34 0 .67.02 1 .05v2.01zM6.66 19.02c1.26.78 2.75 1.23 4.34 1.23s3.08-.45 4.34-1.23C14.3 17.78 12.74 17 11 17s-3.3.78-4.34 2.02zm6.09-8.77c0 .97-.78 1.75-1.75 1.75s-1.75-.78-1.75-1.75S10.03 8.5 11 8.5s1.75.78 1.75 1.75zM11 14c2.07 0 3.75-1.68 3.75-3.75S13.07 6.5 11 6.5s-3.75 1.68-3.75 3.75S8.93 14 11 14z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        264655: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M4.159 6.393l-2.409.89 2.366 3.56L3.5 12l.272.68c.404 1.01 1.544 1.512 2.563 1.128L10 12.426l.401 3.344 2.89-1.07 2.209-4.349 4.982-1.995c.615-.246 1.018-.842 1.018-1.505 0-.782-.56-1.453-1.33-1.594l-2.225-.407c-.36-.065-.727-.033-1.069.098-1.578.6-6.335 2.41-8.354 3.157-.572.212-1.207.154-1.733-.157L4.16 6.393zM2.5 19.5h19", fill: "none", stroke: "currentColor", strokeLinecap: "square", strokeWidth: "1.5" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        629195: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M21 6H3V4h18v2zm-4 7H7v-2h10v2zm4 7H3v-2h18v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        388941: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 4.25c-4.28 0-7.75 3.47-7.75 7.75s3.47 7.75 7.75 7.75c1.499 0 2.894-.424 4.078-1.158l1.318 2.125c-1.568.972-3.418 1.534-5.396 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.75 12 1.75 22.25 6.339 22.25 12c0 .534-.032 1.061-.08 1.549-.223 2.285-2.31 3.65-4.378 3.471-1.128-.098-2.114-.621-2.817-1.396-1.008 1.136-2.467 1.802-4.077 1.576-2.748-.386-4.354-3.149-3.973-5.86s2.686-4.924 5.434-4.538c.793.111 1.491.421 2.074.87l.038-.32 2.482.298-.584 4.861c-.122 1.015.621 1.93 1.64 2.019.927.081 1.605-.515 1.674-1.223.042-.426.068-.869.068-1.306 0-4.28-3.47-7.75-7.75-7.75H12zm.01 5.026c-1.08-.152-2.377.746-2.611 2.41s.765 2.885 1.845 3.036c1.08.152 2.377-.746 2.611-2.41.234-1.664-.765-2.884-1.845-3.036z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        890899: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M20.29 2.293L18.5 4.081C16.73 2.625 14.47 1.75 12 1.75 6.33 1.75 1.75 6.339 1.75 12c0 2.471.87 4.739 2.33 6.509l-1.79 1.784 1.42 1.414 18-18-1.42-1.414zM9.21 13.377c-.2-.498-.28-1.086-.19-1.725.25-1.769 1.65-2.798 2.89-2.623.41.057.79.242 1.12.525l-3.82 3.823zm5.24-5.245c-.6-.567-1.37-.958-2.26-1.083-2.58-.363-4.79 1.719-5.15 4.325-.18 1.243.08 2.487.68 3.487L5.5 17.086C4.4 15.685 3.75 13.919 3.75 12c0-4.556 3.69-8.25 8.25-8.25 1.91 0 3.68.655 5.08 1.754l-2.63 2.628zM7.2 21.06l1.49-1.497c1.02.442 2.13.687 3.31.687 1.59 0 3.08-.451 4.34-1.233l1.05 1.7c-1.57.972-3.42 1.533-5.39 1.533-1.74 0-3.37-.43-4.8-1.19zm4.07-4.069l4.72-4.722-.03.321c.03 1.145.92 2.122 2.1 2.23.91.083 1.62-.357 1.84-.99.2-.585.35-1.224.35-1.83 0-1.174-.25-2.29-.69-3.301l1.5-1.497c.76 1.432 1.19 3.065 1.19 4.798 0 .901-.21 1.77-.46 2.477-.59 1.731-2.34 2.478-3.91 2.334-1.24-.112-2.29-.729-3-1.626-.87 1.125-2.16 1.847-3.61 1.806z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        853485: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        355586: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { clipRule: "evenodd", d: "M2.062 9h2.876C4.77 7.643 4.261 6.393 3.5 5.335 2.74 6.393 2.231 7.644 2.062 9zm2.823-5.151C6.017 5.298 6.759 7.069 6.95 9H9V2.062c-1.554.194-2.97.833-4.115 1.787zM11 2.062V9h2.05c.191-1.931.933-3.702 2.065-5.151-1.145-.954-2.56-1.593-4.115-1.787zm5.5 3.273C15.74 6.393 15.23 7.643 15.062 9h2.876c-.169-1.356-.678-2.607-1.438-3.665zM17.938 11h-2.876c.169 1.357.677 2.607 1.438 3.665.76-1.058 1.269-2.309 1.438-3.665zm-2.823 5.151c-1.132-1.449-1.874-3.22-2.066-5.151H11v6.938c1.554-.194 2.97-.833 4.115-1.787zM9 17.938V11H6.95c-.191 1.931-.933 3.702-2.065 5.151 1.145.954 2.56 1.593 4.115 1.787zm-5.5-3.273c.76-1.058 1.27-2.308 1.438-3.665H2.062c.169 1.356.678 2.607 1.438 3.665zM0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        418645: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M13.35 12.4c-.116-.41-.348-.78-.646-1.08-.712-.71-1.589-.93-2.367-.84-.265.05-.431-.27-.265-.47.612-.74 1.589-1.15 2.649-.97 1.15.21 2.078 1.14 2.243 2.27.066.37.05.72-.025 1.06-.19.81-1.341.85-1.581.05l-.008-.02zm5.148-.4c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5 6.5 2.91 6.5 6.5zm-6.5 4.5c2.485 0 4.5-2.01 4.5-4.5s-2.015-4.5-4.5-4.5-4.5 2.01-4.5 4.5 2.015 4.5 4.5 4.5zm10.25-4.47c0 5.67-4.601 10.27-10.277 10.27-1.664 0-3.237-.39-4.629-1.1l-5.593 1.05 1.045-5.59c-.704-1.39-1.1-2.97-1.1-4.63 0-5.68 4.601-10.28 10.277-10.28s10.277 4.6 10.277 10.28zM4.717 16.02l.173.31-.639 3.42 3.418-.64.314.17c1.181.65 2.54 1.02 3.988 1.02 4.571 0 8.277-3.7 8.277-8.27s-3.706-8.28-8.277-8.28-8.277 3.71-8.277 8.28c0 1.45.371 2.8 1.023 3.99z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        237066: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M11.998 7c-2.762 0-5 2.24-5 5s2.238 5 5 5 5-2.24 5-5-2.239-5-5-5zm2.941 5.37c-.19.81-1.341.85-1.581.05l-.008-.02c-.116-.41-.348-.78-.646-1.08-.712-.71-1.589-.93-2.367-.84-.265.05-.431-.27-.265-.47.612-.74 1.589-1.15 2.649-.97 1.15.21 2.078 1.14 2.243 2.27.066.37.05.72-.025 1.06zM11.971 1.75c-5.676 0-10.277 4.6-10.277 10.28 0 1.66.396 3.24 1.1 4.63l-1.045 5.59 5.593-1.05c1.392.71 2.965 1.1 4.629 1.1 5.676 0 10.277-4.59 10.277-10.27S17.647 1.75 11.971 1.75zM11.998 19c-3.866 0-7-3.13-7-7s3.134-7 7-7 7 3.13 7 7-3.134 7-7 7z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        376180: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { clipRule: "evenodd", d: "M9.338 22.67C3.446 21.202-.141 15.234 1.33 9.34 2.798 3.447 8.767-.14 14.66 1.33c5.894 1.468 9.48 7.438 8.01 13.331-1.469 5.893-7.438 9.48-13.332 8.01zm4.959-19.885c5.09 1.268 8.187 6.424 6.918 11.513-1.269 5.089-6.424 8.186-11.514 6.917-5.088-1.269-8.186-6.423-6.916-11.512 1.268-5.09 6.423-8.187 11.512-6.918zm.133 4.873c1.523.524 2.638 1.311 2.419 2.775-.159 1.071-.753 1.59-1.541 1.772 1.083.564 1.634 1.428 1.109 2.927-.652 1.861-2.2 2.019-4.257 1.629l-.5 2.002-1.207-.301.493-1.975c-.313-.078-.632-.16-.961-.25l-.495 1.985-1.206-.301.5-2.006c-.113-.028-.226-.058-.34-.088-.172-.044-.345-.09-.52-.134l-1.571-.391.599-1.382s.89.237.877.22c.342.084.493-.139.553-.287l.79-3.165.086.022.041.01c-.048-.02-.092-.032-.125-.04l.563-2.259c.014-.256-.074-.58-.563-.702.02-.013-.876-.218-.876-.218l.32-1.289 1.665.416-.001.006c.25.062.508.121.77.181l.495-1.982 1.206.3-.484 1.944c.323.074.65.148.967.228l.48-1.93 1.208.3-.494 1.983zm-3.818 7.188c.985.26 3.137.829 3.48-.546.35-1.406-1.738-1.875-2.756-2.103-.114-.026-.214-.048-.296-.069l-.663 2.657.235.061zm.929-3.882c.82.22 2.612.697 2.924-.553.318-1.278-1.422-1.663-2.273-1.851-.095-.022-.18-.04-.248-.057l-.601 2.41c.056.013.123.031.198.051z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        899174: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M9.909 4.14C9.541 4.05 9.157 4 8.766 4H1.002v16h8.146c.758 0 1.45.43 1.789 1.11l.065.13V5.76c0-.73-.388-1.44-1.093-1.62zM8 15H4v-2h4v2zm0-4H4V9h4v2zm7.238-7c-.391 0-.774.05-1.143.14-.705.18-1.093.89-1.093 1.62v15.49c.461-.82 1.076-1.25 1.854-1.25h8.146V4h-7.764zM20 15h-4v-2h4v2zm0-4h-4V9h4v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        416276: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.002 4h7.764c1.23 0 2.386.49 3.236 1.32.85-.83 2.006-1.32 3.236-1.32h7.764v16h-8.146c-.839 0-1.488.51-1.959 1.45h-1.789l-.171-.34C10.598 20.43 9.906 20 9.148 20H1.002V4zm10 3.26C10.53 6.48 9.685 6 8.766 6H3.002v12h6.146c.658 0 1.292.16 1.854.46V7.26zm2 11.21c.527-.29 1.143-.47 1.854-.47h6.146V6h-5.764c-.918 0-1.764.48-2.236 1.26v11.21zM19 11h-4V9h4v2zm0 4h-4v-2h4v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        738398: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M16.586 4l-2.043-2.04L15.957.54 18 2.59 20.043.54l1.414 1.42L19.414 4l2.043 2.04-1.414 1.42L18 5.41l-2.043 2.05-1.414-1.42L16.586 4zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        14403: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M17.502 2c-1.381 0-2.5 1.12-2.5 2.5 0 .32.061.63.171.91l3.241-3.24c-.282-.11-.59-.17-.912-.17zm2.327 1.58l-3.242 3.25c.283.11.592.17.915.17 1.381 0 2.5-1.12 2.5-2.5 0-.32-.061-.63-.173-.92zm-6.827.92c0-2.49 2.015-4.5 4.5-4.5 1.242 0 2.368.5 3.181 1.32.814.81 1.319 1.94 1.319 3.18 0 2.49-2.015 4.5-4.5 4.5-1.243 0-2.37-.51-3.183-1.32-.813-.81-1.317-1.94-1.317-3.18zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        979826: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14 .699V8.5h8.11L10 23.301V15.5H1.89L14 .699zM6.11 13.5H12v4.199l5.89-7.199H12V6.301L6.11 13.5z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        218568: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14 .699V8.5h8.11L10 23.301V15.5H1.89L14 .699zM6.11 13.5H12v4.199l5.89-7.199H12V6.301L6.11 13.5zm12.47 6.499l-2.04-2.043 1.42-1.414L20 18.585l2.04-2.042 1.42 1.415-2.05 2.041 2.05 2.044-1.42 1.415L20 21.413l-2.04 2.04-1.42-1.415 2.04-2.039z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        696711: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 2C6.477 2 2 6.477 2 12c0 1.523.34 2.968.951 4.262L2.17 20.07c-.214 1.044.698 1.972 1.745 1.776l3.95-.739c1.26.574 2.661.893 4.135.893 5.523 0 10-4.477 10-10S17.523 2 12 2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        498720: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M15.24 4.31l-4.55 15.93-1.93-.55 4.55-15.93 1.93.55zm-8.33 3.6L3.33 12l3.58 4.09-1.5 1.32L.67 12l4.74-5.41 1.5 1.32zm11.68-1.32L23.33 12l-4.74 5.41-1.5-1.32L20.67 12l-3.58-4.09 1.5-1.32z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        945819: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M15.5 6C16.88 6 18 7.12 18 8.5v7c0 1.21-.86 2.22-2 2.45V8.5c0-.28-.22-.5-.5-.5H6.05c.23-1.14 1.24-2 2.45-2h7zm-4 4c1.38 0 2.5 1.12 2.5 2.5v7c0 1.38-1.12 2.5-2.5 2.5h-7C3.12 22 2 20.88 2 19.5v-7C2 11.12 3.12 10 4.5 10h7zM4 19.5c0 .28.22.5.5.5h7c.28 0 .5-.22.5-.5v-7c0-.28-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5v7zM19.5 2C20.88 2 22 3.12 22 4.5v7c0 1.21-.86 2.22-2 2.45V4.5c0-.28-.22-.5-.5-.5h-9.45c.23-1.14 1.24-2 2.45-2h7z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        393118: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zm17.536 15.621L21.415 20l2.121-2.121-1.414-1.414-2.121 2.121-2.121-2.121-1.414 1.414L18.587 20l-2.121 2.121 1.414 1.414 2.121-2.121 2.121 2.121 1.414-1.414z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        170397: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M15.96 1.54L21.41 7l-5.45 5.46-1.42-1.42L17.59 8H3V6h14.59l-3.05-3.04 1.42-1.42zM6.41 18l3.05 3.04-1.42 1.42L2.59 17l5.45-5.46 1.42 1.42L6.41 16H21v2H6.41z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        905874: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M19.502 4h-15c-1.381 0-2.5 1.12-2.5 2.5v11c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-11c0-1.38-1.119-2.5-2.5-2.5zm.5 13.5c0 .28-.224.5-.5.5h-15c-.276 0-.5-.22-.5-.5V11h16v6.5zm0-9.5h-16V6.5c0-.28.224-.5.5-.5h15c.276 0 .5.22.5.5V8z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        166828: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75h1v9.832l6.995 6.909-.702.711C17.354 21.168 14.764 22.25 12 22.25zM11 3.811C6.921 4.306 3.75 7.79 3.75 12c0 4.549 3.701 8.25 8.25 8.25 1.888 0 3.674-.627 5.125-1.782L11 12.418V3.811zm10.699 11.514l-1.892-.648c.294-.857.443-1.757.443-2.676 0-3.202-1.794-6.053-4.683-7.438l.865-1.803c3.534 1.695 5.817 5.323 5.817 9.241 0 1.14-.186 2.259-.551 3.324h.001z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        762863: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M21 16V4.5C21 3.12 19.88 2 18.5 2h-13C4.12 2 3 3.12 3 4.5V16H1v4c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2v-4h-2zM5 4.5c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5V16H5V4.5zM3 20v-2h18v2H3z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        501578: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M5 4.5C5 3.12 6.12 2 7.5 2h9C17.88 2 19 3.12 19 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-9C6.12 22 5 20.88 5 19.5v-15zM7.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h9c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-9zM15 19H9v-2h6v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        377782: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                l = r(890601),
                i = r(783427),
                n = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 2.59l9.46 9.45-1.42 1.42L12 5.41l-8.04 8.05-1.42-1.42L12 2.59zm0 7l9.46 9.45-1.42 1.42L12 12.41l-8.04 8.05-1.42-1.42L12 9.59z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475.d021caca.js.map

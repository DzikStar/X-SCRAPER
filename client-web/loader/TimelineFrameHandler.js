"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TimelineFrameHandler", "icons/IconSound-js"],
    {
        151889: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(351322),
                s = r(202784),
                n = r(244448),
                i = (r(631673), r(824626)),
                l = r(725405);
            const o = (e) => {
                    const t = (0, l.Z)(),
                        r = (0, n.bk)(),
                        { payload: a } = e.entry.content;
                    return (
                        s.useEffect(() => {
                            t.scribeAction("impression");
                        }, [t]),
                        s.createElement(i.Z, null, s.createElement(n.kb, { payload: a, runtime: r }))
                    );
                },
                c = a.iH({ component: o }).getHandler();
        },
        738584: (e, t, r) => {
            r.d(t, { o: () => h, Z: () => g });
            var a = r(807896),
                s = r(202784),
                n = r(928316),
                i = r(682474),
                l = r(392237),
                o = r(893164),
                c = r(395367),
                p = r(908478);
            function u(e) {
                let t = d(e);
                return (e) => {
                    const r = d(e);
                    return (0, p.Z)(t, r) || (t = r), t;
                };
            }
            function d(e) {
                if (!e || "object" != typeof e) return e;
                const t = JSON.parse(JSON.stringify(e));
                return delete t.dataUsageBytes, (t.tracks = t.tracks.map((e) => ("number" == typeof e.currentTimeMs && delete e.currentTimeMs, e))), t;
            }
            function h({ children: e, periodic: t }) {
                const r = t ? y.PeriodicContext.Consumer : y.Context.Consumer;
                return s.createElement(r, null, (t) => {
                    const { aspectRatio: r, containerRef: a, guestsState: s, playerApi: n, playerState: i } = t;
                    return n && a && i ? e({ aspectRatio: r, guestsState: s, playerApi: n, playerState: i, containerRef: a }) : null;
                });
            }
            class y extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._cache = { stablePlayerState: u(null) }),
                        (this.state = { hasError: null, guestsState: null, playerApi: null, playerState: null, stablePlayerState: null }),
                        (this._renderCustomOverlay = () => {
                            const { children: e, enablePiP: t } = this.props,
                                { guestsState: r, playerApi: a, stablePlayerState: s } = this.state;
                            return a && e ? ("function" == typeof e ? e({ enablePiP: t, guestsState: r, playerApi: a, playerState: s, containerRef: this._containerRef }) : e) : null;
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
                        const e = n.findDOMNode(this);
                        e && e instanceof HTMLElement && (this._containerRef = e);
                    }
                }
                componentDidCatch(e, t) {
                    const r = { error: e, info: t };
                    this.setState(() => ({ hasError: r }));
                }
                render() {
                    const { guestsState: e, playerApi: t, playerState: r, stablePlayerState: n } = this.state,
                        { additionalBadges: l, aspectRatio: p, basePlayerClass: u, children: d, includeDisputeLinkInCopyrightErrorMessage: h, isFullScreen: g, objectFitVideo: b, onApiReady: S, onScroll: f, onStateUpdate: C, playerId: _, size: v, ...P } = this.props,
                        E = { aspectRatio: this.props.aspectRatio, guestsState: e, playerApi: t, playerState: r, containerRef: this._containerRef },
                        R = { ...E, playerState: n };
                    return s.createElement(
                        i.Z,
                        { isFullScreen: g, onScroll: f, ratio: p, style: [m.root, m[v]] },
                        this.state.hasError
                            ? s.createElement(o.Z, { onReloadPress: this._handleReload })
                            : s.createElement(
                                  y.Context.Provider,
                                  { value: R },
                                  s.createElement(
                                      y.PeriodicContext.Provider,
                                      { value: E },
                                      s.createElement(c.Z.RegistrationContext.Consumer, null, ({ registerPlayer: e }) => s.createElement(u, (0, a.Z)({}, P, { customOverlay: this._renderCustomOverlay(), displayOptions: { objectFitVideo: b }, setPlayerApi: this._handlePlayerApi(e) }))),
                                  ),
                              ),
                    );
                }
            }
            (y.Consumer = h), (y.defaultProps = { aspectRatio: l.default.theme.aspectRatios.landscape, size: "fill" }), (y.Context = s.createContext({ aspectRatio: l.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null })), (y.PeriodicContext = s.createContext({ aspectRatio: l.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null }));
            const m = l.default.create({ root: { position: "relative" }, fill: { width: "100%", height: "100%" }, small: { width: 480, height: 270 }, medium: { width: 640, height: 360 }, large: { width: 800, height: 450 } }),
                g = y;
        },
        395367: (e, t, r) => {
            r.d(t, { Z: () => i });
            var a,
                s = r(202784);
            class n extends s.Component {
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
            class i extends s.Component {
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
                    return s.createElement(i.RegistrationContext.Provider, { value: this._registrationContext }, s.createElement(i.ProviderContext.Provider, { value: this.state }, this.props.children));
                }
            }
            (a = i), (i.MetadataSubscriber = ({ children: e, playerId: t }) => s.createElement(a.ProviderContext.Consumer, null, ({ players: r }) => s.createElement(n, { playerApi: r && r[t] }, e))), (i.RegistrationContext = s.createContext({ registerPlayer: void 0 })), (i.ProviderContext = s.createContext({ players: {} }));
        },
        893164: (e, t, r) => {
            r.d(t, { Z: () => h });
            var a = r(202784),
                s = r(325686),
                n = r(111677),
                i = r.n(n),
                l = r(355830),
                o = r(731708),
                c = r(154003),
                p = r(992942),
                u = r(392237);
            const d = i().a9edea48;
            function h(e) {
                const { displayBackgroundImage: t = !1, errorMessage: r, iconPlayError: n, imageSrc: i, onReloadPress: h } = e;
                return a.createElement(s.Z, { style: [u.default.absoluteFill, t ? null : y.blankOverlay] }, t ? a.createElement(a.Fragment, null, a.createElement(s.Z, { style: y.backgroundImage }, i && a.createElement(p.Z, { resizeMode: "cover", source: i, style: u.default.absoluteFill })), a.createElement(s.Z, { style: y.overlay })) : null, a.createElement(s.Z, { style: y.errorContainer }, a.createElement(s.Z, null, n ? a.createElement(l.default, { style: y.playErrorIcon }) : null), a.createElement(s.Z, { focusable: !0 }, a.createElement(o.ZP, { style: t ? y.errorMsgTextWhite : y.errorMsgTextGray }, r)), h ? a.createElement(c.ZP, { onPress: h, style: y.buttonContainer, type: "brandFilled" }, d) : null));
            }
            const y = u.default.create((e) => ({ backgroundImage: { ...u.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...u.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack77 }, blankOverlay: { backgroundColor: e.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: e.spaces.space32 }, errorMsgTextWhite: { color: e.colors.white, textAlign: "center", marginBottom: e.spaces.space20 }, errorMsgTextGray: { color: e.colors.gray700, textAlign: "center", marginBottom: e.spaces.space20 }, playErrorIcon: { fill: e.colors.gray700, height: e.spaces.space48, width: e.spaces.space48, marginHorizontal: "auto", paddingBottom: e.spaces.space20, verticalAlign: "middle" } }));
        },
        926628: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                s = r(890601),
                n = r(783427),
                i = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M15 22.94V1.06L6.68 7H3.5C2.12 7 1 8.12 1 9.5v5C1 15.88 2.12 17 3.5 17h3.18L15 22.94zM3.5 9H6v6H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zM13 19.06l-5-3.57V8.51l5-3.57v14.12zm5.95-12.01c-.24-.24-.49-.45-.75-.65l1-1.75c.41.29.8.62 1.16.99 3.52 3.51 3.52 9.21 0 12.72-.36.37-.75.7-1.16.99l-1-1.75c.26-.2.51-.41.75-.65 2.73-2.73 2.73-7.17 0-9.9zM17 12c0-.8-.31-1.52-.82-2.06l1.02-1.78c1.1.91 1.8 2.29 1.8 3.84s-.7 2.93-1.8 3.84l-1.02-1.78c.51-.54.82-1.26.82-2.06z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TimelineFrameHandler.379f195a.js.map

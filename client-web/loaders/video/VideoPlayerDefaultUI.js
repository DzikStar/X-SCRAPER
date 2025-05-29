"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loaders.video.VideoPlayerDefaultUI", "icons/IconClosedcaptioning-js", "icons/IconHistory-js"],
    {
        738584: (e, t, r) => {
            r.d(t, { o: () => h, Z: () => g });
            var a = r(807896),
                n = r(202784),
                i = r(928316),
                s = r(682474),
                l = r(392237),
                o = r(893164),
                c = r(395367),
                p = r(908478);
            function d(e) {
                let t = u(e);
                return (e) => {
                    const r = u(e);
                    return (0, p.Z)(t, r) || (t = r), t;
                };
            }
            function u(e) {
                if (!e || "object" != typeof e) return e;
                const t = JSON.parse(JSON.stringify(e));
                return delete t.dataUsageBytes, (t.tracks = t.tracks.map((e) => ("number" == typeof e.currentTimeMs && delete e.currentTimeMs, e))), t;
            }
            function h({ children: e, periodic: t }) {
                const r = t ? y.PeriodicContext.Consumer : y.Context.Consumer;
                return n.createElement(r, null, (t) => {
                    const { aspectRatio: r, containerRef: a, guestsState: n, playerApi: i, playerState: s } = t;
                    return i && a && s ? e({ aspectRatio: r, guestsState: n, playerApi: i, playerState: s, containerRef: a }) : null;
                });
            }
            class y extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._cache = { stablePlayerState: d(null) }),
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
                        { additionalBadges: l, aspectRatio: p, basePlayerClass: d, children: u, includeDisputeLinkInCopyrightErrorMessage: h, isFullScreen: g, objectFitVideo: S, onApiReady: b, onScroll: E, onStateUpdate: f, playerId: C, size: v, ...P } = this.props,
                        _ = { aspectRatio: this.props.aspectRatio, guestsState: e, playerApi: t, playerState: r, containerRef: this._containerRef },
                        A = { ..._, playerState: i };
                    return n.createElement(
                        s.Z,
                        { isFullScreen: g, onScroll: E, ratio: p, style: [m.root, m[v]] },
                        this.state.hasError
                            ? n.createElement(o.Z, { onReloadPress: this._handleReload })
                            : n.createElement(
                                  y.Context.Provider,
                                  { value: A },
                                  n.createElement(
                                      y.PeriodicContext.Provider,
                                      { value: _ },
                                      n.createElement(c.Z.RegistrationContext.Consumer, null, ({ registerPlayer: e }) => n.createElement(d, (0, a.Z)({}, P, { customOverlay: this._renderCustomOverlay(), displayOptions: { objectFitVideo: S }, setPlayerApi: this._handlePlayerApi(e) }))),
                                  ),
                              ),
                    );
                }
            }
            (y.Consumer = h), (y.defaultProps = { aspectRatio: l.default.theme.aspectRatios.landscape, size: "fill" }), (y.Context = n.createContext({ aspectRatio: l.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null })), (y.PeriodicContext = n.createContext({ aspectRatio: l.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null }));
            const m = l.default.create({ root: { position: "relative" }, fill: { width: "100%", height: "100%" }, small: { width: 480, height: 270 }, medium: { width: 640, height: 360 }, large: { width: 800, height: 450 } }),
                g = y;
        },
        794294: (e, t, r) => {
            r.d(t, { Z: () => a });
            const a = r(392237).default.create((e) => ({ transitionTransform: { transitionProperty: "transform", transitionDuration: "400ms", transitionTimingFunction: "cubic-bezier(0.215, 0.610, 0.355, 1.000)" } }));
        },
        707816: (e, t, r) => {
            r.d(t, { EO: () => a, M8: () => i, TN: () => n });
            const a = () => (Math.random() > 0.5 ? 1 : -1);
            function n(e = 1, t = 0) {
                return Math.random() * (e - t) + t;
            }
            const i = (e) => ({ width: e, height: e });
        },
        395367: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a,
                n = r(202784);
            class i extends n.Component {
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
            (a = s), (s.MetadataSubscriber = ({ children: e, playerId: t }) => n.createElement(a.ProviderContext.Consumer, null, ({ players: r }) => n.createElement(i, { playerApi: r && r[t] }, e))), (s.RegistrationContext = n.createContext({ registerPlayer: void 0 })), (s.ProviderContext = n.createContext({ players: {} }));
        },
        893164: (e, t, r) => {
            r.d(t, { Z: () => h });
            var a = r(202784),
                n = r(325686),
                i = r(111677),
                s = r.n(i),
                l = r(355830),
                o = r(731708),
                c = r(154003),
                p = r(992942),
                d = r(392237);
            const u = s().a9edea48;
            function h(e) {
                const { displayBackgroundImage: t = !1, errorMessage: r, iconPlayError: i, imageSrc: s, onReloadPress: h } = e;
                return a.createElement(n.Z, { style: [d.default.absoluteFill, t ? null : y.blankOverlay] }, t ? a.createElement(a.Fragment, null, a.createElement(n.Z, { style: y.backgroundImage }, s && a.createElement(p.Z, { resizeMode: "cover", source: s, style: d.default.absoluteFill })), a.createElement(n.Z, { style: y.overlay })) : null, a.createElement(n.Z, { style: y.errorContainer }, a.createElement(n.Z, null, i ? a.createElement(l.default, { style: y.playErrorIcon }) : null), a.createElement(n.Z, { focusable: !0 }, a.createElement(o.ZP, { style: t ? y.errorMsgTextWhite : y.errorMsgTextGray }, r)), h ? a.createElement(c.ZP, { onPress: h, style: y.buttonContainer, type: "brandFilled" }, u) : null));
            }
            const y = d.default.create((e) => ({ backgroundImage: { ...d.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...d.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack77 }, blankOverlay: { backgroundColor: e.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: e.spaces.space32 }, errorMsgTextWhite: { color: e.colors.white, textAlign: "center", marginBottom: e.spaces.space20 }, errorMsgTextGray: { color: e.colors.gray700, textAlign: "center", marginBottom: e.spaces.space20 }, playErrorIcon: { fill: e.colors.gray700, height: e.spaces.space48, width: e.spaces.space48, marginHorizontal: "auto", paddingBottom: e.spaces.space20, verticalAlign: "middle" } }));
        },
        472238: (e, t, r) => {
            r.d(t, { Z: () => p });
            var a = r(202784),
                n = r(325686),
                i = r(111677),
                s = r.n(i),
                l = r(154003),
                o = r(392237);
            const c = s().f2d4e6f2;
            class p extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._createWatchAgainHandler = (e) => (t) => {
                            const { onScribeEvent: r, playerApi: a } = this.props;
                            t.stopPropagation(), r && r({ namespace: { element: e, action: "click" } }), a && a.replay();
                        }),
                        (this._handleOnPress = this._createWatchAgainHandler("watch_again_button")),
                        (this._handleOnClick = this._createWatchAgainHandler("watch_again_overlay"));
                }
                render() {
                    const { playerState: e } = this.props;
                    return e && e.tracksFinished ? a.createElement(n.Z, { onClick: this._handleOnClick, style: d.overlay }, a.createElement(l.ZP, { "aria-label": c, onPress: this._handleOnPress, type: "onMediaDominantColorFilled" }, c)) : null;
                }
            }
            const d = o.default.create((e) => ({ overlay: { ...o.default.absoluteFillObject, backgroundColor: o.default.theme.colors.translucentBlack30, alignItems: "center", justifyContent: "center" } }));
        },
        629761: (e, t, r) => {
            r.r(t), r.d(t, { default: () => A });
            var a = r(202784),
                n = r(325686),
                i = r(908629),
                s = r(314916),
                l = r(738584),
                o = r(364779),
                c = r(502089),
                p = r(864386),
                d = r(185737),
                u = r(535814),
                h = r(424713),
                y = r(251478),
                m = r(867703),
                g = r(523319),
                S = r(38660),
                b = r(971765),
                E = r(916692),
                f = r(804455),
                C = r(162317),
                v = r(472238),
                P = r(272879);
            class _ extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { wasPrerollSkipped: !1 }),
                        (this._renderVideoPlayer = (e) => {
                            const { playerApi: t, playerState: r, poster: n, useKeyboardShortcuts: i } = this.props;
                            if (!t || !r) return null;
                            const c = (0, h.Ci)(r),
                                p = c?.contentType === y.wF.GIF,
                                d = c?.displayType === y.ak.AD && c?.playbackCompleted,
                                m = r.errorInfo?.adFailed,
                                g = c?.displayType === y.ak.AD && c?.useRedesignedPrerollUx;
                            return g && (this.state.wasPrerollSkipped || d || m)
                                ? a.createElement(l.o, null, ({ aspectRatio: e }) => {
                                      const t = n || r.posterImage;
                                      return a.createElement(s.ZP, { aspectRatio: e, imageSrc: t, onTransitionComplete: this._handleTransitionAnimationComplete });
                                  })
                                : g
                                  ? this._renderVideo(e, !0)
                                  : a.createElement(u.Z, { enabled: !p && !!i, playerApi: t, playerState: r }, a.createElement(o.Z, { playerState: r }, this._renderVideo(e, !1)));
                        }),
                        (this._renderVideo = (e, t) => {
                            const { additionalBadges: r, "aria-label": s, containerRef: l, customControlBarIcon: o, enablePiP: p, fullscreenAdsDisabledOnIOS: u, guestsState: _, includeDisputeLinkInCopyrightErrorMessage: A, liveBroadcastRewindEnabled: Z, onClickBackground: R, onScribeEvent: w, playerApi: k, playerDisplayOptions: x, playerState: I, poster: O, renderPrerollActionMenu: D, shouldShowAltLabel: M, showWatchAgain: F } = this.props;
                            if (!k || !I) return null;
                            const { Observer: T, observed: B } = e,
                                z = (0, P.JN)(I, B, P.i2),
                                U = !!I.error,
                                j = (0, h.Ci)(I),
                                V = j?.contentType === y.wF.GIF,
                                H = "PLAY_REQUESTED" !== I.controls?.playState,
                                L = F && I.tracksFinished,
                                G = z && I.isPreview,
                                W = !(!z || !j?.isLive),
                                N = M ? s : void 0,
                                K = !x?.hideLeftBadges && (!!N || V || G || W),
                                J = !x?.hideRightBadges && z,
                                Y = G || !z,
                                Q = !x?.hidePosterImage,
                                q = I.controls?.isPosterShown;
                            return a.createElement(
                                T,
                                { click: !0, interactionKey: P.IG.Root, mousemove: !0, mouseover: !0 },
                                U ? null : a.createElement(a.Fragment, null, a.createElement(E.Z, { hideControls: z, isTouchOnlyUI: P.i2, liveBroadcastRewindEnabled: Z, onClick: R, playerApi: k, playerDisplayOptions: x, playerState: I }), Q && !L && a.createElement(f.Z, { imageSrc: O, playerApi: k, playerState: I, withPlayButton: H }), a.createElement(g.Z, { playerState: I }), t ? a.createElement(C.Z, { containerRef: l, onSkip: this._handleSkip, playerApi: k, playerState: I, renderPrerollActionMenu: D }) : a.createElement(a.Fragment, null, !V && F && a.createElement(v.Z, { onScribeEvent: w, playerApi: k, playerState: I }), a.createElement(b.Z, { guestsState: _, playerState: I }), !V && a.createElement(T, { focus: !0, interactionKey: P.IG.VideoCTA, mouseover: !0 }, a.createElement(i.Z, { show: !z }, a.createElement(d.Z, { playerApi: k, playerState: I }))), !V && !q && a.createElement(a.Fragment, null, a.createElement(T, { focus: !0, interactionKey: P.IG.A11YHook }, a.createElement(n.Z, { focusable: !0 })), a.createElement(T, { focus: !0, interactionKey: P.IG.ControlBar, mouseover: !0, touch: !0 }, a.createElement(c.Z, { containerRef: l, customControlBarIcon: o, enablePiP: p, fullscreenAdsDisabledOnIOS: u, hideControls: z, liveBroadcastRewindEnabled: Z, playerApi: k, playerState: I, publisherDisplayName: j?.publisherDisplayName, publisherProfileImageUrl: j?.publisherProfileImageUrl, showScrubber: "ad" !== j?.displayType && (!j?.isLive || Z) }))), a.createElement(i.Z, { show: K }, a.createElement(m.Z, { additionalBadges: r, mediaAccessibilityLabel: N, playerApi: k, playerDisplayOptions: x, playerState: I, position: "left" })), a.createElement(i.Z, { show: J }, a.createElement(m.Z, { playerApi: k, playerDisplayOptions: x, playerState: I, position: "right" })), a.createElement(i.Z, { show: Y }, a.createElement(m.Z, { playerApi: k, playerDisplayOptions: x, playerState: I, position: "topRight" })))),
                                a.createElement(i.Z, { show: U }, U && a.createElement(S.Z, { imageSrc: O, includeDisputeLinkInCopyrightErrorMessage: A, playerApi: k, playerState: I })),
                            );
                        }),
                        (this._handleSkip = () => {
                            const { playerApi: e } = this.props;
                            e && e.pause(), this.setState({ wasPrerollSkipped: !0 });
                        }),
                        (this._handleTransitionAnimationComplete = () => {
                            const { playerApi: e } = this.props;
                            e && e.nextTrack();
                        });
                }
                render() {
                    const { playerApi: e, playerState: t } = this.props;
                    return e && t ? a.createElement(p.Z, null, a.createElement(p.Z.Context.Consumer, null, this._renderVideoPlayer)) : null;
                }
            }
            const A = _;
        },
        38502: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                s = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3 5.5C3 4.12 4.119 3 5.5 3h13C19.881 3 21 4.12 21 5.5v13c0 1.38-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.88 3 18.5v-13zm2.746 6.52c0 1.85 1.421 3.2 3.187 3.2v-.01h.003c1.369 0 2.154-.59 2.737-1.39l-1.22-.87c-.303.44-.812.73-1.39.73-.93 0-1.685-.75-1.685-1.68s.754-1.68 1.684-1.68c.559 0 1.051.27 1.357.69l1.207-.93c-.545-.76-1.36-1.29-2.62-1.29-1.872 0-3.26 1.41-3.26 3.21v.02zm6.584 0c0 1.85 1.421 3.2 3.185 3.2 1.368 0 2.154-.6 2.738-1.4l-1.22-.87c-.304.44-.813.74-1.39.74-.93 0-1.684-.76-1.684-1.69s.755-1.68 1.685-1.68c.559 0 1.051.27 1.356.69l1.21-.93c-.547-.76-1.36-1.29-2.622-1.29-1.872 0-3.258 1.41-3.258 3.21v.02z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
        715614: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                s = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 4C9.25 4 6.83 5.39 5.38 7.5H8v2H2v-6h2V6c1.82-2.43 4.73-4 8-4 5.52 0 10 4.48 10 10s-4.48 10-10 10c-4.76 0-8.74-3.33-9.75-7.78l1.95-.44C5.01 17.34 8.19 20 12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8zm-1 4h2v3.59l3.21 3.2-1.42 1.42-3.79-3.8V8z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loaders.video.VideoPlayerDefaultUI.5c59b12a.js.map

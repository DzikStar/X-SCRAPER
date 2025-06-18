"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loaders.video.VideoPlayerDefaultUI", "icons/IconHistory-js"],
    {
        738584: (e, t, r) => {
            r.d(t, { o: () => h, Z: () => g });
            var a = r(807896),
                n = r(202784),
                s = r(928316),
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
                return n.createElement(r, null, (t) => {
                    const { aspectRatio: r, containerRef: a, guestsState: n, playerApi: s, playerState: i } = t;
                    return s && a && i ? e({ aspectRatio: r, guestsState: n, playerApi: s, playerState: i, containerRef: a }) : null;
                });
            }
            class y extends n.Component {
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
                        const e = s.findDOMNode(this);
                        e && e instanceof HTMLElement && (this._containerRef = e);
                    }
                }
                componentDidCatch(e, t) {
                    const r = { error: e, info: t };
                    this.setState(() => ({ hasError: r }));
                }
                render() {
                    const { guestsState: e, playerApi: t, playerState: r, stablePlayerState: s } = this.state,
                        { additionalBadges: l, aspectRatio: p, basePlayerClass: u, children: d, includeDisputeLinkInCopyrightErrorMessage: h, isFullScreen: g, objectFitVideo: S, onApiReady: b, onScroll: E, onStateUpdate: f, playerId: C, size: P, ..._ } = this.props,
                        v = { aspectRatio: this.props.aspectRatio, guestsState: e, playerApi: t, playerState: r, containerRef: this._containerRef },
                        A = { ...v, playerState: s };
                    return n.createElement(
                        i.Z,
                        { isFullScreen: g, onScroll: E, ratio: p, style: [m.root, m[P]] },
                        this.state.hasError
                            ? n.createElement(o.Z, { onReloadPress: this._handleReload })
                            : n.createElement(
                                  y.Context.Provider,
                                  { value: A },
                                  n.createElement(
                                      y.PeriodicContext.Provider,
                                      { value: v },
                                      n.createElement(c.Z.RegistrationContext.Consumer, null, ({ registerPlayer: e }) => n.createElement(u, (0, a.Z)({}, _, { customOverlay: this._renderCustomOverlay(), displayOptions: { objectFitVideo: S }, setPlayerApi: this._handlePlayerApi(e) }))),
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
            r.d(t, { EO: () => a, M8: () => s, TN: () => n });
            const a = () => (Math.random() > 0.5 ? 1 : -1);
            function n(e = 1, t = 0) {
                return Math.random() * (e - t) + t;
            }
            const s = (e) => ({ width: e, height: e });
        },
        395367: (e, t, r) => {
            r.d(t, { Z: () => i });
            var a,
                n = r(202784);
            class s extends n.Component {
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
            class i extends n.Component {
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
                    return n.createElement(i.RegistrationContext.Provider, { value: this._registrationContext }, n.createElement(i.ProviderContext.Provider, { value: this.state }, this.props.children));
                }
            }
            (a = i), (i.MetadataSubscriber = ({ children: e, playerId: t }) => n.createElement(a.ProviderContext.Consumer, null, ({ players: r }) => n.createElement(s, { playerApi: r && r[t] }, e))), (i.RegistrationContext = n.createContext({ registerPlayer: void 0 })), (i.ProviderContext = n.createContext({ players: {} }));
        },
        893164: (e, t, r) => {
            r.d(t, { Z: () => h });
            var a = r(202784),
                n = r(325686),
                s = r(111677),
                i = r.n(s),
                l = r(355830),
                o = r(731708),
                c = r(154003),
                p = r(992942),
                u = r(392237);
            const d = i().a9edea48;
            function h(e) {
                const { displayBackgroundImage: t = !1, errorMessage: r, iconPlayError: s, imageSrc: i, onReloadPress: h } = e;
                return a.createElement(n.Z, { style: [u.default.absoluteFill, t ? null : y.blankOverlay] }, t ? a.createElement(a.Fragment, null, a.createElement(n.Z, { style: y.backgroundImage }, i && a.createElement(p.Z, { resizeMode: "cover", source: i, style: u.default.absoluteFill })), a.createElement(n.Z, { style: y.overlay })) : null, a.createElement(n.Z, { style: y.errorContainer }, a.createElement(n.Z, null, s ? a.createElement(l.default, { style: y.playErrorIcon }) : null), a.createElement(n.Z, { focusable: !0 }, a.createElement(o.ZP, { style: t ? y.errorMsgTextWhite : y.errorMsgTextGray }, r)), h ? a.createElement(c.ZP, { onPress: h, style: y.buttonContainer, type: "brandFilled" }, d) : null));
            }
            const y = u.default.create((e) => ({ backgroundImage: { ...u.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...u.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack77 }, blankOverlay: { backgroundColor: e.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: e.spaces.space32 }, errorMsgTextWhite: { color: e.colors.white, textAlign: "center", marginBottom: e.spaces.space20 }, errorMsgTextGray: { color: e.colors.gray700, textAlign: "center", marginBottom: e.spaces.space20 }, playErrorIcon: { fill: e.colors.gray700, height: e.spaces.space48, width: e.spaces.space48, marginHorizontal: "auto", paddingBottom: e.spaces.space20, verticalAlign: "middle" } }));
        },
        472238: (e, t, r) => {
            r.d(t, { Z: () => p });
            var a = r(202784),
                n = r(325686),
                s = r(111677),
                i = r.n(s),
                l = r(154003),
                o = r(392237);
            const c = i().f2d4e6f2;
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
                    return e && e.tracksFinished ? a.createElement(n.Z, { onClick: this._handleOnClick, style: u.overlay }, a.createElement(l.ZP, { "aria-label": c, onPress: this._handleOnPress, type: "onMediaDominantColorFilled" }, c)) : null;
                }
            }
            const u = o.default.create((e) => ({ overlay: { ...o.default.absoluteFillObject, backgroundColor: o.default.theme.colors.translucentBlack30, alignItems: "center", justifyContent: "center" } }));
        },
        629761: (e, t, r) => {
            r.r(t), r.d(t, { default: () => A });
            var a = r(202784),
                n = r(325686),
                s = r(908629),
                i = r(314916),
                l = r(738584),
                o = r(364779),
                c = r(502089),
                p = r(864386),
                u = r(185737),
                d = r(535814),
                h = r(424713),
                y = r(251478),
                m = r(867703),
                g = r(523319),
                S = r(38660),
                b = r(971765),
                E = r(916692),
                f = r(804455),
                C = r(162317),
                P = r(472238),
                _ = r(272879);
            class v extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { wasPrerollSkipped: !1 }),
                        (this._renderVideoPlayer = (e) => {
                            const { playerApi: t, playerState: r, poster: n, useKeyboardShortcuts: s } = this.props;
                            if (!t || !r) return null;
                            const c = (0, h.Ci)(r),
                                p = c?.contentType === y.wF.GIF,
                                u = c?.displayType === y.ak.AD && c?.playbackCompleted,
                                m = r.errorInfo?.adFailed,
                                g = c?.displayType === y.ak.AD && c?.useRedesignedPrerollUx;
                            return g && (this.state.wasPrerollSkipped || u || m)
                                ? a.createElement(l.o, null, ({ aspectRatio: e }) => {
                                      const t = n || r.posterImage;
                                      return a.createElement(i.ZP, { aspectRatio: e, imageSrc: t, onTransitionComplete: this._handleTransitionAnimationComplete });
                                  })
                                : g
                                  ? this._renderVideo(e, !0)
                                  : a.createElement(d.Z, { enabled: !p && !!s, playerApi: t, playerState: r }, a.createElement(o.Z, { playerState: r }, this._renderVideo(e, !1)));
                        }),
                        (this._renderVideo = (e, t) => {
                            const { additionalBadges: r, "aria-label": i, containerRef: l, customControlBarIcon: o, enablePiP: p, fullscreenAdsDisabledOnIOS: d, guestsState: v, includeDisputeLinkInCopyrightErrorMessage: A, liveBroadcastRewindEnabled: Z, onClickBackground: R, onScribeEvent: k, playerApi: w, playerDisplayOptions: x, playerState: I, poster: O, renderPrerollActionMenu: D, shouldShowAltLabel: F, showWatchAgain: M } = this.props;
                            if (!w || !I) return null;
                            const { Observer: T, observed: B } = e,
                                U = (0, _.JN)(I, B, _.i2),
                                z = !!I.error,
                                V = (0, h.Ci)(I),
                                j = V?.contentType === y.wF.GIF,
                                H = "PLAY_REQUESTED" !== I.controls?.playState,
                                L = M && I.tracksFinished,
                                G = U && I.isPreview,
                                W = !(!U || !V?.isLive),
                                N = F ? i : void 0,
                                K = !x?.hideLeftBadges && (!!N || j || G || W),
                                J = !x?.hideRightBadges && U,
                                Y = G || !U,
                                Q = !x?.hidePosterImage,
                                q = I.controls?.isPosterShown;
                            return a.createElement(
                                T,
                                { click: !0, interactionKey: _.IG.Root, mousemove: !0, mouseover: !0 },
                                z ? null : a.createElement(a.Fragment, null, a.createElement(E.Z, { hideControls: U, isTouchOnlyUI: _.i2, liveBroadcastRewindEnabled: Z, onClick: R, playerApi: w, playerDisplayOptions: x, playerState: I }), Q && !L && a.createElement(f.Z, { imageSrc: O, playerApi: w, playerState: I, withPlayButton: H }), a.createElement(g.Z, { playerState: I }), t ? a.createElement(C.Z, { containerRef: l, onSkip: this._handleSkip, playerApi: w, playerState: I, renderPrerollActionMenu: D }) : a.createElement(a.Fragment, null, !j && M && a.createElement(P.Z, { onScribeEvent: k, playerApi: w, playerState: I }), a.createElement(b.Z, { guestsState: v, playerState: I }), !j && a.createElement(T, { focus: !0, interactionKey: _.IG.VideoCTA, mouseover: !0 }, a.createElement(s.Z, { show: !U }, a.createElement(u.Z, { playerApi: w, playerState: I }))), !j && !q && a.createElement(a.Fragment, null, a.createElement(T, { focus: !0, interactionKey: _.IG.A11YHook }, a.createElement(n.Z, { focusable: !0 })), a.createElement(T, { focus: !0, interactionKey: _.IG.ControlBar, mouseover: !0, touch: !0 }, a.createElement(c.Z, { containerRef: l, customControlBarIcon: o, enablePiP: p, fullscreenAdsDisabledOnIOS: d, hideControls: U, liveBroadcastRewindEnabled: Z, playerApi: w, playerState: I, publisherDisplayName: V?.publisherDisplayName, publisherProfileImageUrl: V?.publisherProfileImageUrl, showScrubber: "ad" !== V?.displayType && (!V?.isLive || Z) }))), a.createElement(s.Z, { show: K }, a.createElement(m.Z, { additionalBadges: r, mediaAccessibilityLabel: N, playerApi: w, playerDisplayOptions: x, playerState: I, position: "left" })), a.createElement(s.Z, { show: J }, a.createElement(m.Z, { playerApi: w, playerDisplayOptions: x, playerState: I, position: "right" })), a.createElement(s.Z, { show: Y }, a.createElement(m.Z, { playerApi: w, playerDisplayOptions: x, playerState: I, position: "topRight" })))),
                                a.createElement(s.Z, { show: z }, z && a.createElement(S.Z, { imageSrc: O, includeDisputeLinkInCopyrightErrorMessage: A, playerApi: w, playerState: I })),
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
            const A = v;
        },
        715614: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                n = r(890601),
                s = r(783427),
                i = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 4C9.25 4 6.83 5.39 5.38 7.5H8v2H2v-6h2V6c1.82-2.43 4.73-4 8-4 5.52 0 10 4.48 10 10s-4.48 10-10 10c-4.76 0-8.74-3.33-9.75-7.78l1.95-.44C5.01 17.34 8.19 20 12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8zm-1 4h2v3.59l3.21 3.2-1.42 1.42-3.79-3.8V8z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loaders.video.VideoPlayerDefaultUI.4405113a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loaders.video.VideoPlayerDefaultUI", "icons/IconClosedcaptioningStroke-js", "icons/IconHistory-js"],
    {
        738584: (e, t, r) => {
            r.d(t, { o: () => u, Z: () => S });
            var a = r(807896),
                i = r(202784),
                n = r(928316),
                s = r(682474),
                l = r(392237),
                o = r(893164),
                c = r(395367),
                p = r(908478);
            function d(e) {
                let t = h(e);
                return (e) => {
                    const r = h(e);
                    return (0, p.Z)(t, r) || (t = r), t;
                };
            }
            function h(e) {
                if (!e || "object" != typeof e) return e;
                const t = JSON.parse(JSON.stringify(e));
                return delete t.dataUsageBytes, (t.tracks = t.tracks.map((e) => ("number" == typeof e.currentTimeMs && delete e.currentTimeMs, e))), t;
            }
            function u({ children: e, periodic: t }) {
                const r = t ? y.PeriodicContext.Consumer : y.Context.Consumer;
                return i.createElement(r, null, (t) => {
                    const { aspectRatio: r, containerRef: a, guestsState: i, playerApi: n, playerState: s } = t;
                    return n && a && s ? e({ aspectRatio: r, guestsState: i, playerApi: n, playerState: s, containerRef: a }) : null;
                });
            }
            class y extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._cache = { stablePlayerState: d(null) }),
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
                        { additionalBadges: l, aspectRatio: p, basePlayerClass: d, children: h, includeDisputeLinkInCopyrightErrorMessage: u, isFullScreen: S, objectFitVideo: g, onApiReady: b, onScroll: E, onStateUpdate: C, playerId: v, size: P, ...f } = this.props,
                        _ = { aspectRatio: this.props.aspectRatio, guestsState: e, playerApi: t, playerState: r, containerRef: this._containerRef },
                        A = { ..._, playerState: n };
                    return i.createElement(
                        s.Z,
                        { isFullScreen: S, onScroll: E, ratio: p, style: [m.root, m[P]] },
                        this.state.hasError
                            ? i.createElement(o.Z, { onReloadPress: this._handleReload })
                            : i.createElement(
                                  y.Context.Provider,
                                  { value: A },
                                  i.createElement(
                                      y.PeriodicContext.Provider,
                                      { value: _ },
                                      i.createElement(c.Z.RegistrationContext.Consumer, null, ({ registerPlayer: e }) => i.createElement(d, (0, a.Z)({}, f, { customOverlay: this._renderCustomOverlay(), displayOptions: { objectFitVideo: g }, setPlayerApi: this._handlePlayerApi(e) }))),
                                  ),
                              ),
                    );
                }
            }
            (y.Consumer = u), (y.defaultProps = { aspectRatio: l.default.theme.aspectRatios.landscape, size: "fill" }), (y.Context = i.createContext({ aspectRatio: l.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null })), (y.PeriodicContext = i.createContext({ aspectRatio: l.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null }));
            const m = l.default.create({ root: { position: "relative" }, fill: { width: "100%", height: "100%" }, small: { width: 480, height: 270 }, medium: { width: 640, height: 360 }, large: { width: 800, height: 450 } }),
                S = y;
        },
        794294: (e, t, r) => {
            r.d(t, { Z: () => a });
            const a = r(392237).default.create((e) => ({ transitionTransform: { transitionProperty: "transform", transitionDuration: "400ms", transitionTimingFunction: "cubic-bezier(0.215, 0.610, 0.355, 1.000)" } }));
        },
        707816: (e, t, r) => {
            r.d(t, { EO: () => a, M8: () => n, TN: () => i });
            const a = () => (Math.random() > 0.5 ? 1 : -1);
            function i(e = 1, t = 0) {
                return Math.random() * (e - t) + t;
            }
            const n = (e) => ({ width: e, height: e });
        },
        395367: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a,
                i = r(202784);
            class n extends i.Component {
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
            class s extends i.Component {
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
                    return i.createElement(s.RegistrationContext.Provider, { value: this._registrationContext }, i.createElement(s.ProviderContext.Provider, { value: this.state }, this.props.children));
                }
            }
            (a = s), (s.MetadataSubscriber = ({ children: e, playerId: t }) => i.createElement(a.ProviderContext.Consumer, null, ({ players: r }) => i.createElement(n, { playerApi: r && r[t] }, e))), (s.RegistrationContext = i.createContext({ registerPlayer: void 0 })), (s.ProviderContext = i.createContext({ players: {} }));
        },
        472238: (e, t, r) => {
            r.d(t, { Z: () => p });
            var a = r(202784),
                i = r(325686),
                n = r(111677),
                s = r.n(n),
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
                    return e && e.tracksFinished ? a.createElement(i.Z, { onClick: this._handleOnClick, style: d.overlay }, a.createElement(l.ZP, { "aria-label": c, onPress: this._handleOnPress, type: "onMediaDominantColorFilled" }, c)) : null;
                }
            }
            const d = o.default.create((e) => ({ overlay: { ...o.default.absoluteFillObject, backgroundColor: o.default.theme.colors.translucentBlack30, alignItems: "center", justifyContent: "center" } }));
        },
        629761: (e, t, r) => {
            r.r(t), r.d(t, { default: () => A });
            var a = r(202784),
                i = r(325686),
                n = r(908629),
                s = r(314916),
                l = r(738584),
                o = r(364779),
                c = r(502089),
                p = r(864386),
                d = r(185737),
                h = r(535814),
                u = r(424713),
                y = r(251478),
                m = r(867703),
                S = r(523319),
                g = r(38660),
                b = r(971765),
                E = r(916692),
                C = r(804455),
                v = r(162317),
                P = r(472238),
                f = r(272879);
            class _ extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { wasPrerollSkipped: !1 }),
                        (this._renderVideoPlayer = (e) => {
                            const { playerApi: t, playerState: r, poster: i, useKeyboardShortcuts: n } = this.props;
                            if (!t || !r) return null;
                            const c = (0, u.Ci)(r),
                                p = c?.contentType === y.wF.GIF,
                                d = c?.displayType === y.ak.AD && c?.playbackCompleted,
                                m = r.errorInfo?.adFailed,
                                S = c?.displayType === y.ak.AD && c?.useRedesignedPrerollUx;
                            return S && (this.state.wasPrerollSkipped || d || m)
                                ? a.createElement(l.o, null, ({ aspectRatio: e }) => {
                                      const t = i || r.posterImage;
                                      return a.createElement(s.ZP, { aspectRatio: e, imageSrc: t, onTransitionComplete: this._handleTransitionAnimationComplete });
                                  })
                                : S
                                  ? this._renderVideo(e, !0)
                                  : a.createElement(h.Z, { enabled: !p && !!n, playerApi: t, playerState: r }, a.createElement(o.Z, { playerState: r }, this._renderVideo(e, !1)));
                        }),
                        (this._renderVideo = (e, t) => {
                            const { additionalBadges: r, "aria-label": s, containerRef: l, customControlBarIcon: o, enablePiP: p, fullscreenAdsDisabledOnIOS: h, guestsState: _, includeDisputeLinkInCopyrightErrorMessage: A, liveBroadcastRewindEnabled: R, onClickBackground: Z, onScribeEvent: w, playerApi: k, playerDisplayOptions: x, playerState: D, poster: I, renderPrerollActionMenu: O, shouldShowAltLabel: M, showWatchAgain: T } = this.props;
                            if (!k || !D) return null;
                            const { Observer: B, observed: F } = e,
                                U = (0, f.JN)(D, F, f.i2),
                                z = !!D.error,
                                V = (0, u.Ci)(D),
                                L = V?.contentType === y.wF.GIF,
                                H = "PLAY_REQUESTED" !== D.controls?.playState,
                                j = T && D.tracksFinished,
                                N = U && D.isPreview,
                                G = !(!U || !V?.isLive),
                                W = M ? s : void 0,
                                K = !x?.hideLeftBadges && (!!W || L || N || G),
                                J = !x?.hideRightBadges && U,
                                Y = N || !U,
                                Q = !x?.hidePosterImage,
                                q = D.controls?.isPosterShown;
                            return a.createElement(
                                B,
                                { click: !0, interactionKey: f.IG.Root, mousemove: !0, mouseover: !0 },
                                z ? null : a.createElement(a.Fragment, null, a.createElement(E.Z, { hideControls: U, isTouchOnlyUI: f.i2, liveBroadcastRewindEnabled: R, onClick: Z, playerApi: k, playerDisplayOptions: x, playerState: D }), Q && !j && a.createElement(C.Z, { imageSrc: I, playerApi: k, playerState: D, withPlayButton: H }), a.createElement(S.Z, { playerState: D }), t ? a.createElement(v.Z, { containerRef: l, onSkip: this._handleSkip, playerApi: k, playerState: D, renderPrerollActionMenu: O }) : a.createElement(a.Fragment, null, !L && T && a.createElement(P.Z, { onScribeEvent: w, playerApi: k, playerState: D }), a.createElement(b.Z, { guestsState: _, playerState: D }), !L && a.createElement(B, { focus: !0, interactionKey: f.IG.VideoCTA, mouseover: !0 }, a.createElement(n.Z, { show: !U }, a.createElement(d.Z, { playerApi: k, playerState: D }))), !L && !q && a.createElement(a.Fragment, null, a.createElement(B, { focus: !0, interactionKey: f.IG.A11YHook }, a.createElement(i.Z, { focusable: !0 })), a.createElement(B, { focus: !0, interactionKey: f.IG.ControlBar, mouseover: !0, touch: !0 }, a.createElement(c.Z, { containerRef: l, customControlBarIcon: o, enablePiP: p, fullscreenAdsDisabledOnIOS: h, hideControls: U, liveBroadcastRewindEnabled: R, playerApi: k, playerState: D, publisherDisplayName: V?.publisherDisplayName, publisherProfileImageUrl: V?.publisherProfileImageUrl, showScrubber: "ad" !== V?.displayType && (!V?.isLive || R) }))), a.createElement(n.Z, { show: K }, a.createElement(m.Z, { additionalBadges: r, mediaAccessibilityLabel: W, playerApi: k, playerDisplayOptions: x, playerState: D, position: "left" })), a.createElement(n.Z, { show: J }, a.createElement(m.Z, { playerApi: k, playerDisplayOptions: x, playerState: D, position: "right" })), a.createElement(n.Z, { show: Y }, a.createElement(m.Z, { playerApi: k, playerDisplayOptions: x, playerState: D, position: "topRight" })))),
                                a.createElement(n.Z, { show: z }, z && a.createElement(g.Z, { imageSrc: I, includeDisputeLinkInCopyrightErrorMessage: A, playerApi: k, playerState: D })),
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
        804579: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                i = r(890601),
                n = r(783427),
                s = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M5.747 12c0-1.8 1.388-3.22 3.26-3.22 1.26 0 2.075.53 2.62 1.29l-1.207.94c-.306-.42-.798-.7-1.357-.7-.93 0-1.684.76-1.684 1.69s.755 1.68 1.685 1.68c.578 0 1.087-.29 1.39-.73l1.22.87c-.583.8-1.368 1.39-2.737 1.39h-.003c-1.766 0-3.187-1.35-3.187-3.19V12zm6.584.02c0 1.84 1.421 3.19 3.185 3.19 1.368 0 2.154-.59 2.738-1.39l-1.22-.87c-.304.44-.813.73-1.39.73-.93 0-1.684-.75-1.684-1.68s.755-1.68 1.685-1.68c.559 0 1.051.27 1.356.69l1.21-.94c-.547-.76-1.36-1.29-2.622-1.29-1.872 0-3.258 1.42-3.258 3.22v.02zM18.5 3C19.881 3 21 4.12 21 5.5v13c0 1.38-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.88 3 18.5v-13C3 4.12 4.119 3 5.5 3h13zM5 18.5c0 .28.224.5.5.5h13c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-13c-.276 0-.5.22-.5.5v13z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
        715614: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                i = r(890601),
                n = r(783427),
                s = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 4C9.25 4 6.83 5.39 5.38 7.5H8v2H2v-6h2V6c1.82-2.43 4.73-4 8-4 5.52 0 10 4.48 10 10s-4.48 10-10 10c-4.76 0-8.74-3.33-9.75-7.78l1.95-.44C5.01 17.34 8.19 20 12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8zm-1 4h2v3.59l3.21 3.2-1.42 1.42-3.79-3.8V8z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loaders.video.VideoPlayerDefaultUI.4416e40a.js.map

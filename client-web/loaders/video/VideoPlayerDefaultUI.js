"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loaders.video.VideoPlayerDefaultUI"],
    {
        738584: (e, t, r) => {
            r.d(t, { o: () => h, Z: () => S });
            var a = r(807896),
                n = r(202784),
                i = r(928316),
                s = r(682474),
                l = r(392237),
                o = r(893164),
                p = r(395367),
                c = r(908478);
            function u(e) {
                let t = d(e);
                return (e) => {
                    const r = d(e);
                    return (0, c.Z)(t, r) || (t = r), t;
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
                    const { aspectRatio: r, containerRef: a, guestsState: n, playerApi: i, playerState: s } = t;
                    return i && a && s ? e({ aspectRatio: r, guestsState: n, playerApi: i, playerState: s, containerRef: a }) : null;
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
                        { additionalBadges: l, aspectRatio: c, basePlayerClass: u, children: d, includeDisputeLinkInCopyrightErrorMessage: h, isFullScreen: S, objectFitVideo: g, onApiReady: b, onScroll: P, onStateUpdate: E, playerId: _, size: f, ...C } = this.props,
                        A = { aspectRatio: this.props.aspectRatio, guestsState: e, playerApi: t, playerState: r, containerRef: this._containerRef },
                        v = { ...A, playerState: i };
                    return n.createElement(
                        s.Z,
                        { isFullScreen: S, onScroll: P, ratio: c, style: [m.root, m[f]] },
                        this.state.hasError
                            ? n.createElement(o.Z, { onReloadPress: this._handleReload })
                            : n.createElement(
                                  y.Context.Provider,
                                  { value: v },
                                  n.createElement(
                                      y.PeriodicContext.Provider,
                                      { value: A },
                                      n.createElement(p.Z.RegistrationContext.Consumer, null, ({ registerPlayer: e }) => n.createElement(u, (0, a.Z)({}, C, { customOverlay: this._renderCustomOverlay(), displayOptions: { objectFitVideo: g }, setPlayerApi: this._handlePlayerApi(e) }))),
                                  ),
                              ),
                    );
                }
            }
            (y.Consumer = h), (y.defaultProps = { aspectRatio: l.default.theme.aspectRatios.landscape, size: "fill" }), (y.Context = n.createContext({ aspectRatio: l.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null })), (y.PeriodicContext = n.createContext({ aspectRatio: l.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null }));
            const m = l.default.create({ root: { position: "relative" }, fill: { width: "100%", height: "100%" }, small: { width: 480, height: 270 }, medium: { width: 640, height: 360 }, large: { width: 800, height: 450 } }),
                S = y;
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
        472238: (e, t, r) => {
            r.d(t, { Z: () => c });
            var a = r(202784),
                n = r(325686),
                i = r(111677),
                s = r.n(i),
                l = r(154003),
                o = r(392237);
            const p = s().f2d4e6f2;
            class c extends a.PureComponent {
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
                    return e && e.tracksFinished ? a.createElement(n.Z, { onClick: this._handleOnClick, style: u.overlay }, a.createElement(l.ZP, { "aria-label": p, onPress: this._handleOnPress, type: "onMediaDominantColorFilled" }, p)) : null;
                }
            }
            const u = o.default.create((e) => ({ overlay: { ...o.default.absoluteFillObject, backgroundColor: o.default.theme.colors.translucentBlack30, alignItems: "center", justifyContent: "center" } }));
        },
        629761: (e, t, r) => {
            r.r(t), r.d(t, { default: () => v });
            var a = r(202784),
                n = r(325686),
                i = r(908629),
                s = r(314916),
                l = r(738584),
                o = r(364779),
                p = r(502089),
                c = r(864386),
                u = r(185737),
                d = r(535814),
                h = r(424713),
                y = r(251478),
                m = r(867703),
                S = r(523319),
                g = r(38660),
                b = r(971765),
                P = r(916692),
                E = r(804455),
                _ = r(162317),
                f = r(472238),
                C = r(272879);
            class A extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { wasPrerollSkipped: !1 }),
                        (this._renderVideoPlayer = (e) => {
                            const { playerApi: t, playerState: r, poster: n, useKeyboardShortcuts: i } = this.props;
                            if (!t || !r) return null;
                            const p = (0, h.Ci)(r),
                                c = p?.contentType === y.wF.GIF,
                                u = p?.displayType === y.ak.AD && p?.playbackCompleted,
                                m = r.errorInfo?.adFailed,
                                S = p?.displayType === y.ak.AD && p?.useRedesignedPrerollUx;
                            return S && (this.state.wasPrerollSkipped || u || m)
                                ? a.createElement(l.o, null, ({ aspectRatio: e }) => {
                                      const t = n || r.posterImage;
                                      return a.createElement(s.ZP, { aspectRatio: e, imageSrc: t, onTransitionComplete: this._handleTransitionAnimationComplete });
                                  })
                                : S
                                  ? this._renderVideo(e, !0)
                                  : a.createElement(d.Z, { enabled: !c && !!i, playerApi: t, playerState: r }, a.createElement(o.Z, { playerState: r }, this._renderVideo(e, !1)));
                        }),
                        (this._renderVideo = (e, t) => {
                            const { additionalBadges: r, "aria-label": s, containerRef: l, customControlBarIcon: o, enablePiP: c, fullscreenAdsDisabledOnIOS: d, guestsState: A, includeDisputeLinkInCopyrightErrorMessage: v, liveBroadcastRewindEnabled: R, onClickBackground: Z, onScribeEvent: w, playerApi: k, playerDisplayOptions: x, playerState: D, poster: I, renderPrerollActionMenu: O, shouldShowAltLabel: T, showWatchAgain: F } = this.props;
                            if (!k || !D) return null;
                            const { Observer: M, observed: B } = e,
                                U = (0, C.JN)(D, B, C.i2),
                                L = !!D.error,
                                V = (0, h.Ci)(D),
                                N = V?.contentType === y.wF.GIF,
                                z = "PLAY_REQUESTED" !== D.controls?.playState,
                                G = F && D.tracksFinished,
                                W = U && D.isPreview,
                                j = !(!U || !V?.isLive),
                                H = T ? s : void 0,
                                K = !x?.hideLeftBadges && (!!H || N || W || j),
                                J = !x?.hideRightBadges && U,
                                Y = W || !U,
                                Q = !x?.hidePosterImage,
                                q = D.controls?.isPosterShown;
                            return a.createElement(
                                M,
                                { click: !0, interactionKey: C.IG.Root, mousemove: !0, mouseover: !0 },
                                L ? null : a.createElement(a.Fragment, null, a.createElement(P.Z, { hideControls: U, isTouchOnlyUI: C.i2, liveBroadcastRewindEnabled: R, onClick: Z, playerApi: k, playerDisplayOptions: x, playerState: D }), Q && !G && a.createElement(E.Z, { imageSrc: I, playerApi: k, playerState: D, withPlayButton: z }), a.createElement(S.Z, { playerState: D }), t ? a.createElement(_.Z, { containerRef: l, onSkip: this._handleSkip, playerApi: k, playerState: D, renderPrerollActionMenu: O }) : a.createElement(a.Fragment, null, !N && F && a.createElement(f.Z, { onScribeEvent: w, playerApi: k, playerState: D }), a.createElement(b.Z, { guestsState: A, playerState: D }), !N && a.createElement(M, { focus: !0, interactionKey: C.IG.VideoCTA, mouseover: !0 }, a.createElement(i.Z, { show: !U }, a.createElement(u.Z, { playerApi: k, playerState: D }))), !N && !q && a.createElement(a.Fragment, null, a.createElement(M, { focus: !0, interactionKey: C.IG.A11YHook }, a.createElement(n.Z, { focusable: !0 })), a.createElement(M, { focus: !0, interactionKey: C.IG.ControlBar, mouseover: !0, touch: !0 }, a.createElement(p.Z, { containerRef: l, customControlBarIcon: o, enablePiP: c, fullscreenAdsDisabledOnIOS: d, hideControls: U, liveBroadcastRewindEnabled: R, playerApi: k, playerState: D, publisherDisplayName: V?.publisherDisplayName, publisherProfileImageUrl: V?.publisherProfileImageUrl, showScrubber: "ad" !== V?.displayType && (!V?.isLive || R) }))), a.createElement(i.Z, { show: K }, a.createElement(m.Z, { additionalBadges: r, mediaAccessibilityLabel: H, playerApi: k, playerDisplayOptions: x, playerState: D, position: "left" })), a.createElement(i.Z, { show: J }, a.createElement(m.Z, { playerApi: k, playerDisplayOptions: x, playerState: D, position: "right" })), a.createElement(i.Z, { show: Y }, a.createElement(m.Z, { playerApi: k, playerDisplayOptions: x, playerState: D, position: "topRight" })))),
                                a.createElement(i.Z, { show: L }, L && a.createElement(g.Z, { imageSrc: I, includeDisputeLinkInCopyrightErrorMessage: v, playerApi: k, playerState: D })),
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
                    return e && t ? a.createElement(c.Z, null, a.createElement(c.Z.Context.Consumer, null, this._renderVideoPlayer)) : null;
                }
            }
            const v = A;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loaders.video.VideoPlayerDefaultUI.606481da.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loaders.video.VideoPlayerDefaultUI"],
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
                        { additionalBadges: l, aspectRatio: p, basePlayerClass: u, children: d, includeDisputeLinkInCopyrightErrorMessage: h, isFullScreen: g, objectFitVideo: S, onApiReady: b, onScroll: E, onStateUpdate: f, playerId: P, size: C, ..._ } = this.props,
                        A = { aspectRatio: this.props.aspectRatio, guestsState: e, playerApi: t, playerState: r, containerRef: this._containerRef },
                        v = { ...A, playerState: s };
                    return n.createElement(
                        i.Z,
                        { isFullScreen: g, onScroll: E, ratio: p, style: [m.root, m[C]] },
                        this.state.hasError
                            ? n.createElement(o.Z, { onReloadPress: this._handleReload })
                            : n.createElement(
                                  y.Context.Provider,
                                  { value: v },
                                  n.createElement(
                                      y.PeriodicContext.Provider,
                                      { value: A },
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
                s = r(332920),
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
                s = r(332920),
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
            r.r(t), r.d(t, { default: () => v });
            var a = r(202784),
                n = r(325686),
                s = r(908629),
                i = r(314916),
                l = r(738584),
                o = r(364779),
                c = r(502089),
                p = r(864386),
                u = r(734701),
                d = r(535814),
                h = r(424713),
                y = r(251478),
                m = r(867703),
                g = r(523319),
                S = r(38660),
                b = r(971765),
                E = r(916692),
                f = r(804455),
                P = r(162317),
                C = r(472238),
                _ = r(272879);
            class A extends a.PureComponent {
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
                            const { additionalBadges: r, "aria-label": i, containerRef: l, customControlBarIcon: o, enablePiP: p, fullscreenAdsDisabledOnIOS: d, guestsState: A, includeDisputeLinkInCopyrightErrorMessage: v, liveBroadcastRewindEnabled: Z, onClickBackground: R, onScribeEvent: k, playerApi: w, playerDisplayOptions: x, playerState: I, poster: O, renderPrerollActionMenu: D, shouldShowAltLabel: F, showWatchAgain: M } = this.props;
                            if (!w || !I) return null;
                            const { Observer: T, observed: B } = e,
                                U = (0, _.JN)(I, B, _.i2),
                                z = !!I.error,
                                L = (0, h.Ci)(I),
                                j = L?.contentType === y.wF.GIF,
                                V = "PLAY_REQUESTED" !== I.controls?.playState,
                                G = M && I.tracksFinished,
                                W = U && I.isPreview,
                                H = !(!U || !L?.isLive),
                                N = F ? i : void 0,
                                K = !x?.hideLeftBadges && (!!N || j || W || H),
                                J = !x?.hideRightBadges && U,
                                Y = W || !U,
                                Q = !x?.hidePosterImage,
                                q = I.controls?.isPosterShown;
                            return a.createElement(
                                T,
                                { click: !0, interactionKey: _.IG.Root, mousemove: !0, mouseover: !0 },
                                z ? null : a.createElement(a.Fragment, null, a.createElement(E.Z, { hideControls: U, isTouchOnlyUI: _.i2, liveBroadcastRewindEnabled: Z, onClick: R, playerApi: w, playerDisplayOptions: x, playerState: I }), Q && !G && a.createElement(f.Z, { imageSrc: O, playerApi: w, playerState: I, withPlayButton: V }), a.createElement(g.Z, { playerState: I }), t ? a.createElement(P.Z, { containerRef: l, onSkip: this._handleSkip, playerApi: w, playerState: I, renderPrerollActionMenu: D }) : a.createElement(a.Fragment, null, !j && M && a.createElement(C.Z, { onScribeEvent: k, playerApi: w, playerState: I }), a.createElement(b.Z, { guestsState: A, playerState: I }), !j && a.createElement(T, { focus: !0, interactionKey: _.IG.VideoCTA, mouseover: !0 }, a.createElement(s.Z, { show: !U }, a.createElement(u.Z, { playerApi: w, playerState: I }))), !j && !q && a.createElement(a.Fragment, null, a.createElement(T, { focus: !0, interactionKey: _.IG.A11YHook }, a.createElement(n.Z, { focusable: !0 })), a.createElement(T, { focus: !0, interactionKey: _.IG.ControlBar, mouseover: !0, touch: !0 }, a.createElement(c.Z, { containerRef: l, customControlBarIcon: o, enablePiP: p, fullscreenAdsDisabledOnIOS: d, hideControls: U, liveBroadcastRewindEnabled: Z, playerApi: w, playerState: I, publisherDisplayName: L?.publisherDisplayName, publisherProfileImageUrl: L?.publisherProfileImageUrl, showScrubber: "ad" !== L?.displayType && (!L?.isLive || Z) }))), a.createElement(s.Z, { show: K }, a.createElement(m.Z, { additionalBadges: r, mediaAccessibilityLabel: N, playerApi: w, playerDisplayOptions: x, playerState: I, position: "left" })), a.createElement(s.Z, { show: J }, a.createElement(m.Z, { playerApi: w, playerDisplayOptions: x, playerState: I, position: "right" })), a.createElement(s.Z, { show: Y }, a.createElement(m.Z, { playerApi: w, playerDisplayOptions: x, playerState: I, position: "topRight" })))),
                                a.createElement(s.Z, { show: z }, z && a.createElement(S.Z, { imageSrc: O, includeDisputeLinkInCopyrightErrorMessage: v, playerApi: w, playerState: I })),
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
            const v = A;
        },
        676066: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                n = r(890601),
                s = r(783427),
                i = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12.13 1.5c-4.684 0-8.387 4.316-8.387 9.055 0 4.95 6.51 11.945 8.386 11.945 1.642 0 8.152-7.383 8.152-12.334 0-4.74-3.702-8.666-8.153-8.666zm.026 13.17c-2.924 0-5.178-2.232-5.178-4.84 0-1.217.402-2.313 1.08-3.178v.01c0 1.08.884 1.958 1.976 1.958s1.977-.877 1.977-1.958c0-.8-.486-1.488-1.182-1.79.422-.106.865-.168 1.327-.168 2.636 0 4.89 2.23 4.89 5.126 0 2.61-2.252 4.84-4.89 4.84z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loaders.video.VideoPlayerDefaultUI.db3a6c1a.js.map

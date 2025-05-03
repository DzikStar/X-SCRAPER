"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loaders.video.VideoPlayerDefaultUI"],
    {
        738584: (e, t, r) => {
            r.d(t, { o: () => h, Z: () => g });
            var a = r(807896),
                n = r(202784),
                i = r(928316),
                l = r(682474),
                s = r(392237),
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
                    const { aspectRatio: r, containerRef: a, guestsState: n, playerApi: i, playerState: l } = t;
                    return i && a && l ? e({ aspectRatio: r, guestsState: n, playerApi: i, playerState: l, containerRef: a }) : null;
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
                        { additionalBadges: s, aspectRatio: p, basePlayerClass: d, children: u, includeDisputeLinkInCopyrightErrorMessage: h, isFullScreen: g, objectFitVideo: S, onApiReady: b, onScroll: E, onStateUpdate: f, playerId: v, size: C, ...P } = this.props,
                        _ = { aspectRatio: this.props.aspectRatio, guestsState: e, playerApi: t, playerState: r, containerRef: this._containerRef },
                        A = { ..._, playerState: i };
                    return n.createElement(
                        l.Z,
                        { isFullScreen: g, onScroll: E, ratio: p, style: [m.root, m[C]] },
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
            (y.Consumer = h), (y.defaultProps = { aspectRatio: s.default.theme.aspectRatios.landscape, size: "fill" }), (y.Context = n.createContext({ aspectRatio: s.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null })), (y.PeriodicContext = n.createContext({ aspectRatio: s.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null }));
            const m = s.default.create({ root: { position: "relative" }, fill: { width: "100%", height: "100%" }, small: { width: 480, height: 270 }, medium: { width: 640, height: 360 }, large: { width: 800, height: 450 } }),
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
            r.d(t, { Z: () => l });
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
            class l extends n.Component {
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
                    return n.createElement(l.RegistrationContext.Provider, { value: this._registrationContext }, n.createElement(l.ProviderContext.Provider, { value: this.state }, this.props.children));
                }
            }
            (a = l), (l.MetadataSubscriber = ({ children: e, playerId: t }) => n.createElement(a.ProviderContext.Consumer, null, ({ players: r }) => n.createElement(i, { playerApi: r && r[t] }, e))), (l.RegistrationContext = n.createContext({ registerPlayer: void 0 })), (l.ProviderContext = n.createContext({ players: {} }));
        },
        893164: (e, t, r) => {
            r.d(t, { Z: () => h });
            var a = r(202784),
                n = r(325686),
                i = r(674132),
                l = r.n(i),
                s = r(355830),
                o = r(731708),
                c = r(154003),
                p = r(992942),
                d = r(392237);
            const u = l().a9edea48;
            function h(e) {
                const { displayBackgroundImage: t = !1, errorMessage: r, iconPlayError: i, imageSrc: l, onReloadPress: h } = e;
                return a.createElement(n.Z, { style: [d.default.absoluteFill, t ? null : y.blankOverlay] }, t ? a.createElement(a.Fragment, null, a.createElement(n.Z, { style: y.backgroundImage }, l && a.createElement(p.Z, { resizeMode: "cover", source: l, style: d.default.absoluteFill })), a.createElement(n.Z, { style: y.overlay })) : null, a.createElement(n.Z, { style: y.errorContainer }, a.createElement(n.Z, null, i ? a.createElement(s.default, { style: y.playErrorIcon }) : null), a.createElement(n.Z, { focusable: !0 }, a.createElement(o.ZP, { style: t ? y.errorMsgTextWhite : y.errorMsgTextGray }, r)), h ? a.createElement(c.ZP, { onPress: h, style: y.buttonContainer, type: "brandFilled" }, u) : null));
            }
            const y = d.default.create((e) => ({ backgroundImage: { ...d.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...d.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack77 }, blankOverlay: { backgroundColor: e.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: e.spaces.space32 }, errorMsgTextWhite: { color: e.colors.white, textAlign: "center", marginBottom: e.spaces.space20 }, errorMsgTextGray: { color: e.colors.gray700, textAlign: "center", marginBottom: e.spaces.space20 }, playErrorIcon: { fill: e.colors.gray700, height: e.spaces.space48, width: e.spaces.space48, marginHorizontal: "auto", paddingBottom: e.spaces.space20, verticalAlign: "middle" } }));
        },
        472238: (e, t, r) => {
            r.d(t, { Z: () => p });
            var a = r(202784),
                n = r(325686),
                i = r(674132),
                l = r.n(i),
                s = r(154003),
                o = r(392237);
            const c = l().f2d4e6f2;
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
                    return e && e.tracksFinished ? a.createElement(n.Z, { onClick: this._handleOnClick, style: d.overlay }, a.createElement(s.ZP, { "aria-label": c, onPress: this._handleOnPress, type: "onMediaDominantColorFilled" }, c)) : null;
                }
            }
            const d = o.default.create((e) => ({ overlay: { ...o.default.absoluteFillObject, backgroundColor: o.default.theme.colors.translucentBlack30, alignItems: "center", justifyContent: "center" } }));
        },
        629761: (e, t, r) => {
            r.r(t), r.d(t, { default: () => A });
            var a = r(202784),
                n = r(325686),
                i = r(908629),
                l = r(314916),
                s = r(738584),
                o = r(364779),
                c = r(502089),
                p = r(864386),
                d = r(734701),
                u = r(535814),
                h = r(424713),
                y = r(251478),
                m = r(867703),
                g = r(523319),
                S = r(38660),
                b = r(971765),
                E = r(916692),
                f = r(804455),
                v = r(162317),
                C = r(472238),
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
                                ? a.createElement(s.o, null, ({ aspectRatio: e }) => {
                                      const t = n || r.posterImage;
                                      return a.createElement(l.ZP, { aspectRatio: e, imageSrc: t, onTransitionComplete: this._handleTransitionAnimationComplete });
                                  })
                                : g
                                  ? this._renderVideo(e, !0)
                                  : a.createElement(u.Z, { enabled: !p && !!i, playerApi: t, playerState: r }, a.createElement(o.Z, { playerState: r }, this._renderVideo(e, !1)));
                        }),
                        (this._renderVideo = (e, t) => {
                            const { additionalBadges: r, "aria-label": l, containerRef: s, customControlBarIcon: o, enablePiP: p, fullscreenAdsDisabledOnIOS: u, guestsState: _, includeDisputeLinkInCopyrightErrorMessage: A, liveBroadcastRewindEnabled: Z, onClickBackground: R, onScribeEvent: w, playerApi: k, playerDisplayOptions: x, playerState: I, poster: M, renderPrerollActionMenu: O, shouldShowAltLabel: D, showWatchAgain: T } = this.props;
                            if (!k || !I) return null;
                            const { Observer: B, observed: F } = e,
                                z = (0, P.JN)(I, F, P.i2),
                                L = !!I.error,
                                U = (0, h.Ci)(I),
                                V = U?.contentType === y.wF.GIF,
                                j = "PLAY_REQUESTED" !== I.controls?.playState,
                                H = T && I.tracksFinished,
                                G = z && I.isPreview,
                                W = !(!z || !U?.isLive),
                                N = D ? l : void 0,
                                K = !x?.hideLeftBadges && (!!N || V || G || W),
                                J = !x?.hideRightBadges && z,
                                Y = G || !z,
                                Q = !x?.hidePosterImage,
                                q = I.controls?.isPosterShown;
                            return a.createElement(
                                B,
                                { click: !0, interactionKey: P.IG.Root, mousemove: !0, mouseover: !0 },
                                L ? null : a.createElement(a.Fragment, null, a.createElement(E.Z, { hideControls: z, isTouchOnlyUI: P.i2, liveBroadcastRewindEnabled: Z, onClick: R, playerApi: k, playerDisplayOptions: x, playerState: I }), Q && !H && a.createElement(f.Z, { imageSrc: M, playerApi: k, playerState: I, withPlayButton: j }), a.createElement(g.Z, { playerState: I }), t ? a.createElement(v.Z, { containerRef: s, onSkip: this._handleSkip, playerApi: k, playerState: I, renderPrerollActionMenu: O }) : a.createElement(a.Fragment, null, !V && T && a.createElement(C.Z, { onScribeEvent: w, playerApi: k, playerState: I }), a.createElement(b.Z, { guestsState: _, playerState: I }), !V && a.createElement(B, { focus: !0, interactionKey: P.IG.VideoCTA, mouseover: !0 }, a.createElement(i.Z, { show: !z }, a.createElement(d.Z, { playerApi: k, playerState: I }))), !V && !q && a.createElement(a.Fragment, null, a.createElement(B, { focus: !0, interactionKey: P.IG.A11YHook }, a.createElement(n.Z, { focusable: !0 })), a.createElement(B, { focus: !0, interactionKey: P.IG.ControlBar, mouseover: !0, touch: !0 }, a.createElement(c.Z, { containerRef: s, customControlBarIcon: o, enablePiP: p, fullscreenAdsDisabledOnIOS: u, hideControls: z, liveBroadcastRewindEnabled: Z, playerApi: k, playerState: I, publisherDisplayName: U?.publisherDisplayName, publisherProfileImageUrl: U?.publisherProfileImageUrl, showScrubber: "ad" !== U?.displayType && (!U?.isLive || Z) }))), a.createElement(i.Z, { show: K }, a.createElement(m.Z, { additionalBadges: r, mediaAccessibilityLabel: N, playerApi: k, playerDisplayOptions: x, playerState: I, position: "left" })), a.createElement(i.Z, { show: J }, a.createElement(m.Z, { playerApi: k, playerDisplayOptions: x, playerState: I, position: "right" })), a.createElement(i.Z, { show: Y }, a.createElement(m.Z, { playerApi: k, playerDisplayOptions: x, playerState: I, position: "topRight" })))),
                                a.createElement(i.Z, { show: L }, L && a.createElement(S.Z, { imageSrc: M, includeDisputeLinkInCopyrightErrorMessage: A, playerApi: k, playerState: I })),
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
        360816: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                l = r(717683),
                s = r(347101);
            const o = (e = {}) => {
                const t = a.useContext(l.Z),
                    { direction: r } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style, t && s.Z.iconRTL], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3.457 2.04L9 7.59V3h2v8H3V9h4.586L2.043 3.46l1.414-1.42zM19.5 8H14V6h5.5C20.881 6 22 7.12 22 8.5v11c0 1.38-1.119 2.5-2.5 2.5h-11C7.119 22 6 20.88 6 19.5V14h2v5.5c0 .28.224.5.5.5h11c.276 0 .5-.22.5-.5v-11c0-.28-.224-.5-.5-.5z" })) }, { writingDirection: r });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        466445: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M21 12L4 2v20l17-10z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        234558: (e, t, r) => {
            r.r(t), r.d(t, { default: () => o });
            var a = r(202784),
                n = r(890601),
                i = r(783427),
                l = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M9.5 16.45v-8.9l7 4.45-7 4.45zM22.25 12c0 5.66-4.589 10.25-10.25 10.25S1.75 17.66 1.75 12 6.339 1.75 12 1.75 22.25 6.34 22.25 12zM12 20.25c4.556 0 8.25-3.69 8.25-8.25S16.556 3.75 12 3.75 3.75 7.44 3.75 12s3.694 8.25 8.25 8.25z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loaders.video.VideoPlayerDefaultUI.31633fda.js.map

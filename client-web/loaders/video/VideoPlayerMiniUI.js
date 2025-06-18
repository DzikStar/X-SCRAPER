"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loaders.video.VideoPlayerMiniUI"],
    {
        738584: (e, t, a) => {
            a.d(t, { o: () => y, Z: () => b });
            var r = a(807896),
                l = a(202784),
                n = a(928316),
                s = a(682474),
                i = a(392237),
                o = a(893164),
                c = a(395367),
                d = a(908478);
            function p(e) {
                let t = u(e);
                return (e) => {
                    const a = u(e);
                    return (0, d.Z)(t, a) || (t = a), t;
                };
            }
            function u(e) {
                if (!e || "object" != typeof e) return e;
                const t = JSON.parse(JSON.stringify(e));
                return delete t.dataUsageBytes, (t.tracks = t.tracks.map((e) => ("number" == typeof e.currentTimeMs && delete e.currentTimeMs, e))), t;
            }
            function y({ children: e, periodic: t }) {
                const a = t ? h.PeriodicContext.Consumer : h.Context.Consumer;
                return l.createElement(a, null, (t) => {
                    const { aspectRatio: a, containerRef: r, guestsState: l, playerApi: n, playerState: s } = t;
                    return n && r && s ? e({ aspectRatio: a, guestsState: l, playerApi: n, playerState: s, containerRef: r }) : null;
                });
            }
            class h extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this._cache = { stablePlayerState: p(null) }),
                        (this.state = { hasError: null, guestsState: null, playerApi: null, playerState: null, stablePlayerState: null }),
                        (this._renderCustomOverlay = () => {
                            const { children: e, enablePiP: t } = this.props,
                                { guestsState: a, playerApi: r, stablePlayerState: l } = this.state;
                            return r && e ? ("function" == typeof e ? e({ enablePiP: t, guestsState: a, playerApi: r, playerState: l, containerRef: this._containerRef }) : e) : null;
                        }),
                        (this._handleReload = () => this.setState(() => ({ hasError: null }))),
                        (this._handlePlayerApi = (e) => (t) => {
                            const { playerId: a } = this.props;
                            this.setState({ playerApi: t }),
                                this.props.onApiReady && this.props.onApiReady(t),
                                a && e && (this._unregister = e(a, t)),
                                (this._unsubscribe = t.subscribe((e, t) => {
                                    const a = this._cache.stablePlayerState(e);
                                    this.setState({ stablePlayerState: a, playerState: e, guestsState: t }), this.props.onStateUpdate && this.props.onStateUpdate(e, t);
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
                    const a = { error: e, info: t };
                    this.setState(() => ({ hasError: a }));
                }
                render() {
                    const { guestsState: e, playerApi: t, playerState: a, stablePlayerState: n } = this.state,
                        { additionalBadges: i, aspectRatio: d, basePlayerClass: p, children: u, includeDisputeLinkInCopyrightErrorMessage: y, isFullScreen: b, objectFitVideo: g, onApiReady: f, onScroll: S, onStateUpdate: E, playerId: P, size: v, ...C } = this.props,
                        D = { aspectRatio: this.props.aspectRatio, guestsState: e, playerApi: t, playerState: a, containerRef: this._containerRef },
                        A = { ...D, playerState: n };
                    return l.createElement(
                        s.Z,
                        { isFullScreen: b, onScroll: S, ratio: d, style: [m.root, m[v]] },
                        this.state.hasError
                            ? l.createElement(o.Z, { onReloadPress: this._handleReload })
                            : l.createElement(
                                  h.Context.Provider,
                                  { value: A },
                                  l.createElement(
                                      h.PeriodicContext.Provider,
                                      { value: D },
                                      l.createElement(c.Z.RegistrationContext.Consumer, null, ({ registerPlayer: e }) => l.createElement(p, (0, r.Z)({}, C, { customOverlay: this._renderCustomOverlay(), displayOptions: { objectFitVideo: g }, setPlayerApi: this._handlePlayerApi(e) }))),
                                  ),
                              ),
                    );
                }
            }
            (h.Consumer = y), (h.defaultProps = { aspectRatio: i.default.theme.aspectRatios.landscape, size: "fill" }), (h.Context = l.createContext({ aspectRatio: i.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null })), (h.PeriodicContext = l.createContext({ aspectRatio: i.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null }));
            const m = i.default.create({ root: { position: "relative" }, fill: { width: "100%", height: "100%" }, small: { width: 480, height: 270 }, medium: { width: 640, height: 360 }, large: { width: 800, height: 450 } }),
                b = h;
        },
        395367: (e, t, a) => {
            a.d(t, { Z: () => s });
            var r,
                l = a(202784);
            class n extends l.Component {
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
            class s extends l.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { players: {} }),
                        (this._mounted = !1),
                        (this._registerPlayer = (e, t) => {
                            const a = new Promise((a) => {
                                setTimeout(() => {
                                    this._mounted ? this.setState((a) => ({ players: { ...a.players, [e]: t } }), a) : a();
                                });
                            });
                            return () => {
                                a.then(() => this._unregisterPlayer(e));
                            };
                        }),
                        (this._unregisterPlayer = (e) => {
                            this._mounted &&
                                this.setState((t) => {
                                    const { [e]: a, ...r } = this.state.players;
                                    return { players: r };
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
                    return l.createElement(s.RegistrationContext.Provider, { value: this._registrationContext }, l.createElement(s.ProviderContext.Provider, { value: this.state }, this.props.children));
                }
            }
            (r = s), (s.MetadataSubscriber = ({ children: e, playerId: t }) => l.createElement(r.ProviderContext.Consumer, null, ({ players: a }) => l.createElement(n, { playerApi: a && a[t] }, e))), (s.RegistrationContext = l.createContext({ registerPlayer: void 0 })), (s.ProviderContext = l.createContext({ players: {} }));
        },
        986460: (e, t, a) => {
            a.d(t, { GS: () => c, Js: () => s, M2: () => i, Nj: () => p, cm: () => d, gF: () => n, iG: () => y, kA: () => o, lO: () => u });
            var r = a(111677),
                l = a.n(r);
            const n = l().fb236728,
                s = l().e9bd453e,
                i = l().f17dfdb6,
                o = l().d46b00b0,
                c = l().ec8ab8b4,
                d = l().b8b6344a,
                p = l().c9a642fa,
                u = l().c27e60b0,
                y = l().d2969f10;
        },
        893164: (e, t, a) => {
            a.d(t, { Z: () => y });
            var r = a(202784),
                l = a(325686),
                n = a(111677),
                s = a.n(n),
                i = a(355830),
                o = a(731708),
                c = a(154003),
                d = a(992942),
                p = a(392237);
            const u = s().a9edea48;
            function y(e) {
                const { displayBackgroundImage: t = !1, errorMessage: a, iconPlayError: n, imageSrc: s, onReloadPress: y } = e;
                return r.createElement(l.Z, { style: [p.default.absoluteFill, t ? null : h.blankOverlay] }, t ? r.createElement(r.Fragment, null, r.createElement(l.Z, { style: h.backgroundImage }, s && r.createElement(d.Z, { resizeMode: "cover", source: s, style: p.default.absoluteFill })), r.createElement(l.Z, { style: h.overlay })) : null, r.createElement(l.Z, { style: h.errorContainer }, r.createElement(l.Z, null, n ? r.createElement(i.default, { style: h.playErrorIcon }) : null), r.createElement(l.Z, { focusable: !0 }, r.createElement(o.ZP, { style: t ? h.errorMsgTextWhite : h.errorMsgTextGray }, a)), y ? r.createElement(c.ZP, { onPress: y, style: h.buttonContainer, type: "brandFilled" }, u) : null));
            }
            const h = p.default.create((e) => ({ backgroundImage: { ...p.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...p.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack77 }, blankOverlay: { backgroundColor: e.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: e.spaces.space32 }, errorMsgTextWhite: { color: e.colors.white, textAlign: "center", marginBottom: e.spaces.space20 }, errorMsgTextGray: { color: e.colors.gray700, textAlign: "center", marginBottom: e.spaces.space20 }, playErrorIcon: { fill: e.colors.gray700, height: e.spaces.space48, width: e.spaces.space48, marginHorizontal: "auto", paddingBottom: e.spaces.space20, verticalAlign: "middle" } }));
        },
        472238: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(202784),
                l = a(325686),
                n = a(111677),
                s = a.n(n),
                i = a(154003),
                o = a(392237);
            const c = s().f2d4e6f2;
            class d extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._createWatchAgainHandler = (e) => (t) => {
                            const { onScribeEvent: a, playerApi: r } = this.props;
                            t.stopPropagation(), a && a({ namespace: { element: e, action: "click" } }), r && r.replay();
                        }),
                        (this._handleOnPress = this._createWatchAgainHandler("watch_again_button")),
                        (this._handleOnClick = this._createWatchAgainHandler("watch_again_overlay"));
                }
                render() {
                    const { playerState: e } = this.props;
                    return e && e.tracksFinished ? r.createElement(l.Z, { onClick: this._handleOnClick, style: p.overlay }, r.createElement(i.ZP, { "aria-label": c, onPress: this._handleOnPress, type: "onMediaDominantColorFilled" }, c)) : null;
                }
            }
            const p = o.default.create((e) => ({ overlay: { ...o.default.absoluteFillObject, backgroundColor: o.default.theme.colors.translucentBlack30, alignItems: "center", justifyContent: "center" } }));
        },
        197765: (e, t, a) => {
            a.d(t, { Z: () => b });
            var r = a(807896),
                l = a(202784),
                n = a(111677),
                s = a.n(n),
                i = a(731708),
                o = a(392237),
                c = a(738584),
                d = a(424713),
                p = a(251478);
            const u = s().f1ad0df1,
                y = s().ef16ab2b,
                h = l.memo(
                    ({ playerState: e, style: t }) => {
                        const a = l.useMemo(() => [m.label, t], [t]),
                            r = ((e) => {
                                const t = (0, d.Ci)(e);
                                if (!t) return null;
                                const { advertiserName: a, currentTimeMs: r, displayType: l, durationMs: n } = t;
                                if (n && (e.isPlaying || r < n)) {
                                    const e = (0, d.mr)((n - r) / 1e3);
                                    return l === p.ak.AD ? (a ? y({ advertiserName: a, timeRemaining: e }) : u({ timeRemaining: e })) : e;
                                }
                                return n ? (0, d.mr)(n / 1e3) : null;
                            })(e);
                        return r ? l.createElement(i.ZP, { style: a }, r) : null;
                    },
                    function (e, t) {
                        const a = (0, d.Ci)(e.playerState),
                            r = (0, d.Ci)(t.playerState);
                        if (!r || !a) return !1;
                        if (["advertiserName", "durationMs", "displayType"].some((e) => r[e] !== a[e])) return !1;
                        const l = (e) => e && (0, d.mr)((e.durationMs - e.currentTimeMs) / 1e3);
                        return !(l(a) !== l(r));
                    },
                ),
                m = o.default.create((e) => ({ label: { fontVariantNumeric: "tabular-nums" } })),
                b = (e) => l.createElement(c.o, { periodic: !0 }, ({ playerState: t }) => l.createElement(h, (0, r.Z)({}, e, { playerState: t })));
        },
        506707: (e, t, a) => {
            a.d(t, { Z: () => f });
            var r = a(807896),
                l = a(202784),
                n = a(643442),
                s = a(737691),
                i = a(466445),
                o = a(530732),
                c = a(392237),
                d = a(986460),
                p = a(424713);
            const u = { preferredVerticalOrientation: "up", preferredHorizontalOrientation: "end", withLayer: !1, withExtraSpace: !1 },
                y = { ...u, label: d.M2 },
                h = { ...u, label: d.gF },
                m = { ...u, label: d.Js },
                b = ({ iconStyle: e, liveBroadcastRewindEnabled: t, playerApi: a, playerState: c, style: u, ...b }) => {
                    const f = l.useMemo(() => [g.playButton, u], [u]),
                        S = l.useMemo(() => [g.playIcon, e], [e]);
                    if (!c || !a) return null;
                    const { controls: E, isPlaying: P } = c,
                        { pause: v, play: C, replay: D } = a,
                        A = (0, p.Ci)(c);
                    if (!A || (A.isLive && !t)) return null;
                    let _;
                    return (_ = P || (E && "PLAY_REQUESTED" === E.playState) ? { "aria-label": d.gF, children: l.createElement(n.default, { style: S }), hoverLabel: h, onPress: v } : E.isReplayButtonShown ? { "aria-label": d.Js, children: l.createElement(s.default, { style: S }), hoverLabel: m, onPress: D } : { "aria-label": d.M2, children: l.createElement(i.default, { style: S }), hoverLabel: y, onPress: C }), l.createElement(o.Z, (0, r.Z)({}, b, _, { style: f }));
                },
                g = c.default.create((e) => ({ playButton: { padding: e.spaces.space4 }, playIcon: { height: e.spaces.space12, width: e.spaces.space12 } })),
                f = l.memo(b);
        },
        20030: (e, t, a) => {
            a.r(t), a.d(t, { default: () => F });
            var r = a(202784),
                l = a(325686),
                n = a(908629),
                s = a(392237),
                i = a(364779),
                o = a(535814),
                c = a(424713),
                d = a(251478),
                p = a(111677),
                u = a.n(p),
                y = a(38502),
                h = a(804579),
                m = a(530732),
                b = a(868634),
                g = a(819329),
                f = a(506707),
                S = a(197765);
            const E = u().j25d7cca,
                P = u().a858b25c,
                v = { preferredVerticalOrientation: "up", preferredHorizontalOrientation: "end", withLayer: !1, withExtraSpace: !1, label: E },
                C = { ...v, label: P },
                D = ({ liveBroadcastRewindEnabled: e, mediaAccessibilityLabel: t, playerApi: a, playerDisplayOptions: n, playerState: s }) => {
                    const i = s ? (0, c.Ci)(s) : void 0,
                        o = s
                            ? [
                                  ((t) => {
                                      const s = i?.contentType !== d.wF.GIF && !n?.badgeConfiguration?.hideDuration;
                                      return r.createElement(b.ZP, { key: "time-badge", style: k.durationBadge }, r.createElement(l.Z, { style: k.combinedLabel }, r.createElement(f.Z, { liveBroadcastRewindEnabled: e, playerApi: a, playerState: t, style: k.playButton }), s && r.createElement(S.Z, { key: "time-badge-time", style: k.timeRemaining })));
                                  })(s),
                                  i?.contentType === d.wF.GIF ? r.createElement(b.ZP, { bold: !0, key: "gif", type: "gif" }) : null,
                                  t ? r.createElement(b.ZP, { altLabel: t, bold: !0, key: "alt" }) : null,
                                  ((e, t) => {
                                      if (!i?.hasCaptions) return null;
                                      const { areCaptionsShown: a } = t,
                                          { toggleCaptions: n } = e;
                                      return r.createElement(b.ZP, { key: "captions-badge" }, r.createElement(l.Z, { style: k.captionsLabel }, r.createElement(m.Z, { "aria-label": a ? E : P, hoverLabel: a ? v : C, onPress: n, style: k.captionsButton }, a ? r.createElement(y.default, { style: k.captionsIcon }) : r.createElement(h.default, { style: k.captionsIcon }))));
                                  })(a, s),
                                  ((e) => {
                                      if (n?.badgeConfiguration?.hideViewCount) return null;
                                      const t = (0, c.xB)(e),
                                          a = t && (0, c.XE)(t);
                                      return a ? r.createElement(b.ZP, { key: "viewer-count-badge" }, a) : null;
                                  })(s),
                              ]
                            : [],
                        p = o.filter(Boolean).length >= 1;
                    return (
                        r.useEffect(() => {
                            p ? a.setCaptionDefaultOffset({ bottom: _ }) : a.setCaptionDefaultOffset({ bottom: A });
                        }, [p, a]),
                        p ? r.createElement(g.Z, { align: "left" }, o) : null
                    );
                },
                A = s.default.theme.spacesPx.space12,
                _ = s.default.theme.spacesPx.space40,
                k = s.default.create((e) => ({ playButton: { pointerEvents: "auto" }, captionsButton: { pointerEvents: "auto" }, captionsIcon: { height: e.spaces.space16, width: e.spaces.space16 }, captionsLabel: { display: "flex", alignItems: "center" }, combinedLabel: { display: "flex", flexDirection: "row", alignItems: "center" }, durationBadge: { flexDirection: "row", paddingHorizontal: 0, paddingVertical: 0, pointerEvents: "auto" }, timeRemaining: { paddingHorizontal: e.spaces.space4 } })),
                w = r.memo(D);
            var Z = a(523319),
                R = a(38660),
                M = a(804455),
                x = a(472238);
            const I = (0, a(523561).Z)({ loader: () => Promise.all([a.e("icons.21"), a.e("icons.16"), a.e("icons.19"), a.e("modules.common-e907d115"), a.e("modules.common-e019dbda"), a.e("icons.24"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-66c34182"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-6af19649"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-f16ea073"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-8e0713f9"), a.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerPrerollUI~loaders.video.VideoPlayerEventsU"), a.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerPrerollUI"), a.e("loaders.video.VideoPlayerPrerollUI")]).then(a.bind(a, 463371)), renderPlaceholder: () => r.createElement("div", { "data-testid": "videoPlayer" }) }),
                O = ({ "aria-label": e, containerRef: t, id: a, includeDisputeLinkInCopyrightErrorMessage: s, liveBroadcastRewindEnabled: p, onClick: u, onScribeEvent: y, playerApi: h, playerDisplayOptions: m, playerState: b, poster: g, shouldShowAltLabel: f, showWatchAgain: S, useKeyboardShortcuts: E }) => {
                    const P = r.useCallback(() => {
                        u?.({ playerState: b, playerApi: h });
                    }, [u, h, b]);
                    if (!h || !b) return null;
                    const v = (0, c.Ci)(b);
                    if (v?.displayType === d.ak.AD && v?.useRedesignedPrerollUx) return r.createElement(I, { containerRef: t, playerApi: h, playerDisplayOptions: m, playerState: b, poster: g, showWatchAgain: S });
                    const C = !!b.error,
                        D = v?.contentType === d.wF.GIF,
                        A = S && b.tracksFinished,
                        _ = f ? e : void 0;
                    return r.createElement(
                        o.Z,
                        { enabled: !!E, playerApi: h, playerState: b },
                        r.createElement(
                            i.Z,
                            { playerState: b },
                            !C &&
                                (function () {
                                    const e = !m?.hidePosterImage && !A,
                                        t = S && !D;
                                    return r.createElement(r.Fragment, null, r.createElement(l.Z, { onClick: P, style: B.base, testID: `video-player-mini-ui-${a || ""}` }), e && r.createElement(M.Z, { imageSrc: g, playerApi: h, playerState: b, withPlayButton: !1 }), r.createElement(Z.Z, { playerState: b }), t && r.createElement(x.Z, { onScribeEvent: y, playerApi: h, playerState: b }), r.createElement(w, { liveBroadcastRewindEnabled: p, mediaAccessibilityLabel: _, playerApi: h, playerDisplayOptions: m, playerState: b }));
                                })(),
                            r.createElement(n.Z, { show: C }, C && r.createElement(R.Z, { imageSrc: g, includeDisputeLinkInCopyrightErrorMessage: s, playerApi: h, playerState: b })),
                        ),
                    );
                },
                B = s.default.create((e) => ({ base: { ...s.default.absoluteFillObject, cursor: "pointer" } })),
                F = r.memo(O);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loaders.video.VideoPlayerMiniUI.7a59289a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loaders.video.VideoPlayerMiniUI"],
    {
        738584: (e, t, a) => {
            a.d(t, { o: () => y, Z: () => b });
            var r = a(807896),
                n = a(202784),
                l = a(928316),
                i = a(682474),
                s = a(392237),
                o = a(893164),
                c = a(395367),
                p = a(908478);
            function d(e) {
                let t = u(e);
                return (e) => {
                    const a = u(e);
                    return (0, p.Z)(t, a) || (t = a), t;
                };
            }
            function u(e) {
                if (!e || "object" != typeof e) return e;
                const t = JSON.parse(JSON.stringify(e));
                return delete t.dataUsageBytes, (t.tracks = t.tracks.map((e) => ("number" == typeof e.currentTimeMs && delete e.currentTimeMs, e))), t;
            }
            function y({ children: e, periodic: t }) {
                const a = t ? h.PeriodicContext.Consumer : h.Context.Consumer;
                return n.createElement(a, null, (t) => {
                    const { aspectRatio: a, containerRef: r, guestsState: n, playerApi: l, playerState: i } = t;
                    return l && r && i ? e({ aspectRatio: a, guestsState: n, playerApi: l, playerState: i, containerRef: r }) : null;
                });
            }
            class h extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._cache = { stablePlayerState: d(null) }),
                        (this.state = { hasError: null, guestsState: null, playerApi: null, playerState: null, stablePlayerState: null }),
                        (this._renderCustomOverlay = () => {
                            const { children: e, enablePiP: t } = this.props,
                                { guestsState: a, playerApi: r, stablePlayerState: n } = this.state;
                            return r && e ? ("function" == typeof e ? e({ enablePiP: t, guestsState: a, playerApi: r, playerState: n, containerRef: this._containerRef }) : e) : null;
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
                        const e = l.findDOMNode(this);
                        e && e instanceof HTMLElement && (this._containerRef = e);
                    }
                }
                componentDidCatch(e, t) {
                    const a = { error: e, info: t };
                    this.setState(() => ({ hasError: a }));
                }
                render() {
                    const { guestsState: e, playerApi: t, playerState: a, stablePlayerState: l } = this.state,
                        { additionalBadges: s, aspectRatio: p, basePlayerClass: d, children: u, includeDisputeLinkInCopyrightErrorMessage: y, isFullScreen: b, objectFitVideo: f, onApiReady: g, onScroll: S, onStateUpdate: E, playerId: P, size: v, ...C } = this.props,
                        _ = { aspectRatio: this.props.aspectRatio, guestsState: e, playerApi: t, playerState: a, containerRef: this._containerRef },
                        A = { ..._, playerState: l };
                    return n.createElement(
                        i.Z,
                        { isFullScreen: b, onScroll: S, ratio: p, style: [m.root, m[v]] },
                        this.state.hasError
                            ? n.createElement(o.Z, { onReloadPress: this._handleReload })
                            : n.createElement(
                                  h.Context.Provider,
                                  { value: A },
                                  n.createElement(
                                      h.PeriodicContext.Provider,
                                      { value: _ },
                                      n.createElement(c.Z.RegistrationContext.Consumer, null, ({ registerPlayer: e }) => n.createElement(d, (0, r.Z)({}, C, { customOverlay: this._renderCustomOverlay(), displayOptions: { objectFitVideo: f }, setPlayerApi: this._handlePlayerApi(e) }))),
                                  ),
                              ),
                    );
                }
            }
            (h.Consumer = y), (h.defaultProps = { aspectRatio: s.default.theme.aspectRatios.landscape, size: "fill" }), (h.Context = n.createContext({ aspectRatio: s.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null })), (h.PeriodicContext = n.createContext({ aspectRatio: s.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null }));
            const m = s.default.create({ root: { position: "relative" }, fill: { width: "100%", height: "100%" }, small: { width: 480, height: 270 }, medium: { width: 640, height: 360 }, large: { width: 800, height: 450 } }),
                b = h;
        },
        395367: (e, t, a) => {
            a.d(t, { Z: () => i });
            var r,
                n = a(202784);
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
            class i extends n.Component {
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
                    return n.createElement(i.RegistrationContext.Provider, { value: this._registrationContext }, n.createElement(i.ProviderContext.Provider, { value: this.state }, this.props.children));
                }
            }
            (r = i), (i.MetadataSubscriber = ({ children: e, playerId: t }) => n.createElement(r.ProviderContext.Consumer, null, ({ players: a }) => n.createElement(l, { playerApi: a && a[t] }, e))), (i.RegistrationContext = n.createContext({ registerPlayer: void 0 })), (i.ProviderContext = n.createContext({ players: {} }));
        },
        986460: (e, t, a) => {
            a.d(t, { GS: () => c, Js: () => i, M2: () => s, Nj: () => d, cm: () => p, gF: () => l, iG: () => y, kA: () => o, lO: () => u });
            var r = a(111677),
                n = a.n(r);
            const l = n().fb236728,
                i = n().e9bd453e,
                s = n().f17dfdb6,
                o = n().d46b00b0,
                c = n().ec8ab8b4,
                p = n().b8b6344a,
                d = n().c9a642fa,
                u = n().c27e60b0,
                y = n().d2969f10;
        },
        472238: (e, t, a) => {
            a.d(t, { Z: () => p });
            var r = a(202784),
                n = a(325686),
                l = a(111677),
                i = a.n(l),
                s = a(154003),
                o = a(392237);
            const c = i().f2d4e6f2;
            class p extends r.PureComponent {
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
                    return e && e.tracksFinished ? r.createElement(n.Z, { onClick: this._handleOnClick, style: d.overlay }, r.createElement(s.ZP, { "aria-label": c, onPress: this._handleOnPress, type: "onMediaDominantColorFilled" }, c)) : null;
                }
            }
            const d = o.default.create((e) => ({ overlay: { ...o.default.absoluteFillObject, backgroundColor: o.default.theme.colors.translucentBlack30, alignItems: "center", justifyContent: "center" } }));
        },
        197765: (e, t, a) => {
            a.d(t, { Z: () => b });
            var r = a(807896),
                n = a(202784),
                l = a(111677),
                i = a.n(l),
                s = a(731708),
                o = a(392237),
                c = a(738584),
                p = a(424713),
                d = a(251478);
            const u = i().f1ad0df1,
                y = i().ef16ab2b,
                h = n.memo(
                    ({ playerState: e, style: t }) => {
                        const a = n.useMemo(() => [m.label, t], [t]),
                            r = ((e) => {
                                const t = (0, p.Ci)(e);
                                if (!t) return null;
                                const { advertiserName: a, currentTimeMs: r, displayType: n, durationMs: l } = t;
                                if (l && (e.isPlaying || r < l)) {
                                    const e = (0, p.mr)((l - r) / 1e3);
                                    return n === d.ak.AD ? (a ? y({ advertiserName: a, timeRemaining: e }) : u({ timeRemaining: e })) : e;
                                }
                                return l ? (0, p.mr)(l / 1e3) : null;
                            })(e);
                        return r ? n.createElement(s.ZP, { style: a }, r) : null;
                    },
                    function (e, t) {
                        const a = (0, p.Ci)(e.playerState),
                            r = (0, p.Ci)(t.playerState);
                        if (!r || !a) return !1;
                        if (["advertiserName", "durationMs", "displayType"].some((e) => r[e] !== a[e])) return !1;
                        const n = (e) => e && (0, p.mr)((e.durationMs - e.currentTimeMs) / 1e3);
                        return !(n(a) !== n(r));
                    },
                ),
                m = o.default.create((e) => ({ label: { fontVariantNumeric: "tabular-nums" } })),
                b = (e) => n.createElement(c.o, { periodic: !0 }, ({ playerState: t }) => n.createElement(h, (0, r.Z)({}, e, { playerState: t })));
        },
        506707: (e, t, a) => {
            a.d(t, { Z: () => g });
            var r = a(807896),
                n = a(202784),
                l = a(643442),
                i = a(737691),
                s = a(466445),
                o = a(530732),
                c = a(392237),
                p = a(986460),
                d = a(424713);
            const u = { preferredVerticalOrientation: "up", preferredHorizontalOrientation: "end", withLayer: !1, withExtraSpace: !1 },
                y = { ...u, label: p.M2 },
                h = { ...u, label: p.gF },
                m = { ...u, label: p.Js },
                b = ({ iconStyle: e, liveBroadcastRewindEnabled: t, playerApi: a, playerState: c, style: u, ...b }) => {
                    const g = n.useMemo(() => [f.playButton, u], [u]),
                        S = n.useMemo(() => [f.playIcon, e], [e]);
                    if (!c || !a) return null;
                    const { controls: E, isPlaying: P } = c,
                        { pause: v, play: C, replay: _ } = a,
                        A = (0, d.Ci)(c);
                    if (!A || (A.isLive && !t)) return null;
                    let R;
                    return (R = P || (E && "PLAY_REQUESTED" === E.playState) ? { "aria-label": p.gF, children: n.createElement(l.default, { style: S }), hoverLabel: h, onPress: v } : E.isReplayButtonShown ? { "aria-label": p.Js, children: n.createElement(i.default, { style: S }), hoverLabel: m, onPress: _ } : { "aria-label": p.M2, children: n.createElement(s.default, { style: S }), hoverLabel: y, onPress: C }), n.createElement(o.Z, (0, r.Z)({}, b, R, { style: g }));
                },
                f = c.default.create((e) => ({ playButton: { padding: e.spaces.space4 }, playIcon: { height: e.spaces.space12, width: e.spaces.space12 } })),
                g = n.memo(b);
        },
        20030: (e, t, a) => {
            a.r(t), a.d(t, { default: () => L });
            var r = a(202784),
                n = a(325686),
                l = a(908629),
                i = a(392237),
                s = a(364779),
                o = a(535814),
                c = a(424713),
                p = a(251478),
                d = a(111677),
                u = a.n(d),
                y = a(38502),
                h = a(804579),
                m = a(530732),
                b = a(868634),
                f = a(819329),
                g = a(506707),
                S = a(197765);
            const E = u().j25d7cca,
                P = u().a858b25c,
                v = { preferredVerticalOrientation: "up", preferredHorizontalOrientation: "end", withLayer: !1, withExtraSpace: !1, label: E },
                C = { ...v, label: P },
                _ = ({ liveBroadcastRewindEnabled: e, mediaAccessibilityLabel: t, playerApi: a, playerDisplayOptions: l, playerState: i }) => {
                    const s = i ? (0, c.Ci)(i) : void 0,
                        o = i
                            ? [
                                  ((t) => {
                                      const i = s?.contentType !== p.wF.GIF && !l?.badgeConfiguration?.hideDuration;
                                      return r.createElement(b.ZP, { key: "time-badge", style: w.durationBadge }, r.createElement(n.Z, { style: w.combinedLabel }, r.createElement(g.Z, { liveBroadcastRewindEnabled: e, playerApi: a, playerState: t, style: w.playButton }), i && r.createElement(S.Z, { key: "time-badge-time", style: w.timeRemaining })));
                                  })(i),
                                  s?.contentType === p.wF.GIF ? r.createElement(b.ZP, { bold: !0, key: "gif", type: "gif" }) : null,
                                  t ? r.createElement(b.ZP, { altLabel: t, bold: !0, key: "alt" }) : null,
                                  ((e, t) => {
                                      if (!s?.hasCaptions) return null;
                                      const { areCaptionsShown: a } = t,
                                          { toggleCaptions: l } = e;
                                      return r.createElement(b.ZP, { key: "captions-badge" }, r.createElement(n.Z, { style: w.captionsLabel }, r.createElement(m.Z, { "aria-label": a ? E : P, hoverLabel: a ? v : C, onPress: l, style: w.captionsButton }, a ? r.createElement(y.default, { style: w.captionsIcon }) : r.createElement(h.default, { style: w.captionsIcon }))));
                                  })(a, i),
                                  ((e) => {
                                      if (l?.badgeConfiguration?.hideViewCount) return null;
                                      const t = (0, c.xB)(e),
                                          a = t && (0, c.XE)(t);
                                      return a ? r.createElement(b.ZP, { key: "viewer-count-badge" }, a) : null;
                                  })(i),
                              ]
                            : [],
                        d = o.filter(Boolean).length >= 1;
                    return (
                        r.useEffect(() => {
                            d ? a.setCaptionDefaultOffset({ bottom: R }) : a.setCaptionDefaultOffset({ bottom: A });
                        }, [d, a]),
                        d ? r.createElement(f.Z, { align: "left" }, o) : null
                    );
                },
                A = i.default.theme.spacesPx.space12,
                R = i.default.theme.spacesPx.space40,
                w = i.default.create((e) => ({ playButton: { pointerEvents: "auto" }, captionsButton: { pointerEvents: "auto" }, captionsIcon: { height: e.spaces.space16, width: e.spaces.space16 }, captionsLabel: { display: "flex", alignItems: "center" }, combinedLabel: { display: "flex", flexDirection: "row", alignItems: "center" }, durationBadge: { flexDirection: "row", paddingHorizontal: 0, paddingVertical: 0, pointerEvents: "auto" }, timeRemaining: { paddingHorizontal: e.spaces.space4 } })),
                Z = r.memo(_);
            var x = a(523319),
                k = a(38660),
                D = a(804455),
                I = a(472238);
            const M = (0, a(523561).Z)({ loader: () => Promise.all([a.e("icons.2"), a.e("icons.28"), a.e("modules.common-e907d115"), a.e("modules.common-e019dbda"), a.e("icons.25"), a.e("icons.4"), a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"), a.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerPrerollUI~loaders.video.VideoPlayerEventsU"), a.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerPrerollUI"), a.e("loaders.video.VideoPlayerPrerollUI")]).then(a.bind(a, 463371)), renderPlaceholder: () => r.createElement("div", { "data-testid": "videoPlayer" }) }),
                O = ({ "aria-label": e, containerRef: t, id: a, includeDisputeLinkInCopyrightErrorMessage: i, liveBroadcastRewindEnabled: d, onClick: u, onScribeEvent: y, playerApi: h, playerDisplayOptions: m, playerState: b, poster: f, shouldShowAltLabel: g, showWatchAgain: S, useKeyboardShortcuts: E }) => {
                    const P = r.useCallback(() => {
                        u?.({ playerState: b, playerApi: h });
                    }, [u, h, b]);
                    if (!h || !b) return null;
                    const v = (0, c.Ci)(b);
                    if (v?.displayType === p.ak.AD && v?.useRedesignedPrerollUx) return r.createElement(M, { containerRef: t, playerApi: h, playerDisplayOptions: m, playerState: b, poster: f, showWatchAgain: S });
                    const C = !!b.error,
                        _ = v?.contentType === p.wF.GIF,
                        A = S && b.tracksFinished,
                        R = g ? e : void 0;
                    return r.createElement(
                        o.Z,
                        { enabled: !!E, playerApi: h, playerState: b },
                        r.createElement(
                            s.Z,
                            { playerState: b },
                            !C &&
                                (function () {
                                    const e = !m?.hidePosterImage && !A,
                                        t = S && !_;
                                    return r.createElement(r.Fragment, null, r.createElement(n.Z, { onClick: P, style: B.base, testID: `video-player-mini-ui-${a || ""}` }), e && r.createElement(D.Z, { imageSrc: f, playerApi: h, playerState: b, withPlayButton: !1 }), r.createElement(x.Z, { playerState: b }), t && r.createElement(I.Z, { onScribeEvent: y, playerApi: h, playerState: b }), r.createElement(Z, { liveBroadcastRewindEnabled: d, mediaAccessibilityLabel: R, playerApi: h, playerDisplayOptions: m, playerState: b }));
                                })(),
                            r.createElement(l.Z, { show: C }, C && r.createElement(k.Z, { imageSrc: f, includeDisputeLinkInCopyrightErrorMessage: i, playerApi: h, playerState: b })),
                        ),
                    );
                },
                B = i.default.create((e) => ({ base: { ...i.default.absoluteFillObject, cursor: "pointer" } })),
                L = r.memo(O);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loaders.video.VideoPlayerMiniUI.a2e4cbda.js.map

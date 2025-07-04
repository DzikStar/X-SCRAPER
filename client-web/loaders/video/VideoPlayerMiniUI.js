"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loaders.video.VideoPlayerMiniUI", "icons/IconClosedcaptioningStroke-js"],
    {
        738584: (e, t, a) => {
            a.d(t, { o: () => y, Z: () => b });
            var r = a(807896),
                n = a(202784),
                i = a(928316),
                l = a(682474),
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
                    const { aspectRatio: a, containerRef: r, guestsState: n, playerApi: i, playerState: l } = t;
                    return i && r && l ? e({ aspectRatio: a, guestsState: n, playerApi: i, playerState: l, containerRef: r }) : null;
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
                        const e = i.findDOMNode(this);
                        e && e instanceof HTMLElement && (this._containerRef = e);
                    }
                }
                componentDidCatch(e, t) {
                    const a = { error: e, info: t };
                    this.setState(() => ({ hasError: a }));
                }
                render() {
                    const { guestsState: e, playerApi: t, playerState: a, stablePlayerState: i } = this.state,
                        { additionalBadges: s, aspectRatio: p, basePlayerClass: d, children: u, includeDisputeLinkInCopyrightErrorMessage: y, isFullScreen: b, objectFitVideo: f, onApiReady: g, onScroll: S, onStateUpdate: v, playerId: E, size: P, ...C } = this.props,
                        _ = { aspectRatio: this.props.aspectRatio, guestsState: e, playerApi: t, playerState: a, containerRef: this._containerRef },
                        A = { ..._, playerState: i };
                    return n.createElement(
                        l.Z,
                        { isFullScreen: b, onScroll: S, ratio: p, style: [m.root, m[P]] },
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
            a.d(t, { Z: () => l });
            var r,
                n = a(202784);
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
                    return n.createElement(l.RegistrationContext.Provider, { value: this._registrationContext }, n.createElement(l.ProviderContext.Provider, { value: this.state }, this.props.children));
                }
            }
            (r = l), (l.MetadataSubscriber = ({ children: e, playerId: t }) => n.createElement(r.ProviderContext.Consumer, null, ({ players: a }) => n.createElement(i, { playerApi: a && a[t] }, e))), (l.RegistrationContext = n.createContext({ registerPlayer: void 0 })), (l.ProviderContext = n.createContext({ players: {} }));
        },
        986460: (e, t, a) => {
            a.d(t, { GS: () => c, Js: () => l, M2: () => s, Nj: () => d, cm: () => p, gF: () => i, iG: () => y, kA: () => o, lO: () => u });
            var r = a(111677),
                n = a.n(r);
            const i = n().fb236728,
                l = n().e9bd453e,
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
                i = a(111677),
                l = a.n(i),
                s = a(154003),
                o = a(392237);
            const c = l().f2d4e6f2;
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
                i = a(111677),
                l = a.n(i),
                s = a(731708),
                o = a(392237),
                c = a(738584),
                p = a(424713),
                d = a(251478);
            const u = l().f1ad0df1,
                y = l().ef16ab2b,
                h = n.memo(
                    ({ playerState: e, style: t }) => {
                        const a = n.useMemo(() => [m.label, t], [t]),
                            r = ((e) => {
                                const t = (0, p.Ci)(e);
                                if (!t) return null;
                                const { advertiserName: a, currentTimeMs: r, displayType: n, durationMs: i } = t;
                                if (i && (e.isPlaying || r < i)) {
                                    const e = (0, p.mr)((i - r) / 1e3);
                                    return n === d.ak.AD ? (a ? y({ advertiserName: a, timeRemaining: e }) : u({ timeRemaining: e })) : e;
                                }
                                return i ? (0, p.mr)(i / 1e3) : null;
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
                i = a(643442),
                l = a(737691),
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
                    const { controls: v, isPlaying: E } = c,
                        { pause: P, play: C, replay: _ } = a,
                        A = (0, d.Ci)(c);
                    if (!A || (A.isLive && !t)) return null;
                    let R;
                    return (R = E || (v && "PLAY_REQUESTED" === v.playState) ? { "aria-label": p.gF, children: n.createElement(i.default, { style: S }), hoverLabel: h, onPress: P } : v.isReplayButtonShown ? { "aria-label": p.Js, children: n.createElement(l.default, { style: S }), hoverLabel: m, onPress: _ } : { "aria-label": p.M2, children: n.createElement(s.default, { style: S }), hoverLabel: y, onPress: C }), n.createElement(o.Z, (0, r.Z)({}, b, R, { style: g }));
                },
                f = c.default.create((e) => ({ playButton: { padding: e.spaces.space4 }, playIcon: { height: e.spaces.space12, width: e.spaces.space12 } })),
                g = n.memo(b);
        },
        20030: (e, t, a) => {
            a.r(t), a.d(t, { default: () => L });
            var r = a(202784),
                n = a(325686),
                i = a(908629),
                l = a(392237),
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
            const v = u().j25d7cca,
                E = u().a858b25c,
                P = { preferredVerticalOrientation: "up", preferredHorizontalOrientation: "end", withLayer: !1, withExtraSpace: !1, label: v },
                C = { ...P, label: E },
                _ = ({ liveBroadcastRewindEnabled: e, mediaAccessibilityLabel: t, playerApi: a, playerDisplayOptions: i, playerState: l }) => {
                    const s = l ? (0, c.Ci)(l) : void 0,
                        o = l
                            ? [
                                  ((t) => {
                                      const l = s?.contentType !== p.wF.GIF && !i?.badgeConfiguration?.hideDuration;
                                      return r.createElement(b.ZP, { key: "time-badge", style: w.durationBadge }, r.createElement(n.Z, { style: w.combinedLabel }, r.createElement(g.Z, { liveBroadcastRewindEnabled: e, playerApi: a, playerState: t, style: w.playButton }), l && r.createElement(S.Z, { key: "time-badge-time", style: w.timeRemaining })));
                                  })(l),
                                  s?.contentType === p.wF.GIF ? r.createElement(b.ZP, { bold: !0, key: "gif", type: "gif" }) : null,
                                  t ? r.createElement(b.ZP, { altLabel: t, bold: !0, key: "alt" }) : null,
                                  ((e, t) => {
                                      if (!s?.hasCaptions) return null;
                                      const { areCaptionsShown: a } = t,
                                          { toggleCaptions: i } = e;
                                      return r.createElement(b.ZP, { key: "captions-badge" }, r.createElement(n.Z, { style: w.captionsLabel }, r.createElement(m.Z, { "aria-label": a ? v : E, hoverLabel: a ? P : C, onPress: i, style: w.captionsButton }, a ? r.createElement(y.default, { style: w.captionsIcon }) : r.createElement(h.default, { style: w.captionsIcon }))));
                                  })(a, l),
                                  ((e) => {
                                      if (i?.badgeConfiguration?.hideViewCount) return null;
                                      const t = (0, c.xB)(e),
                                          a = t && (0, c.XE)(t);
                                      return a ? r.createElement(b.ZP, { key: "viewer-count-badge" }, a) : null;
                                  })(l),
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
                A = l.default.theme.spacesPx.space12,
                R = l.default.theme.spacesPx.space40,
                w = l.default.create((e) => ({ playButton: { pointerEvents: "auto" }, captionsButton: { pointerEvents: "auto" }, captionsIcon: { height: e.spaces.space16, width: e.spaces.space16 }, captionsLabel: { display: "flex", alignItems: "center" }, combinedLabel: { display: "flex", flexDirection: "row", alignItems: "center" }, durationBadge: { flexDirection: "row", paddingHorizontal: 0, paddingVertical: 0, pointerEvents: "auto" }, timeRemaining: { paddingHorizontal: e.spaces.space4 } })),
                Z = r.memo(_);
            var x = a(523319),
                k = a(38660),
                D = a(804455),
                I = a(472238);
            const M = (0, a(523561).Z)({ loader: () => Promise.all([a.e("icons.21"), a.e("icons.16"), a.e("icons.19"), a.e("modules.common-e907d115"), a.e("modules.common-e019dbda"), a.e("icons.24"), a.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerPrerollUI~loaders.video.VideoPlayerEventsU"), a.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerPrerollUI"), a.e("loaders.video.VideoPlayerPrerollUI")]).then(a.bind(a, 463371)), renderPlaceholder: () => r.createElement("div", { "data-testid": "videoPlayer" }) }),
                O = ({ "aria-label": e, containerRef: t, id: a, includeDisputeLinkInCopyrightErrorMessage: l, liveBroadcastRewindEnabled: d, onClick: u, onScribeEvent: y, playerApi: h, playerDisplayOptions: m, playerState: b, poster: f, shouldShowAltLabel: g, showWatchAgain: S, useKeyboardShortcuts: v }) => {
                    const E = r.useCallback(() => {
                        u?.({ playerState: b, playerApi: h });
                    }, [u, h, b]);
                    if (!h || !b) return null;
                    const P = (0, c.Ci)(b);
                    if (P?.displayType === p.ak.AD && P?.useRedesignedPrerollUx) return r.createElement(M, { containerRef: t, playerApi: h, playerDisplayOptions: m, playerState: b, poster: f, showWatchAgain: S });
                    const C = !!b.error,
                        _ = P?.contentType === p.wF.GIF,
                        A = S && b.tracksFinished,
                        R = g ? e : void 0;
                    return r.createElement(
                        o.Z,
                        { enabled: !!v, playerApi: h, playerState: b },
                        r.createElement(
                            s.Z,
                            { playerState: b },
                            !C &&
                                (function () {
                                    const e = !m?.hidePosterImage && !A,
                                        t = S && !_;
                                    return r.createElement(r.Fragment, null, r.createElement(n.Z, { onClick: E, style: B.base, testID: `video-player-mini-ui-${a || ""}` }), e && r.createElement(D.Z, { imageSrc: f, playerApi: h, playerState: b, withPlayButton: !1 }), r.createElement(x.Z, { playerState: b }), t && r.createElement(I.Z, { onScribeEvent: y, playerApi: h, playerState: b }), r.createElement(Z, { liveBroadcastRewindEnabled: d, mediaAccessibilityLabel: R, playerApi: h, playerDisplayOptions: m, playerState: b }));
                                })(),
                            r.createElement(i.Z, { show: C }, C && r.createElement(k.Z, { imageSrc: f, includeDisputeLinkInCopyrightErrorMessage: l, playerApi: h, playerState: b })),
                        ),
                    );
                },
                B = l.default.create((e) => ({ base: { ...l.default.absoluteFillObject, cursor: "pointer" } })),
                L = r.memo(O);
        },
        804579: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var r = a(202784),
                n = a(890601),
                i = a(783427),
                l = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M5.747 12c0-1.8 1.388-3.22 3.26-3.22 1.26 0 2.075.53 2.62 1.29l-1.207.94c-.306-.42-.798-.7-1.357-.7-.93 0-1.684.76-1.684 1.69s.755 1.68 1.685 1.68c.578 0 1.087-.29 1.39-.73l1.22.87c-.583.8-1.368 1.39-2.737 1.39h-.003c-1.766 0-3.187-1.35-3.187-3.19V12zm6.584.02c0 1.84 1.421 3.19 3.185 3.19 1.368 0 2.154-.59 2.738-1.39l-1.22-.87c-.304.44-.813.73-1.39.73-.93 0-1.684-.75-1.684-1.68s.755-1.68 1.685-1.68c.559 0 1.051.27 1.356.69l1.21-.94c-.547-.76-1.36-1.29-2.622-1.29-1.872 0-3.258 1.42-3.258 3.22v.02zM18.5 3C19.881 3 21 4.12 21 5.5v13c0 1.38-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.88 3 18.5v-13C3 4.12 4.119 3 5.5 3h13zM5 18.5c0 .28.224.5.5.5h13c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-13c-.276 0-.5.22-.5.5v13z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loaders.video.VideoPlayerMiniUI.207b2f0a.js.map

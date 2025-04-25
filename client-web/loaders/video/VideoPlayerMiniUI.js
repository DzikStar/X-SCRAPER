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
                        { additionalBadges: s, aspectRatio: p, basePlayerClass: d, children: u, includeDisputeLinkInCopyrightErrorMessage: y, isFullScreen: b, objectFitVideo: g, onApiReady: f, onScroll: E, onStateUpdate: S, playerId: v, size: P, ...C } = this.props,
                        _ = { aspectRatio: this.props.aspectRatio, guestsState: e, playerApi: t, playerState: a, containerRef: this._containerRef },
                        A = { ..._, playerState: l };
                    return n.createElement(
                        i.Z,
                        { isFullScreen: b, onScroll: E, ratio: p, style: [m.root, m[P]] },
                        this.state.hasError
                            ? n.createElement(o.Z, { onReloadPress: this._handleReload })
                            : n.createElement(
                                  h.Context.Provider,
                                  { value: A },
                                  n.createElement(
                                      h.PeriodicContext.Provider,
                                      { value: _ },
                                      n.createElement(c.Z.RegistrationContext.Consumer, null, ({ registerPlayer: e }) => n.createElement(d, (0, r.Z)({}, C, { customOverlay: this._renderCustomOverlay(), displayOptions: { objectFitVideo: g }, setPlayerApi: this._handlePlayerApi(e) }))),
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
            var r = a(674132),
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
        893164: (e, t, a) => {
            a.d(t, { Z: () => y });
            var r = a(202784),
                n = a(325686),
                l = a(674132),
                i = a.n(l),
                s = a(355830),
                o = a(731708),
                c = a(154003),
                p = a(992942),
                d = a(392237);
            const u = i().a9edea48;
            function y(e) {
                const { displayBackgroundImage: t = !1, errorMessage: a, iconPlayError: l, imageSrc: i, onReloadPress: y } = e;
                return r.createElement(n.Z, { style: [d.default.absoluteFill, t ? null : h.blankOverlay] }, t ? r.createElement(r.Fragment, null, r.createElement(n.Z, { style: h.backgroundImage }, i && r.createElement(p.Z, { resizeMode: "cover", source: i, style: d.default.absoluteFill })), r.createElement(n.Z, { style: h.overlay })) : null, r.createElement(n.Z, { style: h.errorContainer }, r.createElement(n.Z, null, l ? r.createElement(s.default, { style: h.playErrorIcon }) : null), r.createElement(n.Z, { focusable: !0 }, r.createElement(o.ZP, { style: t ? h.errorMsgTextWhite : h.errorMsgTextGray }, a)), y ? r.createElement(c.ZP, { onPress: y, style: h.buttonContainer, type: "brandFilled" }, u) : null));
            }
            const h = d.default.create((e) => ({ backgroundImage: { ...d.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...d.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack77 }, blankOverlay: { backgroundColor: e.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: e.spaces.space32 }, errorMsgTextWhite: { color: e.colors.white, textAlign: "center", marginBottom: e.spaces.space20 }, errorMsgTextGray: { color: e.colors.gray700, textAlign: "center", marginBottom: e.spaces.space20 }, playErrorIcon: { fill: e.colors.gray700, height: e.spaces.space48, width: e.spaces.space48, marginHorizontal: "auto", paddingBottom: e.spaces.space20, verticalAlign: "middle" } }));
        },
        472238: (e, t, a) => {
            a.d(t, { Z: () => p });
            var r = a(202784),
                n = a(325686),
                l = a(674132),
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
                l = a(674132),
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
            a.d(t, { Z: () => f });
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
                    const f = n.useMemo(() => [g.playButton, u], [u]),
                        E = n.useMemo(() => [g.playIcon, e], [e]);
                    if (!c || !a) return null;
                    const { controls: S, isPlaying: v } = c,
                        { pause: P, play: C, replay: _ } = a,
                        A = (0, d.Ci)(c);
                    if (!A || (A.isLive && !t)) return null;
                    let Z;
                    return (Z = v || (S && "PLAY_REQUESTED" === S.playState) ? { "aria-label": p.gF, children: n.createElement(l.default, { style: E }), hoverLabel: h, onPress: P } : S.isReplayButtonShown ? { "aria-label": p.Js, children: n.createElement(i.default, { style: E }), hoverLabel: m, onPress: _ } : { "aria-label": p.M2, children: n.createElement(s.default, { style: E }), hoverLabel: y, onPress: C }), n.createElement(o.Z, (0, r.Z)({}, b, Z, { style: f }));
                },
                g = c.default.create((e) => ({ playButton: { padding: e.spaces.space4 }, playIcon: { height: e.spaces.space12, width: e.spaces.space12 } })),
                f = n.memo(b);
        },
        20030: (e, t, a) => {
            a.r(t), a.d(t, { default: () => F });
            var r = a(202784),
                n = a(325686),
                l = a(908629),
                i = a(392237),
                s = a(364779),
                o = a(535814),
                c = a(424713),
                p = a(251478),
                d = a(674132),
                u = a.n(d),
                y = a(38502),
                h = a(804579),
                m = a(530732),
                b = a(868634),
                g = a(819329),
                f = a(506707),
                E = a(197765);
            const S = u().j25d7cca,
                v = u().a858b25c,
                P = { preferredVerticalOrientation: "up", preferredHorizontalOrientation: "end", withLayer: !1, withExtraSpace: !1, label: S },
                C = { ...P, label: v },
                _ = ({ liveBroadcastRewindEnabled: e, mediaAccessibilityLabel: t, playerApi: a, playerDisplayOptions: l, playerState: i }) => {
                    const s = i ? (0, c.Ci)(i) : void 0,
                        o = i
                            ? [
                                  ((t) => {
                                      const i = s?.contentType !== p.wF.GIF && !l?.badgeConfiguration?.hideDuration;
                                      return r.createElement(b.ZP, { key: "time-badge", style: R.durationBadge }, r.createElement(n.Z, { style: R.combinedLabel }, r.createElement(f.Z, { liveBroadcastRewindEnabled: e, playerApi: a, playerState: t, style: R.playButton }), i && r.createElement(E.Z, { key: "time-badge-time", style: R.timeRemaining })));
                                  })(i),
                                  s?.contentType === p.wF.GIF ? r.createElement(b.ZP, { bold: !0, key: "gif", type: "gif" }) : null,
                                  t ? r.createElement(b.ZP, { altLabel: t, bold: !0, key: "alt" }) : null,
                                  ((e, t) => {
                                      if (!s?.hasCaptions) return null;
                                      const { areCaptionsShown: a } = t,
                                          { toggleCaptions: l } = e;
                                      return r.createElement(b.ZP, { key: "captions-badge" }, r.createElement(n.Z, { style: R.captionsLabel }, r.createElement(m.Z, { "aria-label": a ? S : v, hoverLabel: a ? P : C, onPress: l, style: R.captionsButton }, a ? r.createElement(y.default, { style: R.captionsIcon }) : r.createElement(h.default, { style: R.captionsIcon }))));
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
                            d ? a.setCaptionDefaultOffset({ bottom: Z }) : a.setCaptionDefaultOffset({ bottom: A });
                        }, [d, a]),
                        d ? r.createElement(g.Z, { align: "left" }, o) : null
                    );
                },
                A = i.default.theme.spacesPx.space12,
                Z = i.default.theme.spacesPx.space40,
                R = i.default.create((e) => ({ playButton: { pointerEvents: "auto" }, captionsButton: { pointerEvents: "auto" }, captionsIcon: { height: e.spaces.space16, width: e.spaces.space16 }, captionsLabel: { display: "flex", alignItems: "center" }, combinedLabel: { display: "flex", flexDirection: "row", alignItems: "center" }, durationBadge: { flexDirection: "row", paddingHorizontal: 0, paddingVertical: 0, pointerEvents: "auto" }, timeRemaining: { paddingHorizontal: e.spaces.space4 } })),
                w = r.memo(_);
            var x = a(523319),
                k = a(38660),
                I = a(804455),
                M = a(472238);
            const O = (0, a(523561).Z)({ loader: () => Promise.all([a.e("modules.common-e907d115"), a.e("modules.common-e019dbda"), a.e("icons.14"), a.e("icons.2"), a.e("icons.27"), a.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerPrerollUI~loaders.video.VideoPlayerEventsU"), a.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerPrerollUI"), a.e("loaders.video.VideoPlayerPrerollUI")]).then(a.bind(a, 463371)), renderPlaceholder: () => r.createElement("div", { "data-testid": "videoPlayer" }) }),
                B = ({ "aria-label": e, containerRef: t, id: a, includeDisputeLinkInCopyrightErrorMessage: i, liveBroadcastRewindEnabled: d, onClick: u, onScribeEvent: y, playerApi: h, playerDisplayOptions: m, playerState: b, poster: g, shouldShowAltLabel: f, showWatchAgain: E, useKeyboardShortcuts: S }) => {
                    const v = r.useCallback(() => {
                        u?.({ playerState: b, playerApi: h });
                    }, [u, h, b]);
                    if (!h || !b) return null;
                    const P = (0, c.Ci)(b);
                    if (P?.displayType === p.ak.AD && P?.useRedesignedPrerollUx) return r.createElement(O, { containerRef: t, playerApi: h, playerDisplayOptions: m, playerState: b, poster: g, showWatchAgain: E });
                    const C = !!b.error,
                        _ = P?.contentType === p.wF.GIF,
                        A = E && b.tracksFinished,
                        Z = f ? e : void 0;
                    return r.createElement(
                        o.Z,
                        { enabled: !!S, playerApi: h, playerState: b },
                        r.createElement(
                            s.Z,
                            { playerState: b },
                            !C &&
                                (function () {
                                    const e = !m?.hidePosterImage && !A,
                                        t = E && !_;
                                    return r.createElement(r.Fragment, null, r.createElement(n.Z, { onClick: v, style: D.base, testID: `video-player-mini-ui-${a || ""}` }), e && r.createElement(I.Z, { imageSrc: g, playerApi: h, playerState: b, withPlayButton: !1 }), r.createElement(x.Z, { playerState: b }), t && r.createElement(M.Z, { onScribeEvent: y, playerApi: h, playerState: b }), r.createElement(w, { liveBroadcastRewindEnabled: d, mediaAccessibilityLabel: Z, playerApi: h, playerDisplayOptions: m, playerState: b }));
                                })(),
                            r.createElement(l.Z, { show: C }, C && r.createElement(k.Z, { imageSrc: g, includeDisputeLinkInCopyrightErrorMessage: i, playerApi: h, playerState: b })),
                        ),
                    );
                },
                D = i.default.create((e) => ({ base: { ...i.default.absoluteFillObject, cursor: "pointer" } })),
                F = r.memo(B);
        },
        38502: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            var r = a(202784),
                n = a(890601),
                l = a(783427),
                i = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3 5.5C3 4.12 4.119 3 5.5 3h13C19.881 3 21 4.12 21 5.5v13c0 1.38-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.88 3 18.5v-13zm2.746 6.52c0 1.85 1.421 3.2 3.187 3.2v-.01h.003c1.369 0 2.154-.59 2.737-1.39l-1.22-.87c-.303.44-.812.73-1.39.73-.93 0-1.685-.75-1.685-1.68s.754-1.68 1.684-1.68c.559 0 1.051.27 1.357.69l1.207-.93c-.545-.76-1.36-1.29-2.62-1.29-1.872 0-3.26 1.41-3.26 3.21v.02zm6.584 0c0 1.85 1.421 3.2 3.185 3.2 1.368 0 2.154-.6 2.738-1.4l-1.22-.87c-.304.44-.813.74-1.39.74-.93 0-1.684-.76-1.684-1.69s.755-1.68 1.685-1.68c.559 0 1.051.27 1.356.69l1.21-.93c-.547-.76-1.36-1.29-2.622-1.29-1.872 0-3.258 1.41-3.258 3.21v.02z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loaders.video.VideoPlayerMiniUI.4c1b991a.js.map

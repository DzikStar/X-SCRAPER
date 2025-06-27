"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.MediaPreviewVideoPlayer", "icons/IconMediaExpand-js"],
    {
        298607: (e, t, r) => {
            r.r(t), r.d(t, { __DANGEROUS_IMPORT_VIDEOPLAYER__: () => J });
            var i = r(202784),
                n = r(738584),
                s = r(111677),
                a = r.n(s),
                o = r(789403),
                l = r(908629),
                c = r(864386),
                h = r(893164),
                u = r(320619),
                d = r(325686),
                p = r(643442),
                m = r(737691),
                b = r(466445),
                S = r(841972),
                y = r(647174),
                g = r(38502),
                f = r(804579),
                v = r(912021),
                _ = r(392237),
                C = r(41871),
                E = r(458774),
                w = r(420922),
                P = r(103849),
                x = r(70889),
                T = r(445014),
                k = r(986460),
                Z = r(424713),
                R = r(2138),
                A = r(173739);
            const B = a().f06f2e53;
            class L extends i.PureComponent {
                constructor(e) {
                    super(e),
                        (this._handleChange = (e) => {
                            const { getScrubToFraction: t } = this.props;
                            this.setState({ scrubTo: e });
                            const r = t?.(e) ?? this._defaultGetScrubToFraction(e);
                            "number" == typeof r && this._throttledPlayerSeek(r);
                        }),
                        (this._throttledPlayerSeek = (0, R.Z)(
                            (e) => {
                                this.props.playerApi.scrubToFraction(e);
                            },
                            50,
                            { leading: !0, trailing: !0 },
                        )),
                        (this._handleActive = (e) => (!this.state.isScrubbing && e && document.addEventListener("click", this._handleCaptureClick, !0), e || this._throttledPlayerSeek.flush(), this.props.playerApi.setScrubbing(e), this.setState({ isScrubbing: e }))),
                        (this._handleCaptureClick = (e) => {
                            e.preventDefault(), e.stopPropagation(), document.removeEventListener("click", this._handleCaptureClick, !0);
                        }),
                        (this._defaultGetScrubToFraction = (e) => {
                            if (this.props.duration) return e / this.props.duration;
                        }),
                        (this.state = { isScrubbing: !1, scrubTo: 0 });
                }
                render() {
                    const { "aria-label": e, currentTime: t, duration: r, isSeeking: n } = this.props,
                        s = this.state.isScrubbing || n ? this.state.scrubTo : t;
                    return "number" == typeof s && "number" == typeof r && r > 0 ? i.createElement(A.Z, { accessibilityLabelValueText: B({ currentTime: (0, Z.mr)(s), durationTime: (0, Z.mr)(r) }), "aria-label": e, color: "white", keepLTR: !0, keyboardStep: 5, max: r, min: 0, onActive: this._handleActive, onChange: this._handleChange, step: "any", value: s, withHidingThumb: !0 }) : null;
                }
            }
            const M = L,
                F = a().j25d7cca,
                O = a().a858b25c,
                z = a().hea01798,
                H = "PreviewControlBar-",
                D = { CAPTIONS: `${H}Captions`, FULLSCREEN: `${H}Fullscreen` },
                I = (e) => e === E.c.narrow || e === E.c.veryNarrow;
            class N extends i.PureComponent {
                constructor(e) {
                    if (
                        (super(e),
                        (this.state = { currentBreakpoint: E.c.wide, showScrubber: !0, scrubTime: 0 }),
                        (this._parentRef = i.createRef()),
                        (this._renderActionButton = (e, t) => {
                            const { controls: r, isPlaying: n } = t,
                                { pause: s, play: a, replay: o } = e,
                                { currentBreakpoint: l } = this.state,
                                c = (0, Z.Ci)(t),
                                h = I(l) ? "xSmall" : "medium";
                            return !c || c.isLive ? null : n || (r && "PLAY_REQUESTED" === r.playState) ? i.createElement(P.Z, { "aria-label": k.gF, hoverLabelPreferredHorizontalOrientation: "end", hoverLabelWithExtraSpace: this.props.showScrubber, icon: i.createElement(p.default, null), onPress: s, size: h }) : r.isReplayButtonShown ? i.createElement(P.Z, { "aria-label": k.Js, hoverLabelPreferredHorizontalOrientation: "end", hoverLabelWithExtraSpace: this.props.showScrubber, icon: i.createElement(m.default, null), onPress: o, size: h }) : i.createElement(P.Z, { "aria-label": k.M2, hoverLabelPreferredHorizontalOrientation: "end", hoverLabelWithExtraSpace: this.props.showScrubber, icon: i.createElement(b.default, null), onPress: a, size: h });
                        }),
                        (this._renderFullScreenButton = (e, t) => {
                            const { fullscreen: r } = t,
                                { currentBreakpoint: n } = this.state,
                                s = this._fullScreenIcon,
                                a = I(n) ? "xSmall" : "medium";
                            return r.isFullscreen ? i.createElement(P.Z, { "aria-label": k.iG, hoverLabelPreferredHorizontalOrientation: "start", hoverLabelWithExtraSpace: this.props.showScrubber, icon: i.createElement(s, { isFullscreen: r.isFullscreen }), onPress: this._exitFullScreen(e), size: a }) : i.createElement(P.Z, { "aria-label": k.lO, hoverLabelPreferredHorizontalOrientation: "start", hoverLabelWithExtraSpace: this.props.showScrubber, icon: i.createElement(s, { isFullscreen: r.isFullscreen }), onPress: this._requestFullScreen(e), size: a });
                        }),
                        (this._fullScreenIcon = ({ isFullscreen: e, style: t }) => {
                            const { hidden: r, shown: n } = U;
                            return i.createElement(i.Fragment, null, i.createElement(S.default, { style: e ? r : n }), i.createElement(y.default, { style: e ? n : r }));
                        }),
                        (this._requestFullScreen = (e) => () => {
                            e.fullScreen(this.props.containerRef);
                        }),
                        (this._exitFullScreen = (e) => () => e.exitFullScreen()),
                        (this._getScrubToFraction = (0, v.Z)((e) => (t) => (0, Z.aZ)(e, t))),
                        (this._renderScrubber = (e) =>
                            this.props.showScrubber && this.state.showScrubber
                                ? i.createElement(
                                      d.Z,
                                      { style: T.ZP.scrubber },
                                      i.createElement(n.o, { periodic: !0 }, ({ playerState: t }) => i.createElement(M, { "aria-label": z, currentTime: (0, Z.SY)(t), duration: (0, Z.zm)(t), getScrubToFraction: this._getScrubToFraction(t), isScrubbing: t.isScrubbing, isSeeking: t.isSeeking, playerApi: e })),
                                  )
                                : null),
                        (this._renderVolume = (e, t) => {
                            const { isMuted: r, volume: n } = t,
                                { mute: s, setVolume: a, unmute: o } = e,
                                { containerHeight: l, currentBreakpoint: c } = this.state,
                                h = r ? o : s,
                                u = r ? k.cm : k.GS;
                            return i.createElement(C.Z, { accessibilityLabelIcon: u, accessibilityLabelSlider: k.Nj, containerHeight: l, isMuted: r, onHideSlider: this._showScrubberHandler(!0), onMuteToggle: h, onShowSlider: this._showScrubberHandler(!1), onSliderChange: this._setVolumePercent(a), size: I(c) ? "xSmall" : "medium", volumePercent: 100 * n });
                        }),
                        (this._renderCaptionsButton = (e, t) => {
                            const r = (0, Z.Ci)(t);
                            if (r && r.hasCaptions) {
                                const { currentBreakpoint: r } = this.state,
                                    { areCaptionsShown: n } = t,
                                    { toggleCaptions: s } = e;
                                return i.createElement(P.Z, { "aria-label": n ? F : O, hoverLabelWithExtraSpace: this.props.showScrubber, icon: n ? i.createElement(g.default, null) : i.createElement(f.default, null), onPress: s, size: I(r) ? "xSmall" : "medium", testID: "captions" });
                            }
                        }),
                        (this._renderTimePlayed = () =>
                            i.createElement(n.o, { periodic: !0 }, ({ playerState: e }) => {
                                const { currentBreakpoint: t } = this.state,
                                    r = this._getTimestampValues(e);
                                if (!r) return null;
                                const n = this._formatTimePlayed({ ...r, isCompact: t === E.c.veryNarrow });
                                return i.createElement(x.Z, { style: I(t) && { fontSize: _.default.theme.fontSizes.subtext2 } }, n);
                            })),
                        (this._getTimestampValues = (e) => {
                            const { controls: t, isSeeking: r } = e,
                                { playbackTimeRange: i, scrubToFraction: n } = t,
                                s = (0, Z.MU)((0, Z.Ci)(e)),
                                a = (0, Z.zm)(e);
                            if (!s || !a) return null;
                            if (r && void 0 !== n && s) {
                                return { duration: a, currentTime: n * s - (i?.startTimeS ?? 0) };
                            }
                            return { duration: a, currentTime: (0, Z.SY)(e) };
                        }),
                        (this._formatTimePlayed = ({ currentTime: e, duration: t, isCompact: r }) => {
                            const i = t - e;
                            return r ? `${(0, Z.mr)(Math.round(i))}` : `${(0, Z.mr)(Math.round(e))} / ${(0, Z.mr)(Math.round(t))}`;
                        }),
                        (this._showScrubberHandler = (e) => () => this.setState({ showScrubber: e })),
                        (this._setVolumePercent = (e) => (t) => {
                            e(t / 100);
                        }),
                        (this._handleLayout = (e) => {
                            const { width: t } = e.nativeEvent.layout,
                                { currentBreakpoint: r } = this.state,
                                i = this._convertWidthToBreakpoint(t);
                            i !== r && this.setState((e) => ({ currentBreakpoint: i }));
                        }),
                        (this._convertWidthToBreakpoint = (e) => {
                            let t;
                            return e > E.U.wide ? (t = E.c.wide) : e < E.U.veryNarrow ? (t = E.c.veryNarrow) : e < E.U.narrow && (t = E.c.narrow), t;
                        }),
                        e.containerRef)
                    ) {
                        const { height: t, width: r } = e.containerRef.getBoundingClientRect();
                        this.state = { ...this.state, currentBreakpoint: this._convertWidthToBreakpoint(r), containerHeight: t };
                    }
                }
                static getDerivedStateFromProps(e, t) {
                    return e.hideControls ? { ...t, showScrubber: !0 } : t;
                }
                render() {
                    const { hideControls: e, playerApi: t, playerState: r } = this.props;
                    return t && r ? i.createElement(c.Z.ObserverContext.Consumer, null, (n) => i.createElement(d.Z, { onLayout: this._handleLayout, pointerEvents: "auto", ref: this._parentRef, style: T.i3 }, i.createElement(w.Z, { actionButton: this._renderActionButton(t, r), displayDismissableControls: !e, rightContent: i.createElement(i.Fragment, null, this._renderTimePlayed(), i.createElement(n, { focus: !0, interactionKey: D.CAPTIONS, interactionTimeoutMs: 0, mouseover: !0 }, this._renderCaptionsButton(t, r)), this._renderVolume(t, r), i.createElement(n, { focus: !0, interactionKey: D.FULLSCREEN, interactionTimeoutMs: 0, mouseover: !0 }, this._renderFullScreenButton(t, r))), scrubber: this._renderScrubber(t) }))) : null;
                }
            }
            N.defaultProps = { showScrubber: !0 };
            const W = N,
                U = { hidden: { display: "none", height: "1.5em" }, shown: { display: "block", height: "1.5em" } },
                V = ({ playerApi: e, playerState: t }) =>
                    i.createElement(d.Z, {
                        onClick: () => {
                            t?.isPlaying ? e.pause() : e.play();
                        },
                        style: _.default.absoluteFill,
                    }),
                j = { MEDIA_NOT_SUPPORTED: a().f0e1fb48 },
                G = (e, t) => (t ? j[o.Z.MEDIA_NOT_SUPPORTED] : e ? j[e] : u.I);
            const $ = function (e) {
                const { containerRef: t, hideControls: r, isBrowserSupported: n, playerApi: s, playerState: a, showScrubber: o } = e;
                if (!s || !a || !t) return null;
                const u = !1 === n,
                    d = Boolean(a.error) || u;
                return i.createElement(i.Fragment, null, i.createElement(V, { playerApi: s, playerState: a }), i.createElement(c.Z, null, i.createElement(W, { containerRef: t, hideControls: r, playerApi: s, playerState: a, showScrubber: o })), i.createElement(l.Z, { show: d }, d && i.createElement(h.Z, { displayBackgroundImage: !0, errorMessage: G(a.error, u), imageSrc: a.posterImage })));
            };
            var K = r(640290),
                q = r(614425),
                Y = r(946208);
            const J = function (e) {
                const [t, r] = i.useState(null),
                    s = e.mediaFile.duration,
                    a = 1e3 * s,
                    { subtitles: o, trimData: l } = e;
                let c, h;
                if (o?.upload?.mediaFile instanceof Y.ZP) {
                    h = o.upload.mediaFile.vtt;
                    const e = document.createElement("track");
                    (e.default = !0), (e.label = o?.displayName || ""), (e.lang = o?.lang || ""), (e.src = h), (e.kind = "subtitles"), (c = document.createElement("video")), c.appendChild(e);
                }
                return (
                    i.useEffect(() => {
                        if (t && l) {
                            const e = l.startTime || 0,
                                r = l.endTime || s;
                            t.scrubToFraction(e / s), t.setPlaybackTimeRange({ startTimeS: e, endTimeS: r });
                        }
                    }, [s, l, t]),
                    i.createElement(n.Z, { aspectRatio: e.mediaFile.width / e.mediaFile.height, basePlayerClass: q.Y7, configType: "static", contentId: e.mediaId, contentType: "media_entity", durationMs: a, httpClient: X, initiallyMuted: !0, key: h, loop: !0, onApiReady: r, playerId: "composer_media_preview", poster: e.mediaFile.thumbnail, size: "fill", variants: e.variants, videoEl: c }, ({ containerRef: t, playerApi: r, playerState: n }) => i.createElement($, { containerRef: t, isBrowserSupported: e.mediaFile.isBrowserSupported, playerApi: r, playerState: n, showScrubber: !0 }))
                );
            };
            const X = new K.ZP();
        },
        215337: (e, t, r) => {
            r.d(t, { Z: () => a });
            var i = r(202784),
                n = r(325686);
            class s extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, r) => {
                                    const i = t[r];
                                    let n = "";
                                    return i && (n = ` ${100 * i}%`), e + n;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: r, style: s } = this.props;
                    return i.createElement(n.Z, { style: [s, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, r);
                }
            }
            s.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const a = s;
        },
        738584: (e, t, r) => {
            r.d(t, { o: () => p, Z: () => S });
            var i = r(807896),
                n = r(202784),
                s = r(928316),
                a = r(682474),
                o = r(392237),
                l = r(893164),
                c = r(395367),
                h = r(908478);
            function u(e) {
                let t = d(e);
                return (e) => {
                    const r = d(e);
                    return (0, h.Z)(t, r) || (t = r), t;
                };
            }
            function d(e) {
                if (!e || "object" != typeof e) return e;
                const t = JSON.parse(JSON.stringify(e));
                return delete t.dataUsageBytes, (t.tracks = t.tracks.map((e) => ("number" == typeof e.currentTimeMs && delete e.currentTimeMs, e))), t;
            }
            function p({ children: e, periodic: t }) {
                const r = t ? m.PeriodicContext.Consumer : m.Context.Consumer;
                return n.createElement(r, null, (t) => {
                    const { aspectRatio: r, containerRef: i, guestsState: n, playerApi: s, playerState: a } = t;
                    return s && i && a ? e({ aspectRatio: r, guestsState: n, playerApi: s, playerState: a, containerRef: i }) : null;
                });
            }
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._cache = { stablePlayerState: u(null) }),
                        (this.state = { hasError: null, guestsState: null, playerApi: null, playerState: null, stablePlayerState: null }),
                        (this._renderCustomOverlay = () => {
                            const { children: e, enablePiP: t } = this.props,
                                { guestsState: r, playerApi: i, stablePlayerState: n } = this.state;
                            return i && e ? ("function" == typeof e ? e({ enablePiP: t, guestsState: r, playerApi: i, playerState: n, containerRef: this._containerRef }) : e) : null;
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
                        { additionalBadges: o, aspectRatio: h, basePlayerClass: u, children: d, includeDisputeLinkInCopyrightErrorMessage: p, isFullScreen: S, objectFitVideo: y, onApiReady: g, onScroll: f, onStateUpdate: v, playerId: _, size: C, ...E } = this.props,
                        w = { aspectRatio: this.props.aspectRatio, guestsState: e, playerApi: t, playerState: r, containerRef: this._containerRef },
                        P = { ...w, playerState: s };
                    return n.createElement(
                        a.Z,
                        { isFullScreen: S, onScroll: f, ratio: h, style: [b.root, b[C]] },
                        this.state.hasError
                            ? n.createElement(l.Z, { onReloadPress: this._handleReload })
                            : n.createElement(
                                  m.Context.Provider,
                                  { value: P },
                                  n.createElement(
                                      m.PeriodicContext.Provider,
                                      { value: w },
                                      n.createElement(c.Z.RegistrationContext.Consumer, null, ({ registerPlayer: e }) => n.createElement(u, (0, i.Z)({}, E, { customOverlay: this._renderCustomOverlay(), displayOptions: { objectFitVideo: y }, setPlayerApi: this._handlePlayerApi(e) }))),
                                  ),
                              ),
                    );
                }
            }
            (m.Consumer = p), (m.defaultProps = { aspectRatio: o.default.theme.aspectRatios.landscape, size: "fill" }), (m.Context = n.createContext({ aspectRatio: o.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null })), (m.PeriodicContext = n.createContext({ aspectRatio: o.default.theme.aspectRatios.landscape, guestsState: null, playerApi: null, playerState: null, containerRef: null }));
            const b = o.default.create({ root: { position: "relative" }, fill: { width: "100%", height: "100%" }, small: { width: 480, height: 270 }, medium: { width: 640, height: 360 }, large: { width: 800, height: 450 } }),
                S = m;
        },
        420922: (e, t, r) => {
            r.d(t, { Z: () => c });
            var i = r(202784),
                n = r(325686),
                s = r(908629),
                a = r(215337),
                o = r(392237),
                l = r(445014);
            const c = ({ actionButton: e, displayDismissableControls: t = !0, leftContent: r, rightContent: c, scrubber: h, skipButton: u, viewCountGraph: d }) => i.createElement(i.Fragment, null, i.createElement(s.Z, { show: t }, i.createElement(a.Z, { colors: [o.default.theme.colors.transparent, o.default.theme.colors.translucentBlack77], style: l.ZP.absoluteContainer })), i.createElement(n.Z, { style: l.ZP.controlContainer }, i.createElement(n.Z, { style: l.ZP.flex }, i.createElement(s.Z, { show: t }, i.createElement(n.Z, { style: l.ZP.controlsBottomOffset }, d, h, i.createElement(n.Z, { style: l.A9 }, i.createElement(n.Z, { style: l.rq }, e, i.createElement(n.Z, { style: [l.ZP.flexRow, l.ZP.flexShrink] }, r)), i.createElement(n.Z, { style: l.Xo }, c))))), u && i.createElement(n.Z, { style: l.ZP.controlsBottomOffset }, u)));
        },
        103849: (e, t, r) => {
            r.d(t, { Z: () => c, g: () => l });
            var i = r(807896),
                n = r(202784),
                s = r(154003),
                a = r(336373);
            const o = (e) => {
                    const { hoverLabelPreferredHorizontalOrientation: t, hoverLabelWithExtraSpace: r, ...a } = e,
                        o = e["aria-label"] ? { label: e["aria-label"], preferredVerticalOrientation: "up", preferredHorizontalOrientation: e.hoverLabelPreferredHorizontalOrientation, withLayer: !1, withExtraSpace: e.hoverLabelWithExtraSpace } : void 0;
                    return n.createElement(s.ZP, (0, i.Z)({}, a, { hoverLabel: o, size: e.size || "medium", type: "onMediaText" }));
                },
                l = (e) => {
                    const { icon: t, onPress: r, scribeNamespace: s, size: l, testID: c, ...h } = e,
                        u = a.Z.useAnalytics();
                    return n.createElement(
                        o,
                        (0, i.Z)({}, h, {
                            icon: t,
                            onPress: (e) => {
                                r && r(e), u.scribe(s);
                            },
                            size: l,
                            testID: c,
                        }),
                    );
                },
                c = o;
        },
        70889: (e, t, r) => {
            r.d(t, { Z: () => o });
            var i = r(202784),
                n = r(731708);
            const s = (e) => i.createElement(n.ZP, { color: "white", numberOfLines: 1, style: [a.withMargin, e.style] }, e.children),
                a = r(392237).default.create((e) => ({ withMargin: { marginHorizontal: e.spaces.space4 } })),
                o = i.memo(s);
        },
        458774: (e, t, r) => {
            r.d(t, { U: () => n, c: () => i });
            const i = Object.freeze({ wide: "wide", narrow: "narrow", veryNarrow: "veryNarrow" }),
                n = Object.freeze({ [i.wide]: 500, [i.narrow]: 300, [i.veryNarrow]: 200 });
        },
        445014: (e, t, r) => {
            r.d(t, { A9: () => a, Nk: () => s, Xo: () => l, ZP: () => h, eR: () => c, i3: () => n, rq: () => o });
            const i = r(392237).default.create((e) => ({ root: { writingDirection: "ltr", position: "absolute", bottom: 0, cursor: "auto", width: "100%" }, container: { paddingHorizontal: e.spaces.space4, paddingBottom: e.spaces.space2 }, absoluteContainer: { paddingHorizontal: e.spaces.space4, paddingBottom: e.spaces.space2, width: "100%", position: "absolute", minHeight: "100%" }, scrubber: { paddingStart: e.spaces.space4, paddingEnd: e.spaces.space4 }, bottomBar: { width: "100%", justifyContent: "space-between" }, actionContainer: { minHeight: e.spaces.space40 }, flex: { flex: 1 }, flexShrink: { flexShrink: 1 }, flexRow: { alignItems: "center", flexDirection: "row" }, rightContainer: { justifyContent: "flex-end" }, leftContainer: { justifyContent: "flex-start", flexGrow: 1 }, controlContainer: { flexDirection: "row", paddingHorizontal: e.spaces.space4 }, controlsBottomOffset: { display: "flex", paddingBottom: e.spaces.space2 }, viewCountGraph: { top: e.spaces.space12, zIndex: -1, paddingStart: e.spaces.space4, paddingEnd: e.spaces.space4 }, liveCircle: { color: e.colors.red500, width: e.spaces.space4 }, notLiveCircle: { color: e.colors.gray100, width: e.spaces.space4 }, barGraphItem: { backgroundColor: "rgba(255, 255, 255, 0.7)", borderColor: "rgba(255, 255, 255, 0.7)", zIndex: 0 }, withMargin: { marginHorizontal: e.spaces.space2, paddingHorizontal: e.spaces.space2 }, skipButtonAffordance: { opacity: 0 }, skipAdText: { fontVariant: "tabular-nums" } })),
                n = i.root,
                s = i.container,
                a = [i.flexRow, i.bottomBar],
                o = [i.actionContainer, i.leftContainer, i.flexShrink, i.flexRow],
                l = [i.actionContainer, i.rightContainer, i.flexRow],
                c = i.skipAdText,
                h = i;
        },
        864386: (e, t, r) => {
            r.d(t, { Z: () => b });
            var i = r(807896),
                n = (r(571372), r(202784)),
                s = r(24812);
            const a = "click",
                o = "focused",
                l = "mousemove",
                c = "mouseover",
                h = "touch",
                u = (e, t) => (r) => {
                    const { observed: i } = r;
                    return i[e].add(t), { observed: i };
                },
                d = (e, t) => (r) => {
                    const { observed: i } = r;
                    return i[e].delete(t), { observed: i };
                },
                p = n.createContext({ observed: { click: new Set(), focused: new Set(), mousemove: new Set(), mouseover: new Set() }, Observer: () => null }),
                m = n.createContext(() => null);
            class b extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._timeoutCollection = { click: {}, focused: {}, mousemove: {}, mouseover: {}, touch: {} }),
                        (this._interactionWatcherRefs = {}),
                        (this.state = { observed: { click: new Set(), focused: new Set(), mousemove: new Set(), mouseover: new Set(), touch: new Set() } }),
                        (this.getContext = () => {
                            const { observed: e } = this.state;
                            return { observed: e, Observer: this._renderObserver };
                        }),
                        (this.hasActiveInteractionWatcherChildren = () =>
                            !Object.keys(this._interactionWatcherRefs).every((e) => {
                                const t = this._interactionWatcherRefs[e];
                                return !t || !t.contains(document.activeElement);
                            })),
                        (this._renderObserver = ({ children: e, interactionKey: t, click: r, focus: s, mousemove: a, mouseover: o, touch: l, interactionTimeoutMs: c = 2e3 }) => {
                            const h = {};
                            return (
                                r && (h.onClick = this._handleClick(t, c)),
                                s && ((h.onBlur = this._handleBlur(t, c)), (h.onFocus = this._handleActive(t))),
                                a && (h.onMouseMove = this._handleMouseMove(t, c)),
                                o && ((h.onMouseEnter = this._handleMouseEnter(t)), (h.onMouseLeave = this._handleMouseLeave(t))),
                                l && ((h.onTouchStart = this._handleTouchStart(t)), (h.onTouchEnd = this._handleTouchEnd(t, c))),
                                n.createElement(
                                    "div",
                                    (0, i.Z)({}, h, {
                                        ref: (e) => {
                                            if (!t) throw new Error("Observer requires an `interactionKey` prop for storing refs.");
                                            this._interactionWatcherRefs[t] = e;
                                        },
                                    }),
                                    e,
                                )
                            );
                        }),
                        (this._handleMouseEnter = (e) => () => {
                            this.setState(u(c, e));
                        }),
                        (this._handleMouseLeave = (e) => () => {
                            this.setState(d(c, e));
                        }),
                        (this._handleTouchStart = (e) => () => {
                            this.setState(u(h, e));
                        }),
                        (this._handleTouchEnd = (e, t) => () => {
                            const r = h;
                            clearTimeout(this._timeoutCollection[r][e]), t ? (this._timeoutCollection[r][e] = setTimeout(() => this.setState(d(r, e)), t)) : this.setState(d(r, e));
                        }),
                        (this._handleMouseMove = (e, t) => () => {
                            const r = l;
                            this.state.observed[r].has(e) || this.setState(u(r, e)), clearTimeout(this._timeoutCollection[r][e]), (this._timeoutCollection[r][e] = setTimeout(() => this.setState(d(r, e)), t));
                        }),
                        (this._handleClick = (e, t) => () => {
                            const r = a;
                            this.state.observed[r].has(e) || this.setState(u(r, e)), clearTimeout(this._timeoutCollection[r][e]), (this._timeoutCollection[r][e] = setTimeout(() => this.setState(d(r, e)), t));
                        }),
                        (this._handleActive = (e) => () => {
                            const t = o;
                            clearTimeout(this._timeoutCollection[t][e]);
                            const r = this.hasActiveInteractionWatcherChildren();
                            s.ZP.hadKeyboardEvent && r && this.setState(u(t, e));
                        }),
                        (this._handleBlur = (e, t) => () => {
                            const r = o;
                            clearTimeout(this._timeoutCollection[r][e]), this.state.observed[r].has(e) && (this._timeoutCollection[r][e] = setTimeout(this._handleFocusReset(e), t));
                        }),
                        (this._handleFocusReset = (e) => () => {
                            const t = o;
                            this.setState(d(t, e)), clearTimeout(this._timeoutCollection[t][e]);
                        });
                }
                componentWillUnmount() {
                    Object.keys(this._timeoutCollection).forEach((e) => {
                        const t = this._timeoutCollection[e];
                        Object.keys(t).forEach((e) => {
                            clearTimeout(t[e]);
                        });
                    });
                }
                render() {
                    const { children: e } = this.props;
                    if (!e) throw new Error("component requires children prop.");
                    const t = this._renderObserver;
                    return n.createElement(b.ObserverContext.Provider, { value: t }, n.createElement(b.Context.Provider, { value: this.getContext() }, e));
                }
            }
            (b.Context = p), (b.ObserverContext = m);
        },
        395367: (e, t, r) => {
            r.d(t, { Z: () => a });
            var i,
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
            class a extends n.Component {
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
                                    const { [e]: r, ...i } = this.state.players;
                                    return { players: i };
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
                    return n.createElement(a.RegistrationContext.Provider, { value: this._registrationContext }, n.createElement(a.ProviderContext.Provider, { value: this.state }, this.props.children));
                }
            }
            (i = a), (a.MetadataSubscriber = ({ children: e, playerId: t }) => n.createElement(i.ProviderContext.Consumer, null, ({ players: r }) => n.createElement(s, { playerApi: r && r[t] }, e))), (a.RegistrationContext = n.createContext({ registerPlayer: void 0 })), (a.ProviderContext = n.createContext({ players: {} }));
        },
        986460: (e, t, r) => {
            r.d(t, { GS: () => c, Js: () => a, M2: () => o, Nj: () => u, cm: () => h, gF: () => s, iG: () => p, kA: () => l, lO: () => d });
            var i = r(111677),
                n = r.n(i);
            const s = n().fb236728,
                a = n().e9bd453e,
                o = n().f17dfdb6,
                l = n().d46b00b0,
                c = n().ec8ab8b4,
                h = n().b8b6344a,
                u = n().c9a642fa,
                d = n().c27e60b0,
                p = n().d2969f10;
        },
        41871: (e, t, r) => {
            r.d(t, { Z: () => f });
            var i = r(807896),
                n = r(202784),
                s = r(325686),
                a = r(111677),
                o = r.n(a),
                l = r(83515),
                c = r(926628),
                h = r(301049),
                u = r(154003),
                d = r(466792),
                p = r(173739),
                m = r(392237);
            const b = o().b3160a69;
            class S extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { showSlider: !1, isSliderActive: !1 }),
                        (this._handleButtonLayoutChange = (e) => {
                            const { containerHeight: t } = this.props,
                                { sliderMaxHeight: r } = this.state,
                                { height: i } = e.nativeEvent.layout;
                            if (t) {
                                const e = t - i - m.default.theme.spacesPx.space20 + "px";
                                e !== r && this.setState({ sliderMaxHeight: e });
                            }
                        }),
                        (this._handleSliderActive = (e) => this.setState({ isSliderActive: e })),
                        (this._showSlider = () => this.setState({ showSlider: !0 })),
                        (this._hideSlider = () => this.setState({ showSlider: !1 })),
                        (this._shouldShowSlider = (e) => e.showSlider || e.isSliderActive),
                        (this._normalizeValue = (e) => Math.max(0, Math.min(e, 100))),
                        (this._getSliderMarginStyles = (e) => {
                            const t = e ?? "medium";
                            return g["large" === t ? "xLarge" : t];
                        }),
                        (this._handleKeyDown = (e) => {
                            const { onSliderChange: t, volumePercent: r } = this.props,
                                { altKey: i, ctrlKey: n, metaKey: s } = e;
                            if (i || n || s) return;
                            const a = e.key === h.Z.ArrowUp || e.key === h.Z.ArrowRight,
                                o = e.key === h.Z.ArrowDown || e.key === h.Z.ArrowLeft;
                            if (a || o) {
                                const i = this._normalizeValue(r + 10 * (a ? 1 : -1));
                                t && t(i), e.preventDefault();
                            }
                        });
                }
                componentDidUpdate(e, t) {
                    const { onHideSlider: r, onShowSlider: i, onSliderChange: n } = this.props;
                    if (n) {
                        const e = this._shouldShowSlider(t),
                            n = this._shouldShowSlider(this.state);
                        !e && n && i && i(), e && !n && r && r();
                    }
                }
                render() {
                    const { accessibilityLabelIcon: e, accessibilityLabelSlider: t, containerHeight: r, isMuted: a, onHideSlider: o, onMuteToggle: h, onShowSlider: S, onSliderChange: g, pullRight: f, sliderColor: v, volumePercent: _, withGraySliderTrack: C, withNavigationSliderBackground: E, ...w } = this.props,
                        P = a ? n.createElement(l.default, null) : n.createElement(c.default, null),
                        x = E ? y.sliderWithNavigationBackground : y.sliderWithDefaultBackground;
                    return n.createElement(d.Z, { disabled: !g, onFocusRingGained: g ? this._showSlider : void 0, onFocusRingLost: g ? this._hideSlider : void 0, onHoverIn: g ? this._showSlider : void 0, onHoverOut: g ? this._hideSlider : void 0 }, n.createElement(s.Z, { onKeyDown: g ? this._handleKeyDown : void 0 }, n.createElement(u.ZP, (0, i.Z)({ "aria-label": e, icon: P, onLayout: this._handleButtonLayoutChange, onPress: h, pullRight: f, type: "onMediaText" }, w)), g && n.createElement(d.Z, { onFocusRingGained: S, onFocusRingLost: o }, ({ isFocusedWithin: e }) => n.createElement(s.Z, { style: [y.sliderBackground, x, this._getSliderMarginStyles(w.size), e || this._shouldShowSlider(this.state) ? null : m.default.visuallyHidden, !!r && { maxHeight: this.state.sliderMaxHeight }] }, n.createElement(p.Z, { accessibilityLabelValueText: b({ volumePercent: _ }), "aria-label": t, color: v || "white", isVertical: !0, keyboardStep: 10, max: 100, min: 0, onActive: this._handleSliderActive, onChange: g, step: 1, value: a ? 0 : _ || 0, withGrayBackground: C })))));
                }
            }
            S.defaultProps = { pullRight: !1 };
            const y = m.default.create((e) => ({ sliderBackground: { bottom: 0, borderRadius: e.borderRadii.xLarge, height: `calc(${e.spaces.space64}*2)`, start: e.spaces.space4, position: "absolute", padding: e.spaces.space12, paddingVertical: e.spaces.space16, end: e.spaces.space4 }, sliderWithDefaultBackground: { backgroundColor: e.colors.translucentBlack30 }, sliderWithNavigationBackground: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall } })),
                g = m.default.create(({ spaces: e, spacesPx: t }) => {
                    const r = `${t.space16 + t.space4 + t.space2}px`,
                        i = `${t.space20 + t.space24}px`,
                        n = `${t.space12 + t.space40}px`;
                    return { xSmall: { marginBottom: e.space24 }, small: { marginBottom: e.space32 }, medium: { marginBottom: e.space36 }, large: { marginBottom: i }, xLarge: { marginBotom: n }, smallCompact: { marginBottom: r }, DEPRECATED_normalCompact: { marginBottom: e.space32 }, DEPRECATED_normal: { marginBottom: e.space40 } };
                }),
                f = S;
        },
        841972: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var i = r(202784),
                n = r(890601),
                s = r(783427),
                a = r(717683),
                o = r(347101);
            const l = (e = {}) => {
                const t = i.useContext(a.Z),
                    { direction: r } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style, t && o.Z.iconRTL], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M13 3h8v8h-2V6.41l-5.043 5.05-1.414-1.42L17.586 5H13V3zm-1.543 10.96L6.414 19H11v2H3v-8h2v4.59l5.043-5.05 1.414 1.42z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        614425: (e, t, r) => {
            r.d(t, { Y7: () => i });
            const i = r(795897).default;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.MediaPreviewVideoPlayer.f5132e9a.js.map

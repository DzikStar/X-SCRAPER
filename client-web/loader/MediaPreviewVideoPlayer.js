"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.MediaPreviewVideoPlayer"],
    {
        298607: (e, t, r) => {
            r.r(t), r.d(t, { __DANGEROUS_IMPORT_VIDEOPLAYER__: () => q });
            var n = r(202784),
                o = r(738584),
                i = r(674132),
                a = r.n(i),
                s = r(789403),
                l = r(908629),
                c = r(864386),
                u = r(893164),
                d = r(320619),
                h = r(325686),
                p = r(643442),
                m = r(737691),
                b = r(466445),
                S = r(841972),
                v = r(647174),
                g = r(38502),
                f = r(804579),
                y = r(912021),
                C = r(392237),
                _ = r(41871),
                w = r(458774),
                E = r(420922),
                T = r(103849),
                P = r(70889),
                k = r(445014),
                x = r(986460),
                R = r(424713),
                Z = r(2138),
                M = r(173739);
            const A = a().f06f2e53;
            class B extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._handleChange = (e) => {
                            const { getScrubToFraction: t } = this.props;
                            this.setState({ scrubTo: e });
                            const r = t?.(e) ?? this._defaultGetScrubToFraction(e);
                            "number" == typeof r && this._throttledPlayerSeek(r);
                        }),
                        (this._throttledPlayerSeek = (0, Z.Z)(
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
                    const { "aria-label": e, currentTime: t, duration: r, isSeeking: o } = this.props,
                        i = this.state.isScrubbing || o ? this.state.scrubTo : t;
                    return "number" == typeof i && "number" == typeof r && r > 0 ? n.createElement(M.Z, { accessibilityLabelValueText: A({ currentTime: (0, R.mr)(i), durationTime: (0, R.mr)(r) }), "aria-label": e, color: "white", keepLTR: !0, keyboardStep: 5, max: r, min: 0, onActive: this._handleActive, onChange: this._handleChange, step: "any", value: i, withHidingThumb: !0 }) : null;
                }
            }
            const F = B,
                L = a().j25d7cca,
                O = a().a858b25c,
                z = a().hea01798,
                H = "PreviewControlBar-",
                D = { CAPTIONS: `${H}Captions`, FULLSCREEN: `${H}Fullscreen` },
                I = (e) => e === w.c.narrow || e === w.c.veryNarrow;
            class G extends n.PureComponent {
                constructor(e) {
                    if (
                        (super(e),
                        (this.state = { currentBreakpoint: w.c.wide, showScrubber: !0, scrubTime: 0 }),
                        (this._parentRef = n.createRef()),
                        (this._renderActionButton = (e, t) => {
                            const { controls: r, isPlaying: o } = t,
                                { pause: i, play: a, replay: s } = e,
                                { currentBreakpoint: l } = this.state,
                                c = (0, R.Ci)(t),
                                u = I(l) ? "xSmall" : "medium";
                            return !c || c.isLive ? null : o || (r && "PLAY_REQUESTED" === r.playState) ? n.createElement(T.Z, { "aria-label": x.gF, hoverLabelPreferredHorizontalOrientation: "end", hoverLabelWithExtraSpace: this.props.showScrubber, icon: n.createElement(p.default, null), onPress: i, size: u }) : r.isReplayButtonShown ? n.createElement(T.Z, { "aria-label": x.Js, hoverLabelPreferredHorizontalOrientation: "end", hoverLabelWithExtraSpace: this.props.showScrubber, icon: n.createElement(m.default, null), onPress: s, size: u }) : n.createElement(T.Z, { "aria-label": x.M2, hoverLabelPreferredHorizontalOrientation: "end", hoverLabelWithExtraSpace: this.props.showScrubber, icon: n.createElement(b.default, null), onPress: a, size: u });
                        }),
                        (this._renderFullScreenButton = (e, t) => {
                            const { fullscreen: r } = t,
                                { currentBreakpoint: o } = this.state,
                                i = this._fullScreenIcon,
                                a = I(o) ? "xSmall" : "medium";
                            return r.isFullscreen ? n.createElement(T.Z, { "aria-label": x.iG, hoverLabelPreferredHorizontalOrientation: "start", hoverLabelWithExtraSpace: this.props.showScrubber, icon: n.createElement(i, { isFullscreen: r.isFullscreen }), onPress: this._exitFullScreen(e), size: a }) : n.createElement(T.Z, { "aria-label": x.lO, hoverLabelPreferredHorizontalOrientation: "start", hoverLabelWithExtraSpace: this.props.showScrubber, icon: n.createElement(i, { isFullscreen: r.isFullscreen }), onPress: this._requestFullScreen(e), size: a });
                        }),
                        (this._fullScreenIcon = ({ isFullscreen: e, style: t }) => {
                            const { hidden: r, shown: o } = N;
                            return n.createElement(n.Fragment, null, n.createElement(S.default, { style: e ? r : o }), n.createElement(v.default, { style: e ? o : r }));
                        }),
                        (this._requestFullScreen = (e) => () => {
                            e.fullScreen(this.props.containerRef);
                        }),
                        (this._exitFullScreen = (e) => () => e.exitFullScreen()),
                        (this._getScrubToFraction = (0, y.Z)((e) => (t) => (0, R.aZ)(e, t))),
                        (this._renderScrubber = (e) =>
                            this.props.showScrubber && this.state.showScrubber
                                ? n.createElement(
                                      h.Z,
                                      { style: k.ZP.scrubber },
                                      n.createElement(o.o, { periodic: !0 }, ({ playerState: t }) => n.createElement(F, { "aria-label": z, currentTime: (0, R.SY)(t), duration: (0, R.zm)(t), getScrubToFraction: this._getScrubToFraction(t), isScrubbing: t.isScrubbing, isSeeking: t.isSeeking, playerApi: e })),
                                  )
                                : null),
                        (this._renderVolume = (e, t) => {
                            const { isMuted: r, volume: o } = t,
                                { mute: i, setVolume: a, unmute: s } = e,
                                { containerHeight: l, currentBreakpoint: c } = this.state,
                                u = r ? s : i,
                                d = r ? x.cm : x.GS;
                            return n.createElement(_.Z, { accessibilityLabelIcon: d, accessibilityLabelSlider: x.Nj, containerHeight: l, isMuted: r, onHideSlider: this._showScrubberHandler(!0), onMuteToggle: u, onShowSlider: this._showScrubberHandler(!1), onSliderChange: this._setVolumePercent(a), size: I(c) ? "xSmall" : "medium", volumePercent: 100 * o });
                        }),
                        (this._renderCaptionsButton = (e, t) => {
                            const r = (0, R.Ci)(t);
                            if (r && r.hasCaptions) {
                                const { currentBreakpoint: r } = this.state,
                                    { areCaptionsShown: o } = t,
                                    { toggleCaptions: i } = e;
                                return n.createElement(T.Z, { "aria-label": o ? L : O, hoverLabelWithExtraSpace: this.props.showScrubber, icon: o ? n.createElement(g.default, null) : n.createElement(f.default, null), onPress: i, size: I(r) ? "xSmall" : "medium", testID: "captions" });
                            }
                        }),
                        (this._renderTimePlayed = () =>
                            n.createElement(o.o, { periodic: !0 }, ({ playerState: e }) => {
                                const { currentBreakpoint: t } = this.state,
                                    r = this._getTimestampValues(e);
                                if (!r) return null;
                                const o = this._formatTimePlayed({ ...r, isCompact: t === w.c.veryNarrow });
                                return n.createElement(P.Z, { style: I(t) && { fontSize: C.default.theme.fontSizes.subtext2 } }, o);
                            })),
                        (this._getTimestampValues = (e) => {
                            const { controls: t, isSeeking: r } = e,
                                { playbackTimeRange: n, scrubToFraction: o } = t,
                                i = (0, R.MU)((0, R.Ci)(e)),
                                a = (0, R.zm)(e);
                            if (!i || !a) return null;
                            if (r && void 0 !== o && i) {
                                return { duration: a, currentTime: o * i - (n?.startTimeS ?? 0) };
                            }
                            return { duration: a, currentTime: (0, R.SY)(e) };
                        }),
                        (this._formatTimePlayed = ({ currentTime: e, duration: t, isCompact: r }) => {
                            const n = t - e;
                            return r ? `${(0, R.mr)(Math.round(n))}` : `${(0, R.mr)(Math.round(e))} / ${(0, R.mr)(Math.round(t))}`;
                        }),
                        (this._showScrubberHandler = (e) => () => this.setState({ showScrubber: e })),
                        (this._setVolumePercent = (e) => (t) => {
                            e(t / 100);
                        }),
                        (this._handleLayout = (e) => {
                            const { width: t } = e.nativeEvent.layout,
                                { currentBreakpoint: r } = this.state,
                                n = this._convertWidthToBreakpoint(t);
                            n !== r && this.setState((e) => ({ currentBreakpoint: n }));
                        }),
                        (this._convertWidthToBreakpoint = (e) => {
                            let t;
                            return e > w.U.wide ? (t = w.c.wide) : e < w.U.veryNarrow ? (t = w.c.veryNarrow) : e < w.U.narrow && (t = w.c.narrow), t;
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
                    return t && r ? n.createElement(c.Z.ObserverContext.Consumer, null, (o) => n.createElement(h.Z, { onLayout: this._handleLayout, pointerEvents: "auto", ref: this._parentRef, style: k.i3 }, n.createElement(E.Z, { actionButton: this._renderActionButton(t, r), displayDismissableControls: !e, rightContent: n.createElement(n.Fragment, null, this._renderTimePlayed(), n.createElement(o, { focus: !0, interactionKey: D.CAPTIONS, interactionTimeoutMs: 0, mouseover: !0 }, this._renderCaptionsButton(t, r)), this._renderVolume(t, r), n.createElement(o, { focus: !0, interactionKey: D.FULLSCREEN, interactionTimeoutMs: 0, mouseover: !0 }, this._renderFullScreenButton(t, r))), scrubber: this._renderScrubber(t) }))) : null;
                }
            }
            G.defaultProps = { showScrubber: !0 };
            const U = G,
                N = { hidden: { display: "none", height: "1.5em" }, shown: { display: "block", height: "1.5em" } },
                W = ({ playerApi: e, playerState: t }) =>
                    n.createElement(h.Z, {
                        onClick: () => {
                            t?.isPlaying ? e.pause() : e.play();
                        },
                        style: C.default.absoluteFill,
                    }),
                V = { MEDIA_NOT_SUPPORTED: a().f0e1fb48 },
                Y = (e, t) => (t ? V[s.Z.MEDIA_NOT_SUPPORTED] : e ? V[e] : d.I);
            const X = function (e) {
                const { containerRef: t, hideControls: r, isBrowserSupported: o, playerApi: i, playerState: a, showScrubber: s } = e;
                if (!i || !a || !t) return null;
                const d = !1 === o,
                    h = Boolean(a.error) || d;
                return n.createElement(n.Fragment, null, n.createElement(W, { playerApi: i, playerState: a }), n.createElement(c.Z, null, n.createElement(U, { containerRef: t, hideControls: r, playerApi: i, playerState: a, showScrubber: s })), n.createElement(l.Z, { show: h }, h && n.createElement(u.Z, { displayBackgroundImage: !0, errorMessage: Y(a.error, d), imageSrc: a.posterImage })));
            };
            var j = r(640290),
                $ = r(614425),
                K = r(946208);
            const q = function (e) {
                const [t, r] = n.useState(null),
                    i = e.mediaFile.duration,
                    a = 1e3 * i,
                    { subtitles: s, trimData: l } = e;
                let c, u;
                if (s?.upload?.mediaFile instanceof K.ZP) {
                    u = s.upload.mediaFile.vtt;
                    const e = document.createElement("track");
                    (e.default = !0), (e.label = s?.displayName || ""), (e.lang = s?.lang || ""), (e.src = u), (e.kind = "subtitles"), (c = document.createElement("video")), c.appendChild(e);
                }
                return (
                    n.useEffect(() => {
                        if (t && l) {
                            const e = l.startTime || 0,
                                r = l.endTime || i;
                            t.scrubToFraction(e / i), t.setPlaybackTimeRange({ startTimeS: e, endTimeS: r });
                        }
                    }, [i, l, t]),
                    n.createElement(o.Z, { aspectRatio: e.mediaFile.width / e.mediaFile.height, basePlayerClass: $.Y7, configType: "static", contentId: e.mediaId, contentType: "media_entity", durationMs: a, httpClient: J, initiallyMuted: !0, key: u, loop: !0, onApiReady: r, playerId: "composer_media_preview", poster: e.mediaFile.thumbnail, size: "fill", variants: e.variants, videoEl: c }, ({ containerRef: t, playerApi: r, playerState: o }) => n.createElement(X, { containerRef: t, isBrowserSupported: e.mediaFile.isBrowserSupported, playerApi: r, playerState: o, showScrubber: !0 }))
                );
            };
            const J = new j.ZP();
        },
        215337: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(202784),
                o = r(325686);
            class i extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, r) => {
                                    const n = t[r];
                                    let o = "";
                                    return n && (o = ` ${100 * n}%`), e + o;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: r, style: i } = this.props;
                    return n.createElement(o.Z, { style: [i, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, r);
                }
            }
            i.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const a = i;
        },
        173739: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(202784),
                o = r(31501),
                i = r(879891);
            const a = ({ accessibilityLabelValueText: e, "aria-label": t, onChange: r, onDarkBackground: a, thumbLabel: s, value: l, ...c }) => {
                const { direction: u } = (0, i.Z)(),
                    d = { ...c, endThumbAccessibilityLabel: t, endThumbAccessibilityLabelValueText: e, endThumbLabel: s, onDarkBackground: a, value: [c.min, l], onChange: (e) => r(e[1]), isSingleSlider: !0, languageWritingDirection: u };
                return n.createElement(o.Z, d);
            };
        },
        420922: (e, t, r) => {
            r.d(t, { Z: () => c });
            var n = r(202784),
                o = r(325686),
                i = r(908629),
                a = r(215337),
                s = r(392237),
                l = r(445014);
            const c = ({ actionButton: e, displayDismissableControls: t = !0, leftContent: r, rightContent: c, scrubber: u, skipButton: d, viewCountGraph: h }) => n.createElement(n.Fragment, null, n.createElement(i.Z, { show: t }, n.createElement(a.Z, { colors: [s.default.theme.colors.transparent, s.default.theme.colors.translucentBlack77], style: l.ZP.absoluteContainer })), n.createElement(o.Z, { style: l.ZP.controlContainer }, n.createElement(o.Z, { style: l.ZP.flex }, n.createElement(i.Z, { show: t }, n.createElement(o.Z, { style: l.ZP.controlsBottomOffset }, h, u, n.createElement(o.Z, { style: l.A9 }, n.createElement(o.Z, { style: l.rq }, e, n.createElement(o.Z, { style: [l.ZP.flexRow, l.ZP.flexShrink] }, r)), n.createElement(o.Z, { style: l.Xo }, c))))), d && n.createElement(o.Z, { style: l.ZP.controlsBottomOffset }, d)));
        },
        103849: (e, t, r) => {
            r.d(t, { Z: () => c, g: () => l });
            var n = r(807896),
                o = r(202784),
                i = r(154003),
                a = r(336373);
            const s = (e) => {
                    const { hoverLabelPreferredHorizontalOrientation: t, hoverLabelWithExtraSpace: r, ...a } = e,
                        s = e["aria-label"] ? { label: e["aria-label"], preferredVerticalOrientation: "up", preferredHorizontalOrientation: e.hoverLabelPreferredHorizontalOrientation, withLayer: !1, withExtraSpace: e.hoverLabelWithExtraSpace } : void 0;
                    return o.createElement(i.ZP, (0, n.Z)({}, a, { hoverLabel: s, size: e.size || "medium", type: "onMediaText" }));
                },
                l = (e) => {
                    const { icon: t, onPress: r, scribeNamespace: i, size: l, testID: c, ...u } = e,
                        d = a.Z.useAnalytics();
                    return o.createElement(
                        s,
                        (0, n.Z)({}, u, {
                            icon: t,
                            onPress: (e) => {
                                r && r(e), d.scribe(i);
                            },
                            size: l,
                            testID: c,
                        }),
                    );
                },
                c = s;
        },
        70889: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(202784),
                o = r(731708);
            const i = (e) => n.createElement(o.ZP, { color: "white", numberOfLines: 1, style: [a.withMargin, e.style] }, e.children),
                a = r(392237).default.create((e) => ({ withMargin: { marginHorizontal: e.spaces.space4 } })),
                s = n.memo(i);
        },
        458774: (e, t, r) => {
            r.d(t, { U: () => o, c: () => n });
            const n = Object.freeze({ wide: "wide", narrow: "narrow", veryNarrow: "veryNarrow" }),
                o = Object.freeze({ [n.wide]: 500, [n.narrow]: 285, [n.veryNarrow]: 200 });
        },
        445014: (e, t, r) => {
            r.d(t, { A9: () => a, Nk: () => i, Xo: () => l, ZP: () => u, eR: () => c, i3: () => o, rq: () => s });
            const n = r(392237).default.create((e) => ({ root: { writingDirection: "ltr", position: "absolute", bottom: 0, cursor: "auto", width: "100%" }, container: { paddingHorizontal: e.spaces.space4, paddingBottom: e.spaces.space2 }, absoluteContainer: { paddingHorizontal: e.spaces.space4, paddingBottom: e.spaces.space2, width: "100%", position: "absolute", minHeight: "100%" }, scrubber: { paddingStart: e.spaces.space4, paddingEnd: e.spaces.space4 }, bottomBar: { width: "100%", justifyContent: "space-between" }, actionContainer: { minHeight: e.spaces.space40 }, flex: { flex: 1 }, flexShrink: { flexShrink: 1 }, flexRow: { alignItems: "center", flexDirection: "row" }, rightContainer: { justifyContent: "flex-end" }, leftContainer: { justifyContent: "flex-start", flexGrow: 1 }, controlContainer: { flexDirection: "row", paddingHorizontal: e.spaces.space4 }, controlsBottomOffset: { display: "flex", paddingBottom: e.spaces.space2 }, viewCountGraph: { top: e.spaces.space12, zIndex: -1, paddingStart: e.spaces.space4, paddingEnd: e.spaces.space4 }, liveCircle: { color: e.colors.red500, width: e.spaces.space4 }, notLiveCircle: { color: e.colors.gray100, width: e.spaces.space4 }, barGraphItem: { backgroundColor: "rgba(255, 255, 255, 0.7)", borderColor: "rgba(255, 255, 255, 0.7)", zIndex: 0 }, withMargin: { marginHorizontal: e.spaces.space2, paddingHorizontal: e.spaces.space2 }, skipButtonAffordance: { opacity: 0 }, skipAdText: { fontVariant: "tabular-nums" } })),
                o = n.root,
                i = n.container,
                a = [n.flexRow, n.bottomBar],
                s = [n.actionContainer, n.leftContainer, n.flexShrink, n.flexRow],
                l = [n.actionContainer, n.rightContainer, n.flexRow],
                c = n.skipAdText,
                u = n;
        },
        864386: (e, t, r) => {
            r.d(t, { Z: () => b });
            var n = r(807896),
                o = (r(571372), r(202784)),
                i = r(24812);
            const a = "click",
                s = "focused",
                l = "mousemove",
                c = "mouseover",
                u = "touch",
                d = (e, t) => (r) => {
                    const { observed: n } = r;
                    return n[e].add(t), { observed: n };
                },
                h = (e, t) => (r) => {
                    const { observed: n } = r;
                    return n[e].delete(t), { observed: n };
                },
                p = o.createContext({ observed: { click: new Set(), focused: new Set(), mousemove: new Set(), mouseover: new Set() }, Observer: () => null }),
                m = o.createContext(() => null);
            class b extends o.Component {
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
                        (this._renderObserver = ({ children: e, interactionKey: t, click: r, focus: i, mousemove: a, mouseover: s, touch: l, interactionTimeoutMs: c = 2e3 }) => {
                            const u = {};
                            return (
                                r && (u.onClick = this._handleClick(t, c)),
                                i && ((u.onBlur = this._handleBlur(t, c)), (u.onFocus = this._handleActive(t))),
                                a && (u.onMouseMove = this._handleMouseMove(t, c)),
                                s && ((u.onMouseEnter = this._handleMouseEnter(t)), (u.onMouseLeave = this._handleMouseLeave(t))),
                                l && ((u.onTouchStart = this._handleTouchStart(t)), (u.onTouchEnd = this._handleTouchEnd(t, c))),
                                o.createElement(
                                    "div",
                                    (0, n.Z)({}, u, {
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
                            this.setState(d(c, e));
                        }),
                        (this._handleMouseLeave = (e) => () => {
                            this.setState(h(c, e));
                        }),
                        (this._handleTouchStart = (e) => () => {
                            this.setState(d(u, e));
                        }),
                        (this._handleTouchEnd = (e, t) => () => {
                            const r = u;
                            clearTimeout(this._timeoutCollection[r][e]), t ? (this._timeoutCollection[r][e] = setTimeout(() => this.setState(h(r, e)), t)) : this.setState(h(r, e));
                        }),
                        (this._handleMouseMove = (e, t) => () => {
                            const r = l;
                            this.state.observed[r].has(e) || this.setState(d(r, e)), clearTimeout(this._timeoutCollection[r][e]), (this._timeoutCollection[r][e] = setTimeout(() => this.setState(h(r, e)), t));
                        }),
                        (this._handleClick = (e, t) => () => {
                            const r = a;
                            this.state.observed[r].has(e) || this.setState(d(r, e)), clearTimeout(this._timeoutCollection[r][e]), (this._timeoutCollection[r][e] = setTimeout(() => this.setState(h(r, e)), t));
                        }),
                        (this._handleActive = (e) => () => {
                            const t = s;
                            clearTimeout(this._timeoutCollection[t][e]);
                            const r = this.hasActiveInteractionWatcherChildren();
                            i.ZP.hadKeyboardEvent && r && this.setState(d(t, e));
                        }),
                        (this._handleBlur = (e, t) => () => {
                            const r = s;
                            clearTimeout(this._timeoutCollection[r][e]), this.state.observed[r].has(e) && (this._timeoutCollection[r][e] = setTimeout(this._handleFocusReset(e), t));
                        }),
                        (this._handleFocusReset = (e) => () => {
                            const t = s;
                            this.setState(h(t, e)), clearTimeout(this._timeoutCollection[t][e]);
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
                    return o.createElement(b.ObserverContext.Provider, { value: t }, o.createElement(b.Context.Provider, { value: this.getContext() }, e));
                }
            }
            (b.Context = p), (b.ObserverContext = m);
        },
        986460: (e, t, r) => {
            r.d(t, { GS: () => c, Js: () => a, M2: () => s, Nj: () => d, cm: () => u, gF: () => i, iG: () => p, kA: () => l, lO: () => h });
            var n = r(674132),
                o = r.n(n);
            const i = o().fb236728,
                a = o().e9bd453e,
                s = o().f17dfdb6,
                l = o().d46b00b0,
                c = o().ec8ab8b4,
                u = o().b8b6344a,
                d = o().c9a642fa,
                h = o().c27e60b0,
                p = o().d2969f10;
        },
        41871: (e, t, r) => {
            r.d(t, { Z: () => f });
            var n = r(807896),
                o = r(202784),
                i = r(325686),
                a = r(674132),
                s = r.n(a),
                l = r(83515),
                c = r(926628),
                u = r(301049),
                d = r(154003),
                h = r(466792),
                p = r(173739),
                m = r(392237);
            const b = s().b3160a69;
            class S extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { showSlider: !1, isSliderActive: !1 }),
                        (this._handleButtonLayoutChange = (e) => {
                            const { containerHeight: t } = this.props,
                                { sliderMaxHeight: r } = this.state,
                                { height: n } = e.nativeEvent.layout;
                            if (t) {
                                const e = t - n - m.default.theme.spacesPx.space20 + "px";
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
                                { altKey: n, ctrlKey: o, metaKey: i } = e;
                            if (n || o || i) return;
                            const a = e.key === u.Z.ArrowUp || e.key === u.Z.ArrowRight,
                                s = e.key === u.Z.ArrowDown || e.key === u.Z.ArrowLeft;
                            if (a || s) {
                                const n = this._normalizeValue(r + 10 * (a ? 1 : -1));
                                t && t(n), e.preventDefault();
                            }
                        });
                }
                componentDidUpdate(e, t) {
                    const { onHideSlider: r, onShowSlider: n, onSliderChange: o } = this.props;
                    if (o) {
                        const e = this._shouldShowSlider(t),
                            o = this._shouldShowSlider(this.state);
                        !e && o && n && n(), e && !o && r && r();
                    }
                }
                render() {
                    const { accessibilityLabelIcon: e, accessibilityLabelSlider: t, containerHeight: r, isMuted: a, onHideSlider: s, onMuteToggle: u, onShowSlider: S, onSliderChange: g, pullRight: f, sliderColor: y, volumePercent: C, withGraySliderTrack: _, withNavigationSliderBackground: w, ...E } = this.props,
                        T = a ? o.createElement(l.default, null) : o.createElement(c.default, null),
                        P = w ? v.sliderWithNavigationBackground : v.sliderWithDefaultBackground;
                    return o.createElement(h.Z, { disabled: !g, onFocusRingGained: g ? this._showSlider : void 0, onFocusRingLost: g ? this._hideSlider : void 0, onHoverIn: g ? this._showSlider : void 0, onHoverOut: g ? this._hideSlider : void 0 }, o.createElement(i.Z, { onKeyDown: g ? this._handleKeyDown : void 0 }, o.createElement(d.ZP, (0, n.Z)({ "aria-label": e, icon: T, onLayout: this._handleButtonLayoutChange, onPress: u, pullRight: f, type: "onMediaText" }, E)), g && o.createElement(h.Z, { onFocusRingGained: S, onFocusRingLost: s }, ({ isFocusedWithin: e }) => o.createElement(i.Z, { style: [v.sliderBackground, P, this._getSliderMarginStyles(E.size), e || this._shouldShowSlider(this.state) ? null : m.default.visuallyHidden, !!r && { maxHeight: this.state.sliderMaxHeight }] }, o.createElement(p.Z, { accessibilityLabelValueText: b({ volumePercent: C }), "aria-label": t, color: y || "white", isVertical: !0, keyboardStep: 10, max: 100, min: 0, onActive: this._handleSliderActive, onChange: g, step: 1, value: a ? 0 : C || 0, withGrayBackground: _ })))));
                }
            }
            S.defaultProps = { pullRight: !1 };
            const v = m.default.create((e) => ({ sliderBackground: { bottom: 0, borderRadius: e.borderRadii.xLarge, height: `calc(${e.spaces.space64}*2)`, start: e.spaces.space4, position: "absolute", padding: e.spaces.space12, paddingVertical: e.spaces.space16, end: e.spaces.space4 }, sliderWithDefaultBackground: { backgroundColor: e.colors.translucentBlack30 }, sliderWithNavigationBackground: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall } })),
                g = m.default.create(({ spaces: e, spacesPx: t }) => {
                    const r = `${t.space16 + t.space4 + t.space2}px`,
                        n = `${t.space20 + t.space24}px`,
                        o = `${t.space12 + t.space40}px`;
                    return { xSmall: { marginBottom: e.space24 }, small: { marginBottom: e.space32 }, medium: { marginBottom: e.space36 }, large: { marginBottom: n }, xLarge: { marginBotom: o }, smallCompact: { marginBottom: r }, DEPRECATED_normalCompact: { marginBottom: e.space32 }, DEPRECATED_normal: { marginBottom: e.space40 } };
                }),
                f = S;
        },
        27137: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(157396);
            const o = (0, r(587878).Z)({ palette: n.CV.light, key: "light-blue-normal", highContrastEnabled: !1, chirpFontEnabled: !1, scale: "normal" });
        },
        804579: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                o = r(890601),
                i = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M5.747 12c0-1.8 1.388-3.22 3.26-3.22 1.26 0 2.075.53 2.62 1.29l-1.207.94c-.306-.42-.798-.7-1.357-.7-.93 0-1.684.76-1.684 1.69s.755 1.68 1.685 1.68c.578 0 1.087-.29 1.39-.73l1.22.87c-.583.8-1.368 1.39-2.737 1.39h-.003c-1.766 0-3.187-1.35-3.187-3.19V12zm6.584.02c0 1.84 1.421 3.19 3.185 3.19 1.368 0 2.154-.59 2.738-1.39l-1.22-.87c-.304.44-.813.73-1.39.73-.93 0-1.684-.75-1.684-1.68s.755-1.68 1.685-1.68c.559 0 1.051.27 1.356.69l1.21-.94c-.547-.76-1.36-1.29-2.622-1.29-1.872 0-3.258 1.42-3.258 3.22v.02zM18.5 3C19.881 3 21 4.12 21 5.5v13c0 1.38-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.88 3 18.5v-13C3 4.12 4.119 3 5.5 3h13zM5 18.5c0 .28.224.5.5.5h13c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-13c-.276 0-.5.22-.5.5v13z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        926628: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var n = r(202784),
                o = r(890601),
                i = r(783427),
                a = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M15 22.94V1.06L6.68 7H3.5C2.12 7 1 8.12 1 9.5v5C1 15.88 2.12 17 3.5 17h3.18L15 22.94zM3.5 9H6v6H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zM13 19.06l-5-3.57V8.51l5-3.57v14.12zm5.95-12.01c-.24-.24-.49-.45-.75-.65l1-1.75c.41.29.8.62 1.16.99 3.52 3.51 3.52 9.21 0 12.72-.36.37-.75.7-1.16.99l-1-1.75c.26-.2.51-.41.75-.65 2.73-2.73 2.73-7.17 0-9.9zM17 12c0-.8-.31-1.52-.82-2.06l1.02-1.78c1.1.91 1.8 2.29 1.8 3.84s-.7 2.93-1.8 3.84l-1.02-1.78c.51-.54.82-1.26.82-2.06z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        151624: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = r(454479).Z;
        },
        454479: (e, t, r) => {
            r.d(t, { Z: () => m });
            var n = r(18198),
                o = r(661841),
                i = o.Z.currentCentroidXOfTouchesChangedAfter,
                a = o.Z.currentCentroidYOfTouchesChangedAfter,
                s = o.Z.previousCentroidXOfTouchesChangedAfter,
                l = o.Z.previousCentroidYOfTouchesChangedAfter,
                c = o.Z.currentCentroidX,
                u = o.Z.currentCentroidY,
                d = {
                    _initializeGestureState(e) {
                        (e.moveX = 0), (e.moveY = 0), (e.x0 = 0), (e.y0 = 0), (e.dx = 0), (e.dy = 0), (e.vx = 0), (e.vy = 0), (e.numberActiveTouches = 0), (e._accountsForMovesUpTo = 0);
                    },
                    _updateGestureStateOnMove(e, t) {
                        (e.numberActiveTouches = t.numberActiveTouches), (e.moveX = i(t, e._accountsForMovesUpTo)), (e.moveY = a(t, e._accountsForMovesUpTo));
                        var r = e._accountsForMovesUpTo,
                            n = s(t, r),
                            o = i(t, r),
                            c = l(t, r),
                            u = a(t, r),
                            d = e.dx + (o - n),
                            h = e.dy + (u - c),
                            p = t.mostRecentTimeStamp - e._accountsForMovesUpTo;
                        (e.vx = (d - e.dx) / p), (e.vy = (h - e.dy) / p), (e.dx = d), (e.dy = h), (e._accountsForMovesUpTo = t.mostRecentTimeStamp);
                    },
                    create(e) {
                        var t = { handle: null, shouldCancelClick: !1, timeout: null },
                            r = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
                        return {
                            panHandlers: {
                                onStartShouldSetResponder: (t) => null != e.onStartShouldSetPanResponder && e.onStartShouldSetPanResponder(t, r),
                                onMoveShouldSetResponder: (t) => null != e.onMoveShouldSetPanResponder && e.onMoveShouldSetPanResponder(t, r),
                                onStartShouldSetResponderCapture: (t) => (1 === t.nativeEvent.touches.length && d._initializeGestureState(r), (r.numberActiveTouches = t.touchHistory.numberActiveTouches), null != e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(t, r)),
                                onMoveShouldSetResponderCapture(t) {
                                    var n = t.touchHistory;
                                    return r._accountsForMovesUpTo !== n.mostRecentTimeStamp && (d._updateGestureStateOnMove(r, n), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(t, r));
                                },
                                onResponderGrant: (o) => (
                                    t.handle || (t.handle = n.Z.createInteractionHandle()),
                                    t.timeout &&
                                        (function (e) {
                                            clearTimeout(e.timeout);
                                        })(t),
                                    (t.shouldCancelClick = !0),
                                    (r.x0 = c(o.touchHistory)),
                                    (r.y0 = u(o.touchHistory)),
                                    (r.dx = 0),
                                    (r.dy = 0),
                                    e.onPanResponderGrant && e.onPanResponderGrant(o, r),
                                    null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(o, r)
                                ),
                                onResponderReject(n) {
                                    h(t, e.onPanResponderReject, n, r);
                                },
                                onResponderRelease(n) {
                                    h(t, e.onPanResponderRelease, n, r), p(t), d._initializeGestureState(r);
                                },
                                onResponderStart(t) {
                                    var n = t.touchHistory;
                                    (r.numberActiveTouches = n.numberActiveTouches), e.onPanResponderStart && e.onPanResponderStart(t, r);
                                },
                                onResponderMove(t) {
                                    var n = t.touchHistory;
                                    r._accountsForMovesUpTo !== n.mostRecentTimeStamp && (d._updateGestureStateOnMove(r, n), e.onPanResponderMove && e.onPanResponderMove(t, r));
                                },
                                onResponderEnd(n) {
                                    var o = n.touchHistory;
                                    (r.numberActiveTouches = o.numberActiveTouches), h(t, e.onPanResponderEnd, n, r);
                                },
                                onResponderTerminate(n) {
                                    h(t, e.onPanResponderTerminate, n, r), p(t), d._initializeGestureState(r);
                                },
                                onResponderTerminationRequest: (t) => null == e.onPanResponderTerminationRequest || e.onPanResponderTerminationRequest(t, r),
                                onClickCapture: (e) => {
                                    !0 === t.shouldCancelClick && (e.stopPropagation(), e.preventDefault());
                                },
                            },
                            getInteractionHandle: () => t.handle,
                        };
                    },
                };
            function h(e, t, r, o) {
                e.handle && (n.Z.clearInteractionHandle(e.handle), (e.handle = null)), t && t(r, o);
            }
            function p(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const m = d;
        },
        661841: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = {
                centroidDimension: function (e, t, r, o) {
                    var i = e.touchBank,
                        a = 0,
                        s = 0,
                        l = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                    if (null !== l) l.touchActive && l.currentTimeStamp > t && ((a += o && r ? l.currentPageX : o && !r ? l.currentPageY : !o && r ? l.previousPageX : l.previousPageY), (s = 1));
                    else
                        for (var c = 0; c < i.length; c++) {
                            var u = i[c];
                            if (null != u && u.touchActive && u.currentTimeStamp >= t) {
                                (a += o && r ? u.currentPageX : o && !r ? u.currentPageY : !o && r ? u.previousPageX : u.previousPageY), s++;
                            }
                        }
                    return s > 0 ? a / s : n.noCentroid;
                },
                currentCentroidXOfTouchesChangedAfter: function (e, t) {
                    return n.centroidDimension(e, t, !0, !0);
                },
                currentCentroidYOfTouchesChangedAfter: function (e, t) {
                    return n.centroidDimension(e, t, !1, !0);
                },
                previousCentroidXOfTouchesChangedAfter: function (e, t) {
                    return n.centroidDimension(e, t, !0, !1);
                },
                previousCentroidYOfTouchesChangedAfter: function (e, t) {
                    return n.centroidDimension(e, t, !1, !1);
                },
                currentCentroidX: function (e) {
                    return n.centroidDimension(e, 0, !0, !0);
                },
                currentCentroidY: function (e) {
                    return n.centroidDimension(e, 0, !1, !0);
                },
                noCentroid: -1,
            };
            const o = n;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.MediaPreviewVideoPlayer.23f959ca.js.map

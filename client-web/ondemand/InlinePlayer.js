"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.InlinePlayer", "loader.AudioDock", "loader.AudioContextVoiceMedia", "loader.AudioContextSpaceClip", "loader.AudioOnlyVideoPlayer"],
    {
        541837: (e, t, i) => {
            i.d(t, { Z: () => o });
            var r = i(276563);
            function a(e) {
                const t = { tweet_id: e.id_str },
                    i = e.promoted_content && e.promoted_content.impression_id;
                return i && (t.impression_id = i), e.card && e.card.name === r.default.CardNames.LIVE_EVENT && (t.live_event_id = r.default.getBindingValue(e.card.binding_values, "event_id")), t;
            }
            const o = ({ apiClient: e, featureSwitches: t }) => ({
                fetch: (t) => {
                    const i = { tweets: t.eligibleTweets.map(a) };
                    t.trigger_preroll && (i.trigger_preroll = t.trigger_preroll), t.prerollDisplayLocation && (i.display_location = t.prerollDisplayLocation);
                    const r = { tweets: JSON.stringify(i) };
                    return e.post("videoads/v2/prerolls", r, {}, {});
                },
            });
        },
        90890: (e, t, i) => {
            i.d(t, { Tc: () => l, yt: () => s });
            i(136728), i(202784);
            var r = i(803224),
                a = i(67877),
                o = i(2138);
            const n = { autoplayPrioritizationPolicy: i(408686).Qr, minimumVisibilityForAutoplay: 0.25 };
            class s {
                constructor(e = n) {
                    (this._players = []),
                        (this._setPlayerState = (e, t) => {
                            (e.previousPlaybackState = e.playbackState), (e.playbackState = t), this._updatePlayerStateForDocking(e, t);
                        }),
                        (this._updatePlayerStateForDocking = (e, t) => {
                            if (t === r.q.USER_PLAYING) {
                                const t = e.previousPlaybackState === r.q.USER_PAUSED;
                                if (this._updateDockedVideo && "function" == typeof e.registerDockElement && !t) {
                                    const t = e.registerDockElement();
                                    this._updateDockedVideo(t, e.id);
                                } else this._updateIsUserPaused && this._updateIsUserPaused(!1);
                            } else t === r.q.USER_PAUSED ? this._updateIsUserPaused && this._updateIsUserPaused(!0) : t === r.q.AUTO_PLAYING && this._updateIsUserPaused && this._updateIsUserPaused(!1);
                            this._updateInlinePlayerState && this._updateInlinePlayerState(this._players);
                        }),
                        (this._updatePlaybackStates = () => {
                            const e = this._players.find((e) => e.playbackState === r.q.USER_PLAYING && e.playbackPriority !== r.W.SPACE);
                            e && !this._canPlay(e) ? (this._pausePlayer(e), this._triggerAutoplay()) : e ? this._stopAllExcept(e) : this._triggerAutoplay();
                        }),
                        (this._scheduleUpdate = (0, o.Z)((0, a.Z)(this._updatePlaybackStates, window.requestIdleCallback ? (e) => window.requestIdleCallback(e, { timeout: 200 }) : window.requestAnimationFrame), 300, { leading: !1, trailing: !0 }));
                    const { autoplayPrioritizationPolicy: t, minimumVisibilityForAutoplay: i } = e;
                    (this._autoplayPrioritizationPolicy = t), (this._minimumVisibilityForAutoplay = i);
                }
                register({ autoplayGroupOptions: e, canAutoplay: t, id: i, onAutoPlayRequest: a, onFullscreenEntered: o, onFullscreenExited: n, onPauseRequest: s, isLooping: l, registerDockElement: c, updateDockedVideo: d, updateIsUserPaused: p, playbackPriority: u = r.W.NORMAL }) {
                    (this._updateDockedVideo = d), (this._updateIsUserPaused = p);
                    const h = { id: i, autoplayGroupEmitter: e?.autoplayGroupEmitter, placement: void 0, playbackPriority: u, playbackState: r.q.INITIAL, previousPlaybackState: r.q.INITIAL, commandHandlers: { onAutoPlayRequest: a, onFullscreenEntered: o, onFullscreenExited: n, onPauseRequest: s }, canAutoplay: t && u !== r.W.INELIGIBLE, isLooping: l, registerDockElement: c };
                    return e && e.autoplayGroupEmitter.registerAutoplayGroupPlayer(h, e.mediaIndex), this._players.push(h), { reset: () => this._handleReset(h), signalFullscreenChange: (e) => this._handleFullscreenChanged(e), signalPlacementChange: (e) => this._handlePlacementChange(h, e), signalPlay: () => this._handlePlay(h), signalPause: () => this._handlePause(h), signalPlaybackFinish: (e) => this._handlePlaybackFinished(h, e), signalPlaybackPriorityChange: (e, t) => this._handlePlaybackPriorityChange(h, e, t), unregister: () => this._handleUnregister(h) };
                }
                _handleFullscreenChanged(e) {
                    this._players.forEach((t) => {
                        const { onFullscreenEntered: i, onFullscreenExited: r } = t.commandHandlers;
                        e && i ? i() : !e && r && r();
                    });
                }
                _handlePlacementChange(e, t) {
                    const i = t.scrollY();
                    (e.placement = t), this._scrollY !== i && (this._scrollY = i), e.playbackState === r.q.FINISHED && 0 === t.visibleFraction() && this._setPlayerState(e, r.q.INITIAL), this._scheduleUpdate();
                }
                _handlePlay(e) {
                    e.playbackState !== r.q.AUTO_PLAYING && (e.previousPlaybackState === r.q.AUTO_PLAYING && e.isLooping ? this._setPlayerState(e, r.q.AUTO_PLAYING) : this._setPlayerState(e, r.q.USER_PLAYING)), this._stopAllExcept(e);
                }
                _handlePause(e) {
                    e.playbackState !== r.q.AUTO_PAUSED && this._setPlayerState(e, r.q.USER_PAUSED);
                }
                _handlePlaybackFinished(e, t = !1) {
                    this._setPlayerState(e, r.q.FINISHED), e.autoplayGroupEmitter && e.autoplayGroupEmitter.signalPlaybackComplete(t);
                }
                _handlePlaybackPriorityChange(e, t, i) {
                    (e.playbackPriority = t), (e.canAutoplay = i && t !== r.W.INELIGIBLE), this._scheduleUpdate();
                }
                _handleReset(e) {
                    this._setPlayerState(e, r.q.INITIAL), this._scheduleUpdate();
                }
                _handleUnregister(e) {
                    const t = this._players.indexOf(e);
                    t >= 0 && this._players.splice(t, 1), this._scheduleUpdate();
                }
                _triggerAutoplay() {
                    if (document.pictureInPictureElement) return;
                    const e = new WeakMap(),
                        t = this._players.filter((t) => {
                            const i = this._canAutoPlay(t);
                            return t.autoplayGroupEmitter ? i && this._canGroupAutoplay(t.autoplayGroupEmitter, e) : i;
                        }),
                        i = this._findBestAutoplayFit(t);
                    if (i) {
                        const { autoplayGroupEmitter: e } = i;
                        if (e) {
                            const t = e.signalGroupAutoplayRequest();
                            t && (this._stopAllExcept(t), this._autoPlayVideo(t));
                        } else this._stopAllExcept(i), this._autoPlayVideo(i);
                    } else
                        this._players.forEach((e) => {
                            e.playbackState === r.q.AUTO_PLAYING && this._pausePlayer(e);
                        });
                }
                _canGroupAutoplay(e, t) {
                    if (t.has(e)) return t.get(e);
                    const i = e.isAutoplayGroupEligibleForAutoplay();
                    return t.set(e, i), i;
                }
                _canAutoPlay(e) {
                    const t = !!e.placement && e.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        i = e.playbackState === r.q.USER_PAUSED,
                        a = e.playbackState === r.q.FINISHED;
                    return e.canAutoplay && t && !i && !a;
                }
                _canPlay(e) {
                    const t = !!e.placement && e.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        i = !!e.placement && e.placement.visibleFraction() > 0;
                    return e.playbackPriority !== r.W.INELIGIBLE && (!e.placement || i || t);
                }
                _stopAllExcept(e) {
                    this._players.forEach((t) => {
                        const i = t.playbackPriority !== r.W.SPACE;
                        t === e || !i || (t.playbackState !== r.q.USER_PLAYING && t.playbackState !== r.q.AUTO_PLAYING) || this._pausePlayer(t);
                    });
                }
                _pausePlayer(e) {
                    const { onPauseRequest: t } = e.commandHandlers;
                    this._setPlayerState(e, r.q.AUTO_PAUSED), t();
                }
                _autoPlayVideo(e) {
                    const { onAutoPlayRequest: t } = e.commandHandlers;
                    this._setPlayerState(e, r.q.AUTO_PLAYING), t();
                }
                _findBestAutoplayFit(e) {
                    return this._autoplayPrioritizationPolicy(e);
                }
                _getDistanceToCenter(e) {
                    return e.placement ? e.placement.distanceToCenter() : Number.MAX_VALUE;
                }
                _getDistanceToTop(e) {
                    return e.placement ? e.placement.distanceToTop() : Number.MAX_VALUE;
                }
            }
            const l = new s();
        },
        97837: (e, t, i) => {
            i.d(t, { Z: () => d });
            var r = i(202784),
                a = i(525744),
                o = i(859799),
                n = i(390686),
                s = i(393495);
            class l {
                constructor(e, t, i) {
                    (this.placement = e), (this.obstructions = t), (this.layerId = i);
                }
                getPositionData() {
                    return { percentVisible: this.visibleFraction(), percentOfViewportOccupied: this.placement.viewportOccupiedFraction(), sizesInfo: { viewportSize: this.placement.viewport, mediaSize: this.placement.item } };
                }
                visibleFraction() {
                    const e = this.placement.visiblePart();
                    if (!e) return 0;
                    const t = this.layerId ? this.obstructions.getObstructionAboveLayer(this.layerId, e) : this.obstructions.getTotalObstruction(e),
                        i = s.Z.area(this.placement.item),
                        r = (1 - t) * s.Z.area(e);
                    return i > 0 ? r / i : 0;
                }
                top() {
                    return this.placement.item.top;
                }
                distanceToCenter() {
                    return this.placement.verticalDistanceToViewportCenter();
                }
                distanceToTop() {
                    return this.placement.verticalDistanceToViewportTop();
                }
                scrollY() {
                    return this.placement.scrollY;
                }
            }
            class c extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePageVisibilityChange = () => {
                            if (this._placement) {
                                const { layerId: e, obstructionDetection: t, onPageVisibilityChange: i } = this.props,
                                    r = document.visibilityState,
                                    a = this._obstructions || t.getObstructions(),
                                    o = new l(this._placement, a, e);
                                i && i(r, o);
                            }
                        }),
                        (this._handlePlacementChange = (e) => {
                            this._updateAndNotify({ placement: e }, this.props.onChange);
                        }),
                        (this._handleObstructionChange = () => {
                            const { obstructionDetection: e, onChange: t } = this.props;
                            this._updateAndNotify({ obstructions: e.getObstructions() }, t);
                        }),
                        (this._setPlacementRef = (e) => {
                            this._placementRef = e;
                        });
                }
                sample(e) {
                    this._placementRef &&
                        this._placementRef.sample((t) => {
                            this._updateAndNotify({ placement: t }, e);
                        });
                }
                render() {
                    const { children: e, style: t } = this.props;
                    return r.createElement(n.ZP, { onPlacementChange: this._handlePlacementChange, ref: this._setPlacementRef, style: t, withScrollListener: !0 }, e);
                }
                componentDidMount() {
                    const { obstructionDetection: e } = this.props;
                    (this._obstructionSubscription = e.subscribe(this._handleObstructionChange)), document.addEventListener("visibilitychange", this._handlePageVisibilityChange);
                }
                componentWillUnmount() {
                    this._obstructionSubscription && (this._obstructionSubscription.unsubscribe(), (this._obstructionSubscription = void 0)), document.removeEventListener("visibilitychange", this._handlePageVisibilityChange);
                }
                _updateAndNotify({ obstructions: e, placement: t }, i) {
                    const { layerId: r, obstructionDetection: a } = this.props;
                    (this._placement = t || this._placement),
                        (this._obstructions = e || this._obstructions || a.getObstructions()),
                        this._placement
                            ? i(new l(this._placement, this._obstructions, r))
                            : this._placementRef &&
                              this._placementRef.sample((e) => {
                                  (this._placement = e), (this._obstructions = this._obstructions || a.getObstructions()), i(new l(e, this._obstructions, r));
                              });
                }
            }
            c.defaultProps = { obstructionDetection: a.Z };
            const d = (0, o.Z)(c);
        },
        555492: (e, t, i) => {
            i.d(t, { Z: () => r });
            const r = i(202784).createContext({ heightsReady: !0 });
        },
        408076: (e, t, i) => {
            i.r(t), i.d(t, { InlinePlayerContainer: () => ie, default: () => re });
            var r = i(807896),
                a = i(202784),
                o = i(565058),
                n = i(400752),
                s = i(421158),
                l = i(803224),
                c = i(516951),
                d = i(905996),
                p = i(741810),
                u = i(738584),
                h = i(682474),
                _ = i(392237),
                y = i(640290),
                m = i(908478),
                f = i(323265),
                g = i(791632),
                P = i(443781),
                b = i(931162),
                v = i(993547),
                I = i(329491),
                E = i(954300),
                A = i(870976),
                C = i(992720),
                T = i(325686);
            const w = (e) => {
                    e.stopPropagation();
                },
                S = ({ children: e, testID: t }) => a.createElement(T.Z, { onClick: w, style: _.default.absoluteFill, testID: t }, e);
            var k = i(90890),
                R = i(97837);
            const L = "videoPlayer",
                N = new y.ZP({});
            class O extends a.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._emitter = null),
                        (this._playerInternal = null),
                        (this._placementRef = null),
                        (this._isLooping = !1),
                        (this._isPlayerFullscreen = !1),
                        (this._renderHorizonPlayer = (e) => {
                            const {
                                    additionalBadges: t,
                                    analytics: i,
                                    "aria-label": o,
                                    aspectRatio: n,
                                    displayOptions: s,
                                    durationMs: l,
                                    geolocationPrompt: c,
                                    includeBroadcastEventAssociation: d,
                                    intentToPlayTime: p,
                                    language: h,
                                    mediaAvailability: _,
                                    noAuthHttpClient: y,
                                    playerId: m,
                                    publisherId: f,
                                    source: { contentId: g, eventId: P, videoId: v, vmapUrl: I },
                                    timecode: E,
                                    twitterAuthedHttpClient: A,
                                    uiStack: C,
                                    videoEl: T,
                                    videoPlayer: w,
                                    viewCount: S,
                                    viewCountGraphData: k,
                                } = this.props,
                                R = this.context.featureSwitches.isTrue("rweb_video_pip_enabled"),
                                L = this.context.featureSwitches.isTrue("rweb_live_broadcast_rewind_enabled");
                            return a.createElement(b.R.Consumer, null, ({ prerollDisplayLocation: b }) => a.createElement(u.Z, (0, r.Z)({ adProvider: this._tweetAdProvider(b), additionalBadges: t, analytics: i, "aria-label": o, aspectRatio: n, basePlayerClass: w, configType: "static", contentId: g, cta: this._getPlayerCTA(), disableHls: this._disableHls, durationMs: l, enablePiP: R, enableVideoPlayerCaptionRendering: !0, eventId: P, featureProvider: this.context.featureSwitches, generateDrmTokenCallback: this.props.generateDrmTokenCallback, geolocationPrompt: c, httpClient: y, includeBroadcastEventAssociation: d, intentToPlayTime: p, language: h, liveBroadcastRewindEnabled: L, mediaAvailability: _, objectFitVideo: s && s.objectFitVideo, onApiReady: this._handleApiReady, playbackSessionId: v.id, playerId: m, precache: this._shouldAutoplay, publisherId: f, requestedTimecode: E, twitterAuthedHttpClient: A, videoEl: T, videoId: v, viewCount: S, viewCountGraphData: k, vmapUrl: I }, e), C));
                        }),
                        (this._setPlayerApi = (e) => {
                            const { customOverlay: t, onMuteChange: i, onSetPlayerApi: r } = this.props;
                            "function" == typeof t && ((this._playerInternal = e), this.forceUpdate()), i && (e.on("unmute", () => i({ isPlayerMuted: !1 })), e.on("mute", () => i({ isPlayerMuted: !0 }))), e && (e.on("fullscreenEntered", () => this._handleFullscreenChange({ isPlayerFullscreen: !0 })), e.on("fullscreenExited", () => this._handleFullscreenChange({ isPlayerFullscreen: !1 }))), this._setPlayerInternal(e), r && r(e);
                        }),
                        (this._getPlayerCTA = () => {
                            const { cta: e, promotedContent: t } = this.props;
                            return e && { ...e, url: (0, I.b)(e.url, t?.click_tracking_info) };
                        }),
                        (this._handleApiReady = this._setPlayerApi),
                        (this._getLoopingThreshold = () => {
                            const {
                                loopingThresholdMs: e,
                                source: { videoId: t },
                            } = this.props;
                            return e || ("tweet" === t.type && 6e4) || 7e3;
                        }),
                        (this._handleAutoPlayRequest = () => {
                            const { onAutoplay: e, shouldAutoplayWithoutMuting: t } = this.props;
                            this._playerInternal && (t ? this._playerInternal.play() : this._playerInternal.playPreview(), e && e());
                        }),
                        (this._handlePauseRequest = () => {
                            const { onAutopause: e } = this.props;
                            this._playerInternal && (this._playerInternal.pause(), e && e());
                        }),
                        (this._handlePlacementChange = (e) => {
                            this._emitter && !this._isPlayerFullscreen && this._emitter.signalPlacementChange(e), this._playerInternal && !this._isPlayerFullscreen && this._playerInternal.updatePosition(e.getPositionData());
                        }),
                        (this._handlePageVisibilityChange = (e, t) => {
                            const i = t.getPositionData();
                            "hidden" === e && this._playerInternal ? this._playerInternal.updatePosition({ percentVisible: 0, percentOfViewportOccupied: 0, sizesInfo: i.sizesInfo }) : "visible" === e && this._playerInternal && this._playerInternal.updatePosition(i);
                        }),
                        (this._handlePlaybackComplete = (e) => {
                            const { onPlaybackComplete: t } = this.props;
                            this._emitter && !1 !== e?.tracksFinished && this._emitter.signalPlaybackFinish(e?.shouldLoop), t && t();
                        }),
                        (this._handlePlaybackStarted = () => {
                            this._emitter && this._emitter.signalPlay(), this.props.onPlaybackStarted && this.props.onPlaybackStarted();
                        }),
                        (this._handlePlaybackPaused = () => {
                            this._emitter && this._emitter.signalPause();
                        }),
                        (this._handlePlayerState = (e) => {
                            const { onPlayerState: t, onProgressChange: i } = this.props;
                            t && t(e);
                            const r = (e.tracks || []).find((t) => t.id === e.currentTrackId);
                            if (r) {
                                const t = (r.currentTimeMs || 0) / r.durationMs;
                                i && i(t, e.tracksFinished);
                            }
                        }),
                        (this._handleError = (e) => {
                            const { onError: t } = this.props,
                                { error: i } = e;
                            i ? (this._emitter && (this._emitter.unregister(), (this._emitter = void 0), (this._hasInitialPlacementMeasurement = !1), (this._lastPlayerError = i)), e.errorInfo && !e.errorInfo.canRetry && (t && t(), this._onErrorUnsubscribe && this._onErrorUnsubscribe())) : !this._emitter && this._lastPlayerError && (this._registerPlaybackCoordination(), this._submitInitialPlacement(), (this._lastPlayerError = void 0));
                        }),
                        (this._handleFullscreenChange = (e) => {
                            const { viewport: t } = this.props;
                            if (((this._isPlayerFullscreen = e.isPlayerFullscreen), t)) {
                                if ((t.temporarilySuppressScrollListeners(2e3), f.ZP.isChrome() || f.ZP.isSafari()))
                                    if (this._isPlayerFullscreen) this._savedScrollPosition = { y: t.scrollY(), x: t.scrollX() };
                                    else if (this._savedScrollPosition) {
                                        const { x: e, y: i } = this._savedScrollPosition;
                                        (this._savedScrollPosition = void 0), t.scrollTo(e, i);
                                    }
                                this._isPlayerFullscreen && this._playerInternal ? this._playerInternal.updatePosition({ percentVisible: 1, percentOfViewportOccupied: 1, sizesInfo: { viewportSize: t.getRect2D(), mediaSize: t.getRect2D() } }) : !this._isPlayerFullscreen && this._placementRef && this._placementRef.sample(this._handlePlacementChange);
                            }
                            const { onFullscreenChange: i } = this.props;
                            i && i(e), this._emitter && this._emitter.signalFullscreenChange(e.isPlayerFullscreen);
                        }),
                        (this._registerPlaybackCoordination = () => {
                            const { history: e } = this.context,
                                { autoplayGroupOptions: t, playbackCoordination: i, playbackPriority: r, registerDockElement: a, updateDockedVideo: o, updateIsUserPaused: n, viewport: s } = this.props,
                                l = { autoplayGroupOptions: t, onAutoPlayRequest: this._handleAutoPlayRequest, id: e.id, onPauseRequest: this._handlePauseRequest, canAutoplay: this._shouldAutoplay, isLooping: this._isLooping, registerDockElement: a, updateDockedVideo: o, updateIsUserPaused: n, playbackPriority: r, viewport: s };
                            i && (this._emitter = i.register(l));
                        }),
                        (this._setPlayerInternal = (e) => {
                            if (((this._playerInternal = e), e)) {
                                const { onPlayerState: t, onProgressChange: i } = this.props;
                                (t || i) && e.subscribe(this._handlePlayerState), (this._onErrorUnsubscribe = e.subscribe(this._handleError)), e.on("playbackComplete", this._handlePlaybackComplete), e.on("play", this._handlePlaybackStarted), e.on("pause", this._handlePlaybackPaused), this._registerPlaybackCoordination(), this._submitInitialPlacement();
                            }
                            if (this.props.setPlayer) {
                                const e = this._playerInternal && {
                                    play: () => {
                                        this._playerInternal && this._playerInternal.play();
                                    },
                                    playPreview: () => {
                                        this._playerInternal && this._playerInternal.playPreview();
                                    },
                                    pause: () => {
                                        this._playerInternal && this._playerInternal.pause();
                                    },
                                    replay: () => {
                                        this._playerInternal && this._playerInternal.replay();
                                    },
                                };
                                this.props.setPlayer(e);
                            }
                        }),
                        (this._setPlacementAPI = (e) => {
                            e && this.props.onSetPlacementRef?.(e), (this._placementRef = e), this._submitInitialPlacement();
                        }),
                        (this._getTweetId = () => {
                            const {
                                source: { videoId: e },
                            } = this.props;
                            if (e) {
                                if ("tweet" === e.type) return e.id;
                                if ("broadcast" === e.type) return e.tweetId;
                            }
                        }),
                        (this._tweetAdProvider = (e) => {
                            const { disablePreroll: t } = this.props,
                                i = this._getTweetId();
                            if (i) return () => (t ? {} : this.props.tweetAdProvider(i, e));
                        });
                    const { autoplay: i, disableAutoplay: o, forwardPivotInfo: n } = e,
                        { history: s } = t;
                    (this._disableHls = !(f.ZP.isDesktopOS() || (f.ZP.isAndroid() && this.context.featureSwitches.isTrue("web_video_hls_android_mse_enabled")))), (this._shouldAutoplay = !(0, g.HD)(s) && !o && (0, C.Z)(i, n));
                }
                componentDidUpdate(e) {
                    const { heightsReady: t, playbackPriority: i } = this.props;
                    !e.heightsReady && t && this._submitInitialPlacement(), !(0, m.Z)(e.source, this.props.source) && this._emitter && this._emitter.reset(), e.playbackPriority !== i && void 0 !== i && this._emitter && this._emitter.signalPlaybackPriorityChange(i, this._shouldAutoplay);
                }
                render() {
                    const { aspectRatio: e, isDockedVideo: t, poster: i } = this.props,
                        r = e,
                        o = D.aspectRatio;
                    return a.createElement(h.Z, { ratio: r, style: o }, a.createElement(R.Z, { onChange: this._handlePlacementChange, onPageVisibilityChange: this._handlePageVisibilityChange, ref: this._setPlacementAPI, style: _.default.absoluteFill }, this._renderPlayer()));
                }
                componentWillUnmount() {
                    this._emitter && (this._emitter.unregister(), (this._emitter = null)), this._onErrorUnsubscribe && this._onErrorUnsubscribe();
                }
                _renderPlayer() {
                    const {
                            autoplayGroupOptions: e,
                            dataSaverMode: t,
                            durationMs: i,
                            forceLoop: r,
                            maxLoopCount: o,
                            poster: n,
                            promotedContent: s,
                            source: { variants: l },
                            videoType: c,
                        } = this.props,
                        d = "animated_gif" === c,
                        p = "vine" === c,
                        u = l && l.length ? (d ? "gif" : "media_entity") : "vmap";
                    this._isLooping = !!(r || d || p || (i && i <= this._getLoopingThreshold()));
                    const h = { contentType: u, loop: this._isLooping, maxLoopCount: this._isLooping ? o : void 0, maxLoopingThresholdSec: e ? 6 : void 0, poster: n && n.url, promotedContext: s && (s.impression_id || s.disclosure_type) ? { impressionId: s.impression_id, disclosureType: s.disclosure_type } : void 0, shouldCapBitrate: t, variants: l ? (0, E.rD)(l) : [] };
                    return a.createElement(S, { testID: L }, this._renderHorizonPlayer(h));
                }
                _submitInitialPlacement() {
                    const { heightsReady: e } = this.props,
                        t = e && !this._hasInitialPlacementMeasurement;
                    this._emitter && this._placementRef && t && (this._placementRef.sample(this._handlePlacementChange), (this._hasInitialPlacementMeasurement = !0));
                }
            }
            (O.contextType = P.rC), (O.defaultProps = { autoplay: A.Z.Off, playbackCoordination: k.Tc, playbackPriority: l.W.NORMAL, showControls: !0, dataSaverMode: !1, geolocationPrompt: !0, heightsReady: !0, noAuthHttpClient: N, includeBroadcastEventAssociation: !1 });
            const D = _.default.create({ aspectRatio: { zIndex: void 0 }, aspectRatioDocked: { zIndex: void 0, maxHeight: "70vh" } }),
                M = (0, v.Z)(O);
            var x = i(555492),
                F = i(513588),
                U = i(942893),
                V = i(625555),
                Z = i(71620),
                G = i(668214),
                q = i(558369),
                H = i(109223),
                B = i(694180),
                z = i(390387),
                Y = i(659773),
                W = i(836255),
                j = i(533128);
            const $ =
                    () =>
                    (e, t, { api: i }) =>
                        i.getHttpClient(),
                Q = (e, t) => {
                    const i = t.source && t.source.videoId;
                    return i && "tweet" === i.type ? i.id : void 0;
                },
                X = (e, t) => t.source && t.source.contentId,
                J = (e, t) => {
                    const i = W.Z.createHydratedTweetSelector(Q)(e, t),
                        r = (0, q.mz)(e);
                    return !!i && (0, j.$y)(r, i, j.d.Autoplay);
                },
                K = (0, G.Z)()
                    .propsFromState(() => ({ dataSaverMode: Y.IX, language: z.VT, sourceTweet: W.Z.createHydratedTweetSelector(Q), disableAutoplay: J, videoContentId: X }))
                    .adjustStateProps(({ dataSaverMode: e, disableAutoplay: t, language: i, sourceTweet: r, videoContentId: a }) => ({ dataSaverMode: e, disableAutoplay: t, language: i, mediaAvailability: (r && (0, E.DY)(r, a)) || void 0, publisherId: r ? (0, E.Pz)(r) : void 0 }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, Z.zr)("INLINE_PLAYER_CONTAINER"), getTwitterAuthedHttpClient: $, logPromotedVideoEvent: B.iY, tweetAdProvider: H.Q3 }))
                    .withAnalytics(),
                ee = (0, o.cn)((e) =>
                    e(V.F6)
                        .login()
                        .catch(() => {}),
                ),
                te = (0, F.J)();
            function ie(e) {
                const t = a.useContext(P.rC),
                    i = a.useRef(),
                    o = "broadcast" === e.source.videoId.type && !!t.viewerUserId && t.featureSwitches.isTrue("rweb_video_logged_in_analytics_enabled");
                (0, n.Dv)(o ? ee : te);
                const { createLocalApiErrorHandler: u, getTwitterAuthedHttpClient: h, playbackPriority: _, tweetAdProvider: y, ...m } = e,
                    f = (t) => {
                        const { createLocalApiErrorHandler: i } = e;
                        e.logPromotedVideoEvent(t).catch(i());
                    },
                    g = (t) => {
                        const { category: i, data: r, namespace: a } = t,
                            { analytics: o } = e;
                        a?.action && o.scribe({ ...a, data: { ...r, _category_: i } });
                    },
                    b = a.useMemo(() => h(), [h]),
                    v = ((i) => {
                        const r = { log: g },
                            { analytics: a } = e,
                            n = { log: t.featureSwitches.isTrue("responsive_web_video_promoted_logging_enabled") ? f : c.Z },
                            s = a.contextualScribeNamespace,
                            l = a.contextualScribeData,
                            u = Array.isArray(l.items)
                                ? ((t) => {
                                      const {
                                              analytics: i,
                                              includeBroadcastEventAssociation: r,
                                              source: { videoId: a },
                                          } = e,
                                          { event_id: o } = i.contextualScribeData;
                                      let n;
                                      n = "broadcast" === a.type && a.tweetId ? a.tweetId : "broadcast" === a.type && r && o ? o : a.id;
                                      let s = t.find((e) => e.id === n);
                                      const l = t.find((e) => e.quoted_tweet_id === n);
                                      return l && l.quoted_tweet_id && ((s = U.Z.forQuoteTweet(l.id ? l.id : n, l.quoted_tweet_id)), (s.author_id = l.quoted_author_id)), s;
                                  })(l.items)
                                : void 0,
                            h = { scribeContext: { ...s }, baseScribeItem: u, enableShortFormCompleteLogging: t.featureSwitches.isTrue("responsive_web_video_pcomplete_enabled"), ...(o && { periscopeAuthToken: p.E.authToken(), userType: p.E.userType() }) };
                        return new d.Z(r, n, i, h);
                    })(b),
                    I = (t) => {
                        if (((i.current = t), e.setPlayer)) {
                            const t = i &&
                                i.current && {
                                    play: () => {
                                        i.current && i.current.play();
                                    },
                                    playPreview: () => {
                                        i.current && i.current.playPreview();
                                    },
                                    pause: () => {
                                        i.current && i.current.pause();
                                    },
                                    replay: () => {
                                        i.current && i.current.replay();
                                    },
                                };
                            e.setPlayer(t);
                        }
                    };
                return a.createElement(x.Z.Consumer, null, ({ heightsReady: e }) => a.createElement(s.Z.Consumer, null, ({ playbackPriority: t }) => a.createElement(M, (0, r.Z)({}, m, { analytics: v, heightsReady: e, playbackPriority: t === l.W.INELIGIBLE ? t : _, setPlayer: I, tweetAdProvider: y, twitterAuthedHttpClient: b }))));
            }
            const re = K(ie);
        },
        931162: (e, t, i) => {
            i.d(t, { D: () => o, R: () => a });
            var r = i(202784);
            const a = r.createContext({ prerollDisplayLocation: void 0 }),
                o = ({ children: e, prerollDisplayLocation: t }) => {
                    const i = r.useMemo(() => ({ prerollDisplayLocation: t }), [t]);
                    return r.createElement(a.Provider, { value: i }, e);
                };
        },
        408686: (e, t, i) => {
            i.d(t, { Qr: () => n, n8: () => o });
            var r = i(803224),
                a = i(411240);
            const o = (e) => {
                    const t = e?.[0]?.placement?.scrollY();
                    return 0 === t ? (0, a.Z)(e, (e) => (e.placement ? e.placement.distanceToTop() : Number.MAX_VALUE)) : (0, a.Z)(e, (e) => (e.placement ? e.placement.distanceToCenter() : Number.MAX_VALUE));
                },
                n = (e) => {
                    const t = e.filter((e) => e.playbackPriority === r.W.DOCKABLE);
                    return t.length ? t[0] : o(e);
                };
        },
        519896: (e, t, i) => {
            i.d(t, { A7: () => a, Nw: () => o, Yf: () => r });
            const r = "instreamVideo",
                a = `rweb/${r}`,
                o = Object.freeze({ TIMELINE_HOME: "TIMELINE_HOME", SEARCH_TWEETS: "SEARCH_TWEETS", PROFILE_TWEETS: "PROFILE_TWEETS", OTHER: "OTHER" });
        },
        109223: (e, t, i) => {
            i.d(t, { jc: () => C, Q3: () => k, C: () => S });
            i(571372), i(136728);
            var r = i(329491),
                a = i(962741),
                o = i(499627),
                n = i(312771),
                s = i(836255),
                l = i(519896),
                c = i(782261),
                d = i(276563);
            function p(e) {
                if (null == e) return null;
                const t = (function (e) {
                        const { card: t, extended_entities: i = {} } = e,
                            r =
                                !!i.media?.length &&
                                i.media.some((e) => {
                                    const t = e.additional_media_info;
                                    return t && t.monetizable;
                                }),
                            a = c.Z.hasMixedMedia(e);
                        return { hasMonetizableMedia: r, hasMultipleMediaItems: a, hasAmplifyCard: !!t && t.name === d.default.CardNames.AMPLIFY && !0 === d.default.getBindingValue(t.binding_values, "dynamic_ads"), hasPeriscopeCard: t?.name === d.default.CardNames.PERISCOPE_BROADCAST, hasBroadcastCard: t?.name === d.default.CardNames.BROADCAST, hasEventCard: !!t && t.name === d.default.CardNames.LIVE_EVENT && ("video" === d.default.getBindingValue(t.binding_values, "media_type") || "broadcast" === d.default.getBindingValue(t.binding_values, "media_type")) };
                    })(e),
                    i = (r = t).hasMonetizableMedia || r.hasAmplifyCard || r.hasPeriscopeCard || r.hasBroadcastCard || r.hasEventCard;
                var r;
                const a =
                        i &&
                        (function (e) {
                            const t = e.hasAmplifyCard || e.hasPeriscopeCard || e.hasBroadcastCard || e.hasEventCard;
                            return e.hasMonetizableMedia && !t;
                        })(t),
                    { hasMultipleMediaItems: o } = t;
                return { hasMultipleMediaItems: o, legacy: i, redesign: a };
            }
            var u = i(516951),
                h = i(541837),
                _ = i(615656),
                y = i(71620),
                m = i(917799);
            const f = "FETCH_PREROLLS",
                g = (0, m.dg)(l.A7, f),
                P = 10;
            function b(e) {
                const t = {},
                    i = {};
                return (
                    Array.isArray(e.video_analytics_scribe) &&
                        e.video_analytics_scribe.length &&
                        e.video_analytics_scribe.forEach((e) => {
                            t[e.tweet_id] = e.video_analytics_scribe_passthrough;
                        }),
                    Array.isArray(e.prerolls) &&
                        e.prerolls.length &&
                        e.prerolls.forEach((e) => {
                            e.media_info && (i[e.tweet_id] = { ...e, videoAnalyticsScribePassthrough: t[e.tweet_id] });
                        }),
                    i
                );
            }
            function v(e, t, i, r, a) {
                if (!Array.isArray(e) || 0 === e.length) return Promise.resolve();
                let o = [];
                const n = [o];
                return (
                    e.forEach((e) => {
                        o.length === P && ((o = []), n.push(o)), o.push(e);
                    }),
                    Promise.all(
                        n.map((e) =>
                            (function (e, t, i, r, a) {
                                if (!Array.isArray(e) || 0 === e.length) return Promise.resolve();
                                const o = { eligibleTweets: e, prerollDisplayLocation: a };
                                t && (o.trigger_preroll = t);
                                const n = (0, m._O)(i, { request: r.withEndpoint(h.Z).fetch, params: o }),
                                    s = i((0, y.zr)(f)({ showToast: !1, [_.ZP.AccessDeniedByBouncer]: { customAction: u.Z } }));
                                return n({ actionTypes: g, context: "FETCH_PREROLLS" }).catch(s);
                            })(e, t, i, r, a),
                        ),
                    ).then((e) => {
                        let t = {};
                        e.forEach((e) => {
                            e && e.prerolls && (t = { ...t, ...b(e) });
                        });
                        const r = { type: C, payload: { ...{ dynamicIVCollection: t }, prerollDisplayLocation: a } };
                        i(r);
                    })
                );
            }
            const I = { fetchStatus: n.ZP.NONE, eligibleTweets: [], promotedMetadataCollection: {}, prerollMetadataCollection: {}, dynamicIVCollection: {}, prerollEligibilityCollection: {} },
                E = "rweb/instreamVideo/DYNAMIC_RESET",
                A = "rweb/instreamVideo/STORE_METADATA",
                C = "rweb/instreamVideo/DYNAMIC_STORE",
                T = { [l.Nw.OTHER]: I };
            o.Z.register({
                [l.Yf]: function (e = T, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case A:
                            if (t.payload) {
                                const { eligibleTweets: i, prerollDisplayLocation: r, prerollEligibilityCollection: a, prerollMetadataCollection: o, promotedMetadataCollection: n } = t.payload;
                                return { ...e, [r]: { ...I, ...e[r], eligibleTweets: i, prerollMetadataCollection: o, promotedMetadataCollection: n, prerollEligibilityCollection: a } };
                            }
                            break;
                        case C:
                            if (t.payload) {
                                const { dynamicIVCollection: i, prerollDisplayLocation: r } = t.payload;
                                return { ...e, [r]: { ...I, ...e[r], dynamicIVCollection: i } };
                            }
                            break;
                        case E:
                            if (t.payload) {
                                const { prerollDisplayLocation: i } = t.payload;
                                return { ...e, [i]: { ...I, ...e[i], dynamicIVCollection: {} } };
                            }
                            break;
                        default:
                            return e;
                    }
                    return e;
                },
            });
            const w = (e, t) => e[l.Yf][t] || I;
            function S(e, t = l.Nw.OTHER) {
                return (i, r, { api: o, featureSwitches: n }) => {
                    if (!Array.isArray(e)) throw new Error("unable to fetch prerolls without timeline entries");
                    if (e.length < 1) return Promise.resolve();
                    const l = r(),
                        c = [],
                        d = {},
                        u = {},
                        h = {};
                    e.forEach((e) => {
                        if (!e.content || e.type !== a.ZP.Tweet) return;
                        const t = e.content,
                            i = s.Z.selectHydrated(l, t.id);
                        if (!i) return;
                        const r = i,
                            { prerollMetadata: o, promotedMetadata: n } = t;
                        if (n) {
                            const { adMetadataContainer: e, disclosureType: t, impressionId: i } = n;
                            (r.promoted_content = { adMetadataContainer: e, disclosure_type: t, impression_id: i }), (u[r.id_str] = n);
                        }
                        const _ = p(r),
                            y = _ && _.hasMultipleMediaItems;
                        (h[r.id_str] = _), o?.preroll?.mediaInfo && !y && (d[r.id_str] = o), _?.legacy && !y && c.push(r);
                    });
                    i({ type: A, payload: { ...{ eligibleTweets: c, prerollMetadataCollection: d, promotedMetadataCollection: u, prerollEligibilityCollection: h, prerollDisplayLocation: t } } });
                    return v(
                        c.filter((e) => void 0 === d[e.id_str]),
                        null,
                        i,
                        o,
                        t,
                    );
                };
            }
            function k(e, t = l.Nw.OTHER) {
                return (i, a, { api: o, featureSwitches: n }) => {
                    if (e) {
                        const n = w(a(), t),
                            { dynamicIVCollection: s, eligibleTweets: l, prerollEligibilityCollection: c, prerollMetadataCollection: d, promotedMetadataCollection: p } = n,
                            u = s[e],
                            h = p[e],
                            _ = c[e];
                        if (u) {
                            i({ type: E, payload: { prerollDisplayLocation: t } });
                            const { dynamic_preroll_type: e, preroll_id: a } = u;
                            return (
                                v(l, { preroll_id: a, dynamic_preroll_type: e }, i, o, t),
                                (function (e, t, i, a) {
                                    const o = { adId: t.preroll_id, advertiserName: null, advertiserProfileImageUrl: null, mediaInfo: { call_to_action: null, duration_millis: t.media_info.duration_millis, publisher_id_str: t.media_info.publisher_id_str, variants: t.media_info.variants }, promotedContent: { impressionId: void 0, disclosureType: void 0 }, videoAnalyticsScribePassthrough: t.videoAnalyticsScribePassthrough };
                                    if ((t.promoted_content && !i && ((o.promotedContent.impressionId = t.promoted_content.impression_id), (o.promotedContent.disclosureType = t.promoted_content.disclosure_type)), t.media_info.call_to_action)) {
                                        const { type: e, url: a } = t.media_info.call_to_action,
                                            n = (0, r.b)(a, i?.clickTrackingInfo),
                                            s = i?.clickTrackingInfo ? { original_url: a, embedded_url: n, click_tracking_info: i.clickTrackingInfo, embed_status: (0, r.R)(a, i.clickTrackingInfo) } : void 0;
                                        o.mediaInfo.call_to_action = { type: e, url: n, click_tracking_embed_details: s };
                                    }
                                    if (t.media_info.render_ad_by_advertiser_name) {
                                        const { advertiser_name: e, advertiser_profile_image_url: i } = t.media_info;
                                        (o.advertiserName = e), (o.advertiserProfileImageUrl = i);
                                    }
                                    if (a?.redesign) {
                                        (o.shouldAutoAdvance = !1), (o.useRedesignedPrerollUx = !0);
                                        const { advertiser_name: e, advertiser_profile_image_url: i } = t.media_info;
                                        (o.advertiserName = e), (o.advertiserProfileImageUrl = i);
                                    }
                                    return o;
                                })(0, u, h, _)
                            );
                        }
                        const y = d[e];
                        if (y) {
                            const e = (function (e, t, i, a) {
                                if (!t.preroll || !t.preroll.mediaInfo) return null;
                                const { mediaInfo: o, prerollId: n } = t.preroll,
                                    s = o.videoVariants.map((e) => ({ url: e.url, content_type: e.contentType, bitrate: e.bitrate })),
                                    l = { adId: n, advertiserName: null, advertiserProfileImageUrl: null, mediaInfo: { call_to_action: void 0, duration_millis: o.durationMillis, publisher_id_str: o.publisherId, variants: s }, promotedContent: { impressionId: void 0, disclosureType: void 0 } };
                                if (o.callToAction) {
                                    const { type: e, url: t } = o.callToAction,
                                        a = (0, r.b)(t, i?.clickTrackingInfo),
                                        n = i?.clickTrackingInfo ? { original_url: t, embedded_url: a, click_tracking_info: i.clickTrackingInfo, embed_status: (0, r.R)(t, i.clickTrackingInfo) } : void 0;
                                    l.mediaInfo.call_to_action = { type: e, url: a, click_tracking_embed_details: n };
                                }
                                if (o.renderAdByAdvertiserName) {
                                    const { advertiserName: e, advertiserProfileImageUrl: t } = o;
                                    (l.advertiserName = e), (l.advertiserProfileImageUrl = t);
                                }
                                if (a?.redesign) {
                                    (l.shouldAutoAdvance = !1), (l.useRedesignedPrerollUx = !0);
                                    const { advertiserName: e, advertiserProfileImageUrl: t } = o;
                                    (l.advertiserName = e), (l.advertiserProfileImageUrl = t);
                                }
                                return l;
                            })(0, y, h, _);
                            if (e) return e;
                        }
                    }
                    return {};
                };
            }
        },
        694180: (e, t, i) => {
            i.d(t, { cM: () => m, dS: () => y, iY: () => f });
            var r = i(370751),
                a = i(399896),
                o = i(663550),
                n = i(499627),
                s = i(917799);
            const l = {},
                c = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                d = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                p = (0, r.Z)([o.dx.IMPRESSION, o.dx.DWELL]),
                u = (0, r.Z)([o.AJ.TREND_VIEW, o.AJ.SPOTLIGHT_IMPRESSION]),
                h = (e) => ({ payload: { eventKey: e }, type: d });
            const _ = (e, t) => !!e.promotedContent[t],
                y =
                    (e) =>
                    (t, i, { api: r }) => {
                        const { event: o, impression_id: n, promoted_trend_id: l } = e,
                            d = `trend-${l}-${o}`;
                        if (u.has(o) && _(i(), d)) return Promise.resolve();
                        const p = { promoted_trend_id: l, event: o, impression_id: n };
                        return (0, s._O)(t, { params: p, request: r.withEndpoint(a.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: p }, (e, t) => {
                            if (!t && u.has(o)) return [h(d)];
                        });
                    },
                m =
                    ({ disclosureType: e, itemId: t, itemType: i, params: r }) =>
                    (o, n, { api: l }) => {
                        const { event: d, impression_id: u } = r,
                            y = `${i}-${t ?? "undefined"}-${u ?? "undefined"}-${d ?? "undefined"}`;
                        if (p.has(d) && _(n(), y)) return Promise.resolve();
                        const m = e && "earned" === e.toLowerCase() ? "1" : null,
                            f = { ...r, earned: m, epoch_ms: Date.now() };
                        return (0, s._O)(o, { params: f, request: l.withEndpoint(a.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: f }, (e, t) => {
                            if (!t && p.has(d)) return [h(y)];
                        });
                    },
                f =
                    (e) =>
                    (t, i, { api: r }) =>
                        (0, s._O)(t, { params: e, request: r.withEndpoint(a.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            n.Z.register({
                promotedContent: function (e = l, t) {
                    if (!t) return e;
                    if (t.type === d) {
                        if (!t.payload) return e;
                        const { eventKey: i } = t.payload;
                        return { ...e, [i]: !0 };
                    }
                    return e;
                },
            });
        },
        420412: (e, t, i) => {
            i.d(t, { Z: () => l });
            var r = i(202784),
                a = i(325686),
                o = i(235902),
                n = i(885015),
                s = i(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: i }) {
                const { isWebRedesign: l } = o.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return i ? r.createElement(n.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(a.Z, { style: c.gapColumn }, r.createElement(a.Z, { style: [c.gap, d] })), r.createElement(a.Z, { style: c.gapText }, i), r.createElement(a.Z, { style: c.gapColumn }, r.createElement(a.Z, { style: [c.gap, d] }))) : r.createElement(a.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, i) => {
            i.d(t, { Z: () => c });
            var r = i(807896),
                a = i(202784),
                o = i(325686),
                n = i(392237);
            class s extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: i, ...n } = this.props,
                        s = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, l.column, i && l.withGutterColumn] }));
                    return a.createElement(o.Z, (0, r.Z)({ style: [t, l.root, i && l.withGutter] }, n), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const l = n.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
        },
        98440: (e, t, i) => {
            i.r(t), i.d(t, { default: () => l });
            var r = i(202784),
                a = i(890601),
                o = i(783427),
                n = i(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        411240: (e, t, i) => {
            i.d(t, { Z: () => r });
            const r = (e, t) => {
                if (0 === e.length) return;
                let i = e[0],
                    r = t(i);
                for (let a = 1; a < e.length; a++) {
                    const o = e[a],
                        n = t(o);
                    n < r && ((i = o), (r = n));
                }
                return i;
            };
        },
        662678: (e, t, i) => {
            i.d(t, { G: () => a, Z: () => r });
            i(136728);
            const r = function (e, t) {
                return a(e, t);
            };
            function a(e, t) {
                return e.reduce(
                    (i, r, a) => {
                        const o = t ? t(r, a, e) : !!r;
                        return o && i[0].push(r), !o && i[1].push(r), i;
                    },
                    [[], []],
                );
            }
        },
        689996: (e, t, i) => {
            var r = i(497636),
                a = i(265968),
                o = i(409337),
                n = i(492991),
                s = i(639646),
                l = i(387501),
                c = a([].push),
                d = function (e) {
                    var t = 1 === e,
                        i = 2 === e,
                        a = 3 === e,
                        d = 4 === e,
                        p = 6 === e,
                        u = 7 === e,
                        h = 5 === e || p;
                    return function (_, y, m, f) {
                        for (var g, P, b = n(_), v = o(b), I = r(y, m), E = s(v), A = 0, C = f || l, T = t ? C(_, E) : i || u ? C(_, 0) : void 0; E > A; A++)
                            if ((h || A in v) && ((P = I((g = v[A]), A, b)), e))
                                if (t) T[A] = P;
                                else if (P)
                                    switch (e) {
                                        case 3:
                                            return !0;
                                        case 5:
                                            return g;
                                        case 6:
                                            return A;
                                        case 2:
                                            c(T, g);
                                    }
                                else
                                    switch (e) {
                                        case 4:
                                            return !1;
                                        case 7:
                                            c(T, g);
                                    }
                        return p ? -1 : a || d ? d : T;
                    };
                };
            e.exports = { forEach: d(0), map: d(1), filter: d(2), some: d(3), every: d(4), find: d(5), findIndex: d(6), filterReject: d(7) };
        },
        331460: (e, t, i) => {
            var r = i(824229),
                a = i(670095),
                o = i(406358),
                n = a("species");
            e.exports = function (e) {
                return (
                    o >= 51 ||
                    !r(function () {
                        var t = [];
                        return (
                            ((t.constructor = {})[n] = function () {
                                return { foo: 1 };
                            }),
                            1 !== t[e](Boolean).foo
                        );
                    })
                );
            };
        },
        696038: (e, t, i) => {
            var r = i(824229);
            e.exports = function (e, t) {
                var i = [][e];
                return (
                    !!i &&
                    r(function () {
                        i.call(
                            null,
                            t ||
                                function () {
                                    return 1;
                                },
                            1,
                        );
                    })
                );
            };
        },
        43143: (e, t, i) => {
            var r = i(277111),
                a = i(492991),
                o = i(409337),
                n = i(639646),
                s = TypeError,
                l = function (e) {
                    return function (t, i, l, c) {
                        r(i);
                        var d = a(t),
                            p = o(d),
                            u = n(d),
                            h = e ? u - 1 : 0,
                            _ = e ? -1 : 1;
                        if (l < 2)
                            for (;;) {
                                if (h in p) {
                                    (c = p[h]), (h += _);
                                    break;
                                }
                                if (((h += _), e ? h < 0 : u <= h)) throw new s("Reduce of empty array with no initial value");
                            }
                        for (; e ? h >= 0 : u > h; h += _) h in p && (c = i(c, p[h], h, d));
                        return c;
                    };
                };
            e.exports = { left: l(!1), right: l(!0) };
        },
        1909: (e, t, i) => {
            var r = i(265968);
            e.exports = r([].slice);
        },
        118760: (e, t, i) => {
            var r = i(33718),
                a = i(782359),
                o = i(685052),
                n = i(670095)("species"),
                s = Array;
            e.exports = function (e) {
                var t;
                return r(e) && ((t = e.constructor), ((a(t) && (t === s || r(t.prototype))) || (o(t) && null === (t = t[n]))) && (t = void 0)), void 0 === t ? s : t;
            };
        },
        387501: (e, t, i) => {
            var r = i(118760);
            e.exports = function (e, t) {
                return new (r(e))(0 === t ? 0 : t);
            };
        },
        128801: (e, t, i) => {
            var r = i(609859),
                a = i(427079);
            e.exports = "process" === a(r.process);
        },
        782359: (e, t, i) => {
            var r = i(265968),
                a = i(824229),
                o = i(26733),
                n = i(781589),
                s = i(431333),
                l = i(108511),
                c = function () {},
                d = [],
                p = s("Reflect", "construct"),
                u = /^\s*(?:class|function)\b/,
                h = r(u.exec),
                _ = !u.test(c),
                y = function (e) {
                    if (!o(e)) return !1;
                    try {
                        return p(c, d, e), !0;
                    } catch (e) {
                        return !1;
                    }
                },
                m = function (e) {
                    if (!o(e)) return !1;
                    switch (n(e)) {
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1;
                    }
                    try {
                        return _ || !!h(u, l(e));
                    } catch (e) {
                        return !0;
                    }
                };
            (m.sham = !0),
                (e.exports =
                    !p ||
                    a(function () {
                        var e;
                        return (
                            y(y.call) ||
                            !y(Object) ||
                            !y(function () {
                                e = !0;
                            }) ||
                            e
                        );
                    })
                        ? m
                        : y);
        },
        700047: (e, t, i) => {
            var r = i(807400),
                a = i(265968),
                o = i(720266),
                n = i(824229),
                s = i(765632),
                l = i(110894),
                c = i(119195),
                d = i(492991),
                p = i(409337),
                u = Object.assign,
                h = Object.defineProperty,
                _ = a([].concat);
            e.exports =
                !u ||
                n(function () {
                    if (
                        r &&
                        1 !==
                            u(
                                { b: 1 },
                                u(
                                    h({}, "a", {
                                        enumerable: !0,
                                        get: function () {
                                            h(this, "b", { value: 3, enumerable: !1 });
                                        },
                                    }),
                                    { b: 2 },
                                ),
                            ).b
                    )
                        return !0;
                    var e = {},
                        t = {},
                        i = Symbol("assign detection"),
                        a = "abcdefghijklmnopqrst";
                    return (
                        (e[i] = 7),
                        a.split("").forEach(function (e) {
                            t[e] = e;
                        }),
                        7 !== u({}, e)[i] || s(u({}, t)).join("") !== a
                    );
                })
                    ? function (e, t) {
                          for (var i = d(e), a = arguments.length, n = 1, u = l.f, h = c.f; a > n; ) for (var y, m = p(arguments[n++]), f = u ? _(s(m), u(m)) : s(m), g = f.length, P = 0; g > P; ) (y = f[P++]), (r && !o(h, m, y)) || (i[y] = m[y]);
                          return i;
                      }
                    : u;
        },
        849276: (e, t, i) => {
            var r = i(609859);
            e.exports = r;
        },
        730895: (e, t, i) => {
            var r = i(821176);
            e.exports = function () {
                var e = r(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
        1017: (e, t, i) => {
            var r = i(265968),
                a = i(558885),
                o = i(783326),
                n = i(841647),
                s = r("".replace),
                l = RegExp("^[" + n + "]+"),
                c = RegExp("(^|[^" + n + "])[" + n + "]+$"),
                d = function (e) {
                    return function (t) {
                        var i = o(a(t));
                        return 1 & e && (i = s(i, l, "")), 2 & e && (i = s(i, c, "$1")), i;
                    };
                };
            e.exports = { start: d(1), end: d(2), trim: d(3) };
        },
        890143: (e, t, i) => {
            var r = i(265968);
            e.exports = r((1).valueOf);
        },
        841647: (e) => {
            e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
        },
        543450: (e, t, i) => {
            var r = i(23103),
                a = i(689996).map;
            r(
                { target: "Array", proto: !0, forced: !i(331460)("map") },
                {
                    map: function (e) {
                        return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                },
            );
        },
        743108: (e, t, i) => {
            var r = i(23103),
                a = i(43143).left,
                o = i(696038),
                n = i(406358);
            r(
                { target: "Array", proto: !0, forced: (!i(128801) && n > 79 && n < 83) || !o("reduce") },
                {
                    reduce: function (e) {
                        var t = arguments.length;
                        return a(this, e, t, t > 1 ? arguments[1] : void 0);
                    },
                },
            );
        },
        332501: (e, t, i) => {
            var r = i(23103),
                a = i(33718),
                o = i(782359),
                n = i(685052),
                s = i(443231),
                l = i(639646),
                c = i(910905),
                d = i(462324),
                p = i(670095),
                u = i(331460),
                h = i(1909),
                _ = u("slice"),
                y = p("species"),
                m = Array,
                f = Math.max;
            r(
                { target: "Array", proto: !0, forced: !_ },
                {
                    slice: function (e, t) {
                        var i,
                            r,
                            p,
                            u = c(this),
                            _ = l(u),
                            g = s(e, _),
                            P = s(void 0 === t ? _ : t, _);
                        if (a(u) && ((i = u.constructor), ((o(i) && (i === m || a(i.prototype))) || (n(i) && null === (i = i[y]))) && (i = void 0), i === m || void 0 === i)) return h(u, g, P);
                        for (r = new (void 0 === i ? m : i)(f(P - g, 0)), p = 0; g < P; g++, p++) g in u && d(r, p, u[g]);
                        return (r.length = p), r;
                    },
                },
            );
        },
        271245: (e, t, i) => {
            var r = i(23103),
                a = i(124231),
                o = i(807400),
                n = i(609859),
                s = i(849276),
                l = i(265968),
                c = i(46541),
                d = i(198270),
                p = i(720835),
                u = i(291321),
                h = i(349395),
                _ = i(992066),
                y = i(824229),
                m = i(778151).f,
                f = i(997933).f,
                g = i(931787).f,
                P = i(890143),
                b = i(1017).trim,
                v = "Number",
                I = n[v],
                E = s[v],
                A = I.prototype,
                C = n.TypeError,
                T = l("".slice),
                w = l("".charCodeAt),
                S = function (e) {
                    var t,
                        i,
                        r,
                        a,
                        o,
                        n,
                        s,
                        l,
                        c = _(e, "number");
                    if (h(c)) throw new C("Cannot convert a Symbol value to a number");
                    if ("string" == typeof c && c.length > 2)
                        if (((c = b(c)), 43 === (t = w(c, 0)) || 45 === t)) {
                            if (88 === (i = w(c, 2)) || 120 === i) return NaN;
                        } else if (48 === t) {
                            switch (w(c, 1)) {
                                case 66:
                                case 98:
                                    (r = 2), (a = 49);
                                    break;
                                case 79:
                                case 111:
                                    (r = 8), (a = 55);
                                    break;
                                default:
                                    return +c;
                            }
                            for (n = (o = T(c, 2)).length, s = 0; s < n; s++) if ((l = w(o, s)) < 48 || l > a) return NaN;
                            return parseInt(o, r);
                        }
                    return +c;
                },
                k = c(v, !I(" 0o1") || !I("0b1") || I("+0x1")),
                R = function (e) {
                    var t,
                        i =
                            arguments.length < 1
                                ? 0
                                : I(
                                      (function (e) {
                                          var t = _(e, "number");
                                          return "bigint" == typeof t ? t : S(t);
                                      })(e),
                                  );
                    return u(A, (t = this)) &&
                        y(function () {
                            P(t);
                        })
                        ? p(Object(i), this, R)
                        : i;
                };
            (R.prototype = A), k && !a && (A.constructor = R), r({ global: !0, constructor: !0, wrap: !0, forced: k }, { Number: R });
            var L = function (e, t) {
                for (var i, r = o ? m(t) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), a = 0; r.length > a; a++) d(t, (i = r[a])) && !d(e, i) && g(e, i, f(t, i));
            };
            a && E && L(s[v], E), (k || a) && L(s[v], I);
        },
        43105: (e, t, i) => {
            var r = i(23103),
                a = i(700047);
            r({ target: "Object", stat: !0, arity: 2, forced: Object.assign !== a }, { assign: a });
        },
        334769: (e, t, i) => {
            var r = i(23103),
                a = i(492991),
                o = i(765632);
            r(
                {
                    target: "Object",
                    stat: !0,
                    forced: i(824229)(function () {
                        o(1);
                    }),
                },
                {
                    keys: function (e) {
                        return o(a(e));
                    },
                },
            );
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.InlinePlayer.8910cd3a.js.map

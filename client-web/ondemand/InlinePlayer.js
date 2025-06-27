"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.InlinePlayer", "loader.AudioDock", "loader.AudioContextVoiceMedia", "loader.AudioContextSpaceClip", "loader.AudioOnlyVideoPlayer"],
    {
        541837: (e, t, r) => {
            r.d(t, { Z: () => o });
            var i = r(276563);
            function a(e) {
                const t = { tweet_id: e.id_str },
                    r = e.promoted_content && e.promoted_content.impression_id;
                return r && (t.impression_id = r), e.card && e.card.name === i.default.CardNames.LIVE_EVENT && (t.live_event_id = i.default.getBindingValue(e.card.binding_values, "event_id")), t;
            }
            const o = ({ apiClient: e, featureSwitches: t }) => ({
                fetch: (t) => {
                    const r = { tweets: t.eligibleTweets.map(a) };
                    t.trigger_preroll && (r.trigger_preroll = t.trigger_preroll), t.prerollDisplayLocation && (r.display_location = t.prerollDisplayLocation);
                    const i = { tweets: JSON.stringify(r) };
                    return e.post("videoads/v2/prerolls", i, {}, {});
                },
            });
        },
        90890: (e, t, r) => {
            r.d(t, { Tc: () => l, yt: () => s });
            r(136728), r(202784);
            var i = r(803224),
                a = r(67877),
                o = r(2138);
            const n = { autoplayPrioritizationPolicy: r(408686).Qr, minimumVisibilityForAutoplay: 0.25 };
            class s {
                constructor(e = n) {
                    (this._players = []),
                        (this._setPlayerState = (e, t) => {
                            (e.previousPlaybackState = e.playbackState), (e.playbackState = t), this._updatePlayerStateForDocking(e, t);
                        }),
                        (this._updatePlayerStateForDocking = (e, t) => {
                            if (t === i.q.USER_PLAYING) {
                                const t = e.previousPlaybackState === i.q.USER_PAUSED;
                                if (this._updateDockedVideo && "function" == typeof e.registerDockElement && !t) {
                                    const t = e.registerDockElement();
                                    this._updateDockedVideo(t, e.id);
                                } else this._updateIsUserPaused && this._updateIsUserPaused(!1);
                            } else t === i.q.USER_PAUSED ? this._updateIsUserPaused && this._updateIsUserPaused(!0) : t === i.q.AUTO_PLAYING && this._updateIsUserPaused && this._updateIsUserPaused(!1);
                            this._updateInlinePlayerState && this._updateInlinePlayerState(this._players);
                        }),
                        (this._updatePlaybackStates = () => {
                            const e = this._players.find((e) => e.playbackState === i.q.USER_PLAYING && e.playbackPriority !== i.W.SPACE);
                            e && !this._canPlay(e) ? (this._pausePlayer(e), this._triggerAutoplay()) : e ? this._stopAllExcept(e) : this._triggerAutoplay();
                        }),
                        (this._scheduleUpdate = (0, o.Z)((0, a.Z)(this._updatePlaybackStates, window.requestIdleCallback ? (e) => window.requestIdleCallback(e, { timeout: 200 }) : window.requestAnimationFrame), 300, { leading: !1, trailing: !0 }));
                    const { autoplayPrioritizationPolicy: t, minimumVisibilityForAutoplay: r } = e;
                    (this._autoplayPrioritizationPolicy = t), (this._minimumVisibilityForAutoplay = r);
                }
                register({ autoplayGroupOptions: e, canAutoplay: t, id: r, onAutoPlayRequest: a, onFullscreenEntered: o, onFullscreenExited: n, onPauseRequest: s, isLooping: l, registerDockElement: c, updateDockedVideo: d, updateIsUserPaused: u, playbackPriority: p = i.W.NORMAL }) {
                    (this._updateDockedVideo = d), (this._updateIsUserPaused = u);
                    const h = { id: r, autoplayGroupEmitter: e?.autoplayGroupEmitter, placement: void 0, playbackPriority: p, playbackState: i.q.INITIAL, previousPlaybackState: i.q.INITIAL, commandHandlers: { onAutoPlayRequest: a, onFullscreenEntered: o, onFullscreenExited: n, onPauseRequest: s }, canAutoplay: t && p !== i.W.INELIGIBLE, isLooping: l, registerDockElement: c };
                    return e && e.autoplayGroupEmitter.registerAutoplayGroupPlayer(h, e.mediaIndex), this._players.push(h), { reset: () => this._handleReset(h), signalFullscreenChange: (e) => this._handleFullscreenChanged(e), signalPlacementChange: (e) => this._handlePlacementChange(h, e), signalPlay: () => this._handlePlay(h), signalPause: () => this._handlePause(h), signalPlaybackFinish: (e) => this._handlePlaybackFinished(h, e), signalPlaybackPriorityChange: (e, t) => this._handlePlaybackPriorityChange(h, e, t), unregister: () => this._handleUnregister(h) };
                }
                _handleFullscreenChanged(e) {
                    this._players.forEach((t) => {
                        const { onFullscreenEntered: r, onFullscreenExited: i } = t.commandHandlers;
                        e && r ? r() : !e && i && i();
                    });
                }
                _handlePlacementChange(e, t) {
                    const r = t.scrollY();
                    (e.placement = t), this._scrollY !== r && (this._scrollY = r), e.playbackState === i.q.FINISHED && 0 === t.visibleFraction() && this._setPlayerState(e, i.q.INITIAL), this._scheduleUpdate();
                }
                _handlePlay(e) {
                    e.playbackState !== i.q.AUTO_PLAYING && (e.previousPlaybackState === i.q.AUTO_PLAYING && e.isLooping ? this._setPlayerState(e, i.q.AUTO_PLAYING) : this._setPlayerState(e, i.q.USER_PLAYING)), this._stopAllExcept(e);
                }
                _handlePause(e) {
                    e.playbackState !== i.q.AUTO_PAUSED && this._setPlayerState(e, i.q.USER_PAUSED);
                }
                _handlePlaybackFinished(e, t = !1) {
                    this._setPlayerState(e, i.q.FINISHED), e.autoplayGroupEmitter && e.autoplayGroupEmitter.signalPlaybackComplete(t);
                }
                _handlePlaybackPriorityChange(e, t, r) {
                    (e.playbackPriority = t), (e.canAutoplay = r && t !== i.W.INELIGIBLE), this._scheduleUpdate();
                }
                _handleReset(e) {
                    this._setPlayerState(e, i.q.INITIAL), this._scheduleUpdate();
                }
                _handleUnregister(e) {
                    const t = this._players.indexOf(e);
                    t >= 0 && this._players.splice(t, 1), this._scheduleUpdate();
                }
                _triggerAutoplay() {
                    if (document.pictureInPictureElement) return;
                    const e = new WeakMap(),
                        t = this._players.filter((t) => {
                            const r = this._canAutoPlay(t);
                            return t.autoplayGroupEmitter ? r && this._canGroupAutoplay(t.autoplayGroupEmitter, e) : r;
                        }),
                        r = this._findBestAutoplayFit(t);
                    if (r) {
                        const { autoplayGroupEmitter: e } = r;
                        if (e) {
                            const t = e.signalGroupAutoplayRequest();
                            t && (this._stopAllExcept(t), this._autoPlayVideo(t));
                        } else this._stopAllExcept(r), this._autoPlayVideo(r);
                    } else
                        this._players.forEach((e) => {
                            e.playbackState === i.q.AUTO_PLAYING && this._pausePlayer(e);
                        });
                }
                _canGroupAutoplay(e, t) {
                    if (t.has(e)) return t.get(e);
                    const r = e.isAutoplayGroupEligibleForAutoplay();
                    return t.set(e, r), r;
                }
                _canAutoPlay(e) {
                    const t = !!e.placement && e.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        r = e.playbackState === i.q.USER_PAUSED,
                        a = e.playbackState === i.q.FINISHED;
                    return e.canAutoplay && t && !r && !a;
                }
                _canPlay(e) {
                    const t = !!e.placement && e.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        r = !!e.placement && e.placement.visibleFraction() > 0;
                    return e.playbackPriority !== i.W.INELIGIBLE && (!e.placement || r || t);
                }
                _stopAllExcept(e) {
                    this._players.forEach((t) => {
                        const r = t.playbackPriority !== i.W.SPACE;
                        t === e || !r || (t.playbackState !== i.q.USER_PLAYING && t.playbackState !== i.q.AUTO_PLAYING) || this._pausePlayer(t);
                    });
                }
                _pausePlayer(e) {
                    const { onPauseRequest: t } = e.commandHandlers;
                    this._setPlayerState(e, i.q.AUTO_PAUSED), t();
                }
                _autoPlayVideo(e) {
                    const { onAutoPlayRequest: t } = e.commandHandlers;
                    this._setPlayerState(e, i.q.AUTO_PLAYING), t();
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
        97837: (e, t, r) => {
            r.d(t, { Z: () => d });
            var i = r(202784),
                a = r(525744),
                o = r(859799),
                n = r(390686),
                s = r(393495);
            class l {
                constructor(e, t, r) {
                    (this.placement = e), (this.obstructions = t), (this.layerId = r);
                }
                getPositionData() {
                    return { percentVisible: this.visibleFraction(), percentOfViewportOccupied: this.placement.viewportOccupiedFraction(), sizesInfo: { viewportSize: this.placement.viewport, mediaSize: this.placement.item } };
                }
                visibleFraction() {
                    const e = this.placement.visiblePart();
                    if (!e) return 0;
                    const t = this.layerId ? this.obstructions.getObstructionAboveLayer(this.layerId, e) : this.obstructions.getTotalObstruction(e),
                        r = s.Z.area(this.placement.item),
                        i = (1 - t) * s.Z.area(e);
                    return r > 0 ? i / r : 0;
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
            class c extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePageVisibilityChange = () => {
                            if (this._placement) {
                                const { layerId: e, obstructionDetection: t, onPageVisibilityChange: r } = this.props,
                                    i = document.visibilityState,
                                    a = this._obstructions || t.getObstructions(),
                                    o = new l(this._placement, a, e);
                                r && r(i, o);
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
                    return i.createElement(n.ZP, { onPlacementChange: this._handlePlacementChange, ref: this._setPlacementRef, style: t, withScrollListener: !0 }, e);
                }
                componentDidMount() {
                    const { obstructionDetection: e } = this.props;
                    (this._obstructionSubscription = e.subscribe(this._handleObstructionChange)), document.addEventListener("visibilitychange", this._handlePageVisibilityChange);
                }
                componentWillUnmount() {
                    this._obstructionSubscription && (this._obstructionSubscription.unsubscribe(), (this._obstructionSubscription = void 0)), document.removeEventListener("visibilitychange", this._handlePageVisibilityChange);
                }
                _updateAndNotify({ obstructions: e, placement: t }, r) {
                    const { layerId: i, obstructionDetection: a } = this.props;
                    (this._placement = t || this._placement),
                        (this._obstructions = e || this._obstructions || a.getObstructions()),
                        this._placement
                            ? r(new l(this._placement, this._obstructions, i))
                            : this._placementRef &&
                              this._placementRef.sample((e) => {
                                  (this._placement = e), (this._obstructions = this._obstructions || a.getObstructions()), r(new l(e, this._obstructions, i));
                              });
                }
            }
            c.defaultProps = { obstructionDetection: a.Z };
            const d = (0, o.Z)(c);
        },
        555492: (e, t, r) => {
            r.d(t, { Z: () => i });
            const i = r(202784).createContext({ heightsReady: !0 });
        },
        408076: (e, t, r) => {
            r.r(t), r.d(t, { InlinePlayerContainer: () => re, default: () => ie });
            var i = r(807896),
                a = r(202784),
                o = r(565058),
                n = r(400752),
                s = r(421158),
                l = r(803224),
                c = r(516951),
                d = r(907187),
                u = r(741810),
                p = r(738584),
                h = r(682474),
                y = r(392237),
                _ = r(640290),
                m = r(908478),
                g = r(323265),
                f = r(791632),
                b = r(443781),
                P = r(931162),
                v = r(993547),
                I = r(329491),
                E = r(954300),
                C = r(870976),
                A = r(992720),
                T = r(325686);
            const S = (e) => {
                    e.stopPropagation();
                },
                w = ({ children: e, testID: t }) => a.createElement(T.Z, { onClick: S, style: y.default.absoluteFill, testID: t }, e);
            var k = r(90890),
                R = r(97837);
            const L = "videoPlayer",
                N = new _.ZP({});
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
                                    analytics: r,
                                    "aria-label": o,
                                    aspectRatio: n,
                                    displayOptions: s,
                                    durationMs: l,
                                    geolocationPrompt: c,
                                    includeBroadcastEventAssociation: d,
                                    intentToPlayTime: u,
                                    language: h,
                                    mediaAvailability: y,
                                    noAuthHttpClient: _,
                                    playerId: m,
                                    publisherId: g,
                                    source: { contentId: f, eventId: b, videoId: v, vmapUrl: I },
                                    timecode: E,
                                    twitterAuthedHttpClient: C,
                                    uiStack: A,
                                    videoEl: T,
                                    videoPlayer: S,
                                    viewCount: w,
                                    viewCountGraphData: k,
                                } = this.props,
                                R = this.context.featureSwitches.isTrue("rweb_video_pip_enabled"),
                                L = this.context.featureSwitches.isTrue("rweb_live_broadcast_rewind_enabled");
                            return a.createElement(P.R.Consumer, null, ({ prerollDisplayLocation: P }) => a.createElement(p.Z, (0, i.Z)({ adProvider: this._tweetAdProvider(P), additionalBadges: t, analytics: r, "aria-label": o, aspectRatio: n, basePlayerClass: S, configType: "static", contentId: f, cta: this._getPlayerCTA(), disableHls: this._disableHls, durationMs: l, enablePiP: R, enableVideoPlayerCaptionRendering: !0, eventId: b, featureProvider: this.context.featureSwitches, generateDrmTokenCallback: this.props.generateDrmTokenCallback, geolocationPrompt: c, httpClient: _, includeBroadcastEventAssociation: d, intentToPlayTime: u, language: h, liveBroadcastRewindEnabled: L, mediaAvailability: y, objectFitVideo: s && s.objectFitVideo, onApiReady: this._handleApiReady, playbackSessionId: v.id, playerId: m, precache: this._shouldAutoplay, publisherId: g, requestedTimecode: E, twitterAuthedHttpClient: C, videoEl: T, videoId: v, viewCount: w, viewCountGraphData: k, vmapUrl: I }, e), A));
                        }),
                        (this._setPlayerApi = (e) => {
                            const { customOverlay: t, onMuteChange: r, onSetPlayerApi: i } = this.props;
                            "function" == typeof t && ((this._playerInternal = e), this.forceUpdate()), r && (e.on("unmute", () => r({ isPlayerMuted: !1 })), e.on("mute", () => r({ isPlayerMuted: !0 }))), e && (e.on("fullscreenEntered", () => this._handleFullscreenChange({ isPlayerFullscreen: !0 })), e.on("fullscreenExited", () => this._handleFullscreenChange({ isPlayerFullscreen: !1 }))), this._setPlayerInternal(e), i && i(e);
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
                            const r = t.getPositionData();
                            "hidden" === e && this._playerInternal ? this._playerInternal.updatePosition({ percentVisible: 0, percentOfViewportOccupied: 0, sizesInfo: r.sizesInfo }) : "visible" === e && this._playerInternal && this._playerInternal.updatePosition(r);
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
                            const { onPlayerState: t, onProgressChange: r } = this.props;
                            t && t(e);
                            const i = (e.tracks || []).find((t) => t.id === e.currentTrackId);
                            if (i) {
                                const t = (i.currentTimeMs || 0) / i.durationMs;
                                r && r(t, e.tracksFinished);
                            }
                        }),
                        (this._handleError = (e) => {
                            const { onError: t } = this.props,
                                { error: r } = e;
                            r ? (this._emitter && (this._emitter.unregister(), (this._emitter = void 0), (this._hasInitialPlacementMeasurement = !1), (this._lastPlayerError = r)), e.errorInfo && !e.errorInfo.canRetry && (t && t(), this._onErrorUnsubscribe && this._onErrorUnsubscribe())) : !this._emitter && this._lastPlayerError && (this._registerPlaybackCoordination(), this._submitInitialPlacement(), (this._lastPlayerError = void 0));
                        }),
                        (this._handleFullscreenChange = (e) => {
                            const { viewport: t } = this.props;
                            if (((this._isPlayerFullscreen = e.isPlayerFullscreen), t)) {
                                if ((t.temporarilySuppressScrollListeners(2e3), g.ZP.isChrome() || g.ZP.isSafari()))
                                    if (this._isPlayerFullscreen) this._savedScrollPosition = { y: t.scrollY(), x: t.scrollX() };
                                    else if (this._savedScrollPosition) {
                                        const { x: e, y: r } = this._savedScrollPosition;
                                        (this._savedScrollPosition = void 0), t.scrollTo(e, r);
                                    }
                                this._isPlayerFullscreen && this._playerInternal ? this._playerInternal.updatePosition({ percentVisible: 1, percentOfViewportOccupied: 1, sizesInfo: { viewportSize: t.getRect2D(), mediaSize: t.getRect2D() } }) : !this._isPlayerFullscreen && this._placementRef && this._placementRef.sample(this._handlePlacementChange);
                            }
                            const { onFullscreenChange: r } = this.props;
                            r && r(e), this._emitter && this._emitter.signalFullscreenChange(e.isPlayerFullscreen);
                        }),
                        (this._registerPlaybackCoordination = () => {
                            const { history: e } = this.context,
                                { autoplayGroupOptions: t, playbackCoordination: r, playbackPriority: i, registerDockElement: a, updateDockedVideo: o, updateIsUserPaused: n, viewport: s } = this.props,
                                l = { autoplayGroupOptions: t, onAutoPlayRequest: this._handleAutoPlayRequest, id: e.id, onPauseRequest: this._handlePauseRequest, canAutoplay: this._shouldAutoplay, isLooping: this._isLooping, registerDockElement: a, updateDockedVideo: o, updateIsUserPaused: n, playbackPriority: i, viewport: s };
                            r && (this._emitter = r.register(l));
                        }),
                        (this._setPlayerInternal = (e) => {
                            if (((this._playerInternal = e), e)) {
                                const { onPlayerState: t, onProgressChange: r } = this.props;
                                (t || r) && e.subscribe(this._handlePlayerState), (this._onErrorUnsubscribe = e.subscribe(this._handleError)), e.on("playbackComplete", this._handlePlaybackComplete), e.on("play", this._handlePlaybackStarted), e.on("pause", this._handlePlaybackPaused), this._registerPlaybackCoordination(), this._submitInitialPlacement();
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
                                r = this._getTweetId();
                            if (r) return () => (t ? {} : this.props.tweetAdProvider(r, e));
                        });
                    const { autoplay: r, disableAutoplay: o, forwardPivotInfo: n } = e,
                        { history: s } = t;
                    (this._disableHls = !(g.ZP.isDesktopOS() || (g.ZP.isAndroid() && this.context.featureSwitches.isTrue("web_video_hls_android_mse_enabled")))), (this._shouldAutoplay = !(0, f.HD)(s) && !o && (0, A.Z)(r, n));
                }
                componentDidUpdate(e) {
                    const { heightsReady: t, playbackPriority: r } = this.props;
                    !e.heightsReady && t && this._submitInitialPlacement(), !(0, m.Z)(e.source, this.props.source) && this._emitter && this._emitter.reset(), e.playbackPriority !== r && void 0 !== r && this._emitter && this._emitter.signalPlaybackPriorityChange(r, this._shouldAutoplay);
                }
                render() {
                    const { aspectRatio: e, isDockedVideo: t, poster: r } = this.props,
                        i = e,
                        o = M.aspectRatio;
                    return a.createElement(h.Z, { ratio: i, style: o }, a.createElement(R.Z, { onChange: this._handlePlacementChange, onPageVisibilityChange: this._handlePageVisibilityChange, ref: this._setPlacementAPI, style: y.default.absoluteFill }, this._renderPlayer()));
                }
                componentWillUnmount() {
                    this._emitter && (this._emitter.unregister(), (this._emitter = null)), this._onErrorUnsubscribe && this._onErrorUnsubscribe();
                }
                _renderPlayer() {
                    const {
                            autoplayGroupOptions: e,
                            dataSaverMode: t,
                            durationMs: r,
                            forceLoop: i,
                            maxLoopCount: o,
                            poster: n,
                            promotedContent: s,
                            source: { variants: l },
                            videoType: c,
                        } = this.props,
                        d = "animated_gif" === c,
                        u = "vine" === c,
                        p = l && l.length ? (d ? "gif" : "media_entity") : "vmap";
                    this._isLooping = !!(i || d || u || (r && r <= this._getLoopingThreshold()));
                    const h = { contentType: p, loop: this._isLooping, maxLoopCount: this._isLooping ? o : void 0, maxLoopingThresholdSec: e ? 6 : void 0, poster: n && n.url, promotedContext: s && (s.impression_id || s.disclosure_type) ? { impressionId: s.impression_id, disclosureType: s.disclosure_type } : void 0, shouldCapBitrate: t, variants: l ? (0, E.rD)(l) : [] };
                    return a.createElement(w, { testID: L }, this._renderHorizonPlayer(h));
                }
                _submitInitialPlacement() {
                    const { heightsReady: e } = this.props,
                        t = e && !this._hasInitialPlacementMeasurement;
                    this._emitter && this._placementRef && t && (this._placementRef.sample(this._handlePlacementChange), (this._hasInitialPlacementMeasurement = !0));
                }
            }
            (O.contextType = b.rC), (O.defaultProps = { autoplay: C.Z.Off, playbackCoordination: k.Tc, playbackPriority: l.W.NORMAL, showControls: !0, dataSaverMode: !1, geolocationPrompt: !0, heightsReady: !0, noAuthHttpClient: N, includeBroadcastEventAssociation: !1 });
            const M = y.default.create({ aspectRatio: { zIndex: void 0 }, aspectRatioDocked: { zIndex: void 0, maxHeight: "70vh" } }),
                D = (0, v.Z)(O);
            var x = r(555492),
                F = r(513588),
                U = r(942893),
                Z = r(625555),
                V = r(71620),
                G = r(668214),
                q = r(558369),
                H = r(109223),
                B = r(694180),
                z = r(390387),
                Y = r(659773),
                W = r(836255),
                j = r(533128);
            const $ =
                    () =>
                    (e, t, { api: r }) =>
                        r.getHttpClient(),
                Q = (e, t) => {
                    const r = t.source && t.source.videoId;
                    return r && "tweet" === r.type ? r.id : void 0;
                },
                X = (e, t) => t.source && t.source.contentId,
                J = (e, t) => {
                    const r = W.Z.createHydratedTweetSelector(Q)(e, t),
                        i = (0, q.mz)(e);
                    return !!r && (0, j.$y)(i, r, j.d.Autoplay);
                },
                K = (0, G.Z)()
                    .propsFromState(() => ({ dataSaverMode: Y.IX, language: z.VT, sourceTweet: W.Z.createHydratedTweetSelector(Q), disableAutoplay: J, videoContentId: X }))
                    .adjustStateProps(({ dataSaverMode: e, disableAutoplay: t, language: r, sourceTweet: i, videoContentId: a }) => ({ dataSaverMode: e, disableAutoplay: t, language: r, mediaAvailability: (i && (0, E.DY)(i, a)) || void 0, publisherId: i ? (0, E.Pz)(i) : void 0 }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, V.zr)("INLINE_PLAYER_CONTAINER"), getTwitterAuthedHttpClient: $, logPromotedVideoEvent: B.iY, tweetAdProvider: H.Q3 }))
                    .withAnalytics(),
                ee = (0, o.cn)((e) =>
                    e(Z.F6)
                        .login()
                        .catch(() => {}),
                ),
                te = (0, F.J)();
            function re(e) {
                const t = a.useContext(b.rC),
                    r = a.useRef(),
                    o = "broadcast" === e.source.videoId.type && !!t.viewerUserId && t.featureSwitches.isTrue("rweb_video_logged_in_analytics_enabled");
                (0, n.Dv)(o ? ee : te);
                const { createLocalApiErrorHandler: p, getTwitterAuthedHttpClient: h, playbackPriority: y, tweetAdProvider: _, ...m } = e,
                    g = (t) => {
                        const { createLocalApiErrorHandler: r } = e;
                        e.logPromotedVideoEvent(t).catch(r());
                    },
                    f = (t) => {
                        const { category: r, data: i, namespace: a } = t,
                            { analytics: o } = e;
                        a?.action && o.scribe({ ...a, data: { ...i, _category_: r } });
                    },
                    P = a.useMemo(() => h(), [h]),
                    v = ((r) => {
                        const i = { log: f },
                            { analytics: a } = e,
                            n = { log: t.featureSwitches.isTrue("responsive_web_video_promoted_logging_enabled") ? g : c.Z },
                            s = a.contextualScribeNamespace,
                            l = a.contextualScribeData,
                            p = Array.isArray(l.items)
                                ? ((t) => {
                                      const {
                                              analytics: r,
                                              includeBroadcastEventAssociation: i,
                                              source: { videoId: a },
                                          } = e,
                                          { event_id: o } = r.contextualScribeData;
                                      let n;
                                      n = "broadcast" === a.type && a.tweetId ? a.tweetId : "broadcast" === a.type && i && o ? o : a.id;
                                      let s = t.find((e) => e.id === n);
                                      const l = t.find((e) => e.quoted_tweet_id === n);
                                      return l && l.quoted_tweet_id && ((s = U.Z.forQuoteTweet(l.id ? l.id : n, l.quoted_tweet_id)), (s.author_id = l.quoted_author_id)), s;
                                  })(l.items)
                                : void 0,
                            h = { scribeContext: { ...s }, baseScribeItem: p, enableShortFormCompleteLogging: t.featureSwitches.isTrue("responsive_web_video_pcomplete_enabled"), ...(o && { periscopeAuthToken: u.E.authToken(), userType: u.E.userType() }) };
                        return new d.Z(i, n, r, h);
                    })(P),
                    I = (t) => {
                        if (((r.current = t), e.setPlayer)) {
                            const t = r &&
                                r.current && {
                                    play: () => {
                                        r.current && r.current.play();
                                    },
                                    playPreview: () => {
                                        r.current && r.current.playPreview();
                                    },
                                    pause: () => {
                                        r.current && r.current.pause();
                                    },
                                    replay: () => {
                                        r.current && r.current.replay();
                                    },
                                };
                            e.setPlayer(t);
                        }
                    };
                return a.createElement(x.Z.Consumer, null, ({ heightsReady: e }) => a.createElement(s.Z.Consumer, null, ({ playbackPriority: t }) => a.createElement(D, (0, i.Z)({}, m, { analytics: v, heightsReady: e, playbackPriority: t === l.W.INELIGIBLE ? t : y, setPlayer: I, tweetAdProvider: _, twitterAuthedHttpClient: P }))));
            }
            const ie = K(re);
        },
        931162: (e, t, r) => {
            r.d(t, { D: () => o, R: () => a });
            var i = r(202784);
            const a = i.createContext({ prerollDisplayLocation: void 0 }),
                o = ({ children: e, prerollDisplayLocation: t }) => {
                    const r = i.useMemo(() => ({ prerollDisplayLocation: t }), [t]);
                    return i.createElement(a.Provider, { value: r }, e);
                };
        },
        408686: (e, t, r) => {
            r.d(t, { Qr: () => n, n8: () => o });
            var i = r(803224),
                a = r(411240);
            const o = (e) => {
                    const t = e?.[0]?.placement?.scrollY();
                    return 0 === t ? (0, a.Z)(e, (e) => (e.placement ? e.placement.distanceToTop() : Number.MAX_VALUE)) : (0, a.Z)(e, (e) => (e.placement ? e.placement.distanceToCenter() : Number.MAX_VALUE));
                },
                n = (e) => {
                    const t = e.filter((e) => e.playbackPriority === i.W.DOCKABLE);
                    return t.length ? t[0] : o(e);
                };
        },
        519896: (e, t, r) => {
            r.d(t, { A7: () => a, Nw: () => o, Yf: () => i });
            const i = "instreamVideo",
                a = `rweb/${i}`,
                o = Object.freeze({ TIMELINE_HOME: "TIMELINE_HOME", SEARCH_TWEETS: "SEARCH_TWEETS", PROFILE_TWEETS: "PROFILE_TWEETS", OTHER: "OTHER" });
        },
        109223: (e, t, r) => {
            r.d(t, { jc: () => A, Q3: () => k, C: () => w });
            r(571372), r(136728);
            var i = r(329491),
                a = r(962741),
                o = r(499627),
                n = r(312771),
                s = r(836255),
                l = r(519896),
                c = r(782261),
                d = r(276563);
            function u(e) {
                if (null == e) return null;
                const t = (function (e) {
                        const { card: t, extended_entities: r = {} } = e,
                            i =
                                !!r.media?.length &&
                                r.media.some((e) => {
                                    const t = e.additional_media_info;
                                    return t && t.monetizable;
                                }),
                            a = c.Z.hasMixedMedia(e);
                        return { hasMonetizableMedia: i, hasMultipleMediaItems: a, hasAmplifyCard: !!t && t.name === d.default.CardNames.AMPLIFY && !0 === d.default.getBindingValue(t.binding_values, "dynamic_ads"), hasPeriscopeCard: t?.name === d.default.CardNames.PERISCOPE_BROADCAST, hasBroadcastCard: t?.name === d.default.CardNames.BROADCAST, hasEventCard: !!t && t.name === d.default.CardNames.LIVE_EVENT && ("video" === d.default.getBindingValue(t.binding_values, "media_type") || "broadcast" === d.default.getBindingValue(t.binding_values, "media_type")) };
                    })(e),
                    r = (i = t).hasMonetizableMedia || i.hasAmplifyCard || i.hasPeriscopeCard || i.hasBroadcastCard || i.hasEventCard;
                var i;
                const a =
                        r &&
                        (function (e) {
                            const t = e.hasAmplifyCard || e.hasPeriscopeCard || e.hasBroadcastCard || e.hasEventCard;
                            return e.hasMonetizableMedia && !t;
                        })(t),
                    { hasMultipleMediaItems: o } = t;
                return { hasMultipleMediaItems: o, legacy: r, redesign: a };
            }
            var p = r(516951),
                h = r(541837),
                y = r(615656),
                _ = r(71620),
                m = r(917799);
            const g = "FETCH_PREROLLS",
                f = (0, m.dg)(l.A7, g),
                b = 10;
            function P(e) {
                const t = {},
                    r = {};
                return (
                    Array.isArray(e.video_analytics_scribe) &&
                        e.video_analytics_scribe.length &&
                        e.video_analytics_scribe.forEach((e) => {
                            t[e.tweet_id] = e.video_analytics_scribe_passthrough;
                        }),
                    Array.isArray(e.prerolls) &&
                        e.prerolls.length &&
                        e.prerolls.forEach((e) => {
                            e.media_info && (r[e.tweet_id] = { ...e, videoAnalyticsScribePassthrough: t[e.tweet_id] });
                        }),
                    r
                );
            }
            function v(e, t, r, i, a) {
                if (!Array.isArray(e) || 0 === e.length) return Promise.resolve();
                let o = [];
                const n = [o];
                return (
                    e.forEach((e) => {
                        o.length === b && ((o = []), n.push(o)), o.push(e);
                    }),
                    Promise.all(
                        n.map((e) =>
                            (function (e, t, r, i, a) {
                                if (!Array.isArray(e) || 0 === e.length) return Promise.resolve();
                                const o = { eligibleTweets: e, prerollDisplayLocation: a };
                                t && (o.trigger_preroll = t);
                                const n = (0, m._O)(r, { request: i.withEndpoint(h.Z).fetch, params: o }),
                                    s = r((0, _.zr)(g)({ showToast: !1, [y.ZP.AccessDeniedByBouncer]: { customAction: p.Z } }));
                                return n({ actionTypes: f, context: "FETCH_PREROLLS" }).catch(s);
                            })(e, t, r, i, a),
                        ),
                    ).then((e) => {
                        let t = {};
                        e.forEach((e) => {
                            e && e.prerolls && (t = { ...t, ...P(e) });
                        });
                        const i = { type: A, payload: { ...{ dynamicIVCollection: t }, prerollDisplayLocation: a } };
                        r(i);
                    })
                );
            }
            const I = { fetchStatus: n.ZP.NONE, eligibleTweets: [], promotedMetadataCollection: {}, prerollMetadataCollection: {}, dynamicIVCollection: {}, prerollEligibilityCollection: {} },
                E = "rweb/instreamVideo/DYNAMIC_RESET",
                C = "rweb/instreamVideo/STORE_METADATA",
                A = "rweb/instreamVideo/DYNAMIC_STORE",
                T = { [l.Nw.OTHER]: I };
            o.Z.register({
                [l.Yf]: function (e = T, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case C:
                            if (t.payload) {
                                const { eligibleTweets: r, prerollDisplayLocation: i, prerollEligibilityCollection: a, prerollMetadataCollection: o, promotedMetadataCollection: n } = t.payload;
                                return { ...e, [i]: { ...I, ...e[i], eligibleTweets: r, prerollMetadataCollection: o, promotedMetadataCollection: n, prerollEligibilityCollection: a } };
                            }
                            break;
                        case A:
                            if (t.payload) {
                                const { dynamicIVCollection: r, prerollDisplayLocation: i } = t.payload;
                                return { ...e, [i]: { ...I, ...e[i], dynamicIVCollection: r } };
                            }
                            break;
                        case E:
                            if (t.payload) {
                                const { prerollDisplayLocation: r } = t.payload;
                                return { ...e, [r]: { ...I, ...e[r], dynamicIVCollection: {} } };
                            }
                            break;
                        default:
                            return e;
                    }
                    return e;
                },
            });
            const S = (e, t) => e[l.Yf][t] || I;
            function w(e, t = l.Nw.OTHER) {
                return (r, i, { api: o, featureSwitches: n }) => {
                    if (!Array.isArray(e)) throw new Error("unable to fetch prerolls without timeline entries");
                    if (e.length < 1) return Promise.resolve();
                    const l = i(),
                        c = [],
                        d = {},
                        p = {},
                        h = {};
                    e.forEach((e) => {
                        if (!e.content || e.type !== a.ZP.Tweet) return;
                        const t = e.content,
                            r = s.Z.selectHydrated(l, t.id);
                        if (!r) return;
                        const i = r,
                            { prerollMetadata: o, promotedMetadata: n } = t;
                        if (n) {
                            const { adMetadataContainer: e, disclosureType: t, impressionId: r } = n;
                            (i.promoted_content = { adMetadataContainer: e, disclosure_type: t, impression_id: r }), (p[i.id_str] = n);
                        }
                        const y = u(i),
                            _ = y && y.hasMultipleMediaItems;
                        (h[i.id_str] = y), o?.preroll?.mediaInfo && !_ && (d[i.id_str] = o), y?.legacy && !_ && c.push(i);
                    });
                    r({ type: C, payload: { ...{ eligibleTweets: c, prerollMetadataCollection: d, promotedMetadataCollection: p, prerollEligibilityCollection: h, prerollDisplayLocation: t } } });
                    return v(
                        c.filter((e) => void 0 === d[e.id_str]),
                        null,
                        r,
                        o,
                        t,
                    );
                };
            }
            function k(e, t = l.Nw.OTHER) {
                return (r, a, { api: o, featureSwitches: n }) => {
                    if (e) {
                        const n = S(a(), t),
                            { dynamicIVCollection: s, eligibleTweets: l, prerollEligibilityCollection: c, prerollMetadataCollection: d, promotedMetadataCollection: u } = n,
                            p = s[e],
                            h = u[e],
                            y = c[e];
                        if (p) {
                            r({ type: E, payload: { prerollDisplayLocation: t } });
                            const { dynamic_preroll_type: e, preroll_id: a } = p;
                            return (
                                v(l, { preroll_id: a, dynamic_preroll_type: e }, r, o, t),
                                (function (e, t, r, a) {
                                    const o = { adId: t.preroll_id, advertiserName: null, advertiserProfileImageUrl: null, mediaInfo: { call_to_action: null, duration_millis: t.media_info.duration_millis, publisher_id_str: t.media_info.publisher_id_str, variants: t.media_info.variants }, promotedContent: { impressionId: void 0, disclosureType: void 0 }, videoAnalyticsScribePassthrough: t.videoAnalyticsScribePassthrough };
                                    if ((t.promoted_content && !r && ((o.promotedContent.impressionId = t.promoted_content.impression_id), (o.promotedContent.disclosureType = t.promoted_content.disclosure_type)), t.media_info.call_to_action)) {
                                        const { type: e, url: a } = t.media_info.call_to_action,
                                            n = (0, i.b)(a, r?.clickTrackingInfo),
                                            s = r?.clickTrackingInfo ? { original_url: a, embedded_url: n, click_tracking_info: r.clickTrackingInfo, embed_status: (0, i.R)(a, r.clickTrackingInfo) } : void 0;
                                        o.mediaInfo.call_to_action = { type: e, url: n, click_tracking_embed_details: s };
                                    }
                                    if (t.media_info.render_ad_by_advertiser_name) {
                                        const { advertiser_name: e, advertiser_profile_image_url: r } = t.media_info;
                                        (o.advertiserName = e), (o.advertiserProfileImageUrl = r);
                                    }
                                    if (a?.redesign) {
                                        (o.shouldAutoAdvance = !1), (o.useRedesignedPrerollUx = !0);
                                        const { advertiser_name: e, advertiser_profile_image_url: r } = t.media_info;
                                        (o.advertiserName = e), (o.advertiserProfileImageUrl = r);
                                    }
                                    return o;
                                })(0, p, h, y)
                            );
                        }
                        const _ = d[e];
                        if (_) {
                            const e = (function (e, t, r, a) {
                                if (!t.preroll || !t.preroll.mediaInfo) return null;
                                const { mediaInfo: o, prerollId: n } = t.preroll,
                                    s = o.videoVariants.map((e) => ({ url: e.url, content_type: e.contentType, bitrate: e.bitrate })),
                                    l = { adId: n, advertiserName: null, advertiserProfileImageUrl: null, mediaInfo: { call_to_action: void 0, duration_millis: o.durationMillis, publisher_id_str: o.publisherId, variants: s }, promotedContent: { impressionId: void 0, disclosureType: void 0 } };
                                if (o.callToAction) {
                                    const { type: e, url: t } = o.callToAction,
                                        a = (0, i.b)(t, r?.clickTrackingInfo),
                                        n = r?.clickTrackingInfo ? { original_url: t, embedded_url: a, click_tracking_info: r.clickTrackingInfo, embed_status: (0, i.R)(t, r.clickTrackingInfo) } : void 0;
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
                            })(0, _, h, y);
                            if (e) return e;
                        }
                    }
                    return {};
                };
            }
        },
        694180: (e, t, r) => {
            r.d(t, { cM: () => m, dS: () => _, iY: () => g });
            var i = r(370751),
                a = r(399896),
                o = r(663550),
                n = r(499627),
                s = r(917799);
            const l = {},
                c = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                d = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, i.Z)([o.dx.IMPRESSION, o.dx.DWELL]),
                p = (0, i.Z)([o.AJ.TREND_VIEW, o.AJ.SPOTLIGHT_IMPRESSION]),
                h = (e) => ({ payload: { eventKey: e }, type: d });
            const y = (e, t) => !!e.promotedContent[t],
                _ =
                    (e) =>
                    (t, r, { api: i }) => {
                        const { event: o, impression_id: n, promoted_trend_id: l } = e,
                            d = `trend-${l}-${o}`;
                        if (p.has(o) && y(r(), d)) return Promise.resolve();
                        const u = { promoted_trend_id: l, event: o, impression_id: n };
                        return (0, s._O)(t, { params: u, request: i.withEndpoint(a.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && p.has(o)) return [h(d)];
                        });
                    },
                m =
                    ({ disclosureType: e, itemId: t, itemType: r, params: i }) =>
                    (o, n, { api: l }) => {
                        const { event: d, impression_id: p } = i,
                            _ = `${r}-${t ?? "undefined"}-${p ?? "undefined"}-${d ?? "undefined"}`;
                        if (u.has(d) && y(n(), _)) return Promise.resolve();
                        const m = e && "earned" === e.toLowerCase() ? "1" : null,
                            g = { ...i, earned: m, epoch_ms: Date.now() };
                        return (0, s._O)(o, { params: g, request: l.withEndpoint(a.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: g }, (e, t) => {
                            if (!t && u.has(d)) return [h(_)];
                        });
                    },
                g =
                    (e) =>
                    (t, r, { api: i }) =>
                        (0, s._O)(t, { params: e, request: i.withEndpoint(a.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            n.Z.register({
                promotedContent: function (e = l, t) {
                    if (!t) return e;
                    if (t.type === d) {
                        if (!t.payload) return e;
                        const { eventKey: r } = t.payload;
                        return { ...e, [r]: !0 };
                    }
                    return e;
                },
            });
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => l });
            var i = r(202784),
                a = r(325686),
                o = r(235902),
                n = r(885015),
                s = r(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: l } = o.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return r ? i.createElement(n.Z, { style: !t && c.root, withGutter: !0 }, i.createElement(a.Z, { style: c.gapColumn }, i.createElement(a.Z, { style: [c.gap, d] })), i.createElement(a.Z, { style: c.gapText }, r), i.createElement(a.Z, { style: c.gapColumn }, i.createElement(a.Z, { style: [c.gap, d] }))) : i.createElement(a.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => c });
            var i = r(807896),
                a = r(202784),
                o = r(325686),
                n = r(392237);
            class s extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...n } = this.props,
                        s = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, l.column, r && l.withGutterColumn] }));
                    return a.createElement(o.Z, (0, i.Z)({ style: [t, l.root, r && l.withGutter] }, n), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const l = n.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = s;
        },
        893164: (e, t, r) => {
            r.d(t, { Z: () => h });
            var i = r(202784),
                a = r(325686),
                o = r(111677),
                n = r.n(o),
                s = r(355830),
                l = r(731708),
                c = r(154003),
                d = r(992942),
                u = r(392237);
            const p = n().a9edea48;
            function h(e) {
                const { displayBackgroundImage: t = !1, errorMessage: r, iconPlayError: o, imageSrc: n, onReloadPress: h } = e;
                return i.createElement(a.Z, { style: [u.default.absoluteFill, t ? null : y.blankOverlay] }, t ? i.createElement(i.Fragment, null, i.createElement(a.Z, { style: y.backgroundImage }, n && i.createElement(d.Z, { resizeMode: "cover", source: n, style: u.default.absoluteFill })), i.createElement(a.Z, { style: y.overlay })) : null, i.createElement(a.Z, { style: y.errorContainer }, i.createElement(a.Z, null, o ? i.createElement(s.default, { style: y.playErrorIcon }) : null), i.createElement(a.Z, { focusable: !0 }, i.createElement(l.ZP, { style: t ? y.errorMsgTextWhite : y.errorMsgTextGray }, r)), h ? i.createElement(c.ZP, { onPress: h, style: y.buttonContainer, type: "brandFilled" }, p) : null));
            }
            const y = u.default.create((e) => ({ backgroundImage: { ...u.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...u.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack77 }, blankOverlay: { backgroundColor: e.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: e.spaces.space32 }, errorMsgTextWhite: { color: e.colors.white, textAlign: "center", marginBottom: e.spaces.space20 }, errorMsgTextGray: { color: e.colors.gray700, textAlign: "center", marginBottom: e.spaces.space20 }, playErrorIcon: { fill: e.colors.gray700, height: e.spaces.space48, width: e.spaces.space48, marginHorizontal: "auto", paddingBottom: e.spaces.space20, verticalAlign: "middle" } }));
        },
        411240: (e, t, r) => {
            r.d(t, { Z: () => i });
            const i = (e, t) => {
                if (0 === e.length) return;
                let r = e[0],
                    i = t(r);
                for (let a = 1; a < e.length; a++) {
                    const o = e[a],
                        n = t(o);
                    n < i && ((r = o), (i = n));
                }
                return r;
            };
        },
        662678: (e, t, r) => {
            r.d(t, { G: () => a, Z: () => i });
            r(136728);
            const i = function (e, t) {
                return a(e, t);
            };
            function a(e, t) {
                return e.reduce(
                    (r, i, a) => {
                        const o = t ? t(i, a, e) : !!i;
                        return o && r[0].push(i), !o && r[1].push(i), r;
                    },
                    [[], []],
                );
            }
        },
        689996: (e, t, r) => {
            var i = r(497636),
                a = r(265968),
                o = r(409337),
                n = r(492991),
                s = r(639646),
                l = r(387501),
                c = a([].push),
                d = function (e) {
                    var t = 1 === e,
                        r = 2 === e,
                        a = 3 === e,
                        d = 4 === e,
                        u = 6 === e,
                        p = 7 === e,
                        h = 5 === e || u;
                    return function (y, _, m, g) {
                        for (var f, b, P = n(y), v = o(P), I = i(_, m), E = s(v), C = 0, A = g || l, T = t ? A(y, E) : r || p ? A(y, 0) : void 0; E > C; C++)
                            if ((h || C in v) && ((b = I((f = v[C]), C, P)), e))
                                if (t) T[C] = b;
                                else if (b)
                                    switch (e) {
                                        case 3:
                                            return !0;
                                        case 5:
                                            return f;
                                        case 6:
                                            return C;
                                        case 2:
                                            c(T, f);
                                    }
                                else
                                    switch (e) {
                                        case 4:
                                            return !1;
                                        case 7:
                                            c(T, f);
                                    }
                        return u ? -1 : a || d ? d : T;
                    };
                };
            e.exports = { forEach: d(0), map: d(1), filter: d(2), some: d(3), every: d(4), find: d(5), findIndex: d(6), filterReject: d(7) };
        },
        331460: (e, t, r) => {
            var i = r(824229),
                a = r(670095),
                o = r(406358),
                n = a("species");
            e.exports = function (e) {
                return (
                    o >= 51 ||
                    !i(function () {
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
        696038: (e, t, r) => {
            var i = r(824229);
            e.exports = function (e, t) {
                var r = [][e];
                return (
                    !!r &&
                    i(function () {
                        r.call(
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
        43143: (e, t, r) => {
            var i = r(277111),
                a = r(492991),
                o = r(409337),
                n = r(639646),
                s = TypeError,
                l = function (e) {
                    return function (t, r, l, c) {
                        i(r);
                        var d = a(t),
                            u = o(d),
                            p = n(d),
                            h = e ? p - 1 : 0,
                            y = e ? -1 : 1;
                        if (l < 2)
                            for (;;) {
                                if (h in u) {
                                    (c = u[h]), (h += y);
                                    break;
                                }
                                if (((h += y), e ? h < 0 : p <= h)) throw new s("Reduce of empty array with no initial value");
                            }
                        for (; e ? h >= 0 : p > h; h += y) h in u && (c = r(c, u[h], h, d));
                        return c;
                    };
                };
            e.exports = { left: l(!1), right: l(!0) };
        },
        1909: (e, t, r) => {
            var i = r(265968);
            e.exports = i([].slice);
        },
        118760: (e, t, r) => {
            var i = r(33718),
                a = r(782359),
                o = r(685052),
                n = r(670095)("species"),
                s = Array;
            e.exports = function (e) {
                var t;
                return i(e) && ((t = e.constructor), ((a(t) && (t === s || i(t.prototype))) || (o(t) && null === (t = t[n]))) && (t = void 0)), void 0 === t ? s : t;
            };
        },
        387501: (e, t, r) => {
            var i = r(118760);
            e.exports = function (e, t) {
                return new (i(e))(0 === t ? 0 : t);
            };
        },
        128801: (e, t, r) => {
            var i = r(609859),
                a = r(427079);
            e.exports = "process" === a(i.process);
        },
        782359: (e, t, r) => {
            var i = r(265968),
                a = r(824229),
                o = r(26733),
                n = r(781589),
                s = r(431333),
                l = r(108511),
                c = function () {},
                d = [],
                u = s("Reflect", "construct"),
                p = /^\s*(?:class|function)\b/,
                h = i(p.exec),
                y = !p.test(c),
                _ = function (e) {
                    if (!o(e)) return !1;
                    try {
                        return u(c, d, e), !0;
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
                        return y || !!h(p, l(e));
                    } catch (e) {
                        return !0;
                    }
                };
            (m.sham = !0),
                (e.exports =
                    !u ||
                    a(function () {
                        var e;
                        return (
                            _(_.call) ||
                            !_(Object) ||
                            !_(function () {
                                e = !0;
                            }) ||
                            e
                        );
                    })
                        ? m
                        : _);
        },
        700047: (e, t, r) => {
            var i = r(807400),
                a = r(265968),
                o = r(720266),
                n = r(824229),
                s = r(765632),
                l = r(110894),
                c = r(119195),
                d = r(492991),
                u = r(409337),
                p = Object.assign,
                h = Object.defineProperty,
                y = a([].concat);
            e.exports =
                !p ||
                n(function () {
                    if (
                        i &&
                        1 !==
                            p(
                                { b: 1 },
                                p(
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
                        r = Symbol("assign detection"),
                        a = "abcdefghijklmnopqrst";
                    return (
                        (e[r] = 7),
                        a.split("").forEach(function (e) {
                            t[e] = e;
                        }),
                        7 !== p({}, e)[r] || s(p({}, t)).join("") !== a
                    );
                })
                    ? function (e, t) {
                          for (var r = d(e), a = arguments.length, n = 1, p = l.f, h = c.f; a > n; ) for (var _, m = u(arguments[n++]), g = p ? y(s(m), p(m)) : s(m), f = g.length, b = 0; f > b; ) (_ = g[b++]), (i && !o(h, m, _)) || (r[_] = m[_]);
                          return r;
                      }
                    : p;
        },
        849276: (e, t, r) => {
            var i = r(609859);
            e.exports = i;
        },
        730895: (e, t, r) => {
            var i = r(821176);
            e.exports = function () {
                var e = i(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
        1017: (e, t, r) => {
            var i = r(265968),
                a = r(558885),
                o = r(783326),
                n = r(841647),
                s = i("".replace),
                l = RegExp("^[" + n + "]+"),
                c = RegExp("(^|[^" + n + "])[" + n + "]+$"),
                d = function (e) {
                    return function (t) {
                        var r = o(a(t));
                        return 1 & e && (r = s(r, l, "")), 2 & e && (r = s(r, c, "$1")), r;
                    };
                };
            e.exports = { start: d(1), end: d(2), trim: d(3) };
        },
        890143: (e, t, r) => {
            var i = r(265968);
            e.exports = i((1).valueOf);
        },
        841647: (e) => {
            e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
        },
        543450: (e, t, r) => {
            var i = r(23103),
                a = r(689996).map;
            i(
                { target: "Array", proto: !0, forced: !r(331460)("map") },
                {
                    map: function (e) {
                        return a(this, e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                },
            );
        },
        743108: (e, t, r) => {
            var i = r(23103),
                a = r(43143).left,
                o = r(696038),
                n = r(406358);
            i(
                { target: "Array", proto: !0, forced: (!r(128801) && n > 79 && n < 83) || !o("reduce") },
                {
                    reduce: function (e) {
                        var t = arguments.length;
                        return a(this, e, t, t > 1 ? arguments[1] : void 0);
                    },
                },
            );
        },
        332501: (e, t, r) => {
            var i = r(23103),
                a = r(33718),
                o = r(782359),
                n = r(685052),
                s = r(443231),
                l = r(639646),
                c = r(910905),
                d = r(462324),
                u = r(670095),
                p = r(331460),
                h = r(1909),
                y = p("slice"),
                _ = u("species"),
                m = Array,
                g = Math.max;
            i(
                { target: "Array", proto: !0, forced: !y },
                {
                    slice: function (e, t) {
                        var r,
                            i,
                            u,
                            p = c(this),
                            y = l(p),
                            f = s(e, y),
                            b = s(void 0 === t ? y : t, y);
                        if (a(p) && ((r = p.constructor), ((o(r) && (r === m || a(r.prototype))) || (n(r) && null === (r = r[_]))) && (r = void 0), r === m || void 0 === r)) return h(p, f, b);
                        for (i = new (void 0 === r ? m : r)(g(b - f, 0)), u = 0; f < b; f++, u++) f in p && d(i, u, p[f]);
                        return (i.length = u), i;
                    },
                },
            );
        },
        271245: (e, t, r) => {
            var i = r(23103),
                a = r(124231),
                o = r(807400),
                n = r(609859),
                s = r(849276),
                l = r(265968),
                c = r(46541),
                d = r(198270),
                u = r(720835),
                p = r(291321),
                h = r(349395),
                y = r(992066),
                _ = r(824229),
                m = r(778151).f,
                g = r(997933).f,
                f = r(931787).f,
                b = r(890143),
                P = r(1017).trim,
                v = "Number",
                I = n[v],
                E = s[v],
                C = I.prototype,
                A = n.TypeError,
                T = l("".slice),
                S = l("".charCodeAt),
                w = function (e) {
                    var t,
                        r,
                        i,
                        a,
                        o,
                        n,
                        s,
                        l,
                        c = y(e, "number");
                    if (h(c)) throw new A("Cannot convert a Symbol value to a number");
                    if ("string" == typeof c && c.length > 2)
                        if (((c = P(c)), 43 === (t = S(c, 0)) || 45 === t)) {
                            if (88 === (r = S(c, 2)) || 120 === r) return NaN;
                        } else if (48 === t) {
                            switch (S(c, 1)) {
                                case 66:
                                case 98:
                                    (i = 2), (a = 49);
                                    break;
                                case 79:
                                case 111:
                                    (i = 8), (a = 55);
                                    break;
                                default:
                                    return +c;
                            }
                            for (n = (o = T(c, 2)).length, s = 0; s < n; s++) if ((l = S(o, s)) < 48 || l > a) return NaN;
                            return parseInt(o, i);
                        }
                    return +c;
                },
                k = c(v, !I(" 0o1") || !I("0b1") || I("+0x1")),
                R = function (e) {
                    var t,
                        r =
                            arguments.length < 1
                                ? 0
                                : I(
                                      (function (e) {
                                          var t = y(e, "number");
                                          return "bigint" == typeof t ? t : w(t);
                                      })(e),
                                  );
                    return p(C, (t = this)) &&
                        _(function () {
                            b(t);
                        })
                        ? u(Object(r), this, R)
                        : r;
                };
            (R.prototype = C), k && !a && (C.constructor = R), i({ global: !0, constructor: !0, wrap: !0, forced: k }, { Number: R });
            var L = function (e, t) {
                for (var r, i = o ? m(t) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), a = 0; i.length > a; a++) d(t, (r = i[a])) && !d(e, r) && f(e, r, g(t, r));
            };
            a && E && L(s[v], E), (k || a) && L(s[v], I);
        },
        43105: (e, t, r) => {
            var i = r(23103),
                a = r(700047);
            i({ target: "Object", stat: !0, arity: 2, forced: Object.assign !== a }, { assign: a });
        },
        334769: (e, t, r) => {
            var i = r(23103),
                a = r(492991),
                o = r(765632);
            i(
                {
                    target: "Object",
                    stat: !0,
                    forced: r(824229)(function () {
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.InlinePlayer.915fb69a.js.map

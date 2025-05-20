"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.InlinePlayer-9f4db315"],
    {
        541837: (e, t, i) => {
            i.d(t, { Z: () => s });
            var a = i(276563);
            function r(e) {
                const t = { tweet_id: e.id_str },
                    i = e.promoted_content && e.promoted_content.impression_id;
                return i && (t.impression_id = i), e.card && e.card.name === a.default.CardNames.LIVE_EVENT && (t.live_event_id = a.default.getBindingValue(e.card.binding_values, "event_id")), t;
            }
            const s = ({ apiClient: e, featureSwitches: t }) => ({
                fetch: (t) => {
                    const i = { tweets: t.eligibleTweets.map(r) };
                    t.trigger_preroll && (i.trigger_preroll = t.trigger_preroll), t.prerollDisplayLocation && (i.display_location = t.prerollDisplayLocation);
                    const a = { tweets: JSON.stringify(i) };
                    return e.post("videoads/v2/prerolls", a, {}, {});
                },
            });
        },
        90890: (e, t, i) => {
            i.d(t, { Tc: () => l, yt: () => n });
            i(136728), i(202784);
            var a = i(803224),
                r = i(67877),
                s = i(2138);
            const o = { autoplayPrioritizationPolicy: i(408686).Qr, minimumVisibilityForAutoplay: 0.25 };
            class n {
                constructor(e = o) {
                    (this._players = []),
                        (this._setPlayerState = (e, t) => {
                            (e.previousPlaybackState = e.playbackState), (e.playbackState = t), this._updatePlayerStateForDocking(e, t);
                        }),
                        (this._updatePlayerStateForDocking = (e, t) => {
                            if (t === a.q.USER_PLAYING) {
                                const t = e.previousPlaybackState === a.q.USER_PAUSED;
                                if (this._updateDockedVideo && "function" == typeof e.registerDockElement && !t) {
                                    const t = e.registerDockElement();
                                    this._updateDockedVideo(t, e.id);
                                } else this._updateIsUserPaused && this._updateIsUserPaused(!1);
                            } else t === a.q.USER_PAUSED ? this._updateIsUserPaused && this._updateIsUserPaused(!0) : t === a.q.AUTO_PLAYING && this._updateIsUserPaused && this._updateIsUserPaused(!1);
                            this._updateInlinePlayerState && this._updateInlinePlayerState(this._players);
                        }),
                        (this._updatePlaybackStates = () => {
                            const e = this._players.find((e) => e.playbackState === a.q.USER_PLAYING && e.playbackPriority !== a.W.SPACE);
                            e && !this._canPlay(e) ? (this._pausePlayer(e), this._triggerAutoplay()) : e ? this._stopAllExcept(e) : this._triggerAutoplay();
                        }),
                        (this._scheduleUpdate = (0, s.Z)((0, r.Z)(this._updatePlaybackStates, window.requestIdleCallback ? (e) => window.requestIdleCallback(e, { timeout: 200 }) : window.requestAnimationFrame), 300, { leading: !1, trailing: !0 }));
                    const { autoplayPrioritizationPolicy: t, minimumVisibilityForAutoplay: i } = e;
                    (this._autoplayPrioritizationPolicy = t), (this._minimumVisibilityForAutoplay = i);
                }
                register({ autoplayGroupOptions: e, canAutoplay: t, id: i, onAutoPlayRequest: r, onFullscreenEntered: s, onFullscreenExited: o, onPauseRequest: n, isLooping: l, registerDockElement: c, updateDockedVideo: d, updateIsUserPaused: p, playbackPriority: u = a.W.NORMAL }) {
                    (this._updateDockedVideo = d), (this._updateIsUserPaused = p);
                    const h = { id: i, autoplayGroupEmitter: e?.autoplayGroupEmitter, placement: void 0, playbackPriority: u, playbackState: a.q.INITIAL, previousPlaybackState: a.q.INITIAL, commandHandlers: { onAutoPlayRequest: r, onFullscreenEntered: s, onFullscreenExited: o, onPauseRequest: n }, canAutoplay: t && u !== a.W.INELIGIBLE, isLooping: l, registerDockElement: c };
                    return e && e.autoplayGroupEmitter.registerAutoplayGroupPlayer(h, e.mediaIndex), this._players.push(h), { reset: () => this._handleReset(h), signalFullscreenChange: (e) => this._handleFullscreenChanged(e), signalPlacementChange: (e) => this._handlePlacementChange(h, e), signalPlay: () => this._handlePlay(h), signalPause: () => this._handlePause(h), signalPlaybackFinish: (e) => this._handlePlaybackFinished(h, e), signalPlaybackPriorityChange: (e, t) => this._handlePlaybackPriorityChange(h, e, t), unregister: () => this._handleUnregister(h) };
                }
                _handleFullscreenChanged(e) {
                    this._players.forEach((t) => {
                        const { onFullscreenEntered: i, onFullscreenExited: a } = t.commandHandlers;
                        e && i ? i() : !e && a && a();
                    });
                }
                _handlePlacementChange(e, t) {
                    const i = t.scrollY();
                    (e.placement = t), this._scrollY !== i && (this._scrollY = i), e.playbackState === a.q.FINISHED && 0 === t.visibleFraction() && this._setPlayerState(e, a.q.INITIAL), this._scheduleUpdate();
                }
                _handlePlay(e) {
                    e.playbackState !== a.q.AUTO_PLAYING && (e.previousPlaybackState === a.q.AUTO_PLAYING && e.isLooping ? this._setPlayerState(e, a.q.AUTO_PLAYING) : this._setPlayerState(e, a.q.USER_PLAYING)), this._stopAllExcept(e);
                }
                _handlePause(e) {
                    e.playbackState !== a.q.AUTO_PAUSED && this._setPlayerState(e, a.q.USER_PAUSED);
                }
                _handlePlaybackFinished(e, t = !1) {
                    this._setPlayerState(e, a.q.FINISHED), e.autoplayGroupEmitter && e.autoplayGroupEmitter.signalPlaybackComplete(t);
                }
                _handlePlaybackPriorityChange(e, t, i) {
                    (e.playbackPriority = t), (e.canAutoplay = i && t !== a.W.INELIGIBLE), this._scheduleUpdate();
                }
                _handleReset(e) {
                    this._setPlayerState(e, a.q.INITIAL), this._scheduleUpdate();
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
                            e.playbackState === a.q.AUTO_PLAYING && this._pausePlayer(e);
                        });
                }
                _canGroupAutoplay(e, t) {
                    if (t.has(e)) return t.get(e);
                    const i = e.isAutoplayGroupEligibleForAutoplay();
                    return t.set(e, i), i;
                }
                _canAutoPlay(e) {
                    const t = !!e.placement && e.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        i = e.playbackState === a.q.USER_PAUSED,
                        r = e.playbackState === a.q.FINISHED;
                    return e.canAutoplay && t && !i && !r;
                }
                _canPlay(e) {
                    const t = !!e.placement && e.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        i = !!e.placement && e.placement.visibleFraction() > 0;
                    return e.playbackPriority !== a.W.INELIGIBLE && (!e.placement || i || t);
                }
                _stopAllExcept(e) {
                    this._players.forEach((t) => {
                        const i = t.playbackPriority !== a.W.SPACE;
                        t === e || !i || (t.playbackState !== a.q.USER_PLAYING && t.playbackState !== a.q.AUTO_PLAYING) || this._pausePlayer(t);
                    });
                }
                _pausePlayer(e) {
                    const { onPauseRequest: t } = e.commandHandlers;
                    this._setPlayerState(e, a.q.AUTO_PAUSED), t();
                }
                _autoPlayVideo(e) {
                    const { onAutoPlayRequest: t } = e.commandHandlers;
                    this._setPlayerState(e, a.q.AUTO_PLAYING), t();
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
            const l = new n();
        },
        97837: (e, t, i) => {
            i.d(t, { Z: () => d });
            var a = i(202784),
                r = i(525744),
                s = i(859799),
                o = i(390686),
                n = i(393495);
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
                        i = n.Z.area(this.placement.item),
                        a = (1 - t) * n.Z.area(e);
                    return i > 0 ? a / i : 0;
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
            class c extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePageVisibilityChange = () => {
                            if (this._placement) {
                                const { layerId: e, obstructionDetection: t, onPageVisibilityChange: i } = this.props,
                                    a = document.visibilityState,
                                    r = this._obstructions || t.getObstructions(),
                                    s = new l(this._placement, r, e);
                                i && i(a, s);
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
                    return a.createElement(o.ZP, { onPlacementChange: this._handlePlacementChange, ref: this._setPlacementRef, style: t, withScrollListener: !0 }, e);
                }
                componentDidMount() {
                    const { obstructionDetection: e } = this.props;
                    (this._obstructionSubscription = e.subscribe(this._handleObstructionChange)), document.addEventListener("visibilitychange", this._handlePageVisibilityChange);
                }
                componentWillUnmount() {
                    this._obstructionSubscription && (this._obstructionSubscription.unsubscribe(), (this._obstructionSubscription = void 0)), document.removeEventListener("visibilitychange", this._handlePageVisibilityChange);
                }
                _updateAndNotify({ obstructions: e, placement: t }, i) {
                    const { layerId: a, obstructionDetection: r } = this.props;
                    (this._placement = t || this._placement),
                        (this._obstructions = e || this._obstructions || r.getObstructions()),
                        this._placement
                            ? i(new l(this._placement, this._obstructions, a))
                            : this._placementRef &&
                              this._placementRef.sample((e) => {
                                  (this._placement = e), (this._obstructions = this._obstructions || r.getObstructions()), i(new l(e, this._obstructions, a));
                              });
                }
            }
            c.defaultProps = { obstructionDetection: r.Z };
            const d = (0, s.Z)(c);
        },
        555492: (e, t, i) => {
            i.d(t, { Z: () => a });
            const a = i(202784).createContext({ heightsReady: !0 });
        },
        408076: (e, t, i) => {
            i.r(t), i.d(t, { InlinePlayerContainer: () => ie, default: () => ae });
            var a = i(807896),
                r = i(202784),
                s = i(565058),
                o = i(400752),
                n = i(421158),
                l = i(803224),
                c = i(516951),
                d = i(905996),
                p = i(741810),
                u = i(738584),
                h = i(682474),
                _ = i(392237),
                y = i(640290),
                m = i(908478),
                P = i(323265),
                b = i(791632),
                g = i(443781),
                f = i(931162),
                I = i(993547),
                v = i(329491),
                E = i(954300),
                A = i(870976),
                C = i(992720),
                T = i(325686);
            const S = (e) => {
                    e.stopPropagation();
                },
                w = ({ children: e, testID: t }) => r.createElement(T.Z, { onClick: S, style: _.default.absoluteFill, testID: t }, e);
            var k = i(90890),
                R = i(97837);
            const L = "videoPlayer",
                D = new y.ZP({});
            class O extends r.Component {
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
                                    "aria-label": s,
                                    aspectRatio: o,
                                    displayOptions: n,
                                    durationMs: l,
                                    geolocationPrompt: c,
                                    includeBroadcastEventAssociation: d,
                                    intentToPlayTime: p,
                                    language: h,
                                    mediaAvailability: _,
                                    noAuthHttpClient: y,
                                    playerId: m,
                                    publisherId: P,
                                    source: { contentId: b, eventId: g, videoId: I, vmapUrl: v },
                                    timecode: E,
                                    twitterAuthedHttpClient: A,
                                    uiStack: C,
                                    videoEl: T,
                                    videoPlayer: S,
                                    viewCount: w,
                                    viewCountGraphData: k,
                                } = this.props,
                                R = this.context.featureSwitches.isTrue("rweb_video_pip_enabled"),
                                L = this.context.featureSwitches.isTrue("rweb_live_broadcast_rewind_enabled");
                            return r.createElement(f.R.Consumer, null, ({ prerollDisplayLocation: f }) => r.createElement(u.Z, (0, a.Z)({ adProvider: this._tweetAdProvider(f), additionalBadges: t, analytics: i, "aria-label": s, aspectRatio: o, basePlayerClass: S, configType: "static", contentId: b, cta: this._getPlayerCTA(), disableHls: this._disableHls, durationMs: l, enablePiP: R, enableVideoPlayerCaptionRendering: !0, eventId: g, featureProvider: this.context.featureSwitches, generateDrmTokenCallback: this.props.generateDrmTokenCallback, geolocationPrompt: c, httpClient: y, includeBroadcastEventAssociation: d, intentToPlayTime: p, language: h, liveBroadcastRewindEnabled: L, mediaAvailability: _, objectFitVideo: n && n.objectFitVideo, onApiReady: this._handleApiReady, playbackSessionId: I.id, playerId: m, precache: this._shouldAutoplay, publisherId: P, requestedTimecode: E, twitterAuthedHttpClient: A, videoEl: T, videoId: I, viewCount: w, viewCountGraphData: k, vmapUrl: v }, e), C));
                        }),
                        (this._setPlayerApi = (e) => {
                            const { customOverlay: t, onMuteChange: i, onSetPlayerApi: a } = this.props;
                            "function" == typeof t && ((this._playerInternal = e), this.forceUpdate()), i && (e.on("unmute", () => i({ isPlayerMuted: !1 })), e.on("mute", () => i({ isPlayerMuted: !0 }))), e && (e.on("fullscreenEntered", () => this._handleFullscreenChange({ isPlayerFullscreen: !0 })), e.on("fullscreenExited", () => this._handleFullscreenChange({ isPlayerFullscreen: !1 }))), this._setPlayerInternal(e), a && a(e);
                        }),
                        (this._getPlayerCTA = () => {
                            const { cta: e, promotedContent: t } = this.props;
                            return e && { ...e, url: (0, v.b)(e.url, t?.click_tracking_info) };
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
                            const a = (e.tracks || []).find((t) => t.id === e.currentTrackId);
                            if (a) {
                                const t = (a.currentTimeMs || 0) / a.durationMs;
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
                                if ((t.temporarilySuppressScrollListeners(2e3), P.ZP.isChrome() || P.ZP.isSafari()))
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
                                { autoplayGroupOptions: t, playbackCoordination: i, playbackPriority: a, registerDockElement: r, updateDockedVideo: s, updateIsUserPaused: o, viewport: n } = this.props,
                                l = { autoplayGroupOptions: t, onAutoPlayRequest: this._handleAutoPlayRequest, id: e.id, onPauseRequest: this._handlePauseRequest, canAutoplay: this._shouldAutoplay, isLooping: this._isLooping, registerDockElement: r, updateDockedVideo: s, updateIsUserPaused: o, playbackPriority: a, viewport: n };
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
                    const { autoplay: i, disableAutoplay: s, forwardPivotInfo: o } = e,
                        { history: n } = t;
                    (this._disableHls = !(P.ZP.isDesktopOS() || (P.ZP.isAndroid() && this.context.featureSwitches.isTrue("web_video_hls_android_mse_enabled")))), (this._shouldAutoplay = !(0, b.HD)(n) && !s && (0, C.Z)(i, o));
                }
                componentDidUpdate(e) {
                    const { heightsReady: t, playbackPriority: i } = this.props;
                    !e.heightsReady && t && this._submitInitialPlacement(), !(0, m.Z)(e.source, this.props.source) && this._emitter && this._emitter.reset(), e.playbackPriority !== i && void 0 !== i && this._emitter && this._emitter.signalPlaybackPriorityChange(i, this._shouldAutoplay);
                }
                render() {
                    const { aspectRatio: e, isDockedVideo: t, poster: i } = this.props,
                        a = e,
                        s = N.aspectRatio;
                    return r.createElement(h.Z, { ratio: a, style: s }, r.createElement(R.Z, { onChange: this._handlePlacementChange, onPageVisibilityChange: this._handlePageVisibilityChange, ref: this._setPlacementAPI, style: _.default.absoluteFill }, this._renderPlayer()));
                }
                componentWillUnmount() {
                    this._emitter && (this._emitter.unregister(), (this._emitter = null)), this._onErrorUnsubscribe && this._onErrorUnsubscribe();
                }
                _renderPlayer() {
                    const {
                            autoplayGroupOptions: e,
                            dataSaverMode: t,
                            durationMs: i,
                            forceLoop: a,
                            maxLoopCount: s,
                            poster: o,
                            promotedContent: n,
                            source: { variants: l },
                            videoType: c,
                        } = this.props,
                        d = "animated_gif" === c,
                        p = "vine" === c,
                        u = l && l.length ? (d ? "gif" : "media_entity") : "vmap";
                    this._isLooping = !!(a || d || p || (i && i <= this._getLoopingThreshold()));
                    const h = { contentType: u, loop: this._isLooping, maxLoopCount: this._isLooping ? s : void 0, maxLoopingThresholdSec: e ? 6 : void 0, poster: o && o.url, promotedContext: n && (n.impression_id || n.disclosure_type) ? { impressionId: n.impression_id, disclosureType: n.disclosure_type } : void 0, shouldCapBitrate: t, variants: l ? (0, E.rD)(l) : [] };
                    return r.createElement(w, { testID: L }, this._renderHorizonPlayer(h));
                }
                _submitInitialPlacement() {
                    const { heightsReady: e } = this.props,
                        t = e && !this._hasInitialPlacementMeasurement;
                    this._emitter && this._placementRef && t && (this._placementRef.sample(this._handlePlacementChange), (this._hasInitialPlacementMeasurement = !0));
                }
            }
            (O.contextType = g.rC), (O.defaultProps = { autoplay: A.Z.Off, playbackCoordination: k.Tc, playbackPriority: l.W.NORMAL, showControls: !0, dataSaverMode: !1, geolocationPrompt: !0, heightsReady: !0, noAuthHttpClient: D, includeBroadcastEventAssociation: !1 });
            const N = _.default.create({ aspectRatio: { zIndex: void 0 }, aspectRatioDocked: { zIndex: void 0, maxHeight: "70vh" } }),
                M = (0, I.Z)(O);
            var U = i(555492),
                F = i(513588),
                V = i(942893),
                Z = i(625555),
                q = i(71620),
                x = i(668214),
                G = i(558369),
                H = i(109223),
                Y = i(694180),
                B = i(390387),
                z = i(659773),
                W = i(836255),
                Q = i(533128);
            const $ =
                    () =>
                    (e, t, { api: i }) =>
                        i.getHttpClient(),
                j = (e, t) => {
                    const i = t.source && t.source.videoId;
                    return i && "tweet" === i.type ? i.id : void 0;
                },
                X = (e, t) => t.source && t.source.contentId,
                J = (e, t) => {
                    const i = W.Z.createHydratedTweetSelector(j)(e, t),
                        a = (0, G.mz)(e);
                    return !!i && (0, Q.$y)(a, i, Q.d.Autoplay);
                },
                K = (0, x.Z)()
                    .propsFromState(() => ({ dataSaverMode: z.IX, language: B.VT, sourceTweet: W.Z.createHydratedTweetSelector(j), disableAutoplay: J, videoContentId: X }))
                    .adjustStateProps(({ dataSaverMode: e, disableAutoplay: t, language: i, sourceTweet: a, videoContentId: r }) => ({ dataSaverMode: e, disableAutoplay: t, language: i, mediaAvailability: (a && (0, E.DY)(a, r)) || void 0, publisherId: a ? (0, E.Pz)(a) : void 0 }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, q.zr)("INLINE_PLAYER_CONTAINER"), getTwitterAuthedHttpClient: $, logPromotedVideoEvent: Y.iY, tweetAdProvider: H.Q3 }))
                    .withAnalytics(),
                ee = (0, s.cn)((e) =>
                    e(Z.F6)
                        .login()
                        .catch(() => {}),
                ),
                te = (0, F.J)();
            function ie(e) {
                const t = r.useContext(g.rC),
                    i = r.useRef(),
                    s = "broadcast" === e.source.videoId.type && !!t.viewerUserId && t.featureSwitches.isTrue("rweb_video_logged_in_analytics_enabled");
                (0, o.Dv)(s ? ee : te);
                const { createLocalApiErrorHandler: u, getTwitterAuthedHttpClient: h, playbackPriority: _, tweetAdProvider: y, ...m } = e,
                    P = (t) => {
                        const { createLocalApiErrorHandler: i } = e;
                        e.logPromotedVideoEvent(t).catch(i());
                    },
                    b = (t) => {
                        const { category: i, data: a, namespace: r } = t,
                            { analytics: s } = e;
                        r?.action && s.scribe({ ...r, data: { ...a, _category_: i } });
                    },
                    f = r.useMemo(() => h(), [h]),
                    I = ((i) => {
                        const a = { log: b },
                            { analytics: r } = e,
                            o = { log: t.featureSwitches.isTrue("responsive_web_video_promoted_logging_enabled") ? P : c.Z },
                            n = r.contextualScribeNamespace,
                            l = r.contextualScribeData,
                            u = Array.isArray(l.items)
                                ? ((t) => {
                                      const {
                                              analytics: i,
                                              includeBroadcastEventAssociation: a,
                                              source: { videoId: r },
                                          } = e,
                                          { event_id: s } = i.contextualScribeData;
                                      let o;
                                      o = "broadcast" === r.type && r.tweetId ? r.tweetId : "broadcast" === r.type && a && s ? s : r.id;
                                      let n = t.find((e) => e.id === o);
                                      const l = t.find((e) => e.quoted_tweet_id === o);
                                      return l && l.quoted_tweet_id && ((n = V.Z.forQuoteTweet(l.id ? l.id : o, l.quoted_tweet_id)), (n.author_id = l.quoted_author_id)), n;
                                  })(l.items)
                                : void 0,
                            h = { scribeContext: { ...n }, baseScribeItem: u, enableShortFormCompleteLogging: t.featureSwitches.isTrue("responsive_web_video_pcomplete_enabled"), ...(s && { periscopeAuthToken: p.E.authToken(), userType: p.E.userType() }) };
                        return new d.Z(a, o, i, h);
                    })(f),
                    v = (t) => {
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
                return r.createElement(U.Z.Consumer, null, ({ heightsReady: e }) => r.createElement(n.Z.Consumer, null, ({ playbackPriority: t }) => r.createElement(M, (0, a.Z)({}, m, { analytics: I, heightsReady: e, playbackPriority: t === l.W.INELIGIBLE ? t : _, setPlayer: v, tweetAdProvider: y, twitterAuthedHttpClient: f }))));
            }
            const ae = K(ie);
        },
        931162: (e, t, i) => {
            i.d(t, { D: () => s, R: () => r });
            var a = i(202784);
            const r = i(620522).Z,
                s = ({ children: e, fetch: t, prerollDisplayLocation: i }) => {
                    const s = a.useRef({}),
                        o = a.useMemo(() => ({ prerollDisplayLocation: i, refsMap: s.current, fetch: t }), [i, s, t]);
                    return a.createElement(r.Provider, { value: o }, e);
                };
        },
        408686: (e, t, i) => {
            i.d(t, { Qr: () => o, n8: () => s });
            var a = i(803224),
                r = i(411240);
            const s = (e) => {
                    const t = e?.[0]?.placement?.scrollY();
                    return 0 === t ? (0, r.Z)(e, (e) => (e.placement ? e.placement.distanceToTop() : Number.MAX_VALUE)) : (0, r.Z)(e, (e) => (e.placement ? e.placement.distanceToCenter() : Number.MAX_VALUE));
                },
                o = (e) => {
                    const t = e.filter((e) => e.playbackPriority === a.W.DOCKABLE);
                    return t.length ? t[0] : s(e);
                };
        },
        519896: (e, t, i) => {
            i.d(t, { A7: () => r, Nw: () => s, Yf: () => a });
            const a = "instreamVideo",
                r = `rweb/${a}`,
                s = Object.freeze({ TIMELINE_HOME: "TIMELINE_HOME", SEARCH_TWEETS: "SEARCH_TWEETS", PROFILE_TWEETS: "PROFILE_TWEETS", OTHER: "OTHER" });
        },
        109223: (e, t, i) => {
            i.d(t, { jc: () => C, Q3: () => k, C: () => w });
            i(571372), i(136728);
            var a = i(329491),
                r = i(962741),
                s = i(499627),
                o = i(312771),
                n = i(836255),
                l = i(519896),
                c = i(782261),
                d = i(276563);
            function p(e) {
                if (null == e) return null;
                const t = (function (e) {
                        const { card: t, extended_entities: i = {} } = e,
                            a =
                                !!i.media?.length &&
                                i.media.some((e) => {
                                    const t = e.additional_media_info;
                                    return t && t.monetizable;
                                }),
                            r = c.Z.hasMixedMedia(e);
                        return { hasMonetizableMedia: a, hasMultipleMediaItems: r, hasAmplifyCard: !!t && t.name === d.default.CardNames.AMPLIFY && !0 === d.default.getBindingValue(t.binding_values, "dynamic_ads"), hasPeriscopeCard: t?.name === d.default.CardNames.PERISCOPE_BROADCAST, hasBroadcastCard: t?.name === d.default.CardNames.BROADCAST, hasEventCard: !!t && t.name === d.default.CardNames.LIVE_EVENT && ("video" === d.default.getBindingValue(t.binding_values, "media_type") || "broadcast" === d.default.getBindingValue(t.binding_values, "media_type")) };
                    })(e),
                    i = (a = t).hasMonetizableMedia || a.hasAmplifyCard || a.hasPeriscopeCard || a.hasBroadcastCard || a.hasEventCard;
                var a;
                const r =
                        i &&
                        (function (e) {
                            const t = e.hasAmplifyCard || e.hasPeriscopeCard || e.hasBroadcastCard || e.hasEventCard;
                            return e.hasMonetizableMedia && !t;
                        })(t),
                    { hasMultipleMediaItems: s } = t;
                return { hasMultipleMediaItems: s, legacy: i, redesign: r };
            }
            var u = i(516951),
                h = i(541837),
                _ = i(615656),
                y = i(71620),
                m = i(917799);
            const P = "FETCH_PREROLLS",
                b = (0, m.dg)(l.A7, P),
                g = 10;
            function f(e) {
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
            function I(e, t, i, a, r) {
                if (!Array.isArray(e) || 0 === e.length) return Promise.resolve();
                let s = [];
                const o = [s];
                return (
                    e.forEach((e) => {
                        s.length === g && ((s = []), o.push(s)), s.push(e);
                    }),
                    Promise.all(
                        o.map((e) =>
                            (function (e, t, i, a, r) {
                                if (!Array.isArray(e) || 0 === e.length) return Promise.resolve();
                                const s = { eligibleTweets: e, prerollDisplayLocation: r };
                                t && (s.trigger_preroll = t);
                                const o = (0, m._O)(i, { request: a.withEndpoint(h.Z).fetch, params: s }),
                                    n = i((0, y.zr)(P)({ showToast: !1, [_.ZP.AccessDeniedByBouncer]: { customAction: u.Z } }));
                                return o({ actionTypes: b, context: "FETCH_PREROLLS" }).catch(n);
                            })(e, t, i, a, r),
                        ),
                    ).then((e) => {
                        let t = {};
                        e.forEach((e) => {
                            e && e.prerolls && (t = { ...t, ...f(e) });
                        });
                        const a = { type: C, payload: { ...{ dynamicIVCollection: t }, prerollDisplayLocation: r } };
                        i(a);
                    })
                );
            }
            const v = { fetchStatus: o.ZP.NONE, eligibleTweets: [], promotedMetadataCollection: {}, prerollMetadataCollection: {}, dynamicIVCollection: {}, prerollEligibilityCollection: {} },
                E = "rweb/instreamVideo/DYNAMIC_RESET",
                A = "rweb/instreamVideo/STORE_METADATA",
                C = "rweb/instreamVideo/DYNAMIC_STORE",
                T = { [l.Nw.OTHER]: v };
            s.Z.register({
                [l.Yf]: function (e = T, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case A:
                            if (t.payload) {
                                const { eligibleTweets: i, prerollDisplayLocation: a, prerollEligibilityCollection: r, prerollMetadataCollection: s, promotedMetadataCollection: o } = t.payload;
                                return { ...e, [a]: { ...v, ...e[a], eligibleTweets: i, prerollMetadataCollection: s, promotedMetadataCollection: o, prerollEligibilityCollection: r } };
                            }
                            break;
                        case C:
                            if (t.payload) {
                                const { dynamicIVCollection: i, prerollDisplayLocation: a } = t.payload;
                                return { ...e, [a]: { ...v, ...e[a], dynamicIVCollection: i } };
                            }
                            break;
                        case E:
                            if (t.payload) {
                                const { prerollDisplayLocation: i } = t.payload;
                                return { ...e, [i]: { ...v, ...e[i], dynamicIVCollection: {} } };
                            }
                            break;
                        default:
                            return e;
                    }
                    return e;
                },
            });
            const S = (e, t) => e[l.Yf][t] || v;
            function w(e, t = l.Nw.OTHER) {
                return (i, a, { api: s, featureSwitches: o }) => {
                    if (!Array.isArray(e)) throw new Error("unable to fetch prerolls without timeline entries");
                    if (e.length < 1) return Promise.resolve();
                    const l = a(),
                        c = [],
                        d = {},
                        u = {},
                        h = {};
                    e.forEach((e) => {
                        if (!e.content || e.type !== r.ZP.Tweet) return;
                        const t = e.content,
                            i = n.Z.selectHydrated(l, t.id);
                        if (!i) return;
                        const a = i,
                            { prerollMetadata: s, promotedMetadata: o } = t;
                        if (o) {
                            const { adMetadataContainer: e, disclosureType: t, impressionId: i } = o;
                            (a.promoted_content = { adMetadataContainer: e, disclosure_type: t, impression_id: i }), (u[a.id_str] = o);
                        }
                        const _ = p(a),
                            y = _ && _.hasMultipleMediaItems;
                        (h[a.id_str] = _), s?.preroll?.mediaInfo && !y && (d[a.id_str] = s), _?.legacy && !y && c.push(a);
                    });
                    i({ type: A, payload: { ...{ eligibleTweets: c, prerollMetadataCollection: d, promotedMetadataCollection: u, prerollEligibilityCollection: h, prerollDisplayLocation: t } } });
                    return I(
                        c.filter((e) => void 0 === d[e.id_str]),
                        null,
                        i,
                        s,
                        t,
                    );
                };
            }
            function k(e, t = l.Nw.OTHER) {
                return (i, r, { api: s, featureSwitches: o }) => {
                    if (e) {
                        const o = S(r(), t),
                            { dynamicIVCollection: n, eligibleTweets: l, prerollEligibilityCollection: c, prerollMetadataCollection: d, promotedMetadataCollection: p } = o,
                            u = n[e],
                            h = p[e],
                            _ = c[e];
                        if (u) {
                            i({ type: E, payload: { prerollDisplayLocation: t } });
                            const { dynamic_preroll_type: e, preroll_id: r } = u;
                            return (
                                I(l, { preroll_id: r, dynamic_preroll_type: e }, i, s, t),
                                (function (e, t, i, r) {
                                    const s = { adId: t.preroll_id, advertiserName: null, advertiserProfileImageUrl: null, mediaInfo: { call_to_action: null, duration_millis: t.media_info.duration_millis, publisher_id_str: t.media_info.publisher_id_str, variants: t.media_info.variants }, promotedContent: { impressionId: void 0, disclosureType: void 0 }, videoAnalyticsScribePassthrough: t.videoAnalyticsScribePassthrough };
                                    if ((t.promoted_content && !i && ((s.promotedContent.impressionId = t.promoted_content.impression_id), (s.promotedContent.disclosureType = t.promoted_content.disclosure_type)), t.media_info.call_to_action)) {
                                        const { type: e, url: r } = t.media_info.call_to_action,
                                            o = (0, a.b)(r, i?.clickTrackingInfo),
                                            n = i?.clickTrackingInfo ? { original_url: r, embedded_url: o, click_tracking_info: i.clickTrackingInfo, embed_status: (0, a.R)(r, i.clickTrackingInfo) } : void 0;
                                        s.mediaInfo.call_to_action = { type: e, url: o, click_tracking_embed_details: n };
                                    }
                                    if (t.media_info.render_ad_by_advertiser_name) {
                                        const { advertiser_name: e, advertiser_profile_image_url: i } = t.media_info;
                                        (s.advertiserName = e), (s.advertiserProfileImageUrl = i);
                                    }
                                    if (r?.redesign) {
                                        (s.shouldAutoAdvance = !1), (s.useRedesignedPrerollUx = !0);
                                        const { advertiser_name: e, advertiser_profile_image_url: i } = t.media_info;
                                        (s.advertiserName = e), (s.advertiserProfileImageUrl = i);
                                    }
                                    return s;
                                })(0, u, h, _)
                            );
                        }
                        const y = d[e];
                        if (y) {
                            const e = (function (e, t, i, r) {
                                if (!t.preroll || !t.preroll.mediaInfo) return null;
                                const { mediaInfo: s, prerollId: o } = t.preroll,
                                    n = s.videoVariants.map((e) => ({ url: e.url, content_type: e.contentType, bitrate: e.bitrate })),
                                    l = { adId: o, advertiserName: null, advertiserProfileImageUrl: null, mediaInfo: { call_to_action: void 0, duration_millis: s.durationMillis, publisher_id_str: s.publisherId, variants: n }, promotedContent: { impressionId: void 0, disclosureType: void 0 } };
                                if (s.callToAction) {
                                    const { type: e, url: t } = s.callToAction,
                                        r = (0, a.b)(t, i?.clickTrackingInfo),
                                        o = i?.clickTrackingInfo ? { original_url: t, embedded_url: r, click_tracking_info: i.clickTrackingInfo, embed_status: (0, a.R)(t, i.clickTrackingInfo) } : void 0;
                                    l.mediaInfo.call_to_action = { type: e, url: r, click_tracking_embed_details: o };
                                }
                                if (s.renderAdByAdvertiserName) {
                                    const { advertiserName: e, advertiserProfileImageUrl: t } = s;
                                    (l.advertiserName = e), (l.advertiserProfileImageUrl = t);
                                }
                                if (r?.redesign) {
                                    (l.shouldAutoAdvance = !1), (l.useRedesignedPrerollUx = !0);
                                    const { advertiserName: e, advertiserProfileImageUrl: t } = s;
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
            i.d(t, { cM: () => m, dS: () => y, iY: () => P });
            var a = i(370751),
                r = i(399896),
                s = i(663550),
                o = i(499627),
                n = i(917799);
            const l = {},
                c = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                d = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                p = (0, a.Z)([s.dx.IMPRESSION, s.dx.DWELL]),
                u = (0, a.Z)([s.AJ.TREND_VIEW, s.AJ.SPOTLIGHT_IMPRESSION]),
                h = (e) => ({ payload: { eventKey: e }, type: d });
            const _ = (e, t) => !!e.promotedContent[t],
                y =
                    (e) =>
                    (t, i, { api: a }) => {
                        const { event: s, impression_id: o, promoted_trend_id: l } = e,
                            d = `trend-${l}-${s}`;
                        if (u.has(s) && _(i(), d)) return Promise.resolve();
                        const p = { promoted_trend_id: l, event: s, impression_id: o };
                        return (0, n._O)(t, { params: p, request: a.withEndpoint(r.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: p }, (e, t) => {
                            if (!t && u.has(s)) return [h(d)];
                        });
                    },
                m =
                    ({ disclosureType: e, itemId: t, itemType: i, params: a }) =>
                    (s, o, { api: l }) => {
                        const { event: d, impression_id: u } = a,
                            y = `${i}-${t ?? "undefined"}-${u ?? "undefined"}-${d ?? "undefined"}`;
                        if (p.has(d) && _(o(), y)) return Promise.resolve();
                        const m = e && "earned" === e.toLowerCase() ? "1" : null,
                            P = { ...a, earned: m, epoch_ms: Date.now() };
                        return (0, n._O)(s, { params: P, request: l.withEndpoint(r.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: P }, (e, t) => {
                            if (!t && p.has(d)) return [h(y)];
                        });
                    },
                P =
                    (e) =>
                    (t, i, { api: a }) =>
                        (0, n._O)(t, { params: e, request: a.withEndpoint(r.Z).log })({ actionTypes: c, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            o.Z.register({
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
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.InlinePlayer-9f4db315.2797bb2a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"],
    {
        396682: (e, t, i) => {
            i.d(t, { Z: () => G });
            i(571372), i(136728);
            var s = i(726426),
                a = i.n(s),
                r = i(154462),
                o = i(977425),
                h = i(470833),
                n = i(449034),
                d = i(62600),
                l = i(22525),
                c = (i(875640), i(694898), i(38857), i(540171), i(157093), i(265688), i(270315), i(592529), i(86943), i(691157), i(55736)),
                p = i(923863),
                u = i(197889),
                g = i(449095),
                T = i(834025),
                v = i(150078),
                y = i(303186),
                m = i(590436),
                f = i(297310),
                E = i(196282),
                P = i(789403),
                b = i(104591),
                C = i(228698),
                I = i(842337),
                S = i(486934),
                k = i(833828),
                R = i(418577),
                L = i(773975);
            let _;
            const D = 1,
                A = 2,
                w = 3,
                x = 4;
            function O(e) {
                return void 0 !== e.getTime ? e.getTime() : e;
            }
            const J = class {
                constructor(e, t, i, s, a, r = {}) {
                    (this.onLoadStart = () => {
                        this.playerRenderPromise || this.dispatchPlayerReady();
                    }),
                        (this.domElement = e),
                        (this.lastRequestedSeekTarget = void 0),
                        (this.playerId = t),
                        (this.hydraExperienceId = r.hydraExperienceId),
                        (this.store = i),
                        (this.reload = s),
                        (this.showControls = r.showControls),
                        (this.objectFitVideo = r.objectFitVideo),
                        (this.playerHandlesRotations = r.playerHandlesRotations),
                        (this.language = r.language),
                        (this.precache = r.precache),
                        (this.videoEl = r.videoEl),
                        (this.ariaLabel = r.accessibilityLabel || r["aria-label"]),
                        (this.id3Disabled = !1),
                        (this.activeCues = {}),
                        (this.initialOnPlay = !0),
                        (this.shouldRetryAutoplayMuted = r.shouldRetryAutoplayMuted),
                        (this.enablePiP = r.enablePiP || !1),
                        (this.liveBroadcastRewindEnabled = r.liveBroadcastRewindEnabled),
                        (this.enableVideoPlayerCaptionRendering = r.enableVideoPlayerCaptionRendering || !1),
                        (this.shouldCapBitrate = r.shouldCapBitrate),
                        (this.captionDefaultOffset = { bottom: 0 }),
                        (this.captionStyle = r.captionStyle),
                        (this.generateDrmTokenCallback = r.generateDrmTokenCallback),
                        (0, c.G6)() || ((this.smartBufferingExperimentEnabled = this.store.dispatch((0, S.mu)(this.playerId, b.Tq))), (this.hlsJsSegmentsToPrebuffer = this.precache ? f.dN : 0)),
                        (this.isHlsWorkerEnabled = i.dispatch((0, S.mu)(t, b.V$)) || !1),
                        (this.repositionedCaptionsEnabled = this.enableVideoPlayerCaptionRendering && i.dispatch((0, S.mu)(t, b.Ao))),
                        i.dispatch((0, S.mu)(t, b.GN)),
                        (this.isTranscribedCaptionsEnabled = i.dispatch((0, S.mu)(t, b.Q5))),
                        (0, c.G6)() ? (this.enableSafariMse = i.dispatch((0, S.mu)(t, b.uj))) : (this.enableSafariMse = !1),
                        (this.liveAdDomainRegex = /t.lv.twimg.com$|ton.twitter.com$/),
                        (this.logger = a),
                        (this.onTimeUpdate = this.onTimeUpdate.bind(this)),
                        (this.onCanPlay = this.onCanPlay.bind(this)),
                        (this.onPlay = this.onPlay.bind(this)),
                        (this.onPlaying = this.onPlaying.bind(this)),
                        (this.onPause = this.onPause.bind(this)),
                        (this.onVolumeChange = this.onVolumeChange.bind(this)),
                        (this.onPlaybackRateChange = this.onPlaybackRateChange.bind(this)),
                        (this.onSeeked = this.onSeeked.bind(this)),
                        (this.onSeeking = this.onSeeking.bind(this)),
                        (this.onEnded = this.onEnded.bind(this)),
                        (this.onError = this.onError.bind(this)),
                        (this.onHlsJsError = this.onHlsJsError.bind(this)),
                        (this.onId3CueWithInfo = this.onId3CueWithInfo.bind(this)),
                        (this.onId3CueWithData = this.onId3CueWithData.bind(this)),
                        (this.onFragmentLoading = this.onFragmentLoading.bind(this)),
                        (this.onFragmentParsingInitSegment = this.onFragmentParsingInitSegment.bind(this)),
                        (this.onLevelSwitching = this.onLevelSwitching.bind(this)),
                        (this.onLevelLoaded = this.onLevelLoaded.bind(this)),
                        (this.onBufferAppended = this.onBufferAppended.bind(this)),
                        (this.onBufferEOS = this.onBufferEOS.bind(this)),
                        (this.onBufferStart = this.onBufferStart.bind(this)),
                        (this.onManifestParsed = this.onManifestParsed.bind(this)),
                        (this.onEnterPictureInPicture = this.onEnterPictureInPicture.bind(this)),
                        (this.onExitPictureInPicture = this.onExitPictureInPicture.bind(this)),
                        (this.render = this.render.bind(this)),
                        (this.dispatchPlayerReady = this.dispatchPlayerReady.bind(this)),
                        (this.hlsJsPlay = this.hlsJsPlay.bind(this)),
                        (this.handleCueChange = this.handleCueChange.bind(this)),
                        (this.unsubscribeFromStore = this.store.subscribe(this.render)),
                        (this.playPromise = Promise.resolve()),
                        this.renderVideoTag(),
                        this.render();
                }
                teardownPlayer({ forceTeardown: e = !1, renderNewPlayer: t = !0 } = { forceTeardown: !1, renderNewPlayer: !0 }) {
                    if (!e && document.pictureInPictureElement === this.videoTag) return void (this.teardownRequested = !0);
                    this.trackDataUsage();
                    const i = this.hlsJs;
                    if (i) {
                        this.smartBufferingExperimentEnabled && (this.hlsJs.off(_.Events.BUFFER_APPENDED, this.onBufferAppended), this.hlsJs.off(_.Events.BUFFER_EOS, this.onBufferEOS)), this.hlsJs.off(_.Events.ERROR, this.onHlsJsError), this.hlsJs.off(_.Events.FRAG_LOADING, this.onFragmentLoading), this.hlsJs.off(_.Events.FRAG_PARSING_INIT_SEGMENT, this.onFragmentParsingInitSegment), this.hlsJs.off(_.Events.LEVEL_SWITCHING, this.onLevelSwitching), this.hlsJs.off(_.Events.LEVEL_LOADED, this.onLevelLoaded), this.hlsJs.off(_.Events.MANIFEST_PARSED, this.onManifestParsed), i.detachMedia();
                        const e = () => {
                            i.destroy();
                        };
                        (this.hlsJs = void 0), this.playPromise.then(e).catch(e);
                    }
                    if (this.videoTag) {
                        if ((this.stopListeningForId3Tags(), this.videoTag.removeEventListener("timeupdate", this.onTimeUpdate), this.videoTag.removeEventListener("canplay", this.onCanPlay), this.videoTag.removeEventListener("play", this.onPlay), this.videoTag.removeEventListener("playing", this.onPlaying), this.videoTag.removeEventListener("pause", this.onPause), this.videoTag.removeEventListener("volumechange", this.onVolumeChange), this.videoTag.removeEventListener("ratechange", this.onPlaybackRateChange), this.videoTag.removeEventListener("seeked", this.onSeeked), this.videoTag.removeEventListener("seeking", this.onSeeking), this.videoTag.removeEventListener("ended", this.onEnded), this.videoTag.removeEventListener("error", this.onError), this.videoTag.removeEventListener("waiting", this.onBufferStart), this.videoTag.removeEventListener("loadstart", this.onLoadStart), this.videoTag.removeEventListener("enterpictureinpicture", this.onEnterPictureInPicture), this.videoTag.removeEventListener("leavepictureinpicture", this.onExitPictureInPicture), this.videoTag.textTracks)) {
                            (this.videoTag.textTracks.onaddtrack = void 0), (this.videoTag.textTracks.onchange = void 0);
                            for (let e = 0; e < this.videoTag.textTracks.length; e++) this.videoTag.textTracks[e].oncuechange && (this.videoTag.textTracks[e].oncuechange = void 0);
                        }
                        try {
                            this.videoTag.pause(), this.videoTag.removeAttribute("src"), this.videoTag.removeAttribute("poster"), this.videoTag.load();
                        } catch (e) {}
                        this.videoTag.parentNode && this.videoTag.parentNode.removeChild(this.videoTag), (this.videoTag = void 0);
                    }
                    (this.renderedTrackId = void 0), (this.hasEndedOnce = !1), (this.activeCues = void 0), t && (this.renderVideoTag(), (this.activeCues = {}));
                }
                teardown() {
                    this.teardownPlayer({ renderNewPlayer: !1 }), this.domElement.parentNode && this.domElement.parentNode.removeChild(this.domElement), this.unsubscribeFromStore();
                }
                getVideoTag() {
                    return this.videoTag;
                }
                renderVideoTag() {
                    (this.videoTag = this.videoEl || document.createElement("video")), this.videoTag.setAttribute("preload", "none"), this.videoTag.setAttribute("tabindex", "-1"), this.videoTag.setAttribute("playsinline", ""), this.showControls && this.videoTag.setAttribute("controls", ""), this.ariaLabel && this.videoTag.setAttribute("aria-label", this.ariaLabel), this.enablePiP || this.videoTag.setAttribute("disablePictureInPicture", ""), (this.videoTag.style.width = "100%"), (this.videoTag.style.height = "100%"), (this.videoTag.style.position = "absolute"), (this.videoTag.style.backgroundColor = "black"), this.videoTag.addEventListener("loadstart", this.onLoadStart, !1), this.videoTag.addEventListener("timeupdate", this.onTimeUpdate), this.videoTag.addEventListener("play", this.onPlay), this.videoTag.addEventListener("pause", this.onPause), this.videoTag.addEventListener("volumechange", this.onVolumeChange), this.videoTag.addEventListener("ratechange", this.onPlaybackRateChange), this.videoTag.addEventListener("seeked", this.onSeeked), this.videoTag.addEventListener("seeking", this.onSeeking), this.videoTag.addEventListener("ended", this.onEnded), this.videoTag.addEventListener("error", this.onError), this.videoTag.addEventListener("playing", this.onPlaying), this.videoTag.addEventListener("waiting", this.onBufferStart), this.videoTag.addEventListener("canplay", this.onCanPlay), this.videoTag.addEventListener("enterpictureinpicture", this.onEnterPictureInPicture), this.videoTag.addEventListener("leavepictureinpicture", this.onExitPictureInPicture), this.videoTag.textTracks && ((this.videoTag.textTracks.onaddtrack = this.handleTrackAdded.bind(this)), (this.videoTag.textTracks.onchange = this.handleTrackChanged.bind(this))), (this.hasEndedOnce = !1);
                }
                onTimeUpdate() {
                    if (!this.videoTag) return;
                    if (void 0 === this.dateTimeAnchor && void 0 !== this.videoTag.getStartDate) {
                        const e = this.videoTag.getStartDate();
                        e && (this.dateTimeAnchor = { streamTimeMs: 0, absoluteTimeMs: e.getTime() });
                    }
                    const e = 1e3 * this.videoTag.currentTime;
                    let t;
                    void 0 !== this.dateTimeAnchor && (t = e - this.dateTimeAnchor.streamTimeMs + this.dateTimeAnchor.absoluteTimeMs);
                    let i = 0;
                    const s = this.videoTag.currentSrc;
                    if (s) {
                        const e = this.getCurrentTrack();
                        if (void 0 === e) return;
                        const t = e.variants;
                        if (void 0 === t) return;
                        for (let e = 0; e < t.length; e++)
                            if (t[e].src === s) {
                                i = e;
                                break;
                            }
                    }
                    this.store.dispatch(
                        (0, L.Ky)(
                            this.playerId,
                            e,
                            t,
                            (() => {
                                const { videoTag: e } = this;
                                return "number" == typeof e.duration && isFinite(e.duration) ? 1e3 * e.duration : e.seekable && e.seekable.length > 0 ? 1e3 * e.seekable.end(0) : 0;
                            })(),
                            this.hasCaptions(),
                            i,
                            this.videoTag.videoHeight,
                            this.videoTag.videoWidth,
                        ),
                    ),
                        this.trackDataUsage();
                    const a = this.getPlayerState()?.controls?.playbackTimeRange;
                    if (a) {
                        const e = this.clipScrubTime(a.startTimeS),
                            t = this.clipScrubTime(a.endTimeS),
                            i = window.isFinite(e) && window.isFinite(t) && e < t,
                            s = this.videoTag.currentTime < e || this.videoTag.currentTime > t;
                        i && s && !this.seeking && (this.videoTag.currentTime = e);
                    }
                }
                trackDataUsage() {
                    (0, k.gu)(this.playerId, (e) => {
                        const t = e.getAndReset();
                        t > 0 && this.store.dispatch(C.Vi(this.playerId, t));
                    });
                }
                checkInitialSeek() {
                    const { videoTag: e } = this,
                        t = this.getInitialTimeCode();
                    this.isSeekable(t) && !this.hasInitialSeeked && t > -1 && ((this.hasInitialSeeked = !0), (e.currentTime = t));
                }
                onCanPlay() {
                    this.checkInitialSeek(), this.onBufferEnd();
                }
                onPlay() {
                    const e = this.videoTag.duration;
                    this.isLooping || !this.isLive || (this.liveBroadcastRewindEnabled && !this.initialOnPlay) || ((this.initialOnPlay = !1), this.hlsJs ? this.hlsJs.liveSyncPosition && (this.videoTag.currentTime = this.hlsJs.liveSyncPosition) : e && window.isFinite(e) && (this.videoTag.currentTime = e));
                }
                onPlaying() {
                    this.videoTag.paused || ((this.isEnded = !1), (this.reloadTimecode = void 0), this.store.dispatch(C.pm(this.playerId)), this.onBufferEnd(), this.onTimeUpdate());
                }
                onPause() {
                    this.videoTag.ended || this.store.dispatch(C.x9(this.playerId)), this.onBufferEnd();
                }
                onVolumeChange() {
                    this.store.dispatch(C.KE(this.playerId, this.videoTag.muted, this.videoTag.volume)), (0, T.E)("volume", this.videoTag.volume);
                }
                onPlaybackRateChange() {
                    this.store.dispatch(C.M8(this.playerId, this.videoTag.playbackRate));
                }
                onSeeking() {
                    this.seeking || this.isLooping || ((this.seeking = !0), this.store.dispatch(C.U9(this.playerId))), this.store.dispatch((0, r.Nu)(this.hydraExperienceId)), (this.hasInitialSeeked = !0);
                }
                onSeeked() {
                    (this.seeking = !1), (this.isEnded = !1), (this.isLooping = !1), (this.lastRequestedSeekTarget = void 0), this.store.dispatch(C.BN(this.playerId, this._lastTargetScrubToFraction)), this.onBufferEnd(), this.updateRotation();
                }
                onEnterPictureInPicture() {
                    this.store.dispatch(C.PY(this.playerId, !0));
                }
                onExitPictureInPicture() {
                    this.teardownRequested && this.teardownPlayer({ forceTeardown: !0 }), this.store.dispatch(C.PY(this.playerId, !1));
                }
                updateRotation() {
                    const e = (this.getId3Track() || {}).cues || [],
                        t = e.length,
                        i = this.videoTag.currentTime;
                    let s, a, r;
                    for (s = 0; s < t && e[s].startTime <= i; s++) (a = e[s]), "TXXX" === a.value.key && "JSONMetadata" === a.value.info && (r = a);
                    if (r)
                        try {
                            const e = JSON.parse(r.value.data),
                                t = this.normalizeRotation(e.rotation),
                                i = this.getCurrentTrack();
                            void 0 === t || isNaN(t) || t === i.rotation || this.store.dispatch((0, L.PC)(this.playerId, t));
                            const s = !!e.blank;
                            if (!isNaN(t)) {
                                const e = this.getCurrentTrack()?.blank;
                                s !== e && this.store.dispatch((0, L.ho)(this.playerId, s));
                            }
                        } catch (e) {}
                }
                onEnded() {
                    this.onBufferEnd(), (this.isEnded = this.hasEndedOnce = !0), this.store.dispatch((0, L.Eo)(this.playerId));
                    const e = this.getCurrentTrack();
                    if (void 0 === e) return;
                    const { shouldLoop: t } = e;
                    if (((this.shouldLoop = t), this.shouldLoop)) {
                        this.isLooping = !0;
                        const e = this.videoTag.play() || Promise.resolve();
                        this.playPromise = e.catch(() => {});
                    }
                    const { isLive: i, isLiveTimecode: s } = this.getCurrentTrack();
                    i && (s && this.reload({ requestedTimecode: -1, autoPlay: !0 }), this.reload()), (this.hasInitialSeeked = !1);
                }
                onHlsJsError(e, t, i) {
                    let s = i.response && i.response.code;
                    const a = i.networkDetails,
                        r = !(403 !== s || !a) && (0, u.r)(a);
                    if (i.fatal || r) {
                        this.teardownPlayer();
                        const t = "broadcast" === e || "live" === e || "periscope" === e;
                        403 === s ? (r && t ? this.store.dispatch((0, I.cJ)(this.playerId, new Error(P.Z.LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR))) : r ? this.store.dispatch((0, I.cJ)(this.playerId, new Error(P.Z.EUROPEAN_COPYRIGHT_VIOLATION))) : t ? this.store.dispatch((0, I.cJ)(this.playerId, new Error(P.Z.LIVE_VIDEO_GEOBLOCK_ERROR))) : this.store.dispatch((0, I.cJ)(this.playerId, new Error(P.Z.MEDIA_FORBIDDEN)))) : ((s = s ? `:${s}` : ""), this.store.dispatch((0, I.cJ)(this.playerId, new Error(`${i.type}:${i.details}${s}`))));
                    } else i.details === _.ErrorDetails.LEVEL_SWITCH_ERROR && this.store.dispatch((0, I.$w)(this.playerId));
                }
                onError(e, t) {
                    if (!this.videoTag.error) return;
                    const { code: i } = this.videoTag.error;
                    let s;
                    switch (i) {
                        case D:
                            s = P.Z.MEDIA_ABORTED;
                            break;
                        case A:
                            s = P.Z.MEDIA_NETWORK_ERROR;
                            break;
                        case w:
                            s = P.Z.MEDIA_DECODE_ERROR;
                            break;
                        case x:
                            s = P.Z.MEDIA_SRC_INVALID_ERROR;
                            break;
                        default:
                            s = P.Z.MEDIA_UNKNOWN_CODE_ERROR;
                    }
                    const a = (0, k.Sv)(this.playerId);
                    s === P.Z.MEDIA_SRC_INVALID_ERROR && a && (0, c.G6)()
                        ? (0, u._)(a, this.videoTag.currentSrc).then((e) => {
                              e ? this.store.dispatch((0, I.cJ)(this.playerId, new Error(P.Z.EUROPEAN_COPYRIGHT_VIOLATION))) : this.store.dispatch((0, I.cJ)(this.playerId, new Error(s))), this.teardownPlayer();
                          })
                        : (this.store.dispatch((0, I.cJ)(this.playerId, new Error(s))), this.teardownPlayer());
                }
                normalizeRotation(e) {
                    const t = (90 * Math.floor((Math.floor(e) + 45) / 90)) % 360;
                    return 270 === t ? -90 : -270 === t ? 90 : t;
                }
                isMissingDataProp(e) {
                    let t;
                    for (const i of e)
                        if ("TXXX" === i.value.key) {
                            t = i;
                            break;
                        }
                    return t && "" === t.value.data && /\[.*\]|\{.*\}$/.test(t.value.info);
                }
                onId3CueWithInfo(e) {
                    const t = /(\[|\{)/,
                        i = e.currentTarget.activeCues,
                        s = this.activeCues;
                    this.activeCues = {};
                    for (const e of i) {
                        const { info: i, key: a } = e.value,
                            r = [e.startTime, a, i].join("|");
                        if (((this.activeCues[r] = !0), !s[r] && "TXXX" === a)) {
                            const e = i.search(t);
                            if (-1 !== e) {
                                const t = i.slice(0, e),
                                    s = i.slice(e);
                                this.parseId3Data(t, s);
                            }
                        }
                    }
                }
                onId3CueWithData(e) {
                    const t = e.currentTarget.activeCues,
                        i = this.activeCues;
                    this.activeCues = {};
                    const s = [];
                    for (const e of t) {
                        const { data: t, info: a, key: r } = e.value,
                            o = [e.startTime, r, a, t].join("|");
                        (this.activeCues[o] = !0), i[o] || ("TXXX" === r && this.parseId3Data(a, t), e.value && s.push(e.value));
                    }
                    this.store.dispatch((0, L.RR)(this.playerId, s));
                }
                parseId3Data(e, t) {
                    try {
                        const i = JSON.parse(t);
                        if ("JSONMetadata" === e) {
                            const e = this.normalizeRotation(i.rotation);
                            isNaN(e) || this.store.dispatch((0, L.PC)(this.playerId, e));
                            const t = !!i.blank;
                            if (!isNaN(e)) {
                                const e = this.getCurrentTrack()?.blank;
                                t !== e && this.store.dispatch((0, L.ho)(this.playerId, t));
                            }
                            this.store.dispatch((0, L.$9)(this.playerId, i));
                        } else "HydraAudioLevel" === e ? this.store.dispatch((0, r.S_)(this.hydraExperienceId, i)) : "HydraParticipants" === e && this.store.dispatch((0, r.eu)(this.hydraExperienceId, i));
                    } catch (e) {}
                }
                onBufferAppended(e, t) {
                    if (0 === this.pendingSegments) {
                        const e = this.getPlayerState(),
                            { controls: t, hasPlaybackStarted: i, nextTrackIds: s } = e,
                            a = t?.playState === C.EX.PLAY_REQUESTED;
                        if (((this.bufferedSegments += 1), !i && !a && this.hlsJs)) {
                            this.prebufferedSegments += 1;
                            const e = s && 0 !== s.length;
                            this.prebufferedSegments !== this.expectedSegments || e ? (this.prebufferedSegments === f.dN || (this.prebufferedSegments === this.expectedSegments && e)) && ((this.maximumBufferLength = this.hlsJs.config.maxMaxBufferLength = 0), this.store.dispatch((0, R.HP)(this.playerId, R.BufferStateRequest.PREBUFFERING_COMPLETED, 0))) : this.store.dispatch((0, R.HP)(this.playerId, R.BufferStateRequest.BUFFERING_COMPLETED));
                        }
                    }
                    this.pendingSegments = t?.pending;
                }
                onBufferEOS(e, t) {
                    const { bufferingStatus: i, nextTrackIds: s } = this.getPlayerState(),
                        a = i === R.BufferStateRequest.BUFFERING_COMPLETED,
                        r = s && 0 !== s.length;
                    this.bufferedSegments !== this.expectedSegments || a || r || !this.hlsJs || this.store.dispatch((0, R.HP)(this.playerId, R.BufferStateRequest.BUFFERING_COMPLETED));
                }
                onFragmentLoading(e, t) {
                    void 0 !== t && void 0 !== t.frag && t.frag.programDateTime && (this.dateTimeAnchor = { streamTimeMs: 1e3 * t.frag.start, absoluteTimeMs: O(t.frag.programDateTime) });
                }
                onFragmentParsingInitSegment(e, t) {
                    if (void 0 !== t && void 0 !== t.frag && void 0 !== t.frag.level && void 0 !== this.hlsJs) {
                        const e = this.hlsJs.levels[t.frag.level];
                        void 0 !== e && void 0 !== e.details && void 0 !== e.details.programDateTime && void 0 !== e.details.fragments && void 0 !== e.details.fragments[0] && (this.dateTimeAnchor = { streamTimeMs: 1e3 * e.details.fragments[0].start, absoluteTimeMs: O(e.details.programDateTime) });
                    }
                }
                onLevelSwitching(e, t) {
                    const i = this.hlsJs?.levels?.[t.level]?.bitrate;
                    void 0 !== i && this.store.dispatch((0, L.FI)(this.playerId, i, this.hlsJs.bandwidthEstimate));
                }
                onLevelLoaded(e, t) {
                    if (this.hlsJs && !this.maximumBufferLength) {
                        const e = t?.details?.targetduration;
                        if (((this.expectedSegments = t?.details?.fragments?.length), e)) {
                            const t = e * this.hlsJsSegmentsToPrebuffer;
                            (this.maximumBufferLength = this.hlsJs.config.maxMaxBufferLength = t), this.store.dispatch((0, R.t_)(this.playerId, e));
                        }
                    }
                }
                onBufferStart() {
                    const e = !this.hasEndedOnce || (this.videoTag && this.videoTag.currentTime >= 2);
                    (this.shouldLoop && !e) ||
                        ((this.buffering = !0),
                        setTimeout(() => {
                            this.buffering && this.store.dispatch((0, L.Iu)(this.playerId));
                        }, 20));
                }
                onBufferEnd() {
                    this.buffering && ((this.buffering = !1), this.store.dispatch((0, L.qV)(this.playerId)));
                }
                getFilteredCaptionTrack() {
                    const e = this.videoTag.textTracks || [];
                    if (!this.isTranscribedCaptionsEnabled) {
                        return Array.from(e).filter((e) => !e.label?.includes("auto-generated"));
                    }
                    return e;
                }
                getCaptionsTrack() {
                    if (this.selectedTextTrack) return this.selectedTextTrack;
                    const e = this.getFilteredCaptionTrack();
                    return (0, p.Pw)(e, this.language);
                }
                getId3Track() {
                    for (let e = 0; e < this.videoTag.textTracks.length; e++) {
                        const t = this.videoTag.textTracks[e];
                        if (t.kind === p.TextTrackKind.METADATA) return t;
                    }
                }
                handleTrackChanged(e) {
                    const t = [...e.target].filter((e) => e.mode === p.bD.SHOWING)[0];
                    t && !this.selectedTextTrack && (this.selectedTextTrack = t), t && t === this.clonedTextTrack && (0, p.xz)(this.selectedTextTrack, p.bD.HIDDEN), this.store.dispatch(C.er(this.playerId, void 0 !== t));
                }
                handleTrackAdded({ track: e }) {
                    const { CAPTIONS: t, METADATA: i, SUBTITLES: s } = p.TextTrackKind;
                    e.kind === i && this.startListeningForId3Tags(), (e.kind !== t && e.kind !== s) || ((0, c.G6)() && ((this.id3Disabled = !0), this.stopListeningForId3Tags()), e !== this.selectedTextTrack && e !== this.clonedTextTrack && (e.mode = e.kind === t ? p.bD.HIDDEN : p.bD.DISABLED), (e.oncuechange = this.handleCueChange));
                }
                handleCueChange(e) {
                    const t = e.target,
                        { clonedTextTrack: i, selectedTextTrack: s } = this;
                    if (!s || t === i) return;
                    const a = s.activeCues,
                        r = (a && [...a]) || [];
                    if ((this.store.dispatch((0, L.Ev)(this.playerId, r)), !this.repositionedCaptionsEnabled || t !== s || !i)) return;
                    if (s.cues.length === i?.cues?.length) return;
                    const o = i.activeCues;
                    for (let e = 0; e < o.length; e++) {
                        const t = o[e];
                        (0, p.X2)(r, t) || i.removeCue(o[e]);
                    }
                    for (let e = 0; e < r.length; e++) {
                        const t = r[e];
                        if ((0, p.X2)(o, t)) continue;
                        const { endTime: s, startTime: a, text: h } = t,
                            n = new VTTCue(a, s, h);
                        i.addCue(n), (n.snapToLines = !1), this.setCaptionOffset(n);
                    }
                }
                setCaptionOffset(e) {
                    const { captionDefaultOffset: t } = this,
                        i = t?.bottom || 0,
                        s = (0, c.vU)() ? 10 : 0,
                        a = 100 - (i / this.videoTag.offsetHeight) * 100 - s;
                    a !== e.line && ((e.line = "auto"), isFinite(a) && !1 === e.snapToLines && (e.line = a));
                }
                repositionClonedCues() {
                    const e = this.clonedTextTrack?.cues || [];
                    for (let t = 0; t < e.length; t++) this.setCaptionOffset(e[t]);
                }
                startListeningForId3Tags() {
                    const e = this.getId3Track();
                    if (void 0 !== e && !this.id3Disabled) {
                        const { cues: t } = e;
                        void 0 === this.missingDataProp && t && (this.missingDataProp = this.isMissingDataProp(t)), (e.oncuechange = this.missingDataProp ? this.onId3CueWithInfo : this.onId3CueWithData), (e.mode = p.bD.HIDDEN);
                    }
                }
                stopListeningForId3Tags() {
                    const e = this.getId3Track();
                    void 0 !== e && ((e.oncuechange = null), (e.mode = p.bD.DISABLED));
                }
                handleControlUpdate(e) {
                    switch (e.muteState) {
                        case C.VE.MUTE_REQUESTED:
                            this.videoTag.muted = !0;
                            break;
                        case C.VE.UNMUTE_REQUESTED:
                            this.videoTag.muted = !1;
                    }
                    switch (e.playState) {
                        case C.EX.PAUSE_REQUESTED: {
                            const e = () => {
                                this.videoTag && (this.videoTag.pause(), this.stopListeningForId3Tags());
                            };
                            this.videoTag.paused ? e() : this.playPromise.then(e);
                            break;
                        }
                        case C.EX.PLAY_REQUESTED: {
                            const e = this.hlsJs ? this.hlsJsPlay() : this.videoTag.play() || Promise.resolve();
                            (this.playPromise = e.catch((e) => {
                                this.videoTag && this.videoTag.paused && (this.shouldRetryAutoplayMuted && e instanceof DOMException && "NotAllowedError" === e.name ? ((this.shouldRetryAutoplayMuted = !1), this.store.dispatch(C.qA(this.playerId))) : this.store.dispatch(C.Sb(this.playerId)));
                            })),
                                this.startListeningForId3Tags();
                            break;
                        }
                    }
                    this.captionDefaultOffset !== e.captionDefaultOffset && ((this.captionDefaultOffset = e.captionDefaultOffset), this.repositionClonedCues()), e.captionsState && this.handleCaptionsStateRequest(e.captionsState);
                    const t = e.seekTarget,
                        i = t === this.lastRequestedSeekTarget;
                    if ((window.isFinite(t) && !i && ((this.lastRequestedSeekTarget = t), (this.seeking = !0), (this.videoTag.currentTime = t), (this._lastTargetScrubToFraction = t)), e.volume >= 0 && (this.videoTag.volume = e.volume), e.playbackRate))
                        try {
                            this.videoTag.playbackRate = e.playbackRate;
                        } catch (e) {
                            this.store.dispatch((0, I.Ou)(this.playerId));
                        }
                    if (void 0 !== e.requestedQualityLevel && this.hlsJs) {
                        const t = e.requestedQualityLevel,
                            { autoLevelEnabled: i, currentLevel: s, nextLoadLevel: a } = this.hlsJs;
                        t !== (i ? -1 : a) ? (t < s && -1 !== t ? (this.hlsJs.nextLevel = t) : (this.hlsJs.currentLevel = t)) : (i || t === s) && this.store.dispatch(C.a$(this.playerId, t));
                    }
                    switch (e.pipState) {
                        case C.JZ.PICTURE_IN_PICTURE_ON_REQUESTED:
                            this.videoTag.hasAttribute("disablePictureInPicture") && this.videoTag.removeAttribute("disablePictureInPicture"),
                                document.pictureInPictureEnabled &&
                                    this.videoTag &&
                                    !this.inProgressPiPRequest &&
                                    (this.inProgressPiPRequest = this.videoTag
                                        .requestPictureInPicture()
                                        .catch(() => {
                                            this.store.dispatch((0, I.cJ)(this.playerId, new Error(P.Z.PICTURE_IN_PICTURE_ERROR)));
                                        })
                                        .finally(() => {
                                            this.inProgressPiPRequest = void 0;
                                        }));
                            break;
                        case C.JZ.PICTURE_IN_PICTURE_OFF_REQUESTED:
                            document.pictureInPictureElement &&
                                !this.inProgressPiPRequest &&
                                (this.inProgressPiPRequest = document
                                    .exitPictureInPicture()
                                    .catch(() => {
                                        this.store.dispatch((0, I.cJ)(this.playerId, new Error(P.Z.PICTURE_IN_PICTURE_ERROR)));
                                    })
                                    .finally(() => {
                                        this.inProgressPiPRequest = void 0;
                                    }));
                    }
                }
                clipScrubTime(e) {
                    return Math.max(0, Math.min(this.videoTag.duration - 0.5, e));
                }
                hlsJsPlay() {
                    return new Promise((e) => {
                        if (this.videoTag && (this.videoTag.readyState >= 3 || this.isEnded)) e();
                        else {
                            const t = () => {
                                e(), this.videoTag.removeEventListener("loadedmetadata", t);
                            };
                            this.videoTag.addEventListener("loadedmetadata", t);
                        }
                    }).then(() => (this.checkInitialSeek(), this.videoTag.play() || Promise.resolve()));
                }
                xhrSetup(e, t, i) {
                    const s = new v.Z(t).getHostname(),
                        a = s && this.liveAdDomainRegex.test(s),
                        r = i === _.ResourceTypes.KEY;
                    (a || r) && (e.withCredentials = !0);
                }
                hasCaptions() {
                    return void 0 !== this.getCaptionsTrack();
                }
                renderVideoVariant() {
                    const { contentType: e } = this.getCurrentTrack();
                    let { variants: t } = this.getCurrentTrack();
                    const i = this.store.dispatch((0, S.mu)(this.playerId, b.WE));
                    i && "" !== i && (t = (0, l.FR)(i, t));
                    const { enableSafariMse: s, shouldCapBitrate: a } = this,
                        r = { enableSafariMse: s, shouldCapBitrate: a },
                        { selectedVariant: o, useMse: h } = (0, m.vW)(t, r);
                    return o ? (h ? this.renderHlsJs(o, a, e) : this.renderHtml5(o)) : (this.store.dispatch((0, I.cJ)(this.playerId, new Error(P.Z.MEDIA_NOT_SUPPORTED))), Promise.resolve());
                }
                async renderHlsJs(e, t, i) {
                    const s = this.getInitialTimeCode();
                    this.bufferedSegments = this.expectedSegments = this.pendingSegments = this.prebufferedSegments = 0;
                    const a = this.store.dispatch((0, S.mu)(this.playerId, b.sl)),
                        r = this.store.dispatch((0, S.mu)(this.playerId, b.R1));
                    return (0, m.QJ)(a)
                        .then((a) => {
                            _ = a;
                            const o = {
                                autoStartLoad: !0,
                                enableWorker: this.isHlsWorkerEnabled,
                                enableCEA708Captions: "broadcast" === i || !this.repositionedCaptionsEnabled,
                                fragLoadingMaxRetry: 6,
                                fragLoadingRetryDelay: 500,
                                fragLoadingTimeOut: 2e4,
                                levelLoadingMaxRetry: 4,
                                levelLoadingTimeOut: 2e4,
                                loader: (0, g.h)(this.playerId, _),
                                manifestLoadingMaxRetry: 4,
                                manifestLoadingTimeOut: 2e4,
                                maxBufferHole: 1.5,
                                maxSeekHole: 5,
                                startLevel: -1,
                                startPosition: s,
                                xhrSetup: this.xhrSetup.bind(this),
                                capLevelToPlayerSize: !r && !t,
                                emeEnabled: !0,
                                drmSystems: { "com.widevine.alpha": { licenseUrl: E.KQ }, "com.microsoft.playready": { licenseUrl: E.ZC }, "com.apple.fps": { licenseUrl: E.BQ, serverCertificateUrl: E.Y5 } },
                                licenseXhrSetup: (e, t) => {
                                    if ("function" == typeof this.generateDrmTokenCallback)
                                        return this.generateDrmTokenCallback()
                                            .then((t) => {
                                                if (null === t) throw new Error("Video is not DRM protected, no token generated");
                                                e.setRequestHeader("x-dt-auth-token", t);
                                            })
                                            .catch((e) => {
                                                throw new Error("Failed to generate DRM token:", e);
                                            });
                                    throw new Error("generateDrmTokenCallback is not defined, skipping token fetch");
                                },
                                licenseResponseCallback: function (e, t, i) {
                                    const s = e.response;
                                    if ("com.apple.fps" === i.keySystem)
                                        try {
                                            return ((a = new TextDecoder().decode(s).trim()), Uint8Array.from(atob(a), (e) => e.charCodeAt(0))).buffer;
                                        } catch (e) {
                                            this.logger.log("FairPlay license decode error:", e);
                                        }
                                    var a;
                                    return s;
                                },
                                debug: {
                                    trace: (e) => {
                                        this.logger.log("HlsJs.trace", e);
                                    },
                                    debug: (e) => {
                                        this.logger.log("HlsJs.debug", e);
                                    },
                                    log: (e) => {
                                        this.logger.log("HlsJs.log", e);
                                    },
                                    warn: (e) => {
                                        this.logger.log("HlsJs.warn", e);
                                    },
                                    info: (e) => {
                                        this.logger.log("HlsJs.info", e);
                                    },
                                    error: (e) => {
                                        this.logger.log("HlsJs.error", e);
                                    },
                                },
                            };
                            this.precache || (o.maxMaxBufferLength = 0), (this.hlsJs = new _({ ...o })), this.smartBufferingExperimentEnabled && (this.hlsJs.on(_.Events.BUFFER_APPENDED, this.onBufferAppended), this.hlsJs.on(_.Events.BUFFER_EOS, this.onBufferEOS)), this.hlsJs.on(_.Events.ERROR, this.onHlsJsError.bind(this, i)), this.hlsJs.on(_.Events.FRAG_LOADING, this.onFragmentLoading), this.hlsJs.on(_.Events.FRAG_PARSING_INIT_SEGMENT, this.onFragmentParsingInitSegment), this.hlsJs.on(_.Events.LEVEL_SWITCHING, this.onLevelSwitching), this.hlsJs.on(_.Events.LEVEL_LOADED, this.onLevelLoaded), this.hlsJs.on(_.Events.MANIFEST_PARSED, this.onManifestParsed.bind(this, t, i)), this.repositionedCaptionsEnabled && (this.hlsJs.subtitleDisplay = !1), this.hlsJs.attachMedia(this.videoTag), this.hlsJs.loadSource(e.src), this.store.dispatch((0, L.pp)(this.playerId));
                        })
                        .catch(() => {
                            this.store.dispatch((0, I.cJ)(this.playerId, new Error(`${P.Z.CONFIG_NETWORK_ERROR}:HlsJsChunk`)));
                        });
                }
                renderHtml5(e) {
                    return this.videoTag.setAttribute("preload", this.precache ? "auto" : "none"), this.videoTag.setAttribute("src", e.src), this.videoTag.setAttribute("type", e.type), Promise.resolve();
                }
                onManifestParsed(e, t, i, { levels: s }) {
                    if ((this.hlsJs && e && (this.hlsJs.autoLevelCapping = s.length = (0, y.e)(s, e)), this.hlsJs)) {
                        let e;
                        for (e = 0; e < s.length - 1 && !(s[e].bitrate > this.hlsJs.bandwidthEstimate); e++);
                        this.hlsJs.startLevel = e;
                    }
                    if ("broadcast" === t || "media_entity" === t) {
                        const e = [];
                        s.forEach((t, i) => {
                            const { bitrate: s, frameRate: a, height: r, width: o } = t;
                            e.push({ bitrate: s, frameRate: a, height: r, level: i, width: o });
                        }),
                            this.store.dispatch((0, L.XB)(this.playerId, e));
                    }
                    if (this.hlsJs) {
                        const { autoLevelEnabled: e, startLevel: t } = this.hlsJs;
                        e ? this.store.dispatch(C.a$(this.playerId, -1)) : this.store.dispatch(C.a$(this.playerId, t));
                    }
                    this.dispatchPlayerReady();
                }
                dispatchPlayerReady() {
                    this.store.dispatch((0, L.UL)(this.playerId));
                }
                setCaptionStyle(e) {
                    (this.captionStyle = e), this.renderContainer();
                }
                createCueStyleNode(e) {
                    let t = [];
                    if (e && e.length)
                        for (let i = 0; i < e.length; i++) {
                            const s = e.item(i);
                            t.push(`${s}: ${e.getPropertyValue(s)};`);
                        }
                    else if (e) {
                        const i = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? "-" : "") + e.toLowerCase());
                        t = Object.keys(e)
                            .filter((t) => !!e[t])
                            .map((t) => {
                                const s = e[t];
                                if (s) {
                                    return `${i(t)}: ${s};`;
                                }
                            });
                    }
                    const i = document.createElement("style"),
                        s = document.createTextNode(`video::cue { ${t.join(" ")} }`);
                    return i.appendChild(s), i;
                }
                renderContainer() {
                    const e = document.createElement("div");
                    if (((e.style.position = "relative"), (e.style.width = "100%"), (e.style.height = "100%"), (e.style.backgroundColor = "transparent"), (e.style.overflow = "hidden"), e.appendChild(this.videoTag), (0, c.TL)())) {
                        const t = document.createElement("style"),
                            i = document.createTextNode("video::-webkit-media-controls { display: none !important; }");
                        t.appendChild(i), e.appendChild(t);
                    }
                    this.captionStyle && e.appendChild(this.createCueStyleNode(this.captionStyle)), (this.domElement.innerHTML = ""), this.domElement.appendChild(e);
                }
                getPlayerState() {
                    return this.store.getState().players[this.playerId] || {};
                }
                getCurrentTrack() {
                    const e = this.getPlayerState();
                    return (0, l.Ci)(e);
                }
                getInitialTimeCode() {
                    const e = this.getCurrentTrack();
                    if (void 0 === e) return -1;
                    const { isLive: t, isLiveTimecode: i, replayEditedStartTime: s, requestedTimecode: a } = e,
                        r = [this.reloadTimecode, a, s].find((e) => e > 0 || 0 === e);
                    return (t && !i) || void 0 === r ? -1 : r;
                }
                isUserRequestedCaptions() {
                    return this.getPlayerState().userSpecifiedCaptions;
                }
                isSeekable(e) {
                    if (0 === e || e > 0) {
                        const t = this.videoTag.seekable,
                            i = t.length;
                        for (let s = 0; s < i; s++) if (t.start(s) <= e && e <= t.end(s)) return !0;
                    }
                    return !1;
                }
                cleanupVideoElement() {
                    if (this.hasCaptions()) {
                        const e = this.getCaptionsTrack();
                        if (Array.isArray(e.cues)) for (; e.cues.length; ) e.removeCue(e.cues[0]);
                    }
                }
                render() {
                    const e = this.getPlayerState(),
                        t = e.posterImage;
                    if (void 0 === e.currentTrackId) return;
                    if (e.error) return void this.teardownPlayer();
                    const i = this.getCurrentTrack();
                    if (this.renderedTrackId !== e.currentTrackId) {
                        this.cleanupVideoElement(), this.hlsJs && (this.hlsJs.destroy(), (this.hlsJs = void 0)), t && this.videoTag.setAttribute("poster", t);
                        const { isLive: s, reloadTimecode: a, shouldLoop: r } = i;
                        s || (this.reloadTimecode = a),
                            (this.hasInitialSeeked = !1),
                            (this.renderedTrackId = e.currentTrackId),
                            (this.playerRenderPromise = this.renderVideoVariant()),
                            this.playerRenderPromise.then(() => {
                                this.renderContainer(), (this.isLive = s), (this.shouldLoop = r), (this.videoTag.volume = (0, T.P)("volume", 1) || 1), (this.playerRenderPromise = void 0);
                            });
                    }
                    if (i.playerReady) {
                        const { isFullscreen: t } = e.fullscreen,
                            { blank: s, rotation: a } = i;
                        this.handleControlUpdate(e.controls), this.renderRotationAndScale(a, t, s);
                    }
                    this.hlsJs && this.maximumBufferLength !== e.maximumBufferLength && ((this.maximumBufferLength = e.maximumBufferLength), (this.hlsJs.config.maxMaxBufferLength = this.maximumBufferLength));
                }
                handleCaptionsStateRequest(e) {
                    const { videoTag: t } = this;
                    if (!(t.readyState < 2))
                        switch (e) {
                            case C.F3.CAPTIONS_ON_REQUESTED: {
                                this.selectedTextTrack || (this.selectedTextTrack = this.getCaptionsTrack());
                                const { selectedTextTrack: e } = this;
                                if (!e) return;
                                const i = e.kind === p.TextTrackKind.SUBTITLES;
                                this.repositionedCaptionsEnabled && i && ((0, p.xz)(this.selectedTextTrack, p.bD.HIDDEN), this.clonedTextTrack || (this.clonedTextTrack = t.addTextTrack(p.TextTrackKind.CAPTIONS, "clone")));
                                const { userSpecifiedCaptions: s } = this.getPlayerState();
                                if (!s && !i) return;
                                const a = (i && this.clonedTextTrack) || e;
                                (0, p.xz)(a, p.bD.SHOWING);
                                break;
                            }
                            case C.F3.CAPTIONS_OFF_REQUESTED: {
                                const { clonedTextTrack: e, selectedTextTrack: t } = this;
                                if (t && t.mode) {
                                    const e = t.kind === p.TextTrackKind.CAPTIONS ? p.bD.HIDDEN : p.bD.DISABLED;
                                    (0, p.xz)(t, e);
                                }
                                e && (0, p.xz)(e, p.bD.DISABLED);
                                break;
                            }
                        }
                }
                renderRotationAndScale(e, t, i) {
                    if (isNaN(e)) return;
                    const s = this.videoTag;
                    if (i) return void (s.style.height = "0");
                    let a = 100,
                        r = 100,
                        o = 0,
                        h = 0;
                    const n = !1 !== this.playerHandlesRotations;
                    if (n && (90 === e || -90 === e)) {
                        const e = s.parentNode || {},
                            t = e.offsetWidth / e.offsetHeight;
                        isFinite(t) && ((a = 100 / t), (r = 100 * t), (o = (100 - r) / 2), (h = (100 - a) / 2));
                    }
                    (s.style.width = `${a}%`), (s.style.height = `${r}%`), (s.style.top = `${o}%`), (s.style.left = `${h}%`), n && ((s.style.transform = `rotate(${e}deg) scale(1.005)`), (s.style.objectFit = t ? "contain" : this.objectFitVideo));
                }
            };
            var M = i(123751),
                N = i(677138),
                B = i(373516),
                F = i(768256),
                U = i(142885),
                V = i(270223),
                Z = i(828063),
                H = i(724429);
            class q {
                constructor({ source: e = {}, videoConfig: t, domElement: s, httpClient: c, twitterAuthedHttpClient: p, options: u = {} }) {
                    (this.teardown = () => {
                        this.broadcastUpdater && this.broadcastUpdater.cancelUpdate(),
                            this.unsubscribeCalls.forEach((e) => {
                                e();
                            }),
                            (this.unsubscribeCalls = []),
                            (0, V.Rm)(this.id),
                            (this.source = void 0),
                            (this.session = void 0),
                            void 0 !== this.hydraExperienceId && N.Z.dispatch((0, r.Nt)(this.hydraExperienceId)),
                            this.video && this.video.teardown(),
                            N.Z.dispatch((0, H.ns)(this.id)),
                            (0, k.yu)(this.id),
                            this.logger.clearLogs(),
                            this.rejectPlayerReadyPromise();
                    }),
                        (this.play = () => (
                            this.initiallyMuted
                                ? this.playPreview()
                                : this.playerReadyPromise.then(() => {
                                      this._dispatch(C.D0(this.id));
                                  }),
                            this
                        )),
                        (this.pause = () => (
                            this.playerReadyPromise.then(() => {
                                this._dispatch(C.hz(this.id));
                            }),
                            this
                        )),
                        (this.replay = () => (
                            this.playerReadyPromise.then(() => {
                                this._dispatch(C.A3(this.id));
                            }),
                            this
                        )),
                        (this.mute = () => (
                            this.playerReadyPromise.then(() => {
                                this._dispatch(C.qA(this.id));
                            }),
                            this
                        )),
                        (this.unmute = () => (
                            this.playerReadyPromise.then(() => {
                                this._dispatch(C.s3(this.id));
                            }),
                            this
                        )),
                        (this.scrubToFraction = (e) => (
                            this.playerReadyPromise.then(() => {
                                const t = N.Z.getState(),
                                    i = this._getPlayerState(t),
                                    s = (0, l.Ci)(i),
                                    a = (s && s.durationMs) * (e / 1e3);
                                this._dispatch(C.li(this.id, a));
                            }),
                            this
                        )),
                        (this.seekTo = (e) => (
                            this.playerReadyPromise.then(() => {
                                this._dispatch(C.li(this.id, e));
                            }),
                            this
                        )),
                        (this.setScrubbing = (e) => (
                            this.playerReadyPromise.then(() => {
                                this._dispatch(C.OM(this.id, e));
                            }),
                            this
                        )),
                        (this.setVolume = (e) => (
                            this.playerReadyPromise.then(() => {
                                this._dispatch(C.A9(this.id, e));
                            }),
                            this
                        )),
                        (this.setQualityLevel = (e) => (
                            this.playerReadyPromise.then(() => {
                                this._dispatch(C.ak(this.id, e));
                            }),
                            this
                        )),
                        (this.setPlaybackRate = (e) => (
                            this.playerReadyPromise.then(() => {
                                this._dispatch(C.LO(this.id, e));
                            }),
                            this
                        )),
                        (this.setPlaybackTimeRange = ({ endTimeS: e, startTimeS: t }) => (
                            this.playerReadyPromise.then(() => {
                                t <= 0 && e >= this.video.getVideoTag().duration ? this._dispatch(C.WS(this.id)) : this._dispatch(C.H4(this.id, t, e));
                            }),
                            this
                        )),
                        (this.setCaptionStyle = (e) => {
                            this.video && this.video.setCaptionStyle(e);
                        }),
                        (this.fullScreen = (e) => {
                            const t = e || this.domElement;
                            return N.Z.dispatch((0, Z.Zx)(this.id, t, this.video.getVideoTag())), this;
                        }),
                        (this.exitFullScreen = () => (N.Z.dispatch((0, Z.g3)(this.id)), this)),
                        (this.hideControls = () => (
                            this.playerReadyPromise.then(() => {
                                this._dispatch(C.Pt(this.id));
                            }),
                            this
                        )),
                        (this.showControls = () => (
                            this.playerReadyPromise.then(() => {
                                this._dispatch(C.cW(this.id));
                            }),
                            this
                        )),
                        (this.skipBy = (e) => (
                            this.playerReadyPromise.then(() => {
                                const t = N.Z.getState(),
                                    i = this._getPlayerState(t),
                                    s = (0, l.Ci)(i),
                                    a = s && s.currentTimeMs / 1e3,
                                    r = Number(e) + Number(a);
                                this._dispatch(C.li(this.id, r));
                            }),
                            this
                        )),
                        (this.playPreview = (e = !1) => (
                            this.playerReadyPromise.then(() => {
                                const t = N.Z.getState(),
                                    i = t && t.players && t.players[this.id],
                                    { hasPlaybackStarted: s, isPreview: a } = i || {};
                                (!a && s) || e ? this._dispatch(C.D0(this.id)) : (this._dispatch((0, B.Mp)(this.id)), this.initiallyMuted && (this.initiallyMuted = !1));
                            }),
                            this
                        )),
                        (this.pausePreview = () => (
                            this.playerReadyPromise.then(() => {
                                const e = N.Z.getState(),
                                    t = e && e.players && e.players[this.id],
                                    { isPreview: i } = t || {};
                                i ? this._dispatch((0, B.tf)(this.id)) : this._dispatch(C.hz(this.id));
                            }),
                            this
                        )),
                        (this.objectFitVideo = (e) => (-1 !== f.Tj.indexOf(e) && this.video && (this.video.objectFitVideo = e), this)),
                        (this.toggleCaptions = () => (
                            this.playerReadyPromise.then(() => {
                                const e = N.Z.getState(),
                                    t = e && e.players && e.players[this.id],
                                    i = !(!t || !t.areCaptionsShown);
                                this._dispatch(i ? C.Cx(this.id, !0) : C.AB(this.id, !0));
                            }),
                            this
                        )),
                        (this.setCaptionDefaultOffset = ({ bottom: e }) => {
                            this._dispatch(C.pK(this.id, { bottom: e }));
                        }),
                        (this.togglePiPMode = () => (
                            this.playerReadyPromise.then(() => {
                                const e = N.Z.getState(),
                                    t = e && e.players && e.players[this.id],
                                    i = !(!t || !t.inPiPMode);
                                this._dispatch(i ? C.hV(this.id) : C.ET(this.id));
                            }),
                            this
                        )),
                        (this.nextTrack = () => (
                            this.playerReadyPromise.then(() => {
                                this._dispatch((0, L.IV)(this.id));
                            }),
                            this
                        )),
                        (this.triggerError = (e) => {
                            const t = new Error(e || "synthetic");
                            return N.Z.dispatch((0, I.cJ)(this.id, t)), this;
                        }),
                        (this.reload = ({ autoPlay: e = !1, requestedTimecode: t } = {}) => {
                            this.playerReadyPromise = new Promise((e, t) => {
                                (this.resolvePlayerReadyPromise = e), (this.rejectPlayerReadyPromise = t);
                            }).catch(() => {});
                            const i = (N.Z.getState() || { players: {} }).players[this.id];
                            let s = -1;
                            if (i) {
                                if (void 0 !== t) this.playerOptions.requestedTimecode = t;
                                else if (0 === i.currentTrackId) {
                                    s = (0, l.Ci)(i).currentTimeMs / 1e3;
                                }
                                const { isMuted: a, isPlaying: r, isPreview: o } = i,
                                    h = r || e;
                                this.playerReadyPromise.then(() => {
                                    o ? (h ? this._dispatch((0, B.Mp)(this.id)) : this._dispatch((0, B.tf)(this.id))) : (h && this._dispatch(C.D0(this.id)), a && this._dispatch(C.qA(this.id)));
                                });
                            }
                            return this.video && this.video.teardownPlayer(), N.Z.dispatch(this._reloadPlayer(this.id, this.source, this.videoConfig, this.session, this.resolvePlayerReadyPromise, this.rejectPlayerReadyPromise, { ...this.playerOptions, reloadTimecode: s }, this.logger)), this;
                        }),
                        (this.on = (e, t) => (
                            Object.keys(U.Z).forEach((i) => {
                                U.Z[i] === e && (0, V.Oo)(this.id, e, t);
                            }),
                            this
                        )),
                        (this.updatePosition = ({ percentOfViewportOccupied: e, percentVisible: t, sizesInfo: i }) => (
                            this.playerReadyPromise.then(() => {
                                this._dispatch(C.cg(this.id, t, e, i));
                            }),
                            this
                        )),
                        (this.callToActionClicked = () => (
                            this.playerReadyPromise.then(() => {
                                this._dispatch(C.ze(this.id));
                            }),
                            this
                        )),
                        (this.callToActionImpression = () => (
                            this.playerReadyPromise.then(() => {
                                this._dispatch(C.sX(this.id));
                            }),
                            this
                        )),
                        (this.liveClickthroughClicked = () => (
                            this.playerReadyPromise.then(() => {
                                this._dispatch(C.xb(this.id));
                            }),
                            this
                        )),
                        (this.subscribe = (e) => {
                            const t = N.Z.getState();
                            let i = this._getPlayerState(t),
                                s = this._getHydraState(t);
                            const a = N.Z.subscribe(() => {
                                const t = N.Z.getState(),
                                    a = this._getPlayerState(t),
                                    r = this._getHydraState(t);
                                void 0 !== a && (i !== a || s !== r) && ((i = a), (s = r), e(a, r));
                            });
                            return this.unsubscribeCalls.push(a), a;
                        }),
                        (this.onStoreUpdate = (e) => {
                            const t = (0, l.Ci)(e),
                                i = "ad" === t?.displayType,
                                { adFailed: s, autoRetry: a, backoffMs: r } = e.errorInfo,
                                o = i && s && !1 !== t.shouldAutoAdvance;
                            (a || o) &&
                                setTimeout(
                                    () => {
                                        this.reload();
                                    },
                                    (o ? 0 : r) || 0,
                                );
                        }),
                        (this.id = q.id),
                        (q.id += 1),
                        (this.unsubscribeCalls = []),
                        (this.source = e),
                        (this.videoConfig = t),
                        (this.session = { id: a()() }),
                        (this.playbackSessionId = u.playbackSessionId),
                        (this.initiallyMuted = u.initiallyMuted),
                        (this._reloadPlayer = F.fi),
                        t?.generateDrmTokenCallback && (this.generateDrmTokenCallback = t.generateDrmTokenCallback),
                        (this.playerReadyPromise = new Promise((e, t) => {
                            (this.resolvePlayerReadyPromise = e), (this.rejectPlayerReadyPromise = t);
                        })
                            .then(Promise.resolve())
                            .catch(() => {})),
                        u.autoplay && this.play(),
                        (this.logger = new h.Z(this.id)),
                        i.g.VIDEO_PLAYER_DEBUG_ENABLED && (h.Z.debuggingEnabled = !0),
                        (0, k.dw)(this.id, new n.Z(new d.Z(c)), new n.Z(new d.Z(p || c)), this.logger, new o.Z(), u.featureProvider),
                        this.subscribe(this.onStoreUpdate),
                        (this.source.type !== M.P.BROADCAST && this.source.type !== M.P.STATIC_BROADCAST && this.source.type !== M.P.AUDIO_SPACE) || (this.hydraExperienceId = u.hydraExperienceId = N.Z.dispatch((0, r.mC)())),
                        (this.options = u);
                    let g = -1;
                    const T = this.playbackSessionId ? (0, k.Cv)(this.playbackSessionId) : void 0;
                    T && ((this.options.videoEl = u.videoEl || T.videoEl), (g = T.reloadTimecode)), (this.options.generateDrmTokenCallback = this.generateDrmTokenCallback);
                    const { featureProvider: v, includeBroadcastEventAssociation: y, initiallyMutedCaptions: m, intentToPlayTime: E, maxLoopCount: P, maxLoopingThresholdSec: b, precache: S, promotedContext: R, requestedTimecode: _, shouldCapBitrate: D, showGeolocationPrompt: A } = this.options;
                    (this.playerOptions = { featureProvider: v, includeBroadcastEventAssociation: y, initiallyMutedCaptions: m, intentToPlayTime: E, maxLoopCount: P, maxLoopingThresholdSec: b, precache: S, promotedContext: R, reloadTimecode: g, requestedTimecode: _, shouldCapBitrate: D, showGeolocationPrompt: A }),
                        N.Z.dispatch((0, F.MD)(this.id, e, t, this.session, u.analytics, u.adProvider, this.resolvePlayerReadyPromise, this.rejectPlayerReadyPromise, this.playerOptions, this.logger)).then((e) => {
                            this.broadcastUpdater = e;
                        }),
                        s && this.attach(s);
                }
                attach(e) {
                    this.video || ((this.domElement = e), (this.video = new J(this.domElement, this.id, N.Z, this.reload, this.logger, this.options)));
                }
                _getPlayerState(e) {
                    if (e.players) return e.players[this.id];
                }
                _getHydraState(e) {
                    if (void 0 !== this.hydraExperienceId && e.hydraExperiences) return e.hydraExperiences[this.hydraExperienceId];
                }
                _dispatch(e) {
                    const t = N.Z.getState();
                    this._getPlayerState(t) ? N.Z.dispatch(e) : this.triggerError(P.Z.MEDIA_TEARDOWN_ERROR);
                }
            }
            q.id = 0;
            const G = q;
        },
        795897: (e, t, i) => {
            i.r(t), i.d(t, { CreatePlayer: () => a.Z, OBJECT_FIT_VALUES: () => r.Tj, default: () => n });
            var s = i(202784),
                a = i(459585),
                r = i(297310);
            const o = { base: { height: "100%", position: "relative", transform: "translateZ(0)", width: "100%" }, wrapper: { height: "100%", position: "absolute", width: "100%" } };
            class h extends s.PureComponent {
                constructor(e) {
                    super(e),
                        (this._setVideoRef = (e) => {
                            e && this.videoPlayer.attach(e);
                        }),
                        (this._setContainerRef = (e) => {
                            this.containerDomElement = e;
                        }),
                        (this._renderCustomOverlay = () => {
                            if (this.props.customOverlay) return this.props.customOverlay;
                        }),
                        (this.videoPlayer = a.Z.createPlayer({
                            source: this.props.videoId,
                            videoConfig: { contentId: this.props.contentId, contentType: this.props.contentType, cta: this.props.cta, durationMs: this.props.durationMs, viewCount: this.props.viewCount, expandedUrl: this.props.expandedUrl, eventId: this.props.eventId, mediaAvailability: this.props.mediaAvailability, publisherId: this.props.publisherId, poster: this.props.poster, loop: this.props.loop, shouldLoadTranslations: this.props.shouldLoadTranslations, variants: this.props.variants ?? [], viewCountGraphData: this.props.viewCountGraphData, vmapUrl: this.props.vmapUrl, generateDrmTokenCallback: this.props.generateDrmTokenCallback },
                            httpClient: this.props.httpClient,
                            twitterAuthedHttpClient: this.props.twitterAuthedHttpClient,
                            options: { "aria-label": this.props["aria-label"], additionalBadges: this.props.additionalBadges, autoplay: this.props.autoplay, adProvider: this.props.adProvider, analytics: this.props.analytics, captionStyle: this.props.captionStyle, enablePiP: this.props.enablePiP, enableVideoPlayerCaptionRendering: this.props.enableVideoPlayerCaptionRendering, featureProvider: this.props.featureProvider, hlsjsVersion: this.props.hlsjsVersion, includeBroadcastEventAssociation: this.props.includeBroadcastEventAssociation, initiallyMuted: this.props.initiallyMuted, initiallyMutedCaptions: this.props.initiallyMutedCaptions, intentToPlayTime: this.props.intentToPlayTime, language: this.props.language, maxLoopCount: this.props.maxLoopCount, maxLoopingThresholdSec: this.props.maxLoopingThresholdSec, objectFitVideo: this.props.displayOptions?.objectFitVideo, playbackSessionId: this.props.playbackSessionId, playerHandlesRotations: this.props.displayOptions?.playerHandlesRotations, precache: this.props.precache ?? !0, liveBroadcastRewindEnabled: this.props.liveBroadcastRewindEnabled, promotedContext: this.props.promotedContext, requestedTimecode: this.props.requestedTimecode, showControls: this.props.controls, showGeolocationPrompt: this.props.geolocationPrompt, shouldCapBitrate: this.props.shouldCapBitrate, shouldRetryAutoplayMuted: this.props.shouldRetryAutoplayMuted, videoEl: this.props.videoEl },
                        })),
                        this.props.setPlayerApi && this.props.setPlayerApi(this.videoPlayer);
                }
                componentDidUpdate(e) {
                    const { captionStyle: t, requestedTimecode: i } = this.props;
                    e.requestedTimecode !== i && i && this.videoPlayer.seekTo(i), e.captionStyle !== t && t && this.videoPlayer.setCaptionStyle(t);
                }
                componentWillUnmount() {
                    try {
                        this.videoPlayer.teardown();
                    } catch (e) {}
                }
                render() {
                    return s.createElement("div", { "data-testid": "videoComponent", ref: this._setContainerRef, style: o.base }, s.createElement("div", { ref: this._setVideoRef, style: o.wrapper }), this._renderCustomOverlay());
                }
            }
            const n = h;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384.e9ff636a.js.map

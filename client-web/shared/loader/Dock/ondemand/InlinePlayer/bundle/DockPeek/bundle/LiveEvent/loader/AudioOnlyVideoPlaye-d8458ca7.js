"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~ondemand.InlinePlayer~bundle.DockPeek~bundle.LiveEvent~loader.AudioOnlyVideoPlaye-d8458ca7"],
    {
        907187: (t, e, i) => {
            i.d(e, { Z: () => Gt });
            i(334115), i(200634), i(320796), i(449228), i(438695), i(827233), i(374083), i(418145), i(315735), i(543450), i(743108), i(332501), i(24895), i(499120), i(865584), i(326936), i(271245), i(414586), i(458143), i(43105), i(334769), i(358188), i(73439), i(477950), i(888233), i(428673), i(201939), i(906886), i(154226);
            var n,
                a,
                s,
                r,
                o = i(580753),
                c = i(981665),
                E = i(256666),
                _ = i(22699),
                d = i.n(_);
            function l(t, e) {
                var i;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (
                        Array.isArray(t) ||
                        (i = (function (t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return h(t, e);
                            var i = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === i && t.constructor && (i = t.constructor.name);
                            if ("Map" === i || "Set" === i) return Array.from(t);
                            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return h(t, e);
                        })(t)) ||
                        (e && t && "number" == typeof t.length)
                    ) {
                        i && (t = i);
                        var n = 0;
                        return function () {
                            return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                return (i = t[Symbol.iterator]()).next.bind(i);
            }
            function h(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n;
            }
            var u = {
                    AD_SKIP_EVENT: "AD_SKIP_EVENT",
                    CAPTIONS_TOGGLED_EVENT: "CAPTIONS_TOGGLED_EVENT",
                    CONFIG_LOADED_EVENT: "CONFIG_LOADED_EVENT",
                    CTA_CLICK_EVENT: "CTA_CLICK_EVENT",
                    CTA_IMPRESSION_EVENT: "CTA_IMPRESSION_EVENT",
                    ERROR_EVENT: "ERROR_EVENT",
                    FULL_SCREEN_ENTER_EVENT: "FULL_SCREEN_ENTER_EVENT",
                    FULL_SCREEN_EXIT_EVENT: "FULL_SCREEN_EXIT_EVENT",
                    GROUPM_VIEW_EVENT: "GROUPM_VIEW_EVENT",
                    HEARTBEAT_EVENT: "HEARTBEAT_EVENT",
                    HEARTBEAT_START_EVENT: "HEARTBEAT_START_EVENT",
                    INITIAL_CTA_IMPRESSION_EVENT: "INITIAL_CTA_IMPRESSION_EVENT",
                    INITIAL_INTEND_TO_PLAY_EVENT: "INITIAL_INTEND_TO_PLAY_EVENT",
                    INTEND_TO_PLAY_EVENT: "INTEND_TO_PLAY_EVENT",
                    LOOP_EVENT: "LOOP_EVENT",
                    MANUAL_QUALITY_LEVEL_CHANGE_EVENT: "MANUAL_QUALITY_LEVEL_CHANGE_EVENT",
                    MRC_AUDIBLE_VIEW_EVENT: "MRC_AUDIBLE_VIEW_EVENT",
                    MRC_VIEW_EVENT: "MRC_VIEW_EVENT",
                    MUTE_EVENT: "MUTE_EVENT",
                    ONE_SEC_VIEW_EVENT: "ONE_SEC_VIEW_EVENT",
                    SIX_SEC_VIEW_EVENT: "SIX_SEC_VIEW_EVENT",
                    SHORT_FORM_COMPLETE_EVENT: "SHORT_FORM_COMPLETE_EVENT",
                    PAUSE_EVENT: "PAUSE_EVENT",
                    PLAY_EVENT: "PLAY_EVENT",
                    PLAY_FROM_TAP_EVENT: "PLAY_FROM_TAP_EVENT",
                    PLAYBACK_25_EVENT: "PLAYBACK_25_EVENT",
                    PLAYBACK_50_EVENT: "PLAYBACK_50_EVENT",
                    PLAYBACK_75_EVENT: "PLAYBACK_75_EVENT",
                    PLAYBACK_95_EVENT: "PLAYBACK_95_EVENT",
                    PLAYBACK_COMPLETE_EVENT: "PLAYBACK_COMPLETE_EVENT",
                    PLAYBACK_ERROR_EVENT: "PLAYBACK_ERROR_EVENT",
                    PLAYBACK_LAPSE_EVENT: "PLAYBACK_LAPSE_EVENT",
                    PLAYBACK_SPEED_CHANGE_EVENT: "PLAYBACK_SPEED_CHANGE_EVENT",
                    PLAYBACK_START_EVENT: "PLAYBACK_START_EVENT",
                    REPLAY_EVENT: "REPLAY_EVENT",
                    REWIND_EVENT: "REWIND_EVENT",
                    SHRINK_EVENT: "SHRINK_EVENT",
                    STARTUP_ERROR_EVENT: "STARTUP_ERROR_EVENT",
                    TEARDOWN_EVENT: "TEARDOWN_EVENT",
                    TICK_EVENT: "TICK_EVENT",
                    TRACK_FINISHED_EVENT: "TRACK_FINISHED_EVENT",
                    UNMUTE_EVENT: "UNMUTE_EVENT",
                    VIDEO_SESSION_EVENT: "VIDEO_SESSION_EVENT",
                    VIDEO_QUALITY_VIEW_EVENT: "VIDEO_QUALITY_VIEW_EVENT",
                    VIDEO_VIEW_EVENT: "VIDEO_VIEW_EVENT",
                    VIEW_THRESHOLD_EVENT: "VIEW_THRESHOLD_EVENT",
                    SCRUB_EVENT: "SCRUB_EVENT",
                    PICTURE_IN_PICTURE_ON_EVENT: "PICTURE_IN_PICTURE_ON_EVENT",
                    PICTURE_IN_PICTURE_OFF_EVENT: "PICTURE_IN_PICTURE_OFF_EVENT",
                },
                T = "ad",
                v = "content",
                p = "broadcast",
                m = "gif",
                f = "live",
                y = "media_entity",
                V = "partner_video",
                N = "periscope",
                g = "vine",
                I = "vmap",
                P = (((n = {})[g] = 2), (n[m] = 3), (n[I] = 1), (n[y] = 1), (n[f] = 1), (n[N] = 5), (n[p] = 1), n),
                A = { event: "url", go_to: "url", image: "url", url: "url", shop: "url", see_more: "url", visit: "url", visit_site: "url", watch: "url", watch_now: "watch" },
                M = 1,
                b = 2,
                C = 3,
                S = 4,
                L = 5,
                w = 6,
                O = 7,
                R = 8;
            function k(t) {
                return D(t, t.source.trackId);
            }
            function W(t) {
                return D(t, t.currentTrackId);
            }
            function D(t, e) {
                return t.tracks.find(function (t) {
                    return e === t.id;
                });
            }
            function B(t) {
                return t.tracks.find(function (t) {
                    return T === t.displayType;
                });
            }
            function F(t) {
                return Boolean(t) && t.isPlaying && !t.isSeeking && !t.isMuted;
            }
            function H(t) {
                var e;
                switch (t) {
                    case 0.25:
                        e = L;
                        break;
                    case 0.5:
                        e = M;
                        break;
                    case 0.75:
                        e = w;
                        break;
                    case 1.25:
                        e = O;
                        break;
                    case 1.5:
                        e = C;
                        break;
                    case 1.75:
                        e = R;
                        break;
                    case 2:
                        e = S;
                        break;
                    default:
                        e = b;
                }
                return e;
            }
            var U = (((a = {})[u.VIDEO_VIEW_EVENT] = "creativeView"), (a[u.PLAYBACK_25_EVENT] = "firstQuartile"), (a[u.PLAYBACK_50_EVENT] = "midpoint"), (a[u.PLAYBACK_75_EVENT] = "thirdQuartile"), (a[u.PLAYBACK_COMPLETE_EVENT] = "complete"), (a[u.PLAY_EVENT] = "resume"), (a[u.PAUSE_EVENT] = "pause"), (a[u.REWIND_EVENT] = "rewind"), (a[u.ERROR_EVENT] = "adError"), a),
                K = (function () {
                    function t(t) {
                        var e = this;
                        Object.keys(U).forEach(function (i) {
                            t.on(i, function (t) {
                                e.fireBeacon(U[i], t);
                            });
                        }),
                            t.on(u.PLAYBACK_START_EVENT, this.onPlaybackStart.bind(this));
                    }
                    var e = t.prototype;
                    return (
                        (e.onPlaybackStart = function (t) {
                            this.fireBeacon("start", t), this.fireBeacon("adImpression", t);
                        }),
                        (e.fireBeacon = function (t, e) {
                            var i = W(e);
                            if (void 0 !== i && void 0 !== i.beacons && void 0 !== i.beacons[t])
                                for (var n, a = l(i.beacons[t]); !(n = a()).done; ) {
                                    var s = n.value;
                                    new window.Image().src = s;
                                }
                        }),
                        t
                    );
                })(),
                Y = (function () {
                    function t(t, e) {
                        (this.bceHandler = e), this.bceHandler && t.on(u.PLAYBACK_LAPSE_EVENT, this.onPlaybackLapseEvent.bind(this));
                    }
                    return (
                        (t.prototype.onPlaybackLapseEvent = function (t, e) {
                            var i = null == e ? void 0 : e.playback_lapse_ms;
                            this.bceHandler.log({ wallClockWatchTimeMs: i });
                        }),
                        t
                    );
                })(),
                x = (function () {
                    function t(t) {
                        (this.analytics = t), this.analytics.on(u.TICK_EVENT, this.onTickEvent.bind(this));
                    }
                    return (
                        (t.prototype.onTickEvent = function (t) {
                            var e = t.areCaptionsShown,
                                i = this.currentCaptionsState;
                            i !== e && (((!1 === i && !0 === e) || (!0 === i && !1 === e)) && this.analytics.emit(u.CAPTIONS_TOGGLED_EVENT, t, e), (this.currentCaptionsState = e));
                        }),
                        t
                    );
                })(),
                G = (function () {
                    function t(t) {
                        (this.analytics = t), (this.hasFiredOnTrackMap = {}), this.analytics.on(u.CTA_IMPRESSION_EVENT, this.onCtaImpressionEvent.bind(this));
                    }
                    return (
                        (t.prototype.onCtaImpressionEvent = function (t) {
                            var e = t.currentTrackId;
                            this.hasFiredOnTrackMap[e] || ((this.hasFiredOnTrackMap[e] = !0), this.analytics.emit(u.INITIAL_CTA_IMPRESSION_EVENT, t));
                        }),
                        t
                    );
                })(),
                Z = (function () {
                    function t(t) {
                        (this.analytics = t), (this.hasStarted = !1), (this.hasFired = !1), this.analytics.on(u.PLAYBACK_START_EVENT, this.onPlaybackStartEvent.bind(this)), this.analytics.on(u.INTEND_TO_PLAY_EVENT, this.onShowEvent.bind(this)), this.analytics.on(u.ERROR_EVENT, this.onErrorEvent.bind(this));
                    }
                    var e = t.prototype;
                    return (
                        (e.onPlaybackStartEvent = function () {
                            this.hasStarted = !0;
                        }),
                        (e.onShowEvent = function () {
                            this.intentToPlayTime = new Date();
                        }),
                        (e.onErrorEvent = function (t, e) {
                            var i = this.constructClientMediaEventError(t, e);
                            if (!this.hasStarted && !this.hasFired) {
                                var n,
                                    a = void 0 !== this.intentToPlayTime ? new Date() - this.intentToPlayTime : void 0;
                                i && (n = { latency_millis: a, error: i }), this.analytics.emit(u.STARTUP_ERROR_EVENT, t, Object.assign({ latency: a }, e), n), (this.hasFired = !0);
                            }
                            this.analytics.emit(u.PLAYBACK_ERROR_EVENT, t, e, i);
                        }),
                        (e.constructClientMediaEventError = function (t, e) {
                            var i = (e && e.media_details && e.media_details.media_error) || {};
                            return { is_fatal: i.is_fatal, category: i.category, message: i.message, retry_count: i.retry_count };
                        }),
                        t
                    );
                })(),
                Q = (function () {
                    function t(t) {
                        (this.bufferingCount = 0), (this.bufferingDurationMs = 0), (this.bufferingBeginTimeMs = void 0), t.on(u.TICK_EVENT, this.onTickEvent.bind(this)), t.on(u.HEARTBEAT_START_EVENT, this.onHeartbeatStart.bind(this)), t.on(u.HEARTBEAT_EVENT, this.onHeartbeat.bind(this));
                    }
                    var e = t.prototype;
                    return (
                        (e.onHeartbeat = function (t) {
                            this.reset(t);
                        }),
                        (e.onHeartbeatStart = function (t) {
                            this.reset(t);
                        }),
                        (e.onTickEvent = function (t) {
                            var e = W(t);
                            void 0 !== e && (e.isBuffering && null == this.bufferingBeginTimeMs ? ((this.bufferingBeginTimeMs = Date.now()), this.bufferingCount++) : e.isBuffering || null == this.bufferingBeginTimeMs || ((this.bufferingDurationMs += Date.now() - this.bufferingBeginTimeMs), (this.bufferingBeginTimeMs = void 0)));
                        }),
                        (e.getBufferTime = function (t) {
                            var e = W(t);
                            if (void 0 !== e) {
                                var i = this.bufferingDurationMs;
                                return e.isBuffering && null != this.bufferingBeginTimeMs && (i += Date.now() - this.bufferingBeginTimeMs), i;
                            }
                        }),
                        (e.reset = function (t) {
                            var e = W(t);
                            void 0 !== e && ((this.bufferingBeginTimeMs = e.isBuffering ? Date.now() : void 0), (this.bufferingCount = e.isBuffering ? 1 : 0), (this.bufferingDurationMs = 0));
                        }),
                        t
                    );
                })();
            function X(t) {
                return "number" != typeof t || Number.isNaN(t) || t === 1 / 0 || t === -1 / 0 ? ("string" == typeof t ? t : void 0) : t.toString();
            }
            var j = (function () {
                function t(t) {
                    (this.analytics = t), (this.bufferingDurationListener = new Q(t)), (this.lastKnownDataUsageBytes = 0), (this.audibleDuration = 0), (this.bitrateHistory = []), (this.latencyHistory = []), this.previousTickTimestamp, this.analytics.on(u.TICK_EVENT, this.onTickEvent.bind(this)), this.analytics.on(u.PLAY_EVENT, this.onPlayEvent.bind(this)), this.analytics.on(u.PLAYBACK_START_EVENT, this.onPlaybackStartEvent.bind(this)), this.analytics.on(u.TRACK_FINISHED_EVENT, this.onTrackFinishedEvent.bind(this)), this.analytics.on(u.ERROR_EVENT, this.onErrorEvent.bind(this)), this.analytics.on(u.PAUSE_EVENT, this.onPauseEvent.bind(this)), this.analytics.on(u.TEARDOWN_EVENT, this.onTeardownEvent.bind(this)), this.analytics.on(u.LOOP_EVENT, this.onLoopEvent.bind(this)), this.analytics.on(u.AD_SKIP_EVENT, this.onAdSkip.bind(this)), this.analytics.on(u.SCRUB_EVENT, this.onScrubEvent.bind(this));
                }
                var e = t.prototype;
                return (
                    (e.onTickEvent = function (t) {
                        var e = W(t);
                        if (void 0 !== e) {
                            if ((this.updateTimesOnTick(e, t), this.updatePerfMetrics(e), t.isSeeking ? this.stopPolling() : t.isPlaying && this.startPolling(t), void 0 !== this.lastKnownPlayerState)) {
                                var i = this.lastKnownPlayerState.percentVisible,
                                    n = t.percentVisible;
                                ((i > 0 && 0 === n) || (0 === i && n > 0)) && (this.stopPolling(), this.startPolling(t));
                            }
                            (this.lastKnownPlayerState = t), (this.previousTickTimestamp = Date.now());
                        }
                    }),
                    (e.onScrubEvent = function (t) {
                        this.stopPolling(), (this.lastKnownPlayerState = t);
                    }),
                    (e.onPlayEvent = function (t) {
                        this.hasPlaybackStarted && this.startPolling(t), (this.lastKnownPlayerState = t);
                    }),
                    (e.onPlaybackStartEvent = function (t) {
                        this.startPolling(t), (this.lastKnownPlayerState = t), (this.hasPlaybackStarted = !0);
                    }),
                    (e.onTrackFinishedEvent = function (t) {
                        (this.hasPlaybackStarted = !1), void 0 !== W(t) && (this.stopPolling(), (this.lastKnownPlayerState = t));
                    }),
                    (e.onErrorEvent = function (t, e) {
                        e && e.media_details && e.media_details.media_error && e.media_details.media_error.is_fatal && (this.stopPolling(), (this.lastKnownPlayerState = t));
                    }),
                    (e.onPauseEvent = function (t, e) {
                        this.stopPolling(), (this.lastKnownPlayerState = t);
                    }),
                    (e.onTeardownEvent = function (t, e) {
                        this.stopPolling(!0), (this.lastKnownPlayerState = t);
                    }),
                    (e.onLoopEvent = function (t) {
                        this.startPolling(t);
                    }),
                    (e.onAdSkip = function () {
                        this.stopPolling();
                    }),
                    (e.updateTimesOnTick = function (t, e) {
                        var i;
                        void 0 !== (i = t.contentType === p || t.contentType === f || t.contentType === N ? t.absoluteTimeMs : t.currentTimeMs) && (F(e) && void 0 !== this.lastTimeMs && (this.audibleDuration += i - this.lastTimeMs), (this.lastTimeMs = i), void 0 === this.startTimeMs && (this.startTimeMs = i));
                    }),
                    (e.startPolling = function (t) {
                        var e = k(t);
                        void 0 === this.intervalId && void 0 !== e && e.contentType !== g && (this.analytics.emit(u.HEARTBEAT_START_EVENT, t), this.onHeartbeatStart(t));
                    }),
                    (e.stopPolling = function (t) {
                        (this.intervalId || t) && (this.onHeartbeat(), (this.lastTimeMs = void 0), (this.startTimeMs = void 0)), void 0 !== this.intervalId && (clearInterval(this.intervalId), (this.intervalId = void 0));
                    }),
                    (e.onHeartbeatStart = function (t) {
                        (this.intervalId = setInterval(this.onHeartbeat.bind(this), t.heartbeatIntervalMs || 5e3)), (this.lastTimeMs = void 0), (this.startTimeMs = void 0), (this.bitrateHistory = []), (this.latencyHistory = []);
                    }),
                    (e.updatePerfMetrics = function (t) {
                        if (this.previousTickTimestamp) {
                            var e = Date.now() - this.previousTickTimestamp;
                            t.currentBitrate && this.bitrateHistory.push({ value: t.currentBitrate, weight: e }), t.liveLatencyMs && this.latencyHistory.push({ value: t.liveLatencyMs, weight: e });
                        }
                    }),
                    (e.onHeartbeat = function () {
                        var t = this.lastKnownPlayerState;
                        if (t) {
                            var e = W(t),
                                i = this.getProgramDateTimeMs();
                            if (void 0 !== i && void 0 !== e) {
                                var n = e.currentBitrate ? { sampled_bitrate: e.currentBitrate } : {},
                                    a = 0;
                                t.dataUsageBytes && ((a = t.dataUsageBytes - this.lastKnownDataUsageBytes), (this.lastKnownDataUsageBytes = t.dataUsageBytes));
                                var s,
                                    r,
                                    o = { data_usage_bytes: a },
                                    c = this.bufferingDurationListener.bufferingCount,
                                    E = this.bufferingDurationListener.getBufferTime(t),
                                    _ = Math.floor(100 * t.percentVisible),
                                    d = e.durationMs || 0,
                                    l = Object.assign({ buffering_duration_millis: E, video_visibility: _, video_duration_millis: d }, { start_program_date_time_millis: i.start_program_date_time_millis, end_program_date_time_millis: i.end_program_date_time_millis }, n, o),
                                    h = { buffering_duration_millis: X(E), buffering_count: c, percent_in_view: _, sampled_bits_per_second: e.currentBitrate, data_usage_bytes: X(o.data_usage_bytes), start_program_date_time_millis: X(i.start_program_date_time_millis), end_program_date_time_millis: X(i.end_program_date_time_millis), audible_duration_millis: X(i.audible_duration_millis), bandwidth_estimate_bps: X(t.bandwidthEstimateBps), video_duration_millis: X(d), bitrate_metrics: ((s = this.bitrateHistory), (r = q(s)), r && { min_bps: Math.round(r.min), max_bps: Math.round(r.max), avg_bps: Math.round(r.avg) }), live_or_non_live_heartbeat_metrics: z(e.isLive, this.latencyHistory) };
                                this.analytics.emit(u.HEARTBEAT_EVENT, t, l, h);
                            }
                        }
                    }),
                    (e.getProgramDateTimeMs = function () {
                        if (void 0 !== this.startTimeMs && void 0 !== this.lastTimeMs) {
                            var t = this.startTimeMs,
                                e = this.lastTimeMs,
                                i = this.audibleDuration;
                            return (this.startTimeMs = this.lastTimeMs), (this.audibleDuration = 0), { start_program_date_time_millis: Math.round(t), end_program_date_time_millis: Math.round(e), audible_duration_millis: Math.round(i) };
                        }
                        return {};
                    }),
                    t
                );
            })();
            function z(t, e) {
                var i = q(e);
                return t ? { live_heartbeat_metrics: { latency_metrics: i && { min_ms: Math.round(i.min), max_ms: Math.round(i.max), avg_ms: Math.round(i.avg) } } } : { non_live_heartbeat_metrics: {} };
            }
            function q(t) {
                if (t && t.length) {
                    var e = (function (t) {
                            if (!t || 0 === t.length) return [Math.min(), Math.max()];
                            for (var e, i = 1 / 0, n = -1 / 0, a = l(t); !(e = a()).done; ) {
                                var s = e.value;
                                (i = Math.min(i, s)), (n = Math.max(n, s));
                            }
                            return [i, n];
                        })(
                            t.map(function (t) {
                                return t.value;
                            }),
                        ),
                        i = e[0],
                        n = e[1],
                        a = (function (t) {
                            var e = t.reduce(function (t, e) {
                                return t + e.weight;
                            }, 0);
                            return (
                                t.reduce(function (t, e) {
                                    return t + e.value * e.weight;
                                }, 0) / e
                            );
                        })(t);
                    return { min: i, max: n, avg: a };
                }
            }
            var J = (function () {
                    function t(t) {
                        (this.analytics = t), (this.hasFiredOnTrackMap = {}), this.analytics.on(u.INTEND_TO_PLAY_EVENT, this.onIntendToPlayEvent.bind(this)), this.analytics.on(u.REPLAY_EVENT, this.onIntendToPlayEvent.bind(this)), this.analytics.on(u.TRACK_FINISHED_EVENT, this.onTrackFinishedEvent.bind(this));
                    }
                    var e = t.prototype;
                    return (
                        (e.onIntendToPlayEvent = function (t) {
                            this.hasFiredOnTrackMap[t.currentTrackId] || ((this.hasFiredOnTrackMap[t.currentTrackId] = !0), this.analytics.emit(u.INITIAL_INTEND_TO_PLAY_EVENT, t));
                        }),
                        (e.onTrackFinishedEvent = function (t) {
                            var e = W(t);
                            e && (e.shouldLoop || (this.hasFiredOnTrackMap[t.currentTrackId] = !1));
                        }),
                        t
                    );
                })(),
                $ = (function () {
                    function t(t) {
                        (this.analytics = t), this.analytics.on(u.TRACK_FINISHED_EVENT, this.onTrackFinishedEvent.bind(this));
                    }
                    return (
                        (t.prototype.onTrackFinishedEvent = function (t) {
                            var e = W(t);
                            void 0 !== e && e.shouldLoop && this.analytics.emit(u.LOOP_EVENT, t);
                        }),
                        t
                    );
                })(),
                tt = { home: "HomeTimeline", list: "Lists", live_broadcast: "BroadcastPage", live_event_timeline: "EventPage", me: "UserTimeline", moments: "Moments", permalink: "TweetCard", profile: "UserTimeline", search: "Search" },
                et = function (t) {
                    return "/api/v2/" + t;
                };
            function it(t, e, i, n) {
                return { start: { method: t, path: et(e) }, ping: { method: t, path: et(i) }, stop: { method: t, path: et(n) } };
            }
            var nt,
                at = { public: { live: it("GET", "startPublic", "pingPublic", "stopPublic"), replay: it("GET", "replayViewedPublic", "pingReplayViewedPublic", "endReplayViewedPublic") }, periscopeAuth: { live: it("POST", "startWatching", "pingWatching", "stopWatching"), replay: it("POST", "replayViewed", "pingReplayViewed", "endReplayViewed") }, twitterAuth: { live: it("POST", "twitter/startWatching", "twitter/pingWatching", "twitter/stopWatching"), replay: it("POST", "twitter/replayViewed", "twitter/pingReplayViewed", "twitter/endReplayViewed") } },
                st = (function () {
                    function t(t, e) {
                        if (((this.httpClient = t), (this.authToken = null == e ? void 0 : e.periscopeAuthToken), (this.isAnonymous = null == e ? void 0 : e.isAnonymous), (null == e ? void 0 : e.scribeContext) && (null == e ? void 0 : e.periscopeComponent))) {
                            var i = e.scribeContext,
                                n = e.periscopeComponent;
                            (this.pageContext = this.getPageContext(i)), (this.componentContext = n);
                        }
                        this.lifecycles = this.authToken ? ("Twitter" === (null == e ? void 0 : e.userType) ? at.twitterAuth : at.periscopeAuth) : at.public;
                    }
                    var e = t.prototype;
                    return (
                        (e.getPageContext = function (t) {
                            var e = t.page;
                            return "permalink_overlay" === t.section ? "TweetCard" : tt[e] || "";
                        }),
                        (e.call = function (t, e) {
                            var i = Date.now(),
                                n = { "X-Idempotence": (nt = i <= nt ? nt + 1 : i), "X-Attempt": 1, "X-Periscope-User-Agent": "Twitter/video-analytics", "content-type": "application/json" },
                                a = Object.assign({}, e);
                            this.authToken && (a.cookie = this.authToken);
                            var s = t.method,
                                r = t.path,
                                o = {};
                            return "POST" === s ? (o.data = a) : (o.params = a), this.httpClient.dispatch(Object.assign({ headers: n, host: "https://proxsee.pscp.tv", method: s, path: r }, o));
                        }),
                        (e.videoStartWatching = function (t, e, i) {
                            var n = this;
                            return new Promise(function (a, s) {
                                ("string" != typeof t || t.length < 1) && s(new Error("Cannot videoStartWatching. lifecycleToken not valid, lifecycleToken=" + t));
                                var r = e ? n.lifecycles.replay.start : n.lifecycles.live.start,
                                    o = Object.assign({ auto_play: !!i, life_cycle_token: t }, !e && n.isAnonymous && { hidden: !0 });
                                n.pageContext && (o.page = n.pageContext),
                                    n.componentContext && (o.component = n.componentContext),
                                    n.call(r, o).then(function (t) {
                                        var i = JSON.parse(t.body);
                                        return e || i.session ? a(i.session) : s(new Error("[" + r.path + "] did not return a session"));
                                    }, s);
                            });
                        }),
                        (e.videoPingWatching = function (t, e) {
                            var i = this;
                            return new Promise(function (n, a) {
                                ("string" != typeof t || t.length < 1) && a(new Error("Cannot videoPingWatching. session not valid, session=" + t));
                                var s = e ? i.lifecycles.replay.ping : i.lifecycles.live.ping;
                                i.call(s, { session: t }).then(function (t) {
                                    JSON.parse(t.body).success ? n() : a(new Error("Ping request failed"));
                                }, a);
                            });
                        }),
                        (e.videoStopWatching = function (t, e) {
                            var i = this;
                            return new Promise(function (n, a) {
                                ("string" != typeof t || t.length < 1) && a(new Error("Cannot videoStopWatching. session not valid, session=" + t));
                                var s = e ? i.lifecycles.replay.stop : i.lifecycles.live.stop;
                                i.call(s, { session: t }).then(function (t) {
                                    JSON.parse(t.body).success ? n() : a(new Error("StopWatching request failed"));
                                }, a);
                            });
                        }),
                        t
                    );
                })(),
                rt = 3e3;
            var ot = (function () {
                    function t(t) {
                        (this.api = t), (this.handleStartWatching = this.handleStartWatching.bind(this)), (this.updateSession = this.updateSession.bind(this)), (this.startPingWatching = this.startPingWatching.bind(this)), (this.isVideoPreview = !1), (this.isReplay = !0);
                    }
                    var e = t.prototype;
                    return (
                        (e.updateSession = function (t) {
                            (this.session = t), t && this.startPingWatching();
                        }),
                        (e.setStartWatchingTimer = function () {
                            this.startWatchingTimer = setTimeout(this.handleStartWatching, rt);
                        }),
                        (e.clearStartWatchingTimer = function () {
                            this.startWatchingTimer && clearTimeout(this.startWatchingTimer);
                        }),
                        (e.handleStartWatching = function () {
                            if (!this.isWatching) {
                                this.stopPingWatching();
                                var t = this.api.videoStartWatching(this.lifecycleToken, this.isReplay, this.isVideoPreview).then(this.updateSession);
                                return (this.isWatching = !0), t;
                            }
                        }),
                        (e.startPingWatching = function () {
                            var t = this;
                            this.stopPingWatching(),
                                (this.pingWatchingTimer = setInterval(function () {
                                    t.isWatching ? t.api.videoPingWatching(t.session, t.isReplay) : t.stopPingWatching();
                                }, 3e4));
                        }),
                        (e.stopPingWatching = function () {
                            clearInterval(this.pingWatchingTimer);
                        }),
                        (e.updateLifecycleToken = function (t) {
                            void 0 !== t && t !== this.lifecycleToken && ((this.lifecycleToken = t), this.isWatching && (this.stopWatching(), this.handleStartWatching()));
                        }),
                        (e.updateIsReplay = function (t) {
                            void 0 !== t && t !== this.isReplay && (this.isReplay = t);
                        }),
                        (e.startWatching = function () {
                            return (this.isVideoPreview = !1), this.handleStartWatching();
                        }),
                        (e.startWatchingPreview = function () {
                            (this.isVideoPreview = !0), this.clearStartWatchingTimer(), this.setStartWatchingTimer();
                        }),
                        (e.stopWatching = function () {
                            this.isWatching && (this.stopPingWatching(), this.session && this.api.videoStopWatching(this.session, this.isReplay), (this.isWatching = !1));
                        }),
                        (e.destroy = function () {
                            this.stopWatching(), this.clearStartWatchingTimer(), (this.isVideoPreview = void 0), (this.lifecycleToken = void 0), (this.session = void 0), (this.isReplay = void 0), (this.isWatching = void 0), (this.pingWatchingTimer = void 0);
                        }),
                        t
                    );
                })(),
                ct = [u.CONFIG_LOADED_EVENT, u.PLAY_EVENT, u.PAUSE_EVENT, u.TRACK_FINISHED_EVENT, u.TEARDOWN_EVENT],
                Et = (function () {
                    function t(t, e) {
                        var i = this;
                        (this.analytics = t),
                            (this.lifecycleController = e),
                            ct.map(function (t) {
                                return i.analytics.on(t, i.possiblyHandleEvent.bind(i, t));
                            });
                    }
                    var e = t.prototype;
                    return (
                        (e.possiblyHandleEvent = function (t, e) {
                            if (this.shouldSendPeriscopeAnalytics(e)) {
                                var i = W(e);
                                switch (t) {
                                    case u.CONFIG_LOADED_EVENT:
                                        this.updateLifecycleToken(e), this.updateReplayState(!i.isLive);
                                        break;
                                    case u.PLAY_EVENT:
                                        this.handleStartWatching(e);
                                        break;
                                    case u.PAUSE_EVENT:
                                        this.handleStopWatching(e);
                                        break;
                                    case u.TRACK_FINISHED_EVENT:
                                        this.handleStopWatching(e), this.updateReplayState(!0);
                                        break;
                                    case u.TEARDOWN_EVENT:
                                        this.teardownPeriscopeLifecycle();
                                }
                            }
                        }),
                        (e.shouldSendPeriscopeAnalytics = function (t) {
                            var e = W(t);
                            return void 0 !== e && (e.contentType === N || e.contentType === p);
                        }),
                        (e.getLifecycleToken = function (t) {
                            return W(t).lifecycleToken;
                        }),
                        (e.updateLifecycleToken = function (t) {
                            var e = this.getLifecycleToken(t);
                            this.lifecycleController.updateLifecycleToken(e);
                        }),
                        (e.updateReplayState = function (t) {
                            this.lifecycleController.updateIsReplay(t);
                        }),
                        (e.handleStartWatching = function (t) {
                            this.getLifecycleToken(t) && (t.isPreview ? this.lifecycleController.startWatchingPreview() : this.lifecycleController.startWatching());
                        }),
                        (e.handleStopWatching = function (t) {
                            this.getLifecycleToken(t) && this.lifecycleController.stopWatching();
                        }),
                        (e.teardownPeriscopeLifecycle = function () {
                            this.lifecycleController.destroy(), (this.lifecycleController = null);
                        }),
                        t
                    );
                })(),
                _t = (function () {
                    function t(t) {
                        (this.analytics = t), (this.lapseMap = {}), this.analytics.on(u.TICK_EVENT, this.onTickEvent.bind(this)), this.analytics.on(u.TRACK_FINISHED_EVENT, this.onTrackFinishedEvent.bind(this)), this.analytics.on(u.AD_SKIP_EVENT, this.onAdSkipEvent.bind(this)), this.analytics.on(u.VIDEO_VIEW_EVENT, this.onVideoViewEvent.bind(this));
                    }
                    var e = t.prototype;
                    return (
                        (e.onTrackFinishedEvent = function (t) {
                            var e = W(t);
                            if (void 0 !== e) {
                                var i = this.lapseMap[e.id];
                                if (void 0 !== i) {
                                    i.timePlayedToMs = 0;
                                    var n = k(t);
                                    n && n.contentType !== m && !e.shouldLoop && (this.emit(i, t), (i.viewFired = !1));
                                }
                            }
                        }),
                        (e.onAdSkipEvent = function (t) {
                            this.onTickEvent(t);
                            var e = W(t);
                            if (void 0 !== e) {
                                var i = this.lapseMap[e.id];
                                this.emit(i, t);
                            }
                        }),
                        (e.onVideoViewEvent = function (t) {
                            var e = W(t);
                            if (void 0 !== e) {
                                var i = this.lapseMap[e.id];
                                void 0 === i && ((i = this.initializeLapseMapForTrack(e)), (this.lapseMap[e.id] = i)), (i.viewFired = !0);
                            }
                        }),
                        (e.onTickEvent = function (t) {
                            var e = W(t);
                            if (void 0 !== e) {
                                var i = this.lapseMap[e.id];
                                void 0 === i && ((i = this.initializeLapseMapForTrack(e)), (this.lapseMap[e.id] = i)), t.isSeeking ? (i.timePlayedToMs = e.currentTimeMs) : (this.updateTimingData(e, i), this.checkPlaybackLapse(i, t));
                            }
                        }),
                        (e.initializeLapseMapForTrack = function (t) {
                            return { timePlayedMs: 0, timePlayedToMs: t.currentTimeMs, viewFired: !1 };
                        }),
                        (e.updateTimingData = function (t, e) {
                            var i = t.currentTimeMs - e.timePlayedToMs;
                            (e.timePlayedToMs = t.currentTimeMs), (e.timePlayedMs += i);
                        }),
                        (e.checkPlaybackLapse = function (t, e) {
                            t.timePlayedMs > 1e4 && this.emit(t, e);
                        }),
                        (e.emit = function (t, e) {
                            var i = k(e),
                                n = t.viewFired,
                                a = t.timePlayedMs;
                            n && a > 0 && i && i.contentType !== f && (this.analytics.emit(u.PLAYBACK_LAPSE_EVENT, e, { playback_lapse_ms: Math.round(a) }), (t.timePlayedMs = 0));
                        }),
                        t
                    );
                })(),
                dt = function (t) {
                    return (e = "AD_CTA_TO_ENGAGEMENT_MAPPING_ERROR"), ((i = new Error("Unable to map CTA type to engagement type for: " + t)).name = e), i;
                    var e, i;
                },
                lt = (function () {
                    function t() {}
                    return (
                        (t.set = function (e) {
                            t.report = e;
                        }),
                        t
                    );
                })();
            (0, E.Z)(lt, "report", function (t) {});
            var ht = (((s = {})[u.PLAYBACK_START_EVENT] = "playback_start"), (s[u.PLAYBACK_25_EVENT] = "playback_25"), (s[u.PLAYBACK_50_EVENT] = "playback_50"), (s[u.PLAYBACK_75_EVENT] = "playback_75"), (s[u.PLAYBACK_95_EVENT] = "playback_95"), (s[u.PLAYBACK_COMPLETE_EVENT] = "playback_complete"), (s[u.MRC_VIEW_EVENT] = "mrc_view"), (s[u.GROUPM_VIEW_EVENT] = "groupm_view"), (s[u.ONE_SEC_VIEW_EVENT] = "1sec_view"), (s[u.SIX_SEC_VIEW_EVENT] = "6sec_view"), (s[u.SHORT_FORM_COMPLETE_EVENT] = "short_form_complete"), (s[u.VIDEO_VIEW_EVENT] = "view"), (s[u.PLAY_FROM_TAP_EVENT] = "play_from_tap"), (s[u.VIEW_THRESHOLD_EVENT] = "view_threshold"), s),
                ut = (function () {
                    function t(t, e) {
                        var i = this;
                        (this.promotedLogHandler = e),
                            Object.keys(ht).forEach(function (e) {
                                t.on(e, function (t, n) {
                                    var a = W(t);
                                    if (void 0 !== a) {
                                        var s = a.displayType === T;
                                        i.log(i.buildEventName(e, a), t, n, { video_details: { is_preroll_video: s, video_type: P[a.contentType] } });
                                    }
                                });
                            }),
                            t.on(u.PLAYBACK_START_EVENT, this.logImpression.bind(this)),
                            t.on(u.CTA_CLICK_EVENT, this.onCtaClickEvent.bind(this)),
                            t.on(u.VIDEO_SESSION_EVENT, this.onVideoSessionEvent.bind(this));
                    }
                    var e = t.prototype;
                    return (
                        (e.buildEventName = function (t, e) {
                            var i = ht[t];
                            return "video_" + e.displayType + "_" + i;
                        }),
                        (e.log = function (t, e, i, n) {
                            void 0 === i && (i = {});
                            var a = W(e),
                                s = this.getPromotedEventData(e, a);
                            if (void 0 !== s.impression_id) {
                                var r = this.getAmplifyDetailsData(e, a, i),
                                    o = JSON.stringify({ amplify_details: r }),
                                    c = n && JSON.stringify(n),
                                    E = Object.assign(s, r, { event: t, card_event: o, engagement_metadata: c });
                                this.promotedLogHandler.log(E);
                            }
                        }),
                        (e.logImpression = function (t) {
                            var e = W(t);
                            this.isPromotedTrack(t, e) && this.log("impression", t);
                        }),
                        (e.onCtaClickEvent = function (t) {
                            var e = W(t),
                                i = null == e ? void 0 : e.cta,
                                n = A[null == i ? void 0 : i.type];
                            if (!n) return lt.report(dt(null == i ? void 0 : i.type));
                            e.displayType === T ? this.log("video_" + e.displayType + "_cta_" + n + "_click", t) : this.log("video_cta_" + n + "_click", t);
                        }),
                        (e.onVideoSessionEvent = function (t, e) {
                            void 0 !== e && this.log("video_session", t, {}, e);
                        }),
                        (e.isPromotedTrack = function (t, e) {
                            return e && e.impressionId && e.disclosureType;
                        }),
                        (e.getPromotedEventData = function (t, e) {
                            var i = e.disclosureType || t.disclosureType;
                            return { impression_id: e.impressionId || t.impressionId, earned: "earned" === i };
                        }),
                        (e.getAmplifyDetailsData = function (t, e, i) {
                            var n = k(t),
                                a = B(t) || {};
                            return Object.assign({ content_id: n.contentId, dynamic_preroll_type: a.dynamicPrerollType, preroll_uuid: a.contentId, preroll_owner_id: a.publisherId, video_owner_id: e.publisherId, video_uuid: e.contentId, video_type: e.displayType === v ? "video" : "ad", video_is_muted: t.isMuted, video_visibility: Math.floor(100 * t.percentVisible) }, i);
                        }),
                        t
                    );
                })(),
                Tt = (function () {
                    function t(t) {
                        (this.analytics = t), this.analytics.on(u.TICK_EVENT, this.onTickEvent.bind(this));
                    }
                    return (
                        (t.prototype.onTickEvent = function (t) {
                            var e = W(t);
                            void 0 !== e && (t.isSeeking && void 0 === this.seekingStartTime ? (this.seekingStartTime = e.currentTimeMs) : t.isSeeking || void 0 === this.seekingStartTime || (e.currentTimeMs < this.seekingStartTime && this.analytics.emit(u.REWIND_EVENT, t), (this.seekingStartTime = void 0)));
                        }),
                        t
                    );
                })(),
                vt = (((r = {})[u.VIDEO_VIEW_EVENT] = "video_view"), (r[u.PLAY_FROM_TAP_EVENT] = "play_from_tap"), (r[u.VIEW_THRESHOLD_EVENT] = "view_threshold"), (r[u.MRC_AUDIBLE_VIEW_EVENT] = "video_mrc_audible_view"), (r[u.MRC_VIEW_EVENT] = "video_mrc_view"), (r[u.SIX_SEC_VIEW_EVENT] = "video_6sec_view"), (r[u.SHORT_FORM_COMPLETE_EVENT] = "video_short_form_complete"), (r[u.PLAYBACK_START_EVENT] = "playback_start"), (r[u.PLAYBACK_25_EVENT] = "playback_25"), (r[u.PLAYBACK_50_EVENT] = "playback_50"), (r[u.PLAYBACK_75_EVENT] = "playback_75"), (r[u.PLAYBACK_95_EVENT] = "playback_95"), (r[u.PLAYBACK_COMPLETE_EVENT] = "playback_complete"), (r[u.INITIAL_INTEND_TO_PLAY_EVENT] = "intent_to_play"), (r[u.PLAY_EVENT] = "play"), (r[u.PAUSE_EVENT] = "pause"), (r[u.REPLAY_EVENT] = "replay"), (r[u.LOOP_EVENT] = "loop"), (r[u.MUTE_EVENT] = "mute"), (r[u.UNMUTE_EVENT] = "unmute"), (r[u.FULL_SCREEN_ENTER_EVENT] = "full_screen_enter"), (r[u.FULL_SCREEN_EXIT_EVENT] = "full_screen_exit"), (r[u.SHRINK_EVENT] = "shrink"), (r[u.PLAYBACK_LAPSE_EVENT] = "playback_lapse"), (r[u.PLAYBACK_ERROR_EVENT] = "error"), (r[u.STARTUP_ERROR_EVENT] = "playback_startup_error"), (r[u.VIDEO_QUALITY_VIEW_EVENT] = "video_quality_view"), (r[u.AD_SKIP_EVENT] = "video_ad_skip"), (r[u.SCRUB_EVENT] = "scrub_start"), (r[u.PICTURE_IN_PICTURE_ON_EVENT] = "picture_in_picture_on"), (r[u.PICTURE_IN_PICTURE_OFF_EVENT] = "picture_in_picture_off"), r),
                pt = ["playback_lapse", "video_1sec_view", "shrink", "full_screen"].reduce(function (t, e) {
                    return (t[e] = !0), t;
                }, {}),
                mt = "tweet",
                ft = "client_event",
                yt = "live_video_heartbeat_event",
                Vt = 7,
                Nt = 13,
                gt = 16,
                It = 26,
                Pt = 28,
                At = 1,
                Mt = 2,
                bt = 1,
                Ct = 2,
                St = ["appplayer", "poll2choice_video", "poll3choice_video", "poll4choice_video", "promo_video_convo", "promo_video_website", "video_direct_message"],
                Lt = /^([0-9]{1,2})_([0-9]+)$/,
                wt = (function () {
                    function t(t, e, i) {
                        var n = this;
                        (this.scribeHandler = e),
                            (this.context = i || {}),
                            (this.isAdFormatsCard = -1 !== St.indexOf(this.context.cardType)),
                            Object.keys(vt).forEach(function (e) {
                                t.on(e, function (t, i, a) {
                                    n.scribe(vt[e], t, i, a);
                                });
                            }),
                            t.on(u.CTA_CLICK_EVENT, this.onCtaClickEvent.bind(this)),
                            t.on(u.INITIAL_CTA_IMPRESSION_EVENT, this.onCtaImpressionEvent.bind(this)),
                            t.on(u.HEARTBEAT_EVENT, this.onHeartbeatEvent.bind(this)),
                            t.on(u.CAPTIONS_TOGGLED_EVENT, this.onCaptionsToggledEvent.bind(this)),
                            t.on(u.MANUAL_QUALITY_LEVEL_CHANGE_EVENT, this.onManualQualityLevelChangeEvent.bind(this)),
                            t.on(u.PLAYBACK_SPEED_CHANGE_EVENT, this.onPlaybackSpeedChangeEvent.bind(this));
                    }
                    var e = t.prototype;
                    return (
                        (e.onCaptionsToggledEvent = function (t, e) {
                            var i = e ? "enable" : "disable",
                                n = { page: "settings", section: "captions", element: "display_audio_transcriptions", action: i };
                            this.scribe(i, t, {}, {}, ft, n);
                        }),
                        (e.onCtaClickEvent = function (t) {
                            var e = W(t).cta,
                                i = A[null == e ? void 0 : e.type];
                            if (!i) return lt.report(dt(null == e ? void 0 : e.type));
                            var n = null != (null == e ? void 0 : e.click_tracking_embed_details) ? { click_tracking_embed_details: null == e ? void 0 : e.click_tracking_embed_details } : {};
                            this.scribe("cta_" + i + "_click", t, {}, {}, ft, null, n);
                        }),
                        (e.onCtaImpressionEvent = function (t) {
                            var e = W(t).cta,
                                i = A[null == e ? void 0 : e.type];
                            if (!i) return lt.report(dt(null == e ? void 0 : e.type));
                            this.scribe("cta_" + i + "_impression", t);
                        }),
                        (e.onHeartbeatEvent = function (t, e, i) {
                            var n = k(t);
                            if (void 0 !== n) {
                                var a;
                                switch (n.contentType) {
                                    case f:
                                    case p:
                                        a = yt;
                                        break;
                                    default:
                                        a = ft;
                                }
                                this.scribe("heartbeat", t, e, i, a);
                            }
                        }),
                        (e.onManualQualityLevelChangeEvent = function (t, e) {
                            var i = e.oldLevel,
                                n = e.newLevel;
                            this.scribe("manual_quality_level_change", t, {}, { oldLevel: i, newLevel: n });
                        }),
                        (e.onPlaybackSpeedChangeEvent = function (t, e) {
                            var i = e.newSpeed,
                                n = e.oldSpeed,
                                a = { newSpeed: H(i), oldSpeed: H(n) };
                            this.scribe("playback_speed_change", t, {}, a);
                        }),
                        (e.scribe = function (t, e, i, n, a, s, r) {
                            void 0 === i && (i = {}), void 0 === n && (n = {}), void 0 === a && (a = ft), void 0 === s && (s = null), void 0 === r && (r = {});
                            var o,
                                c,
                                E = k(e) || {},
                                _ = W(e) || {},
                                d = B(e) || {},
                                l = e.session || {},
                                h = (e.features || {}).isLiveTimecodeEnabled && _.requestedTimecode > 0 ? 1e3 * _.requestedTimecode : void 0;
                            this.isActionSupportedInClientMediaEvent(t) && (o = { media_client_event_type: ((c = {}), (c[t] = n), c), session_state: { session_id: l.id, content_video_identifier: Rt(this.getContentIdentifier(E), this.context.scribeContext), video_ads_passthrough_data: e.videoAnalyticsScribePassthrough, live_event_identifier: this.getLiveEventIdentifier(e, E.contentType), tweet_id: this.getTweetId(e.source, E.contentType) }, playing_media_state: { video_type: _.displayType === v ? Mt : At, media_asset_url: this.getVariantUrl(_), media_timecode_millis: X(h), media_metadata: { broadcast_id: _.broadcastId, twitter_publisher_id: X(_.publisherId), publisher_identifier: kt(_.publisherId, _.periscopePublisherId, this.context.scribeContext) }, broadcast_media_state: Wt(_.contentType, _.isLive) }, player_state: { is_muted: e.isMuted } });
                            var u = Object.assign({}, this.getBaseItem(e.source, e.eventId), { media_asset_url: this.getVariantUrl(_), video_uuid: _.contentId, video_owner_id: _.publisherId, video_type: _.displayType === v ? "video" : "ad", promoted_id: _.impressionId || e.impressionId, content_id: E.contentId, dynamic_preroll_type: d.dynamicPrerollType, preroll_uuid: d.contentId, preroll_owner_id: d.publisherId, publisher_id: E.publisherId, media_session_id: l.id, video_analytics_scribe_passthrough: e.videoAnalyticsScribePassthrough, client_media_event: o, media_timecode_millis: h, disclosure_type: _.disclosureType || e.disclosureType, video_visibility: Math.floor(100 * e.percentVisible) }, i, this.getLexMetadata(e, E)),
                                T = s || { element: this.getScribeElement(E), action: t };
                            this.scribeHandler.log({ namespace: T, category: a, data: Object.assign({}, r, { items: [u] }) });
                        }),
                        (e.getContentIdentifier = function (t) {
                            var e = t.contentId,
                                i = this.parseMediaKeyString(e);
                            if (i) return { media_platform_identifier: i };
                            switch (t.contentType) {
                                case y:
                                case m:
                                case f:
                                case p:
                                    return this.getMediaPlatformIdentifierUsingDefaultCategory(t);
                                case I:
                                    return this.isAdFormatsCard ? { media_platform_identifier: { media_category: this.getMediaEntityCategoryUsingPlaybackUrl(t), media_id: e } } : { amplify_card_identifier: { vmap_url: t.vmapUrl, content_id: e } };
                                default:
                                    return { unknown_identifier: { content_id: e } };
                            }
                        }),
                        (e.parseMediaKeyString = function (t) {
                            var e = Lt.exec(t) || [],
                                i = e[1],
                                n = e[2],
                                a = +i;
                            if (a && n) return { media_category: a, media_id: n };
                        }),
                        (e.getMediaPlatformIdentifierUsingDefaultCategory = function (t) {
                            var e = this.defaultMediaCategory(t);
                            return e ? { media_platform_identifier: { media_category: e, media_id: t.contentId } } : { unknown_identifier: { content_id: t.contentId } };
                        }),
                        (e.getMediaEntityCategoryUsingPlaybackUrl = function (t) {
                            var e = this.getVariantUrl(t);
                            if (e) {
                                if (-1 !== e.indexOf("amplify_video")) return Nt;
                                if (-1 !== e.indexOf("ext_tw_video")) return Vt;
                            }
                        }),
                        (e.defaultMediaCategory = function (t) {
                            switch (t.contentType) {
                                case m:
                                    return gt;
                                case f:
                                    return It;
                                case p:
                                    return Pt;
                                case y:
                                    return this.getMediaEntityCategoryUsingPlaybackUrl(t);
                                default:
                                    return;
                            }
                        }),
                        (e.getLiveEventIdentifier = function (t, e) {
                            return t.eventId ? { lex_event_identifier: { lex_event_id: t.eventId } } : e === f ? { legacy_live_event_identifier: { legacy_live_event_id: t.source.id } } : void 0;
                        }),
                        (e.getTweetId = function (t, e) {
                            return e === p || e === f ? t.tweetId : t.type === mt ? t.id : void 0;
                        }),
                        (e.getScribeElement = function (t) {
                            switch (t.contentType) {
                                case g:
                                    return "vine_player";
                                case m:
                                    return "gif_player";
                                case I:
                                    return "platform_amplify_card";
                                case f:
                                case p:
                                    return "live_video_player";
                                case V:
                                    return "partner_video_player";
                                case N:
                                    return "periscope_player";
                                default:
                                    return "video_player";
                            }
                        }),
                        (e.getBaseItem = function (t, e) {
                            var i = this.context.baseScribeItem;
                            return i || (t.type === mt ? { id: t.id, item_type: "0" } : t.tweetId ? { id: t.tweetId, item_type: "0" } : e ? { id: e, item_type: "28" } : void 0);
                        }),
                        (e.getLexMetadata = function (t, e) {
                            var i = this.context.scribeContext || {},
                                n = {},
                                a = {};
                            return e.broadcastId && ((n.is_replay_broadcast = !e.isLive), (a.tweet_id = t.source.tweetId), "live_event_timeline" === i.page && "tweet" !== i.component ? (n.host_broadcast_id = e.broadcastId) : (n.target_broadcast_id = e.broadcastId)), t.eventId && ("live_event_timeline" === i.page && "tweet" !== i.component ? (a.host_event_id = t.eventId) : (a.target_event_id = t.eventId)), { live_broadcast_details: n, live_video_event_details: a };
                        }),
                        (e.getVariantUrl = function (t) {
                            var e = t.variants && t.variants[t.currentVariantIndex];
                            return e && e.src;
                        }),
                        (e.isActionSupportedInClientMediaEvent = function (t) {
                            return !pt[t];
                        }),
                        t
                    );
                })();
            function Ot(t) {
                return t && "messages" === t.page;
            }
            function Rt(t, e) {
                return Ot(e) ? { scrubbed_identifier: {} } : t;
            }
            function kt(t, e, i) {
                return Ot(i) ? { scrubbed_publisher_identifier: {} } : t && e ? { twitter_periscope_publisher_identifier: { twitter_id: X(t), periscope_id: e } } : t ? { twitter_publisher_identifier: { id: X(t) } } : e ? { periscope_publisher_identifier: { id: e } } : { unknown_publisher_identifier: {} };
            }
            function Wt(t, e) {
                if (t === p || t === f || t === N) return { broadcast_state: e ? bt : Ct };
            }
            var Dt = (function () {
                    function t(t) {
                        (this.analytics = t), this.analytics.on(u.REPLAY_EVENT, this.onReplayEvent.bind(this)), this.analytics.on(u.TRACK_FINISHED_EVENT, this.onTrackFinishedEvent.bind(this)), this.analytics.on(u.INITIAL_INTEND_TO_PLAY_EVENT, this.onInitialIntendToPlayEvent.bind(this));
                    }
                    var e = t.prototype;
                    return (
                        (e.onInitialIntendToPlayEvent = function (t) {
                            this.resetLatencyStartDate(t.intentToPlayTime);
                        }),
                        (e.onReplayEvent = function () {
                            this.resetLatencyStartDate();
                        }),
                        (e.onTrackFinishedEvent = function (t) {
                            this.resetLatencyStartDate(), this.trackId !== t.currentTrackId && (this.trackId = t.currentTrackId);
                        }),
                        (e.resetLatencyStartDate = function (t) {
                            this.latencyStartDate = t || new Date();
                        }),
                        (e.getLatencyData = function () {
                            if (void 0 !== this.latencyStartDate) return { latency: new Date() - this.latencyStartDate };
                        }),
                        t
                    );
                })(),
                Bt = [
                    { progress: 0.25, event: u.PLAYBACK_25_EVENT },
                    { progress: 0.5, event: u.PLAYBACK_50_EVENT },
                    { progress: 0.75, event: u.PLAYBACK_75_EVENT },
                    { progress: 0.95, event: u.PLAYBACK_95_EVENT },
                    { progress: 1, event: u.PLAYBACK_COMPLETE_EVENT },
                ],
                Ft = (function () {
                    function t(t) {
                        (this.analytics = t), (this.eventMap = {}), (this.playbackLatencyListener = new Dt(t)), this.analytics.on(u.TRACK_FINISHED_EVENT, this.onTrackFinishedEvent.bind(this)), this.analytics.on(u.TICK_EVENT, this.onTickEvent.bind(this));
                    }
                    var e = t.prototype;
                    return (
                        (e.onTrackFinishedEvent = function (t) {
                            var e = W(t);
                            void 0 !== e && (e.shouldLoop || (this.eventMap[t.currentTrackId] = {}));
                        }),
                        (e.onTickEvent = function (t) {
                            var e = W(t);
                            if (void 0 !== e && e.durationMs) {
                                var i = this.eventMap[e.id];
                                void 0 === i && ((i = {}), (this.eventMap[e.id] = i)), this.checkAllTentpoles(e, i, t);
                            }
                        }),
                        (e.checkAllTentpoles = function (t, e, i) {
                            if (i.isPlaying) {
                                var n = t.durationMs,
                                    a = t.currentTimeMs,
                                    s = this.playbackLatencyListener.getLatencyData() || {},
                                    r = { latency_millis: s.latency, cache_info: { notCached: {} } };
                                this.emitOnce(u.PLAYBACK_START_EVENT, e, i, s, r), t.isLive || this.checkProgressTentpoles(n, a, e, i);
                            }
                        }),
                        (e.checkProgressTentpoles = function (t, e, i, n) {
                            var a = this;
                            Bt.forEach(function (s) {
                                var r = s.progress * t;
                                e >= r - 1e3 && e <= r + 1e3 && a.emitOnce(s.event, i, n);
                            });
                        }),
                        (e.emitOnce = function (t, e, i, n, a) {
                            e[t] || (this.analytics.emit(t, i, n, a), (e[t] = !0));
                        }),
                        t
                    );
                })(),
                Ht = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
                Ut = (function () {
                    function t(t) {
                        (this.analytics = t), (this.sessionDataStore = {}), this.analytics.on(u.TICK_EVENT, this.onTickEvent.bind(this)), this.analytics.on(u.FULL_SCREEN_EVENT, this.onFullscreenEvent.bind(this)), this.analytics.on(u.SHRINK_EVENT, this.onShrinkEvent.bind(this)), this.analytics.on(u.TRACK_FINISHED_EVENT, this.onTrackFinishedEvent.bind(this)), this.analytics.on(u.AD_SKIP_EVENT, this.onTrackInterrupt.bind(this)), this.analytics.on(u.TEARDOWN_EVENT, this.onTrackInterrupt.bind(this));
                    }
                    var e = t.prototype;
                    return (
                        (e.onTickEvent = function (t) {
                            var e = W(t);
                            if (void 0 !== e) {
                                var i = this.getOrCreateNewSessionDataForTrack(e, t);
                                t.isSeeking ? (i.currentTimeMs = e.currentTimeMs) : this.updateViewData(e, i, t);
                            }
                        }),
                        (e.onFullscreenEvent = function (t) {
                            var e = W(t);
                            void 0 !== e && (this.getOrCreateNewSessionDataForTrack(e, t).isFullscreenMode = !0);
                        }),
                        (e.onShrinkEvent = function (t) {
                            var e = W(t);
                            void 0 !== e && (this.getOrCreateNewSessionDataForTrack(e, t).isFullscreenMode = !1);
                        }),
                        (e.onTrackFinishedEvent = function (t) {
                            var e = W(t);
                            if (void 0 !== e) {
                                var i = this.sessionDataStore[e.id];
                                if (void 0 !== i)
                                    if (e.shouldLoop) i.currentTimeMs = 0;
                                    else {
                                        if (i.timeWatchedMs > 0) {
                                            var n = this.constructVideoSessionDetails(i, e);
                                            this.emitVideoSessionEvent(t, n);
                                        }
                                        this.sessionDataStore[e.id] = void 0;
                                    }
                            }
                        }),
                        (e.onTrackInterrupt = function (t) {
                            var e = W(t);
                            if (void 0 !== e) {
                                var i = this.sessionDataStore[e.id];
                                if (void 0 !== i) {
                                    if (i.timeWatchedMs > 0) {
                                        var n = this.constructVideoSessionDetails(i, e);
                                        this.emitVideoSessionEvent(t, n);
                                    }
                                    this.sessionDataStore[e.id] = void 0;
                                }
                            }
                        }),
                        (e.getOrCreateNewSessionDataForTrack = function (t, e) {
                            var i = this.sessionDataStore[t.id];
                            return void 0 === i && ((i = { sizesInfoAtTheStart: e.sizesInfo, currentTimeMs: t.currentTimeMs, isFullscreenMode: !1, timeWatchedMs: 0, timeWatchedFullscreenMs: 0, timeWatchedWithAudioMs: 0, timeWatchedFullscreenWithAudioMs: 0, watchedMsByInViewPct: this.generateNewAggregateHistogram(), watchedWithAudioMsByInViewPct: this.generateNewAggregateHistogram(), watchedMsByViewportPct: this.generateNewAggregateHistogram(), maxContinuousWatchedMsByInViewPct: this.generateNewMaxContinuousHistogram(), maxContinuousWatchedWithAudioMsByInViewPct: this.generateNewMaxContinuousHistogram() }), (this.sessionDataStore[t.id] = i)), i;
                        }),
                        (e.generateNewAggregateHistogram = function () {
                            for (var t, e = {}, i = l(Ht); !(t = i()).done; ) {
                                e[t.value] = 0;
                            }
                            return e;
                        }),
                        (e.generateNewMaxContinuousHistogram = function () {
                            for (var t, e = {}, i = l(Ht); !(t = i()).done; ) {
                                e[t.value] = { current: 0, max: 0 };
                            }
                            return e;
                        }),
                        (e.resetContinuousViewDataForHistogram = function (t) {
                            for (var e, i = l(Ht); !(e = i()).done; ) {
                                var n = e.value;
                                this.resetContinuousViewDataForBucket(t[n]);
                            }
                        }),
                        (e.resetContinuousViewDataForBucket = function (t) {
                            (t.max = Math.max(t.current, t.max)), (t.current = 0);
                        }),
                        (e.updateViewData = function (t, e, i) {
                            var n = t.currentTimeMs - e.currentTimeMs,
                                a = e.isFullscreenMode ? 1 : i.percentVisible,
                                s = e.isFullscreenMode ? 1 : i.percentOfViewportOccupied;
                            (e.currentTimeMs = t.currentTimeMs), n < 0 || ((e.timeWatchedMs += n), this.updateAggregateHistogram(e.watchedMsByInViewPct, a, n), this.updateAggregateHistogram(e.watchedMsByViewportPct, s, n), this.updateMaxContinuousHistogram(e.maxContinuousWatchedMsByInViewPct, a, n), i.isMuted ? this.resetContinuousViewDataForHistogram(e.maxContinuousWatchedWithAudioMsByInViewPct) : ((e.timeWatchedWithAudioMs += n), this.updateAggregateHistogram(e.watchedWithAudioMsByInViewPct, a, n), this.updateMaxContinuousHistogram(e.maxContinuousWatchedWithAudioMsByInViewPct, a, n)), e.isFullscreenMode && ((e.timeWatchedFullscreenMs += n), i.isMuted || (e.timeWatchedFullscreenWithAudioMs += n)));
                        }),
                        (e.updateAggregateHistogram = function (t, e, i) {
                            if (0 !== e)
                                for (var n, a = 100 * e, s = l(Ht); !(n = s()).done; ) {
                                    var r = n.value;
                                    a >= r && (t[r] += i);
                                }
                        }),
                        (e.updateMaxContinuousHistogram = function (t, e, i) {
                            if (0 !== e)
                                for (var n, a = 100 * e, s = l(Ht); !(n = s()).done; ) {
                                    var r = n.value;
                                    a >= r ? (t[r].current += i) : t[r].current > 0 && this.resetContinuousViewDataForBucket(t[r]);
                                }
                            else this.resetContinuousViewDataForHistogram(t);
                        }),
                        (e.constructVideoSessionDetails = function (t, e) {
                            return { video_details: { is_preroll_video: e.displayType === T, video_length: Math.round(e.durationMs), time_watched: Math.round(t.timeWatchedMs), time_watched_fullscreen: Math.round(t.timeWatchedFullscreenMs), time_watched_with_audio: Math.round(t.timeWatchedWithAudioMs), time_watched_fullscreen_with_audio: Math.round(t.timeWatchedFullscreenWithAudioMs), time_watched_100_with_audio: Math.round(t.watchedWithAudioMsByInViewPct[100]), video_type: P[e.contentType], watched_ms_by_in_view_pct: this.constructAggregateHistogramPayload(t.watchedMsByInViewPct), watched_with_audio_ms_by_in_view_pct: this.constructAggregateHistogramPayload(t.watchedWithAudioMsByInViewPct), watched_ms_by_viewport_pct: this.constructAggregateHistogramPayload(t.watchedMsByViewportPct), max_continuous_watched_ms_by_in_view_pct: this.constructMaxContinuousHistogramPayload(t.maxContinuousWatchedMsByInViewPct), max_continuous_watched_with_audio_ms_by_in_view_pct: this.constructMaxContinuousHistogramPayload(t.maxContinuousWatchedWithAudioMsByInViewPct), sizes_info_at_the_start: { viewport_size: t.sizesInfoAtTheStart.viewportSize, ad_size: t.sizesInfoAtTheStart.mediaSize } } };
                        }),
                        (e.constructAggregateHistogramPayload = function (t) {
                            for (var e, i = {}, n = l(Ht); !(e = n()).done; ) {
                                var a = e.value;
                                i[a] = Math.round(t[a]);
                            }
                            return { histogram: i };
                        }),
                        (e.constructMaxContinuousHistogramPayload = function (t) {
                            for (var e, i = {}, n = l(Ht); !(e = n()).done; ) {
                                var a = e.value,
                                    s = t[a];
                                i[a] = Math.round(Math.max(s.current, s.max));
                            }
                            return { histogram: i };
                        }),
                        (e.emitVideoSessionEvent = function (t, e) {
                            this.analytics.emit(u.VIDEO_SESSION_EVENT, t, e);
                        }),
                        t
                    );
                })(),
                Kt = [u.VIDEO_VIEW_EVENT, u.PLAY_FROM_TAP_EVENT, u.VIEW_THRESHOLD_EVENT, u.ONE_SEC_VIEW_EVENT, u.GROUPM_VIEW_EVENT, u.MRC_AUDIBLE_VIEW_EVENT, u.MRC_VIEW_EVENT, u.VIDEO_QUALITY_VIEW_EVENT, u.SIX_SEC_VIEW_EVENT, u.SHORT_FORM_COMPLETE_EVENT],
                Yt = [u.ONE_SEC_VIEW_EVENT, u.MRC_AUDIBLE_VIEW_EVENT, u.MRC_VIEW_EVENT, u.VIDEO_QUALITY_VIEW_EVENT],
                xt = (function () {
                    function t(t, e) {
                        (this.analytics = t), (this.context = e), (this.eventMap = {}), this.analytics.on(u.TICK_EVENT, this.onTickEvent.bind(this)), this.analytics.on(u.TRACK_FINISHED_EVENT, this.onTrackFinishedEvent.bind(this)), this.analytics.on(u.PAUSE_EVENT, this.onPauseEvent.bind(this)), this.analytics.on(u.PLAYBACK_COMPLETE_EVENT, this.onPlaybackComplete.bind(this));
                    }
                    var e = t.prototype;
                    return (
                        (e.onTrackFinishedEvent = function (t) {
                            var e = W(t);
                            if (void 0 !== e) {
                                var i = this.eventMap[e.id];
                                void 0 !== i && (e.shouldLoop ? (i.timePlayedToMs = 0) : (this.eventMap[e.id] = void 0));
                            }
                        }),
                        (e.onPlaybackComplete = function (t) {
                            var e = W(t);
                            if (void 0 !== e) {
                                var i = this.eventMap[e.id];
                                void 0 !== i && this.context && this.context.enableShortFormCompleteLogging && this.emitOnce(u.SHORT_FORM_COMPLETE_EVENT, i, t);
                            }
                        }),
                        (e.onPauseEvent = function (t) {
                            this.resetContinuousViewEventTimingData(t);
                        }),
                        (e.onTickEvent = function (t) {
                            var e = W(t);
                            if (void 0 !== e) {
                                var i = this.eventMap[e.id];
                                if (void 0 === i) {
                                    i = { timePlayedToMs: e.currentTimeMs };
                                    for (var n, a = l(Kt); !(n = a()).done; ) {
                                        i[n.value] = { timePlayedMs: 0, visibilityWeightedTimePlayedMs: 0, fired: !1 };
                                    }
                                    this.eventMap[e.id] = i;
                                }
                                t.isSeeking ? ((i.timePlayedToMs = e.currentTimeMs), this.resetContinuousViewEventTimingData(t)) : (this.updateTimingData(e, i, t), this.checkViewEvents(e, i, t)), this.checkPlayFromTap(i, t);
                            }
                        }),
                        (e.updateTimingData = function (t, e, i) {
                            var n = t.currentTimeMs - e.timePlayedToMs;
                            e.timePlayedToMs = t.currentTimeMs;
                            var a = i.percentVisible;
                            a >= 1 && (e[u.VIEW_THRESHOLD_EVENT].timePlayedMs += n), a >= 1 ? (e[u.ONE_SEC_VIEW_EVENT].timePlayedMs += n) : (e[u.ONE_SEC_VIEW_EVENT].timePlayedMs = 0), a >= 0.5 && F(i) ? (e[u.MRC_AUDIBLE_VIEW_EVENT].timePlayedMs += n) : (e[u.MRC_AUDIBLE_VIEW_EVENT].timePlayedMs = 0), a >= 0.5 ? (e[u.MRC_VIEW_EVENT].timePlayedMs += n) : (e[u.MRC_VIEW_EVENT].timePlayedMs = 0), a >= 1 && !i.isMuted && (e[u.GROUPM_VIEW_EVENT].timePlayedMs += n), a >= 0.5 ? (e[u.VIDEO_QUALITY_VIEW_EVENT].timePlayedMs += n) : (e[u.VIDEO_QUALITY_VIEW_EVENT].timePlayedMs = 0), (e[u.SIX_SEC_VIEW_EVENT].timePlayedMs += n), a >= 0.5 && (e[u.SIX_SEC_VIEW_EVENT].visibilityWeightedTimePlayedMs += a * n), (e[u.SHORT_FORM_COMPLETE_EVENT].timePlayedMs += n);
                        }),
                        (e.resetContinuousViewEventTimingData = function (t) {
                            var e = this.eventMap[t.currentTrackId];
                            if (void 0 !== e)
                                for (var i, n = l(Yt); !(i = n()).done; ) {
                                    e[i.value].timePlayedMs = 0;
                                }
                        }),
                        (e.checkViewEvents = function (t, e, i) {
                            var n;
                            e[u.VIEW_THRESHOLD_EVENT].timePlayedMs >= (!(n = t).isLive && n.durationMs > 0 && !n.shouldLoop ? Math.min(n.durationMs - 500, rt) : rt) && (this.emitOnce(u.VIEW_THRESHOLD_EVENT, e, i), this.emitOnce(u.VIDEO_VIEW_EVENT, e, i)),
                                e[u.ONE_SEC_VIEW_EVENT].timePlayedMs >= 1e3 && this.emitOnce(u.ONE_SEC_VIEW_EVENT, e, i),
                                e[u.GROUPM_VIEW_EVENT].timePlayedMs >=
                                    (function (t) {
                                        return !t.isLive && t.durationMs > 0 ? 0.5 * t.durationMs : Number.MAX_SAFE_INTEGER;
                                    })(t) && this.emitOnce(u.GROUPM_VIEW_EVENT, e, i),
                                e[u.MRC_AUDIBLE_VIEW_EVENT].timePlayedMs >= 2e3 && this.emitOnce(u.MRC_AUDIBLE_VIEW_EVENT, e, i),
                                e[u.MRC_VIEW_EVENT].timePlayedMs >= 2e3 && this.emitOnce(u.MRC_VIEW_EVENT, e, i),
                                e[u.VIDEO_QUALITY_VIEW_EVENT].timePlayedMs >=
                                    (function (t) {
                                        return !t.isLive && t.durationMs > 0 ? Math.min(0.95 * t.durationMs, 1e4) : 1e4;
                                    })(t) && this.emitOnce(u.VIDEO_QUALITY_VIEW_EVENT, e, i);
                            var a = e[u.SIX_SEC_VIEW_EVENT];
                            a.timePlayedMs >=
                                (function (t) {
                                    return !t.isLive && t.durationMs > 0 ? Math.min(0.95 * t.durationMs, 6e3) : 6e3;
                                })(t) &&
                                a.visibilityWeightedTimePlayedMs >=
                                    (function (t) {
                                        return !t.isLive && t.durationMs > 0 ? Math.min(0.5 * t.durationMs, 3e3) : 3e3;
                                    })(t) &&
                                this.emitOnce(u.SIX_SEC_VIEW_EVENT, e, i),
                                this.context && this.context.enableShortFormCompleteLogging && e[u.SHORT_FORM_COMPLETE_EVENT].timePlayedMs >= 15e3 && this.emitOnce(u.SHORT_FORM_COMPLETE_EVENT, e, i);
                        }),
                        (e.checkPlayFromTap = function (t, e) {
                            e.isPlaying && !e.isPreview && (this.emitOnce(u.PLAY_FROM_TAP_EVENT, t, e), this.emitOnce(u.VIDEO_VIEW_EVENT, t, e));
                        }),
                        (e.emitOnce = function (t, e, i) {
                            e[t].fired || (this.analytics.emit(t, i), (e[t].fired = !0));
                        }),
                        t
                    );
                })();
            const Gt = (function (t) {
                function e(e, i, n, a, s) {
                    var r;
                    ((r = t.call(this) || this).scribeListener = new wt((0, o.Z)(r), e, a)), (r.behavioralEventListener = new Y((0, o.Z)(r), s)), (r.promotedLogListener = new ut((0, o.Z)(r), i)), (r.tentpoleListener = new Ft((0, o.Z)(r))), (r.viewListener = new xt((0, o.Z)(r), a)), (r.playbackLapseListener = new _t((0, o.Z)(r))), (r.errorListener = new Z((0, o.Z)(r))), (r.beaconListener = new K((0, o.Z)(r))), (r.rewindListener = new Tt((0, o.Z)(r))), (r.heartbeatListener = new j((0, o.Z)(r))), (r.loopListener = new $((0, o.Z)(r))), (r.intendToPlayListener = new J((0, o.Z)(r))), (r.videoSessionListener = new Ut((0, o.Z)(r))), (r.ctaImpressionListener = new G((0, o.Z)(r))), (r.captionsListener = new x((0, o.Z)(r)));
                    var c = new st(n, a),
                        E = new ot(c);
                    return (r.lifecycleListener = new Et((0, o.Z)(r), E)), r;
                }
                (0, c.Z)(e, t);
                var i = e.prototype;
                return (
                    (i.onTickEvent = function (t) {
                        this.emit(u.TICK_EVENT, t);
                    }),
                    (i.onReplay = function (t) {
                        var e = W(t);
                        void 0 !== e && (e.shouldLoop || this.emit(u.REPLAY_EVENT, t));
                    }),
                    (i.onTrackFinished = function (t) {
                        this.emit(u.TRACK_FINISHED_EVENT, t);
                    }),
                    (i.onIntendToPlay = function (t) {
                        this.emit(u.INTEND_TO_PLAY_EVENT, t);
                    }),
                    (i.onPlay = function (t) {
                        this.emit(u.PLAY_EVENT, t);
                    }),
                    (i.onPause = function (t) {
                        this.emit(u.PAUSE_EVENT, t);
                    }),
                    (i.onMute = function (t) {
                        this.emit(u.MUTE_EVENT, t);
                    }),
                    (i.onUnmute = function (t) {
                        this.emit(u.UNMUTE_EVENT, t);
                    }),
                    (i.onFullScreenEnter = function (t) {
                        this.emit(u.FULL_SCREEN_ENTER_EVENT, t);
                    }),
                    (i.onFullScreenExit = function (t) {
                        this.emit(u.FULL_SCREEN_EXIT_EVENT, t);
                    }),
                    (i.onShrink = function (t) {
                        this.emit(u.SHRINK_EVENT, t);
                    }),
                    (i.onAdSkip = function (t) {
                        this.emit(u.AD_SKIP_EVENT, t);
                    }),
                    (i.onCtaImpression = function (t) {
                        this.emit(u.CTA_IMPRESSION_EVENT, t);
                    }),
                    (i.onCtaClick = function (t) {
                        this.emit(u.CTA_CLICK_EVENT, t);
                    }),
                    (i.onConfigLoaded = function (t) {
                        this.emit(u.CONFIG_LOADED_EVENT, t);
                    }),
                    (i.onError = function (t, e) {
                        this.emit(u.ERROR_EVENT, t, e);
                    }),
                    (i.onTeardown = function (t) {
                        this.emit(u.TEARDOWN_EVENT, t);
                    }),
                    (i.onManualQualityLevelChange = function (t, e) {
                        this.emit(u.MANUAL_QUALITY_LEVEL_CHANGE_EVENT, t, e);
                    }),
                    (i.onPlaybackSpeedChange = function (t, e) {
                        this.emit(u.PLAYBACK_SPEED_CHANGE_EVENT, t, e);
                    }),
                    (i.onScrub = function (t) {
                        this.emit(u.SCRUB_EVENT, t);
                    }),
                    (i.onPictureInPictureOn = function (t) {
                        this.emit(u.PICTURE_IN_PICTURE_ON_EVENT, t);
                    }),
                    (i.onPictureInPictureOff = function (t) {
                        this.emit(u.PICTURE_IN_PICTURE_OFF_EVENT, t);
                    }),
                    e
                );
            })(d());
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~ondemand.InlinePlayer~bundle.DockPeek~bundle.LiveEvent~loader.AudioOnlyVideoPlaye-d8458ca7.071d215a.js.map

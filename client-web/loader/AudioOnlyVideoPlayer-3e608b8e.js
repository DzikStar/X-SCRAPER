"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AudioOnlyVideoPlayer-3e608b8e", "ondemand.InlinePlayer-3e608b8e", "shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"],
    {
        905996: (t, e, i) => {
            i.d(e, { Z: () => De });
            i(334115), i(200634), i(320796), i(449228), i(438695), i(827233), i(374083), i(418145), i(315735), i(543450), i(743108), i(332501), i(24895), i(499120), i(865584), i(326936), i(271245), i(414586), i(458143), i(43105), i(334769), i(358188), i(73439), i(477950), i(888233), i(428673), i(201939), i(906886), i(154226);
            var n,
                a,
                s,
                r,
                o = i(580753),
                c = i(981665),
                d = i(256666),
                l = i(22699),
                h = i.n(l);
            function u(t, e) {
                var i;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (
                        Array.isArray(t) ||
                        (i = (function (t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return v(t, e);
                            var i = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === i && t.constructor && (i = t.constructor.name);
                            if ("Map" === i || "Set" === i) return Array.from(t);
                            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return v(t, e);
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
            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n;
            }
            var p = "AD_SKIP_EVENT",
                _ = "CAPTIONS_TOGGLED_EVENT",
                m = "CONFIG_LOADED_EVENT",
                f = "CTA_CLICK_EVENT",
                y = "CTA_IMPRESSION_EVENT",
                g = "ERROR_EVENT",
                T = "FULL_SCREEN_EVENT",
                b = "GROUPM_VIEW_EVENT",
                E = "HEARTBEAT_EVENT",
                M = "HEARTBEAT_START_EVENT",
                w = "INITIAL_CTA_IMPRESSION_EVENT",
                P = "INITIAL_INTEND_TO_PLAY_EVENT",
                k = "INTEND_TO_PLAY_EVENT",
                S = "LOOP_EVENT",
                I = "MANUAL_QUALITY_LEVEL_CHANGE_EVENT",
                C = "MRC_AUDIBLE_VIEW_EVENT",
                V = "MRC_VIEW_EVENT",
                A = "MUTE_EVENT",
                L = "ONE_SEC_VIEW_EVENT",
                W = "SIX_SEC_VIEW_EVENT",
                N = "SHORT_FORM_COMPLETE_EVENT",
                D = "PAUSE_EVENT",
                O = "PLAY_EVENT",
                F = "PLAY_FROM_TAP_EVENT",
                B = "PLAYBACK_25_EVENT",
                x = "PLAYBACK_50_EVENT",
                H = "PLAYBACK_75_EVENT",
                R = "PLAYBACK_95_EVENT",
                U = "PLAYBACK_COMPLETE_EVENT",
                K = "PLAYBACK_ERROR_EVENT",
                Z = "PLAYBACK_LAPSE_EVENT",
                j = "PLAYBACK_SPEED_CHANGE_EVENT",
                Y = "PLAYBACK_START_EVENT",
                z = "REPLAY_EVENT",
                G = "REWIND_EVENT",
                Q = "SHRINK_EVENT",
                q = "STARTUP_ERROR_EVENT",
                J = "TEARDOWN_EVENT",
                X = "TICK_EVENT",
                $ = "TRACK_FINISHED_EVENT",
                tt = "UNMUTE_EVENT",
                et = "VIDEO_SESSION_EVENT",
                it = "VIDEO_QUALITY_VIEW_EVENT",
                nt = "VIDEO_VIEW_EVENT",
                at = "VIEW_THRESHOLD_EVENT",
                st = "ad",
                rt = "content",
                ot = "broadcast",
                ct = "gif",
                dt = "live",
                lt = "media_entity",
                ht = "partner_video",
                ut = "periscope",
                vt = "vine",
                pt = "vmap",
                _t = (((n = {})[vt] = 2), (n[ct] = 3), (n[pt] = 1), (n[lt] = 1), (n[dt] = 1), (n[ut] = 5), (n[ot] = 1), n),
                mt = { event: "url", go_to: "url", image: "url", url: "url", shop: "url", see_more: "url", visit: "url", visit_site: "url", watch: "url", watch_now: "watch" },
                ft = 1,
                yt = 2,
                gt = 3,
                Tt = 4,
                bt = 5,
                Et = 6,
                Mt = 7,
                wt = 8;
            function Pt(t) {
                return St(t, t.source.trackId);
            }
            function kt(t) {
                return St(t, t.currentTrackId);
            }
            function St(t, e) {
                return t.tracks.find(function (t) {
                    return e === t.id;
                });
            }
            function It(t) {
                return t.tracks.find(function (t) {
                    return st === t.displayType;
                });
            }
            function Ct(t) {
                return Boolean(t) && t.isPlaying && !t.isSeeking && !t.isMuted;
            }
            function Vt(t) {
                var e;
                switch (t) {
                    case 0.25:
                        e = bt;
                        break;
                    case 0.5:
                        e = ft;
                        break;
                    case 0.75:
                        e = Et;
                        break;
                    case 1.25:
                        e = Mt;
                        break;
                    case 1.5:
                        e = gt;
                        break;
                    case 1.75:
                        e = wt;
                        break;
                    case 2:
                        e = Tt;
                        break;
                    default:
                        e = yt;
                }
                return e;
            }
            var At = (((a = {})[nt] = "creativeView"), (a[B] = "firstQuartile"), (a[x] = "midpoint"), (a[H] = "thirdQuartile"), (a[U] = "complete"), (a[O] = "resume"), (a[D] = "pause"), (a[G] = "rewind"), (a[g] = "adError"), a),
                Lt = (function () {
                    function t(t) {
                        var e = this;
                        Object.keys(At).forEach(function (i) {
                            t.on(i, function (t) {
                                e.fireBeacon(At[i], t);
                            });
                        }),
                            t.on(Y, this.onPlaybackStart.bind(this));
                    }
                    var e = t.prototype;
                    return (
                        (e.onPlaybackStart = function (t) {
                            this.fireBeacon("start", t), this.fireBeacon("adImpression", t);
                        }),
                        (e.fireBeacon = function (t, e) {
                            var i = kt(e);
                            if (void 0 !== i && void 0 !== i.beacons && void 0 !== i.beacons[t])
                                for (var n, a = u(i.beacons[t]); !(n = a()).done; ) {
                                    var s = n.value;
                                    new window.Image().src = s;
                                }
                        }),
                        t
                    );
                })(),
                Wt = (function () {
                    function t(t, e) {
                        (this.bceHandler = e), this.bceHandler && t.on(Z, this.onPlaybackLapseEvent.bind(this));
                    }
                    return (
                        (t.prototype.onPlaybackLapseEvent = function (t, e) {
                            var i = null == e ? void 0 : e.playback_lapse_ms;
                            this.bceHandler.log({ wallClockWatchTimeMs: i });
                        }),
                        t
                    );
                })(),
                Nt = (function () {
                    function t(t) {
                        (this.analytics = t), this.analytics.on(X, this.onTickEvent.bind(this));
                    }
                    return (
                        (t.prototype.onTickEvent = function (t) {
                            var e = t.areCaptionsShown,
                                i = this.currentCaptionsState;
                            i !== e && (((!1 === i && !0 === e) || (!0 === i && !1 === e)) && this.analytics.emit(_, t, e), (this.currentCaptionsState = e));
                        }),
                        t
                    );
                })(),
                Dt = (function () {
                    function t(t) {
                        (this.analytics = t), (this.hasFiredOnTrackMap = {}), this.analytics.on(y, this.onCtaImpressionEvent.bind(this));
                    }
                    return (
                        (t.prototype.onCtaImpressionEvent = function (t) {
                            var e = t.currentTrackId;
                            this.hasFiredOnTrackMap[e] || ((this.hasFiredOnTrackMap[e] = !0), this.analytics.emit(w, t));
                        }),
                        t
                    );
                })(),
                Ot = (function () {
                    function t(t) {
                        (this.analytics = t), (this.hasStarted = !1), (this.hasFired = !1), this.analytics.on(Y, this.onPlaybackStartEvent.bind(this)), this.analytics.on(k, this.onShowEvent.bind(this)), this.analytics.on(g, this.onErrorEvent.bind(this));
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
                                i && (n = { latency_millis: a, error: i }), this.analytics.emit(q, t, Object.assign({ latency: a }, e), n), (this.hasFired = !0);
                            }
                            this.analytics.emit(K, t, e, i);
                        }),
                        (e.constructClientMediaEventError = function (t, e) {
                            var i = (e && e.media_details && e.media_details.media_error) || {};
                            return { is_fatal: i.is_fatal, category: i.category, message: i.message, retry_count: i.retry_count };
                        }),
                        t
                    );
                })(),
                Ft = (function () {
                    function t(t) {
                        (this.bufferingCount = 0), (this.bufferingDurationMs = 0), (this.bufferingBeginTimeMs = void 0), t.on(X, this.onTickEvent.bind(this)), t.on(M, this.onHeartbeatStart.bind(this)), t.on(E, this.onHeartbeat.bind(this));
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
                            var e = kt(t);
                            void 0 !== e && (e.isBuffering && null == this.bufferingBeginTimeMs ? ((this.bufferingBeginTimeMs = Date.now()), this.bufferingCount++) : e.isBuffering || null == this.bufferingBeginTimeMs || ((this.bufferingDurationMs += Date.now() - this.bufferingBeginTimeMs), (this.bufferingBeginTimeMs = void 0)));
                        }),
                        (e.getBufferTime = function (t) {
                            var e = kt(t);
                            if (void 0 !== e) {
                                var i = this.bufferingDurationMs;
                                return e.isBuffering && null != this.bufferingBeginTimeMs && (i += Date.now() - this.bufferingBeginTimeMs), i;
                            }
                        }),
                        (e.reset = function (t) {
                            var e = kt(t);
                            void 0 !== e && ((this.bufferingBeginTimeMs = e.isBuffering ? Date.now() : void 0), (this.bufferingCount = e.isBuffering ? 1 : 0), (this.bufferingDurationMs = 0));
                        }),
                        t
                    );
                })();
            function Bt(t) {
                return "number" != typeof t || Number.isNaN(t) || t === 1 / 0 || t === -1 / 0 ? ("string" == typeof t ? t : void 0) : t.toString();
            }
            var xt = (function () {
                function t(t) {
                    (this.analytics = t), (this.bufferingDurationListener = new Ft(t)), (this.lastKnownDataUsageBytes = 0), (this.audibleDuration = 0), (this.bitrateHistory = []), (this.latencyHistory = []), this.previousTickTimestamp, this.analytics.on(X, this.onTickEvent.bind(this)), this.analytics.on(O, this.onPlayEvent.bind(this)), this.analytics.on(Y, this.onPlaybackStartEvent.bind(this)), this.analytics.on($, this.onTrackFinishedEvent.bind(this)), this.analytics.on(g, this.onErrorEvent.bind(this)), this.analytics.on(D, this.onPauseEvent.bind(this)), this.analytics.on(J, this.onTeardownEvent.bind(this)), this.analytics.on(S, this.onLoopEvent.bind(this)), this.analytics.on(p, this.onAdSkip.bind(this));
                }
                var e = t.prototype;
                return (
                    (e.onTickEvent = function (t) {
                        var e = kt(t);
                        if (void 0 !== e) {
                            if ((this.updateTimesOnTick(e, t), this.updatePerfMetrics(e), t.isSeeking ? this.stopPolling() : t.isPlaying && this.startPolling(t), void 0 !== this.lastKnownPlayerState)) {
                                var i = this.lastKnownPlayerState.percentVisible,
                                    n = t.percentVisible;
                                ((i > 0 && 0 === n) || (0 === i && n > 0)) && (this.stopPolling(), this.startPolling(t));
                            }
                            (this.lastKnownPlayerState = t), (this.previousTickTimestamp = Date.now());
                        }
                    }),
                    (e.onPlayEvent = function (t) {
                        this.hasPlaybackStarted && this.startPolling(t), (this.lastKnownPlayerState = t);
                    }),
                    (e.onPlaybackStartEvent = function (t) {
                        this.startPolling(t), (this.lastKnownPlayerState = t), (this.hasPlaybackStarted = !0);
                    }),
                    (e.onTrackFinishedEvent = function (t) {
                        (this.hasPlaybackStarted = !1), void 0 !== kt(t) && (this.stopPolling(), (this.lastKnownPlayerState = t));
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
                        void 0 !== (i = t.contentType === ot || t.contentType === dt || t.contentType === ut ? t.absoluteTimeMs : t.currentTimeMs) && (Ct(e) && void 0 !== this.lastTimeMs && (this.audibleDuration += i - this.lastTimeMs), (this.lastTimeMs = i), void 0 === this.startTimeMs && (this.startTimeMs = i));
                    }),
                    (e.startPolling = function (t) {
                        var e = Pt(t);
                        void 0 === this.intervalId && void 0 !== e && e.contentType !== vt && (this.analytics.emit(M, t), this.onHeartbeatStart(t));
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
                            var e = kt(t),
                                i = this.getProgramDateTimeMs();
                            if (void 0 !== i && void 0 !== e) {
                                var n = e.currentBitrate ? { sampled_bitrate: e.currentBitrate } : {},
                                    a = 0;
                                t.dataUsageBytes && ((a = t.dataUsageBytes - this.lastKnownDataUsageBytes), (this.lastKnownDataUsageBytes = t.dataUsageBytes));
                                var s,
                                    r,
                                    o = { data_usage_bytes: a },
                                    c = this.bufferingDurationListener.bufferingCount,
                                    d = this.bufferingDurationListener.getBufferTime(t),
                                    l = Math.floor(100 * t.percentVisible),
                                    h = e.durationMs || 0,
                                    u = Object.assign({ buffering_duration_millis: d, video_visibility: l, video_duration_millis: h }, { start_program_date_time_millis: i.start_program_date_time_millis, end_program_date_time_millis: i.end_program_date_time_millis }, n, o),
                                    v = { buffering_duration_millis: Bt(d), buffering_count: c, percent_in_view: l, sampled_bits_per_second: e.currentBitrate, data_usage_bytes: Bt(o.data_usage_bytes), start_program_date_time_millis: Bt(i.start_program_date_time_millis), end_program_date_time_millis: Bt(i.end_program_date_time_millis), audible_duration_millis: Bt(i.audible_duration_millis), bandwidth_estimate_bps: Bt(t.bandwidthEstimateBps), video_duration_millis: Bt(h), bitrate_metrics: ((s = this.bitrateHistory), (r = Rt(s)), r && { min_bps: Math.round(r.min), max_bps: Math.round(r.max), avg_bps: Math.round(r.avg) }), live_or_non_live_heartbeat_metrics: Ht(e.isLive, this.latencyHistory) };
                                this.analytics.emit(E, t, u, v);
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
            function Ht(t, e) {
                var i = Rt(e);
                return t ? { live_heartbeat_metrics: { latency_metrics: i && { min_ms: Math.round(i.min), max_ms: Math.round(i.max), avg_ms: Math.round(i.avg) } } } : { non_live_heartbeat_metrics: {} };
            }
            function Rt(t) {
                if (t && t.length) {
                    var e = (function (t) {
                            if (!t || 0 === t.length) return [Math.min(), Math.max()];
                            for (var e, i = 1 / 0, n = -1 / 0, a = u(t); !(e = a()).done; ) {
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
            var Ut = (function () {
                    function t(t) {
                        (this.analytics = t), (this.hasFiredOnTrackMap = {}), this.analytics.on(k, this.onIntendToPlayEvent.bind(this)), this.analytics.on(z, this.onIntendToPlayEvent.bind(this)), this.analytics.on($, this.onTrackFinishedEvent.bind(this));
                    }
                    var e = t.prototype;
                    return (
                        (e.onIntendToPlayEvent = function (t) {
                            this.hasFiredOnTrackMap[t.currentTrackId] || ((this.hasFiredOnTrackMap[t.currentTrackId] = !0), this.analytics.emit(P, t));
                        }),
                        (e.onTrackFinishedEvent = function (t) {
                            var e = kt(t);
                            e && (e.shouldLoop || (this.hasFiredOnTrackMap[t.currentTrackId] = !1));
                        }),
                        t
                    );
                })(),
                Kt = (function () {
                    function t(t) {
                        (this.analytics = t), this.analytics.on($, this.onTrackFinishedEvent.bind(this));
                    }
                    return (
                        (t.prototype.onTrackFinishedEvent = function (t) {
                            var e = kt(t);
                            void 0 !== e && e.shouldLoop && this.analytics.emit(S, t);
                        }),
                        t
                    );
                })(),
                Zt = { home: "HomeTimeline", list: "Lists", live_broadcast: "BroadcastPage", live_event_timeline: "EventPage", me: "UserTimeline", moments: "Moments", permalink: "TweetCard", profile: "UserTimeline", search: "Search" },
                jt = function (t) {
                    return "/api/v2/" + t;
                };
            function Yt(t, e, i, n) {
                return { start: { method: t, path: jt(e) }, ping: { method: t, path: jt(i) }, stop: { method: t, path: jt(n) } };
            }
            var zt,
                Gt = { public: { live: Yt("GET", "startPublic", "pingPublic", "stopPublic"), replay: Yt("GET", "replayViewedPublic", "pingReplayViewedPublic", "endReplayViewedPublic") }, periscopeAuth: { live: Yt("POST", "startWatching", "pingWatching", "stopWatching"), replay: Yt("POST", "replayViewed", "pingReplayViewed", "endReplayViewed") }, twitterAuth: { live: Yt("POST", "twitter/startWatching", "twitter/pingWatching", "twitter/stopWatching"), replay: Yt("POST", "twitter/replayViewed", "twitter/pingReplayViewed", "twitter/endReplayViewed") } },
                Qt = (function () {
                    function t(t, e) {
                        if (((this.httpClient = t), (this.authToken = null == e ? void 0 : e.periscopeAuthToken), (this.isAnonymous = null == e ? void 0 : e.isAnonymous), (null == e ? void 0 : e.scribeContext) && (null == e ? void 0 : e.periscopeComponent))) {
                            var i = e.scribeContext,
                                n = e.periscopeComponent;
                            (this.pageContext = this.getPageContext(i)), (this.componentContext = n);
                        }
                        this.lifecycles = this.authToken ? ("Twitter" === (null == e ? void 0 : e.userType) ? Gt.twitterAuth : Gt.periscopeAuth) : Gt.public;
                    }
                    var e = t.prototype;
                    return (
                        (e.getPageContext = function (t) {
                            var e = t.page;
                            return "permalink_overlay" === t.section ? "TweetCard" : Zt[e] || "";
                        }),
                        (e.call = function (t, e) {
                            var i = Date.now(),
                                n = { "X-Idempotence": (zt = i <= zt ? zt + 1 : i), "X-Attempt": 1, "X-Periscope-User-Agent": "Twitter/video-analytics", "content-type": "application/json" },
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
                qt = 3e3;
            var Jt = (function () {
                    function t(t) {
                        (this.api = t), (this.handleStartWatching = this.handleStartWatching.bind(this)), (this.updateSession = this.updateSession.bind(this)), (this.startPingWatching = this.startPingWatching.bind(this)), (this.isVideoPreview = !1), (this.isReplay = !0);
                    }
                    var e = t.prototype;
                    return (
                        (e.updateSession = function (t) {
                            (this.session = t), t && this.startPingWatching();
                        }),
                        (e.setStartWatchingTimer = function () {
                            this.startWatchingTimer = setTimeout(this.handleStartWatching, qt);
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
                Xt = [m, O, D, $, J],
                $t = (function () {
                    function t(t, e) {
                        var i = this;
                        (this.analytics = t),
                            (this.lifecycleController = e),
                            Xt.map(function (t) {
                                return i.analytics.on(t, i.possiblyHandleEvent.bind(i, t));
                            });
                    }
                    var e = t.prototype;
                    return (
                        (e.possiblyHandleEvent = function (t, e) {
                            if (this.shouldSendPeriscopeAnalytics(e)) {
                                var i = kt(e);
                                switch (t) {
                                    case m:
                                        this.updateLifecycleToken(e), this.updateReplayState(!i.isLive);
                                        break;
                                    case O:
                                        this.handleStartWatching(e);
                                        break;
                                    case D:
                                        this.handleStopWatching(e);
                                        break;
                                    case $:
                                        this.handleStopWatching(e), this.updateReplayState(!0);
                                        break;
                                    case J:
                                        this.teardownPeriscopeLifecycle();
                                }
                            }
                        }),
                        (e.shouldSendPeriscopeAnalytics = function (t) {
                            var e = kt(t);
                            return void 0 !== e && (e.contentType === ut || e.contentType === ot);
                        }),
                        (e.getLifecycleToken = function (t) {
                            return kt(t).lifecycleToken;
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
                te = (function () {
                    function t(t) {
                        (this.analytics = t), (this.lapseMap = {}), this.analytics.on(X, this.onTickEvent.bind(this)), this.analytics.on($, this.onTrackFinishedEvent.bind(this)), this.analytics.on(p, this.onAdSkipEvent.bind(this)), this.analytics.on(nt, this.onVideoViewEvent.bind(this));
                    }
                    var e = t.prototype;
                    return (
                        (e.onTrackFinishedEvent = function (t) {
                            var e = kt(t);
                            if (void 0 !== e) {
                                var i = this.lapseMap[e.id];
                                if (void 0 !== i) {
                                    i.timePlayedToMs = 0;
                                    var n = Pt(t);
                                    n && n.contentType !== ct && !e.shouldLoop && (this.emit(i, t), (i.viewFired = !1));
                                }
                            }
                        }),
                        (e.onAdSkipEvent = function (t) {
                            this.onTickEvent(t);
                            var e = kt(t);
                            if (void 0 !== e) {
                                var i = this.lapseMap[e.id];
                                this.emit(i, t);
                            }
                        }),
                        (e.onVideoViewEvent = function (t) {
                            var e = kt(t);
                            if (void 0 !== e) {
                                var i = this.lapseMap[e.id];
                                void 0 === i && ((i = this.initializeLapseMapForTrack(e)), (this.lapseMap[e.id] = i)), (i.viewFired = !0);
                            }
                        }),
                        (e.onTickEvent = function (t) {
                            var e = kt(t);
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
                            var i = Pt(e),
                                n = t.viewFired,
                                a = t.timePlayedMs;
                            n && a > 0 && i && i.contentType !== dt && (this.analytics.emit(Z, e, { playback_lapse_ms: Math.round(a) }), (t.timePlayedMs = 0));
                        }),
                        t
                    );
                })(),
                ee = function (t) {
                    return (e = "AD_CTA_TO_ENGAGEMENT_MAPPING_ERROR"), ((i = new Error("Unable to map CTA type to engagement type for: " + t)).name = e), i;
                    var e, i;
                },
                ie = (function () {
                    function t() {}
                    return (
                        (t.set = function (e) {
                            t.report = e;
                        }),
                        t
                    );
                })();
            (0, d.Z)(ie, "report", function (t) {});
            var ne = (((s = {})[Y] = "playback_start"), (s[B] = "playback_25"), (s[x] = "playback_50"), (s[H] = "playback_75"), (s[R] = "playback_95"), (s[U] = "playback_complete"), (s[V] = "mrc_view"), (s[b] = "groupm_view"), (s[L] = "1sec_view"), (s[W] = "6sec_view"), (s[N] = "short_form_complete"), (s[nt] = "view"), (s[F] = "play_from_tap"), (s[at] = "view_threshold"), s),
                ae = (function () {
                    function t(t, e) {
                        var i = this;
                        (this.promotedLogHandler = e),
                            Object.keys(ne).forEach(function (e) {
                                t.on(e, function (t, n) {
                                    var a = kt(t);
                                    if (void 0 !== a) {
                                        var s = a.displayType === st;
                                        i.log(i.buildEventName(e, a), t, n, { video_details: { is_preroll_video: s, video_type: _t[a.contentType] } });
                                    }
                                });
                            }),
                            t.on(Y, this.logImpression.bind(this)),
                            t.on(f, this.onCtaClickEvent.bind(this)),
                            t.on(et, this.onVideoSessionEvent.bind(this));
                    }
                    var e = t.prototype;
                    return (
                        (e.buildEventName = function (t, e) {
                            var i = ne[t];
                            return "video_" + e.displayType + "_" + i;
                        }),
                        (e.log = function (t, e, i, n) {
                            void 0 === i && (i = {});
                            var a = kt(e),
                                s = this.getPromotedEventData(e, a);
                            if (void 0 !== s.impression_id) {
                                var r = this.getAmplifyDetailsData(e, a, i),
                                    o = JSON.stringify({ amplify_details: r }),
                                    c = n && JSON.stringify(n),
                                    d = Object.assign(s, r, { event: t, card_event: o, engagement_metadata: c });
                                this.promotedLogHandler.log(d);
                            }
                        }),
                        (e.logImpression = function (t) {
                            var e = kt(t);
                            this.isPromotedTrack(t, e) && this.log("impression", t);
                        }),
                        (e.onCtaClickEvent = function (t) {
                            var e = kt(t),
                                i = null == e ? void 0 : e.cta,
                                n = mt[null == i ? void 0 : i.type];
                            if (!n) return ie.report(ee(null == i ? void 0 : i.type));
                            e.displayType === st ? this.log("video_" + e.displayType + "_cta_" + n + "_click", t) : this.log("video_cta_" + n + "_click", t);
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
                            var n = Pt(t),
                                a = It(t) || {};
                            return Object.assign({ content_id: n.contentId, dynamic_preroll_type: a.dynamicPrerollType, preroll_uuid: a.contentId, preroll_owner_id: a.publisherId, video_owner_id: e.publisherId, video_uuid: e.contentId, video_type: e.displayType === rt ? "video" : "ad", video_is_muted: t.isMuted, video_visibility: Math.floor(100 * t.percentVisible) }, i);
                        }),
                        t
                    );
                })(),
                se = (function () {
                    function t(t) {
                        (this.analytics = t), this.analytics.on(X, this.onTickEvent.bind(this));
                    }
                    return (
                        (t.prototype.onTickEvent = function (t) {
                            var e = kt(t);
                            void 0 !== e && (t.isSeeking && void 0 === this.seekingStartTime ? (this.seekingStartTime = e.currentTimeMs) : t.isSeeking || void 0 === this.seekingStartTime || (e.currentTimeMs < this.seekingStartTime && this.analytics.emit(G, t), (this.seekingStartTime = void 0)));
                        }),
                        t
                    );
                })(),
                re = (((r = {})[nt] = "video_view"), (r[F] = "play_from_tap"), (r[at] = "view_threshold"), (r[C] = "video_mrc_audible_view"), (r[V] = "video_mrc_view"), (r[W] = "video_6sec_view"), (r[N] = "video_short_form_complete"), (r[Y] = "playback_start"), (r[B] = "playback_25"), (r[x] = "playback_50"), (r[H] = "playback_75"), (r[R] = "playback_95"), (r[U] = "playback_complete"), (r[P] = "intent_to_play"), (r[O] = "play"), (r[D] = "pause"), (r[z] = "replay"), (r[S] = "loop"), (r[A] = "mute"), (r[tt] = "unmute"), (r[T] = "full_screen"), (r[Q] = "shrink"), (r[Z] = "playback_lapse"), (r[K] = "error"), (r[q] = "playback_startup_error"), (r[it] = "video_quality_view"), (r[p] = "video_ad_skip"), r),
                oe = ["playback_lapse", "video_1sec_view", "shrink", "full_screen"].reduce(function (t, e) {
                    return (t[e] = !0), t;
                }, {}),
                ce = "tweet",
                de = "client_event",
                le = "live_video_heartbeat_event",
                he = 7,
                ue = 13,
                ve = 16,
                pe = 26,
                _e = 28,
                me = 1,
                fe = 2,
                ye = 1,
                ge = 2,
                Te = ["appplayer", "poll2choice_video", "poll3choice_video", "poll4choice_video", "promo_video_convo", "promo_video_website", "video_direct_message"],
                be = /^([0-9]{1,2})_([0-9]+)$/,
                Ee = (function () {
                    function t(t, e, i) {
                        var n = this;
                        (this.scribeHandler = e),
                            (this.context = i || {}),
                            (this.isAdFormatsCard = -1 !== Te.indexOf(this.context.cardType)),
                            Object.keys(re).forEach(function (e) {
                                t.on(e, function (t, i, a) {
                                    n.scribe(re[e], t, i, a);
                                });
                            }),
                            t.on(f, this.onCtaClickEvent.bind(this)),
                            t.on(w, this.onCtaImpressionEvent.bind(this)),
                            t.on(E, this.onHeartbeatEvent.bind(this)),
                            t.on(_, this.onCaptionsToggledEvent.bind(this)),
                            t.on(I, this.onManualQualityLevelChangeEvent.bind(this)),
                            t.on(j, this.onPlaybackSpeedChangeEvent.bind(this));
                    }
                    var e = t.prototype;
                    return (
                        (e.onCaptionsToggledEvent = function (t, e) {
                            var i = e ? "enable" : "disable",
                                n = { page: "settings", section: "captions", element: "display_audio_transcriptions", action: i };
                            this.scribe(i, t, {}, {}, de, n);
                        }),
                        (e.onCtaClickEvent = function (t) {
                            var e = kt(t).cta,
                                i = mt[null == e ? void 0 : e.type];
                            if (!i) return ie.report(ee(null == e ? void 0 : e.type));
                            var n = null != (null == e ? void 0 : e.click_tracking_embed_details) ? { click_tracking_embed_details: null == e ? void 0 : e.click_tracking_embed_details } : {};
                            this.scribe("cta_" + i + "_click", t, {}, {}, de, null, n);
                        }),
                        (e.onCtaImpressionEvent = function (t) {
                            var e = kt(t).cta,
                                i = mt[null == e ? void 0 : e.type];
                            if (!i) return ie.report(ee(null == e ? void 0 : e.type));
                            this.scribe("cta_" + i + "_impression", t);
                        }),
                        (e.onHeartbeatEvent = function (t, e, i) {
                            var n = Pt(t);
                            if (void 0 !== n) {
                                var a;
                                switch (n.contentType) {
                                    case dt:
                                    case ot:
                                        a = le;
                                        break;
                                    default:
                                        a = de;
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
                                a = { newSpeed: Vt(i), oldSpeed: Vt(n) };
                            this.scribe("playback_speed_change", t, {}, a);
                        }),
                        (e.scribe = function (t, e, i, n, a, s, r) {
                            void 0 === i && (i = {}), void 0 === n && (n = {}), void 0 === a && (a = de), void 0 === s && (s = null), void 0 === r && (r = {});
                            var o,
                                c,
                                d = Pt(e) || {},
                                l = kt(e) || {},
                                h = It(e) || {},
                                u = e.session || {},
                                v = (e.features || {}).isLiveTimecodeEnabled && l.requestedTimecode > 0 ? 1e3 * l.requestedTimecode : void 0;
                            this.isActionSupportedInClientMediaEvent(t) && (o = { media_client_event_type: ((c = {}), (c[t] = n), c), session_state: { session_id: u.id, content_video_identifier: we(this.getContentIdentifier(d), this.context.scribeContext), video_ads_passthrough_data: e.videoAnalyticsScribePassthrough, live_event_identifier: this.getLiveEventIdentifier(e, d.contentType), tweet_id: this.getTweetId(e.source, d.contentType) }, playing_media_state: { video_type: l.displayType === rt ? fe : me, media_asset_url: this.getVariantUrl(l), media_timecode_millis: Bt(v), media_metadata: { broadcast_id: l.broadcastId, twitter_publisher_id: Bt(l.publisherId), publisher_identifier: Pe(l.publisherId, l.periscopePublisherId, this.context.scribeContext) }, broadcast_media_state: ke(l.contentType, l.isLive) }, player_state: { is_muted: e.isMuted } });
                            var p = Object.assign({}, this.getBaseItem(e.source, e.eventId), { media_asset_url: this.getVariantUrl(l), video_uuid: l.contentId, video_owner_id: l.publisherId, video_type: l.displayType === rt ? "video" : "ad", promoted_id: l.impressionId || e.impressionId, content_id: d.contentId, dynamic_preroll_type: h.dynamicPrerollType, preroll_uuid: h.contentId, preroll_owner_id: h.publisherId, publisher_id: d.publisherId, media_session_id: u.id, video_analytics_scribe_passthrough: e.videoAnalyticsScribePassthrough, client_media_event: o, media_timecode_millis: v, disclosure_type: l.disclosureType || e.disclosureType, video_visibility: Math.floor(100 * e.percentVisible) }, i, this.getLexMetadata(e, d)),
                                _ = s || { element: this.getScribeElement(d), action: t };
                            this.scribeHandler.log({ namespace: _, category: a, data: Object.assign({}, r, { items: [p] }) });
                        }),
                        (e.getContentIdentifier = function (t) {
                            var e = t.contentId,
                                i = this.parseMediaKeyString(e);
                            if (i) return { media_platform_identifier: i };
                            switch (t.contentType) {
                                case lt:
                                case ct:
                                case dt:
                                case ot:
                                    return this.getMediaPlatformIdentifierUsingDefaultCategory(t);
                                case pt:
                                    return this.isAdFormatsCard ? { media_platform_identifier: { media_category: this.getMediaEntityCategoryUsingPlaybackUrl(t), media_id: e } } : { amplify_card_identifier: { vmap_url: t.vmapUrl, content_id: e } };
                                default:
                                    return { unknown_identifier: { content_id: e } };
                            }
                        }),
                        (e.parseMediaKeyString = function (t) {
                            var e = be.exec(t) || [],
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
                                if (-1 !== e.indexOf("amplify_video")) return ue;
                                if (-1 !== e.indexOf("ext_tw_video")) return he;
                            }
                        }),
                        (e.defaultMediaCategory = function (t) {
                            switch (t.contentType) {
                                case ct:
                                    return ve;
                                case dt:
                                    return pe;
                                case ot:
                                    return _e;
                                case lt:
                                    return this.getMediaEntityCategoryUsingPlaybackUrl(t);
                                default:
                                    return;
                            }
                        }),
                        (e.getLiveEventIdentifier = function (t, e) {
                            return t.eventId ? { lex_event_identifier: { lex_event_id: t.eventId } } : e === dt ? { legacy_live_event_identifier: { legacy_live_event_id: t.source.id } } : void 0;
                        }),
                        (e.getTweetId = function (t, e) {
                            return e === ot || e === dt ? t.tweetId : t.type === ce ? t.id : void 0;
                        }),
                        (e.getScribeElement = function (t) {
                            switch (t.contentType) {
                                case vt:
                                    return "vine_player";
                                case ct:
                                    return "gif_player";
                                case pt:
                                    return "platform_amplify_card";
                                case dt:
                                case ot:
                                    return "live_video_player";
                                case ht:
                                    return "partner_video_player";
                                case ut:
                                    return "periscope_player";
                                default:
                                    return "video_player";
                            }
                        }),
                        (e.getBaseItem = function (t, e) {
                            var i = this.context.baseScribeItem;
                            return i || (t.type === ce ? { id: t.id, item_type: "0" } : t.tweetId ? { id: t.tweetId, item_type: "0" } : e ? { id: e, item_type: "28" } : void 0);
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
                            return !oe[t];
                        }),
                        t
                    );
                })();
            function Me(t) {
                return t && "messages" === t.page;
            }
            function we(t, e) {
                return Me(e) ? { scrubbed_identifier: {} } : t;
            }
            function Pe(t, e, i) {
                return Me(i) ? { scrubbed_publisher_identifier: {} } : t && e ? { twitter_periscope_publisher_identifier: { twitter_id: Bt(t), periscope_id: e } } : t ? { twitter_publisher_identifier: { id: Bt(t) } } : e ? { periscope_publisher_identifier: { id: e } } : { unknown_publisher_identifier: {} };
            }
            function ke(t, e) {
                if (t === ot || t === dt || t === ut) return { broadcast_state: e ? ye : ge };
            }
            var Se = (function () {
                    function t(t) {
                        (this.analytics = t), this.analytics.on(z, this.onReplayEvent.bind(this)), this.analytics.on($, this.onTrackFinishedEvent.bind(this)), this.analytics.on(P, this.onInitialIntendToPlayEvent.bind(this));
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
                Ie = [
                    { progress: 0.25, event: B },
                    { progress: 0.5, event: x },
                    { progress: 0.75, event: H },
                    { progress: 0.95, event: R },
                    { progress: 1, event: U },
                ],
                Ce = (function () {
                    function t(t) {
                        (this.analytics = t), (this.eventMap = {}), (this.playbackLatencyListener = new Se(t)), this.analytics.on($, this.onTrackFinishedEvent.bind(this)), this.analytics.on(X, this.onTickEvent.bind(this));
                    }
                    var e = t.prototype;
                    return (
                        (e.onTrackFinishedEvent = function (t) {
                            var e = kt(t);
                            void 0 !== e && (e.shouldLoop || (this.eventMap[t.currentTrackId] = {}));
                        }),
                        (e.onTickEvent = function (t) {
                            var e = kt(t);
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
                                this.emitOnce(Y, e, i, s, r), t.isLive || this.checkProgressTentpoles(n, a, e, i);
                            }
                        }),
                        (e.checkProgressTentpoles = function (t, e, i, n) {
                            var a = this;
                            Ie.forEach(function (s) {
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
                Ve = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
                Ae = (function () {
                    function t(t) {
                        (this.analytics = t), (this.sessionDataStore = {}), this.analytics.on(X, this.onTickEvent.bind(this)), this.analytics.on(T, this.onFullscreenEvent.bind(this)), this.analytics.on(Q, this.onShrinkEvent.bind(this)), this.analytics.on($, this.onTrackFinishedEvent.bind(this)), this.analytics.on(p, this.onTrackInterrupt.bind(this)), this.analytics.on(J, this.onTrackInterrupt.bind(this));
                    }
                    var e = t.prototype;
                    return (
                        (e.onTickEvent = function (t) {
                            var e = kt(t);
                            if (void 0 !== e) {
                                var i = this.getOrCreateNewSessionDataForTrack(e, t);
                                t.isSeeking ? (i.currentTimeMs = e.currentTimeMs) : this.updateViewData(e, i, t);
                            }
                        }),
                        (e.onFullscreenEvent = function (t) {
                            var e = kt(t);
                            void 0 !== e && (this.getOrCreateNewSessionDataForTrack(e, t).isFullscreenMode = !0);
                        }),
                        (e.onShrinkEvent = function (t) {
                            var e = kt(t);
                            void 0 !== e && (this.getOrCreateNewSessionDataForTrack(e, t).isFullscreenMode = !1);
                        }),
                        (e.onTrackFinishedEvent = function (t) {
                            var e = kt(t);
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
                            var e = kt(t);
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
                            for (var t, e = {}, i = u(Ve); !(t = i()).done; ) {
                                e[t.value] = 0;
                            }
                            return e;
                        }),
                        (e.generateNewMaxContinuousHistogram = function () {
                            for (var t, e = {}, i = u(Ve); !(t = i()).done; ) {
                                e[t.value] = { current: 0, max: 0 };
                            }
                            return e;
                        }),
                        (e.resetContinuousViewDataForHistogram = function (t) {
                            for (var e, i = u(Ve); !(e = i()).done; ) {
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
                                for (var n, a = 100 * e, s = u(Ve); !(n = s()).done; ) {
                                    var r = n.value;
                                    a >= r && (t[r] += i);
                                }
                        }),
                        (e.updateMaxContinuousHistogram = function (t, e, i) {
                            if (0 !== e)
                                for (var n, a = 100 * e, s = u(Ve); !(n = s()).done; ) {
                                    var r = n.value;
                                    a >= r ? (t[r].current += i) : t[r].current > 0 && this.resetContinuousViewDataForBucket(t[r]);
                                }
                            else this.resetContinuousViewDataForHistogram(t);
                        }),
                        (e.constructVideoSessionDetails = function (t, e) {
                            return { video_details: { is_preroll_video: e.displayType === st, video_length: Math.round(e.durationMs), time_watched: Math.round(t.timeWatchedMs), time_watched_fullscreen: Math.round(t.timeWatchedFullscreenMs), time_watched_with_audio: Math.round(t.timeWatchedWithAudioMs), time_watched_fullscreen_with_audio: Math.round(t.timeWatchedFullscreenWithAudioMs), time_watched_100_with_audio: Math.round(t.watchedWithAudioMsByInViewPct[100]), video_type: _t[e.contentType], watched_ms_by_in_view_pct: this.constructAggregateHistogramPayload(t.watchedMsByInViewPct), watched_with_audio_ms_by_in_view_pct: this.constructAggregateHistogramPayload(t.watchedWithAudioMsByInViewPct), watched_ms_by_viewport_pct: this.constructAggregateHistogramPayload(t.watchedMsByViewportPct), max_continuous_watched_ms_by_in_view_pct: this.constructMaxContinuousHistogramPayload(t.maxContinuousWatchedMsByInViewPct), max_continuous_watched_with_audio_ms_by_in_view_pct: this.constructMaxContinuousHistogramPayload(t.maxContinuousWatchedWithAudioMsByInViewPct), sizes_info_at_the_start: { viewport_size: t.sizesInfoAtTheStart.viewportSize, ad_size: t.sizesInfoAtTheStart.mediaSize } } };
                        }),
                        (e.constructAggregateHistogramPayload = function (t) {
                            for (var e, i = {}, n = u(Ve); !(e = n()).done; ) {
                                var a = e.value;
                                i[a] = Math.round(t[a]);
                            }
                            return { histogram: i };
                        }),
                        (e.constructMaxContinuousHistogramPayload = function (t) {
                            for (var e, i = {}, n = u(Ve); !(e = n()).done; ) {
                                var a = e.value,
                                    s = t[a];
                                i[a] = Math.round(Math.max(s.current, s.max));
                            }
                            return { histogram: i };
                        }),
                        (e.emitVideoSessionEvent = function (t, e) {
                            this.analytics.emit(et, t, e);
                        }),
                        t
                    );
                })(),
                Le = [nt, F, at, L, b, C, V, it, W, N],
                We = [L, C, V, it],
                Ne = (function () {
                    function t(t, e) {
                        (this.analytics = t), (this.context = e), (this.eventMap = {}), this.analytics.on(X, this.onTickEvent.bind(this)), this.analytics.on($, this.onTrackFinishedEvent.bind(this)), this.analytics.on(D, this.onPauseEvent.bind(this)), this.analytics.on(U, this.onPlaybackComplete.bind(this));
                    }
                    var e = t.prototype;
                    return (
                        (e.onTrackFinishedEvent = function (t) {
                            var e = kt(t);
                            if (void 0 !== e) {
                                var i = this.eventMap[e.id];
                                void 0 !== i && (e.shouldLoop ? (i.timePlayedToMs = 0) : (this.eventMap[e.id] = void 0));
                            }
                        }),
                        (e.onPlaybackComplete = function (t) {
                            var e = kt(t);
                            if (void 0 !== e) {
                                var i = this.eventMap[e.id];
                                void 0 !== i && this.context && this.context.enableShortFormCompleteLogging && this.emitOnce(N, i, t);
                            }
                        }),
                        (e.onPauseEvent = function (t) {
                            this.resetContinuousViewEventTimingData(t);
                        }),
                        (e.onTickEvent = function (t) {
                            var e = kt(t);
                            if (void 0 !== e) {
                                var i = this.eventMap[e.id];
                                if (void 0 === i) {
                                    i = { timePlayedToMs: e.currentTimeMs };
                                    for (var n, a = u(Le); !(n = a()).done; ) {
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
                            a >= 1 && (e[at].timePlayedMs += n), a >= 1 ? (e[L].timePlayedMs += n) : (e[L].timePlayedMs = 0), a >= 0.5 && Ct(i) ? (e[C].timePlayedMs += n) : (e[C].timePlayedMs = 0), a >= 0.5 ? (e[V].timePlayedMs += n) : (e[V].timePlayedMs = 0), a >= 1 && !i.isMuted && (e[b].timePlayedMs += n), a >= 0.5 ? (e[it].timePlayedMs += n) : (e[it].timePlayedMs = 0), (e[W].timePlayedMs += n), a >= 0.5 && (e[W].visibilityWeightedTimePlayedMs += a * n), (e[N].timePlayedMs += n);
                        }),
                        (e.resetContinuousViewEventTimingData = function (t) {
                            var e = this.eventMap[t.currentTrackId];
                            if (void 0 !== e)
                                for (var i, n = u(We); !(i = n()).done; ) {
                                    e[i.value].timePlayedMs = 0;
                                }
                        }),
                        (e.checkViewEvents = function (t, e, i) {
                            var n;
                            e[at].timePlayedMs >= (!(n = t).isLive && n.durationMs > 0 && !n.shouldLoop ? Math.min(n.durationMs - 500, qt) : qt) && (this.emitOnce(at, e, i), this.emitOnce(nt, e, i)),
                                e[L].timePlayedMs >= 1e3 && this.emitOnce(L, e, i),
                                e[b].timePlayedMs >=
                                    (function (t) {
                                        return !t.isLive && t.durationMs > 0 ? 0.5 * t.durationMs : Number.MAX_SAFE_INTEGER;
                                    })(t) && this.emitOnce(b, e, i),
                                e[C].timePlayedMs >= 2e3 && this.emitOnce(C, e, i),
                                e[V].timePlayedMs >= 2e3 && this.emitOnce(V, e, i),
                                e[it].timePlayedMs >=
                                    (function (t) {
                                        return !t.isLive && t.durationMs > 0 ? Math.min(0.95 * t.durationMs, 1e4) : 1e4;
                                    })(t) && this.emitOnce(it, e, i);
                            var a = e[W];
                            a.timePlayedMs >=
                                (function (t) {
                                    return !t.isLive && t.durationMs > 0 ? Math.min(0.95 * t.durationMs, 6e3) : 6e3;
                                })(t) &&
                                a.visibilityWeightedTimePlayedMs >=
                                    (function (t) {
                                        return !t.isLive && t.durationMs > 0 ? Math.min(0.5 * t.durationMs, 3e3) : 3e3;
                                    })(t) &&
                                this.emitOnce(W, e, i),
                                this.context && this.context.enableShortFormCompleteLogging && e[N].timePlayedMs >= 15e3 && this.emitOnce(N, e, i);
                        }),
                        (e.checkPlayFromTap = function (t, e) {
                            e.isPlaying && !e.isPreview && (this.emitOnce(F, t, e), this.emitOnce(nt, t, e));
                        }),
                        (e.emitOnce = function (t, e, i) {
                            e[t].fired || (this.analytics.emit(t, i), (e[t].fired = !0));
                        }),
                        t
                    );
                })();
            const De = (function (t) {
                function e(e, i, n, a, s) {
                    var r;
                    ((r = t.call(this) || this).scribeListener = new Ee((0, o.Z)(r), e, a)), (r.behavioralEventListener = new Wt((0, o.Z)(r), s)), (r.promotedLogListener = new ae((0, o.Z)(r), i)), (r.tentpoleListener = new Ce((0, o.Z)(r))), (r.viewListener = new Ne((0, o.Z)(r), a)), (r.playbackLapseListener = new te((0, o.Z)(r))), (r.errorListener = new Ot((0, o.Z)(r))), (r.beaconListener = new Lt((0, o.Z)(r))), (r.rewindListener = new se((0, o.Z)(r))), (r.heartbeatListener = new xt((0, o.Z)(r))), (r.loopListener = new Kt((0, o.Z)(r))), (r.intendToPlayListener = new Ut((0, o.Z)(r))), (r.videoSessionListener = new Ae((0, o.Z)(r))), (r.ctaImpressionListener = new Dt((0, o.Z)(r))), (r.captionsListener = new Nt((0, o.Z)(r)));
                    var c = new Qt(n, a),
                        d = new Jt(c);
                    return (r.lifecycleListener = new $t((0, o.Z)(r), d)), r;
                }
                (0, c.Z)(e, t);
                var i = e.prototype;
                return (
                    (i.onTickEvent = function (t) {
                        this.emit(X, t);
                    }),
                    (i.onReplay = function (t) {
                        var e = kt(t);
                        void 0 !== e && (e.shouldLoop || this.emit(z, t));
                    }),
                    (i.onTrackFinished = function (t) {
                        this.emit($, t);
                    }),
                    (i.onIntendToPlay = function (t) {
                        this.emit(k, t);
                    }),
                    (i.onPlay = function (t) {
                        this.emit(O, t);
                    }),
                    (i.onPause = function (t) {
                        this.emit(D, t);
                    }),
                    (i.onMute = function (t) {
                        this.emit(A, t);
                    }),
                    (i.onUnmute = function (t) {
                        this.emit(tt, t);
                    }),
                    (i.onFullScreen = function (t) {
                        this.emit(T, t);
                    }),
                    (i.onShrink = function (t) {
                        this.emit(Q, t);
                    }),
                    (i.onAdSkip = function (t) {
                        this.emit(p, t);
                    }),
                    (i.onCtaImpression = function (t) {
                        this.emit(y, t);
                    }),
                    (i.onCtaClick = function (t) {
                        this.emit(f, t);
                    }),
                    (i.onConfigLoaded = function (t) {
                        this.emit(m, t);
                    }),
                    (i.onError = function (t, e) {
                        this.emit(g, t, e);
                    }),
                    (i.onTeardown = function (t) {
                        this.emit(J, t);
                    }),
                    (i.onManualQualityLevelChange = function (t, e) {
                        this.emit(I, t, e);
                    }),
                    (i.onPlaybackSpeedChange = function (t, e) {
                        this.emit(j, t, e);
                    }),
                    e
                );
            })(h());
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AudioOnlyVideoPlayer-3e608b8e.9ac7606a.js.map

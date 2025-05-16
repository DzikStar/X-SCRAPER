(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AppModules-6107ac1a"],
    {
        2027: (t, e, i) => {
            "use strict";
            i.d(e, { Z: () => u });
            i(136728), i(571372);
            function s(t) {
                return Object.keys(n(t));
            }
            function n(t) {
                return t.reduce((t, e) => ((t[e] = !0), t), {});
            }
            class o {
                constructor({ callback: t, makeEventSource: e, topics: i }) {
                    (this.topics = []),
                        (this.backoffDuration = 0),
                        (this._handleMessage = ({ data: t }) => {
                            try {
                                const e = JSON.parse(t);
                                this.connection && "/system/config" === e.topic && (this.connection.hasConfig = !0), this.callback(e);
                            } catch (t) {}
                        }),
                        (this._handleError = () => {
                            if (!this.connection || this.connection.eventSource.readyState === this.connection.eventSource.OPEN) return;
                            const t = this.connection;
                            (t &&
                                t.eventSource.readyState === t.eventSource.CONNECTING &&
                                (function (t, e) {
                                    const i = n(t),
                                        o = Object.keys(i),
                                        r = s(e);
                                    return o.length === r.length && r.every((t) => i[t]);
                                })(t.topics, this._getTopicsForAutoSubscribe())) ||
                                (this._cleanup(), this.connection && this.connection.hasConfig ? (this.backoffDuration = 1e3) : (this.backoffDuration = Math.max(1e3, Math.min(2 * this.backoffDuration, 6e4))), (this.backoffTimeoutId = setTimeout(this._connect, this.backoffDuration * (0.5 + Math.random()))));
                        }),
                        (this._connect = () => {
                            this._cleanup();
                            const t = this._getTopicsForAutoSubscribe();
                            this.makeEventSource(t)
                                .then((e) => {
                                    if ("object" != typeof e) throw new Error("EventSource must be defined");
                                    e.addEventListener("message", this._handleMessage), e.addEventListener("error", this._handleError), (this.connection = { eventSource: e, topics: t, hasConfig: !1 });
                                })
                                .catch(() => {
                                    this._handleError();
                                });
                        }),
                        (this.makeEventSource = e),
                        (this.callback = t),
                        this.setTopics(i),
                        this._connect();
                }
                setTopics(t) {
                    this.topics = t;
                }
                getAutoSubscribedTopics() {
                    return this.connection ? this.connection.topics : [];
                }
                _getTopicsForAutoSubscribe() {
                    return this.topics.slice(0, o.MAX_AUTO_SUBSCRIBE_TOPICS);
                }
                _cleanup() {
                    const t = this.connection;
                    t && (t.eventSource.removeEventListener("message", this._handleMessage), t.eventSource.removeEventListener("error", this._handleError), t.eventSource.close(), (this.connection = null)), clearTimeout(this.backoffTimeoutId);
                }
                teardown() {
                    this._cleanup();
                }
            }
            o.MAX_AUTO_SUBSCRIBE_TOPICS = 20;
            function r(t) {
                try {
                    return Promise.resolve(400 === t.status && JSON.parse(t.body).errors.some((t) => 392 === t.code));
                } catch {
                    return Promise.resolve(!1);
                }
            }
            var a = i(2138);
            class c {
                constructor(t) {
                    (this.sessionId = ""),
                        (this.pendingState = { topics: [], forceSubscribeAll: !1 }),
                        (this.appliedState = { topics: [] }),
                        (this.setTopics = (t = []) => {
                            (this.pendingState.topics = s(t)), this._applyPendingState();
                        }),
                        (this._subscribeAll = () => {
                            (this.pendingState.forceSubscribeAll = !0), this._applyPendingState();
                        }),
                        (this._applyPendingState = () => {
                            const t = this.pendingState.forceSubscribeAll ? this.pendingState.topics : this.pendingState.topics.filter((t) => -1 === this.appliedState.topics.indexOf(t)),
                                e = this.appliedState.topics.filter((t) => -1 === this.pendingState.topics.indexOf(t)),
                                i = !this.sessionId,
                                s = 0 === t.length && 0 === e.length;
                            i || s || ((this.appliedState = { topics: this.pendingState.topics }), (this.pendingState = { topics: this.appliedState.topics, forceSubscribeAll: !1 }), this.updateSubscriptions({ toSubscribe: t, toUnsubscribe: e, sessionId: this.sessionId }));
                        });
                    const { updateSubscriptions: e, throttlePeriod: i = c.UPDATE_SUBSCRIPTIONS_THROTTLE } = t;
                    (this.updateSubscriptions = e), (this.throttlePeriod = i), null !== i && i >= 0 && (this._applyPendingState = (0, a.Z)(this._applyPendingState, i, { leading: !1 }));
                }
                setConfig(t = null, e = []) {
                    if ((clearInterval(this.intervalId), !t || !t.config)) return;
                    (this.sessionId = t.config.session_id), (this.appliedState = { topics: e }), this._applyPendingState();
                    const i = (t.config.subscription_ttl_millis || c.DEFAULT_TTL) - c.TIMEOUT_PREEMPT_DURATION;
                    this.intervalId = setInterval(this._subscribeAll, i);
                }
                teardown() {
                    clearInterval(this.intervalId), this.updateSubscriptions({ toSubscribe: [], toUnsubscribe: this.appliedState.topics, sessionId: this.sessionId });
                }
            }
            function h({ condition: t, promiseFactory: e, sideEffect: i }) {
                return (...s) => {
                    const n = e(...s);
                    return n
                        .then(t)
                        .then((t) => {
                            t && i();
                        })
                        .then(
                            () => n,
                            () => n,
                        );
                };
            }
            (c.DEFAULT_TTL = 12e4), (c.TIMEOUT_PREEMPT_DURATION = 2e4), (c.UPDATE_SUBSCRIPTIONS_THROTTLE = 1e3);
            class u {
                constructor({ makeEventSource: t, updateSubscriptions: e }) {
                    (this.isSuspended = !1),
                        (this.eventSourceConnector = null),
                        (this.subscriptionsByTopic = {}),
                        (this._closeEventSource = () => {
                            this._clearExpiryTimeout(), this.livePipelineResubscriber.setConfig(null), this.eventSourceConnector && (this.eventSourceConnector.teardown(), (this.eventSourceConnector = null));
                        }),
                        (this.restartEventSource = () => {
                            this._closeEventSource(), this._reconcileTopics();
                        }),
                        (this._handleMessage = ({ payload: t, topic: e }) => {
                            e === u.SYSTEM_CONFIG_TOPIC && this.eventSourceConnector && this.livePipelineResubscriber.setConfig(t, this.eventSourceConnector.getAutoSubscribedTopics());
                            const i = Promise.resolve(t);
                            return (this.subscriptionsByTopic[e] || []).map((t) => i.then(t.callback));
                        }),
                        (this.makeEventSource = t),
                        (this.livePipelineResubscriber = new c({ updateSubscriptions: h({ promiseFactory: e, condition: r, sideEffect: this.restartEventSource }) }));
                }
                teardown() {
                    this._clearExpiryTimeout(), (this.subscriptionsByTopic = {}), this.livePipelineResubscriber.teardown(), this.eventSourceConnector && (this.eventSourceConnector.teardown(), (this.eventSourceConnector = null));
                }
                suspend() {
                    (this.isSuspended = !0), this._reconcileTopics();
                }
                resume() {
                    (this.isSuspended = !1), this._reconcileTopics();
                }
                subscribeTopic(t, e) {
                    if (!t) return { teardown: () => {} };
                    const i = { topic: t, callback: e };
                    return (
                        (this.subscriptionsByTopic[t] = this.subscriptionsByTopic[t] || []),
                        this.subscriptionsByTopic[t].push(i),
                        this._reconcileTopics(),
                        {
                            teardown: () => {
                                const e = (this.subscriptionsByTopic[t] || []).filter((t) => t !== i);
                                0 === e.length ? delete this.subscriptionsByTopic[t] : (this.subscriptionsByTopic[t] = e), this._reconcileTopics();
                            },
                        }
                    );
                }
                _reconcileTopics() {
                    const t = this.isSuspended ? [] : Object.keys(this.subscriptionsByTopic),
                        e = t.length > 0;
                    e && this._clearExpiryTimeout(), this.livePipelineResubscriber.setTopics(t), this.eventSourceConnector && this.eventSourceConnector.setTopics(t), e && !this.eventSourceConnector ? (this._closeEventSource(), (this.eventSourceConnector = new o({ makeEventSource: this.makeEventSource, callback: this._handleMessage, topics: t }))) : e || !this.eventSourceConnector || this.connectionExpiryTimeoutId || (this.connectionExpiryTimeoutId = setTimeout(this._closeEventSource, u.UNUSED_CONNECTION_EXPIRY));
                }
                _clearExpiryTimeout() {
                    clearTimeout(this.connectionExpiryTimeoutId), (this.connectionExpiryTimeoutId = null);
                }
            }
            (u.SYSTEM_CONFIG_TOPIC = "/system/config"), (u.UNUSED_CONNECTION_EXPIRY = 3e4);
        },
        666536: (t, e, i) => {
            "use strict";
            i.d(e, { Z: () => o });
            var s = i(936386),
                n = i.n(s);
            const o = (t, e, i) => n()(t, e, i);
        },
        417144: (t, e, i) => {
            "use strict";
            function s(t, e = 1) {
                let i = e;
                const s = new Map();
                let n = 0,
                    o = 0,
                    r = 0,
                    a = null;
                function c() {
                    s.clear(), (n = 0), (o = 0), (r = 0);
                }
                return {
                    uploadStart: function (t, e) {
                        s.set(t, { time: Date.now(), bytes: e }), o || (o = Date.now());
                    },
                    uploadFinish: function (h, u) {
                        const l = s.get(h);
                        l &&
                            ((n += u - l.bytes),
                            s.delete(h),
                            ++r === i &&
                                (function () {
                                    if (!o) return;
                                    const s = Date.now() - o;
                                    if (s <= 0) return;
                                    if (1 !== e) return;
                                    const r = n / s;
                                    if (r < 5e3 && 1 === i) return;
                                    !a || a.byterate < r ? ((i += 1), t(), (a = { byterate: r, poolSize: i })) : ((i -= 2), (i = Math.max(i, 1)), (a = null));
                                    c();
                                })());
                    },
                    reset: c,
                    getPoolSize: () => i,
                    start: function () {
                        for (let e = 0; e < i; ++e) t();
                    },
                };
            }
            i.d(e, { Z: () => u, d: () => y });
            i(543673), i(240753), i(128399);
            function n(t) {
                const e = new URLSearchParams();
                for (const i of Object.keys(t)) {
                    const s = t[i];
                    s && e.set(i, s);
                }
                return `&${String(e)}`;
            }
            function o(t, e = a, i = r) {
                const s = Math.max(t, e);
                return Math.min(s, i);
            }
            const r = 5242880,
                a = 65536,
                c = 2e3,
                h = 1e4;
            class u {
                constructor(t, e = T) {
                    var i;
                    (this.timeoutIdMap = {}), (this.mediaId = ""), (this.mediaKey = ""), (this.fileHandle = t), (this.inflightSegments = new Map()), (this.totalBytes = t ? t.size : 0), (this.mediaType = t ? t.type : void 0), (this.initStartTime = new Date()), (this.sruHeaders = e.sruHeaders || {}), (this.uploadUrl = e.uploadUrl || m), (this.retainMediaForever = !!e.retainMediaForever), (this.sruParameterOverrides = e.sruParameterOverrides), (this.minSegmentBytes = this.sruParameterOverrides?.minSegmentBytes || ((i = this.totalBytes), o(Math.ceil(i / h)))), this._clearState();
                }
                upload(t) {
                    ((this.hasAttemptedFinalize && (this.uploadOptions.trimRanges !== t.trimRanges || this.uploadOptions.extraFinalizeParams !== t.extraFinalizeParams)) || this.uploadOptions.extraInitParams !== t.extraInitParams) && this._clearState(),
                        (this.uploadOptions = t),
                        this.state !== E.SUCCEEDED && this.state !== E.PENDING && ((this.state = E.PENDING), this.hasAttemptedFinalize ? this._postFinalize() : this.mediaId ? this._startNextAppendSegment() : this._postInit()),
                        (this._bitrateMonitor = t.withMultiRequests
                            ? s(() => {
                                  this._startNextAppendSegment();
                              }, t.withMultiRequestsDefaultPoolSize)
                            : void 0),
                        this._notifyResult(),
                        this._notifyProgress(this._uploadProgress());
                }
                cancel() {
                    "function" == typeof this.uploadOptions.error && this.uploadOptions.error({ code: y.CANCELED }), this._clearState();
                }
                pollStatusOfExistingMediaId(t, e) {
                    (this.mediaId = t), (this.uploadOptions = e || T), (this.state = E.PENDING), this._getStatus();
                }
                _clearState() {
                    for (const t of Object.keys(this.timeoutIdMap)) clearTimeout(this.timeoutIdMap[t]), delete this.timeoutIdMap[t];
                    (this.state = E.RESET),
                        (this.mediaId = ""),
                        (this.mediaKey = ""),
                        (this.uploadOptions = T),
                        (this.nextSegmentBytes =
                            this.sruParameterOverrides?.minSegmentBytes ||
                            (function () {
                                const t = window.navigator.connection;
                                if (t) {
                                    const e = t.type || t.effectiveType;
                                    if (t.downlink) return o(((1e3 * t.downlink) / 8 / 2) * c);
                                    if ("wifi" === e) return o(5 * a);
                                }
                                return o(2 * a);
                            })()),
                        (this.segmentIndex = 0),
                        (this.totalUploadDuration = 0),
                        (this.uploadedBytes = 0),
                        (this.hasAttemptedFinalize = !1),
                        this.inflightSegments.forEach(({ request: t }) => t.abort()),
                        (this.inflightSegments = new Map()),
                        this._bitrateMonitor?.reset();
                }
                uploadExternalMedia(t, e, i, s = T) {
                    (this.uploadOptions = s), (this.state = E.PENDING), (this.progressMode = "uploading");
                    let o = n({ source_url: t, media_type: e, media_category: i });
                    (o += this.uploadOptions.extraInitParams || ""), (o += this.uploadOptions.extraFinalizeParams || "");
                    this._sendXhr(
                        "POST",
                        "INIT",
                        o,
                        (t) => {
                            (this.mediaId = t.media_id_string), this._getStatus();
                        },
                        (...t) => this._uploadError(...t),
                        p,
                    );
                }
                _postInit() {
                    if (this.totalBytes) {
                        this.progressMode = "uploading";
                        const t = { total_bytes: String(this.totalBytes), media_type: this.mediaType || "" };
                        this.uploadOptions.enable_1080p_variant && (t.enable_1080p_variant = String(!0));
                        const { mediaItem: e } = this.uploadOptions;
                        if (e?.mediaFile?.duration) {
                            const i = 1e3 * e.mediaFile.duration;
                            t.video_duration_ms = String(i);
                        }
                        let i = n(t);
                        this.uploadOptions.extraInitParams && (i += this.uploadOptions.extraInitParams),
                            this._sendXhr(
                                "POST",
                                "INIT",
                                i,
                                (...t) => this._initSuccess(...t),
                                (...t) => this._uploadError(...t),
                                p,
                            );
                    } else this._uploadError({ code: y.ZERO_FILE_LENGTH });
                }
                _initSuccess(t) {
                    this.state === E.PENDING && ((this.mediaId = t.media_id_string), (this.mediaKey = t.media_key), this._setSessionTimeout(t.expires_after_secs), this._bitrateMonitor ? this._bitrateMonitor.start() : this._startNextAppendSegment());
                }
                _setSessionTimeout(t) {
                    if ((this.timeoutIdMap.session && (clearTimeout(this.timeoutIdMap.session), delete this.timeoutIdMap.session), t)) {
                        const e = Math.min(l, 1e3 * t);
                        this.timeoutIdMap.session = setTimeout(() => {
                            this._uploadError({ code: y.TIMEOUT }), this._stats("NONE", "timeout"), this._clearState();
                        }, e);
                    }
                }
                _startNextAppendSegment() {
                    if (this.hasAttemptedFinalize || this.inflightSegments.size >= (this._bitrateMonitor?.getPoolSize() ?? f)) return;
                    if (this.uploadedBytes === this.totalBytes) return this._postFinalize();
                    if (!this.fileHandle) return;
                    let t = 0;
                    this.inflightSegments.forEach(({ bytes: e }) => (t += e));
                    const e = t + this.uploadedBytes,
                        i = Math.min(this.nextSegmentBytes, this.totalBytes - e);
                    if (i <= 0) return;
                    const s = new FormData();
                    if (this.fileHandle) {
                        const t = this.fileHandle.slice(e, e + i);
                        s.append("media", t);
                    }
                    const o = this.segmentIndex;
                    this.segmentIndex += 1;
                    const r = n({ media_id: this.mediaId, segment_index: String(o) }),
                        a = this._sendXhr(
                            "POST",
                            "APPEND",
                            r,
                            () => {
                                if (this.state === E.PENDING) {
                                    const t = this.inflightSegments.get(o);
                                    t && (this.inflightSegments.delete(o), (this.uploadedBytes += t.bytes)), this._notifyProgress(this._uploadProgress(), this.mediaId), 0 === this.inflightSegments.size && this._startNextAppendSegment();
                                }
                            },
                            (...t) => this._uploadError(...t),
                            5,
                            s,
                            () => this._startNextAppendSegment(),
                            i,
                        );
                    this.inflightSegments.set(o, { bytes: i, request: a });
                }
                _postFinalize() {
                    if (this.uploadOptions.pauseBeforeFinalize) (this.state = E.PAUSED), this.uploadOptions.pause && this.uploadOptions.pause();
                    else {
                        this.hasAttemptedFinalize = !0;
                        const t = { media_id: this.mediaId };
                        this.uploadOptions.trimRanges && (t.trim_ranges = this.uploadOptions.trimRanges), this.mediaType && /^video\//.test(this.mediaType) && (t.allow_async = String(!0)), this.retainMediaForever && (t.ttl = "infinite");
                        let e = n(t);
                        (e += this.uploadOptions.extraFinalizeParams || ""),
                            this._sendXhr(
                                "POST",
                                "FINALIZE",
                                e,
                                (...t) => this._finalizeOrStatusSuccess(...t),
                                (...t) => this._uploadError(...t),
                                p,
                            );
                    }
                }
                _finalizeOrStatusSuccess(t) {
                    this._setSessionTimeout(t.expires_after_secs);
                    const e = t.processing_info;
                    if (!e) return void this._finalizeSuccess(t);
                    let i = 0;
                    switch (e.state) {
                        case "pending":
                            this.progressMode = "waiting";
                            break;
                        case "in_progress":
                            (this.progressMode = "processing"), "number" == typeof e.progress_percent && (i = e.progress_percent), i >= 100 && (i = 99);
                            break;
                        case "succeeded":
                            return void this._finalizeSuccess(t);
                        case "failed": {
                            const t = e.error;
                            let i;
                            return (i = t?.code ? g[String(t.code)] : y.INTERNAL_ERROR), void this._uploadError({ ...t, code: i });
                        }
                        default:
                            return void this._uploadError();
                    }
                    this._notifyProgress(i, this.mediaId, this.mediaKey);
                    const s = e.check_after_secs || 10;
                    setTimeout((...t) => this._getStatus(...t), 1e3 * s);
                }
                _getStatus() {
                    if (this.state === E.PENDING) {
                        const t = n({ media_id: this.mediaId });
                        this._sendXhr(
                            "GET",
                            "STATUS",
                            t,
                            (...t) => this._finalizeOrStatusSuccess(...t),
                            (...t) => this._uploadError(...t),
                            p,
                        );
                    }
                }
                _finalizeSuccess(t) {
                    this.state === E.PENDING && ((this.state = E.SUCCEEDED), this._notifyResult());
                }
                _uploadError(t) {
                    if (this.state !== E.PENDING) return;
                    const e = t.error?.match(/{ "message": "maxFileSizeExceeded", "maxFileSizeBytes": \d+ }/);
                    if (e) {
                        const t = JSON.parse(e[0]);
                        this.error = { code: y.FILE_TOO_LARGE, message: t.message, maxSizeBytes: t.maxFileSizeBytes };
                    } else t && t.code ? (this.error = t) : (this.error = { code: y.INTERNAL_ERROR, message: t?.error });
                    (this.state = E.FAILED), this._notifyResult();
                }
                _uploadProgress() {
                    if (this.totalBytes) {
                        return 100 * (this.uploadedBytes / this.totalBytes);
                    }
                    return 0;
                }
                _notifyProgress(t, e, i) {
                    this.state !== E.FAILED && this.uploadOptions.progress && this.uploadOptions.progress(t, this.progressMode, e, i);
                }
                _notifyResult() {
                    this.state === E.SUCCEEDED && this.uploadOptions.success && this.uploadOptions.success(this.mediaId, this.mediaKey), this.state === E.FAILED && this.uploadOptions.error && this.uploadOptions.error(this.error);
                }
                _stats(t, e, i = {}) {
                    const s = i.requestStartTime || this.initStartTime,
                        n = new Date().getTime() - s.getTime();
                    if (((this.totalUploadDuration += n), this.uploadOptions.stats)) {
                        const s = { mediaType: this.mediaType || "", command: t, status: e, duration: n, totalByteSize: this.totalBytes, totalDuration: this.totalUploadDuration };
                        i.segmentBytes && (s.appendByteSize = i.segmentBytes), this.uploadOptions.stats(s);
                    }
                }
                _sendXhr(t, e, i, s, n, r, a, h, u = 0) {
                    const l = `${this.uploadUrl}?command=${e}${i}`;
                    let p = !1;
                    const m = new Date(),
                        f = (o) => {
                            if (r) {
                                const o = [l, r].join("-");
                                this.timeoutIdMap[o] = setTimeout(() => {
                                    this._sendXhr(t, e, i, s, n, r - 1, a, h, u);
                                }, S);
                            } else g(o);
                        },
                        g = (t) => {
                            this._stats(e, t || "unknown-error", { requestStartTime: m, segmentBytes: u }), "function" == typeof n && n(b(E) || { code: y.INVALID_RES_STATUS, mediaId: this.mediaId });
                        },
                        E = new XMLHttpRequest();
                    E.open(t, l, !0),
                        (E.withCredentials = !0),
                        (E.timeout = this.sruParameterOverrides?.clientsideSruUploadTimeoutMs || d),
                        (E.onload = () => {
                            if (E.status >= 200 && E.status < 400) {
                                const t = b(E);
                                204 === E.status || t ? (this._stats(e, "success", { requestStartTime: m, segmentBytes: u }), s(t || {}), !p && h && h()) : f("parsererror");
                            } else E.status && 503 !== E.status ? g("invalid-response") : f("503");
                        }),
                        (E.onerror = () => f("error")),
                        (E.ontimeout = () => {
                            (this.nextSegmentBytes = this.minSegmentBytes), f("timeout");
                        });
                    let T = !1;
                    E.upload.onprogress = (t) => {
                        T ? t.loaded === t.total && this._bitrateMonitor?.uploadFinish(l, t.total) : ((T = !0), this._bitrateMonitor?.uploadStart(l, t.loaded));
                        const e = t.loaded,
                            i = ((this.uploadedBytes + e) / this.totalBytes) * 100;
                        if ((this._notifyProgress(i, this.mediaId), e / t.total > _ && !p && ((p = !0), a))) {
                            const t = Math.max(1, new Date().getTime() - m.getTime()),
                                i = this.minSegmentBytes,
                                s = this.sruParameterOverrides?.maxSegmentBytes;
                            (this.nextSegmentBytes = (function (t) {
                                const e = t.idealUploadTimeMs || c,
                                    i = t.sentBytes / t.uploadTimeMs;
                                return o(Math.round(e * i), t.minSegmentBytes, t.maxSegmentBytes);
                            })({ minSegmentBytes: i, sentBytes: e, uploadTimeMs: t, maxSegmentBytes: s, idealUploadTimeMs: this.sruParameterOverrides?.idealUploadTimeMs })),
                                "function" == typeof h && h();
                        }
                    };
                    for (const t in this.sruHeaders) E.setRequestHeader(t, this.sruHeaders[t]);
                    return a ? E.send(a) : E.send(), E;
                }
            }
            const l = 2147483647,
                p = 1,
                d = 45e3,
                m = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload.json",
                f = 2,
                _ = 0.95,
                S = 1e3,
                y = Object.freeze({ FILE_TOO_LARGE: 2, INTERNAL_ERROR: 131, INVALID_MEDIA: 1, RATE_LIMIT: 88, TIMEOUT: 67, UNSUPPORTED_MEDIA: 3, ZERO_FILE_LENGTH: 4, CANCELED: 999, INVALID_RES_STATUS: -1 }),
                g = Object.freeze({ 0: y.INTERNAL_ERROR, 1: y.INVALID_MEDIA, 2: y.FILE_TOO_LARGE, 3: y.UNSUPPORTED_MEDIA, 4: y.TIMEOUT }),
                E = Object.freeze({ RESET: 0, PENDING: 1, PAUSED: 2, SUCCEEDED: 3, FAILED: 4 }),
                T = {};
            function b(t) {
                try {
                    return JSON.parse(t.responseText);
                } catch (t) {
                    return null;
                }
            }
        },
        730895: (t, e, i) => {
            "use strict";
            var s = i(821176);
            t.exports = function () {
                var t = s(this),
                    e = "";
                return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e;
            };
        },
        936386: (t) => {
            function e(t, e, i) {
                var s, n, o, r, a;
                function c() {
                    var h = Date.now() - r;
                    h < e && h >= 0 ? (s = setTimeout(c, e - h)) : ((s = null), i || ((a = t.apply(o, n)), (o = n = null)));
                }
                null == e && (e = 100);
                var h = function () {
                    (o = this), (n = arguments), (r = Date.now());
                    var h = i && !s;
                    return s || (s = setTimeout(c, e)), h && ((a = t.apply(o, n)), (o = n = null)), a;
                };
                return (
                    (h.clear = function () {
                        s && (clearTimeout(s), (s = null));
                    }),
                    (h.flush = function () {
                        s && ((a = t.apply(o, n)), (o = n = null), clearTimeout(s), (s = null));
                    }),
                    h
                );
            }
            (e.debounce = e), (t.exports = e);
        },
        427495: (t, e, i) => {
            var s;
            !(function (n, o) {
                if (n) {
                    for (var r, a = { 8: "backspace", 9: "tab", 13: "enter", 16: "shift", 17: "ctrl", 18: "alt", 20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 37: "left", 38: "up", 39: "right", 40: "down", 45: "ins", 46: "del", 91: "meta", 93: "meta", 224: "meta" }, c = { 106: "*", 107: "+", 109: "-", 110: ".", 111: "/", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" }, h = { "~": "`", "!": "1", "@": "2", "#": "3", $: "4", "%": "5", "^": "6", "&": "7", "*": "8", "(": "9", ")": "0", _: "-", "+": "=", ":": ";", '"': "'", "<": ",", ">": ".", "?": "/", "|": "\\" }, u = { option: "alt", command: "meta", return: "enter", escape: "esc", plus: "+", mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl" }, l = 1; l < 20; ++l) a[111 + l] = "f" + l;
                    for (l = 0; l <= 9; ++l) a[l + 96] = l.toString();
                    (y.prototype.bind = function (t, e, i) {
                        var s = this;
                        return (t = t instanceof Array ? t : [t]), s._bindMultiple.call(s, t, e, i), s;
                    }),
                        (y.prototype.unbind = function (t, e) {
                            return this.bind.call(this, t, function () {}, e);
                        }),
                        (y.prototype.trigger = function (t, e) {
                            var i = this;
                            return i._directMap[t + ":" + e] && i._directMap[t + ":" + e]({}, t), i;
                        }),
                        (y.prototype.reset = function () {
                            var t = this;
                            return (t._callbacks = {}), (t._directMap = {}), t;
                        }),
                        (y.prototype.stopCallback = function (t, e) {
                            if ((" " + e.className + " ").indexOf(" mousetrap ") > -1) return !1;
                            if (S(e, this.target)) return !1;
                            if ("composedPath" in t && "function" == typeof t.composedPath) {
                                var i = t.composedPath()[0];
                                i !== t.target && (e = i);
                            }
                            return "INPUT" == e.tagName || "SELECT" == e.tagName || "TEXTAREA" == e.tagName || e.isContentEditable;
                        }),
                        (y.prototype.handleKey = function () {
                            return this._handleKey.apply(this, arguments);
                        }),
                        (y.addKeycodes = function (t) {
                            for (var e in t) t.hasOwnProperty(e) && (a[e] = t[e]);
                            r = null;
                        }),
                        (y.init = function () {
                            var t = y(o);
                            for (var e in t)
                                "_" !== e.charAt(0) &&
                                    (y[e] = (function (e) {
                                        return function () {
                                            return t[e].apply(t, arguments);
                                        };
                                    })(e));
                        }),
                        y.init(),
                        (n.Mousetrap = y),
                        t.exports && (t.exports = y),
                        void 0 ===
                            (s = function () {
                                return y;
                            }.call(e, i, e, t)) || (t.exports = s);
                }
                function p(t, e, i) {
                    t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent("on" + e, i);
                }
                function d(t) {
                    if ("keypress" == t.type) {
                        var e = String.fromCharCode(t.which);
                        return t.shiftKey || (e = e.toLowerCase()), e;
                    }
                    return a[t.which] ? a[t.which] : c[t.which] ? c[t.which] : String.fromCharCode(t.which).toLowerCase();
                }
                function m(t) {
                    return "shift" == t || "ctrl" == t || "alt" == t || "meta" == t;
                }
                function f(t, e, i) {
                    return (
                        i ||
                            (i = (function () {
                                if (!r) for (var t in ((r = {}), a)) (t > 95 && t < 112) || (a.hasOwnProperty(t) && (r[a[t]] = t));
                                return r;
                            })()[t]
                                ? "keydown"
                                : "keypress"),
                        "keypress" == i && e.length && (i = "keydown"),
                        i
                    );
                }
                function _(t, e) {
                    var i,
                        s,
                        n,
                        o = [];
                    for (
                        i = (function (t) {
                            return "+" === t ? ["+"] : (t = t.replace(/\+{2}/g, "+plus")).split("+");
                        })(t),
                            n = 0;
                        n < i.length;
                        ++n
                    )
                        (s = i[n]), u[s] && (s = u[s]), e && "keypress" != e && h[s] && ((s = h[s]), o.push("shift")), m(s) && o.push(s);
                    return { key: s, modifiers: o, action: (e = f(s, o, e)) };
                }
                function S(t, e) {
                    return null !== t && t !== o && (t === e || S(t.parentNode, e));
                }
                function y(t) {
                    var e = this;
                    if (((t = t || o), !(e instanceof y))) return new y(t);
                    (e.target = t), (e._callbacks = {}), (e._directMap = {});
                    var i,
                        s = {},
                        n = !1,
                        r = !1,
                        a = !1;
                    function c(t) {
                        t = t || {};
                        var e,
                            i = !1;
                        for (e in s) t[e] ? (i = !0) : (s[e] = 0);
                        i || (a = !1);
                    }
                    function h(t, i, n, o, r, a) {
                        var c,
                            h,
                            u,
                            l,
                            p = [],
                            d = n.type;
                        if (!e._callbacks[t]) return [];
                        for ("keyup" == d && m(t) && (i = [t]), c = 0; c < e._callbacks[t].length; ++c)
                            if (((h = e._callbacks[t][c]), (o || !h.seq || s[h.seq] == h.level) && d == h.action && (("keypress" == d && !n.metaKey && !n.ctrlKey) || ((u = i), (l = h.modifiers), u.sort().join(",") === l.sort().join(","))))) {
                                var f = !o && h.combo == r,
                                    _ = o && h.seq == o && h.level == a;
                                (f || _) && e._callbacks[t].splice(c, 1), p.push(h);
                            }
                        return p;
                    }
                    function u(t, i, s, n) {
                        e.stopCallback(i, i.target || i.srcElement, s, n) ||
                            (!1 === t(i, s) &&
                                ((function (t) {
                                    t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
                                })(i),
                                (function (t) {
                                    t.stopPropagation ? t.stopPropagation() : (t.cancelBubble = !0);
                                })(i)));
                    }
                    function l(t) {
                        "number" != typeof t.which && (t.which = t.keyCode);
                        var i = d(t);
                        i &&
                            ("keyup" != t.type || n !== i
                                ? e.handleKey(
                                      i,
                                      (function (t) {
                                          var e = [];
                                          return t.shiftKey && e.push("shift"), t.altKey && e.push("alt"), t.ctrlKey && e.push("ctrl"), t.metaKey && e.push("meta"), e;
                                      })(t),
                                      t,
                                  )
                                : (n = !1));
                    }
                    function f(t, e, o, r) {
                        function h(e) {
                            return function () {
                                (a = e), ++s[t], clearTimeout(i), (i = setTimeout(c, 1e3));
                            };
                        }
                        function l(e) {
                            u(o, e, t), "keyup" !== r && (n = d(e)), setTimeout(c, 10);
                        }
                        s[t] = 0;
                        for (var p = 0; p < e.length; ++p) {
                            var m = p + 1 === e.length ? l : h(r || _(e[p + 1]).action);
                            S(e[p], m, r, t, p);
                        }
                    }
                    function S(t, i, s, n, o) {
                        e._directMap[t + ":" + s] = i;
                        var r,
                            a = (t = t.replace(/\s+/g, " ")).split(" ");
                        a.length > 1 ? f(t, a, i, s) : ((r = _(t, s)), (e._callbacks[r.key] = e._callbacks[r.key] || []), h(r.key, r.modifiers, { type: r.action }, n, t, o), e._callbacks[r.key][n ? "unshift" : "push"]({ callback: i, modifiers: r.modifiers, action: r.action, seq: n, level: o, combo: t }));
                    }
                    (e._handleKey = function (t, e, i) {
                        var s,
                            n = h(t, e, i),
                            o = {},
                            l = 0,
                            p = !1;
                        for (s = 0; s < n.length; ++s) n[s].seq && (l = Math.max(l, n[s].level));
                        for (s = 0; s < n.length; ++s)
                            if (n[s].seq) {
                                if (n[s].level != l) continue;
                                (p = !0), (o[n[s].seq] = 1), u(n[s].callback, i, n[s].combo, n[s].seq);
                            } else p || u(n[s].callback, i, n[s].combo);
                        var d = "keypress" == i.type && r;
                        i.type != a || m(t) || d || c(o), (r = p && "keydown" == i.type);
                    }),
                        (e._bindMultiple = function (t, e, i) {
                            for (var s = 0; s < t.length; ++s) S(t[s], e, i);
                        }),
                        p(t, "keypress", l),
                        p(t, "keydown", l),
                        p(t, "keyup", l);
                }
            })("undefined" != typeof window ? window : null, "undefined" != typeof window ? document : null);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AppModules-6107ac1a.4328cc2a.js.map

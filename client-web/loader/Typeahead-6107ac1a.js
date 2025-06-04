(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Typeahead-6107ac1a"],
    {
        417144: (t, e, s) => {
            "use strict";
            function i(t, e = 1) {
                let s = e;
                const i = new Map();
                let a = 0,
                    o = 0,
                    n = 0,
                    r = null;
                function d() {
                    i.clear(), (a = 0), (o = 0), (n = 0);
                }
                return {
                    uploadStart: function (t, e) {
                        i.set(t, { time: Date.now(), bytes: e }), o || (o = Date.now());
                    },
                    uploadFinish: function (h, l) {
                        const u = i.get(h);
                        u &&
                            ((a += l - u.bytes),
                            i.delete(h),
                            ++n === s &&
                                (function () {
                                    if (!o) return;
                                    const i = Date.now() - o;
                                    if (i <= 0) return;
                                    if (1 !== e) return;
                                    const n = a / i;
                                    if (n < 5e3 && 1 === s) return;
                                    !r || r.byterate < n ? ((s += 1), t(), (r = { byterate: n, poolSize: s })) : ((s -= 2), (s = Math.max(s, 1)), (r = null));
                                    d();
                                })());
                    },
                    reset: d,
                    getPoolSize: () => s,
                    start: function () {
                        for (let e = 0; e < s; ++e) t();
                    },
                };
            }
            s.d(e, { Z: () => l, d: () => S });
            s(543673), s(240753), s(128399);
            function a(t) {
                const e = new URLSearchParams();
                for (const s of Object.keys(t)) {
                    const i = t[s];
                    i && e.set(s, i);
                }
                return `&${String(e)}`;
            }
            function o(t, e = r, s = n) {
                const i = Math.max(t, e);
                return Math.min(i, s);
            }
            const n = 5242880,
                r = 65536,
                d = 2e3,
                h = 1e4;
            class l {
                constructor(t, e = I) {
                    var s;
                    (this.timeoutIdMap = {}), (this.mediaId = ""), (this.mediaKey = ""), (this.fileHandle = t), (this.inflightSegments = new Map()), (this.totalBytes = t ? t.size : 0), (this.mediaType = t ? t.type : void 0), (this.initStartTime = new Date()), (this.sruHeaders = e.sruHeaders || {}), (this.uploadUrl = e.uploadUrl || c), (this.retainMediaForever = !!e.retainMediaForever), (this.sruParameterOverrides = e.sruParameterOverrides), (this.minSegmentBytes = this.sruParameterOverrides?.minSegmentBytes || ((s = this.totalBytes), o(Math.ceil(s / h)))), this._clearState();
                }
                upload(t) {
                    ((this.hasAttemptedFinalize && (this.uploadOptions.trimRanges !== t.trimRanges || this.uploadOptions.extraFinalizeParams !== t.extraFinalizeParams)) || this.uploadOptions.extraInitParams !== t.extraInitParams) && this._clearState(),
                        (this.uploadOptions = t),
                        this.state !== E.SUCCEEDED && this.state !== E.PENDING && ((this.state = E.PENDING), this.hasAttemptedFinalize ? this._postFinalize() : this.mediaId ? this._startNextAppendSegment() : this._postInit()),
                        (this._bitrateMonitor = t.withMultiRequests
                            ? i(() => {
                                  this._startNextAppendSegment();
                              }, t.withMultiRequestsDefaultPoolSize)
                            : void 0),
                        this._notifyResult(),
                        this._notifyProgress(this._uploadProgress());
                }
                cancel() {
                    "function" == typeof this.uploadOptions.error && this.uploadOptions.error({ code: S.CANCELED }), this._clearState();
                }
                pollStatusOfExistingMediaId(t, e) {
                    (this.mediaId = t), (this.uploadOptions = e || I), (this.state = E.PENDING), this._getStatus();
                }
                _clearState() {
                    for (const t of Object.keys(this.timeoutIdMap)) clearTimeout(this.timeoutIdMap[t]), delete this.timeoutIdMap[t];
                    (this.state = E.RESET),
                        (this.mediaId = ""),
                        (this.mediaKey = ""),
                        (this.uploadOptions = I),
                        (this.nextSegmentBytes =
                            this.sruParameterOverrides?.minSegmentBytes ||
                            (function () {
                                const t = window.navigator.connection;
                                if (t) {
                                    const e = t.type || t.effectiveType;
                                    if (t.downlink) return o(((1e3 * t.downlink) / 8 / 2) * d);
                                    if ("wifi" === e) return o(5 * r);
                                }
                                return o(2 * r);
                            })()),
                        (this.segmentIndex = 0),
                        (this.totalUploadDuration = 0),
                        (this.uploadedBytes = 0),
                        (this.hasAttemptedFinalize = !1),
                        this.inflightSegments.forEach(({ request: t }) => t.abort()),
                        (this.inflightSegments = new Map()),
                        this._bitrateMonitor?.reset();
                }
                uploadExternalMedia(t, e, s, i = I) {
                    (this.uploadOptions = i), (this.state = E.PENDING), (this.progressMode = "uploading");
                    let o = a({ source_url: t, media_type: e, media_category: s });
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
                            const s = 1e3 * e.mediaFile.duration;
                            t.video_duration_ms = String(s);
                        }
                        let s = a(t);
                        this.uploadOptions.extraInitParams && (s += this.uploadOptions.extraInitParams),
                            this._sendXhr(
                                "POST",
                                "INIT",
                                s,
                                (...t) => this._initSuccess(...t),
                                (...t) => this._uploadError(...t),
                                p,
                            );
                    } else this._uploadError({ code: S.ZERO_FILE_LENGTH });
                }
                _initSuccess(t) {
                    this.state === E.PENDING && ((this.mediaId = t.media_id_string), (this.mediaKey = t.media_key), this._setSessionTimeout(t.expires_after_secs), this._bitrateMonitor ? this._bitrateMonitor.start() : this._startNextAppendSegment());
                }
                _setSessionTimeout(t) {
                    if ((this.timeoutIdMap.session && (clearTimeout(this.timeoutIdMap.session), delete this.timeoutIdMap.session), t)) {
                        const e = Math.min(u, 1e3 * t);
                        this.timeoutIdMap.session = setTimeout(() => {
                            this._uploadError({ code: S.TIMEOUT }), this._stats("NONE", "timeout"), this._clearState();
                        }, e);
                    }
                }
                _startNextAppendSegment() {
                    if (this.hasAttemptedFinalize || this.inflightSegments.size >= (this._bitrateMonitor?.getPoolSize() ?? _)) return;
                    if (this.uploadedBytes === this.totalBytes) return this._postFinalize();
                    if (!this.fileHandle) return;
                    let t = 0;
                    this.inflightSegments.forEach(({ bytes: e }) => (t += e));
                    const e = t + this.uploadedBytes,
                        s = Math.min(this.nextSegmentBytes, this.totalBytes - e);
                    if (s <= 0) return;
                    const i = new FormData();
                    if (this.fileHandle) {
                        const t = this.fileHandle.slice(e, e + s);
                        i.append("media", t);
                    }
                    const o = this.segmentIndex;
                    this.segmentIndex += 1;
                    const n = a({ media_id: this.mediaId, segment_index: String(o) }),
                        r = this._sendXhr(
                            "POST",
                            "APPEND",
                            n,
                            () => {
                                if (this.state === E.PENDING) {
                                    const t = this.inflightSegments.get(o);
                                    t && (this.inflightSegments.delete(o), (this.uploadedBytes += t.bytes)), this._notifyProgress(this._uploadProgress(), this.mediaId), 0 === this.inflightSegments.size && this._startNextAppendSegment();
                                }
                            },
                            (...t) => this._uploadError(...t),
                            5,
                            i,
                            () => this._startNextAppendSegment(),
                            s,
                        );
                    this.inflightSegments.set(o, { bytes: s, request: r });
                }
                _postFinalize() {
                    if (this.uploadOptions.pauseBeforeFinalize) (this.state = E.PAUSED), this.uploadOptions.pause && this.uploadOptions.pause();
                    else {
                        this.hasAttemptedFinalize = !0;
                        const t = { media_id: this.mediaId };
                        this.uploadOptions.trimRanges && (t.trim_ranges = this.uploadOptions.trimRanges), this.mediaType && /^video\//.test(this.mediaType) && (t.allow_async = String(!0)), this.retainMediaForever && (t.ttl = "infinite");
                        let e = a(t);
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
                    let s = 0;
                    switch (e.state) {
                        case "pending":
                            this.progressMode = "waiting";
                            break;
                        case "in_progress":
                            (this.progressMode = "processing"), "number" == typeof e.progress_percent && (s = e.progress_percent), s >= 100 && (s = 99);
                            break;
                        case "succeeded":
                            return void this._finalizeSuccess(t);
                        case "failed": {
                            const t = e.error;
                            let s;
                            return (s = t?.code ? y[String(t.code)] : S.INTERNAL_ERROR), void this._uploadError({ ...t, code: s });
                        }
                        default:
                            return void this._uploadError();
                    }
                    this._notifyProgress(s, this.mediaId, this.mediaKey);
                    const i = e.check_after_secs || 10;
                    setTimeout((...t) => this._getStatus(...t), 1e3 * i);
                }
                _getStatus() {
                    if (this.state === E.PENDING) {
                        const t = a({ media_id: this.mediaId });
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
                        this.error = { code: S.FILE_TOO_LARGE, message: t.message, maxSizeBytes: t.maxFileSizeBytes };
                    } else t && t.code ? (this.error = t) : (this.error = { code: S.INTERNAL_ERROR, message: t?.error });
                    (this.state = E.FAILED), this._notifyResult();
                }
                _uploadProgress() {
                    if (this.totalBytes) {
                        return 100 * (this.uploadedBytes / this.totalBytes);
                    }
                    return 0;
                }
                _notifyProgress(t, e, s) {
                    this.state !== E.FAILED && this.uploadOptions.progress && this.uploadOptions.progress(t, this.progressMode, e, s);
                }
                _notifyResult() {
                    this.state === E.SUCCEEDED && this.uploadOptions.success && this.uploadOptions.success(this.mediaId, this.mediaKey), this.state === E.FAILED && this.uploadOptions.error && this.uploadOptions.error(this.error);
                }
                _stats(t, e, s = {}) {
                    const i = s.requestStartTime || this.initStartTime,
                        a = new Date().getTime() - i.getTime();
                    if (((this.totalUploadDuration += a), this.uploadOptions.stats)) {
                        const i = { mediaType: this.mediaType || "", command: t, status: e, duration: a, totalByteSize: this.totalBytes, totalDuration: this.totalUploadDuration };
                        s.segmentBytes && (i.appendByteSize = s.segmentBytes), this.uploadOptions.stats(i);
                    }
                }
                _sendXhr(t, e, s, i, a, n, r, h, l = 0) {
                    const u = `${this.uploadUrl}?command=${e}${s}`;
                    let p = !1;
                    const c = new Date(),
                        _ = (o) => {
                            if (n) {
                                const o = [u, n].join("-");
                                this.timeoutIdMap[o] = setTimeout(() => {
                                    this._sendXhr(t, e, s, i, a, n - 1, r, h, l);
                                }, g);
                            } else y(o);
                        },
                        y = (t) => {
                            this._stats(e, t || "unknown-error", { requestStartTime: c, segmentBytes: l }), "function" == typeof a && a(T(E) || { code: S.INVALID_RES_STATUS, mediaId: this.mediaId });
                        },
                        E = new XMLHttpRequest();
                    E.open(t, u, !0),
                        (E.withCredentials = !0),
                        (E.timeout = this.sruParameterOverrides?.clientsideSruUploadTimeoutMs || m),
                        (E.onload = () => {
                            if (E.status >= 200 && E.status < 400) {
                                const t = T(E);
                                204 === E.status || t ? (this._stats(e, "success", { requestStartTime: c, segmentBytes: l }), i(t || {}), !p && h && h()) : _("parsererror");
                            } else E.status && 503 !== E.status ? y("invalid-response") : _("503");
                        }),
                        (E.onerror = () => _("error")),
                        (E.ontimeout = () => {
                            (this.nextSegmentBytes = this.minSegmentBytes), _("timeout");
                        });
                    let I = !1;
                    E.upload.onprogress = (t) => {
                        I ? t.loaded === t.total && this._bitrateMonitor?.uploadFinish(u, t.total) : ((I = !0), this._bitrateMonitor?.uploadStart(u, t.loaded));
                        const e = t.loaded,
                            s = ((this.uploadedBytes + e) / this.totalBytes) * 100;
                        if ((this._notifyProgress(s, this.mediaId), e / t.total > f && !p && ((p = !0), r))) {
                            const t = Math.max(1, new Date().getTime() - c.getTime()),
                                s = this.minSegmentBytes,
                                i = this.sruParameterOverrides?.maxSegmentBytes;
                            (this.nextSegmentBytes = (function (t) {
                                const e = t.idealUploadTimeMs || d,
                                    s = t.sentBytes / t.uploadTimeMs;
                                return o(Math.round(e * s), t.minSegmentBytes, t.maxSegmentBytes);
                            })({ minSegmentBytes: s, sentBytes: e, uploadTimeMs: t, maxSegmentBytes: i, idealUploadTimeMs: this.sruParameterOverrides?.idealUploadTimeMs })),
                                "function" == typeof h && h();
                        }
                    };
                    for (const t in this.sruHeaders) E.setRequestHeader(t, this.sruHeaders[t]);
                    return r ? E.send(r) : E.send(), E;
                }
            }
            const u = 2147483647,
                p = 1,
                m = 45e3,
                c = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload.json",
                _ = 2,
                f = 0.95,
                g = 1e3,
                S = Object.freeze({ FILE_TOO_LARGE: 2, INTERNAL_ERROR: 131, INVALID_MEDIA: 1, RATE_LIMIT: 88, TIMEOUT: 67, UNSUPPORTED_MEDIA: 3, ZERO_FILE_LENGTH: 4, CANCELED: 999, INVALID_RES_STATUS: -1 }),
                y = Object.freeze({ 0: S.INTERNAL_ERROR, 1: S.INVALID_MEDIA, 2: S.FILE_TOO_LARGE, 3: S.UNSUPPORTED_MEDIA, 4: S.TIMEOUT }),
                E = Object.freeze({ RESET: 0, PENDING: 1, PAUSED: 2, SUCCEEDED: 3, FAILED: 4 }),
                I = {};
            function T(t) {
                try {
                    return JSON.parse(t.responseText);
                } catch (t) {
                    return null;
                }
            }
        },
        936386: (t) => {
            function e(t, e, s) {
                var i, a, o, n, r;
                function d() {
                    var h = Date.now() - n;
                    h < e && h >= 0 ? (i = setTimeout(d, e - h)) : ((i = null), s || ((r = t.apply(o, a)), (o = a = null)));
                }
                null == e && (e = 100);
                var h = function () {
                    (o = this), (a = arguments), (n = Date.now());
                    var h = s && !i;
                    return i || (i = setTimeout(d, e)), h && ((r = t.apply(o, a)), (o = a = null)), r;
                };
                return (
                    (h.clear = function () {
                        i && (clearTimeout(i), (i = null));
                    }),
                    (h.flush = function () {
                        i && ((r = t.apply(o, a)), (o = a = null), clearTimeout(i), (i = null));
                    }),
                    h
                );
            }
            (e.debounce = e), (t.exports = e);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Typeahead-6107ac1a.a23f499a.js.map

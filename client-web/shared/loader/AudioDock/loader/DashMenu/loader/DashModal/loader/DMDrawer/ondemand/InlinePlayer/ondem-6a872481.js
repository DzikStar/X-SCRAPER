"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"],
    {
        417144: (t, e, s) => {
            function i(t) {
                let e = 1;
                const s = new Map();
                let i = 0,
                    a = 0,
                    o = 0,
                    r = null;
                function n() {
                    s.clear(), (i = 0), (a = 0), (o = 0);
                }
                return {
                    uploadStart: function (t, e) {
                        s.set(t, { time: Date.now(), bytes: e }), a || (a = Date.now());
                    },
                    uploadFinish: function (d, h) {
                        const l = s.get(d);
                        l &&
                            ((i += h - l.bytes),
                            s.delete(d),
                            ++o === e &&
                                (function () {
                                    if (!a) return;
                                    const s = Date.now() - a;
                                    if (s <= 0) return;
                                    const o = i / s;
                                    if (o < 5e3 && 1 === e) return;
                                    !r || r.byterate < o ? ((e += 1), t(), (r = { byterate: o, poolSize: e })) : ((e -= 2), (e = Math.max(e, 1)), (r = null));
                                    n();
                                })());
                    },
                    reset: n,
                    getPoolSize: () => e,
                    start: function () {
                        t();
                    },
                };
            }
            s.d(e, { Z: () => l, d: () => f });
            s(543673), s(240753), s(128399);
            function a(t) {
                const e = new URLSearchParams();
                for (const s of Object.keys(t)) {
                    const i = t[s];
                    i && e.set(s, i);
                }
                return `&${String(e)}`;
            }
            function o(t, e = n, s = r) {
                const i = Math.max(t, e);
                return Math.min(i, s);
            }
            const r = 5242880,
                n = 65536,
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
                              })
                            : void 0),
                        this._notifyResult(),
                        this._notifyProgress(this._uploadProgress());
                }
                cancel() {
                    "function" == typeof this.uploadOptions.error && this.uploadOptions.error({ code: f.CANCELED }), this._clearState();
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
                                    if ("wifi" === e) return o(5 * n);
                                }
                                return o(2 * n);
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
                    } else this._uploadError({ code: f.ZERO_FILE_LENGTH });
                }
                _initSuccess(t) {
                    this.state === E.PENDING && ((this.mediaId = t.media_id_string), (this.mediaKey = t.media_key), this._setSessionTimeout(t.expires_after_secs), this._bitrateMonitor ? this._bitrateMonitor.start() : this._startNextAppendSegment());
                }
                _setSessionTimeout(t) {
                    if ((this.timeoutIdMap.session && (clearTimeout(this.timeoutIdMap.session), delete this.timeoutIdMap.session), t)) {
                        const e = Math.min(u, 1e3 * t);
                        this.timeoutIdMap.session = setTimeout(() => {
                            this._uploadError({ code: f.TIMEOUT }), this._stats("NONE", "timeout"), this._clearState();
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
                    const r = a({ media_id: this.mediaId, segment_index: String(o) }),
                        n = this._sendXhr(
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
                            i,
                            () => this._startNextAppendSegment(),
                            s,
                        );
                    this.inflightSegments.set(o, { bytes: s, request: n });
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
                            return (s = t?.code ? y[String(t.code)] : f.INTERNAL_ERROR), void this._uploadError({ ...t, code: s });
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
                        this.error = { code: f.FILE_TOO_LARGE, message: t.message, maxSizeBytes: t.maxFileSizeBytes };
                    } else t && t.code ? (this.error = t) : (this.error = { code: f.INTERNAL_ERROR, message: t?.error });
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
                _sendXhr(t, e, s, i, a, r, n, h, l = 0) {
                    const u = `${this.uploadUrl}?command=${e}${s}`;
                    let p = !1;
                    const c = new Date(),
                        _ = (o) => {
                            if (r) {
                                const o = [u, r].join("-");
                                this.timeoutIdMap[o] = setTimeout(() => {
                                    this._sendXhr(t, e, s, i, a, r - 1, n, h, l);
                                }, S);
                            } else y(o);
                        },
                        y = (t) => {
                            this._stats(e, t || "unknown-error", { requestStartTime: c, segmentBytes: l }), "function" == typeof a && a(O(E) || { code: f.INVALID_RES_STATUS, mediaId: this.mediaId });
                        },
                        E = new XMLHttpRequest();
                    E.open(t, u, !0),
                        (E.withCredentials = !0),
                        (E.timeout = this.sruParameterOverrides?.clientsideSruUploadTimeoutMs || m),
                        (E.onload = () => {
                            if (E.status >= 200 && E.status < 400) {
                                const t = O(E);
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
                        if ((this._notifyProgress(s, this.mediaId), e / t.total > g && !p && ((p = !0), n))) {
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
                    return n ? E.send(n) : E.send(), E;
                }
            }
            const u = 2147483647,
                p = 1,
                m = 45e3,
                c = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload.json",
                _ = 2,
                g = 0.95,
                S = 1e3,
                f = Object.freeze({ FILE_TOO_LARGE: 2, INTERNAL_ERROR: 131, INVALID_MEDIA: 1, RATE_LIMIT: 88, TIMEOUT: 67, UNSUPPORTED_MEDIA: 3, ZERO_FILE_LENGTH: 4, CANCELED: 999, INVALID_RES_STATUS: -1 }),
                y = Object.freeze({ 0: f.INTERNAL_ERROR, 1: f.INVALID_MEDIA, 2: f.FILE_TOO_LARGE, 3: f.UNSUPPORTED_MEDIA, 4: f.TIMEOUT }),
                E = Object.freeze({ RESET: 0, PENDING: 1, PAUSED: 2, SUCCEEDED: 3, FAILED: 4 }),
                I = {};
            function O(t) {
                try {
                    return JSON.parse(t.responseText);
                } catch (t) {
                    return null;
                }
            }
        },
        316118: (t, e, s) => {
            s.d(e, { Z: () => a });
            s(136728);
            var i = s(925885);
            function a(t) {
                const e = [],
                    s = (0, i.Z)(t);
                for (let t = 0; t < s.length; t++) e.push(s[t].hashtag);
                return e;
            }
        },
        872722: (t, e, s) => {
            var i = s(23103),
                a = s(609736),
                o = s(513064),
                r = s(639646),
                n = s(443231),
                d = s(910905),
                h = s(643329),
                l = Array,
                u = Math.max,
                p = Math.min;
            i(
                { target: "Array", proto: !0 },
                {
                    toSpliced: function (t, e) {
                        var s,
                            i,
                            a,
                            m,
                            c = d(this),
                            _ = r(c),
                            g = n(t, _),
                            S = arguments.length,
                            f = 0;
                        for (0 === S ? (s = i = 0) : 1 === S ? ((s = 0), (i = _ - g)) : ((s = S - 2), (i = p(u(h(e), 0), _ - g))), a = o(_ + s - i), m = l(a); f < g; f++) m[f] = c[f];
                        for (; f < g + s; f++) m[f] = arguments[f - g + 2];
                        for (; f < a; f++) m[f] = c[f + i - s];
                        return m;
                    },
                },
            ),
                a("toSpliced");
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481.cc29ea8a.js.map

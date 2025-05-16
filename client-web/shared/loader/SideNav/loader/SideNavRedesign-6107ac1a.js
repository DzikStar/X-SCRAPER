"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.SideNav~loader.SideNavRedesign-6107ac1a"],
    {
        326439: (e, t, i) => {
            i.d(t, { Z: () => d });
            var s,
                a,
                n,
                l,
                r,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SensitiveMediaSettingsQuery", selections: [{ alias: "viewer", args: (s = [{ kind: "Literal", name: "s", value: "cd25" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserSensitiveMediaSettingsInfo", kind: "LinkedField", name: "sensitive_media_settings", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "SensitiveMediaOptions_userSensitiveMediaSettingsInfo" }, (l = { alias: null, args: null, kind: "ScalarField", name: "can_user_allow_sensitive_content", storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"cd25")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "SensitiveMediaSettingsQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: s,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    a,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            n,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "UserSensitiveMediaSettingsInfo",
                                                                kind: "LinkedField",
                                                                name: "sensitive_media_settings",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "SensitiveMediaSettings",
                                                                        kind: "LinkedField",
                                                                        name: "sensitive_media_settings",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "view_adult_content", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "view_violent_content", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "view_other_content", storageKey: null },
                                                                            { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    l,
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            r,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"cd25")',
                            },
                        ],
                    },
                    params: { id: "ft92vAsha0RhDxwgq_ojWQ", metadata: {}, name: "SensitiveMediaSettingsQuery", operationKind: "query", text: null },
                };
            o.hash = "47444c8ec7640b723fc59a35b0544d70";
            const d = o;
        },
        929446: (e, t, i) => {
            i.d(t, { Z: () => a });
            var s = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "UserCell_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiUser",
                        kind: "LinkedField",
                        name: "legacy",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }, action: "THROW" },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }, action: "THROW" },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, action: "THROW" },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }, action: "THROW" },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "HighlightedUserLabelResponse",
                        kind: "LinkedField",
                        name: "identity_profile_labels_highlighted_label",
                        plural: !1,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "HighlightedUserLabel",
                                kind: "LinkedField",
                                name: "label",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "TimelineUrl" }], storageKey: null },
                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }], storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserVerification",
                        kind: "LinkedField",
                        name: "verification",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "f8deaec6b488105f8feb366025b0de97",
            };
            const a = s;
        },
        498510: (e, t, i) => {
            i.d(t, { Z: () => d });
            var s,
                a,
                n,
                l,
                r,
                o = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "fetchDownloadSettingAllowedQuery",
                        selections: [
                            { kind: "RequiredField", field: (s = { alias: null, args: null, concreteType: "UserPreferences", kind: "LinkedField", name: "user_preferences", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "allow_video_downloads", storageKey: null }], storageKey: null }), action: "THROW" },
                            {
                                alias: "viewer",
                                args: (a = [{ kind: "Literal", name: "s", value: "4721" }]),
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    (n = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            (l = {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "LegacyExtendedUserProfile",
                                                                kind: "LinkedField",
                                                                name: "legacy_extended_profile",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "LegacyExtendedBirthDate",
                                                                        kind: "LinkedField",
                                                                        name: "birthdate",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "month", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "day", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "year", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            }),
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "fetchDownloadSettingAllowedQuery", selections: [s, { alias: "viewer", args: a, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [n, { kind: "InlineFragment", selections: [l, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, r], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "P4Y9VY-Vn1cJuBnjOVZ4xA", metadata: {}, name: "fetchDownloadSettingAllowedQuery", operationKind: "query", text: null },
                };
            o.hash = "8a9c6728758bc2d477246d6d2dbf9e46";
            const d = o;
        },
        882127: (e, t, i) => {
            i.d(t, { Z: () => a });
            var s = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "fetchDownloadSettingAllowed_viewer",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserResults",
                        kind: "LinkedField",
                        name: "user_results",
                        plural: !1,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "result",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "LegacyExtendedUserProfile",
                                                kind: "LinkedField",
                                                name: "legacy_extended_profile",
                                                plural: !1,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "LegacyExtendedBirthDate",
                                                        kind: "LinkedField",
                                                        name: "birthdate",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "month", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "day", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "year", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        type: "User",
                                        abstractKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "Viewer",
                abstractKey: null,
                hash: "7c8218ed97677fa6b6cff281b5c2fef5",
            };
            const a = s;
        },
        417144: (e, t, i) => {
            function s(e, t = 1) {
                let i = t;
                const s = new Map();
                let a = 0,
                    n = 0,
                    l = 0,
                    r = null;
                function o() {
                    s.clear(), (a = 0), (n = 0), (l = 0);
                }
                return {
                    uploadStart: function (e, t) {
                        s.set(e, { time: Date.now(), bytes: t }), n || (n = Date.now());
                    },
                    uploadFinish: function (d, u) {
                        const c = s.get(d);
                        c &&
                            ((a += u - c.bytes),
                            s.delete(d),
                            ++l === i &&
                                (function () {
                                    if (!n) return;
                                    const s = Date.now() - n;
                                    if (s <= 0) return;
                                    if (1 !== t) return;
                                    const l = a / s;
                                    if (l < 5e3 && 1 === i) return;
                                    !r || r.byterate < l ? ((i += 1), e(), (r = { byterate: l, poolSize: i })) : ((i -= 2), (i = Math.max(i, 1)), (r = null));
                                    o();
                                })());
                    },
                    reset: o,
                    getPoolSize: () => i,
                    start: function () {
                        for (let t = 0; t < i; ++t) e();
                    },
                };
            }
            i.d(t, { Z: () => u, d: () => S });
            i(543673), i(240753), i(128399);
            function a(e) {
                const t = new URLSearchParams();
                for (const i of Object.keys(e)) {
                    const s = e[i];
                    s && t.set(i, s);
                }
                return `&${String(t)}`;
            }
            function n(e, t = r, i = l) {
                const s = Math.max(e, t);
                return Math.min(s, i);
            }
            const l = 5242880,
                r = 65536,
                o = 2e3,
                d = 1e4;
            class u {
                constructor(e, t = F) {
                    var i;
                    (this.timeoutIdMap = {}), (this.mediaId = ""), (this.mediaKey = ""), (this.fileHandle = e), (this.inflightSegments = new Map()), (this.totalBytes = e ? e.size : 0), (this.mediaType = e ? e.type : void 0), (this.initStartTime = new Date()), (this.sruHeaders = t.sruHeaders || {}), (this.uploadUrl = t.uploadUrl || h), (this.retainMediaForever = !!t.retainMediaForever), (this.sruParameterOverrides = t.sruParameterOverrides), (this.minSegmentBytes = this.sruParameterOverrides?.minSegmentBytes || ((i = this.totalBytes), n(Math.ceil(i / d)))), this._clearState();
                }
                upload(e) {
                    ((this.hasAttemptedFinalize && (this.uploadOptions.trimRanges !== e.trimRanges || this.uploadOptions.extraFinalizeParams !== e.extraFinalizeParams)) || this.uploadOptions.extraInitParams !== e.extraInitParams) && this._clearState(),
                        (this.uploadOptions = e),
                        this.state !== k.SUCCEEDED && this.state !== k.PENDING && ((this.state = k.PENDING), this.hasAttemptedFinalize ? this._postFinalize() : this.mediaId ? this._startNextAppendSegment() : this._postInit()),
                        (this._bitrateMonitor = e.withMultiRequests
                            ? s(() => {
                                  this._startNextAppendSegment();
                              }, e.withMultiRequestsDefaultPoolSize)
                            : void 0),
                        this._notifyResult(),
                        this._notifyProgress(this._uploadProgress());
                }
                cancel() {
                    "function" == typeof this.uploadOptions.error && this.uploadOptions.error({ code: S.CANCELED }), this._clearState();
                }
                pollStatusOfExistingMediaId(e, t) {
                    (this.mediaId = e), (this.uploadOptions = t || F), (this.state = k.PENDING), this._getStatus();
                }
                _clearState() {
                    for (const e of Object.keys(this.timeoutIdMap)) clearTimeout(this.timeoutIdMap[e]), delete this.timeoutIdMap[e];
                    (this.state = k.RESET),
                        (this.mediaId = ""),
                        (this.mediaKey = ""),
                        (this.uploadOptions = F),
                        (this.nextSegmentBytes =
                            this.sruParameterOverrides?.minSegmentBytes ||
                            (function () {
                                const e = window.navigator.connection;
                                if (e) {
                                    const t = e.type || e.effectiveType;
                                    if (e.downlink) return n(((1e3 * e.downlink) / 8 / 2) * o);
                                    if ("wifi" === t) return n(5 * r);
                                }
                                return n(2 * r);
                            })()),
                        (this.segmentIndex = 0),
                        (this.totalUploadDuration = 0),
                        (this.uploadedBytes = 0),
                        (this.hasAttemptedFinalize = !1),
                        this.inflightSegments.forEach(({ request: e }) => e.abort()),
                        (this.inflightSegments = new Map()),
                        this._bitrateMonitor?.reset();
                }
                uploadExternalMedia(e, t, i, s = F) {
                    (this.uploadOptions = s), (this.state = k.PENDING), (this.progressMode = "uploading");
                    let n = a({ source_url: e, media_type: t, media_category: i });
                    (n += this.uploadOptions.extraInitParams || ""), (n += this.uploadOptions.extraFinalizeParams || "");
                    this._sendXhr(
                        "POST",
                        "INIT",
                        n,
                        (e) => {
                            (this.mediaId = e.media_id_string), this._getStatus();
                        },
                        (...e) => this._uploadError(...e),
                        p,
                    );
                }
                _postInit() {
                    if (this.totalBytes) {
                        this.progressMode = "uploading";
                        const e = { total_bytes: String(this.totalBytes), media_type: this.mediaType || "" };
                        this.uploadOptions.enable_1080p_variant && (e.enable_1080p_variant = String(!0));
                        const { mediaItem: t } = this.uploadOptions;
                        if (t?.mediaFile?.duration) {
                            const i = 1e3 * t.mediaFile.duration;
                            e.video_duration_ms = String(i);
                        }
                        let i = a(e);
                        this.uploadOptions.extraInitParams && (i += this.uploadOptions.extraInitParams),
                            this._sendXhr(
                                "POST",
                                "INIT",
                                i,
                                (...e) => this._initSuccess(...e),
                                (...e) => this._uploadError(...e),
                                p,
                            );
                    } else this._uploadError({ code: S.ZERO_FILE_LENGTH });
                }
                _initSuccess(e) {
                    this.state === k.PENDING && ((this.mediaId = e.media_id_string), (this.mediaKey = e.media_key), this._setSessionTimeout(e.expires_after_secs), this._bitrateMonitor ? this._bitrateMonitor.start() : this._startNextAppendSegment());
                }
                _setSessionTimeout(e) {
                    if ((this.timeoutIdMap.session && (clearTimeout(this.timeoutIdMap.session), delete this.timeoutIdMap.session), e)) {
                        const t = Math.min(c, 1e3 * e);
                        this.timeoutIdMap.session = setTimeout(() => {
                            this._uploadError({ code: S.TIMEOUT }), this._stats("NONE", "timeout"), this._clearState();
                        }, t);
                    }
                }
                _startNextAppendSegment() {
                    if (this.hasAttemptedFinalize || this.inflightSegments.size >= (this._bitrateMonitor?.getPoolSize() ?? g)) return;
                    if (this.uploadedBytes === this.totalBytes) return this._postFinalize();
                    if (!this.fileHandle) return;
                    let e = 0;
                    this.inflightSegments.forEach(({ bytes: t }) => (e += t));
                    const t = e + this.uploadedBytes,
                        i = Math.min(this.nextSegmentBytes, this.totalBytes - t);
                    if (i <= 0) return;
                    const s = new FormData();
                    if (this.fileHandle) {
                        const e = this.fileHandle.slice(t, t + i);
                        s.append("media", e);
                    }
                    const n = this.segmentIndex;
                    this.segmentIndex += 1;
                    const l = a({ media_id: this.mediaId, segment_index: String(n) }),
                        r = this._sendXhr(
                            "POST",
                            "APPEND",
                            l,
                            () => {
                                if (this.state === k.PENDING) {
                                    const e = this.inflightSegments.get(n);
                                    e && (this.inflightSegments.delete(n), (this.uploadedBytes += e.bytes)), this._notifyProgress(this._uploadProgress(), this.mediaId), 0 === this.inflightSegments.size && this._startNextAppendSegment();
                                }
                            },
                            (...e) => this._uploadError(...e),
                            5,
                            s,
                            () => this._startNextAppendSegment(),
                            i,
                        );
                    this.inflightSegments.set(n, { bytes: i, request: r });
                }
                _postFinalize() {
                    if (this.uploadOptions.pauseBeforeFinalize) (this.state = k.PAUSED), this.uploadOptions.pause && this.uploadOptions.pause();
                    else {
                        this.hasAttemptedFinalize = !0;
                        const e = { media_id: this.mediaId };
                        this.uploadOptions.trimRanges && (e.trim_ranges = this.uploadOptions.trimRanges), this.mediaType && /^video\//.test(this.mediaType) && (e.allow_async = String(!0)), this.retainMediaForever && (e.ttl = "infinite");
                        let t = a(e);
                        (t += this.uploadOptions.extraFinalizeParams || ""),
                            this._sendXhr(
                                "POST",
                                "FINALIZE",
                                t,
                                (...e) => this._finalizeOrStatusSuccess(...e),
                                (...e) => this._uploadError(...e),
                                p,
                            );
                    }
                }
                _finalizeOrStatusSuccess(e) {
                    this._setSessionTimeout(e.expires_after_secs);
                    const t = e.processing_info;
                    if (!t) return void this._finalizeSuccess(e);
                    let i = 0;
                    switch (t.state) {
                        case "pending":
                            this.progressMode = "waiting";
                            break;
                        case "in_progress":
                            (this.progressMode = "processing"), "number" == typeof t.progress_percent && (i = t.progress_percent), i >= 100 && (i = 99);
                            break;
                        case "succeeded":
                            return void this._finalizeSuccess(e);
                        case "failed": {
                            const e = t.error;
                            let i;
                            return (i = e?.code ? f[String(e.code)] : S.INTERNAL_ERROR), void this._uploadError({ ...e, code: i });
                        }
                        default:
                            return void this._uploadError();
                    }
                    this._notifyProgress(i, this.mediaId, this.mediaKey);
                    const s = t.check_after_secs || 10;
                    setTimeout((...e) => this._getStatus(...e), 1e3 * s);
                }
                _getStatus() {
                    if (this.state === k.PENDING) {
                        const e = a({ media_id: this.mediaId });
                        this._sendXhr(
                            "GET",
                            "STATUS",
                            e,
                            (...e) => this._finalizeOrStatusSuccess(...e),
                            (...e) => this._uploadError(...e),
                            p,
                        );
                    }
                }
                _finalizeSuccess(e) {
                    this.state === k.PENDING && ((this.state = k.SUCCEEDED), this._notifyResult());
                }
                _uploadError(e) {
                    if (this.state !== k.PENDING) return;
                    const t = e.error?.match(/{ "message": "maxFileSizeExceeded", "maxFileSizeBytes": \d+ }/);
                    if (t) {
                        const e = JSON.parse(t[0]);
                        this.error = { code: S.FILE_TOO_LARGE, message: e.message, maxSizeBytes: e.maxFileSizeBytes };
                    } else e && e.code ? (this.error = e) : (this.error = { code: S.INTERNAL_ERROR, message: e?.error });
                    (this.state = k.FAILED), this._notifyResult();
                }
                _uploadProgress() {
                    if (this.totalBytes) {
                        return 100 * (this.uploadedBytes / this.totalBytes);
                    }
                    return 0;
                }
                _notifyProgress(e, t, i) {
                    this.state !== k.FAILED && this.uploadOptions.progress && this.uploadOptions.progress(e, this.progressMode, t, i);
                }
                _notifyResult() {
                    this.state === k.SUCCEEDED && this.uploadOptions.success && this.uploadOptions.success(this.mediaId, this.mediaKey), this.state === k.FAILED && this.uploadOptions.error && this.uploadOptions.error(this.error);
                }
                _stats(e, t, i = {}) {
                    const s = i.requestStartTime || this.initStartTime,
                        a = new Date().getTime() - s.getTime();
                    if (((this.totalUploadDuration += a), this.uploadOptions.stats)) {
                        const s = { mediaType: this.mediaType || "", command: e, status: t, duration: a, totalByteSize: this.totalBytes, totalDuration: this.totalUploadDuration };
                        i.segmentBytes && (s.appendByteSize = i.segmentBytes), this.uploadOptions.stats(s);
                    }
                }
                _sendXhr(e, t, i, s, a, l, r, d, u = 0) {
                    const c = `${this.uploadUrl}?command=${t}${i}`;
                    let p = !1;
                    const h = new Date(),
                        g = (n) => {
                            if (l) {
                                const n = [c, l].join("-");
                                this.timeoutIdMap[n] = setTimeout(() => {
                                    this._sendXhr(e, t, i, s, a, l - 1, r, d, u);
                                }, _);
                            } else f(n);
                        },
                        f = (e) => {
                            this._stats(t, e || "unknown-error", { requestStartTime: h, segmentBytes: u }), "function" == typeof a && a(T(k) || { code: S.INVALID_RES_STATUS, mediaId: this.mediaId });
                        },
                        k = new XMLHttpRequest();
                    k.open(e, c, !0),
                        (k.withCredentials = !0),
                        (k.timeout = this.sruParameterOverrides?.clientsideSruUploadTimeoutMs || m),
                        (k.onload = () => {
                            if (k.status >= 200 && k.status < 400) {
                                const e = T(k);
                                204 === k.status || e ? (this._stats(t, "success", { requestStartTime: h, segmentBytes: u }), s(e || {}), !p && d && d()) : g("parsererror");
                            } else k.status && 503 !== k.status ? f("invalid-response") : g("503");
                        }),
                        (k.onerror = () => g("error")),
                        (k.ontimeout = () => {
                            (this.nextSegmentBytes = this.minSegmentBytes), g("timeout");
                        });
                    let F = !1;
                    k.upload.onprogress = (e) => {
                        F ? e.loaded === e.total && this._bitrateMonitor?.uploadFinish(c, e.total) : ((F = !0), this._bitrateMonitor?.uploadStart(c, e.loaded));
                        const t = e.loaded,
                            i = ((this.uploadedBytes + t) / this.totalBytes) * 100;
                        if ((this._notifyProgress(i, this.mediaId), t / e.total > y && !p && ((p = !0), r))) {
                            const e = Math.max(1, new Date().getTime() - h.getTime()),
                                i = this.minSegmentBytes,
                                s = this.sruParameterOverrides?.maxSegmentBytes;
                            (this.nextSegmentBytes = (function (e) {
                                const t = e.idealUploadTimeMs || o,
                                    i = e.sentBytes / e.uploadTimeMs;
                                return n(Math.round(t * i), e.minSegmentBytes, e.maxSegmentBytes);
                            })({ minSegmentBytes: i, sentBytes: t, uploadTimeMs: e, maxSegmentBytes: s, idealUploadTimeMs: this.sruParameterOverrides?.idealUploadTimeMs })),
                                "function" == typeof d && d();
                        }
                    };
                    for (const e in this.sruHeaders) k.setRequestHeader(e, this.sruHeaders[e]);
                    return r ? k.send(r) : k.send(), k;
                }
            }
            const c = 2147483647,
                p = 1,
                m = 45e3,
                h = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload.json",
                g = 2,
                y = 0.95,
                _ = 1e3,
                S = Object.freeze({ FILE_TOO_LARGE: 2, INTERNAL_ERROR: 131, INVALID_MEDIA: 1, RATE_LIMIT: 88, TIMEOUT: 67, UNSUPPORTED_MEDIA: 3, ZERO_FILE_LENGTH: 4, CANCELED: 999, INVALID_RES_STATUS: -1 }),
                f = Object.freeze({ 0: S.INTERNAL_ERROR, 1: S.INVALID_MEDIA, 2: S.FILE_TOO_LARGE, 3: S.UNSUPPORTED_MEDIA, 4: S.TIMEOUT }),
                k = Object.freeze({ RESET: 0, PENDING: 1, PAUSED: 2, SUCCEEDED: 3, FAILED: 4 }),
                F = {};
            function T(e) {
                try {
                    return JSON.parse(e.responseText);
                } catch (e) {
                    return null;
                }
            }
        },
        730895: (e, t, i) => {
            var s = i(821176);
            e.exports = function () {
                var e = s(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.SideNav~loader.SideNavRedesign-6107ac1a.fa3da76a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.directMessagesData-9f4db315"],
    {
        904940: (e, t, i) => {
            i.d(t, { Z: () => a });
            const a = ({ apiClient: e, featureSwitches: t }) => ({ metadataCreate: (t, i) => e.post("media/metadata/create", t, {}, { ...i, "content-type": "application/json" }), attachSubtitles: (t, i) => e.post("media/subtitles/create", { media_id: t.videoMediaUploadId, media_category: t.videoMediaCategory, subtitle_info: { subtitles: [{ media_id: t.subtitlesMediaUploadId, language_code: t.subtitlesLang, display_name: t.subtitlesDisplayName }] } }, {}, { ...i, "content-type": "application/json" }) });
        },
        708482: (e, t, i) => {
            i.d(t, { s: () => o });
            var a = i(10622),
                s = i.n(a);
            function o(e, t, i, a) {
                return s()(e, t, i, a ? { networkCacheConfig: { metadata: { isFatalError: a } } } : void 0).toPromise();
            }
        },
        944681: (e, t, i) => {
            i.d(t, { k: () => s, Q: () => o });
            const a = (e, t, i) => {
                    const a = new Date();
                    let s = a.getFullYear() - e;
                    const o = a.getMonth() + 1 - t;
                    if (o < 0) s -= 1;
                    else if (0 === o) {
                        a.getDate() - i < 0 && (s -= 1);
                    }
                    return s;
                },
                s = (e, t, i, s = !1) => (e && t && i ? a(e, t, i) < 18 : s),
                o = () => new Date().getFullYear() - 120;
        },
        234296: (e, t, i) => {
            i.d(t, { Z: () => r, l: () => o });
            var a = i(147143),
                s = i(856674);
            const o = (e, t) => {
                    const i = e.data?.labels?.find((e) => e.label_type === a.w1.PINNED)?.timestamp,
                        s = t.data?.labels?.find((e) => e.label_type === a.w1.PINNED)?.timestamp;
                    return i ? (s ? i - s : -1) : 1;
                },
                r = ({ sort_event_id: e }, { sort_event_id: t }) => (e ? (t ? (0, s.ZP)(t, e) : 1) : -1);
        },
        166677: (e, t, i) => {
            i.d(t, { $r: () => Y, O9: () => K, ZP: () => q, vK: () => Q });
            var a = i(688715),
                s = i(332920),
                o = i.n(s),
                r = i(653843),
                n = i(122123),
                d = i(417144),
                l = i(884495),
                _ = i(716233),
                u = i(540387);
            const c = o().b8098028,
                m = o().b36f4170,
                h = o().hab3781e,
                p = o().f6c4fb02,
                f = o().g0af3dd2,
                b = o().b8c8b0be,
                g = o().ica6d718,
                v = o().b28d44f7({ limit: 15 }),
                L = o().i1db7d13,
                O = o().baac0ed7,
                I = L({ limit: 512 }),
                D = o().a22385bb,
                S = o().be0440bf,
                T = D({ limit: 140 }),
                w = o().feeba512,
                y = o().db123c02,
                E = o().db6001e7({ limit: 5 }),
                A = o().eb96d952,
                M = o().i859a9d4,
                U = o().b3880588,
                N = o().ca058b68,
                x = o().id24379c,
                F = o().h4d7cbcc,
                P = (0, a.ju)("https://support.x.com/articles/20156423"),
                z = (0, a.ju)("https://help.x.com/using-twitter/twitter-videos"),
                R = (e) => ({ text: e }),
                V = (e) => ({ text: e, action: { label: M, link: P } }),
                G = (e) => ({ text: e, action: { label: M, link: z } }),
                k = { [r.Y7.GIF_IS_TOO_LARGE]: R(v), [r.Y7.CANNOT_BE_PROCESSED]: R(c), [r.Y7.FILE_IS_NOT_AN_IMAGE]: R(h) },
                j = { [d.d.ZERO_FILE_LENGTH]: R(m), [d.d.TIMEOUT]: R(U) },
                $ = { ...j, [d.d.FILE_TOO_LARGE]: R(E), [d.d.UNSUPPORTED_MEDIA]: V(y), [d.d.INVALID_MEDIA]: V(w) },
                C = { ...j, [d.d.FILE_TOO_LARGE]: R(v), [d.d.UNSUPPORTED_MEDIA]: V(f), [d.d.INVALID_MEDIA]: V(p) },
                Z = { ...j, [d.d.FILE_TOO_LARGE]: R(I), [d.d.UNSUPPORTED_MEDIA]: G(g), [d.d.INVALID_MEDIA]: G(b) },
                B = Object.freeze({ RESIZE: "resize", UPLOAD: "upload", METADATA: "metadata", MAXDURATION: "maxduration", MAXSIZE: "maxsize" }),
                H = 1048576,
                X = 1073741824,
                K = (e) => Object.values(B).includes(e.type),
                W = (e) => {
                    const { code: t, limit: i, type: a } = e;
                    if (t)
                        switch (a) {
                            case B.MAXSIZE:
                                return t === _.BW.GIF_IS_TOO_LARGE ? R(v) : t === _.BW.VIDEO_IS_TOO_LARGE && void 0 !== i ? R(i >= X ? O({ limit: Math.round(i / X) }) : L({ limit: Math.round(i / H) })) : R(I);
                            case B.MAXDURATION:
                                return void 0 !== i ? (i > 140 ? R(S({ limit: Math.round(i / 60) })) : { text: D({ limit: Math.round(i) }), action: { label: l.Z.LongerVideoUpload.defaultContent.actionLabel, link: { pathname: `/i/premium_sign_up?referring_page=${l.Z.LongerVideoUpload.referringPage}`, external: !0 } } }) : R(T);
                            case B.RESIZE:
                                return k[t];
                            case B.UPLOAD:
                                if (e.isImage) return $[t];
                                if (e.isGif) return C[t];
                                if (e.isVideo) return Z[t];
                                break;
                            case B.METADATA:
                                return R(F);
                        }
                },
                Y = (e) => {
                    if (K(e)) return e;
                };
            function q(e, t = x) {
                const i = Y(e);
                if (i) {
                    const a = e.message ? `${t} ${e.message}` : t;
                    return W(i) || R(a);
                }
            }
            function Q(e, t = N) {
                return e.type === n.gK.type && e.code === n.gK.NO_DIMENSIONS ? R(A) : e.type === u.hb.type && e.code === u.hb.NO_DIMENSIONS ? G(b) : R(t);
            }
        },
        221562: (e, t, i) => {
            i.d(t, { BX: () => f, Uk: () => u, Xj: () => c, ZP: () => D });
            var a = i(468811),
                s = i.n(a),
                o = i(595088),
                r = i(161821),
                n = i(184605),
                d = i(716233),
                l = i(774717);
            const _ = Object.freeze({ LocalFile: "local_file", Remote: "remote" }),
                u = Object.freeze({ Cancel: "cancel", Failure: "failure", Success: "success", Complete: "complete", Invalid: "invalid" }),
                c = Object.freeze({ InProgress: "in_progress", Complete: "complete", Failure: "failure", Canceled: "canceled" }),
                m = (e) => (e ? h(e) : void 0),
                h = (e) =>
                    (0, o.Z)(e)
                        .filter(([e, t]) => void 0 !== t)
                        .map(([t, i]) => ("object" == typeof i ? `${t}=${p(e[t])}` : `${t}=${String(i)}`))
                        .join(";"),
                p = (e) =>
                    (0, r.Z)(e)
                        .filter((e) => void 0 !== e)
                        .map(String)
                        .join(":"),
                f = Object.freeze({ Full: "full", Hash: "hash", Processing: "processing", SruUpload: "sru_upload", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish", Metadata: "metadata" }),
                b = Object.freeze({ SruUpload: "sru_upload_no_eager", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish_no_eager" }),
                g = { [f.SruUpload]: b.SruUpload, [f.UploadSubmitUntilSruFinish]: b.UploadSubmitUntilSruFinish },
                v = Object.freeze({ All: "all", Short: "short", Medium: "medium", Long: "long", XLong: "xlong", L90to140s: "l90to140s", L140to300s: "l140to300s", L300to600s: "l300to600s", L600to1200s: "l600to1200s", L1200to1800s: "l1200to1800s", L1800to2700s: "l1800to2700s", L2700to3600s: "l2700to3600s", L3600to4500s: "l3600to4500s", L4500to5400s: "l4500to5400s", L5400to6300s: "l5400to6300s", L6300to7200s: "l6300to7200s", L7200to10800s: "l7200to10800s", L10800to14400s: "l10800to14400s", LGT14400s: "lgt14400s" }),
                L = (e, t) => ((0, n.Z)(e) && (0, n.Z)(t) ? Math.round(t - e) : void 0),
                O = () => (window.performance ? window.performance.now() : Date.now()),
                I = (e, t) => (e === d.xz.DMGif || e === d.xz.TweetGif ? v.All : (e !== d.xz.DMVideo && e !== d.xz.TweetVideo && e !== d.xz.AmplifyVideo) || void 0 === t ? "" : t < 10 ? v.Short : t < 20 ? v.Medium : t < 45 ? v.Long : t < 90 ? v.XLong : t < 140 ? v.L90to140s : t < 300 ? v.L140to300s : t < 600 ? v.L300to600s : t < 1200 ? v.L600to1200s : t < 1800 ? v.L1200to1800s : t < 2700 ? v.L1800to2700s : t < 3600 ? v.L2700to3600s : t < 4500 ? v.L3600to4500s : t < 5400 ? v.L4500to5400s : t < 6300 ? v.L5400to6300s : t < 7200 ? v.L6300to7200s : t < 10800 ? v.L7200to10800s : t < 14400 ? v.L10800to14400s : v.LGT14400s);
            class D {
                constructor(e, t = !1) {
                    (this._pausedDuration = {}),
                        (this._pauseTimes = {}),
                        (this._startTimes = {}),
                        (this._eagerUploadDisabled = t),
                        (this._impressionId = s().v4()),
                        (this._keyPrefix = ((e) => {
                            const { isExternal: t, mediaCategory: i, videoDuration: a } = e;
                            return `${t ? _.Remote : _.LocalFile}:${i}:${I(i, a)}`;
                        })(e)),
                        this.setMetadata({ submitted: !1 });
                }
                reportOperationComplete(e, t) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        void 0 !== this._pauseTimes[e] && this.toggleOperationPaused(e, !1);
                        let i = L(this._startTimes[e], O());
                        if (this._keyPrefix && void 0 !== i) {
                            void 0 !== this._pausedDuration[e] && (i -= this._pausedDuration[e]);
                            const a = this._getKey(e, t);
                            this._record(a, i, e === f.Full ? this._metadata : e === f.Metadata ? this._fileMetadata : void 0), (this._startTimes[e] = void 0);
                        }
                    });
                }
                reportOperationStart(e, t = !1) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        if (void 0 === this._startTimes[e] && ((this._startTimes[e] = O()), this._keyPrefix && t)) {
                            const t = this._getKey(e, "start");
                            this._record(t, 0);
                        }
                    });
                }
                reportUploadSubmit() {
                    if (this._metadata?.submitted) return;
                    this.setMetadata({ submitted: !0 });
                    let e = L(this._startTimes[f.Full], O());
                    if (this._keyPrefix && void 0 !== e) {
                        void 0 !== this._pausedDuration[f.Full] && (e -= this._pausedDuration[f.Full]);
                        const t = this._getKey(f.Full, "submit");
                        this._record(t, e, this._metadata);
                    }
                }
                setMetadata(e) {
                    this._metadata = { ...this._metadata, ...e };
                }
                setFileMetadata(e) {
                    this._fileMetadata = { ...this._fileMetadata, ...e };
                }
                toggleOperationPaused(e, t) {
                    if (t && void 0 === this._pauseTimes[e]) this._pauseTimes[e] = O();
                    else if (!t) {
                        const t = L(this._pauseTimes[e], O());
                        void 0 !== t && ((this._pausedDuration[e] = this._pausedDuration[e] ? this._pausedDuration[e] + t : t), (this._pauseTimes[e] = void 0));
                    }
                }
                _getKey(e, t) {
                    const i = (this._eagerUploadDisabled && g[e]) || e;
                    return `${this._keyPrefix}:${i}:${t}`;
                }
                _record(e, t, i) {
                    const a = { duration_ms: t, impression_id: this._impressionId, metadata: m(i) };
                    l.IM(e, a, "media_upload");
                }
                _getStartTimes() {
                    return this._startTimes;
                }
                _resetStartTimes(e) {
                    this._startTimes = { ...e };
                }
            }
        },
        716233: (e, t, i) => {
            i.d(t, { BW: () => f, SB: () => I, TO: () => S, Tz: () => g, U$: () => O, ff: () => b, vC: () => L, vn: () => D, xz: () => v, y$: () => h });
            var a = i(182056),
                s = i(323265),
                o = i(540387);
            const r = 1024,
                n = 1024 * r,
                d = 1,
                l = 4096,
                _ = 2048,
                u = 400,
                c = 1500,
                m = { Image: 5, Gif: 15, Avatar_Gif: 5 },
                h = { Duration: { 0: 140, 1: 600, 2: 7200 }, Size: { 0: 512, 1: 1024, 2: 40960 } },
                p = 600,
                f = { GIF_IS_TOO_LARGE: 1, VIDEO_IS_TOO_LARGE: 2 },
                b = { VIDEO_IS_TOO_LONG: 1 },
                g = { MEDIA_NOT_FOUND: 0, INVALID_MEDIA_CODE: 1 },
                v = Object.freeze({ AmplifyVideo: "amplify_video", CommunityBanner: "community_banner_image", ListBanner: "list_banner_image", TweetImage: "tweet_image", TweetVideo: "tweet_video", TweetGif: "tweet_gif", DMImage: "dm_image", DMVideo: "dm_video", DMGif: "dm_gif", Subtitles: "subtitles", ProfileBanner: "banner_image" }),
                L = Object.freeze({ Tweet: "tweet", Dm: "dm", CommunityBanner: "community_banner", ListBanner: "list_banner", ProfileBanner: "profile_banner", Avatar: "avatar", Verification: "verification", TwitterArticle: "twitter_article" }),
                O = (e) => {
                    const { height: t, left: i, width: a } = e,
                        s = Math.round(t / 2);
                    return `&salient_rect=${Math.round(i + a / 2)},${s},1,1`;
                };
            function I(e) {
                const t = e.featureSwitches?.isTrue("blue_longer_video_enabled"),
                    i = (function (e) {
                        return e.userClaims.isTrueAndEnabled("subscriptions_long_video_upload") || e.featureSwitches.isTrue("subscriptions_long_video_upload_override") || !1;
                    })(e);
                return t || i ? 1 : 0;
            }
            function D(e, t, i, f, b) {
                const g = f?.location,
                    v = I({ featureSwitches: e, userClaims: t });
                let O, D;
                if (i.isSubtitles) O = 0;
                else if (i.isGif)
                    switch (g) {
                        case L.Avatar:
                            O = e.getNumberValue("media_async_upload_max_avatar_gif_size", m.Avatar_Gif) * n;
                            break;
                        case L.Dm:
                        case L.Tweet:
                        default:
                            O = e.getNumberValue("media_async_upload_max_gif_size", m.Gif) * n;
                    }
                else {
                    if (!(i instanceof o.ZP))
                        return (function (e, t, i) {
                            let o;
                            switch (t) {
                                case L.Avatar:
                                    o = u;
                                    break;
                                case L.CommunityBanner:
                                case L.ListBanner:
                                case L.ProfileBanner:
                                    o = c;
                                    break;
                                default:
                                    o = s.ZP.isDesktopOS() ? l : _;
                            }
                            const d = e.getNumberValue("media_async_upload_max_image_size", m.Image) * n;
                            return a.Z.getConnectionInfo().then(
                                (a) => {
                                    let n = d;
                                    return "slow-2g" === a.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_slow_2g", 150) * r) : i || "2g" === a.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_2g", 250) * r) : "3g" === a.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_3g", 1500) * r) : "4g" !== a.effectiveType || s.ZP.isDesktopOS() || t !== L.Tweet || (o = l), { maxDimension: o, maxFileSize: Math.min(d, n) };
                                },
                                () => ({ maxDimension: o, maxFileSize: d }),
                            );
                        })(e, g, b);
                    if (1 === v) {
                        if ("dm" === g) D = e.getNumberValue("media_async_upload_longer_dm_video_max_video_duration", p);
                        else D = e.getNumberValue("media_async_upload_longer_video_max_video_duration", h.Duration[v]) * d;
                        O = e.getNumberValue("media_async_upload_longer_video_max_video_size", h.Size[v]) * n;
                    } else (D = e.getNumberValue("media_async_upload_max_video_duration", h.Duration[v]) * d), (O = e.getNumberValue("media_async_upload_max_video_size", h.Size[v]) * n);
                }
                return Promise.resolve({ maxFileSize: O, maxDuration: D });
            }
            function S(e) {
                return !(s.ZP.isIOS() && e.size > 3e8);
            }
        },
        946208: (e, t, i) => {
            i.d(t, { Id: () => a, ZP: () => r, h_: () => s });
            i(543673), i(240753), i(128399);
            const a = [".srt", "text/plain", ""],
                s = (e) => -1 !== a.indexOf(e.type),
                o = (e) =>
                    `WEBVTT FILE\r\n\r\n${e
                        .replace(/\{\\([ibu])\}/g, "</$1>")
                        .replace(/\{\\([ibu])1\}/g, "<$1>")
                        .replace(/\{([ibu])\}/g, "<$1>")
                        .replace(/\{\/([ibu])\}/g, "</$1>")
                        .replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2")
                        .replace(/\r\n\{\\an8\}/g, " line:5%\r\n")}`;
            class r {
                constructor(e) {
                    (this.fileHandle = new Blob([e], { type: "text/plain charset=UTF-8" })),
                        e instanceof File && (this.name = e.name),
                        (this.size = e.size),
                        (this.type = this.fileHandle.type),
                        (this.url = window.URL.createObjectURL(this.fileHandle)),
                        this.fileHandle.text &&
                            this.fileHandle.text().then((e) => {
                                this.vtt = URL.createObjectURL(new Blob([o(e)], { type: "text/plain charset=UTF-8" }));
                            }),
                        (this.isVideo = !1),
                        (this.isImage = !1),
                        (this.isGif = !1),
                        (this.isSubtitles = !0);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url) && window.URL.revokeObjectURL(this.vtt);
                }
            }
        },
        540387: (e, t, i) => {
            i.d(t, { Wv: () => s, ZP: () => r, hb: () => o, jn: () => a });
            i(571372), i(543673), i(240753), i(128399);
            const a = ["video/mp4", "video/quicktime"],
                s = (e) => -1 !== a.indexOf(e.type),
                o = { type: "video-load", NO_DIMENSIONS: 10, LOAD_FAILED: 11, TOO_LARGE: 12 };
            class r {
                constructor(e, t) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type);
                    try {
                        this.url = window.URL.createObjectURL(this.fileHandle);
                    } catch (e) {
                        this.url = "";
                    }
                    (this.isVideo = !0), (this.isImage = !1), (this.isGif = !1), (this.isSubtitles = !1), (this.isAmplify = !!t);
                }
                withDimensionsAndOrientation(e) {
                    return ((e, t) =>
                        new Promise((i, a) => {
                            const s = (e, t) => {
                                    const i = new Error(e);
                                    (i.code = t), (i.type = o.type), a(i);
                                },
                                r = document.createElement("video");
                            (r.onloadedmetadata = () => {
                                t || (r.videoWidth && r.videoHeight) ? i(r) : s("Video lacks height or width", o.NO_DIMENSIONS);
                            }),
                                (r.onerror = () => {
                                    s("Error loading image", o.LOAD_FAILED);
                                }),
                                (r.src = e);
                        }))(this.url, e).then((e) => {
                        const { duration: t, videoHeight: i, videoWidth: a } = e;
                        return (this.width = a), (this.height = i), (this.duration = t), (this.video = e), (this.isBrowserSupported = !(0 === i || 0 === a)), this;
                    });
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.directMessagesData-9f4db315.f8305cea.js.map

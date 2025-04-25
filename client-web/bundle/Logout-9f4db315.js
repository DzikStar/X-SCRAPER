"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Logout-9f4db315", "loader.directMessagesData-63cb1cc4"],
    {
        904940: (e, t, i) => {
            i.d(t, { Z: () => a });
            const a = ({ apiClient: e, featureSwitches: t }) => ({ metadataCreate: (t, i) => e.post("media/metadata/create", t, {}, { ...i, "content-type": "application/json" }), attachSubtitles: (t, i) => e.post("media/subtitles/create", { media_id: t.videoMediaUploadId, media_category: t.videoMediaCategory, subtitle_info: { subtitles: [{ media_id: t.subtitlesMediaUploadId, language_code: t.subtitlesLang, display_name: t.subtitlesDisplayName }] } }, {}, { ...i, "content-type": "application/json" }) });
        },
        708482: (e, t, i) => {
            i.d(t, { s: () => o });
            var a = i(10622),
                r = i.n(a);
            function o(e, t, i, a) {
                return r()(e, t, i, a ? { networkCacheConfig: { metadata: { isFatalError: a } } } : void 0).toPromise();
            }
        },
        290402: (e, t, i) => {
            i.d(t, { Z: () => _ });
            var a = i(807896),
                r = i(202784),
                o = i(182056),
                s = i(879113),
                n = i(392237),
                l = i(674132),
                d = i.n(l),
                u = i(968478);
            const c = d().aa6e3300,
                p = ({ retryMessage: e, ...t }, i) => {
                    const n = o.Z.isOnline();
                    return r.createElement(s.Z, (0, a.Z)({}, t, { icon: n ? void 0 : r.createElement(u.default, { style: m.icon }), retryMessage: n ? e : c }));
                },
                m = n.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                _ = r.forwardRef(p);
        },
        652904: (e, t, i) => {
            i.d(t, { Z: () => u });
            var a = i(202784),
                r = i(500002),
                o = i(668214),
                s = i(997174),
                n = i(118823);
            const l = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: n.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class d extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: i, search: a },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: o, search: s },
                            locationKey: n,
                        } = e;
                    let l = !1;
                    t.pathname !== i ? (this._isInBackground = !0) : this._isInBackground && t.pathname === i && ((this._isInBackground = !1), (l = !0));
                    const d = r || n;
                    ((d && r !== n) || (!d && i !== o) || a !== s || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: i, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), i(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const u = (0, r.ZP)(l(d));
        },
        944681: (e, t, i) => {
            i.d(t, { k: () => r, Q: () => o });
            const a = (e, t, i) => {
                    const a = new Date();
                    let r = a.getFullYear() - e;
                    const o = a.getMonth() + 1 - t;
                    if (o < 0) r -= 1;
                    else if (0 === o) {
                        a.getDate() - i < 0 && (r -= 1);
                    }
                    return r;
                },
                r = (e, t, i, r = !1) => (e && t && i ? a(e, t, i) < 18 : r),
                o = () => new Date().getFullYear() - 120;
        },
        166677: (e, t, i) => {
            i.d(t, { $r: () => Y, O9: () => K, ZP: () => q, vK: () => J });
            var a = i(688715),
                r = i(674132),
                o = i.n(r),
                s = i(653843),
                n = i(122123),
                l = i(417144),
                d = i(417854),
                u = i(716233),
                c = i(540387);
            const p = o().b8098028,
                m = o().b36f4170,
                _ = o().hab3781e,
                h = o().f6c4fb02,
                f = o().g0af3dd2,
                g = o().b8c8b0be,
                b = o().ica6d718,
                w = o().b28d44f7({ limit: 15 }),
                y = o().i1db7d13,
                S = o().baac0ed7,
                v = y({ limit: 512 }),
                A = o().a22385bb,
                I = o().be0440bf,
                E = A({ limit: 140 }),
                O = o().feeba512,
                D = o().db123c02,
                L = o().db6001e7({ limit: 5 }),
                T = o().eb96d952,
                M = o().i859a9d4,
                P = o().b3880588,
                U = o().ca058b68,
                x = o().id24379c,
                F = o().h4d7cbcc,
                C = (0, a.ju)("https://support.x.com/articles/20156423"),
                N = (0, a.ju)("https://help.x.com/using-twitter/twitter-videos"),
                z = (e) => ({ text: e }),
                Z = (e) => ({ text: e, action: { label: M, link: C } }),
                B = (e) => ({ text: e, action: { label: M, link: N } }),
                V = { [s.Y7.GIF_IS_TOO_LARGE]: z(w), [s.Y7.CANNOT_BE_PROCESSED]: z(p), [s.Y7.FILE_IS_NOT_AN_IMAGE]: z(_) },
                R = { [l.d.ZERO_FILE_LENGTH]: z(m), [l.d.TIMEOUT]: z(P) },
                G = { ...R, [l.d.FILE_TOO_LARGE]: z(L), [l.d.UNSUPPORTED_MEDIA]: Z(D), [l.d.INVALID_MEDIA]: Z(O) },
                k = { ...R, [l.d.FILE_TOO_LARGE]: z(w), [l.d.UNSUPPORTED_MEDIA]: Z(f), [l.d.INVALID_MEDIA]: Z(h) },
                H = { ...R, [l.d.FILE_TOO_LARGE]: z(v), [l.d.UNSUPPORTED_MEDIA]: B(b), [l.d.INVALID_MEDIA]: B(g) },
                j = Object.freeze({ RESIZE: "resize", UPLOAD: "upload", METADATA: "metadata", MAXDURATION: "maxduration", MAXSIZE: "maxsize" }),
                X = 1048576,
                $ = 1073741824,
                K = (e) => Object.values(j).includes(e.type),
                W = (e) => {
                    const { code: t, limit: i, type: a } = e;
                    if (t)
                        switch (a) {
                            case j.MAXSIZE:
                                return t === u.BW.GIF_IS_TOO_LARGE ? z(w) : t === u.BW.VIDEO_IS_TOO_LARGE && void 0 !== i ? z(i >= $ ? S({ limit: Math.round(i / $) }) : y({ limit: Math.round(i / X) })) : z(v);
                            case j.MAXDURATION:
                                return void 0 !== i ? (i > 140 ? z(I({ limit: Math.round(i / 60) })) : { text: A({ limit: Math.round(i) }), action: { label: d.Z.LongerVideoUpload.defaultContent.actionLabel, link: { pathname: `/i/premium_sign_up?referring_page=${d.Z.LongerVideoUpload.referringPage}`, external: !0 } } }) : z(E);
                            case j.RESIZE:
                                return V[t];
                            case j.UPLOAD:
                                if (e.isImage) return G[t];
                                if (e.isGif) return k[t];
                                if (e.isVideo) return H[t];
                                break;
                            case j.METADATA:
                                return z(F);
                        }
                },
                Y = (e) => {
                    if (K(e)) return e;
                };
            function q(e, t = x) {
                const i = Y(e);
                if (i) {
                    const a = e.message ? `${t} ${e.message}` : t;
                    return W(i) || z(a);
                }
            }
            function J(e, t = U) {
                return e.type === n.gK.type && e.code === n.gK.NO_DIMENSIONS ? z(T) : e.type === c.hb.type && e.code === c.hb.NO_DIMENSIONS ? B(g) : z(t);
            }
        },
        221562: (e, t, i) => {
            i.d(t, { BX: () => f, Uk: () => c, Xj: () => p, ZP: () => A });
            var a = i(468811),
                r = i.n(a),
                o = i(595088),
                s = i(161821),
                n = i(184605),
                l = i(716233),
                d = i(774717);
            const u = Object.freeze({ LocalFile: "local_file", Remote: "remote" }),
                c = Object.freeze({ Cancel: "cancel", Failure: "failure", Success: "success", Complete: "complete", Invalid: "invalid" }),
                p = Object.freeze({ InProgress: "in_progress", Complete: "complete", Failure: "failure", Canceled: "canceled" }),
                m = (e) => (e ? _(e) : void 0),
                _ = (e) =>
                    (0, o.Z)(e)
                        .filter(([e, t]) => void 0 !== t)
                        .map(([t, i]) => ("object" == typeof i ? `${t}=${h(e[t])}` : `${t}=${String(i)}`))
                        .join(";"),
                h = (e) =>
                    (0, s.Z)(e)
                        .filter((e) => void 0 !== e)
                        .map(String)
                        .join(":"),
                f = Object.freeze({ Full: "full", Hash: "hash", Processing: "processing", SruUpload: "sru_upload", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish", Metadata: "metadata" }),
                g = Object.freeze({ SruUpload: "sru_upload_no_eager", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish_no_eager" }),
                b = { [f.SruUpload]: g.SruUpload, [f.UploadSubmitUntilSruFinish]: g.UploadSubmitUntilSruFinish },
                w = Object.freeze({ All: "all", Short: "short", Medium: "medium", Long: "long", XLong: "xlong", L90to140s: "l90to140s", L140to300s: "l140to300s", L300to600s: "l300to600s", L600to1200s: "l600to1200s", L1200to1800s: "l1200to1800s", L1800to2700s: "l1800to2700s", L2700to3600s: "l2700to3600s", L3600to4500s: "l3600to4500s", L4500to5400s: "l4500to5400s", L5400to6300s: "l5400to6300s", L6300to7200s: "l6300to7200s", L7200to10800s: "l7200to10800s", L10800to14400s: "l10800to14400s", LGT14400s: "lgt14400s" }),
                y = (e, t) => ((0, n.Z)(e) && (0, n.Z)(t) ? Math.round(t - e) : void 0),
                S = () => (window.performance ? window.performance.now() : Date.now()),
                v = (e, t) => (e === l.xz.DMGif || e === l.xz.TweetGif ? w.All : (e !== l.xz.DMVideo && e !== l.xz.TweetVideo && e !== l.xz.AmplifyVideo) || void 0 === t ? "" : t < 10 ? w.Short : t < 20 ? w.Medium : t < 45 ? w.Long : t < 90 ? w.XLong : t < 140 ? w.L90to140s : t < 300 ? w.L140to300s : t < 600 ? w.L300to600s : t < 1200 ? w.L600to1200s : t < 1800 ? w.L1200to1800s : t < 2700 ? w.L1800to2700s : t < 3600 ? w.L2700to3600s : t < 4500 ? w.L3600to4500s : t < 5400 ? w.L4500to5400s : t < 6300 ? w.L5400to6300s : t < 7200 ? w.L6300to7200s : t < 10800 ? w.L7200to10800s : t < 14400 ? w.L10800to14400s : w.LGT14400s);
            class A {
                constructor(e, t = !1) {
                    (this._pausedDuration = {}),
                        (this._pauseTimes = {}),
                        (this._startTimes = {}),
                        (this._eagerUploadDisabled = t),
                        (this._impressionId = r().v4()),
                        (this._keyPrefix = ((e) => {
                            const { isExternal: t, mediaCategory: i, videoDuration: a } = e;
                            return `${t ? u.Remote : u.LocalFile}:${i}:${v(i, a)}`;
                        })(e)),
                        this.setMetadata({ submitted: !1 });
                }
                reportOperationComplete(e, t) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        void 0 !== this._pauseTimes[e] && this.toggleOperationPaused(e, !1);
                        let i = y(this._startTimes[e], S());
                        if (this._keyPrefix && void 0 !== i) {
                            void 0 !== this._pausedDuration[e] && (i -= this._pausedDuration[e]);
                            const a = this._getKey(e, t);
                            this._record(a, i, e === f.Full ? this._metadata : e === f.Metadata ? this._fileMetadata : void 0), (this._startTimes[e] = void 0);
                        }
                    });
                }
                reportOperationStart(e, t = !1) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        if (void 0 === this._startTimes[e] && ((this._startTimes[e] = S()), this._keyPrefix && t)) {
                            const t = this._getKey(e, "start");
                            this._record(t, 0);
                        }
                    });
                }
                reportUploadSubmit() {
                    if (this._metadata?.submitted) return;
                    this.setMetadata({ submitted: !0 });
                    let e = y(this._startTimes[f.Full], S());
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
                    if (t && void 0 === this._pauseTimes[e]) this._pauseTimes[e] = S();
                    else if (!t) {
                        const t = y(this._pauseTimes[e], S());
                        void 0 !== t && ((this._pausedDuration[e] = this._pausedDuration[e] ? this._pausedDuration[e] + t : t), (this._pauseTimes[e] = void 0));
                    }
                }
                _getKey(e, t) {
                    const i = (this._eagerUploadDisabled && b[e]) || e;
                    return `${this._keyPrefix}:${i}:${t}`;
                }
                _record(e, t, i) {
                    const a = { duration_ms: t, impression_id: this._impressionId, metadata: m(i) };
                    d.IM(e, a, "media_upload");
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
            i.d(t, { BW: () => f, SB: () => v, TO: () => I, Tz: () => b, U$: () => S, ff: () => g, vC: () => y, vn: () => A, xz: () => w, y$: () => _ });
            var a = i(182056),
                r = i(323265),
                o = i(540387);
            const s = 1024,
                n = 1024 * s,
                l = 1,
                d = 4096,
                u = 2048,
                c = 400,
                p = 1500,
                m = { Image: 5, Gif: 15, Avatar_Gif: 5 },
                _ = { Duration: { 0: 140, 1: 600, 2: 7200 }, Size: { 0: 512, 1: 1024, 2: 40960 } },
                h = 600,
                f = { GIF_IS_TOO_LARGE: 1, VIDEO_IS_TOO_LARGE: 2 },
                g = { VIDEO_IS_TOO_LONG: 1 },
                b = { MEDIA_NOT_FOUND: 0, INVALID_MEDIA_CODE: 1 },
                w = Object.freeze({ AmplifyVideo: "amplify_video", CommunityBanner: "community_banner_image", ListBanner: "list_banner_image", TweetImage: "tweet_image", TweetVideo: "tweet_video", TweetGif: "tweet_gif", DMImage: "dm_image", DMVideo: "dm_video", DMGif: "dm_gif", Subtitles: "subtitles", ProfileBanner: "banner_image" }),
                y = Object.freeze({ Tweet: "tweet", Dm: "dm", CommunityBanner: "community_banner", ListBanner: "list_banner", ProfileBanner: "profile_banner", Avatar: "avatar", Verification: "verification", TwitterArticle: "twitter_article" }),
                S = (e) => {
                    const { height: t, left: i, width: a } = e,
                        r = Math.round(t / 2);
                    return `&salient_rect=${Math.round(i + a / 2)},${r},1,1`;
                };
            function v(e) {
                const t = e.featureSwitches?.isTrue("blue_longer_video_enabled"),
                    i = (function (e) {
                        return e.userClaims.isTrueAndEnabled("subscriptions_long_video_upload") || e.featureSwitches.isTrue("subscriptions_long_video_upload_override") || !1;
                    })(e);
                return t || i ? 1 : 0;
            }
            function A(e, t, i, f, g) {
                const b = f?.location,
                    w = v({ featureSwitches: e, userClaims: t });
                let S, A;
                if (i.isSubtitles) S = 0;
                else if (i.isGif)
                    switch (b) {
                        case y.Avatar:
                            S = e.getNumberValue("media_async_upload_max_avatar_gif_size", m.Avatar_Gif) * n;
                            break;
                        case y.Dm:
                        case y.Tweet:
                        default:
                            S = e.getNumberValue("media_async_upload_max_gif_size", m.Gif) * n;
                    }
                else {
                    if (!(i instanceof o.ZP))
                        return (function (e, t, i) {
                            let o;
                            switch (t) {
                                case y.Avatar:
                                    o = c;
                                    break;
                                case y.CommunityBanner:
                                case y.ListBanner:
                                case y.ProfileBanner:
                                    o = p;
                                    break;
                                default:
                                    o = r.ZP.isDesktopOS() ? d : u;
                            }
                            const l = e.getNumberValue("media_async_upload_max_image_size", m.Image) * n;
                            return a.Z.getConnectionInfo().then(
                                (a) => {
                                    let n = l;
                                    return "slow-2g" === a.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_slow_2g", 150) * s) : i || "2g" === a.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_2g", 250) * s) : "3g" === a.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_3g", 1500) * s) : "4g" !== a.effectiveType || r.ZP.isDesktopOS() || t !== y.Tweet || (o = d), { maxDimension: o, maxFileSize: Math.min(l, n) };
                                },
                                () => ({ maxDimension: o, maxFileSize: l }),
                            );
                        })(e, b, g);
                    if (1 === w) {
                        if ("dm" === b) A = e.getNumberValue("media_async_upload_longer_dm_video_max_video_duration", h);
                        else A = e.getNumberValue("media_async_upload_longer_video_max_video_duration", _.Duration[w]) * l;
                        S = e.getNumberValue("media_async_upload_longer_video_max_video_size", _.Size[w]) * n;
                    } else (A = e.getNumberValue("media_async_upload_max_video_duration", _.Duration[w]) * l), (S = e.getNumberValue("media_async_upload_max_video_size", _.Size[w]) * n);
                }
                return Promise.resolve({ maxFileSize: S, maxDuration: A });
            }
            function I(e) {
                return !(r.ZP.isIOS() && e.size > 3e8);
            }
        },
        135698: (e, t, i) => {
            i.d(t, { c: () => o });
            const a = 4194304;
            function r(e) {
                for (let t = 0; t < e.byteLength - 8; t++)
                    if (109 === e.getUint8(t + 4) && 111 === e.getUint8(t + 5) && 111 === e.getUint8(t + 6) && 118 === e.getUint8(t + 7)) {
                        if (e.getUint32(t) > 0) return !0;
                    }
                return !1;
            }
            async function o(e) {
                const t = e.slice(0, a),
                    i = await t.arrayBuffer();
                if (r(new DataView(i))) return !0;
                const o = Math.max(0, e.size - a),
                    s = e.slice(o),
                    n = await s.arrayBuffer();
                return r(new DataView(n));
            }
        },
        946208: (e, t, i) => {
            i.d(t, { Id: () => a, ZP: () => s, h_: () => r });
            i(543673), i(240753), i(128399);
            const a = [".srt", "text/plain", ""],
                r = (e) => -1 !== a.indexOf(e.type),
                o = (e) =>
                    `WEBVTT FILE\r\n\r\n${e
                        .replace(/\{\\([ibu])\}/g, "</$1>")
                        .replace(/\{\\([ibu])1\}/g, "<$1>")
                        .replace(/\{([ibu])\}/g, "<$1>")
                        .replace(/\{\/([ibu])\}/g, "</$1>")
                        .replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2")
                        .replace(/\r\n\{\\an8\}/g, " line:5%\r\n")}`;
            class s {
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
            i.d(t, { Wv: () => r, ZP: () => s, hb: () => o, jn: () => a });
            i(571372), i(543673), i(240753), i(128399);
            const a = ["video/mp4", "video/quicktime"],
                r = (e) => -1 !== a.indexOf(e.type),
                o = { type: "video-load", NO_DIMENSIONS: 10, LOAD_FAILED: 11, TOO_LARGE: 12 };
            class s {
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
                            const r = (e, t) => {
                                    const i = new Error(e);
                                    (i.code = t), (i.type = o.type), a(i);
                                },
                                s = document.createElement("video");
                            (s.onloadedmetadata = () => {
                                t || (s.videoWidth && s.videoHeight) ? i(s) : r("Video lacks height or width", o.NO_DIMENSIONS);
                            }),
                                (s.onerror = () => {
                                    r("Error loading image", o.LOAD_FAILED);
                                }),
                                (s.src = e);
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
        537052: (e, t, i) => {
            i.d(t, { Hf: () => s, OA: () => r, mL: () => o });
            i(571372);
            var a = i(837880);
            function r(e, t) {
                const i = (0, a.Z)(t / 100, 0, 1),
                    r = n[e],
                    o = i * (r.max - r.min);
                return d(r.min + o, 3);
            }
            function o(e) {
                const t = (0, a.Z)(e, 0, 1);
                for (let e = 0; e < l.length; e++) {
                    const i = l[e];
                    if ((0 === e && t <= i.min) || (e === l.length - 1 && t >= i.max) || (t >= i.min && t < i.max)) {
                        let e = u(t, i.min, i.max);
                        return (e = d(e, 3)), [i.name, e];
                    }
                }
                throw new Error("unreachable");
            }
            const s = Object.freeze({ uploading: "uploading", processing: "processing" }),
                n = { [s.uploading]: { name: s.uploading, min: 0, max: 0.5 }, [s.processing]: { name: s.processing, min: 0.5, max: 1 } },
                l = [n.uploading, n.processing];
            function d(e, t) {
                const i = Math.pow(10, t);
                return Math.round(e * i) / i;
            }
            function u(e, t, i) {
                return (e - t) / (i - t);
            }
            !(function () {
                let e,
                    t = 0;
                for (const i of l) {
                    if (((t += i.max - i.min), i.max <= i.min)) {
                        const e = JSON.stringify({ stage: i });
                        throw new Error(`INVALID STAGE MAX MUST BE GREATER THAN MIN [${e}]`);
                    }
                    if (i.min < 0) {
                        const e = JSON.stringify({ stage: i });
                        throw new Error(`INVALID STAGE MIN IS LESS THAN ZERO [${e}]`);
                    }
                    if (i.max > 1) {
                        const e = JSON.stringify({ stage: i });
                        throw new Error(`INVALID STAGE MAX IS GREATER THAN ONE [${e}]`);
                    }
                    if (e && i.min !== e.max) {
                        const t = JSON.stringify({ stage: i, last_stage: e });
                        throw new Error(`INVALID STAGE MIN MUST EQUAL PREVIOUS MAX [${t}]`);
                    }
                    e = i;
                }
                if (1 !== t) {
                    const e = JSON.stringify({ total: t });
                    throw new Error(`INVALID STAGE TOTAL MUST EQUAL EXACTLY 1.0 [${e}]`);
                }
            })();
        },
        111531: (e, t, i) => {
            i.d(t, { EM: () => c, K3: () => u, Xp: () => p });
            var a = i(882127),
                r = i(498510),
                o = (i(585488), i(277660)),
                s = i.n(o),
                n = i(708482),
                l = i(944681),
                d = i(535338);
            function u(e) {
                return (function (e) {
                    return (0, n.s)(e, _, {});
                })(e).then(
                    (e) =>
                        !m(e) &&
                        (function (e) {
                            return e?.user_preferences.allow_video_downloads ?? !0;
                        })(e),
                );
            }
            function c() {
                return m((0, d.p)(_, {}));
            }
            function p(e) {
                return (function (e) {
                    const t = e.user_results?.result;
                    if ("User" === t?.__typename) {
                        const e = t?.legacy_extended_profile?.birthdate;
                        if (e) {
                            const { day: t, month: i, year: a } = e;
                            return (0, l.k)(a, i, t, !0);
                        }
                    }
                    return !0;
                })(s()(h, e));
            }
            function m(e) {
                const t = e?.viewer?.user_results?.result;
                if ("User" === t?.__typename) {
                    const e = t?.legacy_extended_profile?.birthdate;
                    if (e) {
                        const { day: t, month: i, year: a } = e;
                        return (0, l.k)(a, i, t, !0);
                    }
                }
                return !0;
            }
            const _ = r.Z,
                h = a.Z;
        },
        497294: (e, t, i) => {
            i.d(t, { $i: () => me, C4: () => Y, G$: () => q, Q6: () => K, TU: () => Q, WU: () => ee, _B: () => oe, _J: () => ae, _T: () => k, dD: () => re, gz: () => R, m3: () => G, o6: () => le, oZ: () => _e, pJ: () => ce, rA: () => $ });
            i(571372), i(136728);
            var a = i(99107),
                r = i(411916),
                o = i.n(r),
                s = i(10622),
                n = i.n(s),
                l = i(674132),
                d = i.n(l),
                u = i(205074),
                c = i(653843),
                p = i(514354),
                m = i(908478),
                _ = i(417144),
                h = i(904940),
                f = i(918621),
                g = i(829053),
                b = i(716233),
                w = i(166677),
                y = i(221562),
                S = i(755296),
                v = i(135698),
                A = i(946208),
                I = i(540387),
                E = i(653798),
                O = i(499627),
                D = i(917799),
                L = i(390387),
                T = i(38562),
                M = i(601576),
                P = i(111531),
                U = i(537052);
            const x = d().g40ff2b4,
                F = "mediaUpload",
                C = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload2.json",
                N = `rweb/${F}`,
                z = [],
                Z = "upload";
            class B extends Error {
                constructor(e, { code: t, isGif: i, isImage: a, isVideo: r, type: o }) {
                    super(e), (this.code = t), (this.type = o), (this.isGif = !!i), (this.isImage = !!a), (this.isVideo = !!r);
                }
            }
            function V(e, t, i) {
                let r = null,
                    o = {},
                    s = {};
                if ((t.getNumberValue("optimized_sru_parameters_enabled") && (s = { sruParameterOverrides: { minSegmentBytes: t.getNumberValue("optimized_sru_parameters_min_segment_bytes"), idealUploadTimeMs: t.getNumberValue("optimized_sru_parameters_ideal_upload_time_ms"), maxSegmentBytes: t.getNumberValue("optimized_sru_parameters_max_segment_bytes"), clientsideSruUploadTimeoutMs: t.getNumberValue("optimized_sru_parameters_client_side_timeout_ms") } }), (0, S.s)().isLoggedIn)) {
                    const e = (0, f.ej)({ cookieName: a.qj, featureSwitches: t });
                    if (e) {
                        const t = i?.actAsUserId;
                        s.sruHeaders = { ...(0, g.L)(t), "x-twitter-auth-type": "OAuth2Session", authorization: (0, a.Oj)(!1), [a.d4]: e };
                    }
                }
                return (
                    i?.useLongVideoEndpoint && (s.uploadUrl = C),
                    {
                        upload(t) {
                            (r = new _.Z(e, s)), (o = t), r.upload(o);
                        },
                        amendUpload(e) {
                            (o = { ...o, ...e }), r && r.upload(o);
                        },
                        uploadExternalMedia(t, i, a, o) {
                            (r = new _.Z(e, s)), r.uploadExternalMedia(t, i, a, o);
                        },
                        cancel() {
                            r && r.cancel();
                        },
                    }
                );
            }
            const R = (e) => e[F],
                G = (e, t) => {
                    const i = Array.isArray(t) ? t : [t];
                    return e[F].filter((e) => i.some((t) => t === e.id));
                },
                k = (e, t) => {
                    const i = G(e, t);
                    if (!i.length) return 0;
                    const a = i.reduce((e, t) => e + (t.uploadProgress || 0), 0) / i.length;
                    return Math.min(a, 1);
                },
                H = "rweb/mediaUpload/ADD_MEDIA",
                j = (e) => ({ payload: e, type: H });
            let X = 1;
            function $(e, t) {
                return (i, a, { featureSwitches: r, relayEnvironment: o }) => {
                    const s = Array.from(e, (e) => {
                            if ((0, I.Wv)(e)) {
                                const i = new I.ZP(e, t.isAmplify);
                                if ((0, b.TO)(e)) {
                                    const e = r.isTrue("responsive_web_hevc_upload_preview_enabled") && r.isTrue("responsive_web_composer_configurable_video_player_enabled");
                                    return i.withDimensionsAndOrientation(e);
                                }
                                return Promise.resolve(i);
                            }
                            return (0, A.h_)(e) ? Promise.resolve(new A.ZP(e)) : new u.ZP(e).withDimensionsAndOrientation();
                        }),
                        l = i((e, t, { relayEnvironment: i }) =>
                            n()(i, E.S, {}, { fetchPolicy: "store-or-network" })
                                .toPromise()
                                .then((e) => {
                                    const t = e?.viewer?.user_results?.result;
                                    return "User" === t?.__typename && (t?.sensitive_media_settings?.can_user_allow_sensitive_content ?? !1);
                                })
                                .catch(() => !1),
                        ).then((e) => e && (0, P.K3)(o));
                    return Promise.all(s)
                        .then(
                            (e) => {
                                const a = i(
                                    (function (e, t) {
                                        return (i, a, { featureSwitches: r, userClaims: o }) => {
                                            const { uploadIds: s = [], altTexts: n = [] } = t,
                                                l = (0, T.IX)(a()),
                                                d = (Array.isArray(e) ? e : [e]).map((e, d) => {
                                                    const p = r.isTrue("responsive_web_media_upload_metrics_enabled");
                                                    let m;
                                                    t.location && (m = he(t.location, e, !1, { featureSwitches: r, userClaims: o }));
                                                    const _ = e instanceof I.ZP ? e.duration : void 0,
                                                        h = e instanceof u.ZP ? e.orientation : void 0,
                                                        f = p && m ? new y.ZP({ isExternal: !1, mediaCategory: m, videoDuration: _ }, l) : void 0,
                                                        g = r.isTrue("responsive_web_media_upload_md5_hashing_enabled") && e.isImage && e instanceof u.ZP,
                                                        w = r.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte");
                                                    return (
                                                        e instanceof I.ZP &&
                                                            (function (e) {
                                                                const { video: t } = e;
                                                                t &&
                                                                    ((t.currentTime = Math.min(0.1, t.duration)),
                                                                    t.addEventListener("timeupdate", () => {
                                                                        const i = document.createElement("canvas"),
                                                                            { height: a, width: r } = e;
                                                                        (i.width = r), (i.height = a);
                                                                        i.getContext("2d").drawImage(t, 0, 0, r, a), (e.thumbnail = i.toDataURL("image/png"));
                                                                    }));
                                                            })(e),
                                                        f?.setFileMetadata({ fileSize: e.size, mime: e.type, duration: _, width: e.width, height: e.height, orientation: h }),
                                                        (0, b.vn)(r, o, e, t, l).then(({ maxDimension: l, maxFileSize: p }) => {
                                                            const m = e.isImage && e instanceof u.ZP && (0, c.m2)(e, { maxFileSize: p, maxDimension: l, jpgPixelsPerByteForResize: w }),
                                                                _ = (0, b.SB)({ featureSwitches: r, userClaims: o }),
                                                                h = { useLongVideoEndpoint: e.isVideo && _ >= 1, actAsUserId: (0, L.dY)(a()) },
                                                                y = m ? void 0 : V(e.fileHandle, r, h),
                                                                S = W({ originalMediaFile: e, mediaFile: e, mediaFileHash: g ? void 0 : null, needsProcessing: m, location: t.location, uploadId: s[d] ?? "", reporter: f, uploader: y, mediaMetadata: { altText: n[d] }, abortController: g ? new AbortController() : void 0 });
                                                            return g && ge(i, a, S.id, e.fileHandle, S.reporter, S.abortController), S;
                                                        })
                                                    );
                                                });
                                            return Promise.all(d).then((e) => (i(j(e)), e));
                                        };
                                    })(e, t),
                                );
                                return a;
                            },
                            (e) => {
                                const t = (0, w.vK)(e);
                                return t && i((0, M.fz)(t)), Promise.reject(e);
                            },
                        )
                        .then((e) =>
                            l
                                .then((t) => {
                                    if (t) for (const t of e) i(oe(t.id, { ...t.mediaMetadata, allowDownloadStatus: { allowDownload: !0 } }));
                                    return e;
                                })
                                .catch(() => e),
                        );
                };
            }
            const K =
                ({ height: e, mediaCategory: t, mediaType: i, previewMediaType: a, previewUrl: r, sourceUrl: o, stillMediaUrl: s, width: n }) =>
                (l, d, { featureSwitches: u }) => {
                    const c = u.isTrue("responsive_web_media_upload_metrics_enabled") && t ? new y.ZP({ isExternal: !0, mediaCategory: t }) : void 0;
                    c?.reportOperationStart(y.BX.Full, !0);
                    const p = { actAsUserId: (0, L.dY)(d()) },
                        m = W({ externalMediaDetails: { mediaCategory: t, mediaType: i, previewUrl: r || o, previewMediaType: a || i, sourceUrl: o, stillMediaUrl: s, width: n, height: e }, reporter: c, uploader: V(null, u, p) });
                    return l(j(m)), c?.toggleOperationPaused(y.BX.Full, !0), [m];
                };
            function W(e) {
                const t = { ...e, id: X, uploadFailed: !1, uploading: !1, uploadProgress: 1, mediaMetadata: void 0 };
                return (X += 1), t.uploadId || ((t.uploadId = ""), (t.uploadProgress = 0)), t;
            }
            const Y =
                    (e) =>
                    (t, i, { featureSwitches: a, userClaims: r }) => {
                        const [o] = G(i(), e);
                        if (!o) return Promise.reject(new Error("media item not found"));
                        const { abortController: s, cropData: n, id: l, location: d, mediaFile: p, needsProcessing: m, originalMediaFile: _ } = o;
                        if (!_) return Promise.reject(new Error("media item not found"));
                        const h = a.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte"),
                            f = (0, T.IX)(i()),
                            g = { location: d };
                        return (0, b.vn)(a, r, _, g, f).then((e) => {
                            const r = { cropData: n, jpgPixelsPerByteForResize: h, maxFileSize: e.maxFileSize, maxDimension: e.maxDimension },
                                d = e.maxFileSize || 0,
                                f = e.maxDuration || 0;
                            if (_.isImage && _ instanceof u.ZP)
                                return m
                                    ? (0, c.ZP)(_, r)
                                          .then(
                                              (e) => new u.ZP(e).withDimensionsAndOrientation(),
                                              (e) => {
                                                  throw (s?.abort(), (e.type = "resize"), e);
                                              },
                                          )
                                          .then((e) => {
                                              _ !== p && p && p.dispose(), o.uploader && o.uploader.cancel && o.uploader.cancel();
                                              const r = { actAsUserId: (0, L.dY)(i()) },
                                                  s = V(e.fileHandle, a, r),
                                                  n = t(ae({ id: l, mediaFile: e, needsProcessing: !1, uploadPromise: void 0, uploadProgress: 0, uploading: !1, uploadId: void 0, uploader: s }));
                                              return (o.uploadId || o.uploading) && t(me([l])), n;
                                          })
                                    : Promise.resolve(o);
                            if (_.size > d) {
                                const e = Error("Exceeds size limit");
                                return ([e.type, e.code, e.limit] = ["maxsize", _.isGif ? b.BW.GIF_IS_TOO_LARGE : b.BW.VIDEO_IS_TOO_LARGE, d]), Promise.reject(e);
                            }
                            if (_.isVideo && _ instanceof I.ZP && _.duration > f) {
                                const e = Error("Exceeds duration limit");
                                return ([e.type, e.code, e.limit] = ["maxduration", b.ff.VIDEO_IS_TOO_LONG, f]), Promise.reject(e);
                            }
                            return Promise.resolve(o);
                        });
                    },
                q = (e, t) => (i, a) => {
                    const { onFailure: r } = t,
                        s = [];
                    return new Promise((t, a) => {
                        const n = (e) => {
                            if (!e.length) return t(s);
                            const [a] = e;
                            o()(() => {
                                a.reporter?.reportOperationStart(y.BX.Full, !0),
                                    a.reporter?.reportOperationStart([y.BX.Processing, y.BX.Metadata]),
                                    a.reporter?.reportOperationComplete(y.BX.Metadata, y.Uk.Complete),
                                    i(Y(a.id)).then(
                                        (t) => {
                                            s.push(t), t?.reporter?.reportOperationComplete(y.BX.Processing, y.Uk.Success), t?.reporter?.toggleOperationPaused(y.BX.Full, !0), n(e.slice(1));
                                        },
                                        (t) => {
                                            const o = (0, w.ZP)(t, x);
                                            o && i((0, M.fz)(o));
                                            const { code: s, message: l, name: d, type: u } = t;
                                            a.reporter?.setMetadata({ reason: { name: d, message: l, code: s } });
                                            const p = "maxsize" === u || "maxduration" === u || ("resize" === u && (s === c.Y7.FILE_IS_NOT_AN_IMAGE || s === c.Y7.GIF_IS_TOO_LARGE)) ? y.Uk.Invalid : y.Uk.Failure;
                                            a.reporter?.reportOperationComplete([y.BX.Full, y.BX.Processing], p), r && r(a.id), n(e.slice(1));
                                        },
                                    );
                            });
                        };
                        n(e);
                    });
                },
                J = "rweb/mediaUpload/REMOVE_MEDIA",
                Q = (e) => ({ payload: Array.isArray(e) ? e : [e], type: J });
            function ee(e) {
                return (t, i) => {
                    G(i(), e).forEach((e) => {
                        const { abortController: t, mediaFile: i, originalMediaFile: a, reporter: r, uploader: o } = e;
                        t?.abort(), o && o.cancel && o.cancel(), r?.reportOperationComplete(y.BX.Full, y.Uk.Cancel), i && i.dispose(), a && a.dispose();
                    }),
                        t(Q(e));
                };
            }
            const te = "rweb/mediaUpload/UPDATE_MEDIA",
                ie = (e) => ({ payload: e, type: te });
            function ae(e) {
                return (t, i) => {
                    t(ie(e));
                    const [a] = G(i(), e.id);
                    return a;
                };
            }
            function re(e) {
                return (t, i) => {
                    const [a] = G(i(), e);
                    a.uploader?.cancel(), t(me(e));
                };
            }
            function oe(e, t) {
                return (i) => i(ae({ id: e, mediaMetadata: t }));
            }
            const se = "SEND_METADATA",
                ne = D.dg(N, se);
            function le(e) {
                return (t, i, { api: a }) => D._O(t, { params: e, request: a.withEndpoint(h.Z).metadataCreate })({ actionTypes: ne, context: se });
            }
            const de = "ATTACH_SUBTITLES",
                ue = D.dg(N, de);
            function ce(e) {
                return (t, i, a) => {
                    const { subtitlesDisplayName: r, subtitlesLang: o, subtitlesMediaUploadId: s, videoMediaUploadId: n } = e,
                        { api: l, featureSwitches: d, userClaims: u } = a,
                        c = fe(e.mediaItem, !1, { featureSwitches: d, userClaims: u }) || "";
                    return D._O(t, { params: { videoMediaUploadId: n, videoMediaCategory: c, subtitlesLang: o, subtitlesMediaUploadId: s, subtitlesDisplayName: r }, request: l.withEndpoint(h.Z).attachSubtitles })({ actionTypes: ue, context: de });
                };
            }
            const pe = (e) => {
                const t = e.trimData;
                if (t) return `${t.startTime.toFixed(3)}-${t.endTime.toFixed(3)}`;
            };
            const me =
                    (e, t = Object.freeze({})) =>
                    (i, a, { featureSwitches: r, userClaims: o }) => {
                        const s = G(a(), e),
                            n = (e) => i(ae(e));
                        function l(e, i = !1) {
                            const a = r.isTrue("responsive_web_media_upload_md5_hashing_enabled"),
                                { abortController: s, id: d, mediaFile: c, mediaFileHash: p, reporter: m, uploader: h } = e,
                                f = a && c && c.isImage && c instanceof u.ZP,
                                g = void 0 === p;
                            return (
                                m?.toggleOperationPaused(y.BX.Full, !1),
                                t.withoutReUpload && e.uploadId
                                    ? Promise.resolve(n({ id: d, uploadProgress: 1, uploading: !1 }))
                                    : (t.preUpload || (m?.reportOperationStart(y.BX.UploadSubmitUntilSruFinish), m?.reportUploadSubmit(), f && g && s?.abort(), e.uploading && h && h.amendUpload({ pauseBeforeFinalize: !1, trimRanges: pe(e) })),
                                      e.uploadPromise
                                          ? e.uploadPromise.then((t) => ({ ...t, mediaMetadata: e.mediaMetadata }))
                                          : h
                                            ? (function (e) {
                                                  const { featureSwitches: t, gifAsStaticImage: i, mediaItem: a, updateMediaItem: r, uploadMediaItem: o, uploadOptions: s, userClaims: n } = e,
                                                      { abortController: l, externalMediaDetails: d, id: u, reporter: c, uploader: p } = a,
                                                      m = new Promise((e, m) => {
                                                          const h = (t) => {
                                                                  c?.setMetadata({ mediaId: t }), c?.reportOperationComplete([y.BX.Full, y.BX.UploadSubmitUntilSruFinish], y.Uk.Success), e(r({ id: u, uploadId: t, uploadProgress: 1, uploading: !1 }));
                                                              },
                                                              f = (e, t, i) => {
                                                                  c?.setMetadata({ mediaId: i }), "uploading" === t ? (r({ id: u, uploadProgress: U.OA("uploading", e) }), 100 === e && c?.reportOperationComplete(y.BX.SruUpload, y.Uk.Success)) : "processing" === t && r({ id: u, uploadProgress: U.OA("processing", e) });
                                                              },
                                                              g = () => {
                                                                  c?.toggleOperationPaused(y.BX.Full, !0);
                                                              },
                                                              w = (t) => {
                                                                  const { code: s, detail_message: n, maxSizeBytes: d, message: h, name: f } = t;
                                                                  if (a.mediaFile?.isGif && !i && s === b.Tz.INVALID_MEDIA_CODE) p?.amendUpload({ pauseBeforeFinalize: !1 }), r({ id: u, uploadProgress: 0, uploading: !1, uploadFailed: !1, uploadPromise: void 0 }), o(a, !0).then(e).catch(m);
                                                                  else {
                                                                      l?.abort(), r({ id: u, uploadProgress: 0, uploading: !1, uploadFailed: !0, uploadError: { code: s, message: h, detail_message: n, maxSizeBytes: d }, uploadPromise: void 0 });
                                                                      const e = new B(h ? `${h}` : `Media upload failed [Error code: ${s}]`, { code: s, type: Z, isGif: !!a.externalMediaDetails || (a.mediaFile && a.mediaFile.isGif), isImage: a.mediaFile && a.mediaFile.isImage, isVideo: a.mediaFile && a.mediaFile instanceof I.ZP && a.mediaFile.isVideo }),
                                                                          t = s === _.d.CANCELED ? y.Uk.Cancel : y.Uk.Failure;
                                                                      c?.setMetadata({ reason: { name: f, message: h, code: s } }), c?.reportOperationComplete([y.BX.Full, y.BX.SruUpload, y.BX.UploadSubmitUntilSruFinish], t), m(e);
                                                                  }
                                                              };
                                                          if (d && a.uploader) a.uploader?.uploadExternalMedia(d.sourceUrl, d.mediaType, d.mediaCategory, { success: h, progress: f, error: w, mediaItem: a });
                                                          else if (a.uploader) {
                                                              const { extraInitParams: e = "", preUpload: r = !1 } = s,
                                                                  { enable_1080p_variant: o, mediaFile: l, mediaFileHash: d } = a,
                                                                  u = t.isTrue("media_async_upload_longer_video_resolution_selector"),
                                                                  p = l && l.size > 1e8 && t.isTrue("rweb_media_multi_requests_enabled"),
                                                                  m = fe(a, i, { featureSwitches: t, userClaims: n }),
                                                                  _ = m ? `&media_category=${m}` : "";
                                                              c?.reportOperationStart(y.BX.SruUpload), a.uploader?.upload({ success: h, progress: f, pause: g, error: w, extraInitParams: e + _, extraFinalizeParams: d ? `&original_md5=${d}` : void 0, trimRanges: pe(a), pauseBeforeFinalize: r, withMultiRequests: p, enable_1080p_variant: !u || o, mediaItem: a });
                                                          }
                                                      });
                                                  return (
                                                      r({ id: u, uploading: !0, uploadFailed: !1, uploadProgress: 0, uploadPromise: m }),
                                                      a.mediaFile?.fileHandle instanceof Blob &&
                                                          (0, v.c)(a.mediaFile.fileHandle).then((e) => {
                                                              r({ id: u, muxedMetadata: { hasMoov: e } });
                                                          }),
                                                      m
                                                  );
                                              })({ mediaItem: e, updateMediaItem: n, uploadMediaItem: l, gifAsStaticImage: i, uploadOptions: t, featureSwitches: r, userClaims: o })
                                            : Promise.reject(new Error("Media has no uploader. Did you forget to call resizeMedia?")))
                            );
                        }
                        const d = s.map((e) => l(e));
                        return Promise.all(d).catch((e) => {
                            throw (e.type || (e.type = Z), e);
                        });
                    },
                _e = (e, t) => {
                    const i = me(e, { ...t, preUpload: !0 });
                    return (...e) =>
                        i(...e).catch((e) => {
                            if (e.code !== _.d.CANCELED) throw e;
                        });
                };
            function he(e, t, i, a) {
                const r = e === b.vC.Tweet || e === b.vC.TwitterArticle,
                    o = e === b.vC.TwitterArticle;
                if (t.isSubtitles) return b.xz.Subtitles;
                if (t.isGif && !i) return r ? b.xz.TweetGif : b.xz.DMGif;
                if (t.isAmplify) return b.xz.AmplifyVideo;
                if (t.isVideo) {
                    const e = t.duration || 0,
                        { featureSwitches: i, userClaims: s } = a,
                        n = (0, b.SB)({ featureSwitches: i, userClaims: s }),
                        l = i.getNumberValue("media_async_upload_amplify_duration_threshold", b.y$.Duration[n]);
                    return "number" == typeof n && 1 === n && e > l ? b.xz.AmplifyVideo : o ? b.xz.TweetVideo : r ? b.xz.AmplifyVideo : b.xz.DMVideo;
                }
                return r ? b.xz.TweetImage : b.xz.DMImage;
            }
            function fe(e, t, i) {
                const { location: a, mediaFile: r } = e;
                if (!a || !r) return null;
                switch (a) {
                    case b.vC.Tweet:
                    case b.vC.Dm:
                    case b.vC.TwitterArticle:
                        return he(a, r, t, i);
                    case b.vC.CommunityBanner:
                        return b.xz.CommunityBanner;
                    case b.vC.ListBanner:
                        return b.xz.ListBanner;
                    case b.vC.ProfileBanner:
                        return b.xz.ProfileBanner;
                    default:
                        return null;
                }
            }
            const ge = (e, t, i, a, r, o) => {
                r?.reportOperationStart(y.BX.Hash, !0),
                    r?.setMetadata({ hashState: y.Xj.InProgress }),
                    (0, p.Q)(a, o)
                        .then((a) => {
                            const [o] = G(t(), i);
                            if (!o) {
                                throw new B("Media item was removed", { code: p.S.HASHING_ABORTED, type: Z, isGif: !1, isImage: !0, isVideo: !1 });
                            }
                            e(ae({ id: i, mediaFileHash: a, abortController: void 0 }));
                            const { uploadPromise: s, uploader: n, uploading: l } = o;
                            s && l && n && n.amendUpload({ extraFinalizeParams: a ? `&original_md5=${a}` : void 0 }), r?.setMetadata({ hashState: y.Xj.Complete }), r?.reportOperationComplete(y.BX.Hash, y.Uk.Success);
                        })
                        .catch((a) => {
                            const [o] = G(t(), i);
                            o && e(ae({ id: i, mediaFileHash: null, abortController: void 0 })), a.code === p.S.HASHING_ABORTED ? (r?.setMetadata({ hashState: y.Xj.Canceled }), r?.reportOperationComplete(y.BX.Hash, y.Uk.Cancel)) : (r?.setMetadata({ hashState: y.Xj.Failure }), r?.reportOperationComplete(y.BX.Hash, y.Uk.Failure));
                        });
            };
            O.Z.register({
                [F]: function (e = z, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case H:
                            return t.payload ? e.concat(t.payload) : e;
                        case J: {
                            const i = t.payload;
                            return i && i.length ? e.filter((e) => -1 === i.indexOf(e.id)) : e;
                        }
                        case te: {
                            const i = t.payload;
                            return i
                                ? e.map((e) => {
                                      if (e.id === i.id) {
                                          const t = e.needsProcessing || (i.hasOwnProperty("cropData") && !(0, m.Z)(i.cropData, e.cropData));
                                          return { ...e, needsProcessing: t, uploader: t ? void 0 : e.uploader, ...i };
                                      }
                                      return e;
                                  })
                                : e;
                        }
                        default:
                            return e;
                    }
                },
            });
        },
        651402: (e, t, i) => {
            i.r(t), i.d(t, { LogoutScreen: () => M, default: () => U });
            var a = i(202784),
                r = i(190286),
                o = i(138099),
                s = i(392237),
                n = i(674132),
                l = i.n(n),
                d = i(520913),
                u = i(143778),
                c = i(640872),
                p = i(290402),
                m = i(652904),
                _ = i(782826),
                h = i(755296),
                f = i(312771),
                g = i(71620),
                b = i(668214),
                w = i(24546),
                y = i(680997),
                S = i(919022);
            const v = (0, b.Z)()
                    .propsFromState(() => ({ loggedInUser: S.ZP.selectLoggedInUser }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("LOGOUT_SCREEN"), logout: y.Z, sendAllPreviews: w.MH }))
                    .withAnalytics({ page: "logout" }),
                A = l().f5edfbde,
                I = l().f12b4db5,
                E = l().ae1bbb26,
                O = l().ia5ff8b6,
                D = l().ea3750c4,
                L = l().gc6866f8,
                T = (e) => {
                    const { redirect_after_logout: t } = e.query;
                    return "string" == typeof t ? t : Array.isArray(t) && "string" == typeof t[0] ? t[0] : void 0;
                };
            class M extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { fetchStatus: f.ZP.LOADED }),
                        (this._render = () => {
                            const { loggedInUser: e } = this.props,
                                { hasMultiAccountCookie: t } = (0, h.s)();
                            return a.createElement(m.Z, null, a.createElement(r.Z, { Icon: d.default, allowBackNavigation: !0, confirmButtonLabel: E, confirmButtonType: "primary", enableMaskForDismiss: !0, headline: t && e ? I({ screenName: e.screen_name }) : A, iconStyle: P.icon, onCancel: this._handleCancel, onConfirm: this._handleLogout, text: t ? D : O }));
                        }),
                        (this._handleLogout = () => {
                            const { hasMultiAccountCookie: e } = (0, h.s)(),
                                { createLocalApiErrorHandler: t, location: i, logout: a, sendAllPreviews: r } = this.props;
                            this.setState({ fetchStatus: f.ZP.LOADING });
                            const o = T(i) || (e ? `https://${window.location.host}/account/switch` : void 0);
                            r().finally(() => {
                                a({ redirectAfterLogout: o }).catch((e) => (this.setState({ fetchStatus: f.ZP.LOADED }), t({ showToast: !0 })(e)));
                            });
                        }),
                        (this._handleCancel = () => {
                            const { history: e, location: t } = this.props,
                                i = T(t);
                            i && _.ZP.isTwitterUrl(i) ? _.ZP.navigateTo(i) : e.goBack();
                        });
                }
                componentDidMount() {
                    this.context.incrementDmDrawerSuppressorCount();
                }
                componentWillUnmount() {
                    this.context.decrementDmDrawerSuppressorCount();
                }
                render() {
                    const { fetchStatus: e } = this.state;
                    return e === f.ZP.LOADED ? this._render() : a.createElement(o.Z, { type: "full" }, a.createElement(p.Z, { fetchStatus: e, loadingMessage: L, onRequestRetry: this._handleLogout, render: u.Z }));
                }
            }
            M.contextType = c.Z;
            const P = s.default.create((e) => ({ icon: { color: e.colors.brandColor, height: e.spaces.space40 } })),
                U = v(M);
        },
        324546: (e, t, i) => {
            i.r(t), i.d(t, { LogoutErrorScreen: () => I, default: () => E });
            var a = i(202784),
                r = i(529356),
                o = i(138099),
                s = i(674132),
                n = i.n(s),
                l = i(143778),
                d = i(290402),
                u = i(652904),
                c = i(620482),
                p = i(312771),
                m = i(615027),
                _ = i(71620),
                h = i(668214),
                f = i(24546),
                g = i(680997);
            const b = (0, h.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("LOGOUT_ERROR_SCREEN"), logout: g.Z, sendAllPreviews: f.MH }))
                    .withAnalytics({ page: "logout_error" }),
                w = n().ae1bbb26,
                y = n().a5077d3e,
                S = n().gc6866f8,
                v = n().c20aaf3e,
                A = n().c55f5c9a;
            class I extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { fetchStatus: p.ZP.LOADED }),
                        (this._renderError = () => a.createElement(u.Z, null, a.createElement(r.Z, { actionLabel: y, headline: v, isFullHeightOnMobile: !0, onAction: this._handleRefresh, onClose: this._handleRefresh, onSecondaryAction: this._handleLogout, secondaryActionLabel: w, subtext: A, withCloseButton: !1 }))),
                        (this._redirectToHome = () => a.createElement(m.Z, { to: "/" })),
                        (this._handleLogout = () => {
                            const { createLocalApiErrorHandler: e, logout: t, sendAllPreviews: i } = this.props;
                            this.setState({ fetchStatus: p.ZP.LOADING }),
                                i().finally(() => {
                                    t({ redirectAfterLogout: "/" }).catch((t) => (this.setState({ fetchStatus: p.ZP.LOADED }), e({ showToast: !0 })(t)));
                                });
                        }),
                        (this._handleRefresh = (e) => {
                            c.Z.flushHTMLCache(), window.location.replace("/");
                        });
                }
                render() {
                    const { location: e } = this.props,
                        { fetchStatus: t } = this.state;
                    return t === p.ZP.LOADED ? ((e.state && e.state.error) || e.query.testing ? this._renderError() : this._redirectToHome()) : a.createElement(o.Z, { type: "full" }, a.createElement(d.Z, { fetchStatus: t, loadingMessage: S, onRequestRetry: this._handleLogout, render: l.Z }));
                }
            }
            const E = b(I);
        },
        653798: (e, t, i) => {
            i.d(t, { S: () => r });
            var a = i(326439);
            i(585488);
            const r = a.Z;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Logout-9f4db315.df36e78a.js.map

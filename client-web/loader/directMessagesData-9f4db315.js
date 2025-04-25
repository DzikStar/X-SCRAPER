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
            i.d(t, { $r: () => H, O9: () => Y, ZP: () => Q, vK: () => q });
            var a = i(688715),
                s = i(674132),
                o = i.n(s),
                r = i(653843),
                n = i(122123),
                d = i(417144),
                l = i(884495),
                _ = i(716233),
                u = i(540387);
            const m = o().b8098028,
                c = o().b36f4170,
                p = o().hab3781e,
                f = o().f6c4fb02,
                b = o().g0af3dd2,
                h = o().b8c8b0be,
                g = o().ica6d718,
                v = o().b28d44f7({ limit: 15 }),
                D = o().i1db7d13,
                I = o().baac0ed7,
                L = D({ limit: 512 }),
                O = o().a22385bb,
                T = o().be0440bf,
                S = O({ limit: 140 }),
                A = o().feeba512,
                E = o().db123c02,
                y = o().db6001e7({ limit: 5 }),
                M = o().eb96d952,
                w = o().i859a9d4,
                N = o().b3880588,
                x = o().ca058b68,
                P = o().id24379c,
                U = o().h4d7cbcc,
                z = (0, a.ju)("https://support.x.com/articles/20156423"),
                F = (0, a.ju)("https://help.x.com/using-twitter/twitter-videos"),
                V = (e) => ({ text: e }),
                G = (e) => ({ text: e, action: { label: w, link: z } }),
                C = (e) => ({ text: e, action: { label: w, link: F } }),
                k = { [r.Y7.GIF_IS_TOO_LARGE]: V(v), [r.Y7.CANNOT_BE_PROCESSED]: V(m), [r.Y7.FILE_IS_NOT_AN_IMAGE]: V(p) },
                Z = { [d.d.ZERO_FILE_LENGTH]: V(c), [d.d.TIMEOUT]: V(N) },
                R = { ...Z, [d.d.FILE_TOO_LARGE]: V(y), [d.d.UNSUPPORTED_MEDIA]: G(E), [d.d.INVALID_MEDIA]: G(A) },
                j = { ...Z, [d.d.FILE_TOO_LARGE]: V(v), [d.d.UNSUPPORTED_MEDIA]: G(b), [d.d.INVALID_MEDIA]: G(f) },
                $ = { ...Z, [d.d.FILE_TOO_LARGE]: V(L), [d.d.UNSUPPORTED_MEDIA]: C(g), [d.d.INVALID_MEDIA]: C(h) },
                B = Object.freeze({ RESIZE: "resize", UPLOAD: "upload", METADATA: "metadata", MAXDURATION: "maxduration", MAXSIZE: "maxsize" }),
                X = 1048576,
                K = 1073741824,
                Y = (e) => Object.values(B).includes(e.type),
                W = (e) => {
                    const { code: t, limit: i, type: a } = e;
                    if (t)
                        switch (a) {
                            case B.MAXSIZE:
                                return t === _.BW.GIF_IS_TOO_LARGE ? V(v) : t === _.BW.VIDEO_IS_TOO_LARGE && void 0 !== i ? V(i >= K ? I({ limit: Math.round(i / K) }) : D({ limit: Math.round(i / X) })) : V(L);
                            case B.MAXDURATION:
                                return void 0 !== i ? (i > 140 ? V(T({ limit: Math.round(i / 60) })) : { text: O({ limit: Math.round(i) }), action: { label: l.Z.LongerVideoUpload.defaultContent.actionLabel, link: { pathname: `/i/premium_sign_up?referring_page=${l.Z.LongerVideoUpload.referringPage}`, external: !0 } } }) : V(S);
                            case B.RESIZE:
                                return k[t];
                            case B.UPLOAD:
                                if (e.isImage) return R[t];
                                if (e.isGif) return j[t];
                                if (e.isVideo) return $[t];
                                break;
                            case B.METADATA:
                                return V(U);
                        }
                },
                H = (e) => {
                    if (Y(e)) return e;
                };
            function Q(e, t = P) {
                const i = H(e);
                if (i) {
                    const a = e.message ? `${t} ${e.message}` : t;
                    return W(i) || V(a);
                }
            }
            function q(e, t = x) {
                return e.type === n.gK.type && e.code === n.gK.NO_DIMENSIONS ? V(M) : e.type === u.hb.type && e.code === u.hb.NO_DIMENSIONS ? C(h) : V(t);
            }
        },
        221562: (e, t, i) => {
            i.d(t, { BX: () => b, Uk: () => u, Xj: () => m, ZP: () => O });
            var a = i(468811),
                s = i.n(a),
                o = i(595088),
                r = i(161821),
                n = i(184605),
                d = i(716233),
                l = i(774717);
            const _ = Object.freeze({ LocalFile: "local_file", Remote: "remote" }),
                u = Object.freeze({ Cancel: "cancel", Failure: "failure", Success: "success", Complete: "complete", Invalid: "invalid" }),
                m = Object.freeze({ InProgress: "in_progress", Complete: "complete", Failure: "failure", Canceled: "canceled" }),
                c = (e) => (e ? p(e) : void 0),
                p = (e) =>
                    (0, o.Z)(e)
                        .filter(([e, t]) => void 0 !== t)
                        .map(([t, i]) => ("object" == typeof i ? `${t}=${f(e[t])}` : `${t}=${String(i)}`))
                        .join(";"),
                f = (e) =>
                    (0, r.Z)(e)
                        .filter((e) => void 0 !== e)
                        .map(String)
                        .join(":"),
                b = Object.freeze({ Full: "full", Hash: "hash", Processing: "processing", SruUpload: "sru_upload", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish", Metadata: "metadata" }),
                h = Object.freeze({ SruUpload: "sru_upload_no_eager", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish_no_eager" }),
                g = { [b.SruUpload]: h.SruUpload, [b.UploadSubmitUntilSruFinish]: h.UploadSubmitUntilSruFinish },
                v = Object.freeze({ All: "all", Short: "short", Medium: "medium", Long: "long", XLong: "xlong", L90to140s: "l90to140s", L140to300s: "l140to300s", L300to600s: "l300to600s", L600to1200s: "l600to1200s", L1200to1800s: "l1200to1800s", L1800to2700s: "l1800to2700s", L2700to3600s: "l2700to3600s", L3600to4500s: "l3600to4500s", L4500to5400s: "l4500to5400s", L5400to6300s: "l5400to6300s", L6300to7200s: "l6300to7200s", L7200to10800s: "l7200to10800s", L10800to14400s: "l10800to14400s", LGT14400s: "lgt14400s" }),
                D = (e, t) => ((0, n.Z)(e) && (0, n.Z)(t) ? Math.round(t - e) : void 0),
                I = () => (window.performance ? window.performance.now() : Date.now()),
                L = (e, t) => (e === d.xz.DMGif || e === d.xz.TweetGif ? v.All : (e !== d.xz.DMVideo && e !== d.xz.TweetVideo && e !== d.xz.AmplifyVideo) || void 0 === t ? "" : t < 10 ? v.Short : t < 20 ? v.Medium : t < 45 ? v.Long : t < 90 ? v.XLong : t < 140 ? v.L90to140s : t < 300 ? v.L140to300s : t < 600 ? v.L300to600s : t < 1200 ? v.L600to1200s : t < 1800 ? v.L1200to1800s : t < 2700 ? v.L1800to2700s : t < 3600 ? v.L2700to3600s : t < 4500 ? v.L3600to4500s : t < 5400 ? v.L4500to5400s : t < 6300 ? v.L5400to6300s : t < 7200 ? v.L6300to7200s : t < 10800 ? v.L7200to10800s : t < 14400 ? v.L10800to14400s : v.LGT14400s);
            class O {
                constructor(e, t = !1) {
                    (this._pausedDuration = {}),
                        (this._pauseTimes = {}),
                        (this._startTimes = {}),
                        (this._eagerUploadDisabled = t),
                        (this._impressionId = s().v4()),
                        (this._keyPrefix = ((e) => {
                            const { isExternal: t, mediaCategory: i, videoDuration: a } = e;
                            return `${t ? _.Remote : _.LocalFile}:${i}:${L(i, a)}`;
                        })(e)),
                        this.setMetadata({ submitted: !1 });
                }
                reportOperationComplete(e, t) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        void 0 !== this._pauseTimes[e] && this.toggleOperationPaused(e, !1);
                        let i = D(this._startTimes[e], I());
                        if (this._keyPrefix && void 0 !== i) {
                            void 0 !== this._pausedDuration[e] && (i -= this._pausedDuration[e]);
                            const a = this._getKey(e, t);
                            this._record(a, i, e === b.Full ? this._metadata : e === b.Metadata ? this._fileMetadata : void 0), (this._startTimes[e] = void 0);
                        }
                    });
                }
                reportOperationStart(e, t = !1) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        if (void 0 === this._startTimes[e] && ((this._startTimes[e] = I()), this._keyPrefix && t)) {
                            const t = this._getKey(e, "start");
                            this._record(t, 0);
                        }
                    });
                }
                reportUploadSubmit() {
                    if (this._metadata?.submitted) return;
                    this.setMetadata({ submitted: !0 });
                    let e = D(this._startTimes[b.Full], I());
                    if (this._keyPrefix && void 0 !== e) {
                        void 0 !== this._pausedDuration[b.Full] && (e -= this._pausedDuration[b.Full]);
                        const t = this._getKey(b.Full, "submit");
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
                    if (t && void 0 === this._pauseTimes[e]) this._pauseTimes[e] = I();
                    else if (!t) {
                        const t = D(this._pauseTimes[e], I());
                        void 0 !== t && ((this._pausedDuration[e] = this._pausedDuration[e] ? this._pausedDuration[e] + t : t), (this._pauseTimes[e] = void 0));
                    }
                }
                _getKey(e, t) {
                    const i = (this._eagerUploadDisabled && g[e]) || e;
                    return `${this._keyPrefix}:${i}:${t}`;
                }
                _record(e, t, i) {
                    const a = { duration_ms: t, impression_id: this._impressionId, metadata: c(i) };
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
            i.d(t, { BW: () => b, SB: () => L, TO: () => T, Tz: () => g, U$: () => I, ff: () => h, vC: () => D, vn: () => O, xz: () => v, y$: () => p });
            var a = i(182056),
                s = i(323265),
                o = i(540387);
            const r = 1024,
                n = 1024 * r,
                d = 1,
                l = 4096,
                _ = 2048,
                u = 400,
                m = 1500,
                c = { Image: 5, Gif: 15, Avatar_Gif: 5 },
                p = { Duration: { 0: 140, 1: 600, 2: 7200 }, Size: { 0: 512, 1: 1024, 2: 40960 } },
                f = 600,
                b = { GIF_IS_TOO_LARGE: 1, VIDEO_IS_TOO_LARGE: 2 },
                h = { VIDEO_IS_TOO_LONG: 1 },
                g = { MEDIA_NOT_FOUND: 0, INVALID_MEDIA_CODE: 1 },
                v = Object.freeze({ AmplifyVideo: "amplify_video", CommunityBanner: "community_banner_image", ListBanner: "list_banner_image", TweetImage: "tweet_image", TweetVideo: "tweet_video", TweetGif: "tweet_gif", DMImage: "dm_image", DMVideo: "dm_video", DMGif: "dm_gif", Subtitles: "subtitles", ProfileBanner: "banner_image" }),
                D = Object.freeze({ Tweet: "tweet", Dm: "dm", CommunityBanner: "community_banner", ListBanner: "list_banner", ProfileBanner: "profile_banner", Avatar: "avatar", Verification: "verification", TwitterArticle: "twitter_article" }),
                I = (e) => {
                    const { height: t, left: i, width: a } = e,
                        s = Math.round(t / 2);
                    return `&salient_rect=${Math.round(i + a / 2)},${s},1,1`;
                };
            function L(e) {
                const t = e.featureSwitches?.isTrue("blue_longer_video_enabled"),
                    i = (function (e) {
                        return e.userClaims.isTrueAndEnabled("subscriptions_long_video_upload") || e.featureSwitches.isTrue("subscriptions_long_video_upload_override") || !1;
                    })(e);
                return t || i ? 1 : 0;
            }
            function O(e, t, i, b, h) {
                const g = b?.location,
                    v = L({ featureSwitches: e, userClaims: t });
                let I, O;
                if (i.isSubtitles) I = 0;
                else if (i.isGif)
                    switch (g) {
                        case D.Avatar:
                            I = e.getNumberValue("media_async_upload_max_avatar_gif_size", c.Avatar_Gif) * n;
                            break;
                        case D.Dm:
                        case D.Tweet:
                        default:
                            I = e.getNumberValue("media_async_upload_max_gif_size", c.Gif) * n;
                    }
                else {
                    if (!(i instanceof o.ZP))
                        return (function (e, t, i) {
                            let o;
                            switch (t) {
                                case D.Avatar:
                                    o = u;
                                    break;
                                case D.CommunityBanner:
                                case D.ListBanner:
                                case D.ProfileBanner:
                                    o = m;
                                    break;
                                default:
                                    o = s.ZP.isDesktopOS() ? l : _;
                            }
                            const d = e.getNumberValue("media_async_upload_max_image_size", c.Image) * n;
                            return a.Z.getConnectionInfo().then(
                                (a) => {
                                    let n = d;
                                    return "slow-2g" === a.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_slow_2g", 150) * r) : i || "2g" === a.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_2g", 250) * r) : "3g" === a.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_3g", 1500) * r) : "4g" !== a.effectiveType || s.ZP.isDesktopOS() || t !== D.Tweet || (o = l), { maxDimension: o, maxFileSize: Math.min(d, n) };
                                },
                                () => ({ maxDimension: o, maxFileSize: d }),
                            );
                        })(e, g, h);
                    if (1 === v) {
                        if ("dm" === g) O = e.getNumberValue("media_async_upload_longer_dm_video_max_video_duration", f);
                        else O = e.getNumberValue("media_async_upload_longer_video_max_video_duration", p.Duration[v]) * d;
                        I = e.getNumberValue("media_async_upload_longer_video_max_video_size", p.Size[v]) * n;
                    } else (O = e.getNumberValue("media_async_upload_max_video_duration", p.Duration[v]) * d), (I = e.getNumberValue("media_async_upload_max_video_size", p.Size[v]) * n);
                }
                return Promise.resolve({ maxFileSize: I, maxDuration: O });
            }
            function T(e) {
                return !(s.ZP.isIOS() && e.size > 3e8);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.directMessagesData-9f4db315.ad4d27ea.js.map

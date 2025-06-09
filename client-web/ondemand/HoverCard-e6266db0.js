"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.HoverCard-e6266db0", "loader.directMessagesData-63cb1cc4"],
    {
        782642: (e, t, i) => {
            i.d(t, { p: () => s });
            var r = i(202784),
                o = i(125363),
                a = i(601576);
            const s = () => {
                    const e = (0, o.I0)(),
                        t = n(),
                        i = r.useRef(null);
                    return (
                        r.useEffect(() => () => clearTimeout(i.current), [t]),
                        r.useCallback(
                            (r) => {
                                e((0, a.fz)(r)), (i.current = setTimeout(() => t(), 3e3));
                            },
                            [e, t],
                        )
                    );
                },
                n = () => {
                    const e = (0, o.I0)();
                    return r.useCallback(() => e((0, a.RS)()), [e]);
                };
        },
        320588: (e, t, i) => {
            i.d(t, { Mt: () => p, Sm: () => m, lg: () => c });
            var r = i(111677),
                o = i.n(r),
                a = i(615656),
                s = i(601576);
            const n = o().add55942,
                d = o().ib8f5f3c,
                l = o().e20fc756,
                u = o().hae1c934,
                c = { customErrorHandler: () => (0, s.mf)({ text: n }), showToast: !0 },
                m = { customErrorHandler: () => (0, s.mf)({ text: d }), showToast: !0 },
                p = {
                    customErrorHandler: ({ errors: e }) => {
                        if (e) {
                            if (e.filter((e) => e?.code === a.ZP.ListAdminRightsError).length) return (0, s.mf)({ text: l });
                        }
                        return (0, s.mf)({ text: u });
                    },
                    showToast: !0,
                };
        },
        879596: (e, t, i) => {
            i.d(t, { D: () => o });
            var r = i(111677);
            const o = { defaultToast: { text: i.n(r)().ca96fe6e }, showToast: !0 };
        },
        944681: (e, t, i) => {
            i.d(t, { k: () => o, Q: () => a });
            const r = (e, t, i) => {
                    const r = new Date();
                    let o = r.getFullYear() - e;
                    const a = r.getMonth() + 1 - t;
                    if (a < 0) o -= 1;
                    else if (0 === a) {
                        r.getDate() - i < 0 && (o -= 1);
                    }
                    return o;
                },
                o = (e, t, i, o = !1) => (e && t && i ? r(e, t, i) < 18 : o),
                a = () => new Date().getFullYear() - 120;
        },
        166677: (e, t, i) => {
            i.d(t, { $r: () => Y, O9: () => W, ZP: () => q, vK: () => J });
            var r = i(688715),
                o = i(111677),
                a = i.n(o),
                s = i(653843),
                n = i(122123),
                d = i(417144),
                l = i(884495),
                u = i(716233),
                c = i(540387);
            const m = a().b8098028,
                p = a().b36f4170,
                _ = a().hab3781e,
                f = a().f6c4fb02,
                h = a().g0af3dd2,
                g = a().b8c8b0be,
                w = a().ica6d718,
                b = a().b28d44f7({ limit: 15 }),
                I = a().i1db7d13,
                v = a().baac0ed7,
                S = I({ limit: 512 }),
                y = a().a22385bb,
                O = a().be0440bf,
                T = y({ limit: 140 }),
                E = a().feeba512,
                P = a().db123c02,
                A = a().db6001e7({ limit: 5 }),
                x = a().eb96d952,
                M = a().i859a9d4,
                D = a().b3880588,
                L = a().ca058b68,
                U = a().id24379c,
                F = a().h4d7cbcc,
                N = (0, r.ju)("https://support.x.com/articles/20156423"),
                C = (0, r.ju)("https://help.x.com/using-twitter/twitter-videos"),
                z = (e) => ({ text: e }),
                Z = (e) => ({ text: e, action: { label: M, link: N } }),
                B = (e) => ({ text: e, action: { label: M, link: C } }),
                V = { [s.Y7.GIF_IS_TOO_LARGE]: z(b), [s.Y7.CANNOT_BE_PROCESSED]: z(m), [s.Y7.FILE_IS_NOT_AN_IMAGE]: z(_) },
                R = { [d.d.ZERO_FILE_LENGTH]: z(p), [d.d.TIMEOUT]: z(D) },
                k = { ...R, [d.d.FILE_TOO_LARGE]: z(A), [d.d.UNSUPPORTED_MEDIA]: Z(P), [d.d.INVALID_MEDIA]: Z(E) },
                G = { ...R, [d.d.FILE_TOO_LARGE]: z(b), [d.d.UNSUPPORTED_MEDIA]: Z(h), [d.d.INVALID_MEDIA]: Z(f) },
                $ = { ...R, [d.d.FILE_TOO_LARGE]: z(S), [d.d.UNSUPPORTED_MEDIA]: B(w), [d.d.INVALID_MEDIA]: B(g) },
                j = Object.freeze({ RESIZE: "resize", UPLOAD: "upload", METADATA: "metadata", MAXDURATION: "maxduration", MAXSIZE: "maxsize" }),
                X = 1048576,
                H = 1073741824,
                W = (e) => Object.values(j).includes(e.type),
                K = (e) => {
                    const { code: t, limit: i, type: r } = e;
                    if (t)
                        switch (r) {
                            case j.MAXSIZE:
                                return t === u.BW.GIF_IS_TOO_LARGE ? z(b) : t === u.BW.VIDEO_IS_TOO_LARGE && void 0 !== i ? z(i >= H ? v({ limit: Math.round(i / H) }) : I({ limit: Math.round(i / X) })) : z(S);
                            case j.MAXDURATION:
                                return void 0 !== i ? (i > 140 ? z(O({ limit: Math.round(i / 60) })) : { text: y({ limit: Math.round(i) }), action: { label: l.Z.LongerVideoUpload.defaultContent.actionLabel, link: { pathname: `/i/premium_sign_up?referring_page=${l.Z.LongerVideoUpload.referringPage}`, external: !0 } } }) : z(T);
                            case j.RESIZE:
                                return V[t];
                            case j.UPLOAD:
                                if (e.isImage) return k[t];
                                if (e.isGif) return G[t];
                                if (e.isVideo) return $[t];
                                break;
                            case j.METADATA:
                                return z(F);
                        }
                },
                Y = (e) => {
                    if (W(e)) return e;
                };
            function q(e, t = U) {
                const i = Y(e);
                if (i) {
                    const r = e.message ? `${t} ${e.message}` : t;
                    return K(i) || z(r);
                }
            }
            function J(e, t = L) {
                return e.type === n.gK.type && e.code === n.gK.NO_DIMENSIONS ? z(x) : e.type === c.hb.type && e.code === c.hb.NO_DIMENSIONS ? B(g) : z(t);
            }
        },
        221562: (e, t, i) => {
            i.d(t, { BX: () => h, Uk: () => c, Xj: () => m, ZP: () => y });
            var r = i(468811),
                o = i.n(r),
                a = i(595088),
                s = i(161821),
                n = i(184605),
                d = i(716233),
                l = i(774717);
            const u = Object.freeze({ LocalFile: "local_file", Remote: "remote" }),
                c = Object.freeze({ Cancel: "cancel", Failure: "failure", Success: "success", Complete: "complete", Invalid: "invalid" }),
                m = Object.freeze({ InProgress: "in_progress", Complete: "complete", Failure: "failure", Canceled: "canceled" }),
                p = (e) => (e ? _(e) : void 0),
                _ = (e) =>
                    (0, a.Z)(e)
                        .filter(([e, t]) => void 0 !== t)
                        .map(([t, i]) => ("object" == typeof i ? `${t}=${f(e[t])}` : `${t}=${String(i)}`))
                        .join(";"),
                f = (e) =>
                    (0, s.Z)(e)
                        .filter((e) => void 0 !== e)
                        .map(String)
                        .join(":"),
                h = Object.freeze({ Full: "full", Hash: "hash", Processing: "processing", SruUpload: "sru_upload", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish", Metadata: "metadata" }),
                g = Object.freeze({ SruUpload: "sru_upload_no_eager", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish_no_eager" }),
                w = { [h.SruUpload]: g.SruUpload, [h.UploadSubmitUntilSruFinish]: g.UploadSubmitUntilSruFinish },
                b = Object.freeze({ All: "all", Short: "short", Medium: "medium", Long: "long", XLong: "xlong", L90to140s: "l90to140s", L140to300s: "l140to300s", L300to600s: "l300to600s", L600to1200s: "l600to1200s", L1200to1800s: "l1200to1800s", L1800to2700s: "l1800to2700s", L2700to3600s: "l2700to3600s", L3600to4500s: "l3600to4500s", L4500to5400s: "l4500to5400s", L5400to6300s: "l5400to6300s", L6300to7200s: "l6300to7200s", L7200to10800s: "l7200to10800s", L10800to14400s: "l10800to14400s", LGT14400s: "lgt14400s" }),
                I = (e, t) => ((0, n.Z)(e) && (0, n.Z)(t) ? Math.round(t - e) : void 0),
                v = () => (window.performance ? window.performance.now() : Date.now()),
                S = (e, t) => (e === d.xz.DMGif || e === d.xz.TweetGif ? b.All : (e !== d.xz.DMVideo && e !== d.xz.TweetVideo && e !== d.xz.AmplifyVideo) || void 0 === t ? "" : t < 10 ? b.Short : t < 20 ? b.Medium : t < 45 ? b.Long : t < 90 ? b.XLong : t < 140 ? b.L90to140s : t < 300 ? b.L140to300s : t < 600 ? b.L300to600s : t < 1200 ? b.L600to1200s : t < 1800 ? b.L1200to1800s : t < 2700 ? b.L1800to2700s : t < 3600 ? b.L2700to3600s : t < 4500 ? b.L3600to4500s : t < 5400 ? b.L4500to5400s : t < 6300 ? b.L5400to6300s : t < 7200 ? b.L6300to7200s : t < 10800 ? b.L7200to10800s : t < 14400 ? b.L10800to14400s : b.LGT14400s);
            class y {
                constructor(e, t = !1) {
                    (this._pausedDuration = {}),
                        (this._pauseTimes = {}),
                        (this._startTimes = {}),
                        (this._eagerUploadDisabled = t),
                        (this._impressionId = o().v4()),
                        (this._keyPrefix = ((e) => {
                            const { isExternal: t, mediaCategory: i, videoDuration: r } = e;
                            return `${t ? u.Remote : u.LocalFile}:${i}:${S(i, r)}`;
                        })(e)),
                        this.setMetadata({ submitted: !1 });
                }
                reportOperationComplete(e, t) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        void 0 !== this._pauseTimes[e] && this.toggleOperationPaused(e, !1);
                        let i = I(this._startTimes[e], v());
                        if (this._keyPrefix && void 0 !== i) {
                            void 0 !== this._pausedDuration[e] && (i -= this._pausedDuration[e]);
                            const r = this._getKey(e, t);
                            this._record(r, i, e === h.Full ? this._metadata : e === h.Metadata ? this._fileMetadata : void 0), (this._startTimes[e] = void 0);
                        }
                    });
                }
                reportOperationStart(e, t = !1) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        if (void 0 === this._startTimes[e] && ((this._startTimes[e] = v()), this._keyPrefix && t)) {
                            const t = this._getKey(e, "start");
                            this._record(t, 0);
                        }
                    });
                }
                reportUploadSubmit() {
                    if (this._metadata?.submitted) return;
                    this.setMetadata({ submitted: !0 });
                    let e = I(this._startTimes[h.Full], v());
                    if (this._keyPrefix && void 0 !== e) {
                        void 0 !== this._pausedDuration[h.Full] && (e -= this._pausedDuration[h.Full]);
                        const t = this._getKey(h.Full, "submit");
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
                    if (t && void 0 === this._pauseTimes[e]) this._pauseTimes[e] = v();
                    else if (!t) {
                        const t = I(this._pauseTimes[e], v());
                        void 0 !== t && ((this._pausedDuration[e] = this._pausedDuration[e] ? this._pausedDuration[e] + t : t), (this._pauseTimes[e] = void 0));
                    }
                }
                _getKey(e, t) {
                    const i = (this._eagerUploadDisabled && w[e]) || e;
                    return `${this._keyPrefix}:${i}:${t}`;
                }
                _record(e, t, i) {
                    const r = { duration_ms: t, impression_id: this._impressionId, metadata: p(i) };
                    l.IM(e, r, "media_upload");
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
            i.d(t, { BW: () => h, SB: () => S, TO: () => O, Tz: () => w, U$: () => v, ff: () => g, vC: () => I, vn: () => y, xz: () => b, y$: () => _ });
            var r = i(182056),
                o = i(323265),
                a = i(540387);
            const s = 1024,
                n = 1024 * s,
                d = 1,
                l = 4096,
                u = 2048,
                c = 400,
                m = 1500,
                p = { Image: 5, Gif: 15, Avatar_Gif: 5 },
                _ = { Duration: { 0: 140, 1: 600, 2: 7200 }, Size: { 0: 512, 1: 1024, 2: 40960 } },
                f = 600,
                h = { GIF_IS_TOO_LARGE: 1, VIDEO_IS_TOO_LARGE: 2 },
                g = { VIDEO_IS_TOO_LONG: 1 },
                w = { MEDIA_NOT_FOUND: 0, INVALID_MEDIA_CODE: 1 },
                b = Object.freeze({ AmplifyVideo: "amplify_video", CommunityBanner: "community_banner_image", ListBanner: "list_banner_image", TweetImage: "tweet_image", TweetVideo: "tweet_video", TweetGif: "tweet_gif", DMImage: "dm_image", DMVideo: "dm_video", DMGif: "dm_gif", Subtitles: "subtitles", ProfileBanner: "banner_image" }),
                I = Object.freeze({ Tweet: "tweet", Dm: "dm", CommunityBanner: "community_banner", ListBanner: "list_banner", ProfileBanner: "profile_banner", Avatar: "avatar", Verification: "verification", TwitterArticle: "twitter_article" }),
                v = (e) => {
                    const { height: t, left: i, width: r } = e,
                        o = Math.round(t / 2);
                    return `&salient_rect=${Math.round(i + r / 2)},${o},1,1`;
                };
            function S(e) {
                const t = e.featureSwitches?.isTrue("blue_longer_video_enabled"),
                    i = (function (e) {
                        return e.userClaims.isTrueAndEnabled("subscriptions_long_video_upload") || e.featureSwitches.isTrue("subscriptions_long_video_upload_override") || !1;
                    })(e);
                return t || i ? 1 : 0;
            }
            function y(e, t, i, h, g) {
                const w = h?.location,
                    b = S({ featureSwitches: e, userClaims: t });
                let v, y;
                if (i.isSubtitles) v = 0;
                else if (i.isGif)
                    switch (w) {
                        case I.Avatar:
                            v = e.getNumberValue("media_async_upload_max_avatar_gif_size", p.Avatar_Gif) * n;
                            break;
                        case I.Dm:
                        case I.Tweet:
                        default:
                            v = e.getNumberValue("media_async_upload_max_gif_size", p.Gif) * n;
                    }
                else {
                    if (!(i instanceof a.ZP))
                        return (function (e, t, i) {
                            let a;
                            switch (t) {
                                case I.Avatar:
                                    a = c;
                                    break;
                                case I.CommunityBanner:
                                case I.ListBanner:
                                case I.ProfileBanner:
                                    a = m;
                                    break;
                                default:
                                    a = o.ZP.isDesktopOS() ? l : u;
                            }
                            const d = e.getNumberValue("media_async_upload_max_image_size", p.Image) * n;
                            return r.Z.getConnectionInfo().then(
                                (r) => {
                                    let n = d;
                                    return "slow-2g" === r.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_slow_2g", 150) * s) : i || "2g" === r.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_2g", 250) * s) : "3g" === r.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_3g", 1500) * s) : "4g" !== r.effectiveType || o.ZP.isDesktopOS() || t !== I.Tweet || (a = l), { maxDimension: a, maxFileSize: Math.min(d, n) };
                                },
                                () => ({ maxDimension: a, maxFileSize: d }),
                            );
                        })(e, w, g);
                    if (1 === b) {
                        if ("dm" === w) y = e.getNumberValue("media_async_upload_longer_dm_video_max_video_duration", f);
                        else y = e.getNumberValue("media_async_upload_longer_video_max_video_duration", _.Duration[b]) * d;
                        v = e.getNumberValue("media_async_upload_longer_video_max_video_size", _.Size[b]) * n;
                    } else (y = e.getNumberValue("media_async_upload_max_video_duration", _.Duration[b]) * d), (v = e.getNumberValue("media_async_upload_max_video_size", _.Size[b]) * n);
                }
                return Promise.resolve({ maxFileSize: v, maxDuration: y });
            }
            function O(e) {
                return !(o.ZP.isIOS() && e.size > 3e8);
            }
        },
        42508: (e, t, i) => {
            i.d(t, { Z: () => r });
            const r = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, t, i) => {
            i.d(t, { ZP: () => o, n5: () => s });
            var r = i(42508);
            const o = ({ displaySensitiveMedia: e, isNotFound: t, isSuspended: i, isWithheld: r, user: o, userProfileInterstitialType: s, viewerUserId: n }) => {
                    const d = !!n && n === o.id_str,
                        l = o.blocked_by,
                        u = o.blocking,
                        c = a({ displaySensitiveMedia: e, isOwnProfile: d, user: o, userProfileInterstitialType: s }),
                        m = (d || !r) && !i;
                    return { avatar: d || (!c && !t && !i && !r), badges: d || !r, description: d || (!u && !l && !c && !i && !r), followButton: !(d || l || c || t || i || r), followersYouKnow: !d && !l && !u && !c && !t && !i && !r && (o.following || !o.protected), followIndicator: !r, fullName: m, label: m, stats: d || (!l && !c && !i && !r), subscriptionsCount: d || !o.has_hidden_subscriptions_on_profile };
                },
                a = ({ displaySensitiveMedia: e, isOwnProfile: t, user: i, userProfileInterstitialType: o }) => (o === r.Z.SensitiveMedia || o === r.Z.OffensiveProfileContent) && !(t || i.following || e),
                s = ({ isOwnProfile: e, isSoftBlockEnabled: t = !1, user: i }) => {
                    const r = i.blocked_by,
                        o = i.protected && !i.following;
                    return t ? e || !o : e || (!o && !r);
                };
        },
        946208: (e, t, i) => {
            i.d(t, { Id: () => r, ZP: () => s, h_: () => o });
            i(543673), i(240753), i(128399);
            const r = [".srt", "text/plain", ""],
                o = (e) => -1 !== r.indexOf(e.type),
                a = (e) =>
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
                                this.vtt = URL.createObjectURL(new Blob([a(e)], { type: "text/plain charset=UTF-8" }));
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
            i.d(t, { Wv: () => o, ZP: () => s, hb: () => a, jn: () => r });
            i(571372), i(543673), i(240753), i(128399);
            const r = ["video/mp4", "video/quicktime"],
                o = (e) => -1 !== r.indexOf(e.type),
                a = { type: "video-load", NO_DIMENSIONS: 10, LOAD_FAILED: 11, TOO_LARGE: 12 };
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
                        new Promise((i, r) => {
                            const o = (e, t) => {
                                    const i = new Error(e);
                                    (i.code = t), (i.type = a.type), r(i);
                                },
                                s = document.createElement("video");
                            (s.onloadedmetadata = () => {
                                t || (s.videoWidth && s.videoHeight) ? i(s) : o("Video lacks height or width", a.NO_DIMENSIONS);
                            }),
                                (s.onerror = () => {
                                    o("Error loading image", a.LOAD_FAILED);
                                }),
                                (s.src = e);
                        }))(this.url, e).then((e) => {
                        const { duration: t, videoHeight: i, videoWidth: r } = e;
                        return (this.width = r), (this.height = i), (this.duration = t), (this.video = e), (this.isBrowserSupported = !(0 === i || 0 === r)), this;
                    });
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        806528: (e, t, i) => {
            i.d(t, { Bz: () => l, ZW: () => _, ey: () => c, fw: () => n, iG: () => p, wM: () => d });
            var r = i(499627),
                o = i(341276);
            const a = "geoLocation",
                s = Object.freeze({ permissionStatus: void 0, position: void 0 });
            const n = (e) => e[a],
                d = (e) => e[a].permissionStatus,
                l = (e) => e[a].position,
                u = "rweb/geoLocation/SET_PERMISSION_STATUS",
                c = (e) => ({ payload: e, type: u }),
                m = "rweb/geoLocation/SET_POSITION",
                p = () => (e, t) =>
                    f()
                        .then((t) => e({ payload: t, type: m }))
                        .catch((t) => (e(c(o.S.denied)), Promise.reject(t))),
                _ = () => (e, t) => (l(t()) ? Promise.resolve() : e(p())),
                f = () =>
                    new Promise((e, t) =>
                        navigator.geolocation.getCurrentPosition((t) => {
                            const i = { timestamp: t.timestamp, coords: { latitude: t.coords.latitude, longitude: t.coords.longitude, altitude: t.coords.altitude, accuracy: t.coords.accuracy, altitudeAccuracy: t.coords.altitudeAccuracy, heading: t.coords.heading, speed: t.coords.speed } };
                            return e(i);
                        }, t),
                    );
            r.Z.register({
                [a]: function (e = s, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case u:
                            return { ...e, permissionStatus: t.payload };
                        case m:
                            return { ...e, position: t.payload };
                        default:
                            return e;
                    }
                },
            });
        },
        341276: (e, t, i) => {
            i.d(t, { M: () => o, S: () => r });
            const r = Object.freeze({ granted: "granted", denied: "denied", prompt: "prompt" }),
                o = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 });
        },
        882122: (e, t, i) => {
            i.d(t, { Hq: () => w, c1: () => _, lP: () => h, og: () => f });
            var r = i(745123);
            var o = i(499627),
                a = i(917799),
                s = i(56519),
                n = i(919022);
            const d = "knownFollowers",
                l = `rweb/${d}`,
                u = [],
                c = (0, a.dg)(l, "FETCH_KNOWN_FOLLOWERS"),
                m = {};
            o.Z.register({
                [d]: function (e = m, t) {
                    if (!t) return e;
                    if (t.type === c.SUCCESS) {
                        const i = t.payload || {},
                            { total_count: r, users: o } = i && i.result,
                            { user_id: a } = t.meta || {};
                        return a ? { ...e, [a]: { knownFollowersCount: r, knownFollowerIds: o } } : e;
                    }
                    return e;
                },
            });
            const p = (e, t) => e[d][t],
                _ = (e, t) => {
                    if (t) {
                        const o = g(e, t);
                        return (i = n.ZP.selectMany(e, o)), (r = (e) => !!e), i.filter(r);
                    }
                    var i, r;
                    return u;
                },
                f = (e, t) => _(e, t).filter(({ name: e, profile_image_url_https: t }) => !!t?.length && !!e?.length),
                h = (e, t) => {
                    let i;
                    if (t) {
                        const r = p(e, t);
                        i = r?.knownFollowersCount;
                    }
                    return i;
                },
                g = (e, t) => {
                    const i = p(e, t);
                    return i?.knownFollowerIds || u;
                },
                w =
                    (e) =>
                    (t, i, { api: o }) =>
                        void 0 !== h(i(), e)
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, i, { api: o }) =>
                                          (0, a._O)(t, { request: o.withEndpoint(r.Z).fetchFollowersYouFollow, params: { user_id: e, count: 3, with_total_count: !0 } })({ actionTypes: c, context: "FETCH_KNOWN_FOLLOWERS", meta: { user_id: e } }, (e) => {
                                              if (e) {
                                                  const { entities: t } = e;
                                                  return t ? [(0, s.dP)(t)] : void 0;
                                              }
                                          })
                                  )(e),
                              );
        },
        286e3: (e, t, i) => {
            i.d(t, { Rc: () => m, nx: () => l });
            var r = i(499627),
                o = i(576469),
                a = i(390387);
            const s = "rweb.channelsTimelineBehavior",
                n = "channelsTimelineBehavior",
                d = Object.freeze({});
            const l = (e) => e[n],
                u = "rweb/channelsTimelineBehavior/UPDATE_LIST_RANKINGS",
                c = (e) => ({ payload: e, type: u }),
                m =
                    ({ listId: e, useRanked: t }) =>
                    (i, r, { userPersistence: a }) => {
                        const n = r(),
                            d = { ...l(n), [e]: { useRanked: t } };
                        i(c(d));
                        const u = o.Z.select(n, e);
                        return u && u.following ? a.get(s).then((i) => a.set(s, { ...i, [e]: { useRanked: t } })) : Promise.resolve();
                    };
            r.Z.register(
                {
                    [n]: function (e = d, t) {
                        return t && t.type === u ? { ...t.payload } : e;
                    },
                },
                () =>
                    (e, t, { userPersistence: i }) =>
                        (0, a.Qb)(t())
                            ? i.get(s).then((t) => {
                                  t && e(c(t));
                              })
                            : Promise.resolve(),
            );
        },
        537052: (e, t, i) => {
            i.d(t, { Hf: () => s, OA: () => o, mL: () => a });
            i(571372);
            var r = i(837880);
            function o(e, t) {
                const i = (0, r.Z)(t / 100, 0, 1),
                    o = n[e],
                    a = i * (o.max - o.min);
                return l(o.min + a, 3);
            }
            function a(e) {
                const t = (0, r.Z)(e, 0, 1);
                for (let e = 0; e < d.length; e++) {
                    const i = d[e];
                    if ((0 === e && t <= i.min) || (e === d.length - 1 && t >= i.max) || (t >= i.min && t < i.max)) {
                        let e = u(t, i.min, i.max);
                        return (e = l(e, 3)), [i.name, e];
                    }
                }
                throw new Error("unreachable");
            }
            const s = Object.freeze({ uploading: "uploading", processing: "processing" }),
                n = { [s.uploading]: { name: s.uploading, min: 0, max: 0.5 }, [s.processing]: { name: s.processing, min: 0.5, max: 1 } },
                d = [n.uploading, n.processing];
            function l(e, t) {
                const i = Math.pow(10, t);
                return Math.round(e * i) / i;
            }
            function u(e, t, i) {
                return (e - t) / (i - t);
            }
            !(function () {
                let e,
                    t = 0;
                for (const i of d) {
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
            i.d(t, { EM: () => c, K3: () => u, Xp: () => m });
            var r = i(882127),
                o = i(498510),
                a = (i(585488), i(277660)),
                s = i.n(a),
                n = i(708482),
                d = i(944681),
                l = i(535338);
            function u(e) {
                return (function (e) {
                    return (0, n.s)(e, _, {});
                })(e).then(
                    (e) =>
                        !p(e) &&
                        (function (e) {
                            return e?.user_preferences.allow_video_downloads ?? !0;
                        })(e),
                );
            }
            function c() {
                return p((0, l.p)(_, {}));
            }
            function m(e) {
                return (function (e) {
                    const t = e.user_results?.result;
                    if ("User" === t?.__typename) {
                        const e = t?.legacy_extended_profile?.birthdate;
                        if (e) {
                            const { day: t, month: i, year: r } = e;
                            return (0, d.k)(r, i, t, !0);
                        }
                    }
                    return !0;
                })(s()(f, e));
            }
            function p(e) {
                const t = e?.viewer?.user_results?.result;
                if ("User" === t?.__typename) {
                    const e = t?.legacy_extended_profile?.birthdate;
                    if (e) {
                        const { day: t, month: i, year: r } = e;
                        return (0, d.k)(r, i, t, !0);
                    }
                }
                return !0;
            }
            const _ = o.Z,
                f = r.Z;
        },
        497294: (e, t, i) => {
            i.d(t, { $i: () => me, C4: () => K, G$: () => Y, Q6: () => H, TU: () => J, WU: () => Q, _B: () => oe, _J: () => ie, _T: () => k, dD: () => re, gz: () => V, m3: () => R, o6: () => ne, oZ: () => pe, pJ: () => ue, rA: () => X });
            i(571372), i(136728);
            var r = i(99107),
                o = i(411916),
                a = i.n(o),
                s = i(10622),
                n = i.n(s),
                d = i(111677),
                l = i.n(d),
                u = i(205074),
                c = i(653843),
                m = i(514354),
                p = i(908478),
                _ = i(417144),
                f = i(904940),
                h = i(918621),
                g = i(829053),
                w = i(716233),
                b = i(166677),
                I = i(221562),
                v = i(755296),
                S = i(946208),
                y = i(540387),
                O = i(653798),
                T = i(499627),
                E = i(917799),
                P = i(390387),
                A = i(38562),
                x = i(601576),
                M = i(111531),
                D = i(537052);
            const L = l().g40ff2b4,
                U = "mediaUpload",
                F = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload2.json",
                N = `rweb/${U}`,
                C = [],
                z = "upload";
            class Z extends Error {
                constructor(e, { code: t, isGif: i, isImage: r, isVideo: o, type: a }) {
                    super(e), (this.code = t), (this.type = a), (this.isGif = !!i), (this.isImage = !!r), (this.isVideo = !!o);
                }
            }
            function B(e, t, i) {
                let o = null,
                    a = {},
                    s = {};
                if ((t.getNumberValue("optimized_sru_parameters_enabled") && (s = { sruParameterOverrides: { minSegmentBytes: t.getNumberValue("optimized_sru_parameters_min_segment_bytes"), idealUploadTimeMs: t.getNumberValue("optimized_sru_parameters_ideal_upload_time_ms"), maxSegmentBytes: t.getNumberValue("optimized_sru_parameters_max_segment_bytes"), clientsideSruUploadTimeoutMs: t.getNumberValue("optimized_sru_parameters_client_side_timeout_ms") } }), (0, v.s)().isLoggedIn)) {
                    const e = (0, h.ej)({ cookieName: r.qj, featureSwitches: t });
                    if (e) {
                        const t = i?.actAsUserId;
                        s.sruHeaders = { ...(0, g.L)(t), "x-twitter-auth-type": "OAuth2Session", authorization: (0, r.Oj)(!1), [r.d4]: e };
                    }
                }
                return (
                    i?.useLongVideoEndpoint && (s.uploadUrl = F),
                    {
                        upload(t) {
                            (o = new _.Z(e, s)), (a = t), o.upload(a);
                        },
                        amendUpload(e) {
                            (a = { ...a, ...e }), o && o.upload(a);
                        },
                        uploadExternalMedia(t, i, r, a) {
                            (o = new _.Z(e, s)), o.uploadExternalMedia(t, i, r, a);
                        },
                        cancel() {
                            o && o.cancel();
                        },
                    }
                );
            }
            const V = (e) => e[U],
                R = (e, t) => {
                    const i = Array.isArray(t) ? t : [t];
                    return e[U].filter((e) => i.some((t) => t === e.id));
                },
                k = (e, t) => {
                    const i = R(e, t);
                    if (!i.length) return 0;
                    const r = i.reduce((e, t) => e + (t.uploadProgress || 0), 0) / i.length;
                    return Math.min(r, 1);
                },
                G = "rweb/mediaUpload/ADD_MEDIA",
                $ = (e) => ({ payload: e, type: G });
            let j = 1;
            function X(e, t) {
                return (i, r, { featureSwitches: o, relayEnvironment: a }) => {
                    const s = Array.from(e, (e) => {
                            if ((0, y.Wv)(e)) {
                                const i = new y.ZP(e, t.isAmplify);
                                if ((0, w.TO)(e)) {
                                    const e = o.isTrue("responsive_web_hevc_upload_preview_enabled") && o.isTrue("responsive_web_composer_configurable_video_player_enabled");
                                    return i.withDimensionsAndOrientation(e);
                                }
                                return Promise.resolve(i);
                            }
                            return (0, S.h_)(e) ? Promise.resolve(new S.ZP(e)) : new u.ZP(e).withDimensionsAndOrientation();
                        }),
                        d = i((e, t, { relayEnvironment: i }) =>
                            n()(i, O.S, {}, { fetchPolicy: "store-or-network" })
                                .toPromise()
                                .then((e) => {
                                    const t = e?.viewer?.user_results?.result;
                                    return "User" === t?.__typename && (t?.sensitive_media_settings?.can_user_allow_sensitive_content ?? !1);
                                })
                                .catch(() => !1),
                        ).then((e) => e && (0, M.K3)(a));
                    return Promise.all(s)
                        .then(
                            (e) => {
                                const r = i(
                                    (function (e, t) {
                                        return (i, r, { featureSwitches: o, userClaims: a }) => {
                                            const { uploadIds: s = [], altTexts: n = [] } = t,
                                                d = (0, A.IX)(r()),
                                                l = (Array.isArray(e) ? e : [e]).map((e, l) => {
                                                    const m = o.isTrue("responsive_web_media_upload_metrics_enabled");
                                                    let p;
                                                    t.location && (p = _e(t.location, e, !1, { featureSwitches: o, userClaims: a }));
                                                    const _ = e instanceof y.ZP ? e.duration : void 0,
                                                        f = e instanceof u.ZP ? e.orientation : void 0,
                                                        h = m && p ? new I.ZP({ isExternal: !1, mediaCategory: p, videoDuration: _ }, d) : void 0,
                                                        g = o.isTrue("responsive_web_media_upload_md5_hashing_enabled") && e.isImage && e instanceof u.ZP,
                                                        b = o.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte");
                                                    return (
                                                        e instanceof y.ZP &&
                                                            (function (e) {
                                                                const { video: t } = e;
                                                                t &&
                                                                    ((t.currentTime = Math.min(0.1, t.duration)),
                                                                    t.addEventListener("timeupdate", () => {
                                                                        const i = document.createElement("canvas"),
                                                                            { height: r, width: o } = e;
                                                                        (i.width = o), (i.height = r);
                                                                        i.getContext("2d").drawImage(t, 0, 0, o, r), (e.thumbnail = i.toDataURL("image/png"));
                                                                    }));
                                                            })(e),
                                                        h?.setFileMetadata({ fileSize: e.size, mime: e.type, duration: _, width: e.width, height: e.height, orientation: f }),
                                                        (0, w.vn)(o, a, e, t, d).then(({ maxDimension: d, maxFileSize: m }) => {
                                                            const p = e.isImage && e instanceof u.ZP && (0, c.m2)(e, { maxFileSize: m, maxDimension: d, jpgPixelsPerByteForResize: b }),
                                                                _ = (0, w.SB)({ featureSwitches: o, userClaims: a }),
                                                                f = { useLongVideoEndpoint: e.isVideo && _ >= 1, actAsUserId: (0, P.dY)(r()) },
                                                                I = p ? void 0 : B(e.fileHandle, o, f),
                                                                v = W({ originalMediaFile: e, mediaFile: e, mediaFileHash: g ? void 0 : null, needsProcessing: p, location: t.location, uploadId: s[l] ?? "", reporter: h, uploader: I, mediaMetadata: { altText: n[l] }, abortController: g ? new AbortController() : void 0 });
                                                            return g && he(i, r, v.id, e.fileHandle, v.reporter, v.abortController), v;
                                                        })
                                                    );
                                                });
                                            return Promise.all(l).then((e) => (i($(e)), e));
                                        };
                                    })(e, t),
                                );
                                return r;
                            },
                            (e) => {
                                const t = (0, b.vK)(e);
                                return t && i((0, x.fz)(t)), Promise.reject(e);
                            },
                        )
                        .then((e) =>
                            d
                                .then((t) => {
                                    if (t) for (const t of e) i(oe(t.id, { ...t.mediaMetadata, allowDownloadStatus: { allowDownload: !0 } }));
                                    return e;
                                })
                                .catch(() => e),
                        );
                };
            }
            const H =
                ({ height: e, mediaCategory: t, mediaType: i, previewMediaType: r, previewUrl: o, sourceUrl: a, stillMediaUrl: s, width: n }) =>
                (d, l, { featureSwitches: u }) => {
                    const c = u.isTrue("responsive_web_media_upload_metrics_enabled") && t ? new I.ZP({ isExternal: !0, mediaCategory: t }) : void 0;
                    c?.reportOperationStart(I.BX.Full, !0);
                    const m = { actAsUserId: (0, P.dY)(l()) },
                        p = W({ externalMediaDetails: { mediaCategory: t, mediaType: i, previewUrl: o || a, previewMediaType: r || i, sourceUrl: a, stillMediaUrl: s, width: n, height: e }, reporter: c, uploader: B(null, u, m) });
                    return d($(p)), c?.toggleOperationPaused(I.BX.Full, !0), [p];
                };
            function W(e) {
                const t = { ...e, id: j, uploadFailed: !1, uploading: !1, uploadProgress: 1, mediaMetadata: void 0 };
                return (j += 1), t.uploadId || ((t.uploadId = ""), (t.uploadProgress = 0)), t;
            }
            const K =
                    (e) =>
                    (t, i, { featureSwitches: r, userClaims: o }) => {
                        const [a] = R(i(), e);
                        if (!a) return Promise.reject(new Error("media item not found"));
                        const { abortController: s, cropData: n, id: d, location: l, mediaFile: m, needsProcessing: p, originalMediaFile: _ } = a;
                        if (!_) return Promise.reject(new Error("media item not found"));
                        const f = r.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte"),
                            h = (0, A.IX)(i()),
                            g = { location: l };
                        return (0, w.vn)(r, o, _, g, h).then((e) => {
                            const o = { cropData: n, jpgPixelsPerByteForResize: f, maxFileSize: e.maxFileSize, maxDimension: e.maxDimension },
                                l = e.maxFileSize || 0,
                                h = e.maxDuration || 0;
                            if (_.isImage && _ instanceof u.ZP)
                                return p
                                    ? (0, c.ZP)(_, o)
                                          .then(
                                              (e) => new u.ZP(e).withDimensionsAndOrientation(),
                                              (e) => {
                                                  throw (s?.abort(), (e.type = "resize"), e);
                                              },
                                          )
                                          .then((e) => {
                                              _ !== m && m && m.dispose(), a.uploader && a.uploader.cancel && a.uploader.cancel();
                                              const o = { actAsUserId: (0, P.dY)(i()) },
                                                  s = B(e.fileHandle, r, o),
                                                  n = t(ie({ id: d, mediaFile: e, needsProcessing: !1, uploadPromise: void 0, uploadProgress: 0, uploading: !1, uploadId: void 0, uploader: s }));
                                              return (a.uploadId || a.uploading) && t(me([d])), n;
                                          })
                                    : Promise.resolve(a);
                            if (_.size > l) {
                                const e = Error("Exceeds size limit");
                                return ([e.type, e.code, e.limit] = ["maxsize", _.isGif ? w.BW.GIF_IS_TOO_LARGE : w.BW.VIDEO_IS_TOO_LARGE, l]), Promise.reject(e);
                            }
                            if (_.isVideo && _ instanceof y.ZP && _.duration > h) {
                                const e = Error("Exceeds duration limit");
                                return ([e.type, e.code, e.limit] = ["maxduration", w.ff.VIDEO_IS_TOO_LONG, h]), Promise.reject(e);
                            }
                            return Promise.resolve(a);
                        });
                    },
                Y = (e, t) => (i, r) => {
                    const { onFailure: o } = t,
                        s = [];
                    return new Promise((t, r) => {
                        const n = (e) => {
                            if (!e.length) return t(s);
                            const [r] = e;
                            a()(() => {
                                r.reporter?.reportOperationStart(I.BX.Full, !0),
                                    r.reporter?.reportOperationStart([I.BX.Processing, I.BX.Metadata]),
                                    r.reporter?.reportOperationComplete(I.BX.Metadata, I.Uk.Complete),
                                    i(K(r.id)).then(
                                        (t) => {
                                            s.push(t), t?.reporter?.reportOperationComplete(I.BX.Processing, I.Uk.Success), t?.reporter?.toggleOperationPaused(I.BX.Full, !0), n(e.slice(1));
                                        },
                                        (t) => {
                                            const a = (0, b.ZP)(t, L);
                                            a && i((0, x.fz)(a));
                                            const { code: s, message: d, name: l, type: u } = t;
                                            r.reporter?.setMetadata({ reason: { name: l, message: d, code: s } });
                                            const m = "maxsize" === u || "maxduration" === u || ("resize" === u && (s === c.Y7.FILE_IS_NOT_AN_IMAGE || s === c.Y7.GIF_IS_TOO_LARGE)) ? I.Uk.Invalid : I.Uk.Failure;
                                            r.reporter?.reportOperationComplete([I.BX.Full, I.BX.Processing], m), o && o(r.id), n(e.slice(1));
                                        },
                                    );
                            });
                        };
                        n(e);
                    });
                },
                q = "rweb/mediaUpload/REMOVE_MEDIA",
                J = (e) => ({ payload: Array.isArray(e) ? e : [e], type: q });
            function Q(e) {
                return (t, i) => {
                    R(i(), e).forEach((e) => {
                        const { abortController: t, mediaFile: i, originalMediaFile: r, reporter: o, uploader: a } = e;
                        t?.abort(), a && a.cancel && a.cancel(), o?.reportOperationComplete(I.BX.Full, I.Uk.Cancel), i && i.dispose(), r && r.dispose();
                    }),
                        t(J(e));
                };
            }
            const ee = "rweb/mediaUpload/UPDATE_MEDIA",
                te = (e) => ({ payload: e, type: ee });
            function ie(e) {
                return (t, i) => {
                    t(te(e));
                    const [r] = R(i(), e.id);
                    return r;
                };
            }
            function re(e) {
                return (t, i) => {
                    const [r] = R(i(), e);
                    r.uploader?.cancel(), t(me(e));
                };
            }
            function oe(e, t) {
                return (i) => i(ie({ id: e, mediaMetadata: t }));
            }
            const ae = "SEND_METADATA",
                se = E.dg(N, ae);
            function ne(e) {
                return (t, i, { api: r }) => E._O(t, { params: e, request: r.withEndpoint(f.Z).metadataCreate })({ actionTypes: se, context: ae });
            }
            const de = "ATTACH_SUBTITLES",
                le = E.dg(N, de);
            function ue(e) {
                return (t, i, r) => {
                    const { subtitlesDisplayName: o, subtitlesLang: a, subtitlesMediaUploadId: s, videoMediaUploadId: n } = e,
                        { api: d, featureSwitches: l, userClaims: u } = r,
                        c = fe(e.mediaItem, !1, { featureSwitches: l, userClaims: u }) || "";
                    return E._O(t, { params: { videoMediaUploadId: n, videoMediaCategory: c, subtitlesLang: a, subtitlesMediaUploadId: s, subtitlesDisplayName: o }, request: d.withEndpoint(f.Z).attachSubtitles })({ actionTypes: le, context: de });
                };
            }
            const ce = (e) => {
                const t = e.trimData;
                if (t) return `${t.startTime.toFixed(3)}-${t.endTime.toFixed(3)}`;
            };
            const me =
                    (e, t = Object.freeze({})) =>
                    (i, r, { featureSwitches: o, userClaims: a }) => {
                        const s = R(r(), e),
                            n = (e) => i(ie(e));
                        function d(e, i = !1) {
                            const r = o.isTrue("responsive_web_media_upload_md5_hashing_enabled"),
                                { abortController: s, id: l, mediaFile: c, mediaFileHash: m, reporter: p, uploader: f } = e,
                                h = r && c && c.isImage && c instanceof u.ZP,
                                g = void 0 === m;
                            return (
                                p?.toggleOperationPaused(I.BX.Full, !1),
                                t.withoutReUpload && e.uploadId
                                    ? Promise.resolve(n({ id: l, uploadProgress: 1, uploading: !1 }))
                                    : (t.preUpload || (p?.reportOperationStart(I.BX.UploadSubmitUntilSruFinish), p?.reportUploadSubmit(), h && g && s?.abort(), e.uploading && f && f.amendUpload({ pauseBeforeFinalize: !1, trimRanges: ce(e) })),
                                      e.uploadPromise
                                          ? e.uploadPromise.then((t) => ({ ...t, mediaMetadata: e.mediaMetadata }))
                                          : f
                                            ? (function (e) {
                                                  const { featureSwitches: t, gifAsStaticImage: i, mediaItem: r, updateMediaItem: o, uploadMediaItem: a, uploadOptions: s, userClaims: n } = e,
                                                      { abortController: d, externalMediaDetails: l, id: u, reporter: c, uploader: m } = r,
                                                      p = new Promise((e, p) => {
                                                          const f = (t) => {
                                                                  c?.setMetadata({ mediaId: t }), c?.reportOperationComplete([I.BX.Full, I.BX.UploadSubmitUntilSruFinish], I.Uk.Success), e(o({ id: u, uploadId: t, uploadProgress: 1, uploading: !1 }));
                                                              },
                                                              h = (e, t, i) => {
                                                                  c?.setMetadata({ mediaId: i }), "uploading" === t ? (o({ id: u, uploadProgress: D.OA("uploading", e) }), 100 === e && c?.reportOperationComplete(I.BX.SruUpload, I.Uk.Success)) : "processing" === t && o({ id: u, uploadProgress: D.OA("processing", e) });
                                                              },
                                                              g = () => {
                                                                  c?.toggleOperationPaused(I.BX.Full, !0);
                                                              },
                                                              b = (t) => {
                                                                  const { code: s, detail_message: n, maxSizeBytes: l, mediaId: f, message: h, name: g } = t;
                                                                  if (r.mediaFile?.isGif && !i && s === w.Tz.INVALID_MEDIA_CODE) m?.amendUpload({ pauseBeforeFinalize: !1 }), o({ id: u, uploadProgress: 0, uploading: !1, uploadFailed: !1, uploadPromise: void 0 }), a(r, !0).then(e).catch(p);
                                                                  else {
                                                                      d?.abort(), o({ id: u, uploadProgress: 0, uploading: !1, uploadFailed: !0, uploadError: { code: s, message: h, detail_message: n, maxSizeBytes: l }, uploadPromise: void 0 });
                                                                      const e = new Z(h ? `${h}` : `Media upload failed [Error code: ${s}]${f ? ` ${f}` : ""}`, { code: s, type: z, isGif: !!r.externalMediaDetails || (r.mediaFile && r.mediaFile.isGif), isImage: r.mediaFile && r.mediaFile.isImage, isVideo: r.mediaFile && r.mediaFile instanceof y.ZP && r.mediaFile.isVideo }),
                                                                          t = s === _.d.CANCELED ? I.Uk.Cancel : I.Uk.Failure;
                                                                      c?.setMetadata({ reason: { name: g, message: h, code: s } }), c?.reportOperationComplete([I.BX.Full, I.BX.SruUpload, I.BX.UploadSubmitUntilSruFinish], t), p(e);
                                                                  }
                                                              };
                                                          if (l && r.uploader) r.uploader?.uploadExternalMedia(l.sourceUrl, l.mediaType, l.mediaCategory, { success: f, progress: h, error: b, mediaItem: r });
                                                          else if (r.uploader) {
                                                              const { extraInitParams: e = "", preUpload: o = !1 } = s,
                                                                  { enable_1080p_variant: a, mediaFile: d, mediaFileHash: l } = r,
                                                                  u = t.isTrue("media_async_upload_longer_video_resolution_selector"),
                                                                  m = d && d.size > 1e8 && t.isTrue("rweb_media_multi_requests_enabled"),
                                                                  p = fe(r, i, { featureSwitches: t, userClaims: n }),
                                                                  _ = p ? `&media_category=${p}` : "";
                                                              c?.reportOperationStart(I.BX.SruUpload), r.uploader?.upload({ success: f, progress: h, pause: g, error: b, extraInitParams: e + _, extraFinalizeParams: l ? `&original_md5=${l}` : void 0, trimRanges: ce(r), pauseBeforeFinalize: o, withMultiRequests: m, withMultiRequestsDefaultPoolSize: t.getNumberValue("rweb_media_multi_requests_default_pool_size", d && d.size > 2e9 ? 4 : 1), enable_1080p_variant: !u || a, mediaItem: r });
                                                          }
                                                      });
                                                  return o({ id: u, uploading: !0, uploadFailed: !1, uploadProgress: 0, uploadPromise: p }), p;
                                              })({ mediaItem: e, updateMediaItem: n, uploadMediaItem: d, gifAsStaticImage: i, uploadOptions: t, featureSwitches: o, userClaims: a })
                                            : Promise.reject(new Error("Media has no uploader. Did you forget to call resizeMedia?")))
                            );
                        }
                        const l = s.map((e) => d(e));
                        return Promise.all(l).catch((e) => {
                            throw (e.type || (e.type = z), e);
                        });
                    },
                pe = (e, t) => {
                    const i = me(e, { ...t, preUpload: !0 });
                    return (...e) =>
                        i(...e).catch((e) => {
                            if (e.code !== _.d.CANCELED) throw e;
                        });
                };
            function _e(e, t, i, r) {
                const o = e === w.vC.Tweet || e === w.vC.TwitterArticle,
                    a = e === w.vC.TwitterArticle;
                if (t.isSubtitles) return w.xz.Subtitles;
                if (t.isGif && !i) return o ? w.xz.TweetGif : w.xz.DMGif;
                if (t.isAmplify) return w.xz.AmplifyVideo;
                if (t.isVideo) {
                    const e = t.duration || 0,
                        { featureSwitches: i, userClaims: s } = r,
                        n = (0, w.SB)({ featureSwitches: i, userClaims: s }),
                        d = i.getNumberValue("media_async_upload_amplify_duration_threshold", w.y$.Duration[n]);
                    return "number" == typeof n && 1 === n && e > d ? w.xz.AmplifyVideo : a ? w.xz.TweetVideo : o ? w.xz.AmplifyVideo : w.xz.DMVideo;
                }
                return o ? w.xz.TweetImage : w.xz.DMImage;
            }
            function fe(e, t, i) {
                const { location: r, mediaFile: o } = e;
                if (!r || !o) return null;
                switch (r) {
                    case w.vC.Tweet:
                    case w.vC.Dm:
                    case w.vC.TwitterArticle:
                        return _e(r, o, t, i);
                    case w.vC.CommunityBanner:
                        return w.xz.CommunityBanner;
                    case w.vC.ListBanner:
                        return w.xz.ListBanner;
                    case w.vC.ProfileBanner:
                        return w.xz.ProfileBanner;
                    default:
                        return null;
                }
            }
            const he = (e, t, i, r, o, a) => {
                o?.reportOperationStart(I.BX.Hash, !0),
                    o?.setMetadata({ hashState: I.Xj.InProgress }),
                    (0, m.Q)(r, a)
                        .then((r) => {
                            const [a] = R(t(), i);
                            if (!a) {
                                throw new Z("Media item was removed", { code: m.S.HASHING_ABORTED, type: z, isGif: !1, isImage: !0, isVideo: !1 });
                            }
                            e(ie({ id: i, mediaFileHash: r, abortController: void 0 }));
                            const { uploadPromise: s, uploader: n, uploading: d } = a;
                            s && d && n && n.amendUpload({ extraFinalizeParams: r ? `&original_md5=${r}` : void 0 }), o?.setMetadata({ hashState: I.Xj.Complete }), o?.reportOperationComplete(I.BX.Hash, I.Uk.Success);
                        })
                        .catch((r) => {
                            const [a] = R(t(), i);
                            a && e(ie({ id: i, mediaFileHash: null, abortController: void 0 })), r.code === m.S.HASHING_ABORTED ? (o?.setMetadata({ hashState: I.Xj.Canceled }), o?.reportOperationComplete(I.BX.Hash, I.Uk.Cancel)) : (o?.setMetadata({ hashState: I.Xj.Failure }), o?.reportOperationComplete(I.BX.Hash, I.Uk.Failure));
                        });
            };
            T.Z.register({
                [U]: function (e = C, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case G:
                            return t.payload ? e.concat(t.payload) : e;
                        case q: {
                            const i = t.payload;
                            return i && i.length ? e.filter((e) => -1 === i.indexOf(e.id)) : e;
                        }
                        case ee: {
                            const i = t.payload;
                            return i
                                ? e.map((e) => {
                                      if (e.id === i.id) {
                                          const t = e.needsProcessing || (i.hasOwnProperty("cropData") && !(0, p.Z)(i.cropData, e.cropData));
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
        466380: (e, t, i) => {
            i.d(t, { Z: () => m });
            var r = i(807469),
                o = i(502909),
                a = i(600823);
            const s = (0, o.ZP)({ namespace: "topics" }),
                n = (0, o.tb)(s, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(r.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                d = {
                    addTopic: function (e) {
                        return c.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (i, r) => (i(s.updateOne(e, { following: t })), Promise.resolve()),
                },
                l = (e, t, i) => {
                    const { entityId: r } = t.meta,
                        o = e.entities[r];
                    return o ? ((e, t, i, r) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [i.id]: { ...i, ...r() } } } : e))(e, t, o, i) : e;
                },
                u = { follow: (0, o.Tx)(s, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).follow, reducer: (e, t) => l(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, o.Tx)(s, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).unfollow, reducer: (e, t) => l(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, o.Tx)(s, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).notInterested, reducer: (e, t) => l(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, o.Tx)(s, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).undoNotInterested, reducer: (e, t) => l(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                c = { ...s, ...n, ...d, ...u, customActionTypes: (0, o.X7)(u) },
                m = a.Z.register(c);
        },
        112859: (e, t, i) => {
            i.d(t, { Z: () => c });
            var r = i(202784),
                o = i(154003),
                a = i(111677),
                s = i.n(a),
                n = i(457566),
                d = i(725516),
                l = i(979512);
            const u = s().fc7db594;
            function c({ screenName: e }) {
                const { openGrok: t } = (0, l.Z)(),
                    i = (0, d.z)(),
                    a = r.useCallback(() => {
                        t({ text: `@${e}`, autoSubmit: !0, source: "user_profile_summary" }), i.scribe({ element: "grok-user-info-button", action: "click" });
                    }, [i, t, e]);
                return r.createElement(o.ZP, { icon: r.createElement(n.x1, null), onPress: a }, u);
            }
        },
        510588: (e, t, i) => {
            i.d(t, { $5: () => c, By: () => g, DV: () => v, Fz: () => f, Ge: () => b, Ns: () => T, Wy: () => _, _g: () => y, ax: () => w, cx: () => h, l1: () => S, tt: () => O, xh: () => p });
            var r = i(614983),
                o = i.n(r),
                a = i(842799),
                s = i(286e3),
                n = i(576469),
                d = i(919022),
                l = i(312771);
            const u = { url: "https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png", width: 1125, height: 375 },
                c = (e, t) => {
                    const i = _(e, t),
                        r = w(e, t),
                        o = b(e, t);
                    return i ? `/i/lists/${i}` : r && o ? `/${r}/lists/${o}` : "";
                },
                m = (e, t) => t.match.params.listId || void 0,
                p = (e, t) => {
                    const i = t.match.params.listId;
                    return o()(i, "listId should always be specified"), i;
                },
                _ = (e, t) =>
                    m(0, t) ||
                    ((e, t) => {
                        const i = f(e, t);
                        return i && i.id_str;
                    })(e, t),
                f = (e, t) => {
                    const i = m(0, t);
                    return i ? n.Z.select(e, i) : n.Z.selectByKey(e, I(e, t));
                },
                h = (e, t) => {
                    const i = f(e, t);
                    return i && i.following;
                },
                g = (e, t) => {
                    const i = f(e, t);
                    return i && i.name;
                },
                w = (e, t) => {
                    const i = m(0, t);
                    return t.match.params.screenName || void 0 || (i && n.Z.selectListAuthorScreenName(e, i));
                },
                b = (e, t) => {
                    const i = f(e, t);
                    return t.match.params.slug || (i && i.slug);
                },
                I = (e, t) => {
                    const i = t.match.params.slug,
                        r = t.match.params.screenName;
                    return i && r ? (0, a.Z)(r, i) : "";
                },
                v = (e, t) => {
                    const i =
                        _(e, t) ||
                        ((e, t) => {
                            const i = b(e, t),
                                r = w(e, t);
                            return i && r ? (0, a.Z)(r, i) : "";
                        })(e, t);
                    return n.Z.selectFetchStatus(e, i) || l.ZP.NONE;
                },
                S = (e, t) => {
                    const i = w(e, t);
                    return i ? d.ZP.selectByScreenName(e, i) : void 0;
                },
                y = (e, t) => {
                    const i = _(e, t),
                        r = (0, s.nx)(e);
                    return (i && r[i] && r[i].useRanked) || !1;
                },
                O = (e, t) => {
                    const i = n.Z.select(e, t);
                    if (i) {
                        const e = i.customBanner;
                        return e || i.defaultBanner;
                    }
                    return { crop: [], image: u };
                },
                T = (e, t) => {
                    const i = f(e, t);
                    return i?.mode;
                };
        },
        653798: (e, t, i) => {
            i.d(t, { S: () => o });
            var r = i(326439);
            i(585488);
            const o = r.Z;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.HoverCard-e6266db0.fde3034a.js.map

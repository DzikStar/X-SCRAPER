"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Typeahead-1571f5ba"],
    {
        530745: (e, i, t) => {
            t.d(i, { Ci: () => w, Ct: () => h, Dd: () => T, Dy: () => b, E4: () => D, EF: () => M, F$: () => c, G0: () => C, KH: () => E, L_: () => U, NW: () => n, Pf: () => f, QK: () => o, Qs: () => r, R2: () => P, Rv: () => d, Si: () => g, UH: () => p, Ur: () => y, W2: () => k, WX: () => s, Yt: () => u, ZP: () => A, Zd: () => O, cY: () => m, i_: () => S, jF: () => L, kl: () => a, nQ: () => l, oh: () => x, tI: () => I, uR: () => _, xp: () => v });
            const s = "ArrowDown",
                a = "ArrowUp",
                o = "ArrowLeft",
                r = "ArrowRight",
                n = "Enter",
                l = "Escape",
                d = 27,
                c = "XF86Back",
                u = "XF86PlayBack",
                _ = "XF86Exit",
                p = "GoBack",
                m = 461,
                h = "Exit",
                g = 415,
                f = 19,
                v = 417,
                b = 412,
                k = 413,
                y = "ESC",
                S = "Exit",
                T = "Tab",
                L = "Delete",
                w = "Backspace",
                O = "Play",
                D = "Pause",
                E = "Stop",
                I = "MediaPlayPause",
                A = "MediaPlay",
                M = "MediaPause",
                x = "MediaStop",
                C = "MediaFastForward",
                P = "MediaRewind",
                U = "Space";
        },
        163390: (e, i, t) => {
            t.d(i, { OX: () => _, Od: () => c, PN: () => p, uq: () => d, wR: () => h });
            var s = t(251067),
                a = t(522171),
                o = t(111677),
                r = t.n(o),
                n = t(912021),
                l = t(323265);
            const d = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                c = (0, n.Z)((e) => {
                    const i = e ? [{ description: r().b7fa0cfe, keys: d.goTopArticles, universal: !1 }] : [];
                    return [...((0, s.fH)(s.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: r().d5696fcc, keys: d.openKeyboardShortcuts, universal: !0 }, { description: r().a83d4280, keys: d.nextItem, universal: !0 }, { description: r().g0048656, keys: d.previousItem, universal: !0 }, { description: r().a690c4d0, keys: "Space", universal: !0 }, { description: r().e893811a, keys: d.refresh, universal: !1 }, { description: r().ha8209bc, keys: d.goHome, universal: !1 }, { description: r().fcf3e54c, keys: d.goExplore, universal: !1 }, { description: r().eb75875e, keys: d.goNotifications, universal: !1 }, { description: r().cdb53d7a, keys: d.goMentions, universal: !1 }, { description: r().fa98627a, keys: d.goProfile, universal: !1 }, { description: r().d4ebc798, keys: d.goToDrafts, universal: !1 }, { description: r().fd6a3f30, keys: d.goToScheduled, universal: !1 }, { description: r().d7b8ebaa, keys: d.goLikes, universal: !1 }, { description: r().b0041756, keys: d.goLists, universal: !1 }, { description: r().d4986f86, keys: d.goMessages, universal: !1 }, { description: r().h5860a68, keys: d.goGrok, universal: !1 }, { description: r().bb081ea2, keys: d.goSettings, universal: !1 }, { description: r().i3145aa0, keys: d.goBookmarks, universal: !1 }, ...i, { description: r().eee2ed92, keys: d.goToUser, universal: !1 }, { description: r().ee5ccf3e, keys: d.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                _ = () => [
                    { description: r().ab3d53f8, keys: d.newTweet, universal: !1 },
                    { description: r().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: r().e736990a, keys: d.newMessage, universal: !1 },
                    { description: r().a9ae1e78, keys: d.search, universal: !1 },
                    { description: r().fe731016, keys: a.Z.shortcuts.like, universal: !1 },
                    { description: r().d17df548, keys: a.Z.shortcuts.reply, universal: !1 },
                    { description: r().g062295e, keys: a.Z.shortcuts.retweet, universal: !1 },
                    { description: r().h01621a4, keys: a.Z.shortcuts.share, universal: !0 },
                    { description: r().gb303814, keys: d.bookmark, universal: !1 },
                    { description: r().c03b1126, keys: d.mute, universal: !1 },
                    { description: r().ebd2abb2, keys: d.block, universal: !1 },
                    { description: r().hc6c5510, keys: "Enter", universal: !0 },
                    { description: r().eebdef38, keys: a.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: r().b488758c, keys: d.toggleDMDrawer, universal: !1 },
                ],
                p = () => [
                    { description: r().c82314e0, keys: d.video.play1, universal: !0 },
                    { description: r().c82314e0, keys: d.video.play2, universal: !0 },
                    { description: r().b881560e, keys: d.video.mute, universal: !0 },
                    { description: r().a94f7302, keys: d.audio.dock, universal: !1 },
                    { description: r().a7e604c6, keys: d.audio.play, universal: !1 },
                    { description: r().f978c4fc, keys: d.audio.mute, universal: !1 },
                ],
                m = (0, n.Z)((e) => {
                    const i = c(e),
                        t = _(),
                        s = p(),
                        a = {};
                    return (
                        [...t, ...s, ...i].forEach(({ description: e, keys: i }) => {
                            Array.isArray(i)
                                ? i.forEach((i) => {
                                      a[i] = e;
                                  })
                                : (a[i] = e);
                        }),
                        JSON.stringify(a)
                    );
                }),
                h = (e, i) => {
                    if (i) return { dataSet: { "at-shortcutkeys": m(e) } };
                };
        },
        166677: (e, i, t) => {
            t.d(i, { $r: () => q, O9: () => K, ZP: () => Q, vK: () => Y });
            var s = t(688715),
                a = t(111677),
                o = t.n(a),
                r = t(653843),
                n = t(122123),
                l = t(417144),
                d = t(884495),
                c = t(716233),
                u = t(540387);
            const _ = o().b8098028,
                p = o().b36f4170,
                m = o().hab3781e,
                h = o().f6c4fb02,
                g = o().g0af3dd2,
                f = o().b8c8b0be,
                v = o().ica6d718,
                b = o().b28d44f7({ limit: 15 }),
                k = o().i1db7d13,
                y = o().baac0ed7,
                S = k({ limit: 512 }),
                T = o().a22385bb,
                L = o().be0440bf,
                w = T({ limit: 140 }),
                O = o().feeba512,
                D = o().db123c02,
                E = o().db6001e7({ limit: 5 }),
                I = o().eb96d952,
                A = o().i859a9d4,
                M = o().b3880588,
                x = o().ca058b68,
                C = o().id24379c,
                P = o().h4d7cbcc,
                U = (0, s.ju)("https://support.x.com/articles/20156423"),
                N = (0, s.ju)("https://help.x.com/using-twitter/twitter-videos"),
                R = (e) => ({ text: e }),
                F = (e) => ({ text: e, action: { label: A, link: U } }),
                z = (e) => ({ text: e, action: { label: A, link: N } }),
                V = { [r.Y7.GIF_IS_TOO_LARGE]: R(b), [r.Y7.CANNOT_BE_PROCESSED]: R(_), [r.Y7.FILE_IS_NOT_AN_IMAGE]: R(m) },
                G = { [l.d.ZERO_FILE_LENGTH]: R(p), [l.d.TIMEOUT]: R(M) },
                Z = { ...G, [l.d.FILE_TOO_LARGE]: R(E), [l.d.UNSUPPORTED_MEDIA]: F(D), [l.d.INVALID_MEDIA]: F(O) },
                $ = { ...G, [l.d.FILE_TOO_LARGE]: R(b), [l.d.UNSUPPORTED_MEDIA]: F(g), [l.d.INVALID_MEDIA]: F(h) },
                j = { ...G, [l.d.FILE_TOO_LARGE]: R(S), [l.d.UNSUPPORTED_MEDIA]: z(v), [l.d.INVALID_MEDIA]: z(f) },
                B = Object.freeze({ RESIZE: "resize", UPLOAD: "upload", METADATA: "metadata", MAXDURATION: "maxduration", MAXSIZE: "maxsize" }),
                H = 1048576,
                X = 1073741824,
                K = (e) => Object.values(B).includes(e.type),
                W = (e) => {
                    const { code: i, limit: t, type: s } = e;
                    if (i)
                        switch (s) {
                            case B.MAXSIZE:
                                return i === c.BW.GIF_IS_TOO_LARGE ? R(b) : i === c.BW.VIDEO_IS_TOO_LARGE && void 0 !== t ? R(t >= X ? y({ limit: Math.round(t / X) }) : k({ limit: Math.round(t / H) })) : R(S);
                            case B.MAXDURATION:
                                return void 0 !== t ? (t > 140 ? R(L({ limit: Math.round(t / 60) })) : { text: T({ limit: Math.round(t) }), action: { label: d.Z.LongerVideoUpload.defaultContent.actionLabel, link: { pathname: `/i/premium_sign_up?referring_page=${d.Z.LongerVideoUpload.referringPage}`, external: !0 } } }) : R(w);
                            case B.RESIZE:
                                return V[i];
                            case B.UPLOAD:
                                if (e.isImage) return Z[i];
                                if (e.isGif) return $[i];
                                if (e.isVideo) return j[i];
                                break;
                            case B.METADATA:
                                return R(P);
                        }
                },
                q = (e) => {
                    if (K(e)) return e;
                };
            function Q(e, i = C) {
                const t = q(e);
                if (t) {
                    const s = e.message ? `${i} ${e.message}` : i;
                    return W(t) || R(s);
                }
            }
            function Y(e, i = x) {
                return e.type === n.gK.type && e.code === n.gK.NO_DIMENSIONS ? R(I) : e.type === u.hb.type && e.code === u.hb.NO_DIMENSIONS ? z(f) : R(i);
            }
        },
        221562: (e, i, t) => {
            t.d(i, { BX: () => g, Uk: () => u, Xj: () => _, ZP: () => T });
            var s = t(468811),
                a = t.n(s),
                o = t(595088),
                r = t(161821),
                n = t(184605),
                l = t(716233),
                d = t(774717);
            const c = Object.freeze({ LocalFile: "local_file", Remote: "remote" }),
                u = Object.freeze({ Cancel: "cancel", Failure: "failure", Success: "success", Complete: "complete", Invalid: "invalid" }),
                _ = Object.freeze({ InProgress: "in_progress", Complete: "complete", Failure: "failure", Canceled: "canceled" }),
                p = (e) => (e ? m(e) : void 0),
                m = (e) =>
                    (0, o.Z)(e)
                        .filter(([e, i]) => void 0 !== i)
                        .map(([i, t]) => ("object" == typeof t ? `${i}=${h(e[i])}` : `${i}=${String(t)}`))
                        .join(";"),
                h = (e) =>
                    (0, r.Z)(e)
                        .filter((e) => void 0 !== e)
                        .map(String)
                        .join(":"),
                g = Object.freeze({ Full: "full", Hash: "hash", Processing: "processing", SruUpload: "sru_upload", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish", Metadata: "metadata" }),
                f = Object.freeze({ SruUpload: "sru_upload_no_eager", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish_no_eager" }),
                v = { [g.SruUpload]: f.SruUpload, [g.UploadSubmitUntilSruFinish]: f.UploadSubmitUntilSruFinish },
                b = Object.freeze({ All: "all", Short: "short", Medium: "medium", Long: "long", XLong: "xlong", L90to140s: "l90to140s", L140to300s: "l140to300s", L300to600s: "l300to600s", L600to1200s: "l600to1200s", L1200to1800s: "l1200to1800s", L1800to2700s: "l1800to2700s", L2700to3600s: "l2700to3600s", L3600to4500s: "l3600to4500s", L4500to5400s: "l4500to5400s", L5400to6300s: "l5400to6300s", L6300to7200s: "l6300to7200s", L7200to10800s: "l7200to10800s", L10800to14400s: "l10800to14400s", LGT14400s: "lgt14400s" }),
                k = (e, i) => ((0, n.Z)(e) && (0, n.Z)(i) ? Math.round(i - e) : void 0),
                y = () => (window.performance ? window.performance.now() : Date.now()),
                S = (e, i) => (e === l.xz.DMGif || e === l.xz.TweetGif ? b.All : (e !== l.xz.DMVideo && e !== l.xz.TweetVideo && e !== l.xz.AmplifyVideo) || void 0 === i ? "" : i < 10 ? b.Short : i < 20 ? b.Medium : i < 45 ? b.Long : i < 90 ? b.XLong : i < 140 ? b.L90to140s : i < 300 ? b.L140to300s : i < 600 ? b.L300to600s : i < 1200 ? b.L600to1200s : i < 1800 ? b.L1200to1800s : i < 2700 ? b.L1800to2700s : i < 3600 ? b.L2700to3600s : i < 4500 ? b.L3600to4500s : i < 5400 ? b.L4500to5400s : i < 6300 ? b.L5400to6300s : i < 7200 ? b.L6300to7200s : i < 10800 ? b.L7200to10800s : i < 14400 ? b.L10800to14400s : b.LGT14400s);
            class T {
                constructor(e, i = !1) {
                    (this._pausedDuration = {}),
                        (this._pauseTimes = {}),
                        (this._startTimes = {}),
                        (this._eagerUploadDisabled = i),
                        (this._impressionId = a().v4()),
                        (this._keyPrefix = ((e) => {
                            const { isExternal: i, mediaCategory: t, videoDuration: s } = e;
                            return `${i ? c.Remote : c.LocalFile}:${t}:${S(t, s)}`;
                        })(e)),
                        this.setMetadata({ submitted: !1 });
                }
                reportOperationComplete(e, i) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        void 0 !== this._pauseTimes[e] && this.toggleOperationPaused(e, !1);
                        let t = k(this._startTimes[e], y());
                        if (this._keyPrefix && void 0 !== t) {
                            void 0 !== this._pausedDuration[e] && (t -= this._pausedDuration[e]);
                            const s = this._getKey(e, i);
                            this._record(s, t, e === g.Full ? this._metadata : e === g.Metadata ? this._fileMetadata : void 0), (this._startTimes[e] = void 0);
                        }
                    });
                }
                reportOperationStart(e, i = !1) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        if (void 0 === this._startTimes[e] && ((this._startTimes[e] = y()), this._keyPrefix && i)) {
                            const i = this._getKey(e, "start");
                            this._record(i, 0);
                        }
                    });
                }
                reportUploadSubmit() {
                    if (this._metadata?.submitted) return;
                    this.setMetadata({ submitted: !0 });
                    let e = k(this._startTimes[g.Full], y());
                    if (this._keyPrefix && void 0 !== e) {
                        void 0 !== this._pausedDuration[g.Full] && (e -= this._pausedDuration[g.Full]);
                        const i = this._getKey(g.Full, "submit");
                        this._record(i, e, this._metadata);
                    }
                }
                setMetadata(e) {
                    this._metadata = { ...this._metadata, ...e };
                }
                setFileMetadata(e) {
                    this._fileMetadata = { ...this._fileMetadata, ...e };
                }
                toggleOperationPaused(e, i) {
                    if (i && void 0 === this._pauseTimes[e]) this._pauseTimes[e] = y();
                    else if (!i) {
                        const i = k(this._pauseTimes[e], y());
                        void 0 !== i && ((this._pausedDuration[e] = this._pausedDuration[e] ? this._pausedDuration[e] + i : i), (this._pauseTimes[e] = void 0));
                    }
                }
                _getKey(e, i) {
                    const t = (this._eagerUploadDisabled && v[e]) || e;
                    return `${this._keyPrefix}:${t}:${i}`;
                }
                _record(e, i, t) {
                    const s = { duration_ms: i, impression_id: this._impressionId, metadata: p(t) };
                    d.IM(e, s, "media_upload");
                }
                _getStartTimes() {
                    return this._startTimes;
                }
                _resetStartTimes(e) {
                    this._startTimes = { ...e };
                }
            }
        },
        716233: (e, i, t) => {
            t.d(i, { BW: () => g, SB: () => S, TO: () => L, Tz: () => v, U$: () => y, ff: () => f, vC: () => k, vn: () => T, xz: () => b, y$: () => m });
            var s = t(182056),
                a = t(323265),
                o = t(540387);
            const r = 1024,
                n = 1024 * r,
                l = 1,
                d = 4096,
                c = 2048,
                u = 400,
                _ = 1500,
                p = { Image: 5, Gif: 15, Avatar_Gif: 5 },
                m = { Duration: { 0: 140, 1: 600, 2: 7200 }, Size: { 0: 512, 1: 1024, 2: 40960 } },
                h = 600,
                g = { GIF_IS_TOO_LARGE: 1, VIDEO_IS_TOO_LARGE: 2 },
                f = { VIDEO_IS_TOO_LONG: 1 },
                v = { MEDIA_NOT_FOUND: 0, INVALID_MEDIA_CODE: 1 },
                b = Object.freeze({ AmplifyVideo: "amplify_video", CommunityBanner: "community_banner_image", ListBanner: "list_banner_image", TweetImage: "tweet_image", TweetVideo: "tweet_video", TweetGif: "tweet_gif", DMImage: "dm_image", DMVideo: "dm_video", DMGif: "dm_gif", Subtitles: "subtitles", ProfileBanner: "banner_image" }),
                k = Object.freeze({ Tweet: "tweet", Dm: "dm", CommunityBanner: "community_banner", ListBanner: "list_banner", ProfileBanner: "profile_banner", Avatar: "avatar", Verification: "verification", TwitterArticle: "twitter_article" }),
                y = (e) => {
                    const { height: i, left: t, width: s } = e,
                        a = Math.round(i / 2);
                    return `&salient_rect=${Math.round(t + s / 2)},${a},1,1`;
                };
            function S(e) {
                const i = e.featureSwitches?.isTrue("blue_longer_video_enabled"),
                    t = (function (e) {
                        return e.userClaims.isTrueAndEnabled("subscriptions_long_video_upload") || e.featureSwitches.isTrue("subscriptions_long_video_upload_override") || !1;
                    })(e);
                return i || t ? 1 : 0;
            }
            function T(e, i, t, g, f) {
                const v = g?.location,
                    b = S({ featureSwitches: e, userClaims: i });
                let y, T;
                if (t.isSubtitles) y = 0;
                else if (t.isGif)
                    switch (v) {
                        case k.Avatar:
                            y = e.getNumberValue("media_async_upload_max_avatar_gif_size", p.Avatar_Gif) * n;
                            break;
                        case k.Dm:
                        case k.Tweet:
                        default:
                            y = e.getNumberValue("media_async_upload_max_gif_size", p.Gif) * n;
                    }
                else {
                    if (!(t instanceof o.ZP))
                        return (function (e, i, t) {
                            let o;
                            switch (i) {
                                case k.Avatar:
                                    o = u;
                                    break;
                                case k.CommunityBanner:
                                case k.ListBanner:
                                case k.ProfileBanner:
                                    o = _;
                                    break;
                                default:
                                    o = a.ZP.isDesktopOS() ? d : c;
                            }
                            const l = e.getNumberValue("media_async_upload_max_image_size", p.Image) * n;
                            return s.Z.getConnectionInfo().then(
                                (s) => {
                                    let n = l;
                                    return "slow-2g" === s.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_slow_2g", 150) * r) : t || "2g" === s.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_2g", 250) * r) : "3g" === s.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_3g", 1500) * r) : "4g" !== s.effectiveType || a.ZP.isDesktopOS() || i !== k.Tweet || (o = d), { maxDimension: o, maxFileSize: Math.min(l, n) };
                                },
                                () => ({ maxDimension: o, maxFileSize: l }),
                            );
                        })(e, v, f);
                    if (1 === b) {
                        if ("dm" === v) T = e.getNumberValue("media_async_upload_longer_dm_video_max_video_duration", h);
                        else T = e.getNumberValue("media_async_upload_longer_video_max_video_duration", m.Duration[b]) * l;
                        y = e.getNumberValue("media_async_upload_longer_video_max_video_size", m.Size[b]) * n;
                    } else (T = e.getNumberValue("media_async_upload_max_video_duration", m.Duration[b]) * l), (y = e.getNumberValue("media_async_upload_max_video_size", m.Size[b]) * n);
                }
                return Promise.resolve({ maxFileSize: y, maxDuration: T });
            }
            function L(e) {
                return !(a.ZP.isIOS() && e.size > 3e8);
            }
        },
        946208: (e, i, t) => {
            t.d(i, { Id: () => s, ZP: () => r, h_: () => a });
            t(543673), t(240753), t(128399);
            const s = [".srt", "text/plain", ""],
                a = (e) => -1 !== s.indexOf(e.type),
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
        883432: (e, i, t) => {
            t.d(i, { Z: () => s });
            const s = { AdvancedSearchPage: "advanced_search_page", CashtagClick: "cashtag_click", HashtagClick: "hashtag_click", PromotedTrendClick: "promoted_trend_click", RecentSearchClick: "recent_search_click", SavedSearchClick: "saved_search_click", RelatedQueryClick: "related_query_click", SpellingCorrectionClick: "spelling_correction_click", SpellingCorrectionRevertClick: "spelling_suggestion_revert_click", SpellingExpansionClick: "spelling_expansion_click", SpellingExpansionRevertClick: "spelling_expansion_revert_click", SpellingSuggestionClick: "spelling_suggestion_click", TrendClick: "trend_click", TrendView: "trend_view", TypeaheadClick: "typeahead_click", Typed: "typed_query", TVSearch: "TvSearch", TweetDetailQuoteTweet: "tdqt", TweetDetailSimilarPost: "tweet_detail_similar_posts" };
        },
        540387: (e, i, t) => {
            t.d(i, { Wv: () => a, ZP: () => r, hb: () => o, jn: () => s });
            t(571372), t(543673), t(240753), t(128399);
            const s = ["video/mp4", "video/quicktime"],
                a = (e) => -1 !== s.indexOf(e.type),
                o = { type: "video-load", NO_DIMENSIONS: 10, LOAD_FAILED: 11, TOO_LARGE: 12 };
            class r {
                constructor(e, i) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type);
                    try {
                        this.url = window.URL.createObjectURL(this.fileHandle);
                    } catch (e) {
                        this.url = "";
                    }
                    (this.isVideo = !0), (this.isImage = !1), (this.isGif = !1), (this.isSubtitles = !1), (this.isAmplify = !!i);
                }
                withDimensionsAndOrientation(e) {
                    return ((e, i) =>
                        new Promise((t, s) => {
                            const a = (e, i) => {
                                    const t = new Error(e);
                                    (t.code = i), (t.type = o.type), s(t);
                                },
                                r = document.createElement("video");
                            (r.onloadedmetadata = () => {
                                i || (r.videoWidth && r.videoHeight) ? t(r) : a("Video lacks height or width", o.NO_DIMENSIONS);
                            }),
                                (r.onerror = () => {
                                    a("Error loading image", o.LOAD_FAILED);
                                }),
                                (r.src = e);
                        }))(this.url, e).then((e) => {
                        const { duration: i, videoHeight: t, videoWidth: s } = e;
                        return (this.width = s), (this.height = t), (this.duration = i), (this.video = e), (this.isBrowserSupported = !(0 === t || 0 === s)), this;
                    });
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Typeahead-1571f5ba.7746003a.js.map

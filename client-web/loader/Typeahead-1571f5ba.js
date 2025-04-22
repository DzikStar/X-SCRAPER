"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Typeahead-1571f5ba"],
    {
        530745: (e, i, t) => {
            t.d(i, { Ci: () => L, Ct: () => g, Dd: () => D, Dy: () => v, E4: () => E, EF: () => M, F$: () => u, G0: () => P, KH: () => I, L_: () => C, NW: () => n, Pf: () => h, QK: () => o, Qs: () => r, R2: () => N, Rv: () => l, Si: () => f, UH: () => m, Ur: () => k, W2: () => y, WX: () => s, Yt: () => c, ZP: () => A, Zd: () => O, cY: () => p, i_: () => T, jF: () => S, kl: () => a, nQ: () => d, oh: () => x, tI: () => w, uR: () => _, xp: () => b });
            const s = "ArrowDown",
                a = "ArrowUp",
                o = "ArrowLeft",
                r = "ArrowRight",
                n = "Enter",
                d = "Escape",
                l = 27,
                u = "XF86Back",
                c = "XF86PlayBack",
                _ = "XF86Exit",
                m = "GoBack",
                p = 461,
                g = "Exit",
                f = 415,
                h = 19,
                b = 417,
                v = 412,
                y = 413,
                k = "ESC",
                T = "Exit",
                D = "Tab",
                S = "Delete",
                L = "Backspace",
                O = "Play",
                E = "Pause",
                I = "Stop",
                w = "MediaPlayPause",
                A = "MediaPlay",
                M = "MediaPause",
                x = "MediaStop",
                P = "MediaFastForward",
                N = "MediaRewind",
                C = "Space";
        },
        163390: (e, i, t) => {
            t.d(i, { OX: () => _, Od: () => u, PN: () => m, uq: () => l, wR: () => g });
            var s = t(251067),
                a = t(522171),
                o = t(674132),
                r = t.n(o),
                n = t(912021),
                d = t(323265);
            const l = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                u = (0, n.Z)((e) => {
                    const i = e ? [{ description: r().b7fa0cfe, keys: l.goTopArticles, universal: !1 }] : [];
                    return [...((0, s.fH)(s.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${c} k`, universal: !1 }]), { description: r().d5696fcc, keys: l.openKeyboardShortcuts, universal: !0 }, { description: r().a83d4280, keys: l.nextItem, universal: !0 }, { description: r().g0048656, keys: l.previousItem, universal: !0 }, { description: r().a690c4d0, keys: "Space", universal: !0 }, { description: r().e893811a, keys: l.refresh, universal: !1 }, { description: r().ha8209bc, keys: l.goHome, universal: !1 }, { description: r().fcf3e54c, keys: l.goExplore, universal: !0 }, { description: r().eb75875e, keys: l.goNotifications, universal: !1 }, { description: r().cdb53d7a, keys: l.goMentions, universal: !1 }, { description: r().fa98627a, keys: l.goProfile, universal: !1 }, { description: r().d4ebc798, keys: l.goToDrafts, universal: !1 }, { description: r().fd6a3f30, keys: l.goToScheduled, universal: !1 }, { description: r().d7b8ebaa, keys: l.goLikes, universal: !1 }, { description: r().b0041756, keys: l.goLists, universal: !1 }, { description: r().d4986f86, keys: l.goMessages, universal: !1 }, { description: r().h5860a68, keys: l.goGrok, universal: !1 }, { description: r().bb081ea2, keys: l.goSettings, universal: !0 }, { description: r().i3145aa0, keys: l.goBookmarks, universal: !1 }, ...i, { description: r().eee2ed92, keys: l.goToUser, universal: !0 }, { description: r().ee5ccf3e, keys: l.goDisplay, universal: !1 }];
                }),
                c = d.ZP.isMac() ? "⌘" : "CTRL",
                _ = () => [
                    { description: r().ab3d53f8, keys: l.newTweet, universal: !1 },
                    { description: r().de94bda6, keys: `${c} Enter`, universal: !1 },
                    { description: r().e736990a, keys: l.newMessage, universal: !1 },
                    { description: r().a9ae1e78, keys: l.search, universal: !0 },
                    { description: r().fe731016, keys: a.Z.shortcuts.like, universal: !1 },
                    { description: r().d17df548, keys: a.Z.shortcuts.reply, universal: !1 },
                    { description: r().g062295e, keys: a.Z.shortcuts.retweet, universal: !1 },
                    { description: r().h01621a4, keys: a.Z.shortcuts.share, universal: !0 },
                    { description: r().gb303814, keys: l.bookmark, universal: !1 },
                    { description: r().c03b1126, keys: l.mute, universal: !1 },
                    { description: r().ebd2abb2, keys: l.block, universal: !1 },
                    { description: r().hc6c5510, keys: "Enter", universal: !0 },
                    { description: r().eebdef38, keys: a.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: r().b488758c, keys: l.toggleDMDrawer, universal: !1 },
                ],
                m = () => [
                    { description: r().c82314e0, keys: l.video.play1, universal: !0 },
                    { description: r().c82314e0, keys: l.video.play2, universal: !0 },
                    { description: r().b881560e, keys: l.video.mute, universal: !0 },
                    { description: r().a94f7302, keys: l.audio.dock, universal: !1 },
                    { description: r().a7e604c6, keys: l.audio.play, universal: !1 },
                    { description: r().f978c4fc, keys: l.audio.mute, universal: !1 },
                ],
                p = (0, n.Z)((e) => {
                    const i = u(e),
                        t = _(),
                        s = m(),
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
                g = (e, i) => {
                    if (i) return { dataSet: { "at-shortcutkeys": p(e) } };
                };
        },
        166677: (e, i, t) => {
            t.d(i, { $r: () => Y, O9: () => H, ZP: () => Q, vK: () => q });
            var s = t(688715),
                a = t(674132),
                o = t.n(a),
                r = t(653843),
                n = t(122123),
                d = t(417144),
                l = t(417854),
                u = t(716233),
                c = t(540387);
            const _ = o().b8098028,
                m = o().b36f4170,
                p = o().hab3781e,
                g = o().f6c4fb02,
                f = o().g0af3dd2,
                h = o().b8c8b0be,
                b = o().ica6d718,
                v = o().b28d44f7({ limit: 15 }),
                y = o().i1db7d13,
                k = o().baac0ed7,
                T = y({ limit: 512 }),
                D = o().a22385bb,
                S = o().be0440bf,
                L = D({ limit: 140 }),
                O = o().feeba512,
                E = o().db123c02,
                I = o().db6001e7({ limit: 5 }),
                w = o().eb96d952,
                A = o().i859a9d4,
                M = o().b3880588,
                x = o().ca058b68,
                P = o().id24379c,
                N = o().h4d7cbcc,
                C = (0, s.ju)("https://support.x.com/articles/20156423"),
                U = (0, s.ju)("https://help.x.com/using-twitter/twitter-videos"),
                F = (e) => ({ text: e }),
                z = (e) => ({ text: e, action: { label: A, link: C } }),
                G = (e) => ({ text: e, action: { label: A, link: U } }),
                R = { [r.Y7.GIF_IS_TOO_LARGE]: F(v), [r.Y7.CANNOT_BE_PROCESSED]: F(_), [r.Y7.FILE_IS_NOT_AN_IMAGE]: F(p) },
                V = { [d.d.ZERO_FILE_LENGTH]: F(m), [d.d.TIMEOUT]: F(M) },
                Z = { ...V, [d.d.FILE_TOO_LARGE]: F(I), [d.d.UNSUPPORTED_MEDIA]: z(E), [d.d.INVALID_MEDIA]: z(O) },
                B = { ...V, [d.d.FILE_TOO_LARGE]: F(v), [d.d.UNSUPPORTED_MEDIA]: z(f), [d.d.INVALID_MEDIA]: z(g) },
                $ = { ...V, [d.d.FILE_TOO_LARGE]: F(T), [d.d.UNSUPPORTED_MEDIA]: G(b), [d.d.INVALID_MEDIA]: G(h) },
                j = Object.freeze({ RESIZE: "resize", UPLOAD: "upload", METADATA: "metadata", MAXDURATION: "maxduration", MAXSIZE: "maxsize" }),
                X = 1048576,
                K = 1073741824,
                H = (e) => Object.values(j).includes(e.type),
                W = (e) => {
                    const { code: i, limit: t, type: s } = e;
                    if (i)
                        switch (s) {
                            case j.MAXSIZE:
                                return i === u.BW.GIF_IS_TOO_LARGE ? F(v) : i === u.BW.VIDEO_IS_TOO_LARGE && void 0 !== t ? F(t >= K ? k({ limit: Math.round(t / K) }) : y({ limit: Math.round(t / X) })) : F(T);
                            case j.MAXDURATION:
                                return void 0 !== t ? (t > 140 ? F(S({ limit: Math.round(t / 60) })) : { text: D({ limit: Math.round(t) }), action: { label: l.Z.LongerVideoUpload.defaultContent.actionLabel, link: { pathname: `/i/premium_sign_up?referring_page=${l.Z.LongerVideoUpload.referringPage}`, external: !0 } } }) : F(L);
                            case j.RESIZE:
                                return R[i];
                            case j.UPLOAD:
                                if (e.isImage) return Z[i];
                                if (e.isGif) return B[i];
                                if (e.isVideo) return $[i];
                                break;
                            case j.METADATA:
                                return F(N);
                        }
                },
                Y = (e) => {
                    if (H(e)) return e;
                };
            function Q(e, i = P) {
                const t = Y(e);
                if (t) {
                    const s = e.message ? `${i} ${e.message}` : i;
                    return W(t) || F(s);
                }
            }
            function q(e, i = x) {
                return e.type === n.gK.type && e.code === n.gK.NO_DIMENSIONS ? F(w) : e.type === c.hb.type && e.code === c.hb.NO_DIMENSIONS ? G(h) : F(i);
            }
        },
        221562: (e, i, t) => {
            t.d(i, { BX: () => f, Uk: () => c, Xj: () => _, ZP: () => D });
            var s = t(468811),
                a = t.n(s),
                o = t(595088),
                r = t(161821),
                n = t(184605),
                d = t(716233),
                l = t(774717);
            const u = Object.freeze({ LocalFile: "local_file", Remote: "remote" }),
                c = Object.freeze({ Cancel: "cancel", Failure: "failure", Success: "success", Complete: "complete", Invalid: "invalid" }),
                _ = Object.freeze({ InProgress: "in_progress", Complete: "complete", Failure: "failure", Canceled: "canceled" }),
                m = (e) => (e ? p(e) : void 0),
                p = (e) =>
                    (0, o.Z)(e)
                        .filter(([e, i]) => void 0 !== i)
                        .map(([i, t]) => ("object" == typeof t ? `${i}=${g(e[i])}` : `${i}=${String(t)}`))
                        .join(";"),
                g = (e) =>
                    (0, r.Z)(e)
                        .filter((e) => void 0 !== e)
                        .map(String)
                        .join(":"),
                f = Object.freeze({ Full: "full", Hash: "hash", Processing: "processing", SruUpload: "sru_upload", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish", Metadata: "metadata" }),
                h = Object.freeze({ SruUpload: "sru_upload_no_eager", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish_no_eager" }),
                b = { [f.SruUpload]: h.SruUpload, [f.UploadSubmitUntilSruFinish]: h.UploadSubmitUntilSruFinish },
                v = Object.freeze({ All: "all", Short: "short", Medium: "medium", Long: "long", XLong: "xlong", L90to140s: "l90to140s", L140to300s: "l140to300s", L300to600s: "l300to600s", L600to1200s: "l600to1200s", L1200to1800s: "l1200to1800s", L1800to2700s: "l1800to2700s", L2700to3600s: "l2700to3600s", L3600to4500s: "l3600to4500s", L4500to5400s: "l4500to5400s", L5400to6300s: "l5400to6300s", L6300to7200s: "l6300to7200s", L7200to10800s: "l7200to10800s", L10800to14400s: "l10800to14400s", LGT14400s: "lgt14400s" }),
                y = (e, i) => ((0, n.Z)(e) && (0, n.Z)(i) ? Math.round(i - e) : void 0),
                k = () => (window.performance ? window.performance.now() : Date.now()),
                T = (e, i) => (e === d.xz.DMGif || e === d.xz.TweetGif ? v.All : (e !== d.xz.DMVideo && e !== d.xz.TweetVideo && e !== d.xz.AmplifyVideo) || void 0 === i ? "" : i < 10 ? v.Short : i < 20 ? v.Medium : i < 45 ? v.Long : i < 90 ? v.XLong : i < 140 ? v.L90to140s : i < 300 ? v.L140to300s : i < 600 ? v.L300to600s : i < 1200 ? v.L600to1200s : i < 1800 ? v.L1200to1800s : i < 2700 ? v.L1800to2700s : i < 3600 ? v.L2700to3600s : i < 4500 ? v.L3600to4500s : i < 5400 ? v.L4500to5400s : i < 6300 ? v.L5400to6300s : i < 7200 ? v.L6300to7200s : i < 10800 ? v.L7200to10800s : i < 14400 ? v.L10800to14400s : v.LGT14400s);
            class D {
                constructor(e, i = !1) {
                    (this._pausedDuration = {}),
                        (this._pauseTimes = {}),
                        (this._startTimes = {}),
                        (this._eagerUploadDisabled = i),
                        (this._impressionId = a().v4()),
                        (this._keyPrefix = ((e) => {
                            const { isExternal: i, mediaCategory: t, videoDuration: s } = e;
                            return `${i ? u.Remote : u.LocalFile}:${t}:${T(t, s)}`;
                        })(e)),
                        this.setMetadata({ submitted: !1 });
                }
                reportOperationComplete(e, i) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        void 0 !== this._pauseTimes[e] && this.toggleOperationPaused(e, !1);
                        let t = y(this._startTimes[e], k());
                        if (this._keyPrefix && void 0 !== t) {
                            void 0 !== this._pausedDuration[e] && (t -= this._pausedDuration[e]);
                            const s = this._getKey(e, i);
                            this._record(s, t, e === f.Full ? this._metadata : e === f.Metadata ? this._fileMetadata : void 0), (this._startTimes[e] = void 0);
                        }
                    });
                }
                reportOperationStart(e, i = !1) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        if (void 0 === this._startTimes[e] && ((this._startTimes[e] = k()), this._keyPrefix && i)) {
                            const i = this._getKey(e, "start");
                            this._record(i, 0);
                        }
                    });
                }
                reportUploadSubmit() {
                    if (this._metadata?.submitted) return;
                    this.setMetadata({ submitted: !0 });
                    let e = y(this._startTimes[f.Full], k());
                    if (this._keyPrefix && void 0 !== e) {
                        void 0 !== this._pausedDuration[f.Full] && (e -= this._pausedDuration[f.Full]);
                        const i = this._getKey(f.Full, "submit");
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
                    if (i && void 0 === this._pauseTimes[e]) this._pauseTimes[e] = k();
                    else if (!i) {
                        const i = y(this._pauseTimes[e], k());
                        void 0 !== i && ((this._pausedDuration[e] = this._pausedDuration[e] ? this._pausedDuration[e] + i : i), (this._pauseTimes[e] = void 0));
                    }
                }
                _getKey(e, i) {
                    const t = (this._eagerUploadDisabled && b[e]) || e;
                    return `${this._keyPrefix}:${t}:${i}`;
                }
                _record(e, i, t) {
                    const s = { duration_ms: i, impression_id: this._impressionId, metadata: m(t) };
                    l.IM(e, s, "media_upload");
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
            t.d(i, { BW: () => f, SB: () => T, TO: () => S, Tz: () => b, U$: () => k, ff: () => h, vC: () => y, vn: () => D, xz: () => v, y$: () => p });
            var s = t(182056),
                a = t(323265),
                o = t(540387);
            const r = 1024,
                n = 1024 * r,
                d = 1,
                l = 4096,
                u = 2048,
                c = 400,
                _ = 1500,
                m = { Image: 5, Gif: 15, Avatar_Gif: 5 },
                p = { Duration: { 0: 140, 1: 600, 2: 7200 }, Size: { 0: 512, 1: 1024, 2: 40960 } },
                g = 600,
                f = { GIF_IS_TOO_LARGE: 1, VIDEO_IS_TOO_LARGE: 2 },
                h = { VIDEO_IS_TOO_LONG: 1 },
                b = { MEDIA_NOT_FOUND: 0, INVALID_MEDIA_CODE: 1 },
                v = Object.freeze({ AmplifyVideo: "amplify_video", CommunityBanner: "community_banner_image", ListBanner: "list_banner_image", TweetImage: "tweet_image", TweetVideo: "tweet_video", TweetGif: "tweet_gif", DMImage: "dm_image", DMVideo: "dm_video", DMGif: "dm_gif", Subtitles: "subtitles", ProfileBanner: "banner_image" }),
                y = Object.freeze({ Tweet: "tweet", Dm: "dm", CommunityBanner: "community_banner", ListBanner: "list_banner", ProfileBanner: "profile_banner", Avatar: "avatar", Verification: "verification", TwitterArticle: "twitter_article" }),
                k = (e) => {
                    const { height: i, left: t, width: s } = e,
                        a = Math.round(i / 2);
                    return `&salient_rect=${Math.round(t + s / 2)},${a},1,1`;
                };
            function T(e) {
                const i = e.featureSwitches?.isTrue("blue_longer_video_enabled"),
                    t = (function (e) {
                        return e.userClaims.isTrueAndEnabled("subscriptions_long_video_upload") || e.featureSwitches.isTrue("subscriptions_long_video_upload_override") || !1;
                    })(e);
                return i || t ? 1 : 0;
            }
            function D(e, i, t, f, h) {
                const b = f?.location,
                    v = T({ featureSwitches: e, userClaims: i });
                let k, D;
                if (t.isSubtitles) k = 0;
                else if (t.isGif)
                    switch (b) {
                        case y.Avatar:
                            k = e.getNumberValue("media_async_upload_max_avatar_gif_size", m.Avatar_Gif) * n;
                            break;
                        case y.Dm:
                        case y.Tweet:
                        default:
                            k = e.getNumberValue("media_async_upload_max_gif_size", m.Gif) * n;
                    }
                else {
                    if (!(t instanceof o.ZP))
                        return (function (e, i, t) {
                            let o;
                            switch (i) {
                                case y.Avatar:
                                    o = c;
                                    break;
                                case y.CommunityBanner:
                                case y.ListBanner:
                                case y.ProfileBanner:
                                    o = _;
                                    break;
                                default:
                                    o = a.ZP.isDesktopOS() ? l : u;
                            }
                            const d = e.getNumberValue("media_async_upload_max_image_size", m.Image) * n;
                            return s.Z.getConnectionInfo().then(
                                (s) => {
                                    let n = d;
                                    return "slow-2g" === s.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_slow_2g", 150) * r) : t || "2g" === s.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_2g", 250) * r) : "3g" === s.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_3g", 1500) * r) : "4g" !== s.effectiveType || a.ZP.isDesktopOS() || i !== y.Tweet || (o = l), { maxDimension: o, maxFileSize: Math.min(d, n) };
                                },
                                () => ({ maxDimension: o, maxFileSize: d }),
                            );
                        })(e, b, h);
                    if (1 === v) {
                        if ("dm" === b) D = e.getNumberValue("media_async_upload_longer_dm_video_max_video_duration", g);
                        else D = e.getNumberValue("media_async_upload_longer_video_max_video_duration", p.Duration[v]) * d;
                        k = e.getNumberValue("media_async_upload_longer_video_max_video_size", p.Size[v]) * n;
                    } else (D = e.getNumberValue("media_async_upload_max_video_duration", p.Duration[v]) * d), (k = e.getNumberValue("media_async_upload_max_video_size", p.Size[v]) * n);
                }
                return Promise.resolve({ maxFileSize: k, maxDuration: D });
            }
            function S(e) {
                return !(a.ZP.isIOS() && e.size > 3e8);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Typeahead-1571f5ba.879dccda.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"],
    {
        373516: (e, t, r) => {
            r.d(t, { Bt: () => o, Mp: () => i, OO: () => c, Se: () => E, ZP: () => u, tf: () => l });
            var s = r(228698),
                n = r(768256),
                a = r(828063);
            const o = "PLAY_PREVIEW",
                i = (e) => ({ type: o, playerId: e }),
                c = "PAUSE_PREVIEW",
                l = (e) => ({ type: c, playerId: e }),
                u = (e, t) => {
                    switch (t.type) {
                        case n.ni:
                            return { ...e, initiallyMutedCaptions: t.initiallyMutedCaptions };
                        case o:
                            return e.isPlaying ? e : { ...e, isPreview: !0, controls: { ...e.controls, muteState: s.VE.MUTE_REQUESTED } };
                        case c:
                            return { ...e, isPreview: !0, controls: { ...e.controls, muteState: s.VE.MUTE_REQUESTED } };
                        case s.Gf:
                        case s.Rf:
                        case s.DE:
                        case s.Sg:
                        case s.p1:
                        case a.JO: {
                            if (!e.isPreview) return e;
                            const t = e.tracks.find((t) => t.id === e.currentTrackId);
                            if (!t) return e;
                            const r = "gif" === t.contentType ? void 0 : s.VE.UNMUTE_REQUESTED;
                            return { ...e, isPreview: !1, controls: { ...e.controls, muteState: r } };
                        }
                        default:
                            return e;
                    }
                },
                E = { isPreview: !1 };
        },
        228698: (e, t, r) => {
            r.d(t, { $y: () => L, A3: () => d, A9: () => U, AB: () => z, AI: () => Re, BA: () => j, BN: () => Z, Cx: () => W, D0: () => c, DE: () => f, ET: () => ye, EX: () => s, F3: () => a, Gf: () => i, H4: () => F, JZ: () => o, K5: () => b, KE: () => k, Ku: () => D, LO: () => m, M8: () => C, Mf: () => J, Mn: () => M, OA: () => X, OI: () => Ee, OM: () => B, PB: () => le, PY: () => _e, Pt: () => K, QF: () => g, RM: () => se, Rf: () => E, Sb: () => de, Sg: () => A, U9: () => Y, Ug: () => ie, VE: () => n, Vi: () => he, WS: () => w, Yz: () => ae, a: () => pe, a$: () => O, ak: () => v, cW: () => q, cg: () => ne, er: () => ee, fc: () => fe, gA: () => T, hV: () => Se, hz: () => u, li: () => V, p1: () => x, pK: () => re, pQ: () => l, pm: () => h, qA: () => S, s2: () => Q, s3: () => _, s8: () => N, sO: () => $, sX: () => ce, uJ: () => p, uW: () => H, v3: () => Ie, w7: () => I, x9: () => y, xb: () => ue, xl: () => R, xq: () => P, y4: () => te, zG: () => Te, ze: () => oe, zn: () => G });
            const s = { PAUSE_REQUESTED: "PAUSE_REQUESTED", PLAY_REQUESTED: "PLAY_REQUESTED" },
                n = { MUTE_REQUESTED: "MUTE_REQUESTED", UNMUTE_REQUESTED: "UNMUTE_REQUESTED" },
                a = { CAPTIONS_ON_REQUESTED: "CAPTIONS_ON_REQUESTED", CAPTIONS_OFF_REQUESTED: "CAPTIONS_OFF_REQUESTED", CAPTIONS_RESET_REQUESTED: "CAPTIONS_RESET_REQUESTED" },
                o = { PICTURE_IN_PICTURE_ON_REQUESTED: "PICTURE_IN_PICTURE_ON_REQUESTED", PICTURE_IN_PICTURE_OFF_REQUESTED: "PICTURE_IN_PICTURE_OFF_REQUESTED" },
                i = "REQUEST_PLAY",
                c = (e) => ({ type: i, playerId: e }),
                l = "REQUEST_PAUSE",
                u = (e) => ({ type: l, playerId: e }),
                E = "REQUEST_REPLAY",
                d = (e) => ({ type: E, playerId: e }),
                p = "VIDEO_PLAYED",
                h = (e) => ({ type: p, playerId: e }),
                T = "VIDEO_PAUSED",
                y = (e) => ({ type: T, playerId: e }),
                I = "REQUEST_MUTE",
                S = (e) => ({ type: I, playerId: e }),
                f = "REQUEST_UNMUTE",
                _ = (e) => ({ type: f, playerId: e }),
                R = "REQUEST_PLAYBACK_RATE_CHANGE",
                m = (e, t) => ({ type: R, playbackRate: t, playerId: e }),
                g = "PLAYBACK_RATE_CHANGED",
                C = (e, t) => ({ type: g, playbackRate: t, playerId: e }),
                L = "REQUEST_QUALITY_LEVEL_CHANGE",
                v = (e, t) => ({ type: L, level: t, playerId: e }),
                P = "QUALITY_LEVEL_CHANGED",
                O = (e, t) => ({ type: P, level: t, playerId: e }),
                A = "REQUEST_VOLUME_CHANGE",
                U = (e, t) => ({ type: A, volume: t, playerId: e }),
                D = "VIDEO_VOLUME_CHANGED",
                k = (e, t, r) => ({ type: D, isMuted: t, volume: r, playerId: e }),
                b = "REQUEST_PLAYBACK_TIME_RANGE",
                F = (e, t, r) => ({ type: b, startTimeS: t, endTimeS: r, playerId: e }),
                N = "CANCEL_PLAYBACK_TIME_RANGE",
                w = (e) => ({ type: N, playerId: e }),
                M = "REQUEST_SCRUBBING_CHANGE",
                B = (e, t) => ({ type: M, isScrubbing: t, playerId: e }),
                x = "REQUEST_SEEK_TO",
                V = (e, t) => ({ type: x, timeS: t, playerId: e }),
                Q = "VIDEO_SEEKED",
                Z = (e, t) => ({ type: Q, lastFulfilledSeek: t, playerId: e }),
                G = "VIDEO_SEEKING",
                Y = (e) => ({ type: G, playerId: e }),
                H = "HIDE_CONTROLS",
                K = (e) => ({ type: H, playerId: e }),
                $ = "SHOW_CONTROLS",
                q = (e) => ({ type: $, playerId: e }),
                J = "REQUEST_CAPTIONS_ON",
                z = (e, t = !0) => ({ type: J, isUserSet: t, playerId: e }),
                X = "REQUEST_CAPTIONS_OFF",
                W = (e, t = !0) => ({ type: X, isUserSet: t, playerId: e }),
                j = "CAPTIONS_TOGGLED",
                ee = (e, t) => ({ type: j, areCaptionsShown: t, playerId: e }),
                te = "REQUEST_CAPTION_DEFAULT_OFFSET",
                re = (e, { bottom: t }) => ({ type: te, offset: { bottom: t }, playerId: e }),
                se = "UPDATE_VISIBILITY",
                ne = (e, t, r, s) => ({ type: se, playerId: e, percentVisible: t, percentOfViewportOccupied: r, sizesInfo: s }),
                ae = "CALL_TO_ACTION_CLICKED",
                oe = (e) => ({ type: ae, playerId: e }),
                ie = "CALL_TO_ACTION_IMPRESSION",
                ce = (e) => ({ type: ie, playerId: e }),
                le = "LIVE_CLICKTHROUGH_CLICKED",
                ue = (e) => ({ type: le, playerId: e }),
                Ee = "AUTOPLAY_DISABLED",
                de = (e) => ({ type: Ee, playerId: e }),
                pe = "DATA_USAGE_COLLECTED",
                he = (e, t) => ({ type: pe, playerId: e, bytes: t }),
                Te = "REQUEST_PICTURE_IN_PICTURE_ON",
                ye = (e) => ({ type: Te, playerId: e }),
                Ie = "REQUEST_PICTURE_IN_PICTURE_OFF",
                Se = (e) => ({ type: Ie, playerId: e }),
                fe = "PICTURE_IN_PICTURE_MODE_TOGGLED",
                _e = (e, t) => ({ type: fe, playerId: e, inPiPMode: t }),
                Re = "SET_FULLSCREEN_STATE";
        },
        768256: (e, t, r) => {
            r.d(t, { Am: () => l, HY: () => d, MD: () => y, Se: () => f, ZP: () => S, aX: () => T, fi: () => I, ni: () => c, ql: () => E, uE: () => u });
            var s = r(470833),
                n = r(356841),
                a = r(426582),
                o = r(842337),
                i = r(833828);
            const c = "CONFIGURE_PLAYER",
                l = "RELOADING_PLAYER",
                u = "BROADCAST_UPDATED",
                E = (e, t) => ({ type: u, updatedState: t, playerId: e }),
                d = "CONFIGURATION_LOADED",
                p = (e, t) => ({ type: d, playerState: t, playerId: e }),
                h = "FEATURES_LOADED",
                T = (e, t) => ({ type: h, features: t, playerId: e }),
                y =
                    (e, t, r, s, l, u, E, d, h = {}, T) =>
                    (y) => (
                        y(((e, t, r, s, n, a, o, i, l, u) => ({ type: c, source: t, session: r, analytics: s, playerId: e, adProvider: n, videoConfig: a, promotedContext: o, initiallyMutedCaptions: i, intentToPlayTime: l, precache: u }))(e, t, s, l, u, r, h.promotedContext, h.initiallyMutedCaptions, h.intentToPlayTime, h.precache)),
                        (0, n.Z)(t, r, (0, n.J)(y, (0, i.Sv)(e), (0, i.$n)(e), e, h.showGeolocationPrompt, h.includeBroadcastEventAssociation, T), h)
                            .then((t) => {
                                if ((y(p(e, t)), E(), (0, a.PC)(t))) {
                                    const r = t.source.id,
                                        s = new a.H6(y, (0, i.$n)(e), e, r, h.includeBroadcastEventAssociation);
                                    return (
                                        s.queueUpdate(t.isLive).catch((t) => {
                                            y((0, o.bH)(e, t));
                                        }),
                                        s
                                    );
                                }
                            })
                            .catch((t) => {
                                y((0, o.bH)(e, t)), d();
                            })
                    ),
                I =
                    (e, t, r, s, a, c, u = {}, E) =>
                    (d) => (
                        d(((e, t, r) => ({ type: l, playerId: e, source: t, session: r }))(e, t, s)),
                        (0, n.Z)(t, r, (0, n.J)(d, (0, i.Sv)(e), (0, i.$n)(e), e, u.showGeolocationPrompt, u.includeBroadcastEventAssociation, E), u)
                            .then((t) => {
                                d(p(e, t)), a();
                            })
                            .catch((t) => {
                                d((0, o.bH)(e, t)), c();
                            })
                    ),
                S = (e, t) => {
                    switch (t.type) {
                        case c:
                        case l:
                            return { ...e, ...t.promotedContext, source: t.source, session: t.session, playerId: t.playerId, configuration: { loading: !0 } };
                        case d: {
                            const r = e.currentTrackId ? e.currentTrackId : t.playerState.currentTrackId,
                                n = [...(t.playerState.tracks || []), ...(e.tracks || [])];
                            return t.playerState.features.isDebuggingEnabled && (s.Z.debuggingEnabled = !0), { ...e, ...t.playerState, currentTrackId: r, features: { ...e.features, ...t.playerState.features }, tracks: n, configuration: { loading: !1 } };
                        }
                        case h:
                            return { ...e, features: { ...e.features, ...t.features } };
                        case u: {
                            const { cta: r, isLive: s, viewCount: n, viewerCount: a, ...o } = t.updatedState,
                                { otherTracks: i, sourceTrack: c } = ((e) => {
                                    const t = e.tracks;
                                    return { sourceTrack: t.find((t) => t.id === e.source.trackId), otherTracks: t.filter((t) => t.id !== e.source.trackId) };
                                })(e);
                            return c && (0 === c.requestedTimecode || c.requestedTimecode > 0) && delete o.posterImage, { ...e, ...o, tracks: [...i, { ...c, cta: r, isLive: s, viewerCount: a, viewCount: n }] };
                        }
                        default:
                            return e;
                    }
                },
                f = { configuration: { loading: !1, error: void 0 }, tracks: [] };
        },
        842337: (e, t, r) => {
            r.d(t, { $w: () => E, K4: () => I, Ou: () => l, Se: () => m, Y4: () => o, ZP: () => R, bH: () => p, cJ: () => i, iV: () => d, vq: () => T });
            r(571372);
            var s = r(789403),
                n = r(768256),
                a = r(915331);
            const o = "PLAYBACK_ERROR",
                i = (e, t) => ({ type: o, playerId: e, thrownError: t, isFatal: !0 }),
                c = "PLAYBACK_RATE_ERROR",
                l = (e) => ({ type: c, playerId: e }),
                u = "QUALITY_LEVEL_SWITCH_ERROR",
                E = (e) => ({ type: u, playerId: e }),
                d = "CONFIGURATION_LOAD_ERROR",
                p = (e, t) => ({ type: d, playerId: e, thrownError: t, isFatal: !0 }),
                h = "ERROR_RESOLVED",
                T = (e) => ({ type: h, playerId: e }),
                y = "GEOLOCATION_PROMPT",
                I = (e) => ({ type: y, playerId: e }),
                S = (e) => {
                    switch (e.message) {
                        case s.Z.BROADCAST_ENDED_NO_REPLAY:
                        case s.Z.BROADCAST_NOT_FOUND:
                        case s.Z.DMCA_TAKEDOWN_ERROR:
                        case s.Z.EUROPEAN_COPYRIGHT_VIOLATION:
                        case s.Z.ORIGINAL_CONTEXT_DELETED:
                        case s.Z.LIVE_VIDEO_GEOBLOCK_ERROR:
                        case s.Z.LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR:
                        case s.Z.LIVE_VIDEO_GEOLOCATION_PROMPT:
                        case s.Z.MEDIA_GEOBLOCK_ERROR:
                        case s.Z.MEDIA_NOT_SUPPORTED:
                        case s.Z.MEDIA_FORBIDDEN:
                            return !1;
                        default:
                            return !0;
                    }
                },
                f = (e) => !!S(e) && e.message !== s.Z.LIVE_VIDEO_NO_COOKIES_ERROR,
                _ = (e, t) => {
                    const { currentTrackId: r, errorInfo: s, tracks: n } = t,
                        a = s.count + 1,
                        o = S(e),
                        i = f(e) && a <= s.retryMax,
                        c = "ad" === n?.[r]?.displayType ? !i || !o : t.errorInfo.adFailed;
                    return { backoffMs: i ? 1e3 * t.errorInfo.count : m.backoffMs, count: a, canRetry: o, autoRetry: i, adFailed: c };
                },
                R = (e, t) => {
                    let r;
                    switch (t.type) {
                        case n.HY: {
                            const t = parseInt(e.features.fatalErrorRetryMax, 10),
                                r = isNaN(t) ? m.errorInfo.retryMax : t;
                            return { ...e, errorInfo: { ...e.errorInfo, retryMax: r } };
                        }
                        case n.Am:
                            return { ...e, error: void 0, errorInfo: { ...e.errorInfo, autoRetry: !1, canRetry: !1 } };
                        case d: {
                            const { thrownError: r } = t,
                                n = _(r, e);
                            let a;
                            return (r.message !== s.Z.LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR && r.message !== s.Z.EUROPEAN_COPYRIGHT_VIOLATION) || (a = { copyrightHolder: r.copyrightHolder }), { ...e, error: r.message, errorData: a, errorInfo: { ...e.errorInfo, ...n } };
                        }
                        case o: {
                            const { thrownError: r } = t,
                                s = (0, a.yc)(e.mediaAvailability),
                                n = s ? new Error(s) : r,
                                o = _(n, e);
                            return { ...e, error: n.message, errorInfo: { ...e.errorInfo, ...o } };
                        }
                        case c:
                            return (
                                (r = ((e, t) => {
                                    const { [t]: r, ...s } = e;
                                    return s;
                                })(e.controls, "playbackRate")),
                                { ...e, controls: r }
                            );
                        case u:
                            return (r = { ...e.controls, requestedQualityLevel: -1 }), { ...e, controls: r };
                        case h:
                            return { ...e, error: void 0, errorInfo: { ...e.errorInfo, autoRetry: !1, canRetry: !1 } };
                        case y: {
                            const t = new Error(s.Z.LIVE_VIDEO_GEOLOCATION_PROMPT);
                            return { ...e, error: t.message, errorInfo: { ...e.errorInfo, autoRetry: f(t), canRetry: S(t) } };
                        }
                        default:
                            return e;
                    }
                },
                m = { error: void 0, errorInfo: { adFailed: !1, autoRetry: !1, backoffMs: void 0, canRetry: !1, count: 0, retryMax: 0 }, errorData: void 0 };
        },
        142885: (e, t, r) => {
            r.d(t, { Z: () => s });
            const s = { BROADCAST_EVENT_ASSOCIATION_UPDATED: "broadcastEventAssociationUpdated", FULLSCREEN_ENTERED: "fullscreenEntered", FULLSCREEN_EXITED: "fullscreenExited", HLSJS_INSTANTIATED: "hlsJsInstantiated", GEOBLOCK_ERROR: "geoblockError", LIVE_ENDED: "liveEnded", LIVE_STARTED: "liveStarted", LIVE_CLICKTHROUGH: "liveClickthrough", MUTE: "mute", NO_COOKIES_ERROR: "noCookiesError", PAUSE: "pause", PICTURE_IN_PICTURE_ENTERED: "pictureInPictureEntered", PICTURE_IN_PICTURE_EXITED: "pictureInPictureExited", PLAY: "play", PLAYBACK_COMPLETE: "playbackComplete", READY: "ready", UNMUTE: "unmute" };
        },
        270223: (e, t, r) => {
            r.d(t, { Oo: () => p, Rm: () => h, ZP: () => T });
            r(136728);
            var s = r(22525),
                n = r(789403),
                a = r(228698),
                o = r(768256),
                i = r(842337),
                c = r(142885),
                l = r(828063),
                u = r(773975);
            const E = { [u.JA]: c.Z.HLSJS_INSTANTIATED, [u.fh]: c.Z.READY, [u.qx]: c.Z.PLAYBACK_COMPLETE, [a.gA]: c.Z.PAUSE, [a.uJ]: c.Z.PLAY },
                d = {},
                p = (e, t, r) => {
                    void 0 === d[e] && (d[e] = {}), void 0 === d[e][t] && (d[e][t] = []), d[e][t].push(r);
                },
                h = (e) => {
                    delete d[e];
                },
                T = (e) => (t) => (r) => {
                    const p = r.playerId,
                        h = r.type,
                        T = e.getState().players[p],
                        y = t(r),
                        I = e.getState().players[p];
                    let S, f;
                    if (p in d) {
                        const e = T.tracks.find((e) => "content" === e.displayType),
                            t = I.tracks.find((e) => "content" === e.displayType);
                        switch (h) {
                            case i.Y4:
                                r.thrownError.message === n.Z.LIVE_VIDEO_GEOBLOCK_ERROR ? (S = c.Z.GEOBLOCK_ERROR) : r.thrownError.message === n.Z.LIVE_VIDEO_NO_COOKIES_ERROR && (S = c.Z.NO_COOKIES_ERROR);
                                break;
                            case a.Ku:
                                !T.isMuted && I.isMuted ? (S = c.Z.MUTE) : T.isMuted && !I.isMuted && (S = c.Z.UNMUTE);
                                break;
                            case o.uE:
                                if ((void 0 !== e && void 0 !== t && (e.isLive && !t.isLive ? (S = c.Z.LIVE_ENDED) : !e.isLive && t.isLive && (S = c.Z.LIVE_STARTED)), !S && (T.eventTitle !== I.eventTitle || T.eventDescription !== I.eventDescription || T.eventUrl !== I.eventUrl))) {
                                    const { eventDescription: e, eventTitle: t, eventUrl: r } = I;
                                    (S = c.Z.BROADCAST_EVENT_ASSOCIATION_UPDATED), (f = { eventTitle: t, eventDescription: e, eventUrl: r });
                                }
                                break;
                            case a.PB:
                                T.liveClickthroughClicked !== I.liveClickthroughClicked && (S = c.Z.LIVE_CLICKTHROUGH);
                                break;
                            case a.fc: {
                                const { inPiPMode: e } = T,
                                    { inPiPMode: t } = I;
                                !e && t && (S = c.Z.PICTURE_IN_PICTURE_ENTERED), e && !t && (S = c.Z.PICTURE_IN_PICTURE_EXITED);
                                break;
                            }
                            case l.AI: {
                                const { isFullscreen: e } = T.fullscreen,
                                    { isFullscreen: t } = I.fullscreen;
                                !e && t ? (S = c.Z.FULLSCREEN_ENTERED) : e && !t && (S = c.Z.FULLSCREEN_EXITED);
                                break;
                            }
                            case u.qx: {
                                const e = (0, s.Ci)(I);
                                (S = c.Z.PLAYBACK_COMPLETE), (f = { shouldLoop: e.shouldLoop, tracksFinished: I.tracksFinished });
                                break;
                            }
                            default:
                                S = E[h];
                        }
                        ((e, t, r) => {
                            t in d[e] &&
                                (d[e][t], 1) &&
                                d[e][t].forEach((e) => {
                                    "function" == typeof e && e(r);
                                });
                        })(p, S, f),
                            S === c.Z.READY &&
                                ((e, t) => {
                                    t in d[e] && delete d[e][t];
                                })(p, S);
                    }
                    return y;
                };
        },
        486934: (e, t, r) => {
            r.d(t, { ZP: () => i, mu: () => o });
            var s = r(768256),
                n = r(833828);
            const a = "GET_FEATURE_VALUE",
                o = (e, t) => ({ feature: t, playerId: e, type: a }),
                i = (e) => (t) => (r) => {
                    if (r.type === a) {
                        const { feature: t, playerId: a } = r;
                        let o;
                        const i = (0, n.__)(a);
                        return i && i.getValue ? ((o = i.getValue(t)), e.dispatch((0, s.aX)(a, { [t]: o }))) : e.dispatch((0, s.aX)(a, {})), o;
                    }
                    return t(r);
                };
        },
        828063: (e, t, r) => {
            r.d(t, { AI: () => i, Cn: () => a, JO: () => s, Se: () => u, ZP: () => l, Zx: () => n, g3: () => o, ye: () => c });
            const s = "REQUEST_FULLSCREEN",
                n = (e, t, r) => ({ type: s, playerId: e, containerEl: t, videoEl: r }),
                a = "REQUEST_SHRINK",
                o = (e, t) => ({ playerId: e, type: a, element: t }),
                i = "SET_FULLSCREEN_STATE",
                c = (e, t) => ({ type: i, playerId: e, isFullscreen: t }),
                l = (e, t) => (t.type === i ? { ...e, fullscreen: { ...e.fullscreen, isFullscreen: t.isFullscreen } } : e),
                u = { fullscreen: { isFullscreen: !1 } };
        },
        724429: (e, t, r) => {
            r.d(t, { eU: () => I, ZP: () => f, ns: () => S });
            var s = r(471856),
                n = r(373516),
                a = r(22525),
                o = r(228698),
                i = r(768256),
                c = r(773975);
            const l = (e, t) => {
                    const { [t]: r, ...s } = e;
                    return s;
                },
                u = (e) => {
                    const { intentToPlayTime: t } = e;
                    return void 0 === t ? new Date() : t;
                },
                E = { playbackRate: 1, volume: 1, areCaptionsShown: !1, hasCaptions: !1, hasPlaybackStarted: !1, intentToPlayTime: void 0, inPiPMode: !1, isMuted: !1, isPlaying: !1, isScrubbing: !1, isSeeking: !1, controls: { isHidden: !0, isPosterShown: !0, captionDefaultOffset: { bottom: 0 } } };
            var d = r(842337),
                p = r(828063),
                h = r(418577);
            const T = { ...s.Se, ...n.Se, ...E, ...i.Se, ...d.Se, ...p.Se, ...h.Se, ...c.Se, percentVisible: 1, percentOfViewportOccupied: 1, sizesInfo: {} },
                y = [
                    s.ZP,
                    i.ZP,
                    (e, t) => {
                        let r;
                        switch (t.type) {
                            case i.ni:
                                return { ...e, intentToPlayTime: t.intentToPlayTime };
                            case o.Gf:
                            case n.Bt: {
                                if (e.isPlaying && e.controls.playState !== o.EX.PAUSE_REQUESTED) return e;
                                const t = (0, a.Ci)(e),
                                    r = (0, a.x1)(e);
                                t && "maxLoopingThresholdSec" in t && (0 !== t.loopCounter || t.shouldLoop || (t.shouldLoop = !0));
                                return { ...e, intentToPlayTime: u(e), tracks: t ? [...r, { ...t }] : e.tracks, controls: { ...e.controls, playState: o.EX.PLAY_REQUESTED } };
                            }
                            case n.OO:
                            case o.pQ:
                            case o.Yz:
                                return e.isPlaying || e.controls.playState === o.EX.PLAY_REQUESTED ? { ...e, controls: { ...e.controls, playState: o.EX.PAUSE_REQUESTED } } : e;
                            case o.Rf: {
                                const t = (0, a.Ci)(e),
                                    r = (0, a.x1)(e);
                                return t && ("maxLoopCount" in t || "maxLoopingThresholdSec" in t) && ((t.loopCounter = 0), (t.shouldLoop = !0)), { ...e, intentToPlayTime: u(e), tracks: t ? [...r, { ...t }] : e.tracks, controls: { ...e.controls, isReplayButtonShown: !1, playState: o.EX.PLAY_REQUESTED } };
                            }
                            case o.uJ:
                                return (r = l(e.controls, "playState")), e.controls.playState !== o.EX.PLAY_REQUESTED && (r.playState = e.controls.playState), (r.isPosterShown = !1), { ...e, controls: r, hasPlaybackStarted: !0, isPlaying: !0 };
                            case o.gA:
                                return (r = l(e.controls, "playState")), e.controls.playState !== o.EX.PAUSE_REQUESTED && (r.playState = e.controls.playState), { ...e, controls: r, isPlaying: !1 };
                            case o.w7:
                                return { ...e, controls: { ...e.controls, muteState: o.VE.MUTE_REQUESTED } };
                            case o.DE:
                                return (r = { ...e.controls, muteState: o.VE.UNMUTE_REQUESTED }), 0 !== e.volume || e.controls.volume > 0 || (r.volume = 1), { ...e, controls: r };
                            case o.Sg:
                                return (r = { ...e.controls, volume: t.volume }), 0 !== t.volume || e.isMuted ? t.volume > 0 && e.isMuted && (r.muteState = o.VE.UNMUTE_REQUESTED) : (r.muteState = o.VE.MUTE_REQUESTED), { ...e, controls: r };
                            case o.Ku:
                                return (r = l(l(e.controls, "muteState"), "volume")), e.controls.muteState !== o.VE.MUTE_REQUESTED || t.isMuted ? e.controls.muteState === o.VE.UNMUTE_REQUESTED && t.isMuted && (r.muteState = o.VE.UNMUTE_REQUESTED) : (r.muteState = o.VE.MUTE_REQUESTED), t.volume !== e.controls.volume && (r.volume = e.controls.volume), { ...e, controls: r, volume: t.volume, isMuted: t.isMuted };
                            case o.p1:
                                return { ...e, isSeeking: !0, controls: { ...e.controls, seekTarget: t.timeS } };
                            case o.Mn:
                                return { ...e, isScrubbing: t.isScrubbing };
                            case o.K5: {
                                const { endTimeS: r, startTimeS: s } = t;
                                return { ...e, controls: { ...e.controls, playbackTimeRange: { startTimeS: s, endTimeS: r } } };
                            }
                            case o.s2:
                                return t.lastFulfilledSeek === e.controls.seekTarget ? ((r = l(e.controls, "scrubToFraction")), (r = l(e.controls, "seekTarget"))) : (r = e.controls), { ...e, isSeeking: !1, controls: r };
                            case o.s8:
                                return (r = l(e.controls, "playbackTimeRange")), { ...e, controls: r };
                            case o.zn:
                                return { ...e, isSeeking: !0 };
                            case o.uW:
                                return { ...e, controls: { ...e.controls, isHidden: !0 } };
                            case o.sO:
                                return { ...e, controls: { ...e.controls, isHidden: !1 } };
                            case o.Mf:
                                return e.areCaptionsShown ? e : { ...e, userSpecifiedCaptions: t.isUserSet, controls: { ...e.controls, captionsState: o.F3.CAPTIONS_ON_REQUESTED } };
                            case o.OA:
                                return !1 === e.areCaptionsShown ? e : { ...e, userSpecifiedCaptions: t.isUserSet, controls: { ...e.controls, captionsState: o.F3.CAPTIONS_OFF_REQUESTED } };
                            case o.BA:
                                return e.areCaptionsShown === t.areCaptionsShown ? e : ((r = l(e.controls, "captionsState")), { ...e, areCaptionsShown: t.areCaptionsShown, controls: r });
                            case o.y4: {
                                const { offset: r } = t,
                                    { bottom: s } = r;
                                return s === e.controls.captionDefaultOffset?.bottom ? e : { ...e, controls: { ...e.controls, captionDefaultOffset: { bottom: s } } };
                            }
                            case c.qx: {
                                const t = { ...e },
                                    r = (0, a.Ci)(e),
                                    s = (0, a.x1)(e),
                                    n = { ...r };
                                if (r && "maxLoopCount" in r) r.loopCounter >= r.maxLoopCount - 1 ? (n.shouldLoop = !1) : (n.loopCounter += 1), (t.tracks = [...s, n]);
                                else if (r && "maxLoopingThresholdSec" in r && void 0 !== r.durationMs) {
                                    (r.loopCounter + 1) * (r.durationMs / 1e3) >= r.maxLoopingThresholdSec ? ((n.shouldLoop = !1), (n.loopCounter = 0)) : (n.loopCounter += 1), (t.tracks = [...s, n]);
                                }
                                const { shouldLoop: i } = n || {};
                                return 0 === e.nextTrackIds.length && (e.isPreview ? (t.controls = { ...e.controls, isPosterShown: !i }) : (t.controls = { ...e.controls, isHidden: i, isReplayButtonShown: !i, playState: i ? void 0 : o.EX.PAUSE_REQUESTED })), t;
                            }
                            case o.RM:
                                return { ...e, percentVisible: t.percentVisible, percentOfViewportOccupied: t.percentOfViewportOccupied, sizesInfo: t.sizesInfo || {} };
                            case o.OI: {
                                (r = l(e.controls, "playState")), e.controls.playState !== o.EX.PLAY_REQUESTED && (r.playState = e.controls.playState);
                                const t = (0, a.Ci)(e),
                                    s = (0, a.x1)(e);
                                return { ...e, controls: { ...r, isPosterShown: !0 }, tracks: [...s, { ...t, isBuffering: !1 }] };
                            }
                            case o.a: {
                                const r = void 0 === e.dataUsageBytes ? t.bytes : e.dataUsageBytes + t.bytes;
                                return { ...e, dataUsageBytes: r };
                            }
                            case o.PB: {
                                const t = e.liveClickthroughClicked || 0;
                                return { ...e, liveClickthroughClicked: 1 + t };
                            }
                            case o.zG:
                                return { ...e, controls: { ...e.controls, pipState: o.JZ.PICTURE_IN_PICTURE_ON_REQUESTED } };
                            case o.v3:
                                return { ...e, controls: { ...e.controls, pipState: o.JZ.PICTURE_IN_PICTURE_OFF_REQUESTED } };
                            case o.fc:
                                return (r = l(e.controls, "pipState")), { ...e, inPiPMode: t.inPiPMode, controls: r };
                            case o.xl:
                                return t.playbackRate <= 0 || t.playbackRate === e.playbackRate ? e : ((r = { ...e.controls, playbackRate: t.playbackRate }), { ...e, controls: r });
                            case o.QF:
                                return (r = l(e.controls, "playbackRate")), { ...e, playbackRate: t.playbackRate, controls: r };
                            case o.$y:
                                return t.level === e.qualityLevel ? e : ((r = { ...e.controls, requestedQualityLevel: t.level }), { ...e, controls: r });
                            case o.xq:
                                return (r = l(e.controls, "requestedQualityLevel")), { ...e, qualityLevel: t.level, controls: r };
                            default:
                                return e;
                        }
                    },
                    c.ZP,
                    n.ZP,
                    d.ZP,
                    p.ZP,
                    h.ZP,
                ],
                I = "TEARDOWN_PLAYER",
                S = (e) => ({ type: I, playerId: e }),
                f = (e = {}, t, r = y) => {
                    if (void 0 !== t.playerId) {
                        if (t.type === I) {
                            const r = { ...e };
                            return delete r[t.playerId], r;
                        }
                        let s = e[t.playerId];
                        if (t.type === i.Am) {
                            if (!s) return e;
                            s = { ...T, errorInfo: s.errorInfo, features: s.features };
                        }
                        const n = ((e = T, t, r) => r.reduce((e, r) => r(e, t), e))(s, t, r);
                        if (void 0 !== n) return { ...e, [t.playerId]: n };
                    }
                    return e;
                };
        },
        418577: (e, t, r) => {
            r.d(t, { $u: () => d, BufferStateRequest: () => o, Go: () => l, HP: () => c, Se: () => h, YF: () => i, ZP: () => p, t_: () => u });
            var s = r(104591),
                n = r(768256),
                a = r(773975);
            const o = { IDLE: "IDLE", BUFFERING_REQUESTED: "BUFFERING_REQUESTED", PREBUFFERING_COMPLETED: "PREBUFFERING_COMPLETED", BUFFERING_COMPLETED: "BUFFERING_COMPLETED" },
                i = "SET_BUFFERING_STATUS",
                c = (e, t, r) => ({ type: i, playerId: e, bufferingStatus: t, maximumBufferLength: r }),
                l = "SET_TARGET_DURATION",
                u = (e, t) => ({ type: l, targetDuration: t, playerId: e }),
                E = "UPDATE_BUFFER_LENGTH",
                d = (e, t) => ({ type: E, maximumBufferLength: t, playerId: e }),
                p = (e, t) => {
                    switch (t.type) {
                        case n.ni:
                            return { ...e, isPrecacheEnabled: t.precache };
                        case a.JA: {
                            const t = e?.features?.[s.Tq];
                            if (t) {
                                const t = void 0 === e.bufferingStatus ? o.IDLE : e.bufferingStatus;
                                return { ...e, bufferingStatus: t, maximumBufferLength: void 0, targetDuration: void 0 };
                            }
                            return { ...e, maximumBufferLength: void 0, targetDuration: void 0 };
                        }
                        case i:
                            return { ...e, bufferingStatus: t.bufferingStatus, maximumBufferLength: void 0 !== t.maximumBufferLength ? t.maximumBufferLength : e.maximumBufferLength };
                        case E:
                            return t.maximumBufferLength === e.maximumBufferLength ? e : { ...e, bufferingStatus: e?.features?.[s.Tq] ? o.BUFFERING_REQUESTED : void 0, maximumBufferLength: t.maximumBufferLength };
                        case l:
                            return { ...e, targetDuration: t.targetDuration };
                        default:
                            return e;
                    }
                },
                h = { bufferingStatus: void 0, isPrecacheEnabled: void 0, maximumBufferLength: void 0, targetDuration: void 0 };
        },
        773975: (e, t, r) => {
            r.d(t, { $9: () => L, Bw: () => o, Dk: () => u, Eo: () => l, Ev: () => N, FI: () => b, IV: () => E, Iu: () => A, JA: () => S, Ky: () => i, PC: () => T, RR: () => g, Se: () => Q, UL: () => p, XB: () => P, ZP: () => x, fh: () => d, ho: () => I, pp: () => f, qV: () => D, qx: () => c });
            var s = r(22525),
                n = r(104591),
                a = r(228698);
            const o = "TICK",
                i = (e, t, r, s, n, a, i, c) => ({ type: o, currentTimeMs: t, absoluteTimeMs: r, durationMs: s, playerId: e, hasCaptions: n, currentVariantIndex: a, videoHeight: i, videoWidth: c }),
                c = "TRACK_FINISHED",
                l = (e) => ({ type: c, playerId: e }),
                u = "NEXT_TRACK",
                E = (e) => ({ type: u, playerId: e }),
                d = "PLAYER_READY",
                p = (e) => ({ type: d, playerId: e }),
                h = "ROTATION_UPDATED",
                T = (e, t) => ({ type: h, playerId: e, rotation: t }),
                y = "BLANK_UPDATED",
                I = (e, t) => ({ type: y, playerId: e, blank: t }),
                S = "HLSJS_READY",
                f = (e) => ({ type: S, playerId: e }),
                _ = new Date("Jan 01 1900 GMT").getTime(),
                R = new Date("Jan 01 1970 GMT").getTime() - _,
                m = "ID3_METADATA",
                g = (e, t) => ({ type: m, playerId: e, metadata: t }),
                C = "ID3_TAG_DATA",
                L = (e, t) => {
                    const r = (Date.now() + R) / 1e3;
                    return { type: C, playerId: e, id3Json: t, currentNtpTime: r };
                },
                v = "AVAILABLE_RESOLUTIONS",
                P = (e, t) => ({ type: v, playerId: e, resolutions: t }),
                O = "BUFFER_START",
                A = (e) => ({ type: O, playerId: e }),
                U = "BUFFER_END",
                D = (e) => ({ type: U, playerId: e }),
                k = "BITRATE_SWITCHED",
                b = (e, t, r) => ({ type: k, playerId: e, bitrate: t, bandwidthEstimateBps: r }),
                F = "ACTIVE_TEXT_CUES_UPDATE",
                N = (e, t) => ({ type: F, playerId: e, cues: t }),
                w = (e) => {
                    const t = e.tracks;
                    return { currentTrack: t.find((t) => t.id === e.currentTrackId), otherTracks: t.filter((t) => t.id !== e.currentTrackId) };
                },
                M = (e, t) => {
                    const { currentTrack: r, otherTracks: s } = w(e);
                    return s.splice(e.currentTrackId, 0, t(r)), { ...e, tracks: s };
                },
                B = (e, t) => M(e, (e) => ({ ...e, ...t })),
                x = (e, t) => {
                    switch (t.type) {
                        case o:
                            return B(e, { durationMs: t.durationMs, currentTimeMs: t.currentTimeMs, absoluteTimeMs: t.absoluteTimeMs, hasCaptions: t.hasCaptions, currentVariantIndex: t.currentVariantIndex, videoHeight: t.videoHeight, videoWidth: t.videoWidth });
                        case a.uJ:
                            return { ...M(e, (e) => ({ ...e, playbackCompleted: !1 })), tracksFinished: !1 };
                        case d: {
                            const t = e?.features?.[n.GN],
                                r = t && (0, s.Wp)(e);
                            return B(e, { playerReady: !0, playbackRateSupported: r });
                        }
                        case h:
                            return B(e, { rotation: t.rotation });
                        case y:
                            return B(e, { blank: t.blank });
                        case m: {
                            const { metadata: r } = t;
                            let s = e;
                            return r && (s = B(s, { metadata: r })), s;
                        }
                        case C: {
                            const { currentNtpTime: r, id3Json: s } = t,
                                n = s.ntp;
                            let a = e;
                            if (n) {
                                a = B(a, { liveLatencyMs: 1e3 * (r - n), id3NtpTime: n });
                            }
                            return a;
                        }
                        case v: {
                            const { resolutions: r } = t;
                            let s = e;
                            return r && (s = B(s, { availableResolutions: r })), s;
                        }
                        case k:
                            return B(e, { currentBitrate: t.bitrate, bandwidthEstimateBps: t.bandwidthEstimateBps });
                        case O:
                            return B(e, { isBuffering: !0 });
                        case U:
                            return B(e, { isBuffering: !1 });
                        case u:
                            return V(e, !0);
                        case c: {
                            const t = M(e, (e) => ({ ...e, playbackCompleted: !0 }));
                            return V(t);
                        }
                        case F:
                            return B(e, { textCues: t.cues });
                        default:
                            return e;
                    }
                },
                V = (e, t) => {
                    const { currentTrack: r } = w(e),
                        s = !1 !== r.shouldAutoAdvance || t,
                        n = "ad" === r.displayType && e.errorInfo?.adFailed;
                    if (e.nextTrackIds.length > 0 && s) {
                        const [t, ...r] = e.nextTrackIds,
                            s = e.tracks,
                            o = s.find((e) => e.id === t),
                            i = s.filter((e) => e.id !== t);
                        return { ...e, currentTrackId: t, nextTrackIds: r, error: n ? void 0 : e.error, controls: { ...e.controls, playState: n && !e.isPlaying ? void 0 : a.EX.PLAY_REQUESTED, captionsState: e.areCaptionsShown ? a.F3.CAPTIONS_ON_REQUESTED : a.F3.CAPTIONS_OFF_REQUESTED }, intentToPlayTime: void 0, tracks: [...i, { ...o, playerReady: !1 }] };
                    }
                    return { ...e, intentToPlayTime: void 0, isPlaying: !!r.shouldLoop, tracksFinished: !r.shouldLoop && 0 === e.nextTrackIds.length };
                },
                Q = { nextTrackIds: [] };
        },
        677138: (e, t, r) => {
            r.d(t, { Z: () => w });
            var s = r(118717),
                n = r(643292),
                a = r(154462),
                o = r(659224),
                i = r(373516),
                c = r(228698),
                l = r(768256),
                u = r(842337),
                E = r(833828),
                d = r(724429),
                p = r(773975);
            const h = {};
            var T = r(828063),
                y = r(915331);
            var I = r(270223),
                S = r(486934);
            class f {
                constructor(e) {
                    (this.onNativeFullscreenBegin = () => {
                        this.setFullscreen(!0);
                    }),
                        (this.onNativeFullscreenEnd = () => {
                            this.setFullscreen(!1);
                        }),
                        (this.onFullscreenChanged = () => {
                            const e = (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) === this.fullscreenTarget;
                            e || ((this.fullscreenTarget = void 0), this.removeDocumentListeners()), this.setFullscreen(e);
                        }),
                        (this.expand = (e, t, r) => {
                            t &&
                                ((this.expandTimeout = setTimeout(() => {
                                    this.setFullscreen(!1);
                                }, 1e3)),
                                this.fullscreenTarget && (this.fullscreenTarget.removeEventListener("touchstart", this._swipeStart), this.fullscreenTarget.removeEventListener("transitionend", this._fullscreenTransitionEnd), this.setFullscreen(!1)),
                                (this.fullscreenTarget = t),
                                (this.playerId = e),
                                this.addDocumentListeners(),
                                t.requestFullscreen
                                    ? t.requestFullscreen()
                                    : t.mozRequestFullScreen
                                      ? t.mozRequestFullScreen()
                                      : t.webkitRequestFullscreen
                                        ? t.webkitRequestFullscreen()
                                        : t.msRequestFullscreen
                                          ? t.msRequestFullscreen()
                                          : t.webkitEnterFullscreen
                                            ? (this.addElementListeners(t), t.webkitEnterFullscreen())
                                            : r?.webkitEnterFullscreen
                                              ? ((this.fullscreenTarget = r), this.addElementListeners(r), r.webkitEnterFullscreen())
                                              : (this.removeDocumentListeners(),
                                                this.removeElementListeners(),
                                                (this.nonFullscreenStyle = { ...t.style }),
                                                (this.nonFullscreenPosition = t.getBoundingClientRect()),
                                                (t.style.position = "fixed"),
                                                (t.style.width = this.nonFullscreenPosition.right - this.nonFullscreenPosition.left + "px"),
                                                (t.style.height = this.nonFullscreenPosition.bottom - this.nonFullscreenPosition.top + "px"),
                                                (t.style.top = `${this.nonFullscreenPosition.top}px`),
                                                (t.style.left = `${this.nonFullscreenPosition.left}px`),
                                                (t.style.zIndex = "100"),
                                                window.requestAnimationFrame(() => {
                                                    (t.style.transition = "width 0.25s, height 0.25s, top 0.25s, left 0.25s"), (t.style.width = "100%"), (t.style.height = "100%"), (t.style.top = "0"), (t.style.left = "0"), t.addEventListener("transitionend", this._fullscreenTransitionEnd);
                                                })));
                        }),
                        (this.shrink = (e) => {
                            e === this.playerId && (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : this.fullscreenTarget.webkitExitFullscreen ? this.fullscreenTarget.webkitExitFullscreen() : ((this.fullscreenTarget.style.width = this.nonFullscreenPosition.right - this.nonFullscreenPosition.left + "px"), (this.fullscreenTarget.style.height = this.nonFullscreenPosition.bottom - this.nonFullscreenPosition.top + "px"), (this.fullscreenTarget.style.top = `${this.nonFullscreenPosition.top}px`), (this.fullscreenTarget.style.left = `${this.nonFullscreenPosition.left}px`), (this.fullscreenTarget.style.transition = "width 0.25s, height 0.25s, top 0.25s, left 0.25s"), this.fullscreenTarget.addEventListener("transitionend", this._shrinkTransitionEnd), this.fullscreenTarget.removeEventListener("touchstart", this._swipeStart)));
                        }),
                        (this._swipeStart = (e) => {
                            this.addSwipeListeners(), (this.touchStart = e.touches[0]);
                        }),
                        (this._swipeMove = (e) => {
                            e.preventDefault();
                            const t = e.touches[0].pageY - this.touchStart.pageY;
                            this.swipeVector = Math.abs(t);
                            const r = (t / this.swipeVector) * Math.min(this.swipeVector, ((this.swipeVector / (this.swipeVector + (3 * this.fullscreenTarget.clientHeight) / 4)) * this.fullscreenTarget.clientHeight * 1) / 2);
                            this.fullscreenTarget.style.top = `${r}px`;
                        }),
                        (this._swipeEnd = () => {
                            this.removeSwipeListeners(), this.swipeVector > this.fullscreenTarget.clientHeight / 4 ? this.shrink(this.playerId) : (this.fullscreenTarget.style.top = "0");
                        }),
                        (this._fullscreenTransitionEnd = () => {
                            (this.fullscreenTarget.style.transition = ""), this.fullscreenTarget.removeEventListener("transitionend", this._fullscreenTransitionEnd), this.fullscreenTarget.addEventListener("touchstart", this._swipeStart), this.setFullscreen(!0);
                        }),
                        (this._shrinkTransitionEnd = () => {
                            this.fullscreenTarget.removeEventListener("transitionend", this._shrinkTransitionEnd), (this.fullscreenTarget.style.transition = ""), (this.fullscreenTarget.style.position = this.nonFullscreenStyle.position), (this.fullscreenTarget.style.width = this.nonFullscreenStyle.width), (this.fullscreenTarget.style.height = this.nonFullscreenStyle.height), (this.fullscreenTarget.style.top = this.nonFullscreenStyle.top), (this.fullscreenTarget.style.left = this.nonFullscreenStyle.left), (this.fullscreenTarget.style.zIndex = this.nonFullscreenStyle.zIndex), this.setFullscreen(!1), (this.fullscreenTarget = void 0);
                        }),
                        (this.fullscreenTarget = void 0),
                        (this.playerId = void 0),
                        (this.onChange = e),
                        (this.isFullscreen = !1);
                }
                addDocumentListeners() {
                    document.addEventListener("webkitfullscreenchange", this.onFullscreenChanged), document.addEventListener("mozfullscreenchange", this.onFullscreenChanged), document.addEventListener("MSFullscreenChange", this.onFullscreenChanged), document.addEventListener("fullscreenchange", this.onFullscreenChanged);
                }
                removeDocumentListeners() {
                    document.removeEventListener("webkitfullscreenchange", this.onFullscreenChanged), document.removeEventListener("mozfullscreenchange", this.onFullscreenChanged), document.removeEventListener("MSFullscreenChange", this.onFullscreenChanged), document.removeEventListener("fullscreenchange", this.onFullscreenChanged);
                }
                addSwipeListeners() {
                    document.addEventListener("touchend", this._swipeEnd), document.addEventListener("touchmove", this._swipeMove);
                }
                addElementListeners(e) {
                    e.addEventListener("webkitbeginfullscreen", this.onNativeFullscreenBegin), e.addEventListener("webkitendfullscreen", this.onNativeFullscreenEnd);
                }
                removeElementListeners() {
                    const { fullscreenTarget: e } = this;
                    e && (e.removeEventListener("webkitbeginfullscreen", this.onNativeFullscreenBegin), e.removeEventListener("webkitendfullscreen", this.onNativeFullscreenEnd), e.removeEventListener("transitionend", this._fullscreenTransitionEnd), e.removeEventListener("transitionend", this._shrinkTransitionEnd));
                }
                removeSwipeListeners() {
                    document.removeEventListener("touchend", this._swipeEnd), document.removeEventListener("touchmove", this._swipeMove);
                }
                setFullscreen(e) {
                    clearTimeout(this.expandTimeout), this.onChange(this.playerId, e), e || (this.cleanup(), (this.fullscreenTarget = void 0), (this.playerId = void 0));
                }
                cleanup() {
                    clearTimeout(this.expandTimeout), this.removeDocumentListeners(), this.removeElementListeners(), this.removeSwipeListeners();
                }
            }
            var _ = r(834025);
            const R = "volume",
                m = "captions",
                g = "ENABLED",
                C = "DISABLED";
            function L() {
                const e = (0, _.P)(m);
                if ((t = e) === g || t === C) return e;
                var t;
            }
            function v(e) {
                (0, _.E)(m, e);
            }
            var P = r(297310),
                O = r(104591),
                A = r(418577);
            const { BUFFERING_COMPLETED: U, BUFFERING_REQUESTED: D, IDLE: k, PREBUFFERING_COMPLETED: b } = A.BufferStateRequest,
                F = (e, t) => {
                    Object.keys(t).forEach((r) => {
                        r = parseInt(r, 10);
                        const s = t?.[r],
                            { bufferingStatus: n, targetDuration: a } = s || {};
                        !(n === U) && void 0 !== n && !(n === b) && a && e.dispatch((0, A.HP)(r, D, P.dN * a));
                    });
                },
                N = [
                    o.Z,
                    (e) => (t) => (r) => {
                        switch (r.type) {
                            case i.Bt: {
                                const { initiallyMutedCaptions: t, userSpecifiedCaptions: s } = (0, y.YI)(e, r.playerId) || {};
                                t && !s && e.dispatch((0, c.AB)(r.playerId, !1));
                                break;
                            }
                            case c.Gf:
                            case c.Rf:
                            case c.DE:
                            case c.Sg:
                            case c.p1:
                            case T.JO: {
                                const { isPreview: t, userSpecifiedCaptions: s } = (0, y.YI)(e, r.playerId) || {};
                                t && !s && e.dispatch((0, c.Cx)(r.playerId, !1));
                                break;
                            }
                        }
                        return t(r);
                    },
                    S.ZP,
                    (e) => {
                        const t = new f((t, r) => {
                            e.dispatch((0, T.ye)(t, r));
                        });
                        return (r) => (s) => {
                            const n = e.getState().players[s.playerId],
                                { type: a } = s;
                            return !n || (a !== T.JO && a !== T.Cn) || (a === T.JO ? (e.dispatch((0, T.ye)(s.playerId, !0)), t.expand(s.playerId, s.containerEl, s.videoEl)) : t.shrink(s.playerId)), r(s);
                        };
                    },
                    (e) => (t) => (r) => {
                        switch (r.type) {
                            case l.ni:
                                switch (
                                    (e.dispatch(
                                        (0, c.A9)(
                                            r.playerId,
                                            (function () {
                                                const e = parseFloat((0, _.P)(R));
                                                return isNaN(e) ? 1 : e;
                                            })(),
                                        ),
                                    ),
                                    L())
                                ) {
                                    case g:
                                        e.dispatch((0, c.AB)(r.playerId, !0));
                                        break;
                                    case C:
                                        e.dispatch((0, c.Cx)(r.playerId, !0));
                                }
                                break;
                            case c.Ku:
                                (s = r.volume) >= 0 && null !== s && (0, _.E)(R, s);
                                break;
                            case c.Mf:
                                r.isUserSet && v(g);
                                break;
                            case c.OA:
                                r.isUserSet && v(C);
                        }
                        var s;
                        return t(r);
                    },
                    (e) => (t) => (r) => {
                        const s = e.getState().players,
                            n = s[r.playerId],
                            { bufferingStatus: a, controls: o, isPlaying: l, isPrecacheEnabled: u, targetDuration: E } = n || {},
                            d = n?.features?.[O.Tq];
                        switch (r.type) {
                            case i.OO:
                            case c.pQ:
                                d && void 0 !== a && F(e, s);
                                break;
                            case i.Bt:
                            case c.Gf:
                                if (d && void 0 !== a) {
                                    const t = a === U;
                                    if (E) {
                                        const t = E * P.dN;
                                        e.dispatch((0, A.$u)(r.playerId, t));
                                    }
                                    t ||
                                        ((e, t, r) => {
                                            Object.keys(t).forEach((s) => {
                                                s = parseInt(s, 10);
                                                const n = t?.[s],
                                                    { bufferingStatus: a, controls: o, isPlaying: i } = n || {},
                                                    c = void 0 !== a,
                                                    l = a === b;
                                                a !== U && "PLAY_REQUESTED" !== o?.playState && !i && c && s !== r && !l && e.dispatch((0, A.HP)(s, k, 0));
                                            });
                                        })(e, s, r.playerId);
                                } else if (E && !u) {
                                    const t = E * P.dN;
                                    e.dispatch((0, A.$u)(r.playerId, t));
                                }
                                break;
                            case A.YF:
                                if (d) {
                                    r.bufferingStatus === U && ("PLAY_REQUESTED" === n?.controls?.playState || n?.isPlaying) && F(e, s);
                                }
                                break;
                            case A.Go:
                                if (r.targetDuration && d) {
                                    const t = (0, y.ks)(s, (e) => (e?.isPlaying || "PLAY_REQUESTED" === e?.controls?.playState) && void 0 !== e?.bufferingStatus && e?.bufferingStatus !== U);
                                    if (void 0 === t || t.playerId === r.playerId) {
                                        const t = r.targetDuration * P.dN;
                                        e.dispatch((0, A.$u)(r.playerId, t));
                                    } else t.playerId !== r.playerId && e.dispatch((0, A.HP)(r.playerId, k, 0));
                                } else if (r.targetDuration) {
                                    const t = u || "PLAY_REQUESTED" === o?.playState || l ? r.targetDuration * P.dN : 0;
                                    e.dispatch((0, A.$u)(r.playerId, t));
                                }
                        }
                        return t(r);
                    },
                    (e) => (t) => (r) => {
                        if (
                            (void 0 !== r.playerId &&
                                (0, E.jl)(r.playerId, (e) => {
                                    e.log("redux", r.type);
                                }),
                            r.type === l.ni)
                        )
                            return (h[r.playerId] = r.analytics), t(r);
                        const s = e.getState().players[r.playerId];
                        if (!s) return t(r);
                        const n = t(r),
                            a = e.getState().players[r.playerId],
                            o = h[r.playerId];
                        if (void 0 !== o) {
                            switch (r.type) {
                                case p.Bw:
                                case c.zn:
                                    a.isScrubbing || o.onTickEvent(a);
                                    break;
                                case p.qx:
                                    o.onTrackFinished(s), a.currentTrackId !== s.currentTrackId && o.onIntendToPlay(a);
                                    break;
                                case p.Dk: {
                                    const e = s.tracks.find((e) => e.id === s.currentTrackId);
                                    "ad" !== e.displayType || e.playbackCompleted || !s || s.errorInfo?.adFailed || o.onAdSkip(s), a.currentTrackId !== s.currentTrackId && o.onIntendToPlay(a);
                                    break;
                                }
                                case c.Gf:
                                case i.Bt:
                                    o.onIntendToPlay(a);
                                    break;
                                case c.Rf:
                                    o.onReplay(a);
                                    break;
                                case c.Ku:
                                    s.isMuted && !a.isMuted ? o.onUnmute(s) : !s.isMuted && a.isMuted && o.onMute(s);
                                    break;
                                case c.Yz:
                                    o.onCtaClick(s);
                                    break;
                                case c.Ug:
                                    o.onCtaImpression(s);
                                    break;
                                case d.eU:
                                    o.onTeardown(s), delete h[r.playerId];
                                    break;
                                case l.HY:
                                    o.onConfigLoaded(a);
                                    break;
                                case u.iV:
                                case u.Y4: {
                                    const { errorInfo: e } = a,
                                        t = e.autoRetry ? e.count : void 0;
                                    let n;
                                    (n = r.type === u.iV || r.type === u.Y4 ? r.thrownError.message : r.error), o.onError(s, { error_code: r.type, error_message: n, media_details: { media_error: { category: r.type, is_fatal: r.isFatal, message: n, retry_count: t } } });
                                    break;
                                }
                                case c.QF: {
                                    const { controls: e, playbackRate: t } = s,
                                        { playbackRate: r } = a,
                                        n = { newSpeed: r, oldSpeed: t };
                                    void 0 !== e.playbackRate && o.onPlaybackSpeedChange(a, n);
                                    break;
                                }
                                case c.xq: {
                                    const { controls: e, qualityLevel: t } = s,
                                        { qualityLevel: r } = a,
                                        n = { oldLevel: t, newLevel: r };
                                    void 0 !== e.requestedQualityLevel && o.onManualQualityLevelChange(a, n);
                                    break;
                                }
                                case c.Mn:
                                    o.onScrub(a);
                                    break;
                                case c.AI:
                                    a.fullscreen.isFullscreen !== s.fullscreen.isFullscreen && (a.fullscreen.isFullscreen ? o.onFullScreenEnter(a) : o.onFullScreenExit(a));
                                    break;
                                case c.zG:
                                    o.onPictureInPictureOn(a);
                                    break;
                                case c.v3:
                                    o.onPictureInPictureOff(a);
                            }
                            a && a.isPlaying !== s.isPlaying && (a.isPlaying ? o.onPlay(a) : o.onPause(a));
                        }
                        return n;
                    },
                    I.ZP,
                    a.$4,
                    n.Z,
                ].filter((e) => "function" == typeof e),
                w = (0, s.MT)((0, s.UY)({ players: d.ZP, hydraExperiences: a.ZP }), (0, s.md)(...N));
        },
        915331: (e, t, r) => {
            r.d(t, { YI: () => n, ks: () => o, yc: () => a });
            var s = r(789403);
            function n(e, t) {
                const r = e.getState();
                if (r && r.players && r.players[t]) return r.players[t];
            }
            const a = (e) => {
                    if (e && "unavailable" === e.status) {
                        switch (e.reason) {
                            case "geoblocked":
                                return s.Z.MEDIA_GEOBLOCK_ERROR;
                            case "deleted":
                                return s.Z.ORIGINAL_CONTEXT_DELETED;
                            case "dmcaed":
                                return s.Z.DMCA_TAKEDOWN_ERROR;
                            case "copyrightviolation":
                                return s.Z.EUROPEAN_COPYRIGHT_VIOLATION;
                        }
                    }
                    return null;
                },
                o = (e, t) => {
                    const r = Object.keys(e).find((r) => t(e[r]));
                    return void 0 !== r ? e[r] : void 0;
                };
        },
        923863: (e, t, r) => {
            r.d(t, { Pw: () => c, TextTrackKind: () => s, X2: () => l, bD: () => n, xz: () => u });
            r(136728);
            const s = { CAPTIONS: "captions", METADATA: "metadata", SUBTITLES: "subtitles" },
                n = { DISABLED: "disabled", HIDDEN: "hidden", SHOWING: "showing" };
            function a(e) {
                return ("captions" === e.kind && e.cues && e.cues.length > 0) || "subtitles" === e.kind;
            }
            function o(e, t) {
                if (t && e) {
                    const r = t.split("-")[0],
                        s = e.split("-")[0];
                    return r.toLowerCase() === s.toLowerCase();
                }
            }
            function i(e, t) {
                const r = e.length;
                let s, n;
                if (t) {
                    for (let i = 0; i < r; i++) {
                        const r = e[i],
                            c = r.language;
                        if (a(r)) {
                            if (c && c.toLowerCase() === t.toLowerCase()) return r;
                            !s && o(c, t) ? (s = r) : n || c || (n = r);
                        }
                    }
                    return s || n;
                }
            }
            function c(e, t) {
                if (!t) return;
                const r = [...e].filter(a),
                    n = r.filter((e) => e.kind === s.SUBTITLES),
                    o = r.filter((e) => e.kind === s.CAPTIONS),
                    c = n[0] || o[0];
                return i(n, t) || i(o, t) || c;
            }
            function l(e, t) {
                return Object.keys(e).some((r) => {
                    return (s = e[r]), (n = t), s.startTime === n.startTime && s.text === n.text && s.endTime === n.endTime;
                    var s, n;
                });
            }
            function u(e, t) {
                e.mode !== t && (e.mode = t);
            }
        },
        459585: (e, t, r) => {
            r.d(t, { Z: () => a });
            var s = r(396682);
            const n = { showControls: !0, promotedContext: {} },
                a = { createPlayer: ({ domElement: e, source: t, videoConfig: r, httpClient: a, twitterAuthedHttpClient: o, options: i = {} }) => new s.Z({ videoConfig: r, source: t, domElement: e, httpClient: a, twitterAuthedHttpClient: o, options: { ...n, ...i } }) };
        },
        197889: (e, t, r) => {
            r.d(t, { _: () => a, r: () => n });
            r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157);
            var s = r(297310);
            const n = (e) => {
                    const { response: t, responseType: r } = e;
                    let n, a;
                    if ("arraybuffer" === r) {
                        const e = new Uint8Array(t);
                        a = String.fromCharCode.apply(null, e);
                    } else a = t;
                    try {
                        n = JSON.parse(a);
                    } catch (e) {
                        n = {};
                    }
                    const { error_response: o } = n;
                    return o === s.u2;
                },
                a = (e, t) =>
                    e.dispatch({ host: t, method: "GET", path: "", withCredentials: !1, headers: {} }).then(
                        (e) => {
                            let t;
                            try {
                                t = JSON.parse(e.body);
                            } catch (e) {
                                t = {};
                            }
                            const { error_response: r } = t;
                            return "CopyrightViolation" === r;
                        },
                        () => !1,
                    );
        },
        449095: (e, t, r) => {
            r.d(t, { h: () => n });
            var s = r(833828);
            const n = (e, t) =>
                class extends t.DefaultConfig.loader {
                    constructor(t) {
                        super(t);
                        const r = this.load.bind(this);
                        this.load = (t, n, a) => {
                            const o = a.onSuccess;
                            (a.onSuccess = (t, r, n) => {
                                (0, s.gu)(e, (e) => {
                                    e.add(r.total);
                                }),
                                    o(t, r, n);
                            }),
                                r(t, n, a);
                        };
                    }
                };
        },
        977425: (e, t, r) => {
            r.d(t, { Z: () => s });
            const s = class {
                constructor() {
                    this.byteAccumulator = 0;
                }
                add(e) {
                    this.byteAccumulator += e;
                }
                getAndReset() {
                    const e = this.byteAccumulator;
                    return (this.byteAccumulator = 0), e;
                }
            };
        },
        834025: (e, t, r) => {
            r.d(t, { E: () => s, P: () => n });
            const s = (e, t) => {
                    try {
                        window.localStorage.setItem(e, t);
                    } catch (e) {}
                },
                n = (e, t) => {
                    try {
                        return window.localStorage.getItem(e);
                    } catch (e) {
                        return t;
                    }
                };
        },
        470833: (e, t, r) => {
            r.d(t, { Z: () => a });
            var s;
            r(136728), r(543673), r(240753), r(128399);
            class n {
                constructor(e) {
                    (this.clearLogs = () => {
                        try {
                            window.sessionStorage.removeItem(this.storageKey);
                        } catch (e) {}
                    }),
                        (this.log = (e, t) => {
                            if (n.debuggingEnabled) {
                                const r = `${e}: ${t}`;
                                this.logItemInSessionStorage(r);
                            }
                        }),
                        (this.logItemInSessionStorage = (e) => {
                            try {
                                const t = window.sessionStorage.getItem(this.storageKey),
                                    r = t ? JSON.parse(t) : [];
                                r.push(e), window.sessionStorage.setItem(this.storageKey, JSON.stringify(r));
                            } catch (e) {}
                        }),
                        (this.storageKey = n.generateStorageKey(e)),
                        this.clearLogs();
                }
            }
            (s = n),
                (n.debuggingEnabled = !1),
                (n.generateStorageKey = (e) => `TwitterVideoPlayerDebugLog:${e}`),
                (n.getDebugFileLink = (e) => {
                    const t = window.sessionStorage.getItem(s.generateStorageKey(e)),
                        r = new window.Blob([JSON.parse(t).join("\n")], { type: "application/octet-stream" });
                    return window.URL.createObjectURL(r);
                });
            const a = n;
        },
        449034: (e, t, r) => {
            r.d(t, { Z: () => a });
            var s = r(150078);
            const n = {};
            const a = class {
                constructor(e) {
                    this.httpClient = e;
                }
                dispatch(e) {
                    if ("get" === e.method.toLowerCase()) {
                        const t = e.params ? (0, s.t)(e.params) : "",
                            r = t ? `?${t}` : "",
                            a = `${e.host}${e.path}${r}`;
                        return (
                            n[a] ||
                                (n[a] = this.httpClient
                                    .dispatch(e)
                                    .then((e) => (delete n[a], e))
                                    .catch((e) => {
                                        throw (delete n[a], e);
                                    })),
                            n[a]
                        );
                    }
                    return this.httpClient.dispatch(e);
                }
            };
        },
        62600: (e, t, r) => {
            r.d(t, { Z: () => s });
            const s = class {
                constructor(e, t = 200) {
                    (this.httpClient = e), (this.backOffMSec = t);
                }
                dispatch(e) {
                    return new Promise((t, r) => {
                        this._dispatchOnce(0, t, r, e);
                    });
                }
                _dispatchOnce(e, t, r, s) {
                    this.httpClient
                        .dispatch(s)
                        .then((n) => {
                            this._handleResponse(e, t, r, s, n);
                        })
                        .catch((n) => {
                            this._handleReject(e, t, r, s, n);
                        });
                }
                _handleResponse(e, t, r, s, n) {
                    let a = !1;
                    switch (n.status) {
                        case 404:
                        case 425:
                        case 429:
                        case 500:
                        case 502:
                        case 503:
                        case 504:
                        case 508:
                            a = !0;
                    }
                    !a || e >= 3
                        ? t(n)
                        : setTimeout(() => {
                              this._dispatchOnce(e + 1, t, r, s);
                          }, this._backOffMSec(e));
                }
                _handleReject(e, t, r, s, n) {
                    e >= 3
                        ? r(n)
                        : setTimeout(() => {
                              this._dispatchOnce(e + 1, t, r, s);
                          }, this._backOffMSec(e));
                }
                _backOffMSec(e) {
                    const { backOffMSec: t } = this,
                        r = Math.pow(3, e) * t;
                    return t + Math.random() * (r - t);
                }
            };
        },
        982361: (e, t, r) => {
            r.d(t, { K: () => a });
            const s = /^[0-9]{1,6}(\.[0-9]+)?$/,
                n = /^([0-9]{0,3}[hH])?([0-9]{0,2}[mM])?([0-9]{0,6}[sS])?$/,
                a = (e) => {
                    if (s.test(e)) return +e;
                    const t = n.exec(e);
                    if (!t || !t[0]) return;
                    const [, r, a, o] = t;
                    let i = 0;
                    return r && (i += 3600 * +r.slice(0, -1)), a && (i += 60 * +a.slice(0, -1)), o && (i += +o.slice(0, -1)), i;
                };
        },
        22525: (e, t, r) => {
            r.d(t, { Ci: () => a, FR: () => l, Uf: () => n, Wp: () => i, x1: () => o });
            var s = r(150078);
            const n = (e, t) => {
                    if (e.tracks) return e.tracks.find((e) => e.id === t);
                },
                a = (e) => n(e, e.currentTrackId),
                o = (e) => (e.tracks ? e.tracks.filter((t) => t.id !== e.currentTrackId) : []),
                i = (e) => {
                    const t = a(e);
                    return !!t && "content" === t.displayType && "gif" !== t.contentType && !t.isLive && !e.impressionId;
                },
                c = new RegExp(/^https:\/\/[\w-]+.twimg.com\/.+\.m3u8/),
                l = (e, t = []) => t.map(u("variant_version", e)),
                u = (e, t) => (r) => {
                    let n = r.src;
                    if (c.test(n)) {
                        const r = new s.Z(n);
                        r.addSearchParam(e, t), (n = r.toString());
                    }
                    return { ...r, src: n };
                };
        },
        150078: (e, t, r) => {
            r.d(t, { Z: () => n, t: () => s });
            r(543673), r(240753), r(128399);
            function s(e) {
                return Object.keys(e)
                    .map((t) => {
                        const r = void 0 === e[t] ? "" : encodeURIComponent(e[t]);
                        return `${encodeURIComponent(t)}=${r}`;
                    })
                    .join("&");
            }
            const n = class {
                constructor(e) {
                    try {
                        this.parser = new URL(e);
                    } catch (t) {
                        (this.parser = document.createElement("a")), (this.parser.href = e);
                    }
                }
                getHostname() {
                    return this.parser.hostname;
                }
                getPath() {
                    return this.parser.pathname;
                }
                isSafe() {
                    return !!this.parser.protocol.match(/^https?:$/);
                }
                addSearchParam(e, t) {
                    if (this.parser.search) {
                        const r = new RegExp(`${e}=[^&]*`, "g");
                        r.test(this.parser.search) ? (this.parser.search = this.parser.search.replace(r, `${e}=${t}`)) : (this.parser.search = `?${e}=${t}&${this.parser.search.slice(1)}`);
                    } else this.parser.search = `?${e}=${t}`;
                }
                toString() {
                    return this.parser.href;
                }
            };
        },
        71561: (e, t, r) => {
            r.d(t, { Yh: () => n });
            let s = {};
            const n = (e = {}) => {
                s = e;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10.938f270a.js.map

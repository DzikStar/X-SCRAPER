"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"],
    {
        426582: (e, t, r) => {
            r.d(t, { H6: () => p, PC: () => R, ZP: () => E });
            r(571372);
            var o = r(22525),
                i = r(768256),
                s = r(297310),
                a = r(789403),
                n = r(123751);
            const c = "RUNNING",
                d = (e = [], t = !0) => ({ ids: e.join(","), include_events: t }),
                l = (e, t, r) => {
                    try {
                        return e.dispatch({ method: "GET", host: "https://api.twitter.com", path: "/1.1/broadcasts/show.json", params: d([t], r), withCredentials: !0 }).then(
                            (e) => {
                                if (200 !== e.status) return Promise.reject(`${a.Z.BROADCAST_REQUEST_ERROR}:${e.status}`);
                                const { broadcasts: r, events: o } = JSON.parse(e.body);
                                if (!r || !r[t] || !r[t].broadcast_id) return Promise.reject(a.Z.BROADCAST_NOT_FOUND);
                                if (r[t].state !== c && !r[t].available_for_replay) return Promise.reject(a.Z.BROADCAST_ENDED_NO_REPLAY);
                                const i = { broadcast: r[t] };
                                return o && o[t] && o[t].length && (i.associatedEvent = o[t][0]), i;
                            },
                            (e) => Promise.reject(a.Z.BROADCAST_REQUEST_ERROR),
                        );
                    } catch (e) {
                        return Promise.reject(e);
                    }
                },
                _ = ({ broadcast: e, associatedEvent: t = {} }) => {
                    const { end_ms: r, image_url: o, ping_ms: i, start_ms: a, state: n, timedout_ms: d, total_watched: l, total_watching: _ } = e,
                        { description: R, id: p, title: E, url: h } = t,
                        u = n === c,
                        O = o,
                        I = parseInt(_, 10) || 0,
                        m = parseInt(l, 10) || 0,
                        T = { isLive: u, viewerCount: u ? I : m, posterImage: O, eventDescription: R, eventTitle: E, eventUrl: h, eventId: p };
                    if ((E && h && (T.cta = { label: E, type: s.$2.EVENT, url: h }), !u)) {
                        const e = (r || d || i || a) - a;
                        T.durationMs = e;
                    }
                    return T;
                },
                R = (e) => e.source && e.source.type === n.P.BROADCAST;
            class p {
                constructor(e, t, r, o, i) {
                    (this.dispatch = e), (this.httpClient = t), (this.playerId = r), (this.broadcastId = o), (this.includeBroadcastEventAssociation = i), (this.updaterTimeout = null);
                }
                queueUpdate(e) {
                    const t = e ? 15 : 30;
                    let r, o;
                    const s = new Promise((e, t) => {
                        (r = e), (o = t);
                    });
                    return (
                        (this.updaterTimeout = setTimeout(() => {
                            var e, t, s;
                            ((e = this.httpClient),
                            (t = this.broadcastId),
                            (s = this.includeBroadcastEventAssociation),
                            l(e, t, s).then(
                                (e) => _(e),
                                (e) => {
                                    throw new Error(e);
                                },
                            )).then(
                                (e) => {
                                    null != this.updaterTimeout && (this.queueUpdate(e.isLive), this.dispatch((0, i.ql)(this.playerId, e))), r();
                                },
                                (e) => {
                                    o(e);
                                },
                            );
                        }, 1e3 * t)),
                        s
                    );
                }
                cancelUpdate() {
                    clearTimeout(this.updaterTimeout), (this.updaterTimeout = null);
                }
            }
            class E {
                constructor(e, t) {
                    (this.httpClient = e), (this.includeBroadcastEventAssociation = t);
                }
                load(e) {
                    return this.httpClient
                        ? ((e, t, r) => {
                              if (!R(t)) return Promise.resolve(t);
                              const i = t.source.id;
                              return l(e, i, r).then(
                                  (e) => {
                                      const r = (0, o.Uf)(t, 0),
                                          i = (({ broadcast_id: e, media_key: t, profile_image_url: r, replay_edited_start_time: o, requires_fine_grain_geoblocking: i, twitter_user_id: s, unavailable_in_periscope: a, user_display_name: n, user_id: c, view_count_graph: d }) => ({ broadcastId: e, contentId: t, contentType: "broadcast", displayType: "content", expandedUrl: `https://www.pscp.tv/w/${e}`, isEventGeoblocked: i, playbackType: "application/x-mpegURL", publisherDisplayName: n, publisherId: s, periscopePublisherId: c, publisherProfileImageUrl: r, replayEditedStartTime: o, shouldLoop: !1, unavailableInPeriscope: a, viewCountGraphData: d }))(e.broadcast),
                                          { cta: s, durationMs: a, isLive: n, viewCount: c, viewerCount: d, ...l } = _(e);
                                      return t.posterImage && delete l.posterImage, { ...t, ...l, client: "web", tracks: [{ ...r, ...i, cta: s, durationMs: a, id: 0, isLive: n, viewerCount: d, viewCount: c }], currentTrackId: 0, source: { ...t.source, trackId: 0 }, viewCountGraph: e?.view_count_graph };
                                  },
                                  (e) => {
                                      throw new Error(e);
                                  },
                              );
                          })(this.httpClient, e, this.includeBroadcastEventAssociation)
                        : Promise.reject(a.Z.MEDIA_TEARDOWN_ERROR);
                }
            }
        },
        196282: (e, t, r) => {
            r.d(t, { BQ: () => s, KQ: () => o, Y5: () => a, ZC: () => i });
            const o = "https://lic.staging.drmtoday.com/license-proxy-widevine/cenc/?specConform=true",
                i = "https://lic.staging.drmtoday.com/license-proxy-headerauth/drmtoday/RightsManager.asmx",
                s = "https://lic.staging.drmtoday.com/license-server-fairplay/",
                a = "https://lic.staging.drmtoday.com/license-server-fairplay/cert/x";
        },
        789403: (e, t, r) => {
            r.d(t, { Z: () => o });
            const o = { BROADCAST_REQUEST_ERROR: "BROADCAST_REQUEST_ERROR", BROADCAST_ENDED_NO_REPLAY: "BROADCAST_ENDED_NO_REPLAY", BROADCAST_NOT_FOUND: "BROADCAST_NOT_FOUND", CONFIG_USER_DATA_NETWORK_ERROR: "CONFIG_USER_DATA_NETWORK_ERROR", CONFIG_NETWORK_ERROR: "CONFIG_NETWORK_ERROR", DMCA_TAKEDOWN_ERROR: "DMCA_TAKEDOWN_ERROR", EUROPEAN_COPYRIGHT_VIOLATION: "EUROPEAN_COPYRIGHT_VIOLATION", LIVE_PARSE_ERROR: "LIVE_PARSE_ERROR", LIVE_STREAM_ACQUISITION_MISSING_CONTENT_ID: "LIVE_STREAM_ACQUISITION_MISSING_CONTENT_ID", LIVE_STREAM_ACQUISITION_NETWORK_ERROR: "LIVE_STREAM_ACQUISITION_NETWORK_ERROR", LIVE_VIDEO_GEOBLOCK_ERROR: "LIVE_VIDEO_GEOBLOCK_ERROR", LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR: "LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR", LIVE_VIDEO_GEOLOCATION_PROMPT: "LIVE_VIDEO_GEOLOCATION_PROMPT", LIVE_VIDEO_NO_COOKIES_ERROR: "LIVE_VIDEO_NO_COOKIES_ERROR", MEDIA_NOT_SUPPORTED: "MEDIA_NOT_SUPPORTED", MEDIA_SRC_INVALID_ERROR: "MEDIA_SRC_INVALID_ERROR", MEDIA_ABORTED: "MEDIA_ABORTED", MEDIA_FORBIDDEN: "MEDIA_FORBIDDEN", MEDIA_NETWORK_ERROR: "MEDIA_NETWORK_ERROR", MEDIA_DECODE_ERROR: "MEDIA_DECODE_ERROR", MEDIA_GEOBLOCK_ERROR: "MEDIA_GEOBLOCK_ERROR", MEDIA_TEARDOWN_ERROR: "MEDIA_TEARDOWN_ERROR", MEDIA_UNKNOWN_CODE_ERROR: "MEDIA_UNKNOWN_CODE_ERROR", ORIGINAL_CONTEXT_DELETED: "ORIGINAL_CONTEXT_DELETED", PICTURE_IN_PICTURE_ERROR: "PICTURE_IN_PICTURE_ERROR", UNSUPPORTED_TYPE: "UNSUPPORTED_TYPE", VMAP_NETWORK_ERROR: "VMAP_NETWORK_ERROR", VMAP_PARSE_ERROR: "VMAP_PARSE_ERROR" };
        },
        356841: (e, t, r) => {
            r.d(t, { Z: () => y, J: () => v });
            var o = r(447486),
                i = r(426582),
                s = (r(571372), r(71561)),
                a = r(982361),
                n = r(915331),
                c = r(297310),
                d = r(789403),
                l = r(123751);
            const _ = "/1.1/videos/",
                R = "TwitterVideoPlayerUserConfig",
                p = { features: { fatalErrorRetryMax: 3 }, translations: {} },
                E = { features: { fatalErrorRetryMax: 10 } };
            const h = class {
                constructor(e, t) {
                    (this.httpClient = e), (this.logger = t);
                }
                load(e, t) {
                    if (!this.httpClient) return Promise.reject(d.Z.MEDIA_TEARDOWN_ERROR);
                    const { videoConfig: r, ...o } = e;
                    return (r && (r.vmapUrl || (e.videoConfig.variants && e.videoConfig.variants.length > 0)) ? this.loadStaticConfigState(r, e.source) : this.loadDynamicConfigState(e.source, r, t)).then((e) => this.convertConfigStateToPlayerState(e, o, t));
                }
                loadStaticConfigState(e, t) {
                    const r = (() => {
                            try {
                                return JSON.parse(window.sessionStorage.getItem(R));
                            } catch (e) {}
                        })(),
                        o = { eventId: e.eventId, posterImage: e.poster, track: { contentId: e.contentId, contentType: e.contentType, cta: e.cta, durationMs: e.durationMs, expandedUrl: e.expandedUrl, mediaAvailability: e.mediaAvailability, publisherId: e.publisherId, shouldLoop: e.loop, variants: e.variants, viewCount: e.viewCount, vmapUrl: e.vmapUrl, generateDrmTokenCallback: e.generateDrmTokenCallback } };
                    if (!e.shouldLoadTranslations || !this._shouldLoadStaticConfig(t)) return Promise.resolve({ ...p, ...o });
                    const i = this.httpClient
                        .dispatch({ method: "GET", path: "/1.1/videos/static/config.json", host: "https://api.twitter.com" })
                        .then(
                            (e) => {
                                if (200 !== e.status) throw new Error(`${d.Z.CONFIG_USER_DATA_NETWORK_ERROR}:${e.status}`);
                                {
                                    const t = JSON.parse(e.body);
                                    return (
                                        ((e) => {
                                            try {
                                                window.sessionStorage.setItem(R, JSON.stringify(e));
                                            } catch (e) {}
                                        })(t),
                                        t
                                    );
                                }
                            },
                            () => {
                                throw new Error(d.Z.CONFIG_USER_DATA_NETWORK_ERROR);
                            },
                        )
                        .catch((e) => (this.logger.log("ConfigurationLoader", `failed to load static configuration: ${e}`), { ...p }));
                    return (r ? Promise.resolve(r) : i).then(({ features: e, translations: t }) => ({ ...o, features: e, translations: t }));
                }
                loadDynamicConfigState(e, t, r) {
                    if ((e.type === l.P.BROADCAST && t && !t.shouldLoadTranslations) || e.type === l.P.AUDIO_SPACE) return Promise.resolve({ ...p, ...E, track: { publisherId: t?.publisherId } });
                    try {
                        return this.httpClient.dispatch({ method: "GET", path: this.getApiEndpointForPlayerSource(e), host: "https://api.twitter.com", params: { bitrate_cap: r.shouldCapBitrate ? c.qJ : void 0 } }).then(
                            (e) => {
                                if (200 !== e.status) throw new Error(`${d.Z.CONFIG_NETWORK_ERROR}:${e.status}`);
                                {
                                    const r = JSON.parse(e.body);
                                    return t && t.poster && (r.posterImage = t.poster), r;
                                }
                            },
                            () => {
                                throw new Error(d.Z.CONFIG_NETWORK_ERROR);
                            },
                        );
                    } catch (e) {
                        return Promise.reject(e);
                    }
                }
                convertConfigStateToPlayerState(e, t, r) {
                    const { track: o, translations: i, ...c } = e,
                        l = r.reloadTimecode,
                        _ = (0, a.K)(r.requestedTimecode),
                        R = _ > 0 || 0 === _ ? _ : -1;
                    let p, E;
                    (0, s.Yh)(i), o && (({ mediaAvailability: E } = o), r.maxLoopCount ? ((o.maxLoopCount = r.maxLoopCount), (o.loopCounter = 0)) : r.maxLoopingThresholdSec >= 0 && ((o.maxLoopingThresholdSec = r.maxLoopingThresholdSec), (o.loopCounter = 0)), o.variants && o.variants.length > 0 ? (p = o.variants) : o.playbackUrl && o.playbackType && (p = [{ src: o.playbackUrl, type: o.playbackType }]));
                    const h = (0, n.yc)(E);
                    if (h) {
                        let e;
                        switch (h) {
                            case d.Z.ORIGINAL_CONTEXT_DELETED:
                            case d.Z.DMCA_TAKEDOWN_ERROR:
                                throw new Error(h);
                            case d.Z.EUROPEAN_COPYRIGHT_VIOLATION:
                                throw ((e = new Error(h)), (e.copyrightHolder = E.unavailability_info.copyright_holder_name), e);
                        }
                    }
                    return { ...t, ...c, tracks: [{ ...o, id: 0, displayType: "content", requestedTimecode: R, reloadTimecode: l, rotation: 0, variants: p, currentVariantIndex: 0 }], currentTrackId: 0, source: { ...t.source, trackId: 0 }, mediaAvailability: E };
                }
                getApiEndpointForPlayerSource(e) {
                    switch (e.type) {
                        case l.P.TWEET: {
                            const t = e.index > 0 ? `/${e.index}` : "";
                            return `${_}tweet/config/${e.id}${t}.json`;
                        }
                        case l.P.AUDIO_SPACE:
                        case l.P.BROADCAST:
                            return `${_}broadcast/config/${e.id}.json`;
                        case l.P.DM:
                            return `${_}dm/config/${e.id}.json`;
                        default:
                            throw new Error(`${d.Z.UNSUPPORTED_TYPE}:${e.type}`);
                    }
                }
                _shouldLoadStaticConfig(e) {
                    return e.type !== l.P.STATIC_BROADCAST;
                }
            };
            var u = r(150078),
                O = r(842337);
            const I = "error",
                m = "playback";
            const T = class {
                constructor(e, t, r, o, i) {
                    (this.dispatch = e), (this.httpClient = t), (this.twitterAuthedHttpClient = r), (this.playerId = o), (this.showGeolocationPrompt = i);
                }
                load(e) {
                    if (!this.httpClient || !this.twitterAuthedHttpClient) return Promise.reject(d.Z.MEDIA_TEARDOWN_ERROR);
                    const t = e.tracks[0];
                    return "live" !== t.contentType && "broadcast" !== t.contentType
                        ? Promise.resolve(e)
                        : t.contentId
                          ? this.getUserPermission(t)
                                .then(this.getUserGeolocation.bind(this))
                                .then(this.parseGeolocationData.bind(this))
                                .then(this.acquireLiveStream.bind(this, e))
                                .then(this.parseStreamAcquisitionResponse.bind(this))
                                .then(this.setCookies.bind(this))
                                .catch(this.handleRejectedPromises.bind(this))
                                .then(({ broadcastShareUrl: r, chatToken: o, isLiveTimecode: i, lifecycleToken: s, playbackUrl: a, restrictions: n }) => {
                                    if (void 0 !== n) {
                                        if (void 0 !== n.find((e) => "geoblocked" === e.restriction)) throw new Error(d.Z.LIVE_VIDEO_GEOBLOCK_ERROR);
                                        const e = n.find((e) => "copyright-violation" === e.restriction);
                                        if (void 0 !== e) {
                                            let t;
                                            const r = e.copyright_violation_type;
                                            t = void 0 !== r && "TYPE_1" === r ? d.Z.EUROPEAN_COPYRIGHT_VIOLATION : d.Z.LIVE_VIDEO_COPYRIGHT_VIOLATION_ERROR;
                                            const o = new Error(t);
                                            throw ((o.copyrightHolder = e.copyright_violation_copyright_holder_name), o);
                                        }
                                    }
                                    return { ...e, tracks: [{ ...t, isLive: "live" === t.contentType || t.isLive, isLiveTimecode: i, variants: [{ src: a, type: "application/x-mpegURL" }], lifecycleToken: s, chatToken: o, broadcastShareUrl: r }] };
                                })
                          : Promise.reject(Error(d.Z.LIVE_STREAM_ACQUISITION_MISSING_CONTENT_ID));
                }
                getUserPermission(e) {
                    return e.isEventGeoblocked
                        ? this.showGeolocationPrompt
                            ? Promise.resolve({ shouldGetGeolocation: !0 })
                            : "permissions" in navigator
                              ? navigator.permissions.query({ name: "geolocation" }).then((e) => {
                                    const t = "granted" === e.state;
                                    return Promise.resolve({ shouldGetGeolocation: t });
                                })
                              : Promise.resolve({ shouldGetGeolocation: !1 })
                        : Promise.resolve({ shouldGetGeolocation: !1 });
                }
                getUserGeolocation({ shouldGetGeolocation: e }) {
                    return e && "geolocation" in navigator
                        ? (this.dispatch((0, O.K4)(this.playerId)),
                          new Promise((e) => {
                              navigator.geolocation.getCurrentPosition(
                                  (t) => e(t),
                                  () => e(),
                              );
                          }))
                        : Promise.resolve();
                }
                parseGeolocationData(e) {
                    return Promise.resolve({ latitude: e && e.coords.latitude, longitude: e && e.coords.longitude });
                }
                acquireLiveStream(e, t) {
                    const { isLiveTimecode: r, params: o, path: i } = this.getLiveStreamAcquisitionDetails(e, t);
                    return this.twitterAuthedHttpClient.dispatch({ host: "https://api.twitter.com", method: "GET", params: o, path: i }).then(
                        (e) => (e.status < 200 || e.status >= 400 ? Promise.reject({ type: I, reason: d.Z.LIVE_STREAM_ACQUISITION_NETWORK_ERROR }) : (this.dispatch((0, O.vq)(this.playerId)), Promise.resolve({ body: e.body, isLiveTimecode: r }))),
                        () => Promise.reject({ type: I, reason: d.Z.LIVE_STREAM_ACQUISITION_NETWORK_ERROR }),
                    );
                }
                getLiveStreamAcquisitionDetails(e, t) {
                    const { latitude: r, longitude: o } = t,
                        { client: i, source: s } = e,
                        a = (s && s.trackId) || 0,
                        n = e.tracks[a],
                        c = { client: i, use_syndication_guest_id: "tfw" === i, lat: r, lng: o, cookie_set_host: new u.Z(window.location.href).getHostname(), ...(s?.acquisitionParams || {}) },
                        d = e.features && e.features.isLiveTimecodeEnabled && (n.requestedTimecode > 0 || 0 === n.requestedTimecode);
                    return d && (c.latest_replay_playlist = !0), { params: c, isLiveTimecode: d, path: `/1.1/live_video_stream/status/${n.contentId}` };
                }
                parseStreamAcquisitionResponse(e) {
                    const t = JSON.parse(e.body);
                    return t && t.source && t.source.noRedirectPlaybackUrl ? Promise.resolve({ cookieSetUrl: t.source.cookieSetUrl, isLiveTimecode: e.isLiveTimecode, playbackUrl: t.source.noRedirectPlaybackUrl, lifecycleToken: t.lifecycleToken, chatToken: t.chatToken, broadcastShareUrl: t.shareUrl, restrictions: t.restrictions }) : Promise.reject({ type: I, reason: d.Z.LIVE_PARSE_ERROR });
                }
                setCookies(e) {
                    const { cookieSetUrl: t, ...r } = e;
                    return t
                        ? this.httpClient.dispatch({ method: "GET", path: t, host: "", withCredentials: !0 }).then(
                              () => Promise.resolve(e),
                              () => Promise.reject({ type: m, payload: r }),
                          )
                        : Promise.reject({ type: m, payload: r });
                }
                handleRejectedPromises(e) {
                    if (e.type === m) return Promise.resolve(e.payload);
                    {
                        const t = e.reason ? new Error(e.reason) : e;
                        return Promise.reject(t);
                    }
                }
            };
            const A = class {
                    constructor(e) {
                        this.httpClient = e;
                    }
                    load(e) {
                        if (!this.httpClient) return Promise.reject(d.Z.MEDIA_TEARDOWN_ERROR);
                        const t = e.tracks[0];
                        return "vmap" !== t.contentType
                            ? Promise.resolve(e)
                            : this.httpClient.dispatch({ method: "GET", path: t.vmapUrl, host: "", withCredentials: !1 }).then(
                                  (r) => {
                                      if (r.status < 200 || r.status >= 400) throw new Error(d.Z.VMAP_NETWORK_ERROR);
                                      {
                                          const o = this.parseVmap(r.body);
                                          return { ...e, tracks: [{ ...t, ...o }] };
                                      }
                                  },
                                  () => {
                                      throw new Error(d.Z.VMAP_NETWORK_ERROR);
                                  },
                              );
                    }
                    parseVmap(e) {
                        const t = new window.DOMParser().parseFromString(e, "application/xml").getElementsByTagNameNS("http://twitter.com/schema/videoVMapV2.xsd", "content")[0];
                        if (void 0 === t) throw new Error(d.Z.VMAP_PARSE_ERROR);
                        const r = t.getElementsByTagName("MediaFile")[0];
                        if (void 0 === r) throw new Error(d.Z.VMAP_PARSE_ERROR);
                        const o = r.textContent.trim().replace(/^http:\/\/amp\.twimg\.com\//, "https://amp.twimg.com/"),
                            i =
                                r.getAttribute("type") ||
                                ((e) => {
                                    const t = new u.Z(e).getPath();
                                    return ".m3u8" === t.slice(t.lastIndexOf(".")) ? "application/x-mpegURL" : "video/mp4";
                                })(o);
                        return { publisherId: t.getAttribute("ownerId"), contentId: t.getAttribute("contentId"), variants: [{ src: o, type: i }], cta: this.getCta(t) };
                    }
                    getCta(e) {
                        const t = e.getElementsByTagNameNS("http://twitter.com/schema/videoVMapV2.xsd", "cta_open_url")[0],
                            r = e.getElementsByTagNameNS("http://twitter.com/schema/videoVMapV2.xsd", "cta_watch_now")[0];
                        return void 0 !== t ? { type: "url", url: t.getAttribute("url") } : void 0 !== r ? { type: "watch", url: r.getAttribute("url") } : void 0;
                    }
                },
                v = (e, t, r, s, a, n, c) => [new h(r, c), new o.Z(r), new i.ZP(r, n), new A(t), new T(e, t, r, s, a)],
                y = (e, t, r, o) => {
                    const i = Promise.resolve({ source: e, videoConfig: t });
                    return r.reduce((e, t) => e.then((e) => t.load(e, o)), i);
                };
        },
        659224: (e, t, r) => {
            r.d(t, { Z: () => n });
            var o = r(471856),
                i = r(768256),
                s = r(724429);
            const a = {},
                n = (e) => (t) => (r) => {
                    switch (r.type) {
                        case i.ni:
                            a[r.playerId] = () => ("function" == typeof r.adProvider ? r.adProvider() : {});
                            break;
                        case s.eU:
                            delete a[r.playerId];
                            break;
                        case i.HY: {
                            const t = e.getState().players[r.playerId];
                            if (a[r.playerId] && t && !t.errorInfo?.adFailed) {
                                const t = a[r.playerId]();
                                e.dispatch((0, o.I3)(r.playerId, t));
                            }
                            break;
                        }
                    }
                    return t(r);
                };
        },
        471856: (e, t, r) => {
            r.d(t, { I3: () => i, Se: () => a, ZP: () => s });
            const o = "AD_LOADED",
                i = (e, t) => ({ type: o, playerId: e, adResponse: t }),
                s = (e, t) => {
                    if (t.type === o) {
                        const r = e.tracks,
                            o = t.adResponse;
                        if (void 0 === o.mediaInfo) return { ...e, adLoaded: !0 };
                        const i = o.mediaInfo.variants.find((e) => 0 === e.content_type.indexOf("application/x-mpegURL"));
                        if (void 0 === i) return { ...e, adLoaded: !0 };
                        const s = o.promotedContent || {};
                        let a;
                        return o.mediaInfo.call_to_action && (a = { type: o.mediaInfo.call_to_action.type, url: o.mediaInfo.call_to_action.url, click_tracking_embed_details: o.mediaInfo.call_to_action.click_tracking_embed_details }), { ...e, currentTrackId: 1, nextTrackIds: [0], tracks: [...r, { id: 1, displayType: "ad", cta: a, contentId: o.adId, contentType: "media_entity", publisherId: o.mediaInfo.publisher_id_str, durationMs: o.mediaInfo.duration_millis, shouldLoop: !1, shouldAutoAdvance: o.shouldAutoAdvance, impressionId: s.impressionId, disclosureType: s.disclosureType, dynamicPrerollType: o.dynamicPrerollType, rotation: 0, variants: [{ src: i.url, type: i.content_type }], currentVariantIndex: 0, advertiserName: o.advertiserName, advertiserProfileImageUrl: o.advertiserProfileImageUrl, useRedesignedPrerollUx: o.useRedesignedPrerollUx }], videoAnalyticsScribePassthrough: o.videoAnalyticsScribePassthrough, adLoaded: !0 };
                    }
                    return e;
                },
                a = { adLoaded: !1 };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41.33bdd5fa.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.HoverCard-63cb1cc4", "loader.directMessagesData-63cb1cc4"],
    {
        806528: (e, t, r) => {
            r.d(t, { Bz: () => l, ZW: () => _, ey: () => c, fw: () => s, iG: () => m, wM: () => d });
            var i = r(499627),
                o = r(341276);
            const a = "geoLocation",
                n = Object.freeze({ permissionStatus: void 0, position: void 0 });
            const s = (e) => e[a],
                d = (e) => e[a].permissionStatus,
                l = (e) => e[a].position,
                u = "rweb/geoLocation/SET_PERMISSION_STATUS",
                c = (e) => ({ payload: e, type: u }),
                p = "rweb/geoLocation/SET_POSITION",
                m = () => (e, t) =>
                    g()
                        .then((t) => e({ payload: t, type: p }))
                        .catch((t) => (e(c(o.S.denied)), Promise.reject(t))),
                _ = () => (e, t) => (l(t()) ? Promise.resolve() : e(m())),
                g = () =>
                    new Promise((e, t) =>
                        navigator.geolocation.getCurrentPosition((t) => {
                            const r = { timestamp: t.timestamp, coords: { latitude: t.coords.latitude, longitude: t.coords.longitude, altitude: t.coords.altitude, accuracy: t.coords.accuracy, altitudeAccuracy: t.coords.altitudeAccuracy, heading: t.coords.heading, speed: t.coords.speed } };
                            return e(r);
                        }, t),
                    );
            i.Z.register({
                [a]: function (e = n, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case u:
                            return { ...e, permissionStatus: t.payload };
                        case p:
                            return { ...e, position: t.payload };
                        default:
                            return e;
                    }
                },
            });
        },
        341276: (e, t, r) => {
            r.d(t, { M: () => o, S: () => i });
            const i = Object.freeze({ granted: "granted", denied: "denied", prompt: "prompt" }),
                o = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 });
        },
        947650: (e, t, r) => {
            r.d(t, { Hq: () => S, c1: () => g, lP: () => h, og: () => f });
            var i = r(745123),
                o = r(961104),
                a = r(499627),
                n = r(917799),
                s = r(56519),
                d = r(919022);
            const l = "knownFollowers",
                u = `rweb/${l}`,
                c = [],
                p = (0, n.dg)(u, "FETCH_KNOWN_FOLLOWERS"),
                m = {};
            a.Z.register({
                [l]: function (e = m, t) {
                    if (!t) return e;
                    if (t.type === p.SUCCESS) {
                        const r = t.payload || {},
                            { total_count: i, users: o } = r && r.result,
                            { user_id: a } = t.meta || {};
                        return a ? { ...e, [a]: { knownFollowersCount: i, knownFollowerIds: o } } : e;
                    }
                    return e;
                },
            });
            const _ = (e, t) => e[l][t],
                g = (e, t) => {
                    if (t) {
                        const r = w(e, t);
                        return (0, o.b)(d.ZP.selectMany(e, r), (e) => !!e);
                    }
                    return c;
                },
                f = (e, t) => g(e, t).filter(({ name: e, profile_image_url_https: t }) => !!t?.length && !!e?.length),
                h = (e, t) => {
                    let r;
                    if (t) {
                        const i = _(e, t);
                        r = i?.knownFollowersCount;
                    }
                    return r;
                },
                w = (e, t) => {
                    const r = _(e, t);
                    return r?.knownFollowerIds || c;
                },
                S =
                    (e) =>
                    (t, r, { api: o }) =>
                        void 0 !== h(r(), e)
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, r, { api: o }) =>
                                          (0, n._O)(t, { request: o.withEndpoint(i.Z).fetchFollowersYouFollow, params: { user_id: e, count: 3, with_total_count: !0 } })({ actionTypes: p, context: "FETCH_KNOWN_FOLLOWERS", meta: { user_id: e } }, (e) => {
                                              if (e) {
                                                  const { entities: t } = e;
                                                  return t ? [(0, s.dP)(t)] : void 0;
                                              }
                                          })
                                  )(e),
                              );
        },
        286e3: (e, t, r) => {
            r.d(t, { Rc: () => p, nx: () => l });
            var i = r(499627),
                o = r(576469),
                a = r(390387);
            const n = "rweb.channelsTimelineBehavior",
                s = "channelsTimelineBehavior",
                d = Object.freeze({});
            const l = (e) => e[s],
                u = "rweb/channelsTimelineBehavior/UPDATE_LIST_RANKINGS",
                c = (e) => ({ payload: e, type: u }),
                p =
                    ({ listId: e, useRanked: t }) =>
                    (r, i, { userPersistence: a }) => {
                        const s = i(),
                            d = { ...l(s), [e]: { useRanked: t } };
                        r(c(d));
                        const u = o.Z.select(s, e);
                        return u && u.following ? a.get(n).then((r) => a.set(n, { ...r, [e]: { useRanked: t } })) : Promise.resolve();
                    };
            i.Z.register(
                {
                    [s]: function (e = d, t) {
                        return t && t.type === u ? { ...t.payload } : e;
                    },
                },
                () =>
                    (e, t, { userPersistence: r }) =>
                        (0, a.Qb)(t())
                            ? r.get(n).then((t) => {
                                  t && e(c(t));
                              })
                            : Promise.resolve(),
            );
        },
        537052: (e, t, r) => {
            r.d(t, { Hf: () => n, OA: () => o, mL: () => a });
            r(571372);
            var i = r(837880);
            function o(e, t) {
                const r = (0, i.Z)(t / 100, 0, 1),
                    o = s[e],
                    a = r * (o.max - o.min);
                return l(o.min + a, 3);
            }
            function a(e) {
                const t = (0, i.Z)(e, 0, 1);
                for (let e = 0; e < d.length; e++) {
                    const r = d[e];
                    if ((0 === e && t <= r.min) || (e === d.length - 1 && t >= r.max) || (t >= r.min && t < r.max)) {
                        let e = u(t, r.min, r.max);
                        return (e = l(e, 3)), [r.name, e];
                    }
                }
                throw new Error("unreachable");
            }
            const n = Object.freeze({ uploading: "uploading", processing: "processing" }),
                s = { [n.uploading]: { name: n.uploading, min: 0, max: 0.5 }, [n.processing]: { name: n.processing, min: 0.5, max: 1 } },
                d = [s.uploading, s.processing];
            function l(e, t) {
                const r = Math.pow(10, t);
                return Math.round(e * r) / r;
            }
            function u(e, t, r) {
                return (e - t) / (r - t);
            }
            !(function () {
                let e,
                    t = 0;
                for (const r of d) {
                    if (((t += r.max - r.min), r.max <= r.min)) {
                        const e = JSON.stringify({ stage: r });
                        throw new Error(`INVALID STAGE MAX MUST BE GREATER THAN MIN [${e}]`);
                    }
                    if (r.min < 0) {
                        const e = JSON.stringify({ stage: r });
                        throw new Error(`INVALID STAGE MIN IS LESS THAN ZERO [${e}]`);
                    }
                    if (r.max > 1) {
                        const e = JSON.stringify({ stage: r });
                        throw new Error(`INVALID STAGE MAX IS GREATER THAN ONE [${e}]`);
                    }
                    if (e && r.min !== e.max) {
                        const t = JSON.stringify({ stage: r, last_stage: e });
                        throw new Error(`INVALID STAGE MIN MUST EQUAL PREVIOUS MAX [${t}]`);
                    }
                    e = r;
                }
                if (1 !== t) {
                    const e = JSON.stringify({ total: t });
                    throw new Error(`INVALID STAGE TOTAL MUST EQUAL EXACTLY 1.0 [${e}]`);
                }
            })();
        },
        111531: (e, t, r) => {
            r.d(t, { EM: () => c, K3: () => u, Xp: () => p });
            var i = r(882127),
                o = r(498510),
                a = (r(585488), r(277660)),
                n = r.n(a),
                s = r(708482),
                d = r(944681),
                l = r(535338);
            function u(e) {
                return (function (e) {
                    return (0, s.s)(e, _, {});
                })(e).then(
                    (e) =>
                        !m(e) &&
                        (function (e) {
                            return e?.user_preferences.allow_video_downloads ?? !0;
                        })(e),
                );
            }
            function c() {
                return m((0, l.p)(_, {}));
            }
            function p(e) {
                return (function (e) {
                    const t = e.user_results?.result;
                    if ("User" === t?.__typename) {
                        const e = t?.legacy_extended_profile?.birthdate;
                        if (e) {
                            const { day: t, month: r, year: i } = e;
                            return (0, d.k)(i, r, t, !0);
                        }
                    }
                    return !0;
                })(n()(g, e));
            }
            function m(e) {
                const t = e?.viewer?.user_results?.result;
                if ("User" === t?.__typename) {
                    const e = t?.legacy_extended_profile?.birthdate;
                    if (e) {
                        const { day: t, month: r, year: i } = e;
                        return (0, d.k)(i, r, t, !0);
                    }
                }
                return !0;
            }
            const _ = o.Z,
                g = i.Z;
        },
        497294: (e, t, r) => {
            r.d(t, { $i: () => pe, C4: () => q, G$: () => J, Q6: () => $, TU: () => Y, WU: () => Q, _B: () => oe, _J: () => re, _T: () => k, dD: () => ie, gz: () => V, m3: () => X, o6: () => se, oZ: () => me, pJ: () => ue, rA: () => j });
            r(571372), r(136728);
            var i = r(99107),
                o = r(411916),
                a = r.n(o),
                n = r(10622),
                s = r.n(n),
                d = r(111677),
                l = r.n(d),
                u = r(205074),
                c = r(653843),
                p = r(514354),
                m = r(908478),
                _ = r(417144),
                g = r(904940),
                f = r(918621),
                h = r(829053),
                w = r(716233),
                S = r(166677),
                y = r(221562),
                I = r(755296),
                P = r(946208),
                v = r(540387),
                b = r(653798),
                E = r(499627),
                A = r(917799),
                O = r(390387),
                x = r(38562),
                T = r(601576),
                M = r(111531),
                F = r(537052);
            const C = l().g40ff2b4,
                U = "mediaUpload",
                z = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload2.json",
                B = `rweb/${U}`,
                N = [],
                D = "upload";
            class Z extends Error {
                constructor(e, { code: t, isGif: r, isImage: i, isVideo: o, type: a }) {
                    super(e), (this.code = t), (this.type = a), (this.isGif = !!r), (this.isImage = !!i), (this.isVideo = !!o);
                }
            }
            function L(e, t, r) {
                let o = null,
                    a = {},
                    n = {};
                if ((t.getNumberValue("optimized_sru_parameters_enabled") && (n = { sruParameterOverrides: { minSegmentBytes: t.getNumberValue("optimized_sru_parameters_min_segment_bytes"), idealUploadTimeMs: t.getNumberValue("optimized_sru_parameters_ideal_upload_time_ms"), maxSegmentBytes: t.getNumberValue("optimized_sru_parameters_max_segment_bytes"), clientsideSruUploadTimeoutMs: t.getNumberValue("optimized_sru_parameters_client_side_timeout_ms") } }), (0, I.s)().isLoggedIn)) {
                    const e = (0, f.ej)({ cookieName: i.qj, featureSwitches: t });
                    if (e) {
                        const t = r?.actAsUserId;
                        n.sruHeaders = { ...(0, h.L)(t), "x-twitter-auth-type": "OAuth2Session", authorization: (0, i.Oj)(!1), [i.d4]: e };
                    }
                }
                return (
                    r?.useLongVideoEndpoint && (n.uploadUrl = z),
                    {
                        upload(t) {
                            (o = new _.Z(e, n)), (a = t), o.upload(a);
                        },
                        amendUpload(e) {
                            (a = { ...a, ...e }), o && o.upload(a);
                        },
                        uploadExternalMedia(t, r, i, a) {
                            (o = new _.Z(e, n)), o.uploadExternalMedia(t, r, i, a);
                        },
                        cancel() {
                            o && o.cancel();
                        },
                    }
                );
            }
            const V = (e) => e[U],
                X = (e, t) => {
                    const r = Array.isArray(t) ? t : [t];
                    return e[U].filter((e) => r.some((t) => t === e.id));
                },
                k = (e, t) => {
                    const r = X(e, t);
                    if (!r.length) return 0;
                    const i = r.reduce((e, t) => e + (t.uploadProgress || 0), 0) / r.length;
                    return Math.min(i, 1);
                },
                G = "rweb/mediaUpload/ADD_MEDIA",
                R = (e) => ({ payload: e, type: G });
            let H = 1;
            function j(e, t) {
                return (r, i, { featureSwitches: o, relayEnvironment: a }) => {
                    const n = Array.from(e, (e) => {
                            if ((0, v.Wv)(e)) {
                                const r = new v.ZP(e, t.isAmplify);
                                if ((0, w.TO)(e)) {
                                    const e = o.isTrue("responsive_web_hevc_upload_preview_enabled") && o.isTrue("responsive_web_composer_configurable_video_player_enabled");
                                    return r.withDimensionsAndOrientation(e);
                                }
                                return Promise.resolve(r);
                            }
                            return (0, P.h_)(e) ? Promise.resolve(new P.ZP(e)) : new u.ZP(e).withDimensionsAndOrientation();
                        }),
                        d = r((e, t, { relayEnvironment: r }) =>
                            s()(r, b.S, {}, { fetchPolicy: "store-or-network" })
                                .toPromise()
                                .then((e) => {
                                    const t = e?.viewer?.user_results?.result;
                                    return "User" === t?.__typename && (t?.sensitive_media_settings?.can_user_allow_sensitive_content ?? !1);
                                })
                                .catch(() => !1),
                        ).then((e) => e && (0, M.K3)(a));
                    return Promise.all(n)
                        .then(
                            (e) => {
                                const i = r(
                                    (function (e, t) {
                                        return (r, i, { featureSwitches: o, userClaims: a }) => {
                                            const { uploadIds: n = [], altTexts: s = [] } = t,
                                                d = (0, x.IX)(i()),
                                                l = (Array.isArray(e) ? e : [e]).map((e, l) => {
                                                    const p = o.isTrue("responsive_web_media_upload_metrics_enabled");
                                                    let m;
                                                    t.location && (m = _e(t.location, e, !1, { featureSwitches: o, userClaims: a }));
                                                    const _ = e instanceof v.ZP ? e.duration : void 0,
                                                        g = e instanceof u.ZP ? e.orientation : void 0,
                                                        f = p && m ? new y.ZP({ isExternal: !1, mediaCategory: m, videoDuration: _ }, d) : void 0,
                                                        h = o.isTrue("responsive_web_media_upload_md5_hashing_enabled") && e.isImage && e instanceof u.ZP,
                                                        S = o.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte");
                                                    return (
                                                        e instanceof v.ZP &&
                                                            (function (e) {
                                                                const { video: t } = e;
                                                                t &&
                                                                    ((t.currentTime = Math.min(0.1, t.duration)),
                                                                    t.addEventListener("timeupdate", () => {
                                                                        const r = document.createElement("canvas"),
                                                                            { height: i, width: o } = e;
                                                                        (r.width = o), (r.height = i);
                                                                        r.getContext("2d").drawImage(t, 0, 0, o, i), (e.thumbnail = r.toDataURL("image/png"));
                                                                    }));
                                                            })(e),
                                                        f?.setFileMetadata({ fileSize: e.size, mime: e.type, duration: _, width: e.width, height: e.height, orientation: g }),
                                                        (0, w.vn)(o, a, e, t, d).then(({ maxDimension: d, maxFileSize: p }) => {
                                                            const m = e.isImage && e instanceof u.ZP && (0, c.m2)(e, { maxFileSize: p, maxDimension: d, jpgPixelsPerByteForResize: S }),
                                                                _ = (0, w.SB)({ featureSwitches: o, userClaims: a }),
                                                                g = { useLongVideoEndpoint: e.isVideo && _ >= 1, actAsUserId: (0, O.dY)(i()) },
                                                                y = m ? void 0 : L(e.fileHandle, o, g),
                                                                I = W({ originalMediaFile: e, mediaFile: e, mediaFileHash: h ? void 0 : null, needsProcessing: m, location: t.location, uploadId: n[l] ?? "", reporter: f, uploader: y, mediaMetadata: { altText: s[l] }, abortController: h ? new AbortController() : void 0 });
                                                            return h && fe(r, i, I.id, e.fileHandle, I.reporter, I.abortController), I;
                                                        })
                                                    );
                                                });
                                            return Promise.all(l).then((e) => (r(R(e)), e));
                                        };
                                    })(e, t),
                                );
                                return i;
                            },
                            (e) => {
                                const t = (0, S.vK)(e);
                                return t && r((0, T.fz)(t)), Promise.reject(e);
                            },
                        )
                        .then((e) =>
                            d
                                .then((t) => {
                                    if (t) for (const t of e) r(oe(t.id, { ...t.mediaMetadata, allowDownloadStatus: { allowDownload: !0 } }));
                                    return e;
                                })
                                .catch(() => e),
                        );
                };
            }
            const $ =
                ({ height: e, mediaCategory: t, mediaType: r, previewMediaType: i, previewUrl: o, sourceUrl: a, stillMediaUrl: n, width: s }) =>
                (d, l, { featureSwitches: u }) => {
                    const c = u.isTrue("responsive_web_media_upload_metrics_enabled") && t ? new y.ZP({ isExternal: !0, mediaCategory: t }) : void 0;
                    c?.reportOperationStart(y.BX.Full, !0);
                    const p = { actAsUserId: (0, O.dY)(l()) },
                        m = W({ externalMediaDetails: { mediaCategory: t, mediaType: r, previewUrl: o || a, previewMediaType: i || r, sourceUrl: a, stillMediaUrl: n, width: s, height: e }, reporter: c, uploader: L(null, u, p) });
                    return d(R(m)), c?.toggleOperationPaused(y.BX.Full, !0), [m];
                };
            function W(e) {
                const t = { ...e, id: H, uploadFailed: !1, uploading: !1, uploadProgress: 1, mediaMetadata: void 0 };
                return (H += 1), t.uploadId || ((t.uploadId = ""), (t.uploadProgress = 0)), t;
            }
            const q =
                    (e) =>
                    (t, r, { featureSwitches: i, userClaims: o }) => {
                        const [a] = X(r(), e);
                        if (!a) return Promise.reject(new Error("media item not found"));
                        const { abortController: n, cropData: s, id: d, location: l, mediaFile: p, needsProcessing: m, originalMediaFile: _ } = a;
                        if (!_) return Promise.reject(new Error("media item not found"));
                        const g = i.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte"),
                            f = (0, x.IX)(r()),
                            h = { location: l };
                        return (0, w.vn)(i, o, _, h, f).then((e) => {
                            const o = { cropData: s, jpgPixelsPerByteForResize: g, maxFileSize: e.maxFileSize, maxDimension: e.maxDimension },
                                l = e.maxFileSize || 0,
                                f = e.maxDuration || 0;
                            if (_.isImage && _ instanceof u.ZP)
                                return m
                                    ? (0, c.ZP)(_, o)
                                          .then(
                                              (e) => new u.ZP(e).withDimensionsAndOrientation(),
                                              (e) => {
                                                  throw (n?.abort(), (e.type = "resize"), e);
                                              },
                                          )
                                          .then((e) => {
                                              _ !== p && p && p.dispose(), a.uploader && a.uploader.cancel && a.uploader.cancel();
                                              const o = { actAsUserId: (0, O.dY)(r()) },
                                                  n = L(e.fileHandle, i, o),
                                                  s = t(re({ id: d, mediaFile: e, needsProcessing: !1, uploadPromise: void 0, uploadProgress: 0, uploading: !1, uploadId: void 0, uploader: n }));
                                              return (a.uploadId || a.uploading) && t(pe([d])), s;
                                          })
                                    : Promise.resolve(a);
                            if (_.size > l) {
                                const e = Error("Exceeds size limit");
                                return ([e.type, e.code, e.limit] = ["maxsize", _.isGif ? w.BW.GIF_IS_TOO_LARGE : w.BW.VIDEO_IS_TOO_LARGE, l]), Promise.reject(e);
                            }
                            if (_.isVideo && _ instanceof v.ZP && _.duration > f) {
                                const e = Error("Exceeds duration limit");
                                return ([e.type, e.code, e.limit] = ["maxduration", w.ff.VIDEO_IS_TOO_LONG, f]), Promise.reject(e);
                            }
                            return Promise.resolve(a);
                        });
                    },
                J = (e, t) => (r, i) => {
                    const { onFailure: o } = t,
                        n = [];
                    return new Promise((t, i) => {
                        const s = (e) => {
                            if (!e.length) return t(n);
                            const [i] = e;
                            a()(() => {
                                i.reporter?.reportOperationStart(y.BX.Full, !0),
                                    i.reporter?.reportOperationStart([y.BX.Processing, y.BX.Metadata]),
                                    i.reporter?.reportOperationComplete(y.BX.Metadata, y.Uk.Complete),
                                    r(q(i.id)).then(
                                        (t) => {
                                            n.push(t), t?.reporter?.reportOperationComplete(y.BX.Processing, y.Uk.Success), t?.reporter?.toggleOperationPaused(y.BX.Full, !0), s(e.slice(1));
                                        },
                                        (t) => {
                                            const a = (0, S.ZP)(t, C);
                                            a && r((0, T.fz)(a));
                                            const { code: n, message: d, name: l, type: u } = t;
                                            i.reporter?.setMetadata({ reason: { name: l, message: d, code: n } });
                                            const p = "maxsize" === u || "maxduration" === u || ("resize" === u && (n === c.Y7.FILE_IS_NOT_AN_IMAGE || n === c.Y7.GIF_IS_TOO_LARGE)) ? y.Uk.Invalid : y.Uk.Failure;
                                            i.reporter?.reportOperationComplete([y.BX.Full, y.BX.Processing], p), o && o(i.id), s(e.slice(1));
                                        },
                                    );
                            });
                        };
                        s(e);
                    });
                },
                K = "rweb/mediaUpload/REMOVE_MEDIA",
                Y = (e) => ({ payload: Array.isArray(e) ? e : [e], type: K });
            function Q(e) {
                return (t, r) => {
                    X(r(), e).forEach((e) => {
                        const { abortController: t, mediaFile: r, originalMediaFile: i, reporter: o, uploader: a } = e;
                        t?.abort(), a && a.cancel && a.cancel(), o?.reportOperationComplete(y.BX.Full, y.Uk.Cancel), r && r.dispose(), i && i.dispose();
                    }),
                        t(Y(e));
                };
            }
            const ee = "rweb/mediaUpload/UPDATE_MEDIA",
                te = (e) => ({ payload: e, type: ee });
            function re(e) {
                return (t, r) => {
                    t(te(e));
                    const [i] = X(r(), e.id);
                    return i;
                };
            }
            function ie(e) {
                return (t, r) => {
                    const [i] = X(r(), e);
                    i.uploader?.cancel(), t(pe(e));
                };
            }
            function oe(e, t) {
                return (r) => r(re({ id: e, mediaMetadata: t }));
            }
            const ae = "SEND_METADATA",
                ne = A.dg(B, ae);
            function se(e) {
                return (t, r, { api: i }) => A._O(t, { params: e, request: i.withEndpoint(g.Z).metadataCreate })({ actionTypes: ne, context: ae });
            }
            const de = "ATTACH_SUBTITLES",
                le = A.dg(B, de);
            function ue(e) {
                return (t, r, i) => {
                    const { subtitlesDisplayName: o, subtitlesLang: a, subtitlesMediaUploadId: n, videoMediaUploadId: s } = e,
                        { api: d, featureSwitches: l, userClaims: u } = i,
                        c = ge(e.mediaItem, !1, { featureSwitches: l, userClaims: u }) || "";
                    return A._O(t, { params: { videoMediaUploadId: s, videoMediaCategory: c, subtitlesLang: a, subtitlesMediaUploadId: n, subtitlesDisplayName: o }, request: d.withEndpoint(g.Z).attachSubtitles })({ actionTypes: le, context: de });
                };
            }
            const ce = (e) => {
                const t = e.trimData;
                if (t) return `${t.startTime.toFixed(3)}-${t.endTime.toFixed(3)}`;
            };
            const pe =
                    (e, t = Object.freeze({})) =>
                    (r, i, { featureSwitches: o, userClaims: a }) => {
                        const n = X(i(), e),
                            s = (e) => r(re(e));
                        function d(e, r = !1) {
                            const i = o.isTrue("responsive_web_media_upload_md5_hashing_enabled"),
                                { abortController: n, id: l, mediaFile: c, mediaFileHash: p, reporter: m, uploader: g } = e,
                                f = i && c && c.isImage && c instanceof u.ZP,
                                h = void 0 === p;
                            return (
                                m?.toggleOperationPaused(y.BX.Full, !1),
                                t.withoutReUpload && e.uploadId
                                    ? Promise.resolve(s({ id: l, uploadProgress: 1, uploading: !1 }))
                                    : (t.preUpload || (m?.reportOperationStart(y.BX.UploadSubmitUntilSruFinish), m?.reportUploadSubmit(), f && h && n?.abort(), e.uploading && g && g.amendUpload({ pauseBeforeFinalize: !1, trimRanges: ce(e) })),
                                      e.uploadPromise
                                          ? e.uploadPromise.then((t) => ({ ...t, mediaMetadata: e.mediaMetadata }))
                                          : g
                                            ? (function (e) {
                                                  const { featureSwitches: t, gifAsStaticImage: r, mediaItem: i, updateMediaItem: o, uploadMediaItem: a, uploadOptions: n, userClaims: s } = e,
                                                      { abortController: d, externalMediaDetails: l, id: u, reporter: c, uploader: p } = i,
                                                      m = new Promise((e, m) => {
                                                          const g = (t) => {
                                                                  c?.setMetadata({ mediaId: t }), c?.reportOperationComplete([y.BX.Full, y.BX.UploadSubmitUntilSruFinish], y.Uk.Success), e(o({ id: u, uploadId: t, uploadProgress: 1, uploading: !1 }));
                                                              },
                                                              f = (e, t, r) => {
                                                                  c?.setMetadata({ mediaId: r }), "uploading" === t ? (o({ id: u, uploadProgress: F.OA("uploading", e) }), 100 === e && c?.reportOperationComplete(y.BX.SruUpload, y.Uk.Success)) : "processing" === t && o({ id: u, uploadProgress: F.OA("processing", e) });
                                                              },
                                                              h = () => {
                                                                  c?.toggleOperationPaused(y.BX.Full, !0);
                                                              },
                                                              S = (t) => {
                                                                  const { code: n, detail_message: s, maxSizeBytes: l, mediaId: g, message: f, name: h } = t;
                                                                  if (i.mediaFile?.isGif && !r && n === w.Tz.INVALID_MEDIA_CODE) p?.amendUpload({ pauseBeforeFinalize: !1 }), o({ id: u, uploadProgress: 0, uploading: !1, uploadFailed: !1, uploadPromise: void 0 }), a(i, !0).then(e).catch(m);
                                                                  else {
                                                                      d?.abort(), o({ id: u, uploadProgress: 0, uploading: !1, uploadFailed: !0, uploadError: { code: n, message: f, detail_message: s, maxSizeBytes: l }, uploadPromise: void 0 });
                                                                      const e = new Z(f ? `${f}` : `Media upload failed [Error code: ${n}]${g ? ` ${g}` : ""}`, { code: n, type: D, isGif: !!i.externalMediaDetails || (i.mediaFile && i.mediaFile.isGif), isImage: i.mediaFile && i.mediaFile.isImage, isVideo: i.mediaFile && i.mediaFile instanceof v.ZP && i.mediaFile.isVideo }),
                                                                          t = n === _.d.CANCELED ? y.Uk.Cancel : y.Uk.Failure;
                                                                      c?.setMetadata({ reason: { name: h, message: f, code: n } }), c?.reportOperationComplete([y.BX.Full, y.BX.SruUpload, y.BX.UploadSubmitUntilSruFinish], t), m(e);
                                                                  }
                                                              };
                                                          if (l && i.uploader) i.uploader?.uploadExternalMedia(l.sourceUrl, l.mediaType, l.mediaCategory, { success: g, progress: f, error: S, mediaItem: i });
                                                          else if (i.uploader) {
                                                              const { extraInitParams: e = "", preUpload: o = !1 } = n,
                                                                  { enable_1080p_variant: a, mediaFile: d, mediaFileHash: l } = i,
                                                                  u = t.isTrue("media_async_upload_longer_video_resolution_selector"),
                                                                  p = d && d.size > 1e8 && t.isTrue("rweb_media_multi_requests_enabled"),
                                                                  m = ge(i, r, { featureSwitches: t, userClaims: s }),
                                                                  _ = m ? `&media_category=${m}` : "";
                                                              c?.reportOperationStart(y.BX.SruUpload), i.uploader?.upload({ success: g, progress: f, pause: h, error: S, extraInitParams: e + _, extraFinalizeParams: l ? `&original_md5=${l}` : void 0, trimRanges: ce(i), pauseBeforeFinalize: o, withMultiRequests: p, withMultiRequestsDefaultPoolSize: t.getNumberValue("rweb_media_multi_requests_default_pool_size", d && d.size > 2e9 ? 4 : 1), enable_1080p_variant: !u || a, mediaItem: i });
                                                          }
                                                      });
                                                  return o({ id: u, uploading: !0, uploadFailed: !1, uploadProgress: 0, uploadPromise: m }), m;
                                              })({ mediaItem: e, updateMediaItem: s, uploadMediaItem: d, gifAsStaticImage: r, uploadOptions: t, featureSwitches: o, userClaims: a })
                                            : Promise.reject(new Error("Media has no uploader. Did you forget to call resizeMedia?")))
                            );
                        }
                        const l = n.map((e) => d(e));
                        return Promise.all(l).catch((e) => {
                            throw (e.type || (e.type = D), e);
                        });
                    },
                me = (e, t) => {
                    const r = pe(e, { ...t, preUpload: !0 });
                    return (...e) =>
                        r(...e).catch((e) => {
                            if (e.code !== _.d.CANCELED) throw e;
                        });
                };
            function _e(e, t, r, i) {
                const o = e === w.vC.Tweet || e === w.vC.TwitterArticle,
                    a = e === w.vC.TwitterArticle;
                if (t.isSubtitles) return w.xz.Subtitles;
                if (t.isGif && !r) return o ? w.xz.TweetGif : w.xz.DMGif;
                if (t.isAmplify) return w.xz.AmplifyVideo;
                if (t.isVideo) {
                    const e = t.duration || 0,
                        { featureSwitches: r, userClaims: n } = i,
                        s = (0, w.SB)({ featureSwitches: r, userClaims: n }),
                        d = r.getNumberValue("media_async_upload_amplify_duration_threshold", w.y$.Duration[s]);
                    return "number" == typeof s && 1 === s && e > d ? w.xz.AmplifyVideo : a ? w.xz.TweetVideo : o ? w.xz.AmplifyVideo : w.xz.DMVideo;
                }
                return o ? w.xz.TweetImage : w.xz.DMImage;
            }
            function ge(e, t, r) {
                const { location: i, mediaFile: o } = e;
                if (!i || !o) return null;
                switch (i) {
                    case w.vC.Tweet:
                    case w.vC.Dm:
                    case w.vC.TwitterArticle:
                        return _e(i, o, t, r);
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
            const fe = (e, t, r, i, o, a) => {
                o?.reportOperationStart(y.BX.Hash, !0),
                    o?.setMetadata({ hashState: y.Xj.InProgress }),
                    (0, p.Q)(i, a)
                        .then((i) => {
                            const [a] = X(t(), r);
                            if (!a) {
                                throw new Z("Media item was removed", { code: p.S.HASHING_ABORTED, type: D, isGif: !1, isImage: !0, isVideo: !1 });
                            }
                            e(re({ id: r, mediaFileHash: i, abortController: void 0 }));
                            const { uploadPromise: n, uploader: s, uploading: d } = a;
                            n && d && s && s.amendUpload({ extraFinalizeParams: i ? `&original_md5=${i}` : void 0 }), o?.setMetadata({ hashState: y.Xj.Complete }), o?.reportOperationComplete(y.BX.Hash, y.Uk.Success);
                        })
                        .catch((i) => {
                            const [a] = X(t(), r);
                            a && e(re({ id: r, mediaFileHash: null, abortController: void 0 })), i.code === p.S.HASHING_ABORTED ? (o?.setMetadata({ hashState: y.Xj.Canceled }), o?.reportOperationComplete(y.BX.Hash, y.Uk.Cancel)) : (o?.setMetadata({ hashState: y.Xj.Failure }), o?.reportOperationComplete(y.BX.Hash, y.Uk.Failure));
                        });
            };
            E.Z.register({
                [U]: function (e = N, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case G:
                            return t.payload ? e.concat(t.payload) : e;
                        case K: {
                            const r = t.payload;
                            return r && r.length ? e.filter((e) => -1 === r.indexOf(e.id)) : e;
                        }
                        case ee: {
                            const r = t.payload;
                            return r
                                ? e.map((e) => {
                                      if (e.id === r.id) {
                                          const t = e.needsProcessing || (r.hasOwnProperty("cropData") && !(0, m.Z)(r.cropData, e.cropData));
                                          return { ...e, needsProcessing: t, uploader: t ? void 0 : e.uploader, ...r };
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
        112859: (e, t, r) => {
            r.d(t, { Z: () => c });
            var i = r(202784),
                o = r(154003),
                a = r(111677),
                n = r.n(a),
                s = r(457566),
                d = r(725516),
                l = r(979512);
            const u = n().fc7db594;
            function c({ screenName: e }) {
                const { openGrok: t } = (0, l.Z)(),
                    r = (0, d.z)(),
                    a = i.useCallback(() => {
                        t({ text: `@${e}`, autoSubmit: !0, source: "user_profile_summary" }), r.scribe({ element: "grok-user-info-button", action: "click" });
                    }, [r, t, e]);
                return i.createElement(o.ZP, { icon: i.createElement(s.x1, null), onPress: a }, u);
            }
        },
        510588: (e, t, r) => {
            r.d(t, { $5: () => c, By: () => h, DV: () => I, Fz: () => g, Ge: () => S, Ns: () => E, Wy: () => _, _g: () => v, ax: () => w, cx: () => f, l1: () => P, tt: () => b, xh: () => m });
            var i = r(614983),
                o = r.n(i),
                a = r(842799),
                n = r(286e3),
                s = r(576469),
                d = r(919022),
                l = r(312771);
            const u = { url: "https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png", width: 1125, height: 375 },
                c = (e, t) => {
                    const r = _(e, t),
                        i = w(e, t),
                        o = S(e, t);
                    return r ? `/i/lists/${r}` : i && o ? `/${i}/lists/${o}` : "";
                },
                p = (e, t) => t.match.params.listId || void 0,
                m = (e, t) => {
                    const r = t.match.params.listId;
                    return o()(r, "listId should always be specified"), r;
                },
                _ = (e, t) =>
                    p(0, t) ||
                    ((e, t) => {
                        const r = g(e, t);
                        return r && r.id_str;
                    })(e, t),
                g = (e, t) => {
                    const r = p(0, t);
                    return r ? s.Z.select(e, r) : s.Z.selectByKey(e, y(e, t));
                },
                f = (e, t) => {
                    const r = g(e, t);
                    return r && r.following;
                },
                h = (e, t) => {
                    const r = g(e, t);
                    return r && r.name;
                },
                w = (e, t) => {
                    const r = p(0, t);
                    return t.match.params.screenName || void 0 || (r && s.Z.selectListAuthorScreenName(e, r));
                },
                S = (e, t) => {
                    const r = g(e, t);
                    return t.match.params.slug || (r && r.slug);
                },
                y = (e, t) => {
                    const r = t.match.params.slug,
                        i = t.match.params.screenName;
                    return r && i ? (0, a.Z)(i, r) : "";
                },
                I = (e, t) => {
                    const r =
                        _(e, t) ||
                        ((e, t) => {
                            const r = S(e, t),
                                i = w(e, t);
                            return r && i ? (0, a.Z)(i, r) : "";
                        })(e, t);
                    return s.Z.selectFetchStatus(e, r) || l.ZP.NONE;
                },
                P = (e, t) => {
                    const r = w(e, t);
                    return r ? d.ZP.selectByScreenName(e, r) : void 0;
                },
                v = (e, t) => {
                    const r = _(e, t),
                        i = (0, n.nx)(e);
                    return (r && i[r] && i[r].useRanked) || !1;
                },
                b = (e, t) => {
                    const r = s.Z.select(e, t);
                    if (r) {
                        const e = r.customBanner;
                        return e || r.defaultBanner;
                    }
                    return { crop: [], image: u };
                },
                E = (e, t) => {
                    const r = g(e, t);
                    return r?.mode;
                };
        },
        653798: (e, t, r) => {
            r.d(t, { S: () => o });
            var i = r(326439);
            r(585488);
            const o = i.Z;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.HoverCard-63cb1cc4.d6c3d95a.js.map

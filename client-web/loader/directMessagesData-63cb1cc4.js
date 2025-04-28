"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.directMessagesData-63cb1cc4"],
    {
        537052: (e, t, r) => {
            r.d(t, { Hf: () => n, OA: () => a, mL: () => o });
            r(571372);
            var i = r(837880);
            function a(e, t) {
                const r = (0, i.Z)(t / 100, 0, 1),
                    a = s[e],
                    o = r * (a.max - a.min);
                return l(a.min + o, 3);
            }
            function o(e) {
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
            r.d(t, { EM: () => p, K3: () => u, Xp: () => c });
            var i = r(882127),
                a = r(498510),
                o = (r(585488), r(277660)),
                n = r.n(o),
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
            function p() {
                return m((0, l.p)(_, {}));
            }
            function c(e) {
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
            const _ = a.Z,
                g = i.Z;
        },
        497294: (e, t, r) => {
            r.d(t, { $i: () => ce, C4: () => Y, G$: () => q, Q6: () => $, TU: () => W, WU: () => K, _B: () => ae, _J: () => re, _T: () => G, dD: () => ie, gz: () => L, m3: () => Z, o6: () => se, oZ: () => me, pJ: () => ue, rA: () => R });
            r(571372), r(136728);
            var i = r(99107),
                a = r(411916),
                o = r.n(a),
                n = r(10622),
                s = r.n(n),
                d = r(674132),
                l = r.n(d),
                u = r(205074),
                p = r(653843),
                c = r(514354),
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
                A = r(499627),
                x = r(917799),
                E = r(390387),
                M = r(38562),
                C = r(601576),
                U = r(111531),
                T = r(537052);
            const F = l().g40ff2b4,
                O = "mediaUpload",
                D = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload2.json",
                z = `rweb/${O}`,
                B = [],
                N = "upload";
            class X extends Error {
                constructor(e, { code: t, isGif: r, isImage: i, isVideo: a, type: o }) {
                    super(e), (this.code = t), (this.type = o), (this.isGif = !!r), (this.isImage = !!i), (this.isVideo = !!a);
                }
            }
            function V(e, t, r) {
                let a = null,
                    o = {},
                    n = {};
                if ((t.getNumberValue("optimized_sru_parameters_enabled") && (n = { sruParameterOverrides: { minSegmentBytes: t.getNumberValue("optimized_sru_parameters_min_segment_bytes"), idealUploadTimeMs: t.getNumberValue("optimized_sru_parameters_ideal_upload_time_ms"), maxSegmentBytes: t.getNumberValue("optimized_sru_parameters_max_segment_bytes"), clientsideSruUploadTimeoutMs: t.getNumberValue("optimized_sru_parameters_client_side_timeout_ms") } }), (0, I.s)().isLoggedIn)) {
                    const e = (0, f.ej)({ cookieName: i.qj, featureSwitches: t });
                    if (e) {
                        const t = r?.actAsUserId;
                        n.sruHeaders = { ...(0, h.L)(t), "x-twitter-auth-type": "OAuth2Session", authorization: (0, i.Oj)(!1), [i.d4]: e };
                    }
                }
                return (
                    r?.useLongVideoEndpoint && (n.uploadUrl = D),
                    {
                        upload(t) {
                            (a = new _.Z(e, n)), (o = t), a.upload(o);
                        },
                        amendUpload(e) {
                            (o = { ...o, ...e }), a && a.upload(o);
                        },
                        uploadExternalMedia(t, r, i, o) {
                            (a = new _.Z(e, n)), a.uploadExternalMedia(t, r, i, o);
                        },
                        cancel() {
                            a && a.cancel();
                        },
                    }
                );
            }
            const L = (e) => e[O],
                Z = (e, t) => {
                    const r = Array.isArray(t) ? t : [t];
                    return e[O].filter((e) => r.some((t) => t === e.id));
                },
                G = (e, t) => {
                    const r = Z(e, t);
                    if (!r.length) return 0;
                    const i = r.reduce((e, t) => e + (t.uploadProgress || 0), 0) / r.length;
                    return Math.min(i, 1);
                },
                H = "rweb/mediaUpload/ADD_MEDIA",
                j = (e) => ({ payload: e, type: H });
            let k = 1;
            function R(e, t) {
                return (r, i, { featureSwitches: a, relayEnvironment: o }) => {
                    const n = Array.from(e, (e) => {
                            if ((0, v.Wv)(e)) {
                                const r = new v.ZP(e, t.isAmplify);
                                if ((0, w.TO)(e)) {
                                    const e = a.isTrue("responsive_web_hevc_upload_preview_enabled") && a.isTrue("responsive_web_composer_configurable_video_player_enabled");
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
                        ).then((e) => e && (0, U.K3)(o));
                    return Promise.all(n)
                        .then(
                            (e) => {
                                const i = r(
                                    (function (e, t) {
                                        return (r, i, { featureSwitches: a, userClaims: o }) => {
                                            const { uploadIds: n = [], altTexts: s = [] } = t,
                                                d = (0, M.IX)(i()),
                                                l = (Array.isArray(e) ? e : [e]).map((e, l) => {
                                                    const c = a.isTrue("responsive_web_media_upload_metrics_enabled");
                                                    let m;
                                                    t.location && (m = _e(t.location, e, !1, { featureSwitches: a, userClaims: o }));
                                                    const _ = e instanceof v.ZP ? e.duration : void 0,
                                                        g = e instanceof u.ZP ? e.orientation : void 0,
                                                        f = c && m ? new y.ZP({ isExternal: !1, mediaCategory: m, videoDuration: _ }, d) : void 0,
                                                        h = a.isTrue("responsive_web_media_upload_md5_hashing_enabled") && e.isImage && e instanceof u.ZP,
                                                        S = a.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte");
                                                    return (
                                                        e instanceof v.ZP &&
                                                            (function (e) {
                                                                const { video: t } = e;
                                                                t &&
                                                                    ((t.currentTime = Math.min(0.1, t.duration)),
                                                                    t.addEventListener("timeupdate", () => {
                                                                        const r = document.createElement("canvas"),
                                                                            { height: i, width: a } = e;
                                                                        (r.width = a), (r.height = i);
                                                                        r.getContext("2d").drawImage(t, 0, 0, a, i), (e.thumbnail = r.toDataURL("image/png"));
                                                                    }));
                                                            })(e),
                                                        f?.setFileMetadata({ fileSize: e.size, mime: e.type, duration: _, width: e.width, height: e.height, orientation: g }),
                                                        (0, w.vn)(a, o, e, t, d).then(({ maxDimension: d, maxFileSize: c }) => {
                                                            const m = e.isImage && e instanceof u.ZP && (0, p.m2)(e, { maxFileSize: c, maxDimension: d, jpgPixelsPerByteForResize: S }),
                                                                _ = (0, w.SB)({ featureSwitches: a, userClaims: o }),
                                                                g = { useLongVideoEndpoint: e.isVideo && _ >= 1, actAsUserId: (0, E.dY)(i()) },
                                                                y = m ? void 0 : V(e.fileHandle, a, g),
                                                                I = J({ originalMediaFile: e, mediaFile: e, mediaFileHash: h ? void 0 : null, needsProcessing: m, location: t.location, uploadId: n[l] ?? "", reporter: f, uploader: y, mediaMetadata: { altText: s[l] }, abortController: h ? new AbortController() : void 0 });
                                                            return h && fe(r, i, I.id, e.fileHandle, I.reporter, I.abortController), I;
                                                        })
                                                    );
                                                });
                                            return Promise.all(l).then((e) => (r(j(e)), e));
                                        };
                                    })(e, t),
                                );
                                return i;
                            },
                            (e) => {
                                const t = (0, S.vK)(e);
                                return t && r((0, C.fz)(t)), Promise.reject(e);
                            },
                        )
                        .then((e) =>
                            d
                                .then((t) => {
                                    if (t) for (const t of e) r(ae(t.id, { ...t.mediaMetadata, allowDownloadStatus: { allowDownload: !0 } }));
                                    return e;
                                })
                                .catch(() => e),
                        );
                };
            }
            const $ =
                ({ height: e, mediaCategory: t, mediaType: r, previewMediaType: i, previewUrl: a, sourceUrl: o, stillMediaUrl: n, width: s }) =>
                (d, l, { featureSwitches: u }) => {
                    const p = u.isTrue("responsive_web_media_upload_metrics_enabled") && t ? new y.ZP({ isExternal: !0, mediaCategory: t }) : void 0;
                    p?.reportOperationStart(y.BX.Full, !0);
                    const c = { actAsUserId: (0, E.dY)(l()) },
                        m = J({ externalMediaDetails: { mediaCategory: t, mediaType: r, previewUrl: a || o, previewMediaType: i || r, sourceUrl: o, stillMediaUrl: n, width: s, height: e }, reporter: p, uploader: V(null, u, c) });
                    return d(j(m)), p?.toggleOperationPaused(y.BX.Full, !0), [m];
                };
            function J(e) {
                const t = { ...e, id: k, uploadFailed: !1, uploading: !1, uploadProgress: 1, mediaMetadata: void 0 };
                return (k += 1), t.uploadId || ((t.uploadId = ""), (t.uploadProgress = 0)), t;
            }
            const Y =
                    (e) =>
                    (t, r, { featureSwitches: i, userClaims: a }) => {
                        const [o] = Z(r(), e);
                        if (!o) return Promise.reject(new Error("media item not found"));
                        const { abortController: n, cropData: s, id: d, location: l, mediaFile: c, needsProcessing: m, originalMediaFile: _ } = o;
                        if (!_) return Promise.reject(new Error("media item not found"));
                        const g = i.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte"),
                            f = (0, M.IX)(r()),
                            h = { location: l };
                        return (0, w.vn)(i, a, _, h, f).then((e) => {
                            const a = { cropData: s, jpgPixelsPerByteForResize: g, maxFileSize: e.maxFileSize, maxDimension: e.maxDimension },
                                l = e.maxFileSize || 0,
                                f = e.maxDuration || 0;
                            if (_.isImage && _ instanceof u.ZP)
                                return m
                                    ? (0, p.ZP)(_, a)
                                          .then(
                                              (e) => new u.ZP(e).withDimensionsAndOrientation(),
                                              (e) => {
                                                  throw (n?.abort(), (e.type = "resize"), e);
                                              },
                                          )
                                          .then((e) => {
                                              _ !== c && c && c.dispose(), o.uploader && o.uploader.cancel && o.uploader.cancel();
                                              const a = { actAsUserId: (0, E.dY)(r()) },
                                                  n = V(e.fileHandle, i, a),
                                                  s = t(re({ id: d, mediaFile: e, needsProcessing: !1, uploadPromise: void 0, uploadProgress: 0, uploading: !1, uploadId: void 0, uploader: n }));
                                              return (o.uploadId || o.uploading) && t(ce([d])), s;
                                          })
                                    : Promise.resolve(o);
                            if (_.size > l) {
                                const e = Error("Exceeds size limit");
                                return ([e.type, e.code, e.limit] = ["maxsize", _.isGif ? w.BW.GIF_IS_TOO_LARGE : w.BW.VIDEO_IS_TOO_LARGE, l]), Promise.reject(e);
                            }
                            if (_.isVideo && _ instanceof v.ZP && _.duration > f) {
                                const e = Error("Exceeds duration limit");
                                return ([e.type, e.code, e.limit] = ["maxduration", w.ff.VIDEO_IS_TOO_LONG, f]), Promise.reject(e);
                            }
                            return Promise.resolve(o);
                        });
                    },
                q = (e, t) => (r, i) => {
                    const { onFailure: a } = t,
                        n = [];
                    return new Promise((t, i) => {
                        const s = (e) => {
                            if (!e.length) return t(n);
                            const [i] = e;
                            o()(() => {
                                i.reporter?.reportOperationStart(y.BX.Full, !0),
                                    i.reporter?.reportOperationStart([y.BX.Processing, y.BX.Metadata]),
                                    i.reporter?.reportOperationComplete(y.BX.Metadata, y.Uk.Complete),
                                    r(Y(i.id)).then(
                                        (t) => {
                                            n.push(t), t?.reporter?.reportOperationComplete(y.BX.Processing, y.Uk.Success), t?.reporter?.toggleOperationPaused(y.BX.Full, !0), s(e.slice(1));
                                        },
                                        (t) => {
                                            const o = (0, S.ZP)(t, F);
                                            o && r((0, C.fz)(o));
                                            const { code: n, message: d, name: l, type: u } = t;
                                            i.reporter?.setMetadata({ reason: { name: l, message: d, code: n } });
                                            const c = "maxsize" === u || "maxduration" === u || ("resize" === u && (n === p.Y7.FILE_IS_NOT_AN_IMAGE || n === p.Y7.GIF_IS_TOO_LARGE)) ? y.Uk.Invalid : y.Uk.Failure;
                                            i.reporter?.reportOperationComplete([y.BX.Full, y.BX.Processing], c), a && a(i.id), s(e.slice(1));
                                        },
                                    );
                            });
                        };
                        s(e);
                    });
                },
                Q = "rweb/mediaUpload/REMOVE_MEDIA",
                W = (e) => ({ payload: Array.isArray(e) ? e : [e], type: Q });
            function K(e) {
                return (t, r) => {
                    Z(r(), e).forEach((e) => {
                        const { abortController: t, mediaFile: r, originalMediaFile: i, reporter: a, uploader: o } = e;
                        t?.abort(), o && o.cancel && o.cancel(), a?.reportOperationComplete(y.BX.Full, y.Uk.Cancel), r && r.dispose(), i && i.dispose();
                    }),
                        t(W(e));
                };
            }
            const ee = "rweb/mediaUpload/UPDATE_MEDIA",
                te = (e) => ({ payload: e, type: ee });
            function re(e) {
                return (t, r) => {
                    t(te(e));
                    const [i] = Z(r(), e.id);
                    return i;
                };
            }
            function ie(e) {
                return (t, r) => {
                    const [i] = Z(r(), e);
                    i.uploader?.cancel(), t(ce(e));
                };
            }
            function ae(e, t) {
                return (r) => r(re({ id: e, mediaMetadata: t }));
            }
            const oe = "SEND_METADATA",
                ne = x.dg(z, oe);
            function se(e) {
                return (t, r, { api: i }) => x._O(t, { params: e, request: i.withEndpoint(g.Z).metadataCreate })({ actionTypes: ne, context: oe });
            }
            const de = "ATTACH_SUBTITLES",
                le = x.dg(z, de);
            function ue(e) {
                return (t, r, i) => {
                    const { subtitlesDisplayName: a, subtitlesLang: o, subtitlesMediaUploadId: n, videoMediaUploadId: s } = e,
                        { api: d, featureSwitches: l, userClaims: u } = i,
                        p = ge(e.mediaItem, !1, { featureSwitches: l, userClaims: u }) || "";
                    return x._O(t, { params: { videoMediaUploadId: s, videoMediaCategory: p, subtitlesLang: o, subtitlesMediaUploadId: n, subtitlesDisplayName: a }, request: d.withEndpoint(g.Z).attachSubtitles })({ actionTypes: le, context: de });
                };
            }
            const pe = (e) => {
                const t = e.trimData;
                if (t) return `${t.startTime.toFixed(3)}-${t.endTime.toFixed(3)}`;
            };
            const ce =
                    (e, t = Object.freeze({})) =>
                    (r, i, { featureSwitches: a, userClaims: o }) => {
                        const n = Z(i(), e),
                            s = (e) => r(re(e));
                        function d(e, r = !1) {
                            const i = a.isTrue("responsive_web_media_upload_md5_hashing_enabled"),
                                { abortController: n, id: l, mediaFile: p, mediaFileHash: c, reporter: m, uploader: g } = e,
                                f = i && p && p.isImage && p instanceof u.ZP,
                                h = void 0 === c;
                            return (
                                m?.toggleOperationPaused(y.BX.Full, !1),
                                t.withoutReUpload && e.uploadId
                                    ? Promise.resolve(s({ id: l, uploadProgress: 1, uploading: !1 }))
                                    : (t.preUpload || (m?.reportOperationStart(y.BX.UploadSubmitUntilSruFinish), m?.reportUploadSubmit(), f && h && n?.abort(), e.uploading && g && g.amendUpload({ pauseBeforeFinalize: !1, trimRanges: pe(e) })),
                                      e.uploadPromise
                                          ? e.uploadPromise.then((t) => ({ ...t, mediaMetadata: e.mediaMetadata }))
                                          : g
                                            ? (function (e) {
                                                  const { featureSwitches: t, gifAsStaticImage: r, mediaItem: i, updateMediaItem: a, uploadMediaItem: o, uploadOptions: n, userClaims: s } = e,
                                                      { abortController: d, externalMediaDetails: l, id: u, reporter: p, uploader: c } = i,
                                                      m = new Promise((e, m) => {
                                                          const g = (t) => {
                                                                  p?.setMetadata({ mediaId: t }), p?.reportOperationComplete([y.BX.Full, y.BX.UploadSubmitUntilSruFinish], y.Uk.Success), e(a({ id: u, uploadId: t, uploadProgress: 1, uploading: !1 }));
                                                              },
                                                              f = (e, t, r) => {
                                                                  p?.setMetadata({ mediaId: r }), "uploading" === t ? (a({ id: u, uploadProgress: T.OA("uploading", e) }), 100 === e && p?.reportOperationComplete(y.BX.SruUpload, y.Uk.Success)) : "processing" === t && a({ id: u, uploadProgress: T.OA("processing", e) });
                                                              },
                                                              h = () => {
                                                                  p?.toggleOperationPaused(y.BX.Full, !0);
                                                              },
                                                              S = (t) => {
                                                                  const { code: n, detail_message: s, maxSizeBytes: l, message: g, name: f } = t;
                                                                  if (i.mediaFile?.isGif && !r && n === w.Tz.INVALID_MEDIA_CODE) c?.amendUpload({ pauseBeforeFinalize: !1 }), a({ id: u, uploadProgress: 0, uploading: !1, uploadFailed: !1, uploadPromise: void 0 }), o(i, !0).then(e).catch(m);
                                                                  else {
                                                                      d?.abort(), a({ id: u, uploadProgress: 0, uploading: !1, uploadFailed: !0, uploadError: { code: n, message: g, detail_message: s, maxSizeBytes: l }, uploadPromise: void 0 });
                                                                      const e = new X(g ? `${g}` : `Media upload failed [Error code: ${n}]`, { code: n, type: N, isGif: !!i.externalMediaDetails || (i.mediaFile && i.mediaFile.isGif), isImage: i.mediaFile && i.mediaFile.isImage, isVideo: i.mediaFile && i.mediaFile instanceof v.ZP && i.mediaFile.isVideo }),
                                                                          t = n === _.d.CANCELED ? y.Uk.Cancel : y.Uk.Failure;
                                                                      p?.setMetadata({ reason: { name: f, message: g, code: n } }), p?.reportOperationComplete([y.BX.Full, y.BX.SruUpload, y.BX.UploadSubmitUntilSruFinish], t), m(e);
                                                                  }
                                                              };
                                                          if (l && i.uploader) i.uploader?.uploadExternalMedia(l.sourceUrl, l.mediaType, l.mediaCategory, { success: g, progress: f, error: S, mediaItem: i });
                                                          else if (i.uploader) {
                                                              const { extraInitParams: e = "", preUpload: a = !1 } = n,
                                                                  { enable_1080p_variant: o, mediaFile: d, mediaFileHash: l } = i,
                                                                  u = t.isTrue("media_async_upload_longer_video_resolution_selector"),
                                                                  c = d && d.size > 1e8 && t.isTrue("rweb_media_multi_requests_enabled"),
                                                                  m = ge(i, r, { featureSwitches: t, userClaims: s }),
                                                                  _ = m ? `&media_category=${m}` : "";
                                                              p?.reportOperationStart(y.BX.SruUpload), i.uploader?.upload({ success: g, progress: f, pause: h, error: S, extraInitParams: e + _, extraFinalizeParams: l ? `&original_md5=${l}` : void 0, trimRanges: pe(i), pauseBeforeFinalize: a, withMultiRequests: c, enable_1080p_variant: !u || o, mediaItem: i });
                                                          }
                                                      });
                                                  return a({ id: u, uploading: !0, uploadFailed: !1, uploadProgress: 0, uploadPromise: m }), m;
                                              })({ mediaItem: e, updateMediaItem: s, uploadMediaItem: d, gifAsStaticImage: r, uploadOptions: t, featureSwitches: a, userClaims: o })
                                            : Promise.reject(new Error("Media has no uploader. Did you forget to call resizeMedia?")))
                            );
                        }
                        const l = n.map((e) => d(e));
                        return Promise.all(l).catch((e) => {
                            throw (e.type || (e.type = N), e);
                        });
                    },
                me = (e, t) => {
                    const r = ce(e, { ...t, preUpload: !0 });
                    return (...e) =>
                        r(...e).catch((e) => {
                            if (e.code !== _.d.CANCELED) throw e;
                        });
                };
            function _e(e, t, r, i) {
                const a = e === w.vC.Tweet || e === w.vC.TwitterArticle,
                    o = e === w.vC.TwitterArticle;
                if (t.isSubtitles) return w.xz.Subtitles;
                if (t.isGif && !r) return a ? w.xz.TweetGif : w.xz.DMGif;
                if (t.isAmplify) return w.xz.AmplifyVideo;
                if (t.isVideo) {
                    const e = t.duration || 0,
                        { featureSwitches: r, userClaims: n } = i,
                        s = (0, w.SB)({ featureSwitches: r, userClaims: n }),
                        d = r.getNumberValue("media_async_upload_amplify_duration_threshold", w.y$.Duration[s]);
                    return "number" == typeof s && 1 === s && e > d ? w.xz.AmplifyVideo : o ? w.xz.TweetVideo : a ? w.xz.AmplifyVideo : w.xz.DMVideo;
                }
                return a ? w.xz.TweetImage : w.xz.DMImage;
            }
            function ge(e, t, r) {
                const { location: i, mediaFile: a } = e;
                if (!i || !a) return null;
                switch (i) {
                    case w.vC.Tweet:
                    case w.vC.Dm:
                    case w.vC.TwitterArticle:
                        return _e(i, a, t, r);
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
            const fe = (e, t, r, i, a, o) => {
                a?.reportOperationStart(y.BX.Hash, !0),
                    a?.setMetadata({ hashState: y.Xj.InProgress }),
                    (0, c.Q)(i, o)
                        .then((i) => {
                            const [o] = Z(t(), r);
                            if (!o) {
                                throw new X("Media item was removed", { code: c.S.HASHING_ABORTED, type: N, isGif: !1, isImage: !0, isVideo: !1 });
                            }
                            e(re({ id: r, mediaFileHash: i, abortController: void 0 }));
                            const { uploadPromise: n, uploader: s, uploading: d } = o;
                            n && d && s && s.amendUpload({ extraFinalizeParams: i ? `&original_md5=${i}` : void 0 }), a?.setMetadata({ hashState: y.Xj.Complete }), a?.reportOperationComplete(y.BX.Hash, y.Uk.Success);
                        })
                        .catch((i) => {
                            const [o] = Z(t(), r);
                            o && e(re({ id: r, mediaFileHash: null, abortController: void 0 })), i.code === c.S.HASHING_ABORTED ? (a?.setMetadata({ hashState: y.Xj.Canceled }), a?.reportOperationComplete(y.BX.Hash, y.Uk.Cancel)) : (a?.setMetadata({ hashState: y.Xj.Failure }), a?.reportOperationComplete(y.BX.Hash, y.Uk.Failure));
                        });
            };
            A.Z.register({
                [O]: function (e = B, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case H:
                            return t.payload ? e.concat(t.payload) : e;
                        case Q: {
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
        653798: (e, t, r) => {
            r.d(t, { S: () => a });
            var i = r(326439);
            r(585488);
            const a = i.Z;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.directMessagesData-63cb1cc4.a5f4689a.js.map

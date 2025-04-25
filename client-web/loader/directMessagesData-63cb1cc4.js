"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.directMessagesData-63cb1cc4"],
    {
        537052: (e, t, i) => {
            i.d(t, { Hf: () => n, OA: () => a, mL: () => o });
            i(571372);
            var r = i(837880);
            function a(e, t) {
                const i = (0, r.Z)(t / 100, 0, 1),
                    a = s[e],
                    o = i * (a.max - a.min);
                return l(a.min + o, 3);
            }
            function o(e) {
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
            const n = Object.freeze({ uploading: "uploading", processing: "processing" }),
                s = { [n.uploading]: { name: n.uploading, min: 0, max: 0.5 }, [n.processing]: { name: n.processing, min: 0.5, max: 1 } },
                d = [s.uploading, s.processing];
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
            i.d(t, { EM: () => p, K3: () => u, Xp: () => c });
            var r = i(882127),
                a = i(498510),
                o = (i(585488), i(277660)),
                n = i.n(o),
                s = i(708482),
                d = i(944681),
                l = i(535338);
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
                            const { day: t, month: i, year: r } = e;
                            return (0, d.k)(r, i, t, !0);
                        }
                    }
                    return !0;
                })(n()(f, e));
            }
            function m(e) {
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
            const _ = a.Z,
                f = r.Z;
        },
        497294: (e, t, i) => {
            i.d(t, { $i: () => me, C4: () => q, G$: () => Q, Q6: () => J, TU: () => K, WU: () => ee, _B: () => oe, _J: () => re, _T: () => H, dD: () => ae, gz: () => Z, m3: () => G, o6: () => de, oZ: () => _e, pJ: () => pe, rA: () => $ });
            i(571372), i(136728);
            var r = i(99107),
                a = i(411916),
                o = i.n(a),
                n = i(10622),
                s = i.n(n),
                d = i(674132),
                l = i.n(d),
                u = i(205074),
                p = i(653843),
                c = i(514354),
                m = i(908478),
                _ = i(417144),
                f = i(904940),
                g = i(918621),
                h = i(829053),
                w = i(716233),
                S = i(166677),
                y = i(221562),
                I = i(755296),
                P = i(135698),
                v = i(946208),
                b = i(540387),
                A = i(653798),
                x = i(499627),
                M = i(917799),
                E = i(390387),
                C = i(38562),
                U = i(601576),
                F = i(111531),
                T = i(537052);
            const O = l().g40ff2b4,
                D = "mediaUpload",
                B = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload2.json",
                z = `rweb/${D}`,
                N = [],
                X = "upload";
            class V extends Error {
                constructor(e, { code: t, isGif: i, isImage: r, isVideo: a, type: o }) {
                    super(e), (this.code = t), (this.type = o), (this.isGif = !!i), (this.isImage = !!r), (this.isVideo = !!a);
                }
            }
            function L(e, t, i) {
                let a = null,
                    o = {},
                    n = {};
                if ((t.getNumberValue("optimized_sru_parameters_enabled") && (n = { sruParameterOverrides: { minSegmentBytes: t.getNumberValue("optimized_sru_parameters_min_segment_bytes"), idealUploadTimeMs: t.getNumberValue("optimized_sru_parameters_ideal_upload_time_ms"), maxSegmentBytes: t.getNumberValue("optimized_sru_parameters_max_segment_bytes"), clientsideSruUploadTimeoutMs: t.getNumberValue("optimized_sru_parameters_client_side_timeout_ms") } }), (0, I.s)().isLoggedIn)) {
                    const e = (0, g.ej)({ cookieName: r.qj, featureSwitches: t });
                    if (e) {
                        const t = i?.actAsUserId;
                        n.sruHeaders = { ...(0, h.L)(t), "x-twitter-auth-type": "OAuth2Session", authorization: (0, r.Oj)(!1), [r.d4]: e };
                    }
                }
                return (
                    i?.useLongVideoEndpoint && (n.uploadUrl = B),
                    {
                        upload(t) {
                            (a = new _.Z(e, n)), (o = t), a.upload(o);
                        },
                        amendUpload(e) {
                            (o = { ...o, ...e }), a && a.upload(o);
                        },
                        uploadExternalMedia(t, i, r, o) {
                            (a = new _.Z(e, n)), a.uploadExternalMedia(t, i, r, o);
                        },
                        cancel() {
                            a && a.cancel();
                        },
                    }
                );
            }
            const Z = (e) => e[D],
                G = (e, t) => {
                    const i = Array.isArray(t) ? t : [t];
                    return e[D].filter((e) => i.some((t) => t === e.id));
                },
                H = (e, t) => {
                    const i = G(e, t);
                    if (!i.length) return 0;
                    const r = i.reduce((e, t) => e + (t.uploadProgress || 0), 0) / i.length;
                    return Math.min(r, 1);
                },
                j = "rweb/mediaUpload/ADD_MEDIA",
                k = (e) => ({ payload: e, type: j });
            let R = 1;
            function $(e, t) {
                return (i, r, { featureSwitches: a, relayEnvironment: o }) => {
                    const n = Array.from(e, (e) => {
                            if ((0, b.Wv)(e)) {
                                const i = new b.ZP(e, t.isAmplify);
                                if ((0, w.TO)(e)) {
                                    const e = a.isTrue("responsive_web_hevc_upload_preview_enabled") && a.isTrue("responsive_web_composer_configurable_video_player_enabled");
                                    return i.withDimensionsAndOrientation(e);
                                }
                                return Promise.resolve(i);
                            }
                            return (0, v.h_)(e) ? Promise.resolve(new v.ZP(e)) : new u.ZP(e).withDimensionsAndOrientation();
                        }),
                        d = i((e, t, { relayEnvironment: i }) =>
                            s()(i, A.S, {}, { fetchPolicy: "store-or-network" })
                                .toPromise()
                                .then((e) => {
                                    const t = e?.viewer?.user_results?.result;
                                    return "User" === t?.__typename && (t?.sensitive_media_settings?.can_user_allow_sensitive_content ?? !1);
                                })
                                .catch(() => !1),
                        ).then((e) => e && (0, F.K3)(o));
                    return Promise.all(n)
                        .then(
                            (e) => {
                                const r = i(
                                    (function (e, t) {
                                        return (i, r, { featureSwitches: a, userClaims: o }) => {
                                            const { uploadIds: n = [], altTexts: s = [] } = t,
                                                d = (0, C.IX)(r()),
                                                l = (Array.isArray(e) ? e : [e]).map((e, l) => {
                                                    const c = a.isTrue("responsive_web_media_upload_metrics_enabled");
                                                    let m;
                                                    t.location && (m = fe(t.location, e, !1, { featureSwitches: a, userClaims: o }));
                                                    const _ = e instanceof b.ZP ? e.duration : void 0,
                                                        f = e instanceof u.ZP ? e.orientation : void 0,
                                                        g = c && m ? new y.ZP({ isExternal: !1, mediaCategory: m, videoDuration: _ }, d) : void 0,
                                                        h = a.isTrue("responsive_web_media_upload_md5_hashing_enabled") && e.isImage && e instanceof u.ZP,
                                                        S = a.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte");
                                                    return (
                                                        e instanceof b.ZP &&
                                                            (function (e) {
                                                                const { video: t } = e;
                                                                t &&
                                                                    ((t.currentTime = Math.min(0.1, t.duration)),
                                                                    t.addEventListener("timeupdate", () => {
                                                                        const i = document.createElement("canvas"),
                                                                            { height: r, width: a } = e;
                                                                        (i.width = a), (i.height = r);
                                                                        i.getContext("2d").drawImage(t, 0, 0, a, r), (e.thumbnail = i.toDataURL("image/png"));
                                                                    }));
                                                            })(e),
                                                        g?.setFileMetadata({ fileSize: e.size, mime: e.type, duration: _, width: e.width, height: e.height, orientation: f }),
                                                        (0, w.vn)(a, o, e, t, d).then(({ maxDimension: d, maxFileSize: c }) => {
                                                            const m = e.isImage && e instanceof u.ZP && (0, p.m2)(e, { maxFileSize: c, maxDimension: d, jpgPixelsPerByteForResize: S }),
                                                                _ = (0, w.SB)({ featureSwitches: a, userClaims: o }),
                                                                f = { useLongVideoEndpoint: e.isVideo && _ >= 1, actAsUserId: (0, E.dY)(r()) },
                                                                y = m ? void 0 : L(e.fileHandle, a, f),
                                                                I = Y({ originalMediaFile: e, mediaFile: e, mediaFileHash: h ? void 0 : null, needsProcessing: m, location: t.location, uploadId: n[l] ?? "", reporter: g, uploader: y, mediaMetadata: { altText: s[l] }, abortController: h ? new AbortController() : void 0 });
                                                            return h && he(i, r, I.id, e.fileHandle, I.reporter, I.abortController), I;
                                                        })
                                                    );
                                                });
                                            return Promise.all(l).then((e) => (i(k(e)), e));
                                        };
                                    })(e, t),
                                );
                                return r;
                            },
                            (e) => {
                                const t = (0, S.vK)(e);
                                return t && i((0, U.fz)(t)), Promise.reject(e);
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
            const J =
                ({ height: e, mediaCategory: t, mediaType: i, previewMediaType: r, previewUrl: a, sourceUrl: o, stillMediaUrl: n, width: s }) =>
                (d, l, { featureSwitches: u }) => {
                    const p = u.isTrue("responsive_web_media_upload_metrics_enabled") && t ? new y.ZP({ isExternal: !0, mediaCategory: t }) : void 0;
                    p?.reportOperationStart(y.BX.Full, !0);
                    const c = { actAsUserId: (0, E.dY)(l()) },
                        m = Y({ externalMediaDetails: { mediaCategory: t, mediaType: i, previewUrl: a || o, previewMediaType: r || i, sourceUrl: o, stillMediaUrl: n, width: s, height: e }, reporter: p, uploader: L(null, u, c) });
                    return d(k(m)), p?.toggleOperationPaused(y.BX.Full, !0), [m];
                };
            function Y(e) {
                const t = { ...e, id: R, uploadFailed: !1, uploading: !1, uploadProgress: 1, mediaMetadata: void 0 };
                return (R += 1), t.uploadId || ((t.uploadId = ""), (t.uploadProgress = 0)), t;
            }
            const q =
                    (e) =>
                    (t, i, { featureSwitches: r, userClaims: a }) => {
                        const [o] = G(i(), e);
                        if (!o) return Promise.reject(new Error("media item not found"));
                        const { abortController: n, cropData: s, id: d, location: l, mediaFile: c, needsProcessing: m, originalMediaFile: _ } = o;
                        if (!_) return Promise.reject(new Error("media item not found"));
                        const f = r.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte"),
                            g = (0, C.IX)(i()),
                            h = { location: l };
                        return (0, w.vn)(r, a, _, h, g).then((e) => {
                            const a = { cropData: s, jpgPixelsPerByteForResize: f, maxFileSize: e.maxFileSize, maxDimension: e.maxDimension },
                                l = e.maxFileSize || 0,
                                g = e.maxDuration || 0;
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
                                              const a = { actAsUserId: (0, E.dY)(i()) },
                                                  n = L(e.fileHandle, r, a),
                                                  s = t(re({ id: d, mediaFile: e, needsProcessing: !1, uploadPromise: void 0, uploadProgress: 0, uploading: !1, uploadId: void 0, uploader: n }));
                                              return (o.uploadId || o.uploading) && t(me([d])), s;
                                          })
                                    : Promise.resolve(o);
                            if (_.size > l) {
                                const e = Error("Exceeds size limit");
                                return ([e.type, e.code, e.limit] = ["maxsize", _.isGif ? w.BW.GIF_IS_TOO_LARGE : w.BW.VIDEO_IS_TOO_LARGE, l]), Promise.reject(e);
                            }
                            if (_.isVideo && _ instanceof b.ZP && _.duration > g) {
                                const e = Error("Exceeds duration limit");
                                return ([e.type, e.code, e.limit] = ["maxduration", w.ff.VIDEO_IS_TOO_LONG, g]), Promise.reject(e);
                            }
                            return Promise.resolve(o);
                        });
                    },
                Q = (e, t) => (i, r) => {
                    const { onFailure: a } = t,
                        n = [];
                    return new Promise((t, r) => {
                        const s = (e) => {
                            if (!e.length) return t(n);
                            const [r] = e;
                            o()(() => {
                                r.reporter?.reportOperationStart(y.BX.Full, !0),
                                    r.reporter?.reportOperationStart([y.BX.Processing, y.BX.Metadata]),
                                    r.reporter?.reportOperationComplete(y.BX.Metadata, y.Uk.Complete),
                                    i(q(r.id)).then(
                                        (t) => {
                                            n.push(t), t?.reporter?.reportOperationComplete(y.BX.Processing, y.Uk.Success), t?.reporter?.toggleOperationPaused(y.BX.Full, !0), s(e.slice(1));
                                        },
                                        (t) => {
                                            const o = (0, S.ZP)(t, O);
                                            o && i((0, U.fz)(o));
                                            const { code: n, message: d, name: l, type: u } = t;
                                            r.reporter?.setMetadata({ reason: { name: l, message: d, code: n } });
                                            const c = "maxsize" === u || "maxduration" === u || ("resize" === u && (n === p.Y7.FILE_IS_NOT_AN_IMAGE || n === p.Y7.GIF_IS_TOO_LARGE)) ? y.Uk.Invalid : y.Uk.Failure;
                                            r.reporter?.reportOperationComplete([y.BX.Full, y.BX.Processing], c), a && a(r.id), s(e.slice(1));
                                        },
                                    );
                            });
                        };
                        s(e);
                    });
                },
                W = "rweb/mediaUpload/REMOVE_MEDIA",
                K = (e) => ({ payload: Array.isArray(e) ? e : [e], type: W });
            function ee(e) {
                return (t, i) => {
                    G(i(), e).forEach((e) => {
                        const { abortController: t, mediaFile: i, originalMediaFile: r, reporter: a, uploader: o } = e;
                        t?.abort(), o && o.cancel && o.cancel(), a?.reportOperationComplete(y.BX.Full, y.Uk.Cancel), i && i.dispose(), r && r.dispose();
                    }),
                        t(K(e));
                };
            }
            const te = "rweb/mediaUpload/UPDATE_MEDIA",
                ie = (e) => ({ payload: e, type: te });
            function re(e) {
                return (t, i) => {
                    t(ie(e));
                    const [r] = G(i(), e.id);
                    return r;
                };
            }
            function ae(e) {
                return (t, i) => {
                    const [r] = G(i(), e);
                    r.uploader?.cancel(), t(me(e));
                };
            }
            function oe(e, t) {
                return (i) => i(re({ id: e, mediaMetadata: t }));
            }
            const ne = "SEND_METADATA",
                se = M.dg(z, ne);
            function de(e) {
                return (t, i, { api: r }) => M._O(t, { params: e, request: r.withEndpoint(f.Z).metadataCreate })({ actionTypes: se, context: ne });
            }
            const le = "ATTACH_SUBTITLES",
                ue = M.dg(z, le);
            function pe(e) {
                return (t, i, r) => {
                    const { subtitlesDisplayName: a, subtitlesLang: o, subtitlesMediaUploadId: n, videoMediaUploadId: s } = e,
                        { api: d, featureSwitches: l, userClaims: u } = r,
                        p = ge(e.mediaItem, !1, { featureSwitches: l, userClaims: u }) || "";
                    return M._O(t, { params: { videoMediaUploadId: s, videoMediaCategory: p, subtitlesLang: o, subtitlesMediaUploadId: n, subtitlesDisplayName: a }, request: d.withEndpoint(f.Z).attachSubtitles })({ actionTypes: ue, context: le });
                };
            }
            const ce = (e) => {
                const t = e.trimData;
                if (t) return `${t.startTime.toFixed(3)}-${t.endTime.toFixed(3)}`;
            };
            const me =
                    (e, t = Object.freeze({})) =>
                    (i, r, { featureSwitches: a, userClaims: o }) => {
                        const n = G(r(), e),
                            s = (e) => i(re(e));
                        function d(e, i = !1) {
                            const r = a.isTrue("responsive_web_media_upload_md5_hashing_enabled"),
                                { abortController: n, id: l, mediaFile: p, mediaFileHash: c, reporter: m, uploader: f } = e,
                                g = r && p && p.isImage && p instanceof u.ZP,
                                h = void 0 === c;
                            return (
                                m?.toggleOperationPaused(y.BX.Full, !1),
                                t.withoutReUpload && e.uploadId
                                    ? Promise.resolve(s({ id: l, uploadProgress: 1, uploading: !1 }))
                                    : (t.preUpload || (m?.reportOperationStart(y.BX.UploadSubmitUntilSruFinish), m?.reportUploadSubmit(), g && h && n?.abort(), e.uploading && f && f.amendUpload({ pauseBeforeFinalize: !1, trimRanges: ce(e) })),
                                      e.uploadPromise
                                          ? e.uploadPromise.then((t) => ({ ...t, mediaMetadata: e.mediaMetadata }))
                                          : f
                                            ? (function (e) {
                                                  const { featureSwitches: t, gifAsStaticImage: i, mediaItem: r, updateMediaItem: a, uploadMediaItem: o, uploadOptions: n, userClaims: s } = e,
                                                      { abortController: d, externalMediaDetails: l, id: u, reporter: p, uploader: c } = r,
                                                      m = new Promise((e, m) => {
                                                          const f = (t) => {
                                                                  p?.setMetadata({ mediaId: t }), p?.reportOperationComplete([y.BX.Full, y.BX.UploadSubmitUntilSruFinish], y.Uk.Success), e(a({ id: u, uploadId: t, uploadProgress: 1, uploading: !1 }));
                                                              },
                                                              g = (e, t, i) => {
                                                                  p?.setMetadata({ mediaId: i }), "uploading" === t ? (a({ id: u, uploadProgress: T.OA("uploading", e) }), 100 === e && p?.reportOperationComplete(y.BX.SruUpload, y.Uk.Success)) : "processing" === t && a({ id: u, uploadProgress: T.OA("processing", e) });
                                                              },
                                                              h = () => {
                                                                  p?.toggleOperationPaused(y.BX.Full, !0);
                                                              },
                                                              S = (t) => {
                                                                  const { code: n, detail_message: s, maxSizeBytes: l, message: f, name: g } = t;
                                                                  if (r.mediaFile?.isGif && !i && n === w.Tz.INVALID_MEDIA_CODE) c?.amendUpload({ pauseBeforeFinalize: !1 }), a({ id: u, uploadProgress: 0, uploading: !1, uploadFailed: !1, uploadPromise: void 0 }), o(r, !0).then(e).catch(m);
                                                                  else {
                                                                      d?.abort(), a({ id: u, uploadProgress: 0, uploading: !1, uploadFailed: !0, uploadError: { code: n, message: f, detail_message: s, maxSizeBytes: l }, uploadPromise: void 0 });
                                                                      const e = new V(f ? `${f}` : `Media upload failed [Error code: ${n}]`, { code: n, type: X, isGif: !!r.externalMediaDetails || (r.mediaFile && r.mediaFile.isGif), isImage: r.mediaFile && r.mediaFile.isImage, isVideo: r.mediaFile && r.mediaFile instanceof b.ZP && r.mediaFile.isVideo }),
                                                                          t = n === _.d.CANCELED ? y.Uk.Cancel : y.Uk.Failure;
                                                                      p?.setMetadata({ reason: { name: g, message: f, code: n } }), p?.reportOperationComplete([y.BX.Full, y.BX.SruUpload, y.BX.UploadSubmitUntilSruFinish], t), m(e);
                                                                  }
                                                              };
                                                          if (l && r.uploader) r.uploader?.uploadExternalMedia(l.sourceUrl, l.mediaType, l.mediaCategory, { success: f, progress: g, error: S, mediaItem: r });
                                                          else if (r.uploader) {
                                                              const { extraInitParams: e = "", preUpload: a = !1 } = n,
                                                                  { enable_1080p_variant: o, mediaFile: d, mediaFileHash: l } = r,
                                                                  u = t.isTrue("media_async_upload_longer_video_resolution_selector"),
                                                                  c = d && d.size > 1e8 && t.isTrue("rweb_media_multi_requests_enabled"),
                                                                  m = ge(r, i, { featureSwitches: t, userClaims: s }),
                                                                  _ = m ? `&media_category=${m}` : "";
                                                              p?.reportOperationStart(y.BX.SruUpload), r.uploader?.upload({ success: f, progress: g, pause: h, error: S, extraInitParams: e + _, extraFinalizeParams: l ? `&original_md5=${l}` : void 0, trimRanges: ce(r), pauseBeforeFinalize: a, withMultiRequests: c, enable_1080p_variant: !u || o, mediaItem: r });
                                                          }
                                                      });
                                                  return (
                                                      a({ id: u, uploading: !0, uploadFailed: !1, uploadProgress: 0, uploadPromise: m }),
                                                      r.mediaFile?.fileHandle instanceof Blob &&
                                                          (0, P.c)(r.mediaFile.fileHandle).then((e) => {
                                                              a({ id: u, muxedMetadata: { hasMoov: e } });
                                                          }),
                                                      m
                                                  );
                                              })({ mediaItem: e, updateMediaItem: s, uploadMediaItem: d, gifAsStaticImage: i, uploadOptions: t, featureSwitches: a, userClaims: o })
                                            : Promise.reject(new Error("Media has no uploader. Did you forget to call resizeMedia?")))
                            );
                        }
                        const l = n.map((e) => d(e));
                        return Promise.all(l).catch((e) => {
                            throw (e.type || (e.type = X), e);
                        });
                    },
                _e = (e, t) => {
                    const i = me(e, { ...t, preUpload: !0 });
                    return (...e) =>
                        i(...e).catch((e) => {
                            if (e.code !== _.d.CANCELED) throw e;
                        });
                };
            function fe(e, t, i, r) {
                const a = e === w.vC.Tweet || e === w.vC.TwitterArticle,
                    o = e === w.vC.TwitterArticle;
                if (t.isSubtitles) return w.xz.Subtitles;
                if (t.isGif && !i) return a ? w.xz.TweetGif : w.xz.DMGif;
                if (t.isAmplify) return w.xz.AmplifyVideo;
                if (t.isVideo) {
                    const e = t.duration || 0,
                        { featureSwitches: i, userClaims: n } = r,
                        s = (0, w.SB)({ featureSwitches: i, userClaims: n }),
                        d = i.getNumberValue("media_async_upload_amplify_duration_threshold", w.y$.Duration[s]);
                    return "number" == typeof s && 1 === s && e > d ? w.xz.AmplifyVideo : o ? w.xz.TweetVideo : a ? w.xz.AmplifyVideo : w.xz.DMVideo;
                }
                return a ? w.xz.TweetImage : w.xz.DMImage;
            }
            function ge(e, t, i) {
                const { location: r, mediaFile: a } = e;
                if (!r || !a) return null;
                switch (r) {
                    case w.vC.Tweet:
                    case w.vC.Dm:
                    case w.vC.TwitterArticle:
                        return fe(r, a, t, i);
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
            const he = (e, t, i, r, a, o) => {
                a?.reportOperationStart(y.BX.Hash, !0),
                    a?.setMetadata({ hashState: y.Xj.InProgress }),
                    (0, c.Q)(r, o)
                        .then((r) => {
                            const [o] = G(t(), i);
                            if (!o) {
                                throw new V("Media item was removed", { code: c.S.HASHING_ABORTED, type: X, isGif: !1, isImage: !0, isVideo: !1 });
                            }
                            e(re({ id: i, mediaFileHash: r, abortController: void 0 }));
                            const { uploadPromise: n, uploader: s, uploading: d } = o;
                            n && d && s && s.amendUpload({ extraFinalizeParams: r ? `&original_md5=${r}` : void 0 }), a?.setMetadata({ hashState: y.Xj.Complete }), a?.reportOperationComplete(y.BX.Hash, y.Uk.Success);
                        })
                        .catch((r) => {
                            const [o] = G(t(), i);
                            o && e(re({ id: i, mediaFileHash: null, abortController: void 0 })), r.code === c.S.HASHING_ABORTED ? (a?.setMetadata({ hashState: y.Xj.Canceled }), a?.reportOperationComplete(y.BX.Hash, y.Uk.Cancel)) : (a?.setMetadata({ hashState: y.Xj.Failure }), a?.reportOperationComplete(y.BX.Hash, y.Uk.Failure));
                        });
            };
            x.Z.register({
                [D]: function (e = N, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case j:
                            return t.payload ? e.concat(t.payload) : e;
                        case W: {
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
        653798: (e, t, i) => {
            i.d(t, { S: () => a });
            var r = i(326439);
            i(585488);
            const a = r.Z;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.directMessagesData-63cb1cc4.725be92a.js.map

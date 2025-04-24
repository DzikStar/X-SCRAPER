"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"],
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
            i.d(t, { EM: () => c, K3: () => u, Xp: () => p });
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
            function c() {
                return m((0, l.p)(_, {}));
            }
            function p(e) {
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
                })(n()(g, e));
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
                g = r.Z;
        },
        497294: (e, t, i) => {
            i.d(t, { $i: () => me, C4: () => q, G$: () => Q, Q6: () => J, TU: () => K, WU: () => ee, _B: () => oe, _J: () => re, _T: () => G, dD: () => ae, gz: () => V, m3: () => k, o6: () => de, oZ: () => _e, pJ: () => ce, rA: () => $ });
            i(571372), i(136728);
            var r = i(99107),
                a = i(411916),
                o = i.n(a),
                n = i(10622),
                s = i.n(n),
                d = i(674132),
                l = i.n(d),
                u = i(205074),
                c = i(653843),
                p = i(514354),
                m = i(908478),
                _ = i(417144),
                g = i(904940),
                f = i(918621),
                h = i(829053),
                w = i(716233),
                y = i(166677),
                v = i(221562),
                b = i(755296),
                S = i(135698),
                I = i(946208),
                P = i(540387),
                E = i(653798),
                M = i(499627),
                x = i(917799),
                A = i(390387),
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
            class Z extends Error {
                constructor(e, { code: t, isGif: i, isImage: r, isVideo: a, type: o }) {
                    super(e), (this.code = t), (this.type = o), (this.isGif = !!i), (this.isImage = !!r), (this.isVideo = !!a);
                }
            }
            function L(e, t, i) {
                let a = null,
                    o = {},
                    n = {};
                if ((t.getNumberValue("optimized_sru_parameters_enabled") && (n = { sruParameterOverrides: { minSegmentBytes: t.getNumberValue("optimized_sru_parameters_min_segment_bytes"), idealUploadTimeMs: t.getNumberValue("optimized_sru_parameters_ideal_upload_time_ms"), maxSegmentBytes: t.getNumberValue("optimized_sru_parameters_max_segment_bytes"), clientsideSruUploadTimeoutMs: t.getNumberValue("optimized_sru_parameters_client_side_timeout_ms") } }), (0, b.s)().isLoggedIn)) {
                    const e = (0, f.ej)({ cookieName: r.qj, featureSwitches: t });
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
            const V = (e) => e[D],
                k = (e, t) => {
                    const i = Array.isArray(t) ? t : [t];
                    return e[D].filter((e) => i.some((t) => t === e.id));
                },
                G = (e, t) => {
                    const i = k(e, t);
                    if (!i.length) return 0;
                    const r = i.reduce((e, t) => e + (t.uploadProgress || 0), 0) / i.length;
                    return Math.min(r, 1);
                },
                H = "rweb/mediaUpload/ADD_MEDIA",
                R = (e) => ({ payload: e, type: H });
            let j = 1;
            function $(e, t) {
                return (i, r, { featureSwitches: a, relayEnvironment: o }) => {
                    const n = Array.from(e, (e) => {
                            if ((0, P.Wv)(e)) {
                                const i = new P.ZP(e, t.isAmplify);
                                if ((0, w.TO)(e)) {
                                    const e = a.isTrue("responsive_web_hevc_upload_preview_enabled") && a.isTrue("responsive_web_composer_configurable_video_player_enabled");
                                    return i.withDimensionsAndOrientation(e);
                                }
                                return Promise.resolve(i);
                            }
                            return (0, I.h_)(e) ? Promise.resolve(new I.ZP(e)) : new u.ZP(e).withDimensionsAndOrientation();
                        }),
                        d = i((e, t, { relayEnvironment: i }) =>
                            s()(i, E.S, {}, { fetchPolicy: "store-or-network" })
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
                                                    const p = a.isTrue("responsive_web_media_upload_metrics_enabled");
                                                    let m;
                                                    t.location && (m = ge(t.location, e, !1, { featureSwitches: a, userClaims: o }));
                                                    const _ = e instanceof P.ZP ? e.duration : void 0,
                                                        g = e instanceof u.ZP ? e.orientation : void 0,
                                                        f = p && m ? new v.ZP({ isExternal: !1, mediaCategory: m, videoDuration: _ }, d) : void 0,
                                                        h = a.isTrue("responsive_web_media_upload_md5_hashing_enabled") && e.isImage && e instanceof u.ZP,
                                                        y = a.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte");
                                                    return (
                                                        e instanceof P.ZP &&
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
                                                        f?.setFileMetadata({ fileSize: e.size, mime: e.type, duration: _, width: e.width, height: e.height, orientation: g }),
                                                        (0, w.vn)(a, o, e, t, d).then(({ maxDimension: d, maxFileSize: p }) => {
                                                            const m = e.isImage && e instanceof u.ZP && (0, c.m2)(e, { maxFileSize: p, maxDimension: d, jpgPixelsPerByteForResize: y }),
                                                                _ = (0, w.SB)({ featureSwitches: a, userClaims: o }),
                                                                g = { useLongVideoEndpoint: e.isVideo && _ >= 1, actAsUserId: (0, A.dY)(r()) },
                                                                v = m ? void 0 : L(e.fileHandle, a, g),
                                                                b = Y({ originalMediaFile: e, mediaFile: e, mediaFileHash: h ? void 0 : null, needsProcessing: m, location: t.location, uploadId: n[l] ?? "", reporter: f, uploader: v, mediaMetadata: { altText: s[l] }, abortController: h ? new AbortController() : void 0 });
                                                            return h && he(i, r, b.id, e.fileHandle, b.reporter, b.abortController), b;
                                                        })
                                                    );
                                                });
                                            return Promise.all(l).then((e) => (i(R(e)), e));
                                        };
                                    })(e, t),
                                );
                                return r;
                            },
                            (e) => {
                                const t = (0, y.vK)(e);
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
                    const c = u.isTrue("responsive_web_media_upload_metrics_enabled") && t ? new v.ZP({ isExternal: !0, mediaCategory: t }) : void 0;
                    c?.reportOperationStart(v.BX.Full, !0);
                    const p = { actAsUserId: (0, A.dY)(l()) },
                        m = Y({ externalMediaDetails: { mediaCategory: t, mediaType: i, previewUrl: a || o, previewMediaType: r || i, sourceUrl: o, stillMediaUrl: n, width: s, height: e }, reporter: c, uploader: L(null, u, p) });
                    return d(R(m)), c?.toggleOperationPaused(v.BX.Full, !0), [m];
                };
            function Y(e) {
                const t = { ...e, id: j, uploadFailed: !1, uploading: !1, uploadProgress: 1, mediaMetadata: void 0 };
                return (j += 1), t.uploadId || ((t.uploadId = ""), (t.uploadProgress = 0)), t;
            }
            const q =
                    (e) =>
                    (t, i, { featureSwitches: r, userClaims: a }) => {
                        const [o] = k(i(), e);
                        if (!o) return Promise.reject(new Error("media item not found"));
                        const { abortController: n, cropData: s, id: d, location: l, mediaFile: p, needsProcessing: m, originalMediaFile: _ } = o;
                        if (!_) return Promise.reject(new Error("media item not found"));
                        const g = r.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte"),
                            f = (0, C.IX)(i()),
                            h = { location: l };
                        return (0, w.vn)(r, a, _, h, f).then((e) => {
                            const a = { cropData: s, jpgPixelsPerByteForResize: g, maxFileSize: e.maxFileSize, maxDimension: e.maxDimension },
                                l = e.maxFileSize || 0,
                                f = e.maxDuration || 0;
                            if (_.isImage && _ instanceof u.ZP)
                                return m
                                    ? (0, c.ZP)(_, a)
                                          .then(
                                              (e) => new u.ZP(e).withDimensionsAndOrientation(),
                                              (e) => {
                                                  throw (n?.abort(), (e.type = "resize"), e);
                                              },
                                          )
                                          .then((e) => {
                                              _ !== p && p && p.dispose(), o.uploader && o.uploader.cancel && o.uploader.cancel();
                                              const a = { actAsUserId: (0, A.dY)(i()) },
                                                  n = L(e.fileHandle, r, a),
                                                  s = t(re({ id: d, mediaFile: e, needsProcessing: !1, uploadPromise: void 0, uploadProgress: 0, uploading: !1, uploadId: void 0, uploader: n }));
                                              return (o.uploadId || o.uploading) && t(me([d])), s;
                                          })
                                    : Promise.resolve(o);
                            if (_.size > l) {
                                const e = Error("Exceeds size limit");
                                return ([e.type, e.code, e.limit] = ["maxsize", _.isGif ? w.BW.GIF_IS_TOO_LARGE : w.BW.VIDEO_IS_TOO_LARGE, l]), Promise.reject(e);
                            }
                            if (_.isVideo && _ instanceof P.ZP && _.duration > f) {
                                const e = Error("Exceeds duration limit");
                                return ([e.type, e.code, e.limit] = ["maxduration", w.ff.VIDEO_IS_TOO_LONG, f]), Promise.reject(e);
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
                                r.reporter?.reportOperationStart(v.BX.Full, !0),
                                    r.reporter?.reportOperationStart([v.BX.Processing, v.BX.Metadata]),
                                    r.reporter?.reportOperationComplete(v.BX.Metadata, v.Uk.Complete),
                                    i(q(r.id)).then(
                                        (t) => {
                                            n.push(t), t?.reporter?.reportOperationComplete(v.BX.Processing, v.Uk.Success), t?.reporter?.toggleOperationPaused(v.BX.Full, !0), s(e.slice(1));
                                        },
                                        (t) => {
                                            const o = (0, y.ZP)(t, O);
                                            o && i((0, U.fz)(o));
                                            const { code: n, message: d, name: l, type: u } = t;
                                            r.reporter?.setMetadata({ reason: { name: l, message: d, code: n } });
                                            const p = "maxsize" === u || "maxduration" === u || ("resize" === u && (n === c.Y7.FILE_IS_NOT_AN_IMAGE || n === c.Y7.GIF_IS_TOO_LARGE)) ? v.Uk.Invalid : v.Uk.Failure;
                                            r.reporter?.reportOperationComplete([v.BX.Full, v.BX.Processing], p), a && a(r.id), s(e.slice(1));
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
                    k(i(), e).forEach((e) => {
                        const { abortController: t, mediaFile: i, originalMediaFile: r, reporter: a, uploader: o } = e;
                        t?.abort(), o && o.cancel && o.cancel(), a?.reportOperationComplete(v.BX.Full, v.Uk.Cancel), i && i.dispose(), r && r.dispose();
                    }),
                        t(K(e));
                };
            }
            const te = "rweb/mediaUpload/UPDATE_MEDIA",
                ie = (e) => ({ payload: e, type: te });
            function re(e) {
                return (t, i) => {
                    t(ie(e));
                    const [r] = k(i(), e.id);
                    return r;
                };
            }
            function ae(e) {
                return (t, i) => {
                    const [r] = k(i(), e);
                    r.uploader?.cancel(), t(me(e));
                };
            }
            function oe(e, t) {
                return (i) => i(re({ id: e, mediaMetadata: t }));
            }
            const ne = "SEND_METADATA",
                se = x.dg(z, ne);
            function de(e) {
                return (t, i, { api: r }) => x._O(t, { params: e, request: r.withEndpoint(g.Z).metadataCreate })({ actionTypes: se, context: ne });
            }
            const le = "ATTACH_SUBTITLES",
                ue = x.dg(z, le);
            function ce(e) {
                return (t, i, r) => {
                    const { subtitlesDisplayName: a, subtitlesLang: o, subtitlesMediaUploadId: n, videoMediaUploadId: s } = e,
                        { api: d, featureSwitches: l, userClaims: u } = r,
                        c = fe(e.mediaItem, !1, { featureSwitches: l, userClaims: u }) || "";
                    return x._O(t, { params: { videoMediaUploadId: s, videoMediaCategory: c, subtitlesLang: o, subtitlesMediaUploadId: n, subtitlesDisplayName: a }, request: d.withEndpoint(g.Z).attachSubtitles })({ actionTypes: ue, context: le });
                };
            }
            const pe = (e) => {
                const t = e.trimData;
                if (t) return `${t.startTime.toFixed(3)}-${t.endTime.toFixed(3)}`;
            };
            const me =
                    (e, t = Object.freeze({})) =>
                    (i, r, { featureSwitches: a, userClaims: o }) => {
                        const n = k(r(), e),
                            s = (e) => i(re(e));
                        function d(e, i = !1) {
                            const r = a.isTrue("responsive_web_media_upload_md5_hashing_enabled"),
                                { abortController: n, id: l, mediaFile: c, mediaFileHash: p, reporter: m, uploader: g } = e,
                                f = r && c && c.isImage && c instanceof u.ZP,
                                h = void 0 === p;
                            return (
                                m?.toggleOperationPaused(v.BX.Full, !1),
                                t.withoutReUpload && e.uploadId
                                    ? Promise.resolve(s({ id: l, uploadProgress: 1, uploading: !1 }))
                                    : (t.preUpload || (m?.reportOperationStart(v.BX.UploadSubmitUntilSruFinish), m?.reportUploadSubmit(), f && h && n?.abort(), e.uploading && g && g.amendUpload({ pauseBeforeFinalize: !1, trimRanges: pe(e) })),
                                      e.uploadPromise
                                          ? e.uploadPromise.then((t) => ({ ...t, mediaMetadata: e.mediaMetadata }))
                                          : g
                                            ? (function (e) {
                                                  const { featureSwitches: t, gifAsStaticImage: i, mediaItem: r, updateMediaItem: a, uploadMediaItem: o, uploadOptions: n, userClaims: s } = e,
                                                      { abortController: d, externalMediaDetails: l, id: u, reporter: c, uploader: p } = r,
                                                      m = new Promise((e, m) => {
                                                          const g = (t) => {
                                                                  c?.setMetadata({ mediaId: t }), c?.reportOperationComplete([v.BX.Full, v.BX.UploadSubmitUntilSruFinish], v.Uk.Success), e(a({ id: u, uploadId: t, uploadProgress: 1, uploading: !1 }));
                                                              },
                                                              f = (e, t, i) => {
                                                                  c?.setMetadata({ mediaId: i }), "uploading" === t ? (a({ id: u, uploadProgress: T.OA("uploading", e) }), 100 === e && c?.reportOperationComplete(v.BX.SruUpload, v.Uk.Success)) : "processing" === t && a({ id: u, uploadProgress: T.OA("processing", e) });
                                                              },
                                                              h = () => {
                                                                  c?.toggleOperationPaused(v.BX.Full, !0);
                                                              },
                                                              y = (t) => {
                                                                  const { code: n, detail_message: s, maxSizeBytes: l, message: g, name: f } = t;
                                                                  if (r.mediaFile?.isGif && !i && n === w.Tz.INVALID_MEDIA_CODE) p?.amendUpload({ pauseBeforeFinalize: !1 }), a({ id: u, uploadProgress: 0, uploading: !1, uploadFailed: !1, uploadPromise: void 0 }), o(r, !0).then(e).catch(m);
                                                                  else {
                                                                      d?.abort(), a({ id: u, uploadProgress: 0, uploading: !1, uploadFailed: !0, uploadError: { code: n, message: g, detail_message: s, maxSizeBytes: l }, uploadPromise: void 0 });
                                                                      const e = new Z(g ? `${g}` : `Media upload failed [Error code: ${n}]`, { code: n, type: X, isGif: !!r.externalMediaDetails || (r.mediaFile && r.mediaFile.isGif), isImage: r.mediaFile && r.mediaFile.isImage, isVideo: r.mediaFile && r.mediaFile instanceof P.ZP && r.mediaFile.isVideo }),
                                                                          t = n === _.d.CANCELED ? v.Uk.Cancel : v.Uk.Failure;
                                                                      c?.setMetadata({ reason: { name: f, message: g, code: n } }), c?.reportOperationComplete([v.BX.Full, v.BX.SruUpload, v.BX.UploadSubmitUntilSruFinish], t), m(e);
                                                                  }
                                                              };
                                                          if (l && r.uploader) r.uploader?.uploadExternalMedia(l.sourceUrl, l.mediaType, l.mediaCategory, { success: g, progress: f, error: y, mediaItem: r });
                                                          else if (r.uploader) {
                                                              const { extraInitParams: e = "", preUpload: a = !1 } = n,
                                                                  { enable_1080p_variant: o, mediaFile: d, mediaFileHash: l } = r,
                                                                  u = t.isTrue("media_async_upload_longer_video_resolution_selector"),
                                                                  p = d && d.size > 1e8 && t.isTrue("rweb_media_multi_requests_enabled"),
                                                                  m = fe(r, i, { featureSwitches: t, userClaims: s }),
                                                                  _ = m ? `&media_category=${m}` : "";
                                                              c?.reportOperationStart(v.BX.SruUpload), r.uploader?.upload({ success: g, progress: f, pause: h, error: y, extraInitParams: e + _, extraFinalizeParams: l ? `&original_md5=${l}` : void 0, trimRanges: pe(r), pauseBeforeFinalize: a, withMultiRequests: p, enable_1080p_variant: !u || o, mediaItem: r });
                                                          }
                                                      });
                                                  return (
                                                      a({ id: u, uploading: !0, uploadFailed: !1, uploadProgress: 0, uploadPromise: m }),
                                                      r.mediaFile?.fileHandle instanceof Blob &&
                                                          (0, S.c)(r.mediaFile.fileHandle).then((e) => {
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
            function ge(e, t, i, r) {
                const a = e === w.vC.Tweet || e === w.vC.TwitterArticle;
                if (t.isSubtitles) return w.xz.Subtitles;
                if (t.isGif && !i) return a ? w.xz.TweetGif : w.xz.DMGif;
                if (t.isAmplify) return w.xz.AmplifyVideo;
                if (t.isVideo) {
                    const e = t.duration || 0,
                        { featureSwitches: i, userClaims: o } = r,
                        n = (0, w.SB)({ featureSwitches: i, userClaims: o }),
                        s = i.getNumberValue("media_async_upload_amplify_duration_threshold", w.y$.Duration[n]);
                    return ("number" == typeof n && 1 === n && e > s) || a ? w.xz.AmplifyVideo : w.xz.DMVideo;
                }
                return a ? w.xz.TweetImage : w.xz.DMImage;
            }
            function fe(e, t, i) {
                const { location: r, mediaFile: a } = e;
                if (!r || !a) return null;
                switch (r) {
                    case w.vC.Tweet:
                    case w.vC.Dm:
                    case w.vC.TwitterArticle:
                        return ge(r, a, t, i);
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
                a?.reportOperationStart(v.BX.Hash, !0),
                    a?.setMetadata({ hashState: v.Xj.InProgress }),
                    (0, p.Q)(r, o)
                        .then((r) => {
                            const [o] = k(t(), i);
                            if (!o) {
                                throw new Z("Media item was removed", { code: p.S.HASHING_ABORTED, type: X, isGif: !1, isImage: !0, isVideo: !1 });
                            }
                            e(re({ id: i, mediaFileHash: r, abortController: void 0 }));
                            const { uploadPromise: n, uploader: s, uploading: d } = o;
                            n && d && s && s.amendUpload({ extraFinalizeParams: r ? `&original_md5=${r}` : void 0 }), a?.setMetadata({ hashState: v.Xj.Complete }), a?.reportOperationComplete(v.BX.Hash, v.Uk.Success);
                        })
                        .catch((r) => {
                            const [o] = k(t(), i);
                            o && e(re({ id: i, mediaFileHash: null, abortController: void 0 })), r.code === p.S.HASHING_ABORTED ? (a?.setMetadata({ hashState: v.Xj.Canceled }), a?.reportOperationComplete(v.BX.Hash, v.Uk.Cancel)) : (a?.setMetadata({ hashState: v.Xj.Failure }), a?.reportOperationComplete(v.BX.Hash, v.Uk.Failure));
                        });
            };
            M.Z.register({
                [D]: function (e = N, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case H:
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
        624479: (e, t, i) => {
            i.d(t, { ZP: () => m, cY: () => p, vj: () => s });
            i(136728), i(202784);
            var r = i(787210),
                a = (i(827922), i(905710)),
                o = i(502909),
                n = i(600823);
            const s = 30,
                d = (0, o.ZP)({ namespace: "userPresence", entityIsComplete: (e) => e.expiry > Date.now() }),
                l = (0, o.tb)(d, { context: "FETCH_USER_PRESENCE", endpoint: (e) => e.withEndpoint(r.Z).fetchPresence, params: (e) => ({ userIds: e, only_spaces: !1 }) }),
                u = (0, o.Nr)(d, { context: "FETCH_USER_PRESENCE", endpoint: (e) => e.withEndpoint(r.Z).fetchPresence, params: (e) => ({ userIds: e, only_spaces: !0 }) }),
                c = { ...d, ...l, ...u },
                p = (e, t) => {
                    const i = c.select(e, t),
                        r = i ? i.spaces : void 0;
                    return r?.live_content.livevideo ? { presenceRingType: "livevideo", link: { pathname: (0, a.s)(r.live_content.livevideo.id), state: { origin: "livevideo_ring" } }, spaceId: r.live_content.livevideo.id } : r && r.live_content.audiospace && { presenceRingType: "audiospace", link: { pathname: (0, a.e)(r.live_content.audiospace.broadcast_id), state: { origin: "audiospace_ring" } }, spaceId: r.live_content.audiospace.broadcast_id };
                };
            const m = n.Z.register(c);
        },
        162664: (e, t, i) => {
            i.d(t, { b: () => r });
            const r = (e) => {
                if (e) return { blocking: e.blocking, can_dm: e.can_dm, can_media_tag: e.can_media_tag, created_at: e.created_at, description: e.description, dm_blocked_by: e.dm_blocked_by, dm_blocking: e.dm_blocking, entities: e.entities, followed_by: e.followed_by, followers_count: e.followers_count, following: e.following, friends_count: e.friends_count, highlightedLabel: e.highlightedLabel, id_str: e.id_str, id: e.id, is_blue_verified: e.is_blue_verified, name: e.name, profile_image_url_https: e.profile_image_url_https, protected: e.protected, screen_name: e.screen_name, subscribed_by: e.subscribed_by, verified_type: e.verified_type, verified: e.verified };
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2.950c73aa.js.map

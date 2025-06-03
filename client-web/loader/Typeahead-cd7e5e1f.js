"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Typeahead-cd7e5e1f", "shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"],
    {
        537052: (e, t, r) => {
            r.d(t, { Hf: () => s, OA: () => a, mL: () => o });
            r(571372);
            var i = r(837880);
            function a(e, t) {
                const r = (0, i.Z)(t / 100, 0, 1),
                    a = n[e],
                    o = r * (a.max - a.min);
                return l(a.min + o, 3);
            }
            function o(e) {
                const t = (0, i.Z)(e, 0, 1);
                for (let e = 0; e < d.length; e++) {
                    const r = d[e];
                    if ((0 === e && t <= r.min) || (e === d.length - 1 && t >= r.max) || (t >= r.min && t < r.max)) {
                        let e = c(t, r.min, r.max);
                        return (e = l(e, 3)), [r.name, e];
                    }
                }
                throw new Error("unreachable");
            }
            const s = Object.freeze({ uploading: "uploading", processing: "processing" }),
                n = { [s.uploading]: { name: s.uploading, min: 0, max: 0.5 }, [s.processing]: { name: s.processing, min: 0.5, max: 1 } },
                d = [n.uploading, n.processing];
            function l(e, t) {
                const r = Math.pow(10, t);
                return Math.round(e * r) / r;
            }
            function c(e, t, r) {
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
            r.d(t, { EM: () => u, K3: () => c, Xp: () => p });
            var i = r(882127),
                a = r(498510),
                o = (r(585488), r(277660)),
                s = r.n(o),
                n = r(708482),
                d = r(944681),
                l = r(535338);
            function c(e) {
                return (function (e) {
                    return (0, n.s)(e, _, {});
                })(e).then(
                    (e) =>
                        !m(e) &&
                        (function (e) {
                            return e?.user_preferences.allow_video_downloads ?? !0;
                        })(e),
                );
            }
            function u() {
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
                })(s()(h, e));
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
                h = i.Z;
        },
        497294: (e, t, r) => {
            r.d(t, { $i: () => pe, C4: () => q, G$: () => Y, Q6: () => $, TU: () => W, WU: () => K, _B: () => ae, _J: () => re, _T: () => H, dD: () => ie, gz: () => N, m3: () => Z, o6: () => ne, oZ: () => me, pJ: () => ce, rA: () => j });
            r(571372), r(136728);
            var i = r(99107),
                a = r(411916),
                o = r.n(a),
                s = r(10622),
                n = r.n(s),
                d = r(111677),
                l = r.n(d),
                c = r(205074),
                u = r(653843),
                p = r(514354),
                m = r(908478),
                _ = r(417144),
                h = r(904940),
                f = r(918621),
                S = r(829053),
                g = r(716233),
                E = r(166677),
                w = r(221562),
                y = r(755296),
                v = r(946208),
                b = r(540387),
                A = r(653798),
                C = r(499627),
                P = r(917799),
                I = r(390387),
                U = r(38562),
                T = r(601576),
                x = r(111531),
                D = r(537052);
            const F = l().g40ff2b4,
                M = "mediaUpload",
                O = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload2.json",
                R = `rweb/${M}`,
                z = [],
                B = "upload";
            class L extends Error {
                constructor(e, { code: t, isGif: r, isImage: i, isVideo: a, type: o }) {
                    super(e), (this.code = t), (this.type = o), (this.isGif = !!r), (this.isImage = !!i), (this.isVideo = !!a);
                }
            }
            function V(e, t, r) {
                let a = null,
                    o = {},
                    s = {};
                if ((t.getNumberValue("optimized_sru_parameters_enabled") && (s = { sruParameterOverrides: { minSegmentBytes: t.getNumberValue("optimized_sru_parameters_min_segment_bytes"), idealUploadTimeMs: t.getNumberValue("optimized_sru_parameters_ideal_upload_time_ms"), maxSegmentBytes: t.getNumberValue("optimized_sru_parameters_max_segment_bytes"), clientsideSruUploadTimeoutMs: t.getNumberValue("optimized_sru_parameters_client_side_timeout_ms") } }), (0, y.s)().isLoggedIn)) {
                    const e = (0, f.ej)({ cookieName: i.qj, featureSwitches: t });
                    if (e) {
                        const t = r?.actAsUserId;
                        s.sruHeaders = { ...(0, S.L)(t), "x-twitter-auth-type": "OAuth2Session", authorization: (0, i.Oj)(!1), [i.d4]: e };
                    }
                }
                return (
                    r?.useLongVideoEndpoint && (s.uploadUrl = O),
                    {
                        upload(t) {
                            (a = new _.Z(e, s)), (o = t), a.upload(o);
                        },
                        amendUpload(e) {
                            (o = { ...o, ...e }), a && a.upload(o);
                        },
                        uploadExternalMedia(t, r, i, o) {
                            (a = new _.Z(e, s)), a.uploadExternalMedia(t, r, i, o);
                        },
                        cancel() {
                            a && a.cancel();
                        },
                    }
                );
            }
            const N = (e) => e[M],
                Z = (e, t) => {
                    const r = Array.isArray(t) ? t : [t];
                    return e[M].filter((e) => r.some((t) => t === e.id));
                },
                H = (e, t) => {
                    const r = Z(e, t);
                    if (!r.length) return 0;
                    const i = r.reduce((e, t) => e + (t.uploadProgress || 0), 0) / r.length;
                    return Math.min(i, 1);
                },
                k = "rweb/mediaUpload/ADD_MEDIA",
                X = (e) => ({ payload: e, type: k });
            let G = 1;
            function j(e, t) {
                return (r, i, { featureSwitches: a, relayEnvironment: o }) => {
                    const s = Array.from(e, (e) => {
                            if ((0, b.Wv)(e)) {
                                const r = new b.ZP(e, t.isAmplify);
                                if ((0, g.TO)(e)) {
                                    const e = a.isTrue("responsive_web_hevc_upload_preview_enabled") && a.isTrue("responsive_web_composer_configurable_video_player_enabled");
                                    return r.withDimensionsAndOrientation(e);
                                }
                                return Promise.resolve(r);
                            }
                            return (0, v.h_)(e) ? Promise.resolve(new v.ZP(e)) : new c.ZP(e).withDimensionsAndOrientation();
                        }),
                        d = r((e, t, { relayEnvironment: r }) =>
                            n()(r, A.S, {}, { fetchPolicy: "store-or-network" })
                                .toPromise()
                                .then((e) => {
                                    const t = e?.viewer?.user_results?.result;
                                    return "User" === t?.__typename && (t?.sensitive_media_settings?.can_user_allow_sensitive_content ?? !1);
                                })
                                .catch(() => !1),
                        ).then((e) => e && (0, x.K3)(o));
                    return Promise.all(s)
                        .then(
                            (e) => {
                                const i = r(
                                    (function (e, t) {
                                        return (r, i, { featureSwitches: a, userClaims: o }) => {
                                            const { uploadIds: s = [], altTexts: n = [] } = t,
                                                d = (0, U.IX)(i()),
                                                l = (Array.isArray(e) ? e : [e]).map((e, l) => {
                                                    const p = a.isTrue("responsive_web_media_upload_metrics_enabled");
                                                    let m;
                                                    t.location && (m = _e(t.location, e, !1, { featureSwitches: a, userClaims: o }));
                                                    const _ = e instanceof b.ZP ? e.duration : void 0,
                                                        h = e instanceof c.ZP ? e.orientation : void 0,
                                                        f = p && m ? new w.ZP({ isExternal: !1, mediaCategory: m, videoDuration: _ }, d) : void 0,
                                                        S = a.isTrue("responsive_web_media_upload_md5_hashing_enabled") && e.isImage && e instanceof c.ZP,
                                                        E = a.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte");
                                                    return (
                                                        e instanceof b.ZP &&
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
                                                        f?.setFileMetadata({ fileSize: e.size, mime: e.type, duration: _, width: e.width, height: e.height, orientation: h }),
                                                        (0, g.vn)(a, o, e, t, d).then(({ maxDimension: d, maxFileSize: p }) => {
                                                            const m = e.isImage && e instanceof c.ZP && (0, u.m2)(e, { maxFileSize: p, maxDimension: d, jpgPixelsPerByteForResize: E }),
                                                                _ = (0, g.SB)({ featureSwitches: a, userClaims: o }),
                                                                h = { useLongVideoEndpoint: e.isVideo && _ >= 1, actAsUserId: (0, I.dY)(i()) },
                                                                w = m ? void 0 : V(e.fileHandle, a, h),
                                                                y = Q({ originalMediaFile: e, mediaFile: e, mediaFileHash: S ? void 0 : null, needsProcessing: m, location: t.location, uploadId: s[l] ?? "", reporter: f, uploader: w, mediaMetadata: { altText: n[l] }, abortController: S ? new AbortController() : void 0 });
                                                            return S && fe(r, i, y.id, e.fileHandle, y.reporter, y.abortController), y;
                                                        })
                                                    );
                                                });
                                            return Promise.all(l).then((e) => (r(X(e)), e));
                                        };
                                    })(e, t),
                                );
                                return i;
                            },
                            (e) => {
                                const t = (0, E.vK)(e);
                                return t && r((0, T.fz)(t)), Promise.reject(e);
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
                ({ height: e, mediaCategory: t, mediaType: r, previewMediaType: i, previewUrl: a, sourceUrl: o, stillMediaUrl: s, width: n }) =>
                (d, l, { featureSwitches: c }) => {
                    const u = c.isTrue("responsive_web_media_upload_metrics_enabled") && t ? new w.ZP({ isExternal: !0, mediaCategory: t }) : void 0;
                    u?.reportOperationStart(w.BX.Full, !0);
                    const p = { actAsUserId: (0, I.dY)(l()) },
                        m = Q({ externalMediaDetails: { mediaCategory: t, mediaType: r, previewUrl: a || o, previewMediaType: i || r, sourceUrl: o, stillMediaUrl: s, width: n, height: e }, reporter: u, uploader: V(null, c, p) });
                    return d(X(m)), u?.toggleOperationPaused(w.BX.Full, !0), [m];
                };
            function Q(e) {
                const t = { ...e, id: G, uploadFailed: !1, uploading: !1, uploadProgress: 1, mediaMetadata: void 0 };
                return (G += 1), t.uploadId || ((t.uploadId = ""), (t.uploadProgress = 0)), t;
            }
            const q =
                    (e) =>
                    (t, r, { featureSwitches: i, userClaims: a }) => {
                        const [o] = Z(r(), e);
                        if (!o) return Promise.reject(new Error("media item not found"));
                        const { abortController: s, cropData: n, id: d, location: l, mediaFile: p, needsProcessing: m, originalMediaFile: _ } = o;
                        if (!_) return Promise.reject(new Error("media item not found"));
                        const h = i.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte"),
                            f = (0, U.IX)(r()),
                            S = { location: l };
                        return (0, g.vn)(i, a, _, S, f).then((e) => {
                            const a = { cropData: n, jpgPixelsPerByteForResize: h, maxFileSize: e.maxFileSize, maxDimension: e.maxDimension },
                                l = e.maxFileSize || 0,
                                f = e.maxDuration || 0;
                            if (_.isImage && _ instanceof c.ZP)
                                return m
                                    ? (0, u.ZP)(_, a)
                                          .then(
                                              (e) => new c.ZP(e).withDimensionsAndOrientation(),
                                              (e) => {
                                                  throw (s?.abort(), (e.type = "resize"), e);
                                              },
                                          )
                                          .then((e) => {
                                              _ !== p && p && p.dispose(), o.uploader && o.uploader.cancel && o.uploader.cancel();
                                              const a = { actAsUserId: (0, I.dY)(r()) },
                                                  s = V(e.fileHandle, i, a),
                                                  n = t(re({ id: d, mediaFile: e, needsProcessing: !1, uploadPromise: void 0, uploadProgress: 0, uploading: !1, uploadId: void 0, uploader: s }));
                                              return (o.uploadId || o.uploading) && t(pe([d])), n;
                                          })
                                    : Promise.resolve(o);
                            if (_.size > l) {
                                const e = Error("Exceeds size limit");
                                return ([e.type, e.code, e.limit] = ["maxsize", _.isGif ? g.BW.GIF_IS_TOO_LARGE : g.BW.VIDEO_IS_TOO_LARGE, l]), Promise.reject(e);
                            }
                            if (_.isVideo && _ instanceof b.ZP && _.duration > f) {
                                const e = Error("Exceeds duration limit");
                                return ([e.type, e.code, e.limit] = ["maxduration", g.ff.VIDEO_IS_TOO_LONG, f]), Promise.reject(e);
                            }
                            return Promise.resolve(o);
                        });
                    },
                Y = (e, t) => (r, i) => {
                    const { onFailure: a } = t,
                        s = [];
                    return new Promise((t, i) => {
                        const n = (e) => {
                            if (!e.length) return t(s);
                            const [i] = e;
                            o()(() => {
                                i.reporter?.reportOperationStart(w.BX.Full, !0),
                                    i.reporter?.reportOperationStart([w.BX.Processing, w.BX.Metadata]),
                                    i.reporter?.reportOperationComplete(w.BX.Metadata, w.Uk.Complete),
                                    r(q(i.id)).then(
                                        (t) => {
                                            s.push(t), t?.reporter?.reportOperationComplete(w.BX.Processing, w.Uk.Success), t?.reporter?.toggleOperationPaused(w.BX.Full, !0), n(e.slice(1));
                                        },
                                        (t) => {
                                            const o = (0, E.ZP)(t, F);
                                            o && r((0, T.fz)(o));
                                            const { code: s, message: d, name: l, type: c } = t;
                                            i.reporter?.setMetadata({ reason: { name: l, message: d, code: s } });
                                            const p = "maxsize" === c || "maxduration" === c || ("resize" === c && (s === u.Y7.FILE_IS_NOT_AN_IMAGE || s === u.Y7.GIF_IS_TOO_LARGE)) ? w.Uk.Invalid : w.Uk.Failure;
                                            i.reporter?.reportOperationComplete([w.BX.Full, w.BX.Processing], p), a && a(i.id), n(e.slice(1));
                                        },
                                    );
                            });
                        };
                        n(e);
                    });
                },
                J = "rweb/mediaUpload/REMOVE_MEDIA",
                W = (e) => ({ payload: Array.isArray(e) ? e : [e], type: J });
            function K(e) {
                return (t, r) => {
                    Z(r(), e).forEach((e) => {
                        const { abortController: t, mediaFile: r, originalMediaFile: i, reporter: a, uploader: o } = e;
                        t?.abort(), o && o.cancel && o.cancel(), a?.reportOperationComplete(w.BX.Full, w.Uk.Cancel), r && r.dispose(), i && i.dispose();
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
                    i.uploader?.cancel(), t(pe(e));
                };
            }
            function ae(e, t) {
                return (r) => r(re({ id: e, mediaMetadata: t }));
            }
            const oe = "SEND_METADATA",
                se = P.dg(R, oe);
            function ne(e) {
                return (t, r, { api: i }) => P._O(t, { params: e, request: i.withEndpoint(h.Z).metadataCreate })({ actionTypes: se, context: oe });
            }
            const de = "ATTACH_SUBTITLES",
                le = P.dg(R, de);
            function ce(e) {
                return (t, r, i) => {
                    const { subtitlesDisplayName: a, subtitlesLang: o, subtitlesMediaUploadId: s, videoMediaUploadId: n } = e,
                        { api: d, featureSwitches: l, userClaims: c } = i,
                        u = he(e.mediaItem, !1, { featureSwitches: l, userClaims: c }) || "";
                    return P._O(t, { params: { videoMediaUploadId: n, videoMediaCategory: u, subtitlesLang: o, subtitlesMediaUploadId: s, subtitlesDisplayName: a }, request: d.withEndpoint(h.Z).attachSubtitles })({ actionTypes: le, context: de });
                };
            }
            const ue = (e) => {
                const t = e.trimData;
                if (t) return `${t.startTime.toFixed(3)}-${t.endTime.toFixed(3)}`;
            };
            const pe =
                    (e, t = Object.freeze({})) =>
                    (r, i, { featureSwitches: a, userClaims: o }) => {
                        const s = Z(i(), e),
                            n = (e) => r(re(e));
                        function d(e, r = !1) {
                            const i = a.isTrue("responsive_web_media_upload_md5_hashing_enabled"),
                                { abortController: s, id: l, mediaFile: u, mediaFileHash: p, reporter: m, uploader: h } = e,
                                f = i && u && u.isImage && u instanceof c.ZP,
                                S = void 0 === p;
                            return (
                                m?.toggleOperationPaused(w.BX.Full, !1),
                                t.withoutReUpload && e.uploadId
                                    ? Promise.resolve(n({ id: l, uploadProgress: 1, uploading: !1 }))
                                    : (t.preUpload || (m?.reportOperationStart(w.BX.UploadSubmitUntilSruFinish), m?.reportUploadSubmit(), f && S && s?.abort(), e.uploading && h && h.amendUpload({ pauseBeforeFinalize: !1, trimRanges: ue(e) })),
                                      e.uploadPromise
                                          ? e.uploadPromise.then((t) => ({ ...t, mediaMetadata: e.mediaMetadata }))
                                          : h
                                            ? (function (e) {
                                                  const { featureSwitches: t, gifAsStaticImage: r, mediaItem: i, updateMediaItem: a, uploadMediaItem: o, uploadOptions: s, userClaims: n } = e,
                                                      { abortController: d, externalMediaDetails: l, id: c, reporter: u, uploader: p } = i,
                                                      m = new Promise((e, m) => {
                                                          const h = (t) => {
                                                                  u?.setMetadata({ mediaId: t }), u?.reportOperationComplete([w.BX.Full, w.BX.UploadSubmitUntilSruFinish], w.Uk.Success), e(a({ id: c, uploadId: t, uploadProgress: 1, uploading: !1 }));
                                                              },
                                                              f = (e, t, r) => {
                                                                  u?.setMetadata({ mediaId: r }), "uploading" === t ? (a({ id: c, uploadProgress: D.OA("uploading", e) }), 100 === e && u?.reportOperationComplete(w.BX.SruUpload, w.Uk.Success)) : "processing" === t && a({ id: c, uploadProgress: D.OA("processing", e) });
                                                              },
                                                              S = () => {
                                                                  u?.toggleOperationPaused(w.BX.Full, !0);
                                                              },
                                                              E = (t) => {
                                                                  const { code: s, detail_message: n, maxSizeBytes: l, mediaId: h, message: f, name: S } = t;
                                                                  if (i.mediaFile?.isGif && !r && s === g.Tz.INVALID_MEDIA_CODE) p?.amendUpload({ pauseBeforeFinalize: !1 }), a({ id: c, uploadProgress: 0, uploading: !1, uploadFailed: !1, uploadPromise: void 0 }), o(i, !0).then(e).catch(m);
                                                                  else {
                                                                      d?.abort(), a({ id: c, uploadProgress: 0, uploading: !1, uploadFailed: !0, uploadError: { code: s, message: f, detail_message: n, maxSizeBytes: l }, uploadPromise: void 0 });
                                                                      const e = new L(f ? `${f}` : `Media upload failed [Error code: ${s}]${h ? ` ${h}` : ""}`, { code: s, type: B, isGif: !!i.externalMediaDetails || (i.mediaFile && i.mediaFile.isGif), isImage: i.mediaFile && i.mediaFile.isImage, isVideo: i.mediaFile && i.mediaFile instanceof b.ZP && i.mediaFile.isVideo }),
                                                                          t = s === _.d.CANCELED ? w.Uk.Cancel : w.Uk.Failure;
                                                                      u?.setMetadata({ reason: { name: S, message: f, code: s } }), u?.reportOperationComplete([w.BX.Full, w.BX.SruUpload, w.BX.UploadSubmitUntilSruFinish], t), m(e);
                                                                  }
                                                              };
                                                          if (l && i.uploader) i.uploader?.uploadExternalMedia(l.sourceUrl, l.mediaType, l.mediaCategory, { success: h, progress: f, error: E, mediaItem: i });
                                                          else if (i.uploader) {
                                                              const { extraInitParams: e = "", preUpload: a = !1 } = s,
                                                                  { enable_1080p_variant: o, mediaFile: d, mediaFileHash: l } = i,
                                                                  c = t.isTrue("media_async_upload_longer_video_resolution_selector"),
                                                                  p = d && d.size > 1e8 && t.isTrue("rweb_media_multi_requests_enabled"),
                                                                  m = he(i, r, { featureSwitches: t, userClaims: n }),
                                                                  _ = m ? `&media_category=${m}` : "";
                                                              u?.reportOperationStart(w.BX.SruUpload), i.uploader?.upload({ success: h, progress: f, pause: S, error: E, extraInitParams: e + _, extraFinalizeParams: l ? `&original_md5=${l}` : void 0, trimRanges: ue(i), pauseBeforeFinalize: a, withMultiRequests: p, withMultiRequestsDefaultPoolSize: t.getNumberValue("rweb_media_multi_requests_default_pool_size", d && d.size > 2e9 ? 4 : 1), enable_1080p_variant: !c || o, mediaItem: i });
                                                          }
                                                      });
                                                  return a({ id: c, uploading: !0, uploadFailed: !1, uploadProgress: 0, uploadPromise: m }), m;
                                              })({ mediaItem: e, updateMediaItem: n, uploadMediaItem: d, gifAsStaticImage: r, uploadOptions: t, featureSwitches: a, userClaims: o })
                                            : Promise.reject(new Error("Media has no uploader. Did you forget to call resizeMedia?")))
                            );
                        }
                        const l = s.map((e) => d(e));
                        return Promise.all(l).catch((e) => {
                            throw (e.type || (e.type = B), e);
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
                const a = e === g.vC.Tweet || e === g.vC.TwitterArticle,
                    o = e === g.vC.TwitterArticle;
                if (t.isSubtitles) return g.xz.Subtitles;
                if (t.isGif && !r) return a ? g.xz.TweetGif : g.xz.DMGif;
                if (t.isAmplify) return g.xz.AmplifyVideo;
                if (t.isVideo) {
                    const e = t.duration || 0,
                        { featureSwitches: r, userClaims: s } = i,
                        n = (0, g.SB)({ featureSwitches: r, userClaims: s }),
                        d = r.getNumberValue("media_async_upload_amplify_duration_threshold", g.y$.Duration[n]);
                    return "number" == typeof n && 1 === n && e > d ? g.xz.AmplifyVideo : o ? g.xz.TweetVideo : a ? g.xz.AmplifyVideo : g.xz.DMVideo;
                }
                return a ? g.xz.TweetImage : g.xz.DMImage;
            }
            function he(e, t, r) {
                const { location: i, mediaFile: a } = e;
                if (!i || !a) return null;
                switch (i) {
                    case g.vC.Tweet:
                    case g.vC.Dm:
                    case g.vC.TwitterArticle:
                        return _e(i, a, t, r);
                    case g.vC.CommunityBanner:
                        return g.xz.CommunityBanner;
                    case g.vC.ListBanner:
                        return g.xz.ListBanner;
                    case g.vC.ProfileBanner:
                        return g.xz.ProfileBanner;
                    default:
                        return null;
                }
            }
            const fe = (e, t, r, i, a, o) => {
                a?.reportOperationStart(w.BX.Hash, !0),
                    a?.setMetadata({ hashState: w.Xj.InProgress }),
                    (0, p.Q)(i, o)
                        .then((i) => {
                            const [o] = Z(t(), r);
                            if (!o) {
                                throw new L("Media item was removed", { code: p.S.HASHING_ABORTED, type: B, isGif: !1, isImage: !0, isVideo: !1 });
                            }
                            e(re({ id: r, mediaFileHash: i, abortController: void 0 }));
                            const { uploadPromise: s, uploader: n, uploading: d } = o;
                            s && d && n && n.amendUpload({ extraFinalizeParams: i ? `&original_md5=${i}` : void 0 }), a?.setMetadata({ hashState: w.Xj.Complete }), a?.reportOperationComplete(w.BX.Hash, w.Uk.Success);
                        })
                        .catch((i) => {
                            const [o] = Z(t(), r);
                            o && e(re({ id: r, mediaFileHash: null, abortController: void 0 })), i.code === p.S.HASHING_ABORTED ? (a?.setMetadata({ hashState: w.Xj.Canceled }), a?.reportOperationComplete(w.BX.Hash, w.Uk.Cancel)) : (a?.setMetadata({ hashState: w.Xj.Failure }), a?.reportOperationComplete(w.BX.Hash, w.Uk.Failure));
                        });
            };
            C.Z.register({
                [M]: function (e = z, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case k:
                            return t.payload ? e.concat(t.payload) : e;
                        case J: {
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
        204744: (e, t, r) => {
            r.d(t, { DI: () => w, H$: () => p, OB: () => y, Ww: () => c, YB: () => u, hj: () => f, qF: () => g });
            r(901951);
            var i = r(499627),
                a = r(390387);
            const o = "recentSearches",
                s = "rweb.recentSearches",
                n =
                    (e) =>
                    (t, r, { userPersistence: i }) =>
                        i.set(s, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                d = (e, t) => {
                    let r = [];
                    if (e.user) {
                        const i = e.user;
                        r = t.filter((e) => e.event || e.keyword || e.list || e.topic || (e.user && e.user.id !== i.id));
                    } else if (e.event) {
                        const i = e.event;
                        r = t.filter((e) => e.keyword || e.list || e.topic || e.user || (e.event && e.event.id !== i.id));
                    } else if (e && e.keyword) {
                        const i = e.keyword;
                        r = t.filter((e) => e.event || e.list || e.topic || e.user || (e.keyword && e.keyword.query !== i.query));
                    } else if (e.list) {
                        const i = e.list;
                        r = t.filter((e) => e.event || e.keyword || e.topic || e.user || (e.list && e.list.id !== i.id));
                    } else if (e.topic) {
                        const i = e.topic;
                        r = t.filter((e) => e.event || e.keyword || e.list || e.user || (e.topic && e.topic.id !== i.id));
                    }
                    return r;
                },
                l = { fetched: !1, recentSearches: [] };
            const c = (e) => e[o].recentSearches,
                u = (e) => c(e)[0] || null,
                p = (e) => e[o].fetched,
                m = "rweb/recentSearches/INIT_FROM_CACHE",
                _ = (e) => ({ type: m, payload: e }),
                h = "rweb/recentSearches/REMOVE_QUERY",
                f =
                    (e) =>
                    (t, r, { userPersistence: i }) => {
                        t({ payload: e, type: h });
                        const o = r(),
                            s = c(o);
                        return (0, a.Qb)(o) ? t(n(s)) : Promise.resolve();
                    },
                S = "rweb/recentSearches/CLEAR_ALL",
                g =
                    () =>
                    (e, t, { userPersistence: r }) => {
                        e({ type: S });
                        const i = t(),
                            o = c(i);
                        return (0, a.Qb)(i) ? e(n(o)) : Promise.resolve();
                    },
                E = "rweb/recentSearches/ADD_QUERY",
                w =
                    (e) =>
                    (t, r, { userPersistence: i }) => {
                        t({ payload: e, type: E });
                        const o = r(),
                            s = c(o);
                        return (0, a.Qb)(o) ? t(n(s)) : Promise.resolve();
                    },
                y =
                    () =>
                    (e, t, { userPersistence: r }) => {
                        const i = t();
                        return p(i)
                            ? Promise.resolve()
                            : e((e, t, { userPersistence: r }) => {
                                  const i = t();
                                  return (0, a.Qb)(i)
                                      ? r
                                            .get(s)
                                            .then((t) => {
                                                e(_(t));
                                            })
                                            .catch(() => {
                                                e(_());
                                            })
                                      : (e(_()), Promise.resolve());
                              });
                    };
            i.Z.register({
                [o]: function (e = l, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case E: {
                            const r = t.payload,
                                i = r ? d(r, e.recentSearches) : [];
                            return i.length > 49 && i.splice(49, 1), r && i.unshift(r), { ...e, recentSearches: i };
                        }
                        case h: {
                            const r = t.payload,
                                i = r ? d(r, e.recentSearches) : [];
                            return { ...e, recentSearches: i };
                        }
                        case S:
                            return { fetched: !0, recentSearches: [] };
                        case m:
                            return { ...e, ...t.payload, fetched: !0 };
                        default:
                            return e;
                    }
                },
            });
        },
        554951: (e, t, r) => {
            r.d(t, { GL: () => f, as: () => h, k9: () => S, l9: () => g });
            var i = r(58687),
                a = r(163889),
                o = r(499627),
                s = r(917799),
                n = r(312771),
                d = r(390387);
            const l = "savedSearches",
                c = { fetchStatus: n.ZP.NONE, savedSearches: [] },
                u = Object.freeze({ REQUEST: "rweb/savedSearches/FETCH_SAVED_SEARCHES_REQUEST", SUCCESS: "rweb/savedSearches/FETCH_SAVED_SEARCHES_SUCCESS", FAILURE: "rweb/savedSearches/FETCH_SAVED_SEARCHES_FAILURE" }),
                p = Object.freeze({ REQUEST: "rweb/savedSearches/SAVE_SEARCH_REQUEST", SUCCESS: "rweb/savedSearches/SAVE_SEARCH_SUCCESS", FAILURE: "rweb/savedSearches/SAVE_SEARCH_FAILURE" }),
                m = Object.freeze({ REQUEST: "rweb/savedSearches/DELETE_SAVED_SEARCH_REQUEST", SUCCESS: "rweb/savedSearches/DELETE_SAVED_SEARCH_SUCCESS", FAILURE: "rweb/savedSearches/DELETE_SAVED_SEARCH_FAILURE" });
            function _(e = c, t) {
                if (!t) return e;
                switch (t.type) {
                    case u.SUCCESS: {
                        const r = t.payload,
                            i = Array.isArray(r);
                        return i || (0, a.ZP)("Saved search results are not type array", { extra: { savedSearchResultsType: typeof r } }), { ...e, fetchStatus: n.ZP.LOADED, savedSearches: i && r ? r : [] };
                    }
                    case u.FAILURE:
                        return { ...e, fetchStatus: n.ZP.FAILED };
                    case p.SUCCESS:
                        return { ...e, savedSearches: t.payload ? [...e.savedSearches, t.payload] : e.savedSearches };
                    case m.SUCCESS:
                        return t.payload ? { ...e, savedSearches: e.savedSearches.filter((e) => e.id_str !== t.payload.id_str) } : e;
                    default:
                        return e;
                }
            }
            o.Z.register({ [l]: _ });
            const h = (e) => e[l].savedSearches,
                f =
                    (e) =>
                    (t, r, { api: a }) =>
                        (0, s._O)(t, { request: a.withEndpoint(i.Z).create, params: { query: e } })({ actionTypes: p, context: "SAVE_SEARCH" }),
                S =
                    (e) =>
                    (t, r, { api: a }) =>
                        (0, s._O)(t, { request: a.withEndpoint(i.Z).destroy, params: { id: e } })({ actionTypes: m, context: "DELETE_SAVED_SEARCH" }),
                g =
                    () =>
                    (e, t, { api: r }) => {
                        const a = t();
                        if (!(0, d.Qb)(a)) return Promise.resolve();
                        const o = ((e) => e[l].fetchStatus)(a) === n.ZP.LOADED;
                        return o ? Promise.resolve() : e((e, t, { api: r }) => (0, s._O)(e, { request: r.withEndpoint(i.Z).fetch, params: {} })({ actionTypes: u, context: "FETCH_SAVED_SEARCHES" }));
                    };
        },
        624479: (e, t, r) => {
            r.d(t, { ZP: () => m, cY: () => p, vj: () => n });
            r(136728), r(202784);
            var i = r(787210),
                a = (r(827922), r(905710)),
                o = r(502909),
                s = r(600823);
            const n = 30,
                d = (0, o.ZP)({ namespace: "userPresence", entityIsComplete: (e) => e.expiry > Date.now() }),
                l = (0, o.tb)(d, { context: "FETCH_USER_PRESENCE", endpoint: (e) => e.withEndpoint(i.Z).fetchPresence, params: (e) => ({ userIds: e, only_spaces: !1 }) }),
                c = (0, o.Nr)(d, { context: "FETCH_USER_PRESENCE", endpoint: (e) => e.withEndpoint(i.Z).fetchPresence, params: (e) => ({ userIds: e, only_spaces: !0 }) }),
                u = { ...d, ...l, ...c },
                p = (e, t) => {
                    const r = u.select(e, t),
                        i = r ? r.spaces : void 0;
                    return i?.live_content.livevideo ? { presenceRingType: "livevideo", link: { pathname: (0, a.s)(i.live_content.livevideo.id), state: { origin: "livevideo_ring" } }, spaceId: i.live_content.livevideo.id } : i && i.live_content.audiospace && { presenceRingType: "audiospace", link: { pathname: (0, a.e)(i.live_content.audiospace.broadcast_id), state: { origin: "audiospace_ring" } }, spaceId: i.live_content.audiospace.broadcast_id };
                };
            const m = s.Z.register(u);
        },
        162664: (e, t, r) => {
            r.d(t, { b: () => i });
            const i = (e) => {
                if (e) return { blocking: e.blocking, can_dm: e.can_dm, can_media_tag: e.can_media_tag, created_at: e.created_at, description: e.description, dm_blocked_by: e.dm_blocked_by, dm_blocking: e.dm_blocking, entities: e.entities, followed_by: e.followed_by, followers_count: e.followers_count, following: e.following, friends_count: e.friends_count, highlightedLabel: e.highlightedLabel, id_str: e.id_str, id: e.id, is_blue_verified: e.is_blue_verified, name: e.name, profile_image_url_https: e.profile_image_url_https, protected: e.protected, screen_name: e.screen_name, subscribed_by: e.subscribed_by, verified_type: e.verified_type, verified: e.verified };
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Typeahead-cd7e5e1f.67784e5a.js.map

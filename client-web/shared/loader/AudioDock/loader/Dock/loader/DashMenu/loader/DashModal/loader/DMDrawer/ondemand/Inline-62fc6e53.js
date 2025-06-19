(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"],
    {
        586035: (t, e, i) => {
            "use strict";
            function s(t) {
                return Boolean(t.voiceInfo?.clipIndex);
            }
            i.d(e, { B: () => s });
        },
        19697: (t, e, i) => {
            "use strict";
            i.d(e, { q8: () => d, $i: () => r });
            i(571372);
            var s = i(790187);
            const n = (t, e) => {
                const i = document.createElement("canvas");
                (i.width = t), (i.height = e);
                const s = i.getContext("2d");
                return (s.fillStyle = "#FFFFFF"), s.fillRect(0, 0, t, e), i;
            };
            function r(t, e, i, n, r) {
                return h(e, i).then(
                    (e) => (
                        (function (t, e, i, n, r, o) {
                            const a = o || { top: 0, left: 0, width: e.width, height: e.height };
                            let h = a.left,
                                d = a.top,
                                l = a.width,
                                u = a.height,
                                c = 0,
                                m = 0,
                                p = i,
                                g = n;
                            switch ((t.save(), r)) {
                                case s.Z.TOP_RIGHT:
                                    t.scale(-1, 1), (h = e.width - a.width - a.left), (c = -i);
                                    break;
                                case s.Z.BOTTOM_RIGHT:
                                    t.rotate(Math.PI), (h = e.width - a.width - a.left), (d = e.height - a.height - a.top), (c = -i), (m = -n);
                                    break;
                                case s.Z.BOTTOM_LEFT:
                                    t.scale(1, -1), (d = e.height - a.height - a.top), (m = -n);
                                    break;
                                case s.Z.LEFT_TOP:
                                    t.translate(i / 2, n / 2), t.rotate(-Math.PI / 2), t.scale(-1, 1), (h = a.top), (d = a.left), (l = a.height), (u = a.width), (c = -n / 2), (m = -i / 2), (p = n), (g = i);
                                    break;
                                case s.Z.LEFT_BOTTOM:
                                    t.translate(i / 2, n / 2), t.rotate(Math.PI / 2), (h = a.top), (d = e.height - a.width - a.left), (l = a.height), (u = a.width), (c = -n / 2), (m = -i / 2), (p = n), (g = i);
                                    break;
                                case s.Z.RIGHT_BOTTOM:
                                    t.translate(i / 2, n / 2), t.rotate(Math.PI / 2), t.scale(-1, 1), (h = e.width - a.height - a.top), (d = e.height - a.width - a.left), (l = a.height), (u = a.width), (c = -n / 2), (m = -i / 2), (p = n), (g = i);
                                    break;
                                case s.Z.RIGHT_TOP:
                                    t.translate(i / 2, n / 2), t.rotate(-Math.PI / 2), (h = e.width - a.height - a.top), (d = a.left), (l = a.height), (u = a.width), (c = -n / 2), (m = -i / 2), (p = n), (g = i);
                            }
                            t.drawImage(e, h, d, l, u, c, m, p, g), t.restore();
                        })(e.getContext("2d"), t, e.width, e.height, n, r),
                        e
                    ),
                );
            }
            const o = 3145728,
                a = 5242880;
            function h(t, e) {
                if (window.CanvasRenderingContext2D) {
                    const i = n(t, e);
                    return d(i)
                        .then(() => i)
                        .catch(() => {
                            const i = t * e;
                            if (i > a) {
                                const i = l(a, t, e);
                                return h(i.width, i.height);
                            }
                            if (i > o) {
                                const i = l(o, t, e);
                                return h(i.width, i.height);
                            }
                            throw Error("Could not create valid canvas for resizing");
                        });
                }
                return Promise.reject(Error("Canvas is not supported in this browser"));
            }
            function d(t) {
                return new Promise((e, i) => {
                    const s = t.toDataURL("image/jpeg");
                    s && "data:," !== s ? e(s) : i(new Error("Malformed canvas"));
                });
            }
            function l(t, e, i) {
                const s = Math.sqrt((t * i) / e),
                    n = (e * s) / i;
                return { height: Math.floor(s), width: Math.floor(n) };
            }
        },
        790187: (t, e, i) => {
            "use strict";
            i.d(e, { C: () => r, Z: () => s });
            i(694898), i(38857), i(540171), i(157093), i(265688), i(270315), i(592529), i(86943), i(691157);
            const s = Object.freeze({ UNKNOWN: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, LEFT_TOP: 5, LEFT_BOTTOM: 6, RIGHT_BOTTOM: 7, RIGHT_TOP: 8 }),
                n = (t, e, i = 65536) => {
                    let s = new Uint8Array([]),
                        n = 0;
                    function r(r, o, a) {
                        const h = r - n,
                            d = h + o;
                        if (h >= 0 && d <= s.length) a(s.subarray(h, d), r);
                        else {
                            const h = new FileReader();
                            (h.onload = function () {
                                (s = new Uint8Array(this.result)), (n = r), a(s.subarray(0, o), r);
                            }),
                                (h.onerror = e.bind(null, 0)),
                                null !== t && h.readAsArrayBuffer(t.slice(r, r + Math.max(i, o)));
                        }
                    }
                    function o(t) {
                        const i = { "MM\0*": !0, "II*\0": !1 }[String.fromCharCode.apply(null, t.subarray(0, 4))];
                        if (void 0 === i) return void e(0);
                        function s(e, s) {
                            let n = 0;
                            for (let r = 0; r < s; r++) n = (n << 8) + t[e + (i ? r : s - 1 - r)];
                            return n;
                        }
                        const n = t.length > 8 && s(4, 4);
                        if (!n || n + 2 > t.length) return void e(0);
                        let r = s(n, 2);
                        if (n + 12 * r + 6 > t.length) return void e(0);
                        let o = n + 2;
                        for (; r > 0; ) {
                            if (((r -= 1), 274 === s(o, 2) && 3 === s(o + 2, 2) && 1 === s(o + 4, 4))) return void e(s(o + 8, 2));
                            o += 12;
                        }
                        e(0);
                    }
                    t instanceof Blob
                        ? r(0, 10, function t(i, s) {
                              const n = i[1];
                              if (i.length < 4 || 255 !== i[0] || 217 === n) return void e(0);
                              const a = n < 208 || n > 217 ? (i[2] << 8) + i[3] : 0;
                              225 === n && a > 8 && "Exif\0\0" === String.fromCharCode.apply(null, i.subarray(4, 10)) ? r(s + 10, a - 8, o) : r(s + 2 + a, 10, t);
                          })
                        : e(0);
                },
                r = (t, e) => {
                    const i = document.documentElement && "from-image" === getComputedStyle(document.documentElement).imageOrientation;
                    return new Promise((r) => {
                        i
                            ? r(s.TOP_LEFT)
                            : n(
                                  t,
                                  (t) => {
                                      r(t);
                                  },
                                  e,
                              );
                    });
                };
        },
        276259: (t, e, i) => {
            "use strict";
            i.d(e, { Lw: () => n, Re: () => u, VJ: () => a, ZF: () => c, hv: () => h, ku: () => s, qp: () => r, uv: () => o, v5: () => l });
            i(571372), i(875640), i(694898), i(38857), i(540171), i(157093), i(265688), i(270315), i(592529), i(86943), i(691157), i(543673), i(240753), i(128399);
            function s(t) {
                const e = t.match(/=*$/);
                return e ? Math.floor(0.75 * (t.length - e[0].length)) : 0.75 * t.length;
            }
            function n(t) {
                return new Promise((e, i) => {
                    const s = t.split(/data:|;base64,/);
                    if (Blob)
                        if (3 !== s.length) i(Error("Invalid dataUri"));
                        else if (atob)
                            if (Uint8Array) {
                                const [, t, i] = s,
                                    n = atob(i),
                                    r = n.length,
                                    o = Array(r);
                                for (let t = 0; t < r; t++) o[t] = n.charCodeAt(t);
                                e(new Blob([new Uint8Array(o)], { type: t }));
                            } else i(Error("The Uint8Array type is not available"));
                        else i(Error("The atob API is not available"));
                    else i(Error("The Blob API is not available"));
                });
            }
            const r = (t, e) =>
                    new Promise((i, s) => {
                        const n = new FileReader();
                        e &&
                            (e.signal.onabort = () => {
                                n.abort?.(), s(Error(c));
                            }),
                            (n.onload = (t) => {
                                t.target instanceof FileReader && t.target.result instanceof ArrayBuffer ? i(t.target.result) : s(Error("The FileReader result was not of type ArrayBuffer"));
                            }),
                            (n.onerror = (t) => {
                                s(t);
                            }),
                            n.readAsArrayBuffer(t);
                    }),
                o = (t, e) => {
                    const i = document.createElement("a");
                    (i.href = t), (i.download = e), (i.target = "_blank"), i.click(), i.remove();
                },
                a = (t) =>
                    ((t) =>
                        new Promise((e) => {
                            const i = new Image();
                            (i.onload = function () {
                                const t = document.createElement("canvas");
                                (t.width = i.width), (t.height = i.height), t.getContext("2d").drawImage(i, 0, 0), t.toBlob((t) => e(t), "image/png");
                            }),
                                (i.crossOrigin = "anonymous"),
                                (i.src = t);
                        }))(t).then((t) => navigator.clipboard.write([new ClipboardItem({ "image/png": t })])),
                h = async (t, e) => {
                    if (t.size <= e) return t;
                    let i = t,
                        s = 1;
                    for (; i && i.size > e; )
                        try {
                            s > 0.2 ? ((s *= 0.7), (i = await d(i, 1, s))) : (i = await d(i, 0.7, s));
                        } catch (t) {
                            i = void 0;
                        }
                    return i;
                },
                d = (t, e, i) =>
                    new Promise((s, n) => {
                        const r = new Image();
                        (r.onload = () => {
                            const t = document.createElement("canvas"),
                                n = t.getContext("2d"),
                                o = r.width * e,
                                a = r.height * e;
                            (t.width = o),
                                (t.height = a),
                                n.drawImage(r, 0, 0, o, a),
                                t.toBlob(
                                    (t) => {
                                        s(new File([t], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    i,
                                );
                        }),
                            (r.onerror = () => n(new Error("Failed to load image while resizing"))),
                            (r.src = URL.createObjectURL(t));
                    }),
                l = ["image/jpeg", "image/png", "image/webp"],
                u = "image/gif",
                c = "Reading aborted";
        },
        549755: (t, e, i) => {
            "use strict";
            i.d(e, { Z: () => s });
            i(571372);
            class s extends Error {
                constructor(t, e, i) {
                    super(t), (this.code = e), (this.type = i || null);
                }
            }
        },
        205074: (t, e, i) => {
            "use strict";
            i.d(e, { DS: () => a, ZP: () => h });
            i(543673), i(240753), i(128399);
            var s = i(790187),
                n = i(276259),
                r = i(122123);
            function o(t, e) {
                const i = (function (t) {
                        return [s.Z.LEFT_BOTTOM, s.Z.LEFT_TOP, s.Z.RIGHT_BOTTOM, s.Z.RIGHT_TOP].indexOf(t) >= 0;
                    })(e),
                    [n, r] = i ? [t.height, t.width] : [t.width, t.height];
                return { width: n, height: r };
            }
            const a = (t) => {
                const e = t instanceof h,
                    i = t.isImage || t.isGif,
                    s = t.orientation,
                    n = t.width && t.height,
                    r = t.img;
                return !!(e && i && s && n && r);
            };
            class h {
                constructor(t) {
                    (this.fileHandle = t), t instanceof File && (this.name = t.name), (this.size = t.size), (this.type = t.type), (this.url = window.URL.createObjectURL(this.fileHandle)), (this.isGif = this.type === n.Re), (this.isImage = n.v5.some((t) => t === this.type)), (this.isVideo = !1), (this.isSubtitles = !1);
                }
                withDimensionsAndOrientation() {
                    return this.isGif || this.isImage
                        ? (0, r.po)(this.url).then((t) => {
                              const e = (e) => {
                                  const { height: i, width: s } = o(t, e);
                                  return (this.img = t), (this.width = s), (this.height = i), (this.orientation = e), this;
                              };
                              return (0, s.C)(this.fileHandle)
                                  .then((t) => e(t === s.Z.UNKNOWN ? s.Z.TOP_LEFT : t))
                                  .catch(() => e(s.Z.TOP_LEFT));
                          })
                        : Promise.resolve(this);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        122123: (t, e, i) => {
            "use strict";
            i.d(e, { gK: () => n, o2: () => o, po: () => r });
            var s = i(549755);
            const n = { type: "image-load", NO_DIMENSIONS: 1, LOAD_FAILED: 2 };
            function r(t) {
                return new Promise((e, i) => {
                    const r = (t, e) => {
                            const r = new s.Z(t, e, n.type);
                            i(r);
                        },
                        o = new Image();
                    (o.onload = () => {
                        o.width && o.height ? e(o) : r("Image lacks height or width", n.NO_DIMENSIONS);
                    }),
                        (o.onerror = () => {
                            r("Error loading image", n.LOAD_FAILED);
                        }),
                        (o.src = t);
                });
            }
            function o(t) {
                return new Promise((e, i) => {
                    const r = (t, e) => {
                            const r = new s.Z(t, e, n.type);
                            i(r);
                        },
                        o = new Image();
                    o.setAttribute("crossorigin", "anonymous"),
                        (o.onload = () => {
                            if (o.width && o.height) {
                                const t = document.createElement("canvas"),
                                    i = t.getContext("2d");
                                (t.width = o.width),
                                    (t.height = o.height),
                                    i.drawImage(o, 0, 0),
                                    t.toBlob((t) => {
                                        if (t) {
                                            const i = new File([t], "file.jpg", { type: "image/jpeg" });
                                            e(i);
                                        } else r("Failed to convert image to blob", n.LOAD_FAILED);
                                    }, "image/jpeg");
                            } else r("Image lacks height or width", n.NO_DIMENSIONS);
                        }),
                        (o.onerror = () => {
                            r("Error loading image", n.LOAD_FAILED);
                        }),
                        (o.src = t);
                });
            }
        },
        514354: (t, e, i) => {
            "use strict";
            i.d(e, { Q: () => h, S: () => a });
            var s = i(332775),
                n = i.n(s),
                r = i(276259),
                o = i(549755);
            const a = { ERROR_READING_IMAGE_FILE: 0, HASHING_ABORTED: 1, INVALID_HASH: 2 },
                h = (t, e) =>
                    (0, r.qp)(t, e)
                        .catch((t) => {
                            throw new o.Z(`An error occurred while reading the image file: ${t}`, t.message === r.ZF ? a.HASHING_ABORTED : a.ERROR_READING_IMAGE_FILE);
                        })
                        .then((t) => {
                            const e = n()(t);
                            if (e && "string" == typeof e) return e;
                            throw new o.Z("Hash is not a non-empty string", a.INVALID_HASH);
                        });
        },
        653843: (t, e, i) => {
            "use strict";
            i.d(e, { Y7: () => m, ZP: () => T, m2: () => I });
            var s = i(19697),
                n = i(790187),
                r = i(549755),
                o = i(205074),
                a = i(276259);
            function h(t, { maxDimension: e, maxFileSize: i, targetQuality: s }) {
                return (function (t, e, i, s) {
                    function n(r, o) {
                        return d(t, t.width, t.height, r, o).then((t) => {
                            const h = t.width > i || t.height > i,
                                d = t.toDataURL("image/jpeg", s),
                                l = d.split(";base64,")[1],
                                u = (0, a.ku)(l);
                            if (h || u > e) {
                                let t = 0.8;
                                return h && (t = r > o ? i / r : i / o), n(r * t, o * t);
                            }
                            return d;
                        });
                    }
                    return n(t.width, t.height);
                })(t, i, e, s).then(a.Lw);
            }
            function d(t, e, i, n, r) {
                const o = e / 2,
                    a = i / 2;
                return t instanceof HTMLCanvasElement && e <= n && i <= r ? Promise.resolve(t) : o <= n && a <= r ? (0, s.$i)(t, n, r) : (0, s.$i)(t, o, a).then((t) => d(t, t.width, t.height, n, r));
            }
            const l = 5242880,
                u = 4096,
                c = 0.85,
                m = { GIF_IS_TOO_LARGE: 1, CANNOT_BE_PROCESSED: 2, FILE_IS_NOT_AN_IMAGE: 3 },
                p = (t) => t.orientation !== n.Z.TOP_LEFT && t.orientation !== n.Z.UNKNOWN,
                g = (t, e = l, i = u) => {
                    const { height: s, size: n, width: r } = t;
                    return r > i || s > i || n > e;
                },
                f = (t, e) => e || { top: 0, left: 0, width: t.width, height: t.height },
                _ = (t, e) => {
                    const { height: i, left: s, top: n, width: r } = f(t, e);
                    return !(0 === n && 0 === s && r === t.width && i === t.height);
                };
            function I(t, e) {
                const { maxFileSize: i = l, maxDimension: s = u, cropData: n, jpgPixelsPerByteForResize: r } = e || {},
                    o = "image/jpeg" === t.type,
                    a = (t.width * t.height) / t.size;
                return p(t) || g(t, i, s) || _(t, n) || (o && !!r && a < r);
            }
            const E = (t, e) => {
                    const { height: i, width: s } = t;
                    return s <= e && i <= e ? { width: s, height: i } : s > i ? { width: e, height: Math.round(i / (s / e)) } : { width: Math.round(s / (i / e)), height: e };
                },
                w = (t) => ("function" == typeof t.decode ? t.decode() : Promise.resolve());
            function T(t, e) {
                const { maxFileSize: i = l, maxDimension: n = u, targetQuality: a = c, cropData: d } = e || {},
                    p = f(t, d);
                if (!I(t, e)) return Promise.resolve(t.fileHandle);
                if (!(0, o.DS)(t)) {
                    const t = new r.Z("The provided file is not a valid image", m.FILE_IS_NOT_AN_IMAGE);
                    return Promise.reject(t);
                }
                if (t.isGif) {
                    const t = new r.Z("Gifs cannot be processed.", m.GIF_IS_TOO_LARGE);
                    return Promise.reject(t);
                }
                const g = (t) => h(t, { maxFileSize: i, maxDimension: n, targetQuality: a });
                return t
                    .withDimensionsAndOrientation()
                    .then(({ img: t, orientation: e }) => {
                        const i = ({ height: i, width: n }) => (0, s.$i)(t, n, i, e, p);
                        return w(t)
                            .then(() => ((t) => t(E(p, n)))(i))
                            .then(g);
                    })
                    .catch(() => {
                        const t = new r.Z("Image cannot be processed", m.CANNOT_BE_PROCESSED);
                        return Promise.reject(t);
                    });
            }
        },
        459643: (t, e, i) => {
            "use strict";
            i.d(e, { Z: () => s });
            const s = (t) => () => t;
        },
        666536: (t, e, i) => {
            "use strict";
            i.d(e, { Z: () => r });
            var s = i(936386),
                n = i.n(s);
            const r = (t, e, i) => n()(t, e, i);
        },
        417144: (t, e, i) => {
            "use strict";
            function s(t, e = 1) {
                let i = e;
                const s = new Map();
                let n = 0,
                    r = 0,
                    o = 0,
                    a = null;
                function h() {
                    s.clear(), (n = 0), (r = 0), (o = 0);
                }
                return {
                    uploadStart: function (t, e) {
                        s.set(t, { time: Date.now(), bytes: e }), r || (r = Date.now());
                    },
                    uploadFinish: function (d, l) {
                        const u = s.get(d);
                        u &&
                            ((n += l - u.bytes),
                            s.delete(d),
                            ++o === i &&
                                (function () {
                                    if (!r) return;
                                    const s = Date.now() - r;
                                    if (s <= 0) return;
                                    if (1 !== e) return;
                                    const o = n / s;
                                    if (o < 5e3 && 1 === i) return;
                                    !a || a.byterate < o ? ((i += 1), t(), (a = { byterate: o, poolSize: i })) : ((i -= 2), (i = Math.max(i, 1)), (a = null));
                                    h();
                                })());
                    },
                    reset: h,
                    getPoolSize: () => i,
                    start: function () {
                        for (let e = 0; e < i; ++e) t();
                    },
                };
            }
            i.d(e, { Z: () => l, d: () => I });
            i(543673), i(240753), i(128399);
            function n(t) {
                const e = new URLSearchParams();
                for (const i of Object.keys(t)) {
                    const s = t[i];
                    s && e.set(i, s);
                }
                return `&${String(e)}`;
            }
            function r(t, e = a, i = o) {
                const s = Math.max(t, e);
                return Math.min(s, i);
            }
            const o = 5242880,
                a = 65536,
                h = 2e3,
                d = 1e4;
            class l {
                constructor(t, e = T) {
                    var i;
                    (this.timeoutIdMap = {}), (this.mediaId = ""), (this.mediaKey = ""), (this.fileHandle = t), (this.inflightSegments = new Map()), (this.totalBytes = t ? t.size : 0), (this.mediaType = t ? t.type : void 0), (this.initStartTime = new Date()), (this.sruHeaders = e.sruHeaders || {}), (this.uploadUrl = e.uploadUrl || p), (this.retainMediaForever = !!e.retainMediaForever), (this.sruParameterOverrides = e.sruParameterOverrides), (this.minSegmentBytes = this.sruParameterOverrides?.minSegmentBytes || ((i = this.totalBytes), r(Math.ceil(i / d)))), this._clearState();
                }
                upload(t) {
                    ((this.hasAttemptedFinalize && (this.uploadOptions.trimRanges !== t.trimRanges || this.uploadOptions.extraFinalizeParams !== t.extraFinalizeParams)) || this.uploadOptions.extraInitParams !== t.extraInitParams) && this._clearState(),
                        (this.uploadOptions = t),
                        this.state !== w.SUCCEEDED && this.state !== w.PENDING && ((this.state = w.PENDING), this.hasAttemptedFinalize ? this._postFinalize() : this.mediaId ? this._startNextAppendSegment() : this._postInit()),
                        (this._bitrateMonitor = t.withMultiRequests
                            ? s(() => {
                                  this._startNextAppendSegment();
                              }, t.withMultiRequestsDefaultPoolSize)
                            : void 0),
                        this._notifyResult(),
                        this._notifyProgress(this._uploadProgress());
                }
                cancel() {
                    "function" == typeof this.uploadOptions.error && this.uploadOptions.error({ code: I.CANCELED }), this._clearState();
                }
                pollStatusOfExistingMediaId(t, e) {
                    (this.mediaId = t), (this.uploadOptions = e || T), (this.state = w.PENDING), this._getStatus();
                }
                _clearState() {
                    for (const t of Object.keys(this.timeoutIdMap)) clearTimeout(this.timeoutIdMap[t]), delete this.timeoutIdMap[t];
                    (this.state = w.RESET),
                        (this.mediaId = ""),
                        (this.mediaKey = ""),
                        (this.uploadOptions = T),
                        (this.nextSegmentBytes =
                            this.sruParameterOverrides?.minSegmentBytes ||
                            (function () {
                                const t = window.navigator.connection;
                                if (t) {
                                    const e = t.type || t.effectiveType;
                                    if (t.downlink) return r(((1e3 * t.downlink) / 8 / 2) * h);
                                    if ("wifi" === e) return r(5 * a);
                                }
                                return r(2 * a);
                            })()),
                        (this.segmentIndex = 0),
                        (this.totalUploadDuration = 0),
                        (this.uploadedBytes = 0),
                        (this.hasAttemptedFinalize = !1),
                        this.inflightSegments.forEach(({ request: t }) => t.abort()),
                        (this.inflightSegments = new Map()),
                        this._bitrateMonitor?.reset();
                }
                uploadExternalMedia(t, e, i, s = T) {
                    (this.uploadOptions = s), (this.state = w.PENDING), (this.progressMode = "uploading");
                    let r = n({ source_url: t, media_type: e, media_category: i });
                    (r += this.uploadOptions.extraInitParams || ""), (r += this.uploadOptions.extraFinalizeParams || "");
                    this._sendXhr(
                        "POST",
                        "INIT",
                        r,
                        (t) => {
                            (this.mediaId = t.media_id_string), this._getStatus();
                        },
                        (...t) => this._uploadError(...t),
                        c,
                    );
                }
                _postInit() {
                    if (this.totalBytes) {
                        this.progressMode = "uploading";
                        const t = { total_bytes: String(this.totalBytes), media_type: this.mediaType || "" };
                        this.uploadOptions.enable_1080p_variant && (t.enable_1080p_variant = String(!0));
                        const { mediaItem: e } = this.uploadOptions;
                        if (e?.mediaFile?.duration) {
                            const i = 1e3 * e.mediaFile.duration;
                            t.video_duration_ms = String(i);
                        }
                        let i = n(t);
                        this.uploadOptions.extraInitParams && (i += this.uploadOptions.extraInitParams),
                            this._sendXhr(
                                "POST",
                                "INIT",
                                i,
                                (...t) => this._initSuccess(...t),
                                (...t) => this._uploadError(...t),
                                c,
                            );
                    } else this._uploadError({ code: I.ZERO_FILE_LENGTH });
                }
                _initSuccess(t) {
                    this.state === w.PENDING && ((this.mediaId = t.media_id_string), (this.mediaKey = t.media_key), this._setSessionTimeout(t.expires_after_secs), this._bitrateMonitor ? this._bitrateMonitor.start() : this._startNextAppendSegment());
                }
                _setSessionTimeout(t) {
                    if ((this.timeoutIdMap.session && (clearTimeout(this.timeoutIdMap.session), delete this.timeoutIdMap.session), t)) {
                        const e = Math.min(u, 1e3 * t);
                        this.timeoutIdMap.session = setTimeout(() => {
                            this._uploadError({ code: I.TIMEOUT }), this._stats("NONE", "timeout"), this._clearState();
                        }, e);
                    }
                }
                _startNextAppendSegment() {
                    if (this.hasAttemptedFinalize || this.inflightSegments.size >= (this._bitrateMonitor?.getPoolSize() ?? g)) return;
                    if (this.uploadedBytes === this.totalBytes) return this._postFinalize();
                    if (!this.fileHandle) return;
                    let t = 0;
                    this.inflightSegments.forEach(({ bytes: e }) => (t += e));
                    const e = t + this.uploadedBytes,
                        i = Math.min(this.nextSegmentBytes, this.totalBytes - e);
                    if (i <= 0) return;
                    const s = new FormData();
                    if (this.fileHandle) {
                        const t = this.fileHandle.slice(e, e + i);
                        s.append("media", t);
                    }
                    const r = this.segmentIndex;
                    this.segmentIndex += 1;
                    const o = n({ media_id: this.mediaId, segment_index: String(r) }),
                        a = this._sendXhr(
                            "POST",
                            "APPEND",
                            o,
                            () => {
                                if (this.state === w.PENDING) {
                                    const t = this.inflightSegments.get(r);
                                    t && (this.inflightSegments.delete(r), (this.uploadedBytes += t.bytes)), this._notifyProgress(this._uploadProgress(), this.mediaId), 0 === this.inflightSegments.size && this._startNextAppendSegment();
                                }
                            },
                            (...t) => this._uploadError(...t),
                            5,
                            s,
                            () => this._startNextAppendSegment(),
                            i,
                        );
                    this.inflightSegments.set(r, { bytes: i, request: a });
                }
                _postFinalize() {
                    if (this.uploadOptions.pauseBeforeFinalize) (this.state = w.PAUSED), this.uploadOptions.pause && this.uploadOptions.pause();
                    else {
                        this.hasAttemptedFinalize = !0;
                        const t = { media_id: this.mediaId };
                        this.uploadOptions.trimRanges && (t.trim_ranges = this.uploadOptions.trimRanges), this.mediaType && /^video\//.test(this.mediaType) && (t.allow_async = String(!0)), this.retainMediaForever && (t.ttl = "infinite");
                        let e = n(t);
                        (e += this.uploadOptions.extraFinalizeParams || ""),
                            this._sendXhr(
                                "POST",
                                "FINALIZE",
                                e,
                                (...t) => this._finalizeOrStatusSuccess(...t),
                                (...t) => this._uploadError(...t),
                                c,
                            );
                    }
                }
                _finalizeOrStatusSuccess(t) {
                    this._setSessionTimeout(t.expires_after_secs);
                    const e = t.processing_info;
                    if (!e) return void this._finalizeSuccess(t);
                    let i = 0;
                    switch (e.state) {
                        case "pending":
                            this.progressMode = "waiting";
                            break;
                        case "in_progress":
                            (this.progressMode = "processing"), "number" == typeof e.progress_percent && (i = e.progress_percent), i >= 100 && (i = 99);
                            break;
                        case "succeeded":
                            return void this._finalizeSuccess(t);
                        case "failed": {
                            const t = e.error;
                            let i;
                            return (i = t?.code ? E[String(t.code)] : I.INTERNAL_ERROR), void this._uploadError({ ...t, code: i });
                        }
                        default:
                            return void this._uploadError();
                    }
                    this._notifyProgress(i, this.mediaId, this.mediaKey);
                    const s = e.check_after_secs || 10;
                    setTimeout((...t) => this._getStatus(...t), 1e3 * s);
                }
                _getStatus() {
                    if (this.state === w.PENDING) {
                        const t = n({ media_id: this.mediaId });
                        this._sendXhr(
                            "GET",
                            "STATUS",
                            t,
                            (...t) => this._finalizeOrStatusSuccess(...t),
                            (...t) => this._uploadError(...t),
                            c,
                        );
                    }
                }
                _finalizeSuccess(t) {
                    this.state === w.PENDING && ((this.state = w.SUCCEEDED), this._notifyResult());
                }
                _uploadError(t) {
                    if (this.state !== w.PENDING) return;
                    const e = t.error?.match(/{ "message": "maxFileSizeExceeded", "maxFileSizeBytes": \d+ }/);
                    if (e) {
                        const t = JSON.parse(e[0]);
                        this.error = { code: I.FILE_TOO_LARGE, message: t.message, maxSizeBytes: t.maxFileSizeBytes };
                    } else t && t.code ? (this.error = t) : (this.error = { code: I.INTERNAL_ERROR, message: t?.error });
                    (this.state = w.FAILED), this._notifyResult();
                }
                _uploadProgress() {
                    if (this.totalBytes) {
                        return 100 * (this.uploadedBytes / this.totalBytes);
                    }
                    return 0;
                }
                _notifyProgress(t, e, i) {
                    this.state !== w.FAILED && this.uploadOptions.progress && this.uploadOptions.progress(t, this.progressMode, e, i);
                }
                _notifyResult() {
                    this.state === w.SUCCEEDED && this.uploadOptions.success && this.uploadOptions.success(this.mediaId, this.mediaKey), this.state === w.FAILED && this.uploadOptions.error && this.uploadOptions.error(this.error);
                }
                _stats(t, e, i = {}) {
                    const s = i.requestStartTime || this.initStartTime,
                        n = new Date().getTime() - s.getTime();
                    if (((this.totalUploadDuration += n), this.uploadOptions.stats)) {
                        const s = { mediaType: this.mediaType || "", command: t, status: e, duration: n, totalByteSize: this.totalBytes, totalDuration: this.totalUploadDuration };
                        i.segmentBytes && (s.appendByteSize = i.segmentBytes), this.uploadOptions.stats(s);
                    }
                }
                _sendXhr(t, e, i, s, n, o, a, d, l = 0) {
                    const u = `${this.uploadUrl}?command=${e}${i}`;
                    let c = !1;
                    const p = new Date(),
                        g = (r) => {
                            if (o) {
                                const r = [u, o].join("-");
                                this.timeoutIdMap[r] = setTimeout(() => {
                                    this._sendXhr(t, e, i, s, n, o - 1, a, d, l);
                                }, _);
                            } else E(r);
                        },
                        E = (t) => {
                            this._stats(e, t || "unknown-error", { requestStartTime: p, segmentBytes: l }), "function" == typeof n && n(O(w) || { code: I.INVALID_RES_STATUS, mediaId: this.mediaId });
                        },
                        w = new XMLHttpRequest();
                    w.open(t, u, !0),
                        (w.withCredentials = !0),
                        (w.timeout = this.sruParameterOverrides?.clientsideSruUploadTimeoutMs || m),
                        (w.onload = () => {
                            if (w.status >= 200 && w.status < 400) {
                                const t = O(w);
                                204 === w.status || t ? (this._stats(e, "success", { requestStartTime: p, segmentBytes: l }), s(t || {}), !c && d && d()) : g("parsererror");
                            } else w.status && 503 !== w.status ? E("invalid-response") : g("503");
                        }),
                        (w.onerror = () => g("error")),
                        (w.ontimeout = () => {
                            (this.nextSegmentBytes = this.minSegmentBytes), g("timeout");
                        });
                    let T = !1;
                    w.upload.onprogress = (t) => {
                        T ? t.loaded === t.total && this._bitrateMonitor?.uploadFinish(u, t.total) : ((T = !0), this._bitrateMonitor?.uploadStart(u, t.loaded));
                        const e = t.loaded,
                            i = ((this.uploadedBytes + e) / this.totalBytes) * 100;
                        if ((this._notifyProgress(i, this.mediaId), e / t.total > f && !c && ((c = !0), a))) {
                            const t = Math.max(1, new Date().getTime() - p.getTime()),
                                i = this.minSegmentBytes,
                                s = this.sruParameterOverrides?.maxSegmentBytes;
                            (this.nextSegmentBytes = (function (t) {
                                const e = t.idealUploadTimeMs || h,
                                    i = t.sentBytes / t.uploadTimeMs;
                                return r(Math.round(e * i), t.minSegmentBytes, t.maxSegmentBytes);
                            })({ minSegmentBytes: i, sentBytes: e, uploadTimeMs: t, maxSegmentBytes: s, idealUploadTimeMs: this.sruParameterOverrides?.idealUploadTimeMs })),
                                "function" == typeof d && d();
                        }
                    };
                    for (const t in this.sruHeaders) w.setRequestHeader(t, this.sruHeaders[t]);
                    return a ? w.send(a) : w.send(), w;
                }
            }
            const u = 2147483647,
                c = 1,
                m = 45e3,
                p = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload.json",
                g = 2,
                f = 0.95,
                _ = 1e3,
                I = Object.freeze({ FILE_TOO_LARGE: 2, INTERNAL_ERROR: 131, INVALID_MEDIA: 1, RATE_LIMIT: 88, TIMEOUT: 67, UNSUPPORTED_MEDIA: 3, ZERO_FILE_LENGTH: 4, CANCELED: 999, INVALID_RES_STATUS: -1 }),
                E = Object.freeze({ 0: I.INTERNAL_ERROR, 1: I.INVALID_MEDIA, 2: I.FILE_TOO_LARGE, 3: I.UNSUPPORTED_MEDIA, 4: I.TIMEOUT }),
                w = Object.freeze({ RESET: 0, PENDING: 1, PAUSED: 2, SUCCEEDED: 3, FAILED: 4 }),
                T = {};
            function O(t) {
                try {
                    return JSON.parse(t.responseText);
                } catch (t) {
                    return null;
                }
            }
        },
        936386: (t) => {
            function e(t, e, i) {
                var s, n, r, o, a;
                function h() {
                    var d = Date.now() - o;
                    d < e && d >= 0 ? (s = setTimeout(h, e - d)) : ((s = null), i || ((a = t.apply(r, n)), (r = n = null)));
                }
                null == e && (e = 100);
                var d = function () {
                    (r = this), (n = arguments), (o = Date.now());
                    var d = i && !s;
                    return s || (s = setTimeout(h, e)), d && ((a = t.apply(r, n)), (r = n = null)), a;
                };
                return (
                    (d.clear = function () {
                        s && (clearTimeout(s), (s = null));
                    }),
                    (d.flush = function () {
                        s && ((a = t.apply(r, n)), (r = n = null), clearTimeout(s), (s = null));
                    }),
                    d
                );
            }
            (e.debounce = e), (t.exports = e);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53.49510b8a.js.map

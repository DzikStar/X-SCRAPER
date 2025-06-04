"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Typeahead-38c57b44"],
    {
        19697: (e, t, i) => {
            i.d(t, { q8: () => c, $i: () => o });
            i(571372);
            var n = i(790187);
            const r = (e, t) => {
                const i = document.createElement("canvas");
                (i.width = e), (i.height = t);
                const n = i.getContext("2d");
                return (n.fillStyle = "#FFFFFF"), n.fillRect(0, 0, e, t), i;
            };
            function o(e, t, i, r, o) {
                return h(t, i).then(
                    (t) => (
                        (function (e, t, i, r, o, a) {
                            const s = a || { top: 0, left: 0, width: t.width, height: t.height };
                            let h = s.left,
                                c = s.top,
                                l = s.width,
                                d = s.height,
                                g = 0,
                                u = 0,
                                w = i,
                                f = r;
                            switch ((e.save(), o)) {
                                case n.Z.TOP_RIGHT:
                                    e.scale(-1, 1), (h = t.width - s.width - s.left), (g = -i);
                                    break;
                                case n.Z.BOTTOM_RIGHT:
                                    e.rotate(Math.PI), (h = t.width - s.width - s.left), (c = t.height - s.height - s.top), (g = -i), (u = -r);
                                    break;
                                case n.Z.BOTTOM_LEFT:
                                    e.scale(1, -1), (c = t.height - s.height - s.top), (u = -r);
                                    break;
                                case n.Z.LEFT_TOP:
                                    e.translate(i / 2, r / 2), e.rotate(-Math.PI / 2), e.scale(-1, 1), (h = s.top), (c = s.left), (l = s.height), (d = s.width), (g = -r / 2), (u = -i / 2), (w = r), (f = i);
                                    break;
                                case n.Z.LEFT_BOTTOM:
                                    e.translate(i / 2, r / 2), e.rotate(Math.PI / 2), (h = s.top), (c = t.height - s.width - s.left), (l = s.height), (d = s.width), (g = -r / 2), (u = -i / 2), (w = r), (f = i);
                                    break;
                                case n.Z.RIGHT_BOTTOM:
                                    e.translate(i / 2, r / 2), e.rotate(Math.PI / 2), e.scale(-1, 1), (h = t.width - s.height - s.top), (c = t.height - s.width - s.left), (l = s.height), (d = s.width), (g = -r / 2), (u = -i / 2), (w = r), (f = i);
                                    break;
                                case n.Z.RIGHT_TOP:
                                    e.translate(i / 2, r / 2), e.rotate(-Math.PI / 2), (h = t.width - s.height - s.top), (c = s.left), (l = s.height), (d = s.width), (g = -r / 2), (u = -i / 2), (w = r), (f = i);
                            }
                            e.drawImage(t, h, c, l, d, g, u, w, f), e.restore();
                        })(t.getContext("2d"), e, t.width, t.height, r, o),
                        t
                    ),
                );
            }
            const a = 3145728,
                s = 5242880;
            function h(e, t) {
                if (window.CanvasRenderingContext2D) {
                    const i = r(e, t);
                    return c(i)
                        .then(() => i)
                        .catch(() => {
                            const i = e * t;
                            if (i > s) {
                                const i = l(s, e, t);
                                return h(i.width, i.height);
                            }
                            if (i > a) {
                                const i = l(a, e, t);
                                return h(i.width, i.height);
                            }
                            throw Error("Could not create valid canvas for resizing");
                        });
                }
                return Promise.reject(Error("Canvas is not supported in this browser"));
            }
            function c(e) {
                return new Promise((t, i) => {
                    const n = e.toDataURL("image/jpeg");
                    n && "data:," !== n ? t(n) : i(new Error("Malformed canvas"));
                });
            }
            function l(e, t, i) {
                const n = Math.sqrt((e * i) / t),
                    r = (t * n) / i;
                return { height: Math.floor(n), width: Math.floor(r) };
            }
        },
        790187: (e, t, i) => {
            i.d(t, { C: () => o, Z: () => n });
            i(694898), i(38857), i(540171), i(157093), i(265688), i(270315), i(592529), i(86943), i(691157);
            const n = Object.freeze({ UNKNOWN: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, LEFT_TOP: 5, LEFT_BOTTOM: 6, RIGHT_BOTTOM: 7, RIGHT_TOP: 8 }),
                r = (e, t, i = 65536) => {
                    let n = new Uint8Array([]),
                        r = 0;
                    function o(o, a, s) {
                        const h = o - r,
                            c = h + a;
                        if (h >= 0 && c <= n.length) s(n.subarray(h, c), o);
                        else {
                            const h = new FileReader();
                            (h.onload = function () {
                                (n = new Uint8Array(this.result)), (r = o), s(n.subarray(0, a), o);
                            }),
                                (h.onerror = t.bind(null, 0)),
                                null !== e && h.readAsArrayBuffer(e.slice(o, o + Math.max(i, a)));
                        }
                    }
                    function a(e) {
                        const i = { "MM\0*": !0, "II*\0": !1 }[String.fromCharCode.apply(null, e.subarray(0, 4))];
                        if (void 0 === i) return void t(0);
                        function n(t, n) {
                            let r = 0;
                            for (let o = 0; o < n; o++) r = (r << 8) + e[t + (i ? o : n - 1 - o)];
                            return r;
                        }
                        const r = e.length > 8 && n(4, 4);
                        if (!r || r + 2 > e.length) return void t(0);
                        let o = n(r, 2);
                        if (r + 12 * o + 6 > e.length) return void t(0);
                        let a = r + 2;
                        for (; o > 0; ) {
                            if (((o -= 1), 274 === n(a, 2) && 3 === n(a + 2, 2) && 1 === n(a + 4, 4))) return void t(n(a + 8, 2));
                            a += 12;
                        }
                        t(0);
                    }
                    e instanceof Blob
                        ? o(0, 10, function e(i, n) {
                              const r = i[1];
                              if (i.length < 4 || 255 !== i[0] || 217 === r) return void t(0);
                              const s = r < 208 || r > 217 ? (i[2] << 8) + i[3] : 0;
                              225 === r && s > 8 && "Exif\0\0" === String.fromCharCode.apply(null, i.subarray(4, 10)) ? o(n + 10, s - 8, a) : o(n + 2 + s, 10, e);
                          })
                        : t(0);
                },
                o = (e, t) => {
                    const i = document.documentElement && "from-image" === getComputedStyle(document.documentElement).imageOrientation;
                    return new Promise((o) => {
                        i
                            ? o(n.TOP_LEFT)
                            : r(
                                  e,
                                  (e) => {
                                      o(e);
                                  },
                                  t,
                              );
                    });
                };
        },
        276259: (e, t, i) => {
            i.d(t, { Lw: () => r, Re: () => d, VJ: () => s, ZF: () => g, hv: () => h, ku: () => n, qp: () => o, uv: () => a, v5: () => l });
            i(571372), i(875640), i(694898), i(38857), i(540171), i(157093), i(265688), i(270315), i(592529), i(86943), i(691157), i(543673), i(240753), i(128399);
            function n(e) {
                const t = e.match(/=*$/);
                return t ? Math.floor(0.75 * (e.length - t[0].length)) : 0.75 * e.length;
            }
            function r(e) {
                return new Promise((t, i) => {
                    const n = e.split(/data:|;base64,/);
                    if (Blob)
                        if (3 !== n.length) i(Error("Invalid dataUri"));
                        else if (atob)
                            if (Uint8Array) {
                                const [, e, i] = n,
                                    r = atob(i),
                                    o = r.length,
                                    a = Array(o);
                                for (let e = 0; e < o; e++) a[e] = r.charCodeAt(e);
                                t(new Blob([new Uint8Array(a)], { type: e }));
                            } else i(Error("The Uint8Array type is not available"));
                        else i(Error("The atob API is not available"));
                    else i(Error("The Blob API is not available"));
                });
            }
            const o = (e, t) =>
                    new Promise((i, n) => {
                        const r = new FileReader();
                        t &&
                            (t.signal.onabort = () => {
                                r.abort?.(), n(Error(g));
                            }),
                            (r.onload = (e) => {
                                e.target instanceof FileReader && e.target.result instanceof ArrayBuffer ? i(e.target.result) : n(Error("The FileReader result was not of type ArrayBuffer"));
                            }),
                            (r.onerror = (e) => {
                                n(e);
                            }),
                            r.readAsArrayBuffer(e);
                    }),
                a = (e, t) => {
                    const i = document.createElement("a");
                    (i.href = e), (i.download = t), (i.target = "_blank"), i.click(), i.remove();
                },
                s = (e) =>
                    ((e) =>
                        new Promise((t) => {
                            const i = new Image();
                            (i.onload = function () {
                                const e = document.createElement("canvas");
                                (e.width = i.width), (e.height = i.height), e.getContext("2d").drawImage(i, 0, 0), e.toBlob((e) => t(e), "image/png");
                            }),
                                (i.crossOrigin = "anonymous"),
                                (i.src = e);
                        }))(e).then((e) => navigator.clipboard.write([new ClipboardItem({ "image/png": e })])),
                h = async (e, t) => {
                    if (e.size <= t) return e;
                    let i = e,
                        n = 1;
                    for (; i && i.size > t; )
                        try {
                            n > 0.2 ? ((n *= 0.7), (i = await c(i, 1, n))) : (i = await c(i, 0.7, n));
                        } catch (e) {
                            i = void 0;
                        }
                    return i;
                },
                c = (e, t, i) =>
                    new Promise((n, r) => {
                        const o = new Image();
                        (o.onload = () => {
                            const e = document.createElement("canvas"),
                                r = e.getContext("2d"),
                                a = o.width * t,
                                s = o.height * t;
                            (e.width = a),
                                (e.height = s),
                                r.drawImage(o, 0, 0, a, s),
                                e.toBlob(
                                    (e) => {
                                        n(new File([e], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    i,
                                );
                        }),
                            (o.onerror = () => r(new Error("Failed to load image while resizing"))),
                            (o.src = URL.createObjectURL(e));
                    }),
                l = ["image/jpeg", "image/png", "image/webp"],
                d = "image/gif",
                g = "Reading aborted";
        },
        364837: (e, t, i) => {
            i.d(t, { R: () => c });
            var n = i(19697),
                r = i(549755),
                o = i(205074);
            const a = 1,
                s = 2,
                h = 3,
                c = (e) => {
                    if ((0, o.DS)(e)) {
                        if (e.isGif) {
                            const { height: t, img: i, orientation: o, width: a } = e;
                            return (0, n.$i)(i, a, t, o).then(
                                (e) => (0, n.q8)(e),
                                (e) => {
                                    throw new r.Z("Gif preview could not be generated", h);
                                },
                            );
                        }
                        {
                            const e = new r.Z("The provided image must be a gif", s);
                            return Promise.reject(e);
                        }
                    }
                    {
                        const e = new r.Z("The provided file is not a valid image", a);
                        return Promise.reject(e);
                    }
                };
        },
        549755: (e, t, i) => {
            i.d(t, { Z: () => n });
            i(571372);
            class n extends Error {
                constructor(e, t, i) {
                    super(e), (this.code = t), (this.type = i || null);
                }
            }
        },
        205074: (e, t, i) => {
            i.d(t, { DS: () => s, ZP: () => h });
            i(543673), i(240753), i(128399);
            var n = i(790187),
                r = i(276259),
                o = i(122123);
            function a(e, t) {
                const i = (function (e) {
                        return [n.Z.LEFT_BOTTOM, n.Z.LEFT_TOP, n.Z.RIGHT_BOTTOM, n.Z.RIGHT_TOP].indexOf(e) >= 0;
                    })(t),
                    [r, o] = i ? [e.height, e.width] : [e.width, e.height];
                return { width: r, height: o };
            }
            const s = (e) => {
                const t = e instanceof h,
                    i = e.isImage || e.isGif,
                    n = e.orientation,
                    r = e.width && e.height,
                    o = e.img;
                return !!(t && i && n && r && o);
            };
            class h {
                constructor(e) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type), (this.url = window.URL.createObjectURL(this.fileHandle)), (this.isGif = this.type === r.Re), (this.isImage = r.v5.some((e) => e === this.type)), (this.isVideo = !1), (this.isSubtitles = !1);
                }
                withDimensionsAndOrientation() {
                    return this.isGif || this.isImage
                        ? (0, o.po)(this.url).then((e) => {
                              const t = (t) => {
                                  const { height: i, width: n } = a(e, t);
                                  return (this.img = e), (this.width = n), (this.height = i), (this.orientation = t), this;
                              };
                              return (0, n.C)(this.fileHandle)
                                  .then((e) => t(e === n.Z.UNKNOWN ? n.Z.TOP_LEFT : e))
                                  .catch(() => t(n.Z.TOP_LEFT));
                          })
                        : Promise.resolve(this);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        122123: (e, t, i) => {
            i.d(t, { gK: () => r, o2: () => a, po: () => o });
            var n = i(549755);
            const r = { type: "image-load", NO_DIMENSIONS: 1, LOAD_FAILED: 2 };
            function o(e) {
                return new Promise((t, i) => {
                    const o = (e, t) => {
                            const o = new n.Z(e, t, r.type);
                            i(o);
                        },
                        a = new Image();
                    (a.onload = () => {
                        a.width && a.height ? t(a) : o("Image lacks height or width", r.NO_DIMENSIONS);
                    }),
                        (a.onerror = () => {
                            o("Error loading image", r.LOAD_FAILED);
                        }),
                        (a.src = e);
                });
            }
            function a(e) {
                return new Promise((t, i) => {
                    const o = (e, t) => {
                            const o = new n.Z(e, t, r.type);
                            i(o);
                        },
                        a = new Image();
                    a.setAttribute("crossorigin", "anonymous"),
                        (a.onload = () => {
                            if (a.width && a.height) {
                                const e = document.createElement("canvas"),
                                    i = e.getContext("2d");
                                (e.width = a.width),
                                    (e.height = a.height),
                                    i.drawImage(a, 0, 0),
                                    e.toBlob((e) => {
                                        if (e) {
                                            const i = new File([e], "file.jpg", { type: "image/jpeg" });
                                            t(i);
                                        } else o("Failed to convert image to blob", r.LOAD_FAILED);
                                    }, "image/jpeg");
                            } else o("Image lacks height or width", r.NO_DIMENSIONS);
                        }),
                        (a.onerror = () => {
                            o("Error loading image", r.LOAD_FAILED);
                        }),
                        (a.src = e);
                });
            }
        },
        514354: (e, t, i) => {
            i.d(t, { Q: () => h, S: () => s });
            var n = i(332775),
                r = i.n(n),
                o = i(276259),
                a = i(549755);
            const s = { ERROR_READING_IMAGE_FILE: 0, HASHING_ABORTED: 1, INVALID_HASH: 2 },
                h = (e, t) =>
                    (0, o.qp)(e, t)
                        .catch((e) => {
                            throw new a.Z(`An error occurred while reading the image file: ${e}`, e.message === o.ZF ? s.HASHING_ABORTED : s.ERROR_READING_IMAGE_FILE);
                        })
                        .then((e) => {
                            const t = r()(e);
                            if (t && "string" == typeof t) return t;
                            throw new a.Z("Hash is not a non-empty string", s.INVALID_HASH);
                        });
        },
        653843: (e, t, i) => {
            i.d(t, { Y7: () => u, ZP: () => _, m2: () => T });
            var n = i(19697),
                r = i(790187),
                o = i(549755),
                a = i(205074),
                s = i(276259);
            function h(e, { maxDimension: t, maxFileSize: i, targetQuality: n }) {
                return (function (e, t, i, n) {
                    function r(o, a) {
                        return c(e, e.width, e.height, o, a).then((e) => {
                            const h = e.width > i || e.height > i,
                                c = e.toDataURL("image/jpeg", n),
                                l = c.split(";base64,")[1],
                                d = (0, s.ku)(l);
                            if (h || d > t) {
                                let e = 0.8;
                                return h && (e = o > a ? i / o : i / a), r(o * e, a * e);
                            }
                            return c;
                        });
                    }
                    return r(e.width, e.height);
                })(e, i, t, n).then(s.Lw);
            }
            function c(e, t, i, r, o) {
                const a = t / 2,
                    s = i / 2;
                return e instanceof HTMLCanvasElement && t <= r && i <= o ? Promise.resolve(e) : a <= r && s <= o ? (0, n.$i)(e, r, o) : (0, n.$i)(e, a, s).then((e) => c(e, e.width, e.height, r, o));
            }
            const l = 5242880,
                d = 4096,
                g = 0.85,
                u = { GIF_IS_TOO_LARGE: 1, CANNOT_BE_PROCESSED: 2, FILE_IS_NOT_AN_IMAGE: 3 },
                w = (e) => e.orientation !== r.Z.TOP_LEFT && e.orientation !== r.Z.UNKNOWN,
                f = (e, t = l, i = d) => {
                    const { height: n, size: r, width: o } = e;
                    return o > i || n > i || r > t;
                },
                m = (e, t) => t || { top: 0, left: 0, width: e.width, height: e.height },
                p = (e, t) => {
                    const { height: i, left: n, top: r, width: o } = m(e, t);
                    return !(0 === r && 0 === n && o === e.width && i === e.height);
                };
            function T(e, t) {
                const { maxFileSize: i = l, maxDimension: n = d, cropData: r, jpgPixelsPerByteForResize: o } = t || {},
                    a = "image/jpeg" === e.type,
                    s = (e.width * e.height) / e.size;
                return w(e) || f(e, i, n) || p(e, r) || (a && !!o && s < o);
            }
            const O = (e, t) => {
                    const { height: i, width: n } = e;
                    return n <= t && i <= t ? { width: n, height: i } : n > i ? { width: t, height: Math.round(i / (n / t)) } : { width: Math.round(n / (i / t)), height: t };
                },
                I = (e) => ("function" == typeof e.decode ? e.decode() : Promise.resolve());
            function _(e, t) {
                const { maxFileSize: i = l, maxDimension: r = d, targetQuality: s = g, cropData: c } = t || {},
                    w = m(e, c);
                if (!T(e, t)) return Promise.resolve(e.fileHandle);
                if (!(0, a.DS)(e)) {
                    const e = new o.Z("The provided file is not a valid image", u.FILE_IS_NOT_AN_IMAGE);
                    return Promise.reject(e);
                }
                if (e.isGif) {
                    const e = new o.Z("Gifs cannot be processed.", u.GIF_IS_TOO_LARGE);
                    return Promise.reject(e);
                }
                const f = (e) => h(e, { maxFileSize: i, maxDimension: r, targetQuality: s });
                return e
                    .withDimensionsAndOrientation()
                    .then(({ img: e, orientation: t }) => {
                        const i = ({ height: i, width: r }) => (0, n.$i)(e, r, i, t, w);
                        return I(e)
                            .then(() => ((e) => e(O(w, r)))(i))
                            .then(f);
                    })
                    .catch(() => {
                        const e = new o.Z("Image cannot be processed", u.CANNOT_BE_PROCESSED);
                        return Promise.reject(e);
                    });
            }
        },
        465233: (e, t, i) => {
            i.d(t, { Z: () => r });
            var n = i(716406);
            function r(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(r) : (0, n.Z)(e, (e) => r(e));
            }
        },
        459643: (e, t, i) => {
            i.d(t, { Z: () => n });
            const n = (e) => () => e;
        },
        666536: (e, t, i) => {
            i.d(t, { Z: () => o });
            var n = i(936386),
                r = i.n(n);
            const o = (e, t, i) => r()(e, t, i);
        },
        662678: (e, t, i) => {
            i.d(t, { G: () => r, Z: () => n });
            i(136728);
            const n = function (e, t) {
                return r(e, t);
            };
            function r(e, t) {
                return e.reduce(
                    (i, n, r) => {
                        const o = t ? t(n, r, e) : !!n;
                        return o && i[0].push(n), !o && i[1].push(n), i;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Typeahead-38c57b44.cda3e42a.js.map

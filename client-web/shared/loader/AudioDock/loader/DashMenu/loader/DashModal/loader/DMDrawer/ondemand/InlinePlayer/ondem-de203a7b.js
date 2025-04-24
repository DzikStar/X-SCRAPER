"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-de203a7b"],
    {
        159573: (e, t, n) => {
            n.d(t, { z: () => s });
            var i = n(401013);
            class s {
                constructor() {
                    this._queue = new i.c();
                }
                isEmpty() {
                    return this._queue.isEmpty();
                }
                enqueue(e) {
                    const t = this._queue,
                        n = t.isEmpty();
                    t.enqueue(e), n && this._dequeue();
                }
                _dequeue() {
                    const e = this._queue,
                        t = e.peek();
                    t &&
                        t().finally(() => {
                            e.dequeue(), this._dequeue();
                        });
                }
            }
        },
        101879: (e, t, n) => {
            n.d(t, { Z: () => i });
            n(202784), n(163301), n(443781);
            const i = (e, t) => e;
        },
        946208: (e, t, n) => {
            n.d(t, { Id: () => i, ZP: () => r, h_: () => s });
            n(543673), n(240753), n(128399);
            const i = [".srt", "text/plain", ""],
                s = (e) => -1 !== i.indexOf(e.type),
                o = (e) =>
                    `WEBVTT FILE\r\n\r\n${e
                        .replace(/\{\\([ibu])\}/g, "</$1>")
                        .replace(/\{\\([ibu])1\}/g, "<$1>")
                        .replace(/\{([ibu])\}/g, "<$1>")
                        .replace(/\{\/([ibu])\}/g, "</$1>")
                        .replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2")
                        .replace(/\r\n\{\\an8\}/g, " line:5%\r\n")}`;
            class r {
                constructor(e) {
                    (this.fileHandle = new Blob([e], { type: "text/plain charset=UTF-8" })),
                        e instanceof File && (this.name = e.name),
                        (this.size = e.size),
                        (this.type = this.fileHandle.type),
                        (this.url = window.URL.createObjectURL(this.fileHandle)),
                        this.fileHandle.text &&
                            this.fileHandle.text().then((e) => {
                                this.vtt = URL.createObjectURL(new Blob([o(e)], { type: "text/plain charset=UTF-8" }));
                            }),
                        (this.isVideo = !1),
                        (this.isImage = !1),
                        (this.isGif = !1),
                        (this.isSubtitles = !0);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url) && window.URL.revokeObjectURL(this.vtt);
                }
            }
        },
        934871: (e, t, n) => {
            n.d(t, { HO: () => D, RY: () => h, Ux: () => v, VQ: () => d, _e: () => f, cf: () => m, eR: () => I, fx: () => y, jq: () => l, nq: () => g, rW: () => a, yw: () => E });
            var i = n(202784),
                s = n(400752),
                o = n(565058),
                r = n(536387),
                c = n(526250),
                u = n(856824);
            function d() {
                !(function () {
                    const e = (0, s.b9)(_);
                    i.useEffect(() => e(), [e]);
                })(),
                    (function () {
                        const e = (0, s.b9)(O);
                        i.useEffect(() => e(), [e]);
                    })(),
                    (0, c.N)(M);
            }
            function a() {
                return (0, s.Dv)(k);
            }
            function l() {
                return (0, s.Dv)(g);
            }
            function v() {
                return (0, s.Dv)(b);
            }
            function h() {
                return (0, s.b9)(I);
            }
            function f() {
                return (0, s.b9)(A);
            }
            function p() {
                return (0, u.GQ)()
                    .enumerateDevices()
                    .then((e) => e.filter(({ kind: e }) => "videoinput" === e));
            }
            const m = (0, r.K9)(
                    (e) => (
                        e(k),
                        (0, u.GQ)()
                            .enumerateDevices()
                            .then((e) => e.filter(({ kind: e }) => "videoinput" === e))
                    ),
                ),
                w = (0, o.cn)(null, (e, t) => {
                    t(m);
                }),
                b = (0, o.cn)(!1),
                g = (0, o.cn)(),
                y = (0, o.cn)(),
                D = (0, o.cn)(null, (e, t, n) => {
                    const i = e(g);
                    return (
                        i?.stop(),
                        t(y, n),
                        t(b, !0),
                        (function (e) {
                            return (0, u.GQ)()
                                .getUserMedia({ video: { width: 1280, height: 720, facingMode: "user", deviceId: e.deviceId } })
                                .then((e) => e.getVideoTracks()[0]);
                        })(n)
                            .then(
                                (i) => {
                                    e(y) === n
                                        ? (t(g, i),
                                          n.label ||
                                              (t(w),
                                              p().then((e) => {
                                                  t(y, e[0]);
                                              })))
                                        : i.stop();
                                },
                                () => {
                                    t(g, void 0);
                                },
                            )
                            .finally(() => {
                                t(b, !1);
                            })
                    );
                }),
                E = (0, o.cn)(null, (e, t) => {
                    const n = t(A);
                    return n instanceof Promise ? n.then(() => e(g)) : Promise.resolve(e(g));
                }),
                L = (0, o.cn)(null, async (e, t) => {
                    let n = await p();
                    if (n.length && (n[0].deviceId || (await t(D, n[0]), !e(g))) && ((n = await p()), n[0]?.deviceId)) for (const i of n) if ((await t(D, i), e(g))) break;
                }),
                A = (0, o.cn)(null, (e, t) => {
                    if (!e(g)) return t(L);
                }),
                I = (0, o.cn)(null, (e, t) => {
                    const n = e(g);
                    n && (n.stop(), t(g, void 0), t(y, void 0));
                }),
                _ = (0, u._D)(w),
                { isPermissionDeniedAtom: k, listenPermissionStateAtom: O } = (0, u.Cv)("camera");
            const M = (0, u.wc)(g);
        },
        856824: (e, t, n) => {
            n.d(t, { Cv: () => d, GQ: () => u, XI: () => v, _D: () => l, wc: () => a });
            n(571372);
            var i = n(565058),
                s = n(516951),
                o = n(2138),
                r = n(526250),
                c = n(563781);
            function u() {
                if (!navigator.mediaDevices) throw new Error("navigator.mediaDevices was not found");
                return navigator.mediaDevices;
            }
            function d(e) {
                const t = (0, i.cn)("prompt"),
                    n = (0, i.cn)((e) => "denied" === e(t));
                return {
                    listenPermissionStateAtom: (0, i.cn)(null, (n, i) => {
                        let s = !0;
                        return (
                            navigator.permissions?.query({ name: e }).then(
                                (e) => {
                                    s &&
                                        (i(t, e.state),
                                        e.addEventListener("change", () => {
                                            i(t, e.state);
                                        }));
                                },
                                () => {},
                            ),
                            () => {
                                s = !1;
                            }
                        );
                    }),
                    isPermissionDeniedAtom: n,
                };
            }
            function a(e, t) {
                return (0, r.v)((n, i) => {
                    const o = n(e);
                    if (!o) return s.Z;
                    const r = () => {
                        i(e, void 0), t && i(t);
                    };
                    return (
                        o.addEventListener("ended", r),
                        () => {
                            o.removeEventListener("ended", r);
                        }
                    );
                });
            }
            function l(e) {
                return (0, i.cn)(null, (t, n) => {
                    const i = (0, o.Z)(
                        (t) => {
                            n(e);
                        },
                        500,
                        { trailing: !0 },
                    );
                    return (
                        u().addEventListener("devicechange", i),
                        () => {
                            u().removeEventListener("devicechange", i);
                        }
                    );
                });
            }
            function v(e) {
                const t = (0, c.O)((t) => t(e())?.muted),
                    n = (0, r.v)((n, i) => {
                        const o = n(e());
                        if (!o) return s.Z;
                        const r = () => i(t);
                        return (
                            o.addEventListener("mute", r),
                            o.addEventListener("unmute", r),
                            () => {
                                o.removeEventListener("mute", r), o.removeEventListener("unmute", r);
                            }
                        );
                    });
                return { isMutedAtom: t, isMutedEffectAtom: n };
            }
        },
        309487: (e, t, n) => {
            n.d(t, { W: () => r });
            var i = n(934871),
                s = n(254810),
                o = n(251836);
            function r() {
                (0, s.LA)(), (0, i.VQ)(), (0, o.vr)();
            }
        },
        254810: (e, t, n) => {
            n.d(t, { Ao: () => D, LA: () => a, LK: () => l, Qc: () => _, Qf: () => O, Vv: () => A, dB: () => m, fm: () => w, fx: () => g, jq: () => G, lc: () => x, pL: () => L, vl: () => h });
            var i = n(202784),
                s = n(400752),
                o = n(565058),
                r = n(536387),
                c = n(526250),
                u = n(563781),
                d = n(856824);
            function a() {
                !(function () {
                    const e = (0, s.b9)(R);
                    i.useEffect(() => e(), [e]);
                })(),
                    (function () {
                        const e = (0, s.b9)(U);
                        i.useEffect(() => e(), [e]);
                    })(),
                    (0, c.N)(P),
                    (0, c.N)(Q);
            }
            function l() {
                return (0, s.Dv)(q);
            }
            function v() {
                return (0, d.GQ)()
                    .enumerateDevices()
                    .then((e) => {
                        const t = window.location.pathname.startsWith("/i/conferences-room");
                        return e.find(({ deviceId: e, kind: n, label: i }) => "audioinput" === n && !(t && i.includes("Logitech Tap")));
                    });
            }
            const h = (0, r.K9)(
                    (e) => (
                        e(q),
                        (0, d.GQ)()
                            .enumerateDevices()
                            .then((e) => e.filter(({ kind: e }) => "audioinput" === e))
                    ),
                ),
                f = (0, o.cn)(null, (e, t) => {
                    t(h);
                }),
                p = (0, o.cn)(!1),
                m = (0, o.cn)(),
                w = (0, o.cn)((e) => !!e(m)),
                b = (0, o.cn)(!0),
                g = (0, o.cn)(),
                y = (0, o.cn)(null, (e, t) =>
                    v().then((n) => {
                        const i = e(g);
                        if (n && n.label !== i?.label) return t(D, n);
                    }),
                ),
                D = (0, o.cn)(null, (e, t, n) => {
                    const i = e(m);
                    i?.stop(), t(g, n), t(p, !0);
                    const s = e(_);
                    return (function (e, { noiseSuppression: t }) {
                        return (0, d.GQ)()
                            .getUserMedia({ audio: { deviceId: e.deviceId, autoGainControl: !0, noiseSuppression: t, voiceIsolation: !0, echoCancellation: !0 } })
                            .then((e) => e.getAudioTracks()[0]);
                    })(n, { noiseSuppression: s })
                        .then(
                            (i) => {
                                e(g) === n
                                    ? (t(m, i),
                                      n.label ||
                                          (t(f),
                                          v().then((e) => {
                                              t(g, e);
                                          })))
                                    : i.stop();
                            },
                            () => {
                                t(m, void 0);
                            },
                        )
                        .finally(() => {
                            t(p, !1);
                        });
                }),
                E = (0, u.O)((e) => e(m)?.enabled),
                L = (0, o.cn)(
                    (e) => e(E),
                    (e, t, n) => {
                        const i = e(m);
                        if (i) (i.enabled = n), t(E);
                        else if (n) return t(I);
                    },
                ),
                A = (0, o.cn)(null, (e, t) => {
                    const n = t(k);
                    return n instanceof Promise ? n.then(() => e(m)) : Promise.resolve(e(m));
                }),
                I = (0, o.cn)(null, (e, t) =>
                    v().then((e) => {
                        if (e) return t(D, e);
                    }),
                ),
                _ = (0, o.cn)(
                    (e) => e(b),
                    (e, t, n) => {
                        t(b, n);
                        if (e(m)) {
                            const n = e(g);
                            n && t(D, n);
                        }
                    },
                ),
                k = (0, o.cn)(null, (e, t) => t(L, !0)),
                O = (0, o.cn)(null, (e, t) => {
                    const n = e(m);
                    n && (n.stop(), t(m, void 0), t(g, void 0));
                }),
                M = (0, o.cn)(null, (e, t) => {
                    const n = e(g);
                    "default" === n?.deviceId && t(y), t(f);
                }),
                R = (0, d._D)(M),
                { isPermissionDeniedAtom: q, listenPermissionStateAtom: U } = (0, d.Cv)("microphone");
            const P = (0, d.wc)(m, y);
            const { isMutedAtom: S, isMutedEffectAtom: Q } = (0, d.XI)(() => m);
            const x = (0, o.cn)((e) => !e(m) || e(S) || !e(L)),
                G = (0, o.cn)((e) => !!(e(m) && e(S) && e(L)));
        },
        251836: (e, t, n) => {
            n.d(t, { Db: () => h, Mr: () => m, Qh: () => A, cj: () => v, eC: () => l, mb: () => p, qp: () => b, vE: () => g, vr: () => a });
            var i = n(400752),
                s = n(565058),
                o = n(526250),
                r = n(563781),
                c = n(509599),
                u = n(856824),
                d = n(122411);
            function a() {
                (0, o.N)(y), (0, o.N)(D), (0, o.N)(L);
            }
            function l() {
                return (0, i.Dv)(p);
            }
            function v() {
                return (0, i.Dv)(f);
            }
            function h() {
                return "getDisplayMedia" in (0, u.GQ)();
            }
            const f = (0, s.cn)(!1),
                p = (0, s.cn)(),
                m = (0, s.cn)(),
                w = (0, r.O)((e) => e(m)?.enabled),
                b = (0, s.cn)(
                    null,
                    (e, t) => (
                        t(f, !0),
                        (0, u.GQ)()
                            .getDisplayMedia({ video: { width: { ideal: 1920 }, height: { ideal: 1080 } }, audio: (0, d.w8)() })
                            .then(
                                (n) => {
                                    e(p)?.stop(), e(m)?.stop();
                                    const i = n.getVideoTracks()[0],
                                        s = n.getAudioTracks()[0];
                                    e(c.C) && i.applyConstraints({ frameRate: { min: 15 } }), t(p, i), t(m, s);
                                },
                                () => {},
                            )
                            .finally(() => {
                                t(f, !1);
                            })
                    ),
                ),
                g = (0, s.cn)(null, (e, t) => {
                    e(p)?.stop(), e(m)?.stop(), t(p, void 0), t(m, void 0);
                }),
                y = (0, u.wc)(p),
                D = (0, u.wc)(m);
            const { isMutedAtom: E, isMutedEffectAtom: L } = (0, u.XI)(() => m);
            const A = (0, s.cn)((e) => !e(m) || e(E) || !e(w));
        },
        122411: (e, t, n) => {
            n.d(t, { Jg: () => c, kq: () => h, w8: () => d, zw: () => l });
            var i = n(565058),
                s = n(752624),
                o = n(516951),
                r = n(420182);
            function c() {
                return u();
            }
            function u() {
                return "AudioContext" in window;
            }
            function d() {
                return c();
            }
            const a = (0, i.cn)(!1),
                l = (0, i.cn)((e) => {
                    if (!f) {
                        const { unsubscribe: t } = v.subscribe(() => {
                            t(), e(r.zE).set(a, f);
                        });
                        return e(a);
                    }
                    return !0;
                }),
                v = new s.Z();
            let h = o.Z,
                f = !1;
            if (u()) {
                h = (function (e) {
                    let t;
                    return () => (t || (t = { value: e() }), t.value);
                })(() => new AudioContext());
                const e = () => {
                    h()?.resume(), (f = !0), v.notify();
                };
                window.addEventListener("click", e, { once: !0 });
            }
        },
        540387: (e, t, n) => {
            n.d(t, { Wv: () => s, ZP: () => r, hb: () => o, jn: () => i });
            n(571372), n(543673), n(240753), n(128399);
            const i = ["video/mp4", "video/quicktime"],
                s = (e) => -1 !== i.indexOf(e.type),
                o = { type: "video-load", NO_DIMENSIONS: 10, LOAD_FAILED: 11, TOO_LARGE: 12 };
            class r {
                constructor(e, t) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type);
                    try {
                        this.url = window.URL.createObjectURL(this.fileHandle);
                    } catch (e) {
                        this.url = "";
                    }
                    (this.isVideo = !0), (this.isImage = !1), (this.isGif = !1), (this.isSubtitles = !1), (this.isAmplify = !!t);
                }
                withDimensionsAndOrientation(e) {
                    return ((e, t) =>
                        new Promise((n, i) => {
                            const s = (e, t) => {
                                    const n = new Error(e);
                                    (n.code = t), (n.type = o.type), i(n);
                                },
                                r = document.createElement("video");
                            (r.onloadedmetadata = () => {
                                t || (r.videoWidth && r.videoHeight) ? n(r) : s("Video lacks height or width", o.NO_DIMENSIONS);
                            }),
                                (r.onerror = () => {
                                    s("Error loading image", o.LOAD_FAILED);
                                }),
                                (r.src = e);
                        }))(this.url, e).then((e) => {
                        const { duration: t, videoHeight: n, videoWidth: i } = e;
                        return (this.width = i), (this.height = n), (this.duration = t), (this.video = e), (this.isBrowserSupported = !(0 === n || 0 === i)), this;
                    });
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        480599: (e, t, n) => {
            n.d(t, { c: () => c, n: () => u });
            var i = n(565058),
                s = n(459679),
                o = n(536387),
                r = n(790997);
            const c = (0, i.cn)(null, (e, t) => {
                    const n = new Map(),
                        i = new Map(),
                        o = setInterval(() => {
                            const e = t(r.Xm);
                            Promise.all(e.map(([e, t]) => t())).then((o) => {
                                o.map((t, o) => {
                                    const r = t,
                                        c = (0, s.Z)(r, (e) => (("bytesSent" in e && "outbound-rtp" === e.type) || ("bytesReceived" in e && "inbound-rtp" === e.type) ? e : void 0)),
                                        u = c.reduce((e, { bytesReceived: t }) => (t ? t + e : e), 0),
                                        d = c.reduce((e, { bytesSent: t }) => (t ? t + e : e), 0),
                                        [a] = e[o],
                                        l = n.get(a),
                                        v = i.get(a);
                                    if ((n.set(a, d), i.set(a, u), void 0 !== l && void 0 !== v)) {
                                        return [a, { sendingBitrate: 8 * (d - l), receivingBitrate: 8 * (u - v) }];
                                    }
                                    return [a, { sendingBitrate: 0, receivingBitrate: 0 }];
                                }).forEach(([e, n]) => t(u(e), n));
                            });
                        }, 1e3);
                    return () => {
                        clearInterval(o);
                    };
                }),
                u = (0, o.dX)((e) => (0, i.cn)({ receivingBitrate: 0, sendingBitrate: 0 }));
        },
        499573: (e, t, n) => {
            n.d(t, { x: () => i });
            n(136728);
            function i(e) {
                const t = new Map();
                for (const n of [...e.values()]) {
                    (
                        t.get(n.type) ??
                        (() => {
                            const e = [];
                            return t.set(n.type, e), e;
                        })()
                    ).push(n);
                }
                return { get: (e) => t.get(e) ?? [] };
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-de203a7b.9e9e9f0a.js.map

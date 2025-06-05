"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"],
    {
        393134: (e, n, t) => {
            function r() {
                let e = () => {},
                    n = () => {};
                return {
                    promise: new Promise((t, r) => {
                        (e = t), (n = r);
                    }),
                    resolve: e,
                    reject: n,
                };
            }
            t.d(n, { g: () => r });
        },
        297436: (e, n, t) => {
            t.d(n, { E5: () => a, lk: () => d });
            var r = t(450681),
                i = t(275365),
                o = t(162664);
            const c = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} },
                s = (e = [], n = {}) => e.map((e) => ({ ...e, user: (0, o.b)(n[e.user_id]) || { created_at: "", description: "", entities: {}, followed_by: !1, followers_count: 0, following: !1, friends_count: 0, id: parseInt(e.user_id, 10), id_str: e.user_id, name: "", profile_image_url_https: "", protected: !1, screen_name: "", verified: !1 } }));
            function u(e, n) {
                const { entries: t, entryIdsByConversationId: r } = n;
                return (r[e] || []).map((e) => t[e] && t[e].data).filter(Boolean);
            }
            const a = (e, n = c, t) => {
                    const { conversation_id: r, participants: i, ...o } = e;
                    return { conversation_id: r, ...o, entries: n.entryIdsByConversationId[r] || [], participants: s(i, t) };
                },
                d = (e, n, t) => {
                    const { conversation_id: c, participants: a, social_proof: d, ...l } = e,
                        f = { conversation_id: c, ...l, entries: u(c, n), participants: s(a, t), social_proof: void 0 };
                    return (
                        d &&
                            (f.social_proof = ((e = [], n = {}) =>
                                e.map((e) => {
                                    if (e.proof_type === i.UN.MUTUAL_FRIENDS) {
                                        const { users: t, ...i } = e;
                                        return { ...i, users: (0, r.Z)(t.map((e) => (0, o.b)(n[e]))) };
                                    }
                                    return e;
                                }))(d, t)),
                        f
                    );
                };
        },
        234296: (e, n, t) => {
            t.d(n, { Z: () => c, l: () => o });
            var r = t(147143),
                i = t(856674);
            const o = (e, n) => {
                    const t = e.data?.labels?.find((e) => e.label_type === r.w1.PINNED)?.timestamp,
                        i = n.data?.labels?.find((e) => e.label_type === r.w1.PINNED)?.timestamp;
                    return t ? (i ? t - i : -1) : 1;
                },
                c = ({ sort_event_id: e }, { sort_event_id: n }) => (e ? (n ? (0, i.ZP)(n, e) : 1) : -1);
        },
        198506: (e, n, t) => {
            t.d(n, { Z: () => a, R: () => d });
            var r = t(662678),
                i = t(275365),
                o = t(856674);
            const c = (e = 0) => new Date(Number(e)),
                s = (e, n) => c(e.join_time) - c(n.join_time),
                u = ({ user: e }, { user: n }) => (0, o.ZP)(e.id_str, n.id_str),
                a = (e, n) => {
                    const { created_by_user_id: t, participants: o, type: c } = e,
                        [a, d] = (0, r.Z)(o, ({ user: e }) => e.id_str === n);
                    return d.length
                        ? c === i.eD.GROUP && 1 === d.length
                            ? [...a, ...d]
                            : t
                              ? d.sort(
                                    (
                                        (...e) =>
                                        (n, t) =>
                                            e.map((e) => e(n, t)).filter((e) => !!e)[0] || 0
                                    )(
                                        (
                                            (e) =>
                                            ({ user: n }, { user: t }) => {
                                                switch (e) {
                                                    case n.id_str:
                                                        return -1;
                                                    case t.id_str:
                                                        return 1;
                                                    default:
                                                        return 0;
                                                }
                                            }
                                        )(t),
                                        s,
                                        u,
                                    ),
                                )
                              : d
                        : a;
                },
                d = (e, n) => (e.includes("-") ? e.replace(n, "").replace(/[e-]/g, "") : null);
        },
        66242: (e, n, t) => {
            t.d(n, { ZP: () => f, e7: () => v });
            var r = t(976145),
                i = t(111677),
                o = t.n(i),
                c = t(275365),
                s = t(198506);
            const u = o().b5b7fb94,
                a = o().g755fcde,
                d = o().f6b1ff81,
                l = o().j652293d,
                f = (e, n, t, r) => {
                    const { type: i, name: o, participants: a = {} } = e;
                    if (i === c.eD.GROUP && o) return o;
                    if (!a.length) return;
                    if (i === c.eD.GROUP && t) return u;
                    const d = (0, s.Z)(e, n).map(({ user: e }) => e);
                    return v(d, n, i, r);
                },
                v = (e = [], n, t = c.eD.GROUP, i) => {
                    const o = e.filter((e) => e.id_str !== n).map((e) => e.name);
                    switch (o.length) {
                        case 0:
                            return a;
                        case 1: {
                            const [e] = o;
                            return t === c.eD.GROUP ? d({ name: e }) : e;
                        }
                        default: {
                            const e = !0,
                                n = i ? o.slice(0, i) : o,
                                t = (0, r.Z)(n, e),
                                c = i ? Math.max(o.length - i, 0) : 0;
                            return c > 0 ? l({ listOfParticipants: t, count: c }) : t;
                        }
                    }
                };
        },
        495707: (e, n, t) => {
            t.d(n, { E: () => i });
            var r = t(202784);
            function i(e) {
                const n = r.useRef(e);
                (n.current = e),
                    r.useEffect(() => {
                        try {
                            const e = (function () {
                                if ("mediaSession" in navigator) return navigator.mediaSession;
                            })();
                            if (!e) return;
                            const t = n.current;
                            return (
                                e.setActionHandler("enterpictureinpicture", () => {
                                    t();
                                }),
                                () => {
                                    e.setActionHandler("enterpictureinpicture", null);
                                }
                            );
                        } catch {}
                    }, []);
            }
        },
        359127: (e, n, t) => {
            t.d(n, { Q$: () => d, ZQ: () => a, zI: () => u });
            var r = t(202784),
                i = t(928316),
                o = t(392237),
                c = t(398601),
                s = t(392644);
            const u = "documentPictureInPicture" in window;
            function a(e) {
                const { children: n, dpipWindow: t } = e;
                return t ? r.createElement(l, { children: n, dpipWindow: t }) : n;
            }
            async function d(e) {
                const { featureSwitches: n, options: t } = e,
                    r = await window.documentPictureInPicture.requestWindow(t),
                    i = (0, s.Z)(n, o.default.theme.paletteName, r.document);
                return (
                    r.addEventListener("pagehide", () => {
                        i?.();
                    }),
                    await (function (e) {
                        return Promise.all(
                            [...document.styleSheets].map((n) => {
                                try {
                                    const t = [...n.cssRules]
                                            .map(function (e) {
                                                return e.cssText;
                                            })
                                            .join(""),
                                        r = document.createElement("style");
                                    (r.textContent = t), e.document.head?.appendChild(r);
                                } catch (t) {
                                    const r = document.createElement("link");
                                    if (null == n.href) return Promise.resolve();
                                    (r.rel = "stylesheet"), (r.type = n.type), (r.media = n.media.toString()), (r.href = n.href), e.document.head?.appendChild(r);
                                }
                            }),
                        );
                    })(r),
                    { dispose: i, dpip: r }
                );
            }
            function l(e) {
                const { children: n, dpipWindow: t } = e;
                return (0, i.createPortal)(r.createElement(c.Bt, null, n), t.document.body);
            }
        },
        735e3: (e, n, t) => {
            t.d(n, { o: () => i });
            var r = t(459643);
            const i = (0, r.Z)([]);
            (0, r.Z)({});
        },
        585454: (e, n, t) => {
            t.d(n, { h: () => o });
            var r = t(565058),
                i = t(420182);
            function o(e, n, t) {
                return (0, r.cn)(null, (r, o) => {
                    const c = e(),
                        s = r(i.zE);
                    let u = t ? t.initialState : r(c);
                    const a = () => {
                        const e = r(c);
                        u !== e && n(r, o, u, e), (u = e);
                    };
                    t && a();
                    const d = s.sub(c, a);
                    return () => {
                        d(), t && n(r, o, u, t.initialState);
                    };
                });
            }
        },
        811322: (e, n, t) => {
            function r(e) {
                const n = new WeakMap();
                return (t) =>
                    n.get(t) ??
                    (() => {
                        const r = e(t);
                        return n.set(t, r), r;
                    })();
            }
            t.d(n, { X: () => r });
        },
        551423: (e, n, t) => {
            t.d(n, { r: () => i });
            var r = t(565058);
            function i(e) {
                const n = (0, r.cn)(e, (e, t, r) => t(n, r));
                return n;
            }
        },
        563781: (e, n, t) => {
            t.d(n, { O: () => c, u: () => o });
            var r = t(565058),
                i = t(420182);
            function o() {
                const e = (0, r.cn)(0);
                return (0, r.cn)(
                    (n) => (
                        n(e),
                        () => {
                            n(i.zE).set(e, (e) => e + 1);
                        }
                    ),
                    (n, t) => {
                        t(e, (e) => e + 1);
                    },
                );
            }
            function c(e) {
                const n = o();
                return (0, r.cn)(
                    (t) => (t(n), e(t)),
                    (e, t) => {
                        t(n);
                    },
                );
            }
        },
        396636: (e, n, t) => {
            t.d(n, { Q: () => u });
            var r = t(987809),
                i = t(427266),
                o = t(585454),
                c = t(526250),
                s = t(551423);
            function u(e, n) {
                const t = (0, r.xu)((e) => (0, s.r)());
                return (0, o.h)(
                    e,
                    (e, r, i, o) => {
                        const s = new Set(i),
                            u = o.filter((e) => !s.has(e));
                        for (const e of u) {
                            const i = r((0, c.v)(n), e);
                            r(t(e), i);
                        }
                        const a = new Set(o),
                            d = i.filter((e) => !a.has(e));
                        for (const n of d) e(t(n))?.(), r(t(n), void 0);
                    },
                    { initialState: (0, i.dW)([]) },
                );
            }
        },
        908599: (e, n, t) => {
            t.d(n, { Y: () => i });
            var r = t(565058);
            function i(e) {
                const n = (0, r.cn)();
                return (0, r.cn)(
                    (e) => e(n),
                    (t, r, ...i) => {
                        const o = e(t, r, ...i);
                        return r(n, o), o;
                    },
                );
            }
        },
        608925: (e, n, t) => {
            t.d(n, { G: () => i });
            var r = t(585454);
            function i(e, n, t) {
                const i = t?.getKey;
                return (0, r.h)(e, (e, t, r, o) => {
                    const c = new Set(i ? r.map((e) => i(e)) : r),
                        s = o.filter((e) => !c.has(i ? i(e) : e)),
                        u = new Set(i ? o.map((e) => i(e)) : o),
                        a = r.filter((e) => !u.has(i ? i(e) : e));
                    n(e, t, { added: s, removed: a });
                });
            }
        },
        358572: (e, n, t) => {
            t.d(n, { u: () => s });
            var r = t(476984),
                i = t.n(r),
                o = t(565058),
                c = t(420182);
            function s(e) {
                const n = (0, o.cn)();
                return (0, o.cn)((t) => {
                    const r = t(c.zE),
                        o = r.get(n),
                        s = e(t);
                    return r.set(n, s), o && i()(s, o) ? o : s;
                });
            }
        },
        901910: (e, n, t) => {
            t.d(n, { W: () => o });
            var r = t(565058),
                i = t(551423);
            function o(e) {
                const n = (0, r.cn)(0),
                    t = (0, i.r)();
                return (0, r.cn)(
                    null,
                    (r, i, ...o) => (
                        i(n, (e) => e + 1),
                        1 === r(n) && i(t, e(r, i, ...o)),
                        () => {
                            i(n, (e) => e - 1), 0 === r(n) && r(t)?.();
                        }
                    ),
                );
            }
        },
        65178: (e, n, t) => {
            t.d(n, { g: () => i });
            var r = t(565058);
            function i() {
                const e = (0, r.cn)([]),
                    n = (0, r.cn)(null, (n, t, i) => {
                        const o = (0, r.cn)(i);
                        t(e, (e) => e.concat(o));
                        return {
                            dispose: () => {
                                t(e, (e) => e.filter((e) => e !== o));
                            },
                            valueAtom: o,
                        };
                    });
                return { get: (0, r.cn)((n) => n(e).map((e) => n(e))), sub: n };
            }
        },
        24466: (e, n, t) => {
            t.d(n, { L: () => c });
            var r = t(565058),
                i = t(901910),
                o = t(477635);
            function c(e, n) {
                const t = (0, r.cn)(e),
                    c = (0, i.W)((t, r) => {
                        const i = setInterval(() => {
                            r(s, e(t));
                        }, n);
                        return () => clearInterval(i);
                    }),
                    s = (0, o.t)(() => t);
                return { sub: c, value: s };
            }
        },
        477635: (e, n, t) => {
            t.d(n, { t: () => i });
            var r = t(565058);
            function i(e) {
                const n = (0, r.cn)(),
                    t = (0, r.cn)(
                        (t) => {
                            const r = t(n);
                            return r ? r.value : t(e());
                        },
                        (e, r, i) => {
                            r(n, "function" == typeof i ? { value: i(e(t)) } : { value: i });
                        },
                    );
                return t;
            }
        },
        108922: (e, n, t) => {
            t.d(n, { J: () => o });
            var r = t(565058),
                i = t(551423);
            function o(e) {
                const n = (0, i.r)(),
                    t = (0, r.cn)(null, (t, r) => {
                        t(n)?.();
                        const i = setTimeout(() => {
                            r(o, void 0);
                        }, e);
                        r(n, () => {
                            clearTimeout(i);
                        });
                    }),
                    o = (0, r.cn)(void 0, (e, n, r) => {
                        n(o, "function" == typeof r ? r(e(o)) : r), n(t);
                    });
                return o;
            }
        },
        613533: (e, n, t) => {
            t.d(n, { G: () => i });
            var r = t(565058);
            function i(e) {
                const n = (0, r.cn)(() => new Map());
                return (0, r.cn)(null, (t, r, ...i) => {
                    const o = t(n),
                        c = JSON.stringify(i),
                        s = o.get(c);
                    if (s) return s;
                    const u = e(t, r, ...i);
                    return (
                        o.set(c, u),
                        u.finally(() => {
                            o.delete(c);
                        }),
                        u
                    );
                });
            }
        },
        802222: (e, n, t) => {
            t.d(n, { h: () => i });
            t(136728);
            var r = t(565058);
            function i() {
                const e = (0, r.cn)([]);
                return {
                    add: (0, r.cn)(null, (n, t, r) => {
                        t(e, (e) => e.concat(r));
                    }),
                    disposeAll: (0, r.cn)(null, (n, t) => {
                        const r = n(e),
                            i = [];
                        if (
                            (r.forEach((e) => {
                                try {
                                    e();
                                } catch (e) {
                                    i.push(e);
                                }
                            }),
                            t(e, []),
                            i.length)
                        )
                            throw i[0];
                    }),
                };
            }
        },
        513588: (e, n, t) => {
            t.d(n, { J: () => s });
            var r = t(565058),
                i = t(987809),
                o = t(516951);
            const c = (0, i.xu)((e) => (0, r.cn)(() => e, o.Z));
            function s(e) {
                return c(e);
            }
        },
        53317: (e, n, t) => {
            t.d(n, { P: () => c });
            var r = t(202784),
                i = t(400752);
            const o = r.createContext({ isLoading: !1 });
            function c({ children: e, renderAtom: n }) {
                return r.createElement(r.Suspense, { fallback: r.createElement(o.Provider, { value: u }, "function" == typeof e ? e(!0) : e) }, r.createElement(s, { renderAtom: n }), "function" == typeof e ? e(!1) : e);
            }
            function s({ renderAtom: e }) {
                (0, i.Dv)(e);
            }
            const u = { isLoading: !0 };
        },
        530745: (e, n, t) => {
            t.d(n, { Ci: () => A, Ct: () => m, Dd: () => P, Dy: () => g, E4: () => M, EF: () => C, F$: () => d, G0: () => Q, KH: () => S, L_: () => R, NW: () => s, Pf: () => w, QK: () => o, Qs: () => c, R2: () => G, Rv: () => a, Si: () => h, UH: () => v, Ur: () => b, W2: () => _, WX: () => r, Yt: () => l, ZP: () => Z, Zd: () => I, cY: () => p, i_: () => E, jF: () => D, kl: () => i, nQ: () => u, oh: () => L, tI: () => k, uR: () => f, xp: () => y });
            const r = "ArrowDown",
                i = "ArrowUp",
                o = "ArrowLeft",
                c = "ArrowRight",
                s = "Enter",
                u = "Escape",
                a = 27,
                d = "XF86Back",
                l = "XF86PlayBack",
                f = "XF86Exit",
                v = "GoBack",
                p = 461,
                m = "Exit",
                h = 415,
                w = 19,
                y = 417,
                g = 412,
                _ = 413,
                b = "ESC",
                E = "Exit",
                P = "Tab",
                D = "Delete",
                A = "Backspace",
                I = "Play",
                M = "Pause",
                S = "Stop",
                k = "MediaPlayPause",
                Z = "MediaPlay",
                C = "MediaPause",
                L = "MediaStop",
                Q = "MediaFastForward",
                G = "MediaRewind",
                R = "Space";
        },
        481399: (e, n, t) => {
            function r(e) {
                const n = {};
                return (
                    Object.keys(e).forEach((e) => {
                        n[e] = e;
                    }),
                    Object.freeze(n)
                );
            }
            t.d(n, { Z: () => r });
        },
        159573: (e, n, t) => {
            t.d(n, { z: () => i });
            var r = t(401013);
            class i {
                constructor() {
                    this._queue = new r.c();
                }
                isEmpty() {
                    return this._queue.isEmpty();
                }
                enqueue(e) {
                    const n = this._queue,
                        t = n.isEmpty();
                    n.enqueue(e), t && this._dequeue();
                }
                _dequeue() {
                    const e = this._queue,
                        n = e.peek();
                    n &&
                        n().finally(() => {
                            e.dequeue(), this._dequeue();
                        });
                }
            }
        },
        101879: (e, n, t) => {
            t.d(n, { Z: () => r });
            t(202784), t(163301), t(443781);
            const r = (e, n) => e;
        },
        934871: (e, n, t) => {
            t.d(n, { HO: () => b, RY: () => v, Ux: () => f, VQ: () => a, _e: () => p, cf: () => h, eR: () => A, fx: () => _, jq: () => l, nq: () => g, rW: () => d, yw: () => E });
            var r = t(202784),
                i = t(400752),
                o = t(565058),
                c = t(536387),
                s = t(526250),
                u = t(856824);
            function a() {
                !(function () {
                    const e = (0, i.b9)(I);
                    r.useEffect(() => e(), [e]);
                })(),
                    (function () {
                        const e = (0, i.b9)(S);
                        r.useEffect(() => e(), [e]);
                    })(),
                    (0, s.N)(k);
            }
            function d() {
                return (0, i.Dv)(M);
            }
            function l() {
                return (0, i.Dv)(g);
            }
            function f() {
                return (0, i.Dv)(y);
            }
            function v() {
                return (0, i.b9)(A);
            }
            function p() {
                return (0, i.b9)(D);
            }
            function m() {
                return (0, u.GQ)()
                    .enumerateDevices()
                    .then((e) => e.filter(({ kind: e }) => "videoinput" === e));
            }
            const h = (0, c.K9)(
                    (e) => (
                        e(M),
                        (0, u.GQ)()
                            .enumerateDevices()
                            .then((e) => e.filter(({ kind: e }) => "videoinput" === e))
                    ),
                ),
                w = (0, o.cn)(null, (e, n) => {
                    n(h);
                }),
                y = (0, o.cn)(!1),
                g = (0, o.cn)(),
                _ = (0, o.cn)(),
                b = (0, o.cn)(null, (e, n, t) => {
                    const r = e(g);
                    return (
                        r?.stop(),
                        n(_, t),
                        n(y, !0),
                        (function (e) {
                            return (0, u.GQ)()
                                .getUserMedia({ video: { width: 1280, height: 720, facingMode: "user", deviceId: e.deviceId } })
                                .then((e) => e.getVideoTracks()[0]);
                        })(t)
                            .then(
                                (r) => {
                                    e(_) === t
                                        ? (n(g, r),
                                          t.label ||
                                              (n(w),
                                              m().then((e) => {
                                                  n(_, e[0]);
                                              })))
                                        : r.stop();
                                },
                                () => {
                                    n(g, void 0);
                                },
                            )
                            .finally(() => {
                                n(y, !1);
                            })
                    );
                }),
                E = (0, o.cn)(null, (e, n) => {
                    const t = n(D);
                    return t instanceof Promise ? t.then(() => e(g)) : Promise.resolve(e(g));
                }),
                P = (0, o.cn)(null, async (e, n) => {
                    let t = await m();
                    if (t.length && (t[0].deviceId || (await n(b, t[0]), !e(g))) && ((t = await m()), t[0]?.deviceId)) for (const r of t) if ((await n(b, r), e(g))) break;
                }),
                D = (0, o.cn)(null, (e, n) => {
                    if (!e(g)) return n(P);
                }),
                A = (0, o.cn)(null, (e, n) => {
                    const t = e(g);
                    t && (t.stop(), n(g, void 0), n(_, void 0));
                }),
                I = (0, u._D)(w),
                { isPermissionDeniedAtom: M, listenPermissionStateAtom: S } = (0, u.Cv)("camera");
            const k = (0, u.wc)(g);
        },
        856824: (e, n, t) => {
            t.d(n, { Cv: () => a, GQ: () => u, XI: () => f, _D: () => l, wc: () => d });
            t(571372);
            var r = t(565058),
                i = t(516951),
                o = t(2138),
                c = t(526250),
                s = t(563781);
            function u() {
                if (!navigator.mediaDevices) throw new Error("navigator.mediaDevices was not found");
                return navigator.mediaDevices;
            }
            function a(e) {
                const n = (0, r.cn)("prompt"),
                    t = (0, r.cn)((e) => "denied" === e(n));
                return {
                    listenPermissionStateAtom: (0, r.cn)(null, (t, r) => {
                        let i = !0;
                        return (
                            navigator.permissions?.query({ name: e }).then(
                                (e) => {
                                    i &&
                                        (r(n, e.state),
                                        e.addEventListener("change", () => {
                                            r(n, e.state);
                                        }));
                                },
                                () => {},
                            ),
                            () => {
                                i = !1;
                            }
                        );
                    }),
                    isPermissionDeniedAtom: t,
                };
            }
            function d(e, n) {
                return (0, c.v)((t, r) => {
                    const o = t(e);
                    if (!o) return i.Z;
                    const c = () => {
                        r(e, void 0), n && r(n);
                    };
                    return (
                        o.addEventListener("ended", c),
                        () => {
                            o.removeEventListener("ended", c);
                        }
                    );
                });
            }
            function l(e) {
                return (0, r.cn)(null, (n, t) => {
                    const r = (0, o.Z)(
                        (n) => {
                            t(e);
                        },
                        500,
                        { trailing: !0 },
                    );
                    return (
                        u().addEventListener("devicechange", r),
                        () => {
                            u().removeEventListener("devicechange", r);
                        }
                    );
                });
            }
            function f(e) {
                const n = (0, s.O)((n) => n(e())?.muted),
                    t = (0, c.v)((t, r) => {
                        const o = t(e());
                        if (!o) return i.Z;
                        const c = () => r(n);
                        return (
                            o.addEventListener("mute", c),
                            o.addEventListener("unmute", c),
                            () => {
                                o.removeEventListener("mute", c), o.removeEventListener("unmute", c);
                            }
                        );
                    });
                return { isMutedAtom: n, isMutedEffectAtom: t };
            }
        },
        309487: (e, n, t) => {
            t.d(n, { W: () => c });
            var r = t(934871),
                i = t(254810),
                o = t(251836);
            function c() {
                (0, i.LA)(), (0, r.VQ)(), (0, o.vr)();
            }
        },
        254810: (e, n, t) => {
            t.d(n, { Ao: () => b, LA: () => d, LK: () => l, Qc: () => I, Qf: () => S, Vv: () => D, dB: () => h, fm: () => w, fx: () => g, jq: () => B, lc: () => q, pL: () => P, vl: () => v });
            var r = t(202784),
                i = t(400752),
                o = t(565058),
                c = t(536387),
                s = t(526250),
                u = t(563781),
                a = t(856824);
            function d() {
                !(function () {
                    const e = (0, i.b9)(Z);
                    r.useEffect(() => e(), [e]);
                })(),
                    (function () {
                        const e = (0, i.b9)(L);
                        r.useEffect(() => e(), [e]);
                    })(),
                    (0, s.N)(Q),
                    (0, s.N)(R);
            }
            function l() {
                return (0, i.Dv)(C);
            }
            function f() {
                return (0, a.GQ)()
                    .enumerateDevices()
                    .then((e) => {
                        const n = window.location.pathname.startsWith("/i/conferences-room");
                        return e.find(({ deviceId: e, kind: t, label: r }) => "audioinput" === t && !(n && r.includes("Logitech Tap")));
                    });
            }
            const v = (0, c.K9)(
                    (e) => (
                        e(C),
                        (0, a.GQ)()
                            .enumerateDevices()
                            .then((e) => e.filter(({ kind: e }) => "audioinput" === e))
                    ),
                ),
                p = (0, o.cn)(null, (e, n) => {
                    n(v);
                }),
                m = (0, o.cn)(!1),
                h = (0, o.cn)(),
                w = (0, o.cn)((e) => !!e(h)),
                y = (0, o.cn)(!0),
                g = (0, o.cn)(),
                _ = (0, o.cn)(null, (e, n) =>
                    f().then((t) => {
                        const r = e(g);
                        if (t && t.label !== r?.label) return n(b, t);
                    }),
                ),
                b = (0, o.cn)(null, (e, n, t) => {
                    const r = e(h);
                    r?.stop(), n(g, t), n(m, !0);
                    const i = e(I);
                    return (function (e, { noiseSuppression: n }) {
                        return (0, a.GQ)()
                            .getUserMedia({ audio: { deviceId: e.deviceId, autoGainControl: !0, noiseSuppression: n, voiceIsolation: !0, echoCancellation: !0 } })
                            .then((e) => e.getAudioTracks()[0]);
                    })(t, { noiseSuppression: i })
                        .then(
                            (r) => {
                                e(g) === t
                                    ? (n(h, r),
                                      t.label ||
                                          (n(p),
                                          f().then((e) => {
                                              n(g, e);
                                          })))
                                    : r.stop();
                            },
                            () => {
                                n(h, void 0);
                            },
                        )
                        .finally(() => {
                            n(m, !1);
                        });
                }),
                E = (0, u.O)((e) => e(h)?.enabled),
                P = (0, o.cn)(
                    (e) => e(E),
                    (e, n, t) => {
                        const r = e(h);
                        if (r) (r.enabled = t), n(E);
                        else if (t) return n(A);
                    },
                ),
                D = (0, o.cn)(null, (e, n) => {
                    const t = n(M);
                    return t instanceof Promise ? t.then(() => e(h)) : Promise.resolve(e(h));
                }),
                A = (0, o.cn)(null, (e, n) =>
                    f().then((e) => {
                        if (e) return n(b, e);
                    }),
                ),
                I = (0, o.cn)(
                    (e) => e(y),
                    (e, n, t) => {
                        n(y, t);
                        if (e(h)) {
                            const t = e(g);
                            t && n(b, t);
                        }
                    },
                ),
                M = (0, o.cn)(null, (e, n) => n(P, !0)),
                S = (0, o.cn)(null, (e, n) => {
                    const t = e(h);
                    t && (t.stop(), n(h, void 0), n(g, void 0));
                }),
                k = (0, o.cn)(null, (e, n) => {
                    const t = e(g);
                    "default" === t?.deviceId && n(_), n(p);
                }),
                Z = (0, a._D)(k),
                { isPermissionDeniedAtom: C, listenPermissionStateAtom: L } = (0, a.Cv)("microphone");
            const Q = (0, a.wc)(h, _);
            const { isMutedAtom: G, isMutedEffectAtom: R } = (0, a.XI)(() => h);
            const q = (0, o.cn)((e) => !e(h) || e(G) || !e(P)),
                B = (0, o.cn)((e) => !!(e(h) && e(G) && e(P)));
        },
        251836: (e, n, t) => {
            t.d(n, { Db: () => v, Mr: () => h, Qh: () => D, cj: () => f, eC: () => l, mb: () => m, qp: () => y, vE: () => g, vr: () => d });
            var r = t(400752),
                i = t(565058),
                o = t(526250),
                c = t(563781),
                s = t(509599),
                u = t(856824),
                a = t(122411);
            function d() {
                (0, o.N)(_), (0, o.N)(b), (0, o.N)(P);
            }
            function l() {
                return (0, r.Dv)(m);
            }
            function f() {
                return (0, r.Dv)(p);
            }
            function v() {
                return "getDisplayMedia" in (0, u.GQ)();
            }
            const p = (0, i.cn)(!1),
                m = (0, i.cn)(),
                h = (0, i.cn)(),
                w = (0, c.O)((e) => e(h)?.enabled),
                y = (0, i.cn)(
                    null,
                    (e, n) => (
                        n(p, !0),
                        (0, u.GQ)()
                            .getDisplayMedia({ video: { width: { ideal: 1920 }, height: { ideal: 1080 } }, audio: (0, a.w8)() })
                            .then(
                                (t) => {
                                    e(m)?.stop(), e(h)?.stop();
                                    const r = t.getVideoTracks()[0],
                                        i = t.getAudioTracks()[0];
                                    e(s.C) && r.applyConstraints({ frameRate: { min: 15 } }), n(m, r), n(h, i);
                                },
                                () => {},
                            )
                            .finally(() => {
                                n(p, !1);
                            })
                    ),
                ),
                g = (0, i.cn)(null, (e, n) => {
                    e(m)?.stop(), e(h)?.stop(), n(m, void 0), n(h, void 0);
                }),
                _ = (0, u.wc)(m),
                b = (0, u.wc)(h);
            const { isMutedAtom: E, isMutedEffectAtom: P } = (0, u.XI)(() => h);
            const D = (0, i.cn)((e) => !e(h) || e(E) || !e(w));
        },
        122411: (e, n, t) => {
            t.d(n, { Jg: () => s, kq: () => v, w8: () => a, zw: () => l });
            var r = t(565058),
                i = t(752624),
                o = t(516951),
                c = t(420182);
            function s() {
                return u();
            }
            function u() {
                return "AudioContext" in window;
            }
            function a() {
                return s();
            }
            const d = (0, r.cn)(!1),
                l = (0, r.cn)((e) => {
                    if (!p) {
                        const { unsubscribe: n } = f.subscribe(() => {
                            n(), e(c.zE).set(d, p);
                        });
                        return e(d);
                    }
                    return !0;
                }),
                f = new i.Z();
            let v = o.Z,
                p = !1;
            if (u()) {
                v = (function (e) {
                    let n;
                    return () => (n || (n = { value: e() }), n.value);
                })(() => new AudioContext());
                const e = () => {
                    v()?.resume(), (p = !0), f.notify();
                };
                window.addEventListener("click", e, { once: !0 });
            }
        },
        480599: (e, n, t) => {
            t.d(n, { c: () => s, n: () => u });
            var r = t(565058),
                i = t(459679),
                o = t(536387),
                c = t(790997);
            const s = (0, r.cn)(null, (e, n) => {
                    const t = new Map(),
                        r = new Map(),
                        o = setInterval(() => {
                            const e = n(c.Xm);
                            Promise.all(e.map(([e, n]) => n())).then((o) => {
                                o.map((n, o) => {
                                    const c = n,
                                        s = (0, i.Z)(c, (e) => (("bytesSent" in e && "outbound-rtp" === e.type) || ("bytesReceived" in e && "inbound-rtp" === e.type) ? e : void 0)),
                                        u = s.reduce((e, { bytesReceived: n }) => (n ? n + e : e), 0),
                                        a = s.reduce((e, { bytesSent: n }) => (n ? n + e : e), 0),
                                        [d] = e[o],
                                        l = t.get(d),
                                        f = r.get(d);
                                    if ((t.set(d, a), r.set(d, u), void 0 !== l && void 0 !== f)) {
                                        return [d, { sendingBitrate: 8 * (a - l), receivingBitrate: 8 * (u - f) }];
                                    }
                                    return [d, { sendingBitrate: 0, receivingBitrate: 0 }];
                                }).forEach(([e, t]) => n(u(e), t));
                            });
                        }, 1e3);
                    return () => {
                        clearInterval(o);
                    };
                }),
                u = (0, o.dX)((e) => (0, r.cn)({ receivingBitrate: 0, sendingBitrate: 0 }));
        },
        499573: (e, n, t) => {
            t.d(n, { x: () => r });
            t(136728);
            function r(e) {
                const n = new Map();
                for (const t of [...e.values()]) {
                    (
                        n.get(t.type) ??
                        (() => {
                            const e = [];
                            return n.set(t.type, e), e;
                        })()
                    ).push(t);
                }
                return { get: (e) => n.get(e) ?? [] };
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553.4c6b583a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"],
    {
        154462: (e, t, a) => {
            var i = a(634590);
            t.ZP = void 0;
            var n = a(526);
            t.S_ = n.updateAudioLevels;
            var r = a(790978);
            t.eu = r.updateGuestInfo;
            var o = i(a(187632));
            (t.$4 = o.default), (t.mC = o.registerExperience);
            var l = i(a(427193));
            (t.Nu = l.resetGuestState), (t.Nt = l.teardownExperience);
            var s = l.default;
            t.ZP = s;
        },
        526: (e, t, a) => {
            a(332501), a(43105), (t.__esModule = !0), (t.default = t.InitialState = t.updateAudioLevels = t.UPDATE_AUDIO_LEVELS = void 0);
            var i = "UPDATE_AUDIO_LEVELS";
            t.UPDATE_AUDIO_LEVELS = i;
            t.updateAudioLevels = function (e, t) {
                return { type: i, audioLevels: t, experienceId: e };
            };
            var n = { guests: {}, host: 0 };
            t.InitialState = n;
            t.default = function (e, t) {
                if ((void 0 === e && (e = n), t.type === i)) {
                    for (var a = t.audioLevels, r = a[0], o = a.slice(1), l = {}, s = 0; s < o.length; s++) l[s] = o[s];
                    return Object.assign({}, e, { guests: l, host: r });
                }
                return e;
            };
        },
        790978: (e, t) => {
            (t.__esModule = !0), (t.default = t.updateGuestInfo = t.UPDATE_GUEST_INFO = void 0);
            var a = "UPDATE_GUEST_INFO";
            t.UPDATE_GUEST_INFO = a;
            t.updateGuestInfo = function (e, t) {
                return { type: a, guestInfo: t, experienceId: e };
            };
            t.default = function (e, t) {
                if ((void 0 === e && (e = {}), t.type === a)) {
                    for (var i = t.guestInfo, n = {}, r = 0; r < i.length; r++) {
                        var o = i[r],
                            l = o.ParticipantIndex,
                            s = o.ProfileUrl,
                            c = o.SessionId,
                            d = o.StreamName,
                            _ = o.UserId,
                            m = o.UserName;
                        n[r] = { ParticipantIndex: l, ProfileUrl: s, SessionId: c, StreamName: d, UserId: _, UserName: m };
                    }
                    return n;
                }
                return e;
            };
        },
        187632: (e, t, a) => {
            var i = a(171600);
            a(543450), a(271245), a(966466), a(977208), a(334769), (t.__esModule = !0), (t.default = t.registerExperience = t.REGISTER_EXPERIENCE = void 0);
            var n = i(a(373408)),
                r = a(427193),
                o = "REGISTER_EXPERIENCE";
            t.REGISTER_EXPERIENCE = o;
            t.registerExperience = function () {
                return { type: o };
            };
            t.default = function (e) {
                return function (t) {
                    return function (a) {
                        if (a.type === o) {
                            var i = e.getState(),
                                l = Object.keys(i.hydraExperiences || {}).map(function (e) {
                                    return Number.parseInt(e, 10);
                                }),
                                s = Math.max.apply(Math, (0, n.default)(l)) + 1;
                            return Number.isFinite(s) || (s = 0), e.dispatch((0, r.initializeExperience)(s)), s;
                        }
                        return t(a);
                    };
                };
            };
        },
        427193: (e, t, a) => {
            var i = a(634590),
                n = a(171600);
            a(43105), (t.__esModule = !0), (t.default = t.resetGuestState = t.RESET_GUEST_STATE = t.teardownExperience = t.TEARDOWN_EXPERIENCE = t.initializeExperience = t.INITIALIZE_EXPERIENCE = void 0);
            var r = a(10674),
                o = n(a(790978)),
                l = i(a(526)),
                s = "INITIALIZE_EXPERIENCE";
            t.INITIALIZE_EXPERIENCE = s;
            t.initializeExperience = function (e) {
                return { type: s, experienceId: e };
            };
            var c = "TEARDOWN_EXPERIENCE";
            t.TEARDOWN_EXPERIENCE = c;
            t.teardownExperience = function (e) {
                return { type: c, experienceId: e };
            };
            var d = "RESET_GUEST_STATE";
            t.RESET_GUEST_STATE = d;
            t.resetGuestState = function (e) {
                return { type: d, experienceId: e };
            };
            var _ = { audioLevels: l.InitialState, guests: {} },
                m = (0, r.combineReducers)({ audioLevels: l.default, guests: o.default });
            t.default = function (e, t, a) {
                var i;
                if ((void 0 === e && (e = {}), void 0 === a && (a = m), void 0 !== t.experienceId))
                    switch (t.type) {
                        case s:
                        case d:
                            return Object.assign({}, e, (((i = {})[t.experienceId] = _), i));
                        case c:
                            var n = Object.assign({}, e);
                            return delete n[t.experienceId], n;
                        default:
                            var r,
                                o = a(e[t.experienceId], t);
                            return Object.assign({}, e, (((r = {})[t.experienceId] = o), r));
                    }
                return e;
            };
        },
        10674: (e, t, a) => {
            a(743108), a(334769), (t.__esModule = !0), (t.combineReducers = void 0);
            t.combineReducers = function (e) {
                return function (t, a) {
                    return Object.keys(e).reduce(function (i, n) {
                        return (i[n] = e[n](t[n], a)), i;
                    }, {});
                };
            };
        },
        244448: (e, t, a) => {
            a.d(t, { GZ: () => n.GZ, mQ: () => i.Z, tJ: () => n.tJ, vz: () => n.vz });
            var i = a(498348),
                n = a(122883);
        },
        801102: (e, t, a) => {
            a.d(t, { Z: () => r });
            var i = a(552322),
                n = a(109195);
            function r(e, t) {
                const a = (function (e) {
                    return e.children.map((t) => e.dom.el(t));
                })(e);
                return a.map((e, a) => (t ? t(e, a) : (0, i.jsx)(n.Z, { el: e }, e.id || `child-${a}`)));
            }
        },
        960546: (e, t, a) => {
            a.d(t, { Z: () => d });
            var i = a(552322),
                n = a(202784),
                r = a(801102),
                o = a(109195),
                l = a(244448),
                s = a(608222),
                c = a(193686);
            function d({ el: e, p: t, mods: a }) {
                const [d, _] = (0, n.useState)(["init"]),
                    [m, u] = (0, n.useState)(!1),
                    [p, f] = (0, n.useState)(null),
                    [h, g] = (0, n.useState)(null),
                    [k, v] = (0, n.useState)({}),
                    b = (0, n.useRef)(null),
                    w = (0, n.useRef)(null),
                    x = (0, n.useRef)(null),
                    y = t.url("feed") ?? "",
                    E = t.element("header"),
                    S = t.element("footer"),
                    C = t.str("cursor:top"),
                    j = t.str("cursor:bottom"),
                    N = (0, s.o)();
                function I(e, t) {
                    return (0, i.jsx)("div", { children: (0, i.jsx)(o.Z, { el: e }) }, e.id || `list-item-${t}`);
                }
                return (
                    (0, n.useEffect)(() => {
                        j && f(j), C && g(C);
                    }, [j, C]),
                    (0, n.useEffect)(() => {
                        y &&
                            N &&
                            N.Runtime &&
                            (u(!0),
                            d.forEach(async (e) => {
                                const t = `${y}${"init" === e ? "" : `&cursor=${e}`}`;
                                try {
                                    u(!0);
                                    const { Runtime: a } = N;
                                    if (!a) return;
                                    const i = (0, l.vz)(a),
                                        n = i.session(),
                                        r = await a.net.httpGet(t);
                                    if ((r.data && n.onChunk(new Uint8Array(r.data)), i.root.value)) {
                                        const t = (0, l.tJ)(i.root.value).str("cursor:bottom") || "",
                                            a = (0, l.tJ)(i.root.value).str("cursor:top") || "";
                                        t && f(t), a && g(a), v((t) => ({ ...t, [e]: i.root.value }));
                                    }
                                } catch (e) {
                                } finally {
                                    u(!1);
                                }
                            }));
                    }, [y, d, N]),
                    (0, n.useEffect)(() => {
                        const e = w.current;
                        if (!e) return;
                        const t = new IntersectionObserver(
                            (e) => {
                                e[0]?.isIntersecting && !m && p && _((e) => [...e, p]);
                            },
                            { rootMargin: "200px" },
                        );
                        return (
                            t.observe(e),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [p, m]),
                    (0, n.useEffect)(() => {
                        const e = x.current;
                        if (!e) return;
                        const t = new IntersectionObserver(
                            (e) => {
                                e[0];
                            },
                            { rootMargin: "200px" },
                        );
                        return (
                            t.observe(e),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [h, m]),
                    (0, i.jsxs)("div", {
                        ref: b,
                        className: `${a}`,
                        children: [
                            (0, i.jsx)("div", { ref: x, style: { height: "10px", width: "100%" } }),
                            E && (0, i.jsx)(o.Z, { el: E }),
                            (0, i.jsx)("div", { className: "list-static-items", children: (0, r.Z)(e, I) }),
                            !m &&
                                (0, i.jsx)("div", {
                                    className: "list-feed-items",
                                    children: d.map((e) => {
                                        const t = k[e];
                                        return t ? (0, i.jsx)("div", { className: "feed-page", children: (0, r.Z)(t, I) }, e) : (0, i.jsx)("div", {}, e);
                                    }),
                                }),
                            m && (0, i.jsx)(c.P, {}),
                            S && (0, i.jsx)(o.Z, { el: S }),
                            (0, i.jsx)("div", { ref: w, style: { height: "10px", width: "100%" } }),
                        ],
                    })
                );
            }
        },
        655419: (e, t, a) => {
            a.d(t, { Z: () => c });
            var i = a(552322),
                n = a(202784),
                r = a(801102),
                o = a(608222),
                l = a(869593);
            const s = 500;
            function c({ el: e, p: t, mods: a }) {
                const c = t.action("on:press"),
                    d = t.strDict("scribe:press") ?? {},
                    _ = t.action("on:longpress"),
                    m = t.strDict("scribe:longpress") ?? {},
                    u = t.bool("disabled") ?? !1,
                    p = (0, l.h8)(),
                    f = (0, o.o)()?.Analytics,
                    h = (0, n.useRef)(null),
                    g = (0, n.useRef)(!1),
                    k = null != c || null != _,
                    v = () => {
                        if (c) {
                            c();
                            const e = (0, l.QI)("click", { ...p, ...d });
                            f?.scribe(e);
                        }
                    };
                return (0, i.jsx)("button", {
                    className: a,
                    type: "button",
                    disabled: u,
                    onPointerDown: (e) => {
                        k && e.stopPropagation(),
                            (g.current = !1),
                            clearTimeout(h.current ?? 0),
                            (h.current = window.setTimeout(() => {
                                (g.current = !0), (h.current = null);
                            }, s));
                    },
                    onPointerUp: (e) => {
                        k && e.stopPropagation(),
                            u ||
                                (g.current
                                    ? (() => {
                                          if (_) {
                                              _();
                                              const e = (0, l.QI)("longpress", { ...p, ...m });
                                              f?.scribe(e);
                                          }
                                      })()
                                    : v());
                    },
                    onKeyDown: (e) => {
                        k && e.stopPropagation(), u || ("Space" !== e.code && "Enter" !== e.code) || v();
                    },
                    children: (0, r.Z)(e),
                });
            }
        },
        736938: (e, t, a) => {
            a.d(t, { Z: () => n });
            var i = a(552322);
            function n({ p: e, mods: t }) {
                const a = e.int("count") ?? 0;
                return (0, i.jsx)("div", { className: t, children: a });
            }
        },
        110972: (e, t, a) => {
            a.d(t, { Z: () => c });
            var i = a(552322),
                n = a(202784),
                r = a(801102),
                o = a(109195),
                l = a(608222);
            function s({ showModal: e, setShowModal: t, children: a }) {
                const r = (0, n.useRef)(null),
                    [o, s] = (0, n.useState)(!1),
                    c = (0, l.o)();
                if (!c) return (0, i.jsx)("div", { children: "Runtime not available" });
                const { Runtime: d } = c;
                (0, n.useEffect)(() => {
                    const e = window.matchMedia("(min-width: 1024px)"),
                        t = (e) => {
                            s(e.matches);
                        };
                    return (
                        t(e),
                        e.addEventListener("change", t),
                        () => {
                            e.removeEventListener("change", t);
                        }
                    );
                }, []),
                    (0, n.useEffect)(() => {
                        e && r.current ? (d.addCover(r.current), r.current.showModal()) : !e && r.current?.open && (r.current.close(), d.removeCover());
                    }, [e, d.addCover, d.removeCover]);
                return (0, i.jsx)("dialog", {
                    ref: r,
                    onClose: () => t(!1),
                    onClick: (e) => {
                        e.target === r.current && (e.stopPropagation(), r.current?.close(), t(!1));
                    },
                    style: o ? void 0 : { width: "100%", minWidth: "100vw", minHeight: "100vh", height: "100%" },
                    className: "w-full min-w-screen h-screen w-screen lg:min-w-none rounded-[0.2em] border-none p-0 fixed lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 m-0 lg:w-full lg:max-h-full z-[1] bg-transparent backdrop:bg-black/30 motion-safe:animate-fadeIn lg:motion-safe:[&[open]]:animate-zoomIn lg:focus:outline-none lg:max-w-[600px]",
                    children: (0, i.jsx)("div", { onClick: (e) => e.stopPropagation(), className: "p-4 contents flex-col items-center text-center h-full w-full", children: a }),
                });
            }
            function c({ el: e, p: t, mods: a }) {
                const [l, c] = (0, n.useState)(!1),
                    d = t.element("cover");
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)("button", {
                            className: a,
                            onClick: (e) => {
                                e.stopPropagation(), c(!0);
                            },
                            type: "button",
                            children: (0, r.Z)(e),
                        }),
                        d && (0, i.jsx)(s, { showModal: l, setShowModal: c, children: (0, i.jsx)(o.Z, { el: d }) }),
                    ],
                });
            }
        },
        897531: (e, t, a) => {
            a.d(t, { Z: () => d });
            var i = a(552322),
                n = a(202784),
                r = a(801102),
                o = a(122883),
                l = a(608222);
            const s = () => (0, i.jsx)("div", { children: "Loading..." });
            function c({ feedSrc: e, onBottomCursor: t, onLoadComplete: a }) {
                const [c, d] = (0, n.useState)(!0),
                    [_, m] = (0, n.useState)(null),
                    [u, p] = (0, n.useState)(null),
                    f = (0, n.useRef)({}),
                    h = (0, l.o)();
                return h && h.Runtime
                    ? ((0, n.useEffect)(() => {
                          if (f.current[e]) return;
                          f.current[e] = !0;
                          const { Runtime: i } = h,
                              n = (0, o.vz)(i);
                          !(async function () {
                              d(!0);
                              const r = n.session(),
                                  l = await i.net.httpGet(e);
                              if ((l.data && r.onChunk(new Uint8Array(l.data)), p(n.root.value), n.root.value)) {
                                  const e = (0, o.tJ)(n.root.value).str("cursor:bottom") || "";
                                  t(e);
                              }
                              d(!1), a();
                          })();
                      }, [e, t, a, h]),
                      c ? (0, i.jsx)(s, {}) : _ ? (0, i.jsx)("p", { style: { color: "red" }, children: _.message }) : (0, i.jsx)("div", { className: "contents", children: !u || c || _ ? null : (0, r.Z)(u) }))
                    : (m(new Error("Runtime not available")), d(!1), void a());
            }
            function d({ p: e, mods: t }) {
                const [a, r] = (0, n.useState)(["init"]),
                    [o, l] = (0, n.useState)(!1),
                    [s, d] = (0, n.useState)(null),
                    _ = (0, n.useRef)(null),
                    m = (0, n.useRef)(null),
                    u = e?.url?.("src") ?? "";
                (0, n.useEffect)(() => {
                    const e = m.current;
                    if (!e) return;
                    const t = new IntersectionObserver(
                        (e) => {
                            e[0]?.isIntersecting && !o && s && (l(!0), r((e) => [...e, s]));
                        },
                        { rootMargin: "200px" },
                    );
                    return (
                        t.observe(e),
                        () => {
                            t.disconnect();
                        }
                    );
                }, [s, o]);
                const p = (e) => {
                        d(e);
                    },
                    f = () => {
                        l(!1);
                    };
                return (0, i.jsxs)("div", { ref: _, className: `${t}`, children: [a.map((e) => ("" === e ? null : (0, i.jsx)(c, { feedSrc: `${u.startsWith("/") ? "" : "/"}${u}${"init" === e ? "" : `&cursor=${e}`}`, onBottomCursor: p, onLoadComplete: f }, `${e}`))), (0, i.jsx)("div", { ref: m, style: { height: "10px", width: "100%" } })] });
            }
        },
        746066: (e, t, a) => {
            a.d(t, { Z: () => s });
            var i = a(202784),
                n = a(801102),
                r = a(608222),
                o = a(910352),
                l = a(511799);
            function s({ p: e, el: t }) {
                const a = (0, r.o)(),
                    s = e.action("next"),
                    c = e.strDict("errors"),
                    { setErrors: d } = (0, i.useContext)(l.q3),
                    _ = (0, o.Z)((e) => {
                        s && s(), c && d(c);
                        const t = (0, n.Z)(e),
                            i = a?.Runtime?.ui?.toast;
                        t && t.length > 0 && i && i({ text: t });
                    });
                return (
                    (0, i.useEffect)(() => {
                        _(t);
                    }, [t, _]),
                    null
                );
            }
        },
        173590: (e, t, a) => {
            a.d(t, { Z: () => p });
            var i = a(552322),
                n = a(202784),
                r = a(801102),
                o = a(109195),
                l = a(122883),
                s = a(608222),
                c = a(644109),
                d = a(916025),
                _ = a(830030),
                m = a(910352),
                u = a(511799);
            function p({ el: e, p: t, mods: a }) {
                const p = (0, s.o)(),
                    f = t.url("action") ?? "",
                    h = t.strDict("errors"),
                    g = t.url("validation"),
                    k = t.str("submissionStatus") ?? "pending",
                    [v, b] = (0, n.useState)(() => t.strDict("values") ?? {}),
                    [w, x] = (0, n.useState)(),
                    [y, E] = (0, n.useState)(g ? "ongoing" : "pending"),
                    S = (0, m.Z)((e) => {
                        t.setStrDict("errors", e);
                    }),
                    C = (0, m.Z)((e) => {
                        t.setStr("focus", e);
                    }),
                    j = (0, m.Z)((e) => {
                        t.setStrDict("values", (0, _.e)(e));
                    }),
                    N = (0, m.Z)((e) => {
                        t.setStr("submissionStatus", e), t.setBool("submitting", "ongoing" === e);
                    }),
                    I = (e) => {
                        E(e), t.setBool("validating", "ongoing" === e);
                    },
                    Z = (0, m.Z)(async () => {
                        if ("ongoing" !== k && f) {
                            N("ongoing");
                            const e = p?.Runtime;
                            if (e)
                                try {
                                    const { ok: t, data: a } = await e.net.httpPOST(f, new Map(Object.entries(v)));
                                    if (t && a) {
                                        const t = (0, l.KM)(e, new Uint8Array(a));
                                        x(t.root.value), N("success");
                                    } else N("error");
                                } catch (e) {
                                    N("error");
                                }
                        }
                    }),
                    R = (0, m.Z)((e, t) => {
                        b((a) => ({ ...a, [e]: t })), N("pending"), I("pending"), x(void 0);
                    }),
                    T = (0, n.useRef)(v);
                (0, n.useLayoutEffect)(() => {
                    T.current = v;
                }, [v]);
                const A = (0, m.Z)((e, t) => {
                        I("ongoing");
                        const a = p?.Runtime;
                        a &&
                            a.net
                                .httpPOST(t, new Map(Object.entries(v)))
                                .then(({ ok: t, data: a }) => {
                                    if (T.current === e)
                                        if (t && a) {
                                            const e = JSON.parse(new TextDecoder().decode(a));
                                            (0, d.x)(e) ? (S({}), I("success")) : (S(e), I("failure"));
                                        } else S({}), I("success");
                                })
                                .catch(() => {
                                    I("error");
                                });
                    }),
                    P = (0, n.useMemo)(() => (0, c.D)(A, 500), [A]);
                (0, n.useEffect)(() => {
                    g && P(v, g);
                }, [P, v, g]);
                const M = (0, n.useMemo)(() => (g ? "success" === y : !!f && ("pending" === k || "error" === k)), [k, y, g, f]);
                return (
                    (0, n.useEffect)(() => {
                        j(v);
                    }, [v, j]),
                    (0, i.jsxs)(u.q3.Provider, { value: { values: v, submit: Z, change: R, submissionResult: w, submissionStatus: k, validationStatus: y, errors: h, setErrors: S, setFocus: C, canSubmit: M }, children: [(0, i.jsx)("div", { className: a, children: (0, r.Z)(e) }), w && (0, i.jsx)(o.Z, { el: w })] })
                );
            }
        },
        261925: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(552322),
                n = a(202784),
                r = a(109195),
                o = a(511799);
            function l({ mods: e }) {
                const t = (0, n.useContext)(o.ZB);
                return t ? (0, i.jsx)("div", { className: e, children: t.active && (0, i.jsx)(r.Z, { el: t.active }) }) : null;
            }
        },
        22588: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(552322),
                n = a(202784),
                r = a(801102),
                o = a(511799);
            function l({ el: e, mods: t }) {
                const { canSubmit: a, submit: l } = (0, n.useContext)(o.q3),
                    s = (0, n.useCallback)(
                        (e) => {
                            e.stopPropagation(), a && l && l();
                        },
                        [a, l],
                    );
                return (0, i.jsx)("button", { type: "submit", disabled: !a, onClick: s, className: t, children: (0, r.Z)(e) });
            }
        },
        166490: (e, t, a) => {
            a.d(t, { Z: () => o });
            var i = a(552322),
                n = a(202784),
                r = a(511799);
            function o({ p: e, mods: t }) {
                const a = e.str("name") ?? "",
                    o = e.str("label") ?? "",
                    l = e.str("value") ?? "",
                    s = e.bool("autofocus") ?? !1,
                    c = e.enum("type") ?? r.n$.text,
                    { change: d, setFocus: _, values: m } = (0, n.useContext)(r.q3),
                    u = c === r.n$.growing_text,
                    p = (0, n.useCallback)(
                        (e) => {
                            c === r.n$.date && e.currentTarget.value ? d(a, new Date(e.currentTarget.value).toISOString()) : d(a, e.currentTarget.value);
                        },
                        [a, d, c],
                    );
                (0, n.useEffect)(() => {
                    l && d(a, l);
                }, [a, l, d]);
                const f = (0, n.useCallback)(() => {
                        _(a);
                    }, [a, _]),
                    h = (0, n.useCallback)(() => {
                        _("");
                    }, [_]),
                    g = (0, r.Jt)(c),
                    k = m[a] ?? l,
                    v = (0, r.VD)(c),
                    b = "date" === v ? new Date(k).toLocaleDateString("en-CA").padStart(10, "0") : k;
                return u ? (0, i.jsx)("textarea", { autoFocus: s, name: a, onBlur: h, className: `placeholder:text-gray-500 ${t}`, onChange: p, onFocus: f, placeholder: o, value: k }) : (0, i.jsx)("input", { type: v, autoFocus: s, inputMode: g, name: a, onBlur: h, className: `placeholder:text-gray-500 ${t}`, onChange: p, onFocus: f, placeholder: o, value: b });
            }
        },
        161276: (e, t, a) => {
            a.d(t, { Z: () => s });
            var i = a(552322),
                n = a(202784),
                r = a(801102),
                o = a(109195),
                l = a(511799);
            function s({ p: e, el: t, mods: a }) {
                const s = e.str("name") ?? "",
                    c = e.bool("initial") ? "true" : void 0,
                    d = e.element("selected") ?? null,
                    _ = e.bool("submit") ?? !1,
                    { change: m, submit: u, values: p } = (0, n.useContext)(l.q3),
                    f = "true" === p[s];
                (0, n.useEffect)(() => {
                    c && m(s, c);
                }, [s, c, m]);
                const h = f ? d && (0, i.jsx)(o.Z, { el: d }) : (0, r.Z)(t);
                return (0, i.jsx)("button", {
                    type: "button",
                    onClick: (e) => {
                        e.preventDefault(), m(s, f ? void 0 : "true"), _ && u();
                    },
                    className: a,
                    children: h,
                });
            }
        },
        399762: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(552322),
                n = a(202784),
                r = a(801102),
                o = a(511799);
            function l({ p: e, el: t, mods: a }) {
                const l = e.str("name") ?? "",
                    s = e.int("length") ?? 6,
                    c = e.bool("autofocus") ?? !1,
                    d = e.bool("autosubmit") ?? !1,
                    { change: _, submit: m, values: u } = (0, n.useContext)(o.q3),
                    p = u.code ?? "",
                    f = (0, n.useCallback)(
                        (t) => {
                            _(l, t), e.setStrDict(l, Object(Array.from(t)));
                        },
                        [_, l, e],
                    ),
                    h = (0, n.useMemo)(() => Array.from({ length: s }).map(() => (0, n.createRef)()), [s]);
                (0, n.useEffect)(() => {
                    p.length === s && d ? m() : h[p.length]?.current?.focus();
                }, [d, p, h, s, m]);
                const g = (0, n.useCallback)(
                        (e, t) => {
                            const a = e.currentTarget.value,
                                i = p.slice(0, t) + a + p.slice(t + 1);
                            f(i);
                        },
                        [p, f],
                    ),
                    k = (e) => {
                        "Backspace" === e.key && (f(p.slice(0, p.length - 1)), e.preventDefault());
                    },
                    [v, b] = (0, n.useState)(0),
                    [w, x] = (0, n.useState)(10),
                    [y, E] = (0, n.useState)(10),
                    [S, C] = (0, n.useState)(0),
                    j = (0, n.useRef)(null);
                return (
                    (0, n.useEffect)(() => {
                        setTimeout(() => {
                            const e = j.current,
                                t = e?.firstElementChild,
                                a = t?.firstElementChild,
                                i = a?.nextElementSibling;
                            if (e && t && a && i) {
                                const t = e.getBoundingClientRect(),
                                    n = a.getBoundingClientRect(),
                                    r = i.getBoundingClientRect().left - n.right;
                                b(r), x(n.width), E(t.width);
                                const o = n.left - t.left;
                                C(o);
                            }
                        }, 100);
                    }, []),
                    (0, i.jsxs)("div", { className: `relative ${a}`, ref: j, children: [(0, r.Z)(t), (0, i.jsx)("div", { className: "absolute left-0 top-0 right-0 bottom-0 flex flex-row", style: { gap: v, width: y, paddingLeft: S }, children: Array.from({ length: s }).map((e, t) => (0, i.jsx)("input", { maxLength: s, inputMode: "numeric", onChange: (e) => g(e, t), autoFocus: c && 0 === t, onKeyDown: k, ref: h[t], value: p[t] ?? "", className: "min-w-0 outline-none text-center caret-text bg-transparent text-transparent", style: { width: w } }, t)) })] })
                );
            }
        },
        723395: (e, t, a) => {
            a.d(t, { Z: () => s });
            var i = a(552322),
                n = a(202784),
                r = a(801102),
                o = a(109195),
                l = a(511799);
            function s({ p: e, el: t, mods: a }) {
                const s = e.str("value") ?? "",
                    c = e.element("active"),
                    d = e.element("selected") ?? null,
                    _ = (0, n.useContext)(l.ZB),
                    m = _?.value === s,
                    u = (0, n.useCallback)(() => {
                        _ && (m ? _.select(void 0, null) : _.select(s, c));
                    }, [_, s, c, m]),
                    p = (0, n.useMemo)(() => (0, r.Z)(t), [t]),
                    f = (0, n.useMemo)(() => d && (0, i.jsx)(o.Z, { el: d }), [d]);
                return (0, i.jsx)("button", { onClick: u, type: "button", className: a, children: m ? f : p });
            }
        },
        140682: (e, t, a) => {
            a.d(t, { Z: () => d });
            var i = a(552322),
                n = a(202784),
                r = a(511799);
            const o = (e) => e.replace(/\D/g, ""),
                l = (e, t) => {
                    const a = o(e);
                    let i = "",
                        n = 0;
                    for (let e = 0; e < t.length && !(n >= a.length); e++) "#" === t[e] ? ((i += a[n]), n++) : (i += t[e]);
                    return i;
                },
                s = { name: "United States", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                c = [
                    { name: "Afghanistan", dial_code: "+93", pattern: "### ### ####", limit: 12 },
                    { name: "Albania", dial_code: "+355", pattern: "### ### ###", limit: 11 },
                    { name: "Algeria", dial_code: "+213", pattern: "### ## ## ##", limit: 12 },
                    { name: "Andorra", dial_code: "+376", pattern: "### ###", limit: 7 },
                    { name: "Angola", dial_code: "+244", pattern: "### ### ###", limit: 11 },
                    { name: "Antigua and Barbuda", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                    { name: "Argentina", dial_code: "+54", pattern: "##########", limit: 10 },
                    { name: "Armenia", dial_code: "+374", pattern: "## ######", limit: 9 },
                    { name: "Australia", dial_code: "+61", pattern: "#### ### ###", limit: 12 },
                    { name: "Austria", dial_code: "+43", pattern: "#### ####", limit: 9 },
                    { name: "Azerbaijan", dial_code: "+994", pattern: "## ### ## ##", limit: 11 },
                    { name: "Bahamas", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                    { name: "Bahrain", dial_code: "+973", pattern: "#### ####", limit: 9 },
                    { name: "Bangladesh", dial_code: "+880", pattern: "####-#######", limit: 12 },
                    { name: "Barbados", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                    { name: "Belarus", dial_code: "+375", pattern: "## ###-##-##", limit: 12 },
                    { name: "Belgium", dial_code: "+32", pattern: "### ## ## ##", limit: 12 },
                    { name: "Belize", dial_code: "+501", pattern: "#### ####", limit: 9 },
                    { name: "Benin", dial_code: "+229", pattern: "## ## ## ##", limit: 11 },
                    { name: "Bhutan", dial_code: "+975", pattern: "##-###-###", limit: 10 },
                    { name: "Bolivia", dial_code: "+591", pattern: "###-###-###", limit: 12 },
                    { name: "Bosnia and Herzegovina", dial_code: "+387", pattern: "## ### ###", limit: 10 },
                    { name: "Botswana", dial_code: "+267", pattern: "### ### ###", limit: 11 },
                    { name: "Brazil", dial_code: "+55", pattern: "(##) ####-####", limit: 14 },
                    { name: "Brunei", dial_code: "+673", pattern: "#### ####", limit: 9 },
                    { name: "Bulgaria", dial_code: "+359", pattern: "### ### ###", limit: 11 },
                    { name: "Burkina Faso", dial_code: "+226", pattern: "## ## ## ##", limit: 11 },
                    { name: "Burundi", dial_code: "+257", pattern: "## ## ## ##", limit: 11 },
                    { name: "Cabo Verde", dial_code: "+238", pattern: "### ### ###", limit: 11 },
                    { name: "Cambodia", dial_code: "+855", pattern: "##-###-####", limit: 11 },
                    { name: "Cameroon", dial_code: "+237", pattern: "### ### ###", limit: 11 },
                    { name: "Canada", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                    { name: "Central African Republic", dial_code: "+236", pattern: "## ### ###", limit: 10 },
                    { name: "Chad", dial_code: "+235", pattern: "## ## ## ##", limit: 11 },
                    { name: "Chile", dial_code: "+56", pattern: "##-####-####", limit: 13 },
                    { name: "China", dial_code: "+86", pattern: "### #### ####", limit: 12 },
                    { name: "Colombia", dial_code: "+57", pattern: "### ### ####", limit: 12 },
                    { name: "Comoros", dial_code: "+269", pattern: "## ## ## ##", limit: 11 },
                    { name: "Congo (Brazzaville)", dial_code: "+242", pattern: "### ### ###", limit: 11 },
                    { name: "Costa Rica", dial_code: "+506", pattern: "####-####", limit: 9 },
                    { name: "Croatia", dial_code: "+385", pattern: "##-####-####", limit: 12 },
                    { name: "Cuba", dial_code: "+53", pattern: "###-###-####", limit: 12 },
                    { name: "Cyprus", dial_code: "+357", pattern: "### ### ###", limit: 11 },
                    { name: "Czechia", dial_code: "+420", pattern: "### ### ###", limit: 11 },
                    { name: "Democratic Republic of the Congo", dial_code: "+243", pattern: "### ### ###", limit: 11 },
                    { name: "Denmark", dial_code: "+45", pattern: "## ## ## ##", limit: 9 },
                    { name: "Djibouti", dial_code: "+253", pattern: "## ## ## ##", limit: 10 },
                    { name: "Dominica", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                    { name: "Dominican Republic", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                    { name: "Ecuador", dial_code: "+593", pattern: "##-###-####", limit: 12 },
                    { name: "Egypt", dial_code: "+20", pattern: "## ### ####", limit: 11 },
                    { name: "El Salvador", dial_code: "+503", pattern: "####-####", limit: 9 },
                    { name: "Equatorial Guinea", dial_code: "+240", pattern: "### ### ###", limit: 11 },
                    { name: "Eritrea", dial_code: "+291", pattern: "### ### ###", limit: 11 },
                    { name: "Estonia", dial_code: "+372", pattern: "#### ####", limit: 9 },
                    { name: "Eswatini", dial_code: "+268", pattern: "### ### ###", limit: 11 },
                    { name: "Ethiopia", dial_code: "+251", pattern: "###-###-####", limit: 12 },
                    { name: "Fiji", dial_code: "+679", pattern: "### ###", limit: 9 },
                    { name: "Finland", dial_code: "+358", pattern: "### ## ###", limit: 10 },
                    { name: "France", dial_code: "+33", pattern: "## ## ## ##", limit: 9 },
                    { name: "Gabon", dial_code: "+241", pattern: "## ## ## ##", limit: 10 },
                    { name: "Gambia", dial_code: "+220", pattern: "### ### ###", limit: 11 },
                    { name: "Georgia", dial_code: "+995", pattern: "### ## ## ##", limit: 12 },
                    { name: "Germany", dial_code: "+49", pattern: "#### ########", limit: 14 },
                    { name: "Ghana", dial_code: "+233", pattern: "### ### ###", limit: 11 },
                    { name: "Greece", dial_code: "+30", pattern: "### ### ####", limit: 12 },
                    { name: "Grenada", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                    { name: "Guatemala", dial_code: "+502", pattern: "####-####", limit: 9 },
                    { name: "Guinea", dial_code: "+224", pattern: "### ### ###", limit: 11 },
                    { name: "Guinea-Bissau", dial_code: "+245", pattern: "### ### ###", limit: 11 },
                    { name: "Guyana", dial_code: "+592", pattern: "###-###-###", limit: 12 },
                    { name: "Haiti", dial_code: "+509", pattern: "###-###-####", limit: 12 },
                    { name: "Honduras", dial_code: "+504", pattern: "####-####", limit: 9 },
                    { name: "Hungary", dial_code: "+36", pattern: "##-###-####", limit: 11 },
                    { name: "Iceland", dial_code: "+354", pattern: "### ####", limit: 10 },
                    { name: "India", dial_code: "+91", pattern: "#####-#####", limit: 11 },
                    { name: "Indonesia", dial_code: "+62", pattern: "###-###-####", limit: 12 },
                    { name: "Iran", dial_code: "+98", pattern: "#### ### ####", limit: 13 },
                    { name: "Iraq", dial_code: "+964", pattern: "###-###-####", limit: 12 },
                    { name: "Ireland", dial_code: "+353", pattern: "### ### ####", limit: 12 },
                    { name: "Israel", dial_code: "+972", pattern: "##-#####-###", limit: 12 },
                    { name: "Italy", dial_code: "+39", pattern: "### #### ####", limit: 13 },
                    { name: "Jamaica", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                    { name: "Japan", dial_code: "+81", pattern: "##-####-####", limit: 13 },
                    { name: "Jordan", dial_code: "+962", pattern: "### #######", limit: 11 },
                    { name: "Kazakhstan", dial_code: "+7", pattern: "### ### ####", limit: 12 },
                    { name: "Kenya", dial_code: "+254", pattern: "### ### ###", limit: 11 },
                    { name: "Kiribati", dial_code: "+686", pattern: "### ####", limit: 10 },
                    { name: "Kuwait", dial_code: "+965", pattern: "#### ####", limit: 9 },
                    { name: "Kyrgyzstan", dial_code: "+996", pattern: "### ### ###", limit: 11 },
                    { name: "Laos", dial_code: "+856", pattern: "##-####-####", limit: 13 },
                    { name: "Latvia", dial_code: "+371", pattern: "##### ###", limit: 9 },
                    { name: "Lebanon", dial_code: "+961", pattern: "##-###-###", limit: 11 },
                    { name: "Lesotho", dial_code: "+266", pattern: "### ### ###", limit: 11 },
                    { name: "Liberia", dial_code: "+231", pattern: "###-###-####", limit: 12 },
                    { name: "Libya", dial_code: "+218", pattern: "###-###-###", limit: 11 },
                    { name: "Liechtenstein", dial_code: "+423", pattern: "### ####", limit: 10 },
                    { name: "Lithuania", dial_code: "+370", pattern: "###-###-###", limit: 11 },
                    { name: "Luxembourg", dial_code: "+352", pattern: "### ### ###", limit: 11 },
                    { name: "Madagascar", dial_code: "+261", pattern: "##-###-####", limit: 11 },
                    { name: "Malawi", dial_code: "+265", pattern: "###-###-###", limit: 11 },
                    { name: "Malaysia", dial_code: "+60", pattern: "###-#######", limit: 11 },
                    { name: "Maldives", dial_code: "+960", pattern: "###-###", limit: 9 },
                    { name: "Mali", dial_code: "+223", pattern: "##-##-##-##", limit: 11 },
                    { name: "Malta", dial_code: "+356", pattern: "#### ####", limit: 9 },
                    { name: "Marshall Islands", dial_code: "+692", pattern: "###-####", limit: 10 },
                    { name: "Mauritania", dial_code: "+222", pattern: "##-##-##-##", limit: 11 },
                    { name: "Mauritius", dial_code: "+230", pattern: "#### ####", limit: 9 },
                    { name: "Mexico", dial_code: "+52", pattern: "## #### ####", limit: 12 },
                    { name: "Micronesia", dial_code: "+691", pattern: "###-####", limit: 10 },
                    { name: "Moldova", dial_code: "+373", pattern: "##-###-###", limit: 11 },
                    { name: "Monaco", dial_code: "+377", pattern: "### ### ###", limit: 11 },
                    { name: "Mongolia", dial_code: "+976", pattern: "###-###-###", limit: 11 },
                    { name: "Montenegro", dial_code: "+382", pattern: "##-###-###", limit: 11 },
                    { name: "Morocco", dial_code: "+212", pattern: "##-###-####", limit: 12 },
                    { name: "Mozambique", dial_code: "+258", pattern: "##-###-###", limit: 11 },
                    { name: "Myanmar", dial_code: "+95", pattern: "##-###-####", limit: 12 },
                    { name: "Namibia", dial_code: "+264", pattern: "###-####", limit: 10 },
                    { name: "Nauru", dial_code: "+674", pattern: "###-###", limit: 9 },
                    { name: "Nepal", dial_code: "+977", pattern: "##-####-####", limit: 13 },
                    { name: "Netherlands", dial_code: "+31", pattern: "##-####-####", limit: 12 },
                    { name: "New Zealand", dial_code: "+64", pattern: "##-###-####", limit: 12 },
                    { name: "Nicaragua", dial_code: "+505", pattern: "####-####", limit: 9 },
                    { name: "Niger", dial_code: "+227", pattern: "##-##-##-##", limit: 11 },
                    { name: "Nigeria", dial_code: "+234", pattern: "###-###-####", limit: 12 },
                    { name: "North Korea", dial_code: "+850", pattern: "##-####-####", limit: 13 },
                    { name: "North Macedonia", dial_code: "+389", pattern: "##-###-####", limit: 12 },
                    { name: "Norway", dial_code: "+47", pattern: "### ## ###", limit: 11 },
                    { name: "Oman", dial_code: "+968", pattern: "###-####", limit: 10 },
                    { name: "Pakistan", dial_code: "+92", pattern: "####-#######", limit: 12 },
                    { name: "Palau", dial_code: "+680", pattern: "###-####", limit: 10 },
                    { name: "Palestine", dial_code: "+970", pattern: "##-###-####", limit: 12 },
                    { name: "Panama", dial_code: "+507", pattern: "####-####", limit: 9 },
                    { name: "Papua New Guinea", dial_code: "+675", pattern: "###-####", limit: 10 },
                    { name: "Paraguay", dial_code: "+595", pattern: "###-###-###", limit: 12 },
                    { name: "Peru", dial_code: "+51", pattern: "##-###-####", limit: 12 },
                    { name: "Philippines", dial_code: "+63", pattern: "###-###-####", limit: 12 },
                    { name: "Poland", dial_code: "+48", pattern: "###-###-###", limit: 12 },
                    { name: "Portugal", dial_code: "+351", pattern: "####-####", limit: 9 },
                    { name: "Qatar", dial_code: "+974", pattern: "#### ####", limit: 9 },
                    { name: "Romania", dial_code: "+40", pattern: "###-###-###", limit: 11 },
                    { name: "Russia", dial_code: "+7", pattern: "###-###-##-##", limit: 12 },
                    { name: "Rwanda", dial_code: "+250", pattern: "###-###-###", limit: 11 },
                    { name: "Saint Kitts and Nevis", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                    { name: "Saint Lucia", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                    { name: "Saint Vincent and the Grenadines", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                    { name: "Samoa", dial_code: "+685", pattern: "###-####", limit: 10 },
                    { name: "San Marino", dial_code: "+378", pattern: "###-######", limit: 12 },
                    { name: "Sao Tome and Principe", dial_code: "+239", pattern: "###-###-###", limit: 11 },
                    { name: "Saudi Arabia", dial_code: "+966", pattern: "###-####-####", limit: 13 },
                    { name: "Senegal", dial_code: "+221", pattern: "##-###-####", limit: 12 },
                    { name: "Serbia", dial_code: "+381", pattern: "##-###-####", limit: 12 },
                    { name: "Seychelles", dial_code: "+248", pattern: "###-####", limit: 10 },
                    { name: "Sierra Leone", dial_code: "+232", pattern: "##-###-####", limit: 12 },
                    { name: "Singapore", dial_code: "+65", pattern: "####-####", limit: 9 },
                    { name: "Slovakia", dial_code: "+421", pattern: "###-###-###", limit: 11 },
                    { name: "Slovenia", dial_code: "+386", pattern: "##-###-###", limit: 11 },
                    { name: "Solomon Islands", dial_code: "+677", pattern: "###-####", limit: 10 },
                    { name: "Somalia", dial_code: "+252", pattern: "###-###-###", limit: 11 },
                    { name: "South Africa", dial_code: "+27", pattern: "##-###-####", limit: 12 },
                    { name: "South Korea", dial_code: "+82", pattern: "##-####-####", limit: 13 },
                    { name: "South Sudan", dial_code: "+211", pattern: "###-###-###", limit: 11 },
                    { name: "Spain", dial_code: "+34", pattern: "###-###-###", limit: 12 },
                    { name: "Sri Lanka", dial_code: "+94", pattern: "##-####-####", limit: 13 },
                    { name: "Sudan", dial_code: "+249", pattern: "###-###-###", limit: 11 },
                    { name: "Suriname", dial_code: "+597", pattern: "###-###-###", limit: 12 },
                    { name: "Sweden", dial_code: "+46", pattern: "###-###-####", limit: 12 },
                    { name: "Switzerland", dial_code: "+41", pattern: "##-###-##-##", limit: 12 },
                    { name: "Syria", dial_code: "+963", pattern: "###-###-####", limit: 12 },
                    { name: "Taiwan", dial_code: "+886", pattern: "###-####-####", limit: 13 },
                    { name: "Tajikistan", dial_code: "+992", pattern: "##-###-####", limit: 12 },
                    { name: "Tanzania", dial_code: "+255", pattern: "###-###-###", limit: 11 },
                    { name: "Thailand", dial_code: "+66", pattern: "##-###-####", limit: 12 },
                    { name: "Timor-Leste", dial_code: "+670", pattern: "###-####", limit: 10 },
                    { name: "Togo", dial_code: "+228", pattern: "##-##-##-##", limit: 11 },
                    { name: "Tonga", dial_code: "+676", pattern: "###-####", limit: 10 },
                    { name: "Trinidad and Tobago", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                    { name: "Tunisia", dial_code: "+216", pattern: "##-###-###", limit: 11 },
                    { name: "Turkey", dial_code: "+90", pattern: "###-###-####", limit: 12 },
                    { name: "Turkmenistan", dial_code: "+993", pattern: "##-###-####", limit: 12 },
                    { name: "Tuvalu", dial_code: "+688", pattern: "###-###", limit: 9 },
                    { name: "Uganda", dial_code: "+256", pattern: "###-###-###", limit: 11 },
                    { name: "Ukraine", dial_code: "+380", pattern: "##-###-##-##", limit: 12 },
                    { name: "United Arab Emirates", dial_code: "+971", pattern: "##-###-####", limit: 12 },
                    { name: "United Kingdom", dial_code: "+44", pattern: "#### ### ####", limit: 13 },
                    { name: "United States", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                    { name: "Uruguay", dial_code: "+598", pattern: "###-###-###", limit: 12 },
                    { name: "Uzbekistan", dial_code: "+998", pattern: "##-###-####", limit: 12 },
                    { name: "Vanuatu", dial_code: "+678", pattern: "###-####", limit: 10 },
                    { name: "Vatican City", dial_code: "+379", pattern: "###-###", limit: 9 },
                    { name: "Venezuela", dial_code: "+58", pattern: "###-###-####", limit: 12 },
                    { name: "Vietnam", dial_code: "+84", pattern: "###-####-####", limit: 13 },
                    { name: "Yemen", dial_code: "+967", pattern: "###-###-###", limit: 11 },
                    { name: "Zambia", dial_code: "+260", pattern: "###-###-###", limit: 11 },
                    { name: "Zimbabwe", dial_code: "+263", pattern: "###-###-###", limit: 1 },
                ];
            function d({ p: e, mods: t }) {
                const a = e.str("name") ?? "",
                    d = e.str("placeholder") ?? "",
                    _ = e.str("countryCode") ?? "+1",
                    m = e.strList("allowedCountryCodes"),
                    u = e.bool("countryCodePickerDisabled") ?? !1,
                    p = e.bool("autofocus") ?? !1,
                    { change: f, values: h } = (0, n.useContext)(r.q3),
                    [g, k] = (0, n.useState)(() => (h[a] ? h[a].replace(_, "") : "")),
                    v = (0, n.useCallback)((e) => {
                        k(e.target.value);
                    }, []),
                    [b, w] = (0, n.useState)(() => c.find((e) => e.dial_code === _) ?? s),
                    x = (0, n.useMemo)(() => l(g, b.pattern), [b.pattern, g]),
                    y = (0, n.useMemo)(() => c.filter((e) => m.includes(e.dial_code)), [m]),
                    E = (0, n.useCallback)(
                        (e) => {
                            const t = y.find((t) => t.name === e.currentTarget.value);
                            t && w(t);
                        },
                        [y],
                    );
                return (
                    (0, n.useEffect)(() => {
                        f(a, b.dial_code + o(g));
                    }, [f, b, a, g]),
                    (0, i.jsxs)("div", { className: `flex flex-row items-center gap-1 ${t}`, children: [(0, i.jsxs)("div", { className: "items-end relative", children: [(0, i.jsx)("div", { className: "pe-2 text-blue-500 " + (u ? "text-text" : ""), children: b.dial_code }), (0, i.jsx)("select", { disabled: u, onChange: E, value: b.name, className: "absolute top-0 left-0 w-full h-full opacity-0", children: y.map((e) => (0, i.jsxs)("option", { value: e.name, children: [e.name, "(", e.dial_code, ")"] }, e.name)) })] }), (0, i.jsx)("input", { autoFocus: p, inputMode: "tel", maxLength: b.limit, name: a, onChange: v, placeholder: d || b.pattern, className: "flex-grow", value: x })] })
                );
            }
        },
        315111: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(552322),
                n = a(202784),
                r = a(801102),
                o = a(511799);
            function l({ p: e, el: t }) {
                const a = e.str("name") ?? "",
                    l = e.bool("submit") ?? !1,
                    [s, c] = (0, n.useState)(null),
                    { submit: d, values: _, change: m } = (0, n.useContext)(o.q3),
                    u = _[a],
                    p = (0, n.useCallback)(
                        (e, t) => {
                            m(a, e),
                                c(t),
                                l &&
                                    setTimeout(() => {
                                        d();
                                    }, 100);
                        },
                        [d, l, m, a],
                    );
                return (0, i.jsx)(o.ZB.Provider, { value: { value: u, active: s, select: p }, children: (0, r.Z)(t) });
            }
        },
        511799: (e, t, a) => {
            a.d(t, { Jt: () => o, VD: () => l, ZB: () => s, n$: () => r, q3: () => n });
            var i = a(202784);
            const n = (0, i.createContext)({ values: {}, submit: () => {}, setErrors: () => {}, change: (e, t) => {}, errors: {}, setFocus: () => {}, submissionStatus: "pending", submissionResult: void 0, validationStatus: "pending", canSubmit: !1 }),
                r = { text: 0, password: 1, email: 2, number: 3, username: 4, tel: 5, url: 6, auth_code: 7, hidden: 8, growing_text: 9, date: 10 },
                o =
                    ((0, i.createContext)({ groupKeys: new Set(), active: new Set(), register: (e) => {} }),
                    (e) => {
                        switch (e) {
                            case r.email:
                                return "email";
                            case r.number:
                            case r.auth_code:
                                return "numeric";
                            case r.tel:
                                return "tel";
                            case r.url:
                                return "url";
                            case r.text:
                            case r.password:
                            case r.username:
                            case r.hidden:
                            case r.growing_text:
                            case r.date:
                            default:
                                return "text";
                        }
                    }),
                l = (e) => {
                    switch (e) {
                        case r.password:
                            return "password";
                        case r.email:
                            return "email";
                        case r.number:
                            return "number";
                        case r.tel:
                            return "tel";
                        case r.url:
                            return "url";
                        case r.hidden:
                            return "hidden";
                        case r.date:
                            return "date";
                        case r.growing_text:
                        case r.text:
                        case r.username:
                        case r.auth_code:
                        default:
                            return "text";
                    }
                },
                s = (0, i.createContext)(null);
        },
        971668: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(552322),
                n = a(202784),
                r = a(801102),
                o = a(122883);
            function l({ p: e, el: t, mods: a }) {
                const l = e.int("gapH") ?? 2,
                    s = e.int("gapV") ?? 2,
                    c = (0, r.Z)(t),
                    d = (0, n.useMemo)(() => {
                        if (!c) return 12;
                        let e = 0;
                        return (
                            c.forEach((t) => {
                                const a = (0, r.Z)(t.props.el);
                                let i = 0;
                                a.forEach((e) => {
                                    const t = (0, o.tJ)(e.props.el).int("columns") ?? 1;
                                    i += t;
                                }),
                                    (e = Math.max(e, i));
                            }),
                            e || 12
                        );
                    }, [c]);
                return (0, i.jsx)("div", { className: `${a}`, children: (0, i.jsxs)("table", { style: { borderSpacing: `${l}px ${s}px` }, className: "w-full border-separate", children: [(0, i.jsx)("colgroup", { children: [...Array(d)].map((e, t) => (0, i.jsx)("col", { width: 100 / d + "%" }, `grid-col-${t}-${d}`)) }), (0, i.jsx)("tbody", { children: (0, r.Z)(t) })] }) });
            }
        },
        790119: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(552322),
                n = a(202784),
                r = a(801102),
                o = a(977391);
            function l({ p: e, el: t, mods: a }) {
                const l = e.int("columns") ?? 1,
                    d = e.enum("align") ?? 0,
                    { vAlign: _ } = (0, n.useContext)(o.jg);
                return (0, i.jsx)("td", { colSpan: l, className: `${c(_)} ${s(o.Eu[d])} ${a}`, children: (0, r.Z)(t) });
            }
            function s(e) {
                switch (e) {
                    case "start":
                        return "text-start";
                    case "middle":
                        return "text-center";
                    case "end":
                        return "text-end";
                    default:
                        return "";
                }
            }
            function c(e) {
                switch (e) {
                    case "top":
                        return "align-top";
                    case "center":
                        return "align-middle";
                    case "baseline":
                        return "align-baseline";
                    case "bottom":
                        return "align-bottom";
                    default:
                        return "";
                }
            }
        },
        550932: (e, t, a) => {
            a.d(t, { Z: () => o });
            var i = a(552322),
                n = a(801102),
                r = a(977391);
            function o({ p: e, el: t, mods: a }) {
                const o = e.enum("align") ?? 0;
                return (0, i.jsx)(r.jg.Provider, { value: { vAlign: r.qx[o] }, children: (0, i.jsx)("tr", { className: `align-${o} ${a}`, children: (0, n.Z)(t) }) });
            }
        },
        977391: (e, t, a) => {
            a.d(t, { Eu: () => r, jg: () => o, qx: () => n });
            var i = a(202784);
            const n = { 0: "center", 1: "top", 2: "baseline", 3: "bottom" },
                r = { 0: "start", 1: "middle", 2: "end" },
                o = (0, i.createContext)({ vAlign: "center" });
        },
        514378: (e, t, a) => {
            a.d(t, { Z: () => o });
            var i = a(552322),
                n = a(109195),
                r = a(202784);
            function o({ el: e, p: t, mods: a }) {
                const o = t.int("gap") ?? 2,
                    l = t.int("initialPos") ?? 0,
                    s = (function (e) {
                        return e.children.map((t) => e.dom.el(t));
                    })(e),
                    c = (0, r.useRef)(null),
                    [d, _] = (0, r.useState)(0);
                (0, r.useEffect)(() => {
                    if (c.current && l > 0 && l < s.length) {
                        const e = c.current.children[l];
                        e && c.current.scrollTo({ left: e.offsetLeft, behavior: "smooth" });
                    }
                }, [l, s.length]);
                const m = 0 !== d,
                    u = c.current && d <= c.current?.scrollWidth - c.current?.clientWidth - 2;
                return (0, i.jsxs)("div", {
                    className: `relative ${a}`,
                    children: [
                        m &&
                            (0, i.jsx)("div", {
                                className: "absolute z-10 rounded-full overflow-hidden ml-1 mr-1 opacity-0 hover:opacity-100 transition-opacity duration-200",
                                children: (0, i.jsx)("button", {
                                    onClick: () => {
                                        c.current && c.current.scrollTo({ left: 0, behavior: "smooth" });
                                    },
                                    className: "focus:outline-none",
                                    type: "button",
                                }),
                            }),
                        (0, i.jsx)("div", {
                            ref: c,
                            className: "flex flex-row flex-nowrap overflow-x-auto overflow-y-hidden w-full [&::-webkit-scrollbar]:hidden [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none]",
                            onScroll: () => {
                                c.current && _(c.current.scrollLeft);
                            },
                            style: { scrollbarWidth: "none" },
                            children: s.map((e, t) => (0, i.jsx)("div", { className: "flex-auto whitespace-nowrap flex-shrink-0", style: { paddingRight: `${o}px` }, children: (0, i.jsx)(n.Z, { el: e }) }, e.id?.toString() || `hscroller-item-${t}`)),
                        }),
                        u &&
                            (0, i.jsx)("div", {
                                className: "absolute z-10 rounded-full overflow-hidden ml-1 mr-1 opacity-0 hover:opacity-100 transition-opacity duration-200 right-0",
                                children: (0, i.jsx)("button", {
                                    onClick: () => {
                                        c.current && c.current.scrollTo({ left: c.current?.scrollWidth - c.current?.clientWidth, behavior: "smooth" });
                                    },
                                    className: "focus:outline-none",
                                    type: "button",
                                }),
                            }),
                    ],
                });
            }
        },
        608594: (e, t, a) => {
            a.d(t, { C: () => s });
            var i = a(552322),
                n = a(627834),
                r = a(412935);
            const o = [
                    "accessibility_alt",
                    "accessibility_circle",
                    "account",
                    "account_nft",
                    "accounts_stroke",
                    "activity",
                    "alerts",
                    "align_center",
                    "align_left",
                    "align_right",
                    "alt_compose",
                    "alt_compose_pip",
                    "alt_compose_plus",
                    "alt_pill_stroke",
                    "arrow_360_rotate",
                    "arrow_down",
                    "arrow_down_circle_fill",
                    "arrow_down_circle_stroke",
                    "arrow_left",
                    "arrow_right",
                    "arrow_right_circle_fill",
                    "arrow_up",
                    "arrow_up_circle",
                    "arrow_up_circle_fill",
                    "arrow_up_circle_stroke",
                    "arrow_up_left",
                    "arrow_up_right",
                    "at",
                    "at_bold",
                    "at_off",
                    "audio",
                    "background_bar_circle_nomargin",
                    "background_bar_nomargin",
                    "balloon",
                    "balloon_stroke",
                    "bar_chart",
                    "bar_chart_bold",
                    "bar_chart_horizontal",
                    "bar_chart_horizontal_stroke",
                    "bee",
                    "birdwatch",
                    "birdwatch_fill",
                    "birdwatch_flag",
                    "birdwatch_flag_stroke",
                    "bluetooth",
                    "book",
                    "book_stroke_off",
                    "book_stroke_on",
                    "bookmark",
                    "bookmark_close_stroke",
                    "bookmark_collections_stroke",
                    "bookmark_folders_plus_stroke",
                    "bookmark_plus_stroke",
                    "bookmark_stroke",
                    "bot",
                    "briefcase",
                    "briefcase_stroke",
                    "browser_chrome",
                    "browser_safari",
                    "bulleted_list",
                    "calendar",
                    "camera",
                    "camera_flash",
                    "camera_flash_off",
                    "camera_flip",
                    "camera_live_stroke",
                    "camera_plus",
                    "camera_plus_stroke",
                    "camera_stroke",
                    "camera_video",
                    "camera_video_stroke",
                    "camera_video_stroke_off",
                    "cards",
                    "cart",
                    "caution",
                    "caution_stroke",
                    "chat_bubble_checkmark_stroke",
                    "chat_bubble_plus_stroke",
                    "chat_bubble_star_stroke",
                    "chat_bubble_strikethrough_stroke",
                    "chat_bubble_stroke",
                    "checkall",
                    "checkmark",
                    "checkmark_circle",
                    "checkmark_circle_fill",
                    "checkmark_circle_fill_white",
                    "checkmark_square_fill",
                    "chevron_down",
                    "chevron_down_nomargin",
                    "chevron_left",
                    "chevron_right",
                    "chevron_thick_down",
                    "chevron_up",
                    "chevron_up_nomargin",
                    "circle",
                    "circle_fill_nomargin",
                    "clip_stroke",
                    "clock",
                    "clock_circle_fill",
                    "clone",
                    "close",
                    "close_circle",
                    "close_circle_fill",
                    "close_circle_fill_white",
                    "close_nomargin",
                    "closedcaptioning",
                    "closedcaptioning_none",
                    "closedcaptioning_stroke",
                    "cloud_fill",
                    "cloud_off",
                    "cloud_stroke",
                    "code",
                    "collaboration",
                    "collaboration_stroke",
                    "collections",
                    "colorpicker",
                    "colorpicker_off",
                    "colorpicker_on",
                    "column_stroke",
                    "communities",
                    "communities_arrow_stroke",
                    "communities_plus_stroke",
                    "communities_stroke",
                    "compose",
                    "compose_dm",
                    "compose_lists",
                    "compose_spaces",
                    "connect_arrows",
                    "creditcard_back",
                    "crop_corner_nomargin",
                    "crop_original",
                    "crop_square",
                    "crop_wide",
                    "deck_stroke",
                    "deepvoice",
                    "device_airplay",
                    "device_laptop",
                    "device_notification",
                    "device_phone",
                    "device_tablet",
                    "device_tv",
                    "device_unknown",
                    "devtool_bug_nomargin",
                    "devtool_wrench_nomargin",
                    "document",
                    "drafts",
                    "drawer",
                    "drawer_on",
                    "error_circle",
                    "error_circle_fill",
                    "error_circle_fill_white",
                    "error_circle_fill_white_tint",
                    "exiting",
                    "eye",
                    "eye_off",
                    "fast_forward",
                    "feather",
                    "feedback",
                    "feedback_close_stroke",
                    "feedback_stroke",
                    "filter",
                    "filter_fill",
                    "fire",
                    "fire_circle_fill",
                    "fire_stroke",
                    "fire_tint_gradient",
                    "flag",
                    "flag_fill",
                    "flask",
                    "flask_stroke",
                    "follow",
                    "follow_arrow_left_fill",
                    "follow_arrow_left_stroke",
                    "follow_arrows",
                    "follow_close_stroke",
                    "follow_plus",
                    "following",
                    "following_stroke",
                    "foursquare_nomargin",
                    "frown_circle",
                    "frown_circle_fill",
                    "gaming",
                    "gif_compose",
                    "gif_compose_off",
                    "gif_pill",
                    "gif_pill_stroke",
                    "giphy_nomargin",
                    "glasses",
                    "globe",
                    "globe_stroke",
                    "google",
                    "google_color",
                    "government_flag",
                    "grok",
                    "grok_fun",
                    "grok_new_chat",
                    "grok_normal_mode_with_text",
                    "grok_stroke",
                    "hash",
                    "hash_stroke",
                    "heart",
                    "heart_bold",
                    "heart_broken_stroke",
                    "heart_burst",
                    "heart_circle_fill",
                    "heart_disabled_stroke",
                    "heart_plus",
                    "heart_plus_stroke",
                    "heart_stroke",
                    "heart_stroke_bold",
                    "help_circle",
                    "help_circle_fill",
                    "highlights",
                    "history",
                    "home",
                    "home_stroke",
                    "illustration_safety_attention_increase",
                    "illustration_safety_mute",
                    "illustration_safety_mute_conversation",
                    "illustration_safety_mute_words",
                    "immersive_pause",
                    "immersive_play",
                    "incoming",
                    "increasing_background",
                    "information_circle",
                    "information_circle_fill",
                    "key_stroke",
                    "layers_stroke",
                    "lightbulb_stroke_off",
                    "lightbulb_stroke_on",
                    "lightning",
                    "lightning_circle_fill",
                    "lightning_stroke",
                    "link",
                    "lists",
                    "lists_stroke",
                    "live",
                    "live_photo_on",
                    "location",
                    "location_current",
                    "location_stroke",
                    "lock",
                    "lock_stroke",
                    "lock_unlocked",
                    "logo_apple",
                    "logo_google_g_color",
                    "logo_small_bandcamp",
                    "logo_small_bitcoin",
                    "logo_small_cashapp",
                    "logo_small_chipper",
                    "logo_small_ethereum",
                    "logo_small_flutterwave",
                    "logo_small_gofundme",
                    "logo_small_kakaopay",
                    "logo_small_paga",
                    "logo_small_patreon",
                    "logo_small_paypal",
                    "logo_small_paytm",
                    "logo_small_picpay",
                    "logo_small_razorpay",
                    "logo_small_venmo",
                    "logo_small_wealthsimple",
                    "logo_youtube",
                    "media_cast_connected",
                    "media_cast_connecting_1",
                    "media_cast_connecting_2",
                    "media_cast_connecting_3",
                    "media_cast_disconnected",
                    "media_collapse",
                    "media_dock",
                    "media_expand",
                    "media_playback_speed",
                    "media_selection_nomargin",
                    "media_slowmotion",
                    "media_tab",
                    "media_tab_stroke",
                    "medium_camera_live_stroke",
                    "medium_camera_stroke",
                    "medium_news_stroke",
                    "medium_photo_stroke",
                    "medium_plus",
                    "medium_trashcan_stroke",
                    "megaphone",
                    "menu",
                    "messages",
                    "messages_arrow_left_stroke",
                    "messages_stroke",
                    "microphone",
                    "microphone_handheld",
                    "microphone_stroke",
                    "microphone_stroke_off",
                    "microsoft_nomargin",
                    "minus",
                    "minus_circle",
                    "minus_circle_fill",
                    "moderation",
                    "moderation_plus",
                    "moderator",
                    "moderator_close",
                    "moderator_plus",
                    "moderator_stroke",
                    "money",
                    "money_stroke",
                    "more",
                    "more_circle",
                    "mouse_click_circle_fill",
                    "news",
                    "news_stroke",
                    "no",
                    "no_off",
                    "notifications",
                    "notifications_follow",
                    "notifications_following",
                    "notifications_highlight",
                    "notifications_milestone",
                    "notifications_off",
                    "notifications_recommendation",
                    "notifications_safety",
                    "notifications_security_alert",
                    "notifications_security_unknown",
                    "notifications_spaces",
                    "notifications_stroke",
                    "number_1",
                    "number_2",
                    "number_3",
                    "outgoing",
                    "paintbrush_box",
                    "paintbrush_stroke",
                    "papago",
                    "pause",
                    "pencil",
                    "pencil_stroke",
                    "people",
                    "people_crowd",
                    "people_crowd_stroke",
                    "people_group",
                    "people_group_stroke",
                    "people_stroke",
                    "people_stroke_off",
                    "periscope",
                    "periscope_viewers_nomargin",
                    "person",
                    "person_checkmark",
                    "person_checkmark_stroke",
                    "person_circle_fill",
                    "person_heart",
                    "person_heart_stroke",
                    "person_stroke",
                    "phone",
                    "phone_stroke",
                    "photo",
                    "photo_crop",
                    "photo_enhance",
                    "photo_error",
                    "photo_load",
                    "photo_load_4k",
                    "photo_person_stroke",
                    "photo_rotate",
                    "photo_stroke",
                    "pin",
                    "pin_stroke",
                    "pin_stroke_off",
                    "placeholder_live_nomargin",
                    "play",
                    "play_circle",
                    "play_circle_fill",
                    "play_circle_white",
                    "play_error",
                    "plus",
                    "plus_circle",
                    "plus_circle_fill",
                    "profanity",
                    "promote_mode",
                    "promoted_circle",
                    "promoted_pill",
                    "promoted_pill_stroke",
                    "qr_code",
                    "qr_code_scanner",
                    "quickshare",
                    "quickshare_stroke",
                    "quill",
                    "quote_stroke",
                    "rating_half_nomargin",
                    "rating_nomargin",
                    "reload",
                    "reply",
                    "reply_alt",
                    "reply_alt_stroke",
                    "reply_off",
                    "reply_stroke",
                    "reply_stroke_bold",
                    "retweet",
                    "retweet_bold",
                    "retweet_off",
                    "retweet_stroke",
                    "retweet_stroke_bold",
                    "rewind",
                    "riffsy_nomargin",
                    "rocket_stroke",
                    "safety",
                    "safety_mode",
                    "safety_mode_stroke",
                    "schedule",
                    "scrub_bar_nomargin",
                    "scrub_playhead_nomargin",
                    "search",
                    "search_nomargin",
                    "search_person_stroke",
                    "search_stroke",
                    "settings",
                    "settings_stroke",
                    "share",
                    "share_stroke",
                    "share_stroke_bold",
                    "shooting_star_circle_fill",
                    "shop_module",
                    "shopping",
                    "shopping_clock",
                    "shopping_clock_stroke",
                    "shopping_stroke",
                    "skip",
                    "skip_forward",
                    "skip_rewind",
                    "smile_circle",
                    "smile_circle_fill",
                    "smile_people",
                    "smile_people_close",
                    "smile_rating_1_circle",
                    "smile_rating_1_circle_fill_white",
                    "smile_rating_2_circle",
                    "smile_rating_2_circle_fill_white",
                    "smile_rating_3_circle",
                    "smile_rating_3_circle_fill_white",
                    "smile_rating_4_circle",
                    "smile_rating_4_circle_fill_white",
                    "smile_rating_5_circle",
                    "smile_rating_5_circle_fill_white",
                    "sort_arrow_down",
                    "sort_arrow_down_stroke",
                    "sort_arrow_up",
                    "sort_arrow_up_stroke",
                    "sort_arrows",
                    "sound",
                    "sound_fill",
                    "sound_off",
                    "spaces",
                    "spaces_stroke",
                    "sparkle",
                    "sparkle_stroke",
                    "spatial",
                    "speaker",
                    "speaker_off",
                    "square_stroke",
                    "ssp_display_ad_avatar",
                    "stadium",
                    "stagelight",
                    "star_rising",
                    "star_stroke",
                    "station",
                    "sticker",
                    "sticker_accessories",
                    "sticker_activity",
                    "sticker_featured",
                    "sticker_flags",
                    "sticker_food",
                    "sticker_nature",
                    "sticker_objects",
                    "sticker_people",
                    "sticker_recent",
                    "sticker_symbols",
                    "sticker_travel",
                    "sticker_words",
                    "stop",
                    "stop_circle",
                    "sunglasses",
                    "superfollow",
                    "superfollow_stroke",
                    "text_bold",
                    "text_medium",
                    "text_regular",
                    "text_size",
                    "text_size_decrease",
                    "text_size_increase",
                    "thumbs_down",
                    "thumbs_down_fill",
                    "thumbs_down_thick",
                    "thumbs_up",
                    "thumbs_up_fill",
                    "thumbs_up_thick",
                    "ticket_stroke",
                    "timeline_stroke",
                    "topics",
                    "topics_close_stroke",
                    "topics_stroke",
                    "transparency_off",
                    "transparency_on",
                    "trashcan",
                    "trashcan_stroke",
                    "trashcan_stroke_bottom_nomargin",
                    "trashcan_stroke_top_nomargin",
                    "twitter",
                    "undo",
                    "undo_tweet_demo_dim",
                    "undo_tweet_demo_light",
                    "undo_tweet_demo_light_out",
                    "verified",
                    "verified_gold",
                    "verified_gray",
                    "verified_stroke",
                    "video_collapse",
                    "video_expand",
                    "vine",
                    "voice",
                    "xpremium",
                    "xpremium_stroke",
                    "yelp_nomargin",
                    "xai_grok",
                    "radar_stroke",
                    "birdwatch_icon_writing",
                    "award",
                    "browser_globe",
                    "cookies",
                    "chart_line",
                    "heart_broken",
                    "incoming",
                    "gift_stroke",
                    "mask",
                    "megaphone_stroke",
                    "payments",
                    "payments_stroke",
                    "radar_stroke",
                    "rocket",
                    "safety_fill",
                    "timeline_alt_stroke",
                    "twitter_coin_icon",
                    "twitter_coin_stroke",
                    "verified_blue",
                    "xai",
                    "xai_stroke",
                    "xai_grok_stroke",
                    "xai_grok_tab",
                    "xai_grok_tab_stroke",
                    "YELP_RATING_0_0_nomargin",
                    "YELP_RATING_1_0_nomargin",
                    "YELP_RATING_1_5_nomargin",
                    "YELP_RATING_2_0_nomargin",
                    "YELP_RATING_2_5_nomargin",
                    "YELP_RATING_3_0_nomargin",
                    "YELP_RATING_3_5_nomargin",
                    "YELP_RATING_4_0_nomargin",
                    "YELP_RATING_4_5_nomargin",
                    "YELP_RATING_5_0_nomargin",
                    "chat",
                    "chat_stroke",
                    "grok_deepsearch",
                    "media_tab_v2_stroke",
                    "map",
                    "ball",
                    "envelope_fill",
                    "grok_logo",
                ],
                l = o.reduce((e, t) => {
                    const a = `Icon${((e) => {
                        const [t, ...a] = e.split("_");
                        return t?.toLowerCase() + a.map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join("");
                    })(t).replace(/^(.)/, (e) => e.toUpperCase())}`;
                    return n[a] && (e[t] = n[a]), e;
                }, {});
            function s({ p: e, mods: t }) {
                const a = e.enum("key") ?? -1,
                    n = (-1 !== a ? o[a] : void 0) ?? "",
                    s = e.int("size") ?? 24,
                    c = l[n] ?? r.Z;
                return (0, i.jsx)(c, { className: t, width: s, height: s });
            }
        },
        96675: (e, t, a) => {
            a.d(t, { Z: () => o });
            var i = a(552322),
                n = a(801102),
                r = a(109195);
            function o({ el: e, p: t }) {
                const a = t.bool("cond") ?? !1,
                    o = t.element("else") ?? null,
                    l = o ? (0, i.jsx)(r.Z, { el: o }) : null;
                return a ? (0, n.Z)(e) : l;
            }
        },
        324212: (e, t, a) => {
            a.d(t, { Z: () => n });
            var i = a(552322);
            function n({ p: e, mods: t }) {
                const a = e.str("src") ?? "";
                return (0, i.jsx)("img", { src: a, alt: "d", className: `block object-cover ${t} ` });
            }
        },
        379265: (e, t, a) => {
            a.d(t, { Z: () => o });
            var i = a(552322),
                n = a(801102),
                r = a(608222);
            function o({ el: e, p: t, mods: a }) {
                const o = (0, r.o)();
                if (!o || !o.Runtime) return (0, i.jsx)("div", { className: `${a}`, children: "Can't find runtime" });
                const { Runtime: l } = o,
                    s = "https://x.com",
                    c = "https://twitter.com",
                    d = t.url("url") ?? "";
                return (0, i.jsx)("button", {
                    className: `flex ${a} cursor-pointer`,
                    onClick: (e) =>
                        ((e) => {
                            if ((e.preventDefault(), e.stopPropagation(), d))
                                if (d.startsWith("twitter://jf/")) {
                                    const e = d.slice(10);
                                    l.history.push(`/i/${e}`);
                                } else if (d.startsWith(c)) {
                                    const e = d.slice(19);
                                    l.history.push(e);
                                } else if (d.startsWith(s)) {
                                    const e = d.slice(13);
                                    l.history.push(e);
                                } else window && (window.location.href = d);
                        })(e),
                    type: "button",
                    children: (0, n.Z)(e),
                });
            }
        },
        447763: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(552322),
                n = a(801102),
                r = a(109195);
            function o(e, t) {
                return (0, i.jsx)("div", { children: (0, i.jsx)(r.Z, { el: e }) }, e.id || `list-item-${t}`);
            }
            function l({ el: e, mods: t }) {
                return (0, i.jsx)("div", { className: ` ${t}`, children: (0, n.Z)(e, o) });
            }
        },
        553366: (e, t, a) => {
            a.d(t, { Z: () => o });
            var i = a(552322),
                n = a(801102),
                r = a(608222);
            function o({ el: e, p: t, mods: a }) {
                const o = (0, r.o)();
                if (!o || !o.Runtime) return (0, i.jsx)("div", { className: `${a}`, children: "Can't find runtime" });
                const { Runtime: l } = o,
                    s = t.str("to") ?? "",
                    c = s.startsWith("/") ? s.slice(1) : s;
                return (0, i.jsx)("button", {
                    type: "button",
                    className: `flex ${a}`,
                    onClick: (e) =>
                        ((e) => {
                            e.stopPropagation(), e.preventDefault(), c && (":back" === c ? l.history.goBack() : ":dismiss" === c || l.history.push(`/i/jf/${c}`));
                        })(e),
                    children: (0, i.jsx)("div", { className: "w-full", children: (0, n.Z)(e) }),
                });
            }
        },
        287359: (e, t, a) => {
            a.d(t, { q: () => l });
            var i = a(202784);
            function n(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e;
            }
            var r = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect,
                o = new WeakMap();
            function l(e, t) {
                var a,
                    l,
                    s,
                    c =
                        ((a = t || null),
                        (l = function (t) {
                            return e.forEach(function (e) {
                                return n(e, t);
                            });
                        }),
                        ((s = (0, i.useState)(function () {
                            return {
                                value: a,
                                callback: l,
                                facade: {
                                    get current() {
                                        return s.value;
                                    },
                                    set current(e) {
                                        var t = s.value;
                                        t !== e && ((s.value = e), s.callback(e, t));
                                    },
                                },
                            };
                        })[0]).callback = l),
                        s.facade);
                return (
                    r(
                        function () {
                            var t = o.get(c);
                            if (t) {
                                var a = new Set(t),
                                    i = new Set(e),
                                    r = c.current;
                                a.forEach(function (e) {
                                    i.has(e) || n(e, null);
                                }),
                                    i.forEach(function (e) {
                                        a.has(e) || n(e, r);
                                    });
                            }
                            o.set(c, e);
                        },
                        [e],
                    ),
                    c
                );
            }
        },
        757758: (e, t, a) => {
            a.d(t, { L: () => o });
            var i = a(305163),
                n = a(202784),
                r = function (e) {
                    var t = e.sideCar,
                        a = (0, i._T)(e, ["sideCar"]);
                    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
                    var r = t.read();
                    if (!r) throw new Error("Sidecar medium not found");
                    return n.createElement(r, (0, i.pi)({}, a));
                };
            function o(e, t) {
                return e.useMedium(t), r;
            }
            r.isSideCarExport = !0;
        },
        964597: (e, t, a) => {
            a.d(t, { _: () => o });
            var i = a(305163);
            function n(e) {
                return e;
            }
            function r(e, t) {
                void 0 === t && (t = n);
                var a = [],
                    i = !1;
                return {
                    read: function () {
                        if (i) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return a.length ? a[a.length - 1] : e;
                    },
                    useMedium: function (e) {
                        var n = t(e, i);
                        return (
                            a.push(n),
                            function () {
                                a = a.filter(function (e) {
                                    return e !== n;
                                });
                            }
                        );
                    },
                    assignSyncMedium: function (e) {
                        for (i = !0; a.length; ) {
                            var t = a;
                            (a = []), t.forEach(e);
                        }
                        a = {
                            push: function (t) {
                                return e(t);
                            },
                            filter: function () {
                                return a;
                            },
                        };
                    },
                    assignMedium: function (e) {
                        i = !0;
                        var t = [];
                        if (a.length) {
                            var n = a;
                            (a = []), n.forEach(e), (t = a);
                        }
                        var r = function () {
                                var a = t;
                                (t = []), a.forEach(e);
                            },
                            o = function () {
                                return Promise.resolve().then(r);
                            };
                        o(),
                            (a = {
                                push: function (e) {
                                    t.push(e), o();
                                },
                                filter: function (e) {
                                    return (t = t.filter(e)), a;
                                },
                            });
                    },
                };
            }
            function o(e) {
                void 0 === e && (e = {});
                var t = r(null);
                return (t.options = (0, i.pi)({ async: !0, ssr: !1 }, e)), t;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28.9dbf7caa.js.map

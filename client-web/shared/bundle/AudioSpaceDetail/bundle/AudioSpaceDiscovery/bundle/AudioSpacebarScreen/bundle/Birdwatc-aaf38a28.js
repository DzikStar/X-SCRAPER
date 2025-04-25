"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"],
    {
        154462: (e, t, r) => {
            var o = r(634590);
            t.ZP = void 0;
            var n = r(526);
            t.S_ = n.updateAudioLevels;
            var s = r(790978);
            t.eu = s.updateGuestInfo;
            var i = o(r(187632));
            (t.$4 = i.default), (t.mC = i.registerExperience);
            var a = o(r(427193));
            (t.Nu = a.resetGuestState), (t.Nt = a.teardownExperience);
            var l = a.default;
            t.ZP = l;
        },
        526: (e, t, r) => {
            r(332501), r(43105), (t.__esModule = !0), (t.default = t.InitialState = t.updateAudioLevels = t.UPDATE_AUDIO_LEVELS = void 0);
            var o = "UPDATE_AUDIO_LEVELS";
            t.UPDATE_AUDIO_LEVELS = o;
            t.updateAudioLevels = function (e, t) {
                return { type: o, audioLevels: t, experienceId: e };
            };
            var n = { guests: {}, host: 0 };
            t.InitialState = n;
            t.default = function (e, t) {
                if ((void 0 === e && (e = n), t.type === o)) {
                    for (var r = t.audioLevels, s = r[0], i = r.slice(1), a = {}, l = 0; l < i.length; l++) a[l] = i[l];
                    return Object.assign({}, e, { guests: a, host: s });
                }
                return e;
            };
        },
        790978: (e, t) => {
            (t.__esModule = !0), (t.default = t.updateGuestInfo = t.UPDATE_GUEST_INFO = void 0);
            var r = "UPDATE_GUEST_INFO";
            t.UPDATE_GUEST_INFO = r;
            t.updateGuestInfo = function (e, t) {
                return { type: r, guestInfo: t, experienceId: e };
            };
            t.default = function (e, t) {
                if ((void 0 === e && (e = {}), t.type === r)) {
                    for (var o = t.guestInfo, n = {}, s = 0; s < o.length; s++) {
                        var i = o[s],
                            a = i.ParticipantIndex,
                            l = i.ProfileUrl,
                            c = i.SessionId,
                            u = i.StreamName,
                            _ = i.UserId,
                            d = i.UserName;
                        n[s] = { ParticipantIndex: a, ProfileUrl: l, SessionId: c, StreamName: u, UserId: _, UserName: d };
                    }
                    return n;
                }
                return e;
            };
        },
        187632: (e, t, r) => {
            var o = r(171600);
            r(543450), r(271245), r(966466), r(977208), r(334769), (t.__esModule = !0), (t.default = t.registerExperience = t.REGISTER_EXPERIENCE = void 0);
            var n = o(r(373408)),
                s = r(427193),
                i = "REGISTER_EXPERIENCE";
            t.REGISTER_EXPERIENCE = i;
            t.registerExperience = function () {
                return { type: i };
            };
            t.default = function (e) {
                return function (t) {
                    return function (r) {
                        if (r.type === i) {
                            var o = e.getState(),
                                a = Object.keys(o.hydraExperiences || {}).map(function (e) {
                                    return Number.parseInt(e, 10);
                                }),
                                l = Math.max.apply(Math, (0, n.default)(a)) + 1;
                            return Number.isFinite(l) || (l = 0), e.dispatch((0, s.initializeExperience)(l)), l;
                        }
                        return t(r);
                    };
                };
            };
        },
        427193: (e, t, r) => {
            var o = r(634590),
                n = r(171600);
            r(43105), (t.__esModule = !0), (t.default = t.resetGuestState = t.RESET_GUEST_STATE = t.teardownExperience = t.TEARDOWN_EXPERIENCE = t.initializeExperience = t.INITIALIZE_EXPERIENCE = void 0);
            var s = r(10674),
                i = n(r(790978)),
                a = o(r(526)),
                l = "INITIALIZE_EXPERIENCE";
            t.INITIALIZE_EXPERIENCE = l;
            t.initializeExperience = function (e) {
                return { type: l, experienceId: e };
            };
            var c = "TEARDOWN_EXPERIENCE";
            t.TEARDOWN_EXPERIENCE = c;
            t.teardownExperience = function (e) {
                return { type: c, experienceId: e };
            };
            var u = "RESET_GUEST_STATE";
            t.RESET_GUEST_STATE = u;
            t.resetGuestState = function (e) {
                return { type: u, experienceId: e };
            };
            var _ = { audioLevels: a.InitialState, guests: {} },
                d = (0, s.combineReducers)({ audioLevels: a.default, guests: i.default });
            t.default = function (e, t, r) {
                var o;
                if ((void 0 === e && (e = {}), void 0 === r && (r = d), void 0 !== t.experienceId))
                    switch (t.type) {
                        case l:
                        case u:
                            return Object.assign({}, e, (((o = {})[t.experienceId] = _), o));
                        case c:
                            var n = Object.assign({}, e);
                            return delete n[t.experienceId], n;
                        default:
                            var s,
                                i = r(e[t.experienceId], t);
                            return Object.assign({}, e, (((s = {})[t.experienceId] = i), s));
                    }
                return e;
            };
        },
        10674: (e, t, r) => {
            r(743108), r(334769), (t.__esModule = !0), (t.combineReducers = void 0);
            t.combineReducers = function (e) {
                return function (t, r) {
                    return Object.keys(e).reduce(function (o, n) {
                        return (o[n] = e[n](t[n], r)), o;
                    }, {});
                };
            };
        },
        244448: (e, t, r) => {
            r.d(t, { GZ: () => n.GZ, mQ: () => o.Z, tJ: () => n.tJ, vz: () => n.vz });
            var o = r(498348),
                n = r(122883);
        },
        801102: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(552322),
                n = r(109195);
            function s(e, t) {
                const r = (function (e) {
                    return e.children.map((t) => e.dom.el(t));
                })(e);
                return r.map((e, r) => (t ? t(e, r) : (0, o.jsx)(n.Z, { el: e }, e.id || `child-${r}`)));
            }
        },
        960546: (e, t, r) => {
            r.d(t, { Z: () => u });
            var o = r(552322),
                n = r(202784),
                s = r(801102),
                i = r(109195),
                a = r(244448),
                l = r(608222),
                c = r(366665);
            function u({ el: e, p: t, mods: r }) {
                const [u, _] = (0, n.useState)(["init"]),
                    [d, f] = (0, n.useState)(!1),
                    [m, p] = (0, n.useState)(null),
                    [h, g] = (0, n.useState)(null),
                    [v, k] = (0, n.useState)({}),
                    b = (0, n.useRef)(null),
                    w = (0, n.useRef)(null),
                    x = (0, n.useRef)(null),
                    E = t.url("feed") ?? "",
                    y = t.element("header"),
                    j = t.element("footer"),
                    S = t.str("cursor:top"),
                    N = t.str("cursor:bottom"),
                    Z = (0, l.o)();
                function I(e, t) {
                    return (0, o.jsx)("div", { children: (0, o.jsx)(i.Z, { el: e }) }, e.id || `list-item-${t}`);
                }
                return (
                    (0, n.useEffect)(() => {
                        N && p(N), S && g(S);
                    }, [N, S]),
                    (0, n.useEffect)(() => {
                        E &&
                            Z &&
                            Z.Runtime &&
                            (f(!0),
                            u.forEach(async (e) => {
                                const t = `${E}${"init" === e ? "" : `&cursor=${e}`}`;
                                try {
                                    f(!0);
                                    const { Runtime: r } = Z;
                                    if (!r) return;
                                    const o = (0, a.vz)(r),
                                        n = o.session(),
                                        s = await r.net.httpGet(t);
                                    if ((s.data && n.onChunk(new Uint8Array(s.data)), o.root.value)) {
                                        const t = (0, a.tJ)(o.root.value).str("cursor:bottom") || "",
                                            r = (0, a.tJ)(o.root.value).str("cursor:top") || "";
                                        t && p(t), r && g(r), k((t) => ({ ...t, [e]: o.root.value }));
                                    }
                                } catch (e) {
                                } finally {
                                    f(!1);
                                }
                            }));
                    }, [E, u, Z]),
                    (0, n.useEffect)(() => {
                        const e = w.current;
                        if (!e) return;
                        const t = new IntersectionObserver(
                            (e) => {
                                e[0]?.isIntersecting && !d && m && _((e) => [...e, m]);
                            },
                            { rootMargin: "200px" },
                        );
                        return (
                            t.observe(e),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [m, d]),
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
                    }, [h, d]),
                    (0, o.jsxs)("div", {
                        ref: b,
                        className: `${r}`,
                        children: [
                            (0, o.jsx)("div", { ref: x, style: { height: "10px", width: "100%" } }),
                            y && (0, o.jsx)(i.Z, { el: y }),
                            (0, o.jsx)("div", { className: "list-static-items", children: (0, s.Z)(e, I) }),
                            !d &&
                                (0, o.jsx)("div", {
                                    className: "list-feed-items",
                                    children: u.map((e) => {
                                        const t = v[e];
                                        return t ? (0, o.jsx)("div", { className: "feed-page", children: (0, s.Z)(t, I) }, e) : (0, o.jsx)("div", {}, e);
                                    }),
                                }),
                            d && (0, o.jsx)(c.P, {}),
                            j && (0, o.jsx)(i.Z, { el: j }),
                            (0, o.jsx)("div", { ref: w, style: { height: "10px", width: "100%" } }),
                        ],
                    })
                );
            }
        },
        655419: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(552322),
                n = r(202784),
                s = r(801102),
                i = r(608222),
                a = r(869593);
            const l = 500;
            function c({ el: e, p: t, mods: r }) {
                const c = t.action("on:press"),
                    u = t.strDict("scribe:press") ?? {},
                    _ = t.action("on:longpress"),
                    d = t.strDict("scribe:longpress") ?? {},
                    f = t.bool("disabled") ?? !1,
                    m = (0, a.h8)(),
                    p = (0, i.o)()?.Analytics,
                    h = (0, n.useRef)(null),
                    g = (0, n.useRef)(!1),
                    v = null != c || null != _,
                    k = () => {
                        if (c) {
                            c();
                            const e = (0, a.QI)("click", { ...m, ...u });
                            p?.scribe(e);
                        }
                    };
                return (0, o.jsx)("button", {
                    className: r,
                    type: "button",
                    disabled: f,
                    onPointerDown: (e) => {
                        v && e.stopPropagation(),
                            (g.current = !1),
                            clearTimeout(h.current ?? 0),
                            (h.current = window.setTimeout(() => {
                                (g.current = !0), (h.current = null);
                            }, l));
                    },
                    onPointerUp: (e) => {
                        v && e.stopPropagation(),
                            f ||
                                (g.current
                                    ? (() => {
                                          if (_) {
                                              _();
                                              const e = (0, a.QI)("longpress", { ...m, ...d });
                                              p?.scribe(e);
                                          }
                                      })()
                                    : k());
                    },
                    onKeyDown: (e) => {
                        v && e.stopPropagation(), f || ("Space" !== e.code && "Enter" !== e.code) || k();
                    },
                    children: (0, s.Z)(e),
                });
            }
        },
        736938: (e, t, r) => {
            r.d(t, { Z: () => n });
            var o = r(552322);
            function n({ p: e, mods: t }) {
                const r = e.int("count") ?? 0;
                return (0, o.jsx)("div", { className: t, children: r });
            }
        },
        110972: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(552322),
                n = r(801102),
                s = r(202784),
                i = r(608222);
            function a({ showModal: e, setShowModal: t, children: r }) {
                const n = (0, s.useRef)(null),
                    [a, l] = (0, s.useState)(!1),
                    c = (0, i.o)();
                if (!c) return (0, o.jsx)("div", { children: "Runtime not available" });
                const { Runtime: u } = c;
                (0, s.useEffect)(() => {
                    const e = window.matchMedia("(min-width: 1024px)"),
                        t = (e) => {
                            l(e.matches);
                        };
                    return (
                        t(e),
                        e.addEventListener("change", t),
                        () => {
                            e.removeEventListener("change", t);
                        }
                    );
                }, []),
                    (0, s.useEffect)(() => {
                        e && n.current ? (u.addCover(n.current), n.current.showModal()) : !e && n.current?.open && (n.current.close(), u.removeCover());
                    }, [e, u.addCover, u.removeCover]);
                return (0, o.jsx)("dialog", {
                    ref: n,
                    onClose: () => t(!1),
                    onClick: (e) => {
                        e.target === n.current && (e.stopPropagation(), n.current?.close(), t(!1));
                    },
                    style: a ? void 0 : { width: "100%", minWidth: "100vw", minHeight: "100vh", height: "100%" },
                    className: "w-full min-w-screen h-screen w-screen lg:min-w-none rounded-[0.2em] border-none p-0 fixed lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 m-0 lg:w-full lg:max-h-full z-[1] bg-transparent backdrop:bg-black/30 motion-safe:animate-fadeIn lg:motion-safe:[&[open]]:animate-zoomIn lg:focus:outline-none lg:max-w-[600px]",
                    children: (0, o.jsx)("div", { onClick: (e) => e.stopPropagation(), className: "p-4 contents flex-col items-center text-center h-full w-full", children: r }),
                });
            }
            var l = r(109195);
            function c({ el: e, p: t, mods: r }) {
                const [i, c] = (0, s.useState)(!1),
                    u = t?.element?.("cover");
                return (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)("button", {
                            className: r,
                            onClick: (e) => {
                                e.stopPropagation(), c(!0);
                            },
                            type: "button",
                            children: (0, n.Z)(e),
                        }),
                        u && (0, o.jsx)(a, { showModal: i, setShowModal: c, children: (0, o.jsx)(l.Z, { el: u }) }),
                    ],
                });
            }
        },
        897531: (e, t, r) => {
            r.d(t, { Z: () => u });
            var o = r(552322),
                n = r(202784),
                s = r(801102),
                i = r(122883),
                a = r(608222);
            const l = () => (0, o.jsx)("div", { children: "Loading..." });
            function c({ feedSrc: e, onBottomCursor: t, onLoadComplete: r }) {
                const [c, u] = (0, n.useState)(!0),
                    [_, d] = (0, n.useState)(null),
                    [f, m] = (0, n.useState)(null),
                    p = (0, n.useRef)({}),
                    h = (0, a.o)();
                return h && h.Runtime
                    ? ((0, n.useEffect)(() => {
                          if (p.current[e]) return;
                          p.current[e] = !0;
                          const { Runtime: o } = h,
                              n = (0, i.vz)(o);
                          !(async function () {
                              u(!0);
                              const s = n.session(),
                                  a = await o.net.httpGet(e);
                              if ((a.data && s.onChunk(new Uint8Array(a.data)), m(n.root.value), n.root.value)) {
                                  const e = (0, i.tJ)(n.root.value).str("cursor:bottom") || "";
                                  t(e);
                              }
                              u(!1), r();
                          })();
                      }, [e, t, r, h]),
                      c ? (0, o.jsx)(l, {}) : _ ? (0, o.jsx)("p", { style: { color: "red" }, children: _.message }) : (0, o.jsx)("div", { className: "contents", children: !f || c || _ ? null : (0, s.Z)(f) }))
                    : (d(new Error("Runtime not available")), u(!1), void r());
            }
            function u({ p: e, mods: t }) {
                const [r, s] = (0, n.useState)(["init"]),
                    [i, a] = (0, n.useState)(!1),
                    [l, u] = (0, n.useState)(null),
                    _ = (0, n.useRef)(null),
                    d = (0, n.useRef)(null),
                    f = e?.url?.("src") ?? "";
                (0, n.useEffect)(() => {
                    const e = d.current;
                    if (!e) return;
                    const t = new IntersectionObserver(
                        (e) => {
                            e[0]?.isIntersecting && !i && l && (a(!0), s((e) => [...e, l]));
                        },
                        { rootMargin: "200px" },
                    );
                    return (
                        t.observe(e),
                        () => {
                            t.disconnect();
                        }
                    );
                }, [l, i]);
                const m = (e) => {
                        u(e);
                    },
                    p = () => {
                        a(!1);
                    };
                return (0, o.jsxs)("div", { ref: _, className: `${t}`, children: [r.map((e) => ("" === e ? null : (0, o.jsx)(c, { feedSrc: `${f.startsWith("/") ? "" : "/"}${f}${"init" === e ? "" : `&cursor=${e}`}`, onBottomCursor: m, onLoadComplete: p }, `${e}`))), (0, o.jsx)("div", { ref: d, style: { height: "10px", width: "100%" } })] });
            }
        },
        418041: (e, t, r) => {
            r.d(t, { Z: () => m });
            var o = r(552322),
                n = r(202784),
                s = r(801102),
                i = r(109195),
                a = r(122883),
                l = r(608222),
                c = r(644109),
                u = r(916025),
                _ = r(830030),
                d = r(910352);
            const f = (0, n.createContext)({ values: {}, submit: () => {}, setErrors: () => {}, change: (e, t) => {}, errors: {}, setFocus: () => {}, submissionStatus: "pending", submissionResult: void 0, validationStatus: "pending", canSubmit: !1 });
            (0, n.createContext)({ groupKeys: new Set(), active: new Set(), register: (e) => {} });
            function m({ el: e, p: t, mods: r }) {
                const m = (0, l.o)(),
                    p = t.url("action") ?? "",
                    h = t.strDict("errors"),
                    g = t.url("validation"),
                    v = t.str("submissionStatus") ?? "pending",
                    [k, b] = (0, n.useState)(() => t.strDict("values") ?? {}),
                    [w, x] = (0, n.useState)(),
                    [E, y] = (0, n.useState)(g ? "ongoing" : "pending"),
                    j = (0, d.Z)((e) => {
                        t.setStrDict("errors", e);
                    }),
                    S = (0, d.Z)((e) => {
                        t.setStr("focus", e);
                    }),
                    N = (0, d.Z)((e) => {
                        t.setStrDict("values", (0, _.e)(e));
                    }),
                    Z = (0, d.Z)((e) => {
                        t.setStr("submissionStatus", e), t.setBool("submitting", "ongoing" === e);
                    }),
                    I = (e) => {
                        y(e), t.setBool("validating", "ongoing" === e);
                    },
                    R = (0, d.Z)(async () => {
                        if ("ongoing" !== v && p) {
                            Z("ongoing");
                            const e = m?.Runtime;
                            if (e)
                                try {
                                    const { ok: t, data: r } = await e.net.httpPOST(p, new Map(Object.entries(k)));
                                    if (t && r) {
                                        const t = (0, a.KM)(e, new Uint8Array(r));
                                        x(t.root.value), Z("success");
                                    } else Z("error");
                                } catch (e) {
                                    Z("error");
                                }
                        }
                    }),
                    $ = (0, d.Z)((e, t) => {
                        b((r) => ({ ...r, [e]: t })), Z("pending"), I("pending"), x(void 0);
                    }),
                    T = (0, n.useRef)(k);
                (0, n.useLayoutEffect)(() => {
                    T.current = k;
                }, [k]);
                const C = (0, d.Z)((e, t) => {
                        I("ongoing");
                        const r = m?.Runtime;
                        r &&
                            r.net
                                .httpPOST(t, new Map(Object.entries(k)))
                                .then(({ ok: t, data: r }) => {
                                    if (T.current === e)
                                        if (t && r) {
                                            const e = JSON.parse(new TextDecoder().decode(r));
                                            (0, u.x)(e) ? (j({}), I("success")) : (j(e), I("failure"));
                                        } else j({}), I("success");
                                })
                                .catch(() => {
                                    I("error");
                                });
                    }),
                    P = (0, n.useMemo)(() => (0, c.D)(C, 500), [C]);
                (0, n.useEffect)(() => {
                    g && P(k, g);
                }, [P, k, g]);
                const A = (0, n.useMemo)(() => (g ? "success" === E : !!p && ("pending" === v || "error" === v)), [v, E, g, p]);
                return (
                    (0, n.useEffect)(() => {
                        N(k);
                    }, [k, N]),
                    (0, o.jsxs)(f.Provider, { value: { values: k, submit: R, change: $, submissionResult: w, submissionStatus: v, validationStatus: E, errors: h, setErrors: j, setFocus: S, canSubmit: A }, children: [(0, o.jsx)("div", { className: r, children: (0, s.Z)(e) }), w && (0, o.jsx)(i.Z, { el: w })] })
                );
            }
        },
        754732: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(552322),
                n = r(801102),
                s = r(202784),
                i = r(122883);
            function a({ p: e, el: t, mods: r }) {
                const a = e.int("gapH") ?? 2,
                    l = e.int("gapV") ?? 2,
                    c = (0, n.Z)(t),
                    u = (0, s.useMemo)(() => {
                        if (!c) return 12;
                        let e = 0;
                        return (
                            c.forEach((t) => {
                                const r = (0, n.Z)(t.props.el);
                                let o = 0;
                                r.forEach((e) => {
                                    const t = (0, i.tJ)(e.props.el).int("columns") ?? 1;
                                    o += t;
                                }),
                                    (e = Math.max(e, o));
                            }),
                            e || 12
                        );
                    }, [c]);
                return (0, o.jsx)("div", { className: `${r}`, children: (0, o.jsxs)("table", { style: { borderSpacing: `${a}px ${l}px` }, className: "w-full border-separate", children: [(0, o.jsx)("colgroup", { children: [...Array(u)].map((e, t) => (0, o.jsx)("col", { width: 100 / u + "%" }, `grid-col-${t}-${u}`)) }), (0, o.jsx)("tbody", { children: (0, n.Z)(t) })] }) });
            }
        },
        298490: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(552322),
                n = r(801102);
            function s({ p: e, el: t, mods: r }) {
                const s = e.int("columns") ?? 1,
                    i = ["start", "center", "end"][e.enum("align") ?? 0];
                return (0, o.jsx)("td", { colSpan: s, className: ` ${r}`, style: { textAlign: i }, children: (0, n.Z)(t) });
            }
        },
        584363: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(552322),
                n = r(801102);
            function s({ p: e, el: t, mods: r }) {
                const s = ["center", "flex-start", "baseline", "flex-end"][e.enum("align") ?? 0];
                return (0, o.jsx)("tr", { className: `align-${s} ${r}`, children: (0, n.Z)(t) });
            }
        },
        514378: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(552322),
                n = r(109195),
                s = r(202784);
            function i({ el: e, p: t, mods: r }) {
                const i = t.int("gap") ?? 2,
                    a = t.int("initialPos") ?? 0,
                    l = (function (e) {
                        return e.children.map((t) => e.dom.el(t));
                    })(e),
                    c = (0, s.useRef)(null),
                    [u, _] = (0, s.useState)(0);
                (0, s.useEffect)(() => {
                    if (c.current && a > 0 && a < l.length) {
                        const e = c.current.children[a];
                        e && c.current.scrollTo({ left: e.offsetLeft, behavior: "smooth" });
                    }
                }, [a, l.length]);
                const d = 0 !== u,
                    f = c.current && u <= c.current?.scrollWidth - c.current?.clientWidth - 2;
                return (0, o.jsxs)("div", {
                    className: `relative ${r}`,
                    children: [
                        d &&
                            (0, o.jsx)("div", {
                                className: "absolute z-10 rounded-full overflow-hidden ml-1 mr-1 opacity-0 hover:opacity-100 transition-opacity duration-200",
                                children: (0, o.jsx)("button", {
                                    onClick: () => {
                                        c.current && c.current.scrollTo({ left: 0, behavior: "smooth" });
                                    },
                                    className: "focus:outline-none",
                                    type: "button",
                                }),
                            }),
                        (0, o.jsx)("div", {
                            ref: c,
                            className: "flex flex-row flex-nowrap overflow-x-auto overflow-y-hidden w-full [&::-webkit-scrollbar]:hidden [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none]",
                            onScroll: () => {
                                c.current && _(c.current.scrollLeft);
                            },
                            style: { scrollbarWidth: "none" },
                            children: l.map((e, t) => (0, o.jsx)("div", { className: "flex-auto whitespace-nowrap flex-shrink-0", style: { paddingRight: `${i}px` }, children: (0, o.jsx)(n.Z, { el: e }) }, e.id?.toString() || `hscroller-item-${t}`)),
                        }),
                        f &&
                            (0, o.jsx)("div", {
                                className: "absolute z-10 rounded-full overflow-hidden ml-1 mr-1 opacity-0 hover:opacity-100 transition-opacity duration-200 right-0",
                                children: (0, o.jsx)("button", {
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
        825770: (e, t, r) => {
            r.d(t, { Z: () => n });
            var o = r(552322);
            function n({ mods: e }) {
                return (0, o.jsx)("div", { className: `${e}`, children: "Fuck HStacks" });
            }
        },
        608594: (e, t, r) => {
            r.d(t, { C: () => l });
            var o = r(552322),
                n = r(650677),
                s = r(924799);
            const i = [
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
                a = i.reduce((e, t) => {
                    const r = `Icon${((e) => {
                        const [t, ...r] = e.split("_");
                        return t?.toLowerCase() + r.map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join("");
                    })(t).replace(/^(.)/, (e) => e.toUpperCase())}`;
                    return n[r] && (e[t] = n[r]), e;
                }, {});
            function l({ p: e, mods: t }) {
                const r = e.enum("key") ?? -1,
                    n = (-1 !== r ? i[r] : void 0) ?? "",
                    l = e.int("size") ?? 24,
                    c = a[n] ?? s.Z;
                return (0, o.jsx)(c, { className: t, width: l, height: l });
            }
        },
        96675: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(552322),
                n = r(801102),
                s = r(109195);
            function i({ el: e, p: t }) {
                const r = t.bool("cond") ?? !1,
                    i = t.element("else") ?? null,
                    a = i ? (0, o.jsx)(s.Z, { el: i }) : null;
                return r ? (0, n.Z)(e) : a;
            }
        },
        324212: (e, t, r) => {
            r.d(t, { Z: () => n });
            var o = r(552322);
            function n({ p: e, mods: t }) {
                const r = e.str("src") ?? "";
                return (0, o.jsx)("img", { src: r, alt: "d", className: `${t} block object-cover` });
            }
        },
        379265: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(552322),
                n = r(801102),
                s = r(608222);
            function i({ el: e, p: t, mods: r }) {
                const i = (0, s.o)();
                if (!i || !i.Runtime) return (0, o.jsx)("div", { className: `${r}`, children: "Can't find runtime" });
                const { Runtime: a } = i,
                    l = "https://x.com",
                    c = t.url("url") ?? "";
                return (0, o.jsx)("button", {
                    className: `flex ${r} cursor-pointer`,
                    onClick: (e) =>
                        ((e) => {
                            if ((e.preventDefault(), e.stopPropagation(), c))
                                if (c.startsWith("twitter://jf/")) {
                                    const e = c.slice(10);
                                    a.history.push(`/i/${e}`);
                                } else if (c.startsWith("https://twitter.com")) {
                                    const e = c.slice(10);
                                    a.history.push(e);
                                } else if (c.startsWith(l)) {
                                    const e = c.slice(13);
                                    a.history.push(e);
                                } else window && (window.location.href = c);
                        })(e),
                    type: "button",
                    children: (0, n.Z)(e),
                });
            }
        },
        447763: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(552322),
                n = r(801102),
                s = r(109195);
            function i(e, t) {
                return (0, o.jsx)("div", { children: (0, o.jsx)(s.Z, { el: e }) }, e.id || `list-item-${t}`);
            }
            function a({ el: e, mods: t }) {
                return (0, o.jsx)("div", { className: ` ${t}`, children: (0, n.Z)(e, i) });
            }
        },
        553366: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(552322),
                n = r(801102),
                s = r(608222);
            function i({ el: e, p: t, mods: r }) {
                const i = (0, s.o)();
                if (!i || !i.Runtime) return (0, o.jsx)("div", { className: `${r}`, children: "Can't find runtime" });
                const { Runtime: a } = i,
                    l = t.str("to") ?? "",
                    c = l.startsWith("/") ? l.slice(1) : l;
                return (0, o.jsx)("button", {
                    type: "button",
                    className: `flex flex-row flex-auto gap-[2px] opacity-100 ${r}`,
                    onClick: (e) =>
                        ((e) => {
                            e.stopPropagation(), e.preventDefault(), c && (":back" === c ? a.history.goBack() : ":dismiss" === c || a.history.push(`/i/jf/${c}`));
                        })(e),
                    children: (0, o.jsx)("div", { className: "w-full", children: (0, n.Z)(e) }),
                });
            }
        },
        257573: (e, t, r) => {
            r.d(t, { Z: () => n });
            var o = r(552322);
            function n({ el: e }) {
                return (0, o.jsxs)("h3", { children: ["NotFound ", e.type] });
            }
        },
        969517: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(552322),
                n = r(202784),
                s = r(801102),
                i = r(109195);
            function a({ el: e, p: t, mods: r }) {
                const a = t.element("header"),
                    l = t.element("footer"),
                    c = t.action("on:appear");
                return (
                    (0, n.useEffect)(() => {
                        c && c();
                    }, []),
                    (0, o.jsxs)("div", { className: `w-full ${r}`, children: [a && (0, o.jsx)(i.Z, { el: a }), (0, s.Z)(e), l && (0, o.jsx)(i.Z, { el: l })] })
                );
            }
        },
        547645: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(552322),
                n = r(109195);
            function s({ p: e, el: t, mods: r }) {
                const s = e.int("activePage") ?? 0,
                    i = (function (e) {
                        return e.children.map((t) => e.dom.el(t));
                    })(t);
                return i ? (0, o.jsx)("div", { className: r, children: (0, o.jsx)(n.Z, { el: i[s] }) }) : null;
            }
        },
        229476: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(552322),
                n = r(801102),
                s = r(109195),
                i = r(743133);
            function a({ el: e, p: t, mods: r }) {
                const a = t.element("popover");
                return (0, o.jsx)(i.J, {
                    trigger: (0, o.jsx)("div", {
                        onClick: (e) => {
                            e.stopPropagation();
                        },
                        className: `flex flex-col ${r} bg-transparent`,
                        children: (0, n.Z)(e),
                    }),
                    children: (0, o.jsx)("div", { className: "bg-transparent", children: a && (0, o.jsx)(s.Z, { el: a }) }),
                });
            }
        },
        849957: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(552322),
                n = r(373461);
            function s({ p: e }) {
                const t = e.str("src") ?? "";
                return (0, o.jsx)(n.Z, { url: t });
            }
        },
        128069: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(552322),
                n = r(202784),
                s = r(608222);
            function i({ p: e, mods: t }) {
                const r = e.str("t"),
                    i = e.int("numberOfLines") ?? 2,
                    a = e.richtext("text") ?? [],
                    l = e.int("maxLines"),
                    c = e.bool("showMore"),
                    u = (0, n.useRef)(null),
                    [_, d] = (0, n.useState)(!1),
                    f = "https://x.com",
                    m = "https://twitter.com",
                    p = (0, s.o)();
                if (!p || !p.Runtime) return (0, o.jsx)("div", { className: `${t}`, children: "Can't find runtime" });
                const { Runtime: h } = p,
                    g = h.history,
                    v = (e, t, r, o) => {
                        e.preventDefault(), e.stopPropagation();
                        let n = t;
                        if (!n && r && o)
                            switch (r) {
                                case 2:
                                    n = `${m}/hashtag/${o.replace("#", "")}`;
                                    break;
                                case 3:
                                    n = `${m}/${o.replace("@", "")}`;
                                    break;
                                case 4:
                                    n = `${m}/search?q=${encodeURIComponent(o)}`;
                            }
                        if (n)
                            if (n.startsWith("twitter://jf/")) {
                                const e = n.slice(10);
                                g.push(`/i/${e}`);
                            } else if (n.startsWith(m)) {
                                const e = n.slice(19);
                                g.push(e);
                            } else if (n.startsWith(f)) {
                                const e = n.slice(13);
                                g.push(e);
                            } else "undefined" != typeof window && (window.location.href = n);
                    },
                    k = (0, n.useCallback)(() => {
                        u.current && d(u.current.scrollHeight > u.current.clientHeight);
                    }, []);
                if (
                    ((0, n.useEffect)(
                        () => (
                            k(),
                            window.addEventListener("resize", k),
                            () => {
                                window.removeEventListener("resize", k);
                            }
                        ),
                        [k],
                    ),
                    a.length > 0)
                ) {
                    const e = null != l ? `line-clamp-${l}` : "";
                    return (0, o.jsxs)("div", { className: `flex flex-col overflow-hidden ${t}`, children: [(0, o.jsx)("div", { ref: u, className: `flex-col overflow-hidden ${e}`, children: a.map((e) => (0 === e[0] ? (0, o.jsx)("span", { children: e[1] }, `${e[0]}-${e[1].substring(0, 20)}`) : 1 === e[0] && e[2] ? (0, o.jsx)("span", { className: "text-sky-500 cursor-pointer hover:underline", onClick: (t) => v(t, e[2] || ""), children: e[1] }, `${e[0]}-${e[1].substring(0, 20)}`) : 2 === e[0] || 3 === e[0] || 4 === e[0] ? (0, o.jsx)("span", { className: "text-blue-500 cursor-pointer hover:underline", onClick: (t) => v(t, "", e[0], e[1]), children: e[1] }, `${e[0]}-${e[1].substring(0, 20)}`) : 255 === e[0] ? (0, o.jsx)("br", {}, `${e[0]}-${e[1].substring(0, 20)}`) : (0, o.jsx)("span", { children: e[1] }, `${e[0]}-${e[1].substring(0, 20)}`))) }), _ && c && (0, o.jsx)("div", { className: "text-[rgb(29,155,240)] hover:underline w-fit", children: "Show More" })] });
                }
                return (0, o.jsx)("div", { className: `${t} line-clamp-${i}`, children: r });
            }
        },
        475122: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(552322),
                n = r(801102),
                s = r(608222);
            const i = { x: 0, facebook: 1, whatsapp: 2, telegram: 3, linkedin: 4, email: 5, messages: 6, dm: 7, os: 8, copy: 9, facebookMessenger: 10, gmail: 11, signal: 12 };
            function a({ p: e, el: t, mods: r }) {
                const a = e.url("url") ?? "",
                    l = e.enum("target"),
                    c = (0, s.o)();
                if (!c || !c.Runtime) return (0, o.jsx)("div", { className: `${r}`, children: "Can't find runtime" });
                const { Runtime: u } = c;
                function _(e) {
                    try {
                        navigator.share && navigator.share({ url: e });
                    } catch (e) {}
                }
                return (0, o.jsx)("div", {
                    className: `flex cursor-pointer ${r}`,
                    onClick: (e) =>
                        ((e) => {
                            switch ((e.preventDefault(), e.stopPropagation(), l)) {
                                case i.x:
                                    u.history.push({ state: { text: a }, pathname: "/compose/post" });
                                    break;
                                case i.dm:
                                    u.history.push({ state: { text: a }, pathname: "/messages/compose" });
                                    break;
                                case i.os:
                                    _(a);
                                    break;
                                case i.copy:
                                    navigator.clipboard.writeText(a);
                                    break;
                                default:
                                    _(a);
                            }
                        })(e),
                    children: (0, n.Z)(t),
                });
            }
        },
        771017: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(552322),
                n = r(801102),
                s = r(202784),
                i = r(608222);
            function a({ showModal: e, setShowModal: t, children: r }) {
                const n = (0, s.useRef)(null),
                    a = (0, i.o)();
                if (!a) return (0, o.jsx)("div", { children: "Runtime not available" });
                const { Runtime: l } = a;
                (0, s.useEffect)(() => {
                    e && n.current ? (l.addCover(n.current), n.current.showModal()) : !e && n.current?.open && (n.current.close(), l.removeCover());
                }, [e, l.addCover, l.removeCover]);
                return (0, o.jsx)("dialog", {
                    ref: n,
                    onClose: () => t(!1),
                    onClick: (e) => {
                        e.target === n.current && (e.stopPropagation(), n.current?.close(), t(!1));
                    },
                    style: { width: "95%", height: "65%" },
                    className: " min-w-none rounded-[0.2em] border-none p-0 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-0 w-full max-h-full z-[1] bg-transparent backdrop:bg-black/30 motion-safe:animate-fadeIn motion-safe:[&[open]]:animate-zoomIn focus:outline-none max-w-[600px]",
                    children: (0, o.jsx)("div", { onClick: (e) => e.stopPropagation(), className: "p-4 contents flex-col items-center text-center h-full w-full", children: r }),
                });
            }
            var l = r(109195);
            function c({ el: e, p: t, mods: r }) {
                const [i, c] = (0, s.useState)(!1),
                    u = t?.element?.("content");
                return (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)("button", {
                            className: r,
                            onClick: (e) => {
                                e.stopPropagation(), c(!0);
                            },
                            type: "button",
                            children: (0, n.Z)(e),
                        }),
                        u && (0, o.jsx)(a, { showModal: i, setShowModal: c, children: (0, o.jsx)(l.Z, { el: u }) }),
                    ],
                });
            }
        },
        978476: (e, t, r) => {
            r.d(t, { Z: () => n });
            var o = r(552322);
            function n({ mods: e }) {
                return (0, o.jsx)("div", { className: `${e}`, children: "Fuck Spacers" });
            }
        },
        139466: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(552322),
                n = r(801102),
                s = r(608222);
            function i({ el: e, mods: t, p: r }) {
                const i = (0, s.o)();
                if (!i || !i.Runtime) return (0, o.jsx)("div", { className: `${t}`, children: "Can't find runtime" });
                const { Runtime: a } = i,
                    l = a.getComponentOverride()[-22153];
                if (!l) return (0, o.jsx)("div", { className: `${t}`, children: "Can't find Story" });
                const c = (0, n.Z)(e);
                return (0, o.jsx)(l, { p: r, children: c });
            }
        },
        353151: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(552322),
                n = r(801102);
            function s({ el: e, mods: t }) {
                return (0, o.jsx)("div", { className: `flex w-full h-full ${t}`, children: (0, n.Z)(e) });
            }
        },
        940877: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(552322),
                n = r(801102),
                s = r(608222);
            function i({ el: e, mods: t }) {
                const r = (0, s.o)();
                if (!r || !r.Runtime) return (0, o.jsx)("div", { className: `${t}`, children: "Can't find runtime" });
                const { Runtime: i } = r,
                    a = i.getComponentOverride()[24045];
                if (!a) return (0, o.jsx)("div", { className: `${t}`, children: "Can't find StoryPager" });
                const l = (0, n.Z)(e);
                return (0, o.jsx)(a, { children: l });
            }
        },
        88214: (e, t, r) => {
            r.d(t, { Z: () => n });
            var o = r(552322);
            function n({ p: e, mods: t }) {
                const r = e.str("t"),
                    n = e.int("numberOfLines") ?? 2;
                return (0, o.jsx)("div", { className: `text-text ${t} line-clamp-${n}`, children: r });
            }
        },
        272403: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(552322);
            const n = { RELATIVE: 0, TIME: 1, DATE: 2, PRETTY_DATE: 3 },
                s = new Intl.DateTimeFormat(void 0, { dateStyle: "medium" }),
                i = new Intl.DateTimeFormat(void 0, { timeStyle: "short" }),
                a = new Intl.DateTimeFormat(void 0, { dateStyle: "long" }),
                l = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric" });
            function c({ p: e, mods: t }) {
                const r = e.date("time") ?? new Date(),
                    c = e.enum("format") ?? n.DATE,
                    u = (Date.now() - r.getTime()) / 1e3,
                    _ = (() => {
                        switch (c) {
                            case n.DATE:
                                return s.format(r);
                            case n.TIME:
                                return i.format(r);
                            case n.PRETTY_DATE:
                                return a.format(r);
                            case n.RELATIVE:
                                return u < 120 ? "1m" : u < 3600 ? `${Math.floor(u / 60)}m` : u < 86400 ? `${Math.floor(u / 3600)}h` : u < 259200 ? `${Math.floor(u / 3600 / 24)}d` : r.getFullYear() === new Date().getFullYear() ? l.format(r) : s.format(r);
                            default:
                                return "";
                        }
                    })();
                return (0, o.jsx)("div", { className: t, children: _ });
            }
        },
        26296: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(552322),
                n = r(202784);
            function s({ p: e, mods: t }) {
                const r = e.str("src") ?? "",
                    s = (0, n.useRef)(null);
                return (
                    (0, n.useEffect)(() => {
                        const e = s.current;
                        if (!e) return;
                        const t = new IntersectionObserver(
                            (t) => {
                                const r = t[0];
                                r && (r.isIntersecting ? e.play().catch((e) => {}) : e.pause());
                            },
                            { threshold: 0.5 },
                        );
                        return (
                            t.observe(e),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, []),
                    (0, o.jsx)("video", { ref: s, src: r, muted: !0, loop: !0, className: `${t} block w-full` })
                );
            }
        },
        472036: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(552322),
                n = r(801102);
            function s({ el: e, mods: t }) {
                return (0, o.jsx)("div", { className: `flex ${t}`, children: (0, n.Z)(e) });
            }
        },
        400441: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(552322),
                n = r(801102);
            function s({ el: e, mods: t }) {
                return (0, o.jsx)("div", { className: `flex flex-col ${t}`, children: (0, n.Z)(e) });
            }
        },
        575581: (e, t, r) => {
            r.d(t, { Z: () => n });
            var o = r(552322);
            function n({ mods: e }) {
                return (0, o.jsx)("div", { className: `${e}`, children: "Fuck VStacks" });
            }
        },
        696281: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(552322),
                n = r(801102),
                s = r(109195);
            function i(e, t) {
                return (0, o.jsx)("div", { className: "" + (t ? "absolute top-0 left-0 right-0 bottom-0" : "static h-full"), children: (0, o.jsx)(s.Z, { el: e }) });
            }
            function a({ el: e, mods: t }) {
                return (0, o.jsx)("div", { className: `relative ${t}`, children: (0, n.Z)(e, i) });
            }
        },
        373461: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(552322),
                n = r(122883),
                s = r(608222),
                i = r(202784),
                a = r(366665),
                l = r(109195);
            function c({ url: e }) {
                const t = (0, s.o)(),
                    [r, c] = (0, i.useState)(!0),
                    [u, _] = (0, i.useState)(null),
                    [d, f] = (0, i.useState)(null);
                if (!t) return (0, o.jsx)("div", { children: "Runtime context not available" });
                const { Runtime: m } = t;
                if (!m) return (0, o.jsx)("div", { children: "Runtime not available" });
                const p = (0, n.vz)(m);
                return (
                    (0, i.useEffect)(() => {
                        e &&
                            (async () => {
                                c(!0);
                                try {
                                    const t = p.session(),
                                        r = await m.net.httpGet(e);
                                    r.data && t.onChunk(new Uint8Array(r.data)), f(p.root.value), c(!1);
                                } catch (e) {
                                    c(!1), _(e instanceof Error ? e : new Error(String(e)));
                                }
                            })();
                    }, [e]),
                    r ? (0, o.jsx)(a.P, {}) : u ? (0, o.jsxs)("div", { children: ["Error: ", u.message] }) : (0, o.jsx)(l.Z, { el: d })
                );
            }
        },
        287359: (e, t, r) => {
            r.d(t, { q: () => a });
            var o = r(202784);
            function n(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e;
            }
            var s = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
                i = new WeakMap();
            function a(e, t) {
                var r,
                    a,
                    l,
                    c =
                        ((r = t || null),
                        (a = function (t) {
                            return e.forEach(function (e) {
                                return n(e, t);
                            });
                        }),
                        ((l = (0, o.useState)(function () {
                            return {
                                value: r,
                                callback: a,
                                facade: {
                                    get current() {
                                        return l.value;
                                    },
                                    set current(e) {
                                        var t = l.value;
                                        t !== e && ((l.value = e), l.callback(e, t));
                                    },
                                },
                            };
                        })[0]).callback = a),
                        l.facade);
                return (
                    s(
                        function () {
                            var t = i.get(c);
                            if (t) {
                                var r = new Set(t),
                                    o = new Set(e),
                                    s = c.current;
                                r.forEach(function (e) {
                                    o.has(e) || n(e, null);
                                }),
                                    o.forEach(function (e) {
                                        r.has(e) || n(e, s);
                                    });
                            }
                            i.set(c, e);
                        },
                        [e],
                    ),
                    c
                );
            }
        },
        757758: (e, t, r) => {
            r.d(t, { L: () => i });
            var o = r(305163),
                n = r(202784),
                s = function (e) {
                    var t = e.sideCar,
                        r = (0, o._T)(e, ["sideCar"]);
                    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
                    var s = t.read();
                    if (!s) throw new Error("Sidecar medium not found");
                    return n.createElement(s, (0, o.pi)({}, r));
                };
            function i(e, t) {
                return e.useMedium(t), s;
            }
            s.isSideCarExport = !0;
        },
        964597: (e, t, r) => {
            r.d(t, { _: () => i });
            var o = r(305163);
            function n(e) {
                return e;
            }
            function s(e, t) {
                void 0 === t && (t = n);
                var r = [],
                    o = !1;
                return {
                    read: function () {
                        if (o) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return r.length ? r[r.length - 1] : e;
                    },
                    useMedium: function (e) {
                        var n = t(e, o);
                        return (
                            r.push(n),
                            function () {
                                r = r.filter(function (e) {
                                    return e !== n;
                                });
                            }
                        );
                    },
                    assignSyncMedium: function (e) {
                        for (o = !0; r.length; ) {
                            var t = r;
                            (r = []), t.forEach(e);
                        }
                        r = {
                            push: function (t) {
                                return e(t);
                            },
                            filter: function () {
                                return r;
                            },
                        };
                    },
                    assignMedium: function (e) {
                        o = !0;
                        var t = [];
                        if (r.length) {
                            var n = r;
                            (r = []), n.forEach(e), (t = r);
                        }
                        var s = function () {
                                var r = t;
                                (t = []), r.forEach(e);
                            },
                            i = function () {
                                return Promise.resolve().then(s);
                            };
                        i(),
                            (r = {
                                push: function (e) {
                                    t.push(e), i();
                                },
                                filter: function (e) {
                                    return (t = t.filter(e)), r;
                                },
                            });
                    },
                };
            }
            function i(e) {
                void 0 === e && (e = {});
                var t = s(null);
                return (t.options = (0, o.pi)({ async: !0, ssr: !1 }, e)), t;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28.3eb626ca.js.map

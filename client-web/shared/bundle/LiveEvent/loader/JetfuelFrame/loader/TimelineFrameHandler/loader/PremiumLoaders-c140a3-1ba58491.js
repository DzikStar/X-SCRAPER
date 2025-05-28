"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.LiveEvent~loader.JetfuelFrame~loader.TimelineFrameHandler~loader.PremiumLoaders-c140a3-1ba58491"],
    {
        244448: (e, t, a) => {
            a.d(t, { GZ: () => n.GZ, mQ: () => i.Z, q3: () => o.q3, tJ: () => n.tJ, vz: () => n.vz });
            var i = a(295133),
                n = a(798324),
                o = a(511799);
        },
        801102: (e, t, a) => {
            a.d(t, { Z: () => o });
            var i = a(552322),
                n = a(109195);
            function o(e, t) {
                const a = (function (e) {
                    const t = [];
                    for (const a of e.children) {
                        const i = e.dom.el(a);
                        void 0 !== i && t.push(i);
                    }
                    return t;
                })(e);
                return a.map((e, a) => (t ? t(e, a) : (0, i.jsx)(n.Z, { el: e }, e?.id || `child-${a}`)));
            }
        },
        960546: (e, t, a) => {
            a.d(t, { Z: () => d });
            var i = a(552322),
                n = a(202784),
                o = a(801102),
                r = a(109195),
                l = a(244448),
                s = a(608222),
                c = a(193686);
            function d({ el: e, p: t, mods: a }) {
                const [d, m] = (0, n.useState)(["init"]),
                    [_, u] = (0, n.useState)(!1),
                    [p, f] = (0, n.useState)(null),
                    [h, g] = (0, n.useState)(null),
                    [k, b] = (0, n.useState)({}),
                    v = (0, n.useRef)(null),
                    w = (0, n.useRef)(null),
                    x = (0, n.useRef)(null),
                    y = t.url("feed") ?? "",
                    X = t.element("header"),
                    j = t.element("footer"),
                    C = t.str("cursor:top"),
                    S = t.str("cursor:bottom"),
                    Z = (0, s.o)();
                function N(e, t) {
                    return (0, i.jsx)("div", { children: (0, i.jsx)(r.Z, { el: e }) }, e?.id || `list-item-${t}`);
                }
                return (
                    (0, n.useEffect)(() => {
                        S && f(S), C && g(C);
                    }, [S, C]),
                    (0, n.useEffect)(() => {
                        y &&
                            Z &&
                            Z.Runtime &&
                            (u(!0),
                            d.forEach(async (e) => {
                                const t = `${y}${"init" === e ? "" : `&cursor=${e}`}`;
                                try {
                                    u(!0);
                                    const { Runtime: a } = Z;
                                    if (!a) return;
                                    const i = (0, l.vz)(a),
                                        n = i.session(),
                                        o = await a.net.httpGet(t);
                                    if ((o.data && n.onChunk(new Uint8Array(o.data)), i.root.value)) {
                                        const t = (0, l.tJ)(i.root.value).str("cursor:bottom") || "",
                                            a = (0, l.tJ)(i.root.value).str("cursor:top") || "";
                                        t && f(t), a && g(a), b((t) => ({ ...t, [e]: i.root.value }));
                                    }
                                } catch (e) {
                                } finally {
                                    u(!1);
                                }
                            }));
                    }, [y, d, Z]),
                    (0, n.useEffect)(() => {
                        const e = w.current;
                        if (!e) return;
                        const t = new IntersectionObserver(
                            (e) => {
                                e[0]?.isIntersecting && !_ && p && m((e) => [...e, p]);
                            },
                            { rootMargin: "200px" },
                        );
                        return (
                            t.observe(e),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [p, _]),
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
                    }, [h, _]),
                    (0, i.jsxs)("div", {
                        ref: v,
                        className: `${a}`,
                        children: [
                            (0, i.jsx)("div", { ref: x, style: { height: "10px", width: "100%" } }),
                            X && (0, i.jsx)(r.Z, { el: X }),
                            (0, i.jsx)("div", { className: "list-static-items", children: (0, o.Z)(e, N) }),
                            !_ &&
                                (0, i.jsx)("div", {
                                    className: "list-feed-items",
                                    children: d.map((e) => {
                                        const t = k[e];
                                        return t ? (0, i.jsx)("div", { className: "feed-page", children: (0, o.Z)(t, N) }, e) : (0, i.jsx)("div", {}, e);
                                    }),
                                }),
                            _ && (0, i.jsx)(c.P, {}),
                            j && (0, i.jsx)(r.Z, { el: j }),
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
                o = a(801102),
                r = a(608222),
                l = a(869593);
            const s = 500;
            function c({ el: e, p: t, mods: a }) {
                const c = t.action("on:press"),
                    d = t.strDict("scribe:press") ?? {},
                    m = t.action("on:longpress"),
                    _ = t.strDict("scribe:longpress") ?? {},
                    u = t.bool("disabled") ?? !1,
                    p = (0, l.h8)(),
                    f = (0, r.o)()?.Analytics,
                    h = (0, n.useRef)(null),
                    g = (0, n.useRef)(!1),
                    k = (0, n.useRef)(null),
                    b = null != c || null != m;
                (0, n.useEffect)(() => {
                    k.current &&
                        (k.current.addEventListener("mousedown", (e) => {
                            e.stopImmediatePropagation(), e.preventDefault(), w(e);
                        }),
                        k.current.addEventListener("mouseup", (e) => {
                            e.stopImmediatePropagation(), e.preventDefault(), x(e);
                        }));
                }, []);
                const v = () => {
                        if (c) {
                            c();
                            const e = (0, l.QI)("click", { ...p, ...d });
                            f?.scribe(e);
                        }
                    },
                    w = (e) => {
                        b && e.stopImmediatePropagation(),
                            (g.current = !1),
                            clearTimeout(h.current ?? 0),
                            (h.current = window.setTimeout(() => {
                                (g.current = !0), (h.current = null);
                            }, s));
                    },
                    x = (e) => {
                        b && e.stopPropagation(),
                            u ||
                                (g.current
                                    ? (() => {
                                          if (m) {
                                              m();
                                              const e = (0, l.QI)("longpress", { ...p, ..._ });
                                              f?.scribe(e);
                                          }
                                      })()
                                    : v());
                    };
                return (0, i.jsx)("button", {
                    className: a,
                    ref: k,
                    type: "button",
                    disabled: u,
                    onKeyDown: (e) => {
                        b && e.stopPropagation(), u || ("Space" !== e.code && "Enter" !== e.code) || v();
                    },
                    children: (0, o.Z)(e),
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
                o = a(801102),
                r = a(109195),
                l = a(608222);
            function s({ showModal: e, setShowModal: t, children: a }) {
                const o = (0, n.useRef)(null),
                    [r, s] = (0, n.useState)(!1),
                    c = (0, l.o)();
                if (!c) return (0, i.jsx)("div", { children: "Runtime not available" });
                const { Runtime: d } = c;
                if (!d) return (0, i.jsx)("div", { children: "Runtime not available" });
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
                        e && o.current ? (d.addCover(() => o.current?.close()), o.current.showModal()) : !e && o.current?.open && (o.current.close(), d.removeCover());
                    }, [e, d.addCover, d.removeCover]);
                return (0, i.jsx)("dialog", {
                    ref: o,
                    onClose: () => t(!1),
                    onClick: (e) => {
                        e.target === o.current && (e.stopPropagation(), o.current?.close(), t(!1));
                    },
                    style: r ? void 0 : { width: "100%", minWidth: "100vw", minHeight: "100vh", height: "100%" },
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
                            children: (0, o.Z)(e),
                        }),
                        d && l && (0, i.jsx)(s, { showModal: l, setShowModal: c, children: (0, i.jsx)(r.Z, { el: d }) }),
                    ],
                });
            }
        },
        897531: (e, t, a) => {
            a.d(t, { Z: () => d });
            var i = a(552322),
                n = a(202784),
                o = a(801102),
                r = a(798324),
                l = a(608222),
                s = a(193686);
            function c({ feedSrc: e, onBottomCursor: t, onLoadComplete: a }) {
                const [c, d] = (0, n.useState)(!0),
                    [m, _] = (0, n.useState)(null),
                    [u, p] = (0, n.useState)(null),
                    f = (0, n.useRef)({}),
                    h = (0, l.o)();
                return h && h.Runtime
                    ? ((0, n.useEffect)(() => {
                          if (f.current[e]) return;
                          f.current[e] = !0;
                          const { Runtime: i } = h;
                          if (!i) return _(new Error("Runtime not available")), d(!1), void a();
                          const n = (0, r.vz)(i);
                          !(async function () {
                              d(!0);
                              const o = n.session();
                              if (!i) return _(new Error("Runtime not available")), d(!1), void a();
                              const l = await i.net.httpGet(e);
                              if ((l?.data && o.onChunk(new Uint8Array(l.data)), !n.root.value)) return _(new Error("DOM not available")), d(!1), void a();
                              if ((p(n.root.value), n.root.value)) {
                                  const e = (0, r.tJ)(n.root.value).str("cursor:bottom") || "";
                                  t(e);
                              }
                              d(!1), a();
                          })();
                      }, [e, t, a, h]),
                      c ? (0, i.jsx)(s.P, {}) : m ? (0, i.jsx)("p", { style: { color: "red" }, children: m.message }) : (0, i.jsx)("div", { className: "contents", children: !u || c || m ? null : (0, o.Z)(u) }))
                    : (_(new Error("Runtime not available")), d(!1), void a());
            }
            function d({ p: e, mods: t }) {
                const [a, o] = (0, n.useState)(["init"]),
                    [r, l] = (0, n.useState)(!1),
                    [s, d] = (0, n.useState)(null),
                    m = (0, n.useRef)(null),
                    _ = (0, n.useRef)(null),
                    u = e?.url?.("src") ?? "";
                (0, n.useEffect)(() => {
                    const e = _.current;
                    if (!e) return;
                    const t = new IntersectionObserver(
                        (e) => {
                            e[0]?.isIntersecting && !r && s && (l(!0), o((e) => [...e, s]));
                        },
                        { rootMargin: "200px" },
                    );
                    return (
                        t.observe(e),
                        () => {
                            t.disconnect();
                        }
                    );
                }, [s, r]);
                const p = (e) => {
                        d(e);
                    },
                    f = () => {
                        l(!1);
                    };
                return (0, i.jsxs)("div", { ref: m, className: `${t}`, children: [a.map((e) => ("" === e ? null : (0, i.jsx)(c, { feedSrc: `${u.startsWith("/") ? "" : "/"}${u}${"init" === e ? "" : `&cursor=${e}`}`, onBottomCursor: p, onLoadComplete: f }, `${e}`))), (0, i.jsx)("div", { ref: _, style: { height: "10px", width: "100%" } })] });
            }
        },
        746066: (e, t, a) => {
            a.d(t, { Z: () => c });
            var i = a(202784),
                n = a(801102),
                o = a(608222),
                r = a(910352),
                l = a(511799);
            function s({ p: e, el: t }) {
                const a = (0, o.o)(),
                    s = e.action("next"),
                    c = e.strDict("errors"),
                    { setErrors: d } = (0, i.useContext)(l.q3),
                    m = (0, r.Z)(() => {
                        s && s(), c && d(c);
                        const e = (0, n.Z)(t),
                            i = a?.Runtime?.ui?.toast;
                        if (e && e.length > 0 && i) {
                            if (e[0]) {
                                const e = t?.children && t.children.length > 0 ? t.children[0] : void 0,
                                    a = void 0 !== e ? t?.dom?.el(e) : null;
                                a && i(a);
                            }
                        }
                    }),
                    _ = (0, i.useRef)(!1);
                return (
                    (0, i.useEffect)(() => {
                        _.current || ((_.current = !0), m());
                    }, [m]),
                    null
                );
            }
            function c(e) {
                const { submissionKey: t } = (0, i.useContext)(l.q3);
                return (0, i.createElement)(s, { ...e, key: t });
            }
        },
        173590: (e, t, a) => {
            a.d(t, { Z: () => f });
            var i = a(552322),
                n = a(202784),
                o = a(801102),
                r = a(109195),
                l = a(798324),
                s = a(608222),
                c = a(644109),
                d = a(916025),
                m = a(830030),
                _ = a(770688),
                u = a(910352),
                p = a(511799);
            function f({ el: e, p: t, mods: a }) {
                const f = (0, s.o)(),
                    h = t.url("action") ?? "",
                    g = t.strDict("errors"),
                    k = t.url("validation"),
                    b = t.str("submissionStatus") ?? "pending",
                    [v, w] = (0, n.useState)(() => {
                        const e = t.strDict("values") ?? {};
                        return Object.fromEntries(Object.entries(e));
                    }),
                    [x, y] = (0, n.useState)(),
                    [X, j] = (0, n.useState)(),
                    [C, S] = (0, n.useState)(k ? "ongoing" : "pending"),
                    Z = (0, u.Z)((e) => {
                        t.setStrDict("errors", e);
                    }),
                    N = (0, u.Z)((e) => {
                        t.setStr("focus", e);
                    }),
                    E = (0, u.Z)((e) => {
                        t.setStrDict("values", (0, m.e)(e));
                    }),
                    R = (0, u.Z)((e) => {
                        t.setStr("submissionStatus", e), t.setBool("submitting", "ongoing" === e);
                    }),
                    M = (e) => {
                        S(e), t.setBool("validating", "ongoing" === e);
                    },
                    $ = (0, u.Z)(async () => {
                        if ("ongoing" !== b && h) {
                            R("ongoing"), j((0, _.h)()), y(void 0);
                            const e = f?.Runtime;
                            if (e)
                                try {
                                    if (!Object.entries(v)) return void R("error");
                                    const t = Object.fromEntries(Object.entries(v)),
                                        { ok: a, data: i } = await e.net.httpPOST(h, new Map(Object.entries(t)));
                                    if (a && i) {
                                        const t = (0, l.KM)(e, new Uint8Array(i));
                                        y(t.root.value), R("success");
                                    } else R("error");
                                } catch (e) {
                                    R("error");
                                }
                        }
                    }),
                    P = (0, u.Z)((e, t) => {
                        w(
                            void 0 !== t
                                ? (a) => ({ ...a, [e]: t })
                                : (t) => {
                                      const { [e]: a, ...i } = t;
                                      return i;
                                  },
                        ),
                            R("pending"),
                            M("pending"),
                            y(void 0);
                    }),
                    L = (0, n.useRef)(v);
                (0, n.useLayoutEffect)(() => {
                    L.current = v;
                }, [v]);
                const T = (0, u.Z)((e, t) => {
                        M("ongoing");
                        const a = f?.Runtime;
                        if (a) {
                            const i = Object.fromEntries(Object.entries(e).filter(([e, t]) => void 0 !== t));
                            a.net
                                .httpPOST(t, new Map(Object.entries(i)))
                                .then(({ ok: t, data: a }) => {
                                    if (L.current === e)
                                        if (t && a) {
                                            const e = JSON.parse(new TextDecoder().decode(a));
                                            (0, d.x)(e) ? (Z({}), M("success")) : (Z(e), M("failure"));
                                        } else Z({}), M("success");
                                })
                                .catch(() => {
                                    M("error");
                                });
                        }
                    }),
                    A = (0, n.useMemo)(() => (0, c.D)(T, 500), [T]);
                (0, n.useEffect)(() => {
                    k && A(v, k);
                }, [A, v, k]);
                const B = (0, n.useMemo)(() => (k ? "success" === C : !!h && ("pending" === b || "error" === b)), [b, C, k, h]);
                return (
                    (0, n.useEffect)(() => {
                        E(v);
                    }, [v, E]),
                    (0, i.jsxs)(p.q3.Provider, { value: { values: v, submit: $, change: P, submissionResult: x, submissionKey: X, submissionStatus: b, validationStatus: C, errors: g, setErrors: Z, setFocus: N, canSubmit: B }, children: [(0, i.jsx)("div", { className: a, children: (0, o.Z)(e) }), x && (0, i.jsx)(r.Z, { el: x })] })
                );
            }
        },
        261925: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(552322),
                n = a(202784),
                o = a(109195),
                r = a(511799);
            function l({ mods: e }) {
                const t = (0, n.useContext)(r.ZB);
                return t ? (0, i.jsx)("div", { className: e, children: t.active && (0, i.jsx)(o.Z, { el: t.active }) }) : null;
            }
        },
        22588: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(552322),
                n = a(202784),
                o = a(801102),
                r = a(511799);
            function l({ el: e, mods: t }) {
                const { canSubmit: a, submit: l } = (0, n.useContext)(r.q3),
                    s = (0, n.useCallback)(
                        (e) => {
                            e.stopPropagation(), a && l && l();
                        },
                        [a, l],
                    );
                return (0, i.jsx)("button", { type: "submit", disabled: !a, onClick: s, className: t, children: (0, o.Z)(e) });
            }
        },
        166490: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(552322),
                n = a(202784),
                o = a(511799),
                r = a(695301);
            function l({ p: e, mods: t }) {
                const a = e.str("name") ?? "",
                    l = e.str("label") ?? "",
                    s = e.str("value") ?? "",
                    c = e.bool("autofocus") ?? !1,
                    d = e.enum("type") ?? o.n$.text,
                    { change: m, setFocus: _, values: u } = (0, n.useContext)(o.q3),
                    p = d === o.n$.growing_text,
                    f = (0, n.useCallback)(
                        (e) => {
                            d === o.n$.date && e.currentTarget.value ? m(a, new Date(e.currentTarget.value).toISOString()) : m(a, (0, r.J)(d, e.currentTarget.value));
                        },
                        [a, m, d],
                    );
                (0, n.useEffect)(() => {
                    s && m(a, s);
                }, [a, s, m]);
                const h = (0, n.useCallback)(() => {
                        _(a);
                    }, [a, _]),
                    g = (0, n.useCallback)(() => {
                        _("");
                    }, [_]),
                    k = (0, o.Jt)(d),
                    b = u[a] ?? s,
                    v = (0, o.VD)(d),
                    w = (0, r.m)(d, b);
                return p ? (0, i.jsx)("textarea", { autoFocus: c, name: a, onBlur: g, className: `placeholder:text-gray-500 p-2 ${t}`, onChange: f, onFocus: h, placeholder: l, value: b }) : (0, i.jsx)("input", { type: v, autoFocus: c, inputMode: k, name: a, onBlur: g, className: `placeholder:text-gray-500 p-2 ${t}`, onChange: f, onFocus: h, placeholder: l, value: w });
            }
        },
        161276: (e, t, a) => {
            a.d(t, { Z: () => s });
            var i = a(552322),
                n = a(202784),
                o = a(801102),
                r = a(109195),
                l = a(511799);
            function s({ p: e, el: t, mods: a }) {
                const s = e.str("name") ?? "",
                    c = e.bool("initial") ? "true" : void 0,
                    d = e.element("selected") ?? null,
                    m = e.bool("submit") ?? !1,
                    { change: _, submit: u, values: p } = (0, n.useContext)(l.q3),
                    f = "true" === p[s];
                (0, n.useEffect)(() => {
                    c && _(s, c);
                }, [s, c, _]);
                const h = f ? d && (0, i.jsx)(r.Z, { el: d }) : (0, o.Z)(t);
                return (0, i.jsx)("button", {
                    type: "button",
                    onClick: (e) => {
                        e.preventDefault(), _(s, f ? void 0 : "true"), m && u();
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
                o = a(801102),
                r = a(511799);
            function l({ p: e, el: t, mods: a }) {
                const l = e.str("name") ?? "",
                    s = e.int("length") ?? 6,
                    c = e.bool("autofocus") ?? !1,
                    d = e.bool("autosubmit") ?? !1,
                    { change: m, submit: _, values: u } = (0, n.useContext)(r.q3),
                    p = u[l] ?? "",
                    f = (0, n.useCallback)(
                        (t) => {
                            m(l, t), e.setStrDict("code", Object(Array.from(t)));
                        },
                        [m, l, e],
                    ),
                    h = (0, n.useMemo)(() => Array.from({ length: s }).map(() => (0, n.createRef)()), [s]);
                (0, n.useEffect)(() => {
                    p.length === s && d ? _() : h[p.length]?.current?.focus();
                }, [d, p, h, s, _]);
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
                    [b, v] = (0, n.useState)(0),
                    [w, x] = (0, n.useState)(10),
                    [y, X] = (0, n.useState)(10),
                    [j, C] = (0, n.useState)(0),
                    S = (0, n.useRef)(null);
                return (
                    (0, n.useEffect)(() => {
                        setTimeout(() => {
                            const e = S.current,
                                t = e?.firstElementChild,
                                a = t?.firstElementChild,
                                i = a?.nextElementSibling;
                            if (e && t && a && i) {
                                const t = e.getBoundingClientRect(),
                                    n = a.getBoundingClientRect(),
                                    o = i.getBoundingClientRect().left - n.right;
                                v(o), x(n.width), X(t.width);
                                const r = n.left - t.left;
                                C(r);
                            }
                        }, 100);
                    }, []),
                    (0, i.jsxs)("div", { className: `relative ${a}`, ref: S, children: [(0, o.Z)(t), (0, i.jsx)("div", { className: "absolute left-0 top-0 right-0 bottom-0 flex flex-row", style: { gap: b, width: y, paddingLeft: j }, children: Array.from({ length: s }).map((e, t) => (0, i.jsx)("input", { maxLength: s, inputMode: "numeric", onChange: (e) => g(e, t), autoFocus: c && 0 === t, onKeyDown: k, ref: h[t], value: p[t] ?? "", className: "min-w-0 outline-none text-center caret-text bg-transparent text-transparent", style: { width: w } }, t)) })] })
                );
            }
        },
        631389: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(552322),
                n = a(202784),
                o = a(511799),
                r = a(695301);
            function l({ p: e, mods: t }) {
                const a = e.str("name") ?? "",
                    l = e.str("label") ?? "",
                    s = e.str("value") ?? "",
                    c = e.bool("autofocus") ?? !1,
                    d = e.enum("type") ?? o.n$.text,
                    { change: m, setFocus: _, values: u } = (0, n.useContext)(o.q3),
                    p = (0, n.useCallback)(
                        (e) => {
                            m(a, (0, r.J)(d, e.currentTarget.value));
                        },
                        [a, m, d],
                    );
                (0, n.useEffect)(() => {
                    s && m(a, s);
                }, [a, s, m]);
                const f = (0, n.useCallback)(() => {
                        _(a);
                    }, [a, _]),
                    h = (0, n.useCallback)(() => {
                        _("");
                    }, [_]),
                    g = u[a] ?? s,
                    k = (0, o.VD)(d),
                    b = (0, o.Jt)(d),
                    v = (0, r.m)(d, g);
                return o.zK.includes(d) ? (0, i.jsx)("textarea", { autoFocus: c, name: a, onBlur: h, className: `placeholder:text-gray-500 field-sizing-content w-full p-2 ${t}`, onChange: p, onFocus: f, placeholder: l, value: v, rows: 1 }) : (0, i.jsx)("input", { type: k, autoFocus: c, inputMode: b, name: a, onBlur: h, className: `placeholder:text-gray-500 bg-transparent p-2 ${t}`, onChange: p, onFocus: f, placeholder: l, value: v });
            }
        },
        723395: (e, t, a) => {
            a.d(t, { Z: () => s });
            var i = a(552322),
                n = a(202784),
                o = a(801102),
                r = a(109195),
                l = a(511799);
            function s({ p: e, el: t, mods: a }) {
                const s = e.str("value") ?? "",
                    c = e.element("active"),
                    d = e.element("selected") ?? null,
                    m = (0, n.useContext)(l.ZB),
                    _ = m?.value === s,
                    u = (0, n.useCallback)(() => {
                        m && (_ ? m.select(void 0, null) : m.select(s, c));
                    }, [m, s, c, _]),
                    p = (0, n.useMemo)(() => (0, o.Z)(t), [t]),
                    f = (0, n.useMemo)(() => d && (0, i.jsx)(r.Z, { el: d }), [d]);
                return (0, i.jsx)("button", { onClick: u, type: "button", className: a, children: _ ? f : p });
            }
        },
        140682: (e, t, a) => {
            a.d(t, { Z: () => d });
            var i = a(552322),
                n = a(202784),
                o = a(511799);
            const r = (e) => e.replace(/\D/g, ""),
                l = (e, t) => {
                    const a = r(e);
                    let i = "",
                        n = 0;
                    for (let e = 0; e < t.length && !(n >= a.length); e++) "#" === t[e] || "X" === t[e] ? ((i += a[n]), n++) : (i += t[e]);
                    return i;
                },
                s = { name: "United States", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
                c = [
                    { name: "Afghanistan", dial_code: "+93", pattern: "### ### ####", limit: 12 },
                    { name: "Albania", dial_code: "+355", pattern: "### ### ###", limit: 11 },
                    { name: "Algeria", dial_code: "+213", pattern: "### ## ## ##", limit: 12 },
                    { name: "Andorra", dial_code: "+376", pattern: "### ###", limit: 7 },
                    { name: "Angola", dial_code: "+244", pattern: "### ### ###", limit: 11 },
                    { name: "Antigua and Barbuda", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
                    { name: "Argentina", dial_code: "+54", pattern: "##########", limit: 10 },
                    { name: "Armenia", dial_code: "+374", pattern: "## ######", limit: 9 },
                    { name: "Australia", dial_code: "+61", pattern: "#### ### ###", limit: 12 },
                    { name: "Austria", dial_code: "+43", pattern: "#### ####", limit: 9 },
                    { name: "Azerbaijan", dial_code: "+994", pattern: "## ### ## ##", limit: 11 },
                    { name: "Bahamas", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
                    { name: "Bahrain", dial_code: "+973", pattern: "#### ####", limit: 9 },
                    { name: "Bangladesh", dial_code: "+880", pattern: "####-#######", limit: 12 },
                    { name: "Barbados", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
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
                    { name: "Canada", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
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
                    { name: "Dominica", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
                    { name: "Dominican Republic", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
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
                    { name: "Grenada", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
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
                    { name: "Jamaica", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
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
                    { name: "Saint Kitts and Nevis", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
                    { name: "Saint Lucia", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
                    { name: "Saint Vincent and the Grenadines", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
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
                    { name: "Trinidad and Tobago", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
                    { name: "Tunisia", dial_code: "+216", pattern: "##-###-###", limit: 11 },
                    { name: "Turkey", dial_code: "+90", pattern: "###-###-####", limit: 12 },
                    { name: "Turkmenistan", dial_code: "+993", pattern: "##-###-####", limit: 12 },
                    { name: "Tuvalu", dial_code: "+688", pattern: "###-###", limit: 9 },
                    { name: "Uganda", dial_code: "+256", pattern: "###-###-###", limit: 11 },
                    { name: "Ukraine", dial_code: "+380", pattern: "##-###-##-##", limit: 12 },
                    { name: "United Arab Emirates", dial_code: "+971", pattern: "##-###-####", limit: 12 },
                    { name: "United Kingdom", dial_code: "+44", pattern: "#### ### ####", limit: 13 },
                    { name: "United States", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
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
                    m = e.str("countryCode") ?? "+1",
                    _ = e.strList("allowedCountryCodes"),
                    u = e.bool("countryCodePickerDisabled") ?? !1,
                    p = e.bool("autofocus") ?? !1,
                    { change: f, values: h } = (0, n.useContext)(o.q3),
                    [g, k] = (0, n.useState)(() => (h[a] ? h[a].replace(m, "") : "")),
                    b = (0, n.useCallback)((e) => {
                        k(e.target.value);
                    }, []),
                    [v, w] = (0, n.useState)(() => c.find((e) => e.dial_code === m) ?? s),
                    x = (0, n.useMemo)(() => l(g, v.pattern), [v.pattern, g]),
                    y = (0, n.useMemo)(() => c.filter((e) => _.includes(e.dial_code)), [_]),
                    X = (0, n.useCallback)(
                        (e) => {
                            const t = y.find((t) => t.name === e.currentTarget.value);
                            t && w(t);
                        },
                        [y],
                    );
                return (
                    (0, n.useEffect)(() => {
                        f(a, v.dial_code + r(g));
                    }, [f, v, a, g]),
                    (0, i.jsxs)("div", { className: `flex flex-row items-center gap-1 ${t}`, children: [(0, i.jsxs)("div", { className: "items-end relative", children: [(0, i.jsx)("div", { className: "pe-2 text-blue-500 " + (u ? "text-text" : ""), children: v.dial_code }), (0, i.jsx)("select", { disabled: u, onChange: X, value: v.name, className: "absolute top-0 left-0 w-full h-full opacity-0", children: y.map((e) => (0, i.jsxs)("option", { value: e.name, children: [e.name, "(", e.dial_code, ")"] }, e.name)) })] }), (0, i.jsx)("input", { autoFocus: p, inputMode: "tel", maxLength: v.limit, name: a, onChange: b, placeholder: d || v.pattern, className: "flex-grow bg-transparent", value: x })] })
                );
            }
        },
        315111: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(552322),
                n = a(202784),
                o = a(801102),
                r = a(511799);
            function l({ p: e, el: t }) {
                const a = e.str("name") ?? "",
                    l = e.bool("submit") ?? !1,
                    [s, c] = (0, n.useState)(null),
                    { submit: d, values: m, change: _ } = (0, n.useContext)(r.q3),
                    u = m[a],
                    p = (0, n.useCallback)(
                        (e, t) => {
                            _(a, e),
                                c(t),
                                l &&
                                    setTimeout(() => {
                                        d();
                                    }, 100);
                        },
                        [d, l, _, a],
                    );
                return (0, i.jsx)(r.ZB.Provider, { value: { value: u, active: s, select: p }, children: (0, o.Z)(t) });
            }
        },
        511799: (e, t, a) => {
            a.d(t, { Jt: () => l, VD: () => s, ZB: () => c, n$: () => o, q3: () => n, zK: () => r });
            var i = a(202784);
            const n = (0, i.createContext)({ values: {}, submit: () => {}, setErrors: () => {}, change: (e, t) => {}, errors: {}, setFocus: () => {}, submissionStatus: "pending", submissionResult: void 0, validationStatus: "pending", submissionKey: void 0, canSubmit: !1 }),
                o = { text: 0, password: 1, email: 2, number: 3, username: 4, tel: 5, url: 6, auth_code: 7, hidden: 8, growing_text: 9, date: 10 },
                r = [o.text, o.email, o.username, o.url, o.growing_text],
                l =
                    ((0, i.createContext)({ groupKeys: new Set(), active: new Set(), register: (e) => {} }),
                    (e) => {
                        switch (e) {
                            case o.email:
                                return "email";
                            case o.number:
                            case o.auth_code:
                                return "numeric";
                            case o.tel:
                                return "tel";
                            case o.url:
                                return "url";
                            case o.text:
                            case o.password:
                            case o.username:
                            case o.hidden:
                            case o.growing_text:
                            case o.date:
                            default:
                                return "text";
                        }
                    }),
                s = (e) => {
                    switch (e) {
                        case o.password:
                            return "password";
                        case o.email:
                            return "email";
                        case o.number:
                            return "number";
                        case o.tel:
                            return "tel";
                        case o.url:
                            return "url";
                        case o.hidden:
                            return "hidden";
                        case o.date:
                            return "date";
                        case o.growing_text:
                        case o.text:
                        case o.username:
                        case o.auth_code:
                        default:
                            return "text";
                    }
                },
                c = (0, i.createContext)(null);
        },
        695301: (e, t, a) => {
            a.d(t, { J: () => o, m: () => n });
            var i = a(511799);
            const n = (e, t) => {
                    switch (e) {
                        case i.n$.date:
                            return new Date(t).toLocaleDateString("en-CA").padStart(10, "0");
                        case i.n$.username:
                            return "@" === t[0] ? t : `@${t}`;
                        default:
                            return t;
                    }
                },
                o = (e, t) => (e === i.n$.username ? t.replace("@", "") : t);
        },
        971668: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(552322),
                n = a(202784),
                o = a(801102),
                r = a(798324);
            function l({ p: e, el: t, mods: a }) {
                const l = e.int("gapH") ?? 2,
                    s = e.int("gapV") ?? 2,
                    c = (0, o.Z)(t),
                    d = (0, n.useMemo)(() => {
                        if (!c) return 12;
                        let e = 0;
                        return (
                            c.forEach((t) => {
                                const a = (0, o.Z)(t.props.el);
                                let i = 0;
                                a.forEach((e) => {
                                    const t = (0, r.tJ)(e.props.el).int("columns") ?? 1;
                                    i += t;
                                }),
                                    (e = Math.max(e, i));
                            }),
                            e || 12
                        );
                    }, [c]);
                return (0, i.jsx)("div", { className: `${a}`, children: (0, i.jsxs)("table", { style: { borderSpacing: `${l}px ${s}px` }, className: "w-full border-separate", children: [(0, i.jsx)("colgroup", { children: [...Array(d)].map((e, t) => (0, i.jsx)("col", { width: 100 / d + "%" }, `grid-col-${t}-${d}`)) }), (0, i.jsx)("tbody", { children: (0, o.Z)(t) })] }) });
            }
        },
        790119: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(552322),
                n = a(202784),
                o = a(801102),
                r = a(977391);
            function l({ p: e, el: t, mods: a }) {
                const l = e.int("columns") ?? 1,
                    d = e.enum("align") ?? 0,
                    { vAlign: m } = (0, n.useContext)(r.jg);
                return (0, i.jsx)("td", { colSpan: l, className: `${c(m)} ${s(r.Eu[d])} ${a}`, children: (0, o.Z)(t) });
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
            a.d(t, { Z: () => r });
            var i = a(552322),
                n = a(801102),
                o = a(977391);
            function r({ p: e, el: t, mods: a }) {
                const r = e.enum("align") ?? 0;
                return (0, i.jsx)(o.jg.Provider, { value: { vAlign: o.qx[r] }, children: (0, i.jsx)("tr", { className: `align-${r} ${a}`, children: (0, n.Z)(t) }) });
            }
        },
        977391: (e, t, a) => {
            a.d(t, { Eu: () => o, jg: () => r, qx: () => n });
            var i = a(202784);
            const n = { 0: "center", 1: "top", 2: "baseline", 3: "bottom" },
                o = { 0: "start", 1: "middle", 2: "end" },
                r = (0, i.createContext)({ vAlign: "center" });
        },
        514378: (e, t, a) => {
            a.d(t, { Z: () => s });
            var i = a(552322),
                n = a(690560),
                o = a(523366),
                r = a(202784),
                l = a(109195);
            function s({ el: e, p: t, mods: a }) {
                const s = t.int("gap") ?? 2,
                    c = t.int("initialPos") ?? 0,
                    d = (function (e) {
                        const t = [];
                        for (const a of e.children) {
                            const i = e.dom.el(a);
                            void 0 !== i && t.push(i);
                        }
                        return t;
                    })(e),
                    m = (0, r.useRef)(null),
                    [_, u] = (0, r.useState)(0),
                    [p, f] = (0, r.useState)(!1),
                    h = (0, r.useCallback)((e, t = "smooth") => {
                        if (m.current) {
                            const a = e.offsetLeft - m.current.clientWidth / 2 + e.offsetWidth / 2,
                                i = m.current.scrollWidth - m.current.clientWidth,
                                n = Math.max(0, Math.min(a, i));
                            m.current.scrollTo({ left: n, behavior: t });
                        }
                    }, []),
                    g = (0, r.useCallback)(
                        (e) => {
                            h(e, "smooth");
                        },
                        [h],
                    );
                (0, r.useEffect)(() => {
                    if (m.current && c > 0 && c < d.length) {
                        const e = m.current.children[c];
                        e && h(e, "auto");
                    }
                }, [c, d.length, h]);
                const k = 0 !== _,
                    b = m.current && _ <= m.current?.scrollWidth - m.current?.clientWidth - 2,
                    v = (e) => {
                        g(e.currentTarget);
                    };
                return (0, i.jsxs)("div", {
                    className: `relative ${a}`,
                    onMouseEnter: () => {
                        f(!0);
                    },
                    onMouseLeave: () => {
                        f(!1);
                    },
                    children: [
                        (0, i.jsx)("div", {
                            className: "absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full overflow-hidden transition-opacity duration-300 " + (p && k ? "opacity-40 hover:opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"),
                            children: (0, i.jsx)("button", {
                                onClick: () => {
                                    if (m.current) {
                                        const e = Math.max(0, m.current.scrollLeft - m.current.clientWidth);
                                        m.current.scrollTo({ left: e, behavior: "smooth" });
                                    }
                                },
                                className: "focus:outline-none",
                                type: "button",
                                children: (0, i.jsx)(n.Z, { className: "w-6 h-6" }),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            ref: m,
                            className: "flex flex-row flex-nowrap overflow-x-auto overflow-y-hidden w-full [&::-webkit-scrollbar]:hidden [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none]",
                            onScroll: () => {
                                m.current && u(m.current.scrollLeft);
                            },
                            style: { gap: `${s}px`, paddingLeft: `${s}px`, paddingRight: `${s}px`, scrollbarWidth: "none" },
                            children: d.map((e, t) => (0, i.jsx)("div", { className: "whitespace-nowrap cursor-pointer", onClick: v, children: (0, i.jsx)(l.Z, { el: e }) }, e.id?.toString() || `hscroller-item-${t}`)),
                        }),
                        (0, i.jsx)("div", {
                            className: "absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full overflow-hidden transition-opacity duration-300 " + (p && b ? "opacity-40 hover:opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"),
                            children: (0, i.jsx)("button", {
                                onClick: () => {
                                    if (m.current) {
                                        const e = m.current.scrollWidth - m.current.clientWidth,
                                            t = Math.min(e, m.current.scrollLeft + m.current.clientWidth);
                                        m.current.scrollTo({ left: t, behavior: "smooth" });
                                    }
                                },
                                className: "focus:outline-none",
                                type: "button",
                                children: (0, i.jsx)(o.Z, { className: "w-6 h-6" }),
                            }),
                        }),
                    ],
                });
            }
        },
        608594: (e, t, a) => {
            a.d(t, { C: () => s });
            var i = a(552322),
                n = a(877751),
                o = a(898171);
            const r = [
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
                l = r.reduce((e, t) => {
                    const a = `Icon${((e) => {
                        const [t, ...a] = e.split("_");
                        return t?.toLowerCase() + a.map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join("");
                    })(t).replace(/^(.)/, (e) => e.toUpperCase())}`;
                    return n[a] && (e[t] = n[a]), e;
                }, {});
            function s({ p: e, mods: t }) {
                const a = e.enum("key") ?? -1,
                    n = (-1 !== a ? r[a] : void 0) ?? "",
                    s = e.int("size") ?? 24,
                    c = l[n] ?? o.Z;
                return (0, i.jsx)(c, { className: t, width: s, height: s });
            }
        },
        96675: (e, t, a) => {
            a.d(t, { Z: () => r });
            var i = a(552322),
                n = a(801102),
                o = a(109195);
            function r({ el: e, p: t }) {
                const a = t.bool("cond") ?? !1,
                    r = t.element("else") ?? null,
                    l = r ? (0, i.jsx)(o.Z, { el: r }) : null;
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
            a.d(t, { Z: () => r });
            var i = a(552322),
                n = a(801102),
                o = a(608222);
            function r({ el: e, p: t, mods: a }) {
                const r = (0, o.o)();
                if (!r || !r.Runtime) return (0, i.jsx)("div", { className: `${a}`, children: "Can't find runtime" });
                const { Runtime: l } = r,
                    s = "https://x.com",
                    c = "https://twitter.com",
                    d = t.url("url") ?? "";
                return (0, i.jsx)("button", {
                    className: `flex ${a} cursor-pointer`,
                    onPointerDown: (e) => e.stopPropagation(),
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
                o = a(109195);
            function r(e, t) {
                return (0, i.jsx)("div", { children: (0, i.jsx)(o.Z, { el: e }) }, e.id || `list-item-${t}`);
            }
            function l({ el: e, mods: t }) {
                return (0, i.jsx)("div", { className: ` ${t}`, children: (0, n.Z)(e, r) });
            }
        },
        553366: (e, t, a) => {
            a.d(t, { Z: () => r });
            var i = a(552322),
                n = a(801102),
                o = a(608222);
            function r({ el: e, p: t, mods: a }) {
                const r = (0, o.o)();
                if (!r || !r.Runtime) return (0, i.jsx)("div", { className: `${a}`, children: "Can't find runtime" });
                const { Runtime: l } = r,
                    s = t.str("to") ?? "",
                    c = s.startsWith("/") ? s.slice(1) : s;
                return (0, i.jsx)("button", {
                    type: "button",
                    className: `flex ${a}`,
                    onPointerDown: (e) => e.stopPropagation(),
                    onClick: (e) =>
                        ((e) => {
                            e.stopPropagation(), e.preventDefault(), c && (":back" === c ? l.history.goBack() : ":dismiss" === c ? l.removeCover() : l.history.push(`/i/jf/${c}`));
                        })(e),
                    children: (0, i.jsx)("div", { className: "w-full", children: (0, n.Z)(e) }),
                });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.LiveEvent~loader.JetfuelFrame~loader.TimelineFrameHandler~loader.PremiumLoaders-c140a3-1ba58491.4df4a30a.js.map

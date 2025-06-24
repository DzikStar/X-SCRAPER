"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame--ebb6fa7a"],
    {
        404446: (e, t, o) => {
            o.d(t, { Z: () => u });
            var r = o(552322),
                n = o(202784),
                s = o(244448),
                i = o(801102),
                l = o(109195),
                a = o(608222),
                c = o(700916);
            function u({ el: e, p: t, mods: o }) {
                const [u, _] = (0, n.useState)(["init"]),
                    [d, m] = (0, n.useState)(!1),
                    [h, f] = (0, n.useState)(null),
                    [p, v] = (0, n.useState)(null),
                    [k, g] = (0, n.useState)({}),
                    x = (0, n.useRef)(null),
                    w = (0, n.useRef)(null),
                    b = (0, n.useRef)(null),
                    [y, N] = (0, n.useState)(!1),
                    j = t.url("feed") ?? "",
                    S = t.element("header"),
                    T = t.element("footer"),
                    C = t.str("cursor:top"),
                    E = t.str("cursor:bottom"),
                    D = (0, a.oG)();
                (0, n.useEffect)(() => {
                    E && f(E), C && v(C);
                }, [E, C]),
                    (0, n.useEffect)(() => {
                        j &&
                            D &&
                            D.Runtime &&
                            (m(!0),
                            u.forEach(async (e) => {
                                const t = `${j}${"init" === e ? "" : `&cursor=${e}`}`;
                                try {
                                    m(!0);
                                    const { Runtime: o } = D;
                                    if (!o) return;
                                    const r = (0, s.vz)(o),
                                        n = r.session(),
                                        i = await o.net.httpGet(t);
                                    if ((i.data && n.onChunk(new Uint8Array(i.data)), r.root.value)) {
                                        const t = (0, s.tJ)(r.root.value).str("cursor:bottom") || "",
                                            o = (0, s.tJ)(r.root.value).str("cursor:top") || "";
                                        t && (f(t), t === u[u.length - 1] && N(!0)), o && v(o), g((t) => ({ ...t, [e]: r.root.value }));
                                    }
                                } catch (e) {
                                } finally {
                                    m(!1);
                                }
                            }));
                    }, [j, u, D]),
                    (0, n.useEffect)(() => {
                        const e = w.current;
                        if (!e) return;
                        const t = new IntersectionObserver(
                            (e) => {
                                e[0]?.isIntersecting && !d && h && !y && _((e) => [...e, h]);
                            },
                            { rootMargin: "200px" },
                        );
                        return (
                            t.observe(e),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [h, d, y]),
                    (0, n.useEffect)(() => {
                        const e = b.current;
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
                    }, [p, d]);
                let $ = 0;
                function O(e, t) {
                    return ($ += e.children.length), (0, r.jsx)("div", { className: "content-visibility-auto", children: (0, r.jsx)(l.Z, { el: e }) }, e?.id || `list-item-${t + $}`);
                }
                return (0, r.jsxs)("div", {
                    ref: x,
                    className: `${o}`,
                    children: [
                        (0, r.jsx)("div", { ref: b, style: { height: "10px", width: "100%" } }),
                        S && (0, r.jsx)(l.Z, { el: S }),
                        (0, r.jsx)("div", { className: "list-static-items", children: (0, i.Z)(e, O) }),
                        (0, r.jsx)("div", {
                            className: "list-feed-items",
                            children: u.map((e, t) => {
                                const o = k[e];
                                return o ? (0, r.jsx)("div", { className: "feed-page", children: (0, i.Z)(o, O) }, `${e}-${t}-${$}`) : (0, r.jsx)("div", {}, `${e}-${t}-${$}`);
                            }),
                        }),
                        d && (0, r.jsx)(c.A, { size: 20 }),
                        T && (0, r.jsx)(l.Z, { el: T }),
                        (0, r.jsx)("div", { ref: w, style: { height: "10px", width: "100%" } }),
                    ],
                });
            }
        },
        888348: (e, t, o) => {
            o.d(t, { Z: () => u });
            var r = o(552322),
                n = o(202784),
                s = o(801102),
                i = o(752659),
                l = o(608222),
                a = o(700916);
            function c({ feedSrc: e, onBottomCursor: t, onLoadComplete: o }) {
                const [c, u] = (0, n.useState)(!0),
                    [_, d] = (0, n.useState)(null),
                    [m, h] = (0, n.useState)(null),
                    f = (0, n.useRef)({}),
                    p = (0, l.oG)();
                return p && p.Runtime
                    ? ((0, n.useEffect)(() => {
                          if (f.current[e]) return;
                          f.current[e] = !0;
                          const { Runtime: r } = p;
                          if (!r) return d(new Error("Runtime not available")), u(!1), void o();
                          const n = (0, i.vz)(r);
                          !(async function () {
                              u(!0);
                              const s = n.session();
                              if (!r) return d(new Error("Runtime not available")), u(!1), void o();
                              const l = await r.net.httpGet(e);
                              if ((l?.data && s.onChunk(new Uint8Array(l.data)), !n.root.value)) return d(new Error("DOM not available")), u(!1), void o();
                              if ((h(n.root.value), n.root.value)) {
                                  const e = (0, i.tJ)(n.root.value).str("cursor:bottom") || "";
                                  t(e);
                              }
                              u(!1), o();
                          })();
                      }, [e, t, o, p]),
                      c ? (0, r.jsx)(a.A, { size: 20 }) : _ ? (0, r.jsx)("p", { style: { color: "red" }, children: _.message }) : (0, r.jsx)("div", { className: "contents", children: !m || c || _ ? null : (0, s.Z)(m) }))
                    : (d(new Error("Runtime not available")), u(!1), void o());
            }
            function u({ p: e, mods: t }) {
                const [o, s] = (0, n.useState)(["init"]),
                    [i, l] = (0, n.useState)(!1),
                    [a, u] = (0, n.useState)(null),
                    _ = (0, n.useRef)(null),
                    d = (0, n.useRef)(null),
                    m = e?.url?.("src") ?? "";
                (0, n.useEffect)(() => {
                    const e = d.current;
                    if (!e) return;
                    const t = new IntersectionObserver(
                        (e) => {
                            e[0]?.isIntersecting && !i && a && (l(!0), s((e) => [...e, a]));
                        },
                        { rootMargin: "200px" },
                    );
                    return (
                        t.observe(e),
                        () => {
                            t.disconnect();
                        }
                    );
                }, [a, i]);
                const h = (e) => {
                        u(e);
                    },
                    f = () => {
                        l(!1);
                    };
                return (0, r.jsxs)("div", { ref: _, className: `${t}`, children: [o.map((e) => ("" === e ? null : (0, r.jsx)(c, { feedSrc: `${m.startsWith("/") ? "" : "/"}${m}${"init" === e ? "" : `&cursor=${e}`}`, onBottomCursor: h, onLoadComplete: f }, `${e}`))), (0, r.jsx)("div", { ref: d, style: { height: "10px", width: "100%" } })] });
            }
        },
        592910: (e, t, o) => {
            o.d(t, { Z: () => a });
            var r = o(552322),
                n = o(787923),
                s = o(533210),
                i = o(202784),
                l = o(109195);
            function a({ el: e, p: t, mods: o }) {
                const a = t.int("gap") ?? 2,
                    c = t.int("initialPos") ?? 0,
                    u = (function (e) {
                        const t = [];
                        for (const o of e.children) {
                            const r = e.dom.el(o);
                            void 0 !== r && t.push(r);
                        }
                        return t;
                    })(e),
                    _ = (0, i.useRef)(null),
                    [d, m] = (0, i.useState)(0),
                    [h, f] = (0, i.useState)(!1),
                    p = (0, i.useCallback)((e, t = "smooth") => {
                        if (_.current) {
                            const o = e.offsetLeft - _.current.clientWidth / 2 + e.offsetWidth / 2,
                                r = _.current.scrollWidth - _.current.clientWidth,
                                n = Math.max(0, Math.min(o, r));
                            _.current.scrollTo({ left: n, behavior: t });
                        }
                    }, []),
                    v = (0, i.useCallback)(
                        (e) => {
                            p(e, "smooth");
                        },
                        [p],
                    );
                (0, i.useEffect)(() => {
                    if (_.current && c > 0 && c < u.length) {
                        const e = _.current.children[c];
                        e && p(e, "auto");
                    }
                }, [c, u.length, p]);
                const k = 0 !== d,
                    g = _.current && d <= _.current?.scrollWidth - _.current?.clientWidth - 2,
                    x = (e) => {
                        v(e.currentTarget);
                    };
                return (0, r.jsxs)("div", {
                    className: `relative ${o}`,
                    onMouseEnter: () => {
                        f(!0);
                    },
                    onMouseLeave: () => {
                        f(!1);
                    },
                    children: [
                        (0, r.jsx)("div", {
                            className: "absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full overflow-hidden transition-opacity duration-300 " + (h && k ? "opacity-40 hover:opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"),
                            children: (0, r.jsx)("button", {
                                onClick: () => {
                                    if (_.current) {
                                        const e = Math.max(0, _.current.scrollLeft - _.current.clientWidth);
                                        _.current.scrollTo({ left: e, behavior: "smooth" });
                                    }
                                },
                                className: "focus:outline-none",
                                type: "button",
                                children: (0, r.jsx)(n.Z, { className: "w-6 h-6" }),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            ref: _,
                            className: "flex flex-row flex-nowrap overflow-x-auto overflow-y-hidden w-full [&::-webkit-scrollbar]:hidden [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none]",
                            onScroll: () => {
                                _.current && m(_.current.scrollLeft);
                            },
                            style: { gap: `${a}px`, paddingLeft: `${a}px`, paddingRight: `${a}px`, scrollbarWidth: "none" },
                            children: u.map((e, t) => (0, r.jsx)("div", { className: "whitespace-nowrap cursor-pointer", onClick: x, children: (0, r.jsx)(l.Z, { el: e }) }, e.id?.toString() || `hscroller-item-${t}`)),
                        }),
                        (0, r.jsx)("div", {
                            className: "absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full overflow-hidden transition-opacity duration-300 " + (h && g ? "opacity-40 hover:opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"),
                            children: (0, r.jsx)("button", {
                                onClick: () => {
                                    if (_.current) {
                                        const e = _.current.scrollWidth - _.current.clientWidth,
                                            t = Math.min(e, _.current.scrollLeft + _.current.clientWidth);
                                        _.current.scrollTo({ left: t, behavior: "smooth" });
                                    }
                                },
                                className: "focus:outline-none",
                                type: "button",
                                children: (0, r.jsx)(s.Z, { className: "w-6 h-6" }),
                            }),
                        }),
                    ],
                });
            }
        },
        140063: (e, t, o) => {
            o.d(t, { Z: () => l });
            var r = o(552322),
                n = o(801102),
                s = o(109195);
            function i(e, t) {
                return (0, r.jsx)("div", { children: (0, r.jsx)(s.Z, { el: e }) }, e.id || `list-item-${t}`);
            }
            function l({ el: e, mods: t }) {
                return (0, r.jsx)("div", { className: ` ${t}`, children: (0, n.Z)(e, i) });
            }
        },
        611294: (e, t, o) => {
            o.d(t, { Z: () => l });
            var r = o(552322),
                n = o(202784),
                s = o(801102),
                i = o(109195);
            function l({ el: e, p: t, mods: o }) {
                const l = t.element("header"),
                    a = t.element("footer"),
                    c = t.action("on:appear");
                return (
                    (0, n.useEffect)(() => {
                        c && c();
                    }, []),
                    (0, r.jsxs)("div", { className: `w-full ${o}`, children: [l && (0, r.jsx)(i.Z, { el: l }), (0, s.Z)(e), a && (0, r.jsx)(i.Z, { el: a })] })
                );
            }
        },
        956227: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(552322),
                n = o(109195);
            function s({ p: e, el: t, mods: o }) {
                const s = e.int("activePage") ?? 0,
                    i = (function (e) {
                        const t = [];
                        for (const o of e.children) {
                            const r = e.dom.el(o);
                            void 0 !== r && t.push(r);
                        }
                        return t;
                    })(t);
                return i ? (0, r.jsx)("div", { className: o, children: i[s] && (0, r.jsx)(n.Z, { el: i[s] }) }) : null;
            }
        },
        877511: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(552322),
                n = o(373461),
                s = o(801102);
            function i({ p: e, el: t }) {
                const o = e.str("src") ?? "",
                    i = e.int("autoRefreshSeconds") ?? 0,
                    l = (0, s.Z)(t);
                return (0, r.jsx)(n.Z, { url: o, refreshIntervalSeconds: i, ...(l.length > 0 ? { placeholder: l } : {}) });
            }
        },
        799245: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(552322),
                n = o(801102);
            function s({ el: e, mods: t }) {
                return (0, r.jsx)("div", { className: `flex ${t}`, children: (0, n.Z)(e) });
            }
        },
        224989: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(552322),
                n = o(801102);
            function s({ el: e, mods: t }) {
                return (0, r.jsx)("div", { className: `flex flex-col ${t}`, children: (0, n.Z)(e) });
            }
        },
        527138: (e, t, o) => {
            o.d(t, { Z: () => l });
            var r = o(552322),
                n = o(801102),
                s = o(109195);
            function i(e, t) {
                return 0 === t ? (0, r.jsx)(s.Z, { el: e }, t) : (0, r.jsx)("div", { className: "absolute inset-0 w-full h-full", children: (0, r.jsx)(s.Z, { el: e }) }, t);
            }
            function l({ el: e, mods: t }) {
                return (0, r.jsx)("div", { className: `relative ${t}`, children: (0, n.Z)(e, i) });
            }
        },
        128881: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(552322),
                n = o(801102),
                s = o(608222);
            function i({ el: e, p: t, mods: o }) {
                const i = (0, s.oG)();
                if (!i || !i.Runtime) return (0, r.jsx)("div", { className: `${o}`, children: "Can't find runtime" });
                const { Runtime: l } = i,
                    a = "https://x.com",
                    c = "https://twitter.com",
                    u = t.url("url") ?? "";
                return (0, r.jsx)("button", {
                    className: `flex ${o} cursor-pointer`,
                    onPointerDown: (e) => e.stopPropagation(),
                    onClick: (e) =>
                        ((e) => {
                            if ((e.preventDefault(), e.stopPropagation(), u))
                                if (u.startsWith("twitter://jf/")) {
                                    const e = u.slice(10);
                                    l.history.push(`/i/${e}`);
                                } else if (u.startsWith(c)) {
                                    const e = u.slice(19);
                                    l.history.push(e);
                                } else if (u.startsWith(a)) {
                                    const e = u.slice(13);
                                    l.history.push(e);
                                } else window && (window.location.href = u);
                        })(e),
                    type: "button",
                    children: (0, n.Z)(e),
                });
            }
        },
        137087: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(552322),
                n = o(801102),
                s = o(608222);
            function i({ el: e, p: t, mods: o }) {
                const i = (0, s.oG)();
                if (!i || !i.Runtime) return (0, r.jsx)("div", { className: `${o}`, children: "Can't find runtime" });
                const { Runtime: l } = i,
                    a = t.str("to") ?? "",
                    c = a.startsWith("/") ? a.slice(1) : a,
                    u = (e) => {
                        e.stopPropagation(), e.preventDefault(), c && (":back" === c ? l.history.goBack() : ":dismiss" === c ? l.removeCover() : l.history.push(`/i/jf/${c}`));
                    };
                return (0, r.jsx)("button", {
                    className: `flex ${o}`,
                    onPointerDown: (e) => e.stopPropagation(),
                    onClick: (e) => u(e),
                    type: "button",
                    tabIndex: 0,
                    onKeyDown: (e) => {
                        ("Enter" !== e.key && " " !== e.key) || u(e);
                    },
                    children: (0, n.Z)(e),
                });
            }
        },
        110959: (e, t, o) => {
            o.d(t, { Z: () => l });
            var r = o(552322),
                n = o(801102),
                s = o(608222);
            const i = { x: 0, facebook: 1, whatsapp: 2, telegram: 3, linkedin: 4, email: 5, messages: 6, dm: 7, os: 8, copy: 9, facebookMessenger: 10, gmail: 11, signal: 12 };
            function l({ p: e, el: t, mods: o }) {
                const l = e.url("url") ?? "",
                    a = e.enum("target"),
                    c = (0, s.oG)();
                if (!c || !c.Runtime) return (0, r.jsx)("div", { className: `${o}`, children: "Can't find runtime" });
                const { Runtime: u } = c;
                function _(e) {
                    try {
                        navigator.share && navigator.share({ url: e });
                    } catch (e) {}
                }
                return (0, r.jsx)("div", {
                    className: `flex cursor-pointer ${o}`,
                    onClick: (e) =>
                        ((e) => {
                            switch ((e.preventDefault(), e.stopPropagation(), a)) {
                                case i.x:
                                    u.history.push({ state: { text: l }, pathname: "/compose/post" });
                                    break;
                                case i.dm:
                                    u.history.push({ state: { text: l }, pathname: "/messages/compose" });
                                    break;
                                case i.os:
                                    _(l);
                                    break;
                                case i.copy:
                                    navigator.clipboard.writeText(l);
                                    break;
                                default:
                                    _(l);
                            }
                        })(e),
                    children: (0, n.Z)(t),
                });
            }
        },
        165893: (e, t, o) => {
            o.d(t, { Z: () => a });
            var r = o(552322),
                n = o(202784),
                s = o(801102),
                i = o(109195),
                l = o(831173);
            function a({ el: e, p: t, mods: o }) {
                const [a, c] = (0, n.useState)(!1),
                    u = t.element("cover");
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("button", {
                            className: o,
                            onClick: (e) => {
                                e.stopPropagation(), c(!0);
                            },
                            type: "button",
                            children: (0, s.Z)(e),
                        }),
                        u && a && (0, r.jsx)(l.Z, { showModal: a, setShowModal: c, children: (0, r.jsx)(i.Z, { el: u }) }),
                    ],
                });
            }
        },
        831173: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(552322),
                n = o(202784),
                s = o(608222);
            function i({ showModal: e, setShowModal: t, children: o }) {
                const i = (0, n.useRef)(null),
                    [l, a] = (0, n.useState)(!1),
                    c = (0, s.oG)();
                if (!c) return (0, r.jsx)("div", { children: "Runtime not available" });
                const { Runtime: u } = c;
                if (!u) return (0, r.jsx)("div", { children: "Runtime not available" });
                (0, n.useEffect)(() => {
                    const e = window.matchMedia("(min-width: 1024px)"),
                        t = (e) => {
                            a(e.matches);
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
                        e && i.current ? (u.addCover(() => i.current?.close()), i.current.showModal()) : !e && i.current?.open && (i.current.close(), u.removeCover());
                    }, [e, u.addCover, u.removeCover]);
                return (0, r.jsx)("dialog", {
                    ref: i,
                    onClose: () => t(!1),
                    onClick: (e) => {
                        e.target === i.current && (e.stopPropagation(), i.current?.close(), t(!1));
                    },
                    style: l ? void 0 : { width: "100%", minWidth: "100vw", minHeight: "100vh", height: "100%" },
                    className: "w-full min-w-screen h-screen w-screen lg:min-w-none rounded-[0.2em] border-none p-0 fixed lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 m-0 lg:w-full lg:max-h-full z-[1] bg-transparent backdrop:bg-black/30 motion-safe:animate-fadeIn lg:motion-safe:[&[open]]:animate-zoomIn lg:focus:outline-none lg:max-w-[600px]",
                    children: (0, r.jsx)("div", { onClick: (e) => e.stopPropagation(), className: "p-4 contents flex-col items-center text-center h-full w-full", children: o }),
                });
            }
        },
        969677: (e, t, o) => {
            o.d(t, { Z: () => u });
            var r = o(552322),
                n = o(202784),
                s = o(801102),
                i = o(109195),
                l = o(608222),
                a = o(644109);
            const c = (e, t) => {
                const o = e.getBoundingClientRect();
                (o.left + o.right) / 2 < window.innerWidth / 2 ? ((t.style.left = "0px"), (t.style.right = "")) : ((t.style.left = ""), (t.style.right = "0px")), o.bottom + t.offsetHeight < document.documentElement.scrollHeight ? ((t.style.top = `${e.offsetHeight}px`), (t.style.bottom = "")) : ((t.style.top = ""), (t.style.bottom = `${e.offsetHeight}px`));
            };
            function u({ el: e, p: t, mods: o }) {
                const u = (0, l.oG)(),
                    _ = u?.Runtime;
                if (!u || !_) return (0, r.jsx)("div", { children: "Runtime not available" });
                const d = t.element("popover"),
                    m = (0, n.useRef)(null),
                    h = (0, n.useRef)(null);
                (0, n.useEffect)(() => {
                    const e = () => {
                            m?.current && h?.current && c(m.current, h.current);
                        },
                        t = (0, a.D)(e, 250);
                    return (
                        e(),
                        window.addEventListener("resize", t),
                        () => {
                            window.removeEventListener("resize", t);
                        }
                    );
                }, []);
                const [f, p] = (0, n.useState)(!1);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        f && (0, r.jsx)("div", { className: "fixed left-0 top-0 w-screen h-screen", onClick: () => _.removeCover() }),
                        (0, r.jsxs)("div", {
                            className: "relative",
                            children: [
                                (0, r.jsx)("button", {
                                    ref: m,
                                    type: "button",
                                    onClick: (e) => {
                                        e.stopPropagation(),
                                            m?.current &&
                                                h?.current &&
                                                (c(m.current, h.current),
                                                p(!f),
                                                _.addCover(() => {
                                                    e.stopPropagation(), p(!1);
                                                }));
                                    },
                                    className: `flex flex-col ${o} w-full h-full`,
                                    children: (0, s.Z)(e),
                                }),
                                d && (0, r.jsx)("div", { ref: h, className: "absolute min-w-max bg-transparent drop-shadow-lg z-10 " + (f ? "" : "invisible"), children: (0, r.jsx)(i.Z, { el: d }) }),
                            ],
                        }),
                    ],
                });
            }
        },
        978342: (e, t, o) => {
            o.d(t, { Z: () => a });
            var r = o(552322),
                n = o(202784),
                s = o(801102),
                i = o(109195),
                l = o(831173);
            function a({ el: e, p: t, mods: o }) {
                const [a, c] = (0, n.useState)(!1),
                    u = t.element("content");
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("button", {
                            className: o,
                            onClick: (e) => {
                                e.stopPropagation(), c(!0);
                            },
                            type: "button",
                            children: (0, s.Z)(e),
                        }),
                        u && (0, r.jsx)(l.Z, { showModal: a, setShowModal: c, children: (0, r.jsx)(i.Z, { el: u }) }),
                    ],
                });
            }
        },
        842602: (e, t, o) => {
            o.d(t, { Z: () => l });
            var r = o(552322),
                n = o(202784),
                s = o(109195),
                i = o(608222);
            function l() {
                const [e, t] = (0, n.useState)([]),
                    o = (0, i.oG)();
                if (!o || !o.Runtime) return;
                const { Runtime: l } = o,
                    a = () => {
                        t((e) => e.slice(1));
                    };
                return (
                    l.setAddToToastQueue((e) => {
                        t((t) => [...t, e]),
                            setTimeout(() => {
                                a();
                            }, 4e3);
                    }),
                    l.setRemoveFromToastQueue(a),
                    (0, r.jsxs)("div", { style: { position: "fixed", bottom: "1rem", marginTop: "1rem", left: "50%", transform: "translateX(-50%)", zIndex: 1e3, display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 1, animation: "slideUp 0.3s ease-out" }, children: [e.slice(-3).map((e, t) => (0, r.jsx)("div", { style: { animation: "fadeIn 0.3s ease-in", marginBottom: "0.5rem" }, children: (0, r.jsx)(s.Z, { el: e }) }, `${e.id}-${t}`)), (0, r.jsx)("style", { children: "\n          @keyframes slideUp {\n            from {\n              bottom: 0;\n              opacity: 0;\n            }\n            to {\n              bottom: 1rem;\n              opacity: 1;\n            }\n          }\n          @keyframes fadeIn {\n            from {\n              opacity: 0;\n            }\n            to {\n              opacity: 1;\n            }\n          }\n          @keyframes slideDown {\n            from {\n              bottom: 1rem;\n              opacity: 1;\n            }\n            to {\n              bottom: 0;\n              opacity: 0;\n            }\n          }\n          @keyframes fadeOut {\n            from {\n              opacity: 1;\n            }\n            to {\n              opacity: 0;\n            }\n          }\n        " })] })
                );
            }
        },
        667622: (e, t, o) => {
            o.d(t, { o: () => r });
            const r = 140;
        },
        274653: (e, t, o) => {
            o.d(t, { AH: () => a, rX: () => c });
            var r = o(552322),
                n = o(202784),
                s = o(922332),
                i = o(667622);
            const l = (0, n.createContext)({ navigateStory: () => {}, navigateElement: () => {}, storyPagerState: { stories: [], activeStory: 0 }, initializeStories: () => {}, initializeStoryElements: () => {}, onClose: () => {}, horizontalDragFraction: 0, setHorizontalDragFraction: () => {}, navigateStoryWithTransition: () => {} }),
                a = ({ children: e, onClose: t }) => {
                    const [o, a] = (0, n.useState)({ stories: [], activeStory: 0 }),
                        [c, u] = (0, n.useState)(0),
                        _ = (0, n.useCallback)(() => {
                            t?.();
                        }, [t]),
                        d = (0, n.useCallback)((e, t) => {
                            const o = [];
                            for (let r = 0; r < e; r++) o.push({ index: r, elements: [], activeElement: t ?? 0 });
                            a((e) => ({ ...e, stories: o }));
                        }, []),
                        m = (0, n.useCallback)((e, t) => {
                            a((o) => {
                                const r = o.stories[t];
                                if (!r) throw new Error(`Story did not exist with id: ${t}`);
                                const n = [];
                                for (let t = 0; t < e; t++) n.push({ index: t });
                                const s = { ...r, elements: n },
                                    i = [...o.stories];
                                return (i[t] = s), { ...o, stories: i };
                            });
                        }, []),
                        h = (0, n.useCallback)((e) => {
                            a((t) => ({ ...t, activeStory: (0, s.uZ)(t.activeStory + e, 0, t.stories.length - 1) }));
                        }, []),
                        f = (0, n.useCallback)(
                            (e) => {
                                a((t) => {
                                    const o = [...t.stories],
                                        r = t.activeStory,
                                        n = o[r];
                                    if (!n) return t;
                                    const i = n.activeElement + e,
                                        l = n.elements.length - 1;
                                    if (i > l) return h(1), t;
                                    if (i < 0) return h(-1), t;
                                    const a = (0, s.uZ)(i, 0, l);
                                    return (o[r] = { ...n, activeElement: a }), { ...t, stories: o };
                                });
                            },
                            [h],
                        ),
                        p = (0, n.useCallback)(
                            (e) => {
                                const t = o.activeStory + e;
                                t < 0 ||
                                    t > o.stories.length - 1 ||
                                    (u(-1 * e),
                                    setTimeout(() => {
                                        h(e), u(0.001);
                                    }, i.o));
                            },
                            [h, o.activeStory, o.stories.length],
                        ),
                        v = { navigateStory: h, navigateElement: f, storyPagerState: o, initializeStories: d, initializeStoryElements: m, onClose: _, horizontalDragFraction: c, setHorizontalDragFraction: u, navigateStoryWithTransition: p };
                    return (0, r.jsx)(l.Provider, { value: v, children: e });
                };
            function c() {
                const e = (0, n.useContext)(l);
                if (void 0 === e) throw new Error("useStoryPagerContext was used outside of its provider StoryPagerContextProvider");
                return e;
            }
        },
        70477: (e, t, o) => {
            o.d(t, { Z: () => u });
            var r = o(552322),
                n = o(202784),
                s = o(801102),
                i = o(244448),
                l = o(922332),
                a = o(274653);
            const c = ({ isActive: e, isComplete: t }) => {
                    const { currentTimeMs: o, durationMs: n } = (0, i.wR)();
                    let s = 0;
                    if (t) s = 100;
                    else if (e) {
                        const e = (o || 0) / (n || 1);
                        s = 100 * Math.max(0, Math.min(1, e));
                    }
                    const l = { width: `${s}%` };
                    return (0, r.jsx)("div", { className: "rounded-md h-1 flex-grow bg-gray-500 overflow-hidden", children: (0, r.jsx)("div", { className: "h-1 bg-white w-0", style: l }) });
                },
                u = ({ el: e, p: t }) => {
                    const o = t.int("index") ?? 0,
                        u = (0, s.Z)(e),
                        { initializeStoryElements: _, navigateElement: d, navigateStoryWithTransition: m, storyPagerState: h } = (0, a.rX)(),
                        f = h.stories[o],
                        { setTracksFinished: p, tracksFinished: v } = (0, i.wR)();
                    (0, n.useEffect)(() => {
                        if (v) {
                            const e = h.stories[h.activeStory];
                            if (!e) return;
                            e.activeElement === e.elements.length - 1 ? m(1) : d(1), p?.(!1);
                        }
                    }, [d, m, p, h.activeStory, h.stories, v]),
                        (0, l.qR)(() => {
                            _(u?.length || 0, o);
                        });
                    const k = f?.activeElement || 0;
                    return u && f ? (0, r.jsxs)("div", { className: "h-full w-full", children: [(0, r.jsx)("div", { className: "z-[101] absolute top-0 h-8 flex flex-row gap-1 items-center justify-center py-2 px-4 w-full", children: u.map((e, t) => (0, r.jsx)(c, { isActive: t === k, isComplete: t < k }, t)) }), u[k]] }) : null;
                };
        },
        31450: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(552322),
                n = o(801102);
            function s({ el: e, mods: t }) {
                return (0, r.jsx)("div", { className: `flex w-full h-full ${t}`, children: (0, n.Z)(e) });
            }
        },
        374417: (e, t, o) => {
            o.d(t, { Z: () => k });
            var r = o(552322),
                n = o(202784),
                s = o(244448),
                i = o(458872),
                l = o(667542),
                a = o(516718),
                c = o(4700),
                u = o(922332),
                _ = o(667622),
                d = o(274653),
                m = o(801102);
            const h = () => "ontouchstart" in window || navigator.maxTouchPoints > 0,
                f = { medium: 768, large: 1024, xLarge: 1280 },
                p = ({ icon: e, onClick: t, onPointerDown: o, className: n = "", ...s }) =>
                    (0, r.jsx)("button", {
                        className: n,
                        onClick: (e) => {
                            e.stopPropagation(), t(e);
                        },
                        onPointerDown: (e) => {
                            e.stopPropagation(), o(e.nativeEvent);
                        },
                        onPointerMove: (e) => {
                            e.stopPropagation();
                        },
                        onPointerUp: (e) => {
                            e.stopPropagation();
                        },
                        type: "button",
                        ...s,
                        children: e,
                    }),
                v = ({ children: e, initialIndex: t }) => {
                    const { horizontalDragFraction: o, initializeStories: m, navigateElement: v, navigateStoryWithTransition: k, setHorizontalDragFraction: g, storyPagerState: x } = (0, d.rX)(),
                        w = h(),
                        b = (0, n.useRef)(null),
                        y = x.stories?.[x.activeStory],
                        N = b.current?.getBoundingClientRect(),
                        j = N?.width || 0,
                        S = N?.left || 0,
                        [T, C] = (0, n.useState)(!1),
                        [E, D, $] = ((e) => {
                            const [t, o] = (0, n.useState)("undefined" != typeof window ? window.innerWidth : 0);
                            return (
                                (0, n.useEffect)(() => {
                                    const e = () => o(window.innerWidth);
                                    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
                                }, []),
                                (0, n.useMemo)(() => e({ windowWidth: t }), [t, e])
                            );
                        })(({ windowWidth: e }) => [e > f.medium, e > f.large, e > f.xLarge]),
                        O = !E,
                        Z = (90 * o).toFixed(1),
                        R = (100 * o).toFixed(1),
                        M = 0 === o || 1 === o || -1 === o ? `transform ${_.o}ms ease-in` : "none",
                        W = (0, n.useMemo)(() => ({ transition: M, transform: `translateZ(-${j / 2}px) rotate3d(0,1,0,${Z}deg)` }), [Z, M, j]),
                        U = (0, n.useMemo)(() => ({ transition: M, transform: `translateX(${R}%)` }), [M, R]),
                        I = (0, n.useMemo)(() => (O ? { transform: `translateZ(${j / 2}px)` } : { transform: "translateX(0%)" }), [O, j]),
                        P = (0, n.useMemo)(() => (O ? { transform: `rotate3d(0,1,0,-90deg) translateZ(${j / 2}px)` } : { transform: "translateX(-100%)" }), [O, j]),
                        L = (0, n.useMemo)(() => (O ? { transform: `rotate3d(0,1,0,90deg) translateZ(${j / 2}px)` } : { transform: "translateX(100%)" }), [O, j]),
                        A = (0, n.useCallback)(
                            (e) => {
                                const t = 0 === x.activeStory ? 0.1 : 1,
                                    o = x.activeStory === x.stories.length - 1 ? -0.1 : -1,
                                    r = (0, u.uZ)(e, o, t);
                                g(r);
                            },
                            [g, x.activeStory, x.stories.length],
                        ),
                        F = (0, n.useCallback)(
                            (e) => {
                                const t = x.stories[x.activeStory];
                                t && (e.clientX - S > j / 2 ? (t.activeElement === t.elements.length - 1 ? k(1) : v(1)) : 0 === t.activeElement ? k(-1) : v(-1));
                            },
                            [S, j, v, k, x.activeStory, x.stories],
                        ),
                        [z, Y, H] = (0, u.Nc)({ direction: "horizontal", swipeItemLength: j, handleFraction: A, handleTap: F, handleSwipe: k }),
                        G = (0, n.useCallback)(
                            (e) => {
                                b.current?.setPointerCapture(e.pointerId), z(e.nativeEvent);
                            },
                            [z],
                        ),
                        q = (0, n.useCallback)(() => {
                            C(!T);
                        }, [T]),
                        X = (0, n.useCallback)((e) => {
                            e.stopPropagation();
                        }, []);
                    (0, u.qR)(() => {
                        x.stories.length || m(e?.length || 0, t ?? 0);
                    });
                    let B = "";
                    E ? (B = "h-[600px] max-h-[600px] min-h-[600px]") : D ? (B = "h-[680px] max-h-[680px] min-h-[680px]") : $ && (B = "h-[800px] max-h-[800px] min-h-[800px]");
                    const V = (0, n.useMemo)(() => (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(p, { icon: (0, r.jsx)(i.Z, { style: { color: "white" } }), onClick: F, onPointerDown: X, className: "absolute top-1/2 left-4 -translate-y-1/2 bg-black/70 w-8 h-8 z-50 p-2 rounded-full" }), (0, r.jsx)(p, { icon: (0, r.jsx)(l.Z, { style: { color: "white" } }), onClick: F, onPointerDown: X, className: "absolute top-1/2 right-4 -translate-y-1/2 bg-black/70 w-8 h-8 z-50 p-2 rounded-full" })] }), [X, F]),
                        J = (0, n.useMemo)(() => (0, r.jsx)(p, { icon: T ? (0, r.jsx)(a.Z, {}) : (0, r.jsx)(c.Z, {}), onClick: q, onPointerDown: X, className: "absolute bottom-4 right-4 bg-black/70 w-8 h-8 z-50 p-2 rounded-full" }), [q, X, T]);
                    if (e && y) {
                        const t = e[x.activeStory],
                            o = e[x.activeStory - 1],
                            n = e[x.activeStory + 1];
                        return (0, r.jsx)("div", { onPointerDown: G, onPointerMove: (e) => Y(e.nativeEvent), onPointerUp: (e) => H(e.nativeEvent), ref: b, className: `\n          h-full w-full touch-none overflow-hidden select-none\n          ${E ? "w-full flex flex-col justify-center bg-black" : ""}\n          ${B}\n        `, children: (0, r.jsx)("div", { className: O ? "h-full w-full" : "", style: O ? { perspective: "800px" } : {}, children: (0, r.jsxs)("div", { className: "h-full w-full flex", style: { transformStyle: "preserve-3d", ...(O ? W : U) }, children: [(0, r.jsxs)("div", { className: `absolute h-full w-full z-50 ${B}`, style: P, children: [o && !w && V, o && J, (0, r.jsx)(s.rh, { isFocused: !1, children: o })] }), (0, r.jsxs)("div", { className: `h-full w-full z-50 ${B}`, style: I, children: [!w && V, J, (0, r.jsx)(s.rh, { isFocused: !0, isMuted: T, children: t })] }), (0, r.jsxs)("div", { className: `absolute h-full w-full z-50 ${B}`, style: L, children: [n && !w && V, n && J, (0, r.jsx)(s.rh, { isFocused: !1, children: n })] })] }) }) });
                    }
                    return null;
                },
                k = ({ el: e, p: t }) => {
                    const o = (0, m.Z)(e),
                        n = t.int("initialIndex") ?? 0;
                    return (0, r.jsx)(d.AH, { children: (0, r.jsx)("div", { className: "h-full w-full flex justify-center items-center", children: (0, r.jsx)(v, { children: o, initialIndex: n }) }) });
                };
        },
        922332: (e, t, o) => {
            o.d(t, { Nc: () => i, qR: () => s, uZ: () => n });
            var r = o(202784);
            function n(e, t, o) {
                return Math.max(Math.min(e, Number.isNaN(o) ? 0 : o), Number.isNaN(t) ? 0 : t);
            }
            function s(e) {
                (0, r.useEffect)(e, []);
            }
            const i = ({ direction: e, handleFraction: t, handleSwipe: o, handleTap: n, swipeItemLength: s, swipeDistanceThreshold: i = s / 20, swipeTimeThreshold: l = 150 }) => {
                const a = (0, r.useRef)(0),
                    c = (0, r.useRef)(0),
                    u = (0, r.useRef)(0),
                    _ = (0, r.useCallback)((t) => ("horizontal" === e ? t.clientX : t.clientY), [e]);
                return [
                    (0, r.useCallback)(
                        (e) => {
                            a.current || ((a.current = Date.now()), (c.current = _(e)));
                        },
                        [_],
                    ),
                    (0, r.useCallback)(
                        (e) => {
                            if (!a.current) return;
                            u.current = _(e);
                            const o = (u.current - c.current) / s;
                            t?.(o);
                        },
                        [_, t, s],
                    ),
                    (0, r.useCallback)(
                        (e) => {
                            if (((u.current = _(e)), !a.current)) return;
                            const r = Date.now() - a.current > l,
                                s = u.current - c.current,
                                d = Math.abs(s) > i;
                            t?.(0), (a.current = 0), r || d ? o?.(s < 0 ? 1 : -1) : n?.(e);
                        },
                        [_, t, o, n, i, l],
                    ),
                    !!a.current,
                ];
            };
        },
        405943: (e, t, o) => {
            o.d(t, { ZP: () => a, Zd: () => i, q0: () => l });
            var r = o(552322),
                n = o(499533),
                s = o(487574);
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
                l = i.reduce((e, t) => {
                    const o = `Icon${((e) => {
                        const [t, ...o] = e.split("_");
                        return t?.toLowerCase() + o.map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join("");
                    })(t).replace(/^(.)/, (e) => e.toUpperCase())}`;
                    return n[o] && (e[t] = n[o]), e;
                }, {});
            function a({ p: e, mods: t }) {
                const o = e.enum("key") ?? -1,
                    n = (-1 !== o ? i[o] : void 0) ?? "",
                    a = e.int("size") ?? 24,
                    c = l[n] ?? s.Z;
                return (0, r.jsx)("span", { className: t, children: (0, r.jsx)(c, { width: a, height: a }) });
            }
        },
        998553: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(552322),
                n = o(202784);
            function s({ element: e, isHovered: t, y: o, x: s }) {
                const [i, l] = (0, n.useState)(!1),
                    a = (0, n.useRef)(null),
                    c = (0, n.useRef)(null);
                return (
                    (0, n.useEffect)(() => {
                        null === a.current && (a.current = o), null === c.current && (c.current = s);
                    }, [o, s]),
                    (0, n.useEffect)(() => {
                        t || ((a.current = null), (c.current = null));
                    }, [t]),
                    (t || i) &&
                        (0, r.jsx)("div", {
                            style: { left: `${c.current ?? s}px`, top: `${a.current ?? o}px`, position: "fixed" },
                            onMouseEnter: () => {
                                l(!0);
                            },
                            onMouseLeave: () => {
                                l(!1);
                            },
                            children: e,
                        })
                );
            }
        },
        866371: (e, t, o) => {
            o.d(t, { Z: () => _ });
            var r = o(552322),
                n = o(405943),
                s = o(487574),
                i = o(998553),
                l = o(109195),
                a = o(202784),
                c = o(370294),
                u = o(608222);
            function _({ p: e, mods: t }) {
                const o = e.enum("key") ?? -1,
                    _ = (-1 !== o ? n.Zd[o] : void 0) ?? "",
                    d = e.int("size") ?? 24,
                    m = e.element("hover") ?? null,
                    h = e.element("tooltip") ?? null,
                    f = e.url("link") ?? "",
                    [p, v] = (0, a.useState)(!1),
                    [k, g] = (0, a.useState)(!1),
                    [x, w] = (0, a.useState)(0),
                    [b, y] = (0, a.useState)(0),
                    N = (0, u.oG)();
                if (!N || !N.Runtime) return (0, r.jsx)("div", { className: `${t}`, children: "Can't find runtime" });
                const { Runtime: j } = N,
                    S = "https://x.com",
                    T = "https://twitter.com",
                    C = n.q0[_] ?? s.Z;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("span", {
                            className: t,
                            onMouseEnter: (e) => {
                                v(!0), w(e.clientY), y(e.clientX);
                            },
                            onMouseMove: (e) => {
                                w(e.clientY), y(e.clientX);
                            },
                            onMouseLeave: () => {
                                v(!1);
                            },
                            onClick: (e) => {
                                if ((g(!k), e.preventDefault(), e.stopPropagation(), f))
                                    if (f.startsWith("twitter://jf/")) {
                                        const e = f.slice(10);
                                        j.history.push(`/i/${e}`);
                                    } else if (f.startsWith(T)) {
                                        const e = f.slice(19);
                                        j.history.push(e);
                                    } else if (f.startsWith(S)) {
                                        const e = f.slice(13);
                                        j.history.push(e);
                                    } else window && (window.location.href = f);
                            },
                            children: (0, r.jsx)(C, { width: d, height: d, className: "inline-block" }),
                        }),
                        m && (0, r.jsx)(i.Z, { element: (0, r.jsx)(l.Z, { el: m }), isHovered: p, y: x, x: b }),
                        h && (0, r.jsx)(c.Z, { element: (0, r.jsx)(l.Z, { el: h }), isActive: k, y: x, x: b, setIsActive: g }),
                    ],
                });
            }
        },
        837260: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(552322),
                n = o(202784),
                s = o(608222);
            function i({ p: e, mods: t }) {
                const o = e.richtext("text") ?? [],
                    i = e.int("maxLines"),
                    l = e.bool("showMore"),
                    a = (0, n.useRef)(null),
                    [c, u] = (0, n.useState)(),
                    _ = "https://x.com",
                    d = "https://twitter.com",
                    m = (0, s.oG)();
                if (!m || !m.Runtime) return (0, r.jsx)("div", { className: `${t}`, children: "Can't find runtime" });
                const { Runtime: h } = m,
                    f = h.history,
                    p = (e, t, o, r) => {
                        e.preventDefault(), e.stopPropagation();
                        let n = t;
                        if (!n && o && r)
                            switch (o) {
                                case 2:
                                    n = `${d}/hashtag/${r.replace("#", "")}`;
                                    break;
                                case 3:
                                    n = `${d}/${r.replace("@", "")}`;
                                    break;
                                case 4:
                                    n = `${d}/search?q=${encodeURIComponent(r)}`;
                            }
                        if (n)
                            if (n.startsWith("twitter://jf/")) {
                                const e = n.slice(10);
                                f.push(`/i/${e}`);
                            } else if (n.startsWith(d)) {
                                const e = n.slice(19);
                                f.push(e);
                            } else if (n.startsWith(_)) {
                                const e = n.slice(13);
                                f.push(e);
                            } else "undefined" != typeof window && (window.location.href = n);
                    },
                    v = (0, n.useCallback)(() => {
                        a.current && u(a.current.scrollHeight > a.current.clientHeight);
                    }, []);
                (0, n.useEffect)(
                    () => (
                        v(),
                        window.addEventListener("resize", v),
                        () => {
                            window.removeEventListener("resize", v);
                        }
                    ),
                    [v],
                );
                const k = null != i && !1 !== c ? `line-clamp-${i}` : "";
                return (0, r.jsxs)("div", {
                    className: `flex flex-col overflow-hidden ${t}`,
                    children: [
                        (0, r.jsx)("div", { ref: a, className: `flex-col overflow-hidden ${k}`, children: o.map((e, t) => (0 === e[0] ? (0, r.jsx)("span", { children: e[1] }, `${t} - ${e[0]}`) : 1 === e[0] && e[2] ? (0, r.jsx)("span", { className: "text-sky-500 cursor-pointer hover:underline", onClick: (t) => p(t, e[2] || ""), children: e[1] }, `${t} - ${e[0]}`) : 2 === e[0] || 3 === e[0] || 4 === e[0] ? (0, r.jsx)("span", { className: "text-blue-500 cursor-pointer hover:underline", onClick: (t) => p(t, "", e[0], e[1]), children: e[1] }, `${t} - ${e[0]}`) : 5 === e[0] ? (0, r.jsx)("span", { className: "font-bold", children: e[1] }, `${t} - ${e[0]}`) : 6 === e[0] ? (0, r.jsx)("span", { className: "italic", children: e[1] }, `${t} - ${e[0]}`) : 255 === e[0] ? (0, r.jsx)("br", {}, `${t} - ${e[0]}`) : (0, r.jsx)("span", { children: e[1] }, `${t} - ${e[0]}`))) }),
                        c &&
                            l &&
                            (0, r.jsx)("button", {
                                type: "button",
                                className: "text-[rgb(29,155,240)] hover:underline w-fit",
                                onClick: () => {
                                    u(!1);
                                },
                                children: "Show more",
                            }),
                    ],
                });
            }
        },
        545576: (e, t, o) => {
            o.d(t, { Z: () => a });
            var r = o(552322),
                n = o(801102),
                s = o(109195),
                i = o(752659);
            function l(e, t) {
                return e.type === (0, i.$3)("RichText2") || e.type === (0, i.$3)("RichText.Icon") || e.type === (0, i.$3)("RichText.Time") || e.type === (0, i.$3)("RichText.Text") ? (0, r.jsx)(s.Z, { el: e }) : (0, r.jsx)("span", { className: "inline-flex", children: (0, r.jsx)(s.Z, { el: e }) }, e.id || `list-item-${t}`);
            }
            function a({ el: e, mods: t, p: o }) {
                const s = o.int("maxLines"),
                    i = o.bool("rtl") ?? !1;
                return (0, r.jsx)("div", { dir: i ? "rtl" : "", className: `inline-flex ${t}`, children: (0, r.jsx)("p", { className: " max-w-full " + (null != s && s > 0 ? `line-clamp-${s} overflow-hidden` : ""), children: (0, n.Z)(e, l) }) });
            }
        },
        232977: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(552322),
                n = o(998553),
                s = o(109195),
                i = o(202784),
                l = o(370294),
                a = o(608222);
            function c({ mods: e, p: t }) {
                const o = t.str("t") ?? "",
                    c = t.element("hover") ?? null,
                    u = t.element("tooltip") ?? null,
                    _ = t.url("link") ?? "",
                    [d, m] = (0, i.useState)(!1),
                    [h, f] = (0, i.useState)(!1),
                    [p, v] = (0, i.useState)(0),
                    [k, g] = (0, i.useState)(0),
                    x = (0, a.oG)();
                if (!x || !x.Runtime) return (0, r.jsx)("div", { className: `${e}`, children: "Can't find runtime" });
                const { Runtime: w } = x,
                    b = "https://x.com",
                    y = "https://twitter.com";
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        c && (0, r.jsx)(n.Z, { element: (0, r.jsx)(s.Z, { el: c }), isHovered: h, y: p, x: k }),
                        u && (0, r.jsx)(l.Z, { element: (0, r.jsx)(s.Z, { el: u }), isActive: d, y: p, x: k, setIsActive: m }),
                        (0, r.jsx)("span", {
                            className: `${e}`,
                            onMouseEnter: (e) => {
                                f(!0), v(e.clientY), g(e.clientX);
                            },
                            onMouseMove: (e) => {
                                v(e.clientY), g(e.clientX);
                            },
                            onMouseLeave: () => {
                                f(!1);
                            },
                            onClick: (e) => {
                                if ((m(!d), e.preventDefault(), e.stopPropagation(), _))
                                    if (_.startsWith("twitter://jf/")) {
                                        const e = _.slice(10);
                                        w.history.push(`/i/${e}`);
                                    } else if (_.startsWith(y)) {
                                        const e = _.slice(19);
                                        w.history.push(e);
                                    } else if (_.startsWith(b)) {
                                        const e = _.slice(13);
                                        w.history.push(e);
                                    } else window && (window.location.href = _);
                            },
                            children: o,
                        }),
                    ],
                });
            }
        },
        618196: (e, t, o) => {
            o.d(t, { Z: () => h });
            var r = o(552322),
                n = o(202784),
                s = o(998553),
                i = o(109195),
                l = o(370294),
                a = o(608222);
            const c = { RELATIVE: 0, TIME: 1, DATE: 2, PRETTY_DATE: 3, MONTH_DATE_TIME: 4, COUNT_DOWN_SECONDS: 5, COUNT_DOWN_MINUTES: 6, COUNT_DOWN_HOURS: 7, COUNT_DOWN_DAYS: 8, COUNT_DOWN_MONTHS: 9, COUNT_DOWN_YEARS: 10, COUNT_DOWN_FULL: 11 },
                u = new Intl.DateTimeFormat(void 0, { dateStyle: "medium" }),
                _ = new Intl.DateTimeFormat(void 0, { timeStyle: "short" }),
                d = new Intl.DateTimeFormat(void 0, { dateStyle: "long" }),
                m = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric" });
            function h({ p: e, mods: t }) {
                const o = e.date("t") ?? new Date(),
                    h = e.enum("format") ?? c.RELATIVE,
                    p = e.element("hover") ?? null,
                    v = e.element("tooltip") ?? null,
                    k = e.url("link") ?? "",
                    [g, x] = (0, n.useState)(!1),
                    [w, b] = (0, n.useState)(0),
                    [y, N] = (0, n.useState)(0),
                    [j, S] = (0, n.useState)(!1),
                    T = (0, a.oG)();
                if (!T || !T.Runtime) return (0, r.jsx)("div", { className: `${t}`, children: "Can't find runtime" });
                const { Runtime: C } = T,
                    E = "https://x.com",
                    D = "https://twitter.com";
                if (h === c.COUNT_DOWN_SECONDS || h === c.COUNT_DOWN_MINUTES || h === c.COUNT_DOWN_HOURS || h === c.COUNT_DOWN_DAYS || h === c.COUNT_DOWN_MONTHS || h === c.COUNT_DOWN_YEARS || h === c.COUNT_DOWN_FULL) return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(f, { format: h, mods: t, time: o }), p && (0, r.jsx)(s.Z, { element: (0, r.jsx)(i.Z, { el: p }), isHovered: g, y: w, x: y })] });
                const $ = (Date.now() - o.getTime()) / 1e3,
                    O = (() => {
                        switch (h) {
                            case c.DATE:
                                return u.format(o);
                            case c.TIME:
                                return _.format(o);
                            case c.PRETTY_DATE:
                                return d.format(o);
                            case c.RELATIVE:
                                return $ < 120 ? "1m" : $ < 3600 ? `${Math.floor($ / 60)}m` : $ < 86400 ? `${Math.floor($ / 3600)}h` : $ < 259200 ? `${Math.floor($ / 3600 / 24)}d` : o.getFullYear() === new Date().getFullYear() ? m.format(o) : u.format(o);
                            default:
                                return "";
                        }
                    })();
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("span", {
                            className: t,
                            onMouseEnter: (e) => {
                                x(!0), b(e.clientY), N(e.clientX);
                            },
                            onMouseMove: (e) => {
                                b(e.clientY), N(e.clientX);
                            },
                            onMouseLeave: () => {
                                x(!1);
                            },
                            onClick: (e) => {
                                if ((S(!j), e.preventDefault(), e.stopPropagation(), k))
                                    if (k.startsWith("twitter://jf/")) {
                                        const e = k.slice(10);
                                        C.history.push(`/i/${e}`);
                                    } else if (k.startsWith(D)) {
                                        const e = k.slice(19);
                                        C.history.push(e);
                                    } else if (k.startsWith(E)) {
                                        const e = k.slice(13);
                                        C.history.push(e);
                                    } else window && (window.location.href = k);
                            },
                            children: O,
                        }),
                        p && (0, r.jsx)(s.Z, { element: (0, r.jsx)(i.Z, { el: p }), isHovered: g, y: w, x: y }),
                        v && (0, r.jsx)(l.Z, { element: (0, r.jsx)(i.Z, { el: v }), isActive: j, y: w, x: y, setIsActive: S }),
                    ],
                });
            }
            const f = ({ format: e, mods: t, time: o }) => {
                const [s, i] = (0, n.useState)(Date.now());
                (0, n.useEffect)(() => {
                    const e = setInterval(() => {
                        i(Date.now());
                    }, 1e3);
                    return () => clearInterval(e);
                }, []);
                const l = o.getTime() - s;
                if (l <= 0) return (0, r.jsx)("div", { className: t, children: "0" });
                const a = Math.floor(l / 1e3),
                    u = Math.floor(a / 60),
                    _ = Math.floor(u / 60),
                    d = Math.floor(_ / 24),
                    m = Math.floor(d / 30),
                    h = Math.floor(d / 365);
                let f = "";
                switch (e) {
                    case c.COUNT_DOWN_SECONDS:
                        f = "" + (a % 60);
                        break;
                    case c.COUNT_DOWN_MINUTES:
                        f = "" + (u % 60);
                        break;
                    case c.COUNT_DOWN_HOURS:
                        f = "" + (_ % 24);
                        break;
                    case c.COUNT_DOWN_DAYS:
                        f = "" + (d % 30);
                        break;
                    case c.COUNT_DOWN_MONTHS:
                        f = "" + (m % 12);
                        break;
                    case c.COUNT_DOWN_YEARS:
                        f = `${h}`;
                        break;
                    case c.COUNT_DOWN_FULL:
                        f = [h > 0 ? `${h}y` : "", d % 365 > 0 ? (d % 365) + "d" : "", _ % 24 > 0 ? (_ % 24) + "h" : "", u % 60 > 0 ? (u % 60) + "m" : "", a % 60 > 0 ? (a % 60) + "s" : ""].join(" ").trim();
                        break;
                    default:
                        f = "" + (a % 60);
                }
                return (0, r.jsx)(r.Fragment, { children: (0, r.jsx)("div", { className: t, children: f }) });
            };
        },
        370294: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(552322),
                n = o(202784);
            function s({ element: e, isActive: t, y: o, x: s, setIsActive: i }) {
                const l = (0, n.useRef)(null);
                (0, n.useEffect)(() => {
                    function e(e) {
                        l.current && !l.current.contains(e.target) && i(!1);
                    }
                    return (
                        t && document.addEventListener("mousedown", e),
                        () => {
                            document.removeEventListener("mousedown", e);
                        }
                    );
                }, [t, i]);
                const a = (0, n.useRef)(null),
                    c = (0, n.useRef)(null);
                return (
                    (0, n.useEffect)(() => {
                        null === a.current && (a.current = o), null === c.current && (c.current = s);
                    }, [o, s]),
                    (0, n.useEffect)(() => {
                        t || ((a.current = null), (c.current = null));
                    }, [t]),
                    t && (0, r.jsx)("div", { ref: l, style: { left: `${c.current ?? s}px`, top: `${a.current ?? o}px`, position: "fixed" }, children: e })
                );
            }
        },
        700916: (e, t, o) => {
            o.d(t, { A: () => n, Z: () => s });
            var r = o(552322);
            function n({ size: e = 12, mods: t = "" }) {
                return (0, r.jsx)("div", { className: `flex w-full items-center justify-center ${t}`, children: (0, r.jsx)("div", { className: "animate-spin motion-reduce:animate-none", style: { width: `${e}px`, height: `${e}px` }, children: (0, r.jsxs)("svg", { height: "100%", viewBox: "0 0 32 32", width: "100%", children: [(0, r.jsx)("circle", { className: "opacity-20 stroke-primary", cx: "16", cy: "16", fill: "none", r: "14", strokeWidth: "4" }), (0, r.jsx)("circle", { className: "stroke-primary", cx: "16", cy: "16", fill: "none", r: "14", strokeDasharray: "80", strokeDashoffset: 60, strokeWidth: "4" })] }) }) });
            }
            function s({ p: e, mods: t }) {
                const o = e.int("size") ?? 12;
                return (0, r.jsx)(n, { size: o, mods: t });
            }
        },
        569251: (e, t, o) => {
            o.d(t, { Z: () => n });
            var r = o(552322);
            function n({ p: e, mods: t }) {
                const o = e.str("t"),
                    n = e.int("numberOfLines");
                return (0, r.jsx)("div", { className: `text-text ${t}`, children: (0, r.jsx)("p", { className: "" + (null != n && n > 0 ? `line-clamp-${n} overflow-hidden` : ""), children: o }) });
            }
        },
        303533: (e, t, o) => {
            o.d(t, { Z: () => u });
            var r = o(552322),
                n = o(202784);
            const s = { RELATIVE: 0, TIME: 1, DATE: 2, PRETTY_DATE: 3, MONTH_DATE_TIME: 4, COUNT_DOWN_SECONDS: 5, COUNT_DOWN_MINUTES: 6, COUNT_DOWN_HOURS: 7, COUNT_DOWN_DAYS: 8, COUNT_DOWN_MONTHS: 9, COUNT_DOWN_YEARS: 10, COUNT_DOWN_FULL: 11 },
                i = new Intl.DateTimeFormat(void 0, { dateStyle: "medium" }),
                l = new Intl.DateTimeFormat(void 0, { timeStyle: "short" }),
                a = new Intl.DateTimeFormat(void 0, { dateStyle: "long" }),
                c = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric" });
            function u({ p: e, mods: t }) {
                const o = e.date("time") ?? new Date(),
                    n = e.enum("format") ?? s.RELATIVE;
                if (n === s.COUNT_DOWN_SECONDS || n === s.COUNT_DOWN_MINUTES || n === s.COUNT_DOWN_HOURS || n === s.COUNT_DOWN_DAYS || n === s.COUNT_DOWN_MONTHS || n === s.COUNT_DOWN_YEARS || n === s.COUNT_DOWN_FULL) return (0, r.jsx)(_, { format: n, mods: t, time: o });
                const u = (Date.now() - o.getTime()) / 1e3,
                    d = (() => {
                        switch (n) {
                            case s.DATE:
                                return i.format(o);
                            case s.TIME:
                                return l.format(o);
                            case s.PRETTY_DATE:
                                return a.format(o);
                            case s.RELATIVE:
                                return u < 120 ? "1m" : u < 3600 ? `${Math.floor(u / 60)}m` : u < 86400 ? `${Math.floor(u / 3600)}h` : u < 259200 ? `${Math.floor(u / 3600 / 24)}d` : o.getFullYear() === new Date().getFullYear() ? c.format(o) : i.format(o);
                            default:
                                return "";
                        }
                    })();
                return (0, r.jsx)("div", { className: t, children: d });
            }
            const _ = ({ format: e, mods: t, time: o }) => {
                const [i, l] = (0, n.useState)(Date.now());
                (0, n.useEffect)(() => {
                    const e = setInterval(() => {
                        l(Date.now());
                    }, 1e3);
                    return () => clearInterval(e);
                }, []);
                const a = o.getTime() - i;
                if (a <= 0) return (0, r.jsx)("div", { className: t, children: "0" });
                const c = Math.floor(a / 1e3),
                    u = Math.floor(c / 60),
                    _ = Math.floor(u / 60),
                    d = Math.floor(_ / 24),
                    m = Math.floor(d / 30),
                    h = Math.floor(d / 365);
                let f = "";
                switch (e) {
                    case s.COUNT_DOWN_SECONDS:
                        f = "" + (c % 60);
                        break;
                    case s.COUNT_DOWN_MINUTES:
                        f = "" + (u % 60);
                        break;
                    case s.COUNT_DOWN_HOURS:
                        f = "" + (_ % 24);
                        break;
                    case s.COUNT_DOWN_DAYS:
                        f = "" + (d % 30);
                        break;
                    case s.COUNT_DOWN_MONTHS:
                        f = "" + (m % 12);
                        break;
                    case s.COUNT_DOWN_YEARS:
                        f = `${h}`;
                        break;
                    case s.COUNT_DOWN_FULL:
                        f = [h > 0 ? `${h}y` : "", d % 365 > 0 ? (d % 365) + "d" : "", _ % 24 > 0 ? (_ % 24) + "h" : "", u % 60 > 0 ? (u % 60) + "m" : "", c % 60 > 0 ? (c % 60) + "s" : ""].join(" ").trim();
                        break;
                    default:
                        f = "" + (c % 60);
                }
                return (0, r.jsx)("div", { className: t, children: f });
            };
        },
        979959: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(801102),
                n = o(113158),
                s = o(326762);
            function i({ el: e, p: t }) {
                const o = t.f32("everySeconds") ?? 1,
                    i = t.action("action") ?? n.Z;
                return (0, s.Z)(i, 1e3 * o), (0, r.Z)(e);
            }
        },
        50494: (e, t, o) => {
            o.d(t, { rh: () => i, wR: () => l });
            var r = o(552322),
                n = o(202784);
            const s = (0, n.createContext)({}),
                i = ({ children: e, isFocused: t, isMuted: o }) => {
                    const [i, l] = (0, n.useState)(0),
                        [a, c] = (0, n.useState)(0),
                        [u, _] = (0, n.useState)(!1),
                        d = (0, n.useCallback)(
                            (e) => {
                                e !== u && _(e);
                            },
                            [u],
                        ),
                        m = { currentTimeMs: i, setCurrentTimeMs: l, durationMs: a, setDurationMs: c, tracksFinished: u, setTracksFinished: d, isFocused: t, isMuted: o };
                    return (0, r.jsx)(s.Provider, { value: m, children: e });
                };
            function l() {
                const e = (0, n.useContext)(s);
                return e || {};
            }
        },
        778581: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(552322),
                n = o(202784);
            function s({ p: e, mods: t }) {
                const o = e.str("src") ?? "",
                    s = (0, n.useRef)(null);
                return (
                    (0, n.useEffect)(() => {
                        const e = s.current;
                        if (!e) return;
                        const t = new IntersectionObserver(
                            (t) => {
                                const o = t[0];
                                o && (o.isIntersecting ? e.play().catch((e) => {}) : e.pause());
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
                    (0, r.jsx)("video", { ref: s, src: o, muted: !0, loop: !0, className: `${t} block w-full` })
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame--ebb6fa7a.8935a34a.js.map

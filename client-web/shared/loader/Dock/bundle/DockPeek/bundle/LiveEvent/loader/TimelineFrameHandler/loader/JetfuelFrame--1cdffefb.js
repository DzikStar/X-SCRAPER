"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame--1cdffefb"],
    {
        969517: (e, t, n) => {
            n.d(t, { Z: () => a });
            var s = n(552322),
                r = n(202784),
                o = n(801102),
                i = n(109195);
            function a({ el: e, p: t, mods: n }) {
                const a = t.element("header"),
                    l = t.element("footer"),
                    c = t.action("on:appear");
                return (
                    (0, r.useEffect)(() => {
                        c && c();
                    }, []),
                    (0, s.jsxs)("div", { className: `w-full ${n}`, children: [a && (0, s.jsx)(i.Z, { el: a }), (0, o.Z)(e), l && (0, s.jsx)(i.Z, { el: l })] })
                );
            }
        },
        547645: (e, t, n) => {
            n.d(t, { Z: () => o });
            var s = n(552322),
                r = n(109195);
            function o({ p: e, el: t, mods: n }) {
                const o = e.int("activePage") ?? 0,
                    i = (function (e) {
                        const t = [];
                        for (const n of e.children) {
                            const s = e.dom.el(n);
                            void 0 !== s && t.push(s);
                        }
                        return t;
                    })(t);
                return i ? (0, s.jsx)("div", { className: n, children: i[o] && (0, s.jsx)(r.Z, { el: i[o] }) }) : null;
            }
        },
        229476: (e, t, n) => {
            n.d(t, { Z: () => u });
            var s = n(552322),
                r = n(202784),
                o = n(801102),
                i = n(109195),
                a = n(608222),
                l = n(644109);
            const c = (e, t) => {
                const n = e.getBoundingClientRect();
                (n.left + n.right) / 2 < window.innerWidth / 2 ? ((t.style.left = "0px"), (t.style.right = "")) : ((t.style.left = ""), (t.style.right = "0px")), n.bottom + t.offsetHeight < document.documentElement.scrollHeight ? ((t.style.top = `${e.offsetHeight}px`), (t.style.bottom = "")) : ((t.style.top = ""), (t.style.bottom = `${e.offsetHeight}px`));
            };
            function u({ el: e, p: t, mods: n }) {
                const u = (0, a.oG)(),
                    d = u?.Runtime;
                if (!u || !d) return (0, s.jsx)("div", { children: "Runtime not available" });
                const m = t.element("popover"),
                    h = (0, r.useRef)(null),
                    f = (0, r.useRef)(null);
                (0, r.useEffect)(() => {
                    const e = () => {
                            h?.current && f?.current && c(h.current, f.current);
                        },
                        t = (0, l.D)(e, 250);
                    return (
                        e(),
                        window.addEventListener("resize", t),
                        () => {
                            window.removeEventListener("resize", t);
                        }
                    );
                }, []);
                const [x, v] = (0, r.useState)(!1);
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        x && (0, s.jsx)("div", { className: "fixed left-0 top-0 w-screen h-screen", onClick: () => d.removeCover() }),
                        (0, s.jsxs)("div", {
                            className: "relative",
                            children: [
                                (0, s.jsx)("button", {
                                    ref: h,
                                    type: "button",
                                    onClick: (e) => {
                                        e.stopPropagation(),
                                            h?.current &&
                                                f?.current &&
                                                (c(h.current, f.current),
                                                v(!x),
                                                d.addCover(() => {
                                                    e.stopPropagation(), v(!1);
                                                }));
                                    },
                                    className: `flex flex-col ${n} w-full h-full`,
                                    children: (0, o.Z)(e),
                                }),
                                m && (0, s.jsx)("div", { ref: f, className: "absolute min-w-max bg-transparent drop-shadow-lg z-10 " + (x ? "" : "invisible"), children: (0, s.jsx)(i.Z, { el: m }) }),
                            ],
                        }),
                    ],
                });
            }
        },
        849957: (e, t, n) => {
            n.d(t, { Z: () => i });
            var s = n(552322),
                r = n(373461),
                o = n(801102);
            function i({ p: e, el: t }) {
                const n = e.str("src") ?? "",
                    i = e.int("autoRefreshSeconds") ?? 0,
                    a = (0, o.Z)(t);
                return (0, s.jsx)(r.Z, { url: n, refreshIntervalSeconds: i, ...(a.length > 0 ? { placeholder: a } : {}) });
            }
        },
        128069: (e, t, n) => {
            n.d(t, { Z: () => i });
            var s = n(552322),
                r = n(202784),
                o = n(608222);
            function i({ p: e, mods: t }) {
                const n = e.richtext("text") ?? [],
                    i = e.int("maxLines"),
                    a = e.bool("showMore"),
                    l = (0, r.useRef)(null),
                    [c, u] = (0, r.useState)(),
                    d = "https://x.com",
                    m = "https://twitter.com",
                    h = (0, o.oG)();
                if (!h || !h.Runtime) return (0, s.jsx)("div", { className: `${t}`, children: "Can't find runtime" });
                const { Runtime: f } = h,
                    x = f.history,
                    v = (e, t, n, s) => {
                        e.preventDefault(), e.stopPropagation();
                        let r = t;
                        if (!r && n && s)
                            switch (n) {
                                case 2:
                                    r = `${m}/hashtag/${s.replace("#", "")}`;
                                    break;
                                case 3:
                                    r = `${m}/${s.replace("@", "")}`;
                                    break;
                                case 4:
                                    r = `${m}/search?q=${encodeURIComponent(s)}`;
                            }
                        if (r)
                            if (r.startsWith("twitter://jf/")) {
                                const e = r.slice(10);
                                x.push(`/i/${e}`);
                            } else if (r.startsWith(m)) {
                                const e = r.slice(19);
                                x.push(e);
                            } else if (r.startsWith(d)) {
                                const e = r.slice(13);
                                x.push(e);
                            } else "undefined" != typeof window && (window.location.href = r);
                    },
                    p = (0, r.useCallback)(() => {
                        l.current && u(l.current.scrollHeight > l.current.clientHeight);
                    }, []);
                (0, r.useEffect)(
                    () => (
                        p(),
                        window.addEventListener("resize", p),
                        () => {
                            window.removeEventListener("resize", p);
                        }
                    ),
                    [p],
                );
                const w = null != i && !1 !== c ? `line-clamp-${i}` : "";
                return (0, s.jsxs)("div", {
                    className: `flex flex-col overflow-hidden ${t}`,
                    children: [
                        (0, s.jsx)("div", { ref: l, className: `flex-col overflow-hidden ${w}`, children: n.map((e, t) => (0 === e[0] ? (0, s.jsx)("span", { children: e[1] }, `${t} - ${e[0]}`) : 1 === e[0] && e[2] ? (0, s.jsx)("span", { className: "text-sky-500 cursor-pointer hover:underline", onClick: (t) => v(t, e[2] || ""), children: e[1] }, `${t} - ${e[0]}`) : 2 === e[0] || 3 === e[0] || 4 === e[0] ? (0, s.jsx)("span", { className: "text-blue-500 cursor-pointer hover:underline", onClick: (t) => v(t, "", e[0], e[1]), children: e[1] }, `${t} - ${e[0]}`) : 5 === e[0] ? (0, s.jsx)("span", { className: "font-bold", children: e[1] }, `${t} - ${e[0]}`) : 6 === e[0] ? (0, s.jsx)("span", { className: "italic", children: e[1] }, `${t} - ${e[0]}`) : 255 === e[0] ? (0, s.jsx)("br", {}, `${t} - ${e[0]}`) : (0, s.jsx)("span", { children: e[1] }, `${t} - ${e[0]}`))) }),
                        c &&
                            a &&
                            (0, s.jsx)("button", {
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
        475122: (e, t, n) => {
            n.d(t, { Z: () => a });
            var s = n(552322),
                r = n(801102),
                o = n(608222);
            const i = { x: 0, facebook: 1, whatsapp: 2, telegram: 3, linkedin: 4, email: 5, messages: 6, dm: 7, os: 8, copy: 9, facebookMessenger: 10, gmail: 11, signal: 12 };
            function a({ p: e, el: t, mods: n }) {
                const a = e.url("url") ?? "",
                    l = e.enum("target"),
                    c = (0, o.oG)();
                if (!c || !c.Runtime) return (0, s.jsx)("div", { className: `${n}`, children: "Can't find runtime" });
                const { Runtime: u } = c;
                function d(e) {
                    try {
                        navigator.share && navigator.share({ url: e });
                    } catch (e) {}
                }
                return (0, s.jsx)("div", {
                    className: `flex cursor-pointer ${n}`,
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
                                    d(a);
                                    break;
                                case i.copy:
                                    navigator.clipboard.writeText(a);
                                    break;
                                default:
                                    d(a);
                            }
                        })(e),
                    children: (0, r.Z)(t),
                });
            }
        },
        771017: (e, t, n) => {
            n.d(t, { Z: () => c });
            var s = n(552322),
                r = n(202784),
                o = n(801102),
                i = n(109195),
                a = n(608222);
            function l({ showModal: e, setShowModal: t, children: n }) {
                const o = (0, r.useRef)(null),
                    i = (0, a.oG)(),
                    [l, c] = (0, r.useState)(!1);
                if (!i) return (0, s.jsx)("div", { children: "Runtime not available" });
                const { Runtime: u } = i;
                if (!u) return (0, s.jsx)("div", { children: "Runtime not available" });
                (0, r.useEffect)(() => {
                    const e = window.matchMedia("(min-width: 1024px)"),
                        t = (e) => {
                            c(e.matches);
                        };
                    return (
                        t(e),
                        e.addEventListener("change", t),
                        () => {
                            e.removeEventListener("change", t);
                        }
                    );
                }, []),
                    (0, r.useEffect)(() => {
                        e && o.current ? (u.addCover(() => o.current?.close()), o.current.showModal()) : !e && o.current?.open && (o.current.close(), u.removeCover());
                    }, [e, u.addCover, u.removeCover]);
                return (0, s.jsx)("dialog", {
                    ref: o,
                    onClose: () => t(!1),
                    onClick: (e) => {
                        e.target === o.current && (e.stopPropagation(), o.current?.close(), t(!1));
                    },
                    style: l ? { width: "95%", height: "65%" } : { minWidth: "100vw", height: "100%" },
                    className: ` min-w-none rounded-[0.2em] border-none p-0 fixed top-1/2 left-1/2 -translate-x-1/2 ${l ? "-translate-y-1/2" : "-translate-y-1/4"} m-0 w-full max-h-full z-[1] bg-transparent backdrop:bg-black/30 motion-safe:animate-fadeIn motion-safe:[&[open]]:animate-zoomIn focus:outline-none max-w-[600px]`,
                    children: (0, s.jsx)("div", { onClick: (e) => e.stopPropagation(), className: "p-4 contents flex-col items-center text-center h-full w-full", children: n }),
                });
            }
            function c({ el: e, p: t, mods: n }) {
                const [a, c] = (0, r.useState)(!1),
                    u = t.element("content");
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)("button", {
                            className: n,
                            onClick: (e) => {
                                e.stopPropagation(), c(!0);
                            },
                            type: "button",
                            children: (0, o.Z)(e),
                        }),
                        u && (0, s.jsx)(l, { showModal: a, setShowModal: c, children: (0, s.jsx)(i.Z, { el: u }) }),
                    ],
                });
            }
        },
        315198: (e, t, n) => {
            n.d(t, { A: () => r, Z: () => o });
            var s = n(552322);
            function r({ size: e = 12, mods: t = "" }) {
                return (0, s.jsx)("div", { className: `flex w-full items-center justify-center ${t}`, children: (0, s.jsx)("div", { className: "animate-spin motion-reduce:animate-none", style: { width: `${e}px`, height: `${e}px` }, children: (0, s.jsxs)("svg", { height: "100%", viewBox: "0 0 32 32", width: "100%", children: [(0, s.jsx)("circle", { className: "opacity-20 stroke-primary", cx: "16", cy: "16", fill: "none", r: "14", strokeWidth: "4" }), (0, s.jsx)("circle", { className: "stroke-primary", cx: "16", cy: "16", fill: "none", r: "14", strokeDasharray: "80", strokeDashoffset: 60, strokeWidth: "4" })] }) }) });
            }
            function o({ p: e, mods: t }) {
                const n = e.int("size") ?? 12;
                return (0, s.jsx)(r, { size: n, mods: t });
            }
        },
        667622: (e, t, n) => {
            n.d(t, { o: () => s });
            const s = 140;
        },
        274653: (e, t, n) => {
            n.d(t, { AH: () => l, rX: () => c });
            var s = n(552322),
                r = n(202784),
                o = n(922332),
                i = n(667622);
            const a = (0, r.createContext)({ navigateStory: () => {}, navigateElement: () => {}, storyPagerState: { stories: [], activeStory: 0 }, initializeStories: () => {}, initializeStoryElements: () => {}, onClose: () => {}, horizontalDragFraction: 0, setHorizontalDragFraction: () => {}, navigateStoryWithTransition: () => {} }),
                l = ({ children: e, onClose: t }) => {
                    const [n, l] = (0, r.useState)({ stories: [], activeStory: 0 }),
                        [c, u] = (0, r.useState)(0),
                        d = (0, r.useCallback)(() => {
                            t?.();
                        }, [t]),
                        m = (0, r.useCallback)((e, t) => {
                            const n = [];
                            for (let s = 0; s < e; s++) n.push({ index: s, elements: [], activeElement: t ?? 0 });
                            l((e) => ({ ...e, stories: n }));
                        }, []),
                        h = (0, r.useCallback)((e, t) => {
                            l((n) => {
                                const s = n.stories[t];
                                if (!s) throw new Error(`Story did not exist with id: ${t}`);
                                const r = [];
                                for (let t = 0; t < e; t++) r.push({ index: t });
                                const o = { ...s, elements: r },
                                    i = [...n.stories];
                                return (i[t] = o), { ...n, stories: i };
                            });
                        }, []),
                        f = (0, r.useCallback)((e) => {
                            l((t) => ({ ...t, activeStory: (0, o.uZ)(t.activeStory + e, 0, t.stories.length - 1) }));
                        }, []),
                        x = (0, r.useCallback)(
                            (e) => {
                                l((t) => {
                                    const n = [...t.stories],
                                        s = t.activeStory,
                                        r = n[s];
                                    if (!r) return t;
                                    const i = r.activeElement + e,
                                        a = r.elements.length - 1;
                                    if (i > a) return f(1), t;
                                    if (i < 0) return f(-1), t;
                                    const l = (0, o.uZ)(i, 0, a);
                                    return (n[s] = { ...r, activeElement: l }), { ...t, stories: n };
                                });
                            },
                            [f],
                        ),
                        v = (0, r.useCallback)(
                            (e) => {
                                const t = n.activeStory + e;
                                t < 0 ||
                                    t > n.stories.length - 1 ||
                                    (u(-1 * e),
                                    setTimeout(() => {
                                        f(e), u(0.001);
                                    }, i.o));
                            },
                            [f, n.activeStory, n.stories.length],
                        ),
                        p = { navigateStory: f, navigateElement: x, storyPagerState: n, initializeStories: m, initializeStoryElements: h, onClose: d, horizontalDragFraction: c, setHorizontalDragFraction: u, navigateStoryWithTransition: v };
                    return (0, s.jsx)(a.Provider, { value: p, children: e });
                };
            function c() {
                const e = (0, r.useContext)(a);
                if (void 0 === e) throw new Error("useStoryPagerContext was used outside of its provider StoryPagerContextProvider");
                return e;
            }
        },
        70477: (e, t, n) => {
            n.d(t, { Z: () => u });
            var s = n(552322),
                r = n(202784),
                o = n(801102),
                i = n(244448),
                a = n(922332),
                l = n(274653);
            const c = ({ isActive: e, isComplete: t }) => {
                    const { currentTimeMs: n, durationMs: r } = (0, i.wR)();
                    let o = 0;
                    if (t) o = 100;
                    else if (e) {
                        const e = (n || 0) / (r || 1);
                        o = 100 * Math.max(0, Math.min(1, e));
                    }
                    const a = { width: `${o}%` };
                    return (0, s.jsx)("div", { className: "rounded-md h-1 flex-grow bg-gray-500 overflow-hidden", children: (0, s.jsx)("div", { className: "h-1 bg-white w-0", style: a }) });
                },
                u = ({ el: e, p: t }) => {
                    const n = t.int("index") ?? 0,
                        u = (0, o.Z)(e),
                        { initializeStoryElements: d, navigateElement: m, navigateStoryWithTransition: h, storyPagerState: f } = (0, l.rX)(),
                        x = f.stories[n],
                        { setTracksFinished: v, tracksFinished: p } = (0, i.wR)();
                    (0, r.useEffect)(() => {
                        if (p) {
                            const e = f.stories[f.activeStory];
                            if (!e) return;
                            e.activeElement === e.elements.length - 1 ? h(1) : m(1), v?.(!1);
                        }
                    }, [m, h, v, f.activeStory, f.stories, p]),
                        (0, a.qR)(() => {
                            d(u?.length || 0, n);
                        });
                    const w = x?.activeElement || 0;
                    return u && x ? (0, s.jsxs)("div", { className: "h-full w-full", children: [(0, s.jsx)("div", { className: "z-[101] absolute top-0 h-8 flex flex-row gap-1 items-center justify-center py-2 px-4 w-full", children: u.map((e, t) => (0, s.jsx)(c, { isActive: t === w, isComplete: t < w }, t)) }), u[w]] }) : null;
                };
        },
        31450: (e, t, n) => {
            n.d(t, { Z: () => o });
            var s = n(552322),
                r = n(801102);
            function o({ el: e, mods: t }) {
                return (0, s.jsx)("div", { className: `flex w-full h-full ${t}`, children: (0, r.Z)(e) });
            }
        },
        374417: (e, t, n) => {
            n.d(t, { Z: () => w });
            var s = n(552322),
                r = n(202784),
                o = n(244448),
                i = n(458872),
                a = n(667542),
                l = n(516718),
                c = n(4700),
                u = n(922332),
                d = n(667622),
                m = n(274653),
                h = n(801102);
            const f = () => "ontouchstart" in window || navigator.maxTouchPoints > 0,
                x = { medium: 768, large: 1024, xLarge: 1280 },
                v = ({ icon: e, onClick: t, onPointerDown: n, className: r = "", ...o }) =>
                    (0, s.jsx)("button", {
                        className: r,
                        onClick: (e) => {
                            e.stopPropagation(), t(e);
                        },
                        onPointerDown: (e) => {
                            e.stopPropagation(), n(e.nativeEvent);
                        },
                        onPointerMove: (e) => {
                            e.stopPropagation();
                        },
                        onPointerUp: (e) => {
                            e.stopPropagation();
                        },
                        type: "button",
                        ...o,
                        children: e,
                    }),
                p = ({ children: e, initialIndex: t }) => {
                    const { horizontalDragFraction: n, initializeStories: h, navigateElement: p, navigateStoryWithTransition: w, setHorizontalDragFraction: g, storyPagerState: N } = (0, m.rX)(),
                        y = f(),
                        b = (0, r.useRef)(null),
                        j = N.stories?.[N.activeStory],
                        S = b.current?.getBoundingClientRect(),
                        C = S?.width || 0,
                        k = S?.left || 0,
                        [T, D] = (0, r.useState)(!1),
                        [E, $, O] = ((e) => {
                            const [t, n] = (0, r.useState)("undefined" != typeof window ? window.innerWidth : 0);
                            return (
                                (0, r.useEffect)(() => {
                                    const e = () => n(window.innerWidth);
                                    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
                                }, []),
                                (0, r.useMemo)(() => e({ windowWidth: t }), [t, e])
                            );
                        })(({ windowWidth: e }) => [e > x.medium, e > x.large, e > x.xLarge]),
                        Z = !E,
                        _ = (90 * n).toFixed(1),
                        M = (100 * n).toFixed(1),
                        R = 0 === n || 1 === n || -1 === n ? `transform ${d.o}ms ease-in` : "none",
                        P = (0, r.useMemo)(() => ({ transition: R, transform: `translateZ(-${C / 2}px) rotate3d(0,1,0,${_}deg)` }), [_, R, C]),
                        W = (0, r.useMemo)(() => ({ transition: R, transform: `translateX(${M}%)` }), [R, M]),
                        U = (0, r.useMemo)(() => (Z ? { transform: `translateZ(${C / 2}px)` } : { transform: "translateX(0%)" }), [Z, C]),
                        z = (0, r.useMemo)(() => (Z ? { transform: `rotate3d(0,1,0,-90deg) translateZ(${C / 2}px)` } : { transform: "translateX(-100%)" }), [Z, C]),
                        F = (0, r.useMemo)(() => (Z ? { transform: `rotate3d(0,1,0,90deg) translateZ(${C / 2}px)` } : { transform: "translateX(100%)" }), [Z, C]),
                        I = (0, r.useCallback)(
                            (e) => {
                                const t = 0 === N.activeStory ? 0.1 : 1,
                                    n = N.activeStory === N.stories.length - 1 ? -0.1 : -1,
                                    s = (0, u.uZ)(e, n, t);
                                g(s);
                            },
                            [g, N.activeStory, N.stories.length],
                        ),
                        L = (0, r.useCallback)(
                            (e) => {
                                const t = N.stories[N.activeStory];
                                t && (e.clientX - k > C / 2 ? (t.activeElement === t.elements.length - 1 ? w(1) : p(1)) : 0 === t.activeElement ? w(-1) : p(-1));
                            },
                            [k, C, p, w, N.activeStory, N.stories],
                        ),
                        [A, H, Y] = (0, u.Nc)({ direction: "horizontal", swipeItemLength: C, handleFraction: I, handleTap: L, handleSwipe: w }),
                        X = (0, r.useCallback)(
                            (e) => {
                                b.current?.setPointerCapture(e.pointerId), A(e.nativeEvent);
                            },
                            [A],
                        ),
                        G = (0, r.useCallback)(() => {
                            D(!T);
                        }, [T]),
                        q = (0, r.useCallback)((e) => {
                            e.stopPropagation();
                        }, []);
                    (0, u.qR)(() => {
                        N.stories.length || h(e?.length || 0, t ?? 0);
                    });
                    let B = "";
                    E ? (B = "h-[600px] max-h-[600px] min-h-[600px]") : $ ? (B = "h-[680px] max-h-[680px] min-h-[680px]") : O && (B = "h-[800px] max-h-[800px] min-h-[800px]");
                    const V = (0, r.useMemo)(() => (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(v, { icon: (0, s.jsx)(i.Z, { style: { color: "white" } }), onClick: L, onPointerDown: q, className: "absolute top-1/2 left-4 -translate-y-1/2 bg-black/70 w-8 h-8 z-50 p-2 rounded-full" }), (0, s.jsx)(v, { icon: (0, s.jsx)(a.Z, { style: { color: "white" } }), onClick: L, onPointerDown: q, className: "absolute top-1/2 right-4 -translate-y-1/2 bg-black/70 w-8 h-8 z-50 p-2 rounded-full" })] }), [q, L]),
                        Q = (0, r.useMemo)(() => (0, s.jsx)(v, { icon: T ? (0, s.jsx)(l.Z, {}) : (0, s.jsx)(c.Z, {}), onClick: G, onPointerDown: q, className: "absolute bottom-4 right-4 bg-black/70 w-8 h-8 z-50 p-2 rounded-full" }), [G, q, T]);
                    if (e && j) {
                        const t = e[N.activeStory],
                            n = e[N.activeStory - 1],
                            r = e[N.activeStory + 1];
                        return (0, s.jsx)("div", { onPointerDown: X, onPointerMove: (e) => H(e.nativeEvent), onPointerUp: (e) => Y(e.nativeEvent), ref: b, className: `\n          h-full w-full touch-none overflow-hidden select-none\n          ${E ? "w-full flex flex-col justify-center bg-black" : ""}\n          ${B}\n        `, children: (0, s.jsx)("div", { className: Z ? "h-full w-full" : "", style: Z ? { perspective: "800px" } : {}, children: (0, s.jsxs)("div", { className: "h-full w-full flex", style: { transformStyle: "preserve-3d", ...(Z ? P : W) }, children: [(0, s.jsxs)("div", { className: `absolute h-full w-full z-50 ${B}`, style: z, children: [n && !y && V, n && Q, (0, s.jsx)(o.rh, { isFocused: !1, children: n })] }), (0, s.jsxs)("div", { className: `h-full w-full z-50 ${B}`, style: U, children: [!y && V, Q, (0, s.jsx)(o.rh, { isFocused: !0, isMuted: T, children: t })] }), (0, s.jsxs)("div", { className: `absolute h-full w-full z-50 ${B}`, style: F, children: [r && !y && V, r && Q, (0, s.jsx)(o.rh, { isFocused: !1, children: r })] })] }) }) });
                    }
                    return null;
                },
                w = ({ el: e, p: t }) => {
                    const n = (0, h.Z)(e),
                        r = t.int("initialIndex") ?? 0;
                    return (0, s.jsx)(m.AH, { children: (0, s.jsx)("div", { className: "h-full w-full flex justify-center items-center", children: (0, s.jsx)(p, { children: n, initialIndex: r }) }) });
                };
        },
        922332: (e, t, n) => {
            n.d(t, { Nc: () => i, qR: () => o, uZ: () => r });
            var s = n(202784);
            function r(e, t, n) {
                return Math.max(Math.min(e, Number.isNaN(n) ? 0 : n), Number.isNaN(t) ? 0 : t);
            }
            function o(e) {
                (0, s.useEffect)(e, []);
            }
            const i = ({ direction: e, handleFraction: t, handleSwipe: n, handleTap: r, swipeItemLength: o, swipeDistanceThreshold: i = o / 20, swipeTimeThreshold: a = 150 }) => {
                const l = (0, s.useRef)(0),
                    c = (0, s.useRef)(0),
                    u = (0, s.useRef)(0),
                    d = (0, s.useCallback)((t) => ("horizontal" === e ? t.clientX : t.clientY), [e]);
                return [
                    (0, s.useCallback)(
                        (e) => {
                            l.current || ((l.current = Date.now()), (c.current = d(e)));
                        },
                        [d],
                    ),
                    (0, s.useCallback)(
                        (e) => {
                            if (!l.current) return;
                            u.current = d(e);
                            const n = (u.current - c.current) / o;
                            t?.(n);
                        },
                        [d, t, o],
                    ),
                    (0, s.useCallback)(
                        (e) => {
                            if (((u.current = d(e)), !l.current)) return;
                            const s = Date.now() - l.current > a,
                                o = u.current - c.current,
                                m = Math.abs(o) > i;
                            t?.(0), (l.current = 0), s || m ? n?.(o < 0 ? 1 : -1) : r?.(e);
                        },
                        [d, t, n, r, i, a],
                    ),
                    !!l.current,
                ];
            };
        },
        88214: (e, t, n) => {
            n.d(t, { Z: () => r });
            var s = n(552322);
            function r({ p: e, mods: t }) {
                const n = e.str("t"),
                    r = e.int("numberOfLines");
                return (0, s.jsx)("div", { className: `text-text ${t}`, children: (0, s.jsx)("p", { className: "" + (null != r && r > 0 ? `line-clamp-${r} overflow-hidden` : ""), children: n }) });
            }
        },
        272403: (e, t, n) => {
            n.d(t, { Z: () => u });
            var s = n(552322),
                r = n(202784);
            const o = { RELATIVE: 0, TIME: 1, DATE: 2, PRETTY_DATE: 3, MONTH_DATE_TIME: 4, COUNT_DOWN_SECONDS: 5, COUNT_DOWN_MINUTES: 6, COUNT_DOWN_HOURS: 7, COUNT_DOWN_DAYS: 8, COUNT_DOWN_MONTHS: 9, COUNT_DOWN_YEARS: 10, COUNT_DOWN_FULL: 11 },
                i = new Intl.DateTimeFormat(void 0, { dateStyle: "medium" }),
                a = new Intl.DateTimeFormat(void 0, { timeStyle: "short" }),
                l = new Intl.DateTimeFormat(void 0, { dateStyle: "long" }),
                c = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric" });
            function u({ p: e, mods: t }) {
                const n = e.date("time") ?? new Date(),
                    r = e.enum("format") ?? o.RELATIVE;
                if (r === o.COUNT_DOWN_SECONDS || r === o.COUNT_DOWN_MINUTES || r === o.COUNT_DOWN_HOURS || r === o.COUNT_DOWN_DAYS || r === o.COUNT_DOWN_MONTHS || r === o.COUNT_DOWN_YEARS || r === o.COUNT_DOWN_FULL) return (0, s.jsx)(d, { format: r, mods: t, time: n });
                const u = (Date.now() - n.getTime()) / 1e3,
                    m = (() => {
                        switch (r) {
                            case o.DATE:
                                return i.format(n);
                            case o.TIME:
                                return a.format(n);
                            case o.PRETTY_DATE:
                                return l.format(n);
                            case o.RELATIVE:
                                return u < 120 ? "1m" : u < 3600 ? `${Math.floor(u / 60)}m` : u < 86400 ? `${Math.floor(u / 3600)}h` : u < 259200 ? `${Math.floor(u / 3600 / 24)}d` : n.getFullYear() === new Date().getFullYear() ? c.format(n) : i.format(n);
                            default:
                                return "";
                        }
                    })();
                return (0, s.jsx)("div", { className: t, children: m });
            }
            const d = ({ format: e, mods: t, time: n }) => {
                const [i, a] = (0, r.useState)(Date.now());
                (0, r.useEffect)(() => {
                    const e = setInterval(() => {
                        a(Date.now());
                    }, 1e3);
                    return () => clearInterval(e);
                }, []);
                const l = n.getTime() - i;
                if (l <= 0) return (0, s.jsx)("div", { className: t, children: "0" });
                const c = Math.floor(l / 1e3),
                    u = Math.floor(c / 60),
                    d = Math.floor(u / 60),
                    m = Math.floor(d / 24),
                    h = Math.floor(m / 30),
                    f = Math.floor(m / 365);
                let x = "";
                switch (e) {
                    case o.COUNT_DOWN_SECONDS:
                        x = "" + (c % 60);
                        break;
                    case o.COUNT_DOWN_MINUTES:
                        x = "" + (u % 60);
                        break;
                    case o.COUNT_DOWN_HOURS:
                        x = "" + (d % 24);
                        break;
                    case o.COUNT_DOWN_DAYS:
                        x = "" + (m % 30);
                        break;
                    case o.COUNT_DOWN_MONTHS:
                        x = "" + (h % 12);
                        break;
                    case o.COUNT_DOWN_YEARS:
                        x = `${f}`;
                        break;
                    case o.COUNT_DOWN_FULL:
                        x = [f > 0 ? `${f}y` : "", m % 365 > 0 ? (m % 365) + "d" : "", d % 24 > 0 ? (d % 24) + "h" : "", u % 60 > 0 ? (u % 60) + "m" : "", c % 60 > 0 ? (c % 60) + "s" : ""].join(" ").trim();
                        break;
                    default:
                        x = "" + (c % 60);
                }
                return (0, s.jsx)("div", { className: t, children: x });
            };
        },
        64614: (e, t, n) => {
            n.d(t, { Z: () => i });
            var s = n(801102),
                r = n(113158),
                o = n(326762);
            function i({ el: e, p: t }) {
                const n = t.f32("everySeconds") ?? 1,
                    i = t.action("action") ?? r.Z;
                return (0, o.Z)(i, 1e3 * n), (0, s.Z)(e);
            }
        },
        988678: (e, t, n) => {
            n.d(t, { Z: () => a });
            var s = n(552322),
                r = n(202784),
                o = n(109195),
                i = n(608222);
            function a() {
                const [e, t] = (0, r.useState)([]),
                    n = (0, i.oG)();
                if (!n || !n.Runtime) return;
                const { Runtime: a } = n,
                    l = () => {
                        t((e) => e.slice(1));
                    };
                return (
                    a.setAddToToastQueue((e) => {
                        t((t) => [...t, e]),
                            setTimeout(() => {
                                l();
                            }, 4e3);
                    }),
                    a.setRemoveFromToastQueue(l),
                    (0, s.jsxs)("div", { style: { position: "fixed", bottom: "1rem", marginTop: "1rem", left: "50%", transform: "translateX(-50%)", zIndex: 1e3, display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 1, animation: "slideUp 0.3s ease-out" }, children: [e.slice(-3).map((e, t) => (0, s.jsx)("div", { style: { animation: "fadeIn 0.3s ease-in", marginBottom: "0.5rem" }, children: (0, s.jsx)(o.Z, { el: e }) }, `${e.id}-${t}`)), (0, s.jsx)("style", { children: "\n          @keyframes slideUp {\n            from {\n              bottom: 0;\n              opacity: 0;\n            }\n            to {\n              bottom: 1rem;\n              opacity: 1;\n            }\n          }\n          @keyframes fadeIn {\n            from {\n              opacity: 0;\n            }\n            to {\n              opacity: 1;\n            }\n          }\n          @keyframes slideDown {\n            from {\n              bottom: 1rem;\n              opacity: 1;\n            }\n            to {\n              bottom: 0;\n              opacity: 0;\n            }\n          }\n          @keyframes fadeOut {\n            from {\n              opacity: 1;\n            }\n            to {\n              opacity: 0;\n            }\n          }\n        " })] })
                );
            }
        },
        26296: (e, t, n) => {
            n.d(t, { Z: () => o });
            var s = n(552322),
                r = n(202784);
            function o({ p: e, mods: t }) {
                const n = e.str("src") ?? "",
                    o = (0, r.useRef)(null);
                return (
                    (0, r.useEffect)(() => {
                        const e = o.current;
                        if (!e) return;
                        const t = new IntersectionObserver(
                            (t) => {
                                const n = t[0];
                                n && (n.isIntersecting ? e.play().catch((e) => {}) : e.pause());
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
                    (0, s.jsx)("video", { ref: o, src: n, muted: !0, loop: !0, className: `${t} block w-full` })
                );
            }
        },
        50494: (e, t, n) => {
            n.d(t, { rh: () => i, wR: () => a });
            var s = n(552322),
                r = n(202784);
            const o = (0, r.createContext)({}),
                i = ({ children: e, isFocused: t, isMuted: n }) => {
                    const [i, a] = (0, r.useState)(0),
                        [l, c] = (0, r.useState)(0),
                        [u, d] = (0, r.useState)(!1),
                        m = (0, r.useCallback)(
                            (e) => {
                                e !== u && d(e);
                            },
                            [u],
                        ),
                        h = { currentTimeMs: i, setCurrentTimeMs: a, durationMs: l, setDurationMs: c, tracksFinished: u, setTracksFinished: m, isFocused: t, isMuted: n };
                    return (0, s.jsx)(o.Provider, { value: h, children: e });
                };
            function a() {
                const e = (0, r.useContext)(o);
                return e || {};
            }
        },
        472036: (e, t, n) => {
            n.d(t, { Z: () => o });
            var s = n(552322),
                r = n(801102);
            function o({ el: e, mods: t }) {
                return (0, s.jsx)("div", { className: `flex ${t}`, children: (0, r.Z)(e) });
            }
        },
        400441: (e, t, n) => {
            n.d(t, { Z: () => o });
            var s = n(552322),
                r = n(801102);
            function o({ el: e, mods: t }) {
                return (0, s.jsx)("div", { className: `flex flex-col ${t}`, children: (0, r.Z)(e) });
            }
        },
        696281: (e, t, n) => {
            n.d(t, { Z: () => a });
            var s = n(552322),
                r = n(801102),
                o = n(109195);
            function i(e, t) {
                return 0 === t ? (0, s.jsx)(o.Z, { el: e }, t) : (0, s.jsx)("div", { className: "absolute inset-0 w-full h-full", children: (0, s.jsx)(o.Z, { el: e }) }, t);
            }
            function a({ el: e, mods: t }) {
                return (0, s.jsx)("div", { className: `relative ${t}`, children: (0, r.Z)(e, i) });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame--1cdffefb.831eef3a.js.map

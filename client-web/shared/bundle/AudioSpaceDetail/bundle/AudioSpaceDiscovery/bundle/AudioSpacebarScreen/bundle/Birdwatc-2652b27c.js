"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"],
    {
        969517: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(552322),
                s = n(202784),
                a = n(801102),
                o = n(109195);
            function i({ el: e, p: t, mods: n }) {
                const i = t.element("header"),
                    c = t.element("footer"),
                    l = t.action("on:appear");
                return (
                    (0, s.useEffect)(() => {
                        l && l();
                    }, []),
                    (0, r.jsxs)("div", { className: `w-full ${n}`, children: [i && (0, r.jsx)(o.Z, { el: i }), (0, a.Z)(e), c && (0, r.jsx)(o.Z, { el: c })] })
                );
            }
        },
        547645: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(552322),
                s = n(109195);
            function a({ p: e, el: t, mods: n }) {
                const a = e.int("activePage") ?? 0,
                    o = (function (e) {
                        return e.children.map((t) => e.dom.el(t));
                    })(t);
                return o ? (0, r.jsx)("div", { className: n, children: (0, r.jsx)(s.Z, { el: o[a] }) }) : null;
            }
        },
        229476: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(552322),
                s = n(437712),
                a = n(801102),
                o = n(109195);
            function i({ el: e, p: t, mods: n }) {
                const i = t.element("popover");
                return (0, r.jsx)(s.J, {
                    trigger: (0, r.jsx)("button", {
                        type: "button",
                        onClick: (e) => {
                            e.stopPropagation();
                        },
                        className: `flex flex-col  ${n}`,
                        children: (0, a.Z)(e),
                    }),
                    children: (0, r.jsx)("div", { children: i && (0, r.jsx)(o.Z, { el: i }) }),
                });
            }
        },
        849957: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(552322),
                s = n(373461);
            function a({ p: e }) {
                const t = e.str("src") ?? "";
                return (0, r.jsx)(s.Z, { url: t });
            }
        },
        128069: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(552322),
                s = n(202784),
                a = n(608222);
            function o({ p: e, mods: t }) {
                const n = e.richtext("text") ?? [],
                    o = e.int("maxLines"),
                    i = e.bool("showMore"),
                    c = (0, s.useRef)(null),
                    [l, d] = (0, s.useState)(),
                    u = "https://x.com",
                    m = "https://twitter.com",
                    f = (0, a.o)();
                if (!f || !f.Runtime) return (0, r.jsx)("div", { className: `${t}`, children: "Can't find runtime" });
                const { Runtime: h } = f,
                    p = h.history,
                    x = (e, t, n, r) => {
                        e.preventDefault(), e.stopPropagation();
                        let s = t;
                        if (!s && n && r)
                            switch (n) {
                                case 2:
                                    s = `${m}/hashtag/${r.replace("#", "")}`;
                                    break;
                                case 3:
                                    s = `${m}/${r.replace("@", "")}`;
                                    break;
                                case 4:
                                    s = `${m}/search?q=${encodeURIComponent(r)}`;
                            }
                        if (s)
                            if (s.startsWith("twitter://jf/")) {
                                const e = s.slice(10);
                                p.push(`/i/${e}`);
                            } else if (s.startsWith(m)) {
                                const e = s.slice(19);
                                p.push(e);
                            } else if (s.startsWith(u)) {
                                const e = s.slice(13);
                                p.push(e);
                            } else "undefined" != typeof window && (window.location.href = s);
                    },
                    v = (0, s.useCallback)(() => {
                        c.current && d(c.current.scrollHeight > c.current.clientHeight);
                    }, []);
                (0, s.useEffect)(
                    () => (
                        v(),
                        window.addEventListener("resize", v),
                        () => {
                            window.removeEventListener("resize", v);
                        }
                    ),
                    [v],
                );
                const N = null != o && !1 !== l ? `line-clamp-${o}` : "";
                return (0, r.jsxs)("div", {
                    className: `flex flex-col overflow-hidden ${t}`,
                    children: [
                        (0, r.jsx)("div", { ref: c, className: `flex-col overflow-hidden ${N}`, children: n.map((e, t) => (0 === e[0] ? (0, r.jsx)("span", { children: e[1] }, `${t} - ${e[0]}`) : 1 === e[0] && e[2] ? (0, r.jsx)("span", { className: "text-sky-500 cursor-pointer hover:underline", onClick: (t) => x(t, e[2] || ""), children: e[1] }, `${t} - ${e[0]}`) : 2 === e[0] || 3 === e[0] || 4 === e[0] ? (0, r.jsx)("span", { className: "text-blue-500 cursor-pointer hover:underline", onClick: (t) => x(t, "", e[0], e[1]), children: e[1] }, `${t} - ${e[0]}`) : 5 === e[0] ? (0, r.jsx)("span", { className: "font-bold", children: e[1] }, `${t} - ${e[0]}`) : 6 === e[0] ? (0, r.jsx)("span", { className: "italic", children: e[1] }, `${t} - ${e[0]}`) : 255 === e[0] ? (0, r.jsx)("br", {}, `${t} - ${e[0]}`) : (0, r.jsx)("span", { children: e[1] }, `${t} - ${e[0]}`))) }),
                        l &&
                            i &&
                            (0, r.jsx)("button", {
                                type: "button",
                                className: "text-[rgb(29,155,240)] hover:underline w-fit",
                                onClick: () => {
                                    d(!1);
                                },
                                children: "Show more",
                            }),
                    ],
                });
            }
        },
        475122: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(552322),
                s = n(801102),
                a = n(608222);
            const o = { x: 0, facebook: 1, whatsapp: 2, telegram: 3, linkedin: 4, email: 5, messages: 6, dm: 7, os: 8, copy: 9, facebookMessenger: 10, gmail: 11, signal: 12 };
            function i({ p: e, el: t, mods: n }) {
                const i = e.url("url") ?? "",
                    c = e.enum("target"),
                    l = (0, a.o)();
                if (!l || !l.Runtime) return (0, r.jsx)("div", { className: `${n}`, children: "Can't find runtime" });
                const { Runtime: d } = l;
                function u(e) {
                    try {
                        navigator.share && navigator.share({ url: e });
                    } catch (e) {}
                }
                return (0, r.jsx)("div", {
                    className: `flex cursor-pointer ${n}`,
                    onClick: (e) =>
                        ((e) => {
                            switch ((e.preventDefault(), e.stopPropagation(), c)) {
                                case o.x:
                                    d.history.push({ state: { text: i }, pathname: "/compose/post" });
                                    break;
                                case o.dm:
                                    d.history.push({ state: { text: i }, pathname: "/messages/compose" });
                                    break;
                                case o.os:
                                    u(i);
                                    break;
                                case o.copy:
                                    navigator.clipboard.writeText(i);
                                    break;
                                default:
                                    u(i);
                            }
                        })(e),
                    children: (0, s.Z)(t),
                });
            }
        },
        771017: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(552322),
                s = n(202784),
                a = n(801102),
                o = n(109195),
                i = n(608222);
            function c({ showModal: e, setShowModal: t, children: n }) {
                const a = (0, s.useRef)(null),
                    o = (0, i.o)();
                if (!o) return (0, r.jsx)("div", { children: "Runtime not available" });
                const { Runtime: c } = o;
                (0, s.useEffect)(() => {
                    e && a.current ? (c.addCover(a.current), a.current.showModal()) : !e && a.current?.open && (a.current.close(), c.removeCover());
                }, [e, c.addCover, c.removeCover]);
                return (0, r.jsx)("dialog", {
                    ref: a,
                    onClose: () => t(!1),
                    onClick: (e) => {
                        e.target === a.current && (e.stopPropagation(), a.current?.close(), t(!1));
                    },
                    style: { width: "95%", height: "65%" },
                    className: " min-w-none rounded-[0.2em] border-none p-0 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-0 w-full max-h-full z-[1] bg-transparent backdrop:bg-black/30 motion-safe:animate-fadeIn motion-safe:[&[open]]:animate-zoomIn focus:outline-none max-w-[600px]",
                    children: (0, r.jsx)("div", { onClick: (e) => e.stopPropagation(), className: "p-4 contents flex-col items-center text-center h-full w-full", children: n }),
                });
            }
            function l({ el: e, p: t, mods: n }) {
                const [i, l] = (0, s.useState)(!1),
                    d = t.element("content");
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("button", {
                            className: n,
                            onClick: (e) => {
                                e.stopPropagation(), l(!0);
                            },
                            type: "button",
                            children: (0, a.Z)(e),
                        }),
                        d && (0, r.jsx)(c, { showModal: i, setShowModal: l, children: (0, r.jsx)(o.Z, { el: d }) }),
                    ],
                });
            }
        },
        315198: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(552322);
            function s({ p: e, mods: t }) {
                const n = e.int("size") ?? 12;
                return (0, r.jsx)("div", { className: `flex w-full items-center justify-center ${t}`, children: (0, r.jsx)("div", { className: "animate-spin motion-reduce:animate-none", style: { width: `${n}px`, height: `${n}px` }, children: (0, r.jsxs)("svg", { height: "100%", viewBox: "0 0 32 32", width: "100%", children: [(0, r.jsx)("circle", { className: "opacity-20 stroke-primary", cx: "16", cy: "16", fill: "none", r: "14", strokeWidth: "4" }), (0, r.jsx)("circle", { className: "stroke-primary", cx: "16", cy: "16", fill: "none", r: "14", strokeDasharray: "80", strokeDashoffset: 60, strokeWidth: "4" })] }) }) });
            }
        },
        139466: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(552322),
                s = n(801102),
                a = n(608222);
            function o({ el: e, mods: t, p: n }) {
                const o = (0, a.o)();
                if (!o || !o.Runtime) return (0, r.jsx)("div", { className: `${t}`, children: "Can't find runtime" });
                const { Runtime: i } = o,
                    c = i.getComponentOverride()[-22153];
                if (!c) return (0, r.jsx)("div", { className: `${t}`, children: "Can't find Story" });
                const l = (0, s.Z)(e);
                return (0, r.jsx)(c, { p: n, children: l });
            }
        },
        353151: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(552322),
                s = n(801102);
            function a({ el: e, mods: t }) {
                return (0, r.jsx)("div", { className: `flex w-full h-full ${t}`, children: (0, s.Z)(e) });
            }
        },
        314672: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(552322),
                s = n(801102),
                a = n(608222);
            function o({ el: e, mods: t }) {
                const n = (0, a.o)();
                if (!n || !n.Runtime) return (0, r.jsx)("div", { className: `${t}`, children: "Can't find runtime" });
                const { Runtime: o } = n,
                    i = o.getComponentOverride()[24045];
                if (!i) return (0, r.jsx)("div", { className: `${t}`, children: "Can't find StoryPager" });
                const c = (0, s.Z)(e);
                return (0, r.jsx)(i, { children: c });
            }
        },
        88214: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(552322);
            function s({ p: e, mods: t }) {
                const n = e.str("t"),
                    s = e.int("numberOfLines");
                return (0, r.jsx)("div", { className: `text-text ${t}`, children: (0, r.jsx)("span", { className: "" + (null != s && s > 0 ? `line-clamp-${s} overflow-hidden` : ""), children: n }) });
            }
        },
        272403: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(552322),
                s = n(202784);
            const a = { RELATIVE: 0, TIME: 1, DATE: 2, PRETTY_DATE: 3, MONTH_DATE_TIME: 4, COUNT_DOWN_SECONDS: 5, COUNT_DOWN_MINUTES: 6, COUNT_DOWN_HOURS: 7, COUNT_DOWN_DAYS: 8, COUNT_DOWN_MONTHS: 9, COUNT_DOWN_YEARS: 10, COUNT_DOWN_FULL: 11 },
                o = new Intl.DateTimeFormat(void 0, { dateStyle: "medium" }),
                i = new Intl.DateTimeFormat(void 0, { timeStyle: "short" }),
                c = new Intl.DateTimeFormat(void 0, { dateStyle: "long" }),
                l = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric" });
            function d({ p: e, mods: t }) {
                const n = e.date("time") ?? new Date(),
                    s = e.enum("format") ?? a.RELATIVE;
                if (s === a.COUNT_DOWN_SECONDS || s === a.COUNT_DOWN_MINUTES || s === a.COUNT_DOWN_HOURS || s === a.COUNT_DOWN_DAYS || s === a.COUNT_DOWN_MONTHS || s === a.COUNT_DOWN_YEARS || s === a.COUNT_DOWN_FULL) return (0, r.jsx)(u, { format: s, mods: t, time: n });
                const d = (Date.now() - n.getTime()) / 1e3,
                    m = (() => {
                        switch (s) {
                            case a.DATE:
                                return o.format(n);
                            case a.TIME:
                                return i.format(n);
                            case a.PRETTY_DATE:
                                return c.format(n);
                            case a.RELATIVE:
                                return d < 120 ? "1m" : d < 3600 ? `${Math.floor(d / 60)}m` : d < 86400 ? `${Math.floor(d / 3600)}h` : d < 259200 ? `${Math.floor(d / 3600 / 24)}d` : n.getFullYear() === new Date().getFullYear() ? l.format(n) : o.format(n);
                            default:
                                return "";
                        }
                    })();
                return (0, r.jsx)("div", { className: t, children: m });
            }
            const u = ({ format: e, mods: t, time: n }) => {
                const [o, i] = (0, s.useState)(Date.now());
                (0, s.useEffect)(() => {
                    const e = setInterval(() => {
                        i(Date.now());
                    }, 1e3);
                    return () => clearInterval(e);
                }, []);
                const c = n.getTime() - o;
                if (c <= 0) return (0, r.jsx)("div", { className: t, children: "0" });
                const l = Math.floor(c / 1e3),
                    d = Math.floor(l / 60),
                    u = Math.floor(d / 60),
                    m = Math.floor(u / 24),
                    f = Math.floor(m / 30),
                    h = Math.floor(m / 365);
                let p = "";
                switch (e) {
                    case a.COUNT_DOWN_SECONDS:
                        p = "" + (l % 60);
                        break;
                    case a.COUNT_DOWN_MINUTES:
                        p = "" + (d % 60);
                        break;
                    case a.COUNT_DOWN_HOURS:
                        p = "" + (u % 24);
                        break;
                    case a.COUNT_DOWN_DAYS:
                        p = "" + (m % 30);
                        break;
                    case a.COUNT_DOWN_MONTHS:
                        p = "" + (f % 12);
                        break;
                    case a.COUNT_DOWN_YEARS:
                        p = `${h}`;
                        break;
                    case a.COUNT_DOWN_FULL:
                        p = [h > 0 ? `${h}y` : "", m % 365 > 0 ? (m % 365) + "d" : "", u % 24 > 0 ? (u % 24) + "h" : "", d % 60 > 0 ? (d % 60) + "m" : "", l % 60 > 0 ? (l % 60) + "s" : ""].join(" ").trim();
                        break;
                    default:
                        p = "" + (l % 60);
                }
                return (0, r.jsx)("div", { className: t, children: p });
            };
        },
        64614: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(801102),
                s = n(113158),
                a = n(326762);
            function o({ el: e, p: t }) {
                const n = t.f32("everySeconds") ?? 1,
                    o = t.action("action") ?? s.Z;
                return (0, a.Z)(o, 1e3 * n), (0, r.Z)(e);
            }
        },
        26296: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(552322),
                s = n(202784);
            function a({ p: e, mods: t }) {
                const n = e.str("src") ?? "",
                    a = (0, s.useRef)(null);
                return (
                    (0, s.useEffect)(() => {
                        const e = a.current;
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
                    (0, r.jsx)("video", { ref: a, src: n, muted: !0, loop: !0, className: `${t} block w-full` })
                );
            }
        },
        472036: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(552322),
                s = n(801102);
            function a({ el: e, mods: t }) {
                return (0, r.jsx)("div", { className: `flex ${t}`, children: (0, s.Z)(e) });
            }
        },
        400441: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(552322),
                s = n(801102);
            function a({ el: e, mods: t }) {
                return (0, r.jsx)("div", { className: `flex flex-col ${t}`, children: (0, s.Z)(e) });
            }
        },
        696281: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(552322),
                s = n(801102),
                a = n(109195);
            function o(e) {
                return (0, r.jsx)("div", { className: " row-start-1 col-start-1 row-end-2 col-end-2 w-full h-full grid place-items-center", children: (0, r.jsx)(a.Z, { el: e }) });
            }
            function i({ el: e, mods: t }) {
                return (0, r.jsx)("div", { className: `grid place-items-center ${t}`, children: (0, s.Z)(e, o) });
            }
        },
        373461: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(552322),
                s = n(193686),
                a = n(202784),
                o = n(109195),
                i = n(122883),
                c = n(608222);
            function l({ url: e }) {
                const t = (0, c.o)(),
                    [n, l] = (0, a.useState)(!0),
                    [d, u] = (0, a.useState)(null),
                    [m, f] = (0, a.useState)(null);
                if (!t) return (0, r.jsx)("div", { children: "Runtime context not available" });
                const { Runtime: h } = t;
                if (!h) return (0, r.jsx)("div", { children: "Runtime not available" });
                const p = (0, i.vz)(h);
                return (
                    (0, a.useEffect)(() => {
                        e &&
                            (async () => {
                                l(!0);
                                try {
                                    const t = p.session(),
                                        n = await h.net.httpGet(e);
                                    n.data && t.onChunk(new Uint8Array(n.data)), f(p.root.value), l(!1);
                                } catch (e) {
                                    l(!1), u(e instanceof Error ? e : new Error(String(e)));
                                }
                            })();
                    }, [e]),
                    n ? (0, r.jsx)(s.P, {}) : d ? (0, r.jsxs)("div", { children: ["Error: ", d.message] }) : (0, r.jsx)(o.Z, { el: m })
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c.24216c9a.js.map

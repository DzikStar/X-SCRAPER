"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-91216611"],
    {
        969517: (e, t, n) => {
            n.d(t, { Z: () => i });
            var s = n(552322),
                r = n(202784),
                o = n(801102),
                a = n(109195);
            function i({ el: e, p: t, mods: n }) {
                const i = t.element("header"),
                    l = t.element("footer"),
                    c = t.action("on:appear");
                return (
                    (0, r.useEffect)(() => {
                        c && c();
                    }, []),
                    (0, s.jsxs)("div", { className: `w-full ${n}`, children: [i && (0, s.jsx)(a.Z, { el: i }), (0, o.Z)(e), l && (0, s.jsx)(a.Z, { el: l })] })
                );
            }
        },
        547645: (e, t, n) => {
            n.d(t, { Z: () => o });
            var s = n(552322),
                r = n(109195);
            function o({ p: e, el: t, mods: n }) {
                const o = e.int("activePage") ?? 0,
                    a = (function (e) {
                        const t = [];
                        for (const n of e.children) {
                            const s = e.dom.el(n);
                            void 0 !== s && t.push(s);
                        }
                        return t;
                    })(t);
                return a ? (0, s.jsx)("div", { className: n, children: a[o] && (0, s.jsx)(r.Z, { el: a[o] }) }) : null;
            }
        },
        229476: (e, t, n) => {
            n.d(t, { Z: () => d });
            var s = n(552322),
                r = n(202784),
                o = n(801102),
                a = n(109195),
                i = n(608222),
                l = n(644109);
            const c = (e, t) => {
                const n = e.getBoundingClientRect();
                (n.left + n.right) / 2 < window.innerWidth / 2 ? ((t.style.left = "0px"), (t.style.right = "")) : ((t.style.left = ""), (t.style.right = "0px")), n.bottom + t.offsetHeight < document.documentElement.scrollHeight ? ((t.style.top = `${e.offsetHeight}px`), (t.style.bottom = "")) : ((t.style.top = ""), (t.style.bottom = `${e.offsetHeight}px`));
            };
            function d({ el: e, p: t, mods: n }) {
                const d = (0, i.o)(),
                    u = d?.Runtime;
                if (!d || !u) return (0, s.jsx)("div", { children: "Runtime not available" });
                const m = t.element("popover"),
                    f = (0, r.useRef)(null),
                    h = (0, r.useRef)(null);
                (0, r.useEffect)(() => {
                    const e = () => {
                            f?.current && h?.current && c(f.current, h.current);
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
                const [p, x] = (0, r.useState)(!1);
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        p && (0, s.jsx)("div", { className: "fixed left-0 top-0 w-screen h-screen", onClick: () => u.removeCover() }),
                        (0, s.jsxs)("div", {
                            className: "relative",
                            children: [
                                (0, s.jsx)("button", {
                                    ref: f,
                                    type: "button",
                                    onClick: (e) => {
                                        e.stopPropagation(),
                                            f?.current &&
                                                h?.current &&
                                                (c(f.current, h.current),
                                                x(!p),
                                                u.addCover(() => {
                                                    e.stopPropagation(), x(!1);
                                                }));
                                    },
                                    className: `flex flex-col ${n} w-full h-full`,
                                    children: (0, o.Z)(e),
                                }),
                                m && (0, s.jsx)("div", { ref: h, className: "absolute min-w-max bg-transparent drop-shadow-lg " + (p ? "" : "invisible"), children: (0, s.jsx)(a.Z, { el: m }) }),
                            ],
                        }),
                    ],
                });
            }
        },
        849957: (e, t, n) => {
            n.d(t, { Z: () => a });
            var s = n(552322),
                r = n(373461),
                o = n(801102);
            function a({ p: e, el: t }) {
                const n = e.str("src") ?? "",
                    a = (0, o.Z)(t);
                return (0, s.jsx)(r.Z, { url: n, ...(a.length > 0 ? { placeholder: a } : {}) });
            }
        },
        128069: (e, t, n) => {
            n.d(t, { Z: () => a });
            var s = n(552322),
                r = n(202784),
                o = n(608222);
            function a({ p: e, mods: t }) {
                const n = e.richtext("text") ?? [],
                    a = e.int("maxLines"),
                    i = e.bool("showMore"),
                    l = (0, r.useRef)(null),
                    [c, d] = (0, r.useState)(),
                    u = "https://x.com",
                    m = "https://twitter.com",
                    f = (0, o.o)();
                if (!f || !f.Runtime) return (0, s.jsx)("div", { className: `${t}`, children: "Can't find runtime" });
                const { Runtime: h } = f,
                    p = h.history,
                    x = (e, t, n, s) => {
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
                                p.push(`/i/${e}`);
                            } else if (r.startsWith(m)) {
                                const e = r.slice(19);
                                p.push(e);
                            } else if (r.startsWith(u)) {
                                const e = r.slice(13);
                                p.push(e);
                            } else "undefined" != typeof window && (window.location.href = r);
                    },
                    v = (0, r.useCallback)(() => {
                        l.current && d(l.current.scrollHeight > l.current.clientHeight);
                    }, []);
                (0, r.useEffect)(
                    () => (
                        v(),
                        window.addEventListener("resize", v),
                        () => {
                            window.removeEventListener("resize", v);
                        }
                    ),
                    [v],
                );
                const N = null != a && !1 !== c ? `line-clamp-${a}` : "";
                return (0, s.jsxs)("div", {
                    className: `flex flex-col overflow-hidden ${t}`,
                    children: [
                        (0, s.jsx)("div", { ref: l, className: `flex-col overflow-hidden ${N}`, children: n.map((e, t) => (0 === e[0] ? (0, s.jsx)("span", { children: e[1] }, `${t} - ${e[0]}`) : 1 === e[0] && e[2] ? (0, s.jsx)("span", { className: "text-sky-500 cursor-pointer hover:underline", onClick: (t) => x(t, e[2] || ""), children: e[1] }, `${t} - ${e[0]}`) : 2 === e[0] || 3 === e[0] || 4 === e[0] ? (0, s.jsx)("span", { className: "text-blue-500 cursor-pointer hover:underline", onClick: (t) => x(t, "", e[0], e[1]), children: e[1] }, `${t} - ${e[0]}`) : 5 === e[0] ? (0, s.jsx)("span", { className: "font-bold", children: e[1] }, `${t} - ${e[0]}`) : 6 === e[0] ? (0, s.jsx)("span", { className: "italic", children: e[1] }, `${t} - ${e[0]}`) : 255 === e[0] ? (0, s.jsx)("br", {}, `${t} - ${e[0]}`) : (0, s.jsx)("span", { children: e[1] }, `${t} - ${e[0]}`))) }),
                        c &&
                            i &&
                            (0, s.jsx)("button", {
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
            var s = n(552322),
                r = n(801102),
                o = n(608222);
            const a = { x: 0, facebook: 1, whatsapp: 2, telegram: 3, linkedin: 4, email: 5, messages: 6, dm: 7, os: 8, copy: 9, facebookMessenger: 10, gmail: 11, signal: 12 };
            function i({ p: e, el: t, mods: n }) {
                const i = e.url("url") ?? "",
                    l = e.enum("target"),
                    c = (0, o.o)();
                if (!c || !c.Runtime) return (0, s.jsx)("div", { className: `${n}`, children: "Can't find runtime" });
                const { Runtime: d } = c;
                function u(e) {
                    try {
                        navigator.share && navigator.share({ url: e });
                    } catch (e) {}
                }
                return (0, s.jsx)("div", {
                    className: `flex cursor-pointer ${n}`,
                    onClick: (e) =>
                        ((e) => {
                            switch ((e.preventDefault(), e.stopPropagation(), l)) {
                                case a.x:
                                    d.history.push({ state: { text: i }, pathname: "/compose/post" });
                                    break;
                                case a.dm:
                                    d.history.push({ state: { text: i }, pathname: "/messages/compose" });
                                    break;
                                case a.os:
                                    u(i);
                                    break;
                                case a.copy:
                                    navigator.clipboard.writeText(i);
                                    break;
                                default:
                                    u(i);
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
                a = n(109195),
                i = n(608222);
            function l({ showModal: e, setShowModal: t, children: n }) {
                const o = (0, r.useRef)(null),
                    a = (0, i.o)(),
                    [l, c] = (0, r.useState)(!1);
                if (!a) return (0, s.jsx)("div", { children: "Runtime not available" });
                const { Runtime: d } = a;
                if (!d) return (0, s.jsx)("div", { children: "Runtime not available" });
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
                        e && o.current ? (d.addCover(() => o.current?.close()), o.current.showModal()) : !e && o.current?.open && (o.current.close(), d.removeCover());
                    }, [e, d.addCover, d.removeCover]);
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
                const [i, c] = (0, r.useState)(!1),
                    d = t.element("content");
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
                        d && (0, s.jsx)(l, { showModal: i, setShowModal: c, children: (0, s.jsx)(a.Z, { el: d }) }),
                    ],
                });
            }
        },
        315198: (e, t, n) => {
            n.d(t, { Z: () => r });
            var s = n(552322);
            function r({ p: e, mods: t }) {
                const n = e.int("size") ?? 12;
                return (0, s.jsx)("div", { className: `flex w-full items-center justify-center ${t}`, children: (0, s.jsx)("div", { className: "animate-spin motion-reduce:animate-none", style: { width: `${n}px`, height: `${n}px` }, children: (0, s.jsxs)("svg", { height: "100%", viewBox: "0 0 32 32", width: "100%", children: [(0, s.jsx)("circle", { className: "opacity-20 stroke-primary", cx: "16", cy: "16", fill: "none", r: "14", strokeWidth: "4" }), (0, s.jsx)("circle", { className: "stroke-primary", cx: "16", cy: "16", fill: "none", r: "14", strokeDasharray: "80", strokeDashoffset: 60, strokeWidth: "4" })] }) }) });
            }
        },
        139466: (e, t, n) => {
            n.d(t, { Z: () => a });
            var s = n(552322),
                r = n(801102),
                o = n(608222);
            function a({ el: e, mods: t, p: n }) {
                const a = (0, o.o)();
                if (!a || !a.Runtime) return (0, s.jsx)("div", { className: `${t}`, children: "Can't find runtime" });
                const { Runtime: i } = a,
                    l = i.getComponentOverride()[-22153];
                if (!l) return (0, s.jsx)("div", { className: `${t}`, children: "Can't find Story" });
                const c = (0, r.Z)(e);
                return (0, s.jsx)(l, { p: n, children: c });
            }
        },
        353151: (e, t, n) => {
            n.d(t, { Z: () => o });
            var s = n(552322),
                r = n(801102);
            function o({ el: e, mods: t }) {
                return (0, s.jsx)("div", { className: `flex w-full h-full ${t}`, children: (0, r.Z)(e) });
            }
        },
        314672: (e, t, n) => {
            n.d(t, { Z: () => a });
            var s = n(552322),
                r = n(801102),
                o = n(608222);
            function a({ el: e, mods: t }) {
                const n = (0, o.o)();
                if (!n || !n.Runtime) return (0, s.jsx)("div", { className: `${t}`, children: "Can't find runtime" });
                const { Runtime: a } = n,
                    i = a.getComponentOverride()[24045];
                if (!i) return (0, s.jsx)("div", { className: `${t}`, children: "Can't find StoryPager" });
                const l = (0, r.Z)(e);
                return (0, s.jsx)(i, { children: l });
            }
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
            n.d(t, { Z: () => d });
            var s = n(552322),
                r = n(202784);
            const o = { RELATIVE: 0, TIME: 1, DATE: 2, PRETTY_DATE: 3, MONTH_DATE_TIME: 4, COUNT_DOWN_SECONDS: 5, COUNT_DOWN_MINUTES: 6, COUNT_DOWN_HOURS: 7, COUNT_DOWN_DAYS: 8, COUNT_DOWN_MONTHS: 9, COUNT_DOWN_YEARS: 10, COUNT_DOWN_FULL: 11 },
                a = new Intl.DateTimeFormat(void 0, { dateStyle: "medium" }),
                i = new Intl.DateTimeFormat(void 0, { timeStyle: "short" }),
                l = new Intl.DateTimeFormat(void 0, { dateStyle: "long" }),
                c = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric" });
            function d({ p: e, mods: t }) {
                const n = e.date("time") ?? new Date(),
                    r = e.enum("format") ?? o.RELATIVE;
                if (r === o.COUNT_DOWN_SECONDS || r === o.COUNT_DOWN_MINUTES || r === o.COUNT_DOWN_HOURS || r === o.COUNT_DOWN_DAYS || r === o.COUNT_DOWN_MONTHS || r === o.COUNT_DOWN_YEARS || r === o.COUNT_DOWN_FULL) return (0, s.jsx)(u, { format: r, mods: t, time: n });
                const d = (Date.now() - n.getTime()) / 1e3,
                    m = (() => {
                        switch (r) {
                            case o.DATE:
                                return a.format(n);
                            case o.TIME:
                                return i.format(n);
                            case o.PRETTY_DATE:
                                return l.format(n);
                            case o.RELATIVE:
                                return d < 120 ? "1m" : d < 3600 ? `${Math.floor(d / 60)}m` : d < 86400 ? `${Math.floor(d / 3600)}h` : d < 259200 ? `${Math.floor(d / 3600 / 24)}d` : n.getFullYear() === new Date().getFullYear() ? c.format(n) : a.format(n);
                            default:
                                return "";
                        }
                    })();
                return (0, s.jsx)("div", { className: t, children: m });
            }
            const u = ({ format: e, mods: t, time: n }) => {
                const [a, i] = (0, r.useState)(Date.now());
                (0, r.useEffect)(() => {
                    const e = setInterval(() => {
                        i(Date.now());
                    }, 1e3);
                    return () => clearInterval(e);
                }, []);
                const l = n.getTime() - a;
                if (l <= 0) return (0, s.jsx)("div", { className: t, children: "0" });
                const c = Math.floor(l / 1e3),
                    d = Math.floor(c / 60),
                    u = Math.floor(d / 60),
                    m = Math.floor(u / 24),
                    f = Math.floor(m / 30),
                    h = Math.floor(m / 365);
                let p = "";
                switch (e) {
                    case o.COUNT_DOWN_SECONDS:
                        p = "" + (c % 60);
                        break;
                    case o.COUNT_DOWN_MINUTES:
                        p = "" + (d % 60);
                        break;
                    case o.COUNT_DOWN_HOURS:
                        p = "" + (u % 24);
                        break;
                    case o.COUNT_DOWN_DAYS:
                        p = "" + (m % 30);
                        break;
                    case o.COUNT_DOWN_MONTHS:
                        p = "" + (f % 12);
                        break;
                    case o.COUNT_DOWN_YEARS:
                        p = `${h}`;
                        break;
                    case o.COUNT_DOWN_FULL:
                        p = [h > 0 ? `${h}y` : "", m % 365 > 0 ? (m % 365) + "d" : "", u % 24 > 0 ? (u % 24) + "h" : "", d % 60 > 0 ? (d % 60) + "m" : "", c % 60 > 0 ? (c % 60) + "s" : ""].join(" ").trim();
                        break;
                    default:
                        p = "" + (c % 60);
                }
                return (0, s.jsx)("div", { className: t, children: p });
            };
        },
        64614: (e, t, n) => {
            n.d(t, { Z: () => a });
            var s = n(801102),
                r = n(113158),
                o = n(326762);
            function a({ el: e, p: t }) {
                const n = t.f32("everySeconds") ?? 1,
                    a = t.action("action") ?? r.Z;
                return (0, o.Z)(a, 1e3 * n), (0, s.Z)(e);
            }
        },
        988678: (e, t, n) => {
            n.d(t, { Z: () => i });
            var s = n(552322),
                r = n(202784),
                o = n(109195),
                a = n(608222);
            function i() {
                const [e, t] = (0, r.useState)([]),
                    n = (0, a.o)();
                if (!n || !n.Runtime) return;
                const { Runtime: i } = n,
                    l = () => {
                        t((e) => e.slice(1));
                    };
                return (
                    i.setAddToToastQueue((e) => {
                        t((t) => [...t, e]),
                            setTimeout(() => {
                                l();
                            }, 4e3);
                    }),
                    i.setRemoveFromToastQueue(l),
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
            n.d(t, { Z: () => i });
            var s = n(552322),
                r = n(801102),
                o = n(109195);
            function a(e, t) {
                return 0 === t ? (0, s.jsx)(o.Z, { el: e }, t) : (0, s.jsx)("div", { className: "absolute inset-0 w-full h-full", children: (0, s.jsx)(o.Z, { el: e }) }, t);
            }
            function i({ el: e, mods: t }) {
                return (0, s.jsx)("div", { className: `relative ${t}`, children: (0, r.Z)(e, a) });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-91216611.53d9baea.js.map

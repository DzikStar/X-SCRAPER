"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-866ab763"],
    {
        193686: (e, t, r) => {
            r.d(t, { P: () => s });
            var n = r(552322),
                a = r(840489);
            function s({ animating: e = !0, color: t = "primary", size: r = "small" }) {
                return (0, n.jsx)("div", { className: "flex w-full items-center justify-center", children: (0, n.jsx)("div", { className: (0, a.Z)("animate-spin", !e && "pause", { "h-3 w-3": "xSmall" === r, "h-5 w-5": "small" === r, "h-9 w-9": "large" === r, "h-7 w-7": "medium" === r }), children: (0, n.jsxs)("svg", { height: "100%", viewBox: "0 0 32 32", width: "100%", children: [(0, n.jsx)("circle", { className: (0, a.Z)("opacity-20", { "stroke-background": "background" === t, "stroke-primary": "primary" === t, "stroke-text": "text" === t }), cx: "16", cy: "16", fill: "none", r: "14", strokeWidth: "4" }), (0, n.jsx)("circle", { className: (0, a.Z)({ "stroke-background": "background" === t, "stroke-primary": "primary" === t, "stroke-text": "text" === t }), cx: "16", cy: "16", fill: "none", r: "14", strokeDasharray: "80", strokeDashoffset: 60, strokeWidth: "4" })] }) }) });
            }
        },
        123010: (e, t, r) => {
            r.d(t, { W: () => i });
            var n = r(552322),
                a = r(530361),
                s = r(202784),
                o = r(332161);
            function i({ color: e, displayTextRange: t, entities: r, lang: i, linkColor: c, numberOfLines: l, size: d, text: u, underlineLinks: f }) {
                const h = (0, s.useMemo)(() => {
                    const [e = 0, s = u.length] = t ?? [0, u.length];
                    if (e === s || s <= e || e < 0 || s > u.length) return null;
                    const i = Array.from((0, a.decode)(u)).slice(e, s);
                    if (!r) return i.join("");
                    const l = [],
                        d = (function (e) {
                            return [...(e.hashtags?.map((e) => ({ ...e, type: "hashtag" })) ?? []), ...(e.mentions?.map((e) => ({ ...e, type: "mention" })) ?? []), ...(e.symbols?.map((e) => ({ ...e, type: "symbol" })) ?? []), ...(e.urls?.map((e) => ({ ...e, type: "url" })) ?? [])].sort((e, t) => e.indices?.[0] - t.indices?.[0]);
                        })(r);
                    let h = 0;
                    return (
                        d
                            .filter((e) => {
                                const [t, r] = e.indices;
                                return "number" == typeof t && "number" == typeof r && t >= 0 && r > t && e.type && "string" == typeof e.type;
                            })
                            .forEach((t) => {
                                const [r, a] = t.indices.map((t) => t - e);
                                if (r < 0 || a > i.length || r >= a) return;
                                r > h && l.push((0, n.jsx)(o.x, { as: "span", color: "inherit", size: "inherit", children: i.slice(h, r).join("") }, `${h}-${r}`));
                                const s = (function (e, t, r, a, s) {
                                    const i = `entity-${e.type}-${t}-${r}`;
                                    switch (e.type) {
                                        case "hashtag":
                                            return (0, n.jsx)(o.x, { as: "a", color: a, href: `https://x.com/hashtag/${e.text}`, size: "inherit", underline: s, children: `#${e.text}` }, i);
                                        case "symbol":
                                            return (0, n.jsx)(o.x, { as: "a", color: a, href: `https://x.com/search?q=$${e.text}`, size: "inherit", underline: s, children: `$${e.text}` }, i);
                                        case "url":
                                            return (0, n.jsx)(o.x, { as: "a", color: a, href: e.url, size: "inherit", target: "_blank", rel: "noopener noreferrer", underline: s, children: e.displayUrl }, i);
                                        case "mention":
                                            return e.isUnmentioned ? (0, n.jsx)(o.x, { as: "span", color: "inherit", size: "inherit", children: `@${e.screenName}` }, i) : (0, n.jsx)(o.x, { as: "a", color: a, href: `https://x.com/${e.screenName}`, size: "inherit", underline: s, children: `@${e.screenName}` }, i);
                                    }
                                })(t, r, a, c, f);
                                s && l.push(s), (h = a);
                            }),
                        h < i.length && l.push((0, n.jsx)(o.x, { as: "span", color: "inherit", size: "inherit", children: i.slice(h).join("") }, `${h}-${i.length}`)),
                        l
                    );
                }, [u, t, r, c, f]);
                return (0, n.jsx)(o.x, { color: e, dir: "auto", lang: i, numberOfLines: l, size: d, children: h });
            }
        },
        437712: (e, t, r) => {
            r.d(t, { J: () => o });
            var n = r(552322),
                a = r(254600);
            const s = (0, r(110929).j)("bg-background z-50 overflow-hidden shadow-md outline-none", { variants: { borderRadius: { "2xLarge": "rounded-2xl", "3xLarge": "rounded-3xl", full: "rounded-full", large: "rounded-lg", medium: "rounded-md", none: "rounded-none", small: "rounded-sm", xLarge: "rounded-xl", true: "rounded" } } });
            function o({ borderRadius: e = "medium", children: t, open: r, onOpenChange: o, trigger: i, withArrow: c, ...l }) {
                return (0, n.jsxs)(a.fC, { open: r, onOpenChange: o, children: [i && (0, n.jsx)(a.xz, { asChild: !0, children: i }), (0, n.jsx)(a.h_, { children: (0, n.jsxs)(a.VY, { ...l, className: s({ borderRadius: e }), children: [t, c && (0, n.jsx)(a.Eh, { className: "fill-background" })] }) })] });
            }
        },
        253511: (e, t, r) => {
            r.d(t, { E: () => i });
            var n = r(552322),
                a = r(202784),
                s = r(332161);
            function o(e, t = "en") {
                const r = "undefined" != typeof navigator ? navigator.language : t,
                    n = new Date(e),
                    a = new Date();
                if (a.toDateString() === n.toDateString()) {
                    const e = Math.floor((a.getTime() - n.getTime()) / 1e3);
                    if (e < 60) return `${e}s`;
                    const t = Math.floor(e / 60);
                    if (t < 60) return `${t}m`;
                    return `${Math.floor(t / 60)}h`;
                }
                if (a.getFullYear() === n.getFullYear()) {
                    const e = { month: "short", day: "numeric" };
                    return n.toLocaleDateString(r, e);
                }
                return n.toLocaleDateString(r, { month: "short", day: "numeric", year: "numeric" });
            }
            function i({ color: e = "gray700", lang: t, link: r, timestamp: i, ...c }) {
                const [l, d] = (0, a.useState)(() => o(i, t));
                return (
                    (0, a.useEffect)(() => {
                        function e() {
                            "visible" === document.visibilityState && d(o(i, t));
                        }
                        return (
                            document.addEventListener("visibilitychange", e),
                            () => {
                                document.removeEventListener("visibilitychange", e);
                            }
                        );
                    }, [t, i]),
                    (0, n.jsx)(s.x, { ...c, color: e, ...(r && { as: "a", ...("string" == typeof r ? { href: r } : { href: r.href, target: r.target }) }), children: l })
                );
            }
        },
        34681: (e, t, r) => {
            r.d(t, { $N: () => x, Be: () => y, GG: () => f, PK: () => u, Vq: () => l, cN: () => g, cZ: () => m, fK: () => p, hg: () => d, t9: () => h });
            var n = r(552322),
                a = r(123825),
                s = r(840489),
                o = r(202784),
                i = r(887491),
                c = r(31674);
            const l = a.fC,
                d = a.xz,
                u = a.h_,
                f = a.x8,
                h = o.forwardRef(({ className: e, ...t }, r) => (0, n.jsx)(a.aV, { ref: r, className: (0, c.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", e), ...t }));
            h.displayName = a.aV.displayName;
            const m = o.forwardRef(({ children: e, className: t, withCloseButton: r = !0, ...s }, o) => (0, n.jsxs)(u, { children: [(0, n.jsx)(h, {}), (0, n.jsxs)(a.VY, { ref: o, className: (0, c.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-100 p-6 shadow-lg duration-200 sm:rounded-xl", t), ...s, children: [e, r && (0, n.jsxs)(a.x8, { tabIndex: -1, className: "ring-offset-background focus:ring-ring absolute right-4 top-4 rounded opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-200 data-[state=open]:text-gray-700", children: [(0, n.jsx)(i.Z, { className: "h-4 w-4 text-gray-900" }), (0, n.jsx)("span", { className: "sr-only", children: "Close" })] })] })] }));
            m.displayName = a.VY.displayName;
            const p = ({ className: e, ...t }) => (0, n.jsx)("div", { className: (0, c.cn)("flex flex-col space-y-1.5 text-center sm:text-left", e), ...t });
            p.displayName = "DialogHeader";
            const g = ({ className: e, ...t }) => (0, n.jsx)("div", { className: (0, c.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e), ...t });
            g.displayName = "DialogFooter";
            const x = o.forwardRef(({ className: e, ...t }, r) => (0, n.jsx)(a.Dx, { ref: r, className: (0, s.Z)("text-title4 text-text font-medium tracking-tight", e), ...t }));
            x.displayName = a.Dx.displayName;
            const y = o.forwardRef(({ className: e, ...t }, r) => (0, n.jsx)(a.dk, { ref: r, className: (0, c.cn)("text-sm text-gray-700", e), ...t }));
            y.displayName = a.dk.displayName;
        },
        305163: (e, t, r) => {
            r.d(t, { _T: () => a, ev: () => s, pi: () => n });
            var n = function () {
                return (
                    (n =
                        Object.assign ||
                        function (e) {
                            for (var t, r = 1, n = arguments.length; r < n; r++) for (var a in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                            return e;
                        }),
                    n.apply(this, arguments)
                );
            };
            function a(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var a = 0;
                    for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
                }
                return r;
            }
            Object.create;
            function s(e, t, r) {
                if (r || 2 === arguments.length) for (var n, a = 0, s = t.length; a < s; a++) (!n && a in t) || (n || (n = Array.prototype.slice.call(t, 0, a)), (n[a] = t[a]));
                return e.concat(n || Array.prototype.slice.call(t));
            }
            Object.create;
        },
        287359: (e, t, r) => {
            r.d(t, { q: () => i });
            var n = r(202784);
            function a(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e;
            }
            var s = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect,
                o = new WeakMap();
            function i(e, t) {
                var r,
                    i,
                    c,
                    l =
                        ((r = t || null),
                        (i = function (t) {
                            return e.forEach(function (e) {
                                return a(e, t);
                            });
                        }),
                        ((c = (0, n.useState)(function () {
                            return {
                                value: r,
                                callback: i,
                                facade: {
                                    get current() {
                                        return c.value;
                                    },
                                    set current(e) {
                                        var t = c.value;
                                        t !== e && ((c.value = e), c.callback(e, t));
                                    },
                                },
                            };
                        })[0]).callback = i),
                        c.facade);
                return (
                    s(
                        function () {
                            var t = o.get(l);
                            if (t) {
                                var r = new Set(t),
                                    n = new Set(e),
                                    s = l.current;
                                r.forEach(function (e) {
                                    n.has(e) || a(e, null);
                                }),
                                    n.forEach(function (e) {
                                        r.has(e) || a(e, s);
                                    });
                            }
                            o.set(l, e);
                        },
                        [e],
                    ),
                    l
                );
            }
        },
        757758: (e, t, r) => {
            r.d(t, { L: () => o });
            var n = r(305163),
                a = r(202784),
                s = function (e) {
                    var t = e.sideCar,
                        r = (0, n._T)(e, ["sideCar"]);
                    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
                    var s = t.read();
                    if (!s) throw new Error("Sidecar medium not found");
                    return a.createElement(s, (0, n.pi)({}, r));
                };
            function o(e, t) {
                return e.useMedium(t), s;
            }
            s.isSideCarExport = !0;
        },
        964597: (e, t, r) => {
            r.d(t, { _: () => o });
            var n = r(305163);
            function a(e) {
                return e;
            }
            function s(e, t) {
                void 0 === t && (t = a);
                var r = [],
                    n = !1;
                return {
                    read: function () {
                        if (n) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return r.length ? r[r.length - 1] : e;
                    },
                    useMedium: function (e) {
                        var a = t(e, n);
                        return (
                            r.push(a),
                            function () {
                                r = r.filter(function (e) {
                                    return e !== a;
                                });
                            }
                        );
                    },
                    assignSyncMedium: function (e) {
                        for (n = !0; r.length; ) {
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
                        n = !0;
                        var t = [];
                        if (r.length) {
                            var a = r;
                            (r = []), a.forEach(e), (t = r);
                        }
                        var s = function () {
                                var r = t;
                                (t = []), r.forEach(e);
                            },
                            o = function () {
                                return Promise.resolve().then(s);
                            };
                        o(),
                            (r = {
                                push: function (e) {
                                    t.push(e), o();
                                },
                                filter: function (e) {
                                    return (t = t.filter(e)), r;
                                },
                            });
                    },
                };
            }
            function o(e) {
                void 0 === e && (e = {});
                var t = s(null);
                return (t.options = (0, n.pi)({ async: !0, ssr: !1 }, e)), t;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-866ab763.ccb1640a.js.map

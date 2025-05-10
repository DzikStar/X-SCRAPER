"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-866ab763"],
    {
        983955: (e, t, n) => {
            n.d(t, { W: () => i });
            var r = n(552322),
                a = n(530361),
                o = n(332161);
            class s {
                segmentedText;
                constructor(e, t = "en") {
                    this.segmentedText = [...new Intl.Segmenter(t).segment(e)];
                }
                subsegment(e, t) {
                    return this.segmentedText
                        .slice(e, t)
                        .map((e) => e.segment)
                        .join("");
                }
            }
            function i({ color: e, displayTextRange: t, entities: n, lang: i, linkColor: c, numberOfLines: d, size: l, text: u, underlineLinks: f }) {
                let h = (0, a.decode)(u);
                if (t && void 0 !== t[0] && void 0 !== t[1]) {
                    const [e, n] = t;
                    if (e === n || n < e) return null;
                    const r = new s(u, i);
                    h = (0, a.decode)(r.subsegment(e, n));
                }
                const p = [];
                if (n) {
                    let e = 0;
                    const d = new s(h, i),
                        l = (function (e) {
                            const t = [];
                            return (
                                Object.entries(e).forEach(([e, n]) => {
                                    Array.isArray(n) &&
                                        n.forEach((n) => {
                                            n.indices && t.push({ type: e, ...n });
                                        });
                                }),
                                t.sort((e, t) => e.indices?.[0] - t.indices?.[0])
                            );
                        })(n);
                    l.forEach((n) => {
                        let s = n.indices;
                        t?.[0] && (s = [n.indices[0] - t[0], n.indices[1] - t[0]]);
                        const [i, l] = s;
                        i < 0 || l > h.length || (l !== e && i > e && p.push((0, r.jsx)(o.x, { as: "span", color: "inherit", size: "inherit", children: (0, a.decode)(d.subsegment(e, i)) }, `${e}-${i}`)), "hashtags" === n.type && p.push((0, r.jsx)(o.x, { as: "a", color: c, href: `https://x.com/hashtag/${n.text}`, size: "inherit", underline: f, children: `#${(0, a.decode)(n.text)}` }, `${i}-${l}`)), "symbols" === n.type && p.push((0, r.jsx)(o.x, { as: "a", color: c, href: `https://x.com/search?q=$${n.text}`, size: "inherit", underline: f, children: `$${(0, a.decode)(n.text)}` }, `${i}-${l}`)), "urls" === n.type && p.push((0, r.jsx)(o.x, { as: "a", color: c, href: n.url, size: "inherit", target: "_blank", rel: "noopener noreferrer", underline: f, children: (0, a.decode)(n.displayUrl) }, `${i}-${l}`)), "mentions" === n.type && (n.isUnmentioned ? p.push((0, r.jsx)(o.x, { as: "span", color: "inherit", size: "inherit", children: `@${(0, a.decode)(n.screenName)}` }, `${i}-${l}`)) : p.push((0, r.jsx)(o.x, { as: "a", color: c, href: `https://x.com/${n.screenName}`, size: "inherit", underline: f, children: `@${(0, a.decode)(n.screenName)}` }, `${i}-${l}`))), (e = l));
                    }),
                        e < h.length && p.push((0, r.jsx)(o.x, { as: "span", color: "inherit", size: "inherit", children: (0, a.decode)(d.subsegment(e, h.length)) }, `${e}-${h.length}`));
                } else p.push((0, r.jsx)(o.x, { color: "inherit", size: "inherit", children: (0, a.decode)(h) }, "text"));
                return (0, r.jsx)(o.x, { color: e, dir: "auto", numberOfLines: d, size: l, children: p });
            }
        },
        437712: (e, t, n) => {
            n.d(t, { J: () => s });
            var r = n(552322),
                a = n(927382);
            const o = (0, n(110929).j)("bg-background z-50 overflow-hidden shadow-md outline-none", { variants: { borderRadius: { "2xLarge": "rounded-2xl", "3xLarge": "rounded-3xl", full: "rounded-full", large: "rounded-lg", medium: "rounded-md", none: "rounded-none", small: "rounded-sm", xLarge: "rounded-xl", true: "rounded" } } });
            function s({ borderRadius: e = "medium", children: t, open: n, onOpenChange: s, trigger: i, withArrow: c, ...d }) {
                return (0, r.jsxs)(a.fC, { open: n, onOpenChange: s, children: [(0, r.jsx)(a.xz, { asChild: !0, children: i }), (0, r.jsx)(a.h_, { children: (0, r.jsxs)(a.VY, { ...d, className: o({ borderRadius: e }), children: [t, c && (0, r.jsx)(a.Eh, { className: "fill-background" })] }) })] });
            }
        },
        253511: (e, t, n) => {
            n.d(t, { E: () => i });
            var r = n(552322),
                a = n(202784),
                o = n(332161);
            function s(e, t = "en") {
                const n = "undefined" != typeof navigator ? navigator.language : t,
                    r = new Date(e),
                    a = new Date();
                if (a.toDateString() === r.toDateString()) {
                    const e = Math.floor((a.getTime() - r.getTime()) / 1e3);
                    if (e < 60) return `${e}s`;
                    const t = Math.floor(e / 60);
                    if (t < 60) return `${t}m`;
                    return `${Math.floor(t / 60)}h`;
                }
                if (a.getFullYear() === r.getFullYear()) {
                    const e = { month: "short", day: "numeric" };
                    return r.toLocaleDateString(n, e);
                }
                return r.toLocaleDateString(n, { month: "short", day: "numeric", year: "numeric" });
            }
            function i({ color: e = "gray700", lang: t, link: n, timestamp: i, ...c }) {
                const [d, l] = (0, a.useState)(() => s(i, t));
                return (
                    (0, a.useEffect)(() => {
                        function e() {
                            "visible" === document.visibilityState && l(s(i, t));
                        }
                        return (
                            document.addEventListener("visibilitychange", e),
                            () => {
                                document.removeEventListener("visibilitychange", e);
                            }
                        );
                    }, [t, i]),
                    (0, r.jsx)(o.x, { ...c, color: e, ...(n && { as: "a", ...("string" == typeof n ? { href: n } : { href: n.href, target: n.target }) }), children: d })
                );
            }
        },
        34681: (e, t, n) => {
            n.d(t, { $N: () => m, Be: () => g, PK: () => u, Vq: () => d, cZ: () => h, fK: () => p, hg: () => l, t9: () => f });
            var r = n(552322),
                a = n(123825),
                o = n(840489),
                s = n(202784),
                i = n(887491),
                c = n(31674);
            const d = a.fC,
                l = a.xz,
                u = a.h_,
                f = (a.x8, s.forwardRef(({ className: e, ...t }, n) => (0, r.jsx)(a.aV, { ref: n, className: (0, c.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", e), ...t })));
            f.displayName = a.aV.displayName;
            const h = s.forwardRef(({ children: e, className: t, ...n }, o) => (0, r.jsxs)(u, { children: [(0, r.jsx)(f, {}), (0, r.jsxs)(a.VY, { ref: o, className: (0, c.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-100 p-6 shadow-lg duration-200 sm:rounded-xl", t), ...n, children: [e, (0, r.jsxs)(a.x8, { tabIndex: -1, className: "ring-offset-background focus:ring-ring absolute right-4 top-4 rounded opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-200 data-[state=open]:text-gray-700", children: [(0, r.jsx)(i.Z, { className: "h-4 w-4 text-gray-900" }), (0, r.jsx)("span", { className: "sr-only", children: "Close" })] })] })] }));
            h.displayName = a.VY.displayName;
            const p = ({ className: e, ...t }) => (0, r.jsx)("div", { className: (0, c.cn)("flex flex-col space-y-1.5 text-center sm:text-left", e), ...t });
            p.displayName = "DialogHeader";
            const m = s.forwardRef(({ className: e, ...t }, n) => (0, r.jsx)(a.Dx, { ref: n, className: (0, o.Z)("text-title4 text-text font-medium tracking-tight", e), ...t }));
            m.displayName = a.Dx.displayName;
            const g = s.forwardRef(({ className: e, ...t }, n) => (0, r.jsx)(a.dk, { ref: n, className: (0, c.cn)("text-sm text-gray-700", e), ...t }));
            g.displayName = a.dk.displayName;
        },
        305163: (e, t, n) => {
            n.d(t, { _T: () => a, ev: () => o, pi: () => r });
            var r = function () {
                return (
                    (r =
                        Object.assign ||
                        function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                            return e;
                        }),
                    r.apply(this, arguments)
                );
            };
            function a(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var a = 0;
                    for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
                }
                return n;
            }
            Object.create;
            function o(e, t, n) {
                if (n || 2 === arguments.length) for (var r, a = 0, o = t.length; a < o; a++) (!r && a in t) || (r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
                return e.concat(r || Array.prototype.slice.call(t));
            }
            Object.create;
        },
        287359: (e, t, n) => {
            n.d(t, { q: () => i });
            var r = n(202784);
            function a(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e;
            }
            var o = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
                s = new WeakMap();
            function i(e, t) {
                var n,
                    i,
                    c,
                    d =
                        ((n = t || null),
                        (i = function (t) {
                            return e.forEach(function (e) {
                                return a(e, t);
                            });
                        }),
                        ((c = (0, r.useState)(function () {
                            return {
                                value: n,
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
                    o(
                        function () {
                            var t = s.get(d);
                            if (t) {
                                var n = new Set(t),
                                    r = new Set(e),
                                    o = d.current;
                                n.forEach(function (e) {
                                    r.has(e) || a(e, null);
                                }),
                                    r.forEach(function (e) {
                                        n.has(e) || a(e, o);
                                    });
                            }
                            s.set(d, e);
                        },
                        [e],
                    ),
                    d
                );
            }
        },
        757758: (e, t, n) => {
            n.d(t, { L: () => s });
            var r = n(305163),
                a = n(202784),
                o = function (e) {
                    var t = e.sideCar,
                        n = (0, r._T)(e, ["sideCar"]);
                    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
                    var o = t.read();
                    if (!o) throw new Error("Sidecar medium not found");
                    return a.createElement(o, (0, r.pi)({}, n));
                };
            function s(e, t) {
                return e.useMedium(t), o;
            }
            o.isSideCarExport = !0;
        },
        964597: (e, t, n) => {
            n.d(t, { _: () => s });
            var r = n(305163);
            function a(e) {
                return e;
            }
            function o(e, t) {
                void 0 === t && (t = a);
                var n = [],
                    r = !1;
                return {
                    read: function () {
                        if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return n.length ? n[n.length - 1] : e;
                    },
                    useMedium: function (e) {
                        var a = t(e, r);
                        return (
                            n.push(a),
                            function () {
                                n = n.filter(function (e) {
                                    return e !== a;
                                });
                            }
                        );
                    },
                    assignSyncMedium: function (e) {
                        for (r = !0; n.length; ) {
                            var t = n;
                            (n = []), t.forEach(e);
                        }
                        n = {
                            push: function (t) {
                                return e(t);
                            },
                            filter: function () {
                                return n;
                            },
                        };
                    },
                    assignMedium: function (e) {
                        r = !0;
                        var t = [];
                        if (n.length) {
                            var a = n;
                            (n = []), a.forEach(e), (t = n);
                        }
                        var o = function () {
                                var n = t;
                                (t = []), n.forEach(e);
                            },
                            s = function () {
                                return Promise.resolve().then(o);
                            };
                        s(),
                            (n = {
                                push: function (e) {
                                    t.push(e), s();
                                },
                                filter: function (e) {
                                    return (t = t.filter(e)), n;
                                },
                            });
                    },
                };
            }
            function s(e) {
                void 0 === e && (e = {});
                var t = o(null);
                return (t.options = (0, r.pi)({ async: !0, ssr: !1 }, e)), t;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-866ab763.d1e0a51a.js.map

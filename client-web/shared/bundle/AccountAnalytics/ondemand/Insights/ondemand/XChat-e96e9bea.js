"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-e96e9bea"],
    {
        702024: (e, t, r) => {
            r.d(t, { P: () => s });
            var n = r(552322),
                a = r(840489);
            function s({ animating: e = !0, color: t = "primary", size: r = "small" }) {
                return (0, n.jsx)("div", { className: "flex w-full items-center justify-center", children: (0, n.jsx)("div", { className: (0, a.Z)("animate-spin", !e && "pause", { "h-3 w-3": "xSmall" === r, "h-5 w-5": "small" === r, "h-9 w-9": "large" === r }), children: (0, n.jsxs)("svg", { height: "100%", viewBox: "0 0 32 32", width: "100%", children: [(0, n.jsx)("circle", { className: (0, a.Z)("opacity-20", { "stroke-background": "background" === t, "stroke-primary": "primary" === t, "stroke-text": "text" === t }), cx: "16", cy: "16", fill: "none", r: "14", strokeWidth: "4" }), (0, n.jsx)("circle", { className: (0, a.Z)({ "stroke-background": "background" === t, "stroke-primary": "primary" === t, "stroke-text": "text" === t }), cx: "16", cy: "16", fill: "none", r: "14", strokeDasharray: "80", strokeDashoffset: 60, strokeWidth: "4" })] }) }) });
            }
        },
        862399: (e, t, r) => {
            r.d(t, { W: () => o });
            var n = r(552322),
                a = r(530361),
                s = r(941204);
            class i {
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
            function o({ color: e, displayTextRange: t, entities: r, lang: o, linkColor: l, numberOfLines: c, size: d, text: u, underlineLinks: h }) {
                let f = (0, a.decode)(u);
                if (t && void 0 !== t[0] && void 0 !== t[1]) {
                    const [e, r] = t;
                    if (e === r || r < e) return null;
                    const n = new i(u, o);
                    f = (0, a.decode)(n.subsegment(e, r));
                }
                const m = [];
                if (r) {
                    let e = 0;
                    const c = new i(f, o),
                        d = (function (e) {
                            const t = [];
                            return (
                                Object.entries(e).forEach(([e, r]) => {
                                    Array.isArray(r) &&
                                        r.forEach((r) => {
                                            r.indices && t.push({ type: e, ...r });
                                        });
                                }),
                                t.sort((e, t) => e.indices?.[0] - t.indices?.[0])
                            );
                        })(r);
                    d.forEach((r) => {
                        let i = r.indices;
                        t?.[0] && (i = [r.indices[0] - t[0], r.indices[1] - t[0]]);
                        const [o, d] = i;
                        o < 0 || d > f.length || (d !== e && o > e && m.push((0, n.jsx)(s.x, { as: "span", color: "inherit", size: "inherit", children: (0, a.decode)(c.subsegment(e, o)) }, `${e}-${o}`)), "hashtags" === r.type && m.push((0, n.jsx)(s.x, { as: "a", color: l, href: `https://x.com/hashtag/${r.text}`, size: "inherit", underline: h, children: `#${(0, a.decode)(r.text)}` }, `${o}-${d}`)), "symbols" === r.type && m.push((0, n.jsx)(s.x, { as: "a", color: l, href: `https://x.com/search?q=$${r.text}`, size: "inherit", underline: h, children: `$${(0, a.decode)(r.text)}` }, `${o}-${d}`)), "urls" === r.type && m.push((0, n.jsx)(s.x, { as: "a", color: l, href: r.url, size: "inherit", target: "_blank", rel: "noopener noreferrer", underline: h, children: (0, a.decode)(r.displayUrl) }, `${o}-${d}`)), "mentions" === r.type && (r.isUnmentioned ? m.push((0, n.jsx)(s.x, { as: "span", color: "inherit", size: "inherit", children: `@${(0, a.decode)(r.screenName)}` }, `${o}-${d}`)) : m.push((0, n.jsx)(s.x, { as: "a", color: l, href: `https://x.com/${r.screenName}`, size: "inherit", underline: h, children: `@${(0, a.decode)(r.screenName)}` }, `${o}-${d}`))), (e = d));
                    }),
                        e < f.length && m.push((0, n.jsx)(s.x, { as: "span", color: "inherit", size: "inherit", children: (0, a.decode)(c.subsegment(e, f.length)) }, `${e}-${f.length}`));
                } else m.push((0, n.jsx)(s.x, { color: "inherit", size: "inherit", children: (0, a.decode)(f) }, "text"));
                return (0, n.jsx)(s.x, { color: e, dir: "auto", numberOfLines: c, size: d, children: m });
            }
        },
        86781: (e, t, r) => {
            r.d(t, { J: () => i });
            var n = r(552322),
                a = r(927382);
            const s = (0, r(110929).j)("bg-background z-50 overflow-hidden shadow-md outline-none", { variants: { borderRadius: { "2xLarge": "rounded-2xl", "3xLarge": "rounded-3xl", full: "rounded-full", large: "rounded-lg", medium: "rounded-md", none: "rounded-none", small: "rounded-sm", xLarge: "rounded-xl", true: "rounded" } } });
            function i({ borderRadius: e = "medium", children: t, open: r, onOpenChange: i, trigger: o, withArrow: l, ...c }) {
                return (0, n.jsxs)(a.fC, { open: r, onOpenChange: i, children: [(0, n.jsx)(a.xz, { asChild: !0, children: o }), (0, n.jsx)(a.h_, { children: (0, n.jsxs)(a.VY, { ...c, className: s({ borderRadius: e }), children: [t, l && (0, n.jsx)(a.Eh, { className: "fill-background" })] }) })] });
            }
        },
        559274: (e, t, r) => {
            r.d(t, { E: () => o });
            var n = r(552322),
                a = r(202784),
                s = r(941204);
            function i(e, t = "en") {
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
            function o({ color: e = "gray700", lang: t, link: r, timestamp: o, ...l }) {
                const [c, d] = (0, a.useState)(() => i(o, t));
                return (
                    (0, a.useEffect)(() => {
                        function e() {
                            "visible" === document.visibilityState && d(i(o, t));
                        }
                        return (
                            document.addEventListener("visibilitychange", e),
                            () => {
                                document.removeEventListener("visibilitychange", e);
                            }
                        );
                    }, [t, o]),
                    (0, n.jsx)(s.x, { ...l, color: e, ...(r && { as: "a", ...("string" == typeof r ? { href: r } : { href: r.href, target: r.target }) }), children: c })
                );
            }
        },
        164695: (e, t, r) => {
            r.d(t, { $N: () => g, Be: () => p, PK: () => u, Vq: () => c, cZ: () => f, fK: () => m, hg: () => d, t9: () => h });
            var n = r(552322),
                a = r(123825),
                s = r(840489),
                i = r(202784),
                o = r(796309),
                l = r(304183);
            const c = a.fC,
                d = a.xz,
                u = a.h_,
                h = (a.x8, i.forwardRef(({ className: e, ...t }, r) => (0, n.jsx)(a.aV, { ref: r, className: (0, o.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80", e), ...t })));
            h.displayName = a.aV.displayName;
            const f = i.forwardRef(({ children: e, className: t, ...r }, s) => (0, n.jsxs)(u, { children: [(0, n.jsx)(h, {}), (0, n.jsxs)(a.VY, { ref: s, className: (0, o.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-100 p-6 shadow-lg duration-200 sm:rounded-xl", t), ...r, children: [e, (0, n.jsxs)(a.x8, { tabIndex: -1, className: "ring-offset-background focus:ring-ring absolute right-4 top-4 rounded opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-200 data-[state=open]:text-gray-700", children: [(0, n.jsx)(l.Z, { className: "h-4 w-4 text-gray-900" }), (0, n.jsx)("span", { className: "sr-only", children: "Close" })] })] })] }));
            f.displayName = a.VY.displayName;
            const m = ({ className: e, ...t }) => (0, n.jsx)("div", { className: (0, o.cn)("flex flex-col space-y-1.5 text-center sm:text-left", e), ...t });
            m.displayName = "DialogHeader";
            const g = i.forwardRef(({ className: e, ...t }, r) => (0, n.jsx)(a.Dx, { ref: r, className: (0, s.Z)("text-title4 text-text font-medium tracking-tight", e), ...t }));
            g.displayName = a.Dx.displayName;
            const p = i.forwardRef(({ className: e, ...t }, r) => (0, n.jsx)(a.dk, { ref: r, className: (0, o.cn)("text-sm text-gray-700", e), ...t }));
            p.displayName = a.dk.displayName;
        },
        844096: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(552322);
            const a = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M13 3v13.59l5.043-5.05 1.414 1.42L12 20.41l-7.457-7.45 1.414-1.42L11 16.59V3h2z" }) });
        },
        136048: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(552322);
            const a = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M12 3.59l7.457 7.45-1.414 1.42L13 7.41V21h-2V7.41l-5.043 5.05-1.414-1.42L12 3.59z" }) });
        },
        304183: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(552322);
            const a = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z" }) });
        },
        880917: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(552322);
            const a = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z" }) });
        },
        383807: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(552322);
            const a = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M21.457 3.96L16.414 9H21v2h-8V3h2v4.59l5.043-5.05 1.414 1.42zM3 13h8v8H9v-4.59l-5.043 5.05-1.414-1.42L7.586 15H3v-2z" }) });
        },
        713014: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(552322);
            const a = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" }) });
        },
        252021: (e, t, r) => {
            r.d(t, { Z: () => i });
            var n = r(202784),
                a = r(107267),
                s = r(115553);
            const i = (e) => {
                (0, a.useHistory)();
                return n.createElement(s.A, e);
            };
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
            r.d(t, { q: () => o });
            var n = r(202784);
            function a(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e;
            }
            var s = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect,
                i = new WeakMap();
            function o(e, t) {
                var r,
                    o,
                    l,
                    c =
                        ((r = t || null),
                        (o = function (t) {
                            return e.forEach(function (e) {
                                return a(e, t);
                            });
                        }),
                        ((l = (0, n.useState)(function () {
                            return {
                                value: r,
                                callback: o,
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
                        })[0]).callback = o),
                        l.facade);
                return (
                    s(
                        function () {
                            var t = i.get(c);
                            if (t) {
                                var r = new Set(t),
                                    n = new Set(e),
                                    s = c.current;
                                r.forEach(function (e) {
                                    n.has(e) || a(e, null);
                                }),
                                    n.forEach(function (e) {
                                        r.has(e) || a(e, s);
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
            function i(e, t) {
                return e.useMedium(t), s;
            }
            s.isSideCarExport = !0;
        },
        964597: (e, t, r) => {
            r.d(t, { _: () => i });
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
                return (t.options = (0, n.pi)({ async: !0, ssr: !1 }, e)), t;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.XChat-e96e9bea.8808f5aa.js.map

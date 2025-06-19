"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.XChat-8eba0336"],
    {
        841227: (e, t, n) => {
            n.d(t, { q: () => Z });
            var r = n(552322),
                a = n(651782),
                s = n(369818),
                l = n(202784);
            const i = { currentLevel: -1, currentTime: 0, duration: 0, ended: !1, isFullscreen: !1, isPictureInPicture: !1, levels: [], muted: !0, paused: !0, volume: 0 };
            function o(e, t) {
                switch (t.type) {
                    case "LEVEL_SWITCHED":
                        return { ...e, currentLevel: t.payload.level };
                    case "MANIFEST_PARSED":
                        return { ...e, levels: t.payload.levels };
                    case "SET_DURATION":
                        return { ...e, duration: t.payload };
                    case "SET_ENDED":
                        return { ...e, ended: !0 };
                    case "SET_FULLSCREEN":
                        return { ...e, isFullscreen: t.payload };
                    case "SET_MUTED":
                        return { ...e, muted: t.payload };
                    case "SET_PAUSED":
                        return { ...e, paused: t.payload };
                    case "SET_PICTURE_IN_PICTURE":
                        return { ...e, isPictureInPicture: t.payload };
                    case "SET_VOLUME":
                        return { ...e, volume: t.payload };
                    case "TIME_UPDATE":
                        return { ...e, ...(e.ended && { ended: !1 }), currentTime: t.payload };
                    default:
                        return e;
                }
            }
            const c = (0, l.createContext)({ api: { set currentTime(e) {}, set muted(e) {}, pause: () => {}, play: () => {}, toggleFullscreen: () => {}, togglePictureInPicture: () => {}, set volume(e) {} }, state: i });
            function u() {
                return (0, l.useContext)(c);
            }
            function d({ children: e, className: t, src: n, startPosition: a, ...u }) {
                const [d, f] = (0, l.useReducer)(o, i),
                    m = (0, l.useRef)(null),
                    p = (0, l.useRef)(),
                    v = (0, l.useRef)(null);
                (0, l.useEffect)(() => {
                    const e = v.current;
                    if (!n || !e) return;
                    const t = new AbortController();
                    if (
                        (e.addEventListener(
                            "ended",
                            () => {
                                f({ type: "SET_ENDED" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "pause",
                            () => {
                                f({ payload: !0, type: "SET_PAUSED" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "play",
                            () => {
                                f({ payload: !1, type: "SET_PAUSED" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "seeked",
                            () => {
                                f({ payload: e.currentTime, type: "TIME_UPDATE" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "timeupdate",
                            () => {
                                f({ payload: e.currentTime, type: "TIME_UPDATE" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "volumechange",
                            () => {
                                f({ payload: e.muted, type: "SET_MUTED" }), f({ payload: e.volume, type: "SET_VOLUME" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "loadedmetadata",
                            () => {
                                f({ payload: e.duration, type: "SET_DURATION" }), f({ payload: e.muted, type: "SET_MUTED" }), f({ payload: e.volume, type: "SET_VOLUME" });
                            },
                            { signal: t.signal },
                        ),
                        "application/x-mpegURL" !== u.type)
                    )
                        return void (e.src = n);
                    const r = new s.ZP({ startLevel: -1, startPosition: a });
                    return (
                        r.on(s.ZP.Events.LEVEL_SWITCHED, (e, t) => {
                            f({ payload: t, type: "LEVEL_SWITCHED" });
                        }),
                        r.on(s.ZP.Events.MANIFEST_PARSED, (e, t) => {
                            f({ payload: t, type: "MANIFEST_PARSED" });
                        }),
                        r.loadSource(n),
                        r.attachMedia(e),
                        (p.current = r),
                        () => {
                            t.abort(), r && (r.detachMedia(), r.destroy());
                        }
                    );
                }, [u.type, n, a]);
                const x = (0, l.useMemo)(
                    () => ({
                        set currentTime(e) {
                            v.current && (v.current.currentTime = e);
                        },
                        set muted(e) {
                            v.current && (v.current.muted = e);
                        },
                        pause() {
                            v.current?.pause();
                        },
                        play() {
                            v.current?.play();
                        },
                        toggleFullscreen() {
                            document.fullscreenElement === m.current
                                ? (document.exitFullscreen(), f({ payload: !1, type: "SET_FULLSCREEN" }))
                                : m.current?.requestFullscreen().then(() => {
                                      f({ payload: !0, type: "SET_FULLSCREEN" });
                                  });
                        },
                        togglePictureInPicture() {
                            document.pictureInPictureElement === v.current
                                ? document.exitPictureInPicture().then(() => {
                                      f({ payload: !1, type: "SET_PICTURE_IN_PICTURE" });
                                  })
                                : v.current?.requestPictureInPicture().then(() => {
                                      f({ payload: !0, type: "SET_PICTURE_IN_PICTURE" });
                                  });
                        },
                        set level(e) {
                            p.current && (p.current.currentLevel = e);
                        },
                        set volume(e) {
                            v.current && (v.current.volume = e);
                        },
                    }),
                    [],
                );
                return (0, r.jsxs)("div", { ref: m, className: t, children: [(0, r.jsx)("video", { height: "100%", ref: v, width: "100%", ...u }), (0, r.jsx)(c.Provider, { value: { api: x, state: d }, children: e })] });
            }
            function f() {
                const { api: e, state: t } = u();
                return (0, r.jsx)("div", { className: "absolute bottom-0 end-0 start-0 top-0 cursor-pointer", onClick: t.paused ? e.play : e.pause });
            }
            var m = n(993165),
                p = n(58124),
                v = n(16373);
            function x(e) {
                const { api: t, state: n } = u(),
                    a = n.isFullscreen ? (0, r.jsx)(p.Z, {}) : (0, r.jsx)(v.Z, {}),
                    s = "Full screen";
                return (0, r.jsx)(m.z, { "aria-label": s, hoverLabel: s, icon: a, onClick: t.toggleFullscreen, variant: "onMediaText", ...e });
            }
            var h = n(958959),
                E = n(158385);
            function g(e) {
                const { api: t, state: n } = u(),
                    a = "undefined" == typeof window || !document.pictureInPictureEnabled,
                    s = n.isPictureInPicture ? (0, r.jsx)(h.Z, {}) : (0, r.jsx)(E.Z, {}),
                    l = "Picture-in-Picture";
                return (0, r.jsx)(m.z, { "aria-label": l, disabled: a, hoverLabel: l, icon: s, onClick: t.togglePictureInPicture, variant: "onMediaText", ...e });
            }
            var y = n(611105),
                b = n(992796),
                T = n(231783);
            function S(e) {
                const { api: t, state: n } = u(),
                    a = n.ended ? (0, r.jsx)(y.Z, {}) : n.paused ? (0, r.jsx)(b.Z, {}) : (0, r.jsx)(T.Z, {}),
                    s = n.ended ? "Replay" : n.paused ? "Play" : "Pause";
                return (0, r.jsx)(m.z, { "aria-label": s, hoverLabel: s, icon: a, onClick: n.ended || n.paused ? t.play : t.pause, variant: "onMediaText", ...e });
            }
            var w = n(840489),
                j = n(801766),
                N = n(644490);
            function I({ progressColor: e = "white", thumbColor: t = "white", thumbLabels: n, trackColor: a = "gray500", withThumb: s = !0, ...i }) {
                const o = (0, l.useContext)(j.wQ),
                    c = o && o.values.length > 1,
                    u = `${((o?.values[0] ?? 0) / (i.maxValue ?? 100)) * 100}%`,
                    d = `${(((o?.values[1] ?? 0) - (o?.values[0] ?? 0)) / (i.maxValue ?? 100)) * 100}%`,
                    f = "vertical" === i.orientation ? { height: u } : { width: u },
                    m = "vertical" === i.orientation ? { height: d } : { width: d };
                return (0, r.jsx)(j.Uj, { className: (0, w.Z)("flex w-6 cursor-pointer items-center", "vertical" === i.orientation ? "h-full w-6 flex-col-reverse" : "h-6 w-full"), children: ({ state: o }) => (0, r.jsxs)(l.Fragment, { children: [(0, r.jsx)("div", { className: (0, w.Z)(N.z7[e], "vertical" === i.orientation ? "w-0.5" : "h-0.5"), style: f }), (0, r.jsx)("div", { className: (0, w.Z)(!c && "grow", N.z7[a], "vertical" === i.orientation ? "w-0.5" : "h-0.5"), style: c ? m : {} }), c && (0, r.jsx)("div", { className: (0, w.Z)("grow", N.z7[e], "vertical" === i.orientation ? "w-0.5" : "h-0.5") }), s && o.values.map((e, a) => (0, r.jsx)(j.gs, { className: (0, w.Z)("rounded-full h-4 w-4 shadow-md", N.z7[t]), style: { transform: "none" }, index: a, ...(n?.[a] && { "aria-label": n[a] }) }, e))] }) });
            }
            function P(e) {
                return (0, r.jsx)(j.iR, { ...e, className: (0, w.Z)("relative flex flex-col", "vertical" === e.orientation ? "h-full" : "w-full"), ref: void 0, children: (0, r.jsx)(I, { ...e }) });
            }
            function _() {
                const [e, t] = (0, l.useState)(!1),
                    [n, a] = (0, l.useState)(0),
                    { api: s, state: i } = u();
                return (0, r.jsx)(P, {
                    "aria-label": "Scrubber",
                    maxValue: i.duration,
                    minValue: 0,
                    onChange: function (e) {
                        t(!0), Array.isArray(e) || (a(e), (s.currentTime = e));
                    },
                    onChangeEnd: function () {
                        t(!1);
                    },
                    step: 0.01,
                    value: e ? n : i.currentTime,
                    withThumb: !1,
                });
            }
            var L = n(332161);
            function C(e, t = "milliseconds") {
                const n = [],
                    r = e / (60 * ("milliseconds" === t ? 1e3 : 1) * 60),
                    a = Math.floor(r),
                    s = 60 * (r - a),
                    l = Math.floor(s),
                    i = 60 * (s - l),
                    o = Math.floor(i);
                return a && n.push(a.toString().padStart(2, "0")), n.push(l.toString().padStart(2, "0")), n.push(o.toString().padStart(2, "0")), n.join(":");
            }
            function R() {
                const { state: e } = u();
                return (0, r.jsx)(L.x, { color: "white", children: `${C(e.currentTime, "seconds")} / ${C(e.duration, "seconds")}` });
            }
            var M = n(983666);
            function U() {
                const { state: e } = u(),
                    t = e.duration >= e.currentTime ? e.duration - e.currentTime : 0;
                return (0, r.jsx)(M._, { children: C(t, "seconds") });
            }
            var A = n(516718),
                D = n(4700);
            function z(e) {
                const { api: t, state: n } = u(),
                    a = n.muted ? (0, r.jsx)(A.Z, {}) : (0, r.jsx)(D.Z, {}),
                    s = n.muted ? "Unmute" : "Mute";
                return (0, r.jsx)(m.z, {
                    "aria-label": s,
                    hoverLabel: s,
                    icon: a,
                    onClick: function () {
                        t.muted = !n.muted;
                    },
                    variant: "onMediaText",
                    ...e,
                });
            }
            function Z({ children: e, ...t }) {
                const n = (0, l.useRef)(null),
                    s = (0, a.X)(n);
                return (0, r.jsx)(d, { className: "relative flex h-full w-full bg-black tabular-nums", ...t, children: (0, r.jsxs)("div", { className: "absolute bottom-0 end-0 start-0 top-0 flex w-full", ref: n, children: [(0, r.jsx)(f, {}), e, s ? (0, r.jsxs)("div", { className: "absolute bottom-0 end-0 start-0 flex flex-col bg-gradient-to-b from-transparent to-black px-1 pb-1", children: [(0, r.jsx)("div", { className: "flex w-full items-center justify-between px-2", children: (0, r.jsx)(_, {}) }), (0, r.jsxs)("div", { className: "flex w-full items-center justify-between", children: [(0, r.jsx)("div", { className: "flex items-center", children: (0, r.jsx)(S, {}) }), (0, r.jsxs)("div", { className: "flex items-center gap-2", children: [(0, r.jsx)(R, {}), (0, r.jsxs)("div", { className: "flex", children: [(0, r.jsx)(z, {}), (0, r.jsx)(g, {}), (0, r.jsx)(x, {})] })] })] })] }) : (0, r.jsx)("div", { className: "absolute bottom-3 start-3", children: (0, r.jsx)(U, {}) })] }) });
            }
        },
        983706: (e, t, n) => {
            n.d(t, { T: () => o });
            var r = n(552322),
                a = n(254073),
                s = n.n(a),
                l = n(202784),
                i = n(801074);
            function o({ api: e, className: t, footer: n, header: a, height: o = "100vh", horizontal: c, id: u, items: d, nearEndThreshold: f = 5, nearStartThreshold: m = 2, onAtEnd: p, onAtStart: v, onNearEnd: x, onNearStart: h, onScroll: E, renderItem: g, width: y = "100%", ...b }) {
                const T = u ? `scroller-cache-${u}` : void 0,
                    S = d.length,
                    w = (0, l.useRef)(null),
                    j = (0, l.useRef)(0),
                    [N, I] = (0, l.useMemo)(() => {
                        if (!T) return [];
                        if ("undefined" == typeof window) return [];
                        const e = sessionStorage.getItem(T);
                        if (!e) return [];
                        try {
                            return JSON.parse(e);
                        } catch (e) {
                            return [];
                        }
                    }, [T]);
                (0, l.useLayoutEffect)(() => {
                    const e = w.current;
                    e && void 0 !== N && e.scrollTo(N);
                }, [N]),
                    (0, l.useEffect)(() => {
                        const e = w.current;
                        return () => {
                            e && T && sessionStorage.setItem(T, JSON.stringify([e.scrollOffset, e.cache]));
                        };
                    }, [T]),
                    (0, l.useEffect)(() => {
                        function e() {
                            T && sessionStorage.removeItem(T);
                        }
                        return (
                            window.addEventListener("beforeunload", e),
                            () => {
                                window.removeEventListener("beforeunload", e);
                            }
                        );
                    }, [T]),
                    (0, l.useImperativeHandle)(e, () => {
                        const e = w.current;
                        return {
                            findEndIndex: () => e?.findEndIndex() ?? 0,
                            findStartIndex: () => e?.findStartIndex() ?? 0,
                            getItemOffset: (t) => e?.getItemOffset(t) ?? 0,
                            getItemSize: (t) => e?.getItemSize(t) ?? 0,
                            scrollTo(t) {
                                e?.scrollTo(t);
                            },
                            scrollToIndex(t, n) {
                                e?.scrollToIndex(t, n);
                            },
                            get scrollOffset() {
                                return e?.scrollOffset ?? 0;
                            },
                            get scrollSize() {
                                return e?.scrollSize ?? 0;
                            },
                            get viewportSize() {
                                return e?.viewportSize ?? 0;
                            },
                        };
                    }, []);
                const P = (0, l.useMemo)(() => s()(() => x?.(), 500), [x]),
                    _ = (0, l.useMemo)(() => s()(() => h?.(), 500), [h]),
                    L = (0, l.useCallback)(
                        (e) => {
                            const t = w.current;
                            if (!t) return;
                            const n = e,
                                r = n > j.current ? "forward" : "backward";
                            E?.(e, r), "backward" === r && (0 === n && v?.(), t.findStartIndex() <= m && _()), "forward" === r && (n + t.viewportSize - t.scrollSize == 0 && p?.(), S - t.findEndIndex() <= f && P()), (j.current = n);
                        },
                        [S, P, _, f, m, p, v, E],
                    );
                return (0, r.jsxs)("div", { className: t, style: { height: o, overflowX: c ? "auto" : "hidden", overflowY: c ? "hidden" : "auto", overflowAnchor: "none", width: y }, children: [a, (0, r.jsx)(i.dM, { as: "ul", cache: I, count: S, horizontal: c, item: "li", onScroll: L, ref: w, ...b, children: (e) => g(d[e], e) }), n] });
            }
        },
        917317: (e, t, n) => {
            n.d(t, { Ol: () => i, SZ: () => c, Zb: () => l, aY: () => u, eW: () => d, ll: () => o });
            var r = n(552322),
                a = n(202784),
                s = n(31674);
            const l = a.forwardRef(({ className: e, ...t }, n) => (0, r.jsx)("div", { ref: n, className: (0, s.cn)("rounded-xl border bg-card text-text shadow", e), ...t }));
            l.displayName = "Card";
            const i = a.forwardRef(({ className: e, ...t }, n) => (0, r.jsx)("div", { ref: n, className: (0, s.cn)("flex flex-col space-y-1.5 p-6", e), ...t }));
            i.displayName = "CardHeader";
            const o = a.forwardRef(({ className: e, ...t }, n) => (0, r.jsx)("div", { ref: n, className: (0, s.cn)("font-semibold leading-none tracking-tight", e), ...t }));
            o.displayName = "CardTitle";
            const c = a.forwardRef(({ className: e, ...t }, n) => (0, r.jsx)("div", { ref: n, className: (0, s.cn)("text-subtext2 text-gray-700", e), ...t }));
            c.displayName = "CardDescription";
            const u = a.forwardRef(({ className: e, ...t }, n) => (0, r.jsx)("div", { ref: n, className: (0, s.cn)("p-6 pt-0", e), ...t }));
            u.displayName = "CardContent";
            const d = a.forwardRef(({ className: e, ...t }, n) => (0, r.jsx)("div", { ref: n, className: (0, s.cn)("flex items-center p-6 pt-0", e), ...t }));
            d.displayName = "CardFooter";
        },
        476865: (e, t, n) => {
            n.d(t, { SP: () => o, dr: () => i, mQ: () => l, nU: () => c });
            var r = n(552322),
                a = n(582493),
                s = n(31674);
            function l({ className: e, ...t }) {
                return (0, r.jsx)(a.fC, { "data-slot": "tabs", className: (0, s.cn)("flex flex-col gap-2", e), ...t });
            }
            function i({ className: e, ...t }) {
                return (0, r.jsx)(a.aV, { "data-slot": "tabs-list", className: (0, s.cn)("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-1", e), ...t });
            }
            function o({ className: e, ...t }) {
                return (0, r.jsx)(a.xz, { "data-slot": "tabs-trigger", className: (0, s.cn)("data-[state=active]:bg-background data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring inline-flex flex-1 items-center justify-center gap-1.5 rounded-md px-2 py-1 text-subtext1 font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), ...t });
            }
            function c({ className: e, ...t }) {
                return (0, r.jsx)(a.VY, { "data-slot": "tabs-content", className: (0, s.cn)("flex-1 outline-none", e), ...t });
            }
        },
        651782: (e, t, n) => {
            n.d(t, { X: () => a });
            var r = n(202784);
            const a = (e) => {
                const [t, n] = (0, r.useState)(!1);
                return (
                    (0, r.useEffect)(() => {
                        const t = e.current;
                        function r() {
                            n(!0);
                        }
                        function a() {
                            n(!1);
                        }
                        return (
                            t && (t.addEventListener("mouseenter", r), t.addEventListener("mouseleave", a)),
                            () => {
                                t && (t.removeEventListener("mouseenter", r), t.removeEventListener("mouseleave", a));
                            }
                        );
                    }, [e]),
                    t
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.XChat-8eba0336.be15c53a.js.map

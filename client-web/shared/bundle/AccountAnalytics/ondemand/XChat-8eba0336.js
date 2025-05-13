"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.XChat-8eba0336"],
    {
        841227: (e, t, r) => {
            r.d(t, { q: () => F });
            var n = r(552322),
                a = r(651782),
                s = r(369818),
                l = r(202784);
            const i = { currentLevel: -1, currentTime: 0, duration: 0, ended: !1, isFullscreen: !1, isPictureInPicture: !1, levels: [], muted: !0, paused: !0, volume: 0 };
            function c(e, t) {
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
            const o = (0, l.createContext)({ api: { set currentTime(e) {}, set muted(e) {}, pause: () => {}, play: () => {}, toggleFullscreen: () => {}, togglePictureInPicture: () => {}, set volume(e) {} }, state: i });
            function u() {
                return (0, l.useContext)(o);
            }
            function d({ children: e, className: t, src: r, startPosition: a, ...u }) {
                const [d, m] = (0, l.useReducer)(c, i),
                    p = (0, l.useRef)(null),
                    f = (0, l.useRef)(),
                    v = (0, l.useRef)(null);
                (0, l.useEffect)(() => {
                    const e = v.current;
                    if (!r || !e) return;
                    const t = new AbortController();
                    if (
                        (e.addEventListener(
                            "ended",
                            () => {
                                m({ type: "SET_ENDED" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "pause",
                            () => {
                                m({ payload: !0, type: "SET_PAUSED" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "play",
                            () => {
                                m({ payload: !1, type: "SET_PAUSED" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "seeked",
                            () => {
                                m({ payload: e.currentTime, type: "TIME_UPDATE" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "timeupdate",
                            () => {
                                m({ payload: e.currentTime, type: "TIME_UPDATE" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "volumechange",
                            () => {
                                m({ payload: e.muted, type: "SET_MUTED" }), m({ payload: e.volume, type: "SET_VOLUME" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "loadedmetadata",
                            () => {
                                m({ payload: e.duration, type: "SET_DURATION" }), m({ payload: e.muted, type: "SET_MUTED" }), m({ payload: e.volume, type: "SET_VOLUME" });
                            },
                            { signal: t.signal },
                        ),
                        "application/x-mpegURL" !== u.type)
                    )
                        return void (e.src = r);
                    const n = new s.ZP({ startLevel: -1, startPosition: a });
                    return (
                        n.on(s.ZP.Events.LEVEL_SWITCHED, (e, t) => {
                            m({ payload: t, type: "LEVEL_SWITCHED" });
                        }),
                        n.on(s.ZP.Events.MANIFEST_PARSED, (e, t) => {
                            m({ payload: t, type: "MANIFEST_PARSED" });
                        }),
                        n.loadSource(r),
                        n.attachMedia(e),
                        (f.current = n),
                        () => {
                            t.abort(), n && (n.detachMedia(), n.destroy());
                        }
                    );
                }, [u.type, r, a]);
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
                            document.fullscreenElement === p.current
                                ? (document.exitFullscreen(), m({ payload: !1, type: "SET_FULLSCREEN" }))
                                : p.current?.requestFullscreen().then(() => {
                                      m({ payload: !0, type: "SET_FULLSCREEN" });
                                  });
                        },
                        togglePictureInPicture() {
                            document.pictureInPictureElement === v.current
                                ? document.exitPictureInPicture().then(() => {
                                      m({ payload: !1, type: "SET_PICTURE_IN_PICTURE" });
                                  })
                                : v.current?.requestPictureInPicture().then(() => {
                                      m({ payload: !0, type: "SET_PICTURE_IN_PICTURE" });
                                  });
                        },
                        set level(e) {
                            f.current && (f.current.currentLevel = e);
                        },
                        set volume(e) {
                            v.current && (v.current.volume = e);
                        },
                    }),
                    [],
                );
                return (0, n.jsxs)("div", { ref: p, className: t, children: [(0, n.jsx)("video", { height: "100%", ref: v, width: "100%", ...u }), (0, n.jsx)(o.Provider, { value: { api: x, state: d }, children: e })] });
            }
            function m() {
                const { api: e, state: t } = u();
                return (0, n.jsx)("div", { className: "absolute bottom-0 end-0 start-0 top-0 cursor-pointer", onClick: t.paused ? e.play : e.pause });
            }
            var p = r(993165),
                f = r(58124),
                v = r(16373);
            function x(e) {
                const { api: t, state: r } = u(),
                    a = r.isFullscreen ? (0, n.jsx)(f.Z, {}) : (0, n.jsx)(v.Z, {}),
                    s = "Full screen";
                return (0, n.jsx)(p.z, { "aria-label": s, hoverLabel: s, icon: a, onClick: t.toggleFullscreen, variant: "onMediaText", ...e });
            }
            var E = r(958959),
                h = r(158385);
            function y(e) {
                const { api: t, state: r } = u(),
                    a = "undefined" == typeof window || !document.pictureInPictureEnabled,
                    s = r.isPictureInPicture ? (0, n.jsx)(E.Z, {}) : (0, n.jsx)(h.Z, {}),
                    l = "Picture-in-Picture";
                return (0, n.jsx)(p.z, { "aria-label": l, disabled: a, hoverLabel: l, icon: s, onClick: t.togglePictureInPicture, variant: "onMediaText", ...e });
            }
            var T = r(611105),
                S = r(992796),
                g = r(231783);
            function j(e) {
                const { api: t, state: r } = u(),
                    a = r.ended ? (0, n.jsx)(T.Z, {}) : r.paused ? (0, n.jsx)(S.Z, {}) : (0, n.jsx)(g.Z, {}),
                    s = r.ended ? "Replay" : r.paused ? "Play" : "Pause";
                return (0, n.jsx)(p.z, { "aria-label": s, hoverLabel: s, icon: a, onClick: r.ended || r.paused ? t.play : t.pause, variant: "onMediaText", ...e });
            }
            var w = r(840489),
                N = r(868569),
                b = r(644490);
            function I({ progressColor: e = "white", thumbColor: t = "white", thumbLabels: r, trackColor: a = "gray500", withThumb: s = !0, ...i }) {
                const c = (0, l.useContext)(N.wQ),
                    o = c.values.length > 1,
                    u = `${((c.values[0] ?? 0) / (i.maxValue ?? 100)) * 100}%`,
                    d = `${(((c.values[1] ?? 0) - (c.values[0] ?? 0)) / (i.maxValue ?? 100)) * 100}%`,
                    m = "vertical" === i.orientation ? { height: u } : { width: u },
                    p = "vertical" === i.orientation ? { height: d } : { width: d };
                return (0, n.jsx)(N.Uj, { className: (0, w.Z)("flex w-6 cursor-pointer items-center", "vertical" === i.orientation ? "h-full w-6 flex-col-reverse" : "h-6 w-full"), children: ({ state: c }) => (0, n.jsxs)(l.Fragment, { children: [(0, n.jsx)("div", { className: (0, w.Z)(b.z7[e], "vertical" === i.orientation ? "w-0.5" : "h-0.5"), style: m }), (0, n.jsx)("div", { className: (0, w.Z)(!o && "grow", b.z7[a], "vertical" === i.orientation ? "w-0.5" : "h-0.5"), style: o ? p : {} }), o && (0, n.jsx)("div", { className: (0, w.Z)("grow", b.z7[e], "vertical" === i.orientation ? "w-0.5" : "h-0.5") }), s && c.values.map((e, a) => (0, n.jsx)(N.gs, { className: (0, w.Z)("rounded-full h-4 w-4 shadow-md", b.z7[t]), style: { transform: "none" }, index: a, ...(r?.[a] && { "aria-label": r[a] }) }, e))] }) });
            }
            function P(e) {
                return (0, n.jsx)(N.iR, { ...e, className: (0, w.Z)("relative flex flex-col", "vertical" === e.orientation ? "h-full" : "w-full"), ref: void 0, children: (0, n.jsx)(I, { ...e }) });
            }
            function _() {
                const [e, t] = (0, l.useState)(!1),
                    [r, a] = (0, l.useState)(0),
                    { api: s, state: i } = u();
                return (0, n.jsx)(P, {
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
                    value: e ? r : i.currentTime,
                    withThumb: !1,
                });
            }
            var C = r(332161);
            function L(e, t = "milliseconds") {
                const r = [],
                    n = e / (60 * ("milliseconds" === t ? 1e3 : 1) * 60),
                    a = Math.floor(n),
                    s = 60 * (n - a),
                    l = Math.floor(s),
                    i = 60 * (s - l),
                    c = Math.floor(i);
                return a && r.push(a.toString().padStart(2, "0")), r.push(l.toString().padStart(2, "0")), r.push(c.toString().padStart(2, "0")), r.join(":");
            }
            function R() {
                const { state: e } = u();
                return (0, n.jsx)(C.x, { color: "white", children: `${L(e.currentTime, "seconds")} / ${L(e.duration, "seconds")}` });
            }
            var U = r(983666);
            function M() {
                const { state: e } = u(),
                    t = e.duration >= e.currentTime ? e.duration - e.currentTime : 0;
                return (0, n.jsx)(U._, { children: L(t, "seconds") });
            }
            var A = r(516718),
                D = r(4700);
            function Z(e) {
                const { api: t, state: r } = u(),
                    a = r.muted ? (0, n.jsx)(A.Z, {}) : (0, n.jsx)(D.Z, {}),
                    s = r.muted ? "Unmute" : "Mute";
                return (0, n.jsx)(p.z, {
                    "aria-label": s,
                    hoverLabel: s,
                    icon: a,
                    onClick: function () {
                        t.muted = !r.muted;
                    },
                    variant: "onMediaText",
                    ...e,
                });
            }
            function F({ children: e, ...t }) {
                const r = (0, l.useRef)(null),
                    s = (0, a.X)(r);
                return (0, n.jsx)(d, { className: "relative flex h-full w-full bg-black tabular-nums", ...t, children: (0, n.jsxs)("div", { className: "absolute bottom-0 end-0 start-0 top-0 flex w-full", ref: r, children: [(0, n.jsx)(m, {}), e, s ? (0, n.jsxs)("div", { className: "absolute bottom-0 end-0 start-0 flex flex-col bg-gradient-to-b from-transparent to-black px-1 pb-1", children: [(0, n.jsx)("div", { className: "flex w-full items-center justify-between px-2", children: (0, n.jsx)(_, {}) }), (0, n.jsxs)("div", { className: "flex w-full items-center justify-between", children: [(0, n.jsx)("div", { className: "flex items-center", children: (0, n.jsx)(j, {}) }), (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [(0, n.jsx)(R, {}), (0, n.jsxs)("div", { className: "flex", children: [(0, n.jsx)(Z, {}), (0, n.jsx)(y, {}), (0, n.jsx)(x, {})] })] })] })] }) : (0, n.jsx)("div", { className: "absolute bottom-3 start-3", children: (0, n.jsx)(M, {}) })] }) });
            }
        },
        983706: (e, t, r) => {
            r.d(t, { T: () => c });
            var n = r(552322),
                a = r(254073),
                s = r.n(a),
                l = r(202784),
                i = r(801074);
            function c({ api: e, className: t, footer: r, header: a, items: c, nearEndThreshold: o = 5, nearStartThreshold: u = 2, onAtEnd: d, onAtStart: m, onNearEnd: p, onNearStart: f, onScroll: v, renderItem: x, ...E }) {
                const h = c.length,
                    y = (0, l.useRef)(null),
                    T = (0, l.useRef)(0);
                (0, l.useImperativeHandle)(
                    e,
                    () => ({
                        findStartIndex: () => y.current?.findStartIndex() || 0,
                        findEndIndex: () => y.current?.findEndIndex() || 0,
                        getItemOffset: (e) => y.current?.getItemOffset(e) || 0,
                        getItemSize: (e) => y.current?.getItemSize(e) || 0,
                        scrollTo(e) {
                            y.current?.scrollTo(e);
                        },
                        scrollToIndex(e, t) {
                            y.current?.scrollToIndex(e, t);
                        },
                        get scrollOffset() {
                            return y.current?.scrollOffset || 0;
                        },
                        get scrollSize() {
                            return y.current?.scrollSize || 0;
                        },
                        get viewportSize() {
                            return y.current?.viewportSize || 0;
                        },
                    }),
                    [],
                );
                const S = s()(() => p?.(), 500),
                    g = s()(() => f?.(), 500);
                return (0, n.jsxs)("div", {
                    className: t,
                    style: { height: "100vh", overflowAnchor: "none", overflowY: "auto", width: "100%" },
                    children: [
                        a,
                        (0, n.jsx)(i.dM, {
                            as: "ul",
                            count: h,
                            item: "li",
                            onScroll: function (e) {
                                if (!y.current) return;
                                const t = e,
                                    r = t > T.current ? "forward" : "backward";
                                v?.(e, r), "backward" === r && (0 === t && m?.(), y.current.findStartIndex() <= u && g()), "forward" === r && (t + y.current.viewportSize - y.current.scrollSize == 0 && d?.(), h - y.current.findEndIndex() <= o && S()), (T.current = t);
                            },
                            ref: y,
                            ...E,
                            children: (e) => {
                                const t = c[e];
                                return x(t);
                            },
                        }),
                        r,
                    ],
                });
            }
        },
        917317: (e, t, r) => {
            r.d(t, { Ol: () => i, SZ: () => o, Zb: () => l, aY: () => u, eW: () => d, ll: () => c });
            var n = r(552322),
                a = r(202784),
                s = r(31674);
            const l = a.forwardRef(({ className: e, ...t }, r) => (0, n.jsx)("div", { ref: r, className: (0, s.cn)("rounded-xl border bg-card text-text shadow", e), ...t }));
            l.displayName = "Card";
            const i = a.forwardRef(({ className: e, ...t }, r) => (0, n.jsx)("div", { ref: r, className: (0, s.cn)("flex flex-col space-y-1.5 p-6", e), ...t }));
            i.displayName = "CardHeader";
            const c = a.forwardRef(({ className: e, ...t }, r) => (0, n.jsx)("div", { ref: r, className: (0, s.cn)("font-semibold leading-none tracking-tight", e), ...t }));
            c.displayName = "CardTitle";
            const o = a.forwardRef(({ className: e, ...t }, r) => (0, n.jsx)("div", { ref: r, className: (0, s.cn)("text-subtext2 text-gray-700", e), ...t }));
            o.displayName = "CardDescription";
            const u = a.forwardRef(({ className: e, ...t }, r) => (0, n.jsx)("div", { ref: r, className: (0, s.cn)("p-6 pt-0", e), ...t }));
            u.displayName = "CardContent";
            const d = a.forwardRef(({ className: e, ...t }, r) => (0, n.jsx)("div", { ref: r, className: (0, s.cn)("flex items-center p-6 pt-0", e), ...t }));
            d.displayName = "CardFooter";
        },
        651782: (e, t, r) => {
            r.d(t, { X: () => a });
            var n = r(202784);
            const a = (e) => {
                const [t, r] = (0, n.useState)(!1);
                return (
                    (0, n.useEffect)(() => {
                        const t = e.current;
                        function n() {
                            r(!0);
                        }
                        function a() {
                            r(!1);
                        }
                        return (
                            t && (t.addEventListener("mouseenter", n), t.addEventListener("mouseleave", a)),
                            () => {
                                t && (t.removeEventListener("mouseenter", n), t.removeEventListener("mouseleave", a));
                            }
                        );
                    }, [e]),
                    t
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.XChat-8eba0336.6798ae6a.js.map

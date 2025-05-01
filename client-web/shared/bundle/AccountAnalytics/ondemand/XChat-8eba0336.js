"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.XChat-8eba0336"],
    {
        615014: (e, t, r) => {
            r.d(t, { q: () => z });
            var n = r(552322),
                a = r(202784);
            const s = (e) => {
                const [t, r] = (0, a.useState)(!1);
                return (
                    (0, a.useEffect)(() => {
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
            var l = r(369818);
            const i = { currentLevel: -1, currentTime: 0, duration: 0, ended: !1, isFullscreen: !1, isPictureInPicture: !1, levels: [], muted: !0, paused: !0, volume: 0 };
            function u(e, t) {
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
            const o = (0, a.createContext)({ api: { set currentTime(e) {}, set muted(e) {}, pause: () => {}, play: () => {}, toggleFullscreen: () => {}, togglePictureInPicture: () => {}, set volume(e) {} }, state: i });
            function c() {
                return (0, a.useContext)(o);
            }
            function d({ children: e, className: t, src: r, startPosition: s, ...c }) {
                const [d, p] = (0, a.useReducer)(u, i),
                    m = (0, a.useRef)(null),
                    v = (0, a.useRef)(),
                    f = (0, a.useRef)(null);
                (0, a.useEffect)(() => {
                    const e = f.current;
                    if (!r || !e) return;
                    const t = new AbortController();
                    if (
                        (e.addEventListener(
                            "ended",
                            () => {
                                p({ type: "SET_ENDED" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "pause",
                            () => {
                                p({ payload: !0, type: "SET_PAUSED" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "play",
                            () => {
                                p({ payload: !1, type: "SET_PAUSED" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "seeked",
                            () => {
                                p({ payload: e.currentTime, type: "TIME_UPDATE" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "timeupdate",
                            () => {
                                p({ payload: e.currentTime, type: "TIME_UPDATE" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "volumechange",
                            () => {
                                p({ payload: e.muted, type: "SET_MUTED" }), p({ payload: e.volume, type: "SET_VOLUME" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "loadedmetadata",
                            () => {
                                p({ payload: e.duration, type: "SET_DURATION" }), p({ payload: e.muted, type: "SET_MUTED" }), p({ payload: e.volume, type: "SET_VOLUME" });
                            },
                            { signal: t.signal },
                        ),
                        "application/x-mpegURL" !== c.type)
                    )
                        return void (e.src = r);
                    const n = new l.ZP({ startLevel: -1, startPosition: s });
                    return (
                        n.on(l.ZP.Events.LEVEL_SWITCHED, (e, t) => {
                            p({ payload: t, type: "LEVEL_SWITCHED" });
                        }),
                        n.on(l.ZP.Events.MANIFEST_PARSED, (e, t) => {
                            p({ payload: t, type: "MANIFEST_PARSED" });
                        }),
                        n.loadSource(r),
                        n.attachMedia(e),
                        (v.current = n),
                        () => {
                            t.abort(), n && (n.detachMedia(), n.destroy());
                        }
                    );
                }, [c.type, r, s]);
                const E = (0, a.useMemo)(
                    () => ({
                        set currentTime(e) {
                            f.current && (f.current.currentTime = e);
                        },
                        set muted(e) {
                            f.current && (f.current.muted = e);
                        },
                        pause() {
                            f.current?.pause();
                        },
                        play() {
                            f.current?.play();
                        },
                        toggleFullscreen() {
                            document.fullscreenElement === m.current
                                ? (document.exitFullscreen(), p({ payload: !1, type: "SET_FULLSCREEN" }))
                                : m.current?.requestFullscreen().then(() => {
                                      p({ payload: !0, type: "SET_FULLSCREEN" });
                                  });
                        },
                        togglePictureInPicture() {
                            document.pictureInPictureElement === f.current
                                ? document.exitPictureInPicture().then(() => {
                                      p({ payload: !1, type: "SET_PICTURE_IN_PICTURE" });
                                  })
                                : f.current?.requestPictureInPicture().then(() => {
                                      p({ payload: !0, type: "SET_PICTURE_IN_PICTURE" });
                                  });
                        },
                        set level(e) {
                            v.current && (v.current.currentLevel = e);
                        },
                        set volume(e) {
                            f.current && (f.current.volume = e);
                        },
                    }),
                    [],
                );
                return (0, n.jsxs)("div", { ref: m, className: t, children: [(0, n.jsx)("video", { height: "100%", ref: f, width: "100%", ...c }), (0, n.jsx)(o.Provider, { value: { api: E, state: d }, children: e })] });
            }
            function p() {
                const { api: e, state: t } = c();
                return (0, n.jsx)("div", { className: "absolute bottom-0 end-0 start-0 top-0 cursor-pointer", onClick: t.paused ? e.play : e.pause });
            }
            var m = r(993165),
                v = r(914722),
                f = r(943078);
            function E(e) {
                const { api: t, state: r } = c(),
                    a = r.isFullscreen ? (0, n.jsx)(v.Z, {}) : (0, n.jsx)(f.Z, {}),
                    s = "Full screen";
                return (0, n.jsx)(m.z, { "aria-label": s, hoverLabel: s, icon: a, onClick: t.toggleFullscreen, variant: "onMediaText", ...e });
            }
            var x = r(764336),
                h = r(883166);
            function T(e) {
                const { api: t, state: r } = c(),
                    a = "undefined" == typeof window || !document.pictureInPictureEnabled,
                    s = r.isPictureInPicture ? (0, n.jsx)(x.Z, {}) : (0, n.jsx)(h.Z, {}),
                    l = "Picture-in-Picture";
                return (0, n.jsx)(m.z, { "aria-label": l, disabled: a, hoverLabel: l, icon: s, onClick: t.togglePictureInPicture, variant: "onMediaText", ...e });
            }
            var y = r(578950),
                S = r(958476),
                g = r(291500);
            function j(e) {
                const { api: t, state: r } = c(),
                    a = r.ended ? (0, n.jsx)(y.Z, {}) : r.paused ? (0, n.jsx)(S.Z, {}) : (0, n.jsx)(g.Z, {}),
                    s = r.ended ? "Replay" : r.paused ? "Play" : "Pause";
                return (0, n.jsx)(m.z, { "aria-label": s, hoverLabel: s, icon: a, onClick: r.ended || r.paused ? t.play : t.pause, variant: "onMediaText", ...e });
            }
            var w = r(840489),
                b = r(868569),
                I = r(644490);
            function P({ progressColor: e = "white", thumbColor: t = "white", thumbLabels: r, trackColor: s = "gray500", withThumb: l = !0, ...i }) {
                const u = (0, a.useContext)(b.wQ),
                    o = u.values.length > 1,
                    c = `${((u.values[0] ?? 0) / (i.maxValue ?? 100)) * 100}%`,
                    d = `${(((u.values[1] ?? 0) - (u.values[0] ?? 0)) / (i.maxValue ?? 100)) * 100}%`,
                    p = "vertical" === i.orientation ? { height: c } : { width: c },
                    m = "vertical" === i.orientation ? { height: d } : { width: d };
                return (0, n.jsx)(b.Uj, { className: (0, w.Z)("flex w-6 cursor-pointer items-center", "vertical" === i.orientation ? "h-full w-6 flex-col-reverse" : "h-6 w-full"), children: ({ state: u }) => (0, n.jsxs)(a.Fragment, { children: [(0, n.jsx)("div", { className: (0, w.Z)(I.z7[e], "vertical" === i.orientation ? "w-0.5" : "h-0.5"), style: p }), (0, n.jsx)("div", { className: (0, w.Z)(!o && "grow", I.z7[s], "vertical" === i.orientation ? "w-0.5" : "h-0.5"), style: o ? m : {} }), o && (0, n.jsx)("div", { className: (0, w.Z)("grow", I.z7[e], "vertical" === i.orientation ? "w-0.5" : "h-0.5") }), l && u.values.map((e, a) => (0, n.jsx)(b.gs, { className: (0, w.Z)("rounded-full h-4 w-4 shadow-md", I.z7[t]), style: { transform: "none" }, index: a, ...(r?.[a] && { "aria-label": r[a] }) }, e))] }) });
            }
            function _(e) {
                return (0, n.jsx)(b.iR, { ...e, className: (0, w.Z)("relative flex flex-col", "vertical" === e.orientation ? "h-full" : "w-full"), ref: void 0, children: (0, n.jsx)(P, { ...e }) });
            }
            function L() {
                const [e, t] = (0, a.useState)(!1),
                    [r, s] = (0, a.useState)(0),
                    { api: l, state: i } = c();
                return (0, n.jsx)(_, {
                    "aria-label": "Scrubber",
                    maxValue: i.duration,
                    minValue: 0,
                    onChange: function (e) {
                        t(!0), Array.isArray(e) || (s(e), (l.currentTime = e));
                    },
                    onChangeEnd: function () {
                        t(!1);
                    },
                    step: 0.01,
                    value: e ? r : i.currentTime,
                    withThumb: !1,
                });
            }
            var N = r(332161);
            function C(e, t = "milliseconds") {
                const r = [],
                    n = e / (60 * ("milliseconds" === t ? 1e3 : 1) * 60),
                    a = Math.floor(n),
                    s = 60 * (n - a),
                    l = Math.floor(s),
                    i = 60 * (s - l),
                    u = Math.floor(i);
                return a && r.push(a.toString().padStart(2, "0")), r.push(l.toString().padStart(2, "0")), r.push(u.toString().padStart(2, "0")), r.join(":");
            }
            function U() {
                const { state: e } = c();
                return (0, n.jsx)(N.x, { color: "white", children: `${C(e.currentTime, "seconds")} / ${C(e.duration, "seconds")}` });
            }
            var M = r(983666);
            function R() {
                const { state: e } = c(),
                    t = e.duration >= e.currentTime ? e.duration - e.currentTime : 0;
                return (0, n.jsx)(M._, { children: C(t, "seconds") });
            }
            var A = r(907430),
                D = r(193528);
            function Z(e) {
                const { api: t, state: r } = c(),
                    a = r.muted ? (0, n.jsx)(A.Z, {}) : (0, n.jsx)(D.Z, {}),
                    s = r.muted ? "Unmute" : "Mute";
                return (0, n.jsx)(m.z, {
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
            function z({ children: e, ...t }) {
                const r = (0, a.useRef)(null),
                    l = s(r);
                return (0, n.jsx)(d, { className: "relative flex h-full w-full bg-black tabular-nums", ...t, children: (0, n.jsxs)("div", { className: "absolute bottom-0 end-0 start-0 top-0 flex w-full", ref: r, children: [(0, n.jsx)(p, {}), e, l ? (0, n.jsxs)("div", { className: "absolute bottom-0 end-0 start-0 flex flex-col bg-gradient-to-b from-transparent to-black px-1 pb-1", children: [(0, n.jsx)("div", { className: "flex w-full items-center justify-between px-2", children: (0, n.jsx)(L, {}) }), (0, n.jsxs)("div", { className: "flex w-full items-center justify-between", children: [(0, n.jsx)("div", { className: "flex items-center", children: (0, n.jsx)(j, {}) }), (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [(0, n.jsx)(U, {}), (0, n.jsxs)("div", { className: "flex", children: [(0, n.jsx)(Z, {}), (0, n.jsx)(T, {}), (0, n.jsx)(E, {})] })] })] })] }) : (0, n.jsx)("div", { className: "absolute bottom-3 start-3", children: (0, n.jsx)(R, {}) })] }) });
            }
        },
        983706: (e, t, r) => {
            r.d(t, { T: () => u });
            var n = r(552322),
                a = r(254073),
                s = r.n(a),
                l = r(202784),
                i = r(801074);
            function u({ api: e, className: t, footer: r, header: a, items: u, nearEndThreshold: o = 5, nearStartThreshold: c = 2, onAtEnd: d, onAtStart: p, onNearEnd: m, onNearStart: v, onScroll: f, renderItem: E, ...x }) {
                const h = u.length,
                    T = (0, l.useRef)(null),
                    y = (0, l.useRef)(0);
                (0, l.useImperativeHandle)(
                    e,
                    () => ({
                        findStartIndex: () => T.current?.findStartIndex() || 0,
                        findEndIndex: () => T.current?.findEndIndex() || 0,
                        getItemOffset: (e) => T.current?.getItemOffset(e) || 0,
                        getItemSize: (e) => T.current?.getItemSize(e) || 0,
                        scrollTo(e) {
                            T.current?.scrollTo(e);
                        },
                        scrollToIndex(e, t) {
                            T.current?.scrollToIndex(e, t);
                        },
                        get scrollOffset() {
                            return T.current?.scrollOffset || 0;
                        },
                        get scrollSize() {
                            return T.current?.scrollSize || 0;
                        },
                        get viewportSize() {
                            return T.current?.viewportSize || 0;
                        },
                    }),
                    [],
                );
                const S = s()(() => m?.(), 500),
                    g = s()(() => v?.(), 500);
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
                                if (!T.current) return;
                                const t = e,
                                    r = t > y.current ? "forward" : "backward";
                                f?.(e, r), "backward" === r && (0 === t && p?.(), T.current.findStartIndex() <= c && g()), "forward" === r && (t + T.current.viewportSize - T.current.scrollSize == 0 && d?.(), h - T.current.findEndIndex() <= o && S()), (y.current = t);
                            },
                            ref: T,
                            ...x,
                            children: (e) => {
                                const t = u[e];
                                return E(t);
                            },
                        }),
                        r,
                    ],
                });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.XChat-8eba0336.41aa6f1a.js.map

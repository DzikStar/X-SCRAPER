"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.XChat-8eba0336"],
    {
        390278: (e, t, r) => {
            r.d(t, { q: () => D });
            var n = r(552322),
                l = r(202784);
            const s = (e) => {
                const [t, r] = (0, l.useState)(!1);
                return (
                    (0, l.useEffect)(() => {
                        const t = e.current;
                        function n() {
                            r(!0);
                        }
                        function l() {
                            r(!1);
                        }
                        return (
                            t && (t.addEventListener("mouseenter", n), t.addEventListener("mouseleave", l)),
                            () => {
                                t && (t.removeEventListener("mouseenter", n), t.removeEventListener("mouseleave", l));
                            }
                        );
                    }, [e]),
                    t
                );
            };
            var a = r(369818);
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
            function d({ children: e, className: t, src: r, startPosition: s, ...u }) {
                const [d, h] = (0, l.useReducer)(o, i),
                    v = (0, l.useRef)(null),
                    m = (0, l.useRef)(),
                    x = (0, l.useRef)(null);
                (0, l.useEffect)(() => {
                    const e = x.current;
                    if (!r || !e) return;
                    const t = new AbortController();
                    if (
                        (e.addEventListener(
                            "ended",
                            () => {
                                h({ type: "SET_ENDED" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "pause",
                            () => {
                                h({ payload: !0, type: "SET_PAUSED" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "play",
                            () => {
                                h({ payload: !1, type: "SET_PAUSED" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "seeked",
                            () => {
                                h({ payload: e.currentTime, type: "TIME_UPDATE" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "timeupdate",
                            () => {
                                h({ payload: e.currentTime, type: "TIME_UPDATE" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "volumechange",
                            () => {
                                h({ payload: e.muted, type: "SET_MUTED" }), h({ payload: e.volume, type: "SET_VOLUME" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "loadedmetadata",
                            () => {
                                h({ payload: e.duration, type: "SET_DURATION" }), h({ payload: e.muted, type: "SET_MUTED" }), h({ payload: e.volume, type: "SET_VOLUME" });
                            },
                            { signal: t.signal },
                        ),
                        "application/x-mpegURL" !== u.type)
                    )
                        return void (e.src = r);
                    const n = new a.ZP({ startLevel: -1, startPosition: s });
                    return (
                        n.on(a.ZP.Events.LEVEL_SWITCHED, (e, t) => {
                            h({ payload: t, type: "LEVEL_SWITCHED" });
                        }),
                        n.on(a.ZP.Events.MANIFEST_PARSED, (e, t) => {
                            h({ payload: t, type: "MANIFEST_PARSED" });
                        }),
                        n.loadSource(r),
                        n.attachMedia(e),
                        (m.current = n),
                        () => {
                            t.abort(), n && (n.detachMedia(), n.destroy());
                        }
                    );
                }, [u.type, r, s]);
                const p = (0, l.useMemo)(
                    () => ({
                        set currentTime(e) {
                            x.current && (x.current.currentTime = e);
                        },
                        set muted(e) {
                            x.current && (x.current.muted = e);
                        },
                        pause() {
                            x.current?.pause();
                        },
                        play() {
                            x.current?.play();
                        },
                        toggleFullscreen() {
                            document.fullscreenElement === v.current
                                ? (document.exitFullscreen(), h({ payload: !1, type: "SET_FULLSCREEN" }))
                                : v.current?.requestFullscreen().then(() => {
                                      h({ payload: !0, type: "SET_FULLSCREEN" });
                                  });
                        },
                        togglePictureInPicture() {
                            document.pictureInPictureElement === x.current
                                ? document.exitPictureInPicture().then(() => {
                                      h({ payload: !1, type: "SET_PICTURE_IN_PICTURE" });
                                  })
                                : x.current?.requestPictureInPicture().then(() => {
                                      h({ payload: !0, type: "SET_PICTURE_IN_PICTURE" });
                                  });
                        },
                        set level(e) {
                            m.current && (m.current.currentLevel = e);
                        },
                        set volume(e) {
                            x.current && (x.current.volume = e);
                        },
                    }),
                    [],
                );
                return (0, n.jsxs)("div", { ref: v, className: t, children: [(0, n.jsx)("video", { height: "100%", ref: x, width: "100%", ...u }), (0, n.jsx)(c.Provider, { value: { api: p, state: d }, children: e })] });
            }
            function h() {
                const { api: e, state: t } = u();
                return (0, n.jsx)("div", { className: "absolute bottom-0 end-0 start-0 top-0 cursor-pointer", onClick: t.paused ? e.play : e.pause });
            }
            var v = r(436059),
                m = r(383807);
            const x = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M13 3h8v8h-2V6.41l-5.043 5.05-1.414-1.42L17.586 5H13V3zm-1.543 10.96L6.414 19H11v2H3v-8h2v4.59l5.043-5.05 1.414 1.42z" }) });
            function p(e) {
                const { api: t, state: r } = u(),
                    l = r.isFullscreen ? (0, n.jsx)(m.Z, {}) : (0, n.jsx)(x, {}),
                    s = "Full screen";
                return (0, n.jsx)(v.z, { "aria-label": s, hoverLabel: s, icon: l, onClick: t.toggleFullscreen, variant: "onMediaText", ...e });
            }
            const f = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M3.457 2.04L9 7.59V3h2v8H3V9h4.586L2.043 3.46l1.414-1.42zM19.5 8H14V6h5.5C20.881 6 22 7.12 22 8.5v11c0 1.38-1.119 2.5-2.5 2.5h-11C7.119 22 6 20.88 6 19.5V14h2v5.5c0 .28.224.5.5.5h11c.276 0 .5-.22.5-.5v-11c0-.28-.224-.5-.5-.5z" }) }),
                w = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M3 3h8v2H6.414l5.543 5.54-1.414 1.42L5 6.41V11H3V3zm16.5 5H14V6h5.5C20.881 6 22 7.12 22 8.5v11c0 1.38-1.119 2.5-2.5 2.5h-11C7.119 22 6 20.88 6 19.5V14h2v5.5c0 .28.224.5.5.5h11c.276 0 .5-.22.5-.5v-11c0-.28-.224-.5-.5-.5z" }) });
            function g(e) {
                const { api: t, state: r } = u(),
                    l = "undefined" == typeof window || !document.pictureInPictureEnabled,
                    s = r.isPictureInPicture ? (0, n.jsx)(f, {}) : (0, n.jsx)(w, {}),
                    a = "Picture-in-Picture";
                return (0, n.jsx)(v.z, { "aria-label": a, disabled: l, hoverLabel: a, icon: s, onClick: t.togglePictureInPicture, variant: "onMediaText", ...e });
            }
            var E = r(285446);
            const j = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M21 12L4 2v20l17-10z" }) }),
                y = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M4 2h5v20H4V2zm11 20h5V2h-5v20z" }) });
            function T(e) {
                const { api: t, state: r } = u(),
                    l = r.ended ? (0, n.jsx)(E.Z, {}) : r.paused ? (0, n.jsx)(j, {}) : (0, n.jsx)(y, {}),
                    s = r.ended ? "Replay" : r.paused ? "Play" : "Pause";
                return (0, n.jsx)(v.z, { "aria-label": s, hoverLabel: s, icon: l, onClick: r.ended || r.paused ? t.play : t.pause, variant: "onMediaText", ...e });
            }
            var S = r(840489),
                L = r(868569),
                C = r(809691);
            function b({ progressColor: e = "white", thumbColor: t = "white", thumbLabels: r, trackColor: s = "gray500", withThumb: a = !0, ...i }) {
                const o = (0, l.useContext)(L.wQ),
                    c = o.values.length > 1,
                    u = `${((o.values[0] ?? 0) / (i.maxValue ?? 100)) * 100}%`,
                    d = `${(((o.values[1] ?? 0) - (o.values[0] ?? 0)) / (i.maxValue ?? 100)) * 100}%`,
                    h = "vertical" === i.orientation ? { height: u } : { width: u },
                    v = "vertical" === i.orientation ? { height: d } : { width: d };
                return (0, n.jsx)(L.Uj, { className: (0, S.Z)("flex w-6 cursor-pointer items-center", "vertical" === i.orientation ? "h-full w-6 flex-col-reverse" : "h-6 w-full"), children: ({ state: o }) => (0, n.jsxs)(l.Fragment, { children: [(0, n.jsx)("div", { className: (0, S.Z)(C.z7[e], "vertical" === i.orientation ? "w-0.5" : "h-0.5"), style: h }), (0, n.jsx)("div", { className: (0, S.Z)(!c && "grow", C.z7[s], "vertical" === i.orientation ? "w-0.5" : "h-0.5"), style: c ? v : {} }), c && (0, n.jsx)("div", { className: (0, S.Z)("grow", C.z7[e], "vertical" === i.orientation ? "w-0.5" : "h-0.5") }), a && o.values.map((e, l) => (0, n.jsx)(L.gs, { className: (0, S.Z)("rounded-full h-4 w-4 shadow-md", C.z7[t]), style: { transform: "none" }, index: l, ...(r?.[l] && { "aria-label": r[l] }) }, e))] }) });
            }
            function I(e) {
                return (0, n.jsx)(L.iR, { ...e, className: (0, S.Z)("relative flex flex-col", "vertical" === e.orientation ? "h-full" : "w-full"), ref: void 0, children: (0, n.jsx)(b, { ...e }) });
            }
            function M() {
                const [e, t] = (0, l.useState)(!1),
                    [r, s] = (0, l.useState)(0),
                    { api: a, state: i } = u();
                return (0, n.jsx)(I, {
                    "aria-label": "Scrubber",
                    maxValue: i.duration,
                    minValue: 0,
                    onChange: function (e) {
                        t(!0), Array.isArray(e) || (s(e), (a.currentTime = e));
                    },
                    onChangeEnd: function () {
                        t(!1);
                    },
                    step: 0.01,
                    value: e ? r : i.currentTime,
                    withThumb: !1,
                });
            }
            var z = r(941204);
            function P(e, t = "milliseconds") {
                const r = [],
                    n = e / (60 * ("milliseconds" === t ? 1e3 : 1) * 60),
                    l = Math.floor(n),
                    s = 60 * (n - l),
                    a = Math.floor(s),
                    i = 60 * (s - a),
                    o = Math.floor(i);
                return l && r.push(l.toString().padStart(2, "0")), r.push(a.toString().padStart(2, "0")), r.push(o.toString().padStart(2, "0")), r.join(":");
            }
            function _() {
                const { state: e } = u();
                return (0, n.jsx)(z.x, { color: "white", children: `${P(e.currentTime, "seconds")} / ${P(e.duration, "seconds")}` });
            }
            var N = r(584042);
            function V() {
                const { state: e } = u(),
                    t = e.duration >= e.currentTime ? e.duration - e.currentTime : 0;
                return (0, n.jsx)(N._, { children: P(t, "seconds") });
            }
            const U = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M15 1.06v21.88L6.68 17H3.5C2.12 17 1 15.88 1 14.5v-5C1 8.12 2.12 7 3.5 7h3.18L15 1.06zM6 9H3.5c-.28 0-.5.22-.5.5v5c0 .28.22.5.5.5H6V9zm2 6.49l5 3.57V4.94L8 8.51v6.98zm10.5-6.9l2 2 2-2L23.91 10l-2 2 2 2-1.41 1.41-2-2-2 2L17.09 14l2-2-2-2 1.41-1.41z" }) }),
                R = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M15 22.94V1.06L6.68 7H3.5C2.12 7 1 8.12 1 9.5v5C1 15.88 2.12 17 3.5 17h3.18L15 22.94zM3.5 9H6v6H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zM13 19.06l-5-3.57V8.51l5-3.57v14.12zm5.95-12.01c-.24-.24-.49-.45-.75-.65l1-1.75c.41.29.8.62 1.16.99 3.52 3.51 3.52 9.21 0 12.72-.36.37-.75.7-1.16.99l-1-1.75c.26-.2.51-.41.75-.65 2.73-2.73 2.73-7.17 0-9.9zM17 12c0-.8-.31-1.52-.82-2.06l1.02-1.78c1.1.91 1.8 2.29 1.8 3.84s-.7 2.93-1.8 3.84l-1.02-1.78c.51-.54.82-1.26.82-2.06z" }) });
            function A(e) {
                const { api: t, state: r } = u(),
                    l = r.muted ? (0, n.jsx)(U, {}) : (0, n.jsx)(R, {}),
                    s = r.muted ? "Unmute" : "Mute";
                return (0, n.jsx)(v.z, {
                    "aria-label": s,
                    hoverLabel: s,
                    icon: l,
                    onClick: function () {
                        t.muted = !r.muted;
                    },
                    variant: "onMediaText",
                    ...e,
                });
            }
            function D({ children: e, ...t }) {
                const r = (0, l.useRef)(null),
                    a = s(r);
                return (0, n.jsx)(d, { className: "relative flex h-full w-full bg-black tabular-nums", ...t, children: (0, n.jsxs)("div", { className: "absolute bottom-0 end-0 start-0 top-0 flex w-full", ref: r, children: [(0, n.jsx)(h, {}), e, a ? (0, n.jsxs)("div", { className: "absolute bottom-0 end-0 start-0 flex flex-col bg-gradient-to-b from-transparent to-black px-1 pb-1", children: [(0, n.jsx)("div", { className: "flex w-full items-center justify-between px-2", children: (0, n.jsx)(M, {}) }), (0, n.jsxs)("div", { className: "flex w-full items-center justify-between", children: [(0, n.jsx)("div", { className: "flex items-center", children: (0, n.jsx)(T, {}) }), (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [(0, n.jsx)(_, {}), (0, n.jsxs)("div", { className: "flex", children: [(0, n.jsx)(A, {}), (0, n.jsx)(g, {}), (0, n.jsx)(p, {})] })] })] })] }) : (0, n.jsx)("div", { className: "absolute bottom-3 start-3", children: (0, n.jsx)(V, {}) })] }) });
            }
        },
        921879: (e, t, r) => {
            r.d(t, { T: () => o });
            var n = r(552322),
                l = r(254073),
                s = r.n(l),
                a = r(202784),
                i = r(801074);
            function o({ api: e, className: t, footer: r, header: l, items: o, nearEndThreshold: c = 5, nearStartThreshold: u = 2, onAtEnd: d, onAtStart: h, onNearEnd: v, onNearStart: m, onScroll: x, renderItem: p, ...f }) {
                const w = o.length,
                    g = (0, a.useRef)(null),
                    E = (0, a.useRef)(0);
                (0, a.useImperativeHandle)(
                    e,
                    () => ({
                        findStartIndex: () => g.current?.findStartIndex() || 0,
                        findEndIndex: () => g.current?.findEndIndex() || 0,
                        getItemOffset: (e) => g.current?.getItemOffset(e) || 0,
                        getItemSize: (e) => g.current?.getItemSize(e) || 0,
                        scrollTo(e) {
                            g.current?.scrollTo(e);
                        },
                        scrollToIndex(e, t) {
                            g.current?.scrollToIndex(e, t);
                        },
                        get scrollOffset() {
                            return g.current?.scrollOffset || 0;
                        },
                        get scrollSize() {
                            return g.current?.scrollSize || 0;
                        },
                        get viewportSize() {
                            return g.current?.viewportSize || 0;
                        },
                    }),
                    [],
                );
                const j = s()(() => v?.(), 500),
                    y = s()(() => m?.(), 500);
                return (0, n.jsxs)("div", {
                    className: t,
                    style: { height: "100vh", overflowAnchor: "none", overflowY: "auto", width: "100%" },
                    children: [
                        l,
                        (0, n.jsx)(i.dM, {
                            as: "ul",
                            count: w,
                            item: "li",
                            onScroll: function (e) {
                                if (!g.current) return;
                                const t = e,
                                    r = t > E.current ? "forward" : "backward";
                                x?.(e, r), "backward" === r && (0 === t && h?.(), g.current.findStartIndex() <= u && y()), "forward" === r && (t + g.current.viewportSize - g.current.scrollSize == 0 && d?.(), w - g.current.findEndIndex() <= c && j()), (E.current = t);
                            },
                            ref: g,
                            ...f,
                            children: (e) => {
                                const t = o[e];
                                return p(t);
                            },
                        }),
                        r,
                    ],
                });
            }
        },
        582440: (e, t, r) => {
            r.d(t, { Z: () => l });
            var n = r(552322);
            const l = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" }) });
        },
        533788: (e, t, r) => {
            r.d(t, { Z: () => l });
            var n = r(552322);
            const l = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M12 3.75c-4.56 0-8.25 3.69-8.25 8.25s3.69 8.25 8.25 8.25 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM16.4 9.28l-5.21 7.15-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18z" }) });
        },
        779129: (e, t, r) => {
            r.d(t, { Z: () => l });
            var n = r(552322);
            const l = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M15.043 3.54l1.414 1.42L9.414 12l7.043 7.04-1.414 1.42L6.586 12l8.457-8.46z" }) });
        },
        511974: (e, t, r) => {
            r.d(t, { Z: () => l });
            var n = r(552322);
            const l = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" }) });
        },
        682008: (e, t, r) => {
            r.d(t, { Z: () => l });
            var n = r(552322);
            const l = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M21 5v3h3v2h-3v3h-2v-3h-3V8h3V5h2zM10 2C7.791 2 6 3.79 6 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4zm0 9c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11z" }) });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.XChat-8eba0336.f0f9a1da.js.map

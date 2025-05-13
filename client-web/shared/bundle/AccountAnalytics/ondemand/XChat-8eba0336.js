"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.XChat-8eba0336"],
    {
        770297: (e, t, r) => {
            r.d(t, { q: () => D });
            var n = r(552322),
                s = r(853425),
                l = r(369818),
                a = r(202784);
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
            const c = (0, a.createContext)({ api: { set currentTime(e) {}, set muted(e) {}, pause: () => {}, play: () => {}, toggleFullscreen: () => {}, togglePictureInPicture: () => {}, set volume(e) {} }, state: i });
            function d() {
                return (0, a.useContext)(c);
            }
            function u({ children: e, className: t, src: r, startPosition: s, ...d }) {
                const [u, h] = (0, a.useReducer)(o, i),
                    m = (0, a.useRef)(null),
                    v = (0, a.useRef)(),
                    x = (0, a.useRef)(null);
                (0, a.useEffect)(() => {
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
                        "application/x-mpegURL" !== d.type)
                    )
                        return void (e.src = r);
                    const n = new l.ZP({ startLevel: -1, startPosition: s });
                    return (
                        n.on(l.ZP.Events.LEVEL_SWITCHED, (e, t) => {
                            h({ payload: t, type: "LEVEL_SWITCHED" });
                        }),
                        n.on(l.ZP.Events.MANIFEST_PARSED, (e, t) => {
                            h({ payload: t, type: "MANIFEST_PARSED" });
                        }),
                        n.loadSource(r),
                        n.attachMedia(e),
                        (v.current = n),
                        () => {
                            t.abort(), n && (n.detachMedia(), n.destroy());
                        }
                    );
                }, [d.type, r, s]);
                const p = (0, a.useMemo)(
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
                            document.fullscreenElement === m.current
                                ? (document.exitFullscreen(), h({ payload: !1, type: "SET_FULLSCREEN" }))
                                : m.current?.requestFullscreen().then(() => {
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
                            v.current && (v.current.currentLevel = e);
                        },
                        set volume(e) {
                            x.current && (x.current.volume = e);
                        },
                    }),
                    [],
                );
                return (0, n.jsxs)("div", { ref: m, className: t, children: [(0, n.jsx)("video", { height: "100%", ref: x, width: "100%", ...d }), (0, n.jsx)(c.Provider, { value: { api: p, state: u }, children: e })] });
            }
            function h() {
                const { api: e, state: t } = d();
                return (0, n.jsx)("div", { className: "absolute bottom-0 end-0 start-0 top-0 cursor-pointer", onClick: t.paused ? e.play : e.pause });
            }
            var m = r(436059),
                v = r(521824);
            const x = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M13 3h8v8h-2V6.41l-5.043 5.05-1.414-1.42L17.586 5H13V3zm-1.543 10.96L6.414 19H11v2H3v-8h2v4.59l5.043-5.05 1.414 1.42z" }) });
            function p(e) {
                const { api: t, state: r } = d(),
                    s = r.isFullscreen ? (0, n.jsx)(v.Z, {}) : (0, n.jsx)(x, {}),
                    l = "Full screen";
                return (0, n.jsx)(m.z, { "aria-label": l, hoverLabel: l, icon: s, onClick: t.toggleFullscreen, variant: "onMediaText", ...e });
            }
            const f = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M3.457 2.04L9 7.59V3h2v8H3V9h4.586L2.043 3.46l1.414-1.42zM19.5 8H14V6h5.5C20.881 6 22 7.12 22 8.5v11c0 1.38-1.119 2.5-2.5 2.5h-11C7.119 22 6 20.88 6 19.5V14h2v5.5c0 .28.224.5.5.5h11c.276 0 .5-.22.5-.5v-11c0-.28-.224-.5-.5-.5z" }) }),
                w = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M3 3h8v2H6.414l5.543 5.54-1.414 1.42L5 6.41V11H3V3zm16.5 5H14V6h5.5C20.881 6 22 7.12 22 8.5v11c0 1.38-1.119 2.5-2.5 2.5h-11C7.119 22 6 20.88 6 19.5V14h2v5.5c0 .28.224.5.5.5h11c.276 0 .5-.22.5-.5v-11c0-.28-.224-.5-.5-.5z" }) });
            function g(e) {
                const { api: t, state: r } = d(),
                    s = "undefined" == typeof window || !document.pictureInPictureEnabled,
                    l = r.isPictureInPicture ? (0, n.jsx)(f, {}) : (0, n.jsx)(w, {}),
                    a = "Picture-in-Picture";
                return (0, n.jsx)(m.z, { "aria-label": a, disabled: s, hoverLabel: a, icon: l, onClick: t.togglePictureInPicture, variant: "onMediaText", ...e });
            }
            var E = r(616627);
            const y = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M21 12L4 2v20l17-10z" }) }),
                j = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M4 2h5v20H4V2zm11 20h5V2h-5v20z" }) });
            function T(e) {
                const { api: t, state: r } = d(),
                    s = r.ended ? (0, n.jsx)(E.Z, {}) : r.paused ? (0, n.jsx)(y, {}) : (0, n.jsx)(j, {}),
                    l = r.ended ? "Replay" : r.paused ? "Play" : "Pause";
                return (0, n.jsx)(m.z, { "aria-label": l, hoverLabel: l, icon: s, onClick: r.ended || r.paused ? t.play : t.pause, variant: "onMediaText", ...e });
            }
            var S = r(840489),
                C = r(868569),
                L = r(809691);
            function N({ progressColor: e = "white", thumbColor: t = "white", thumbLabels: r, trackColor: s = "gray500", withThumb: l = !0, ...i }) {
                const o = (0, a.useContext)(C.wQ),
                    c = o.values.length > 1,
                    d = `${((o.values[0] ?? 0) / (i.maxValue ?? 100)) * 100}%`,
                    u = `${(((o.values[1] ?? 0) - (o.values[0] ?? 0)) / (i.maxValue ?? 100)) * 100}%`,
                    h = "vertical" === i.orientation ? { height: d } : { width: d },
                    m = "vertical" === i.orientation ? { height: u } : { width: u };
                return (0, n.jsx)(C.Uj, { className: (0, S.Z)("flex w-6 cursor-pointer items-center", "vertical" === i.orientation ? "h-full w-6 flex-col-reverse" : "h-6 w-full"), children: ({ state: o }) => (0, n.jsxs)(a.Fragment, { children: [(0, n.jsx)("div", { className: (0, S.Z)(L.z7[e], "vertical" === i.orientation ? "w-0.5" : "h-0.5"), style: h }), (0, n.jsx)("div", { className: (0, S.Z)(!c && "grow", L.z7[s], "vertical" === i.orientation ? "w-0.5" : "h-0.5"), style: c ? m : {} }), c && (0, n.jsx)("div", { className: (0, S.Z)("grow", L.z7[e], "vertical" === i.orientation ? "w-0.5" : "h-0.5") }), l && o.values.map((e, s) => (0, n.jsx)(C.gs, { className: (0, S.Z)("rounded-full h-4 w-4 shadow-md", L.z7[t]), style: { transform: "none" }, index: s, ...(r?.[s] && { "aria-label": r[s] }) }, e))] }) });
            }
            function b(e) {
                return (0, n.jsx)(C.iR, { ...e, className: (0, S.Z)("relative flex flex-col", "vertical" === e.orientation ? "h-full" : "w-full"), ref: void 0, children: (0, n.jsx)(N, { ...e }) });
            }
            function I() {
                const [e, t] = (0, a.useState)(!1),
                    [r, s] = (0, a.useState)(0),
                    { api: l, state: i } = d();
                return (0, n.jsx)(b, {
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
            var M = r(941204);
            function z(e, t = "milliseconds") {
                const r = [],
                    n = e / (60 * ("milliseconds" === t ? 1e3 : 1) * 60),
                    s = Math.floor(n),
                    l = 60 * (n - s),
                    a = Math.floor(l),
                    i = 60 * (l - a),
                    o = Math.floor(i);
                return s && r.push(s.toString().padStart(2, "0")), r.push(a.toString().padStart(2, "0")), r.push(o.toString().padStart(2, "0")), r.join(":");
            }
            function P() {
                const { state: e } = d();
                return (0, n.jsx)(M.x, { color: "white", children: `${z(e.currentTime, "seconds")} / ${z(e.duration, "seconds")}` });
            }
            var _ = r(584042);
            function R() {
                const { state: e } = d(),
                    t = e.duration >= e.currentTime ? e.duration - e.currentTime : 0;
                return (0, n.jsx)(_._, { children: z(t, "seconds") });
            }
            const V = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M15 1.06v21.88L6.68 17H3.5C2.12 17 1 15.88 1 14.5v-5C1 8.12 2.12 7 3.5 7h3.18L15 1.06zM6 9H3.5c-.28 0-.5.22-.5.5v5c0 .28.22.5.5.5H6V9zm2 6.49l5 3.57V4.94L8 8.51v6.98zm10.5-6.9l2 2 2-2L23.91 10l-2 2 2 2-1.41 1.41-2-2-2 2L17.09 14l2-2-2-2 1.41-1.41z" }) }),
                U = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M15 22.94V1.06L6.68 7H3.5C2.12 7 1 8.12 1 9.5v5C1 15.88 2.12 17 3.5 17h3.18L15 22.94zM3.5 9H6v6H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zM13 19.06l-5-3.57V8.51l5-3.57v14.12zm5.95-12.01c-.24-.24-.49-.45-.75-.65l1-1.75c.41.29.8.62 1.16.99 3.52 3.51 3.52 9.21 0 12.72-.36.37-.75.7-1.16.99l-1-1.75c.26-.2.51-.41.75-.65 2.73-2.73 2.73-7.17 0-9.9zM17 12c0-.8-.31-1.52-.82-2.06l1.02-1.78c1.1.91 1.8 2.29 1.8 3.84s-.7 2.93-1.8 3.84l-1.02-1.78c.51-.54.82-1.26.82-2.06z" }) });
            function A(e) {
                const { api: t, state: r } = d(),
                    s = r.muted ? (0, n.jsx)(V, {}) : (0, n.jsx)(U, {}),
                    l = r.muted ? "Unmute" : "Mute";
                return (0, n.jsx)(m.z, {
                    "aria-label": l,
                    hoverLabel: l,
                    icon: s,
                    onClick: function () {
                        t.muted = !r.muted;
                    },
                    variant: "onMediaText",
                    ...e,
                });
            }
            function D({ children: e, ...t }) {
                const r = (0, a.useRef)(null),
                    l = (0, s.X)(r);
                return (0, n.jsx)(u, { className: "relative flex h-full w-full bg-black tabular-nums", ...t, children: (0, n.jsxs)("div", { className: "absolute bottom-0 end-0 start-0 top-0 flex w-full", ref: r, children: [(0, n.jsx)(h, {}), e, l ? (0, n.jsxs)("div", { className: "absolute bottom-0 end-0 start-0 flex flex-col bg-gradient-to-b from-transparent to-black px-1 pb-1", children: [(0, n.jsx)("div", { className: "flex w-full items-center justify-between px-2", children: (0, n.jsx)(I, {}) }), (0, n.jsxs)("div", { className: "flex w-full items-center justify-between", children: [(0, n.jsx)("div", { className: "flex items-center", children: (0, n.jsx)(T, {}) }), (0, n.jsxs)("div", { className: "flex items-center gap-2", children: [(0, n.jsx)(P, {}), (0, n.jsxs)("div", { className: "flex", children: [(0, n.jsx)(A, {}), (0, n.jsx)(g, {}), (0, n.jsx)(p, {})] })] })] })] }) : (0, n.jsx)("div", { className: "absolute bottom-3 start-3", children: (0, n.jsx)(R, {}) })] }) });
            }
        },
        889198: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(552322);
            const s = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" }) });
        },
        680815: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(552322);
            const s = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M12 3.75c-4.56 0-8.25 3.69-8.25 8.25s3.69 8.25 8.25 8.25 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM16.4 9.28l-5.21 7.15-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18z" }) });
        },
        501827: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(552322);
            const s = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M15.043 3.54l1.414 1.42L9.414 12l7.043 7.04-1.414 1.42L6.586 12l8.457-8.46z" }) });
        },
        521634: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(552322);
            const s = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" }) });
        },
        542495: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(552322);
            const s = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M21 5v3h3v2h-3v3h-2v-3h-3V8h3V5h2zM10 2C7.791 2 6 3.79 6 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4zm0 9c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11z" }) });
        },
        921879: (e, t, r) => {
            r.d(t, { T: () => o });
            var n = r(552322),
                s = r(254073),
                l = r.n(s),
                a = r(202784),
                i = r(801074);
            function o({ api: e, className: t, footer: r, header: s, items: o, nearEndThreshold: c = 5, nearStartThreshold: d = 2, onAtEnd: u, onAtStart: h, onNearEnd: m, onNearStart: v, onScroll: x, renderItem: p, ...f }) {
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
                const y = l()(() => m?.(), 500),
                    j = l()(() => v?.(), 500);
                return (0, n.jsxs)("div", {
                    className: t,
                    style: { height: "100vh", overflowAnchor: "none", overflowY: "auto", width: "100%" },
                    children: [
                        s,
                        (0, n.jsx)(i.dM, {
                            as: "ul",
                            count: w,
                            item: "li",
                            onScroll: function (e) {
                                if (!g.current) return;
                                const t = e,
                                    r = t > E.current ? "forward" : "backward";
                                x?.(e, r), "backward" === r && (0 === t && h?.(), g.current.findStartIndex() <= d && j()), "forward" === r && (t + g.current.viewportSize - g.current.scrollSize == 0 && u?.(), w - g.current.findEndIndex() <= c && y()), (E.current = t);
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
        407250: (e, t, r) => {
            r.d(t, { Ol: () => i, SZ: () => c, Zb: () => a, aY: () => d, eW: () => u, ll: () => o });
            var n = r(552322),
                s = r(202784),
                l = r(796309);
            const a = s.forwardRef(({ className: e, ...t }, r) => (0, n.jsx)("div", { ref: r, className: (0, l.cn)("rounded-xl border bg-card text-text shadow", e), ...t }));
            a.displayName = "Card";
            const i = s.forwardRef(({ className: e, ...t }, r) => (0, n.jsx)("div", { ref: r, className: (0, l.cn)("flex flex-col space-y-1.5 p-6", e), ...t }));
            i.displayName = "CardHeader";
            const o = s.forwardRef(({ className: e, ...t }, r) => (0, n.jsx)("div", { ref: r, className: (0, l.cn)("font-semibold leading-none tracking-tight", e), ...t }));
            o.displayName = "CardTitle";
            const c = s.forwardRef(({ className: e, ...t }, r) => (0, n.jsx)("div", { ref: r, className: (0, l.cn)("text-subtext2 text-gray-700", e), ...t }));
            c.displayName = "CardDescription";
            const d = s.forwardRef(({ className: e, ...t }, r) => (0, n.jsx)("div", { ref: r, className: (0, l.cn)("p-6 pt-0", e), ...t }));
            d.displayName = "CardContent";
            const u = s.forwardRef(({ className: e, ...t }, r) => (0, n.jsx)("div", { ref: r, className: (0, l.cn)("flex items-center p-6 pt-0", e), ...t }));
            u.displayName = "CardFooter";
        },
        853425: (e, t, r) => {
            r.d(t, { X: () => s });
            var n = r(202784);
            const s = (e) => {
                const [t, r] = (0, n.useState)(!1);
                return (
                    (0, n.useEffect)(() => {
                        const t = e.current;
                        function n() {
                            r(!0);
                        }
                        function s() {
                            r(!1);
                        }
                        return (
                            t && (t.addEventListener("mouseenter", n), t.addEventListener("mouseleave", s)),
                            () => {
                                t && (t.removeEventListener("mouseenter", n), t.removeEventListener("mouseleave", s));
                            }
                        );
                    }, [e]),
                    t
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.XChat-8eba0336.8648e28a.js.map

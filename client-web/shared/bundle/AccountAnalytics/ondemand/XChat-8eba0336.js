"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.XChat-8eba0336"],
    {
        841227: (e, t, r) => {
            r.d(t, { q: () => A });
            var s = r(552322),
                n = r(651782),
                a = r(369818),
                l = r(202784);
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
            function d() {
                return (0, l.useContext)(c);
            }
            function u({ children: e, className: t, src: r, startPosition: n, ...d }) {
                const [u, m] = (0, l.useReducer)(o, i),
                    v = (0, l.useRef)(null),
                    h = (0, l.useRef)(),
                    x = (0, l.useRef)(null);
                (0, l.useEffect)(() => {
                    const e = x.current;
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
                        "application/x-mpegURL" !== d.type)
                    )
                        return void (e.src = r);
                    const s = new a.ZP({ startLevel: -1, startPosition: n });
                    return (
                        s.on(a.ZP.Events.LEVEL_SWITCHED, (e, t) => {
                            m({ payload: t, type: "LEVEL_SWITCHED" });
                        }),
                        s.on(a.ZP.Events.MANIFEST_PARSED, (e, t) => {
                            m({ payload: t, type: "MANIFEST_PARSED" });
                        }),
                        s.loadSource(r),
                        s.attachMedia(e),
                        (h.current = s),
                        () => {
                            t.abort(), s && (s.detachMedia(), s.destroy());
                        }
                    );
                }, [d.type, r, n]);
                const f = (0, l.useMemo)(
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
                                ? (document.exitFullscreen(), m({ payload: !1, type: "SET_FULLSCREEN" }))
                                : v.current?.requestFullscreen().then(() => {
                                      m({ payload: !0, type: "SET_FULLSCREEN" });
                                  });
                        },
                        togglePictureInPicture() {
                            document.pictureInPictureElement === x.current
                                ? document.exitPictureInPicture().then(() => {
                                      m({ payload: !1, type: "SET_PICTURE_IN_PICTURE" });
                                  })
                                : x.current?.requestPictureInPicture().then(() => {
                                      m({ payload: !0, type: "SET_PICTURE_IN_PICTURE" });
                                  });
                        },
                        set level(e) {
                            h.current && (h.current.currentLevel = e);
                        },
                        set volume(e) {
                            x.current && (x.current.volume = e);
                        },
                    }),
                    [],
                );
                return (0, s.jsxs)("div", { ref: v, className: t, children: [(0, s.jsx)("video", { height: "100%", ref: x, width: "100%", ...d }), (0, s.jsx)(c.Provider, { value: { api: f, state: u }, children: e })] });
            }
            function m() {
                const { api: e, state: t } = d();
                return (0, s.jsx)("div", { className: "absolute bottom-0 end-0 start-0 top-0 cursor-pointer", onClick: t.paused ? e.play : e.pause });
            }
            var v = r(993165),
                h = r(58124),
                x = r(16373);
            function f(e) {
                const { api: t, state: r } = d(),
                    n = r.isFullscreen ? (0, s.jsx)(h.Z, {}) : (0, s.jsx)(x.Z, {}),
                    a = "Full screen";
                return (0, s.jsx)(v.z, { "aria-label": a, hoverLabel: a, icon: n, onClick: t.toggleFullscreen, variant: "onMediaText", ...e });
            }
            var p = r(958959),
                g = r(158385);
            function w(e) {
                const { api: t, state: r } = d(),
                    n = "undefined" == typeof window || !document.pictureInPictureEnabled,
                    a = r.isPictureInPicture ? (0, s.jsx)(p.Z, {}) : (0, s.jsx)(g.Z, {}),
                    l = "Picture-in-Picture";
                return (0, s.jsx)(v.z, { "aria-label": l, disabled: n, hoverLabel: l, icon: a, onClick: t.togglePictureInPicture, variant: "onMediaText", ...e });
            }
            var E = r(611105),
                y = r(992796),
                j = r(231783);
            function b(e) {
                const { api: t, state: r } = d(),
                    n = r.ended ? (0, s.jsx)(E.Z, {}) : r.paused ? (0, s.jsx)(y.Z, {}) : (0, s.jsx)(j.Z, {}),
                    a = r.ended ? "Replay" : r.paused ? "Play" : "Pause";
                return (0, s.jsx)(v.z, { "aria-label": a, hoverLabel: a, icon: n, onClick: r.ended || r.paused ? t.play : t.pause, variant: "onMediaText", ...e });
            }
            var S = r(840489),
                T = r(801766),
                N = r(644490);
            function C({ progressColor: e = "white", thumbColor: t = "white", thumbLabels: r, trackColor: n = "gray500", withThumb: a = !0, ...i }) {
                const o = (0, l.useContext)(T.wQ),
                    c = o.values.length > 1,
                    d = `${((o.values[0] ?? 0) / (i.maxValue ?? 100)) * 100}%`,
                    u = `${(((o.values[1] ?? 0) - (o.values[0] ?? 0)) / (i.maxValue ?? 100)) * 100}%`,
                    m = "vertical" === i.orientation ? { height: d } : { width: d },
                    v = "vertical" === i.orientation ? { height: u } : { width: u };
                return (0, s.jsx)(T.Uj, { className: (0, S.Z)("flex w-6 cursor-pointer items-center", "vertical" === i.orientation ? "h-full w-6 flex-col-reverse" : "h-6 w-full"), children: ({ state: o }) => (0, s.jsxs)(l.Fragment, { children: [(0, s.jsx)("div", { className: (0, S.Z)(N.z7[e], "vertical" === i.orientation ? "w-0.5" : "h-0.5"), style: m }), (0, s.jsx)("div", { className: (0, S.Z)(!c && "grow", N.z7[n], "vertical" === i.orientation ? "w-0.5" : "h-0.5"), style: c ? v : {} }), c && (0, s.jsx)("div", { className: (0, S.Z)("grow", N.z7[e], "vertical" === i.orientation ? "w-0.5" : "h-0.5") }), a && o.values.map((e, n) => (0, s.jsx)(T.gs, { className: (0, S.Z)("rounded-full h-4 w-4 shadow-md", N.z7[t]), style: { transform: "none" }, index: n, ...(r?.[n] && { "aria-label": r[n] }) }, e))] }) });
            }
            function L(e) {
                return (0, s.jsx)(T.iR, { ...e, className: (0, S.Z)("relative flex flex-col", "vertical" === e.orientation ? "h-full" : "w-full"), ref: void 0, children: (0, s.jsx)(C, { ...e }) });
            }
            function I() {
                const [e, t] = (0, l.useState)(!1),
                    [r, n] = (0, l.useState)(0),
                    { api: a, state: i } = d();
                return (0, s.jsx)(L, {
                    "aria-label": "Scrubber",
                    maxValue: i.duration,
                    minValue: 0,
                    onChange: function (e) {
                        t(!0), Array.isArray(e) || (n(e), (a.currentTime = e));
                    },
                    onChangeEnd: function () {
                        t(!1);
                    },
                    step: 0.01,
                    value: e ? r : i.currentTime,
                    withThumb: !1,
                });
            }
            var P = r(332161);
            function _(e, t = "milliseconds") {
                const r = [],
                    s = e / (60 * ("milliseconds" === t ? 1e3 : 1) * 60),
                    n = Math.floor(s),
                    a = 60 * (s - n),
                    l = Math.floor(a),
                    i = 60 * (a - l),
                    o = Math.floor(i);
                return n && r.push(n.toString().padStart(2, "0")), r.push(l.toString().padStart(2, "0")), r.push(o.toString().padStart(2, "0")), r.join(":");
            }
            function z() {
                const { state: e } = d();
                return (0, s.jsx)(P.x, { color: "white", children: `${_(e.currentTime, "seconds")} / ${_(e.duration, "seconds")}` });
            }
            var M = r(983666);
            function Z() {
                const { state: e } = d(),
                    t = e.duration >= e.currentTime ? e.duration - e.currentTime : 0;
                return (0, s.jsx)(M._, { children: _(t, "seconds") });
            }
            var R = r(516718),
                V = r(4700);
            function U(e) {
                const { api: t, state: r } = d(),
                    n = r.muted ? (0, s.jsx)(R.Z, {}) : (0, s.jsx)(V.Z, {}),
                    a = r.muted ? "Unmute" : "Mute";
                return (0, s.jsx)(v.z, {
                    "aria-label": a,
                    hoverLabel: a,
                    icon: n,
                    onClick: function () {
                        t.muted = !r.muted;
                    },
                    variant: "onMediaText",
                    ...e,
                });
            }
            function A({ children: e, ...t }) {
                const r = (0, l.useRef)(null),
                    a = (0, n.X)(r);
                return (0, s.jsx)(u, { className: "relative flex h-full w-full bg-black tabular-nums", ...t, children: (0, s.jsxs)("div", { className: "absolute bottom-0 end-0 start-0 top-0 flex w-full", ref: r, children: [(0, s.jsx)(m, {}), e, a ? (0, s.jsxs)("div", { className: "absolute bottom-0 end-0 start-0 flex flex-col bg-gradient-to-b from-transparent to-black px-1 pb-1", children: [(0, s.jsx)("div", { className: "flex w-full items-center justify-between px-2", children: (0, s.jsx)(I, {}) }), (0, s.jsxs)("div", { className: "flex w-full items-center justify-between", children: [(0, s.jsx)("div", { className: "flex items-center", children: (0, s.jsx)(b, {}) }), (0, s.jsxs)("div", { className: "flex items-center gap-2", children: [(0, s.jsx)(z, {}), (0, s.jsxs)("div", { className: "flex", children: [(0, s.jsx)(U, {}), (0, s.jsx)(w, {}), (0, s.jsx)(f, {})] })] })] })] }) : (0, s.jsx)("div", { className: "absolute bottom-3 start-3", children: (0, s.jsx)(Z, {}) })] }) });
            }
        },
        458872: (e, t, r) => {
            r.d(t, { Z: () => n });
            var s = r(552322);
            const n = (e) => (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, s.jsx)("path", { d: "M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" }) });
        },
        169355: (e, t, r) => {
            r.d(t, { Z: () => n });
            var s = r(552322);
            const n = (e) => (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, s.jsx)("path", { d: "M12 3.75c-4.56 0-8.25 3.69-8.25 8.25s3.69 8.25 8.25 8.25 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM16.4 9.28l-5.21 7.15-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18z" }) });
        },
        666200: (e, t, r) => {
            r.d(t, { Z: () => n });
            var s = r(552322);
            const n = (e) => (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, s.jsx)("path", { d: "M15.043 3.54l1.414 1.42L9.414 12l7.043 7.04-1.414 1.42L6.586 12l8.457-8.46z" }) });
        },
        52053: (e, t, r) => {
            r.d(t, { Z: () => n });
            var s = r(552322);
            const n = (e) => (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, s.jsx)("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" }) });
        },
        958959: (e, t, r) => {
            r.d(t, { Z: () => n });
            var s = r(552322);
            const n = (e) => (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, s.jsx)("path", { d: "M3.457 2.04L9 7.59V3h2v8H3V9h4.586L2.043 3.46l1.414-1.42zM19.5 8H14V6h5.5C20.881 6 22 7.12 22 8.5v11c0 1.38-1.119 2.5-2.5 2.5h-11C7.119 22 6 20.88 6 19.5V14h2v5.5c0 .28.224.5.5.5h11c.276 0 .5-.22.5-.5v-11c0-.28-.224-.5-.5-.5z" }) });
        },
        16373: (e, t, r) => {
            r.d(t, { Z: () => n });
            var s = r(552322);
            const n = (e) => (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, s.jsx)("path", { d: "M13 3h8v8h-2V6.41l-5.043 5.05-1.414-1.42L17.586 5H13V3zm-1.543 10.96L6.414 19H11v2H3v-8h2v4.59l5.043-5.05 1.414 1.42z" }) });
        },
        158385: (e, t, r) => {
            r.d(t, { Z: () => n });
            var s = r(552322);
            const n = (e) => (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, s.jsx)("path", { d: "M3 3h8v2H6.414l5.543 5.54-1.414 1.42L5 6.41V11H3V3zm16.5 5H14V6h5.5C20.881 6 22 7.12 22 8.5v11c0 1.38-1.119 2.5-2.5 2.5h-11C7.119 22 6 20.88 6 19.5V14h2v5.5c0 .28.224.5.5.5h11c.276 0 .5-.22.5-.5v-11c0-.28-.224-.5-.5-.5z" }) });
        },
        231783: (e, t, r) => {
            r.d(t, { Z: () => n });
            var s = r(552322);
            const n = (e) => (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, s.jsx)("path", { d: "M4 2h5v20H4V2zm11 20h5V2h-5v20z" }) });
        },
        992796: (e, t, r) => {
            r.d(t, { Z: () => n });
            var s = r(552322);
            const n = (e) => (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, s.jsx)("path", { d: "M21 12L4 2v20l17-10z" }) });
        },
        516718: (e, t, r) => {
            r.d(t, { Z: () => n });
            var s = r(552322);
            const n = (e) => (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, s.jsx)("path", { d: "M15 1.06v21.88L6.68 17H3.5C2.12 17 1 15.88 1 14.5v-5C1 8.12 2.12 7 3.5 7h3.18L15 1.06zM6 9H3.5c-.28 0-.5.22-.5.5v5c0 .28.22.5.5.5H6V9zm2 6.49l5 3.57V4.94L8 8.51v6.98zm10.5-6.9l2 2 2-2L23.91 10l-2 2 2 2-1.41 1.41-2-2-2 2L17.09 14l2-2-2-2 1.41-1.41z" }) });
        },
        4700: (e, t, r) => {
            r.d(t, { Z: () => n });
            var s = r(552322);
            const n = (e) => (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, s.jsx)("path", { d: "M15 22.94V1.06L6.68 7H3.5C2.12 7 1 8.12 1 9.5v5C1 15.88 2.12 17 3.5 17h3.18L15 22.94zM3.5 9H6v6H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zM13 19.06l-5-3.57V8.51l5-3.57v14.12zm5.95-12.01c-.24-.24-.49-.45-.75-.65l1-1.75c.41.29.8.62 1.16.99 3.52 3.51 3.52 9.21 0 12.72-.36.37-.75.7-1.16.99l-1-1.75c.26-.2.51-.41.75-.65 2.73-2.73 2.73-7.17 0-9.9zM17 12c0-.8-.31-1.52-.82-2.06l1.02-1.78c1.1.91 1.8 2.29 1.8 3.84s-.7 2.93-1.8 3.84l-1.02-1.78c.51-.54.82-1.26.82-2.06z" }) });
        },
        983706: (e, t, r) => {
            r.d(t, { T: () => o });
            var s = r(552322),
                n = r(254073),
                a = r.n(n),
                l = r(202784),
                i = r(801074);
            function o({ api: e, className: t, footer: r, header: n, id: o, items: c, nearEndThreshold: d = 5, nearStartThreshold: u = 2, onAtEnd: m, onAtStart: v, onNearEnd: h, onNearStart: x, onScroll: f, renderItem: p, ...g }) {
                const w = o ? `scroller-cache-${o}` : void 0,
                    E = c.length,
                    y = (0, l.useRef)(null),
                    j = (0, l.useRef)(0),
                    [b, S] = (0, l.useMemo)(() => {
                        if (!w) return [];
                        const e = sessionStorage.getItem(w);
                        if (!e) return [];
                        try {
                            return JSON.parse(e);
                        } catch (e) {
                            return [];
                        }
                    }, [w]);
                (0, l.useLayoutEffect)(() => {
                    const e = y.current;
                    if (e)
                        return (
                            b && e.scrollTo(b),
                            () => {
                                w && sessionStorage.setItem(w, JSON.stringify([e.scrollOffset, e.cache]));
                            }
                        );
                }, [w, b]),
                    (0, l.useImperativeHandle)(e, () => {
                        const e = y.current;
                        return {
                            findEndIndex: () => e?.findEndIndex() ?? 0,
                            findStartIndex: () => e?.findStartIndex() ?? 0,
                            getItemOffset: (t) => e?.getItemOffset(t) ?? 0,
                            getItemSize: (t) => e?.getItemSize(t) ?? 0,
                            scrollTo(t) {
                                e?.scrollTo(t);
                            },
                            scrollToIndex(t, r) {
                                e?.scrollToIndex(t, r);
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
                const T = a()(() => h?.(), 500),
                    N = a()(() => x?.(), 500),
                    C = (0, l.useCallback)(
                        (e) => {
                            const t = y.current;
                            if (!t) return;
                            const r = e,
                                s = r > j.current ? "forward" : "backward";
                            f?.(e, s), "backward" === s && (0 === r && v?.(), t.findStartIndex() <= u && N()), "forward" === s && (r + t.viewportSize - t.scrollSize == 0 && m?.(), E - t.findEndIndex() <= d && T()), (j.current = r);
                        },
                        [E, T, N, d, u, m, v, f],
                    );
                return (0, s.jsxs)("div", {
                    className: t,
                    style: { height: "100vh", overflowAnchor: "none", overflowY: "auto", width: "100%" },
                    children: [
                        n,
                        (0, s.jsx)(i.dM, {
                            as: "ul",
                            cache: S,
                            count: E,
                            item: "li",
                            onScroll: C,
                            ref: y,
                            ...g,
                            children: (e) => {
                                const t = c[e];
                                return p(t, e);
                            },
                        }),
                        r,
                    ],
                });
            }
        },
        917317: (e, t, r) => {
            r.d(t, { Ol: () => i, SZ: () => c, Zb: () => l, aY: () => d, eW: () => u, ll: () => o });
            var s = r(552322),
                n = r(202784),
                a = r(31674);
            const l = n.forwardRef(({ className: e, ...t }, r) => (0, s.jsx)("div", { ref: r, className: (0, a.cn)("rounded-xl border bg-card text-text shadow", e), ...t }));
            l.displayName = "Card";
            const i = n.forwardRef(({ className: e, ...t }, r) => (0, s.jsx)("div", { ref: r, className: (0, a.cn)("flex flex-col space-y-1.5 p-6", e), ...t }));
            i.displayName = "CardHeader";
            const o = n.forwardRef(({ className: e, ...t }, r) => (0, s.jsx)("div", { ref: r, className: (0, a.cn)("font-semibold leading-none tracking-tight", e), ...t }));
            o.displayName = "CardTitle";
            const c = n.forwardRef(({ className: e, ...t }, r) => (0, s.jsx)("div", { ref: r, className: (0, a.cn)("text-subtext2 text-gray-700", e), ...t }));
            c.displayName = "CardDescription";
            const d = n.forwardRef(({ className: e, ...t }, r) => (0, s.jsx)("div", { ref: r, className: (0, a.cn)("p-6 pt-0", e), ...t }));
            d.displayName = "CardContent";
            const u = n.forwardRef(({ className: e, ...t }, r) => (0, s.jsx)("div", { ref: r, className: (0, a.cn)("flex items-center p-6 pt-0", e), ...t }));
            u.displayName = "CardFooter";
        },
        476865: (e, t, r) => {
            r.d(t, { SP: () => o, dr: () => i, mQ: () => l, nU: () => c });
            var s = r(552322),
                n = r(582493),
                a = r(31674);
            function l({ className: e, ...t }) {
                return (0, s.jsx)(n.fC, { "data-slot": "tabs", className: (0, a.cn)("flex flex-col gap-2", e), ...t });
            }
            function i({ className: e, ...t }) {
                return (0, s.jsx)(n.aV, { "data-slot": "tabs-list", className: (0, a.cn)("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-1", e), ...t });
            }
            function o({ className: e, ...t }) {
                return (0, s.jsx)(n.xz, { "data-slot": "tabs-trigger", className: (0, a.cn)("data-[state=active]:bg-background data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring inline-flex flex-1 items-center justify-center gap-1.5 rounded-md px-2 py-1 text-subtext1 font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), ...t });
            }
            function c({ className: e, ...t }) {
                return (0, s.jsx)(n.VY, { "data-slot": "tabs-content", className: (0, a.cn)("flex-1 outline-none", e), ...t });
            }
        },
        651782: (e, t, r) => {
            r.d(t, { X: () => n });
            var s = r(202784);
            const n = (e) => {
                const [t, r] = (0, s.useState)(!1);
                return (
                    (0, s.useEffect)(() => {
                        const t = e.current;
                        function s() {
                            r(!0);
                        }
                        function n() {
                            r(!1);
                        }
                        return (
                            t && (t.addEventListener("mouseenter", s), t.addEventListener("mouseleave", n)),
                            () => {
                                t && (t.removeEventListener("mouseenter", s), t.removeEventListener("mouseleave", n));
                            }
                        );
                    }, [e]),
                    t
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.XChat-8eba0336.4ec1897a.js.map

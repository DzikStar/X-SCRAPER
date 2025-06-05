"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame~-7bb1b8da"],
    {
        267663: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(202784),
                i = n(325686);
            const a = ({ props: e, style: t }) => r.createElement(i.Z, { style: { flexGrow: 1, flexShrink: 1, flexBasis: "auto", ...t } });
        },
        152381: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                i = n(325686),
                a = n(167630),
                o = n(392237),
                s = n(111677);
            const c = n.n(s)().c02e7e3c,
                l = o.default.create((e) => ({ spinner: { alignItems: "center" } })),
                d = ({ props: e, style: t }) => {
                    const n = e.int("size"),
                        o = n ? { width: n, height: n } : void 0;
                    return r.createElement(i.Z, { style: [l.spinner, o, t] }, r.createElement(a.Z, { "aria-label": c, size: n ?? "small" }));
                };
        },
        755534: (e, t, n) => {
            n.d(t, { o: () => r });
            const r = 140;
        },
        766225: (e, t, n) => {
            n.d(t, { AH: () => s, rX: () => c });
            n(136728), n(571372);
            var r = n(202784),
                i = n(837880),
                a = n(755534);
            const o = r.createContext({ navigateStory: () => {}, navigateElement: () => {}, storyPagerState: { stories: [], activeStory: 0 }, initializeStories: () => {}, initializeStoryElements: () => {}, onClose: () => {}, horizontalDragFraction: 0, setHorizontalDragFraction: () => {}, navigateStoryWithTransition: () => {} }),
                s = ({ children: e, onClose: t }) => {
                    const [n, s] = r.useState({ stories: [], activeStory: 0 }),
                        [c, l] = r.useState(0),
                        d = r.useCallback(() => {
                            t?.();
                        }, [t]),
                        p = r.useCallback((e) => {
                            const t = [];
                            for (let n = 0; n < e; n++) t.push({ index: n, elements: [], activeElement: 0 });
                            s((e) => ({ ...e, stories: t }));
                        }, []),
                        h = r.useCallback((e, t) => {
                            s((n) => {
                                const r = n.stories[t];
                                if (!r) throw new Error(`Story did not exist with id: ${t}`);
                                const i = [];
                                for (let t = 0; t < e; t++) i.push({ index: t });
                                const a = { ...r, elements: i },
                                    o = [...n.stories];
                                return (o[t] = a), { ...n, stories: o };
                            });
                        }, []),
                        u = r.useCallback((e) => {
                            s((t) => ({ ...t, activeStory: (0, i.Z)(t.activeStory + e, 0, t.stories.length - 1) }));
                        }, []),
                        m = r.useCallback(
                            (e) => {
                                s((t) => {
                                    const n = [...t.stories],
                                        r = t.activeStory,
                                        a = n[r].activeElement + e,
                                        o = n[r].elements.length - 1;
                                    if (a > o) return u(1), t;
                                    if (a < 0) return u(-1), t;
                                    const s = (0, i.Z)(a, 0, o);
                                    return (n[r] = { ...n[r], activeElement: s }), { ...t, stories: [...n] };
                                });
                            },
                            [u],
                        ),
                        g = r.useCallback(
                            (e) => {
                                const t = n.activeStory + e;
                                t < 0 ||
                                    t > n.stories.length - 1 ||
                                    (l(-1 * e),
                                    setTimeout(() => {
                                        u(e), l(0.001);
                                    }, a.o));
                            },
                            [u, n.activeStory, n.stories.length],
                        ),
                        y = { navigateStory: u, navigateElement: m, storyPagerState: n, initializeStories: p, initializeStoryElements: h, onClose: d, horizontalDragFraction: c, setHorizontalDragFraction: l, navigateStoryWithTransition: g };
                    return r.createElement(o.Provider, { value: y }, e);
                };
            function c() {
                const e = r.useContext(o);
                if (void 0 === e) throw new Error("useStoryPagerContext was used outside of its provider StoryPagerContextProvider");
                return e;
            }
        },
        669189: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(202784),
                i = n(325686);
            const a = n(392237).default.create((e) => ({ container: { height: "100%", width: "100%" } })),
                o = ({ children: e }) => {
                    if (e) return r.createElement(i.Z, { style: a.container }, e);
                };
        },
        944047: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                i = n(325686),
                a = n(392237),
                o = n(187669),
                s = n(59669),
                c = n(766225);
            const l = ({ isActive: e, isComplete: t }) => {
                    const { currentTimeMs: n, durationMs: a } = (0, s.wR)();
                    let o = 0;
                    if (t) o = 100;
                    else if (e) {
                        const e = (n || 0) / (a || 1);
                        o = 100 * Math.max(0, Math.min(1, e));
                    }
                    const c = { width: `${o}%` };
                    return r.createElement(i.Z, { style: d.progressIndicator }, r.createElement(i.Z, { style: [d.progressIndicatorFiller, c] }));
                },
                d = a.default.create((e) => ({ container: { height: "100%", width: "100%" }, pillContainer: { zIndex: 101, position: "absolute", top: 0, height: e.spaces.space32, display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center", justifyContent: "center", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16, width: "100%" }, progressIndicator: { borderRadius: e.borderRadii.medium, height: e.spaces.space4, flexGrow: 1, backgroundColor: e.colors.alwaysBaseGray500, overflow: "hidden" }, progressIndicatorFiller: { height: e.spaces.space4, backgroundColor: e.colors.buttonAlwaysWhite, width: 0 } })),
                p = ({ children: e, props: t }) => {
                    const n = t.int("index") ?? 0,
                        { initializeStoryElements: a, navigateElement: p, navigateStoryWithTransition: h, storyPagerState: u } = (0, c.rX)(),
                        m = u.stories[n],
                        { setTracksFinished: g, tracksFinished: y } = (0, s.wR)();
                    r.useEffect(() => {
                        if (y) {
                            const e = u.stories[u.activeStory];
                            e.activeElement === e.elements.length - 1 ? h(1) : p(1), g?.(!1);
                        }
                    }, [p, h, g, u.activeStory, u.stories, y]),
                        (0, o.q)(() => {
                            a(e?.length || 0, n);
                        });
                    const f = m?.activeElement || 0;
                    if (e && m)
                        return r.createElement(
                            i.Z,
                            { style: d.container },
                            r.createElement(
                                i.Z,
                                { style: d.pillContainer },
                                e.map((e, t) => r.createElement(l, { isActive: t === f, isComplete: t < f, key: t })),
                            ),
                            e[f],
                        );
                };
        },
        421855: (e, t, n) => {
            n.d(t, { Z: () => E });
            var r = n(202784),
                i = n(325686),
                a = n(393058),
                o = n(537392),
                s = n(392237),
                c = n(154003),
                l = n(894966),
                d = n(568320),
                p = n(83515),
                h = n(926628),
                u = n(837880),
                m = n(187669),
                g = n(648839),
                y = n(59669),
                f = n(755534),
                v = n(766225);
            const w = ({ children: e }) => {
                    const { horizontalDragFraction: t, initializeStories: n, navigateElement: w, navigateStoryWithTransition: E, setHorizontalDragFraction: b, storyPagerState: S } = (0, v.rX)(),
                        Z = a.Z.isTouchSupported(),
                        C = r.useRef(null),
                        k = S.stories?.[S.activeStory],
                        I = C.current?.getBoundingClientRect(),
                        z = I?.width || 0,
                        F = I?.left || 0,
                        [P, M] = r.useState(!1),
                        [T, D, H] = (0, o.Zx)(({ windowWidth: e }) => [e > s.default.theme.breakpoints.medium, e > s.default.theme.breakpoints.large, e > s.default.theme.breakpoints.xLarge]),
                        R = !T,
                        $ = (90 * t).toFixed(1),
                        B = (100 * t).toFixed(1),
                        W = 0 === t || 1 === t || -1 === t ? `transform ${f.o}ms ease-in` : "none",
                        A = r.useMemo(() => ({ transition: W, transform: `translateZ(-${z / 2}px) rotate3d(0,1,0,${$}deg)` }), [$, W, z]),
                        X = r.useMemo(() => ({ transition: W, transform: `translateX(${B}%)` }), [W, B]),
                        L = r.useMemo(() => {
                            if (R) return { transform: `translateZ(${z / 2}px)` };
                        }, [R, z]),
                        _ = r.useMemo(() => (R ? { transform: `rotate3d(0,1,0,-90deg) translateZ(${z / 2}px)` } : { transform: "translateX(-100%)" }), [R, z]),
                        G = r.useMemo(() => (R ? { transform: `rotate3d(0,1,0,90deg) translateZ(${z / 2}px)` } : { transform: "translateX(100%)" }), [R, z]),
                        j = r.useCallback(
                            (e) => {
                                const t = 0 === S.activeStory ? 0.1 : 1,
                                    n = S.activeStory === S.stories.length - 1 ? -0.1 : -1,
                                    r = (0, u.Z)(e, n, t);
                                b(r);
                            },
                            [b, S.activeStory, S.stories.length],
                        ),
                        q = r.useCallback(
                            (e) => {
                                const t = S.stories[S.activeStory];
                                e.clientX - F > z / 2 ? (t.activeElement === t.elements.length - 1 ? E(1) : w(1)) : 0 === t.activeElement ? E(-1) : w(-1);
                            },
                            [F, z, w, E, S.activeStory, S.stories],
                        ),
                        [V, J, U] = (0, g.Z)({ direction: "horizontal", swipeItemLength: z, handleFraction: j, handleTap: q, handleSwipe: E }),
                        K = r.useCallback(
                            (e) => {
                                C.current?.setPointerCapture(e.pointerId), V(e);
                            },
                            [V],
                        ),
                        N = r.useCallback(() => {
                            M(!P);
                        }, [P]),
                        O = r.useCallback((e) => {
                            e.stopPropagation();
                        }, []);
                    (0, m.q)(() => {
                        S.stories.length || n(e?.length || 0);
                    });
                    let Q = {};
                    T ? (Q = x.height600) : D ? (Q = x.height680) : H && (Q = x.height800);
                    const Y = r.useMemo(() => r.createElement(r.Fragment, null, r.createElement(c.ZP, { icon: r.createElement(l.default, { style: { color: "white" } }), onClick: q, onPointerDown: O, style: x.buttonLeft, type: "primaryText" }), r.createElement(c.ZP, { icon: r.createElement(d.default, { style: { color: "white" } }), onClick: q, onPointerDown: O, style: x.buttonRight, type: "primaryText" })), [O, q]),
                        ee = r.useMemo(() => r.createElement(c.ZP, { icon: P ? r.createElement(p.default, null) : r.createElement(h.default, null), onClick: N, onPointerDown: O, style: x.buttonMute, type: "primaryText" }), [N, O, P]);
                    if (e && k) {
                        const t = e[S.activeStory],
                            n = e[S.activeStory - 1],
                            a = e[S.activeStory + 1];
                        return r.createElement(i.Z, { onPointerDown: K, onPointerMove: J, onPointerUp: U, ref: C, style: [x.container, T && x.containerWideScreen, Q] }, r.createElement(i.Z, { style: R && x.perspectiveZone }, r.createElement(i.Z, { style: [x.cubeContainer, R ? A : X] }, r.createElement(i.Z, { style: [x.storyLeft, Q, _] }, n && !Z && Y, n && ee, r.createElement(y.rh, { isFocused: !1 }, n)), r.createElement(i.Z, { style: [x.focusedStory, Q, L] }, !Z && Y, ee, r.createElement(y.rh, { isFocused: !0, isMuted: P }, t)), r.createElement(i.Z, { style: [x.storyRight, Q, G] }, a && !Z && Y, a && ee, r.createElement(y.rh, { isFocused: !1 }, a)))));
                    }
                },
                x = s.default.create((e) => ({ container: { height: "100%", width: "100%", touchAction: "none", overflow: "hidden", userSelect: "none" }, containerWideScreen: { width: "100%", flexDirection: "column", justifyContent: "center", backgroundColor: e.colors.alwaysBlack }, height600: { height: "600px", maxHeight: "600px", minHeight: "600px" }, height680: { height: "680px", maxHeight: "680px", minHeight: "680px" }, height800: { height: "800px", maxHeight: "800px", minHeight: "800px" }, perspectiveZone: { height: "100%", width: "100%", perspective: "800px" }, cubeContainer: { height: "100%", width: "100%", transformStyle: "preserve-3d" }, focusedStory: { zIndex: e.componentZIndices.appBarZIndex, height: "100%", width: "100%" }, storyLeft: { zIndex: e.componentZIndices.appBarZIndex, position: "absolute", height: "100%", width: "100%" }, storyRight: { zIndex: e.componentZIndices.appBarZIndex, position: "absolute", height: "100%", width: "100%" }, buttonLeft: { backgroundColor: "rgba(0,0,0,0.7)", zIndex: e.componentZIndices.appBarZIndex, width: e.spaces.space32, height: e.spaces.space32, position: "absolute", top: `calc(50% - ${e.spaces.space16})`, start: e.spaces.space16 }, buttonRight: { backgroundColor: "rgba(0,0,0,0.7)", zIndex: e.componentZIndices.appBarZIndex, width: e.spaces.space32, height: e.spaces.space32, position: "absolute", top: `calc(50% - ${e.spaces.space16})`, end: e.spaces.space16 }, buttonMute: { backgroundColor: "rgba(0,0,0,0.7)", zIndex: e.componentZIndices.appBarZIndex, width: e.spaces.space32, height: e.spaces.space32, position: "absolute", bottom: e.spaces.space16, end: e.spaces.space16 } })),
                E = ({ ...e }) => r.createElement(v.AH, null, r.createElement(i.Z, { style: { height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, r.createElement(w, e)));
        },
        854785: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                i = n(325686),
                a = n(392237),
                o = n(187669),
                s = n(59669),
                c = n(766225);
            const l = ({ isActive: e, isComplete: t }) => {
                    const { currentTimeMs: n, durationMs: a } = (0, s.wR)();
                    let o = 0;
                    if (t) o = 100;
                    else if (e) {
                        const e = (n || 0) / (a || 1);
                        o = 100 * Math.max(0, Math.min(1, e));
                    }
                    const c = { width: `${o}%` };
                    return r.createElement(i.Z, { style: d.progressIndicator }, r.createElement(i.Z, { style: [d.progressIndicatorFiller, c] }));
                },
                d = a.default.create((e) => ({ container: { height: "100%", width: "100%" }, pillContainer: { zIndex: 101, position: "absolute", top: 0, height: e.spaces.space32, display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center", justifyContent: "center", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16, width: "100%" }, progressIndicator: { borderRadius: e.borderRadii.medium, height: e.spaces.space4, flexGrow: 1, backgroundColor: e.colors.alwaysBaseGray500, overflow: "hidden" }, progressIndicatorFiller: { height: e.spaces.space4, backgroundColor: e.colors.buttonAlwaysWhite, width: 0 } })),
                p = ({ children: e, p: t }) => {
                    const n = t.int("index") ?? 0,
                        { initializeStoryElements: a, navigateElement: p, navigateStoryWithTransition: h, storyPagerState: u } = (0, c.rX)(),
                        m = u.stories[n],
                        { setTracksFinished: g, tracksFinished: y } = (0, s.wR)();
                    r.useEffect(() => {
                        if (y) {
                            const e = u.stories[u.activeStory];
                            e.activeElement === e.elements.length - 1 ? h(1) : p(1), g?.(!1);
                        }
                    }, [p, h, g, u.activeStory, u.stories, y]),
                        (0, o.q)(() => {
                            a(e?.length || 0, n);
                        });
                    const f = m?.activeElement || 0;
                    if (e && m)
                        return r.createElement(
                            i.Z,
                            { style: d.container },
                            r.createElement(
                                i.Z,
                                { style: d.pillContainer },
                                e.map((e, t) => r.createElement(l, { isActive: t === f, isComplete: t < f, key: t })),
                            ),
                            e[f],
                        );
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame~-7bb1b8da.354458ba.js.map

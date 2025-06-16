(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame~-2b9410ca"],
    {
        648839: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => s });
            var a = r(202784);
            const s = ({ direction: e, handleFraction: t, handleSwipe: r, handleTap: s, swipeItemLength: n, swipeDistanceThreshold: i = n / 20, swipeTimeThreshold: o = 150 }) => {
                const c = a.useRef(0),
                    l = a.useRef(0),
                    d = a.useRef(0),
                    u = a.useCallback((t) => ("horizontal" === e ? t.clientX : t.clientY), [e]);
                return [
                    a.useCallback(
                        (e) => {
                            c.current || ((c.current = Date.now()), (l.current = u(e)));
                        },
                        [u],
                    ),
                    a.useCallback(
                        (e) => {
                            if (!c.current) return;
                            d.current = u(e);
                            const r = (d.current - l.current) / n;
                            t?.(r);
                        },
                        [u, t, n],
                    ),
                    a.useCallback(
                        (e) => {
                            if (((d.current = u(e)), !c.current)) return;
                            const a = Date.now() - c.current > o,
                                n = d.current - l.current,
                                p = Math.abs(n) > i;
                            t?.(0), (c.current = 0), a || p ? r?.(n < 0 ? 1 : -1) : s?.(e);
                        },
                        [u, t, r, s, i, o],
                    ),
                    !!c.current,
                ];
            };
        },
        736230: (e, t, r) => {
            "use strict";
            r.d(t, { CP: () => n, OG: () => i, TT: () => s, bP: () => l, mH: () => o, tX: () => c });
            var a = r(111677);
            const s = r.n(a)().g61ed8a4,
                n = "https://jf.x.com",
                i = "https://jf-t.x.com",
                o = "https://localhost.x.com:3000",
                c = "jfDev",
                l = Object.freeze({ MARCH_MADNESS_PICK: 1 });
        },
        355335: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => c, k: () => o });
            r(543673), r(240753), r(128399), r(136728);
            var a = r(202784),
                s = r(565058),
                n = r(400752),
                i = r(107267);
            const o = (0, s.cn)(!1),
                c = () => {
                    const e = (0, i.useHistory)(),
                        t = (0, i.useLocation)(),
                        [r, s] = (0, n.KO)(o);
                    a.useEffect(() => {
                        const e = new URLSearchParams(t.search).get("jfDev"),
                            r = sessionStorage.getItem("jfDev");
                        let a = !1;
                        e ? (("1" !== e && "true" !== e) || (a = !0), ("0" !== e && "false" !== e) || (a = !1)) : (a = "true" === r), a ? (s(!0), sessionStorage.setItem("jfDev", "true")) : (s(!1), sessionStorage.removeItem("jfDev"));
                    }, [t.search, s]);
                    const c = a.useCallback(
                        (r) => {
                            const a = new URLSearchParams(t.search);
                            r ? (a.set("jfDev", "1"), sessionStorage.setItem("jfDev", "true")) : (a.delete("jfDev"), sessionStorage.removeItem("jfDev"));
                            const n = a.toString();
                            e.push({ pathname: t.pathname, search: n }), s(r);
                        },
                        [e, t.pathname, t.search, s],
                    );
                    return {
                        isDev: r,
                        enableDev: a.useCallback(() => {
                            c(!0);
                        }, [c]),
                        disableDev: a.useCallback(() => {
                            c(!1);
                        }, [c]),
                    };
                };
        },
        553160: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => m });
            var a = r(202784),
                s = r(457311),
                n = r(111677),
                i = r.n(n),
                o = r(810641),
                c = r(519896),
                l = r(383675),
                d = r(293115);
            const u = i().e9f1fbcc,
                p = i().a3b80be6,
                h = () => a.createElement(s.Z, { header: u, message: p }),
                m = ({ children: e, p: t }) => {
                    const r = t.str("timelineId"),
                        s = t.str("name") ?? "JF-GenericURT",
                        n = t.str("scribe_page") ?? "jf-urt",
                        i = t.str("scribe_section") ?? void 0,
                        u = ((e) => a.useMemo(() => (e ? (0, l.R)(e, !1) : void 0), [e]))(r);
                    if (u) {
                        const e = { page: n, section: i };
                        return a.createElement(d.nO, { namespace: e }, a.createElement(o.Z, { module: u, prerollDisplayLocation: c.Nw.OTHER, refreshControl: null, renderEmptyState: h, title: s }));
                    }
                };
        },
        725102: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => I });
            var a = r(202784),
                s = r(244448),
                n = r(325686),
                i = r(466999),
                o = r(107267),
                c = r(392237),
                l = r(167630),
                d = r(111677),
                u = r.n(d),
                p = r(403808),
                h = r(323265),
                m = r(443781),
                g = r(125363),
                f = r(390387),
                y = r(929378),
                b = r(163889),
                v = r(725516);
            const w = Object.freeze({ light: "default", dark: "dim", darker: "dark", business: "business" }),
                S = u().ic6aa5f4,
                k = 327,
                E = 468,
                C = 500,
                x = 523,
                Z = c.default.create((e) => ({ container: { position: "relative", alignItems: "center" }, spinner: { alignItems: "center", position: "absolute", start: 0, end: 0, justifyContent: "center" }, label: { color: e.colors.text } })),
                I = ({ p: e }) => {
                    const t = e.str("publicKey") ?? e.str("webKey"),
                        { featureSwitches: r } = a.useContext(m.rC),
                        d = (0, v.z)(),
                        u = (0, g.v9)(f.OW),
                        I = (0, o.useLocation)(),
                        P = e.str("dataExchangeToken") ?? "",
                        M = e.str("name") ?? "arkose_token",
                        T = t ? r.getStringValue(t) : "",
                        R = a.useMemo(() => h.ZP.isWebView(), []),
                        F = R ? (window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "default") : w[c.default.theme.paletteName],
                        _ = a.useMemo(() => R || window.innerWidth < E, [R]),
                        [D, z] = a.useState(_ ? C : x),
                        [j, H] = a.useState(_ ? k : E),
                        [O, L] = a.useState(y.t.passive),
                        $ = a.useMemo(() => (_ ? Math.min((window.innerWidth - 32) / k, (window.innerHeight - 32) / C) : 1), [_]),
                        B = I.query?.guestId,
                        W = a.useMemo(() => (R && "string" == typeof B ? B : R ? "" : u || ""), [R, B, u]),
                        A = a.useCallback(() => {
                            y.Z.loadIframe(d, W, t || "", t || "");
                        }, [d, W, t]),
                        { change: N, submit: G, values: U } = a.useContext(s.q3),
                        [V, K] = a.useState("loading"),
                        X = (0, p.r)((e) => {
                            if ("string" == typeof e.data)
                                try {
                                    const r = JSON.parse(e.data);
                                    switch (r.eventId) {
                                        case "challenge-suppressed":
                                            y.Z.suppressedChallenge(d, W, t || "0", t || "0"), L(y.t.passive);
                                            break;
                                        case "challenge-shown":
                                            y.Z.shownChallenge(d, W, t || "0", t || "0"), L(y.t.interactive), K("shown");
                                            break;
                                        case "challenge-complete": {
                                            y.Z.completeChallenge(d, W, O, t || "0", t || "0");
                                            const e = r.payload.sessionToken;
                                            N(M, e), K("complete");
                                            break;
                                        }
                                        case "challenge-iframeSize":
                                            z(r.payload.frameHeight), H(r.payload.frameWidth);
                                            break;
                                        case "challenge-loaded":
                                            K("loaded");
                                            break;
                                        case "challenge-failed":
                                            K("failed");
                                            break;
                                        case "challenge-error":
                                            K("errored");
                                    }
                                } catch (e) {
                                    K("errored"), (0, b.ZP)(e);
                                }
                        });
                    a.useEffect(
                        () => (
                            window.addEventListener("message", X, !1),
                            () => {
                                window.removeEventListener("message", X, !1);
                            }
                        ),
                        [X],
                    );
                    const q = null != U[M],
                        J = a.useRef(!1);
                    return (
                        a.useEffect(() => {
                            q && !J.current && ((J.current = !0), G());
                        }, [q, G]),
                        a.createElement(n.Z, { style: Z.container }, a.createElement(n.Z, { style: [Z.spinner, { height: D }] }, "loading" === V || "loaded" === V ? a.createElement(l.Z, null) : "complete" === V ? a.createElement(i.Z, { style: Z.label }, S) : null), a.createElement("iframe", { height: D, id: "arkoseFrame", onLoad: A, src: [`https://iframe.arkoselabs.com/${T}/index.html?theme=${F}`, P && `&data=${P}`].filter(Boolean).join(""), style: { MozTransform: `scale(${$})`, OTransform: `scale(${$})`, WebkitTransform: `scale(${$})`, borderWidth: 0, MozTransformOrigin: "50% 0", OTransformOrigin: "50% 0", WebkitTransformOrigin: "50% 0", alignSelf: "center" }, title: "arkoseFrame", width: j }))
                    );
                };
        },
        755534: (e, t, r) => {
            "use strict";
            r.d(t, { o: () => a });
            const a = 140;
        },
        766225: (e, t, r) => {
            "use strict";
            r.d(t, { AH: () => o, rX: () => c });
            r(136728), r(571372);
            var a = r(202784),
                s = r(837880),
                n = r(755534);
            const i = a.createContext({ navigateStory: () => {}, navigateElement: () => {}, storyPagerState: { stories: [], activeStory: 0 }, initializeStories: () => {}, initializeStoryElements: () => {}, onClose: () => {}, horizontalDragFraction: 0, setHorizontalDragFraction: () => {}, navigateStoryWithTransition: () => {} }),
                o = ({ children: e, onClose: t }) => {
                    const [r, o] = a.useState({ stories: [], activeStory: 0 }),
                        [c, l] = a.useState(0),
                        d = a.useCallback(() => {
                            t?.();
                        }, [t]),
                        u = a.useCallback((e, t) => {
                            const r = [];
                            for (let a = 0; a < e; a++) r.push({ index: a, elements: [], activeElement: t ?? 0 });
                            o((e) => ({ ...e, stories: r }));
                        }, []),
                        p = a.useCallback((e, t) => {
                            o((r) => {
                                const a = r.stories[t];
                                if (!a) throw new Error(`Story did not exist with id: ${t}`);
                                const s = [];
                                for (let t = 0; t < e; t++) s.push({ index: t });
                                const n = { ...a, elements: s },
                                    i = [...r.stories];
                                return (i[t] = n), { ...r, stories: i };
                            });
                        }, []),
                        h = a.useCallback((e) => {
                            o((t) => ({ ...t, activeStory: (0, s.Z)(t.activeStory + e, 0, t.stories.length - 1) }));
                        }, []),
                        m = a.useCallback(
                            (e) => {
                                o((t) => {
                                    const r = [...t.stories],
                                        a = t.activeStory,
                                        n = r[a].activeElement + e,
                                        i = r[a].elements.length - 1;
                                    if (n > i) return h(1), t;
                                    if (n < 0) return h(-1), t;
                                    const o = (0, s.Z)(n, 0, i);
                                    return (r[a] = { ...r[a], activeElement: o }), { ...t, stories: [...r] };
                                });
                            },
                            [h],
                        ),
                        g = a.useCallback(
                            (e) => {
                                const t = r.activeStory + e;
                                t < 0 ||
                                    t > r.stories.length - 1 ||
                                    (l(-1 * e),
                                    setTimeout(() => {
                                        h(e), l(0.001);
                                    }, n.o));
                            },
                            [h, r.activeStory, r.stories.length],
                        ),
                        f = { navigateStory: h, navigateElement: m, storyPagerState: r, initializeStories: u, initializeStoryElements: p, onClose: d, horizontalDragFraction: c, setHorizontalDragFraction: l, navigateStoryWithTransition: g };
                    return a.createElement(i.Provider, { value: f }, e);
                };
            function c() {
                const e = a.useContext(i);
                if (void 0 === e) throw new Error("useStoryPagerContext was used outside of its provider StoryPagerContextProvider");
                return e;
            }
        },
        421855: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => k });
            var a = r(807896),
                s = r(202784),
                n = r(325686),
                i = r(393058),
                o = r(537392),
                c = r(392237),
                l = r(154003),
                d = r(894966),
                u = r(568320),
                p = r(83515),
                h = r(926628),
                m = r(837880),
                g = r(187669),
                f = r(648839),
                y = r(59669),
                b = r(755534),
                v = r(766225);
            const w = ({ children: e, initialIndex: t }) => {
                    const { horizontalDragFraction: r, initializeStories: a, navigateElement: w, navigateStoryWithTransition: k, setHorizontalDragFraction: E, storyPagerState: C } = (0, v.rX)(),
                        x = i.Z.isTouchSupported(),
                        Z = s.useRef(null),
                        I = C.stories?.[C.activeStory],
                        P = Z.current?.getBoundingClientRect(),
                        M = P?.width || 0,
                        T = P?.left || 0,
                        [R, F] = s.useState(!1),
                        [_, D, z] = (0, o.Zx)(({ windowWidth: e }) => [e > c.default.theme.breakpoints.medium, e > c.default.theme.breakpoints.large, e > c.default.theme.breakpoints.xLarge]),
                        j = !_,
                        H = (90 * r).toFixed(1),
                        O = (100 * r).toFixed(1),
                        L = 0 === r || 1 === r || -1 === r ? `transform ${b.o}ms ease-in` : "none",
                        $ = s.useMemo(() => ({ transition: L, transform: `translateZ(-${M / 2}px) rotate3d(0,1,0,${H}deg)` }), [H, L, M]),
                        B = s.useMemo(() => ({ transition: L, transform: `translateX(${O}%)` }), [L, O]),
                        W = s.useMemo(() => {
                            if (j) return { transform: `translateZ(${M / 2}px)` };
                        }, [j, M]),
                        A = s.useMemo(() => (j ? { transform: `rotate3d(0,1,0,-90deg) translateZ(${M / 2}px)` } : { transform: "translateX(-100%)" }), [j, M]),
                        N = s.useMemo(() => (j ? { transform: `rotate3d(0,1,0,90deg) translateZ(${M / 2}px)` } : { transform: "translateX(100%)" }), [j, M]),
                        G = s.useCallback(
                            (e) => {
                                const t = 0 === C.activeStory ? 0.1 : 1,
                                    r = C.activeStory === C.stories.length - 1 ? -0.1 : -1,
                                    a = (0, m.Z)(e, r, t);
                                E(a);
                            },
                            [E, C.activeStory, C.stories.length],
                        ),
                        U = s.useCallback(
                            (e) => {
                                const t = C.stories[C.activeStory];
                                e.clientX - T > M / 2 ? (t.activeElement === t.elements.length - 1 ? k(1) : w(1)) : 0 === t.activeElement ? k(-1) : w(-1);
                            },
                            [T, M, w, k, C.activeStory, C.stories],
                        ),
                        [V, K, X] = (0, f.Z)({ direction: "horizontal", swipeItemLength: M, handleFraction: G, handleTap: U, handleSwipe: k }),
                        q = s.useCallback(
                            (e) => {
                                Z.current?.setPointerCapture(e.pointerId), V(e);
                            },
                            [V],
                        ),
                        J = s.useCallback(() => {
                            F(!R);
                        }, [R]),
                        Q = s.useCallback((e) => {
                            e.stopPropagation();
                        }, []);
                    (0, g.q)(() => {
                        C.stories.length || a(e?.length || 0, t ?? 0);
                    });
                    let Y = {};
                    _ ? (Y = S.height600) : D ? (Y = S.height680) : z && (Y = S.height800);
                    const ee = s.useMemo(() => s.createElement(s.Fragment, null, s.createElement(l.ZP, { icon: s.createElement(d.default, { style: { color: "white" } }), onClick: U, onPointerDown: Q, style: S.buttonLeft, type: "primaryText" }), s.createElement(l.ZP, { icon: s.createElement(u.default, { style: { color: "white" } }), onClick: U, onPointerDown: Q, style: S.buttonRight, type: "primaryText" })), [Q, U]),
                        te = s.useMemo(() => s.createElement(l.ZP, { icon: R ? s.createElement(p.default, null) : s.createElement(h.default, null), onClick: J, onPointerDown: Q, style: S.buttonMute, type: "primaryText" }), [J, Q, R]);
                    if (e && I) {
                        const t = e[C.activeStory],
                            r = e[C.activeStory - 1],
                            a = e[C.activeStory + 1];
                        return s.createElement(n.Z, { onPointerDown: q, onPointerMove: K, onPointerUp: X, ref: Z, style: [S.container, _ && S.containerWideScreen, Y] }, s.createElement(n.Z, { style: j && S.perspectiveZone }, s.createElement(n.Z, { style: [S.cubeContainer, j ? $ : B] }, s.createElement(n.Z, { style: [S.storyLeft, Y, A] }, r && !x && ee, r && te, s.createElement(y.rh, { isFocused: !1 }, r)), s.createElement(n.Z, { style: [S.focusedStory, Y, W] }, !x && ee, te, s.createElement(y.rh, { isFocused: !0, isMuted: R }, t)), s.createElement(n.Z, { style: [S.storyRight, Y, N] }, a && !x && ee, a && te, s.createElement(y.rh, { isFocused: !1 }, a)))));
                    }
                },
                S = c.default.create((e) => ({ container: { height: "100%", width: "100%", touchAction: "none", overflow: "hidden", userSelect: "none" }, containerWideScreen: { width: "100%", flexDirection: "column", justifyContent: "center", backgroundColor: e.colors.alwaysBlack }, height600: { height: "600px", maxHeight: "600px", minHeight: "600px" }, height680: { height: "680px", maxHeight: "680px", minHeight: "680px" }, height800: { height: "800px", maxHeight: "800px", minHeight: "800px" }, perspectiveZone: { height: "100%", width: "100%", perspective: "800px" }, cubeContainer: { height: "100%", width: "100%", transformStyle: "preserve-3d" }, focusedStory: { zIndex: e.componentZIndices.appBarZIndex, height: "100%", width: "100%" }, storyLeft: { zIndex: e.componentZIndices.appBarZIndex, position: "absolute", height: "100%", width: "100%" }, storyRight: { zIndex: e.componentZIndices.appBarZIndex, position: "absolute", height: "100%", width: "100%" }, buttonLeft: { backgroundColor: "rgba(0,0,0,0.7)", zIndex: e.componentZIndices.appBarZIndex, width: e.spaces.space32, height: e.spaces.space32, position: "absolute", top: `calc(50% - ${e.spaces.space16})`, start: e.spaces.space16 }, buttonRight: { backgroundColor: "rgba(0,0,0,0.7)", zIndex: e.componentZIndices.appBarZIndex, width: e.spaces.space32, height: e.spaces.space32, position: "absolute", top: `calc(50% - ${e.spaces.space16})`, end: e.spaces.space16 }, buttonMute: { backgroundColor: "rgba(0,0,0,0.7)", zIndex: e.componentZIndices.appBarZIndex, width: e.spaces.space32, height: e.spaces.space32, position: "absolute", bottom: e.spaces.space16, end: e.spaces.space16 } })),
                k = ({ initialIndex: e = 0, ...t }) => s.createElement(v.AH, null, s.createElement(n.Z, { style: { height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, s.createElement(w, (0, a.Z)({}, t, { initialIndex: e }))));
        },
        59669: (e, t, r) => {
            "use strict";
            r.d(t, { rh: () => n, wR: () => i });
            var a = r(202784);
            const s = a.createContext({ currentTimeMs: 0, setCurrentTimeMs: () => {}, durationMs: 0, setDurationMs: () => {}, tracksFinished: !1, setTracksFinished: () => {} }),
                n = ({ children: e, isFocused: t, isMuted: r }) => {
                    const [n, i] = a.useState(0),
                        [o, c] = a.useState(0),
                        [l, d] = a.useState(!1),
                        u = a.useCallback(
                            (e) => {
                                e !== l && d(e);
                            },
                            [l],
                        ),
                        p = { currentTimeMs: n, setCurrentTimeMs: i, durationMs: o, setDurationMs: c, tracksFinished: l, setTracksFinished: u, isFocused: t, isMuted: r };
                    return a.createElement(s.Provider, { value: p }, e);
                };
            function i() {
                const e = a.useContext(s);
                return e || {};
            }
        },
        824626: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => O });
            var a = r(202784),
                s = r(244448),
                n = r(400752),
                i = r(107267),
                o = r(392237),
                c = r(420182),
                l = r(443781),
                d = r(689048),
                u = r(390387),
                p = r(725405),
                h = r(736230),
                m = r(355335),
                g = r(553160),
                f = r(725102),
                y = r(421855),
                b = r(325686),
                v = r(187669),
                w = r(59669),
                S = r(766225);
            const k = ({ isActive: e, isComplete: t }) => {
                    const { currentTimeMs: r, durationMs: s } = (0, w.wR)();
                    let n = 0;
                    if (t) n = 100;
                    else if (e) {
                        const e = (r || 0) / (s || 1);
                        n = 100 * Math.max(0, Math.min(1, e));
                    }
                    const i = { width: `${n}%` };
                    return a.createElement(b.Z, { style: E.progressIndicator }, a.createElement(b.Z, { style: [E.progressIndicatorFiller, i] }));
                },
                E = o.default.create((e) => ({ container: { height: "100%", width: "100%" }, pillContainer: { zIndex: 101, position: "absolute", top: 0, height: e.spaces.space32, display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center", justifyContent: "center", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16, width: "100%" }, progressIndicator: { borderRadius: e.borderRadii.medium, height: e.spaces.space4, flexGrow: 1, backgroundColor: e.colors.alwaysBaseGray500, overflow: "hidden" }, progressIndicatorFiller: { height: e.spaces.space4, backgroundColor: e.colors.buttonAlwaysWhite, width: 0 } })),
                C = ({ children: e, p: t }) => {
                    const r = t.int("index") ?? 0,
                        { initializeStoryElements: s, navigateElement: n, navigateStoryWithTransition: i, storyPagerState: o } = (0, S.rX)(),
                        c = o.stories[r],
                        { setTracksFinished: l, tracksFinished: d } = (0, w.wR)();
                    a.useEffect(() => {
                        if (d) {
                            const e = o.stories[o.activeStory];
                            e.activeElement === e.elements.length - 1 ? i(1) : n(1), l?.(!1);
                        }
                    }, [n, i, l, o.activeStory, o.stories, d]),
                        (0, v.q)(() => {
                            s(e?.length || 0, r);
                        });
                    const u = c?.activeElement || 0;
                    if (e && c)
                        return a.createElement(
                            b.Z,
                            { style: E.container },
                            a.createElement(
                                b.Z,
                                { style: E.pillContainer },
                                e.map((e, t) => a.createElement(k, { isActive: t === u, isComplete: t < u, key: t })),
                            ),
                            e[u],
                        );
                };
            var x = r(731708),
                Z = r(127957),
                I = r(125363);
            const P = { base: { display: "flex", flexShrink: 1, flexBasis: "auto", width: "100%", height: "100%", overflow: "hidden" } },
                M = ({ p: e }) => {
                    const t = e.str("broadcastId"),
                        r = e.bool("autoplay") ?? !0,
                        s = e.bool("muted") ?? !0,
                        n = e.bool("minimal") ?? !1,
                        i = e.bool("enablePip") ?? !1,
                        o = (0, I.I0)(),
                        c = a.useMemo(() => o((e, t, { api: r }) => r.getHttpClient()), [o]);
                    if (!t) return a.createElement(x.ZP, null, "Broadcast not provided");
                    const l = { type: "broadcast", id: t };
                    return a.createElement(b.Z, { style: [P.base].filter(Boolean) }, a.createElement(Z.Z, { autoplay: r, config: "auto", controls: n, displayOptions: { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 }, enablePip: i, httpClient: c, initiallyMuted: s, precache: !0, size: "fill", twitterAuthedHttpClient: c, videoId: l }));
                };
            var T = r(45843),
                R = r(738584),
                F = r(872415),
                _ = r(614425);
            const D = { base: { display: "flex", flexShrink: 1, flexBasis: "auto", width: "100%", height: "100%", overflow: "hidden", maxWidth: "100vw" }, aspectRatioStyle: (e) => ({ aspectRatio: `${e ?? "auto"}` }), posterImage: { height: "100%", width: "100%", zIndex: -1, position: "absolute" } },
                z = ({ p: e }) => {
                    const t = e.url("src"),
                        r = e.str("alt"),
                        s = e.int("ar"),
                        n = e.int("cropAR"),
                        i = s && void 0 !== s,
                        o = void 0 !== n && n && !Number.isNaN(n),
                        c = e.int("duration"),
                        d = e.url("poster"),
                        u = e.str("postId"),
                        p = e.bool("autoplay") ?? !0,
                        h = e.bool("muted") ?? !0,
                        m = e.bool("loop") ?? !1,
                        g = e.bool("showControls") ?? !1,
                        f = (0, I.I0)(),
                        { featureSwitches: y } = (0, l.QZ)(),
                        v = a.useMemo(() => f((e, t, { api: r }) => r.getHttpClient()), [f]),
                        { isFocused: S, isMuted: k, setCurrentTimeMs: E, setDurationMs: C, setTracksFinished: Z } = (0, w.wR)(),
                        P = a.useRef(),
                        M = a.useRef();
                    a.useEffect(() => {
                        p && P.current?.playPreview();
                    }, [p]),
                        a.useEffect(() => {
                            S && P.current?.play();
                        }, [S]);
                    const z = a.useRef(!1);
                    a.useEffect(() => {
                        const e = P.current,
                            t = M.current;
                        t && e && (z.current || k ? k !== t.isMuted && (k ? ((z.current = !0), e.mute()) : e.unmute()) : (z.current = !0));
                    }, [k]);
                    const j = a.useCallback(
                            (e) => {
                                (P.current = e), S || e.pause();
                            },
                            [S],
                        ),
                        H = a.useCallback(
                            (e) => {
                                M.current = e;
                                const t = e.tracks?.[0]?.currentTimeMs,
                                    r = e.tracks?.[0]?.durationMs;
                                Z?.(e.tracksFinished), E?.(t), C?.(r);
                            },
                            [E, C, Z],
                        );
                    return t
                        ? a.createElement(
                              b.Z,
                              { style: [D.base, i ? D.aspectRatioStyle(s ?? 1) : null, o ? D.aspectRatioStyle(n ?? 1) : null].filter(Boolean) },
                              a.createElement(R.Z, { "aria-label": r ?? "video", autoplay: p, basePlayerClass: _.Y7, configType: "static", contentId: u ?? "", contentType: "media_entity", displayOptions: { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 }, durationMs: c ?? 0, enableVideoPlayerCaptionRendering: !0, featureProvider: y, httpClient: v, initiallyMuted: h, loop: m, onApiReady: j, onStateUpdate: H, playbackSessionId: u ?? "", poster: d ?? "", precache: !0, size: "fill", twitterAuthedHttpClient: v, variants: [{ src: t, type: "application/x-mpegURL" }] }, ({ containerRef: e, guestsState: t, playerApi: r, playerState: s }) => (g ? a.createElement(F.Z, { containerRef: e, enablePiP: !0, guestsState: t, playerApi: r, playerState: s, useKeyboardShortcuts: !0 }) : null)),
                              d && a.createElement(T.Z, { source: d, style: D.posterImage }),
                          )
                        : a.createElement(x.ZP, null, "Video not provided");
                },
                j = (0, s.GZ)("JetfuelV2 Runtime");
            const H = (e, t) => (e ? h.mH : t ? h.OG : h.CP),
                O = function ({ children: e }) {
                    const [t] = (0, n.KO)(c.dd),
                        r = t.apiClient,
                        [h] = (0, n.KO)(c.qc),
                        b = h.getState(),
                        v = (0, i.useHistory)(),
                        w = (0, u.F5)(b),
                        S = Intl.DateTimeFormat().resolvedOptions().timeZone,
                        k = (0, p.Z)(),
                        [E] = (0, n.KO)(m.k),
                        { featureSwitches: x } = a.useContext(l.rC),
                        Z = location.host.includes("x.com") && x.isTrue("x_jetfuel_enable_test_cluster"),
                        I = "darker" === o.default.theme.paletteName ? "dark" : "dark" === o.default.theme.paletteName ? "dim" : o.default.theme.paletteName,
                        P = a.useMemo(() => {
                            const e = {};
                            return (e["x-jf-client-theme"] = I), (e["x-jf-v"] = "JP-4"), S && (e.timezone = S), w && (e["accept-language"] = (0, d.o)(w)), e;
                        }, [I, S, w]),
                        T = H(E, Z),
                        R = a.useMemo(
                            () => ({
                                httpPOST: async (e, t) => {
                                    let a,
                                        s = !1;
                                    const n = e.startsWith("/") ? e : `/${e}`;
                                    try {
                                        (a = await r.jetfuelForm(n, P, Object.fromEntries(t.entries()), T)), (s = !0);
                                    } catch (e) {
                                        s = !1;
                                    }
                                    return { ok: s, data: a };
                                },
                                httpGet: async (e) => {
                                    let t,
                                        a = !1;
                                    const s = e.startsWith("/") ? e : `/${e}`;
                                    try {
                                        (t = await r.jetfuel(s, P, T)), (a = !0);
                                    } catch (e) {
                                        a = !1;
                                    }
                                    return { ok: a, data: t };
                                },
                            }),
                            [r, P, T],
                        );
                    a.useEffect(() => {
                        document.body.setAttribute("data-theme", I ?? "light");
                    }, [I]);
                    const F = a.useMemo(() => {
                        (j.net = R), (j.history = v), (j.analytics = k);
                        const e = { "x.com.GenericURT": g.Z, "x.com.Video": z, "x.com.Broadcast": M, StoryPager: y.Z, "StoryPager.Story": C, SignupArkoseSecurityChallenge: f.Z };
                        return j.addComponentOverride(e), j;
                    }, [R, v, k]);
                    return "undefined" == typeof window ? e : a.createElement(s.N_, { analytics: k, runtime: F }, e);
                };
        },
        383675: (e, t, r) => {
            "use strict";
            r.d(t, { R: () => c, Z: () => o });
            var a = r(503768),
                s = r(644829),
                n = r(750085),
                i = r(218951);
            const o = ({ endpointParams: e, endpointUrl: t, isUserRefreshable: r, timelineId: a }) => (0, i.Z)({ timelineId: a, isUserRefreshable: r, network: { getEndpoint: (e) => e.withEndpoint(s.Z).fetchGeneric, getEndpointParams: ({ count: r, cursor: a }) => ({ ...e, cursor: "string" == typeof a ? a : void 0, count: r, endpointUrl: t }) }, context: "FETCH_TIMELINE", perfKey: "generic" }),
                c = (e, t) => (0, i.Z)({ timelineId: `generic-graphql-timeline-${e}`, isUserRefreshable: t, network: { getEndpoint: (e) => e.withEndpoint(a.ZP).fetchGenericTimelineById, getEndpointParams: ({ count: t, cursor: r }) => ({ cursor: "string" == typeof r ? r : void 0, count: t, timelineId: e }) }, formatResponse: n.Z, context: "FETCH_GENERIC_TIMELINE_GQL", perfKey: "genericGQL" });
        },
        929378: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => o, t: () => i });
            var a = r(323265);
            const s = "arkose-subtask",
                n = "arkose",
                i = Object.freeze({ passive: "PASSIVE", interactive: "INTERACTIVE" }),
                o = {
                    loadIframe: (e, t, r, i) => {
                        e.scribe({ action: "load", data: { items: [{ guest_id: t, os: a.ZP.osString(), arkose_keys: { mobile: r, web: i } }] }, element: n, page: s });
                    },
                    loadIframeFailed: (e, t, r, i) => {
                        e.scribe({ action: "fail", data: { items: [{ guest_id: t, os: a.ZP.osString(), arkose_keys: { mobile: r, web: i } }] }, element: n, page: s });
                    },
                    completeChallenge: (e, t, r, i, o) => {
                        e.scribe({ action: "complete", data: { items: [{ guest_id: t, os: a.ZP.osString(), challenge_type: r, arkose_keys: { mobile: i, web: o } }] }, element: n, page: s });
                    },
                    suppressedChallenge: (e, t, r, o) => {
                        e.scribe({ action: "show", data: { items: [{ guest_id: t, challenge_type: i.passive, os: a.ZP.osString(), arkose_keys: { mobile: r, web: o } }] }, element: n, page: s });
                    },
                    shownChallenge: (e, t, r, o) => {
                        e.scribe({ action: "show", data: { items: [{ guest_id: t, challenge_type: i.interactive, os: a.ZP.osString(), arkose_keys: { mobile: r, web: o } }] }, element: n, page: s });
                    },
                };
        },
        956935: (e, t, r) => {
            var a = r(482609),
                s = r(600726);
            (t = a(!1)).i(s), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        631673: (e, t, r) => {
            var a = r(46062),
                s = r(956935);
            "string" == typeof (s = s.__esModule ? s.default : s) && (s = [[e.id, s, ""]]);
            var n = { insert: "head", singleton: !1 };
            a(s, n);
            e.exports = s.locals || {};
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame~-2b9410ca.8efe7dda.js.map

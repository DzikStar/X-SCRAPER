(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame~-2b9410ca"],
    {
        648839: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => s });
            var r = a(202784);
            const s = ({ direction: e, handleFraction: t, handleSwipe: a, handleTap: s, swipeItemLength: n, swipeDistanceThreshold: i = n / 20, swipeTimeThreshold: o = 150 }) => {
                const c = r.useRef(0),
                    l = r.useRef(0),
                    d = r.useRef(0),
                    u = r.useCallback((t) => ("horizontal" === e ? t.clientX : t.clientY), [e]);
                return [
                    r.useCallback(
                        (e) => {
                            c.current || ((c.current = Date.now()), (l.current = u(e)));
                        },
                        [u],
                    ),
                    r.useCallback(
                        (e) => {
                            if (!c.current) return;
                            d.current = u(e);
                            const a = (d.current - l.current) / n;
                            t?.(a);
                        },
                        [u, t, n],
                    ),
                    r.useCallback(
                        (e) => {
                            if (((d.current = u(e)), !c.current)) return;
                            const r = Date.now() - c.current > o,
                                n = d.current - l.current,
                                p = Math.abs(n) > i;
                            t?.(0), (c.current = 0), r || p ? a?.(n < 0 ? 1 : -1) : s?.(e);
                        },
                        [u, t, a, s, i, o],
                    ),
                    !!c.current,
                ];
            };
        },
        736230: (e, t, a) => {
            "use strict";
            a.d(t, { CP: () => n, OG: () => i, TT: () => s, bP: () => l, mH: () => o, tX: () => c });
            var r = a(111677);
            const s = a.n(r)().g61ed8a4,
                n = "https://jf.x.com",
                i = "https://jf-t.x.com",
                o = "https://localhost.x.com:3000",
                c = "jfDev",
                l = Object.freeze({ MARCH_MADNESS_PICK: 1 });
        },
        355335: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => c, k: () => o });
            a(543673), a(240753), a(128399), a(136728);
            var r = a(202784),
                s = a(565058),
                n = a(400752),
                i = a(107267);
            const o = (0, s.cn)(!1),
                c = () => {
                    const e = (0, i.useHistory)(),
                        t = (0, i.useLocation)(),
                        [a, s] = (0, n.KO)(o);
                    r.useEffect(() => {
                        const e = new URLSearchParams(t.search).get("jfDev"),
                            a = sessionStorage.getItem("jfDev");
                        let r = !1;
                        e ? (("1" !== e && "true" !== e) || (r = !0), ("0" !== e && "false" !== e) || (r = !1)) : (r = "true" === a), r ? (s(!0), sessionStorage.setItem("jfDev", "true")) : (s(!1), sessionStorage.removeItem("jfDev"));
                    }, [t.search, s]);
                    const c = r.useCallback(
                        (a) => {
                            const r = new URLSearchParams(t.search);
                            a ? (r.set("jfDev", "1"), sessionStorage.setItem("jfDev", "true")) : (r.delete("jfDev"), sessionStorage.removeItem("jfDev"));
                            const n = r.toString();
                            e.push({ pathname: t.pathname, search: n }), s(a);
                        },
                        [e, t.pathname, t.search, s],
                    );
                    return {
                        isDev: a,
                        enableDev: r.useCallback(() => {
                            c(!0);
                        }, [c]),
                        disableDev: r.useCallback(() => {
                            c(!1);
                        }, [c]),
                    };
                };
        },
        553160: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => m });
            var r = a(202784),
                s = a(457311),
                n = a(111677),
                i = a.n(n),
                o = a(810641),
                c = a(519896),
                l = a(383675),
                d = a(293115);
            const u = i().e9f1fbcc,
                p = i().a3b80be6,
                h = () => r.createElement(s.Z, { header: u, message: p }),
                m = ({ children: e, p: t }) => {
                    const a = t.str("timelineId"),
                        s = t.str("name") ?? "JF-GenericURT",
                        n = t.str("scribe_page") ?? "jf-urt",
                        i = t.str("scribe_section") ?? void 0,
                        u = ((e) => r.useMemo(() => (e ? (0, l.R)(e, !1) : void 0), [e]))(a);
                    if (u) {
                        const e = { page: n, section: i };
                        return r.createElement(d.nO, { namespace: e }, r.createElement(o.Z, { module: u, prerollDisplayLocation: c.Nw.OTHER, refreshControl: null, renderEmptyState: h, title: s }));
                    }
                };
        },
        725102: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => I });
            var r = a(202784),
                s = a(244448),
                n = a(325686),
                i = a(466999),
                o = a(107267),
                c = a(392237),
                l = a(167630),
                d = a(111677),
                u = a.n(d),
                p = a(403808),
                h = a(323265),
                m = a(443781),
                g = a(125363),
                f = a(390387),
                y = a(929378),
                b = a(163889),
                v = a(725516);
            const w = Object.freeze({ light: "default", dark: "dim", darker: "dark", business: "business" }),
                k = u().ic6aa5f4,
                S = 327,
                E = 468,
                C = 500,
                x = 523,
                Z = c.default.create((e) => ({ container: { position: "relative", alignItems: "center" }, spinner: { alignItems: "center", position: "absolute", start: 0, end: 0, justifyContent: "center" }, label: { color: e.colors.text } })),
                I = ({ p: e }) => {
                    const t = e.str("publicKey") ?? e.str("webKey"),
                        { featureSwitches: a } = r.useContext(m.rC),
                        d = (0, v.z)(),
                        u = (0, g.v9)(f.OW),
                        I = (0, o.useLocation)(),
                        M = e.str("dataExchangeToken") ?? "",
                        P = e.str("name") ?? "arkose_token",
                        T = t ? a.getStringValue(t) : "",
                        R = r.useMemo(() => h.ZP.isWebView(), []),
                        F = R ? (window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "default") : w[c.default.theme.paletteName],
                        _ = r.useMemo(() => R || window.innerWidth < E, [R]),
                        [D, z] = r.useState(_ ? C : x),
                        [j, H] = r.useState(_ ? S : E),
                        [O, L] = r.useState(y.t.passive),
                        $ = r.useMemo(() => (_ ? Math.min((window.innerWidth - 32) / S, (window.innerHeight - 32) / C) : 1), [_]),
                        B = I.query?.guestId,
                        W = r.useMemo(() => (R && "string" == typeof B ? B : R ? "" : u || ""), [R, B, u]),
                        A = r.useCallback(() => {
                            y.Z.loadIframe(d, W, t || "", t || "");
                        }, [d, W, t]),
                        { change: N, submit: G, values: U } = r.useContext(s.q3),
                        [V, K] = r.useState("loading"),
                        X = (0, p.r)((e) => {
                            if ("string" == typeof e.data)
                                try {
                                    const a = JSON.parse(e.data);
                                    switch (a.eventId) {
                                        case "challenge-suppressed":
                                            y.Z.suppressedChallenge(d, W, t || "0", t || "0"), L(y.t.passive);
                                            break;
                                        case "challenge-shown":
                                            y.Z.shownChallenge(d, W, t || "0", t || "0"), L(y.t.interactive), K("shown");
                                            break;
                                        case "challenge-complete": {
                                            y.Z.completeChallenge(d, W, O, t || "0", t || "0");
                                            const e = a.payload.sessionToken;
                                            N(P, e), K("complete");
                                            break;
                                        }
                                        case "challenge-iframeSize":
                                            z(a.payload.frameHeight), H(a.payload.frameWidth);
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
                    r.useEffect(
                        () => (
                            window.addEventListener("message", X, !1),
                            () => {
                                window.removeEventListener("message", X, !1);
                            }
                        ),
                        [X],
                    );
                    const q = null != U[P],
                        J = r.useRef(!1);
                    return (
                        r.useEffect(() => {
                            q && !J.current && ((J.current = !0), G());
                        }, [q, G]),
                        r.createElement(n.Z, { style: Z.container }, r.createElement(n.Z, { style: [Z.spinner, { height: D }] }, "loading" === V || "loaded" === V ? r.createElement(l.Z, null) : "complete" === V ? r.createElement(i.Z, { style: Z.label }, k) : null), r.createElement("iframe", { height: D, id: "arkoseFrame", onLoad: A, src: [`https://iframe.arkoselabs.com/${T}/index.html?theme=${F}`, M && `&data=${M}`].filter(Boolean).join(""), style: { MozTransform: `scale(${$})`, OTransform: `scale(${$})`, WebkitTransform: `scale(${$})`, borderWidth: 0, MozTransformOrigin: "50% 0", OTransformOrigin: "50% 0", WebkitTransformOrigin: "50% 0", alignSelf: "center" }, title: "arkoseFrame", width: j }))
                    );
                };
        },
        755534: (e, t, a) => {
            "use strict";
            a.d(t, { o: () => r });
            const r = 140;
        },
        766225: (e, t, a) => {
            "use strict";
            a.d(t, { AH: () => o, rX: () => c });
            a(136728), a(571372);
            var r = a(202784),
                s = a(837880),
                n = a(755534);
            const i = r.createContext({ navigateStory: () => {}, navigateElement: () => {}, storyPagerState: { stories: [], activeStory: 0 }, initializeStories: () => {}, initializeStoryElements: () => {}, onClose: () => {}, horizontalDragFraction: 0, setHorizontalDragFraction: () => {}, navigateStoryWithTransition: () => {} }),
                o = ({ children: e, onClose: t }) => {
                    const [a, o] = r.useState({ stories: [], activeStory: 0 }),
                        [c, l] = r.useState(0),
                        d = r.useCallback(() => {
                            t?.();
                        }, [t]),
                        u = r.useCallback((e, t) => {
                            const a = [];
                            for (let r = 0; r < e; r++) a.push({ index: r, elements: [], activeElement: t ?? 0 });
                            o((e) => ({ ...e, stories: a }));
                        }, []),
                        p = r.useCallback((e, t) => {
                            o((a) => {
                                const r = a.stories[t];
                                if (!r) throw new Error(`Story did not exist with id: ${t}`);
                                const s = [];
                                for (let t = 0; t < e; t++) s.push({ index: t });
                                const n = { ...r, elements: s },
                                    i = [...a.stories];
                                return (i[t] = n), { ...a, stories: i };
                            });
                        }, []),
                        h = r.useCallback((e) => {
                            o((t) => ({ ...t, activeStory: (0, s.Z)(t.activeStory + e, 0, t.stories.length - 1) }));
                        }, []),
                        m = r.useCallback(
                            (e) => {
                                o((t) => {
                                    const a = [...t.stories],
                                        r = t.activeStory,
                                        n = a[r].activeElement + e,
                                        i = a[r].elements.length - 1;
                                    if (n > i) return h(1), t;
                                    if (n < 0) return h(-1), t;
                                    const o = (0, s.Z)(n, 0, i);
                                    return (a[r] = { ...a[r], activeElement: o }), { ...t, stories: [...a] };
                                });
                            },
                            [h],
                        ),
                        g = r.useCallback(
                            (e) => {
                                const t = a.activeStory + e;
                                t < 0 ||
                                    t > a.stories.length - 1 ||
                                    (l(-1 * e),
                                    setTimeout(() => {
                                        h(e), l(0.001);
                                    }, n.o));
                            },
                            [h, a.activeStory, a.stories.length],
                        ),
                        f = { navigateStory: h, navigateElement: m, storyPagerState: a, initializeStories: u, initializeStoryElements: p, onClose: d, horizontalDragFraction: c, setHorizontalDragFraction: l, navigateStoryWithTransition: g };
                    return r.createElement(i.Provider, { value: f }, e);
                };
            function c() {
                const e = r.useContext(i);
                if (void 0 === e) throw new Error("useStoryPagerContext was used outside of its provider StoryPagerContextProvider");
                return e;
            }
        },
        421855: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => S });
            var r = a(807896),
                s = a(202784),
                n = a(325686),
                i = a(393058),
                o = a(537392),
                c = a(392237),
                l = a(154003),
                d = a(894966),
                u = a(568320),
                p = a(83515),
                h = a(926628),
                m = a(837880),
                g = a(187669),
                f = a(648839),
                y = a(59669),
                b = a(755534),
                v = a(766225);
            const w = ({ children: e, initialIndex: t }) => {
                    const { horizontalDragFraction: a, initializeStories: r, navigateElement: w, navigateStoryWithTransition: S, setHorizontalDragFraction: E, storyPagerState: C } = (0, v.rX)(),
                        x = i.Z.isTouchSupported(),
                        Z = s.useRef(null),
                        I = C.stories?.[C.activeStory],
                        M = Z.current?.getBoundingClientRect(),
                        P = M?.width || 0,
                        T = M?.left || 0,
                        [R, F] = s.useState(!1),
                        [_, D, z] = (0, o.Zx)(({ windowWidth: e }) => [e > c.default.theme.breakpoints.medium, e > c.default.theme.breakpoints.large, e > c.default.theme.breakpoints.xLarge]),
                        j = !_,
                        H = (90 * a).toFixed(1),
                        O = (100 * a).toFixed(1),
                        L = 0 === a || 1 === a || -1 === a ? `transform ${b.o}ms ease-in` : "none",
                        $ = s.useMemo(() => ({ transition: L, transform: `translateZ(-${P / 2}px) rotate3d(0,1,0,${H}deg)` }), [H, L, P]),
                        B = s.useMemo(() => ({ transition: L, transform: `translateX(${O}%)` }), [L, O]),
                        W = s.useMemo(() => {
                            if (j) return { transform: `translateZ(${P / 2}px)` };
                        }, [j, P]),
                        A = s.useMemo(() => (j ? { transform: `rotate3d(0,1,0,-90deg) translateZ(${P / 2}px)` } : { transform: "translateX(-100%)" }), [j, P]),
                        N = s.useMemo(() => (j ? { transform: `rotate3d(0,1,0,90deg) translateZ(${P / 2}px)` } : { transform: "translateX(100%)" }), [j, P]),
                        G = s.useCallback(
                            (e) => {
                                const t = 0 === C.activeStory ? 0.1 : 1,
                                    a = C.activeStory === C.stories.length - 1 ? -0.1 : -1,
                                    r = (0, m.Z)(e, a, t);
                                E(r);
                            },
                            [E, C.activeStory, C.stories.length],
                        ),
                        U = s.useCallback(
                            (e) => {
                                const t = C.stories[C.activeStory];
                                e.clientX - T > P / 2 ? (t.activeElement === t.elements.length - 1 ? S(1) : w(1)) : 0 === t.activeElement ? S(-1) : w(-1);
                            },
                            [T, P, w, S, C.activeStory, C.stories],
                        ),
                        [V, K, X] = (0, f.Z)({ direction: "horizontal", swipeItemLength: P, handleFraction: G, handleTap: U, handleSwipe: S }),
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
                        C.stories.length || r(e?.length || 0, t ?? 0);
                    });
                    let Y = {};
                    _ ? (Y = k.height600) : D ? (Y = k.height680) : z && (Y = k.height800);
                    const ee = s.useMemo(() => s.createElement(s.Fragment, null, s.createElement(l.ZP, { icon: s.createElement(d.default, { style: { color: "white" } }), onClick: U, onPointerDown: Q, style: k.buttonLeft, type: "primaryText" }), s.createElement(l.ZP, { icon: s.createElement(u.default, { style: { color: "white" } }), onClick: U, onPointerDown: Q, style: k.buttonRight, type: "primaryText" })), [Q, U]),
                        te = s.useMemo(() => s.createElement(l.ZP, { icon: R ? s.createElement(p.default, null) : s.createElement(h.default, null), onClick: J, onPointerDown: Q, style: k.buttonMute, type: "primaryText" }), [J, Q, R]);
                    if (e && I) {
                        const t = e[C.activeStory],
                            a = e[C.activeStory - 1],
                            r = e[C.activeStory + 1];
                        return s.createElement(n.Z, { onPointerDown: q, onPointerMove: K, onPointerUp: X, ref: Z, style: [k.container, _ && k.containerWideScreen, Y] }, s.createElement(n.Z, { style: j && k.perspectiveZone }, s.createElement(n.Z, { style: [k.cubeContainer, j ? $ : B] }, s.createElement(n.Z, { style: [k.storyLeft, Y, A] }, a && !x && ee, a && te, s.createElement(y.rh, { isFocused: !1 }, a)), s.createElement(n.Z, { style: [k.focusedStory, Y, W] }, !x && ee, te, s.createElement(y.rh, { isFocused: !0, isMuted: R }, t)), s.createElement(n.Z, { style: [k.storyRight, Y, N] }, r && !x && ee, r && te, s.createElement(y.rh, { isFocused: !1 }, r)))));
                    }
                },
                k = c.default.create((e) => ({ container: { height: "100%", width: "100%", touchAction: "none", overflow: "hidden", userSelect: "none" }, containerWideScreen: { width: "100%", flexDirection: "column", justifyContent: "center", backgroundColor: e.colors.alwaysBlack }, height600: { height: "600px", maxHeight: "600px", minHeight: "600px" }, height680: { height: "680px", maxHeight: "680px", minHeight: "680px" }, height800: { height: "800px", maxHeight: "800px", minHeight: "800px" }, perspectiveZone: { height: "100%", width: "100%", perspective: "800px" }, cubeContainer: { height: "100%", width: "100%", transformStyle: "preserve-3d" }, focusedStory: { zIndex: e.componentZIndices.appBarZIndex, height: "100%", width: "100%" }, storyLeft: { zIndex: e.componentZIndices.appBarZIndex, position: "absolute", height: "100%", width: "100%" }, storyRight: { zIndex: e.componentZIndices.appBarZIndex, position: "absolute", height: "100%", width: "100%" }, buttonLeft: { backgroundColor: "rgba(0,0,0,0.7)", zIndex: e.componentZIndices.appBarZIndex, width: e.spaces.space32, height: e.spaces.space32, position: "absolute", top: `calc(50% - ${e.spaces.space16})`, start: e.spaces.space16 }, buttonRight: { backgroundColor: "rgba(0,0,0,0.7)", zIndex: e.componentZIndices.appBarZIndex, width: e.spaces.space32, height: e.spaces.space32, position: "absolute", top: `calc(50% - ${e.spaces.space16})`, end: e.spaces.space16 }, buttonMute: { backgroundColor: "rgba(0,0,0,0.7)", zIndex: e.componentZIndices.appBarZIndex, width: e.spaces.space32, height: e.spaces.space32, position: "absolute", bottom: e.spaces.space16, end: e.spaces.space16 } })),
                S = ({ initialIndex: e = 0, ...t }) => s.createElement(v.AH, null, s.createElement(n.Z, { style: { height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, s.createElement(w, (0, r.Z)({}, t, { initialIndex: e }))));
        },
        59669: (e, t, a) => {
            "use strict";
            a.d(t, { rh: () => n, wR: () => i });
            var r = a(202784);
            const s = r.createContext({ currentTimeMs: 0, setCurrentTimeMs: () => {}, durationMs: 0, setDurationMs: () => {}, tracksFinished: !1, setTracksFinished: () => {} }),
                n = ({ children: e, isFocused: t, isMuted: a }) => {
                    const [n, i] = r.useState(0),
                        [o, c] = r.useState(0),
                        [l, d] = r.useState(!1),
                        u = r.useCallback(
                            (e) => {
                                e !== l && d(e);
                            },
                            [l],
                        ),
                        p = { currentTimeMs: n, setCurrentTimeMs: i, durationMs: o, setDurationMs: c, tracksFinished: l, setTracksFinished: u, isFocused: t, isMuted: a };
                    return r.createElement(s.Provider, { value: p }, e);
                };
            function i() {
                const e = r.useContext(s);
                return e || {};
            }
        },
        824626: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => H });
            var r = a(202784),
                s = a(244448),
                n = a(400752),
                i = a(107267),
                o = a(392237),
                c = a(420182),
                l = a(443781),
                d = a(689048),
                u = a(390387),
                p = a(725405),
                h = a(736230),
                m = a(355335),
                g = a(553160),
                f = a(725102),
                y = a(421855),
                b = a(325686),
                v = a(187669),
                w = a(59669),
                k = a(766225);
            const S = ({ isActive: e, isComplete: t }) => {
                    const { currentTimeMs: a, durationMs: s } = (0, w.wR)();
                    let n = 0;
                    if (t) n = 100;
                    else if (e) {
                        const e = (a || 0) / (s || 1);
                        n = 100 * Math.max(0, Math.min(1, e));
                    }
                    const i = { width: `${n}%` };
                    return r.createElement(b.Z, { style: E.progressIndicator }, r.createElement(b.Z, { style: [E.progressIndicatorFiller, i] }));
                },
                E = o.default.create((e) => ({ container: { height: "100%", width: "100%" }, pillContainer: { zIndex: 101, position: "absolute", top: 0, height: e.spaces.space32, display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center", justifyContent: "center", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16, width: "100%" }, progressIndicator: { borderRadius: e.borderRadii.medium, height: e.spaces.space4, flexGrow: 1, backgroundColor: e.colors.alwaysBaseGray500, overflow: "hidden" }, progressIndicatorFiller: { height: e.spaces.space4, backgroundColor: e.colors.buttonAlwaysWhite, width: 0 } })),
                C = ({ children: e, p: t }) => {
                    const a = t.int("index") ?? 0,
                        { initializeStoryElements: s, navigateElement: n, navigateStoryWithTransition: i, storyPagerState: o } = (0, k.rX)(),
                        c = o.stories[a],
                        { setTracksFinished: l, tracksFinished: d } = (0, w.wR)();
                    r.useEffect(() => {
                        if (d) {
                            const e = o.stories[o.activeStory];
                            e.activeElement === e.elements.length - 1 ? i(1) : n(1), l?.(!1);
                        }
                    }, [n, i, l, o.activeStory, o.stories, d]),
                        (0, v.q)(() => {
                            s(e?.length || 0, a);
                        });
                    const u = c?.activeElement || 0;
                    if (e && c)
                        return r.createElement(
                            b.Z,
                            { style: E.container },
                            r.createElement(
                                b.Z,
                                { style: E.pillContainer },
                                e.map((e, t) => r.createElement(S, { isActive: t === u, isComplete: t < u, key: t })),
                            ),
                            e[u],
                        );
                };
            var x = a(731708),
                Z = a(127957),
                I = a(125363);
            const M = { base: { display: "flex", flexShrink: 1, flexBasis: "auto", width: "100%", height: "100%", overflow: "hidden" } },
                P = ({ p: e }) => {
                    const t = e.str("broadcastId"),
                        a = e.bool("autoplay") ?? !0,
                        s = e.bool("muted") ?? !0,
                        n = e.bool("minimal") ?? !1,
                        i = e.bool("enablePip") ?? !1,
                        o = (0, I.I0)(),
                        c = r.useMemo(() => o((e, t, { api: a }) => a.getHttpClient()), [o]);
                    if (!t) return r.createElement(x.ZP, null, "Broadcast not provided");
                    const l = { type: "broadcast", id: t };
                    return r.createElement(b.Z, { style: [M.base].filter(Boolean) }, r.createElement(Z.Z, { autoplay: a, config: "auto", controls: n, displayOptions: { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 }, enablePip: i, httpClient: c, initiallyMuted: s, precache: !0, size: "fill", twitterAuthedHttpClient: c, videoId: l }));
                };
            var T = a(45843),
                R = a(738584),
                F = a(614425);
            const _ = { base: { display: "flex", flexShrink: 1, flexBasis: "auto", width: "100%", height: "100%", overflow: "hidden", maxWidth: "100vw" }, aspectRatioStyle: (e) => ({ aspectRatio: `${e ?? "auto"}` }), posterImage: { height: "100%", width: "100%", zIndex: -1, position: "absolute" } },
                D = ({ p: e }) => {
                    const t = e.url("src"),
                        a = e.str("alt"),
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
                        g = (0, I.I0)(),
                        { featureSwitches: f } = (0, l.QZ)(),
                        y = r.useMemo(() => g((e, t, { api: a }) => a.getHttpClient()), [g]),
                        { isFocused: v, isMuted: k, setCurrentTimeMs: S, setDurationMs: E, setTracksFinished: C } = (0, w.wR)(),
                        Z = r.useRef(),
                        M = r.useRef();
                    r.useEffect(() => {
                        v && Z.current?.play();
                    }, [v]),
                        r.useEffect(() => {
                            const e = Z.current,
                                t = M.current;
                            t && e && k !== t.isMuted && (k ? e.mute() : e.unmute());
                        });
                    const P = r.useCallback(
                            (e) => {
                                (Z.current = e), v || e.pause();
                            },
                            [v],
                        ),
                        D = r.useCallback(
                            (e) => {
                                M.current = e;
                                const t = e.tracks?.[0]?.currentTimeMs,
                                    a = e.tracks?.[0]?.durationMs;
                                C?.(e.tracksFinished), S?.(t), E?.(a);
                            },
                            [S, E, C],
                        );
                    return t ? r.createElement(b.Z, { style: [_.base, i ? _.aspectRatioStyle(s ?? 1) : null, o ? _.aspectRatioStyle(n ?? 1) : null].filter(Boolean) }, r.createElement(R.Z, { "aria-label": a ?? "video", autoplay: p, basePlayerClass: F.Y7, configType: "static", contentId: u ?? "", contentType: "media_entity", displayOptions: { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 }, durationMs: c ?? 0, enableVideoPlayerCaptionRendering: !0, featureProvider: f, httpClient: y, initiallyMuted: h, loop: m, onApiReady: P, onStateUpdate: D, playbackSessionId: u ?? "", poster: d ?? "", precache: !0, size: "fill", twitterAuthedHttpClient: y, variants: [{ src: t, type: "application/x-mpegURL" }] }), d && r.createElement(T.Z, { source: d, style: _.posterImage })) : r.createElement(x.ZP, null, "Video not provided");
                },
                z = (0, s.GZ)("JetfuelV2 Runtime");
            const j = (e, t) => (e ? h.mH : t ? h.OG : h.CP),
                H = function ({ children: e }) {
                    const [t] = (0, n.KO)(c.dd),
                        a = t.apiClient,
                        [h] = (0, n.KO)(c.qc),
                        b = h.getState(),
                        v = (0, i.useHistory)(),
                        w = (0, u.F5)(b),
                        k = Intl.DateTimeFormat().resolvedOptions().timeZone,
                        S = (0, p.Z)(),
                        [E] = (0, n.KO)(m.k),
                        { featureSwitches: x } = r.useContext(l.rC),
                        Z = location.host.includes("x.com") && x.isTrue("x_jetfuel_enable_test_cluster"),
                        I = "darker" === o.default.theme.paletteName ? "dark" : "dark" === o.default.theme.paletteName ? "dim" : o.default.theme.paletteName,
                        M = r.useMemo(() => {
                            const e = {};
                            return (e["x-jf-client-theme"] = I), (e["x-jf-v"] = "JP-4"), k && (e.timezone = k), w && (e["accept-language"] = (0, d.o)(w)), e;
                        }, [I, k, w]),
                        T = j(E, Z),
                        R = r.useMemo(
                            () => ({
                                httpPOST: async (e, t) => {
                                    let r,
                                        s = !1;
                                    const n = e.startsWith("/") ? e : `/${e}`;
                                    try {
                                        (r = await a.jetfuelForm(n, M, Object.fromEntries(t.entries()), T)), (s = !0);
                                    } catch (e) {
                                        s = !1;
                                    }
                                    return { ok: s, data: r };
                                },
                                httpGet: async (e) => {
                                    let t,
                                        r = !1;
                                    const s = e.startsWith("/") ? e : `/${e}`;
                                    try {
                                        (t = await a.jetfuel(s, M, T)), (r = !0);
                                    } catch (e) {
                                        r = !1;
                                    }
                                    return { ok: r, data: t };
                                },
                            }),
                            [a, M, T],
                        );
                    r.useEffect(() => {
                        document.body.setAttribute("data-theme", I ?? "light");
                    }, [I]);
                    const F = r.useMemo(() => {
                        (z.net = R), (z.history = v), (z.analytics = S);
                        const e = { "x.com.GenericURT": g.Z, "x.com.Video": D, "x.com.Broadcast": P, StoryPager: y.Z, "StoryPager.Story": C, SignupArkoseSecurityChallenge: f.Z };
                        return z.addComponentOverride(e), z;
                    }, [R, v, S]);
                    return "undefined" == typeof window ? e : r.createElement(s.N_, { analytics: S, runtime: F }, e);
                };
        },
        383675: (e, t, a) => {
            "use strict";
            a.d(t, { R: () => c, Z: () => o });
            var r = a(503768),
                s = a(644829),
                n = a(750085),
                i = a(218951);
            const o = ({ endpointParams: e, endpointUrl: t, isUserRefreshable: a, timelineId: r }) => (0, i.Z)({ timelineId: r, isUserRefreshable: a, network: { getEndpoint: (e) => e.withEndpoint(s.Z).fetchGeneric, getEndpointParams: ({ count: a, cursor: r }) => ({ ...e, cursor: "string" == typeof r ? r : void 0, count: a, endpointUrl: t }) }, context: "FETCH_TIMELINE", perfKey: "generic" }),
                c = (e, t) => (0, i.Z)({ timelineId: `generic-graphql-timeline-${e}`, isUserRefreshable: t, network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchGenericTimelineById, getEndpointParams: ({ count: t, cursor: a }) => ({ cursor: "string" == typeof a ? a : void 0, count: t, timelineId: e }) }, formatResponse: n.Z, context: "FETCH_GENERIC_TIMELINE_GQL", perfKey: "genericGQL" });
        },
        929378: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => o, t: () => i });
            var r = a(323265);
            const s = "arkose-subtask",
                n = "arkose",
                i = Object.freeze({ passive: "PASSIVE", interactive: "INTERACTIVE" }),
                o = {
                    loadIframe: (e, t, a, i) => {
                        e.scribe({ action: "load", data: { items: [{ guest_id: t, os: r.ZP.osString(), arkose_keys: { mobile: a, web: i } }] }, element: n, page: s });
                    },
                    loadIframeFailed: (e, t, a, i) => {
                        e.scribe({ action: "fail", data: { items: [{ guest_id: t, os: r.ZP.osString(), arkose_keys: { mobile: a, web: i } }] }, element: n, page: s });
                    },
                    completeChallenge: (e, t, a, i, o) => {
                        e.scribe({ action: "complete", data: { items: [{ guest_id: t, os: r.ZP.osString(), challenge_type: a, arkose_keys: { mobile: i, web: o } }] }, element: n, page: s });
                    },
                    suppressedChallenge: (e, t, a, o) => {
                        e.scribe({ action: "show", data: { items: [{ guest_id: t, challenge_type: i.passive, os: r.ZP.osString(), arkose_keys: { mobile: a, web: o } }] }, element: n, page: s });
                    },
                    shownChallenge: (e, t, a, o) => {
                        e.scribe({ action: "show", data: { items: [{ guest_id: t, challenge_type: i.interactive, os: r.ZP.osString(), arkose_keys: { mobile: a, web: o } }] }, element: n, page: s });
                    },
                };
        },
        956935: (e, t, a) => {
            var r = a(482609),
                s = a(600726);
            (t = r(!1)).i(s), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        631673: (e, t, a) => {
            var r = a(46062),
                s = a(956935);
            "string" == typeof (s = s.__esModule ? s.default : s) && (s = [[e.id, s, ""]]);
            var n = { insert: "head", singleton: !1 };
            r(s, n);
            e.exports = s.locals || {};
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame~-2b9410ca.5e96712a.js.map

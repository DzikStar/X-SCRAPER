(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame~-2b9410ca"],
    {
        648839: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => n });
            var r = a(202784);
            const n = ({ direction: e, handleFraction: t, handleSwipe: a, handleTap: n, swipeItemLength: s, swipeDistanceThreshold: o = s / 20, swipeTimeThreshold: i = 150 }) => {
                const l = r.useRef(0),
                    c = r.useRef(0),
                    d = r.useRef(0),
                    u = r.useCallback((t) => ("horizontal" === e ? t.clientX : t.clientY), [e]);
                return [
                    r.useCallback(
                        (e) => {
                            l.current || ((l.current = Date.now()), (c.current = u(e)));
                        },
                        [u],
                    ),
                    r.useCallback(
                        (e) => {
                            if (!l.current) return;
                            d.current = u(e);
                            const a = (d.current - c.current) / s;
                            t?.(a);
                        },
                        [u, t, s],
                    ),
                    r.useCallback(
                        (e) => {
                            if (((d.current = u(e)), !l.current)) return;
                            const r = Date.now() - l.current > i,
                                s = d.current - c.current,
                                p = Math.abs(s) > o;
                            t?.(0), (l.current = 0), r || p ? a?.(s < 0 ? 1 : -1) : n?.(e);
                        },
                        [u, t, a, n, o, i],
                    ),
                    !!l.current,
                ];
            };
        },
        736230: (e, t, a) => {
            "use strict";
            a.d(t, { CP: () => s, OG: () => o, TT: () => n, bP: () => c, mH: () => i, tX: () => l });
            var r = a(111677);
            const n = a.n(r)().g61ed8a4,
                s = "https://jf.x.com",
                o = "https://jf-t.x.com",
                i = "https://localhost.x.com:3000",
                l = "jfDev",
                c = Object.freeze({ MARCH_MADNESS_PICK: 1 });
        },
        355335: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => l, k: () => i });
            a(543673), a(240753), a(128399), a(136728);
            var r = a(202784),
                n = a(565058),
                s = a(400752),
                o = a(107267);
            const i = (0, n.cn)(!1),
                l = () => {
                    const e = (0, o.useHistory)(),
                        t = (0, o.useLocation)(),
                        [a, n] = (0, s.KO)(i);
                    r.useEffect(() => {
                        const e = new URLSearchParams(t.search).get("jfDev"),
                            a = sessionStorage.getItem("jfDev");
                        let r = !1;
                        e ? (("1" !== e && "true" !== e) || (r = !0), ("0" !== e && "false" !== e) || (r = !1)) : (r = "true" === a), r ? (n(!0), sessionStorage.setItem("jfDev", "true")) : (n(!1), sessionStorage.removeItem("jfDev"));
                    }, [t.search, n]);
                    const l = r.useCallback(
                        (a) => {
                            const r = new URLSearchParams(t.search);
                            a ? (r.set("jfDev", "1"), sessionStorage.setItem("jfDev", "true")) : (r.delete("jfDev"), sessionStorage.removeItem("jfDev"));
                            const s = r.toString();
                            e.push({ pathname: t.pathname, search: s }), n(a);
                        },
                        [e, t.pathname, t.search, n],
                    );
                    return {
                        isDev: a,
                        enableDev: r.useCallback(() => {
                            l(!0);
                        }, [l]),
                        disableDev: r.useCallback(() => {
                            l(!1);
                        }, [l]),
                    };
                };
        },
        553160: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => m });
            var r = a(202784),
                n = a(457311),
                s = a(111677),
                o = a.n(s),
                i = a(810641),
                l = a(519896),
                c = a(383675),
                d = a(293115);
            const u = o().e9f1fbcc,
                p = o().a3b80be6,
                h = () => r.createElement(n.Z, { header: u, message: p }),
                m = ({ children: e, p: t }) => {
                    const a = t.str("timelineId"),
                        n = t.str("name") ?? "JF-GenericURT",
                        s = t.str("scribe_page") ?? "jf-urt",
                        o = t.str("scribe_section") ?? void 0,
                        u = ((e) => r.useMemo(() => (e ? (0, c.R)(e, !1) : void 0), [e]))(a);
                    if (u) {
                        const e = { page: s, section: o };
                        return r.createElement(d.nO, { namespace: e }, r.createElement(i.Z, { module: u, prerollDisplayLocation: l.Nw.OTHER, refreshControl: null, renderEmptyState: h, title: n }));
                    }
                };
        },
        725102: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => I });
            var r = a(202784),
                n = a(244448),
                s = a(325686),
                o = a(466999),
                i = a(107267),
                l = a(392237),
                c = a(167630),
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
                S = u().ic6aa5f4,
                k = 327,
                E = 468,
                C = 500,
                Z = 523,
                x = l.default.create((e) => ({ container: { position: "relative", alignItems: "center" }, spinner: { alignItems: "center", position: "absolute", start: 0, end: 0, justifyContent: "center" }, label: { color: e.colors.text } })),
                I = ({ p: e }) => {
                    const t = e.str("publicKey") ?? e.str("webKey"),
                        { featureSwitches: a } = r.useContext(m.rC),
                        d = (0, v.z)(),
                        u = (0, g.v9)(f.OW),
                        I = (0, i.useLocation)(),
                        P = e.str("dataExchangeToken") ?? "",
                        T = e.str("name") ?? "arkose_token",
                        M = t ? a.getStringValue(t) : "",
                        R = r.useMemo(() => h.ZP.isWebView(), []),
                        _ = R ? (window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "default") : w[l.default.theme.paletteName],
                        F = r.useMemo(() => R || window.innerWidth < E, [R]),
                        [z, D] = r.useState(F ? C : Z),
                        [j, H] = r.useState(F ? k : E),
                        [O, L] = r.useState(y.t.passive),
                        $ = r.useMemo(() => (F ? Math.min((window.innerWidth - 32) / k, (window.innerHeight - 32) / C) : 1), [F]),
                        B = I.query?.guestId,
                        W = r.useMemo(() => (R && "string" == typeof B ? B : R ? "" : u || ""), [R, B, u]),
                        A = r.useCallback(() => {
                            y.Z.loadIframe(d, W, t || "", t || "");
                        }, [d, W, t]),
                        { change: N, submit: G, values: U } = r.useContext(n.q3),
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
                                            N(T, e), K("complete");
                                            break;
                                        }
                                        case "challenge-iframeSize":
                                            D(a.payload.frameHeight), H(a.payload.frameWidth);
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
                    const q = null != U[T],
                        J = r.useRef(!1);
                    return (
                        r.useEffect(() => {
                            q && !J.current && ((J.current = !0), G());
                        }, [q, G]),
                        r.createElement(s.Z, { style: x.container }, r.createElement(s.Z, { style: [x.spinner, { height: z }] }, "loading" === V || "loaded" === V ? r.createElement(c.Z, null) : "complete" === V ? r.createElement(o.Z, { style: x.label }, S) : null), r.createElement("iframe", { height: z, id: "arkoseFrame", onLoad: A, src: [`https://iframe.arkoselabs.com/${M}/index.html?theme=${_}`, P && `&data=${P}`].filter(Boolean).join(""), style: { MozTransform: `scale(${$})`, OTransform: `scale(${$})`, WebkitTransform: `scale(${$})`, borderWidth: 0, MozTransformOrigin: "50% 0", OTransformOrigin: "50% 0", WebkitTransformOrigin: "50% 0", alignSelf: "center" }, title: "arkoseFrame", width: j }))
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
            a.d(t, { AH: () => i, rX: () => l });
            a(136728), a(571372);
            var r = a(202784),
                n = a(837880),
                s = a(755534);
            const o = r.createContext({ navigateStory: () => {}, navigateElement: () => {}, storyPagerState: { stories: [], activeStory: 0 }, initializeStories: () => {}, initializeStoryElements: () => {}, onClose: () => {}, horizontalDragFraction: 0, setHorizontalDragFraction: () => {}, navigateStoryWithTransition: () => {} }),
                i = ({ children: e, onClose: t }) => {
                    const [a, i] = r.useState({ stories: [], activeStory: 0 }),
                        [l, c] = r.useState(0),
                        d = r.useCallback(() => {
                            t?.();
                        }, [t]),
                        u = r.useCallback((e, t) => {
                            const a = [];
                            for (let r = 0; r < e; r++) a.push({ index: r, elements: [], activeElement: t ?? 0 });
                            i((e) => ({ ...e, stories: a }));
                        }, []),
                        p = r.useCallback((e, t) => {
                            i((a) => {
                                const r = a.stories[t];
                                if (!r) throw new Error(`Story did not exist with id: ${t}`);
                                const n = [];
                                for (let t = 0; t < e; t++) n.push({ index: t });
                                const s = { ...r, elements: n },
                                    o = [...a.stories];
                                return (o[t] = s), { ...a, stories: o };
                            });
                        }, []),
                        h = r.useCallback((e) => {
                            i((t) => ({ ...t, activeStory: (0, n.Z)(t.activeStory + e, 0, t.stories.length - 1) }));
                        }, []),
                        m = r.useCallback(
                            (e) => {
                                i((t) => {
                                    const a = [...t.stories],
                                        r = t.activeStory,
                                        s = a[r].activeElement + e,
                                        o = a[r].elements.length - 1;
                                    if (s > o) return h(1), t;
                                    if (s < 0) return h(-1), t;
                                    const i = (0, n.Z)(s, 0, o);
                                    return (a[r] = { ...a[r], activeElement: i }), { ...t, stories: [...a] };
                                });
                            },
                            [h],
                        ),
                        g = r.useCallback(
                            (e) => {
                                const t = a.activeStory + e;
                                t < 0 ||
                                    t > a.stories.length - 1 ||
                                    (c(-1 * e),
                                    setTimeout(() => {
                                        h(e), c(0.001);
                                    }, s.o));
                            },
                            [h, a.activeStory, a.stories.length],
                        ),
                        f = { navigateStory: h, navigateElement: m, storyPagerState: a, initializeStories: u, initializeStoryElements: p, onClose: d, horizontalDragFraction: l, setHorizontalDragFraction: c, navigateStoryWithTransition: g };
                    return r.createElement(o.Provider, { value: f }, e);
                };
            function l() {
                const e = r.useContext(o);
                if (void 0 === e) throw new Error("useStoryPagerContext was used outside of its provider StoryPagerContextProvider");
                return e;
            }
        },
        421855: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => k });
            var r = a(807896),
                n = a(202784),
                s = a(244448),
                o = a(325686),
                i = a(393058),
                l = a(537392),
                c = a(392237),
                d = a(154003),
                u = a(894966),
                p = a(568320),
                h = a(83515),
                m = a(926628),
                g = a(837880),
                f = a(187669),
                y = a(648839),
                b = a(755534),
                v = a(766225);
            const w = ({ children: e, initialIndex: t }) => {
                    const { horizontalDragFraction: a, initializeStories: r, navigateElement: w, navigateStoryWithTransition: k, setHorizontalDragFraction: E, storyPagerState: C } = (0, v.rX)(),
                        Z = i.Z.isTouchSupported(),
                        x = n.useRef(null),
                        I = C.stories?.[C.activeStory],
                        P = x.current?.getBoundingClientRect(),
                        T = P?.width || 0,
                        M = P?.left || 0,
                        [R, _] = n.useState(!1),
                        [F, z, D] = (0, l.Zx)(({ windowWidth: e }) => [e > c.default.theme.breakpoints.medium, e > c.default.theme.breakpoints.large, e > c.default.theme.breakpoints.xLarge]),
                        j = !F,
                        H = (90 * a).toFixed(1),
                        O = (100 * a).toFixed(1),
                        L = 0 === a || 1 === a || -1 === a ? `transform ${b.o}ms ease-in` : "none",
                        $ = n.useMemo(() => ({ transition: L, transform: `translateZ(-${T / 2}px) rotate3d(0,1,0,${H}deg)` }), [H, L, T]),
                        B = n.useMemo(() => ({ transition: L, transform: `translateX(${O}%)` }), [L, O]),
                        W = n.useMemo(() => {
                            if (j) return { transform: `translateZ(${T / 2}px)` };
                        }, [j, T]),
                        A = n.useMemo(() => (j ? { transform: `rotate3d(0,1,0,-90deg) translateZ(${T / 2}px)` } : { transform: "translateX(-100%)" }), [j, T]),
                        N = n.useMemo(() => (j ? { transform: `rotate3d(0,1,0,90deg) translateZ(${T / 2}px)` } : { transform: "translateX(100%)" }), [j, T]),
                        G = n.useCallback(
                            (e) => {
                                const t = 0 === C.activeStory ? 0.1 : 1,
                                    a = C.activeStory === C.stories.length - 1 ? -0.1 : -1,
                                    r = (0, g.Z)(e, a, t);
                                E(r);
                            },
                            [E, C.activeStory, C.stories.length],
                        ),
                        U = n.useCallback(
                            (e) => {
                                const t = C.stories[C.activeStory];
                                e.clientX - M > T / 2 ? (t.activeElement === t.elements.length - 1 ? k(1) : w(1)) : 0 === t.activeElement ? k(-1) : w(-1);
                            },
                            [M, T, w, k, C.activeStory, C.stories],
                        ),
                        [V, K, X] = (0, y.Z)({ direction: "horizontal", swipeItemLength: T, handleFraction: G, handleTap: U, handleSwipe: k }),
                        q = n.useCallback(
                            (e) => {
                                x.current?.setPointerCapture(e.pointerId), V(e);
                            },
                            [V],
                        ),
                        J = n.useCallback(() => {
                            _(!R);
                        }, [R]),
                        Q = n.useCallback((e) => {
                            e.stopPropagation();
                        }, []);
                    (0, f.q)(() => {
                        C.stories.length || r(e?.length || 0, t ?? 0);
                    });
                    let Y = {};
                    F ? (Y = S.height600) : z ? (Y = S.height680) : D && (Y = S.height800);
                    const ee = n.useMemo(() => n.createElement(n.Fragment, null, n.createElement(d.ZP, { icon: n.createElement(u.default, { style: { color: "white" } }), onClick: U, onPointerDown: Q, style: S.buttonLeft, type: "primaryText" }), n.createElement(d.ZP, { icon: n.createElement(p.default, { style: { color: "white" } }), onClick: U, onPointerDown: Q, style: S.buttonRight, type: "primaryText" })), [Q, U]),
                        te = n.useMemo(() => n.createElement(d.ZP, { icon: R ? n.createElement(h.default, null) : n.createElement(m.default, null), onClick: J, onPointerDown: Q, style: S.buttonMute, type: "primaryText" }), [J, Q, R]);
                    if (e && I) {
                        const t = e[C.activeStory],
                            a = e[C.activeStory - 1],
                            r = e[C.activeStory + 1];
                        return n.createElement(o.Z, { onPointerDown: q, onPointerMove: K, onPointerUp: X, ref: x, style: [S.container, F && S.containerWideScreen, Y] }, n.createElement(o.Z, { style: j && S.perspectiveZone }, n.createElement(o.Z, { style: [S.cubeContainer, j ? $ : B] }, n.createElement(o.Z, { style: [S.storyLeft, Y, A] }, a && !Z && ee, a && te, n.createElement(s.rh, { isFocused: !1 }, a)), n.createElement(o.Z, { style: [S.focusedStory, Y, W] }, !Z && ee, te, n.createElement(s.rh, { isFocused: !0, isMuted: R }, t)), n.createElement(o.Z, { style: [S.storyRight, Y, N] }, r && !Z && ee, r && te, n.createElement(s.rh, { isFocused: !1 }, r)))));
                    }
                },
                S = c.default.create((e) => ({ container: { height: "100%", width: "100%", touchAction: "none", overflow: "hidden", userSelect: "none" }, containerWideScreen: { width: "100%", flexDirection: "column", justifyContent: "center", backgroundColor: e.colors.alwaysBlack }, height600: { height: "600px", maxHeight: "600px", minHeight: "600px" }, height680: { height: "680px", maxHeight: "680px", minHeight: "680px" }, height800: { height: "800px", maxHeight: "800px", minHeight: "800px" }, perspectiveZone: { height: "100%", width: "100%", perspective: "800px" }, cubeContainer: { height: "100%", width: "100%", transformStyle: "preserve-3d" }, focusedStory: { zIndex: e.componentZIndices.appBarZIndex, height: "100%", width: "100%" }, storyLeft: { zIndex: e.componentZIndices.appBarZIndex, position: "absolute", height: "100%", width: "100%" }, storyRight: { zIndex: e.componentZIndices.appBarZIndex, position: "absolute", height: "100%", width: "100%" }, buttonLeft: { backgroundColor: "rgba(0,0,0,0.7)", zIndex: e.componentZIndices.appBarZIndex, width: e.spaces.space32, height: e.spaces.space32, position: "absolute", top: `calc(50% - ${e.spaces.space16})`, start: e.spaces.space16 }, buttonRight: { backgroundColor: "rgba(0,0,0,0.7)", zIndex: e.componentZIndices.appBarZIndex, width: e.spaces.space32, height: e.spaces.space32, position: "absolute", top: `calc(50% - ${e.spaces.space16})`, end: e.spaces.space16 }, buttonMute: { backgroundColor: "rgba(0,0,0,0.7)", zIndex: e.componentZIndices.appBarZIndex, width: e.spaces.space32, height: e.spaces.space32, position: "absolute", bottom: e.spaces.space16, end: e.spaces.space16 } })),
                k = ({ initialIndex: e = 0, ...t }) => n.createElement(v.AH, null, n.createElement(o.Z, { style: { height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, n.createElement(w, (0, r.Z)({}, t, { initialIndex: e }))));
        },
        824626: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => H });
            var r = a(202784),
                n = a(244448),
                s = a(400752),
                o = a(107267),
                i = a(392237),
                l = a(420182),
                c = a(443781),
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
                w = a(766225);
            const S = ({ isActive: e, isComplete: t }) => {
                    const { currentTimeMs: a, durationMs: s } = (0, n.wR)();
                    let o = 0;
                    if (t) o = 100;
                    else if (e) {
                        const e = (a || 0) / (s || 1);
                        o = 100 * Math.max(0, Math.min(1, e));
                    }
                    const i = { width: `${o}%` };
                    return r.createElement(b.Z, { style: k.progressIndicator }, r.createElement(b.Z, { style: [k.progressIndicatorFiller, i] }));
                },
                k = i.default.create((e) => ({ container: { height: "100%", width: "100%" }, pillContainer: { zIndex: 101, position: "absolute", top: 0, height: e.spaces.space32, display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "center", justifyContent: "center", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16, width: "100%" }, progressIndicator: { borderRadius: e.borderRadii.medium, height: e.spaces.space4, flexGrow: 1, backgroundColor: e.colors.alwaysBaseGray500, overflow: "hidden" }, progressIndicatorFiller: { height: e.spaces.space4, backgroundColor: e.colors.buttonAlwaysWhite, width: 0 } })),
                E = ({ children: e, p: t }) => {
                    const a = t.int("index") ?? 0,
                        { initializeStoryElements: s, navigateElement: o, navigateStoryWithTransition: i, storyPagerState: l } = (0, w.rX)(),
                        c = l.stories[a],
                        { setTracksFinished: d, tracksFinished: u } = (0, n.wR)();
                    r.useEffect(() => {
                        if (u) {
                            const e = l.stories[l.activeStory];
                            e.activeElement === e.elements.length - 1 ? i(1) : o(1), d?.(!1);
                        }
                    }, [o, i, d, l.activeStory, l.stories, u]),
                        (0, v.q)(() => {
                            s(e?.length || 0, a);
                        });
                    const p = c?.activeElement || 0;
                    if (e && c)
                        return r.createElement(
                            b.Z,
                            { style: k.container },
                            r.createElement(
                                b.Z,
                                { style: k.pillContainer },
                                e.map((e, t) => r.createElement(S, { isActive: t === p, isComplete: t < p, key: t })),
                            ),
                            e[p],
                        );
                };
            var C = a(731708),
                Z = a(127957),
                x = a(125363);
            const I = { base: { display: "flex", flexShrink: 1, flexBasis: "auto", width: "100%", height: "100%", overflow: "hidden" } },
                P = ({ p: e }) => {
                    const t = e.str("broadcastId"),
                        a = e.bool("autoplay") ?? !0,
                        n = e.bool("muted") ?? !0,
                        s = e.bool("minimal") ?? !1,
                        o = e.bool("enablePip") ?? !1,
                        i = (0, x.I0)(),
                        l = r.useMemo(() => i((e, t, { api: a }) => a.getHttpClient()), [i]);
                    if (!t) return r.createElement(C.ZP, null, "Broadcast not provided");
                    const c = { type: "broadcast", id: t };
                    return r.createElement(b.Z, { style: [I.base].filter(Boolean) }, r.createElement(Z.Z, { autoplay: a, config: "auto", controls: s, displayOptions: { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 }, enablePip: o, httpClient: l, initiallyMuted: n, precache: !0, size: "fill", twitterAuthedHttpClient: l, videoId: c }));
                };
            var T = a(45843),
                M = a(738584),
                R = a(872415),
                _ = a(614425);
            const F = { base: { display: "flex", flexShrink: 1, flexBasis: "auto", width: "100%", height: "100%", overflow: "hidden", maxWidth: "100vw" }, aspectRatioStyle: (e) => ({ aspectRatio: `${e ?? "auto"}` }), posterImage: { height: "100%", width: "100%", zIndex: -1, position: "absolute" } },
                z = ({ p: e }) => {
                    const t = e.url("src"),
                        a = e.str("alt"),
                        s = e.int("ar"),
                        o = e.int("cropAR"),
                        i = s && void 0 !== s,
                        l = void 0 !== o && o && !Number.isNaN(o),
                        d = e.int("duration"),
                        u = e.url("poster"),
                        p = e.str("postId"),
                        h = e.bool("autoplay") ?? !0,
                        m = e.bool("muted") ?? !0,
                        g = e.bool("loop") ?? !1,
                        f = e.bool("showControls") ?? !1,
                        y = (0, x.I0)(),
                        { featureSwitches: v } = (0, c.QZ)(),
                        w = r.useMemo(() => y((e, t, { api: a }) => a.getHttpClient()), [y]),
                        { isFocused: S, isMuted: k, setCurrentTimeMs: E, setDurationMs: Z, setTracksFinished: I } = (0, n.wR)(),
                        P = r.useRef(),
                        z = r.useRef();
                    r.useEffect(() => {
                        h && P.current?.playPreview();
                    }, [h]),
                        r.useEffect(() => {
                            S && P.current?.play();
                        }, [S]);
                    const D = r.useRef(!1);
                    r.useEffect(() => {
                        const e = P.current,
                            t = z.current;
                        t && e && (D.current || k ? k !== t.isMuted && (k ? ((D.current = !0), e.mute()) : e.unmute()) : (D.current = !0));
                    }, [k]);
                    const j = r.useCallback(
                            (e) => {
                                (P.current = e), S || e.pause();
                            },
                            [S],
                        ),
                        H = r.useCallback(
                            (e) => {
                                z.current = e;
                                const t = e.tracks?.[0]?.currentTimeMs,
                                    a = e.tracks?.[0]?.durationMs;
                                I?.(e.tracksFinished), E?.(t), Z?.(a);
                            },
                            [E, Z, I],
                        );
                    return t
                        ? r.createElement(
                              b.Z,
                              { style: [F.base, i ? F.aspectRatioStyle(s ?? 1) : null, l ? F.aspectRatioStyle(o ?? 1) : null].filter(Boolean) },
                              r.createElement(M.Z, { "aria-label": a ?? "video", autoplay: h, basePlayerClass: _.Y7, configType: "static", contentId: p ?? "", contentType: "media_entity", displayOptions: { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 }, durationMs: d ?? 0, enableVideoPlayerCaptionRendering: !0, featureProvider: v, httpClient: w, initiallyMuted: m, loop: g, onApiReady: j, onStateUpdate: H, playbackSessionId: p ?? "", poster: u ?? "", precache: !0, size: "fill", twitterAuthedHttpClient: w, variants: [{ src: t, type: "application/x-mpegURL" }] }, ({ containerRef: e, guestsState: t, playerApi: a, playerState: n }) => (f ? r.createElement(R.Z, { containerRef: e, enablePiP: !0, guestsState: t, playerApi: a, playerState: n, useKeyboardShortcuts: !0 }) : null)),
                              u && r.createElement(T.Z, { source: u, style: F.posterImage }),
                          )
                        : r.createElement(C.ZP, null, "Video not provided");
                },
                D = (0, n.GZ)("JetfuelV2 Runtime");
            const j = (e, t) => (e ? h.mH : t ? h.OG : h.CP),
                H = function ({ children: e }) {
                    const [t] = (0, s.KO)(l.dd),
                        a = t.apiClient,
                        [h] = (0, s.KO)(l.qc),
                        b = h.getState(),
                        v = (0, o.useHistory)(),
                        w = (0, u.F5)(b),
                        S = Intl.DateTimeFormat().resolvedOptions().timeZone,
                        k = (0, p.Z)(),
                        [C] = (0, s.KO)(m.k),
                        { featureSwitches: Z } = r.useContext(c.rC),
                        x = location.host.includes("x.com") && Z.isTrue("x_jetfuel_enable_test_cluster"),
                        I = "darker" === i.default.theme.paletteName ? "dark" : "dark" === i.default.theme.paletteName ? "dim" : i.default.theme.paletteName,
                        T = r.useMemo(() => {
                            const e = {};
                            return (e["x-jf-client-theme"] = I), (e["x-jf-v"] = "JP-4"), S && (e.timezone = S), w && (e["accept-language"] = (0, d.o)(w)), e;
                        }, [I, S, w]),
                        M = j(C, x),
                        R = r.useMemo(
                            () => ({
                                httpPOST: async (e, t) => {
                                    let r,
                                        n = !1;
                                    const s = e.startsWith("/") ? e : `/${e}`;
                                    try {
                                        (r = await a.jetfuelForm(s, T, Object.fromEntries(t.entries()), M)), (n = !0);
                                    } catch (e) {
                                        n = !1;
                                    }
                                    return { ok: n, data: r };
                                },
                                httpGet: async (e) => {
                                    let t,
                                        r = !1;
                                    const n = e.startsWith("/") ? e : `/${e}`;
                                    try {
                                        (t = await a.jetfuel(n, T, M)), (r = !0);
                                    } catch (e) {
                                        r = !1;
                                    }
                                    return { ok: r, data: t };
                                },
                            }),
                            [a, T, M],
                        );
                    r.useEffect(() => {
                        document.body.setAttribute("data-theme", I ?? "light");
                    }, [I]);
                    const _ = r.useMemo(() => {
                        (D.net = R), (D.history = v), (D.analytics = k);
                        const e = { "x.com.GenericURT": g.Z, "x.com.Video": z, "x.com.Broadcast": P, StoryPager: y.Z, "StoryPager.Story": E, SignupArkoseSecurityChallenge: f.Z };
                        return D.addComponentOverride(e), D;
                    }, [R, v, k]);
                    return "undefined" == typeof window ? e : r.createElement(n.N_, { analytics: k, runtime: _ }, e);
                };
        },
        383675: (e, t, a) => {
            "use strict";
            a.d(t, { R: () => l, Z: () => i });
            var r = a(503768),
                n = a(644829),
                s = a(750085),
                o = a(218951);
            const i = ({ endpointParams: e, endpointUrl: t, isUserRefreshable: a, timelineId: r }) => (0, o.Z)({ timelineId: r, isUserRefreshable: a, network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchGeneric, getEndpointParams: ({ count: a, cursor: r }) => ({ ...e, cursor: "string" == typeof r ? r : void 0, count: a, endpointUrl: t }) }, context: "FETCH_TIMELINE", perfKey: "generic" }),
                l = (e, t) => (0, o.Z)({ timelineId: `generic-graphql-timeline-${e}`, isUserRefreshable: t, network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchGenericTimelineById, getEndpointParams: ({ count: t, cursor: a }) => ({ cursor: "string" == typeof a ? a : void 0, count: t, timelineId: e }) }, formatResponse: s.Z, context: "FETCH_GENERIC_TIMELINE_GQL", perfKey: "genericGQL" });
        },
        929378: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => i, t: () => o });
            var r = a(323265);
            const n = "arkose-subtask",
                s = "arkose",
                o = Object.freeze({ passive: "PASSIVE", interactive: "INTERACTIVE" }),
                i = {
                    loadIframe: (e, t, a, o) => {
                        e.scribe({ action: "load", data: { items: [{ guest_id: t, os: r.ZP.osString(), arkose_keys: { mobile: a, web: o } }] }, element: s, page: n });
                    },
                    loadIframeFailed: (e, t, a, o) => {
                        e.scribe({ action: "fail", data: { items: [{ guest_id: t, os: r.ZP.osString(), arkose_keys: { mobile: a, web: o } }] }, element: s, page: n });
                    },
                    completeChallenge: (e, t, a, o, i) => {
                        e.scribe({ action: "complete", data: { items: [{ guest_id: t, os: r.ZP.osString(), challenge_type: a, arkose_keys: { mobile: o, web: i } }] }, element: s, page: n });
                    },
                    suppressedChallenge: (e, t, a, i) => {
                        e.scribe({ action: "show", data: { items: [{ guest_id: t, challenge_type: o.passive, os: r.ZP.osString(), arkose_keys: { mobile: a, web: i } }] }, element: s, page: n });
                    },
                    shownChallenge: (e, t, a, i) => {
                        e.scribe({ action: "show", data: { items: [{ guest_id: t, challenge_type: o.interactive, os: r.ZP.osString(), arkose_keys: { mobile: a, web: i } }] }, element: s, page: n });
                    },
                };
        },
        956935: (e, t, a) => {
            var r = a(482609),
                n = a(600726);
            (t = r(!1)).i(n), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        631673: (e, t, a) => {
            var r = a(46062),
                n = a(956935);
            "string" == typeof (n = n.__esModule ? n.default : n) && (n = [[e.id, n, ""]]);
            var s = { insert: "head", singleton: !1 };
            r(n, s);
            e.exports = n.locals || {};
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame~-2b9410ca.0310c41a.js.map

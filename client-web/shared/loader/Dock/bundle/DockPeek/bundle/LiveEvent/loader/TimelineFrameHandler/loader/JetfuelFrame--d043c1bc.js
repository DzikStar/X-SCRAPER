(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame--d043c1bc"],
    {
        736230: (e, t, a) => {
            "use strict";
            a.d(t, { CP: () => r, OG: () => n, bP: () => i, mH: () => o });
            var s = a(111677);
            a.n(s)().g61ed8a4;
            const r = "https://jf.x.com",
                n = "https://jf-t.x.com",
                o = "https://localhost.x.com:3000",
                i = Object.freeze({ MARCH_MADNESS_PICK: 1 });
        },
        355335: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => l, k: () => i });
            a(543673), a(240753), a(128399), a(136728);
            var s = a(202784),
                r = a(565058),
                n = a(400752),
                o = a(107267);
            const i = (0, r.cn)(!1),
                l = () => {
                    const e = (0, o.useHistory)(),
                        t = (0, o.useLocation)(),
                        [a, r] = (0, n.KO)(i);
                    s.useEffect(() => {
                        const e = new URLSearchParams(t.search).get("jfDev"),
                            a = sessionStorage.getItem("jfDev");
                        let s = !1;
                        e ? (("1" !== e && "true" !== e) || (s = !0), ("0" !== e && "false" !== e) || (s = !1)) : (s = "true" === a), s ? (r(!0), sessionStorage.setItem("jfDev", "true")) : (r(!1), sessionStorage.removeItem("jfDev"));
                    }, [t.search, r]);
                    const l = s.useCallback(
                        (a) => {
                            const s = new URLSearchParams(t.search);
                            a ? (s.set("jfDev", "1"), sessionStorage.setItem("jfDev", "true")) : (s.delete("jfDev"), sessionStorage.removeItem("jfDev"));
                            const n = s.toString();
                            e.push({ pathname: t.pathname, search: n }), r(a);
                        },
                        [e, t.pathname, t.search, r],
                    );
                    return {
                        isDev: a,
                        enableDev: s.useCallback(() => {
                            l(!0);
                        }, [l]),
                        disableDev: s.useCallback(() => {
                            l(!1);
                        }, [l]),
                    };
                };
        },
        553160: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => h });
            var s = a(202784),
                r = a(457311),
                n = a(111677),
                o = a.n(n),
                i = a(810641),
                l = a(519896),
                c = a(383675),
                d = a(293115);
            const u = o().e9f1fbcc,
                m = o().a3b80be6,
                p = () => s.createElement(r.Z, { header: u, message: m }),
                h = ({ children: e, p: t }) => {
                    const a = t.str("timelineId"),
                        r = t.str("name") ?? "JF-GenericURT",
                        n = t.str("scribe_page") ?? "jf-urt",
                        o = t.str("scribe_section") ?? void 0,
                        u = ((e) => s.useMemo(() => (e ? (0, c.R)(e, !1) : void 0), [e]))(a);
                    if (u) {
                        const e = { page: n, section: o };
                        return s.createElement(d.nO, { namespace: e }, s.createElement(i.Z, { module: u, prerollDisplayLocation: l.Nw.OTHER, refreshControl: null, renderEmptyState: p, title: r }));
                    }
                };
        },
        725102: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => _ });
            var s = a(202784),
                r = a(244448),
                n = a(325686),
                o = a(466999),
                i = a(107267),
                l = a(392237),
                c = a(167630),
                d = a(111677),
                u = a.n(d),
                m = a(403808),
                p = a(323265),
                h = a(443781),
                f = a(125363),
                g = a(390387),
                b = a(929378),
                y = a(163889),
                k = a(725516);
            const v = Object.freeze({ light: "default", dark: "dim", darker: "dark", business: "business" }),
                w = u().ic6aa5f4,
                E = 327,
                S = 468,
                C = 500,
                Z = 523,
                I = l.default.create((e) => ({ container: { position: "relative", alignItems: "center" }, spinner: { alignItems: "center", position: "absolute", start: 0, end: 0, justifyContent: "center" }, label: { color: e.colors.text } })),
                _ = ({ p: e }) => {
                    const t = e.str("publicKey") ?? e.str("webKey"),
                        { featureSwitches: a } = s.useContext(h.rC),
                        d = (0, k.z)(),
                        u = (0, f.v9)(g.OW),
                        _ = (0, i.useLocation)(),
                        P = e.str("dataExchangeToken") ?? "",
                        R = e.str("name") ?? "arkose_token",
                        x = t ? a.getStringValue(t) : "",
                        M = s.useMemo(() => p.ZP.isWebView(), []),
                        T = M ? (window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "default") : v[l.default.theme.paletteName],
                        j = s.useMemo(() => M || window.innerWidth < S, [M]),
                        [O, D] = s.useState(j ? C : Z),
                        [F, L] = s.useState(j ? E : S),
                        [H, N] = s.useState(b.t.passive),
                        A = s.useMemo(() => (j ? Math.min((window.innerWidth - 32) / E, (window.innerHeight - 32) / C) : 1), [j]),
                        z = _.query?.guestId,
                        G = s.useMemo(() => (M && "string" == typeof z ? z : M ? "" : u || ""), [M, z, u]),
                        U = s.useCallback(() => {
                            b.Z.loadIframe(d, G, t || "", t || "");
                        }, [d, G, t]),
                        { change: W, submit: B, values: K } = s.useContext(r.q3),
                        [V, $] = s.useState("loading"),
                        J = (0, m.r)((e) => {
                            if ("string" == typeof e.data)
                                try {
                                    const a = JSON.parse(e.data);
                                    switch (a.eventId) {
                                        case "challenge-suppressed":
                                            b.Z.suppressedChallenge(d, G, t || "0", t || "0"), N(b.t.passive);
                                            break;
                                        case "challenge-shown":
                                            b.Z.shownChallenge(d, G, t || "0", t || "0"), N(b.t.interactive), $("shown");
                                            break;
                                        case "challenge-complete": {
                                            b.Z.completeChallenge(d, G, H, t || "0", t || "0");
                                            const e = a.payload.sessionToken;
                                            W(R, e), $("complete");
                                            break;
                                        }
                                        case "challenge-iframeSize":
                                            D(a.payload.frameHeight), L(a.payload.frameWidth);
                                            break;
                                        case "challenge-loaded":
                                            $("loaded");
                                            break;
                                        case "challenge-failed":
                                            $("failed");
                                            break;
                                        case "challenge-error":
                                            $("errored");
                                    }
                                } catch (e) {
                                    $("errored"), (0, y.ZP)(e);
                                }
                        });
                    s.useEffect(
                        () => (
                            window.addEventListener("message", J, !1),
                            () => {
                                window.removeEventListener("message", J, !1);
                            }
                        ),
                        [J],
                    );
                    const q = null != K[R],
                        Q = s.useRef(!1);
                    return (
                        s.useEffect(() => {
                            q && !Q.current && ((Q.current = !0), B());
                        }, [q, B]),
                        s.createElement(n.Z, { style: I.container }, s.createElement(n.Z, { style: [I.spinner, { height: O }] }, "loading" === V || "loaded" === V ? s.createElement(c.Z, null) : "complete" === V ? s.createElement(o.Z, { style: I.label }, w) : null), s.createElement("iframe", { height: O, id: "arkoseFrame", onLoad: U, src: [`https://iframe.arkoselabs.com/${x}/index.html?theme=${T}`, P && `&data=${P}`].filter(Boolean).join(""), style: { MozTransform: `scale(${A})`, OTransform: `scale(${A})`, WebkitTransform: `scale(${A})`, borderWidth: 0, MozTransformOrigin: "50% 0", OTransformOrigin: "50% 0", WebkitTransformOrigin: "50% 0", alignSelf: "center" }, title: "arkoseFrame", width: F }))
                    );
                };
        },
        634125: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => M });
            var s = a(202784),
                r = a(244448),
                n = a(400752),
                o = a(107267),
                i = a(392237),
                l = a(420182),
                c = a(443781),
                d = a(689048),
                u = a(390387),
                m = a(725405),
                p = a(736230),
                h = a(355335),
                f = a(553160),
                g = a(725102),
                b = a(325686),
                y = a(731708),
                k = a(127957),
                v = a(125363);
            const w = { base: { display: "flex", flexShrink: 1, flexBasis: "auto", width: "100%", height: "100%", overflow: "hidden" } },
                E = ({ p: e }) => {
                    const t = e.str("broadcastId"),
                        a = e.bool("autoplay") ?? !0,
                        r = e.bool("muted") ?? !0,
                        n = e.bool("minimal") ?? !1,
                        o = e.bool("enablePip") ?? !1,
                        i = (0, v.I0)(),
                        l = s.useMemo(() => i((e, t, { api: a }) => a.getHttpClient()), [i]);
                    if (!t) return s.createElement(y.ZP, null, "Broadcast not provided");
                    const c = { type: "broadcast", id: t };
                    return s.createElement(b.Z, { style: [w.base].filter(Boolean) }, s.createElement(k.Z, { autoplay: a, config: "auto", controls: n, displayOptions: { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 }, enablePip: o, httpClient: l, initiallyMuted: r, precache: !0, size: "fill", twitterAuthedHttpClient: l, videoId: c }));
                };
            var S = a(45843),
                C = a(738584),
                Z = a(872415),
                I = a(614425);
            const _ = { base: { display: "flex", flexShrink: 1, flexBasis: "auto", width: "100%", height: "100%", overflow: "hidden", maxWidth: "100vw" }, aspectRatioStyle: (e) => ({ aspectRatio: `${e ?? "auto"}` }), posterImage: { height: "100%", width: "100%", zIndex: -1, position: "absolute" } },
                P = ({ p: e }) => {
                    const t = e.url("src"),
                        a = e.str("alt"),
                        n = e.int("ar"),
                        o = e.int("cropAR"),
                        i = n && void 0 !== n,
                        l = void 0 !== o && o && !Number.isNaN(o),
                        d = e.int("duration"),
                        u = e.url("poster"),
                        m = e.str("postId"),
                        p = e.bool("autoplay") ?? !0,
                        h = e.bool("muted") ?? !0,
                        f = e.bool("loop") ?? !1,
                        g = e.bool("showControls") ?? !1,
                        k = (0, v.I0)(),
                        { featureSwitches: w } = (0, c.QZ)(),
                        E = s.useMemo(() => k((e, t, { api: a }) => a.getHttpClient()), [k]),
                        { isFocused: P, isMuted: R, setCurrentTimeMs: x, setDurationMs: M, setTracksFinished: T } = (0, r.wR)(),
                        j = s.useRef(),
                        O = s.useRef();
                    s.useEffect(() => {
                        p && j.current?.playPreview();
                    }, [p]),
                        s.useEffect(() => {
                            P && j.current?.play();
                        }, [P]);
                    const D = s.useRef(!1);
                    s.useEffect(() => {
                        const e = j.current,
                            t = O.current;
                        t && e && (D.current || R ? R !== t.isMuted && (R ? ((D.current = !0), e.mute()) : e.unmute()) : (D.current = !0));
                    }, [R]);
                    const F = s.useCallback(
                            (e) => {
                                (j.current = e), P || e.pause();
                            },
                            [P],
                        ),
                        L = s.useCallback(
                            (e) => {
                                O.current = e;
                                const t = e.tracks?.[0]?.currentTimeMs,
                                    a = e.tracks?.[0]?.durationMs;
                                T?.(e.tracksFinished), x?.(t), M?.(a);
                            },
                            [x, M, T],
                        );
                    return t
                        ? s.createElement(
                              b.Z,
                              { style: [_.base, i ? _.aspectRatioStyle(n ?? 1) : null, l ? _.aspectRatioStyle(o ?? 1) : null].filter(Boolean) },
                              s.createElement(C.Z, { "aria-label": a ?? "video", autoplay: p, basePlayerClass: I.Y7, configType: "static", contentId: m ?? "", contentType: "media_entity", displayOptions: { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 }, durationMs: d ?? 0, enableVideoPlayerCaptionRendering: !0, featureProvider: w, httpClient: E, initiallyMuted: h, loop: f, onApiReady: F, onStateUpdate: L, playbackSessionId: m ?? "", poster: u ?? "", precache: !0, size: "fill", twitterAuthedHttpClient: E, variants: [{ src: t, type: "application/x-mpegURL" }] }, ({ containerRef: e, guestsState: t, playerApi: a, playerState: r }) => (g ? s.createElement(Z.Z, { containerRef: e, enablePiP: !0, guestsState: t, playerApi: a, playerState: r, useKeyboardShortcuts: !0 }) : null)),
                              u && s.createElement(S.Z, { source: u, style: _.posterImage }),
                          )
                        : s.createElement(y.ZP, null, "Video not provided");
                },
                R = (0, r.GZ)("JetfuelV2 Runtime");
            const x = (e, t) => (e ? p.mH : t ? p.OG : p.CP),
                M = function ({ children: e }) {
                    const [t] = (0, n.KO)(l.dd),
                        a = t.apiClient,
                        [p] = (0, n.KO)(l.qc),
                        b = p.getState(),
                        y = (0, o.useHistory)(),
                        k = (0, u.F5)(b),
                        v = Intl.DateTimeFormat().resolvedOptions().timeZone,
                        w = (0, m.Z)(),
                        [S] = (0, n.KO)(h.k),
                        { featureSwitches: C } = s.useContext(c.rC),
                        Z = location.host.includes("x.com") && C.isTrue("x_jetfuel_enable_test_cluster"),
                        I = "darker" === i.default.theme.paletteName ? "dark" : "dark" === i.default.theme.paletteName ? "dim" : i.default.theme.paletteName,
                        _ = s.useMemo(() => {
                            const e = {};
                            return (e["x-jf-client-theme"] = I), (e["x-jf-v"] = "JP-4"), v && (e.timezone = v), k && (e["accept-language"] = (0, d.o)(k)), e;
                        }, [I, v, k]),
                        M = x(S, Z),
                        T = s.useMemo(
                            () => ({
                                httpPOST: async (e, t) => {
                                    let s,
                                        r = !1;
                                    const n = e.startsWith("/") ? e : `/${e}`;
                                    try {
                                        (s = await a.jetfuelForm(n, _, Object.fromEntries(t.entries()), M)), (r = !0);
                                    } catch (e) {
                                        r = !1;
                                    }
                                    return { ok: r, data: s };
                                },
                                httpGet: async (e) => {
                                    let t,
                                        s = !1;
                                    const r = e.startsWith("/") ? e : `/${e}`;
                                    try {
                                        (t = await a.jetfuel(r, _, M)), (s = !0);
                                    } catch (e) {
                                        s = !1;
                                    }
                                    return { ok: s, data: t };
                                },
                            }),
                            [a, _, M],
                        );
                    s.useEffect(() => {
                        document.body.setAttribute("data-theme", I ?? "light");
                    }, [I]);
                    const j = s.useMemo(() => {
                        (R.net = T), (R.history = y), (R.analytics = w);
                        const e = { "x.com.GenericURT": f.Z, "x.com.Video": P, "x.com.Broadcast": E, SignupArkoseSecurityChallenge: g.Z };
                        return R.addComponentOverride(e), R;
                    }, [T, y, w]);
                    return "undefined" == typeof window ? e : s.createElement(r.N_, { analytics: w, runtime: j }, e);
                };
        },
        383675: (e, t, a) => {
            "use strict";
            a.d(t, { R: () => l, Z: () => i });
            var s = a(503768),
                r = a(644829),
                n = a(750085),
                o = a(218951);
            const i = ({ endpointParams: e, endpointUrl: t, isUserRefreshable: a, timelineId: s }) => (0, o.Z)({ timelineId: s, isUserRefreshable: a, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchGeneric, getEndpointParams: ({ count: a, cursor: s }) => ({ ...e, cursor: "string" == typeof s ? s : void 0, count: a, endpointUrl: t }) }, context: "FETCH_TIMELINE", perfKey: "generic" }),
                l = (e, t) => (0, o.Z)({ timelineId: `generic-graphql-timeline-${e}`, isUserRefreshable: t, network: { getEndpoint: (e) => e.withEndpoint(s.ZP).fetchGenericTimelineById, getEndpointParams: ({ count: t, cursor: a }) => ({ cursor: "string" == typeof a ? a : void 0, count: t, timelineId: e }) }, formatResponse: n.Z, context: "FETCH_GENERIC_TIMELINE_GQL", perfKey: "genericGQL" });
        },
        929378: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => i, t: () => o });
            var s = a(323265);
            const r = "arkose-subtask",
                n = "arkose",
                o = Object.freeze({ passive: "PASSIVE", interactive: "INTERACTIVE" }),
                i = {
                    loadIframe: (e, t, a, o) => {
                        e.scribe({ action: "load", data: { items: [{ guest_id: t, os: s.ZP.osString(), arkose_keys: { mobile: a, web: o } }] }, element: n, page: r });
                    },
                    loadIframeFailed: (e, t, a, o) => {
                        e.scribe({ action: "fail", data: { items: [{ guest_id: t, os: s.ZP.osString(), arkose_keys: { mobile: a, web: o } }] }, element: n, page: r });
                    },
                    completeChallenge: (e, t, a, o, i) => {
                        e.scribe({ action: "complete", data: { items: [{ guest_id: t, os: s.ZP.osString(), challenge_type: a, arkose_keys: { mobile: o, web: i } }] }, element: n, page: r });
                    },
                    suppressedChallenge: (e, t, a, i) => {
                        e.scribe({ action: "show", data: { items: [{ guest_id: t, challenge_type: o.passive, os: s.ZP.osString(), arkose_keys: { mobile: a, web: i } }] }, element: n, page: r });
                    },
                    shownChallenge: (e, t, a, i) => {
                        e.scribe({ action: "show", data: { items: [{ guest_id: t, challenge_type: o.interactive, os: s.ZP.osString(), arkose_keys: { mobile: a, web: i } }] }, element: n, page: r });
                    },
                };
        },
        956935: (e, t, a) => {
            var s = a(482609),
                r = a(600726);
            (t = s(!1)).i(r), t.push([e.id, "\n", ""]), (e.exports = t);
        },
        631673: (e, t, a) => {
            var s = a(46062),
                r = a(956935);
            "string" == typeof (r = r.__esModule ? r.default : r) && (r = [[e.id, r, ""]]);
            var n = { insert: "head", singleton: !1 };
            s(r, n);
            e.exports = r.locals || {};
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame--d043c1bc.83d7edca.js.map

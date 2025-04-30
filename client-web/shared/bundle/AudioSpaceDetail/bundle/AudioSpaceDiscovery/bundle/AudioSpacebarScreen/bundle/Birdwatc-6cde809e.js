"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"],
    {
        59669: (e, t, o) => {
            o.d(t, { rh: () => i, wR: () => s });
            var r = o(202784);
            const a = r.createContext({ currentTimeMs: 0, setCurrentTimeMs: () => {}, durationMs: 0, setDurationMs: () => {}, tracksFinished: !1, setTracksFinished: () => {} }),
                i = ({ children: e, isFocused: t, isMuted: o }) => {
                    const [i, s] = r.useState(0),
                        [n, l] = r.useState(0),
                        [c, d] = r.useState(!1),
                        u = r.useCallback(
                            (e) => {
                                e !== c && d(e);
                            },
                            [c],
                        ),
                        p = { currentTimeMs: i, setCurrentTimeMs: s, durationMs: n, setDurationMs: l, tracksFinished: c, setTracksFinished: u, isFocused: t, isMuted: o };
                    return r.createElement(a.Provider, { value: p }, e);
                };
            function s() {
                const e = r.useContext(a);
                return e || {};
            }
        },
        552619: (e, t, o) => {
            o.d(t, { Z: () => m });
            var r = o(202784),
                a = o(325686),
                i = o(45843),
                s = o(731708),
                n = o(738584),
                l = o(614425),
                c = o(443781),
                d = o(125363),
                u = o(59669);
            const p = { base: { display: "flex", flexShrink: 1, flexBasis: "auto", width: "100%", height: "100%", overflow: "hidden", maxWidth: "100vw" }, aspectRatioStyle: (e) => ({ aspectRatio: `${e ?? "auto"}` }), posterImage: { height: "100%", width: "100%", zIndex: -1, position: "absolute" } },
                m = ({ p: e }) => {
                    const t = e.url("src"),
                        o = e.str("alt"),
                        m = e.int("ar"),
                        h = e.int("cropAR"),
                        g = m && void 0 !== m,
                        y = void 0 !== h && h && !Number.isNaN(h),
                        b = e.int("duration"),
                        f = e.url("poster"),
                        $ = e.str("postId"),
                        S = e.bool("autoplay") ?? !0,
                        Z = e.bool("muted") ?? !0,
                        v = e.bool("loop") ?? !1,
                        k = (0, d.I0)(),
                        { featureSwitches: w } = (0, c.QZ)(),
                        x = r.useMemo(() => k((e, t, { api: o }) => o.getHttpClient()), [k]),
                        { isFocused: C, isMuted: M, setCurrentTimeMs: I, setDurationMs: E, setTracksFinished: R } = (0, u.wR)(),
                        P = r.useRef(),
                        T = r.useRef();
                    r.useEffect(() => {
                        C && P.current?.play();
                    }, [C]),
                        r.useEffect(() => {
                            const e = P.current,
                                t = T.current;
                            t && e && M !== t.isMuted && (M ? e.mute() : e.unmute());
                        });
                    const F = r.useCallback(
                            (e) => {
                                (P.current = e), C || e.pause();
                            },
                            [C],
                        ),
                        j = r.useCallback(
                            (e) => {
                                T.current = e;
                                const t = e.tracks?.[0]?.currentTimeMs,
                                    o = e.tracks?.[0]?.durationMs;
                                R?.(e.tracksFinished), I?.(t), E?.(o);
                            },
                            [I, E, R],
                        );
                    return t ? r.createElement(a.Z, { style: [p.base, g ? p.aspectRatioStyle(m ?? 1) : null, y ? p.aspectRatioStyle(h ?? 1) : null].filter(Boolean) }, r.createElement(n.Z, { "aria-label": o ?? "video", autoplay: S, basePlayerClass: l.Y7, configType: "static", contentId: $ ?? "", contentType: "media_entity", displayOptions: { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 }, durationMs: b ?? 0, enableVideoPlayerCaptionRendering: !0, featureProvider: w, httpClient: x, initiallyMuted: Z, loop: v, onApiReady: F, onStateUpdate: j, playbackSessionId: $ ?? "", poster: f ?? "", precache: !0, size: "fill", twitterAuthedHttpClient: x, variants: [{ src: t, type: "application/x-mpegURL" }] }), f && r.createElement(i.Z, { source: f, style: p.posterImage })) : r.createElement(s.ZP, null, "Video not provided");
                };
        },
        417681: (e, t, o) => {
            o.d(t, { _: () => i, u: () => a });
            var r = o(202784);
            const a = r.createContext(!1),
                i = r.createContext(!1);
        },
        738124: (e, t, o) => {
            o.d(t, { Z: () => Ve });
            var r = o(202784),
                a = o(392237),
                i = o(537392),
                s = o(725405),
                n = o(996568),
                l = o(601066),
                c = o(199035),
                d = o(736932),
                u = o(620740),
                p = o(210633),
                m = o(616825),
                h = o(684799),
                g = o(656825),
                y = o(795164),
                b = o(665161),
                f = o(761459),
                $ = o(271215),
                S = o(288513),
                Z = o(693603),
                v = o(416028),
                k = o(908264),
                w = o(361309),
                x = o(943695),
                C = o(438013),
                M = o(552531),
                I = o(610467),
                E = o(183854),
                R = o(172993),
                P = o(779227),
                T = o(723129),
                F = o(312604),
                j = o(121152),
                W = o(95894),
                A = o(77481),
                D = o(343158),
                V = o(800539),
                B = o(710856),
                G = o(922477),
                _ = o(233531),
                H = o(792842),
                N = o(422089),
                L = o(778468),
                z = o(267663),
                O = o(152381),
                Q = o(669189),
                U = o(944047),
                Y = o(421855),
                q = o(675299),
                X = o(923513),
                J = o(685536),
                K = o(692273),
                ee = o(530963),
                te = o(586548),
                oe = o(325686),
                re = o(731708),
                ae = o(127957),
                ie = o(905996),
                se = o(125363),
                ne = o(293115),
                le = o(725516),
                ce = o(579578);
            const de = { base: { display: "flex", flexShrink: 1, flexBasis: "auto", width: "100%", height: "100%", overflow: "hidden" } },
                ue = ({ children: e, props: t, scribeContext: o, style: a }) => {
                    const i = t.str("broadcastId"),
                        s = t.bool("autoplay") ?? !0,
                        n = t.bool("muted") ?? !0,
                        l = t.bool("minimal") ?? !1,
                        c = t.bool("enablePip") ?? !1,
                        d = t.str("scribe_page"),
                        u = t.str("scribe_section"),
                        p = (0, le.z)(),
                        m = (0, se.I0)(),
                        h = r.useMemo(() => m((e, t, { api: o }) => o.getHttpClient()), [m]),
                        g = r.useMemo(() => ({ page: d || o.page, section: u || o.section, component: o.component, element: o.element }), [d, u, o]),
                        y = r.useMemo(() => {
                            const e = { scribeContext: { ...p.contextualScribeNamespace, ...g } },
                                t = {
                                    log: (e) => {
                                        const { namespace: t } = e;
                                        if (t.action) {
                                            const e = (0, ce.Q)(t.action, o);
                                            p.scribe({ ...g, ...t, data: e });
                                        }
                                    },
                                };
                            return new ie.Z(t, { log: () => {} }, h, e);
                        }, [p, o, h, g]);
                    if (!i) return r.createElement(re.ZP, null, "Broadcast not provided");
                    const b = { type: "broadcast", id: i };
                    return r.createElement(oe.Z, { style: [de.base, a].filter(Boolean) }, r.createElement(ne.nO, { namespace: g }, r.createElement(ae.Z, { analytics: y, autoplay: s, config: "auto", controls: l, displayOptions: { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 }, enablePip: c, httpClient: h, initiallyMuted: n, precache: !0, size: "fill", twitterAuthedHttpClient: h, videoId: b })));
                };
            var pe = o(45843),
                me = o(738584),
                he = o(614425),
                ge = o(443781),
                ye = o(59669);
            const be = { base: { display: "flex", flexShrink: 1, flexBasis: "auto", width: "100%", height: "100%", overflow: "hidden" }, aspectRatioStyle: (e) => ({ aspectRatio: `${e ?? "auto"}`, width: "auto" }), posterImage: { height: "100%", width: "100%", zIndex: -1, position: "absolute" } },
                fe = ({ props: e, scribeContext: t, style: o }) => {
                    const a = e.url("src"),
                        i = e.str("alt"),
                        n = e.int("ar"),
                        l = e.int("cropAR"),
                        c = void 0 === o.width && n && void 0 !== n,
                        d = void 0 !== l && l && !Number.isNaN(l),
                        u = e.int("duration"),
                        p = e.url("poster"),
                        m = e.str("postId"),
                        h = e.bool("autoplay") ?? !0,
                        g = e.bool("muted") ?? !0,
                        y = e.bool("loop") ?? !1,
                        b = e.str("scribe_page"),
                        f = e.str("scribe_section"),
                        $ = (0, s.Z)(),
                        S = (0, se.I0)(),
                        { featureSwitches: Z } = (0, ge.QZ)(),
                        v = r.useMemo(() => S((e, t, { api: o }) => o.getHttpClient()), [S]),
                        { isFocused: k, isMuted: w, setCurrentTimeMs: x, setDurationMs: C, setTracksFinished: M } = (0, ye.wR)(),
                        I = r.useRef(),
                        E = r.useRef();
                    r.useEffect(() => {
                        k && I.current?.play();
                    }, [k]),
                        r.useEffect(() => {
                            const e = I.current,
                                t = E.current;
                            t && e && w !== t.isMuted && (w ? e.mute() : e.unmute());
                        });
                    const R = r.useCallback(
                            (e) => {
                                (I.current = e), k || e.pause();
                            },
                            [k],
                        ),
                        P = r.useCallback(
                            (e) => {
                                E.current = e;
                                const t = e.tracks?.[0]?.currentTimeMs,
                                    o = e.tracks?.[0]?.durationMs;
                                M?.(e.tracksFinished), x?.(t), C?.(o);
                            },
                            [x, C, M],
                        ),
                        T = r.useMemo(() => ({ page: b || t.page, section: f || t.section, component: t.component, element: t.element }), [b, f, t]),
                        F = r.useMemo(() => {
                            const e = { scribeContext: { ...$.contextualScribeNamespace, ...T } },
                                o = {
                                    log: (e) => {
                                        const { namespace: o } = e;
                                        if (o.action) {
                                            const e = (0, ce.Q)(o.action, t);
                                            $.scribe({ ...T, ...o, data: e });
                                        }
                                    },
                                };
                            return new ie.Z(o, { log: () => {} }, v, e);
                        }, [$, t, v, T]);
                    return a ? r.createElement(oe.Z, { style: [be.base, o, c ? be.aspectRatioStyle(n ?? 1) : null, d ? be.aspectRatioStyle(l ?? 1) : null].filter(Boolean) }, r.createElement(ne.nO, { namespace: T }, r.createElement(me.Z, { analytics: F, "aria-label": i ?? "video", autoplay: h, basePlayerClass: he.Y7, configType: "static", contentId: m ?? "", contentType: "media_entity", displayOptions: { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 }, durationMs: u ?? 0, enableVideoPlayerCaptionRendering: !0, featureProvider: Z, httpClient: v, initiallyMuted: g, loop: y, onApiReady: R, onStateUpdate: P, playbackSessionId: m ?? "", poster: p ?? "", precache: !0, size: "fill", twitterAuthedHttpClient: v, variants: [{ src: a, type: "application/x-mpegURL" }] })), p && r.createElement(pe.Z, { source: p, style: be.posterImage })) : r.createElement(re.ZP, null, "Video not provided");
                };
            var $e = o(530732);
            const Se = ({ children: e, overrideStyles: t, props: o, style: a }) => {
                const i = Object.keys(t).length > 0;
                return r.createElement($e.Z, { interactive: i, interactiveStyles: { hoverStyle: t.hover, pressedStyle: t.active }, style: [{ flexDirection: "row", flexGrow: 0, flexShrink: 1, alignItems: "stretch" }, a] }, e);
            };
            var Ze = o(701333);
            const ve = 0,
                ke = 1,
                we = 2,
                xe = ({ children: e, props: t, style: o }) => {
                    const a = t.int("gap") ?? 2;
                    let i, s;
                    switch (t.enum("align")) {
                        case ve:
                            (i = "start"), (s = "left");
                            break;
                        case we:
                            (i = "end"), (s = "right");
                            break;
                        case ke:
                            (i = "center"), (s = "center");
                            break;
                        default:
                            (i = "start"), (s = "left");
                    }
                    const n = { display: "flex", flexDirection: "column", flexShrink: 1, textAlign: s, justifyContent: "center", alignItems: i, gap: a, ...o };
                    return r.createElement(oe.Z, { style: n }, e);
                },
                Ce = ({ children: e, props: t, style: o }) => {
                    const a = { width: "100%", height: "100%" };
                    return r.createElement(
                        oe.Z,
                        { style: [{ flexShrink: 1 }, o] },
                        r.Children.map(e, (t, o) => r.cloneElement(t, { ...(t.props ?? {}), style: { ...(t.props.style ?? {}), zIndex: o, position: o === r.Children.count(e) - 1 ? "absolute" : "relative", ...(o === r.Children.count(e) - 1 ? a : {}) } })),
                    );
                };
            var Me = o(417681),
                Ie = o(380300);
            const Ee = new Map([
                    [(0, c.$3)("x.com.GenericURT"), f.Z],
                    [(0, c.$3)("x.com.Video"), fe],
                    [(0, c.$3)("x.com.Broadcast"), ue],
                    [(0, c.$3)("Nav"), P.Z],
                    [(0, c.$3)("View"), Se],
                    [(0, c.$3)("HStack"), k.Z],
                    [(0, c.$3)("VStack"), xe],
                    [(0, c.$3)("ZStack"), Ce],
                    [(0, c.$3)("Grid"), S.Z],
                    [(0, c.$3)("Grid.Row"), Z.Z],
                    [(0, c.$3)("Grid.Cell"), $.Z],
                    [(0, c.$3)("Divider"), p.Z],
                    [(0, c.$3)("HScroller"), v.Z],
                    [(0, c.$3)("VScroller"), Ze.Z],
                    [(0, c.$3)("Image"), C.Z],
                    [(0, c.$3)("Text"), q.Z],
                    [(0, c.$3)("Space"), z.Z],
                    [(0, c.$3)("Link"), R.Z],
                    [(0, c.$3)("Markdown"), I.Z],
                    [(0, c.$3)("Spinner"), O.Z],
                    [(0, c.$3)("Page"), F.Z],
                    [(0, c.$3)("Pager"), T.Z],
                    [(0, c.$3)("Page.Section"), j.Z],
                    [(0, c.$3)("List"), M.Z],
                    [(0, c.$3)("Icon"), w.C],
                    [(0, c.$3)("If"), x.Z],
                    [(0, c.$3)("Button"), d.Z],
                    [(0, c.$3)("Time"), X.Z],
                    [(0, c.$3)("Feed"), m.Z],
                    [(0, c.$3)("Toggle"), ee.Z],
                    [(0, c.$3)("Video"), fe],
                    [(0, c.$3)("Remote"), A.Z],
                    [(0, c.$3)("Rect"), G.Z],
                    [(0, c.$3)("Ellipse"), B.Z],
                    [(0, c.$3)("Menu"), E.Z],
                    [(0, c.$3)("Sheet"), H.C],
                    [(0, c.$3)("Markdown"), I.Z],
                    [(0, c.$3)("Toggle.Target"), K.Z],
                    [(0, c.$3)("Cover"), V.Z],
                    [(0, c.$3)("StoryPager"), Y.Z],
                    [(0, c.$3)("StoryPager.Story"), U.Z],
                    [(0, c.$3)("StoryPager.Element"), Q.Z],
                    [(0, c.$3)("TournamentBracket"), te.Z],
                    [(0, c.$3)("Popover"), W.Z],
                    [(0, c.$3)("Form"), h.WD],
                    [(0, c.$3)("Form.Submit"), h.ZN],
                    [(0, c.$3)("Form.Result"), h.It],
                    [(0, c.$3)("Form.Group"), g.N7],
                    [(0, c.$3)("Form.GroupCounter"), g.XN],
                    [(0, c.$3)("Form.Selection"), y.qM],
                    [(0, c.$3)("Form.AsYouType"), h.yH],
                    [(0, c.$3)("Input"), y.Z7],
                    [(0, c.$3)("Input.Select"), y.QP],
                    [(0, c.$3)("Input.Option"), y._h],
                    [(0, c.$3)("Input.Checkbox"), y.Cj],
                    [(0, c.$3)("Input.Phone"), b.U],
                    [(0, c.$3)("Input.Code"), y.sz],
                    [(0, c.$3)("Timer"), J.Z],
                    [(0, c.$3)("Counter"), u.Z],
                    [(0, c.$3)("SignInWithAppleButton"), L.Z],
                    [(0, c.$3)("ActionResponder"), h.rm],
                    [(0, c.$3)("SignupArkoseSecurityChallenge"), N.Z],
                    [(0, c.$3)("ParticleChaos"), Se],
                    [(0, c.$3)("TiledView"), Se],
                    [(0, c.$3)("ShareLink"), _.Z],
                    [(0, c.$3)("RichText"), D.Z],
                ]),
                Re = new Set([(0, c.$3)("Page"), (0, c.$3)("Pager"), (0, c.$3)("List"), (0, c.$3)("Feed")]),
                Pe = new Set([(0, c.$3)("HStack"), (0, c.$3)("HScroller")]),
                Te = new Set([(0, c.$3)("Space")]),
                Fe = new Set([(0, c.$3)("Image"), (0, c.$3)("Video"), (0, c.$3)("Input")]),
                je = ({ children: e, scribeData: t }) => {
                    const o = (0, s.Z)();
                    return (
                        r.useEffect(() => {
                            t && o.scribe(t);
                        }, [t, o]),
                        r.createElement(r.Fragment, null, e)
                    );
                },
                We = ({ activeStyle: e, childElems: t, context: o, el: a, hoverStyle: i, style: s }) => {
                    const n = (0, l.w)(a),
                        c = r.useContext(Me._),
                        d = r.useContext(Me.u),
                        u = Ee.get(a.type) ?? (() => r.createElement("div", null, "unknown component ", a.type)),
                        p = { ...s, ...(c ? i : {}), ...(d ? e : {}) };
                    return r.createElement(
                        u,
                        { childrenElems: a.children?.map((e) => a.dom.el(e)), overrideStyles: { hover: i, active: e }, props: n, scribeContext: o ?? {}, style: p },
                        t?.map((e) => e.comp),
                    );
                },
                Ae = (e, t, o, i, s, c, d) => {
                    const { children: u, type: p } = e,
                        m = (0, l.t)(e),
                        h = n.dn.from(m.mods()) ?? n.dn.empty,
                        g = h.base?.ids ?? [];
                    let y = h.mods.get(t)?.ids ?? [];
                    t === n.Wj.dim && 0 === y.length && (y = h.mods.get(n.Wj.dark)?.ids ?? []);
                    const b = [...g, ...y],
                        f = h.mods.get(n.Wj.active)?.ids ?? [],
                        $ = h.mods.get(n.Wj.hover)?.ids ?? [],
                        S = t === n.Wj.dark ? n.Wj["dark:hover"] : n.Wj["light:hover"],
                        Z = h.mods.get(S)?.ids ?? [],
                        v = s >= a.default.theme.breakpoints.small ? (h.mods.get(n.Wj.sm)?.ids ?? []) : [],
                        k = s >= a.default.theme.breakpoints.medium ? (h.mods.get(n.Wj.md)?.ids ?? []) : [],
                        w = s >= a.default.theme.breakpoints.large ? (h.mods.get(n.Wj.lg)?.ids ?? []) : [],
                        x = s >= a.default.theme.breakpoints.xLarge ? (h.mods.get(n.Wj.xl)?.ids ?? []) : [],
                        C = s >= a.default.theme.breakpoints.xxLarge ? (h.mods.get(n.Wj["2xl"])?.ids ?? []) : [],
                        M = a.default.isDarkMode() || a.default.isDarkerMode() ? [] : (h.mods.get(n.Wj.light)?.ids ?? []),
                        I = a.default.isDarkMode() ? (h.mods.get(n.Wj.dim)?.ids ?? []) : [],
                        E = a.default.isDarkerMode() ? (h.mods.get(n.Wj.dark)?.ids ?? []) : [],
                        R = v.concat(k).concat(w).concat(x).concat(C),
                        P = M.concat(I).concat(E),
                        T = (0, Ie.Z)(b.concat(R).concat(P)),
                        F = (0, Ie.Z)(f),
                        j = (0, Ie.Z)($.concat(Z)),
                        W = { ...i, ...(m.strDict("scribe:context") ?? {}) },
                        A = (m.bool("scribe:appear") ?? m.bool("scribe:visibility") ?? !1) ? (0, ce.Q)("show", W) : void 0,
                        D = Re.has(p),
                        V = u?.map((o, r) => Ae(e.dom.el(o), t, r.toString(), W, s, !D, !0)),
                        B = De(e).map((o, r) => Ae(e.dom.el(o), t, r.toString(), W, s, !D, !0)),
                        G = V?.length ? [...V, ...B] : B,
                        _ = Pe.has(p);
                    let H = !1,
                        N = !1,
                        L = !1,
                        z = !1;
                    if ((d || c) && G.length > 0) for (const e of G) if ((e.propagateHorizontalGrowth && (H = !0), e.propagateVerticalGrowth && (N = !0), e.hasGrowth && (L = !0), e.hasAllGrowth && (z = !0), H && N && L && z)) break;
                    const O =
                            !0 === d &&
                            !((e) => {
                                const t = e?.width ?? e?.maxWidth;
                                return null != t && !t.toString().includes("%");
                            })(T) &&
                            ((L && _) || H || z),
                        Q =
                            !0 === c &&
                            !((e) => {
                                const t = e?.height ?? e?.maxHeight;
                                return null != t && !t.toString().includes("%");
                            })(T) &&
                            ((L && !_) || N || z),
                        U = { width: O ? "100%" : void 0, height: Q ? "100%" : void 0, ...T },
                        Y = Te.has(p),
                        q = Fe.has(p) && !T?.width && !T?.height;
                    return { comp: A ? r.createElement(je, { key: o, scribeData: A }, r.createElement(We, { activeStyle: F, childElems: V, context: W, el: e, hoverStyle: j, style: U, type: String(p) })) : r.createElement(We, { activeStyle: F, childElems: V, context: W, el: e, hoverStyle: j, key: o, style: U, type: String(p) }), hasGrowth: Y, hasAllGrowth: q, propagateHorizontalGrowth: O, propagateVerticalGrowth: Q };
                },
                De = (e) =>
                    Array.from(e.props.values())
                        .flatMap((t) => e.dom.prop(t))
                        .flatMap((e) => (!e || (7 !== e[0] && 8 !== e[0]) ? [] : Array.isArray(e[1]) ? e[1] : [e[1]])),
                Ve = ({ payload: e, parentContext: t = {} }) => {
                    const o = "light" === a.default.theme.paletteName ? n.Wj.light : "dark" === a.default.theme.paletteName ? n.Wj.dim : n.Wj.dark,
                        r = (0, i.Zx)(({ windowWidth: e }) => e),
                        { comp: s } = Ae(e, o, void 0, t, r);
                    return s;
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e.7ecea24a.js.map

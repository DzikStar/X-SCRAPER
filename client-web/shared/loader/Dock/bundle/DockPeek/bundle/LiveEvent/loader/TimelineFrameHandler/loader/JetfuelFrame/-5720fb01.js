"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame~-5720fb01"],
    {
        716727: (e, t, o) => {
            o.d(t, { Z: () => c });
            var a = o(202784),
                r = o(325686),
                i = o(731708),
                n = o(127957),
                s = o(125363);
            const l = { base: { display: "flex", flexShrink: 1, flexBasis: "auto", width: "100%", height: "100%", overflow: "hidden" } },
                c = ({ p: e }) => {
                    const t = e.str("broadcastId"),
                        o = e.bool("autoplay") ?? !0,
                        c = e.bool("muted") ?? !0,
                        d = e.bool("minimal") ?? !1,
                        u = e.bool("enablePip") ?? !1,
                        p = (0, s.I0)(),
                        m = a.useMemo(() => p((e, t, { api: o }) => o.getHttpClient()), [p]);
                    if (!t) return a.createElement(i.ZP, null, "Broadcast not provided");
                    const h = { type: "broadcast", id: t };
                    return a.createElement(r.Z, { style: [l.base].filter(Boolean) }, a.createElement(n.Z, { autoplay: o, config: "auto", controls: d, displayOptions: { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 }, enablePip: u, httpClient: m, initiallyMuted: c, precache: !0, size: "fill", twitterAuthedHttpClient: m, videoId: h }));
                };
        },
        59669: (e, t, o) => {
            o.d(t, { rh: () => i, wR: () => n });
            var a = o(202784);
            const r = a.createContext({ currentTimeMs: 0, setCurrentTimeMs: () => {}, durationMs: 0, setDurationMs: () => {}, tracksFinished: !1, setTracksFinished: () => {} }),
                i = ({ children: e, isFocused: t, isMuted: o }) => {
                    const [i, n] = a.useState(0),
                        [s, l] = a.useState(0),
                        [c, d] = a.useState(!1),
                        u = a.useCallback(
                            (e) => {
                                e !== c && d(e);
                            },
                            [c],
                        ),
                        p = { currentTimeMs: i, setCurrentTimeMs: n, durationMs: s, setDurationMs: l, tracksFinished: c, setTracksFinished: u, isFocused: t, isMuted: o };
                    return a.createElement(r.Provider, { value: p }, e);
                };
            function n() {
                const e = a.useContext(r);
                return e || {};
            }
        },
        552619: (e, t, o) => {
            o.d(t, { Z: () => m });
            var a = o(202784),
                r = o(325686),
                i = o(45843),
                n = o(731708),
                s = o(738584),
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
                        Z = e.bool("autoplay") ?? !0,
                        v = e.bool("muted") ?? !0,
                        S = e.bool("loop") ?? !1,
                        k = (0, d.I0)(),
                        { featureSwitches: w } = (0, c.QZ)(),
                        x = a.useMemo(() => k((e, t, { api: o }) => o.getHttpClient()), [k]),
                        { isFocused: C, isMuted: M, setCurrentTimeMs: I, setDurationMs: E, setTracksFinished: P } = (0, u.wR)(),
                        R = a.useRef(),
                        F = a.useRef();
                    a.useEffect(() => {
                        C && R.current?.play();
                    }, [C]),
                        a.useEffect(() => {
                            const e = R.current,
                                t = F.current;
                            t && e && M !== t.isMuted && (M ? e.mute() : e.unmute());
                        });
                    const T = a.useCallback(
                            (e) => {
                                (R.current = e), C || e.pause();
                            },
                            [C],
                        ),
                        j = a.useCallback(
                            (e) => {
                                F.current = e;
                                const t = e.tracks?.[0]?.currentTimeMs,
                                    o = e.tracks?.[0]?.durationMs;
                                P?.(e.tracksFinished), I?.(t), E?.(o);
                            },
                            [I, E, P],
                        );
                    return t ? a.createElement(r.Z, { style: [p.base, g ? p.aspectRatioStyle(m ?? 1) : null, y ? p.aspectRatioStyle(h ?? 1) : null].filter(Boolean) }, a.createElement(s.Z, { "aria-label": o ?? "video", autoplay: Z, basePlayerClass: l.Y7, configType: "static", contentId: $ ?? "", contentType: "media_entity", displayOptions: { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 }, durationMs: b ?? 0, enableVideoPlayerCaptionRendering: !0, featureProvider: w, httpClient: x, initiallyMuted: v, loop: S, onApiReady: T, onStateUpdate: j, playbackSessionId: $ ?? "", poster: f ?? "", precache: !0, size: "fill", twitterAuthedHttpClient: x, variants: [{ src: t, type: "application/x-mpegURL" }] }), f && a.createElement(i.Z, { source: f, style: p.posterImage })) : a.createElement(n.ZP, null, "Video not provided");
                };
        },
        417681: (e, t, o) => {
            o.d(t, { _: () => i, u: () => r });
            var a = o(202784);
            const r = a.createContext(!1),
                i = a.createContext(!1);
        },
        738124: (e, t, o) => {
            o.d(t, { Z: () => De });
            var a = o(202784),
                r = o(392237),
                i = o(537392),
                n = o(725405),
                s = o(996568),
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
                Z = o(288513),
                v = o(693603),
                S = o(416028),
                k = o(908264),
                w = o(361309),
                x = o(943695),
                C = o(438013),
                M = o(552531),
                I = o(610467),
                E = o(183854),
                P = o(172993),
                R = o(779227),
                F = o(723129),
                T = o(312604),
                j = o(121152),
                W = o(95894),
                A = o(77481),
                B = o(343158),
                D = o(800539),
                H = o(710856),
                V = o(922477),
                G = o(233531),
                _ = o(792842),
                N = o(422089),
                L = o(778468),
                z = o(267663),
                O = o(152381),
                Q = o(669189),
                U = o(944047),
                Y = o(421855),
                q = o(675299),
                J = o(923513),
                X = o(685536),
                K = o(692273),
                ee = o(530963),
                te = o(586548),
                oe = o(325686),
                ae = o(731708),
                re = o(127957),
                ie = o(905996),
                ne = o(125363),
                se = o(293115),
                le = o(725516),
                ce = o(579578);
            const de = { base: { display: "flex", flexShrink: 1, flexBasis: "auto", width: "100%", height: "100%", overflow: "hidden" } },
                ue = ({ children: e, props: t, scribeContext: o, style: r }) => {
                    const i = t.str("broadcastId"),
                        n = t.bool("autoplay") ?? !0,
                        s = t.bool("muted") ?? !0,
                        l = t.bool("minimal") ?? !1,
                        c = t.bool("enablePip") ?? !1,
                        d = t.str("scribe_page"),
                        u = t.str("scribe_section"),
                        p = (0, le.z)(),
                        m = (0, ne.I0)(),
                        h = a.useMemo(() => m((e, t, { api: o }) => o.getHttpClient()), [m]),
                        g = a.useMemo(() => ({ page: d || o.page, section: u || o.section, component: o.component, element: o.element }), [d, u, o]),
                        y = a.useMemo(() => {
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
                    if (!i) return a.createElement(ae.ZP, null, "Broadcast not provided");
                    const b = { type: "broadcast", id: i };
                    return a.createElement(oe.Z, { style: [de.base, r].filter(Boolean) }, a.createElement(se.nO, { namespace: g }, a.createElement(re.Z, { analytics: y, autoplay: n, config: "auto", controls: l, displayOptions: { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 }, enablePip: c, httpClient: h, initiallyMuted: s, precache: !0, size: "fill", twitterAuthedHttpClient: h, videoId: b })));
                };
            var pe = o(45843),
                me = o(738584),
                he = o(614425),
                ge = o(443781),
                ye = o(59669);
            const be = { base: { display: "flex", flexShrink: 1, flexBasis: "auto", width: "100%", height: "100%", overflow: "hidden" }, aspectRatioStyle: (e) => ({ aspectRatio: `${e ?? "auto"}`, width: "auto" }), posterImage: { height: "100%", width: "100%", zIndex: -1, position: "absolute" } },
                fe = ({ props: e, scribeContext: t, style: o }) => {
                    const r = e.url("src"),
                        i = e.str("alt"),
                        s = e.int("ar"),
                        l = e.int("cropAR"),
                        c = void 0 === o.width && s && void 0 !== s,
                        d = void 0 !== l && l && !Number.isNaN(l),
                        u = e.int("duration"),
                        p = e.url("poster"),
                        m = e.str("postId"),
                        h = e.bool("autoplay") ?? !0,
                        g = e.bool("muted") ?? !0,
                        y = e.bool("loop") ?? !1,
                        b = e.str("scribe_page"),
                        f = e.str("scribe_section"),
                        $ = (0, n.Z)(),
                        Z = (0, ne.I0)(),
                        { featureSwitches: v } = (0, ge.QZ)(),
                        S = a.useMemo(() => Z((e, t, { api: o }) => o.getHttpClient()), [Z]),
                        { isFocused: k, isMuted: w, setCurrentTimeMs: x, setDurationMs: C, setTracksFinished: M } = (0, ye.wR)(),
                        I = a.useRef(),
                        E = a.useRef();
                    a.useEffect(() => {
                        k && I.current?.play();
                    }, [k]),
                        a.useEffect(() => {
                            const e = I.current,
                                t = E.current;
                            t && e && w !== t.isMuted && (w ? e.mute() : e.unmute());
                        });
                    const P = a.useCallback(
                            (e) => {
                                (I.current = e), k || e.pause();
                            },
                            [k],
                        ),
                        R = a.useCallback(
                            (e) => {
                                E.current = e;
                                const t = e.tracks?.[0]?.currentTimeMs,
                                    o = e.tracks?.[0]?.durationMs;
                                M?.(e.tracksFinished), x?.(t), C?.(o);
                            },
                            [x, C, M],
                        ),
                        F = a.useMemo(() => ({ page: b || t.page, section: f || t.section, component: t.component, element: t.element }), [b, f, t]),
                        T = a.useMemo(() => {
                            const e = { scribeContext: { ...$.contextualScribeNamespace, ...F } },
                                o = {
                                    log: (e) => {
                                        const { namespace: o } = e;
                                        if (o.action) {
                                            const e = (0, ce.Q)(o.action, t);
                                            $.scribe({ ...F, ...o, data: e });
                                        }
                                    },
                                };
                            return new ie.Z(o, { log: () => {} }, S, e);
                        }, [$, t, S, F]);
                    return r ? a.createElement(oe.Z, { style: [be.base, o, c ? be.aspectRatioStyle(s ?? 1) : null, d ? be.aspectRatioStyle(l ?? 1) : null].filter(Boolean) }, a.createElement(se.nO, { namespace: F }, a.createElement(me.Z, { analytics: T, "aria-label": i ?? "video", autoplay: h, basePlayerClass: he.Y7, configType: "static", contentId: m ?? "", contentType: "media_entity", displayOptions: { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 }, durationMs: u ?? 0, enableVideoPlayerCaptionRendering: !0, featureProvider: v, httpClient: S, initiallyMuted: g, loop: y, onApiReady: P, onStateUpdate: R, playbackSessionId: m ?? "", poster: p ?? "", precache: !0, size: "fill", twitterAuthedHttpClient: S, variants: [{ src: r, type: "application/x-mpegURL" }] })), p && a.createElement(pe.Z, { source: p, style: be.posterImage })) : a.createElement(ae.ZP, null, "Video not provided");
                };
            var $e = o(530732);
            const Ze = ({ children: e, overrideStyles: t, props: o, style: r }) => {
                const i = Object.keys(t).length > 0;
                return a.createElement($e.Z, { interactive: i, interactiveStyles: { hoverStyle: t.hover, pressedStyle: t.active }, style: [{ flexDirection: "row", flexGrow: 0, flexShrink: 1, alignItems: "stretch" }, r] }, e);
            };
            var ve = o(701333);
            const Se = 0,
                ke = 1,
                we = 2,
                xe = ({ children: e, props: t, style: o }) => {
                    const r = t.int("gap") ?? 2;
                    let i, n;
                    switch (t.enum("align")) {
                        case Se:
                            (i = "start"), (n = "left");
                            break;
                        case we:
                            (i = "end"), (n = "right");
                            break;
                        case ke:
                            (i = "center"), (n = "center");
                            break;
                        default:
                            (i = "start"), (n = "left");
                    }
                    const s = { display: "flex", flexDirection: "column", flexShrink: 1, textAlign: n, justifyContent: "center", alignItems: i, gap: r, ...o };
                    return a.createElement(oe.Z, { style: s }, e);
                },
                Ce = ({ children: e, props: t, style: o }) => {
                    const r = { width: "100%", height: "100%" };
                    return a.createElement(
                        oe.Z,
                        { style: [{ flexShrink: 1 }, o] },
                        a.Children.map(e, (t, o) => a.cloneElement(t, { ...(t.props ?? {}), style: { ...(t.props.style ?? {}), zIndex: o, position: o === a.Children.count(e) - 1 ? "absolute" : "relative", ...(o === a.Children.count(e) - 1 ? r : {}) } })),
                    );
                };
            var Me = o(417681),
                Ie = o(380300);
            const Ee = new Map([
                    [(0, c.$3)("x.com.GenericURT"), f.Z],
                    [(0, c.$3)("x.com.Video"), fe],
                    [(0, c.$3)("x.com.Broadcast"), ue],
                    [(0, c.$3)("Nav"), R.Z],
                    [(0, c.$3)("View"), Ze],
                    [(0, c.$3)("HStack"), k.Z],
                    [(0, c.$3)("VStack"), xe],
                    [(0, c.$3)("ZStack"), Ce],
                    [(0, c.$3)("Grid"), Z.Z],
                    [(0, c.$3)("Grid.Row"), v.Z],
                    [(0, c.$3)("Grid.Cell"), $.Z],
                    [(0, c.$3)("Divider"), p.Z],
                    [(0, c.$3)("HScroller"), S.Z],
                    [(0, c.$3)("VScroller"), ve.Z],
                    [(0, c.$3)("Image"), C.Z],
                    [(0, c.$3)("Text"), q.Z],
                    [(0, c.$3)("Space"), z.Z],
                    [(0, c.$3)("Link"), P.Z],
                    [(0, c.$3)("Markdown"), I.Z],
                    [(0, c.$3)("Spinner"), O.Z],
                    [(0, c.$3)("Page"), T.Z],
                    [(0, c.$3)("Pager"), F.Z],
                    [(0, c.$3)("Page.Section"), j.Z],
                    [(0, c.$3)("List"), M.Z],
                    [(0, c.$3)("Icon"), w.C],
                    [(0, c.$3)("If"), x.Z],
                    [(0, c.$3)("Button"), d.Z],
                    [(0, c.$3)("Time"), J.Z],
                    [(0, c.$3)("Feed"), m.Z],
                    [(0, c.$3)("Toggle"), ee.Z],
                    [(0, c.$3)("Video"), fe],
                    [(0, c.$3)("Remote"), A.Z],
                    [(0, c.$3)("Rect"), V.Z],
                    [(0, c.$3)("Ellipse"), H.Z],
                    [(0, c.$3)("Menu"), E.Z],
                    [(0, c.$3)("Sheet"), _.C],
                    [(0, c.$3)("Markdown"), I.Z],
                    [(0, c.$3)("Toggle.Target"), K.Z],
                    [(0, c.$3)("Cover"), D.Z],
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
                    [(0, c.$3)("Timer"), X.Z],
                    [(0, c.$3)("Counter"), u.Z],
                    [(0, c.$3)("SignInWithAppleButton"), L.Z],
                    [(0, c.$3)("ActionResponder"), h.rm],
                    [(0, c.$3)("SignupArkoseSecurityChallenge"), N.Z],
                    [(0, c.$3)("ParticleChaos"), Ze],
                    [(0, c.$3)("TiledView"), Ze],
                    [(0, c.$3)("ShareLink"), G.Z],
                    [(0, c.$3)("RichText"), B.Z],
                ]),
                Pe = new Set([(0, c.$3)("Page"), (0, c.$3)("Pager"), (0, c.$3)("List"), (0, c.$3)("Feed")]),
                Re = new Set([(0, c.$3)("HStack"), (0, c.$3)("HScroller")]),
                Fe = new Set([(0, c.$3)("Space")]),
                Te = new Set([(0, c.$3)("Image"), (0, c.$3)("Video"), (0, c.$3)("Input")]),
                je = ({ children: e, scribeData: t }) => {
                    const o = (0, n.Z)();
                    return (
                        a.useEffect(() => {
                            t && o.scribe(t);
                        }, [t, o]),
                        a.createElement(a.Fragment, null, e)
                    );
                },
                We = ({ activeStyle: e, childElems: t, context: o, el: r, hoverStyle: i, style: n }) => {
                    const s = (0, l.w)(r),
                        c = a.useContext(Me._),
                        d = a.useContext(Me.u),
                        u = Ee.get(r.type) ?? (() => a.createElement("div", null, "unknown component ", r.type)),
                        p = { ...n, ...(c ? i : {}), ...(d ? e : {}) };
                    return a.createElement(
                        u,
                        { childrenElems: r.children?.map((e) => r.dom.el(e)), overrideStyles: { hover: i, active: e }, props: s, scribeContext: o ?? {}, style: p },
                        t?.map((e) => e.comp),
                    );
                },
                Ae = (e, t, o, i, n, c, d) => {
                    const { children: u, type: p } = e,
                        m = (0, l.t)(e),
                        h = s.dn.from(m.mods()) ?? s.dn.empty,
                        g = h.base?.ids ?? [];
                    let y = h.mods.get(t)?.ids ?? [];
                    t === s.Wj.dim && 0 === y.length && (y = h.mods.get(s.Wj.dark)?.ids ?? []);
                    const b = [...g, ...y],
                        f = h.mods.get(s.Wj.active)?.ids ?? [],
                        $ = h.mods.get(s.Wj.hover)?.ids ?? [],
                        Z = t === s.Wj.dark ? s.Wj["dark:hover"] : s.Wj["light:hover"],
                        v = h.mods.get(Z)?.ids ?? [],
                        S = n >= r.default.theme.breakpoints.small ? (h.mods.get(s.Wj.sm)?.ids ?? []) : [],
                        k = n >= r.default.theme.breakpoints.medium ? (h.mods.get(s.Wj.md)?.ids ?? []) : [],
                        w = n >= r.default.theme.breakpoints.large ? (h.mods.get(s.Wj.lg)?.ids ?? []) : [],
                        x = n >= r.default.theme.breakpoints.xLarge ? (h.mods.get(s.Wj.xl)?.ids ?? []) : [],
                        C = n >= r.default.theme.breakpoints.xxLarge ? (h.mods.get(s.Wj["2xl"])?.ids ?? []) : [],
                        M = r.default.isDarkMode() || r.default.isDarkerMode() ? [] : (h.mods.get(s.Wj.light)?.ids ?? []),
                        I = r.default.isDarkMode() ? (h.mods.get(s.Wj.dim)?.ids ?? []) : [],
                        E = r.default.isDarkerMode() ? (h.mods.get(s.Wj.dark)?.ids ?? []) : [],
                        P = S.concat(k).concat(w).concat(x).concat(C),
                        R = M.concat(I).concat(E),
                        F = (0, Ie.Z)(b.concat(P).concat(R)),
                        T = (0, Ie.Z)(f),
                        j = (0, Ie.Z)($.concat(v)),
                        W = { ...i, ...(m.strDict("scribe:context") ?? {}) },
                        A = (m.bool("scribe:appear") ?? m.bool("scribe:visibility") ?? !1) ? (0, ce.Q)("show", W) : void 0,
                        B = Pe.has(p),
                        D = u?.map((o, a) => Ae(e.dom.el(o), t, a.toString(), W, n, !B, !0)),
                        H = Be(e).map((o, a) => Ae(e.dom.el(o), t, a.toString(), W, n, !B, !0)),
                        V = D?.length ? [...D, ...H] : H,
                        G = Re.has(p);
                    let _ = !1,
                        N = !1,
                        L = !1,
                        z = !1;
                    if ((d || c) && V.length > 0) for (const e of V) if ((e.propagateHorizontalGrowth && (_ = !0), e.propagateVerticalGrowth && (N = !0), e.hasGrowth && (L = !0), e.hasAllGrowth && (z = !0), _ && N && L && z)) break;
                    const O =
                            !0 === d &&
                            !((e) => {
                                const t = e?.width ?? e?.maxWidth;
                                return null != t && !t.toString().includes("%");
                            })(F) &&
                            ((L && G) || _ || z),
                        Q =
                            !0 === c &&
                            !((e) => {
                                const t = e?.height ?? e?.maxHeight;
                                return null != t && !t.toString().includes("%");
                            })(F) &&
                            ((L && !G) || N || z),
                        U = { width: O ? "100%" : void 0, height: Q ? "100%" : void 0, ...F },
                        Y = Fe.has(p),
                        q = Te.has(p) && !F?.width && !F?.height;
                    return { comp: A ? a.createElement(je, { key: o, scribeData: A }, a.createElement(We, { activeStyle: T, childElems: D, context: W, el: e, hoverStyle: j, style: U, type: String(p) })) : a.createElement(We, { activeStyle: T, childElems: D, context: W, el: e, hoverStyle: j, key: o, style: U, type: String(p) }), hasGrowth: Y, hasAllGrowth: q, propagateHorizontalGrowth: O, propagateVerticalGrowth: Q };
                },
                Be = (e) =>
                    Array.from(e.props.values())
                        .flatMap((t) => e.dom.prop(t))
                        .flatMap((e) => (!e || (7 !== e[0] && 8 !== e[0]) ? [] : Array.isArray(e[1]) ? e[1] : [e[1]])),
                De = ({ payload: e, parentContext: t = {} }) => {
                    const o = "light" === r.default.theme.paletteName ? s.Wj.light : "dark" === r.default.theme.paletteName ? s.Wj.dim : s.Wj.dark,
                        a = (0, i.Zx)(({ windowWidth: e }) => e),
                        { comp: n } = Ae(e, o, void 0, t, a);
                    return n;
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame~-5720fb01.be2a6a2a.js.map

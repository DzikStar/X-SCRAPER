"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.JetfuelFrame~loader.PremiumLoaders-82a7f3-7d927d91"],
    {
        417681: (e, t, o) => {
            o.d(t, { _: () => n, u: () => a });
            var r = o(202784);
            const a = r.createContext(!1),
                n = r.createContext(!1);
        },
        738124: (e, t, o) => {
            o.d(t, { Z: () => De });
            var r = o(202784),
                a = o(392237),
                n = o(537392),
                i = o(725405),
                s = o(996568),
                l = o(601066),
                c = o(199035),
                d = o(736932),
                p = o(620740),
                m = o(210633),
                u = o(616825),
                h = o(684799),
                g = o(656825),
                $ = o(795164),
                y = o(665161),
                b = o(761459),
                Z = o(271215),
                f = o(288513),
                S = o(693603),
                v = o(416028),
                k = o(908264),
                w = o(361309),
                x = o(943695),
                C = o(438013),
                E = o(552531),
                I = o(610467),
                M = o(183854),
                j = o(172993),
                P = o(779227),
                W = o(723129),
                R = o(312604),
                F = o(121152),
                T = o(95894),
                G = o(77481),
                A = o(343158),
                D = o(800539),
                _ = o(710856),
                V = o(922477),
                H = o(233531),
                B = o(792842),
                L = o(422089),
                N = o(778468),
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
                re = o(731708),
                ae = o(127957),
                ne = o(905996),
                ie = o(125363),
                se = o(293115),
                le = o(725516),
                ce = o(579578);
            const de = { base: { display: "flex", flexShrink: 1, flexBasis: "auto", width: "100%", height: "100%", overflow: "hidden" } },
                pe = ({ children: e, props: t, scribeContext: o, style: a }) => {
                    const n = t.str("broadcastId"),
                        i = t.bool("autoplay") ?? !0,
                        s = t.bool("muted") ?? !0,
                        l = t.bool("minimal") ?? !1,
                        c = t.bool("enablePip") ?? !1,
                        d = t.str("scribe_page"),
                        p = t.str("scribe_section"),
                        m = (0, le.z)(),
                        u = (0, ie.I0)(),
                        h = r.useMemo(() => u((e, t, { api: o }) => o.getHttpClient()), [u]),
                        g = r.useMemo(() => ({ page: d || o.page, section: p || o.section, component: o.component, element: o.element }), [d, p, o]),
                        $ = r.useMemo(() => {
                            const e = { scribeContext: { ...m.contextualScribeNamespace, ...g } },
                                t = {
                                    log: (e) => {
                                        const { namespace: t } = e;
                                        if (t.action) {
                                            const e = (0, ce.Q)(t.action, o);
                                            m.scribe({ ...g, ...t, data: e });
                                        }
                                    },
                                };
                            return new ne.Z(t, { log: () => {} }, h, e);
                        }, [m, o, h, g]);
                    if (!n) return r.createElement(re.ZP, null, "Broadcast not provided");
                    const y = { type: "broadcast", id: n };
                    return r.createElement(oe.Z, { style: [de.base, a].filter(Boolean) }, r.createElement(se.nO, { namespace: g }, r.createElement(ae.Z, { analytics: $, autoplay: i, config: "auto", controls: l, displayOptions: { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 }, enablePip: c, httpClient: h, initiallyMuted: s, precache: !0, size: "fill", twitterAuthedHttpClient: h, videoId: y })));
                };
            var me = o(45843),
                ue = o(738584),
                he = o(614425),
                ge = o(443781),
                $e = o(59669);
            const ye = { base: { display: "flex", flexShrink: 1, flexBasis: "auto", width: "100%", height: "100%", overflow: "hidden" }, aspectRatioStyle: (e) => ({ aspectRatio: `${e ?? "auto"}`, width: "auto" }), posterImage: { height: "100%", width: "100%", zIndex: -1, position: "absolute" } },
                be = ({ props: e, scribeContext: t, style: o }) => {
                    const a = e.url("src"),
                        n = e.str("alt"),
                        s = e.int("ar"),
                        l = e.int("cropAR"),
                        c = void 0 === o.width && s && void 0 !== s,
                        d = void 0 !== l && l && !Number.isNaN(l),
                        p = e.int("duration"),
                        m = e.url("poster"),
                        u = e.str("postId"),
                        h = e.bool("autoplay") ?? !0,
                        g = e.bool("muted") ?? !0,
                        $ = e.bool("loop") ?? !1,
                        y = e.str("scribe_page"),
                        b = e.str("scribe_section"),
                        Z = (0, i.Z)(),
                        f = (0, ie.I0)(),
                        { featureSwitches: S } = (0, ge.QZ)(),
                        v = r.useMemo(() => f((e, t, { api: o }) => o.getHttpClient()), [f]),
                        { isFocused: k, isMuted: w, setCurrentTimeMs: x, setDurationMs: C, setTracksFinished: E } = (0, $e.wR)(),
                        I = r.useRef(),
                        M = r.useRef();
                    r.useEffect(() => {
                        k && I.current?.play();
                    }, [k]),
                        r.useEffect(() => {
                            const e = I.current,
                                t = M.current;
                            t && e && w !== t.isMuted && (w ? e.mute() : e.unmute());
                        });
                    const j = r.useCallback(
                            (e) => {
                                (I.current = e), k || e.pause();
                            },
                            [k],
                        ),
                        P = r.useCallback(
                            (e) => {
                                M.current = e;
                                const t = e.tracks?.[0]?.currentTimeMs,
                                    o = e.tracks?.[0]?.durationMs;
                                E?.(e.tracksFinished), x?.(t), C?.(o);
                            },
                            [x, C, E],
                        ),
                        W = r.useMemo(() => ({ page: y || t.page, section: b || t.section, component: t.component, element: t.element }), [y, b, t]),
                        R = r.useMemo(() => {
                            const e = { scribeContext: { ...Z.contextualScribeNamespace, ...W } },
                                o = {
                                    log: (e) => {
                                        const { namespace: o } = e;
                                        if (o.action) {
                                            const e = (0, ce.Q)(o.action, t);
                                            Z.scribe({ ...W, ...o, data: e });
                                        }
                                    },
                                };
                            return new ne.Z(o, { log: () => {} }, v, e);
                        }, [Z, t, v, W]);
                    return a ? r.createElement(oe.Z, { style: [ye.base, o, c ? ye.aspectRatioStyle(s ?? 1) : null, d ? ye.aspectRatioStyle(l ?? 1) : null].filter(Boolean) }, r.createElement(se.nO, { namespace: W }, r.createElement(ue.Z, { analytics: R, "aria-label": n ?? "video", autoplay: h, basePlayerClass: he.Y7, configType: "static", contentId: u ?? "", contentType: "media_entity", displayOptions: { objectFitVideo: "cover", hideLeftBadges: !0, hidePosterImage: !0 }, durationMs: p ?? 0, enableVideoPlayerCaptionRendering: !0, featureProvider: S, httpClient: v, initiallyMuted: g, loop: $, onApiReady: j, onStateUpdate: P, playbackSessionId: u ?? "", poster: m ?? "", precache: !0, size: "fill", twitterAuthedHttpClient: v, variants: [{ src: a, type: "application/x-mpegURL" }] })), m && r.createElement(me.Z, { source: m, style: ye.posterImage })) : r.createElement(re.ZP, null, "Video not provided");
                };
            var Ze = o(530732);
            const fe = ({ children: e, overrideStyles: t, props: o, style: a }) => {
                const n = Object.keys(t).length > 0;
                return r.createElement(Ze.Z, { interactive: n, interactiveStyles: { hoverStyle: t.hover, pressedStyle: t.active }, style: [{ flexDirection: "row", flexGrow: 0, flexShrink: 1, alignItems: "stretch" }, a] }, e);
            };
            var Se = o(701333);
            const ve = 0,
                ke = 1,
                we = 2,
                xe = ({ children: e, props: t, style: o }) => {
                    const a = t.int("gap") ?? 2;
                    let n, i;
                    switch (t.enum("align")) {
                        case ve:
                            (n = "start"), (i = "left");
                            break;
                        case we:
                            (n = "end"), (i = "right");
                            break;
                        case ke:
                            (n = "center"), (i = "center");
                            break;
                        default:
                            (n = "start"), (i = "left");
                    }
                    const s = { display: "flex", flexDirection: "column", flexShrink: 1, textAlign: i, justifyContent: "center", alignItems: n, gap: a, ...o };
                    return r.createElement(oe.Z, { style: s }, e);
                },
                Ce = ({ children: e, props: t, style: o }) => {
                    const a = { width: "100%", height: "100%" };
                    return r.createElement(
                        oe.Z,
                        { style: [{ flexShrink: 1 }, o] },
                        r.Children.map(e, (t, o) => r.cloneElement(t, { ...(t.props ?? {}), style: { ...(t.props.style ?? {}), zIndex: o, position: o === r.Children.count(e) - 1 ? "absolute" : "relative", ...(o === r.Children.count(e) - 1 ? a : {}) } })),
                    );
                };
            var Ee = o(417681),
                Ie = o(380300);
            const Me = new Map([
                    [(0, c.$3)("x.com.GenericURT"), b.Z],
                    [(0, c.$3)("x.com.Video"), be],
                    [(0, c.$3)("x.com.Broadcast"), pe],
                    [(0, c.$3)("Nav"), P.Z],
                    [(0, c.$3)("View"), fe],
                    [(0, c.$3)("HStack"), k.Z],
                    [(0, c.$3)("VStack"), xe],
                    [(0, c.$3)("ZStack"), Ce],
                    [(0, c.$3)("Grid"), f.Z],
                    [(0, c.$3)("Grid.Row"), S.Z],
                    [(0, c.$3)("Grid.Cell"), Z.Z],
                    [(0, c.$3)("Divider"), m.Z],
                    [(0, c.$3)("HScroller"), v.Z],
                    [(0, c.$3)("VScroller"), Se.Z],
                    [(0, c.$3)("Image"), C.Z],
                    [(0, c.$3)("Text"), q.Z],
                    [(0, c.$3)("Space"), z.Z],
                    [(0, c.$3)("Link"), j.Z],
                    [(0, c.$3)("Markdown"), I.Z],
                    [(0, c.$3)("Spinner"), O.Z],
                    [(0, c.$3)("Page"), R.Z],
                    [(0, c.$3)("Pager"), W.Z],
                    [(0, c.$3)("Page.Section"), F.Z],
                    [(0, c.$3)("List"), E.Z],
                    [(0, c.$3)("Icon"), w.C],
                    [(0, c.$3)("If"), x.Z],
                    [(0, c.$3)("Button"), d.Z],
                    [(0, c.$3)("Time"), J.Z],
                    [(0, c.$3)("Feed"), u.Z],
                    [(0, c.$3)("Toggle"), ee.Z],
                    [(0, c.$3)("Video"), be],
                    [(0, c.$3)("Remote"), G.Z],
                    [(0, c.$3)("Rect"), V.Z],
                    [(0, c.$3)("Ellipse"), _.Z],
                    [(0, c.$3)("Menu"), M.Z],
                    [(0, c.$3)("Sheet"), B.C],
                    [(0, c.$3)("Markdown"), I.Z],
                    [(0, c.$3)("Toggle.Target"), K.Z],
                    [(0, c.$3)("Cover"), D.Z],
                    [(0, c.$3)("StoryPager"), Y.Z],
                    [(0, c.$3)("StoryPager.Story"), U.Z],
                    [(0, c.$3)("StoryPager.Element"), Q.Z],
                    [(0, c.$3)("TournamentBracket"), te.Z],
                    [(0, c.$3)("Popover"), T.Z],
                    [(0, c.$3)("Form"), h.WD],
                    [(0, c.$3)("Form.Submit"), h.ZN],
                    [(0, c.$3)("Form.Result"), h.It],
                    [(0, c.$3)("Form.Group"), g.N7],
                    [(0, c.$3)("Form.GroupCounter"), g.XN],
                    [(0, c.$3)("Form.Selection"), $.qM],
                    [(0, c.$3)("Form.AsYouType"), h.yH],
                    [(0, c.$3)("Input"), $.Z7],
                    [(0, c.$3)("Input.Select"), $.QP],
                    [(0, c.$3)("Input.Option"), $._h],
                    [(0, c.$3)("Input.Checkbox"), $.Cj],
                    [(0, c.$3)("Input.Phone"), y.U],
                    [(0, c.$3)("Input.Code"), $.sz],
                    [(0, c.$3)("Timer"), X.Z],
                    [(0, c.$3)("Counter"), p.Z],
                    [(0, c.$3)("SignInWithAppleButton"), N.Z],
                    [(0, c.$3)("ActionResponder"), h.rm],
                    [(0, c.$3)("SignupArkoseSecurityChallenge"), L.Z],
                    [(0, c.$3)("ParticleChaos"), fe],
                    [(0, c.$3)("TiledView"), fe],
                    [(0, c.$3)("ShareLink"), H.Z],
                    [(0, c.$3)("RichText"), A.Z],
                ]),
                je = new Set([(0, c.$3)("Page"), (0, c.$3)("Pager"), (0, c.$3)("List"), (0, c.$3)("Feed")]),
                Pe = new Set([(0, c.$3)("HStack"), (0, c.$3)("HScroller")]),
                We = new Set([(0, c.$3)("Space")]),
                Re = new Set([(0, c.$3)("Image"), (0, c.$3)("Video"), (0, c.$3)("Input")]),
                Fe = ({ children: e, scribeData: t }) => {
                    const o = (0, i.Z)();
                    return (
                        r.useEffect(() => {
                            t && o.scribe(t);
                        }, [t, o]),
                        r.createElement(r.Fragment, null, e)
                    );
                },
                Te = ({ activeStyle: e, childElems: t, context: o, el: a, hoverStyle: n, style: i }) => {
                    const s = (0, l.w)(a),
                        c = r.useContext(Ee._),
                        d = r.useContext(Ee.u),
                        p = Me.get(a.type) ?? (() => r.createElement("div", null, "unknown component ", a.type)),
                        m = { ...i, ...(c ? n : {}), ...(d ? e : {}) };
                    return r.createElement(
                        p,
                        { childrenElems: a.children?.map((e) => a.dom.el(e)), overrideStyles: { hover: n, active: e }, props: s, scribeContext: o ?? {}, style: m },
                        t?.map((e) => e.comp),
                    );
                },
                Ge = (e, t, o, n, i, c, d) => {
                    const { children: p, type: m } = e,
                        u = (0, l.t)(e),
                        h = s.dn.from(u.mods()) ?? s.dn.empty,
                        g = h.base?.ids ?? [];
                    let $ = h.mods.get(t)?.ids ?? [];
                    t === s.Wj.dim && 0 === $.length && ($ = h.mods.get(s.Wj.dark)?.ids ?? []);
                    const y = [...g, ...$],
                        b = h.mods.get(s.Wj.active)?.ids ?? [],
                        Z = h.mods.get(s.Wj.hover)?.ids ?? [],
                        f = t === s.Wj.dark ? s.Wj["dark:hover"] : s.Wj["light:hover"],
                        S = h.mods.get(f)?.ids ?? [],
                        v = i >= a.default.theme.breakpoints.small ? (h.mods.get(s.Wj.sm)?.ids ?? []) : [],
                        k = i >= a.default.theme.breakpoints.medium ? (h.mods.get(s.Wj.md)?.ids ?? []) : [],
                        w = i >= a.default.theme.breakpoints.large ? (h.mods.get(s.Wj.lg)?.ids ?? []) : [],
                        x = i >= a.default.theme.breakpoints.xLarge ? (h.mods.get(s.Wj.xl)?.ids ?? []) : [],
                        C = i >= a.default.theme.breakpoints.xxLarge ? (h.mods.get(s.Wj["2xl"])?.ids ?? []) : [],
                        E = a.default.isDarkMode() || a.default.isDarkerMode() ? [] : (h.mods.get(s.Wj.light)?.ids ?? []),
                        I = a.default.isDarkMode() ? (h.mods.get(s.Wj.dim)?.ids ?? []) : [],
                        M = a.default.isDarkerMode() ? (h.mods.get(s.Wj.dark)?.ids ?? []) : [],
                        j = v.concat(k).concat(w).concat(x).concat(C),
                        P = E.concat(I).concat(M),
                        W = (0, Ie.Z)(y.concat(j).concat(P)),
                        R = (0, Ie.Z)(b),
                        F = (0, Ie.Z)(Z.concat(S)),
                        T = { ...n, ...(u.strDict("scribe:context") ?? {}) },
                        G = (u.bool("scribe:appear") ?? u.bool("scribe:visibility") ?? !1) ? (0, ce.Q)("show", T) : void 0,
                        A = je.has(m),
                        D = p?.map((o, r) => Ge(e.dom.el(o), t, r.toString(), T, i, !A, !0)),
                        _ = Ae(e).map((o, r) => Ge(e.dom.el(o), t, r.toString(), T, i, !A, !0)),
                        V = D?.length ? [...D, ..._] : _,
                        H = Pe.has(m);
                    let B = !1,
                        L = !1,
                        N = !1,
                        z = !1;
                    if ((d || c) && V.length > 0) for (const e of V) if ((e.propagateHorizontalGrowth && (B = !0), e.propagateVerticalGrowth && (L = !0), e.hasGrowth && (N = !0), e.hasAllGrowth && (z = !0), B && L && N && z)) break;
                    const O =
                            !0 === d &&
                            !((e) => {
                                const t = e?.width ?? e?.maxWidth;
                                return null != t && !t.toString().includes("%");
                            })(W) &&
                            ((N && H) || B || z),
                        Q =
                            !0 === c &&
                            !((e) => {
                                const t = e?.height ?? e?.maxHeight;
                                return null != t && !t.toString().includes("%");
                            })(W) &&
                            ((N && !H) || L || z),
                        U = { width: O ? "100%" : void 0, height: Q ? "100%" : void 0, ...W },
                        Y = We.has(m),
                        q = Re.has(m) && !W?.width && !W?.height;
                    return { comp: G ? r.createElement(Fe, { key: o, scribeData: G }, r.createElement(Te, { activeStyle: R, childElems: D, context: T, el: e, hoverStyle: F, style: U, type: String(m) })) : r.createElement(Te, { activeStyle: R, childElems: D, context: T, el: e, hoverStyle: F, key: o, style: U, type: String(m) }), hasGrowth: Y, hasAllGrowth: q, propagateHorizontalGrowth: O, propagateVerticalGrowth: Q };
                },
                Ae = (e) =>
                    Array.from(e.props.values())
                        .flatMap((t) => e.dom.prop(t))
                        .flatMap((e) => (!e || (7 !== e[0] && 8 !== e[0]) ? [] : Array.isArray(e[1]) ? e[1] : [e[1]])),
                De = ({ payload: e, parentContext: t = {} }) => {
                    const o = "light" === a.default.theme.paletteName ? s.Wj.light : "dark" === a.default.theme.paletteName ? s.Wj.dim : s.Wj.dark,
                        r = (0, n.Zx)(({ windowWidth: e }) => e),
                        { comp: i } = Ge(e, o, void 0, t, r);
                    return i;
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.JetfuelFrame~loader.PremiumLoaders-82a7f3-7d927d91.e95fba2a.js.map

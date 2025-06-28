"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TV-6107ac1a", "icons/IconFastforward-js", "icons/IconRepliesStroke-js", "icons/IconThumbsUpFill-js"],
    {
        988401: (e, a, d) => {
            d.d(a, { F: () => o });
            const o = (e) => r(Math.round(e / 1e3)),
                r = (e) => {
                    const { hours: a, minutes: d, seconds: o } = l(e),
                        r = o < 10 ? `0${o}` : o,
                        n = d < 10 && a ? `0${d}` : d;
                    return a ? `${a}:${n}:${r}` : `${n}:${r}`;
                },
                l = (e) => ({ hours: Math.floor(e / 3600), minutes: Math.floor((e % 3600) / 60), seconds: Math.floor(e % 60) });
        },
        349035: (e, a, d) => {
            d.d(a, { Z: () => l });
            var o = d(202784),
                r = d(272175);
            const l = (0, d(500002).ZP)(({ staticContext: e, status: a = 404 }) => (e && (e.statusCode = a), o.createElement(r.ql, null, o.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        978112: (e, a, d) => {
            d.r(a), d.d(a, { default: () => Ve });
            var o = d(807896),
                r = d(202784),
                l = d(400752),
                n = d(978989),
                s = d(490434),
                i = d.n(s),
                t = d(107267),
                c = d(323265),
                u = d(972236),
                D = d(443781),
                m = d(105131),
                h = d(293115),
                b = d(673932),
                M = d(795290),
                y = d(363047),
                p = (d(136728), d(664918));
            const w = ({ history: e }) => {
                const { featureSwitches: a } = r.useContext(D.rC),
                    d = a.isTrue("responsive_web_cookie_compliance_banner_enabled"),
                    o = p.iB(a) && d;
                return (
                    r.useEffect(() => {
                        o && !e.location.pathname.includes(y.BO) && e.push(y.BO);
                    }, [e, o]),
                    null
                );
            };
            var P = d(111677),
                f = d.n(P),
                A = d(300497),
                k = d(455025),
                v = d(163208),
                I = d(189244),
                g = d(717988),
                T = d(466441),
                C = d(396342),
                V = d(325686),
                S = d(157396),
                E = d(392237),
                R = d(537392),
                B = d(224162),
                Z = d(898063),
                x = d(602070),
                N = d(873930),
                O = d(134609),
                H = d(863040),
                L = d(731708),
                $ = d(524483),
                _ = d(602737),
                F = d(686010);
            const z = (e) => {
                    const { closeModal: a, modalConfig: d } = (0, $.N)(),
                        o = r.useCallback(() => {
                            d?.handleEscape?.(), a();
                        }, [a, d]);
                    return d ? r.createElement(r.Fragment, null, r.createElement(V.Z, { style: U.mask }), r.createElement(F.Z, { "aria-label": void 0, autoFocus: !0, autoRestoreFocus: d.autoRestoreFocus, isFocusBoundary: !0, name: "tv-modal", onEscapeOrBack: o, role: "dialog", style: U.dialogContainer, trackChildren: !0 }, r.createElement(L.ZP, { size: "title4", style: U.primaryText }, d.primaryText), r.createElement(L.ZP, { size: "body", style: U.secondaryText }, d.secondaryText), d.primaryAction ? r.createElement(_.K, { name: "tv-modal-primary-button", onPress: d.primaryAction.onClick, style: U.button, type: "primaryFilled" }, d.primaryAction.buttonText) : null, d.secondaryAction ? r.createElement(_.K, { name: "tv-modal-secondary-button", onPress: d.secondaryAction?.onClick, style: U.button, type: "primaryOutlined" }, d.secondaryAction.buttonText) : null)) : null;
                },
                U = E.default.create((e) => ({ mask: { ...E.default.absoluteFillObject, backgroundColor: e.colors.cellBackground, opacity: 0.75, position: "fixed", zIndex: 1 }, dialogContainer: { position: "absolute", top: "50%", left: "50%", start: "50%", margin: "0", transform: "translate(-50%, -50%)", zIndex: e.componentZIndices.appBarZIndex, minHeight: `calc(${e.spaces.space64} * 3)`, minWidth: `calc(${e.spaces.space64} * 5)`, borderRadius: e.borderRadii.xLarge, paddingHorizontal: e.spaces.space40, paddingVertical: e.spaces.space24, backgroundColor: "rgb(0,0,0)", border: "none", outlineStyle: "none", display: "flex", marginBottom: `-${e.spaces.space16}`, flexDirection: "column", alignItems: "center", justifyContent: "center" }, primaryText: { color: e.colors.text, marginBottom: e.spaces.space16 }, secondaryText: { color: e.colors.gray700, marginBottom: e.spaces.space16 }, button: { minWidth: 2 * e.spacesPx.space64, width: 2 * e.spacesPx.space64, marginBottom: e.spaces.space16 } }));
            var K = d(520913);
            function X() {
                return r.createElement(V.Z, { "aria-label": "Loading", id: "placeholder", style: G.root }, r.createElement(K.default, { style: G.logo }));
            }
            const G = E.default.create((e) => ({ root: { ...E.default.absoluteFillObject, backgroundColor: "#000000", position: "fixed" }, logo: { ...E.default.absoluteFillObject, color: e.colors.buttonAlwaysWhite, height: e.spaces.space72, width: e.spaces.space72, margin: "auto" } })),
                j = "rtl" === document?.documentElement?.getAttribute("dir");
            (0, C.init)({ shouldFocusDOMNode: !0, isRtl: j });
            const W = Object.freeze({ xSmall: "xSmall", small: "small", normal: "normal", large: "large", xLarge: "xLarge" }),
                Q = { [S.default.ThemeScaleNames.xSmall]: 0.9, [S.default.ThemeScaleNames.small]: 0.95, [S.default.ThemeScaleNames.normal]: 1, [S.default.ThemeScaleNames.large]: 1.1, [S.default.ThemeScaleNames.xLarge]: 1.2 },
                q = (e, a = !1) => {
                    const d = a ? 1.15 : 1,
                        o = { ...Q };
                    return (
                        Object.keys(o).forEach((a) => {
                            o[a] *= e * d;
                        }),
                        o
                    );
                },
                Y = q(1, !1);
            function J(e) {
                const { children: a } = e,
                    d = r.useRef(E.default.theme.scales).current,
                    o = r.useRef(E.default.theme.paletteName).current,
                    l = ((e = !1) => ({ [W.xSmall]: { scales: q(0.75, e), width: 0 }, [W.small]: { scales: q(0.75, e), width: 960 }, [W.normal]: { scales: q(1, e), width: 1024 }, [W.large]: { scales: q(1.5, e), width: 1919 }, [W.xLarge]: { scales: q(2.25, e), width: 3839 } }))((0, N.Z)()),
                    n = (0, R.Zx)(({ windowWidth: e }) =>
                        (function (e, a) {
                            const d = Object.keys(e);
                            for (let o = d.length - 1; o >= 0; o--) {
                                const r = d[o];
                                if (a > (e[r]?.width || 0)) return r;
                            }
                            return W.small;
                        })(l, e),
                    ),
                    [s, i] = r.useState(!1);
                (0, x.nP)(),
                    (0, Z.$R)(),
                    (0, Z.bH)(),
                    (0, H.u)(),
                    (0, O.J)(),
                    r.useEffect(() => {
                        const e = l[n]?.scales || Y;
                        return (
                            E.default.setPalette("darker"),
                            E.default.setScales(e),
                            i(!0),
                            () => {
                                E.default.setScales(d), E.default.setPalette(o);
                            }
                        );
                    }, [n, d, o, l]);
                const t = r.useCallback((e) => {
                    e.target.scrollTop = 0;
                }, []);
                return s ? r.createElement(V.Z, { dir: j ? "rtl" : "ltr", onScroll: t, style: ee.root }, r.createElement(B.Qu, null, r.createElement(z, null), a)) : r.createElement(X, null);
            }
            const ee = E.default.create(() => ({ root: { height: E.default.supports("height: 100dvh") ? "100dvh" : "100vh", maxHeight: E.default.supports("height: 100dvh") ? "100dvh" : "100vh", overflow: "hidden", width: "100%" } })),
                ae = f().d960b55c,
                de = f().i3145aa0,
                oe = (e) => "/i/tv/login",
                re = (0, k.c)(
                    (0, g.p)(
                        () =>
                            Promise.all([
                                d.e("icons.23"),
                                d.e("icons.0"),
                                d.e("icons.2"),
                                d.e("icons.16"),
                                d.e("icons.19"),
                                d.e("icons.10"),
                                d.e("icons.13"),
                                d.e("icons.22"),
                                d.e("icons.27"),
                                d.e("icons.26"),
                                d.e("modules.audio-6107ac1a"),
                                d.e("modules.audio-b953418a"),
                                d.e("modules.audio-7c51e6a7"),
                                d.e("modules.audio-04db59e9"),
                                d.e("modules.audio-76583d6c"),
                                d.e("modules.audio-b7a8a5fb"),
                                d.e("modules.audio-51f6e793"),
                                d.e("modules.audio-e019dbda"),
                                d.e("modules.audio-262c94d4"),
                                d.e("modules.audio-c6fe4ea4"),
                                d.e("icons.8"),
                                d.e("icons.4"),
                                d.e("icons.28"),
                                d.e("icons.21"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                                d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                                d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                                d.e("shared~bundle.AccountAnalytics~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.Payments~bundle.Prem"),
                                d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"),
                                d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"),
                                d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"),
                                d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"),
                                d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                                d.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"),
                                d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-9749c7d2"),
                                d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-87e5a2e7"),
                                d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-44a55f38"),
                                d.e("shared~bundle.TV~bundle.Account-6107ac1a"),
                                d.e("shared~bundle.TV~bundle.Account-63393a95"),
                                d.e("shared~bundle.TV~bundle.Account-e019dbda"),
                                d.e("shared~bundle.Payments~bundle.TV"),
                                d.e("bundle.TV-6107ac1a"),
                                d.e("bundle.TV-e019dbda"),
                                d.e("bundle.TV-b085b550"),
                                d.e("bundle.TV-3b7b1c3f"),
                                d.e("bundle.TV-7d239244"),
                            ]).then(d.bind(d, 568024)),
                        { shouldMigrateToX: !1 },
                    ),
                    { withLoggedInUserOnly: !0, getReplacePath: oe },
                ),
                le = (0, k.c)(
                    (0, g.p)(
                        () =>
                            Promise.all([
                                d.e("icons.23"),
                                d.e("icons.0"),
                                d.e("icons.2"),
                                d.e("icons.16"),
                                d.e("icons.19"),
                                d.e("icons.10"),
                                d.e("icons.13"),
                                d.e("icons.22"),
                                d.e("icons.27"),
                                d.e("icons.26"),
                                d.e("modules.audio-6107ac1a"),
                                d.e("modules.audio-b953418a"),
                                d.e("modules.audio-7c51e6a7"),
                                d.e("modules.audio-04db59e9"),
                                d.e("modules.audio-76583d6c"),
                                d.e("modules.audio-b7a8a5fb"),
                                d.e("modules.audio-51f6e793"),
                                d.e("modules.audio-e019dbda"),
                                d.e("modules.audio-262c94d4"),
                                d.e("modules.audio-c6fe4ea4"),
                                d.e("icons.8"),
                                d.e("icons.4"),
                                d.e("icons.28"),
                                d.e("icons.21"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                                d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                                d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                                d.e("shared~bundle.AccountAnalytics~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.Payments~bundle.Prem"),
                                d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"),
                                d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"),
                                d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"),
                                d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"),
                                d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                                d.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"),
                                d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-9749c7d2"),
                                d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-87e5a2e7"),
                                d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-44a55f38"),
                                d.e("shared~bundle.TV~bundle.Account-6107ac1a"),
                                d.e("shared~bundle.TV~bundle.Account-63393a95"),
                                d.e("shared~bundle.TV~bundle.Account-e019dbda"),
                                d.e("shared~bundle.Payments~bundle.TV"),
                                d.e("bundle.TV-6107ac1a"),
                                d.e("bundle.TV-e019dbda"),
                                d.e("bundle.TV-b085b550"),
                                d.e("bundle.TV-3b7b1c3f"),
                                d.e("bundle.TV-7d239244"),
                            ]).then(d.bind(d, 240373)),
                        { shouldMigrateToX: !1 },
                    ),
                    { withLoggedInUserOnly: !0, getReplacePath: oe },
                ),
                ne = (0, k.c)(
                    (0, g.p)(
                        () =>
                            Promise.all([
                                d.e("icons.23"),
                                d.e("icons.0"),
                                d.e("icons.2"),
                                d.e("icons.16"),
                                d.e("icons.19"),
                                d.e("icons.10"),
                                d.e("icons.13"),
                                d.e("icons.22"),
                                d.e("icons.27"),
                                d.e("icons.26"),
                                d.e("modules.audio-6107ac1a"),
                                d.e("modules.audio-b953418a"),
                                d.e("modules.audio-7c51e6a7"),
                                d.e("modules.audio-04db59e9"),
                                d.e("modules.audio-76583d6c"),
                                d.e("modules.audio-b7a8a5fb"),
                                d.e("modules.audio-51f6e793"),
                                d.e("modules.audio-e019dbda"),
                                d.e("modules.audio-262c94d4"),
                                d.e("modules.audio-c6fe4ea4"),
                                d.e("icons.8"),
                                d.e("icons.4"),
                                d.e("icons.28"),
                                d.e("icons.21"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                                d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                                d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                                d.e("shared~bundle.AccountAnalytics~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.Payments~bundle.Prem"),
                                d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"),
                                d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"),
                                d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"),
                                d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"),
                                d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                                d.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"),
                                d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-9749c7d2"),
                                d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-87e5a2e7"),
                                d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-44a55f38"),
                                d.e("shared~bundle.TV~bundle.Account-6107ac1a"),
                                d.e("shared~bundle.TV~bundle.Account-63393a95"),
                                d.e("shared~bundle.TV~bundle.Account-e019dbda"),
                                d.e("shared~bundle.Payments~bundle.TV"),
                                d.e("bundle.TV-6107ac1a"),
                                d.e("bundle.TV-e019dbda"),
                                d.e("bundle.TV-b085b550"),
                                d.e("bundle.TV-3b7b1c3f"),
                                d.e("bundle.TV-7d239244"),
                            ]).then(d.bind(d, 942046)),
                        { shouldMigrateToX: !1 },
                    ),
                    { withLoggedInUserOnly: !0, getReplacePath: oe },
                ),
                se = (0, g.p)(
                    () =>
                        Promise.all([
                            d.e("icons.23"),
                            d.e("icons.0"),
                            d.e("icons.2"),
                            d.e("icons.16"),
                            d.e("icons.19"),
                            d.e("icons.10"),
                            d.e("icons.13"),
                            d.e("icons.22"),
                            d.e("icons.27"),
                            d.e("icons.26"),
                            d.e("modules.audio-6107ac1a"),
                            d.e("modules.audio-b953418a"),
                            d.e("modules.audio-7c51e6a7"),
                            d.e("modules.audio-04db59e9"),
                            d.e("modules.audio-76583d6c"),
                            d.e("modules.audio-b7a8a5fb"),
                            d.e("modules.audio-51f6e793"),
                            d.e("modules.audio-e019dbda"),
                            d.e("modules.audio-262c94d4"),
                            d.e("modules.audio-c6fe4ea4"),
                            d.e("icons.8"),
                            d.e("icons.4"),
                            d.e("icons.28"),
                            d.e("icons.21"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            d.e("shared~bundle.AccountAnalytics~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.Payments~bundle.Prem"),
                            d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"),
                            d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"),
                            d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"),
                            d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"),
                            d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                            d.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"),
                            d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-9749c7d2"),
                            d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-87e5a2e7"),
                            d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-44a55f38"),
                            d.e("shared~bundle.TV~bundle.Account-6107ac1a"),
                            d.e("shared~bundle.TV~bundle.Account-63393a95"),
                            d.e("shared~bundle.TV~bundle.Account-e019dbda"),
                            d.e("shared~bundle.Payments~bundle.TV"),
                            d.e("bundle.TV-6107ac1a"),
                            d.e("bundle.TV-e019dbda"),
                            d.e("bundle.TV-b085b550"),
                            d.e("bundle.TV-3b7b1c3f"),
                            d.e("bundle.TV-7d239244"),
                        ]).then(d.bind(d, 456195)),
                    { shouldMigrateToX: !1 },
                ),
                ie = (0, g.p)(
                    () =>
                        Promise.all([
                            d.e("icons.23"),
                            d.e("icons.0"),
                            d.e("icons.2"),
                            d.e("icons.16"),
                            d.e("icons.19"),
                            d.e("icons.10"),
                            d.e("icons.13"),
                            d.e("icons.22"),
                            d.e("icons.27"),
                            d.e("icons.26"),
                            d.e("modules.audio-6107ac1a"),
                            d.e("modules.audio-b953418a"),
                            d.e("modules.audio-7c51e6a7"),
                            d.e("modules.audio-04db59e9"),
                            d.e("modules.audio-76583d6c"),
                            d.e("modules.audio-b7a8a5fb"),
                            d.e("modules.audio-51f6e793"),
                            d.e("modules.audio-e019dbda"),
                            d.e("modules.audio-262c94d4"),
                            d.e("modules.audio-c6fe4ea4"),
                            d.e("icons.8"),
                            d.e("icons.4"),
                            d.e("icons.28"),
                            d.e("icons.21"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            d.e("shared~bundle.AccountAnalytics~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.Payments~bundle.Prem"),
                            d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"),
                            d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"),
                            d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"),
                            d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"),
                            d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                            d.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"),
                            d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-9749c7d2"),
                            d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-87e5a2e7"),
                            d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-44a55f38"),
                            d.e("shared~bundle.TV~bundle.Account-6107ac1a"),
                            d.e("shared~bundle.TV~bundle.Account-63393a95"),
                            d.e("shared~bundle.TV~bundle.Account-e019dbda"),
                            d.e("shared~bundle.Payments~bundle.TV"),
                            d.e("bundle.TV-6107ac1a"),
                            d.e("bundle.TV-e019dbda"),
                            d.e("bundle.TV-b085b550"),
                            d.e("bundle.TV-3b7b1c3f"),
                            d.e("bundle.TV-7d239244"),
                        ]).then(d.bind(d, 634278)),
                    { shouldMigrateToX: !1 },
                ),
                te = (0, g.p)(
                    () =>
                        Promise.all([
                            d.e("icons.23"),
                            d.e("icons.0"),
                            d.e("icons.2"),
                            d.e("icons.16"),
                            d.e("icons.19"),
                            d.e("icons.10"),
                            d.e("icons.13"),
                            d.e("icons.22"),
                            d.e("icons.27"),
                            d.e("icons.26"),
                            d.e("modules.audio-6107ac1a"),
                            d.e("modules.audio-b953418a"),
                            d.e("modules.audio-7c51e6a7"),
                            d.e("modules.audio-04db59e9"),
                            d.e("modules.audio-76583d6c"),
                            d.e("modules.audio-b7a8a5fb"),
                            d.e("modules.audio-51f6e793"),
                            d.e("modules.audio-e019dbda"),
                            d.e("modules.audio-262c94d4"),
                            d.e("modules.audio-c6fe4ea4"),
                            d.e("icons.8"),
                            d.e("icons.4"),
                            d.e("icons.28"),
                            d.e("icons.21"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            d.e("shared~bundle.AccountAnalytics~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.Payments~bundle.Prem"),
                            d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"),
                            d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"),
                            d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"),
                            d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"),
                            d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                            d.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"),
                            d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-9749c7d2"),
                            d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-87e5a2e7"),
                            d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-44a55f38"),
                            d.e("shared~bundle.TV~bundle.Account-6107ac1a"),
                            d.e("shared~bundle.TV~bundle.Account-63393a95"),
                            d.e("shared~bundle.TV~bundle.Account-e019dbda"),
                            d.e("shared~bundle.Payments~bundle.TV"),
                            d.e("bundle.TV-6107ac1a"),
                            d.e("bundle.TV-e019dbda"),
                            d.e("bundle.TV-b085b550"),
                            d.e("bundle.TV-3b7b1c3f"),
                            d.e("bundle.TV-7d239244"),
                        ]).then(d.bind(d, 225287)),
                    { shouldMigrateToX: !1 },
                ),
                ce = (0, k.c)(
                    (0, g.p)(
                        () =>
                            Promise.all([
                                d.e("icons.23"),
                                d.e("icons.0"),
                                d.e("icons.2"),
                                d.e("icons.16"),
                                d.e("icons.19"),
                                d.e("icons.10"),
                                d.e("icons.13"),
                                d.e("icons.24"),
                                d.e("icons.7"),
                                d.e("icons.22"),
                                d.e("icons.27"),
                                d.e("icons.17"),
                                d.e("modules.common-e907d115"),
                                d.e("modules.common-e019dbda"),
                                d.e("icons.11"),
                                d.e("icons.26"),
                                d.e("modules.audio-6107ac1a"),
                                d.e("modules.audio-b953418a"),
                                d.e("modules.audio-7c51e6a7"),
                                d.e("modules.audio-04db59e9"),
                                d.e("modules.audio-76583d6c"),
                                d.e("modules.audio-b7a8a5fb"),
                                d.e("modules.audio-51f6e793"),
                                d.e("modules.audio-e019dbda"),
                                d.e("modules.audio-262c94d4"),
                                d.e("modules.audio-c6fe4ea4"),
                                d.e("icons.8"),
                                d.e("icons.4"),
                                d.e("icons.14"),
                                d.e("icons.28"),
                                d.e("icons.21"),
                                d.e("icons.3"),
                                d.e("icons.1"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                                d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d"),
                                d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"),
                                d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                                d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                                d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"),
                                d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"),
                                d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"),
                                d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"),
                                d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                                d.e("shared~loader.DashMenu~loader.DashModal~ondemand.CommandCenter~bundle.Account~ondemand.SettingsInternals~onde"),
                                d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-9749c7d2"),
                                d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-87e5a2e7"),
                                d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-44a55f38"),
                                d.e("shared~bundle.TV~bundle.Account-6107ac1a"),
                                d.e("shared~bundle.TV~bundle.Account-63393a95"),
                                d.e("shared~bundle.TV~bundle.Account-e019dbda"),
                                d.e("bundle.Account"),
                            ]).then(d.bind(d, 621399)),
                        { shouldMigrateToX: !1 },
                    ),
                    { withLoggedInUserOnly: !0, getReplacePath: oe },
                ),
                ue = (0, k.c)(
                    (0, g.p)(
                        () =>
                            Promise.all([
                                d.e("icons.23"),
                                d.e("icons.0"),
                                d.e("icons.2"),
                                d.e("icons.16"),
                                d.e("icons.19"),
                                d.e("icons.10"),
                                d.e("icons.13"),
                                d.e("icons.22"),
                                d.e("icons.27"),
                                d.e("icons.26"),
                                d.e("modules.audio-6107ac1a"),
                                d.e("modules.audio-b953418a"),
                                d.e("modules.audio-7c51e6a7"),
                                d.e("modules.audio-04db59e9"),
                                d.e("modules.audio-76583d6c"),
                                d.e("modules.audio-b7a8a5fb"),
                                d.e("modules.audio-51f6e793"),
                                d.e("modules.audio-e019dbda"),
                                d.e("modules.audio-262c94d4"),
                                d.e("modules.audio-c6fe4ea4"),
                                d.e("icons.8"),
                                d.e("icons.4"),
                                d.e("icons.28"),
                                d.e("icons.21"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                                d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                                d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                                d.e("shared~bundle.AccountAnalytics~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.Payments~bundle.Prem"),
                                d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"),
                                d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"),
                                d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"),
                                d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"),
                                d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                                d.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"),
                                d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-9749c7d2"),
                                d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-87e5a2e7"),
                                d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-44a55f38"),
                                d.e("shared~bundle.TV~bundle.Account-6107ac1a"),
                                d.e("shared~bundle.TV~bundle.Account-63393a95"),
                                d.e("shared~bundle.TV~bundle.Account-e019dbda"),
                                d.e("shared~bundle.Payments~bundle.TV"),
                                d.e("bundle.TV-6107ac1a"),
                                d.e("bundle.TV-e019dbda"),
                                d.e("bundle.TV-b085b550"),
                                d.e("bundle.TV-3b7b1c3f"),
                                d.e("bundle.TV-7d239244"),
                            ]).then(d.bind(d, 664269)),
                        { shouldMigrateToX: !1 },
                    ),
                    { withLoggedInUserOnly: !0, getReplacePath: oe },
                ),
                De = (0, g.p)(
                    () =>
                        Promise.all([
                            d.e("icons.23"),
                            d.e("icons.0"),
                            d.e("icons.2"),
                            d.e("icons.16"),
                            d.e("icons.19"),
                            d.e("icons.10"),
                            d.e("icons.13"),
                            d.e("icons.22"),
                            d.e("icons.27"),
                            d.e("icons.26"),
                            d.e("modules.audio-6107ac1a"),
                            d.e("modules.audio-b953418a"),
                            d.e("modules.audio-7c51e6a7"),
                            d.e("modules.audio-04db59e9"),
                            d.e("modules.audio-76583d6c"),
                            d.e("modules.audio-b7a8a5fb"),
                            d.e("modules.audio-51f6e793"),
                            d.e("modules.audio-e019dbda"),
                            d.e("modules.audio-262c94d4"),
                            d.e("modules.audio-c6fe4ea4"),
                            d.e("icons.8"),
                            d.e("icons.4"),
                            d.e("icons.28"),
                            d.e("icons.21"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            d.e("shared~bundle.AccountAnalytics~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.Payments~bundle.Prem"),
                            d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"),
                            d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"),
                            d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"),
                            d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"),
                            d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                            d.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"),
                            d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-9749c7d2"),
                            d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-87e5a2e7"),
                            d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-44a55f38"),
                            d.e("shared~bundle.TV~bundle.Account-6107ac1a"),
                            d.e("shared~bundle.TV~bundle.Account-63393a95"),
                            d.e("shared~bundle.TV~bundle.Account-e019dbda"),
                            d.e("shared~bundle.Payments~bundle.TV"),
                            d.e("bundle.TV-6107ac1a"),
                            d.e("bundle.TV-e019dbda"),
                            d.e("bundle.TV-b085b550"),
                            d.e("bundle.TV-3b7b1c3f"),
                            d.e("bundle.TV-7d239244"),
                        ]).then(d.bind(d, 312839)),
                    { shouldMigrateToX: !1 },
                ),
                me = (0, g.p)(
                    () =>
                        Promise.all([
                            d.e("icons.23"),
                            d.e("icons.0"),
                            d.e("icons.2"),
                            d.e("icons.16"),
                            d.e("icons.19"),
                            d.e("icons.10"),
                            d.e("icons.13"),
                            d.e("icons.22"),
                            d.e("icons.27"),
                            d.e("icons.26"),
                            d.e("modules.audio-6107ac1a"),
                            d.e("modules.audio-b953418a"),
                            d.e("modules.audio-7c51e6a7"),
                            d.e("modules.audio-04db59e9"),
                            d.e("modules.audio-76583d6c"),
                            d.e("modules.audio-b7a8a5fb"),
                            d.e("modules.audio-51f6e793"),
                            d.e("modules.audio-e019dbda"),
                            d.e("modules.audio-262c94d4"),
                            d.e("modules.audio-c6fe4ea4"),
                            d.e("icons.8"),
                            d.e("icons.4"),
                            d.e("icons.28"),
                            d.e("icons.21"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                            d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                            d.e("shared~bundle.AccountAnalytics~ondemand.SettingsInternals~ondemand.SettingsRevamp~bundle.Payments~bundle.Prem"),
                            d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"),
                            d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"),
                            d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"),
                            d.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"),
                            d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                            d.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"),
                            d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-9749c7d2"),
                            d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-87e5a2e7"),
                            d.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-44a55f38"),
                            d.e("shared~bundle.TV~bundle.Account-6107ac1a"),
                            d.e("shared~bundle.TV~bundle.Account-63393a95"),
                            d.e("shared~bundle.TV~bundle.Account-e019dbda"),
                            d.e("shared~bundle.Payments~bundle.TV"),
                            d.e("bundle.TV-6107ac1a"),
                            d.e("bundle.TV-e019dbda"),
                            d.e("bundle.TV-b085b550"),
                            d.e("bundle.TV-3b7b1c3f"),
                            d.e("bundle.TV-7d239244"),
                        ]).then(d.bind(d, 713428)),
                    { shouldMigrateToX: !1 },
                ),
                he = (e) => r.createElement(De, e),
                be = (e) => r.createElement(A.Z, (0, o.Z)({}, e, { component: re, fallbackRedirect: y.C2, featureSwitchName: "responsive_web_messages_enabled", match: e.match })),
                Me = (e) => r.createElement(A.Z, (0, o.Z)({}, e, { component: (e) => r.createElement(me, (0, o.Z)({}, e, { pageName: "following", query: "filter:follows filter:videos", searchTab: "following", title: ae })), fallbackRedirect: y.C2, featureSwitchName: "responsive_web_messages_enabled", match: e.match })),
                ye = (e) => r.createElement(A.Z, (0, o.Z)({}, e, { component: (e) => r.createElement(me, (0, o.Z)({}, e, { pageName: "bookmarks", query: "filter:videos", searchTab: "bookmarks", title: de })), fallbackRedirect: y.C2, featureSwitchName: "responsive_web_messages_enabled", match: e.match })),
                pe = (e) => r.createElement(A.Z, (0, o.Z)({}, e, { component: le, fallbackRedirect: y.C2, featureSwitchName: "responsive_web_messages_enabled", match: e.match })),
                we = (e) => r.createElement(se, (0, o.Z)({}, e, { match: e.match })),
                Pe = (e) => r.createElement(ie, (0, o.Z)({}, e, { match: e.match })),
                fe = (e) => r.createElement(te, (0, o.Z)({}, e, { match: e.match })),
                Ae = (e) => r.createElement(A.Z, (0, o.Z)({}, e, { component: ce, fallbackRedirect: y.C2, featureSwitchName: "responsive_web_messages_enabled", match: e.match })),
                ke = (e) => r.createElement(A.Z, (0, o.Z)({}, e, { component: ue, fallbackRedirect: y.C2, featureSwitchName: "responsive_web_messages_enabled", match: e.match })),
                ve = (e) => r.createElement(A.Z, (0, o.Z)({}, e, { component: ne, fallbackRedirect: y.C2, featureSwitchName: "responsive_web_messages_enabled", key: e.match.params.tweetId, match: e.match })),
                Ie = () => r.createElement(t.Switch, null, r.createElement(t.Route, null, r.createElement(J, null, r.createElement(v.Z, null, [r.createElement(t.Route, { component: be, exact: !0, key: "tvHomeScreen", path: "/i/tv" }), r.createElement(t.Route, { component: ve, exact: !0, key: "tvSearchScreen", path: y.sH }), r.createElement(t.Route, { component: we, exact: !0, key: "tvLoginScreen", path: y.C2 }), r.createElement(t.Route, { component: Pe, exact: !0, key: "tvCastLandingScreen", path: y.ZW }), r.createElement(t.Route, { component: fe, exact: !0, key: "tvCookieComplianceScreen", path: y.BO }), r.createElement(t.Route, { component: Ae, exact: !0, key: "tvProfileScreen", path: `/i/tv/profile/${I.qX}` }), r.createElement(t.Route, { component: ke, exact: !0, key: "tvProfileScreen", path: `/i/tv/trend/${I.tH}` }), r.createElement(t.Route, { component: Me, exact: !0, key: "tvFollowingScreen", path: b.CW }), r.createElement(t.Route, { component: ye, exact: !0, key: "tvBookmarksScreen", path: b.Qf }), r.createElement(t.Route, { component: pe, exact: !0, key: "tvSettingsScreen", path: b.n4 }), r.createElement(t.Route, { exact: !0, key: "/i/tv/player/:tweetId/", path: [`/i/tv/player/${I.A2}`], render: he }), r.createElement(t.Route, { component: T.NotFoundScreen, key: "not_found" })]))));
            var ge = d(902641),
                Te = d(426200),
                Ce = d(944800);
            class Ve extends r.Component {
                constructor(...e) {
                    super(...e), (this.state = { isMounted: !1 }), (this._routerProps = { children: Ie() });
                }
                componentDidMount() {
                    this.setState({ isMounted: !0 });
                }
                render() {
                    const { contextProviderProps: e, history: a, jotaiStore: d, relayEnvironment: s, store: p } = this.props,
                        P = this.state.isMounted ? r.createElement(t.Router, { children: this._routerProps.children, history: a }) : null;
                    return r.createElement(n.zt, { store: p }, r.createElement(h.nO, { data: { user_agent: c.ZP.userAgent }, namespace: y.ho }, r.createElement(l.zt, { store: d }, r.createElement(i(), { environment: s }, r.createElement(D.ZP, (0, o.Z)({ history: a, store: p }, e), r.createElement(Te.G, null, r.createElement(M.x, { history: a }, r.createElement(m.__, null, r.createElement(Ce.H, { history: a }, r.createElement(ge.r, { history: a }, r.createElement($.X, { initialFocusedElement: b.rQ, isEnabled: !0 }, r.createElement(w, { history: a }), r.createElement(u.Z, null, P))))))))))));
                }
            }
        },
        944800: (e, a, d) => {
            d.d(a, { H: () => c, y: () => u });
            d(136728), d(571372);
            var o = d(202784),
                r = d(334291),
                l = d.n(r),
                n = d(323265),
                s = d(601798);
            const i = RegExp("https://(x|twitter).com(/i/tv.*)$"),
                t = o.createContext({ isVizioTV: void 0, vizioClosedCaptioningEnabled: void 0, vizioClosedCaptionStyles: void 0, VIZIO: void 0 }),
                c = ({ children: e, history: a }) => {
                    const [d, r] = o.useState(),
                        [c, u] = o.useState(),
                        D = { isVizioTV: !!window?.VIZIO, vizioClosedCaptioningEnabled: d, vizioClosedCaptionStyles: c, VIZIO: window?.VIZIO },
                        m = o.useCallback((e) => {
                            r(e);
                        }, []),
                        h = o.useCallback(
                            (e) => {
                                const d = i.exec(e);
                                d ? a.push(d[2]) : a.push("/i/tv");
                            },
                            [a],
                        ),
                        b = o.useCallback((e) => {
                            u(e);
                        }, []),
                        M = o.useCallback(() => {
                            window?.VIZIO?.setClosedCaptionHandler(m), window?.VIZIO?.setContentChangeHandler(h), window?.VIZIO?.getClosedCaptionStyles(b);
                        }, [m, b, h]);
                    return (
                        o.useEffect(
                            () => (
                                document.addEventListener("VIZIO_LIBRARY_DID_LOAD", M, !1),
                                function () {
                                    document.removeEventListener("VIZIO_LIBRARY_DID_LOAD", M);
                                }
                            ),
                            [M],
                        ),
                        o.useEffect(() => {
                            n.ZP.isVizioTV() && s.Z.inject({ callback: l(), scriptId: "vizioCompanionLibrary", src: "http://localhost:12345/scfs/cl/js/vizio-companion-lib.js" });
                        }, []),
                        o.createElement(t.Provider, { value: D }, e)
                    );
                };
            function u() {
                const e = o.useContext(t);
                if (void 0 === e) throw new Error("useTVVizioContext was used outside of its provider TVVizioContext");
                return e;
            }
        },
        795290: (e, a, d) => {
            d.d(a, { Q: () => y, x: () => M });
            d(136728), d(571372);
            var o = d(202784),
                r = d(396342),
                l = d(516951),
                n = d(988428),
                s = d(952793),
                i = d(530745),
                t = d(293115),
                c = d(601798),
                u = d(471494),
                D = d(426200);
            const m = "urn:x-cast:com.x.xtv",
                h = o.createContext({ googleCastReceiverLoaded: !1, googleCastSenderConnected: !1, playerApi: void 0, playerState: void 0, setPlayerApi: l.Z, setPlayerState: l.Z, setTweetId: l.Z }),
                b = () => {
                    const e = (0, s.hC)("responsive_web_tv_cast_enabled"),
                        a = o.useMemo(() => navigator.userAgent.includes("CrKey") || navigator.userAgent.includes("Chromecast"), []),
                        d = o.useMemo(() => navigator.userAgent.includes("VIZIO"), []);
                    return e && a && !d;
                },
                M = ({ children: e, history: a }) => {
                    const d = b(),
                        l = o.useRef(!1),
                        M = o.useRef(),
                        y = o.useRef(),
                        [p, w] = o.useState(!1),
                        [P, f] = o.useState(!1),
                        [A, k] = o.useState(),
                        { logMessageToScreen: v } = (0, D.n)();
                    v("Rendering the cast receiver...");
                    const I = (0, s.hC)("tv_app_casting_log_focused_element_every_10s");
                    o.useEffect(() => {
                        I &&
                            setInterval(() => {
                                v(`focused element: ${(0, r.getCurrentFocusKey)()}`, "aqua");
                            }, 1e4);
                    }, [I, v]);
                    const g = o.useCallback(
                            (e) => {
                                const a = e || y.current;
                                if (!window.CastReceiver || !a) return;
                                const d = (0, n.Ci)(a);
                                if (!d) return;
                                const o = { type: "status", statusID: A || "", currentTimeMs: Math.floor(d.currentTimeMs), durationMs: "broadcast" === a.source?.type && d.isLive ? -1 : d.durationMs || 0, playerState: a.isPlaying ? "PLAYING" : "PAUSED", captionsEnabled: !!a?.areCaptionsShown, captionsAvailable: !!d.hasCaptions, playbackRate: a.playbackRate || 1, isMuted: a.isMuted };
                                window.CastReceiver.updateCurrentStatus(JSON.stringify(o));
                            },
                            [A],
                        ),
                        T = o.useCallback(
                            (e) => {
                                (M.current = e),
                                    e?.subscribe((e) => {
                                        g(e);
                                    });
                            },
                            [g],
                        ),
                        C = o.useCallback((e) => {
                            y.current = e;
                        }, []),
                        V = o.useCallback((e) => {
                            k(e);
                        }, []),
                        S = o.useCallback(
                            (e) => {
                                if ("statusID" in e && "string" == typeof e.statusID && "currentTimeMs" in e && "number" == typeof e.currentTimeMs) {
                                    const r = ((d = e.statusID), (o = (+e.statusID || 0).toString()), "string" == typeof d ? d.toString() : o),
                                        l = +e.currentTimeMs || 0,
                                        n = [];
                                    n.push(`${u.$2}=true`), l > 0 && n.push("t=" + l / 1e3);
                                    const s = `/i/tv/player/${r}${`?${n.join("&")}`}`;
                                    window.location.pathname.startsWith(`/i/tv/player/${r}`) ? (v(`handleLoad seeking to: ${l.toString()}`), M.current?.seekTo(l / 1e3), M.current?.play()) : window.location.pathname.startsWith("/i/tv/player/") ? (v(`handleLoad history replace to: ${s}`), a.replace(s)) : (v(`handleLoad history push to: ${s}`), a.push(s));
                                }
                                var d, o;
                            },
                            [a, v, M],
                        ),
                        E = o.useCallback(
                            (e) => {
                                if ((v(`onMessageHandler: ${e.type}`), !e)) return;
                                const a = {
                                    load: () => S(e),
                                    play: () => {
                                        v(`handling play (playerApi: ${M ? typeof M : "undefined"})`), M.current?.play();
                                    },
                                    pause: () => {
                                        v(`handling pause (playerApi: ${M ? typeof M : "undefined"})`), M.current?.pause();
                                    },
                                    stop: () => {
                                        v(`handling stop (playerApi: ${M ? typeof M : "undefined"})`), M.current?.pause();
                                    },
                                    seekTo: () => {
                                        v(`handling seekTo (playerApi: ${M ? typeof M : "undefined"})`), "currentTimeMs" in e && "number" == typeof e.currentTimeMs && (v(`seekingTo: ${e?.currentTimeMs}`), M.current?.seekTo((+e?.currentTimeMs || 0) / 1e3));
                                    },
                                    skipBy: () => {
                                        v(`handling skipBy (playerApi: ${M ? typeof M : "undefined"})`), "seconds" in e && "number" == typeof e.seconds && (v(`skipBy: ${e.seconds}`), M.current?.skipBy(+e?.seconds));
                                    },
                                    setPlaybackRate: () => {
                                        v(`handling setPlaybackRate (playerApi: ${M ? typeof M : "undefined"})`), "playbackRate" in e && "number" == typeof e.playbackRate && (v(`setting setPlaybackRate: ${e.playbackRate}`), M.current?.setPlaybackRate(+e.playbackRate));
                                    },
                                    toggleCaptions: () => {
                                        M.current?.toggleCaptions();
                                    },
                                    mute: () => {
                                        v(`handling mute (playerApi: ${M ? typeof M : "undefined"})`), M.current?.mute();
                                    },
                                    unmute: () => {
                                        v(`handling unmute (playerApi: ${M ? typeof M : "undefined"})`), M.current?.unmute();
                                    },
                                    arrowUp: () => {
                                        document?.dispatchEvent?.(new KeyboardEvent("keydown", { key: i.kl }));
                                    },
                                    arrowDown: () => {
                                        document?.dispatchEvent?.(new KeyboardEvent("keydown", { key: i.WX }));
                                    },
                                    arrowRight: () => {
                                        document?.dispatchEvent?.(new KeyboardEvent("keydown", { key: i.Qs }));
                                    },
                                    arrowLeft: () => {
                                        document?.dispatchEvent?.(new KeyboardEvent("keydown", { key: i.QK }));
                                    },
                                    tap: () => {
                                        document?.dispatchEvent?.(new MouseEvent("click", { bubbles: !0, cancelable: !0 }));
                                    },
                                    back: () => {
                                        document?.dispatchEvent?.(new KeyboardEvent("keydown", { key: i.nQ }));
                                    },
                                    connect: () => {
                                        g();
                                    },
                                    connected: () => {
                                        f(!0), g();
                                    },
                                    disconnected: () => {
                                        f(!1), g();
                                    },
                                };
                                a[e.type]?.();
                            },
                            [S, v, M, g],
                        );
                    o.useEffect(() => {
                        if ((v(`Initializing casting. (initialized.current: ${l.current.toString()}, isCastingEnabled: ${d.toString()})`), !1 === l.current && d)) {
                            const e = (e) => {
                                    E(e.detail);
                                },
                                a = () => {
                                    if ((w(!0), window?.cast)) {
                                        const a = window?.cast?.framework?.CastReceiverContext.getInstance(),
                                            d = new window.cast.framework.CastReceiverOptions();
                                        a.addCustomMessageListener(m, function (e) {
                                            E(e.data);
                                        }),
                                            (window.CastReceiver = {
                                                updateCurrentStatus: function (e) {
                                                    a.sendCustomMessage(m, void 0, JSON.parse(e));
                                                },
                                            }),
                                            a.addEventListener(window.cast.framework.system.EventType.SENDER_CONNECTED, () => {
                                                f(!0), E({ type: "connected" });
                                            }),
                                            a.addEventListener(window.cast.framework.system.EventType.SENDER_DISCONNECTED, () => {
                                                f(!1), E({ type: "disconnected" });
                                            }),
                                            (d.disableIdleTimeout = !0),
                                            v(`Starting google cast receiver: ${JSON.stringify(d)}`, "white"),
                                            a.start(d),
                                            v("Google cast receiver started"),
                                            document.addEventListener("cast-message", e);
                                    } else v("Cast receiver script failed to load", "red");
                                };
                            v("Injecting casting script..."), c.Z.inject({ callback: a, scriptId: "googleCastReceiverFramework", src: "//www.gstatic.com/cast/sdk/libs/caf_receiver/v3/cast_receiver_framework.js" }), (l.current = !0);
                        }
                    }, [d, v, E]);
                    const R = { googleCastReceiverLoaded: p, googleCastSenderConnected: P, playerApi: M, playerState: y, setPlayerApi: T, setPlayerState: C, setTweetId: V },
                        B = P ? { is_receiving_tv_cast: !0 } : {};
                    return o.createElement(h.Provider, { value: R }, o.createElement(t.nO, { data: B }, e));
                };
            function y({ playerApiRef: e, playerStateRef: a, tweetId: d } = { playerApiRef: void 0, playerStateRef: void 0, tweetId: void 0 }) {
                const r = o.useContext(h);
                if (void 0 === r) throw new Error("useCasting was used outside of its provider TVCastReceiverContext");
                o.useEffect(() => {
                    e?.current && r.playerApi?.current !== e?.current && r.setPlayerApi(e?.current);
                }, [r, e]),
                    o.useEffect(() => {
                        a?.current && r.playerState?.current !== a?.current && r.setPlayerState(a?.current);
                    }, [r, a]);
                const l = b(),
                    { logMessageToScreen: n } = (0, D.n)();
                return (
                    o.useEffect(() => {
                        d && (n(`useCasting is updating the tweetId to: ${(d || "").toString()}`), r.setTweetId(d));
                    }, [r, n, d]),
                    o.useEffect(() => {
                        n("useCasting INIT");
                    }, [n]),
                    o.useEffect(() => {
                        n(`will we send the IDLE event? ${Boolean(!d).toString()}, ${!!window.CastReceiver}`), n(`window chromecast receiver? ${window.CastReceiver}`), l && !d && window.CastReceiver && window.CastReceiver.updateCurrentStatus(JSON.stringify({ type: "status", playerState: "IDLE" }));
                    }, [d, l, n]),
                    { googleCastReceiverLoaded: r.googleCastReceiverLoaded, googleCastSenderConnected: r.googleCastSenderConnected }
                );
            }
        },
        305332: (e, a, d) => {
            d.d(a, { Z: () => C });
            var o = d(202784),
                r = d(873930),
                l = d(396342),
                n = d(555874),
                s = d(325686),
                i = d(879891),
                t = d(392237),
                c = d(334522),
                u = d(602070),
                D = d(725516),
                m = d(905346),
                h = d(651961),
                b = d(686010),
                M = d(334113);
            const y = "tv-carousel",
                p = { behavior: "smooth", block: "start", inline: "nearest" },
                w = (e) => `${y}-${e}`,
                P = (e) => e.id,
                f = ({ autoFocus: e, categories: a, focusBoundaryDirections: d, isFocusBoundary: r, name: t, onArrowPress: y, onSelectVideo: f, playVideoPreview: k, returnToFirstElementOnEscape: v, withScrollRestoration: I = !0 }) => {
                    const g = (0, D.z)(),
                        { direction: T } = (0, i.Z)(),
                        C = (0, c.Z)(`${t}.${w("0")}.${(0, h.X)("0")}`),
                        V = o.useMemo(() => a.filter((e) => e.content?.length > 0), [a]),
                        S = o.useCallback(
                            (e) => {
                                if (v && C && (0, l.getCurrentFocusKey)() !== C) return (0, l.setFocus)(C), !0;
                            },
                            [C, v],
                        ),
                        E = o.useCallback(
                            ({ index: e, item: a }) =>
                                o.createElement(
                                    s.Z,
                                    { key: a.id, style: e === V.length - 1 ? null : A.carouselMarginBottom },
                                    o.createElement(m.Z, {
                                        content: a.content,
                                        displayType: (0, M.qU)(a.displayType),
                                        key: a.id,
                                        name: w(e.toString()),
                                        onFocus: () => {
                                            e === V.length - 1 && g.scribe({ element: "tv-grid-with-categories", action: "reached_end" });
                                        },
                                        onSelectVideo: f,
                                        playVideoPreview: k,
                                        scrollOptions: p,
                                        title: a.title,
                                    }),
                                ),
                            [g, V.length, f, k],
                        );
                    (0, u.ZP)(I);
                    const R = o.useCallback(
                        (e) => {
                            let a = "scroll";
                            switch (e.key) {
                                case "ArrowUp":
                                    a = "scroll_up";
                                    break;
                                case "ArrowDown":
                                    a = "scroll_down";
                                    break;
                                case "ArrowLeft":
                                    a = "rtl" === T ? "scroll_right" : "scroll_left";
                                    break;
                                case "ArrowRight":
                                    a = "rtl" === T ? "scroll_left" : "scroll_right";
                            }
                            return g.scribe({ element: "tv-category-grid", action: a }), !y || y(e);
                        },
                        [g, T, y],
                    );
                    return o.createElement(b.Z, { "aria-label": void 0, autoFocus: e, focusBoundaryDirections: d, isFocusBoundary: r, name: t, onArrowPress: R, onEscapeOrBack: S, role: "grid", style: A.root, trackChildren: !0 }, o.createElement(n.Z, { contentContainerStyle: A.flatListContentContainer, data: V, initialNumToRender: 3, keyExtractor: P, renderItem: E, showsVerticalScrollIndicator: !1, style: A.flatList, vertical: !0 }));
                },
                A = t.default.create((e) => ({ root: { height: "100%", display: "block", overflowY: "visible", overflowX: "visible", width: "100%" }, flatList: { width: "100%", height: "100%" }, flatListContentContainer: { display: "flex", flexDirection: "column" }, carouselMarginBottom: { marginBottom: e.spaces.space12 } }));
            var k = d(291394);
            const v = (e) => `${y}-${e}`,
                I = RegExp(`\\.${y}-([0-9]*)\\.${h.m}-([0-9]*)`),
                g = ({ autoFocus: e, categories: a, focusBoundaryDirections: d, handleNoriginArrowPress: r, isFocusBoundary: n, name: t, onArrowPress: y, onSelectVideo: p, playVideoPreview: w, returnToFirstElementOnEscape: P, withScrollRestoration: f = !0 }) => {
                    const A = o.useRef(null),
                        g = o.useRef(new Map()),
                        C = (0, D.z)(),
                        { direction: V } = (0, i.Z)(),
                        S = (0, c.Z)(t) || t,
                        E = (0, c.Z)(`${t}.${v("0")}.${(0, h.X)("0")}`),
                        R = o.useMemo(() => a.filter((e) => e.content?.length > 0), [a]),
                        B = o.useRef(Array(R?.length).fill(null)),
                        Z = o.useRef(Array(R?.length).fill(null)),
                        x = o.useRef(
                            Z.current.map((e, a) => (e) => {
                                Z.current[a] = e;
                            }),
                        ),
                        N = o.useMemo(
                            () =>
                                R.map((e, a) => () => {
                                    A.current?.positionRef.current !== a && A.current?.setPosition(a);
                                }),
                            [R],
                        ),
                        O = o.useMemo(
                            () =>
                                R.map((e, a) => (e) => {
                                    const d = `${S}.${v(a.toString())}`;
                                    g.current.set(d, e);
                                }),
                            [R, S],
                        ),
                        H = o.useCallback((e) => {
                            const a = I.exec(e);
                            if (a) {
                                const e = parseInt(a[1], 10) || 0,
                                    d = parseInt(a[2], 10) || 0;
                                A.current?.setPosition(e), Z.current[e]?.(d);
                            }
                        }, []),
                        L = (0, u.KN)(f, H),
                        $ = o.useCallback(
                            ({ index: e, item: a }) => {
                                const d = x.current[e];
                                return o.createElement(
                                    s.Z,
                                    {
                                        key: a.id,
                                        ref: (a) => {
                                            B.current[e] = a;
                                        },
                                        style: e === R.length - 1 ? null : T.carouselMarginBottom,
                                    },
                                    o.createElement(m.Z, { content: a.content, displayType: (0, M.qU)(a.displayType), getSetPositionFn: d, handleNoriginArrowPress: r || (() => !1), name: v(e.toString()), onFocus: N[e], onFocusChild: O[e], onReady: L, onSelectVideo: p, playVideoPreview: w, title: a.title }),
                                );
                            },
                            [R.length, r, N, O, L, p, w],
                        ),
                        _ = o.useMemo(() => R.map((e, a) => $({ index: a, item: e })), [R, $]),
                        F = o.useCallback(
                            (e) => {
                                if (P && E && (0, l.getCurrentFocusKey)() !== E) return (0, l.setFocus)(E), A.current?.setPosition(0), Z.current[0]?.(0), !0;
                            },
                            [E, P],
                        ),
                        z = o.useCallback(
                            (e) => {
                                if (A.current?.isAnimating.current) return !0;
                                const a = A.current?.positionRef.current || 0;
                                let d,
                                    o = "scroll";
                                switch (e.key) {
                                    case "ArrowUp":
                                        (d = Math.max(a - 1, 0)), (o = "scroll_up");
                                        break;
                                    case "ArrowDown":
                                        (o = "scroll_down"), (d = Math.min(a + 1, R.length - 1));
                                        break;
                                    case "ArrowLeft":
                                        o = "rtl" === V ? "scroll_right" : "scroll_left";
                                        break;
                                    case "ArrowRight":
                                        o = "rtl" === V ? "scroll_left" : "scroll_right";
                                }
                                if ((C.scribe({ element: "tv-category-grid", action: o }), void 0 === d || d === a)) return y?.(e);
                                const r = g.current.get(`${S}.${v(d.toString())}`);
                                return r ? (0, l.setFocus)(r) : (0, l.setFocus)(`${S}.${v(d.toString())}.${(0, h.X)("0")}`), A.current?.setPosition(d), !0;
                            },
                            [C, V, R.length, S, y],
                        ),
                        U = o.useCallback((e) => {
                            A.current = e;
                        }, []);
                    return o.createElement(b.Z, { "aria-label": void 0, autoFocus: e, autoRestoreFocus: !0, focusBoundaryDirections: d, isFocusBoundary: n, name: t, onArrowPress: z, onEscapeOrBack: F, role: "grid", saveLastFocusedChild: !0, style: T.root, trackChildren: !0 }, o.createElement(k.k, { getGPUScrollerApi: U, renderedItemRefs: B, scrollX: !1, scrollY: !0 }, o.createElement(s.Z, { style: T.itemContainer }, _)));
                },
                T = t.default.create((e) => ({ root: { display: "block", overflow: "hidden", width: "100%", height: "100%" }, itemContainer: { display: "flex", flexDirection: "column" }, carouselMarginBottom: { marginBottom: e.spaces.space12 } }));
            function C(e) {
                return (0, r.Z)() ? o.createElement(f, e) : o.createElement(g, e);
            }
        },
        734261: (e, a, d) => {
            d.d(a, { H: () => u, o: () => c });
            var o = d(202784),
                r = d(111677),
                l = d.n(r),
                n = d(775042);
            const s = l().d96cf7ce,
                i = l().ab4fc8bc,
                t = l().dbd5d400,
                c = "keyboard",
                u = {
                    rows: [
                        [
                            { displayName: "A", value: "a" },
                            { displayName: "B", value: "b" },
                            { displayName: "C", value: "c" },
                            { displayName: "D", value: "d" },
                            { displayName: "E", value: "e" },
                            { displayName: "F", value: "f" },
                        ],
                        [
                            { displayName: "G", value: "g" },
                            { displayName: "H", value: "h" },
                            { displayName: "I", value: "i" },
                            { displayName: "J", value: "j" },
                            { displayName: "K", value: "k" },
                            { displayName: "L", value: "l" },
                        ],
                        [
                            { displayName: "M", value: "m" },
                            { displayName: "N", value: "n" },
                            { displayName: "O", value: "o" },
                            { displayName: "P", value: "p" },
                            { displayName: "Q", value: "q" },
                            { displayName: "R", value: "r" },
                        ],
                        [
                            { displayName: "S", value: "s" },
                            { displayName: "T", value: "t" },
                            { displayName: "U", value: "u" },
                            { displayName: "V", value: "v" },
                            { displayName: "W", value: "w" },
                            { displayName: "X", value: "x" },
                        ],
                        [
                            { displayName: "Y", value: "y" },
                            { displayName: "Z", value: "z" },
                            { displayName: "1", value: "1" },
                            { displayName: "2", value: "2" },
                            { displayName: "3", value: "3" },
                            { displayName: "4", value: "4" },
                        ],
                        [
                            { displayName: "5", value: "5" },
                            { displayName: "6", value: "6" },
                            { displayName: "7", value: "7" },
                            { displayName: "8", value: "8" },
                            { displayName: "9", value: "9" },
                            { displayName: "0", value: "0" },
                        ],
                        [
                            { displayName: s, value: "Backspace", icon: o.createElement(n.default, null), width: 2 },
                            { displayName: i, value: " ", width: 2 },
                            { displayName: t, value: "Clear", width: 2 },
                        ],
                    ],
                };
        },
        787557: (e, a, d) => {
            d.d(a, { Z: () => b });
            var o = d(807896),
                r = d(202784),
                l = d(325686),
                n = d(731708),
                s = d(392237),
                i = d(111677),
                t = d.n(i),
                c = d(686010),
                u = d(467537),
                D = d(734261);
            const m = t().ia13bd7c,
                h = ({ disabled: e, displayName: a, icon: d, onArrowPress: o, onKeyPress: l, style: s, value: i }) => {
                    const t = { displayName: a, value: i };
                    return r.createElement(u.C, { "aria-label": a, focusable: !e, name: `key-${a}`, onArrowPress: o, onPress: () => l?.(t), role: "text", style: [M.keyboardKey, s] }, r.createElement(n.ZP, { size: "subtext2", weight: "medium" }, d || a));
                },
                b = ({ disabled: e, onArrowPress: a, onKeyPress: d, style: n, width: s = 6 }) => {
                    const i = D.H.rows.length,
                        t = { gridTemplateColumns: `repeat(${s}, 1fr)` },
                        u = r.useMemo(
                            () =>
                                D.H.rows.flatMap((n, s) =>
                                    n.map((n, t, c) => {
                                        const u = t === c.length - 1;
                                        let D = {};
                                        return 0 === s && 0 === t ? (D = M.topLeftKey) : 0 === s && u ? (D = M.topRightKey) : s === i - 1 && 0 === t ? (D = M.bottomLeftKey) : s === i - 1 && u && (D = M.bottomRightKey), r.createElement(l.Z, { key: `tv-keyboard-key-${n.displayName}`, style: { gridColumn: `span ${n.width || 1}` } }, r.createElement(h, (0, o.Z)({}, n, { disabled: e, onArrowPress: a, onKeyPress: d, style: D })));
                                    }),
                                ),
                            [e, i, a, d],
                        );
                    return r.createElement(c.Z, { "aria-label": m, focusable: !e, name: D.o, onArrowPress: a, role: "layout", saveLastFocusedChild: !0, style: [M.container, t, n] }, u);
                },
                M = s.default.create((e) => ({ container: { display: "grid", gridGap: e.spaces.space2, rowGap: e.spaces.space2, width: `calc(100% - ${e.spaces.space2})` }, keyboardKey: { alignItems: "center", backgroundColor: e.colors.gray200, color: e.colors.text, height: e.spaces.space32, justifyContent: "center", minWidth: e.spaces.space36 }, topLeftKey: { borderTopStartRadius: e.borderRadii.medium }, topRightKey: { borderTopEndRadius: e.borderRadii.medium }, bottomLeftKey: { borderBottomStartRadius: e.borderRadii.medium }, bottomRightKey: { borderBottomEndRadius: e.borderRadii.medium } }));
        },
        815846: (e, a, d) => {
            d.d(a, { y: () => o });
            const o = Object.freeze({ "": "", a: "a", b: "b", c: "c", d: "d", e: "e", f: "f", g: "g", h: "h", i: "i", j: "j", k: "k", l: "l", m: "m", n: "n", o: "o", p: "p", q: "q", r: "r", s: "s", t: "t", u: "u", v: "v", w: "w", x: "x", y: "y", z: "z", 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", Backspace: "Backspace", Space: " ", Clear: "Clear" });
        },
        500529: (e, a, d) => {
            d.d(a, { Z: () => t });
            var o = d(202784),
                r = d(392237),
                l = d(382880),
                n = d(516951),
                s = d(873930);
            const i = r.default.create((e) => ({ list: { display: "flex", flexDirection: "column" }, listItemBottomMargin: { marginBottom: e.spaces.space16 } })),
                t = ({ identityFunction: e, items: a, onNearEnd: d, renderer: r }) => {
                    const [t, c] = o.useState(0),
                        u = o.useRef(null),
                        D = (0, s.Z)(),
                        m = o.useMemo(() => (0, l.Z)(d || n.Z), [d]),
                        h = o.useCallback(
                            (e) => {
                                "ArrowDown" === e.key ? (c((e) => Math.min(a.length - 1, e + 1)), a.length - t < 5 && m()) : "ArrowUp" === e.key && c((e) => Math.max(0, e - 1));
                            },
                            [t, c, a.length, m],
                        );
                    return (
                        o.useEffect(() => (window.addEventListener("keydown", h), () => window.removeEventListener("keydown", h)), [h]),
                        o.useEffect(() => {
                            if (D && a.length) {
                                const e = new IntersectionObserver(
                                        (e) => {
                                            e && e.length > 0 && e[0].isIntersecting && m();
                                        },
                                        { threshold: 1 },
                                    ),
                                    { current: a } = u || {};
                                return (
                                    a && e.observe(a),
                                    () => {
                                        a && e.unobserve(a);
                                    }
                                );
                            }
                        }, [u, D, a.length, m]),
                        o.createElement(
                            "div",
                            { style: i.list },
                            a.map((d, l) => {
                                const n = e(d),
                                    s = l === a.length - 5 ? u : null;
                                return o.createElement("div", { key: n, ref: s, style: l !== a.length - 1 ? i.listItemBottomMargin : null }, r(d));
                            }),
                        )
                    );
                };
        },
        521878: (e, a, d) => {
            d.d(a, { P: () => r, R: () => o });
            const o = "play-next",
                r = "next-video-and-suggestions-grid";
        },
        589743: (e, a, d) => {
            d.d(a, { Z: () => Z });
            var o = d(202784),
                r = d(396342),
                l = d(325686),
                n = d(107267),
                s = d(731708),
                i = d(392237),
                t = d(111677),
                c = d.n(t),
                u = d(737691),
                D = d(520913),
                m = d(334522),
                h = d(873930),
                b = d(293115),
                M = d(87063),
                y = d(125363),
                p = d(903558),
                w = d(682461),
                P = d(673932),
                f = d(833453),
                A = d(686010),
                k = d(305332),
                v = d(521878);
            const I = c().cd3f5206,
                g = c().c930299f,
                T = c().de65c756,
                C = c().b2e9f19c,
                V = { behavior: "smooth", block: "center", inline: "nearest" },
                S = "replay-button",
                E = (e) => e.tv?.relatedVideos.videos || [],
                R = (e) => e.tv?.relatedVideos.fetchStatus,
                B = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, height: "100vh" }, content: { height: "100vh", paddingTop: e.spaces.space16, paddingHorizontal: e.spaces.space28 }, header: { height: e.spaces.space80 }, videoCards: { paddingTop: e.spaces.space16, justifyContent: "space-between", flexGrow: "1" }, videoCardsScrollable: { height: `calc(100% - ${e.spaces.space64})`, maxHeight: `calc(100% - ${e.spaces.space64})`, overflowY: "auto" }, firstVideo: { width: 340 * e.scaleMultiplier }, replayContainer: { width: "fit-content", flexDirection: "row", alignItems: "center", borderRadius: e.borderRadii.small, backgroundColor: e.colors.gray50, marginBottom: e.spaces.space24 }, iconReload: { width: e.spaces.space16, height: e.spaces.space16, marginEnd: e.spaces.space12 }, logo: { end: e.spaces.space28, height: e.spaces.space40, position: "absolute", top: e.spacesPx.space28 - e.spacesPx.space2, width: e.spaces.space40 } })),
                Z = ({ autoplayNextDisabled: e = !1, currentTweetId: a, onEscapeOrBack: d, onReplayVideo: i }) => {
                    const [t, c] = o.useState(5),
                        [Z, x] = o.useState(!0),
                        N = (0, m.Z)(v.R) || v.R,
                        O = (0, y.v9)(E),
                        H = (0, y.v9)(R),
                        L = (0, y.I0)(),
                        $ = (0, n.useHistory)(),
                        _ = (0, h.Z)(),
                        F = o.useCallback(
                            (e) => {
                                L(p.eX.tvRelatedVideosClear()), L(p.eX.playerSetVideo(e)), $.replace((0, P.X5)(e));
                            },
                            [L, $],
                        ),
                        z = O[0],
                        U = o.useMemo(() => O.slice(1) || [], [O]);
                    o.useEffect(() => {
                        H === M.Z.FAILED && $.goBack();
                    }, [$, H]);
                    const K = o.useCallback(() => {
                        x(!1);
                    }, []);
                    o.useEffect(() => {
                        e && K();
                    }, [e, K]);
                    const X = o.useCallback(
                            (e) => {
                                let a = !1;
                                if ("ArrowUp" === e.key) (0, r.setFocus)(`${N}.${S}`), (a = !0);
                                return x(!1), a;
                            },
                            [N],
                        ),
                        G = o.useCallback(() => (K(), !1), [K]);
                    o.useEffect(() => {
                        if (Z) {
                            const e = setInterval(() => {
                                c((a) => (a > 0 ? a - 1 : (clearInterval(e), z && F(z), a)));
                            }, 1e3);
                            return () => {
                                clearInterval(e);
                            };
                        }
                    }, [z, F, Z]),
                        o.useEffect(() => {
                            !O.length && a && L((0, w._B)({ tweetId: a }));
                        }, [a, L, O]);
                    const j = o.useMemo(() => {
                        const e = t > 0 && Z ? g({ count: t }) : I;
                        return [
                            { id: "up-next", content: [z], title: e, displayType: "Carousel" },
                            { id: "suggestions", content: U, title: T, displayType: "Carousel" },
                        ];
                    }, [U, t, z, Z]);
                    return o.createElement(b.nO, { namespace: { section: "play-next" } }, o.createElement(A.Z, { "aria-label": void 0, name: v.R, onArrowPress: K, onEscapeOrBack: d, preferredChildName: "next-video", role: "layout", style: B.root, trackChildren: !0 }, o.createElement(l.Z, { style: B.content }, o.createElement(l.Z, { style: B.header }, o.createElement(f.K, { "aria-label": void 0, name: S, onPress: i, role: "button", scrollOptions: V, style: B.replayContainer }, o.createElement(u.default, { style: B.iconReload }), o.createElement(s.ZP, { color: "text", size: "body", weight: "bold" }, C))), o.createElement(l.Z, { onTouchStart: K, style: _ ? [B.videoCards, B.videoCardsScrollable] : B.videoCards }, o.createElement(k.Z, { autoFocus: !0, categories: j, focusBoundaryDirections: ["down", "left", "right"], handleNoriginArrowPress: G, isFocusBoundary: !0, name: v.P, onArrowPress: X, onSelectVideo: F }))), o.createElement(D.default, { style: B.logo })));
                };
        },
        406483: (e, a, d) => {
            d.d(a, { Z: () => g });
            var o = d(202784),
                r = d(325686),
                l = d(107267),
                n = d(731708),
                s = d(392237),
                i = d(111677),
                t = d.n(i),
                c = d(293115),
                u = d(125363),
                D = d(903558),
                m = d(673932),
                h = d(686010),
                b = d(650093),
                M = d(87063),
                y = d(668214),
                p = d(682461),
                w = d(971813);
            const P = (e, a) => e.tv?.relatedVideos?.cursor,
                f = (e) => e.tv?.relatedVideos?.fetchStatus === M.Z.LOADING,
                A = (0, y.Z)()
                    .propsFromState(() => ({ tweets: w.G, cursor: P, isLoading: f }))
                    .propsFromActions(() => ({ fetchRelatedVideosGraphQL: p._B }))
                    .withAnalytics({ element: "tvPlayNext" }),
                k = t().de65c756,
                v = { behavior: "smooth", block: "center", inline: "nearest" },
                I = s.default.create((e) => ({ root: { height: "60vh", position: "absolute", width: "100%", bottom: 0, backgroundColor: e.colors.translucentBlack30, padding: e.spaces.space32, paddingBottom: "0" }, title: { marginBottom: e.spaces.space16 }, gridContainer: { flex: 1, overflow: "hidden" } })),
                g = A(({ currentTweetId: e, cursor: a, fetchRelatedVideosGraphQL: d, isLoading: s, onEscapeOrBack: i, tweets: t }) => {
                    const M = (0, u.I0)(),
                        y = (0, l.useHistory)(),
                        p = o.useCallback((e) => (M(D.eX.tvRelatedVideosClear()), M(D.eX.playerSetVideo(e)), y.replace((0, m.X5)(e)), !0), [M, y]),
                        w = o.useCallback(() => {
                            i?.();
                        }, [i]);
                    o.useEffect(() => {
                        !t && e && d({ tweetId: e });
                    }, [e, t, d]);
                    const P = o.useCallback(() => {
                            e && !s && d({ tweetId: e, cursor: a });
                        }, [e, s, d, a]),
                        f = o.useCallback((e) => {
                            e.target.scrollTop = 0;
                        }, []);
                    return o.createElement(c.nO, { namespace: { section: "suggestions" } }, o.createElement(h.Z, { "aria-label": void 0, autoRestoreFocus: !0, name: "related-videos", onEscapeOrBack: i, role: "grid", style: I.root, trackChildren: !0 }, o.createElement(h.Z, { "aria-label": void 0, name: "related-videos-fake-focus-trap", onFocus: w, role: "none" }), o.createElement(n.ZP, { size: "headline1", style: I.title, weight: "bold" }, k), o.createElement(r.Z, { onScroll: f, style: I.gridContainer }, o.createElement(b.Z, { autoFocus: !0, content: t, name: "related-videos-grid", onNearEnd: P, onSelectVideo: p, scrollOptions: v, width: 4 }))));
                });
        },
        971813: (e, a, d) => {
            d.d(a, { G: () => o });
            const o = (e) => e.tv?.relatedVideos.videos || [];
        },
        573359: (e, a, d) => {
            d.d(a, { Z: () => h });
            var o = d(202784),
                r = d(154003),
                l = d(392237),
                n = d(899667),
                s = d(873930),
                i = d(686010),
                t = d(650093),
                c = d(668214);
            const u = (e) => e.tv?.relatedVideos.videos || [],
                D = (0, c.Z)()
                    .propsFromState(() => ({ tweets: u }))
                    .withAnalytics({ element: "tvPlayNext" }),
                m = l.default.create((e) => ({ root: { height: "15vh", overflow: "hidden" }, button: { border: `${e.borderWidths.small} solid ${e.colors.borderColor}`, position: "absolute", start: `calc(50% - ${e.spacesPx.space24 + e.spacesPx.space2}px)`, top: e.spaces.space16, zIndex: e.componentZIndices.appBarZIndex, width: e.spaces.space48, height: e.spaces.space48 } })),
                h = D(({ onFocus: e, style: a, tweets: d }) => {
                    const l = (0, s.Z)(),
                        c = o.useCallback(() => {
                            e();
                        }, [e]);
                    return d && 0 !== d.length ? o.createElement(i.Z, { "aria-label": void 0, focusable: !l, name: "related-videos-preview", onFocus: e, role: "grid", style: m.root }, l ? o.createElement(r.ZP, { icon: o.createElement(n.default, null), onPress: e, size: "xLarge", style: m.button, type: "primaryFilled" }) : null, o.createElement(t.Z, { content: d, flatListStyle: a, name: "related-videos-preview-grid", onSelectVideo: l ? c : void 0, width: 4 })) : null;
                });
        },
        479890: (e, a, d) => {
            d.d(a, { U: () => o });
            const o = "tv-search-bar";
        },
        721152: (e, a, d) => {
            d.d(a, { o: () => h });
            var o = d(202784),
                r = d(325686),
                l = d(731708),
                n = d(392237),
                s = d(111677),
                i = d.n(s),
                t = d(178519),
                c = d(673932),
                u = d(467537),
                D = d(479890);
            const m = i().a9ae1e78,
                h = ({ focusable: e, onEscapeOrBack: a, onPress: d, showValue: n, value: s }) =>
                    o.createElement(
                        r.Z,
                        { style: b.root },
                        o.createElement(u.C, { "aria-label": void 0, focusable: e, name: D.U, onEscapeOrBack: a, onPress: d, role: "link", style: b.searchBar, withBackgroundStyle: !0, withBorderStyle: !1 }, ({ hasFocus: e }) => o.createElement(o.Fragment, null, o.createElement(t.default, { style: [b.icon, b.animated, e && b.iconFocused] }), o.createElement(l.ZP, { color: e ? "white" : "gray700", size: "body", style: b.animated, weight: "bold" }, n ? s : m))),
                    ),
                b = n.default.create((e) => ({ root: { display: "grid", gridTemplateColumns: `minmax(${300 * e.scaleMultiplier}px, 1fr) 3fr`, padding: e.spaces.space2, backgroundColor: e.colors.cellBackground }, searchBar: { alignItems: "center", borderRadius: e.borderRadii.infinite, flexDirection: "row", height: e.spaces.space32, marginBottom: e.spaces.space8, marginTop: 3 * e.scaleMultiplier, paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space8, start: -e.spacesPx.space8, width: 300 * e.scaleMultiplier }, animated: { transitionProperty: "color", transitionDuration: `${c.$P}ms`, transitionTimingFunction: "ease" }, focused: { backgroundColor: e.colors.gray0 }, icon: { color: e.colors.gray700, height: e.spaces.space16, width: e.spaces.space16, marginEnd: e.spaces.space8 }, iconFocused: { color: e.colors.text } }));
        },
        674546: (e, a, d) => {
            d.d(a, { ZP: () => M });
            var o = d(807896),
                r = d(202784),
                l = d(325686),
                n = d(392237),
                s = d(731708),
                i = d(111677),
                t = d.n(i),
                c = d(837880),
                u = d(2138),
                D = d(530745),
                m = d(509423),
                h = d(686010);
            const b = t().ed170a6a;
            const M = function (e) {
                    const { formatLabel: a, min: d = 0, value: i = d, max: t, name: M, onArrowPress: p, step: w, fasterStep: P = w, fastestStep: f = w, onChange: A, onActive: k, withLabel: v, onMouseEnter: I, onMouseLeave: g, onMouseDown: T, ...C } = e,
                        [V, S] = r.useState(i),
                        E = r.useRef(),
                        R = V / t,
                        [B, Z] = r.useState(!1),
                        [x, N] = r.useState(!1),
                        O = r.useRef(0),
                        H = r.useRef(),
                        L = r.useRef(!1),
                        $ = r.useMemo(() => [y.progress, { flexGrow: R }], [R]),
                        _ = r.useCallback(
                            (e) => {
                                Z(!0), I && I(e);
                            },
                            [I],
                        ),
                        F = r.useCallback(
                            (e) => {
                                Z(!1), g && g(e);
                            },
                            [g],
                        ),
                        z = r.useCallback(
                            (e) => {
                                N(e), k && k(e);
                            },
                            [k],
                        ),
                        U = r.useCallback(() => {
                            x && ((O.current = 0), (H.current = void 0), z(!1));
                        }, [x, z]),
                        [K, X] = (0, m.K)(U, 1e3),
                        G = r.useCallback(() => {
                            X(), (L.current = !0), z(!0);
                        }, [X, z]),
                        j = r.useCallback(() => {
                            (L.current = !1), z(!1);
                        }, [z]),
                        W = r.useCallback(
                            (e) => {
                                S(e), A && A(e);
                            },
                            [A],
                        ),
                        Q = r.useCallback(
                            (e) => {
                                const { key: a } = e;
                                switch (a) {
                                    case D.QK:
                                    case D.Qs:
                                        x || z(!0),
                                            H.current === a ? (O.current += 1) : ((H.current = a), (O.current = 1)),
                                            W(
                                                (function (e, a, d, o, r) {
                                                    const l = "RIGHT" === d ? a : -a;
                                                    return (0, c.Z)(e + l, o, r);
                                                })(V, O.current <= 20 ? w : O.current <= 40 ? P : f, a === D.Qs ? "RIGHT" : "LEFT", d, t),
                                            ),
                                            K();
                                        break;
                                    case D.WX:
                                    case D.kl:
                                        U();
                                }
                                p && p(e);
                            },
                            [x, P, f, t, d, p, U, K, w, z, W, V],
                        ),
                        q = r.useCallback(
                            (e) => {
                                E.current &&
                                    W(
                                        (function (e, a, d, o, r) {
                                            const l = (e - a) / d;
                                            return o + (r - o) * (0, c.Z)(l, 0, 1);
                                        })(e, n.default.theme.spacesPx.space32, E.current.clientWidth, d, t),
                                    );
                            },
                            [W, d, t],
                        ),
                        Y = r.useCallback(
                            (e) => {
                                G(), q(e.clientX), T && T(e);
                            },
                            [G, T, q],
                        );
                    return (
                        r.useEffect(() => {
                            if (!E.current) return;
                            const e = (0, u.Z)((e) => {
                                L.current && !H.current && q(e.clientX);
                            }, 100);
                            return (
                                document.addEventListener("mousemove", e),
                                document.addEventListener("mouseup", j),
                                () => {
                                    document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", j);
                                }
                            );
                        }, [x, j, q]),
                        r.useEffect(() => {
                            const e = (0, u.Z)((e) => {
                                    L.current && q(e.touches?.[0].clientX);
                                }, 100),
                                a = (e) => {
                                    const a = E.current?.getBoundingClientRect?.(),
                                        d = e.touches?.[0].clientX,
                                        o = e.touches?.[0].clientY;
                                    d >= (a?.left || 0) && d <= (a?.right || 0) && o <= (a?.bottom || 0) && o >= (a?.top || 0) && G();
                                };
                            return (
                                document.addEventListener("touchstart", a),
                                document.addEventListener("touchend", j),
                                document.addEventListener("touchmove", e),
                                () => {
                                    document.removeEventListener("touchstart", a), document.removeEventListener("touchend", j), document.removeEventListener("touchmove", e);
                                }
                            );
                        }, [G, j, q]),
                        r.useEffect(() => {
                            x || S(i);
                        }, [x, i]),
                        r.createElement(h.Z, (0, o.Z)({}, C, { "aria-label": b, "aria-orientation": "horizontal", "aria-valuemax": t, "aria-valuemin": d, "aria-valuenow": V / 1e3, name: M, onArrowPress: Q, onMouseDown: Y, onMouseEnter: _, onMouseLeave: F, role: "slider" }), ({ hasFocus: e }) => r.createElement(l.Z, { ref: E, style: y.root }, (e || x) && v ? r.createElement(l.Z, { style: y.labelContainer }, r.createElement(l.Z, { style: { flexGrow: R } }), r.createElement(s.ZP, { color: "white", size: "headline2" }, a ? a(V) : V)) : null, r.createElement(l.Z, { style: y.line }, r.createElement(l.Z, { style: $ }, B || e || x ? r.createElement(l.Z, { style: y.circle }, r.createElement(l.Z, { style: y.outerCircle })) : null))))
                    );
                },
                y = n.default.create((e) => ({ root: { flexDirection: "column", height: 30 * e.scaleMultiplier, justifyContent: "flex-end", marginBottom: e.spaces.space4, writingDirection: "ltr" }, line: { alignItems: "center", backgroundColor: e.colors.gray700, borderRadius: e.borderRadii.small, flexDirection: "row", height: 6 * e.scaleMultiplier, width: "100%" }, progress: { backgroundColor: e.colors.white, borderRadius: e.borderRadii.small, height: "100%" }, circle: { alignItems: "center", backgroundColor: e.colors.brandColor, borderRadius: e.borderRadii.infinite, bottom: 0, cursor: "pointer", end: -e.spacesPx.space8, height: e.spaces.space16, justifyContent: "center", margin: "auto", position: "absolute", top: 0, width: e.spaces.space16, zIndex: 100 }, outerCircle: { backgroundColor: e.colors.brandColor, borderRadius: e.borderRadii.infinite, height: e.spaces.space28, opacity: 0.5, width: e.spaces.space28 }, labelContainer: { flexDirection: "row", marginBottom: e.spacesPx.space12 } }));
        },
        831489: (e, a, d) => {
            d.r(a), d.d(a, { default: () => i });
            var o = d(202784),
                r = d(890601),
                l = d(783427),
                n = d(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M11 13.67V22l12-10L11 2v8.33L1 2v20l10-8.33z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
        368761: (e, a, d) => {
            d.r(a), d.d(a, { default: () => i });
            var o = d(202784),
                r = d(890601),
                l = d(783427),
                n = d(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12.312 23.736c-.123 0-.246-.03-.358-.091-.241-.132-.392-.385-.392-.659v-.871c0-.414.336-.75.75-.75.256 0 .482.128.617.324 1.905-1.247 4.823-3.192 5.908-4.11 2.256-1.908 3.604-4.732 3.608-7.554 0-.414.336-.749.75-.749s.75.337.749.751c-.004 3.256-1.552 6.507-4.14 8.697-1.326 1.121-5.009 3.546-7.086 4.892-.124.08-.266.12-.408.12zm-2.557-1.897c1.697-1.082 6.672-4.317 8.048-5.48 1.902-1.609 3.04-3.976 3.043-6.329-.006-4.366-3.433-7.787-7.8-7.787l-4.149-.01c-4.375-.001-7.801 3.426-7.801 7.801 0 4.104 3.14 7.204 7.465 7.37.002 1.79.008 2.88.058 3.544-.041.101-.061.21-.055.322.009.178.081.344.198.471.111.241.283.241.552.241.163 0 .316-.053.441-.144zm3.289-18.097c3.529 0 6.298 2.763 6.302 6.287-.003 1.917-.941 3.855-2.512 5.184-1.03.871-4.478 3.16-6.771 4.645l-.002-3.175c0-.403-.319-.734-.722-.749l-.721-.027c-3.49-.135-6.022-2.604-6.022-5.872 0-3.534 2.768-6.302 6.299-6.302l4.149.01z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
        922449: (e, a, d) => {
            d.r(a), d.d(a, { default: () => i });
            var o = d(202784),
                r = d(890601),
                l = d(783427),
                n = d(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M5.996 10.06L6 19.907v-9.851zM6 20.332V21H2V8h1.5c.742 0 1.442.328 1.92.9.334.398.532.886.573 1.407L6 20.331zm15.78-8.051c.238-1.043-.009-2.121-.677-2.958-.67-.841-1.67-1.322-2.743-1.322H14.5l.614-3.684c.095-.578-.068-1.168-.448-1.615-.378-.445-.931-.701-1.516-.701-1.297 0-1.429.537-4.63 5.239C8.182 7.737 8 8.325 8 8.926v12.076h8.2c2.088 0 3.935-1.472 4.389-3.496l1.19-5.224z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TV-6107ac1a.c5adc57a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.inlineTombstoneHandler~loader.tweetHandler"],
    {
        975753: (e, t, o) => {
            o.d(t, { c: () => w, Z: () => _ });
            var n = o(202784),
                a = o(325686),
                i = o(392237),
                r = o(530732),
                d = o(992942),
                l = o(731708),
                s = o(154003),
                c = o(725516),
                u = o(332920),
                h = o.n(u),
                b = o(81777),
                p = o(930659);
            const m = { header: h().d231a76a, description: h().heaba5d8, legalDisclaimer: h().i57d3ea0, buttonText: h().a0440af6, image: { darkMode: b, lightMode: p } },
                w = Object.freeze({ MarchMadness: "MarchMadness" }),
                _ = ({ buttonOnSameLine: e, link: t, occasion: o, styleOverrides: u, withBackgroundImage: h }) => {
                    const b = (0, c.z)(),
                        p = w[o] || "Occasion",
                        _ = h ? `${p}WithBackgroundImage` : p;
                    n.useEffect(() => {
                        b.scribe({ component: _, action: "impression" });
                    }, [b, _]);
                    const C = () => {
                            b.scribe({ component: _, action: "click", element: "card" });
                        },
                        { backgroundcolor: A, buttonSize: S, cardWidth: g, marginbottom: f, textcolor: y } = u ?? {},
                        M = A ? i.default.theme.colors[A] : i.default.theme.colors.gray0,
                        v = y ? i.default.theme.colors[y] : i.default.theme.colors.gray900,
                        k = f ? i.default.theme.spaces[f] : i.default.theme.spaces.space16,
                        I = { [w.MarchMadness]: { header: m.header, description: m.description, legalDisclaimer: m.legalDisclaimer, buttonText: m.buttonText, image: m.image } }[o];
                    return h ? n.createElement(r.Z, { interactiveStyles: null, link: t, onPress: C, style: D.bannerContainer }, n.createElement(d.Z, { resizeMode: "contain", source: { uri: "light" === i.default.theme.paletteName ? I.image.lightMode : I.image.darkMode }, style: { height: 85 } })) : n.createElement(a.Z, { style: [D.card, { backgroundColor: M }, { maxWidth: g }, { marginBottom: k }], testID: "popupCard" }, n.createElement(a.Z, { style: e ? D.horizontalContent : D.verticalContent }, n.createElement(a.Z, { style: e ? D.textContainer : null }, n.createElement(l.ZP, { size: "headline2", style: [D.popupTitle, { alignSelf: "flex-start" }], weight: "bold" }, I.header), n.createElement(l.ZP, { size: "subtext1", style: [D.popupDescription, { color: v }] }, I.description, " ", e ? null : I.legalDisclaimer)), n.createElement(a.Z, { style: D.buttonContainer }, n.createElement(s.ZP, { backgroundColor: "light" === i.default.theme.paletteName ? "orange300" : "orange600", borderColor: "transparent", link: t, onClick: C, size: "medium", style: [D.popupButton, { width: S }] }, I.buttonText), e && n.createElement(l.ZP, { size: "subtext3", style: [D.legalDisclaimer, { color: v }] }, I.legalDisclaimer))));
                },
                D = i.default.create((e) => ({ card: { backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, alignItems: "center", maxWidth: 350, width: "100%" }, transparent: { backgroundColor: "transparent" }, popupTitle: { marginBottom: e.spaces.space8, textAlign: "start" }, popupDescription: { textAlign: "start", marginEnd: e.spaces.space12 }, legalDisclaimer: { position: "absolute", top: "60px", end: "50%", transform: "translateX(50%)", textAlign: "center", minWidth: 100, opacity: 0.7 }, popupButton: { width: "100%", borderRadius: e.spaces.space24, marginTop: e.spaces.space12, height: e.spaces.space40 }, buttonContainer: { position: "relative" }, horizontalContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: e.spaces.space8 }, verticalContent: { width: "100%" }, textContainer: { flex: 1 }, bannerContainer: { marginBottom: e.spaces.space16 } }));
        },
        789831: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(807896),
                a = o(202784),
                i = o(325686),
                r = o(392237),
                d = o(655352);
            const l = r.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                s = ({ children: e, component: t, fab: o, shouldRenderFab: r = !0, style: s, withoutBottomPadding: c, ...u }) => {
                    const h = t || i.Z,
                        b = r && !(0, d.ZP)();
                    return a.createElement(h, (0, n.Z)({}, u, { style: [b && !c && l.root, s] }), e, b ? o : null);
                };
        },
        387524: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(807896),
                a = o(202784),
                i = o(325686),
                r = o(292627),
                d = o(537392),
                l = o(392237),
                s = o(365023),
                c = o(392027),
                u = o(774654),
                h = o(725516),
                b = o(443781);
            const p = l.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${l.default.iPhoneOffsetBottom} - ${u.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                m = (e) => {
                    const { "aria-label": t, label: o, onPress: m, scribeComponent: w, ..._ } = e,
                        { loggedInUserId: D } = a.useContext(b.rC),
                        C = (0, h.z)(),
                        A = a.useCallback(
                            (e) => {
                                C.scribe({ component: w, action: "click" }), m && m(e);
                            },
                            [C, m, w],
                        ),
                        S = u.ZM.useCollapsibleNavBars(),
                        g = [...u.Ah({ elementPosition: "bottom" }), S && p.fabStaysAboveSafeArea];
                    return D
                        ? a.createElement(
                              r.Z.FloatingAction,
                              null,
                              a.createElement(d.ZP, null, ({ windowWidth: e }) => {
                                  const r = e > l.default.theme.breakpoints.large,
                                      d = e > l.default.theme.breakpoints.medium,
                                      u = e < l.default.theme.breakpoints.micro,
                                      h = [p.root, d && p.rootMedium, r && p.rootLarge],
                                      b = [p.fab, r && p.fabLarge, u && p.fabMicro, g];
                                  return a.createElement(
                                      i.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: h },
                                      a.createElement(s.Z, { id: "FloatingActionButtonBase" }, (e, d) => a.createElement(i.Z, (0, n.Z)({ ref: e() }, d({ style: b })), a.createElement(c.Z, (0, n.Z)({}, _, { "aria-label": t, label: r ? o : void 0, onPress: A, style: u && p.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, o) => {
            o.d(t, { Z: () => l });
            o(136728);
            var n = o(202784),
                a = o(387524),
                i = o(635510);
            const r = "/compose/post";
            class d extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: o } = this.props,
                                n = { pathname: r, state: (t && t()) || {} };
                            o.push(n);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: o, scribeComponent: d } = this.props;
                    return n.createElement(a.Z, { "aria-label": e, href: r, icon: t, label: o, onPress: this._handlePress, scribeComponent: d, testID: i.Z.tweet });
                }
            }
            const l = d;
        },
        635510: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        114054: (e, t, o) => {
            o.d(t, { Z9: () => Ne, ZP: () => He });
            var n = o(807896),
                a = (o(136728), o(202784)),
                i = o(325686),
                r = o(782261),
                d = o(341189),
                l = o(542908),
                s = o(108362),
                c = o(332920),
                u = o.n(c),
                h = o(912021),
                b = o(908478),
                p = o(803810),
                m = o(789831),
                w = o(933794),
                _ = o(808692),
                D = o(622200),
                C = o(459284),
                A = o(376293),
                S = o(655352),
                g = o(270130),
                f = o(663550),
                y = o(293115),
                M = o(395067),
                v = o(831757),
                k = o(942893),
                I = o(801501),
                T = o(214647),
                x = o(725516),
                P = o(500002),
                B = o(886404),
                E = o(443781),
                Z = o(194661),
                R = o(355883);
            const L = u().j0179e90,
                U = u().ee69d769({ verb: "" }),
                N = ({ getLocationState: e, history: t }) => a.createElement(R.Z, { "aria-label": L, getLocationState: e, history: t, icon: H, label: U, scribeComponent: "floating_compose_button" }),
                H = a.createElement(Z.default, null);
            var F = o(231214),
                O = o(177371),
                z = o(533128),
                W = o(523561),
                V = o(195560);
            const q = (0, W.Z)({
                loader: () =>
                    Promise.all([
                        o.e("icons.10"),
                        o.e("icons.1"),
                        o.e("icons.19"),
                        o.e("icons.0"),
                        o.e("icons.23"),
                        o.e("icons.8"),
                        o.e("modules.common-e907d115"),
                        o.e("modules.common-e019dbda"),
                        o.e("icons.7"),
                        o.e("icons.9"),
                        o.e("icons.15"),
                        o.e("modules.audio-6107ac1a"),
                        o.e("modules.audio-b953418a"),
                        o.e("modules.audio-7c51e6a7"),
                        o.e("modules.audio-04db59e9"),
                        o.e("modules.audio-76583d6c"),
                        o.e("modules.audio-b7a8a5fb"),
                        o.e("modules.audio-51f6e793"),
                        o.e("modules.audio-e019dbda"),
                        o.e("modules.audio-262c94d4"),
                        o.e("modules.audio-c6fe4ea4"),
                        o.e("icons.26"),
                        o.e("icons.27"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee359ff7"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1bce2d5d"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9e2532"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b73bd0e3"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e0a7c12b"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-627162af"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-286dfed9"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-162a9ab0"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-cbd8f64c"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f943ab46"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-91216611"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-10bcc2eb"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        o.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        o.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-012d0d8f"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-81ee9ca9"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        o.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-8d7085c2"),
                        o.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-53f39e22"),
                        o.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5"),
                        o.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~bundle"),
                        o.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-a25e0877"),
                        o.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-0a1983f3"),
                        o.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-49ce3a1b"),
                        o.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-a9a3eb61"),
                        o.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-0657330d"),
                        o.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-76dc24ae"),
                        o.e("shared~bundle.Compose~bundle.ConversationWithRelay~bundle.Conversation~bundle.RichTextCompose"),
                        o.e("shared~bundle.AccountVerification~bundle.SettingsProfile~loader.MediaPickerWithPreview~bundle.RichTextCompose"),
                        o.e("shared~bundle.TwitterArticles~bundle.Compose~bundle.RichTextCompose"),
                        o.e("shared~bundle.Compose~bundle.RichTextCompose-bc6ccf4c"),
                        o.e("shared~bundle.Compose~bundle.RichTextCompose-a2dee9c7"),
                        o.e("shared~bundle.Compose~bundle.RichTextCompose-42018f38"),
                        o.e("shared~bundle.Compose~bundle.RichTextCompose-07b0deba"),
                        o.e("shared~bundle.Compose~bundle.RichTextCompose-0fb8c86a"),
                        o.e("shared~bundle.Compose~bundle.RichTextCompose-e6266db0"),
                        o.e("bundle.RichTextCompose"),
                    ]).then(o.bind(o, 728455)),
                renderPlaceholder: (e, t) => a.createElement(V.Z, { hasError: e, onRetry: t }),
            });
            var K = o(352975),
                $ = o(383494),
                Q = o(966582),
                G = o(71620),
                j = o(870358),
                J = o(163889),
                X = o(988566),
                Y = o(668214),
                ee = o(481242),
                te = o(575652),
                oe = o(491963),
                ne = o(80890),
                ae = o(694180),
                ie = o(629196),
                re = o(390387),
                de = o(38562),
                le = o(131290),
                se = o(601576),
                ce = o(466380),
                ue = o(836255),
                he = o(919022);
            const be = (e, t) => (0, ne.MW)(e, t.tweetId),
                pe = (e, t) => t.tweetId,
                me = (e, t) => t.contextTweetId,
                we = (e, t) => {
                    const { promotedContent: o, tweetId: n } = t;
                    if (o && o.advertiser) return he.ZP.select(e, o.advertiser.id_str);
                    if (o && Q.Z.isPromoted(o)) {
                        const { advertiser_name: e } = o;
                        (0, J.ZP)("No advertiser info for non-URT promoted tweet", { extra: { advertiser_name: e, tweetId: n } });
                    }
                },
                _e = (e, t) => t.socialContext,
                De = (e, { socialContext: t }) => {
                    const o = t && t.topicContext;
                    return o ? ce.Z.select(e, o.topicId) : void 0;
                },
                Ce = (e, t) => {
                    const o = ue.Z.createHydratedTweetSelector(pe)(e, t);
                    return o?.community_id_str ? oe.ZP.select(e, o?.community_id_str) : void 0;
                },
                Ae = (e, t) => {
                    const o = ue.Z.createHydratedTweetSelector(pe)(e, t),
                        n = o?.quoted_status,
                        a = n?.community_id_str;
                    return a ? oe.ZP.select(e, a) : void 0;
                },
                Se = (e, t) => "PUSH" === t.history.action,
                ge = (0, Y.Z)()
                    .propsFromState(() => ({ articleDomains: te.cb, community: Ce, contextTweet: ue.Z.createHydratedTweetSelector(me), displaySensitiveMedia: de.f1, explicitSocialContext: _e, isActiveCreator: re.WM, isForwardNavigation: Se, isNsfwUser: de.EF, isPinned: be, viewerUser: he.ZP.selectViewerUser, promotedContentAdvertiser: we, quoteTweetCommunity: Ae, topic: De, tweet: ue.Z.createHydratedTweetSelector(pe), userCountry: re.GG, userLanguage: re.VT }))
                    .adjustStateProps(({ articleDomains: e, community: t, contextTweet: o, displaySensitiveMedia: n, explicitSocialContext: a, isActiveCreator: i, isForwardNavigation: r, isNsfwUser: d, isPinned: l, promotedContentAdvertiser: s, quoteTweetCommunity: c, topic: u, tweet: h, userCountry: b, userLanguage: p, viewerUser: m }) => {
                        const w = o ? (0, X.D$)(o, m?.id_str, t) : h ? (0, X.D$)(h, m?.id_str, t) : void 0,
                            _ = h?.card?.binding_values?.domain?.string_value,
                            D = (0, te.ex)(e, _),
                            C = h?.quoted_status,
                            A = C ? (0, X.D$)(C, m?.id_str, c) : void 0,
                            S = A && (0, X.rl)(A),
                            g = (0, j.uA)(t?.role),
                            f = a || w;
                        return { community: t, contextTweet: o, displaySensitiveMedia: n, isActiveCreator: i, isCardArticle: D, isForwardNavigation: r, isNsfwUser: d, isPinned: l, viewerUser: m, promotedContentAdvertiser: s, quoteTweetSocialContextProps: S, socialContext: f, socialContextColor: (0, j.J2)(t, f), topic: u, tweet: h, userCountry: b, userLanguage: p, withCommunityModerationAuthority: g };
                    })
                    .propsFromActions(() => ({ addToast: se.fz, block: he.ZP.block, createLocalApiErrorHandler: (0, G.zr)("TWEET_DETAIL_CONTAINER"), fetchCommunityIfNeeded: oe.ZP.fetchOneIfNeeded, fetchSettings: le.wv, fetchTopicIfNeeded: ce.Z.fetchOneIfNeeded, log: ae.cM, mute: ie.r, updateHeadsUp: ue.Z.updateHeadsUp, richScribeAction: ee.richScribeAction, setArticlesVisited: te.Ji, unblock: he.ZP.unblock, undoTopicNotInterested: ce.Z.undoNotInterested, unmute: he.ZP.unmute }));
            var fe = o(688715),
                ye = o(834324),
                Me = o(392237),
                ve = o(500040),
                ke = o(187669);
            const Ie = u().de21174c,
                Te = u().haebcf52,
                xe = u().i859a9d4,
                Pe = (0, fe.ju)("https://help.x.com/using-twitter/mentions-and-replies#mention-control"),
                Be = Me.default.create((e) => ({ callout: { marginVertical: e.spaces.space8, marginHorizontal: e.spaces.space16 } })),
                Ee = () => {
                    const e = (0, x.z)();
                    return (
                        (0, ke.q)(() => {
                            e.scribe({ element: "left_conversation_banner", action: "impression" });
                        }),
                        a.createElement(i.Z, { style: Be.callout }, a.createElement(ye.Z, { Icon: ve.default, action: { label: xe, link: Pe }, headline: Ie, text: Te, type: "primary" }))
                    );
                },
                Ze = u().f277e94a,
                Re = u().da59404c;
            class Le extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { displayReported: !1, enableKeyboardShortcuts: !1, replyPressToggle: !1, showBlockOrUnblockConfirmation: !1 }),
                        (this._shouldDisable = z.$y.bind(null, this.context.featureSwitches)),
                        (this._isArticleNudgeEnabled = this.context.featureSwitches.isTrue("responsive_web_article_nudge_enabled")),
                        (this._isCommunitiesEnabled = this.context.featureSwitches.isTrue("c9s_enabled")),
                        (this._muteAdUpsellEnabled = this.context.featureSwitches.isTrue("subscriptions_mute_ad_upsell_enabled")),
                        (this._hasPremiumPlus = this.context.userClaims.isVerifiedOrg() || this.context.userClaims.isVerifiedOrgAffiliate() || this.context.userClaims.hasSubscription("premium_plus")),
                        (this._isEditTweetConsumptionEnabled = () => this.context.featureSwitches.isTrue("responsive_web_edit_tweet_enabled") || this.context.featureSwitches.isTrue("subscriptions_feature_labs_1004")),
                        (this._getScribeData = (0, h.Z)((e, t, o) => {
                            const n = (function (e, t, o) {
                                return { ...(o || {}), items: k.Z.addTweetToItems(o?.items || [], e, t) };
                            })(e, t, o);
                            return (this._cachedScribeData && (0, b.Z)(n, this._cachedScribeData)) || (this._cachedScribeData = n), this._cachedScribeData;
                        })),
                        (this._renderConversationControlsTooltip = () => {
                            const { viewerUserId: e } = this.context,
                                { tweet: t } = this.props;
                            if (!t) return !1;
                            const o = r.Z.getOriginalTweet(t),
                                n = !!o.community_id_str,
                                a = o.user.id_str === e,
                                i = o.reply_count > 0;
                            return a && i && !o.in_reply_to_status_id_str && !n;
                        }),
                        (this._renderBlockOrUnblockConfirmationSheet = () => {
                            const { tweet: e } = this.props;
                            if (!e) return null;
                            const { user: t } = e;
                            return (0, A.ed)({ confirmation: (0, A.LI)(t, this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled")), onClose: this._handleBlockOrUnblockConfirmClose, handleConfirm: this._handleBlockOrUnblockUserConfirm });
                        }),
                        (this._fabReply = (0, h.Z)((e) => a.createElement(N, { getLocationState: this._getReplyLocationState, history: e }))),
                        (this._getInlineCalloutInfo = () => {
                            const { analytics: e, displaySensitiveMedia: t, isNsfwUser: o, tweet: n, userCountry: a, userLanguage: i } = this.props,
                                { featureSwitches: r, viewerUserId: d } = this.context;
                            if (n && (0, T.pG)({ displaySensitiveMedia: t, featureSwitches: r, isNsfwUser: o, viewerUserId: d, tweet: n, userCountry: a, userLanguage: i })) return (0, T.Mt)(n, e.contextualScribeNamespace, r);
                        }),
                        (this._handleReplyPress = () => {
                            this.setState({ replyPressToggle: !this.state.replyPressToggle });
                        }),
                        (this._getReplyLocationState = () => {
                            const { promotedContent: e, tweet: t } = this.props;
                            if (t) return { inReplyToStatusId: t.id_str, promotedContent: e };
                        }),
                        (this._handleModeratedIconClick = () => this._scribeAction({ element: "moderated_replies_icon", action: "click" })),
                        (this._handleModeratedIconShown = () => this._scribeAction({ element: "moderated_replies_icon", action: "impression" })),
                        (this._handleBirdwatchNotesIconClick = () => this._scribeAction({ element: "birdwatch_notes_icon", action: "click" })),
                        (this._handleBirdwatchNotesIconShown = () => this._scribeAction({ element: "birdwatch_notes_icon", action: "impression" })),
                        (this._handleFosnrAuthorAppealImpression = () => this._scribeAction({ element: "freedom_of_speech_author_pivot", action: "impression" })),
                        (this._handleFosnrAuthorAppealClick = () => this._scribeAction({ element: "freedom_of_speech_author_pivot", action: "click" })),
                        (this._handleFocus = () => {
                            this.setState({ enableKeyboardShortcuts: !0 });
                        }),
                        (this._handleBlur = () => {
                            this.setState({ enableKeyboardShortcuts: !1 });
                        }),
                        (this._handleShowReportedTweet = () => {
                            this.setState({ displayReported: !0 });
                        }),
                        (this._getShortcutKeyHandlers = () => {
                            const { onClick: e, shortcutKey: t } = this._getMuteOrUnmuteAction(),
                                { shortcutKey: o } = this._getBlockOrUnblockAction(),
                                { viewerUserId: n } = this.context,
                                { tweet: a } = this.props;
                            if (!a) return {};
                            const i = a.user.id_str === n;
                            return { ...(t && { [t]: e }), ...(o && !i && { [o]: this._handleBlockOrUnblockConfirmOpen }) };
                        }),
                        (this._handleBlockOrUnblockConfirmOpen = () => {
                            this.setState({ showBlockOrUnblockConfirmation: !0 });
                        }),
                        (this._handleBlockOrUnblockConfirmClose = () => {
                            this.setState({ showBlockOrUnblockConfirmation: !1 });
                        }),
                        (this._handleBlockOrUnblockUserConfirm = () => {
                            const { onClick: e } = this._getBlockOrUnblockAction();
                            this._handleBlockOrUnblockConfirmClose(), e && e();
                        }),
                        (this._getBlockOrUnblockAction = () => {
                            const { addToast: e, block: t, createLocalApiErrorHandler: o, promotedContent: n, tweet: a, unblock: i } = this.props;
                            if (!a) return {};
                            const { user: r } = a,
                                d = {
                                    addToast: e,
                                    createLocalApiErrorHandler: o,
                                    scribeAction: ({ element: e }) => {
                                        this._scribeAction({ element: e, action: "click" });
                                    },
                                };
                            return (0, K.Z)({ ...d, block: t, isSoftBlockEnabled: this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled"), unblock: i, user: r, promotedContent: n });
                        }),
                        (this._getMuteOrUnmuteAction = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, history: o, mute: n, promotedContent: a, tweet: i, unmute: r } = this.props;
                            if (!i) return {};
                            const { user: d } = i,
                                l = {
                                    addToast: e,
                                    createLocalApiErrorHandler: t,
                                    scribeAction: ({ element: e }) => {
                                        this._scribeAction({ element: e, action: "click" });
                                    },
                                };
                            return (0, $.Z)({ ...l, mute: n, unmute: r, user: d, promotedContent: a, history: o, muteAdUpsellEnabled: this._muteAdUpsellEnabled, hasPremiumPlus: this._hasPremiumPlus });
                        }),
                        (this._getRenderCurationActionMenu = (0, h.Z)(
                            (e, t, o, n, i, d, l, s, c, u, h, b, p, m, w, _, D, A) => () =>
                                !!b &&
                                a.createElement(C.Z, {
                                    feedbackItems: e,
                                    forwardPivotDisplayType: t,
                                    forwardPivotLandingUrl: o,
                                    isActiveCreator: i,
                                    isNsfwUser: d,
                                    isPinned: l,
                                    onDeleteTweet: () => {
                                        const { fromApp: e, usedFallback: t } = s.state || {},
                                            o = b && r.Z.getOriginalTweet(b).isEdited;
                                        e && !t && !o ? n.goBack() : n.push("/");
                                    },
                                    onMenuClick: c,
                                    onTweetDismiss: u,
                                    promotedContent: h,
                                    tweet: b,
                                    userCountry: D,
                                    userLanguage: A,
                                    withChangeConversationControls: p,
                                    withChangeConversationControlsTooltip: m,
                                    withCommunityModerationAuthority: _,
                                    withHideReply: w,
                                    withMuteConversation: !0,
                                    withViewHiddenReplies: !0,
                                }),
                        )),
                        (this._scribeAction = (e, t, o, n, a) => {
                            const { analytics: i, history: r, promotedContent: d, richScribeAction: l, tweet: s } = this.props,
                                c = r.location.state?.overflow,
                                u = i.contextualScribeNamespace,
                                { items: h = [] } = i.contextualScribeData || {},
                                b = a && s && s.quoted_status ? k.Z.getTweetItem(s, d, void 0, c, {}, !0) : s ? k.Z.getTweetItem(s, d, void 0, c, {}, !1) : void 0,
                                m = { items: k.Z.leftMergeScribeItems(b ? [b] : [], h), ...(0, p.Z)(o ? { click_tracking_embed_details: o } : null), ...t };
                            if (n && s)
                                if (a) {
                                    if (s.quoted_status && s.quoted_status.user) {
                                        const e = k.Z.getUserItem(s.quoted_status.user, d);
                                        m.items.push(e);
                                    }
                                } else {
                                    const e = k.Z.getUserItem(s.user, d);
                                    m.items.push(e);
                                }
                            l({ ...u, ...e }, m);
                        }),
                        (this._handleReplyContextClick = (e, t) => {
                            this._scribeAction({ element: "reply_context", action: "click" }, { event_value: t });
                        }),
                        (this._handlePromotedIndicatorClick = () => {
                            this._handleAsyncPromotedEvent(f.dx.FOOTER_PROFILE);
                        }),
                        (this._handleQuotedTweetMediaClick = () => {
                            this._scribeAction({ element: "platform_photo_card", action: "click" }, void 0, void 0, void 0, !0), this._handleAsyncPromotedEvent(f.dx.EMBEDDED_MEDIA);
                        }),
                        (this._handleQuoteTweetClick = () => {
                            const { addToast: e, tweet: t } = this.props;
                            if ((this._scribeAction({ element: "quoted_tweet", action: "click" }, void 0, void 0, void 0, !0), t)) {
                                const o = r.Z.getOriginalTweet(t);
                                o.quoted_status?.isStaleEdit && this._isEditTweetConsumptionEnabled() && e({ text: Re });
                            }
                        }),
                        (this._handleShowMoreClick = () => {
                            this._scribeAction({ element: "tweet", action: "expand_read_more_inline" });
                        }),
                        (this._handleMediaClick = () => {
                            this._scribeAction({ element: "platform_photo_card", action: "click" }), this._handleAsyncPromotedEvent(f.dx.EMBEDDED_MEDIA);
                        }),
                        (this._handleEntityClick = (e, t, o) => {
                            const n = f._4[t],
                                a = v.Z[t],
                                i = k.Z.getClickTrackingEmbedDetails(this.props.promotedContent, o);
                            if (n) {
                                const t = n === f.dx.URL_CLICK && e.currentTarget instanceof window.HTMLElement ? { url: e.currentTarget.href } : void 0;
                                this._handleAsyncPromotedEvent(n, t);
                            }
                            t === d.Z.URL && i && this._scribeAction({ action: l.bQ.CLICK_ID_EMBED }, void 0, i), t === d.Z.TIMESTAMP && this._scribeAction({ action: l.bQ.CLICK, element: "video_timestamp" }), a && this._scribeAction({ action: a }, void 0, void 0);
                        }),
                        (this._handlePromotedDisclaimerLearnMoreClick = (e) => () => {
                            this._scribeAction({ component: e, element: "learn_more", action: "click" });
                        }),
                        (this._handlePoliticalSponsorWebsiteClick = () => {
                            this._scribeAction({ component: "political_ad", element: "organization_website", action: "click" });
                        }),
                        (this._handleAnalyticsClick = () => {
                            this._scribeAction({ element: "analytics", action: "click" });
                        }),
                        (this._handleEngagementsClick = () => {
                            this._scribeAction({ element: "engagements", action: "click" });
                        }),
                        (this._handlePromoteButtonClick = () => {
                            this._scribeAction({ element: "promote", action: "click" });
                        }),
                        (this._handlePromoteAgainButtonClick = () => {
                            this._scribeAction({ element: "promote_again", action: "click" });
                        }),
                        (this._handleAvatarClick = () => {
                            const { tweet: e } = this.props;
                            this._scribeAction({ element: "avatar", action: "profile_click" }, { profile_id: `${e ? e.user.id : ""}` }, void 0, !0), this._handleAsyncPromotedEvent(f.dx.PROFILE_IMAGE_CLICK);
                        }),
                        (this._handleScreenNameClick = () => {
                            const { tweet: e } = this.props;
                            this._scribeAction({ element: "user", action: "profile_click" }, { profile_id: `${e ? e.user.id : ""}` }, void 0, !0), this._handleAsyncPromotedEvent(f.dx.SCREEN_NAME_CLICK);
                        }),
                        (this._handleQuotedTweetAvatarClick = () => {
                            const { tweet: e } = this.props;
                            this._scribeAction({ element: "avatar", action: "profile_click" }, { profile_id: `${e ? e.user.id : ""}` }, void 0, !0), this._handleAsyncPromotedEvent(f.dx.PROFILE_IMAGE_CLICK);
                        }),
                        (this._handleQuotedTweetScreenNameClick = () => {
                            const { tweet: e } = this.props;
                            this._scribeAction({ element: "user", action: "profile_click" }, { profile_id: `${e ? e.user.id : ""}` }, void 0, !0), this._handleAsyncPromotedEvent(f.dx.SCREEN_NAME_CLICK);
                        }),
                        (this._handleCaretClick = () => {
                            this._scribeAction({ element: "caret", action: "click" });
                        }),
                        (this._handleCommunityFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchCommunityIfNeeded: t, tweet: o } = this.props;
                            if (o && this._isCommunitiesEnabled) {
                                const n = o.community_id_str,
                                    a = o.quoted_status?.community_id_str;
                                n && t(n).catch(e()), a && t(a).catch(e());
                            }
                        }),
                        (this._handleTopicFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchTopicIfNeeded: t, socialContext: o } = this.props,
                                n = o?.topicContext?.topicId;
                            n && t(n).catch(e());
                        }),
                        (this._handleUndoTopicNotInterested = () => {
                            const { createLocalApiErrorHandler: e, topic: t, undoTopicNotInterested: o } = this.props;
                            this._scribeAction({ element: "topic", action: "un_not_interested" }), t && o(t.id).catch(e());
                        }),
                        (this._handleUserFollowIndicator = () => {
                            this._scribeAction({ component: "super_follower_educaton", element: "indicator", action: "click" });
                        }),
                        (this._handleUserFollowIndicatorDismiss = () => {
                            this._scribeAction({ component: "super_follower_education", action: "dismiss" });
                        }),
                        (this._handleUserFollowIndicatorLearnMoreClick = () => {
                            this._scribeAction({ component: "super_follower_education", element: "learn_more", action: "click" });
                        }),
                        (this._handleCardLinkClick = () => {
                            const { analytics: e, isCardArticle: t, setArticlesVisited: o, tweet: n } = this.props;
                            (0, g.f)({ analytics: e, isArticleNudgeEnabled: this._isArticleNudgeEnabled, isCardArticle: t, setArticlesVisited: o, tweet: n });
                        }),
                        (this._handleLatestEditLinkClick = () => this._scribeAction({ action: "view_edit_history" })),
                        (this._handleStaleEditLinkClick = () => this._scribeAction({ action: "view_latest_tweet" })),
                        (this._handleMediaHashtagHighlightClick = () => {
                            this._handleAsyncPromotedEvent(f.dx.HASHTAG_CLICK);
                        }),
                        (this._handleFetchUserSettings = () => {
                            this.props.fetchSettings().catch(this.props.createLocalApiErrorHandler());
                        }),
                        (this._handleReplyFilterInlineCalloutImpression = () => {
                            this._scribeAction({ element: "callout_reply_filter_on", action: "show" });
                        });
                }
                componentDidMount() {
                    this._handleTopicFetch(),
                        this._handleCommunityFetch(),
                        (this._fetchUserSettingsTimer = new I.Z(18e5).interval(() => {
                            this._handleFetchUserSettings();
                        })),
                        this._fetchUserSettingsTimer.start();
                    if (Boolean(this.props.tweet?.note_tweet?.text)) {
                        const e = { element: "note_tweet", action: "impression" },
                            t = { tweet_note_id: this.props.tweet?.note_tweet?.id };
                        this._scribeAction(e, t);
                    }
                }
                componentDidUpdate(e) {
                    if (this.props.tweet && e.tweet && !e.tweet.user.blocking && this.props.tweet.user.blocking) {
                        const { history: e } = this.props;
                        e.goBack({ backLocation: "/" });
                    }
                }
                componentWillUnmount() {
                    this._fetchUserSettingsTimer && this._fetchUserSettingsTimer.stop();
                }
                render() {
                    const { viewerUserId: e } = this.context,
                        { tweet: t } = this.props;
                    if (!t) return null;
                    const o = t.user.id_str === e,
                        n = (0, D.j)(t.withheld_scope),
                        r = (0, M.G$)(t) && !this.state.displayReported;
                    return a.createElement(a.Fragment, null, n ? a.createElement(i.Z, null, this._renderWithheldTweet(), o ? this._renderTweetComponent() : null) : r ? this._renderReportedTombstone() : this._renderTweetComponent(), this._renderIntentPrompt(), this.state.showBlockOrUnblockConfirmation && !o ? this._renderBlockOrUnblockConfirmationSheet() : null);
                }
                _renderIntentPrompt() {
                    const { forwardPivotInfo: e, history: t, nudges: o, tweet: n } = this.props;
                    if (n && t.location.pathname.indexOf("/intent/") > -1) return a.createElement(F.Z, { forwardPivotInfo: e, history: t, location: t.location, nudges: o, tweetId: n.id_str });
                }
                _renderTweetComponent() {
                    const { analytics: e, contextTweet: t, feedbackItems: o, forwardPivotInfo: i, hasModeratedReplies: d, history: l, innerForwardPivotInfo: s, innerNudges: c, isActiveCreator: u, isNsfwUser: h, isPinned: b, location: p, nudges: m, onTweetDismiss: D, promotedContent: C, promotedContentAdvertiser: A, quoteTweetSocialContextProps: S, quotedTweetTombstoneInfo: g, readerModeAvailable: f, replyBadge: M, replyContext: v, rootTweetAuthorId: k, showReplyFilterInlineCallout: I, socialContext: T, socialContextColor: x, topic: P, topicFollowPrompt: B, tweet: E, userCountry: Z, userLanguage: R, viewerUser: L, withActions: U, withCommunityModerationAuthority: N, withHideReply: H, withInlineMedia: F, withSocialContext: O } = this.props;
                    if (!E) return null;
                    const { viewerUserId: z } = this.context,
                        { enableKeyboardShortcuts: W } = this.state,
                        V = r.Z.getOriginalTweet(E),
                        q = { contextTweet: t, enableKeyboardShortcuts: W, forwardPivotInfo: i, hasModeratedReplies: d, handleReplyFilterInlineCalloutImpression: this._handleReplyFilterInlineCalloutImpression, showReplyFilterInlineCallout: I, innerForwardPivotInfo: s, viewerUser: L, promotedContent: C, promotedContentAdvertiser: A, quotedTweetTombstoneInfo: g, quoteTweetSocialContextProps: S, readerModeAvailable: f, socialContext: T, socialContextColor: x, topic: P, topicFollowPrompt: B, tweet: E, replyBadge: M, replyContext: v, rootTweetAuthorId: k, withActions: U, withAltTextBadge: !0, withInlineMedia: F, withSocialContext: O, nudges: m, innerNudges: c },
                        K = V.user.id_str === z,
                        $ = !V.in_reply_to_status_id_str && K && !V.community_id_str,
                        Q = this._renderConversationControlsTooltip();
                    return a.createElement(
                        y.nO,
                        { data: this._getScribeData(E.retweeted_status || E, C, e.contextualScribeData) },
                        a.createElement(
                            w.Z,
                            { enabled: !!W, handlers: this._getShortcutKeyHandlers() },
                            this._renderLeftConversationBanner(),
                            a.createElement(
                                _.ZP,
                                (0, n.Z)({}, q, {
                                    allowBookmarkInActionsBar: !0,
                                    inlineCalloutInfo: this._getInlineCalloutInfo(),
                                    isFocal: !0,
                                    onAnalyticsClick: this._handleAnalyticsClick,
                                    onAvatarClick: this._handleAvatarClick,
                                    onBirdwatchNotesIconClick: this._handleBirdwatchNotesIconClick,
                                    onBirdwatchNotesIconShown: this._handleBirdwatchNotesIconShown,
                                    onBlur: this._handleBlur,
                                    onCardLinkClick: this._handleCardLinkClick,
                                    onEngagementsClick: this._handleEngagementsClick,
                                    onEntityClick: this._handleEntityClick,
                                    onFocus: this._handleFocus,
                                    onFosnrAuthorAppealClick: this._handleFosnrAuthorAppealClick,
                                    onFosnrAuthorLabelImpression: this._handleFosnrAuthorAppealImpression,
                                    onLatestEditLinkClick: this._handleLatestEditLinkClick,
                                    onMediaClick: this._handleMediaClick,
                                    onMediaHashtagHighlightClick: this._handleMediaHashtagHighlightClick,
                                    onModeratedIconClick: this._handleModeratedIconClick,
                                    onModeratedIconShown: this._handleModeratedIconShown,
                                    onPoliticalSponsorWebsiteClick: this._handlePoliticalSponsorWebsiteClick,
                                    onPromoteAgainButtonClick: this._handlePromoteAgainButtonClick,
                                    onPromoteButtonClick: this._handlePromoteButtonClick,
                                    onPromotedDisclaimerLearnMoreClick: this._handlePromotedDisclaimerLearnMoreClick,
                                    onPromotedIndicatorClick: this._handlePromotedIndicatorClick,
                                    onQuoteTweetClick: this._handleQuoteTweetClick,
                                    onQuoteTweetMediaClick: this._handleQuotedTweetMediaClick,
                                    onReplyContextClick: this._handleReplyContextClick,
                                    onReplyPress: this._handleReplyPress,
                                    onScreenNameClick: this._handleScreenNameClick,
                                    onShowMoreClick: this._handleShowMoreClick,
                                    onStaleEditLinkClick: this._handleStaleEditLinkClick,
                                    onUndoTopicNotInterestedClick: this._handleUndoTopicNotInterested,
                                    onUserFollowIndicatorClick: this._handleUserFollowIndicator,
                                    onUserFollowIndicatorDismissClick: this._handleUserFollowIndicatorDismiss,
                                    onUserFollowIndicatorLearnMoreClick: this._handleUserFollowIndicatorLearnMoreClick,
                                    renderCurationActionMenu: this._getRenderCurationActionMenu(o, i?.displayType, i?.landingUrl, l, u, h, b, p, this._handleCaretClick, D, C, r.Z.getOriginalTweet(E), $, Q, H, N, Z, R),
                                }),
                            ),
                            this._renderInlineReply(),
                        ),
                    );
                }
                _renderLeftConversationBanner() {
                    const { tweet: e } = this.props,
                        { viewerUserId: t } = this.context,
                        o = e?.unmentioned_user_ids?.includes(t);
                    return o ? a.createElement(Ee, null) : null;
                }
                _renderInlineReply() {
                    const { history: e, location: t, tweet: o, tweetId: n } = this.props,
                        { replyPressToggle: i } = this.state,
                        { viewerUserId: r } = this.context;
                    if (!o) return null;
                    return r && !this._shouldDisable(o, z.d.Reply) ? a.createElement(B.c_, null, (0, S.ZP)() ? a.createElement(q, { history: e, location: t, parentTweetId: n, replyPressToggle: i }) : a.createElement(m.Z, { container: s.Z, fab: this._fabReply(e), withoutBottomPadding: !0 })) : null;
                }
                _renderWithheldTweet() {
                    const { tweet: e } = this.props;
                    return !!e && a.createElement(D.Z, { displayTextRange: e.display_text_range, entities: e.withheld_entities || e.entities, lang: e.lang, text: e.withheld_text || e.text });
                }
                _renderReportedTombstone() {
                    const { tweet: e } = this.props;
                    if (e) {
                        const t = r.Z.getOriginalTweet(e),
                            o = (0, M.jD)(t.reportingVisibility);
                        return a.createElement(O.Z, { actionText: Ze, lang: e.lang, onClick: this._handleShowReportedTweet }, o);
                    }
                }
                _handleAsyncPromotedEvent(e, t) {
                    const { createLocalApiErrorHandler: o, log: n, promotedContent: a, tweet: i } = this.props;
                    if (i && a) {
                        const { disclosure_type: r, impression_id: d } = a;
                        n({ disclosureType: r, itemId: i.id_str, itemType: "tweet", params: { event: e, impression_id: d, ...t } }).catch(o());
                    }
                }
            }
            Le.contextType = E.rC;
            const Ue = (0, P.ZP)(ge(Le)),
                Ne = (0, x.Z)(Ue),
                He = (0, x.Z)(Ue, { component: "tweet" });
        },
        886404: (e, t, o) => {
            o.d(t, { c_: () => l, lm: () => s, n6: () => d });
            var n = o(202784),
                a = o(321835);
            const i = { isShowHeaderReplyButton: !1, onInlineReplyOffScreen: () => {} },
                r = n.createContext(i);
            function d({ children: e }) {
                const [t, o] = n.useState(!1),
                    a = n.useCallback((e) => {
                        o(e);
                    }, []);
                return n.createElement(r.Provider, { value: { isShowHeaderReplyButton: t, onInlineReplyOffScreen: a } }, e);
            }
            function l({ children: e }) {
                const [t, o] = n.useState(!1),
                    { onInlineReplyOffScreen: i } = n.useContext(r),
                    d = n.useCallback(
                        ({ isOffscreen: e }) => {
                            t && e && i(e);
                        },
                        [t, i],
                    );
                return n.createElement(a.Z, { onImpression: () => o(!0), onOffscreenChange: d, testID: "inline_reply_offscreen" }, e);
            }
            function s({ children: e }) {
                const { isShowHeaderReplyButton: t } = n.useContext(r);
                return t ? e : null;
            }
        },
        661810: (e, t, o) => {
            o.d(t, { Z: () => r });
            var n = o(202784),
                a = o(325686),
                i = o(392237);
            function r({ spacing: e, style: t }) {
                return n.createElement(a.Z, { role: "separator", style: [d.divider, { marginVertical: null != e ? i.default.theme.spaces[e] : void 0 }, t] });
            }
            const d = i.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        392027: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                a = o(154003),
                i = o(392237);
            class r extends n.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: o, disabled: i, href: r, icon: l, label: s, onPress: c, renderMenu: u, style: h, testID: b } = this.props,
                        p = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, o);
                    return n.createElement(a.ZP, { "aria-label": e, backgroundColor: t, color: p, disabled: i, icon: l, link: r, onPress: c, renderMenu: u, size: "xLarge", style: [d.root, !s && d.iconOnly, h], testID: b }, s);
                }
            }
            r.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const d = i.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                l = r;
        },
        818088: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var n = o(202784),
                a = o(890601),
                i = o(783427),
                r = o(347101);
            const d = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            d.metadata = { width: 24, height: 24 };
            const l = d;
        },
        518532: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var n = o(202784),
                a = o(890601),
                i = o(783427),
                r = o(347101);
            const d = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 74 24", children: n.createElement("g", null, n.createElement("path", { d: "M9.827 17.667c-4.82 0-8.873-3.927-8.873-8.747S5.007.173 9.827.173c2.667 0 4.567 1.047 5.993 2.413l-1.687 1.687c-1.027-.96-2.413-1.707-4.307-1.707-3.52 0-6.273 2.84-6.273 6.36s2.753 6.36 6.273 6.36c2.28 0 3.587-.92 4.413-1.747.68-.68 1.132-1.668 1.3-3.008H10v-2.4h7.873c.087.428.127.935.127 1.495 0 1.793-.493 4.013-2.067 5.587-1.54 1.6-3.5 2.453-6.106 2.453zm20.806-5.627c0 3.24-2.533 5.633-5.633 5.633-3.107 0-5.633-2.387-5.633-5.633 0-3.267 2.527-5.633 5.633-5.633 3.1.006 5.633 2.373 5.633 5.633zm-2.466 0c0-2.027-1.467-3.413-3.167-3.413-1.7 0-3.167 1.387-3.167 3.413 0 2.007 1.467 3.413 3.167 3.413 1.7 0 3.167-1.406 3.167-3.413zm15.133-.007c0 3.24-2.527 5.633-5.633 5.633s-5.633-2.387-5.633-5.633c0-3.267 2.527-5.633 5.633-5.633S43.3 8.773 43.3 12.033zm-2.467 0c0-2.027-1.467-3.413-3.167-3.413S34.5 10.007 34.5 12.033c0 2.007 1.467 3.413 3.167 3.413s3.166-1.406 3.166-3.413zm14.5-5.286V16.86c0 4.16-2.453 5.867-5.353 5.867-2.733 0-4.373-1.833-4.993-3.327l2.153-.893c.387.92 1.32 2.007 2.84 2.007 1.853 0 3.007-1.153 3.007-3.307v-.813H52.9c-.553.68-1.62 1.28-2.967 1.28-2.813 0-5.267-2.453-5.267-5.613 0-3.18 2.453-5.652 5.267-5.652 1.347 0 2.413.6 2.967 1.26h.087v-.92h2.346zm-2.173 5.306c0-1.987-1.32-3.433-3.007-3.433-1.707 0-3.007 1.453-3.007 3.433 0 1.96 1.3 3.393 3.007 3.393 1.68 0 3.007-1.426 3.007-3.393zM59.807.78v16.553h-2.473V.78h2.473zm9.886 13.113l1.92 1.28c-.62.92-2.113 2.493-4.693 2.493-3.2 0-5.587-2.473-5.587-5.633 0-3.347 2.413-5.633 5.313-5.633 2.92 0 4.353 2.327 4.82 3.587l.253.64-7.534 3.113c.573 1.133 1.473 1.707 2.733 1.707s2.133-.62 2.773-1.554zm-5.906-2.026l5.033-2.093c-.28-.707-1.107-1.193-2.093-1.193-1.254 0-3.007 1.107-2.94 3.287z" })) }, { writingDirection: t });
            };
            d.metadata = { width: 74, height: 24 };
            const l = d;
        },
        89085: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var n = o(202784),
                a = o(890601),
                i = o(783427),
                r = o(347101);
            const d = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
            };
            d.metadata = { width: 24, height: 24 };
            const l = d;
        },
        226597: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var n = o(202784),
                a = o(890601),
                i = o(783427),
                r = o(347101);
            const d = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            d.metadata = { width: 24, height: 24 };
            const l = d;
        },
        258292: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var n = o(202784),
                a = o(890601),
                i = o(783427),
                r = o(347101);
            const d = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: t });
            };
            d.metadata = { width: 24, height: 24 };
            const l = d;
        },
        662678: (e, t, o) => {
            o.d(t, { G: () => a, Z: () => n });
            o(136728);
            const n = function (e, t) {
                return a(e, t);
            };
            function a(e, t) {
                return e.reduce(
                    (o, n, a) => {
                        const i = t ? t(n, a, e) : !!n;
                        return i && o[0].push(n), !i && o[1].push(n), o;
                    },
                    [[], []],
                );
            }
        },
        730895: (e, t, o) => {
            var n = o(821176);
            e.exports = function () {
                var e = n(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
        81777: (e, t, o) => {
            e.exports = o.p + "MarchMadnessBannerDark.42aa2dea.png";
        },
        930659: (e, t, o) => {
            e.exports = o.p + "MarchMadnessBannerLight.02bf82ca.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.inlineTombstoneHandler~loader.tweetHandler.96d17ffa.js.map

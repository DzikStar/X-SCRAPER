"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.inlineTombstoneHandler~loader.tweetHandler"],
    {
        169576: (e, t, o) => {
            o.d(t, { c: () => _, Z: () => w });
            var n = o(202784),
                i = o(325686),
                r = o(392237),
                a = o(530732),
                s = o(992942),
                d = o(731708),
                l = o(154003),
                c = o(725516),
                h = o(111677),
                u = o.n(h);
            const p = o.p + "MarchMadnessBannerDark.42aa2dea.png",
                m = o.p + "MarchMadnessBannerLight.02bf82ca.png",
                b = { header: u().d231a76a, description: u().heaba5d8, legalDisclaimer: u().i57d3ea0, buttonText: u().a0440af6, image: { darkMode: p, lightMode: m } },
                _ = Object.freeze({ MarchMadness: "MarchMadness" }),
                w = ({ buttonOnSameLine: e, link: t, occasion: o, styleOverrides: h, withBackgroundImage: u }) => {
                    const p = (0, c.z)(),
                        m = _[o] || "Occasion",
                        w = u ? `${m}WithBackgroundImage` : m;
                    n.useEffect(() => {
                        p.scribe({ component: w, action: "impression" });
                    }, [p, w]);
                    const D = () => {
                            p.scribe({ component: w, action: "click", element: "card" });
                        },
                        { backgroundcolor: f, buttonSize: g, cardWidth: M, marginbottom: k, textcolor: A } = h ?? {},
                        y = f ? r.default.theme.colors[f] : r.default.theme.colors.gray0,
                        I = A ? r.default.theme.colors[A] : r.default.theme.colors.gray900,
                        T = k ? r.default.theme.spaces[k] : r.default.theme.spaces.space16,
                        v = { [_.MarchMadness]: { header: b.header, description: b.description, legalDisclaimer: b.legalDisclaimer, buttonText: b.buttonText, image: b.image } }[o];
                    return u ? n.createElement(a.Z, { interactiveStyles: null, link: t, onPress: D, style: C.bannerContainer }, n.createElement(s.Z, { resizeMode: "contain", source: { uri: "light" === r.default.theme.paletteName ? v.image.lightMode : v.image.darkMode }, style: { height: 85 } })) : n.createElement(i.Z, { style: [C.card, { backgroundColor: y }, { maxWidth: M }, { marginBottom: T }], testID: "popupCard" }, n.createElement(i.Z, { style: e ? C.horizontalContent : C.verticalContent }, n.createElement(i.Z, { style: e ? C.textContainer : null }, n.createElement(d.ZP, { size: "headline2", style: [C.popupTitle, { alignSelf: "flex-start" }], weight: "bold" }, v.header), n.createElement(d.ZP, { size: "subtext1", style: [C.popupDescription, { color: I }] }, v.description, " ", e ? null : v.legalDisclaimer)), n.createElement(i.Z, { style: C.buttonContainer }, n.createElement(l.ZP, { backgroundColor: "light" === r.default.theme.paletteName ? "orange300" : "orange600", borderColor: "transparent", link: t, onClick: D, size: "medium", style: [C.popupButton, { width: g }] }, v.buttonText), e && n.createElement(d.ZP, { size: "subtext3", style: [C.legalDisclaimer, { color: I }] }, v.legalDisclaimer))));
                },
                C = r.default.create((e) => ({ card: { backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, alignItems: "center", maxWidth: 350, width: "100%" }, transparent: { backgroundColor: "transparent" }, popupTitle: { marginBottom: e.spaces.space8, textAlign: "start" }, popupDescription: { textAlign: "start", marginEnd: e.spaces.space12 }, legalDisclaimer: { position: "absolute", top: "60px", end: "50%", transform: "translateX(50%)", textAlign: "center", minWidth: 100, opacity: 0.7 }, popupButton: { width: "100%", borderRadius: e.spaces.space24, marginTop: e.spaces.space12, height: e.spaces.space40 }, buttonContainer: { position: "relative" }, horizontalContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: e.spaces.space8 }, verticalContent: { width: "100%" }, textContainer: { flex: 1 }, bannerContainer: { marginBottom: e.spaces.space16 } }));
        },
        789831: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(807896),
                i = o(202784),
                r = o(325686),
                a = o(392237),
                s = o(655352);
            const d = a.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                l = ({ children: e, component: t, fab: o, shouldRenderFab: a = !0, style: l, withoutBottomPadding: c, ...h }) => {
                    const u = t || r.Z,
                        p = a && !(0, s.ZP)();
                    return i.createElement(u, (0, n.Z)({}, h, { style: [p && !c && d.root, l] }), e, p ? o : null);
                };
        },
        387524: (e, t, o) => {
            o.d(t, { Z: () => b });
            var n = o(807896),
                i = o(202784),
                r = o(325686),
                a = o(292627),
                s = o(537392),
                d = o(392237),
                l = o(365023),
                c = o(392027),
                h = o(774654),
                u = o(725516),
                p = o(443781);
            const m = d.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${d.default.iPhoneOffsetBottom} - ${h.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                b = (e) => {
                    const { "aria-label": t, label: o, onPress: b, scribeComponent: _, ...w } = e,
                        { loggedInUserId: C } = i.useContext(p.rC),
                        D = (0, u.z)(),
                        f = i.useCallback(
                            (e) => {
                                D.scribe({ component: _, action: "click" }), b && b(e);
                            },
                            [D, b, _],
                        ),
                        g = h.ZM.useCollapsibleNavBars(),
                        M = [...h.Ah({ elementPosition: "bottom" }), g && m.fabStaysAboveSafeArea];
                    return C
                        ? i.createElement(
                              a.Z.FloatingAction,
                              null,
                              i.createElement(s.ZP, null, ({ windowWidth: e }) => {
                                  const a = e > d.default.theme.breakpoints.large,
                                      s = e > d.default.theme.breakpoints.medium,
                                      h = e < d.default.theme.breakpoints.micro,
                                      u = [m.root, s && m.rootMedium, a && m.rootLarge],
                                      p = [m.fab, a && m.fabLarge, h && m.fabMicro, M];
                                  return i.createElement(
                                      r.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: u },
                                      i.createElement(l.Z, { id: "FloatingActionButtonBase" }, (e, s) => i.createElement(r.Z, (0, n.Z)({ ref: e() }, s({ style: p })), i.createElement(c.Z, (0, n.Z)({}, w, { "aria-label": t, label: a ? o : void 0, onPress: f, style: h && m.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, o) => {
            o.d(t, { Z: () => d });
            o(136728);
            var n = o(202784),
                i = o(387524),
                r = o(635510);
            const a = "/compose/post";
            class s extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: o } = this.props,
                                n = { pathname: a, state: (t && t()) || {} };
                            o.push(n);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: o, scribeComponent: s } = this.props;
                    return n.createElement(i.Z, { "aria-label": e, href: a, icon: t, label: o, onPress: this._handlePress, scribeComponent: s, testID: r.Z.tweet });
                }
            }
            const d = s;
        },
        635510: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        114054: (e, t, o) => {
            o.d(t, { Z9: () => Oe, ZP: () => He });
            var n = o(807896),
                i = (o(136728), o(202784)),
                r = o(325686),
                a = o(782261),
                s = o(341189),
                d = o(542908),
                l = o(108362),
                c = o(111677),
                h = o.n(c),
                u = o(912021),
                p = o(908478),
                m = o(803810),
                b = o(789831),
                _ = o(933794),
                w = o(808692),
                C = o(622200),
                D = o(459284),
                f = o(376293),
                g = o(655352),
                M = o(270130),
                k = o(663550),
                A = o(293115),
                y = o(395067),
                I = o(831757),
                T = o(942893),
                v = o(801501),
                S = o(214647),
                x = o(725516),
                P = o(500002),
                E = o(886404),
                Z = o(443781),
                R = o(194661),
                B = o(355883);
            const U = h().j0179e90,
                L = h().ee69d769({ verb: "" }),
                N = ({ getLocationState: e, history: t }) => i.createElement(B.Z, { "aria-label": U, getLocationState: e, history: t, icon: F, label: L, scribeComponent: "floating_compose_button" }),
                F = i.createElement(R.default, null);
            var O = o(231214),
                H = o(177371),
                W = o(533128),
                z = o(523561),
                q = o(195560);
            const K = (0, z.Z)({
                loader: () =>
                    Promise.all([
                        o.e("icons.23"),
                        o.e("icons.0"),
                        o.e("icons.2"),
                        o.e("icons.16"),
                        o.e("icons.19"),
                        o.e("icons.10"),
                        o.e("icons.13"),
                        o.e("icons.24"),
                        o.e("icons.7"),
                        o.e("icons.22"),
                        o.e("icons.27"),
                        o.e("icons.17"),
                        o.e("modules.common-e907d115"),
                        o.e("modules.common-e019dbda"),
                        o.e("icons.11"),
                        o.e("icons.26"),
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
                        o.e("icons.8"),
                        o.e("icons.4"),
                        o.e("icons.14"),
                        o.e("icons.28"),
                        o.e("icons.21"),
                        o.e("icons.3"),
                        o.e("icons.1"),
                        o.e("icons.18"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f75f2a40"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-9b450461"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-abff603b"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-cdbf42c1"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-c94903fb"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-7cff528b"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        o.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
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
                        o.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-7b8626db"),
                        o.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-76dc24ae"),
                        o.e("shared~bundle.Compose~bundle.ConversationWithRelay~bundle.Conversation~bundle.RichTextCompose"),
                        o.e("shared~bundle.TwitterArticles~bundle.Compose~bundle.RichTextCompose"),
                        o.e("shared~bundle.Compose~bundle.RichTextCompose-bc6ccf4c"),
                        o.e("shared~bundle.Compose~bundle.RichTextCompose-a2dee9c7"),
                        o.e("shared~bundle.Compose~bundle.RichTextCompose-42018f38"),
                        o.e("shared~bundle.Compose~bundle.RichTextCompose-07b0deba"),
                        o.e("shared~bundle.Compose~bundle.RichTextCompose-0fb8c86a"),
                        o.e("shared~bundle.Compose~bundle.RichTextCompose-e6266db0"),
                        o.e("bundle.RichTextCompose"),
                    ]).then(o.bind(o, 728455)),
                renderPlaceholder: (e, t) => i.createElement(q.Z, { hasError: e, onRetry: t }),
            });
            var $ = o(352975),
                Q = o(383494),
                V = o(966582),
                G = o(71620),
                j = o(870358),
                J = o(163889),
                X = o(988566),
                Y = o(668214),
                ee = o(481242),
                te = o(575652),
                oe = o(491963),
                ne = o(80890),
                ie = o(694180),
                re = o(629196),
                ae = o(390387),
                se = o(38562),
                de = o(131290),
                le = o(601576),
                ce = o(466380),
                he = o(251441),
                ue = o(836255),
                pe = o(919022);
            const me = (e, t) => (0, ne.MW)(e, t.tweetId),
                be = (e, t) => t.tweetId,
                _e = (e, t) => t.contextTweetId,
                we = (e, t) => {
                    const { promotedContent: o, tweetId: n } = t;
                    if (o && o.advertiser) return pe.ZP.select(e, o.advertiser.id_str);
                    if (o && V.Z.isPromoted(o)) {
                        const { advertiser_name: e } = o;
                        (0, J.ZP)("No advertiser info for non-URT promoted tweet", { extra: { advertiser_name: e, tweetId: n } });
                    }
                },
                Ce = (e, t) => t.socialContext,
                De = (e, { socialContext: t }) => {
                    const o = t && t.topicContext;
                    return o ? ce.Z.select(e, o.topicId) : void 0;
                },
                fe = (e, t) => {
                    const o = ue.Z.createHydratedTweetSelector(be)(e, t);
                    return o?.community_id_str ? oe.ZP.select(e, o?.community_id_str) : void 0;
                },
                ge = (e, t) => {
                    const o = ue.Z.createHydratedTweetSelector(be)(e, t),
                        n = o?.quoted_status,
                        i = n?.community_id_str;
                    return i ? oe.ZP.select(e, i) : void 0;
                },
                Me = (e, t) => "PUSH" === t.history.action,
                ke = (e, t) => he.Z.select(e, t.tweetId),
                Ae = (0, Y.Z)()
                    .propsFromState(() => ({ articleDomains: te.cb, community: fe, contextTweet: ue.Z.createHydratedTweetSelector(_e), displaySensitiveMedia: se.f1, explicitSocialContext: Ce, isActiveCreator: ae.WM, isForwardNavigation: Me, isNsfwUser: se.EF, isPinned: me, viewerUser: pe.ZP.selectViewerUser, promotedContentAdvertiser: we, quoteTweetCommunity: ge, topic: De, tweet: ue.Z.createHydratedTweetSelector(be), userCountry: ae.GG, userLanguage: ae.VT, translation: ke }))
                    .adjustStateProps(({ articleDomains: e, community: t, contextTweet: o, displaySensitiveMedia: n, explicitSocialContext: i, isActiveCreator: r, isForwardNavigation: a, isNsfwUser: s, isPinned: d, promotedContentAdvertiser: l, quoteTweetCommunity: c, topic: h, translation: u, tweet: p, userCountry: m, userLanguage: b, viewerUser: _ }) => {
                        const w = o ? (0, X.D$)(o, _?.id_str, t) : p ? (0, X.D$)(p, _?.id_str, t) : void 0,
                            C = p?.card?.binding_values?.domain?.string_value,
                            D = (0, te.ex)(e, C),
                            f = p?.quoted_status,
                            g = f ? (0, X.D$)(f, _?.id_str, c) : void 0,
                            M = g && (0, X.rl)(g),
                            k = (0, j.uA)(t?.role),
                            A = i || w;
                        return { community: t, contextTweet: o, displaySensitiveMedia: n, isActiveCreator: r, isCardArticle: D, isForwardNavigation: a, isNsfwUser: s, isPinned: d, viewerUser: _, promotedContentAdvertiser: l, quoteTweetSocialContextProps: M, socialContext: A, socialContextColor: (0, j.J2)(t, A), topic: h, tweet: p, userCountry: m, userLanguage: b, withCommunityModerationAuthority: k, translation: u };
                    })
                    .propsFromActions(() => ({ addToast: le.fz, block: pe.ZP.block, createLocalApiErrorHandler: (0, G.zr)("TWEET_DETAIL_CONTAINER"), fetchCommunityIfNeeded: oe.ZP.fetchOneIfNeeded, fetchSettings: de.wv, fetchTopicIfNeeded: ce.Z.fetchOneIfNeeded, log: ie.cM, mute: re.r, updateHeadsUp: ue.Z.updateHeadsUp, richScribeAction: ee.richScribeAction, setArticlesVisited: te.Ji, unblock: pe.ZP.unblock, undoTopicNotInterested: ce.Z.undoNotInterested, unmute: pe.ZP.unmute }));
            var ye = o(688715),
                Ie = o(834324),
                Te = o(392237),
                ve = o(500040),
                Se = o(187669);
            const xe = h().de21174c,
                Pe = h().haebcf52,
                Ee = h().i859a9d4,
                Ze = (0, ye.ju)("https://help.x.com/using-twitter/mentions-and-replies#mention-control"),
                Re = Te.default.create((e) => ({ callout: { marginVertical: e.spaces.space8, marginHorizontal: e.spaces.space16 } })),
                Be = () => {
                    const e = (0, x.z)();
                    return (
                        (0, Se.q)(() => {
                            e.scribe({ element: "left_conversation_banner", action: "impression" });
                        }),
                        i.createElement(r.Z, { style: Re.callout }, i.createElement(Ie.Z, { Icon: ve.default, action: { label: Ee, link: Ze }, headline: xe, text: Pe, type: "primary" }))
                    );
                },
                Ue = h().f277e94a,
                Le = h().da59404c;
            class Ne extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { displayReported: !1, enableKeyboardShortcuts: !1, replyPressToggle: !1, showBlockOrUnblockConfirmation: !1 }),
                        (this._shouldDisable = W.$y.bind(null, this.context.featureSwitches)),
                        (this._isArticleNudgeEnabled = this.context.featureSwitches.isTrue("responsive_web_article_nudge_enabled")),
                        (this._isCommunitiesEnabled = this.context.featureSwitches.isTrue("c9s_enabled")),
                        (this._muteAdUpsellEnabled = this.context.featureSwitches.isTrue("subscriptions_mute_ad_upsell_enabled")),
                        (this._hasPremiumPlus = this.context.userClaims.isVerifiedOrg() || this.context.userClaims.isVerifiedOrgAffiliate() || this.context.userClaims.hasSubscription("premium_plus")),
                        (this._isEditTweetConsumptionEnabled = () => this.context.featureSwitches.isTrue("responsive_web_edit_tweet_enabled") || this.context.featureSwitches.isTrue("subscriptions_feature_labs_1004")),
                        (this._getScribeData = (0, u.Z)((e, t, o) => {
                            const n = (function (e, t, o) {
                                return { ...(o || {}), items: T.Z.addTweetToItems(o?.items || [], e, t) };
                            })(e, t, o);
                            return (this._cachedScribeData && (0, p.Z)(n, this._cachedScribeData)) || (this._cachedScribeData = n), this._cachedScribeData;
                        })),
                        (this._renderConversationControlsTooltip = () => {
                            const { viewerUserId: e } = this.context,
                                { tweet: t } = this.props;
                            if (!t) return !1;
                            const o = a.Z.getOriginalTweet(t),
                                n = !!o.community_id_str,
                                i = o.user.id_str === e,
                                r = o.reply_count > 0;
                            return i && r && !o.in_reply_to_status_id_str && !n;
                        }),
                        (this._renderBlockOrUnblockConfirmationSheet = () => {
                            const { tweet: e } = this.props;
                            if (!e) return null;
                            const { user: t } = e;
                            return (0, f.ed)({ confirmation: (0, f.LI)(t, this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled")), onClose: this._handleBlockOrUnblockConfirmClose, handleConfirm: this._handleBlockOrUnblockUserConfirm });
                        }),
                        (this._fabReply = (0, u.Z)((e) => i.createElement(N, { getLocationState: this._getReplyLocationState, history: e }))),
                        (this._getInlineCalloutInfo = () => {
                            const { analytics: e, displaySensitiveMedia: t, isNsfwUser: o, tweet: n, userCountry: i, userLanguage: r } = this.props,
                                { featureSwitches: a, viewerUserId: s } = this.context;
                            if (n && (0, S.pG)({ displaySensitiveMedia: t, featureSwitches: a, isNsfwUser: o, viewerUserId: s, tweet: n, userCountry: i, userLanguage: r })) return (0, S.Mt)(n, e.contextualScribeNamespace, a);
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
                                { tweet: i } = this.props;
                            if (!i) return {};
                            const r = i.user.id_str === n;
                            return { ...(t && { [t]: e }), ...(o && !r && { [o]: this._handleBlockOrUnblockConfirmOpen }) };
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
                            const { addToast: e, block: t, createLocalApiErrorHandler: o, promotedContent: n, tweet: i, unblock: r } = this.props;
                            if (!i) return {};
                            const { user: a } = i,
                                s = {
                                    addToast: e,
                                    createLocalApiErrorHandler: o,
                                    scribeAction: ({ element: e }) => {
                                        this._scribeAction({ element: e, action: "click" });
                                    },
                                };
                            return (0, $.Z)({ ...s, block: t, isSoftBlockEnabled: this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled"), unblock: r, user: a, promotedContent: n });
                        }),
                        (this._getMuteOrUnmuteAction = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, history: o, mute: n, promotedContent: i, tweet: r, unmute: a } = this.props;
                            if (!r) return {};
                            const { user: s } = r,
                                d = {
                                    addToast: e,
                                    createLocalApiErrorHandler: t,
                                    scribeAction: ({ element: e }) => {
                                        this._scribeAction({ element: e, action: "click" });
                                    },
                                };
                            return (0, Q.Z)({ ...d, mute: n, unmute: a, user: s, promotedContent: i, history: o, muteAdUpsellEnabled: this._muteAdUpsellEnabled, hasPremiumPlus: this._hasPremiumPlus });
                        }),
                        (this._getRenderCurationActionMenu = (0, u.Z)(
                            (e, t, o, n, r, s, d, l, c, h, u, p, m, b, _, w, C, f) => () =>
                                !!p &&
                                i.createElement(D.Z, {
                                    feedbackItems: e,
                                    forwardPivotDisplayType: t,
                                    forwardPivotLandingUrl: o,
                                    isActiveCreator: r,
                                    isNsfwUser: s,
                                    isPinned: d,
                                    onDeleteTweet: () => {
                                        const { fromApp: e, usedFallback: t } = l.state || {},
                                            o = p && a.Z.getOriginalTweet(p).isEdited;
                                        e && !t && !o ? n.goBack() : n.push("/");
                                    },
                                    onMenuClick: c,
                                    onTweetDismiss: h,
                                    promotedContent: u,
                                    tweet: p,
                                    userCountry: C,
                                    userLanguage: f,
                                    withChangeConversationControls: m,
                                    withChangeConversationControlsTooltip: b,
                                    withCommunityModerationAuthority: w,
                                    withHideReply: _,
                                    withMuteConversation: !0,
                                    withViewHiddenReplies: !0,
                                }),
                        )),
                        (this._scribeAction = (e, t, o, n, i) => {
                            const { analytics: r, history: a, promotedContent: s, richScribeAction: d, tweet: l } = this.props,
                                c = a.location.state?.overflow,
                                h = r.contextualScribeNamespace,
                                { items: u = [] } = r.contextualScribeData || {},
                                p = i && l && l.quoted_status ? T.Z.getTweetItem(l, s, void 0, c, {}, !0) : l ? T.Z.getTweetItem(l, s, void 0, c, {}, !1) : void 0,
                                b = { items: T.Z.leftMergeScribeItems(p ? [p] : [], u), ...(0, m.Z)(o ? { click_tracking_embed_details: o } : null), ...t };
                            if (n && l)
                                if (i) {
                                    if (l.quoted_status && l.quoted_status.user) {
                                        const e = T.Z.getUserItem(l.quoted_status.user, s);
                                        b.items.push(e);
                                    }
                                } else {
                                    const e = T.Z.getUserItem(l.user, s);
                                    b.items.push(e);
                                }
                            d({ ...h, ...e }, b);
                        }),
                        (this._handleReplyContextClick = (e, t) => {
                            this._scribeAction({ element: "reply_context", action: "click" }, { event_value: t });
                        }),
                        (this._handlePromotedIndicatorClick = () => {
                            this._handleAsyncPromotedEvent(k.dx.FOOTER_PROFILE);
                        }),
                        (this._handleQuotedTweetMediaClick = () => {
                            this._scribeAction({ element: "platform_photo_card", action: "click" }, void 0, void 0, void 0, !0), this._handleAsyncPromotedEvent(k.dx.EMBEDDED_MEDIA);
                        }),
                        (this._handleQuoteTweetClick = () => {
                            const { addToast: e, tweet: t } = this.props;
                            if ((this._scribeAction({ element: "quoted_tweet", action: "click" }, void 0, void 0, void 0, !0), t)) {
                                const o = a.Z.getOriginalTweet(t);
                                o.quoted_status?.isStaleEdit && this._isEditTweetConsumptionEnabled() && e({ text: Le });
                            }
                        }),
                        (this._handleShowMoreClick = () => {
                            this._scribeAction({ element: "tweet", action: "expand_read_more_inline" });
                        }),
                        (this._handleMediaClick = () => {
                            this._scribeAction({ element: "platform_photo_card", action: "click" }), this._handleAsyncPromotedEvent(k.dx.EMBEDDED_MEDIA);
                        }),
                        (this._handleEntityClick = (e, t, o) => {
                            const n = k._4[t],
                                i = I.Z[t],
                                r = T.Z.getClickTrackingEmbedDetails(this.props.promotedContent, o);
                            if (n) {
                                const t = n === k.dx.URL_CLICK && e.currentTarget instanceof window.HTMLElement ? { url: e.currentTarget.href } : void 0;
                                this._handleAsyncPromotedEvent(n, t);
                            }
                            t === s.Z.URL && r && this._scribeAction({ action: d.bQ.CLICK_ID_EMBED }, void 0, r), t === s.Z.TIMESTAMP && this._scribeAction({ action: d.bQ.CLICK, element: "video_timestamp" }), i && this._scribeAction({ action: i }, void 0, void 0);
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
                            this._scribeAction({ element: "avatar", action: "profile_click" }, { profile_id: `${e ? e.user.id : ""}` }, void 0, !0), this._handleAsyncPromotedEvent(k.dx.PROFILE_IMAGE_CLICK);
                        }),
                        (this._handleScreenNameClick = () => {
                            const { tweet: e } = this.props;
                            this._scribeAction({ element: "user", action: "profile_click" }, { profile_id: `${e ? e.user.id : ""}` }, void 0, !0), this._handleAsyncPromotedEvent(k.dx.SCREEN_NAME_CLICK);
                        }),
                        (this._handleQuotedTweetAvatarClick = () => {
                            const { tweet: e } = this.props;
                            this._scribeAction({ element: "avatar", action: "profile_click" }, { profile_id: `${e ? e.user.id : ""}` }, void 0, !0), this._handleAsyncPromotedEvent(k.dx.PROFILE_IMAGE_CLICK);
                        }),
                        (this._handleQuotedTweetScreenNameClick = () => {
                            const { tweet: e } = this.props;
                            this._scribeAction({ element: "user", action: "profile_click" }, { profile_id: `${e ? e.user.id : ""}` }, void 0, !0), this._handleAsyncPromotedEvent(k.dx.SCREEN_NAME_CLICK);
                        }),
                        (this._handleCaretClick = () => {
                            this._scribeAction({ element: "caret", action: "click" });
                        }),
                        (this._handleCommunityFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchCommunityIfNeeded: t, tweet: o } = this.props;
                            if (o && this._isCommunitiesEnabled) {
                                const n = o.community_id_str,
                                    i = o.quoted_status?.community_id_str;
                                n && t(n).catch(e()), i && t(i).catch(e());
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
                            (0, M.f)({ analytics: e, isArticleNudgeEnabled: this._isArticleNudgeEnabled, isCardArticle: t, setArticlesVisited: o, tweet: n });
                        }),
                        (this._handleLatestEditLinkClick = () => this._scribeAction({ action: "view_edit_history" })),
                        (this._handleStaleEditLinkClick = () => this._scribeAction({ action: "view_latest_tweet" })),
                        (this._handleMediaHashtagHighlightClick = () => {
                            this._handleAsyncPromotedEvent(k.dx.HASHTAG_CLICK);
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
                        (this._fetchUserSettingsTimer = new v.Z(18e5).interval(() => {
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
                        n = (0, C.j)(t.withheld_scope),
                        a = (0, y.G$)(t) && !this.state.displayReported;
                    return i.createElement(i.Fragment, null, n ? i.createElement(r.Z, null, this._renderWithheldTweet(), o ? this._renderTweetComponent() : null) : a ? this._renderReportedTombstone() : this._renderTweetComponent(), this._renderIntentPrompt(), this.state.showBlockOrUnblockConfirmation && !o ? this._renderBlockOrUnblockConfirmationSheet() : null);
                }
                _renderIntentPrompt() {
                    const { forwardPivotInfo: e, history: t, nudges: o, tweet: n } = this.props;
                    if (n && t.location.pathname.indexOf("/intent/") > -1) return i.createElement(O.Z, { forwardPivotInfo: e, history: t, location: t.location, nudges: o, tweetId: n.id_str });
                }
                _renderTweetComponent() {
                    const { analytics: e, contextTweet: t, feedbackItems: o, forwardPivotInfo: r, hasModeratedReplies: s, history: d, innerForwardPivotInfo: l, innerNudges: c, isActiveCreator: h, isNsfwUser: u, isPinned: p, location: m, nudges: b, onTweetDismiss: C, promotedContent: D, promotedContentAdvertiser: f, quoteTweetSocialContextProps: g, quotedTweetTombstoneInfo: M, readerModeAvailable: k, replyBadge: y, replyContext: I, rootTweetAuthorId: T, showReplyFilterInlineCallout: v, socialContext: S, socialContextColor: x, topic: P, topicFollowPrompt: E, translation: Z, tweet: R, userCountry: B, userLanguage: U, viewerUser: L, withActions: N, withCommunityModerationAuthority: F, withHideReply: O, withInlineMedia: H, withSocialContext: W } = this.props;
                    if (!R) return null;
                    const { viewerUserId: z } = this.context,
                        { enableKeyboardShortcuts: q } = this.state,
                        K = a.Z.getOriginalTweet(R),
                        $ = { contextTweet: t, enableKeyboardShortcuts: q, forwardPivotInfo: r, hasModeratedReplies: s, handleReplyFilterInlineCalloutImpression: this._handleReplyFilterInlineCalloutImpression, showReplyFilterInlineCallout: v, innerForwardPivotInfo: l, viewerUser: L, promotedContent: D, promotedContentAdvertiser: f, quotedTweetTombstoneInfo: M, quoteTweetSocialContextProps: g, readerModeAvailable: k, socialContext: S, socialContextColor: x, topic: P, topicFollowPrompt: E, tweet: R, replyBadge: y, replyContext: I, rootTweetAuthorId: T, withActions: N, withAltTextBadge: !0, withInlineMedia: H, withSocialContext: W, nudges: b, innerNudges: c, translation: Z, userLanguage: U },
                        Q = K.user.id_str === z,
                        V = !K.in_reply_to_status_id_str && Q && !K.community_id_str,
                        G = this._renderConversationControlsTooltip();
                    return i.createElement(
                        A.nO,
                        { data: this._getScribeData(R.retweeted_status || R, D, e.contextualScribeData) },
                        i.createElement(
                            _.Z,
                            { enabled: !!q, handlers: this._getShortcutKeyHandlers() },
                            this._renderLeftConversationBanner(),
                            i.createElement(
                                w.ZP,
                                (0, n.Z)({}, $, {
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
                                    renderCurationActionMenu: this._getRenderCurationActionMenu(o, r?.displayType, r?.landingUrl, d, h, u, p, m, this._handleCaretClick, C, D, a.Z.getOriginalTweet(R), V, G, O, F, B, U),
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
                    return o ? i.createElement(Be, null) : null;
                }
                _renderInlineReply() {
                    const { history: e, location: t, tweet: o, tweetId: n } = this.props,
                        { replyPressToggle: r } = this.state,
                        { viewerUserId: a } = this.context;
                    if (!o) return null;
                    return a && !this._shouldDisable(o, W.d.Reply) ? i.createElement(E.c_, null, (0, g.ZP)() ? i.createElement(K, { history: e, location: t, parentTweetId: n, replyPressToggle: r }) : i.createElement(b.Z, { container: l.Z, fab: this._fabReply(e), withoutBottomPadding: !0 })) : null;
                }
                _renderWithheldTweet() {
                    const { tweet: e } = this.props;
                    return !!e && i.createElement(C.Z, { displayTextRange: e.display_text_range, entities: e.withheld_entities || e.entities, lang: e.lang, text: e.withheld_text || e.text });
                }
                _renderReportedTombstone() {
                    const { tweet: e } = this.props;
                    if (e) {
                        const t = a.Z.getOriginalTweet(e),
                            o = (0, y.jD)(t.reportingVisibility);
                        return i.createElement(H.Z, { actionText: Ue, lang: e.lang, onClick: this._handleShowReportedTweet }, o);
                    }
                }
                _handleAsyncPromotedEvent(e, t) {
                    const { createLocalApiErrorHandler: o, log: n, promotedContent: i, tweet: r } = this.props;
                    if (r && i) {
                        const { disclosure_type: a, impression_id: s } = i;
                        n({ disclosureType: a, itemId: r.id_str, itemType: "tweet", params: { event: e, impression_id: s, ...t } }).catch(o());
                    }
                }
            }
            Ne.contextType = Z.rC;
            const Fe = (0, P.ZP)(Ae(Ne)),
                Oe = (0, x.Z)(Fe),
                He = (0, x.Z)(Fe, { component: "tweet" });
        },
        886404: (e, t, o) => {
            o.d(t, { c_: () => d, lm: () => l, n6: () => s });
            var n = o(202784),
                i = o(321835);
            const r = { isShowHeaderReplyButton: !1, onInlineReplyOffScreen: () => {} },
                a = n.createContext(r);
            function s({ children: e }) {
                const [t, o] = n.useState(!1),
                    i = n.useCallback((e) => {
                        o(e);
                    }, []);
                return n.createElement(a.Provider, { value: { isShowHeaderReplyButton: t, onInlineReplyOffScreen: i } }, e);
            }
            function d({ children: e }) {
                const [t, o] = n.useState(!1),
                    { onInlineReplyOffScreen: r } = n.useContext(a),
                    s = n.useCallback(
                        ({ isOffscreen: e }) => {
                            t && e && r(e);
                        },
                        [t, r],
                    );
                return n.createElement(i.Z, { onImpression: () => o(!0), onOffscreenChange: s, testID: "inline_reply_offscreen" }, e);
            }
            function l({ children: e }) {
                const { isShowHeaderReplyButton: t } = n.useContext(a);
                return t ? e : null;
            }
        },
        392027: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                i = o(154003),
                r = o(392237);
            class a extends n.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: o, disabled: r, href: a, icon: d, label: l, onPress: c, renderMenu: h, style: u, testID: p } = this.props,
                        m = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, o);
                    return n.createElement(i.ZP, { "aria-label": e, backgroundColor: t, color: m, disabled: r, icon: d, link: a, onPress: c, renderMenu: h, size: "xLarge", style: [s.root, !l && s.iconOnly, u], testID: p }, l);
                }
            }
            a.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const s = r.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                d = a;
        },
        662678: (e, t, o) => {
            o.d(t, { G: () => i, Z: () => n });
            o(136728);
            const n = function (e, t) {
                return i(e, t);
            };
            function i(e, t) {
                return e.reduce(
                    (o, n, i) => {
                        const r = t ? t(n, i, e) : !!n;
                        return r && o[0].push(n), !r && o[1].push(n), o;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.inlineTombstoneHandler~loader.tweetHandler.9450916a.js.map

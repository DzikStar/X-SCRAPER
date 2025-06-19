"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.inlineTombstoneHandler~loader.tweetHandler", "loader.AudioContextVoiceMedia"],
    {
        169576: (e, t, o) => {
            o.d(t, { c: () => _, Z: () => C });
            var n = o(202784),
                r = o(325686),
                i = o(392237),
                a = o(530732),
                s = o(992942),
                l = o(731708),
                d = o(154003),
                c = o(725516),
                h = o(111677),
                u = o.n(h);
            const m = o.p + "MarchMadnessBannerDark.42aa2dea.png",
                p = o.p + "MarchMadnessBannerLight.02bf82ca.png",
                b = { header: u().d231a76a, description: u().heaba5d8, legalDisclaimer: u().i57d3ea0, buttonText: u().a0440af6, image: { darkMode: m, lightMode: p } },
                _ = Object.freeze({ MarchMadness: "MarchMadness" }),
                C = ({ buttonOnSameLine: e, link: t, occasion: o, styleOverrides: h, withBackgroundImage: u }) => {
                    const m = (0, c.z)(),
                        p = _[o] || "Occasion",
                        C = u ? `${p}WithBackgroundImage` : p;
                    n.useEffect(() => {
                        m.scribe({ component: C, action: "impression" });
                    }, [m, C]);
                    const g = () => {
                            m.scribe({ component: C, action: "click", element: "card" });
                        },
                        { backgroundcolor: D, buttonSize: f, cardWidth: M, marginbottom: k, textcolor: y } = h ?? {},
                        A = D ? i.default.theme.colors[D] : i.default.theme.colors.gray0,
                        I = y ? i.default.theme.colors[y] : i.default.theme.colors.gray900,
                        T = k ? i.default.theme.spaces[k] : i.default.theme.spaces.space16,
                        v = { [_.MarchMadness]: { header: b.header, description: b.description, legalDisclaimer: b.legalDisclaimer, buttonText: b.buttonText, image: b.image } }[o];
                    return u ? n.createElement(a.Z, { interactiveStyles: null, link: t, onPress: g, style: w.bannerContainer }, n.createElement(s.Z, { resizeMode: "contain", source: { uri: "light" === i.default.theme.paletteName ? v.image.lightMode : v.image.darkMode }, style: { height: 85 } })) : n.createElement(r.Z, { style: [w.card, { backgroundColor: A }, { maxWidth: M }, { marginBottom: T }], testID: "popupCard" }, n.createElement(r.Z, { style: e ? w.horizontalContent : w.verticalContent }, n.createElement(r.Z, { style: e ? w.textContainer : null }, n.createElement(l.ZP, { size: "headline2", style: [w.popupTitle, { alignSelf: "flex-start" }], weight: "bold" }, v.header), n.createElement(l.ZP, { size: "subtext1", style: [w.popupDescription, { color: I }] }, v.description, " ", e ? null : v.legalDisclaimer)), n.createElement(r.Z, { style: w.buttonContainer }, n.createElement(d.ZP, { backgroundColor: "light" === i.default.theme.paletteName ? "orange300" : "orange600", borderColor: "transparent", link: t, onClick: g, size: "medium", style: [w.popupButton, { width: f }] }, v.buttonText), e && n.createElement(l.ZP, { size: "subtext3", style: [w.legalDisclaimer, { color: I }] }, v.legalDisclaimer))));
                },
                w = i.default.create((e) => ({ card: { backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, alignItems: "center", maxWidth: 350, width: "100%" }, transparent: { backgroundColor: "transparent" }, popupTitle: { marginBottom: e.spaces.space8, textAlign: "start" }, popupDescription: { textAlign: "start", marginEnd: e.spaces.space12 }, legalDisclaimer: { position: "absolute", top: "60px", end: "50%", transform: "translateX(50%)", textAlign: "center", minWidth: 100, opacity: 0.7 }, popupButton: { width: "100%", borderRadius: e.spaces.space24, marginTop: e.spaces.space12, height: e.spaces.space40 }, buttonContainer: { position: "relative" }, horizontalContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: e.spaces.space8 }, verticalContent: { width: "100%" }, textContainer: { flex: 1 }, bannerContainer: { marginBottom: e.spaces.space16 } }));
        },
        789831: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(807896),
                r = o(202784),
                i = o(325686),
                a = o(392237),
                s = o(655352);
            const l = a.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                d = ({ children: e, component: t, fab: o, shouldRenderFab: a = !0, style: d, withoutBottomPadding: c, ...h }) => {
                    const u = t || i.Z,
                        m = a && !(0, s.ZP)();
                    return r.createElement(u, (0, n.Z)({}, h, { style: [m && !c && l.root, d] }), e, m ? o : null);
                };
        },
        387524: (e, t, o) => {
            o.d(t, { Z: () => b });
            var n = o(807896),
                r = o(202784),
                i = o(325686),
                a = o(292627),
                s = o(537392),
                l = o(392237),
                d = o(365023),
                c = o(392027),
                h = o(774654),
                u = o(725516),
                m = o(443781);
            const p = l.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${l.default.iPhoneOffsetBottom} - ${h.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                b = (e) => {
                    const { "aria-label": t, label: o, onPress: b, scribeComponent: _, ...C } = e,
                        { loggedInUserId: w } = r.useContext(m.rC),
                        g = (0, u.z)(),
                        D = r.useCallback(
                            (e) => {
                                g.scribe({ component: _, action: "click" }), b && b(e);
                            },
                            [g, b, _],
                        ),
                        f = h.ZM.useCollapsibleNavBars(),
                        M = [...h.Ah({ elementPosition: "bottom" }), f && p.fabStaysAboveSafeArea];
                    return w
                        ? r.createElement(
                              a.Z.FloatingAction,
                              null,
                              r.createElement(s.ZP, null, ({ windowWidth: e }) => {
                                  const a = e > l.default.theme.breakpoints.large,
                                      s = e > l.default.theme.breakpoints.medium,
                                      h = e < l.default.theme.breakpoints.micro,
                                      u = [p.root, s && p.rootMedium, a && p.rootLarge],
                                      m = [p.fab, a && p.fabLarge, h && p.fabMicro, M];
                                  return r.createElement(
                                      i.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: u },
                                      r.createElement(d.Z, { id: "FloatingActionButtonBase" }, (e, s) => r.createElement(i.Z, (0, n.Z)({ ref: e() }, s({ style: m })), r.createElement(c.Z, (0, n.Z)({}, C, { "aria-label": t, label: a ? o : void 0, onPress: D, style: h && p.buttonMicro })))),
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
                r = o(387524),
                i = o(635510);
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
                    return n.createElement(r.Z, { "aria-label": e, href: a, icon: t, label: o, onPress: this._handlePress, scribeComponent: s, testID: i.Z.tweet });
                }
            }
            const l = s;
        },
        635510: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        114054: (e, t, o) => {
            o.d(t, { Z9: () => Oe, ZP: () => He });
            var n = o(807896),
                r = (o(136728), o(202784)),
                i = o(325686),
                a = o(782261),
                s = o(341189),
                l = o(542908),
                d = o(108362),
                c = o(111677),
                h = o.n(c),
                u = o(912021),
                m = o(908478),
                p = o(803810),
                b = o(789831),
                _ = o(933794),
                C = o(808692),
                w = o(622200),
                g = o(459284),
                D = o(376293),
                f = o(655352),
                M = o(270130),
                k = o(663550),
                y = o(293115),
                A = o(395067),
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
                N = ({ getLocationState: e, history: t }) => r.createElement(B.Z, { "aria-label": U, getLocationState: e, history: t, icon: F, label: L, scribeComponent: "floating_compose_button" }),
                F = r.createElement(R.default, null);
            var O = o(231214),
                H = o(177371),
                W = o(533128),
                z = o(523561),
                q = o(195560);
            const K = (0, z.Z)({
                loader: () =>
                    Promise.all([
                        o.e("icons.5"),
                        o.e("icons.25"),
                        o.e("icons.22"),
                        o.e("icons.6"),
                        o.e("icons.4"),
                        o.e("icons.9"),
                        o.e("icons.15"),
                        o.e("icons.7"),
                        o.e("icons.3"),
                        o.e("icons.20"),
                        o.e("icons.2"),
                        o.e("icons.18"),
                        o.e("icons.27"),
                        o.e("icons.13"),
                        o.e("modules.common-e907d115"),
                        o.e("modules.common-e019dbda"),
                        o.e("icons.0"),
                        o.e("icons.24"),
                        o.e("icons.17"),
                        o.e("icons.12"),
                        o.e("icons.11"),
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
                        o.e("icons.10"),
                        o.e("icons.8"),
                        o.e("icons.26"),
                        o.e("icons.19"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bd26965e"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d"),
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
                        o.e("shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-0657330d"),
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
                renderPlaceholder: (e, t) => r.createElement(q.Z, { hasError: e, onRetry: t }),
            });
            var $ = o(352975),
                G = o(383494),
                V = o(966582),
                Q = o(71620),
                j = o(870358),
                J = o(163889),
                X = o(988566),
                Y = o(668214),
                ee = o(481242),
                te = o(575652),
                oe = o(491963),
                ne = o(80890),
                re = o(694180),
                ie = o(629196),
                ae = o(390387),
                se = o(38562),
                le = o(131290),
                de = o(601576),
                ce = o(466380),
                he = o(251441),
                ue = o(836255),
                me = o(919022);
            const pe = (e, t) => (0, ne.MW)(e, t.tweetId),
                be = (e, t) => t.tweetId,
                _e = (e, t) => t.contextTweetId,
                Ce = (e, t) => {
                    const { promotedContent: o, tweetId: n } = t;
                    if (o && o.advertiser) return me.ZP.select(e, o.advertiser.id_str);
                    if (o && V.Z.isPromoted(o)) {
                        const { advertiser_name: e } = o;
                        (0, J.ZP)("No advertiser info for non-URT promoted tweet", { extra: { advertiser_name: e, tweetId: n } });
                    }
                },
                we = (e, t) => t.socialContext,
                ge = (e, { socialContext: t }) => {
                    const o = t && t.topicContext;
                    return o ? ce.Z.select(e, o.topicId) : void 0;
                },
                De = (e, t) => {
                    const o = ue.Z.createHydratedTweetSelector(be)(e, t);
                    return o?.community_id_str ? oe.ZP.select(e, o?.community_id_str) : void 0;
                },
                fe = (e, t) => {
                    const o = ue.Z.createHydratedTweetSelector(be)(e, t),
                        n = o?.quoted_status,
                        r = n?.community_id_str;
                    return r ? oe.ZP.select(e, r) : void 0;
                },
                Me = (e, t) => "PUSH" === t.history.action,
                ke = (e, t) => he.Z.select(e, t.tweetId),
                ye = (0, Y.Z)()
                    .propsFromState(() => ({ articleDomains: te.cb, community: De, contextTweet: ue.Z.createHydratedTweetSelector(_e), displaySensitiveMedia: se.f1, explicitSocialContext: we, isActiveCreator: ae.WM, isForwardNavigation: Me, isNsfwUser: se.EF, isPinned: pe, viewerUser: me.ZP.selectViewerUser, promotedContentAdvertiser: Ce, quoteTweetCommunity: fe, topic: ge, tweet: ue.Z.createHydratedTweetSelector(be), userCountry: ae.GG, userLanguage: ae.VT, translation: ke }))
                    .adjustStateProps(({ articleDomains: e, community: t, contextTweet: o, displaySensitiveMedia: n, explicitSocialContext: r, isActiveCreator: i, isForwardNavigation: a, isNsfwUser: s, isPinned: l, promotedContentAdvertiser: d, quoteTweetCommunity: c, topic: h, translation: u, tweet: m, userCountry: p, userLanguage: b, viewerUser: _ }) => {
                        const C = o ? (0, X.D$)(o, _?.id_str, t) : m ? (0, X.D$)(m, _?.id_str, t) : void 0,
                            w = m?.card?.binding_values?.domain?.string_value,
                            g = (0, te.ex)(e, w),
                            D = m?.quoted_status,
                            f = D ? (0, X.D$)(D, _?.id_str, c) : void 0,
                            M = f && (0, X.rl)(f),
                            k = (0, j.uA)(t?.role),
                            y = r || C;
                        return { community: t, contextTweet: o, displaySensitiveMedia: n, isActiveCreator: i, isCardArticle: g, isForwardNavigation: a, isNsfwUser: s, isPinned: l, viewerUser: _, promotedContentAdvertiser: d, quoteTweetSocialContextProps: M, socialContext: y, socialContextColor: (0, j.J2)(t, y), topic: h, tweet: m, userCountry: p, userLanguage: b, withCommunityModerationAuthority: k, translation: u };
                    })
                    .propsFromActions(() => ({ addToast: de.fz, block: me.ZP.block, createLocalApiErrorHandler: (0, Q.zr)("TWEET_DETAIL_CONTAINER"), fetchCommunityIfNeeded: oe.ZP.fetchOneIfNeeded, fetchSettings: le.wv, fetchTopicIfNeeded: ce.Z.fetchOneIfNeeded, log: re.cM, mute: ie.r, updateHeadsUp: ue.Z.updateHeadsUp, richScribeAction: ee.richScribeAction, setArticlesVisited: te.Ji, unblock: me.ZP.unblock, undoTopicNotInterested: ce.Z.undoNotInterested, unmute: me.ZP.unmute }));
            var Ae = o(688715),
                Ie = o(834324),
                Te = o(392237),
                ve = o(500040),
                Se = o(187669);
            const xe = h().de21174c,
                Pe = h().haebcf52,
                Ee = h().i859a9d4,
                Ze = (0, Ae.ju)("https://help.x.com/using-twitter/mentions-and-replies#mention-control"),
                Re = Te.default.create((e) => ({ callout: { marginVertical: e.spaces.space8, marginHorizontal: e.spaces.space16 } })),
                Be = () => {
                    const e = (0, x.z)();
                    return (
                        (0, Se.q)(() => {
                            e.scribe({ element: "left_conversation_banner", action: "impression" });
                        }),
                        r.createElement(i.Z, { style: Re.callout }, r.createElement(Ie.Z, { Icon: ve.default, action: { label: Ee, link: Ze }, headline: xe, text: Pe, type: "primary" }))
                    );
                },
                Ue = h().f277e94a,
                Le = h().da59404c;
            class Ne extends r.Component {
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
                            return (this._cachedScribeData && (0, m.Z)(n, this._cachedScribeData)) || (this._cachedScribeData = n), this._cachedScribeData;
                        })),
                        (this._renderConversationControlsTooltip = () => {
                            const { viewerUserId: e } = this.context,
                                { tweet: t } = this.props;
                            if (!t) return !1;
                            const o = a.Z.getOriginalTweet(t),
                                n = !!o.community_id_str,
                                r = o.user.id_str === e,
                                i = o.reply_count > 0;
                            return r && i && !o.in_reply_to_status_id_str && !n;
                        }),
                        (this._renderBlockOrUnblockConfirmationSheet = () => {
                            const { tweet: e } = this.props;
                            if (!e) return null;
                            const { user: t } = e;
                            return (0, D.ed)({ confirmation: (0, D.LI)(t), onClose: this._handleBlockOrUnblockConfirmClose, handleConfirm: this._handleBlockOrUnblockUserConfirm });
                        }),
                        (this._fabReply = (0, u.Z)((e) => r.createElement(N, { getLocationState: this._getReplyLocationState, history: e }))),
                        (this._getInlineCalloutInfo = () => {
                            const { analytics: e, displaySensitiveMedia: t, isNsfwUser: o, tweet: n, userCountry: r, userLanguage: i } = this.props,
                                { featureSwitches: a, viewerUserId: s } = this.context;
                            if (n && (0, S.pG)({ displaySensitiveMedia: t, featureSwitches: a, isNsfwUser: o, viewerUserId: s, tweet: n, userCountry: r, userLanguage: i })) return (0, S.Mt)(n, e.contextualScribeNamespace, a);
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
                                { tweet: r } = this.props;
                            if (!r) return {};
                            const i = r.user.id_str === n;
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
                            const { addToast: e, block: t, createLocalApiErrorHandler: o, promotedContent: n, tweet: r, unblock: i } = this.props;
                            if (!r) return {};
                            const { user: a } = r,
                                s = {
                                    addToast: e,
                                    createLocalApiErrorHandler: o,
                                    scribeAction: ({ element: e }) => {
                                        this._scribeAction({ element: e, action: "click" });
                                    },
                                };
                            return (0, $.Z)({ ...s, block: t, unblock: i, user: a, promotedContent: n });
                        }),
                        (this._getMuteOrUnmuteAction = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, history: o, mute: n, promotedContent: r, tweet: i, unmute: a } = this.props;
                            if (!i) return {};
                            const { user: s } = i,
                                l = {
                                    addToast: e,
                                    createLocalApiErrorHandler: t,
                                    scribeAction: ({ element: e }) => {
                                        this._scribeAction({ element: e, action: "click" });
                                    },
                                };
                            return (0, G.Z)({ ...l, mute: n, unmute: a, user: s, promotedContent: r, history: o, muteAdUpsellEnabled: this._muteAdUpsellEnabled, hasPremiumPlus: this._hasPremiumPlus });
                        }),
                        (this._getRenderCurationActionMenu = (0, u.Z)(
                            (e, t, o, n, i, s, l, d, c, h, u, m, p, b, _, C, w, D) => () =>
                                !!m &&
                                r.createElement(g.Z, {
                                    feedbackItems: e,
                                    forwardPivotDisplayType: t,
                                    forwardPivotLandingUrl: o,
                                    isActiveCreator: i,
                                    isNsfwUser: s,
                                    isPinned: l,
                                    onDeleteTweet: () => {
                                        const { fromApp: e, usedFallback: t } = d.state || {},
                                            o = m && a.Z.getOriginalTweet(m).isEdited;
                                        e && !t && !o ? n.goBack() : n.push("/");
                                    },
                                    onMenuClick: c,
                                    onTweetDismiss: h,
                                    promotedContent: u,
                                    tweet: m,
                                    userCountry: w,
                                    userLanguage: D,
                                    withChangeConversationControls: p,
                                    withChangeConversationControlsTooltip: b,
                                    withCommunityModerationAuthority: C,
                                    withHideReply: _,
                                    withMuteConversation: !0,
                                    withViewHiddenReplies: !0,
                                }),
                        )),
                        (this._scribeAction = (e, t, o, n, r) => {
                            const { analytics: i, history: a, promotedContent: s, richScribeAction: l, tweet: d } = this.props,
                                c = a.location.state?.overflow,
                                h = i.contextualScribeNamespace,
                                { items: u = [] } = i.contextualScribeData || {},
                                m = r && d && d.quoted_status ? T.Z.getTweetItem(d, s, void 0, c, {}, !0) : d ? T.Z.getTweetItem(d, s, void 0, c, {}, !1) : void 0,
                                b = { items: T.Z.leftMergeScribeItems(m ? [m] : [], u), ...(0, p.Z)(o ? { click_tracking_embed_details: o } : null), ...t };
                            if (n && d)
                                if (r) {
                                    if (d.quoted_status && d.quoted_status.user) {
                                        const e = T.Z.getUserItem(d.quoted_status.user, s);
                                        b.items.push(e);
                                    }
                                } else {
                                    const e = T.Z.getUserItem(d.user, s);
                                    b.items.push(e);
                                }
                            l({ ...h, ...e }, b);
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
                                r = I.Z[t],
                                i = T.Z.getClickTrackingEmbedDetails(this.props.promotedContent, o);
                            if (n) {
                                const t = n === k.dx.URL_CLICK && e.currentTarget instanceof window.HTMLElement ? { url: e.currentTarget.href } : void 0;
                                this._handleAsyncPromotedEvent(n, t);
                            }
                            t === s.Z.URL && i && this._scribeAction({ action: l.bQ.CLICK_ID_EMBED }, void 0, i), t === s.Z.TIMESTAMP && this._scribeAction({ action: l.bQ.CLICK, element: "video_timestamp" }), r && this._scribeAction({ action: r }, void 0, void 0);
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
                                    r = o.quoted_status?.community_id_str;
                                n && t(n).catch(e()), r && t(r).catch(e());
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
                        n = (0, w.j)(t.withheld_scope),
                        a = (0, A.G$)(t) && !this.state.displayReported;
                    return r.createElement(r.Fragment, null, n ? r.createElement(i.Z, null, this._renderWithheldTweet(), o ? this._renderTweetComponent() : null) : a ? this._renderReportedTombstone() : this._renderTweetComponent(), this._renderIntentPrompt(), this.state.showBlockOrUnblockConfirmation && !o ? this._renderBlockOrUnblockConfirmationSheet() : null);
                }
                _renderIntentPrompt() {
                    const { forwardPivotInfo: e, history: t, nudges: o, tweet: n } = this.props;
                    if (n && t.location.pathname.indexOf("/intent/") > -1) return r.createElement(O.Z, { forwardPivotInfo: e, history: t, location: t.location, nudges: o, tweetId: n.id_str });
                }
                _renderTweetComponent() {
                    const { analytics: e, contextTweet: t, feedbackItems: o, forwardPivotInfo: i, hasModeratedReplies: s, history: l, innerForwardPivotInfo: d, innerNudges: c, isActiveCreator: h, isNsfwUser: u, isPinned: m, location: p, nudges: b, onTweetDismiss: w, promotedContent: g, promotedContentAdvertiser: D, quoteTweetSocialContextProps: f, quotedTweetTombstoneInfo: M, readerModeAvailable: k, replyBadge: A, replyContext: I, rootTweetAuthorId: T, showReplyFilterInlineCallout: v, socialContext: S, socialContextColor: x, topic: P, topicFollowPrompt: E, translation: Z, tweet: R, userCountry: B, userLanguage: U, viewerUser: L, withActions: N, withCommunityModerationAuthority: F, withHideReply: O, withInlineMedia: H, withSocialContext: W } = this.props;
                    if (!R) return null;
                    const { viewerUserId: z } = this.context,
                        { enableKeyboardShortcuts: q } = this.state,
                        K = a.Z.getOriginalTweet(R),
                        $ = { contextTweet: t, enableKeyboardShortcuts: q, forwardPivotInfo: i, hasModeratedReplies: s, handleReplyFilterInlineCalloutImpression: this._handleReplyFilterInlineCalloutImpression, showReplyFilterInlineCallout: v, innerForwardPivotInfo: d, viewerUser: L, promotedContent: g, promotedContentAdvertiser: D, quotedTweetTombstoneInfo: M, quoteTweetSocialContextProps: f, readerModeAvailable: k, socialContext: S, socialContextColor: x, topic: P, topicFollowPrompt: E, tweet: R, replyBadge: A, replyContext: I, rootTweetAuthorId: T, withActions: N, withAltTextBadge: !0, withInlineMedia: H, withSocialContext: W, nudges: b, innerNudges: c, translation: Z, userLanguage: U },
                        G = K.user.id_str === z,
                        V = !K.in_reply_to_status_id_str && G && !K.community_id_str,
                        Q = this._renderConversationControlsTooltip();
                    return r.createElement(
                        y.nO,
                        { data: this._getScribeData(R.retweeted_status || R, g, e.contextualScribeData) },
                        r.createElement(
                            _.Z,
                            { enabled: !!q, handlers: this._getShortcutKeyHandlers() },
                            this._renderLeftConversationBanner(),
                            r.createElement(
                                C.ZP,
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
                                    renderCurationActionMenu: this._getRenderCurationActionMenu(o, i?.displayType, i?.landingUrl, l, h, u, m, p, this._handleCaretClick, w, g, a.Z.getOriginalTweet(R), V, Q, O, F, B, U),
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
                    return o ? r.createElement(Be, null) : null;
                }
                _renderInlineReply() {
                    const { history: e, location: t, tweet: o, tweetId: n } = this.props,
                        { replyPressToggle: i } = this.state,
                        { viewerUserId: a } = this.context;
                    if (!o) return null;
                    return a && !this._shouldDisable(o, W.d.Reply) ? r.createElement(E.c_, null, (0, f.ZP)() ? r.createElement(K, { history: e, location: t, parentTweetId: n, replyPressToggle: i }) : r.createElement(b.Z, { container: d.Z, fab: this._fabReply(e), withoutBottomPadding: !0 })) : null;
                }
                _renderWithheldTweet() {
                    const { tweet: e } = this.props;
                    return !!e && r.createElement(w.Z, { displayTextRange: e.display_text_range, entities: e.withheld_entities || e.entities, lang: e.lang, text: e.withheld_text || e.text });
                }
                _renderReportedTombstone() {
                    const { tweet: e } = this.props;
                    if (e) {
                        const t = a.Z.getOriginalTweet(e),
                            o = (0, A.jD)(t.reportingVisibility);
                        return r.createElement(H.Z, { actionText: Ue, lang: e.lang, onClick: this._handleShowReportedTweet }, o);
                    }
                }
                _handleAsyncPromotedEvent(e, t) {
                    const { createLocalApiErrorHandler: o, log: n, promotedContent: r, tweet: i } = this.props;
                    if (i && r) {
                        const { disclosure_type: a, impression_id: s } = r;
                        n({ disclosureType: a, itemId: i.id_str, itemType: "tweet", params: { event: e, impression_id: s, ...t } }).catch(o());
                    }
                }
            }
            Ne.contextType = Z.rC;
            const Fe = (0, P.ZP)(ye(Ne)),
                Oe = (0, x.Z)(Fe),
                He = (0, x.Z)(Fe, { component: "tweet" });
        },
        886404: (e, t, o) => {
            o.d(t, { c_: () => l, lm: () => d, n6: () => s });
            var n = o(202784),
                r = o(321835);
            const i = { isShowHeaderReplyButton: !1, onInlineReplyOffScreen: () => {} },
                a = n.createContext(i);
            function s({ children: e }) {
                const [t, o] = n.useState(!1),
                    r = n.useCallback((e) => {
                        o(e);
                    }, []);
                return n.createElement(a.Provider, { value: { isShowHeaderReplyButton: t, onInlineReplyOffScreen: r } }, e);
            }
            function l({ children: e }) {
                const [t, o] = n.useState(!1),
                    { onInlineReplyOffScreen: i } = n.useContext(a),
                    s = n.useCallback(
                        ({ isOffscreen: e }) => {
                            t && e && i(e);
                        },
                        [t, i],
                    );
                return n.createElement(r.Z, { onImpression: () => o(!0), onOffscreenChange: s, testID: "inline_reply_offscreen" }, e);
            }
            function d({ children: e }) {
                const { isShowHeaderReplyButton: t } = n.useContext(a);
                return t ? e : null;
            }
        },
        392027: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                r = o(154003),
                i = o(392237);
            class a extends n.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: o, disabled: i, href: a, icon: l, label: d, onPress: c, renderMenu: h, style: u, testID: m } = this.props,
                        p = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, o);
                    return n.createElement(r.ZP, { "aria-label": e, backgroundColor: t, color: p, disabled: i, icon: l, link: a, onPress: c, renderMenu: h, size: "xLarge", style: [s.root, !d && s.iconOnly, u], testID: m }, d);
                }
            }
            a.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const s = i.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                l = a;
        },
        420412: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                r = o(325686),
                i = o(235902),
                a = o(885015),
                s = o(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: l } = i.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? d[e] : { backgroundColor: s.default.theme.colors[e] ?? s.default.theme.colors.borderColor };
                return o ? n.createElement(a.Z, { style: !t && d.root, withGutter: !0 }, n.createElement(r.Z, { style: d.gapColumn }, n.createElement(r.Z, { style: [d.gap, c] })), n.createElement(r.Z, { style: d.gapText }, o), n.createElement(r.Z, { style: d.gapColumn }, n.createElement(r.Z, { style: [d.gap, c] }))) : n.createElement(r.Z, { style: [!t && d.root, l() && d.rootRedesign, d.gap, c] });
            }
            const d = s.default.create((e) => ({ borderColor: { backgroundColor: s.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: s.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(807896),
                r = o(202784),
                i = o(325686),
                a = o(392237);
            class s extends r.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...a } = this.props,
                        s = r.Children.map(e, (e) => e && r.cloneElement(e, { style: [e.props.style, l.column, o && l.withGutterColumn] }));
                    return r.createElement(i.Z, (0, n.Z)({ style: [t, l.root, o && l.withGutter] }, a), s);
                }
            }
            s.defaultProps = { withGutter: !1 };
            const l = a.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                d = s;
        },
        662678: (e, t, o) => {
            o.d(t, { G: () => r, Z: () => n });
            o(136728);
            const n = function (e, t) {
                return r(e, t);
            };
            function r(e, t) {
                return e.reduce(
                    (o, n, r) => {
                        const i = t ? t(n, r, e) : !!n;
                        return i && o[0].push(n), !i && o[1].push(n), o;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.inlineTombstoneHandler~loader.tweetHandler.3c0e916a.js.map

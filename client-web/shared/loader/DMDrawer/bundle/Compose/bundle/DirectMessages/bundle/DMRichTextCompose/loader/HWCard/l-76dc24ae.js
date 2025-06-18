"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-76dc24ae"],
    {
        260137: (e, a, d) => {
            d.r(a), d.d(a, { HWCard: () => ta, default: () => oa });
            var r = d(807896),
                t = d(202784),
                o = d(276563),
                n = d(966582),
                l = d(542908),
                s = d(379869),
                i = d(284702),
                c = d(235902),
                u = d(103130),
                b = d(111677),
                _ = d.n(b),
                h = d(323265),
                p = d(123751),
                m = d(791632),
                D = d(462775),
                w = d(663550),
                k = d(329491),
                v = d(942893),
                C = d(500002),
                E = d(443781),
                f = d(288955),
                M = d(325686),
                A = d(682474),
                g = d(392237),
                S = d(290402),
                I = d(239036),
                y = d(702001),
                T = d(310453),
                x = d(71620),
                N = d(668214),
                P = d(836255);
            const R = (e, a) => a.media_tweet_id,
                G = (e, a) => {
                    const d = R(0, a);
                    return d ? P.Z.selectFetchStatus(e, d) : void 0;
                },
                L = (0, N.Z)()
                    .propsFromState(() => ({ videoTweetFetchStatus: G, videoTweet: P.Z.createHydratedTweetSelector(R) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, x.zr)("EVENT_CARD_CONTEXT"), fetchTweetIfNeeded: P.Z.fetchOneIfNeeded })),
                B = _().a1979464;
            class O extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderInlinePlayer = () => {
                            const { aspect_ratio: e, event_id: a, media_tweet_id: d, poster_image: o, preventPlayback: n, promotedContent: l, videoTweet: s } = this.props,
                                c = s?.extended_entities?.media?.length && s.extended_entities.media[0],
                                u = c && "photo" !== c.type ? c : null,
                                b = p.Z.forTweet(d);
                            return u ? t.createElement(T.Z, (0, r.Z)({}, i.Z.extractVideoProps(b, u, a, void 0, !0), { aspectRatio: e, poster: o, preventPlayback: n, promotedContent: l })) : null;
                        }),
                        (this._handleFetchTweet = () => {
                            const { createLocalApiErrorHandler: e, fetchTweetIfNeeded: a, media_tweet_id: d } = this.props;
                            I.N.preload(this.context.featureSwitches), a(d).catch(e(y.c));
                        });
                }
                componentDidMount() {
                    this._handleFetchTweet();
                }
                render() {
                    const { aspect_ratio: e, media_tweet_id: a, videoTweetFetchStatus: d } = this.props;
                    return a ? t.createElement(A.Z, { ratio: e }, t.createElement(M.Z, { style: g.default.absoluteFill }, t.createElement(S.Z, { "aria-label": B, fetchStatus: d, onRequestRetry: this._handleFetchTweet, render: this._renderInlinePlayer }))) : null;
                }
            }
            O.contextType = E.rC;
            const U = L(O);
            var Z = d(676145),
                V = d(775141),
                F = d(917799),
                W = d(276001),
                H = d(56519);
            const q = Object.freeze({ REQUEST: "rweb/CREATE_NOTE_/REQUEST", SUCCESS: "rweb/CREATE_NOTE_/SUCCESS", FAILURE: "rweb/CREATE_NOTE_/FAILURE" }),
                K =
                    (e, a) =>
                    (d, r, { api: t }) =>
                        F._O(d, { params: { id: a }, request: t.withEndpoint(V.Z).fetchBroadcast })({ actionTypes: q, context: "FETCH_BROADCAST", meta: {} }, (a) => {
                            if (a && a.entities && a.result && Array.isArray(a.result.broadcasts) && (0, Z.Z)(a.result.broadcasts[0])) {
                                const d = a.result.broadcasts[0],
                                    t = a.entities.broadcasts[d],
                                    o = W.Z.select(r(), e);
                                if (!o || !t) return [];
                                const n = J(t, o);
                                return [(0, H.dP)({ cards: { [e]: { ...n } } })];
                            }
                        }),
                J = (e, a) => {
                    const { pre_live_slate_url: d, scheduled_start_time: r, state: t, status: o, user: n, user_results: l } = e,
                        s = l?.result?.core?.name,
                        { binding_values: i } = a;
                    return { binding_values: { ...i, broadcast_state: { type: "STRING", string_value: t }, broadcast_title: { type: "STRING", string_value: o }, site: { type: "USER", user_value: { id_str: n } }, broadcaster_display_name: { type: "STRING", string_value: s }, broadcast_scheduled_start_time: { type: "STRING", string_value: r }, ...(d ? { broadcast_pre_live_slate: { type: "IMAGE", image_value: { url: d } } } : null) } };
                };
            var j = d(702166),
                z = d(694180),
                X = d(38562);
            const $ = (e, a) => {
                    const d = a.card ? a.card.url : a.unifiedCard?.card_uri;
                    return a.cardState || (d && j.MH(e, d)?.cardState);
                },
                Q = (e, a) => {
                    const d = a.card ? a.card.url : a.unifiedCard?.card_uri;
                    return a.initialCarouselIndex || (d ? j.MH(e, d)?.carouselIndex : void 0);
                },
                Y = (e, a) => (a.card ? o.default.getBindingValue(a.card.binding_values, "broadcast_id") : void 0),
                ee = (0, N.Z)()
                    .propsFromState(() => ({ cardState: $, initialCarouselIndex: Q, isDataSaverEnabled: X.IX, broadcastId: Y }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, x.zr)("CARD_CONTAINER"), requestCardUpdate: W.Z.fetchOne, log: z.cM, updateBroadcastCard: K, vote: W.Z.vote, remindMeButtonSubscribe: W.Z.eventSubscribe, remindMeButtonUnsubscribe: W.Z.eventUnsubscribe, updateCardState: j.dy }))
                    .withAnalytics({ element: "platform_card" });
            var ae = d(803810);
            const de = ({ action: e, buttonIndex: a, componentType: d, ucEventData: r, ucPromotedMetadata: t }) => {
                switch (e) {
                    case w.dx.CARD_URL_CLICK:
                        return { event: w.dx.CARD_URL_CLICK };
                    case w.dx.EMBEDDED_MEDIA:
                        return { event: w.dx.EMBEDDED_MEDIA };
                    case w.dx.INSTALL_APP:
                        return { event: w.dx.INSTALL_APP };
                    case "dm_button_click":
                        return { event: w.dx.CARD_URL_CLICK, engagement_metadata: JSON.stringify({ direct_message_card_details: { button_index: a } }) };
                    case "convo_button_click":
                        return { event: "card_click", engagement_metadata: JSON.stringify({ conversational_card_details: { button_index: a } }) };
                    case w.dx.POLL_CARD_VOTE:
                        return { event: w.dx.POLL_CARD_VOTE };
                    case w.dx.UNIFIED_CARD_COMPONENT_URL_CLICK:
                        return { event: "unified_card", uc_event: JSON.stringify({ event: "click", component: d, destination: "browser", ...(r && { slide_index: r.slide_index }) }), ...("button_group" === d || t ? { engagement_metadata: JSON.stringify({ uc_button_group_details: { button_index: a }, ...(t ? { uc_event_metadata: t } : null) }) } : null) };
                    case w.dx.UNIFIED_CARD_COMPONENT_APP_STORE_CLICK:
                        return { event: "unified_card", uc_event: JSON.stringify({ event: "click", component: "details" === d ? "app_store_details" : d, destination: "app_store" }), engagement_metadata: JSON.stringify({ uc_event_metadata: { ...t, app_event: w.dx.INSTALL_APP, ...(0, ae.Z)("button_group" === d ? { button_index: a } : null) } }) };
                    case w.dx.SWIPE_NEXT:
                    case w.dx.SWIPE_PREVIOUS:
                    case "unified_card_carousel_swipe_next":
                    case "unified_card_carousel_swipe_previous":
                        return { event: "unified_card", uc_event: JSON.stringify({ event: "unified_card_carousel_swipe_next" === e || e === w.dx.SWIPE_NEXT ? "swipe_next" : "swipe_previous", ...(0, ae.Z)(d ? { component: d } : null), ...r }), ...(t && { engagement_metadata: JSON.stringify({ uc_event_metadata: t }) }) };
                    case w.dx.SCREEN_NAME_CLICK:
                        return { event: w.dx.SCREEN_NAME_CLICK };
                    default:
                        return null;
                }
            };
            const re = (0, d(523561).Z)({
                loader: () =>
                    Promise.all([
                        d.e("icons.8"),
                        d.e("icons.15"),
                        d.e("icons.7"),
                        d.e("icons.3"),
                        d.e("icons.24"),
                        d.e("icons.12"),
                        d.e("icons.22"),
                        d.e("icons.2"),
                        d.e("icons.18"),
                        d.e("icons.9"),
                        d.e("icons.6"),
                        d.e("icons.1"),
                        d.e("modules.common-e907d115"),
                        d.e("modules.common-e019dbda"),
                        d.e("icons.14"),
                        d.e("icons.5"),
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
                        d.e("icons.21"),
                        d.e("icons.16"),
                        d.e("icons.28"),
                        d.e("icons.17"),
                        d.e("icons.27"),
                        d.e("icons.19"),
                        d.e("icons.0"),
                        d.e("icons.4"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06"),
                        d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-66c34182"),
                        d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-6af19649"),
                        d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-f16ea073"),
                        d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-8e0713f9"),
                        d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                        d.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                        d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        d.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                        d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3ec0edf6"),
                        d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                        d.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                        d.e("shared~loader.Dock~bundle.GrokDrawer~bundle.DockPeek~bundle.Grok~bundle.LiveEvent~loader.JetfuelFram-88dc685d"),
                        d.e("shared~loader.Dock~bundle.GrokDrawer~bundle.DockPeek~bundle.Grok~bundle.LiveEvent~loader.JetfuelFram-271d17b1"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        d.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-8d7085c2"),
                        d.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-53f39e22"),
                        d.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5"),
                        d.e("shared~bundle.Birdwatch~bundle.News~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandl"),
                        d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                        d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights~loader"),
                        d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b75711ed"),
                        d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-eadf0bc8"),
                        d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b6859af7"),
                        d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-856c9f2b"),
                        d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-30607449"),
                        d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-ff768435"),
                        d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b8a8a774"),
                        d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4e7553e3"),
                        d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-68027d49"),
                        d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b20998b4"),
                        d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-703d6ce2"),
                        d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-5f0ed14e"),
                        d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-bd66f825"),
                        d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-92ee7280"),
                        d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4cd14b6e"),
                        d.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-380ace89"),
                        d.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown~loader.TexBlock"),
                        d.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown"),
                        d.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-6107ac1a"),
                        d.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-63cb1cc4"),
                        d.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-bf286bb5"),
                        d.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-6ac0f1a5"),
                        d.e("shared~bundle.Grok~loader.Markdown-6107ac1a"),
                        d.e("shared~bundle.Grok~loader.Markdown-0ae4e026"),
                        d.e("shared~bundle.Grok~loader.Markdown-b16f5c14"),
                        d.e("shared~bundle.Grok~loader.Markdown-63cb1cc4"),
                        d.e("shared~bundle.Grok~loader.Markdown-d49ace54"),
                        d.e("shared~bundle.Grok~loader.Markdown-3277c3ad"),
                        d.e("shared~bundle.Grok~loader.Markdown-57c2c4a2"),
                        d.e("shared~bundle.Grok~loader.Markdown-6bf2d53b"),
                        d.e("shared~bundle.Grok~loader.Markdown-78667c23"),
                        d.e("shared~bundle.Grok~loader.Markdown-a244d277"),
                        d.e("shared~bundle.Grok~loader.Markdown-0d8ef87b"),
                        d.e("shared~bundle.Grok~loader.Markdown-26844252"),
                        d.e("shared~bundle.Grok~loader.Markdown-f29574de"),
                        d.e("shared~bundle.Grok~loader.Markdown-4ff64aa1"),
                        d.e("shared~bundle.GrokDrawer~bundle.Grok"),
                        d.e("bundle.Grok-6107ac1a"),
                        d.e("bundle.Grok-9f4db315"),
                        d.e("bundle.Grok-65f95f73"),
                        d.e("bundle.Grok-63cb1cc4"),
                        d.e("bundle.Grok-c69e90f3"),
                        d.e("bundle.Grok-16d5f187"),
                        d.e("bundle.Grok-38dc3b4a"),
                        d.e("bundle.Grok-1d830d6b"),
                        d.e("bundle.Grok-7bc92c09"),
                        d.e("bundle.Grok-f8a31592"),
                        d.e("bundle.Grok-7a6ce5c4"),
                        d.e("bundle.Grok-cebf58fc"),
                        d.e("bundle.Grok-29bebf45"),
                        d.e("bundle.Grok-29980aa8"),
                        d.e("bundle.Grok-6ac0f1a5"),
                        d.e("bundle.Grok-3c20ad5c"),
                    ]).then(d.bind(d, 348707)),
            });
            d(136728);
            var te = d(530525),
                oe = d(538619),
                ne = d(439592),
                le = d(731708),
                se = d(67369),
                ie = d(782261),
                ce = d(154003),
                ue = d(73416),
                be = d(818088),
                _e = d(518966),
                he = d(349972),
                pe = d(725516),
                me = d(533128),
                De = d(601576),
                we = d(977154);
            const ke = (e, a) => {
                    const { tweetId: d } = a;
                    return d ? P.Z.selectHydrated(e, d) : void 0;
                },
                ve = (0, N.Z)()
                    .propsFromState(() => ({ tweet: ke }))
                    .propsFromActions(() => ({ addToast: De.fz, createLocalApiErrorHandler: (0, x.zr)("BOOKMARK_BUTTON_CONTAINER"), onBookmark: P.Z.bookmark, onUnbookmark: P.Z.unbookmark, removeTweetsFromBookmarksTimeline: we.qk })),
                Ce = _().gb303814,
                Ee = _().h6f99ac4,
                fe = _().c2453318,
                Me = _().j08dd2d4,
                Ae = _().g1c463f6,
                ge = t.createElement(ue.default, null),
                Se = t.createElement(be.default, null),
                Ie = (0, C.ZP)(
                    ve((e) => {
                        const { addToast: a, createLocalApiErrorHandler: d, history: r, onBookmark: o, onUnbookmark: n, removeTweetsFromBookmarksTimeline: l, tweet: s } = e,
                            { featureSwitches: i, userClaims: c, viewerUserId: u } = t.useContext(E.rC),
                            b = (0, pe.z)(),
                            _ = (0, se.Zz)(),
                            h = s && !(0, me.$y)(i, s, me.d.AddToBookmarks);
                        if (!u || !s || !h) return null;
                        const p = ie.Z.getOriginalTweet(s),
                            { bookmarked: m } = s.retweeted_status ?? s,
                            D = () => {
                                const e = c?.isTrueAndEnabled("subscriptions_feature_1002");
                                a({ action: { label: fe, onAction: e ? w : k }, text: Ee });
                            },
                            w = () => {
                                o(p.id_str), r.push({ pathname: "/i/bookmarks/add", state: { tweet_id: p.id_str } });
                            },
                            k = () => {
                                r.push({ pathname: "/i/verified-get-verified", state: { variant: "BookmarkFolders" } });
                            },
                            v = () => {
                                l({ [p.id_str]: !0 }), a({ text: Ae });
                            },
                            C = (e) => {
                                b.scribeAction(e);
                            },
                            f = m
                                ? () => {
                                      n(p.id_str).then(v, d(he.j)), C("unbookmark");
                                  }
                                : () => {
                                      o(p.id_str).then(D, d(_e.h)), C("bookmark");
                                  },
                            M = g.default.isDarkMode() ? "translucentWhite35" : "gray200";
                        return t.createElement(ce.ZP, { "aria-label": m ? Me : Ce, borderColor: M, icon: m ? ge : Se, onClick: f, size: _ ? "medium" : "large" });
                    }),
                );
            var ye = d(632658),
                Te = d(23134);
            let xe = !1;
            const Ne = _().ic1e826e,
                Pe = _().c8b4bca0,
                Re = _().f5ea07ec,
                Ge = _().b62956aa,
                Le = _().b5298d92,
                Be = _().i3ea806a,
                Oe = _().fd00a76a,
                Ue = _().e0aa5848,
                Ze = _().g33f3050,
                Ve = _().d3f6b1a6,
                Fe = _().b0e322cc,
                We = _().cb8bddc8,
                He = _().cb8c547e,
                qe = _().d980e29f,
                Ke = _().f93bb3ee,
                Je = _().fc209bb7,
                je = h.ZP.isIOS() ? "ios" : h.ZP.isAndroid() ? "android" : "other",
                ze = {},
                Xe = (e) => {
                    if (ze[e]) return ze[e];
                    {
                        const a = te.Z.createLayoutCache();
                        return (ze[e] = a), a;
                    }
                },
                $e = (e) => (a, d, r, t) => {
                    const o = 0 === a.indexOf("card://"),
                        n = d || !o ? `${d || ""}${d && !o ? " " : ""}${o ? "" : a}` : null;
                    e.push({ pathname: "/compose/post", ...(n ? { query: { text: n } } : null), state: { convoCardData: { cardId: a, cardUrl: o ? a : null, nextState: r }, promotedContent: t } });
                };
            function Qe(e) {
                xe ||
                    ((xe = !0),
                    oe.Z.init(
                        (function ({ history: e, updateCardState: a }) {
                            return [
                                {
                                    composeDirectMessage: ({ messageText: a, recipient: d, welcomeMessageId: r }) => {
                                        const t = { recipient_id: d };
                                        r && (t.welcome_message_id = r), a && (t.text = a), e.push({ pathname: "/messages/compose", query: { ...t } });
                                    },
                                    composeTweet: $e(e),
                                    getCtaString: (e) => {
                                        switch (e) {
                                            case "play":
                                                return Ne;
                                            case "shop":
                                                return Pe;
                                            case "shopNow":
                                                return Re;
                                            case "book":
                                                return Ge;
                                            case "connect":
                                                return Le;
                                            case "order":
                                                return Be;
                                            case "open":
                                                return Oe;
                                            default:
                                                return Ue;
                                        }
                                    },
                                    getMessageMeString: (e) => {
                                        switch (e) {
                                            case "message_me_card_cta_1":
                                                return Ve;
                                            case "message_me_card_cta_3":
                                                return We;
                                            case "message_me_card_cta_4":
                                                return He;
                                            default:
                                                return Fe;
                                        }
                                    },
                                    getMobileOS: () => je,
                                    getDefaultVanityUrl: () => Ze,
                                    getPlayerCardIFrameUrl: (e) => `/i/cards-frame/${e}`,
                                    renderImage: ({ altText: e, cropCandidates: a, hideDataSaverOverlay: d, layoutCacheKey: r, onError: o, onLoad: n, quality: l, ratio: s, source: i }) => {
                                        const { height: c, uri: u, width: b } = i,
                                            _ = r ? Xe(r) : void 0,
                                            h = ({ useMinimumData: d }) => t.createElement(te.Z, { "aria-label": e, aspectMode: ne.Z.exact(s || 1), cropCandidates: a, image: { url: u, width: b || 1e3, height: c || 1e3 }, layoutCache: _, onError: o, onLoad: n, previewMode: d });
                                        return "preview" === l ? t.createElement(ye.Z, { acceptLabel: Ke, hideAcceptOverlay: d, renderContent: h, resourceId: u }) : h({ useMinimumData: !1 });
                                    },
                                    renderTwemojiText: (e) => t.createElement(le.ZP, null, e),
                                    renderStartingTimeLabel: (e) => {
                                        const a = new Date(parseInt(e, 10));
                                        return qe({ date: Je(a) });
                                    },
                                    storeCardState: (e, d) => a(e, { cardState: d }),
                                    storeCarouselIndex: (e, d) => a(e, { carouselIndex: d }),
                                    renderBookmarkButton: (e) => (e ? t.createElement(Ie, { tweetId: e }) : null),
                                    renderFollowButton: ({ promotedContent: e, userId: a }) => t.createElement(Te.C, { promotedContent: e, userId: a }),
                                },
                            ];
                        })(e)[0],
                    ));
            }
            const Ye = { wrapper: "card.wrapper", layoutLarge: { media: "card.layoutLarge.media", detail: "card.layoutLarge.detail" }, layoutSmall: { media: "card.layoutSmall.media", detail: "card.layoutSmall.detail" } },
                ea = Object.freeze({ IMAGE_APP: "image_app", IMAGE_CAROUSEL_APP: "image_carousel_app", IMAGE_CAROUSEL_WEBSITE: "image_carousel_website", IMAGE_MULTI_DEST_CAROUSEL_WEBSITE: "image_multi_dest_carousel_website", IMAGE_WEBSITE: "image_website", IMAGE_COLLECTION_WEBSITE: "image_collection_website", INVALID: "INVALID", MODEL_EXPLORER_WEBSITE: "model_explorer_website", VIDEO_APP: "video_app", VIDEO_CAROUSEL_APP: "video_carousel_app", VIDEO_CAROUSEL_WEBSITE: "video_carousel_website", VIDEO_WEBSITE: "video_website", MULTI_DEST_PRODUCT_CAROUSEL_WEBSITE: "multi_dest_product_carousel_website", TWITTER_ARTICLE: "twitter_article" }),
                aa = _().ac4c73d8,
                da = { objectFitVideo: "cover" },
                ra = new RegExp('"type":"video_multi_dest_carousel_website"|"type":"image_multi_dest_carousel_website"');
            class ta extends t.Component {
                constructor(e, a) {
                    super(e, a),
                        (this._compactCardDetailsEnabled = this.context.featureSwitches.isTrue("card_detail_compact_enabled")),
                        (this._playerCardDisabled = (0, D.L)("responsive_web_3rd_party_category_player_card", this.context.featureSwitches)),
                        (this._carouselEventDetailsState = void 0),
                        (this._openGrok = async () => {}),
                        (this._updateCarouselEventDetailsState = (e) => {
                            this._carouselEventDetailsState = e;
                        }),
                        (this._isEligibleGifVideo = (e) => {
                            const { promotedContent: a } = this.props;
                            if (Boolean(a) && "uc_video" === e.type) {
                                const a = e.video_info.duration_millis;
                                return !!a && a <= 1e4;
                            }
                            return !1;
                        }),
                        (this._getFeatureConfigurationContextProviderValue = () => {
                            const { featureSwitches: e } = this.context,
                                a = () => e.isTrue("unified_cards_dpa_metadata_enabled");
                            return { collectionAdsEnabled: () => e.isTrue("responsive_web_collection_ads_enabled"), shouldConvertCollectionToImageWebsiteCard: () => e.isTrue("unified_cards_collection_ads_convert_to_image_website_card"), explorerAdsEnabled: () => e.isTrue("responsive_web_explorer_ads_enabled"), grokShareEnabled: () => e.isTrue("responsive_web_grok_share_rendering_enabled"), continueInGrokEnabled: () => e.isTrue("responsive_web_grok_continue_in_grok_enabled"), isDeveloperBuiltCardEnabled: () => e.isTrue("responsive_web_enhance_cards_enabled"), dpaMetadataEnabled: a, dpaCtaEnabled: () => a() && e.isTrue("unified_cards_dpa_cta_button_enabled"), openGrok: this._openGrok, dpaPlaceholderMediaKeys: () => e.getArrayValue("unified_cards_dpa_placeholder_media_key"), nonSafariShouldUseCardCarouselV2: () => !h.ZP.isSafari() && e.isTrue("responsive_web_carousel_v2_cards_non_safari_enabled"), renderCompactCardDetail: () => e.isTrue("card_detail_compact_enabled") && !this._shouldUseLegacyWebsiteCard(), safariShouldUseCardCarouselV2: () => (h.ZP.isSafari() ? e.getStringValue("responsive_web_carousel_v2_cards_safari_variant", "control") : "control"), shouldPreconnectToCardDestinations: () => e.isTrue("responsive_web_card_preconnect_enabled") };
                        }),
                        (this._getCardState = () => {
                            const { card: e, cardState: a, history: d } = this.props;
                            return (0, m.HD)(d) ? (e?.name === o.default.CardNames.PLAYER ? "static" : d.location.state?.column?.showSmallMedia ? "condensed" : a || "default") : e && (e.name === o.default.CardNames.PLAYER && !o.default.isVineCard(e) && this._playerCardDisabled ? "static" : a);
                        }),
                        (this._shouldUseLegacyWebsiteCard = () => this.props.promotedContent?.adMetadataContainer?.renderLegacyWebsiteCard),
                        (this._updateBroadcastCard = ([e]) => {
                            const { broadcastId: a, createLocalApiErrorHandler: d, updateBroadcastCard: r } = this.props;
                            a && r(e, a).catch(d());
                        }),
                        (this._isLiveEventCard = () => {
                            const { card: e } = this.props;
                            return e?.name === o.default.CardNames.LIVE_EVENT;
                        }),
                        (this._handleRequestCardUpdate = () => {
                            const { viewerUserId: e } = this.context,
                                { card: a, createLocalApiErrorHandler: d, requestCardUpdate: r } = this.props;
                            return a && a.name === o.default.CardNames.BROADCAST
                                ? this._updateBroadcastCard
                                : e
                                  ? (e, { ...a }) => {
                                        r(e, a).catch(d());
                                    }
                                  : void 0;
                        }),
                        (this._handlePromotedLogEvent = ({ action: e, buttonIndex: a, componentType: d, isAuthRequired: r, ucEventData: t, ucPromotedMetadata: o }) => {
                            const { cardContext: n, createLocalApiErrorHandler: l, log: s, promotedContent: i } = this.props,
                                { viewerUserId: c } = this.context;
                            if ((!r || c) && i && n) {
                                const { disclosure_type: r, impression_id: c } = i;
                                s({ disclosureType: r, itemId: n.tweetId, itemType: w.bj.TWEET, params: { impression_id: c, ...de({ action: e, componentType: d, buttonIndex: a, ucPromotedMetadata: o, ucEventData: t }) } }).catch(l());
                            }
                        }),
                        (this._handleScribeEvent = ({ action: e, cardName: a, carouselEventDetails: d, clickContext: r, componentType: t, ctaIndex: s, element: i, isAuthRequired: c, isMessageMe: u }) => {
                            const { analytics: b, card: _, cardContext: h, isDataSaverEnabled: p, promotedContent: m } = this.props,
                                { viewerUserId: D } = this.context,
                                w = "unified_card_app_store_open_link" === e ? "open_link" : e,
                                k = n.Z.isPromoted(m) ? m?.impression_id : void 0;
                            if (c && !D) return;
                            const C = v.Z.getClickTrackingEmbedDetails(m, r);
                            if (w === l.bQ.CLICK_ID_EMBED && !C) return;
                            let E = i;
                            o.default.isFollowerCard(a) && (E = "user_recommendation");
                            const f = _ && this._isLiveEventCard() ? o.default.getBindingValue(_.binding_values, "event_id") : void 0,
                                M = { ...(E ? { element: E } : null), action: w, data: { ...(C && { click_tracking_embed_details: C }), items: [{ ...v.Z.getHWCardItem({ action: w, adFreeLabelEligible: !1, componentType: t, cardName: a, carouselEventDetails: d, clickContext: r, ctaIndex: s, impressionId: k, isDataSaverEnabled: p, isUCAppInstall: "unified_card_app_store_open_link" === e, liveEventId: f, tweetId: h.tweetId, tweetUserId: h.tweetUserId, ...(u ? { viewingUserId: D } : null) }) }] } };
                            b.scribe(M);
                        }),
                        (this._handlePollVote = ({ cardId: e, choice: a }) => {
                            const {
                                cardContext: { tweetId: d },
                                vote: r,
                            } = this.props;
                            r(e, { selectedIndex: a, tweetId: d });
                        }),
                        (this._handleEventReminderClick = ({ cardId: e, eventId: a, notificationId: d, remindMe: r }) => {
                            const { remindMeButtonSubscribe: t, remindMeButtonUnsubscribe: o } = this.props;
                            r ? t(e, a, { remind_me: r, notification_id: d }) : o(e, a, { remind_me: r, notification_id: d });
                        }),
                        (this._transformUrl = (e, a) => {
                            if (!a) return (0, k.b)(e, this.props.promotedContent?.click_tracking_info);
                            const { analytics: d, promotedContent: r } = this.props,
                                { action: t, component: o, element: n, page: l, section: s } = a;
                            return { pathname: (0, k.b)(e, r?.click_tracking_info), state: { referringScribeNamespace: { ...d.contextualScribeNamespace, ...(void 0 !== l ? { page: l } : null), ...(void 0 !== s ? { section: s } : null), ...(void 0 !== o ? { component: o } : null), ...(void 0 !== n ? { element: n } : null), ...(void 0 !== t ? { action: t } : null) } } };
                        }),
                        (this._getTypeForEntity = (e) => ("uc_video" === e.type ? (this._isEligibleGifVideo(e) && this.context.featureSwitches.isTrue("responsive_web_convert_card_video_to_gif_enabled") ? "animated_gif" : "video") : "animated_gif")),
                        (this._onClickVideoBackground = (e) => (e) => {
                            let a;
                            const d = this.props.unifiedCard;
                            let r;
                            try {
                                r = JSON.parse(this.props.card?.binding_values?.unified_card?.string_value || "{}");
                            } catch {
                                r = {};
                            }
                            const t = d?.card_type,
                                o = r.type;
                            if (this._compactCardDetailsEnabled && ("VideoWebsite" === t || o === ea.VIDEO_WEBSITE || "VideoCarouselWebsite" === t || o === ea.VIDEO_CAROUSEL_WEBSITE || "MixedMediaSingleDestCarouselWebsite" === t) && !this._shouldUseLegacyWebsiteCard()) {
                                const e = (d?.layout?.components || []).find((e) => "CardDetailsComponent" === e.__typename),
                                    t = Object.values(r?.destination_objects) || [];
                                a = e?.destination_obj?.url_data?.full_url || t[0]?.data?.url_data?.url || "";
                            }
                            if (a) {
                                const e = { originalUrl: (0, s.Z)(a), embeddedUrl: (0, s.Z)(this._transformUrl(a)) },
                                    d = "details",
                                    r = !1;
                                this._handleScribeEvent({ action: "open_link", componentType: d, cardName: this.props.card?.name || "", clickContext: e, isMessageMe: !1, isAuthRequired: r, carouselEventDetails: this._carouselEventDetailsState }), this._handlePromotedLogEvent({ action: "unified_card_component_url_click", componentType: d, isAuthRequired: r, ucPromotedMetadata: this._carouselEventDetailsState && { media_index: this._carouselEventDetailsState.currentSlideIndex || this._carouselEventDetailsState.currentMediaIndex } }), (a = this._transformUrl(a)), window.open(a, "_blank");
                            }
                        }),
                        (this._renderVideoPlayer = (e, a, d, o, n, l) => {
                            const {
                                    cardContext: { tweetId: s },
                                    preventVideoPlayback: c,
                                    promotedContent: u,
                                } = this.props,
                                { impression_id: b } = u || {};
                            if ("live_broadcast" === e.type) {
                                const { aspect_ratio: r, broadcast_id: o, content_id: n, poster_image: i, timecode: _ } = e;
                                return t.createElement(T.Z, { additionalBadges: l, "aria-label": aa, aspectRatio: d || r, displayOptions: da, forceFullPreviewImage: "suboptimal" === a, poster: i, preventPlayback: c, promotedContent: u, source: { contentId: n, variants: [], videoId: p.Z.forBroadcast(o, s, b) }, timecode: _, videoType: "video" });
                            }
                            if ("tweet_video" === e.type) return t.createElement(U, (0, r.Z)({}, e, { preventPlayback: c, promotedContent: u }));
                            if ("uc_video" === e.type || "animated_gif" === e.type) {
                                const { original_info: _, type: h, ...m } = e,
                                    { "aria-label": D, backgroundColor: w, primaryLabel: k, secondaryLabel: v, ...C } = i.Z.extractVideoProps(p.Z.forTweet(s || "", b), { ext_alt_text: null, ...m, original_info: { ..._ }, type: this._getTypeForEntity(e) }),
                                    E = { ...C };
                                return d && (E.aspectRatio = d), t.createElement(T.Z, (0, r.Z)({ additionalBadges: l, forceFullPreviewImage: "suboptimal" === a, shouldAutoplayWithoutMuting: o }, E, { "aria-label": aa, onClickBackground: this._onClickVideoBackground(e.id_str), preventPlayback: c, promotedContent: u }, n));
                            }
                            {
                                const { aspect_ratio: r, content_id: o, duration_ms: n, poster_image: i, variants: b, vmap_url: _ } = e,
                                    h = (b || []).filter((e) => !!e.src).map((e) => ({ content_type: e.type, url: e.src }));
                                return s ? t.createElement(T.Z, { additionalBadges: l, "aria-label": aa, aspectRatio: d || r, durationMs: n, forceFullPreviewImage: "suboptimal" === a, poster: i, preventPlayback: c, promotedContent: u, source: { contentId: o, variants: h, videoId: { type: "tweet", id: s }, vmapUrl: _ }, videoType: "vine" === e.type ? "vine" : "video" }) : null;
                            }
                        }),
                        Qe({ history: this.context.history, updateCardState: this.props.updateCardState });
                }
                _isMultiDestinationCarouselCard() {
                    const { card: e } = this.props;
                    if (!e) return !1;
                    const a = e?.binding_values?.unified_card?.string_value;
                    return !!a && ra.test(a);
                }
                render() {
                    const { card: e, cardContext: a, dmSentOrReceived: d, id: r, initialCarouselIndex: o, isDataSaverEnabled: n, isInteractive: l, onCardLinkClick: s, promotedContent: i, unifiedCard: b, withBorder: _, withBorderShadow: h, withDetail: p, withRoundBorder: m, withSquareBottomBorderRadius: D } = this.props;
                    return t.createElement(f.Z, null, (w) =>
                        t.createElement(
                            c.ZP.Provider,
                            { value: this._getFeatureConfigurationContextProviderValue() },
                            t.createElement(u.Z, { card: e, cardContext: a, cardState: this._getCardState(), dmSentOrReceived: d, id: r, initialCarouselIndex: o, isDataSaverEnabled: n, isInteractive: l, isPromoted: !!i, onCardLinkClick: s, onEventReminderClick: w(this._handleEventReminderClick), onPollVote: w(this._handlePollVote), onPromotedLogEvent: this._handlePromotedLogEvent, onScribeEvent: this._handleScribeEvent, promotedContent: i, renderVideoPlayer: this._renderVideoPlayer, requestCardUpdate: this._handleRequestCardUpdate(), testIDs: Ye, transformUrl: this._transformUrl, unifiedCard: b, updateCarouselEventDetailsState: this._updateCarouselEventDetailsState, withBorder: _, withBorderShadow: h, withDetail: p, withRoundBorder: m, withSquareBottomBorderRadius: D }),
                            t.createElement(re, {
                                onOpenGrokUpdate: (e) => {
                                    this._openGrok = e;
                                },
                            }),
                        ),
                    );
                }
            }
            ta.contextType = E.rC;
            const oa = (0, C.ZP)(ee(ta));
        },
        702001: (e, a, d) => {
            d.d(a, { c: () => o });
            var r = d(516951),
                t = d(615656);
            const o = { [t.ZP.OtherUserSuspended]: { customAction: r.Z }, [t.ZP.StatusViewForbidden]: { customAction: r.Z } };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-76dc24ae.c0f4e81a.js.map

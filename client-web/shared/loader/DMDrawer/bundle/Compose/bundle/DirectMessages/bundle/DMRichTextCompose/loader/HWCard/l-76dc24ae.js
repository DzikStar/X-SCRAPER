"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-76dc24ae"],
    {
        260137: (e, d, a) => {
            a.r(d), a.d(d, { HWCard: () => nd, default: () => td });
            var r = a(807896),
                n = a(202784),
                t = a(276563),
                o = a(966582),
                i = a(542908),
                l = a(379869),
                s = a(284702),
                c = a(235902),
                u = a(103130),
                b = a(674132),
                p = a.n(b),
                _ = a(323265),
                h = a(123751),
                m = a(791632),
                D = a(462775),
                S = a(663550),
                A = a(329491),
                w = a(942893),
                v = a(500002),
                f = a(443781),
                C = a(288955),
                y = a(325686),
                M = a(682474),
                g = a(392237),
                E = a(290402),
                k = a(239036),
                I = a(702001),
                T = a(310453),
                B = a(71620),
                P = a(668214),
                R = a(836255);
            const x = (e, d) => d.media_tweet_id,
                N = (e, d) => {
                    const a = x(0, d);
                    return a ? R.Z.selectFetchStatus(e, a) : void 0;
                },
                L = (0, P.Z)()
                    .propsFromState(() => ({ videoTweetFetchStatus: N, videoTweet: R.Z.createHydratedTweetSelector(x) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, B.zr)("EVENT_CARD_CONTEXT"), fetchTweetIfNeeded: R.Z.fetchOneIfNeeded })),
                G = p().a1979464;
            class O extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderInlinePlayer = () => {
                            const { aspect_ratio: e, event_id: d, media_tweet_id: a, poster_image: t, preventPlayback: o, promotedContent: i, videoTweet: l } = this.props,
                                c = l?.extended_entities?.media?.length && l.extended_entities.media[0],
                                u = c && "photo" !== c.type ? c : null,
                                b = h.Z.forTweet(a);
                            return u ? n.createElement(T.Z, (0, r.Z)({}, s.Z.extractVideoProps(b, u, d, void 0, !0), { aspectRatio: e, poster: t, preventPlayback: o, promotedContent: i })) : null;
                        }),
                        (this._handleFetchTweet = () => {
                            const { createLocalApiErrorHandler: e, fetchTweetIfNeeded: d, media_tweet_id: a } = this.props;
                            k.N.preload(this.context.featureSwitches), d(a).catch(e(I.c));
                        });
                }
                componentDidMount() {
                    this._handleFetchTweet();
                }
                render() {
                    const { aspect_ratio: e, media_tweet_id: d, videoTweetFetchStatus: a } = this.props;
                    return d ? n.createElement(M.Z, { ratio: e }, n.createElement(y.Z, { style: g.default.absoluteFill }, n.createElement(E.Z, { "aria-label": G, fetchStatus: a, onRequestRetry: this._handleFetchTweet, render: this._renderInlinePlayer }))) : null;
                }
            }
            O.contextType = f.rC;
            const U = L(O);
            var Z = a(676145),
                V = a(775141),
                F = a(917799),
                W = a(276001),
                H = a(56519);
            const q = Object.freeze({ REQUEST: "rweb/CREATE_NOTE_/REQUEST", SUCCESS: "rweb/CREATE_NOTE_/SUCCESS", FAILURE: "rweb/CREATE_NOTE_/FAILURE" }),
                K =
                    (e, d) =>
                    (a, r, { api: n }) =>
                        F._O(a, { params: { id: d }, request: n.withEndpoint(V.Z).fetchBroadcast })({ actionTypes: q, context: "FETCH_BROADCAST", meta: {} }, (d) => {
                            if (d && d.entities && d.result && Array.isArray(d.result.broadcasts) && (0, Z.Z)(d.result.broadcasts[0])) {
                                const a = d.result.broadcasts[0],
                                    n = d.entities.broadcasts[a],
                                    t = W.Z.select(r(), e);
                                if (!t || !n) return [];
                                const o = j(n, t);
                                return [(0, H.dP)({ cards: { [e]: { ...o } } })];
                            }
                        }),
                j = (e, d) => {
                    const { pre_live_slate_url: a, scheduled_start_time: r, state: n, status: t, user: o, user_results: i } = e,
                        l = i?.result?.legacy?.name,
                        { binding_values: s } = d;
                    return { binding_values: { ...s, broadcast_state: { type: "STRING", string_value: n }, broadcast_title: { type: "STRING", string_value: t }, site: { type: "USER", user_value: { id_str: o } }, broadcaster_display_name: { type: "STRING", string_value: l }, broadcast_scheduled_start_time: { type: "STRING", string_value: r }, ...(a ? { broadcast_pre_live_slate: { type: "IMAGE", image_value: { url: a } } } : null) } };
                };
            var z = a(702166),
                J = a(694180),
                X = a(38562);
            const $ = (e, d) => {
                    const a = d.card ? d.card.url : d.unifiedCard?.card_uri;
                    return d.cardState || (a && z.MH(e, a)?.cardState);
                },
                Q = (e, d) => {
                    const a = d.card ? d.card.url : d.unifiedCard?.card_uri;
                    return d.initialCarouselIndex || (a ? z.MH(e, a)?.carouselIndex : void 0);
                },
                Y = (e, d) => (d.card ? t.default.getBindingValue(d.card.binding_values, "broadcast_id") : void 0),
                ee = (0, P.Z)()
                    .propsFromState(() => ({ cardState: $, initialCarouselIndex: Q, isDataSaverEnabled: X.IX, broadcastId: Y }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, B.zr)("CARD_CONTAINER"), requestCardUpdate: W.Z.fetchOne, log: J.cM, updateBroadcastCard: K, vote: W.Z.vote, remindMeButtonSubscribe: W.Z.eventSubscribe, remindMeButtonUnsubscribe: W.Z.eventUnsubscribe, updateCardState: z.dy }))
                    .withAnalytics({ element: "platform_card" });
            var de = a(803810);
            const ae = ({ action: e, buttonIndex: d, componentType: a, ucEventData: r, ucPromotedMetadata: n }) => {
                switch (e) {
                    case S.dx.CARD_URL_CLICK:
                        return { event: S.dx.CARD_URL_CLICK };
                    case S.dx.EMBEDDED_MEDIA:
                        return { event: S.dx.EMBEDDED_MEDIA };
                    case S.dx.INSTALL_APP:
                        return { event: S.dx.INSTALL_APP };
                    case "dm_button_click":
                        return { event: S.dx.CARD_URL_CLICK, engagement_metadata: JSON.stringify({ direct_message_card_details: { button_index: d } }) };
                    case "convo_button_click":
                        return { event: "card_click", engagement_metadata: JSON.stringify({ conversational_card_details: { button_index: d } }) };
                    case S.dx.POLL_CARD_VOTE:
                        return { event: S.dx.POLL_CARD_VOTE };
                    case S.dx.UNIFIED_CARD_COMPONENT_URL_CLICK:
                        return { event: "unified_card", uc_event: JSON.stringify({ event: "click", component: a, destination: "browser", ...(r && { slide_index: r.slide_index }) }), ...("button_group" === a || n ? { engagement_metadata: JSON.stringify({ uc_button_group_details: { button_index: d }, ...(n ? { uc_event_metadata: n } : null) }) } : null) };
                    case S.dx.UNIFIED_CARD_COMPONENT_APP_STORE_CLICK:
                        return { event: "unified_card", uc_event: JSON.stringify({ event: "click", component: "details" === a ? "app_store_details" : a, destination: "app_store" }), engagement_metadata: JSON.stringify({ uc_event_metadata: { ...n, app_event: S.dx.INSTALL_APP, ...(0, de.Z)("button_group" === a ? { button_index: d } : null) } }) };
                    case S.dx.SWIPE_NEXT:
                    case S.dx.SWIPE_PREVIOUS:
                    case "unified_card_carousel_swipe_next":
                    case "unified_card_carousel_swipe_previous":
                        return { event: "unified_card", uc_event: JSON.stringify({ event: "unified_card_carousel_swipe_next" === e || e === S.dx.SWIPE_NEXT ? "swipe_next" : "swipe_previous", ...(0, de.Z)(a ? { component: a } : null), ...r }), ...(n && { engagement_metadata: JSON.stringify({ uc_event_metadata: n }) }) };
                    case S.dx.SCREEN_NAME_CLICK:
                        return { event: S.dx.SCREEN_NAME_CLICK };
                    default:
                        return null;
                }
            };
            const re = (0, a(523561).Z)({
                loader: () =>
                    Promise.all([
                        a.e("icons.5"),
                        a.e("icons.6"),
                        a.e("icons.25"),
                        a.e("icons.22"),
                        a.e("icons.9"),
                        a.e("icons.4"),
                        a.e("icons.15"),
                        a.e("icons.20"),
                        a.e("icons.7"),
                        a.e("icons.0"),
                        a.e("modules.common-e907d115"),
                        a.e("modules.common-e019dbda"),
                        a.e("icons.27"),
                        a.e("icons.17"),
                        a.e("icons.11"),
                        a.e("icons.3"),
                        a.e("icons.12"),
                        a.e("icons.13"),
                        a.e("icons.18"),
                        a.e("modules.audio-6107ac1a"),
                        a.e("modules.audio-b953418a"),
                        a.e("modules.audio-7c51e6a7"),
                        a.e("modules.audio-04db59e9"),
                        a.e("modules.audio-76583d6c"),
                        a.e("modules.audio-b7a8a5fb"),
                        a.e("modules.audio-51f6e793"),
                        a.e("modules.audio-e019dbda"),
                        a.e("modules.audio-262c94d4"),
                        a.e("modules.audio-c6fe4ea4"),
                        a.e("icons.24"),
                        a.e("icons.10"),
                        a.e("icons.8"),
                        a.e("icons.26"),
                        a.e("icons.19"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2f4a3d25"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aeee0c9e"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e4b9a405"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f17e8d44"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f39972b2"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-568e95f0"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1895c9ee"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8fe22a9e"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b2a4a903"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        a.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        a.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-012d0d8f"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-81ee9ca9"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        a.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-8d7085c2"),
                        a.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-53f39e22"),
                        a.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~bundle.Accoun"),
                        a.e("shared~bundle.Birdwatch~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandler"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-5c163be3"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-306954a6"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-0ec68f8f"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-536eaa00"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-0786ae68"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-f82e0cd2"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-f5b13972"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-8584f0c3"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-01309e43"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-398ef225"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-fc70f967"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-e43b6c88"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-b08eb7a4"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-5ba759f7"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-ae3eee7f"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-27545368"),
                        a.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown~loader.TexBlock"),
                        a.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown"),
                        a.e("bundle.Grok-e907d115"),
                        a.e("bundle.Grok-e96e9bea"),
                        a.e("bundle.Grok-0ae4e026"),
                        a.e("bundle.Grok-b16f5c14"),
                        a.e("bundle.Grok-9f4db315"),
                        a.e("bundle.Grok-e4e3d8bb"),
                        a.e("bundle.Grok-63cb1cc4"),
                        a.e("bundle.Grok-c69e90f3"),
                        a.e("bundle.Grok-ea2f266f"),
                        a.e("bundle.Grok-16d5f187"),
                        a.e("bundle.Grok-bf286bb5"),
                        a.e("bundle.Grok-78699f4a"),
                        a.e("bundle.Grok-38dc3b4a"),
                        a.e("bundle.Grok-1d830d6b"),
                        a.e("bundle.Grok-d49ace54"),
                        a.e("bundle.Grok-3277c3ad"),
                        a.e("bundle.Grok-57c2c4a2"),
                        a.e("bundle.Grok-f1a12957"),
                        a.e("bundle.Grok-78667c23"),
                        a.e("bundle.Grok-a244d277"),
                        a.e("bundle.Grok-0d8ef87b"),
                        a.e("bundle.Grok-1d41f45b"),
                        a.e("bundle.Grok-b8348d5d"),
                        a.e("bundle.Grok-7bc92c09"),
                        a.e("bundle.Grok-0f78f5a6"),
                        a.e("bundle.Grok-7a6ce5c4"),
                        a.e("bundle.Grok-cebf58fc"),
                        a.e("bundle.Grok-b328b613"),
                        a.e("bundle.Grok-9e9ee61b"),
                        a.e("bundle.Grok-6ac0f1a5"),
                        a.e("bundle.Grok-3c20ad5c"),
                    ]).then(a.bind(a, 348707)),
            });
            a(136728);
            var ne = a(530525),
                te = a(538619),
                oe = a(439592),
                ie = a(731708),
                le = a(67369),
                se = a(782261),
                ce = a(154003),
                ue = a(73416),
                be = a(818088),
                pe = a(518966),
                _e = a(349972),
                he = a(725516),
                me = a(533128),
                De = a(601576),
                Se = a(977154);
            const Ae = (e, d) => {
                    const { tweetId: a } = d;
                    return a ? R.Z.selectHydrated(e, a) : void 0;
                },
                we = (0, P.Z)()
                    .propsFromState(() => ({ tweet: Ae }))
                    .propsFromActions(() => ({ addToast: De.fz, createLocalApiErrorHandler: (0, B.zr)("BOOKMARK_BUTTON_CONTAINER"), onBookmark: R.Z.bookmark, onUnbookmark: R.Z.unbookmark, removeTweetsFromBookmarksTimeline: Se.qk })),
                ve = p().gb303814,
                fe = p().h6f99ac4,
                Ce = p().c2453318,
                ye = p().j08dd2d4,
                Me = p().g1c463f6,
                ge = n.createElement(ue.default, null),
                Ee = n.createElement(be.default, null),
                ke = (0, v.ZP)(
                    we((e) => {
                        const { addToast: d, createLocalApiErrorHandler: a, history: r, onBookmark: t, onUnbookmark: o, removeTweetsFromBookmarksTimeline: i, tweet: l } = e,
                            { featureSwitches: s, userClaims: c, viewerUserId: u } = n.useContext(f.rC),
                            b = (0, he.z)(),
                            p = (0, le.Zz)(),
                            _ = l && !(0, me.$y)(s, l, me.d.AddToBookmarks);
                        if (!u || !l || !_) return null;
                        const h = se.Z.getOriginalTweet(l),
                            { bookmarked: m } = l.retweeted_status ?? l,
                            D = () => {
                                const e = c?.isTrueAndEnabled("subscriptions_feature_1002");
                                d({ action: { label: Ce, onAction: e ? S : A }, text: fe });
                            },
                            S = () => {
                                t(h.id_str), r.push({ pathname: "/i/bookmarks/add", state: { tweet_id: h.id_str } });
                            },
                            A = () => {
                                r.push({ pathname: "/i/verified-get-verified", state: { variant: "BookmarkFolders" } });
                            },
                            w = () => {
                                i({ [h.id_str]: !0 }), d({ text: Me });
                            },
                            v = (e) => {
                                b.scribeAction(e);
                            },
                            C = m
                                ? () => {
                                      o(h.id_str).then(w, a(_e.j)), v("unbookmark");
                                  }
                                : () => {
                                      t(h.id_str).then(D, a(pe.h)), v("bookmark");
                                  },
                            y = g.default.isDarkMode() ? "translucentWhite35" : "gray200";
                        return n.createElement(ce.ZP, { "aria-label": m ? ye : ve, borderColor: y, icon: m ? ge : Ee, onClick: C, size: p ? "medium" : "large" });
                    }),
                );
            var Ie = a(632658),
                Te = a(23134);
            let Be = !1;
            const Pe = p().ic1e826e,
                Re = p().c8b4bca0,
                xe = p().f5ea07ec,
                Ne = p().b62956aa,
                Le = p().b5298d92,
                Ge = p().i3ea806a,
                Oe = p().fd00a76a,
                Ue = p().e0aa5848,
                Ze = p().g33f3050,
                Ve = p().d3f6b1a6,
                Fe = p().b0e322cc,
                We = p().cb8bddc8,
                He = p().cb8c547e,
                qe = p().d980e29f,
                Ke = p().f93bb3ee,
                je = p().fc209bb7,
                ze = _.ZP.isIOS() ? "ios" : _.ZP.isAndroid() ? "android" : "other",
                Je = {},
                Xe = (e) => {
                    if (Je[e]) return Je[e];
                    {
                        const d = ne.Z.createLayoutCache();
                        return (Je[e] = d), d;
                    }
                },
                $e = (e) => (d, a, r, n) => {
                    const t = 0 === d.indexOf("card://"),
                        o = a || !t ? `${a || ""}${a && !t ? " " : ""}${t ? "" : d}` : null;
                    e.push({ pathname: "/compose/post", ...(o ? { query: { text: o } } : null), state: { convoCardData: { cardId: d, cardUrl: t ? d : null, nextState: r }, promotedContent: n } });
                };
            function Qe(e) {
                Be ||
                    ((Be = !0),
                    te.Z.init(
                        (function ({ history: e, updateCardState: d }) {
                            return [
                                {
                                    composeDirectMessage: ({ messageText: d, recipient: a, welcomeMessageId: r }) => {
                                        const n = { recipient_id: a };
                                        r && (n.welcome_message_id = r), d && (n.text = d), e.push({ pathname: "/messages/compose", query: { ...n } });
                                    },
                                    composeTweet: $e(e),
                                    getCtaString: (e) => {
                                        switch (e) {
                                            case "play":
                                                return Pe;
                                            case "shop":
                                                return Re;
                                            case "shopNow":
                                                return xe;
                                            case "book":
                                                return Ne;
                                            case "connect":
                                                return Le;
                                            case "order":
                                                return Ge;
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
                                    getMobileOS: () => ze,
                                    getDefaultVanityUrl: () => Ze,
                                    getPlayerCardIFrameUrl: (e) => `/i/cards-frame/${e}`,
                                    renderImage: ({ altText: e, cropCandidates: d, hideDataSaverOverlay: a, layoutCacheKey: r, onError: t, onLoad: o, quality: i, ratio: l, source: s }) => {
                                        const { height: c, uri: u, width: b } = s,
                                            p = r ? Xe(r) : void 0,
                                            _ = ({ useMinimumData: a }) => n.createElement(ne.Z, { "aria-label": e, aspectMode: oe.Z.exact(l || 1), cropCandidates: d, image: { url: u, width: b || 1e3, height: c || 1e3 }, layoutCache: p, onError: t, onLoad: o, previewMode: a });
                                        return "preview" === i ? n.createElement(Ie.Z, { acceptLabel: Ke, hideAcceptOverlay: a, renderContent: _, resourceId: u }) : _({ useMinimumData: !1 });
                                    },
                                    renderTwemojiText: (e) => n.createElement(ie.ZP, null, e),
                                    renderStartingTimeLabel: (e) => {
                                        const d = new Date(parseInt(e, 10));
                                        return qe({ date: je(d) });
                                    },
                                    storeCardState: (e, a) => d(e, { cardState: a }),
                                    storeCarouselIndex: (e, a) => d(e, { carouselIndex: a }),
                                    renderBookmarkButton: (e) => (e ? n.createElement(ke, { tweetId: e }) : null),
                                    renderFollowButton: ({ promotedContent: e, userId: d }) => n.createElement(Te.C, { promotedContent: e, userId: d }),
                                },
                            ];
                        })(e)[0],
                    ));
            }
            const Ye = { wrapper: "card.wrapper", layoutLarge: { media: "card.layoutLarge.media", detail: "card.layoutLarge.detail" }, layoutSmall: { media: "card.layoutSmall.media", detail: "card.layoutSmall.detail" } },
                ed = Object.freeze({ IMAGE_APP: "image_app", IMAGE_CAROUSEL_APP: "image_carousel_app", IMAGE_CAROUSEL_WEBSITE: "image_carousel_website", IMAGE_MULTI_DEST_CAROUSEL_WEBSITE: "image_multi_dest_carousel_website", IMAGE_WEBSITE: "image_website", IMAGE_COLLECTION_WEBSITE: "image_collection_website", INVALID: "INVALID", MODEL_EXPLORER_WEBSITE: "model_explorer_website", VIDEO_APP: "video_app", VIDEO_CAROUSEL_APP: "video_carousel_app", VIDEO_CAROUSEL_WEBSITE: "video_carousel_website", VIDEO_WEBSITE: "video_website", MULTI_DEST_PRODUCT_CAROUSEL_WEBSITE: "multi_dest_product_carousel_website", TWITTER_ARTICLE: "twitter_article" }),
                dd = p().ac4c73d8,
                ad = { objectFitVideo: "cover" },
                rd = new RegExp('"type":"video_multi_dest_carousel_website"|"type":"image_multi_dest_carousel_website"');
            class nd extends n.Component {
                constructor(e, d) {
                    super(e, d),
                        (this._compactCardDetailsEnabled = this.context.featureSwitches.isTrue("card_detail_compact_enabled")),
                        (this._playerCardDisabled = (0, D.L)("responsive_web_3rd_party_category_player_card", this.context.featureSwitches)),
                        (this._carouselEventDetailsState = void 0),
                        (this._openGrok = async () => {}),
                        (this._updateCarouselEventDetailsState = (e) => {
                            this._carouselEventDetailsState = e;
                        }),
                        (this._isEligibleGifVideo = (e) => {
                            const { promotedContent: d } = this.props;
                            if (Boolean(d) && "uc_video" === e.type) {
                                const d = e.video_info.duration_millis;
                                return !!d && d <= 1e4;
                            }
                            return !1;
                        }),
                        (this._getFeatureConfigurationContextProviderValue = () => {
                            const { featureSwitches: e } = this.context,
                                d = () => e.isTrue("unified_cards_dpa_metadata_enabled");
                            return { collectionAdsEnabled: () => e.isTrue("responsive_web_collection_ads_enabled"), shouldConvertCollectionToImageWebsiteCard: () => e.isTrue("unified_cards_collection_ads_convert_to_image_website_card"), explorerAdsEnabled: () => e.isTrue("responsive_web_explorer_ads_enabled"), grokShareEnabled: () => e.isTrue("responsive_web_grok_share_rendering_enabled"), continueInGrokEnabled: () => e.isTrue("responsive_web_grok_continue_in_grok_enabled"), isDeveloperBuiltCardEnabled: () => e.isTrue("responsive_web_enhance_cards_enabled"), dpaMetadataEnabled: d, dpaCtaEnabled: () => d() && e.isTrue("unified_cards_dpa_cta_button_enabled"), openGrok: this._openGrok, dpaPlaceholderMediaKeys: () => e.getArrayValue("unified_cards_dpa_placeholder_media_key"), nonSafariShouldUseCardCarouselV2: () => !_.ZP.isSafari() && e.isTrue("responsive_web_carousel_v2_cards_non_safari_enabled"), renderCompactCardDetail: () => e.isTrue("card_detail_compact_enabled") && !this._shouldUseLegacyWebsiteCard(), safariShouldUseCardCarouselV2: () => (_.ZP.isSafari() ? e.getStringValue("responsive_web_carousel_v2_cards_safari_variant", "control") : "control"), shouldPreconnectToCardDestinations: () => e.isTrue("responsive_web_card_preconnect_enabled") };
                        }),
                        (this._getCardState = () => {
                            const { card: e, cardState: d, history: a } = this.props;
                            return (0, m.HD)(a) ? (e?.name === t.default.CardNames.PLAYER ? "static" : a.location.state?.column?.showSmallMedia ? "condensed" : d || "default") : e && (e.name === t.default.CardNames.PLAYER && !t.default.isVineCard(e) && this._playerCardDisabled ? "static" : d);
                        }),
                        (this._shouldUseLegacyWebsiteCard = () => this.props.promotedContent?.adMetadataContainer?.renderLegacyWebsiteCard),
                        (this._updateBroadcastCard = ([e]) => {
                            const { broadcastId: d, createLocalApiErrorHandler: a, updateBroadcastCard: r } = this.props;
                            d && r(e, d).catch(a());
                        }),
                        (this._isLiveEventCard = () => {
                            const { card: e } = this.props;
                            return e?.name === t.default.CardNames.LIVE_EVENT;
                        }),
                        (this._handleRequestCardUpdate = () => {
                            const { viewerUserId: e } = this.context,
                                { card: d, createLocalApiErrorHandler: a, requestCardUpdate: r } = this.props;
                            return d && d.name === t.default.CardNames.BROADCAST
                                ? this._updateBroadcastCard
                                : e
                                  ? (e, { ...d }) => {
                                        r(e, d).catch(a());
                                    }
                                  : void 0;
                        }),
                        (this._handlePromotedLogEvent = ({ action: e, buttonIndex: d, componentType: a, isAuthRequired: r, ucEventData: n, ucPromotedMetadata: t }) => {
                            const { cardContext: o, createLocalApiErrorHandler: i, log: l, promotedContent: s } = this.props,
                                { viewerUserId: c } = this.context;
                            if ((!r || c) && s && o) {
                                const { disclosure_type: r, impression_id: c } = s;
                                l({ disclosureType: r, itemId: o.tweetId, itemType: S.bj.TWEET, params: { impression_id: c, ...ae({ action: e, componentType: a, buttonIndex: d, ucPromotedMetadata: t, ucEventData: n }) } }).catch(i());
                            }
                        }),
                        (this._handleScribeEvent = ({ action: e, cardName: d, carouselEventDetails: a, clickContext: r, componentType: n, ctaIndex: l, element: s, isAuthRequired: c, isMessageMe: u }) => {
                            const { analytics: b, card: p, cardContext: _, isDataSaverEnabled: h, promotedContent: m } = this.props,
                                { viewerUserId: D } = this.context,
                                S = "unified_card_app_store_open_link" === e ? "open_link" : e,
                                A = o.Z.isPromoted(m) ? m?.impression_id : void 0;
                            if (c && !D) return;
                            const v = w.Z.getClickTrackingEmbedDetails(m, r);
                            if (S === i.bQ.CLICK_ID_EMBED && !v) return;
                            let f = s;
                            t.default.isFollowerCard(d) && (f = "user_recommendation");
                            const C = p && this._isLiveEventCard() ? t.default.getBindingValue(p.binding_values, "event_id") : void 0,
                                y = { ...(f ? { element: f } : null), action: S, data: { ...(v && { click_tracking_embed_details: v }), items: [{ ...w.Z.getHWCardItem({ action: S, adFreeLabelEligible: !1, componentType: n, cardName: d, carouselEventDetails: a, clickContext: r, ctaIndex: l, impressionId: A, isDataSaverEnabled: h, isUCAppInstall: "unified_card_app_store_open_link" === e, liveEventId: C, tweetId: _.tweetId, tweetUserId: _.tweetUserId, ...(u ? { viewingUserId: D } : null) }) }] } };
                            b.scribe(y);
                        }),
                        (this._handlePollVote = ({ cardId: e, choice: d }) => {
                            const {
                                cardContext: { tweetId: a },
                                vote: r,
                            } = this.props;
                            r(e, { selectedIndex: d, tweetId: a });
                        }),
                        (this._handleEventReminderClick = ({ cardId: e, eventId: d, notificationId: a, remindMe: r }) => {
                            const { remindMeButtonSubscribe: n, remindMeButtonUnsubscribe: t } = this.props;
                            r ? n(e, d, { remind_me: r, notification_id: a }) : t(e, d, { remind_me: r, notification_id: a });
                        }),
                        (this._transformUrl = (e, d) => {
                            if (!d) return (0, A.b)(e, this.props.promotedContent?.click_tracking_info);
                            const { analytics: a, promotedContent: r } = this.props,
                                { action: n, component: t, element: o, page: i, section: l } = d;
                            return { pathname: (0, A.b)(e, r?.click_tracking_info), state: { referringScribeNamespace: { ...a.contextualScribeNamespace, ...(void 0 !== i ? { page: i } : null), ...(void 0 !== l ? { section: l } : null), ...(void 0 !== t ? { component: t } : null), ...(void 0 !== o ? { element: o } : null), ...(void 0 !== n ? { action: n } : null) } } };
                        }),
                        (this._getTypeForEntity = (e) => ("uc_video" === e.type ? (this._isEligibleGifVideo(e) && this.context.featureSwitches.isTrue("responsive_web_convert_card_video_to_gif_enabled") ? "animated_gif" : "video") : "animated_gif")),
                        (this._onClickVideoBackground = (e) => (e) => {
                            let d;
                            const a = this.props.unifiedCard;
                            let r;
                            try {
                                r = JSON.parse(this.props.card?.binding_values?.unified_card?.string_value || "{}");
                            } catch {
                                r = {};
                            }
                            const n = a?.card_type,
                                t = r.type;
                            if (this._compactCardDetailsEnabled && ("VideoWebsite" === n || t === ed.VIDEO_WEBSITE || "VideoCarouselWebsite" === n || t === ed.VIDEO_CAROUSEL_WEBSITE || "MixedMediaSingleDestCarouselWebsite" === n) && !this._shouldUseLegacyWebsiteCard()) {
                                const e = (a?.layout?.components || []).find((e) => "CardDetailsComponent" === e.__typename),
                                    n = Object.values(r?.destination_objects) || [];
                                d = e?.destination_obj?.url_data?.full_url || n[0]?.data?.url_data?.url || "";
                            }
                            if (d) {
                                const e = { originalUrl: (0, l.Z)(d), embeddedUrl: (0, l.Z)(this._transformUrl(d)) },
                                    a = "details",
                                    r = !1;
                                this._handleScribeEvent({ action: "open_link", componentType: a, cardName: this.props.card?.name || "", clickContext: e, isMessageMe: !1, isAuthRequired: r, carouselEventDetails: this._carouselEventDetailsState }), this._handlePromotedLogEvent({ action: "unified_card_component_url_click", componentType: a, isAuthRequired: r, ucPromotedMetadata: this._carouselEventDetailsState && { media_index: this._carouselEventDetailsState.currentSlideIndex || this._carouselEventDetailsState.currentMediaIndex } }), (d = this._transformUrl(d)), window.open(d, "_blank");
                            }
                        }),
                        (this._renderVideoPlayer = (e, d, a, t, o, i) => {
                            const {
                                    cardContext: { tweetId: l },
                                    preventVideoPlayback: c,
                                    promotedContent: u,
                                } = this.props,
                                { impression_id: b } = u || {};
                            if ("live_broadcast" === e.type) {
                                const { aspect_ratio: r, broadcast_id: t, content_id: o, poster_image: s, timecode: p } = e;
                                return n.createElement(T.Z, { additionalBadges: i, "aria-label": dd, aspectRatio: a || r, displayOptions: ad, forceFullPreviewImage: "suboptimal" === d, poster: s, preventPlayback: c, promotedContent: u, source: { contentId: o, variants: [], videoId: h.Z.forBroadcast(t, l, b) }, timecode: p, videoType: "video" });
                            }
                            if ("tweet_video" === e.type) return n.createElement(U, (0, r.Z)({}, e, { preventPlayback: c, promotedContent: u }));
                            if ("uc_video" === e.type || "animated_gif" === e.type) {
                                const { original_info: p, type: _, ...m } = e,
                                    { "aria-label": D, backgroundColor: S, primaryLabel: A, secondaryLabel: w, ...v } = s.Z.extractVideoProps(h.Z.forTweet(l || "", b), { ext_alt_text: null, ...m, original_info: { ...p }, type: this._getTypeForEntity(e) }),
                                    f = { ...v };
                                return a && (f.aspectRatio = a), n.createElement(T.Z, (0, r.Z)({ additionalBadges: i, forceFullPreviewImage: "suboptimal" === d, shouldAutoplayWithoutMuting: t }, f, { "aria-label": dd, onClickBackground: this._onClickVideoBackground(e.id_str), preventPlayback: c, promotedContent: u }, o));
                            }
                            {
                                const { aspect_ratio: r, content_id: t, duration_ms: o, poster_image: s, variants: b, vmap_url: p } = e,
                                    _ = (b || []).filter((e) => !!e.src).map((e) => ({ content_type: e.type, url: e.src }));
                                return l ? n.createElement(T.Z, { additionalBadges: i, "aria-label": dd, aspectRatio: a || r, durationMs: o, forceFullPreviewImage: "suboptimal" === d, poster: s, preventPlayback: c, promotedContent: u, source: { contentId: t, variants: _, videoId: { type: "tweet", id: l }, vmapUrl: p }, videoType: "vine" === e.type ? "vine" : "video" }) : null;
                            }
                        }),
                        Qe({ history: this.context.history, updateCardState: this.props.updateCardState });
                }
                _isMultiDestinationCarouselCard() {
                    const { card: e } = this.props;
                    if (!e) return !1;
                    const d = e?.binding_values?.unified_card?.string_value;
                    return !!d && rd.test(d);
                }
                render() {
                    const { card: e, cardContext: d, dmSentOrReceived: a, id: r, initialCarouselIndex: t, isDataSaverEnabled: o, isInteractive: i, onCardLinkClick: l, promotedContent: s, unifiedCard: b, withBorder: p, withBorderShadow: _, withDetail: h, withRoundBorder: m, withSquareBottomBorderRadius: D } = this.props;
                    return n.createElement(C.Z, null, (S) =>
                        n.createElement(
                            c.ZP.Provider,
                            { value: this._getFeatureConfigurationContextProviderValue() },
                            n.createElement(u.Z, { card: e, cardContext: d, cardState: this._getCardState(), dmSentOrReceived: a, id: r, initialCarouselIndex: t, isDataSaverEnabled: o, isInteractive: i, isPromoted: !!s, onCardLinkClick: l, onEventReminderClick: S(this._handleEventReminderClick), onPollVote: S(this._handlePollVote), onPromotedLogEvent: this._handlePromotedLogEvent, onScribeEvent: this._handleScribeEvent, promotedContent: s, renderVideoPlayer: this._renderVideoPlayer, requestCardUpdate: this._handleRequestCardUpdate(), testIDs: Ye, transformUrl: this._transformUrl, unifiedCard: b, updateCarouselEventDetailsState: this._updateCarouselEventDetailsState, withBorder: p, withBorderShadow: _, withDetail: h, withRoundBorder: m, withSquareBottomBorderRadius: D }),
                            n.createElement(re, {
                                onOpenGrokUpdate: (e) => {
                                    this._openGrok = e;
                                },
                            }),
                        ),
                    );
                }
            }
            nd.contextType = f.rC;
            const td = (0, v.ZP)(ee(nd));
        },
        702001: (e, d, a) => {
            a.d(d, { c: () => t });
            var r = a(516951),
                n = a(615656);
            const t = { [n.ZP.OtherUserSuspended]: { customAction: r.Z }, [n.ZP.StatusViewForbidden]: { customAction: r.Z } };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-76dc24ae.6f52778a.js.map

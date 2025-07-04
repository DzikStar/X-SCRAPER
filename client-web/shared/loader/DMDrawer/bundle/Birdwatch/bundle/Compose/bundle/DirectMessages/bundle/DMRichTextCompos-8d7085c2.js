"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-8d7085c2"],
    {
        836938: (t, e, a) => {
            a.d(e, { Z: () => L, v: () => b });
            var i = a(202784),
                r = a(111677),
                n = a.n(r),
                _ = a(818088),
                s = a(530525),
                d = a(439592),
                o = a(154003);
            const l = n().ec72e2f8,
                c = n().d9d2a865,
                I = n().a8422cd5,
                T = n().ff1b8c17,
                u = n().d04488ef,
                p = n().b0b0cfb7,
                E = n().ea5247d5,
                S = n().b7b58677,
                A = n().g15f6870,
                m = n().d1ff55d8,
                g = n().g40f106c,
                D = n().j393e386,
                w = n().a771d32e,
                F = n().d8e9c24c,
                N = n().h2f9258f,
                v = n().cc5508a9,
                y = n().f4520a5d,
                O = i.createElement(_.default, null),
                b = {
                    composeDirectMessage: ({ messageText: t, recipient: e, welcomeMessageId: a }) => {},
                    composeTweet: (t, e, a) => {},
                    getCtaString: (t) => {
                        switch (t) {
                            case "play":
                                return c({ ttc_card_cta_play: "" });
                            case "shop":
                                return I({ ttc_card_cta_shop: "" });
                            case "shopNow":
                                return T({ ttc_card_cta_shop_now: "" });
                            case "book":
                                return u({ ttc_card_cta_book: "" });
                            case "connect":
                                return p({ ttc_card_cta_connect: "" });
                            case "order":
                                return E({ ttc_card_cta_order: "" });
                            case "open":
                                return S({ ttc_card_cta_open: "" });
                            case "learnMore":
                                return A;
                            default:
                                return m;
                        }
                    },
                    getMessageMeString: (t) => {
                        switch (t) {
                            case "message_me_card_cta_1":
                                return g;
                            case "message_me_card_cta_3":
                                return D;
                            case "message_me_card_cta_4":
                                return w;
                            default:
                                return F;
                        }
                    },
                    getMobileOS: () => "android",
                    getBroadcastLink: (t) => `https://x.com/i/broadcasts/${t}`,
                    getDefaultVanityUrl: () => "Web",
                    getEventLink: (t) => `https://x.com/i/events/${t}`,
                    getMediaDetailsLink: (t) => `${t}/photo/1`,
                    getMomentLink: (t) => `https://x.com/i/moments/${t}`,
                    getProfileLink: (t) => `https://x.com/i/user/${t}`,
                    getPlayerCardIFrameUrl: (t) => {},
                    renderImage: ({ altText: t, cropCandidates: e, layoutCacheKey: a, onError: r, onLoad: n, quality: _, ratio: o, source: l }) => {
                        const { height: c, uri: I, width: T } = l;
                        return i.createElement(s.Z, { "aria-label": t, aspectMode: d.Z.exact(o || 1), cropCandidates: e, image: { url: I, width: T || 1e3, height: c || 1e3 }, onError: r, onLoad: n });
                    },
                    renderTwemojiText: (t) => t,
                    renderRatingsLabel: ({ appNumRatings: t, appStarRating: e }) => N({ appStarRating: e, appNumRatings: t }),
                    renderStartingTimeLabel: (t) => {
                        return v({ timestampUTC: ((e = t), new Date(parseInt(e, 10)).toLocaleString("default", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })) });
                        var e;
                    },
                    renderTweetActionLabel: (t) => y({ action: t }),
                    shouldLimitTextToSingleLine: () => !1,
                    storeCardState: (t, e) => {},
                    storeCarouselIndex: (t, e) => {},
                    renderBookmarkButton: () => i.createElement(o.ZP, { icon: O, type: "primaryOutlined" }),
                    renderFollowButton: ({ userId: t }) => i.createElement(o.ZP, { link: `https://www.x.com/intent/user?user_id=${t}`, type: "primaryFilled" }, l),
                },
                L = {
                    init: (t) => {
                        for (const e in t) b[e] = t[e];
                    },
                };
        },
        366458: (t, e, a) => {
            a.d(e, { R: () => s, r: () => _ });
            var i = a(542908),
                r = a(85375),
                n = a(94909);
            const _ = (t) => (0, n.BY)(t, (t) => t("player_width").and("player_height").and("amplify_url_vmap").and("amplify_content_id")),
                s = ({ cardId: t, cardType: e, converterOptions: a, data: _ }) => {
                    const s = (0, n.FL)(_, "image_value", "player_image_original"),
                        d = parseInt((0, n.SI)(_, "string_value", "player_width"), 10) / parseInt((0, n.SI)(_, "string_value", "player_height"), 10),
                        o = (0, n.SI)(_, "string_value", "content_duration_seconds"),
                        l = (0, n.SI)(_, "string_value", "title"),
                        c = (0, n.SI)(_, "string_value", "description");
                    return { cardState: r.uW.DEFAULT, layout: { [r.uW.DEFAULT]: { size: "large" }, [r.uW.CONDENSED]: { size: "small" }, [r.uW.STATIC]: { size: "large" } }, card: { card_name: e, on_visibility: { scribe: "show" }, id: t, components: { [r.uW.DEFAULT]: l || c ? [r.Fw.MEDIA, r.Fw.DETAILS] : [r.Fw.MEDIA], [r.uW.STATIC]: l || c ? [r.Fw.MEDIA_STATIC, r.Fw.DETAILS_STATIC] : [r.Fw.MEDIA_STATIC] }, destinations: { [r.Fw.DESTINATION_STATIC]: { type: r._g.BROWSER, data: { url_data: { url: a.tweetPermalink || r.$H }, scribe: "open_link", promoted_log: i.YE.CARD_URL_CLICK } } }, media_entities: { [r.Fw.IMAGE_ENTITY]: (0, n.WW)(s || {}), [r.Fw.VIDEO_ENTITY]: { type: "video", aspect_ratio: d, content_id: (0, n.SI)(_, "string_value", "amplify_content_id"), ...(o ? { duration_ms: 1e3 * parseInt(o, 10) } : null), vmap_url: (0, n.SI)(_, "string_value", "amplify_url_vmap"), poster_image: s, publisher_id: (0, n.SI)(_, "string_value", "site") || a.tweetUserId, variants: [] } }, components_data: { [r.Fw.MEDIA]: { type: r.Qe.MEDIA, data: { id: r.Fw.VIDEO_ENTITY } }, [r.Fw.MEDIA_STATIC]: { type: r.Qe.MEDIA, data: { id: r.Fw.IMAGE_ENTITY, destination: r.Fw.DESTINATION_STATIC, overlay: { type: r._5.PLAY } } }, [r.Fw.DETAILS]: { type: r.Qe.DETAILS, data: { description: c ? { content: c } : void 0, title: l ? { content: l } : void 0 } }, [r.Fw.DETAILS_STATIC]: { type: r.Qe.DETAILS, data: { description: c ? { content: c } : void 0, destination: r.Fw.DESTINATION_STATIC, title: l ? { content: l } : void 0 } } } } };
                };
        },
        701805: (t, e, a) => {
            a.d(e, { F: () => d, V: () => s });
            var i = a(836938),
                r = a(542908),
                n = a(85375),
                _ = a(94909);
            const s = (t) => (0, _.BY)(t, (t) => t("card_url").and("title")),
                d = ({ cardId: t, cardType: e, data: a }) => {
                    const s = (0, _.FL)(a, "image_value", "thumbnail_original"),
                        d = (0, _.SI)(a, "string_value", "description"),
                        o = (0, _.SI)(a, "string_value", "app_star_rating"),
                        l = (0, _.SI)(a, "string_value", "app_num_ratings"),
                        c = o && l ? i.v.renderRatingsLabel({ appStarRating: o, appNumRatings: l }) : void 0,
                        I = (0, _.SI)(a, "string_value", "card_url");
                    return { cardState: n.uW.DEFAULT, layout: { [n.uW.DEFAULT]: { size: "small" }, [n.uW.CONDENSED]: { size: "small" } }, card: { card_name: e, on_visibility: { scribe: "show" }, id: t, components: { [n.uW.DEFAULT]: [n.Fw.MEDIA, n.Fw.DETAILS] }, destinations: { [n.Fw.DESTINATION]: { type: n._g.BROWSER, data: { url_data: { url: (0, _.SI)(a, "string_value", "card_url"), ...(c ? null : { vanity: I }) }, scribe: "open_link", promoted_log: r.YE.CARD_URL_CLICK } } }, media_entities: { ...(s ? { [n.Fw.IMAGE_ENTITY]: (0, _.WW)(s) } : null) }, components_data: { [n.Fw.MEDIA]: { type: n.Qe.MEDIA, data: { id: s ? n.Fw.IMAGE_ENTITY : null, aspect_ratio: 1, destination: n.Fw.DESTINATION } }, [n.Fw.DETAILS]: { type: n.Qe.DETAILS, data: { description: d ? { content: d } : void 0, destination: n.Fw.DESTINATION, footer: c, title: { content: (0, _.SI)(a, "string_value", "title") } } } } } };
                };
        },
        784444: (t, e, a) => {
            a.d(e, { K: () => T, Q: () => I });
            var i = a(392237),
                r = a(836938),
                n = a(801340),
                _ = a(542908),
                s = a(85375),
                d = a(94909);
            const o = { url: "https://pbs.twimg.com/lex/placeholder_live_nomargin.png", width: 1920, height: 1080 },
                l = "NOT_STARTED",
                c = "NotStarted",
                I = (t) => (0, d.BY)(t, (t) => t("card_url").and("broadcast_id").and("broadcast_title")),
                T = ({ cardId: t, cardType: e, data: a, users: I }) => {
                    const T = (0, d.N8)(a, "user_value", "site"),
                        u = T && I[T.id_str],
                        p = (0, d.SI)(a, "string_value", "broadcaster_display_name"),
                        E = (0, d.SI)(a, "string_value", "broadcast_state"),
                        S = E === l || E === c,
                        A = (0, d.FL)(a, "image_value", "broadcast_thumbnail_original"),
                        m = (0, d.FL)(a, "image_value", "broadcast_pre_live_slate") || o,
                        g = S ? m : A,
                        D = (0, d.SI)(a, "string_value", "broadcast_scheduled_start_time"),
                        w = S && D ? r.v.renderStartingTimeLabel(D) : void 0,
                        F = i.default.theme.aspectRatios.landscape,
                        N = Math.max(parseInt((0, d.SI)(a, "string_value", "broadcast_width"), 10) / parseInt((0, d.SI)(a, "string_value", "broadcast_height"), 10), 1);
                    return { cardState: s.uW.DEFAULT, layout: { [s.uW.DEFAULT]: { size: "large" }, [s.uW.CONDENSED]: { size: "small" }, [s.uW.STATIC]: { size: g ? "large" : "small" } }, card: { card_name: e, get_fetch_interval_for_updates: { [s.uW.DEFAULT]: () => ("NOT_STARTED" === E && parseInt(D, 10) <= Date.now() ? { ...n.oQ, initialPoll: !0 } : n.oQ) }, on_visibility: { scribe: "show" }, id: t, components: { [s.uW.DEFAULT]: [S ? s.Fw.MEDIA_SECONDARY : s.Fw.MEDIA, s.Fw.DETAILS], [s.uW.STATIC]: [s.Fw.MEDIA_SECONDARY, s.Fw.DETAILS] }, destinations: { [s.Fw.DESTINATION]: { type: s._g.BROADCAST, data: { broadcast_data: { id: (0, d.SI)(a, "string_value", "broadcast_id") }, scribe: "open_link", promoted_log: _.YE.CARD_URL_CLICK } } }, media_entities: { ...(g ? { [s.Fw.IMAGE_ENTITY]: (0, d.WW)(g) } : null), [s.Fw.VIDEO_ENTITY]: { type: "live_broadcast", aspect_ratio: N, broadcast_id: (0, d.SI)(a, "string_value", "broadcast_id"), content_id: (0, d.SI)(a, "string_value", "broadcast_media_key"), destination: s.Fw.DESTINATION, ...(g ? { poster_image: g } : null), timecode: (0, d.SI)(a, "string_value", "broadcast_timecode") || (0, d.SI)(a, "string_value", "broadcast_replay_edited_start_time") } }, components_data: { [s.Fw.MEDIA]: { type: s.Qe.MEDIA, data: { id: s.Fw.VIDEO_ENTITY, aspect_ratio: N } }, [s.Fw.MEDIA_SECONDARY]: { type: s.Qe.MEDIA, data: { id: g ? s.Fw.IMAGE_ENTITY : null, aspect_ratio: F, destination: s.Fw.DESTINATION, overlay: S ? (w ? { type: s._5.LABEL, text: w } : void 0) : { type: s._5.PLAY } } }, [s.Fw.DETAILS]: { type: s.Qe.DETAILS, data: { destination: s.Fw.DESTINATION, ...(u ? { attribution: u } : { category: { content: p } }), title: { content: (0, d.SI)(a, "string_value", "broadcast_title") } } } } } };
                };
        },
        480878: (t, e, a) => {
            a.d(e, { B: () => s, T: () => d });
            var i = a(836938),
                r = a(542908),
                n = a(85375),
                _ = a(94909);
            const s = (t) => (0, _.BY)(t, (t) => t("card_url").and("title")),
                d = ({ cardId: t, cardType: e, data: a }) => {
                    const s = (0, _.FL)(a, "image_value", "thumbnail_original"),
                        d = (0, _.SI)(a, "string_value", "description"),
                        o = (0, _.SI)(a, "string_value", "app_star_rating"),
                        l = (0, _.SI)(a, "string_value", "app_num_ratings"),
                        c = o && l ? i.v.renderRatingsLabel({ appStarRating: o, appNumRatings: l }) : void 0,
                        I = (0, _.SI)(a, "string_value", "card_url");
                    return { cardState: n.uW.DEFAULT, layout: { [n.uW.DEFAULT]: { size: "small" }, [n.uW.CONDENSED]: { size: "small" } }, card: { card_name: e, on_visibility: { scribe: "show" }, id: t, components: { [n.uW.DEFAULT]: [n.Fw.MEDIA, n.Fw.DETAILS] }, destinations: { [n.Fw.DESTINATION]: { type: n._g.BROWSER, data: { url_data: { url: (0, _.SI)(a, "string_value", "card_url"), ...(c ? null : { vanity: I }) }, scribe: "open_link", promoted_log: r.YE.CARD_URL_CLICK } } }, media_entities: { ...(s ? { [n.Fw.IMAGE_ENTITY]: (0, _.WW)(s) } : null) }, components_data: { [n.Fw.MEDIA]: { type: n.Qe.MEDIA, data: { id: s ? n.Fw.IMAGE_ENTITY : null, aspect_ratio: 1, destination: n.Fw.DESTINATION } }, [n.Fw.DETAILS]: { type: n.Qe.DETAILS, data: { description: d ? { content: d } : void 0, destination: n.Fw.DESTINATION, footer: c, title: { content: (0, _.SI)(a, "string_value", "title") } } } } } };
                };
        },
        610488: (t, e, a) => {
            a.d(e, { R: () => s, a: () => d });
            var i = a(836938),
                r = a(542908),
                n = a(85375),
                _ = a(94909);
            const s = (t) => (0, _.BY)(t, (t) => t("recipient").and("cta1").and("cta1_wm_id").and("image_original")),
                d = ({ cardId: t, cardType: e, converterOptions: a, data: s, users: d }) => {
                    const o = (0, _.FL)(s, "image_value", "image_original"),
                        l = a.tweetPermalink ? i.v.getMediaDetailsLink(a.tweetPermalink) : void 0,
                        c = (t) =>
                            [1, 2, 3, 4]
                                .map((e) => {
                                    const a = (0, _.SI)(s, "string_value", `cta${e}`),
                                        i = (0, _.SI)(s, "string_value", `cta${e}_wm_id`);
                                    return a && i ? { type: r.lW.DM, data: { cta: a, wm_id: i, destination: t, icon: "dm", index: e } } : null;
                                })
                                .filter(Boolean),
                        I = c(n.Fw.DESTINATION),
                        T = c(n.Fw.DESTINATION_STATIC),
                        u = (0, _.N8)(s, "user_value", "recipient"),
                        p = u && d[u.id_str],
                        E = u.id_str !== a.tweetUserId && p;
                    return { cardState: n.uW.DEFAULT, layout: { [n.uW.DEFAULT]: { size: "large" }, [n.uW.CONDENSED]: { size: "large" } }, card: { card_name: e, on_visibility: { scribe: "show" }, id: t, components: { [n.uW.DEFAULT]: [n.Fw.MEDIA, ...(E ? [n.Fw.DETAILS] : []), n.Fw.BUTTON_GROUP], [n.uW.STATIC]: [n.Fw.MEDIA_STATIC, ...(E ? [n.Fw.DETAILS] : []), n.Fw.BUTTON_GROUP_STATIC] }, destinations: { [n.Fw.DESTINATION]: { type: n._g.ACTION, data: { action_data: { persist: !1, type: "dm", recipient: u.id_str }, auth_required: !0, scribe: "click", promoted_log: r.YE.DM_BUTTON_CLICK } }, [n.Fw.DESTINATION_STATIC]: { type: n._g.BROWSER, data: { url_data: { url: a.tweetPermalink || n.$H }, scribe: "open_link", promoted_log: r.YE.CARD_URL_CLICK } }, ...(l ? { [n.Fw.DESTINATION_EMBEDDED_MEDIA]: { type: n._g.BROWSER, data: { url_data: { url: l }, scribe: "show", promoted_log: r.YE.EMBEDDED_MEDIA } } } : null) }, media_entities: { [n.Fw.IMAGE_ENTITY]: (0, _.WW)(o) }, components_data: { [n.Fw.MEDIA]: { type: n.Qe.MEDIA, data: { id: n.Fw.IMAGE_ENTITY, ...(l ? { destination: n.Fw.DESTINATION_EMBEDDED_MEDIA } : null) } }, [n.Fw.MEDIA_STATIC]: { type: n.Qe.MEDIA, data: { id: n.Fw.IMAGE_ENTITY, destination: n.Fw.DESTINATION_STATIC } }, ...(E ? { [n.Fw.DETAILS]: { type: n.Qe.DETAILS, data: { attribution: p } } } : null), [n.Fw.BUTTON_GROUP]: { type: n.Qe.BUTTON_GROUP, data: { buttons: I } }, [n.Fw.BUTTON_GROUP_STATIC]: { type: n.Qe.BUTTON_GROUP, data: { buttons: T } } } } };
                };
        },
        429555: (t, e, a) => {
            a.d(e, { C: () => T, q: () => u });
            var i = a(111677),
                r = a.n(i),
                n = a(392237),
                _ = a(801340),
                s = a(542908),
                d = a(85375),
                o = a(94909);
            const l = r().db44ff5c,
                c = r().c6000450;
            function I(t) {
                return { type: s.lW.REMINDER, data: { ...t, icon: "bell" } };
            }
            const T = (t) =>
                    (0, o.BY)(t, (t) =>
                        t("card_url")
                            .and("event_id")
                            .and((t) => t("event_title").or("author")),
                    ),
                u = ({ cardId: t, cardType: e, converterOptions: a, data: i, users: r }) => {
                    const T = (0, o.N8)(i, d.P2.User, "author"),
                        u = T && r[T.id_str],
                        p = (0, o.SI)(i, d.P2.String, "event_id"),
                        E = (0, o.SI)(i, d.P2.String, "event_category"),
                        S = (0, o.SI)(i, d.P2.String, "media_type"),
                        A = "broadcast" === S,
                        m = "video" === S,
                        g = (0, o.SI)(i, d.P2.String, "broadcast_id"),
                        D = Math.max(parseInt((0, o.SI)(i, d.P2.String, "broadcast_width"), 10) / parseInt((0, o.SI)(i, d.P2.String, "broadcast_height"), 10), 1),
                        w = (0, o.SI)(i, d.P2.String, "broadcast_media_key"),
                        F = (0, o.SI)(i, d.P2.String, "media_tweet_id"),
                        N = (0, o.FL)(i, d.P2.Image, "event_thumbnail"),
                        v = (0, o.FL)(i, d.P2.Image, "broadcast_thumbnail"),
                        y = A ? v : N,
                        O = A ? void 0 : [{ h: parseInt((0, o.SI)(i, d.P2.String, "event_thumbnail_media_size_crops_16x9_h"), 10), w: parseInt((0, o.SI)(i, d.P2.String, "event_thumbnail_media_size_crops_16x9_w"), 10), x: parseInt((0, o.SI)(i, d.P2.String, "event_thumbnail_media_size_crops_16x9_x"), 10), y: parseInt((0, o.SI)(i, d.P2.String, "event_thumbnail_media_size_crops_16x9_y"), 10) }],
                        b = (0, o.SI)(i, d.P2.String, "remind_me_notification_id"),
                        L = (0, o.kC)(i, d.P2.Boolean, "remind_me_toggle_visible") && !!b,
                        C = (0, o.kC)(i, d.P2.Boolean, "remind_me_subscribed"),
                        h = C ? c : l;
                    return {
                        cardState: d.uW.DEFAULT,
                        layout: { [d.uW.DEFAULT]: { size: "large" }, [d.uW.CONDENSED]: { size: "small" }, [d.uW.DATA_SAVER]: { size: "small" }, [d.uW.SECONDARY]: { size: "small", reverse: !0 }, [d.uW.STATIC]: { size: y ? "large" : "small" } },
                        card: {
                            card_name: e,
                            get_fetch_interval_for_updates: { [d.uW.DEFAULT]: _.gc, [d.uW.DATA_SAVER]: _.gc },
                            on_visibility: { scribe: "show" },
                            id: t,
                            components: { [d.uW.DEFAULT]: [A || m ? d.Fw.MEDIA : d.Fw.MEDIA_STATIC, d.Fw.DETAILS, d.Fw.BUTTON_GROUP], [d.uW.DATA_SAVER]: [d.Fw.MEDIA_STATIC, d.Fw.DETAILS, d.Fw.BUTTON_GROUP], [d.uW.SECONDARY]: [d.Fw.MEDIA_STATIC, d.Fw.DETAILS], [d.uW.STATIC]: [d.Fw.MEDIA_STATIC, d.Fw.DETAILS, d.Fw.BUTTON_GROUP_STATIC] },
                            destinations: { [d.Fw.DESTINATION]: { type: d._g.EVENT, data: { event_data: { id: p }, scribe: "open_link", promoted_log: s.YE.CARD_URL_CLICK } }, [d.Fw.DESTINATION_SECONDARY]: { type: d._g.ACTION, data: { action_data: { persist: !0, type: "reminder" }, auth_required: !0, scribe: "reminder", promoted_log: s.YE.CARD_URL_CLICK } }, [d.Fw.DESTINATION_STATIC]: { type: d._g.BROWSER, data: { url_data: { url: (a && a.tweetPermalink) || d.$H }, scribe: "open_link", promoted_log: s.YE.CARD_URL_CLICK } } },
                            media_entities: { ...(y ? { [d.Fw.IMAGE_ENTITY]: (0, o.WW)(y, O) } : null), [d.Fw.VIDEO_ENTITY]: A ? { type: "live_broadcast", aspect_ratio: D, broadcast_id: g, content_id: w, destination: d.Fw.DESTINATION, poster_image: y, timecode: (0, o.SI)(i, d.P2.String, "broadcast_replay_edited_start_time") } : { type: "tweet_video", aspect_ratio: n.default.theme.aspectRatios.landscape, media_tweet_id: F, event_id: p, poster_image: y } },
                            components_data: { [d.Fw.MEDIA]: { type: d.Qe.MEDIA, data: { id: d.Fw.VIDEO_ENTITY, aspect_ratio: A ? D : n.default.theme.aspectRatios.landscape } }, [d.Fw.MEDIA_STATIC]: { type: d.Qe.MEDIA, data: { id: d.Fw.IMAGE_ENTITY, aspect_ratio: n.default.theme.aspectRatios.landscape, destination: d.Fw.DESTINATION } }, [d.Fw.BUTTON_GROUP]: { type: d.Qe.BUTTON_GROUP, data: { ...(L ? { buttons: [I({ cta: h, destination: d.Fw.DESTINATION_SECONDARY, eventId: p, index: 0, isSelected: C, notificationId: b })] } : null) } }, [d.Fw.BUTTON_GROUP_STATIC]: { type: d.Qe.BUTTON_GROUP, data: { ...(L ? { buttons: [I({ cta: h, destination: d.Fw.DESTINATION_STATIC, eventId: p, index: 0, isSelected: C, notificationId: b })] } : null) } }, [d.Fw.DETAILS]: { type: d.Qe.DETAILS, data: { destination: d.Fw.DESTINATION, ...(u ? { attribution: u } : E ? { category: { content: E } } : null), title: { content: (0, o.SI)(i, d.P2.String, "event_title") } } } },
                        },
                    };
                };
        },
        499078: (t, e, a) => {
            a.d(e, { I: () => o, i: () => d });
            var i = a(836938),
                r = a(542908),
                n = a(85375),
                _ = a(94909);
            function s(t) {
                return { type: r.lW.DM, data: { ...t, icon: "dm" } };
            }
            const d = (t, e) => (0, _.BY)(t, (t) => t("recipient").and("cta")) && e.tweetUserId === (0, _.N8)(t, "user_value", "recipient").id_str,
                o = ({ cardId: t, cardType: e, converterOptions: a, data: d }) => {
                    const o = (0, _.SI)(d, "string_value", "default_composer_text"),
                        l = (0, _.SI)(d, "string_value", "welcome_message_id"),
                        c = (0, _.N8)(d, "user_value", "recipient");
                    return { cardState: n.uW.DEFAULT, layout: { [n.uW.DEFAULT]: { size: "large", chromeless: !0 }, [n.uW.CONDENSED]: { size: "large", chromeless: !0 }, [n.uW.STATIC]: { size: "large", chromeless: !0 } }, card: { card_name: e, on_visibility: { scribe: "message_me_show" }, id: t, components: { [n.uW.DEFAULT]: [n.Fw.BUTTON_GROUP], [n.uW.STATIC]: [n.Fw.BUTTON_GROUP_STATIC] }, destinations: { [n.Fw.DESTINATION]: { type: n._g.ACTION, data: { action_data: { persist: !1, type: "dm", recipient: c.id_str }, auth_required: !0, scribe: "message_me_click", promoted_log: r.YE.CARD_URL_CLICK } }, [n.Fw.DESTINATION_STATIC]: { type: n._g.BROWSER, data: { url_data: { url: a.tweetPermalink || n.$H }, scribe: "open_link", promoted_log: r.YE.CARD_URL_CLICK } } }, media_entities: {}, components_data: { [n.Fw.BUTTON_GROUP]: { type: n.Qe.BUTTON_GROUP, data: { buttons: [s({ composer_text: o, cta: i.v.getMessageMeString((0, _.SI)(d, "string_value", "cta")), index: 0, wm_id: l, destination: n.Fw.DESTINATION })] } }, [n.Fw.BUTTON_GROUP_STATIC]: { type: n.Qe.BUTTON_GROUP, data: { buttons: [s({ composer_text: o, cta: i.v.getMessageMeString((0, _.SI)(d, "string_value", "cta")), index: 0, wm_id: l, destination: n.Fw.DESTINATION_STATIC })] } } } } };
                };
        },
        168224: (t, e, a) => {
            a.d(e, { Z: () => _, l: () => s });
            var i = a(542908),
                r = a(85375),
                n = a(94909);
            const _ = (t) =>
                    (0, n.BY)(t, (t) =>
                        t("card_url")
                            .and((t) => t("photo_image").or("cover_format_media_url"))
                            .and("id")
                            .and((t) => t("title").or("author").or("subcategory_string")),
                    ),
                s = ({ cardId: t, cardType: e, data: a, users: _ }) => {
                    const s = (0, n.FL)(a, "image_value", "photo_image") || { url: (0, n.SI)(a, "string_value", "cover_format_media_url"), width: parseInt((0, n.SI)(a, "string_value", "cover_format_media_size_w"), 10) || 0, height: parseInt((0, n.SI)(a, "string_value", "cover_format_media_size_h"), 10) || 0 },
                        d = (0, n.N8)(a, "user_value", "author"),
                        o = d && _[d.id_str],
                        l = (0, n.SI)(a, "string_value", "title"),
                        c = (0, n.SI)(a, "string_value", "description"),
                        I = (0, n.SI)(a, "string_value", "subcategory_string");
                    return { cardState: r.uW.DEFAULT, layout: { [r.uW.DEFAULT]: { size: "small", reverse: !0 }, [r.uW.CONDENSED]: { size: "small", reverse: !0 } }, card: { card_name: e, on_visibility: { scribe: "show" }, id: t, components: { [r.uW.DEFAULT]: [r.Fw.MEDIA, r.Fw.DETAILS] }, destinations: { [r.Fw.DESTINATION]: { type: r._g.MOMENT, data: { moment_data: { moment: (0, n.SI)(a, "string_value", "id") }, scribe: "open_link", promoted_log: i.YE.CARD_URL_CLICK } } }, media_entities: { [r.Fw.IMAGE_ENTITY]: (0, n.WW)(s) }, components_data: { [r.Fw.MEDIA]: { type: r.Qe.MEDIA, data: { id: r.Fw.IMAGE_ENTITY, aspect_ratio: 1, overlay: { type: r._5.MOMENTS }, destination: r.Fw.DESTINATION } }, [r.Fw.DETAILS]: { type: r.Qe.DETAILS, data: { attribution: o, category: !o && I ? { content: I } : void 0, description: c ? { content: c } : void 0, destination: r.Fw.DESTINATION, title: l ? { content: l } : void 0 } } } } };
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-8d7085c2.40a4f21a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-53f39e22"],
    {
        507334: (e, t, a) => {
            a.d(t, { R: () => D, q: () => A });
            var i = a(202784),
                _ = a(111677),
                r = a.n(_),
                n = a(450681),
                l = a(966886),
                o = a(392237),
                I = a(794215),
                d = a(542908),
                s = a(85375),
                T = a(94909);
            const u = r().j3de54a8,
                E = r().a6a6ced4,
                c = r().dbc0c2f4,
                A = (e) => (0, T.BY)(e, (e) => e("card_url").and("note_title")),
                D = ({ cardId: e, cardType: t, converterOptions: a, data: _ }) => {
                    const { isLoggedIn: A } = a,
                        D = (0, T.SI)(_, "string_value", "card_url"),
                        S = (0, T.SI)(_, "string_value", "note_title"),
                        p = (0, T.SI)(_, "string_value", "note_description"),
                        w = (0, T.FL)(_, "image_value", "cover_image"),
                        N = (0, T.SI)(_, "string_value", "cover_image_aspect_ratio"),
                        F = N && parseFloat(N),
                        g = (0, T.SI)(_, "string_value", "author_screen_name"),
                        y = (0, T.SI)(_, "string_value", "author_name"),
                        v = { id_str: (0, T.SI)(_, "string_value", "author_user_id"), profile_image_url_https: (0, T.SI)(_, "string_value", "author_profile_image_url"), protected: (0, T.kC)(_, "boolean_value", "is_author_protected"), verified: (0, T.kC)(_, "boolean_value", "is_author_verified"), name: y, screen_name: g, is_blue_verified: (0, T.kC)(_, "boolean_value", "is_author_blue_verified") },
                        O = ((e) => {
                            switch (e) {
                                case "yellow0":
                                case "orange0":
                                case "red0":
                                case "magenta0":
                                case "plum0":
                                case "purple0":
                                case "blue0":
                                case "teal0":
                                case "green0":
                                case "gray0":
                                    return e;
                                default:
                                    return;
                            }
                        })((0, T.SI)(_, "string_value", "background_color")),
                        m = parseInt((0, T.SI)(_, "string_value", "read_time_minutes"), 10),
                        C = (0, T.SI)(_, "string_value", "published_time_ms");
                    let L;
                    if (m) {
                        const e = ((e) => {
                            const t = 60 * e * 1e3;
                            return { readTime: i.createElement(I.Z, { short: !0, timeMs: t }) };
                        })(m);
                        L = i.createElement(r().I18NFormatMessage, { $i18n: "dfde726b" }, e.readTime);
                    }
                    const R = O || o.default.isDarkMode() ? "gray900" : "gray700",
                        M = i.createElement(l.Z, { color: R, timestamp: Number(C) }),
                        Y = (0, n.Z)([M, ...(L ? [L] : [])]);
                    return { cardState: s.uW.DEFAULT, layout: { [s.uW.DEFAULT]: { size: "large" } }, card: { card_name: t, on_visibility: { scribe: "show" }, id: e, components: { [s.uW.DEFAULT]: [s.Fw.ATTRIBUTION, s.Fw.MEDIA, s.Fw.DETAILS, s.Fw.BUTTON_GROUP, s.Fw.BACKGROUND_COLOR] }, destinations: { [s.Fw.DESTINATION]: { type: s._g.BROWSER, data: { url_data: { url: D }, scribe: d.bQ.OPEN_LINK, promoted_log: d.YE.CARD_URL_CLICK } }, [s.Fw.DESTINATION_SECONDARY]: { type: s._g.BROWSER, data: { url_data: { url: D }, scribe: d.bQ.READ_NOTE_CLICK, promoted_log: d.YE.CARD_URL_CLICK } } }, media_entities: { ...(w ? { [s.Fw.IMAGE_ENTITY]: (0, T.WW)(w) } : null) }, components_data: { [s.Fw.MEDIA]: { type: s.Qe.MEDIA, data: { id: w ? s.Fw.IMAGE_ENTITY : null, aspect_ratio: F || 2.5, destination: s.Fw.DESTINATION } }, [s.Fw.DETAILS]: { type: s.Qe.DETAILS_WITH_MIDDOT_GROUP, data: { ...(p ? { description: { content: p } } : null), descriptionMaxLines: 3, descriptionTextColor: R, destination: s.Fw.DESTINATION, label: u, middotGroupContents: Y, middotGroupOnTop: !0, middotGroupSize: "large", middotGroupTextColor: R, showDescriptionOnSmallScreens: !0, title: { content: S }, titleMaxLines: 0, titleSize: "large", titleWeight: "heavy" } }, [s.Fw.ATTRIBUTION]: { type: s.Qe.ATTRIBUTION, data: { scribeAction: "avatar_click", user: v } }, [s.Fw.BUTTON_GROUP]: { type: s.Qe.BUTTON_GROUP, data: { buttons: [{ type: d.lW.GENERIC, data: { "aria-label": E, cta: E, destination: s.Fw.DESTINATION_SECONDARY, index: 0, styleType: "primaryFilled" } }, ...(A ? [{ type: d.lW.GENERIC, data: { buttonType: "bookmark", cta: c, index: 1 } }] : [])], layout: "horizontal" } }, [s.Fw.BACKGROUND_COLOR]: { type: s.Qe.BACKGROUND_COLOR, data: { backgroundColor: O } } } } };
                };
        },
        174568: (e, t, a) => {
            a.d(t, { w: () => l, y: () => n });
            var i = a(542908),
                _ = a(85375),
                r = a(94909);
            const n = (e) =>
                    (0, r.BY)(e, (e) =>
                        e("card_url")
                            .and("broadcast_width")
                            .and("broadcast_height")
                            .and("id")
                            .and((e) => e("broadcaster_twitter_id").or("title")),
                    ),
                l = ({ cardId: e, cardType: t, data: a, users: n }) => {
                    const l = (0, r.FL)(a, "image_value", "thumbnail_original"),
                        o = Math.max(parseInt((0, r.SI)(a, "string_value", "broadcast_width"), 10) / parseInt((0, r.SI)(a, "string_value", "broadcast_height"), 10), 1),
                        I = (0, r.SI)(a, "string_value", "broadcaster_twitter_id"),
                        d = I ? n[I] : void 0,
                        s = (0, r.SI)(a, "string_value", "description");
                    return { cardState: _.uW.DEFAULT, layout: { [_.uW.DEFAULT]: { size: "large" }, [_.uW.CONDENSED]: { size: "small" }, [_.uW.STATIC]: { size: l ? "large" : "small" } }, card: { card_name: t, on_visibility: { scribe: "show" }, id: e, components: { [_.uW.DEFAULT]: [_.Fw.MEDIA, _.Fw.DETAILS], [_.uW.STATIC]: [_.Fw.MEDIA_STATIC, _.Fw.DETAILS] }, destinations: { [_.Fw.DESTINATION]: { type: _._g.BROWSER, data: { url_data: { url: (0, r.SI)(a, "string_value", "card_url"), vanity: (0, r.SI)(a, "string_value", ["vanity_url", "card_url"]) }, scribe: "open_link", promoted_log: i.YE.CARD_URL_CLICK } } }, media_entities: { ...(l ? { [_.Fw.IMAGE_ENTITY]: (0, r.WW)(l) } : null), [_.Fw.VIDEO_ENTITY]: { type: "live_broadcast", aspect_ratio: o, broadcast_id: (0, r.SI)(a, "string_value", "id"), content_id: (0, r.SI)(a, "string_value", "broadcast_media_key"), destination: _.Fw.DESTINATION, ...(l ? { poster_image: l } : null), timecode: (0, r.SI)(a, "string_value", "timecode") || (0, r.SI)(a, "string_value", "replay_edited_start_time") } }, components_data: { [_.Fw.MEDIA]: { type: _.Qe.MEDIA, data: { id: _.Fw.VIDEO_ENTITY, aspect_ratio: o } }, [_.Fw.MEDIA_STATIC]: { type: _.Qe.MEDIA, data: { id: l ? _.Fw.IMAGE_ENTITY : null, destination: _.Fw.DESTINATION, overlay: { type: _._5.PLAY } } }, [_.Fw.DETAILS]: { type: _.Qe.DETAILS, data: { attribution: d, description: s ? { content: s } : void 0, destination: _.Fw.DESTINATION, title: I ? void 0 : { content: (0, r.SI)(a, "string_value", "title") } } } } } };
                };
        },
        931386: (e, t, a) => {
            a.d(t, { F: () => l, L: () => I });
            var i = a(836938),
                _ = a(542908),
                r = a(85375),
                n = a(94909);
            const l = (e) => ((0, n.qj)({ name: "player", binding_values: e }) ? (0, n.BY)(e, (e) => e("card_url").and("title").and("player_width").and("player_height").and("player_image_original").and("player_stream_url").and("player_stream_content_type")) : (0, n.BY)(e, (e) => e("card_url").and("player_url").and("player_height").and("player_width").and("title"))),
                o = (e, t, a) => {
                    const i = {};
                    return e && (i[r.Fw.IMAGE_ENTITY] = (0, n.WW)(e)), a && (i[r.Fw.IFRAME_ENTITY] = { type: "iframe", url: a, aspect_ratio: t }), i;
                },
                I = ({ cardId: e, cardType: t, converterOptions: a, data: l, users: I }) => {
                    const s = (0, n.FL)(l, "image_value", "player_image_original"),
                        T = (0, n.SI)(l, "string_value", "description"),
                        u = (0, n.SI)(l, "string_value", "player_url"),
                        E = a.tweetId ? i.v.getPlayerCardIFrameUrl(a.tweetId) : void 0,
                        c = parseInt((0, n.SI)(l, "string_value", "player_width"), 10) / parseInt((0, n.SI)(l, "string_value", "player_height"), 10),
                        A = [r.Fw.MEDIA, r.Fw.DETAILS],
                        D = [r.Fw.MEDIA_STATIC, r.Fw.DETAILS_SECONDARY];
                    return (0, n.qj)({ name: t, binding_values: l })
                        ? d({ cardId: e, cardType: t, data: l, converterOptions: a, users: I })
                        : {
                              cardState: r.uW.DEFAULT,
                              layout: { [r.uW.DEFAULT]: { size: "small" }, [r.uW.CONDENSED]: { size: "small" }, [r.uW.SECONDARY]: { size: "large" }, [r.uW.STATIC]: { size: "small" }, [r.uW.DATA_SAVER]: { size: "small" } },
                              card: {
                                  card_name: t,
                                  on_visibility: { scribe: "show" },
                                  id: e,
                                  components: { [r.uW.DEFAULT]: E ? A : D, [r.uW.SECONDARY]: [r.Fw.MEDIA_SECONDARY, r.Fw.DETAILS_SECONDARY], [r.uW.STATIC]: D, [r.uW.DATA_SAVER]: [r.Fw.MEDIA_STATIC, r.Fw.DETAILS_SECONDARY] },
                                  destinations: "www.youtube.com" === l.domain?.string_value ? { [r.Fw.DESTINATION]: { type: r._g.BROWSER, data: { url_data: { url: (0, n.SI)(l, "string_value", "card_url"), vanity: (0, n.SI)(l, "string_value", ["vanity_url", "card_url"]) }, scribe: "open_link", promoted_log: _.YE.CARD_URL_CLICK } }, [r.Fw.DESTINATION_SECONDARY]: { type: r._g.BROWSER, data: { url_data: { url: (0, n.SI)(l, "string_value", "card_url"), vanity: (0, n.SI)(l, "string_value", ["vanity_url", "card_url"]) }, scribe: "open_link", promoted_log: _.YE.CARD_URL_CLICK } } } : { [r.Fw.DESTINATION]: { type: r._g.ACTION, data: { action_data: { next_state: r.uW.SECONDARY, persist: !1, vanity: (0, n.SI)(l, "string_value", ["vanity_url", "card_url"]) }, scribe: "click", promoted_log: _.YE.CARD_URL_CLICK } }, [r.Fw.DESTINATION_SECONDARY]: { type: r._g.BROWSER, data: { url_data: { url: (0, n.SI)(l, "string_value", "card_url"), vanity: (0, n.SI)(l, "string_value", ["vanity_url", "card_url"]) }, scribe: "open_link", promoted_log: _.YE.CARD_URL_CLICK } } },
                                  media_entities: o(s, c, E),
                                  components_data: { [r.Fw.MEDIA]: { type: r.Qe.MEDIA, data: { id: s ? r.Fw.IMAGE_ENTITY : null, aspect_ratio: 1, overlay: { type: r._5.PLAY }, destination: u ? r.Fw.DESTINATION : r.Fw.DESTINATION_SECONDARY } }, [r.Fw.MEDIA_SECONDARY]: { type: r.Qe.MEDIA, data: { id: u ? r.Fw.IFRAME_ENTITY : null, aspect_ratio: c } }, [r.Fw.MEDIA_STATIC]: { type: r.Qe.MEDIA, data: { id: s ? r.Fw.IMAGE_ENTITY : null, aspect_ratio: 1, overlay: { type: r._5.PLAY }, destination: r.Fw.DESTINATION_SECONDARY } }, [r.Fw.DETAILS]: { type: r.Qe.DETAILS, data: { destination: u ? r.Fw.DESTINATION : r.Fw.DESTINATION_SECONDARY, ...(T ? { description: { content: T } } : null), title: { content: (0, n.SI)(l, "string_value", "title") } } }, [r.Fw.DETAILS_SECONDARY]: { type: r.Qe.DETAILS, data: { destination: r.Fw.DESTINATION_SECONDARY, ...(T ? { description: { content: T } } : null), title: { content: (0, n.SI)(l, "string_value", "title") } } } },
                              },
                          };
                },
                d = ({ cardId: e, cardType: t, converterOptions: a, data: i }) => {
                    const l = (0, n.FL)(i, "image_value", "player_image_original"),
                        o = (0, n.SI)(i, "string_value", "description"),
                        I = parseInt((0, n.SI)(i, "string_value", "player_width"), 10) / parseInt((0, n.SI)(i, "string_value", "player_height"), 10);
                    return { cardState: r.uW.DEFAULT, layout: { [r.uW.DEFAULT]: { size: "large" }, [r.uW.STATIC]: { size: "small" } }, card: { card_name: t, on_visibility: { scribe: "show" }, id: e, destinations: { [r.Fw.DESTINATION]: { type: r._g.BROWSER, data: { url_data: { url: (0, n.SI)(i, "string_value", "card_url"), vanity: (0, n.SI)(i, "string_value", ["vanity_url", "card_url"]) }, scribe: "open_link", promoted_log: _.YE.CARD_URL_CLICK } } }, components: { [r.uW.DEFAULT]: [r.Fw.MEDIA, r.Fw.DETAILS], [r.uW.STATIC]: [r.Fw.MEDIA_STATIC, r.Fw.DETAILS] }, media_entities: { [r.Fw.IMAGE_ENTITY]: (0, n.WW)(l), [r.Fw.VIDEO_ENTITY]: { type: "vine", aspect_ratio: I, content_id: (0, n.cT)(l.url), poster_image: l, publisher_id: (0, n.SI)(i, "string_value", "site") || a.tweetUserId, variants: [{ src: (0, n.SI)(i, "string_value", "player_stream_url"), type: (0, n.SI)(i, "string_value", "player_stream_content_type") }] } }, components_data: { [r.Fw.MEDIA]: { type: r.Qe.MEDIA, data: { id: r.Fw.VIDEO_ENTITY } }, [r.Fw.MEDIA_STATIC]: { type: r.Qe.MEDIA, data: { id: r.Fw.IMAGE_ENTITY, destination: r.Fw.DESTINATION, overlay: { type: r._5.PLAY } } }, [r.Fw.DETAILS]: { type: r.Qe.DETAILS, data: { destination: r.Fw.DESTINATION, ...(o ? { description: { content: o } } : null), title: { content: (0, n.SI)(i, "string_value", "title") } } } } } };
                };
        },
        174250: (e, t, a) => {
            a.d(t, { J: () => I, l: () => o });
            var i = a(836938),
                _ = a(801340),
                r = a(542908),
                n = a(85375),
                l = a(94909);
            const o = (e) => (0, l.BY)(e, (e) => e("choice1_label").and("choice2_label").and("end_datetime_utc").and("counts_are_final").and("api").and("card_url")),
                I = ({ cardId: e, cardType: t, converterOptions: a, data: o }) => {
                    const I = (0, l.FL)(o, "image_value", "image_original"),
                        d = (0, l.SI)(o, "string_value", "player_stream_url"),
                        s = (0, l.FL)(o, "image_value", "player_image_original"),
                        T = parseInt((0, l.SI)(o, "string_value", "player_width"), 10) / parseInt((0, l.SI)(o, "string_value", "player_height"), 10),
                        u = (0, l.SI)(o, "string_value", "content_duration_seconds"),
                        E = a.tweetPermalink ? i.v.getMediaDetailsLink(a.tweetPermalink) : void 0,
                        c = (0, l.kC)(o, "boolean_value", "counts_are_final"),
                        A = (0, l.SI)(o, "string_value", "selected_choice"),
                        D = (0, l.SI)(o, "string_value", "end_datetime_utc"),
                        S = {};
                    I && (S[n.Fw.IMAGE_ENTITY] = (0, l.WW)(I)), d && ((S[n.Fw.VIDEO_ENTITY] = { type: "video", aspect_ratio: T, content_id: (0, l.SI)(o, "string_value", "player_content_id") || (0, l.cT)(d), duration_ms: u ? 1e3 * parseInt(u, 10) : void 0, vmap_url: d, poster_image: s, publisher_id: (0, l.SI)(o, "string_value", "player_owner_id") || a.tweetUserId, variants: [{ src: (0, l.SI)(o, "string_value", "player_hls_url"), type: "application/x-mpegURL" }] }), (S[n.Fw.IMAGE_ENTITY_STATIC] = (0, l.WW)(s || {})));
                    const p = (e) => {
                        const t = [1, 2, 3, 4]
                            .map((t) => {
                                const a = (0, l.SI)(o, "string_value", `choice${t}_label`),
                                    i = (0, l.SI)(o, "string_value", `choice${t}_count`);
                                return a ? { index: t, cta: a, count: parseInt(i, 10) || 0, destination: e } : null;
                            })
                            .filter(Boolean);
                        return { type: "poll", data: { choices: t, isFinal: c, resultTextSize: "body", endDatetimeUtc: D, ...(A ? { selectedChoice: parseInt(A, 10) } : null), totalVotes: t.reduce((e, t) => e + t.count, 0) } };
                    };
                    return { layout: { [n.uW.DEFAULT]: { size: "large", chromeless: !0 }, [n.uW.CONDENSED]: { size: "large", chromeless: !0 } }, cardState: n.uW.DEFAULT, card: { id: e, card_name: t, on_visibility: { scribe: "show" }, get_fetch_interval_for_updates: { [n.uW.DEFAULT]: () => (c ? void 0 : (0, _.gc)()) }, components: { [n.uW.DEFAULT]: I || d ? [n.Fw.POLL, n.Fw.MEDIA] : [n.Fw.POLL], [n.uW.STATIC]: I || d ? [n.Fw.POLL_STATIC, n.Fw.MEDIA_STATIC] : [n.Fw.POLL_STATIC] }, components_data: { [n.Fw.POLL]: p(n.Fw.DESTINATION), [n.Fw.POLL_STATIC]: p(n.Fw.DESTINATION_STATIC), ...(I ? { [n.Fw.MEDIA]: { type: n.Qe.MEDIA, data: { id: n.Fw.IMAGE_ENTITY, ...(E ? { destination: n.Fw.DESTINATION_EMBEDDED_MEDIA } : null) } }, [n.Fw.MEDIA_STATIC]: { type: n.Qe.MEDIA, data: { id: n.Fw.IMAGE_ENTITY, ...(E ? { destination: n.Fw.DESTINATION_EMBEDDED_MEDIA } : null) } } } : d ? { [n.Fw.MEDIA]: { type: n.Qe.MEDIA, data: { id: n.Fw.VIDEO_ENTITY } }, [n.Fw.MEDIA_STATIC]: { type: n.Qe.MEDIA, data: { id: n.Fw.IMAGE_ENTITY_STATIC } } } : null) }, destinations: { [n.Fw.DESTINATION]: { type: n._g.ACTION, data: { action_data: { persist: !0, type: "vote" }, auth_required: !0, scribe: "vote", promoted_log: r.YE.POLL_CARD_VOTE } }, [n.Fw.DESTINATION_STATIC]: { type: n._g.BROWSER, data: { url_data: { url: a.tweetPermalink || n.$H }, scribe: "open_link", promoted_log: r.YE.CARD_URL_CLICK } }, ...(E ? { [n.Fw.DESTINATION_EMBEDDED_MEDIA]: { type: n._g.BROWSER, data: { url_data: { url: E }, scribe: "show", promoted_log: r.YE.EMBEDDED_MEDIA } } } : null) }, media_entities: S } };
                };
        },
        687415: (e, t, a) => {
            a.d(t, { g: () => o, o: () => l });
            var i = a(836938),
                _ = a(542908),
                r = a(85375),
                n = a(94909);
            const l = (e) => (0, n.BY)(e, (e) => e("card_url").and("thank_you_text").and("card_id").and("promo_image").and("cta_one").and("cta_one_tweet")),
                o = ({ cardId: e, cardType: t, converterOptions: a, data: l }) => {
                    const o = (0, n.SI)(l, "string_value", "thank_you_url"),
                        I = a.tweetPermalink ? i.v.getMediaDetailsLink(a.tweetPermalink) : void 0,
                        d = (0, n.FL)(l, "image_value", ["cover_promo_image", "promo_image"]),
                        s = (0, n.FL)(l, "image_value", "promo_image"),
                        T = (0, n.SI)(l, "string_value", "title"),
                        u = (e) =>
                            ["one", "two", "three", "four"]
                                .map((t, a) => {
                                    const r = (0, n.SI)(l, "string_value", `cta_${t}`),
                                        o = (0, n.SI)(l, "string_value", `cta_${t}_tweet`);
                                    return r && o ? { type: _.lW.COMPOSE, data: { icon: "compose", index: a, cta: i.v.renderTweetActionLabel(r), tweet: o, destination: e } } : null;
                                })
                                .filter(Boolean),
                        E = u(r.Fw.DESTINATION),
                        c = u(r.Fw.DESTINATION_STATIC);
                    return {
                        cardState: r.uW.DEFAULT,
                        layout: { [r.uW.DEFAULT]: { size: "large" }, [r.uW.CONDENSED]: { size: "small" }, [r.uW.SECONDARY]: { size: "large" } },
                        card: {
                            card_name: t,
                            on_visibility: { scribe: "show" },
                            id: e,
                            components: { default: [r.Fw.MEDIA, r.Fw.DETAILS, r.Fw.BUTTON_GROUP], secondary: [r.Fw.MEDIA_SECONDARY, r.Fw.DETAILS_SECONDARY], static: [r.Fw.MEDIA_STATIC, r.Fw.DETAILS_STATIC, r.Fw.BUTTON_GROUP_STATIC] },
                            destinations: { [r.Fw.DESTINATION]: { type: r._g.ACTION, data: { action_data: { next_state: r.uW.SECONDARY, persist: !0, type: "compose" }, auth_required: !0, scribe: "click", promoted_log: _.YE.CONVO_BUTTON_CLICK } }, ...(I ? { [r.Fw.DESTINATION_EMBEDDED_MEDIA]: { type: r._g.BROWSER, data: { url_data: { url: I }, scribe: "show", promoted_log: _.YE.EMBEDDED_MEDIA } } } : null), ...(o ? { [r.Fw.DESTINATION_SECONDARY]: { type: r._g.BROWSER, data: { url_data: { url: o, vanity: (0, n.SI)(l, "string_value", ["thank_you_vanity_url", "thank_you_shortened_url", "thank_you_url"]) }, scribe: "open_link", promoted_log: _.YE.CARD_URL_CLICK } } } : null), [r.Fw.DESTINATION_STATIC]: { type: r._g.BROWSER, data: { url_data: { url: a.tweetPermalink || r.$H }, scribe: "open_link", promoted_log: _.YE.CARD_URL_CLICK } } },
                            media_entities: { [r.Fw.IMAGE_ENTITY]: (0, n.WW)(d), [r.Fw.IMAGE_ENTITY_SECONDARY]: (0, n.WW)(s) },
                            components_data: { [r.Fw.MEDIA]: { type: r.Qe.MEDIA, data: { id: r.Fw.IMAGE_ENTITY, ...(I ? { destination: r.Fw.DESTINATION_EMBEDDED_MEDIA } : null) } }, [r.Fw.MEDIA_SECONDARY]: { type: r.Qe.MEDIA, data: { id: r.Fw.IMAGE_ENTITY_SECONDARY, destination: r.Fw.DESTINATION_SECONDARY } }, [r.Fw.MEDIA_STATIC]: { type: r.Qe.MEDIA, data: { id: r.Fw.IMAGE_ENTITY, destination: r.Fw.DESTINATION_STATIC } }, [r.Fw.DETAILS]: { type: r.Qe.DETAILS, data: { ...(T ? { title: { content: T } } : null) } }, [r.Fw.DETAILS_SECONDARY]: { type: r.Qe.DETAILS, data: { title: { content: (0, n.SI)(l, "string_value", "thank_you_text") }, ...(o ? { destination: r.Fw.DESTINATION_SECONDARY } : null) } }, [r.Fw.DETAILS_STATIC]: { type: r.Qe.DETAILS, data: { ...(T ? { title: { content: T } } : null) } }, [r.Fw.BUTTON_GROUP]: { type: r.Qe.BUTTON_GROUP, data: { buttons: E } }, [r.Fw.BUTTON_GROUP_STATIC]: { type: r.Qe.BUTTON_GROUP, data: { buttons: c } } },
                        },
                    };
                };
        },
        649964: (e, t, a) => {
            a.d(t, { G: () => o, T: () => l });
            var i = a(836938),
                _ = a(542908),
                r = a(85375),
                n = a(94909);
            const l = (e) => (0, n.BY)(e, (e) => e("card_url").and("thank_you_text").and("card_id").and("cta_one").and("cta_one_tweet").and("player_width").and("player_height").and("player_stream_url")),
                o = ({ cardId: e, cardType: t, converterOptions: a, data: l }) => {
                    const o = (0, n.SI)(l, "string_value", "thank_you_url"),
                        I = a.tweetPermalink ? i.v.getMediaDetailsLink(a.tweetPermalink) : void 0,
                        d = (0, n.FL)(l, "image_value", ["cover_player_image_original", "player_image_original"]),
                        s = (0, n.FL)(l, "image_value", "player_image_original"),
                        T = (0, n.FL)(l, "image_value", "cover_promo_image_original"),
                        u = (0, n.SI)(l, "string_value", "title"),
                        E = parseInt((0, n.SI)(l, "string_value", "cover_player_width"), 10) / parseInt((0, n.SI)(l, "string_value", "cover_player_height"), 10),
                        c = parseInt((0, n.SI)(l, "string_value", "player_width"), 10) / parseInt((0, n.SI)(l, "string_value", "player_height"), 10),
                        A = (e) =>
                            ["one", "two", "three", "four"]
                                .map((t, a) => {
                                    const r = (0, n.SI)(l, "string_value", `cta_${t}`),
                                        o = (0, n.SI)(l, "string_value", `cta_${t}_tweet`);
                                    return r && o ? { type: _.lW.COMPOSE, data: { icon: "compose", index: a, cta: i.v.renderTweetActionLabel(r), tweet: o, destination: e } } : null;
                                })
                                .filter(Boolean),
                        D = A(r.Fw.DESTINATION),
                        S = A(r.Fw.DESTINATION_STATIC),
                        p = (0, n.SI)(l, "string_value", "cover_player_stream_url"),
                        w = (0, n.SI)(l, "string_value", "player_stream_url"),
                        N = (0, n.SI)(l, "string_value", "player_hls_url"),
                        F = (0, n.N8)(l, "user_value", "site"),
                        g = (0, n.SI)(l, "string_value", "content_duration_seconds"),
                        y = (0, n.SI)(l, "string_value", "cover_content_duration_seconds");
                    return {
                        cardState: r.uW.DEFAULT,
                        layout: { [r.uW.DEFAULT]: { size: "large" }, [r.uW.CONDENSED]: { size: "small" }, [r.uW.SECONDARY]: { size: "large" }, [r.uW.STATIC]: { size: "large" } },
                        card: {
                            card_name: t,
                            on_visibility: { scribe: "show" },
                            id: e,
                            components: { default: [r.Fw.MEDIA, r.Fw.DETAILS, r.Fw.BUTTON_GROUP], secondary: [r.Fw.MEDIA_SECONDARY, r.Fw.DETAILS_SECONDARY], static: [r.Fw.MEDIA_STATIC, r.Fw.DETAILS_STATIC, r.Fw.BUTTON_GROUP_STATIC] },
                            destinations: { [r.Fw.DESTINATION]: { type: r._g.ACTION, data: { action_data: { next_state: r.uW.SECONDARY, persist: !0, type: "compose" }, auth_required: !0, scribe: "click", promoted_log: _.YE.CONVO_BUTTON_CLICK } }, ...(I ? { [r.Fw.DESTINATION_EMBEDDED_MEDIA]: { type: r._g.BROWSER, data: { url_data: { url: I }, scribe: "show", promoted_log: _.YE.EMBEDDED_MEDIA } } } : null), ...(o ? { [r.Fw.DESTINATION_SECONDARY]: { type: r._g.BROWSER, data: { url_data: { url: o, vanity: (0, n.SI)(l, "string_value", ["thank_you_vanity_url", "thank_you_shortened_url", "thank_you_url"]) }, scribe: "open_link", promoted_log: _.YE.CARD_URL_CLICK } } } : null), [r.Fw.DESTINATION_STATIC]: { type: r._g.BROWSER, data: { url_data: { url: a.tweetPermalink || r.$H }, scribe: "open_link", promoted_log: _.YE.CARD_URL_CLICK } } },
                            media_entities: { ...(p ? { [r.Fw.VIDEO_ENTITY]: { type: "video", aspect_ratio: E, content_id: (0, n.cT)(p), ...(y ? { duration_ms: 1e3 * parseInt(y, 10) } : null), vmap_url: p, poster_image: d, publisher_id: F ? F.id_str : a.tweetUserId } } : null), [r.Fw.VIDEO_ENTITY_SECONDARY]: { type: "video", aspect_ratio: c, content_id: (0, n.cT)(w), duration_ms: g ? 1e3 * parseInt(g, 10) : void 0, vmap_url: w, poster_image: s, publisher_id: F ? F.id_str : a.tweetUserId, ...(N ? { variants: [{ src: N, type: "application/x-mpegURL" }] } : null) }, [r.Fw.IMAGE_ENTITY]: (0, n.WW)(T || {}), [r.Fw.IMAGE_ENTITY_STATIC]: (0, n.WW)(s || {}) },
                            components_data: { [r.Fw.MEDIA]: { type: r.Qe.MEDIA, data: { id: p ? r.Fw.VIDEO_ENTITY : T ? r.Fw.IMAGE_ENTITY : r.Fw.VIDEO_ENTITY_SECONDARY, ...(!p && T && I ? { destination: r.Fw.DESTINATION_EMBEDDED_MEDIA } : null) } }, [r.Fw.MEDIA_SECONDARY]: { type: r.Qe.MEDIA, data: { id: r.Fw.VIDEO_ENTITY_SECONDARY } }, [r.Fw.MEDIA_STATIC]: { type: r.Qe.MEDIA, data: { id: s ? r.Fw.IMAGE_ENTITY_STATIC : r.Fw.IMAGE_ENTITY, destination: r.Fw.DESTINATION_STATIC, aspect_ratio: s ? void 0 : 1.91 } }, [r.Fw.DETAILS]: { type: r.Qe.DETAILS, data: { ...(u ? { title: { content: u } } : null) } }, [r.Fw.DETAILS_SECONDARY]: { type: r.Qe.DETAILS, data: { title: { content: (0, n.SI)(l, "string_value", "thank_you_text") }, ...(o ? { destination: r.Fw.DESTINATION_SECONDARY } : null) } }, [r.Fw.DETAILS_STATIC]: { type: r.Qe.DETAILS, data: { ...(u ? { title: { content: u } } : null) } }, [r.Fw.BUTTON_GROUP]: { type: r.Qe.BUTTON_GROUP, data: { buttons: D } }, [r.Fw.BUTTON_GROUP_STATIC]: { type: r.Qe.BUTTON_GROUP, data: { buttons: S } } },
                        },
                    };
                };
        },
        824562: (e, t, a) => {
            a.d(t, { N: () => l, a: () => n });
            var i = a(542908),
                _ = a(85375),
                r = a(94909);
            const n = (e) => (0, r.BY)(e, (e) => e("card_url").and("title")),
                l = ({ cardId: e, cardType: t, data: a }) => {
                    const n = (0, r.FL)(a, "image_value", "summary_photo_image_original"),
                        l = (0, r.SI)(a, "string_value", "description");
                    return { cardState: _.uW.DEFAULT, layout: { [_.uW.DEFAULT]: { size: n ? "large" : "small" }, [_.uW.CONDENSED]: { size: "small" } }, card: { card_name: t, on_visibility: { scribe: "show" }, id: e, components: { [_.uW.DEFAULT]: [_.Fw.MEDIA, _.Fw.DETAILS] }, destinations: { [_.Fw.DESTINATION]: { type: _._g.BROWSER, data: { url_data: { domain: (0, r.SI)(a, "string_value", ["domain", "vanity_url"]), url: (0, r.SI)(a, "string_value", "card_url"), vanity: (0, r.SI)(a, "string_value", ["vanity_url", "card_url"]) }, scribe: "open_link", promoted_log: i.YE.CARD_URL_CLICK } } }, media_entities: { ...(n ? { [_.Fw.IMAGE_ENTITY]: (0, r.WW)(n) } : null) }, components_data: { [_.Fw.MEDIA]: { type: _.Qe.MEDIA, data: { id: n ? _.Fw.IMAGE_ENTITY : null, aspect_ratio: n ? 1.91 : 1, destination: _.Fw.DESTINATION } }, [_.Fw.DETAILS]: { type: _.Qe.DETAILS, data: { destination: _.Fw.DESTINATION, ...(l ? { description: { content: l } } : null), title: { content: (0, r.SI)(a, "string_value", "title") } } } } } };
                };
        },
        163336: (e, t, a) => {
            a.d(t, { K: () => n, n: () => l });
            var i = a(542908),
                _ = a(85375),
                r = a(94909);
            const n = (e) => (0, r.BY)(e, (e) => e("card_url").and("title")),
                l = ({ cardId: e, cardType: t, data: a }) => {
                    const n = (0, r.FL)(a, "image_value", "thumbnail_image_original"),
                        l = (0, r.SI)(a, "string_value", "description");
                    return { cardState: _.uW.DEFAULT, layout: { [_.uW.DEFAULT]: { size: "small" }, [_.uW.CONDENSED]: { size: "small" } }, card: { card_name: t, on_visibility: { scribe: "show" }, id: e, components: { [_.uW.DEFAULT]: [_.Fw.MEDIA, _.Fw.DETAILS] }, destinations: { [_.Fw.DESTINATION]: { type: _._g.BROWSER, data: { url_data: { domain: (0, r.SI)(a, "string_value", ["domain", "vanity_url"]), url: (0, r.SI)(a, "string_value", "card_url"), vanity: (0, r.SI)(a, "string_value", ["vanity_url", "card_url"]) }, scribe: "open_link", promoted_log: i.YE.CARD_URL_CLICK } } }, media_entities: { ...(n ? { [_.Fw.IMAGE_ENTITY]: (0, r.WW)(n) } : null) }, components_data: { [_.Fw.MEDIA]: { type: _.Qe.MEDIA, data: { id: n ? _.Fw.IMAGE_ENTITY : null, aspect_ratio: 1, destination: _.Fw.DESTINATION } }, [_.Fw.DETAILS]: { type: _.Qe.DETAILS, data: { destination: _.Fw.DESTINATION, ...(l ? { description: { content: l } } : null), title: { content: (0, r.SI)(a, "string_value", "title") } } } } } };
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-53f39e22.ea94deca.js.map

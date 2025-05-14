(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-5b7ef534"],
    {
        2012: (e) => {
            e.exports = { queryId: "nABafPQwJmMY9s0k-Q_fHA", operationName: "DmAllSearchSlice", operationType: "query", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        305341: (e) => {
            e.exports = { queryId: "5zpY1dCR-8NyxQJS_CFJoQ", operationName: "DmGroupSearchSlice", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        802680: (e) => {
            e.exports = { queryId: "got07Z8fBS5_v4wU41eQig", operationName: "DmMutedTimeline", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        23110: (e) => {
            e.exports = { queryId: "xYSm8m5kJnzm_gFCn5GH-w", operationName: "DmPeopleSearchSlice", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        422282: (e) => {
            e.exports = { queryId: "2qKKYFQift8p5-J1k6kqxQ", operationName: "WriteEmailNotificationSettings", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        299560: (e) => {
            e.exports = { queryId: "JpjlNgn4sLGvS6tgpTzYBg", operationName: "ViewerEmailSettings", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        871176: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => a });
            i(136728);
            var n = i(506899),
                s = i(121363);
            const r = { count: 100 },
                a = ({ apiClient: e, featureSwitches: t }) => ({
                    fetchAddressBook: (t, i = {}) => e.get("contacts/addressbook", { ...r, ...t }, i).then((e) => (0, n.Fv)(e, { contacts: [s.Z] })),
                    uploadAddressBook(t, i) {
                        const { contacts: n, ...s } = t,
                            r = [];
                        for (let e = 0; e < n.length; e += 100) r.push(n.slice(e, e + 100));
                        return Promise.all(r.map((t) => e.post("contacts/upload_v2", { ...s, contacts: t }, {}, { ...i, "content-type": "application/json" })));
                    },
                });
        },
        919299: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => b });
            var n = i(506899),
                s = i(414742),
                r = i(703710),
                a = i(771613),
                o = i(2012),
                l = i.n(o),
                _ = i(305341),
                c = i.n(_),
                d = i(802680),
                u = i.n(d),
                p = i(23110),
                m = i.n(p),
                g = i(934309);
            const h = (e, t) => {
                    let i = !1;
                    if (t?.dmPeopleSearchSlice) i = !!t?.dmPeopleSearchSlice?.items?.length;
                    else if (t?.dmGroupSearchSlice) i = !!t?.dmGroupSearchSlice?.items?.length;
                    else if (t?.dmMessageSearchSlice) {
                        if ("DMMessageSlice" !== t?.dmMessageSearchSlice.__typename) return !0;
                        i = !!t?.dmMessageSearchSlice?.items?.length;
                    }
                    return !i && (0, s.jB)(e);
                },
                f = (e) => {
                    const t = e.items?.map((e) => e?.dm_convo_search);
                    return (0, n.Fv)(t, [a.ZP]);
                },
                b = ({ apiClient: e, featureSwitches: t }) => ({
                    fetchDMAllSearch: (t) =>
                        t
                            ? e.graphQL(l(), { count: t?.count, query: t.query, withAttachments: !0, withConversationQueryHighlights: !0, withMessageQueryHighlights: !0, withMessages: !0 }, h).then((e) => {
                                  const t = e?.dmGroupSearchSlice,
                                      i = e?.dmMessageSearchSlice,
                                      s = e?.dmPeopleSearchSlice;
                                  let r = g.d;
                                  if (t) {
                                      const { entities: e, result: i } = f(t),
                                          n = t.items?.find((e) => e?.highlighting?.query_tokens),
                                          s = n && t.items?.map((e) => e?.highlighting?.query_tokens);
                                      r = { result: r?.result.concat({ groupData: { result: i, highlightingTokens: s } }), entities: e };
                                  }
                                  if (s) {
                                      const { entities: e, result: t } = f(s),
                                          i = s.items?.find((e) => e?.highlighting?.query_tokens),
                                          n = i && s.items?.map((e) => e?.highlighting?.query_tokens);
                                      r = { ...r, result: r?.result.concat({ peopleData: { result: t, highlightingTokens: n } }), entities: { ...r?.entities, ...e } };
                                  }
                                  if (i && "DMMessageSlice" === i?.__typename) {
                                      const e = i?.items,
                                          t = (0, n.Fv)(e, [a.JJ]),
                                          s = e?.map((e) => e?.dm_event?.legacy?.conversation),
                                          o = e?.find((e) => e?.highlighting?.query_tokens),
                                          l = o && e?.map((e) => e?.highlighting?.query_tokens),
                                          { entities: _, result: c } = (0, n.Fv)(s, [a.ZP]);
                                      r = { ...r, result: r?.result?.concat({ messageData: { conversationIds: c, entryIds: t?.result, highlightingTokens: l } }), entities: { ...t?.entities, conversations: { ...r?.entities?.conversations, ..._?.conversations } } };
                                  }
                                  return r;
                              })
                            : Promise.resolve(g.d),
                    fetchDMGroupSearch: (t) =>
                        t
                            ? e.graphQL(c(), { ...t, withConversationQueryHighlights: !0 }, h).then((e) => {
                                  const t = e?.dmGroupSearchSlice;
                                  if (t) {
                                      const { entities: e, result: i } = f(t);
                                      return { result: i, entities: e, slice_info: t.sliceInfo };
                                  }
                                  return g.d;
                              })
                            : Promise.resolve(g.d),
                    fetchDMPeopleSearch: (t) =>
                        t
                            ? e.graphQL(m(), { ...t, withConversationQueryHighlights: !0 }, h).then((e) => {
                                  const t = e?.dmPeopleSearchSlice;
                                  if (t) {
                                      const { entities: e, result: i } = f(t);
                                      return { result: i, entities: e, slice_info: t.sliceInfo };
                                  }
                                  return g.d;
                              })
                            : Promise.resolve(g.d),
                    fetchDMMutedUsers: ({ count: i, cursor: n }) =>
                        e
                            .graphQL(
                                u(),
                                { count: i, cursor: n, includePromotedContent: !1, ...(0, r.d)(t) },
                                (0, s.kj)((e) => !e?.viewer?.dm_muting_timeline?.timeline, "GQL URT: Failed to render DM Muting timeline"),
                            )
                            .then((e) => {
                                const t = e.viewer?.dm_muting_timeline?.timeline;
                                return t || g.cY;
                            }),
                });
        },
        327202: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => l });
            var n = i(163889),
                s = i(422282),
                r = i.n(s),
                a = i(299560),
                o = i.n(a);
            const l = ({ apiClient: e, featureSwitches: t }) => ({
                fetch: () =>
                    e.graphQL(o(), {}).then((e) => {
                        let t;
                        if (e.viewer) {
                            const { user_results: i } = e.viewer;
                            "User" === i?.result?.__typename && (t = i.result.notifications_email_notifications);
                        }
                        return t || (0, n.ZP)("GraphQL email notification settings query returned no settings object."), t || {};
                    }),
                update(t) {
                    const { settings: i, userId: n } = t;
                    return e.graphQL(r(), { userId: n, settings: i });
                },
            });
        },
        745978: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => n });
            const n = ({ apiClient: e, featureSwitches: t }) => ({ fetchMutedKeywords: (t, i) => e.get("mutes/keywords/list", t, i), fetchDiscouragedKeywords: (t, i) => e.get("mutes/keywords/discouraged", t, i), addMutedKeyword: (t, i) => e.post("mutes/keywords/create", t, {}, i), deleteMutedKeyword: (t, i) => e.post("mutes/keywords/destroy", t, {}, i), updateMutedKeyword: (t, i) => e.post("mutes/keywords/update", t, {}, i) });
        },
        816776: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => r });
            var n = i(360917),
                s = i.n(n);
            const r = ({ apiClient: e, featureSwitches: t }) => ({
                fetch(t, i = {}) {
                    const { userId: n } = t;
                    return e.get(`strato/column/User/${n}/search/searchSafetyReadonly`, s(), i, "");
                },
                set(t, i = {}) {
                    const { userId: n, ...r } = t;
                    return e.post(`strato/column/User/${n}/search/searchSafety`, r, s(), { ...i, "content-type": "application/json" }, "");
                },
            });
        },
        740527: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => c });
            var n = i(769471),
                s = i(934309),
                r = i(750085),
                a = i(401388),
                o = i(626421),
                l = i(497461);
            const _ = (e) => {
                    const t = (0, l.$)(),
                        i = ((e) => {
                            if ("SegmentedTimelines" !== e.body.__typename) return;
                            const t = e.body.timelines.map((e) => ({ graphQLTimelineId: e.timeline.id, id: e.id, labelText: e.labelText, scribeConfig: (0, a.Z)(e.scribeConfig) ? void 0 : { ...e.scribeConfig }, refreshIntervalSec: e.refreshIntervalSec }));
                            return { initialTabId: e.body.initialTimeline && e.body.initialTimeline.id, tabs: t };
                        })(e),
                        n = ((e, t) => {
                            const { header: i } = t;
                            if (!i || "TopicPageHeader" !== i.__typename) return;
                            const { __typename: n, facepile: s, topic: r, ...a } = i,
                                l = s && (0, o.Zn)(e, s);
                            return { ...a, topicId: (0, o.S0)(e, r), facepile: l };
                        })(t, e),
                        s = ((e, t) => {
                            const { navBar: i } = t;
                            if (!i) return {};
                            switch (i.__typename) {
                                case "TitleNavBar":
                                    return { title: i.title, subtitle: i.subtitle };
                                case "TopicPageNavBar":
                                    return { navBar: { topicId: (0, o.S0)(e, i.topic), clientEventInfo: i.clientEventInfo }, title: i.topic.name, subtitle: void 0 };
                                default:
                                    return {};
                            }
                        })(t, e);
                    return { globalObjects: t, pageConfiguration: { id: e.id, tabs: i, header: n, navBar: s.navBar && s.navBar, title: s.title, subtitle: s.subtitle, scribeConfig: { ...e.scribeConfig } } };
                },
                c = (e) => {
                    const t = "Timeline" === (i = e.body).__typename && i.timeline ? (0, r.Z)(i.timeline) : "SegmentedTimelines" === i.__typename && i.initialTimeline?.timeline.timeline ? (0, r.Z)(i.initialTimeline.timeline.timeline) : (0, r.Z)(s.cY);
                    var i;
                    const { globalObjects: a, pageConfiguration: o } = _(e);
                    return { ...t, globalObjects: (0, n.Z)(a, t.globalObjects), pageConfiguration: o };
                };
        },
        771613: (e, t, i) => {
            "use strict";
            i.d(t, { JJ: () => d, ZP: () => p });
            i(136728);
            var n = i(506899),
                s = i(967262),
                r = i(275365),
                a = i(318752),
                o = i(701788),
                l = i(171697);
            const _ = Object.freeze({ GROUP: "GroupDm", ONE_TO_ONE: "OneToOneDm", UNKNOWN: "Unknown" }),
                c = Object.freeze({ MessageCreate: r.Cr.MESSAGE, ParticipantsJoin: r.Cr.PARTICIPANTS_JOIN, ParticipantsLeave: r.Cr.PARTICIPANTS_LEAVE, ConversationNameUpdate: r.Cr.CONVERSATION_NAME_UPDATE, JoinConversation: r.Cr.JOIN_CONVERSATION }),
                d = new n.fK.Entity(
                    "entries",
                    { message_data: { attachment: { card: o.Z, tweet: { status: l.Z } } } },
                    {
                        processStrategy: (e, t, i) => {
                            const { legacy: n, rest_id: r } = e?.dm_event || {},
                                o = n?.event_type,
                                { affects_sort: l, request_id: _ } = n || {};
                            let d,
                                u,
                                p = "Unknown";
                            o in c && (p = c[o]);
                            const m = n?.conversation?.rest_id,
                                g = n?.event_detail?.dm,
                                h = n?.created_at_millis,
                                { card: f, media: b, tweet_results: y, urls_entity: v } = g?.attachments?.[0] || {};
                            if (
                                (f?.legacy && (d = { card: f }),
                                v?.length &&
                                    g.text &&
                                    v.forEach((e) => {
                                        e?.indices[0] && (u = g.text.slice(0, e?.indices[0]).concat(g.text.slice(e.indices[1])));
                                    }),
                                "Tweet" === y?.result?.__typename)
                            ) {
                                const e = y?.result?.legacy?.entities;
                                let t;
                                e?.media?.length ? (t = e?.media[0]) : e?.urls?.length && (t = e?.urls[0]);
                                const { display_url: i, expanded_url: n, id_str: s, indices: r, url: a } = t || {},
                                    { extended_entities: o } = y?.result?.legacy || {},
                                    l = o?.media?.map((e) => {
                                        if (e?.video_info) {
                                            const t = e?.video_info?.variants;
                                            return { ...e, video_info: { ...e?.video_info, variants: t } };
                                        }
                                        return e;
                                    }),
                                    _ = { ...y?.result?.legacy?.extended_entities, media: l };
                                d = { tweet: { status: { ...y?.result, legacy: { ...y?.result?.legacy, extended_entities: _ } }, display_url: i, expanded_url: n, indices: r, url: a, id: s } };
                            }
                            const w = b ? (0, s.m)(b) : null;
                            w && w.type && ("photo" === w.type ? (d = { photo: w }) : "video" === w.type ? (d = { video: w }) : "animated_gif" === w.type && (d = { animated_gif: w }));
                            const S = { affects_sort: l, request_id: _, time: h, type: p, conversation_id: m, message_data: { id: r, text: u || g?.text, entities: g?.entities, recipient_id: g?.recipient_results?.result?.rest_id, sender_id: g?.sender_results?.result.rest_id, attachment: d }, id: r };
                            return (0, a.Z)(S, t, i);
                        },
                        idAttribute: (e) => e?.dm_event?.rest_id,
                    },
                ),
                u = new n.fK.Entity(
                    "conversations",
                    {},
                    {
                        processStrategy: (e, t, i) => {
                            const { id: n, labels: s, legacy: o, perspectival_conversation_metadata: l, rest_id: c, tag: d } = e || {},
                                u = {},
                                p = [];
                            for (const e of o?.participants_metadata || []) {
                                const t = e?.user_results?.result;
                                if (!t || !t.legacy) continue;
                                const i = { description: t.legacy.description, id_str: t.legacy.id_str, name: t.legacy.name, profile_image_url_https: t.legacy.profile_image_url_https || "", screen_name: t.legacy.screen_name };
                                (u[t.rest_id] = i), p.push({ user: i, user_id: t.rest_id });
                            }
                            let m = o?.metadata?.avatar;
                            const g = m?.media_info,
                                h = e?.last_readable_event_id;
                            if (g) {
                                const { original_img_height: e, original_img_url: t, original_img_width: i } = g || {};
                                m = { image: { original_info: { height: e, width: i, url: t } } };
                            }
                            const f = o?.metadata?.conversation_type === _.GROUP ? r.eD.GROUP : r.eD.ONE_TO_ONE,
                                b = { ...o?.perspectival_conversation_metadata, ...o?.metadata, ...l, id: n, conversation_id: c, avatar: m, labels: s, last_readable_event_id: h, type: f, participants: p, users: u, tag: d };
                            return (0, a.Z)(b, t, i);
                        },
                        idAttribute: (e) => e?.legacy?.conversation_id,
                    },
                );
            u.define({ entities: d });
            const p = u;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-5b7ef534.a08e8d9a.js.map

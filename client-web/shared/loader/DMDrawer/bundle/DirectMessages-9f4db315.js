(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.DirectMessages-9f4db315"],
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
        919299: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => y });
            var n = i(506899),
                s = i(414742),
                r = i(703710),
                a = i(771613),
                o = i(2012),
                l = i.n(o),
                c = i(305341),
                _ = i.n(c),
                d = i(802680),
                u = i.n(d),
                m = i(23110),
                p = i.n(m),
                h = i(934309);
            const g = (e, t) => {
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
                y = ({ apiClient: e, featureSwitches: t }) => ({
                    fetchDMAllSearch: (t) =>
                        t
                            ? e.graphQL(l(), { count: t?.count, query: t.query, withAttachments: !0, withConversationQueryHighlights: !0, withMessageQueryHighlights: !0, withMessages: !0 }, g).then((e) => {
                                  const t = e?.dmGroupSearchSlice,
                                      i = e?.dmMessageSearchSlice,
                                      s = e?.dmPeopleSearchSlice;
                                  let r = h.d;
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
                                          { entities: c, result: _ } = (0, n.Fv)(s, [a.ZP]);
                                      r = { ...r, result: r?.result?.concat({ messageData: { conversationIds: _, entryIds: t?.result, highlightingTokens: l } }), entities: { ...t?.entities, conversations: { ...r?.entities?.conversations, ...c?.conversations } } };
                                  }
                                  return r;
                              })
                            : Promise.resolve(h.d),
                    fetchDMGroupSearch: (t) =>
                        t
                            ? e.graphQL(_(), { ...t, withConversationQueryHighlights: !0 }, g).then((e) => {
                                  const t = e?.dmGroupSearchSlice;
                                  if (t) {
                                      const { entities: e, result: i } = f(t);
                                      return { result: i, entities: e, slice_info: t.sliceInfo };
                                  }
                                  return h.d;
                              })
                            : Promise.resolve(h.d),
                    fetchDMPeopleSearch: (t) =>
                        t
                            ? e.graphQL(p(), { ...t, withConversationQueryHighlights: !0 }, g).then((e) => {
                                  const t = e?.dmPeopleSearchSlice;
                                  if (t) {
                                      const { entities: e, result: i } = f(t);
                                      return { result: i, entities: e, slice_info: t.sliceInfo };
                                  }
                                  return h.d;
                              })
                            : Promise.resolve(h.d),
                    fetchDMMutedUsers: ({ count: i, cursor: n }) =>
                        e
                            .graphQL(
                                u(),
                                { count: i, cursor: n, includePromotedContent: !1, ...(0, r.d)(t) },
                                (0, s.kj)((e) => !e?.viewer?.dm_muting_timeline?.timeline, "GQL URT: Failed to render DM Muting timeline"),
                            )
                            .then((e) => {
                                const t = e.viewer?.dm_muting_timeline?.timeline;
                                return t || h.cY;
                            }),
                });
        },
        771613: (e, t, i) => {
            "use strict";
            i.d(t, { JJ: () => d, ZP: () => m });
            i(136728);
            var n = i(506899),
                s = i(967262),
                r = i(275365),
                a = i(318752),
                o = i(701788),
                l = i(171697);
            const c = Object.freeze({ GROUP: "GroupDm", ONE_TO_ONE: "OneToOneDm", UNKNOWN: "Unknown" }),
                _ = Object.freeze({ MessageCreate: r.Cr.MESSAGE, ParticipantsJoin: r.Cr.PARTICIPANTS_JOIN, ParticipantsLeave: r.Cr.PARTICIPANTS_LEAVE, ConversationNameUpdate: r.Cr.CONVERSATION_NAME_UPDATE, JoinConversation: r.Cr.JOIN_CONVERSATION }),
                d = new n.fK.Entity(
                    "entries",
                    { message_data: { attachment: { card: o.Z, tweet: { status: l.Z } } } },
                    {
                        processStrategy: (e, t, i) => {
                            const { legacy: n, rest_id: r } = e?.dm_event || {},
                                o = n?.event_type,
                                { affects_sort: l, request_id: c } = n || {};
                            let d,
                                u,
                                m = "Unknown";
                            o in _ && (m = _[o]);
                            const p = n?.conversation?.rest_id,
                                h = n?.event_detail?.dm,
                                g = n?.created_at_millis,
                                { card: f, media: y, tweet_results: b, urls_entity: v } = h?.attachments?.[0] || {};
                            if (
                                (f?.legacy && (d = { card: f }),
                                v?.length &&
                                    h.text &&
                                    v.forEach((e) => {
                                        e?.indices[0] && (u = h.text.slice(0, e?.indices[0]).concat(h.text.slice(e.indices[1])));
                                    }),
                                "Tweet" === b?.result?.__typename)
                            ) {
                                const e = b?.result?.legacy?.entities;
                                let t;
                                e?.media?.length ? (t = e?.media[0]) : e?.urls?.length && (t = e?.urls[0]);
                                const { display_url: i, expanded_url: n, id_str: s, indices: r, url: a } = t || {},
                                    { extended_entities: o } = b?.result?.legacy || {},
                                    l = o?.media?.map((e) => {
                                        if (e?.video_info) {
                                            const t = e?.video_info?.variants;
                                            return { ...e, video_info: { ...e?.video_info, variants: t } };
                                        }
                                        return e;
                                    }),
                                    c = { ...b?.result?.legacy?.extended_entities, media: l };
                                d = { tweet: { status: { ...b?.result, legacy: { ...b?.result?.legacy, extended_entities: c } }, display_url: i, expanded_url: n, indices: r, url: a, id: s } };
                            }
                            const w = y ? (0, s.m)(y) : null;
                            w && w.type && ("photo" === w.type ? (d = { photo: w }) : "video" === w.type ? (d = { video: w }) : "animated_gif" === w.type && (d = { animated_gif: w }));
                            const S = { affects_sort: l, request_id: c, time: g, type: m, conversation_id: p, message_data: { id: r, text: u || h?.text, entities: h?.entities, recipient_id: h?.recipient_results?.result?.rest_id, sender_id: h?.sender_results?.result.rest_id, attachment: d }, id: r };
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
                            const { id: n, labels: s, legacy: o, perspectival_conversation_metadata: l, rest_id: _, tag: d } = e || {},
                                u = {},
                                m = [];
                            for (const e of o?.participants_metadata || []) {
                                const t = e?.user_results?.result;
                                if (!t || !t.legacy) continue;
                                const i = { description: t.legacy.description, id_str: t.legacy.id_str, name: t.legacy.name, profile_image_url_https: t.legacy.profile_image_url_https || "", screen_name: t.legacy.screen_name };
                                (u[t.rest_id] = i), m.push({ user: i, user_id: t.rest_id });
                            }
                            let p = o?.metadata?.avatar;
                            const h = p?.media_info,
                                g = e?.last_readable_event_id;
                            if (h) {
                                const { original_img_height: e, original_img_url: t, original_img_width: i } = h || {};
                                p = { image: { original_info: { height: e, width: i, url: t } } };
                            }
                            const f = o?.metadata?.conversation_type === c.GROUP ? r.eD.GROUP : r.eD.ONE_TO_ONE,
                                y = { ...o?.perspectival_conversation_metadata, ...o?.metadata, ...l, id: n, conversation_id: _, avatar: p, labels: s, last_readable_event_id: g, type: f, participants: m, users: u, tag: d };
                            return (0, a.Z)(y, t, i);
                        },
                        idAttribute: (e) => e?.legacy?.conversation_id,
                    },
                );
            u.define({ entities: d });
            const m = u;
        },
        415725: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => c });
            var n = i(202784),
                s = i(325686),
                r = i(392237),
                a = i(822228);
            const o = "activeRoute",
                l = r.default.create((e) => ({ activeRoot: { backgroundColor: e.colors.gray0 }, overlay: { ...r.default.absoluteFillObject, borderEndStyle: "solid", borderEndWidth: e.borderWidths.medium, borderEndColor: e.colors.primary, zIndex: 1 } })),
                c = ({ children: e, ...t }) => n.createElement(a.Z, t, (t) => n.createElement(s.Z, { style: t && l.activeRoot, testID: o }, "function" == typeof e ? e(t) : e, t ? n.createElement(s.Z, { pointerEvents: "none", style: l.overlay }) : null));
        },
        233935: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => m });
            var n = i(202784),
                s = i(154003),
                r = i(392237),
                a = i(674132),
                o = i.n(a),
                l = i(698891);
            const c = "settingsAppBar",
                _ = o().bb081ea2,
                d = n.memo(({ onPress: e, pullRight: t, to: i }) => n.createElement(s.ZP, { "aria-label": _, hoverLabel: { label: _ }, icon: n.createElement(l.default, null), link: i, onPress: e, pullRight: t, style: u.button, testID: c, type: "primaryText" })),
                u = r.default.create((e) => ({ button: { marginVertical: `calc(-${e.spaces.space12})` } })),
                m = d;
        },
        33104: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => s });
            i(202784);
            var n = i(325686);
            const s = (0, i(337455).Z)(n.Z);
        },
        789831: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => c });
            var n = i(807896),
                s = i(202784),
                r = i(325686),
                a = i(392237),
                o = i(655352);
            const l = a.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                c = ({ children: e, component: t, fab: i, shouldRenderFab: a = !0, style: c, withoutBottomPadding: _, ...d }) => {
                    const u = t || r.Z,
                        m = a && !(0, o.ZP)();
                    return s.createElement(u, (0, n.Z)({}, d, { style: [m && !_ && l.root, c] }), e, m ? i : null);
                };
        },
        507651: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => c });
            var n = i(807896),
                s = i(202784),
                r = i(107267),
                a = i(403556),
                o = i(791632);
            const l = (e) => {
                    const t = (0, r.useHistory)();
                    return s.createElement(a.Z, (0, n.Z)({}, e, { isCompact: (0, o.HD)(t) }));
                },
                c = s.memo(l);
        },
        387524: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => h });
            var n = i(807896),
                s = i(202784),
                r = i(325686),
                a = i(292627),
                o = i(537392),
                l = i(392237),
                c = i(365023),
                _ = i(392027),
                d = i(774654),
                u = i(725516),
                m = i(443781);
            const p = l.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${l.default.iPhoneOffsetBottom} - ${d.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                h = (e) => {
                    const { "aria-label": t, label: i, onPress: h, scribeComponent: g, ...f } = e,
                        { loggedInUserId: y } = s.useContext(m.rC),
                        b = (0, u.z)(),
                        v = s.useCallback(
                            (e) => {
                                b.scribe({ component: g, action: "click" }), h && h(e);
                            },
                            [b, h, g],
                        ),
                        w = d.ZM.useCollapsibleNavBars(),
                        S = [...d.Ah({ elementPosition: "bottom" }), w && p.fabStaysAboveSafeArea];
                    return y
                        ? s.createElement(
                              a.Z.FloatingAction,
                              null,
                              s.createElement(o.ZP, null, ({ windowWidth: e }) => {
                                  const a = e > l.default.theme.breakpoints.large,
                                      o = e > l.default.theme.breakpoints.medium,
                                      d = e < l.default.theme.breakpoints.micro,
                                      u = [p.root, o && p.rootMedium, a && p.rootLarge],
                                      m = [p.fab, a && p.fabLarge, d && p.fabMicro, S];
                                  return s.createElement(
                                      r.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: u },
                                      s.createElement(c.Z, { id: "FloatingActionButtonBase" }, (e, o) => s.createElement(r.Z, (0, n.Z)({ ref: e() }, o({ style: m })), s.createElement(_.Z, (0, n.Z)({}, f, { "aria-label": t, label: a ? i : void 0, onPress: v, style: d && p.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        813928: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => d });
            var n = i(202784),
                s = i(674132),
                r = i.n(s),
                a = i(324922),
                o = i(387524),
                l = i(635510);
            const c = r().h845f282;
            function _() {
                return n.createElement(o.Z, { "aria-label": c, href: "/messages/compose", icon: n.createElement(a.default, null), label: c, scribeComponent: "floating_dm_button", testID: l.Z.message });
            }
            const d = n.memo(_);
        },
        635510: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => n });
            const n = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        144256: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => l });
            var n = i(807896),
                s = i(202784),
                r = i(149202),
                a = i(725516);
            class o extends s.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleRefresh = () => {
                            const { analytics: e, onRefresh: t } = this.props,
                                i = e.contextualScribeNamespace;
                            t(), i && i.page && e.scribeAction("pull_to_refresh");
                        });
                }
                render() {
                    const { analytics: e, canRefresh: t, onRefresh: i, ...a } = this.props;
                    return s.createElement(r.Z, (0, n.Z)({}, a, { canRefresh: t, onRefresh: this._handleRefresh }));
                }
            }
            const l = (0, a.Z)(o);
        },
        883331: (e, t, i) => {
            "use strict";
            i.d(t, { _: () => d, n: () => _ });
            var n = i(674132),
                s = i.n(n),
                r = i(389073);
            const a = s().cb367658,
                o = s().ie9a7e48,
                l = s().hd3927c6,
                c = s().f1ac0968,
                _ = { [r.Z.Offline]: { toast: { text: o } }, defaultToast: { text: a }, showToast: !0 },
                d = { [r.Z.Offline]: { toast: { text: c } }, defaultToast: { text: l }, showToast: !0 };
        },
        337455: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => l });
            var n = i(202784),
                s = i(411916),
                r = i.n(s),
                a = i(373463),
                o = i.n(a);
            function l(e) {
                class t extends n.Component {
                    constructor(e, t) {
                        super(e, t), (this.state = { shouldRender: !1 }), (this._mounted = !0);
                    }
                    componentWillUnmount() {
                        this._mounted = !1;
                    }
                    componentDidMount() {
                        r()(() => {
                            this._mounted && this.setState({ shouldRender: !0 });
                        });
                    }
                    render() {
                        return this.state.shouldRender ? n.createElement(e, this.props) : null;
                    }
                }
                return o()(t, e);
            }
        },
        967262: (e, t, i) => {
            "use strict";
            i.d(t, { m: () => n });
            const n = (e, t) => {
                    const i = e?.media_info;
                    if ("ApiImage" === i?.__typename) {
                        return { altText: i.alt_text, display_url: i.original_img_url, expanded_url: t?.expandedURLFormatter?.(e.media_id) ?? i.original_img_url, ext_alt_text: i.alt_text, ...(i.color_info?.palette && { ext_media_color: { palette: i.color_info.palette } }), id: r(e.media_id), id_str: e.media_id || "", media_key: e.media_key, media_url: i.original_img_url, media_url_https: i.original_img_url, original_info: { height: i.original_img_height, width: i.original_img_width }, sizes: { original: { h: i.original_img_height, resize: "fit", w: i.original_img_width } }, type: "photo" };
                    }
                    if ("ApiVideo" === i?.__typename) {
                        const { __typename: t, ...n } = i;
                        return s(n, e.media_id, i?.__typename);
                    }
                    if ("ApiGif" === i?.__typename) {
                        const { __typename: t, ...n } = i;
                        return s(n, e.media_id, i?.__typename);
                    }
                },
                s = (e, t, i) => {
                    const n = "ApiGif" === i ? "animated_gif" : "video",
                        s = e.preview_image;
                    return { type: n, id: r(t), id_str: t || "", ext_alt_text: s?.alt_text, ext_media_color: { palette: s?.color_info?.palette || [] }, media_url: s?.original_img_url || "", media_url_https: s?.original_img_url || "", url: s?.original_img_url || "", display_url: s?.original_img_url || "", expanded_url: s?.original_img_url || "", original_info: { height: s?.original_img_height || 0, width: s?.original_img_width || 0 }, sizes: { original: { h: s?.original_img_height || 0, resize: "fit", w: s?.original_img_width || 0 } }, video_info: { aspect_ratio: [e.aspect_ratio.numerator, e.aspect_ratio.denominator], ...(e.duration_millis && { duration_millis: e.duration_millis }), variants: e.variants.map((e) => ({ bitrate: e.bit_rate, content_type: e.content_type, url: e.url })) } };
                },
                r = (e) => {
                    const t = parseInt(e, 10);
                    return Number.isNaN(t) ? 0 : t;
                };
        },
        599138: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => o });
            var n = i(919299),
                s = i(340130),
                r = i(545521),
                a = i(674420);
            const o = (e) => (0, r.Z)({ contextSuffix: "DM_SEARCH_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(n.Z).fetchDMAllSearch, sliceKey: `${s.EL}-${e}`, getEndpointParams: (t) => ({ ...t, query: e }), mapEntitiesToActions: a.f });
        },
        674420: (e, t, i) => {
            "use strict";
            i.d(t, { f: () => s });
            var n = i(720277);
            const s = (e, t = !0) => {
                const i = {};
                let s = {};
                return (
                    e?.conversations &&
                        (Object.values(e.conversations).forEach((e) => {
                            e && e.users && Object.assign(i, e.users), t && (e.isSearchResult = !0);
                        }),
                        (s = { ...s, conversations: e?.conversations, users: i })),
                    e?.entries && (s = { ...s, entries: e?.entries, cards: e?.cards, tweets: e?.tweets }),
                    e?.users && (s = { ...s, users: { ...e.users, ...(s.users || {}) } }),
                    (0, n.s0)(s)
                );
            };
        },
        545521: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => d });
            var n = i(99107),
                s = i(166852),
                r = i(841198),
                a = i(917799),
                o = i(312771),
                l = i(56519),
                c = i(877848);
            const _ = (e) => [(0, l.dP)(e)];
            function d({ contextSuffix: e, getEndpointParams: t, getFetchApiEndpoint: i, mapEntitiesToActions: l = _, sliceKey: d, injectionOptions: { identityFunction: u } = {} }) {
                const m = [],
                    p = (e) => e[r.Yf]?.[d],
                    h = (e) => {
                        const t = p(e);
                        if (!t) return m;
                        const i = t.items || m,
                            n = t.injections;
                        return n?.length > 0 ? (0, s.Z)(n.concat(i), u) : i;
                    },
                    g = (e) => {
                        const t = p(e),
                            i = h(e),
                            n = i?.length > 0;
                        return t ? (0, o.ke)(t.fetchStatus, n) : o.ZP.NONE;
                    },
                    f =
                        (n) =>
                        (s, o, { api: c }) => {
                            const _ = t(n);
                            return (0, a._O)(s, { params: _, request: i(c) })(r.t5({ contextSuffix: e, params: n, sliceKey: d }), (e) => {
                                if (e) return l(e.entities);
                            });
                        };
                return {
                    select: p,
                    selectItems: h,
                    selectFetchStatus: g,
                    fetch: f,
                    fetchIfNeeded: (e) => (t, i) => {
                        const s = i(),
                            r = p(s),
                            a = g(s);
                        return !r || (a !== o.ZP.LOADING && a !== o.ZP.LOADED) ? t(f(e)) : n.O4.resolve();
                    },
                    fetchBottom: (e) => (t, i) => {
                        const s = i(),
                            r = p(s),
                            a = ((e) => {
                                const t = p(e);
                                return t?.cursors?.next_cursor;
                            })(s);
                        return r.fetchStatus[c.Yj.BOTTOM] !== o.ZP.LOADING && a ? t(f({ ...e, cursor: a })) : n.O4.resolve();
                    },
                    injectItems: (e) => r.WC({ items: e, sliceKey: d, identityFunction: u }),
                    removeItems: (e) => r.Er({ items: e, sliceKey: d, identityFunction: u }),
                };
            }
        },
        841198: (e, t, i) => {
            "use strict";
            i.d(t, { Be: () => y, Er: () => E, Ev: () => g, WC: () => w, Yf: () => d, t5: () => Z });
            i(571372);
            var n = i(166852),
                s = i(370751),
                r = i(499627),
                a = i(917799),
                o = i(312771),
                l = i(877848);
            const c = {},
                _ = [],
                d = "slices",
                u = () => ({ cursors: {}, fetchStatus: { top: o.ZP.NONE, bottom: o.ZP.NONE }, items: _, injections: _ }),
                m = (0, a.dg)("rweb/slices", "FETCH");
            const p = (e, t) => {
                    if (!t) return e;
                    switch (t.type) {
                        case m.REQUEST: {
                            const { direction: i } = t.meta;
                            return i ? { ...e, fetchStatus: { ...e.fetchStatus, [i]: o.ZP.LOADING } } : e;
                        }
                        case m.SUCCESS: {
                            const { direction: i } = t.meta,
                                s = t.payload,
                                r = e.items;
                            return !i || s instanceof Error ? e : { ...e, items: (0, n.Z)(r.concat(s?.result)), cursors: { ...s?.slice_info }, error: null, fetchStatus: { ...e.fetchStatus, [i]: o.ZP.LOADED } };
                        }
                        case m.FAILURE: {
                            const { direction: i } = t.meta;
                            return i ? { ...e, error: t.payload, fetchStatus: { ...e.fetchStatus, [i]: o.ZP.FAILED } } : e;
                        }
                        default:
                            return e;
                    }
                },
                h = "rweb/slices/CLEAR_PARTIAL_SLICES_CACHE",
                g = (e) => ({ type: h, meta: { sliceKey: e } }),
                f = "rweb/slices/DELETE_SLICE",
                y = (e) => ({ type: f, meta: { sliceKey: e } }),
                b = "rweb/slices/RESTORE_SLICE",
                v = "rweb/slices/INJECT_ITEMS_SLICE",
                w = ({ identityFunction: e, items: t, sliceKey: i }) => ({ type: v, meta: { sliceKey: i, identityFunction: e }, payload: t }),
                S = "rweb/slices/REMOVE_ITEMS_SLICE",
                E = ({ identityFunction: e, items: t, sliceKey: i }) => ({ type: S, meta: { sliceKey: i, identityFunction: e }, payload: t }),
                Z = ({ contextSuffix: e, params: t, sliceKey: i }) => ({ actionTypes: m, context: `FETCH_${e}`, meta: { sliceKey: i, direction: t?.cursor ? l.Yj.BOTTOM : l.Yj.TOP } });
            r.Z.register({
                [d]: function (e = c, t) {
                    if (!t) return e;
                    const { sliceKey: i } = t.meta || {};
                    if (!i) return e;
                    switch (t.type) {
                        case f: {
                            const t = { ...e };
                            return delete t[i], t;
                        }
                        case b:
                            return { ...e, [i]: t.payload };
                        case h: {
                            const t = { ...e };
                            return (
                                Object.keys(t).forEach((e) => {
                                    e.includes(i) && delete t[e];
                                }),
                                t
                            );
                        }
                        case v: {
                            const s = e[i] || u(),
                                r = t.meta.identityFunction ? t.meta.identityFunction : void 0,
                                a = Array.isArray(t.payload) ? t.payload : void 0;
                            return a?.length ? { ...e, [i]: { ...s, injections: (0, n.Z)(a.concat(s.injections), r) } } : e;
                        }
                        case S: {
                            const n = e[i] || u(),
                                r = t.meta.identityFunction ? t.meta.identityFunction : void 0,
                                a = Array.isArray(t.payload) ? (0, s.Z)(r ? t.payload.map(r) : t.payload) : void 0,
                                o = (e, t) => !a?.has(r ? r(e, t, n.injections) : e);
                            return a?.size ? { ...e, [i]: { ...n, injections: n.injections.filter(o), items: n.items.filter(o) } } : e;
                        }
                        default: {
                            const n = e[i] || u(),
                                s = p(n, t);
                            return { ...e, [i]: { ...s } };
                        }
                    }
                },
            });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DirectMessages-9f4db315.f5f24e7a.js.map

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["modules.audio-6107ac1a"],
    {
        537628: (e) => {
            e.exports = { queryId: "3fkhKnC2XX9k49RxGGdIUg", operationName: "AudioSpaceAddSharing", operationType: "mutation", metadata: { featureSwitches: ["creator_subscriptions_tweet_preview_api_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls", "withAuxiliaryUserLabels"] } };
        },
        73819: (e) => {
            e.exports = { queryId: "7ScqSF7nzsQHmnmdDtRjEA", operationName: "AudioSpaceById", operationType: "query", metadata: { featureSwitches: ["spaces_2022_h2_spaces_communities", "spaces_2022_h2_clipping", "creator_subscriptions_tweet_preview_api_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        154664: (e) => {
            e.exports = { queryId: "YMbfLMTUUEzEEMibvvR26Q", operationName: "AudioSpaceDeleteSharing", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        351794: (e) => {
            e.exports = { queryId: "NTq79TuSz6fHj8lQaferJw", operationName: "AudioSpaceSearch", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        176340: (e, a, t) => {
            "use strict";
            t.d(a, { Z: () => E });
            t(571372);
            var o = t(163889),
                r = t(703710),
                i = (t(136728), t(614983)),
                n = t.n(i),
                s = t(392237),
                d = t(870358),
                l = t(557281),
                c = t(952183),
                _ = t(877905),
                u = t(44527);
            function h(e) {
                n()(e, "audioSpace is required");
                const { metadata: a, participants: t, sharings: o, ...r } = e;
                n()(a, "metadata is required");
                const { rest_id: i, state: d } = a;
                n()(i, "rest_id is required"), n()(d, "state is required");
                const u = (function (e) {
                        if (e && e.result && "Community" === e.result.__typename) {
                            const { __typename: a, rest_id: t, ...o } = e.result,
                                { name: r } = o,
                                i = s.default.theme.colors.gray500,
                                n = (0, c.Wb)(o),
                                d = (0, c.TB)(o),
                                l = n || d,
                                _ = l?.url;
                            return { rest_id: t, color: i, name: r, image_url: _ };
                        }
                    })(a.community_results),
                    h = (function (e, a) {
                        const t = e?.total,
                            o = m(e?.admins, a),
                            r = m(e?.speakers, a),
                            i = m(e?.listeners, a);
                        return { total: t, admins: o, speakers: r, listeners: i };
                    })(t, u),
                    b = (function (e) {
                        if (!e) return [];
                        const a = e.items
                            .map((e) => {
                                const a = p(e.user_results?.result),
                                    t = e.shared_item;
                                if ("AudioSpaceSharedTweet" === t.__typename) {
                                    if ("Tweet" === t.tweet_results?.result?.__typename) {
                                        const { __typename: o, ...r } = t.tweet_results?.result || {},
                                            i = (0, _.y9)(r);
                                        if (i) {
                                            const { cards: t, publishedArticles: o, tweets: r, users: n } = i.entities,
                                                s = (0, l.F)(r, t, n, o, i.result);
                                            if (s) return { id: e.sharing_id, user: a, tweet: s };
                                        }
                                    }
                                    return null;
                                }
                                return null;
                            })
                            .filter(Boolean);
                        return a;
                    })(o),
                    w = p(a.creator_results?.result),
                    f = w?.screen_name,
                    D = w?.profile_image_extensions_media_color?.palette,
                    { cohosts: y, host: g } = (function (e, a) {
                        let t;
                        const o = [];
                        a
                            ? e.admins.forEach((e) => {
                                  e.twitter_screen_name === a ? (t = e) : o.push(e);
                              })
                            : (t = e.admins[0]);
                        return { host: t, cohosts: o };
                    })(h, f);
                return n()(g, "host is required"), { ...r, ...a, rest_id: i, state: d, host: g, hostPalette: D, cohosts: y, participants: h, sharings: b, ended_at: a.ended_at ? parseInt(a.ended_at, 10) : void 0, total_live_listeners: a.total_live_listeners ?? 0, total_replay_watched: a.total_replay_watched ?? 0, followed_by_host: a.creator_results?.result?.legacy?.followed_by, community: u };
            }
            function m(e, a) {
                return e
                    ? e.map(({ user_results: e, ...t }) => {
                          const o = { ...t, user_id: e?.rest_id, community: void 0, is_blue_verified: void 0, verified_type: void 0, highlightedLabel: void 0 };
                          if (a) {
                              const e = a.color,
                                  r = Boolean(t.community_role && t.community_role !== d.WW.NonMember);
                              o.community = { color: e, isMember: r };
                          }
                          return e?.result && "User" === e.result.__typename && ((o.is_blue_verified = e.result.is_blue_verified), (o.verified_type = e.result.verification?.verified_type), (o.highlightedLabel = (0, u.H)(e.result.identity_profile_labels_highlighted_label?.label))), o;
                      })
                    : [];
            }
            function p(e) {
                if (e && "User" === e.__typename) {
                    const { __typename: a, ...t } = e,
                        o = (0, _.Hy)(t);
                    if (o) return o.entities.users[o.result];
                }
                return null;
            }
            var b = t(537628),
                w = t.n(b),
                f = t(73819),
                D = t.n(f),
                y = t(154664),
                g = t.n(y),
                M = t(351794),
                v = t.n(M),
                A = t(396355),
                T = t.n(A),
                k = t(587719),
                I = t.n(k),
                S = t(336271),
                P = t.n(S),
                N = t(389073),
                x = t(615656);
            const E = ({ apiClient: e, featureSwitches: a, jotaiStore: o }) => ({
                    spacebar: () => e.getUnversioned("/fleets/v1/fleetline", { only_spaces: !0 }, {}),
                    byId(i, n = {}) {
                        const s = "byId",
                            d = n.isMetatagsQuery || !1;
                        return e
                            .graphQL(
                                D(),
                                { id: i, isMetatagsQuery: d, ...(0, r.d)(a), withReplays: !0, withListeners: !0 },
                                L(
                                    s,
                                    i,
                                    (e, a) => (
                                        e.forEach((e) => {
                                            const { code: a } = e;
                                            a === x.ZP.GenericAccessDenied &&
                                                Promise.all([
                                                    t.e("icons.5"),
                                                    t.e("icons.12"),
                                                    t.e("icons.20"),
                                                    t.e("icons.0"),
                                                    t.e("icons.21"),
                                                    t.e("icons.28"),
                                                    t.e("icons.17"),
                                                    t.e("modules.common-e907d115"),
                                                    t.e("modules.common-e019dbda"),
                                                    t.e("icons.22"),
                                                    t.e("icons.9"),
                                                    t.e("icons.25"),
                                                    t.e("modules.audio-6107ac1a"),
                                                    t.e("modules.audio-b953418a"),
                                                    t.e("modules.audio-7c51e6a7"),
                                                    t.e("modules.audio-04db59e9"),
                                                    t.e("modules.audio-76583d6c"),
                                                    t.e("modules.audio-b7a8a5fb"),
                                                    t.e("modules.audio-51f6e793"),
                                                    t.e("modules.audio-e019dbda"),
                                                    t.e("modules.audio-262c94d4"),
                                                    t.e("modules.audio-c6fe4ea4"),
                                                    t.e("icons.6"),
                                                    t.e("icons.10"),
                                                    t.e("icons.24"),
                                                    t.e("icons.14"),
                                                    t.e("icons.23"),
                                                    t.e("icons.4"),
                                                    t.e("icons.3"),
                                                    t.e("icons.13"),
                                                    t.e("icons.1"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                                    t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                                    t.e("loader.AudioDock"),
                                                ])
                                                    .then(t.bind(t, 106006))
                                                    .then(({ removedFromSpaceAtom: e }) => {
                                                        o?.set(e);
                                                    });
                                        }),
                                        !0
                                    ),
                                ),
                            )
                            .catch((e) => {
                                if (
                                    !(function (e) {
                                        if (!e) return !1;
                                        const [a] = e.errors || [];
                                        return a?.code === N.Z.DuplicateRequest;
                                    })(e)
                                )
                                    throw e;
                            })
                            .then((e) => {
                                if (e)
                                    try {
                                        return h(e?.audioSpace);
                                    } catch (e) {
                                        throw new Error(q(s, e.message));
                                    }
                            });
                    },
                    subscribeToScheduledSpaceById(a) {
                        const t = "subscribeToScheduledSpaceById";
                        return e.graphQL(I(), { id: a }, L(t, a)).catch(C(t)).then(z(t));
                    },
                    unsubscribeFromScheduledSpaceById(a) {
                        const t = "unsubscribeFromScheduledSpaceById";
                        return e.graphQL(P(), { id: a }, L(t, a)).catch(C(t)).then(z(t));
                    },
                    fetchTopics: () => e.graphQL(T(), {}),
                    search(a, t) {
                        const o = "spacesSearch";
                        return e
                            .graphQL(v(), { query: a, filter: t }, L(o, a))
                            .catch(C(o))
                            .then((e) =>
                                e?.search_by_raw_query?.audio_spaces_grouped_by_section
                                    ? (function (e) {
                                          if (!Array.isArray(e.sections)) return { sections: [] };
                                          const a = { sections: [] };
                                          return (
                                              e.sections.forEach((e) => {
                                                  const { destination: t, name: o } = e;
                                                  if (Array.isArray(e.items)) {
                                                      const r = [];
                                                      e.items.forEach((e) => {
                                                          e?.space?.rest_id && r.push(e.space.rest_id);
                                                      }),
                                                          o && t && a.sections.push({ name: o, destination: t, items: r });
                                                  }
                                              }),
                                              a
                                          );
                                      })(e?.search_by_raw_query?.audio_spaces_grouped_by_section)
                                    : { sections: [] },
                            );
                    },
                    addSharing: (a, t) => e.graphQL(w(), { audio_space_id: a, sharing: { shared_tweet: { tweet_id: t } } }, L("addSharing", a)),
                    deleteSharing: (a, t) => e.graphQL(g(), { audio_space_id: a, sharing_id: t }, L("deleteSharing", a)),
                }),
                q = (e, a) => `GQL: AudioSpaces.${e} [${a}]`;
            function C(e) {
                return (a) => {
                    if (a) throw new Error(q(e, a.message));
                };
            }
            function z(e) {
                return (a) => {
                    if (a) return a;
                    throw new Error(q(e, "404"));
                };
            }
            const R = (e, a) => !1;
            function L(e, a, t = R) {
                return function (r, i) {
                    let n = !1;
                    if (r.length) {
                        const [t] = r,
                            { code: i, message: s, path: d } = t;
                        let l;
                        const c = V.find(({ matches: e }) => e(s));
                        if (c?.message) l = q(e, c.message);
                        else if (Array.isArray(d)) {
                            const a = d.map(Z).join(".");
                            l = q(e, a);
                        } else l = q(e, s || "isFatalError");
                        (0, o.ZP)(l, { extra: { code: i, id: a, message: s, path: d } }), (n = !0);
                    }
                    return !t(r, i) && n;
                };
            }
            function Z(e) {
                return "number" == typeof e ? "#" : e;
            }
            const V = ["Overcapacity: Unspecified", "Timeout: Unspecified"].map((e) => ({ matches: (a) => a && e.toLowerCase() === a.toLowerCase(), message: e }));
        },
        787210: (e, a, t) => {
            "use strict";
            t.d(a, { Z: () => i });
            var o = t(716406),
                r = t(624479);
            const i = ({ apiClient: e, featureSwitches: a }) => ({
                fetchPresence: (a, t = {}) => {
                    const { only_spaces: i, userIds: n } = a,
                        s = { user_ids: n.join(","), only_spaces: i };
                    return e.getUnversioned("/fleets/v1/avatar_content", s, t).then((e) => {
                        const { users: a, refresh_delay_secs: t = r.vj } = e,
                            i = 0 === t ? r.vj : t,
                            s = Date.now() + 1e3 * i,
                            d = Object.fromEntries(n.map((e) => [e, { expiry: s, spaces: void 0, refresh_delay_secs: i }])),
                            l = a && (0, o.Z)(a, (e, a) => ({ ...e, expiry: s, refresh_delay_secs: i }));
                        return (l || d) && { entities: { userPresence: { ...d, ...l } } };
                    });
                },
            });
        },
        910626: (e, a, t) => {
            "use strict";
            t.d(a, { Y: () => o });
            const o = Object.freeze({ card: "card", audiospace_ring: "audiospace_ring", spacebar: "spacebar" });
        },
        161104: (e, a, t) => {
            "use strict";
            t.d(a, { Z: () => o });
            const o = class {
                initialize() {
                    (this.audioCtx = new (window.AudioContext || window.webkitAudioContext)()), (this.oscillatorNode = this.audioCtx.createOscillator()), (this.gainNode = this.audioCtx.createGain()), this.oscillatorNode.connect(this.gainNode), this.oscillatorNode.start(0), this.gainNode.connect(this.audioCtx.destination), (this.gainNode.gain.value = 0), (this.initialized = !0);
                }
                mapDataPointsToFrequencies(e, a = 440, t = 1760) {
                    let o = 1 / 0,
                        r = -1 / 0;
                    e.forEach((e) => {
                        (o = Math.min(e, o)), (r = Math.max(e, r));
                    });
                    const i = t - a,
                        n = r - o;
                    return 0 === n ? e.map((e) => (a + t) / 2) : e.map((e) => ((e - o) / n) * i + a);
                }
                playTone(e) {
                    this.initialized || this.initialize();
                    const a = this.audioCtx.currentTime;
                    this.oscillatorNode.frequency.setValueAtTime(440, a), this.gainNode.gain.setValueAtTime(0, a), this.gainNode.gain.linearRampToValueAtTime(1, a + 0.1), this.oscillatorNode.frequency.linearRampToValueAtTime(1760, a + e), this.gainNode.gain.setValueAtTime(1, a + (e - 0.1)), this.gainNode.gain.exponentialRampToValueAtTime(0.001, a + (e - 0.001)), this.gainNode.gain.setValueAtTime(0, a + e);
                }
                playLinearConnectedDataPointsAsTone(e, a) {
                    this.initialized || this.initialize();
                    const t = this.mapDataPointsToFrequencies(e.map((e) => e.value)),
                        o = this.audioCtx.currentTime,
                        r = a / (t.length - 1);
                    this.oscillatorNode.frequency.setValueAtTime(t[0], o), this.gainNode.gain.setValueAtTime(0, o), this.gainNode.gain.linearRampToValueAtTime(1, o + 0.1);
                    for (let e = 0; e < t.length; e++) this.oscillatorNode.frequency.linearRampToValueAtTime(t[e], o + e * r);
                    this.gainNode.gain.setValueAtTime(1, o + (a - 0.1)), this.gainNode.gain.exponentialRampToValueAtTime(0.001, o + (a - 0.001)), this.gainNode.gain.setValueAtTime(0, o + a);
                }
                playDisconnectedDataPointsAsTone(e, a, t) {
                    this.initialized || this.initialize();
                    const o = this.mapDataPointsToFrequencies(e.map((e) => e.value)),
                        r = this.audioCtx.currentTime;
                    this.gainNode.gain.setValueAtTime(0, r);
                    for (let e = 0; e < o.length; e++) {
                        const i = a * e + t * e;
                        this.playFrequencyAsTone(o[e], a, t, r, i);
                    }
                }
                playFrequencyAsTone(e, a, t, o, r = 0) {
                    this.initialized || this.initialize();
                    const i = (o ?? this.audioCtx.currentTime) + r;
                    this.gainNode.gain.setValueAtTime(0, i), this.gainNode.gain.linearRampToValueAtTime(1, i + 0.1), this.oscillatorNode.frequency.setValueAtTime(e, i), this.gainNode.gain.setValueAtTime(1, i + a - 0.1), this.gainNode.gain.exponentialRampToValueAtTime(0.001, i + a - 0.001), this.gainNode.gain.setValueAtTime(0, i + a);
                }
            };
        },
        675498: (e, a, t) => {
            "use strict";
            t.d(a, { W: () => i, x: () => n });
            var o = t(85375),
                r = t(94909);
            const i = (e) => !0,
                n = ({ cardId: e, cardType: a, converterOptions: t, data: i }) => ({ cardState: o.uW.DEFAULT, layout: { [o.uW.DEFAULT]: { size: "large" }, [o.uW.CONDENSED]: { size: "large" }, [o.uW.STATIC]: { size: "large" } }, card: { card_name: a, on_visibility: { scribe: "show" }, id: e, components: { [o.uW.DEFAULT]: [o.Fw.SPACE], [o.uW.STATIC]: [o.Fw.SPACE] }, destinations: {}, media_entities: {}, components_data: { [o.Fw.SPACE]: { type: "space", data: { id: (0, r.SI)(i, "string_value", "id"), clip_metadata: (0, r.SI)(i, "string_value", "clip_metadata") } } } } });
        },
        213836: (e, a, t) => {
            "use strict";
            t.d(a, { Z: () => d });
            var o = t(202784),
                r = t(325686),
                i = t(392237),
                n = t(707816),
                s = t(794294);
            function d({ color: e = i.default.theme.colors.white, opacity: a = 0.15, scale: t, size: d, translate: c }) {
                const _ = { backgroundColor: e, transform: [{ translate3d: `${c.x}px, ${c.y}px, 0` }, { scale: t }], opacity: a, ...(0, n.M8)(d) };
                return o.createElement(r.Z, { style: [_, s.Z.transitionTransform, l.audioCircle] });
            }
            const l = i.default.create((e) => ({ audioCircle: { position: "absolute", borderRadius: e.borderRadii.infinite, pointerEvents: "none" } }));
        },
        230966: (e, a, t) => {
            "use strict";
            t.d(a, { Z: () => l });
            var o = t(202784),
                r = t(7632),
                i = t(707816),
                n = t(213836),
                s = t(840940),
                d = t(822682);
            function l(e) {
                const { size: a } = e,
                    t = a * c,
                    i = e.paused ? 0 : e.audioLevel,
                    l = (0, r.X)(e.participantIndex);
                return o.createElement(o.Fragment, null, o.createElement(s.Z, { color: l }), o.createElement(n.Z, { scale: _(i), size: t, translate: h(i, a) }), o.createElement(n.Z, { scale: _(i), size: t, translate: h(i, a) }), o.createElement(n.Z, { scale: _(i), size: t, translate: h(i, a) }), o.createElement(d.Z, { profileImageUrl: e.profileImageUrl, scale: u(i), size: t }));
            }
            const c = 0.692,
                _ = (e) => 0.95 + (0.2 + (0, i.TN)(0.5)) * e,
                u = (e) => 1 + 0.05 * e,
                h = (e, a) => ({ x: (0, i.EO)() * e * (0, i.TN)(0.05 * a), y: (0, i.EO)() * e * (0, i.TN)(0.05 * a) });
        },
        272594: (e, a, t) => {
            "use strict";
            t.d(a, { Z: () => l });
            var o = t(202784),
                r = t(822240),
                i = t(707816),
                n = t(213836);
            const s = (0, r.Z)(0, 20),
                d = 0.05;
            function l(e) {
                const { color: a, size: t } = e,
                    r = o.useRef({ scales: s.map(() => u(0)) }),
                    l = e.paused ? 0 : e.audioLevel,
                    _ = Math.floor((0, i.TN)(5, 2));
                return (
                    r.current.scales.forEach((e, a) => {
                        if (a % _ != 0) return e;
                        r.current.scales[a] = u(l);
                    }),
                    o.createElement(
                        o.Fragment,
                        null,
                        s.map((e) => o.createElement(n.Z, { color: a, key: e, opacity: d, scale: r.current.scales[e], size: t, translate: c })),
                    )
                );
            }
            const c = { x: 0, y: 0 },
                _ = { circleMinimumScale: 0.05, circleMaximumScale: 0.5, circlePositionOffset: 10, circleRandomNoise: 0.2, circleScaleRandomProportion: 0.1 };
            function u(e, a = _) {
                const t = (e + (0, i.TN)(a.circleRandomNoise)) / (1 + a.circleRandomNoise),
                    o = (0, i.TN)(1) * a.circleScaleRandomProportion + t * (1 - a.circleScaleRandomProportion);
                return 1 + a.circleMinimumScale + o * (a.circleMaximumScale - a.circleMinimumScale);
            }
        },
        503195: (e, a, t) => {
            "use strict";
            t.r(a), t.d(a, { default: () => d });
            var o = t(202784),
                r = t(890601),
                i = t(783427),
                n = t(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M20.998 15.5V1.66l-12 3.6v10.21c-.607-.3-1.3-.47-2-.47-2.031 0-4 1.4-4 3.5s1.969 3.5 4 3.5 4-1.4 4-3.5V6.74l8-2.4v8.13c-.607-.3-1.3-.47-2-.47-2.031 0-4 1.4-4 3.5s1.969 3.5 4 3.5 4-1.4 4-3.5z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const d = s;
        },
        447486: (e, a, t) => {
            "use strict";
            t.d(a, { Z: () => n });
            var o = t(22525),
                r = t(789403),
                i = t(123751);
            class n {
                constructor(e) {
                    this.httpClient = e;
                }
                load(e) {
                    return this.httpClient
                        ? ((e, a) => {
                              if (!s(a)) return Promise.resolve(a);
                              const t = (0, o.Uf)(a, 0),
                                  r = ((e) => {
                                      const a = e.id,
                                          t = e.mediaKey,
                                          o = e.acquisitionParams?.clip_id,
                                          r = { broadcastId: a, contentId: t, contentType: "broadcast", displayType: "content", expandedUrl: `https://twitter.com/i/spaces/${a}`, playbackType: "application/x-mpegURL", isLive: e.isLive ?? !0, shouldLoop: !1, unavailableInPeriscope: !0 };
                                      return o && ((r.isLive = !1), (r.expandedUrl = `https://twitter.com/i/spaces/${a}?clipID=${o}`), (r.shouldLoop = !0)), r;
                                  })(a.source);
                              return Promise.resolve({ ...a, client: "web", tracks: [{ ...t, ...r, id: 0 }], currentTrackId: 0, source: { ...a.source, trackId: 0 } });
                          })(this.httpClient, e)
                        : Promise.reject(r.Z.MEDIA_TEARDOWN_ERROR);
                }
            }
            const s = (e) => e.source && e.source.type === i.P.AUDIO_SPACE;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/modules.audio-6107ac1a.e562d31a.js.map

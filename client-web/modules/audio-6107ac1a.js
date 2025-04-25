(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["modules.audio-6107ac1a"],
    {
        564824: (e) => {
            e.exports = { queryId: "GrNDdHaEEHcaAReaaDeg3w", operationName: "AudioSpaceAddSharing", operationType: "mutation", metadata: { featureSwitches: ["creator_subscriptions_tweet_preview_api_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls", "withAuxiliaryUserLabels"] } };
        },
        315683: (e) => {
            e.exports = { queryId: "pcNrj-KeOVKmpu9SyCFYJQ", operationName: "AudioSpaceById", operationType: "query", metadata: { featureSwitches: ["spaces_2022_h2_spaces_communities", "spaces_2022_h2_clipping", "creator_subscriptions_tweet_preview_api_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        81177: (e) => {
            e.exports = { queryId: "YMbfLMTUUEzEEMibvvR26Q", operationName: "AudioSpaceDeleteSharing", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        477291: (e) => {
            e.exports = { queryId: "NTq79TuSz6fHj8lQaferJw", operationName: "AudioSpaceSearch", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        176340: (e, a, o) => {
            "use strict";
            o.d(a, { Z: () => E });
            o(571372);
            var r = o(163889),
                t = o(703710),
                n = (o(136728), o(614983)),
                i = o.n(n),
                s = o(392237),
                d = o(870358),
                l = o(557281),
                c = o(952183),
                _ = o(877905),
                u = o(44527);
            function h(e) {
                i()(e, "audioSpace is required");
                const { metadata: a, participants: o, sharings: r, ...t } = e;
                i()(a, "metadata is required");
                const { rest_id: n, state: d } = a;
                i()(n, "rest_id is required"), i()(d, "state is required");
                const u = (function (e) {
                        if (e && e.result && "Community" === e.result.__typename) {
                            const { __typename: a, rest_id: o, ...r } = e.result,
                                { name: t } = r,
                                n = s.default.theme.colors.gray500,
                                i = (0, c.Wb)(r),
                                d = (0, c.TB)(r),
                                l = i || d,
                                _ = l?.url;
                            return { rest_id: o, color: n, name: t, image_url: _ };
                        }
                    })(a.community_results),
                    h = (function (e, a) {
                        const o = e?.total,
                            r = m(e?.admins, a),
                            t = m(e?.speakers, a),
                            n = m(e?.listeners, a);
                        return { total: o, admins: r, speakers: t, listeners: n };
                    })(o, u),
                    b = (function (e) {
                        if (!e) return [];
                        const a = e.items
                            .map((e) => {
                                const a = p(e.user_results?.result),
                                    o = e.shared_item;
                                if ("AudioSpaceSharedTweet" === o.__typename) {
                                    if ("Tweet" === o.tweet_results?.result?.__typename) {
                                        const { __typename: r, ...t } = o.tweet_results?.result || {},
                                            n = (0, _.y9)(t);
                                        if (n) {
                                            const { cards: o, publishedArticles: r, tweets: t, users: i } = n.entities,
                                                s = (0, l.F)(t, o, i, r, n.result);
                                            if (s) return { id: e.sharing_id, user: a, tweet: s };
                                        }
                                    }
                                    return null;
                                }
                                return null;
                            })
                            .filter(Boolean);
                        return a;
                    })(r),
                    w = p(a.creator_results?.result),
                    D = w?.screen_name,
                    f = w?.profile_image_extensions_media_color?.palette,
                    { cohosts: y, host: g } = (function (e, a) {
                        let o;
                        const r = [];
                        a
                            ? e.admins.forEach((e) => {
                                  e.twitter_screen_name === a ? (o = e) : r.push(e);
                              })
                            : (o = e.admins[0]);
                        return { host: o, cohosts: r };
                    })(h, D);
                return i()(g, "host is required"), { ...t, ...a, rest_id: n, state: d, host: g, hostPalette: f, cohosts: y, participants: h, sharings: b, ended_at: a.ended_at ? parseInt(a.ended_at, 10) : void 0, total_live_listeners: a.total_live_listeners ?? 0, total_replay_watched: a.total_replay_watched ?? 0, followed_by_host: a.creator_results?.result?.legacy?.followed_by, community: u };
            }
            function m(e, a) {
                return e
                    ? e.map(({ user_results: e, ...o }) => {
                          const r = { ...o, user_id: e?.rest_id, community: void 0, is_blue_verified: void 0, verified_type: void 0, highlightedLabel: void 0 };
                          if (a) {
                              const e = a.color,
                                  t = Boolean(o.community_role && o.community_role !== d.WW.NonMember);
                              r.community = { color: e, isMember: t };
                          }
                          return e?.result && "User" === e.result.__typename && ((r.is_blue_verified = e.result.is_blue_verified), (r.verified_type = e.result.legacy?.verified_type), (r.highlightedLabel = (0, u.H)(e.result.identity_profile_labels_highlighted_label?.label))), r;
                      })
                    : [];
            }
            function p(e) {
                if (e && "User" === e.__typename) {
                    const { __typename: a, ...o } = e,
                        r = (0, _.Hy)(o);
                    if (r) return r.entities.users[r.result];
                }
                return null;
            }
            var b = o(564824),
                w = o.n(b),
                D = o(315683),
                f = o.n(D),
                y = o(81177),
                g = o.n(y),
                M = o(477291),
                v = o.n(M),
                A = o(593588),
                T = o.n(A),
                k = o(443127),
                I = o.n(k),
                P = o(587541),
                S = o.n(P),
                N = o(389073),
                x = o(615656);
            const E = ({ apiClient: e, featureSwitches: a, jotaiStore: r }) => ({
                    spacebar: () => e.getUnversioned("/fleets/v1/fleetline", { only_spaces: !0 }, {}),
                    byId(n, i = {}) {
                        const s = "byId",
                            d = i.isMetatagsQuery || !1;
                        return e
                            .graphQL(
                                f(),
                                { id: n, isMetatagsQuery: d, ...(0, t.d)(a), withReplays: !0, withListeners: !0 },
                                L(
                                    s,
                                    n,
                                    (e, a) => (
                                        e.forEach((e) => {
                                            const { code: a } = e;
                                            a === x.ZP.GenericAccessDenied &&
                                                Promise.all([
                                                    o.e("icons.7"),
                                                    o.e("icons.15"),
                                                    o.e("icons.8"),
                                                    o.e("icons.3"),
                                                    o.e("icons.24"),
                                                    o.e("icons.9"),
                                                    o.e("icons.22"),
                                                    o.e("icons.12"),
                                                    o.e("modules.common-e907d115"),
                                                    o.e("modules.common-e019dbda"),
                                                    o.e("icons.5"),
                                                    o.e("icons.6"),
                                                    o.e("icons.14"),
                                                    o.e("icons.18"),
                                                    o.e("icons.2"),
                                                    o.e("icons.21"),
                                                    o.e("icons.16"),
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
                                                    o.e("icons.1"),
                                                    o.e("icons.28"),
                                                    o.e("icons.27"),
                                                    o.e("icons.0"),
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
                                                    o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-de203a7b"),
                                                    o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                                                    o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                                                    o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                                                    o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                                                    o.e("loader.AudioDock"),
                                                ])
                                                    .then(o.bind(o, 106006))
                                                    .then(({ removedFromSpaceAtom: e }) => {
                                                        r?.set(e);
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
                        const o = "subscribeToScheduledSpaceById";
                        return e.graphQL(I(), { id: a }, L(o, a)).catch(C(o)).then(z(o));
                    },
                    unsubscribeFromScheduledSpaceById(a) {
                        const o = "unsubscribeFromScheduledSpaceById";
                        return e.graphQL(S(), { id: a }, L(o, a)).catch(C(o)).then(z(o));
                    },
                    fetchTopics: () => e.graphQL(T(), {}),
                    search(a, o) {
                        const r = "spacesSearch";
                        return e
                            .graphQL(v(), { query: a, filter: o }, L(r, a))
                            .catch(C(r))
                            .then((e) =>
                                e?.search_by_raw_query?.audio_spaces_grouped_by_section
                                    ? (function (e) {
                                          if (!Array.isArray(e.sections)) return { sections: [] };
                                          const a = { sections: [] };
                                          return (
                                              e.sections.forEach((e) => {
                                                  const { destination: o, name: r } = e;
                                                  if (Array.isArray(e.items)) {
                                                      const t = [];
                                                      e.items.forEach((e) => {
                                                          e?.space?.rest_id && t.push(e.space.rest_id);
                                                      }),
                                                          r && o && a.sections.push({ name: r, destination: o, items: t });
                                                  }
                                              }),
                                              a
                                          );
                                      })(e?.search_by_raw_query?.audio_spaces_grouped_by_section)
                                    : { sections: [] },
                            );
                    },
                    addSharing: (a, o) => e.graphQL(w(), { audio_space_id: a, sharing: { shared_tweet: { tweet_id: o } } }, L("addSharing", a)),
                    deleteSharing: (a, o) => e.graphQL(g(), { audio_space_id: a, sharing_id: o }, L("deleteSharing", a)),
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
            function L(e, a, o = R) {
                return function (t, n) {
                    let i = !1;
                    if (t.length) {
                        const [o] = t,
                            { code: n, message: s, path: d } = o;
                        let l;
                        const c = Z.find(({ matches: e }) => e(s));
                        if (c?.message) l = q(e, c.message);
                        else if (Array.isArray(d)) {
                            const a = d.map(V).join(".");
                            l = q(e, a);
                        } else l = q(e, s || "isFatalError");
                        (0, r.ZP)(l, { extra: { code: n, id: a, message: s, path: d } }), (i = !0);
                    }
                    return !o(t, n) && i;
                };
            }
            function V(e) {
                return "number" == typeof e ? "#" : e;
            }
            const Z = ["Overcapacity: Unspecified", "Timeout: Unspecified"].map((e) => ({ matches: (a) => a && e.toLowerCase() === a.toLowerCase(), message: e }));
        },
        787210: (e, a, o) => {
            "use strict";
            o.d(a, { Z: () => n });
            var r = o(716406),
                t = o(624479);
            const n = ({ apiClient: e, featureSwitches: a }) => ({
                fetchPresence: (a, o = {}) => {
                    const { only_spaces: n, userIds: i } = a,
                        s = { user_ids: i.join(","), only_spaces: n };
                    return e.getUnversioned("/fleets/v1/avatar_content", s, o).then((e) => {
                        const { users: a, refresh_delay_secs: o = t.vj } = e,
                            n = 0 === o ? t.vj : o,
                            s = Date.now() + 1e3 * n,
                            d = Object.fromEntries(i.map((e) => [e, { expiry: s, spaces: void 0, refresh_delay_secs: n }])),
                            l = a && (0, r.Z)(a, (e, a) => ({ ...e, expiry: s, refresh_delay_secs: n }));
                        return (l || d) && { entities: { userPresence: { ...d, ...l } } };
                    });
                },
            });
        },
        910626: (e, a, o) => {
            "use strict";
            o.d(a, { Y: () => r });
            const r = Object.freeze({ card: "card", audiospace_ring: "audiospace_ring", spacebar: "spacebar" });
        },
        161104: (e, a, o) => {
            "use strict";
            o.d(a, { Z: () => r });
            const r = class {
                initialize() {
                    (this.audioCtx = new (window.AudioContext || window.webkitAudioContext)()), (this.oscillatorNode = this.audioCtx.createOscillator()), (this.gainNode = this.audioCtx.createGain()), this.oscillatorNode.connect(this.gainNode), this.oscillatorNode.start(0), this.gainNode.connect(this.audioCtx.destination), (this.gainNode.gain.value = 0), (this.initialized = !0);
                }
                mapDataPointsToFrequencies(e, a = 440, o = 1760) {
                    let r = 1 / 0,
                        t = -1 / 0;
                    e.forEach((e) => {
                        (r = Math.min(e, r)), (t = Math.max(e, t));
                    });
                    const n = o - a,
                        i = t - r;
                    return 0 === i ? e.map((e) => (a + o) / 2) : e.map((e) => ((e - r) / i) * n + a);
                }
                playTone(e) {
                    this.initialized || this.initialize();
                    const a = this.audioCtx.currentTime;
                    this.oscillatorNode.frequency.setValueAtTime(440, a), this.gainNode.gain.setValueAtTime(0, a), this.gainNode.gain.linearRampToValueAtTime(1, a + 0.1), this.oscillatorNode.frequency.linearRampToValueAtTime(1760, a + e), this.gainNode.gain.setValueAtTime(1, a + (e - 0.1)), this.gainNode.gain.exponentialRampToValueAtTime(0.001, a + (e - 0.001)), this.gainNode.gain.setValueAtTime(0, a + e);
                }
                playLinearConnectedDataPointsAsTone(e, a) {
                    this.initialized || this.initialize();
                    const o = this.mapDataPointsToFrequencies(e.map((e) => e.value)),
                        r = this.audioCtx.currentTime,
                        t = a / (o.length - 1);
                    this.oscillatorNode.frequency.setValueAtTime(o[0], r), this.gainNode.gain.setValueAtTime(0, r), this.gainNode.gain.linearRampToValueAtTime(1, r + 0.1);
                    for (let e = 0; e < o.length; e++) this.oscillatorNode.frequency.linearRampToValueAtTime(o[e], r + e * t);
                    this.gainNode.gain.setValueAtTime(1, r + (a - 0.1)), this.gainNode.gain.exponentialRampToValueAtTime(0.001, r + (a - 0.001)), this.gainNode.gain.setValueAtTime(0, r + a);
                }
                playDisconnectedDataPointsAsTone(e, a, o) {
                    this.initialized || this.initialize();
                    const r = this.mapDataPointsToFrequencies(e.map((e) => e.value)),
                        t = this.audioCtx.currentTime;
                    this.gainNode.gain.setValueAtTime(0, t);
                    for (let e = 0; e < r.length; e++) {
                        const n = a * e + o * e;
                        this.playFrequencyAsTone(r[e], a, o, t, n);
                    }
                }
                playFrequencyAsTone(e, a, o, r, t = 0) {
                    this.initialized || this.initialize();
                    const n = (r ?? this.audioCtx.currentTime) + t;
                    this.gainNode.gain.setValueAtTime(0, n), this.gainNode.gain.linearRampToValueAtTime(1, n + 0.1), this.oscillatorNode.frequency.setValueAtTime(e, n), this.gainNode.gain.setValueAtTime(1, n + a - 0.1), this.gainNode.gain.exponentialRampToValueAtTime(0.001, n + a - 0.001), this.gainNode.gain.setValueAtTime(0, n + a);
                }
            };
        },
        675498: (e, a, o) => {
            "use strict";
            o.d(a, { W: () => n, x: () => i });
            var r = o(85375),
                t = o(94909);
            const n = (e) => !0,
                i = ({ cardId: e, cardType: a, converterOptions: o, data: n }) => ({ cardState: r.uW.DEFAULT, layout: { [r.uW.DEFAULT]: { size: "large" }, [r.uW.CONDENSED]: { size: "large" }, [r.uW.STATIC]: { size: "large" } }, card: { card_name: a, on_visibility: { scribe: "show" }, id: e, components: { [r.uW.DEFAULT]: [r.Fw.SPACE], [r.uW.STATIC]: [r.Fw.SPACE] }, destinations: {}, media_entities: {}, components_data: { [r.Fw.SPACE]: { type: "space", data: { id: (0, t.SI)(n, "string_value", "id"), clip_metadata: (0, t.SI)(n, "string_value", "clip_metadata") } } } } });
        },
        213836: (e, a, o) => {
            "use strict";
            o.d(a, { Z: () => d });
            var r = o(202784),
                t = o(325686),
                n = o(392237),
                i = o(707816),
                s = o(794294);
            function d({ color: e = n.default.theme.colors.white, opacity: a = 0.15, scale: o, size: d, translate: c }) {
                const _ = { backgroundColor: e, transform: [{ translate3d: `${c.x}px, ${c.y}px, 0` }, { scale: o }], opacity: a, ...(0, i.M8)(d) };
                return r.createElement(t.Z, { style: [_, s.Z.transitionTransform, l.audioCircle] });
            }
            const l = n.default.create((e) => ({ audioCircle: { position: "absolute", borderRadius: e.borderRadii.infinite, pointerEvents: "none" } }));
        },
        230966: (e, a, o) => {
            "use strict";
            o.d(a, { Z: () => l });
            var r = o(202784),
                t = o(7632),
                n = o(707816),
                i = o(213836),
                s = o(840940),
                d = o(822682);
            function l(e) {
                const { size: a } = e,
                    o = a * c,
                    n = e.paused ? 0 : e.audioLevel,
                    l = (0, t.X)(e.participantIndex);
                return r.createElement(r.Fragment, null, r.createElement(s.Z, { color: l }), r.createElement(i.Z, { scale: _(n), size: o, translate: h(n, a) }), r.createElement(i.Z, { scale: _(n), size: o, translate: h(n, a) }), r.createElement(i.Z, { scale: _(n), size: o, translate: h(n, a) }), r.createElement(d.Z, { profileImageUrl: e.profileImageUrl, scale: u(n), size: o }));
            }
            const c = 0.692,
                _ = (e) => 0.95 + (0.2 + (0, n.TN)(0.5)) * e,
                u = (e) => 1 + 0.05 * e,
                h = (e, a) => ({ x: (0, n.EO)() * e * (0, n.TN)(0.05 * a), y: (0, n.EO)() * e * (0, n.TN)(0.05 * a) });
        },
        272594: (e, a, o) => {
            "use strict";
            o.d(a, { Z: () => l });
            var r = o(202784),
                t = o(822240),
                n = o(707816),
                i = o(213836);
            const s = (0, t.Z)(0, 20),
                d = 0.05;
            function l(e) {
                const { color: a, size: o } = e,
                    t = r.useRef({ scales: s.map(() => u(0)) }),
                    l = e.paused ? 0 : e.audioLevel,
                    _ = Math.floor((0, n.TN)(5, 2));
                return (
                    t.current.scales.forEach((e, a) => {
                        if (a % _ != 0) return e;
                        t.current.scales[a] = u(l);
                    }),
                    r.createElement(
                        r.Fragment,
                        null,
                        s.map((e) => r.createElement(i.Z, { color: a, key: e, opacity: d, scale: t.current.scales[e], size: o, translate: c })),
                    )
                );
            }
            const c = { x: 0, y: 0 },
                _ = { circleMinimumScale: 0.05, circleMaximumScale: 0.5, circlePositionOffset: 10, circleRandomNoise: 0.2, circleScaleRandomProportion: 0.1 };
            function u(e, a = _) {
                const o = (e + (0, n.TN)(a.circleRandomNoise)) / (1 + a.circleRandomNoise),
                    r = (0, n.TN)(1) * a.circleScaleRandomProportion + o * (1 - a.circleScaleRandomProportion);
                return 1 + a.circleMinimumScale + r * (a.circleMaximumScale - a.circleMinimumScale);
            }
        },
        503195: (e, a, o) => {
            "use strict";
            o.r(a), o.d(a, { default: () => d });
            var r = o(202784),
                t = o(890601),
                n = o(783427),
                i = o(347101);
            const s = (e = {}) => {
                const { direction: a } = (0, n.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M20.998 15.5V1.66l-12 3.6v10.21c-.607-.3-1.3-.47-2-.47-2.031 0-4 1.4-4 3.5s1.969 3.5 4 3.5 4-1.4 4-3.5V6.74l8-2.4v8.13c-.607-.3-1.3-.47-2-.47-2.031 0-4 1.4-4 3.5s1.969 3.5 4 3.5 4-1.4 4-3.5z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const d = s;
        },
        447486: (e, a, o) => {
            "use strict";
            o.d(a, { Z: () => i });
            var r = o(22525),
                t = o(789403),
                n = o(123751);
            class i {
                constructor(e) {
                    this.httpClient = e;
                }
                load(e) {
                    return this.httpClient
                        ? ((e, a) => {
                              if (!s(a)) return Promise.resolve(a);
                              const o = (0, r.Uf)(a, 0),
                                  t = ((e) => {
                                      const a = e.id,
                                          o = e.mediaKey,
                                          r = e.acquisitionParams?.clip_id,
                                          t = { broadcastId: a, contentId: o, contentType: "broadcast", displayType: "content", expandedUrl: `https://twitter.com/i/spaces/${a}`, playbackType: "application/x-mpegURL", isLive: e.isLive ?? !0, shouldLoop: !1, unavailableInPeriscope: !0 };
                                      return r && ((t.isLive = !1), (t.expandedUrl = `https://twitter.com/i/spaces/${a}?clipID=${r}`), (t.shouldLoop = !0)), t;
                                  })(a.source);
                              return Promise.resolve({ ...a, client: "web", tracks: [{ ...o, ...t, id: 0 }], currentTrackId: 0, source: { ...a.source, trackId: 0 } });
                          })(this.httpClient, e)
                        : Promise.reject(t.Z.MEDIA_TEARDOWN_ERROR);
                }
            }
            const s = (e) => e.source && e.source.type === n.P.AUDIO_SPACE;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/modules.audio-6107ac1a.659b454a.js.map

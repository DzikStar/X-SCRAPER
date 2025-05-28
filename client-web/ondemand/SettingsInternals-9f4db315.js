(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-9f4db315"],
    {
        25770: (e) => {
            e.exports = { queryId: "ZA6VQ0tEQOXPnq5Zep5h9g", operationName: "DmAllSearchSlice", operationType: "query", metadata: { featureSwitches: ["profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        892314: (e) => {
            e.exports = { queryId: "YUpv7YPz8uB7j6rAaCCF7g", operationName: "DmGroupSearchSlice", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        407737: (e) => {
            e.exports = { queryId: "IeVzC7xN98zzw1b6Whvd_A", operationName: "DmMutedTimeline", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        845308: (e) => {
            e.exports = { queryId: "W26fnOQ7uTdektooZAiuYw", operationName: "DmPeopleSearchSlice", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        386569: (e) => {
            e.exports = { queryId: "2qKKYFQift8p5-J1k6kqxQ", operationName: "WriteEmailNotificationSettings", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        346759: (e) => {
            e.exports = { queryId: "JpjlNgn4sLGvS6tgpTzYBg", operationName: "ViewerEmailSettings", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        919299: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => b });
            var r = n(506899),
                s = n(414742),
                i = n(703710),
                o = n(771613),
                a = n(25770),
                l = n.n(a),
                c = n(892314),
                d = n.n(c),
                u = n(407737),
                _ = n.n(u),
                h = n(845308),
                p = n.n(h),
                m = n(934309);
            const g = (e, t) => {
                    let n = !1;
                    if (t?.dmPeopleSearchSlice) n = !!t?.dmPeopleSearchSlice?.items?.length;
                    else if (t?.dmGroupSearchSlice) n = !!t?.dmGroupSearchSlice?.items?.length;
                    else if (t?.dmMessageSearchSlice) {
                        if ("DMMessageSlice" !== t?.dmMessageSearchSlice.__typename) return !0;
                        n = !!t?.dmMessageSearchSlice?.items?.length;
                    }
                    return !n && (0, s.jB)(e);
                },
                f = (e) => {
                    const t = e.items?.map((e) => e?.dm_convo_search);
                    return (0, r.Fv)(t, [o.ZP]);
                },
                b = ({ apiClient: e, featureSwitches: t }) => ({
                    fetchDMAllSearch: (t) =>
                        t
                            ? e.graphQL(l(), { count: t?.count, query: t.query, withAttachments: !0, withConversationQueryHighlights: !0, withMessageQueryHighlights: !0, withMessages: !0 }, g).then((e) => {
                                  const t = e?.dmGroupSearchSlice,
                                      n = e?.dmMessageSearchSlice,
                                      s = e?.dmPeopleSearchSlice;
                                  let i = m.d;
                                  if (t) {
                                      const { entities: e, result: n } = f(t),
                                          r = t.items?.find((e) => e?.highlighting?.query_tokens),
                                          s = r && t.items?.map((e) => e?.highlighting?.query_tokens);
                                      i = { result: i?.result.concat({ groupData: { result: n, highlightingTokens: s } }), entities: e };
                                  }
                                  if (s) {
                                      const { entities: e, result: t } = f(s),
                                          n = s.items?.find((e) => e?.highlighting?.query_tokens),
                                          r = n && s.items?.map((e) => e?.highlighting?.query_tokens);
                                      i = { ...i, result: i?.result.concat({ peopleData: { result: t, highlightingTokens: r } }), entities: { ...i?.entities, ...e } };
                                  }
                                  if (n && "DMMessageSlice" === n?.__typename) {
                                      const e = n?.items,
                                          t = (0, r.Fv)(e, [o.JJ]),
                                          s = e?.map((e) => e?.dm_event?.legacy?.conversation),
                                          a = e?.find((e) => e?.highlighting?.query_tokens),
                                          l = a && e?.map((e) => e?.highlighting?.query_tokens),
                                          { entities: c, result: d } = (0, r.Fv)(s, [o.ZP]);
                                      i = { ...i, result: i?.result?.concat({ messageData: { conversationIds: d, entryIds: t?.result, highlightingTokens: l } }), entities: { ...t?.entities, conversations: { ...i?.entities?.conversations, ...c?.conversations } } };
                                  }
                                  return i;
                              })
                            : Promise.resolve(m.d),
                    fetchDMGroupSearch: (t) =>
                        t
                            ? e.graphQL(d(), { ...t, withConversationQueryHighlights: !0 }, g).then((e) => {
                                  const t = e?.dmGroupSearchSlice;
                                  if (t) {
                                      const { entities: e, result: n } = f(t);
                                      return { result: n, entities: e, slice_info: t.sliceInfo };
                                  }
                                  return m.d;
                              })
                            : Promise.resolve(m.d),
                    fetchDMPeopleSearch: (t) =>
                        t
                            ? e.graphQL(p(), { ...t, withConversationQueryHighlights: !0 }, g).then((e) => {
                                  const t = e?.dmPeopleSearchSlice;
                                  if (t) {
                                      const { entities: e, result: n } = f(t);
                                      return { result: n, entities: e, slice_info: t.sliceInfo };
                                  }
                                  return m.d;
                              })
                            : Promise.resolve(m.d),
                    fetchDMMutedUsers: ({ count: n, cursor: r }) =>
                        e
                            .graphQL(
                                _(),
                                { count: n, cursor: r, includePromotedContent: !1, ...(0, i.d)(t) },
                                (0, s.kj)((e) => !e?.viewer?.dm_muting_timeline?.timeline, "GQL URT: Failed to render DM Muting timeline"),
                            )
                            .then((e) => {
                                const t = e.viewer?.dm_muting_timeline?.timeline;
                                return t || m.cY;
                            }),
                });
        },
        327202: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var r = n(163889),
                s = n(386569),
                i = n.n(s),
                o = n(346759),
                a = n.n(o);
            const l = ({ apiClient: e, featureSwitches: t }) => ({
                fetch: () =>
                    e.graphQL(a(), {}).then((e) => {
                        let t;
                        if (e.viewer) {
                            const { user_results: n } = e.viewer;
                            "User" === n?.result?.__typename && (t = n.result.notifications_email_notifications);
                        }
                        return t || (0, r.ZP)("GraphQL email notification settings query returned no settings object."), t || {};
                    }),
                update(t) {
                    const { settings: n, userId: r } = t;
                    return e.graphQL(i(), { userId: r, settings: n });
                },
            });
        },
        745978: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => r });
            const r = ({ apiClient: e, featureSwitches: t }) => ({ fetchMutedKeywords: (t, n) => e.get("mutes/keywords/list", t, n), fetchDiscouragedKeywords: (t, n) => e.get("mutes/keywords/discouraged", t, n), addMutedKeyword: (t, n) => e.post("mutes/keywords/create", t, {}, n), deleteMutedKeyword: (t, n) => e.post("mutes/keywords/destroy", t, {}, n), updateMutedKeyword: (t, n) => e.post("mutes/keywords/update", t, {}, n) });
        },
        816776: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => i });
            var r = n(360917),
                s = n.n(r);
            const i = ({ apiClient: e, featureSwitches: t }) => ({
                fetch(t, n = {}) {
                    const { userId: r } = t;
                    return e.get(`strato/column/User/${r}/search/searchSafetyReadonly`, s(), n, "");
                },
                set(t, n = {}) {
                    const { userId: r, ...i } = t;
                    return e.post(`strato/column/User/${r}/search/searchSafety`, i, s(), { ...n, "content-type": "application/json" }, "");
                },
            });
        },
        740527: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => d });
            var r = n(769471),
                s = n(934309),
                i = n(750085),
                o = n(401388),
                a = n(626421),
                l = n(497461);
            const c = (e) => {
                    const t = (0, l.$)(),
                        n = ((e) => {
                            if ("SegmentedTimelines" !== e.body.__typename) return;
                            const t = e.body.timelines.map((e) => ({ graphQLTimelineId: e.timeline.id, id: e.id, labelText: e.labelText, scribeConfig: (0, o.Z)(e.scribeConfig) ? void 0 : { ...e.scribeConfig }, refreshIntervalSec: e.refreshIntervalSec }));
                            return { initialTabId: e.body.initialTimeline && e.body.initialTimeline.id, tabs: t };
                        })(e),
                        r = ((e, t) => {
                            const { header: n } = t;
                            if (!n || "TopicPageHeader" !== n.__typename) return;
                            const { __typename: r, facepile: s, topic: i, ...o } = n,
                                l = s && (0, a.Zn)(e, s);
                            return { ...o, topicId: (0, a.S0)(e, i), facepile: l };
                        })(t, e),
                        s = ((e, t) => {
                            const { navBar: n } = t;
                            if (!n) return {};
                            switch (n.__typename) {
                                case "TitleNavBar":
                                    return { title: n.title, subtitle: n.subtitle };
                                case "TopicPageNavBar":
                                    return { navBar: { topicId: (0, a.S0)(e, n.topic), clientEventInfo: n.clientEventInfo }, title: n.topic.name, subtitle: void 0 };
                                default:
                                    return {};
                            }
                        })(t, e);
                    return { globalObjects: t, pageConfiguration: { id: e.id, tabs: n, header: r, navBar: s.navBar && s.navBar, title: s.title, subtitle: s.subtitle, scribeConfig: { ...e.scribeConfig } } };
                },
                d = (e) => {
                    const t = "Timeline" === (n = e.body).__typename && n.timeline ? (0, i.Z)(n.timeline) : "SegmentedTimelines" === n.__typename && n.initialTimeline?.timeline.timeline ? (0, i.Z)(n.initialTimeline.timeline.timeline) : (0, i.Z)(s.cY);
                    var n;
                    const { globalObjects: o, pageConfiguration: a } = c(e);
                    return { ...t, globalObjects: (0, r.Z)(o, t.globalObjects), pageConfiguration: a };
                };
        },
        771613: (e, t, n) => {
            "use strict";
            n.d(t, { JJ: () => u, ZP: () => h });
            n(136728);
            var r = n(506899),
                s = n(967262),
                i = n(275365),
                o = n(318752),
                a = n(701788),
                l = n(171697);
            const c = Object.freeze({ GROUP: "GroupDm", ONE_TO_ONE: "OneToOneDm", UNKNOWN: "Unknown" }),
                d = Object.freeze({ MessageCreate: i.Cr.MESSAGE, ParticipantsJoin: i.Cr.PARTICIPANTS_JOIN, ParticipantsLeave: i.Cr.PARTICIPANTS_LEAVE, ConversationNameUpdate: i.Cr.CONVERSATION_NAME_UPDATE, JoinConversation: i.Cr.JOIN_CONVERSATION }),
                u = new r.fK.Entity(
                    "entries",
                    { message_data: { attachment: { card: a.Z, tweet: { status: l.Z } } } },
                    {
                        processStrategy: (e, t, n) => {
                            const { legacy: r, rest_id: i } = e?.dm_event || {},
                                a = r?.event_type,
                                { affects_sort: l, request_id: c } = r || {};
                            let u,
                                _,
                                h = "Unknown";
                            a in d && (h = d[a]);
                            const p = r?.conversation?.rest_id,
                                m = r?.event_detail?.dm,
                                g = r?.created_at_millis,
                                { card: f, media: b, tweet_results: w, urls_entity: y } = m?.attachments?.[0] || {};
                            if (
                                (f?.legacy && (u = { card: f }),
                                y?.length &&
                                    m.text &&
                                    y.forEach((e) => {
                                        e?.indices[0] && (_ = m.text.slice(0, e?.indices[0]).concat(m.text.slice(e.indices[1])));
                                    }),
                                "Tweet" === w?.result?.__typename)
                            ) {
                                const e = w?.result?.legacy?.entities;
                                let t;
                                e?.media?.length ? (t = e?.media[0]) : e?.urls?.length && (t = e?.urls[0]);
                                const { display_url: n, expanded_url: r, id_str: s, indices: i, url: o } = t || {},
                                    { extended_entities: a } = w?.result?.legacy || {},
                                    l = a?.media?.map((e) => {
                                        if (e?.video_info) {
                                            const t = e?.video_info?.variants;
                                            return { ...e, video_info: { ...e?.video_info, variants: t } };
                                        }
                                        return e;
                                    }),
                                    c = { ...w?.result?.legacy?.extended_entities, media: l };
                                u = { tweet: { status: { ...w?.result, legacy: { ...w?.result?.legacy, extended_entities: c } }, display_url: n, expanded_url: r, indices: i, url: o, id: s } };
                            }
                            const v = b ? (0, s.m)(b) : null;
                            v && v.type && ("photo" === v.type ? (u = { photo: v }) : "video" === v.type ? (u = { video: v }) : "animated_gif" === v.type && (u = { animated_gif: v }));
                            const S = { affects_sort: l, request_id: c, time: g, type: h, conversation_id: p, message_data: { id: i, text: _ || m?.text, entities: m?.entities, recipient_id: m?.recipient_results?.result?.rest_id, sender_id: m?.sender_results?.result.rest_id, attachment: u }, id: i };
                            return (0, o.Z)(S, t, n);
                        },
                        idAttribute: (e) => e?.dm_event?.rest_id,
                    },
                ),
                _ = new r.fK.Entity(
                    "conversations",
                    {},
                    {
                        processStrategy: (e, t, n) => {
                            const { id: r, labels: s, legacy: a, perspectival_conversation_metadata: l, rest_id: d, tag: u } = e || {},
                                _ = {},
                                h = [];
                            for (const e of a?.participants_metadata || []) {
                                const t = e?.user_results?.result;
                                if (!t || !t.legacy || !t.core) continue;
                                const n = { description: t.legacy.description, id_str: t.legacy.id_str, name: t.core.name, profile_image_url_https: t.legacy.profile_image_url_https || "", screen_name: t.core.screen_name };
                                (_[t.rest_id] = n), h.push({ user: n, user_id: t.rest_id });
                            }
                            let p = a?.metadata?.avatar;
                            const m = p?.media_info,
                                g = e?.last_readable_event_id;
                            if (m) {
                                const { original_img_height: e, original_img_url: t, original_img_width: n } = m || {};
                                p = { image: { original_info: { height: e, width: n, url: t } } };
                            }
                            const f = a?.metadata?.conversation_type === c.GROUP ? i.eD.GROUP : i.eD.ONE_TO_ONE,
                                b = { ...a?.perspectival_conversation_metadata, ...a?.metadata, ...l, id: r, conversation_id: d, avatar: p, labels: s, last_readable_event_id: g, type: f, participants: h, users: _, tag: u };
                            return (0, o.Z)(b, t, n);
                        },
                        idAttribute: (e) => e?.legacy?.conversation_id,
                    },
                );
            _.define({ entities: u });
            const h = _;
        },
        917009: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var r = n(202784),
                s = n(154003),
                i = n(111677),
                o = n.n(i),
                a = n(379327);
            const l = o().af40a8e0,
                c = (e) => {
                    const { "aria-label": t, link: n } = e;
                    return r.createElement(s.ZP, { "aria-label": t, hoverLabel: { label: l }, icon: r.createElement(a.default, null), link: n, pullRight: !0, type: "primaryText" });
                };
        },
        947135: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            var r = n(202784),
                s = n(242454),
                i = n(190286);
            class o extends r.Component {
                constructor(e) {
                    super(e),
                        (this._handleClick = (e) => {
                            this.setState({ showConfirmation: !0 });
                        }),
                        (this._handleCancel = () => {
                            this.setState({ showConfirmation: !1 });
                        }),
                        (this._handleConfirm = () => {
                            this.setState({ showConfirmation: !1 }), this.props.onConfirmationSheetConfirm();
                        }),
                        (this.state = { showConfirmation: !1 });
                }
                render() {
                    const { align: e, color: t, confirmationSheetConfirmButtonLabel: n, confirmationSheetConfirmButtonType: o, confirmationSheetHeadline: a, confirmationSheetText: l, label: c } = this.props;
                    return r.createElement(r.Fragment, null, r.createElement(s.Z, { align: e, color: t, label: c, onPress: this._handleClick }), this.state.showConfirmation ? r.createElement(i.Z, { confirmButtonLabel: n, confirmButtonType: o, headline: a, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: l }) : null);
                }
            }
            o.defaultProps = { color: "red500", align: "center" };
        },
        333241: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => S });
            n(136728);
            var r = n(202784),
                s = n(638236),
                i = n(811176),
                o = n(111677),
                a = n.n(o),
                l = n(415506),
                c = n(516951),
                d = n(443781),
                u = n(376293),
                _ = n(847607),
                h = n(417714),
                p = n(988823);
            const m = "block",
                g = "mute",
                f = "removeFollower",
                b = "report",
                w = "share",
                y = a().j7bb1a43,
                v = a().hef5960c,
                S = (0, p.M)((e) => {
                    const { featureSwitches: t } = (0, d.QZ)(),
                        { onBlock: n, onClose: o, onMute: a, onRemoveFollower: p, onReportUser: S, onShare: C, onUnblock: P, onUnmute: Z, user: E } = e,
                        T = [],
                        I = (t, n) => {
                            const { confirm: r, onClose: s } = e;
                            if (t) {
                                const { label: e, ...i } = t;
                                r({ confirmButtonLabel: e, ...i })
                                    .then(n, c.Z)
                                    .finally(s);
                            } else n();
                        };
                    !!window.navigator.share &&
                        !E.protected &&
                        !E.blocking &&
                        !E.blocked_by &&
                        T.push({
                            Icon: s.Z,
                            onClick: () => {
                                o(), C();
                            },
                            testID: w,
                            text: v,
                        });
                    !E.blocking &&
                        T.push({
                            ...(0, _.N1)(
                                E,
                                () => {
                                    o(), a();
                                },
                                () => {
                                    o(), Z();
                                },
                            ),
                            testID: g,
                        });
                    E.followed_by &&
                        T.push({
                            ...(0, h.l)({
                                removeFollowerAction: (e) => {
                                    I(e, p);
                                },
                                user: E,
                            }),
                            testID: f,
                        }),
                        T.push((0, u.op)({ blockAction: (e) => I(e, n), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: m, unblockAction: (e) => I(e, P), user: E })),
                        T.push({
                            Icon: l.default,
                            onClick: () => {
                                o(), S();
                            },
                            testID: b,
                            text: y({ screenName: E.screen_name }),
                        });
                    const k = T.map(({ Icon: e, onClick: t, testID: n, text: r }) => ({ text: r, onClick: t, Icon: e, testID: n }));
                    return r.createElement(i.Z, { items: k, onCloseRequested: o });
                });
        },
        811105: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => _ });
            var r = n(202784),
                s = n(325686),
                i = n(731708),
                o = n(392237),
                a = n(111677),
                l = n.n(a);
            const c = l().c174e46e,
                d = l().a39075ff,
                u = o.default.create((e) => ({ listItem: { display: "list-item", listStyleType: "disc", marginBottom: e.spaces.space12, marginStart: e.spaces.space12 }, scopesHeader: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, toggleMoreLink: { color: e.colors.link, weight: "bold" } })),
                _ = (e) => {
                    const { scopes: t, size: n, title: o } = e,
                        [a, l] = r.useState(!1),
                        _ = r.useCallback(() => {
                            l((e) => !e);
                        }, []),
                        h = a ? t : t.slice(0, 3),
                        p = t.length > 3;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(i.ZP, { style: u.scopesHeader, weight: "bold" }, o),
                        r.createElement(
                            s.Z,
                            { role: "list" },
                            h.map((e) => r.createElement(i.ZP, { color: "subtext2" === n ? "gray700" : void 0, key: e.name, role: "listitem", size: n, style: u.listItem }, e.description)),
                        ),
                        p && a ? r.createElement(i.ZP, { onPress: _, style: u.toggleMoreLink }, c) : null,
                        p && !a ? r.createElement(i.ZP, { onPress: _, style: u.toggleMoreLink }, d({ n: t.length - 3 })) : null,
                    );
                };
        },
        534763: (e, t, n) => {
            "use strict";
            n.d(t, { H: () => c, b: () => d });
            var r = n(807896),
                s = n(202784),
                i = n(392237),
                o = n(779610);
            const a = (e) => {
                    const { Icon: t, iconColor: n, testID: r } = e;
                    return s.createElement(t, { style: n ? { color: i.default.theme.colors[n] } : l.thumbnail, testID: r });
                },
                l = i.default.create((e) => ({ thumbnail: { color: e.colors.gray700 } }));
            function c(e) {
                const { Icon: t, iconColor: n, testID: i, ...l } = e;
                return s.createElement(o.Z, (0, r.Z)({}, l, { thumbnail: s.createElement(a, { Icon: t, iconColor: n, testID: i }), thumbnailSize: "large" }));
            }
            function d(e) {
                const { link: t, ...n } = e;
                return s.createElement(o.Z, (0, r.Z)({}, n, { link: { external: !0, pathname: e.link } }));
            }
        },
        864479: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            var r = n(807896),
                s = n(202784),
                i = n(771099);
            const o = (e) => (t) => s.createElement(i.$6, null, (n) => s.createElement(e, (0, r.Z)({}, t, { isInSidebar: n })));
        },
        507651: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var r = n(807896),
                s = n(202784),
                i = n(107267),
                o = n(403556),
                a = n(791632);
            const l = (e) => {
                    const t = (0, i.useHistory)();
                    return s.createElement(o.Z, (0, r.Z)({}, e, { isCompact: (0, a.HD)(t) }));
                },
                c = s.memo(l);
        },
        293988: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => C });
            var r = n(202784),
                s = n(154003),
                i = n(111677),
                o = n.n(i),
                a = n(74514),
                l = n(405303),
                c = n(684511),
                d = n(860174),
                u = n(71620),
                _ = n(668214),
                h = n(257166),
                p = n(919022);
            const m = (e, t) => !(!t.allowPromptForPush || !h.selectShouldPromptBrowserPush(e)),
                g = (0, _.Z)()
                    .propsFromState(() => ({ shouldPromptPush: m }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                f = o().bdba3e1a,
                b = o().c4da7d28,
                w = o().j87c21f4,
                y = o().iebc30ca,
                v = o().dc740eb2;
            class S extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? r.createElement(s.ZP, { "aria-label": b, hoverLabel: { label: y }, icon: r.createElement(a.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : r.createElement(s.ZP, { "aria-label": f, hoverLabel: { label: w }, icon: r.createElement(l.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
                        }),
                        (this._handleFollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e, shouldPromptPush: t } = this.props;
                            t && this.setState({ showingPushPrompt: !0 }),
                                this._updateDeviceFollowing(!0).then((t) => {
                                    e && this._scribeAction("device_follow_without_follow"), this._scribeAction("on");
                                });
                        }),
                        (this._handleUnfollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e } = this.props;
                            this._updateDeviceFollowing(!1).then((t) => {
                                e && this._scribeAction("device_unfollow_without_follow"), this._scribeAction("off");
                            });
                        }),
                        (this.state = { showingPushPrompt: !1 });
                }
                render() {
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(c.Z, { fullScreen: !0, message: v }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: n, userId: r } = this.props;
                    return n(r, { device: e }).catch(t(d.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const C = g(S);
        },
        23134: (e, t, n) => {
            "use strict";
            n.d(t, { C: () => B });
            n(136728);
            var r = n(202784),
                s = n(190286),
                i = n(723587),
                o = n(111677),
                a = n.n(o),
                l = n(615656),
                c = n(666670),
                d = n(757953),
                u = n(879596),
                _ = n(323683),
                h = n(479506),
                p = n(942893),
                m = n(500002),
                g = n(233391),
                f = n(288955),
                b = n(71620),
                w = n(668214),
                y = n(390387),
                v = n(601576),
                S = n(919022);
            const C = (e, t) => t.user || S.ZP.select(e, t.userId),
                P = (0, w.Z)()
                    .propsFromState(() => ({ isLoggedIn: y.Qb, user: C }))
                    .propsFromActions(() => ({ addToast: v.fz, cancelPendingFollow: S.ZP.cancelPendingFollow, createLocalApiErrorHandler: (0, b.zr)("FOLLOW_USER_BUTTON"), fetchOneUserIfNeeded: S.ZP.fetchOneIfNeeded, follow: S.ZP.follow, unblock: S.ZP.unblock, unfollow: S.ZP.unfollow }))
                    .withAnalytics(),
                Z = (e) => `${e}-follow`,
                E = (e) => `${e}-unfollow`,
                T = (e) => `${e}-block`,
                I = (e) => `${e}-unblock`,
                k = (e) => `${e}-cancel`,
                U = (e) => `${e}-subscribe`,
                A = (e) => `${e}-manageSubscription`,
                F = a().hbe4feb5,
                D = a().df4c86b0,
                x = a().bba40ffa,
                L = a().f558829e,
                O = a().a6941096,
                N = a().j24c37b2,
                M = a().if8cd2a4,
                H = a().b5972260;
            class q extends r.Component {
                constructor(e) {
                    super(e),
                        (this._fetchUserIfNeeded = () => {
                            const { createLocalApiErrorHandler: e, fetchOneUserIfNeeded: t, isRelay: n, userId: r } = this.props;
                            r && !n && t(r).catch(e(c.F));
                        }),
                        (this._handleClose = () => {
                            this.setState({ showDialog: !1, dialogText: void 0, dialogHeadline: void 0 });
                        }),
                        (this._handleCancelPendingFollow = () => {
                            const { cancelPendingFollow: e, createLocalApiErrorHandler: t, user: n } = this.props;
                            n && e(n.id_str).catch(t({ defaultToast: { text: H }, showToast: !0 }));
                        }),
                        (this._handleLoggedInFollow = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, follow: n, isFollowNudge: r, onFollowClick: s, promotedContent: i, user: o } = this.props;
                            o && n(o.id_str, { promotedContent: i, isFollowNudge: r }).then(() => (o.protected && e({ text: F({ screenName: o.screen_name }) }), s && s(), this._scribe({ action: "follow" })), t({ ...this._followApiErrorHandlingConfiguration, showToast: !0 }));
                        }),
                        (this._handleLoggedOutFollow = () => {
                            this._scribe({ action: "follow_attempt" });
                        }),
                        (this._handleUnblock = () => {
                            const { createLocalApiErrorHandler: e, promotedContent: t, unblock: n, user: r } = this.props;
                            r && (n(r.id_str, { promotedContent: t }).catch(e(u.D)), this._scribe({ action: "unblock" }));
                        }),
                        (this._handleUnfollow = () => {
                            const { createLocalApiErrorHandler: e, promotedContent: t, unfollow: n, user: r } = this.props;
                            if (r) return n(r.id_str, { promotedContent: t }).catch(e(_.X)), this._scribe({ action: "unfollow" });
                        }),
                        (this._handleSuperFollow = () => {
                            const { history: e, referringPage: t, user: n } = this.props;
                            if (n) return this._scribe({ element: "super_follow_subscribe_button", action: "click" }), e.push(`/${n.screen_name}/creator-subscriptions/subscribe`, { referring_page: t ?? "profile_intent" });
                        }),
                        (this._handleUnSuperFollow = () => {
                            const { history: e, user: t } = this.props;
                            if (t) return this._scribe({ element: "super_follow_unsubscribe_button", action: "click" }), e.push(`/${t.screen_name}/creator-subscriptions/manage`);
                        }),
                        (this.state = { showDialog: !1 });
                }
                componentDidMount() {
                    this.props.isLoggedIn && this._fetchUserIfNeeded(),
                        (this._followApiErrorHandlingConfiguration = {
                            ...d.H,
                            [l.ZP.UserMustBeAlcoholAgeScreened]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: M, dialogHeadline: x });
                                },
                            },
                            [l.ZP.CannotFollowFromCountry]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: O, dialogHeadline: x });
                                },
                            },
                            [l.ZP.BirthdateRequired]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: L, dialogHeadline: D });
                                },
                            },
                        });
                }
                render() {
                    const { buttonType: e, isLoggedIn: t, isSuperFollowSubscriptionEnabled: n, isTransparent: o, relationshipMode: a, showRelationshipChangeConfirmation: l, size: c, style: d, user: u, userId: _ } = this.props,
                        { dialogHeadline: h, dialogText: p, showDialog: m } = this.state,
                        b = u?.screen_name,
                        w = b ? `/${b}` : "",
                        y = { follow: Z(_), unfollow: E(_), cancel: k(_), block: T(_), unblock: I(_), subscribe: U(_), manageSubscription: A(_) },
                        v = !(!u?.follow_request_sent || !u.protected || u.following);
                    return (
                        !!u &&
                        r.createElement(
                            r.Fragment,
                            null,
                            m ? r.createElement(s.Z, { confirmButtonLabel: N, headline: h, onCancel: this._handleClose, onConfirm: this._handleClose, text: p, withCancelButton: !1 }) : null,
                            r.createElement(f.Z, { displayMode: g.BH.follow, postLoginPath: w, userFullName: u.name, userId: _ }, (s) => r.createElement(i.Z, { buttonType: e, isBlocking: u.blocking, isFollowRequestSent: v, isFollowed: !!u.followed_by, isFollowing: !!u.following, isSuperFollowEligible: !!n && u.super_follow_eligible, isSuperFollowing: u.super_following, isTransparent: o, name: b, onCancelPendingFollow: s(this._handleCancelPendingFollow), onFollow: s(this._handleLoggedInFollow, this._handleLoggedOutFollow), onSuperFollow: s(this._handleSuperFollow), onUnSuperFollow: s(this._handleUnSuperFollow), onUnblock: s(this._handleUnblock), onUnfollow: s(this._handleUnfollow), relationshipMode: a, showRelationshipChangeConfirmation: t && l, size: c, style: d, testIDs: y, type: "user" })),
                        )
                    );
                }
                _scribe(e) {
                    const { action: t, element: n } = e,
                        { analytics: r, location: s, promotedContent: i, user: o } = this.props,
                        { items: a } = r.contextualScribeData,
                        l = a?.find((e) => e.item_type === h.Z.ItemType.USER && e.id === o?.id_str),
                        c = [];
                    o ? c.push({ ...l, ...p.Z.getUserItem(o, i) }) : l && c.push(l);
                    const d = s.query && s.query.screen_name ? { items: c, context: "profile_intent" } : { items: c };
                    return r.scribe({ element: n, action: t, data: d });
                }
            }
            const B = (0, m.ZP)(P(q));
        },
        583335: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => w });
            var r = n(202784),
                s = n(154003),
                i = n(40904),
                o = n(391366),
                a = n(847607),
                l = n(775412),
                c = n(837731),
                d = n(942893),
                u = n(71620),
                _ = n(668214),
                h = n(629196),
                p = n(601576),
                m = n(919022);
            const g = (e, t) => m.ZP.select(e, t.userId),
                f = (0, _.Z)()
                    .propsFromState(() => ({ user: g }))
                    .propsFromActions(() => ({ addToast: p.fz, createLocalApiErrorHandler: (0, u.zr)("MUTE_BUTTON_CONTAINER"), mute: h.r, unmute: m.ZP.unmute }))
                    .withAnalytics();
            class b extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleMutOrUnmuteToggle = () => {
                            this._handleMuteOrUnmuteToggleHelper();
                        }),
                        (this._handleMuteOrUnmuteToggleHelper = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, mute: n, unmute: r, user: s, userId: i } = this.props;
                            return s
                                ? s.muting
                                    ? r(i).then((t) => {
                                          e({ text: (0, a.X6)(s.screen_name) }), this._scribeAction("unmute_user");
                                      }, t(c.G))
                                    : n(i).then((t) => {
                                          e({ text: (0, a.FK)(s.screen_name) }), this._scribeAction("mute_user");
                                      }, t(l.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const t = e.muting ? "destructiveOutlined" : "brandOutlined",
                        n = e.muting ? i.default : o.default,
                        l = e.muting ? (0, a.PY)(e.screen_name) : (0, a.Aq)(e.screen_name),
                        c = e.muting ? a.cm : a.GS;
                    return r.createElement(s.ZP, { "aria-label": l, hoverLabel: { label: c }, icon: r.createElement(n, null), onPress: this._handleMutOrUnmuteToggle, type: t });
                }
                _scribeAction(e) {
                    const { analytics: t, user: n } = this.props;
                    t.scribe({ action: e, data: { items: n ? [d.Z.getUserItem(n)] : [] } });
                }
            }
            const w = f(b);
        },
        301410: (e, t, n) => {
            "use strict";
            n.d(t, { i: () => p.ZP, z: () => b });
            var r = n(202784),
                s = n(928123),
                i = n.n(s),
                o = n(72845),
                a = n.n(o),
                l = n(57074),
                c = n.n(l),
                d = n(516951),
                u = n(88656),
                _ = n(71620),
                h = n(163889),
                p = n(312771);
            const m = ({ render: e }) => e({ fetchStatus: p.ZP.LOADING, data: null, error: null, retry: d.Z });
            class g extends r.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, t) {
                    if (!(e instanceof u.Z)) throw e;
                    this.props.errorHandler(e), (0, h.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const f = ({ query: e, queryRef: t, render: n }) => {
                    const r = i()(e, t);
                    return n({ fetchStatus: p.ZP.LOADED, data: r, error: null, retry: d.Z });
                },
                b = (e, t) =>
                    function ({ fetchPolicy: n = "store-or-network", render: s, variables: i }) {
                        const [o, l] = a()(e),
                            d = (0, _.n7)(t.errorConfig.context),
                            u = c()(i),
                            h = r.useCallback(() => {
                                l(u, { fetchPolicy: "network-only" });
                            }, [l, u]);
                        return (
                            r.useLayoutEffect(() => {
                                l(u, { fetchPolicy: n });
                            }, [n, l, u]),
                            o
                                ? r.createElement(
                                      r.Suspense,
                                      { fallback: r.createElement(m, { render: s }) },
                                      r.createElement(g, { errorHandler: d(t.errorConfig.options || {}), key: o.fetchKey, retry: h }, (t, n) => (t ? s({ fetchStatus: p.ZP.FAILED, error: t, data: null, retry: n }) : r.createElement(f, { query: e, queryRef: o, render: s }))),
                                  )
                                : null
                        );
                    };
        },
        900128: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => v });
            var r = n(202784),
                s = n(325686),
                i = n(731708),
                o = n(855488),
                a = n(420412),
                l = n(844685),
                c = n(392237),
                d = n(111677),
                u = n.n(d),
                _ = n(666536),
                h = n(668214),
                p = n(395042),
                m = n(919022);
            const g = (0, h.Z)()
                    .propsFromState(() => ({ viewerUser: m.ZP.selectViewerUser, usernameData: p.El }))
                    .adjustStateProps(({ usernameData: e, viewerUser: t }) => {
                        const n = (e.suggestions ? e.suggestions.map((e) => e.suggestion) : []).filter((t) => t !== e.username),
                            r = t?.screen_name;
                        return { viewerUser: t, suggestions: n, valid: (!!r && r.toLowerCase() === e.username?.toLowerCase()) || e.valid, validatedScreenName: e.username, validationError: e.desc };
                    })
                    .propsFromActions(() => ({ fetchUsernameAvailability: p.HR })),
                f = u().d1f6d336,
                b = u().de65c756;
            class w extends r.Component {
                constructor(e) {
                    super(e),
                        (this._fetchUsernameStatus = (e) => {
                            const { fetchUsernameAvailability: t, viewerUser: n } = this.props;
                            n && t({ email: n.email && n.email[0] && n.email[0].address, full_name: n.name, suggest: !0, username: e });
                        }),
                        (this._handleTypedFieldChange = (e) => {
                            const { onScreenNameChanged: t } = this.props;
                            this._fetchUsernameStatusDebounced(e.target.value), this.setState({ value: e.target.value }), t(e.target.value);
                        }),
                        (this._handleItemSelect = (e) => {
                            const { onScreenNameChanged: t } = this.props;
                            if (e.target instanceof Node) {
                                const n = e.target.textContent;
                                this.setState({ value: n }), t(n);
                            }
                        }),
                        (this.state = { value: e.viewerUser && e.viewerUser.screen_name }),
                        (this._fetchUsernameStatusDebounced = (0, _.Z)((...e) => this._fetchUsernameStatus(...e), 250));
                }
                componentDidMount() {
                    const { viewerUser: e } = this.props;
                    e && this._fetchUsernameStatus(e.screen_name);
                }
                _renderOption(e, t) {
                    return r.createElement(i.ZP, { color: "link", key: t, onPress: this._handleItemSelect, role: "button", style: y.altOptionText, withInteractiveStyling: !0 }, e);
                }
                render() {
                    const { suggestions: e, valid: t, validatedScreenName: n, validationError: i, viewerUser: c } = this.props;
                    if (!c) return null;
                    const d = !(n === c.screen_name || t || !i);
                    return r.createElement(
                        s.Z,
                        null,
                        r.createElement(o.Z, { autoComplete: "off", autoCorrect: !1, errorText: i, invalid: d, label: f, name: "typedScreenName", onChange: this._handleTypedFieldChange, spellCheck: "false", value: this.state.value }),
                        r.createElement(a.Z, null),
                        r.createElement(l.Z, { text: b }),
                        r.createElement(
                            s.Z,
                            { style: y.container },
                            e.map((e, t) => this._renderOption(e, t)),
                        ),
                    );
                }
            }
            const y = c.default.create((e) => ({ container: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, altOptionText: { display: "block", paddingVertical: e.spaces.space12 } })),
                v = g(w);
        },
        288955: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var r = n(807896),
                s = n(202784),
                i = n(443781),
                o = n(369241);
            class a extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showLoginPrompt: !1 }),
                        (this._getHandler =
                            (e, t) =>
                            (n, ...r) => {
                                this.props.disabled || this.context.loggedInUserId ? e && e(n, ...r) : (n && n.preventDefault && n.preventDefault(), t && t(), this.setState({ showLoginPrompt: !0 }));
                            }),
                        (this._handleClose = () => {
                            this.setState({ showLoginPrompt: !1 });
                        });
                }
                render() {
                    const { children: e, disabled: t, ...n } = this.props;
                    return s.createElement(s.Fragment, null, e(this._getHandler), this.state.showLoginPrompt && s.createElement(o.ZP, (0, r.Z)({ onClose: this._handleClose }, n)));
                }
            }
            (a.defaultProps = { disabled: !1 }), (a.contextType = i.rC);
            const l = a;
        },
        733487: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => P });
            var r = n(202784),
                s = n(154003),
                i = n(111677),
                o = n.n(i),
                a = n(40904),
                l = n(391366),
                c = n(775412),
                d = n(837731),
                u = n(942893),
                _ = n(71620),
                h = n(668214),
                p = n(296196),
                m = n(601576),
                g = n(919022);
            const f = (e, t) => g.ZP.select(e, t.userId),
                b = (0, h.Z)()
                    .propsFromState(() => ({ user: f }))
                    .propsFromActions(() => ({ addToast: m.fz, createLocalApiErrorHandler: (0, _.zr)("MUTE_DM_BUTTON_CONTAINER"), muteDMUser: p.muteDMUser, unmuteDMUser: p.unmuteDMUser }))
                    .withAnalytics(),
                w = o().e67b2d65,
                y = o().f05597b3,
                v = o().gde6b425,
                S = o().e308019b;
            class C extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleUnmuteToggle = () => {
                            this._handleUnmuteToggleHelper();
                        }),
                        (this._handleUnmuteToggleHelper = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, muteDMUser: n, unmuteDMUser: r, user: s, userId: i } = this.props;
                            return s
                                ? s.dm_muting
                                    ? r(i).then((t) => {
                                          e({ text: S({ name: s.name }) }), this._scribeAction("unmute_user");
                                      }, t(d.G))
                                    : n(i).then((t) => {
                                          e({ text: v({ name: s.name }) }), this._scribeAction("mute_user");
                                      }, t(c.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const t = e.dm_muting ? "destructiveOutlined" : "brandOutlined",
                        n = e.dm_muting ? a.default : l.default,
                        i = e.dm_muting ? y({ screenName: e.screen_name }) : w({ screenName: e.screen_name });
                    return r.createElement(s.ZP, { "aria-label": i, icon: r.createElement(n, null), onPress: this._handleUnmuteToggle, type: t });
                }
                _scribeAction(e) {
                    const { analytics: t, user: n } = this.props;
                    t.scribe({ action: e, data: { items: n ? [u.Z.getUserItem(n)] : [] } });
                }
            }
            const P = b(C);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-9f4db315.0c55951a.js.map

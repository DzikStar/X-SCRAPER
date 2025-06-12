(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-9f4db315"],
    {
        25770: (e) => {
            e.exports = { queryId: "Ohq34UUvwVMOCcrVZvXcxw", operationName: "DmAllSearchSlice", operationType: "query", metadata: { featureSwitches: ["payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "responsive_web_graphql_timeline_navigation_enabled"], fieldToggles: ["withAuxiliaryUserLabels"] } };
        },
        892314: (e) => {
            e.exports = { queryId: "YUpv7YPz8uB7j6rAaCCF7g", operationName: "DmGroupSearchSlice", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        407737: (e) => {
            e.exports = { queryId: "moZx2Xl6PDoMwOnkepKwIA", operationName: "DmMutedTimeline", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "payments_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
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
                i = n(414742),
                s = n(703710),
                a = n(771613),
                o = n(25770),
                l = n.n(o),
                c = n(892314),
                u = n.n(c),
                d = n(407737),
                _ = n.n(d),
                m = n(845308),
                p = n.n(m),
                h = n(934309);
            const g = (e, t) => {
                    let n = !1;
                    if (t?.dmPeopleSearchSlice) n = !!t?.dmPeopleSearchSlice?.items?.length;
                    else if (t?.dmGroupSearchSlice) n = !!t?.dmGroupSearchSlice?.items?.length;
                    else if (t?.dmMessageSearchSlice) {
                        if ("DMMessageSlice" !== t?.dmMessageSearchSlice.__typename) return !0;
                        n = !!t?.dmMessageSearchSlice?.items?.length;
                    }
                    return !n && (0, i.jB)(e);
                },
                f = (e) => {
                    const t = e.items?.map((e) => e?.dm_convo_search);
                    return (0, r.Fv)(t, [a.ZP]);
                },
                b = ({ apiClient: e, featureSwitches: t }) => ({
                    fetchDMAllSearch: (t) =>
                        t
                            ? e.graphQL(l(), { count: t?.count, query: t.query, withAttachments: !0, withConversationQueryHighlights: !0, withMessageQueryHighlights: !0, withMessages: !0 }, g).then((e) => {
                                  const t = e?.dmGroupSearchSlice,
                                      n = e?.dmMessageSearchSlice,
                                      i = e?.dmPeopleSearchSlice;
                                  let s = h.d;
                                  if (t) {
                                      const { entities: e, result: n } = f(t),
                                          r = t.items?.find((e) => e?.highlighting?.query_tokens),
                                          i = r && t.items?.map((e) => e?.highlighting?.query_tokens);
                                      s = { result: s?.result.concat({ groupData: { result: n, highlightingTokens: i } }), entities: e };
                                  }
                                  if (i) {
                                      const { entities: e, result: t } = f(i),
                                          n = i.items?.find((e) => e?.highlighting?.query_tokens),
                                          r = n && i.items?.map((e) => e?.highlighting?.query_tokens);
                                      s = { ...s, result: s?.result.concat({ peopleData: { result: t, highlightingTokens: r } }), entities: { ...s?.entities, ...e } };
                                  }
                                  if (n && "DMMessageSlice" === n?.__typename) {
                                      const e = n?.items,
                                          t = (0, r.Fv)(e, [a.JJ]),
                                          i = e?.map((e) => e?.dm_event?.legacy?.conversation),
                                          o = e?.find((e) => e?.highlighting?.query_tokens),
                                          l = o && e?.map((e) => e?.highlighting?.query_tokens),
                                          { entities: c, result: u } = (0, r.Fv)(i, [a.ZP]);
                                      s = { ...s, result: s?.result?.concat({ messageData: { conversationIds: u, entryIds: t?.result, highlightingTokens: l } }), entities: { ...t?.entities, conversations: { ...s?.entities?.conversations, ...c?.conversations } } };
                                  }
                                  return s;
                              })
                            : Promise.resolve(h.d),
                    fetchDMGroupSearch: (t) =>
                        t
                            ? e.graphQL(u(), { ...t, withConversationQueryHighlights: !0 }, g).then((e) => {
                                  const t = e?.dmGroupSearchSlice;
                                  if (t) {
                                      const { entities: e, result: n } = f(t);
                                      return { result: n, entities: e, slice_info: t.sliceInfo };
                                  }
                                  return h.d;
                              })
                            : Promise.resolve(h.d),
                    fetchDMPeopleSearch: (t) =>
                        t
                            ? e.graphQL(p(), { ...t, withConversationQueryHighlights: !0 }, g).then((e) => {
                                  const t = e?.dmPeopleSearchSlice;
                                  if (t) {
                                      const { entities: e, result: n } = f(t);
                                      return { result: n, entities: e, slice_info: t.sliceInfo };
                                  }
                                  return h.d;
                              })
                            : Promise.resolve(h.d),
                    fetchDMMutedUsers: ({ count: n, cursor: r }) =>
                        e
                            .graphQL(
                                _(),
                                { count: n, cursor: r, includePromotedContent: !1, ...(0, s.d)(t) },
                                (0, i.kj)((e) => !e?.viewer?.dm_muting_timeline?.timeline, "GQL URT: Failed to render DM Muting timeline"),
                            )
                            .then((e) => {
                                const t = e.viewer?.dm_muting_timeline?.timeline;
                                return t || h.cY;
                            }),
                });
        },
        327202: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var r = n(163889),
                i = n(386569),
                s = n.n(i),
                a = n(346759),
                o = n.n(a);
            const l = ({ apiClient: e, featureSwitches: t }) => ({
                fetch: () =>
                    e.graphQL(o(), {}).then((e) => {
                        let t;
                        if (e.viewer) {
                            const { user_results: n } = e.viewer;
                            "User" === n?.result?.__typename && (t = n.result.notifications_email_notifications);
                        }
                        return t || (0, r.ZP)("GraphQL email notification settings query returned no settings object."), t || {};
                    }),
                update(t) {
                    const { settings: n, userId: r } = t;
                    return e.graphQL(s(), { userId: r, settings: n });
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
            n.d(t, { Z: () => s });
            var r = n(360917),
                i = n.n(r);
            const s = ({ apiClient: e, featureSwitches: t }) => ({
                fetch(t, n = {}) {
                    const { userId: r } = t;
                    return e.get(`strato/column/User/${r}/search/searchSafetyReadonly`, i(), n, "");
                },
                set(t, n = {}) {
                    const { userId: r, ...s } = t;
                    return e.post(`strato/column/User/${r}/search/searchSafety`, s, i(), { ...n, "content-type": "application/json" }, "");
                },
            });
        },
        740527: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => u });
            var r = n(769471),
                i = n(934309),
                s = n(750085),
                a = n(401388),
                o = n(626421),
                l = n(497461);
            const c = (e) => {
                    const t = (0, l.$)(),
                        n = ((e) => {
                            if ("SegmentedTimelines" !== e.body.__typename) return;
                            const t = e.body.timelines.map((e) => ({ graphQLTimelineId: e.timeline.id, id: e.id, labelText: e.labelText, scribeConfig: (0, a.Z)(e.scribeConfig) ? void 0 : { ...e.scribeConfig }, refreshIntervalSec: e.refreshIntervalSec }));
                            return { initialTabId: e.body.initialTimeline && e.body.initialTimeline.id, tabs: t };
                        })(e),
                        r = ((e, t) => {
                            const { header: n } = t;
                            if (!n || "TopicPageHeader" !== n.__typename) return;
                            const { __typename: r, facepile: i, topic: s, ...a } = n,
                                l = i && (0, o.Zn)(e, i);
                            return { ...a, topicId: (0, o.S0)(e, s), facepile: l };
                        })(t, e),
                        i = ((e, t) => {
                            const { navBar: n } = t;
                            if (!n) return {};
                            switch (n.__typename) {
                                case "TitleNavBar":
                                    return { title: n.title, subtitle: n.subtitle };
                                case "TopicPageNavBar":
                                    return { navBar: { topicId: (0, o.S0)(e, n.topic), clientEventInfo: n.clientEventInfo }, title: n.topic.name, subtitle: void 0 };
                                default:
                                    return {};
                            }
                        })(t, e);
                    return { globalObjects: t, pageConfiguration: { id: e.id, tabs: n, header: r, navBar: i.navBar && i.navBar, title: i.title, subtitle: i.subtitle, scribeConfig: { ...e.scribeConfig } } };
                },
                u = (e) => {
                    const t = "Timeline" === (n = e.body).__typename && n.timeline ? (0, s.Z)(n.timeline) : "SegmentedTimelines" === n.__typename && n.initialTimeline?.timeline.timeline ? (0, s.Z)(n.initialTimeline.timeline.timeline) : (0, s.Z)(i.cY);
                    var n;
                    const { globalObjects: a, pageConfiguration: o } = c(e);
                    return { ...t, globalObjects: (0, r.Z)(a, t.globalObjects), pageConfiguration: o };
                };
        },
        771613: (e, t, n) => {
            "use strict";
            n.d(t, { JJ: () => d, ZP: () => m });
            n(136728);
            var r = n(506899),
                i = n(967262),
                s = n(275365),
                a = n(318752),
                o = n(701788),
                l = n(171697);
            const c = Object.freeze({ GROUP: "GroupDm", ONE_TO_ONE: "OneToOneDm", UNKNOWN: "Unknown" }),
                u = Object.freeze({ MessageCreate: s.Cr.MESSAGE, ParticipantsJoin: s.Cr.PARTICIPANTS_JOIN, ParticipantsLeave: s.Cr.PARTICIPANTS_LEAVE, ConversationNameUpdate: s.Cr.CONVERSATION_NAME_UPDATE, JoinConversation: s.Cr.JOIN_CONVERSATION }),
                d = new r.fK.Entity(
                    "entries",
                    { message_data: { attachment: { card: o.Z, tweet: { status: l.Z } } } },
                    {
                        processStrategy: (e, t, n) => {
                            const { legacy: r, rest_id: s } = e?.dm_event || {},
                                o = r?.event_type,
                                { affects_sort: l, request_id: c } = r || {};
                            let d,
                                _,
                                m = "Unknown";
                            o in u && (m = u[o]);
                            const p = r?.conversation?.rest_id,
                                h = r?.event_detail?.dm,
                                g = r?.created_at_millis,
                                { card: f, media: b, tweet_results: v, urls_entity: y } = h?.attachments?.[0] || {};
                            if (
                                (f?.legacy && (d = { card: f }),
                                y?.length &&
                                    h.text &&
                                    y.forEach((e) => {
                                        e?.indices[0] && (_ = h.text.slice(0, e?.indices[0]).concat(h.text.slice(e.indices[1])));
                                    }),
                                "Tweet" === v?.result?.__typename)
                            ) {
                                const e = v?.result?.legacy?.entities;
                                let t;
                                e?.media?.length ? (t = e?.media[0]) : e?.urls?.length && (t = e?.urls[0]);
                                const { display_url: n, expanded_url: r, id_str: i, indices: s, url: a } = t || {},
                                    { extended_entities: o } = v?.result?.legacy || {},
                                    l = o?.media?.map((e) => {
                                        if (e?.video_info) {
                                            const t = e?.video_info?.variants;
                                            return { ...e, video_info: { ...e?.video_info, variants: t } };
                                        }
                                        return e;
                                    }),
                                    c = { ...v?.result?.legacy?.extended_entities, media: l };
                                d = { tweet: { status: { ...v?.result, legacy: { ...v?.result?.legacy, extended_entities: c } }, display_url: n, expanded_url: r, indices: s, url: a, id: i } };
                            }
                            const w = b ? (0, i.m)(b) : null;
                            w && w.type && ("photo" === w.type ? (d = { photo: w }) : "video" === w.type ? (d = { video: w }) : "animated_gif" === w.type && (d = { animated_gif: w }));
                            const S = { affects_sort: l, request_id: c, time: g, type: m, conversation_id: p, message_data: { id: s, text: _ || h?.text, entities: h?.entities, recipient_id: h?.recipient_results?.result?.rest_id, sender_id: h?.sender_results?.result.rest_id, attachment: d }, id: s };
                            return (0, a.Z)(S, t, n);
                        },
                        idAttribute: (e) => e?.dm_event?.rest_id,
                    },
                ),
                _ = new r.fK.Entity(
                    "conversations",
                    {},
                    {
                        processStrategy: (e, t, n) => {
                            const { id: r, labels: i, legacy: o, perspectival_conversation_metadata: l, rest_id: u, tag: d } = e || {},
                                _ = {},
                                m = [];
                            for (const e of o?.participants_metadata || []) {
                                const t = e?.user_results?.result;
                                if (!t || !t.legacy || !t.core) continue;
                                const n = { description: t.legacy.description, id_str: t.legacy.id_str, name: t.core.name, profile_image_url_https: t.legacy.profile_image_url_https || "", screen_name: t.core.screen_name };
                                (_[t.rest_id] = n), m.push({ user: n, user_id: t.rest_id });
                            }
                            let p = o?.metadata?.avatar;
                            const h = p?.media_info,
                                g = e?.last_readable_event_id;
                            if (h) {
                                const { original_img_height: e, original_img_url: t, original_img_width: n } = h || {};
                                p = { image: { original_info: { height: e, width: n, url: t } } };
                            }
                            const f = o?.metadata?.conversation_type === c.GROUP ? s.eD.GROUP : s.eD.ONE_TO_ONE,
                                b = { ...o?.perspectival_conversation_metadata, ...o?.metadata, ...l, id: r, conversation_id: u, avatar: p, labels: i, last_readable_event_id: g, type: f, participants: m, users: _, tag: d };
                            return (0, a.Z)(b, t, n);
                        },
                        idAttribute: (e) => e?.legacy?.conversation_id,
                    },
                );
            _.define({ entities: d });
            const m = _;
        },
        917009: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var r = n(202784),
                i = n(154003),
                s = n(111677),
                a = n.n(s),
                o = n(379327);
            const l = a().af40a8e0,
                c = (e) => {
                    const { "aria-label": t, link: n } = e;
                    return r.createElement(i.ZP, { "aria-label": t, hoverLabel: { label: l }, icon: r.createElement(o.default, null), link: n, pullRight: !0, type: "primaryText" });
                };
        },
        947135: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => a });
            var r = n(202784),
                i = n(242454),
                s = n(190286);
            class a extends r.Component {
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
                    const { align: e, color: t, confirmationSheetConfirmButtonLabel: n, confirmationSheetConfirmButtonType: a, confirmationSheetHeadline: o, confirmationSheetText: l, label: c } = this.props;
                    return r.createElement(r.Fragment, null, r.createElement(i.Z, { align: e, color: t, label: c, onPress: this._handleClick }), this.state.showConfirmation ? r.createElement(s.Z, { confirmButtonLabel: n, confirmButtonType: a, headline: o, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: l }) : null);
                }
            }
            a.defaultProps = { color: "red500", align: "center" };
        },
        333241: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => S });
            n(136728);
            var r = n(202784),
                i = n(638236),
                s = n(811176),
                a = n(111677),
                o = n.n(a),
                l = n(415506),
                c = n(516951),
                u = n(443781),
                d = n(376293),
                _ = n(847607),
                m = n(417714),
                p = n(988823);
            const h = "block",
                g = "mute",
                f = "removeFollower",
                b = "report",
                v = "share",
                y = o().j7bb1a43,
                w = o().hef5960c,
                S = (0, p.M)((e) => {
                    const { featureSwitches: t } = (0, u.QZ)(),
                        { onBlock: n, onClose: a, onMute: o, onRemoveFollower: p, onReportUser: S, onShare: C, onUnblock: Z, onUnmute: T, user: E } = e,
                        P = [],
                        k = (t, n) => {
                            const { confirm: r, onClose: i } = e;
                            if (t) {
                                const { label: e, ...s } = t;
                                r({ confirmButtonLabel: e, ...s })
                                    .then(n, c.Z)
                                    .finally(i);
                            } else n();
                        };
                    !!window.navigator.share &&
                        !E.protected &&
                        !E.blocking &&
                        !E.blocked_by &&
                        P.push({
                            Icon: i.Z,
                            onClick: () => {
                                a(), C();
                            },
                            testID: v,
                            text: w,
                        });
                    !E.blocking &&
                        P.push({
                            ...(0, _.N1)(
                                E,
                                () => {
                                    a(), o();
                                },
                                () => {
                                    a(), T();
                                },
                            ),
                            testID: g,
                        });
                    E.followed_by &&
                        P.push({
                            ...(0, m.l)({
                                removeFollowerAction: (e) => {
                                    k(e, p);
                                },
                                user: E,
                            }),
                            testID: f,
                        }),
                        P.push((0, d.op)({ blockAction: (e) => k(e, n), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: d.SC.FOLLOWERS_LIST, testID: h, unblockAction: (e) => k(e, Z), user: E })),
                        P.push({
                            Icon: l.default,
                            onClick: () => {
                                a(), S();
                            },
                            testID: b,
                            text: y({ screenName: E.screen_name }),
                        });
                    const I = P.map(({ Icon: e, onClick: t, testID: n, text: r }) => ({ text: r, onClick: t, Icon: e, testID: n }));
                    return r.createElement(s.Z, { items: I, onCloseRequested: a });
                });
        },
        811105: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => _ });
            var r = n(202784),
                i = n(325686),
                s = n(731708),
                a = n(392237),
                o = n(111677),
                l = n.n(o);
            const c = l().c174e46e,
                u = l().a39075ff,
                d = a.default.create((e) => ({ listItem: { display: "list-item", listStyleType: "disc", marginBottom: e.spaces.space12, marginStart: e.spaces.space12 }, scopesHeader: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, toggleMoreLink: { color: e.colors.link, weight: "bold" } })),
                _ = (e) => {
                    const { scopes: t, size: n, title: a } = e,
                        [o, l] = r.useState(!1),
                        _ = r.useCallback(() => {
                            l((e) => !e);
                        }, []),
                        m = o ? t : t.slice(0, 3),
                        p = t.length > 3;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(s.ZP, { style: d.scopesHeader, weight: "bold" }, a),
                        r.createElement(
                            i.Z,
                            { role: "list" },
                            m.map((e) => r.createElement(s.ZP, { color: "subtext2" === n ? "gray700" : void 0, key: e.name, role: "listitem", size: n, style: d.listItem }, e.description)),
                        ),
                        p && o ? r.createElement(s.ZP, { onPress: _, style: d.toggleMoreLink }, c) : null,
                        p && !o ? r.createElement(s.ZP, { onPress: _, style: d.toggleMoreLink }, u({ n: t.length - 3 })) : null,
                    );
                };
        },
        534763: (e, t, n) => {
            "use strict";
            n.d(t, { H: () => c, b: () => u });
            var r = n(807896),
                i = n(202784),
                s = n(392237),
                a = n(779610);
            const o = (e) => {
                    const { Icon: t, iconColor: n, testID: r } = e;
                    return i.createElement(t, { style: n ? { color: s.default.theme.colors[n] } : l.thumbnail, testID: r });
                },
                l = s.default.create((e) => ({ thumbnail: { color: e.colors.gray700 } }));
            function c(e) {
                const { Icon: t, iconColor: n, testID: s, ...l } = e;
                return i.createElement(a.Z, (0, r.Z)({}, l, { thumbnail: i.createElement(o, { Icon: t, iconColor: n, testID: s }), thumbnailSize: "large" }));
            }
            function u(e) {
                const { link: t, ...n } = e;
                return i.createElement(a.Z, (0, r.Z)({}, n, { link: { external: !0, pathname: e.link } }));
            }
        },
        864479: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => a });
            var r = n(807896),
                i = n(202784),
                s = n(771099);
            const a = (e) => (t) => i.createElement(s.$6, null, (n) => i.createElement(e, (0, r.Z)({}, t, { isInSidebar: n })));
        },
        507651: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var r = n(807896),
                i = n(202784),
                s = n(107267),
                a = n(403556),
                o = n(791632);
            const l = (e) => {
                    const t = (0, s.useHistory)(),
                        { isCompact: n, ...l } = e;
                    return i.createElement(a.Z, (0, r.Z)({}, l, { isCompact: n || (0, o.HD)(t) }));
                },
                c = i.memo(l);
        },
        293988: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => C });
            var r = n(202784),
                i = n(154003),
                s = n(111677),
                a = n.n(s),
                o = n(74514),
                l = n(405303),
                c = n(684511),
                u = n(860174),
                d = n(71620),
                _ = n(668214),
                m = n(257166),
                p = n(919022);
            const h = (e, t) => !(!t.allowPromptForPush || !m.selectShouldPromptBrowserPush(e)),
                g = (0, _.Z)()
                    .propsFromState(() => ({ shouldPromptPush: h }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, d.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                f = a().bdba3e1a,
                b = a().c4da7d28,
                v = a().j87c21f4,
                y = a().iebc30ca,
                w = a().dc740eb2;
            class S extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? r.createElement(i.ZP, { "aria-label": b, hoverLabel: { label: y }, icon: r.createElement(o.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : r.createElement(i.ZP, { "aria-label": f, hoverLabel: { label: v }, icon: r.createElement(l.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(c.Z, { fullScreen: !0, message: w }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: n, userId: r } = this.props;
                    return n(r, { device: e }).catch(t(u.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const C = g(S);
        },
        583335: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => v });
            var r = n(202784),
                i = n(154003),
                s = n(40904),
                a = n(391366),
                o = n(847607),
                l = n(775412),
                c = n(837731),
                u = n(942893),
                d = n(71620),
                _ = n(668214),
                m = n(629196),
                p = n(601576),
                h = n(919022);
            const g = (e, t) => h.ZP.select(e, t.userId),
                f = (0, _.Z)()
                    .propsFromState(() => ({ user: g }))
                    .propsFromActions(() => ({ addToast: p.fz, createLocalApiErrorHandler: (0, d.zr)("MUTE_BUTTON_CONTAINER"), mute: m.r, unmute: h.ZP.unmute }))
                    .withAnalytics();
            class b extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleMutOrUnmuteToggle = () => {
                            this._handleMuteOrUnmuteToggleHelper();
                        }),
                        (this._handleMuteOrUnmuteToggleHelper = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, mute: n, unmute: r, user: i, userId: s } = this.props;
                            return i
                                ? i.muting
                                    ? r(s).then((t) => {
                                          e({ text: (0, o.X6)(i.screen_name) }), this._scribeAction("unmute_user");
                                      }, t(c.G))
                                    : n(s).then((t) => {
                                          e({ text: (0, o.FK)(i.screen_name) }), this._scribeAction("mute_user");
                                      }, t(l.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const t = e.muting ? "destructiveOutlined" : "brandOutlined",
                        n = e.muting ? s.default : a.default,
                        l = e.muting ? (0, o.PY)(e.screen_name) : (0, o.Aq)(e.screen_name),
                        c = e.muting ? o.cm : o.GS;
                    return r.createElement(i.ZP, { "aria-label": l, hoverLabel: { label: c }, icon: r.createElement(n, null), onPress: this._handleMutOrUnmuteToggle, type: t });
                }
                _scribeAction(e) {
                    const { analytics: t, user: n } = this.props;
                    t.scribe({ action: e, data: { items: n ? [u.Z.getUserItem(n)] : [] } });
                }
            }
            const v = f(b);
        },
        301410: (e, t, n) => {
            "use strict";
            n.d(t, { i: () => p.ZP, z: () => b });
            var r = n(202784),
                i = n(928123),
                s = n.n(i),
                a = n(72845),
                o = n.n(a),
                l = n(57074),
                c = n.n(l),
                u = n(516951),
                d = n(88656),
                _ = n(71620),
                m = n(163889),
                p = n(312771);
            const h = ({ render: e }) => e({ fetchStatus: p.ZP.LOADING, data: null, error: null, retry: u.Z });
            class g extends r.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, t) {
                    if (!(e instanceof d.Z)) throw e;
                    this.props.errorHandler(e), (0, m.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const f = ({ query: e, queryRef: t, render: n }) => {
                    const r = s()(e, t);
                    return n({ fetchStatus: p.ZP.LOADED, data: r, error: null, retry: u.Z });
                },
                b = (e, t) =>
                    function ({ fetchPolicy: n = "store-or-network", render: i, variables: s }) {
                        const [a, l] = o()(e),
                            u = (0, _.n7)(t.errorConfig.context),
                            d = c()(s),
                            m = r.useCallback(() => {
                                l(d, { fetchPolicy: "network-only" });
                            }, [l, d]);
                        return (
                            r.useLayoutEffect(() => {
                                l(d, { fetchPolicy: n });
                            }, [n, l, d]),
                            a
                                ? r.createElement(
                                      r.Suspense,
                                      { fallback: r.createElement(h, { render: i }) },
                                      r.createElement(g, { errorHandler: u(t.errorConfig.options || {}), key: a.fetchKey, retry: m }, (t, n) => (t ? i({ fetchStatus: p.ZP.FAILED, error: t, data: null, retry: n }) : r.createElement(f, { query: e, queryRef: a, render: i }))),
                                  )
                                : null
                        );
                    };
        },
        900128: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => w });
            var r = n(202784),
                i = n(325686),
                s = n(731708),
                a = n(855488),
                o = n(420412),
                l = n(844685),
                c = n(392237),
                u = n(111677),
                d = n.n(u),
                _ = n(666536),
                m = n(668214),
                p = n(395042),
                h = n(919022);
            const g = (0, m.Z)()
                    .propsFromState(() => ({ viewerUser: h.ZP.selectViewerUser, usernameData: p.El }))
                    .adjustStateProps(({ usernameData: e, viewerUser: t }) => {
                        const n = (e.suggestions ? e.suggestions.map((e) => e.suggestion) : []).filter((t) => t !== e.username),
                            r = t?.screen_name;
                        return { viewerUser: t, suggestions: n, valid: (!!r && r.toLowerCase() === e.username?.toLowerCase()) || e.valid, validatedScreenName: e.username, validationError: e.desc };
                    })
                    .propsFromActions(() => ({ fetchUsernameAvailability: p.HR })),
                f = d().d1f6d336,
                b = d().de65c756;
            class v extends r.Component {
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
                    return r.createElement(s.ZP, { color: "link", key: t, onPress: this._handleItemSelect, role: "button", style: y.altOptionText, withInteractiveStyling: !0 }, e);
                }
                render() {
                    const { suggestions: e, valid: t, validatedScreenName: n, validationError: s, viewerUser: c } = this.props;
                    if (!c) return null;
                    const u = !(n === c.screen_name || t || !s);
                    return r.createElement(
                        i.Z,
                        null,
                        r.createElement(a.Z, { autoComplete: "off", autoCorrect: !1, errorText: s, invalid: u, label: f, name: "typedScreenName", onChange: this._handleTypedFieldChange, spellCheck: "false", value: this.state.value }),
                        r.createElement(o.Z, null),
                        r.createElement(l.Z, { text: b }),
                        r.createElement(
                            i.Z,
                            { style: y.container },
                            e.map((e, t) => this._renderOption(e, t)),
                        ),
                    );
                }
            }
            const y = c.default.create((e) => ({ container: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, altOptionText: { display: "block", paddingVertical: e.spaces.space12 } })),
                w = g(v);
        },
        733487: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => Z });
            var r = n(202784),
                i = n(154003),
                s = n(111677),
                a = n.n(s),
                o = n(40904),
                l = n(391366),
                c = n(775412),
                u = n(837731),
                d = n(942893),
                _ = n(71620),
                m = n(668214),
                p = n(296196),
                h = n(601576),
                g = n(919022);
            const f = (e, t) => g.ZP.select(e, t.userId),
                b = (0, m.Z)()
                    .propsFromState(() => ({ user: f }))
                    .propsFromActions(() => ({ addToast: h.fz, createLocalApiErrorHandler: (0, _.zr)("MUTE_DM_BUTTON_CONTAINER"), muteDMUser: p.muteDMUser, unmuteDMUser: p.unmuteDMUser }))
                    .withAnalytics(),
                v = a().e67b2d65,
                y = a().f05597b3,
                w = a().gde6b425,
                S = a().e308019b;
            class C extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleUnmuteToggle = () => {
                            this._handleUnmuteToggleHelper();
                        }),
                        (this._handleUnmuteToggleHelper = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, muteDMUser: n, unmuteDMUser: r, user: i, userId: s } = this.props;
                            return i
                                ? i.dm_muting
                                    ? r(s).then((t) => {
                                          e({ text: S({ name: i.name }) }), this._scribeAction("unmute_user");
                                      }, t(u.G))
                                    : n(s).then((t) => {
                                          e({ text: w({ name: i.name }) }), this._scribeAction("mute_user");
                                      }, t(c.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const t = e.dm_muting ? "destructiveOutlined" : "brandOutlined",
                        n = e.dm_muting ? o.default : l.default,
                        s = e.dm_muting ? y({ screenName: e.screen_name }) : v({ screenName: e.screen_name });
                    return r.createElement(i.ZP, { "aria-label": s, icon: r.createElement(n, null), onPress: this._handleUnmuteToggle, type: t });
                }
                _scribeAction(e) {
                    const { analytics: t, user: n } = this.props;
                    t.scribe({ action: e, data: { items: n ? [d.Z.getUserItem(n)] : [] } });
                }
            }
            const Z = b(C);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-9f4db315.1550a64a.js.map

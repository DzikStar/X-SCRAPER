(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-a2dee9c7"],
    {
        525279: (e) => {
            e.exports = { queryId: "zr9kubSPFR5Ay3s59UyzmQ", operationName: "BookmarkFolderTimeline", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        527154: (e) => {
            e.exports = { queryId: "i78YDd0Tza-dV4SYs58kRg", operationName: "BookmarkFoldersSlice", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        503225: (e) => {
            e.exports = { queryId: "4KHZvvNbHNf07bsgnL9gWA", operationName: "bookmarkTweetToFolder", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        342459: (e) => {
            e.exports = { queryId: "-LGfdImKeQz0xS_jjUwzlA", operationName: "Bookmarks", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        745735: (e) => {
            e.exports = { queryId: "6Xxqpq8TM_CREYiuof_h5w", operationName: "createBookmarkFolder", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        485018: (e) => {
            e.exports = { queryId: "skiACZKC1GDYli-M8RzEPQ", operationName: "BookmarksAllDelete", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        615626: (e) => {
            e.exports = { queryId: "2UTTsO-6zs93XqlEUZPsSg", operationName: "DeleteBookmarkFolder", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        182247: (e) => {
            e.exports = { queryId: "a6kPp1cS1Dgbsjhapz1PNw", operationName: "EditBookmarkFolder", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        974829: (e) => {
            e.exports = { queryId: "2Qbj9XZvtUvyJB4gFwWfaA", operationName: "RemoveTweetFromBookmarkFolder", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        897338: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => o });
            var i,
                n,
                r = {
                    fragment: {
                        argumentDefinitions: (i = [
                            { defaultValue: null, kind: "LocalArgument", name: "messageId" },
                            { defaultValue: null, kind: "LocalArgument", name: "requestId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "DMMessageDeleteMutation",
                        selections: (n = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "message_id", variableName: "messageId" },
                                    { kind: "Variable", name: "request_id", variableName: "requestId" },
                                ],
                                kind: "ScalarField",
                                name: "dm_message_hide_delete",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: i, kind: "Operation", name: "DMMessageDeleteMutation", selections: n },
                    params: { id: "BJ6DtxA2llfjnRoRjaiIiw", metadata: {}, name: "DMMessageDeleteMutation", operationKind: "mutation", text: null },
                };
            r.hash = "fe3dd704e587b1e45bf85431c18a3260";
            const o = r;
        },
        257215: () => {
            "use strict";
        },
        395337: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => s });
            var i,
                n,
                r,
                o,
                l = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ kind: "RequiredField", field: (r = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW", path: "affiliations.affiliated_account_ids_results.result.legacy.name" }], storageKey: null }, action: "THROW", path: "affiliations.affiliated_account_ids_results.result.legacy" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [i, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [n, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [r], storageKey: null }, { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }, (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, o], storageKey: null }], storageKey: null }] },
                    params: { id: "lre2gA0kvs0gf4XRNei6Qw", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            l.hash = "10c9183ce406af8e8ffa48a4cfd593b4";
            const s = l;
        },
        858883: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => d });
            var i,
                n,
                r,
                o,
                l,
                s = {
                    fragment: {
                        argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "conversationId" }), (n = { defaultValue: null, kind: "LocalArgument", name: "emojiReactions" }), (r = { defaultValue: null, kind: "LocalArgument", name: "messageId" }), (o = { defaultValue: null, kind: "LocalArgument", name: "reactionTypes" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useDMReactionMutationAddMutation",
                        selections: (l = [
                            {
                                alias: null,
                                args: [
                                    {
                                        fields: [
                                            { kind: "Variable", name: "conversation_id", variableName: "conversationId" },
                                            { kind: "Variable", name: "emoji_reactions", variableName: "emojiReactions" },
                                            { kind: "Variable", name: "message_id", variableName: "messageId" },
                                            { kind: "Variable", name: "reaction_types", variableName: "reactionTypes" },
                                        ],
                                        kind: "ObjectValue",
                                        name: "dm_reactions",
                                    },
                                    { kind: "Literal", name: "s", value: "e54f" },
                                ],
                                concreteType: null,
                                kind: "LinkedField",
                                name: "create_dm_reaction",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [i, r, o, n], kind: "Operation", name: "useDMReactionMutationAddMutation", selections: l },
                    params: { id: "VyDyV9pC2oZEj6g52hgnhA", metadata: {}, name: "useDMReactionMutationAddMutation", operationKind: "mutation", text: null },
                };
            s.hash = "a57cdb58c1da320b32c0a3a4d4202090";
            const d = s;
        },
        781054: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => d });
            var i,
                n,
                r,
                o,
                l,
                s = {
                    fragment: {
                        argumentDefinitions: [(i = { defaultValue: null, kind: "LocalArgument", name: "conversationId" }), (n = { defaultValue: null, kind: "LocalArgument", name: "emojiReactions" }), (r = { defaultValue: null, kind: "LocalArgument", name: "messageId" }), (o = { defaultValue: null, kind: "LocalArgument", name: "reactionTypes" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useDMReactionMutationRemoveMutation",
                        selections: (l = [
                            {
                                alias: null,
                                args: [
                                    {
                                        fields: [
                                            { kind: "Variable", name: "conversation_id", variableName: "conversationId" },
                                            { kind: "Variable", name: "emoji_reactions", variableName: "emojiReactions" },
                                            { kind: "Variable", name: "message_id", variableName: "messageId" },
                                            { kind: "Variable", name: "reaction_types", variableName: "reactionTypes" },
                                        ],
                                        kind: "ObjectValue",
                                        name: "dm_reactions",
                                    },
                                    { kind: "Literal", name: "s", value: "e54f" },
                                ],
                                concreteType: null,
                                kind: "LinkedField",
                                name: "delete_dm_reaction",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [i, r, o, n], kind: "Operation", name: "useDMReactionMutationRemoveMutation", selections: l },
                    params: { id: "bV_Nim3RYHsaJwMkTXJ6ew", metadata: {}, name: "useDMReactionMutationRemoveMutation", operationKind: "mutation", text: null },
                };
            s.hash = "408e23aa034ffc8f2480a6fab3532c39";
            const d = s;
        },
        789990: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => o });
            var i,
                n,
                r = {
                    fragment: {
                        argumentDefinitions: (i = [{ defaultValue: null, kind: "LocalArgument", name: "conversationId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useTypingNotifierMutation",
                        selections: (n = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "conversation_id", variableName: "conversationId" },
                                    { kind: "Literal", name: "s", value: "e54f" },
                                ],
                                concreteType: null,
                                kind: "LinkedField",
                                name: "post_typing_indicator",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: i, kind: "Operation", name: "useTypingNotifierMutation", selections: n },
                    params: { id: "HL96-xZ3Y81IEzAdczDokg", metadata: {}, name: "useTypingNotifierMutation", operationKind: "mutation", text: null },
                };
            r.hash = "016aa94bbbc10fa863737925fa5456c9";
            const o = r;
        },
        403911: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => C });
            var i = a(506899),
                n = a(163889),
                r = a(414742),
                o = a(703710);
            const l = new i.fK.Entity("bookmarkFolders", {});
            var s = a(527154),
                d = a.n(s),
                c = a(525279),
                u = a.n(c),
                p = a(342459),
                m = a.n(p),
                b = a(503225),
                _ = a.n(b),
                h = a(745735),
                f = a.n(h),
                g = a(485018),
                w = a.n(g),
                y = a(615626),
                v = a.n(y),
                k = a(182247),
                S = a.n(k),
                A = a(974829),
                D = a.n(A),
                F = a(934309);
            const I = { result: [], entities: {}, slice_info: {} },
                P = (e, t) => {
                    const a = t?.bookmark_all_delete,
                        i = "Done" === a;
                    return i || (0, n.ZP)("GQL Bookmarks: Failed to delete all bookmarks"), (0, r.jB)(e) || !i;
                },
                Z = (0, r.kj)((e) => {
                    const t = e?.viewer?.user_results?.result,
                        a = "User" === t?.__typename ? t : void 0,
                        i = a?.bookmark_collections_slice?.items;
                    return !i;
                }, "GQL Bookmark Folders: Failed to render Bookmark Folders timeline"),
                E = (0, r.kj)((e) => {
                    const t = e?.bookmark_collection_timeline?.timeline;
                    return !t;
                }, "GQL Bookmark Folders: Failed to render Bookmark Folders timeline"),
                C = ({ apiClient: e, featureSwitches: t }) => ({
                    bookmarkTweetToFolder: (t) =>
                        e.graphQL(
                            _(),
                            { ...t },
                            (0, r.kj)((e) => !e.bookmark_collection_tweet_put, "GQL Bookmark Folders: failed to Add Tweet to Bookmark Folder"),
                        ),
                    createBookmarkFolder: (t) =>
                        e.graphQL(
                            f(),
                            { ...t },
                            (0, r.kj)((e) => !e.bookmark_collection_create, "GQL Bookmark Folders: failed to Create Bookmark Folder"),
                        ),
                    deleteAll: () => e.graphQL(w(), {}, P).then((e) => e),
                    deleteBookmarkFolder(t) {
                        const { bookmarkFolderId: a } = t;
                        return e.graphQL(v(), { bookmark_collection_id: a });
                    },
                    editBookmarkFolder(t) {
                        const { bookmarkFolderId: a, name: i } = t;
                        return e.graphQL(S(), { bookmark_collection_id: a, name: i });
                    },
                    removeTweetFromBookmarkFolder(t) {
                        const { bookmarkFolderId: a, tweetId: i } = t;
                        return e.graphQL(D(), { bookmark_collection_id: a, tweet_id: i });
                    },
                    fetchBookmarksTimeline: ({ count: a, cursor: i }) => e.graphQL(m(), { count: a, cursor: i, includePromotedContent: !0, ...(0, o.d)(t) }, (e, t) => !t?.bookmark_timeline_v2?.timeline).then((e) => e?.bookmark_timeline_v2?.timeline || F.cY),
                    fetchBookmarkFolderTimeline: ({ bookmark_collection_id: a, cursor: i }) => e.graphQL(u(), { bookmark_collection_id: a, cursor: i, includePromotedContent: !0, ...(0, o.d)(t) }, E).then((e) => e?.bookmark_collection_timeline?.timeline || F.cY),
                    fetchBookmarkFoldersSlice: (t) =>
                        t
                            ? e.graphQL(d(), t, Z).then((e) => {
                                  const t = e?.viewer?.user_results?.result,
                                      a = "User" === t?.__typename ? t : void 0,
                                      n = a?.bookmark_collections_slice;
                                  if (n) {
                                      const { entities: e, result: t } = (0, i.Fv)(n.items, [l]);
                                      return { entities: e, result: t, slice_info: n.slice_info };
                                  }
                                  return I;
                              })
                            : Promise.resolve(I),
                });
        },
        333241: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => k });
            a(136728);
            var i = a(202784),
                n = a(638236),
                r = a(811176),
                o = a(674132),
                l = a.n(o),
                s = a(415506),
                d = a(516951),
                c = a(443781),
                u = a(376293),
                p = a(847607),
                m = a(417714),
                b = a(988823);
            const _ = "block",
                h = "mute",
                f = "removeFollower",
                g = "report",
                w = "share",
                y = l().j7bb1a43,
                v = l().hef5960c,
                k = (0, b.M)((e) => {
                    const { featureSwitches: t } = (0, c.QZ)(),
                        { onBlock: a, onClose: o, onMute: l, onRemoveFollower: b, onReportUser: k, onShare: S, onUnblock: A, onUnmute: D, user: F } = e,
                        I = [],
                        P = (t, a) => {
                            const { confirm: i, onClose: n } = e;
                            if (t) {
                                const { label: e, ...r } = t;
                                i({ confirmButtonLabel: e, ...r })
                                    .then(a, d.Z)
                                    .finally(n);
                            } else a();
                        };
                    !!window.navigator.share &&
                        !F.protected &&
                        !F.blocking &&
                        !F.blocked_by &&
                        I.push({
                            Icon: n.Z,
                            onClick: () => {
                                o(), S();
                            },
                            testID: w,
                            text: v,
                        });
                    !F.blocking &&
                        I.push({
                            ...(0, p.N1)(
                                F,
                                () => {
                                    o(), l();
                                },
                                () => {
                                    o(), D();
                                },
                            ),
                            testID: h,
                        });
                    F.followed_by &&
                        I.push({
                            ...(0, m.l)({
                                removeFollowerAction: (e) => {
                                    P(e, b);
                                },
                                user: F,
                            }),
                            testID: f,
                        }),
                        I.push((0, u.op)({ blockAction: (e) => P(e, a), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: _, unblockAction: (e) => P(e, A), user: F })),
                        I.push({
                            Icon: s.default,
                            onClick: () => {
                                o(), k();
                            },
                            testID: g,
                            text: y({ screenName: F.screen_name }),
                        });
                    const Z = I.map(({ Icon: e, onClick: t, testID: a, text: i }) => ({ text: i, onClick: t, Icon: e, testID: a }));
                    return i.createElement(r.Z, { items: Z, onCloseRequested: o });
                });
        },
        113392: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => m });
            a(136728);
            var i = a(202784),
                n = a(154003),
                r = a(392237),
                o = a(674132),
                l = a.n(o),
                s = a(937450),
                d = a(725516);
            const c = l().a4993fa2,
                u = l().i0db46e6,
                p = r.default.create((e) => ({ icon: { color: e.colors.gray700 } })),
                m = ({ dmConversationId: e, enabled: t = !0, gifSearchKeySource: a, history: r, isWebRedesign: o, onPress: l, style: m, testID: b }) => {
                    const _ = (0, d.z)(),
                        h = i.useCallback(() => {
                            l && l(), _.scribe({ element: "found_media_button", action: "click" }), r.push({ pathname: "/i/foundmedia/search", state: { gifSearchKeySource: a, dmConversationId: e } });
                        }, [e, _, a, r, l]);
                    return i.createElement(n.ZP, { "aria-label": c, disabled: !t, hoverLabel: { label: u }, icon: i.createElement(s.default, { style: o && p.icon }), onPress: h, size: "medium", style: m, testID: b, type: o ? "primaryText" : "brandText" });
                };
        },
        373554: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => f, h: () => _ });
            var i = a(807896),
                n = a(202784),
                r = a(449161),
                o = a(392237),
                l = a(674132),
                s = a.n(l),
                d = a(473026),
                c = a(276259),
                u = a(540387);
            const p = "fileInput",
                m = s().b9960f32,
                b = n.createElement(d.default, null),
                _ = ({ acceptGifs: e, acceptImages: t = !0, acceptVideo: a }) => (t ? c.v5 : []).concat(e ? [c.Re] : []).concat(a ? u.jn : []);
            const h = o.default.create((e) => ({ root: { margin: `-${e.spaces.space12}` } })),
                f = function ({ "aria-label": e = m, acceptGifs: t = !0, acceptImages: a = !0, acceptVideo: o = !0, customMimeTypes: l = [], icon: s = b, size: d = "medium", style: c, withIcon: u = !0, ...f }) {
                    const g = _({ acceptGifs: t, acceptImages: a, acceptVideo: o }).concat(l).join(",");
                    return n.createElement(r.Z, (0, i.Z)({}, f, { accept: g, "aria-label": e, icon: u ? s : void 0, size: d, style: [h.root, c], testID: p }));
                };
        },
        751170: (e, t, a) => {
            "use strict";
            a.d(t, { A: () => b, Z: () => g });
            var i = a(202784),
                n = a(325686),
                r = a(167630),
                o = a(992942),
                l = a(392237),
                s = a(674132),
                d = a.n(s),
                c = a(205074),
                u = a(364837),
                p = a(908478);
            const m = d().gff1f69e,
                b = Object.freeze({ INFINITE: "infinite", MEDIUM: "medium", NONE: "none" });
            class _ extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { imagePreviewUrl: null }),
                        (this._getImageSrc = () => {
                            const { enableGif: e, mediaItem: t } = this.props,
                                { imagePreviewUrl: a } = this.state;
                            if (t && t.mediaFile) return t.mediaFile.isGif && !e ? a : t.mediaFile.url;
                        });
                }
                componentDidUpdate() {
                    const {
                            enableGif: e,
                            mediaItem: { mediaFile: t },
                        } = this.props,
                        { imagePreviewUrl: a } = this.state;
                    e ||
                        a ||
                        (t instanceof c.ZP &&
                            t.isGif &&
                            (0, u.R)(t).then((e) => {
                                this.setState({ imagePreviewUrl: e });
                            }));
                }
                shouldComponentUpdate(e, t) {
                    return !(0, p.Z)(e, this.props) || !(0, p.Z)(t, this.state);
                }
                render() {
                    const { borderRadius: e, enableGif: t, mediaItem: a, onClick: l, resizeMode: s } = this.props,
                        { imagePreviewUrl: d } = this.state || {},
                        c = a.mediaFile && a.mediaFile.isGif && !t && !d,
                        u = a.needsProcessing || c,
                        p = [f.root, h[e], u && f.loadingBorder],
                        b = this._getImageSrc();
                    return i.createElement(n.Z, { onClick: l, style: p }, u || !b ? i.createElement(r.Z, { "aria-label": m, style: f.activityIndicator }) : i.createElement(o.Z, { resizeMode: s, source: b, style: f.image }));
                }
            }
            _.defaultProps = { borderRadius: b.NONE, enableGif: !0, resizeMode: "cover" };
            const h = l.default.create((e) => ({ [b.INFINITE]: { borderRadius: e.borderRadii.infinite }, [b.MEDIUM]: { borderRadius: e.borderRadii.small }, [b.NONE]: { borderRadius: e.borderRadii.none } })),
                f = l.default.create((e) => ({ root: { borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.none, borderColor: "transparent", maxWidth: "100%", height: "100%", overflow: "hidden" }, image: { display: "block", height: "100%", width: "100%" }, loadingBorder: { borderColor: e.colors.gray300 }, activityIndicator: { height: "100%" } })),
                g = _;
        },
        304059: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => O });
            var i = a(202784),
                n = a(325686),
                r = a(537392),
                o = a(336961),
                l = a(659651),
                s = a(154003),
                d = a(392237),
                c = a(992942),
                u = a(674132),
                p = a.n(u),
                m = a(678773),
                b = a(597237),
                _ = a(254944),
                h = a(837020),
                f = a(276259),
                g = a(443781),
                w = a(10656),
                y = a(716233),
                v = a(946208),
                k = a(540387),
                S = a(950822),
                A = a(303186),
                D = a(954300);
            class F extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._setVideoRef = (e) => {
                            const { getVideoRef: t } = this.props;
                            t && t(e);
                        });
                }
                render() {
                    const { children: e, dataSaverMode: t, getVideoRef: a, style: n, variants: r, ...o } = this.props,
                        l = (0, A.IM)((0, D.rD)(r), t);
                    return (0, S.Z)("video", { ...o, children: [l.map((e) => i.createElement("source", { key: e.src, src: e.src, type: e.type })), e], ref: this._setVideoRef, style: n });
                }
            }
            F.defaultProps = { dataSaverMode: !1, variants: [] };
            var I = a(959587),
                P = a(751170),
                Z = a(523561),
                E = a(195560);
            const C = (0, Z.Z)({
                    loader: () =>
                        Promise.all([
                            a.e("icons.10"),
                            a.e("icons.21"),
                            a.e("icons.16"),
                            a.e("modules.common-e907d115"),
                            a.e("modules.common-e019dbda"),
                            a.e("icons.24"),
                            a.e("icons.28"),
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
                            a.e("icons.4"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                            a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee359ff7"),
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
                            a.e("shared~loaders.video.VideoPlayerDefaultUI~loaders.video.VideoPlayerMiniUI~loaders.video.VideoPlayerHashtagHig"),
                            a.e("loader.MediaPreviewVideoPlayer"),
                        ])
                            .then(a.bind(a, 298607))
                            .then((e) => ({ default: e.__DANGEROUS_IMPORT_VIDEOPLAYER__ })),
                    renderPlaceholder: (e, t) => i.createElement(E.Z, { hasError: e, onRetry: t }),
                }),
                T = p().gd80afba,
                L = p().j322caee,
                M = p().abd845fe,
                B = p().df1b0708,
                N = p().cd959e5c,
                R = p().e68b09b4,
                x = p().add55c98,
                U = p().f350cf46;
            class V extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { isVideoPaused: !0, playGif: !1 }),
                        (this._handleGifClick = () => {
                            this.setState({ playGif: !this.state.playGif });
                        }),
                        (this._handleMediaPreviewLayout = (e) => {
                            const { mediaItem: t, resizeIfNeeded: a } = this.props,
                                i = t.mediaFile || t.externalMediaDetails;
                            if (!i) return;
                            const {
                                    nativeEvent: {
                                        layout: { height: n, width: r },
                                    },
                                } = e,
                                { height: o, width: l } = i,
                                s = l / o;
                            Math.abs(s - r / n) > 0.05 && ("width" === a ? this.setState({ mediaContainerSizeStyle: { width: n * s } }) : "height" === a && this.setState({ mediaContainerSizeStyle: { height: r / s } }));
                        }),
                        (this._handleVideoOnPlay = (e) => {
                            this.setState({ isVideoPaused: !1 });
                        }),
                        (this._handleVideoOnPause = (e) => {
                            this.setState({ isVideoPaused: !0 });
                        }),
                        (this._setVideoRef = (e) => {
                            this._video = e;
                        }),
                        (this.playVideo = () => {
                            if (this._video) {
                                const e = this._video.play();
                                void 0 !== e &&
                                    e
                                        .then((e) => {
                                            this._handleVideoOnPlay();
                                        })
                                        .catch();
                            }
                        }),
                        (this.pauseVideo = () => {
                            this._video && (this._video.pause(), this._handleVideoOnPause());
                        });
                }
                render() {
                    const { "aria-label": e, enableGif: t, mediaItem: a, onEdit: d, onEditSensitiveWarning: c, onRemove: u, role: p, style: g, withAltTextLabel: y, withCloseButton: v, withDragAndDropIndicator: k, withEditButton: S, withEditIcon: A, withEditSensitiveWarningButton: D } = this.props,
                        { mediaContainerSizeStyle: F, playGif: P } = this.state,
                        Z = a.externalMediaDetails && a.externalMediaDetails.mediaType === f.Re,
                        E = Z || (t && a.mediaFile && a.mediaFile.isGif),
                        C = !!a.mediaFile?.isVideo;
                    return i.createElement(r.ZP, null, ({ windowWidth: t }) => {
                        const a = void 0 !== A ? A : !w.Z.isTwoColumnLayout(t);
                        return i.createElement(n.Z, { "aria-label": e || x, onLayout: this._handleMediaPreviewLayout, role: p, style: [g, z.cursor, Z && z.gifPlayButton, F] }, this._renderPreview(), Z && !P && i.createElement(o.Z, { "aria-label": B, onPress: this._handleGifClick, size: "small" }), E ? i.createElement(I.ZP, { type: I.AM }) : null, y && !C ? i.createElement(l.Z, { align: "left", altLabel: e }) : null, i.createElement(n.Z, { style: z.editMedia }, k ? i.createElement(s.ZP, { "aria-label": U, hoverLabel: { label: U }, icon: i.createElement(m.default, null), size: "small", type: "onMediaDominantColorFilled" }) : null, S && D ? i.createElement(s.ZP, { "aria-label": L, icon: i.createElement(b.default, { style: z.editSensitiveWarningIcon }), onPress: c, size: "small", type: "onMediaDominantColorFilled" }) : null, S ? i.createElement(s.ZP, { "aria-label": T, icon: a ? i.createElement(_.default, null) : void 0, onPress: d, size: a ? "xSmall" : "small", type: "onMediaDominantColorFilled" }, a ? void 0 : M) : null), v ? i.createElement(s.ZP, { "aria-label": N, hoverLabel: { label: R }, icon: i.createElement(h.default, null), onPress: u, size: "small", style: z.buttonRight, type: "onMediaDominantColorFilled" }) : null);
                    });
                }
                _renderPreview() {
                    const { mediaItem: e } = this.props;
                    if (e.externalMediaDetails) {
                        const t = e.externalMediaDetails.previewUrl,
                            a = e.externalMediaDetails.stillMediaUrl;
                        return this._renderGifPreview(t, a);
                    }
                    return e.mediaFile?.isVideo ? this._renderVideoPreview(e.mediaFile.type, e.mediaFile.url, e.id, e.mediaFile) : i.createElement(n.Z, { style: d.default.absoluteFill }, this._renderImagePreview());
                }
                _renderGifPreview(e, t) {
                    const { playGif: a } = this.state,
                        r = { uri: a ? e : t };
                    return i.createElement(n.Z, { onClick: this._handleGifClick, style: d.default.absoluteFill }, i.createElement(c.Z, { resizeMode: "cover", source: r, style: z.video }));
                }
                _renderImagePreview() {
                    const { borderRadius: e, enableGif: t, imageResizeMode: a, mediaItem: n, onClick: r } = this.props;
                    return i.createElement(P.Z, { borderRadius: e, enableGif: t, mediaItem: n, onClick: r, resizeMode: a });
                }
                _renderVideoPreview(e, t, a, n) {
                    const { mediaItem: r } = this.props,
                        o = r.mediaMetadata?.subtitles;
                    if (this.context.featureSwitches.isTrue("responsive_web_composer_configurable_video_player_enabled") && n instanceof k.ZP) {
                        let o = [];
                        (0, y.TO)(n.fileHandle) && (o = [{ src: t, type: e }]);
                        const l = r.mediaMetadata?.subtitles,
                            s = r?.trimData;
                        return i.createElement(C, { mediaFile: n, mediaId: String(a), mediaItem: r, subtitles: l, trimData: s, variants: o });
                    }
                    {
                        const a = (0, y.TO)(n.fileHandle) ? [{ content_type: e, url: t }] : [];
                        return i.createElement(F, { autoPlay: !1, controls: !0, getVideoRef: this._setVideoRef, loop: !0, muted: !0, onPause: this._handleVideoOnPause, onPlay: this._handleVideoOnPlay, playsInline: !0, poster: n instanceof k.ZP ? n.thumbnail : "", style: z.video, variants: a }, o?.upload?.mediaFile instanceof v.ZP ? i.createElement("track", { default: !0, kind: "subtitles", label: o.displayName, src: o.upload.mediaFile.vtt, srcLang: o.lang }) : null);
                    }
                }
            }
            (V.contextType = g.rC), (V.defaultProps = { enableGif: !0, withCloseButton: !0, withAltTextLabel: !1, withEditButton: !1, withEditSensitiveWarningButton: !1 });
            const z = d.default.create((e) => ({ buttonLeft: { position: "absolute", start: e.spaces.space4, top: e.spaces.space4 }, buttonRight: { position: "absolute", end: e.spaces.space4, top: e.spaces.space4 }, cursor: { cursor: "pointer" }, editSensitiveWarningIcon: { color: e.colors.primary }, editMedia: { display: "flex", start: e.spaces.space4, top: e.spaces.space4, gap: e.spaces.space4, flexDirection: "row", position: "absolute" }, editImage: { bottom: e.spaces.space4 }, editVideo: { top: e.spaces.space4 }, gifPlayButton: { alignItems: "center", justifyContent: "center" }, video: { height: "100%", width: "100%" } })),
                O = V;
        },
        46705: (e, t, a) => {
            "use strict";
            a.d(t, { X: () => i, g: () => n });
            const i = (e) => ({ id: e, distanceToViewportTop: 0 }),
                n = (e) => ({ id: e, distanceToViewportBottom: 0 });
        },
        373981: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => i });
            const i = { ...a(332878).Z, pinToNewestWhenAtNewest: !0 };
        },
        332878: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => d });
            function i(e) {
                return "_listHeader" === e || "_listFooter" === e;
            }
            const n = (e, t, a) => {
                    const i = e(t),
                        n = e(a);
                    return !i && n ? -1 : i && !n ? 1 : 0;
                },
                r = (e, t, a) => o(e(a), e(t)),
                o = (e, t) => (e < t ? -1 : e > t ? 1 : 0),
                l = (e, t) => {
                    if (e.length) return e.reduce((e, a) => (t(a, e) > 0 ? a : e));
                },
                s = ({ nextPos: e, prevPos: t }) => {
                    const a = t.getForViewport(),
                        o = (e) => e && e.doesIntersectWith(a),
                        s = (e) => (e ? Math.abs(a.getTop() - e.getTop()) : 1 / 0),
                        d = e.getList().filter(({ id: a }) => !i(a) && t.isRendered(a) && e.isRendered(a)),
                        c =
                            d.length > 0
                                ? l(d, (e, a) => {
                                      const i = t.getForItem(e.id),
                                          l = t.getForItem(a.id);
                                      return n(o, i, l) || r(s, i, l);
                                  })
                                : null;
                    return c && c.id;
                },
                d = {
                    initialScrollHeadroom: (e) => e.getRect().getHeight(),
                    offsetToAnchor: (e, t) => {
                        const { distanceToViewportBottom: a, distanceToViewportTop: i, id: n } = t;
                        if ("number" == typeof i) {
                            const t = e.getForViewport().getTop() + i;
                            return e.getForItem(n).getTop() - t;
                        }
                        if ("number" == typeof a) {
                            const t = e.getForViewport().getBottom() + a;
                            return e.getForItem(n).getBottom() - t;
                        }
                        return 0;
                    },
                    scrollHeadroom: (e) => {
                        const t = e.getForList().getBottom(),
                            a = e.getForViewport().getBottom();
                        return Math.max(0, a - t);
                    },
                    anchorCandidates: (e) => {
                        const t = e.getForViewport().getTop();
                        return e
                            .findVisibleItems()
                            .filter(({ id: e }) => !i(e))
                            .map(({ id: e, rectangle: a }) => ({ id: e, distanceToViewportTop: a.getTop() - t }));
                    },
                    pinToNewestWhenAtNewest: !1,
                    offsetCorrection(e, t) {
                        if (e.getForViewport().getTop() <= e.getForList().getTop() && this.pinToNewestWhenAtNewest) return 0;
                        const a = s({ prevPos: e, nextPos: t });
                        if (a) {
                            const i = e.getForItem(a).getTop() - e.getForViewport().getTop();
                            return t.getForItem(a).getTop() - t.getForViewport().getTop() - i;
                        }
                        return 0;
                    },
                };
        },
        181746: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => s });
            var i = a(202784),
                n = a(731708),
                r = a(674132),
                o = a.n(r);
            const l = i.createElement(n.ZP, { link: "/settings/safety" }),
                s = (e) => i.createElement(o().I18NFormatMessage, { $i18n: "d6db6323" }, i.cloneElement(l, null, o().daf6bf02));
        },
        864479: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => o });
            var i = a(807896),
                n = a(202784),
                r = a(771099);
            const o = (e) => (t) => n.createElement(r.$6, null, (a) => n.createElement(e, (0, i.Z)({}, t, { isInSidebar: a })));
        },
        959587: (e, t, a) => {
            "use strict";
            a.d(t, { AM: () => s, ZP: () => p, pX: () => d });
            var i = a(202784),
                n = a(731708),
                r = a(659651),
                o = a(392237),
                l = a(548721);
            const s = "animated_gif",
                d = "video",
                c = (e) => {
                    const { durationInMilliseconds: t, type: a } = e;
                    let o;
                    if (a === s) o = i.createElement(n.ZP, { weight: "bold" }, "GIF");
                    else if ("vine" === a) o = i.createElement(l.default, { "aria-label": "Vine", style: u.icon });
                    else if (a === d && t) {
                        const e = Math.trunc(t / 6e4).toString(),
                            a = Math.trunc((t % 6e4) / 1e3)
                                .toString()
                                .padStart(2, "0");
                        o = i.createElement(n.ZP, { color: "white" }, `${e}:${a}`);
                    }
                    return o ? i.createElement(r.Z, { align: "left" }, o) : null;
                },
                u = o.default.create((e) => ({ icon: { color: e.colors.white } })),
                p = i.memo(c);
        },
        90511: (e, t, a) => {
            "use strict";
            a.d(t, { ZP: () => C, dm: () => P });
            var i = a(202784),
                n = a(99107),
                r = a(325686),
                o = a(154003),
                l = a(392237),
                s = a(674132),
                d = a.n(s),
                c = a(837020),
                u = a(666536),
                p = a(908478),
                m = a(500914),
                b = a(443781),
                _ = a(260137),
                h = a(71620),
                f = a(668214),
                g = a(276001),
                w = a(798538),
                y = a(465814),
                v = a(632960);
            function k(e, t, a) {
                const { urls: i } = t,
                    n = [...i];
                let r;
                for (const t of n.reverse()) if (((r = a(e, t)), r)) break;
                return r;
            }
            const S = (e, t) => k(e, t, g.Z.select),
                A = (e, t) => k(e, t, y.Z.select),
                D = (0, f.Z)()
                    .propsFromState(() => ({ card: S, legacyAndUnifiedCard: A }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("COMPOSER_CARD_PREVIEW"), fetchCardPreviewIfNeeded: g.Z.fetchCardPreviewIfNeeded, updateDMComposer: w.G6, updateTweetComposer: v.zi })),
                F = d().f6fec9f6,
                I = /^https?:\/\//i,
                P = (e) => {
                    const t = (0, m.Z)(e);
                    if (t.length) return t.map((e) => (!I.test(e) && `http://${e}`) || e);
                };
            class Z extends i.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._fetchCardPreviewIfNeeded = () => {
                            const { createLocalApiErrorHandler: e, fetchCardPreviewIfNeeded: t, urls: a } = this.props;
                            a.forEach((a) => {
                                t(a).catch(e());
                            });
                        }),
                        (this._handleCardPreviewDismissal = (e) => this._updateSingleComposer({ cardUrl: n.p_ })),
                        (this._updateSingleComposer = (e) => {
                            const { conversationId: t, index: a, updateDMComposer: i, updateTweetComposer: n } = this.props,
                                { cardUrl: r } = e || {};
                            this._isDMComposer ? t && i(t, r) : n({ updates: { cardUrl: r }, index: a });
                        }),
                        (this._debouncedFetchCardPreview = (0, u.Z)(this._fetchCardPreviewIfNeeded, 1e3)),
                        (this._isDMComposer = !!e.conversationId);
                }
                componentDidMount() {
                    this._debouncedFetchCardPreview();
                }
                componentDidUpdate(e) {
                    const { urls: t } = this.props;
                    (0, p.Z)(e.urls, t) || this._debouncedFetchCardPreview();
                }
                componentWillUnmount() {
                    this._updateSingleComposer();
                }
                render() {
                    const { isCardPreviewTombstoned: e, style: t } = this.props,
                        { viewerUserId: a } = this.context;
                    if (e || !a) return null;
                    const n = this._getCards();
                    return n ? i.createElement(r.Z, { style: t }, i.createElement(_.default, { card: n.legacyCard, cardContext: { tweetUserId: a, tweetId: "0" }, isInteractive: !1, preventVideoPlayback: !0, unifiedCard: n.unifiedCard }), i.createElement(o.ZP, { "aria-label": F, icon: i.createElement(c.default, null), onPress: this._handleCardPreviewDismissal, size: "xSmall", style: E.closeButton, type: "onMediaDominantColorFilled" })) : null;
                }
                _getCards() {
                    const { card: e, legacyAndUnifiedCard: t } = this.props,
                        a = { legacyCard: e ? { name: e.name, url: e.url, binding_values: e.binding_values } : t?.legacyCard, unifiedCard: t?.unifiedCard };
                    if (a.legacyCard || a.unifiedCard) return a;
                }
            }
            Z.contextType = b.rC;
            const E = l.default.create((e) => ({ closeButton: { position: "absolute", top: e.spaces.space4, start: e.spaces.space4 } })),
                C = D(Z);
        },
        449950: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => p });
            var i = a(807896),
                n = a(202784),
                r = a(530525),
                o = a(659651),
                l = a(674132),
                s = a.n(l),
                d = a(632658);
            const c = "image",
                u = s().f93bb3ee;
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = ({ resourceSelectionHandler: e, useMinimumData: t }) => {
                            const { "aria-label": a, hideAcceptOverlay: l, shouldShowAltLabel: s, ...d } = this.props;
                            return n.createElement(n.Fragment, null, n.createElement(r.Z, (0, i.Z)({}, d, { "aria-label": a, onVariantSelection: e, previewMode: t, testID: c })), s ? n.createElement(o.Z, { align: "left", altLabel: a }) : null);
                        });
                }
                render() {
                    const { hideAcceptOverlay: e, image: t } = this.props;
                    return n.createElement(d.Z, { acceptLabel: u, hideAcceptOverlay: e, renderContent: this._renderContent, resourceId: "string" == typeof t ? t : t.url });
                }
            }
        },
        737613: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => h });
            var i = a(202784),
                n = a(325686),
                r = a(834324),
                o = a(392237),
                l = a(674132),
                s = a.n(l),
                d = a(125363),
                c = a(390387),
                u = a(919022);
            const p = s().aacfbe55,
                m = s().ga8627cd,
                b = s().e6d2573f,
                _ = s().d37a3e15,
                h = (e) => {
                    const { isReply: t, style: a, type: o } = e,
                        l = (0, d.v9)(c.Lz),
                        s = (0, d.v9)(u.ZP.selectViewerUser),
                        h = l ? s?.screen_name : void 0,
                        g = i.useMemo(() => [f.root, a], [a]);
                    let w = p({ screenName: h });
                    return "Tweet" === o && t ? (w = m({ screenName: h })) : "DM" === o ? (w = b({ screenName: h })) : "List" === o && (w = _({ screenName: h })), h ? i.createElement(n.Z, { style: g }, i.createElement(r.Z, { text: w })) : null;
                },
                f = o.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.spaces.space12 } }));
        },
        293988: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => S });
            var i = a(202784),
                n = a(154003),
                r = a(674132),
                o = a.n(r),
                l = a(74514),
                s = a(405303),
                d = a(684511),
                c = a(860174),
                u = a(71620),
                p = a(668214),
                m = a(257166),
                b = a(919022);
            const _ = (e, t) => !(!t.allowPromptForPush || !m.selectShouldPromptBrowserPush(e)),
                h = (0, p.Z)()
                    .propsFromState(() => ({ shouldPromptPush: _ }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: b.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                f = o().bdba3e1a,
                g = o().c4da7d28,
                w = o().j87c21f4,
                y = o().iebc30ca,
                v = o().dc740eb2;
            class k extends i.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? i.createElement(n.ZP, { "aria-label": g, hoverLabel: { label: y }, icon: i.createElement(l.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : i.createElement(n.ZP, { "aria-label": f, hoverLabel: { label: w }, icon: i.createElement(s.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return i.createElement("div", null, this.state.showingPushPrompt ? i.createElement(d.Z, { fullScreen: !0, message: v }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: a, userId: i } = this.props;
                    return a(i, { device: e }).catch(t(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const S = h(k);
        },
        490834: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => E });
            var i = a(202784),
                n = a(576648),
                r = a(811176),
                o = a(731708),
                l = a(530732),
                s = a(992942),
                d = a(392237),
                c = a(674132),
                u = a.n(c),
                p = a(630715),
                m = a(950822),
                b = a(138099),
                _ = a(154003);
            const h = u().cfd2f35e;
            class f extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleOnFocus = (e) => {
                            e.currentTarget.select();
                        });
                }
                render() {
                    const { cancelButtonLabel: e, description: t, headerText: a, link: n, onCancel: r } = this.props,
                        l = (0, m.Z)("input", { autoFocus: !0, onFocus: this._handleOnFocus, readOnly: !0, style: g.linkInput, value: n });
                    return i.createElement(b.Z, { onMaskClick: r, style: g.container, type: "center", withMask: !0 }, a && i.createElement(o.ZP, { align: "center", style: g.headerText, weight: "bold" }, a), t && i.createElement(o.ZP, { align: "center", color: "gray700", style: g.labelText }, t), l, i.createElement(_.ZP, { onPress: r, size: "xLarge", style: g.cancelButton, type: "brandText" }, e));
                }
            }
            f.defaultProps = { cancelButtonLabel: h };
            const g = d.default.create((e) => ({ container: { alignItems: "center", paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space12, position: "relative" }, headerText: { marginBottom: e.spaces.space16 }, labelText: { marginBottom: e.spaces.space16, width: "100%" }, linkInput: { backgroundColor: e.colors.gray0, borderColor: "transparent", color: e.colors.gray700, fontSize: e.fontSizes.body, marginBottom: e.spaces.space12, paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space20 }, cancelButton: { width: "100%" } })),
                w = f,
                y = u().e05c00b4,
                v = u().eabf2209,
                k = u().a613e720,
                S = u().f88553c8,
                A = { riffsy: "https://abs.twimg.com/a/1501527574/img/t1/icon_riffsy.png", giphy: "https://abs.twimg.com/a/1501527574/img/t1/icon_giphy.png" };
            class D extends i.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderMenu = (e) => i.createElement(r.Z, { items: [{ text: k, Icon: p.default, onClick: this._handleCopyGifLinkButtonClick }], onCloseRequested: e })),
                        (this._handleCopyGifLinkButtonClick = (e) => {
                            const { addToast: t, gifUrl: a } = this.props;
                            n.Z.isAvailable() ? (n.Z.setString(a), t({ text: S })) : this.setState({ showCopyLinkSheet: !0 }), e && e();
                        }),
                        (this._handleCopyLinkSheetCancel = () => {
                            this.setState({ showCopyLinkSheet: !1 });
                        }),
                        (this.state = { showCopyLinkSheet: !1 });
                }
                render() {
                    const { showCopyLinkSheet: e } = this.state,
                        { gifUrl: t, provider: a } = this.props,
                        { display_name: n, name: r } = a,
                        l = A[r];
                    return l ? i.createElement(i.Fragment, null, e ? i.createElement(w, { description: v({ providerName: n }), headerText: y, link: t, onCancel: this._handleCopyLinkSheetCancel }) : null, i.createElement(o.ZP, { align: "center", color: "gray700", style: [F.root, F.verticalAlign] }, i.createElement(u().I18NFormatMessage, { $i18n: "e2e6ea0d" }, this._renderAttribution(n, l)))) : null;
                }
                _renderAttribution(e, t) {
                    return i.createElement(l.Z, { interactiveStyles: null, renderMenu: this._renderMenu }, i.createElement(o.ZP, { style: F.verticalAlign, weight: "bold", withInteractiveStyling: !0 }, i.createElement(s.Z, { source: { uri: t }, style: F.image }), i.createElement(o.ZP, null, e.toUpperCase())));
                }
            }
            const F = d.default.create((e) => ({ button: { marginStart: e.spaces.space12 }, image: { display: "inline-block", height: e.spaces.space16, marginHorizontal: e.spaces.space4, width: e.spaces.space16 }, root: { marginHorizontal: e.spaces.space8 }, verticalAlign: { display: "flex", alignItems: "center", flexDirection: "row" }, alignLeft: { textAlign: "start" } })),
                I = D;
            var P = a(668214),
                Z = a(601576);
            const E = (0, P.Z)().propsFromActions(() => ({ addToast: Z.fz }))(({ addToast: e, gifUrl: t, provider: a }) => i.createElement(I, { addToast: e, gifUrl: t, provider: a }));
        },
        170371: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => h });
            var i = a(202784),
                n = a(325686),
                r = a(529509),
                o = a(392237),
                l = a(71620),
                s = a(668214),
                d = a(947650),
                c = a(582751);
            const u = (e, t) => c.vx(e, t.userId),
                p = (e, t) => c.mM(e, t.userId),
                m = (e, t) => c.Z8(e, t.userId),
                b = (0, s.Z)()
                    .propsFromState(() => ({ knownFollowersAvatarUrls: u, knownFollowersCount: p, knownFollowersNames: m }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, l.zr)("KNOWN_FOLLOWERS"), fetchKnownFollowersIfNeeded: d.Hq })),
                _ = o.default.create((e) => ({ minHeight: { minHeight: e.spaces.space20 } })),
                h = b((e) => {
                    const { createLocalApiErrorHandler: t, fetchKnownFollowersIfNeeded: a, knownFollowersAvatarUrls: o, knownFollowersCount: l, knownFollowersNames: s, userId: d, userScreenName: c } = e;
                    return (
                        i.useEffect(() => {
                            a(d).catch(t());
                        }, [d, a, t]),
                        i.createElement(n.Z, { style: _.minHeight }, i.createElement(r.Z, { knownFollowersAvatarUrls: o, knownFollowersCount: l, knownFollowersNames: s, userScreenName: c }))
                    );
                });
        },
        582751: (e, t, a) => {
            "use strict";
            a.d(t, { Z8: () => o, mM: () => n, vx: () => r });
            var i = a(947650);
            const n = (e, t) => {
                    const a = i.lP(e, t);
                    if (void 0 === a) return a;
                    const n = i.c1(e, t),
                        r = i.og(e, t);
                    return a - (n.length - r.length);
                },
                r = (e, t) => i.og(e, t).map(({ profile_image_url_https: e }) => e),
                o = (e, t) => i.og(e, t).map(({ name: e }) => e);
        },
        652904: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => c });
            var i = a(202784),
                n = a(500002),
                r = a(668214),
                o = a(997174),
                l = a(118823);
            const s = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class d extends i.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: i },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: r, search: o },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (s = !0));
                    const d = n || l;
                    ((d && n !== l) || (!d && a !== r) || i !== o || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: a, updateTweetDetailNav: i } = e;
                    t.scribePageImpression(), a(t.contextualScribeNamespace, t.contextualScribeData), i(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, n.ZP)(s(d));
        },
        62857: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => I });
            var i = a(807896),
                n = a(202784),
                r = a(476984),
                o = a.n(r),
                l = a(674132),
                s = a.n(l),
                d = a(615656),
                c = a(290402),
                u = a(325686),
                p = a(240089),
                m = a(663550),
                b = a(409438);
            const _ = ({ displayMode: e = b.Z.UserDetailed, renderUserCell: t, userIds: a }) =>
                n.createElement(
                    u.Z,
                    { role: "list" },
                    a.map((a, i) => (t ? t(a) : n.createElement(p.ZP, { decoration: p.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: a, promotedItemType: m.bj.USER, userId: a, withFollowsYou: !0 }))),
                );
            var h = a(312771),
                f = a(71620),
                g = a(973572),
                w = a(668214),
                y = a(919022);
            const v = (e, t) => t.userIds,
                k = (e, t) => {
                    const { filterPredicate: a = (e) => !!e, userIds: i } = t;
                    return i.filter((t) => {
                        const i = y.ZP.select(e, t);
                        return !!i && a(i);
                    });
                },
                S = (e, t) => {
                    const { userIds: a } = t;
                    return a.reduce((t, a) => {
                        const i = y.ZP.selectFetchStatus(e, a);
                        return (t[a] = i === h.ZP.NONE ? h.ZP.LOADING : i), t;
                    }, {});
                },
                A = (0, w.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, g.Z)(k, (e) => e),
                        fetchStatus: (0, g.Z)(k, S, v, (e, t, a) => {
                            let i = h.ZP.LOADED;
                            for (let n = 0; n < a.length; n++) {
                                const r = a[n];
                                if (-1 === e.indexOf(r)) {
                                    const e = t[r] || h.ZP.LOADING;
                                    i = i === h.ZP.LOADED ? e : i;
                                }
                                if (i === h.ZP.LOADED) break;
                            }
                            return i;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: y.ZP.fetchManyIfNeeded })),
                D = s().f5b426c2;
            class F extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: a, fetchUsersIfNeeded: r, filterPredicate: o, userIds: l, ...s } = this.props;
                            return n.createElement(_, (0, i.Z)({}, s, { userIds: e }));
                        }),
                        (this._handleFetch = () => {
                            this._fetchUsersIfNeeded();
                        });
                }
                componentDidMount() {
                    this._fetchUsersIfNeeded();
                }
                componentDidUpdate(e) {
                    o()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded();
                }
                render() {
                    return n.createElement(c.Z, { "aria-label": D, fetchStatus: this.state.allUsersUnavailable ? h.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: a, userIds: i } = this.props;
                    a(i).then(
                        () => {
                            this.setState({ allUsersUnavailable: !1 });
                        },
                        t({
                            [d.ZP.AddressBookLookupNotFound]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                            [d.ZP.OtherUserSuspended]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                        }),
                    );
                }
            }
            const I = A(F);
        },
        246851: (e, t, a) => {
            "use strict";
            a.d(t, { Z: () => n });
            var i = a(202784);
            function n(e) {
                const t = i.useRef();
                return (
                    i.useEffect(() => {
                        t.current = e;
                    }),
                    t.current
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-a2dee9c7.125bd7ea.js.map

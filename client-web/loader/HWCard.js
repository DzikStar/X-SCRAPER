(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.HWCard"],
    {
        144375: (e) => {
            e.exports = { queryId: "d3ccHJ8DYy_886kCvy8aQA", operationName: "BookmarkFolderTimeline", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        993893: (e) => {
            e.exports = { queryId: "i78YDd0Tza-dV4SYs58kRg", operationName: "BookmarkFoldersSlice", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        203024: (e) => {
            e.exports = { queryId: "4KHZvvNbHNf07bsgnL9gWA", operationName: "bookmarkTweetToFolder", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        211528: (e) => {
            e.exports = { queryId: "KjBUSKNTPot0c8VweK5O2Q", operationName: "Bookmarks", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        444756: (e) => {
            e.exports = { queryId: "6Xxqpq8TM_CREYiuof_h5w", operationName: "createBookmarkFolder", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        507539: (e) => {
            e.exports = { queryId: "skiACZKC1GDYli-M8RzEPQ", operationName: "BookmarksAllDelete", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        842440: (e) => {
            e.exports = { queryId: "2UTTsO-6zs93XqlEUZPsSg", operationName: "DeleteBookmarkFolder", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        919137: (e) => {
            e.exports = { queryId: "a6kPp1cS1Dgbsjhapz1PNw", operationName: "EditBookmarkFolder", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        295885: (e) => {
            e.exports = { queryId: "2Qbj9XZvtUvyJB4gFwWfaA", operationName: "RemoveTweetFromBookmarkFolder", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        403911: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => Z });
            var r = n(506899),
                o = n(163889),
                a = n(414742),
                i = n(703710);
            const l = new r.fK.Entity("bookmarkFolders", {});
            var s = n(993893),
                d = n.n(s),
                c = n(144375),
                m = n.n(c),
                u = n(211528),
                _ = n.n(u),
                f = n(203024),
                p = n.n(f),
                h = n(444756),
                b = n.n(h),
                g = n(507539),
                w = n.n(g),
                k = n(842440),
                y = n.n(k),
                v = n(919137),
                E = n.n(v),
                D = n(295885),
                S = n.n(D),
                T = n(934309);
            const z = { result: [], entities: {}, slice_info: {} },
                $ = (e, t) => {
                    const n = t?.bookmark_all_delete,
                        r = "Done" === n;
                    return r || (0, o.ZP)("GQL Bookmarks: Failed to delete all bookmarks"), (0, a.jB)(e) || !r;
                },
                x = (0, a.kj)((e) => {
                    const t = e?.viewer?.user_results?.result,
                        n = "User" === t?.__typename ? t : void 0,
                        r = n?.bookmark_collections_slice?.items;
                    return !r;
                }, "GQL Bookmark Folders: Failed to render Bookmark Folders timeline"),
                F = (0, a.kj)((e) => {
                    const t = e?.bookmark_collection_timeline?.timeline;
                    return !t;
                }, "GQL Bookmark Folders: Failed to render Bookmark Folders timeline"),
                Z = ({ apiClient: e, featureSwitches: t }) => ({
                    bookmarkTweetToFolder: (t) =>
                        e.graphQL(
                            p(),
                            { ...t },
                            (0, a.kj)((e) => !e.bookmark_collection_tweet_put, "GQL Bookmark Folders: failed to Add Tweet to Bookmark Folder"),
                        ),
                    createBookmarkFolder: (t) =>
                        e.graphQL(
                            b(),
                            { ...t },
                            (0, a.kj)((e) => !e.bookmark_collection_create, "GQL Bookmark Folders: failed to Create Bookmark Folder"),
                        ),
                    deleteAll: () => e.graphQL(w(), {}, $).then((e) => e),
                    deleteBookmarkFolder(t) {
                        const { bookmarkFolderId: n } = t;
                        return e.graphQL(y(), { bookmark_collection_id: n });
                    },
                    editBookmarkFolder(t) {
                        const { bookmarkFolderId: n, name: r } = t;
                        return e.graphQL(E(), { bookmark_collection_id: n, name: r });
                    },
                    removeTweetFromBookmarkFolder(t) {
                        const { bookmarkFolderId: n, tweetId: r } = t;
                        return e.graphQL(S(), { bookmark_collection_id: n, tweet_id: r });
                    },
                    fetchBookmarksTimeline: ({ count: n, cursor: r }) => e.graphQL(_(), { count: n, cursor: r, includePromotedContent: !0, ...(0, i.d)(t) }, (e, t) => !t?.bookmark_timeline_v2?.timeline).then((e) => e?.bookmark_timeline_v2?.timeline || T.cY),
                    fetchBookmarkFolderTimeline: ({ bookmark_collection_id: n, cursor: r }) => e.graphQL(m(), { bookmark_collection_id: n, cursor: r, includePromotedContent: !0, ...(0, i.d)(t) }, F).then((e) => e?.bookmark_collection_timeline?.timeline || T.cY),
                    fetchBookmarkFoldersSlice: (t) =>
                        t
                            ? e.graphQL(d(), t, x).then((e) => {
                                  const t = e?.viewer?.user_results?.result,
                                      n = "User" === t?.__typename ? t : void 0,
                                      o = n?.bookmark_collections_slice;
                                  if (o) {
                                      const { entities: e, result: t } = (0, r.Fv)(o.items, [l]);
                                      return { entities: e, result: t, slice_info: o.slice_info };
                                  }
                                  return z;
                              })
                            : Promise.resolve(z),
                });
        },
        290402: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => f });
            var r = n(807896),
                o = n(202784),
                a = n(182056),
                i = n(879113),
                l = n(392237),
                s = n(332920),
                d = n.n(s),
                c = n(968478);
            const m = d().aa6e3300,
                u = ({ retryMessage: e, ...t }, n) => {
                    const l = a.Z.isOnline();
                    return o.createElement(i.Z, (0, r.Z)({}, t, { icon: l ? void 0 : o.createElement(c.default, { style: _.icon }), retryMessage: l ? e : m }));
                },
                _ = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                f = o.forwardRef(u);
        },
        518966: (e, t, n) => {
            "use strict";
            n.d(t, { h: () => s });
            var r = n(332920),
                o = n.n(r),
                a = n(615656);
            const i = o().ef504d80,
                l = o().cef96d5a,
                s = { defaultToast: { text: o().b2542f56 }, [a.ZP.DuplicateBookmark]: { toast: { text: l } }, [a.ZP.ProtectedTweetBookmarkError]: { toast: { text: i } }, showToast: !0 };
        },
        879596: (e, t, n) => {
            "use strict";
            n.d(t, { D: () => o });
            var r = n(332920);
            const o = { defaultToast: { text: n.n(r)().ca96fe6e }, showToast: !0 };
        },
        349972: (e, t, n) => {
            "use strict";
            n.d(t, { j: () => o });
            var r = n(332920);
            const o = { defaultToast: { text: n.n(r)().i14d7a46 }, showToast: !0 };
        },
        694180: (e, t, n) => {
            "use strict";
            n.d(t, { cM: () => h, dS: () => p, iY: () => b });
            var r = n(370751),
                o = n(399896),
                a = n(663550),
                i = n(499627),
                l = n(917799);
            const s = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                m = (0, r.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                u = (0, r.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                _ = (e) => ({ payload: { eventKey: e }, type: c });
            const f = (e, t) => !!e.promotedContent[t],
                p =
                    (e) =>
                    (t, n, { api: r }) => {
                        const { event: a, impression_id: i, promoted_trend_id: s } = e,
                            c = `trend-${s}-${a}`;
                        if (u.has(a) && f(n(), c)) return Promise.resolve();
                        const m = { promoted_trend_id: s, event: a, impression_id: i };
                        return (0, l._O)(t, { params: m, request: r.withEndpoint(o.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: m }, (e, t) => {
                            if (!t && u.has(a)) return [_(c)];
                        });
                    },
                h =
                    ({ disclosureType: e, itemId: t, itemType: n, params: r }) =>
                    (a, i, { api: s }) => {
                        const { event: c, impression_id: u } = r,
                            p = `${n}-${t ?? "undefined"}-${u ?? "undefined"}-${c ?? "undefined"}`;
                        if (m.has(c) && f(i(), p)) return Promise.resolve();
                        const h = e && "earned" === e.toLowerCase() ? "1" : null,
                            b = { ...r, earned: h, epoch_ms: Date.now() };
                        return (0, l._O)(a, { params: b, request: s.withEndpoint(o.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: b }, (e, t) => {
                            if (!t && m.has(c)) return [_(p)];
                        });
                    },
                b =
                    (e) =>
                    (t, n, { api: r }) =>
                        (0, l._O)(t, { params: e, request: r.withEndpoint(o.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            i.Z.register({
                promotedContent: function (e = s, t) {
                    if (!t) return e;
                    if (t.type === c) {
                        if (!t.payload) return e;
                        const { eventKey: n } = t.payload;
                        return { ...e, [n]: !0 };
                    }
                    return e;
                },
            });
        },
        977154: (e, t, n) => {
            "use strict";
            n.d(t, { H$: () => m, ZP: () => d, m: () => c, qk: () => u });
            var r = n(403911),
                o = n(750085),
                a = n(555875),
                i = n(218951);
            const l = "bookmarks",
                s = (0, i.Z)({ timelineId: l, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchBookmarksTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, formatResponse: o.Z, context: "FETCH_BOOKMARKS_TIMELINE", perfKey: "bookmarksGraphQL" }),
                d = s,
                c = (e) => (0, i.Z)({ timelineId: `bookmarkFolder-${e}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchBookmarkFolderTimeline, getEndpointParams: ({ cursor: t }) => ({ cursor: "string" == typeof t ? t : void 0, bookmark_collection_id: e }) }, formatResponse: o.Z, context: "FETCH_BOOKMARK_FOLDER_TIMELINE", perfKey: "bookmarkFolderGraphQL" }),
                m =
                    () =>
                    (e, t, { api: n, featureSwitches: o }) =>
                        n
                            .withEndpoint(r.Z)
                            .deleteAll()
                            .then(() => e(s.deleteTimeline())),
                u = a.CG.bind(null, l);
        },
        661810: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => i });
            var r = n(202784),
                o = n(325686),
                a = n(392237);
            function i({ spacing: e, style: t }) {
                return r.createElement(o.Z, { role: "separator", style: [l.divider, { marginVertical: null != e ? a.default.theme.spaces[e] : void 0 }, t] });
            }
            const l = a.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => _ });
            var r = n(202784),
                o = n(476984),
                a = n.n(o),
                i = n(143778),
                l = n(750410),
                s = n(682830);
            const d = "failed",
                c = "loaded",
                m = "loading",
                u = "none";
            class _ extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === c,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: o, icon: a, loadingMessage: i, onRequestRetry: c, render: _, renderFailure: f, retryMessage: p, retryable: h } = this.props;
                    switch (o) {
                        case d:
                            return h ? r.createElement(l.Z, { icon: a, onRequestRetry: c, retryMessage: p }) : n ? r.createElement(s.m, { failureMessage: n }) : f();
                        case m:
                            return r.createElement(s.J, { "aria-label": e, color: t, loadingMessage: i });
                        case u:
                            return null;
                        default:
                            return _();
                    }
                }
            }
            _.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        529509: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => p });
            var r = n(202784),
                o = n(325686),
                a = n(332920),
                i = n.n(a),
                l = n(815858),
                s = n(731708),
                d = n(642153),
                c = n(530732),
                m = n(392237);
            const u = i().a35a5b10,
                _ = i().fc8cd112,
                f = (e) => r.createElement(s.ZP, null, e);
            class p extends r.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: a, userScreenName: i, withFacepile: m } = this.props,
                        _ = this._renderMessage();
                    return r.createElement(l.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? r.createElement(c.Z, { "aria-label": u, interactiveStyles: null, link: i ? ((f = i), `/${f}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: l }) => r.createElement(o.Z, { style: h.content }, !e && m ? r.createElement(d.Z, { userAvatarUrls: t }) : null, r.createElement(s.ZP, { color: "gray700", size: "subtext2", style: [!e && h.message, (n || l) && !!i && h.underline, a] }, e && m ? r.createElement(d.Z, { style: h.inlineFacepile, userAvatarUrls: t }) : null, _))) : r.createElement(o.Z, { style: h.content }, r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, _)));
                    var f;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : _;
                }
                _renderOneUsername(e) {
                    return r.createElement(i().I18NFormatMessage, { $i18n: "c9e6167d" }, f(e[0]));
                }
                _renderTwoUsernames(e) {
                    return r.createElement(i().I18NFormatMessage, { $i18n: "ha91d1eb" }, f(e[0]), f(e[1]));
                }
                _renderThreeUsernames(e) {
                    return r.createElement(i().I18NFormatMessage, { $i18n: "f1069f9b" }, f(e[0]), f(e[1]), f(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return r.createElement(i().I18NFormatMessage, { $i18n: "e8404c1f" }, f(e[0]), f(e[1]), n);
                }
            }
            p.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const h = m.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        135904: (e, t, n) => {
            "use strict";
            n.d(t, { c: () => a, n: () => o });
            var r = n(392237);
            const o = "longform-styles",
                a = `\n    .longform-header-one {\n        font-size: ${r.default.theme.fontSizes.title2};\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.title1};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${r.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.title4};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${r.default.theme.fontSizes.title3};\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.title2};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${r.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};   \n        margin-bottom: ${r.default.theme.spaces.space12};\n        margin-left: calc(${r.default.theme.spaces.space28} + ${r.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${r.default.theme.spaces.space12} / 2);\n        margin-left: ${r.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${r.default.theme.spaces.space24} + ${r.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${r.default.theme.spaces.space2});\n        padding-left: calc(${r.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${r.default.theme.colors.gray900};\n        border-radius: ${r.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${r.default.theme.spaces.space28} + ${r.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        524496: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => k });
            n(136728);
            var r = n(202784),
                o = n(301503),
                a = n(325686),
                i = n(595088),
                l = n(516951),
                s = n(731708),
                d = n(779802),
                c = n(537392),
                m = n(989272),
                u = n(925873),
                _ = n(202253),
                f = n(786475),
                p = n(392237),
                h = n(135904);
            const b = { [d.P7.atomic]: { element: "section" }, [d.P7.header1]: { element: "h1", wrapper: r.createElement(s.ZP, null) }, [d.P7.header2]: { element: "h2", wrapper: r.createElement(s.ZP, null) } },
                g = (0, i.Z)(b).reduce((e, [t, n]) => e.set(t, n), o.DefaultDraftBlockRenderMap);
            let w = !1;
            const k = r.memo(function (e) {
                    const { componentByType: t, contentState: n, onScribeEvent: i, paragraphFontSizeOverride: s } = e;
                    r.useEffect(() => {
                        w || (m.fH(h.c, h.n), (w = !0));
                    }, []);
                    const p = [(0, _.ez)(i, s), _.aF, _.RU];
                    e.disable_entityLinkDecorator || p.push((0, _.NA)(i, s));
                    const b = u.Z.initEditorState(n, { decorators: p });
                    let k = l.Z;
                    return (
                        t &&
                            (k = (e) => {
                                const n = e.getType();
                                return t[n] || null;
                            }),
                        r.createElement(c.ZP, null, ({ containerWidth: e }) => r.createElement(a.Z, { style: y.fontFamily }, r.createElement(o.Editor, { blockRenderMap: g, blockRendererFn: k, blockStyleFn: (0, d.su)(f.Z.isNarrowScreenWidth(e)), editorState: b, onChange: l.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                y = p.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, t, n) => {
            "use strict";
            n.d(t, { $u: () => D, Ak: () => x, KJ: () => k, LI: () => S, P7: () => h, PW: () => E, QF: () => b, Qm: () => w, Tr: () => T, b$: () => p, db: () => Z, et: () => v, fR: () => f, iH: () => z, lD: () => g, su: () => y, u4: () => F, wX: () => $ });
            var r = n(202784),
                o = n(332920),
                a = n.n(o),
                i = n(394123),
                l = n(856661),
                s = n(69893),
                d = n(474761),
                c = n(428259),
                m = n(89085),
                u = n(630715),
                _ = n(731708);
            const f = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                p = (e) => [
                    { buttonTestId: "btn-bold", Icon: i.default, key: f.bold, onPress: e(f.bold) },
                    { buttonTestId: "btn-italic", Icon: l.default, key: f.italic, onPress: e(f.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: s.default, key: f.strikethrough, onPress: e(f.strikethrough) },
                ],
                h = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                b = (e) => [{ buttonTestId: "btn-blockquote", Icon: d.default, key: h.blockquote, onPress: e(h.blockquote) }],
                g = (e) => [
                    { buttonTestId: "btn-ul", Icon: c.default, key: h.bulleted, onPress: e(h.bulleted) },
                    { buttonTestId: "btn-ol", Icon: m.default, key: h.numbered, onPress: e(h.numbered) },
                ],
                w = "LINK",
                k = (e) => [{ buttonTestId: "btn-link", Icon: u.default, key: w, onPress: e }],
                y = (e, t) => (n) => {
                    const r = (t) => (e ? `${t}-narrow` : t);
                    switch (n.getType()) {
                        case h.bulleted:
                            return r("longform-unordered-list-item");
                        case h.blockquote:
                            return r("longform-blockquote");
                        case h.header1:
                            return r("longform-header-one");
                        case h.header2:
                            return r("longform-header-two");
                        case h.numbered:
                            return r("longform-ordered-list-item");
                        case h.paragraph:
                            return r("longform-unstyled");
                        default:
                            return t?.(n) || "";
                    }
                },
                v = a().d5a48014,
                E = a().b92b6156,
                D = a().ec5ed598,
                S = ({ children: e, extendedWidth: t, size: n, weight: o }) => r.createElement(_.ZP, { extendedWidth: t, size: n, weight: o }, e),
                T = { blockType: h.paragraph, label: D, component: S({ size: "body", children: D }) },
                z = [{ blockType: h.header1, label: v, component: S({ size: "title1", extendedWidth: !0, children: v }) }, { blockType: h.header2, label: E, component: S({ size: "title3", weight: "heavy", children: E }) }, T],
                $ = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                x = ["delete", "delete-word", "delete-to-start-of-line"],
                F = "increase-text-size",
                Z = "decrease-text-size";
        },
        989272: (e, t, n) => {
            "use strict";
            n.d(t, { _i: () => o, fH: () => i, w3: () => a });
            n(136728);
            var r = n(392237);
            const o = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function a(e) {
                i(
                    (function () {
                        const e = r.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${o.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${o.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${o.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    l,
                );
                const t = s(e);
                return (
                    i(
                        (function (e) {
                            const t = s(e);
                            let n = e.placeholderTextColor;
                            const o = e.contentHorizontalPadding;
                            n || (n = r.default.theme.colors.gray700);
                            return `\n    .${t} .public-DraftEditorPlaceholder-root {\n      color: ${n};\n    }\n\n    .${t} .public-DraftEditorPlaceholder-hasFocus {\n      color: ${n};\n    }\n\n    ${o ? `\n        .${t} .public-DraftEditor-content,\n        .${t} .public-DraftEditorPlaceholder-root {\n          padding-left: ${o};\n          padding-right: ${o};\n        }\n      ` : ""}\n  `;
                        })(e),
                        t,
                    ),
                    t
                );
            }
            function i(e, t) {
                if (
                    !(function (e) {
                        return !!document.getElementById(e);
                    })(t)
                ) {
                    const n = document.createElement("style");
                    n.setAttribute("id", t), (n.innerHTML = e);
                    const r = document.head;
                    r && r.insertBefore(n, r.firstChild);
                }
            }
            const l = "draftjs-styles";
            function s(e) {
                const t = (function (e) {
                    for (let t = 0; t < d.length; t++) {
                        if (d[t] === e) return String(t);
                    }
                    return d.push(e), String(d.length - 1);
                })(JSON.stringify(e));
                return `${l}_${t}`;
            }
            const d = [];
        },
        428259: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M6 13.5c-1.934 0-3.5 1.567-3.5 3.5s1.566 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.566-3.5-3.5-3.5zm0 5.25c-.962 0-1.75-.783-1.75-1.75s.788-1.75 1.75-1.75 1.75.783 1.75 1.75-.788 1.75-1.75 1.75zM22 8H12V6h10v2zM6 3.5C4.066 3.5 2.5 5.067 2.5 7s1.566 3.5 3.5 3.5S9.5 8.933 9.5 7 7.934 3.5 6 3.5zm0 5.25c-.962 0-1.75-.783-1.75-1.75S5.038 5.25 6 5.25 7.75 6.033 7.75 7 6.962 8.75 6 8.75zM22 18H12v-2h10v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        971657: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        41065: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        47286: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M5 5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2H5zm2.5 5.75c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM11 13h7v-2h-7v2zm0 4h4v-2h-4v2zm8.5-10C20.88 7 22 8.12 22 9.5v9c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 21 2 19.88 2 18.5v-9C2 8.12 3.12 7 4.5 7h15zM4 18.5c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5v-9c0-.28-.22-.5-.5-.5h-15c-.28 0-.5.22-.5.5v9z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.HWCard.e9c55ffa.js.map

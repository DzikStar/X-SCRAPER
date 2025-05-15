(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.HWCard"],
    {
        525279: (e) => {
            e.exports = { queryId: "MvwjcLYFG9ZaFK7yKxU-6w", operationName: "BookmarkFolderTimeline", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        527154: (e) => {
            e.exports = { queryId: "i78YDd0Tza-dV4SYs58kRg", operationName: "BookmarkFoldersSlice", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        503225: (e) => {
            e.exports = { queryId: "4KHZvvNbHNf07bsgnL9gWA", operationName: "bookmarkTweetToFolder", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        342459: (e) => {
            e.exports = { queryId: "zHZjJ8DcsXtDu-DGA5Eu_A", operationName: "Bookmarks", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
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
        403911: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => F });
            var r = n(506899),
                o = n(163889),
                a = n(414742),
                i = n(703710);
            const l = new r.fK.Entity("bookmarkFolders", {});
            var s = n(527154),
                d = n.n(s),
                c = n(525279),
                m = n.n(c),
                u = n(342459),
                _ = n.n(u),
                f = n(503225),
                p = n.n(f),
                h = n(745735),
                b = n.n(h),
                g = n(485018),
                w = n.n(g),
                k = n(615626),
                y = n.n(k),
                v = n(182247),
                E = n.n(v),
                D = n(974829),
                T = n.n(D),
                S = n(934309);
            const z = { result: [], entities: {}, slice_info: {} },
                $ = (e, t) => {
                    const n = t?.bookmark_all_delete,
                        r = "Done" === n;
                    return r || (0, o.ZP)("GQL Bookmarks: Failed to delete all bookmarks"), (0, a.jB)(e) || !r;
                },
                Z = (0, a.kj)((e) => {
                    const t = e?.viewer?.user_results?.result,
                        n = "User" === t?.__typename ? t : void 0,
                        r = n?.bookmark_collections_slice?.items;
                    return !r;
                }, "GQL Bookmark Folders: Failed to render Bookmark Folders timeline"),
                x = (0, a.kj)((e) => {
                    const t = e?.bookmark_collection_timeline?.timeline;
                    return !t;
                }, "GQL Bookmark Folders: Failed to render Bookmark Folders timeline"),
                F = ({ apiClient: e, featureSwitches: t }) => ({
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
                        return e.graphQL(T(), { bookmark_collection_id: n, tweet_id: r });
                    },
                    fetchBookmarksTimeline: ({ count: n, cursor: r }) => e.graphQL(_(), { count: n, cursor: r, includePromotedContent: !0, ...(0, i.d)(t) }, (e, t) => !t?.bookmark_timeline_v2?.timeline).then((e) => e?.bookmark_timeline_v2?.timeline || S.cY),
                    fetchBookmarkFolderTimeline: ({ bookmark_collection_id: n, cursor: r }) => e.graphQL(m(), { bookmark_collection_id: n, cursor: r, includePromotedContent: !0, ...(0, i.d)(t) }, x).then((e) => e?.bookmark_collection_timeline?.timeline || S.cY),
                    fetchBookmarkFoldersSlice: (t) =>
                        t
                            ? e.graphQL(d(), t, Z).then((e) => {
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
                s = n(674132),
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
            var r = n(674132),
                o = n.n(r),
                a = n(615656);
            const i = o().ef504d80,
                l = o().cef96d5a,
                s = { defaultToast: { text: o().b2542f56 }, [a.ZP.DuplicateBookmark]: { toast: { text: l } }, [a.ZP.ProtectedTweetBookmarkError]: { toast: { text: i } }, showToast: !0 };
        },
        879596: (e, t, n) => {
            "use strict";
            n.d(t, { D: () => o });
            var r = n(674132);
            const o = { defaultToast: { text: n.n(r)().ca96fe6e }, showToast: !0 };
        },
        349972: (e, t, n) => {
            "use strict";
            n.d(t, { j: () => o });
            var r = n(674132);
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
                a = n(674132),
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
            n.d(t, { $u: () => D, Ak: () => Z, KJ: () => k, LI: () => T, P7: () => h, PW: () => E, QF: () => b, Qm: () => w, Tr: () => S, b$: () => p, db: () => F, et: () => v, fR: () => f, iH: () => z, lD: () => g, su: () => y, u4: () => x, wX: () => $ });
            var r = n(202784),
                o = n(674132),
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
                T = ({ children: e, extendedWidth: t, size: n, weight: o }) => r.createElement(_.ZP, { extendedWidth: t, size: n, weight: o }, e),
                S = { blockType: h.paragraph, label: D, component: T({ size: "body", children: D }) },
                z = [{ blockType: h.header1, label: v, component: T({ size: "title1", extendedWidth: !0, children: v }) }, { blockType: h.header2, label: E, component: T({ size: "title3", weight: "heavy", children: E }) }, S],
                $ = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                Z = ["delete", "delete-word", "delete-to-start-of-line"],
                x = "increase-text-size",
                F = "decrease-text-size";
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
        215380: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M18.5 2h-13A2.5 2.5 0 003 4.5v15A2.5 2.5 0 005.5 22h13a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0018.5 2zm.5 17.5c0 .28-.22.5-.5.5h-13c-.28 0-.5-.22-.5-.5v-15c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5v15zM9 5h6v2H9V5zm3 4.555a2.092 2.092 0 11-.001 4.185A2.092 2.092 0 0112 9.555zM16.141 18H7.859c.237-.763.586-1.431 1.074-1.949 1.036-1.105 2.31-1.277 3.067-1.277s2.031.172 3.067 1.277c.489.518.837 1.186 1.074 1.949z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        394123: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M15.636 11.671c2.079-.583 3.093-2.18 3.093-3.929 0-2.307-1.471-4.741-5.983-4.741H5.623V21h7.579c4.411 0 6.008-2.484 6.008-4.994 0-2.383-1.343-3.955-3.574-4.335zm-3.295-6.287c2.535 0 3.27 1.319 3.27 2.662 0 1.242-.583 2.611-3.27 2.611H8.69V5.384h3.651zM8.69 18.617v-5.628h4.208c2.231 0 3.194 1.166 3.194 2.738 0 1.547-.887 2.89-3.397 2.89H8.69z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        833458: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 3.75c-4.56 0-8.25 3.69-8.25 8.25s3.69 8.25 8.25 8.25 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM16.4 9.28l-5.21 7.15-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        856661: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M9 6h3.731L9.184 18H5v2h10v-2h-3.731l3.547-12H19V4H9v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        902673: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M8 9h2v2H8z" }), r.createElement("path", { d: "M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zM6 7h6v6H6V7zm11.998 10h-12v-2h12v2zM18 13h-4v-2h4v2zm0-4h-4V7h4v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        89085: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        310700: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M21.04 1.54L17.5 5.09c-.04-.02-.08-.03-.13-.04L14.3 3H9.7l-3 2H5C3.62 5 2.5 6.12 2.5 7.5v11c0 .46.12.88.34 1.25l-1.3 1.29 1.42 1.42 19.5-19.5-1.42-1.42zM13.7 5l2.33 1.56-2 1.99C13.44 8.2 12.74 8 12 8c-2.21 0-4 1.79-4 4 0 .74.2 1.44.55 2.03L4.5 18.09V7.5c0-.28.22-.5.5-.5h2.3l3-2h3.4zM12 10c.18 0 .35.02.52.07l-2.45 2.45c-.05-.17-.07-.34-.07-.52 0-1.1.9-2 2-2zm7 11H7.24l2-2H19c.28 0 .5-.22.5-.5V9h2v9.5c0 1.38-1.12 2.5-2.5 2.5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.HWCard.250cc17a.js.map

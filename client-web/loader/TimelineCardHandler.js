(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TimelineCardHandler"],
    {
        525279: (e) => {
            e.exports = { queryId: "LNDsS3jDLnCr9rhj5ArnGg", operationName: "BookmarkFolderTimeline", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        527154: (e) => {
            e.exports = { queryId: "i78YDd0Tza-dV4SYs58kRg", operationName: "BookmarkFoldersSlice", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        503225: (e) => {
            e.exports = { queryId: "4KHZvvNbHNf07bsgnL9gWA", operationName: "bookmarkTweetToFolder", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        342459: (e) => {
            e.exports = { queryId: "3rmMnGpXCYmivkSUIz0IaQ", operationName: "Bookmarks", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
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
            n.d(t, { Z: () => P });
            var o = n(506899),
                r = n(163889),
                a = n(414742),
                i = n(703710);
            const l = new o.fK.Entity("bookmarkFolders", {});
            var s = n(527154),
                d = n.n(s),
                c = n(525279),
                m = n.n(c),
                u = n(342459),
                _ = n.n(u),
                p = n(503225),
                f = n.n(p),
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
            const $ = { result: [], entities: {}, slice_info: {} },
                z = (e, t) => {
                    const n = t?.bookmark_all_delete,
                        o = "Done" === n;
                    return o || (0, r.ZP)("GQL Bookmarks: Failed to delete all bookmarks"), (0, a.jB)(e) || !o;
                },
                x = (0, a.kj)((e) => {
                    const t = e?.viewer?.user_results?.result,
                        n = "User" === t?.__typename ? t : void 0,
                        o = n?.bookmark_collections_slice?.items;
                    return !o;
                }, "GQL Bookmark Folders: Failed to render Bookmark Folders timeline"),
                F = (0, a.kj)((e) => {
                    const t = e?.bookmark_collection_timeline?.timeline;
                    return !t;
                }, "GQL Bookmark Folders: Failed to render Bookmark Folders timeline"),
                P = ({ apiClient: e, featureSwitches: t }) => ({
                    bookmarkTweetToFolder: (t) =>
                        e.graphQL(
                            f(),
                            { ...t },
                            (0, a.kj)((e) => !e.bookmark_collection_tweet_put, "GQL Bookmark Folders: failed to Add Tweet to Bookmark Folder"),
                        ),
                    createBookmarkFolder: (t) =>
                        e.graphQL(
                            b(),
                            { ...t },
                            (0, a.kj)((e) => !e.bookmark_collection_create, "GQL Bookmark Folders: failed to Create Bookmark Folder"),
                        ),
                    deleteAll: () => e.graphQL(w(), {}, z).then((e) => e),
                    deleteBookmarkFolder(t) {
                        const { bookmarkFolderId: n } = t;
                        return e.graphQL(y(), { bookmark_collection_id: n });
                    },
                    editBookmarkFolder(t) {
                        const { bookmarkFolderId: n, name: o } = t;
                        return e.graphQL(E(), { bookmark_collection_id: n, name: o });
                    },
                    removeTweetFromBookmarkFolder(t) {
                        const { bookmarkFolderId: n, tweetId: o } = t;
                        return e.graphQL(T(), { bookmark_collection_id: n, tweet_id: o });
                    },
                    fetchBookmarksTimeline: ({ count: n, cursor: o }) => e.graphQL(_(), { count: n, cursor: o, includePromotedContent: !0, ...(0, i.d)(t) }, (e, t) => !t?.bookmark_timeline_v2?.timeline).then((e) => e?.bookmark_timeline_v2?.timeline || S.cY),
                    fetchBookmarkFolderTimeline: ({ bookmark_collection_id: n, cursor: o }) => e.graphQL(m(), { bookmark_collection_id: n, cursor: o, includePromotedContent: !0, ...(0, i.d)(t) }, F).then((e) => e?.bookmark_collection_timeline?.timeline || S.cY),
                    fetchBookmarkFoldersSlice: (t) =>
                        t
                            ? e.graphQL(d(), t, x).then((e) => {
                                  const t = e?.viewer?.user_results?.result,
                                      n = "User" === t?.__typename ? t : void 0,
                                      r = n?.bookmark_collections_slice;
                                  if (r) {
                                      const { entities: e, result: t } = (0, o.Fv)(r.items, [l]);
                                      return { entities: e, result: t, slice_info: r.slice_info };
                                  }
                                  return $;
                              })
                            : Promise.resolve($),
                });
        },
        138896: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => p });
            var o = n(459643),
                r = n(351322),
                a = n(202784),
                i = n(260137),
                l = n(668214),
                s = n(276001);
            const d = (e, t) => s.Z.select(e, t.entry?.content?.id),
                c = (0, l.Z)().propsFromState(() => ({ card: d })),
                m = { tweetUserId: "" },
                u = (e) => {
                    const { card: t } = e;
                    return t ? a.createElement(i.default, { card: t, cardContext: m }) : null;
                },
                _ = c(a.memo(u)),
                p = r.iH({ component: _, shouldDisplayBorder: (0, o.Z)(!1), isFocusable: (0, o.Z)(!0) }).getHandler();
        },
        518966: (e, t, n) => {
            "use strict";
            n.d(t, { h: () => s });
            var o = n(674132),
                r = n.n(o),
                a = n(615656);
            const i = r().ef504d80,
                l = r().cef96d5a,
                s = { defaultToast: { text: r().b2542f56 }, [a.ZP.DuplicateBookmark]: { toast: { text: l } }, [a.ZP.ProtectedTweetBookmarkError]: { toast: { text: i } }, showToast: !0 };
        },
        349972: (e, t, n) => {
            "use strict";
            n.d(t, { j: () => r });
            var o = n(674132);
            const r = { defaultToast: { text: n.n(o)().i14d7a46 }, showToast: !0 };
        },
        694180: (e, t, n) => {
            "use strict";
            n.d(t, { cM: () => h, dS: () => f, iY: () => b });
            var o = n(370751),
                r = n(399896),
                a = n(663550),
                i = n(499627),
                l = n(917799);
            const s = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                m = (0, o.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                u = (0, o.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                _ = (e) => ({ payload: { eventKey: e }, type: c });
            const p = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, n, { api: o }) => {
                        const { event: a, impression_id: i, promoted_trend_id: s } = e,
                            c = `trend-${s}-${a}`;
                        if (u.has(a) && p(n(), c)) return Promise.resolve();
                        const m = { promoted_trend_id: s, event: a, impression_id: i };
                        return (0, l._O)(t, { params: m, request: o.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: m }, (e, t) => {
                            if (!t && u.has(a)) return [_(c)];
                        });
                    },
                h =
                    ({ disclosureType: e, itemId: t, itemType: n, params: o }) =>
                    (a, i, { api: s }) => {
                        const { event: c, impression_id: u } = o,
                            f = `${n}-${t ?? "undefined"}-${u ?? "undefined"}-${c ?? "undefined"}`;
                        if (m.has(c) && p(i(), f)) return Promise.resolve();
                        const h = e && "earned" === e.toLowerCase() ? "1" : null,
                            b = { ...o, earned: h, epoch_ms: Date.now() };
                        return (0, l._O)(a, { params: b, request: s.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: b }, (e, t) => {
                            if (!t && m.has(c)) return [_(f)];
                        });
                    },
                b =
                    (e) =>
                    (t, n, { api: o }) =>
                        (0, l._O)(t, { params: e, request: o.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
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
            var o = n(403911),
                r = n(750085),
                a = n(555875),
                i = n(218951);
            const l = "bookmarks",
                s = (0, i.Z)({ timelineId: l, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchBookmarksTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, formatResponse: r.Z, context: "FETCH_BOOKMARKS_TIMELINE", perfKey: "bookmarksGraphQL" }),
                d = s,
                c = (e) => (0, i.Z)({ timelineId: `bookmarkFolder-${e}`, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchBookmarkFolderTimeline, getEndpointParams: ({ cursor: t }) => ({ cursor: "string" == typeof t ? t : void 0, bookmark_collection_id: e }) }, formatResponse: r.Z, context: "FETCH_BOOKMARK_FOLDER_TIMELINE", perfKey: "bookmarkFolderGraphQL" }),
                m =
                    () =>
                    (e, t, { api: n, featureSwitches: r }) =>
                        n
                            .withEndpoint(o.Z)
                            .deleteAll()
                            .then(() => e(s.deleteTimeline())),
                u = a.CG.bind(null, l);
        },
        529509: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => f });
            var o = n(202784),
                r = n(325686),
                a = n(674132),
                i = n.n(a),
                l = n(815858),
                s = n(731708),
                d = n(642153),
                c = n(530732),
                m = n(392237);
            const u = i().a35a5b10,
                _ = i().fc8cd112,
                p = (e) => o.createElement(s.ZP, null, e);
            class f extends o.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: a, userScreenName: i, withFacepile: m } = this.props,
                        _ = this._renderMessage();
                    return o.createElement(l.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? o.createElement(c.Z, { "aria-label": u, interactiveStyles: null, link: i ? ((p = i), `/${p}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: l }) => o.createElement(r.Z, { style: h.content }, !e && m ? o.createElement(d.Z, { userAvatarUrls: t }) : null, o.createElement(s.ZP, { color: "gray700", size: "subtext2", style: [!e && h.message, (n || l) && !!i && h.underline, a] }, e && m ? o.createElement(d.Z, { style: h.inlineFacepile, userAvatarUrls: t }) : null, _))) : o.createElement(r.Z, { style: h.content }, o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, _)));
                    var p;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : _;
                }
                _renderOneUsername(e) {
                    return o.createElement(i().I18NFormatMessage, { $i18n: "c9e6167d" }, p(e[0]));
                }
                _renderTwoUsernames(e) {
                    return o.createElement(i().I18NFormatMessage, { $i18n: "ha91d1eb" }, p(e[0]), p(e[1]));
                }
                _renderThreeUsernames(e) {
                    return o.createElement(i().I18NFormatMessage, { $i18n: "f1069f9b" }, p(e[0]), p(e[1]), p(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return o.createElement(i().I18NFormatMessage, { $i18n: "e8404c1f" }, p(e[0]), p(e[1]), n);
                }
            }
            f.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const h = m.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        135904: (e, t, n) => {
            "use strict";
            n.d(t, { c: () => a, n: () => r });
            var o = n(392237);
            const r = "longform-styles",
                a = `\n    .longform-header-one {\n        font-size: ${o.default.theme.fontSizes.title2};\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title1};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${o.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${o.default.theme.fontSizes.title3};\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title2};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${o.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.headline1};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};   \n        margin-bottom: ${o.default.theme.spaces.space12};\n        margin-left: calc(${o.default.theme.spaces.space28} + ${o.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${o.default.theme.spaces.space12} / 2);\n        margin-left: ${o.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${o.default.theme.spaces.space24} + ${o.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${o.default.theme.spaces.space2});\n        padding-left: calc(${o.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${o.default.theme.colors.gray900};\n        border-radius: ${o.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${o.default.theme.spaces.space28} + ${o.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${o.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${o.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        524496: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => k });
            n(136728);
            var o = n(202784),
                r = n(301503),
                a = n(325686),
                i = n(595088),
                l = n(516951),
                s = n(731708),
                d = n(779802),
                c = n(537392),
                m = n(989272),
                u = n(925873),
                _ = n(202253),
                p = n(786475),
                f = n(392237),
                h = n(135904);
            const b = { [d.P7.atomic]: { element: "section" }, [d.P7.header1]: { element: "h1", wrapper: o.createElement(s.ZP, null) }, [d.P7.header2]: { element: "h2", wrapper: o.createElement(s.ZP, null) } },
                g = (0, i.Z)(b).reduce((e, [t, n]) => e.set(t, n), r.DefaultDraftBlockRenderMap);
            let w = !1;
            const k = o.memo(function (e) {
                    const { componentByType: t, contentState: n, onScribeEvent: i, paragraphFontSizeOverride: s } = e;
                    o.useEffect(() => {
                        w || (m.fH(h.c, h.n), (w = !0));
                    }, []);
                    const f = [(0, _.ez)(i, s), _.aF, _.RU];
                    e.disable_entityLinkDecorator || f.push((0, _.NA)(i, s));
                    const b = u.Z.initEditorState(n, { decorators: f });
                    let k = l.Z;
                    return (
                        t &&
                            (k = (e) => {
                                const n = e.getType();
                                return t[n] || null;
                            }),
                        o.createElement(c.ZP, null, ({ containerWidth: e }) => o.createElement(a.Z, { style: y.fontFamily }, o.createElement(r.Editor, { blockRenderMap: g, blockRendererFn: k, blockStyleFn: (0, d.su)(p.Z.isNarrowScreenWidth(e)), editorState: b, onChange: l.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                y = f.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, t, n) => {
            "use strict";
            n.d(t, { $u: () => D, Ak: () => x, KJ: () => k, LI: () => T, P7: () => h, PW: () => E, QF: () => b, Qm: () => w, Tr: () => S, b$: () => f, db: () => P, et: () => v, fR: () => p, iH: () => $, lD: () => g, su: () => y, u4: () => F, wX: () => z });
            var o = n(202784),
                r = n(674132),
                a = n.n(r),
                i = n(394123),
                l = n(856661),
                s = n(69893),
                d = n(474761),
                c = n(428259),
                m = n(89085),
                u = n(630715),
                _ = n(731708);
            const p = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                f = (e) => [
                    { buttonTestId: "btn-bold", Icon: i.default, key: p.bold, onPress: e(p.bold) },
                    { buttonTestId: "btn-italic", Icon: l.default, key: p.italic, onPress: e(p.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: s.default, key: p.strikethrough, onPress: e(p.strikethrough) },
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
                    const o = (t) => (e ? `${t}-narrow` : t);
                    switch (n.getType()) {
                        case h.bulleted:
                            return o("longform-unordered-list-item");
                        case h.blockquote:
                            return o("longform-blockquote");
                        case h.header1:
                            return o("longform-header-one");
                        case h.header2:
                            return o("longform-header-two");
                        case h.numbered:
                            return o("longform-ordered-list-item");
                        case h.paragraph:
                            return o("longform-unstyled");
                        default:
                            return t?.(n) || "";
                    }
                },
                v = a().d5a48014,
                E = a().b92b6156,
                D = a().ec5ed598,
                T = ({ children: e, extendedWidth: t, size: n, weight: r }) => o.createElement(_.ZP, { extendedWidth: t, size: n, weight: r }, e),
                S = { blockType: h.paragraph, label: D, component: T({ size: "body", children: D }) },
                $ = [{ blockType: h.header1, label: v, component: T({ size: "title1", extendedWidth: !0, children: v }) }, { blockType: h.header2, label: E, component: T({ size: "title3", weight: "heavy", children: E }) }, S],
                z = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                x = ["delete", "delete-word", "delete-to-start-of-line"],
                F = "increase-text-size",
                P = "decrease-text-size";
        },
        989272: (e, t, n) => {
            "use strict";
            n.d(t, { _i: () => r, fH: () => i, w3: () => a });
            n(136728);
            var o = n(392237);
            const r = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function a(e) {
                i(
                    (function () {
                        const e = o.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${r.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${r.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${r.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    l,
                );
                const t = s(e);
                return (
                    i(
                        (function (e) {
                            const t = s(e);
                            let n = e.placeholderTextColor;
                            const r = e.contentHorizontalPadding;
                            n || (n = o.default.theme.colors.gray700);
                            return `\n    .${t} .public-DraftEditorPlaceholder-root {\n      color: ${n};\n    }\n\n    .${t} .public-DraftEditorPlaceholder-hasFocus {\n      color: ${n};\n    }\n\n    ${r ? `\n        .${t} .public-DraftEditor-content,\n        .${t} .public-DraftEditorPlaceholder-root {\n          padding-left: ${r};\n          padding-right: ${r};\n        }\n      ` : ""}\n  `;
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
                    const o = document.head;
                    o && o.insertBefore(n, o.firstChild);
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
        818088: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        748138: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        784732: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.998 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.12 2.5 2.5v13c0 1.38-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.276 0-.5.22-.5.5v13c0 .28.224.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zM6 7h6v6H6V7zm2 2v2h2V9H8zm10 0h-4V7h4v2zm0 4h-4v-2h4v2zm-.002 4h-12v-2h12v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TimelineCardHandler.9bd29a5a.js.map

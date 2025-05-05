(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TimelineCardHandler"],
    {
        525279: (e) => {
            e.exports = { queryId: "1Je5Be_uR9dbcLSSN6ooRw", operationName: "BookmarkFolderTimeline", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
        },
        527154: (e) => {
            e.exports = { queryId: "i78YDd0Tza-dV4SYs58kRg", operationName: "BookmarkFoldersSlice", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        503225: (e) => {
            e.exports = { queryId: "4KHZvvNbHNf07bsgnL9gWA", operationName: "bookmarkTweetToFolder", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        342459: (e) => {
            e.exports = { queryId: "2neUNDqrrFzbLui8yallcQ", operationName: "Bookmarks", operationType: "query", metadata: { featureSwitches: ["rweb_video_screen_enabled", "profile_label_improvements_pcf_label_in_post_enabled", "rweb_tipjar_consumption_enabled", "verified_phone_label_enabled", "creator_subscriptions_tweet_preview_api_enabled", "responsive_web_graphql_timeline_navigation_enabled", "responsive_web_graphql_skip_user_profile_image_extensions_enabled", "premium_content_api_read_enabled", "communities_web_enable_tweet_community_results_fetch", "c9s_tweet_anatomy_moderator_badge_enabled", "responsive_web_grok_analyze_button_fetch_trends_enabled", "responsive_web_grok_analyze_post_followups_enabled", "responsive_web_jetfuel_frame", "responsive_web_grok_share_attachment_enabled", "articles_preview_enabled", "responsive_web_edit_tweet_api_enabled", "graphql_is_translatable_rweb_tweet_is_translatable_enabled", "view_counts_everywhere_api_enabled", "longform_notetweets_consumption_enabled", "responsive_web_twitter_article_tweet_consumption_enabled", "tweet_awards_web_tipping_enabled", "responsive_web_grok_show_grok_translated_post", "responsive_web_grok_analysis_button_from_backend", "creator_subscriptions_quote_tweet_preview_enabled", "freedom_of_speech_not_reach_fetch_enabled", "standardized_nudges_misinfo", "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled", "longform_notetweets_rich_text_read_enabled", "longform_notetweets_inline_media_enabled", "responsive_web_grok_image_annotation_enabled", "responsive_web_enhance_cards_enabled"], fieldToggles: ["withAuxiliaryUserLabels", "withArticleRichContentState", "withArticlePlainText", "withGrokAnalyze", "withDisallowedReplyControls"] } };
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
            n.d(t, { Z: () => Z });
            var o = n(506899),
                r = n(163889),
                i = n(414742),
                a = n(703710);
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
                S = n.n(D),
                T = n(934309);
            const $ = { result: [], entities: {}, slice_info: {} },
                z = (e, t) => {
                    const n = t?.bookmark_all_delete,
                        o = "Done" === n;
                    return o || (0, r.ZP)("GQL Bookmarks: Failed to delete all bookmarks"), (0, i.jB)(e) || !o;
                },
                x = (0, i.kj)((e) => {
                    const t = e?.viewer?.user_results?.result,
                        n = "User" === t?.__typename ? t : void 0,
                        o = n?.bookmark_collections_slice?.items;
                    return !o;
                }, "GQL Bookmark Folders: Failed to render Bookmark Folders timeline"),
                F = (0, i.kj)((e) => {
                    const t = e?.bookmark_collection_timeline?.timeline;
                    return !t;
                }, "GQL Bookmark Folders: Failed to render Bookmark Folders timeline"),
                Z = ({ apiClient: e, featureSwitches: t }) => ({
                    bookmarkTweetToFolder: (t) =>
                        e.graphQL(
                            f(),
                            { ...t },
                            (0, i.kj)((e) => !e.bookmark_collection_tweet_put, "GQL Bookmark Folders: failed to Add Tweet to Bookmark Folder"),
                        ),
                    createBookmarkFolder: (t) =>
                        e.graphQL(
                            b(),
                            { ...t },
                            (0, i.kj)((e) => !e.bookmark_collection_create, "GQL Bookmark Folders: failed to Create Bookmark Folder"),
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
                        return e.graphQL(S(), { bookmark_collection_id: n, tweet_id: o });
                    },
                    fetchBookmarksTimeline: ({ count: n, cursor: o }) => e.graphQL(_(), { count: n, cursor: o, includePromotedContent: !0, ...(0, a.d)(t) }, (e, t) => !t?.bookmark_timeline_v2?.timeline).then((e) => e?.bookmark_timeline_v2?.timeline || T.cY),
                    fetchBookmarkFolderTimeline: ({ bookmark_collection_id: n, cursor: o }) => e.graphQL(m(), { bookmark_collection_id: n, cursor: o, includePromotedContent: !0, ...(0, a.d)(t) }, F).then((e) => e?.bookmark_collection_timeline?.timeline || T.cY),
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
                i = n(202784),
                a = n(260137),
                l = n(668214),
                s = n(276001);
            const d = (e, t) => s.Z.select(e, t.entry?.content?.id),
                c = (0, l.Z)().propsFromState(() => ({ card: d })),
                m = { tweetUserId: "" },
                u = (e) => {
                    const { card: t } = e;
                    return t ? i.createElement(a.default, { card: t, cardContext: m }) : null;
                },
                _ = c(i.memo(u)),
                p = r.iH({ component: _, shouldDisplayBorder: (0, o.Z)(!1), isFocusable: (0, o.Z)(!0) }).getHandler();
        },
        518966: (e, t, n) => {
            "use strict";
            n.d(t, { h: () => s });
            var o = n(674132),
                r = n.n(o),
                i = n(615656);
            const a = r().ef504d80,
                l = r().cef96d5a,
                s = { defaultToast: { text: r().b2542f56 }, [i.ZP.DuplicateBookmark]: { toast: { text: l } }, [i.ZP.ProtectedTweetBookmarkError]: { toast: { text: a } }, showToast: !0 };
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
                i = n(663550),
                a = n(499627),
                l = n(917799);
            const s = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                c = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                m = (0, o.Z)([i.dx.IMPRESSION, i.dx.DWELL]),
                u = (0, o.Z)([i.AJ.TREND_VIEW, i.AJ.SPOTLIGHT_IMPRESSION]),
                _ = (e) => ({ payload: { eventKey: e }, type: c });
            const p = (e, t) => !!e.promotedContent[t],
                f =
                    (e) =>
                    (t, n, { api: o }) => {
                        const { event: i, impression_id: a, promoted_trend_id: s } = e,
                            c = `trend-${s}-${i}`;
                        if (u.has(i) && p(n(), c)) return Promise.resolve();
                        const m = { promoted_trend_id: s, event: i, impression_id: a };
                        return (0, l._O)(t, { params: m, request: o.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: m }, (e, t) => {
                            if (!t && u.has(i)) return [_(c)];
                        });
                    },
                h =
                    ({ disclosureType: e, itemId: t, itemType: n, params: o }) =>
                    (i, a, { api: s }) => {
                        const { event: c, impression_id: u } = o,
                            f = `${n}-${t ?? "undefined"}-${u ?? "undefined"}-${c ?? "undefined"}`;
                        if (m.has(c) && p(a(), f)) return Promise.resolve();
                        const h = e && "earned" === e.toLowerCase() ? "1" : null,
                            b = { ...o, earned: h, epoch_ms: Date.now() };
                        return (0, l._O)(i, { params: b, request: s.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: b }, (e, t) => {
                            if (!t && m.has(c)) return [_(f)];
                        });
                    },
                b =
                    (e) =>
                    (t, n, { api: o }) =>
                        (0, l._O)(t, { params: e, request: o.withEndpoint(r.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            a.Z.register({
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
                i = n(555875),
                a = n(218951);
            const l = "bookmarks",
                s = (0, a.Z)({ timelineId: l, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchBookmarksTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, formatResponse: r.Z, context: "FETCH_BOOKMARKS_TIMELINE", perfKey: "bookmarksGraphQL" }),
                d = s,
                c = (e) => (0, a.Z)({ timelineId: `bookmarkFolder-${e}`, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchBookmarkFolderTimeline, getEndpointParams: ({ cursor: t }) => ({ cursor: "string" == typeof t ? t : void 0, bookmark_collection_id: e }) }, formatResponse: r.Z, context: "FETCH_BOOKMARK_FOLDER_TIMELINE", perfKey: "bookmarkFolderGraphQL" }),
                m =
                    () =>
                    (e, t, { api: n, featureSwitches: r }) =>
                        n
                            .withEndpoint(o.Z)
                            .deleteAll()
                            .then(() => e(s.deleteTimeline())),
                u = i.CG.bind(null, l);
        },
        529509: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => f });
            var o = n(202784),
                r = n(325686),
                i = n(674132),
                a = n.n(i),
                l = n(815858),
                s = n(731708),
                d = n(642153),
                c = n(530732),
                m = n(392237);
            const u = a().a35a5b10,
                _ = a().fc8cd112,
                p = (e) => o.createElement(s.ZP, null, e);
            class f extends o.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: i, userScreenName: a, withFacepile: m } = this.props,
                        _ = this._renderMessage();
                    return o.createElement(l.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? o.createElement(c.Z, { "aria-label": u, interactiveStyles: null, link: a ? ((p = a), `/${p}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: l }) => o.createElement(r.Z, { style: h.content }, !e && m ? o.createElement(d.Z, { userAvatarUrls: t }) : null, o.createElement(s.ZP, { color: "gray700", size: "subtext2", style: [!e && h.message, (n || l) && !!a && h.underline, i] }, e && m ? o.createElement(d.Z, { style: h.inlineFacepile, userAvatarUrls: t }) : null, _))) : o.createElement(r.Z, { style: h.content }, o.createElement(s.ZP, { color: "gray700", size: "subtext2" }, _)));
                    var p;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : _;
                }
                _renderOneUsername(e) {
                    return o.createElement(a().I18NFormatMessage, { $i18n: "c9e6167d" }, p(e[0]));
                }
                _renderTwoUsernames(e) {
                    return o.createElement(a().I18NFormatMessage, { $i18n: "ha91d1eb" }, p(e[0]), p(e[1]));
                }
                _renderThreeUsernames(e) {
                    return o.createElement(a().I18NFormatMessage, { $i18n: "f1069f9b" }, p(e[0]), p(e[1]), p(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return o.createElement(a().I18NFormatMessage, { $i18n: "e8404c1f" }, p(e[0]), p(e[1]), n);
                }
            }
            f.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const h = m.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        135904: (e, t, n) => {
            "use strict";
            n.d(t, { c: () => i, n: () => r });
            var o = n(392237);
            const r = "longform-styles",
                i = `\n    .longform-header-one {\n        font-size: ${o.default.theme.fontSizes.title2};\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title1};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${o.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${o.default.theme.fontSizes.title3};\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title2};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${o.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.headline1};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};   \n        margin-bottom: ${o.default.theme.spaces.space12};\n        margin-left: calc(${o.default.theme.spaces.space28} + ${o.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${o.default.theme.spaces.space12} / 2);\n        margin-left: ${o.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${o.default.theme.spaces.space24} + ${o.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${o.default.theme.spaces.space2});\n        padding-left: calc(${o.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${o.default.theme.colors.gray900};\n        border-radius: ${o.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${o.default.theme.spaces.space28} + ${o.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${o.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${o.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        524496: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => k });
            n(136728);
            var o = n(202784),
                r = n(301503),
                i = n(325686),
                a = n(595088),
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
                g = (0, a.Z)(b).reduce((e, [t, n]) => e.set(t, n), r.DefaultDraftBlockRenderMap);
            let w = !1;
            const k = o.memo(function (e) {
                    const { componentByType: t, contentState: n, onScribeEvent: a, paragraphFontSizeOverride: s } = e;
                    o.useEffect(() => {
                        w || (m.fH(h.c, h.n), (w = !0));
                    }, []);
                    const f = [(0, _.ez)(a, s), _.aF, _.RU];
                    e.disable_entityLinkDecorator || f.push((0, _.NA)(a, s));
                    const b = u.Z.initEditorState(n, { decorators: f });
                    let k = l.Z;
                    return (
                        t &&
                            (k = (e) => {
                                const n = e.getType();
                                return t[n] || null;
                            }),
                        o.createElement(c.ZP, null, ({ containerWidth: e }) => o.createElement(i.Z, { style: y.fontFamily }, o.createElement(r.Editor, { blockRenderMap: g, blockRendererFn: k, blockStyleFn: (0, d.su)(p.Z.isNarrowScreenWidth(e)), editorState: b, onChange: l.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                y = f.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, t, n) => {
            "use strict";
            n.d(t, { $u: () => D, Ak: () => x, KJ: () => k, LI: () => S, P7: () => h, PW: () => E, QF: () => b, Qm: () => w, Tr: () => T, b$: () => f, db: () => Z, et: () => v, fR: () => p, iH: () => $, lD: () => g, su: () => y, u4: () => F, wX: () => z });
            var o = n(202784),
                r = n(674132),
                i = n.n(r),
                a = n(394123),
                l = n(856661),
                s = n(69893),
                d = n(474761),
                c = n(428259),
                m = n(89085),
                u = n(630715),
                _ = n(731708);
            const p = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                f = (e) => [
                    { buttonTestId: "btn-bold", Icon: a.default, key: p.bold, onPress: e(p.bold) },
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
                v = i().d5a48014,
                E = i().b92b6156,
                D = i().ec5ed598,
                S = ({ children: e, extendedWidth: t, size: n, weight: r }) => o.createElement(_.ZP, { extendedWidth: t, size: n, weight: r }, e),
                T = { blockType: h.paragraph, label: D, component: S({ size: "body", children: D }) },
                $ = [{ blockType: h.header1, label: v, component: S({ size: "title1", extendedWidth: !0, children: v }) }, { blockType: h.header2, label: E, component: S({ size: "title3", weight: "heavy", children: E }) }, T],
                z = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                x = ["delete", "delete-word", "delete-to-start-of-line"],
                F = "increase-text-size",
                Z = "decrease-text-size";
        },
        989272: (e, t, n) => {
            "use strict";
            n.d(t, { _i: () => r, fH: () => a, w3: () => i });
            n(136728);
            var o = n(392237);
            const r = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function i(e) {
                a(
                    (function () {
                        const e = o.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${r.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${r.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${r.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    l,
                );
                const t = s(e);
                return (
                    a(
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
            function a(e, t) {
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
        270711: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M19.518 7.57C17.542 6.582 14.883 6 12 6s-5.543.582-7.518 1.57C2.566 8.528 1 10.036 1 12c0 1.393.803 2.565 1.913 3.446 1.054.836 2.473 1.488 4.087 1.923v-2.082c-1.19-.372-2.158-.863-2.844-1.408C3.322 13.218 3 12.564 3 12c0-.798.673-1.789 2.376-2.641C7.019 8.537 9.36 8 12 8s4.98.537 6.624 1.359C20.327 10.211 21 11.202 21 12s-.673 1.789-2.376 2.641c-1.299.65-3.038 1.116-5.012 1.286l1.353-1.459-1.467-1.359-3.564 3.845 3.844 3.564 1.36-1.467-1.231-1.141c2.137-.196 4.081-.714 5.612-1.479 1.916-.958 3.482-2.466 3.482-4.43s-1.566-3.472-3.482-4.43z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        262754: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M4.496 9.25c0-4.14 3.358-7.5 7.5-7.5s7.5 3.36 7.5 7.5-3.358 7.5-7.5 7.5-7.5-3.36-7.5-7.5zm7.5 9.5c-1.63 0-3.164-.41-4.505-1.13v5.82l4.498-1.87 4.502 1.87v-5.82c-1.338.72-2.869 1.13-4.495 1.13z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        818088: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        971657: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        69893: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M17.879 15c.079.323.121.658.121 1 0 2.757-2.691 5-6 5s-6-2.243-6-5h2c0 1.654 1.794 3 4 3s4-1.346 4-3c0-.352-.096-.686-.246-1h2.125zM12 11c-2.206 0-4-1.346-4-3s1.794-3 4-3 4 1.346 4 3h2c0-2.757-2.691-5-6-5S6 5.243 6 8c0 1.126.455 2.163 1.211 3H3v2h18v-2h-9z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        47286: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M5 5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2H5zm2.5 5.75c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM11 13h7v-2h-7v2zm0 4h4v-2h-4v2zm8.5-10C20.88 7 22 8.12 22 9.5v9c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 21 2 19.88 2 18.5v-9C2 8.12 3.12 7 4.5 7h15zM4 18.5c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5v-9c0-.28-.22-.5-.5-.5h-15c-.28 0-.5.22-.5.5v9z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TimelineCardHandler.b2948c5a.js.map

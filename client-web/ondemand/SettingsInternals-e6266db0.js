"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-e6266db0"],
    {
        282559: (e, t, r) => {
            r.d(t, { v: () => c });
            r(571372);
            var s = r(96768),
                a = r(202784),
                o = (r(585488), r(351743)),
                n = r.n(o);
            const i = s.Z,
                c = ({ originProduct: e, returnUrl: t }) => {
                    const [r, s] = n()(i);
                    return [
                        a.useCallback(
                            () =>
                                new Promise((s, a) => {
                                    r({
                                        variables: { return_url: t, origin_product: e },
                                        onCompleted: ({ customerportalsession_create: e }, t) => {
                                            const r = e?.customer_portal_session_url ?? void 0;
                                            r ? s(r) : a(new Error("Missing portal URL"));
                                        },
                                        onError: a,
                                    });
                                }),
                            [r, t, e],
                        ),
                        s,
                    ];
                };
        },
        177210: (e, t, r) => {
            r.d(t, { Z: () => l });
            var s = r(202784),
                a = r(111677),
                o = r.n(a),
                n = r(782826),
                i = r(282559),
                c = r(782642);
            const d = o().ef4602ec;
            function l(e) {
                const t = (0, c.p)(),
                    [r, a] = (0, i.v)(e),
                    o = s.useCallback(() => {
                        r()
                            .then((e) => {
                                n.ZP.navigateTo(e);
                            })
                            .catch(() => {
                                t({ text: d });
                            });
                    }, [r, t]);
                return a ? void 0 : o;
            }
        },
        684511: (e, t, r) => {
            r.d(t, { Z: () => s });
            r(202784);
            const s = (0, r(523561).Z)({
                loader: () =>
                    Promise.all([
                        r.e("modules.common-e907d115"),
                        r.e("modules.common-e019dbda"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        r.e("loader.PushNotificationsPrompt"),
                    ]).then(r.bind(r, 529629)),
            });
        },
        545334: (e, t, r) => {
            r.d(t, { d: () => a });
            var s = r(111677);
            const a = r.n(s)().gf5e9ea6;
        },
        916585: (e, t, r) => {
            r.d(t, { k: () => n });
            var s = r(111677),
                a = r.n(s),
                o = r(437358);
            const n = (e, t) => {
                const { id_str: r, screen_name: s } = e,
                    n = (0, a().d78131b9)({ screenName: s });
                return { Icon: o.default, text: n, link: { pathname: "/i/lists/add_member", state: { userId: r } }, onClick: t };
            };
        },
        847607: (e, t, r) => {
            r.d(t, { Aq: () => u, FK: () => f, GS: () => i, N1: () => S, PY: () => E, X6: () => I, cm: () => c });
            r(202784);
            var s = r(111677),
                a = r.n(s),
                o = r(391366),
                n = r(40904);
            const i = a().hb568af4,
                c = a().bb1cbeb6,
                d = (a().h2f62206, a().e67b2d65),
                l = a().f05597b3,
                u = (e) => d({ screenName: e }),
                E = (e) => l({ screenName: e }),
                S = (e, t, r) => {
                    const { muting: s, screen_name: a } = e;
                    return { text: s ? E(a) : u(a), onClick: s ? r : t, Icon: s ? o.default : n.default };
                },
                h = a().h59f52ee,
                _ = a().eea0cbee,
                p = a().i29533b3,
                m = a().h129c3c3,
                f = (e) => (e ? ((e) => p({ screenName: e }))(e) : h),
                I = (e) => (e ? ((e) => m({ screenName: e }))(e) : _);
        },
        417714: (e, t, r) => {
            r.d(t, { l: () => l });
            r(202784);
            var s = r(111677),
                a = r.n(s),
                o = r(224823);
            const n = a().b3036480,
                i = a().b3036480,
                c = a().e68b09b4,
                d = a().h27b7407,
                l = ({ removeFollowerAction: e, user: t }) => {
                    const r = u(t);
                    return { Icon: o.default, text: n, onClick: () => e(r) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: i, label: c, text: d({ screenName: e.screen_name }) });
        },
        666670: (e, t, r) => {
            r.d(t, { F: () => n });
            var s = r(516951),
                a = r(615656),
                o = r(51525);
            const n = { [a.ZP.AddressBookLookupNotFound]: { customAction: o.vv }, [a.ZP.GenericUserNotFound]: { customAction: s.Z }, [a.ZP.OtherUserSuspended]: { customAction: s.Z }, showToast: !0 };
        },
        757953: (e, t, r) => {
            r.d(t, { H: () => h });
            var s = r(111677),
                a = r.n(s),
                o = r(516951),
                n = r(615656),
                i = r(51525);
            const c = a().j4292c24,
                d = a().a0ba5842,
                l = a().i859a9d4,
                u = a().a5202b82,
                E = a().f8cbf714,
                S = a().f2e66452,
                h = { defaultToast: { text: u }, [n.ZP.CurrentUserSuspended]: { toast: { text: S, action: { label: l, link: "https://support.twitter.com/articles/15790" } } }, [n.ZP.DuplicateFollowRequest]: { customAction: o.Z }, [n.ZP.FollowBlockedUserError]: { toast: { text: c } }, [n.ZP.FollowError]: { customAction: i.w1 }, [n.ZP.FollowRateLimitExceeded]: { toast: { action: { label: l, link: "https://support.twitter.com/articles/66885" }, text: d } }, [n.ZP.TargetUserNotFound]: { toast: { text: E } } };
        },
        775412: (e, t, r) => {
            r.d(t, { W: () => i });
            var s = r(111677),
                a = r.n(s),
                o = r(615656);
            const n = a().ee87e71c,
                i = { [o.ZP.SelfMuteError]: { toast: { text: n } }, showToast: !0 };
        },
        48886: (e, t, r) => {
            r.d(t, { q: () => a });
            var s = r(111677);
            const a = { defaultToast: { text: r.n(s)().a30b63da }, showToast: !0 };
        },
        670094: (e, t, r) => {
            r.d(t, { d: () => d });
            var s = r(111677),
                a = r.n(s),
                o = r(88656),
                n = r(601576),
                i = r(163889);
            const c = a().a5d4fda0,
                d = (e = c, t = !0) => ({
                    customErrorHandler: (r) => {
                        const { context: s } = r;
                        return (!r) instanceof o.Z && (r.message = `Strato error occurred in ${s.id}: ${s.action}`), (0, i.ZP)(r, { extra: { context: s, isStrato: !0 } }), t ? (0, n.mf)({ text: e }) : [];
                    },
                });
        },
        323683: (e, t, r) => {
            r.d(t, { X: () => a });
            var s = r(111677);
            const a = { defaultToast: { text: r.n(s)().e1a0aaca }, showToast: !0 };
        },
        837731: (e, t, r) => {
            r.d(t, { G: () => i });
            var s = r(111677),
                a = r.n(s),
                o = r(615656);
            const n = a().ed428a76,
                i = { [o.ZP.NotMutingTargetUser]: { toast: { text: n } }, showToast: !0 };
        },
        860174: (e, t, r) => {
            r.d(t, { Z: () => o });
            var s = r(615656),
                a = r(51525);
            const o = { [s.ZP.FollowError]: { customAction: a.w1 } };
        },
        355335: (e, t, r) => {
            r.d(t, { Z: () => c, k: () => i });
            r(543673), r(240753), r(128399), r(136728);
            var s = r(202784),
                a = r(565058),
                o = r(400752),
                n = r(107267);
            const i = (0, a.cn)(!1),
                c = () => {
                    const e = (0, n.useHistory)(),
                        t = (0, n.useLocation)(),
                        [r, a] = (0, o.KO)(i);
                    s.useEffect(() => {
                        const e = new URLSearchParams(t.search).get("jfDev"),
                            r = sessionStorage.getItem("jfDev");
                        let s = !1;
                        e ? (("1" !== e && "true" !== e) || (s = !0), ("0" !== e && "false" !== e) || (s = !1)) : (s = "true" === r), s ? (a(!0), sessionStorage.setItem("jfDev", "true")) : (a(!1), sessionStorage.removeItem("jfDev"));
                    }, [t.search, a]);
                    const c = s.useCallback(
                        (r) => {
                            const s = new URLSearchParams(t.search);
                            r ? (s.set("jfDev", "1"), sessionStorage.setItem("jfDev", "true")) : (s.delete("jfDev"), sessionStorage.removeItem("jfDev"));
                            const o = s.toString();
                            e.push({ pathname: t.pathname, search: o }), a(r);
                        },
                        [e, t.pathname, t.search, a],
                    );
                    return {
                        isDev: r,
                        enableDev: s.useCallback(() => {
                            c(!0);
                        }, [c]),
                        disableDev: s.useCallback(() => {
                            c(!1);
                        }, [c]),
                    };
                };
        },
        967262: (e, t, r) => {
            r.d(t, { m: () => s });
            const s = (e, t) => {
                    const r = e?.media_info;
                    if ("ApiImage" === r?.__typename) {
                        return { altText: r.alt_text, display_url: r.original_img_url, expanded_url: t?.expandedURLFormatter?.(e.media_id) ?? r.original_img_url, ext_alt_text: r.alt_text, ...(r.color_info?.palette && { ext_media_color: { palette: r.color_info.palette } }), id: o(e.media_id), id_str: e.media_id || "", media_key: e.media_key, media_url: r.original_img_url, media_url_https: r.original_img_url, original_info: { height: r.original_img_height, width: r.original_img_width }, sizes: { original: { h: r.original_img_height, resize: "fit", w: r.original_img_width } }, type: "photo" };
                    }
                    if ("ApiVideo" === r?.__typename) {
                        const { __typename: t, ...s } = r;
                        return a(s, e.media_id, r?.__typename);
                    }
                    if ("ApiGif" === r?.__typename) {
                        const { __typename: t, ...s } = r;
                        return a(s, e.media_id, r?.__typename);
                    }
                },
                a = (e, t, r) => {
                    const s = "ApiGif" === r ? "animated_gif" : "video",
                        a = e.preview_image;
                    return { type: s, id: o(t), id_str: t || "", ext_alt_text: a?.alt_text, ext_media_color: { palette: a?.color_info?.palette || [] }, media_url: a?.original_img_url || "", media_url_https: a?.original_img_url || "", url: a?.original_img_url || "", display_url: a?.original_img_url || "", expanded_url: a?.original_img_url || "", original_info: { height: a?.original_img_height || 0, width: a?.original_img_width || 0 }, sizes: { original: { h: a?.original_img_height || 0, resize: "fit", w: a?.original_img_width || 0 } }, video_info: { aspect_ratio: [e.aspect_ratio.numerator, e.aspect_ratio.denominator], ...(e.duration_millis && { duration_millis: e.duration_millis }), variants: e.variants.map((e) => ({ bitrate: e.bit_rate, content_type: e.content_type, url: e.url })) } };
                },
                o = (e) => {
                    const t = parseInt(e, 10);
                    return Number.isNaN(t) ? 0 : t;
                };
        },
        554997: (e, t, r) => {
            r.d(t, { r: () => o });
            const s = 19,
                a = 12,
                o = (e) => e.placeType && (e.placeType.code === s || e.placeType.code === a);
        },
        883432: (e, t, r) => {
            r.d(t, { Z: () => s });
            const s = { AdvancedSearchPage: "advanced_search_page", CashtagClick: "cashtag_click", HashtagClick: "hashtag_click", PromotedTrendClick: "promoted_trend_click", RecentSearchClick: "recent_search_click", SavedSearchClick: "saved_search_click", RelatedQueryClick: "related_query_click", SpellingCorrectionClick: "spelling_correction_click", SpellingCorrectionRevertClick: "spelling_suggestion_revert_click", SpellingExpansionClick: "spelling_expansion_click", SpellingExpansionRevertClick: "spelling_expansion_revert_click", SpellingSuggestionClick: "spelling_suggestion_click", TrendClick: "trend_click", TrendView: "trend_view", TypeaheadClick: "typeahead_click", Typed: "typed_query", TVSearch: "TvSearch", TweetDetailQuoteTweet: "tdqt", TweetDetailSimilarPost: "tweet_detail_similar_posts" };
        },
        988823: (e, t, r) => {
            r.d(t, { M: () => n });
            var s = r(807896),
                a = r(202784),
                o = r(190286);
            const n = (e) => (t) => {
                const [r, n] = a.useState(null),
                    i = (e) =>
                        new Promise((t, r) => {
                            n({ resolve: t, reject: r, confirmationSheetProps: e });
                        });
                if (r) {
                    const { confirmationSheetProps: e, reject: t, resolve: i } = r;
                    return a.createElement(
                        o.Z,
                        (0, s.Z)({}, e, {
                            onCancel: () => {
                                t(), n(null);
                            },
                            onConfirm: () => {
                                i(), n(null);
                            },
                        }),
                    );
                }
                return a.createElement(e, (0, s.Z)({}, t, { confirm: i }));
            };
        },
        296196: (e, t, r) => {
            r.r(t),
                r.d(t, {
                    GLOBAL_STATE_KEY: () => _.Yf,
                    acceptConversation: () => o.tF,
                    addAvatarMedia: () => o._D,
                    addParticipants: () => o.ck,
                    addRecentSearches: () => R,
                    addWelcomeMessageToConversation: () => o.Qe,
                    clearRecentSearch: () => U,
                    clearRecentSearches: () => N,
                    clearSearchCache: () => A,
                    default: () => b,
                    deleteConversations: () => o.S9,
                    disableMentionNotifications: () => o.BW,
                    disableNotifications: () => o.dq,
                    enableMentionNotifications: () => o.Ap,
                    enableNotifications: () => o.PZ,
                    fetchConversation: () => o.Um,
                    fetchConversationFromParticipants: () => o.sS,
                    fetchConversationFuture: () => o.OW,
                    fetchConversationHistoricalSnapshot: () => o.wm,
                    fetchConversationHistory: () => o.Be,
                    fetchConversationIfNeeded: () => o.sA,
                    fetchInbox: () => i.oH,
                    fetchInboxIfNeeded: () => i.C2,
                    fetchPermissions: () => o.qg,
                    fetchTrustedInboxHistory: () => i.vC,
                    fetchUntrustedInboxHistory: () => i.kK,
                    fetchUntrustedLowQualityInboxHistory: () => i.j7,
                    fetchUpdates: () => L.f9,
                    fetchUpdatesIfNeeded: () => L.hd,
                    leaveConversation: () => o.qH,
                    markAllAsRead: () => o.SF,
                    markConversationRead: () => o.v3,
                    markSpamStatus: () => n.kv,
                    muteDMUser: () => o.sj,
                    removeAvatarMedia: () => o.Xw,
                    removeConversation: () => o.Ae,
                    removeEntry: () => n.MY,
                    searchConversations: () => v,
                    selectConversation: () => o.xu,
                    selectConversationAvatarMediaId: () => o.aG,
                    selectConversationAvatarMediaIsUploading: () => o.W,
                    selectConversationAvatarMediaUploadProgress: () => o.UA,
                    selectConversationFetchStatus: () => o.Pr,
                    selectConversationIdsByInbox: () => i.g4,
                    selectConversationIsLoaded: () => o.gQ,
                    selectConversationIsRead: () => o.jT,
                    selectConversations: () => o.FS,
                    selectEntries: () => n.gm,
                    selectEntriesForConversation: () => n.iN,
                    selectEntry: () => n.WK,
                    selectFetchStatus: () => i.UD,
                    selectHasConversations: () => o.ax,
                    selectInboxCursor: () => i.Pt,
                    selectInboxIsLoaded: () => i.MB,
                    selectInboxTypeByConversation: () => o.Zg,
                    selectIsLoadingTop: () => i.xS,
                    selectLabelledConversationIds: () => i.Z3,
                    selectLastSeenEventIds: () => i.B7,
                    selectPinnedConversationIds: () => i.Kf,
                    selectRecentSearches: () => w,
                    selectRecipientCanNotDm: () => o.OF,
                    selectSearchConversations: () => g,
                    selectSearchFetchStatus: () => P,
                    selectUnreadCount: () => i.Sb,
                    selectUntrustedConversationCount: () => i.Oq,
                    selectUntrustedCounts: () => i.Re,
                    selectUntrustedCursor: () => i.aB,
                    selectUntrustedLowQualityConversationCount: () => i.ZI,
                    selectUntrustedLowQualityCursor: () => i.Gk,
                    selectUntrustedUnreadCount: () => i.k5,
                    selectUpdates: () => L.o8,
                    setConversationAvatar: () => o.X5,
                    toggleNotifications: () => o.$S,
                    unmuteDMUser: () => o.GP,
                    updateConversationAvatar: () => o.nI,
                    updateConversationName: () => o.FI,
                    updateConversationReadState: () => o.d0,
                    updateLastSeenEventId: () => i.kL,
                    updateTrustedLastSeenEventId: () => i.$7,
                    updateTyping: () => o.lT,
                    updateUntrustedLastSeenEventId: () => i.A4,
                });
            var s = r(118717),
                a = r(499627),
                o = r(613195),
                n = r(627279),
                i = r(720277),
                c = (r(136728), r(468811)),
                d = r.n(c),
                l = r(948322),
                u = r(917799),
                E = r(312771),
                S = r(390387),
                h = r(849585),
                _ = r(147143);
            const p = "rweb.recentDMSearches",
                m = Object.freeze({ REQUEST: "rweb/directMessages/SEARCH_REQUEST", SUCCESS: "rweb/directMessages/SEARCH_SUCCESS", FAILURE: "rweb/directMessages/SEARCH_FAILURE" }),
                f = "rweb/directMessages/ADD_RECENT_SEARCHES",
                I = (e) => ({ payload: e, type: f }),
                D = "rweb/directMessages/CLEAR_SEARCH_CACHE",
                A = () => ({ type: D }),
                C = "rweb/directMessages/CLEAR_RECENT_SEARCH",
                T = "rweb/directMessages/CLEAR_RECENT_SEARCHES",
                y = { searchResults: {}, recentSearches: [] };
            function O(e = y, t) {
                if (!t) return e;
                switch (t.type) {
                    case f:
                    case C:
                        return { ...e, recentSearches: t.payload || [] };
                    case T:
                        return { ...e, recentSearches: [] };
                    case m.REQUEST: {
                        const { fetchNextPage: r, preserveResults: s, query: a } = t.meta || {},
                            o = e.searchResults ? e.searchResults[a] : {},
                            n = { ...e.searchResults, [a]: { ...o, fetchStatus: s || r ? o?.fetchStatus : E.ZP.LOADING } };
                        return { ...e, searchResults: n };
                    }
                    case m.FAILURE: {
                        const { fetchNextPage: r, preserveResults: s, query: a } = t.meta || {},
                            o = e.searchResults ? e.searchResults[a] : {},
                            n = { ...e.searchResults, [a]: { ...o, fetchStatus: s || r ? o?.fetchStatus : E.ZP.FAILED, error: t.payload } };
                        return { ...e, searchResults: n };
                    }
                    case m.SUCCESS: {
                        const { query: r } = t.meta || {},
                            s = t.payload && t.payload.result ? t.payload.result : null,
                            { conversations: a, error: o } = s || {},
                            n = s?.conversationIds ? s.conversationIds : a ? Object.keys(a) : [],
                            i = e.searchResults ? e.searchResults[r] : {},
                            c = i?.conversationIds || [],
                            d = c.length && n ? c.concat(n.filter((e) => !c.includes(e))) : n,
                            l = { ...e.searchResults, [r]: { ...i, lastCursor: s?.cursor, conversationIds: d, error: o, fetchStatus: E.ZP.LOADED } };
                        return { ...e, searchResults: l };
                    }
                    case D:
                    case h.t:
                        return { ...y, recentSearches: e.recentSearches };
                    default:
                        return e;
                }
            }
            const w = (e) => e[_.Yf].search?.recentSearches,
                P = (e, t) => {
                    const r = e[_.Yf].search?.searchResults;
                    if (r) {
                        const e = r[t];
                        return e?.fetchStatus || E.ZP.NONE;
                    }
                    return E.ZP.NONE;
                },
                g = (e, t) => {
                    const r = e[_.Yf].search?.searchResults;
                    return (r && r[t]?.conversationIds) || [];
                },
                v =
                    (e) =>
                    (t, r, { api: s }) => {
                        const a = r(),
                            { fetchNextPage: o, preserveResults: n, query: c } = e || {},
                            E = { query: c, search_type: "conversations", request_id: d().v4() },
                            S = ((e, t) => {
                                const r = e[_.Yf].search?.searchResults;
                                return (r && r[t]?.lastCursor) || null;
                            })(a, c),
                            h = ((e) => e[_.Yf].search?.searchResults)(a),
                            p = h ? h[c] : void 0,
                            f = !!S;
                        S && c && o && (E.cursor = S);
                        const I = u._O(t, { params: E, request: s.withEndpoint(l.Z).search }),
                            D = (e) => {
                                if (e && e.result) {
                                    const { conversations: t } = e.result,
                                        { users: r } = e.entities;
                                    return t && Object.values(t).forEach((e) => (e.isSearchResult = !0)), t ? (0, i.s0)({ conversations: t, users: r }) : null;
                                }
                            };
                        return !p || p?.error || n || (o && f) ? I({ actionTypes: m, context: "SEARCH", meta: { query: E.query, cursor: E.cursor, preserveResults: n, fetchNextPage: o } }, D) : (t({ type: "rweb/directMessages/SEARCH_SUCCESS", payload: { result: p }, meta: { query: c, cursor: S } }), Promise.resolve());
                    },
                R =
                    (e) =>
                    (t, r, { featureSwitches: s, userPersistence: a }) => {
                        const o = s.getNumberValue("dm_inbox_search_max_recent_searches_stored");
                        return a.get(p).then((r) => {
                            const s = r?.recentSearches || [];
                            return !s.includes(e) && s.push(e), s.length > o && s.shift(), t(I(s)), a.set(p, { recentSearches: s });
                        });
                    },
                U =
                    (e) =>
                    (t, r, { userPersistence: s }) =>
                        s.get(p).then((r) => {
                            const a = r?.recentSearches || [];
                            return a.splice(a.indexOf(e), 1), t({ payload: a, type: C }), s.set(p, { recentSearches: a });
                        }),
                N =
                    () =>
                    (e, t, { userPersistence: r }) => (e({ type: T }), r.set(p, { recentSearches: [] }));
            a.Z.register(
                { [_.Yf]: O },
                () =>
                    (e, t, { userPersistence: r }) =>
                        S.Qb(t())
                            ? Promise.resolve(
                                  r.get(p).then((t) => {
                                      const r = t?.recentSearches;
                                      r && e(I(r));
                                  }),
                              ).then(() => {})
                            : Promise.resolve(),
            );
            var L = r(923965);
            const F = (0, s.UY)({ conversations: o.ZP, entries: n.ZP, inbox: i.ZP, search: O, updates: L.ZP });
            a.Z.register({ [_.Yf]: F });
            const b = F;
        },
        806528: (e, t, r) => {
            r.d(t, { Bz: () => d, ZW: () => h, ey: () => u, fw: () => i, iG: () => S, wM: () => c });
            var s = r(499627),
                a = r(341276);
            const o = "geoLocation",
                n = Object.freeze({ permissionStatus: void 0, position: void 0 });
            const i = (e) => e[o],
                c = (e) => e[o].permissionStatus,
                d = (e) => e[o].position,
                l = "rweb/geoLocation/SET_PERMISSION_STATUS",
                u = (e) => ({ payload: e, type: l }),
                E = "rweb/geoLocation/SET_POSITION",
                S = () => (e, t) =>
                    _()
                        .then((t) => e({ payload: t, type: E }))
                        .catch((t) => (e(u(a.S.denied)), Promise.reject(t))),
                h = () => (e, t) => (d(t()) ? Promise.resolve() : e(S())),
                _ = () =>
                    new Promise((e, t) =>
                        navigator.geolocation.getCurrentPosition((t) => {
                            const r = { timestamp: t.timestamp, coords: { latitude: t.coords.latitude, longitude: t.coords.longitude, altitude: t.coords.altitude, accuracy: t.coords.accuracy, altitudeAccuracy: t.coords.altitudeAccuracy, heading: t.coords.heading, speed: t.coords.speed } };
                            return e(r);
                        }, t),
                    );
            s.Z.register({
                [o]: function (e = n, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case l:
                            return { ...e, permissionStatus: t.payload };
                        case E:
                            return { ...e, position: t.payload };
                        default:
                            return e;
                    }
                },
            });
        },
        341276: (e, t, r) => {
            r.d(t, { M: () => a, S: () => s });
            const s = Object.freeze({ granted: "granted", denied: "denied", prompt: "prompt" }),
                a = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 });
        },
        642721: (e, t, r) => {
            r.d(t, { $o: () => P, AE: () => F, Lk: () => C, R_: () => b, UD: () => D, UK: () => T, WW: () => I, ck: () => Z, fd: () => f, kM: () => L, mz: () => A, xZ: () => N });
            var s = r(745978),
                a = r(499627),
                o = r(917799),
                n = r(312771);
            const i = "mutedKeywords",
                c = "rweb.mutedKeywords",
                d = 6048e5,
                l = `rweb/${i}`,
                u = o.dg(l, "FETCH_DISCOURAGED_KEYWORDS"),
                E = o.dg(l, "FETCH_MUTED_KEYWORDS"),
                S = o.dg(l, "ADD_MUTED_KEYWORD"),
                h = o.dg(l, "DELETE_MUTED_KEYWORD"),
                _ = o.dg(l, "UPDATE_MUTED_KEYWORD"),
                p = { defaultOptions: { id: "", keyword: "", mute_notifications_option: "following", mute_home_timeline: !0, time_duration: "forever" }, defaultOptionsLoaded: !1, discouragedKeywords: [], fetchStatus: n.ZP.NONE, mutedKeywords: [] };
            function m(e = p, t) {
                if (!t) return e;
                switch (t.type) {
                    case O:
                    case u.SUCCESS:
                        return { ...e, discouragedKeywords: t.payload.discouraged_keywords };
                    case E.REQUEST:
                        return { ...e, fetchStatus: n.ZP.LOADING };
                    case E.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: n.ZP.FAILED };
                    case E.SUCCESS:
                        return { ...e, mutedKeywords: t.payload.muted_keywords, error: null, fetchStatus: n.ZP.LOADED };
                    case S.SUCCESS:
                    case h.SUCCESS:
                    case _.SUCCESS:
                        return { ...e, mutedKeywords: t.payload.muted_keywords };
                    case v:
                        return { ...e, defaultOptions: t.payload.default_options };
                    case R:
                        return { ...e, defaultOptionsLoaded: !0 };
                    default:
                        return e;
                }
            }
            const f = (e) => e[i].discouragedKeywords,
                I = (e) => e[i].mutedKeywords,
                D = (e) => e[i].fetchStatus,
                A = (e, t) => e[i].mutedKeywords.find((e) => e.id === t),
                C = (e, t) => e[i].defaultOptions,
                T =
                    () =>
                    (e, t, { userPersistence: r }) =>
                        f(t()).length
                            ? Promise.resolve()
                            : r.get(c, d).then((s) => {
                                  const { discouragedKeywords: a } = s || {};
                                  return a && a.length ? (e(w(a)), Promise.resolve()) : e(y()).then(() => r.set(c, { discouragedKeywords: f(t()) }));
                              }),
                y =
                    (e = {}) =>
                    (t, r, { api: a }) =>
                        o._O(t, { params: e, request: a.withEndpoint(s.Z).fetchDiscouragedKeywords })({ actionTypes: u, context: "FETCH_DISCOURAGED_KEYWORDS" }),
                O = `${l}/INIT_DISCOURAGED_KEYWORDS`,
                w = (e) => ({ type: O, payload: { discouraged_keywords: e } }),
                P = () => (e, t) => (D(t()) === n.ZP.LOADED ? Promise.resolve() : e(g())),
                g =
                    (e) =>
                    (t, r, { api: a }) =>
                        o._O(t, { params: e, request: a.withEndpoint(s.Z).fetchMutedKeywords })({ actionTypes: E, context: "FETCH_MUTED_KEYWORDS" }),
                v = `${l}/SET_DEFAULT_OPTIONS`,
                R = `${l}/DEFAULT_OPTIONS_LOADED`,
                U = (e) => ({ type: v, payload: { default_options: e } }),
                N =
                    () =>
                    (e, t, { userPersistence: r }) =>
                        t()[i].defaultOptionsLoaded
                            ? Promise.resolve()
                            : r.get(c, d).then((t) => {
                                  if (t && t.defaultOptions) {
                                      const { defaultOptions: r } = t;
                                      e(U(r));
                                  }
                                  e({ type: R });
                              }),
                L =
                    (e) =>
                    (t, r, { userPersistence: s }) => (t(U(e)), s.set(c, { defaultOptions: e })),
                F =
                    (e) =>
                    (t, r, { api: a }) =>
                        o._O(t, { params: e, request: a.withEndpoint(s.Z).addMutedKeyword })({ actionTypes: S, context: "ACTION_ADD_MUTED_KEYWORD", meta: { params: e } }),
                b =
                    (e) =>
                    (t, r, { api: a }) => {
                        const n = { ids: e.join(",") };
                        return o._O(t, { params: n, request: a.withEndpoint(s.Z).deleteMutedKeyword })({ actionTypes: h, context: "ACTION_DELETE_MUTED_KEYWORD", meta: { ids: e } });
                    },
                Z =
                    (e) =>
                    (t, r, { api: a }) =>
                        o._O(t, { params: e, request: a.withEndpoint(s.Z).updateMutedKeyword })({ actionTypes: _, context: "ACTION_UPDATE_MUTED_KEYWORD", meta: { params: e } });
            a.Z.register({ [i]: m });
        },
        450476: (e, t, r) => {
            r.d(t, { Ob: () => _, SW: () => f, UD: () => h, Y0: () => m, ky: () => S });
            var s = r(226395),
                a = r(499627),
                o = r(917799),
                n = r(312771);
            const i = "notificationFilters",
                c = "rweb.notificationFilters",
                d = Object.freeze({ REQUEST: "rweb/notificationFilters/FETCH_NOTIFICATION_FILTERS_REQUEST", SUCCESS: "rweb/notificationFilters/FETCH_NOTIFICATION_FILTERS_SUCCESS", FAILURE: "rweb/notificationFilters/FETCH_NOTIFICATION_FILTERS_FAILURE" }),
                l = Object.freeze({ REQUEST: "rweb/notificationFilters/ENABLE_NOTIFICATION_FILTER_REQUEST", SUCCESS: "rweb/notificationFilters/ENABLE_NOTIFICATION_FILTER_SUCCESS", FAILURE: "rweb/notificationFilters/ENABLE_NOTIFICATION_FILTER_FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/notificationFilters/DISABLE_NOTIFICATION_FILTER_REQUEST", SUCCESS: "rweb/notificationFilters/DISABLE_NOTIFICATION_FILTER_SUCCESS", FAILURE: "rweb/notificationFilters/DISABLE_NOTIFICATION_FILTER_FAILURE" }),
                E = { fetchStatus: n.ZP.NONE, notificationFilters: {} };
            a.Z.register({
                [i]: function (e = E, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case d.REQUEST:
                            return { ...e, fetchStatus: n.ZP.LOADING };
                        case d.FAILURE:
                            return { ...e, fetchStatus: n.ZP.FAILED };
                        case d.SUCCESS:
                            return t.payload ? { ...e, notificationFilters: t.payload, fetchStatus: n.ZP.LOADED } : { ...e, fetchStatus: n.ZP.LOADED };
                        case l.REQUEST:
                            return { ...e, notificationFilters: { ...e.notificationFilters, [t.meta.filterName]: !0 } };
                        case u.REQUEST:
                            return { ...e, notificationFilters: { ...e.notificationFilters, [t.meta.filterName]: !1 } };
                        default:
                            return e;
                    }
                },
            });
            const S = (e) => e[i].notificationFilters,
                h = (e) => e[i].fetchStatus,
                _ =
                    () =>
                    (e, t, { api: r, userPersistence: s }) =>
                        h(t()) === n.ZP.LOADED ? Promise.resolve() : s.get(c, 24e4).then((t) => e(t ? { payload: t, type: d.SUCCESS } : p())),
                p =
                    () =>
                    (e, t, { api: r, userPersistence: a }) =>
                        o
                            ._O(e, { request: r.withEndpoint(s.Z).fetchNotificationFilters })({ actionTypes: d, context: "FETCH_NOTIFICATION_FILTERS" })
                            .then((e) => (a.set(c, S(t())), e)),
                m =
                    (e) =>
                    (t, r, { api: a, userPersistence: n }) =>
                        o
                            .AB(t, { params: { [e]: !0 }, request: a.withEndpoint(s.Z).updateNotificationFilters })({ actionTypes: l, context: "ACTION_ENABLE_NOTIFICATION_FILTER", meta: { filterName: e } })
                            .then((e) => {
                                n.set(c, S(r()));
                            }),
                f =
                    (e) =>
                    (t, r, { api: a, userPersistence: n }) =>
                        o
                            .AB(t, { params: { [e]: !1 }, request: a.withEndpoint(s.Z).updateNotificationFilters })({ actionTypes: u, context: "ACTION_DISABLE_NOTIFICATION_FILTER", meta: { filterName: e } })
                            .then((e) => {
                                n.set(c, S(r()));
                            });
        },
        694180: (e, t, r) => {
            r.d(t, { cM: () => p, dS: () => _, iY: () => m });
            var s = r(370751),
                a = r(399896),
                o = r(663550),
                n = r(499627),
                i = r(917799);
            const c = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                l = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, s.Z)([o.dx.IMPRESSION, o.dx.DWELL]),
                E = (0, s.Z)([o.AJ.TREND_VIEW, o.AJ.SPOTLIGHT_IMPRESSION]),
                S = (e) => ({ payload: { eventKey: e }, type: l });
            const h = (e, t) => !!e.promotedContent[t],
                _ =
                    (e) =>
                    (t, r, { api: s }) => {
                        const { event: o, impression_id: n, promoted_trend_id: c } = e,
                            l = `trend-${c}-${o}`;
                        if (E.has(o) && h(r(), l)) return Promise.resolve();
                        const u = { promoted_trend_id: c, event: o, impression_id: n };
                        return (0, i._O)(t, { params: u, request: s.withEndpoint(a.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && E.has(o)) return [S(l)];
                        });
                    },
                p =
                    ({ disclosureType: e, itemId: t, itemType: r, params: s }) =>
                    (o, n, { api: c }) => {
                        const { event: l, impression_id: E } = s,
                            _ = `${r}-${t ?? "undefined"}-${E ?? "undefined"}-${l ?? "undefined"}`;
                        if (u.has(l) && h(n(), _)) return Promise.resolve();
                        const p = e && "earned" === e.toLowerCase() ? "1" : null,
                            m = { ...s, earned: p, epoch_ms: Date.now() };
                        return (0, i._O)(o, { params: m, request: c.withEndpoint(a.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: m }, (e, t) => {
                            if (!t && u.has(l)) return [S(_)];
                        });
                    },
                m =
                    (e) =>
                    (t, r, { api: s }) =>
                        (0, i._O)(t, { params: e, request: s.withEndpoint(a.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            n.Z.register({
                promotedContent: function (e = c, t) {
                    if (!t) return e;
                    if (t.type === l) {
                        if (!t.payload) return e;
                        const { eventKey: r } = t.payload;
                        return { ...e, [r]: !0 };
                    }
                    return e;
                },
            });
        },
        204744: (e, t, r) => {
            r.d(t, { DI: () => D, H$: () => E, OB: () => A, Ww: () => l, YB: () => u, hj: () => p, qF: () => f });
            r(901951);
            var s = r(499627),
                a = r(390387);
            const o = "recentSearches",
                n = "rweb.recentSearches",
                i =
                    (e) =>
                    (t, r, { userPersistence: s }) =>
                        s.set(n, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                c = (e, t) => {
                    let r = [];
                    if (e.user) {
                        const s = e.user;
                        r = t.filter((e) => e.event || e.keyword || e.list || e.topic || (e.user && e.user.id !== s.id));
                    } else if (e.event) {
                        const s = e.event;
                        r = t.filter((e) => e.keyword || e.list || e.topic || e.user || (e.event && e.event.id !== s.id));
                    } else if (e && e.keyword) {
                        const s = e.keyword;
                        r = t.filter((e) => e.event || e.list || e.topic || e.user || (e.keyword && e.keyword.query !== s.query));
                    } else if (e.list) {
                        const s = e.list;
                        r = t.filter((e) => e.event || e.keyword || e.topic || e.user || (e.list && e.list.id !== s.id));
                    } else if (e.topic) {
                        const s = e.topic;
                        r = t.filter((e) => e.event || e.keyword || e.list || e.user || (e.topic && e.topic.id !== s.id));
                    }
                    return r;
                },
                d = { fetched: !1, recentSearches: [] };
            const l = (e) => e[o].recentSearches,
                u = (e) => l(e)[0] || null,
                E = (e) => e[o].fetched,
                S = "rweb/recentSearches/INIT_FROM_CACHE",
                h = (e) => ({ type: S, payload: e }),
                _ = "rweb/recentSearches/REMOVE_QUERY",
                p =
                    (e) =>
                    (t, r, { userPersistence: s }) => {
                        t({ payload: e, type: _ });
                        const o = r(),
                            n = l(o);
                        return (0, a.Qb)(o) ? t(i(n)) : Promise.resolve();
                    },
                m = "rweb/recentSearches/CLEAR_ALL",
                f =
                    () =>
                    (e, t, { userPersistence: r }) => {
                        e({ type: m });
                        const s = t(),
                            o = l(s);
                        return (0, a.Qb)(s) ? e(i(o)) : Promise.resolve();
                    },
                I = "rweb/recentSearches/ADD_QUERY",
                D =
                    (e) =>
                    (t, r, { userPersistence: s }) => {
                        t({ payload: e, type: I });
                        const o = r(),
                            n = l(o);
                        return (0, a.Qb)(o) ? t(i(n)) : Promise.resolve();
                    },
                A =
                    () =>
                    (e, t, { userPersistence: r }) => {
                        const s = t();
                        return E(s)
                            ? Promise.resolve()
                            : e((e, t, { userPersistence: r }) => {
                                  const s = t();
                                  return (0, a.Qb)(s)
                                      ? r
                                            .get(n)
                                            .then((t) => {
                                                e(h(t));
                                            })
                                            .catch(() => {
                                                e(h());
                                            })
                                      : (e(h()), Promise.resolve());
                              });
                    };
            s.Z.register({
                [o]: function (e = d, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case I: {
                            const r = t.payload,
                                s = r ? c(r, e.recentSearches) : [];
                            return s.length > 49 && s.splice(49, 1), r && s.unshift(r), { ...e, recentSearches: s };
                        }
                        case _: {
                            const r = t.payload,
                                s = r ? c(r, e.recentSearches) : [];
                            return { ...e, recentSearches: s };
                        }
                        case m:
                            return { fetched: !0, recentSearches: [] };
                        case S:
                            return { ...e, ...t.payload, fetched: !0 };
                        default:
                            return e;
                    }
                },
            });
        },
        629196: (e, t, r) => {
            r.d(t, { r: () => d });
            r(136728);
            var s = r(161821),
                a = r(390387),
                o = r(836255),
                n = r(255117),
                i = r(166506),
                c = r(919022);
            const d =
                (e, t) =>
                (r, d, { api: l, featureSwitches: u }) =>
                    r(c.ZP.mute(e, t)).then(() => {
                        const t = d(),
                            c = (0, s.Z)(o.Z.selectAll(t)).reduce((r, s) => {
                                if (null != s)
                                    if (s.user === e) r[s.id_str] = !0;
                                    else if (s.retweeted_status) {
                                        const a = o.Z.select(t, s.retweeted_status);
                                        a?.user === e && (r[s.id_str] = !0);
                                    }
                                return r;
                            }, {}),
                            l = (0, a._h)(d()),
                            u = l ? [(0, n.ZP)({ useLatest: !1, userId: l }).removeTweets(c), (0, n.ZP)({ useLatest: !0, userId: l }).removeTweets(c)] : [],
                            E = (0, i.k9)();
                        if (E.selectInitialFetchStatus(t) && !E.selectCanRefresh(t)) {
                            const r = (0, i.f8)(e, t, E);
                            r && u.push(r);
                        }
                        return r(u);
                    });
        },
        123072: (e, t, r) => {
            r.d(t, { AW: () => p, UD: () => h, bP: () => _, xN: () => S });
            var s = r(816776),
                a = r(499627),
                o = r(917799),
                n = r(312771),
                i = r(390387);
            const c = "safeSearch",
                d = `rweb/${c}`,
                l = o.dg(d, "FETCH_SEARCH_SETTINGS"),
                u = o.dg(d, "UPDATE_SEARCH_SETTINGS"),
                E = { fetchStatus: n.ZP.NONE, searchSettings: {} };
            a.Z.register({
                [c]: function (e = E, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case l.REQUEST:
                            return { ...e, fetchStatus: n.ZP.LOADING };
                        case l.FAILURE:
                            return { ...e, fetchStatus: n.ZP.FAILED };
                        case l.SUCCESS:
                            return { ...e, searchSettings: t.payload || E.searchSettings, fetchStatus: n.ZP.LOADED };
                        case u.REQUEST: {
                            const { settingName: r, settingValue: s } = t.meta || {};
                            return { ...e, searchSettings: { ...e.searchSettings, [r]: s } };
                        }
                        default:
                            return e;
                    }
                },
            });
            const S = (e) => e[c].searchSettings,
                h = (e) => e[c].fetchStatus,
                _ =
                    () =>
                    (e, t, { api: r }) => {
                        const a = i.x0(t());
                        if (!a) return Promise.resolve(e({ type: l.FAILURE }));
                        return o._O(e, { params: { userId: a }, request: r.withEndpoint(s.Z).fetch })({ actionTypes: l, context: "FETCH_SEARCH_SETTINGS" });
                    },
                p =
                    (e, t) =>
                    (r, a, { api: n }) => {
                        const c = a(),
                            d = i.x0(c);
                        if (!d) return Promise.resolve(r({ type: l.FAILURE }));
                        const E = { ...S(c), userId: d };
                        E[e] = t;
                        return o.AB(r, { params: E, request: n.withEndpoint(s.Z).set })({ actionTypes: u, context: "ACTION_UPDATE_SEARCH_SETTINGS", meta: { settingName: e, settingValue: t } });
                    };
        },
        853568: (e, t, r) => {
            r.d(t, { U: () => s });
            const s = Object.freeze({ Filtering: "optInFiltering", Blocking: "optInBlocking" });
        },
        715684: (e, t, r) => {
            r.d(t, { Fm: () => w, TG: () => D, UD: () => C, _1: () => O, dj: () => T, kz: () => A });
            var s = r(24949),
                a = r(697926),
                o = r(744531),
                n = r(226395),
                i = r(499627),
                c = r(917799),
                d = r(312771);
            const l = `${r(291020).Y}/sessions`,
                u = `rweb/${l}`,
                E = c.dg(u, "FETCH_SESSIONS"),
                S = c.dg(u, "REVOKE_SESSION"),
                h = c.dg(u, "REVOKE_ALL_SESSIONS"),
                _ = { fetchStatus: d.ZP.NONE, sessions: {} };
            function p(e = _, t) {
                if (!t) return e;
                switch (t.type) {
                    case E.REQUEST:
                        return { ...e, fetchStatus: d.ZP.LOADING };
                    case E.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: d.ZP.FAILED };
                    case E.SUCCESS:
                        return { ...e, error: null, fetchStatus: d.ZP.LOADED, sessions: (0, a.Z)(f(t.payload), (e) => e.token) };
                    case S.SUCCESS:
                        return { ...e, sessions: (0, o.Z)(e.sessions, t.meta.hashed_token) };
                    default:
                        return e;
                }
            }
            i.Z.register({ [l]: p });
            function m(e) {
                return { token: e.hashed_token, name: e.device_name, summary: e.device_summary, icon_type: e.icon_type, is_current_session: e.is_current_session, location: e.location, last_seen_time_ms: e.last_seen_at };
            }
            const f = (e) => (e?.viewer?.user_results?.result?.sessions_list ? e.viewer.user_results.result.sessions_list : e.viewer?.user?.sessions_list ? e.viewer.user.sessions_list : e.sessions ? e.sessions.map(m) : []),
                I = (e) => e[l].sessions,
                D = (0, s.P1)(I, (e) => Object.values(e)),
                A = (e, t) => I(e)[t],
                C = (e) => e[l].fetchStatus,
                T = (e) => (t, r) => (C(r()) === d.ZP.LOADED ? Promise.resolve() : t(y(e))),
                y =
                    (e) =>
                    (t, r, { api: s }) =>
                        c._O(t, { params: e, request: s.withEndpoint(n.Z).fetchSessions })({ actionTypes: E, context: "FETCH_SESSIONS" }),
                O =
                    (e) =>
                    (t, r, { api: s }) => {
                        const a = { hashed_token: e };
                        return c._O(t, { params: a, request: s.withEndpoint(n.Z).revokeSession })({ actionTypes: S, context: "REVOKE_SESSION", meta: { hashed_token: e } });
                    },
                w =
                    (e) =>
                    (t, r, { api: s }) =>
                        c
                            ._O(t, { params: e, request: s.withEndpoint(n.Z).revokeAllSessions })({ actionTypes: h, context: "REVOKE_ALL_SESSIONS" })
                            .then(() => y()(t, r, { api: s }));
        },
        948985: (e, t, r) => {
            r.d(t, { $q: () => I, UD: () => D, wz: () => A, zw: () => C });
            var s = r(24949),
                a = r(166852),
                o = r(226395),
                n = r(499627),
                i = r(917799),
                c = r(312771),
                d = r(56519),
                l = r(502909),
                u = r(600823);
            const E = `${r(291020).Y}/applications`,
                S = `rweb/${E}`,
                h = i.dg(S, "FETCH_APPLICATIONS"),
                _ = { fetchStatus: c.ZP.NONE };
            function p(e = _, t) {
                if (!t) return e;
                switch (t.type) {
                    case h.REQUEST:
                        return { ...e, fetchStatus: c.ZP.LOADING };
                    case h.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: c.ZP.FAILED };
                    case h.SUCCESS:
                        return { ...e, error: null, fetchStatus: c.ZP.LOADED };
                    default:
                        return e;
                }
            }
            n.Z.register({ [E]: p });
            const m = {
                    revokeApplication: {
                        reducer: (e, t) => {
                            if (t.type === f.customActionTypes.revokeApplication.SUCCESS) {
                                const { revoked: r } = t.payload,
                                    { entityId: s } = t.meta,
                                    a = e.entities[s];
                                return { ...e, entities: { ...e.entities, [s]: { ...a, revoked: r } } };
                            }
                            return e;
                        },
                        getParams: (e) => ({ token: e }),
                        getApiMethod: (e) => e.withEndpoint(o.Z).revokeApplication,
                    },
                    revokeOauth2Token: {
                        reducer: (e, t) => {
                            if (t.type === f.customActionTypes.revokeOauth2Token.SUCCESS) {
                                const { revoked: r } = t.payload,
                                    { entityId: s } = t.meta,
                                    a = e.entities[s];
                                return { ...e, entities: { ...e.entities, [s]: { ...a, revoked: r } } };
                            }
                            return e;
                        },
                        getParams: (e) => ({ token_hash: e }),
                        getApiMethod: (e) => e.withEndpoint(o.Z).revokeOauth2Token,
                    },
                },
                f = (0, l.ZP)({ namespace: "applications", customActions: m });
            (f.selectUniqUnrevokedApps = (0, s.P1)(f.selectAll, (e) => {
                const t = Object.values(e).filter((e) => !0 !== e.revoked);
                return (0, a.Z)(t, (e) => e.app_id);
            })),
                (f.selectAppsById = (0, s.P1)(
                    f.selectAll,
                    (e, t) => t,
                    (e, t) => Object.values(e).filter((e) => e.app_id === t),
                ));
            const I = u.Z.register(f),
                D = (e) => e[E].fetchStatus,
                A = (e) => (t, r) => (D(r()) === c.ZP.LOADED ? Promise.resolve() : t(T(e))),
                C =
                    (e, t, r) =>
                    (r, s, { api: a }) => {
                        const o = s();
                        return f.selectAppsById(o, e).length > 0 ? Promise.resolve() : r(T(t));
                    },
                T =
                    (e) =>
                    (t, r, { api: s }) =>
                        i._O(t, { params: e, request: s.withEndpoint(o.Z).fetchApplications })({ actionTypes: h, context: "FETCH_APPLICATIONS" }, (e, t) => {
                            if (e) return [(0, d.dP)(e.entities)];
                        });
        },
        750238: (e, t, r) => {
            r.d(t, { Iv: () => S, UD: () => u, hW: () => l, q5: () => E });
            var s = r(226395),
                a = r(499627),
                o = r(917799),
                n = r(312771);
            const i = "backupCode",
                c = Object.freeze({ REQUEST: "rweb/backupCode/FETCH_BACKUP_CODE_REQUEST", SUCCESS: "rweb/backupCode/FETCH_BACKUP_CODE_SUCCESS", FAILURE: "rweb/backupCode/FETCH_BACKUP_CODE_FAILURE" }),
                d = { fetchStatus: n.ZP.NONE };
            a.Z.register({
                [i]: function (e = d, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case c.REQUEST:
                            return { ...e, fetchStatus: n.ZP.LOADING };
                        case c.SUCCESS: {
                            const r = t.payload && t.payload.codes;
                            return { ...e, backupCode: r && r[0], fetchStatus: n.ZP.LOADED };
                        }
                        case c.FAILURE:
                            return { ...e, fetchStatus: n.ZP.FAILED };
                        default:
                            return e;
                    }
                },
            });
            const l = (e) => e[i].backupCode,
                u = (e) => e[i].fetchStatus,
                E =
                    () =>
                    (e, t, { api: r }) =>
                        (0, o._O)(e, { request: r.withEndpoint(s.Z).fetchBackupCode })({ actionTypes: c, context: "FETCH_BACKUP_CODE" }),
                S =
                    () =>
                    (e, t, { api: r }) =>
                        (0, o._O)(e, { request: r.withEndpoint(s.Z).fetchNewBackupCode })({ actionTypes: c, context: "FETCH_BACKUP_CODE" });
        },
        116635: (e, t, r) => {
            r.d(t, { Af: () => E, UD: () => S, d0: () => h, iv: () => _ });
            var s = r(119146),
                a = r(499627),
                o = r(917799),
                n = r(312771),
                i = r(291020);
            const c = `${i.Y}/contacts`,
                d = `rweb/${i.Y}`,
                l = (0, o.dg)(d, "FETCH_ADDRESS_BOOK"),
                u = { cursor: null, contacts: [], fetchStatus: n.ZP.NONE };
            a.Z.register({
                [c]: function (e = u, t) {
                    if (!t) return e;
                    let r;
                    switch (t.type) {
                        case l.REQUEST:
                            return { ...e, fetchStatus: n.ZP.LOADING };
                        case l.SUCCESS:
                            return (r = t.payload.entities.vcards ? Object.values(t.payload.entities.vcards) : []), { ...e, contacts: [...e.contacts, ...r], cursor: t.payload.result.next_cursor, fetchStatus: n.ZP.LOADED };
                        case l.FAILURE:
                            return { ...e, error: t.payload, fetchStatus: n.ZP.FAILED };
                        default:
                            return e;
                    }
                },
            });
            const E = (e) => e[c].contacts,
                S = (e) => e[c].fetchStatus,
                h = (e) => (t, r) => (S(r()) === n.ZP.LOADED ? Promise.resolve() : t(p(e))),
                _ = (e) => (t, r) => {
                    const s = r(),
                        a = ((e) => e[c].cursor)(s);
                    return a && S(s) === n.ZP.LOADED ? t(p({ ...e, cursor: a })) : Promise.resolve();
                },
                p =
                    (e) =>
                    (t, r, { api: a }) =>
                        (0, o._O)(t, { request: a.withEndpoint(s.Z).fetchAddressBook, params: e })({ actionTypes: l, context: "FETCH_ADDRESS_BOOK" });
        },
        558477: (e, t, r) => {
            r.d(t, { Z: () => l });
            var s = r(226395),
                a = r(782826),
                o = r(917799),
                n = r(923488);
            const i = `rweb/${`${r(291020).Y}/deactivate`}`,
                c = (0, o.dg)(i, "DEACTIVATE_ACCOUNT"),
                d = () => a.ZP.navigateTo("/settings/deactivated"),
                l =
                    (e, t) =>
                    (r, a, { api: i }) =>
                        r((0, n.JH)()).then(() =>
                            r(
                                (
                                    (e, t) =>
                                    (r, a, { api: n }) =>
                                        (0, o._O)(r, { params: { password: e, deactivation_timespan: t }, request: n.withEndpoint(s.Z).deactivate })({ actionTypes: c, context: "DEACTIVATE_ACCOUNT" }).then(d)
                                )(e, t),
                            ),
                        );
        },
        823647: (e, t, r) => {
            r.d(t, { UD: () => h, jW: () => _, uc: () => p, zJ: () => f });
            var s = r(327202),
                a = r(499627),
                o = r(917799),
                n = r(312771),
                i = r(390387);
            const c = `${r(291020).Y}/email_notifications`,
                d = `rweb/${c}`,
                l = o.dg(d, "FETCH_EMAIL_NOTIFICATIONS"),
                u = o.dg(d, "UPDATE_EMAIL_NOTIFICATIONS"),
                E = { emailSettings: {}, error: null, fetchStatus: n.ZP.NONE };
            function S(e = E, t) {
                if (!t) return e;
                switch (t.type) {
                    case l.REQUEST:
                        return { ...e, fetchStatus: n.ZP.LOADING };
                    case l.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: n.ZP.FAILED };
                    case l.SUCCESS:
                        return { ...e, emailSettings: t.payload, error: null, fetchStatus: n.ZP.LOADED };
                    case u.SUCCESS:
                        return { ...e, emailSettings: { ...e.emailSettings, ...t.meta }, error: null, fetchStatus: n.ZP.LOADED };
                    default:
                        return e;
                }
            }
            a.Z.register({ [c]: S });
            const h = (e) => e[c].fetchStatus,
                _ = (e) => e[c].emailSettings,
                p = () => (e, t) => (h(t()) === n.ZP.LOADED ? Promise.resolve() : e(m())),
                m =
                    () =>
                    (e, t, { api: r }) => {
                        const a = i.x0(t());
                        return o._O(e, { params: { userId: a }, request: r.withEndpoint(s.Z).fetch })({ actionTypes: l, context: "FETCH_EMAIL_NOTIFICATIONS" });
                    },
                f =
                    (e) =>
                    (t, r, { api: a }) => {
                        const n = i.x0(r());
                        return o.AB(t, { params: { userId: n, settings: e }, request: a.withEndpoint(s.Z).update })({ actionTypes: u, context: "UPDATE_EMAIL_NOTIFICATIONS", meta: e });
                    };
        },
        446418: (e, t, r) => {
            r.d(t, { DG: () => D, DY: () => f, J2: () => I, UD: () => p, aX: () => A, vi: () => _, zl: () => m });
            var s = r(226395),
                a = r(499627),
                o = r(917799),
                n = r(312771),
                i = r(390387);
            const c = "loginVerification",
                d = "U2fSecurityKey",
                l = { REQUEST: "rweb/settings/loginVerification/FETCH_LOGIN_VERIFICATION_SETTINGS_REQUEST", SUCCESS: "rweb/settings/loginVerification/FETCH_LOGIN_VERIFICATION_SETTINGS_SUCCESS", FAILURE: "rweb/settings/loginVerification/FETCH_LOGIN_VERIFICATION_SETTINGS_FAILURE" },
                u = { REQUEST: "rweb/settings/loginVerification/DELETE_SECURITY_KEY_REQUEST", SUCCESS: "rweb/settings/loginVerification/DELETE_SECURITY_KEY_SUCCESS", FAILURE: "rweb/settings/loginVerification/DELETE_SECURITY_KEY_FAILURE" },
                E = { REQUEST: "rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_REQUEST", SUCCESS: "rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_SUCCESS", FAILURE: "rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_FAILURE" },
                S = { REQUEST: "rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_METHOD_REQUEST", SUCCESS: "rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_METHOD_SUCCESS", FAILURE: "rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_METHOD_FAILURE" },
                h = { isOldPushUser: !1, twoFactorAuthEnabled: !1, methods: {}, fetchStatus: n.ZP.NONE };
            a.Z.register({
                [c]: function (e = h, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case l.REQUEST:
                            return { ...e, fetchStatus: n.ZP.LOADING };
                        case l.SUCCESS: {
                            if (!t.payload) return e;
                            const { isOldPushUser: r, methods: s, twoFactorAuthEnabled: a } = t.payload;
                            return {
                                ...e,
                                isOldPushUser: r,
                                twoFactorAuthEnabled: a,
                                methods:
                                    s?.reduce((e, t) => {
                                        const { createdAtMs: r, externalDisplayName: s, id: a, twoFactorType: o } = t;
                                        if (o === d) {
                                            const t = { createdAtMs: r, id: a, name: s };
                                            e[o] = [...(e[o] || []), t];
                                        } else e[o] = a;
                                        return e;
                                    }, {}) || {},
                                fetchStatus: n.ZP.LOADED,
                            };
                        }
                        case l.FAILURE:
                            return { ...e, error: t.payload, fetchStatus: n.ZP.FAILED };
                        case E.REQUEST:
                            return { ...e, isOldPushUser: !1, twoFactorAuthEnabled: !1, methods: {} };
                        case S.SUCCESS: {
                            const r = (t && t.meta && t.meta.method) || "",
                                s = Object.keys(e.methods).reduce((t, s) => (s !== r && (t[s] = e.methods[s]), t), {});
                            return { ...e, methods: s };
                        }
                        case u.SUCCESS: {
                            if (!t.meta) return e;
                            const { methods: r } = e,
                                s = t.meta.securityKeyId,
                                a = Array.isArray(r[d]) ? r[d].filter((e) => e.id !== s) : null;
                            return { ...e, methods: { ...r, [d]: a } };
                        }
                        default:
                            return e;
                    }
                },
            });
            const _ = (e) => e[c],
                p = (e) => e[c].fetchStatus,
                m =
                    () =>
                    (e, t, { api: r, featureSwitches: a }) => {
                        const n = i.x0(t());
                        return (0, o._O)(e, { params: { userId: n }, request: r.withEndpoint(s.Z).fetchLoginVerificationSettings })({ actionTypes: l, context: "FETCH_LOGIN_VERIFICATION_SETTINGS" });
                    },
                f =
                    (e) =>
                    (t, r, { api: a }) =>
                        (0, o.Vg)(t, { params: e, request: a.withEndpoint(s.Z).enrollIn2FA })("TWO_FACTOR_ENROLLMENT"),
                I =
                    ({ securityKeyId: e }) =>
                    (t, r, { api: a }) =>
                        (0, o._O)(t, { request: a.withEndpoint(s.Z).disable2FAMethod, params: { methodId: e } })({ actionTypes: u, context: "DELETE_SECURITY_KEY", meta: { securityKeyId: e } }),
                D =
                    () =>
                    (e, t, { api: r }) =>
                        (0, o.AB)(e, { request: r.withEndpoint(s.Z).disable2FA })({ actionTypes: E, context: "DISABLE_LOGIN_VERIFICATION" }),
                A =
                    ({ method: e }) =>
                    (t, r, { api: a }) => {
                        const n = _(r()).methods[e];
                        return (0, o._O)(t, { request: a.withEndpoint(s.Z).disable2FAMethod, params: { methodId: n } })({ actionTypes: S, context: "DISABLE_LOGIN_VERIFICATION_METHOD", meta: { method: e } });
                    };
        },
        464107: (e, t, r) => {
            r.d(t, { Z: () => o });
            var s = r(226395),
                a = r(917799);
            const o =
                (e, t, r) =>
                (o, n, { api: i }) =>
                    (0, a.Vg)(o, { params: { current_password: e, password: t, password_confirmation: r }, request: i.withEndpoint(s.Z).changePassword })("CHANGE_PASSWORD");
        },
        618448: (e, t, r) => {
            r.d(t, { UD: () => u, n8: () => E, v$: () => l });
            var s = r(226395),
                a = r(499627),
                o = r(917799),
                n = r(312771);
            const i = "temporaryPassword",
                c = Object.freeze({ REQUEST: "rweb/temporaryPassword/FETCH_TEMPORARY_PASSWORD_REQUEST", SUCCESS: "rweb/temporaryPassword/FETCH_TEMPORARY_PASSWORD_SUCCESS", FAILURE: "rweb/temporaryPassword/FETCH_TEMPORARY_PASSWORD_FAILURE" }),
                d = { fetchStatus: n.ZP.NONE };
            a.Z.register({
                [i]: function (e = d, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case c.REQUEST:
                            return { ...e, fetchStatus: n.ZP.LOADING };
                        case c.SUCCESS: {
                            const r = t.payload && t.payload.temporary_password;
                            return { ...e, temporaryPassword: r, fetchStatus: n.ZP.LOADED };
                        }
                        case c.FAILURE:
                            return { ...e, fetchStatus: n.ZP.FAILED };
                        default:
                            return e;
                    }
                },
            });
            const l = (e) => e[i].temporaryPassword,
                u = (e) => e[i].fetchStatus,
                E =
                    () =>
                    (e, t, { api: r }) =>
                        (0, o._O)(e, { request: r.withEndpoint(s.Z).fetchTemporaryPassword })({ actionTypes: c, context: "FETCH_TEMPORARY_PASSWORD" });
        },
        61666: (e, t, r) => {
            r.d(t, { r: () => n });
            var s = r(38562),
                a = r(371493),
                o = r(131290);
            const n = (e) => (t, r) => {
                const n = { ...e };
                if (e.hasOwnProperty("personalized_trends")) {
                    if (!e.hasOwnProperty("trend_location_woeid")) {
                        const e = (0, o.um)(r());
                        n.trend_location_woeid = (e && e[0] && e[0].woeid) || "1";
                    }
                } else n.personalized_trends = !1;
                return t(s.VP(n)).then(() => t((0, a.$N)()));
            };
        },
        39699: (e, t, r) => {
            r.d(t, { B: () => s });
            const s = Object.freeze({ Daily: "Daily", Weekly: "Weekly", Periodically: "Periodically", None: "None" });
        },
        673110: (e, t, r) => {
            r.d(t, { Gv: () => S, UD: () => E });
            var s = r(226395),
                a = r(499627),
                o = r(917799),
                n = r(312771),
                i = r(291020);
            const c = "verifyPassword",
                d = `rweb/${i.Y}/${c}`,
                l = (0, o.dg)(d, "VERIFY_PASSWORD"),
                u = { fetchStatus: n.ZP.NONE };
            a.Z.register({
                [c]: function (e = u, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case l.REQUEST:
                            return { ...e, fetchStatus: n.ZP.LOADING };
                        case l.SUCCESS:
                            return { ...e, fetchStatus: n.ZP.LOADED };
                        case l.FAILURE:
                            return { ...e, error: t.payload, fetchStatus: n.ZP.FAILED };
                        default:
                            return e;
                    }
                },
            });
            const E = (e) => e[c].fetchStatus,
                S =
                    (e) =>
                    (t, r, { api: a }) =>
                        (0, o._O)(t, { params: { password: e }, request: a.withEndpoint(s.Z).verifyPassword })({ actionTypes: l, context: "VERIFY_PASSWORD" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-e6266db0.f80fac8a.js.map

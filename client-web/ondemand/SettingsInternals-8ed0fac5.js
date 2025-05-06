"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-8ed0fac5"],
    {
        883432: (e, t, s) => {
            s.d(t, { Z: () => r });
            const r = { AdvancedSearchPage: "advanced_search_page", CashtagClick: "cashtag_click", HashtagClick: "hashtag_click", PromotedTrendClick: "promoted_trend_click", RecentSearchClick: "recent_search_click", SavedSearchClick: "saved_search_click", RelatedQueryClick: "related_query_click", SpellingCorrectionClick: "spelling_correction_click", SpellingCorrectionRevertClick: "spelling_suggestion_revert_click", SpellingExpansionClick: "spelling_expansion_click", SpellingExpansionRevertClick: "spelling_expansion_revert_click", SpellingSuggestionClick: "spelling_suggestion_click", TrendClick: "trend_click", TrendView: "trend_view", TypeaheadClick: "typeahead_click", Typed: "typed_query", TVSearch: "TvSearch", TweetDetailQuoteTweet: "tdqt", TweetDetailSimilarPost: "tweet_detail_similar_posts" };
        },
        988823: (e, t, s) => {
            s.d(t, { M: () => o });
            var r = s(807896),
                n = s(202784),
                a = s(190286);
            const o = (e) => (t) => {
                const [s, o] = n.useState(null),
                    i = (e) =>
                        new Promise((t, s) => {
                            o({ resolve: t, reject: s, confirmationSheetProps: e });
                        });
                if (s) {
                    const { confirmationSheetProps: e, reject: t, resolve: i } = s;
                    return n.createElement(
                        a.Z,
                        (0, r.Z)({}, e, {
                            onCancel: () => {
                                t(), o(null);
                            },
                            onConfirm: () => {
                                i(), o(null);
                            },
                        }),
                    );
                }
                return n.createElement(e, (0, r.Z)({}, t, { confirm: i }));
            };
        },
        296196: (e, t, s) => {
            s.r(t),
                s.d(t, {
                    GLOBAL_STATE_KEY: () => _.Yf,
                    acceptConversation: () => a.tF,
                    addAvatarMedia: () => a._D,
                    addParticipants: () => a.ck,
                    addRecentSearches: () => g,
                    addWelcomeMessageToConversation: () => a.Qe,
                    clearRecentSearch: () => P,
                    clearRecentSearches: () => D,
                    clearSearchCache: () => A,
                    default: () => Z,
                    deleteConversations: () => a.S9,
                    disableMentionNotifications: () => a.BW,
                    disableNotifications: () => a.dq,
                    enableMentionNotifications: () => a.Ap,
                    enableNotifications: () => a.PZ,
                    fetchConversation: () => a.Um,
                    fetchConversationFromParticipants: () => a.sS,
                    fetchConversationFuture: () => a.OW,
                    fetchConversationHistoricalSnapshot: () => a.wm,
                    fetchConversationHistory: () => a.Be,
                    fetchConversationIfNeeded: () => a.sA,
                    fetchInbox: () => i.oH,
                    fetchInboxIfNeeded: () => i.C2,
                    fetchPermissions: () => a.qg,
                    fetchTrustedInboxHistory: () => i.vC,
                    fetchUntrustedInboxHistory: () => i.kK,
                    fetchUntrustedLowQualityInboxHistory: () => i.j7,
                    fetchUpdates: () => F.f9,
                    fetchUpdatesIfNeeded: () => F.hd,
                    leaveConversation: () => a.qH,
                    markAllAsRead: () => a.SF,
                    markConversationRead: () => a.v3,
                    markSpamStatus: () => o.kv,
                    muteDMUser: () => a.sj,
                    removeAvatarMedia: () => a.Xw,
                    removeConversation: () => a.Ae,
                    removeEntry: () => o.MY,
                    searchConversations: () => N,
                    selectConversation: () => a.xu,
                    selectConversationAvatarMediaId: () => a.aG,
                    selectConversationAvatarMediaIsUploading: () => a.W,
                    selectConversationAvatarMediaUploadProgress: () => a.UA,
                    selectConversationFetchStatus: () => a.Pr,
                    selectConversationIdsByInbox: () => i.g4,
                    selectConversationIsLoaded: () => a.gQ,
                    selectConversationIsRead: () => a.jT,
                    selectConversations: () => a.FS,
                    selectEntries: () => o.gm,
                    selectEntriesForConversation: () => o.iN,
                    selectEntry: () => o.WK,
                    selectFetchStatus: () => i.UD,
                    selectHasConversations: () => a.ax,
                    selectInboxCursor: () => i.Pt,
                    selectInboxIsLoaded: () => i.MB,
                    selectInboxTypeByConversation: () => a.Zg,
                    selectIsLoadingTop: () => i.xS,
                    selectLabelledConversationIds: () => i.Z3,
                    selectLastSeenEventIds: () => i.B7,
                    selectPinnedConversationIds: () => i.Kf,
                    selectRecentSearches: () => L,
                    selectRecipientCanNotDm: () => a.OF,
                    selectSearchConversations: () => U,
                    selectSearchFetchStatus: () => w,
                    selectUnreadCount: () => i.Sb,
                    selectUntrustedConversationCount: () => i.Oq,
                    selectUntrustedCounts: () => i.Re,
                    selectUntrustedCursor: () => i.aB,
                    selectUntrustedLowQualityConversationCount: () => i.ZI,
                    selectUntrustedLowQualityCursor: () => i.Gk,
                    selectUntrustedUnreadCount: () => i.k5,
                    selectUpdates: () => F.o8,
                    setConversationAvatar: () => a.X5,
                    toggleNotifications: () => a.$S,
                    unmuteDMUser: () => a.GP,
                    updateConversationAvatar: () => a.nI,
                    updateConversationName: () => a.FI,
                    updateConversationReadState: () => a.d0,
                    updateLastSeenEventId: () => i.kL,
                    updateTrustedLastSeenEventId: () => i.$7,
                    updateTyping: () => a.lT,
                    updateUntrustedLastSeenEventId: () => i.A4,
                });
            var r = s(118717),
                n = s(499627),
                a = s(613195),
                o = s(627279),
                i = s(720277),
                c = (s(136728), s(468811)),
                d = s.n(c),
                E = s(948322),
                u = s(917799),
                l = s(312771),
                S = s(390387),
                p = s(849585),
                _ = s(147143);
            const T = "rweb.recentDMSearches",
                h = Object.freeze({ REQUEST: "rweb/directMessages/SEARCH_REQUEST", SUCCESS: "rweb/directMessages/SEARCH_SUCCESS", FAILURE: "rweb/directMessages/SEARCH_FAILURE" }),
                f = "rweb/directMessages/ADD_RECENT_SEARCHES",
                I = (e) => ({ payload: e, type: f }),
                C = "rweb/directMessages/CLEAR_SEARCH_CACHE",
                A = () => ({ type: C }),
                O = "rweb/directMessages/CLEAR_RECENT_SEARCH",
                m = "rweb/directMessages/CLEAR_RECENT_SEARCHES",
                y = { searchResults: {}, recentSearches: [] };
            function R(e = y, t) {
                if (!t) return e;
                switch (t.type) {
                    case f:
                    case O:
                        return { ...e, recentSearches: t.payload || [] };
                    case m:
                        return { ...e, recentSearches: [] };
                    case h.REQUEST: {
                        const { fetchNextPage: s, preserveResults: r, query: n } = t.meta || {},
                            a = e.searchResults ? e.searchResults[n] : {},
                            o = { ...e.searchResults, [n]: { ...a, fetchStatus: r || s ? a?.fetchStatus : l.ZP.LOADING } };
                        return { ...e, searchResults: o };
                    }
                    case h.FAILURE: {
                        const { fetchNextPage: s, preserveResults: r, query: n } = t.meta || {},
                            a = e.searchResults ? e.searchResults[n] : {},
                            o = { ...e.searchResults, [n]: { ...a, fetchStatus: r || s ? a?.fetchStatus : l.ZP.FAILED, error: t.payload } };
                        return { ...e, searchResults: o };
                    }
                    case h.SUCCESS: {
                        const { query: s } = t.meta || {},
                            r = t.payload && t.payload.result ? t.payload.result : null,
                            { conversations: n, error: a } = r || {},
                            o = r?.conversationIds ? r.conversationIds : n ? Object.keys(n) : [],
                            i = e.searchResults ? e.searchResults[s] : {},
                            c = i?.conversationIds || [],
                            d = c.length && o ? c.concat(o.filter((e) => !c.includes(e))) : o,
                            E = { ...e.searchResults, [s]: { ...i, lastCursor: r?.cursor, conversationIds: d, error: a, fetchStatus: l.ZP.LOADED } };
                        return { ...e, searchResults: E };
                    }
                    case C:
                    case p.t:
                        return { ...y, recentSearches: e.recentSearches };
                    default:
                        return e;
                }
            }
            const L = (e) => e[_.Yf].search?.recentSearches,
                w = (e, t) => {
                    const s = e[_.Yf].search?.searchResults;
                    if (s) {
                        const e = s[t];
                        return e?.fetchStatus || l.ZP.NONE;
                    }
                    return l.ZP.NONE;
                },
                U = (e, t) => {
                    const s = e[_.Yf].search?.searchResults;
                    return (s && s[t]?.conversationIds) || [];
                },
                N =
                    (e) =>
                    (t, s, { api: r }) => {
                        const n = s(),
                            { fetchNextPage: a, preserveResults: o, query: c } = e || {},
                            l = { query: c, search_type: "conversations", request_id: d().v4() },
                            S = ((e, t) => {
                                const s = e[_.Yf].search?.searchResults;
                                return (s && s[t]?.lastCursor) || null;
                            })(n, c),
                            p = ((e) => e[_.Yf].search?.searchResults)(n),
                            T = p ? p[c] : void 0,
                            f = !!S;
                        S && c && a && (l.cursor = S);
                        const I = u._O(t, { params: l, request: r.withEndpoint(E.Z).search }),
                            C = (e) => {
                                if (e && e.result) {
                                    const { conversations: t } = e.result,
                                        { users: s } = e.entities;
                                    return t && Object.values(t).forEach((e) => (e.isSearchResult = !0)), t ? (0, i.s0)({ conversations: t, users: s }) : null;
                                }
                            };
                        return !T || T?.error || o || (a && f) ? I({ actionTypes: h, context: "SEARCH", meta: { query: l.query, cursor: l.cursor, preserveResults: o, fetchNextPage: a } }, C) : (t({ type: "rweb/directMessages/SEARCH_SUCCESS", payload: { result: T }, meta: { query: c, cursor: S } }), Promise.resolve());
                    },
                g =
                    (e) =>
                    (t, s, { featureSwitches: r, userPersistence: n }) => {
                        const a = r.getNumberValue("dm_inbox_search_max_recent_searches_stored");
                        return n.get(T).then((s) => {
                            const r = s?.recentSearches || [];
                            return !r.includes(e) && r.push(e), r.length > a && r.shift(), t(I(r)), n.set(T, { recentSearches: r });
                        });
                    },
                P =
                    (e) =>
                    (t, s, { userPersistence: r }) =>
                        r.get(T).then((s) => {
                            const n = s?.recentSearches || [];
                            return n.splice(n.indexOf(e), 1), t({ payload: n, type: O }), r.set(T, { recentSearches: n });
                        }),
                D =
                    () =>
                    (e, t, { userPersistence: s }) => (e({ type: m }), s.set(T, { recentSearches: [] }));
            n.Z.register(
                { [_.Yf]: R },
                () =>
                    (e, t, { userPersistence: s }) =>
                        S.Qb(t())
                            ? Promise.resolve(
                                  s.get(T).then((t) => {
                                      const s = t?.recentSearches;
                                      s && e(I(s));
                                  }),
                              ).then(() => {})
                            : Promise.resolve(),
            );
            var F = s(923965);
            const v = (0, r.UY)({ conversations: a.ZP, entries: o.ZP, inbox: i.ZP, search: R, updates: F.ZP });
            n.Z.register({ [_.Yf]: v });
            const Z = v;
        },
        806528: (e, t, s) => {
            s.d(t, { Bz: () => d, ZW: () => p, ey: () => u, fw: () => i, iG: () => S, wM: () => c });
            var r = s(499627),
                n = s(341276);
            const a = "geoLocation",
                o = Object.freeze({ permissionStatus: void 0, position: void 0 });
            const i = (e) => e[a],
                c = (e) => e[a].permissionStatus,
                d = (e) => e[a].position,
                E = "rweb/geoLocation/SET_PERMISSION_STATUS",
                u = (e) => ({ payload: e, type: E }),
                l = "rweb/geoLocation/SET_POSITION",
                S = () => (e, t) =>
                    _()
                        .then((t) => e({ payload: t, type: l }))
                        .catch((t) => (e(u(n.S.denied)), Promise.reject(t))),
                p = () => (e, t) => (d(t()) ? Promise.resolve() : e(S())),
                _ = () =>
                    new Promise((e, t) =>
                        navigator.geolocation.getCurrentPosition((t) => {
                            const s = { timestamp: t.timestamp, coords: { latitude: t.coords.latitude, longitude: t.coords.longitude, altitude: t.coords.altitude, accuracy: t.coords.accuracy, altitudeAccuracy: t.coords.altitudeAccuracy, heading: t.coords.heading, speed: t.coords.speed } };
                            return e(s);
                        }, t),
                    );
            r.Z.register({
                [a]: function (e = o, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case E:
                            return { ...e, permissionStatus: t.payload };
                        case l:
                            return { ...e, position: t.payload };
                        default:
                            return e;
                    }
                },
            });
        },
        341276: (e, t, s) => {
            s.d(t, { M: () => n, S: () => r });
            const r = Object.freeze({ granted: "granted", denied: "denied", prompt: "prompt" }),
                n = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 });
        },
        642721: (e, t, s) => {
            s.d(t, { $o: () => w, AE: () => v, Lk: () => O, R_: () => Z, UD: () => C, UK: () => m, WW: () => I, ck: () => b, fd: () => f, kM: () => F, mz: () => A, xZ: () => D });
            var r = s(745978),
                n = s(499627),
                a = s(917799),
                o = s(312771);
            const i = "mutedKeywords",
                c = "rweb.mutedKeywords",
                d = 6048e5,
                E = `rweb/${i}`,
                u = a.dg(E, "FETCH_DISCOURAGED_KEYWORDS"),
                l = a.dg(E, "FETCH_MUTED_KEYWORDS"),
                S = a.dg(E, "ADD_MUTED_KEYWORD"),
                p = a.dg(E, "DELETE_MUTED_KEYWORD"),
                _ = a.dg(E, "UPDATE_MUTED_KEYWORD"),
                T = { defaultOptions: { id: "", keyword: "", mute_notifications_option: "following", mute_home_timeline: !0, time_duration: "forever" }, defaultOptionsLoaded: !1, discouragedKeywords: [], fetchStatus: o.ZP.NONE, mutedKeywords: [] };
            function h(e = T, t) {
                if (!t) return e;
                switch (t.type) {
                    case R:
                    case u.SUCCESS:
                        return { ...e, discouragedKeywords: t.payload.discouraged_keywords };
                    case l.REQUEST:
                        return { ...e, fetchStatus: o.ZP.LOADING };
                    case l.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: o.ZP.FAILED };
                    case l.SUCCESS:
                        return { ...e, mutedKeywords: t.payload.muted_keywords, error: null, fetchStatus: o.ZP.LOADED };
                    case S.SUCCESS:
                    case p.SUCCESS:
                    case _.SUCCESS:
                        return { ...e, mutedKeywords: t.payload.muted_keywords };
                    case N:
                        return { ...e, defaultOptions: t.payload.default_options };
                    case g:
                        return { ...e, defaultOptionsLoaded: !0 };
                    default:
                        return e;
                }
            }
            const f = (e) => e[i].discouragedKeywords,
                I = (e) => e[i].mutedKeywords,
                C = (e) => e[i].fetchStatus,
                A = (e, t) => e[i].mutedKeywords.find((e) => e.id === t),
                O = (e, t) => e[i].defaultOptions,
                m =
                    () =>
                    (e, t, { userPersistence: s }) =>
                        f(t()).length
                            ? Promise.resolve()
                            : s.get(c, d).then((r) => {
                                  const { discouragedKeywords: n } = r || {};
                                  return n && n.length ? (e(L(n)), Promise.resolve()) : e(y()).then(() => s.set(c, { discouragedKeywords: f(t()) }));
                              }),
                y =
                    (e = {}) =>
                    (t, s, { api: n }) =>
                        a._O(t, { params: e, request: n.withEndpoint(r.Z).fetchDiscouragedKeywords })({ actionTypes: u, context: "FETCH_DISCOURAGED_KEYWORDS" }),
                R = `${E}/INIT_DISCOURAGED_KEYWORDS`,
                L = (e) => ({ type: R, payload: { discouraged_keywords: e } }),
                w = () => (e, t) => (C(t()) === o.ZP.LOADED ? Promise.resolve() : e(U())),
                U =
                    (e) =>
                    (t, s, { api: n }) =>
                        a._O(t, { params: e, request: n.withEndpoint(r.Z).fetchMutedKeywords })({ actionTypes: l, context: "FETCH_MUTED_KEYWORDS" }),
                N = `${E}/SET_DEFAULT_OPTIONS`,
                g = `${E}/DEFAULT_OPTIONS_LOADED`,
                P = (e) => ({ type: N, payload: { default_options: e } }),
                D =
                    () =>
                    (e, t, { userPersistence: s }) =>
                        t()[i].defaultOptionsLoaded
                            ? Promise.resolve()
                            : s.get(c, d).then((t) => {
                                  if (t && t.defaultOptions) {
                                      const { defaultOptions: s } = t;
                                      e(P(s));
                                  }
                                  e({ type: g });
                              }),
                F =
                    (e) =>
                    (t, s, { userPersistence: r }) => (t(P(e)), r.set(c, { defaultOptions: e })),
                v =
                    (e) =>
                    (t, s, { api: n }) =>
                        a._O(t, { params: e, request: n.withEndpoint(r.Z).addMutedKeyword })({ actionTypes: S, context: "ACTION_ADD_MUTED_KEYWORD", meta: { params: e } }),
                Z =
                    (e) =>
                    (t, s, { api: n }) => {
                        const o = { ids: e.join(",") };
                        return a._O(t, { params: o, request: n.withEndpoint(r.Z).deleteMutedKeyword })({ actionTypes: p, context: "ACTION_DELETE_MUTED_KEYWORD", meta: { ids: e } });
                    },
                b =
                    (e) =>
                    (t, s, { api: n }) =>
                        a._O(t, { params: e, request: n.withEndpoint(r.Z).updateMutedKeyword })({ actionTypes: _, context: "ACTION_UPDATE_MUTED_KEYWORD", meta: { params: e } });
            n.Z.register({ [i]: h });
        },
        450476: (e, t, s) => {
            s.d(t, { Ob: () => _, SW: () => f, UD: () => p, Y0: () => h, ky: () => S });
            var r = s(226395),
                n = s(499627),
                a = s(917799),
                o = s(312771);
            const i = "notificationFilters",
                c = "rweb.notificationFilters",
                d = Object.freeze({ REQUEST: "rweb/notificationFilters/FETCH_NOTIFICATION_FILTERS_REQUEST", SUCCESS: "rweb/notificationFilters/FETCH_NOTIFICATION_FILTERS_SUCCESS", FAILURE: "rweb/notificationFilters/FETCH_NOTIFICATION_FILTERS_FAILURE" }),
                E = Object.freeze({ REQUEST: "rweb/notificationFilters/ENABLE_NOTIFICATION_FILTER_REQUEST", SUCCESS: "rweb/notificationFilters/ENABLE_NOTIFICATION_FILTER_SUCCESS", FAILURE: "rweb/notificationFilters/ENABLE_NOTIFICATION_FILTER_FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/notificationFilters/DISABLE_NOTIFICATION_FILTER_REQUEST", SUCCESS: "rweb/notificationFilters/DISABLE_NOTIFICATION_FILTER_SUCCESS", FAILURE: "rweb/notificationFilters/DISABLE_NOTIFICATION_FILTER_FAILURE" }),
                l = { fetchStatus: o.ZP.NONE, notificationFilters: {} };
            n.Z.register({
                [i]: function (e = l, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case d.REQUEST:
                            return { ...e, fetchStatus: o.ZP.LOADING };
                        case d.FAILURE:
                            return { ...e, fetchStatus: o.ZP.FAILED };
                        case d.SUCCESS:
                            return t.payload ? { ...e, notificationFilters: t.payload, fetchStatus: o.ZP.LOADED } : { ...e, fetchStatus: o.ZP.LOADED };
                        case E.REQUEST:
                            return { ...e, notificationFilters: { ...e.notificationFilters, [t.meta.filterName]: !0 } };
                        case u.REQUEST:
                            return { ...e, notificationFilters: { ...e.notificationFilters, [t.meta.filterName]: !1 } };
                        default:
                            return e;
                    }
                },
            });
            const S = (e) => e[i].notificationFilters,
                p = (e) => e[i].fetchStatus,
                _ =
                    () =>
                    (e, t, { api: s, userPersistence: r }) =>
                        p(t()) === o.ZP.LOADED ? Promise.resolve() : r.get(c, 24e4).then((t) => e(t ? { payload: t, type: d.SUCCESS } : T())),
                T =
                    () =>
                    (e, t, { api: s, userPersistence: n }) =>
                        a
                            ._O(e, { request: s.withEndpoint(r.Z).fetchNotificationFilters })({ actionTypes: d, context: "FETCH_NOTIFICATION_FILTERS" })
                            .then((e) => (n.set(c, S(t())), e)),
                h =
                    (e) =>
                    (t, s, { api: n, userPersistence: o }) =>
                        a
                            .AB(t, { params: { [e]: !0 }, request: n.withEndpoint(r.Z).updateNotificationFilters })({ actionTypes: E, context: "ACTION_ENABLE_NOTIFICATION_FILTER", meta: { filterName: e } })
                            .then((e) => {
                                o.set(c, S(s()));
                            }),
                f =
                    (e) =>
                    (t, s, { api: n, userPersistence: o }) =>
                        a
                            .AB(t, { params: { [e]: !1 }, request: n.withEndpoint(r.Z).updateNotificationFilters })({ actionTypes: u, context: "ACTION_DISABLE_NOTIFICATION_FILTER", meta: { filterName: e } })
                            .then((e) => {
                                o.set(c, S(s()));
                            });
        },
        694180: (e, t, s) => {
            s.d(t, { cM: () => T, dS: () => _, iY: () => h });
            var r = s(370751),
                n = s(399896),
                a = s(663550),
                o = s(499627),
                i = s(917799);
            const c = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                E = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, r.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                l = (0, r.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                S = (e) => ({ payload: { eventKey: e }, type: E });
            const p = (e, t) => !!e.promotedContent[t],
                _ =
                    (e) =>
                    (t, s, { api: r }) => {
                        const { event: a, impression_id: o, promoted_trend_id: c } = e,
                            E = `trend-${c}-${a}`;
                        if (l.has(a) && p(s(), E)) return Promise.resolve();
                        const u = { promoted_trend_id: c, event: a, impression_id: o };
                        return (0, i._O)(t, { params: u, request: r.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && l.has(a)) return [S(E)];
                        });
                    },
                T =
                    ({ disclosureType: e, itemId: t, itemType: s, params: r }) =>
                    (a, o, { api: c }) => {
                        const { event: E, impression_id: l } = r,
                            _ = `${s}-${t ?? "undefined"}-${l ?? "undefined"}-${E ?? "undefined"}`;
                        if (u.has(E) && p(o(), _)) return Promise.resolve();
                        const T = e && "earned" === e.toLowerCase() ? "1" : null,
                            h = { ...r, earned: T, epoch_ms: Date.now() };
                        return (0, i._O)(a, { params: h, request: c.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: h }, (e, t) => {
                            if (!t && u.has(E)) return [S(_)];
                        });
                    },
                h =
                    (e) =>
                    (t, s, { api: r }) =>
                        (0, i._O)(t, { params: e, request: r.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            o.Z.register({
                promotedContent: function (e = c, t) {
                    if (!t) return e;
                    if (t.type === E) {
                        if (!t.payload) return e;
                        const { eventKey: s } = t.payload;
                        return { ...e, [s]: !0 };
                    }
                    return e;
                },
            });
        },
        204744: (e, t, s) => {
            s.d(t, { DI: () => C, H$: () => l, OB: () => A, Ww: () => E, YB: () => u, hj: () => T, qF: () => f });
            s(901951);
            var r = s(499627),
                n = s(390387);
            const a = "recentSearches",
                o = "rweb.recentSearches",
                i =
                    (e) =>
                    (t, s, { userPersistence: r }) =>
                        r.set(o, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                c = (e, t) => {
                    let s = [];
                    if (e.user) {
                        const r = e.user;
                        s = t.filter((e) => e.event || e.keyword || e.list || e.topic || (e.user && e.user.id !== r.id));
                    } else if (e.event) {
                        const r = e.event;
                        s = t.filter((e) => e.keyword || e.list || e.topic || e.user || (e.event && e.event.id !== r.id));
                    } else if (e && e.keyword) {
                        const r = e.keyword;
                        s = t.filter((e) => e.event || e.list || e.topic || e.user || (e.keyword && e.keyword.query !== r.query));
                    } else if (e.list) {
                        const r = e.list;
                        s = t.filter((e) => e.event || e.keyword || e.topic || e.user || (e.list && e.list.id !== r.id));
                    } else if (e.topic) {
                        const r = e.topic;
                        s = t.filter((e) => e.event || e.keyword || e.list || e.user || (e.topic && e.topic.id !== r.id));
                    }
                    return s;
                },
                d = { fetched: !1, recentSearches: [] };
            const E = (e) => e[a].recentSearches,
                u = (e) => E(e)[0] || null,
                l = (e) => e[a].fetched,
                S = "rweb/recentSearches/INIT_FROM_CACHE",
                p = (e) => ({ type: S, payload: e }),
                _ = "rweb/recentSearches/REMOVE_QUERY",
                T =
                    (e) =>
                    (t, s, { userPersistence: r }) => {
                        t({ payload: e, type: _ });
                        const a = s(),
                            o = E(a);
                        return (0, n.Qb)(a) ? t(i(o)) : Promise.resolve();
                    },
                h = "rweb/recentSearches/CLEAR_ALL",
                f =
                    () =>
                    (e, t, { userPersistence: s }) => {
                        e({ type: h });
                        const r = t(),
                            a = E(r);
                        return (0, n.Qb)(r) ? e(i(a)) : Promise.resolve();
                    },
                I = "rweb/recentSearches/ADD_QUERY",
                C =
                    (e) =>
                    (t, s, { userPersistence: r }) => {
                        t({ payload: e, type: I });
                        const a = s(),
                            o = E(a);
                        return (0, n.Qb)(a) ? t(i(o)) : Promise.resolve();
                    },
                A =
                    () =>
                    (e, t, { userPersistence: s }) => {
                        const r = t();
                        return l(r)
                            ? Promise.resolve()
                            : e((e, t, { userPersistence: s }) => {
                                  const r = t();
                                  return (0, n.Qb)(r)
                                      ? s
                                            .get(o)
                                            .then((t) => {
                                                e(p(t));
                                            })
                                            .catch(() => {
                                                e(p());
                                            })
                                      : (e(p()), Promise.resolve());
                              });
                    };
            r.Z.register({
                [a]: function (e = d, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case I: {
                            const s = t.payload,
                                r = s ? c(s, e.recentSearches) : [];
                            return r.length > 49 && r.splice(49, 1), s && r.unshift(s), { ...e, recentSearches: r };
                        }
                        case _: {
                            const s = t.payload,
                                r = s ? c(s, e.recentSearches) : [];
                            return { ...e, recentSearches: r };
                        }
                        case h:
                            return { fetched: !0, recentSearches: [] };
                        case S:
                            return { ...e, ...t.payload, fetched: !0 };
                        default:
                            return e;
                    }
                },
            });
        },
        629196: (e, t, s) => {
            s.d(t, { r: () => d });
            s(136728);
            var r = s(161821),
                n = s(390387),
                a = s(836255),
                o = s(255117),
                i = s(166506),
                c = s(919022);
            const d =
                (e, t) =>
                (s, d, { api: E, featureSwitches: u }) =>
                    s(c.ZP.mute(e, t)).then(() => {
                        const t = d(),
                            c = (0, r.Z)(a.Z.selectAll(t)).reduce((s, r) => {
                                if (null != r)
                                    if (r.user === e) s[r.id_str] = !0;
                                    else if (r.retweeted_status) {
                                        const n = a.Z.select(t, r.retweeted_status);
                                        n?.user === e && (s[r.id_str] = !0);
                                    }
                                return s;
                            }, {}),
                            E = (0, n._h)(d()),
                            u = E ? [(0, o.ZP)({ useLatest: !1, userId: E }).removeTweets(c), (0, o.ZP)({ useLatest: !0, userId: E }).removeTweets(c)] : [],
                            l = (0, i.k9)();
                        if (l.selectInitialFetchStatus(t) && !l.selectCanRefresh(t)) {
                            const s = (0, i.f8)(e, t, l);
                            s && u.push(s);
                        }
                        return s(u);
                    });
        },
        123072: (e, t, s) => {
            s.d(t, { AW: () => T, UD: () => p, bP: () => _, xN: () => S });
            var r = s(816776),
                n = s(499627),
                a = s(917799),
                o = s(312771),
                i = s(390387);
            const c = "safeSearch",
                d = `rweb/${c}`,
                E = a.dg(d, "FETCH_SEARCH_SETTINGS"),
                u = a.dg(d, "UPDATE_SEARCH_SETTINGS"),
                l = { fetchStatus: o.ZP.NONE, searchSettings: {} };
            n.Z.register({
                [c]: function (e = l, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case E.REQUEST:
                            return { ...e, fetchStatus: o.ZP.LOADING };
                        case E.FAILURE:
                            return { ...e, fetchStatus: o.ZP.FAILED };
                        case E.SUCCESS:
                            return { ...e, searchSettings: t.payload || l.searchSettings, fetchStatus: o.ZP.LOADED };
                        case u.REQUEST: {
                            const { settingName: s, settingValue: r } = t.meta || {};
                            return { ...e, searchSettings: { ...e.searchSettings, [s]: r } };
                        }
                        default:
                            return e;
                    }
                },
            });
            const S = (e) => e[c].searchSettings,
                p = (e) => e[c].fetchStatus,
                _ =
                    () =>
                    (e, t, { api: s }) => {
                        const n = i.x0(t());
                        if (!n) return Promise.resolve(e({ type: E.FAILURE }));
                        return a._O(e, { params: { userId: n }, request: s.withEndpoint(r.Z).fetch })({ actionTypes: E, context: "FETCH_SEARCH_SETTINGS" });
                    },
                T =
                    (e, t) =>
                    (s, n, { api: o }) => {
                        const c = n(),
                            d = i.x0(c);
                        if (!d) return Promise.resolve(s({ type: E.FAILURE }));
                        const l = { ...S(c), userId: d };
                        l[e] = t;
                        return a.AB(s, { params: l, request: o.withEndpoint(r.Z).set })({ actionTypes: u, context: "ACTION_UPDATE_SEARCH_SETTINGS", meta: { settingName: e, settingValue: t } });
                    };
        },
        853568: (e, t, s) => {
            s.d(t, { U: () => r });
            const r = Object.freeze({ Filtering: "optInFiltering", Blocking: "optInBlocking" });
        },
        715684: (e, t, s) => {
            s.d(t, { Fm: () => L, TG: () => C, UD: () => O, _1: () => R, dj: () => m, kz: () => A });
            var r = s(24949),
                n = s(697926),
                a = s(744531),
                o = s(226395),
                i = s(499627),
                c = s(917799),
                d = s(312771);
            const E = `${s(291020).Y}/sessions`,
                u = `rweb/${E}`,
                l = c.dg(u, "FETCH_SESSIONS"),
                S = c.dg(u, "REVOKE_SESSION"),
                p = c.dg(u, "REVOKE_ALL_SESSIONS"),
                _ = { fetchStatus: d.ZP.NONE, sessions: {} };
            function T(e = _, t) {
                if (!t) return e;
                switch (t.type) {
                    case l.REQUEST:
                        return { ...e, fetchStatus: d.ZP.LOADING };
                    case l.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: d.ZP.FAILED };
                    case l.SUCCESS:
                        return { ...e, error: null, fetchStatus: d.ZP.LOADED, sessions: (0, n.Z)(f(t.payload), (e) => e.token) };
                    case S.SUCCESS:
                        return { ...e, sessions: (0, a.Z)(e.sessions, t.meta.hashed_token) };
                    default:
                        return e;
                }
            }
            i.Z.register({ [E]: T });
            function h(e) {
                return { token: e.hashed_token, name: e.device_name, summary: e.device_summary, icon_type: e.icon_type, is_current_session: e.is_current_session, location: e.location, last_seen_time_ms: e.last_seen_at };
            }
            const f = (e) => (e?.viewer?.user_results?.result?.sessions_list ? e.viewer.user_results.result.sessions_list : e.viewer?.user?.sessions_list ? e.viewer.user.sessions_list : e.sessions ? e.sessions.map(h) : []),
                I = (e) => e[E].sessions,
                C = (0, r.P1)(I, (e) => Object.values(e)),
                A = (e, t) => I(e)[t],
                O = (e) => e[E].fetchStatus,
                m = (e) => (t, s) => (O(s()) === d.ZP.LOADED ? Promise.resolve() : t(y(e))),
                y =
                    (e) =>
                    (t, s, { api: r }) =>
                        c._O(t, { params: e, request: r.withEndpoint(o.Z).fetchSessions })({ actionTypes: l, context: "FETCH_SESSIONS" }),
                R =
                    (e) =>
                    (t, s, { api: r }) => {
                        const n = { hashed_token: e };
                        return c._O(t, { params: n, request: r.withEndpoint(o.Z).revokeSession })({ actionTypes: S, context: "REVOKE_SESSION", meta: { hashed_token: e } });
                    },
                L =
                    (e) =>
                    (t, s, { api: r }) =>
                        c
                            ._O(t, { params: e, request: r.withEndpoint(o.Z).revokeAllSessions })({ actionTypes: p, context: "REVOKE_ALL_SESSIONS" })
                            .then(() => y()(t, s, { api: r }));
        },
        948985: (e, t, s) => {
            s.d(t, { $q: () => I, UD: () => C, wz: () => A, zw: () => O });
            var r = s(24949),
                n = s(166852),
                a = s(226395),
                o = s(499627),
                i = s(917799),
                c = s(312771),
                d = s(56519),
                E = s(502909),
                u = s(600823);
            const l = `${s(291020).Y}/applications`,
                S = `rweb/${l}`,
                p = i.dg(S, "FETCH_APPLICATIONS"),
                _ = { fetchStatus: c.ZP.NONE };
            function T(e = _, t) {
                if (!t) return e;
                switch (t.type) {
                    case p.REQUEST:
                        return { ...e, fetchStatus: c.ZP.LOADING };
                    case p.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: c.ZP.FAILED };
                    case p.SUCCESS:
                        return { ...e, error: null, fetchStatus: c.ZP.LOADED };
                    default:
                        return e;
                }
            }
            o.Z.register({ [l]: T });
            const h = {
                    revokeApplication: {
                        reducer: (e, t) => {
                            if (t.type === f.customActionTypes.revokeApplication.SUCCESS) {
                                const { revoked: s } = t.payload,
                                    { entityId: r } = t.meta,
                                    n = e.entities[r];
                                return { ...e, entities: { ...e.entities, [r]: { ...n, revoked: s } } };
                            }
                            return e;
                        },
                        getParams: (e) => ({ token: e }),
                        getApiMethod: (e) => e.withEndpoint(a.Z).revokeApplication,
                    },
                    revokeOauth2Token: {
                        reducer: (e, t) => {
                            if (t.type === f.customActionTypes.revokeOauth2Token.SUCCESS) {
                                const { revoked: s } = t.payload,
                                    { entityId: r } = t.meta,
                                    n = e.entities[r];
                                return { ...e, entities: { ...e.entities, [r]: { ...n, revoked: s } } };
                            }
                            return e;
                        },
                        getParams: (e) => ({ token_hash: e }),
                        getApiMethod: (e) => e.withEndpoint(a.Z).revokeOauth2Token,
                    },
                },
                f = (0, E.ZP)({ namespace: "applications", customActions: h });
            (f.selectUniqUnrevokedApps = (0, r.P1)(f.selectAll, (e) => {
                const t = Object.values(e).filter((e) => !0 !== e.revoked);
                return (0, n.Z)(t, (e) => e.app_id);
            })),
                (f.selectAppsById = (0, r.P1)(
                    f.selectAll,
                    (e, t) => t,
                    (e, t) => Object.values(e).filter((e) => e.app_id === t),
                ));
            const I = u.Z.register(f),
                C = (e) => e[l].fetchStatus,
                A = (e) => (t, s) => (C(s()) === c.ZP.LOADED ? Promise.resolve() : t(m(e))),
                O =
                    (e, t, s) =>
                    (s, r, { api: n }) => {
                        const a = r();
                        return f.selectAppsById(a, e).length > 0 ? Promise.resolve() : s(m(t));
                    },
                m =
                    (e) =>
                    (t, s, { api: r }) =>
                        i._O(t, { params: e, request: r.withEndpoint(a.Z).fetchApplications })({ actionTypes: p, context: "FETCH_APPLICATIONS" }, (e, t) => {
                            if (e) return [(0, d.dP)(e.entities)];
                        });
        },
        750238: (e, t, s) => {
            s.d(t, { Iv: () => S, UD: () => u, hW: () => E, q5: () => l });
            var r = s(226395),
                n = s(499627),
                a = s(917799),
                o = s(312771);
            const i = "backupCode",
                c = Object.freeze({ REQUEST: "rweb/backupCode/FETCH_BACKUP_CODE_REQUEST", SUCCESS: "rweb/backupCode/FETCH_BACKUP_CODE_SUCCESS", FAILURE: "rweb/backupCode/FETCH_BACKUP_CODE_FAILURE" }),
                d = { fetchStatus: o.ZP.NONE };
            n.Z.register({
                [i]: function (e = d, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case c.REQUEST:
                            return { ...e, fetchStatus: o.ZP.LOADING };
                        case c.SUCCESS: {
                            const s = t.payload && t.payload.codes;
                            return { ...e, backupCode: s && s[0], fetchStatus: o.ZP.LOADED };
                        }
                        case c.FAILURE:
                            return { ...e, fetchStatus: o.ZP.FAILED };
                        default:
                            return e;
                    }
                },
            });
            const E = (e) => e[i].backupCode,
                u = (e) => e[i].fetchStatus,
                l =
                    () =>
                    (e, t, { api: s }) =>
                        (0, a._O)(e, { request: s.withEndpoint(r.Z).fetchBackupCode })({ actionTypes: c, context: "FETCH_BACKUP_CODE" }),
                S =
                    () =>
                    (e, t, { api: s }) =>
                        (0, a._O)(e, { request: s.withEndpoint(r.Z).fetchNewBackupCode })({ actionTypes: c, context: "FETCH_BACKUP_CODE" });
        },
        116635: (e, t, s) => {
            s.d(t, { Af: () => l, UD: () => S, d0: () => p, iv: () => _ });
            var r = s(871176),
                n = s(499627),
                a = s(917799),
                o = s(312771),
                i = s(291020);
            const c = `${i.Y}/contacts`,
                d = `rweb/${i.Y}`,
                E = (0, a.dg)(d, "FETCH_ADDRESS_BOOK"),
                u = { cursor: null, contacts: [], fetchStatus: o.ZP.NONE };
            n.Z.register({
                [c]: function (e = u, t) {
                    if (!t) return e;
                    let s;
                    switch (t.type) {
                        case E.REQUEST:
                            return { ...e, fetchStatus: o.ZP.LOADING };
                        case E.SUCCESS:
                            return (s = t.payload.entities.vcards ? Object.values(t.payload.entities.vcards) : []), { ...e, contacts: [...e.contacts, ...s], cursor: t.payload.result.next_cursor, fetchStatus: o.ZP.LOADED };
                        case E.FAILURE:
                            return { ...e, error: t.payload, fetchStatus: o.ZP.FAILED };
                        default:
                            return e;
                    }
                },
            });
            const l = (e) => e[c].contacts,
                S = (e) => e[c].fetchStatus,
                p = (e) => (t, s) => (S(s()) === o.ZP.LOADED ? Promise.resolve() : t(T(e))),
                _ = (e) => (t, s) => {
                    const r = s(),
                        n = ((e) => e[c].cursor)(r);
                    return n && S(r) === o.ZP.LOADED ? t(T({ ...e, cursor: n })) : Promise.resolve();
                },
                T =
                    (e) =>
                    (t, s, { api: n }) =>
                        (0, a._O)(t, { request: n.withEndpoint(r.Z).fetchAddressBook, params: e })({ actionTypes: E, context: "FETCH_ADDRESS_BOOK" });
        },
        558477: (e, t, s) => {
            s.d(t, { Z: () => E });
            var r = s(226395),
                n = s(782826),
                a = s(917799),
                o = s(923488);
            const i = `rweb/${`${s(291020).Y}/deactivate`}`,
                c = (0, a.dg)(i, "DEACTIVATE_ACCOUNT"),
                d = () => n.ZP.navigateTo("/settings/deactivated"),
                E =
                    (e, t) =>
                    (s, n, { api: i }) =>
                        s((0, o.JH)()).then(() =>
                            s(
                                (
                                    (e, t) =>
                                    (s, n, { api: o }) =>
                                        (0, a._O)(s, { params: { password: e, deactivation_timespan: t }, request: o.withEndpoint(r.Z).deactivate })({ actionTypes: c, context: "DEACTIVATE_ACCOUNT" }).then(d)
                                )(e, t),
                            ),
                        );
        },
        823647: (e, t, s) => {
            s.d(t, { UD: () => p, jW: () => _, uc: () => T, zJ: () => f });
            var r = s(327202),
                n = s(499627),
                a = s(917799),
                o = s(312771),
                i = s(390387);
            const c = `${s(291020).Y}/email_notifications`,
                d = `rweb/${c}`,
                E = a.dg(d, "FETCH_EMAIL_NOTIFICATIONS"),
                u = a.dg(d, "UPDATE_EMAIL_NOTIFICATIONS"),
                l = { emailSettings: {}, error: null, fetchStatus: o.ZP.NONE };
            function S(e = l, t) {
                if (!t) return e;
                switch (t.type) {
                    case E.REQUEST:
                        return { ...e, fetchStatus: o.ZP.LOADING };
                    case E.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: o.ZP.FAILED };
                    case E.SUCCESS:
                        return { ...e, emailSettings: t.payload, error: null, fetchStatus: o.ZP.LOADED };
                    case u.SUCCESS:
                        return { ...e, emailSettings: { ...e.emailSettings, ...t.meta }, error: null, fetchStatus: o.ZP.LOADED };
                    default:
                        return e;
                }
            }
            n.Z.register({ [c]: S });
            const p = (e) => e[c].fetchStatus,
                _ = (e) => e[c].emailSettings,
                T = () => (e, t) => (p(t()) === o.ZP.LOADED ? Promise.resolve() : e(h())),
                h =
                    () =>
                    (e, t, { api: s }) => {
                        const n = i.x0(t());
                        return a._O(e, { params: { userId: n }, request: s.withEndpoint(r.Z).fetch })({ actionTypes: E, context: "FETCH_EMAIL_NOTIFICATIONS" });
                    },
                f =
                    (e) =>
                    (t, s, { api: n }) => {
                        const o = i.x0(s());
                        return a.AB(t, { params: { userId: o, settings: e }, request: n.withEndpoint(r.Z).update })({ actionTypes: u, context: "UPDATE_EMAIL_NOTIFICATIONS", meta: e });
                    };
        },
        446418: (e, t, s) => {
            s.d(t, { DG: () => C, DY: () => f, J2: () => I, UD: () => T, aX: () => A, vi: () => _, zl: () => h });
            var r = s(226395),
                n = s(499627),
                a = s(917799),
                o = s(312771),
                i = s(390387);
            const c = "loginVerification",
                d = "U2fSecurityKey",
                E = { REQUEST: "rweb/settings/loginVerification/FETCH_LOGIN_VERIFICATION_SETTINGS_REQUEST", SUCCESS: "rweb/settings/loginVerification/FETCH_LOGIN_VERIFICATION_SETTINGS_SUCCESS", FAILURE: "rweb/settings/loginVerification/FETCH_LOGIN_VERIFICATION_SETTINGS_FAILURE" },
                u = { REQUEST: "rweb/settings/loginVerification/DELETE_SECURITY_KEY_REQUEST", SUCCESS: "rweb/settings/loginVerification/DELETE_SECURITY_KEY_SUCCESS", FAILURE: "rweb/settings/loginVerification/DELETE_SECURITY_KEY_FAILURE" },
                l = { REQUEST: "rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_REQUEST", SUCCESS: "rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_SUCCESS", FAILURE: "rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_FAILURE" },
                S = { REQUEST: "rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_METHOD_REQUEST", SUCCESS: "rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_METHOD_SUCCESS", FAILURE: "rweb/settings/loginVerification/DISABLE_LOGIN_VERIFICATION_METHOD_FAILURE" },
                p = { isOldPushUser: !1, twoFactorAuthEnabled: !1, methods: {}, fetchStatus: o.ZP.NONE };
            n.Z.register({
                [c]: function (e = p, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case E.REQUEST:
                            return { ...e, fetchStatus: o.ZP.LOADING };
                        case E.SUCCESS: {
                            if (!t.payload) return e;
                            const { isOldPushUser: s, methods: r, twoFactorAuthEnabled: n } = t.payload;
                            return {
                                ...e,
                                isOldPushUser: s,
                                twoFactorAuthEnabled: n,
                                methods:
                                    r?.reduce((e, t) => {
                                        const { createdAtMs: s, externalDisplayName: r, id: n, twoFactorType: a } = t;
                                        if (a === d) {
                                            const t = { createdAtMs: s, id: n, name: r };
                                            e[a] = [...(e[a] || []), t];
                                        } else e[a] = n;
                                        return e;
                                    }, {}) || {},
                                fetchStatus: o.ZP.LOADED,
                            };
                        }
                        case E.FAILURE:
                            return { ...e, error: t.payload, fetchStatus: o.ZP.FAILED };
                        case l.REQUEST:
                            return { ...e, isOldPushUser: !1, twoFactorAuthEnabled: !1, methods: {} };
                        case S.SUCCESS: {
                            const s = (t && t.meta && t.meta.method) || "",
                                r = Object.keys(e.methods).reduce((t, r) => (r !== s && (t[r] = e.methods[r]), t), {});
                            return { ...e, methods: r };
                        }
                        case u.SUCCESS: {
                            if (!t.meta) return e;
                            const { methods: s } = e,
                                r = t.meta.securityKeyId,
                                n = Array.isArray(s[d]) ? s[d].filter((e) => e.id !== r) : null;
                            return { ...e, methods: { ...s, [d]: n } };
                        }
                        default:
                            return e;
                    }
                },
            });
            const _ = (e) => e[c],
                T = (e) => e[c].fetchStatus,
                h =
                    () =>
                    (e, t, { api: s, featureSwitches: n }) => {
                        const o = i.x0(t());
                        return (0, a._O)(e, { params: { userId: o }, request: s.withEndpoint(r.Z).fetchLoginVerificationSettings })({ actionTypes: E, context: "FETCH_LOGIN_VERIFICATION_SETTINGS" });
                    },
                f =
                    (e) =>
                    (t, s, { api: n }) =>
                        (0, a.Vg)(t, { params: e, request: n.withEndpoint(r.Z).enrollIn2FA })("TWO_FACTOR_ENROLLMENT"),
                I =
                    ({ securityKeyId: e }) =>
                    (t, s, { api: n }) =>
                        (0, a._O)(t, { request: n.withEndpoint(r.Z).disable2FAMethod, params: { methodId: e } })({ actionTypes: u, context: "DELETE_SECURITY_KEY", meta: { securityKeyId: e } }),
                C =
                    () =>
                    (e, t, { api: s }) =>
                        (0, a.AB)(e, { request: s.withEndpoint(r.Z).disable2FA })({ actionTypes: l, context: "DISABLE_LOGIN_VERIFICATION" }),
                A =
                    ({ method: e }) =>
                    (t, s, { api: n }) => {
                        const o = _(s()).methods[e];
                        return (0, a._O)(t, { request: n.withEndpoint(r.Z).disable2FAMethod, params: { methodId: o } })({ actionTypes: S, context: "DISABLE_LOGIN_VERIFICATION_METHOD", meta: { method: e } });
                    };
        },
        464107: (e, t, s) => {
            s.d(t, { Z: () => a });
            var r = s(226395),
                n = s(917799);
            const a =
                (e, t, s) =>
                (a, o, { api: i }) =>
                    (0, n.Vg)(a, { params: { current_password: e, password: t, password_confirmation: s }, request: i.withEndpoint(r.Z).changePassword })("CHANGE_PASSWORD");
        },
        618448: (e, t, s) => {
            s.d(t, { UD: () => u, n8: () => l, v$: () => E });
            var r = s(226395),
                n = s(499627),
                a = s(917799),
                o = s(312771);
            const i = "temporaryPassword",
                c = Object.freeze({ REQUEST: "rweb/temporaryPassword/FETCH_TEMPORARY_PASSWORD_REQUEST", SUCCESS: "rweb/temporaryPassword/FETCH_TEMPORARY_PASSWORD_SUCCESS", FAILURE: "rweb/temporaryPassword/FETCH_TEMPORARY_PASSWORD_FAILURE" }),
                d = { fetchStatus: o.ZP.NONE };
            n.Z.register({
                [i]: function (e = d, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case c.REQUEST:
                            return { ...e, fetchStatus: o.ZP.LOADING };
                        case c.SUCCESS: {
                            const s = t.payload && t.payload.temporary_password;
                            return { ...e, temporaryPassword: s, fetchStatus: o.ZP.LOADED };
                        }
                        case c.FAILURE:
                            return { ...e, fetchStatus: o.ZP.FAILED };
                        default:
                            return e;
                    }
                },
            });
            const E = (e) => e[i].temporaryPassword,
                u = (e) => e[i].fetchStatus,
                l =
                    () =>
                    (e, t, { api: s }) =>
                        (0, a._O)(e, { request: s.withEndpoint(r.Z).fetchTemporaryPassword })({ actionTypes: c, context: "FETCH_TEMPORARY_PASSWORD" });
        },
        61666: (e, t, s) => {
            s.d(t, { r: () => o });
            var r = s(38562),
                n = s(371493),
                a = s(131290);
            const o = (e) => (t, s) => {
                const o = { ...e };
                if (e.hasOwnProperty("personalized_trends")) {
                    if (!e.hasOwnProperty("trend_location_woeid")) {
                        const e = (0, a.um)(s());
                        o.trend_location_woeid = (e && e[0] && e[0].woeid) || "1";
                    }
                } else o.personalized_trends = !1;
                return t(r.VP(o)).then(() => t((0, n.$N)()));
            };
        },
        39699: (e, t, s) => {
            s.d(t, { B: () => r });
            const r = Object.freeze({ Daily: "Daily", Weekly: "Weekly", Periodically: "Periodically", None: "None" });
        },
        395042: (e, t, s) => {
            s.d(t, { El: () => E, HR: () => u, Zc: () => l });
            var r = s(226395),
                n = s(499627),
                a = s(917799);
            const o = "settings/usernames",
                i = "rweb/settings/usernames/CLEAR_USERNAME_AVAILABILITY",
                c = Object.freeze({ REQUEST: "rweb/settings/usernames/FETCH_USERNAMES_REQUEST", SUCCESS: "rweb/settings/usernames/FETCH_USERNAMES_SUCCESS", FAILURE: "rweb/settings/usernames/FETCH_USERNAMES_FAILURE" }),
                d = { isLoaded: !1 };
            const E = (e) => e[o],
                u =
                    (e) =>
                    (t, s, { api: n }) =>
                        (0, a._O)(t, { params: e, request: n.withEndpoint(r.Z).usernameAvailable })({ actionTypes: c, context: "FETCH_SETTINGS_USERNAME_AVAILABLE", meta: { username: e.username } }),
                l = (e) => ({ type: i, meta: e });
            n.Z.register({
                [o]: function (e = d, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case c.REQUEST:
                            return { ...e, isLoading: !0 };
                        case c.FAILURE:
                            return { ...e, isLoading: !1 };
                        case c.SUCCESS:
                            return { ...e, ...t.payload, username: t.meta.username, isLoading: !1 };
                        case i:
                            return { isLoading: !1, suggestions: t.meta?.persistSuggestions ? e.suggestions : void 0 };
                        default:
                            return e;
                    }
                },
            });
        },
        673110: (e, t, s) => {
            s.d(t, { Gv: () => S, UD: () => l });
            var r = s(226395),
                n = s(499627),
                a = s(917799),
                o = s(312771),
                i = s(291020);
            const c = "verifyPassword",
                d = `rweb/${i.Y}/${c}`,
                E = (0, a.dg)(d, "VERIFY_PASSWORD"),
                u = { fetchStatus: o.ZP.NONE };
            n.Z.register({
                [c]: function (e = u, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case E.REQUEST:
                            return { ...e, fetchStatus: o.ZP.LOADING };
                        case E.SUCCESS:
                            return { ...e, fetchStatus: o.ZP.LOADED };
                        case E.FAILURE:
                            return { ...e, error: t.payload, fetchStatus: o.ZP.FAILED };
                        default:
                            return e;
                    }
                },
            });
            const l = (e) => e[c].fetchStatus,
                S =
                    (e) =>
                    (t, s, { api: n }) =>
                        (0, a._O)(t, { params: { password: e }, request: n.withEndpoint(r.Z).verifyPassword })({ actionTypes: E, context: "VERIFY_PASSWORD" });
        },
        991851: (e, t, s) => {
            s.d(t, { CD: () => N, yb: () => h, oy: () => f, oo: () => w, JH: () => U, YQ: () => S, IZ: () => p, SN: () => _, Qy: () => T, PR: () => g });
            var r = s(118717),
                n = s(499627),
                a = s(226395),
                o = s(917799),
                i = s(312771);
            const c = "trends",
                d = "locations",
                E = Object.freeze({ REQUEST: "rweb/trends/placeTrendsLocations/FETCH_TRENDS_LOCATIONS_REQUEST", SUCCESS: "rweb/trends/placeTrendsLocations/FETCH_TRENDS_LOCATIONS_SUCCESS", FAILURE: "rweb/trends/placeTrendsLocations/FETCH_TRENDS_LOCATIONS_FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/trends/woeTrendsLocations/FETCH_TRENDS_LOCATIONS_REQUEST", SUCCESS: "rweb/trends/woeTrendsLocations/FETCH_TRENDS_LOCATIONS_SUCCESS", FAILURE: "rweb/trends/woeTrendsLocations/FETCH_TRENDS_LOCATIONS_FAILURE" }),
                l = { placeTrendsLocations: [], placeTrendsFetchStatus: i.ZP.NONE, woeTrendsLocations: [], woeTrendsFetchStatus: i.ZP.NONE };
            const S = (e) => e[c][d].placeTrendsLocations,
                p = (e) => e[c][d].placeTrendsFetchStatus,
                _ = (e) => e[c][d].woeTrendsLocations,
                T = (e) => e[c][d].woeTrendsFetchStatus,
                h =
                    (e) =>
                    (t, s, { api: r }) =>
                        o._O(t, { params: e, request: r.withEndpoint(a.Z).fetchPlaceTrendsLocations })({ actionTypes: E, context: "FETCH_TRENDS_LOCATIONS" }),
                f =
                    () =>
                    (e, t, { api: s }) =>
                        T(t()) === i.ZP.LOADED ? Promise.resolve() : e(I()),
                I =
                    () =>
                    (e, t, { api: s }) =>
                        o._O(e, { params: {}, request: s.withEndpoint(a.Z).fetchWoeTrendsLocations })({ actionTypes: u, context: "FETCH_TRENDS_LOCATIONS" });
            var C = s(401388),
                A = s(390387),
                O = s(371493);
            const m = "settings",
                y = Object.freeze({ REQUEST: "rweb/trends/UPDATE_TRENDS_SETTINGS_REQUEST", SUCCESS: "rweb/trends/UPDATE_TRENDS_SETTINGS_SUCCESS", FAILURE: "rweb/trends/UPDATE_TRENDS_SETTINGS_FAILURE" }),
                R = Object.freeze({ REQUEST: "rweb/trends/FETCH_TRENDS_SETTINGS_REQUEST", SUCCESS: "rweb/trends/FETCH_TRENDS_SETTINGS_SUCCESS", FAILURE: "rweb/trends/FETCH_TRENDS_SETTINGS_FAILURE" }),
                L = { settings: {}, fetchStatus: i.ZP.NONE };
            const w = (e) => e[c][m] && e[c][m].settings,
                U = (e) => e[c][m] && e[c][m].fetchStatus,
                N = () => (e, t) => (U(t()) === i.ZP.LOADED ? Promise.resolve() : e((e, t, { api: s }) => (A.Qb(t()) ? o._O(e, { request: s.withEndpoint(a.Z).fetchPlaceTrendSettings })({ actionTypes: R, context: "FETCH_TRENDS_SETTINGS" }) : Promise.resolve()))),
                g =
                    (e) =>
                    (t, s, { api: r }) => {
                        if ((0, C.Z)(e)) return Promise.resolve();
                        const { places: n, ...i } = e,
                            c = { ...i };
                        e.places && e.places.length && (c.places = e.places.map((e) => e.place_id));
                        return o
                            ._O(t, { params: c, request: r.withEndpoint(a.Z).updatePlaceTrendSettings })({ actionTypes: y, context: "UPDATE_TRENDS_SETTINGS", meta: e })
                            .then(() => t((0, O.$N)()));
                    },
                P = {
                    settings: function (e = L, t) {
                        if (!t) return e;
                        switch (t.type) {
                            case R.REQUEST:
                                return { ...e, fetchStatus: i.ZP.LOADING };
                            case R.SUCCESS:
                                return { ...e, settings: { ...e.settings, ...t.payload }, fetchStatus: i.ZP.LOADED };
                            case y.SUCCESS:
                                return { ...e, settings: { ...e.settings, ...t.meta }, fetchStatus: i.ZP.LOADED };
                            case R.FAILURE:
                                return { ...e, fetchStatus: i.ZP.FAILED };
                            default:
                                return e;
                        }
                    },
                    locations: function (e = l, t) {
                        if (!t) return e;
                        switch (t.type) {
                            case E.REQUEST:
                                return { ...e, placeTrendsFetchStatus: i.ZP.LOADING };
                            case E.FAILURE:
                                return { ...e, placeTrendsFetchStatus: i.ZP.FAILED };
                            case E.SUCCESS:
                                return t.payload ? { ...e, placeTrendsLocations: t.payload, placeTrendsFetchStatus: i.ZP.LOADED } : e;
                            case u.REQUEST:
                                return { ...e, woeTrendsFetchStatus: i.ZP.LOADING };
                            case u.FAILURE:
                                return { ...e, woeTrendsFetchStatus: i.ZP.FAILED };
                            case u.SUCCESS:
                                return t.payload ? { ...e, woeTrendsLocations: t.payload, woeTrendsFetchStatus: i.ZP.LOADED } : e;
                            default:
                                return e;
                        }
                    },
                },
                D = (0, r.UY)(P);
            n.Z.register({ [c]: D });
        },
        336429: (e, t, s) => {
            s.d(t, { R: () => S });
            var r = s(745123),
                n = s(218951),
                a = (s(136728), s(192337)),
                o = s(650706),
                i = s(466015),
                c = s(409438);
            const d = (e, t = {}) => {
                    const { cursor: s } = t,
                        r = [];
                    if (e.result.users.length > 0) {
                        let t = (s && "object" == typeof s ? s.sortValue : Date.now()) - 1;
                        e.result.users.forEach((e) => {
                            r.push(i.$0({ id: e, sortIndex: `${t}`, displayType: c.Z.UserDetailed })), (t -= 1);
                        }),
                            r.push(...E(e, t));
                    }
                    return u(r, e.entities, l);
                },
                E = (e, t) => {
                    const { next_cursor_str: s } = e.result;
                    if ("0" === s) return [];
                    return [a.Tx({ cursorType: a.CursorType.Bottom, value: { param: "cursor", id: s || "-1", sortValue: t }, sortIndex: `${t}` })];
                },
                u = (e, t, s) => ({ globalObjects: t, timeline: { responseObjects: s, instructions: e.length ? [{ type: o.Z.AddEntries, parameters: { entries: e } }] : [] } }),
                l = { feedbackActions: {} },
                S = (e) =>
                    (0, n.Z)({
                        timelineId: `deviceFollowingLegacy-${e}`,
                        network: {
                            getEndpoint: (e) => {
                                return (
                                    (t = e.withEndpoint(r.Z).fetchFollowing),
                                    ({ cursor: e, ...s }, r) => {
                                        let n = s;
                                        return e && "object" == typeof e && (n = { ...s, [e.param]: e.id }), t(n, r);
                                    }
                                );
                                var t;
                            },
                            getEndpointParams: (t) => ({ ...t, user_id: e, type: "sms,live" }),
                        },
                        context: "FETCH_FOLLOWING",
                        perfKey: "deviceFollowingLegacy",
                        formatResponse: d,
                    });
        },
        935929: (e, t, s) => {
            s.d(t, { L: () => c, X: () => i });
            var r = s(919299),
                n = s(750085),
                a = s(919022),
                o = s(218951);
            const i = (e) => (0, o.Z)({ timelineId: `dmMutedUsersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchDMMutedUsers, getEndpointParams: (t) => ({ user_id: e, ...t }) }, context: "FETCH_DM_MUTED_USERS", perfKey: "dmMutedUsersGraphql", formatResponse: n.Z }),
                c = (e) => (t, s) => {
                    const r = s();
                    t(
                        e
                            .selectEntries(r)
                            .filter((e) => {
                                const t = e.content.id,
                                    s = a.ZP.select(r, t);
                                return s && !s.dm_muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                };
        },
        371493: (e, t, s) => {
            s.d(t, { $N: () => I, G0: () => f, Jj: () => C, O9: () => p, S: () => _, fy: () => T, jz: () => A, nm: () => h, qk: () => u, uI: () => l });
            var r = s(912021),
                n = s(644829),
                a = s(740527),
                o = s(750085),
                i = s(555875),
                c = s(899105),
                d = s(218951);
            const E = Object.freeze({ Trends: "trends" }),
                u = Object.freeze({ WebSidebar: "web_sidebar" }),
                l = "explore-",
                S = 9e5;
            const p = ({ contentType: e, displayLocation: t, exploreGraphQLEnabled: s = !1, focalTweetId: r, includePageConfiguration: o = !1, initialTabId: i, profileUserId: E }) => {
                    const u = e || t || "main",
                        p = (function (e, t, s, r) {
                            return s ? `${e}${t}-tweet-${s}` : r ? `${e}${t}-user-${r}` : `${e}${t}`;
                        })(s ? "explore-graphql-" : l, u, r, E),
                        _ = { timelineId: p, formatResponse: c.Z, network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchExplore, getEndpointParams: (s) => ({ ...s, candidate_source: e, display_location: t, focal_tweet_id: r, include_page_configuration: o, initial_tab_id: i, profile_user_id: E, entity_tokens: !1 }) }, context: s ? "FETCH_EXPLORE_GQL" : "FETCH_EXPLORE", perfKey: `${l}${u}`, staleIntervalMs: S };
                    return s ? (0, d.Z)({ ..._, formatResponse: a.Z, network: { ..._.network, getEndpoint: (e) => e.withEndpoint(n.Z).fetchExploreGraphQL } }) : (0, d.Z)(_);
                },
                _ = () => {
                    const e = "explore-sidebar-gql",
                        t = { timelineId: e, formatResponse: o.Z, network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchExploreSidebarGraphQL, getEndpointParams: () => ({}) }, context: "FETCH_EXPLORE_SIDEBAR", perfKey: e, staleIntervalMs: S };
                    return (0, d.Z)(t);
                },
                T = (e, t) => p({ exploreGraphQLEnabled: e, includePageConfiguration: !0, initialTabId: t }),
                h = (0, r.Z)((e) => p({ exploreGraphQLEnabled: e, contentType: E.Trends })),
                f = (0, r.Z)((e) => p({ exploreGraphQLEnabled: e, displayLocation: u.WebSidebar })),
                I = () => (e, t) =>
                    e(
                        (0, i.CY)(t())
                            .filter((e) => 0 === e.indexOf(l))
                            .map((e) => (0, i.$q)(e)),
                    ),
                C = (e) => {
                    const t = `trend-relevant-users-${e}-gql`,
                        s = { timelineId: t, formatResponse: o.Z, network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchTrendRelevantUsersGraphQL, getEndpointParams: () => ({ trendId: e }) }, context: "FETCH_TREND_RELEVANT_USERS", perfKey: t, staleIntervalMs: S };
                    return (0, d.Z)(s);
                },
                A = (e) => (0, d.Z)({ timelineId: `trendingEventHistoryGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchTrendHistory, getEndpointParams: () => ({ trendId: e }) }, formatResponse: o.Z, context: "FETCH_TREND_HISTORY", perfKey: "trendingEventHistoryGraphQL" });
        },
        166506: (e, t, s) => {
            s.d(t, { du: () => E, f8: () => u, k9: () => d });
            var r = s(503768),
                n = s(750085),
                a = s(962741),
                o = s(466015),
                i = s(919022),
                c = s(218951);
            const d = () => (0, c.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                E = (e) => (t, s) => {
                    const r = s();
                    t(
                        e
                            .selectEntries(r)
                            .filter((e) => {
                                const t = e.type === a.ZP.User ? e.content.id : "",
                                    s = i.ZP.select(r, t);
                                return s && !s.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, s) => {
                    if (!s.selectEntries(t).find((t) => t.type === a.ZP.User && t.content.id === e)) {
                        const t = (0, o.OD)(e),
                            r = (0, o.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return s.injectEntry(r);
                    }
                };
        },
        774006: (e, t, s) => {
            s.d(t, { Z: () => _, u: () => p });
            var r = s(644829),
                n = s(750085),
                a = s(903019),
                o = s(883432),
                i = s(555875),
                c = s(218951);
            const d = "search-",
                E = " near:me",
                u = " filter:follows",
                l = { [a.N3.Image]: { result_filter: a.N3.Image }, [a.N3.List]: { result_filter: a.N3.List }, [a.N3.Live]: { tweet_search_mode: a.N3.Live }, [a.N3.Media]: { result_filter: a.N3.Media }, [a.N3.Top]: {}, [a.N3.User]: { result_filter: a.N3.User }, [a.N3.Video]: { result_filter: a.N3.Video } },
                S = (e) => (((e) => e === o.Z.SpellingCorrectionRevertClick || e === o.Z.SpellingExpansionRevertClick)(e) ? "-revert" : ""),
                p = () => (e, t) => {
                    e(
                        (0, i.CY)(t())
                            .filter((e) => 0 === e.indexOf(d))
                            .map((e) => (0, i.$q)(e)),
                    );
                },
                _ = ({ query: e, searchMode: t = a.N3.Top, querySource: s, searchFilters: o, vertical: i, urtEndpointOptions: p, searchTimelinesGraphQLEnabled: _ }) => {
                    const T = S(s),
                        h = o && o.peopleFilter ? "searcher_follows" : void 0,
                        f = h ? "-pf" : "",
                        I = o && o.locationFilter && !e.includes(E) ? `${e}${E}` : e,
                        C = { timelineId: `${d}${I}-${t}${T}${f}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchSearch, getEndpointParams: (e) => ({ ...p?.requestParams, q: I, social_filter: h, vertical: i, ...l[t], ...e }) }, context: "FETCH_SEARCH_TIMELINE", perfKey: "search", staleIntervalMs: t === a.N3.Live ? 5e3 : void 0, timelineType: "search" };
                    if (_) {
                        const e = h && !I.includes(u) ? `${I}${u}` : I,
                            o = ((e) => {
                                switch (e) {
                                    case a.N3.Image:
                                        return "Photos";
                                    case a.N3.List:
                                        return "Lists";
                                    case a.N3.Media:
                                        return "Media";
                                    case a.N3.Top:
                                        return "Top";
                                    case a.N3.User:
                                        return "People";
                                    case a.N3.Video:
                                        return "Videos";
                                    case a.N3.Live:
                                    default:
                                        return "Latest";
                                }
                            })(t),
                            i = `gql-${d}${I}-${t}${T}${f}`;
                        return (0, c.Z)({ ...C, timelineId: i, context: "FETCH_SEARCH_GRAPHQL_TIMELINE", formatResponse: n.Z, network: { getEndpointParams: ({ count: t, cursor: r }) => ({ rawQuery: e, count: t, product: o, querySource: s, cursor: "string" == typeof r ? r : void 0 }), getEndpoint: (e) => e.withEndpoint(r.Z).fetchSearchGraphQL } });
                    }
                    return (0, c.Z)(C);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-8ed0fac5.5909d60a.js.map

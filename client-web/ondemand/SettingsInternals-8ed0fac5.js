"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-8ed0fac5"],
    {
        883432: (e, t, r) => {
            r.d(t, { Z: () => s });
            const s = { AdvancedSearchPage: "advanced_search_page", CashtagClick: "cashtag_click", HashtagClick: "hashtag_click", PromotedTrendClick: "promoted_trend_click", RecentSearchClick: "recent_search_click", SavedSearchClick: "saved_search_click", RelatedQueryClick: "related_query_click", SpellingCorrectionClick: "spelling_correction_click", SpellingCorrectionRevertClick: "spelling_suggestion_revert_click", SpellingExpansionClick: "spelling_expansion_click", SpellingExpansionRevertClick: "spelling_expansion_revert_click", SpellingSuggestionClick: "spelling_suggestion_click", TrendClick: "trend_click", TrendView: "trend_view", TypeaheadClick: "typeahead_click", Typed: "typed_query", TVSearch: "TvSearch", TweetDetailQuoteTweet: "tdqt", TweetDetailSimilarPost: "tweet_detail_similar_posts" };
        },
        988823: (e, t, r) => {
            r.d(t, { M: () => o });
            var s = r(807896),
                n = r(202784),
                a = r(190286);
            const o = (e) => (t) => {
                const [r, o] = n.useState(null),
                    i = (e) =>
                        new Promise((t, r) => {
                            o({ resolve: t, reject: r, confirmationSheetProps: e });
                        });
                if (r) {
                    const { confirmationSheetProps: e, reject: t, resolve: i } = r;
                    return n.createElement(
                        a.Z,
                        (0, s.Z)({}, e, {
                            onCancel: () => {
                                t(), o(null);
                            },
                            onConfirm: () => {
                                i(), o(null);
                            },
                        }),
                    );
                }
                return n.createElement(e, (0, s.Z)({}, t, { confirm: i }));
            };
        },
        296196: (e, t, r) => {
            r.r(t),
                r.d(t, {
                    GLOBAL_STATE_KEY: () => _.Yf,
                    acceptConversation: () => a.tF,
                    addAvatarMedia: () => a._D,
                    addParticipants: () => a.ck,
                    addRecentSearches: () => g,
                    addWelcomeMessageToConversation: () => a.Qe,
                    clearRecentSearch: () => P,
                    clearRecentSearches: () => F,
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
                    fetchUpdates: () => D.f9,
                    fetchUpdatesIfNeeded: () => D.hd,
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
                    selectSearchConversations: () => w,
                    selectSearchFetchStatus: () => U,
                    selectUnreadCount: () => i.Sb,
                    selectUntrustedConversationCount: () => i.Oq,
                    selectUntrustedCounts: () => i.Re,
                    selectUntrustedCursor: () => i.aB,
                    selectUntrustedLowQualityConversationCount: () => i.ZI,
                    selectUntrustedLowQualityCursor: () => i.Gk,
                    selectUntrustedUnreadCount: () => i.k5,
                    selectUpdates: () => D.o8,
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
            var s = r(118717),
                n = r(499627),
                a = r(613195),
                o = r(627279),
                i = r(720277),
                c = (r(136728), r(468811)),
                d = r.n(c),
                E = r(948322),
                u = r(917799),
                l = r(312771),
                S = r(390387),
                p = r(849585),
                _ = r(147143);
            const T = "rweb.recentDMSearches",
                h = Object.freeze({ REQUEST: "rweb/directMessages/SEARCH_REQUEST", SUCCESS: "rweb/directMessages/SEARCH_SUCCESS", FAILURE: "rweb/directMessages/SEARCH_FAILURE" }),
                C = "rweb/directMessages/ADD_RECENT_SEARCHES",
                I = (e) => ({ payload: e, type: C }),
                f = "rweb/directMessages/CLEAR_SEARCH_CACHE",
                A = () => ({ type: f }),
                O = "rweb/directMessages/CLEAR_RECENT_SEARCH",
                R = "rweb/directMessages/CLEAR_RECENT_SEARCHES",
                m = { searchResults: {}, recentSearches: [] };
            function y(e = m, t) {
                if (!t) return e;
                switch (t.type) {
                    case C:
                    case O:
                        return { ...e, recentSearches: t.payload || [] };
                    case R:
                        return { ...e, recentSearches: [] };
                    case h.REQUEST: {
                        const { fetchNextPage: r, preserveResults: s, query: n } = t.meta || {},
                            a = e.searchResults ? e.searchResults[n] : {},
                            o = { ...e.searchResults, [n]: { ...a, fetchStatus: s || r ? a?.fetchStatus : l.ZP.LOADING } };
                        return { ...e, searchResults: o };
                    }
                    case h.FAILURE: {
                        const { fetchNextPage: r, preserveResults: s, query: n } = t.meta || {},
                            a = e.searchResults ? e.searchResults[n] : {},
                            o = { ...e.searchResults, [n]: { ...a, fetchStatus: s || r ? a?.fetchStatus : l.ZP.FAILED, error: t.payload } };
                        return { ...e, searchResults: o };
                    }
                    case h.SUCCESS: {
                        const { query: r } = t.meta || {},
                            s = t.payload && t.payload.result ? t.payload.result : null,
                            { conversations: n, error: a } = s || {},
                            o = s?.conversationIds ? s.conversationIds : n ? Object.keys(n) : [],
                            i = e.searchResults ? e.searchResults[r] : {},
                            c = i?.conversationIds || [],
                            d = c.length && o ? c.concat(o.filter((e) => !c.includes(e))) : o,
                            E = { ...e.searchResults, [r]: { ...i, lastCursor: s?.cursor, conversationIds: d, error: a, fetchStatus: l.ZP.LOADED } };
                        return { ...e, searchResults: E };
                    }
                    case f:
                    case p.t:
                        return { ...m, recentSearches: e.recentSearches };
                    default:
                        return e;
                }
            }
            const L = (e) => e[_.Yf].search?.recentSearches,
                U = (e, t) => {
                    const r = e[_.Yf].search?.searchResults;
                    if (r) {
                        const e = r[t];
                        return e?.fetchStatus || l.ZP.NONE;
                    }
                    return l.ZP.NONE;
                },
                w = (e, t) => {
                    const r = e[_.Yf].search?.searchResults;
                    return (r && r[t]?.conversationIds) || [];
                },
                N =
                    (e) =>
                    (t, r, { api: s }) => {
                        const n = r(),
                            { fetchNextPage: a, preserveResults: o, query: c } = e || {},
                            l = { query: c, search_type: "conversations", request_id: d().v4() },
                            S = ((e, t) => {
                                const r = e[_.Yf].search?.searchResults;
                                return (r && r[t]?.lastCursor) || null;
                            })(n, c),
                            p = ((e) => e[_.Yf].search?.searchResults)(n),
                            T = p ? p[c] : void 0,
                            C = !!S;
                        S && c && a && (l.cursor = S);
                        const I = u._O(t, { params: l, request: s.withEndpoint(E.Z).search }),
                            f = (e) => {
                                if (e && e.result) {
                                    const { conversations: t } = e.result,
                                        { users: r } = e.entities;
                                    return t && Object.values(t).forEach((e) => (e.isSearchResult = !0)), t ? (0, i.s0)({ conversations: t, users: r }) : null;
                                }
                            };
                        return !T || T?.error || o || (a && C) ? I({ actionTypes: h, context: "SEARCH", meta: { query: l.query, cursor: l.cursor, preserveResults: o, fetchNextPage: a } }, f) : (t({ type: "rweb/directMessages/SEARCH_SUCCESS", payload: { result: T }, meta: { query: c, cursor: S } }), Promise.resolve());
                    },
                g =
                    (e) =>
                    (t, r, { featureSwitches: s, userPersistence: n }) => {
                        const a = s.getNumberValue("dm_inbox_search_max_recent_searches_stored");
                        return n.get(T).then((r) => {
                            const s = r?.recentSearches || [];
                            return !s.includes(e) && s.push(e), s.length > a && s.shift(), t(I(s)), n.set(T, { recentSearches: s });
                        });
                    },
                P =
                    (e) =>
                    (t, r, { userPersistence: s }) =>
                        s.get(T).then((r) => {
                            const n = r?.recentSearches || [];
                            return n.splice(n.indexOf(e), 1), t({ payload: n, type: O }), s.set(T, { recentSearches: n });
                        }),
                F =
                    () =>
                    (e, t, { userPersistence: r }) => (e({ type: R }), r.set(T, { recentSearches: [] }));
            n.Z.register(
                { [_.Yf]: y },
                () =>
                    (e, t, { userPersistence: r }) =>
                        S.Qb(t())
                            ? Promise.resolve(
                                  r.get(T).then((t) => {
                                      const r = t?.recentSearches;
                                      r && e(I(r));
                                  }),
                              ).then(() => {})
                            : Promise.resolve(),
            );
            var D = r(923965);
            const v = (0, s.UY)({ conversations: a.ZP, entries: o.ZP, inbox: i.ZP, search: y, updates: D.ZP });
            n.Z.register({ [_.Yf]: v });
            const Z = v;
        },
        806528: (e, t, r) => {
            r.d(t, { Bz: () => d, ZW: () => p, ey: () => u, fw: () => i, iG: () => S, wM: () => c });
            var s = r(499627),
                n = r(341276);
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
                            const r = { timestamp: t.timestamp, coords: { latitude: t.coords.latitude, longitude: t.coords.longitude, altitude: t.coords.altitude, accuracy: t.coords.accuracy, altitudeAccuracy: t.coords.altitudeAccuracy, heading: t.coords.heading, speed: t.coords.speed } };
                            return e(r);
                        }, t),
                    );
            s.Z.register({
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
        341276: (e, t, r) => {
            r.d(t, { M: () => n, S: () => s });
            const s = Object.freeze({ granted: "granted", denied: "denied", prompt: "prompt" }),
                n = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 });
        },
        642721: (e, t, r) => {
            r.d(t, { $o: () => U, AE: () => v, Lk: () => O, R_: () => Z, UD: () => f, UK: () => R, WW: () => I, ck: () => b, fd: () => C, kM: () => D, mz: () => A, xZ: () => F });
            var s = r(745978),
                n = r(499627),
                a = r(917799),
                o = r(312771);
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
                    case y:
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
            const C = (e) => e[i].discouragedKeywords,
                I = (e) => e[i].mutedKeywords,
                f = (e) => e[i].fetchStatus,
                A = (e, t) => e[i].mutedKeywords.find((e) => e.id === t),
                O = (e, t) => e[i].defaultOptions,
                R =
                    () =>
                    (e, t, { userPersistence: r }) =>
                        C(t()).length
                            ? Promise.resolve()
                            : r.get(c, d).then((s) => {
                                  const { discouragedKeywords: n } = s || {};
                                  return n && n.length ? (e(L(n)), Promise.resolve()) : e(m()).then(() => r.set(c, { discouragedKeywords: C(t()) }));
                              }),
                m =
                    (e = {}) =>
                    (t, r, { api: n }) =>
                        a._O(t, { params: e, request: n.withEndpoint(s.Z).fetchDiscouragedKeywords })({ actionTypes: u, context: "FETCH_DISCOURAGED_KEYWORDS" }),
                y = `${E}/INIT_DISCOURAGED_KEYWORDS`,
                L = (e) => ({ type: y, payload: { discouraged_keywords: e } }),
                U = () => (e, t) => (f(t()) === o.ZP.LOADED ? Promise.resolve() : e(w())),
                w =
                    (e) =>
                    (t, r, { api: n }) =>
                        a._O(t, { params: e, request: n.withEndpoint(s.Z).fetchMutedKeywords })({ actionTypes: l, context: "FETCH_MUTED_KEYWORDS" }),
                N = `${E}/SET_DEFAULT_OPTIONS`,
                g = `${E}/DEFAULT_OPTIONS_LOADED`,
                P = (e) => ({ type: N, payload: { default_options: e } }),
                F =
                    () =>
                    (e, t, { userPersistence: r }) =>
                        t()[i].defaultOptionsLoaded
                            ? Promise.resolve()
                            : r.get(c, d).then((t) => {
                                  if (t && t.defaultOptions) {
                                      const { defaultOptions: r } = t;
                                      e(P(r));
                                  }
                                  e({ type: g });
                              }),
                D =
                    (e) =>
                    (t, r, { userPersistence: s }) => (t(P(e)), s.set(c, { defaultOptions: e })),
                v =
                    (e) =>
                    (t, r, { api: n }) =>
                        a._O(t, { params: e, request: n.withEndpoint(s.Z).addMutedKeyword })({ actionTypes: S, context: "ACTION_ADD_MUTED_KEYWORD", meta: { params: e } }),
                Z =
                    (e) =>
                    (t, r, { api: n }) => {
                        const o = { ids: e.join(",") };
                        return a._O(t, { params: o, request: n.withEndpoint(s.Z).deleteMutedKeyword })({ actionTypes: p, context: "ACTION_DELETE_MUTED_KEYWORD", meta: { ids: e } });
                    },
                b =
                    (e) =>
                    (t, r, { api: n }) =>
                        a._O(t, { params: e, request: n.withEndpoint(s.Z).updateMutedKeyword })({ actionTypes: _, context: "ACTION_UPDATE_MUTED_KEYWORD", meta: { params: e } });
            n.Z.register({ [i]: h });
        },
        450476: (e, t, r) => {
            r.d(t, { Ob: () => _, SW: () => C, UD: () => p, Y0: () => h, ky: () => S });
            var s = r(226395),
                n = r(499627),
                a = r(917799),
                o = r(312771);
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
                    (e, t, { api: r, userPersistence: s }) =>
                        p(t()) === o.ZP.LOADED ? Promise.resolve() : s.get(c, 24e4).then((t) => e(t ? { payload: t, type: d.SUCCESS } : T())),
                T =
                    () =>
                    (e, t, { api: r, userPersistence: n }) =>
                        a
                            ._O(e, { request: r.withEndpoint(s.Z).fetchNotificationFilters })({ actionTypes: d, context: "FETCH_NOTIFICATION_FILTERS" })
                            .then((e) => (n.set(c, S(t())), e)),
                h =
                    (e) =>
                    (t, r, { api: n, userPersistence: o }) =>
                        a
                            .AB(t, { params: { [e]: !0 }, request: n.withEndpoint(s.Z).updateNotificationFilters })({ actionTypes: E, context: "ACTION_ENABLE_NOTIFICATION_FILTER", meta: { filterName: e } })
                            .then((e) => {
                                o.set(c, S(r()));
                            }),
                C =
                    (e) =>
                    (t, r, { api: n, userPersistence: o }) =>
                        a
                            .AB(t, { params: { [e]: !1 }, request: n.withEndpoint(s.Z).updateNotificationFilters })({ actionTypes: u, context: "ACTION_DISABLE_NOTIFICATION_FILTER", meta: { filterName: e } })
                            .then((e) => {
                                o.set(c, S(r()));
                            });
        },
        694180: (e, t, r) => {
            r.d(t, { cM: () => T, dS: () => _, iY: () => h });
            var s = r(370751),
                n = r(399896),
                a = r(663550),
                o = r(499627),
                i = r(917799);
            const c = {},
                d = Object.freeze({ REQUEST: "rweb/promotedContent/LOG_REQUEST", SUCCESS: "rweb/promotedContent/LOG_SUCCESS", FAILURE: "rweb/promotedContent/LOG_FAILURE" }),
                E = "rweb/promotedContent/LOG_UNIQUE_EVENT",
                u = (0, s.Z)([a.dx.IMPRESSION, a.dx.DWELL]),
                l = (0, s.Z)([a.AJ.TREND_VIEW, a.AJ.SPOTLIGHT_IMPRESSION]),
                S = (e) => ({ payload: { eventKey: e }, type: E });
            const p = (e, t) => !!e.promotedContent[t],
                _ =
                    (e) =>
                    (t, r, { api: s }) => {
                        const { event: a, impression_id: o, promoted_trend_id: c } = e,
                            E = `trend-${c}-${a}`;
                        if (l.has(a) && p(r(), E)) return Promise.resolve();
                        const u = { promoted_trend_id: c, event: a, impression_id: o };
                        return (0, i._O)(t, { params: u, request: s.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: u }, (e, t) => {
                            if (!t && l.has(a)) return [S(E)];
                        });
                    },
                T =
                    ({ disclosureType: e, itemId: t, itemType: r, params: s }) =>
                    (a, o, { api: c }) => {
                        const { event: E, impression_id: l } = s,
                            _ = `${r}-${t ?? "undefined"}-${l ?? "undefined"}-${E ?? "undefined"}`;
                        if (u.has(E) && p(o(), _)) return Promise.resolve();
                        const T = e && "earned" === e.toLowerCase() ? "1" : null,
                            h = { ...s, earned: T, epoch_ms: Date.now() };
                        return (0, i._O)(a, { params: h, request: c.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: h }, (e, t) => {
                            if (!t && u.has(E)) return [S(_)];
                        });
                    },
                h =
                    (e) =>
                    (t, r, { api: s }) =>
                        (0, i._O)(t, { params: e, request: s.withEndpoint(n.Z).log })({ actionTypes: d, context: "APP_PROMOTED_CONTENT_LOG", meta: e });
            o.Z.register({
                promotedContent: function (e = c, t) {
                    if (!t) return e;
                    if (t.type === E) {
                        if (!t.payload) return e;
                        const { eventKey: r } = t.payload;
                        return { ...e, [r]: !0 };
                    }
                    return e;
                },
            });
        },
        204744: (e, t, r) => {
            r.d(t, { DI: () => f, H$: () => l, OB: () => A, Ww: () => E, YB: () => u, hj: () => T, qF: () => C });
            r(901951);
            var s = r(499627),
                n = r(390387);
            const a = "recentSearches",
                o = "rweb.recentSearches",
                i =
                    (e) =>
                    (t, r, { userPersistence: s }) =>
                        s.set(o, { recentSearches: e }).catch(() => {
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
            const E = (e) => e[a].recentSearches,
                u = (e) => E(e)[0] || null,
                l = (e) => e[a].fetched,
                S = "rweb/recentSearches/INIT_FROM_CACHE",
                p = (e) => ({ type: S, payload: e }),
                _ = "rweb/recentSearches/REMOVE_QUERY",
                T =
                    (e) =>
                    (t, r, { userPersistence: s }) => {
                        t({ payload: e, type: _ });
                        const a = r(),
                            o = E(a);
                        return (0, n.Qb)(a) ? t(i(o)) : Promise.resolve();
                    },
                h = "rweb/recentSearches/CLEAR_ALL",
                C =
                    () =>
                    (e, t, { userPersistence: r }) => {
                        e({ type: h });
                        const s = t(),
                            a = E(s);
                        return (0, n.Qb)(s) ? e(i(a)) : Promise.resolve();
                    },
                I = "rweb/recentSearches/ADD_QUERY",
                f =
                    (e) =>
                    (t, r, { userPersistence: s }) => {
                        t({ payload: e, type: I });
                        const a = r(),
                            o = E(a);
                        return (0, n.Qb)(a) ? t(i(o)) : Promise.resolve();
                    },
                A =
                    () =>
                    (e, t, { userPersistence: r }) => {
                        const s = t();
                        return l(s)
                            ? Promise.resolve()
                            : e((e, t, { userPersistence: r }) => {
                                  const s = t();
                                  return (0, n.Qb)(s)
                                      ? r
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
            s.Z.register({
                [a]: function (e = d, t) {
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
        629196: (e, t, r) => {
            r.d(t, { r: () => d });
            r(136728);
            var s = r(161821),
                n = r(390387),
                a = r(836255),
                o = r(255117),
                i = r(166506),
                c = r(919022);
            const d =
                (e, t) =>
                (r, d, { api: E, featureSwitches: u }) =>
                    r(c.ZP.mute(e, t)).then(() => {
                        const t = d(),
                            c = (0, s.Z)(a.Z.selectAll(t)).reduce((r, s) => {
                                if (null != s)
                                    if (s.user === e) r[s.id_str] = !0;
                                    else if (s.retweeted_status) {
                                        const n = a.Z.select(t, s.retweeted_status);
                                        n?.user === e && (r[s.id_str] = !0);
                                    }
                                return r;
                            }, {}),
                            E = (0, n._h)(d()),
                            u = E ? [(0, o.ZP)({ useLatest: !1, userId: E }).removeTweets(c), (0, o.ZP)({ useLatest: !0, userId: E }).removeTweets(c)] : [],
                            l = (0, i.k9)();
                        if (l.selectInitialFetchStatus(t) && !l.selectCanRefresh(t)) {
                            const r = (0, i.f8)(e, t, l);
                            r && u.push(r);
                        }
                        return r(u);
                    });
        },
        123072: (e, t, r) => {
            r.d(t, { AW: () => T, UD: () => p, bP: () => _, xN: () => S });
            var s = r(816776),
                n = r(499627),
                a = r(917799),
                o = r(312771),
                i = r(390387);
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
                            const { settingName: r, settingValue: s } = t.meta || {};
                            return { ...e, searchSettings: { ...e.searchSettings, [r]: s } };
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
                    (e, t, { api: r }) => {
                        const n = i.x0(t());
                        if (!n) return Promise.resolve(e({ type: E.FAILURE }));
                        return a._O(e, { params: { userId: n }, request: r.withEndpoint(s.Z).fetch })({ actionTypes: E, context: "FETCH_SEARCH_SETTINGS" });
                    },
                T =
                    (e, t) =>
                    (r, n, { api: o }) => {
                        const c = n(),
                            d = i.x0(c);
                        if (!d) return Promise.resolve(r({ type: E.FAILURE }));
                        const l = { ...S(c), userId: d };
                        l[e] = t;
                        return a.AB(r, { params: l, request: o.withEndpoint(s.Z).set })({ actionTypes: u, context: "ACTION_UPDATE_SEARCH_SETTINGS", meta: { settingName: e, settingValue: t } });
                    };
        },
        853568: (e, t, r) => {
            r.d(t, { U: () => s });
            const s = Object.freeze({ Filtering: "optInFiltering", Blocking: "optInBlocking" });
        },
        750238: (e, t, r) => {
            r.d(t, { Iv: () => S, UD: () => u, hW: () => E, q5: () => l });
            var s = r(226395),
                n = r(499627),
                a = r(917799),
                o = r(312771);
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
                            const r = t.payload && t.payload.codes;
                            return { ...e, backupCode: r && r[0], fetchStatus: o.ZP.LOADED };
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
                    (e, t, { api: r }) =>
                        (0, a._O)(e, { request: r.withEndpoint(s.Z).fetchBackupCode })({ actionTypes: c, context: "FETCH_BACKUP_CODE" }),
                S =
                    () =>
                    (e, t, { api: r }) =>
                        (0, a._O)(e, { request: r.withEndpoint(s.Z).fetchNewBackupCode })({ actionTypes: c, context: "FETCH_BACKUP_CODE" });
        },
        116635: (e, t, r) => {
            r.d(t, { Af: () => l, UD: () => S, d0: () => p, iv: () => _ });
            var s = r(871176),
                n = r(499627),
                a = r(917799),
                o = r(312771),
                i = r(291020);
            const c = `${i.Y}/contacts`,
                d = `rweb/${i.Y}`,
                E = (0, a.dg)(d, "FETCH_ADDRESS_BOOK"),
                u = { cursor: null, contacts: [], fetchStatus: o.ZP.NONE };
            n.Z.register({
                [c]: function (e = u, t) {
                    if (!t) return e;
                    let r;
                    switch (t.type) {
                        case E.REQUEST:
                            return { ...e, fetchStatus: o.ZP.LOADING };
                        case E.SUCCESS:
                            return (r = t.payload.entities.vcards ? Object.values(t.payload.entities.vcards) : []), { ...e, contacts: [...e.contacts, ...r], cursor: t.payload.result.next_cursor, fetchStatus: o.ZP.LOADED };
                        case E.FAILURE:
                            return { ...e, error: t.payload, fetchStatus: o.ZP.FAILED };
                        default:
                            return e;
                    }
                },
            });
            const l = (e) => e[c].contacts,
                S = (e) => e[c].fetchStatus,
                p = (e) => (t, r) => (S(r()) === o.ZP.LOADED ? Promise.resolve() : t(T(e))),
                _ = (e) => (t, r) => {
                    const s = r(),
                        n = ((e) => e[c].cursor)(s);
                    return n && S(s) === o.ZP.LOADED ? t(T({ ...e, cursor: n })) : Promise.resolve();
                },
                T =
                    (e) =>
                    (t, r, { api: n }) =>
                        (0, a._O)(t, { request: n.withEndpoint(s.Z).fetchAddressBook, params: e })({ actionTypes: E, context: "FETCH_ADDRESS_BOOK" });
        },
        558477: (e, t, r) => {
            r.d(t, { Z: () => E });
            var s = r(226395),
                n = r(782826),
                a = r(917799),
                o = r(923488);
            const i = `rweb/${`${r(291020).Y}/deactivate`}`,
                c = (0, a.dg)(i, "DEACTIVATE_ACCOUNT"),
                d = () => n.ZP.navigateTo("/settings/deactivated"),
                E =
                    (e, t) =>
                    (r, n, { api: i }) =>
                        r((0, o.JH)()).then(() =>
                            r(
                                (
                                    (e, t) =>
                                    (r, n, { api: o }) =>
                                        (0, a._O)(r, { params: { password: e, deactivation_timespan: t }, request: o.withEndpoint(s.Z).deactivate })({ actionTypes: c, context: "DEACTIVATE_ACCOUNT" }).then(d)
                                )(e, t),
                            ),
                        );
        },
        823647: (e, t, r) => {
            r.d(t, { UD: () => p, jW: () => _, uc: () => T, zJ: () => C });
            var s = r(327202),
                n = r(499627),
                a = r(917799),
                o = r(312771),
                i = r(390387);
            const c = `${r(291020).Y}/email_notifications`,
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
                    (e, t, { api: r }) => {
                        const n = i.x0(t());
                        return a._O(e, { params: { userId: n }, request: r.withEndpoint(s.Z).fetch })({ actionTypes: E, context: "FETCH_EMAIL_NOTIFICATIONS" });
                    },
                C =
                    (e) =>
                    (t, r, { api: n }) => {
                        const o = i.x0(r());
                        return a.AB(t, { params: { userId: o, settings: e }, request: n.withEndpoint(s.Z).update })({ actionTypes: u, context: "UPDATE_EMAIL_NOTIFICATIONS", meta: e });
                    };
        },
        446418: (e, t, r) => {
            r.d(t, { DG: () => f, DY: () => C, J2: () => I, UD: () => T, aX: () => A, vi: () => _, zl: () => h });
            var s = r(226395),
                n = r(499627),
                a = r(917799),
                o = r(312771),
                i = r(390387);
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
                            const { isOldPushUser: r, methods: s, twoFactorAuthEnabled: n } = t.payload;
                            return {
                                ...e,
                                isOldPushUser: r,
                                twoFactorAuthEnabled: n,
                                methods:
                                    s?.reduce((e, t) => {
                                        const { createdAtMs: r, externalDisplayName: s, id: n, twoFactorType: a } = t;
                                        if (a === d) {
                                            const t = { createdAtMs: r, id: n, name: s };
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
                            const r = (t && t.meta && t.meta.method) || "",
                                s = Object.keys(e.methods).reduce((t, s) => (s !== r && (t[s] = e.methods[s]), t), {});
                            return { ...e, methods: s };
                        }
                        case u.SUCCESS: {
                            if (!t.meta) return e;
                            const { methods: r } = e,
                                s = t.meta.securityKeyId,
                                n = Array.isArray(r[d]) ? r[d].filter((e) => e.id !== s) : null;
                            return { ...e, methods: { ...r, [d]: n } };
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
                    (e, t, { api: r, featureSwitches: n }) => {
                        const o = i.x0(t());
                        return (0, a._O)(e, { params: { userId: o }, request: r.withEndpoint(s.Z).fetchLoginVerificationSettings })({ actionTypes: E, context: "FETCH_LOGIN_VERIFICATION_SETTINGS" });
                    },
                C =
                    (e) =>
                    (t, r, { api: n }) =>
                        (0, a.Vg)(t, { params: e, request: n.withEndpoint(s.Z).enrollIn2FA })("TWO_FACTOR_ENROLLMENT"),
                I =
                    ({ securityKeyId: e }) =>
                    (t, r, { api: n }) =>
                        (0, a._O)(t, { request: n.withEndpoint(s.Z).disable2FAMethod, params: { methodId: e } })({ actionTypes: u, context: "DELETE_SECURITY_KEY", meta: { securityKeyId: e } }),
                f =
                    () =>
                    (e, t, { api: r }) =>
                        (0, a.AB)(e, { request: r.withEndpoint(s.Z).disable2FA })({ actionTypes: l, context: "DISABLE_LOGIN_VERIFICATION" }),
                A =
                    ({ method: e }) =>
                    (t, r, { api: n }) => {
                        const o = _(r()).methods[e];
                        return (0, a._O)(t, { request: n.withEndpoint(s.Z).disable2FAMethod, params: { methodId: o } })({ actionTypes: S, context: "DISABLE_LOGIN_VERIFICATION_METHOD", meta: { method: e } });
                    };
        },
        464107: (e, t, r) => {
            r.d(t, { Z: () => a });
            var s = r(226395),
                n = r(917799);
            const a =
                (e, t, r) =>
                (a, o, { api: i }) =>
                    (0, n.Vg)(a, { params: { current_password: e, password: t, password_confirmation: r }, request: i.withEndpoint(s.Z).changePassword })("CHANGE_PASSWORD");
        },
        618448: (e, t, r) => {
            r.d(t, { UD: () => u, n8: () => l, v$: () => E });
            var s = r(226395),
                n = r(499627),
                a = r(917799),
                o = r(312771);
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
                            const r = t.payload && t.payload.temporary_password;
                            return { ...e, temporaryPassword: r, fetchStatus: o.ZP.LOADED };
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
                    (e, t, { api: r }) =>
                        (0, a._O)(e, { request: r.withEndpoint(s.Z).fetchTemporaryPassword })({ actionTypes: c, context: "FETCH_TEMPORARY_PASSWORD" });
        },
        61666: (e, t, r) => {
            r.d(t, { r: () => o });
            var s = r(38562),
                n = r(371493),
                a = r(131290);
            const o = (e) => (t, r) => {
                const o = { ...e };
                if (e.hasOwnProperty("personalized_trends")) {
                    if (!e.hasOwnProperty("trend_location_woeid")) {
                        const e = (0, a.um)(r());
                        o.trend_location_woeid = (e && e[0] && e[0].woeid) || "1";
                    }
                } else o.personalized_trends = !1;
                return t(s.VP(o)).then(() => t((0, n.$N)()));
            };
        },
        39699: (e, t, r) => {
            r.d(t, { B: () => s });
            const s = Object.freeze({ Daily: "Daily", Weekly: "Weekly", Periodically: "Periodically", None: "None" });
        },
        395042: (e, t, r) => {
            r.d(t, { El: () => E, HR: () => u, Zc: () => l });
            var s = r(226395),
                n = r(499627),
                a = r(917799);
            const o = "settings/usernames",
                i = "rweb/settings/usernames/CLEAR_USERNAME_AVAILABILITY",
                c = Object.freeze({ REQUEST: "rweb/settings/usernames/FETCH_USERNAMES_REQUEST", SUCCESS: "rweb/settings/usernames/FETCH_USERNAMES_SUCCESS", FAILURE: "rweb/settings/usernames/FETCH_USERNAMES_FAILURE" }),
                d = { isLoaded: !1 };
            const E = (e) => e[o],
                u =
                    (e) =>
                    (t, r, { api: n }) =>
                        (0, a._O)(t, { params: e, request: n.withEndpoint(s.Z).usernameAvailable })({ actionTypes: c, context: "FETCH_SETTINGS_USERNAME_AVAILABLE", meta: { username: e.username } }),
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
        991851: (e, t, r) => {
            r.d(t, { CD: () => N, yb: () => h, oy: () => C, oo: () => U, JH: () => w, YQ: () => S, IZ: () => p, SN: () => _, Qy: () => T, PR: () => g });
            var s = r(118717),
                n = r(499627),
                a = r(226395),
                o = r(917799),
                i = r(312771);
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
                    (t, r, { api: s }) =>
                        o._O(t, { params: e, request: s.withEndpoint(a.Z).fetchPlaceTrendsLocations })({ actionTypes: E, context: "FETCH_TRENDS_LOCATIONS" }),
                C =
                    () =>
                    (e, t, { api: r }) =>
                        T(t()) === i.ZP.LOADED ? Promise.resolve() : e(I()),
                I =
                    () =>
                    (e, t, { api: r }) =>
                        o._O(e, { params: {}, request: r.withEndpoint(a.Z).fetchWoeTrendsLocations })({ actionTypes: u, context: "FETCH_TRENDS_LOCATIONS" });
            var f = r(401388),
                A = r(390387),
                O = r(371493);
            const R = "settings",
                m = Object.freeze({ REQUEST: "rweb/trends/UPDATE_TRENDS_SETTINGS_REQUEST", SUCCESS: "rweb/trends/UPDATE_TRENDS_SETTINGS_SUCCESS", FAILURE: "rweb/trends/UPDATE_TRENDS_SETTINGS_FAILURE" }),
                y = Object.freeze({ REQUEST: "rweb/trends/FETCH_TRENDS_SETTINGS_REQUEST", SUCCESS: "rweb/trends/FETCH_TRENDS_SETTINGS_SUCCESS", FAILURE: "rweb/trends/FETCH_TRENDS_SETTINGS_FAILURE" }),
                L = { settings: {}, fetchStatus: i.ZP.NONE };
            const U = (e) => e[c][R] && e[c][R].settings,
                w = (e) => e[c][R] && e[c][R].fetchStatus,
                N = () => (e, t) => (w(t()) === i.ZP.LOADED ? Promise.resolve() : e((e, t, { api: r }) => (A.Qb(t()) ? o._O(e, { request: r.withEndpoint(a.Z).fetchPlaceTrendSettings })({ actionTypes: y, context: "FETCH_TRENDS_SETTINGS" }) : Promise.resolve()))),
                g =
                    (e) =>
                    (t, r, { api: s }) => {
                        if ((0, f.Z)(e)) return Promise.resolve();
                        const { places: n, ...i } = e,
                            c = { ...i };
                        e.places && e.places.length && (c.places = e.places.map((e) => e.place_id));
                        return o
                            ._O(t, { params: c, request: s.withEndpoint(a.Z).updatePlaceTrendSettings })({ actionTypes: m, context: "UPDATE_TRENDS_SETTINGS", meta: e })
                            .then(() => t((0, O.$N)()));
                    },
                P = {
                    settings: function (e = L, t) {
                        if (!t) return e;
                        switch (t.type) {
                            case y.REQUEST:
                                return { ...e, fetchStatus: i.ZP.LOADING };
                            case y.SUCCESS:
                                return { ...e, settings: { ...e.settings, ...t.payload }, fetchStatus: i.ZP.LOADED };
                            case m.SUCCESS:
                                return { ...e, settings: { ...e.settings, ...t.meta }, fetchStatus: i.ZP.LOADED };
                            case y.FAILURE:
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
                F = (0, s.UY)(P);
            n.Z.register({ [c]: F });
        },
        336429: (e, t, r) => {
            r.d(t, { R: () => S });
            var s = r(745123),
                n = r(218951),
                a = (r(136728), r(192337)),
                o = r(650706),
                i = r(466015),
                c = r(409438);
            const d = (e, t = {}) => {
                    const { cursor: r } = t,
                        s = [];
                    if (e.result.users.length > 0) {
                        let t = (r && "object" == typeof r ? r.sortValue : Date.now()) - 1;
                        e.result.users.forEach((e) => {
                            s.push(i.$0({ id: e, sortIndex: `${t}`, displayType: c.Z.UserDetailed })), (t -= 1);
                        }),
                            s.push(...E(e, t));
                    }
                    return u(s, e.entities, l);
                },
                E = (e, t) => {
                    const { next_cursor_str: r } = e.result;
                    if ("0" === r) return [];
                    return [a.Tx({ cursorType: a.CursorType.Bottom, value: { param: "cursor", id: r || "-1", sortValue: t }, sortIndex: `${t}` })];
                },
                u = (e, t, r) => ({ globalObjects: t, timeline: { responseObjects: r, instructions: e.length ? [{ type: o.Z.AddEntries, parameters: { entries: e } }] : [] } }),
                l = { feedbackActions: {} },
                S = (e) =>
                    (0, n.Z)({
                        timelineId: `deviceFollowingLegacy-${e}`,
                        network: {
                            getEndpoint: (e) => {
                                return (
                                    (t = e.withEndpoint(s.Z).fetchFollowing),
                                    ({ cursor: e, ...r }, s) => {
                                        let n = r;
                                        return e && "object" == typeof e && (n = { ...r, [e.param]: e.id }), t(n, s);
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
        935929: (e, t, r) => {
            r.d(t, { L: () => c, X: () => i });
            var s = r(919299),
                n = r(750085),
                a = r(919022),
                o = r(218951);
            const i = (e) => (0, o.Z)({ timelineId: `dmMutedUsersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(s.Z).fetchDMMutedUsers, getEndpointParams: (t) => ({ user_id: e, ...t }) }, context: "FETCH_DM_MUTED_USERS", perfKey: "dmMutedUsersGraphql", formatResponse: n.Z }),
                c = (e) => (t, r) => {
                    const s = r();
                    t(
                        e
                            .selectEntries(s)
                            .filter((e) => {
                                const t = e.content.id,
                                    r = a.ZP.select(s, t);
                                return r && !r.dm_muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                };
        },
        371493: (e, t, r) => {
            r.d(t, { $N: () => I, G0: () => C, Jj: () => f, O9: () => p, S: () => _, fy: () => T, jz: () => A, nm: () => h, qk: () => u, uI: () => l });
            var s = r(912021),
                n = r(644829),
                a = r(740527),
                o = r(750085),
                i = r(555875),
                c = r(899105),
                d = r(218951);
            const E = Object.freeze({ Trends: "trends" }),
                u = Object.freeze({ WebSidebar: "web_sidebar" }),
                l = "explore-",
                S = 9e5;
            const p = ({ contentType: e, displayLocation: t, exploreGraphQLEnabled: r = !1, focalTweetId: s, includePageConfiguration: o = !1, initialTabId: i, profileUserId: E }) => {
                    const u = e || t || "main",
                        p = (function (e, t, r, s) {
                            return r ? `${e}${t}-tweet-${r}` : s ? `${e}${t}-user-${s}` : `${e}${t}`;
                        })(r ? "explore-graphql-" : l, u, s, E),
                        _ = { timelineId: p, formatResponse: c.Z, network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchExplore, getEndpointParams: (r) => ({ ...r, candidate_source: e, display_location: t, focal_tweet_id: s, include_page_configuration: o, initial_tab_id: i, profile_user_id: E, entity_tokens: !1 }) }, context: r ? "FETCH_EXPLORE_GQL" : "FETCH_EXPLORE", perfKey: `${l}${u}`, staleIntervalMs: S };
                    return r ? (0, d.Z)({ ..._, formatResponse: a.Z, network: { ..._.network, getEndpoint: (e) => e.withEndpoint(n.Z).fetchExploreGraphQL } }) : (0, d.Z)(_);
                },
                _ = () => {
                    const e = "explore-sidebar-gql",
                        t = { timelineId: e, formatResponse: o.Z, network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchExploreSidebarGraphQL, getEndpointParams: () => ({}) }, context: "FETCH_EXPLORE_SIDEBAR", perfKey: e, staleIntervalMs: S };
                    return (0, d.Z)(t);
                },
                T = (e, t) => p({ exploreGraphQLEnabled: e, includePageConfiguration: !0, initialTabId: t }),
                h = (0, s.Z)((e) => p({ exploreGraphQLEnabled: e, contentType: E.Trends })),
                C = (0, s.Z)((e) => p({ exploreGraphQLEnabled: e, displayLocation: u.WebSidebar })),
                I = () => (e, t) =>
                    e(
                        (0, i.CY)(t())
                            .filter((e) => 0 === e.indexOf(l))
                            .map((e) => (0, i.$q)(e)),
                    ),
                f = (e) => {
                    const t = `trend-relevant-users-${e}-gql`,
                        r = { timelineId: t, formatResponse: o.Z, network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchTrendRelevantUsersGraphQL, getEndpointParams: () => ({ trendId: e }) }, context: "FETCH_TREND_RELEVANT_USERS", perfKey: t, staleIntervalMs: S };
                    return (0, d.Z)(r);
                },
                A = (e) => (0, d.Z)({ timelineId: `trendingEventHistoryGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchTrendHistory, getEndpointParams: () => ({ trendId: e }) }, formatResponse: o.Z, context: "FETCH_TREND_HISTORY", perfKey: "trendingEventHistoryGraphQL" });
        },
        166506: (e, t, r) => {
            r.d(t, { du: () => E, f8: () => u, k9: () => d });
            var s = r(503768),
                n = r(750085),
                a = r(962741),
                o = r(466015),
                i = r(919022),
                c = r(218951);
            const d = () => (0, c.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(s.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                E = (e) => (t, r) => {
                    const s = r();
                    t(
                        e
                            .selectEntries(s)
                            .filter((e) => {
                                const t = e.type === a.ZP.User ? e.content.id : "",
                                    r = i.ZP.select(s, t);
                                return r && !r.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                u = (e, t, r) => {
                    if (!r.selectEntries(t).find((t) => t.type === a.ZP.User && t.content.id === e)) {
                        const t = (0, o.OD)(e),
                            s = (0, o.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return r.injectEntry(s);
                    }
                };
        },
        774006: (e, t, r) => {
            r.d(t, { Z: () => _, u: () => p });
            var s = r(644829),
                n = r(750085),
                a = r(903019),
                o = r(883432),
                i = r(555875),
                c = r(218951);
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
                _ = ({ query: e, searchMode: t = a.N3.Top, querySource: r, searchFilters: o, vertical: i, urtEndpointOptions: p, searchTimelinesGraphQLEnabled: _ }) => {
                    const T = S(r),
                        h = o && o.peopleFilter ? "searcher_follows" : void 0,
                        C = h ? "-pf" : "",
                        I = o && o.locationFilter && !e.includes(E) ? `${e}${E}` : e,
                        f = { timelineId: `${d}${I}-${t}${T}${C}`, network: { getEndpoint: (e) => e.withEndpoint(s.Z).fetchSearch, getEndpointParams: (e) => ({ ...p?.requestParams, q: I, social_filter: h, vertical: i, ...l[t], ...e }) }, context: "FETCH_SEARCH_TIMELINE", perfKey: "search", staleIntervalMs: t === a.N3.Live ? 5e3 : void 0, timelineType: "search" };
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
                            i = `gql-${d}${I}-${t}${T}${C}`;
                        return (0, c.Z)({ ...f, timelineId: i, context: "FETCH_SEARCH_GRAPHQL_TIMELINE", formatResponse: n.Z, network: { getEndpointParams: ({ count: t, cursor: s }) => ({ rawQuery: e, count: t, product: o, querySource: r, cursor: "string" == typeof s ? s : void 0 }), getEndpoint: (e) => e.withEndpoint(s.Z).fetchSearchGraphQL } });
                    }
                    return (0, c.Z)(f);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-8ed0fac5.f915a4ca.js.map

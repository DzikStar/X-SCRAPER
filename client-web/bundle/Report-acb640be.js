"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Report-acb640be", "loader.richScribeAction"],
    {
        481242: (e, t, s) => {
            s.r(t), s.d(t, { richScribeAction: () => u, richScribeFlushImmediate: () => l });
            var r = s(450681),
                n = s(479506),
                i = s(942893),
                o = s(836255),
                a = s(919022);
            const c = [],
                d = Object.freeze({}),
                u =
                    (e, t = d) =>
                    (s, n, { scribe: i }) => {
                        const o = n(),
                            a = Array.isArray(t.items) ? (0, r.Z)(t.items.map((e) => m(e, o))) : c,
                            d = { ...t, items: a };
                        i.log(e, d);
                    },
                l =
                    () =>
                    (e, t, { scribe: s }) => {
                        s.flushImmediate();
                    },
                p = (e) => {
                    if (e.disclosure_type && e.impression_id) return { disclosure_type: e.disclosure_type, impression_id: e.impression_id };
                },
                m = (e, t) => {
                    if (!e.id) return e;
                    switch (e.item_type) {
                        case n.Z.ItemType.USER: {
                            const s = a.ZP.select(t, e.id),
                                r = p(e);
                            return s ? { ...e, ...i.Z.getUserItem(s, r) } : e;
                        }
                        case n.Z.ItemType.TWEET: {
                            const s = o.Z.selectHydrated(t, e.id),
                                r = p(e);
                            return s ? { ...e, ...i.Z.getTweetItem(s, r, void 0, void 0, e) } : e;
                        }
                        default:
                            return e;
                    }
                };
        },
        296196: (e, t, s) => {
            s.r(t),
                s.d(t, {
                    GLOBAL_STATE_KEY: () => E.Yf,
                    acceptConversation: () => i.tF,
                    addAvatarMedia: () => i._D,
                    addParticipants: () => i.ck,
                    addRecentSearches: () => Z,
                    addWelcomeMessageToConversation: () => i.Qe,
                    clearRecentSearch: () => w,
                    clearRecentSearches: () => M,
                    clearSearchCache: () => g,
                    default: () => x,
                    deleteConversations: () => i.S9,
                    disableMentionNotifications: () => i.BW,
                    disableNotifications: () => i.dq,
                    enableMentionNotifications: () => i.Ap,
                    enableNotifications: () => i.PZ,
                    fetchConversation: () => i.Um,
                    fetchConversationFromParticipants: () => i.sS,
                    fetchConversationFuture: () => i.OW,
                    fetchConversationHistoricalSnapshot: () => i.wm,
                    fetchConversationHistory: () => i.Be,
                    fetchConversationIfNeeded: () => i.sA,
                    fetchInbox: () => a.oH,
                    fetchInboxIfNeeded: () => a.C2,
                    fetchPermissions: () => i.qg,
                    fetchTrustedInboxHistory: () => a.vC,
                    fetchUntrustedInboxHistory: () => a.kK,
                    fetchUntrustedLowQualityInboxHistory: () => a.j7,
                    fetchUpdates: () => U.f9,
                    fetchUpdatesIfNeeded: () => U.hd,
                    leaveConversation: () => i.qH,
                    markAllAsRead: () => i.SF,
                    markConversationRead: () => i.v3,
                    markSpamStatus: () => o.kv,
                    muteDMUser: () => i.sj,
                    removeAvatarMedia: () => i.Xw,
                    removeConversation: () => i.Ae,
                    removeEntry: () => o.MY,
                    searchConversations: () => A,
                    selectConversation: () => i.xu,
                    selectConversationAvatarMediaId: () => i.aG,
                    selectConversationAvatarMediaIsUploading: () => i.W,
                    selectConversationAvatarMediaUploadProgress: () => i.UA,
                    selectConversationFetchStatus: () => i.Pr,
                    selectConversationIdsByInbox: () => a.g4,
                    selectConversationIsLoaded: () => i.gQ,
                    selectConversationIsRead: () => i.jT,
                    selectConversations: () => i.FS,
                    selectEntries: () => o.gm,
                    selectEntriesForConversation: () => o.iN,
                    selectEntry: () => o.WK,
                    selectFetchStatus: () => a.UD,
                    selectHasConversations: () => i.ax,
                    selectInboxCursor: () => a.Pt,
                    selectInboxIsLoaded: () => a.MB,
                    selectInboxTypeByConversation: () => i.Zg,
                    selectIsLoadingTop: () => a.xS,
                    selectLabelledConversationIds: () => a.Z3,
                    selectLastSeenEventIds: () => a.B7,
                    selectPinnedConversationIds: () => a.Kf,
                    selectRecentSearches: () => L,
                    selectRecipientCanNotDm: () => i.OF,
                    selectSearchConversations: () => C,
                    selectSearchFetchStatus: () => R,
                    selectUnreadCount: () => a.Sb,
                    selectUntrustedConversationCount: () => a.Oq,
                    selectUntrustedCounts: () => a.Re,
                    selectUntrustedCursor: () => a.aB,
                    selectUntrustedLowQualityConversationCount: () => a.ZI,
                    selectUntrustedLowQualityCursor: () => a.Gk,
                    selectUntrustedUnreadCount: () => a.k5,
                    selectUpdates: () => U.o8,
                    setConversationAvatar: () => i.X5,
                    toggleNotifications: () => i.$S,
                    unmuteDMUser: () => i.GP,
                    updateConversationAvatar: () => i.nI,
                    updateConversationName: () => i.FI,
                    updateConversationReadState: () => i.d0,
                    updateLastSeenEventId: () => a.kL,
                    updateTrustedLastSeenEventId: () => a.$7,
                    updateTyping: () => i.lT,
                    updateUntrustedLastSeenEventId: () => a.A4,
                });
            var r = s(118717),
                n = s(499627),
                i = s(613195),
                o = s(627279),
                a = s(720277),
                c = (s(136728), s(468811)),
                d = s.n(c),
                u = s(948322),
                l = s(917799),
                p = s(312771),
                m = s(390387),
                h = s(849585),
                E = s(147143);
            const S = "rweb.recentDMSearches",
                f = Object.freeze({ REQUEST: "rweb/directMessages/SEARCH_REQUEST", SUCCESS: "rweb/directMessages/SEARCH_SUCCESS", FAILURE: "rweb/directMessages/SEARCH_FAILURE" }),
                _ = "rweb/directMessages/ADD_RECENT_SEARCHES",
                I = (e) => ({ payload: e, type: _ }),
                y = "rweb/directMessages/CLEAR_SEARCH_CACHE",
                g = () => ({ type: y }),
                T = "rweb/directMessages/CLEAR_RECENT_SEARCH",
                v = "rweb/directMessages/CLEAR_RECENT_SEARCHES",
                P = { searchResults: {}, recentSearches: [] };
            function b(e = P, t) {
                if (!t) return e;
                switch (t.type) {
                    case _:
                    case T:
                        return { ...e, recentSearches: t.payload || [] };
                    case v:
                        return { ...e, recentSearches: [] };
                    case f.REQUEST: {
                        const { fetchNextPage: s, preserveResults: r, query: n } = t.meta || {},
                            i = e.searchResults ? e.searchResults[n] : {},
                            o = { ...e.searchResults, [n]: { ...i, fetchStatus: r || s ? i?.fetchStatus : p.ZP.LOADING } };
                        return { ...e, searchResults: o };
                    }
                    case f.FAILURE: {
                        const { fetchNextPage: s, preserveResults: r, query: n } = t.meta || {},
                            i = e.searchResults ? e.searchResults[n] : {},
                            o = { ...e.searchResults, [n]: { ...i, fetchStatus: r || s ? i?.fetchStatus : p.ZP.FAILED, error: t.payload } };
                        return { ...e, searchResults: o };
                    }
                    case f.SUCCESS: {
                        const { query: s } = t.meta || {},
                            r = t.payload && t.payload.result ? t.payload.result : null,
                            { conversations: n, error: i } = r || {},
                            o = r?.conversationIds ? r.conversationIds : n ? Object.keys(n) : [],
                            a = e.searchResults ? e.searchResults[s] : {},
                            c = a?.conversationIds || [],
                            d = c.length && o ? c.concat(o.filter((e) => !c.includes(e))) : o,
                            u = { ...e.searchResults, [s]: { ...a, lastCursor: r?.cursor, conversationIds: d, error: i, fetchStatus: p.ZP.LOADED } };
                        return { ...e, searchResults: u };
                    }
                    case y:
                    case h.t:
                        return { ...P, recentSearches: e.recentSearches };
                    default:
                        return e;
                }
            }
            const L = (e) => e[E.Yf].search?.recentSearches,
                R = (e, t) => {
                    const s = e[E.Yf].search?.searchResults;
                    if (s) {
                        const e = s[t];
                        return e?.fetchStatus || p.ZP.NONE;
                    }
                    return p.ZP.NONE;
                },
                C = (e, t) => {
                    const s = e[E.Yf].search?.searchResults;
                    return (s && s[t]?.conversationIds) || [];
                },
                A =
                    (e) =>
                    (t, s, { api: r }) => {
                        const n = s(),
                            { fetchNextPage: i, preserveResults: o, query: c } = e || {},
                            p = { query: c, search_type: "conversations", request_id: d().v4() },
                            m = ((e, t) => {
                                const s = e[E.Yf].search?.searchResults;
                                return (s && s[t]?.lastCursor) || null;
                            })(n, c),
                            h = ((e) => e[E.Yf].search?.searchResults)(n),
                            S = h ? h[c] : void 0,
                            _ = !!m;
                        m && c && i && (p.cursor = m);
                        const I = l._O(t, { params: p, request: r.withEndpoint(u.Z).search }),
                            y = (e) => {
                                if (e && e.result) {
                                    const { conversations: t } = e.result,
                                        { users: s } = e.entities;
                                    return t && Object.values(t).forEach((e) => (e.isSearchResult = !0)), t ? (0, a.s0)({ conversations: t, users: s }) : null;
                                }
                            };
                        return !S || S?.error || o || (i && _) ? I({ actionTypes: f, context: "SEARCH", meta: { query: p.query, cursor: p.cursor, preserveResults: o, fetchNextPage: i } }, y) : (t({ type: "rweb/directMessages/SEARCH_SUCCESS", payload: { result: S }, meta: { query: c, cursor: m } }), Promise.resolve());
                    },
                Z =
                    (e) =>
                    (t, s, { featureSwitches: r, userPersistence: n }) => {
                        const i = r.getNumberValue("dm_inbox_search_max_recent_searches_stored");
                        return n.get(S).then((s) => {
                            const r = s?.recentSearches || [];
                            return !r.includes(e) && r.push(e), r.length > i && r.shift(), t(I(r)), n.set(S, { recentSearches: r });
                        });
                    },
                w =
                    (e) =>
                    (t, s, { userPersistence: r }) =>
                        r.get(S).then((s) => {
                            const n = s?.recentSearches || [];
                            return n.splice(n.indexOf(e), 1), t({ payload: n, type: T }), r.set(S, { recentSearches: n });
                        }),
                M =
                    () =>
                    (e, t, { userPersistence: s }) => (e({ type: v }), s.set(S, { recentSearches: [] }));
            n.Z.register(
                { [E.Yf]: b },
                () =>
                    (e, t, { userPersistence: s }) =>
                        m.Qb(t())
                            ? Promise.resolve(
                                  s.get(S).then((t) => {
                                      const s = t?.recentSearches;
                                      s && e(I(s));
                                  }),
                              ).then(() => {})
                            : Promise.resolve(),
            );
            var U = s(923965);
            const O = (0, r.UY)({ conversations: i.ZP, entries: o.ZP, inbox: a.ZP, search: b, updates: U.ZP });
            n.Z.register({ [E.Yf]: O });
            const x = O;
        },
        576469: (e, t, s) => {
            s.d(t, { Z: () => q });
            s(571372), s(136728);
            var r = s(24949),
                n = s(161821),
                i = s(450681),
                o = s(483557),
                a = s(842799),
                c = s(716233),
                d = s(962741),
                u = s(466015),
                l = s(538327),
                p = s(281743),
                m = s(917799),
                h = s(56519),
                E = s(502909),
                S = s(600823),
                f = s(558369),
                _ = s(497294),
                I = s(709318),
                y = s(872788),
                g = s(390387),
                T = s(652881),
                v = s(780936),
                P = s(823885),
                b = s(164692),
                L = s(78259),
                R = s(919022),
                C = s(206795);
            const A = m.dg("lists", "UPLOAD_MEDIA"),
                Z = m.dg("lists", "UPDATE_MEDIA"),
                w = (0, E.ZP)({ namespace: "lists" }),
                M = (0, E.tb)(w, {
                    context: "FETCH_LIST",
                    endpoint: (e) => e.withEndpoint(o.ZP).fetchList,
                    params: ([e], t) => {
                        if (e) return { list_id: e };
                        if (t.slug && t.screenName) return { slug: t.slug, owner_screen_name: t.screenName };
                        throw new Error("listId or screenName and slug required to fetch list");
                    },
                }),
                U = (e) => u.WE({ displayType: l.P.List, id: e, sortIndex: Date.now().toString() }),
                O = (e) => u.$0({ id: e, sortIndex: Date.now().toString() }),
                x = (e, t) => (t && t.entities ? [(0, h.dP)(t.entities)] : []),
                F = (0, r.P1)(
                    w.select,
                    (e) => e,
                    (e, t) => {
                        if (e) {
                            const { full_name: s, user: r } = e;
                            if (s) return s.split("/")[0].substr(1);
                            if (r) {
                                const e = R.ZP.select(t, r);
                                return e?.screen_name;
                            }
                        }
                    },
                ),
                N = {
                    selectByKey: (0, r.P1)(
                        w.selectAll,
                        (e, t) => t,
                        (e) => e,
                        (e, t, s) =>
                            e
                                ? (0, n.Z)(e).find((e) => {
                                      if (e) {
                                          const r = k.selectListAuthorScreenName(s, e.id_str);
                                          return (r && (0, a.Z)(r, e.slug)) === t;
                                      }
                                  })
                                : void 0,
                    ),
                    selectListKeyById: (0, r.P1)(w.select, F, (e, t) => e && t && (0, a.Z)(t, e.slug)),
                    selectLocalMediaId: (0, r.P1)(w.select, (e) => e?.mediaId),
                },
                D = {
                    addUserToList: (0, E.Tx)(w, "addUserToList", {
                        getParams: (e, { userId: t } = {}) => ({ list_id: e, user_id: t }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).addToList,
                        context: "ADD_USER_TO_LIST",
                        mapResponseToActions:
                            (e, { shouldInjectURTEntry: t = !0, userId: s }, r) =>
                            (n) => {
                                const i = r(),
                                    o = k.select(i, e);
                                if (!n?.entities || !o) return [];
                                const a = U(u.Re(e)),
                                    c = (0, v.Z)(e),
                                    d = (0, P.Z)(s),
                                    l = [w.updateOne(e, { member_count: o.member_count + 1 }), C.Hi({ addTo: s, itemsToAdd: [e] }), d.injectEntry(a)];
                                if (t) {
                                    const e = O(s);
                                    l.push(c.injectEntry(e));
                                }
                                return l;
                            },
                    }),
                    deleteList: (0, E.Tx)(w, "deleteList", {
                        getParams: (e) => ({ list_id: e }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).deleteList,
                        context: "DELETE_LIST",
                        mapResponseToActions: (e, t, s) => (t) => {
                            const r = s(),
                                n = (0, f.mz)(r).isTrue("responsive_web_timeline_relay_lists_management_enabled"),
                                i = w.select(r, e),
                                o = (0, g._h)(r);
                            if (!i || !o) return [];
                            const a = u.Re(e),
                                c = (0, b.Z)(o, o);
                            return [(0, I.Vu)({ id: i.id_str, name: i.name, type: y.FO.LIST }), c.removeEntry(a), ...(0, T.C2)(n, s, T.Pq.ownedSubscribedList, e)];
                        },
                    }),
                    deleteListMedia: (0, E.Tx)(w, "deleteListMedia", { getParams: (e) => ({ listId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).deleteBannerImage, context: "DELETE_LIST_MEDIA", mapResponseToActions: (e, t, s) => (t) => (t && t.entities ? [w.updateOne(e, { customBanner: void 0 })] : []) }),
                    editList: (0, E.Tx)(w, "editList", { getParams: (e, { description: t, mode: s, name: r } = {}) => ({ description: t, list_id: e, mode: s, name: r }), getApiMethod: (e) => e.withEndpoint(o.ZP).editList, context: "EDIT_LIST", mapResponseToActions: (e, t, s) => (e) => x(0, e) }),
                    removeUserFromList: (0, E.Tx)(w, "removeUserFromList", {
                        getParams: (e, { userId: t } = {}) => ({ list_id: e, user_id: t }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).removeFromList,
                        context: "REMOVE_USER_FROM_LIST",
                        mapResponseToActions:
                            (e, { shouldRemoveURTEntry: t = !0, userId: s }, r) =>
                            (r) => {
                                const n = r?.entities?.lists[e];
                                if (n) {
                                    const r = (0, v.Z)(e),
                                        i = (0, P.Z)(s),
                                        o = [C.pO({ removeFrom: s, itemToRemove: e }), i.removeEntry(u.Re(e))];
                                    return o.push(w.updateOne(e, n)), t && o.push(r.removeEntry(u._Y(s))), o;
                                }
                                return [];
                            },
                    }),
                    subscribe: (0, E.Tx)(w, "subscribe", {
                        getParams: (e) => ({ list_id: e }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).createSubscribers,
                        canPerformAction: (e = {}) => e && !e.following,
                        context: "SUBSCRIBE_TO_LIST",
                        mapResponseToActions: (e, t, s) => (t) => {
                            const r = s(),
                                n = (0, f.mz)(r).isTrue("responsive_web_timeline_relay_lists_management_enabled"),
                                i = [],
                                o = t?.entities?.lists?.[e],
                                a = (0, g._h)(r);
                            if (o && a) {
                                const t = O(a),
                                    r = (0, L.Z)(e);
                                i.push(w.updateOne(e, o)), i.push(r.injectEntry(t)), i.push(...(0, T.s8)(n, s, T.Pq.ownedSubscribedList, e)), o.pinning && i.push((0, I.Co)({ id: o.id_str, name: o.name, type: y.FO.LIST }));
                            }
                            return i;
                        },
                    }),
                    toggleMute: (0, E.Tx)(w, "toggleMute", {
                        getParams: (e, { mute: t } = {}) => ({ listId: e, mute: t }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).toggleMute,
                        canPerformAction: (e = {}) => !!e,
                        context: "LIST_TOGGLE_MUTE",
                        mapResponseToActions: (e, t, s) => (r) => {
                            const n = s(),
                                i = w.select(n, e),
                                o = (0, g._h)(n);
                            return i && o && i.muting !== t.mute && r ? [w.updateOne(e, { muting: t.mute })] : [];
                        },
                    }),
                    unsubscribe: (0, E.Tx)(w, "unsubscribe", {
                        getParams: (e) => ({ list_id: e }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).destroySubscribers,
                        canPerformAction: (e = {}) => e && !!e.following,
                        context: "UNSUBSCRIBE_FROM_LIST",
                        mapResponseToActions: (e, t, s) => (t) => {
                            const r = s(),
                                n = (0, f.mz)(r).isTrue("responsive_web_timeline_relay_lists_management_enabled"),
                                i = [],
                                o = t?.entities?.lists?.[e],
                                a = (0, g._h)(r);
                            if (o && a) {
                                const t = (0, L.Z)(e);
                                i.push(...(0, T.C2)(n, s, T.Pq.ownedSubscribedList, e)), i.push(w.updateOne(e, o)), i.push(t.removeEntry(u._Y(a))), i.push((0, I.Vu)({ id: o.id_str, name: o.name, type: y.FO.LIST }));
                            }
                            return i;
                        },
                    }),
                },
                H = {
                    addLocalMediaId:
                        ({ listId: e, mediaId: t }) =>
                        (s, r, { api: n }) => {
                            s((0, h.dP)({ lists: { [e]: { mediaId: t } } }));
                        },
                    createList:
                        (e) =>
                        (t, s, { api: r, featureSwitches: n }) =>
                            m
                                ._O(t, { request: r.withEndpoint(o.ZP).createList, params: e })({ actionTypes: w.actionTypes.CREATE, context: "CREATE_LIST" }, (e) => {
                                    const t = (0, g._h)(s());
                                    if (e && t) {
                                        const { result: r } = e,
                                            o = U(r),
                                            a = (0, b.Z)(t, t),
                                            c = n.isTrue("responsive_web_timeline_relay_lists_management_enabled");
                                        return (0, i.Z)([e.entities && (0, h.dP)(e.entities), a.injectEntry(o), ...(0, T.s8)(c, s, T.Pq.ownedSubscribedList, r)]);
                                    }
                                    return [];
                                })
                                .then((e) => e?.entities?.lists && e.entities.lists[e.result]),
                    editListMedia:
                        ({ iconCrop: e, listId: t, mediaId: s }) =>
                        (r, n, { api: i }) => {
                            const a = e ? (0, c.U$)(e) : void 0;
                            r({ type: A.REQUEST });
                            const d = _.$i(s, { extraInitParams: a });
                            return r(d).then(
                                ([e]) => {
                                    const s = e.uploadId;
                                    if (s) {
                                        r([{ type: A.SUCCESS }, { type: Z.REQUEST }]);
                                        const e = (e) => x(0, e);
                                        return m._O(r, { request: i.withEndpoint(o.ZP).editBannerImage, params: { listId: t, mediaId: s } })({ actionTypes: w.actionTypes.OPTIMISTIC_UPDATE, context: "EDIT_LIST_MEDIA" }, e);
                                    }
                                    return r({ type: A.FAILURE }), Promise.reject(new Error("List media upload failed - no uploadId"));
                                },
                                (e) => (r({ type: A.FAILURE }), Promise.reject(e)),
                            );
                        },
                    removeLocalMediaId: (e) => (t, s) => {
                        t(w.updateOne(e, { mediaId: void 0 }));
                    },
                    toggleIsMember:
                        ({ listId: e, targetUserId: t }) =>
                        (s, r, { api: n }) => {
                            const i = r(),
                                o = (0, g._h)(i);
                            if (!o) return;
                            const a = (0, b.Z)(o, t),
                                c = a.selectEntries(i),
                                l = u.Re(e),
                                p = c.find((e) => e.entryId === l);
                            if (p && p.type === d.ZP.TwitterList) {
                                const e = p.content.isMember;
                                return s(a.updateEntry(l, { isMember: !e }));
                            }
                        },
                },
                k = { ...w, ...M, selectListAuthorScreenName: F, ...N, ...D, ...H };
            p.sv.addForEntity(k, "List", {
                rest_id: (e) => e.id_str,
                name: (e) => e.name,
                description: (e) => e.description,
                facepile_urls: (e) => e.facepile_urls,
                followers_context: (e) => e.followers_context,
                following: (e) => e.following,
                pinning: (e) => e.pinning,
                member_count: (e) => e.member_count,
                members_context: (e) => e.members_context,
                owner_results: (e, t) => {
                    const s = e.user;
                    if (!s) return null;
                    const r = R.ZP.select(t(), s);
                    return r ? R.Sy.reference(r) : null;
                },
                accessibility: (e) => ("private" === e.mode ? "Private" : "Public"),
                custom_banner_media_results: (e) => (e.customBanner ? B.reference(e.customBanner) : null),
                default_banner_media_results: (e) => B.reference(e.defaultBanner),
            });
            const B = p.sv.addForObjectType("ApiMediaResults", { result: (e) => G.reference(e) }),
                G = p.sv.addForObjectType("ApiMedia", { media_info: (e) => Q.reference(e) }),
                Q = p.sv.addForObjectType("ApiImage", { original_img_url: (e) => e.image.url, original_img_width: (e) => e.image.width, original_img_height: (e) => e.image.height, salient_rect: (e) => (e.crop[0] ? j.reference(e.crop[0]) : null) }),
                j = p.sv.addForObjectType("ApiMediaRect", { height: (e) => e.h, left: (e) => e.x, top: (e) => e.y, width: (e) => e.w }),
                q = S.Z.register(k);
        },
        206795: (e, t, s) => {
            s.d(t, { Hi: () => I, NU: () => g, pO: () => y, g$: () => _ });
            var r = s(166852),
                n = s(483557),
                i = s(499627),
                o = s(917799),
                a = s(312771),
                c = s(56519),
                d = s(877848);
            const u = Object.freeze({ REQUEST: "rweb/lists/FETCH_LISTMEMBERSHIPS_REQUEST", SUCCESS: "rweb/lists/FETCH_LISTMEMBERSHIPS_SUCCESS", FAILURE: "rweb/lists/FETCH_LISTMEMBERSHIPS_FAILURE" }),
                l = "rweb/lists/LISTMEMBERSHIPS_ADD_UPDATE",
                p = "rweb/lists/LISTMEMBERSHIPS_REMOVE_UPDATE",
                m = "listMemberships",
                h = [],
                E = Object.freeze({}),
                S = Object.freeze({ data: { lists: [] }, error: null, fetchStatus: { [d.Yj.BOTTOM]: a.ZP.NONE, [d.Yj.TOP]: a.ZP.NONE } });
            const f = (e, t) => e[m][t],
                _ = (e, t) => {
                    const s = f(e, t);
                    return s?.data?.lists || h;
                },
                I = ({ addTo: e, itemsToAdd: t }) => ({ payload: { key: e, items: t }, type: l }),
                y = ({ itemToRemove: e, removeFrom: t }) => ({ payload: { key: t, item: e }, type: p }),
                g = (e, t) => (s, r) => {
                    const i = r(),
                        l = f(i, e),
                        p = ((e, t) => {
                            const s = f(e, t),
                                r = _(e, t);
                            return s ? (0, a.ke)(s.fetchStatus, !!r.length) : a.ZP.NONE;
                        })(i, e);
                    return !l || (p !== a.ZP.LOADING && p !== a.ZP.LOADED)
                        ? s(
                              (
                                  (e, t) =>
                                  (s, r, { api: i }) =>
                                      (0, o._O)(s, { params: t, request: i.withEndpoint(n.ZP).fetchMemberships })({ actionTypes: u, context: "LIST_MEMBERSHIPS", meta: { direction: t.cursor ? d.Yj.BOTTOM : d.Yj.TOP, key: e } }, (e) => {
                                          if (e) {
                                              const { entities: t } = e;
                                              return t ? [(0, c.dP)(t)] : void 0;
                                          }
                                      })
                              )(e, t),
                          )
                        : Promise.resolve();
                };
            i.Z.register({
                [m]: function (e = E, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case u.REQUEST: {
                            const { direction: s, key: r } = t.meta,
                                n = e[r] || S,
                                i = { ...n.fetchStatus };
                            return (i[s] = a.ZP.LOADING), { ...e, [r]: { ...n, fetchStatus: i } };
                        }
                        case u.SUCCESS: {
                            const { direction: s, key: n } = t.meta,
                                i = e[n] || S,
                                o = { ...i.fetchStatus };
                            o[s] = a.ZP.LOADED;
                            const c = t.payload?.result?.lists || [],
                                d = (0, r.Z)([...i.data.lists, ...c]);
                            return { ...e, [n]: { ...i, data: { ...{ ...t.payload?.result, ...i.data }, lists: d }, error: null, fetchStatus: o } };
                        }
                        case u.FAILURE: {
                            const { direction: s, key: r } = t.meta,
                                n = { ...(e[r] || S).fetchStatus };
                            return (n[s] = a.ZP.FAILED), { ...e, [r]: { ...e[r], error: t.payload, fetchStatus: n } };
                        }
                        case l: {
                            const { items: s, key: n } = t.payload || {},
                                i = e[n] || S,
                                o = (i.data && i.data.lists) || [],
                                a = (0, r.Z)([...s, ...o]);
                            return { ...e, [n]: { ...i, data: { ...i.data, lists: a } } };
                        }
                        case p: {
                            const { item: s, key: r } = t.payload || {},
                                n = e[r] || S,
                                i = (n.data && n.data.lists) || [];
                            return { ...e, [r]: { ...n, data: { ...n.data, lists: i.filter((e) => s !== e) } } };
                        }
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
                i = s(836255),
                o = s(255117),
                a = s(166506),
                c = s(919022);
            const d =
                (e, t) =>
                (s, d, { api: u, featureSwitches: l }) =>
                    s(c.ZP.mute(e, t)).then(() => {
                        const t = d(),
                            c = (0, r.Z)(i.Z.selectAll(t)).reduce((s, r) => {
                                if (null != r)
                                    if (r.user === e) s[r.id_str] = !0;
                                    else if (r.retweeted_status) {
                                        const n = i.Z.select(t, r.retweeted_status);
                                        n?.user === e && (s[r.id_str] = !0);
                                    }
                                return s;
                            }, {}),
                            u = (0, n._h)(d()),
                            l = u ? [(0, o.ZP)({ useLatest: !1, userId: u }).removeTweets(c), (0, o.ZP)({ useLatest: !0, userId: u }).removeTweets(c)] : [],
                            p = (0, a.k9)();
                        if (p.selectInitialFetchStatus(t) && !p.selectCanRefresh(t)) {
                            const s = (0, a.f8)(e, t, p);
                            s && l.push(s);
                        }
                        return s(l);
                    });
        },
        652881: (e, t, s) => {
            s.d(t, { C2: () => _, Pq: () => u, ZP: () => S, s8: () => f });
            s(136728);
            var r = s(66351),
                n = (s(585488), s(483557)),
                i = s(703710),
                o = s(750085),
                a = s(466015),
                c = s(538327),
                d = s(218951);
            const u = Object.freeze({ pinnedLists: "pinnedLists", ownedSubscribedList: "ownedSubscribedList" }),
                l = (e, t) => `${e}-list-${t}`,
                p = (e, t, s = c.P.List, r = Date.now().toString()) => a.WE({ id: e, customEntryId: t, displayType: s, sortIndex: r });
            function m(e) {
                return e.startsWith("pinned-list-module") || e.startsWith("pinnedListModule");
            }
            function h(e) {
                return e.startsWith("owned-subscribed-list-module") || e.startsWith("ownedSubscribedListModule");
            }
            const E = (e) => (e ? (0, d.Z)({ context: "FETCH_LISTS_MANAGEMENT_PAGE_TIMELINE", formatResponse: o.Z, network: { query: r.Z, variables: ({ count: e, cursor: t }, s) => ({ count: e, cursor: "string" == typeof t ? t : void 0, isListMemberTargetUserId: "0", timelineId: "listsManagementPage", ...(0, i.d)(s.apiClient.featureSwitches) }) }, initialFetchCount: 100, perfKey: "listsManagementPageGraphQL", timelineId: "listsManagementPage" }) : (0, d.Z)({ context: "FETCH_LISTS_MANAGEMENT_PAGE_TIMELINE", formatResponse: o.Z, network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchListsManagementPageTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, initialFetchCount: 100, perfKey: "listsManagementPageGraphQL", timelineId: "listsManagementPage" })),
                S = E;
            function f(e, t, s, r) {
                const n = [],
                    i = t(),
                    o = E(e),
                    a = o.selectEntries(i),
                    d = s === u.pinnedLists,
                    S = d ? m : h,
                    f = a.find(({ entryId: e }) => S(e));
                if (f) {
                    const e = l(f.entryId, r),
                        t = d ? p(r, e, c.P.ListTile, "-1") : p(r, e, c.P.ListWithPin),
                        s = !d;
                    d && (n.push(o.removeEntry(`${f.entryId}-emptyStateMessage`, !0)), n.push(o.removeEntry(`${f.entryId}-messageprompt-PinnedListsEmptyPrompt`, !0))), n.push(o.injectTimelineModuleEntry(t, f.entryId, { atTop: s }));
                }
                return n;
            }
            function _(e, t, s, r) {
                const n = [],
                    i = t(),
                    o = E(e),
                    a = o.selectEntries(i),
                    c = s === u.pinnedLists ? m : h,
                    d = a.find(({ entryId: e }) => c(e));
                if (d) {
                    const e = l(d.entryId, r);
                    n.push(o.removeEntry(e, !0));
                    const t = `${d.entryId}-${r}`;
                    n.push(o.removeEntry(t, !0));
                }
                return n;
            }
        },
        780936: (e, t, s) => {
            s.d(t, { A: () => c, Z: () => a });
            var r = s(483557),
                n = s(750085),
                i = s(466015),
                o = s(218951);
            const a = (e) => (0, o.Z)({ timelineId: `listMembersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMembersGraphQL, getEndpointParams: ({ count: t, cursor: s }) => ({ count: t, cursor: "string" == typeof s ? s : void 0, listId: e }) }, context: "FETCH_MEMBERS", perfKey: "membersGraphQL", formatResponse: n.Z }),
                c = (e, t) => (s, r) => {
                    s([...t].map((t) => e.removeEntry((0, i._Y)(t))));
                };
        },
        823885: (e, t, s) => {
            s.d(t, { Z: () => o });
            var r = s(483557),
                n = s(750085),
                i = s(218951);
            const o = (e) => (0, i.Z)({ timelineId: `listMembershipsGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMembershipsGraphQL, getEndpointParams: ({ count: t, cursor: s }) => ({ count: t, cursor: "string" == typeof s ? s : void 0, userId: e }) }, context: "FETCH_MEMBERSHIPS", perfKey: "membershipsGraphQL", formatResponse: n.Z });
        },
        164692: (e, t, s) => {
            s.d(t, { Z: () => o });
            var r = s(483557),
                n = s(750085),
                i = s(218951);
            const o = (e, t) => (0, i.Z)({ timelineId: `listOwnershipsGraphQL-${t}`, network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchOwnershipsGraphQL, getEndpointParams: ({ count: s, cursor: r }) => ({ count: s, cursor: "string" == typeof r ? r : void 0, userId: e, targetUserId: t }) }, context: "FETCH_OWNERSHIPS", perfKey: "ownershipsGraphQL", formatResponse: n.Z });
        },
        78259: (e, t, s) => {
            s.d(t, { Z: () => o });
            var r = s(483557),
                n = s(750085),
                i = s(218951);
            const o = (e) => (0, i.Z)({ timelineId: `listSubscribersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchSubscribersGraphQL, getEndpointParams: ({ count: t, cursor: s }) => ({ count: t, cursor: "string" == typeof s ? s : void 0, listId: e }) }, context: "FETCH_SUBSCRIBERS", perfKey: "subscribersGraphQL", formatResponse: n.Z });
        },
        166506: (e, t, s) => {
            s.d(t, { du: () => u, f8: () => l, k9: () => d });
            var r = s(503768),
                n = s(750085),
                i = s(962741),
                o = s(466015),
                a = s(919022),
                c = s(218951);
            const d = () => (0, c.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: n.Z }),
                u = (e) => (t, s) => {
                    const r = s();
                    t(
                        e
                            .selectEntries(r)
                            .filter((e) => {
                                const t = e.type === i.ZP.User ? e.content.id : "",
                                    s = a.ZP.select(r, t);
                                return s && !s.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                l = (e, t, s) => {
                    if (!s.selectEntries(t).find((t) => t.type === i.ZP.User && t.content.id === e)) {
                        const t = (0, o.OD)(e),
                            r = (0, o.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return s.injectEntry(r);
                    }
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Report-acb640be.7602438a.js.map

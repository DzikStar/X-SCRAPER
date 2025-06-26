"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Report-99fe8a98"],
    {
        720277: (e, t, s) => {
            s.d(t, { $7: () => se, A4: () => re, B7: () => w, C2: () => K, Gk: () => N, Kf: () => M, MB: () => L, Oq: () => k, Pt: () => U, Re: () => F, Sb: () => Y, UD: () => x, Z3: () => H, ZI: () => B, ZP: () => I, aB: () => T, g4: () => D, gN: () => b, j7: () => V, k5: () => q, kK: () => $, kL: () => ne, oH: () => W, s0: () => te, vC: () => z, xS: () => g });
            var r = s(161821),
                n = s(401388),
                a = s(948322),
                o = s(856674),
                c = s(234296),
                i = s(917799),
                u = s(312771),
                d = s(56519),
                l = s(38562),
                _ = s(275365),
                v = s(613195),
                h = s(627279),
                S = s(849585),
                E = s(923965),
                f = s(147143);
            const R = i.dg(f.A7, "FETCH_INBOX"),
                p = i.dg(f.A7, "UPDATE_LAST_SEEN_EVENT_ID"),
                C = { cursors: { [f.xR.Inbox]: { fetchStatus: u.ZP.NONE }, [f.xR.Trusted]: { fetchStatus: u.ZP.NONE }, [f.xR.Untrusted]: { fetchStatus: u.ZP.NONE }, [f.xR.UntrustedLowQuality]: { fetchStatus: u.ZP.NONE } }, lastSeenEventIds: {} };
            function I(e = C, t) {
                if (!t) return e;
                switch (t.type) {
                    case R.REQUEST: {
                        const { timelineType: s } = t.meta;
                        return { ...e, cursors: { ...e.cursors, [s]: { ...e.cursors[s], fetchStatus: u.ZP.LOADING } } };
                    }
                    case R.FAILURE: {
                        const { timelineType: s } = t.meta;
                        return { ...e, cursors: { ...e.cursors, [s]: { ...e.cursors[s], error: t.payload, fetchStatus: u.ZP.FAILED } } };
                    }
                    case R.SUCCESS: {
                        const { timelineType: s } = t.meta;
                        return { ...e, cursors: { ...e.cursors, [s]: { ...e.cursors[s], error: void 0, fetchStatus: u.ZP.LOADED } } };
                    }
                    case J:
                        return { ...e, cursors: { ...e.cursors, ...t.payload.cursors }, lastSeenEventIds: A(e.lastSeenEventIds, t.payload.lastSeenEventIds) };
                    case p.REQUEST:
                        return { ...e, lastSeenEventIds: { ...e.lastSeenEventIds, ...t.meta.lastSeenEventIds } };
                    case S.t:
                        return { ...C, cursors: { ...C.cursors, inbox: e.cursors.inbox } };
                    default:
                        return e;
                }
            }
            const A = (e, t) => ({ last_seen_event_id: y(e.last_seen_event_id, t.last_seen_event_id), trusted_last_seen_event_id: y(e.trusted_last_seen_event_id, t.trusted_last_seen_event_id), untrusted_last_seen_event_id: y(e.untrusted_last_seen_event_id, t.untrusted_last_seen_event_id) }),
                y = (e, t) => ((0, o.KH)(e, t) ? e : t),
                b = (e, t, s = "all") => {
                    const r = (0, l.Kp)(t),
                        n = (0, l.Rh)(t);
                    return r ? { ...e, filter_low_quality: n, include_quality: s } : e;
                },
                m = (e) => e[f.Yf].inbox,
                P = (e) => m(e).cursors,
                w = (e) => m(e).lastSeenEventIds,
                U = (e) => P(e)[f.xR.Inbox],
                T = (e) => P(e)[f.xR.Untrusted],
                N = (e) => P(e)[f.xR.UntrustedLowQuality],
                x = (e) => U(e).fetchStatus,
                g = (e) => x(e) === u.ZP.LOADING,
                L = (e) => x(e) === u.ZP.LOADED,
                O = { [f._2.PRIMARY]: (e) => e.trusted, [f._2.SECONDARY]: (e, t, s) => (t ? !(e.trusted || e.muted || (s && e.nsfw) || e.low_quality) : !(e.trusted || e.muted || (s && e.nsfw))), [f._2.TERTIARY]: (e, t, s) => (t ? !e.trusted && (e.muted || e.low_quality || (s && e.nsfw)) : !e.trusted && (e.muted || (s && e.nsfw))) },
                Z = (e, t) => {
                    const s = (0, l.Rh)(e),
                        n = (0, l.a5)(e);
                    return (0, r.Z)((0, v.FS)(e)).filter((e) => O[t](e.data, s, n));
                },
                D = (e, t) =>
                    Z(e, t)
                        .map((e) => e.data)
                        .sort(c.Z)
                        .map((e) => e.conversation_id),
                M = (e) =>
                    Z(e, f._2.PRIMARY)
                        .filter((e) => e?.data?.labels && e?.data?.labels?.find((e) => e.label_type === f.w1.PINNED))
                        .sort(c.l)
                        .map((e) => e?.data?.conversation_id),
                H = (e, { tag: t }) =>
                    Z(e, f._2.PRIMARY)
                        .filter((e) => e?.data?.tag?.value && e.data.tag.value === t?.value)
                        .map((e) => e?.data?.conversation_id),
                Y = (e) => {
                    const t = Z(e, f._2.PRIMARY),
                        s = Z(e, f._2.SECONDARY),
                        r = t.concat(s),
                        { last_seen_event_id: n } = w(e);
                    return Q(e, r, n);
                },
                q = (e) => {
                    const t = Z(e, f._2.SECONDARY),
                        { untrusted_last_seen_event_id: s } = w(e);
                    return Q(e, t, s);
                },
                F = (e) => {
                    let t = 0,
                        s = 0,
                        r = 0,
                        n = 0;
                    const a = Z(e, f._2.SECONDARY),
                        { untrusted_last_seen_event_id: o } = w(e);
                    return (
                        a.forEach((a) => {
                            const c = a.data?.conversation_id,
                                i = o && j(e, c, o),
                                u = G(a?.data?.social_proof);
                            i ? (u ? (t += 1) : (r += 1)) : u ? (s += 1) : (n += 1);
                        }),
                        { newUntrustedWithSocialProof: t, oldUntrustedWithSocialProof: s, newUntrustedWithoutSocialProof: r, oldUntrustedWithoutSocialProof: n }
                    );
                },
                k = (e) => {
                    const t = Z(e, f._2.SECONDARY),
                        s = Z(e, f._2.TERTIARY);
                    return t.length + s.length;
                },
                B = (e) => Z(e, f._2.TERTIARY).length,
                Q = (e, t, s) => (s ? t.reduce((t, { data: { conversation_id: r } }) => (j(e, r, s) ? t + 1 : t), 0) : 0),
                j = (e, t, s) => {
                    const r = (0, v.gq)(e, t),
                        n = (0, v.jT)(e, t);
                    return !!r && (0, o.T1)(r, s) && !n;
                },
                G = (e) => {
                    if (!e || 0 === e.length) return !1;
                    const t = e[0];
                    return t.proof_type === _.UN.MUTUAL_FRIENDS && 0 !== t.total;
                },
                W =
                    (e = {}) =>
                    (t, s, { api: r, featureSwitches: n }) => {
                        const o = s(),
                            c = (0, l.a5)(o),
                            u = b({ nsfw_filtering_enabled: c, ...e }, s());
                        return i._O(t, { params: u, request: r.withEndpoint(a.Z).fetchUserInbox })({ actionTypes: R, context: "FETCH_DM_INBOX", meta: { timelineType: f.xR.Inbox } }, (e) => {
                            if (e) {
                                const { cards: t, entries: s, publishedArticles: r, tweets: n, users: a } = e.entities;
                                return te({ ...e.result.inbox_initial_state, entries: s, users: a, tweets: n, cards: t, publishedArticles: r });
                            }
                        });
                    },
                K =
                    (e = {}) =>
                    (t, s) => {
                        const r = s(),
                            n = x(r);
                        return n !== u.ZP.LOADED && n !== u.ZP.LOADING ? t(W(e)) : Promise.resolve();
                    },
                X =
                    (e, t, s = 0) =>
                    (r, n, { api: o }) => {
                        const c = n(),
                            u = (0, l.a5)(c),
                            { min_entry_id: d, status: v } = P(c)[e],
                            h = e === f.xR.UntrustedLowQuality ? f.xR.Untrusted : e,
                            S = { ...t, max_id: d, timelineType: h, nsfw_filtering_enabled: u };
                        if (v !== _.To.HAS_MORE) return Promise.resolve();
                        return i
                            ._O(r, { params: S, request: o.withEndpoint(a.Z).fetchInboxHistory })({ actionTypes: R, context: "FETCH_DM_INBOX_HISTORY", meta: { timelineType: e } }, (t) => {
                                if (t) {
                                    const { cards: s, entries: r, publishedArticles: n, tweets: a, users: o } = t.entities,
                                        { inbox_timeline: c } = t.result;
                                    return te({ conversations: c.conversations, inbox_timelines: { [e]: c }, entries: r, users: o, tweets: a, cards: s, publishedArticles: n });
                                }
                            })
                            .then((n) => {
                                const a = n.result.inbox_timeline;
                                if (s < 3 && !a.conversations && a.status === _.To.HAS_MORE) return r(X(e, t, s + 1));
                            });
                    },
                $ = (e) => (t, s) => {
                    const r = b(e, s(), "high");
                    return t(X(f.xR.Untrusted, r));
                },
                V = (e) => (t, s) => {
                    const r = b(e, s(), "low");
                    return t(X(f.xR.UntrustedLowQuality, r));
                },
                z = (e) => (t, s) => {
                    const r = b(e, s());
                    return t(X(f.xR.Trusted, r));
                },
                J = "rweb/directMessages/UPDATE_INBOX",
                ee = (e) => {
                    const { inbox_timelines: t, ...s } = e;
                    return { payload: { cursors: t, lastSeenEventIds: s }, type: J };
                },
                te = (e = {}) => {
                    const { cards: t, conversations: s, cursor: r, entries: a, publishedArticles: o, tweets: c, users: i, ...u } = e;
                    return [(0, d.dP)({ cards: t, tweets: c, users: i, publishedArticles: o }), !(0, n.Z)(s) && (0, v.tw)(s), !(0, n.Z)(a) && (0, h.I7)(a), !(0, n.Z)(r) && (0, E.NJ)(r), !(0, n.Z)(u) && ee(u)].filter((e) => e);
                },
                se = () => (e) => e(ne({ withTrusted: !0 })),
                re = () => (e) => e(ne({ withUntrusted: !0 })),
                ne =
                    ({ withTrusted: e, withUntrusted: t } = {}) =>
                    (s, r, { api: n }) => {
                        const c = r(),
                            u = (0, v.FS)(c),
                            d = w(c),
                            { last_seen_event_id: l, trusted_last_seen_event_id: _, untrusted_last_seen_event_id: h } = d,
                            S = Object.values(u).reduce((e, { data: { sort_event_id: t, trusted: s } }) => ((e.last_seen_event_id = y(e.last_seen_event_id, t)), (e.trusted_last_seen_event_id = s ? y(e.trusted_last_seen_event_id, t) : e.trusted_last_seen_event_id), (e.untrusted_last_seen_event_id = s ? e.untrusted_last_seen_event_id : y(e.untrusted_last_seen_event_id, t)), e), { ...d });
                        if ((0, o.T1)(S.last_seen_event_id, l) || (e && (0, o.T1)(S.trusted_last_seen_event_id, _)) || (t && (0, o.T1)(S.untrusted_last_seen_event_id, h))) {
                            e || delete S.trusted_last_seen_event_id, t || delete S.untrusted_last_seen_event_id;
                            return i.AB(s, { params: S, request: n.withEndpoint(a.Z).updateLastSeenEventId })({ actionTypes: p, context: "APP_DM_UPDATE_LAST_SEEN", meta: { lastSeenEventIds: S } });
                        }
                        return Promise.resolve();
                    };
        },
        296196: (e, t, s) => {
            s.r(t),
                s.d(t, {
                    GLOBAL_STATE_KEY: () => S.Yf,
                    acceptConversation: () => a.tF,
                    addAvatarMedia: () => a._D,
                    addParticipants: () => a.ck,
                    addRecentSearches: () => N,
                    addWelcomeMessageToConversation: () => a.Qe,
                    clearRecentSearch: () => x,
                    clearRecentSearches: () => g,
                    clearSearchCache: () => I,
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
                    fetchInbox: () => c.oH,
                    fetchInboxIfNeeded: () => c.C2,
                    fetchPermissions: () => a.qg,
                    fetchTrustedInboxHistory: () => c.vC,
                    fetchUntrustedInboxHistory: () => c.kK,
                    fetchUntrustedLowQualityInboxHistory: () => c.j7,
                    fetchUpdates: () => L.f9,
                    fetchUpdatesIfNeeded: () => L.hd,
                    leaveConversation: () => a.qH,
                    markAllAsRead: () => a.SF,
                    markConversationRead: () => a.v3,
                    markSpamStatus: () => o.kv,
                    muteDMUser: () => a.sj,
                    removeAvatarMedia: () => a.Xw,
                    removeConversation: () => a.Ae,
                    removeEntry: () => o.MY,
                    searchConversations: () => T,
                    selectConversation: () => a.xu,
                    selectConversationAvatarMediaId: () => a.aG,
                    selectConversationAvatarMediaIsUploading: () => a.W,
                    selectConversationAvatarMediaUploadProgress: () => a.UA,
                    selectConversationFetchStatus: () => a.Pr,
                    selectConversationIdsByInbox: () => c.g4,
                    selectConversationIsLoaded: () => a.gQ,
                    selectConversationIsRead: () => a.jT,
                    selectConversations: () => a.FS,
                    selectEntries: () => o.gm,
                    selectEntriesForConversation: () => o.iN,
                    selectEntry: () => o.WK,
                    selectFetchStatus: () => c.UD,
                    selectHasConversations: () => a.ax,
                    selectInboxCursor: () => c.Pt,
                    selectInboxIsLoaded: () => c.MB,
                    selectInboxTypeByConversation: () => a.Zg,
                    selectIsLoadingTop: () => c.xS,
                    selectLabelledConversationIds: () => c.Z3,
                    selectLastSeenEventIds: () => c.B7,
                    selectPinnedConversationIds: () => c.Kf,
                    selectRecentSearches: () => P,
                    selectRecipientCanNotDm: () => a.OF,
                    selectSearchConversations: () => U,
                    selectSearchFetchStatus: () => w,
                    selectUnreadCount: () => c.Sb,
                    selectUntrustedConversationCount: () => c.Oq,
                    selectUntrustedCounts: () => c.Re,
                    selectUntrustedCursor: () => c.aB,
                    selectUntrustedLowQualityConversationCount: () => c.ZI,
                    selectUntrustedLowQualityCursor: () => c.Gk,
                    selectUntrustedUnreadCount: () => c.k5,
                    selectUpdates: () => L.o8,
                    setConversationAvatar: () => a.X5,
                    toggleNotifications: () => a.$S,
                    unmuteDMUser: () => a.GP,
                    updateConversationAvatar: () => a.nI,
                    updateConversationName: () => a.FI,
                    updateConversationReadState: () => a.d0,
                    updateLastSeenEventId: () => c.kL,
                    updateTrustedLastSeenEventId: () => c.$7,
                    updateTyping: () => a.lT,
                    updateUntrustedLastSeenEventId: () => c.A4,
                });
            var r = s(118717),
                n = s(499627),
                a = s(613195),
                o = s(627279),
                c = s(720277),
                i = (s(136728), s(468811)),
                u = s.n(i),
                d = s(948322),
                l = s(917799),
                _ = s(312771),
                v = s(390387),
                h = s(849585),
                S = s(147143);
            const E = "rweb.recentDMSearches",
                f = Object.freeze({ REQUEST: "rweb/directMessages/SEARCH_REQUEST", SUCCESS: "rweb/directMessages/SEARCH_SUCCESS", FAILURE: "rweb/directMessages/SEARCH_FAILURE" }),
                R = "rweb/directMessages/ADD_RECENT_SEARCHES",
                p = (e) => ({ payload: e, type: R }),
                C = "rweb/directMessages/CLEAR_SEARCH_CACHE",
                I = () => ({ type: C }),
                A = "rweb/directMessages/CLEAR_RECENT_SEARCH",
                y = "rweb/directMessages/CLEAR_RECENT_SEARCHES",
                b = { searchResults: {}, recentSearches: [] };
            function m(e = b, t) {
                if (!t) return e;
                switch (t.type) {
                    case R:
                    case A:
                        return { ...e, recentSearches: t.payload || [] };
                    case y:
                        return { ...e, recentSearches: [] };
                    case f.REQUEST: {
                        const { fetchNextPage: s, preserveResults: r, query: n } = t.meta || {},
                            a = e.searchResults ? e.searchResults[n] : {},
                            o = { ...e.searchResults, [n]: { ...a, fetchStatus: r || s ? a?.fetchStatus : _.ZP.LOADING } };
                        return { ...e, searchResults: o };
                    }
                    case f.FAILURE: {
                        const { fetchNextPage: s, preserveResults: r, query: n } = t.meta || {},
                            a = e.searchResults ? e.searchResults[n] : {},
                            o = { ...e.searchResults, [n]: { ...a, fetchStatus: r || s ? a?.fetchStatus : _.ZP.FAILED, error: t.payload } };
                        return { ...e, searchResults: o };
                    }
                    case f.SUCCESS: {
                        const { query: s } = t.meta || {},
                            r = t.payload && t.payload.result ? t.payload.result : null,
                            { conversations: n, error: a } = r || {},
                            o = r?.conversationIds ? r.conversationIds : n ? Object.keys(n) : [],
                            c = e.searchResults ? e.searchResults[s] : {},
                            i = c?.conversationIds || [],
                            u = i.length && o ? i.concat(o.filter((e) => !i.includes(e))) : o,
                            d = { ...e.searchResults, [s]: { ...c, lastCursor: r?.cursor, conversationIds: u, error: a, fetchStatus: _.ZP.LOADED } };
                        return { ...e, searchResults: d };
                    }
                    case C:
                    case h.t:
                        return { ...b, recentSearches: e.recentSearches };
                    default:
                        return e;
                }
            }
            const P = (e) => e[S.Yf].search?.recentSearches,
                w = (e, t) => {
                    const s = e[S.Yf].search?.searchResults;
                    if (s) {
                        const e = s[t];
                        return e?.fetchStatus || _.ZP.NONE;
                    }
                    return _.ZP.NONE;
                },
                U = (e, t) => {
                    const s = e[S.Yf].search?.searchResults;
                    return (s && s[t]?.conversationIds) || [];
                },
                T =
                    (e) =>
                    (t, s, { api: r }) => {
                        const n = s(),
                            { fetchNextPage: a, preserveResults: o, query: i } = e || {},
                            _ = { query: i, search_type: "conversations", request_id: u().v4() },
                            v = ((e, t) => {
                                const s = e[S.Yf].search?.searchResults;
                                return (s && s[t]?.lastCursor) || null;
                            })(n, i),
                            h = ((e) => e[S.Yf].search?.searchResults)(n),
                            E = h ? h[i] : void 0,
                            R = !!v;
                        v && i && a && (_.cursor = v);
                        const p = l._O(t, { params: _, request: r.withEndpoint(d.Z).search }),
                            C = (e) => {
                                if (e && e.result) {
                                    const { conversations: t } = e.result,
                                        { users: s } = e.entities;
                                    return t && Object.values(t).forEach((e) => (e.isSearchResult = !0)), t ? (0, c.s0)({ conversations: t, users: s }) : null;
                                }
                            };
                        return !E || E?.error || o || (a && R) ? p({ actionTypes: f, context: "SEARCH", meta: { query: _.query, cursor: _.cursor, preserveResults: o, fetchNextPage: a } }, C) : (t({ type: "rweb/directMessages/SEARCH_SUCCESS", payload: { result: E }, meta: { query: i, cursor: v } }), Promise.resolve());
                    },
                N =
                    (e) =>
                    (t, s, { featureSwitches: r, userPersistence: n }) => {
                        const a = r.getNumberValue("dm_inbox_search_max_recent_searches_stored");
                        return n.get(E).then((s) => {
                            const r = s?.recentSearches || [];
                            return !r.includes(e) && r.push(e), r.length > a && r.shift(), t(p(r)), n.set(E, { recentSearches: r });
                        });
                    },
                x =
                    (e) =>
                    (t, s, { userPersistence: r }) =>
                        r.get(E).then((s) => {
                            const n = s?.recentSearches || [];
                            return n.splice(n.indexOf(e), 1), t({ payload: n, type: A }), r.set(E, { recentSearches: n });
                        }),
                g =
                    () =>
                    (e, t, { userPersistence: s }) => (e({ type: y }), s.set(E, { recentSearches: [] }));
            n.Z.register(
                { [S.Yf]: m },
                () =>
                    (e, t, { userPersistence: s }) =>
                        v.Qb(t())
                            ? Promise.resolve(
                                  s.get(E).then((t) => {
                                      const s = t?.recentSearches;
                                      s && e(p(s));
                                  }),
                              ).then(() => {})
                            : Promise.resolve(),
            );
            var L = s(923965);
            const O = (0, r.UY)({ conversations: a.ZP, entries: o.ZP, inbox: c.ZP, search: m, updates: L.ZP });
            n.Z.register({ [S.Yf]: O });
            const Z = O;
        },
        849585: (e, t, s) => {
            s.d(t, { m: () => n, t: () => r });
            const r = "rweb/directMessages/RESET",
                n = () => ({ type: r });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Report-99fe8a98.58e1cc0a.js.map

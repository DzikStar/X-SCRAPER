"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-948b2c60"],
    {
        991851: (e, t, r) => {
            r.d(t, { CD: () => U, yb: () => f, oy: () => h, oo: () => Z, JH: () => y, YQ: () => u, IZ: () => T, SN: () => S, Qy: () => _, PR: () => F });
            var n = r(118717),
                s = r(499627),
                o = r(226395),
                i = r(917799),
                a = r(312771);
            const c = "trends",
                d = "locations",
                E = Object.freeze({ REQUEST: "rweb/trends/placeTrendsLocations/FETCH_TRENDS_LOCATIONS_REQUEST", SUCCESS: "rweb/trends/placeTrendsLocations/FETCH_TRENDS_LOCATIONS_SUCCESS", FAILURE: "rweb/trends/placeTrendsLocations/FETCH_TRENDS_LOCATIONS_FAILURE" }),
                p = Object.freeze({ REQUEST: "rweb/trends/woeTrendsLocations/FETCH_TRENDS_LOCATIONS_REQUEST", SUCCESS: "rweb/trends/woeTrendsLocations/FETCH_TRENDS_LOCATIONS_SUCCESS", FAILURE: "rweb/trends/woeTrendsLocations/FETCH_TRENDS_LOCATIONS_FAILURE" }),
                l = { placeTrendsLocations: [], placeTrendsFetchStatus: a.ZP.NONE, woeTrendsLocations: [], woeTrendsFetchStatus: a.ZP.NONE };
            const u = (e) => e[c][d].placeTrendsLocations,
                T = (e) => e[c][d].placeTrendsFetchStatus,
                S = (e) => e[c][d].woeTrendsLocations,
                _ = (e) => e[c][d].woeTrendsFetchStatus,
                f =
                    (e) =>
                    (t, r, { api: n }) =>
                        i._O(t, { params: e, request: n.withEndpoint(o.Z).fetchPlaceTrendsLocations })({ actionTypes: E, context: "FETCH_TRENDS_LOCATIONS" }),
                h =
                    () =>
                    (e, t, { api: r }) =>
                        _(t()) === a.ZP.LOADED ? Promise.resolve() : e(L()),
                L =
                    () =>
                    (e, t, { api: r }) =>
                        i._O(e, { params: {}, request: r.withEndpoint(o.Z).fetchWoeTrendsLocations })({ actionTypes: p, context: "FETCH_TRENDS_LOCATIONS" });
            var N = r(401388),
                I = r(390387),
                w = r(371493);
            const C = "settings",
                m = Object.freeze({ REQUEST: "rweb/trends/UPDATE_TRENDS_SETTINGS_REQUEST", SUCCESS: "rweb/trends/UPDATE_TRENDS_SETTINGS_SUCCESS", FAILURE: "rweb/trends/UPDATE_TRENDS_SETTINGS_FAILURE" }),
                R = Object.freeze({ REQUEST: "rweb/trends/FETCH_TRENDS_SETTINGS_REQUEST", SUCCESS: "rweb/trends/FETCH_TRENDS_SETTINGS_SUCCESS", FAILURE: "rweb/trends/FETCH_TRENDS_SETTINGS_FAILURE" }),
                g = { settings: {}, fetchStatus: a.ZP.NONE };
            const Z = (e) => e[c][C] && e[c][C].settings,
                y = (e) => e[c][C] && e[c][C].fetchStatus,
                U = () => (e, t) => (y(t()) === a.ZP.LOADED ? Promise.resolve() : e((e, t, { api: r }) => (I.Qb(t()) ? i._O(e, { request: r.withEndpoint(o.Z).fetchPlaceTrendSettings })({ actionTypes: R, context: "FETCH_TRENDS_SETTINGS" }) : Promise.resolve()))),
                F =
                    (e) =>
                    (t, r, { api: n }) => {
                        if ((0, N.Z)(e)) return Promise.resolve();
                        const { places: s, ...a } = e,
                            c = { ...a };
                        e.places && e.places.length && (c.places = e.places.map((e) => e.place_id));
                        return i
                            ._O(t, { params: c, request: n.withEndpoint(o.Z).updatePlaceTrendSettings })({ actionTypes: m, context: "UPDATE_TRENDS_SETTINGS", meta: e })
                            .then(() => t((0, w.$N)()));
                    },
                O = {
                    settings: function (e = g, t) {
                        if (!t) return e;
                        switch (t.type) {
                            case R.REQUEST:
                                return { ...e, fetchStatus: a.ZP.LOADING };
                            case R.SUCCESS:
                                return { ...e, settings: { ...e.settings, ...t.payload }, fetchStatus: a.ZP.LOADED };
                            case m.SUCCESS:
                                return { ...e, settings: { ...e.settings, ...t.meta }, fetchStatus: a.ZP.LOADED };
                            case R.FAILURE:
                                return { ...e, fetchStatus: a.ZP.FAILED };
                            default:
                                return e;
                        }
                    },
                    locations: function (e = l, t) {
                        if (!t) return e;
                        switch (t.type) {
                            case E.REQUEST:
                                return { ...e, placeTrendsFetchStatus: a.ZP.LOADING };
                            case E.FAILURE:
                                return { ...e, placeTrendsFetchStatus: a.ZP.FAILED };
                            case E.SUCCESS:
                                return t.payload ? { ...e, placeTrendsLocations: t.payload, placeTrendsFetchStatus: a.ZP.LOADED } : e;
                            case p.REQUEST:
                                return { ...e, woeTrendsFetchStatus: a.ZP.LOADING };
                            case p.FAILURE:
                                return { ...e, woeTrendsFetchStatus: a.ZP.FAILED };
                            case p.SUCCESS:
                                return t.payload ? { ...e, woeTrendsLocations: t.payload, woeTrendsFetchStatus: a.ZP.LOADED } : e;
                            default:
                                return e;
                        }
                    },
                },
                D = (0, n.UY)(O);
            s.Z.register({ [c]: D });
        },
        336429: (e, t, r) => {
            r.d(t, { R: () => u });
            var n = r(745123),
                s = r(218951),
                o = (r(136728), r(192337)),
                i = r(650706),
                a = r(466015),
                c = r(409438);
            const d = (e, t = {}) => {
                    const { cursor: r } = t,
                        n = [];
                    if (e.result.users.length > 0) {
                        let t = (r && "object" == typeof r ? r.sortValue : Date.now()) - 1;
                        e.result.users.forEach((e) => {
                            n.push(a.$0({ id: e, sortIndex: `${t}`, displayType: c.Z.UserDetailed })), (t -= 1);
                        }),
                            n.push(...E(e, t));
                    }
                    return p(n, e.entities, l);
                },
                E = (e, t) => {
                    const { next_cursor_str: r } = e.result;
                    if ("0" === r) return [];
                    return [o.Tx({ cursorType: o.CursorType.Bottom, value: { param: "cursor", id: r || "-1", sortValue: t }, sortIndex: `${t}` })];
                },
                p = (e, t, r) => ({ globalObjects: t, timeline: { responseObjects: r, instructions: e.length ? [{ type: i.Z.AddEntries, parameters: { entries: e } }] : [] } }),
                l = { feedbackActions: {} },
                u = (e) =>
                    (0, s.Z)({
                        timelineId: `deviceFollowingLegacy-${e}`,
                        network: {
                            getEndpoint: (e) => {
                                return (
                                    (t = e.withEndpoint(n.Z).fetchFollowing),
                                    ({ cursor: e, ...r }, n) => {
                                        let s = r;
                                        return e && "object" == typeof e && (s = { ...r, [e.param]: e.id }), t(s, n);
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
            r.d(t, { L: () => c, X: () => a });
            var n = r(919299),
                s = r(750085),
                o = r(919022),
                i = r(218951);
            const a = (e) => (0, i.Z)({ timelineId: `dmMutedUsersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchDMMutedUsers, getEndpointParams: (t) => ({ user_id: e, ...t }) }, context: "FETCH_DM_MUTED_USERS", perfKey: "dmMutedUsersGraphql", formatResponse: s.Z }),
                c = (e) => (t, r) => {
                    const n = r();
                    t(
                        e
                            .selectEntries(n)
                            .filter((e) => {
                                const t = e.content.id,
                                    r = o.ZP.select(n, t);
                                return r && !r.dm_muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                };
        },
        371493: (e, t, r) => {
            r.d(t, { $N: () => L, G0: () => h, Jj: () => N, O9: () => T, S: () => S, fy: () => _, jz: () => I, nm: () => f, qk: () => p, uI: () => l });
            var n = r(912021),
                s = r(644829),
                o = r(740527),
                i = r(750085),
                a = r(555875),
                c = r(899105),
                d = r(218951);
            const E = Object.freeze({ Trends: "trends" }),
                p = Object.freeze({ WebSidebar: "web_sidebar" }),
                l = "explore-",
                u = 9e5;
            const T = ({ contentType: e, displayLocation: t, exploreGraphQLEnabled: r = !1, focalTweetId: n, includePageConfiguration: i = !1, initialTabId: a, profileUserId: E }) => {
                    const p = e || t || "main",
                        T = (function (e, t, r, n) {
                            return r ? `${e}${t}-tweet-${r}` : n ? `${e}${t}-user-${n}` : `${e}${t}`;
                        })(r ? "explore-graphql-" : l, p, n, E),
                        S = { timelineId: T, formatResponse: c.Z, network: { getEndpoint: (e) => e.withEndpoint(s.Z).fetchExplore, getEndpointParams: (r) => ({ ...r, candidate_source: e, display_location: t, focal_tweet_id: n, include_page_configuration: i, initial_tab_id: a, profile_user_id: E, entity_tokens: !1 }) }, context: r ? "FETCH_EXPLORE_GQL" : "FETCH_EXPLORE", perfKey: `${l}${p}`, staleIntervalMs: u };
                    return r ? (0, d.Z)({ ...S, formatResponse: o.Z, network: { ...S.network, getEndpoint: (e) => e.withEndpoint(s.Z).fetchExploreGraphQL } }) : (0, d.Z)(S);
                },
                S = () => {
                    const e = "explore-sidebar-gql",
                        t = { timelineId: e, formatResponse: i.Z, network: { getEndpoint: (e) => e.withEndpoint(s.Z).fetchExploreSidebarGraphQL, getEndpointParams: () => ({}) }, context: "FETCH_EXPLORE_SIDEBAR", perfKey: e, staleIntervalMs: u };
                    return (0, d.Z)(t);
                },
                _ = (e, t) => T({ exploreGraphQLEnabled: e, includePageConfiguration: !0, initialTabId: t }),
                f = (0, n.Z)((e) => T({ exploreGraphQLEnabled: e, contentType: E.Trends })),
                h = (0, n.Z)((e) => T({ exploreGraphQLEnabled: e, displayLocation: p.WebSidebar })),
                L = () => (e, t) =>
                    e(
                        (0, a.CY)(t())
                            .filter((e) => 0 === e.indexOf(l))
                            .map((e) => (0, a.$q)(e)),
                    ),
                N = (e) => {
                    const t = `trend-relevant-users-${e}-gql`,
                        r = { timelineId: t, formatResponse: i.Z, network: { getEndpoint: (e) => e.withEndpoint(s.Z).fetchTrendRelevantUsersGraphQL, getEndpointParams: () => ({ trendId: e }) }, context: "FETCH_TREND_RELEVANT_USERS", perfKey: t, staleIntervalMs: u };
                    return (0, d.Z)(r);
                },
                I = (e) => (0, d.Z)({ timelineId: `trendingEventHistoryGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(s.Z).fetchTrendHistory, getEndpointParams: () => ({ trendId: e }) }, formatResponse: i.Z, context: "FETCH_TREND_HISTORY", perfKey: "trendingEventHistoryGraphQL" });
        },
        166506: (e, t, r) => {
            r.d(t, { du: () => E, f8: () => p, k9: () => d });
            var n = r(503768),
                s = r(750085),
                o = r(962741),
                i = r(466015),
                a = r(919022),
                c = r(218951);
            const d = () => (0, c.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: s.Z }),
                E = (e) => (t, r) => {
                    const n = r();
                    t(
                        e
                            .selectEntries(n)
                            .filter((e) => {
                                const t = e.type === o.ZP.User ? e.content.id : "",
                                    r = a.ZP.select(n, t);
                                return r && !r.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                p = (e, t, r) => {
                    if (!r.selectEntries(t).find((t) => t.type === o.ZP.User && t.content.id === e)) {
                        const t = (0, i.OD)(e),
                            n = (0, i.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return r.injectEntry(n);
                    }
                };
        },
        774006: (e, t, r) => {
            r.d(t, { Z: () => S, u: () => T });
            var n = r(644829),
                s = r(750085),
                o = r(903019),
                i = r(883432),
                a = r(555875),
                c = r(218951);
            const d = "search-",
                E = " near:me",
                p = " filter:follows",
                l = { [o.N3.Image]: { result_filter: o.N3.Image }, [o.N3.List]: { result_filter: o.N3.List }, [o.N3.Live]: { tweet_search_mode: o.N3.Live }, [o.N3.Media]: { result_filter: o.N3.Media }, [o.N3.Top]: {}, [o.N3.User]: { result_filter: o.N3.User }, [o.N3.Video]: { result_filter: o.N3.Video } },
                u = (e) => (((e) => e === i.Z.SpellingCorrectionRevertClick || e === i.Z.SpellingExpansionRevertClick)(e) ? "-revert" : ""),
                T = () => (e, t) => {
                    e(
                        (0, a.CY)(t())
                            .filter((e) => 0 === e.indexOf(d))
                            .map((e) => (0, a.$q)(e)),
                    );
                },
                S = ({ query: e, searchMode: t = o.N3.Top, querySource: r, searchFilters: i, vertical: a, urtEndpointOptions: T, searchTimelinesGraphQLEnabled: S }) => {
                    const _ = u(r),
                        f = i && i.peopleFilter ? "searcher_follows" : void 0,
                        h = f ? "-pf" : "",
                        L = i && i.locationFilter && !e.includes(E) ? `${e}${E}` : e,
                        N = { timelineId: `${d}${L}-${t}${_}${h}`, network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchSearch, getEndpointParams: (e) => ({ ...T?.requestParams, q: L, social_filter: f, vertical: a, ...l[t], ...e }) }, context: "FETCH_SEARCH_TIMELINE", perfKey: "search", staleIntervalMs: t === o.N3.Live ? 5e3 : void 0, timelineType: "search" };
                    if (S) {
                        const e = f && !L.includes(p) ? `${L}${p}` : L,
                            i = ((e) => {
                                switch (e) {
                                    case o.N3.Image:
                                        return "Photos";
                                    case o.N3.List:
                                        return "Lists";
                                    case o.N3.Media:
                                        return "Media";
                                    case o.N3.Top:
                                        return "Top";
                                    case o.N3.User:
                                        return "People";
                                    case o.N3.Video:
                                        return "Videos";
                                    case o.N3.Live:
                                    default:
                                        return "Latest";
                                }
                            })(t),
                            a = `gql-${d}${L}-${t}${_}${h}`;
                        return (0, c.Z)({ ...N, timelineId: a, context: "FETCH_SEARCH_GRAPHQL_TIMELINE", formatResponse: s.Z, network: { getEndpointParams: ({ count: t, cursor: n }) => ({ rawQuery: e, count: t, product: i, querySource: r, cursor: "string" == typeof n ? n : void 0 }), getEndpoint: (e) => e.withEndpoint(n.Z).fetchSearchGraphQL } });
                    }
                    return (0, c.Z)(N);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-948b2c60.5a7da03a.js.map

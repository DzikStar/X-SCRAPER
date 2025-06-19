"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-8ed0fac5"],
    {
        408686: (e, t, n) => {
            n.d(t, { Qr: () => a, n8: () => s });
            var i = n(803224),
                r = n(411240);
            const s = (e) => {
                    const t = e?.[0]?.placement?.scrollY();
                    return 0 === t ? (0, r.Z)(e, (e) => (e.placement ? e.placement.distanceToTop() : Number.MAX_VALUE)) : (0, r.Z)(e, (e) => (e.placement ? e.placement.distanceToCenter() : Number.MAX_VALUE));
                },
                a = (e) => {
                    const t = e.filter((e) => e.playbackPriority === i.W.DOCKABLE);
                    return t.length ? t[0] : s(e);
                };
        },
        940847: (e, t, n) => {
            n.d(t, { V: () => E, x: () => c });
            n(136728);
            var i = n(307859),
                r = n(917799);
            Object.freeze({ REQUEST: "rweb/saveTrend/SAVE_TREND_REQUEST", SUCCESS: "rweb/saveTrend/SAVE_TREND_SUCCESS", FAILURE: "rweb/saveTrend/SAVE_TREND_FAILURE" });
            const s = Object.freeze({ REQUEST: "rweb/reportTrend/REPORT_TREND_REQUEST", SUCCESS: "rweb/reportTrend/REPORT_TREND_SUCCESS", FAILURE: "rweb/reportTrend/REPORT_TREND_FAILURE" }),
                a = Object.freeze({ REQUEST: "rweb/actionTrend/REPORT_TREND_REQUEST", SUCCESS: "rweb/actionTrend/REPORT_TREND_SUCCESS", FAILURE: "rweb/actionTrend/REPORT_TREND_FAILURE" });
            const o = {
                    aiTrendReport: function () {
                        return { type: "rweb/aiTrend/AI_TREND_REPORT" };
                    },
                    aiTrendAction: function () {
                        return { type: "rweb/aiTrend/AI_TREND_ACTION" };
                    },
                },
                c =
                    (e) =>
                    (t, n, { api: a }) =>
                        r._O(t, { request: a.withEndpoint(i.Z).reportTrend, params: { trendId: e } })({ actionTypes: s, context: "REPORT_TREND", meta: {} }, (e) => {
                            const t = [];
                            return e && t.push(o.aiTrendReport()), t;
                        }),
                E =
                    (e, t) =>
                    (n, s, { api: c }) =>
                        r._O(n, { request: c.withEndpoint(i.Z).actionTrend, params: { trendId: e, action: t } })({ actionTypes: a, context: "ACTION_TREND", meta: {} }, (e) => {
                            const t = [];
                            return e && t.push(o.aiTrendAction()), t;
                        });
        },
        148843: (e, t, n) => {
            n.d(t, { Z: () => d });
            var i = n(307859),
                r = n(502909),
                s = n(600823);
            const a = (0, r.ZP)({ namespace: "aitrends", entityIsComplete: (e, t = ["page"]) => !!e && t.every((t) => t in e && null !== e[t] && void 0 !== e[t]) }),
                o = (0, r.tb)(a, { context: "FETCH_AI_TREND", endpoint: (e) => e.withEndpoint(i.Z).aiTrendByRestId, params: ([e], t) => ({ trendId: e, ...t }) }),
                c = {
                    save: (0, r.Tx)(a, "save", {
                        getParams: (e, { isSaved: t, trendId: n } = {}) => ({ trendId: n, isSaved: t }),
                        getApiMethod: (e) => e.withEndpoint(i.Z).saveTrend,
                        context: "SAVE_TREND",
                        mapResponseToActions: (e, t, n) => (i) => {
                            const r = n().entities.aitrends.entities[e],
                                s = r?.page;
                            if (s) return [a.updateOne(e, { page: { ...s, is_saved: t.isSaved } })];
                        },
                    }),
                },
                E = { ...a, ...o, ...c },
                d = s.Z.register(E);
        },
        256727: (e, t, n) => {
            n.d(t, { Z: () => a });
            var i = n(502909),
                r = n(600823);
            const s = { ...(0, i.ZP)({ namespace: "commerceItems" }) },
                a = r.Z.register(s);
        },
        899455: (e, t, n) => {
            n.d(t, { Z: () => s });
            var i = n(772826),
                r = n(545521);
            const s = (e) => (0, r.Z)({ contextSuffix: "LIVE_COMMERCE_ITEMS_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(i.Z).fetchLiveCommerceItemsSlice, getEndpointParams: () => ({ liveEventId: e }), sliceKey: `liveCommerceItemsSlice-${e}` });
        },
        125793: (e, t, n) => {
            n.d(t, { At: () => T, d_: () => u, mF: () => l });
            var i = n(499627),
                r = n(312771);
            const s = "liveEventInterstitials",
                a = "rweb.liveEventInterstitials",
                o = Object.freeze({ REQUEST: "rweb/liveEventInterstitials/FETCH_SEEN_EVENT_IDS_REQUEST", SUCCESS: "rweb/liveEventInterstitials/FETCH_SEEN_EVENT_IDS_SUCCESS", FAILURE: "rweb/liveEventInterstitials/FETCH_SEEN_EVENT_IDS_FAILURE" }),
                c = { seenEvents: [], fetchStatus: r.ZP.NONE };
            const E = () => ({ type: o.FAILURE }),
                d = (e) => ({ type: o.SUCCESS, payload: e }),
                p = (e) => e[s].seenEvents,
                l = (e, t) => {
                    const n = p(e),
                        i = n?.find(({ eventId: e }) => e === t);
                    return !!i && Date.now() - i.lastSeenTimestamp < 24192e5;
                },
                u =
                    () =>
                    (e, t, { userPersistence: n }) =>
                        t()[s].fetchStatus === r.ZP.LOADED
                            ? Promise.resolve()
                            : (e({ type: o.REQUEST }),
                              n
                                  .get(a)
                                  .then((t) => {
                                      e(t?.seenEvents ? d(t.seenEvents) : E());
                                  })
                                  .catch(() => {
                                      e(E());
                                  })),
                T = (e) => (t, n) => {
                    const i = [...p(n()), { eventId: e, lastSeenTimestamp: Date.now() }];
                    return (
                        t(d(i)),
                        t(
                            (
                                (e) =>
                                (t, n, { userPersistence: i }) =>
                                    i.set(a, { seenEvents: e }).catch(() => {})
                            )(i),
                        )
                    );
                };
            i.Z.register({
                [s]: function (e = c, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case o.REQUEST:
                            return { ...e, fetchStatus: r.ZP.LOADING };
                        case o.FAILURE:
                            return { ...e, fetchStatus: r.ZP.FAILED };
                        case o.SUCCESS:
                            return t.payload ? { seenEvents: t.payload, fetchStatus: r.ZP.LOADED } : e;
                        default:
                            return e;
                    }
                },
            });
        },
        197914: (e, t, n) => {
            n.d(t, { Z: () => d });
            var i = n(112510),
                r = n(502909),
                s = n(600823),
                a = n(557281);
            const o = (e, t, n) => {
                    const i = e.entities[t.meta.entityId],
                        r = i && i.liveEventDetails;
                    return /_REQUEST$/.test(t.type) && r ? { ...e, entities: { ...e.entities, [r.id_str]: { ...i, liveEventDetails: { ...r, remind_me_subscription: { ...r.remind_me_subscription, ...n(r.remind_me_subscription) } } } } } : e;
                },
                c = (0, r.ZP)({
                    namespace: "liveEvents",
                    fetchOneContext: "FETCH_LIVE_EVENT",
                    fetchOneEndpoint: (e) => (t, n) =>
                        e
                            .withEndpoint(i.Z)
                            .fetchLiveEventMetadata(t, n)
                            .then((e) => {
                                const { eventId: n } = t;
                                return E(e, n);
                            }),
                    fetchOneParams: ([e], t, n) => ({ eventId: e, ...t }),
                    withApiErrorHandler: !1,
                    customActions: { subscribe: { reducer: (e, t) => o(e, t, (e) => ({ subscribed: !0 })), getParams: (e, t) => ({ eventId: e, params: t }), getApiMethod: (e) => e.withEndpoint(i.Z).updateRemindMeSubscription }, unSubscribe: { reducer: (e, t) => o(e, t, (e) => ({ subscribed: !1 })), getParams: (e, t) => ({ eventId: e, params: t }), getApiMethod: (e) => e.withEndpoint(i.Z).updateRemindMeSubscription } },
                });
            (c.selectHydratedTweet = (e, t) => e.tweets && (0, a.F)(e.tweets, {}, e.users, {}, t)),
                (c.selectIsTOO = (e, t) => {
                    const n = t ? c.select(e, t) : void 0;
                    return !!n && !!n.liveEventDetails && !n.liveEventDetails.attribution_user_id;
                });
            const E = (e, t) => {
                    const { entities: n, result: i } = e,
                        { audiospaces: r, broadcasts: s, liveEvents: a, slates: o, tweets: c, users: E, ...d } = n,
                        p = { liveEventDetails: a[t], audiospaces: r, broadcasts: s, response: i.response, slates: o, tweets: c, users: E };
                    return { entities: { ...d, liveEvents: { [t]: p } } };
                },
                d = s.Z.register(c);
        },
        545521: (e, t, n) => {
            n.d(t, { Z: () => p });
            var i = n(99107),
                r = n(166852),
                s = n(841198),
                a = n(917799),
                o = n(312771),
                c = n(56519),
                E = n(877848);
            const d = (e) => [(0, c.dP)(e)];
            function p({ contextSuffix: e, getEndpointParams: t, getFetchApiEndpoint: n, mapEntitiesToActions: c = d, sliceKey: p, injectionOptions: { identityFunction: l } = {} }) {
                const u = [],
                    T = (e) => e[s.Yf]?.[p],
                    _ = (e) => {
                        const t = T(e);
                        if (!t) return u;
                        const n = t.items || u,
                            i = t.injections;
                        return i?.length > 0 ? (0, r.Z)(i.concat(n), l) : n;
                    },
                    m = (e) => {
                        const t = T(e),
                            n = _(e),
                            i = n?.length > 0;
                        return t ? (0, o.ke)(t.fetchStatus, i) : o.ZP.NONE;
                    },
                    S =
                        (i) =>
                        (r, o, { api: E }) => {
                            const d = t(i);
                            return (0, a._O)(r, { params: d, request: n(E) })(s.t5({ contextSuffix: e, params: i, sliceKey: p }), (e) => {
                                if (e) return c(e.entities);
                            });
                        };
                return {
                    select: T,
                    selectItems: _,
                    selectFetchStatus: m,
                    fetch: S,
                    fetchIfNeeded: (e) => (t, n) => {
                        const r = n(),
                            s = T(r),
                            a = m(r);
                        return !s || (a !== o.ZP.LOADING && a !== o.ZP.LOADED) ? t(S(e)) : i.O4.resolve();
                    },
                    fetchBottom: (e) => (t, n) => {
                        const r = n(),
                            s = T(r),
                            a = ((e) => {
                                const t = T(e);
                                return t?.cursors?.next_cursor;
                            })(r);
                        return s.fetchStatus[E.Yj.BOTTOM] !== o.ZP.LOADING && a ? t(S({ ...e, cursor: a })) : i.O4.resolve();
                    },
                    injectItems: (e) => s.WC({ items: e, sliceKey: p, identityFunction: l }),
                    removeItems: (e) => s.Er({ items: e, sliceKey: p, identityFunction: l }),
                };
            }
        },
        841198: (e, t, n) => {
            n.d(t, { Be: () => v, Er: () => h, Ev: () => m, WC: () => y, Yf: () => p, t5: () => b });
            n(571372);
            var i = n(166852),
                r = n(370751),
                s = n(499627),
                a = n(917799),
                o = n(312771),
                c = n(877848);
            const E = {},
                d = [],
                p = "slices",
                l = () => ({ cursors: {}, fetchStatus: { top: o.ZP.NONE, bottom: o.ZP.NONE }, items: d, injections: d }),
                u = (0, a.dg)("rweb/slices", "FETCH");
            const T = (e, t) => {
                    if (!t) return e;
                    switch (t.type) {
                        case u.REQUEST: {
                            const { direction: n } = t.meta;
                            return n ? { ...e, fetchStatus: { ...e.fetchStatus, [n]: o.ZP.LOADING } } : e;
                        }
                        case u.SUCCESS: {
                            const { direction: n } = t.meta,
                                r = t.payload,
                                s = e.items;
                            return !n || r instanceof Error ? e : { ...e, items: (0, i.Z)(s.concat(r?.result)), cursors: { ...r?.slice_info }, error: null, fetchStatus: { ...e.fetchStatus, [n]: o.ZP.LOADED } };
                        }
                        case u.FAILURE: {
                            const { direction: n } = t.meta;
                            return n ? { ...e, error: t.payload, fetchStatus: { ...e.fetchStatus, [n]: o.ZP.FAILED } } : e;
                        }
                        default:
                            return e;
                    }
                },
                _ = "rweb/slices/CLEAR_PARTIAL_SLICES_CACHE",
                m = (e) => ({ type: _, meta: { sliceKey: e } }),
                S = "rweb/slices/DELETE_SLICE",
                v = (e) => ({ type: S, meta: { sliceKey: e } }),
                f = "rweb/slices/RESTORE_SLICE",
                I = "rweb/slices/INJECT_ITEMS_SLICE",
                y = ({ identityFunction: e, items: t, sliceKey: n }) => ({ type: I, meta: { sliceKey: n, identityFunction: e }, payload: t }),
                R = "rweb/slices/REMOVE_ITEMS_SLICE",
                h = ({ identityFunction: e, items: t, sliceKey: n }) => ({ type: R, meta: { sliceKey: n, identityFunction: e }, payload: t }),
                b = ({ contextSuffix: e, params: t, sliceKey: n }) => ({ actionTypes: u, context: `FETCH_${e}`, meta: { sliceKey: n, direction: t?.cursor ? c.Yj.BOTTOM : c.Yj.TOP } });
            s.Z.register({
                [p]: function (e = E, t) {
                    if (!t) return e;
                    const { sliceKey: n } = t.meta || {};
                    if (!n) return e;
                    switch (t.type) {
                        case S: {
                            const t = { ...e };
                            return delete t[n], t;
                        }
                        case f:
                            return { ...e, [n]: t.payload };
                        case _: {
                            const t = { ...e };
                            return (
                                Object.keys(t).forEach((e) => {
                                    e.includes(n) && delete t[e];
                                }),
                                t
                            );
                        }
                        case I: {
                            const r = e[n] || l(),
                                s = t.meta.identityFunction ? t.meta.identityFunction : void 0,
                                a = Array.isArray(t.payload) ? t.payload : void 0;
                            return a?.length ? { ...e, [n]: { ...r, injections: (0, i.Z)(a.concat(r.injections), s) } } : e;
                        }
                        case R: {
                            const i = e[n] || l(),
                                s = t.meta.identityFunction ? t.meta.identityFunction : void 0,
                                a = Array.isArray(t.payload) ? (0, r.Z)(s ? t.payload.map(s) : t.payload) : void 0,
                                o = (e, t) => !a?.has(s ? s(e, t, i.injections) : e);
                            return a?.size ? { ...e, [n]: { ...i, injections: i.injections.filter(o), items: i.items.filter(o) } } : e;
                        }
                        default: {
                            const i = e[n] || l(),
                                r = T(i, t);
                            return { ...e, [n]: { ...r } };
                        }
                    }
                },
            });
        },
        371493: (e, t, n) => {
            n.d(t, { $N: () => f, G0: () => v, Jj: () => I, O9: () => T, S: () => _, fy: () => m, jz: () => y, nm: () => S, qk: () => p, uI: () => l });
            var i = n(912021),
                r = n(644829),
                s = n(740527),
                a = n(750085),
                o = n(555875),
                c = n(899105),
                E = n(218951);
            const d = Object.freeze({ Trends: "trends" }),
                p = Object.freeze({ WebSidebar: "web_sidebar" }),
                l = "explore-",
                u = 9e5;
            const T = ({ contentType: e, displayLocation: t, exploreGraphQLEnabled: n = !1, focalTweetId: i, includePageConfiguration: a = !1, initialTabId: o, profileUserId: d }) => {
                    const p = e || t || "main",
                        T = (function (e, t, n, i) {
                            return n ? `${e}${t}-tweet-${n}` : i ? `${e}${t}-user-${i}` : `${e}${t}`;
                        })(n ? "explore-graphql-" : l, p, i, d),
                        _ = { timelineId: T, formatResponse: c.Z, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchExplore, getEndpointParams: (n) => ({ ...n, candidate_source: e, display_location: t, focal_tweet_id: i, include_page_configuration: a, initial_tab_id: o, profile_user_id: d, entity_tokens: !1 }) }, context: n ? "FETCH_EXPLORE_GQL" : "FETCH_EXPLORE", perfKey: `${l}${p}`, staleIntervalMs: u };
                    return n ? (0, E.Z)({ ..._, formatResponse: s.Z, network: { ..._.network, getEndpoint: (e) => e.withEndpoint(r.Z).fetchExploreGraphQL } }) : (0, E.Z)(_);
                },
                _ = () => {
                    const e = "explore-sidebar-gql",
                        t = { timelineId: e, formatResponse: a.Z, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchExploreSidebarGraphQL, getEndpointParams: () => ({}) }, context: "FETCH_EXPLORE_SIDEBAR", perfKey: e, staleIntervalMs: u };
                    return (0, E.Z)(t);
                },
                m = (e, t) => T({ exploreGraphQLEnabled: e, includePageConfiguration: !0, initialTabId: t }),
                S = (0, i.Z)((e) => T({ exploreGraphQLEnabled: e, contentType: d.Trends })),
                v = (0, i.Z)((e) => T({ exploreGraphQLEnabled: e, displayLocation: p.WebSidebar })),
                f = () => (e, t) =>
                    e(
                        (0, o.CY)(t())
                            .filter((e) => 0 === e.indexOf(l))
                            .map((e) => (0, o.$q)(e)),
                    ),
                I = (e) => {
                    const t = `trend-relevant-users-${e}-gql`,
                        n = { timelineId: t, formatResponse: a.Z, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchTrendRelevantUsersGraphQL, getEndpointParams: () => ({ trendId: e }) }, context: "FETCH_TREND_RELEVANT_USERS", perfKey: t, staleIntervalMs: u };
                    return (0, E.Z)(n);
                },
                y = (e) => (0, E.Z)({ timelineId: `trendingEventHistoryGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchTrendHistory, getEndpointParams: () => ({ trendId: e }) }, formatResponse: a.Z, context: "FETCH_TREND_HISTORY", perfKey: "trendingEventHistoryGraphQL" });
        },
        730717: (e, t, n) => {
            n.d(t, { Z: () => s });
            var i = n(644829),
                r = n(218951);
            const s = (e, t) => (0, r.Z)({ context: "FETCH_LIVE_EVENT_TIMELINE", network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchLiveEventTimeline, getEndpointParams: (n) => ({ eventId: e, timeline_id: t, ...n }) }, perfKey: "liveEvent", timelineId: `liveEvent-${e}-${t}` });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-8ed0fac5.33a5a40a.js.map

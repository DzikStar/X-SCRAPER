"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"],
    {
        466380: (e, t, r) => {
            r.d(t, { Z: () => l });
            var o = r(807469),
                n = r(502909),
                s = r(600823);
            const a = (0, n.ZP)({ namespace: "topics" }),
                i = (0, n.tb)(a, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(o.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                c = {
                    addTopic: function (e) {
                        return E.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (r, o) => (r(a.updateOne(e, { following: t })), Promise.resolve()),
                },
                d = (e, t, r) => {
                    const { entityId: o } = t.meta,
                        n = e.entities[o];
                    return n ? ((e, t, r, o) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [r.id]: { ...r, ...o() } } } : e))(e, t, n, r) : e;
                },
                u = { follow: (0, n.Tx)(a, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).follow, reducer: (e, t) => d(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, n.Tx)(a, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).unfollow, reducer: (e, t) => d(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, n.Tx)(a, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).notInterested, reducer: (e, t) => d(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, n.Tx)(a, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).undoNotInterested, reducer: (e, t) => d(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                E = { ...a, ...i, ...c, ...u, customActionTypes: (0, n.X7)(u) },
                l = s.Z.register(E);
        },
        903558: (e, t, r) => {
            r.d(t, { Eh: () => a, FQ: () => u, IP: () => d, J9: () => i, K5: () => s, PP: () => n, Vc: () => c, cJ: () => l, eX: () => p, tL: () => E });
            var o = r(795181);
            const n = Object.freeze({ REQUEST: "rweb/FETCH_TV_HOME_MIXER/REQUEST", SUCCESS: "rweb/FETCH_TV_HOME_MIXER/SUCCESS", FAILURE: "rweb/FETCH_TV_HOME_MIXER/FAILURE" }),
                s = Object.freeze({ REQUEST: "rweb/FETCH_TV_USER_PROFILE_MIXER/REQUEST", SUCCESS: "rweb/FETCH_TV_USER_PROFILE_MIXER/SUCCESS", FAILURE: "rweb/FETCH_TV_USER_PROFILE_MIXER/FAILURE" }),
                a = Object.freeze({ REQUEST: "rweb/FETCH_TV_TREND/REQUEST", SUCCESS: "rweb/FETCH_TV_TREND/SUCCESS", FAILURE: "rweb/FETCH_TV_TREND/FAILURE" }),
                i = Object.freeze({ REQUEST: "rweb/FETCH_RELATED_VIDEOS/REQUEST", SUCCESS: "rweb/FETCH_RELATED_VIDEOS/SUCCESS", FAILURE: "rweb/FETCH_RELATED_VIDEOS/FAILURE" }),
                c = Object.freeze({ REQUEST: "rweb/FETCH_TV_PIN_CODE/REQUEST", SUCCESS: "rweb/FETCH_TV_PIN_CODE/SUCCESS", FAILURE: "rweb/FETCH_TV_PIN_CODE/FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/FETCH_TV_SEARCH/REQUEST", SUCCESS: "rweb/FETCH_TV_SEARCH/SUCCESS", FAILURE: "rweb/FETCH_TV_SEARCH/FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/FETCH_TV_TWEET_CONVERSATION/REQUEST", SUCCESS: "rweb/FETCH_TV_TWEET_CONVERSATION/SUCCESS", FAILURE: "rweb/FETCH_TV_TWEET_CONVERSATION/FAILURE" }),
                E = Object.freeze({ REQUEST: "rweb/FETCH_TV_FOLLOW/REQUEST", SUCCESS: "rweb/FETCH_TV_FOLLOW/SUCCESS", FAILURE: "rweb/FETCH_TV_FOLLOW/FAILURE" }),
                l = (Object.freeze({ REQUEST: "rweb/FETCH_TV_USER_VIDEO_TWEETS/REQUEST", SUCCESS: "rweb/FETCH_TV_USER_VIDEO_TWEETS/SUCCESS", FAILURE: "rweb/FETCH_TV_USER_VIDEO_TWEETS/FAILURE" }), Object.freeze({ REQUEST: "rweb/FETCH_TV_SEARCH_TYPEAHEAD/REQUEST", SUCCESS: "rweb/FETCH_TV_SEARCH_TYPEAHEAD/SUCCESS", FAILURE: "rweb/FETCH_TV_SEARCH_TYPEAHEAD/FAILURE" }));
            const p = {
                tvDeviceIsVerified: function (e) {
                    return { type: o.M2, payload: e };
                },
                tvDeviceIsVerifiedCodeExpired: function () {
                    return { type: o.hI };
                },
                tvHomeLoaded: function (e) {
                    return { type: o.bJ, payload: e };
                },
                tvHomeReload: function () {
                    return { type: o.jT };
                },
                tvTrendLoaded: function (e) {
                    return { type: o.XS, payload: e };
                },
                tvUpdateFollowingUser: function (e, t) {
                    return { type: o._c, payload: { screenName: e, following: t } };
                },
                tvUpdateFriendship: function (e, t) {
                    return { type: o.hy, payload: { screenName: e, notificationsEnabled: t } };
                },
                tvUserProfileLoaded: function (e) {
                    return { type: o._b, payload: e };
                },
                tvPinCodeLoaded: function (e) {
                    return { type: o.wW, payload: e };
                },
                tvSearchStart: function (e, t) {
                    return { type: o.E3, payload: { query: e, searchTab: t } };
                },
                tvSearchResults: function (e, t, r, n, s) {
                    return { type: o.sz, payload: { tweets: e, query: t, cursor: r, searchTab: s, shouldClear: n } };
                },
                tvSearchResultsClear: function (e) {
                    return { type: o.te, payload: e };
                },
                tvUserSearchResults: function (e, t) {
                    return { type: o.Np, payload: e, meta: { screenName: t } };
                },
                tvSearchTypeaheadResults: function (e, t) {
                    return { type: o.BS, payload: { results: e, query: t } };
                },
                tvTweetConversationResults: function (e, t, r) {
                    return { type: o.hx, payload: { tweets: e, bottomCursor: r }, meta: { tweetId: t } };
                },
                tvRelatedVideosLoaded: function (e) {
                    return { type: o.rd, payload: e };
                },
                tvRelatedVideosFailedToLoad: function () {
                    return { type: o.Z };
                },
                tvRelatedVideosClear: function () {
                    return { type: o.gw };
                },
                playerOpen: function (e) {
                    return { type: o.f1, payload: e };
                },
                playerClose: function () {
                    return { type: o.bV };
                },
                playerSetVideo: function (e) {
                    return { type: o.fY, payload: e };
                },
            };
        },
        250901: (e, t, r) => {
            r.d(t, { IF: () => n, UD: () => a, bW: () => o, jK: () => s });
            const o = (e) => (t) => t.tv[e];
            function n(e) {
                return e.tv.search;
            }
            function s(e) {
                return e.tv.home;
            }
            function a(e) {
                return e.tv.home.status;
            }
        },
        682461: (e, t, r) => {
            r.d(t, { Qj: () => H, _B: () => b, L8: () => A, qU: () => D, i6: () => N, H7: () => X, fx: () => g, b8: () => q, Sn: () => P, ZN: () => Z, fv: () => Q, BX: () => x });
            r(136728), r(571372), r(202784);
            var o = r(506899),
                n = r(459679),
                s = r(500739),
                a = r(768727),
                i = (r(740025), r(745123)),
                c = r(56698),
                d = r(393445),
                u = r(644829),
                E = r(120071),
                l = r(701788),
                p = r(171697),
                _ = r(125199),
                T = r(917799),
                S = r(17243),
                C = r(903558),
                y = r(87063),
                h = r(499627),
                w = r(795181);
            const m = { isOpen: !1, tweet: void 0, conversation: void 0, conversationBottomCursor: void 0, conversationFetchStatus: y.Z.LOADING },
                f = { typeaheadResults: void 0, results: void 0, searchFetchStatus: y.Z.LOADING, userSearchScreenName: void 0, cursor: void 0 },
                I = { home: { content: void 0, status: y.Z.LOADING }, trend: void 0, search: f, following: f, bookmarks: f, player: m, profile: {}, relatedVideos: {}, login: {} },
                R = (e) => {
                    const t = new Map();
                    return e.forEach((e) => t.set(e.id_str, e)), Array.from(t.values());
                },
                v = (e) => {
                    const t = new Map();
                    return e.forEach((e) => t.set(e.id, e)), Array.from(t.values());
                },
                L = (e, t, r) => {
                    const o = t && t.length > 0 ? t[0].tweet?.conversation_id_str : "",
                        n = t && o === r ? [...t, ...e] : e,
                        s = new Set(),
                        a = [];
                    return (
                        n.forEach((e) => {
                            const t = e.tweet?.id_str ?? "";
                            s.has(t) || (a.push(e), s.add(t));
                        }),
                        a.sort((e, t) => {
                            const r = e.sortIdx || "",
                                o = t.sortIdx || "";
                            return r < o ? 1 : r > o ? -1 : 0;
                        }),
                        a
                    );
                };
            h.Z.register({
                [w.Yf]: function (e = I, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case w.M2:
                            return { ...e, login: { ...e.login, deviceIsVerified: t.payload } };
                        case w.hI:
                            return { ...e, login: { ...e.login, pinCodeExpired: !0, pinCode: void 0 } };
                        case C.PP.REQUEST:
                            return { ...e, home: { ...e.home, status: y.Z.LOADING } };
                        case C.PP.SUCCESS:
                            return { ...e, home: { ...e.home, status: y.Z.LOADED } };
                        case C.PP.FAILURE:
                            return { ...e, home: { content: [], status: y.Z.FAILED } };
                        case w.bJ:
                            return { ...e, home: { ...e.home, content: t.payload } };
                        case w.jT:
                            return { ...e, home: { content: [], status: y.Z.LOADING } };
                        case w.XS:
                            return { ...e, trend: t.payload };
                        case w.rd:
                            return { ...e, relatedVideos: { ...e.relatedVideos, videos: t.payload.shouldClear ? t.payload.videos : [...(e.relatedVideos.videos || []), ...t.payload.videos], cursor: t.payload.cursor } };
                        case w.Z:
                            return { ...e, relatedVideos: { ...I.relatedVideos, fetchStatus: y.Z.FAILED } };
                        case w.gw:
                            return { ...e, relatedVideos: I.relatedVideos };
                        case w._b:
                            return { ...e, profile: { ...e.profile, [t.payload.user.screen_name.toLowerCase()]: { user: t.payload.user, videos: t.payload.shouldClear ? t.payload.videos : R([...(e.profile[t.payload.user.screen_name.toLowerCase()]?.videos || []), ...t.payload.videos]), modules: t.payload.shouldClear ? t.payload.modules : v([...(e.profile[t.payload.user.screen_name.toLowerCase()]?.modules || []), ...(t.payload.modules || [])]), cursor: t.payload.cursor } } };
                        case w.wW:
                            return { ...e, login: { ...e.login, pinCode: t.payload, pinCodeExpired: !1 } };
                        case w._c:
                            return { ...e, profile: { ...e.profile, [t.payload.screenName.toLowerCase()]: { ...e.profile[t.payload.screenName.toLowerCase()], user: { ...e.profile[t.payload.screenName.toLowerCase()]?.user, following: t.payload.following } } } };
                        case w.hy:
                            return { ...e, profile: { ...e.profile, [t.payload.screenName.toLowerCase()]: { ...e.profile[t.payload.screenName.toLowerCase()], user: { ...e.profile[t.payload.screenName.toLowerCase()]?.user, notifications: t.payload.notificationsEnabled } } } };
                        case w.E3:
                            return { ...e, [t.payload.searchTab]: { ...e[t.payload.searchTab], query: t.payload.query } };
                        case w.sz:
                            return t.payload.query === e[t.payload.searchTab].query ? { ...e, [t.payload.searchTab]: { ...e[t.payload.searchTab], lastCompletedQuery: t.payload.query, results: t.payload.shouldClear ? t.payload.tweets : [...(e[t.payload.searchTab].results || []), ...t.payload.tweets], cursor: t.payload.cursor, userSearchScreenName: void 0 } } : e;
                        case w.te:
                            return { ...e, [t.payload]: { ...f } };
                        case w.Np:
                            return { ...e, search: { ...e.search, results: t.payload, userSearchScreenName: t.meta.screenName } };
                        case w.hx:
                            return { ...e, player: { ...e.player, conversation: L(t.payload.tweets, e?.player?.conversation || [], t.meta.tweetId), conversationBottomCursor: t.payload.bottomCursor } };
                        case w.BS:
                            return { ...e, search: { ...e.search, typeaheadResults: t.payload.results } };
                        case w.f1:
                            return { ...e, player: { ...e.player, tweet: t.payload, isOpen: !0 } };
                        case w.bV:
                            return { ...e, player: { ...e.player, isOpen: !1 } };
                        case w.fY:
                            return { ...e, player: { ...e.player, tweet: t.payload, isOpen: !0 } };
                        case C.IP.REQUEST:
                            return { ...e, search: { ...e.search, searchFetchStatus: y.Z.LOADING } };
                        case C.IP.SUCCESS:
                            return { ...e, search: { ...e.search, searchFetchStatus: y.Z.LOADED } };
                        case C.IP.FAILURE:
                            return { ...e, search: { ...e.search, searchFetchStatus: y.Z.FAILED } };
                        case C.K5.REQUEST:
                            return { ...e, profileFetchStatus: y.Z.LOADING };
                        case C.K5.SUCCESS:
                            return { ...e, profileFetchStatus: y.Z.LOADED };
                        case C.K5.FAILURE:
                            return { ...e, profileFetchStatus: y.Z.FAILED };
                        case C.J9.REQUEST:
                            return { ...e, relatedVideos: { ...e.relatedVideos, fetchStatus: y.Z.LOADING } };
                        case C.J9.SUCCESS:
                            return { ...e, relatedVideos: { ...e.relatedVideos, fetchStatus: y.Z.LOADED } };
                        case C.J9.FAILURE:
                            return { ...e, relatedVideos: { ...e.relatedVideos, fetchStatus: y.Z.FAILED } };
                        case C.FQ.REQUEST:
                            return { ...e, player: { ...e.player, conversationFetchStatus: y.Z.LOADING } };
                        case C.FQ.SUCCESS:
                            return { ...e, player: { ...e.player, conversationFetchStatus: y.Z.LOADED } };
                        case C.FQ.FAILURE:
                            return { ...e, player: { ...e.player, conversationFetchStatus: y.Z.FAILED } };
                        default:
                            return e;
                    }
                },
            });
            const F = (e, t = !1) => {
                    if ("Tweet" === e?.result?.__typename) {
                        const r = !!e?.result?.legacy?.retweeted_status_result,
                            n = r ? e?.result?.legacy?.retweeted_status_result?.result?.legacy : e?.result?.legacy,
                            s = (0, o.Fv)(e?.result, p.Z),
                            a = s.entities.tweets[n?.id_str],
                            i = e?.result?.card ? (0, o.Fv)(e?.result?.card, l.Z) : null,
                            c = s.entities.tweets[a?.retweeted_status],
                            d = { ...a, user: { ...s.entities.users[n?.user_id_str] }, retweeted_status: c || a?.retweeted_status, retweeted: r, card: i?.entities.cards[e?.result?.card?.rest_id] },
                            u = "video" !== d?.entities?.media?.[0]?.type,
                            E = !d?.card?.binding_values?.broadcast_id?.string_value,
                            _ = "video" !== d?.retweeted_status?.entities?.media?.[0].type;
                        if (!t && u && _ && E) return;
                        return d;
                    }
                },
                O = (e, t) => {
                    if (e.entities?.users?.[t]) return e.entities?.users?.[t];
                },
                V = (e) => {
                    const t = e?.instructions?.find((e) => "TimelineAddEntries" === e?.type);
                    return (0, n.Z)(t?.entries || [], (e) => {
                        if ("TimelineTimelineModule" === e?.content?.__typename) {
                            const t = e?.content?.displayType;
                            if ("Carousel" === t || "CompactCarousel" === t || "TVCarousel" === t || "TVShortCarousel" === t) {
                                return {
                                    id: e?.entryId || "",
                                    title: e?.content?.header?.text || "",
                                    content: (0, n.Z)(e?.content?.items || [], (e) => {
                                        if ("TimelineTweet" === e?.item.itemContent.__typename) {
                                            const t = e?.item?.itemContent?.tweet_results;
                                            return F(t);
                                        }
                                    }),
                                    displayType: t,
                                };
                            }
                        }
                    });
                },
                U = (e) => {
                    const t = !!e?.instructions?.find((e) => "TimelineClearCache" === e?.type);
                    let r;
                    const o = e?.instructions?.find((e) => "TimelineAddEntries" === e?.type),
                        s = (0, n.Z)(o?.entries || [], (e) => {
                            if ("TimelineTimelineItem" === e?.content?.__typename && "TimelineTweet" === e?.content?.itemContent?.__typename) {
                                const t = e?.content?.itemContent?.tweet_results;
                                return F(t);
                            }
                            "TimelineTimelineCursor" === e?.content?.__typename && "Bottom" === e?.content?.cursorType && (r = e?.content?.value);
                        }),
                        a = e?.instructions?.filter((e) => "TimelineReplaceEntry" === e?.type);
                    return (
                        a?.forEach((e) => {
                            const t = e?.entry;
                            "TimelineTimelineCursor" === t?.content?.__typename && "Bottom" === t?.content?.cursorType && (r = t?.content?.value);
                        }),
                        { tweets: s, shouldClear: t, cursor: r }
                    );
                },
                A =
                    () =>
                    (e, t, { api: r }) =>
                        T._O(e, { params: { count: 20, requestContext: "launch", include_page_configuration: !0, entity_tokens: !1 }, request: r.withEndpoint(c.Z).fetchTVHomeMixerGraphQL })({ actionTypes: C.PP, context: "FETCH_TV_HOME_MIXER", meta: {} }, (e) => {
                            const t = [];
                            return e && t.push(C.eX.tvHomeLoaded(V(e))), t;
                        }),
                b =
                    (e) =>
                    (t, r, { api: o }) =>
                        T._O(t, { params: { count: 20, requestContext: "launch", include_page_configuration: !0, entity_tokens: !1, tweetId: e.tweetId, cursor: e.cursor }, request: o.withEndpoint(c.Z).fetchTweetRelatedVideosGraphQL })({ actionTypes: C.J9, context: "FETCH_RELATED_VIDEOS", meta: {} }, (t) => {
                            const r = [];
                            if (t) {
                                const o = U(t),
                                    n = o.tweets.filter((t) => t.id_str !== e.tweetId);
                                r.push(C.eX.tvRelatedVideosLoaded({ videos: n, cursor: o.cursor, shouldClear: o.shouldClear }));
                            } else r.push(C.eX.tvRelatedVideosFailedToLoad());
                            return r;
                        }),
                D =
                    (e) =>
                    (t, r, { api: o }) =>
                        T._O(t, { params: { deviceId: e.deviceId }, request: o.withEndpoint(c.Z).generatePinCodeGraphQL })({ actionTypes: C.Vc, context: "FETCH_TV_PIN_CODE", meta: {} }, (e) => {
                            const t = [];
                            return e && t.push(C.eX.tvPinCodeLoaded(e?.pinCode?.pin_code || "")), t;
                        }),
                H = (e) => (t) =>
                    (0, a.F)(e.deviceId, e.pinCode)
                        .then((e) => {
                            if (void 0 !== e?.isVerified?.is_verified) return t(C.eX.tvDeviceIsVerified(!!e?.isVerified?.is_verified)), e;
                            t(C.eX.tvDeviceIsVerifiedCodeExpired());
                        })
                        .catch((e) => {
                            t(C.eX.tvDeviceIsVerifiedCodeExpired());
                        }),
                N =
                    (e) =>
                    (t, r, { api: o }) => {
                        t(C.eX.tvSearchStart(e.query, e.searchTab));
                        const n = { rawQuery: e.query, count: e.count || 20, cursor: e.cursor, querySource: e.querySource || "TypedQuery" },
                            s = e.product || "Top";
                        return ("bookmarks" === e.searchTab ? T._O(t, { params: n, request: o.withEndpoint(u.Z).fetchBookmarkSearch }) : T._O(t, { params: { ...n, product: s }, request: o.withEndpoint(u.Z).fetchSearchGraphQL }))({ actionTypes: C.IP, context: "FETCH_TV_SEARCH", meta: {} }, (t) => {
                            const r = [];
                            if (t)
                                if (e.withCategories) {
                                    const o = V(t);
                                    r.push(C.eX.tvSearchResults(o, e.query, void 0, !0, e.searchTab));
                                } else {
                                    const o = U(t);
                                    r.push(C.eX.tvSearchResults(o.tweets, e.query, o.cursor, o.shouldClear, e.searchTab));
                                }
                            return r;
                        });
                    },
                P =
                    (e) =>
                    (t, r, { api: n }) =>
                        T._O(t, { params: { screenName: e.screenName, count: 20, cursor: e.cursor }, request: n.withEndpoint(c.Z).fetchTVUserProfileGraphQL })({ actionTypes: C.K5, context: "FETCH_TV_USER_PROFILE", meta: {} }, (t) => {
                            const r = [];
                            if (t) {
                                const n = t?.user?.result?.profile_video_timeline?.timeline,
                                    s = U(n),
                                    a = V(n),
                                    i = ((e) => {
                                        if ("User" === e.user?.result?.__typename) return { ...(0, o.Fv)(e.user.result, _.Z).entities.users[e?.user?.result?.rest_id] };
                                    })(t);
                                if (!i) throw new Error(`failed to load user: ${e.screenName}`);
                                r.push(C.eX.tvUserProfileLoaded({ user: i, videos: s.tweets, cursor: s.cursor, modules: a, shouldClear: s.shouldClear }));
                            }
                            return r;
                        }),
                g =
                    (e) =>
                    (t, r, { api: o }) =>
                        T._O(t, { params: { trendId: e }, request: o.withEndpoint(c.Z).fetchTVTrendGraphQL })({ actionTypes: C.Eh, context: "FETCH_TV_TREND", meta: {} }, (e) => {
                            const t = [];
                            if (e) {
                                const r = e.trend?.result?.tv_trend_timeline?.timeline,
                                    o = V(r);
                                t.push(C.eX.tvTrendLoaded({ name: e.trend?.result?.core?.name || "", summary: e.trend?.result?.core?.summary || "", timeline: o }));
                            }
                            return t;
                        }),
                Z =
                    (e) =>
                    (t, r, { api: o }) => {
                        t(C.eX.tvUpdateFollowingUser(e.screenName, !0));
                        return T._O(t, { params: { id_str: e.userId }, request: o.withEndpoint(E.Z).follow })({ actionTypes: C.tL, context: "TV_FOLLOW", meta: {} }, (t) => {
                            const r = [];
                            if (t) {
                                O(t, e.userId) || r.push(C.eX.tvUpdateFollowingUser(e.screenName, !1));
                            }
                            return r;
                        });
                    },
                Q =
                    (e) =>
                    (t, r, { api: o }) => {
                        t(C.eX.tvUpdateFollowingUser(e.screenName, !1));
                        return T._O(t, { params: { id_str: e.userId }, request: o.withEndpoint(E.Z).unfollow })({ actionTypes: C.tL, context: "TV_UNFOLLOW", meta: {} }, (t) => {
                            const r = [];
                            if (t) {
                                O(t, e.userId) || r.push(C.eX.tvUpdateFollowingUser(e.screenName, !0));
                            }
                            return r;
                        });
                    },
                x =
                    (e) =>
                    (t, r, { api: o }) => {
                        t(C.eX.tvUpdateFriendship(e.screenName, e.notificationsEnabled));
                        return T._O(t, { params: { id: e.userId, device: e.notificationsEnabled }, request: o.withEndpoint(i.Z).updateFriendship })({ actionTypes: C.tL, context: "TV_UPDATE_NOTIFICATIONS", meta: {} });
                    },
                q =
                    (e) =>
                    (t, r, { api: o }) =>
                        T._O(t, { params: { focalTweetId: e.tweetId, ...(void 0 !== e.cursor && { cursor: e.cursor }) }, request: o.withEndpoint(s.Z).fetchTweetDetail })({ actionTypes: C.FQ, context: "TV_FETCH_TWEET_CONVERSATION", meta: {} }, (t) => {
                            const r = [];
                            if (t) {
                                const o = ((e) => {
                                        const t = e?.instructions?.find((e) => "TimelineAddEntries" === e?.type);
                                        return (0, n.Z)(t?.entries || [], (e, t) => {
                                            if ("TimelineTimelineModule" === e?.content?.__typename && "TimelineTweet" === e?.content?.items?.[0]?.item?.itemContent?.__typename) {
                                                const t = e?.content?.items?.[0]?.item?.itemContent?.tweet_results,
                                                    r = e?.sortIndex;
                                                return { tweet: F(t, !0), sortIdx: r };
                                            }
                                        });
                                    })(t),
                                    s = ((e) => {
                                        const t = e?.instructions?.find((e) => "TimelineAddEntries" === e?.type)?.entries;
                                        if (!t || 0 === t.length) return;
                                        const r = t[t.length - 1];
                                        return "TimelineTimelineCursor" === r?.content?.itemContent?.__typename && "Bottom" === r?.content?.itemContent?.cursorType ? r?.content?.itemContent?.value : void 0;
                                    })(t);
                                r.push(C.eX.tvTweetConversationResults(o, e.tweetId, s));
                            }
                            return r;
                        }),
                X =
                    (e, t) =>
                    (r, o, { api: n }) =>
                        T._O(r, { params: { q: e.q, result_type: "users,topics,trending", src: "search_box" }, request: n.withEndpoint(d.Z).fetch })({ actionTypes: C.cJ, context: "FETCH_TV_SEARCH_TYPEAHEAD", meta: {} }, (r) => {
                            const o = [];
                            if (r && e.q === t.current) {
                                const t = r.users?.map((e) => ({ ...(0, S.gJ)(e, "remote"), type: "user" })) || [],
                                    n = r.topics?.map((e) => ({ ...e, type: "topic" })) || [];
                                o.push(C.eX.tvSearchTypeaheadResults({ users: t, topics: n, size: t.length + n.length }, e.q));
                            }
                            return o;
                        });
        },
        795181: (e, t, r) => {
            r.d(t, { BS: () => w, E3: () => S, M2: () => n, Np: () => y, XS: () => c, Yf: () => o, Z: () => u, _b: () => E, _c: () => m, bJ: () => a, bV: () => _, f1: () => p, fY: () => T, gw: () => R, hI: () => s, hx: () => I, hy: () => f, jT: () => i, rd: () => d, sz: () => C, te: () => h, wW: () => l });
            const o = "tv",
                n = "rweb/tv/TV_DEVICE_IS_VERIFIED",
                s = "rweb/tv/TV_DEVICE_IS_VERIFIED_CODE_EXPIRED",
                a = "rweb/tv/TV_HOME_LOADED",
                i = "rweb/tv/TV_HOME_RELOAD",
                c = "rweb/tv/TV_TREND_LOADED",
                d = "rweb/tv/TV_RELATED_VIDEOS_LOADED",
                u = "rweb/tv/TV_RELATED_VIDEOS_LOAD_FAILED",
                E = "rweb/tv/TV_USER_PROFILE_LOADED",
                l = "rweb/tv/TV_PIN_CODE_LOADED",
                p = "rweb/tv/TV_PLAYER_OPEN",
                _ = "rweb/tv/TV_PLAYER_CLOSE",
                T = "rweb/tv/TV_PLAYER_SET_VIDEO",
                S = "rweb/tv/TV_SEARCH_START",
                C = "rweb/tv/TV_SEARCH_RESULTS",
                y = "rweb/tv/TV_USER_SEARCH_RESULTS",
                h = "rweb/tv/TV_SEARCH_RESULTS_CLEAR",
                w = "rweb/tv/TV_SEARCH_TYPEAHEAD_RESULTS",
                m = "rweb/tv/TV_UPDATE_FOLLOWING_USER",
                f = "rweb/tv/TV_UPDATE_FRIENDSHIP",
                I = "rweb/tv/TV_TWEET_CONVERSATION_RESULTS",
                R = "rweb/tv/TV_RELATED_VIDEOS_CLEAR";
        },
        909622: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(807469),
                n = r(750085),
                s = r(218951);
            const a = (e) => (0, s.Z)({ timelineId: `topics-sidebar-graphql-${e}`, network: { getEndpoint: (e) => e.withEndpoint(o.ZP).fetchTopicsToFollowSidebar, getEndpointParams: () => ({ userId: e }) }, formatResponse: n.Z, context: "FETCH_TOPICS_SIDEBAR", perfKey: "topics-sidebar-GraphQL" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023.ffb14dba.js.map

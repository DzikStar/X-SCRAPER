"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"],
    {
        903558: (e, t, r) => {
            r.d(t, { Eh: () => o, FQ: () => d, IP: () => u, J9: () => i, K5: () => n, PP: () => a, Vc: () => c, cJ: () => l, eX: () => p, tL: () => E });
            var s = r(795181);
            const a = Object.freeze({ REQUEST: "rweb/FETCH_TV_HOME_MIXER/REQUEST", SUCCESS: "rweb/FETCH_TV_HOME_MIXER/SUCCESS", FAILURE: "rweb/FETCH_TV_HOME_MIXER/FAILURE" }),
                n = Object.freeze({ REQUEST: "rweb/FETCH_TV_USER_PROFILE_MIXER/REQUEST", SUCCESS: "rweb/FETCH_TV_USER_PROFILE_MIXER/SUCCESS", FAILURE: "rweb/FETCH_TV_USER_PROFILE_MIXER/FAILURE" }),
                o = Object.freeze({ REQUEST: "rweb/FETCH_TV_TREND/REQUEST", SUCCESS: "rweb/FETCH_TV_TREND/SUCCESS", FAILURE: "rweb/FETCH_TV_TREND/FAILURE" }),
                i = Object.freeze({ REQUEST: "rweb/FETCH_RELATED_VIDEOS/REQUEST", SUCCESS: "rweb/FETCH_RELATED_VIDEOS/SUCCESS", FAILURE: "rweb/FETCH_RELATED_VIDEOS/FAILURE" }),
                c = Object.freeze({ REQUEST: "rweb/FETCH_TV_PIN_CODE/REQUEST", SUCCESS: "rweb/FETCH_TV_PIN_CODE/SUCCESS", FAILURE: "rweb/FETCH_TV_PIN_CODE/FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/FETCH_TV_SEARCH/REQUEST", SUCCESS: "rweb/FETCH_TV_SEARCH/SUCCESS", FAILURE: "rweb/FETCH_TV_SEARCH/FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/FETCH_TV_TWEET_CONVERSATION/REQUEST", SUCCESS: "rweb/FETCH_TV_TWEET_CONVERSATION/SUCCESS", FAILURE: "rweb/FETCH_TV_TWEET_CONVERSATION/FAILURE" }),
                E = Object.freeze({ REQUEST: "rweb/FETCH_TV_FOLLOW/REQUEST", SUCCESS: "rweb/FETCH_TV_FOLLOW/SUCCESS", FAILURE: "rweb/FETCH_TV_FOLLOW/FAILURE" }),
                l = (Object.freeze({ REQUEST: "rweb/FETCH_TV_USER_VIDEO_TWEETS/REQUEST", SUCCESS: "rweb/FETCH_TV_USER_VIDEO_TWEETS/SUCCESS", FAILURE: "rweb/FETCH_TV_USER_VIDEO_TWEETS/FAILURE" }), Object.freeze({ REQUEST: "rweb/FETCH_TV_SEARCH_TYPEAHEAD/REQUEST", SUCCESS: "rweb/FETCH_TV_SEARCH_TYPEAHEAD/SUCCESS", FAILURE: "rweb/FETCH_TV_SEARCH_TYPEAHEAD/FAILURE" }));
            const p = {
                tvDeviceIsVerified: function (e) {
                    return { type: s.M2, payload: e };
                },
                tvDeviceIsVerifiedCodeExpired: function () {
                    return { type: s.hI };
                },
                tvHomeLoaded: function (e) {
                    return { type: s.bJ, payload: e };
                },
                tvHomeReload: function () {
                    return { type: s.jT };
                },
                tvTrendLoaded: function (e) {
                    return { type: s.XS, payload: e };
                },
                tvUpdateFollowingUser: function (e, t) {
                    return { type: s._c, payload: { screenName: e, following: t } };
                },
                tvUpdateFriendship: function (e, t) {
                    return { type: s.hy, payload: { screenName: e, notificationsEnabled: t } };
                },
                tvUserProfileLoaded: function (e) {
                    return { type: s._b, payload: e };
                },
                tvPinCodeLoaded: function (e) {
                    return { type: s.wW, payload: e };
                },
                tvSearchStart: function (e, t) {
                    return { type: s.E3, payload: { query: e, searchTab: t } };
                },
                tvSearchResults: function (e, t, r, a, n) {
                    return { type: s.sz, payload: { tweets: e, query: t, cursor: r, searchTab: n, shouldClear: a } };
                },
                tvSearchResultsClear: function (e) {
                    return { type: s.te, payload: e };
                },
                tvUserSearchResults: function (e, t) {
                    return { type: s.Np, payload: e, meta: { screenName: t } };
                },
                tvSearchTypeaheadResults: function (e, t) {
                    return { type: s.BS, payload: { results: e, query: t } };
                },
                tvTweetConversationResults: function (e, t, r) {
                    return { type: s.hx, payload: { tweets: e, bottomCursor: r }, meta: { tweetId: t } };
                },
                tvRelatedVideosLoaded: function (e) {
                    return { type: s.rd, payload: e };
                },
                tvRelatedVideosFailedToLoad: function () {
                    return { type: s.Z };
                },
                tvRelatedVideosClear: function () {
                    return { type: s.gw };
                },
                playerOpen: function (e) {
                    return { type: s.f1, payload: e };
                },
                playerClose: function () {
                    return { type: s.bV };
                },
                playerSetVideo: function (e) {
                    return { type: s.fY, payload: e };
                },
            };
        },
        250901: (e, t, r) => {
            r.d(t, { IF: () => a, UD: () => o, bW: () => s, jK: () => n });
            const s = (e) => (t) => t.tv[e];
            function a(e) {
                return e.tv.search;
            }
            function n(e) {
                return e.tv.home;
            }
            function o(e) {
                return e.tv.home.status;
            }
        },
        682461: (e, t, r) => {
            r.d(t, { Qj: () => H, _B: () => O, L8: () => b, qU: () => D, i6: () => N, H7: () => x, fx: () => Z, b8: () => X, Sn: () => P, ZN: () => g, fv: () => Q, BX: () => q });
            r(136728), r(571372), r(202784);
            var s = r(506899),
                a = r(459679),
                n = r(500739),
                o = r(768727),
                i = (r(740025), r(745123)),
                c = r(56698),
                u = r(393445),
                d = r(644829),
                E = r(120071),
                l = r(701788),
                p = r(171697),
                _ = r(125199),
                T = r(917799),
                S = r(17243),
                C = r(903558),
                y = r(87063),
                h = r(499627),
                m = r(795181);
            const w = { isOpen: !1, tweet: void 0, conversation: void 0, conversationBottomCursor: void 0, conversationFetchStatus: y.Z.LOADING },
                f = { typeaheadResults: void 0, results: void 0, searchFetchStatus: y.Z.LOADING, userSearchScreenName: void 0, cursor: void 0 },
                R = { home: { content: void 0, status: y.Z.LOADING }, trend: void 0, search: f, following: f, bookmarks: f, player: w, profile: {}, relatedVideos: {}, login: {} },
                v = (e) => {
                    const t = new Map();
                    return e.forEach((e) => t.set(e.id_str, e)), Array.from(t.values());
                },
                I = (e) => {
                    const t = new Map();
                    return e.forEach((e) => t.set(e.id, e)), Array.from(t.values());
                },
                L = (e, t, r) => {
                    const s = t && t.length > 0 ? t[0].tweet?.conversation_id_str : "",
                        a = t && s === r ? [...t, ...e] : e,
                        n = new Set(),
                        o = [];
                    return (
                        a.forEach((e) => {
                            const t = e.tweet?.id_str ?? "";
                            n.has(t) || (o.push(e), n.add(t));
                        }),
                        o.sort((e, t) => {
                            const r = e.sortIdx || "",
                                s = t.sortIdx || "";
                            return r < s ? 1 : r > s ? -1 : 0;
                        }),
                        o
                    );
                };
            h.Z.register({
                [m.Yf]: function (e = R, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case m.M2:
                            return { ...e, login: { ...e.login, deviceIsVerified: t.payload } };
                        case m.hI:
                            return { ...e, login: { ...e.login, pinCodeExpired: !0, pinCode: void 0 } };
                        case C.PP.REQUEST:
                            return { ...e, home: { ...e.home, status: y.Z.LOADING } };
                        case C.PP.SUCCESS:
                            return { ...e, home: { ...e.home, status: y.Z.LOADED } };
                        case C.PP.FAILURE:
                            return { ...e, home: { content: [], status: y.Z.FAILED } };
                        case m.bJ:
                            return { ...e, home: { ...e.home, content: t.payload } };
                        case m.jT:
                            return { ...e, home: { content: [], status: y.Z.LOADING } };
                        case m.XS:
                            return { ...e, trend: t.payload };
                        case m.rd:
                            return { ...e, relatedVideos: { ...e.relatedVideos, videos: t.payload.shouldClear ? t.payload.videos : [...(e.relatedVideos.videos || []), ...t.payload.videos], cursor: t.payload.cursor } };
                        case m.Z:
                            return { ...e, relatedVideos: { ...R.relatedVideos, fetchStatus: y.Z.FAILED } };
                        case m.gw:
                            return { ...e, relatedVideos: R.relatedVideos };
                        case m._b:
                            return { ...e, profile: { ...e.profile, [t.payload.user.screen_name.toLowerCase()]: { user: t.payload.user, videos: t.payload.shouldClear ? t.payload.videos : v([...(e.profile[t.payload.user.screen_name.toLowerCase()]?.videos || []), ...t.payload.videos]), modules: t.payload.shouldClear ? t.payload.modules : I([...(e.profile[t.payload.user.screen_name.toLowerCase()]?.modules || []), ...(t.payload.modules || [])]), cursor: t.payload.cursor } } };
                        case m.wW:
                            return { ...e, login: { ...e.login, pinCode: t.payload, pinCodeExpired: !1 } };
                        case m._c:
                            return { ...e, profile: { ...e.profile, [t.payload.screenName.toLowerCase()]: { ...e.profile[t.payload.screenName.toLowerCase()], user: { ...e.profile[t.payload.screenName.toLowerCase()]?.user, following: t.payload.following } } } };
                        case m.hy:
                            return { ...e, profile: { ...e.profile, [t.payload.screenName.toLowerCase()]: { ...e.profile[t.payload.screenName.toLowerCase()], user: { ...e.profile[t.payload.screenName.toLowerCase()]?.user, notifications: t.payload.notificationsEnabled } } } };
                        case m.E3:
                            return { ...e, [t.payload.searchTab]: { ...e[t.payload.searchTab], query: t.payload.query } };
                        case m.sz:
                            return t.payload.query === e[t.payload.searchTab].query ? { ...e, [t.payload.searchTab]: { ...e[t.payload.searchTab], lastCompletedQuery: t.payload.query, results: t.payload.shouldClear ? t.payload.tweets : [...(e[t.payload.searchTab].results || []), ...t.payload.tweets], cursor: t.payload.cursor, userSearchScreenName: void 0 } } : e;
                        case m.te:
                            return { ...e, [t.payload]: { ...f } };
                        case m.Np:
                            return { ...e, search: { ...e.search, results: t.payload, userSearchScreenName: t.meta.screenName } };
                        case m.hx:
                            return { ...e, player: { ...e.player, conversation: L(t.payload.tweets, e?.player?.conversation || [], t.meta.tweetId), conversationBottomCursor: t.payload.bottomCursor } };
                        case m.BS:
                            return { ...e, search: { ...e.search, typeaheadResults: t.payload.results } };
                        case m.f1:
                            return { ...e, player: { ...e.player, tweet: t.payload, isOpen: !0 } };
                        case m.bV:
                            return { ...e, player: { ...e.player, isOpen: !1 } };
                        case m.fY:
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
                            a = r ? e?.result?.legacy?.retweeted_status_result?.result?.legacy : e?.result?.legacy,
                            n = (0, s.Fv)(e?.result, p.Z),
                            o = n.entities.tweets[a?.id_str],
                            i = e?.result?.card ? (0, s.Fv)(e?.result?.card, l.Z) : null,
                            c = n.entities.tweets[o?.retweeted_status],
                            u = { ...o, user: { ...n.entities.users[a?.user_id_str] }, retweeted_status: c || o?.retweeted_status, retweeted: r, card: i?.entities.cards[e?.result?.card?.rest_id] },
                            d = "video" !== u?.entities?.media?.[0]?.type,
                            E = !u?.card?.binding_values?.broadcast_id?.string_value,
                            _ = "video" !== u?.retweeted_status?.entities?.media?.[0].type;
                        if (!t && d && _ && E) return;
                        return u;
                    }
                },
                V = (e, t) => {
                    if (e.entities?.users?.[t]) return e.entities?.users?.[t];
                },
                U = (e) => {
                    const t = e?.instructions?.find((e) => "TimelineAddEntries" === e?.type);
                    return (0, a.Z)(t?.entries || [], (e) => {
                        if ("TimelineTimelineModule" === e?.content?.__typename) {
                            const t = e?.content?.displayType;
                            if ("Carousel" === t || "CompactCarousel" === t || "TVCarousel" === t || "TVShortCarousel" === t) {
                                return {
                                    id: e?.entryId || "",
                                    title: e?.content?.header?.text || "",
                                    content: (0, a.Z)(e?.content?.items || [], (e) => {
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
                A = (e) => {
                    const t = !!e?.instructions?.find((e) => "TimelineClearCache" === e?.type);
                    let r;
                    const s = e?.instructions?.find((e) => "TimelineAddEntries" === e?.type),
                        n = (0, a.Z)(s?.entries || [], (e) => {
                            if ("TimelineTimelineItem" === e?.content?.__typename && "TimelineTweet" === e?.content?.itemContent?.__typename) {
                                const t = e?.content?.itemContent?.tweet_results;
                                return F(t);
                            }
                            "TimelineTimelineCursor" === e?.content?.__typename && "Bottom" === e?.content?.cursorType && (r = e?.content?.value);
                        }),
                        o = e?.instructions?.filter((e) => "TimelineReplaceEntry" === e?.type);
                    return (
                        o?.forEach((e) => {
                            const t = e?.entry;
                            "TimelineTimelineCursor" === t?.content?.__typename && "Bottom" === t?.content?.cursorType && (r = t?.content?.value);
                        }),
                        { tweets: n, shouldClear: t, cursor: r }
                    );
                },
                b =
                    () =>
                    (e, t, { api: r }) =>
                        T._O(e, { params: { count: 20, requestContext: "launch", include_page_configuration: !0, entity_tokens: !1 }, request: r.withEndpoint(c.Z).fetchTVHomeMixerGraphQL })({ actionTypes: C.PP, context: "FETCH_TV_HOME_MIXER", meta: {} }, (e) => {
                            const t = [];
                            return e && t.push(C.eX.tvHomeLoaded(U(e))), t;
                        }),
                O =
                    (e) =>
                    (t, r, { api: s }) =>
                        T._O(t, { params: { count: 20, requestContext: "launch", include_page_configuration: !0, entity_tokens: !1, tweetId: e.tweetId, cursor: e.cursor }, request: s.withEndpoint(c.Z).fetchTweetRelatedVideosGraphQL })({ actionTypes: C.J9, context: "FETCH_RELATED_VIDEOS", meta: {} }, (t) => {
                            const r = [];
                            if (t) {
                                const s = A(t),
                                    a = s.tweets.filter((t) => t.id_str !== e.tweetId);
                                r.push(C.eX.tvRelatedVideosLoaded({ videos: a, cursor: s.cursor, shouldClear: s.shouldClear }));
                            } else r.push(C.eX.tvRelatedVideosFailedToLoad());
                            return r;
                        }),
                D =
                    (e) =>
                    (t, r, { api: s }) =>
                        T._O(t, { params: { deviceId: e.deviceId }, request: s.withEndpoint(c.Z).generatePinCodeGraphQL })({ actionTypes: C.Vc, context: "FETCH_TV_PIN_CODE", meta: {} }, (e) => {
                            const t = [];
                            return e && t.push(C.eX.tvPinCodeLoaded(e?.pinCode?.pin_code || "")), t;
                        }),
                H = (e) => (t) =>
                    (0, o.F)(e.deviceId, e.pinCode)
                        .then((e) => {
                            if (void 0 !== e?.isVerified?.is_verified) return t(C.eX.tvDeviceIsVerified(!!e?.isVerified?.is_verified)), e;
                            t(C.eX.tvDeviceIsVerifiedCodeExpired());
                        })
                        .catch((e) => {
                            t(C.eX.tvDeviceIsVerifiedCodeExpired());
                        }),
                N =
                    (e) =>
                    (t, r, { api: s }) => {
                        t(C.eX.tvSearchStart(e.query, e.searchTab));
                        const a = { rawQuery: e.query, count: e.count || 20, cursor: e.cursor, querySource: e.querySource || "TypedQuery" },
                            n = e.product || "Top";
                        return ("bookmarks" === e.searchTab ? T._O(t, { params: a, request: s.withEndpoint(d.Z).fetchBookmarkSearch }) : T._O(t, { params: { ...a, product: n }, request: s.withEndpoint(d.Z).fetchSearchGraphQL }))({ actionTypes: C.IP, context: "FETCH_TV_SEARCH", meta: {} }, (t) => {
                            const r = [];
                            if (t)
                                if (e.withCategories) {
                                    const s = U(t);
                                    r.push(C.eX.tvSearchResults(s, e.query, void 0, !0, e.searchTab));
                                } else {
                                    const s = A(t);
                                    r.push(C.eX.tvSearchResults(s.tweets, e.query, s.cursor, s.shouldClear, e.searchTab));
                                }
                            return r;
                        });
                    },
                P =
                    (e) =>
                    (t, r, { api: a }) =>
                        T._O(t, { params: { screenName: e.screenName, count: 20, cursor: e.cursor }, request: a.withEndpoint(c.Z).fetchTVUserProfileGraphQL })({ actionTypes: C.K5, context: "FETCH_TV_USER_PROFILE", meta: {} }, (t) => {
                            const r = [];
                            if (t) {
                                const a = t?.user?.result?.profile_video_timeline?.timeline,
                                    n = A(a),
                                    o = U(a),
                                    i = ((e) => {
                                        if ("User" === e.user?.result?.__typename) return { ...(0, s.Fv)(e.user.result, _.Z).entities.users[e?.user?.result?.rest_id] };
                                    })(t);
                                if (!i) throw new Error(`failed to load user: ${e.screenName}`);
                                r.push(C.eX.tvUserProfileLoaded({ user: i, videos: n.tweets, cursor: n.cursor, modules: o, shouldClear: n.shouldClear }));
                            }
                            return r;
                        }),
                Z =
                    (e) =>
                    (t, r, { api: s }) =>
                        T._O(t, { params: { trendId: e }, request: s.withEndpoint(c.Z).fetchTVTrendGraphQL })({ actionTypes: C.Eh, context: "FETCH_TV_TREND", meta: {} }, (e) => {
                            const t = [];
                            if (e) {
                                const r = e.trend?.result?.tv_trend_timeline?.timeline,
                                    s = U(r);
                                t.push(C.eX.tvTrendLoaded({ name: e.trend?.result?.core?.name || "", summary: e.trend?.result?.core?.summary || "", timeline: s }));
                            }
                            return t;
                        }),
                g =
                    (e) =>
                    (t, r, { api: s }) => {
                        t(C.eX.tvUpdateFollowingUser(e.screenName, !0));
                        return T._O(t, { params: { id_str: e.userId }, request: s.withEndpoint(E.Z).follow })({ actionTypes: C.tL, context: "TV_FOLLOW", meta: {} }, (t) => {
                            const r = [];
                            if (t) {
                                V(t, e.userId) || r.push(C.eX.tvUpdateFollowingUser(e.screenName, !1));
                            }
                            return r;
                        });
                    },
                Q =
                    (e) =>
                    (t, r, { api: s }) => {
                        t(C.eX.tvUpdateFollowingUser(e.screenName, !1));
                        return T._O(t, { params: { id_str: e.userId }, request: s.withEndpoint(E.Z).unfollow })({ actionTypes: C.tL, context: "TV_UNFOLLOW", meta: {} }, (t) => {
                            const r = [];
                            if (t) {
                                V(t, e.userId) || r.push(C.eX.tvUpdateFollowingUser(e.screenName, !0));
                            }
                            return r;
                        });
                    },
                q =
                    (e) =>
                    (t, r, { api: s }) => {
                        t(C.eX.tvUpdateFriendship(e.screenName, e.notificationsEnabled));
                        return T._O(t, { params: { id: e.userId, device: e.notificationsEnabled }, request: s.withEndpoint(i.Z).updateFriendship })({ actionTypes: C.tL, context: "TV_UPDATE_NOTIFICATIONS", meta: {} });
                    },
                X =
                    (e) =>
                    (t, r, { api: s }) =>
                        T._O(t, { params: { focalTweetId: e.tweetId, ...(void 0 !== e.cursor && { cursor: e.cursor }) }, request: s.withEndpoint(n.Z).fetchTweetDetail })({ actionTypes: C.FQ, context: "TV_FETCH_TWEET_CONVERSATION", meta: {} }, (t) => {
                            const r = [];
                            if (t) {
                                const s = ((e) => {
                                        const t = e?.instructions?.find((e) => "TimelineAddEntries" === e?.type);
                                        return (0, a.Z)(t?.entries || [], (e, t) => {
                                            if ("TimelineTimelineModule" === e?.content?.__typename && "TimelineTweet" === e?.content?.items?.[0]?.item?.itemContent?.__typename) {
                                                const t = e?.content?.items?.[0]?.item?.itemContent?.tweet_results,
                                                    r = e?.sortIndex;
                                                return { tweet: F(t, !0), sortIdx: r };
                                            }
                                        });
                                    })(t),
                                    n = ((e) => {
                                        const t = e?.instructions?.find((e) => "TimelineAddEntries" === e?.type)?.entries;
                                        if (!t || 0 === t.length) return;
                                        const r = t[t.length - 1];
                                        return "TimelineTimelineCursor" === r?.content?.itemContent?.__typename && "Bottom" === r?.content?.itemContent?.cursorType ? r?.content?.itemContent?.value : void 0;
                                    })(t);
                                r.push(C.eX.tvTweetConversationResults(s, e.tweetId, n));
                            }
                            return r;
                        }),
                x =
                    (e, t) =>
                    (r, s, { api: a }) =>
                        T._O(r, { params: { q: e.q, result_type: "users,topics,trending", src: "search_box" }, request: a.withEndpoint(u.Z).fetch })({ actionTypes: C.cJ, context: "FETCH_TV_SEARCH_TYPEAHEAD", meta: {} }, (r) => {
                            const s = [];
                            if (r && e.q === t.current) {
                                const t = r.users?.map((e) => ({ ...(0, S.gJ)(e, "remote"), type: "user" })) || [],
                                    a = r.topics?.map((e) => ({ ...e, type: "topic" })) || [];
                                s.push(C.eX.tvSearchTypeaheadResults({ users: t, topics: a, size: t.length + a.length }, e.q));
                            }
                            return s;
                        });
        },
        795181: (e, t, r) => {
            r.d(t, { BS: () => m, E3: () => S, M2: () => a, Np: () => y, XS: () => c, Yf: () => s, Z: () => d, _b: () => E, _c: () => w, bJ: () => o, bV: () => _, f1: () => p, fY: () => T, gw: () => v, hI: () => n, hx: () => R, hy: () => f, jT: () => i, rd: () => u, sz: () => C, te: () => h, wW: () => l });
            const s = "tv",
                a = "rweb/tv/TV_DEVICE_IS_VERIFIED",
                n = "rweb/tv/TV_DEVICE_IS_VERIFIED_CODE_EXPIRED",
                o = "rweb/tv/TV_HOME_LOADED",
                i = "rweb/tv/TV_HOME_RELOAD",
                c = "rweb/tv/TV_TREND_LOADED",
                u = "rweb/tv/TV_RELATED_VIDEOS_LOADED",
                d = "rweb/tv/TV_RELATED_VIDEOS_LOAD_FAILED",
                E = "rweb/tv/TV_USER_PROFILE_LOADED",
                l = "rweb/tv/TV_PIN_CODE_LOADED",
                p = "rweb/tv/TV_PLAYER_OPEN",
                _ = "rweb/tv/TV_PLAYER_CLOSE",
                T = "rweb/tv/TV_PLAYER_SET_VIDEO",
                S = "rweb/tv/TV_SEARCH_START",
                C = "rweb/tv/TV_SEARCH_RESULTS",
                y = "rweb/tv/TV_USER_SEARCH_RESULTS",
                h = "rweb/tv/TV_SEARCH_RESULTS_CLEAR",
                m = "rweb/tv/TV_SEARCH_TYPEAHEAD_RESULTS",
                w = "rweb/tv/TV_UPDATE_FOLLOWING_USER",
                f = "rweb/tv/TV_UPDATE_FRIENDSHIP",
                R = "rweb/tv/TV_TWEET_CONVERSATION_RESULTS",
                v = "rweb/tv/TV_RELATED_VIDEOS_CLEAR";
        },
        909622: (e, t, r) => {
            r.d(t, { Z: () => o });
            var s = r(807469),
                a = r(750085),
                n = r(218951);
            const o = (e) => (0, n.Z)({ timelineId: `topics-sidebar-graphql-${e}`, network: { getEndpoint: (e) => e.withEndpoint(s.ZP).fetchTopicsToFollowSidebar, getEndpointParams: () => ({ userId: e }) }, formatResponse: a.Z, context: "FETCH_TOPICS_SIDEBAR", perfKey: "topics-sidebar-GraphQL" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023.0798f61a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"],
    {
        287578: (e, t, o) => {
            o.d(t, { io: () => d, rS: () => l });
            var i = o(499627),
                r = o(312771);
            const s = Object.freeze({ LOCAL_STATE_LOADED: "rweb/editTweet/LOCAL_STATE_LOADED", LOCAL_STATE_REQUEST: "rweb/editTweet/LOCAL_STATE_REQUEST" }),
                n = "editTweet",
                a = "rweb.editTweet",
                d = (e) => ((e) => e[n].fetchStatus === r.ZP.LOADED)(e) && !e[n].editTweetLimitedMarketPromptDismissedEpochMilliseconds,
                c = (e) => ({ payload: e, type: s.LOCAL_STATE_LOADED }),
                l = () => {
                    return (
                        (e = { editTweetLimitedMarketPromptDismissedEpochMilliseconds: Date.now() }),
                        (t, o, { userPersistence: i }) => {
                            const {
                                    [n]: { fetchStatus: r, ...s },
                                } = o(),
                                d = { ...s, ...e };
                            return t(c(d)), i.set(a, d);
                        }
                    );
                    var e;
                },
                u = Object.freeze({ fetchStatus: r.ZP.NONE, editTweetLimitedMarketPromptDismissedEpochMilliseconds: 0 });
            i.Z.register(
                {
                    [n]: function (e = u, t) {
                        if (!t) return e;
                        switch (t.type) {
                            case s.LOCAL_STATE_REQUEST:
                                return { ...e, fetchStatus: r.ZP.LOADING };
                            case s.LOCAL_STATE_LOADED:
                                return { ...e, fetchStatus: r.ZP.LOADED, ...t.payload };
                            default:
                                return e;
                        }
                    },
                },
                () =>
                    (e, t, { userPersistence: o }) => (
                        e({ payload: {}, type: s.LOCAL_STATE_REQUEST }),
                        o
                            .get(a)
                            .then((t) => {
                                e(c(t));
                            })
                            .catch(() => {
                                e(c({}));
                            })
                    ),
            );
        },
        806528: (e, t, o) => {
            o.d(t, { Bz: () => c, ZW: () => m, ey: () => u, fw: () => a, iG: () => _, wM: () => d });
            var i = o(499627),
                r = o(341276);
            const s = "geoLocation",
                n = Object.freeze({ permissionStatus: void 0, position: void 0 });
            const a = (e) => e[s],
                d = (e) => e[s].permissionStatus,
                c = (e) => e[s].position,
                l = "rweb/geoLocation/SET_PERMISSION_STATUS",
                u = (e) => ({ payload: e, type: l }),
                p = "rweb/geoLocation/SET_POSITION",
                _ = () => (e, t) =>
                    E()
                        .then((t) => e({ payload: t, type: p }))
                        .catch((t) => (e(u(r.S.denied)), Promise.reject(t))),
                m = () => (e, t) => (c(t()) ? Promise.resolve() : e(_())),
                E = () =>
                    new Promise((e, t) =>
                        navigator.geolocation.getCurrentPosition((t) => {
                            const o = { timestamp: t.timestamp, coords: { latitude: t.coords.latitude, longitude: t.coords.longitude, altitude: t.coords.altitude, accuracy: t.coords.accuracy, altitudeAccuracy: t.coords.altitudeAccuracy, heading: t.coords.heading, speed: t.coords.speed } };
                            return e(o);
                        }, t),
                    );
            i.Z.register({
                [s]: function (e = n, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case l:
                            return { ...e, permissionStatus: t.payload };
                        case p:
                            return { ...e, position: t.payload };
                        default:
                            return e;
                    }
                },
            });
        },
        341276: (e, t, o) => {
            o.d(t, { M: () => r, S: () => i });
            const i = Object.freeze({ granted: "granted", denied: "denied", prompt: "prompt" }),
                r = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 });
        },
        723819: (e, t, o) => {
            o.d(t, { ED: () => c, gN: () => l, nQ: () => u });
            var i = o(24949),
                r = o(175856),
                s = o(558369),
                n = o(919022);
            const a = (0, i.P1)(
                    (e) => (0, s.FG)(e, "graduated_access_user_prompt_enabled"),
                    (e) => (0, s.FG)(e, "graduated_access_invisible_treatment_enabled"),
                    (e, t) => !(!e || !t),
                ),
                d = (0, i.P1)(
                    (e) => (0, s.FG)(e, "graduated_access_botmaker_decider_enabled"),
                    (e) => !!e,
                ),
                c = (0, i.P1)(
                    n.ZP.selectViewerUser,
                    (e) => (0, r.t5)(e, r.Uq),
                    a,
                    d,
                    (e, t, o, i) => {
                        const r = e?.has_graduated_access ?? null;
                        if (null === r) return !1;
                        if (!i) {
                            const t = e?.created_at ?? "";
                            if (!(0 === t?.length)) return !1;
                            const o = 21,
                                i = Date.now(),
                                r = Date.parse(t);
                            if (new Date(i - r) / 864e5 > o) return !1;
                        }
                        return !r && t && o;
                    },
                ),
                l = (0, i.P1)(
                    n.ZP.selectViewerUser,
                    (e) => (0, r.t5)(e, r.d7),
                    (e) => (0, r.t5)(e, r.Uq),
                    a,
                    (e, t, o, i) => !0 === e?.has_graduated_access && !o && t && i,
                ),
                u = (0, i.P1)(c, l, (e, t) => e || t);
        },
        843138: (e, t, o) => {
            o.d(t, { Px: () => I, BJ: () => f, k6: () => h, Xm: () => S, ke: () => E, jK: () => m, tn: () => T, uD: () => w, T5: () => C });
            var i = o(242419),
                r = o(499627),
                s = o(917799),
                n = o(312771),
                a = o(806528),
                d = o(341276),
                c = o(936572),
                l = o(27498);
            const u = "placePicker",
                p = Object.freeze({ REQUEST: "rweb/placePicker/SEARCH_REQUEST", SUCCESS: "rweb/placePicker/SEARCH_SUCCESS", FAILURE: "rweb/placePicker/SEARCH_FAILURE" }),
                _ = Object.freeze({ initial: { fetchStatus: n.ZP.NONE }, lastSearch: { fetchStatus: n.ZP.NONE }, lastSelectedPlace: void 0 });
            const m = (e) => e[u].initial.results,
                E = (e) => e[u].initial.fetchStatus,
                w = (e) => e[u].lastSearch.results,
                T = (e) => e[u].lastSearch.fetchStatus,
                S = (e) => {
                    const t = m(e),
                        o = ((e) => e[u].lastSelectedPlace)(e);
                    return ((e, t) => t ?? e?.places.find((t) => e?.autotag_place_id === t.place.id))(t, o);
                },
                y =
                    (e, t) =>
                    (o, r, { api: n }) =>
                        (0, s._O)(o, { request: n.withEndpoint(i.Z).search, params: e })({ actionTypes: p, context: "SEARCH_PLACES_ACTION", meta: { resultSet: t } }),
                h =
                    (e) =>
                    (t, o, { api: i }) => {
                        const r = (0, a.Bz)(o());
                        return t(y({ query_type: l.ZV.tweet_compose_location, lat: r?.coords.latitude, long: r?.coords.longitude, hacc: r?.coords.accuracy, search_term: e }, l.Z0.lastSearch));
                    },
                f =
                    () =>
                    (e, t, { api: o }) => {
                        const i = E(t()),
                            r = m(t());
                        if (i === n.ZP.LOADING || r) return Promise.resolve();
                        const s = (0, a.Bz)(t());
                        return s ? e(y({ lat: s.coords.latitude, long: s.coords.longitude, hacc: s.coords.accuracy, query_type: l.ZV.tweet_compose_location, count: 50 }, l.Z0.initial)) : Promise.resolve();
                    },
                I =
                    () =>
                    (e, t, { api: o }) =>
                        (0, c.t$)(t()) && (0, a.wM)(t()) === d.S.granted
                            ? e((0, a.ZW)())
                                  .then(() => e(f()))
                                  .then(() => S(t()))
                            : Promise.resolve(),
                v = "rweb/placePicker/UPDATE_LAST_SELECTED_PLACE",
                C = (e) => ({ type: v, payload: e });
            r.Z.register({
                [u]: function (e = _, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case p.REQUEST: {
                            const { resultSet: o } = t.meta;
                            return { ...e, [o]: { fetchStatus: n.ZP.LOADING } };
                        }
                        case p.FAILURE: {
                            const { resultSet: o } = t.meta;
                            return { ...e, [o]: { fetchStatus: n.ZP.FAILED } };
                        }
                        case p.SUCCESS: {
                            const {
                                meta: { resultSet: o },
                                payload: i,
                            } = t;
                            return { ...e, [o]: { fetchStatus: n.ZP.LOADED, results: i } };
                        }
                        case v: {
                            const { payload: o } = t;
                            return { ...e, lastSelectedPlace: o ?? void 0 };
                        }
                        default:
                            return e;
                    }
                },
            });
        },
        27498: (e, t, o) => {
            o.d(t, { Z0: () => s, ZV: () => i, xt: () => r });
            const i = Object.freeze({ profile_location: "profile_location", tweet_compose_location: "tweet_compose_location" }),
                r = Object.freeze({ foursquare: "foursquare", yelp: "yelp" }),
                s = Object.freeze({ initial: "initial", lastSearch: "lastSearch" });
        },
        24546: (e, t, o) => {
            o.d(t, { Ed: () => O, MH: () => M, NS: () => F, Ox: () => Z, Qx: () => U, Qz: () => f, W: () => b, dD: () => x, wz: () => A });
            o(136728);
            var i = o(674132),
                r = o.n(i),
                s = o(161821),
                n = o(88656),
                a = o(638873),
                d = o(499627),
                c = o(704279),
                l = o(497294),
                u = o(390387),
                p = o(936572),
                _ = o(601576),
                m = o(632960),
                E = o(492292),
                w = o(836255),
                T = o(360142),
                S = o(255117),
                y = o(195250);
            const h = "previews",
                f = 20,
                I = Object.freeze({}),
                v = "rweb/previews/STORE_PREVIEW",
                C = "rweb/previews/REMOVE_PREVIEW_TWEET",
                R = "rweb/previews/LINK_TWEET_TO_PREVIEW",
                g = r().g61ed8a4,
                P = {};
            function D(e) {
                return (0, p.zD)(e).durationSecs || f;
            }
            function L(e, t, o) {
                const i = e?.errors ? e.errors[0]?.code : null,
                    r = e instanceof n.Z && i ? a.Z[i] : null,
                    s = { text: r && r.toast ? r.toast.text : g };
                o(_.fz(s));
            }
            d.Z.register({
                [h]: function (e = I, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case v:
                            return t?.payload?.id ? { ...e, [t.payload.id]: { ...t.payload, linkedTweetIds: [] } } : e;
                        case R:
                            return t?.payload?.id ? { ...e, [t.payload.id]: { ...e[t.payload.id], linkedTweetIds: [...e[t.payload.id].linkedTweetIds, t.payload.linkedTweetId] } } : e;
                        case C:
                            if (t.payload) {
                                const o = e[t.payload]?.timeoutId;
                                o && clearTimeout(o);
                                const i = { ...e };
                                return delete i[t.payload], i;
                            }
                            return e;
                        default:
                            return e;
                    }
                },
            });
            const b = (e) => e[h],
                U = (e, { previewTweetId: t }) => b(e)[t],
                A = (e) => ({ payload: e, type: R }),
                x =
                    (e) =>
                    (t, o, { featureSwitches: i }) => {
                        const r = U(o(), { previewTweetId: e });
                        if (!r) return;
                        const s = r.composerData.map((e) => ({ ...e, draftTweetId: void 0 }));
                        t(m.RU(s, "modal")), t(Z(e));
                    },
                Z =
                    (e) =>
                    (t, o, { featureSwitches: i }) => {
                        const r = (0, u._h)(o()),
                            s = U(o(), { previewTweetId: e }),
                            n = s?.previewData?.inReplyToStatus?.id_str,
                            a = s?.linkedTweetIds;
                        if (void 0 === r) return Promise.resolve();
                        const d = { [e]: !0 };
                        if (
                            (a &&
                                a.length > 0 &&
                                a.forEach((e) => {
                                    d[e] = !0;
                                }),
                            n)
                        ) {
                            t((0, T.ZP)({ focalTweetId: n }).removeTweets(d));
                        }
                        return t(w.Z.deletePreview(e)), t({ payload: e, type: C }), Promise.resolve(t([(0, S.ZP)({ useLatest: !0, userId: r }).removeTweets(d), (0, S.ZP)({ useLatest: !1, userId: r }).removeTweets(d), (0, y.ZP)(i, r, "default").removeTweets(d)]));
                    },
                O = (e) => (t, o) => {
                    const i = D(o()),
                        r = 1e3 * i,
                        { id: s, previewData: n } = e,
                        a = Date.now() + r,
                        d = o().tweetComposer.activeParentKey,
                        l = (0, E.vY)(m.tS(o(), d), 0, {}),
                        u = { subscription_details: { draft_id: s, undo_period: r / 1e3, tweet_type: n.tweetType } };
                    return new Promise((e) => {
                        const o = setTimeout(() => {
                            t(c.n({ section: "composition", element: "undo_tweet", page: "home", action: "timer_elapsed" }, u)), e(t(F(s)));
                        }, r);
                        t(c.n({ section: "composition", element: "undo_tweet", page: "home", action: "queued" }, u)), t(((e) => ({ payload: e, type: v }))({ timeToSend: a, id: s, composerData: l, timeoutId: o, previewData: n, linkedTweetIds: [], undoDurationSecs: i }));
                    });
                },
                F = (e) => (t, o) => {
                    if (!0 === P[e]) return Promise.resolve();
                    const i = 1e3 * D(o()),
                        r = U(o(), { previewTweetId: e });
                    if (!r) return Promise.resolve();
                    const { composerData: s, id: n, previewData: a } = r;
                    return (
                        (P[e] = !0),
                        t(m.lW({ ...a, isPreview: !1, isSendPreview: !0 }))
                            .then(() => {
                                const e = { subscription_details: { draft_id: n, undo_period: i / 1e3, tweet_type: a.tweetType } };
                                t(c.n({ section: "composition", element: "undo_tweet", page: "app", action: "sent" }, e));
                            })
                            .catch((e) => {
                                L(e, 0, t);
                            })
                            .finally(() => {
                                delete P[e],
                                    s.forEach((e) => {
                                        e?.mediaIds?.length && t((0, l.WU)(e.mediaIds));
                                    }),
                                    t(Z(n));
                            })
                    );
                },
                M = () => (e, t) => {
                    const o = D(t()),
                        i = b(t()),
                        r = (0, s.Z)(i),
                        n = [],
                        a = [];
                    for (const t in i)
                        if (!0 !== P[t]) {
                            (P[t] = !0), a.push(t);
                            const { previewData: r } = i[t],
                                s = { subscription_details: { draft_id: t, undo_period: o, tweet_type: r.tweetType } };
                            n.push(e(m.lW({ ...r, isPreview: !1, isSendPreview: !0 })), e(c.n({ element: "undo_tweet", page: "app", action: "send_unload" }, s)));
                        }
                    return Promise.all(n)
                        .catch((t) => L(t, 0, e))
                        .finally(() => {
                            r.forEach((t) => {
                                e(Z(t.id));
                            }),
                                a.forEach((e) => {
                                    delete P[e];
                                });
                        });
                };
        },
        137204: (e, t, o) => {
            o.d(t, { BS: () => _, Ln: () => u, MI: () => m });
            var i = o(235975),
                r = o(499627),
                s = o(917799),
                n = o(312771);
            const a = "trustedFriends",
                d = Object.freeze({ REQUEST: "rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_REQUEST", SUCCESS: "rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_SUCCESS", FAILURE: "rweb/trustedFriendsLists/FETCH_TRUSTED_FRIENDS_LISTS_FAILURE" }),
                c = Object.freeze({ REQUEST: "rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_REQUEST", SUCCESS: "rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_SUCCESS", FAILURE: "rweb/trustedFriendsLists/CREATE_TRUSTED_FRIENDS_LIST_FAILURE" }),
                l = "rweb/trustedFriendsLists/SET_TRUSTED_FRIENDS_LIST",
                u = (e) => e[a].lists,
                p =
                    () =>
                    (e, t, { api: o }) =>
                        s._O(e, { request: o.withEndpoint(i.Z).createTrustedFriendsList })({ actionTypes: c, context: "CREATE_TRUSTED_FRIENDS_LIST" }),
                _ = () => (e, t) => {
                    const o = t(),
                        r = u(o);
                    (r.length ? r[0] : void 0) ||
                        e((e, t, { api: o }) => s._O(e, { request: o.withEndpoint(i.Z).fetchAuthenticatedUserTFLists })({ actionTypes: d, context: "FETCH_TRUSTED_FRIENDS_LISTS" })).then((t) => {
                            !t.authenticated_user_trusted_friends_lists.length && p && e(p());
                        });
                },
                m = (e) => (t, o) => {
                    const i = o(),
                        [r] = u(i);
                    if (r) {
                        const o = { ...r, member_count: e };
                        t({ payload: o, type: l });
                    }
                },
                E = Object.freeze({ lists: [], fetchStatus: n.ZP.NONE });
            r.Z.register({
                [a]: function (e = E, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case d.REQUEST:
                            return { ...e, fetchStatus: n.ZP.LOADING };
                        case d.FAILURE:
                            return { ...e, error: t.payload, fetchStatus: n.ZP.FAILED };
                        case d.SUCCESS:
                            if (t.payload) return { ...e, lists: t.payload.authenticated_user_trusted_friends_lists, error: null, fetchStatus: n.ZP.LOADED };
                            break;
                        case c.REQUEST:
                            return { ...e, fetchStatus: n.ZP.LOADING };
                        case c.FAILURE:
                            return { ...e, error: t.payload, fetchStatus: n.ZP.FAILED };
                        case c.SUCCESS:
                            if (t.payload) return { ...e, lists: [t.payload.trusted_friends_list_create], error: null, fetchStatus: n.ZP.LOADED };
                            break;
                        case l:
                            if (t.payload) return { ...e, lists: [t.payload] };
                            break;
                        default:
                            return e;
                    }
                    return e;
                },
            });
        },
        632960: (e, t, o) => {
            o.d(t, { Bv: () => Re, Ol: () => Ce, oI: () => B, $P: () => ge, Es: () => Fe, RU: () => Ze, Os: () => G, E_: () => me, oN: () => Ee, SJ: () => we, tS: () => le, KS: () => ue, Gz: () => _e, WQ: () => pe, R5: () => Se, ZE: () => Te, _d: () => ye, lW: () => J, jr: () => Ve, tD: () => Ie, JC: () => Ae, mi: () => fe, sU: () => Ne, JF: () => Pe, qO: () => De, OO: () => be, wk: () => ze, zi: () => he });
            o(136728);
            var i = o(715729),
                r = o(908478),
                s = o(323265),
                n = o(459660),
                a = o(976006),
                d = o(429650),
                c = o(349745),
                l = o(499627),
                u = o(497294);
            const p = Object.freeze({ REQUEST: "rweb/tweetComposer/SCHEDULE_REQUEST", SUCCESS: "rweb/tweetComposer/SCHEDULE_SUCCESS", FAILURE: "rweb/tweetComposer/SCHEDULE_FAILURE" }),
                _ = Object.freeze({ REQUEST: "rweb/tweetComposer/DRAFT_REQUEST", SUCCESS: "rweb/tweetComposer/DRAFT_SUCCESS", FAILURE: "rweb/tweetComposer/DRAFT_FAILURE" }),
                m = Object.freeze({ REQUEST: "rweb/tweetComposer/SEND_REQUEST", SUCCESS: "rweb/tweetComposer/SEND_SUCCESS", FAILURE: "rweb/tweetComposer/SEND_FAILURE" }),
                E = Object.freeze({ REQUEST: "rweb/tweetComposer/SEND_PREVIEW_REQUEST", SUCCESS: "rweb/tweetComposer/SEND_PREVIEW_SUCCESS", FAILURE: "rweb/tweetComposer/SEND_PREVIEW_FAILURE" });
            var w = o(122868),
                T = o(492292),
                S = (o(571372), o(925873)),
                y = o(688715),
                h = o(697926),
                f = o(803810),
                I = o(180274),
                v = o(439058),
                C = o(265617),
                R = o(873793),
                g = o(466015),
                P = o(917799);
            const D = ({ conversationControlsValue: e, inReplyToStatus: t, isSelfThreadReply: o }) => {
                if (!(!!t.id_str || o) && "all" !== e) return e;
            };
            var L = o(669002),
                b = o(56519),
                U = o(558369),
                A = o(24546),
                x = o(390387),
                Z = o(836255),
                O = o(985366),
                F = o(360142),
                M = o(255117),
                N = o(195250),
                k = o(919022),
                V = o(163889),
                j = o(276001);
            const z = "CREATE_POLL_ERROR";
            const K = "rweb.savedConversationControl",
                Q = "rweb.broadcastCommunityTweetPreferenceV2";
            class W extends Error {}
            const q = (e, t, o, i) => {
                const r = (0, U.mz)(t),
                    s = (0, x._h)(t) || "";
                if (o && o.length) {
                    let t;
                    const n = {},
                        a = o[0]?.self_thread?.id_str;
                    if ((a && e(Z.Z.disableEdit(a)), o.length > 1)) {
                        const i = o[0].id_str;
                        e(Z.Z.disableEdit(i));
                        const r = o[o.length - 1];
                        t = g.Ds({ sortIndex: r.id_str, tweetIds: o.map((e) => e.id_str), stayAtTop: r.isPreview });
                    } else {
                        const e = o[0];
                        (t = g.Se({ id: e.id_str, sortIndex: e.id_str, stayAtTop: e.isPreview })),
                            e.edit_control?.edit_tweet_ids &&
                                e.edit_control.edit_tweet_ids.length > 1 &&
                                e.edit_control.edit_tweet_ids.slice(0, -1).forEach((e) => {
                                    n[e] = !0;
                                });
                    }
                    const d = o[0].in_reply_to_status_id_str;
                    if (d) {
                        const t = (0, F.ZP)({ focalTweetId: d });
                        e(
                            (0, F.gr)(
                                t,
                                d,
                                o.map((e) => e.id_str),
                            ),
                        );
                    }
                    const c = o[0].in_reply_to_user_id_str;
                    if (i && !c) return [(0, O.Qx)(i, { rankingMode: "Recency", displayLocation: "Community" }).injectEntry(t), (0, O.Qx)(i, { rankingMode: "Recency", displayLocation: "Home" }).injectEntry(t), (0, O.Qx)(i, { rankingMode: "Relevance", displayLocation: "Community" }).injectEntry(t), (0, O.Qx)(i, { rankingMode: "Relevance", displayLocation: "Home" }).injectEntry(t)];
                    {
                        const e = o[0].in_reply_to_user_id_str && o[0].in_reply_to_user_id_str !== o[0].user.id_str,
                            i = (0, M.ZP)({ userId: s, useLatest: !1 }),
                            a = (0, M.ZP)({ userId: s, useLatest: !0 });
                        return [(0, N.ZP)(r, s, e ? "with_replies" : "default").injectEntry(t), i.injectEntry(t), a.injectEntry(t), (0, N.ZP)(r, s, e ? "with_replies" : "default").removeTweets(n), i.removeTweets(n), a.removeTweets(n)];
                    }
                }
            };
            function H(e, t, o) {
                const { mediaTags: i = [] } = t;
                let r, s, n;
                if (t.editorStateRaw) {
                    const e = S.Z.initEditorState(t.editorStateRaw),
                        o = (0, R.c)(e);
                    (r = o.text), (s = o.richtext_options), (n = o.media_options);
                } else r = t.text;
                const { batchMode: a = C._m.SINGLE_TWEET, broadcast: d, composeSemanticCoreId: c, conversationControlsValue: l, excludedRecipients: p = [], exclusivityControlValue: _, inReplyToStatusIdStr: m, promotedContent: E, isPreview: w, trustedFriendsValue: I, previousTweetId: v, premiumExclusiveControlOptions: g, disallowedReplyControls: P } = o,
                    D = (function (e, t) {
                        const { gifMetadata: o = {}, media: i = [], mediaTags: r = [], isPreview: s, previousTweetId: n } = t,
                            { found_media_origin: a } = o,
                            d = i.map((e) => e.id),
                            c = e((0, u.$i)(d, { withoutReUpload: !!n })),
                            l = i.map((e) => e.mediaMetadata?.subtitles?.upload.id).filter(Boolean),
                            p = e((0, u.$i)(l));
                        return Promise.all([c, p]).then(([t, o]) => {
                            const n = t.map((e) => e.uploadId || "").filter((e) => "" !== e),
                                d = (0, h.Z)(
                                    n,
                                    (e) => e,
                                    (e) => r.map((e) => ({ type: e.type, user_id: e.id })),
                                ),
                                c = t.map((t) => {
                                    const i = t.mediaMetadata?.subtitles,
                                        r = o.find((e) => e.id === i?.upload.id),
                                        n = t?.mediaMetadata?.altText || t?.mediaMetadata?.defaultAltText,
                                        d = t?.mediaMetadata?.sensitiveMediaWarning,
                                        c = t?.mediaMetadata?.allowDownloadStatus,
                                        l = [];
                                    return (n || a || d?.size || c) && t.uploadId && l.push((0, u.o6)({ found_media_origin: a, media_id: t.uploadId, ...(0, f.Z)(n ? { alt_text: { text: n } } : null), ...(0, f.Z)(d?.size ? { sensitive_media_warning: Array.from(d) } : null), ...(0, f.Z)(c ? { allow_download_status: { allow_download: c.allowDownload ? "true" : "false" } } : null) })), i && r && r.uploadId && t.uploadId && !s && l.push((0, u.pJ)({ mediaItem: t, videoMediaUploadId: t.uploadId, subtitlesMediaUploadId: r.uploadId || "", subtitlesLang: i.lang, subtitlesDisplayName: i.displayName })), Promise.all(l.map(e));
                                });
                            return Promise.all(c).then(() => ({ uploadedMedia: t, uploadedMediaIds: n, uploadedMediaTags: d, originalMedia: i }));
                        });
                    })(e, { gifMetadata: t.gifMetadata, media: t.media, mediaTags: t.mediaTags, isPreview: w, previousTweetId: v });
                let L = Promise.resolve();
                t.pollDuration &&
                    t.pollChoices &&
                    t.pollActive &&
                    (L = (function (e, { pollChoices: t, pollDuration: o }) {
                        const i = (0, T.xM)(o);
                        return e(j.Z.createPoll(null, { choices: t, durationMinutes: i })).then(
                            (e) => {
                                if ("OK" !== e.status || !e.card_uri) {
                                    const t = new Error("Poll create response was not OK");
                                    throw ((t.name = z), (0, V.ZP)(t, { extra: e }), t);
                                }
                                return e;
                            },
                            (e) => {
                                throw ((e.name = z), (0, V.ZP)(e), e);
                            },
                        );
                    })(e, { pollDuration: t.pollDuration, pollChoices: t.pollChoices }));
                const b = [D, L];
                return Promise.all(b).then((e) => {
                    const [o, u] = e;
                    if (t.editorStateRaw) {
                        const e = n?.inline_media,
                            t = [];
                        e &&
                            (e.forEach((e) => {
                                const i = o.originalMedia.find((t) => t.uploadId === e.media_id)?.mediaFileHash;
                                if (i) {
                                    const r = o.uploadedMedia.find((e) => e.mediaFileHash === i)?.uploadId;
                                    r ? t.push({ ...e, media_id: r }) : t.push(e);
                                } else t.push(e);
                            }),
                            (n = { inline_media: t }));
                    }
                    const w = o.uploadedMediaIds.join(",");
                    let T, S;
                    i.length && (T = o.uploadedMediaTags), m && p.length && (S = p.join(","));
                    const h = t.cardUrl || (u && u.card_uri);
                    let f;
                    t.quotedStatus?.permalink && (f = (0, y.ju)(`https://x.com${t.quotedStatus.permalink}`));
                    const C = !!m;
                    let R;
                    if (t.taggedLocation) {
                        R = { place_id: t.taggedLocation.place.id, geo_search_request_id: t.taggedLocation.geo_search_request_id };
                    }
                    return { attachment_url: f, auto_populate_reply_metadata: C, batch_mode: a, broadcast: d, card_uri: h, conversation_control: l, exclude_reply_user_ids: S, exclusive_tweet_control_options: _, trusted_friends_control_options: I, geo: R, in_reply_to_status_id: m, media_ids: w, media_tags: T, media_title: t.mediaTitle, media_description: t.mediaDescription, promotedContent: E, semantic_annotation_ids: c, status: r, richtext_options: s, media_options: n, previous_tweet_id: v, disallowed_reply_controls: P, premium_tweet_control_options: g };
                });
            }
            const G =
                    (e) =>
                    (t, o, { api: i }) => {
                        const r = P._O(t, {
                                params: e,
                                request: (e) => {
                                    const { excludedRecipients: o, inReplyToStatus: i = {}, scheduleData: r } = e;
                                    return t(
                                        (
                                            (e, t) =>
                                            (o, i, { api: r, featureSwitches: s }) => {
                                                const [n] = e,
                                                    { draftTweetId: a, scheduledFor: d, scheduledTweetId: l } = n,
                                                    u = (0, c.o3)(d);
                                                if (!u) {
                                                    const e = new W("Invalid `scheduledFor`");
                                                    return (e.scheduledFor = d), Promise.reject(e);
                                                }
                                                return Promise.all(e.map((e) => H(o, { ...e }, { ...t }).then(({ attachment_url: e, auto_populate_reply_metadata: t, exclude_reply_user_ids: o, in_reply_to_status_id: i, media_ids: r, media_options: s, richtext_options: n, status: a }) => ({ attachment_url: e, auto_populate_reply_metadata: t, exclude_reply_user_ids: o, in_reply_to_status_id: i, media_ids: r, media_options: s, richtext_options: n, status: a })))).then((e) => {
                                                    const [t, ...o] = e,
                                                        i = l || a,
                                                        { in_reply_to_status_id: n } = t,
                                                        d = s.isTrue("longform_notetweets_scheduling_non_reply_enabled") && !n,
                                                        c = { ...t, richtext_options: d ? t.richtext_options : void 0, media_options: d ? t.media_options : void 0, thread_tweets: o.map(({ attachment_url: e, media_ids: t, media_options: o, richtext_options: i, status: r }) => ({ attachment_url: e, media_ids: t, media_options: o, richtext_options: i, status: r })), executeAt: u };
                                                    return i ? r.withEndpoint(v.Z).editScheduledTweet({ ...c, scheduledTweetId: i }) : r.withEndpoint(v.Z).scheduleTweet(c);
                                                });
                                            }
                                        )(r, { excludedRecipients: o, inReplyToStatusIdStr: i.id_str }),
                                    ).then(
                                        (e) => ({ ...r[0], scheduled_id_str: e }),
                                        (e) => ((e.scheduledTweet = r), Promise.reject(e)),
                                    );
                                },
                            }),
                            { scheduleData: { scheduledTweetId: s } = {} } = e;
                        return r({ actionTypes: p, context: s ? "SCHEDULE_TWEET_EDIT" : "SCHEDULE_TWEET", meta: { scheduleParams: e } });
                    },
                B =
                    (e) =>
                    (t, o, { api: i }) => {
                        const r = P._O(t, {
                                params: e,
                                request: (e) => {
                                    const { excludedRecipients: o, inReplyToStatus: i = {}, draftData: r } = e,
                                        s = r[0];
                                    return t(
                                        (
                                            (e, t) =>
                                            (o, i, { api: r }) => {
                                                const { draftTweetId: s } = e[0];
                                                return Promise.all(e.map((e) => H(o, { ...e }, { ...t }).then(({ attachment_url: e, auto_populate_reply_metadata: t, exclude_reply_user_ids: o, in_reply_to_status_id: i, media_ids: r, media_options: s, richtext_options: n, status: a }) => ({ attachment_url: e, auto_populate_reply_metadata: t, exclude_reply_user_ids: o, in_reply_to_status_id: i, media_ids: r, media_options: s, richtext_options: n, status: a })))).then((e) => {
                                                    const [t, ...o] = e,
                                                        i = { ...t, thread_tweets: o.map(({ attachment_url: e, media_ids: t, media_options: o, richtext_options: i, status: r }) => ({ attachment_url: e, media_ids: t, media_options: o, richtext_options: i, status: r })) };
                                                    return s ? r.withEndpoint(I.Z).editDraftTweet({ ...i, draftTweetId: s }) : r.withEndpoint(I.Z).createDraftTweet(i);
                                                });
                                            }
                                        )(r, { excludedRecipients: o, inReplyToStatusIdStr: i.id_str }),
                                    ).then(
                                        (e) => ({ ...s, draft_id_str: e }),
                                        (e) => ((e.draftTweet = s), Promise.reject(e)),
                                    );
                                },
                            }),
                            { draftData: { draftTweetId: s } = {}, isAutoSave: n } = e;
                        return r({ actionTypes: _, context: s ? "DRAFT_TWEET_EDIT" : "DRAFT_TWEET", meta: { draftParams: e, isAutoSave: n } });
                    },
                Y =
                    (e, t = { excludedRecipients: [] }) =>
                    (o, i, { api: r, featureSwitches: s }) =>
                        H(o, e, t).then((s) =>
                            r
                                .withEndpoint(C.ZP)
                                .sendTweet(s)
                                .then((r) => {
                                    const s = i(),
                                        n = k.ZP.selectViewerUser(s),
                                        a = (r.entities.tweets || {})[r.result];
                                    (a.conversation_id_str = t.conversationId || a.conversation_id_str), n && t.trustedFriendsValue?.trusted_friends_list_id && (a.trusted_friends_info = { screen_name: n.screen_name }), r.entities && o((0, b.dP)(r.entities)), e.draftTweetId && o((0, L.bR)(e.draftTweetId)), t.communityIdValue && o(Z.Z.fetchOne(a.id_str)).catch(), a.isEdited && o(Z.Z.updateEditVersions(a.id_str));
                                    const d = Z.Z.selectHydrated(i(), a.id_str);
                                    if (!d) throw new Error("No hydratedTweet found in redux store for Tweet ID after sending");
                                    return d;
                                }),
                        ),
                $ =
                    (e, t, o = { excludedRecipients: [] }) =>
                    (i, r, { api: s, featureSwitches: n }) => {
                        const a = "subsequent" === o.batchMode && t.sendData.length > 1,
                            d = o.isSelfThreadReply && o.isFirstTweet;
                        return H(i, e, { ...o, isPreview: !0, inReplyToStatusIdStr: a && !d ? void 0 : o.inReplyToStatusIdStr }).then(
                            (n) => (
                                (n.preview = !0),
                                s
                                    .withEndpoint(C.ZP)
                                    .sendTweet(n)
                                    .then((s) => {
                                        const n = (s.entities.tweets || {})[s.result];
                                        (n.isPreview = !0), (n.conversation_id_str = o.conversationId), s.entities && i((0, b.dP)(s.entities)), !a || d ? i((0, A.Ed)({ previewData: t, id: n.id_str })) : o.firstTweetId && i((0, A.wz)({ id: o.firstTweetId, linkedTweetId: n.id_str })), e.draftTweetId && i((0, L.bR)(e.draftTweetId));
                                        const c = Z.Z.selectHydrated(r(), n.id_str);
                                        if (!c) throw new Error("No hydratedTweet found in redux store for Tweet ID after sending");
                                        return c;
                                    })
                            ),
                        );
                    };
            function J(e) {
                return (t, o, { api: i, featureSwitches: r, userPersistence: s }) => {
                    const { communityIdValue: a } = e,
                        d = o();
                    return P._O(t, {
                        params: e,
                        request: (e) => {
                            const { composeSemanticCoreId: o, conversationControlsValue: i, sendData: d = [], excludedRecipients: c, exclusivityControlValue: l, inReplyToStatus: u = {}, isSelfThreadReply: p = !1, promotedContent: _, isPreview: m = !1, previousTweetId: E, trustedFriendsValue: w, broadcast: T, disallowedReplyControls: S, premiumExclusiveControlOptions: y } = e,
                                h = D({ featureSwitches: r, conversationControlsValue: i, inReplyToStatus: u, isSelfThreadReply: p });
                            return (
                                h !== n.k.community_members && h !== n.k.super_followers_exclusive && h !== n.k.trusted_friends_tweet && h !== n.k.premium && s.set(K, { conversationControl: h || n.k.all }),
                                h !== n.k.community_members || u.conversation_id_str || s.set(Q, { broadcast: T }),
                                d.reduce((i, r, s) => {
                                    const n = 0 === s;
                                    return i.then((i) => {
                                        const f = u.conversation_id_str,
                                            I = n ? u.id_str : i[s - 1].id_str,
                                            v = n ? c : [],
                                            R = n ? _ : void 0,
                                            g = n ? null : i[0].id_str,
                                            P = n && void 0 === u.id_str ? l : void 0,
                                            D = n && void 0 === u.id_str ? w : void 0;
                                        let L;
                                        a || l ? (L = void 0) : n && (L = h);
                                        const b = { batchMode: n && !p ? (1 === d.length ? C._m.SINGLE_TWEET : C._m.FIRST_TWEET) : C._m.SUBSEQUENT_TWEET, broadcast: T, communityIdValue: a, conversationId: f, conversationControlsValue: L, composeSemanticCoreId: o, excludedRecipients: v, exclusivityControlValue: P, inReplyToStatusIdStr: I, promotedContent: R, firstTweetId: g, trustedFriendsValue: D, isSelfThreadReply: p, isFirstTweet: n, previousTweetId: E, disallowedReplyControls: S, premiumExclusiveControlOptions: y },
                                            U = m ? $(r, e, b) : Y(r, b);
                                        return t(U).then(
                                            (e) => {
                                                const o = [...i, e];
                                                return t(ze(o.length)), o;
                                            },
                                            (e) => ((e.sentTweets = i), Promise.reject(e)),
                                        );
                                    });
                                }, Promise.resolve([]))
                            );
                        },
                    })({ actionTypes: e.isSendPreview ? E : m, context: "SEND_SELF_THREAD", meta: { sendParams: e } }, (e, o) => {
                        if (e) return q(t, d, e, a);
                        if (o) {
                            const { sentTweets: e = [] } = o;
                            return q(t, d, e, a);
                        }
                    });
                };
            }
            const X = "tweetComposer",
                ee = [w.x.homeTimeline, w.x.modal],
                te = Object.freeze({ text: "", cardUrl: void 0, mediaIds: [], mediaTags: [], gifMetadata: void 0, pollActive: !1, pollChoices: void 0, pollDuration: void 0, pollValid: !1, scheduledFor: void 0, scheduledTweetId: void 0, draftTweetId: void 0, taggedLocation: void 0, isEmpty: !0, isValid: !1 });
            let oe = 0;
            function ie(e) {
                const t = `composer-${oe}`,
                    o = T.bY({ ...te, key: t, ...e });
                return (oe += 1), o;
            }
            const re = (e) => ({ activeComposerIndex: 0, audienceControls: { _type: "conversation_controls", conversationControlsValue: "all" }, composerData: [e || ie()], excludedRecipients: [], isSending: !1, isAutoSaving: !1, sentTweetsCount: 0, broadcastCommunityTweet: !0 }),
                se = re(),
                ne = w.x.modal;
            let ae;
            const de = () =>
                ae ||
                ((ae = { activeParentKey: ne }),
                ee.forEach((e) => {
                    ae[e] = re();
                }),
                ae);
            const ce = (e, t) => {
                const o = t || e[X].activeParentKey;
                return e[X][o] || se;
            };
            function le(e, t) {
                return ce(e, t).composerData;
            }
            const ue = (e, t) => ce(e, t).excludedRecipients,
                pe = (e, t) => ce(e, t).isSending,
                _e = (e, t) => ce(e, t).isAutoSaving,
                me = (e, t) => ce(e, t).activeComposerIndex,
                Ee = (e, t) => ce(e, t).audienceControls,
                we = (e, t) => !!ce(e, t).broadcastCommunityTweet,
                Te = (e) => {
                    const t = le(e),
                        o = ((e) => ce(e).sentTweetsCount)(e),
                        i = t.length;
                    let r = 0;
                    if (o < i) {
                        const i = t[o].mediaIds;
                        r = T.vW(e, i);
                    }
                    return (o + r) / i;
                },
                Se = (e) => {
                    const t = me(e),
                        o = le(e)[t],
                        i = e.scheduledTweets && e.scheduledTweets.scheduledTweets;
                    return i && o && !o?.scheduledFor
                        ? ((e, t) => {
                              const o = t.find((t) => t.rest_id === e && t.scheduling_info && t.scheduling_info.execute_at),
                                  i = o?.scheduling_info?.execute_at;
                              if (i) return (0, c.BR)(i);
                          })(o.scheduledTweetId, i)
                        : o && o.scheduledFor;
                },
                ye = (e) => {
                    const t = me(e),
                        o = le(e)[t];
                    return o && o.taggedLocation;
                };
            function he(e) {
                return (t, o) => {
                    const i = "number" == typeof e.index ? e.index : me(o(), e.parentKey);
                    t(Ze(T.vY(le(o(), e.parentKey), i, e.updates), e.parentKey));
                };
            }
            function fe(e) {
                return (t, o) => {
                    const i = le(o(), e.parentKey);
                    t(
                        Ze(
                            i.map((t, o) => (0, T.bY)({ ...t, ...e.updates })),
                            e.parentKey,
                        ),
                    );
                };
            }
            function Ie(e) {
                return (t, o) => {
                    const i = ie(e.data);
                    t(Ze([i], e.parentKey));
                };
            }
            function ve(e) {
                return (t, o) => {
                    const i = e.data.map(ie);
                    t(Ze(i, e.parentKey));
                };
            }
            const Ce = (e) => (t, o) => {
                const i = e ?? w.x.homeTimeline;
                t(
                    (function ({ from: e, to: t }) {
                        return (o, i) => {
                            o(Ze(T.vY(le(i(), e), 0, {}), t));
                        };
                    })({ from: i, to: w.x.modal }),
                ),
                    t(Ne(Ee(o(), i), w.x.modal)),
                    t(Ve(w.x.modal)),
                    t({ type: Oe, meta: { parentKey: i } });
            };
            function Re() {
                return (e, t) => {
                    const o = me(t());
                    let i;
                    const r = le(t()),
                        s = r[0]?.scheduledFor,
                        n = r.reduce((e, t, r) => ((0, d.m_)(t) || e.push(t), r === o && (null != s ? e.push(ie({ scheduledFor: s })) : e.push(ie()), (i = e.length - 1)), e), []);
                    e([Ze(n), Ae(i)]);
                };
            }
            const ge = () => (e, t) => {
                const o = le(t()),
                    i = me(t()),
                    r = Math.max(0, i - 1);
                e([Ae(r), Ze([...o.slice(0, i), ...o.slice(i + 1)])]);
            };
            function Pe(e) {
                return (t, o, { featureSwitches: i }) => {
                    const { parentKey: r } = e;
                    let n, d;
                    n = !!i.isTrue("longform_notetweets_mobile_richtextinput") || !s.ZP.isMobileOS();
                    const { thread_tweets: c, ...l } = e.data;
                    if (n) {
                        const { media_options: e, richtext_options: t, tweetId: i, ...r } = l,
                            s = (0, u.gz)(o()),
                            n = (0, a.eq)(r.text, t?.richtext_tags, s, e?.inline_media);
                        d = { ...r, editorStateRaw: n, draftTweetId: i };
                    } else {
                        const { tweetId: e, ...t } = l;
                        d = { ...t, draftTweetId: e };
                    }
                    t(
                        ve({
                            data: [
                                d,
                                ...(c?.map((e) => {
                                    if (n) {
                                        const { media_options: t, richtext_options: i, ...r } = e,
                                            s = (0, u.gz)(o()),
                                            n = (0, a.eq)(r.text, i?.richtext_tags, s, t?.inline_media);
                                        return { ...r, editorStateRaw: n };
                                    }
                                    return e;
                                }) ?? []),
                            ],
                            parentKey: r,
                        }),
                    );
                };
            }
            function De(e) {
                return (t, o, { featureSwitches: i }) => {
                    const { parentKey: r } = e;
                    let n, d;
                    n = !!i.isTrue("longform_notetweets_mobile_richtextinput") || !s.ZP.isMobileOS();
                    const { thread_tweets: c, ...l } = e.data;
                    if (n) {
                        const { media_options: e, richtext_options: t, tweetId: i, ...r } = l,
                            s = (0, u.gz)(o()),
                            n = (0, a.eq)(r.text, t?.richtext_tags, s, e?.inline_media);
                        d = { ...r, editorStateRaw: n, scheduledTweetId: i };
                    } else {
                        const { tweetId: e, ...t } = l;
                        d = { ...t, scheduledTweetId: e };
                    }
                    const p = l.scheduledFor;
                    t(
                        ve({
                            data: [
                                d,
                                ...(c?.map((e) => {
                                    if (n) {
                                        const { richtext_options: t, ...i } = e,
                                            r = (0, u.gz)(o()),
                                            s = (0, a.eq)(i.text, t?.richtext_tags, r);
                                        return { ...i, editorStateRaw: s, scheduledFor: p };
                                    }
                                    return { ...e, scheduledFor: p };
                                }) ?? []),
                            ],
                            parentKey: r,
                        }),
                    );
                };
            }
            const Le = "rweb/tweetComposer/UPDATE_EXCLUDED_RECIPIENTS",
                be = (e) => ({ payload: e, type: Le }),
                Ue = "rweb/tweetComposer/UPDATE_ACTIVE_COMPOSER_INDEX",
                Ae = (e = 0) => ({ type: Ue, payload: e }),
                xe = "rweb/tweetComposer/SAVE_COMPOSER_DATA",
                Ze = (e, t) => ({ type: xe, payload: e, meta: { parentKey: t } }),
                Oe = "rweb/tweetComposer/RESET_DRAFT",
                Fe = (e) => (t, o) => {
                    e?.isPreview ||
                        le(o(), e?.parentKey).forEach((e) => {
                            e?.mediaIds?.length && t((0, u.WU)(e.mediaIds));
                        }),
                        t(We()),
                        t({ type: Oe, meta: { parentKey: e?.parentKey } });
                },
                Me = "rweb/tweetComposer/UPDATE_AUDIENCE_CONTROLS_VALUE",
                Ne = (e, t) => ({ type: Me, payload: e, meta: { parentKey: t } }),
                ke = "rweb/tweetComposer/SET_ACTIVE_PARENT_KEY",
                Ve = (e) => ({ type: ke, payload: e }),
                je = "rweb/tweetComposer/UPDATE_SENT_TWEETS_COUNT",
                ze = (e) => ({ type: je, payload: e }),
                Ke = "rweb/tweetComposer/UPDATE_BROADCAST_COMMUNITY_TWEET",
                Qe =
                    (e) =>
                    (t, o, { featureSwitches: i }) => {
                        ee.forEach((o) => {
                            t({ type: Ke, payload: !!e, meta: { parentKey: o } });
                        });
                    },
                We =
                    () =>
                    (e, t, { userPersistence: o }) =>
                        o
                            .get("rweb.savedConversationControl")
                            .then((t) => {
                                var o;
                                t &&
                                    t.conversationControl !== n.k.community_members &&
                                    t.conversationControl !== n.k.super_followers_exclusive &&
                                    t.conversationControl !== n.k.trusted_friends_tweet &&
                                    e(
                                        ((o = t.conversationControl),
                                        (e, t, { featureSwitches: i }) => {
                                            ee.forEach((t) => {
                                                e(Ne({ _type: "conversation_controls", conversationControlsValue: o }, t));
                                            });
                                        }),
                                    );
                            })
                            .then(() => o.get("rweb.broadcastCommunityTweetPreferenceV2"))
                            .then((t) => {
                                t && e(Qe(t.broadcast));
                            });
            l.Z.register(
                {
                    [X]: function (e = de(), t) {
                        if (!t) return e;
                        const o = t.meta?.isAutoSave ?? !1,
                            s = t.meta?.parentKey || e.activeParentKey;
                        switch (t.type) {
                            case _.REQUEST:
                                return { ...e, [s]: { ...e[s], isSending: !0, isAutoSaving: o } };
                            case p.REQUEST:
                            case m.REQUEST:
                                return { ...e, [s]: { ...e[s], isSending: !0 } };
                            case E.REQUEST:
                            case p.FAILURE:
                            case p.SUCCESS:
                            case _.FAILURE:
                            case _.SUCCESS:
                            case E.FAILURE:
                            case E.SUCCESS:
                            case m.SUCCESS:
                                return { ...e, [s]: { ...e[s], isSending: !1, isAutoSaving: !1 } };
                            case m.FAILURE:
                                return { ...e, [s]: { ...e[s], isSending: !1, composerData: [...e[s].composerData.slice(t.payload?.sentTweets.length)], sentTweetsCount: 0 } };
                            case Oe:
                                return { ...e, [s]: re() };
                            case xe:
                                return (0, i.ZP)(e, (e) => {
                                    e[s] || (e[s] = { ...se });
                                    const o = e[s].composerData,
                                        i = t.payload;
                                    (0, r.Z)(o, i) || (e[s].composerData = i);
                                });
                            case ke:
                                return void 0 === t.payload ? { ...e, activeParentKey: ne } : "string" == typeof t.payload ? { ...e, activeParentKey: t.payload, [t.payload]: e[t.payload] || re() } : e;
                            case je:
                                return { ...e, [s]: { ...e[s], sentTweetsCount: t.payload } };
                            case Ue:
                                return { ...e, [s]: { ...e[s], activeComposerIndex: t.payload } };
                            case Le:
                                return { ...e, [s]: { ...e[s], excludedRecipients: t.payload } };
                            case Me:
                                return { ...e, [s]: { ...e[s], audienceControls: t.payload } };
                            case Ke:
                                return { ...e, [s]: { ...e[s], broadcastCommunityTweet: t.payload } };
                            default:
                                return e;
                        }
                    },
                },
                We,
            );
        },
        122868: (e, t, o) => {
            o.d(t, { x: () => i });
            const i = Object.freeze({ homeTimeline: "homeTimeline", modal: "modal" });
        },
        492292: (e, t, o) => {
            o.d(t, { bY: () => l, vW: () => a, vY: () => d, xM: () => c });
            var i = o(733357),
                r = o(718480),
                s = o(968664),
                n = o(497294);
            function a(e, t) {
                return t && t.length ? (0, n._T)(e, t) : 1;
            }
            function d(e, t, o) {
                return [...e.slice(0, t), l({ ...e[t], ...o }), ...e.slice(t + 1)];
            }
            function c(e) {
                if (!e) return null;
                return 60 * (24 * e.days + e.hours) + e.minutes;
            }
            function l(e) {
                let t = !0,
                    o = !1;
                const { text: n } = e,
                    a = "string" != typeof n || (0, i.Z)(n);
                if (a) {
                    const i = (e?.mediaIds?.length || 0) > 0;
                    (t = i), (o = !i && !e.pollActive);
                } else {
                    const o = (0, r.Z)(n.trim(), s.Z.version3),
                        i = !e.pollActive || e.pollValid;
                    t = o.valid && i && !a;
                }
                return { ...e, isEmpty: o, isValid: t };
            }
        },
        985366: (e, t, o) => {
            o.d(t, { En: () => l, Qx: () => c, Uu: () => u, Y1: () => p, rK: () => d });
            o(136728);
            var i = o(189676),
                r = o(750085),
                s = o(218951);
            const n = "FETCH_COMMUNITY_TWEETS_TIMELINE";
            function a({ communityId: e, displayLocation: t = "Community", isMedia: o = !1, rankingMode: i = "Relevance" }) {
                const r = ["communityTweets", i];
                return t && r.push(t), o && r.push("media"), r.push(e), r.join("-");
            }
            const d = (e, t) => (0, s.Z)({ timelineId: a({ communityId: e, displayLocation: t, rankingMode: "Recency" }), network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchCommunityLoggedOutTweets, getEndpointParams: ({ count: o, cursor: i }) => ({ communityId: e, count: o, cursor: "string" == typeof i ? i : void 0, displayLocation: t }) }, context: n, perfKey: "communityTweets", formatResponse: r.Z });
            function c(e, t) {
                const o = t?.displayLocation ?? "Community",
                    d = t?.rankingMode ?? "Relevance";
                return (0, s.Z)({ timelineId: a({ communityId: e, displayLocation: o, rankingMode: d }), network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchCommunityTweets, getEndpointParams: ({ count: t, cursor: i }) => ({ communityId: e, count: t, cursor: "string" == typeof i ? i : void 0, displayLocation: o, rankingMode: d }) }, context: n, perfKey: "communityTweets", formatResponse: r.Z });
            }
            const l = (e, t) => (0, s.Z)({ timelineId: a({ communityId: e, displayLocation: t, isMedia: !0, rankingMode: "Recency" }), network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchCommunityMediaLoggedOutTweets, getEndpointParams: ({ count: o, cursor: i }) => ({ communityId: e, count: o, cursor: "string" == typeof i ? i : void 0, displayLocation: t }) }, context: n, perfKey: "communityTweets", formatResponse: r.Z }),
                u = (e, t) => (0, s.Z)({ timelineId: a({ communityId: e, displayLocation: t, isMedia: !0, rankingMode: "Recency" }), network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchCommunityMediaTweets, getEndpointParams: ({ count: o, cursor: i }) => ({ communityId: e, count: o, cursor: "string" == typeof i ? i : void 0, displayLocation: t }) }, context: n, perfKey: "communityTweets", formatResponse: r.Z }),
                p = (e, t) => (0, s.Z)({ timelineId: a({ communityId: e, displayLocation: t }), network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchCommunityRankedLoggedOutTweets, getEndpointParams: ({ count: o, cursor: i }) => ({ communityId: e, count: o, cursor: "string" == typeof i ? i : void 0, displayLocation: t }) }, context: n, perfKey: "communityTweets", formatResponse: r.Z });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8.31be6afa.js.map

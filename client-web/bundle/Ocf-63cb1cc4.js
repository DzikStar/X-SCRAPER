"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-63cb1cc4"],
    {
        146361: (e, t, n) => {
            n.d(t, { Z: () => s });
            var i = n(118823),
                r = n(990350);
            const s = (0, i.YW)({ task: (e) => e.withEndpoint(r.Z).task });
        },
        996563: (e, t, n) => {
            n.d(t, { Z: () => s });
            var i = n(118823),
                r = n(447281);
            const s = (0, i.YW)({ task: (e) => e.withEndpoint(r.Z).task });
        },
        508765: (e, t, n) => {
            n.d(t, { C6: () => T, GJ: () => x, HR: () => N, Il: () => C, NJ: () => h, OG: () => H, T_: () => B, Xw: () => O, Ys: () => D, _D: () => L, b4: () => M, ck: () => y, g3: () => Z, o8: () => v, u$: () => g, vW: () => R });
            var i = n(226395),
                r = n(499627),
                s = n(917799),
                a = n(56519),
                o = n(497294);
            const E = `${n(291020).Y}/profile`,
                d = `rweb/${E}`,
                l = s.dg(d, "REMOVE_PROFILE_BANNER"),
                p = s.dg(d, "UPDATE_PROFILE"),
                _ = s.dg(d, "UPDATE_PROFILE_AVATAR"),
                c = s.dg(d, "UPDATE_PROFILE_BANNER"),
                I = s.dg(d, "UPLOAD_MEDIA"),
                u = Object.freeze({ REQUEST: "rweb/settings/profile/ENABLE_VERIFIED_PHONE_LABEL_REQUEST", SUCCESS: "rweb/settings/profile/ENABLE_VERIFIED_PHONE_LABEL_SUCCESS", FAILURE: "rweb/settings/profile/ENABLE_VERIFIED_PHONE_LABEL_FAILURE" }),
                A = Object.freeze({ REQUEST: "rweb/settings/profile/DISABLE_VERIFIED_PHONE_LABEL_REQUEST", SUCCESS: "rweb/settings/profile/DISABLE_VERIFIED_PHONE_LABEL_SUCCESS", FAILURE: "rweb/settings/profile/DISABLE_VERIFIED_PHONE_LABEL_FAILURE" }),
                S = Object.freeze({ REQUEST: "rweb/settings/profile/FETCH_VERIFIED_PHONE_LABEL_REQUEST", SUCCESS: "rweb/settings/profile/FETCH_VERIFIED_PHONE_LABEL_SUCCESS", FAILURE: "rweb/settings/profile/FETCH_VERIFIED_PHONE_LABEL_FAILURE" }),
                f = { avatarMediaId: null, bannerMediaId: null, isUploading: !1, profileSettings: null };
            const T = (e) => e[E].avatarMediaId,
                R = (e) => e[E].bannerMediaId,
                g = (e) => e[E].profileSettings,
                m = "rweb/settings/profile/ADD_AVATAR_MEDIA",
                L = (e) => ({ meta: { mediaId: e }, type: m }),
                P = "rweb/settings/profile/REMOVE_AVATAR_MEDIA",
                O = (e) => ({ meta: { mediaId: e }, type: P }),
                w = "rweb/settings/profile/ADD_BANNER_MEDIA",
                h = (e) => ({ meta: { mediaId: e }, type: w }),
                U = "rweb/settings/profile/REMOVE_BANNER_MEDIA",
                N = (e) => ({ meta: { mediaId: e }, type: U }),
                C =
                    () =>
                    (e, t, { api: n }) =>
                        s._O(e, { request: n.withEndpoint(i.Z).fetchUserProfilePhoneState, params: {} })({ actionTypes: S, context: "ACTION_FETCH_VERIFIED_PHONE_LABEL" }, (e) => {
                            if (e) return e;
                        }),
                b = "rweb/settings/profile/PERSIST_PROFILE_SETTINGS",
                Z = (e) => ({ meta: { profileSettings: e }, type: b }),
                F = "rweb/settings/profile/RESET_PERSISTED_PROFILE_SETTINGS",
                D = () => ({ type: F }),
                v =
                    (e) =>
                    (t, n, { api: r }) =>
                        s._O(t, { params: e, request: r.withEndpoint(i.Z).removeProfileBanner })({ actionTypes: l, context: "ACTION_REMOVE_USER_BANNER" }, (e) => {
                            if (e) return [(0, a.dP)({ users: { [e.id_str]: { ...e, profile_banner_url: null } } })];
                        }),
                y =
                    (e) =>
                    (t, n, { api: r }) =>
                        s._O(t, { params: e, request: r.withEndpoint(i.Z).updateProfile })({ actionTypes: p, context: "ACTION_UPDATE_PROFILE_SETTINGS" }, (e) => {
                            if (e && e.entities) return [(0, a.dP)(e.entities)];
                        }),
                V =
                    (e, t, n) =>
                    (i) =>
                    (r, E, { api: d }) => {
                        r({ type: I.REQUEST });
                        const l = o.$i(i);
                        return r(l).then(
                            ([i]) => {
                                r([{ type: I.SUCCESS }, { type: e.REQUEST }]);
                                return s._O(r, { params: { media_id: i.uploadId }, request: n(d) })({ actionTypes: p, context: t }, (e) => {
                                    if (e) return [(0, a.dP)({ users: { [e.id_str]: e } })];
                                });
                            },
                            (e) => (r({ type: I.FAILURE }), Promise.reject(e)),
                        );
                    },
                M = V(_, "ACTION_UPDATE_USER_AVATAR", (e) => e.withEndpoint(i.Z).updateProfileAvatar),
                B = V(c, "ACTION_UPDATE_USER_BANNER", (e) => e.withEndpoint(i.Z).updateProfileBanner),
                H =
                    () =>
                    (e, t, { api: n }) =>
                        s._O(e, { request: n.withEndpoint(i.Z).enableVerifiedPhoneLabel, params: {} })({ actionTypes: u, context: "ACTION_ENABLE_VERIFIED_PHONE_LABEL" }),
                x =
                    () =>
                    (e, t, { api: n }) =>
                        s._O(e, { request: n.withEndpoint(i.Z).disableVerifiedPhoneLabel, params: {} })({ actionTypes: A, context: "ACTION_DISABLE_VERIFIED_PHONE_LABEL" });
            r.Z.register({
                [E]: function (e = f, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case m:
                            return { ...e, avatarMediaId: t.meta.mediaId };
                        case P:
                            return { ...e, avatarMediaId: null };
                        case w:
                            return { ...e, bannerMediaId: t.meta.mediaId };
                        case U:
                            return { ...e, bannerMediaId: null };
                        case S.SUCCESS:
                            return { ...e, hasVerifiedPhone: t?.payload?.user_phone_state?.has_verified_phone || !1, labelDisplayOptIn: t?.payload?.user_phone_state?.label_display_opt_in || !1 };
                        case b:
                            return { ...e, profileSettings: t.meta.profileSettings };
                        case F:
                            return { ...e, profileSettings: null };
                        case I.REQUEST:
                            return { ...e, isUploading: !0 };
                        case I.FAILURE:
                        case I.SUCCESS:
                            return { ...e, isUploading: !1 };
                        default:
                            return e;
                    }
                },
            });
        },
        395042: (e, t, n) => {
            n.d(t, { El: () => l, HR: () => p, Zc: () => _ });
            var i = n(226395),
                r = n(499627),
                s = n(917799);
            const a = "settings/usernames",
                o = "rweb/settings/usernames/CLEAR_USERNAME_AVAILABILITY",
                E = Object.freeze({ REQUEST: "rweb/settings/usernames/FETCH_USERNAMES_REQUEST", SUCCESS: "rweb/settings/usernames/FETCH_USERNAMES_SUCCESS", FAILURE: "rweb/settings/usernames/FETCH_USERNAMES_FAILURE" }),
                d = { isLoaded: !1 };
            const l = (e) => e[a],
                p =
                    (e) =>
                    (t, n, { api: r }) =>
                        (0, s._O)(t, { params: e, request: r.withEndpoint(i.Z).usernameAvailable })({ actionTypes: E, context: "FETCH_SETTINGS_USERNAME_AVAILABLE", meta: { username: e.username } }),
                _ = (e) => ({ type: o, meta: e });
            r.Z.register({
                [a]: function (e = d, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case E.REQUEST:
                            return { ...e, isLoading: !0 };
                        case E.FAILURE:
                            return { ...e, isLoading: !1 };
                        case E.SUCCESS:
                            return { ...e, ...t.payload, username: t.meta.username, isLoading: !1 };
                        case o:
                            return { isLoading: !1, suggestions: t.meta?.persistSuggestions ? e.suggestions : void 0 };
                        default:
                            return e;
                    }
                },
            });
        },
        466380: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var i = n(807469),
                r = n(502909),
                s = n(600823);
            const a = (0, r.ZP)({ namespace: "topics" }),
                o = (0, r.tb)(a, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(i.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                E = {
                    addTopic: function (e) {
                        return p.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (n, i) => (n(a.updateOne(e, { following: t })), Promise.resolve()),
                },
                d = (e, t, n) => {
                    const { entityId: i } = t.meta,
                        r = e.entities[i];
                    return r ? ((e, t, n, i) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [n.id]: { ...n, ...i() } } } : e))(e, t, r, n) : e;
                },
                l = { follow: (0, r.Tx)(a, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(i.ZP).follow, reducer: (e, t) => d(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, r.Tx)(a, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(i.ZP).unfollow, reducer: (e, t) => d(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, r.Tx)(a, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(i.ZP).notInterested, reducer: (e, t) => d(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, r.Tx)(a, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(i.ZP).undoNotInterested, reducer: (e, t) => d(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                p = { ...a, ...o, ...E, ...l, customActionTypes: (0, r.X7)(l) },
                _ = s.Z.register(p);
        },
        383675: (e, t, n) => {
            n.d(t, { R: () => E, Z: () => o });
            var i = n(503768),
                r = n(644829),
                s = n(750085),
                a = n(218951);
            const o = ({ endpointParams: e, endpointUrl: t, isUserRefreshable: n, timelineId: i }) => (0, a.Z)({ timelineId: i, isUserRefreshable: n, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchGeneric, getEndpointParams: ({ count: n, cursor: i }) => ({ ...e, cursor: "string" == typeof i ? i : void 0, count: n, endpointUrl: t }) }, context: "FETCH_TIMELINE", perfKey: "generic" }),
                E = (e, t) => (0, a.Z)({ timelineId: `generic-graphql-timeline-${e}`, isUserRefreshable: t, network: { getEndpoint: (e) => e.withEndpoint(i.ZP).fetchGenericTimelineById, getEndpointParams: ({ count: t, cursor: n }) => ({ cursor: "string" == typeof n ? n : void 0, count: t, timelineId: e }) }, formatResponse: s.Z, context: "FETCH_GENERIC_TIMELINE_GQL", perfKey: "genericGQL" });
        },
        48498: (e, t, n) => {
            n.d(t, { Z: () => s });
            var i = n(644829),
                r = n(218951);
            const s = ({ flow_token: e, subtask_id: t }) => (0, r.Z)({ timelineId: `nux-user-recos-${t}`, network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchNUXUserRecommendations, getEndpointParams: (n) => ({ ...n, subtask_id: t, flow_token: e }) }, context: "FETCH_NUX_USER_RECOS", perfKey: "nux-user-recos" });
        },
        745888: (e, t, n) => {
            n.d(t, { Z: () => p });
            var i = n(360917),
                r = n.n(i),
                s = n(24949),
                a = n(716406),
                o = n(312771),
                E = n(502909),
                d = n(600823);
            const l = (e) => ({ valid: !0 });
            function p(e = {}) {
                const { localValidator: t = l, ...n } = e,
                    i = (0, E.ZP)({ customActions: { clear: { reducer: (e, t) => ({}) } }, ...n });
                (i.clear = () => (e) => e({ type: i.customActionTypes.clear.SUCCESS })),
                    (i.validate = (e, n) => (r) => {
                        const s = t(e, n);
                        return s.valid ? r(i.fetchOneIfNeeded(e, n)) : (r(i.add({ [e]: s })), Promise.resolve());
                    });
                return (
                    (i.selectEntitiesWithFetchStatus = (0, s.P1)(
                        i.selectAll,
                        (e) => i.selectState(e).fetchStatus || r(),
                        (e, t) =>
                            (0, a.Z)(t, (t, n) => {
                                const i = e[n] || {};
                                return { ...i, valid: !!i.valid || t === o.ZP.FAILED, isLoading: t === o.ZP.LOADING };
                            }),
                    )),
                    d.Z.register(i)
                );
            }
        },
        917920: (e, t, n) => {
            n.d(t, { Z: () => p });
            var i = n(251067),
                r = n(111677),
                s = n.n(r),
                a = n(335149),
                o = n(745888);
            const E = new RegExp("^[a-zA-Z0-9_\\-+\\.!\\&]+@(?:[a-zA-Z0-9\\-_]+\\.)+[a-zA-Z]{2,63}$"),
                d = s().hc72e1fc,
                l = s().bc0ad88a,
                p = (0, o.Z)({ namespace: "emailValidity", fetchOneContext: "FETCH_EMAIL_VALIDITY", fetchOneEndpoint: (e) => e.withEndpoint(a.Z).isEmailAvailable, fetchOneParams: ([e], t) => ({ email: e, ...t }), localValidator: (e) => (E.test(e) ? (!i.yV && /\+\d+@/.test(e) ? { errorMessage: l, valid: !1 } : { valid: !0 }) : { errorMessage: d, valid: !1 }) });
        },
        878137: (e, t, n) => {
            n.d(t, { Z: () => l });
            var i = n(111677),
                r = n.n(i),
                s = n(335149),
                a = n(71620),
                o = n(623109),
                E = n(745888);
            const d = r().d5568440,
                l = (0, E.Z)({
                    namespace: "passwordValidity",
                    fetchOneContext: "FETCH_PASSWORD_VALIDITY",
                    fetchOneEndpoint: (e) => e.withEndpoint(s.Z).fetchPasswordStrength,
                    fetchOneParams: ([e], t) => ({ password: e, ...t }),
                    localValidator: (e, t) => {
                        const n = !(!t || !t.username) && e === t.username,
                            i = e.length >= o.l,
                            r = e.length <= o.E;
                        let s = d;
                        return i ? r || (s = a.IM) : (s = a.px), { errorMessage: !n && i && r ? void 0 : s, valid: i && r && !n };
                    },
                });
        },
        580134: (e, t, n) => {
            n.d(t, { Z: () => d });
            var i = n(111677),
                r = n.n(i),
                s = n(335149),
                a = n(745888);
            const o = new RegExp("^\\+?[0-9\\-\\.\\(\\)\\s]{7,1000}$"),
                E = r().cd24fe60,
                d = (0, a.Z)({
                    namespace: "phoneNumberValidity",
                    fetchOneContext: "FETCH_PHONE_VALIDITY",
                    fetchOneEndpoint: (e) => e.withEndpoint(s.Z).isPhoneNumberAvailable,
                    fetchOneParams: ([e], t) => ({ raw_phone_number: e, ...t }),
                    localValidator: (e) => {
                        const t = o.test(e);
                        return { errorMessage: E, valid: t };
                    },
                });
        },
        611423: (e, t, n) => {
            n.d(t, { Z: () => s });
            var i = n(553093),
                r = n(383675);
            const s = ({ timelinePrefix: e = "generic-timeline-", urtUrl: t }) => {
                const { url: n, urtEndpointOptions: s } = t,
                    { cacheId: a, requestParams: o, timeline: E } = s || {};
                return E?.id ? (0, r.R)(E.id) : (0, r.Z)({ timelineId: a || `${e}${(0, i.Sz)(t)}`, endpointUrl: n, endpointParams: o || {} });
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-63cb1cc4.cc19614a.js.map

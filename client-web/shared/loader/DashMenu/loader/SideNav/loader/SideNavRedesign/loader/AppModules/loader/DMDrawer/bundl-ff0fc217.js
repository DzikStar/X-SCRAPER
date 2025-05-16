"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"],
    {
        702166: (e, t, n) => {
            n.d(t, { MH: () => d, dy: () => u });
            var i = n(499627);
            const o = "cardState",
                s = "rweb.cardState",
                r = ["cardState", "carouselIndex"],
                a = {};
            const d = (e, t) => e[o][t],
                c = "rweb/cardState/SET_CARD_STATE",
                m = (e) => ({ payload: e, type: c }),
                u =
                    (e, t) =>
                    (n, i, { userPersistence: a }) => {
                        const c = d(i(), e);
                        n(m({ [e]: { ...c, ...t } }));
                        const u = i()[o];
                        Object.keys(t).some((e) => r.includes(e)) && a.set(s, p(u));
                    },
                p = (e) =>
                    "object" == typeof e
                        ? Object.keys(e).reduce((t, n) => {
                              const i = e[n],
                                  o = Object.keys(i).filter((e) => r.includes(e));
                              return o.length > 0 && (t[n] = o.reduce((e, t) => ((e[t] = i[t]), e), {})), t;
                          }, {})
                        : {},
                T = (e) => ("object" == typeof e ? Object.keys(e).reduce((t, n) => ((t[n] = "string" == typeof e[n] ? { cardState: e[n] } : e[n]), t), {}) : {});
            i.Z.register(
                {
                    [o]: function (e = a, t) {
                        return t && t.type === c ? { ...e, ...t.payload } : e;
                    },
                },
                () =>
                    (e, t, { userPersistence: n }) =>
                        n.get(s, 2592e6).then((t) => {
                            t && e(m(T(t)));
                        }),
            );
        },
        742602: (e, t, n) => {
            n.d(t, { LO: () => y, l3: () => E, mB: () => T });
            n(890103);
            var i = n(715729),
                o = n(499627),
                s = n(390387);
            const r = "communityFlags",
                a = "rweb.communityFlags",
                d = "rweb/communityFlags/SET_FLAG",
                c = "rweb/communityFlags/INIT_FROM_CACHE",
                m = [{ when: { setup_clicked_tweet: !0, setup_clicked_rules: !0, setup_clicked_personalization: !0, setup_clicked_invite: !0 }, then: { setup_show_checklist: !1 } }],
                u = { initialized: !1, flags: {} };
            const p = (e) => ({ type: c, payload: e ?? {} }),
                T =
                    (e, t, n) =>
                    (i, o, { userPersistence: c }) => {
                        const m = o();
                        if (!(0, s.Qb)(m)) return Promise.resolve();
                        return (
                            i({ payload: { communityIds: "string" == typeof e ? [e] : e, name: t, value: n }, type: d }),
                            i((e, t, { userPersistence: n }) => {
                                const i = t()[r].flags;
                                return n.set(a, i).catch(() => Promise.resolve()), Promise.resolve();
                            })
                        );
                    },
                E = (e, t, n, i = !1) => {
                    const o = e[r];
                    return o.flags[t]?.[n] ?? i;
                },
                l = {},
                y = (e, t) => e[r].flags[t.communityId] ?? l;
            o.Z.register(
                {
                    [r]: function (e = u, t) {
                        if (!t) return e;
                        switch (t.type) {
                            case d:
                                return (0, i.ZP)(e, (e) => {
                                    if (t.payload) {
                                        const { communityIds: n, name: i, value: o } = t.payload;
                                        for (const t of n) {
                                            t in e.flags || (e.flags[t] = {}), (e.flags[t][i] = o);
                                            for (const n of m) {
                                                if (Object.keys(n.when).every((i) => Boolean(e.flags[t][i]) === n.when[i])) {
                                                    Object.keys(n.then).forEach((i) => (e.flags[t][i] = n.then[i]));
                                                }
                                            }
                                        }
                                    }
                                });
                            case c:
                                return (0, i.ZP)(e, (e) => {
                                    (e.initialized = !0), t.payload && (e.flags = t.payload);
                                });
                            default:
                                return e;
                        }
                    },
                },
                () =>
                    (e, t, { userPersistence: n }) => {
                        const i = t();
                        return (0, s.Qb)(i)
                            ? n
                                  .get(a)
                                  .then((t) => {
                                      e(p(t));
                                  })
                                  .catch(() => {
                                      e(p());
                                  })
                            : (e(p()), Promise.resolve());
                    },
            );
        },
        491963: (e, t, n) => {
            n.d(t, { O5: () => w, Vz: () => O, W0: () => g, ZP: () => b, a7: () => U, n9: () => C, pX: () => A, rB: () => S, z0: () => R });
            var i = n(715729),
                o = n(189676),
                s = n(463202),
                r = n(870358),
                a = n(716233),
                d = n(917799),
                c = n(56519),
                m = n(502909),
                u = n(600823),
                p = n(497294),
                T = n(742602),
                E = n(172497);
            const l = d.dg("communities", "UPLOAD_MEDIA"),
                y = d.dg("communities", "UPDATE_MEDIA"),
                I = (0, m.ZP)({ namespace: "communities", entityIsComplete: (e, t = ["actions"]) => !!e && t.every((t) => t in e && null !== e[t] && void 0 !== e[t]) }),
                _ = (0, m.tb)(I, { context: "FETCH_COMMUNITY", endpoint: (e) => e.withEndpoint(o.Z).fetchCommunity, params: ([e], t) => ({ communityId: e, ...t }) }),
                M = (e, t, n, i) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [n.id_str]: { ...n, ...i } } } : e),
                f = (e) => (t) => {
                    const n = t?.entities?.communities[e];
                    if (n) return [P.updateOne(e, n)];
                },
                h = {
                    create: (0, m.Tx)(I, "create", {
                        getParams: (e, { description: t, invitesPolicy: n, joinPolicy: i, question: o } = {}) => ({ name: e, description: t, joinPolicy: i, invitesPolicy: n, question: o }),
                        getApiMethod: (e) => e.withEndpoint(o.Z).createCommunity,
                        context: "CREATE_COMMUNITY",
                        mapResponseToActions: (e, t) => (e) => {
                            if ("Community" === e?.type) {
                                const { entities: t } = e.normalized;
                                if (t) {
                                    return [...Object.keys(t?.communities ?? {}).map(E.Al), (0, c.dP)(t)];
                                }
                            }
                        },
                    }),
                    join: (0, m.Tx)(I, "join", {
                        getParams: (e) => ({ communityId: e }),
                        getApiMethod: (e) => e.withEndpoint(o.Z).joinCommunity,
                        getMeta: (e, t, n) => ({ entityId: e }),
                        reducer: (e, t) => {
                            const { entityId: n } = t.meta,
                                i = e.entities[n];
                            if (!i) return e;
                            const o = { member_count: i.member_count + 1, role: r.WW.Member };
                            return M(e, t, i, o);
                        },
                        context: "JOIN_COMMUNITY",
                    }),
                    requestToJoin: (0, m.Tx)(I, "requestToJoin", {
                        getParams: (e, { answer: t } = {}) => ({ communityId: e, answer: t }),
                        getApiMethod: (e) => e.withEndpoint(o.Z).requestToJoinCommunity,
                        getMeta: (e, t, n, i) => ({ entityId: t, answer: e }),
                        mapResponseToActions: (e) => (t) => {
                            if ("CommunityJoinRequest" === t?.type && t.normalized?.entities) return f(e)(t.normalized);
                        },
                        context: "REQUEST_TO_JOIN_COMMUNITY",
                    }),
                    leave: (0, m.Tx)(I, "leave", {
                        getParams: (e) => ({ communityId: e }),
                        getApiMethod: (e) => e.withEndpoint(o.Z).leaveCommunity,
                        getMeta: (e, t, n) => ({ entityId: e }),
                        reducer: (e, t) => {
                            const { entityId: n } = t.meta,
                                i = e.entities[n];
                            if (!i) return e;
                            const o = { member_count: i.member_count - 1, role: r.WW.NonMember };
                            return M(e, t, i, o);
                        },
                        context: "LEAVE_COMMUNITY",
                    }),
                    updateRole: (0, m.Tx)(I, "updateRole", { getParams: (e, { role: t, userId: n } = {}) => ({ communityId: e, userId: n, role: t }), getApiMethod: (e) => e.withEndpoint(o.Z).updateCommunityRole, getMeta: (e, t) => ({ entityId: e }), context: "UPDATE_COMMUNITY_ROLE", mapResponseToActions: f }),
                    invite: (0, m.Tx)(I, "invite", { getParams: (e, { userId: t } = {}) => ({ communityId: e, userId: t || "" }), getApiMethod: (e) => e.withEndpoint(o.Z).inviteToCommunity, getMeta: (e, { userId: t } = {}, n) => ({ communityId: e }), context: "INVITE_TO_COMMUNITY" }),
                    editName: (0, m.Tx)(I, "editName", { getParams: (e, { name: t } = {}) => ({ communityId: e, name: t }), getApiMethod: (e) => e.withEndpoint(s.Z).editCommunityName, getMeta: (e, { name: t } = {}, n) => ({ communityId: e, name: t }), context: "EDIT_COMMUNITY_NAME", mapResponseToActions: f }),
                    editPurpose: (0, m.Tx)(I, "editPurpose", { getParams: (e, { purpose: t } = {}) => ({ communityId: e, purpose: t }), getApiMethod: (e) => e.withEndpoint(s.Z).editCommunityPurpose, getMeta: (e, { purpose: t } = {}, n) => ({ communityId: e, purpose: t }), context: "EDIT_COMMUNITY_PURPOSE", mapResponseToActions: f }),
                    editQuestion: (0, m.Tx)(I, "editQuestion", { getParams: (e, { question: t } = {}) => ({ communityId: e, question: t }), getApiMethod: (e) => e.withEndpoint(s.Z).editCommunityQuestion, getMeta: (e, { question: t } = {}, n) => ({ communityId: e, question: t }), context: "EDIT_COMMUNITY_QUESTION", mapResponseToActions: f }),
                    createRule: (0, m.Tx)(I, "createRule", { getParams: (e, { description: t, name: n } = {}) => ({ communityId: e, description: t, name: n }), getApiMethod: (e) => e.withEndpoint(s.Z).createCommunityRule, getMeta: (e, { description: t, name: n } = {}, i) => ({ communityId: e, description: t, name: n }), context: "CREATE_COMMUNITY_RULE", mapResponseToActions: f }),
                    editRule: (0, m.Tx)(I, "editRule", { getParams: (e, { description: t, name: n, ruleId: i } = {}) => ({ communityId: e, description: t, name: n, ruleId: i }), getApiMethod: (e) => e.withEndpoint(s.Z).editCommunityRule, getMeta: (e, { description: t, name: n, ruleId: i } = {}, o) => ({ communityId: e, name: n, description: t, ruleId: i }), context: "EDIT_COMMUNITY_RULE", mapResponseToActions: f }),
                    removeRule: (0, m.Tx)(I, "removeRule", { getParams: (e, { ruleId: t } = {}) => ({ communityId: e, ruleId: t }), getApiMethod: (e) => e.withEndpoint(s.Z).removeCommunityRule, getMeta: (e, { ruleId: t } = {}, n) => ({ communityId: e, ruleId: t }), context: "REMOVE_COMMUNITY_RULE", mapResponseToActions: f }),
                    reorderRules: (0, m.Tx)(I, "reorderRule", { getParams: (e, { ruleIds: t } = {}) => ({ communityId: e, ruleIds: t }), getApiMethod: (e) => e.withEndpoint(s.Z).reorderCommunityRules, getMeta: (e, { ruleIds: t } = {}, n) => ({ communityId: e, ruleIds: t }), context: "REORDER_COMMUNITY_RULES", mapResponseToActions: f }),
                    editBannerMedia: (0, m.Tx)(I, "editBannerMedia", { getParams: (e, { mediaId: t } = {}) => ({ communityId: e, mediaId: t }), getApiMethod: (e) => e.withEndpoint(s.Z).editCommunityBannerMedia, getMeta: (e, { mediaId: t } = {}, n) => ({ communityId: e, mediaId: t }), context: "EDIT_COMMUNITY_MEDIA" }),
                    removeBannerMedia: (0, m.Tx)(I, "removeBannerMedia", {
                        getParams: (e) => ({ communityId: e }),
                        getApiMethod: (e) => e.withEndpoint(s.Z).removeCommunityBannerMedia,
                        getMeta: (e, t, n) => ({ entityId: e }),
                        reducer: (e, t) => {
                            const { entityId: n } = t.meta,
                                i = e.entities[n];
                            if (!i || !i?.defaultMedia) return e;
                            return M(e, t, i, { media: i?.defaultMedia, hasCustomMedia: !1 });
                        },
                        context: "REMOVE_COMMUNITY_MEDIA",
                        mapResponseToActions: f,
                    }),
                    fetchOneWithoutRelay: (0, m.Tx)(I, "fetchOneWithoutRelay", {
                        context: "FETCH_COMMUNITY_WITHOUT_RELAY",
                        getParams: (e) => ({ communityId: e }),
                        getMeta: (e) => ({ communityId: e }),
                        getApiMethod: (e) => e.withEndpoint(o.Z).fetchCommunityWithoutRelay,
                        mapResponseToActions: (e) => (e) => {
                            if (e?.entities) return [P.add(e.entities.communities)];
                        },
                    }),
                },
                g = (e) => {
                    const t = (0, E.eF)(e),
                        n = P.selectMany(e, t);
                    return n && n.length > 0 ? n.filter(Boolean).reduce((e, t) => ({ ...e, [t.id_str]: t }), {}) : {};
                },
                R = (e, t) => {
                    const n = t?.community_id_str;
                    return n ? P.select(e, n) : void 0;
                },
                C = (e, t) => {
                    const n = R(e, t);
                    return void 0 !== n && t.user.id_str === n.admin;
                },
                w =
                    (e, t) =>
                    (n, i, { api: o }) => {
                        const { cropData: s, mediaId: r } = t,
                            d = s ? (0, a.U$)(s) : void 0;
                        n({ type: l.REQUEST });
                        const c = p.$i(r, { extraInitParams: d });
                        return n(c).then(
                            ([t]) => {
                                n([{ type: l.SUCCESS }, { type: y.REQUEST }]);
                                const i = t.uploadId || "";
                                return n(P.editBannerMedia(e, { mediaId: i })).then(
                                    (t) => {
                                        const i = t?.entities?.communities[e];
                                        i && n([{ type: y.SUCCESS }, P.updateOne(e, i)]);
                                    },
                                    (e) => (n({ type: y.FAILURE }), Promise.reject(e)),
                                );
                            },
                            (e) => (n({ type: l.FAILURE }), Promise.reject(e)),
                        );
                    },
                A =
                    (e, t) =>
                    (n, i, { api: o }) =>
                        n(P.updateOne(e, { localMediaId: t })),
                S =
                    (e) =>
                    (t, n, { api: i }) =>
                        t(P.updateOne(e, { localMediaId: void 0 })),
                O = (e, t) => (n) =>
                    n(h.create(e, t)).then((e) => {
                        if ("Community" !== e?.type) return e;
                        {
                            const { entities: t } = e.normalized;
                            if (t) {
                                const i = Object.keys(t?.communities ?? {});
                                return n((0, T.mB)(i, "setup_show_checklist", !0)).then(() => e);
                            }
                        }
                    }),
                U = (e, t) => (n, o) => {
                    const s = P.select(o(), e);
                    if (!s) return;
                    const r = (0, i.ZP)(s?.actions, (e) => {
                        e.pin_action_result = { __typename: t };
                    });
                    return n(P.updateOne(e, { actions: r }));
                },
                P = { ...I, ..._, ...h, customActionTypes: (0, m.X7)(h) },
                b = u.Z.register(P);
        },
        669002: (e, t, n) => {
            n.d(t, { CA: () => c, Fq: () => E, I4: () => u, Le: () => y, UD: () => l, bR: () => I });
            var i = n(180274),
                o = n(499627),
                s = n(917799),
                r = n(312771);
            const a = "draftTweets",
                d = { fetchStatus: r.ZP.NONE, draftTweets: [] },
                c = "FETCH_DRAFT_TWEETS",
                m = Object.freeze({ REQUEST: "rweb/draftTweets/FETCH_DRAFT_TWEETS_REQUEST", SUCCESS: "rweb/draftTweets/FETCH_DRAFT_TWEETS_SUCCESS", FAILURE: "rweb/draftTweets/FETCH_DRAFT_TWEETS_FAILURE" }),
                u = "DELETE_DRAFT_TWEET",
                p = Object.freeze({ REQUEST: "rweb/draftTweets/DELETE_DRAFT_TWEET_REQUEST", SUCCESS: "rweb/draftTweets/DELETE_DRAFT_TWEET_SUCCESS", FAILURE: "rweb/draftTweets/DELETE_DRAFT_TWEET_FAILURE" });
            function T(e = d, t) {
                if (!t) return e;
                switch (t.type) {
                    case m.SUCCESS:
                        return { ...e, fetchStatus: r.ZP.LOADED, draftTweets: t.payload || e.draftTweets };
                    case m.FAILURE:
                        return { ...e, fetchStatus: r.ZP.FAILED };
                    case m.REQUEST:
                        return { ...e, fetchStatus: r.ZP.LOADING };
                    case p.SUCCESS: {
                        const { meta: n } = t,
                            i = n?.draftTweetId && e.draftTweets.filter((e) => e.rest_id !== n.draftTweetId);
                        return i ? { ...e, draftTweets: i } : e;
                    }
                    default:
                        return e;
                }
            }
            o.Z.register({ [a]: T });
            const E = (e) => e[a].draftTweets,
                l = (e) => e[a].fetchStatus,
                y =
                    () =>
                    (e, t, { api: n }) =>
                        (0, s._O)(e, { request: n.withEndpoint(i.Z).fetchDraftTweets, params: {} })({ actionTypes: m, context: c }),
                I =
                    (e) =>
                    (t, n, { api: o }) =>
                        (0, s._O)(t, { request: o.withEndpoint(i.Z).deleteDraftTweet, params: { draftTweetId: e } })({ actionTypes: p, context: u, meta: { draftTweetId: e } });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217.bf235a0a.js.map

"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.HoverCard-63cb1cc4"],
    {
        806528: (e, t, n) => {
            n.d(t, { Bz: () => c, ZW: () => E, ey: () => l, fw: () => a, iG: () => m, wM: () => d });
            var s = n(499627),
                r = n(341276);
            const i = "geoLocation",
                o = Object.freeze({ permissionStatus: void 0, position: void 0 });
            const a = (e) => e[i],
                d = (e) => e[i].permissionStatus,
                c = (e) => e[i].position,
                u = "rweb/geoLocation/SET_PERMISSION_STATUS",
                l = (e) => ({ payload: e, type: u }),
                p = "rweb/geoLocation/SET_POSITION",
                m = () => (e, t) =>
                    _()
                        .then((t) => e({ payload: t, type: p }))
                        .catch((t) => (e(l(r.S.denied)), Promise.reject(t))),
                E = () => (e, t) => (c(t()) ? Promise.resolve() : e(m())),
                _ = () =>
                    new Promise((e, t) =>
                        navigator.geolocation.getCurrentPosition((t) => {
                            const n = { timestamp: t.timestamp, coords: { latitude: t.coords.latitude, longitude: t.coords.longitude, altitude: t.coords.altitude, accuracy: t.coords.accuracy, altitudeAccuracy: t.coords.altitudeAccuracy, heading: t.coords.heading, speed: t.coords.speed } };
                            return e(n);
                        }, t),
                    );
            s.Z.register({
                [i]: function (e = o, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case u:
                            return { ...e, permissionStatus: t.payload };
                        case p:
                            return { ...e, position: t.payload };
                        default:
                            return e;
                    }
                },
            });
        },
        341276: (e, t, n) => {
            n.d(t, { M: () => r, S: () => s });
            const s = Object.freeze({ granted: "granted", denied: "denied", prompt: "prompt" }),
                r = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 });
        },
        947650: (e, t, n) => {
            n.d(t, { Hq: () => T, c1: () => _, lP: () => I, og: () => h });
            var s = n(745123),
                r = n(961104),
                i = n(499627),
                o = n(917799),
                a = n(56519),
                d = n(919022);
            const c = "knownFollowers",
                u = `rweb/${c}`,
                l = [],
                p = (0, o.dg)(u, "FETCH_KNOWN_FOLLOWERS"),
                m = {};
            i.Z.register({
                [c]: function (e = m, t) {
                    if (!t) return e;
                    if (t.type === p.SUCCESS) {
                        const n = t.payload || {},
                            { total_count: s, users: r } = n && n.result,
                            { user_id: i } = t.meta || {};
                        return i ? { ...e, [i]: { knownFollowersCount: s, knownFollowerIds: r } } : e;
                    }
                    return e;
                },
            });
            const E = (e, t) => e[c][t],
                _ = (e, t) => {
                    if (t) {
                        const n = g(e, t);
                        return (0, r.b)(d.ZP.selectMany(e, n), (e) => !!e);
                    }
                    return l;
                },
                h = (e, t) => _(e, t).filter(({ name: e, profile_image_url_https: t }) => !!t?.length && !!e?.length),
                I = (e, t) => {
                    let n;
                    if (t) {
                        const s = E(e, t);
                        n = s?.knownFollowersCount;
                    }
                    return n;
                },
                g = (e, t) => {
                    const n = E(e, t);
                    return n?.knownFollowerIds || l;
                },
                T =
                    (e) =>
                    (t, n, { api: r }) =>
                        void 0 !== I(n(), e)
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, n, { api: r }) =>
                                          (0, o._O)(t, { request: r.withEndpoint(s.Z).fetchFollowersYouFollow, params: { user_id: e, count: 3, with_total_count: !0 } })({ actionTypes: p, context: "FETCH_KNOWN_FOLLOWERS", meta: { user_id: e } }, (e) => {
                                              if (e) {
                                                  const { entities: t } = e;
                                                  return t ? [(0, a.dP)(t)] : void 0;
                                              }
                                          })
                                  )(e),
                              );
        },
        286e3: (e, t, n) => {
            n.d(t, { Rc: () => p, nx: () => c });
            var s = n(499627),
                r = n(576469),
                i = n(390387);
            const o = "rweb.channelsTimelineBehavior",
                a = "channelsTimelineBehavior",
                d = Object.freeze({});
            const c = (e) => e[a],
                u = "rweb/channelsTimelineBehavior/UPDATE_LIST_RANKINGS",
                l = (e) => ({ payload: e, type: u }),
                p =
                    ({ listId: e, useRanked: t }) =>
                    (n, s, { userPersistence: i }) => {
                        const a = s(),
                            d = { ...c(a), [e]: { useRanked: t } };
                        n(l(d));
                        const u = r.Z.select(a, e);
                        return u && u.following ? i.get(o).then((n) => i.set(o, { ...n, [e]: { useRanked: t } })) : Promise.resolve();
                    };
            s.Z.register(
                {
                    [a]: function (e = d, t) {
                        return t && t.type === u ? { ...t.payload } : e;
                    },
                },
                () =>
                    (e, t, { userPersistence: n }) =>
                        (0, i.Qb)(t())
                            ? n.get(o).then((t) => {
                                  t && e(l(t));
                              })
                            : Promise.resolve(),
            );
        },
        576469: (e, t, n) => {
            n.d(t, { Z: () => $ });
            n(571372), n(136728);
            var s = n(24949),
                r = n(161821),
                i = n(450681),
                o = n(483557),
                a = n(842799),
                d = n(716233),
                c = n(962741),
                u = n(466015),
                l = n(538327),
                p = n(281743),
                m = n(917799),
                E = n(56519),
                _ = n(502909),
                h = n(600823),
                I = n(558369),
                g = n(497294),
                T = n(709318),
                f = n(872788),
                P = n(390387),
                S = n(652881),
                y = n(780936),
                w = n(823885),
                L = n(164692),
                b = n(78259),
                Z = n(919022),
                M = n(206795);
            const O = m.dg("lists", "UPLOAD_MEDIA"),
                A = m.dg("lists", "UPDATE_MEDIA"),
                v = (0, _.ZP)({ namespace: "lists" }),
                R = (0, _.tb)(v, {
                    context: "FETCH_LIST",
                    endpoint: (e) => e.withEndpoint(o.ZP).fetchList,
                    params: ([e], t) => {
                        if (e) return { list_id: e };
                        if (t.slug && t.screenName) return { slug: t.slug, owner_screen_name: t.screenName };
                        throw new Error("listId or screenName and slug required to fetch list");
                    },
                }),
                x = (e) => u.WE({ displayType: l.P.List, id: e, sortIndex: Date.now().toString() }),
                N = (e) => u.$0({ id: e, sortIndex: Date.now().toString() }),
                F = (e, t) => (t && t.entities ? [(0, E.dP)(t.entities)] : []),
                C = (0, s.P1)(
                    v.select,
                    (e) => e,
                    (e, t) => {
                        if (e) {
                            const { full_name: n, user: s } = e;
                            if (n) return n.split("/")[0].substr(1);
                            if (s) {
                                const e = Z.ZP.select(t, s);
                                return e?.screen_name;
                            }
                        }
                    },
                ),
                U = {
                    selectByKey: (0, s.P1)(
                        v.selectAll,
                        (e, t) => t,
                        (e) => e,
                        (e, t, n) =>
                            e
                                ? (0, r.Z)(e).find((e) => {
                                      if (e) {
                                          const s = k.selectListAuthorScreenName(n, e.id_str);
                                          return (s && (0, a.Z)(s, e.slug)) === t;
                                      }
                                  })
                                : void 0,
                    ),
                    selectListKeyById: (0, s.P1)(v.select, C, (e, t) => e && t && (0, a.Z)(t, e.slug)),
                    selectLocalMediaId: (0, s.P1)(v.select, (e) => e?.mediaId),
                },
                B = {
                    addUserToList: (0, _.Tx)(v, "addUserToList", {
                        getParams: (e, { userId: t } = {}) => ({ list_id: e, user_id: t }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).addToList,
                        context: "ADD_USER_TO_LIST",
                        mapResponseToActions:
                            (e, { shouldInjectURTEntry: t = !0, userId: n }, s) =>
                            (r) => {
                                const i = s(),
                                    o = k.select(i, e);
                                if (!r?.entities || !o) return [];
                                const a = x(u.Re(e)),
                                    d = (0, y.Z)(e),
                                    c = (0, w.Z)(n),
                                    l = [v.updateOne(e, { member_count: o.member_count + 1 }), M.Hi({ addTo: n, itemsToAdd: [e] }), c.injectEntry(a)];
                                if (t) {
                                    const e = N(n);
                                    l.push(d.injectEntry(e));
                                }
                                return l;
                            },
                    }),
                    deleteList: (0, _.Tx)(v, "deleteList", {
                        getParams: (e) => ({ list_id: e }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).deleteList,
                        context: "DELETE_LIST",
                        mapResponseToActions: (e, t, n) => (t) => {
                            const s = n(),
                                r = (0, I.mz)(s).isTrue("responsive_web_timeline_relay_lists_management_enabled"),
                                i = v.select(s, e),
                                o = (0, P._h)(s);
                            if (!i || !o) return [];
                            const a = u.Re(e),
                                d = (0, L.Z)(o, o);
                            return [(0, T.Vu)({ id: i.id_str, name: i.name, type: f.FO.LIST }), d.removeEntry(a), ...(0, S.C2)(r, n, S.Pq.ownedSubscribedList, e)];
                        },
                    }),
                    deleteListMedia: (0, _.Tx)(v, "deleteListMedia", { getParams: (e) => ({ listId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).deleteBannerImage, context: "DELETE_LIST_MEDIA", mapResponseToActions: (e, t, n) => (t) => (t && t.entities ? [v.updateOne(e, { customBanner: void 0 })] : []) }),
                    editList: (0, _.Tx)(v, "editList", { getParams: (e, { description: t, mode: n, name: s } = {}) => ({ description: t, list_id: e, mode: n, name: s }), getApiMethod: (e) => e.withEndpoint(o.ZP).editList, context: "EDIT_LIST", mapResponseToActions: (e, t, n) => (e) => F(0, e) }),
                    removeUserFromList: (0, _.Tx)(v, "removeUserFromList", {
                        getParams: (e, { userId: t } = {}) => ({ list_id: e, user_id: t }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).removeFromList,
                        context: "REMOVE_USER_FROM_LIST",
                        mapResponseToActions:
                            (e, { shouldRemoveURTEntry: t = !0, userId: n }, s) =>
                            (s) => {
                                const r = s?.entities?.lists[e];
                                if (r) {
                                    const s = (0, y.Z)(e),
                                        i = (0, w.Z)(n),
                                        o = [M.pO({ removeFrom: n, itemToRemove: e }), i.removeEntry(u.Re(e))];
                                    return o.push(v.updateOne(e, r)), t && o.push(s.removeEntry(u._Y(n))), o;
                                }
                                return [];
                            },
                    }),
                    subscribe: (0, _.Tx)(v, "subscribe", {
                        getParams: (e) => ({ list_id: e }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).createSubscribers,
                        canPerformAction: (e = {}) => e && !e.following,
                        context: "SUBSCRIBE_TO_LIST",
                        mapResponseToActions: (e, t, n) => (t) => {
                            const s = n(),
                                r = (0, I.mz)(s).isTrue("responsive_web_timeline_relay_lists_management_enabled"),
                                i = [],
                                o = t?.entities?.lists?.[e],
                                a = (0, P._h)(s);
                            if (o && a) {
                                const t = N(a),
                                    s = (0, b.Z)(e);
                                i.push(v.updateOne(e, o)), i.push(s.injectEntry(t)), i.push(...(0, S.s8)(r, n, S.Pq.ownedSubscribedList, e)), o.pinning && i.push((0, T.Co)({ id: o.id_str, name: o.name, type: f.FO.LIST }));
                            }
                            return i;
                        },
                    }),
                    toggleMute: (0, _.Tx)(v, "toggleMute", {
                        getParams: (e, { mute: t } = {}) => ({ listId: e, mute: t }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).toggleMute,
                        canPerformAction: (e = {}) => !!e,
                        context: "LIST_TOGGLE_MUTE",
                        mapResponseToActions: (e, t, n) => (s) => {
                            const r = n(),
                                i = v.select(r, e),
                                o = (0, P._h)(r);
                            return i && o && i.muting !== t.mute && s ? [v.updateOne(e, { muting: t.mute })] : [];
                        },
                    }),
                    unsubscribe: (0, _.Tx)(v, "unsubscribe", {
                        getParams: (e) => ({ list_id: e }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).destroySubscribers,
                        canPerformAction: (e = {}) => e && !!e.following,
                        context: "UNSUBSCRIBE_FROM_LIST",
                        mapResponseToActions: (e, t, n) => (t) => {
                            const s = n(),
                                r = (0, I.mz)(s).isTrue("responsive_web_timeline_relay_lists_management_enabled"),
                                i = [],
                                o = t?.entities?.lists?.[e],
                                a = (0, P._h)(s);
                            if (o && a) {
                                const t = (0, b.Z)(e);
                                i.push(...(0, S.C2)(r, n, S.Pq.ownedSubscribedList, e)), i.push(v.updateOne(e, o)), i.push(t.removeEntry(u._Y(a))), i.push((0, T.Vu)({ id: o.id_str, name: o.name, type: f.FO.LIST }));
                            }
                            return i;
                        },
                    }),
                },
                D = {
                    addLocalMediaId:
                        ({ listId: e, mediaId: t }) =>
                        (n, s, { api: r }) => {
                            n((0, E.dP)({ lists: { [e]: { mediaId: t } } }));
                        },
                    createList:
                        (e) =>
                        (t, n, { api: s, featureSwitches: r }) =>
                            m
                                ._O(t, { request: s.withEndpoint(o.ZP).createList, params: e })({ actionTypes: v.actionTypes.CREATE, context: "CREATE_LIST" }, (e) => {
                                    const t = (0, P._h)(n());
                                    if (e && t) {
                                        const { result: s } = e,
                                            o = x(s),
                                            a = (0, L.Z)(t, t),
                                            d = r.isTrue("responsive_web_timeline_relay_lists_management_enabled");
                                        return (0, i.Z)([e.entities && (0, E.dP)(e.entities), a.injectEntry(o), ...(0, S.s8)(d, n, S.Pq.ownedSubscribedList, s)]);
                                    }
                                    return [];
                                })
                                .then((e) => e?.entities?.lists && e.entities.lists[e.result]),
                    editListMedia:
                        ({ iconCrop: e, listId: t, mediaId: n }) =>
                        (s, r, { api: i }) => {
                            const a = e ? (0, d.U$)(e) : void 0;
                            s({ type: O.REQUEST });
                            const c = g.$i(n, { extraInitParams: a });
                            return s(c).then(
                                ([e]) => {
                                    const n = e.uploadId;
                                    if (n) {
                                        s([{ type: O.SUCCESS }, { type: A.REQUEST }]);
                                        const e = (e) => F(0, e);
                                        return m._O(s, { request: i.withEndpoint(o.ZP).editBannerImage, params: { listId: t, mediaId: n } })({ actionTypes: v.actionTypes.OPTIMISTIC_UPDATE, context: "EDIT_LIST_MEDIA" }, e);
                                    }
                                    return s({ type: O.FAILURE }), Promise.reject(new Error("List media upload failed - no uploadId"));
                                },
                                (e) => (s({ type: O.FAILURE }), Promise.reject(e)),
                            );
                        },
                    removeLocalMediaId: (e) => (t, n) => {
                        t(v.updateOne(e, { mediaId: void 0 }));
                    },
                    toggleIsMember:
                        ({ listId: e, targetUserId: t }) =>
                        (n, s, { api: r }) => {
                            const i = s(),
                                o = (0, P._h)(i);
                            if (!o) return;
                            const a = (0, L.Z)(o, t),
                                d = a.selectEntries(i),
                                l = u.Re(e),
                                p = d.find((e) => e.entryId === l);
                            if (p && p.type === c.ZP.TwitterList) {
                                const e = p.content.isMember;
                                return n(a.updateEntry(l, { isMember: !e }));
                            }
                        },
                },
                k = { ...v, ...R, selectListAuthorScreenName: C, ...U, ...B, ...D };
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
                    const n = e.user;
                    if (!n) return null;
                    const s = Z.ZP.select(t(), n);
                    return s ? Z.Sy.reference(s) : null;
                },
                accessibility: (e) => ("private" === e.mode ? "Private" : "Public"),
                custom_banner_media_results: (e) => (e.customBanner ? G.reference(e.customBanner) : null),
                default_banner_media_results: (e) => G.reference(e.defaultBanner),
            });
            const G = p.sv.addForObjectType("ApiMediaResults", { result: (e) => j.reference(e) }),
                j = p.sv.addForObjectType("ApiMedia", { media_info: (e) => H.reference(e) }),
                H = p.sv.addForObjectType("ApiImage", { original_img_url: (e) => e.image.url, original_img_width: (e) => e.image.width, original_img_height: (e) => e.image.height, salient_rect: (e) => (e.crop[0] ? Q.reference(e.crop[0]) : null) }),
                Q = p.sv.addForObjectType("ApiMediaRect", { height: (e) => e.h, left: (e) => e.x, top: (e) => e.y, width: (e) => e.w }),
                $ = h.Z.register(k);
        },
        206795: (e, t, n) => {
            n.d(t, { Hi: () => T, NU: () => P, pO: () => f, g$: () => g });
            var s = n(166852),
                r = n(483557),
                i = n(499627),
                o = n(917799),
                a = n(312771),
                d = n(56519),
                c = n(877848);
            const u = Object.freeze({ REQUEST: "rweb/lists/FETCH_LISTMEMBERSHIPS_REQUEST", SUCCESS: "rweb/lists/FETCH_LISTMEMBERSHIPS_SUCCESS", FAILURE: "rweb/lists/FETCH_LISTMEMBERSHIPS_FAILURE" }),
                l = "rweb/lists/LISTMEMBERSHIPS_ADD_UPDATE",
                p = "rweb/lists/LISTMEMBERSHIPS_REMOVE_UPDATE",
                m = "listMemberships",
                E = [],
                _ = Object.freeze({}),
                h = Object.freeze({ data: { lists: [] }, error: null, fetchStatus: { [c.Yj.BOTTOM]: a.ZP.NONE, [c.Yj.TOP]: a.ZP.NONE } });
            const I = (e, t) => e[m][t],
                g = (e, t) => {
                    const n = I(e, t);
                    return n?.data?.lists || E;
                },
                T = ({ addTo: e, itemsToAdd: t }) => ({ payload: { key: e, items: t }, type: l }),
                f = ({ itemToRemove: e, removeFrom: t }) => ({ payload: { key: t, item: e }, type: p }),
                P = (e, t) => (n, s) => {
                    const i = s(),
                        l = I(i, e),
                        p = ((e, t) => {
                            const n = I(e, t),
                                s = g(e, t);
                            return n ? (0, a.ke)(n.fetchStatus, !!s.length) : a.ZP.NONE;
                        })(i, e);
                    return !l || (p !== a.ZP.LOADING && p !== a.ZP.LOADED)
                        ? n(
                              (
                                  (e, t) =>
                                  (n, s, { api: i }) =>
                                      (0, o._O)(n, { params: t, request: i.withEndpoint(r.ZP).fetchMemberships })({ actionTypes: u, context: "LIST_MEMBERSHIPS", meta: { direction: t.cursor ? c.Yj.BOTTOM : c.Yj.TOP, key: e } }, (e) => {
                                          if (e) {
                                              const { entities: t } = e;
                                              return t ? [(0, d.dP)(t)] : void 0;
                                          }
                                      })
                              )(e, t),
                          )
                        : Promise.resolve();
                };
            i.Z.register({
                [m]: function (e = _, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case u.REQUEST: {
                            const { direction: n, key: s } = t.meta,
                                r = e[s] || h,
                                i = { ...r.fetchStatus };
                            return (i[n] = a.ZP.LOADING), { ...e, [s]: { ...r, fetchStatus: i } };
                        }
                        case u.SUCCESS: {
                            const { direction: n, key: r } = t.meta,
                                i = e[r] || h,
                                o = { ...i.fetchStatus };
                            o[n] = a.ZP.LOADED;
                            const d = t.payload?.result?.lists || [],
                                c = (0, s.Z)([...i.data.lists, ...d]);
                            return { ...e, [r]: { ...i, data: { ...{ ...t.payload?.result, ...i.data }, lists: c }, error: null, fetchStatus: o } };
                        }
                        case u.FAILURE: {
                            const { direction: n, key: s } = t.meta,
                                r = { ...(e[s] || h).fetchStatus };
                            return (r[n] = a.ZP.FAILED), { ...e, [s]: { ...e[s], error: t.payload, fetchStatus: r } };
                        }
                        case l: {
                            const { items: n, key: r } = t.payload || {},
                                i = e[r] || h,
                                o = (i.data && i.data.lists) || [],
                                a = (0, s.Z)([...n, ...o]);
                            return { ...e, [r]: { ...i, data: { ...i.data, lists: a } } };
                        }
                        case p: {
                            const { item: n, key: s } = t.payload || {},
                                r = e[s] || h,
                                i = (r.data && r.data.lists) || [];
                            return { ...e, [s]: { ...r, data: { ...r.data, lists: i.filter((e) => n !== e) } } };
                        }
                        default:
                            return e;
                    }
                },
            });
        },
        466380: (e, t, n) => {
            n.d(t, { Z: () => p });
            var s = n(807469),
                r = n(502909),
                i = n(600823);
            const o = (0, r.ZP)({ namespace: "topics" }),
                a = (0, r.tb)(o, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(s.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                d = {
                    addTopic: function (e) {
                        return l.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (n, s) => (n(o.updateOne(e, { following: t })), Promise.resolve()),
                },
                c = (e, t, n) => {
                    const { entityId: s } = t.meta,
                        r = e.entities[s];
                    return r ? ((e, t, n, s) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [n.id]: { ...n, ...s() } } } : e))(e, t, r, n) : e;
                },
                u = { follow: (0, r.Tx)(o, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(s.ZP).follow, reducer: (e, t) => c(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, r.Tx)(o, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(s.ZP).unfollow, reducer: (e, t) => c(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, r.Tx)(o, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(s.ZP).notInterested, reducer: (e, t) => c(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, r.Tx)(o, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(s.ZP).undoNotInterested, reducer: (e, t) => c(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                l = { ...o, ...a, ...d, ...u, customActionTypes: (0, r.X7)(u) },
                p = i.Z.register(l);
        },
        652881: (e, t, n) => {
            n.d(t, { C2: () => g, Pq: () => u, ZP: () => h, s8: () => I });
            n(136728);
            var s = n(66351),
                r = (n(585488), n(483557)),
                i = n(703710),
                o = n(750085),
                a = n(466015),
                d = n(538327),
                c = n(218951);
            const u = Object.freeze({ pinnedLists: "pinnedLists", ownedSubscribedList: "ownedSubscribedList" }),
                l = (e, t) => `${e}-list-${t}`,
                p = (e, t, n = d.P.List, s = Date.now().toString()) => a.WE({ id: e, customEntryId: t, displayType: n, sortIndex: s });
            function m(e) {
                return e.startsWith("pinned-list-module") || e.startsWith("pinnedListModule");
            }
            function E(e) {
                return e.startsWith("owned-subscribed-list-module") || e.startsWith("ownedSubscribedListModule");
            }
            const _ = (e) => (e ? (0, c.Z)({ context: "FETCH_LISTS_MANAGEMENT_PAGE_TIMELINE", formatResponse: o.Z, network: { query: s.Z, variables: ({ count: e, cursor: t }, n) => ({ count: e, cursor: "string" == typeof t ? t : void 0, isListMemberTargetUserId: "0", timelineId: "listsManagementPage", ...(0, i.d)(n.apiClient.featureSwitches) }) }, initialFetchCount: 100, perfKey: "listsManagementPageGraphQL", timelineId: "listsManagementPage" }) : (0, c.Z)({ context: "FETCH_LISTS_MANAGEMENT_PAGE_TIMELINE", formatResponse: o.Z, network: { getEndpoint: (e) => e.withEndpoint(r.ZP).fetchListsManagementPageTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, initialFetchCount: 100, perfKey: "listsManagementPageGraphQL", timelineId: "listsManagementPage" })),
                h = _;
            function I(e, t, n, s) {
                const r = [],
                    i = t(),
                    o = _(e),
                    a = o.selectEntries(i),
                    c = n === u.pinnedLists,
                    h = c ? m : E,
                    I = a.find(({ entryId: e }) => h(e));
                if (I) {
                    const e = l(I.entryId, s),
                        t = c ? p(s, e, d.P.ListTile, "-1") : p(s, e, d.P.ListWithPin),
                        n = !c;
                    c && (r.push(o.removeEntry(`${I.entryId}-emptyStateMessage`, !0)), r.push(o.removeEntry(`${I.entryId}-messageprompt-PinnedListsEmptyPrompt`, !0))), r.push(o.injectTimelineModuleEntry(t, I.entryId, { atTop: n }));
                }
                return r;
            }
            function g(e, t, n, s) {
                const r = [],
                    i = t(),
                    o = _(e),
                    a = o.selectEntries(i),
                    d = n === u.pinnedLists ? m : E,
                    c = a.find(({ entryId: e }) => d(e));
                if (c) {
                    const e = l(c.entryId, s);
                    r.push(o.removeEntry(e, !0));
                    const t = `${c.entryId}-${s}`;
                    r.push(o.removeEntry(t, !0));
                }
                return r;
            }
        },
        780936: (e, t, n) => {
            n.d(t, { A: () => d, Z: () => a });
            var s = n(483557),
                r = n(750085),
                i = n(466015),
                o = n(218951);
            const a = (e) => (0, o.Z)({ timelineId: `listMembersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(s.ZP).fetchMembersGraphQL, getEndpointParams: ({ count: t, cursor: n }) => ({ count: t, cursor: "string" == typeof n ? n : void 0, listId: e }) }, context: "FETCH_MEMBERS", perfKey: "membersGraphQL", formatResponse: r.Z }),
                d = (e, t) => (n, s) => {
                    n([...t].map((t) => e.removeEntry((0, i._Y)(t))));
                };
        },
        823885: (e, t, n) => {
            n.d(t, { Z: () => o });
            var s = n(483557),
                r = n(750085),
                i = n(218951);
            const o = (e) => (0, i.Z)({ timelineId: `listMembershipsGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(s.ZP).fetchMembershipsGraphQL, getEndpointParams: ({ count: t, cursor: n }) => ({ count: t, cursor: "string" == typeof n ? n : void 0, userId: e }) }, context: "FETCH_MEMBERSHIPS", perfKey: "membershipsGraphQL", formatResponse: r.Z });
        },
        164692: (e, t, n) => {
            n.d(t, { Z: () => o });
            var s = n(483557),
                r = n(750085),
                i = n(218951);
            const o = (e, t) => (0, i.Z)({ timelineId: `listOwnershipsGraphQL-${t}`, network: { getEndpoint: (e) => e.withEndpoint(s.ZP).fetchOwnershipsGraphQL, getEndpointParams: ({ count: n, cursor: s }) => ({ count: n, cursor: "string" == typeof s ? s : void 0, userId: e, targetUserId: t }) }, context: "FETCH_OWNERSHIPS", perfKey: "ownershipsGraphQL", formatResponse: r.Z });
        },
        78259: (e, t, n) => {
            n.d(t, { Z: () => o });
            var s = n(483557),
                r = n(750085),
                i = n(218951);
            const o = (e) => (0, i.Z)({ timelineId: `listSubscribersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(s.ZP).fetchSubscribersGraphQL, getEndpointParams: ({ count: t, cursor: n }) => ({ count: t, cursor: "string" == typeof n ? n : void 0, listId: e }) }, context: "FETCH_SUBSCRIBERS", perfKey: "subscribersGraphQL", formatResponse: r.Z });
        },
        112859: (e, t, n) => {
            n.d(t, { Z: () => l });
            var s = n(202784),
                r = n(154003),
                i = n(332920),
                o = n.n(i),
                a = n(457566),
                d = n(725516),
                c = n(979512);
            const u = o().fc7db594;
            function l({ screenName: e }) {
                const { openGrok: t } = (0, c.Z)(),
                    n = (0, d.z)(),
                    i = s.useCallback(() => {
                        t({ text: `@${e}`, autoSubmit: !0, source: "user_profile_summary" }), n.scribe({ element: "grok-user-info-button", action: "click" });
                    }, [n, t, e]);
                return s.createElement(r.ZP, { icon: s.createElement(a.x1, null), onPress: i }, u);
            }
        },
        510588: (e, t, n) => {
            n.d(t, { $5: () => l, By: () => I, DV: () => P, Fz: () => _, Ge: () => T, Ns: () => L, Wy: () => E, _g: () => y, ax: () => g, cx: () => h, l1: () => S, tt: () => w, xh: () => m });
            var s = n(614983),
                r = n.n(s),
                i = n(842799),
                o = n(286e3),
                a = n(576469),
                d = n(919022),
                c = n(312771);
            const u = { url: "https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png", width: 1125, height: 375 },
                l = (e, t) => {
                    const n = E(e, t),
                        s = g(e, t),
                        r = T(e, t);
                    return n ? `/i/lists/${n}` : s && r ? `/${s}/lists/${r}` : "";
                },
                p = (e, t) => t.match.params.listId || void 0,
                m = (e, t) => {
                    const n = t.match.params.listId;
                    return r()(n, "listId should always be specified"), n;
                },
                E = (e, t) =>
                    p(0, t) ||
                    ((e, t) => {
                        const n = _(e, t);
                        return n && n.id_str;
                    })(e, t),
                _ = (e, t) => {
                    const n = p(0, t);
                    return n ? a.Z.select(e, n) : a.Z.selectByKey(e, f(e, t));
                },
                h = (e, t) => {
                    const n = _(e, t);
                    return n && n.following;
                },
                I = (e, t) => {
                    const n = _(e, t);
                    return n && n.name;
                },
                g = (e, t) => {
                    const n = p(0, t);
                    return t.match.params.screenName || void 0 || (n && a.Z.selectListAuthorScreenName(e, n));
                },
                T = (e, t) => {
                    const n = _(e, t);
                    return t.match.params.slug || (n && n.slug);
                },
                f = (e, t) => {
                    const n = t.match.params.slug,
                        s = t.match.params.screenName;
                    return n && s ? (0, i.Z)(s, n) : "";
                },
                P = (e, t) => {
                    const n =
                        E(e, t) ||
                        ((e, t) => {
                            const n = T(e, t),
                                s = g(e, t);
                            return n && s ? (0, i.Z)(s, n) : "";
                        })(e, t);
                    return a.Z.selectFetchStatus(e, n) || c.ZP.NONE;
                },
                S = (e, t) => {
                    const n = g(e, t);
                    return n ? d.ZP.selectByScreenName(e, n) : void 0;
                },
                y = (e, t) => {
                    const n = E(e, t),
                        s = (0, o.nx)(e);
                    return (n && s[n] && s[n].useRanked) || !1;
                },
                w = (e, t) => {
                    const n = a.Z.select(e, t);
                    if (n) {
                        const e = n.customBanner;
                        return e || n.defaultBanner;
                    }
                    return { crop: [], image: u };
                },
                L = (e, t) => {
                    const n = _(e, t);
                    return n?.mode;
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.HoverCard-63cb1cc4.cb85e01a.js.map

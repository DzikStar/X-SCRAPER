"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9", "loader.richScribeAction"],
    {
        481242: (e, t, r) => {
            r.r(t), r.d(t, { richScribeAction: () => l, richScribeFlushImmediate: () => u });
            var n = r(450681),
                i = r(479506),
                s = r(942893),
                o = r(836255),
                a = r(919022);
            const d = [],
                c = Object.freeze({}),
                l =
                    (e, t = c) =>
                    (r, i, { scribe: s }) => {
                        const o = i(),
                            a = Array.isArray(t.items) ? (0, n.Z)(t.items.map((e) => E(e, o))) : d,
                            c = { ...t, items: a };
                        s.log(e, c);
                    },
                u =
                    () =>
                    (e, t, { scribe: r }) => {
                        r.flushImmediate();
                    },
                p = (e) => {
                    if (e.disclosure_type && e.impression_id) return { disclosure_type: e.disclosure_type, impression_id: e.impression_id };
                },
                E = (e, t) => {
                    if (!e.id) return e;
                    switch (e.item_type) {
                        case i.Z.ItemType.USER: {
                            const r = a.ZP.select(t, e.id),
                                n = p(e);
                            return r ? { ...e, ...s.Z.getUserItem(r, n) } : e;
                        }
                        case i.Z.ItemType.TWEET: {
                            const r = o.Z.selectHydrated(t, e.id),
                                n = p(e);
                            return r ? { ...e, ...s.Z.getTweetItem(r, n, void 0, void 0, e) } : e;
                        }
                        default:
                            return e;
                    }
                };
        },
        519896: (e, t, r) => {
            r.d(t, { A7: () => i, Nw: () => s, Yf: () => n });
            const n = "instreamVideo",
                i = `rweb/${n}`,
                s = Object.freeze({ TIMELINE_HOME: "TIMELINE_HOME", SEARCH_TWEETS: "SEARCH_TWEETS", PROFILE_TWEETS: "PROFILE_TWEETS", OTHER: "OTHER" });
        },
        109223: (e, t, r) => {
            r.d(t, { jc: () => v, Q3: () => A, C: () => R });
            r(571372), r(136728);
            var n = r(329491),
                i = r(962741),
                s = r(499627),
                o = r(312771),
                a = r(836255),
                d = r(519896),
                c = r(782261),
                l = r(276563);
            function u(e) {
                if (null == e) return null;
                const t = (function (e) {
                        const { card: t, extended_entities: r = {} } = e,
                            n =
                                !!r.media?.length &&
                                r.media.some((e) => {
                                    const t = e.additional_media_info;
                                    return t && t.monetizable;
                                }),
                            i = c.Z.hasMixedMedia(e);
                        return { hasMonetizableMedia: n, hasMultipleMediaItems: i, hasAmplifyCard: !!t && t.name === l.default.CardNames.AMPLIFY && !0 === l.default.getBindingValue(t.binding_values, "dynamic_ads"), hasPeriscopeCard: t?.name === l.default.CardNames.PERISCOPE_BROADCAST, hasBroadcastCard: t?.name === l.default.CardNames.BROADCAST, hasEventCard: !!t && t.name === l.default.CardNames.LIVE_EVENT && ("video" === l.default.getBindingValue(t.binding_values, "media_type") || "broadcast" === l.default.getBindingValue(t.binding_values, "media_type")) };
                    })(e),
                    r = (n = t).hasMonetizableMedia || n.hasAmplifyCard || n.hasPeriscopeCard || n.hasBroadcastCard || n.hasEventCard;
                var n;
                const i =
                        r &&
                        (function (e) {
                            const t = e.hasAmplifyCard || e.hasPeriscopeCard || e.hasBroadcastCard || e.hasEventCard;
                            return e.hasMonetizableMedia && !t;
                        })(t),
                    { hasMultipleMediaItems: s } = t;
                return { hasMultipleMediaItems: s, legacy: r, redesign: i };
            }
            var p = r(516951),
                E = r(541837),
                _ = r(615656),
                m = r(71620),
                T = r(917799);
            const y = "FETCH_PREROLLS",
                h = (0, T.dg)(d.A7, y),
                f = 10;
            function I(e) {
                const t = {},
                    r = {};
                return (
                    Array.isArray(e.video_analytics_scribe) &&
                        e.video_analytics_scribe.length &&
                        e.video_analytics_scribe.forEach((e) => {
                            t[e.tweet_id] = e.video_analytics_scribe_passthrough;
                        }),
                    Array.isArray(e.prerolls) &&
                        e.prerolls.length &&
                        e.prerolls.forEach((e) => {
                            e.media_info && (r[e.tweet_id] = { ...e, videoAnalyticsScribePassthrough: t[e.tweet_id] });
                        }),
                    r
                );
            }
            function S(e, t, r, n, i) {
                if (!Array.isArray(e) || 0 === e.length) return Promise.resolve();
                let s = [];
                const o = [s];
                return (
                    e.forEach((e) => {
                        s.length === f && ((s = []), o.push(s)), s.push(e);
                    }),
                    Promise.all(
                        o.map((e) =>
                            (function (e, t, r, n, i) {
                                if (!Array.isArray(e) || 0 === e.length) return Promise.resolve();
                                const s = { eligibleTweets: e, prerollDisplayLocation: i };
                                t && (s.trigger_preroll = t);
                                const o = (0, T._O)(r, { request: n.withEndpoint(E.Z).fetch, params: s }),
                                    a = r((0, m.zr)(y)({ showToast: !1, [_.ZP.AccessDeniedByBouncer]: { customAction: p.Z } }));
                                return o({ actionTypes: h, context: "FETCH_PREROLLS" }).catch(a);
                            })(e, t, r, n, i),
                        ),
                    ).then((e) => {
                        let t = {};
                        e.forEach((e) => {
                            e && e.prerolls && (t = { ...t, ...I(e) });
                        });
                        const n = { type: v, payload: { ...{ dynamicIVCollection: t }, prerollDisplayLocation: i } };
                        r(n);
                    })
                );
            }
            const C = { fetchStatus: o.ZP.NONE, eligibleTweets: [], promotedMetadataCollection: {}, prerollMetadataCollection: {}, dynamicIVCollection: {}, prerollEligibilityCollection: {} },
                w = "rweb/instreamVideo/DYNAMIC_RESET",
                b = "rweb/instreamVideo/STORE_METADATA",
                v = "rweb/instreamVideo/DYNAMIC_STORE",
                g = { [d.Nw.OTHER]: C };
            s.Z.register({
                [d.Yf]: function (e = g, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case b:
                            if (t.payload) {
                                const { eligibleTweets: r, prerollDisplayLocation: n, prerollEligibilityCollection: i, prerollMetadataCollection: s, promotedMetadataCollection: o } = t.payload;
                                return { ...e, [n]: { ...C, ...e[n], eligibleTweets: r, prerollMetadataCollection: s, promotedMetadataCollection: o, prerollEligibilityCollection: i } };
                            }
                            break;
                        case v:
                            if (t.payload) {
                                const { dynamicIVCollection: r, prerollDisplayLocation: n } = t.payload;
                                return { ...e, [n]: { ...C, ...e[n], dynamicIVCollection: r } };
                            }
                            break;
                        case w:
                            if (t.payload) {
                                const { prerollDisplayLocation: r } = t.payload;
                                return { ...e, [r]: { ...C, ...e[r], dynamicIVCollection: {} } };
                            }
                            break;
                        default:
                            return e;
                    }
                    return e;
                },
            });
            const L = (e, t) => e[d.Yf][t] || C;
            function R(e, t = d.Nw.OTHER) {
                return (r, n, { api: s, featureSwitches: o }) => {
                    if (!Array.isArray(e)) throw new Error("unable to fetch prerolls without timeline entries");
                    if (e.length < 1) return Promise.resolve();
                    const d = n(),
                        c = [],
                        l = {},
                        p = {},
                        E = {};
                    e.forEach((e) => {
                        if (!e.content || e.type !== i.ZP.Tweet) return;
                        const t = e.content,
                            r = a.Z.selectHydrated(d, t.id);
                        if (!r) return;
                        const n = r,
                            { prerollMetadata: s, promotedMetadata: o } = t;
                        if (o) {
                            const { adMetadataContainer: e, disclosureType: t, impressionId: r } = o;
                            (n.promoted_content = { adMetadataContainer: e, disclosure_type: t, impression_id: r }), (p[n.id_str] = o);
                        }
                        const _ = u(n),
                            m = _ && _.hasMultipleMediaItems;
                        (E[n.id_str] = _), s?.preroll?.mediaInfo && !m && (l[n.id_str] = s), _?.legacy && !m && c.push(n);
                    });
                    r({ type: b, payload: { ...{ eligibleTweets: c, prerollMetadataCollection: l, promotedMetadataCollection: p, prerollEligibilityCollection: E, prerollDisplayLocation: t } } });
                    return S(
                        c.filter((e) => void 0 === l[e.id_str]),
                        null,
                        r,
                        s,
                        t,
                    );
                };
            }
            function A(e, t = d.Nw.OTHER) {
                return (r, i, { api: s, featureSwitches: o }) => {
                    if (e) {
                        const o = L(i(), t),
                            { dynamicIVCollection: a, eligibleTweets: d, prerollEligibilityCollection: c, prerollMetadataCollection: l, promotedMetadataCollection: u } = o,
                            p = a[e],
                            E = u[e],
                            _ = c[e];
                        if (p) {
                            r({ type: w, payload: { prerollDisplayLocation: t } });
                            const { dynamic_preroll_type: e, preroll_id: i } = p;
                            return (
                                S(d, { preroll_id: i, dynamic_preroll_type: e }, r, s, t),
                                (function (e, t, r, i) {
                                    const s = { adId: t.preroll_id, advertiserName: null, advertiserProfileImageUrl: null, mediaInfo: { call_to_action: null, duration_millis: t.media_info.duration_millis, publisher_id_str: t.media_info.publisher_id_str, variants: t.media_info.variants }, promotedContent: { impressionId: void 0, disclosureType: void 0 }, videoAnalyticsScribePassthrough: t.videoAnalyticsScribePassthrough };
                                    if ((t.promoted_content && !r && ((s.promotedContent.impressionId = t.promoted_content.impression_id), (s.promotedContent.disclosureType = t.promoted_content.disclosure_type)), t.media_info.call_to_action)) {
                                        const { type: e, url: i } = t.media_info.call_to_action,
                                            o = (0, n.b)(i, r?.clickTrackingInfo),
                                            a = r?.clickTrackingInfo ? { original_url: i, embedded_url: o, click_tracking_info: r.clickTrackingInfo, embed_status: (0, n.R)(i, r.clickTrackingInfo) } : void 0;
                                        s.mediaInfo.call_to_action = { type: e, url: o, click_tracking_embed_details: a };
                                    }
                                    if (t.media_info.render_ad_by_advertiser_name) {
                                        const { advertiser_name: e, advertiser_profile_image_url: r } = t.media_info;
                                        (s.advertiserName = e), (s.advertiserProfileImageUrl = r);
                                    }
                                    if (i?.redesign) {
                                        (s.shouldAutoAdvance = !1), (s.useRedesignedPrerollUx = !0);
                                        const { advertiser_name: e, advertiser_profile_image_url: r } = t.media_info;
                                        (s.advertiserName = e), (s.advertiserProfileImageUrl = r);
                                    }
                                    return s;
                                })(0, p, E, _)
                            );
                        }
                        const m = l[e];
                        if (m) {
                            const e = (function (e, t, r, i) {
                                if (!t.preroll || !t.preroll.mediaInfo) return null;
                                const { mediaInfo: s, prerollId: o } = t.preroll,
                                    a = s.videoVariants.map((e) => ({ url: e.url, content_type: e.contentType, bitrate: e.bitrate })),
                                    d = { adId: o, advertiserName: null, advertiserProfileImageUrl: null, mediaInfo: { call_to_action: void 0, duration_millis: s.durationMillis, publisher_id_str: s.publisherId, variants: a }, promotedContent: { impressionId: void 0, disclosureType: void 0 } };
                                if (s.callToAction) {
                                    const { type: e, url: t } = s.callToAction,
                                        i = (0, n.b)(t, r?.clickTrackingInfo),
                                        o = r?.clickTrackingInfo ? { original_url: t, embedded_url: i, click_tracking_info: r.clickTrackingInfo, embed_status: (0, n.R)(t, r.clickTrackingInfo) } : void 0;
                                    d.mediaInfo.call_to_action = { type: e, url: i, click_tracking_embed_details: o };
                                }
                                if (s.renderAdByAdvertiserName) {
                                    const { advertiserName: e, advertiserProfileImageUrl: t } = s;
                                    (d.advertiserName = e), (d.advertiserProfileImageUrl = t);
                                }
                                if (i?.redesign) {
                                    (d.shouldAutoAdvance = !1), (d.useRedesignedPrerollUx = !0);
                                    const { advertiserName: e, advertiserProfileImageUrl: t } = s;
                                    (d.advertiserName = e), (d.advertiserProfileImageUrl = t);
                                }
                                return d;
                            })(0, m, E, _);
                            if (e) return e;
                        }
                    }
                    return {};
                };
            }
        },
        576469: (e, t, r) => {
            r.d(t, { Z: () => G });
            r(571372), r(136728);
            var n = r(24949),
                i = r(161821),
                s = r(450681),
                o = r(483557),
                a = r(842799),
                d = r(716233),
                c = r(962741),
                l = r(466015),
                u = r(538327),
                p = r(281743),
                E = r(917799),
                _ = r(56519),
                m = r(502909),
                T = r(600823),
                y = r(558369),
                h = r(497294),
                f = r(709318),
                I = r(872788),
                S = r(390387),
                C = r(652881),
                w = r(780936),
                b = r(823885),
                v = r(164692),
                g = r(78259),
                L = r(919022),
                R = r(206795);
            const A = E.dg("lists", "UPLOAD_MEDIA"),
                P = E.dg("lists", "UPDATE_MEDIA"),
                O = (0, m.ZP)({ namespace: "lists" }),
                U = (0, m.tb)(O, {
                    context: "FETCH_LIST",
                    endpoint: (e) => e.withEndpoint(o.ZP).fetchList,
                    params: ([e], t) => {
                        if (e) return { list_id: e };
                        if (t.slug && t.screenName) return { slug: t.slug, owner_screen_name: t.screenName };
                        throw new Error("listId or screenName and slug required to fetch list");
                    },
                }),
                F = (e) => l.WE({ displayType: u.P.List, id: e, sortIndex: Date.now().toString() }),
                Z = (e) => l.$0({ id: e, sortIndex: Date.now().toString() }),
                M = (e, t) => (t && t.entities ? [(0, _.dP)(t.entities)] : []),
                D = (0, n.P1)(
                    O.select,
                    (e) => e,
                    (e, t) => {
                        if (e) {
                            const { full_name: r, user: n } = e;
                            if (r) return r.split("/")[0].substr(1);
                            if (n) {
                                const e = L.ZP.select(t, n);
                                return e?.screen_name;
                            }
                        }
                    },
                ),
                V = {
                    selectByKey: (0, n.P1)(
                        O.selectAll,
                        (e, t) => t,
                        (e) => e,
                        (e, t, r) =>
                            e
                                ? (0, i.Z)(e).find((e) => {
                                      if (e) {
                                          const n = x.selectListAuthorScreenName(r, e.id_str);
                                          return (n && (0, a.Z)(n, e.slug)) === t;
                                      }
                                  })
                                : void 0,
                    ),
                    selectListKeyById: (0, n.P1)(O.select, D, (e, t) => e && t && (0, a.Z)(t, e.slug)),
                    selectLocalMediaId: (0, n.P1)(O.select, (e) => e?.mediaId),
                },
                N = {
                    addUserToList: (0, m.Tx)(O, "addUserToList", {
                        getParams: (e, { userId: t } = {}) => ({ list_id: e, user_id: t }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).addToList,
                        context: "ADD_USER_TO_LIST",
                        mapResponseToActions:
                            (e, { shouldInjectURTEntry: t = !0, userId: r }, n) =>
                            (i) => {
                                const s = n(),
                                    o = x.select(s, e);
                                if (!i?.entities || !o) return [];
                                const a = F(l.Re(e)),
                                    d = (0, w.Z)(e),
                                    c = (0, b.Z)(r),
                                    u = [O.updateOne(e, { member_count: o.member_count + 1 }), R.Hi({ addTo: r, itemsToAdd: [e] }), c.injectEntry(a)];
                                if (t) {
                                    const e = Z(r);
                                    u.push(d.injectEntry(e));
                                }
                                return u;
                            },
                    }),
                    deleteList: (0, m.Tx)(O, "deleteList", {
                        getParams: (e) => ({ list_id: e }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).deleteList,
                        context: "DELETE_LIST",
                        mapResponseToActions: (e, t, r) => (t) => {
                            const n = r(),
                                i = (0, y.mz)(n).isTrue("responsive_web_timeline_relay_lists_management_enabled"),
                                s = O.select(n, e),
                                o = (0, S._h)(n);
                            if (!s || !o) return [];
                            const a = l.Re(e),
                                d = (0, v.Z)(o, o);
                            return [(0, f.Vu)({ id: s.id_str, name: s.name, type: I.FO.LIST }), d.removeEntry(a), ...(0, C.C2)(i, r, C.Pq.ownedSubscribedList, e)];
                        },
                    }),
                    deleteListMedia: (0, m.Tx)(O, "deleteListMedia", { getParams: (e) => ({ listId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).deleteBannerImage, context: "DELETE_LIST_MEDIA", mapResponseToActions: (e, t, r) => (t) => (t && t.entities ? [O.updateOne(e, { customBanner: void 0 })] : []) }),
                    editList: (0, m.Tx)(O, "editList", { getParams: (e, { description: t, mode: r, name: n } = {}) => ({ description: t, list_id: e, mode: r, name: n }), getApiMethod: (e) => e.withEndpoint(o.ZP).editList, context: "EDIT_LIST", mapResponseToActions: (e, t, r) => (e) => M(0, e) }),
                    removeUserFromList: (0, m.Tx)(O, "removeUserFromList", {
                        getParams: (e, { userId: t } = {}) => ({ list_id: e, user_id: t }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).removeFromList,
                        context: "REMOVE_USER_FROM_LIST",
                        mapResponseToActions:
                            (e, { shouldRemoveURTEntry: t = !0, userId: r }, n) =>
                            (n) => {
                                const i = n?.entities?.lists[e];
                                if (i) {
                                    const n = (0, w.Z)(e),
                                        s = (0, b.Z)(r),
                                        o = [R.pO({ removeFrom: r, itemToRemove: e }), s.removeEntry(l.Re(e))];
                                    return o.push(O.updateOne(e, i)), t && o.push(n.removeEntry(l._Y(r))), o;
                                }
                                return [];
                            },
                    }),
                    subscribe: (0, m.Tx)(O, "subscribe", {
                        getParams: (e) => ({ list_id: e }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).createSubscribers,
                        canPerformAction: (e = {}) => e && !e.following,
                        context: "SUBSCRIBE_TO_LIST",
                        mapResponseToActions: (e, t, r) => (t) => {
                            const n = r(),
                                i = (0, y.mz)(n).isTrue("responsive_web_timeline_relay_lists_management_enabled"),
                                s = [],
                                o = t?.entities?.lists?.[e],
                                a = (0, S._h)(n);
                            if (o && a) {
                                const t = Z(a),
                                    n = (0, g.Z)(e);
                                s.push(O.updateOne(e, o)), s.push(n.injectEntry(t)), s.push(...(0, C.s8)(i, r, C.Pq.ownedSubscribedList, e)), o.pinning && s.push((0, f.Co)({ id: o.id_str, name: o.name, type: I.FO.LIST }));
                            }
                            return s;
                        },
                    }),
                    toggleMute: (0, m.Tx)(O, "toggleMute", {
                        getParams: (e, { mute: t } = {}) => ({ listId: e, mute: t }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).toggleMute,
                        canPerformAction: (e = {}) => !!e,
                        context: "LIST_TOGGLE_MUTE",
                        mapResponseToActions: (e, t, r) => (n) => {
                            const i = r(),
                                s = O.select(i, e),
                                o = (0, S._h)(i);
                            return s && o && s.muting !== t.mute && n ? [O.updateOne(e, { muting: t.mute })] : [];
                        },
                    }),
                    unsubscribe: (0, m.Tx)(O, "unsubscribe", {
                        getParams: (e) => ({ list_id: e }),
                        getApiMethod: (e) => e.withEndpoint(o.ZP).destroySubscribers,
                        canPerformAction: (e = {}) => e && !!e.following,
                        context: "UNSUBSCRIBE_FROM_LIST",
                        mapResponseToActions: (e, t, r) => (t) => {
                            const n = r(),
                                i = (0, y.mz)(n).isTrue("responsive_web_timeline_relay_lists_management_enabled"),
                                s = [],
                                o = t?.entities?.lists?.[e],
                                a = (0, S._h)(n);
                            if (o && a) {
                                const t = (0, g.Z)(e);
                                s.push(...(0, C.C2)(i, r, C.Pq.ownedSubscribedList, e)), s.push(O.updateOne(e, o)), s.push(t.removeEntry(l._Y(a))), s.push((0, f.Vu)({ id: o.id_str, name: o.name, type: I.FO.LIST }));
                            }
                            return s;
                        },
                    }),
                },
                H = {
                    addLocalMediaId:
                        ({ listId: e, mediaId: t }) =>
                        (r, n, { api: i }) => {
                            r((0, _.dP)({ lists: { [e]: { mediaId: t } } }));
                        },
                    createList:
                        (e) =>
                        (t, r, { api: n, featureSwitches: i }) =>
                            E._O(t, { request: n.withEndpoint(o.ZP).createList, params: e })({ actionTypes: O.actionTypes.CREATE, context: "CREATE_LIST" }, (e) => {
                                const t = (0, S._h)(r());
                                if (e && t) {
                                    const { result: n } = e,
                                        o = F(n),
                                        a = (0, v.Z)(t, t),
                                        d = i.isTrue("responsive_web_timeline_relay_lists_management_enabled");
                                    return (0, s.Z)([e.entities && (0, _.dP)(e.entities), a.injectEntry(o), ...(0, C.s8)(d, r, C.Pq.ownedSubscribedList, n)]);
                                }
                                return [];
                            }).then((e) => e?.entities?.lists && e.entities.lists[e.result]),
                    editListMedia:
                        ({ iconCrop: e, listId: t, mediaId: r }) =>
                        (n, i, { api: s }) => {
                            const a = e ? (0, d.U$)(e) : void 0;
                            n({ type: A.REQUEST });
                            const c = h.$i(r, { extraInitParams: a });
                            return n(c).then(
                                ([e]) => {
                                    const r = e.uploadId;
                                    if (r) {
                                        n([{ type: A.SUCCESS }, { type: P.REQUEST }]);
                                        const e = (e) => M(0, e);
                                        return E._O(n, { request: s.withEndpoint(o.ZP).editBannerImage, params: { listId: t, mediaId: r } })({ actionTypes: O.actionTypes.OPTIMISTIC_UPDATE, context: "EDIT_LIST_MEDIA" }, e);
                                    }
                                    return n({ type: A.FAILURE }), Promise.reject(new Error("List media upload failed - no uploadId"));
                                },
                                (e) => (n({ type: A.FAILURE }), Promise.reject(e)),
                            );
                        },
                    removeLocalMediaId: (e) => (t, r) => {
                        t(O.updateOne(e, { mediaId: void 0 }));
                    },
                    toggleIsMember:
                        ({ listId: e, targetUserId: t }) =>
                        (r, n, { api: i }) => {
                            const s = n(),
                                o = (0, S._h)(s);
                            if (!o) return;
                            const a = (0, v.Z)(o, t),
                                d = a.selectEntries(s),
                                u = l.Re(e),
                                p = d.find((e) => e.entryId === u);
                            if (p && p.type === c.ZP.TwitterList) {
                                const e = p.content.isMember;
                                return r(a.updateEntry(u, { isMember: !e }));
                            }
                        },
                },
                x = { ...O, ...U, selectListAuthorScreenName: D, ...V, ...N, ...H };
            p.sv.addForEntity(x, "List", {
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
                    const r = e.user;
                    if (!r) return null;
                    const n = L.ZP.select(t(), r);
                    return n ? L.Sy.reference(n) : null;
                },
                accessibility: (e) => ("private" === e.mode ? "Private" : "Public"),
                custom_banner_media_results: (e) => (e.customBanner ? k.reference(e.customBanner) : null),
                default_banner_media_results: (e) => k.reference(e.defaultBanner),
            });
            const k = p.sv.addForObjectType("ApiMediaResults", { result: (e) => Q.reference(e) }),
                Q = p.sv.addForObjectType("ApiMedia", { media_info: (e) => B.reference(e) }),
                B = p.sv.addForObjectType("ApiImage", { original_img_url: (e) => e.image.url, original_img_width: (e) => e.image.width, original_img_height: (e) => e.image.height, salient_rect: (e) => (e.crop[0] ? q.reference(e.crop[0]) : null) }),
                q = p.sv.addForObjectType("ApiMediaRect", { height: (e) => e.h, left: (e) => e.x, top: (e) => e.y, width: (e) => e.w }),
                G = T.Z.register(x);
        },
        206795: (e, t, r) => {
            r.d(t, { Hi: () => f, NU: () => S, pO: () => I, g$: () => h });
            var n = r(166852),
                i = r(483557),
                s = r(499627),
                o = r(917799),
                a = r(312771),
                d = r(56519),
                c = r(877848);
            const l = Object.freeze({ REQUEST: "rweb/lists/FETCH_LISTMEMBERSHIPS_REQUEST", SUCCESS: "rweb/lists/FETCH_LISTMEMBERSHIPS_SUCCESS", FAILURE: "rweb/lists/FETCH_LISTMEMBERSHIPS_FAILURE" }),
                u = "rweb/lists/LISTMEMBERSHIPS_ADD_UPDATE",
                p = "rweb/lists/LISTMEMBERSHIPS_REMOVE_UPDATE",
                E = "listMemberships",
                _ = [],
                m = Object.freeze({}),
                T = Object.freeze({ data: { lists: [] }, error: null, fetchStatus: { [c.Yj.BOTTOM]: a.ZP.NONE, [c.Yj.TOP]: a.ZP.NONE } });
            const y = (e, t) => e[E][t],
                h = (e, t) => {
                    const r = y(e, t);
                    return r?.data?.lists || _;
                },
                f = ({ addTo: e, itemsToAdd: t }) => ({ payload: { key: e, items: t }, type: u }),
                I = ({ itemToRemove: e, removeFrom: t }) => ({ payload: { key: t, item: e }, type: p }),
                S = (e, t) => (r, n) => {
                    const s = n(),
                        u = y(s, e),
                        p = ((e, t) => {
                            const r = y(e, t),
                                n = h(e, t);
                            return r ? (0, a.ke)(r.fetchStatus, !!n.length) : a.ZP.NONE;
                        })(s, e);
                    return !u || (p !== a.ZP.LOADING && p !== a.ZP.LOADED)
                        ? r(
                              (
                                  (e, t) =>
                                  (r, n, { api: s }) =>
                                      (0, o._O)(r, { params: t, request: s.withEndpoint(i.ZP).fetchMemberships })({ actionTypes: l, context: "LIST_MEMBERSHIPS", meta: { direction: t.cursor ? c.Yj.BOTTOM : c.Yj.TOP, key: e } }, (e) => {
                                          if (e) {
                                              const { entities: t } = e;
                                              return t ? [(0, d.dP)(t)] : void 0;
                                          }
                                      })
                              )(e, t),
                          )
                        : Promise.resolve();
                };
            s.Z.register({
                [E]: function (e = m, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case l.REQUEST: {
                            const { direction: r, key: n } = t.meta,
                                i = e[n] || T,
                                s = { ...i.fetchStatus };
                            return (s[r] = a.ZP.LOADING), { ...e, [n]: { ...i, fetchStatus: s } };
                        }
                        case l.SUCCESS: {
                            const { direction: r, key: i } = t.meta,
                                s = e[i] || T,
                                o = { ...s.fetchStatus };
                            o[r] = a.ZP.LOADED;
                            const d = t.payload?.result?.lists || [],
                                c = (0, n.Z)([...s.data.lists, ...d]);
                            return { ...e, [i]: { ...s, data: { ...{ ...t.payload?.result, ...s.data }, lists: c }, error: null, fetchStatus: o } };
                        }
                        case l.FAILURE: {
                            const { direction: r, key: n } = t.meta,
                                i = { ...(e[n] || T).fetchStatus };
                            return (i[r] = a.ZP.FAILED), { ...e, [n]: { ...e[n], error: t.payload, fetchStatus: i } };
                        }
                        case u: {
                            const { items: r, key: i } = t.payload || {},
                                s = e[i] || T,
                                o = (s.data && s.data.lists) || [],
                                a = (0, n.Z)([...r, ...o]);
                            return { ...e, [i]: { ...s, data: { ...s.data, lists: a } } };
                        }
                        case p: {
                            const { item: r, key: n } = t.payload || {},
                                i = e[n] || T,
                                s = (i.data && i.data.lists) || [];
                            return { ...e, [n]: { ...i, data: { ...i.data, lists: s.filter((e) => r !== e) } } };
                        }
                        default:
                            return e;
                    }
                },
            });
        },
        40037: (e, t, r) => {
            r.d(t, { C: () => c, e: () => l });
            var n = r(969066),
                i = r(163889),
                s = r(917799),
                o = r(836255);
            const a = Object.freeze({ Pin: "pin", Unpin: "unpin" });
            function d(e) {
                const t = (function (e) {
                    return { REQUEST: `PINNED_REPLIES/${e}_REQUEST`, SUCCESS: `PINNED_REPLIES/${e}_SUCCESS`, FAILURE: `PINNED_REPLIES/${e}_FAILURE` };
                })(e);
                return (r) =>
                    (a, d, { api: c }) => {
                        const l = c.withEndpoint(n.Z)[e],
                            u = o.Z.selectHydrated(d(), r),
                            p = u?.conversation_id_str;
                        if (!u || !p) {
                            const t = { tweetId: r, conversationId: p };
                            return (0, i.ZP)(`Pinned Replies: ${e} called with insufficient data.`, { extra: t }), Promise.resolve({ error: null, success: !1 });
                        }
                        const E = (0, s._O)(a, { params: { conversationId: p, tweetId: u.id_str }, request: (e) => l(e).then(({ success: e }) => ({ error: null, success: e })) });
                        return Promise.resolve()
                            .then(() => E({ actionTypes: t, context: `PINNED_REPLIES_${e}` }))
                            .catch((e) => ({ error: e, success: !1 }));
                    };
            }
            const c = d(a.Pin),
                l = d(a.Unpin);
        },
        466380: (e, t, r) => {
            r.d(t, { Z: () => p });
            var n = r(807469),
                i = r(502909),
                s = r(600823);
            const o = (0, i.ZP)({ namespace: "topics" }),
                a = (0, i.tb)(o, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(n.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                d = {
                    addTopic: function (e) {
                        return u.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (r, n) => (r(o.updateOne(e, { following: t })), Promise.resolve()),
                },
                c = (e, t, r) => {
                    const { entityId: n } = t.meta,
                        i = e.entities[n];
                    return i ? ((e, t, r, n) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [r.id]: { ...r, ...n() } } } : e))(e, t, i, r) : e;
                },
                l = { follow: (0, i.Tx)(o, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).follow, reducer: (e, t) => c(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, i.Tx)(o, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).unfollow, reducer: (e, t) => c(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, i.Tx)(o, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).notInterested, reducer: (e, t) => c(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, i.Tx)(o, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).undoNotInterested, reducer: (e, t) => c(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                u = { ...o, ...a, ...d, ...l, customActionTypes: (0, i.X7)(l) },
                p = s.Z.register(u);
        },
        903558: (e, t, r) => {
            r.d(t, { Eh: () => o, FQ: () => l, IP: () => c, J9: () => a, K5: () => s, PP: () => i, Vc: () => d, cJ: () => p, eX: () => E, tL: () => u });
            var n = r(795181);
            const i = Object.freeze({ REQUEST: "rweb/FETCH_TV_HOME_MIXER/REQUEST", SUCCESS: "rweb/FETCH_TV_HOME_MIXER/SUCCESS", FAILURE: "rweb/FETCH_TV_HOME_MIXER/FAILURE" }),
                s = Object.freeze({ REQUEST: "rweb/FETCH_TV_USER_PROFILE_MIXER/REQUEST", SUCCESS: "rweb/FETCH_TV_USER_PROFILE_MIXER/SUCCESS", FAILURE: "rweb/FETCH_TV_USER_PROFILE_MIXER/FAILURE" }),
                o = Object.freeze({ REQUEST: "rweb/FETCH_TV_TREND/REQUEST", SUCCESS: "rweb/FETCH_TV_TREND/SUCCESS", FAILURE: "rweb/FETCH_TV_TREND/FAILURE" }),
                a = Object.freeze({ REQUEST: "rweb/FETCH_RELATED_VIDEOS/REQUEST", SUCCESS: "rweb/FETCH_RELATED_VIDEOS/SUCCESS", FAILURE: "rweb/FETCH_RELATED_VIDEOS/FAILURE" }),
                d = Object.freeze({ REQUEST: "rweb/FETCH_TV_PIN_CODE/REQUEST", SUCCESS: "rweb/FETCH_TV_PIN_CODE/SUCCESS", FAILURE: "rweb/FETCH_TV_PIN_CODE/FAILURE" }),
                c = Object.freeze({ REQUEST: "rweb/FETCH_TV_SEARCH/REQUEST", SUCCESS: "rweb/FETCH_TV_SEARCH/SUCCESS", FAILURE: "rweb/FETCH_TV_SEARCH/FAILURE" }),
                l = Object.freeze({ REQUEST: "rweb/FETCH_TV_TWEET_CONVERSATION/REQUEST", SUCCESS: "rweb/FETCH_TV_TWEET_CONVERSATION/SUCCESS", FAILURE: "rweb/FETCH_TV_TWEET_CONVERSATION/FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/FETCH_TV_FOLLOW/REQUEST", SUCCESS: "rweb/FETCH_TV_FOLLOW/SUCCESS", FAILURE: "rweb/FETCH_TV_FOLLOW/FAILURE" }),
                p = (Object.freeze({ REQUEST: "rweb/FETCH_TV_USER_VIDEO_TWEETS/REQUEST", SUCCESS: "rweb/FETCH_TV_USER_VIDEO_TWEETS/SUCCESS", FAILURE: "rweb/FETCH_TV_USER_VIDEO_TWEETS/FAILURE" }), Object.freeze({ REQUEST: "rweb/FETCH_TV_SEARCH_TYPEAHEAD/REQUEST", SUCCESS: "rweb/FETCH_TV_SEARCH_TYPEAHEAD/SUCCESS", FAILURE: "rweb/FETCH_TV_SEARCH_TYPEAHEAD/FAILURE" }));
            const E = {
                tvDeviceIsVerified: function (e) {
                    return { type: n.M2, payload: e };
                },
                tvDeviceIsVerifiedCodeExpired: function () {
                    return { type: n.hI };
                },
                tvHomeLoaded: function (e) {
                    return { type: n.bJ, payload: e };
                },
                tvHomeReload: function () {
                    return { type: n.jT };
                },
                tvTrendLoaded: function (e) {
                    return { type: n.XS, payload: e };
                },
                tvUpdateFollowingUser: function (e, t) {
                    return { type: n._c, payload: { screenName: e, following: t } };
                },
                tvUpdateFriendship: function (e, t) {
                    return { type: n.hy, payload: { screenName: e, notificationsEnabled: t } };
                },
                tvUserProfileLoaded: function (e) {
                    return { type: n._b, payload: e };
                },
                tvPinCodeLoaded: function (e) {
                    return { type: n.wW, payload: e };
                },
                tvSearchStart: function (e, t) {
                    return { type: n.E3, payload: { query: e, searchTab: t } };
                },
                tvSearchResults: function (e, t, r, i, s) {
                    return { type: n.sz, payload: { tweets: e, query: t, cursor: r, searchTab: s, shouldClear: i } };
                },
                tvSearchResultsClear: function (e) {
                    return { type: n.te, payload: e };
                },
                tvUserSearchResults: function (e, t) {
                    return { type: n.Np, payload: e, meta: { screenName: t } };
                },
                tvSearchTypeaheadResults: function (e, t) {
                    return { type: n.BS, payload: { results: e, query: t } };
                },
                tvTweetConversationResults: function (e, t, r) {
                    return { type: n.hx, payload: { tweets: e, bottomCursor: r }, meta: { tweetId: t } };
                },
                tvRelatedVideosLoaded: function (e) {
                    return { type: n.rd, payload: e };
                },
                tvRelatedVideosFailedToLoad: function () {
                    return { type: n.Z };
                },
                tvRelatedVideosClear: function () {
                    return { type: n.gw };
                },
                playerOpen: function (e) {
                    return { type: n.f1, payload: e };
                },
                playerClose: function () {
                    return { type: n.bV };
                },
                playerSetVideo: function (e) {
                    return { type: n.fY, payload: e };
                },
            };
        },
        250901: (e, t, r) => {
            r.d(t, { IF: () => i, UD: () => o, bW: () => n, jK: () => s });
            const n = (e) => (t) => t.tv[e];
            function i(e) {
                return e.tv.search;
            }
            function s(e) {
                return e.tv.home;
            }
            function o(e) {
                return e.tv.home.status;
            }
        },
        682461: (e, t, r) => {
            r.d(t, { Qj: () => Z, _B: () => U, L8: () => O, qU: () => F, i6: () => M, H7: () => Q, fx: () => V, b8: () => k, Sn: () => D, ZN: () => N, fv: () => H, BX: () => x });
            r(136728), r(571372), r(202784);
            var n = r(506899),
                i = r(459679),
                s = r(500739),
                o = r(768727),
                a = (r(740025), r(745123)),
                d = r(56698),
                c = r(393445),
                l = r(644829),
                u = r(120071),
                p = r(701788),
                E = r(171697),
                _ = r(125199),
                m = r(917799),
                T = r(17243),
                y = r(903558),
                h = r(87063),
                f = r(499627),
                I = r(795181);
            const S = { isOpen: !1, tweet: void 0, conversation: void 0, conversationBottomCursor: void 0, conversationFetchStatus: h.Z.LOADING },
                C = { typeaheadResults: void 0, results: void 0, searchFetchStatus: h.Z.LOADING, userSearchScreenName: void 0, cursor: void 0 },
                w = { home: { content: void 0, status: h.Z.LOADING }, trend: void 0, search: C, following: C, bookmarks: C, player: S, profile: {}, relatedVideos: {}, login: {} },
                b = (e) => {
                    const t = new Map();
                    return e.forEach((e) => t.set(e.id_str, e)), Array.from(t.values());
                },
                v = (e) => {
                    const t = new Map();
                    return e.forEach((e) => t.set(e.id, e)), Array.from(t.values());
                },
                g = (e, t, r) => {
                    const n = t && t.length > 0 ? t[0].tweet?.conversation_id_str : "",
                        i = t && n === r ? [...t, ...e] : e,
                        s = new Set(),
                        o = [];
                    return (
                        i.forEach((e) => {
                            const t = e.tweet?.id_str ?? "";
                            s.has(t) || (o.push(e), s.add(t));
                        }),
                        o.sort((e, t) => {
                            const r = e.sortIdx || "",
                                n = t.sortIdx || "";
                            return r < n ? 1 : r > n ? -1 : 0;
                        }),
                        o
                    );
                };
            f.Z.register({
                [I.Yf]: function (e = w, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case I.M2:
                            return { ...e, login: { ...e.login, deviceIsVerified: t.payload } };
                        case I.hI:
                            return { ...e, login: { ...e.login, pinCodeExpired: !0, pinCode: void 0 } };
                        case y.PP.REQUEST:
                            return { ...e, home: { ...e.home, status: h.Z.LOADING } };
                        case y.PP.SUCCESS:
                            return { ...e, home: { ...e.home, status: h.Z.LOADED } };
                        case y.PP.FAILURE:
                            return { ...e, home: { content: [], status: h.Z.FAILED } };
                        case I.bJ:
                            return { ...e, home: { ...e.home, content: t.payload } };
                        case I.jT:
                            return { ...e, home: { content: [], status: h.Z.LOADING } };
                        case I.XS:
                            return { ...e, trend: t.payload };
                        case I.rd:
                            return { ...e, relatedVideos: { ...e.relatedVideos, videos: t.payload.shouldClear ? t.payload.videos : [...(e.relatedVideos.videos || []), ...t.payload.videos], cursor: t.payload.cursor } };
                        case I.Z:
                            return { ...e, relatedVideos: { ...w.relatedVideos, fetchStatus: h.Z.FAILED } };
                        case I.gw:
                            return { ...e, relatedVideos: w.relatedVideos };
                        case I._b:
                            return { ...e, profile: { ...e.profile, [t.payload.user.screen_name.toLowerCase()]: { user: t.payload.user, videos: t.payload.shouldClear ? t.payload.videos : b([...(e.profile[t.payload.user.screen_name.toLowerCase()]?.videos || []), ...t.payload.videos]), modules: t.payload.shouldClear ? t.payload.modules : v([...(e.profile[t.payload.user.screen_name.toLowerCase()]?.modules || []), ...(t.payload.modules || [])]), cursor: t.payload.cursor } } };
                        case I.wW:
                            return { ...e, login: { ...e.login, pinCode: t.payload, pinCodeExpired: !1 } };
                        case I._c:
                            return { ...e, profile: { ...e.profile, [t.payload.screenName.toLowerCase()]: { ...e.profile[t.payload.screenName.toLowerCase()], user: { ...e.profile[t.payload.screenName.toLowerCase()]?.user, following: t.payload.following } } } };
                        case I.hy:
                            return { ...e, profile: { ...e.profile, [t.payload.screenName.toLowerCase()]: { ...e.profile[t.payload.screenName.toLowerCase()], user: { ...e.profile[t.payload.screenName.toLowerCase()]?.user, notifications: t.payload.notificationsEnabled } } } };
                        case I.E3:
                            return { ...e, [t.payload.searchTab]: { ...e[t.payload.searchTab], query: t.payload.query } };
                        case I.sz:
                            return t.payload.query === e[t.payload.searchTab].query ? { ...e, [t.payload.searchTab]: { ...e[t.payload.searchTab], lastCompletedQuery: t.payload.query, results: t.payload.shouldClear ? t.payload.tweets : [...(e[t.payload.searchTab].results || []), ...t.payload.tweets], cursor: t.payload.cursor, userSearchScreenName: void 0 } } : e;
                        case I.te:
                            return { ...e, [t.payload]: { ...C } };
                        case I.Np:
                            return { ...e, search: { ...e.search, results: t.payload, userSearchScreenName: t.meta.screenName } };
                        case I.hx:
                            return { ...e, player: { ...e.player, conversation: g(t.payload.tweets, e?.player?.conversation || [], t.meta.tweetId), conversationBottomCursor: t.payload.bottomCursor } };
                        case I.BS:
                            return { ...e, search: { ...e.search, typeaheadResults: t.payload.results } };
                        case I.f1:
                            return { ...e, player: { ...e.player, tweet: t.payload, isOpen: !0 } };
                        case I.bV:
                            return { ...e, player: { ...e.player, isOpen: !1 } };
                        case I.fY:
                            return { ...e, player: { ...e.player, tweet: t.payload, isOpen: !0 } };
                        case y.IP.REQUEST:
                            return { ...e, search: { ...e.search, searchFetchStatus: h.Z.LOADING } };
                        case y.IP.SUCCESS:
                            return { ...e, search: { ...e.search, searchFetchStatus: h.Z.LOADED } };
                        case y.IP.FAILURE:
                            return { ...e, search: { ...e.search, searchFetchStatus: h.Z.FAILED } };
                        case y.K5.REQUEST:
                            return { ...e, profileFetchStatus: h.Z.LOADING };
                        case y.K5.SUCCESS:
                            return { ...e, profileFetchStatus: h.Z.LOADED };
                        case y.K5.FAILURE:
                            return { ...e, profileFetchStatus: h.Z.FAILED };
                        case y.J9.REQUEST:
                            return { ...e, relatedVideos: { ...e.relatedVideos, fetchStatus: h.Z.LOADING } };
                        case y.J9.SUCCESS:
                            return { ...e, relatedVideos: { ...e.relatedVideos, fetchStatus: h.Z.LOADED } };
                        case y.J9.FAILURE:
                            return { ...e, relatedVideos: { ...e.relatedVideos, fetchStatus: h.Z.FAILED } };
                        case y.FQ.REQUEST:
                            return { ...e, player: { ...e.player, conversationFetchStatus: h.Z.LOADING } };
                        case y.FQ.SUCCESS:
                            return { ...e, player: { ...e.player, conversationFetchStatus: h.Z.LOADED } };
                        case y.FQ.FAILURE:
                            return { ...e, player: { ...e.player, conversationFetchStatus: h.Z.FAILED } };
                        default:
                            return e;
                    }
                },
            });
            const L = (e, t = !1) => {
                    if ("Tweet" === e?.result?.__typename) {
                        const r = !!e?.result?.legacy?.retweeted_status_result,
                            i = r ? e?.result?.legacy?.retweeted_status_result?.result?.legacy : e?.result?.legacy,
                            s = (0, n.Fv)(e?.result, E.Z),
                            o = s.entities.tweets[i?.id_str],
                            a = e?.result?.card ? (0, n.Fv)(e?.result?.card, p.Z) : null,
                            d = s.entities.tweets[o?.retweeted_status],
                            c = { ...o, user: { ...s.entities.users[i?.user_id_str] }, retweeted_status: d || o?.retweeted_status, retweeted: r, card: a?.entities.cards[e?.result?.card?.rest_id] },
                            l = "video" !== c?.entities?.media?.[0]?.type,
                            u = !c?.card?.binding_values?.broadcast_id?.string_value,
                            _ = "video" !== c?.retweeted_status?.entities?.media?.[0].type;
                        if (!t && l && _ && u) return;
                        return c;
                    }
                },
                R = (e, t) => {
                    if (e.entities?.users?.[t]) return e.entities?.users?.[t];
                },
                A = (e) => {
                    const t = e?.instructions?.find((e) => "TimelineAddEntries" === e?.type);
                    return (0, i.Z)(t?.entries || [], (e) => {
                        if ("TimelineTimelineModule" === e?.content?.__typename) {
                            const t = e?.content?.displayType;
                            if ("Carousel" === t || "CompactCarousel" === t || "TVCarousel" === t || "TVShortCarousel" === t) {
                                return {
                                    id: e?.entryId || "",
                                    title: e?.content?.header?.text || "",
                                    content: (0, i.Z)(e?.content?.items || [], (e) => {
                                        if ("TimelineTweet" === e?.item.itemContent.__typename) {
                                            const t = e?.item?.itemContent?.tweet_results;
                                            return L(t);
                                        }
                                    }),
                                    displayType: t,
                                };
                            }
                        }
                    });
                },
                P = (e) => {
                    const t = !!e?.instructions?.find((e) => "TimelineClearCache" === e?.type);
                    let r;
                    const n = e?.instructions?.find((e) => "TimelineAddEntries" === e?.type),
                        s = (0, i.Z)(n?.entries || [], (e) => {
                            if ("TimelineTimelineItem" === e?.content?.__typename && "TimelineTweet" === e?.content?.itemContent?.__typename) {
                                const t = e?.content?.itemContent?.tweet_results;
                                return L(t);
                            }
                            "TimelineTimelineCursor" === e?.content?.__typename && "Bottom" === e?.content?.cursorType && (r = e?.content?.value);
                        }),
                        o = e?.instructions?.filter((e) => "TimelineReplaceEntry" === e?.type);
                    return (
                        o?.forEach((e) => {
                            const t = e?.entry;
                            "TimelineTimelineCursor" === t?.content?.__typename && "Bottom" === t?.content?.cursorType && (r = t?.content?.value);
                        }),
                        { tweets: s, shouldClear: t, cursor: r }
                    );
                },
                O =
                    () =>
                    (e, t, { api: r }) =>
                        m._O(e, { params: { count: 20, requestContext: "launch", include_page_configuration: !0, entity_tokens: !1 }, request: r.withEndpoint(d.Z).fetchTVHomeMixerGraphQL })({ actionTypes: y.PP, context: "FETCH_TV_HOME_MIXER", meta: {} }, (e) => {
                            const t = [];
                            return e && t.push(y.eX.tvHomeLoaded(A(e))), t;
                        }),
                U =
                    (e) =>
                    (t, r, { api: n }) =>
                        m._O(t, { params: { count: 20, requestContext: "launch", include_page_configuration: !0, entity_tokens: !1, tweetId: e.tweetId, cursor: e.cursor }, request: n.withEndpoint(d.Z).fetchTweetRelatedVideosGraphQL })({ actionTypes: y.J9, context: "FETCH_RELATED_VIDEOS", meta: {} }, (t) => {
                            const r = [];
                            if (t) {
                                const n = P(t),
                                    i = n.tweets.filter((t) => t.id_str !== e.tweetId);
                                r.push(y.eX.tvRelatedVideosLoaded({ videos: i, cursor: n.cursor, shouldClear: n.shouldClear }));
                            } else r.push(y.eX.tvRelatedVideosFailedToLoad());
                            return r;
                        }),
                F =
                    (e) =>
                    (t, r, { api: n }) =>
                        m._O(t, { params: { deviceId: e.deviceId }, request: n.withEndpoint(d.Z).generatePinCodeGraphQL })({ actionTypes: y.Vc, context: "FETCH_TV_PIN_CODE", meta: {} }, (e) => {
                            const t = [];
                            return e && t.push(y.eX.tvPinCodeLoaded(e?.pinCode?.pin_code || "")), t;
                        }),
                Z = (e) => (t) =>
                    (0, o.F)(e.deviceId, e.pinCode)
                        .then((e) => {
                            if (void 0 !== e?.isVerified?.is_verified) return t(y.eX.tvDeviceIsVerified(!!e?.isVerified?.is_verified)), e;
                            t(y.eX.tvDeviceIsVerifiedCodeExpired());
                        })
                        .catch((e) => {
                            t(y.eX.tvDeviceIsVerifiedCodeExpired());
                        }),
                M =
                    (e) =>
                    (t, r, { api: n }) => {
                        t(y.eX.tvSearchStart(e.query, e.searchTab));
                        const i = { rawQuery: e.query, count: e.count || 20, cursor: e.cursor, querySource: e.querySource || "TypedQuery" },
                            s = e.product || "Top";
                        return ("bookmarks" === e.searchTab ? m._O(t, { params: i, request: n.withEndpoint(l.Z).fetchBookmarkSearch }) : m._O(t, { params: { ...i, product: s }, request: n.withEndpoint(l.Z).fetchSearchGraphQL }))({ actionTypes: y.IP, context: "FETCH_TV_SEARCH", meta: {} }, (t) => {
                            const r = [];
                            if (t)
                                if (e.withCategories) {
                                    const n = A(t);
                                    r.push(y.eX.tvSearchResults(n, e.query, void 0, !0, e.searchTab));
                                } else {
                                    const n = P(t);
                                    r.push(y.eX.tvSearchResults(n.tweets, e.query, n.cursor, n.shouldClear, e.searchTab));
                                }
                            return r;
                        });
                    },
                D =
                    (e) =>
                    (t, r, { api: i }) =>
                        m._O(t, { params: { screenName: e.screenName, count: 20, cursor: e.cursor }, request: i.withEndpoint(d.Z).fetchTVUserProfileGraphQL })({ actionTypes: y.K5, context: "FETCH_TV_USER_PROFILE", meta: {} }, (t) => {
                            const r = [];
                            if (t) {
                                const i = t?.user?.result?.profile_video_timeline?.timeline,
                                    s = P(i),
                                    o = A(i),
                                    a = ((e) => {
                                        if ("User" === e.user?.result?.__typename) return { ...(0, n.Fv)(e.user.result, _.Z).entities.users[e?.user?.result?.rest_id] };
                                    })(t);
                                if (!a) throw new Error(`failed to load user: ${e.screenName}`);
                                r.push(y.eX.tvUserProfileLoaded({ user: a, videos: s.tweets, cursor: s.cursor, modules: o, shouldClear: s.shouldClear }));
                            }
                            return r;
                        }),
                V =
                    (e) =>
                    (t, r, { api: n }) =>
                        m._O(t, { params: { trendId: e }, request: n.withEndpoint(d.Z).fetchTVTrendGraphQL })({ actionTypes: y.Eh, context: "FETCH_TV_TREND", meta: {} }, (e) => {
                            const t = [];
                            if (e) {
                                const r = e.trend?.result?.tv_trend_timeline?.timeline,
                                    n = A(r);
                                t.push(y.eX.tvTrendLoaded({ name: e.trend?.result?.core?.name || "", summary: e.trend?.result?.core?.summary || "", timeline: n }));
                            }
                            return t;
                        }),
                N =
                    (e) =>
                    (t, r, { api: n }) => {
                        t(y.eX.tvUpdateFollowingUser(e.screenName, !0));
                        return m._O(t, { params: { id_str: e.userId }, request: n.withEndpoint(u.Z).follow })({ actionTypes: y.tL, context: "TV_FOLLOW", meta: {} }, (t) => {
                            const r = [];
                            if (t) {
                                R(t, e.userId) || r.push(y.eX.tvUpdateFollowingUser(e.screenName, !1));
                            }
                            return r;
                        });
                    },
                H =
                    (e) =>
                    (t, r, { api: n }) => {
                        t(y.eX.tvUpdateFollowingUser(e.screenName, !1));
                        return m._O(t, { params: { id_str: e.userId }, request: n.withEndpoint(u.Z).unfollow })({ actionTypes: y.tL, context: "TV_UNFOLLOW", meta: {} }, (t) => {
                            const r = [];
                            if (t) {
                                R(t, e.userId) || r.push(y.eX.tvUpdateFollowingUser(e.screenName, !0));
                            }
                            return r;
                        });
                    },
                x =
                    (e) =>
                    (t, r, { api: n }) => {
                        t(y.eX.tvUpdateFriendship(e.screenName, e.notificationsEnabled));
                        return m._O(t, { params: { id: e.userId, device: e.notificationsEnabled }, request: n.withEndpoint(a.Z).updateFriendship })({ actionTypes: y.tL, context: "TV_UPDATE_NOTIFICATIONS", meta: {} });
                    },
                k =
                    (e) =>
                    (t, r, { api: n }) =>
                        m._O(t, { params: { focalTweetId: e.tweetId, ...(void 0 !== e.cursor && { cursor: e.cursor }) }, request: n.withEndpoint(s.Z).fetchTweetDetail })({ actionTypes: y.FQ, context: "TV_FETCH_TWEET_CONVERSATION", meta: {} }, (t) => {
                            const r = [];
                            if (t) {
                                const n = ((e) => {
                                        const t = e?.instructions?.find((e) => "TimelineAddEntries" === e?.type);
                                        return (0, i.Z)(t?.entries || [], (e, t) => {
                                            if ("TimelineTimelineModule" === e?.content?.__typename && "TimelineTweet" === e?.content?.items?.[0]?.item?.itemContent?.__typename) {
                                                const t = e?.content?.items?.[0]?.item?.itemContent?.tweet_results,
                                                    r = e?.sortIndex;
                                                return { tweet: L(t, !0), sortIdx: r };
                                            }
                                        });
                                    })(t),
                                    s = ((e) => {
                                        const t = e?.instructions?.find((e) => "TimelineAddEntries" === e?.type)?.entries;
                                        if (!t || 0 === t.length) return;
                                        const r = t[t.length - 1];
                                        return "TimelineTimelineCursor" === r?.content?.itemContent?.__typename && "Bottom" === r?.content?.itemContent?.cursorType ? r?.content?.itemContent?.value : void 0;
                                    })(t);
                                r.push(y.eX.tvTweetConversationResults(n, e.tweetId, s));
                            }
                            return r;
                        }),
                Q =
                    (e, t) =>
                    (r, n, { api: i }) =>
                        m._O(r, { params: { q: e.q, result_type: "users,topics,trending", src: "search_box" }, request: i.withEndpoint(c.Z).fetch })({ actionTypes: y.cJ, context: "FETCH_TV_SEARCH_TYPEAHEAD", meta: {} }, (r) => {
                            const n = [];
                            if (r && e.q === t.current) {
                                const t = r.users?.map((e) => ({ ...(0, T.gJ)(e, "remote"), type: "user" })) || [],
                                    i = r.topics?.map((e) => ({ ...e, type: "topic" })) || [];
                                n.push(y.eX.tvSearchTypeaheadResults({ users: t, topics: i, size: t.length + i.length }, e.q));
                            }
                            return n;
                        });
        },
        795181: (e, t, r) => {
            r.d(t, { BS: () => I, E3: () => T, M2: () => i, Np: () => h, XS: () => d, Yf: () => n, Z: () => l, _b: () => u, _c: () => S, bJ: () => o, bV: () => _, f1: () => E, fY: () => m, gw: () => b, hI: () => s, hx: () => w, hy: () => C, jT: () => a, rd: () => c, sz: () => y, te: () => f, wW: () => p });
            const n = "tv",
                i = "rweb/tv/TV_DEVICE_IS_VERIFIED",
                s = "rweb/tv/TV_DEVICE_IS_VERIFIED_CODE_EXPIRED",
                o = "rweb/tv/TV_HOME_LOADED",
                a = "rweb/tv/TV_HOME_RELOAD",
                d = "rweb/tv/TV_TREND_LOADED",
                c = "rweb/tv/TV_RELATED_VIDEOS_LOADED",
                l = "rweb/tv/TV_RELATED_VIDEOS_LOAD_FAILED",
                u = "rweb/tv/TV_USER_PROFILE_LOADED",
                p = "rweb/tv/TV_PIN_CODE_LOADED",
                E = "rweb/tv/TV_PLAYER_OPEN",
                _ = "rweb/tv/TV_PLAYER_CLOSE",
                m = "rweb/tv/TV_PLAYER_SET_VIDEO",
                T = "rweb/tv/TV_SEARCH_START",
                y = "rweb/tv/TV_SEARCH_RESULTS",
                h = "rweb/tv/TV_USER_SEARCH_RESULTS",
                f = "rweb/tv/TV_SEARCH_RESULTS_CLEAR",
                I = "rweb/tv/TV_SEARCH_TYPEAHEAD_RESULTS",
                S = "rweb/tv/TV_UPDATE_FOLLOWING_USER",
                C = "rweb/tv/TV_UPDATE_FRIENDSHIP",
                w = "rweb/tv/TV_TWEET_CONVERSATION_RESULTS",
                b = "rweb/tv/TV_RELATED_VIDEOS_CLEAR";
        },
        383675: (e, t, r) => {
            r.d(t, { R: () => d, Z: () => a });
            var n = r(503768),
                i = r(644829),
                s = r(750085),
                o = r(218951);
            const a = ({ endpointParams: e, endpointUrl: t, isUserRefreshable: r, timelineId: n }) => (0, o.Z)({ timelineId: n, isUserRefreshable: r, network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchGeneric, getEndpointParams: ({ count: r, cursor: n }) => ({ ...e, cursor: "string" == typeof n ? n : void 0, count: r, endpointUrl: t }) }, context: "FETCH_TIMELINE", perfKey: "generic" }),
                d = (e, t) => (0, o.Z)({ timelineId: `generic-graphql-timeline-${e}`, isUserRefreshable: t, network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchGenericTimelineById, getEndpointParams: ({ count: t, cursor: r }) => ({ cursor: "string" == typeof r ? r : void 0, count: t, timelineId: e }) }, formatResponse: s.Z, context: "FETCH_GENERIC_TIMELINE_GQL", perfKey: "genericGQL" });
        },
        652881: (e, t, r) => {
            r.d(t, { C2: () => h, Pq: () => l, ZP: () => T, s8: () => y });
            r(136728);
            var n = r(66351),
                i = (r(585488), r(483557)),
                s = r(703710),
                o = r(750085),
                a = r(466015),
                d = r(538327),
                c = r(218951);
            const l = Object.freeze({ pinnedLists: "pinnedLists", ownedSubscribedList: "ownedSubscribedList" }),
                u = (e, t) => `${e}-list-${t}`,
                p = (e, t, r = d.P.List, n = Date.now().toString()) => a.WE({ id: e, customEntryId: t, displayType: r, sortIndex: n });
            function E(e) {
                return e.startsWith("pinned-list-module") || e.startsWith("pinnedListModule");
            }
            function _(e) {
                return e.startsWith("owned-subscribed-list-module") || e.startsWith("ownedSubscribedListModule");
            }
            const m = (e) => (e ? (0, c.Z)({ context: "FETCH_LISTS_MANAGEMENT_PAGE_TIMELINE", formatResponse: o.Z, network: { query: n.Z, variables: ({ count: e, cursor: t }, r) => ({ count: e, cursor: "string" == typeof t ? t : void 0, isListMemberTargetUserId: "0", timelineId: "listsManagementPage", ...(0, s.d)(r.apiClient.featureSwitches) }) }, initialFetchCount: 100, perfKey: "listsManagementPageGraphQL", timelineId: "listsManagementPage" }) : (0, c.Z)({ context: "FETCH_LISTS_MANAGEMENT_PAGE_TIMELINE", formatResponse: o.Z, network: { getEndpoint: (e) => e.withEndpoint(i.ZP).fetchListsManagementPageTimeline, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, initialFetchCount: 100, perfKey: "listsManagementPageGraphQL", timelineId: "listsManagementPage" })),
                T = m;
            function y(e, t, r, n) {
                const i = [],
                    s = t(),
                    o = m(e),
                    a = o.selectEntries(s),
                    c = r === l.pinnedLists,
                    T = c ? E : _,
                    y = a.find(({ entryId: e }) => T(e));
                if (y) {
                    const e = u(y.entryId, n),
                        t = c ? p(n, e, d.P.ListTile, "-1") : p(n, e, d.P.ListWithPin),
                        r = !c;
                    c && (i.push(o.removeEntry(`${y.entryId}-emptyStateMessage`, !0)), i.push(o.removeEntry(`${y.entryId}-messageprompt-PinnedListsEmptyPrompt`, !0))), i.push(o.injectTimelineModuleEntry(t, y.entryId, { atTop: r }));
                }
                return i;
            }
            function h(e, t, r, n) {
                const i = [],
                    s = t(),
                    o = m(e),
                    a = o.selectEntries(s),
                    d = r === l.pinnedLists ? E : _,
                    c = a.find(({ entryId: e }) => d(e));
                if (c) {
                    const e = u(c.entryId, n);
                    i.push(o.removeEntry(e, !0));
                    const t = `${c.entryId}-${n}`;
                    i.push(o.removeEntry(t, !0));
                }
                return i;
            }
        },
        780936: (e, t, r) => {
            r.d(t, { A: () => d, Z: () => a });
            var n = r(483557),
                i = r(750085),
                s = r(466015),
                o = r(218951);
            const a = (e) => (0, o.Z)({ timelineId: `listMembersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchMembersGraphQL, getEndpointParams: ({ count: t, cursor: r }) => ({ count: t, cursor: "string" == typeof r ? r : void 0, listId: e }) }, context: "FETCH_MEMBERS", perfKey: "membersGraphQL", formatResponse: i.Z }),
                d = (e, t) => (r, n) => {
                    r([...t].map((t) => e.removeEntry((0, s._Y)(t))));
                };
        },
        823885: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(483557),
                i = r(750085),
                s = r(218951);
            const o = (e) => (0, s.Z)({ timelineId: `listMembershipsGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchMembershipsGraphQL, getEndpointParams: ({ count: t, cursor: r }) => ({ count: t, cursor: "string" == typeof r ? r : void 0, userId: e }) }, context: "FETCH_MEMBERSHIPS", perfKey: "membershipsGraphQL", formatResponse: i.Z });
        },
        164692: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(483557),
                i = r(750085),
                s = r(218951);
            const o = (e, t) => (0, s.Z)({ timelineId: `listOwnershipsGraphQL-${t}`, network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchOwnershipsGraphQL, getEndpointParams: ({ count: r, cursor: n }) => ({ count: r, cursor: "string" == typeof n ? n : void 0, userId: e, targetUserId: t }) }, context: "FETCH_OWNERSHIPS", perfKey: "ownershipsGraphQL", formatResponse: i.Z });
        },
        78259: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(483557),
                i = r(750085),
                s = r(218951);
            const o = (e) => (0, s.Z)({ timelineId: `listSubscribersGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchSubscribersGraphQL, getEndpointParams: ({ count: t, cursor: r }) => ({ count: t, cursor: "string" == typeof r ? r : void 0, listId: e }) }, context: "FETCH_SUBSCRIBERS", perfKey: "subscribersGraphQL", formatResponse: i.Z });
        },
        909622: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(807469),
                i = r(750085),
                s = r(218951);
            const o = (e) => (0, s.Z)({ timelineId: `topics-sidebar-graphql-${e}`, network: { getEndpoint: (e) => e.withEndpoint(n.ZP).fetchTopicsToFollowSidebar, getEndpointParams: () => ({ userId: e }) }, formatResponse: i.Z, context: "FETCH_TOPICS_SIDEBAR", perfKey: "topics-sidebar-GraphQL" });
        },
        735313: (e, t, r) => {
            r.d(t, { Z: () => i });
            var n = r(87063);
            const i = (e, t) => (r, i, s) => {
                if (e.selectInitialFetchStatus(i()) === n.Z.LOADING) return Promise.resolve();
                const o = e.selectTimeline(i());
                return (
                    r(e.deleteTimeline()),
                    r(e.fetchInitial(t))
                        .then(() => {
                            o && r(e.restoreInjections(o.injections, o.timelineModuleInjections));
                        })
                        .catch((t) => {
                            if (!o || e.selectUnavailableReason(i())) return Promise.reject(t);
                            r(e.restoreTimeline(o));
                        })
                );
            };
        },
        929378: (e, t, r) => {
            r.d(t, { Z: () => a, t: () => o });
            var n = r(323265);
            const i = "arkose-subtask",
                s = "arkose",
                o = Object.freeze({ passive: "PASSIVE", interactive: "INTERACTIVE" }),
                a = {
                    loadIframe: (e, t, r, o) => {
                        e.scribe({ action: "load", data: { items: [{ guest_id: t, os: n.ZP.osString(), arkose_keys: { mobile: r, web: o } }] }, element: s, page: i });
                    },
                    loadIframeFailed: (e, t, r, o) => {
                        e.scribe({ action: "fail", data: { items: [{ guest_id: t, os: n.ZP.osString(), arkose_keys: { mobile: r, web: o } }] }, element: s, page: i });
                    },
                    completeChallenge: (e, t, r, o, a) => {
                        e.scribe({ action: "complete", data: { items: [{ guest_id: t, os: n.ZP.osString(), challenge_type: r, arkose_keys: { mobile: o, web: a } }] }, element: s, page: i });
                    },
                    suppressedChallenge: (e, t, r, a) => {
                        e.scribe({ action: "show", data: { items: [{ guest_id: t, challenge_type: o.passive, os: n.ZP.osString(), arkose_keys: { mobile: r, web: a } }] }, element: s, page: i });
                    },
                    shownChallenge: (e, t, r, a) => {
                        e.scribe({ action: "show", data: { items: [{ guest_id: t, challenge_type: o.interactive, os: n.ZP.osString(), arkose_keys: { mobile: r, web: a } }] }, element: s, page: i });
                    },
                };
        },
        620243: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(587510),
                i = (r(585488), r(535338));
            const s = n.Z,
                o = () => {
                    const { viewer: e } = (0, i.p)(s, {});
                    return e.user_results.result || {};
                };
        },
        918588: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(380327),
                i = (r(585488), r(712696)),
                s = r.n(i);
            const o = n.Z;
            const a = function () {
                const e = s()(o, {});
                return (e.quick_promote_advertiser_accounts?.items ?? []).reduce((e, t) => e + (t?.campaigns?.total_count ?? 0), 0);
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9.140a0bba.js.map

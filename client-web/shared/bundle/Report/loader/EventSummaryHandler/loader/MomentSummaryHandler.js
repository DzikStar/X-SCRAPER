"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Report~loader.EventSummaryHandler~loader.MomentSummaryHandler"],
    {
        232418: (e, t, n) => {
            n.d(t, { $$: () => o, Ar: () => s, q8: () => i });
            const i = (e) => {
                    const t = e && e.cover_media && e.cover_media.render && e.cover_media.render.crops && e.cover_media.render.crops.landscape_16_9;
                    return t && [t];
                },
                s = Object.freeze({ private: "private", public: "public", unlisted: "unlisted" }),
                o = Object.freeze({ CurationStudio: "CURATION_STUDIO", MomentMakerLite: "MOMENT_MAKER_LITE", MomentMakerMobile: "MOMENT_MAKER_MOBILE", MomentMakerPro: "MOMENT_MAKER_PRO" });
            Object.freeze({ moveTweet: "MOVE", moveAnnotation: "MOVE_ANNOTATION", removeTweet: "DELETE", deleteAnnotation: "DELETE_ANNOTATION", addTweet: "ADD", addAnnotation: "ADD_ANNOTATION", updateAnnotation: "UPDATE_ANNOTATION" }), Object.freeze({ LANDSCAPE_16_9: "LANDSCAPE_16_9", SQUARE: "SQUARE" });
        },
        197914: (e, t, n) => {
            n.d(t, { Z: () => p });
            var i = n(112510),
                s = n(502909),
                o = n(600823),
                a = n(557281);
            const r = (e, t, n) => {
                    const i = e.entities[t.meta.entityId],
                        s = i && i.liveEventDetails;
                    return /_REQUEST$/.test(t.type) && s ? { ...e, entities: { ...e.entities, [s.id_str]: { ...i, liveEventDetails: { ...s, remind_me_subscription: { ...s.remind_me_subscription, ...n(s.remind_me_subscription) } } } } } : e;
                },
                d = (0, s.ZP)({
                    namespace: "liveEvents",
                    fetchOneContext: "FETCH_LIVE_EVENT",
                    fetchOneEndpoint: (e) => (t, n) =>
                        e
                            .withEndpoint(i.Z)
                            .fetchLiveEventMetadata(t, n)
                            .then((e) => {
                                const { eventId: n } = t;
                                return c(e, n);
                            }),
                    fetchOneParams: ([e], t, n) => ({ eventId: e, ...t }),
                    withApiErrorHandler: !1,
                    customActions: { subscribe: { reducer: (e, t) => r(e, t, (e) => ({ subscribed: !0 })), getParams: (e, t) => ({ eventId: e, params: t }), getApiMethod: (e) => e.withEndpoint(i.Z).updateRemindMeSubscription }, unSubscribe: { reducer: (e, t) => r(e, t, (e) => ({ subscribed: !1 })), getParams: (e, t) => ({ eventId: e, params: t }), getApiMethod: (e) => e.withEndpoint(i.Z).updateRemindMeSubscription } },
                });
            (d.selectHydratedTweet = (e, t) => e.tweets && (0, a.F)(e.tweets, {}, e.users, {}, t)),
                (d.selectIsTOO = (e, t) => {
                    const n = t ? d.select(e, t) : void 0;
                    return !!n && !!n.liveEventDetails && !n.liveEventDetails.attribution_user_id;
                });
            const c = (e, t) => {
                    const { entities: n, result: i } = e,
                        { audiospaces: s, broadcasts: o, liveEvents: a, slates: r, tweets: d, users: c, ...p } = n,
                        m = { liveEventDetails: a[t], audiospaces: s, broadcasts: o, response: i.response, slates: r, tweets: d, users: c };
                    return { entities: { ...p, liveEvents: { [t]: m } } };
                },
                p = o.Z.register(d);
        },
        228356: (e, t, n) => {
            n.d(t, { Z: () => f });
            var i = n(360917),
                s = n.n(i),
                o = n(490359),
                a = n(161821),
                r = n(716406),
                d = n(99107),
                c = n(506899),
                p = n(693196);
            const m = ({ apiClient: e }) => ({
                create: (t, n) => e.post("moments/create", t, {}, { ...n, "content-type": "application/json" }).then((e) => e && e.created_moment && e.created_moment.moment),
                updateMetadata: (t, n) => e.post(`moments/update/${t.id}`, t, {}, { ...n, "content-type": "application/json" }).then((e) => e && e.updated_moment && e.updated_moment.moment),
                curateTimeline: (t, n) => e.post(`moments/curate/${t.id}`, t, {}, { ...n, "content-type": "application/json" }).then((e) => e && e.updated_moment && e.updated_moment.moment),
                publish: (t, n) => e.post(`moments/publish/${t.id}`, {}, {}, { ...n, "content-type": "application/json" }).then((e) => e && e.updated_moment && e.updated_moment.moment),
                delete: (t, n) => e.post(`moments/delete/${t.moment_id}`, {}, {}, { ...n, "content-type": "application/json" }),
                curateTweetMetadata(t, n) {
                    const i = { updates: [t.promotedMedia], use_staging_timeline: !0 };
                    return e.post(`moments/curate_metadata/${t.id}`, i, {}, { ...n, "content-type": "application/json" }).then((e) => e?.updated_moment?.moment);
                },
                fetchMoment(t, n) {
                    const i = { bypass_cache: !0, cards_platform: d.i5, dedupe_pages: !0, get_annotations: !0, hydration_count: 100, include_cards: 1, staging: !0, tweet_mode: "extended", v: 1473704494 };
                    return e.get(`moments/capsule/${t.id}`, i, { ...n, "content-type": "application/json" }).then((e) => {
                        const t = { ...e.moment, pages: e.pages, tweets: e.tweets };
                        return (0, c.Fv)(t, p.Z);
                    });
                },
            });
            var _ = n(232418),
                u = n(466015),
                l = n(917799),
                E = n(56519),
                T = n(502909),
                v = n(600823),
                M = n(197914),
                h = n(390387),
                O = n(836255),
                A = n(730717),
                w = n(644829),
                b = n(218951);
            const I = (e, t, n = !1) => (0, b.Z)({ timelineId: `user-moments-${e}`, network: { getEndpoint: (e) => e.withEndpoint(w.Z).fetchUserMoments, getEndpointParams: (i) => ({ ...i, activeTeamId: t, includeCapsuleContents: n, userId: e }) }, context: "FETCH_USER_MOMENTS", perfKey: "userMoments" });
            var y = n(919022);
            const P = (0, T.ZP)({ namespace: "moments" }),
                g = (0, T.tb)(P, { context: "FETCH_MOMENT", endpoint: (e) => e.withEndpoint(m).fetchMoment, params: (e, t, n) => ({ id: e[0], ...t }) }),
                N = (e) => (t) => {
                    if (!t || !t.id) return [];
                    const n = e ? I(e) : void 0,
                        i = u.P5({ id: t.id, sortIndex: Date.now().toString() }),
                        s = n ? [n.removeEntry(`moment-${t.id}`), n.injectEntry(i, { atTop: !0 })] : [];
                    return [(0, E.dP)({ moments: { [t.id]: t } }), ...s];
                },
                C = (e, t) => (t && e ? { ...e, original_info: { ...e?.original_info, focus_rects: (0, a.Z)(t) } } : e),
                Z = {
                    ...P,
                    ...g,
                    create:
                        (e) =>
                        (t, n, { api: i }) => {
                            const s = (0, h.x0)(n()),
                                o = !e || !e.hasOwnProperty("isProductionOnly") || e.isProductionOnly;
                            return l._O(t, { request: i.withEndpoint(m).create, params: { title: "", description: "", is_production_only: o, has_owner_granted_location_permission: !0 } })({ actionTypes: Z.actionTypes.CREATE, context: "CREATE_MOMENT" }, N(s));
                        },
                    curateTimeline:
                        (e) =>
                        (t, n, { api: i }) =>
                            l._O(t, { request: i.withEndpoint(m).curateTimeline, params: { actions: e.actions, id: e.id, use_staging_timeline: e.useStagingTimeline || !0 } })({ actionTypes: Z.actionTypes.OPTIMISTIC_UPDATE, context: "CURATE_MOMENT_TIMELINE" }),
                    promoteTweet:
                        (e, t) =>
                        (n, i, { api: s }) => {
                            const o = (0, h.x0)(i());
                            return l._O(n, { request: s.withEndpoint(m).curateTweetMetadata, params: { id: e, promotedMedia: t } })({ actionTypes: Z.actionTypes.OPTIMISTIC_UPDATE, context: "MOMENTS_TOGGLE_PROMOTED_TWEET" }, N(o));
                        },
                    publish:
                        (e) =>
                        (t, n, { api: i }) =>
                            l._O(t, { request: i.withEndpoint(m).publish, params: { id: e } })({ actionTypes: Z.actionTypes.OPTIMISTIC_UPDATE, context: "PUBLISH_MOMENT" }, ((e) => (t, n) => (n ? [] : [(0, A.Z)(e, "recap").deleteTimeline()]))(e)),
                    updateMetadata:
                        (e) =>
                        (t, n, { api: i }) => {
                            const s = (0, h.x0)(n());
                            return l._O(t, { request: i.withEndpoint(m).updateMetadata, params: { cover: e?.cover, description: e?.description, id: e?.id, nsfw: e?.nsfw, title: e?.title, visibility_mode: e?.visibility_mode } })({ actionTypes: Z.actionTypes.OPTIMISTIC_UPDATE, context: "UPDATE_MOMENT_METADATA" }, ((e, t) => (n, i) => (i ? [] : [...N(e)(n), M.Z.deleteOne(t)]))(s, e.id));
                        },
                    selectAuthor: (e, t) => {
                        const n = Z.select(e, t),
                            i = n?.author?.id_str || (0, o.Z)((0, a.Z)(n?.users || {}));
                        return i ? y.ZP.select(e, i) : void 0;
                    },
                    selectAssociatedEventId: (e, t) => {
                        const n = Z.select(e, t);
                        return n?.associated_event_id;
                    },
                    selectCoverMedia: (e, t) => {
                        const n = Z.select(e, t),
                            i = n && n.cover_media && n.cover_media.media && n.cover_media.media.media_id,
                            s = Z.selectCoverTweet(e, t),
                            o = i && s && s.extended_entities && s.extended_entities.media && s.extended_entities.media.find((e) => e && e.id_str === i);
                        return C(o, n?.cover_media?.render?.crops);
                    },
                    selectCoverTweet: (e, t) => {
                        const n = Z.select(e, t),
                            i = n && n.cover_media && n.cover_media.tweet_id;
                        return i ? O.Z.select(e, i) : void 0;
                    },
                    selectHasUnpublishedChanges: (e, t) => {
                        const n = Z.select(e, t);
                        return !!n?.has_unpublished_changes;
                    },
                    selectIsCurationStudioMoment: (e, t) => {
                        const n = Z.select(e, t),
                            i = n?.creation_source;
                        return i === _.$$.CurationStudio;
                    },
                    selectIsTOO: (e, t) => {
                        const n = Z.select(e, t);
                        return !!n && !n.author;
                    },
                    selectLastPublishedTime: (e, t) => {
                        const n = Z.select(e, t);
                        return n?.last_publish_time;
                    },
                    selectTweets: (e, t) => {
                        const n = Z.select(e, t);
                        return n ? (0, r.Z)(n.tweets || {}, (t) => O.Z.selectHydrated(e, t)) : s();
                    },
                    selectVisibilityMode: (e, t) => {
                        const n = Z.select(e, t),
                            { curation_metadata: i } = n || {},
                            { visibility_mode: s } = i || {};
                        return s || n?.visibility_mode || _.Ar.private;
                    },
                },
                f = v.Z.register(Z);
        },
        730717: (e, t, n) => {
            n.d(t, { Z: () => o });
            var i = n(644829),
                s = n(218951);
            const o = (e, t) => (0, s.Z)({ context: "FETCH_LIVE_EVENT_TIMELINE", network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchLiveEventTimeline, getEndpointParams: (n) => ({ eventId: e, timeline_id: t, ...n }) }, perfKey: "liveEvent", timelineId: `liveEvent-${e}-${t}` });
        },
        490359: (e, t, n) => {
            n.d(t, { Z: () => i });
            const i = (e) => (Array.isArray(e) ? e[0] : void 0);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Report~loader.EventSummaryHandler~loader.MomentSummaryHandler.8d8f1bfa.js.map

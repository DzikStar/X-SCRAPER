"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-8ed0fac5"],
    {
        810430: (e, t, i) => {
            i.d(t, { AJ: () => h, AZ: () => _, BG: () => K, Ju: () => p, Op: () => R, Q_: () => P, Qv: () => O, Tr: () => I, a9: () => L, aE: () => m, d5: () => b, fF: () => x, mZ: () => q, r5: () => j, tO: () => k, to: () => D, vy: () => F, yC: () => $, yU: () => N, zd: () => u });
            i(543673), i(240753), i(128399);
            var n = i(688715),
                r = i(309854),
                s = i(284702),
                a = i(111677),
                o = i.n(a),
                d = i(282874),
                c = i(912021),
                l = i(337637),
                E = i(197914);
            const p = (e) => (0, n.ju)(`https://x.com/i/events/${e}`),
                _ = o().c39b0e24,
                u = o().ad16f482,
                m = "1",
                v = "RUNNING",
                T = { "600x1200": 4, "1024x2048": 3, "340x680": 2, "150x150": 1 },
                f = o().i0ed3f4e,
                I = Object.freeze({ LIVE_BROADCAST: "liveBroadcast", REPLAY_BROADCAST: "replayBroadcast", AUDIOSPACE: "audiospace", VOD: "vod", GIF: "gif", SLATE: "slate" }),
                h = Object.freeze({ New: "New" }),
                b = (e, t, i) => {
                    if (i && i.url) return ((e) => -1 !== e.url.indexOf("pscp.tv"))(i) ? [...(e ? [{ width: 128, height: 128, uri: e }] : []), ...(t ? [{ width: 360, height: 360, uri: t }] : []), { width: i.width, height: i.height, uri: i.url }] : void 0;
                },
                S = (0, c.Z)((e, t) => e.slates && t && e.slates[t]),
                w = (e, t) => {
                    const i = (e.slate || e.fallback_slate || {}).id,
                        n = ((e, t) => {
                            const i = S(e, t),
                                n = (i && i.variants) || [];
                            return (0, d.Z)(n, (e) => {
                                const { name: t } = e;
                                return T[t] || 0;
                            });
                        })(t, i),
                        s = ((e, t, i) => {
                            const n = S(e, t);
                            let s;
                            if (i && n) {
                                const { focus_rects: i = [], tweet_id: a } = n;
                                if (((s = i.length ? i : void 0), !s && a)) {
                                    const i = e?.tweets && e?.tweets[a],
                                        n = (i?.extended_entities?.media || []).find((e) => e.media_key === t);
                                    s = n && r.Z.getCropCandidates(n);
                                }
                            }
                            return s;
                        })(t, i, n),
                        a = ((e, t, i) => (e ? t.slates[i].label : void 0))(n, t, i),
                        { attribution: o, tweet_id: c } = S(t, i) || {},
                        l =
                            ((e, t) => {
                                if (t.broadcast && t.broadcast.id) {
                                    const i = t.broadcast.id,
                                        n = g(e, i);
                                    return n && { small: n.image_url_small, medium: n.image_url_medium };
                                }
                            })(t, e) || {},
                        E = n && b(l.small, l.medium, n);
                    return i && n ? { id: i, image: n, imageAttribution: o, periscopeVariants: E, cropCandidates: s, label: a, tweetId: c } : void 0;
                },
                R = (e, t) => {
                    const i = ((e) => {
                            const { attribution_user_id: t } = e.liveEventDetails;
                            return e.users && t ? e.users[t] : void 0;
                        })(t),
                        { category: n, description: r, description_entities: s, remind_me_subscription: a, short_title: o, time_string: d, title: c } = t.liveEventDetails;
                    return { author: i, category: n, description: r, descriptionEntities: s, eventId: e, remindMeSubscription: a, shortTitle: o || c, timeString: d, title: c };
                },
                g = (e, t) => (e.broadcasts && t ? e.broadcasts[t] : void 0),
                y = (e, t) => {
                    const { extended_entities: i = {} } = e,
                        { media: n = [] } = i;
                    return n.find((e) => e.media_key === t || "photo" !== e.type);
                },
                C = (e, t, i) => {
                    const { media: n = {} } = e,
                        { mediaEntity: r } = n;
                    return !r || (r.broadcast_id !== t && r.media_tweet_id !== i) ? void 0 : e.promotedContent;
                },
                A = (e, t, i, n, r) => {
                    const s = t && n ? y(t, n) : void 0,
                        a = g(i, e),
                        o = a ? e : void 0,
                        d = a?.media_key,
                        c = a?.status,
                        l = a?.twitter_user_id,
                        E = a?.user_display_name,
                        p = a?.username,
                        _ = a?.width,
                        u = a?.height,
                        m = a?.broadcast_source,
                        T = a?.camera_rotation,
                        f = a?.image_url,
                        I = a?.media_id,
                        h = ((e) => !!e && e.state === v)(a);
                    return { mediaId: I, coverTweet: t, coverMedia: s, broadcastId: o, broadcastMediaKey: d, broadcastTitle: c, broadcastTwitterId: l, broadcastDisplayName: E, broadcastUsername: p, broadcastWidth: _, broadcastHeight: u, broadcastThumbnail: f, broadcastSource: m, broadcastOrientation: T, isLive: h, promotedContent: r && C(r, o, n) };
                },
                O = (e, t) => (e && e.image ? { media_url_https: e.image.url, original_info: { focus_rects: e.cropCandidates, height: e.image.height, width: e.image.width }, ext_alt_text: t ? t.ext_alt_text : f, id_str: e.id, expanded_url: "", type: "photo" } : void 0),
                Z = (e, t) => t !== K.SHOP || e,
                L = (e, t, i, n) => {
                    const r = t.liveEventDetails.timelines || [],
                        s = r.length ? r[0].timeline_id : m,
                        a = r.length ? r[0].hashtag : void 0,
                        o = r.length ? r[0].compose_semantic_core_id : void 0;
                    let d,
                        c,
                        l = 0;
                    const E = i && r.some((e) => e.timeline_id === i),
                        p = Z(n, i),
                        _ = r
                            .filter(({ timeline_id: e }) => Z(n, e))
                            .map(({ compose_semantic_core_id: t, customization_info: n, hashtag: r, label_type: a, timeline_id: o, timeline_source_id: p, timeline_source_type: _, title: u }, m) => {
                                const v = o === s;
                                return ((E && o === i) || v) && ((l = m), (d = r), (c = t)), { isActive: () => (E ? o === i : v), to: { pathname: `/i/events/${e}`, query: { timeline: o } }, label: u, labelType: a && h[a], customizationInfo: n, hashtag: r, timelineId: o, timelineSourceId: p, timelineSourceType: _ };
                            }),
                        u = d || a;
                    return { composeDetails: { composeSemanticCoreId: c || o, ...(u ? { defaultText: ` ${u}`, positionCursorAtBeginning: !0 } : { defaultText: "" }) }, eventId: e, hashtag: u, timelineId: E && p && i ? i : s, timelineIndex: l, timelineLinks: _ };
                },
                D = (e, t) => {
                    if (!e) return;
                    const i = t && U(e, t),
                        n = P(e);
                    return i || e[n];
                },
                P = (e) => {
                    const t = (0, l.Z)(e, (e) => e.selected);
                    return -1 === t ? 0 : t;
                },
                U = (e, t) => e && e.find((e) => e.id === t),
                N = (e) => {
                    const t = e?.response?.polling_interval_seconds;
                    return t && t > 0 ? t : 0;
                },
                x = (e) => {
                    const { score: t } = e?.response || {};
                    return t && t.data && t.data.moments ? t.data : void 0;
                },
                F = (e) => e?.response?.betting_odds,
                $ = (e, t) => {
                    const { carousel: i } = e.response,
                        n = (i || []).filter((e) => e.moment).length > 0;
                    return (i || [])
                        .filter((e) => !e.moment)
                        .map((i) => {
                            let r;
                            const { entry_id: s } = i,
                                a = w(i, e),
                                o = a && a.id,
                                d = (i.tweet_media && i.tweet_media.id) || (a && a.tweetId),
                                c = d ? E.Z.selectHydratedTweet(e, d) : void 0,
                                l = A(s, c, e, o, t);
                            let p;
                            if (i.broadcast) {
                                const t = e.broadcasts ? e.broadcasts[i.broadcast.id] : void 0;
                                (p = (t && t.twitter_user_id && e.users && e.users[t.twitter_user_id]) || void 0), (r = t ? M(p, t) : void 0);
                            } else if (i.audiospace) {
                                const t = e.audiospaces ? e.audiospaces[i.audiospace.id] : void 0;
                                (p = (t && t.creator_twitter_user_id && e.users && e.users[t.creator_twitter_user_id]) || void 0), (r = t ? V(p, t) : void 0);
                            } else if ((i.slate && d) || i.tweet_media) {
                                const t = d && e.tweets ? e.tweets[d] : void 0;
                                (p = t && e.users ? e.users[t.user] : void 0), (r = p ? H(p, !!i.tweet_media, o, t, e) : void 0);
                            } else i.slate && a && (r = { type: I.SLATE });
                            return r || !a || i.tweet_media || (r = { type: I.SLATE }), !Q(p) && r && a ? { id: s, carouselItemInfo: { ...r, socialProof: i.social_proof }, mediaDetails: l, slate: a, selected: !!i.selected, isMoment: n } : void 0;
                        })
                        .filter(Boolean);
                },
                Q = (e) => (e && (e.blocking || e.blocked_by)) || !1,
                k = Object.freeze({ TWITTER: "twitter", PERISCOPE: "periscope" }),
                M = (e, t) => ({ verified: !!e && e.verified, screenName: e ? e.screen_name : void 0, name: e ? e.name : t.user_display_name, userId: e ? e.id_str : t.user_id, type: t.state === v ? I.LIVE_BROADCAST : I.REPLAY_BROADCAST, accountType: e ? k.TWITTER : k.PERISCOPE, profileImageUrl: e ? e.profile_image_url_https : void 0 }),
                V = (e, t) => ({ audiospace: { ...t, hostPalette: e?.profile_image_extensions_media_color?.palette || [] }, verified: !!e && e.verified, screenName: e ? e.screen_name : t.host.username, name: e ? e.name : t.host.display_name, userId: e ? e.id_str : t.creator_twitter_user_id, type: I.AUDIOSPACE, accountType: e ? k.TWITTER : k.PERISCOPE, profileImageUrl: e ? e.profile_image_url_https : t.host.avatar_url }),
                H = (e, t, i, n, r) => {
                    let a, o, d;
                    if (t && n && i) {
                        const e = y(n, i);
                        if (e) {
                            const { type: t } = e;
                            o = z(t);
                            const i = s.Z.getVideoFromCoverMedia(e),
                                { source_user_id_str: n, video_info: c } = i || {};
                            (a = c && c.duration_millis), (d = n && G(n, r));
                        }
                    } else o = I.SLATE;
                    const { id_str: c, name: l, screen_name: E, verified: p } = d || e || {};
                    return o ? { accountType: k.TWITTER, verified: p, screenName: E, name: l, type: o, playbackDuration: a, userId: c } : void 0;
                },
                G = (e, t) => t.users && t.users[e],
                z = (e) => {
                    switch (e) {
                        case "animated_gif":
                            return I.GIF;
                        case "vine":
                        case "video":
                            return I.VOD;
                        default:
                            return;
                    }
                },
                j = (e) => {
                    let t;
                    if (e) {
                        const i = new URL(e).pathname.split("/");
                        t = i[i.length - 1];
                    }
                    return t;
                },
                B = (e) => !!e && !!e.carouselItemInfo && e.carouselItemInfo.type !== I.GIF && e.carouselItemInfo.type !== I.AUDIOSPACE && e.carouselItemInfo.type !== I.SLATE,
                q = (e, t = []) => {
                    const i = e + 1,
                        n = t.slice(i).findIndex(B);
                    return n > -1 ? n + i : n;
                },
                K = Object.freeze({ SHOP: "shop" });
        },
        62338: (e, t, i) => {
            i.d(t, { y: () => n });
            const n = (e) => {
                if (e) {
                    const t = Math.round(e / 1e3),
                        i = t % 60,
                        n = i < 10 ? `0${i}` : i,
                        r = (t - i) / 60;
                    if (r > 60) {
                        const e = r % 60;
                        return `${Math.floor(r / 60)}:${e % 60 < 10 ? `0${e}` : e}:${n}`;
                    }
                    return `${r}:${n}`;
                }
            };
        },
        408686: (e, t, i) => {
            i.d(t, { Qr: () => a, n8: () => s });
            var n = i(803224),
                r = i(411240);
            const s = (e) => {
                    const t = e?.[0]?.placement?.scrollY();
                    return 0 === t ? (0, r.Z)(e, (e) => (e.placement ? e.placement.distanceToTop() : Number.MAX_VALUE)) : (0, r.Z)(e, (e) => (e.placement ? e.placement.distanceToCenter() : Number.MAX_VALUE));
                },
                a = (e) => {
                    const t = e.filter((e) => e.playbackPriority === n.W.DOCKABLE);
                    return t.length ? t[0] : s(e);
                };
        },
        940847: (e, t, i) => {
            i.d(t, { V: () => c, x: () => d });
            i(136728);
            var n = i(307859),
                r = i(917799);
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
                d =
                    (e) =>
                    (t, i, { api: a }) =>
                        r._O(t, { request: a.withEndpoint(n.Z).reportTrend, params: { trendId: e } })({ actionTypes: s, context: "REPORT_TREND", meta: {} }, (e) => {
                            const t = [];
                            return e && t.push(o.aiTrendReport()), t;
                        }),
                c =
                    (e, t) =>
                    (i, s, { api: d }) =>
                        r._O(i, { request: d.withEndpoint(n.Z).actionTrend, params: { trendId: e, action: t } })({ actionTypes: a, context: "ACTION_TREND", meta: {} }, (e) => {
                            const t = [];
                            return e && t.push(o.aiTrendAction()), t;
                        });
        },
        148843: (e, t, i) => {
            i.d(t, { Z: () => l });
            var n = i(307859),
                r = i(502909),
                s = i(600823);
            const a = (0, r.ZP)({ namespace: "aitrends", entityIsComplete: (e, t = ["page"]) => !!e && t.every((t) => t in e && null !== e[t] && void 0 !== e[t]) }),
                o = (0, r.tb)(a, { context: "FETCH_AI_TREND", endpoint: (e) => e.withEndpoint(n.Z).aiTrendByRestId, params: ([e], t) => ({ trendId: e, ...t }) }),
                d = {
                    save: (0, r.Tx)(a, "save", {
                        getParams: (e, { isSaved: t, trendId: i } = {}) => ({ trendId: i, isSaved: t }),
                        getApiMethod: (e) => e.withEndpoint(n.Z).saveTrend,
                        context: "SAVE_TREND",
                        mapResponseToActions: (e, t, i) => (n) => {
                            const r = i().entities.aitrends.entities[e],
                                s = r?.page;
                            if (s) return [a.updateOne(e, { page: { ...s, is_saved: t.isSaved } })];
                        },
                    }),
                },
                c = { ...a, ...o, ...d },
                l = s.Z.register(c);
        },
        256727: (e, t, i) => {
            i.d(t, { Z: () => a });
            var n = i(502909),
                r = i(600823);
            const s = { ...(0, n.ZP)({ namespace: "commerceItems" }) },
                a = r.Z.register(s);
        },
        899455: (e, t, i) => {
            i.d(t, { Z: () => s });
            var n = i(772826),
                r = i(545521);
            const s = (e) => (0, r.Z)({ contextSuffix: "LIVE_COMMERCE_ITEMS_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(n.Z).fetchLiveCommerceItemsSlice, getEndpointParams: () => ({ liveEventId: e }), sliceKey: `liveCommerceItemsSlice-${e}` });
        },
        125793: (e, t, i) => {
            i.d(t, { At: () => u, d_: () => _, mF: () => p });
            var n = i(499627),
                r = i(312771);
            const s = "liveEventInterstitials",
                a = "rweb.liveEventInterstitials",
                o = Object.freeze({ REQUEST: "rweb/liveEventInterstitials/FETCH_SEEN_EVENT_IDS_REQUEST", SUCCESS: "rweb/liveEventInterstitials/FETCH_SEEN_EVENT_IDS_SUCCESS", FAILURE: "rweb/liveEventInterstitials/FETCH_SEEN_EVENT_IDS_FAILURE" }),
                d = { seenEvents: [], fetchStatus: r.ZP.NONE };
            const c = () => ({ type: o.FAILURE }),
                l = (e) => ({ type: o.SUCCESS, payload: e }),
                E = (e) => e[s].seenEvents,
                p = (e, t) => {
                    const i = E(e),
                        n = i?.find(({ eventId: e }) => e === t);
                    return !!n && Date.now() - n.lastSeenTimestamp < 24192e5;
                },
                _ =
                    () =>
                    (e, t, { userPersistence: i }) =>
                        t()[s].fetchStatus === r.ZP.LOADED
                            ? Promise.resolve()
                            : (e({ type: o.REQUEST }),
                              i
                                  .get(a)
                                  .then((t) => {
                                      e(t?.seenEvents ? l(t.seenEvents) : c());
                                  })
                                  .catch(() => {
                                      e(c());
                                  })),
                u = (e) => (t, i) => {
                    const n = [...E(i()), { eventId: e, lastSeenTimestamp: Date.now() }];
                    return (
                        t(l(n)),
                        t(
                            (
                                (e) =>
                                (t, i, { userPersistence: n }) =>
                                    n.set(a, { seenEvents: e }).catch(() => {})
                            )(n),
                        )
                    );
                };
            n.Z.register({
                [s]: function (e = d, t) {
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
        197914: (e, t, i) => {
            i.d(t, { Z: () => l });
            var n = i(112510),
                r = i(502909),
                s = i(600823),
                a = i(557281);
            const o = (e, t, i) => {
                    const n = e.entities[t.meta.entityId],
                        r = n && n.liveEventDetails;
                    return /_REQUEST$/.test(t.type) && r ? { ...e, entities: { ...e.entities, [r.id_str]: { ...n, liveEventDetails: { ...r, remind_me_subscription: { ...r.remind_me_subscription, ...i(r.remind_me_subscription) } } } } } : e;
                },
                d = (0, r.ZP)({
                    namespace: "liveEvents",
                    fetchOneContext: "FETCH_LIVE_EVENT",
                    fetchOneEndpoint: (e) => (t, i) =>
                        e
                            .withEndpoint(n.Z)
                            .fetchLiveEventMetadata(t, i)
                            .then((e) => {
                                const { eventId: i } = t;
                                return c(e, i);
                            }),
                    fetchOneParams: ([e], t, i) => ({ eventId: e, ...t }),
                    withApiErrorHandler: !1,
                    customActions: { subscribe: { reducer: (e, t) => o(e, t, (e) => ({ subscribed: !0 })), getParams: (e, t) => ({ eventId: e, params: t }), getApiMethod: (e) => e.withEndpoint(n.Z).updateRemindMeSubscription }, unSubscribe: { reducer: (e, t) => o(e, t, (e) => ({ subscribed: !1 })), getParams: (e, t) => ({ eventId: e, params: t }), getApiMethod: (e) => e.withEndpoint(n.Z).updateRemindMeSubscription } },
                });
            (d.selectHydratedTweet = (e, t) => e.tweets && (0, a.F)(e.tweets, {}, e.users, {}, t)),
                (d.selectIsTOO = (e, t) => {
                    const i = t ? d.select(e, t) : void 0;
                    return !!i && !!i.liveEventDetails && !i.liveEventDetails.attribution_user_id;
                });
            const c = (e, t) => {
                    const { entities: i, result: n } = e,
                        { audiospaces: r, broadcasts: s, liveEvents: a, slates: o, tweets: d, users: c, ...l } = i,
                        E = { liveEventDetails: a[t], audiospaces: r, broadcasts: s, response: n.response, slates: o, tweets: d, users: c };
                    return { entities: { ...l, liveEvents: { [t]: E } } };
                },
                l = s.Z.register(d);
        },
        371493: (e, t, i) => {
            i.d(t, { $N: () => I, G0: () => f, Jj: () => h, O9: () => u, S: () => m, fy: () => v, jz: () => b, nm: () => T, qk: () => E, uI: () => p });
            var n = i(912021),
                r = i(644829),
                s = i(740527),
                a = i(750085),
                o = i(555875),
                d = i(899105),
                c = i(218951);
            const l = Object.freeze({ Trends: "trends" }),
                E = Object.freeze({ WebSidebar: "web_sidebar" }),
                p = "explore-",
                _ = 9e5;
            const u = ({ contentType: e, displayLocation: t, exploreGraphQLEnabled: i = !1, focalTweetId: n, includePageConfiguration: a = !1, initialTabId: o, profileUserId: l }) => {
                    const E = e || t || "main",
                        u = (function (e, t, i, n) {
                            return i ? `${e}${t}-tweet-${i}` : n ? `${e}${t}-user-${n}` : `${e}${t}`;
                        })(i ? "explore-graphql-" : p, E, n, l),
                        m = { timelineId: u, formatResponse: d.Z, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchExplore, getEndpointParams: (i) => ({ ...i, candidate_source: e, display_location: t, focal_tweet_id: n, include_page_configuration: a, initial_tab_id: o, profile_user_id: l, entity_tokens: !1 }) }, context: i ? "FETCH_EXPLORE_GQL" : "FETCH_EXPLORE", perfKey: `${p}${E}`, staleIntervalMs: _ };
                    return i ? (0, c.Z)({ ...m, formatResponse: s.Z, network: { ...m.network, getEndpoint: (e) => e.withEndpoint(r.Z).fetchExploreGraphQL } }) : (0, c.Z)(m);
                },
                m = () => {
                    const e = "explore-sidebar-gql",
                        t = { timelineId: e, formatResponse: a.Z, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchExploreSidebarGraphQL, getEndpointParams: () => ({}) }, context: "FETCH_EXPLORE_SIDEBAR", perfKey: e, staleIntervalMs: _ };
                    return (0, c.Z)(t);
                },
                v = (e, t) => u({ exploreGraphQLEnabled: e, includePageConfiguration: !0, initialTabId: t }),
                T = (0, n.Z)((e) => u({ exploreGraphQLEnabled: e, contentType: l.Trends })),
                f = (0, n.Z)((e) => u({ exploreGraphQLEnabled: e, displayLocation: E.WebSidebar })),
                I = () => (e, t) =>
                    e(
                        (0, o.CY)(t())
                            .filter((e) => 0 === e.indexOf(p))
                            .map((e) => (0, o.$q)(e)),
                    ),
                h = (e) => {
                    const t = `trend-relevant-users-${e}-gql`,
                        i = { timelineId: t, formatResponse: a.Z, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchTrendRelevantUsersGraphQL, getEndpointParams: () => ({ trendId: e }) }, context: "FETCH_TREND_RELEVANT_USERS", perfKey: t, staleIntervalMs: _ };
                    return (0, c.Z)(i);
                },
                b = (e) => (0, c.Z)({ timelineId: `trendingEventHistoryGraphQL-${e}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchTrendHistory, getEndpointParams: () => ({ trendId: e }) }, formatResponse: a.Z, context: "FETCH_TREND_HISTORY", perfKey: "trendingEventHistoryGraphQL" });
        },
        730717: (e, t, i) => {
            i.d(t, { Z: () => s });
            var n = i(644829),
                r = i(218951);
            const s = (e, t) => (0, r.Z)({ context: "FETCH_LIVE_EVENT_TIMELINE", network: { getEndpoint: (e) => e.withEndpoint(n.Z).fetchLiveEventTimeline, getEndpointParams: (i) => ({ eventId: e, timeline_id: t, ...i }) }, perfKey: "liveEvent", timelineId: `liveEvent-${e}-${t}` });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-8ed0fac5.bee677aa.js.map

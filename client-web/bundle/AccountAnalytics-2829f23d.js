"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-2829f23d"],
    {
        969088: (e, t, r) => {
            r.d(t, { Q9: () => E, R4: () => R, dQ: () => x });
            var s = r(552322),
                i = r(193686),
                o = r(202784),
                a = r(889906),
                n = (r(703383), r(134877)),
                l = r(970430),
                u = r(598705),
                c = r(808106),
                m = r(364597),
                _ = r(544044),
                p = r(178016),
                y = r(262843);
            const d = r(882157),
                g = r(477082),
                f = r(36534),
                h = r(650615),
                w = r(323484),
                b = r(549092),
                v = 1e4,
                S = 18e4,
                k = ["Impressions", "Engagements", "ProfileVisits", "Follows", "Replies", "Likes", "Retweets", "Bookmark", "Share", "MediaViews", "VideoViews"],
                I = ["Age", "Gender", "EngagementType", "ClientAppId", "IsInNetwork"],
                M = (0, o.createContext)(null),
                T = (0, o.createContext)(null);
            function x() {
                const e = (0, o.useContext)(M);
                if (null === e) throw new Error("usePostStaticData must be used within a PostDetailsProvider");
                return e;
            }
            function E() {
                const e = (0, o.useContext)(T);
                if (null === e) throw new Error("usePostRealtimeData must be used within a PostDetailsProvider");
                return e;
            }
            const P = (e, t, r) => {
                    const s = new Map(),
                        i = Date.now(),
                        o = i - 1728e5,
                        a = 36e5 * Math.floor(i / 36e5);
                    let n = 36e5 * Math.floor(o / 36e5);
                    for (; n <= a; ) s.set(n, 0), (n += 36e5);
                    if (
                        (e &&
                            e.forEach((e) => {
                                const t = new Date(e.timestamp?.iso8601_time || 0).getTime(),
                                    i = 36e5 * Math.floor(t / 36e5),
                                    o = e.metric_values?.find((e) => e.metric_type === r)?.metric_value ?? 0;
                                s.has(i) && s.set(i, o);
                            }),
                        t)
                    ) {
                        const e = D[r];
                        let o = t;
                        o = e ? t.filter((t) => t.engagement_type === e) : "Engagements" === r ? t.filter((e) => ["Fav", "Reply", "Retweet", "Bookmark", "Share", "ProfilePic", "Follow"].includes(e.engagement_type)) : "Impressions" === r && D.Impressions ? t.filter((e) => e.engagement_type === D.Impressions) : [];
                        const n = {};
                        o.forEach((e) => {
                            const t = Number.parseInt(e.timestamp, 10),
                                r = new Date(t);
                            r.setMinutes(0, 0, 0);
                            const s = r.getTime();
                            n[s] = (n[s] || 0) + e.count;
                        });
                        const l = i - 108e5;
                        let u = 36e5 * Math.floor(l / 36e5);
                        for (; u <= a; ) s.has(u) && s.set(u, n[u] || s.get(u) || 0), (u += 36e5);
                    }
                    const l = [];
                    return (
                        s.forEach((e, t) => {
                            const r = Math.floor((i - t) / 36e5);
                            let s;
                            (s = t >= 36e5 * Math.floor(i / 36e5) ? "Now" : 1 === r ? "1h" : r < 48 ? `${r}h` : "48h"), l.push({ time: s, value: e, timestamp: t });
                        }),
                        l.sort((e, t) => e.timestamp - t.timestamp),
                        l
                    );
                },
                C = (e, t) => {
                    const r = {};
                    if (e) {
                        const s = D[t];
                        let i = e;
                        (i = s ? e.filter((e) => e.engagement_type === s) : "Engagements" === t ? e.filter((e) => ["Fav", "Reply", "Retweet", "Bookmark", "Share", "ProfilePic", "Follow"].includes(e.engagement_type)) : "Impressions" === t && D.Impressions ? e.filter((e) => e.engagement_type === D.Impressions) : []),
                            i.forEach((e) => {
                                const t = Number.parseInt(e.timestamp, 10),
                                    s = 6e4 * Math.floor(t / 6e4);
                                r[s] = (r[s] || 0) + e.count;
                            });
                    }
                    const s = [],
                        i = Date.now(),
                        o = 6e4 * Math.floor(i / 6e4);
                    for (let e = o - 354e4; e <= o; e += 6e4) s.push({ timestamp: e, value: r[e] || 0 });
                    return (
                        s.sort((e, t) => e.timestamp - t.timestamp),
                        s.map((e) => {
                            const t = Math.floor((o - e.timestamp) / 6e4);
                            let r;
                            return (r = t <= 0 ? "Now" : 1 === t ? "1m" : t < 60 ? `${t}m` : "59m"), { time: r, value: e.value, timestamp: e.timestamp };
                        })
                    );
                };
            const D = { Impressions: "Displayed", Likes: "Fav", Replies: "Reply", Retweets: "Retweet", Bookmark: "Bookmark", Share: "Share", ProfileVisits: "ProfilePic", Follows: "Follow", MediaViews: "MediaView", VideoViews: "VideoView", Engagements: null };
            function R({ children: e, restId: t, showRealtimeChart: r = !1 }) {
                return (0, s.jsx)(n.S, { fallback: (0, s.jsx)("div", { children: "Error loading post details" }), children: (0, s.jsx)(o.Suspense, { fallback: (0, s.jsx)("div", { className: "pt-16", children: (0, s.jsx)(i.P, { size: "large" }) }), children: (0, s.jsx)(N, { restId: t, showRealtimeChart: r, children: e }) }) });
            }
            function N({ children: e, restId: t, showRealtimeChart: r }) {
                const [i, n] = (0, o.useState)("Impressions"),
                    [x, E] = (0, o.useState)("Impressions"),
                    D = (0, y.x)(),
                    [R, N] = (0, o.useState)("minutely"),
                    [A, V] = (0, o.useState)({ hourly: null, minutely: null }),
                    [L, Q] = (0, o.useState)(null),
                    [O, j] = (0, o.useState)(null),
                    [q, F] = (0, o.useState)(null),
                    [H, B] = (0, o.useState)(null),
                    [z, $] = (0, o.useState)(null),
                    [G, J] = (0, o.useState)(null),
                    [U, K] = (0, o.useState)(null),
                    [W, X] = (0, o.useState)(null),
                    [Y, Z] = (0, o.useState)(null),
                    [ee, te] = (0, o.useState)(null),
                    [re, se] = (0, o.useState)(null),
                    [ie, oe] = (0, o.useState)({ hourly: "idle", minutely: "idle" }),
                    ae = (0, a.useRelayEnvironment)(),
                    ne = (0, u.c9)(t),
                    le = (0, o.useMemo)(() => new l.eJ(ne), [ne]),
                    ue = (0, o.useMemo)(() => (0, c.b)(le).getTime(), [le]),
                    ce = (0, o.useMemo)(() => (0, m.i)(new l.eJ()), []),
                    me = (0, o.useMemo)(() => Date.now() - le.getTime() >= 1728e5, [le]),
                    _e = (0, o.useMemo)(() => {
                        const e = ce,
                            r = (0, _.T)(e, -48),
                            s = new Date(ne),
                            i = (0, _.T)(s, 48);
                        return { post: { rest_id: t }, metrics: { rest_id: t, requested_metrics: k, from_time: new Date(ue).toISOString(), to_time: e.toISOString() }, first48Hours: { rest_id: t, requested_metrics: k, from_time: s.toISOString(), to_time: i.toISOString(), granularity: "Hourly" }, last48HoursOrganic: { rest_id: t, requested_metrics: k, from_time: r.toISOString(), to_time: e.toISOString(), granularity: "Hourly" }, audience: { rest_id: t, dimensions: I, from_time_incl: ue, to_time_excl: (0, p.E)(ce, 1).getTime() } };
                    }, [t, ue, ce, ne]),
                    pe = (0, a.useLazyLoadQuery)(d, _e.post),
                    ye = (0, a.useLazyLoadQuery)(g, _e.metrics),
                    de = (0, a.useLazyLoadQuery)(f, _e.first48Hours),
                    ge = (0, a.useLazyLoadQuery)(h, _e.last48HoursOrganic),
                    fe = (0, a.useLazyLoadQuery)(w, _e.audience),
                    he = (0, o.useRef)({ hourly: 0, minutely: 0 }),
                    we = (0, o.useRef)(0),
                    be = (0, o.useCallback)(
                        async (e, s = !1) => {
                            if (!r) return;
                            s || oe((t) => ({ ...t, [e]: "pending" }));
                            const i = Date.now(),
                                o = "hourly" === e ? "Hour" : "OneMinute",
                                n = "hourly" === e ? i - 108e5 : i - 36e5,
                                l = i;
                            try {
                                const r = { restId: t, fromTimestamp: n, toTimestamp: l, granularity: o },
                                    s = await (0, a.fetchQuery)(ae, b, r).toPromise(),
                                    i = s?.tweet_result_by_rest_id?.result?.uec_instant_refresh?.items ?? [];
                                V((t) => ({ ...t, [e]: i })), (he.current[e] = Date.now()), oe((t) => ({ ...t, [e]: "success" }));
                            } catch (t) {
                                V((t) => ({ ...t, [e]: null })), oe((t) => ({ ...t, [e]: "error" }));
                            }
                        },
                        [t, r, ae],
                    );
                (0, o.useEffect)(() => {
                    if (!r) return;
                    if (null !== q) {
                        const e = P(q, A.hourly, i);
                        Q(e);
                    } else Q(null);
                    const e = C(A.minutely, i);
                    j(e);
                }, [q, A, i, r]),
                    (0, o.useEffect)(() => {
                        if (!r) return;
                        (me ? [R] : ["hourly", "minutely"]).forEach((e) => {
                            "idle" === ie[e] && be(e);
                        });
                    }, [be, me, R, r, ie]),
                    (0, o.useEffect)(() => {
                        if (!r) return;
                        (() => {
                            if (!D) return;
                            const e = Date.now();
                            (me ? [R] : ["hourly", "minutely"]).forEach((t) => {
                                e - (he.current[t] || 0) >= v && "pending" !== ie[t] && be(t, !1);
                            });
                        })();
                        const e = setInterval(() => {
                            if (!D) return;
                            (me ? [R] : ["hourly", "minutely"]).forEach((e) => {
                                "pending" !== ie[e] && be(e, !0);
                            });
                        }, v);
                        return () => clearInterval(e);
                    }, [be, R, r, me, ie, D]),
                    (0, o.useEffect)(() => {
                        const e = async () => {
                            if (D)
                                try {
                                    const e = (0, a.fetchQuery)(ae, d, _e.post).toPromise(),
                                        t = (0, a.fetchQuery)(ae, g, _e.metrics).toPromise(),
                                        r = (0, a.fetchQuery)(ae, w, _e.audience).toPromise(),
                                        [s, i, o] = await Promise.all([e, t, r]);
                                    s && Z(s), i && te(i), o && se(o), (we.current = Date.now());
                                } catch (e) {}
                        };
                        (() => {
                            if (!D) return;
                            Date.now() - we.current >= S && e();
                        })();
                        const t = setInterval(() => {
                            D && e();
                        }, S);
                        return () => {
                            clearInterval(t);
                        };
                    }, [D, ae, _e]),
                    (0, o.useEffect)(() => {
                        const e = ge?.tweet_result_by_rest_id?.result?.organic_metrics_time_series;
                        F(e || []);
                    }, [ge]),
                    (0, o.useEffect)(() => {
                        const e = Y ?? pe,
                            t = e?.tweet_result_by_rest_id?.result;
                        if (t && "Tweet" === t.__typename) {
                            const e = (function (e) {
                                if (!e || "Tweet" !== e.__typename) return null;
                                const t = e,
                                    r = t.core?.user_results?.result?.legacy?.verified_type || (t.core?.user_results?.result?.is_blue_verified ? "user" : ""),
                                    s = "Business" === r ? "business" : "Government" === r ? "government" : "user";
                                let i, o;
                                if (t.core?.user_results?.result?.affiliates_highlighted_label?.label) {
                                    const e = t.core.user_results.result.affiliates_highlighted_label.label;
                                    i = { label: e.description || "Company", url: e.badge?.url || "" };
                                }
                                if (t.reply_to_results?.result) {
                                    const e = t.reply_to_results.result;
                                    if ("Tweet" === e.__typename && e.legacy) {
                                        const r = e.core?.user_results?.result?.legacy?.verified_type || (e.core?.user_results?.result?.is_blue_verified ? "user" : ""),
                                            s = "Business" === r ? "business" : "Government" === r ? "government" : "user";
                                        let i;
                                        if (e.core?.user_results?.result?.affiliates_highlighted_label?.label) {
                                            const t = e.core.user_results.result.affiliates_highlighted_label.label;
                                            i = { label: t.description || "Company", url: t.badge?.url || "" };
                                        }
                                        o = { id: e.rest_id || "", display_text_range: e.legacy.display_text_range ? Array.from(e.legacy.display_text_range) : [], text: e.legacy.full_text || "", createdAt: e.legacy.created_at ? new Date(e.legacy.created_at) : new Date(), author: { id: e.core?.user_results?.result?.rest_id || "", name: e.core?.user_results?.result?.legacy?.name || e.core?.user_results?.result?.legacy?.screen_name || t.legacy?.in_reply_to_screen_name || "", screenName: e.core?.user_results?.result?.legacy?.screen_name || t.legacy?.in_reply_to_screen_name || "", profileImageUrl: e.core?.user_results?.result?.legacy?.profile_image_url_https || "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png", verifiedType: s, badges: { ...(s && { verifiedType: s }), ...(i && { affiliation: i }) } }, rawPublicMetrics: { likeCount: e.legacy?.favorite_count?.toString() || "0", replyCount: e.legacy?.reply_count?.toString() || "0", repostCount: e.legacy?.retweet_count?.toString() || "0", quoteCount: "0", bookmarkCount: e.legacy?.bookmark_count?.toString() || "0", impressionCount: e.views?.count?.toString() || "0" }, publicMetrics: { likes: Number.parseInt(e.legacy?.favorite_count?.toString() || "0", 10), replies: Number.parseInt(e.legacy?.reply_count?.toString() || "0", 10), reposts: Number.parseInt(e.legacy?.retweet_count?.toString() || "0", 10), quotes: 0, bookmarks: Number.parseInt(e.legacy?.bookmark_count?.toString() || "0", 10), impressions: Number.parseInt(e.views?.count?.toString() || "0", 10) } };
                                    }
                                }
                                const a = { id: t.rest_id, text: t.legacy?.full_text || "", display_text_range: t.legacy?.display_text_range ? Array.from(t.legacy.display_text_range) : void 0, createdAt: t.legacy?.created_at ? new Date(t.legacy.created_at) : new Date(), author: { id: t.core?.user_results?.result?.rest_id || "", name: t.core?.user_results?.result?.legacy?.name || "", screenName: t.core?.user_results?.result?.legacy?.screen_name || "", verifiedType: s, profileImageUrl: t.core?.user_results?.result?.legacy?.profile_image_url_https || "", badges: { ...(s && { verifiedType: s }), ...(i && { affiliation: i }) } }, rawPublicMetrics: { likeCount: t.legacy?.favorite_count?.toString() || "0", replyCount: t.legacy?.reply_count?.toString() || "0", repostCount: t.legacy?.retweet_count?.toString() || "0", quoteCount: "0", bookmarkCount: t.legacy?.bookmark_count?.toString() || "0", impressionCount: t.views?.count?.toString() || "0" }, publicMetrics: { likes: Number.parseInt(t.legacy?.favorite_count?.toString() || "0", 10), replies: Number.parseInt(t.legacy?.reply_count?.toString() || "0", 10), reposts: Number.parseInt(t.legacy?.retweet_count?.toString() || "0", 10), quotes: 0, bookmarks: Number.parseInt(t.legacy?.bookmark_count?.toString() || "0", 10), impressions: Number.parseInt(t.views?.count?.toString() || "0", 10) }, parentPost: o };
                                return (
                                    t.legacy?.entities?.media?.length &&
                                        (a.media = t.legacy.entities.media
                                            .filter((e) => null != e && "string" == typeof e.type && "string" == typeof e.media_url_https && "string" == typeof e.id_str)
                                            .map((e) => {
                                                const t = [...(e.video_info?.variants?.filter((e) => e && "string" == typeof e.url && "string" == typeof e.content_type).map((e) => ({ url: e.url, contentType: e.content_type, bitrate: e.bitrate ?? 0 })) ?? [])].sort((e, t) => (t.bitrate || 0) - (e.bitrate || 0)),
                                                    r = "animated_gif" === e.type && t.length > 0 ? t[0]?.url || e.media_url_https || "" : e.media_url_https || "",
                                                    s = null === e.video_info?.duration_millis ? void 0 : e.video_info?.duration_millis,
                                                    i = e.media_url_https || "";
                                                return { type: e.type || "", url: r, duration: s, aspectRatio: e.video_info?.aspect_ratio ? Array.from(e.video_info.aspect_ratio) : void 0, altText: e.ext_alt_text ?? void 0, variants: t, previewImage: i };
                                            })),
                                    a
                                );
                            })(t);
                            B(e);
                        }
                    }, [pe, Y]),
                    (0, o.useEffect)(() => {
                        const e = re ?? fe,
                            t = e?.tweet_result_by_rest_id?.result;
                        if ("Tweet" === t?.__typename) {
                            const e = Array.from(t.uec_metrics_daily_time_series_count ?? []).filter((e) => null !== e && "object" == typeof e && "age" in e && null != e.age && "client_app_id" in e && null != e.client_app_id && "engagement_type" in e && null != e.engagement_type && "gender" in e && null != e.gender && "is_in_network" in e && null != e.is_in_network),
                                r = Array.from(t.uec_country_metrics_daily_time_series_count ?? []).filter((e) => null !== e && "object" == typeof e && "country" in e && null != e.country && "engagement_type" in e && null != e.engagement_type);
                            X({ rawAudienceMetrics: e, rawCountryMetrics: r });
                        }
                    }, [fe, re]),
                    (0, o.useEffect)(() => {
                        const e = ee ?? ye,
                            t = e?.tweet_result_by_rest_id?.result;
                        if ("Tweet" === t?.__typename && H && W) {
                            const e = ("Tweet" === ye.tweet_result_by_rest_id?.result?.__typename && ye.tweet_result_by_rest_id.result?.organic_metrics_total) || [],
                                t = {};
                            Array.isArray(e) &&
                                e.forEach((e) => {
                                    e?.metric_type && (t[e.metric_type] = Number(e.metric_value) || 0);
                                });
                            const r = t.Engagements || 0,
                                s = t.Impressions || 0,
                                i = s > 0 ? (r / s) * 100 : 0,
                                o = { impressions: t.Impressions || 0, engagements: r, likes: t.Likes || 0, replies: t.Replies || 0, retweets: t.Retweets || 0, quotes: t.QuoteTweets || 0, bookmarks: t.Bookmark || 0, profileVisits: t.ProfileVisits || 0, mediaViews: t.MediaViews || 0, videoViews: t.VideoViews || 0, share: t.Share || 0, follows: t.Follows || 0, formattedEngagementRate: `${i.toFixed(1)}%`, audienceMetrics: W },
                                a = H.author.badges ? { verifiedType: H.author.badges.verifiedType || H.author.verifiedType, isProtected: H.author.badges.isProtected, isSubscriber: H.author.badges.isSubscriber, isTranslator: H.author.badges.isTranslator, affiliation: H.author.badges.affiliation } : void 0,
                                n = { id: H.id, text: H.text, createdAt: H.createdAt, display_text_range: H.display_text_range, author: { ...H.author, verifiedType: H.author.verifiedType || "", badges: a }, publicMetrics: { impressions: o.impressions || 0, likes: o.likes || 0, replies: o.replies || 0, reposts: o.retweets || 0, quotes: o.quotes || 0, bookmarks: o.bookmarks || 0 }, media: H.media };
                            $(o), J(n);
                        }
                    }, [ye, ee, H, W]),
                    (0, o.useEffect)(() => {
                        const e = de.tweet_result_by_rest_id?.result;
                        if ("Tweet" === e?.__typename) {
                            const t = e?.organic_metrics_time_series || [],
                                r = {},
                                s = Array.from(t).reduce(
                                    (e, t) => (
                                        t.metric_values?.forEach((t) => {
                                            t.metric_type && !e.includes(t.metric_type) && e.push(t.metric_type);
                                        }),
                                        e
                                    ),
                                    [],
                                ),
                                i = (0, _.T)(new Date(ne), 47).getTime();
                            s.forEach((e) => {
                                const s = t.map((t) => ({ timestamp: new Date(t.timestamp?.iso8601_time || "").getTime().toString(), value: t.metric_values?.find((t) => t.metric_type === e)?.metric_value ?? 0 })),
                                    o = (0, u.Mb)(s, (e) => ({ timestamp: e, value: 0 }), "hourly", ne, i);
                                r[e.toLowerCase()] = o.map((e) => ({ time: `${Math.floor((Number(e.timestamp) - ne) / 36e5)}h`, value: e.value ?? 0, timestamp: Number(e.timestamp) }));
                            }),
                                K(r);
                        }
                    }, [de, ne]);
                const ve = (0, o.useMemo)(() => {
                        if (!r) return !1;
                        const e = ie[R];
                        return "pending" === e || (("success" === e || "error" === e) && !(null !== ("hourly" === R ? L : O))) || ("hourly" === R && !(null !== q));
                    }, [r, ie, R, L, O, q]),
                    Se = (0, o.useMemo)(() => (H && z && G && U ? { postData: H, metrics: z, timeRange: { from: new l.eJ(ue), to: ce }, restId: t, first48HoursData: U, formattedPost: G, overviewSelectedMetric: i, setOverviewSelectedMetric: n, audienceSelectedMetric: x, setAudienceSelectedMetric: E, showRealtimeChart: r, isPostOlderThan48Hours: me } : null), [H, z, G, U, ue, ce, t, i, x, r, me]),
                    ke = (0, o.useMemo)(() => ({ realtimeHourlyData: L, realtimeMinutelyData: O, isRealtimeLoading: ve, realtimeActiveTab: R, setRealtimeActiveTab: N }), [L, O, ve, R]);
                return Se ? (0, s.jsx)(M.Provider, { value: Se, children: (0, s.jsx)(T.Provider, { value: ke, children: e }) }) : null;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-2829f23d.875d830a.js.map

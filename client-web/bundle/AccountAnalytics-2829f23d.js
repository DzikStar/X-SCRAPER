"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-2829f23d"],
    {
        969088: (e, t, r) => {
            r.d(t, { Q9: () => T, R4: () => P, dQ: () => M });
            var s = r(552322),
                i = r(702024),
                o = r(202784),
                a = r(889906),
                n = (r(703383), r(607499)),
                l = r(970430),
                u = r(598705),
                c = r(808106),
                m = r(364597),
                _ = r(544044),
                p = r(178016);
            const d = r(882157),
                y = r(477082),
                g = r(36534),
                f = r(650615),
                h = r(323484),
                w = r(549092),
                b = 1e4,
                v = ["Impressions", "Engagements", "ProfileVisits", "Follows", "Replies", "Likes", "Retweets", "Bookmark", "Share", "MediaViews", "VideoViews"],
                S = ["Age", "Gender", "EngagementType", "ClientAppId", "IsInNetwork"],
                k = (0, o.createContext)(null),
                I = (0, o.createContext)(null);
            function M() {
                const e = (0, o.useContext)(k);
                if (null === e) throw new Error("usePostStaticData must be used within a PostDetailsProvider");
                return e;
            }
            function T() {
                const e = (0, o.useContext)(I);
                if (null === e) throw new Error("usePostRealtimeData must be used within a PostDetailsProvider");
                return e;
            }
            const E = (e, t, r) => {
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
                        const e = C[r];
                        let o = t;
                        o = e ? t.filter((t) => t.engagement_type === e) : "Engagements" === r ? t.filter((e) => ["Fav", "Reply", "Retweet", "Bookmark", "Share", "ProfilePic", "Follow"].includes(e.engagement_type)) : "Impressions" === r && C.Impressions ? t.filter((e) => e.engagement_type === C.Impressions) : [];
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
                x = (e, t) => {
                    const r = {};
                    if (e) {
                        const s = C[t];
                        let i = e;
                        (i = s ? e.filter((e) => e.engagement_type === s) : "Engagements" === t ? e.filter((e) => ["Fav", "Reply", "Retweet", "Bookmark", "Share", "ProfilePic", "Follow"].includes(e.engagement_type)) : "Impressions" === t && C.Impressions ? e.filter((e) => e.engagement_type === C.Impressions) : []),
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
            const C = { Impressions: "Displayed", Likes: "Fav", Replies: "Reply", Retweets: "Retweet", Bookmark: "Bookmark", Share: "Share", ProfileVisits: "ProfilePic", Follows: "Follow", MediaViews: "MediaView", VideoViews: "VideoView", Engagements: null };
            function P({ children: e, restId: t, showRealtimeChart: r = !1 }) {
                return (0, s.jsx)(n.S, { fallback: (0, s.jsx)("div", { children: "Error loading post details" }), children: (0, s.jsx)(o.Suspense, { fallback: (0, s.jsx)("div", { className: "pt-16", children: (0, s.jsx)(i.P, { size: "large" }) }), children: (0, s.jsx)(R, { restId: t, showRealtimeChart: r, children: e }) }) });
            }
            function R({ children: e, restId: t, showRealtimeChart: r }) {
                const [i, n] = (0, o.useState)("Impressions"),
                    [M, T] = (0, o.useState)("Impressions"),
                    [C, P] = (0, o.useState)("undefined" == typeof document || "visible" === document.visibilityState),
                    [R, D] = (0, o.useState)("hourly"),
                    [N, A] = (0, o.useState)({ hourly: null, minutely: null }),
                    [V, L] = (0, o.useState)(null),
                    [O, j] = (0, o.useState)(null),
                    [q, F] = (0, o.useState)(null),
                    [H, Q] = (0, o.useState)(null),
                    [B, z] = (0, o.useState)(null),
                    [$, G] = (0, o.useState)(null),
                    [J, U] = (0, o.useState)(null),
                    [K, W] = (0, o.useState)(null),
                    [X, Y] = (0, o.useState)({ hourly: "idle", minutely: "idle" }),
                    Z = (0, a.useRelayEnvironment)(),
                    ee = (0, u.c9)(t),
                    te = new l.eJ(ee),
                    re = (0, o.useMemo)(() => (0, c.b)(te).getTime(), [te]),
                    se = (0, o.useMemo)(() => (0, m.i)(new l.eJ()), []),
                    ie = (0, o.useMemo)(() => Date.now() - te.getTime() >= 1728e5, [te]),
                    oe = (0, o.useMemo)(() => {
                        const e = se,
                            r = (0, _.T)(e, -48);
                        return { post: { rest_id: t }, metrics: { rest_id: t, requested_metrics: v, from_time: new Date(re).toISOString(), to_time: se.toISOString() }, first48Hours: { rest_id: t, requested_metrics: v, from_time: te.toISOString(), to_time: (0, _.T)(te, 48).toISOString(), granularity: "Hourly" }, last48HoursOrganic: { rest_id: t, requested_metrics: v, from_time: r.toISOString(), to_time: e.toISOString(), granularity: "Hourly" }, audience: { rest_id: t, dimensions: S, from_time_incl: re, to_time_excl: (0, p.E)(se, 1).getTime() } };
                    }, [t, re, se, te]),
                    ae = (0, a.useLazyLoadQuery)(d, oe.post),
                    ne = (0, a.useLazyLoadQuery)(y, oe.metrics),
                    le = (0, a.useLazyLoadQuery)(g, oe.first48Hours),
                    ue = (0, a.useLazyLoadQuery)(f, oe.last48HoursOrganic),
                    ce = (0, a.useLazyLoadQuery)(h, oe.audience),
                    me = (0, o.useCallback)(
                        async (e, s = !1) => {
                            if (!r) return;
                            s || Y((t) => ({ ...t, [e]: "pending" }));
                            const i = Date.now(),
                                o = "hourly" === e ? "Hour" : "OneMinute",
                                n = "hourly" === e ? i - 108e5 : i - 36e5,
                                l = i;
                            try {
                                const r = { restId: t, fromTimestamp: n, toTimestamp: l, granularity: o },
                                    s = await (0, a.fetchQuery)(Z, w, r).toPromise(),
                                    i = s?.tweet_result_by_rest_id?.result?.uec_instant_refresh?.items ?? [];
                                A((t) => ({ ...t, [e]: i })), Y((t) => ({ ...t, [e]: "success" }));
                            } catch (t) {
                                A((t) => ({ ...t, [e]: null })), Y((t) => ({ ...t, [e]: "error" }));
                            }
                        },
                        [t, r, Z],
                    );
                (0, o.useEffect)(() => {
                    if (!r) return;
                    if (null !== q) {
                        const e = E(q, N.hourly, i);
                        L(e);
                    } else L(null);
                    const e = x(N.minutely, i);
                    j(e);
                }, [q, N, i, r]),
                    (0, o.useEffect)(() => {
                        if (!r) return;
                        (ie ? [R] : ["hourly", "minutely"]).forEach((e) => {
                            "idle" === X[e] && me(e);
                        });
                    }, [me, ie, R, r, X]),
                    (0, o.useEffect)(() => {
                        if ("undefined" == typeof document) return;
                        const e = () => {
                            P("visible" === document.visibilityState);
                        };
                        return (
                            document.addEventListener("visibilitychange", e),
                            () => {
                                document.removeEventListener("visibilitychange", e);
                            }
                        );
                    }, []),
                    (0, o.useEffect)(() => {
                        if (!r || !C) return;
                        const e = setInterval(() => {
                            (ie ? [R] : ["hourly", "minutely"]).forEach((e) => {
                                "pending" !== X[e] && me(e, !0);
                            });
                        }, b);
                        return () => clearInterval(e);
                    }, [me, R, r, ie, X, C]),
                    (0, o.useEffect)(() => {
                        const e = ue?.tweet_result_by_rest_id?.result?.organic_metrics_time_series;
                        F(e || []);
                    }, [ue]),
                    (0, o.useEffect)(() => {
                        const e = ae.tweet_result_by_rest_id?.result;
                        if (e && "Tweet" === e.__typename) {
                            const t = (function (e) {
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
                            })(e);
                            Q(t);
                        }
                    }, [ae]),
                    (0, o.useEffect)(() => {
                        const e = ne.tweet_result_by_rest_id?.result;
                        if ("Tweet" === e?.__typename && H && K) {
                            const e = ("Tweet" === ne.tweet_result_by_rest_id?.result?.__typename && ne.tweet_result_by_rest_id.result?.organic_metrics_total) || [],
                                t = {};
                            Array.isArray(e) &&
                                e.forEach((e) => {
                                    e?.metric_type && (t[e.metric_type] = Number(e.metric_value) || 0);
                                });
                            const r = t.Engagements || 0,
                                s = t.Impressions || 0,
                                i = s > 0 ? (r / s) * 100 : 0,
                                o = { impressions: t.Impressions || 0, engagements: r, likes: t.Likes || 0, replies: t.Replies || 0, retweets: t.Retweets || 0, quotes: t.QuoteTweets || 0, bookmarks: t.Bookmark || 0, profileVisits: t.ProfileVisits || 0, mediaViews: t.MediaViews || 0, videoViews: t.VideoViews || 0, share: t.Share || 0, follows: t.Follows || 0, formattedEngagementRate: `${i.toFixed(1)}%`, audienceMetrics: K },
                                a = H.author.badges ? { verifiedType: H.author.badges.verifiedType || H.author.verifiedType, isProtected: H.author.badges.isProtected, isSubscriber: H.author.badges.isSubscriber, isTranslator: H.author.badges.isTranslator, affiliation: H.author.badges.affiliation } : void 0,
                                n = { id: H.id, text: H.text, createdAt: H.createdAt, display_text_range: H.display_text_range, author: { ...H.author, verifiedType: H.author.verifiedType || "", badges: a }, publicMetrics: { impressions: o.impressions || 0, likes: o.likes || 0, replies: o.replies || 0, reposts: o.retweets || 0, quotes: o.quotes || 0, bookmarks: o.bookmarks || 0 }, media: H.media };
                            z(o), G(n);
                        }
                    }, [ne, H, K]),
                    (0, o.useEffect)(() => {
                        const e = le.tweet_result_by_rest_id?.result;
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
                                i = (0, _.T)(new Date(ee), 47).getTime();
                            s.forEach((e) => {
                                const s = t.map((t) => ({ timestamp: new Date(t.timestamp?.iso8601_time || "").getTime().toString(), value: t.metric_values?.find((t) => t.metric_type === e)?.metric_value ?? 0 })),
                                    o = (0, u.Mb)(s, (e) => ({ timestamp: e, value: 0 }), "hourly", ee, i);
                                r[e.toLowerCase()] = o.map((e) => ({ time: `${Math.floor((Number(e.timestamp) - ee) / 36e5)}h`, value: e.value ?? 0, timestamp: Number(e.timestamp) }));
                            }),
                                U(r);
                        }
                    }, [le, ee]),
                    (0, o.useEffect)(() => {
                        const e = ce.tweet_result_by_rest_id?.result;
                        if ("Tweet" === e?.__typename) {
                            const t = Array.from(e.uec_metrics_daily_time_series_count ?? []).filter((e) => null !== e && "object" == typeof e && "age" in e && null != e.age && "client_app_id" in e && null != e.client_app_id && "engagement_type" in e && null != e.engagement_type && "gender" in e && null != e.gender && "is_in_network" in e && null != e.is_in_network),
                                r = Array.from(e.uec_country_metrics_daily_time_series_count ?? []).filter((e) => null !== e && "object" == typeof e && "country" in e && null != e.country && "engagement_type" in e && null != e.engagement_type);
                            W({ rawAudienceMetrics: t, rawCountryMetrics: r });
                        }
                    }, [ce]);
                const _e = (0, o.useMemo)(() => {
                        if (!r) return !1;
                        const e = X[R];
                        return "pending" === e || (("success" === e || "error" === e) && !(null !== ("hourly" === R ? V : O))) || ("hourly" === R && !(null !== q));
                    }, [r, X, R, V, O, q]),
                    pe = (0, o.useMemo)(() => (H && B && $ && J ? { postData: H, metrics: B, timeRange: { from: new l.eJ(re), to: se }, restId: t, first48HoursData: J, formattedPost: $, overviewSelectedMetric: i, setOverviewSelectedMetric: n, audienceSelectedMetric: M, setAudienceSelectedMetric: T, showRealtimeChart: r, isPostOlderThan48Hours: ie } : null), [H, B, $, J, re, se, t, i, M, r, ie]),
                    de = (0, o.useMemo)(() => ({ realtimeHourlyData: V, realtimeMinutelyData: O, isRealtimeLoading: _e, realtimeActiveTab: R, setRealtimeActiveTab: D }), [V, O, _e, R]);
                return pe ? (0, s.jsx)(k.Provider, { value: pe, children: (0, s.jsx)(I.Provider, { value: de, children: e }) }) : null;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-2829f23d.3742277a.js.map
